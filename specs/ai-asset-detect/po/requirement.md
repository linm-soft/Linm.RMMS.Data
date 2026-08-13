# PO — ai-asset-detect (AI phát hiện tài sản / thiết bị mới)

| Field | Value |
|-------|-------|
| feature | `ai-asset-detect` |
| changeScope | `edit_page` (packet · STATUS · **không** AskQuestion — Autopilot) |
| packKind | `list` |
| featureClass | `ai` — Kind **B** catalog list + Kind **D** slideout + Kind **F** map overlay |
| requestSource | scan/run packet `task_b03d06cb` · `/agent-qldb-workflow` · `/agent-po` · roleOnly=`po` |
| status | `done` (roleOnly po · autoApprove=OFF · Design khi chạy → `await_confirm`) |
| controlHint | `specs/_data-analy/features/ai-asset-detect-control-hint.md` |
| contentHash (data-analy) | `sha256:97450ff90d8d4576a8de82e118d463e705b49b21f212a76fd178527a8b38793e` |
| skillVersion | `2026.08.10.1` |
| schemaVersion | `1` |
| workflowVersion | `2026.08.10.3` |
| rulesVersion | `2026.08.11.1` |
| versionGate | `ok` |
| grid_standard | `po-design-grid-standard` |
| slideout_layout | `footer_actions_only` |
| updatedAt | `2026-08-12T01:20:00.000Z` |

> **Khác `ai-vision`:** taxonomy **thiết bị TS** → bản ghi **Asset**. **Cấm** class ổ gà / Incident (`GAP-F-AAD-01`).

## 1. Goal

Align demo **AI phát hiện tài sản** (camera tuần đường → candidate → Confirm Asset) → MFE `Linm.Web.RMMS.AiVision` route đề xuất `/ai-vision/ai-asset-detect` + BE `Linm.RMMS.WebService` domain **AiVision** (`api/v1/ai-vision`, **cấm ERP.***).

Kind B catalog parity (`/erp-form-context`): 1× `LinPageLayout` · toolbar · search **work** · `LinCatalogDataGrid` (kéo cột default ON) · footer `LinCatalogListPagination` · row menu · View/Create/Edit/Copy. Kind D slideout **footer actions only**. Kind F map pin «AI new» vs TS đã có. P1 Confirm **bắt buộc** (`GAP-F-AAD-02`).

## 2. Current → New (edit_page)

| Layer | Current | New (delta) |
|-------|---------|-------------|
| Demo | Kind B+D+F Signed · localStorage seed QL.1 · 4 candidates + 3 existing pins | Giữ SSOT UX; **không** clone chrome GOVOne |
| MFE | `Linm.Web.RMMS.AiVision` chỉ `/ai-vision` (detections mặt đường) — **chưa** slug `ai-asset-detect` | + list+form+map overlay · **không** Master catalogs |
| MFE form | — | Kind D slideout C/E/V/Copy · Confirm/Dismiss modal · footer only |
| API client | — | `/ai-vision/asset-candidates` + detect + confirm/dismiss · local fallback |
| BE | AiVision detections (sibling `ai-vision`) · **chưa** `asset_candidates` · DOMAIN-MAP **chưa** slug | + candidates CRUD · detect stub · confirm → Asset · slug DOMAIN-MAP |
| Persist | Demo localStorage | API store + local fallback P1 |

## 3. Personas / DoD

- Persona: Tuần đường · Ban QLDA · GIS · AI Vision ops
- DoD P1 (đo được):
  1. List load + **search work** (id · loại · tuyến · trip · section · assetCode · note · model)
  2. Filters Zone B: `routeId` SearchInput (road-route) · `assetClass` Dropdown (8 class) · `status` Dropdown · `fromDate`/`toDate` Date
  3. Toolbar: + Tạo candidate · Giả lập frame · Nearby · Refresh · Export stub · Reset seed (dev) · config `fa-cog` · badge **AI** P1/P2
  4. Row menu: Xem · Sửa · Sao chép · Confirm · Dismiss · Lịch sử (stub OK)
  5. View = `readOnly` (không disabled xám)
  6. Create/Edit/Copy validate + save Draft · leave-confirm dirty
  7. Confirm modal: SearchInput `asset-type` * · tạo Asset `source=ai-asset-detect` · mã `TS-AI-YYYYMMDD-NNNN`
  8. Nearby cùng class: demo **25 m** Haversine banner · **không** auto-create
  9. Map: pin «AI new» vs TS đã có · OSM/Esri/sat · Fit · pin → View
  10. FE `yarn build` + typecheck PASS · BE `dotnet build` PASS (khi đụng API) · **cấm ERP.***

## 4. CTX / DEM inventory

| ID | Path | Loại | Notes |
|----|------|------|-------|
| CTX-01 | `docs/context/features/ai-asset-detect.md` | feature P0 | API · entity · GAP-F-AAD-01/02/03 |
| CTX-02 | `docs/context/15-SCREEN-AI-MAP.md` §3b | platform | Camera tuần đường → candidate → Asset |
| CTX-03 | `docs/context/_raw/legacy-govone/demo-maps/ai-asset-detect-control-map.md` | control-map | Kind B+D+F |
| CTX-04 | `docs/context/_raw/legacy-govone/demo-maps/ai-asset-detect-actions.md` | actions | ACTION WORK GATE |
| CTX-05 | `docs/context/features/ai-vision.md` · `asset.md` · `patrol.md` | sibling | **không** trộn class ổ gà |
| DEM-01 | `Linm.RMMS.Demo/src/demo/ai-vision/ai-asset-detect.html` | Signed | Zones list+filter+slideout+map |
| DEM-02 | `…/js/ai-asset-detect-data.js` · `ai-asset-detect-app.js` | seed | 3 Draft + 1 nearby AC-104 |
| DEM-03 | `Linm.RMMS.Demo/src/demo/features/ai-asset-detect-demo.html` | hub | catalog card |
| DI | — | N/A | controlHint từ demo+context (scan_workflow) · không Excel |
| controlHint | `specs/_data-analy/features/ai-asset-detect-control-hint.md` | P0 | **copy bảng dưới** |
| MFE | `Linm.Web.RMMS.AiVision` | đề xuất | **chưa** `uiRepo` tick |
| BE | `Linm.RMMS.WebService` · `api/v1/ai-vision` | đề xuất | **chưa** `beRepo` tick · **cấm ERP.*** |

### List columns (required)

STT · ID (`AC-*`) · Loại TS · Score (%) · Tọa độ · Tuyến / lý trình · TT · Engine/Model · Nearby · Phát hiện · Mã Asset · actions

### Seed DoD (demo → real)

- 3 Draft: Hộ lan `AC-101` · Đèn `AC-102` · Cột Km `AC-103` + 1 nearby `AC-104` (cùng class &lt;25 m vs AC-101)
- Existing TS pins: HL / CS / CN trên QL.1
- Badge AI · engine P1 · **không** hứa mAP local P1

## 5. Screens (formType=`list` + featureClass=`ai`)

| id | Surface | Pattern | Route / open | FormMode | Actions |
|----|---------|---------|--------------|----------|---------|
| S-LIST | Danh sách candidate | Kind B full page · A–D | `/ai-vision/ai-asset-detect` (đề xuất · TL `route_confirm`) | — | search, clear-filter, create, sim-frame, nearby, refresh, export-stub, reset-seed, config |
| S-FORM | Form candidate | Kind D Slideout | `?form=` / row | C/E/V/Copy | **footer only**: Hủy/Lưu (C/E/Copy) · View: Đóng/Sửa/Sao chép · Confirm/Dismiss |
| S-MOD-CONFIRM | Confirm → Asset | Modal | row / form footer | — | Hủy · Confirm · SearchInput `asset-type` * |
| S-MOD-DISMISS | Dismiss FP | Modal | row / form footer | — | Hủy · Dismiss |
| S-MAP | Bản đồ pin | Kind F overlay (cùng page) | S-LIST map zone | — | OSM / Esri Streets / Esri sat · Fit · pin → View |
| S-FEED | Frame tuần đường | Panel / Zone A extra | S-LIST | — | Giả lập frame · Fake nearby · preview bbox |

**Cấm GAP-PO-SCREEN-01.** Design prototype **content-only** zones A–D (+ map overlay) — skip note/sidebar/menu/chrome demo.

## 6. Grid list AC (REQUIRED · Kind B / list)

| Area | Acceptance (Design phải prototype) |
|------|-------------------------------------|
| **Shell A–D** | Header · Toolbar · Grid card · Pagination footer |
| **Toolbar FULL** | Làm mới · Lịch sử · Sửa config (`fa-cog`) · View/Edit theo chọn · **+ Tạo candidate** · Giả lập frame · Nearby · Export stub · Reset seed (dev) · badge **AI** P1/P2 |
| **Grid menu** | Row menu: Xem / Sửa / Sao chép / Confirm / Dismiss / Lịch sử · help «nhấn đúp / Ctrl+chuột phải» |
| **Config** | Sửa cấu hình lưới (ui-schema hoặc Zone F) · **kéo cột default ON** |
| **Grid flow** | Sort cột · filter cột (panel: tìm · chọn tất cả · Đã chọn N · Xác nhận) · chọn dòng |
| **Filter Zone B** | SearchInput trong card filter — **search must work** · **không** nút Tìm trùng toolbar |
| **Form pair** | Create/Edit/View/Copy từ toolbar + menu → Slideout · Confirm/Dismiss → Modal |
| **Tree?** | Không (không cây master) |
| **Pagination** | Footer **`LinCatalogListPagination`** — **cấm** footerPagination / pageSizeBar / raw table footer |
| **SSOT Design** | `shared-grid-example` · `list-shell-prototype` · `po-design-grid-standard` · `slideout-form-layout` |
| **SSOT TL/Dev** | `tl-design-grid-component-map` · `tl-grid-full-flow` · `tl-ssot-permission-tasks` (T-CTX · T-PERM · T-UI-LIST A–D · T-UI-FORM · T-BE/BFF · T-UI-MAP) |

**Handoff → Design:** clone `shared-grid-example.html` · giữ `data-des-id` — **cấm** gen list chỉ table giữa trang. 1× `LinPageLayout` — **cấm** nested CatalogListShell.

## 7. Control hints (copy data-analy — Design chốt control-map)

### 7.1 List filters (Zone B)

| Field key | Label | controlHint | catalogKind | Notes |
|-----------|-------|-------------|-------------|-------|
| search | Tìm kiếm | `SearchInput` | text | id · loại · tuyến · trip · section · assetCode · note · model |
| routeId | Tuyến | `SearchInput` | **road-route** | Master đã có · **cấm** free-text khi seed sẵn |
| assetClass | Loại TS | `Dropdown` | enum (8) | Taxonomy **AI riêng** — không class ổ gà |
| status | Trạng thái | `Dropdown` | enum | Draft / Confirmed / Dismissed |
| fromDate | Từ ngày | `Date` | — | `detectedAt` |
| toDate | Đến ngày | `Date` | — | `detectedAt` end-of-day |

### 7.2 Form fields (S-FORM)

| Field key | Label | controlHint | required | Notes |
|-----------|-------|-------------|----------|-------|
| id | Mã candidate | `Text` | auto | `AC-*` readonly sau create |
| assetClass | Loại TS/thiết bị | `Dropdown` | * | 8 class AI |
| assetTypeCode | Loại Asset (Confirm) | `SearchInput` | * on confirm | `catalogKind=asset-type` · map từ assetClass |
| score | Confidence | `Text` (number) | * | 0–1 · UI % |
| status | Trạng thái | `Dropdown` | * | Draft → Confirmed / Dismissed · form disabled (chỉ Confirm/Dismiss đổi) |
| engine | Engine | `Dropdown` | * | P1 GPT-4o Vision / P2 ONNX |
| lat / lng | Tọa độ | `Text` (number) | * | Point · pair · không SearchInput |
| routeId | Tuyến | `SearchInput` | * | `catalogKind=road-route` |
| routeLabel | Nhãn tuyến / lý trình | `Text` | | display / chainage (Km287…) |
| sectionId | Đoạn | `Text` | | optional P1 · pavement-section later |
| patrolTripId | Chuyến tuần đường | `Text` | | P1 free · Patrol lookup **DEFER** |
| bboxJson | BBox | `Text` | | `[x1,y1,x2,y2]` |
| modelVersion | Model | `Text` | | readonly · `gpt-4o-vision` / `onnx-asset` |
| nearbyRisk | Trùng nearby | `Checkbox` | | cùng class &lt;25 m demo · prod ITS 10 m |
| nearbyOf | Candidate gần | `Text` | | readonly id |
| note | Ghi chú | `Text` | | multiline · dirty leave-confirm |
| assetCode | Mã Asset | `Text` | | readonly sau Confirm |
| imageUrl | Frame | `Text` | | readonly / preview |
| detectedAt | Phát hiện | `Date` | | |
| updatedAt | Cập nhật | `Date` | | readonly |

### 7.3 AI taxonomy ↔ asset-type (Confirm) — **PO chốt**

Closed set demo `ASSET_CLASSES` (8). Filter/form candidate = **Dropdown**. Khi Confirm tạo Asset = **SearchInput** `asset-type`.

| assetClass (AI) | `asset-type.code` (chốt) | controlHint | Ghi chú |
|-----------------|--------------------------|-------------|---------|
| Biển báo | `GANTRY_SIGN` | SearchInput | seed có |
| Hộ lan | `GUARDRAIL` | SearchInput | seed có |
| Cột Km | `KM_POST` | SearchInput | seed có |
| Cột H | `DELINEATOR` | SearchInput | seed có |
| Đèn chiếu sáng | `LIGHTING` | SearchInput | seed có |
| Cống | `CULVERT_X` (default) / `CULVERT_L` | SearchInput | user chọn trên Confirm |
| Taluy | `SLOPE_PROTECT` | SearchInput | seed có |
| Camera ITS | **`ITS_CAMERA`** | SearchInput | **PO chốt** — xem §8 |

**Cấm** trộn 10 class mặt đường (`ai-vision`) vào Dropdown này.

## 8. PO chốt — Camera ITS (was `controlHint=UNCLEAR`)

Data-analy: seed 23 loại **không** mã 1:1; gợi ý `ROW_UTIL?`.

| Quyết định | Giá trị |
|------------|---------|
| **Không** map `ROW_UTIL` | `ROW_UTIL` = «Công trình HTKT trong hành lang» — generic, **không** phải camera giám sát |
| **Chốt P1** | Thêm mã catalog **`ITS_CAMERA`** · name `Camera ITS / camera giám sát giao thông` · `groupCode=GIAO_THONG` |
| Confirm UI | SearchInput `asset-type` **default `ITS_CAMERA`** · user được đổi |
| AI Dropdown | Giữ label `Camera ITS` trong 8 class đóng |
| **Không** trộn | Feature `camera-connect` = kết nối RTSP/ONVIF (domain Camera) — **khác** inventory TS |

SA: seed/migration `asset-type` + DOMAIN-MAP hàng `ai-asset-detect` → AiVision / `api/v1/ai-vision`.

## 9. APIs (đề xuất SA — **chưa chốt**)

Domain **AiVision** · `api/v1/ai-vision` · BFF `web-bff/api/v1/ai-vision` · repo `D:/AI-QLBD/Linm.RMMS.WebService` · **cấm ERP.***

| Lookup | API | Consumer |
|--------|-----|----------|
| candidates list | `GET /api/v1/ai-vision/asset-candidates?routeId=&assetClass=&status=&from=&to=&q=` | Zone B + grid |
| candidate by id | `GET /api/v1/ai-vision/asset-candidates/{id}` | form V/E |
| create / update | `POST` / `PUT …/asset-candidates` | form C/E/Copy |
| detect frame | `POST /api/v1/ai-vision/detect-assets` | toolbar «Giả lập frame» |
| detect batch | `POST /api/v1/ai-vision/detect-assets/batch` | chuyến tuần đường |
| confirm → Asset | `POST …/asset-candidates/{id}/confirm` | S-MOD-CONFIRM · gọi Asset domain |
| dismiss FP | `POST …/asset-candidates/{id}/dismiss` | S-MOD-DISMISS |
| road-route | Master `GET …/road-routes` (Integration) | SearchInput routeId |
| asset-type | Master `GET …/asset-types` (Integration) | SearchInput confirm · gồm `ITS_CAMERA` |

Entity: `ai_vision.asset_candidates` · status Draft/Confirmed/Dismissed · geom Point · `modelVersion` · Asset `source=ai-asset-detect`.  
Dedupe: demo **25 m** · prod ITS SSOT **10 m** PostGIS — SA ghi solution.

## 10. Out of scope (this pack)

- Real GPT-4o / ONNX / SAM runtime (P1 = stub detect + HITL) — `GAP-F-AAD-03` dataset OUT
- Auto-create Asset khi score ≥ ngưỡng (P2 only · P1 Confirm bắt buộc)
- Full Patrol trip lookup / Timescale GPS
- Pavement-section master bind (sectionId free text P1)
- Excel export wizard (toast stub only)
- `its-traffic-detect` / `its-anpr-overload` / `camera-connect`
- Sibling `ai-vision` detections (ổ gà → Incident)
- ERP.* / `Domains/Master` / `api/v1/rmms/*`

## 11. Open questions

| ID | Status | Owner |
|----|--------|-------|
| Camera ITS ↔ asset-type | **CLOSED** · `ITS_CAMERA` (§8) | PO |
| `mfeStdRoute` | Đề xuất `/ai-vision/ai-asset-detect` | TL `route_confirm` |
| DOMAIN-MAP slug | Chưa có hàng `ai-asset-detect` | SA |
| `beRepo` / `uiRepo` | User tick board — **không auto** | User trước Dev |
| Dedupe 25 m vs 10 m | Demo 25 · prod 10 | SA |
| Patrol lookup | DEFER | SA/TL |

**Không** AskQuestion (Autopilot ON · autoApprove=OFF chỉ áp design/sa/review).

## 12. Handoff → Design

| Field | Value |
|-------|-------|
| feature | `ai-asset-detect` |
| phase_from / phase_to | `po` → `design` |
| STATUS | PO **done** · Design **pending** · `autoApprove=OFF` → Design xong prototype+reviewUrl rồi **`await_confirm`** (user Approve board · **không auto**) |
| Context (docs) | CTX-01…05 |
| Demo HTML | `Linm.RMMS.Demo/src/demo/ai-vision/ai-asset-detect.html` · Signed |
| Demo data | `js/ai-asset-detect-data.js` |
| controlHint | `_data-analy/features/ai-asset-detect-control-hint.md` · bảng §7 |
| grid_standard | `po-design-grid-standard` · §6 |
| Screens | §5 S-LIST · S-FORM · S-MOD-CONFIRM · S-MOD-DISMISS · S-MAP · S-FEED |
| Forms / screens | Kind D slideout · **footer_actions_only** · leave-confirm dirty |
| Kind | B list A–D + D form + F map overlay · content-only prototype |
| Camera ITS | **chốt `ITS_CAMERA`** — Design control-map Confirm SearchInput default |
| APIs (ids) | đề xuất §9 — SA chốt |
| Open questions | route_confirm · DOMAIN-MAP · beRepo/uiRepo (user) |
| Blockers | none for Design start |
| Next AskQuestion | `design_confirm` (user board · autoApprove=OFF) |
| Skills | `/agent-design` · `/erp-form-context` · `list-shell-prototype` · `slideout-form-layout` · **không** `/erp-feature` |

---

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-po |
| skillVersion | 2026.08.10.1 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.10.3 |
| rulesVersion | 2026.08.11.1 |
| generatedAt | 2026-08-12T01:20:00.000Z |
| versionGate | ok |

---
<!-- Version meta: skillVersion=2026.08.10.1 · schemaVersion=qldb-workflow-skill-v1 · workflowVersion=2026.08.10.3 · versionGate=ok -->
