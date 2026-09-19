# Review lessons - Play 1.0.0-2

Status: locked - Play da dung versionCode 2  
Date: 2026-09-18  
Binary: `store/out/android/1.0.0-2/rmms-w3-release-1.0.0-2.aab` - khong tai lai

## Errors

| id | Surface | Error | Fix | Do not repeat |
|----|---------|-------|-----|---------------|
| P01 | Play upload | Target API thap hon 36 | compileSdk/targetSdk 36 + AAB moi | Khong nop AAB target 35 |
| P02 | Play upload | Ma phien ban 2 da dung | versionCode +1 (thanh 3 roi 4) | Khong keo lai file 1.0.0-2 |
| P03 | Capture | w3Debug bat ban do | Chi w3Release + rmms-admin tren emulator-5554 | Khong chup Debug / acc rmms-002 |
| P04 | Device | Hai may adb cung luc | `ANDROID_SERIAL=emulator-5554` | Khong installW3Release len SM_N986U luc chup |
| P05 | Graphics | Play crop sai o icon/feature | Dung file SSOT 512 PNG alpha + 1024x500 khong alpha | Khong AI ve / stretch |

## Keep

- Phone listing 01-04 van dung folder `1.0.0-2/`
- Icon/feature SSOT: `store/out/android/play-icon-512x512.png` va `play-feature-1024x500.png`
