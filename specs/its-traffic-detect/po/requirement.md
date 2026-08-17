# PO — its-traffic-detect (ITS phát hiện biển báo / cọc tiêu)

| Field | Value |
|-------|-------|
| feature | `its-traffic-detect` |
| changeScope | `edit_page` (MFE route + page đã có · packet Autopilot · **không** AskQuestion) |
| packKind | `ai` (packet ghi `list` · PO **confirm** = `ai` — Kind B + D + F) |
| featureClass | `ai` — Kind **B** catalog list + Kind **D** slideout HITL + Kind **F** map overlay |
| requestSource | scan/run packet `task_4b473f28` · `/agent-qldb-workflow` · `/agent-po` · roleOnly=`po` · Autopilot ON · autoApprove **OFF** · e2eQa **OFF** |
| status | `done` |
| controlHint | `specs/_data-analy/features/its-traffic-detect-control-hint.md` |
| contentHash (data-analy) | `sha256:E91426CE28303135A824CCDD5012AE64466FE2DB50A6C05FBC5F2A0E8F458526` |
| skillVersion | `2026.08.15.17` |
| schemaVersion | `1` |
| workflowVersion | `2026.08.16.02` |
| rulesVersion | `2026.08.16.05` |
| versionGate | `ok` |
| grid_standard | `po-design-grid-standard` |
| slideout_layout | `footer_actions_only` |
| leave_standard | `LeaveConfirmModal` · `/implement-show-leave-confirm` |
| list_config | **FULL** · `LinCatalogUiSchemaEditorModal` · **cấm** Zone F-only / `configHint` / `LinListTableConfigModal` |
| updatedAt | `2026-08-17T10:12:00.000Z` |

> **DOMAIN-MAP:** slug `its-traffic-detect` → **AiVision** · API **`api/v1/ai-vision/its/*`** (normalize legacy `/api/v1/its/*`). **Cấm ERP.***  
> **≠** `ai-vision` (ổ gà / Incident) · `ai-asset-detect` (taxonomy rộng · dedupe **25 m**) · `its-anpr-overload` (biển số) · `toc` (ùn tắc).  
> **Cấm** badge/tag `AI` / P1/P2 chrome trên header / `beforeToolbar` (`ai-chrome-skip` · **GAP-AI-DETECT-CHROME**).

## 1. Goal

Align demo **ITS biển báo / cọc tiêu** (edge/mock detect → candidate → dedupe **10 m** → HITL Confirm → Asset · map pins) → MFE `Linm.Web.RMMS.AiVision` route `/its-traffic-detect` (+ alias `/ai-vision/its-traffic-detect`) + BE `Linm.RMMS.WebService` domain **AiVision**.

Kind B catalog parity (`/erp-form-context` · `/ai-form-context`): 1× `LinPageLayout` · toolbar · search **work** · `LinCatalogDataGrid` (kéo cột default ON) · footer `LinCatalogListPagination` · row menu · View/Create/Edit/Copy/Delete. Kind D slideout **footer actions only** · leave-confirm dirty · HITL Confirm/Dismiss. Kind F map: pin existing / Draft / nearby / Confirmed · OSM/Esri/Fit. IdCode `ITS-YYYYMMDD-NNNN`.

## 2. Current → New (edit_page)

| Layer | Current | New (delta) |
|-------|---------|-------------|
| Demo | Kind B+D+F Signed · localStorage · seed QL.1 · 4 candidates + 3 existing Asset pins · dedupe **10 m** · tracks patrol/dashcam | Giữ UX SSOT; **không** clone chrome GOVOne / demo checklist khách trên UI end-user |
| MFE | `ItsTrafficDetectListPage` · routes `/its-traffic-detect` · `/ai-vision/its-traffic-detect` · local store fallback | Parity controlHint: Config **FULL** ui-schema · leave-confirm · **không** AI badge header · taxonomy chỉ `bien_bao`/`coc_tieu` · nearby **10 m** |
| MFE form | Kind D slideout C/E/V/Copy · Confirm/Dismiss | Footer actions only · frame preview · nearby + low-score banners · HITL Confirm modal SearchInput `asset-type` |
| API client | `api/v1/ai-vision/its/objects` (+ detect) · local fallback | Giữ prefix AiVision · BFF proxy · init-data · nearby |
| BE | AiVision its objects (prior implement) · DOMAIN-MAP slug **có** | SA verify entity/migration/perm · **cấm** ERP.* · **cấm** bare `/api/v1/its/*` without AiVision |
| Persist | Demo localStorage → API + local fallback P1 | Confirm → Asset `source=its-traffic-detect` · mã `TS-AI-YYYYMMDD-NNNN` |

## 3. Personas / DoD

- Persona: Tuần đường · GIS · ITS ops
- DoD P1 (đo được):
  1. List load + **search work** (id `ITS-*` · class · tuyến · device · note · model · assetCode)
  2. Filters Zone B: `routeId` SearchInput (road-route) · `objectClass` · `source` · `status` · `engine` · `fromDate`/`toDate` — search chỉ khi **Tìm** / applied filter
  3. Toolbar: **+ Tạo** · sim Mobile/Dashcam/CCTV · Nearby 10m · Refresh · Export stub · Reset seed (dev) · History · config `fa-cog` (**FULL ui-schema**) · **không** badge AI trên header
  4. Row menu: Xem · Sửa · Sao chép · Confirm · Dismiss · Lịch sử · Xóa
  5. View = `readOnly` (không disabled xám)
  6. Create/Edit/Copy validate + save Draft · **leave-confirm** dirty (`LeaveConfirmModal`)
  7. Confirm modal HITL: SearchInput `asset-type` * · map `bien_bao`→`GANTRY_SIGN` · `coc_tieu`→`DELINEATOR` · tạo Asset
  8. Nearby cùng class: **10 m** Haversine (demo) / PostGIS (prod) banner · **không** auto-create
  9. Map Kind F: pins existing / Draft / nearby / Confirmed · OSM / Esri Streets / Esri sat · Fit · pin → View · tracks optional
  10. Seed: ≥1 `bien_bao` Draft · ≥1 `coc_tieu` Draft · ≥1 nearby &lt;10 m · ≥1 P2 low score · ≥1 Asset pin
  11. FE `yarn build` + typecheck PASS · BE `dotnet build` PASS (khi đụng API) · **cấm ERP.***

## 4. CTX / DEM inventory

| ID | Path | Loại | Notes |
|----|------|------|-------|
| CTX-01 | `docs/context/features/its-traffic-detect.md` | feature P0 | Kind B+D+F · GAP-ITS-* |
| CTX-02 | `docs/context/16-ITS-TRAFFIC-OBJECT-DETECTION-DESIGN.md` | Design SSOT | PostGIS 10 m · SignalR · GPU worker |
| CTX-03 | `docs/context/_raw/legacy-govone/demo-maps/its-traffic-detect-control-map.md` | control-map | Zones |
| CTX-04 | `docs/context/17-GPU-VNSO-COST-STANDARD.md` · `10-YOLO-SERVER-REQUIREMENTS.md` | GPU | P2 cost — OUT hardcode MFE |
| DEM-01 | `Linm.RMMS.Demo/src/demo/ai-vision/its-traffic-detect.html` | Signed demo | list + slideout + map |
| DEM-02 | `…/js/its-traffic-detect-data.js` | seed | `DEDUPE_RADIUS_M=10` · ITS-* · EXISTING_ASSETS |
| DEM-03 | `…/js/its-traffic-detect-app.js` | app | filter · Confirm/Dismiss · sim · Leaflet |
| DI | — | N/A | controlHint từ demo+context · không Excel |
| controlHint | `specs/_data-analy/features/its-traffic-detect-control-hint.md` | P0 | **copy bảng §7** · status=`done` · hash khớp |
| MFE | `Linm.Web.RMMS.AiVision` | board | uiRepo (STATUS) |
| BE | `Linm.RMMS.WebService` · `api/v1/ai-vision/its` | board | beRepo (STATUS) · **cấm ERP.*** |

### List columns (required)

STT · ID (`ITS-*`) · Loại (`bien_bao`/`coc_tieu`) · Score (%) · Tọa độ · Tuyến / lý trình · Nguồn · TT · Engine/Model · Nearby · Quan sát · Mã Asset · actions

### Seed DoD (demo → real)

- Draft: `ITS-*-0001` biển báo · `…-0002` cọc tiêu · `…-0003` nearby &lt;10 m vs 0001 · `…-0004` P2 score 0.61 low
- Existing Asset pins: `TS-QL1-BB-001` · `TS-QL1-CT-001` · `TS-QL1-CT-002` (broken mock)
- Tracks: `PATROL-II1-01` · `DASHCAM-QL1-12` (map legend)
- IdCode `ITS-YYYYMMDD-NNNN` · Confirm Asset `TS-AI-YYYYMMDD-NNNN`
- HITL Confirm bắt buộc · **không** hứa mAP P1

## 5. Screens

| id | Surface | Pattern | Route / open | FormMode | Actions |
|----|---------|---------|--------------|----------|---------|
| S-LIST | Danh sách candidate | Kind B full page · A–D · KPI | `/its-traffic-detect` | — | search, clear-filter, create, sim×3, nearby, refresh, export-stub, reset-seed, history, **config FULL** |
| S-DETECT | Form quan sát + frame | Kind D Slideout | `?form=` / row | C/E/V/Copy | **footer only**: Hủy/Lưu · View: Đóng/Sửa/Sao chép · Confirm/Dismiss |
| S-MOD-CONFIRM | Confirm → Asset | Modal | row / form footer | — | Hủy · Confirm · SearchInput `asset-type` * |
| S-MOD-DISMISS | Dismiss FP | Modal | row / form footer | — | Hủy · Dismiss |
| S-MAP | Bản đồ pin | Kind F overlay (cùng page) | S-LIST map zone | — | OSM / Esri Streets / Esri sat · Fit · pin → View · legend |

**devSlash:**

| Surface | Slash | Notes |
|---------|-------|-------|
| S-LIST / CRUD | `/agent-dev` | Kind B list + form parity · Config FULL |
| S-DETECT / HITL Confirm·Dismiss | `/agent-dev-ai-detect` | `rmms-form-agent-map` · **cấm** badge AI header |
| S-MAP | `/agent-dev-oms-map` | Leaflet parity · pins + basemap |
| Camera nguồn (live CCTV) | `/agent-dev-camera-connect` | P1 = sim OK · live RTSP **DEFER P2** |

**Cấm GAP-PO-SCREEN-01.** Design prototype **content-only** zones A–D + map overlay — skip note/sidebar/menu/chrome demo. **Cấm** text «Kind D» / «stub» / checklist khách trên UI end-user.

## 6. Grid list AC (REQUIRED · Kind B)

| Area | Acceptance |
|------|------------|
| **Shell A–D** | Header · Toolbar · Grid card · Pagination footer · 1× `LinPageLayout` (**cấm** nested CatalogListShell) |
| **Toolbar FULL** | Làm mới · Lịch sử · Sửa config (`fa-cog`) · View/Edit · **+ Tạo** · sim Mobile/Dashcam/CCTV · Nearby · Export stub · Reset seed (dev) · **không** AI badge header |
| **Grid menu** | Xem / Sửa / Sao chép / Confirm / Dismiss / Lịch sử / Xóa · help đúp/Ctrl+chuột phải |
| **Config FULL** | **`LinCatalogUiSchemaEditorModal`** title «Cấu hình hiển thị danh mục» · List/width/filter/sort/Thêm cột · `useCatalogUiSchema` · `buildDynamicGridColumns` · BE `CatalogUiSchemaRegistry` + Seed `{catalogKind}` · kéo cột default ON · **cấm** Zone F-only · **cấm** `LinListTableConfigModal` · **cấm** `configHint` · **cấm** leftover `const columns` / `LinCatalogDataColumn` |
| **Grid flow** | Sort cột · filter cột panel · chọn dòng · flex+skeleton |
| **Filter Zone B** | SearchInput + Dropdown + Date — **search must work** · **không** nút Tìm trùng toolbar · filter-bar-layout-hard (input cụm phải) |
| **Form pair** | Create/Edit/View/Copy → Slideout · Confirm/Dismiss → Modal stacked |
| **Pagination** | **`LinCatalogListPagination`** — **cấm** footerPagination / pageSizeBar / raw table footer |
| **Tree?** | no |
| **KPI** | Draft · Confirmed · Nearby risk · (optional Total) |
| **SSOT** | `shared-grid-example` · `po-design-grid-standard` · `list-shell-prototype` · `slideout-form-layout` · `tl-grid-full-flow` |

## 6b. Leave / alert (REQUIRED · GAP-PO-LEAVE-01)

| Case | Control | Cấm |
|------|---------|-----|
| Dirty form / Đóng / Hủy / route leave | **`LeaveConfirmModal`** (`/implement-show-leave-confirm`) | native `window.confirm` / `beforeunload` only |
| Xóa / chặn Confirm | **`useAlert` / `Modal`** | `window.alert` / `prompt` |
| Confirm / Dismiss trên Slideout | **Modal stacked** (`dev-history-alert-overlay`) | native confirm |
| History | `LinCatalogHistoryModal` | custom history dialog ad-hoc |

## 7. Control hints (copy data-analy)

### 7.1 List filters (Zone B)

| Field key | Label | controlHint | catalogKind | Notes |
|-----------|-------|-------------|-------------|-------|
| search | Tìm kiếm | `SearchInput` | text | id · class · tuyến · device · note · model · assetCode |
| routeId | Tuyến | `SearchInput` | **road-route** | Master · **cấm** free-text khi seed sẵn |
| objectClass | Loại | `Dropdown` | enum | `bien_bao` / `coc_tieu` **only** |
| source | Nguồn | `Dropdown` | enum | mobile / dashcam / cctv |
| status | Trạng thái | `Dropdown` | enum | Draft / Confirmed / Dismissed |
| engine | Engine | `Dropdown` | enum | filter only · P1 / P2 |
| fromDate | Từ ngày | `Date` | — | `observedAt` |
| toDate | Đến ngày | `Date` | — | `observedAt` end-of-day |

### 7.2 List columns (schema seed)

| Field key | Label | controlHint | list default |
|-----------|-------|-------------|--------------|
| code | Mã | `Text` | visible · sort · `ITS-*` |
| objectClass | Loại | `Dropdown` | visible · sort |
| score | Score | `Text` (number) | visible · UI % |
| latLng | Tọa độ | `Text` | visible |
| routeLabel | Tuyến | `Text` | visible |
| source | Nguồn | `Dropdown` | visible |
| status | TT | `Dropdown` | visible · sort |
| engine | Engine | `Dropdown` | visible |
| nearbyRisk | Nearby | `Checkbox` | visible · badge |
| observedAt | Quan sát | `Date` | visible · sort |
| assetCode | Mã Asset | `Text` | visible · sau Confirm |

### 7.3 Form fields (S-DETECT)

| Field key | Label | controlHint | required | Notes |
|-----------|-------|-------------|----------|-------|
| code | Mã | `Text` | auto | `ITS-*` readonly sau create |
| objectClass | Loại | `Dropdown` | * | bien_bao / coc_tieu |
| score | Confidence | `Text` (number) | * | 0–1 · UI % |
| status | Trạng thái | `Dropdown` | * | Draft→Confirmed/Dismissed · form thường readonly (HITL đổi) |
| engine | Engine | `Dropdown` | * | P1 / P2 |
| lat / lng | Tọa độ | `Text` (number) | * | Point pair |
| routeId | Tuyến | `SearchInput` | * | `catalogKind=road-route` |
| routeLabel | Nhãn tuyến / lý trình | `Text` | | display / chainage |
| source | Nguồn | `Dropdown` | * | mobile / dashcam / cctv |
| deviceId | Thiết bị | `Text` | | |
| headingDeg / alphaDeg | Heading / Alpha | `Text` (number) | | |
| bboxJson | BBox | `Text` | | `[x1,y1,x2,y2]` |
| modelVersion | Model | `Text` | | readonly |
| nearbyRisk | Trùng nearby | `Checkbox` | | cùng class &lt;10 m |
| nearbyOf | Candidate gần | `Text` | | readonly id |
| note | Ghi chú | `Text` | | multiline · dirty leave-confirm |
| assetCode | Mã Asset | `Text` | | readonly sau Confirm |
| imageUrl | Frame | `Text` / preview | | |
| observedAt | Quan sát | `Date` | | |

### 7.4 Confirm map (PO chốt)

| objectClass (AI) | `asset-type.code` | controlHint | Notes |
|------------------|-------------------|-------------|-------|
| bien_bao | `GANTRY_SIGN` | SearchInput | default Confirm |
| coc_tieu | `DELINEATOR` | SearchInput | default Confirm |

User được đổi SearchInput trên Confirm. **Cấm** trộn 10 class mặt đường (`ai-vision`) hay 8 class `ai-asset-detect`.

## 8. APIs (đề xuất SA — verify / chốt)

Domain **AiVision** · `api/v1/ai-vision/its` · BFF `web-bff/api/v1/ai-vision` · repo `D:/AI-QLBD/Linm.RMMS.WebService` · **cấm ERP.*** · Spec legacy `/api/v1/its/*` → **normalize** dưới AiVision.

| Op | Method | Path |
|----|--------|------|
| list | GET | `/api/v1/ai-vision/its/objects?routeId=&objectClass=&source=&status=&engine=&from=&to=&q=` |
| init-data | GET | `/api/v1/ai-vision/its/objects/init-data` |
| get | GET | `/api/v1/ai-vision/its/objects/{id}` |
| create / update | POST / PUT | `/api/v1/ai-vision/its/objects` |
| soft-delete | DELETE | `/api/v1/ai-vision/its/objects/{id}` |
| nearby | GET | `/api/v1/ai-vision/its/objects/nearby?radiusM=10` |
| detect / sim | POST | `/api/v1/ai-vision/its/detect` |
| confirm → Asset | POST | `/api/v1/ai-vision/its/objects/{id}/confirm` |
| dismiss | POST | `/api/v1/ai-vision/its/objects/{id}/dismiss` |
| road-route | GET | Master `…/road-routes` | SearchInput |
| asset-type | GET | Master `…/asset-types` | Confirm SearchInput |

Entity đề xuất: `rmms_ai_vision_its_traffic_objects` · status Draft/Confirmed/Dismissed · geom Point · `modelVersion` · Asset `source=its-traffic-detect`.  
Dedupe SSOT: **10 m** PostGIS `ST_DWithin` (demo Haversine) — **GAP-ITS-01 closed** trên feature này.

## 9. Out of scope (this pack)

- Real YOLOv8 / ONNX / CoreML runtime & GPU worker (P1 = sim + HITL)
- Auto-create Asset khi score ≥ ngưỡng (P1 Confirm bắt buộc)
- SignalR realtime hub production (P1 poll/refresh OK)
- Live CCTV RTSP ingest (P1 = sim)
- Sibling `ai-vision` detections · `ai-asset-detect` 25 m taxonomy rộng · `its-anpr-overload` · `toc`
- ERP.* / `Domains/Master` / `api/v1/rmms/*`
- Badge/tag `AI` / P1/P2 trên header

## 10. Open questions / GAP list

| ID | Question | Default / Status |
|----|----------|------------------|
| GAP-ITS-01 | Dedupe 10 m vs legacy 25 m | **CLOSED** — SSOT **10 m** this feature |
| GAP-ITS-02 | Seed `coc_tieu` | **CLOSED** — seed có |
| GAP-ITS-03 | BE | **IN SCOPE** — AiVision its/objects (verify SA) |
| GAP-AI-HITL-01 | Confirm modal | **CLOSED in AC** — S-MOD-CONFIRM |
| GAP-AI-DETECT-CHROME | AI badge header | **CLOSED** — **không** AI badge |
| GAP-PO-LEAVE-01 | Leave/alert | **CLOSED** — §6b `LeaveConfirmModal` |
| GAP-DEV-CONFIG-PLACEHOLDER-01 | List config | **CLOSED in AC** — Config FULL ui-schema |
| GAP-PO-SCREEN-01 | Screens | **CLOSED** — §5 |
| GAP-PO-GRID-01 | Grid AC | **CLOSED** — §6 |
| GAP-PO-DEV-ASSIGN-01 | devSlash | **CLOSED** — §5 |
| `mfeStdRoute` | — | `/its-traffic-detect` · alias `/ai-vision/its-traffic-detect` |
| `beRepo` / `uiRepo` | Board | STATUS stamp · Dev gate vẫn cần confirm trước Dev nếu board reset |
| Real GPU / SignalR | P2 | **DEFER** |

**Không** AskQuestion (Autopilot ON · autoApprove=OFF chỉ áp design/sa/review).

## 11. Handoff → Design

| Field | Value |
|-------|-------|
| feature | `its-traffic-detect` |
| packKind | `ai` (PO confirm) |
| phase_from / phase_to | `po` → `design` |
| STATUS | PO **done** · Design **pending** · autoApprove=OFF → Design xong prototype+reviewUrl rồi **`await_confirm`** (user Approve board · **không auto**) |
| Context (docs) | CTX-01…04 |
| Demo HTML | `Linm.RMMS.Demo/src/demo/ai-vision/its-traffic-detect.html` |
| Demo data | `js/its-traffic-detect-data.js` · `its-traffic-detect-app.js` |
| controlHint | `_data-analy/features/its-traffic-detect-control-hint.md` · §7 · hash `E91426CE…` |
| grid_standard | `po-design-grid-standard` · Config **FULL** · §6 |
| Leave | `LeaveConfirmModal` · §6b |
| Screens | §5 S-LIST · S-DETECT · S-MOD-CONFIRM · S-MOD-DISMISS · S-MAP |
| Forms / screens | Kind D slideout · **footer_actions_only** · leave-confirm dirty |
| Kind | B list A–D + D form + F map overlay · content-only prototype · **no AI badge** |
| Confirm map | `bien_bao`→`GANTRY_SIGN` · `coc_tieu`→`DELINEATOR` |
| peerStdUrl gợi ý | `http://localhost:9303/ai-vision/ai-asset-detect` (cùng formType ai · Kind B+D+F) |
| mfeStdUrl | `http://localhost:9303/its-traffic-detect` |
| APIs (ids) | §8 — SA chốt/verify |
| Open questions | none blocking Design |
| Blockers | none for Design start |
| Next AskQuestion | `design_confirm` (user board · autoApprove=OFF) |
| Skills | `/agent-design` · `/erp-form-context` · `/ai-form-context` · `list-shell-prototype` · `slideout-form-layout` · **không** `/erp-feature` |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-po |
| skillVersion | 2026.08.15.17 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.16.02 |
| rulesVersion | 2026.08.16.05 |
| generatedAt | 2026-08-17T10:12:00.000Z |
| versionGate | ok |
| contentHash | sha256:E91426CE28303135A824CCDD5012AE64466FE2DB50A6C05FBC5F2A0E8F458526 |

---
<!-- Version meta: skillVersion=2026.08.15.17 · schemaVersion=1 · workflowVersion=2026.08.16.02 · versionGate=ok -->
