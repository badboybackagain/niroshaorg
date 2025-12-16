/**
 * Cloudflare Worker for Nirosha Contact Form - Gmail SMTP Version
 * 
 * This version uses a proxy service to send emails via Gmail SMTP
 * since Cloudflare Workers don't support direct SMTP connections.
 * 
 * Alternative: Use Resend, SendGrid, or Mailgun (all have free tiers)
 */

export default {
  async fetch(request, env) {
    // Handle CORS
    if (request.method === 'OPTIONS') {
      return new Response(null, {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type',
        },
      });
    }

    const url = new URL(request.url);

    // Health check
    if (url.pathname === '/health' && request.method === 'GET') {
      return new Response(
        JSON.stringify({ status: 'ok', message: 'Email server is running' }),
        {
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
          },
        }
      );
    }

    // Contact form endpoint
    if (url.pathname === '/api/contact' && request.method === 'POST') {
      try {
        const data = await request.json();
        const { fullName, countryCode, whatsappNumber, email, serviceInterested, comments } = data;

        // Validation
        if (!fullName || !email || !whatsappNumber || !serviceInterested || serviceInterested.length === 0) {
          return jsonResponse({ error: 'Missing required fields' }, 400);
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
          return jsonResponse({ error: 'Invalid email format' }, 400);
        }

        // Get credentials
        const gmailUser = env.GMAIL_USER;
        const gmailPassword = env.GMAIL_PASSWORD;

        if (!gmailUser || !gmailPassword) {
          return jsonResponse({ error: 'Server not configured' }, 500);
        }

        const servicesList = Array.isArray(serviceInterested) 
          ? serviceInterested.join(', ') 
          : serviceInterested;

        // Use Resend API (free tier: 3,000 emails/month)
        // Sign up at https://resend.com
        const resendApiKey = env.RESEND_API_KEY;

        if (resendApiKey) {
          // Send via Resend
          const result = await sendViaResend(
            resendApiKey,
            gmailUser,
            fullName,
            countryCode,
            whatsappNumber,
            email,
            servicesList,
            comments
          );

          if (result.success) {
            return jsonResponse({ success: true, message: 'Emails sent successfully' });
          } else {
            throw new Error(result.error);
          }
        } else {
          // Fallback: Use a proxy service or return error
          return jsonResponse({ 
            error: 'Email service not configured. Please set RESEND_API_KEY or use alternative service.' 
          }, 500);
        }

      } catch (error) {
        console.error('Error:', error);
        return jsonResponse({ 
          error: 'Failed to send email', 
          message: error.message 
        }, 500);
      }
    }

    return new Response('Not Found', { status: 404 });
  },
};

function jsonResponse(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
  });
}

async function sendViaResend(apiKey, gmailUser, fullName, countryCode, whatsappNumber, email, servicesList, comments) {
  try {
    // Email to info@nirosha.org
    const adminEmail = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: `"Nirosha Contact Form" <${gmailUser}>`,
        to: 'info@nirosha.org',
        subject: `New Contact Form Submission from ${fullName}`,
        html: generateAdminEmailHTML(fullName, email, countryCode, whatsappNumber, servicesList, comments),
        text: generateAdminEmailText(fullName, email, countryCode, whatsappNumber, servicesList, comments),
      }),
    });

    // Thank you email to user
    const userEmail = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: `"Nirosha Enterprises" <${gmailUser}>`,
        to: email,
        subject: 'Thank you for contacting Nirosha Enterprises',
        html: generateUserEmailHTML(fullName, servicesList, comments),
        text: generateUserEmailText(fullName, servicesList, comments),
      }),
    });

    if (!adminEmail.ok || !userEmail.ok) {
      const adminError = await adminEmail.json().catch(() => ({}));
      const userError = await userEmail.json().catch(() => ({}));
      return { 
        success: false, 
        error: `Resend API error: ${adminError.message || userError.message || 'Unknown error'}` 
      };
    }

    return { success: true };
  } catch (error) {
    return { success: false, error: error.message };
  }
}

function generateAdminEmailHTML(fullName, email, countryCode, whatsappNumber, servicesList, comments) {
  return `
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
  `;
}

function generateAdminEmailText(fullName, email, countryCode, whatsappNumber, servicesList, comments) {
  return `
New Contact Form Submission

Full Name: ${fullName}
Email: ${email}
Phone: ${countryCode} ${whatsappNumber}
Services Interested In: ${servicesList}
${comments ? `Comments/Project Details:\n${comments}` : ''}

Submitted at: ${new Date().toLocaleString('en-US', { timeZone: 'Asia/Kolkata' })}
  `;
}

function generateUserEmailHTML(fullName, servicesList, comments) {
  return `
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
      <p>Best regards,<br><strong>The Nirosha Enterprises Team</strong></p>
    </div>
  `;
}

function generateUserEmailText(fullName, servicesList, comments) {
  return `
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
  `;
}
