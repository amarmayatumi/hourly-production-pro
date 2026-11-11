# Hourly Production Pro (PWA)

## কী আছে
- PCS দিয়ে ১০ ঘণ্টা/নির্বাচিত সময়ের planning distribution
- ০, ১ বা ২ ঘণ্টা বিরতি এবং বিরতির শুরুর সময়
- প্রতিবার নতুন random distribution; যোগফল নির্ভুল
- History (এই ডিভাইসের browser storage-এ)
- Copy, Share এবং CSV export
- Service worker cache: একবার অনলাইনে খোলার পর offline ব্যবহার
- PWA manifest ও 192/512 app icons

## Android-এ ইনস্টল
PWA install করার জন্য ফাইলটি `file://` থেকে নয়, HTTPS ওয়েবসাইটে চালাতে হবে।
1. এই ZIP extract করুন।
2. `hourly-production-pro` ফোল্ডারের সব ফাইল একটি HTTPS static hosting-এ প্রকাশ করুন (যেমন GitHub Pages বা Netlify)।
3. প্রকাশিত HTTPS URL Chrome-এ খুলুন।
4. Chrome-এর ⋮ মেনুতে **Install app** বা **Add to Home screen** দেখাবে। পেজের Install App বাটনও দেখা যেতে পারে।
5. ইনস্টল হলে অ্যাপটি হোম স্ক্রিন থেকে খুলবে এবং আগে cache হলে offline-এও চলবে।

## গুরুত্বপূর্ণ
এই টুলটি planning/simulation-এর জন্য। Actual garment production report-এ বাস্তব উৎপাদনের সংখ্যা ব্যবহার করতে হবে; অনুমানকে actual production হিসেবে দেখানো উচিত নয়.
