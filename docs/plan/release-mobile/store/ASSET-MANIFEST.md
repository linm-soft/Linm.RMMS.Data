# Store assets — RMMS wave 3

> **Folder:** `store/out/ios/` · `store/out/android/{VersionFolder}/` · `upload=local_only` (user kéo Console — chưa presign).  
> **Cấm** AI vẽ. **Cấm** pack iOS lên Play (sai px).  
> Play pack **1.0.0 (3):** AAB `store/out/android/1.0.0-3/`. Listing phone/icon: `1.0.0-2/` + root SSOT. `move_aab=confirm_copy` · **cấm** copy icon folder mới trước `released_success`.

## iOS 6.9" (`out/ios/`)

Capture live StoreW3 sim (1320×2868 · RGB no alpha). Acc **`rmms-admin`**.

| Slot | File | Màn | Px | MIME | Alpha | SHA-256 | Locale | Captured |
|------|------|-----|----|------|-------|---------|--------|----------|
| ss-iphone-69-01 | ss-iphone-1320x2868-01.png | Guest home | 1320×2868 | image/png | no | `46b70aae49c70dbcd1880ec1b9289f1e5fd75bfb7fc779f92338b605559541e4` | vi | 2026-09-17 |
| ss-iphone-69-02 | ss-iphone-1320x2868-02.png | FAQ | 1320×2868 | image/png | no | `cf230dfed374abfcaff8a522420ea988fa5eb6e099c3a69713ddcb56cae724dc` | vi | 2026-09-17 |
| ss-iphone-69-03 | ss-iphone-1320x2868-03.png | Staff home | 1320×2868 | image/png | no | `719e3e9adc8453a20739409ebdc89e2d7cf93cb986a7ee938e92ecde32d9b6fd` | vi | 2026-09-17 |
| ss-iphone-69-04 | ss-iphone-1320x2868-04.png | Tuần đường + ghim GPS | 1320×2868 | image/png | no | `eeda3e2f4a834eb766a6cb96a37553bea636dde4066c4756d4c9861cbfb16b07` | vi | 2026-09-17 |
| ss-iphone-69-05 | ss-iphone-1320x2868-05.png | Chấm công GPS | 1320×2868 | image/png | no | `028eccce6e58885f822909c5e956892d769ee01acf499b4f77c6fa17f29f36f5` | vi | 2026-09-17 |
| ss-iphone-69-06 | ss-iphone-1320x2868-06.png | Thu thập camera | 1320×2868 | image/png | no | `06408ceac0672d134aae64b555007567f14668f4a2a54d56141fd1bf4d1a81b0` | vi | 2026-09-17 |

Family `1` — **cấm** iPad 13". Upload ASC: kéo 01–06 từ `store/out/ios/`. Listing: [`submit-info.html`](submit-info.html). Demo notes: `rmms-001`.

## Android Play phone (`out/android/1.0.0-2/`)

Capture live emulator **1080×1920** · PNG RGB **no alpha**. Acc chụp **`rmms-admin`**. **Không** màn “Tiếp tục bản đồ”. **`recapture_all` + 0d AUTO 2026-09-18:** 01–04 live `1.0.0-2/`. Cũ → `_bk-recapture-20260918/`. **Cấm** AI vẽ. **Cấm** upload `_bk-*`.

| Slot | File | Màn | Px | MIME | Alpha | SHA-256 | Locale | Captured |
|------|------|-----|----|------|-------|---------|--------|----------|
| play-phone-01 | play-phone-1080x1920-01.png | Guest home | 1080×1920 | image/png | no | `95bc0f0bb77fc64cdd20bead0ca7cd79330edb64d9a91d0925caebce4cefa011` | vi | 2026-09-18 |
| play-phone-02 | play-phone-1080x1920-02.png | FAQ | 1080×1920 | image/png | no | `cff331e27771553f0fe94bc1ee5ec7f8858cb734e499b8a08dbfb697ece9ea5d` | vi | 2026-09-18 |
| play-phone-03 | play-phone-1080x1920-03.png | Staff home | 1080×1920 | image/png | no | `c6be5c0ede9751437fd740dc829a4363047ca5ffe6ea9623c67e5eabd91e1f2b` | vi | 2026-09-18 |
| play-phone-04 | play-phone-1080x1920-04.png | Tuần đường | 1080×1920 | image/png | no | `0af9325168e408f7511c4dfb93cf3878f48aa57d59c8fc64d2d9971665cc50db` | vi | 2026-09-18 |
| play-icon | play-icon-512x512.png | Hi-res icon | 512×512 | image/png | yes | `1a4eccb961370edde173a7b733538723a8db2993f1055315f3b58ea850f058be` | — | 2026-09-18 |
| play-feature | play-feature-1024x500.png | Feature graphic | 1024×500 | image/png | no | `8e5b574f53ddd40cdec90fa6da87bfb376256cf19884b07658922ab56ff976bb` | — | 2026-09-18 |
| aab-w3-2 | rmms-w3-release-1.0.0-2.aab | Store binary (Play đã khóa code 2) | — | AAB | — | `922ad4fb320a68398a3ecc2d665cfcffd0609c3218794e3c190fe32884c03e43` | — | 2026-09-18 |
| aab-w3-3 | rmms-w3-release-1.0.0-3.aab | Store binary **upload** | — | AAB | — | `b9d336c71df71676d4c43c227441c0035af84ad2fb21300676de07979de81b6b` | — | 2026-09-18 |

Upload AAB: `store/out/android/1.0.0-3/rmms-w3-release-1.0.0-3.aab`. Screenshots listing: `1.0.0-2/play-phone-01`…`04`. Listing: [`submit-info-play.html`](submit-info-play.html). Play notes: `rmms-002`.

## Play Dashboard pack (`/store-image-capture` Step 0b)

`move_aab=confirm_copy` · `dashboard_prep=full_pack`. AAB `com.drvn.rmms.store` · `1.0.0` **(3)** · **targetSdk 36**. Phone **01–04** ở `1.0.0-2/`. Icon + feature root SSOT. **Cấm** Send for review. **Cấm** upload `_bk-recapture-*`.

| Slot | File / nguồn | Status |
|------|----------------|--------|
| AAB | `out/android/1.0.0-3/rmms-w3-release-1.0.0-3.aab` | Copied · sha `b9d336c7…` · versionCode **3** · API 36 |
| Hi-res icon | `out/android/play-icon-512x512.png` **và** `1.0.0-2/` | PASS 512×512 RGBA alpha · 63.6 KB · full square · **không** bo góc |
| Feature graphic | `out/android/play-feature-1024x500.png` **và** `1.0.0-2/` | PASS 1024×500 RGB **không** alpha |
| Phone screenshot | `1.0.0-2/play-phone-1080x1920-01`…`04` | **PASS** 1080×1920 RGB · 0d AUTO `w3Release` + `rmms-admin` |
| Privacy | `https://rmms.vn/privacy` | HTTPS **200** · copy [`submit-info-play.html`](submit-info-play.html) |
| Data safety | Tick table [`submit-info-play.html`](submit-info-play.html) · khớp w3Release | User điền Console — **cấm** Calendar/Contacts/video |
| IARC | Content rating questionnaire | User điền Console — **No** Health / Finance / Kids |

**Data safety (W3 — binary `com.drvn.rmms.store` 1.0.0 (2), không bịa SDK):**

- **Tick:** Location gần đúng + chính xác · Name · Email · User IDs · Phone · Other info (CCCD chỉ đọc) · Other in-app messages · Photos (không Video) · Other user-generated content
- Mỗi loại: **thu thập** · không share/sell · không ephemeral · mục đích App functionality (+ Account management cho tên/email/user ID/SĐT)
- Optional: GPS, ảnh, chat, UGC, email, SĐT, CCCD. Required (cán bộ): tên, user ID
- **Không** tick: Calendar, Contacts, SMS, Video, Audio, Files, Finance, Health, Ads, Analytics, Device ID, map/OSRM (`STORE_W1=false`)
- Encryption in transit **Có**. User request deletion **Không** (admin khóa/thu hồi)
- Click-to-call / danh bạ / lịch = bản sau — khai lại khi AAB có permission

**IARC:** questionnaire Play → category khớp app đường bộ / quản lý hiện trường — **No** health app · **No** finance app · target audience không trẻ em.

**Cấm** Send for review trước `/review-app-submit` P1–P11.
