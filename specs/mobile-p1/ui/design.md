# Design — mobile-p1 (iOS + Android)

| Field | Value |
|-------|-------|
| feature | `mobile-p1` |
| pack | Mobile Gói B · HĐ `37001-08/2026-LIC/LINM-JNET` |
| packKind | mobile |
| platforms | **iOS 390×844** + **Android 412×915** |
| stack P1 | SwiftUI style + Material 3 — **cấm** Flutter / KMP |
| context | `../mobile/context.md` |
| brief | `map-feature/mobile-design-brief.md` |
| status | `await_confirm` |
| design_confirm | pending |
| updatedAt | 2026-08-16T00:40:00.000Z |

## 0. Context

| ID | Path |
|----|------|
| CTX-MOB | `specs/mobile-p1/mobile/context.md` |
| CTX-BRIEF | `map-feature/mobile-design-brief.md` |
| CTX-* | `docs/context/features/{login,patrol,attendance,incident,asset,gis,ai-vision,ai-asset-detect,camera-connect,maintenance,ops,estimate}.md` |

Web demo = field reference — **cấm** clone `LinPageLayout` / GOVOne.

## 1. IA + chrome

```
Login (ẩn tab) → Tab 5
├── Hiện trường → Patrol | Attendance (segment)
├── Sự cố → list + create (iOS toolbar + · Android FAB)
├── Bản đồ → GIS overlay đọc
├── AI → Vision / Detect HITL / Estimate
└── Tôi → Profile · sync · drawer
Drawer: Bảo trì · Camera xem · Offline · Thông báo · Cài đặt
```

| Surface | iOS | Android |
|---------|-----|---------|
| Frame | 390×844 · notch · home indicator | 412×915 · status · gesture nav |
| Nav | Large title / inline + chevron | LargeTopAppBar / small + Up |
| Tabs | UITabBar 5 · SF | NavigationBar 5 · Material |
| Sheet | `.sheet` detent | ModalBottomSheet |
| Create SC | Nav `+` / sheet | **FAB** |
| Scroll | Overlay · ẩn track | Edge-to-edge |

## 1b. Icon SSOT (SF ↔ Material)

| Surface | SF Symbol | Material | Prototype |
|---------|-----------|----------|-----------|
| Tab Hiện trường | `mappin.and.ellipse` | `location_on` | `#i-mappin` |
| Tab Sự cố | `exclamationmark.triangle` | `warning` | `#i-warning` |
| Tab Bản đồ | `scope` | `explore` | `#i-scope` |
| Tab AI | `sparkles` | `auto_awesome` | `#i-sparkles` |
| Tab Tôi | `person.crop.circle` | `account_circle` | `#i-person` |
| Offline | `tray.and.arrow.down` | `download` | `#i-tray-down` |
| Notify | `bell` | `notifications` | `#i-bell` |
| Camera | `camera` | `photo_camera` | `#i-camera` |
| Face ID / Bio | `faceid` | `fingerprint` | `#i-faceid` / `#i-finger` |
| FAB / add | `plus` | `add` | `#i-plus` |
| Maintenance | `wrench.and.screwdriver` | `handyman` | `#i-wrench` |
| Camera xem | `video` | `videocam` | `#i-video` |
| Asset | `cube` | `inventory_2` | `#i-cube` |
| Estimate | `sum` | `calculate` | `#i-sum` |

**Cấm** emoji / chữ `P` / `bell` text.

## 2. Screens / zones (cùng `data-des-id`)

| Screen | `data-des-id` | iOS | Android |
|--------|---------------|-----|---------|
| Review doc | `DES-MOB-DOC-GUIDE` | Trái quyền · phải ngành | Same |
| Device | `DES-MOBILE-DEVICE` | Bezel 390×844 | Bezel 412×915 |
| Login | `DES-MOB-LOGIN` | Brand + form | Same fields · Material field |
| Login form | `DES-MOB-LOGIN-FORM` | Grouped | OutlinedTextField |
| Tab bar | `DES-MOB-TABBAR` | 5 tabs | NavigationBar 5 |
| Patrol home | `DES-MOB-PAT-HOME` | Large title + hero | LargeTopAppBar + hero |
| Segment | `DES-MOB-PAT-SEG` | UISegmentedControl | FilterChips |
| Active / KPI | `DES-MOB-PAT-ACTIVE` · `DES-MOB-PAT-KPI` | Cards | Cards |
| Map ca | `DES-MOB-PAT-MAP` · `DES-MOB-OMS-PATROL` | OMS Leaflet | OMS Leaflet |
| Check-in sheet | `DES-MOB-PAT-CHECKIN-SHEET` | Sheet + match badge | BottomSheet |
| Location mismatch | `DES-MOB-LOC-MISMATCH` | Banner in-sheet | Same |
| History / detail / offline | `DES-MOB-PAT-LIST` · `DES-MOB-PAT-DETAIL` · `DES-MOB-PAT-OFFLINE` | Grouped list | Cards |
| Attendance | `DES-MOB-ATT` | Hero GPS + 7-day | Same |
| Incident list | `DES-MOB-INC-LIST` | List + `+` | List + **FAB** |
| Incident detail | `DES-MOB-INC-DETAIL` | View | View |
| Asset detail | `DES-MOB-ASSET-DETAIL` | View | View |
| Check-in saved | `DES-MOB-CI-DETAIL` | View immutable | Same |
| Incident create | `DES-MOB-INC-CREATE-SHEET` | Sheet | BottomSheet |
| GIS | `DES-MOB-GIS` · `DES-MOB-OMS-GIS` | OMS read | OMS read |
| Asset list | `DES-MOB-ASSET-LIST` | Search + rows | SearchBar + rows |
| AI hub | `DES-MOB-AI` | Grouped nav | List |
| Vision capture | `DES-MOB-VIS-CAPTURE` | Ảnh + vị trí đã chốt + class | Same |
| Camera shutter | `DES-MOB-PHOTO-GPS` | Viewfinder + shutter · GPS live | Same |
| Ảnh đã chốt | `DES-MOB-GPS-PIN` | Stamp tuyến/Km/±m + pin map | Same |
| Detect HITL | `DES-MOB-DET-HITL` | Confirm/Dismiss | Same |
| Estimate | `DES-MOB-EST` | Qty · giá · confirm | Same |
| Camera xem | `DES-MOB-CAM-VIEW` | JPEG + events | Same |
| Maintenance | `DES-MOB-MNT-LIST` | Thin WO list | Same |
| Ops inbox | `DES-MOB-OPS` | Notify list | Same |
| Tôi | `DES-MOB-ME` | Profile + drawer | Same |
| GPS deny | `DES-MOB-GPS-DENY` | In-app modal | Material dialog |
| Leave dirty | `DES-MOB-LEAVE` | In-app modal | Material dialog |

## 3. Tokens

| Meaning | iOS | Android (Material 3) |
|---------|-----|----------------------|
| Tint / primary | `#007AFF` | `#1B6EF3` primary |
| Success | `#34C759` | `#1B8A4A` |
| Warning offline | `#FF9500` | `#E67E00` |
| Danger | `#FF3B30` | `#D32F2F` |
| Grouped / surface | `#F2F2F7` | `#F7F2FA` surface |
| Card | `#FFF` r12 | surfaceContainer r16 |
| Font | `-apple-system` | Roboto / system |

## 4. Flows

| Flow | Steps |
|------|-------|
| Login | Brand → điền → Đăng nhập / Bio → tab Hiện trường |
| Happy patrol | Home → Map OMS → Sheet CI → Lưu → KPI +1 |
| Offline | Sheet → Lưu offline → Queue → Sync |
| GPS deny | CTA chấm/CI → `DES-MOB-GPS-DENY` · copy mở Settings · **cấm** Lưu |
| Auto-pin | Mở sheet CI/SC → pin GPS hiện tại · pin cam = điểm KH · **cấm** gõ lat/lng |
| Sai điểm | `distanceM` > 50 hoặc gần điểm KH khác → banner `DES-MOB-LOC-MISMATCH` · **chặn** Lưu |
| GPS kém | `accuracyM` > 30 → banner · **chặn** |
| Incident | Tab SC → +/FAB → Sheet (auto-pin + tuyến/Km *) → Gửi / nháp offline |
| Leave dirty | Sheet đang sửa → Hủy → `DES-MOB-LEAVE` · **cấm** `alert` |
| HITL | AI → Detect → Confirm → toast SC/TS |
| Vision | AI → Shutter (`DES-MOB-PHOTO-GPS`) → Kalman+snap → pin (`DES-MOB-GPS-PIN`) → class → Gắn SC |
| Chụp + GPS | Slot ảnh CI/SC/Vision → camera máy · chốt vị trí · **không** gõ tọa độ · **không** note thuật toán trên UI |
| Camera xem | Tôi → Camera → JPEG refresh — **không** form HW |
| Logout | Tôi → Đăng xuất → Login |

## 5. Device behavior checklist (`mobile-device-behavior.md`)

| Behavior | iOS | Android | Gap |
|----------|-----|---------|-----|
| Safe area (notch / home / insets) | ✅ | ✅ | |
| Keyboard avoid input / sheet | ✅ sheet grows | ✅ | |
| Swipe-back / predictive back | ✅ chevron + note | ✅ Up + note | |
| GPS deny in-app | ✅ `DES-MOB-GPS-DENY` | ✅ | |
| Offline banner + queue + Sync | ✅ | ✅ | |
| Biometric fallback password | ✅ | ✅ fingerprint | |
| Permission in-context | ✅ | ✅ | |
| Leave dirty modal — **cấm** `alert`/`confirm` | ✅ `DES-MOB-LEAVE` | ✅ | |
| Icons SF ↔ Material — **cấm** emoji | ✅ | ✅ | |
| Map OMS live — **cấm** fake / `vh` cap | ✅ flex host | ✅ | |

Thiếu tick → **GAP-MOB-DEV-***. Pack này: không gap mở.

## 6. Out of scope P1

Twin 3D · YOLO local · train offline · WO/SLA full · TOC · cổng dân · camera config HW.

## Prototype (REQUIRED)

| | Path |
|--|------|
| iOS | `ui/prototype/ios/index.html` |
| Android | `ui/prototype/android/index.html` |
| OMS helper | `ui/prototype/map-oms.js` |
| **reviewUrl iOS** | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/mobile-p1/ui/prototype/ios/index.html` |
| **reviewUrl Android** | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/mobile-p1/ui/prototype/android/index.html` |
| Serve | `npx --yes serve -p 5198 ui/prototype` → `/ios/` · `/android/` |

### OMS (patrol + GIS)

| # | Check | Status |
|---|-------|--------|
| R1 | Live Leaflet — không gradient fake | ✅ `map-oms.js` |
| R2 | OSM + Esri + Sat | ✅ |
| R4 | Flex fill trong phone (không vh) | ✅ `.map-host` |
| R4c | host → bar → legend | ✅ |
| R5b | sat maxNativeZoom 17 | ✅ |
| R8 | OSRM | ✅ |
| R11 | Fit overview maxZoom ≤13 | ✅ |

## Handoff (sau `design_confirm`)

`/agent-qldb-workflow-mobile` · `ui_repo_confirm` (SwiftUI + Compose) · same BFF — **cấm** fork API.

## Version meta

| Field | Value |
|-------|-------|
| skillId | gen-mobile-design |
| generatedAt | 2026-08-16T00:40:00.000Z |
| schemaVersion | 1 |
