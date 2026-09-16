# PO — estimate (AI ước lượng sửa chữa)

| Field | Value |
|-------|-------|
| feature | `estimate` |
| changeScope | `new_page` |
| packKind | `ai` |
| featureClass | `ai` — Kind **B** catalog list + Kind **D** slideout |
| requestSource | scan/run packet `task_8e7c2042` · `/agent-qldb-workflow` · roleOnly=`po` · Autopilot ON · autoApprove **OFF** |
| status | `done` |
| controlHint | `specs/_data-analy/features/estimate-control-hint.md` |
| contentHash (data-analy) | `sha256:f49800a01d06c3df4ab4058c5b2b6ecde131fe8362a040481a88daa4897e8983` |
| skillVersion | `2026.08.15.17` |
| schemaVersion | `1` |
| workflowVersion | `2026.08.16.02` |
| rulesVersion | `2026.08.15.25` |
| versionGate | `ok` |
| grid_standard | `po-design-grid-standard` |
| slideout_layout | `footer_actions_only` |
| leave_standard | `LeaveConfirmModal` · `/implement-show-leave-confirm` |
| list_config | **FULL** · `LinCatalogUiSchemaEditorModal` · **cấm** Zone F-only / `configHint` / `LinListTableConfigModal` |
| updatedAt | `2026-08-17T09:02:50.000Z` |

> **DOMAIN-MAP:** slug `estimate` → AiVision · API **`api/v1/ai-vision/estimates`** (reconcile legacy `/api/v1/ai-estimate/*`). **Cấm ERP.***

## 1. Goal

Align demo **AI ước lượng sửa chữa** (defect/incident → khối lượng · nhân công · thiết bị · chi phí → confirm thủ công) → MFE `Linm.Web.RMMS.AiVision` route `/ai-vision/estimate` + BE `Linm.RMMS.WebService` domain **AiVision**.

Kind B catalog parity: 1× `LinPageLayout` · toolbar · search **work** · `LinCatalogDataGrid` · footer `LinCatalogListPagination` · row menu · View/Create/Edit. Kind D slideout **footer actions only** · leave-confirm dirty. P1: **không** auto WorkOrder · **không** AI badge trên header.

## 2. Current → New (new_page)

| Layer | Current | New (delta) |
|-------|---------|-------------|
| Demo | Kind D slideout + host SC list · localStorage · fake `/ai-estimate` | Giữ UX SSOT; **không** clone chrome GOVOne |
| MFE | `Linm.Web.RMMS.AiVision` · route `/ai-vision/estimate` (align pipeline) | Kind B list estimates + Kind D form · list config **FULL** |
| API client | `/ai-vision/estimates` (canonical) | BFF proxy · local fallback P1 OK |
| BE | AiVision · EstimateAudit + lines (pipeline) | DOMAIN-MAP slug `estimate` · **cấm** legacy `/ai-estimate` |
| Persist | Demo localStorage → API | child `EstimateLineEntity` · **no** parent `*LinesJson` |

## 3. Personas / DoD

- Persona: Điều phối · nhà thầu · Ban QLDA
- DoD P1 (đo được):
  1. List load + **search work** (EST code · incident · tuyến · model · detectionIds)
  2. Filters Zone B: `status` · `sourceType` · `fromDate`/`toDate`
  3. Toolbar: + Tạo · from-incident · from-defects · Refresh · Export stub · History · config `fa-cog` (**FULL ui-schema**) · **không** badge AI trên header
  4. Row menu: Xem · Sửa · Xác nhận · Xóa (draft) · Lịch sử (stub OK)
  5. View = `readOnly` (không disabled xám)
  6. Create/Edit validate + **Lưu nháp** · **leave-confirm** dirty (`LeaveConfirmModal`)
  7. Lines grid: Thêm / Sửa / Xóa dòng · thành tiền = qty × đơn giá · tổng footer
  8. **Xác nhận số liệu** thủ công · status → confirmed · Modal stacked (không native confirm)
  9. «Gắn Công việc» stub toast · **không** auto tạo WO
  10. FE `yarn build` + typecheck PASS · BE `dotnet build` PASS · **cấm ERP.***

## 4. CTX / DEM inventory

| ID | Path | Loại | Notes |
|----|------|------|-------|
| CTX-01 | `docs/context/features/estimate.md` | feature P0 | API legacy paths · entity · GAP-F-EST-* |
| CTX-02 | `docs/context/_raw/legacy-govone/demo-maps/estimate-control-map.md` | control-map | Kind D · 20f · 13a |
| CTX-03 | `docs/context/_raw/legacy-govone/demo-maps/estimate-actions.md` | actions | ACTION WORK GATE |
| CTX-04 | `docs/context/15-SCREEN-AI-MAP.md` · RMMS §10 | platform | estimate panel |
| DEM-01 | `Linm.RMMS.Demo/src/demo/ai-vision/estimate.html` | Signed demo | host + slideout |
| DEM-02 | `…/js/estimate-data.js` · `estimate-app.js` | seed | INC-441 · 3 lines · EST code |
| DEM-03 | `Linm.RMMS.Demo/src/demo/features/estimate-demo.html` | redirect | demo hub |
| DI | — | N/A | controlHint từ demo+context · không Excel |
| controlHint | `specs/_data-analy/features/estimate-control-hint.md` | P0 | **copy bảng §7** · status=`done` · hash khớp |
| MFE | `Linm.Web.RMMS.AiVision` | board | uiRepo tick trước Dev |
| BE | `Linm.RMMS.WebService` · `api/v1/ai-vision/estimates` | board | beRepo tick trước Dev · **cấm ERP.*** |

### List columns (required)

STT · Mã (`EST-*`) · Sự cố · Nguồn · Tuyến · Loại hư hỏng · Tổng (VND) · TT · Model · Ngày · actions

### Seed DoD (demo → real)

- 1 draft estimate từ INC-441 (ổ gà) · 3 dòng BOC/BTN/NC · tổng ~5.6M VND
- IdCode `EST-YYYYMMDD-NNNN`
- Confirm thủ công · không auto WO

## 5. Screens

| id | Surface | Pattern | Route / open | FormMode | Actions |
|----|---------|---------|--------------|----------|---------|
| S-LIST | Danh sách ước lượng | Kind B full page · A–D | `/ai-vision/estimate` | — | search, clear-filter, create, from-incident, from-defects, refresh, export-stub, history, **config FULL** |
| S-FORM | Form ước lượng | Kind D Slideout | `?form=` / row | C/E/V | **footer only**: Hủy · Lưu nháp · Xác nhận · Gắn CV · Đóng/Sửa (View) |
| S-MOD-CONFIRM | Confirm số liệu | Modal | footer / row | — | Hủy · Xác nhận |

**devSlash:** `/agent-dev` (+ AI pack list CRUD · `form-type-task-pack` §2c) · **không** `/agent-dev-ai-detect` (HITL detect khác slug).

**Cấm GAP-PO-SCREEN-01.** Design prototype **content-only** zones A–D + slideout — skip note/sidebar/menu/chrome demo. **Cấm** text «Kind D» / «stub» trong UI end-user nếu tránh được.

## 6. Grid list AC (REQUIRED · Kind B)

| Area | Acceptance |
|------|------------|
| **Shell A–D** | Header · Toolbar · Grid card · Pagination footer · 1× `LinPageLayout` (**cấm** nested CatalogListShell) |
| **Toolbar FULL** | Làm mới · Lịch sử · Sửa config (`fa-cog`) · View/Edit · **+ Tạo** · from-incident · from-defects · Export stub · **không** AI badge header |
| **Grid menu** | Xem / Sửa / Xác nhận / Xóa (draft) / Lịch sử · help đúp/Ctrl+chuột phải |
| **Config FULL** | **`LinCatalogUiSchemaEditorModal`** title «Cấu hình hiển thị danh mục» · List/width/filter/sort/Thêm cột · `useCatalogUiSchema` · `buildDynamicGridColumns` · BE `CatalogUiSchemaRegistry` + Seed · kéo cột default ON · **cấm** Zone F-only · **cấm** `LinListTableConfigModal` · **cấm** `configHint` · **cấm** leftover `const columns` / `LinCatalogDataColumn` |
| **Grid flow** | Sort cột · filter cột panel · chọn dòng · flex+skeleton |
| **Filter Zone B** | SearchInput + Dropdown/Date — **search must work** · **không** nút Tìm trùng toolbar · filter-bar-layout-hard (input cụm phải) |
| **Form pair** | Create/Edit/View → Slideout · Confirm → Modal stacked |
| **Pagination** | **`LinCatalogListPagination`** — **cấm** footerPagination / pageSizeBar / raw table footer |
| **Tree?** | no |
| **SSOT** | `shared-grid-example` · `po-design-grid-standard` · `slideout-form-layout` · `tl-grid-full-flow` |

## 6b. Leave / alert (REQUIRED · GAP-PO-LEAVE-01)

| Case | Control | Cấm |
|------|---------|-----|
| Dirty form / Đóng / Hủy / route leave | **`LeaveConfirmModal`** (`/implement-show-leave-confirm`) | native `window.confirm` / `beforeunload` only |
| Xóa draft / chặn confirm | **`useAlert` / `Modal`** | `window.alert` / `prompt` |
| Confirm số liệu trên Slideout | **Modal stacked** (`dev-history-alert-overlay`) | native confirm |
| History | `LinCatalogHistoryModal` | custom history dialog ad-hoc |

## 7. Control hints (copy data-analy)

### 7.1 List filters

| Field key | Label | controlHint | catalogKind | Notes |
|-----------|-------|-------------|-------------|-------|
| search | Tìm kiếm | `SearchInput` | text | EST · incident · tuyến · model · detectionIds |
| status | Trạng thái | `Dropdown` | enum | draft / confirmed |
| sourceType | Nguồn | `Dropdown` | enum | from-incident / from-defects |
| fromDate / toDate | Từ / Đến ngày | `Date` | — | createdAt |

### 7.2 Form fields + lines

| Field key | Label | controlHint | required | Notes |
|-----------|-------|-------------|----------|-------|
| code | Mã ước lượng | `Text` | auto | `EST-*` readonly |
| incidentId | Sự cố | `SearchInput` | * | incident lookup |
| sourceType | Nguồn | `Dropdown` | * | init-data |
| detectionIds | Detection IDs | `Text` | | |
| routeSection | Tuyến / đoạn | `Text` | | |
| defectType | Loại hư hỏng | `Dropdown` | * | |
| defectArea | Diện tích (m²) | `Text` (number) | * | |
| severity | Mức độ | `Dropdown` | * | |
| model | Model AI | `Text` | | readonly |
| laborHours / equipment / durationDays | Meta | Text number / Text | | |
| totalAmount | Tổng | `LabelMoney` | | computed |
| status | Trạng thái | `Dropdown` | * | locked sau confirm |
| lines.* | Hạng mục grid | `pattern_inline_grid` | * | item · qty · unit · unitPrice · amount · note |

## 8. APIs (đề xuất SA)

Domain **AiVision** · `api/v1/ai-vision/estimates` · BFF proxy · **cấm ERP.*** · **cấm** legacy `/ai-estimate`.

| Op | Method | Path |
|----|--------|------|
| list | GET | `/api/v1/ai-vision/estimates` |
| init-data | GET | `/api/v1/ai-vision/estimates/init-data` |
| get | GET | `/api/v1/ai-vision/estimates/{id}` |
| from-incident | POST | `/api/v1/ai-vision/estimates/from-incident/{incidentId}` |
| from-defects | POST | `/api/v1/ai-vision/estimates/from-defects` |
| update | PUT | `/api/v1/ai-vision/estimates/{id}` |
| draft/save | POST | `/api/v1/ai-vision/estimates/{id}/draft` |
| confirm | POST | `/api/v1/ai-vision/estimates/{id}/confirm` |
| delete | DELETE | `/api/v1/ai-vision/estimates/{id}` |

Entity: `EstimateAuditEntity` + `EstimateLineEntity` · **no** parent `*LinesJson`. UnitPriceCatalog **DEFER P2**.

## 9. Out of scope (this pack)

- Auto tạo WorkOrder / Maintenance WO (P2) — `GAP-F-EST-01`
- Auto-apply giá không confirm — `GAP-F-EST-02`
- UnitPriceCatalog tenant UI — `GAP-F-EST-04` P2
- Platform event `estimate.created` → Maintenance — DEFER P2
- Real GPT pricing model / regression local mAP
- Legacy path `/api/v1/ai-estimate/*`
- ERP.* / `Domains/Master` / `api/v1/rmms/*`

## 10. Open questions / GAP list

| ID | Question | Default / Status |
|----|----------|------------------|
| GAP-F-EST-01 | WorkOrder full | P2 Maintenance · **không auto WO P1** |
| GAP-F-EST-02 | Auto-apply giá | Luôn confirm user P1 |
| GAP-F-EST-03 | BE path | **CLOSED for SA** — use `api/v1/ai-vision/estimates` (not `/ai-estimate`) |
| GAP-F-EST-04 | Catalog đơn giá tenant | **DEFER P2** |
| GAP-F-EST-AI-BADGE | AI badge header | **CLOSED** — **không** AI badge trên header |
| GAP-PO-LEAVE-01 | Leave/alert | **CLOSED** — §6b `LeaveConfirmModal` |
| GAP-DEV-CONFIG-PLACEHOLDER-01 | List config | **CLOSED in AC** — Config FULL ui-schema (không Zone F / configHint) |
| `mfeStdRoute` | — | `/ai-vision/estimate` · prior `route_a` |
| `beRepo` / `uiRepo` | Board | **pending** tick (**không auto**) trước Dev |

## 11. Handoff → Design

| Field | Value |
|-------|-------|
| feature | `estimate` |
| phase_from / phase_to | `po` → `design` |
| STATUS | PO **done** · Design **pending** · autoApprove=OFF → Design xong → `await_confirm` |
| controlHint | `_data-analy/features/estimate-control-hint.md` · §7 |
| Screens | S-LIST · S-FORM · S-MOD-CONFIRM |
| Kind | B list A–D + D slideout footer-only · **no AI badge** |
| grid_standard | `po-design-grid-standard` · Config **FULL** |
| Leave | `LeaveConfirmModal` · §6b |
| peerStdUrl gợi ý | `http://localhost:9303/ai-vision/ai-asset-detect` (cùng formType ai · Kind B) |
| packKind | `ai` |
| APIs | §8 — SA chốt |
| Next | `/agent-design` · user Approve board khi `design_confirm` |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-po |
| skillVersion | 2026.08.15.17 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.16.02 |
| rulesVersion | 2026.08.15.25 |
| generatedAt | 2026-08-17T09:02:50.000Z |
| versionGate | ok |
| contentHash | sha256:f49800a01d06c3df4ab4058c5b2b6ecde131fe8362a040481a88daa4897e8983 |

---
<!-- Version meta: skillVersion=2026.08.15.17 · schemaVersion=1 · workflowVersion=2026.08.16.02 · versionGate=ok -->
