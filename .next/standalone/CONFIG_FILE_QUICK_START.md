# Config File Quick Start

## ✅ Solution: Use config.js File (No Environment Variables Needed!)

Since you don't have a way to set environment variables in production, use a `config.js` file instead.

## 🚀 3 Simple Steps

### 1. Create config.js locally
```bash
cp config.example.js config.js
```

### 2. Edit config.js
Add your Gmail credentials:
```javascript
export const config = {
  gmail: {
    user: 'info@nirosha.org',
    password: 'rxljjbbpwgctunwj'  // Your 16-character App Password
  }
};
```

### 3. Upload to server
Upload `config.js` to your **project root** (same directory as `package.json`) via FTP/SFTP.

**That's it!** The Next.js API route will automatically use `config.js` if it exists.

## 📁 Where to Put config.js

```
your-project/
├── app/
├── public/
├── package.json
├── config.js          ← Upload here (project root)
└── .next/
```

## 🔒 Security

- ✅ `config.js` is in `.gitignore` (won't be committed)
- ✅ Set file permissions: `chmod 600 config.js` (owner read/write only)
- ✅ Never share `config.js` publicly

## ✅ How It Works

1. Next.js API route checks for `config.js` first
2. If found, uses credentials from `config.js`
3. If not found, falls back to environment variables
4. If neither exists, shows error

## 🐛 Troubleshooting

**"Gmail credentials not configured"**
- Make sure `config.js` exists in project root
- Check file permissions: `chmod 600 config.js`
- Verify file format is correct (JavaScript, not JSON)

**"Cannot find module '@/lib/config-loader'"**
- Restart Next.js server after creating `lib/config-loader.js`
- Make sure `jsconfig.json` includes `"@/lib/*": ["./lib/*"]`

## 📝 Full Documentation

See `CONFIG_FILE_SETUP.md` for detailed instructions.
