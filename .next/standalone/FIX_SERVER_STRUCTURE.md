# Fix Server Structure After Unzipping

## 🔍 Problem: Can't See .next/standalone Folder

If you unzipped the file but don't see `.next/standalone/`, here's how to fix it.

## 📋 Step 1: Check What Was Extracted

SSH into your server and run:

```bash
cd /path/to/public_html  # or wherever you unzipped
ls -la
```

## 🔍 Step 2: Run Diagnostic Script

I've created a diagnostic script. Upload `check-server-structure.sh` to your server and run:

```bash
chmod +x check-server-structure.sh
./check-server-structure.sh
```

Or run these commands manually:

```bash
# Check current directory
pwd
ls -la

# Check for .next folder
ls -la .next/

# Check if standalone exists
ls -la .next/standalone/ 2>/dev/null || echo "standalone folder not found"

# Check what's in .next
find .next -maxdepth 2 -type d
```

## 🐛 Common Issues

### Issue 1: Extracted in Wrong Location

**Problem:** The zip was extracted, but you're looking in the wrong directory.

**Solution:**
```bash
# Find where you unzipped
find /path/to/public_html -name "server.js" -type f 2>/dev/null

# Or search for the standalone folder
find /path/to/public_html -type d -name "standalone" 2>/dev/null
```

### Issue 2: Zip Structure is Wrong

**Problem:** The zip file contains the contents of `.next/standalone/` directly, not the folder structure.

**What the zip should contain:**
- When you unzip, you should see:
  - `server.js`
  - `package.json`
  - `public/` folder
  - `.next/` folder

**If you see these files directly** (not in a `.next/standalone/` folder), that's correct! The zip contains the **contents** of standalone, not the folder itself.

**Solution:** The files are in the right place. You just need to:
```bash
# If files are in current directory (public_html)
cd /path/to/public_html
npm install --production
node server.js
```

### Issue 3: Zip Was Created Incorrectly

**Problem:** The zip creation process didn't include the right files.

**Check locally:**
```bash
# On your local machine, check what's in the zip
cd /tmp
unzip -l nirosha-deployment-*.zip | head -30
```

You should see:
- `server.js`
- `package.json`
- `public/` (folder)
- `.next/` (folder)

## ✅ Correct Unzip Process

### For Standalone Build:

1. **Navigate to your deployment directory:**
   ```bash
   cd /path/to/public_html
   ```

2. **Unzip the file:**
   ```bash
   unzip nirosha-deployment-*.zip
   ```

3. **Check what was extracted:**
   ```bash
   ls -la
   ```

4. **Expected result:**
   - You should see files like `server.js`, `package.json` directly in the current directory
   - Plus folders: `public/`, `.next/`
   
   **OR**
   
   - You might see `.next/standalone/` folder with all files inside

5. **If files are directly in current directory:**
   ```bash
   # This is correct! Just run:
   npm install --production
   node server.js
   ```

6. **If you see .next/standalone/ folder:**
   ```bash
   cd .next/standalone
   npm install --production
   node server.js
   ```

## 🔧 Quick Fix Commands

Run these on your server to check and fix:

```bash
# 1. Find where you are
pwd

# 2. List all files
ls -la

# 3. Check if server.js exists anywhere
find . -name "server.js" -type f 2>/dev/null

# 4. Check if .next/standalone exists
find . -type d -name "standalone" 2>/dev/null

# 5. If you find server.js, check its directory
# (Replace /path/to/server.js with actual path from step 3)
ls -la $(dirname $(find . -name "server.js" -type f | head -1))
```

## 📝 What to Report Back

After running the diagnostic, tell me:

1. **What directory are you in?** (`pwd` output)
2. **What files/folders do you see?** (`ls -la` output)
3. **Where is server.js?** (`find . -name "server.js"` output)
4. **Is there a .next folder?** (`ls -la .next/` output if it exists)

## 🎯 Most Likely Scenario

Based on how the zip is created, when you unzip `nirosha-deployment-*.zip`, the files from `.next/standalone/` are extracted **directly to the current directory**, not into a `.next/standalone/` subfolder.

So if you unzip in `public_html/`, you'll see:
```
public_html/
├── server.js          ← Entry point
├── package.json
├── public/
└── .next/
```

This is **correct**! Just run:
```bash
cd /path/to/public_html
npm install --production
node server.js
```

You don't need a `.next/standalone/` folder - the files are already in the right place!
