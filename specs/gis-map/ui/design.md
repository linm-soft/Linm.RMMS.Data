# Design — gis-map (mobile map · Bản đồ tài sản)

| Field | Value |
|-------|-------|
| feature | `gis-map` |
| title | [Design] [Mobile] [Tài sản] -> Xem trên bản đồ |
| this role | `design` · `/agent-design-mobile` |
| status | `confirmed` (autoApprove=ON) |
| design_confirm | **approve** (`task_81ce36d6`) |
| changeScope | `new_page` |
| packKind | **`map`** (PO confirm) |
| stack | `native_dual` |
| kit_missing_confirm | **N/A** — chrome kit đã có · map = feature MapKit / OSM composition (**cấm** `LinmMap` kit · **cấm** WebView HTML) |
| reviewUrlIos | `file:///Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/gis-map/ui/prototype/ios/index.html#sc-gis-map` |
| reviewUrlAndroid | `file:///Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/gis-map/ui/prototype/android/index.html#sc-gis-map` |
| ux-analy | `ui/ux-analy.md` §1–§9 |
| demo-parity | `ui/review/demo-parity.md` · Must **closed** |
| prior · po | `confirmed` · `po/requirement.md` · contentHash `sha256:gis-map-control-hint-20260831` · bffContentHash `sha256:gis-geojson-proxy-passthrough-20260831` · realData `sha256:gis-map-real-data-20260831` |
| prior · data_analy | `confirmed` · `_data-analy/gis-map-control-hint.md` · `gis-map-real-data.md` · **hash skip** · **cấm** re-scan (`GAP-DES-DEMO-RESCAN-01`) |
| autoApprove | **ON** |
| e2eQa | ON khi QA · `yarn e2e-qa-mobile` · **cấm** `yarn start:std` / `mfeStdUrl` |
| updatedAt | `2026-08-31T00:40:00.000Z` |
| taskId | `task_81ce36d6` |

## 0. Context & Demo

| ID | Path | Notes |
|----|------|-------|
| CTX-01 | `docs/context/features/gis-map.md` | map · §2 UI · §3 API · gaps |
| CTX-02 | `docs/context/features/gis.md` | domain Gis peer |
| CTX-03 | `docs/context/features/asset-hub.md` | parent entry tile/row |
| CTX-04 | `docs/context/features/asset-detail.md` | CTA Ghim · focus Id |
| DEM-P1 | `specs/mobile-p1/ui/prototype/{ios,android}/index.html` `#sc-gis-map` | visual SSOT · inventory từ DA — **không** re-scan |
| DEM | `specs/gis-map/ui/prototype/{ios,android}/index.html` `#sc-gis-map` | board dual · chép từ mobile-p1 |
| MAP | `ui/html-to-native-map.md` | kit topbar/chip/pin/toast |
| STR | copy VN từ DA controlHint + PO §5 | |
| DA | `_data-analy/gis-map-control-hint.md` · `gis-map-bff-endpoints.md` · `gis-map-action-tree.md` · `gis-map-real-data.md` | hash skip |
| PO | `po/requirement.md` | §5 controlHint · §7 dual chrome chốt |

**Cấm** `mfeStdUrl` / `yarn start:std` / WebView HTML-as-app / ERP.* / watermark Gói / device label.  
**Hash skip:** inventory + controlHint + real-data §A+§B từ DA — **cấm** re-scan demo HTML / crawl CTX (`GAP-DES-DEMO-RESCAN-01`).

## 1. Pattern

| | |
|--|--|
| Surface | Push map full · nav + OMS host + basemap bar + legend · **không** Modal/Sheet |
| FormMode | none |
| Action this slug | Appear GET `gis/geojson/*` · focus GetById · basemap/legend filter · search iOS · toast Lớp / nav list |
| `devSlash` | `/agent-dev-ios` + `/agent-dev-android` |
| Frame | iOS 390×844 · Android 412×915 · safe area · Tab 5 **giữ** dưới map (`data-tab="home"`) |

## 2. Screens / DES-MOB-*

| DES / sc-* | Tên VN | Zones | CTA |
|------------|--------|-------|-----|
| `DES-MOB-GIS` `#sc-gis-map` | Bản đồ tài sản | Nav · map · search(iOS) · bar · legend · tab | overlay · toast · pop |
| `DES-MOB-OMS-GIS` | OMS host | pins TS/SC · corridor polyline | isolate / basemap |
| `DES-MOB-TABBAR` | Tab 5 | shell dưới map · home selected | **cấm** invent |

### IA lock

```
(auth) Login → Tab 5
  Trang Chủ → asset-hub
    tile Xem trên bản đồ / row Bản đồ tài sản → push #sc-gis-map DES-MOB-GIS   ← this pack
    asset-detail Ghim trên bản đồ → push + focus Id
    incident seg/CTA → push cùng slug
      ← back pop asset-hub
      → iOS Lớp = toast P1 · Android Danh sách = go('asset-list') reuse
      → basemap ×4 · legend isolate = filter cùng slug
  Tab 5 shell giữ (home selected)
```

**Cấm** invent tab (`GAP-TAB-01`) · «Có mạng» · watermark Gói · device label · native alert · draw/heatmap/Twin trên slug.

## 3. Field inventory (kit dual)

Nguồn: DA controlHint + real-data §B + PO §5 · UNCLEAR = **none**.

| Field | VN | controlHint | Required | Kit dual | Notes |
|-------|----|-------------|----------|----------|-------|
| navBack | Tài sản | BackButton | * | `LinmTopBar` leading `#i-chevron-left` | iOS text+chevron · Android icon-only · pop `asset-hub` |
| title | Bản đồ tài sản | NavTitle | * | `LinmTopBar` | fixed · dual same |
| navLayers | Lớp | TextButton | * | `LinmTopBar` trailing | **iOS only** · toast «Lớp tài sản / sự cố · chú giải» P1 · sheet **P2** |
| navList | Danh sách | TextButton | * | `LinmTopBar` trailing | **Android only** · `go('asset-list')` reuse |
| searchHint | Tìm tài sản, sự cố… | SearchField | | overlay glass `#i-search` | **iOS only P1** · local filter / toast · **cấm invent** search API |
| mapHost | Bản đồ GIS overlay OMS | Map | * | MapKit / OSM · `DES-MOB-OMS-GIS` | **cấm** WebView HTML · **cấm** `LinmMap` kit |
| baseOsm | Đường | Chip | * | `LinmChip` | default on · OSM |
| baseEsri | Phố | Chip | * | `LinmChip` | Esri Streets |
| baseSat | Vệ tinh | Chip | * | `LinmChip` | imagery |
| fitAll | Toàn tuyến | Chip | * | `LinmChip` | fit overview |
| lgAll | Tất cả | Chip | * | `LinmChip` | isolate all |
| lgTs | Tài sản | Chip | * | `LinmChip` | isolate `ts` |
| lgSc | Sự cố | Chip | * | `LinmChip` | isolate `sc` |
| lgCorridor | Hành lang | Chip | | `LinmChip` | **iOS only P1** · Android không chip (corridor vẫn load khi Tất cả) |
| pinTs | (popup TS) | MapPin | * | pin glyph `#i-scope` | geojson / focus |
| pinSc | (popup SC) | MapPin | * | pin glyph | GIS incidents layer only |
| toastErr | (lỗi mạng) | Toast | * | `LinmToast` | GET fail · map vẫn mở |

### Entry (parent — shared_action · không control riêng slug)

| Field | VN | Kit | Notes |
|-------|----|-----|-------|
| tileGis | Xem trên bản đồ | `LinmHubTile` `#i-scope` | `asset-hub` |
| rowGis | Bản đồ tài sản | `LinmListRow` `#i-scope` | cùng slug |
| btnPinMap | Ghim trên bản đồ | PrimaryButton | detail · pass Id/Lat/Lng |
| segMap / CTA | Bản đồ / Xem trên bản đồ | Segment / Secondary | incident reuse |

Toast → `LinmToast`. **Cấm** AC implement raw control khi kit đã map (`GAP-MOB-ACT-05`).

## 4. Tokens

Same SSOT `docs/mobile-tokens.json` · primary `#0C84C0` · success `#3CB448` · warn `#FCB43C`.  
Legend dots (demo): All `#0C84C0` · TS iOS `#5856D6` / Android `#6750A4` · SC iOS `#FF3B30` / Android `#D32F2F` · Corridor `#5AC8FA`.

**Cấm** skin Ministry / CCCD.

## 5. Copy VN (SSOT máy)

Bản đồ tài sản · Tài sản · Lớp · Danh sách · Tìm tài sản, sự cố… · Đường · Phố · Vệ tinh · Toàn tuyến · Tất cả · Tài sản (legend) · Sự cố · Hành lang · Xem trên bản đồ · Ghim trên bản đồ.

Toast iOS Lớp: **Lớp tài sản / sự cố · chú giải**.

Popup fallback SSOT: **TS-20260810-014 · Cống ngang · QL.1 Km 1556+000** · **SC-2401 · Nứt mặt đường · QL.1 Km 1556+080**.

**Cấm trên máy:** Check-in · GPS · Offline chrome · Có mạng · P1/P2 · watermark Gói · «· iPhone» / «· Android» · invent search API label.

## 6. Icon `#i-*`

| Id | Use | SF ↔ Material |
|----|-----|----------------|
| `#i-chevron-left` | back | chevron.left ↔ ArrowBack |
| `#i-search` | search overlay (iOS) | magnifyingglass ↔ Search |
| `#i-scope` | hub tile/row · map pin motif | scope ↔ TravelExplore / Place |

**Cấm** invent `#i-*` · Material Filled-only 1 OS.

## 7. Type / pad

| Role | Size |
|------|------|
| Nav title | **17** |
| Chip / legend | **13** (`GAP-TYP-01`) |
| Search hint | **15** overlay (demo) · field native **≥16** khi editable |
| Tab label | **13** |

Safe area: nav + map + chips + tab không đè notch / home indicator.

## 8. States

| State | UI |
|-------|-----|
| default | overlay live/demo OMS · Đường on · Tất cả on |
| isolate ts/sc/corridor | legend filter client (corridor isolate **iOS only**) |
| GET geojson fail / offline | map **mở** · demo `GIS_ASSETS` + corridor · `LinmToast` · **cấm** blank dead map · **cấm** mock-only ship khi live OK |
| focus từ detail | GetById Lat/Lng → center + highlight · thiếu/fail → fit all · toast optional · **cấm** fake lat/lng |
| Lớp tap (iOS) | toast in-app · **cấm** sheet P1 · **cấm** alert |
| search (iOS) | local filter pin/popup hoặc toast · **cấm** crash · **cấm invent** API |
| Danh sách (Android) | `go('asset-list')` reuse · **cấm** reimplement list |
| back | pop hub · không confirm |

## 9. BFF (Design cite — SA map)

App `{BffBase}/mobile-bff/api/v1` · path **không** lặp prefix. Khớp DA-02 + real-data §B:

| Zone | Method | Path |
|------|--------|------|
| Overlay TS / all | GET | `gis/geojson/all` |
| Overlay SC | GET | `gis/geojson/incidents` — **cấm** `incident/incidents` pin |
| Corridor | GET | `gis/geojson/tuyen-duong` |
| Focus | GET | `asset/road-assets/{id}` |
| Layers catalog | GET | `gis/layers` — toast P1 · sheet **P2** |
| Basemap / fit / legend | — | local |

**Cấm** invent `gis-map` controller · Step 4b **N/A** (GIS GET + Asset GetById **DONE**).

## 10. Out of scope (board)

- Asset list / hub / detail / incident **implement** (entry reuse only)
- Draw CRUD · heatmap PCI · clusters · Cesium Twin · camera ITS · patrol-map gộp
- Invent `GET gis-map` · Incident Lat invent · WebView Leaflet-as-app
- Fake lat/lng khi API OK · hardcode `GIS_ASSETS` khi live OK (`GAP-MOB-REAL-02`)
- Invent tab · watermark Gói · device label · native alert
- Enqueue basemap/legend/fit/search sibling (`GAP-MOB-ACT-06/07`)
- Start sibling `pending_confirm`

## 11. Handoff → SA

| Field | Value |
|-------|-------|
| feature / packKind | `gis-map` / **`map`** |
| phase_from / phase_to | design **confirmed** → sa pending |
| STATUS | `specs/gis-map/STATUS.md` |
| reviewUrl | dual `file://…/prototype/{ios,android}/index.html#sc-gis-map` |
| ux-analy / demo-parity | §1–§9 · Must đóng |
| Kit | reuse chrome · map feature composition · `kit_missing_confirm` **N/A** |
| BFF | `gis/geojson/*` + `asset/road-assets/{id}` · Step 4b **N/A** |
| Dual chrome | SEARCH/LAYER/CORRIDOR giữ PO §7 |
| Next AskQuestion | autoApprove=ON — `solution_confirm` khi SA xong |
| Next slash | `/agent-sa-mobile` |
| Chain this turn | **không** (roleOnly=design · **GAP-PKT-ROLE-01**) |
| e2eQa | ON khi QA · `yarn e2e-qa-mobile` · **cấm** yarn start:std / mfeStdUrl |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-design-mobile |
| skillVersion | 2026.08.25.01 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.31.2 |
| rulesVersion | 2026.08.31.2 |
| generatedAt | 2026-08-31T00:40:00.000Z |
| versionGate | rechecked |
| contentHash | sha256:gis-map-control-hint-20260831 |
| bffContentHash | sha256:gis-geojson-proxy-passthrough-20260831 |
| realDataContentHash | sha256:gis-map-real-data-20260831 |
| ctxContentHash | sha256:gis-map-ctx-20260831 |
| demoContentHash | sha256:mobile-p1-sc-gis-map-20260831 |
| taskId | `task_81ce36d6` |

---
<!-- Version meta: skillId=agent-design-mobile skillVersion=2026.08.25.01 schemaVersion=1 workflowVersion=2026.08.31.2 rulesVersion=2026.08.31.2 versionGate=rechecked -->
