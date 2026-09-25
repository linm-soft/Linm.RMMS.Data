# Guide — Bundle, upload, review Android RMMS (CH Play)

> Runbook tay trên **Play Console**. Studio (variant · keystore · Generate Bundles): [`ANDROID-STUDIO-RELEASE.md`](ANDROID-STUDIO-RELEASE.md).  
> Slash chain: `/fill-build-android-info` → `/plan-release-mobile` → `/build-release-app` → `/review-app-submit`.  
> Skill generic (mọi app): `{RulesRoot}/common/skill/fill-build-android-info/example/chplay-upload.md` · Must `review-app-submit/example/play-submit.md`.  
> **Cấm** agent bấm **Send for review**. **Cấm** dán mật khẩu demo vào file này — xem [`REVIEW-ACCOUNTS.md`](REVIEW-ACCOUNTS.md).  
> **Context:** [`../../context/features/android-store-submit.md`](../../context/features/android-store-submit.md) · peer iOS [`IOS-SUBMIT-GUIDE.md`](IOS-SUBMIT-GUIDE.md)

Listing copy: [`submit-info-play.html`](submit-info-play.html) Tab 1 = version đang pack · Tab 3 bài học. SSOT lỗi theo version: [`review-lessons/README.md`](review-lessons/README.md). Screenshot Play: Pixel 2 **1080×1920** - `/store-image-capture`. Flags: [`../flags.json`](../flags.json).

**CH Play** = Google Play (tên VN). Console: [play.google.com/console](https://play.google.com/console).

---

## 0. Phân biệt ba chỗ

| Nơi | Ý nghĩa |
|-----|---------|
| Gradle **`bundleW3Release`** | Sinh file `.aab` trên máy |
| Play Console **Internal / Closed / Production** | Google nhận AAB · tester / review |
| CH Play (điện thoại) | Chỉ sau **Approved** + rollout (thường staged 5–20% rồi 100%) |

Upload AAB **không** = app hiện trên CH Play công khai.

---

## 0b. Đăng ký tài khoản developer (lần đầu)

Chưa có Play Console → làm **trước** Create app / AAB.

| Việc | Link |
|------|------|
| Form đăng ký | [play.google.com/console/signup](https://play.google.com/console/signup) |
| Guide tạo acc | [Get started with Play Console](https://support.google.com/googleplay/android-developer/answer/6112435) |
| Giấy tờ Personal vs Organization | [Required information](https://support.google.com/googleplay/android-developer/answer/13628312) |

| # | Làm |
|---|-----|
| 1 | Google Account **org** — pháp nhân [`thong-tin-cty-mien-trung.md`](../../context/thong-tin-cty-mien-trung.md) (ưu tiên Organization, không acc cá nhân) |
| 2 | Accept Developer Distribution Agreement → nộp **US$25** một lần |
| 3 | Verify identity (Organization: D-U-N-S / giấy tờ công ty nếu Google đòi) |
| 4 | Acc **Active** mới vào Console |

Personal acc **mới** (sau Nov 2023): Google thường đòi **Closed testing** (tester opt-in đủ ngày) trước Production — Internal rồi Closed **trước**, không skip thẳng Production nếu Console chặn.

Pháp nhân Store: CÔNG TY CỔ PHẦN CÔNG NGHỆ VÀ THƯƠNG MẠI MIỀN TRUNG · MST `2900765654`. **Cấm** bịa D-U-N-S / email Account Holder.

---

## 1. Identity (khớp AAB)

Repo: `Linm.RMMS.Mobile.Android` · `app/build.gradle.kts` — **không** `Linm.Mobile.Kit.Android` (library UI).

| Ô | Giá trị 1.0.0 (3) | Nguồn |
|---|--------|--------|
| Package name | `com.drvn.rmms.store` | Play Console → **App identity** · Gradle `applicationId` |
| Kotlin `namespace` | `org.linmsoft.rmms` | Giữ — **không** đổi folder `.kt` vì Play package |
| versionName | `1.0.0` | Version in-flight |
| versionCode | `4` | Play đã khóa 1–3 · **(3)** In review · mỗi **upload** AAB mới phải +1 |
| targetSdk / compileSdk | **36** | Play production 2026 |
| BFF | `https://rmms-mobile-bff.linm-soft.com` | HTTPS reviewer gọi được · **Release** `BFF_BASE` đã khóa · Debug vẫn `local.properties` |
| Prefix | `mobile-bff/api/v1` | Giữ |
| Signing | Upload `rmms-upload.jks` · `keystore.properties` gitignored | User điền password **local**. Path: `…/OneDrive-Personal/RMMS-KEY/rmms-upload.jks` |
| Wave Store | Flavor `w3` + Release: `STORE_W1` **false** · W2+W3 **true** | Wave 3 skip map — [`flags.json`](../flags.json) |

Wave 3 Release (khớp iOS): `STORE_W0` ẩn OTP SMS · GPS WhenInUse + camera **ON** · map / public OSRM **OFF**.

Đổi package / version / keystore / BFF → `/fill-build-android-info` (dán từ Console). **Không** bundle AAB trong skill đó (`GAP-AND-BUNDLE-01`). Analog iOS: `/fill-build-ios-info` **không** Archive.

Package **khóa** sau AAB đầu — đổi = app **khác** (`GAP-AND-INFO-01`). **Cấm** Create app mới vì đổi UI.

---

## 1b. Gap còn lại — chặn AAB Store (2026-09-18)

`/fill-build-android-info` + `/plan-release-mobile` **trước** `/build-release-app`. Identity / upload key / BFF Release / ATS **đã** fill; flavor Store **chưa**.

| Gap | Hiện | Phải |
|-----|------|------|
| `GAP-AND-INFO-01` | **PASS** `applicationId` = `com.drvn.rmms.store` | Giữ — **cấm** đổi sau AAB đầu |
| `GAP-AND-VER-01` | **PASS** `1.0.0` (2) | AAB (1) đã trên Play · target API 36 |
| `GAP-AND-SIGN-01` / `02` | **PASS** `signingConfigs.release` + `keystore.properties` gitignored | User điền password local · **cấm** password git · **cấm** debug keystore |
| `GAP-AND-BFF-01` | **PASS** Release `BFF_BASE` = `https://rmms-mobile-bff.linm-soft.com` | Debug được emulator / `local.properties` |
| `GAP-AND-ATS-01` | **PASS** `src/main` không cleartext emulator · debug source set giữ `10.0.2.2` | |
| `GAP-REL-LEAK-01` | **PASS** `w3Release` `STORE_W1=false` (debug lab vẫn W1 true) | Map UI gated `ReleaseFlags` |
| Flavor `w3Release` | **PASS** `productFlavors` `w0`…`w3` · default `w3` | `/build-release-app` `bundleW3Release` · **cấm** `assembleRelease` APK |

---

## 1c. Tạo upload key (lần đầu) — analog iOS Team

Play **không** phát file `.jks`. Analog iOS `/fill-build-ios-info` Team `DEVELOPMENT_TEAM`: Android tự **tạo upload key** trên máy, giữ mãi. Google giữ **app signing key** sau AAB đầu (Play App Signing).

**Cấm** Generate / Finish wizard này để ra AAB (`GAP-AND-BUNDLE-01`). AAB = `/build-release-app` sau, analog iOS **không** Archive trong fill.

### Menu Android Studio (app mới, lần đầu)

Cửa sổ phải là **LinmRmms** · module **`:app`**. Cây Project: `Linm.RMMS.Mobile.Android` — **không** Kit.

| # | Menu / nút | Chọn |
|---|------------|------|
| 0 | Thanh menu **Build** | **Generate Signed App Bundle or APK…** |
| 1 | Radio | **Android App Bundle** (không **APK**) → **Next** |
| 2 | Key store | **Create new…** (không **Choose existing** / `debug.keystore`) |
| 3 | New Key Store | **Key store path** → folder ` /Users/mac/linm-keys/rmms-upload.jks ` |
| 4 | Cùng dialog | **Alias** `rmms-upload` · Password **local** (không dán chat) · Validity **10000** · Certificate DN (tên org) → **OK** |
| 5 | Quay lại màn keystore | File + alias đã điền — **Cancel** (góc dưới). **Không** Next / Create |

Lệch chữ menu (bản Studio khác) → user **attach screenshot** màn đang mở.

### `keytool` (cùng kết quả)

```bash
mkdir -p "$HOME/linm-keys"
keytool -genkeypair -v \
  -keystore "$HOME/linm-keys/rmms-upload.jks" \
  -alias rmms-upload \
  -keyalg RSA -keysize 2048 -validity 10000
```

Xong → dán vào `/fill-build-android-info` Step 2:

```
/Users/mac/linm-keys/rmms-upload.jks
alias: rmms-upload
```

Agent ghi `keystore.properties` gitignored (password **user** điền local). **Cấm** password trong `build.gradle.kts`.

---

## 2. Graphics listing (P4–P6)

SSOT px: [Play graphic assets](https://support.google.com/googleplay/android-developer/answer/9866151).

| Asset | Size | Format |
|-------|------|--------|
| Hi-res icon | **512×512** | PNG **có alpha** · vuông đủ · Play tự bo góc · **không** pre-round |
| Feature graphic | **1024×500** | JPEG / PNG **không** alpha |
| Phone screenshots | ≥ **2** (khuyến nghị ≥4 @ **1080×1920**) | Pixel 2 · PNG/JPEG **không** alpha |

Chụp **live** UI wave 3: guest · FAQ · staff lists · GPS · camera. **Cấm** GIS / patrol-map / directions / OTP SMS. **Cấm** AI vẽ / splash-only.

Acc chụp local: **`rmms-admin`** (không `rmms-002`). Acc **App access** Play: `rmms-002` — [`REVIEW-ACCOUNTS.md`](REVIEW-ACCOUNTS.md). Binary chụp: **w3Release** prod BFF — **cấm** `w3Debug` (map ON). In-flight AAB `1.0.0 (3)`; pack tiếp `1.0.0 (4)`.

Pack: `store/out/android/` (icon + feature SSOT) · `store/out/android/1.0.0-4/` (AAB next R8) · `1.0.0-3/` (AAB in-review) · `1.0.0-2/` (phone 01–04). Pack iOS **không** upload Play. Version folder **mới**: chỉ copy icon/feature khi confirm `released_success`.

---

## 3. Bundle AAB (analog iOS Archive)

iOS: `/fill-build-ios-info` → `/plan-release-mobile` → `/build-release-app` → `/submit-store-ios` (user Upload trên Organizer).  
Android: `/fill-build-android-info` → `/plan-release-mobile` → `/build-release-app` → tay Console (`chplay-upload.md`). **Không** có orchestrator `/submit-store-android`. **Cấm** Studio **Generate Signed App Bundle** để ra file Store.

1. `/fill-build-android-info` — package · version · upload key (§1c) · BFF HTTPS (AskQuestion từng bước).  
2. `/plan-release-mobile` — flavor W3 skip map · **cấm** xóa code.  
3. `/build-release-app` — `release_platform` **android** rồi `release_phase` **w3_camera**.  
4. Artifact Gradle: `{AndroidRoot}/app/build/outputs/bundle/w3Release/*.aab`  
   Pack Store (sau `/store-image-capture` AskQuestion `move_aab`): `store/out/android/1.0.0-4/rmms-w3-release-1.0.0-4.aab`

```bash
cd /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Android
./gradlew :app:bundleW3Release
```

**Cấm:** `assembleDebug` / `assembleRelease` APK production / universal APK. 64-bit bắt buộc. **Cấm** `READY_TO_SUBMIT` trước `/review-app-submit` Must P1–P11 PASS.

---

## 4. Play App Signing

Console → **Setup → App integrity / App signing**.

| | Làm |
|--|-----|
| Lần đầu | Bật Play App Signing — Google giữ **app signing key**. Gradle dùng **upload key** (`keystore.properties`) |
| App đã có | **Cùng** upload key đã fill — key mới = `GAP-AND-SIGN-03` (user không cài đè được) |
| Mất upload key | Console → Request upload key reset — **cấm** tự gen rồi upload AAB khác key |

---

## 5. Tài khoản + app trên Console

1. Mở [Play Console](https://play.google.com/console) acc **developer Active**.  
2. **All apps** → app **cùng** package đã fill.  
3. App **chưa** từng AAB: **Create app** → name `RMMS` · default language **Vietnamese** · app (không game) · **Free** → Policies. Package **chưa khóa** tới AAB đầu — dán package vừa tạo vào `/fill-build-android-info` **trước** bundle.  
4. **Cấm** Create app thứ hai vì đổi UI / đổi `applicationId`.

Create/prepare: [support.google.com — create app](https://support.google.com/googleplay/android-developer/answer/9859152).

---

## 6. Listing + policy (trước Production)

Làm **trước** Closed/Production (Dashboard checklist):

| Mục | RMMS |
|-----|------|
| Store listing | Short / full từ [`submit-info.html`](submit-info.html) — **không** claim map / OTP SMS |
| Graphics | §2 |
| Privacy / Support | `https://rmms.vn/privacy` (HTTPS 200). **Không** `app.rmms.vn` (DNS không resolve) |
| Data safety | Tick + per-type: [`submit-info-play.html`](submit-info-play.html) § Data safety. Khớp w3: FINE/COARSE + CAMERA + profile + chat + JPEG. **Cấm** Calendar/Contacts/video/map/OSRM. **Cấm** undeclared collection |
| Content rating | IARC questionnaire · UGC: Có chat/ảnh nội bộ · **không** UGC chính · **không** 18+ / bạo lực tin tức · **không** chặn/báo cáo user (chưa có màn) |
| Target audience | **Không** child / Made for Kids |
| News / COVID / Ads | Không tin tức · không quảng cáo |
| App access | Login → demo [`REVIEW-ACCOUNTS.md`](REVIEW-ACCOUNTS.md) **`rmms-002`** (không `rmms-001`) · extra ≤500 · tick full access — copy [`submit-info-play.html`](submit-info-play.html) |

Data safety: [Play help](https://support.google.com/googleplay/android-developer/answer/10787469). Must: `play-submit.md` P1–P11.

### 6a. Sáu lỗi dashboard (2026-09-18) — form do user fill

AAB **1.0.0 (4)** target **36** R8 → `store/out/android/1.0.0-4/rmms-w3-release-1.0.0-4.aab`. **(3)** In review: không sửa. Capture listing: **w3Release** + **`rmms-admin`**. PNG lab cũ ở `out/android/play-phone-*` **không** upload.

| # | Lỗi Console | Ai làm | Cách |
|---|-------------|--------|------|
| 1 | Dashboard chưa xong | User | Privacy, Data safety, IARC, ads, graphics, countries — từng mục đỏ trên Dashboard |
| 2 | Thiếu full description | User | Copy **Full description** từ [`submit-info-play.html`](submit-info-play.html) |
| 3 | Chưa chọn countries | User | **Store presence → Countries / regions** → chọn (VN tối thiểu) → Save |
| 4 | Finance declaration | User | **App content → News apps / Government apps / Finance** → **No** (RMMS không phải app tài chính) |
| 5 | Health declaration | User | **App content → Health** → **No** (không phải health app) |
| 6 | Target API phải ≥ 36 | Agent + user | Upload `store/out/android/1.0.0-4/rmms-w3-release-1.0.0-4.aab` sau khi 3 xong |

**Cấm** Send for review trước `/review-app-submit` P1–P11.

### 6b. Data safety — tick theo binary w3Release (không đoán)

SSOT copy: [`submit-info-play.html`](submit-info-play.html). Nguồn: `app/src/w3/AndroidManifest.xml` + `MeProfileScreen` + CameraX still JPEG + incident/mnt chat.

| Tick | Không tick |
|------|------------|
| Vị trí gần đúng + chính xác | Địa chỉ nhà, chủng tộc, tôn giáo, xu hướng tình dục |
| Tên, email, User ID, SĐT, Thông tin khác (CCCD chỉ đọc) | Calendar, Contacts, SMS, Video, Audio, Files |
| Tin nhắn khác trong ứng dụng | Finance, Health, Ads, Analytics, Device ID |
| Ảnh | Map / OSRM (`STORE_W1=false`) |
| Nội dung khác do người dùng tạo | Click-to-call / danh bạ — chỉ khi AAB sau có permission |

Mỗi loại đã tick: **Thu thập** · không chia sẻ · không ephemeral · mục đích **Chức năng ứng dụng** (+ **Quản lý tài khoản** cho tên/email/user ID/SĐT). GPS/ảnh/chat/UGC/email/SĐT/CCCD = **Tùy chọn**. Tên + User ID = **Bắt buộc** với cán bộ.

Overview đã chốt: mã hóa khi truyền **Có** · tạo tài khoản trên app **Không** · đăng nhập tài khoản đơn vị **Có** (chỉ enterprise) · yêu cầu xóa **Không**.

---

## 7. Upload AAB (track)

Help: [Upload your app](https://support.google.com/googleplay/android-developer/answer/9859348).

1. **Release → Testing** — **Internal** rồi **Closed** (acc mới / policy đòi testing). Production khi listing + testing đủ.  
2. **Create new release**.  
3. **App bundles** → file `w3Release/*.aab`.  
4. Console đọc `applicationId` / `versionCode` / `versionName` — phải khớp fill. Lệch → **Discard** release · **cấm** sửa package trên Console.  
5. Release name / notes (user-facing, khớp What’s New).  
6. **Next → Review** → **Start rollout** (testing) hoặc **Send for review** (Production) — **user** bấm.

**Cấm** APK production.

---

## 8. Sau upload

| | Việc |
|--|------|
| Internal | Cài từ Play (tester) — login `rmms-002` + BFF prod |
| In review | **Cấm** đổi binary / Data safety lệch `{Wave}` |
| Rejected | Đọc email → sửa gap → versionCode **+1** → `/fill-build-android-info` Step 1 → bundle lại |
| Approved | Staged rollout (5–20%) rồi 100% |

---

## 9. Nộp Production

1. Must P1–P11 PASS (`/review-app-submit`)  
2. E2E `store_wave=w3_camera` trên **đúng** AAB  
3. Privacy URL live  
4. App access notes **`rmms-002`** (ô user Play — **không** `rmms-001`) + extra 500 + tick full access  
5. User **Send for review**

In review = đã vào hàng Google. Không bundle lại trừ khi Console / email yêu cầu binary mới (khi đó versionCode +1).

---

## 10. Lỗi thường gặp

| Hiện | Nguyên nhân | Làm |
|-----|-------------|-----|
| Package lệch AAB | Fill khác App identity | Discard · `/fill-build-android-info` dán đúng · **cấm** app mới vì UI |
| APK rejected | Nộp APK production | AAB `bundleW3Release` |
| App not installed / signature | Upload key khác Play | Cùng keystore · hoặc Request upload key reset |
| Data safety mismatch | Khai GPS/cam khi W0 OFF, hoặc không khai khi W3 ON | Form khớp `AndroidManifest` + flags |
| Screenshot policy | Mock / sai px / map khi binary ẩn map | Pixel 2 1080×1920 · surface ON only |
| Privacy 404/500 | Landing chết | `https://rmms.vn/privacy` 200 trước Submit |
| Target API 35 / must be 36 | AAB cũ compileSdk 35 | AAB `1.0.0` (2) · `targetSdk 36` |
| Production bị chặn | Personal acc mới / chưa Closed | Internal → Closed đủ ngày |
| `10.0.2.2` trong AAB | BFF / cleartext lab | Release HTTPS · gỡ emulator domain khỏi `main` |
| `STORE_W1` leak map | Flavor Store chưa wire | `/plan-release-mobile` · `STORE_W1=false` |

---

## 11. Lần sau (cùng app)

1. Tăng `versionCode` — `versionName` chỉ đổi khi tạo release marketing mới trên Console  
2. `/fill-build-android-info` (nếu version/BFF đổi) → `/plan-release-mobile` → `/build-release-app` `android`  
3. Screenshot chỉ surface **ON** của `flags.json`  
4. User **Send for review** / rollout

Slash: `/fill-build-android-info` rồi `/build-release-app` (chỉ binary). **Không** có orchestrator `/submit-store-android` — tay Console.
