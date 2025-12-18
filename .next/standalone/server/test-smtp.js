import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

console.log('\n=== Gmail SMTP Connection Test ===\n');

// Check environment variables
const gmailUser = process.env.GMAIL_USER?.trim();
const gmailPassword = process.env.GMAIL_PASSWORD?.trim();

console.log('Configuration:');
console.log('  GMAIL_USER:', gmailUser || '❌ NOT SET');
console.log('  GMAIL_PASSWORD:', gmailPassword ? `${gmailPassword.length} characters` : '❌ NOT SET');

if (!gmailUser || !gmailPassword) {
  console.error('\n❌ Error: Gmail credentials not found in .env file');
  console.error('Make sure you have:');
  console.error('  1. Created a .env file in the server directory');
  console.error('  2. Added GMAIL_USER=your-email@gmail.com');
  console.error('  3. Added GMAIL_PASSWORD=your-16-char-app-password');
  process.exit(1);
}

// Check password format
if (gmailPassword.length !== 16) {
  console.warn(`\n⚠️  Warning: App Password should be 16 characters, but got ${gmailPassword.length}`);
  console.warn('  App Passwords from Google are exactly 16 characters with no spaces');
}

// Check email format
if (!gmailUser.includes('@gmail.com')) {
  console.warn(`\n⚠️  Warning: GMAIL_USER should be a full email address (e.g., yourname@gmail.com)`);
}

console.log('\nAttempting to connect to Gmail SMTP...\n');

// Create transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: gmailUser,
    pass: gmailPassword
  },
  tls: {
    rejectUnauthorized: false
  }
});

// Test connection
transporter.verify(function (error, success) {
  if (error) {
    console.error('❌ Connection Failed!\n');
    console.error('Error Details:');
    console.error('  Message:', error.message);
    console.error('  Code:', error.code);
    console.error('  Command:', error.command);
    
    console.error('\n🔍 Troubleshooting Steps:');
    console.error('  1. Verify your App Password is exactly 16 characters (no spaces)');
    console.error('  2. Make sure 2-Step Verification is enabled on your Google Account');
    console.error('  3. Check that GMAIL_USER is your full email (yourname@gmail.com)');
    console.error('  4. Try generating a new App Password at: https://myaccount.google.com/apppasswords');
    console.error('  5. Check your .env file has no quotes or extra spaces');
    console.error('  6. Wait a few minutes if you\'ve had multiple failed attempts');
    
    if (error.code === 'EAUTH') {
      console.error('\n💡 This is an authentication error. Common causes:');
      console.error('   - Wrong App Password');
      console.error('   - App Password has spaces or extra characters');
      console.error('   - 2-Step Verification not enabled');
      console.error('   - Google Account security blocking the login');
    }
    
    process.exit(1);
  } else {
    console.log('✅ Success! SMTP connection verified.');
    console.log('   Your Gmail credentials are working correctly.\n');
    process.exit(0);
  }
});
