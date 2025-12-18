# Email Server - Quick Start

## Testing the Health Endpoint

### Method 1: Using curl (Terminal)

1. **Start the server:**
   ```bash
   npm start
   ```

2. **Test the health endpoint:**
   ```bash
   curl http://localhost:3000/health
   ```

   You should see:
   ```json
   {"status":"ok","message":"Email server is running"}
   ```

### Method 2: Using Browser

1. **Start the server:**
   ```bash
   npm start
   ```

2. **Open your browser and visit:**
   ```
   http://localhost:3000/health
   ```

   You should see the JSON response in your browser.

### Method 3: Using Postman or Insomnia

1. **Start the server:**
   ```bash
   npm start
   ```

2. **Create a new GET request:**
   - URL: `http://localhost:3000/health`
   - Method: GET
   - Send the request

### Method 4: Using JavaScript (Browser Console)

Open your browser console and run:
```javascript
fetch('http://localhost:3000/health')
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => console.error('Error:', err));
```

## Testing the Contact Form Endpoint

### Using curl:

```bash
curl -X POST http://localhost:3000/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "fullName": "Test User",
    "countryCode": "+91",
    "whatsappNumber": "1234567890",
    "email": "test@example.com",
    "serviceInterested": ["Web Development"],
    "comments": "This is a test message"
  }'
```

### Using JavaScript:

```javascript
fetch('http://localhost:3000/api/contact', {
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
  .then(data => console.log('Success:', data))
  .catch(err => console.error('Error:', err));
```

## Troubleshooting

### Server not starting?
- Make sure you've run `npm install` in the server directory
- Check that port 3000 is not already in use
- Verify your `.env` file exists and has the required variables

### CORS errors?
- Make sure `ALLOWED_ORIGINS` in `.env` includes your frontend URL
- For local development, use: `ALLOWED_ORIGINS=http://localhost:5173,http://localhost:4173`

### Connection refused?
- Verify the server is running: `curl http://localhost:3000/health`
- Check the port number matches (default is 3000)
- Make sure no firewall is blocking the port
