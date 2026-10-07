# katalon-saucelabs-mobile

Mobile Automation untuk Sauce Labs Sample App (Android) menggunakan Katalon Studio.

## Struktur Project

```
katalon-saucelabs-mobile/
├── Profiles/
│   ├── default.glbl          # APK path
│   └── mobile.glbl           # Credential + device config
├── APK/
│   └── SauceLabs.apk         # Sample app (download sendiri)
├── Test Cases/
│   └── Mobile/
│       ├── TC01_Login_Positive.tc
│       ├── TC02_Login_Negative.tc
│       └── TC03_AddToCart.tc
├── Object Repository/
│   └── Mobile/               # Element locators
├── Test Suites/
│   └── TS_Mobile_Suite.ts    # Runner semua TC
└── Reports/                  # Auto-generated
```

## Test Coverage

|TC ID|Scenario|Type|Data|
|---|---|---|---|
|TC01|Login standard_user|Positive|Global Variable|
|TC02|Login invalid credentials|Negative|Hardcoded invalid|
|TC03|Login + Add to Cart|Positive|Global Variable|

## Cara Menjalankan

### Prasyarat
1. Android Emulator running (API 30+)
2. APK file di folder `APK/`

### Via Katalon Studio GUI
1. Buka project di Katalon Studio
2. Test Suites → TS_Mobile_Suite → Run

### Via CLI
```bash
katalonc -noSplash -runMode=console \
  -projectPath="./katalon-saucelabs-mobile" \
  -testSuitePath="Test Suites/TS_Mobile_Suite" \
  -reportFolder="./Reports"
```

## Catatan
- APK path menggunakan `${projectDir}` (project-relative, no hardcode)
- No Record Mobile — semua script manual
- Global Variable untuk credential + device config
