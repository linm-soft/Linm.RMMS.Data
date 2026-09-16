# SA — Solution — gis-map (mobile map · Bản đồ tài sản)

| Field | Value |
|-------|-------|
| feature | `gis-map` |
| title | [Mobile] [Tài sản] -> Xem trên bản đồ |
| this role | `sa` · `/agent-sa-mobile` |
| status | `confirmed` |
| solution_confirm | **approve** (`autoApprove=ON` · `task_e39b336c`) |
| changeScope | `new_page` |
| packKind | **`map`** (PO + Design confirm) |
| stack | `native_dual` |
| Feature Kind | **map** · `#sc-gis-map` `DES-MOB-GIS` · OMS `DES-MOB-OMS-GIS` · **cấm** Kind A–G web / Grid / Report / invent tab |
| thisAction | **Bản đồ tài sản** only · push từ hub/detail/incident · **cấm** gộp list / draw / heatmap / Twin / patrol-map (`GAP-MOB-ACT-01/02`) |
| domain | **Gis** overlay + **Asset** focus GetById · **cấm** invent `api/v1/gis-map` / `GisMapMobileController` |
| BackendRoot | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.WebService` · **cấm ERP.*** |
| ios | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.iOS` |
| android | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Android` |
| bff | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Bff` · prefix `mobile-bff/api/v1` |
| prior · design | **confirmed** · `ui/design.md` · `ui/ux-analy.md` · `ui/html-to-native-map.md` · dual `#sc-gis-map` · `ui/review/demo-parity.md` · `task_81ce36d6` |
| prior · po | **confirmed** · `po/requirement.md` · `task_76dabc8f` |
| prior · data_analy | **confirmed** · `_data-analy/gis-map-*.md` · contentHash `sha256:gis-map-control-hint-20260831` · realDataHash `sha256:gis-map-real-data-20260831` · bffContentHash `sha256:gis-geojson-proxy-passthrough-20260831` · actionTreeHash `sha256:gis-map-action-tree-20260831` |
| autoApprove | **ON** |
| e2eQa | ON khi QA · `yarn e2e-qa-mobile` · **cấm** `yarn start:std` / `mfeStdUrl` / e2e ở role SA |
| version_mismatch_action | **recheck_new** — stamp SSOT workflow `2026.08.31.2` · rules `2026.08.31.2` · agent-sa-mobile `2026.08.20.03` (design/po stamped `2026.08.25.01` · contentHash khớp) |
| versionGate | `rechecked` |
| taskId | `task_e39b336c` |
| confirmedBy | agent autoApprove · `task_e39b336c` |
| updatedAt | `2026-08-31T00:37:31.000Z` |

**Cấm:** invent `api/v1/gis-map` · invent path ngoài BFF table · fork DTO · DbContext trên Mobile.Bff · app `:5101` · ERP.* · `mfeStdUrl` / `yarn start:std` · WebView HTML Leaflet-as-app · system `UIAlert` / `AlertDialog` · fake lat/lng / fake TS-*/SC-* khi API OK · pin từ `incident/incidents` · ship hardcode `GIS_ASSETS` khi BFF live (`GAP-MOB-REAL-02`) · watermark Gói · device label · Write MFE/native ở role SA · Step 4b / migration / e2e ở role này · gộp sibling (`GAP-MOB-ACT-01/02/07`) · re-scan demo (`hash skip`) · `localhost` / LAN IP trong store listing (`GAP-SA-STORE-01`) · claim iPad family `1`.

Standards: api-endpoint · bff-api-structure · company-field · no-parent-json-field · sa-implement-gates · ios networking · android api-client · offline-sync · PrivacyInfo / Play Data safety (`GAP-SA-STORE-01`).

---

## Architecture (repo SSOT)

| Layer | Choice |
|-------|--------|
| BackendRoot | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.WebService` · `be_repo_confirm` |
| Domain | **Gis** `GisMapController` · **Asset** `RoadAssetsController.GetById` |
| API downstream | `GET api/v1/gis/geojson/{layer}` live · `GET api/v1/asset/road-assets/{id}` live |
| BFF mobile | `Linm.RMMS.Mobile.Bff` · `MobileApiProxyController` catch-all → `ApiBase` |
| App | iOS MapKit + Android OSM/Esri tiles · base `{BffBase}/mobile-bff/api/v1` · **cấm** URLSession/OkHttp trong View |
| Overlay P1 | Appear: parallel GET `gis/geojson/all` · `gis/geojson/incidents` · `gis/geojson/tuyen-duong` |
| Focus P1 | Nav args `id` → `GET asset/road-assets/{id}` · center `Lat`/`Lng` |
| Legend / basemap | **local** client isolate + tile switch · **không** API bắt buộc |
| Search (iOS) | local filter pins **hoặc** `?search=` trên geojson · **cấm invent** dedicated search API |
| Lớp (iOS) | toast P1 · `GET gis/layers` sheet **P2** |
| Offline | GET fail / empty → demo OMS pins + corridor · `LinmToast` · map **vẫn mở** · **không** OfflineQueue P1 |
| Persist BE mới | **không** — GIS GET + Asset GetById **DONE** · Step 4b **N/A** |
| Sibling | entry hub/detail/incident · Android list · **cấm** re-own / enqueue |
| Out of pack | draw CRUD · heatmap PCI · clusters · Cesium Twin · camera ITS · patrol-map · invent tab |

### Route decision

| | Choice |
|--|--------|
| Slug | `gis-map` → **map** · owner `#sc-gis-map` `DES-MOB-GIS` |
| App prefix | `mobile-bff/api/v1` |
| App path overlay TS | `GET gis/geojson/all` — isolate `ts` client (non-incident props) |
| App path overlay SC | `GET gis/geojson/incidents` — **cấm** `incident/incidents` pin |
| App path corridor | `GET gis/geojson/tuyen-duong` (hoặc `lod=corridor`) |
| App path focus | `GET asset/road-assets/{id}` — center Lat/Lng |
| App path optional | `GET gis/layers` (P2 sheet) · `GET gis/basemap-config` (OMS local P1 OK) · `?search=` |
| Downstream | existing `GisMapController` + `RoadAssetsController` · **không** dedicated mobile controller |
| GPS device | **N/A P1** — center từ API / nav args · **không** bắt buộc CLLocation/Fused |
| Step 4b | **N/A** — endpoints live · **cấm** SA chạy `/new-endpoint` / `/database-migration` |
| Rationale | BFF table + real-data §B khớp live Gis/Asset · map composition · no invent path |

---

## SSOT / anti-duplicate

| Concern | Package / rule | Note |
|---------|----------------|------|
| BFF HTTP | `MobileApiProxyController` catch-all | **cấm** `GisMapMobileController` local trên BFF |
| BE HTTP Gis | `GisMapController` `[Route("api/v1/gis")]` | live geojson · layers · basemap · **OUT** clusters/heatmap P1 |
| BE HTTP Asset | `RoadAssetsController` `[Route("api/v1/asset/road-assets")]` | live `GET {id}` |
| Response DTO geojson | `GisGeoJsonFeatureCollection` / `GisGeoJsonFeature` | `geometry` Point/LineString · `properties.*` |
| Response DTO focus | `RoadAssetDto` | `Lat` · `Lng` · code/name/route/km |
| HTTP app | `ApiClient` iOS · Retrofit Android | **cấm** VM→raw HTTP · Bearer Keychain / Encrypted |
| Kit chrome | `LinmTopBar` · `LinmChip` · `LinmToast` · `LinmTabBar` shell | Design `kit_missing_confirm` **N/A** · **cấm** `LinmMap` kit |
| Map host | feature MapKit / OSM · `DES-MOB-OMS-GIS` | **cấm** WebView HTML |
| Persist | no-parent-json-field | map **không** ghi inventory JSON parent |

---

## Implement gates (confirm)

| Gate | Decision | Endpoints / surfaces | Skill | Note |
|------|----------|----------------------|-------|------|
| TZ | **tz_na** | GET geojson / GetById — **không** DATE filter / form date | `/review-timezone-implement` | header `X-Timezone` interceptor chung |
| XCO | **xco_na** | map overlay + focus current-tenant assets · **không** View catalog cross-company UI | `/implement-view-cross-company` | Bearer + `X-Company-Id` giữ interceptor |
| SHARE | **share_tenant** | reuse Gis inventory + RoadAssets tables **DONE** · **không** shared-table new | `/implement-shared-table` | **cấm** assume new table |
| Offline | **no queue** · map **vẫn mở** | GET fail → demo OMS + toast | offline-sync | **cấm** full-screen block · **cấm** fake 200 |
| GPS | **n/a device P1** | focus Lat/Lng từ GetById / nav | — | deny device GPS **không** chặn map |
| Camera | **n/a** | — | — | sibling AI |
| Push | **n/a** | — | — | |
| Store | **N/A** signup | map không signup/xóa TK | GAP-SA-STORE-01 | **cấm** `localhost` / LAN trong listing · family `1` **cấm** iPad claim |

AskQuestion (autoApprove=ON · không chờ board): `be_repo_confirm=approve` · `sa_tz_gate=tz_na` · `sa_xco_gate=xco_na` · `sa_shared_table=share_tenant` · `solution_confirm=approve` · `version_mismatch_action=recheck_new` · `2026-08-31T00:37:31.000Z`.

---

## Persist gate (no-parent-json-field)

| | |
|--|--|
| Parent JSON string inventory | **none** |
| Child tables this pack | **n/a** — reuse Gis seed/inventory + `rmms_road_assets` |
| API shape | GeoJSON FeatureCollection + RoadAssetDto scalars |
| Migration | **không** `Schema_*` · **không** `/database-migration` |
| T-BE-API / T-BE-MIG | **n/a** |

---

## Live vs delta (audit 2026-08-31)

| Surface | Live | SA chốt P1 |
|---------|------|------------|
| `GET …/gis/geojson/all` | `GisMapController.GetGeoJson` | **Giữ** · overlay TS |
| `GET …/gis/geojson/incidents` | same · layer incidents | **Giữ** · overlay SC · **GAP-MOB-GIS-SC-01** |
| `GET …/gis/geojson/tuyen-duong` | corridor LineString | **Giữ** · hành lang |
| `GET …/gis/layers` | live | toast P1 · sheet **P2** |
| `GET …/gis/basemap-config` | live | optional · OMS local OK |
| `GET …/gis/clusters` · `heatmap/pci` | live web | **OUT** P1 mobile |
| `gis/drawings*` | live web draw | **OUT** — owner `gis-draw-*` |
| `GET …/asset/road-assets/{id}` | `RoadAssetsController.GetById` | **Giữ** · focus center |
| `GET incident/incidents` | live list | **Không gọi** pin · no Lat/Lng |
| `api/v1/gis-map` | **không** | **Cấm** tạo |
| Native `#sc-gis-map` | Design dual proto | **DELTA UI** MapKit/OSM + bind §B |

---

## API catalog (app paths — `{BffPrefix}`)

| ID | Method | Path | Bind | Note |
|----|--------|------|------|------|
| API-01 | GET | `gis/geojson/all` | overlay TS pins | appear · isolate `ts` client |
| API-02 | GET | `gis/geojson/incidents` | overlay SC pins | **cấm** incident list pin |
| API-03 | GET | `gis/geojson/tuyen-duong` | corridor polyline | optional `lod=corridor` |
| API-04 | GET | `asset/road-assets/{id}` | focus Lat/Lng | detail entry |
| API-05 | GET | `gis/geojson/*?search=` | optional iOS | **hoặc** local filter |
| API-06 | GET | `gis/layers` | P2 sheet | toast P1 only |
| API-07 | GET | `gis/basemap-config` | optional | OMS tiles local P1 OK |

Query geojson (reuse BE): `bbox` · `pciMin` · `pciMax` · `search` · `route` · `lod` · `skip` · `take`.

---

## Form data analysis (REQUIRED)

| Screen / FormMode | Fields (UI) | Source type | Entity |
|-------------------|-------------|-------------|--------|
| `#sc-gis-map` map | nav · map · chips · pins · toast | query Gis geojson + Asset GetById | **không** form entity |

### Field map (ui → dto → store) — khớp real-data §B

| uiField | Label VN | dtoField / wire | GET / write | Notes |
|---------|----------|-----------------|-------------|-------|
| mapHost | Bản đồ | — | appear = GET geojson ×3 | MapKit/OSM · **cấm** WebView |
| overlayTs | Tài sản pins | `Feature.geometry` Point · `properties.code/name/route/kmFrom` · `properties.layer` | `GET gis/geojson/all` | isolate `ts` |
| overlaySc | Sự cố pins | same · `properties.layer=incidents` | `GET gis/geojson/incidents` | **GAP-MOB-GIS-SC-01** |
| corridor | Hành lang | LineString coords | `GET gis/geojson/tuyen-duong` | load cả hai OS khi «Tất cả» |
| focusPin | Ghim focus | `RoadAssetDto.Lat` / `Lng` · code/name | `GET asset/road-assets/{id}` | thiếu coords → fit all |
| searchHint | Tìm tài sản, sự cố… | local / `?search=` | iOS only | **cấm invent** search API |
| baseOsm/Esri/Sat | Đường/Phố/Vệ tinh | local tile key | — | default Đường |
| fitAll | Toàn tuyến | local camera | — | fit overview |
| lgAll / lgTs / lgSc | legend | local show/hide | — | dual |
| lgCorridor | Hành lang | local isolate | — | **iOS only P1** |
| navLayers | Lớp | toast / `gis/layers` P2 | iOS | toast «Lớp tài sản / sự cố · chú giải» |
| navList | Danh sách | local nav | Android | `go('asset-list')` reuse |
| navBack | Tài sản | local pop | — | `asset-hub` |
| toastErr | (lỗi mạng) | — | fail path | map vẫn mở |

Popup live bind: `properties.code` · `name`/`title` · `route` · `kmFrom`. Fallback demo SSOT: **TS-20260810-014 · Cống ngang · QL.1 Km 1556+000** · **SC-2401 · Nứt mặt đường · QL.1 Km 1556+080**.

**Cấm** invent DTO / fork properties keys / pin từ IncidentDto.

---

## Navigation / action (this pack)

| Control | Behavior P1 | Owner slug |
|---------|-------------|------------|
| Back | pop `asset-hub` | `reuse=asset-hub` |
| Android Danh sách | `go('asset-list')` | `reuse=asset` |
| iOS Lớp | `LinmToast` Lớp… | cùng slug · sheet P2 |
| Basemap / legend / fit / search | local filter | cùng slug · **cấm** enqueue |
| Entry hub tile/row | push `#sc-gis-map` | `shared_action` · parent owned |
| Entry detail Ghim | push + focus Id | `shared_action` · reuse |
| Entry incident seg/CTA | push cùng slug | `shared_action` · reuse |

**Cấm** start `pending_confirm` sibling (`GAP-MOB-ACT-06`) · **cấm** enqueue basemap/legend/fit/search/GET (`GAP-MOB-ACT-07`) · **cấm** `UIAlert` / `AlertDialog`.

---

## Dual chrome (PO+Design chốt — SA giữ)

| Zone | iOS | Android |
|------|-----|---------|
| Trailing | **Lớp** toast P1 | **Danh sách** → list |
| Search | overlay glass P1 | **không** P1 |
| Legend Hành lang | chip **có** | chip **không** (corridor vẫn load khi Tất cả) |

---

## GAP chốt (SA)

| ID | Decision |
|----|----------|
| GAP-MOB-GIS-SEARCH-01 | iOS local/`?search=` · Android không · **cấm invent** search API |
| GAP-MOB-GIS-LAYER-01 | dual chrome · sheet layers **P2** |
| GAP-MOB-GIS-CORRIDOR-LEGEND-01 | iOS chip · Android không chip P1 |
| GAP-MOB-GIS-SC-01 | SC = **chỉ** `gis/geojson/incidents` |
| GAP-MOB-GIS-FOCUS-01 | GetById center · thiếu Lat/Lng → fit all · **cấm** fake coords |
| GAP-MOB-REAL-01/02 | §B bind live · demo fallback chỉ fail/empty · **cấm** mock-only ship |
| GAP-MOB-ACT-01/02 | **none** — 1 map · không gộp list/draw |
| GAP-MOB-ACT-05 | kit chrome reuse · map = feature composition |
| GAP-MOB-ACT-06/07 | không start/enqueue sibling chrome |
| GAP-TAB-01 | Tab 5 shell giữ · **cấm** invent tab/segment trên map |
| GAP-SA-STORE-01 | **cấm** localhost/LAN listing · **cấm** iPad claim |
| GAP-MOB-BFF-01 | **không** hàng mới — Gis + Asset live đủ |
| Step 4b / T-BE-* | **N/A** |

---

## Client architecture (TL/Dev)

| Layer | iOS | Android |
|-------|-----|---------|
| Feature | `Presentation/Features/GisMap/*` | `presentation/feature/gis_map/*` |
| Map | MapKit + overlays | OSM/Esri MapView + overlays |
| Use case | `LoadGisOverlayUseCase` · `FocusRoadAssetUseCase` | same |
| State | overlays · isolate · basemap · focusId · toast · loading | same |
| DI | `AppContainer` wire VM | Hilt VM |
| Nav args | optional `assetId` (+ Lat/Lng hint) | same |
| Offline | appear try live → demo OMS + toast | same |
| Entry wire | hub/detail/incident → push gis-map | same |

**Cấm** WebView HTML · watermark · hardcode production pins khi live OK.

---

## Handoff → TL

| Field | Value |
|-------|-------|
| feature / packKind | `gis-map` / **`map`** |
| solution_confirm | **approve** |
| BFF | **chỉ** `gis/geojson/*` + `asset/road-assets/{id}` (+ opt layers/basemap/search) · Step 4b **N/A** |
| Tasks đề xuất | `T-IOS-GIS-MAP` · `T-AND-GIS-MAP` · `T-KIT` **n/a** · `T-BE` **n/a** |
| Kit | reuse chrome dual — map composition · **không** `implement_kit` LinmMap |
| Nav | back hub · Android list · dual chrome Lớp/search/Hành lang |
| Verify (Dev) | iOS `xcodegen` + `xcodebuild` dest **iPhone 17 Pro** · Android `assembleDebug` · BFF `dotnet build` |
| Next slash | `/agent-tl-mobile` |
| Chain this turn | **không** (roleOnly=`sa`) |
| e2eQa | ON khi QA · `yarn e2e-qa-mobile` · **cấm** mfeStdUrl / e2e ở SA |

---

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-sa-mobile |
| skillVersion | 2026.08.20.03 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.31.2 |
| rulesVersion | 2026.08.31.2 |
| generatedAt | 2026-08-31T00:37:31.000Z |
| versionGate | rechecked |
| contentHash | sha256:gis-map-control-hint-20260831 |
| bffContentHash | sha256:gis-geojson-proxy-passthrough-20260831 |
| realDataContentHash | sha256:gis-map-real-data-20260831 |
| actionTreeContentHash | sha256:gis-map-action-tree-20260831 |
| ctxContentHash | sha256:gis-map-ctx-20260831 |
| demoContentHash | sha256:mobile-p1-sc-gis-map-20260831 |
| taskId | `task_e39b336c` |

---
<!-- Version meta: skillId=agent-sa-mobile skillVersion=2026.08.20.03 schemaVersion=1 workflowVersion=2026.08.31.2 rulesVersion=2026.08.31.2 versionGate=rechecked -->
