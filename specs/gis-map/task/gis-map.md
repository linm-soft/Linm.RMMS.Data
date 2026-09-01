# Team lead — Task — gis-map (mobile map · Bản đồ tài sản)

| Field | Value |
|-------|-------|
| feature | `gis-map` |
| title | [Mobile] [Tài sản] -> Xem trên bản đồ |
| this role | `team_lead` · `/agent-tl-mobile` |
| status | `confirmed` |
| changeScope | `new_page` |
| packKind | **`map`** (PO + Design + SA confirm) |
| stack | `native_dual` |
| Feature Kind | **map** · `#sc-gis-map` `DES-MOB-GIS` · OMS `DES-MOB-OMS-GIS` · **cấm** Kind A–G web / Grid / Report / invent tab |
| route_confirm | **route_a** (autoApprove=ON) — hub tile/row · detail Ghim · incident seg/CTA → push `#sc-gis-map` · back pop `asset-hub` · dual chrome · Tab 5 giữ · **cấm** mfeStdUrl / Modal/Sheet |
| ios_repo_confirm | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.iOS` · **path** (repos đã có · **không** `scaffold_new`) |
| android_repo_confirm | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Android` · **path** (repos đã có · **không** `scaffold_new`) |
| autoApprove | **ON** |
| e2eQa | ON khi QA · `yarn e2e-qa-mobile` · sim 6.9" + emulator + Maestro · PNG `qa/screens` + `qa/store/gis-map` · **cấm** `yarn start:std` / `mfeStdUrl` / e2e ở role TL |
| prior · data_analy | **confirmed** · `_data-analy/gis-map-control-hint.md` · `gis-map-bff-endpoints.md` · `gis-map-action-tree.md` · `gis-map-real-data.md` · contentHash `sha256:gis-map-control-hint-20260831` · bffContentHash `sha256:gis-geojson-proxy-passthrough-20260831` · realDataHash `sha256:gis-map-real-data-20260831` · actionTreeHash `sha256:gis-map-action-tree-20260831` |
| prior · po | **confirmed** · `po/requirement.md` · `task_76dabc8f` |
| prior · design | **confirmed** · `ui/design.md` · `ui/ux-analy.md` · `ui/html-to-native-map.md` · `ui/review/demo-parity.md` · dual `#sc-gis-map` · `task_81ce36d6` · `kit_missing_confirm` **N/A** |
| prior · sa | **confirmed** · `be/solution-discovery.md` · `solution_confirm=approve` · Step 4b **N/A** · `task_e39b336c` |
| taskId | `task_ee5c8ae2` |
| updatedAt | `2026-08-31T00:41:09.000Z` |
| thisAction | **Bản đồ tài sản** `#sc-gis-map` only · GET `gis/geojson/*` + focus `asset/road-assets/{id}` · MapKit/OSM composition · basemap/legend · dual chrome · **cấm** gộp list / draw / heatmap / Twin / patrol-map |

**Cấm:** gộp list / draw / heatmap / Twin / camera ITS / patrol-map (`GAP-MOB-ACT-01/02`) · invent `api/v1/gis-map` / `GisMapMobileController` · pin từ `incident/incidents` · WebView HTML Leaflet · `ERP.*` · `mfeStdUrl` · `UIAlert` / `AlertDialog` · raw `TabView` / M3 `NavigationBar` · ship hardcode `GIS_ASSETS` khi BFF live (`GAP-MOB-REAL-02`) · enqueue basemap/legend/fit/search (`GAP-MOB-ACT-07`) · start sibling hub/list/detail/incident (`GAP-MOB-ACT-06`) · `scaffold_new` / `/mobile-app-architecture` · `T-KIT-*` · e2e / `yarn start:std` ở role TL · Step 4b / migration · Write native code (trừ task MD).

---

## Source lock

| Key | Value |
|-----|-------|
| ios | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.iOS` · `ios_repo_confirm` |
| android | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Android` · `android_repo_confirm` |
| bff | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Bff` · prefix `mobile-bff/api/v1` |
| be | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.WebService` · `be_repo_confirm` · **cấm ERP.*** |
| app base | `{BffBase}/mobile-bff/api/v1` — path **không** lặp prefix |
| Auth | Bearer + `X-Company-Id` + `X-Timezone` interceptor chung |
| kit | reuse chrome dual — `LinmTopBar` · `LinmChip` · `LinmToast` · `LinmTabBar` · pin glyph `#i-scope` · map `ui/html-to-native-map.md` · **không** `T-KIT-*` · **cấm** `LinmMap` kit · Design `kit_missing_confirm` **N/A** |
| map host | **feature** MapKit (iOS) · OSM/Esri MapView (Android) · twin pattern `patrol-map` · **cấm** WebView HTML |
| scaffold | repos **đã có** · AssetHub / PatrolMap / Incident **shipped** — **không** `scaffold_new` · **không** `/mobile-app-architecture` trước Dev |
| Step 4b | **N/A** — Gis geojson + Asset GetById **live** · **không** `/new-endpoint` / `/database-migration` / `/create-bff-api-feature` |

### route_confirm (autoApprove=ON)

| Option | Decision |
|--------|----------|
| **route_a** (chọn) | Có phiên · tab **Trang Chủ** · stack dưới Home: `asset-hub` tile **Xem trên bản đồ** / row **Bản đồ tài sản** → **push** `#sc-gis-map` / `DES-MOB-GIS`. `asset-detail` CTA **Ghim trên bản đồ** → push cùng slug + nav args `assetId` (+ Lat/Lng hint nếu có). `incident-list` seg / `incident-detail` CTA **Bản đồ** / **Xem trên bản đồ** → push **cùng** `#sc-gis-map` (shared_action) · **cấm** mở `patrol-map`. Back **Tài sản** → **pop** `asset-hub` (`reuse`). Android trailing **Danh sách** → `go('asset-list')` reuse. iOS trailing **Lớp** → `LinmToast` «Lớp tài sản / sự cố · chú giải» P1. Basemap/legend/fit/search = local cùng slug. Tab 5 shell **giữ** (home selected). |
| route_b | — không dùng (không deep-link web / `mfeStdUrl`) |
| route_c | — không dùng (không invent tab Bản đồ) |

IA lock (design §2 / ux-analy §1):

```
(auth) Login → Tab 5
  Trang Chủ → asset-hub
    tile/row → push #sc-gis-map DES-MOB-GIS   ← this pack
    asset-detail Ghim → push + focus Id
    incident seg/CTA → push cùng slug (≠ patrol-map)
      ← back pop asset-hub
      → iOS Lớp = toast P1 · Android Danh sách = asset-list reuse
      → basemap ×4 · legend isolate = filter cùng slug
  Tab 5 shell giữ (home selected)
```

**Cấm** invent tab · Modal/Sheet child · `UIAlert` / `AlertDialog` · WebView HTML.

AskQuestion (autoApprove=ON · không chờ board): `ios_repo_confirm=path` · `android_repo_confirm=path` · `route_confirm=route_a` · `version_mismatch_action=recheck_new` · `2026-08-31T00:41:09.000Z`.

---

## Live gap (TL audit 2026-08-31)

| Surface | Live | TL task |
|---------|------|---------|
| iOS `#sc-gis-map` | **MISSING** — không `Presentation/Features/GisMap/*` | **T-IOS-GIS-MAP** |
| Android `#sc-gis-map` | **MISSING** — không `presentation/feature/gis_map/*` (hoặc `gismap`) | **T-AND-GIS-MAP** |
| Hub tile/row map | **DELTA** — iOS/Android `tileMap`/`rowMap` → **toast** nhãn · chưa push | **wire** trong T-IOS + T-AND (`setOnOpenGisMap` · thay toast) · **cấm** reimplement hub |
| Detail **Ghim** | **DELTA** — `setOnOpenMap` có sẵn · **chưa wire** → fallback toast «gis-map sibling P1 chưa ship» | **wire** push + `assetId` · **cấm** toast-only khi map ship |
| Incident list/detail map | **WRONG target** — iOS `AppRouter` + Android nav → **`patrol-map`** | **rewire** → `#sc-gis-map` (shared_action) · **cấm** giữ mở patrol-map |
| `GET gis/geojson/{layer}` | BFF proxy + BE `GisMapController` **live** · app **chưa** gọi | **DELTA** thin repo + `LoadGisOverlayUseCase` |
| `GET asset/road-assets/{id}` | Asset repo **live** (detail) · map focus **chưa** | **reuse** GetById · `FocusRoadAssetUseCase` |
| `ApiClient` / `ApiService` gis paths | **MISSING** geojson | **add** `gis/geojson/all` · `incidents` · `tuyen-duong` (+ opt `?search=` / `gis/layers`) · **cấm** invent `gis-map` |
| MapKit / OSM twin | `PatrolMap` **shipped** pattern | **reuse pattern** · **cấm** copy patrol CTAs / check-in |
| Demo OMS fallback | `map-oms.js` SSOT pins/corridor | fail/empty only · **cấm** mock-only ship (`GAP-MOB-REAL-02`) |
| New BE endpoint / Schema_* | **không** | **T-BE-API** / **T-BE-MIG** = **n/a** |
| Kit chrome | dual shipped + map html-to-native | Dev **cấm** `T-KIT-*` · **cấm** `LinmMap` |
| Sibling hub/list/detail/incident | đã pipeline | **cấm** auto start (`GAP-MOB-ACT-06`) · chỉ **wire entry** |

---

## Tasks

| id | layer | deps | status | skills | DoD |
|----|-------|------|--------|--------|-----|
| T-KIT-GIS-MAP | kit | — | **n/a** | — | Chrome kit **đã map dual** · map = feature composition · Design `kit_missing_confirm` **N/A** — **không** giao Dev kit |
| **T-IOS-GIS-MAP** | ios | SA · route_a | pending | `/agent-dev-ios` · `/ios-new-screen` · `/dev-ios-swiftui` · `/mobile-ui-ux-analy` packet · MVVM | Ship `Presentation/Features/GisMap/*` · MapKit OMS · GET geojson ×3 + focus GetById · dual chrome iOS · wire hub/detail/incident → push · fail/empty → map trống + toast · map **vẫn mở** · **cấm** demo OMS native · `xcodegen` + `xcodebuild` dest **iPhone 17 Pro** PASS · ghi `implement/ios.md` |
| **T-AND-GIS-MAP** | android | SA · route_a | pending | `/agent-dev-android` · `/android-new-screen` · `/dev-android-compose` · `/android-new-api-call` · cùng ux packet | Same field/API/DoD dual · `presentation/feature/gis_map/*` · OSM/Esri · dual chrome Android · wire entry · `./gradlew :app:assembleDebug` PASS · ghi `implement/android.md` |
| **T-BE-API** | be | — | **n/a** | — | **không** `/new-endpoint` — Gis + Asset **live** · Step 4b **N/A** |
| **T-BE-MIG** | be | — | **n/a** | — | **không** `/database-migration` |
| T-QA-GIS-MAP | qa | T-IOS · T-AND | pending | `/agent-qa-mobile` | AC slug `gis-map` only · `yarn e2e-qa-mobile` · live sim 6.9" + emulator · store PNG `qa/store/gis-map` · **cấm** sibling screens in-scope · **cấm** `yarn e2e-qa` web |

**1 action = 1 feature.** **Cấm** gộp list / draw / heatmap / Twin / `patrol-map` / Kind F vào task file này như in-scope implement. Entry wire hub/detail/incident = **shared_action reuse** — **cấm** start sibling packs (`GAP-MOB-ACT-06`).

---

## T-IOS-GIS-MAP — detail

| | |
|--|--|
| `source.repo` | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.iOS` |
| `ssot.zones` | `DES-MOB-GIS` · `DES-MOB-OMS-GIS` · `DES-MOB-TABBAR` · `#sc-gis-map` |
| Pattern | Push map full · **không** Modal/Sheet · frame proto 390×844 |

### UI (kit cite — `ui/html-to-native-map.md`)

| Field | Kit | Notes |
|-------|-----|-------|
| navBack | `LinmTopBar` leading | text **Tài sản** + `#i-chevron-left` · pop `asset-hub` · e2e `btn-gis-back` |
| title | `LinmTopBar` | **Bản đồ tài sản** fixed |
| navLayers | `LinmTopBar` trailing | **Lớp** · toast «Lớp tài sản / sự cố · chú giải» P1 · sheet **P2** · e2e `btn-gis-layers` · **cấm** invent layer UX P1 |
| searchHint | SearchField overlay glass | placeholder **Tìm tài sản, sự cố…** · `#i-search` · local filter pins **hoặc** `?search=` · **cấm invent** dedicated search API · e2e `gis-search` |
| mapHost | MapKit `Map` | OMS tiles · pins + corridor · e2e `map-gis-host` · **cấm** WebView · **cấm** `LinmMap` |
| baseOsm | `ChipWrap` + `LinmChip` | **Đường** default on · e2e `mb-osm` |
| baseEsri | `LinmChip` | **Phố** · e2e `mb-esri` |
| baseSat | `LinmChip` | **Vệ tinh** · e2e `mb-sat` |
| fitAll | `LinmChip` | **Toàn tuyến** fit overview · e2e `mb-fit` |
| lgAll | `LinmChip` | **Tất cả** · e2e `lg-all` |
| lgTs | `LinmChip` | **Tài sản** isolate `ts` · e2e `lg-ts` |
| lgSc | `LinmChip` | **Sự cố** isolate `sc` · e2e `lg-sc` |
| lgCorridor | `LinmChip` | **Hành lang** · **iOS only P1** · e2e `lg-corridor` |
| pinTs / pinSc | Map annotation + pin glyph | popup `properties.code` / `name` / `route` / km · fallback demo SSOT |
| focusPin | highlight annotation | từ GetById Lat/Lng · thiếu → fit all · **cấm** fake coords |
| toast | `LinmToast` via session | GET fail · Lớp · **cấm** `UIAlert` |
| Tab 5 | `LinmTabBar` | home selected · **cấm** invent (`GAP-TAB-01`) |

**Cấm** watermark Gói · device label · raw system alert.

### API / store

| Step | Spec |
|------|------|
| Appear | Parallel GET: `gis/geojson/all` · `gis/geojson/incidents` · `gis/geojson/tuyen-duong` (Bearer) |
| Overlay TS | FeatureCollection Points · isolate client `properties.layer` / non-incident → `ts` |
| Overlay SC | **chỉ** `gis/geojson/incidents` · **cấm** `incident/incidents` pin (`GAP-MOB-GIS-SC-01`) |
| Corridor | LineString từ `tuyen-duong` · vẽ khi Tất cả / Hành lang |
| Focus | nav `assetId` → `GET asset/road-assets/{id}` · center Lat/Lng · fail/missing → fit all · toast optional |
| Search | local filter pin/popup **hoặc** `?search=` trên geojson · **cấm invent** search API |
| Fail / offline | map trống/partial live · toast lỗi · map **vẫn mở** · **cấm** GisMapDemoOverlay · **cấm** fake 200 · **cấm** ship mock-only khi live OK |
| Persist / OfflineQueue | **không** P1 |
| Layers sheet | **P2** · `GET gis/layers` optional |

### Router / shell / entry wire

1. `AppRouter` (Home stack): destination `GisMapView` · state `showGisMap` (+ optional `gisFocusAssetId`).
2. `AssetHubViewModel`: `setOnOpenGisMap` · `.tileMap` / `.rowMap` → **push** (thay toast).
3. `AssetDetailViewModel`: wire `setOnOpenMap` → push + pass Id/Lat/Lng (bỏ toast fallback khi wired).
4. `IncidentListViewModel` / `IncidentDetailViewModel`: **rewire** `setOnOpenMap` từ `showPatrolMapFromField` → **push `#sc-gis-map`** (shared_action) · **cấm** mở patrol-map.
5. DI `AppContainer`: `GisMapViewModel` + Gis overlay repo/use cases + reuse Asset GetById.
6. **Cấm** reimplement hub/list/detail/incident ngoài wire nav.

### Build DoD

```bash
cd /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.iOS && xcodegen generate
xcodebuild -scheme LinmRmms -destination 'platform=iOS Simulator,name=iPhone 17 Pro' build
```

Fail → `build_fail_confirm` · **cấm** mark Dev done. iPad **DEFER** Phase 2.

---

## T-AND-GIS-MAP — detail

| | |
|--|--|
| `source.repo` | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Android` |
| `ssot.zones` | cùng DES / `#sc-gis-map` · frame 412×915 |
| Pattern | Push map full · **không** Modal/Sheet · **không** `AlertDialog` system |

### UI (dual chrome — Android P1)

Cùng bảng field + API như T-IOS **trừ**:

| Zone | Android P1 |
|------|------------|
| Trailing | **Danh sách** → `navigate("asset-list")` reuse · **không** Lớp |
| Search | **không** overlay search P1 (`GAP-MOB-GIS-SEARCH-01`) |
| Legend | **Tất cả** · **Tài sản** · **Sự cố** · **không** chip **Hành lang** (`GAP-MOB-GIS-CORRIDOR-LEGEND-01`) — corridor vẫn load khi Tất cả |

Kit: `LinmTopBar` · `FlowRow` + `LinmChip` · `LinmToast` · osmdroid/Esri `MapView` · pin glyph. e2e tags mirror iOS (`map-gis-host` · `mb-*` · `lg-*` · `btn-gis-back` · `btn-gis-list`).

### Router / shell / entry wire

`MainTabScreen` / Home NavHost: route `"gis-map"?assetId=` · hub `TileMap`/`RowMap` → navigate (thay toast) · detail `setOnOpenMap` → navigate + args · incident list/detail `onOpenMap` → **`gis-map`** (rewire khỏi `patrol-map`). Back `popBackStack()` → hub. Trailing list → `asset-list`.

Hilt: `GisMapViewModel` + Retrofit `gis/geojson/*` trên `ApiService` + thin repos/use cases · reuse Asset GetById.

Offline: map trống + toast · map **vẫn mở** · **cấm** demo OMS native.

### Build DoD

```bash
cd /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Android && ./gradlew :app:assembleDebug
```

---

## T-BE-* (Step 4b — N/A)

| | |
|--|--|
| `source.repo` | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.WebService` + Mobile.Bff |
| Skill | **không** `/new-endpoint` · **không** `/database-migration` · **không** `/create-bff-api-feature` |
| Scope | Reuse live `GisMapController` geojson + `RoadAssetsController.GetById` via BFF catch-all · **cấm** `GisMapMobileController` / `api/v1/gis-map` |
| Build (baseline) | Mobile.Bff `dotnet build` PASS · **không** delta BE this pack |

**BE ALIGN:** SA chốt Step 4b **N/A**. Sau FE Dev **không** bắt buộc BE align delta — chỉ giữ verify BFF build xanh. **T-BE** status = **n/a**.

---

## Client contract (SSOT SA — bind Dev)

| Header | When |
|--------|------|
| `Authorization: Bearer {token}` | mọi GET overlay / focus |
| `X-Company-Id` | interceptor chung |
| `X-Timezone` | interceptor chung |
| `Accept` | `application/json` / GeoJSON |

| Envelope | Rule |
|----------|------|
| geojson 200 | `GisGeoJsonFeatureCollection` · `features[].geometry` Point/LineString · `properties.code/name/title/route/kmFrom/layer` |
| GetById 200 | `RoadAssetDto` · `Lat` · `Lng` · code/name/route/km |
| Fail / offline | map trống live · map **vẫn mở** · toast · **cấm** demo OMS · **cấm** native alert · **cấm** fake 200 |
| Empty features | fit demo corridor / empty overlay · map vẫn mở |

Query geojson (reuse BE): `bbox` · `pciMin` · `pciMax` · `search` · `route` · `lod` · `skip` · `take`.

App paths (`{BffPrefix}` · **không** lặp prefix):

| ID | Method | Path |
|----|--------|------|
| API-01 | GET | `gis/geojson/all` |
| API-02 | GET | `gis/geojson/incidents` |
| API-03 | GET | `gis/geojson/tuyen-duong` |
| API-04 | GET | `asset/road-assets/{id}` |
| API-05 | GET | `gis/geojson/*?search=` (optional iOS) |
| API-06 | GET | `gis/layers` (P2) |
| API-07 | GET | `gis/basemap-config` (optional · OMS local P1 OK) |

**OUT P1:** `gis/clusters` · `heatmap/pci` · `gis/drawings*` · invent `gis-map`.

---

## Navigation / toast matrix (P1)

| Control | Behavior |
|---------|----------|
| Hub tile **Xem trên bản đồ** / row **Bản đồ tài sản** | push `#sc-gis-map` |
| Detail **Ghim trên bản đồ** | push + focus Id |
| Incident seg/CTA **Bản đồ** / **Xem trên bản đồ** | push `#sc-gis-map` · **≠** patrol-map |
| Back **Tài sản** | pop `asset-hub` |
| Appear | GET geojson ×3 · optional focus |
| iOS **Lớp** | toast «Lớp tài sản / sự cố · chú giải» |
| Android **Danh sách** | `go('asset-list')` reuse |
| Basemap chips | switch tile · cùng slug |
| **Toàn tuyến** | fit overlay bounds |
| Legend chips | isolate client-side |
| iOS search | local / `?search=` |
| GET fail | toast + map trống · map mở · **cấm** demo OMS |
| Tab 5 | shell giữ · home selected · **cấm** invent |

---

## Out of scope (this pack)

- List / draw CRUD / heatmap PCI / Cesium Twin / camera ITS / `patrol-map` implement
- Invent `api/v1/gis-map` / `GisMapMobileController` / dedicated search API
- Pin geometry từ `incident/incidents` (no Lat/Lng)
- WebView HTML Leaflet · fake lat/lng · ship mock-only khi live OK
- Layers sheet full P1 (toast only · sheet **P2**)
- Start sibling `pending_confirm` / reimplement hub/list/detail
- Step 4b / migration / ERP.* / `mfeStdUrl` / e2e ở TL
- iPad family claim / Phase 2 iPad build

---

## Handoff → Dev

| Field | Value |
|-------|-------|
| feature / packKind | `gis-map` / **`map`** |
| route_confirm | **route_a** |
| Tasks | `T-IOS-GIS-MAP` · `T-AND-GIS-MAP` · `T-BE-*` **n/a** · `T-KIT` **n/a** |
| STATUS | `specs/gis-map/STATUS.md` |
| design / ux / solution | `ui/design.md` · `ui/ux-analy.md` · `ui/html-to-native-map.md` · `be/solution-discovery.md` |
| reviewUrl | dual `file:///Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/gis-map/ui/prototype/{ios,android}/index.html#sc-gis-map` |
| Next slash | `/agent-dev-ios` rồi `/agent-dev-android` (role sau · **không** chain turn này) |
| Verify (Dev) | iOS `xcodegen` + `xcodebuild` dest **iPhone 17 Pro** · Android `assembleDebug` · BFF `dotnet build` |
| e2eQa | ON khi QA · `yarn e2e-qa-mobile` · **cấm** mfeStdUrl / e2e ở TL |
| Chain this turn | **không** (roleOnly=`team_lead` · GAP-PKT-ROLE-01) |

---

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-tl-mobile |
| skillVersion | 2026.08.29.1 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.31.2 |
| rulesVersion | 2026.08.31.2 |
| generatedAt | `2026-08-31T00:41:09.000Z` |
| versionGate | rechecked |
| contentHash | sha256:gis-map-control-hint-20260831 |
| bffContentHash | sha256:gis-geojson-proxy-passthrough-20260831 |
| realDataContentHash | sha256:gis-map-real-data-20260831 |
| actionTreeContentHash | sha256:gis-map-action-tree-20260831 |
| taskId | `task_ee5c8ae2` |

---
<!-- Version meta: skillId=agent-tl-mobile skillVersion=2026.08.29.1 schemaVersion=1 workflowVersion=2026.08.31.2 rulesVersion=2026.08.31.2 versionGate=rechecked -->
