import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { existsSync } from 'fs';
// FormData is available globally in Node.js 18+, but we can import it explicitly if needed

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
  console.log('📧 Contact form request received');
  console.log('Request method:', req.method);
  console.log('Request URL:', req.url);
  console.log('Request origin:', req.headers.origin);
  console.log('Request body:', JSON.stringify(req.body, null, 2));
  
  try {
    const { fullName, countryCode, whatsappNumber, email, serviceInterested, comments } = req.body;

    // Validate required fields
    if (!fullName || !email || !whatsappNumber || !serviceInterested || serviceInterested.length === 0) {
      console.log('❌ Validation failed - missing required fields');
      console.log('Received:', { fullName: !!fullName, email: !!email, whatsappNumber: !!whatsappNumber, serviceInterested: serviceInterested });
      return res.status(400).json({ 
        error: 'Missing required fields',
        message: 'Please fill in all required fields'
      });
    }
    
    console.log('✅ Validation passed, processing email...');

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

    // Send form data to webhook
    try {
      console.log('🔗 Sending form data to webhook...');
      const webhookUrl = 'https://automate.nirosha.org/webhook/niroshawebsiteform';
      const webhookPayload = {
        fullName,
        countryCode,
        whatsappNumber,
        email,
        serviceInterested: Array.isArray(serviceInterested) ? serviceInterested : [serviceInterested],
        comments: comments || '',
        submittedAt: new Date().toISOString(),
        source: 'nirosha.org-contact-form'
      };

      const webhookResponse = await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(webhookPayload)
      });

      if (webhookResponse.ok) {
        console.log('✅ Webhook called successfully');
      } else {
        const errorText = await webhookResponse.text();
        console.error('⚠️ Webhook returned error status:', webhookResponse.status, errorText);
        // Don't fail the whole request if webhook fails
      }
    } catch (webhookError) {
      console.error('⚠️ Error calling webhook:', webhookError.message);
      // Don't fail the whole request if webhook fails
    }

      // Get Gmail user from config or environment
      const gmailUser = config?.gmail?.user || process.env.GMAIL_USER;
      
      // Email to info@nirosha.org (form submission)
      const adminEmailContent = {
        from: `"Team Nirosha Contact Form" <${gmailUser}>`,
      to: 'info@nirosha.org',
      replyTo: email, // Set reply-to to the form submitter's email
      subject: `New Contact Form Submission from ${fullName}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
        </head>
        <body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #f5f5f5;">
          <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff;">
            <!-- Header with Logo -->
            <div style="background-color: #1a1a2e; padding: 30px 20px; text-align: center;">
              <img src="https://nirosha.org/logo.png" alt="Team Nirosha Logo" style="max-width: 180px; height: auto; margin-bottom: 10px;" />
              <h1 style="color: #ffffff; margin: 10px 0 0 0; font-size: 24px; font-weight: 600;">New Contact Form Submission</h1>
            </div>
            
            <!-- Content -->
            <div style="padding: 30px 20px;">
              <div style="background-color: #f8f9fa; padding: 25px; border-radius: 8px; margin-bottom: 20px; border-left: 4px solid #667eea;">
                <h2 style="color: #333; margin-top: 0; font-size: 18px; font-weight: 600; margin-bottom: 20px;">Contact Information</h2>
                
                <table style="width: 100%; border-collapse: collapse;">
                  <tr>
                    <td style="padding: 12px 0; color: #666; font-size: 14px; width: 140px; vertical-align: top;"><strong>Full Name:</strong></td>
                    <td style="padding: 12px 0; color: #333; font-size: 14px; font-weight: 500;">${fullName}</td>
                  </tr>
                  <tr>
                    <td style="padding: 12px 0; color: #666; font-size: 14px; vertical-align: top;"><strong>📧 Email:</strong></td>
                    <td style="padding: 12px 0; color: #333; font-size: 14px;">
                      <a href="mailto:${email}" style="color: #667eea; text-decoration: none; font-weight: 500;">${email}</a>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding: 12px 0; color: #666; font-size: 14px; vertical-align: top;"><strong>📱 Phone:</strong></td>
                    <td style="padding: 12px 0; color: #333; font-size: 14px; font-weight: 500;">
                      <a href="tel:${countryCode}${whatsappNumber}" style="color: #667eea; text-decoration: none;">${countryCode} ${whatsappNumber}</a>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding: 12px 0; color: #666; font-size: 14px; vertical-align: top;"><strong>💬 WhatsApp:</strong></td>
                    <td style="padding: 12px 0; color: #333; font-size: 14px;">
                      <a href="https://wa.me/${countryCode.replace('+', '')}${whatsappNumber}" style="color: #25D366; text-decoration: none; font-weight: 500;">${countryCode} ${whatsappNumber}</a>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding: 12px 0; color: #666; font-size: 14px; vertical-align: top;"><strong>🎯 Services:</strong></td>
                    <td style="padding: 12px 0; color: #333; font-size: 14px; font-weight: 500;">${servicesList}</td>
                  </tr>
                </table>
              </div>
              
              ${comments ? `
              <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; border-left: 4px solid #667eea; margin-top: 20px;">
                <h3 style="color: #333; margin-top: 0; font-size: 16px; font-weight: 600; margin-bottom: 15px;">Comments / Project Details</h3>
                <p style="color: #555; font-size: 14px; line-height: 1.6; margin: 0; white-space: pre-wrap;">${comments.replace(/\n/g, '<br>')}</p>
              </div>
              ` : ''}
            </div>
            
            <!-- Footer -->
            <div style="background-color: #f8f9fa; padding: 20px; text-align: center; border-top: 1px solid #e9ecef;">
              <p style="color: #666; font-size: 12px; margin: 5px 0;">
                This email was sent from the contact form on <a href="https://nirosha.org" style="color: #667eea; text-decoration: none;">nirosha.org</a>
              </p>
              <p style="color: #999; font-size: 11px; margin: 5px 0;">
                Submitted at: ${new Date().toLocaleString('en-US', { timeZone: 'Asia/Kolkata', dateStyle: 'medium', timeStyle: 'short' })}
              </p>
            </div>
          </div>
        </body>
        </html>
      `,
      text: `
New Contact Form Submission - Team Nirosha

Contact Information:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Full Name: ${fullName}
Email: ${email}
Phone: ${countryCode} ${whatsappNumber}
WhatsApp: ${countryCode} ${whatsappNumber}
Services Interested In: ${servicesList}
${comments ? `\nComments/Project Details:\n${comments}` : ''}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Submitted at: ${new Date().toLocaleString('en-US', { timeZone: 'Asia/Kolkata', dateStyle: 'medium', timeStyle: 'short' })}
This email was sent from the contact form on nirosha.org
      `
    };

      // Thank you email to the user
      const userEmailContent = {
        from: `"Team Nirosha" <${gmailUser}>`,
      to: email,
      subject: 'Thank you for contacting Team Nirosha',
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
        </head>
        <body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #f5f5f5;">
          <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff;">
            <!-- Header with Logo -->
            <div style="background-color: #1a1a2e; padding: 40px 20px; text-align: center;">
              <img src="https://nirosha.org/logo.png" alt="Team Nirosha Logo" style="max-width: 200px; height: auto; margin-bottom: 15px;" />
              <h1 style="color: #ffffff; margin: 0; font-size: 28px; font-weight: 600;">Thank You for Contacting Us!</h1>
            </div>
            
            <!-- Content -->
            <div style="padding: 40px 30px;">
              <p style="color: #333; font-size: 16px; line-height: 1.6; margin: 0 0 20px 0;">Dear <strong>${fullName}</strong>,</p>
              
              <p style="color: #555; font-size: 15px; line-height: 1.7; margin: 0 0 25px 0;">
                Thank you for reaching out to <strong style="color: #667eea;">Team Nirosha</strong>. We have received your inquiry and our team will get back to you soon.
              </p>
              
              <div style="background-color: #f8f9fa; padding: 25px; border-radius: 8px; margin: 25px 0; border-left: 4px solid #667eea;">
                <h3 style="color: #333; margin-top: 0; font-size: 18px; font-weight: 600; margin-bottom: 15px;">Your Inquiry Details</h3>
                <p style="color: #555; font-size: 14px; margin: 10px 0;"><strong>Services Interested In:</strong> <span style="color: #667eea; font-weight: 500;">${servicesList}</span></p>
                ${comments ? `
                <div style="margin-top: 15px; padding-top: 15px; border-top: 1px solid #e9ecef;">
                  <p style="color: #555; font-size: 14px; margin: 0 0 10px 0;"><strong>Your Message:</strong></p>
                  <p style="background-color: #ffffff; padding: 15px; border-radius: 6px; color: #333; font-size: 14px; line-height: 1.6; margin: 0; white-space: pre-wrap;">${comments.replace(/\n/g, '<br>')}</p>
                </div>
                ` : ''}
              </div>
              
              <p style="color: #555; font-size: 15px; line-height: 1.7; margin: 25px 0;">
                We typically respond within <strong>24-48 hours</strong>. If you have any urgent questions, please feel free to contact us directly:
              </p>
              
              <!-- Contact Information Cards -->
              <div style="margin: 30px 0;">
                <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin-bottom: 15px; border-left: 4px solid #667eea;">
                  <table style="width: 100%; border-collapse: collapse;">
                    <tr>
                      <td style="padding: 8px 0; width: 50px; vertical-align: middle;">
                        <div style="width: 40px; height: 40px; background-color: #667eea; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 20px;">📧</div>
                      </td>
                      <td style="padding: 8px 0; vertical-align: middle;">
                        <div style="color: #666; font-size: 12px; margin-bottom: 3px;">Email</div>
                        <a href="mailto:info@nirosha.org" style="color: #667eea; text-decoration: none; font-size: 15px; font-weight: 600;">info@nirosha.org</a>
                      </td>
                    </tr>
                  </table>
                </div>
                
                <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin-bottom: 15px; border-left: 4px solid #25D366;">
                  <table style="width: 100%; border-collapse: collapse;">
                    <tr>
                      <td style="padding: 8px 0; width: 50px; vertical-align: middle;">
                        <div style="width: 40px; height: 40px; background-color: #25D366; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 20px;">💬</div>
                      </td>
                      <td style="padding: 8px 0; vertical-align: middle;">
                        <div style="color: #666; font-size: 12px; margin-bottom: 3px;">WhatsApp</div>
                        <a href="https://wa.me/919403891938" style="color: #25D366; text-decoration: none; font-size: 15px; font-weight: 600;">+91 9403891938</a>
                      </td>
                    </tr>
                  </table>
                </div>
                
                <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; border-left: 4px solid #667eea;">
                  <table style="width: 100%; border-collapse: collapse;">
                    <tr>
                      <td style="padding: 8px 0; width: 50px; vertical-align: middle;">
                        <div style="width: 40px; height: 40px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 20px;">📱</div>
                      </td>
                      <td style="padding: 8px 0; vertical-align: middle;">
                        <div style="color: #666; font-size: 12px; margin-bottom: 3px;">Phone</div>
                        <a href="tel:+919403891938" style="color: #667eea; text-decoration: none; font-size: 15px; font-weight: 600;">+91 9403891938</a>
                      </td>
                    </tr>
                  </table>
                </div>
              </div>
              
              <p style="color: #555; font-size: 15px; line-height: 1.7; margin: 30px 0 20px 0;">
                We look forward to helping you <strong style="color: #667eea;">transform your digital presence</strong>!
              </p>
              
              <p style="color: #333; font-size: 15px; margin: 25px 0 5px 0;">
                Best regards,<br>
                <strong style="color: #667eea; font-size: 16px;">Team Nirosha</strong>
              </p>
            </div>
            
            <!-- Footer -->
            <div style="background-color: #1a1a2e; padding: 30px 20px; text-align: center; color: #ffffff;">
              <p style="margin: 0 0 10px 0; font-size: 16px; font-weight: 600;">Team Nirosha</p>
              <p style="margin: 5px 0; font-size: 13px; opacity: 0.9;">Hadapsar, Pune, Maharashtra, India</p>
              <p style="margin: 15px 0 0 0;">
                <a href="https://nirosha.org" style="color: #ffffff; text-decoration: none; font-size: 14px; font-weight: 500; border-bottom: 1px solid rgba(255,255,255,0.5); padding-bottom: 2px;">www.nirosha.org</a>
              </p>
            </div>
          </div>
        </body>
        </html>
      `,
      text: `
Thank You for Contacting Team Nirosha!

Dear ${fullName},

Thank you for reaching out to Team Nirosha. We have received your inquiry and our team will get back to you soon.

Your Inquiry Details:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Services Interested In: ${servicesList}
${comments ? `Your Message:\n${comments}` : ''}

We typically respond within 24-48 hours. If you have any urgent questions, please feel free to contact us directly:

📧 Email: info@nirosha.org
💬 WhatsApp: +91 9403891938
📱 Phone: +91 9403891938

We look forward to helping you transform your digital presence!

Best regards,
Team Nirosha

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Team Nirosha
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

    console.log('✅ Emails sent successfully!');
    console.log('Admin email ID:', adminResult.messageId);
    console.log('User email ID:', userResult.messageId);
    
    // Send WhatsApp message to the user
    let whatsappResult = null;
    try {
      console.log('📱 Sending WhatsApp message...');
      
      // Format phone number: ensure + at start, remove spaces and dashes
      // Example: +91 1234567890 -> +911234567890
      const cleanCountryCode = countryCode.replace(/[\s-]/g, ''); // Keep +, remove spaces/dashes
      const cleanPhoneNumber = whatsappNumber.replace(/[\s-]/g, ''); // Remove spaces/dashes
      // Ensure + at the start
      const phoneNumber = cleanCountryCode.startsWith('+') 
        ? (cleanCountryCode + cleanPhoneNumber).trim()
        : ('+' + cleanCountryCode + cleanPhoneNumber).trim();
      
      console.log('📱 WhatsApp recipient:', phoneNumber, '(formatted from', countryCode, whatsappNumber + ')');
      
      // Create WhatsApp message
      const whatsappMessage = `Hello ${fullName}! 👋

Thank you for contacting *Team Nirosha*! We have received your inquiry about:
${servicesList}

Our team will get back to you within 24-48 hours.

If you have any urgent questions, feel free to reach us:
📧 Email: info@nirosha.org
💬 WhatsApp: +91 9403891938
📱 Phone: +91 9403891938

We look forward to helping you transform your digital presence!

Best regards,
Team Nirosha
www.nirosha.org`;

      // Prepare form data for multipart/form-data
      const formData = new FormData();
      formData.append('secret', '6c8c334450be96e25b02c010b5aecbf12d09f24e');
      formData.append('account', '1716307631c4ca4238a0b923820dcc509a6f75849b664cc6af68393');
      formData.append('recipient', phoneNumber);
      formData.append('type', 'text');
      formData.append('message', whatsappMessage);

      // Send WhatsApp message
      const whatsappResponse = await fetch('https://wasms.nirosha.org/api/send/whatsapp', {
        method: 'POST',
        body: formData
      });

      if (whatsappResponse.ok) {
        whatsappResult = await whatsappResponse.json();
        console.log('✅ WhatsApp message sent successfully:', whatsappResult);
      } else {
        const errorText = await whatsappResponse.text();
        console.error('⚠️ WhatsApp API error:', whatsappResponse.status, errorText);
        // Don't fail the whole request if WhatsApp fails
      }
    } catch (whatsappError) {
      console.error('⚠️ Error sending WhatsApp message:', whatsappError.message);
      // Don't fail the whole request if WhatsApp fails
    }
    
    return res.status(200).json({ 
      success: true, 
      message: 'Emails sent successfully' + (whatsappResult ? ' and WhatsApp message sent' : ''),
      adminEmailId: adminResult.messageId,
      userEmailId: userResult.messageId,
      whatsappSent: whatsappResult !== null
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
