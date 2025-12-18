const functions = require('firebase-functions');
const nodemailer = require('nodemailer');
const cors = require('cors')({ origin: true });

// Initialize nodemailer transporter
// Gmail credentials should be set in Firebase Functions environment variables
let transporter = null;

function getTransporter() {
  if (transporter) {
    return transporter;
  }

  const gmailUser = functions.config().gmail?.user || process.env.GMAIL_USER;
  const gmailPassword = functions.config().gmail?.password || process.env.GMAIL_PASSWORD;

  if (!gmailUser || !gmailPassword) {
    throw new Error('Gmail credentials not configured. Please set GMAIL_USER and GMAIL_PASSWORD in Firebase Functions config.');
  }

  transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: gmailUser,
      pass: gmailPassword
    }
  });

  return transporter;
}

exports.sendContactEmail = functions.https.onRequest((req, res) => {
  return cors(req, res, async () => {
    // Only allow POST requests
    if (req.method !== 'POST') {
      return res.status(405).json({ error: 'Method not allowed' });
    }

    try {
      const { fullName, countryCode, whatsappNumber, email, serviceInterested, comments } = req.body;

      // Validate required fields
      if (!fullName || !email || !whatsappNumber || !serviceInterested || serviceInterested.length === 0) {
        return res.status(400).json({ error: 'Missing required fields' });
      }

      // Validate email format
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        return res.status(400).json({ error: 'Invalid email format' });
      }

      const mailTransporter = getTransporter();
      const gmailUser = functions.config().gmail?.user || process.env.GMAIL_USER;

      // Format services list
      const servicesList = Array.isArray(serviceInterested) 
        ? serviceInterested.join(', ') 
        : serviceInterested;

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
        message: error.message 
      });
    }
  });
});
