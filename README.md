# P.E.E.R

**Offline-First AI Learning Platform for Rural Schools in India**

P.E.E.R ("Peer-to-Peer Education & Energy Resource") is a complete open-source learning platform designed to work 100% offline after initial setup. It combines local AI inference, peer-to-peer sync, multi-language support, and gamification to empower students in rural areas with limited internet connectivity.

## Features

### Core Capabilities
- **100% Offline Operation** - Works without internet after first sync
- **Local AI Tutor** - 4-bit quantized Gemma-2B/Phi-3-mini running on-device
- **RAG Pipeline** - Semantic search over NCERT textbooks
- **Multi-Language** - Hindi, English, Tamil, Telugu, Bengali (speech + text)
- **P2P Sync** - Bluetooth & Wi-Fi Direct device-to-device sync
- **Gamification** - Points, badges, streaks, knowledge credits
- **Peer Tutoring** - Encrypted chat and micro-tutoring marketplace
- **Teacher Dashboard** - Mastery heatmaps and class analytics
- **Cross-Platform** - React PWA (web) + React Native (mobile) sharing 90% code
- **ESP32 Integration** - BLE-connected hardware for reminders

### Technical Stack

**Frontend:**
- React 18 + TypeScript
- Vite (web) + Expo (mobile)
- NativeWind v4 (Tailwind CSS) for mobile styling
- React Router for navigation
- Recharts for data visualization

**Data Layer:**
- SQLite (sql.js for web, expo-sqlite for mobile)
- Yjs CRDT for offline-first sync
- IndexedDB for persistence

**AI & ML:**
- llama.cpp WebAssembly (web)
- ONNX Runtime (mobile)
- ChromaDB-lite for vector search
- Vosk (speech-to-text)
- Piper (text-to-speech)

**Sync & P2P:**
- Bluetooth Low Energy
- Wi-Fi Direct (Android)
- End-to-end encryption

**Hardware:**
- ESP32 BLE firmware (Arduino)
- Vibration motor + LED + light sensor

## Project Structure

```
peer/
├── apps/
│   ├── web/                    # React + Vite PWA
│   │   ├── src/
│   │   │   ├── pages/         # Dashboard, Learn, Chat, Profile
│   │   │   ├── components/    # Shared UI components
│   │   │   └── main.tsx       # Entry point
│   │   ├── vite.config.ts     # PWA configuration
│   │   └── package.json
│   │
│   ├── mobile/                 # React Native Expo app
│   │   ├── App.tsx            # Main app with navigation
│   │   ├── app.json           # Expo configuration
│   │   ├── src/screens/       # Mobile screens
│   │   └── package.json
│   │
│   └── admin/                  # Next.js Admin Portal
│       ├── app/               # Next.js app directory
│       ├── components/        # Admin UI components
│       ├── prisma/            # Database schema
│       ├── Dockerfile         # Docker configuration
│       ├── docker-compose.yml # Docker Compose setup
│       └── package.json
│
├── packages/
│   ├── shared/                 # Types, constants, utilities
│   ├── db/                     # SQLite schema & client
│   ├── sync/                   # Yjs CRDT sync logic
│   ├── ai/                     # AI inference (llama.cpp, ONNX)
│   ├── rag/                    # RAG pipeline (PDF, chunking, embeddings)
│   ├── speech/                 # Vosk STT + Piper TTS
│   ├── gamification/           # Points, badges, credits
│   └── p2p/                    # Bluetooth/Wi-Fi Direct sync
│
├── firmware/
│   └── esp32/                  # Arduino BLE firmware
│       ├── vidyut_bandhu.ino
│       └── README.md
│
├── data/
│   └── ncert-excerpts/         # Sample textbook content
│       ├── class6-math.txt
│       └── class6-science.txt
│
├── scripts/
│   ├── seed-db.ts              # Database seeding
│   └── process-textbooks.ts    # PDF processing pipeline
│
├── docs/
│   ├── ARCHITECTURE.md         # System architecture
│   ├── DEPLOYMENT.md           # Deployment guide
│   └── OFFLINE_STRATEGY.md     # Offline-first design
│
├── package.json                # Root workspace config
├── pnpm-workspace.yaml
└── README.md                   # This file
```

## Installation & Quick Start

### Prerequisites

Ensure you have the following installed on your system:

**Required:**
- **Node.js 18+** - [Download](https://nodejs.org/)
- **pnpm 8+** - Install globally: `npm install -g pnpm`

**Optional (depending on what you want to run):**
- **Docker & Docker Compose** - For the Admin portal ([Download](https://www.docker.com/))
- **Android Studio** - For mobile app on Android ([Download](https://developer.android.com/studio))
- **Xcode** - For mobile app on iOS (macOS only, [Download](https://developer.apple.com/xcode/))
- **Arduino IDE with ESP32 support** - For hardware integration ([Download](https://www.arduino.cc/en/software))

### Step 1: Clone and Install Dependencies

```bash
# Clone the repository
git clone https://github.com/yourusername/peer.git
cd peer

# Install all workspace dependencies
pnpm install
```

This will install dependencies for all packages and apps in the monorepo.

### Step 2: Build All Packages

```bash
# Build all packages (required before running apps)
pnpm build
```

This compiles:
- Shared packages (`@vidyut/shared`, `@vidyut/db`, etc.)
- Admin portal (Next.js)
- Web app (Vite + React)

**Expected output:** All packages should build successfully with exit code 0.

### Step 3: Set Up Admin Portal (Optional)

If you want to use the admin portal for managing students and tracking performance:

#### Option A: Using Docker (Recommended)

1. Create `.env` file in `apps/admin/`:
   ```bash
   cd apps/admin
   cp .env.example .env  # or create manually
   ```

2. Add the following to `.env`:
   ```dotenv
   POSTGRES_USER=vidyut
   POSTGRES_PASSWORD=your_secure_password
   POSTGRES_DB=vidyut_admin
   DATABASE_URL=postgresql://vidyut:your_secure_password@localhost:5432/vidyut_admin
   ```

3. Start with Docker:
   ```bash
   docker-compose up -d
   ```

#### Option B: Using Local PostgreSQL

1. Install PostgreSQL locally
2. Create database: `createdb vidyut_admin`
3. Set up `.env` as above
4. Run migrations:
   ```bash
   cd apps/admin
   pnpm prisma db push
   pnpm prisma db seed  # Optional: seed with sample data
   ```

### Step 4: Download AI Models (Optional)

AI models are **not included** in the repository due to size. Download them if you want offline AI features:

```bash
# Run the download script (requires wget and unzip)
chmod +x scripts/download-models.sh
./scripts/download-models.sh
```

This downloads:
- **Gemma-2B 4-bit GGUF** (~1.6GB) for web AI inference
- **Vosk speech models** (~40MB each) for English and Hindi

**Note:** Mobile ONNX models (Phi-3-mini) must be downloaded manually from [HuggingFace](https://huggingface.co/microsoft/Phi-3-mini-4k-instruct-onnx) and placed in `apps/mobile/assets/models/`.

### Step 5: Run the Applications

#### Web App (PWA)

```bash
# Development mode
pnpm dev:web

# Production build
pnpm build:web
cd apps/web/dist
python3 -m http.server 8080
```

Open [http://localhost:5173](http://localhost:5173) (dev) or [http://localhost:8080](http://localhost:8080) (prod)

**Installing as PWA:**
1. Open the web app in Chrome/Edge
2. Click the install icon in the address bar
3. The app will work offline after installation

#### Mobile App (Expo)

```bash
cd apps/mobile

# Start Expo dev server
pnpm start

# Run on Android (requires Android Studio/emulator)
pnpm android

# Run on iOS (macOS only, requires Xcode)
pnpm ios
```

Scan the QR code with **Expo Go** app ([Android](https://play.google.com/store/apps/details?id=host.exp.exponent) | [iOS](https://apps.apple.com/app/expo-go/id982107779)) or use an emulator.

#### Admin Portal

```bash
cd apps/admin

# Development mode
pnpm dev

# Or with Docker
docker-compose up -d
```

Open [http://localhost:3000](http://localhost:3000)

**Default credentials** (if using seed data):
- Email: `admin@vidyut.org`
- Password: `admin123`

### Troubleshooting

**Build fails with TypeScript errors:**
```bash
# Clean and rebuild
pnpm clean
pnpm install
pnpm build
```

**Port already in use:**
- Web: Change port in `apps/web/vite.config.ts`
- Admin: Set `PORT=3001` in `.env`
- Mobile: Expo will automatically find an available port

**Models not downloading:**
- Ensure `wget` and `unzip` are installed
- Check internet connection
- Download manually from the URLs in `scripts/download-models.sh`

**Docker issues:**
- Ensure Docker daemon is running
- Check ports 5432 (PostgreSQL) and 3000 (Next.js) are available
- Run `docker-compose logs` to see error details

---

## Deployment

### For Rural Schools - Deployment Guide

### Option 1: Raspberry Pi Server

1. **Hardware Needed:**
   - Raspberry Pi 4 (4GB+ RAM)
   - MicroSD card (32GB+)
   - Power supply
   - Optional: Battery backup

2. **Setup:**
   ```bash
   # Install Node.js on Raspberry Pi
   curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
   sudo apt-get install -y nodejs
   
   # Clone and build
   git clone https://github.com/yourusername/peer.git
   cd peer
   npm install -g pnpm
   pnpm install
   pnpm build:web
   
   # Serve the app
   cd apps/web/dist
   python3 -m http.server 8080
   ```

3. **Access:**
   - Students connect to Pi's Wi-Fi hotspot
   - Open browser to `http://192.168.x.x:8080`
   - Install PWA for offline use

### Option 2: Android Tablets

1. Build the APK:
   ```bash
   cd apps/mobile
   npx expo build:android
   ```

2. Distribute APK to tablets via USB or local file sharing

3. Students install and use offline

### Option 3: Offline Content Distribution

1. **Initial Setup (with internet):**
   - Download all models and content
   - Seed database with NCERT textbooks
   - Build and test the app

2. **Distribution:**
   - Copy built app + models to USB drives
   - Distribute to schools
   - Students copy to their devices

3. **P2P Sync:**
   - Students sync progress via Bluetooth
   - No internet required after setup

## Development

### Adding New Content

```bash
# Process NCERT PDFs
pnpm process-textbooks

# Seed database
pnpm seed-db
```

### Running Tests

```bash
pnpm test
```

### Code Quality

```bash
# Lint
pnpm lint

# Format
pnpm format
```

## ESP32 Hardware Setup

See [firmware/esp32/README.md](firmware/esp32/README.md) for detailed instructions.

**Quick Summary:**
1. Flash the Arduino sketch to ESP32
2. Pair with mobile app via Bluetooth
3. Set reminder times in app
4. Device vibrates/blinks LED at study times

## Gamification System

### Points
- Quiz correct answer: 10 points
- First try bonus: +5 points
- Daily login: 5 points
- 7-day streak: 20 points bonus
- Content completion: 50 points
- Mastery achieved: 100 points

### Badges
- **First Steps** - Complete first lesson
- **Week Warrior** - 7-day streak
- **Math Master** - Master 10 math topics
- **Science Explorer** - Complete 20 science topics
- **Helpful Friend** - Help 5 peers
- **Point Collector** - Earn 1000 points

### Knowledge Credits
- Earn credits by helping peers
- Spend credits to get help from advanced students
- Creates a peer tutoring economy

## Supported Languages

- English
- हिंदी (Hindi)
- தமிழ் (Tamil)
- తెలుగు (Telugu)
- বাংলা (Bengali)

Both UI and voice support for all languages.

## Architecture

### Offline-First Design

1. **Data Layer:** SQLite for structured data, IndexedDB for blobs
2. **Sync Layer:** Yjs CRDT for conflict-free merging
3. **Network Layer:** Works offline, syncs when online
4. **P2P Layer:** Bluetooth/Wi-Fi Direct for device-to-device sync

### AI Pipeline

```
User Question
    ↓
RAG Retrieval (ChromaDB-lite)
    ↓
Context + Question → Prompt
    ↓
Local AI Model (Gemma/Phi-3)
    ↓
Response
```

## Contributing

We welcome contributions! Please see [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

## License

MIT License - see [LICENSE](LICENSE) for details.

## Acknowledgments

- NCERT for public domain textbooks
- Vosk for offline speech recognition
- Piper for offline TTS
- llama.cpp for efficient inference
- The open-source community

## Support

- 📧 Email: support@peer.org
- 💬 Discord: [Join our community](https://discord.gg/peer)
- 🐛 Issues: [GitHub Issues](https://github.com/yourusername/peer/issues)

## Roadmap

- [ ] Support for more Indian languages (Kannada, Malayalam, Marathi)
- [ ] Offline video lessons
- [ ] Handwriting recognition for math problems
- [ ] Integration with government education portals
- [ ] Solar-powered ESP32 version
- [ ] Mesh networking for multi-device sync

---

**Built with love for rural education in India**

*"Empowering every student, everywhere, even offline"*
