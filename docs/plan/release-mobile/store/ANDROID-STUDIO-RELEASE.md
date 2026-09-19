# Guide — Android Studio release RMMS (Play setup → AAB)

> Runbook **tay** từ tạo app Play đến cấu hình Studio + Generate Bundles. Snapshot session 2026-09-18 · wave **3 skip map**.  
> Slash: `/fill-build-android-info` → `/plan-release-mobile` → `/build-release-app` → `/store-image-capture` → `/review-app-submit`.  
> Console (listing / policy / upload track): [`ANDROID-SUBMIT-GUIDE.md`](ANDROID-SUBMIT-GUIDE.md). iOS: [`IOS-SUBMIT-GUIDE.md`](IOS-SUBMIT-GUIDE.md).  
> **Cấm** agent **Send for review**. **Cấm** password keystore / demo trong file này — [`REVIEW-ACCOUNTS.md`](REVIEW-ACCOUNTS.md).

Repo binary: `Linm.RMMS.Mobile.Android` module **`:app`**. **Không** `Linm.Mobile.Kit.Android` (library).

---

## Thứ tự (đừng đảo)

| # | Việc | Slash / menu |
|---|------|----------------|
| A | Developer acc + **Create app** Play | Console |
| B | Dán package / version / BFF / upload key | `/fill-build-android-info` — **cấm** AAB trong skill này |
| C | Flavor W3 skip map | `/plan-release-mobile` |
| D | Studio: variant **`w3Release`** + signing | §3–§5 |
| E | AAB | Studio **Generate Bundles** hoặc `/build-release-app` |
| F | Pack version folder + capture | `/store-image-capture` Step 0a–0b |
| G | Dashboard Play + App access `rmms-002` | [`ANDROID-SUBMIT-GUIDE.md`](ANDROID-SUBMIT-GUIDE.md) §6 · [`submit-info-play.html`](submit-info-play.html) |
| H | Review | `/review-app-submit` rồi user nộp |

---

## 1. Identity đã chốt (1.0.0 (2))

| Ô | Giá trị | Ghi |
|---|---------|-----|
| Package | `com.drvn.rmms.store` | Play **App identity** = Gradle `applicationId` · **khóa** sau AAB đầu |
| Kotlin `namespace` | `org.linmsoft.rmms` | **Không** đổi vì Play package |
| versionName / versionCode | `1.0.0` / `4` | Play đã khóa 1–3 · AAB **(3)** đang In review · pack tiếp **(4)** |
| compileSdk / targetSdk | **36** | AGP **9.0.1** (Gradle wrapper 9.1.0) · R8 minify+shrink trên `release` |
| BFF Release | `https://rmms-mobile-bff.linm-soft.com` | `buildTypes.release` — **cấm** `10.0.2.2` |
| Prefix | `mobile-bff/api/v1` | Giữ |
| Upload key | `rmms-upload.jks` alias `rmms-upload` | OneDrive `…/RMMS-KEY/` · `keystore.properties` gitignored |
| Wave | Flavor **`w3`** + **Release** | `STORE_W1=false` (map OFF) · W2+W3 ON · GPS + camera ON |

**Debug lab khác Release:** `w3Debug` ép `STORE_W1=true` (map) và `versionCode` có thể lệch. Listing / capture **cấm** Debug.

---

## 2. Play Console — set up store (trước Studio AAB)

1. Acc developer **Active** (org pháp nhân Miền Trung). Signup: [play.google.com/console/signup](https://play.google.com/console/signup).  
2. **Create app** (lần đầu): name `RMMS` · language **Vietnamese** · app (không game) · **Free** → Policies.  
3. Copy **Package name** từ **App identity** → dán `/fill-build-android-info` **trước** bundle.  
4. **Cấm** Create app thứ hai vì đổi UI.  
5. **Setup → App integrity / App signing:** bật Play App Signing (Google giữ app signing key; máy chỉ giữ **upload** `.jks`).  
6. Dashboard còn đỏ (description, countries, finance, health, graphics) → làm **sau** AAB + capture; bảng sửa: [`ANDROID-SUBMIT-GUIDE.md`](ANDROID-SUBMIT-GUIDE.md) §6a.

Copy listing: [`submit-info-play.html`](submit-info-play.html) (không `submit-info.html` Apple).

---

## 3. Android Studio — mở đúng cửa sổ

| # | Làm |
|---|-----|
| 1 | Mở workspace **`ai-autocode.code-workspace`** hoặc folder `Linm.RMMS.Mobile.Android` |
| 2 | Cây Project: module **`:app`** · **không** Kit |
| 3 | **File → Sync Project with Gradle Files** |
| 4 | Thanh **Build Variants**: module `app` → **`w3Release`** (không `debug` / không flavor `w0`–`w2` cho Store) |

### 3a. Không thấy `w3Debug` / `w3Release`

Chỉ hiện `debug` / `release` → bật task flavor:

1. **Android Studio → Settings** (macOS: **Android Studio → Settings…**)  
2. **Experimental**  
3. Tick **Configure all Gradle tasks during Gradle Sync**  
4. **Apply** → **File → Sync Project with Gradle Files**  
5. Mở lại **Build Variants** — phải có `w3Release`

### 3b. Panel Gradle không có `bundleW3Release`

Bình thường trên bản Studio này. **Không** bắt buộc task trong panel.

Dùng menu §5 **Generate Bundles** khi variant đang **`w3Release`**.

---

## 4. Upload keystore (lần đầu) — chỉ tạo key, không ra AAB

Play **không** phát `.jks`. Analog iOS Team: tự tạo upload key, giữ mãi. **Cấm** `debug.keystore`.

### Menu (session)

Cửa sổ **LinmRmms** · `:app`.

| # | Menu / nút | Chọn |
|---|------------|------|
| 0 | **Build** | **Generate Signed App Bundle or APK…** |
| 1 | Radio | **Android App Bundle** (không APK) → **Next** |
| 2 | Key store | **Create new…** |
| 3 | Path | Folder org, file `rmms-upload.jks` (session: OneDrive `RMMS-KEY/`) |
| 4 | Alias | `rmms-upload` · password **local** (không chat / không git) · Validity **10000** · DN org EN/VN đã chốt → **OK** |
| 5 | Màn keystore | File + alias đã điền → **Cancel** (góc dưới). **Không** Next / Finish / Generate |

AAB Store **không** lấy từ wizard này (`GAP-AND-BUNDLE-01`). Wizard chỉ để **sinh `.jks`**.

### `keystore.properties` (gitignored, cạnh `app/build.gradle.kts`)

```
storeFile=/ABS/PATH/RMMS-KEY/rmms-upload.jks
storePassword=
keyAlias=rmms-upload
keyPassword=
```

User điền password **trên máy**. `.gitignore` đã có `keystore.properties` + `*.jks`. **Cấm** password trong `build.gradle.kts`.

Gradle: `signingConfigs.release` + `buildTypes.release.signingConfig` khi file `.jks` tồn tại.

App **đã** có upload key trên Play → **cấm** gen key mới (`GAP-AND-SIGN-03`).

---

## 5. Generate Bundles (AAB Store)

Variant **`w3Release`** (Build Variants). Signing đã fill.

| # | Menu |
|---|------|
| 1 | **Build → Generate App Bundles or APKs → Generate Bundles** |
| 2 | Chờ Gradle xong (lần đầu AGP 9 / SDK 36 có thể hỏi upgrade — chấp nhận **9.0.1**) |
| 3 | File: `Linm.RMMS.Mobile.Android/app/build/outputs/bundle/w3Release/app-w3-release.aab` |

**Cấm:** **Generate Signed App Bundle** Finish để ra file nộp · **APK** production · `assembleDebug` · universal APK.

CLI cùng flavor:

```bash
cd /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Android
./gradlew :app:bundleW3Release
```

Capture / cài máy chụp (không nộp Play):

```bash
./gradlew :app:assembleW3Release
# APK: app/build/outputs/apk/w3/release/app-w3-release.apk
```

Kiểm tra AAB trước upload: `applicationId` `com.drvn.rmms.store` · `versionCode` **4** · `targetSdk` **36** · Release `BFF_BASE` HTTPS prod · `STORE_W1=false` · R8 minify bật.

---

## 6. Capture + pack theo version (`/store-image-capture`)

Folder: `Linm.RMMS.Data/docs/plan/release-mobile/store/out/android/1.0.0-4/` (`{VersionFolder}` = `{versionName}-{versionCode}`). Phone listing 01–04 vẫn `1.0.0-2/` (UI không đổi). **Cấm** copy icon/feature vào folder mới trước `released_success`. Binary **(3)** In review: không đụng `1.0.0-3/`.

AskQuestion **trước** copy AAB: `local_build_confirm` · `capture_account` · `move_aab`.

| Phải | Cấm |
|------|-----|
| Run / cài **`w3Release`** cùng `1.0.0 (4)` | `w3Debug` (map ON) |
| Login **`rmms-admin`** lúc chụp | `rmms-002` trên emulator (002 = Play **App access** notes) |
| Phone **1080×1920** ≥2 (nên ≥4) | Pack iOS 6.9" lên Play |
| Icon **512×512** PNG alpha · feature **1024×500** no alpha | AI vẽ / stretch |
| Copy AAB vào **cùng** folder version | Ghi phẳng `out/android/*.aab` |

PNG lab cũ `out/android/play-phone-*` (Debug / acc sai) **không** upload.

Manifest: [`ASSET-MANIFEST.md`](ASSET-MANIFEST.md).

---

## 7. Upload Console + Dashboard

1. Kéo AAB `store/out/android/1.0.0-4/rmms-w3-release-1.0.0-4.aab` khi **3 đã xong** (live hoặc reject). **Cấm** upload lại `1.0.0-2` / `1.0.0-3`. **Cấm** tạo bản mới khi 3 còn In review.  
2. Điền Dashboard: full description, countries (VN tối thiểu), Finance **No**, Health **No**, Privacy, Data safety, IARC, ads, graphics — [`ANDROID-SUBMIT-GUIDE.md`](ANDROID-SUBMIT-GUIDE.md) §6–§7.  
3. **App access:** ô user **`rmms-002`** (screenshot `rmms-001` = sai, đó là Apple) · password + extra ≤500 từ [`submit-info-play.html`](submit-info-play.html) · tick full access. Capture local vẫn `rmms-admin`.  
4. **Cấm Send for review** trước `/review-app-submit` P1–P11.

---

## 8. Studio — checklist nhanh

| Check | Đúng |
|-------|------|
| Cửa sổ | `Linm.RMMS.Mobile.Android` `:app` |
| Variant | **`w3Release`** |
| Experimental | Configure all Gradle tasks **ON** nếu thiếu flavor |
| Signing | `keystore.properties` + `rmms-upload.jks` · không debug key |
| AAB menu | **Generate Bundles** (không Finish wizard Signed) |
| Output | `app/build/outputs/bundle/w3Release/*.aab` |
| Pack | `store/out/android/1.0.0-4/` |
| Capture acc | `rmms-admin` |
| BFF trên máy chụp | HTTPS prod · không map |

---

## 9. Lần sau (cùng app)

1. `versionCode` **+1** mỗi lần **upload Play** (đã dùng 1–3 → hiện **4**). `versionName` chỉ đổi khi marketing mới. Local assemble/capture **không** bắt buộc tăng.  
2. `/fill-build-android-info` nếu version/BFF đổi.  
3. Studio Sync → **`w3Release`** → Generate Bundles.  
4. `/store-image-capture` pack folder **mới** `{versionName}-{versionCode}`.  
5. Cùng upload `.jks`.

---

## 10. Lỗi session này

| Hiện | Nguyên nhân | Làm |
|------|-------------|-----|
| Build Variants không có `w3*` | Sync chưa enumerate flavor | §3a Experimental + Sync |
| Gradle panel không `bundleW3Release` | Task ẩn | §5 Generate Bundles |
| Play “target API 35” | AAB (1) compileSdk 35 | AAB (2) `targetSdk` 36 |
| Shot có “Tiếp tục bản đồ” | `w3Debug` `STORE_W1=true` | Cài / Run **w3Release** |
| Login sai listing | Acc Play notes trên emulator | Logout → `rmms-admin` |
| Wizard Signed ra AAB | Nhầm fill với bundle | Cancel wizard · Generate Bundles |
| Duplicate `FontWeight` import | Compile `w3Release` fail | Một import / file · rebuild |
