# SA — Solution — web-rmms-patrol-map

> Status: **confirmed** · autoApprove ON · task `task_fdf2d091` · 2026-09-26T03:50:00.000Z  
> **Cấm** ERP.* · **cấm** invent `PatrolMapController` / `api/v1/patrol-map` · **cấm** Step 4b / migration ở role SA · **cấm** Write MFE/native · **cấm** POST check-in/tracks P1.

| | |
|--|--|
| Feature | `web-rmms-patrol-map` |
| Title | Bản đồ tuần — ca đang chạy · me-dot · toast check-in |
| Role | `sa` |
| packKind | `list` |
| changeScope | `new_page` |
| formPattern | Mobile Map / full · phone max-width 430 · N/A ERP Modal/Slideout · no master form · no POST check-in/tracks P1 |
| domain | **Patrol** (`patrol`) · cite **Gis** (tiles/basemap) |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` · route `/web-rmms-patrol-map` |
| mfeStdUrl | `http://localhost:9301/web-rmms-patrol-map` |
| nativeRouteCite | SCREENS `/patrol-map` · `/field/map` |
| be | `D:/AI-QLBD/Linm.RMMS.WebService` |
| BFF | Mobile.Bff `http://localhost:5202` · prefix `mobile-bff/api/v1` |
| contentHash | `sha256:6f74282b807da7f2cc1aa57ac64848cd1d75ff3383c0f432eaad7bea53fff80e` |
| skillVersion | `2026.09.05.03` |
| solution_confirm | **approve** (autoApprove) |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-patrol-map/ui/prototype/index.html` |

## 1. Domain / ownership

| Item | Decision |
|------|----------|
| DOMAIN-MAP slug | `web-rmms-patrol-map` → **Patrol** / `patrol` |
| Rationale | Live `GET patrol/sessions` thuộc Patrol · basemap MVT = cite Gis `gis/tiles` — **không** tạo domain Map mới |
| Cite peers | Home `/patrol-map` · Field `/field/map` · Supervise Bản đồ · chrome `/gis/live` · check-in sheet peer |
| API folder | **reuse** `PatrolSessionsController` + Mobile.Bff GisTiles → MapService · **no new** controller/entity |
| **Cấm** | invent `PatrolMapController` · `api/v1/patrol-map` · Route mobile-bff trên web-bff · ERP.* · Web BFF base từ Mobile MFE · POST tracks/check-ins từ map P1 · demo OMS geometry SSOT |

**DOMAIN-MAP row (applied):**

| Feature slug | Domain Pascal | kebab |
|--------------|---------------|-------|
| `web-rmms-patrol-map` | Patrol | `patrol` · Live `GET sessions` + cite Gis tiles · MFE `Linm.Web.RMMS.Mobile` `/web-rmms-patrol-map` · **cấm** invent PatrolMapController · **cấm** POST tracks/check-in P1 |

→ resolves **UNCLEAR-DOMAIN-MAP-PATROL-MAP**.

## 2. FormMode ↔ API

Map **không** Modal/Slideout master form. Modes = RO map browse · local chrome (basemap/legend) · GPS me-dot browser-only · toast check-in (no write).

| Mode / zone | UI | API | Write | Notes |
|-------------|----|-----|-------|-------|
| PM-00 chrome | page shell | — | — | phone 430 |
| PM-01 navBack | Button/Nav | — | nav Home/Field/Supervise | peer entry |
| PM-02 title | Text RO | — | — | `patrolMap.title` / useFormOptions |
| PM-03 trailingCheckin | Button | — | toast only | **cấm** POST check-ins |
| PM-04 mapHost | Map | `GET gis/tiles/…` | — | MVT · **cấm** OSM.org |
| PM-05 basemap×2 | Chip | local paint | local | Tiêu chuẩn / Vệ tinh |
| PM-05b locate | Button | Geolocation | — | deny → disable |
| PM-06 legend×4 | Chip isolate | client layers | — | track geom **empty** P1 |
| PM-07 nextCard | Card RO | `GET patrol/sessions` filter Đang tuần | — | bind `Route` text |
| PM-07b next-pin | MapMarker | — | — | **N/A P1** — DTO không có lat/lng |
| PM-08 gpsMe+popup | Marker/Popup | Geolocation | — | deny hide me · **cấm** fake |
| Auth gate | staff | JWT (shell) | guest → login peer | shell owns |

### Live endpoints (HARD — from real-data §B + patrol-map-bff)

| Method | BFF path (client) | Downstream | Response bind | Status |
|--------|-------------------|------------|----------------|--------|
| GET | `mobile-bff/api/v1/patrol/sessions` | PatrolSessionsController | next-card · filter Status Đang tuần · `Route` | **Live** |
| GET | `mobile-bff/api/v1/gis/tiles/{layer}/{z}/{x}/{y}.pbf` | Gis/MapService via Bff | basemap MVT | **Live** |

**DTO list item (`PatrolSessionDto`) — bind P1:**

| Field | Use on map |
|-------|------------|
| `Id` · `Code` · `UserName` · `PatrolType` · `CheckInCount` · `CoveragePercent` · `Status` | filter / optional meta |
| `Route` | next-card text (điểm tiếp theo) |
| lat / lng / nextPin / trackGeom | **không có** trên Live DTO → **cấm invent** · empty track overlay · **no next-pin marker** |

- Client base: `http://localhost:5202` + `mobile-bff/api/v1` — **không** gọi `web-bff` từ Mobile MFE.
- **API Mới:** none · **migration:** none · **entity mới:** none · **POST/PUT/DELETE map:** none P1.
- P2 (out): `POST …/check-ins` · `POST …/tracks` · `GET …/coverage` — peer / Step 4b later · **cấm** gọi từ map P1.
- Labels: `useFormOptions()` / LinmCopy `patrolMap.*` · **cấm** hardcode VN · **cấm** Đường/Phố/Fit.
- GPS: `navigator.geolocation` me-dot only · deny hide me / disable locate · map vẫn mở · **cấm** fake.

### Overlay geom (UNCLEAR-OVERLAY-GEOM — SA confirm)

| Layer | P1 decision |
|-------|-------------|
| Track / done / coverage polylines | **empty** — no Live tracks/coverage API · legend isolate client-only · **cấm** OMS/demo-json SSOT |
| Next-pin marker | **omit** — `PatrolSessionDto` không expose coords · next-card = `Route` text only |
| Me-dot | browser Geolocation only |

→ resolves **UNCLEAR-OVERLAY-GEOM**.

## 3. BFF vs API

| Layer | Role for Map |
|-------|--------------|
| Mobile.Bff `:5202` | sole FE entry · proxy `patrol/sessions` · GisTiles→MapService · auth rewrite |
| RMMS.Service.Api | existing PatrolSessionsController — **no new** PatrolMap controller |
| web-bff | cite only · **not** Mobile client base |

Fail: 503/network → toast + retry · map trống vẫn mở · sessions empty → next-card empty — **cấm** mock SSOT · **cấm** `window.alert` · **cấm** invent `api/v1/patrol-map`.

## 4. Entity / migration

| Item | Decision |
|------|----------|
| Tables | none (reuse Patrol sessions + Gis tiles) |
| EF migration | **skip** (no schema) |
| Step 4b | **skip** at SA · Dev only if Live gap (not expected P1) |

## 5. FE surface (SA contract — Dev implements)

| Zone | Contract |
|------|----------|
| PM-00…08 | Map owns · phone 430 · Android icon/layout 1-1 · **cấm** sửa iOS/Android native |
| REMOVED | Fit/Đường/Phố · me* · feedback · cam-view · check-in sheet · invent tracks |
| GPS | me-dot RO browser · no DB write |
| DES-GRID / LinErpListFilterBar | **N/A** phone Map |
| Route | `mfeStdRoute=/web-rmms-patrol-map` · native cite `/patrol-map` · `/field/map` |
| Entry | Home · Field · Supervise Bản đồ |

## 6. Risks / open

| ID | Status |
|----|--------|
| UNCLEAR-DOMAIN-MAP-PATROL-MAP | **resolved** — DOMAIN-MAP row added |
| UNCLEAR-OVERLAY-GEOM | **resolved** — empty tracks · no next-pin (DTO no coords) · Route text |
| UNCLEAR-STD-PORT | **resolved** — follow STATUS mfeStdUrl `:9301` |

## 7. Handoff

| Next | Need |
|------|------|
| team_lead | Tasks: Map page · tiles · basemap/legend · sessions→Route card · GPS me · toast check-in · entry routes · no POST · no tracks invent |
| devSlash | `/agent-dev` |
| qa | sessions empty/error · GPS deny · toast no POST · phone 430 · no web-bff · E2E queued `/agent-qa*` |

## Version meta

`skillVersion=2026.09.05.03` · `contentHash=sha256:6f74282b807da7f2cc1aa57ac64848cd1d75ff3383c0f432eaad7bea53fff80e` · `solution_confirm=approve` · `writtenAt=2026-09-26T03:50:00.000Z`
