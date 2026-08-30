# Design — estimate (AI ước lượng sửa chữa)

| Field | Value |
|-------|-------|
| feature | `estimate` |
| this role | `design` · `/agent-design` |
| Feature Kind | **B** catalog list + **D** slideout form |
| changeScope | `new_page` |
| packKind | `ai` |
| featureClass | `ai` (Kind B list + Kind D slideout) |
| status | `done` · design_confirm=`approve` |
| design_confirm | **approve** (board APPROVE→CHAIN · task_ecb4792c) |
| autoApprove | **OFF** (SA/Review vẫn await_confirm) |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.AiVision` · route `/ai-vision/estimate` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · `api/v1/ai-vision/estimates` · **cấm ERP.*** |
| domain | **AiVision** |
| prior | PO `done` · `po/requirement.md` · controlHint hash `sha256:f49800a01d06c3df4ab4058c5b2b6ecde131fe8362a040481a88daa4897e8983` |
| skillVersion | `2026.08.15.16` |
| schemaVersion | `1` |
| workflowVersion | `2026.08.16.02` |
| rulesVersion | `2026.08.15.25` |
| versionGate | `ok` · keep_current (khớp STATUS/PO chain) |
| shared_grid_example | `v1` |
| slideout_layout | `footer_actions_only` |
| leave_standard | `LeaveConfirmModal` · `/implement-show-leave-confirm` |
| list_config | **FULL** · `LinCatalogUiSchemaEditorModal` · **cấm** Zone F-only / `configHint` / `LinListTableConfigModal` |
| real_view_parity | `v1` |
| peerStdUrl | `http://localhost:9303/ai-vision/ai-asset-detect` |
| mfeStdUrl | `http://localhost:9303/ai-vision/estimate` |
| taskId | `task_c88d66ca` |
| updatedAt | `2026-08-17T09:09:02.000Z` |

## 0. Context & Demo (from PO)

| ID | Path | Notes |
|----|------|-------|
| CTX-01 | `docs/context/features/estimate.md` | Goal · GAP · legacy `/ai-estimate` → reconcile AiVision |
| CTX-02 | `demo-maps/estimate-control-map.md` | Kind D · 20f · 13a |
| CTX-03 | `demo-maps/estimate-actions.md` | ACTION WORK GATE |
| DEM-01 | `Linm.RMMS.Demo/.../ai-vision/estimate.html` | host + slideout — **không** clone chrome |
| DEM-02 | `…/js/estimate-data.js` · `estimate-app.js` | INC-441 · 3 lines · EST code |
| controlHint | `specs/_data-analy/features/estimate-control-hint.md` | Design **chốt** §5 |
| PO | `specs/estimate/po/requirement.md` | Config FULL · Leave · no AI badge · no auto WO |

Persona: Điều phối · nhà thầu · Ban QLDA. Pack **không** clone chrome GOVOne / note demo.

## 1. Kind + UI pattern

| | |
|--|--|
| Feature Kind | **B** + **D** |
| List | **1×** `LinPageLayout` kind=`catalog` — **cấm** nested `CatalogListShell` |
| Grid | `LinCatalogDataGrid` · kéo cột **default ON** |
| Footer | **`LinCatalogListPagination`** — **cấm** footerPagination / pageSizeBar / raw table |
| Form | Kind **D Slideout** · **footer actions only** (`slideout-form-layout`) |
| Header chrome | **NO AI badge** (`ai-chrome-skip`) — hint P1 chỉ trong Z1h form |
| Tree | **Không** |
| Toolbar icons | `erp-control-icon-map` · config = **`fas fa-cog`** |
| View | `readOnly` display — **cấm** Input disabled xám toàn form |
| Leave | **`LeaveConfirmModal`** — **cấm** native `confirm`/`alert` |

## 2. Screens (expand PO)

| id | Surface | Pattern | Open | FormMode | Actions |
|----|---------|---------|------|----------|---------|
| S-LIST | Danh sách ước lượng | Kind B A–D + F + H | `/ai-vision/estimate` | — | search · clear · create · from-incident · from-defects · refresh · export-stub · history · **config FULL** |
| S-FORM | Form ước lượng | Kind D Slideout Z1–Z3 | toolbar / row / `?form=` | C/E/V | **footer only**: Hủy · Lưu nháp · Xác nhận · Gắn CV · Đóng/Sửa (View) |
| S-MOD-CONFIRM | Xác nhận số liệu | Modal stacked | footer / row | — | Hủy · Xác nhận |
| S-MOD-LEAVE | Rời form dirty | `LeaveConfirmModal` | Đóng/Hủy/route | — | Ở lại · Rời đi |
| S-MOD-CONFIG | Cấu hình hiển thị | `LinCatalogUiSchemaEditorModal` | fa-cog | — | List/width/filter/sort/Thêm cột |
| S-MOD-HIST | Lịch sử | `LinCatalogHistoryModal` | toolbar / row | — | stub OK P1 |

**devSlash:** `/agent-dev` · **cấm** `/agent-dev-ai-detect`.

## 3. Prototype + reviewUrl (REQUIRED)

| | |
|--|--|
| Base | `agent-design/example/shared-grid-example.html` |
| Artifact | [`ui/prototype/estimate-list-prototype.html`](./prototype/estimate-list-prototype.html) |
| Scope | **content-only** — skip note/sidebar/menu/chrome demo |
| Zones | DES-GRID-A · B · FILTER · C0–C3 · C2a · D · **F (ui-schema FULL)** · H · Z (Z1–Z3) · DES-MOD-CONFIRM · DES-MOD-LEAVE |
| TL map | `tl-design-grid-component-map.md` |
| SSOT | `list-shell-prototype` · `po-design-grid-standard` · `slideout-form-layout` · `design-real-view-parity` |
| **reviewUrl** | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/estimate/ui/prototype/estimate-list-prototype.html` |
| **peerStdUrl** | `http://localhost:9303/ai-vision/ai-asset-detect` |
| **real_view_parity** | `v1` — cùng shell peer Kind B AiVision (`LinPageLayout` · toolbar · filter · grid · pager) |

### Wire (list A–D)

```
[A] fa-calculator + «AI ước lượng sửa chữa»  (NO AI badge · no Thêm trên A)
[B] Làm mới · Lịch sử · fa-cog · Xem/Sửa · Từ sự cố · Từ detections · Export | [+ Tạo ước lượng]
[FILTER] Dropdown status · Dropdown nguồn · Date from/to · Xóa lọc
[C] title · row-menu help · SearchTextInput (search must work) · grid STT·□·Mã·Sự cố·Nguồn·Tuyến·Loại·Tổng·TT·Model·Ngày·⋮
[D] LinCatalogListPagination — Tổng · Trang · Hiển thị [50|100|200|500] · FA ««‹›»»
[F] LinCatalogUiSchemaEditorModal «Cấu hình hiển thị danh mục» — List/width/filter/sort/Thêm cột
[H] LinCatalogHistoryModal (stub)
```

### Wire (slideout DES-GRID-Z · footer only)

```
[Z1] title · mode badge · dirty · hint (ước lượng từ AI · xác nhận thủ công) — cấm top Quay lại/Hủy/Lưu
[Z2a] validation banner
[Z2b] header fields (control-map §5.2)
[Z2d] lines grid pattern_inline_grid · Thêm/Sửa/Xóa dòng
[Z3] total LabelMoney
     View: Đóng / Sửa
     C/E: Hủy / Lưu nháp / Xác nhận / Gắn Công việc
```

## 4. DES-GRID → Lin* map

| Zone | Design | Component |
|------|--------|-----------|
| A | DES-GRID-A | `LinPageLayout` / `LinPageHeader` |
| B | DES-GRID-B | `catalogToolbar` · `ERP_LIST_TOOLBAR_ACTIONS` |
| FILTER | DES-GRID-FILTER | Zone B filters (`ErpListHeaderFilters` / filter bar) |
| C0 | DES-GRID-C0 | grid card title + help |
| C1 | DES-GRID-C1 | `SearchTextInput` — **search must work** |
| C2 | DES-GRID-C2 | `LinCatalogDataGrid` · `buildDynamicGridColumns` · kéo cột ON |
| C2a | DES-GRID-C2a | column filter panel |
| C3 | DES-GRID-C3 | `LinCatalogRowActionMenu` |
| D | DES-GRID-D | **`LinCatalogListPagination`** |
| F | DES-GRID-F | **`LinCatalogUiSchemaEditorModal`** · `useCatalogUiSchema` · catalogKind=`ai-estimates` |
| H | DES-GRID-H | `LinCatalogHistoryModal` |
| Z | DES-GRID-Z | Kind D slideout footer-only |
| — | shell | **1×** `LinPageLayout` |

**Config FULL (HARD):** title «Cấu hình hiển thị danh mục» · bảng cột List/width/filter/sort/Thêm cột · BE `CatalogUiSchemaRegistry` + Seed `ai-estimates` · **cấm** `LinListTableConfigModal` · **cấm** leftover `const columns` / `LinCatalogDataColumn` · **cấm** `configHint` / Zone F-only height modal (**GAP-P2-CC-06** / **GAP-DEV-CONFIG-PLACEHOLDER-01**).

## 5. Control-map (chốt từ controlHint)

### 5.1 List filters

| Field key | Label | Control (chốt) | catalogKind | Notes |
|-----------|-------|----------------|-------------|-------|
| search | Tìm kiếm | `SearchTextInput` (C1) | text | EST · incident · tuyến · model · detectionIds — **must work** |
| status | Trạng thái | `Dropdown` | enum | draft / confirmed · trống = Tất cả |
| sourceType | Nguồn | `Dropdown` | enum | from-incident / from-defects |
| fromDate / toDate | Từ / Đến ngày | `Date` | — | `createdAt` |

### 5.2 Form fields

| Field key | Label | Control | Required | FormMode lock | Notes |
|-----------|-------|---------|----------|---------------|-------|
| code | Mã ước lượng | `Text` | auto | all readonly | `EST-YYYYMMDD-NNNN` |
| incidentId | Sự cố / Vấn đề | `SearchInput` | * | view display | incident lookup |
| sourceType | Nguồn | `Dropdown` | * | view display | init-data |
| detectionIds | Detection IDs | `Text` | | view display | CSV |
| routeSection | Tuyến / đoạn | `Text` | | view display | free P1 |
| defectType | Loại hư hỏng | `Dropdown` | * | view display | init-data |
| defectArea | Diện tích (m²) | `Text` (number) | * | view display | |
| severity | Mức độ | `Dropdown` | * | view display | Critical/High/Medium/Low |
| model | Model AI | `Text` | | all readonly | `gpt-4o` |
| laborHours | Giờ nhân công | `Text` (number) | | view display | |
| equipment | Thiết bị | `Text` | | view display | |
| durationDays | Thời gian thi công (ngày) | `Text` (number) | | view display | |
| totalAmount | Tổng chi phí | `LabelMoney` | | computed footer | qty×price |
| status | Trạng thái | `Dropdown` | * | locked sau confirm | draft / confirmed |

### 5.3 Lines grid (`pattern_inline_grid`)

| Field key | Label | Control | Required | Notes |
|-----------|-------|---------|----------|-------|
| lineItem | Hạng mục | `Text` | * | BTN/BOC/NC… · UnitPriceCatalog **DEFER P2** |
| lineQty | Khối lượng | `Text` (number) | * | |
| lineUnit | Đơn vị | `Text` | * | m2 / m3 / công |
| lineUnitPrice | Đơn giá | `LabelMoney` | * | P1 manual |
| lineAmount | Thành tiền | `LabelMoney` | | readonly = qty × unitPrice |
| lineNote | Ghi chú dòng | `Text` | | |

**Lines toolbar:** Thêm dòng · Xóa dòng · inline edit · **không** cột TT trên header lines.

### List columns (kéo cột ON)

STT · □ · Mã · Sự cố · Nguồn · Tuyến · Loại hư hỏng · Tổng · TT · Model · Ngày · ⋮

### Row menu

Xem · Sửa · Xác nhận · Xóa (draft) · Lịch sử (stub OK)

## 6. Leave / alert (REQUIRED · GAP-DES-LEAVE-01)

| Case | Control | Cấm |
|------|---------|-----|
| Dirty form / Đóng / Hủy / route leave | **`LeaveConfirmModal`** | native `window.confirm` / `beforeunload` only |
| Xóa draft / chặn confirm | **`useAlert` / `Modal`** | `window.alert` / `prompt` |
| Confirm số liệu trên Slideout | **Modal stacked** | native confirm |
| History | `LinCatalogHistoryModal` | custom history dialog ad-hoc |

## 7. Seed / DoD (prototype mock)

- `EST-20260817-0001` · INC-441 · 3 dòng BOC/BTN/NC · draft · tổng ~5.625.000 ₫
- Confirm modal · leave-confirm dirty
- Config modal FULL (mock cột schema)
- **Không** auto WO · **không** AI badge header
- Search C1 lọc mã/sự cố/tuyến/model

## 8. APIs (handoff SA — chốt path)

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

## 9. Out of scope (align PO)

- Auto WorkOrder / `estimate.created` → Maintenance — **DEFER P2**
- UnitPriceCatalog tenant UI — **DEFER P2**
- Legacy `/api/v1/ai-estimate/*`
- ERP.* / `Domains/Master` / `api/v1/rmms/*`
- AI badge trên header

## Confirm

`design_confirm` = **approve** (board APPROVE→CHAIN · task_ecb4792c).

## Handoff → SA

| Field | Value |
|-------|-------|
| Kind / pattern | B list A–D + D slideout footer-only · Config **FULL** |
| Field inventory / control-map | §5 |
| Prototype · reviewUrl | §3 |
| Leave | §6 `LeaveConfirmModal` |
| APIs | §8 — SA chốt |
| Domain | **AiVision** · BE `Linm.RMMS.WebService` · **cấm ERP.*** |
| Entity | `EstimateAuditEntity` + `EstimateLineEntity` · no `*LinesJson` |
| catalogKind | `ai-estimates` (ui-schema seed) |
| Next | `/agent-sa` done · SA `await_confirm` (autoApprove=OFF) · TL sau Approve `solution_confirm` |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-design |
| skillVersion | 2026.08.15.16 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.16.02 |
| rulesVersion | 2026.08.15.25 |
| generatedAt | 2026-08-17T09:09:02.000Z |
| versionGate | ok |
| contentHash | sha256:f49800a01d06c3df4ab4058c5b2b6ecde131fe8362a040481a88daa4897e8983 |
| taskId | task_c88d66ca |

---
<!-- Version meta: skillVersion=2026.08.15.16 · schemaVersion=1 · workflowVersion=2026.08.16.02 · versionGate=ok -->
