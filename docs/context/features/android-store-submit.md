# Context — Android CH Play submit (AAB + listing)

> **Slug:** `android-store-submit` · **Module:** Compliance × Native Android  
> **Status:** Context (runbook 2026-09-18 · **chưa** AAB Store)  
> **Skills:** `/fill-build-android-info` · `/plan-release-mobile` · `/build-release-app` · `/review-app-submit` · `/store-image-capture`  
> **Runbook tay:** [`../../plan/release-mobile/store/ANDROID-SUBMIT-GUIDE.md`](../../plan/release-mobile/store/ANDROID-SUBMIT-GUIDE.md) · Studio: [`../../plan/release-mobile/store/ANDROID-STUDIO-RELEASE.md`](../../plan/release-mobile/store/ANDROID-STUDIO-RELEASE.md)  
> **Skill generic:** `fill-build-android-info/example/chplay-upload.md` · `review-app-submit/example/play-submit.md`  
> **Peers:** [`ios-store-submit.md`](ios-store-submit.md) · [`legal-tech-corridor.md`](legal-tech-corridor.md) · [`login.md`](login.md)

**Mọi app Android mới:** fill identity từ Play Console **trước** AAB. Lệch package / debug keystore / BFF emulator → Google reject hoặc user không cài đè được.

## 1. Tổng quan

| | |
|--|--|
| Mục tiêu | AAB Store: package khóa · Play App Signing · listing + Data safety khớp wave · user Send for review |
| RMMS Play identity | `applicationId` `com.drvn.rmms.store` · `1.0.0` (2) · `targetSdk` 36 · upload `rmms-upload.jks` · Release BFF HTTPS prod · flavor `w3` skip map (`STORE_W1=false`, GPS+cam ON) |
| DoD | `/fill-build-android-info` verify PASS · `/plan-release-mobile` W3 skip map · `/review-app-submit` P1–P11 · user nộp Console |

## 2. Design / listing

Phone **1080×1920** (Pixel 2) ≥2 shot. Icon 512 PNG **có** alpha · feature 1024×500 **không** alpha. Shot **chỉ** surface `flags.json` ON. Acc App access: [`REVIEW-ACCOUNTS.md`](../../plan/release-mobile/store/REVIEW-ACCOUNTS.md) `rmms-002` — **cấm** `rmms-admin` trên Play. **Cấm** pack iOS 6.9" lên Play.

## 3. API / host

`BFF_BASE` HTTPS prod trên **Release** `buildConfigField` — **cấm** host trong `.kt` · **cấm** `10.0.2.2` / HTTP Store. Prefix `mobile-bff/api/v1`. Privacy listing: `https://rmms.vn/privacy`.

## 4. Database

N/A (không đổi schema).

## 5. Events

N/A.

## 6. Gates (app mới + rebuild)

| Incident | Play / gap | Fix bắt buộc |
|----------|------------|----------------|
| Package lệch | `GAP-AND-INFO-01` | Paste App identity · **cấm** invent · khóa sau AAB đầu |
| APK production | policy | `bundleW3Release` AAB |
| Debug / no upload key | `GAP-AND-SIGN-01` `02` | `keystore.properties` gitignored · Play App Signing |
| Keystore mới khi Play đã có upload key | `GAP-AND-SIGN-03` | Cùng key · hoặc Google reset |
| BFF emulator / HTTP | `GAP-AND-BFF-01` | Release HTTPS `rmms-mobile-bff.linm-soft.com` |
| Cleartext `10.0.2.2` trên `main` | `GAP-AND-ATS-01` | Chỉ `src/debug` |
| Map leak W3 | `GAP-REL-LEAK-01` | `STORE_W1=false` trên AAB Store |
| Data safety | P8 | Khớp Manifest + flags (GPS/cam W3 ON · map OFF) |
| Graphics | P4–P6 | 512 / 1024×500 / ≥2×1080×1920 live |
| Privacy URL | P7 | `https://rmms.vn/privacy` 200 — **không** `app.rmms.vn` |
| Personal acc mới | Closed testing | Internal → Closed trước Production |

**Cấm** `assembleDebug` làm Store. **Cấm** agent Send for review.

## 7. Slash

```
/fill-build-android-info  → package + version + upload key + BFF
/plan-release-mobile
/build-release-app       → android rồi w3_camera
/run-mobile-e2e          → store_wave
/review-app-submit
# user: Play Console ANDROID-SUBMIT-GUIDE.md
```
