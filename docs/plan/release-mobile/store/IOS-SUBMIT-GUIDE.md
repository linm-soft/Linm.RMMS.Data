# Guide — Archive, upload, review iOS RMMS (App Store)

> Runbook tay trên **Xcode + App Store Connect**. Slash chain: `/fill-build-ios-info` → `/plan-release-mobile` → `/build-release-app` → `/review-app-submit` · orchestrator `/submit-store-ios`.  
> **Cấm** agent bấm Submit hộ. **Cấm** dán mật khẩu demo vào file này — xem [`REVIEW-ACCOUNTS.md`](REVIEW-ACCOUNTS.md).  
> **Context SSOT (app mới):** [`../../context/features/ios-store-submit.md`](../../context/features/ios-store-submit.md)  
> **Android / CH Play:** [`ANDROID-SUBMIT-GUIDE.md`](ANDROID-SUBMIT-GUIDE.md) · Studio: [`ANDROID-STUDIO-RELEASE.md`](ANDROID-STUDIO-RELEASE.md)

Listing copy: [`submit-info.html`](submit-info.html) Tab 1 listing · Tab 2 bài học. Lỗi theo version: [`review-lessons/README.md`](review-lessons/README.md). Screenshot 6.9": [`ASSET-MANIFEST.md`](ASSET-MANIFEST.md) + `store/out/ios/`. Flags: [`../flags.json`](../flags.json).

---

## 0. Phân biệt ba chỗ

| Nơi | Ý nghĩa |
|-----|---------|
| Xcode Organizer **Upload** | Binary lên máy chủ Apple |
| App Store Connect **TestFlight / Build** | Apple đang xử lý / sẵn sàng gắn version |
| App Store (iPhone) | Chỉ sau **Waiting for Review** → Apple **Approved** → **Release** |

Upload **không** = app hiện trên Store công khai.

---

## 1. Identity (khớp binary)

Repo: `Linm.RMMS.Mobile.iOS` · `Config/Release.xcconfig` + `project.yml`.

| Ô | Giá trị 1.0.7 (6) | Nguồn |
|---|--------|--------|
| Bundle ID | `com.drvn.rmms` | ASC → App Information |
| Version | `1.0.7` | Version in-flight (Prepare / Rejected) |
| Build | `6` | TestFlight max **+ 1** nếu đã có build đó |
| Team | `H2T7CM4NFF` | developer.apple.com → Membership |
| BFF | `https://rmms-mobile-bff.linm-soft.com` | HTTPS reviewer gọi được |
| Prefix | `mobile-bff/api/v1` | Giữ |
| Device family | `1` (iPhone) | **Cấm** screenshot iPad / Apple Watch |
| Signing | Automatic + `DEVELOPMENT_TEAM` | **Cấm** `CODE_SIGN_IDENTITY = Apple Distribution` khi Automatic |

Wave 3 Release: `STORE_W0 STORE_W2 STORE_W3` — **không** `STORE_W1`. GPS WhenInUse + camera ON. Map / OTP quên MK / public OSRM **OFF**.

Đổi Bundle / version / Team / BFF → `/fill-build-ios-info` (dán từ ASC). **Không** Archive trong skill đó.

---

## 2. Icon Store (lỗi 90717)

Apple: icon **1024×1024** (`ios-marketing`) **không** được có alpha.

| Sai | Đúng |
|-----|------|
| PNG RGBA, nền trong suốt | PNG **RGB**, nền đặc (RMMS: trắng) |
| Chỉ sửa file, dùng lại archive cũ | **Archive lại** — icon đã nướng vào `.app` |

Slot: `Assets.xcassets/AppIcon.appiconset/Icon-App-1024x1024.png`. Logo **in-app** (`AppLogo`) được alpha; **AppIcon** thì không.

Kiểm tra: `file Icon-App-1024x1024.png` → `8-bit/color RGB` (không `RGBA`).

---

## 3. Archive + upload (Xcode)

1. `cd Linm.RMMS.Mobile.iOS && xcodegen generate`
2. Scheme **LinmRmms**
3. Destination **Any iOS Device (arm64)** — không Simulator. Máy vật lý Archive được.
4. **Product → Archive**
5. **Window → Organizer** → tab **Archives**
6. Chọn archive mới → **Distribute App** → **App Store Connect** → **Upload**
7. Signing Automatic (team trên). Có thể **bỏ tick** *Upload your app’s symbols* (xem §4).

**Không** bấm **Grant Access** GitHub (`Linm.RMMS.Mobile.iOS` / MapLibre). Đó là Xcode Cloud đọc source — **không** cần để đẩy IPA. **Cancel**.

**Không** dùng **Product → Run** (▶) làm bản Store.

CLI (cùng flavor):

```bash
cd /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.iOS
xcodegen generate
xcodebuild -scheme LinmRmms -configuration Release \
  -destination 'generic/platform=iOS' \
  -archivePath ./build/StoreW3.xcarchive archive
```

---

## 4. Warning sau upload (không chặn)

**Upload Symbols Failed** — thiếu dSYM `MapLibre.framework` (SPM XCFramework không kèm DWARF).

- IPA **đã** lên ASC nếu tiêu đề là *Upload completed with warnings*.
- Bấm **Done**. Không Archive lại vì warning này.
- Wave 3 skip map → MapLibre gần như không chạy trên Store.

---

## 5. App Store Connect — chờ build

[App Store Connect](https://appstoreconnect.apple.com) → Apps → `com.drvn.rmms` → **TestFlight** hoặc version **1.0.7** → **Build**.

| Status | Việc |
|--------|------|
| Processing | Đợi 5–30+ phút. Refresh / email Apple. **Không** Archive lại. |
| **Missing Compliance** | Bấm **Manage** (§6) |
| Ready to Submit | Gắn vào version 1.0.7 |

Version Rejected: gỡ build cũ nếu cần → gắn build mới (**số build >** bản đã upload).

---

## 6. Export compliance (Missing Compliance)

Không phải lỗi binary. Apple hỏi mã hóa.

**App Encryption Documentation** — *What type of encryption algorithms does your app implement?*

Chọn **None of the algorithms mentioned above** → **Save**.

RMMS chỉ dùng HTTPS/TLS của iOS (`URLSession`), không crypto riêng, không OpenSSL.

Lần sau khỏi hỏi: `Info.plist` thêm `ITSAppUsesNonExemptEncryption` = `NO` rồi Archive. Build đã upload thì chỉ cần **Manage** trên ASC.

---

## 7. Age Ratings (chặn Add for Review)

Banner *You must respond to the required age ratings questions*:

**App Information** → **App Age Ratings** → **Edit** (không phải thẻ 4+ cũ).

### Step 1 — Features

| Câu | RMMS |
|-----|------|
| Parental Controls | NO |
| Age Assurance | NO |
| Unrestricted Web Access | NO |
| User-Generated Content | NO |
| Social Media | NO |
| Social Media Disabled for Users Under 13 | NO (hoặc bỏ nếu Apple khóa ô) |
| Messaging and Chat | **YES** (Trao đổi sự cố / công việc) |
| Advertising | NO |

### Step 2 — Mature Themes

Profanity / Horror / Alcohol-Tobacco-Drug → cả **NONE**.

### Step 3 — Medical or Wellness

Medical or Treatment Information → **NONE**. Health or Wellness Topics → **NO**.

### Step 4 — Sexuality or Nudity

Ba dòng → **NONE**.

### Step 5 — Violence

Cartoon / Realistic / Graphic violence / Guns → **NONE**.

### Step 6 — Chance-Based

Simulated Gambling / Contests → **NONE**. Gambling / Loot Boxes → **NO**.

### Step 7 — Additional Information

Calculated **4+**. Override: **Not Applicable** (không Made for Kids). Age Suitability URL trống. **Save**.

---

## 8. Screenshot listing (Guideline 2.3.3)

**2.3.3 Accurate Metadata** = ảnh/mô tả không khớp binary reviewer cài.

Chỗ đọc reject (trang version **không** có *See More*):

1. Banner hồng → **View Submission**
2. Trang **iOS Submission** → cột REVIEW STATUS → **See More** / **Download** file đính kèm

Sửa **không** cần Archive nếu Apple chỉ phàn nàn metadata:

1. Version 1.0.7 → Previews and Screenshots → tab **iPhone**
2. **Edit** cạnh *Using 6.9" Display*
3. **Delete** ảnh cũ (map / splash / iPad frame)
4. Upload PNG **1320×2868** (hoặc 1290×2796 / 1260×2736), **không alpha**, UI thật W3
5. Tab **iPad** / **Apple Watch**: **xóa hết** (family `1`)
6. Description / What’s New / Review Notes khớp [`submit-info.html`](submit-info.html) — **không** claim map / OTP SMS

Pack: `store/out/ios/ss-iphone-1320x2868-01` … `06` (guest, FAQ, staff, GPS tuần, chấm công, camera). **Không** GIS / patrol-map.

Acc chụp local: `rmms-admin`. Acc **Review Notes** ASC: `rmms-001` — [`REVIEW-ACCOUNTS.md`](REVIEW-ACCOUNTS.md).

Apple chỉ bắt **6.9"** khi đã có bộ 6.9" (6.5" không bắt). Family `1` → **cấm** iPad 13".

---

## 9. Listing còn lại (Must)

| Ô | RMMS |
|---|------|
| Privacy / Support / Marketing | `https://app.rmms.vn/privacy` (HTTPS live, không 404/500) |
| App Privacy nutrition | Khớp `PrivacyInfo.xcprivacy` |
| Review Notes | Job + bước demo + acc `rmms-001` · ghi **không** có in-app map |
| Icon listing | 1024 RGB (cùng AppIcon) |

Copy từng ô từ [`submit-info.html`](submit-info.html).

---

## 10. Nộp lại sau reject

1. Age Ratings + Compliance xong
2. Screenshot / copy đã khớp W3
3. Build **6** gắn vào 1.0.7
4. **Save** trên version
5. **Update Review** / **Resubmit to App Review**

**Waiting for Review** = đã vào hàng Apple. Không Archive, không bấm lại trừ khi Resolution Center yêu cầu.

Tiếp: **In Review** → **Pending Developer Release** / **Ready for Sale** (tùy chọn phát hành).

---

## 11. Lỗi thường gặp

| Hiện | Nguyên nhân | Làm |
|-----|-------------|-----|
| Grant Access GitHub | Xcode Cloud | Cancel |
| **Invalid Binary** | `PrivacyInfo` reason **CA92.4** (không tồn tại) | Đổi **CA92.1** · gỡ `NSAllowsLocalNetworking` Store · Archive **5** |
| 90717 Invalid large app icon | AppIcon 1024 RGBA | Flatten RGB → Archive lại |
| Upload Symbols Failed MapLibre | Thiếu dSYM SPM | Bỏ qua / bỏ tick symbols |
| Không thấy build trên Store | Chưa Approved | Xem ASC TestFlight / version |
| Missing Compliance | Chưa trả lời encryption | Manage → None of the algorithms… |
| Unable to Add for Review · age ratings | Questionnaire mới | App Information → Age Ratings → Edit |
| 2.3.3 | Shot/mô tả lệch app | View Submission → thay 6.9" · xóa iPad |
| Privacy URL 500 | Landing chưa live | Deploy Root RMMS `/privacy` trước Submit |
| Version **Ready for Distribution** nhưng Search / `apps.apple.com` **404** | App **Custom** (ABM) — Apple case `102965490286` | §13–§14. **Không** đổi được Public trên record cũ |

---

## 12. Lần sau (cùng app)

1. Tăng `CURRENT_PROJECT_VERSION` (build) — version marketing chỉ đổi khi ASC tạo version mới
2. `xcodegen` → **Product → Archive** → Organizer → Upload
3. Manage compliance nếu chưa có key plist
4. Screenshot chỉ surface **ON** của `flags.json`
5. User **Submit / Update Review**

Slash: `/submit-store-ios` (full chain) hoặc `/build-release-app` (chỉ binary).

---

## 13. Q&A — Store public / Cannot Sell Vietnam

> Check khi 1.0.7 (hoặc version sau) đã Approved mà khách không thấy app. Acc: [`../../context/thong-tin-cty-mien-trung.md`](../../context/thong-tin-cty-mien-trung.md).

### Đã xảy ra (2026-09-17)

| | |
|--|--|
| App | **RMMS (VN)** · Bundle `com.drvn.rmms` · Apple ID **`1510513131`** |
| Version | iOS **1.0.7** · ASC **Ready for Distribution** |
| Catalog | `https://apps.apple.com/vn/app/id1510513131` → 404 · `itunes.apple.com/lookup?id=1510513131&country=vn` → `resultCount: 0` |
| Availability | **0** countries · **174** Not Available · **1 Cannot Sell** = **Vietnam** (tooltip: contact Apple Developer Support) |
| Business (đã Active) | Free Apps + Paid Apps (All Countries, 12 Sep–13 Nov 2026) · Vietcombank · W-8BEN-E + Certificate of Foreign Status · DSA (EU, không liên quan VN) |
| Banner banking (nếu còn) | Account Holder **Address** và/hoặc **Type** trên Vietcombank — tự điền; Type = Organization, địa chỉ khớp D-U-N-S |
| Support | [developer.apple.com/contact](https://developer.apple.com/contact/) → **Distribution** → **Other Distribution Questions** |
| **Case ID** | **`102965490286`** (gửi 17 Sep 2026, ~02:08 ICT · Account Holder Phuc Le) |

### Check nhanh

1. ASC → **Pricing and Availability** → **Manage Availability** → dòng **Vietnam** còn đỏ **Cannot Sell** không.
2. **Business** → Agreements / Bank / Tax đều **Active**? Banner vàng Address/Type còn không.
3. Lookup: `curl -sS 'https://itunes.apple.com/lookup?id=1510513131&country=vn'` — hết 404 khi `resultCount ≥ 1`.
4. Chloe (case `102965490286`): record `1510513131` = **custom app / ABM**. Public Store = **app record mới** (§14). **Không** Archive vào `com.drvn.rmms`.

### Case status — không có URL tracker

Apple **không** có trang `…/case/102965490286`. Trạng thái = **email** Case ID.

| Làm | Không làm |
|-----|-----------|
| Inbox **Account Holder** (`lephucjcnet@gmail.com`) + Spam · reply **cùng thread** để hỏi status / gửi thêm ảnh | Gửi ticket mới (trừ khi Apple bảo vậy) |
| [developer.apple.com/contact](https://developer.apple.com/contact/) chỉ **mở case mới** | Đợi Search index trước khi catalog có bản ghi (`resultCount: 0` ≠ trễ Search) |

Auto-reply Apple: *If you would like a status update on your case, please reply back to this email.*

### Screenshot / metadata khi đang Waiting for Review

Đổi **ảnh listing** → phải **remove this version from review** (Apple khóa upload screenshot). Đổi **build** mới cũng remove. Description / keywords / URL thường sửa được khi còn Waiting. Sau Approved: đổi ảnh = **version mới**.

---

## 14. App record mới — Public App Store

> Apple: **sau Approved không đổi** Custom → Public. Record cũ `1510513131` / `com.drvn.rmms` **giữ ABM**. Public = record **khác** + Bundle ID **khác** + nộp binary lại.  
> **Cấm** agent bấm Create/Submit hộ. **Cấm** invent Bundle ID vào xcconfig — user tạo Identifier trên Apple rồi `/fill-build-ios-info` dán.

### 14.0 Trước khi bấm +

| Giữ | Đổi |
|-----|-----|
| Team `H2T7CM4NFF` · BFF `https://rmms-mobile-bff.linm-soft.com` · listing [`submit-info.html`](submit-info.html) · shot 6.9" [`ASSET-MANIFEST.md`](ASSET-MANIFEST.md) · Review Notes `rmms-001` | Public **đã tạo:** Bundle `com.drvn.rmms.store` · SKU `rmms-vn-public` · Apple ID **`6812959209`** · Name `RMMS` |

1. [developer.apple.com](https://developer.apple.com/account/resources/identifiers/list) → **Identifiers** → **+** → App IDs → App.
2. Description: `RMMS VN Public`. Bundle ID: **Explicit** — **không** `com.drvn.rmms`. Gợi ý user tự chọn: `com.drvn.rmms.store` (chỉ dùng sau khi Identifier **đã** Register).
3. Capabilities khớp bản cũ (Push / Associated Domains nếu đang dùng). **Register**.
4. (Tuỳ chọn) ASC app cũ đổi tên thành `RMMS (VN) Business` để **giải phóng** tên `RMMS (VN)` cho record public.

### 14.1 Create app trên ASC

1. [appstoreconnect.apple.com](https://appstoreconnect.apple.com) → **Apps** → **+** → **New App**.
2. Platform **iOS**.
3. Name: `RMMS (VN)` (hoặc tên đã giải phóng).
4. Primary Language: **Vietnamese**.
5. Bundle ID: chọn Identifier **mới** (dropdown). Không thấy → chưa Register / sai Team.
6. SKU: duy nhất, vd. `rmms-vn-public` (chỉ trên ASC, không trong Xcode).
7. User Access: **Full Access** (Account Holder).
8. **App Distribution Methods** → **Public**. **Cấm** Private / Custom / “available privately as a custom app”.
9. Create.

### 14.2 Trước Archive (Must)

| Ô | RMMS public |
|---|-------------|
| Pricing and Availability | **Manage Availability** → **Vietnam** (và nước cần) → Available. **Không** Custom orgs |
| Age Ratings | §7 (Messaging YES · còn lại NONE → 4+) |
| Privacy / Support / Marketing | `https://rmms.vn/privacy` |
| Screenshots | iPhone 6.9" pack `store/out/ios/` · **cấm** iPad |
| Version | Marketing **`1.0.0`** · Build **`1`** (đã fill xcconfig) |

Dán Bundle ID từ **App Information** record **mới** → `/fill-build-ios-info` (AskQuestion `app_id_confirm`) → `/plan-release-mobile` → `/build-release-app`. **Không** Archive khi xcconfig còn `com.drvn.rmms`.

### 14.3 Nộp

Upload IPA → gắn build → copy [`submit-info.html`](submit-info.html) → user **Add for Review**. Chuỗi cũ §5–§10. App cũ ABM **không** xóa trừ khi chốt bỏ custom.
