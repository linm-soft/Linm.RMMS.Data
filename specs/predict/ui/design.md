# Design — predict (AI dự báo bảo trì)

| Field | Value |
|-------|-------|
| feature | `predict` |
| this role | `design` · `/agent-design` |
| Feature Kind | **B** catalog list + **D** slideout form |
| changeScope | `new_page` |
| packKind | `ai` |
| featureClass | `ai` (Kind B list + Kind D slideout) |
| status | `confirmed` |
| design_confirm | **approve** (`autoApprove=ON` · task_fe23f841 · chain SA) |
| autoApprove | **ON** (`task_fe23f841`) → agent confirm · chain SA |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.AiVision` · route `/ai-vision/predict` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · `api/v1/ai-vision/predict` · **cấm ERP.*** |
| domain | **AiVision** |
| prior | data-analy `confirmed` · PO `done` · controlHint hash `sha256:predict-ctx-demo-20260817` |
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
| peerStdUrl | `http://localhost:9303/ai-vision/estimate` |
| mfeStdUrl | `http://localhost:9303/ai-vision/predict` |
| taskId | `task_e95e3780` |
| updatedAt | `2026-08-17T10:50:00.000Z` |

## 0. Context & Demo (from PO)

| ID | Path | Notes |
|----|------|-------|
| CTX-01 | `docs/context/features/predict.md` | Goal · GAP-F-PRD-* · legacy `/ai-predict` → reconcile AiVision |
| CTX-02 | `demo-maps/predict-control-map.md` | Kind B+D · fields |
| CTX-03 | `demo-maps/predict-actions.md` | 20 actions |
| DEM-01 | `Linm.RMMS.Demo/.../ai-vision/predict.html` | list + slideout — **không** clone chrome |
| DEM-02 | `…/js/predict-data.js` · `predict-app.js` | 8 đoạn · score 0–100 |
| DEM-03 | `…/features/predict-demo.html` | demo hub redirect |
| controlHint | `specs/_data-analy/features/predict-control-hint.md` | Design **chốt** §5 |
| PO | `specs/predict/po/requirement.md` | Config FULL · Leave §6b · no AI badge · no auto WO |

Persona: Ban QLDA · kế hoạch bảo trì. Pack **không** clone chrome GOVOne / note demo.

## 1. Kind + UI pattern

| | |
|--|--|
| Feature Kind | **B** + **D** |
| List | **1×** `LinPageLayout` kind=`catalog` — **cấm** nested `CatalogListShell` |
| Grid | `LinCatalogDataGrid` · kéo cột **default ON** |
| Footer | **`LinCatalogListPagination`** — **cấm** footerPagination / pageSizeBar / raw table |
| Form | Kind **D Slideout** · **footer actions only** (`slideout-form-layout`) |
| Header chrome | **NO AI badge** (`ai-chrome-skip`) — model chỉ cột/form |
| Tree | **Không** |
| Toolbar icons | `erp-control-icon-map` · config = **`fas fa-cog`** |
| View | `readOnly` display — **cấm** Input disabled xám toàn form |
| Leave | **`LeaveConfirmModal`** — **cấm** native `confirm`/`alert` |
| KPI | Strip trên grid: count · avg score · major_rehab · horizon |

## 2. Screens (expand PO)

| id | Surface | Pattern | Open | FormMode | Actions |
|----|---------|---------|------|----------|---------|
| S-LIST | Danh sách ưu tiên dự báo | Kind B A–D + KPI + F + H | `/ai-vision/predict` | — | refresh · batch · export-stub · dashboard-stub · sort score · refresh KPI · history · **config FULL** · filter apply/clear |
| S-FORM | Chi tiết dự báo đoạn | Kind D Slideout Z1–Z3 | row / `?section=` | V/E note | **footer only**: Hủy · Lưu ghi chú · Ưu tiên đại tu · Gắn kế hoạch BT · Chạy lại · Đóng |
| S-MOD-LEAVE | Rời form dirty | `LeaveConfirmModal` | Đóng/Hủy/route | — | Ở lại · Rời đi |
| S-MOD-CONFIG | Cấu hình hiển thị | `LinCatalogUiSchemaEditorModal` | fa-cog | — | List/width/filter/sort/Thêm cột |
| S-MOD-HIST | Lịch sử audit | `LinCatalogHistoryModal` | toolbar / slideout / row | — | stub OK P1 |

**devSlash:** `/agent-dev` · peer Estimate · **cấm** `/agent-dev-ai-detect`.

## 3. Prototype + reviewUrl (REQUIRED)

| | |
|--|--|
| Base | `agent-design/example/shared-grid-example.html` · peer estimate prototype |
| Artifact | [`ui/prototype/predict-list-prototype.html`](./prototype/predict-list-prototype.html) |
| Scope | **content-only** — skip note/sidebar/menu/chrome demo |
| Zones | DES-GRID-A · B · FILTER · KPI · C0–C3 · C2a · D · **F (ui-schema FULL)** · H · Z (Z1–Z3) · DES-MOD-LEAVE |
| TL map | `tl-design-grid-component-map.md` |
| SSOT | `list-shell-prototype` · `po-design-grid-standard` · `slideout-form-layout` · `design-real-view-parity` · `ai-chrome-skip` |
| **reviewUrl** | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/predict/ui/prototype/predict-list-prototype.html` |
| **peerStdUrl** | `http://localhost:9303/ai-vision/estimate` |
| **real_view_parity** | `v1` — cùng shell peer Kind B AiVision (`LinPageLayout` · toolbar · filter · KPI · grid · pager) |

### Wire (list A–D + KPI)

```
[A] fa-road + «AI dự báo bảo trì»  (NO AI badge · no Thêm trên A)
[B] Làm mới · Chạy dự báo hàng loạt · Xuất Excel · Mở Dashboard · Sort score · Refresh KPI · Lịch sử · fa-cog
[FILTER] Dropdown tuyến · Horizon · Top N · Score min · Áp dụng · Xóa lọc
[KPI] Đoạn · Score TB · Ưu tiên đại tu · Horizon
[C] title · row-menu help · grid #·SEC-*·Tên·Score·Tuổi thọ·Khuyến nghị·Model·Dự báo lúc·⋮
[D] LinCatalogListPagination — Tổng · Trang · Hiển thị [50|100|200|500] · FA ««‹›»»
[F] LinCatalogUiSchemaEditorModal «Cấu hình hiển thị danh mục» — List/width/filter/sort/Thêm cột
[H] LinCatalogHistoryModal (audit stub)
```

### Wire (slideout DES-GRID-Z · footer only)

```
[Z1] title · mode badge · dirty — cấm top Quay lại/Hủy/Lưu · Copy mã · (actions → footer/toolbar form only)
[Z1h] hint P1 online LLM · không GPU/train chrome
[Z2a] validation banner (optional)
[Z2b] header fields (control-map §5.2) · features · drivers · chart stub · note
[Z3] View: Đóng / Sửa ghi chú
     E: Hủy / Lưu ghi chú / Ưu tiên đại tu / Gắn kế hoạch BT / Chạy lại
```

## 4. DES-GRID → Lin* map

| Zone | Design | Component |
|------|--------|-----------|
| A | DES-GRID-A | `LinPageLayout` / `LinPageHeader` |
| B | DES-GRID-B | `catalogToolbar` · `ERP_LIST_TOOLBAR_ACTIONS` |
| FILTER | DES-GRID-FILTER | Zone B filters (`ErpListHeaderFilters` / filter bar) |
| KPI | DES-GRID-KPI | KPI strip trên grid card |
| C0 | DES-GRID-C0 | grid card title + help |
| C2 | DES-GRID-C2 | `LinCatalogDataGrid` · `buildDynamicGridColumns` · kéo cột ON |
| C2a | DES-GRID-C2a | column filter panel |
| C3 | DES-GRID-C3 | `LinCatalogRowActionMenu` |
| D | DES-GRID-D | **`LinCatalogListPagination`** |
| F | DES-GRID-F | **`LinCatalogUiSchemaEditorModal`** · `useCatalogUiSchema` · catalogKind=`ai-predict` |
| H | DES-GRID-H | `LinCatalogHistoryModal` |
| Z | DES-GRID-Z | Kind D slideout footer-only |
| — | shell | **1×** `LinPageLayout` |

**Config FULL (HARD):** title «Cấu hình hiển thị danh mục» · bảng cột List/width/filter/sort/Thêm cột · BE `CatalogUiSchemaRegistry` + Seed `ai-predict` · **cấm** `LinListTableConfigModal` · **cấm** leftover `const columns` / `LinCatalogDataColumn` · **cấm** `configHint` / Zone F-only height modal (**GAP-P2-CC-06** / **GAP-DEV-CONFIG-PLACEHOLDER-01**).

## 5. Control-map (chốt từ controlHint)

### 5.1 List filters (Zone B) — **must work**

| Field key | Label | Control (chốt) | catalogKind | Notes |
|-----------|-------|----------------|-------------|-------|
| routeId | Tuyến | `Dropdown` | enum / road-route | ALL / QL1A / QL22 / QL14 · P2 SearchInput |
| horizonMonths | Horizon (tháng) | `Text` (number) | — | default 12 · 1–60 |
| topN | Top N | `Text` (number) | — | default 8 · 1–50 |
| scoreMin | Score tối thiểu | `Text` (number) | — | 0–100 |

### 5.2 Form fields (slideout)

| Field key | Label | Control | Required | FormMode lock | Notes |
|-----------|-------|---------|----------|---------------|-------|
| sectionId | Mã đoạn | `Text` | auto | all readonly | `SEC-*` |
| name | Tên đoạn / Km | `Text` | | all readonly | |
| routeId | Tuyến | `Dropdown` | | view display | |
| score | Score (0–100) | `Text` (number) | | readonly after predict | badge severity |
| horizonMonths | Horizon (tháng) | `Text` (number) | | view display | |
| remainingLifeMonths | Tuổi thọ còn lại | `Text` (number) | | view display | |
| recommend | Khuyến nghị | `Dropdown` | | view display | major_rehab / routine / watch |
| model | Model AI | `Text` | | all readonly | `gpt-4o-mini` · **không** header chrome |
| pci | PCI | `Text` (number) | | view display | |
| traffic | Lưu lượng | `Text` (number) | | view display | |
| material | Vật liệu | `Text` | | view display | |
| ageYears | Tuổi công trình (năm) | `Text` (number) | | view display | |
| weatherAgg | Thời tiết (agg) | `Text` | | view display | |
| repairHistory | Lịch sử SC | `Text` | | view display | |
| predictedAt | Dự báo lúc | `Date` | | all readonly | |
| drivers[] | Drivers | list (key+weight) | | view display | |
| chart[] | PCI trend | chart stub bars | | view | |
| note | Ghi chú khuyến nghị | `Text` multiline | | **dirty leave-confirm** | |

### List columns (kéo cột ON)

Thứ hạng · Mã đoạn · Tên đoạn / Km · Score · Tuổi thọ còn lại · Khuyến nghị · Model · (optional) PCI · Lưu lượng · Vật liệu · Tuổi · Dự báo lúc · ⋮

### Row menu

Xem chi tiết · Chạy dự báo đoạn · Ưu tiên đại tu (stub toast) · Lịch sử

## 6. Leave / alert (REQUIRED · GAP-DES-LEAVE-01)

| Case | Control | Cấm |
|------|---------|-----|
| Dirty note / Đóng / Hủy / route leave | **`LeaveConfirmModal`** | native `window.confirm` / `beforeunload` only |
| Chặn thao tác | **`useAlert` / `Modal`** | `window.alert` / `prompt` |
| Ưu tiên đại tu / Gắn kế hoạch BT | toast stub (P1) | auto WO |
| History | `LinCatalogHistoryModal` | custom history dialog ad-hoc |

## 7. Seed / DoD (prototype mock)

- 8 đoạn · score 0–100 · `SEC-001`… · recommend major_rehab / routine / watch
- Model `gpt-4o-mini` (cột/form only)
- KPI: count · avg · major count · horizon
- Filters Zone B **work** (route / horizon / topN / scoreMin)
- Config modal FULL · leave-confirm dirty note · history stub
- **Không** auto WO · **không** AI badge header · **không** GPU/train chrome

## 8. APIs (handoff SA — chốt path)

Domain **AiVision** · `api/v1/ai-vision/predict` · BFF proxy · **cấm ERP.*** · **cấm** legacy `/ai-predict`.

| Op | Method | Path |
|----|--------|------|
| priority-list | GET | `/api/v1/ai-vision/predict/priority-list` |
| init-data | GET | `/api/v1/ai-vision/predict/init-data` |
| predict 1 | POST | `/api/v1/ai-vision/predict/sections/{id}` |
| batch | POST | `/api/v1/ai-vision/predict/batch` |
| history | GET | `/api/v1/ai-vision/predict/sections/{id}/history` |
| save note | PUT | `/api/v1/ai-vision/predict/sections/{id}/note` |

Entity: `SectionFeatures` + `PredictionAudit` · migration `Schema_RmmsAiVisionPredict`. Event `predict.updated` → Dashboard/Copilot **DEFER P2**.

## 9. Out of scope (align PO)

- Local train XGBoost/ONNX/ML.NET — **OUT P1** (`GAP-F-PRD-01`)
- Real weather/traffic feed — stub/import P1 (`GAP-F-PRD-02`)
- Auto WorkOrder từ «Ưu tiên đại tu» — **OUT P1** (`GAP-F-PRD-04`)
- Platform push `predict.updated` full — DEFER P2
- Legacy `/api/v1/ai-predict/*`
- ERP.* / `Domains/Master` / `api/v1/rmms/*`
- AI badge / P1-P2 chrome trên list header

## Confirm

`design_confirm` = **approve** · `autoApprove=ON` · STATUS design **confirmed** · SA **done** (`task_fe23f841`).

## Handoff → SA

| Field | Value |
|-------|-------|
| Kind / pattern | B list A–D + KPI + D slideout footer-only · Config **FULL** |
| Field inventory / control-map | §5 |
| Prototype · reviewUrl | §3 |
| Leave | §6 `LeaveConfirmModal` |
| APIs | §8 — SA chốt |
| Domain | **AiVision** · BE `Linm.RMMS.WebService` · **cấm ERP.*** |
| Entity | `SectionFeatures` + `PredictionAudit` |
| catalogKind | `ai-predict` (ui-schema seed) |
| Next | `/agent-sa` **done** · `solution_confirm=approve` · chain `/agent-team-lead` |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-design |
| skillVersion | 2026.08.15.16 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.16.02 |
| rulesVersion | 2026.08.15.25 |
| generatedAt | 2026-08-17T10:50:00.000Z |
| versionGate | ok |
| contentHash | sha256:predict-ctx-demo-20260817 |
| taskId | task_e95e3780 |

---
<!-- Version meta: skillVersion=2026.08.15.16 · schemaVersion=1 · workflowVersion=2026.08.16.02 · versionGate=ok -->
