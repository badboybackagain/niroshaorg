import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'
import { getGmailCredentials } from '@/lib/config-loader'
import { existsSync } from 'fs'
import { join } from 'path'

// Direct config loader as fallback - tries multiple locations
async function loadConfigDirect() {
  // Try multiple possible locations for config.js
  const possiblePaths = [
    join(process.cwd(), 'config.js'),  // Current working directory
    '/var/www/5fcedb5f-4188-4356-a8e9-4f09d27e27af/public_html/config.js',  // Absolute path
    join(process.cwd(), '..', 'config.js'),  // Parent directory
    join(process.cwd(), '.next', 'standalone', 'config.js'),  // Standalone location
  ]
  
  for (const configPath of possiblePaths) {
    if (existsSync(configPath)) {
      try {
        const absolutePath = configPath.startsWith('/') ? configPath : join(process.cwd(), configPath)
        const configUrl = `file://${absolutePath}`
        console.log('🔍 Trying to load config from:', configUrl)
        const configModule = await import(configUrl)
        const config = configModule?.config || configModule?.default || null
        if (config && config.gmail) {
          console.log('✅ Successfully loaded config directly from:', configPath)
          console.log('✅ Gmail user:', config.gmail.user)
          return config
        }
      } catch (e) {
        console.error('❌ Failed to load config from', configPath, ':', e.message)
        continue
      }
    }
  }
  
  console.warn('⚠️ config.js not found in any of the checked locations')
  return null
}

// Get nodemailer transporter with credentials from config file or environment variables
async function getTransporter() {
  let credentials = await getGmailCredentials()
  
  // Fallback: try direct load if config-loader failed
  if (!credentials) {
    console.log('Config-loader failed, trying direct load...')
    const directConfig = await loadConfigDirect()
    if (directConfig?.gmail?.user && directConfig?.gmail?.password) {
      credentials = {
        user: directConfig.gmail.user.trim(),
        password: directConfig.gmail.password.trim()
      }
      console.log('✅ Loaded config directly, Gmail user:', credentials.user)
    }
  }

  if (!credentials) {
    throw new Error(
      'Gmail credentials not configured. ' +
      'Please create config.js file in project root with Gmail credentials, ' +
      'or set GMAIL_USER and GMAIL_PASSWORD environment variables.'
    )
  }

  return nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: credentials.user,
      pass: credentials.password
    },
    tls: {
      rejectUnauthorized: false
    }
  })
}

export async function POST(request) {
  try {
    const body = await request.json()
    const { fullName, countryCode, whatsappNumber, email, serviceInterested, comments } = body

    // Validate required fields
    if (!fullName || !email || !whatsappNumber || !serviceInterested || serviceInterested.length === 0) {
      return NextResponse.json(
        { 
          error: 'Missing required fields',
          message: 'Please fill in all required fields'
        },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { 
          error: 'Invalid email format',
          message: 'Please enter a valid email address'
        },
        { status: 400 }
      )
    }

    // Format services list
    const servicesList = Array.isArray(serviceInterested) 
      ? serviceInterested.join(', ') 
      : serviceInterested

    // Get Gmail user from config or environment
    let credentials = await getGmailCredentials()
    
    // Fallback: try direct load if config-loader failed
    if (!credentials) {
      console.log('Config-loader failed in route, trying direct load...')
      const directConfig = await loadConfigDirect()
      if (directConfig?.gmail?.user && directConfig?.gmail?.password) {
        credentials = {
          user: directConfig.gmail.user.trim(),
          password: directConfig.gmail.password.trim()
        }
        console.log('✅ Loaded config directly in route, Gmail user:', credentials.user)
      }
    }
    
    if (!credentials) {
      return NextResponse.json(
        { 
          error: 'Server configuration error',
          message: 'Gmail credentials not configured. Please contact the administrator.'
        },
        { status: 500 }
      )
    }
    const gmailUser = credentials.user

    // OPTIMIZATION: Return success immediately - process everything in background
    // This makes the form feel much faster to users (instant response)
    const response = NextResponse.json({ 
      success: true, 
      message: 'Form submitted successfully. We will get back to you soon!'
    })

    // Process webhook, emails, and WhatsApp in background (fire and forget)
    // Don't await - let it run asynchronously without blocking the response
    ;(async () => {
      try {
        const mailTransporter = getTransporter()

        // Send form data to webhook
        try {
          console.log('🔗 Sending form data to webhook...')
          const webhookUrl = 'https://automate.nirosha.org/webhook/niroshawebsiteform'
          const webhookPayload = {
            fullName,
            countryCode,
            whatsappNumber,
            email,
            serviceInterested: Array.isArray(serviceInterested) ? serviceInterested : [serviceInterested],
            comments: comments || '',
            submittedAt: new Date().toISOString(),
            source: 'nirosha.org-contact-form'
          }

          const webhookResponse = await fetch(webhookUrl, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(webhookPayload)
          })

          if (webhookResponse.ok) {
            console.log('✅ Webhook called successfully')
          } else {
            const errorText = await webhookResponse.text()
            console.error('⚠️ Webhook returned error status:', webhookResponse.status, errorText)
          }
        } catch (webhookError) {
          console.error('⚠️ Error calling webhook:', webhookError.message)
        }

        // Email to info@nirosha.org (form submission)
        const adminEmailContent = {
          from: `"Team Nirosha Contact Form" <${gmailUser}>`,
          to: 'info@nirosha.org',
          replyTo: email,
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
                <div style="background-color: #1a1a2e; padding: 30px 20px; text-align: center;">
                  <img src="https://nirosha.org/logo.png" alt="Team Nirosha Logo" style="max-width: 180px; height: auto; margin-bottom: 10px;" />
                  <h1 style="color: #ffffff; margin: 10px 0 0 0; font-size: 24px; font-weight: 600;">New Contact Form Submission</h1>
                </div>
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
        }

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
                <div style="background-color: #1a1a2e; padding: 40px 20px; text-align: center;">
                  <img src="https://nirosha.org/logo.png" alt="Team Nirosha Logo" style="max-width: 200px; height: auto; margin-bottom: 15px;" />
                  <h1 style="color: #ffffff; margin: 0; font-size: 28px; font-weight: 600;">Thank You for Contacting Us!</h1>
                </div>
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
        }

        // Send both emails in parallel
        const [adminResult, userResult] = await Promise.all([
          mailTransporter.sendMail(adminEmailContent),
          mailTransporter.sendMail(userEmailContent)
        ])

        console.log('Admin email sent:', adminResult.messageId)
        console.log('User email sent:', userResult.messageId)

        // Send WhatsApp message (optional - you can keep this if needed)
        try {
          console.log('📱 Sending WhatsApp message...')
          const cleanCountryCode = countryCode.replace(/[\s-]/g, '')
          const cleanPhoneNumber = whatsappNumber.replace(/[\s-]/g, '')
          const phoneNumber = cleanCountryCode.startsWith('+') 
            ? (cleanCountryCode + cleanPhoneNumber).trim()
            : ('+' + cleanCountryCode + cleanPhoneNumber).trim()
          
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
www.nirosha.org`

          const formData = new FormData()
          formData.append('secret', '6c8c334450be96e25b02c010b5aecbf12d09f24e')
          formData.append('account', '1716307631c4ca4238a0b923820dcc509a6f75849b664cc6af68393')
          formData.append('recipient', phoneNumber)
          formData.append('type', 'text')
          formData.append('message', whatsappMessage)

          const whatsappResponse = await fetch('https://wasms.nirosha.org/api/send/whatsapp', {
            method: 'POST',
            body: formData
          })

          if (whatsappResponse.ok) {
            const whatsappResult = await whatsappResponse.json()
            console.log('✅ WhatsApp message sent successfully:', whatsappResult)
          } else {
            const errorText = await whatsappResponse.text()
            console.error('⚠️ WhatsApp API error:', whatsappResponse.status, errorText)
          }
        } catch (whatsappError) {
          console.error('⚠️ Error sending WhatsApp message:', whatsappError.message)
        }
      } catch (backgroundError) {
        // Log errors but don't fail the request - user already got success message
        console.error('⚠️ Error in background processing:', backgroundError.message)
      }
    })()

    // Return success immediately - background processing continues
    return response

  } catch (error) {
    console.error('Error in contact form:', error)
    return NextResponse.json(
      { 
        error: 'Failed to process form', 
        message: error.message || 'An error occurred while processing your form. Please try again later.'
      },
      { status: 500 }
    )
  }
}
