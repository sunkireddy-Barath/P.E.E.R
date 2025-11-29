# P.E.E.R Mobile App

React Native mobile application for P.E.E.R, built with Expo and deployable via Expo Go.

## Features

- Cross-platform (iOS & Android)
- Native UI components
- Bottom tab navigation
- Dashboard with learning stats
- Course browsing and learning
- Community features
- User profile and achievements

## Styling

The app uses **NativeWind v4** to bring Tailwind CSS to React Native.
- **Global Styles**: Defined in `global.css`.
- **Components**: Styled using `className` prop.
- **Configuration**: `tailwind.config.js` and `metro.config.js` are configured for NativeWind v4.

## Prerequisites

- Node.js 18+
- npm or pnpm
- Expo Go app on your mobile device ([iOS](https://apps.apple.com/app/expo-go/id982107779) | [Android](https://play.google.com/store/apps/details?id=host.exp.exponent))

## Getting Started

### Installation

```bash
# From the root of the monorepo
pnpm install

# Or from this directory
cd apps/mobile
pnpm install
```

### Running in Expo Go

1. **Start the development server:**
   ```bash
   pnpm start
   ```

2. **Open on your device:**
   - **iOS**: Scan the QR code with your Camera app
   - **Android**: Scan the QR code with the Expo Go app

3. The app will load on your device and you can start testing!

### Development Commands

```bash
# Start development server
pnpm start

# Start with cleared cache
pnpm start --reset-cache

# Run on Android emulator
pnpm android

# Run on iOS simulator (macOS only)
pnpm ios

# Run in web browser
pnpm web
```

## Project Structure

```
apps/mobile/
├── App.tsx                 # Main app entry point
├── app.json               # Expo configuration
├── package.json           # Dependencies
├── src/
│   └── screens/           # Screen components
│       ├── DashboardScreen.tsx
│       ├── LearningScreen.tsx
│       ├── CoursesScreen.tsx
│       ├── CommunityScreen.tsx
│       └── ProfileScreen.tsx
└── assets/                # Images, fonts, etc.
```

## Building for Production

### Android APK

```bash
# Build APK
npx expo build:android

# Or use EAS Build (recommended)
npx eas build --platform android
```

### iOS IPA

```bash
# Build IPA (requires Apple Developer account)
npx expo build:ios

# Or use EAS Build (recommended)
npx eas build --platform ios
```

## Expo Go Limitations

When running in Expo Go, the following limitations apply:

- Cannot use custom native modules not included in Expo SDK
- Limited background task capabilities
- Some device features may be restricted

For full native capabilities, build a standalone app using `expo build` or EAS Build.

## Troubleshooting

### QR Code Not Scanning

- Ensure your phone and computer are on the same network
- Try using the tunnel connection: `pnpm start --tunnel`

### Startup Error: `Use process(css).then(cb)`

This error occurs when there is a mismatch between NativeWind and Expo versions.
- **Fix**: Ensure you are using NativeWind v4. Run `pnpm install` to get the correct dependencies.
- **Reset Cache**: Run `pnpm start --reset-cache`.

### Metro Bundler Issues

- Clear the cache: `pnpm start --clear`
- Delete `node_modules` and reinstall: `rm -rf node_modules && pnpm install`

### App Crashes on Device

- Check the error message in the Expo Go app
- View logs in the terminal where you ran `pnpm start`
- Shake your device to open the developer menu

## Environment Variables

Create a `.env` file in this directory for environment-specific configuration:

```env
API_URL=https://your-api-url.com
```

## Contributing

Please see the main [README](../../README.md) for contribution guidelines.

## License

MIT License - see [LICENSE](../../LICENSE) for details.
