# Review — Findings — web-rmms-gis

| Field | Value |
|-------|-------|
| feature | `web-rmms-gis` |
| title | Bản đồ tài sản |
| role | `review` · `/agent-review` |
| status | **done** |
| changeScope | `new_page` |
| packKind | `list` (phone Map · DES-GRID **WAIVE**) |
| mfeStdUrl | `http://localhost:9301/web-rmms-gis` |
| mfeStdRoute | `/web-rmms-gis` · alias `/gis` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · Mobile.Bff `:5202` · **cấm ERP.*** |
| contentHash | `sha256:6f74282b807da7f2cc1aa57ac64848cd1d75ff3383c0f432eaad7bea53fff80e` |
| hashGate | **skip** (unchanged vs prior roles) |
| autoApprove | ON |
| review_confirm | **done** |
| verdict | **PASS** · Must **0** · Should soft only |
| taskId | `task_31c81e28` |
| prior | data_analy→po→design→sa→team_lead→dev→qa all **confirmed** |
| writtenAt | `2026-09-26T00:12:30.000Z` |
| skillVersion | `2026.09.05.03` |

## Scope

Phone GIS Map P1 — Live GET only · no draw/CRUD · no Step 4b. Spot-check MFE `src/pages/WebRmmsGis/*` + `services/gis/endpoint.ts` vs compact chain + QA S0/S1/QA-20 PASS. **Cấm** e2e/start:std ở role này.

## QUERY

| Check | Result | Notes |
|-------|--------|-------|
| Live geojson layers | **PASS** | `getGeoJson('all'|'incidents'|'tuyen-duong')` + `?search=` debounce |
| Tiles MVT | **PASS** | `…/gis/tiles/{layer}/{z}/{x}/{y}.pbf` via `VITE_MOBILE_API_URL` |
| Layers / basemap-config | **PASS** | `GET gis/layers` toast P1 · basemap-config opt (chips local) |
| Focus | **PASS** | `?focus=` → `assetListEndpoint.fetchById` · marker |
| Write / invent | **PASS** | no POST map · no `gis-map` invent · API Mới **none** |

## SEC

| Check | Result | Notes |
|-------|--------|-------|
| BFF base | **PASS** | Mobile.Bff only (`apiClient` / `VITE_MOBILE_API_URL`) · **cấm** web-bff |
| ERP.* | **PASS** | no ERP.* import/call in feature tree |
| Auth gate | **PASS** | guest → login CTA · tiles `transformRequest` + token headers |
| GPS | **PASS** | `watchPosition` me-dot RO · deny hide · **cấm** fake |
| OSM.org | **PASS** | clip MVT fail-closed · no OSM.org basemap |

## UI-FN

| Zone | Result | Notes |
|------|--------|-------|
| GIS-00…02 shell | **PASS** | back→Hub · title `gisMap.*` / lookupStatic · trail |
| GIS-03/04 | **PASS** | list peer `/web-rmms-asset-list` · layers toast |
| GIS-05 search | **PASS** | Search → geojson reload |
| GIS-06/07 map+chips | **PASS** | MapLibre host · basemap/fit local |
| GIS-08 legend | **PASS** | all/ts/sc/corridor isolate |
| GIS-09 focus/GPS/popup | **PASS** | focus marker · me-dot · popup→detail |
| DES-GRID / Leave | **WAIVE** | phone Map · Leave N/A (QA) |
| Visual vs prototype | **PASS** | QA Aligned · PNG `qa/screens/{S0,S1,QA-20}.png` |

## BE-FN

| Check | Result | Notes |
|-------|--------|-------|
| DOMAIN-MAP | **PASS** | row `web-rmms-gis` → Gis · cite Asset |
| FormMode↔API | **PASS** | GET-only Live · SA/Dev/QA aligned |
| Step 4b / migration | **N/A** | none |
| QA Live VERIFY | **PASS** | layers + geojson/all **200** · canvas + me-dot |

## Findings

### Must (block ship)
- (none)

### Should / soft (non-block · carry)
| id | sev | note |
|----|-----|------|
| F-SOFT-01 | soft | `GAP-QA-E2E-STOCK-PORT` — stock e2e :5101 vs Live :5111 (capture_gis PASS) |
| F-SOFT-02 | soft | layers **sheet** P2 — P1 toast only (by design) |
| F-SOFT-03 | soft | `basemap-config` opt unused chips · lean clip debt |
| F-SOFT-04 | soft | `LOOKUP_HINT_KEYS` Hub peer — cite QA |

### Nice
- (none required)

## review_confirm

**done** (autoApprove ON) — DoR PASS · compact written · STATUS → review **confirmed** · pipeline **done**.

## Full paths

- implement: `D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-gis/implement/web-rmms-gis.md`
- qa: `D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-gis/qa/scenarios.md`
- mfe: `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile/src/pages/WebRmmsGis/`
- STATUS: `D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-gis/STATUS.md`
