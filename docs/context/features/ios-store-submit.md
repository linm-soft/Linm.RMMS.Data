# Context — iOS App Store submit (Invalid Binary + listing)

> **Slug:** `ios-store-submit` · **Module:** Compliance × Native iOS  
> **Status:** Context (incident 1.0.7 · 2026-09-17)  
> **Skills:** `/fill-build-ios-info` · `/plan-release-mobile` · `/build-release-app` · `/review-app-submit` · `/submit-store-ios` · `/copy-icon-to-app`  
> **Runbook tay:** [`../../plan/release-mobile/store/IOS-SUBMIT-GUIDE.md`](../../plan/release-mobile/store/IOS-SUBMIT-GUIDE.md)  
> **Peers:** [`legal-tech-corridor.md`](legal-tech-corridor.md) · [`login.md`](login.md)

**Mọi app Apple mới** (không chỉ RMMS): làm checklist §6 **trước** Archive. Lệch → Apple **Invalid Binary** hoặc 90717 — không phải do xóa archive local.

## 1. Tổng quan

| | |
|--|--|
| Mục tiêu | IPA Store không bị **Invalid Binary** / 90717 / 2.3.3 do identity + privacy + icon |
| RMMS in-flight | `com.drvn.rmms` · **1.0.7 (6)** · wave 3 skip map · Team `H2T7CM4NFF` |
| DoD | `/fill-build-ios-info` verify PASS · `/review-app-submit` · user Submit ASC |

## 2. Design / listing

Family **`1`** (iPhone): screenshot **chỉ 6.9"** (1320×2868 RGB). **Cấm** iPad / Apple Watch listing. Shot **chỉ** surface `flags.json` ON. Acc Review Notes: [`REVIEW-ACCOUNTS.md`](../../plan/release-mobile/store/REVIEW-ACCOUNTS.md) `rmms-001` — **cấm** `rmms-admin` trên ASC.

## 3. API / host

`BFF_BASE` HTTPS prod trong `Config/Release.xcconfig` — **cấm** host trong `.swift` · **cấm** localhost Store.

## 4. Database

N/A (không đổi schema).

## 5. Events

N/A.

## 6. Gates (app mới + rebuild)

| Incident | Apple | Fix bắt buộc |
|--------|-------|----------------|
| **Invalid Binary** | ITMS-91056 — `PrivacyInfo.xcprivacy` reason **không tồn tại** | `UserDefaults` = **`CA92.1`** (app-only). **Cấm** `CA92.4`. Codes hợp lệ: `CA92.1` · `1C8F.1` · `C56D.1` · `AC6B.1` ([TN3181](https://developer.apple.com/documentation/technotes/tn3181-debugging-invalid-privacy-manifest) · [TN3183](https://developer.apple.com/documentation/technotes/tn3183-adding-required-reason-api-entries-to-your-privacy-manifest)) |
| **90717** | Large app icon alpha | `Icon-App-1024x1024.png` PNG **RGB** · nền đặc · flatten trước `/copy-icon-to-app` / Archive. In-app `AppLogo` được alpha |
| ATS Store | `GAP-IOS-ATS-01` | Release **xóa** `NSAllowsLocalNetworking`. Debug mới giữ localhost |
| Missing Compliance | Export encryption | `ITSAppUsesNonExemptEncryption` = **NO** nếu chỉ HTTPS/TLS iOS. ASC: *None of the algorithms mentioned above* |
| MapLibre dSYM | Upload Symbols Failed | Warning — **không** Invalid Binary. Bỏ tick upload symbols. **Cấm** sửa MapLibre manifest tay |
| 2.3.3 | Shot/mô tả lệch binary | Delete listing → 6.9" ON only. File **Download** trên Submission = bằng chứng Apple, **không** xóa được |
| Age Ratings | Unable to Add for Review | App Information → Age Ratings **Edit** (questionnaire mới, không phải thẻ 4+ cũ) |
| Grant GitHub | Xcode Cloud | **Cancel** — không cần để Upload IPA |
| Invalid Binary sau Waiting | IPA bị hủy | Tăng `CURRENT_PROJECT_VERSION` · **cùng** version marketing in-flight · Archive **mới** |

Xcode: **Product → Archive** · dest **Any iOS Device**. **Cấm** Simulator Store.

## 7. Slash

```
/fill-build-ios-info   → identity + ATS + privacy + icon check
/plan-release-mobile
/build-release-app    → ios rồi wave
/review-app-submit
/submit-store-ios     → user nộp ASC
```
