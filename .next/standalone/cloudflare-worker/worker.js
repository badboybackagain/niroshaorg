/**
 * Cloudflare Worker for Nirosha Contact Form Email Service
 * 
 * Deploy this to Cloudflare Workers (free tier available)
 * Set Gmail credentials in Cloudflare Dashboard → Workers → Settings → Variables
 */

export default {
  async fetch(request, env) {
    // Handle CORS preflight
    if (request.method === 'OPTIONS') {
      return new Response(null, {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type',
          'Access-Control-Max-Age': '86400',
        },
      });
    }

    const url = new URL(request.url);

    // Health check endpoint
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

        // Validate required fields
        if (!fullName || !email || !whatsappNumber || !serviceInterested || serviceInterested.length === 0) {
          return new Response(
            JSON.stringify({ 
              error: 'Missing required fields',
              message: 'Please fill in all required fields'
            }),
            {
              status: 400,
              headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
              },
            }
          );
        }

        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
          return new Response(
            JSON.stringify({ 
              error: 'Invalid email format',
              message: 'Please enter a valid email address'
            }),
            {
              status: 400,
              headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
              },
            }
          );
        }

        // Get Gmail credentials from environment variables
        const gmailUser = env.GMAIL_USER;
        const gmailPassword = env.GMAIL_PASSWORD;

        if (!gmailUser || !gmailPassword) {
          return new Response(
            JSON.stringify({ 
              error: 'Server configuration error',
              message: 'Email service not configured'
            }),
            {
              status: 500,
              headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
              },
            }
          );
        }

        // Format services list
        const servicesList = Array.isArray(serviceInterested) 
          ? serviceInterested.join(', ') 
          : serviceInterested;

        // Send emails using Gmail SMTP via external service
        // Note: Cloudflare Workers don't support direct SMTP, so we'll use a service
        // Option 1: Use Resend API (free tier: 3,000 emails/month)
        // Option 2: Use SendGrid API (free tier: 100 emails/day)
        // Option 3: Use Mailgun API (free tier: 5,000 emails/month)
        // Option 4: Use a proxy service to Gmail SMTP

        // For now, we'll use a simple HTTP-based email service
        // You can use Resend (recommended) or configure to use Gmail via a proxy

        const emailResult = await sendEmailsViaResend(
          gmailUser,
          fullName,
          countryCode,
          whatsappNumber,
          email,
          servicesList,
          comments
        );

        if (!emailResult.success) {
          throw new Error(emailResult.error);
        }

        return new Response(
          JSON.stringify({ 
            success: true, 
            message: 'Emails sent successfully'
          }),
          {
            status: 200,
            headers: {
              'Content-Type': 'application/json',
              'Access-Control-Allow-Origin': '*',
            },
          }
        );

      } catch (error) {
        console.error('Error:', error);
        return new Response(
          JSON.stringify({ 
            error: 'Failed to send email', 
            message: error.message || 'An error occurred while sending the email'
          }),
          {
            status: 500,
            headers: {
              'Content-Type': 'application/json',
              'Access-Control-Allow-Origin': '*',
            },
          }
        );
      }
    }

    // 404 for other routes
    return new Response('Not Found', { status: 404 });
  },
};

/**
 * Send emails using Resend API (free tier: 3,000 emails/month)
 * Alternative: You can use other services like SendGrid, Mailgun, etc.
 */
async function sendEmailsViaResend(gmailUser, fullName, countryCode, whatsappNumber, email, servicesList, comments) {
  // Note: This requires a Resend API key
  // Sign up at https://resend.com (free tier available)
  // Set RESEND_API_KEY in Cloudflare Workers environment variables
  
  // For Gmail SMTP, you'll need to use a different approach
  // See the alternative implementation below
  return { success: false, error: 'Resend not configured' };
}
