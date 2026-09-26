# PO — Requirement — web-rmms-patrol-map

| Field | Value |
|-------|-------|
| feature | `web-rmms-patrol-map` |
| title | Bản đồ tuần — ca đang chạy · me-dot · toast check-in |
| packKind | `list` |
| changeScope | `new_page` |
| formPattern | Mobile Map / full · phone `max-width: 430px` · **N/A** ERP Modal/Slideout Kind B · **không** master form · **không** POST check-in/tracks P1 |
| status | `done` |
| skillId | `agent-po` |
| skillVersion | `2026.09.05.03` |
| schemaVersion | `1` |
| workflowVersion | `2026.09.19.02` |
| rulesVersion | `2026.09.25.2` |
| versionGate | `ok` |
| contentHash | `sha256:6f74282b807da7f2cc1aa57ac64848cd1d75ff3383c0f432eaad7bea53fff80e` |
| writtenAt | `2026-09-26T03:32:00.000Z` |
| taskId | `task_e0463d5f` |
| demo | **N/A** · **cấm** demo HTML / OMS mock SSOT |
| analy | `specs/_data-analy/features/web-rmms-patrol-map-control-hint.md` · `…-real-data.md` · status=`done` · hash-skip |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| mfeStdRoute | `/web-rmms-patrol-map` |
| mfeStdUrl | `http://localhost:9301/web-rmms-patrol-map` |
| be | `D:/AI-QLBD/Linm.RMMS.WebService` · Mobile.Bff `:5202` · `mobile-bff/api/v1` · **cấm ERP.*** |
| handoff next | Design (`ui/design.md` + prototype + reviewUrl) |

> Labels: `useFormOptions()` / LinmCopy `patrolMap.*` — **cấm** hardcode VN trên UI.  
> **Cấm** nhét phone Map vào MFE desktop · **cấm** sửa iOS/Android native · **cấm** invent `PatrolMapController` / POST tracks P1.

---

## 1. Goal / DoD

**Goal:** Màn Bản đồ tuần 1-1 Android `PatrolMapView`: map full-bleed · ca `Đang tuần` · me-dot GPS · basemap Tiêu chuẩn|Vệ tinh (chrome peer `/gis/live`) · legend isolate · next-card · CTA Ghi điểm tuần = **toast only** P1.

**DoD (PASS khi):**
1. Phone frame ≤430 · zones PM-00…08 · Android 1-1 chrome.
2. Live: `GET mobile-bff/api/v1/patrol/sessions` (filter client `Đang tuần`) + `GET gis/tiles/…` — **không** web-bff client.
3. Check-in CTA → toast · **không** POST / sheet từ map P1.
4. GPS: `navigator.geolocation` · deny → ẩn me / disable locate · **cấm** fake; map vẫn mở khi deny.
5. Labels via copy keys · **cấm** Đường/Phố/Fit/Toàn tuyến EN chips.
6. Out-of-scope không mount (Leave §).

---

## 2. Screens (PM)

| Id | Zone | Behavior / AC |
|----|------|---------------|
| PM-00 | phone frame | `max-width: 430px` · center desktop review · Android 1-1 |
| PM-01 | top bar | Back → entry peer · title Ca đang chạy · trailing Ghi điểm tuần → toast |
| PM-02 | map host | MVT tiles Mobile.Bff · overlay ca P1 (no POST tracks) · **cấm** OSM.org world |
| PM-03 | basemap bar | Chip Tiêu chuẩn \| Vệ tinh · locate Vị trí của tôi · deny GPS → disable locate + toast · **cấm** alert |
| PM-04 | legend | Isolate: Tất cả · Hành trình · Đã ghi điểm tuần · Điểm kế tiếp (client layers) |
| PM-05 | next card | RO · bind `Route` từ active session · empty state khi không ca · CTA toast same PM-01 |
| PM-06 | GPS me-dot | Live fix · **cấm** fake 0,0 |
| PM-07 | locate popup | Tên: Vị trí của bạn · GPS: lat/lng · cite map-inspect-popup |
| PM-08 | entry | Home `/patrol-map` · Field `/field/map` · Supervise segment Bản đồ |

**reviewUrl:** (Design fills) · **peerStdUrl:** `http://localhost:9301/web-rmms-patrol-map`

---

## 3. Grid AC / Filter bar

| | |
|--|--|
| DES-GRID / LinErpListFilterBar | **N/A** — phone Map · **không** Kind B desktop grid |
| Map chrome | PM-03…04 chips only · **cấm** ERP list filter bar |

---

## 4. Report AC

**N/A** — không report/export trên feature này.

---

## 5. Inventory → UX (from analy)

| uiField | controlHint | AC |
|---------|-------------|-----|
| nav.back | Button/Nav | → Home/Field/Supervise |
| nav.title | Text RO | copy `patrolMap.title` |
| nav.checkin / next.checkin | Button | toast P1 · **cấm** sheet/POST |
| map.host | Map | `gis/tiles/…` · no OSM.org |
| basemap.std / sat | Chip | Tiêu chuẩn / Vệ tinh · local paint |
| locate.me | Button | Geolocation · deny → disable |
| legend.* | Chip | isolate layers |
| next.card | Card RO | `GET sessions` · `Route` · empty OK |
| gps.me | MapMarker | live · no fake |
| locate.popup | Popup | Vị trí của bạn · GPS |

---

## 6. Data / API (PO bind — SA chốt DOMAIN-MAP)

| Surface | Rule |
|---------|------|
| Live GET | `patrol/sessions` · filter `Đang tuần` · empty next-card · map vẫn mở · error → toast · **cấm** `window.alert` |
| Tiles | `gis/tiles/{layer}/{z}/{x}/{y}.pbf` · blank → retry · **cấm** OSM.org |
| Write P1 | **không** — toast only cho check-in |
| P2 / peer | tracks/coverage · check-in sheet POST · session detail GET optional |
| BFF | ONLY Mobile.Bff `:5202` · `VITE_MOBILE_API_URL` · **cấm** web-bff từ MFE |
| Domain | Patrol (+ cite Gis) · SA add DOMAIN-MAP row `web-rmms-patrol-map` |

---

## 7. Leave / Out of scope

- `/me*` · feedback · cam-view
- journal / kết ca / tồn tại / tần suất (`web-rmms-mobile-b`…`e`)
- Field 2 cửa deep CRUD (Tuần đường / Tuần kiểm) — peer Field/A
- Check-in sheet POST · invent tracks/coverage/`PatrolMapController`
- Draw / CRUD GIS · asset hub `/gis`
- ERP.* / Domains/Master · sửa native iOS/Android
- Demo OMS geometry SSOT · in-app mock map

---

## 8. Persona

| Ai | Việc |
|----|------|
| NV tuần đường (BDTX) | xem ca · me-dot · toast ghi điểm · back Field/Home |
| Cán bộ QLĐB / giám sát | vào từ Supervise Bản đồ · RO ca |

---

## 9. Open questions → Design / SA

| Id | Owner | Note |
|----|-------|------|
| UNCLEAR-DOMAIN-MAP-PATROL-MAP | SA | Add DOMAIN-MAP row · Patrol (+ Gis) · MFE `/web-rmms-patrol-map` |
| UNCLEAR-OVERLAY-GEOM | Design/SA | P1 no tracks + demo N/A → empty overlay vs session pins nếu Live · **cấm** invent tracks |
| UNCLEAR-STD-PORT | Design/Dev | Follow STATUS `mfeStdUrl` `:9301` |

---

## 10. Handoff Design

1. Phone 430 · zones PM-* · Android 1-1 · prototype + **reviewUrl**.
2. Chrome parity `/gis/live` · **cấm** Đường/Phố/Fit chips.
3. Overlay: resolve UNCLEAR-OVERLAY-GEOM (empty vs session pins).
4. Copy keys `patrolMap.*` · no hardcode VN.
5. GPS deny UX · toast check-in (no sheet).
6. **Không** implement / e2e ở role này.

---

## Version meta

`skillVersion=2026.09.05.03` · `schemaVersion=1` · `contentHash=sha256:6f74282b807da7f2cc1aa57ac64848cd1d75ff3383c0f432eaad7bea53fff80e` · `rulesVersion=2026.09.25.2` · `writtenAt=2026-09-26T03:32:00.000Z` · `taskId=task_e0463d5f`
