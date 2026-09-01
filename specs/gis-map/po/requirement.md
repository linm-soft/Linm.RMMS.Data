# PO — Requirement — gis-map (mobile map)

| Field | Value |
|-------|-------|
| feature | `gis-map` |
| title | [Mobile] [Tài sản] -> Xem trên bản đồ |
| this role | `po` · `/agent-po-mobile` |
| changeScope | `new_page` |
| packKind | **`map`** (PO confirm · data-analy đề xuất) |
| stack | `native_dual` |
| thisAction | **Bản đồ tài sản** `#sc-gis-map` only · push từ hub/detail/incident · **không** gộp list / draw / heatmap / Twin / patrol-map |
| status | `confirmed` (autoApprove=ON) |
| requestSource | run packet `task_76dabc8f` · `/agent-qldb-workflow-mobile` · roleOnly=`po` · `/agent-po-mobile` |
| autoApprove | **ON** — Design/SA tự confirm **khi tới lượt** · turn này **không** chain |
| e2eQa | ON khi QA · `yarn e2e-qa-mobile` · sim 6.9" + emulator + Maestro · PNG `qa/screens` + `qa/store/gis-map` · **cấm** `yarn e2e-qa` / `yarn start:std` / `mfeStdUrl` / test thủ công thay runtime |
| prior | data-analy **confirmed** · `specs/_data-analy/gis-map-control-hint.md` · `gis-map-bff-endpoints.md` · `gis-map-action-tree.md` · `gis-map-real-data.md` · contentHash `sha256:gis-map-control-hint-20260831` · bffContentHash `sha256:gis-geojson-proxy-passthrough-20260831` · real-data `sha256:gis-map-real-data-20260831` · **hash skip** · **cấm** re-scan demo · **no Excel** |
| `devSlash` | `/agent-dev-ios` + `/agent-dev-android` |
| updatedAt | `2026-08-31T00:45:00.000Z` |
| taskId | `task_76dabc8f` |

**Cấm:** gộp list / draw / heatmap / Twin / camera ITS / patrol-map (`GAP-MOB-ACT-01/02`) · invent `api/v1/gis-map` · invent lat trên Incident · WebView HTML Leaflet · ERP.* · native alert · watermark Gói · device label «iPhone» / «· Android» · `mfeStdUrl` · `UIAlert` / `AlertDialog` / `window.alert` · ship hardcode `GIS_ASSETS` khi BFF live (`GAP-MOB-REAL-02`) · enqueue basemap/legend/fit/search (`GAP-MOB-ACT-07`) · start sibling hub/list/detail/incident (`GAP-MOB-ACT-06`).

## 1. Goal

Màn **Bản đồ tài sản** native dual (iOS SwiftUI + Android Compose): full-page map OMS · overlay ghim TS + SC · hành lang tuyến · basemap chips · legend isolate · fit toàn tuyến · entry hub / detail / incident. Persona Tuần đường · Hạt QLĐB IV · hiện trường. App **chỉ** `{BffBase}/mobile-bff/api/v1/…`. **Cấm** ERP.* · WebView bọc HTML demo · `mfeStdUrl`.

**1 action = 1 feature.** Slug `gis-map` = màn `#sc-gis-map` `DES-MOB-GIS` · map shell `DES-MOB-OMS-GIS`. Basemap / legend / fit / search / GET geojson = **cùng slug** — **cấm** enqueue sibling.

Entry (shared_action reuse · **không** re-enqueue):
- `asset-hub` tile **Xem trên bản đồ** `#i-scope` · row **Bản đồ tài sản** `#i-scope`
- `asset-detail` CTA **Ghim trên bản đồ** · pass Id (+ Lat/Lng nếu có)
- `incident-list` seg / `incident-detail` CTA **Bản đồ** / **Xem trên bản đồ**

Back → `asset-hub` (reuse · **cấm** reimplement hub).

## 2. changeScope `new_page`

Pack **map mới** theo data-analy (`changeScope=new_page`). Visual SSOT = dual HTML `#sc-gis-map` (iOS 390×844 · Android 412×915 · **parity copy** trừ dual chrome §7). Map = **feature composition** (MapKit iOS · OSM/Esri tiles Android) · **cấm** kit `LinmMap` · **cấm** WebView demo HTML Leaflet.

Delta Current vs New (analy):

| ID | Current | New |
|----|---------|-----|
| GAP-MOB-GIS-NAV-01 | Hub/detail/incident → toast / pending | Push `#sc-gis-map` · back → `asset-hub` |
| GAP-MOB-GIS-SCR-01 | Không màn bản đồ TS | Full map OMS · basemap · legend · overlay |
| GAP-MOB-GIS-DATA-01 | — | GET `gis/geojson/*` · fail → demo OMS · **cấm** mock-only ship |
| GAP-MOB-GIS-FOCUS-01 | — | Detail pass Id → center pin |
| GAP-MOB-GIS-SEARCH-01 | — | iOS search · Android thiếu (dual) |
| GAP-MOB-GIS-LAYER-01 | — | iOS Lớp toast · Android Danh sách |
| GAP-MOB-GIS-CORRIDOR-LEGEND-01 | — | iOS Hành lang · Android thiếu |
| GAP-MOB-GIS-SC-01 | — | SC = GIS incidents layer |

**OUT:** web 20-action toolbar · heatmap PCI · Cesium · draw CRUD · camera ITS · patrol-map.

## 3. DoD (đo được)

1. Dual native push `#sc-gis-map`: nav · map full · basemap chips · legend chips · overlay TS/SC/corridor. Frame proto iOS 390×844 · Android 412×915 · Tab 5 shell **giữ** dưới map (`GAP-TAB-01` · **cấm** invent tab / segment trên map).
2. Back → pop `asset-hub` (`reuse` · **cấm** reimplement hub). Label iOS **Tài sản** + chevron · Android icon-only chevron `#i-chevron-left`.
3. Title **Bản đồ tài sản** fixed.
4. Trailing **dual chrome** (PO chốt §7):
   - **iOS:** **Lớp** → toast P1 «Lớp tài sản / sự cố · chú giải» · sheet layers **P2** · **cấm** invent layer UX P1.
   - **Android:** **Danh sách** → `go('asset-list')` (`reuse` list · **cấm** start list pack).
5. **Search (iOS only P1):** overlay glass placeholder **Tìm tài sản, sự cố…** `#i-search` · local filter pin/popup **hoặc** toast nhãn · **cấm invent** dedicated search API. Android **không** search overlay P1 (dual chrome).
6. Basemap chips (cả hai): **Đường** default on · **Phố** · **Vệ tinh** · **Toàn tuyến** fit overview.
7. Legend isolate:
   - **Cả hai:** **Tất cả** · **Tài sản** · **Sự cố**
   - **iOS thêm:** **Hành lang** · Android **không** chip Hành lang P1 (corridor vẫn vẽ khi «Tất cả» / load; isolate corridor chỉ iOS).
8. Overlay live on appear:
   - TS: `GET gis/geojson/all` (isolate `ts` client)
   - SC: `GET gis/geojson/incidents` (**cấm** `incident/incidents` pin — no Lat/Lng · **GAP-MOB-GIS-SC-01**)
   - Corridor: `GET gis/geojson/tuyen-duong` (hoặc `lod=corridor`)
   - Fail / empty → demo OMS `GIS_ASSETS` + corridor (`map-oms.js`) · toast lỗi · map **vẫn mở** · **cấm** blank dead map · **cấm** ship mock-only khi live OK (`GAP-MOB-REAL-02`)
9. Focus từ detail (**GAP-MOB-GIS-FOCUS-01**): nav args Id → `GET asset/road-assets/{id}` · center + highlight Lat/Lng · thiếu coords / fail → fit all · toast optional · **cấm** fake lat/lng.
10. Popup SSOT demo (fallback): **TS-20260810-014 · Cống ngang · QL.1 Km 1556+000** · **SC-2401 · Nứt mặt đường · QL.1 Km 1556+080**. Live bind `properties.code` / `name` / `route` / km.
11. Kit reuse: `LinmTopBar` · `LinmChip` · `LinmToast` · `LinmTabBar` shell · pin glyph `#i-scope` / map pin. Map host = feature MapKit/OSM · **cấm** WebView HTML · **cấm** raw M3 `NavigationBar` / `TabView` (`GAP-MOB-ACT-05`).
12. App chỉ `{BffPrefix}` · Step 4b **N/A** (GIS GET **DONE** · Asset GetById live · **cấm** invent `gis-map` controller).
13. Dev (role sau): iOS `xcodegen` + `xcodebuild` dest **iPhone 17 Pro** PASS · Android `assembleDebug` PASS · Mobile.Bff `dotnet build` PASS — **cấm** `yarn start:std`.
14. QA (role sau): Maestro slug `gis-map` only · live sim 6.9" + emulator · store PNG `qa/store/gis-map` · **cấm** `yarn e2e-qa` web.

## 4. CTX / DEM / DI inventory

| ID | Path | Loại |
|----|------|------|
| CTX-01 | `docs/context/features/gis-map.md` | map · §2 UI · §3 API · gaps |
| CTX-02 | `docs/context/features/gis.md` | domain Gis web peer |
| CTX-03 | `docs/context/features/asset-hub.md` | parent entry tile/row |
| CTX-04 | `docs/context/features/asset-detail.md` | CTA Ghim · focus Id |
| CTX-05 | `docs/context/features/asset.md` | RoadAssets GetById |
| DEM-01 | `specs/mobile-p1/ui/prototype/ios/index.html` `#sc-gis-map` | iOS 390×844 · `DES-MOB-GIS` |
| DEM-02 | `specs/mobile-p1/ui/prototype/android/index.html` `#sc-gis-map` | Android 412×915 · dual chrome |
| DEM-03 | `specs/mobile-p1/ui/prototype/**/map-oms.js` `initGis` | OMS demo pins / corridor |
| DEM-04 | `specs/gis-map/ui/prototype/{ios,android}/index.html` | pack stub — Design chép dual từ mobile-p1 |
| DI-01 | — | **no Excel** |
| DA-01 | `specs/_data-analy/gis-map-control-hint.md` | controlHint · hash skip |
| DA-02 | `specs/_data-analy/gis-map-bff-endpoints.md` | BFF · `gis/geojson/*` |
| DA-03 | `specs/_data-analy/gis-map-action-tree.md` | 1 map + shared_action |
| DA-04 | `specs/_data-analy/gis-map-real-data.md` | §A+§B bind |
| SCAN | `specs/_form-type-mobile/ACTION-TREE.md` | verify |
| IOS | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.iOS` | native |
| AND | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Android` | native |
| BFF | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Bff` | `mobile-bff/api/v1` proxy |
| BE | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.WebService` | DOMAIN-MAP Gis (+ Asset) · **cấm ERP.*** · **không** `api/v1/gis-map` |
| KIT | `Linm.Mobile.Kit.iOS` + `Linm.Mobile.Kit.Android` | `LinmTopBar` / `LinmChip` / `LinmToast` **đã có** |

**Cấm** cite `mfeStdUrl` / `http://localhost:9301/` trên artifact native. **Cấm** re-scan demo HTML (**GAP-PO-DEMO-RESCAN-01**).

## 5. controlHint (PO chốt — Design map kit · SA map API)

Nguồn `#sc-gis-map` dual + DA-01 + real-data §B. UNCLEAR field = **none**.

| Field | VN | controlHint | Required | Kit (iOS+Android cùng turn) | Notes |
|-------|----|-------------|----------|------------------------------|-------|
| navBack | Tài sản | BackButton | * | `LinmTopBar` leading `#i-chevron-left` | iOS text+chevron · Android icon-only · pop `asset-hub` |
| title | Bản đồ tài sản | NavTitle | * | `LinmTopBar` | fixed |
| navLayers | Lớp | TextButton | * | `LinmTopBar` trailing | **iOS only** · toast P1 · sheet **P2** |
| navList | Danh sách | TextButton | * | `LinmTopBar` trailing | **Android only** · `go('asset-list')` |
| searchHint | Tìm tài sản, sự cố… | SearchField | | overlay glass `#i-search` | **iOS only P1** · local filter / toast · **cấm invent** search API |
| mapHost | Bản đồ GIS overlay OMS | Map | * | MapKit / OSM · `DES-MOB-OMS-GIS` | **cấm** WebView HTML |
| baseOsm | Đường | Chip | * | `LinmChip` | default on · OSM |
| baseEsri | Phố | Chip | * | `LinmChip` | Esri Streets |
| baseSat | Vệ tinh | Chip | * | `LinmChip` | imagery |
| fitAll | Toàn tuyến | Chip | * | `LinmChip` | fit overview |
| lgAll | Tất cả | Chip | * | `LinmChip` | isolate all |
| lgTs | Tài sản | Chip | * | `LinmChip` | isolate `ts` |
| lgSc | Sự cố | Chip | * | `LinmChip` | isolate `sc` |
| lgCorridor | Hành lang | Chip | | `LinmChip` | **iOS only P1** · isolate corridor |
| pinTs | (popup TS) | MapPin | * | pin glyph | geojson / focus |
| pinSc | (popup SC) | MapPin | * | pin glyph | GIS incidents layer |
| toastErr | (lỗi mạng) | Toast | * | `LinmToast` | GET fail · map vẫn mở |

### Entry (parent chrome — không control riêng slug)

| Field | VN | controlHint | Kit | Notes |
|-------|----|-------------|-----|-------|
| tileGis | Xem trên bản đồ | HubTile | `LinmHubTile` `#i-scope` | `asset-hub` · shared_action |
| rowGis | Bản đồ tài sản | ListRow | `LinmListRow` `#i-scope` | cùng slug |
| btnPinMap | Ghim trên bản đồ | PrimaryButton | detail | pass Id/Lat/Lng |
| segMap / CTA | Bản đồ / Xem trên bản đồ | Segment / Secondary | incident | shared_action reuse |

Toast / banner → `LinmToast`. **Cấm** AC implement raw control khi kit đã map.

## 6. BFF (PO chốt path — **cấm** invent)

App `ApiClient.base` = `{BffBase}/mobile-bff/api/v1`. Path **không** lặp prefix. Khớp DA-02 + real-data §B.

| Action / zone | Method | Path | In slug `gis-map`? |
|---------------|--------|------|---------------------|
| Overlay TS / all | GET | `gis/geojson/all` | **yes** |
| Overlay SC | GET | `gis/geojson/incidents` | **yes** — **cấm** `incident/incidents` pin |
| Corridor | GET | `gis/geojson/tuyen-duong` | **yes** · `lod=corridor` OK |
| Type filter (opt) | GET | `gis/geojson/{layerCode}` | **P2** fine filter |
| Layer catalog | GET | `gis/layers` | toast P1 · sheet **P2** |
| Basemap config | GET | `gis/basemap-config` | optional · OMS local P1 OK |
| Focus từ detail | GET | `asset/road-assets/{id}` | **yes** — center Lat/Lng |
| Search overlay | GET | `gis/geojson/*?search=` | iOS optional · **hoặc** local filter |
| Basemap / fit / legend | — | — | local · **không** API |
| Nav back / list | — | — | local · **không** API |
| Clusters / heatmap PCI | GET | `gis/clusters` · `gis/heatmap/pci` | **OUT** P1 |
| Draw CRUD | * | `gis/drawings*` | **OUT** — owner web |
| Asset list | GET | `asset/road-assets` | **OUT** — owner `asset` |

**Cấm** `GET gis-map` · `GisMapMobileController` · DbContext trên Mobile.Bff · app `:5101` · ERP.*.

## 7. Open questions — PO chốt (autoApprove)

| ID | Question | Decision (PO) |
|----|----------|----------------|
| GAP-MOB-GIS-SEARCH-01 | iOS search vs Android thiếu | **P1 dual chrome:** iOS search overlay local filter/toast · Android **không** search P1. Design ghi parity note. **Cấm invent** search API. |
| GAP-MOB-GIS-LAYER-01 | Lớp vs Danh sách | **Dual chrome OK.** iOS **Lớp** toast P1 · sheet **P2**. Android **Danh sách** → `asset-list` reuse. |
| GAP-MOB-GIS-CORRIDOR-LEGEND-01 | Hành lang legend | **iOS có** chip Hành lang · Android **không** chip P1. Corridor polyline load cả hai khi «Tất cả». |
| GAP-MOB-GIS-SC-01 | SC geometry | Overlay SC = **chỉ** `GET gis/geojson/incidents`. **Cấm** invent Lat trên Incident · **cấm** pin từ `incident/incidents`. |
| GAP-MOB-GIS-FOCUS-01 | Focus từ detail | Pass Id → `GET asset/road-assets/{id}` center · thiếu Lat/Lng / fail → fit all + toast optional. **Cấm** fake coords. |
| packKind | data-analy `map` | **Confirm `map`.** **≠** hub/list/web Kind F. **Cấm** Grid/Report AC. |
| Kit map | `LinmMap` kit | **Không** `LinmMap` kit · feature MapKit/OSM · `kit_missing_confirm` **N/A** chrome. |
| Step 4b | new endpoint? | **N/A** — GIS GET + Asset GetById **DONE**. **Cấm invent**. |
| Sibling enqueue | hub/list/detail/incident/patrol | **Không** start · shared_action reuse · **cấm** enqueue basemap/legend/fit (`GAP-MOB-ACT-06/07`). |
| Offline / fail | blank map? | Demo OMS fallback + toast · map **vẫn mở** · **cấm** mock-only ship khi live OK. |
| GAP-PO-STORE-01 | signup / xóa TK | **N/A** — map không signup. |

UNCLEAR field = **none** — không AskQuestion field (autoApprove=ON).

## 8. Screens (REQUIRED)

| Surface | Demo | Pattern | FormMode | Actions **this** `{feature}` | `devSlash` |
|---------|------|---------|----------|------------------------------|------------|
| Bản đồ tài sản | `#sc-gis-map` `DES-MOB-GIS` · OMS `DES-MOB-OMS-GIS` · iOS + Android | **Map full + overlay** (push · không Modal/Sheet) | none (không form) | GET geojson overlay · focus GetById · basemap/legend filter · search iOS · toast Lớp / nav list | `/agent-dev-ios` + `/agent-dev-android` |

**Không** trên pack này: asset list/detail/hub reimplement · draw · heatmap · Twin · Cesium · camera ITS · patrol-map · invent gis-map API · watermark Gói.

Reuse only: `asset-hub` (back · entry) · `asset` list (Android Danh sách) · `asset-detail` / incident (entry shared_action).

Frame: iOS 390×844 · Android 412×915 · safe area · map + overlay không đè notch / home indicator / `LinmTabBar`.

## 9. Device AC (REQUIRED)

| ID | Behavior | AC |
|----|----------|-----|
| AC-D-01 | Offline / GET fail | Map **mở** · demo OMS overlay · toast in-app không chặn · **cấm** full-screen block |
| AC-D-02 | GPS deny | **N/A P1** — không bắt buộc device GPS (focus từ Lat/Lng API / nav args) |
| AC-D-03 | Leave dirty | **N/A** — không form |
| AC-D-04 | Native alert | **Cấm** `UIAlert` / `AlertDialog` / `window.alert`. Mọi phản hồi = `LinmToast` |
| AC-D-05 | Keyboard | iOS search: overlay không đè notch · dismiss không crash · Android N/A |
| AC-D-06 | Safe area | Nav + map + chips + tab không đè notch / home indicator |
| AC-D-07 | Biometric | **N/A** |
| AC-D-08 | Signal | **N/A** trên map |
| AC-D-09 | Token | GET gis/asset Bearer Keychain / Encrypted · app chỉ `{BffPrefix}` |
| AC-D-10 | Tab / swipe | Tab shell **giữ** dưới map · **cấm** invent tab / segment trên map (`GAP-TAB-01`) |
| AC-D-11 | Camera / push | **N/A** trên map |
| AC-F-01 | Entry hub | Tile **Xem trên bản đồ** / row **Bản đồ tài sản** → push `#sc-gis-map` |
| AC-F-02 | Entry detail | **Ghim trên bản đồ** → push + focus Id · center khi có Lat/Lng |
| AC-F-03 | Entry incident | Seg/CTA → push cùng slug · SC pin từ GIS incidents (không IncidentDto Lat) |
| AC-F-04 | Back | Pop `asset-hub` · **cấm** reimplement hub |
| AC-F-05 | Live map | MapKit/OSM live tiles · overlay live khi BFF OK · **cấm** screenshot/gradient-only · **cấm** WebView HTML |
| AC-F-06 | Dual chrome | iOS Lớp + search + Hành lang · Android Danh sách · **cấm** lệch copy zones còn lại (`GAP-MOB-ALIGN-01`) |
| AC-F-07 | Basemap / legend | 4 basemap chips · legend isolate client-side P1 |
| AC-F-08 | Real data | §B bind geojson · **cấm** hardcode pins khi API OK (`GAP-MOB-REAL-01/02`) |
| AC-T-01 | Typography | label/tab **13** · field/search ≥**16** · title 17 |

## 10. Leave / alert (REQUIRED)

| Case | UI |
|------|-----|
| Dirty leave | **Không áp dụng** |
| Geojson / focus fail | Demo fallback + `LinmToast` · **cấm** native alert (`GAP-PO-LEAVE-01`) |
| Lớp tap (iOS) | Toast in-app §3.4 |
| Search (iOS) | Local filter hoặc toast · **cấm** crash |
| Back | Pop hub · không confirm |
| Success load | Không toast bắt buộc · bind pins |

## 11. Out of scope (this pack)

- Asset list / hub / detail / incident **implement** (entry reuse only)
- Draw CRUD · heatmap PCI · clusters · Cesium Twin · camera ITS slideout
- Invent `GET gis-map` / mobile GisMapController / Incident Lat invent
- WebView HTML Leaflet-as-app · fake lat/lng khi API OK
- `patrol-map` gộp · web Kind F 20-action toolbar
- Watermark Gói / device label / proto-click tín hiệu
- Start sibling `pending_confirm` · enqueue basemap/legend/fit/search
- ERP.* · `mfeStdUrl` · Step 4b migration

## 12. KPI (HĐ Gói 1 — màn này)

Bản đồ tài sản = màn hiện trường xem vị trí TS + SC + hành lang trên OMS từ **một** push sau hub/detail/incident. DoD pack: `#sc-gis-map` dual + GET `gis/geojson/*` + focus Asset GetById + map composition — **không** omni-implement list/draw/heatmap trong 1 slug. **DoD «map mở = pin thật»** khi BFF live.

## 13. Handoff → Design

| Field | Value |
|-------|-------|
| feature / packKind | `gis-map` / **`map`** (confirmed) |
| phase_from / phase_to | po **confirmed** → design pending |
| STATUS | `specs/gis-map/STATUS.md` |
| Context / Demo / DI | CTX-01 · DEM dual `#sc-gis-map` · `map-oms.js` · no Excel |
| controlHint / UNCLEAR | §5 · none |
| Screens / Pattern / `devSlash` | Map `#sc-gis-map` · `/agent-dev-ios` + `/agent-dev-android` |
| Grid AC / Report AC | **N/A** — pack map |
| peerStdUrl / reviewUrl | **cấm** `mfeStdUrl` · Design mở dual `file://…/mobile-p1/ui/prototype/{ios,android}/index.html#sc-gis-map` + pack stub `specs/gis-map/ui/prototype/` + reviewUrl **cả hai** |
| ux-analy | `/mobile-ui-ux-analy` → `ui/ux-analy.md` §1–§9 **REQUIRED** trước `design_confirm` |
| Kit | reuse chrome kit · map = feature composition · `kit_missing_confirm` **N/A** · verify dual `LinmTopBar` / `LinmChip` / `LinmToast` |
| BFF | `gis-map-bff-endpoints.md` · real-data §B · **chỉ** `gis/geojson/*` + `asset/road-assets/{id}` |
| Open questions | §7 đã chốt — Design **giữ** dual chrome SEARCH/LAYER/CORRIDOR · **không** vẽ draw/heatmap · SC từ GIS incidents |
| Next AskQuestion | autoApprove=ON — `design_confirm` khi Design xong **cả hai** mock + ux-analy |
| Next slash | `/agent-design-mobile` |
| Chain this turn | **không** (roleOnly=po) |
| e2eQa | ON khi QA · `yarn e2e-qa-mobile` · **cấm** yarn start:std / mfeStdUrl |

Design: HIG + Material · copy VN đúng HTML (trừ dual chrome đã chốt) · **cấm** skin Ministry · packet `design-demo-ssot.md`.

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-po-mobile |
| skillVersion | 2026.08.25.01 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.31.2 |
| rulesVersion | 2026.08.31.2 |
| generatedAt | 2026-08-31T00:45:00.000Z |
| versionGate | rechecked |
| contentHash | sha256:gis-map-control-hint-20260831 |
| bffContentHash | sha256:gis-geojson-proxy-passthrough-20260831 |
| realDataContentHash | sha256:gis-map-real-data-20260831 |
| ctxContentHash | sha256:gis-map-ctx-20260831 |
| demoContentHash | sha256:mobile-p1-sc-gis-map-20260831 |
| taskId | `task_76dabc8f` |

---
<!-- Version meta: skillId=agent-po-mobile skillVersion=2026.08.25.01 schemaVersion=1 workflowVersion=2026.08.31.2 rulesVersion=2026.08.31.2 versionGate=rechecked -->
