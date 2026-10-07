# Design — web-rmms-patrol-map

| Field | Value |
|-------|-------|
| feature | `web-rmms-patrol-map` |
| title | Bản đồ tuần — chainage GPS · bake tim · nét ca · check-in sheet |
| this role | `design` · `/agent-design` |
| status | `confirmed` (autoApprove=ON · `design_confirm=approve`) |
| design_confirm | **approve** (`task_71842b2a`) |
| changeScope | `edit_page` |
| packKind | **`map`** · UI = phone Map ≤430 · **≠** Kind B desktop |
| lane | `web` |
| stack | `web_mfe_phone` · `Linm.Web.RMMS.Mobile` · `max-width: 430px` |
| formPattern | Mobile **Map / full** · check-in **peer sheet** (PM-10) · **không** ERP Modal Kind B |
| DES-GRID / LinErpListFilterBar | **N/A** — phone Map |
| Report AC / DES-RPT | **N/A** |
| shared_grid_example | **N/A** |
| real_view_parity | **v1** |
| peerStdUrl | `http://localhost:9301/web-rmms-patrol-map` |
| mfeStdUrl | `http://localhost:9301/web-rmms-patrol-map` |
| mfeStdRoute | `/web-rmms-patrol-map` |
| nativeRouteCite | SCREENS `/patrol-map` · `/field/map` |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-patrol-map/ui/prototype/index.html` |
| demo | **N/A** · hash skip · **cấm** re-scan (**GAP-DES-DEMO-RESCAN-01**) |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` · `/ban-do-tuan` |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · Patrol+Gis · Mobile.Bff `:5202` · **cấm ERP.*** · **cấm** Map.Api |
| mapGate | `/agent-dev-oms-map` **R1–R11** · Fit · line levels · OSRM local bake |
| controlHint | `specs/_data-analy/features/web-rmms-patrol-map-control-hint.md` |
| realData | `specs/_data-analy/features/web-rmms-patrol-map-real-data.md` · §A+§B+§D PASS |
| prior | PO `confirmed` · `handoff/po-compact.md` · contentHash `sha256:52bd4a74401781b03b20ace930fd7d47d9e5ca2c5714b39fc6927f0d4fd6bcaf` |
| baseline | keep PM-00…08 · **§ Delta** PM-09/10 + bake track |
| autoApprove | **ON** |
| e2eQa | ON queued `/agent-qa*` · **cấm** e2e / `yarn start:std` ở Design |
| `devSlash` | `/agent-dev` · map `/agent-dev-oms-map` |
| updatedAt | `2026-09-30T14:10:00.000Z` |
| taskId | `task_71842b2a` |
| skillId | `agent-design` |
| skillVersion | `2026.09.05.03` |
| schemaVersion | `1` |
| workflowVersion | `2026.09.19.02` |
| rulesVersion | `2026.09.28.3` |
| versionGate | `ok` |
| contentHash | `sha256:52bd4a74401781b03b20ace930fd7d47d9e5ca2c5714b39fc6927f0d4fd6bcaf` |

**Cấm:** Dev/BE trước confirm (đã autoApprove) · ERP.* · Map.Api · public OSRM/Overpass · màu nét theo tên (Thị B/Tuấn) · demo Nghi Lộc trên ca thật · `LinErpListFilterBar` · DES-GRID · fake GPS · hardcode label ngoài `useFormOptions` · native `alert`/`confirm` · re-scan demo · `yarn build` / e2e / start:std · OSM.org world · invent Map.Api.

## 0. Context / Demo

| ID | Path | Notes |
|----|------|-------|
| CTX-01 | `docs/context/features/web-rmms-patrol-map.md` | § Delta edit_page |
| DEM | — | **N/A** · hash skip |
| DA-01 / DA-02 | `_data-analy/features/web-rmms-patrol-map-{control-hint,real-data}.md` | inventory + §B+§D |
| PO | `po/requirement.md` · `handoff/po-compact.md` | AC-MAP-01…08 · PM-00…10 |
| tokens | `docs/mobile-tokens.json` | primary `#0C84C0` · phone 430 |

## 1. Pattern & ownership

| | |
|--|--|
| Frame | Phone **430px** · primary `#0C84C0` · label **13** · field **≥16** |
| Map owns | **PM-00…10** · tiles · bake overlay · basemap · locate · legend · next-card · me-dot · Ghim→chainage · check-in sheet |
| Peer owns | Home `/patrol-map` · Field `/field/map` · Supervise · journal/kết ca · shell |
| Track color | **`--track-route: #0A84FF`** · 1 route token · **cấm** màu theo userName (**UNCLEAR-TRACK-STYLE chốt**) |
| DES-LEAVE | Sheet dirty → **LeaveConfirmModal** peer (cấm native) · Map chrome alone N/A |
| Out | `/me*` · ERP.* · Map.Api · public OSRM · name color · demo Nghi Lộc |

## 2. Screens / zones

| Zone | Route | Surface | Wire |
|------|-------|---------|------|
| **PM-00** | phone | Frame | max-width 430 |
| **PM-01** | top bar | Header | navBack · title · trailing → **open PM-10 sheet** |
| **PM-02** | map host | Map | MVT + **bake centerline** overlay · track `--track-route` |
| **PM-03** | basemap bar | Chips+Button | Tiêu chuẩn · Vệ tinh · **Ghim** · locate · **cấm** Fit/Đường/Phố |
| **PM-04** | legend | Chips | isolate · track color = route token |
| **PM-05** | next card | Card RO | `planPointLabel` (**≠ km**) · stamp `fetchLatestKm`←**`chainageLabel`** |
| **PM-06** | GPS me-dot | MapMarker | Geolocation · deny → hide · **cấm** fake |
| **PM-07** | locate popup | Popup | Vị trí của bạn · GPS |
| **PM-08** | entry | Nav in | Home · Field · Supervise |
| **PM-09** | pin+chainage | Strip+Pin | Ghim → `GET gis/chainage` → `chainageKm` Number + `chainageLabel` Text editable · gap>2km null · snap ≠ overwrite pin |
| **PM-10** | check-in | Peer sheet | `planPointLabel` · `chainageKm` · `chainageLabel` · GPS raw RO · POST + chainage* |

### Overlay geom (delta)

| Rule | Design |
|------|--------|
| Track polyline | Bake `routeCode` cắt km user · stroke **`#0A84FF`** · **cấm** màu theo tên |
| Bake underlay | Corridor tim OSRM local (BE) · empty bake → no nét |
| Done / next pins | Session Live · check-in pins từ API |
| Pin Ghim | User confirm · GPS raw persist · snap name only (streets/search) ≠ overwrite pin |
| Demo labels | **cấm** `NgheAnPatrolGpsCatalog` / «Km 0+000 Nghi Lộc» |

### IA

```
(auth) → PM-00 + PM-01 (back/title/open sheet)
  + PM-02 map (tiles + bake track #0A84FF)
  + PM-03 basemap + Ghim + locate
  + PM-04 legend
  + PM-05 next-card (planPointLabel ≠ km · stamp chainageLabel)
  + PM-06 me-dot | hide deny
  + PM-07 locate popup
  + PM-09 Ghim → chainage strip editable
  + PM-10 check-in sheet POST+chainage*+GPS raw
Entry PM-08: Home / Field / Supervise
```

## 3. Field inventory (Control = controlHint)

| uiField | screen | controlHint | Required | Bind / notes |
|---------|--------|-------------|----------|--------------|
| phoneFrame | PM-00 | Layout | * | max-width 430 |
| navBack | PM-01 | Button/Nav | * | entry peers |
| title | PM-01 | Text RO | * | `patrolMap.title` |
| trailingCheckin | PM-01 | Button | * | open PM-10 sheet |
| mapHost | PM-02 | Map | * | MVT + bake overlay |
| basemapStd/Sat | PM-03 | Chip | * | local clip · **cấm** OSM.org |
| locateMe | PM-03 | Button | * | Geolocation |
| pinHere / Ghim | PM-09 | Button | * | Geo → `GET gis/chainage` |
| chainageKm | PM-09/10 | Number | * | editable · null nếu gap>2km |
| chainageLabel | PM-09/10 | Text | * | editable · `QL.n - Km X + Ym` |
| planPointLabel | PM-10 | Text | * | **≠** km · điểm KH |
| gpsRawLatLng | PM-10 | Number RO | * | persist raw · snap ≠ overwrite |
| trackLine | PM-02 | MapLine | * | bake · token `#0A84FF` · **cấm** name color |
| fetchLatestKm | PM-05 | Text RO | * | đọc **`chainageLabel`** |
| legend.* | PM-04 | Chip | * | isolate |
| nextCard | PM-05 | Card RO | * | GET sessions |
| gpsMe | PM-06 | MapMarker | * | live · **cấm** fake |
| locatePopup | PM-07 | Popup | * | map-inspect-popup |

**Labels:** `useFormOptions()` / `patrolMap.*` — **cấm** hardcode VN ngoài copy keys.  
**GPS:** real Geolocation · deny → disable Ghim/locate · **cấm** fake.

## 4. Prototype (REQUIRED)

| | |
|--|--|
| Artifact | `ui/prototype/index.html` |
| Zones | **PM-00…PM-10** |
| Form | check-in peer sheet PM-10 · Map full |
| Grid/filter desktop | **N/A** |
| SSOT | `design-prototype-review` · `design-real-view-parity` · control-hint · `/agent-dev-oms-map` R1–R11 |
| **reviewUrl** | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-patrol-map/ui/prototype/index.html` |
| **peerStdUrl** | `http://localhost:9301/web-rmms-patrol-map` |
| **real_view_parity** | `v1` |

### Wire

```
PM-00: phoneFrame 430
PM-01: [‹] title [Ghi điểm tuần → PM-10]
PM-02: map + bake track #0A84FF
PM-03: [Tiêu chuẩn][Vệ tinh][Ghim][Vị trí của tôi]
PM-04: legend isolate (track = route token)
PM-05: planPointLabel ≠ km · stamp chainageLabel
PM-06: me-dot · deny ẩn
PM-07: popup Vị trí của bạn
PM-08: entry peers
PM-09: Ghim → chainageKm/Label editable · gap>2km null
PM-10: sheet planPoint + chainage* + GPS raw · Lưu POST
Board: Live+bake | Ghim→chainage | Gap>2km | Check-in sheet | GPS deny | Empty
```

## 5. API map (cite real-data §B)

| Action | API |
|--------|-----|
| Active session | `GET mobile-bff/api/v1/patrol/sessions` |
| Check-in POST | POST check-in + **chainageKm/Label** + GPS raw |
| Chainage | **`GET gis/chainage?lat&lng&route`** (SA BFF path) |
| Tiles | `GET …/gis/tiles/…` · clip · **cấm** OSM.org |
| streets/search | snap **tên** + echo km client · **không** tính lý trình |
| Bake read | BE OSRM local `127.0.0.1:5000/route` · **cấm** project-osrm |
| Basemap / legend | local / client |
| GPS | Geolocation · no invent |

**BFF:** Mobile.Bff `:5202` · **cấm ERP.*** · **cấm** Map.Api.  
Empty/error → toast · map mở · **cấm** `window.alert`.

## 6. Map gate DES checklist (R1–R11 cite)

| ID | Result |
|----|--------|
| DES-A zones PM-00…10 | **PASS** |
| DES-B control = controlHint | **PASS** |
| DES-C prototype + reviewUrl | **PASS** |
| DES-D Leave dirty sheet | LeaveConfirmModal peer · **cấm** native |
| DES-GRID / DES-RPT | **N/A** phone Map |
| real_view_parity | **v1** |
| R1–R11 / AC-MAP-01…08 | **PASS** (Design surface) |
| UNCLEAR-TRACK-STYLE | **chốt** `#0A84FF` · 1 route token |
| Hash skip / no demo rescan | **PASS** |

## 7. UNCLEAR (carry → SA)

| id | Action |
|----|--------|
| UNCLEAR-CHAINAGE-BFF | SA Mobile.Bff proxy `gis/chainage` + auth |
| UNCLEAR-SCHEMA-PAIR | SA Schema_* `chainageKm`/`chainageLabel` |
| UNCLEAR-TRACK-STYLE | **Design done** → `#0A84FF` |

## 8. Handoff

| Role | Need |
|------|------|
| SA | Schema_* · `GET gis/chainage` · DOMAIN-MAP · bake OSRM local · segment clip |
| TL | T-UI Ghim/chainage/sheet · T-BE Schema+chainage+bake · T-FE fetchLatestKm |
| Dev | Mobile MFE + RMMS WebService · Step 4d/4m map · token track |
| QA | gap>2km · Admin no clip · streets/search không đổi km · no public OSRM · no name color |

| Field | Value |
|-------|-------|
| phase_from / phase_to | design **confirmed** → sa pending |
| Next slash | `/agent-sa` |
| Chain this turn | **không** (roleOnly=design · GAP-PKT-ROLE-01) |

Ghim trên bản đồ: Tuyến bắt buộc. Tiếp tục mở ca theo tuyến đã chọn nếu chưa có ca, không toast «Chưa có ca đang chạy». Không có tuyến gần vị trí: hiện tuyến ca đang mở, không có thì điểm tuần mới nhất trong ngày. «Ca đang tuần» liệt kê mọi ca đang chạy; bấm một ca điền tuyến ca đó.

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-design |
| skillVersion | 2026.09.05.03 |
| schemaVersion | 1 |
| workflowVersion | 2026.09.19.02 |
| rulesVersion | 2026.09.28.3 |
| generatedAt | 2026-09-30T14:10:00.000Z |
| versionGate | ok |
| contentHash | sha256:52bd4a74401781b03b20ace930fd7d47d9e5ca2c5714b39fc6927f0d4fd6bcaf |

---
<!-- Version meta: skillId=agent-design skillVersion=2026.09.05.03 schemaVersion=1 workflowVersion=2026.09.19.02 rulesVersion=2026.09.28.3 versionGate=ok -->
