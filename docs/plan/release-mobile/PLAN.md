# PLAN — Release mobile (Store waves + toggle)

> **Slash:** `/plan-release-mobile` · alias `/release-mobile-plan`  
> **Gate Submit:** `/review-app-submit` (fail closed · **cấm** READY_TO_SUBMIT từ PLAN này)  
> **Law:** `/review-app-vn-map-law` · [`legal-tech-corridor.md`](../../context/features/legal-tech-corridor.md)  
> **Flags SSOT:** [`flags.json`](flags.json) — hand-sync `ReleaseFlags` iOS + Android  
> **Chốt wave hiện tại:** **3** (`w3_camera`) · **skip map** submit 2026-09-16 (`guest.directions` + `staff.patrolMap` OFF · camera + GPS ON)  
> **OTP quên MK:** `guest.forgotOtp` = **false** đến khi SMS OTP prod gửi được — màn forgot chỉ dòng liên hệ admin, **không** xóa code · **cấm** public OSRM (`net.osrmPublic` = false)  
> **iOS ASC (Archive → Review):** [`store/IOS-SUBMIT-GUIDE.md`](store/IOS-SUBMIT-GUIDE.md) · context [`ios-store-submit.md`](../../context/features/ios-store-submit.md)  
> **CH Play (AAB → Review):** [`store/ANDROID-SUBMIT-GUIDE.md`](store/ANDROID-SUBMIT-GUIDE.md) · Studio: [`store/ANDROID-STUDIO-RELEASE.md`](store/ANDROID-STUDIO-RELEASE.md) · context [`android-store-submit.md`](../../context/features/android-store-submit.md)

## HARD

| ❌ | ✅ |
|----|-----|
| Xóa màn/API đã implement để “gọn Store” | Giữ code · `flags.*` = `false` · ẩn tile/tab/route |
| Lộ “Quên mật khẩu?” / OTP khi SMS chưa gửi | `guest.forgotOtp` = false · ẩn CTA · deep-link → login |
| Screenshot / e2e màn OFF | Capture + Maestro **chỉ** surface ON |
| Public OSRM / OSM.org CDN (mọi wave đến self-host) | `net.osrmPublic` · `net.osmCdn` = false |
| Geo-block reviewer | Không chặn IP / quốc gia |
| Nói READY_TO_SUBMIT | Chain `/run-mobile-e2e` rồi `/review-app-submit` |

Gaps: `GAP-REL-DELETE-01` · `GAP-REL-LEAK-01` · `GAP-REL-SHOT-01` · `GAP-REL-OSM-01` · `GAP-REL-GEO-01` · `GAP-REL-BG-01` · `GAP-REL-SUBMIT-01` · `GAP-REL-OTP-01`.

---

## Wave matrix (QLBD)

| Wave | ON (hiển thị) | OFF (toggle, không xóa) | Mở hồ sơ trước khi bật |
|------|---------------|-------------------------|------------------------|
| **0** Store 1.0 | Guest home (Khách, login CTA, FAQ, privacy) · staff lists sau JWT (supervise, history, offline, mnt-*, incident-list, asset-hub **list**, feedback, me, ops) | **login-forgot / OTP quên MK** · patrol-map/pin · attendance GPS · cam-* · field-reflect · directions · guest lat/lng · asset map/AI · public OSRM/OSM CDN | Landing HTTPS · `PrivacyInfo.xcprivacy` · demo [`store/REVIEW-ACCOUNTS.md`](store/REVIEW-ACCOUNTS.md) `rmms-001` / `rmms-002` |
| **1** Map guest | + clip map + directions | Field GPS / cam · (forgot OTP vẫn OFF nếu SMS chưa live) | gis.vn 34 tỉnh · self-host tile/OSRM |
| **2** Field | + WhenInUse patrol / attendance | Always location · cam AI vận hành | Văn bản GTVT |
| **3** Camera | + cam + GPS field | **Submit 2026-09-16 skip map:** clip GIS / patrol-map / directions | DPIA A05 |

`guest.forgotOtp` **không** gắn wave map/GPS — bật **true** khi SMS OTP prod gửi được (có thể cùng W0 sau patch), không đợi W1–W3.

---

## Flag keys (wave 3)

| Key | Wave 3 | Ghi chú |
|-----|--------|---------|
| `guest.home` / `guest.faq` / `guest.privacy` / `guest.login` | true | Guest + login password |
| `guest.forgotOtp` | **false** | OTP quên MK **OFF** đến SMS live · màn contact-admin |
| `staff.lists` | true | List staff |
| `guest.directions` | **false** | Skip map hôm nay — clip GIS OFF |
| `staff.patrolMap` | **false** | Skip map hôm nay — patrol-map OFF · **không** xóa code |
| `staff.attendanceGps` | true | GPS WhenInUse (chấm công / pin-here) |
| `staff.camera` | true | Cam + field AI |
| `net.osrmPublic` / `net.osmCdn` | **false** | Đến self-host `OsrmBase` · overlay nét thẳng tạm |

---

## Tasks

| # | Task | DoD |
|---|------|-----|
| 0.1 | Khóa `flags.json` wave 3 skip map | File committed · wave = 3 · map OFF · GPS/cam ON · `guest.forgotOtp` = false · `net.osrmPublic` = false |
| 0.1b | Wire ẩn OTP quên MK dual OS | Màn forgot contact-admin · code OTP còn · hand-sync `ReleaseFlags` |
| 0.2 | `/plan-release-mobile` review + wire `#if` / flavor | Dual OS · **cấm** Delete · Release `STORE_W0…W3` · WhenInUse + Camera plist · Android release **giữ** FINE/CAMERA · OSRM **cấm** `project-osrm.org` |
| 0.3 | `/build-release-app` | AskQuestion platform + phase · Archive / AAB StoreW3 |
| 0.4 | e2e + screenshot **chỉ** ON | `/run-mobile-e2e` `store_wave=w3_camera` trên artifact 0.3 · shot GPS/cam · **không** shot map / OTP |
| 0.5 | Submit | `/review-app-submit` — còn `GAP-SUBMIT-*` / `GAP-REL-*` → **cấm** Submit · tay ASC: [`store/IOS-SUBMIT-GUIDE.md`](store/IOS-SUBMIT-GUIDE.md) · tay CH Play: [`store/ANDROID-SUBMIT-GUIDE.md`](store/ANDROID-SUBMIT-GUIDE.md) |

`0.2`–`0.3` = skill (chưa wire native / chưa có flavor StoreWn trên repo).

---

## Chain

```
implement ALL features (pipeline / edit)
  → /plan-release-mobile   review + add compile if
  → /build-release-app     AskQuestion platform rồi phase
  → /run-mobile-e2e        store_wave = phase · ON only
  → /review-app-submit     submit_phase → toggle_confirm → stores
  → READY_TO_SUBMIT | GAP-SUBMIT-* / GAP-E2E-WAVE-01
```
