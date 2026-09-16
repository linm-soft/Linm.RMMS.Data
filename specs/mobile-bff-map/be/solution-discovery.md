# SA — Solution — mobile-bff-map (Mobile.Bff MapService tile proxy)

| Field | Value |
|-------|-------|
| feature | `mobile-bff-map` |
| title | [Mobile] Mobile.Bff MapService · TileUrl |
| this role | `sa` · `/agent-sa-mobile` |
| status | `confirmed` |
| solution_confirm | **approve** (`autoApprove=ON` · `task_825b8a3d`) |
| changeScope | `edit_page` |
| packKind | **`map`** |
| stack | `native_dual` · Wave 2 `mobile_bff` → Wave 3 `mobile` |
| Feature Kind | **map** · peer TileUrl note `DES-MOB-TILEURL-NOTE` · **không** `#sc-*` mới · **cấm** Kind A–G web / invent tab |
| thisAction | **BFF MVT tile proxy + native TileUrl** only · **cấm** re-own gis-map / patrol-map chrome (`GAP-MOB-ACT-01/02`) |
| domain | **MapService** clipped MVT + **RMMS Gis** overlay catch-all · **cấm** invent `api/v1/map-service/*` |
| BackendRoot | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.WebService` · **cấm ERP.*** |
| ios | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.iOS` |
| android | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Android` |
| bff | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Bff` · `:5202` · prefix `mobile-bff/api/v1` |
| mapService | `Linm.Platform.MapService` `:5021` · app **không** biết |
| prior · design | **confirmed** · `ui/design.md` · dual prototype `#zone-tileurl-note` · `task_d741af34` |
| prior · po | **confirmed** · `po/requirement.md` · `task_f45d7dcb` |
| prior · data_analy | **confirmed** · `_data-analy/mobile-bff-map-*.md` · contentHash `sha256:b04a50005f77e99fc2c564e39ac3a438cce8742996899ef2aaa47b698f7e0131` · bffContentHash `sha256:eb9222c7212ddd10633f4d2cb920f7eb02f7e37a64a86c6d3e2ba1c31f302af6` |
| autoApprove | **ON** |
| e2eQa | ON queued QA · **cấm** e2e / `yarn start:std` / `yarn build` ở role SA |
| versionGate | `ok` · rules `2026.09.12.1` · skill `agent-sa-mobile` · analy/po/design hash khớp |
| taskId | `task_825b8a3d` |
| confirmedBy | agent autoApprove · `task_825b8a3d` |
| updatedAt | `2026-09-12T06:52:00.000Z` |

**Cấm:** invent `api/v1/map-service/*` · `AddLinmMapServiceBffControllers` · app gọi `:5021` · DbContext / `{MapDb}` trên Mobile.Bff · fork DTO · ERP.* · `mfeStdUrl` · Write MFE/native ở SA · Step 4b / migration / e2e · ship TileUrl CDN khi BFF tile live (`GAP-MAP-OSM-CDN-01`) · `localhost` / LAN trong store listing (`GAP-SA-STORE-01`) · claim iPad family `1` · parent JSON inventory · re-scan demo.

Standards: bff-api-structure · no-parent-json-field · ios networking · android api-client · offline-sync · OMS R1–R11 (R2 HARD TileUrl BFF) · PrivacyInfo / Play Data safety.

---

## Architecture (repo SSOT)

| Layer | Choice |
|-------|--------|
| BackendRoot | `Linm.RMMS.WebService` · `be_repo_confirm=approve` |
| BFF host | `Linm.RMMS.Mobile.Bff` `:5202` · **một** host app |
| Tile path NEW | `GET mobile-bff/api/v1/gis/tiles/{layer}/{z}/{x}/{y}.pbf` → MapService proxy (parity Web `GisBffController.GetTiles`) |
| Overlay KEEP | `gis/clusters` · `gis/geojson/*` · `gis/*` ≠ tiles → `MobileApiProxyController` → `ApiBase` `:5101` RMMS `{AssetDb}` |
| Package | NuGet `Linm.Platform.MapService.Bff` · `AddLinmMapServiceBff` · **cấm** ProjectReference · **cấm** Controllers extension |
| Config | `ServiceEndpoints:MapService` = `http://localhost:5021` (Docker `host.docker.internal:5021`) · **thiếu hôm nay** → T-MAP-BFF-01 |
| App TileUrl | `{BffBase}/mobile-bff/api/v1/gis/tiles/{layer}/{z}/{x}/{y}.pbf` · **cấm** OSM CDN / MapService direct |
| Persist BE mới | **không** — proxy only · Step 4b **N/A** |
| Sibling consumers | peer `gis-map` / `patrol-map` · **chỉ** đổi TileUrl · **cấm** re-own map chrome |

### Route decision

| | Choice |
|--|--------|
| Slug | `mobile-bff-map` → **map** · owner `DES-MOB-TILEURL-NOTE` |
| App prefix | `mobile-bff/api/v1` · path **không** lặp prefix |
| App path tiles | `GET gis/tiles/{layer}/{z}/{x}/{y}.pbf` |
| Downstream tiles | `{MapService}/api/v1/gis/tiles/…` via `_mapProxy.ForwardStreamAsync` |
| Downstream non-tile | RMMS `api/v1/gis/*` via catch-all |
| Web parity | `GisBffController` `[HttpGet("tiles/…")]` L66–73 · mobile route `mobile-bff` (không web-bff) |
| Step 4b | **N/A** · **cấm** `/database-migration` / invent endpoint ngoài table |
| Rationale | Analy BFF table + Design zone TileUrl · catch-all hôm nay **nuốt** tiles → cần dedicated GetTiles trước catch-all |

---

## SSOT / anti-duplicate

| Concern | Package / rule | Note |
|---------|----------------|------|
| Tile HTTP | MapService.Bff proxy + dedicated action | **cấm** `AddLinmMapServiceBffControllers` (duplicate `gis`) |
| Non-tile HTTP | `MobileApiProxyController` catch-all | **giữ** clusters/geojson/layers/drawings/basemap-config |
| Web pattern | `LINM.RMMS.Gis.Bff/Controllers/GisBffController.cs` GetTiles | same ForwardStream · guest basemap / JWT overlay |
| App HTTP | ApiClient / Retrofit base = `{Bff}/mobile-bff/api/v1` | **cấm** View→raw URLSession/OkHttp |
| Persist | no-parent-json-field | **không** inventory JSON · stream MVT only |
| OMS | R2 TileUrl = BFF · **cấm** OSM.org CDN tile URL | `GAP-MAP-OSM-CDN-01` |

---

## Implement gates (confirm)

| Gate | Decision | Endpoints / surfaces | Note |
|------|----------|----------------------|------|
| TZ | **tz_na** | MVT stream · **không** DATE filter form | header `X-Timezone` interceptor chung nếu có |
| XCO | **xco_na** | guest basemap + tenant overlay JWT · **không** cross-company UI | Bearer + `X-Company-Id` keep |
| SHARE | **share_na** | **không** shared-table mới · reuse MapService + RMMS Gis | **cấm** assume new table |
| Offline | **blank ok** | tile fail → blank / toast peer · **không** OfflineQueue tile | map peer vẫn mở |
| GPS | **n/a** | slug không device GPS | peer locate giữ owner |
| Camera | **n/a** | — | |
| Push | **n/a** | — | |
| Store | **N/A** signup | **cấm** `localhost` / LAN listing · family `1` **cấm** iPad claim | GAP-SA-STORE-01 |

AskQuestion (autoApprove=ON · không chờ board): `be_repo_confirm=approve` · `sa_tz_gate=tz_na` · `sa_xco_gate=xco_na` · `sa_shared_table=share_na` · `solution_confirm=approve` · `version_mismatch_action=recheck_new` · `2026-09-12T06:52:00.000Z`.

---

## Persist gate (no-parent-json-field)

| | |
|--|--|
| Parent JSON string inventory | **none** |
| Child tables this pack | **n/a** |
| API shape | `application/vnd.mapbox-vector-tile` stream · RMMS GeoJSON keep |
| Migration | **không** `Schema_*` · **không** `/database-migration` |
| T-BE-MIG | **n/a** |

---

## Live vs delta

| Surface | Live today | SA chốt |
|---------|------------|---------|
| Web `GET web-bff/…/gis/tiles/…` | `GisBffController.GetTiles` + MapService | **parity pattern** — mobile riêng |
| Mobile `GET …/gis/tiles/…` | **absent** · catch-all → ApiBase **nuốt** | **NEW** dedicated proxy · GAP-MOB-BFF-MAP-01/02 |
| `ServiceEndpoints:MapService` | **absent** appsettings | **ADD** T-MAP-BFF-01 |
| `AddLinmMapServiceBff` | **absent** | **ADD** NuGet · T-MAP-BFF-02 |
| `AddLinmMapServiceBffControllers` | — | **cấm** |
| `GET …/gis/clusters|geojson|…` | catch-all → RMMS | **Giữ** |
| Native TileUrl | CDN / non-BFF risk | Wave 3 → BFF path · GAP-MAP-OSM-CDN-01 |
| `api/v1/map-service/*` | **không** | **Cấm** invent |

---

## FormMode ↔ API (REQUIRED)

| FormMode / zone | Control | Method | App path (`{BffPrefix}`) | Downstream | Auth |
|-----------------|---------|--------|--------------------------|------------|------|
| TileUrl config | Text | — | set base `gis/tiles/…` | — | — |
| Basemap MVT | MapTile | GET | `gis/tiles/basemap/{z}/{x}/{y}.pbf` | MapService | guest 200 |
| Overlay MVT | MapTile | GET | `gis/tiles/{layer}/{z}/{x}/{y}.pbf` | MapService | JWT · 401 no token |
| Peer geo / clusters | MapPin/Polyline | GET | `gis/geojson/*` · `gis/clusters` | RMMS ApiBase | JWT tenant |
| Peer layers / basemap-config | Map | GET | `gis/layers` · `gis/basemap-config` | RMMS | keep catch-all |

**1 feature / 1 FormMode map** → tile proxy + TileUrl; actions trên peer map = endpoint **slug con** (gis-map / patrol-map) — **cấm** nhét hết vào 1 solution (`GAP-MOB-ACT-02`).

---

## API catalog

### API-01: GET /mobile-bff/api/v1/gis/tiles/{layer}/{z}/{x}/{y}.pbf

| | |
|--|--|
| Purpose | Clipped MVT basemap/overlay same-origin BFF (parity Web GetTiles) |
| Permission | guest `layer=basemap` · overlay requires inspector JWT |
| Tenant | forward `Authorization` · `X-Company-Id` khi có |
| Request | path `layer` string · `z/x/y` int · **no body** |
| Response | `application/vnd.mapbox-vector-tile` stream |
| Errors | 401 overlay no JWT · 502/503 MapService down · 404 layer |
| Form surfaces | TileUrl · peer map host basemap/overlay |
| Field map | `tileUrl` → path template · `tileBasemap`/`tileOverlay` → layer key |
| Context | `docs/context/features/mobile-bff-map.md` |
| Demo / zone | `#zone-tileurl-note` · `#zone-tile-basemap` · `#zone-tile-overlay` |
| data-import | **n/a** |
| Migration | none |
| Gap | GAP-MOB-BFF-MAP-01 · GAP-MOB-BFF-MAP-02 |

### API-02: GET /mobile-bff/api/v1/gis/clusters (KEEP)

| | |
|--|--|
| Purpose | Cluster overlay GeoJSON — catch-all RMMS |
| Permission | JWT tenant |
| Downstream | `ApiBase` `api/v1/gis/clusters` |
| Migration | none |

### API-03: GET /mobile-bff/api/v1/gis/geojson/{layer} (KEEP)

| | |
|--|--|
| Purpose | Peer pin/polyline overlay `{AssetDb}` |
| Permission | JWT tenant |
| Downstream | RMMS Gis |
| Migration | none |
| Note | owner peer `gis-map` / `patrol-map` |

### API-04: * /mobile-bff/api/v1/gis/* ≠ tiles (KEEP)

| | |
|--|--|
| Purpose | layers · drawings · basemap-config · health |
| Downstream | RMMS catch-all |
| Migration | none |

---

## Form data analysis

| Screen / FormMode | Fields (UI) | Source type | Persist entity |
|-------------------|-------------|-------------|----------------|
| DES-MOB-TILEURL-NOTE | tileUrl Text · tileBasemap/overlay MapTile | config + MVT stream | **none** |
| Peer mapHost | Map chrome reuse | query geojson/clusters | **none** (owner peer) |

### controlHint → API

| controlHint | SA |
|-------------|-----|
| Text (tileUrl) | config string → BFF path template · **không** invent lookup |
| MapTile basemap | API-01 `layer=basemap` guest |
| MapTile overlay | API-01 + JWT |
| MapPin/Polyline | API-02/03 keep · **cấm** invent |

### Field map

| uiField | dto / wire | Notes |
|---------|------------|-------|
| tileUrl | `{Bff}/mobile-bff/api/v1/gis/tiles/{layer}/{z}/{x}/{y}.pbf` | Wave 3 iOS+Android |
| tileBasemap | layer=`basemap` MVT | guest 200 |
| tileOverlay | layer≠basemap MVT | 401 without JWT |
| overlayGeo | GeoJSON FeatureCollection | peer keep |
| mapHostPeer | — | reuse gis-map/patrol-map |

---

## Gaps → TL tasks (ids)

| Gap | Wave | Task id (TL) |
|-----|------|--------------|
| GAP-MOB-BFF-MAP-01/02 tile proxy + MapService config | 2 | T-MAP-BFF-01..05 |
| GAP-MAP-OSM-CDN-01 TileUrl BFF dual OS | 3 | T-MAP-APP-01 |
| Verify tile curl + dual smoke | QA | T-MAP-QA-01 |

**devSlash:** `/agent-dev-ios` + `/agent-dev-android` (+ OMS R2) · BFF Wave 2 trước Wave 3.

---

## Offline / GPS / store

| Concern | Decision |
|---------|----------|
| Offline | tile miss → blank ok · toast peer · **không** queue MVT |
| GPS | **n/a** this slug |
| Camera / push | **n/a** |
| Store | **N/A** · **cấm** localhost/LAN trong listing |

---

## Handoff → team-lead

| Field | Value |
|-------|-------|
| feature / packKind | `mobile-bff-map` / `map` |
| phase_from / phase_to | `sa` → `team_lead` |
| STATUS | `solution` **confirmed** |
| FormMode↔API | TileUrl/MapTile → API-01 · peer geo → API-02/03 keep |
| APIs | API-01..04 |
| TZ / XCO / SHARE | `tz_na` · `xco_na` · `share_na` |
| entity / migration | **none** · Step 4b **N/A** |
| BFF vs API | NEW MapService proxy on Mobile.Bff · RMMS keep catch-all |
| Screens | `DES-MOB-TILEURL-NOTE` · reviewUrl ios/android `#zone-tileurl-note` |
| Open questions | MapService `:5021` must listen at verify · NuGet pin Dev |
| Next | TL task pack T-MAP-BFF-* · T-MAP-APP-01 · T-MAP-QA-01 · `wave2_host=mobile_bff` |

---

## Version meta

| Field | Value |
|-------|-------|
| skillId | agent-sa-mobile |
| skillVersion | 2026.09.05.03 |
| schemaVersion | 1 |
| workflowVersion | 2026.09.05.03 |
| rulesVersion | 2026.09.12.1 |
| generatedAt | 2026-09-12T06:52:00.000Z |
| contentHash | sha256:b04a50005f77e99fc2c564e39ac3a438cce8742996899ef2aaa47b698f7e0131 |
| bffContentHash | sha256:eb9222c7212ddd10633f4d2cb920f7eb02f7e37a64a86c6d3e2ba1c31f302af6 |
| taskId | `task_825b8a3d` |
| solution_confirm | approve |

---
<!-- Version meta: skillId=agent-sa-mobile skillVersion=2026.09.05.03 schemaVersion=1 -->
