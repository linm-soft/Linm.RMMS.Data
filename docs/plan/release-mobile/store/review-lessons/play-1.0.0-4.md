# Review lessons - Play 1.0.0-4

Status: packed - cho 1.0.0 (3) live hoac reject roi moi tao release moi  
Date: 2026-09-18  
Binary: `store/out/android/1.0.0-4/rmms-w3-release-1.0.0-4.aab`  
sha256: `2da3f8dda6e6c72d0c130ec22d1aa4625408b38855064863d1bd2f433f5120be`  
Stack: AGP 9.0.1 · Gradle 9.1.0 · R8 9.0.32 minify+shrink · versionCode 4

## Errors

| id | Surface | Error | Fix | Do not repeat |
|----|---------|-------|-----|---------------|
| P20 | Play App optimization | DEX thap / lam roi 0% / can AGP 9 | Bat minify+shrink, AGP 9.0.1, AAB moi ma 4 | Khong sua AAB 3 dang In review |
| P21 | Runtime w3Release | Crash Moshi ArrayList luc Application onCreate | Keep `org.linmsoft.rmms.**` + Kotlin metadata (KotlinJsonAdapterFactory) | Khong minify ma thieu keep DTO/domain JSON |
| P22 | Native symbols | Khong strip duoc libmaplibre.so va mot so JNI | debugSymbolLevel SYMBOL_TABLE; Play van nhan AAB | Khong doi NDK chi de im canh bao thu vien prebuilt |
| P23 | Pack folder | Copy icon/feature vao 1.0.0-4 | Chi AAB; listing anh van 1.0.0-2 + root SSOT | Khong copy graphic truoc released_success |
| P24 | Track | Upload 4 khi 3 con In review | Cho 3 xong; Tao ban phat hanh moi; keo 1.0.0-4 | Khong huy 3 neu Google dang duyet |

## Keep

- Smoke emulator-5554: guest home + FAQ OK sau keep rules
- mapping.txt: `app/build/outputs/mapping/w3Release/mapping.txt` (Play doc trong AAB)
- Tab 1 HTML: 1.0.0 (4) - Data safety khong doi
