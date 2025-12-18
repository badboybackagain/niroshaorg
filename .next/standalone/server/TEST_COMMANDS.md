# Quick Test Commands for Production

## Health Check (GET)

```bash
curl https://nirosha.org/api/health
```

Expected response:
```json
{"status":"ok","message":"Email server is running"}
```

## Contact Form Test (POST)

### Basic Test

```bash
curl -X POST https://nirosha.org/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "fullName": "Test User",
    "countryCode": "+91",
    "whatsappNumber": "1234567890",
    "email": "test@example.com",
    "serviceInterested": ["Web Development"],
    "comments": "This is a test message from production"
  }'
```

### With All Fields

```bash
curl -X POST https://nirosha.org/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "fullName": "John Doe",
    "countryCode": "+91",
    "whatsappNumber": "9876543210",
    "email": "john.doe@example.com",
    "serviceInterested": ["Web Development", "SEO Services"],
    "comments": "I am interested in getting a website developed for my business. Please contact me."
  }'
```

### Minimal Test (Required Fields Only)

```bash
curl -X POST https://nirosha.org/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "fullName": "Test",
    "countryCode": "+91",
    "whatsappNumber": "1234567890",
    "email": "test@example.com",
    "serviceInterested": ["Web Development"]
  }'
```

## Expected Success Response

```json
{
  "success": true,
  "message": "Emails sent successfully",
  "adminEmailId": "<message-id-1>",
  "userEmailId": "<message-id-2>"
}
```

## Expected Error Responses

### Missing Required Field

```json
{
  "error": "Missing required fields",
  "message": "Please fill in all required fields"
}
```

### Invalid Email

```json
{
  "error": "Invalid email format",
  "message": "Please enter a valid email address"
}
```

## Browser Console Test (JavaScript)

```javascript
fetch('https://nirosha.org/api/contact', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    fullName: 'Test User',
    countryCode: '+91',
    whatsappNumber: '1234567890',
    email: 'test@example.com',
    serviceInterested: ['Web Development'],
    comments: 'This is a test message'
  })
})
  .then(res => res.json())
  .then(data => {
    console.log('Response:', data);
    if (data.success) {
      console.log('✅ Emails sent successfully!');
    } else {
      console.error('❌ Error:', data.message);
    }
  })
  .catch(err => console.error('❌ Request failed:', err));
```

## One-Line Test (PowerShell/Windows)

```powershell
curl.exe -X POST https://nirosha.org/api/contact -H "Content-Type: application/json" -d "{\"fullName\":\"Test User\",\"countryCode\":\"+91\",\"whatsappNumber\":\"1234567890\",\"email\":\"test@example.com\",\"serviceInterested\":[\"Web Development\"],\"comments\":\"Test\"}"
```

## Verify Emails After Test

After running the POST command, check:

1. **info@nirosha.org** - Should receive form submission email
2. **test@example.com** (or the email you used) - Should receive thank you email

## Troubleshooting

### If you get CORS error:
- Make sure `allowedOrigins` in `config.js` includes your domain
- Check browser console for specific error

### If you get 404:
- Verify the URL is correct: `https://nirosha.org/api/contact`
- Check server is running and path is configured correctly

### If you get 500 error:
- Check server logs
- Verify `config.js` has correct Gmail credentials
- Test Gmail connection: `npm run test-smtp`
