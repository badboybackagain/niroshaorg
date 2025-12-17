import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { existsSync } from 'fs';

// Get current directory for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Load environment variables (if .env file exists)
dotenv.config();

// Try to load config from config.js file (for hosting without env var support)
let config = null;
const configPath = join(__dirname, 'config.js');
if (existsSync(configPath)) {
  try {
    const configModule = await import('./config.js');
    config = configModule.config || configModule.default;
  } catch (error) {
    console.warn('Could not load config.js:', error.message);
  }
}

// Debug: Check if credentials are loaded
if (process.env.NODE_ENV !== 'production') {
  console.log('\n=== Configuration Check ===');
  const gmailUser = config?.gmail?.user || process.env.GMAIL_USER;
  const gmailPassword = config?.gmail?.password || process.env.GMAIL_PASSWORD;
  console.log('Config source:', config ? 'config.js file' : 'environment variables');
  console.log('GMAIL_USER:', gmailUser ? `Set (${gmailUser})` : '❌ NOT SET');
  console.log('GMAIL_PASSWORD:', gmailPassword ? `Set (${gmailPassword.length} characters)` : '❌ NOT SET');
  console.log('PORT:', config?.port || process.env.PORT || '3000 (default)');
  console.log('========================\n');
}

const app = express();
const PORT = config?.port || process.env.PORT || 3000;

// Middleware
// Get allowed origins from config file or environment variables
const allowedOrigins = config?.allowedOrigins || 
  (process.env.ALLOWED_ORIGINS 
    ? process.env.ALLOWED_ORIGINS.split(',').map(origin => origin.trim())
    : ['http://localhost:5173', 'http://localhost:4173', 'http://localhost:3000', '*']);

app.use(cors({
  origin: function (origin, callback) {
    // Allow requests with no origin (like mobile apps or curl requests)
    if (!origin) return callback(null, true);
    
    // In development, allow all localhost origins
    if (process.env.NODE_ENV !== 'production') {
      if (origin.includes('localhost') || origin.includes('127.0.0.1')) {
        return callback(null, true);
      }
    }
    
    // Check against allowed origins
    if (allowedOrigins.includes('*') || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(express.json());

// Initialize nodemailer transporter
let transporter = null;

function getTransporter() {
  if (transporter) {
    return transporter;
  }

  // Try to get credentials from config file first, then environment variables
  const gmailUser = (config?.gmail?.user || process.env.GMAIL_USER || '').trim();
  const gmailPassword = (config?.gmail?.password || process.env.GMAIL_PASSWORD || '').trim();

  if (!gmailUser || !gmailPassword) {
    throw new Error('Gmail credentials not configured. Please set GMAIL_USER and GMAIL_PASSWORD in config.js or environment variables.');
  }

  // Log configuration (without password) for debugging
  console.log('Gmail configuration:');
  console.log('  User:', gmailUser);
  console.log('  Password length:', gmailPassword.length, 'characters');
  console.log('  Password starts with:', gmailPassword.substring(0, 2) + '...');

  transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: gmailUser,
      pass: gmailPassword
    },
    // Add additional options for better compatibility
    tls: {
      rejectUnauthorized: false
    }
  });

  // Verify connection
  transporter.verify(function (error, success) {
    if (error) {
      console.error('SMTP connection error:', error);
      console.error('Error code:', error.code);
      console.error('Error command:', error.command);
      console.error('\nTroubleshooting tips:');
      console.error('1. Make sure you\'re using an App Password (16 characters, no spaces)');
      console.error('2. Verify 2-Step Verification is enabled on your Google Account');
      console.error('3. Check that GMAIL_USER is your full email address (e.g., yourname@gmail.com)');
      console.error('4. Ensure there are no extra spaces in your .env file');
      console.error('5. Try generating a new App Password');
    } else {
      console.log('✓ SMTP server is ready to send emails');
    }
  });

  return transporter;
}

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'ok', message: 'Email server is running' });
});

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Email server is running' });
});

// Contact form email endpoint
// Support both /api/contact and /contact (in case proxy strips /api)
app.post('/api/contact', async (req, res) => {
  handleContactForm(req, res);
});

app.post('/contact', async (req, res) => {
  handleContactForm(req, res);
});

async function handleContactForm(req, res) {
  try {
    const { fullName, countryCode, whatsappNumber, email, serviceInterested, comments } = req.body;

    // Validate required fields
    if (!fullName || !email || !whatsappNumber || !serviceInterested || serviceInterested.length === 0) {
      return res.status(400).json({ 
        error: 'Missing required fields',
        message: 'Please fill in all required fields'
      });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ 
        error: 'Invalid email format',
        message: 'Please enter a valid email address'
      });
    }

    const mailTransporter = getTransporter();

    // Format services list
    const servicesList = Array.isArray(serviceInterested) 
      ? serviceInterested.join(', ') 
      : serviceInterested;

      // Get Gmail user from config or environment
      const gmailUser = config?.gmail?.user || process.env.GMAIL_USER;
      
      // Email to info@nirosha.org (form submission)
      const adminEmailContent = {
        from: `"Nirosha Contact Form" <${gmailUser}>`,
      to: 'info@nirosha.org',
      subject: `New Contact Form Submission from ${fullName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #4CAF50; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          
          <div style="background-color: #f9f9f9; padding: 20px; border-radius: 5px; margin: 20px 0;">
            <p><strong>Full Name:</strong> ${fullName}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            <p><strong>Phone:</strong> ${countryCode} ${whatsappNumber}</p>
            <p><strong>Services Interested In:</strong> ${servicesList}</p>
            ${comments ? `<p><strong>Comments/Project Details:</strong></p><p style="background-color: white; padding: 15px; border-left: 4px solid #4CAF50; margin-top: 10px;">${comments.replace(/\n/g, '<br>')}</p>` : ''}
          </div>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; color: #666; font-size: 12px;">
            <p>This email was sent from the contact form on nirosha.org</p>
            <p>Submitted at: ${new Date().toLocaleString('en-US', { timeZone: 'Asia/Kolkata' })}</p>
          </div>
        </div>
      `,
      text: `
New Contact Form Submission

Full Name: ${fullName}
Email: ${email}
Phone: ${countryCode} ${whatsappNumber}
Services Interested In: ${servicesList}
${comments ? `Comments/Project Details:\n${comments}` : ''}

Submitted at: ${new Date().toLocaleString('en-US', { timeZone: 'Asia/Kolkata' })}
      `
    };

      // Thank you email to the user
      const userEmailContent = {
        from: `"Nirosha Enterprises" <${gmailUser}>`,
      to: email,
      subject: 'Thank you for contacting Nirosha Enterprises',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #4CAF50; border-bottom: 2px solid #4CAF50; padding-bottom: 10px;">
            Thank You for Contacting Us!
          </h2>
          
          <p>Dear ${fullName},</p>
          
          <p>Thank you for reaching out to <strong>Nirosha Enterprises</strong>. We have received your inquiry and our team will get back to you soon.</p>
          
          <div style="background-color: #f9f9f9; padding: 20px; border-radius: 5px; margin: 20px 0;">
            <p><strong>Your Inquiry Details:</strong></p>
            <p><strong>Services Interested In:</strong> ${servicesList}</p>
            ${comments ? `<p><strong>Your Message:</strong></p><p style="background-color: white; padding: 15px; border-left: 4px solid #4CAF50; margin-top: 10px;">${comments.replace(/\n/g, '<br>')}</p>` : ''}
          </div>
          
          <p>We typically respond within 24-48 hours. If you have any urgent questions, please feel free to contact us directly:</p>
          
          <ul style="list-style: none; padding: 0;">
            <li style="margin: 10px 0;">📧 Email: <a href="mailto:info@nirosha.org">info@nirosha.org</a></li>
            <li style="margin: 10px 0;">📱 Phone: <a href="tel:+919403891938">+91-9403891938</a></li>
            <li style="margin: 10px 0;">💬 WhatsApp: <a href="https://wa.me/919403891938">+91-9403891938</a></li>
          </ul>
          
          <p>We look forward to helping you transform your digital presence!</p>
          
          <p>Best regards,<br>
          <strong>The Nirosha Enterprises Team</strong></p>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; color: #666; font-size: 12px;">
            <p>Nirosha Enterprises | Web Designer</p>
            <p>Hadapsar, Pune, Maharashtra, India</p>
            <p><a href="https://nirosha.org">www.nirosha.org</a></p>
          </div>
        </div>
      `,
      text: `
Thank You for Contacting Us!

Dear ${fullName},

Thank you for reaching out to Nirosha Enterprises. We have received your inquiry and our team will get back to you soon.

Your Inquiry Details:
Services Interested In: ${servicesList}
${comments ? `Your Message:\n${comments}` : ''}

We typically respond within 24-48 hours. If you have any urgent questions, please feel free to contact us directly:

Email: info@nirosha.org
Phone: +91-9403891938
WhatsApp: +91-9403891938

We look forward to helping you transform your digital presence!

Best regards,
The Nirosha Enterprises Team

Nirosha Enterprises | Web Designer
Hadapsar, Pune, Maharashtra, India
www.nirosha.org
      `
    };

    // Send both emails
    const [adminResult, userResult] = await Promise.all([
      mailTransporter.sendMail(adminEmailContent),
      mailTransporter.sendMail(userEmailContent)
    ]);

    console.log('Admin email sent:', adminResult.messageId);
    console.log('User email sent:', userResult.messageId);

    return res.status(200).json({ 
      success: true, 
      message: 'Emails sent successfully',
      adminEmailId: adminResult.messageId,
      userEmailId: userResult.messageId
    });

  } catch (error) {
    console.error('Error sending email:', error);
    return res.status(500).json({ 
      error: 'Failed to send email', 
      message: error.message || 'An error occurred while sending the email. Please try again later.'
    });
  }
}

// Start server
app.listen(PORT, () => {
  console.log(`Email server running on port ${PORT}`);
  console.log(`Health check: http://localhost:${PORT}/health`);
  console.log(`Contact endpoint: http://localhost:${PORT}/api/contact`);
});
