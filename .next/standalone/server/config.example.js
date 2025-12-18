/**
 * Configuration file example
 * 
 * Copy this file to config.js and fill in your credentials:
 * cp config.example.js config.js
 * 
 * Then edit config.js with your actual Gmail credentials
 */

// Gmail SMTP Configuration
export const config = {
  gmail: {
    user: 'your-email@gmail.com',  // Replace with your Gmail address
    password: 'your-16-char-app-password'  // Replace with your Gmail App Password
  },
  
  // Server Configuration
  port: 3000,
  
  // CORS Configuration - Add your website domains
  allowedOrigins: [
    'https://nirosha.org',
    'https://www.nirosha.org',
    'http://localhost:5173',  // For local development
    'http://localhost:4173'   // For local preview
  ]
};

export default config;
