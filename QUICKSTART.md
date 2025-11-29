# Quick Start Guide - P.E.E.R

## Running Locally (Development)

### Step 1: Install Dependencies

```bash
# Make sure you have Node.js 18+ and pnpm installed
# Install pnpm if you don't have it
npm install -g pnpm

# Install all dependencies
pnpm install
```

### Step 2: Run the Web App

```bash
# Start the development server
pnpm dev:web

# Or navigate to the web app directory
cd apps/web
pnpm dev
```

The app will be available at **http://localhost:5173**

### Step 3: Open in Browser

1. Open Chrome or Edge
2. Navigate to `http://localhost:5173`
3. You should see the P.E.E.R dashboard!

## Building for Production

### Web PWA Build

```bash
# Build the web app
pnpm build:web

# Preview the production build
cd apps/web
pnpm preview
```

The built files will be in `apps/web/dist/`

### Deploy to Static Hosting

The web app is a static PWA, so you can deploy it to:

**Option 1: Vercel (Easiest)**
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
cd apps/web
vercel --prod
```

**Option 2: Netlify**
```bash
# Install Netlify CLI
npm i -g netlify-cli

# Deploy
cd apps/web
netlify deploy --prod --dir=dist
```

**Option 3: GitHub Pages**
```bash
# Build first
pnpm build:web

# Push the dist folder to gh-pages branch
cd apps/web/dist
git init
git add -A
git commit -m 'deploy'
git push -f git@github.com:yourusername/peer.git main:gh-pages
```

## Deploying to Rural Schools

### Option 1: Raspberry Pi Server (Recommended)

**Hardware Needed:**
- Raspberry Pi 4 (4GB RAM minimum)
- 32GB+ MicroSD card
- Power supply
- Optional: Battery backup UPS

**Setup Steps:**

```bash
# 1. SSH into your Raspberry Pi
ssh pi@raspberrypi.local

# 2. Install Node.js
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

# 3. Install pnpm
sudo npm install -g pnpm

# 4. Clone the repository
git clone https://github.com/yourusername/peer.git
cd peer

# 5. Install dependencies
pnpm install

# 6. Build the web app
pnpm build:web

# 7. Install a simple web server
sudo npm install -g serve

# 8. Serve the app
cd apps/web/dist
serve -s . -p 80

# Or use Python's built-in server
python3 -m http.server 80
```

**Access the App:**
1. Connect students' devices to the Raspberry Pi's Wi-Fi hotspot
2. Open browser to `http://192.168.x.x` (Pi's IP address)
3. Install the PWA for offline use

**Make it Auto-Start:**

Create a systemd service:
```bash
sudo nano /etc/systemd/system/peer.service
```

Add this content:
```ini
[Unit]
Description=P.E.E.R Web Server
After=network.target

[Service]
Type=simple
User=pi
WorkingDirectory=/home/pi/peer/apps/web/dist
ExecStart=/usr/bin/serve -s . -p 80
Restart=always

[Install]
WantedBy=multi-user.target
```

Enable and start:
```bash
sudo systemctl enable peer
sudo systemctl start peer
```

### Option 2: Android Tablets (Mobile App)

**Build APK:**

```bash
cd apps/mobile

# Install Expo CLI
npm install -g expo-cli

# Build for Android
npx expo build:android

# Or use EAS Build (newer method)
npm install -g eas-cli
eas build --platform android
```

**Distribute:**
1. Download the APK from Expo
2. Copy to USB drives
3. Distribute to tablets
4. Install via "Install from Unknown Sources"

### Option 3: Offline USB Distribution

**Create Offline Package:**

```bash
# 1. Build everything
pnpm build:web

# 2. Create a distribution folder
mkdir peer-offline
cd peer-offline

# 3. Copy built files
cp -r ../apps/web/dist ./web-app

# 4. Create a simple launcher script
cat > start.sh << 'EOF'
#!/bin/bash
cd web-app
python3 -m http.server 8080
EOF

chmod +x start.sh

# 5. Create README
cat > README.txt << 'EOF'
P.E.E.R - Offline Installation

1. Double-click start.sh (Linux/Mac) or start.bat (Windows)
2. Open browser to http://localhost:8080
3. Install the PWA for offline use

For Windows, create start.bat:
cd web-app
python -m http.server 8080
EOF

# 6. Zip it up
cd ..
zip -r peer-offline.zip peer-offline/
```

**Distribute:**
1. Copy the zip file to USB drives
2. Distribute to schools
3. Students extract and run the launcher

## Development Workflow

### Running Individual Packages

```bash
# Build a specific package
cd packages/ai
pnpm build

# Build all packages
pnpm build
```

### Adding New Content

```bash
# Process NCERT PDFs (when you add the script)
pnpm process-textbooks

# Seed the database
pnpm seed-db
```

### Running Tests

```bash
# Run all tests
pnpm test

# Run tests for a specific package
cd packages/gamification
pnpm test
```

## Installing the PWA

### On Desktop (Chrome/Edge)

1. Open the app in browser
2. Look for the install icon (⊕) in the address bar
3. Click "Install"
4. The app will open in its own window
5. Works offline after installation!

### On Mobile (Android)

1. Open the app in Chrome
2. Tap the menu (⋮)
3. Tap "Add to Home Screen"
4. The app will appear on your home screen
5. Works offline!

### On iOS

1. Open the app in Safari
2. Tap the Share button
3. Tap "Add to Home Screen"
4. The app will appear on your home screen

## Troubleshooting

### "Module not found" errors

```bash
# Clear node_modules and reinstall
rm -rf node_modules
pnpm install
```

### Build fails

```bash
# Make sure you're using Node.js 18+
node --version

# Update pnpm
npm install -g pnpm@latest

# Try building again
pnpm build
```

### Port already in use

```bash
# Kill the process using port 5173
lsof -ti:5173 | xargs kill -9

# Or use a different port
cd apps/web
vite --port 3000
```

### PWA not installing

1. Make sure you're using HTTPS (or localhost)
2. Check that service worker is registered (DevTools → Application → Service Workers)
3. Clear browser cache and try again

## Next Steps After Running

1. **Download AI Models** (see README.md for links)
2. **Add NCERT Content** (process PDFs)
3. **Customize for Your School** (branding, subjects)
4. **Test Offline Mode** (disconnect internet, verify it works)
5. **Set Up ESP32** (optional, for hardware reminders)

## Need Help?

- Check the main [README.md](../README.md) for detailed documentation
- Review the [walkthrough.md](/.gemini/antigravity/brain/443f9210-6631-4359-ba66-0208d9293fac/walkthrough.md) for architecture details
- Open an issue on GitHub

---

**Quick Command Reference:**

```bash
# Development
pnpm dev:web              # Run web app
pnpm dev:mobile           # Run mobile app

# Building
pnpm build                # Build all packages
pnpm build:web            # Build web app only
pnpm build:mobile         # Build mobile app

# Deployment
cd apps/web && vercel     # Deploy to Vercel
cd apps/web && netlify    # Deploy to Netlify
```

Happy coding!
