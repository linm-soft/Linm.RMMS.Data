# PO — Requirement — web-rmms-patrol-map

| Field | Value |
|-------|-------|
| feature | `web-rmms-patrol-map` |
| title | Bản đồ tuần — chainage GPS · bake tim · nét ca · check-in fields |
| packKind | `map` |
| changeScope | `edit_page` |
| formPattern | Mobile Map / full · phone `max-width: 430px` · check-in peer sheet · **N/A** ERP Modal/Slideout Kind B · **không** master form |
| status | `done` |
| skillId | `agent-po` |
| skillVersion | `2026.09.05.03` |
| schemaVersion | `1` |
| workflowVersion | `2026.09.19.02` |
| rulesVersion | `2026.09.28.3` |
| versionGate | `ok` |
| contentHash | `sha256:52bd4a74401781b03b20ace930fd7d47d9e5ca2c5714b39fc6927f0d4fd6bcaf` |
| writtenAt | `2026-09-30T14:00:00.000Z` |
| taskId | `task_59a25efd` |
| priorBaseline | `task_e0463d5f` new_page · **giữ** chrome PM-00…08 · § Delta only |
| demo | **N/A** · **cấm** demo HTML / OMS mock · **cấm** nhãn `NgheAnPatrolGpsCatalog` «Km 0+000 Nghi Lộc» trên ca thật |
| analy | `specs/_data-analy/features/web-rmms-patrol-map-control-hint.md` · `…-real-data.md` · status=`done` · **hash-skip** · **cấm** re-scan |
| mapGate | `/agent-dev-oms-map` R1–R11 · Fit · line levels · OSRM local |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` · `/ban-do-tuan` |
| mfeStdRoute | `/web-rmms-patrol-map` |
| mfeStdUrl | `http://localhost:9301/web-rmms-patrol-map` |
| be | `D:/AI-QLBD/Linm.RMMS.WebService` · Mobile.Bff `:5202` · `mobile-bff/api/v1` · Patrol + Gis · **cấm ERP.*** · **cấm** Map.Api · **cấm** linm_maps copy |
| handoff next | Design (`ui/design.md` + prototype delta + reviewUrl) · autoApprove=ON |
| autoApprove | ON |

> Labels: `useFormOptions()` / LinmCopy `patrolMap.*` — **cấm** hardcode VN trên UI.  
> **Cấm** nhét phone Map vào MFE desktop · **cấm** sửa iOS/Android native · **cấm** invent Map.Api / public OSRM/Overpass.

---

## 1. Goal / DoD

**Goal (edit_page):** Giữ màn Bản đồ tuần baseline; bổ sung **Ghim → chainage** (ô lý trình editable) · POST check-in với `chainageKm` + `chainageLabel` + GPS thô · nét ca = **tim bake** `routeCode` cắt km · bỏ màu nét hard-code theo tên.

**DoD (PASS khi):**
1. Phone ≤430 · zones **PM-00…10** · Android 1-1 chrome giữ PM-00…08.
2. **Ghim** (PM-09): Geolocation → `GET gis/chainage?lat&lng&route` → fill `chainageKm`/`chainageLabel` **editable** · gap >2km → null + user nhập · format `QL.n - Km {nguyên} + {mét}m`.
3. Check-in (PM-10 / peer sheet): POST body gồm GPS **raw** + `chainageKm` + `chainageLabel` · `planPointLabel` **≠** km · snap **không** ghi đè pin.
4. `fetchLatestKm` đọc **`chainageLabel`** — **cấm** đọc `planPointLabel` làm km.
5. Nét ca = bake centerline OSRM **local** `127.0.0.1:5000/route` · cắt km user · **cấm** màu «Thị B»/«Tuấn» · **cấm** project-osrm · **cấm** Overpass browser.
6. Live: sessions + tiles Mobile.Bff · streets/search = snap **tên** + echo km client only · **cấm** tính lý trình qua streets.
7. Labels via copy · GPS real · **cấm** fake · **cấm** demo Nghi Lộc trên ca thật.
8. Out-of-scope không mount (Leave §).

---

## 2. Screens (PM) — baseline + delta

| Id | Zone | Behavior / AC |
|----|------|---------------|
| PM-00 | phone frame | `max-width: 430px` · center desktop review · Android 1-1 |
| PM-01 | top bar | Back → entry · title Ca đang chạy · trailing **Ghi điểm tuần** → mở check-in peer (sheet) |
| PM-02 | map host | MVT tiles · overlay = **bake centerline** · **cấm** OSM.org world |
| PM-03 | basemap bar | Chip Tiêu chuẩn \| Vệ tinh · locate · deny GPS → disable locate/pin + toast · **cấm** alert |
| PM-04 | legend | Isolate: Tất cả · Hành trình · Đã ghi điểm tuần · Điểm kế tiếp |
| PM-05 | next card | RO · `Route` từ active session · empty OK |
| PM-06 | GPS me-dot | Live fix · **cấm** fake 0,0 |
| PM-07 | locate popup | Vị trí của bạn · lat/lng · cite map-inspect-popup |
| PM-08 | entry | Home `/patrol-map` · Field `/field/map` · Supervise Bản đồ |
| **PM-09** | **pin + chainage** | **NEW** Ghim → `GET gis/chainage` → ô Number/Text editable · KM_POST box · segment clip (Admin/MANAGER no clip) |
| **PM-10** | **check-in fields** | **NEW/enhance** GPS raw RO + chainage* + planPointLabel ≠ km · POST peer sheet |

**reviewUrl:** (Design delta fills · prior baseline `file:///…/ui/prototype/index.html`) · **peerStdUrl:** `http://localhost:9301/web-rmms-patrol-map`

---

## 3. Grid AC / Filter bar

| | |
|--|--|
| DES-GRID / LinErpListFilterBar | **N/A** — phone Map · **không** Kind B desktop grid |
| Map chrome | PM-03…04 chips only |

---

## 4. Report AC

**N/A** — không report/export.

---

## 5. Map AC (packKind=`map` · cite `/agent-dev-oms-map` R1–R11)

| Id | AC |
|----|-----|
| AC-MAP-01 | Fit default trong ca / clip route · **cấm** OSM.org world jump |
| AC-MAP-02 | Basemap Tiêu chuẩn \| Vệ tinh local · MFE clip |
| AC-MAP-03 | Line levels R7b · nét = bake `routeCode` cắt km · **cấm** hard-code màu theo userName |
| AC-MAP-04 | Pin Ghim + me-dot · **không** draw polygon P1 |
| AC-MAP-05 | Bake BE OSRM local `:5000` only · **cấm** public OSRM/Overpass từ browser |
| AC-MAP-06 | Chainage suggest từ bake + KM_POST · gap>2km → null editable |
| AC-MAP-07 | streets/search: name snap + echo client km · **không** overwrite pin/km |
| AC-MAP-08 | GPS deny → disable locate + Ghim · map vẫn mở · **cấm** fake |

---

## 6. Inventory → UX (from analy · hash-skip)

| uiField | controlHint | AC |
|---------|-------------|-----|
| nav.* / title | Button/Text | chrome giữ |
| trailingCheckin | Button | open check-in peer sheet |
| mapHost | Map | tiles + bake overlay |
| basemap.* / locate | Chip/Button | local · GPS |
| legend.* | Chip | isolate |
| next.card | Card RO | GET sessions Đang tuần |
| gps.me / locate.popup | Marker/Popup | Geolocation |
| **pin.here** | Button | → `GET gis/chainage` |
| **chainage.km** | Number | editable · null nếu gap>2km |
| **chainage.label** | Text | editable · `QL.n - Km X + Ym` |
| **plan.point** | Text | **≠** km |
| **gps.raw** | Number RO | persist lat/lng thô |
| **track.line** | MapLine | bake + km cut · no name color |
| **latest.km** | Text RO | `fetchLatestKm` ← **chainageLabel** |

---

## 7. Data / API (PO bind — SA chốt Schema_* + DOMAIN-MAP)

| Surface | Rule |
|---------|------|
| Sessions | `GET patrol/sessions` · filter `Đang tuần` · empty next-card OK · error toast · **cấm** alert |
| Check-ins | GET/POST + **`chainageKm`** + **`chainageLabel`** + GPS raw · Schema_* pair (SA) |
| Chainage | **`GET gis/chainage?lat&lng&route`** · Mobile.Bff proxy (SA confirm path) · user segment clip · Admin/MANAGER no clip |
| Tiles | `gis/tiles/…` · blank → retry · **cấm** OSM.org |
| Streets | `gis/streets/search` · snap tên + echo km · **cấm** tính lý trình |
| Bake | `GisRouteBakeService` · OSRM `127.0.0.1:5000/route` · **cấm** project-osrm |
| fetchLatestKm | đọc **`chainageLabel`** |
| BFF | ONLY Mobile.Bff `:5202` · **cấm** web-bff từ MFE |
| Domain | Patrol + Gis · **cấm ERP.*** · **cấm** Map.Api |

---

## 8. Leave / Out of scope

- `/me*` · feedback · cam-view
- journal / kết ca / tồn tại / tần suất (`web-rmms-mobile-b`…`e`)
- Field 2 cửa deep CRUD — peer Field/A
- Draw / CRUD GIS · asset hub `/gis`
- Map.Api · linm_maps copy · ERP.* / Domains/Master
- Public OSRM / Overpass browser · invent tracks controller ngoài DOMAIN-MAP
- Sửa native iOS/Android · demo Nghi Lộc labels trên ca thật
- Hard-code màu nét theo tên user

---

## 9. Persona

| Ai | Việc |
|----|------|
| NV tuần đường (BDTX) | Ghim · xác nhận lý trình · ghi điểm · xem nét bake |
| Cán bộ QLĐB / giám sát | RO ca · Admin/MANAGER không cắt segment |

---

## 10. Open questions → Design / SA (autoApprove PO decide where possible)

| Id | Owner | PO decision / note |
|----|-------|--------------------|
| UNCLEAR-CHAINAGE-BFF | SA | Proxy `mobile-bff/api/v1/gis/chainage` · auth peer Gis tiles — **SA chốt** path/auth |
| UNCLEAR-SCHEMA-PAIR | SA | Schema_* CLI pair `chainageKm`/`chainageLabel` trên check-in entity — **SA chốt** name |
| UNCLEAR-TRACK-STYLE | Design | Sau bỏ hard-code tên: **mặc định 1 màu token route/track** (peer legend Hành trình) · **không** per-userName palette — Design chốt hex/token |
| (closed) UNCLEAR-DOMAIN-MAP-PATROL-MAP | — | Baseline review done · SA extend row chainage only |
| (closed) UNCLEAR-OVERLAY-GEOM | — | Overlay = bake centerline (không invent tracks API) |

---

## 11. Handoff Design

1. Phone 430 · **delta PM-09/10** · ô chainage Number/Text · GPS raw RO · reviewUrl delta (giữ baseline prototype path nếu edit in-place).
2. Track style: 1 token màu route · **bỏ** «Thị B»/«Tuấn».
3. Copy keys `patrolMap.chainage*` · no hardcode VN.
4. Map gate R1–R11 cite · Fit/lines · basemap clip.
5. **Không** implement / e2e / start:std ở role PO · next SA sau Design.

---

## Version meta

`skillVersion=2026.09.05.03` · `schemaVersion=1` · `contentHash=sha256:52bd4a74401781b03b20ace930fd7d47d9e5ca2c5714b39fc6927f0d4fd6bcaf` · `rulesVersion=2026.09.28.3` · `writtenAt=2026-09-30T14:00:00.000Z` · `taskId=task_59a25efd` · `changeScope=edit_page` · `packKind=map`
