# Team lead — Task — web-rmms-gis

> Status: **confirmed** · autoApprove ON · task `task_b94648b6` · 2026-09-25T17:00:00.000Z  
> **Cấm** implement code tại role này · **cấm** e2e / yarn build / start:std · Step 4b skip.

| | |
|--|--|
| Feature | `web-rmms-gis` |
| Title | Bản đồ tài sản (Mobile GIS Map) |
| Role | `team_lead` |
| packKind | `list` |
| changeScope | `new_page` |
| formPattern | Mobile Map / full · phone max-width 430 · N/A ERP Modal/Slideout · no master form · no draw/CRUD P1 |
| domain | **Gis** (`gis`) · cite **Asset** focus GetById |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| mfeStdRoute | `/web-rmms-gis` |
| mfeStdUrl | `http://localhost:9301/web-rmms-gis` |
| nativeRouteCite | SCREENS `/gis` (alias · STATUS URL canonical) |
| be | `D:/AI-QLBD/Linm.RMMS.WebService` · Mobile.Bff `:5202` `mobile-bff/api/v1` |
| demo | **N/A** |
| contentHash | `sha256:6f74282b807da7f2cc1aa57ac64848cd1d75ff3383c0f432eaad7bea53fff80e` |
| skillVersion | `2026.09.05.03` |
| route_confirm | **approve** (PO/Design/SA · STATUS `/web-rmms-gis` · new_page STD) |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-gis/ui/prototype/index.html` |
| prior | data_analy · po · design · sa = **confirmed** |

## 0. changeScope / gates

| Gate | Result |
|------|--------|
| control-hint | `specs/_data-analy/features/web-rmms-gis-control-hint.md` **exists** |
| real-data | `specs/_data-analy/features/web-rmms-gis-real-data.md` **exists** · §A+§B PASS |
| changeScope | `new_page` · full pipeline (không data-analy-only) |
| DES-GRID / LinErpListFilterBar | **N/A** phone Map |
| Step 4b / migration / API Mới / entity | **skip** · none (SA) |
| ERP.* | **cấm** |
| invent `api/v1/gis-map` / write / POST map | **cấm** |
| web-bff client base | **cấm** · chỉ Mobile.Bff |
| GPS | `navigator.geolocation` me-dot RO · deny → hide me · map vẫn mở · **cấm** fake |
| labels | `useFormOptions()` · `gisMap.*` · **cấm** hardcode VN |
| copy | Android icon/layout 1-1 · **cấm** sửa iOS/Android native |

## 1. Scope (DoD)

| In | Out |
|----|-----|
| Map GIS-00…09 · phone ≤430 | me* / feedback / cam-view / draw / heatmap / Twin |
| Live GET gis geojson/tiles/layers/basemap-config | invent API / gis-map controller |
| Focus GET `asset/road-assets/{id}` · `?focus=` | Asset write / PUT |
| Legend isolate all/ts/sc/corridor · search · basemap+fit local | Field doors b–e (journal/kết ca/tồn tại/tần suất) |
| Layers toast P1 (GET gis/layers) · sheet P2 | hardcode VN · web-bff base |
| GPS me-dot RO · popup → detail | POST từ map P1 · fake GPS |
| route `/web-rmms-gis` (+ alias `/gis` nếu shell) | DES-GRID / ERP Modal |

## 2. Screens / zones

| Zone | Control | Bind / nav |
|------|---------|------------|
| GIS-00 | page chrome | phone 430 · Android 1-1 |
| GIS-01 | navBack Button/Nav | → Hub |
| GIS-02 | title Text RO | `gisMap.title` · useFormOptions |
| GIS-03 | trailingList Button/Nav | → `/asset/list` (peer) |
| GIS-04 | trailingLayers Button | GET `gis/layers` · toast P1 · sheet P2 |
| GIS-05 | search Search | geojson `?search=` |
| GIS-06 | mapHost Map | tiles MVT + overlays |
| GIS-07 | basemap/fit chips | local · basemap-config opt |
| GIS-08 | legend chips | all / ts / sc / corridor isolate |
| GIS-09 | gpsMe · focus · popup | me-dot · `?focus=` marker · popup→detail |

## 3. Live API (HARD)

| Method | Client path | Bind |
|--------|-------------|------|
| GET | `mobile-bff/api/v1/gis/geojson/all` | overlays · search |
| GET | `mobile-bff/api/v1/gis/geojson/incidents` | incident layer |
| GET | `mobile-bff/api/v1/gis/geojson/tuyen-duong` | corridor |
| GET | `mobile-bff/api/v1/gis/tiles/{z}/{x}/{y}` (MVT) | basemap tiles |
| GET | `mobile-bff/api/v1/gis/layers` | layers toast P1 |
| GET | `mobile-bff/api/v1/gis/basemap-config` | basemap chips opt |
| GET | `mobile-bff/api/v1/asset/road-assets/{id}` | focus GetById |

- Base: `http://localhost:5202` + `mobile-bff/api/v1`
- Fail 503/network → toast + retry · map shell vẫn mở
- Write API: **none** · **cấm** invent · **cấm** POST map P1
- GAP SEARCH/LAYER/CORRIDOR/SC/FOCUS: cite gis-map CTX · Live reuse · **no invent**
- **Cấm** web-bff · **cấm** ERP.*

## 4. Task board (T-*)

| ID | Title | Owner | Deps | AC (trace) | Status |
|----|-------|-------|------|------------|--------|
| T-01 | Route + map shell GIS-00…02 · mfeStdRoute `/web-rmms-gis` · phone 430 · REMOVED me*/feedback/cam-view/draw · labels `gisMap.*` | `/agent-dev` | — | PO chrome · design GIS-00/01/02 · SA §route | pending |
| T-02 | Map host GIS-06 · Live tiles MVT + basemap-config · basemap/fit chips GIS-07 local | `/agent-dev` | T-01 | real-data §B · SA tiles/basemap · PO Map DoD | pending |
| T-03 | GeoJSON overlays all/incidents/tuyen-duong · legend isolate GIS-08 · search GIS-05 `?search=` | `/agent-dev` | T-02 | SA geojson · GAP SEARCH/CORRIDOR/SC cite CTX · design legend | pending |
| T-04 | trailingList GIS-03 → asset/list · trailingLayers GIS-04 GET layers toast P1 · popup→detail | `/agent-dev` | T-03 | PO layers/list · design trailing · GAP LAYER-01 | pending |
| T-05 | Focus `?focus=` GET road-assets/{id} · GPS me-dot RO GIS-09 · deny hide me · navBack Hub · auth · Android 1-1 · quality gates | `/agent-dev` | T-03,T-04 | PO GPS/focus · SA Asset cite · GAP FOCUS-01 · list-form quality | pending |
| T-06 | QA scenarios + E2E queued · map Live · search · legend · focus · GPS deny · layers toast · phone 430 · mfeStdUrl | `/agent-qa` | T-05 | e2eQa ON · scenarios.md | pending |
| T-07 | Review findings vs design/prototype · route_confirm STATUS | `/agent-review` | T-06 | design reviewUrl · STATUS | pending |

### Dev assign (agent-dev-assign)

| Field | Value |
|-------|-------|
| feature | `web-rmms-gis` |
| packKind | `list` |
| slash | `/agent-dev` |
| mfe cwd | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| implement artifact | `specs/web-rmms-gis/implement/web-rmms-gis.md` |
| BE align | skip until Dev · Step 4b none expected |
| cấm | ERP.* · invent gis-map/write/POST map · fake GPS · hardcode VN · web-bff base · e2e ở Dev (QA owns) · native iOS/Android edit |

## 5. route_confirm

| Item | Value |
|------|-------|
| mfeStdRoute | `/web-rmms-gis` |
| mfeStdUrl | `http://localhost:9301/web-rmms-gis` |
| native cite | SCREENS `/gis` |
| decision | **approve** · PO/Design/SA · new_page · ghi STATUS |
| shell alias | `/gis` nếu shell map native SCREENS |
| UNCLEAR-STD-ROUTE | **resolved** · follow STATUS URL |

## 6. Risks / carry

| ID | Status | Dev note |
|----|--------|----------|
| UNCLEAR-DOMAIN-MAP-GIS | **resolved** SA | DOMAIN-MAP row `web-rmms-gis` · Gis + Asset cite |
| UNCLEAR-STD-ROUTE | **resolved** | `/web-rmms-gis` canonical · alias `/gis` |
| GAP-MOB-GIS-SEARCH-01 | open carry | cite gis-map CTX · Live `?search=` · no invent |
| GAP-MOB-GIS-LAYER-01 | open carry | GET gis/layers toast P1 · sheet P2 · no invent |
| GAP-MOB-GIS-CORRIDOR-LEGEND-01 | open carry | tuyen-duong + legend isolate · no invent |
| GAP-MOB-GIS-SC-01 | open carry | cite CTX · Live reuse |
| GAP-MOB-GIS-FOCUS-01 | open carry | GetById Asset · `?focus=` · no invent |

## 7. DoR (team_lead PASS)

- [x] changeScope=`new_page` · control-hint + real-data exist
- [x] T-01…T-07 đủ · Dev assign · route_confirm approve
- [x] Live API table · cấm ERP.* / invent / web-bff
- [x] compact handoff ≤5KB · STATUS updated · roles sau = pending
- [x] **cấm** code implement · **cấm** e2e / start:std tại role này

## Full paths

- task: `D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-gis/task/web-rmms-gis.md`
- compact: `D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-gis/handoff/team_lead-compact.md`
- sa compact: `D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-gis/handoff/sa-compact.md`
- design: `D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-gis/ui/design.md`
- STATUS: `D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-gis/STATUS.md`
