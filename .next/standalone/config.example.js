/**
 * Configuration file for Next.js API routes
 * 
 * IMPORTANT: This file is in .gitignore - NEVER commit it to git!
 * 
 * Instructions:
 * 1. Copy this file: cp config.example.js config.js
 * 2. Edit config.js and add your Gmail credentials below
 * 3. Upload config.js to your server (but NOT to git)
 */

// Gmail SMTP Configuration
// Replace these with your actual Gmail credentials
export const config = {
  gmail: {
    user: 'your-email@gmail.com',  // TODO: Replace with your Gmail address
    password: 'your-16-char-app-password'  // TODO: Replace with your Gmail App Password (16 characters, no spaces)
  }
};

// Validate configuration
if (!config.gmail.user || !config.gmail.password || 
    config.gmail.user === 'your-email@gmail.com' || 
    config.gmail.password === 'your-16-char-app-password') {
  console.error('⚠️  WARNING: Gmail credentials not configured!');
  console.error('Please edit config.js and add your Gmail credentials.');
}

export default config;
