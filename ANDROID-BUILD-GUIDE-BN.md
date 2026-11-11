# Hourly Production Pro — Android APK

এই repository একই source থেকে Website/PWA এবং Android APK তৈরি করে।

## Android build
1. GitHub repository-তে Actions tab খুলুন।
2. Build Android APK workflow নির্বাচন করুন।
3. Run workflow চাপুন।
4. Build শেষ হলে workflow run-এর Artifacts অংশ থেকে hourly-production-pro-debug-apk ডাউনলোড করুন।
5. ZIP extract করে app-debug.apk Android ফোনে install করুন।

প্রথমবার APK build হতে কয়েক মিনিট লাগতে পারে। এই workflow debug APK তৈরি করে; Play Store release-এর জন্য পরে আলাদা signed release build এবং signing key প্রয়োজন হবে।

## Local commands
```bash
npm install
npm run build:web
npx cap add android
npx capacitor-assets generate --android --iconBackgroundColor '#123D2B' --splashBackgroundColor '#123D2B'
npx cap sync android
```

Android APK build GitHub Actions-এ করা যাবে, তাই local Android Studio বাধ্যতামূলক নয়।
