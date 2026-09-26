# Design — web-rmms-patrol-map

| Field | Value |
|-------|-------|
| feature | `web-rmms-patrol-map` |
| title | Bản đồ tuần — ca đang chạy · me-dot · toast check-in |
| this role | `design` · `/agent-design` |
| status | `confirmed` (autoApprove=ON) |
| design_confirm | **approve** (`task_5013ac7a`) |
| changeScope | `new_page` |
| packKind | **`list`** (PO · UI = **phone Map** · **≠** Kind B desktop) |
| lane | `web` |
| stack | `web_mfe_phone` · `Linm.Web.RMMS.Mobile` · `max-width: 430px` |
| formPattern | Mobile **Map / full** · **không** ERP Modal/Slideout Kind B · **không** master form · **không** POST check-in/tracks P1 |
| DES-GRID / LinErpListFilterBar | **N/A** — phone Map · **cấm** clone filter bar |
| Report AC / DES-RPT | **N/A** |
| shared_grid_example | **N/A** (phone Map) |
| real_view_parity | **v1** |
| peerStdUrl | `http://localhost:9301/web-rmms-patrol-map` |
| mfeStdUrl | `http://localhost:9301/web-rmms-patrol-map` |
| mfeStdRoute | `/web-rmms-patrol-map` |
| nativeRouteCite | SCREENS `/patrol-map` · `/field/map` · Supervise Bản đồ |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-patrol-map/ui/prototype/index.html` |
| demo | **N/A** · hash skip · **cấm** re-scan (**GAP-DES-DEMO-RESCAN-01**) |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · Patrol (+cite Gis tiles) · Mobile.Bff `:5202` · **cấm ERP.*** |
| controlHint | `specs/_data-analy/features/web-rmms-patrol-map-control-hint.md` |
| realData | `specs/_data-analy/features/web-rmms-patrol-map-real-data.md` · §A+§B PASS |
| prior | PO `confirmed` · `handoff/po-compact.md` · contentHash `sha256:6f74282b807da7f2cc1aa57ac64848cd1d75ff3383c0f432eaad7bea53fff80e` |
| autoApprove | **ON** |
| e2eQa | ON queued `/agent-qa*` · **cấm** e2e / `yarn start:std` ở Design |
| `devSlash` | `/agent-dev` |
| updatedAt | `2026-09-26T03:40:00.000Z` |
| taskId | `task_5013ac7a` |
| skillId | `agent-design` |
| skillVersion | `2026.09.05.03` |
| schemaVersion | `1` |
| workflowVersion | `2026.09.19.02` |
| rulesVersion | `2026.09.25.2` |
| versionGate | `ok` |
| contentHash | `sha256:6f74282b807da7f2cc1aa57ac64848cd1d75ff3383c0f432eaad7bea53fff80e` |

**Cấm:** Dev/BE trước confirm (đã autoApprove) · ERP.* · iOS/Android native dual · Kind B DES-GRID · `LinErpListFilterBar` · invent `PatrolMapController` / POST tracks P1 · Web BFF base client · Fit/Đường/Phố/Toàn tuyến chips · fake GPS · hardcode label ngoài `useFormOptions` · native `alert`/`confirm` · re-scan demo · `yarn build` / e2e / start:std · Leaflet-as-app / OSM.org world · check-in sheet POST · me* / feedback / cam-view / Field deep / journal b–e.

## 0. Context / Demo

| ID | Path | Notes |
|----|------|-------|
| CTX-01 | `docs/context/features/web-rmms-patrol-map.md` | feature Map |
| CTX-02 | `docs/plan/web-rmms-mobile/SCREENS.md` | `/patrol-map` · `/field/map` |
| CTX-03 | `docs/context/features/patrol-map.md` | chrome peer `/gis/live` · DES-MOB-PAT-MAP cite |
| CTX-04 | `docs/context/features/web-rmms-gis.md` | basemap chrome peer |
| DEM | — | **N/A** · hash skip |
| DA-01 / DA-02 | `_data-analy/features/web-rmms-patrol-map-{control-hint,real-data}.md` | inventory + §B |
| PO | `po/requirement.md` | DoD · PM-00…08 |
| tokens | `docs/mobile-tokens.json` | primary `#0C84C0` · phone 430 |

## 1. Pattern & ownership

| | |
|--|--|
| Frame | Phone **430px** · tokens primary `#0C84C0` · label **13** · field **≥16** · Android icon/layout **1-1** |
| Map owns | **PM-00…08** · tiles MVT · basemap Tiêu chuẩn\|Vệ tinh · locate · legend isolate · next-card RO · GPS me-dot · locate popup · toast check-in |
| Peer owns | Home `/patrol-map` · Field `/field/map` · Supervise Bản đồ · check-in sheet · tracks P2 · journal/kết ca (b–e) · shell |
| DES-LEAVE | **N/A** — Map không form dirty |
| Out | `/me*` · feedback · cam-view · Field 2-door deep · invent tracks/coverage/PatrolMapController · draw GIS · Fit chips · ERP.* |

## 2. Screens / zones

| Zone | Route | Surface | Wire |
|------|-------|---------|------|
| **PM-00** | phone | Frame | max-width 430 · center desktop review · Android 1-1 |
| **PM-01** | top bar | Header | navBack → Home/Field/Supervise · title `patrolMap.title` · trailing check-in → toast P1 |
| **PM-02** | map host | Map | MVT `gis/tiles/…` · overlay P1 chốt dưới · **cấm** OSM.org |
| **PM-03** | basemap bar | Chips+Button | Tiêu chuẩn · Vệ tinh (local) · locate Geolocation · **cấm** Fit/Đường/Phố |
| **PM-04** | legend | Chips | isolate all / track / done / next · client visibility |
| **PM-05** | next card | Card RO | `Route` từ `GET patrol/sessions` filter `Đang tuần` · empty OK · CTA toast |
| **PM-06** | GPS me-dot | MapMarker | Geolocation · deny → hide · map mở · **cấm** fake / POST |
| **PM-07** | locate popup | Popup | Tên: Vị trí của bạn · GPS: lat/lng · cite map-inspect-popup |
| **PM-08** | entry | Nav in | Home · Field · Supervise peers |

### Overlay geom (chốt UNCLEAR-OVERLAY-GEOM)

| Rule | Design |
|------|--------|
| Tracks polyline | **P1 empty** · **cấm** invent / POST tracks · legend Hành trình = UI isolate only |
| Done pins | **P1 absent** trừ session Live expose (không invent check-ins API trên map) |
| Next pin | Khi active `Đang tuần` + có coords trên session DTO → **1 next pin**; không coords → **card Route text only** · map empty overlay |
| Empty session | next-card empty · no pins · map + tiles vẫn mở |
| Demo OMS | **cấm** bind geometry SSOT |

### IA

```
(auth staff) → PM-00 + PM-01 back/title/checkin-toast
  + PM-02 map (tiles) + overlay (empty | next-pin)
  + PM-03 basemap + locate
  + PM-04 legend isolate
  + PM-05 next-card (Route | empty) + CTA toast
  + PM-06 me-dot (grant) | hide (deny)
  + PM-07 locate popup on locate tap
(guest) → login peer · không silent empty map shell
Leave: Home · Field · Supervise only · DES-LEAVE N/A
Entry PM-08: Home /patrol-map · Field /field/map · Supervise Bản đồ
```

## 3. Field inventory (Control = controlHint)

| uiField | screen | controlHint | Required | Bind / notes |
|---------|--------|-------------|----------|--------------|
| phoneFrame | PM-00 | Layout | * | max-width 430 · center review |
| navBack | PM-01 | Button/Nav | * | → entry peers · `patrolMap.nav.back` |
| title | PM-01 | Text RO | * | `patrolMap.title` · Ca đang chạy |
| trailingCheckin | PM-01 | Button | * | toast P1 · **cấm** sheet/POST |
| mapHost | PM-02 | Map | * | MVT tiles · overlay chốt §2 |
| basemapStd | PM-03 | Chip | * | local · **cấm** Đường/Phố EN |
| basemapSat | PM-03 | Chip | * | local paint |
| locateMe | PM-03 | Button | * | Geolocation · deny → disable + toast · **cấm** alert |
| legendAll | PM-04 | Chip | * | isolate all |
| legendTrack | PM-04 | Chip | * | hành trình · P1 geom empty |
| legendDone | PM-04 | Chip | * | đã ghi điểm tuần · P1 absent default |
| legendNext | PM-04 | Chip | * | điểm kế tiếp |
| nextCard | PM-05 | Card RO | * | GET sessions · Route · empty OK |
| nextCheckin | PM-05 | Button | * | toast P1 same trailing |
| gpsMe | PM-06 | MapMarker | * | live fix · **cấm** fake 0,0 |
| locatePopup | PM-07 | Popup | * | Vị trí của bạn · GPS |

**Labels:** `useFormOptions()` / copy keys `patrolMap.*` — prototype hiện nhãn nghiệp vụ VN để review; Dev wire key.  
**GPS:** me-dot + locate · deny → hide me / disable locate · map mở · **cấm** fake · **cấm** POST.  
**REMOVED:** me* / feedback / cam-view / Fit / invent tracks / check-in sheet.

## 4. Prototype (REQUIRED)

| | |
|--|--|
| Artifact | `ui/prototype/index.html` |
| Zones | PM-00 · PM-01 · PM-02 · PM-03 · PM-04 · PM-05 · PM-06 · PM-07 · PM-08 (entry cite) |
| Form | **none** master · Map chrome only |
| Grid/filter desktop | **N/A** |
| SSOT | `design-prototype-review` · `design-real-view-parity` · control-hint · mobile-tokens |
| **reviewUrl** | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-patrol-map/ui/prototype/index.html` |
| **peerStdUrl** | `http://localhost:9301/web-rmms-patrol-map` |
| **real_view_parity** | `v1` |

### Wire

```
PM-00: phoneFrame 430
PM-01: [‹ back] title Ca đang chạy [Ghi điểm tuần → toast]
PM-02: map host (MVT cite) · static proto (cấm OSM-as-app)
PM-03: [Tiêu chuẩn] [Vệ tinh] [Vị trí của tôi] · cấm Fit
PM-04: [Tất cả] [Hành trình] [Đã ghi điểm tuần] [Điểm kế tiếp]
PM-05: next-card Route · empty · CTA toast
PM-06: me-dot · board GPS deny ẩn
PM-07: popup Vị trí của bạn · GPS lat/lng
PM-08: entry peers (board back toast)
Board: Live+GPS | GPS deny | Empty session | Check-in toast | Tiles error | Sessions error
```

## 5. API map (cite real-data §B)

| Action | API |
|--------|-----|
| Active session / Route | `GET mobile-bff/api/v1/patrol/sessions` · filter client `Đang tuần` |
| Tiles | `GET mobile-bff/api/v1/gis/tiles/{layer}/{z}/{x}/{y}.pbf` |
| Basemap chips | local · no API |
| Legend isolate | client · no API |
| GPS / locate | browser Geolocation · no DB write |
| Check-in CTA | toast only · **cấm** POST P1 |
| Nav | Home · Field · Supervise peers |

**BFF:** Mobile.Bff `:5202` · `mobile-bff/api/v1` · **cấm** Web BFF base client · **cấm ERP.*** · **cấm** invent `PatrolMapController` / tracks P1.  
Empty/error sessions → next-card empty + toast · map mở · **cấm** `window.alert`.  
Tiles blank/error → retry toast · **cấm** OSM.org.

## 6. DES checklist

| ID | Result |
|----|--------|
| DES-A zones PM-* | **PASS** |
| DES-B control = controlHint | **PASS** |
| DES-C prototype + reviewUrl | **PASS** |
| DES-D Leave dirty | **N/A** (no Map form) |
| DES-GRID / DES-RPT | **N/A** phone Map |
| real_view_parity | **v1** |
| Android 1-1 / no me* / no Fit / toast check-in | **PASS** |
| UNCLEAR-OVERLAY-GEOM | **chốt** Design §2 · SA confirm DTO coords |
| PO DoD cite | **PASS** (Design surface) |

## 7. UNCLEAR (carry)

| id | Action |
|----|--------|
| UNCLEAR-DOMAIN-MAP-PATROL-MAP | SA thêm DOMAIN-MAP row `web-rmms-patrol-map` · Patrol (+ cite Gis) · MFE `/web-rmms-patrol-map` |
| UNCLEAR-OVERLAY-GEOM | **Design chốt:** P1 empty tracks · next-pin only nếu session Live có coords · else card Route text · **cấm** invent · SA confirm fields |
| UNCLEAR-STD-PORT | **follow STATUS** `mfeStdUrl` `:9301/web-rmms-patrol-map` |

## 8. Handoff

| Role | Need |
|------|------|
| SA | DOMAIN-MAP row · Mobile.Bff sessions+tiles · confirm overlay fields · **cấm** invent PatrolMapController |
| TL | Tasks map scaffold + entry PM-08 |
| Dev | Mobile MFE map only · `VITE_MOBILE_API_URL` `:5202` · toast check-in · GPS real |
| QA | empty/error sessions · GPS deny · toast no POST · phone 430 · no web-bff · no Fit |

| Field | Value |
|-------|-------|
| phase_from / phase_to | design **confirmed** → sa pending |
| Next slash | `/agent-sa` |
| Chain this turn | **không** (roleOnly=design · GAP-PKT-ROLE-01) |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-design |
| skillVersion | 2026.09.05.03 |
| schemaVersion | 1 |
| workflowVersion | 2026.09.19.02 |
| rulesVersion | 2026.09.25.2 |
| generatedAt | 2026-09-26T03:40:00.000Z |
| versionGate | ok |
| contentHash | sha256:6f74282b807da7f2cc1aa57ac64848cd1d75ff3383c0f432eaad7bea53fff80e |

---
<!-- Version meta: skillId=agent-design skillVersion=2026.09.05.03 schemaVersion=1 workflowVersion=2026.09.19.02 rulesVersion=2026.09.25.2 versionGate=ok -->
