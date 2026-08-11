# Design — mobile-p1 (iOS Swift · Gói B)

| Field | Value |
|-------|-------|
| feature | `mobile-p1` |
| pack | Mobile Gói B (300tr) · HĐ `37001-08/2026-LIC/LINM-JNET` |
| Feature Kind | **Mobile shell** + pilot **patrol** (map/check-in) · incident create |
| status | `await_confirm` |
| changeScope | `new_mobile_design` |
| packKind | `mobile` |
| platforms | **iOS SwiftUI style** (primary prototype) · Android parity sau chốt |
| mfe / app | **Chưa chốt repo** — `ui_repo_confirm` khi implement (Swift native / KMP / Flutter) |
| brief | `map-feature/mobile-design-brief.md` |
| updatedAt | 2026-08-10T16:35:00.000Z |
| design_confirm | pending |
| revise | Login + SF Symbol icons (2026-08-10) |

## 0. Context & Demo

| ID | Path | Notes |
|----|------|-------|
| CTX-BRIEF | `map-feature/mobile-design-brief.md` | IA 5 tab · 11 màn P1 · KPI |
| CTX-PAT | `docs/context/features/patrol.md` | Field inventory ca / check-in / offline |
| CTX-INC | `docs/context/features/incident.md` | Tạo SC · severity · offline |
| CTX-ATT | `docs/context/features/attendance.md` | GPS chấm công (seg Hiện trường) |
| DEM | Web demo — **tham chiếu field**, không clone desktop | `patrol-demo` · `incident-demo` |
| DI | N/A (mobile pack) | — |

## 1. Kind + UI pattern

| | |
|--|--|
| Shell | **UITabBarController** style — 5 tab |
| Pilot deep | **patrol** — home · map live · history · detail · offline · check-in sheet |
| Secondary | **incident** list + FAB create sheet · **gis** read overlay · **AI** hub · **Tôi** |
| Device | iPhone **390×844** · safe area · home indicator |
| Style | **SwiftUI / iOS HIG** — grouped list · large title · systemBlue · sheets · glass map chrome |
| Parity Web | Khớp **field** CTX — **cấm** copy layout desktop 1:1 |

### IA (chốt prototype)

```
Login (auth) → Tab bar (5)
├── Hiện trường → Patrol | Attendance (segmented)
├── Sự cố → list + FAB create
├── Bản đồ → GIS overlay (đọc)
├── AI → Vision / Asset-detect / Estimate
└── Tôi → Profile · sync · drawer · Đăng xuất
```

## 1b. Icon SSOT (SF Symbol style)

Prototype: SVG sprite stroke 1.75 · implement native dùng **SF Symbols** (iOS) / Material tương đương (Android).

| Surface | SF Symbol (iOS) | Prototype id |
|---------|-----------------|--------------|
| Tab Hiện trường | `mappin.and.ellipse` | `#i-mappin` |
| Tab Sự cố | `exclamationmark.triangle` | `#i-warning` |
| Tab Bản đồ | `scope` / `location.north` | `#i-scope` |
| Tab AI | `sparkles` | `#i-sparkles` |
| Tab Tôi | `person.crop.circle` | `#i-person` |
| Offline queue | `tray.and.arrow.down` | `#i-tray-down` |
| Notify | `bell` | `#i-bell` |
| Patrol row | `figure.walk` | `#i-walk` |
| Done | `checkmark` | `#i-check` |
| Map | `map` | `#i-map` |
| History list | `list.bullet` | `#i-list` |
| Search | `magnifyingglass` | `#i-search` |
| FAB / add | `plus` | `#i-plus` |
| Camera | `camera` | `#i-camera` |
| Login company | `building.2` | `#i-building` |
| Login user | `person` | `#i-person` |
| Login pass | `lock` | `#i-lock` |
| Show pass | `eye` / `eye.slash` | `#i-eye` |
| Face ID | `faceid` | `#i-faceid` |
| Brand | `road.lanes` (approx) | `#i-road` |
| Maintenance | `wrench.and.screwdriver` | `#i-wrench` |
| Camera xem | `video` | `#i-video` |
| Settings | `gearshape` | `#i-gear` |
| Chevron | `chevron.left/right` | `#i-chevron-*` |

**Cấm** emoji / chữ thay icon (`bell`, `P`, `☺`) trên surface production.

## 2. Screens / zones

| Screen id | `data-des-id` | Pattern | Notes |
|-----------|---------------|---------|-------|
| Login | `DES-MOB-LOGIN` | Brand + form + Face ID | Entry · ẩn tab bar |
| Login form | `DES-MOB-LOGIN-FORM` | Grouped fields | company · user · pass |
| Patrol home | `DES-MOB-PAT-HOME` | Large title + hero ca + KPI + rows | Active session CTA |
| Segment | `DES-MOB-PAT-SEG` | `UISegmentedControl` | Tuần đường / Chấm công |
| Active hero | `DES-MOB-PAT-ACTIVE` | Gradient card | Coverage progress |
| KPI | `DES-MOB-PAT-KPI` | 3 metric cards | CI / còn / % |
| Map ca | `DES-MOB-PAT-MAP` · `DES-MOB-OMS-PATROL` | **OMS live Leaflet** | host→bar→legend · OSRM · Fit |
| Check-in sheet | `DES-MOB-PAT-CHECKIN-SHEET` | Modal sheet | Điểm · GPS · note · ảnh · Online/Offline |
| Lịch sử | `DES-MOB-PAT-LIST` | Inset grouped list + search | Status badges |
| Chi tiết ca | `DES-MOB-PAT-DETAIL` | Summary + timeline CI | Footer: map / kết thúc |
| Offline | `DES-MOB-PAT-OFFLINE` | Queue list + Sync | Banner mạng yếu |
| Attendance | `DES-MOB-ATT` | Hero GPS + 7-day rows | Cùng tab Hiện trường |
| Incident list | `DES-MOB-INC-LIST` | Large title + KPI + FAB | Severity badges |
| Incident create | `DES-MOB-INC-CREATE-SHEET` | Sheet | Loại · mức · pin · ảnh · offline |
| GIS | `DES-MOB-GIS` · `DES-MOB-OMS-GIS` | **OMS live** read overlay | TS/SC pins · corridor · Fit |
| AI hub | `DES-MOB-AI` | Grouped nav + HITL row | Confirm candidate |
| Tôi | `DES-MOB-ME` | Profile + sync + more | Drawer entries |
| Tab bar | `DES-MOB-TABBAR` | 5 tabs | Fixed |
| Device | `DES-MOBILE-DEVICE` | Bezel frame | Review stage |

## 3. Field inventory (patrol pilot — khớp CTX)

| uiField | Label VN | Control (mobile) | Required | Notes |
|---------|----------|------------------|----------|-------|
| code | Mã phiên | Text readonly | — | `PAT-YYYYMMDD-NNNN` |
| userName | Nhân viên | Text | * | Profile / detail |
| route | Tuyến đường | Text + map pin | * | QL.1 + Km |
| patrolType | Loại tuần | Segment / Select | * | Tuần đường · Tuần kiểm |
| plannedDate | Ngày KH | Date | * | Local TZ |
| startedAt | Bắt đầu | DateTime | | Detail |
| checkInCount | Số điểm CI | Number / KPI | * | ≥3/ngày/tuyến DoD |
| coveragePercent | Coverage % | Progress + KPI | | Map + hero |
| status | Trạng thái | Badge | * | Đang tuần · Hoàn thành · Bỏ sót · Offline |
| offlineQueued | Hàng đợi | Badge + queue list | | Sync CTA |
| note | Ghi chú CI | TextArea | | Sheet |
| gps | GPS | Readonly + accuracy | * | Sheet · deny → toast/flow |
| photo | Ảnh CI | Camera shutter slots | | Sheet |

### Incident create (secondary)

| uiField | Control |
|---------|---------|
| type | Select |
| severity | Select (Critical…Low) |
| location | Pin / GPS text |
| description | TextArea |
| photos | Camera slots |
| offlineDraft | Secondary button |

## 4. Tokens (Swift system)

| Token | Value | Dùng |
|-------|-------|------|
| Tint | `#007AFF` systemBlue | Tab · CTA · link |
| Success | `#34C759` | Done / đủ công |
| Warning | `#FF9500` | Offline queue |
| Danger | `#FF3B30` | Critical SC · bỏ sót |
| Grouped BG | `#F2F2F7` | Screen bg |
| Card | `#FFFFFF` · radius 12 | Inset grouped |
| Font | SF Pro / `-apple-system` | All |

## 3b. Login fields

| uiField | Label VN | Control | Required |
|---------|----------|---------|----------|
| companyCode | Mã đơn vị | Text + building icon | * |
| username | Tên đăng nhập | Text + person | * |
| password | Mật khẩu | SecureField + eye toggle | * |
| biometric | Face ID | Button secondary | optional |
| forgot | Quên mật khẩu | Link → Auth | |

Auth → BFF cùng Web (`web-bff/api/v1/auth`) — **cấm** fork token.

## 5. Flows (happy + edge)

| Flow | Steps |
|------|-------|
| Login | Brand → điền → Đăng nhập / Face ID → tab Hiện trường |
| Logout | Tôi → Đăng xuất → Login |
| Happy patrol | Home → Map → Sheet check-in → Lưu → KPI +1 |
| Offline | Sheet → Lưu offline → Queue → Sync khi online |
| GPS deny | (prototype toast) — production: Settings deep-link copy |
| Incident from field | Tab Sự cố → FAB → Sheet → Gửi / nháp offline |
| HITL | AI tab → Confirm DET → toast SC |

## 6. Out of scope P1 (brief)

Twin 3D · YOLO local · train offline · WO/SLA full · TOC · cổng dân · camera **config HW** trên mobile.

## Prototype (REQUIRED)

| | |
|--|--|
| Artifact | `ui/prototype/index.html` + `map-oms.js` |
| Zones | `DES-MOB-*` (bảng §2) · OMS `DES-MOB-OMS-PATROL` / `DES-MOB-OMS-GIS` |
| Scope | iPhone + system chrome — **không** GOVOne web chrome |
| Style | SwiftUI / iOS HIG · **scrollbar ẩn** (iOS overlay) |
| Map gate | `/agent-dev-oms-map` — live OSM · Esri · Sat≤17 · OSRM · Fit overview≤13 · line levels · isolate |
| SSOT brief | `map-feature/mobile-design-brief.md` |
| **reviewUrl** | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/mobile-p1/ui/prototype/index.html` |
| Alt serve | `http://localhost:5198` |

### Wire (patrol map — OMS)

```
[Nav]     ‹ Hiện trường     Ca đang chạy     Check-in
[host]    Leaflet OSM live · corridor teal + track blue · CI pins
[float]   Điểm tiếp theo · Ghi nhận
[bar]     OSM | Esri | Sat | Fit
[legend]  Tất cả · Track · CI xong · CI tiếp  → isolate+Fit
[Tab]     …
```

## OMS checklist (mobile)

| # | Check | Status |
|---|-------|--------|
| R1 | Live Leaflet — không gradient fake | ✅ `map-oms.js` |
| R2 | Default OSM VN + Esri + Sat | ✅ |
| R3 | title/aria-label trên nút basemap/Fit | ✅ |
| R4/R4b | Full flex fill trong phone (không vh cap) | ✅ `.map-host` flex |
| R4c | host → bar → legend | ✅ |
| R5b | sat maxNativeZoom 17 | ✅ |
| R7b | corridor pane + track pane | ✅ |
| R7c | legend isolate + Fit | ✅ |
| R8 | OSRM route | ✅ public router |
| R11 | Fit overview maxZoom ≤13 | ✅ |

## Handoff (sau `design_confirm` approve)

- **SA / Mobile lead:** chọn stack (`ui_repo_confirm`) · API BFF same Web (`5201/web-bff/api/v1`) — **cấm** fork API
- Batch màn còn lại cùng pattern: list+map / AI capture / camera xem
- Web list pack `patrol` đã confirmed riêng — mobile **không** thay DES-GRID web

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-design |
| skillVersion | 2026.08.08.31 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.08.31 |
| rulesVersion | 2026.08.08.31 |
| generatedAt | 2026-08-10T16:20:00.000Z |
| versionGate | new artifact |
| shared_grid_example | N/A (mobile — không DES-GRID-A…D web) |
