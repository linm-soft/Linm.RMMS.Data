# PO — predict (AI dự báo bảo trì)

| Field | Value |
|-------|-------|
| feature | `predict` |
| changeScope | `new_page` |
| packKind | `ai` (packet list → Kind **B** catalog + Kind **D** slideout) |
| featureClass | `ai` — Kind **B** catalog list + Kind **D** slideout |
| requestSource | run packet `task_06a5bfcf` · `/agent-qldb-workflow` · roleOnly=`po` · Autopilot ON · autoApprove **OFF** |
| status | `done` |
| controlHint | `specs/_data-analy/features/predict-control-hint.md` |
| contentHash (data-analy) | `sha256:predict-ctx-demo-20260817` |
| skillVersion | `2026.08.15.17` |
| schemaVersion | `1` |
| workflowVersion | `2026.08.16.02` |
| rulesVersion | `2026.08.15.25` |
| versionGate | `ok` |
| grid_standard | `po-design-grid-standard` |
| slideout_layout | `footer_actions_only` |
| leave_standard | `LeaveConfirmModal` · `/implement-show-leave-confirm` |
| list_config | **FULL** · `LinCatalogUiSchemaEditorModal` · **cấm** Zone F-only / `configHint` / `LinListTableConfigModal` |
| updatedAt | `2026-08-17T10:45:00.000Z` |

> **DOMAIN-MAP:** slug `predict` → AiVision · API **`api/v1/ai-vision/predict`** (reconcile legacy `/api/v1/ai-predict/*`). **Cấm ERP.***

## 1. Goal

Align demo **AI dự báo bảo trì** (priority list đoạn đường · score · tuổi thọ còn lại · khuyến nghị đại tu từ features PCI/lưu lượng/vật liệu/tuổi/SC) → MFE `Linm.Web.RMMS.AiVision` route `/ai-vision/predict` + BE `Linm.RMMS.WebService` domain **AiVision**.

Kind B catalog parity: 1× `LinPageLayout` · toolbar · filters **work** · KPI strip · `LinCatalogDataGrid` · footer `LinCatalogListPagination` · row menu · View/Edit note. Kind D slideout **footer actions only** · leave-confirm dirty note. P1: **online LLM** · **không** train XGBoost/GPU chrome · **không** AI badge trên header · **không** auto WorkOrder.

## 2. Current → New (new_page)

| Layer | Current | New (delta) |
|-------|---------|-------------|
| Demo | Kind B list + Kind D slideout · 8 đoạn · localStorage / fake | Giữ UX SSOT; **không** clone chrome GOVOne |
| MFE | `Linm.Web.RMMS.AiVision` · `/ai-vision/predict` | Kind B priority list + Kind D form · list config **FULL** |
| API client | canonical `api/v1/ai-vision/predict/*` | BFF proxy · local fallback P1 OK |
| BE | AiVision · Schema_RmmsAiVisionPredict | DOMAIN-MAP slug `predict` · **cấm** legacy `/ai-predict` · **cấm ERP.*** |
| Persist | Demo mock → API | SectionFeatures + PredictionAudit · note CRUD |

## 3. Personas / DoD

- Persona: Ban QLDA · kế hoạch bảo trì
- DoD P1 (đo được):
  1. List load + filters Zone B **work** (`routeId` · `horizonMonths` · `topN` · `scoreMin`) · Áp dụng / Xóa lọc
  2. KPI strip: count · avg score · major_rehab count · horizon
  3. Toolbar: Làm mới · Chạy dự báo hàng loạt · Xuất Excel stub · Mở Dashboard stub · Sort score · Refresh KPI · History · config `fa-cog` (**FULL ui-schema**) · **không** badge `AI` / P1/P2/model id trên header (`ai-chrome-skip`)
  4. Grid: rank · `SEC-*` · score badge · remaining life · recommend · model · optional meta · row menu
  5. Row: Xem chi tiết · Chạy dự báo đoạn · Ưu tiên đại tu (stub toast)
  6. Slideout View/Edit note · drivers · chart stub · audit · **footer actions only**
  7. View fields = `readOnly` (không disabled xám) · **cấm** Resource/Slideout/View=readOnly sai pattern
  8. Leave-confirm khi note dirty (`LeaveConfirmModal`)
  9. «Ưu tiên đại tu» / «Gắn kế hoạch BT» = stub toast · **không** auto WO
  10. FE `yarn build` + typecheck PASS · BE `dotnet build` PASS · **cấm ERP.***

## 4. CTX / DEM inventory

| ID | Path | Loại | Notes |
|----|------|------|-------|
| CTX-01 | `docs/context/features/predict.md` | feature P0 | API · entity · GAP-F-PRD-* |
| CTX-02 | `docs/context/_raw/legacy-govone/demo-maps/predict-control-map.md` | control-map | Kind B+D · fields |
| CTX-03 | `docs/context/_raw/legacy-govone/demo-maps/predict-actions.md` | actions | **20** actions |
| CTX-04 | `docs/context/15-SCREEN-AI-MAP.md` · RMMS §8 | platform | predict / dashboard |
| DEM-01 | `Linm.RMMS.Demo/src/demo/ai-vision/predict.html` | Signed demo | list + slideout |
| DEM-02 | `…/js/predict-data.js` · `predict-app.js` | seed | 8 đoạn · score 0–100 |
| DEM-03 | `Linm.RMMS.Demo/src/demo/features/predict-demo.html` | redirect | demo hub |
| DI | — | N/A | controlHint từ demo+context · không Excel |
| controlHint | `specs/_data-analy/features/predict-control-hint.md` | P0 | **copy bảng §7** · status=`confirmed` · hash khớp |
| MFE | `Linm.Web.RMMS.AiVision` | board | uiRepo tick trước Dev |
| BE | `Linm.RMMS.WebService` · `api/v1/ai-vision/predict` | board | beRepo tick trước Dev · **cấm ERP.*** |

### List columns (required)

Thứ hạng · Mã đoạn (`SEC-*`) · Tên đoạn / Km · Score · Tuổi thọ còn lại · Khuyến nghị · Model · (optional) PCI · Lưu lượng · Vật liệu · Tuổi · Dự báo lúc · actions

### Seed DoD (demo → real)

- 8 đoạn ưu tiên · score 0–100 · recommend `major_rehab` / `routine` / `watch`
- IdCode section `SEC-*` · model field `gpt-4o-mini` (cột/form only — **không** header chrome)
- Batch predict + rerun section · note save · history audit

## 5. Screens

| id | Surface | Pattern | Route / open | FormMode | Actions |
|----|---------|---------|--------------|----------|---------|
| S-LIST | Danh sách ưu tiên dự báo | Kind B full page · A–D + KPI | `/ai-vision/predict` | — | filter apply/clear, refresh, batch predict, export-stub, dashboard-stub, sort score, refresh KPI, history, **config FULL** |
| S-FORM | Chi tiết dự báo đoạn | Kind D Slideout | row / `?section=` | V/E note | **footer only**: Hủy · Lưu ghi chú · Ưu tiên đại tu · Gắn kế hoạch BT · Chạy lại · Đóng |
| S-MOD-HISTORY | Lịch sử audit | Modal | toolbar / slideout | — | Đóng · `LinCatalogHistoryModal` |

**devSlash:** `/agent-dev` (+ AI pack list CRUD · `form-type-task-pack`) · peer Estimate · **không** `/agent-dev-ai-detect`.

**Cấm GAP-PO-SCREEN-01.** Design prototype **content-only** zones A–D + KPI + slideout — skip note/sidebar/menu/chrome demo. **Cấm** text «Kind D» / «stub» trong UI end-user nếu tránh được.

## 6. Grid list AC (REQUIRED · Kind B)

| Area | Acceptance |
|------|------------|
| **Shell A–D** | Header · Toolbar · Grid card · Pagination footer · 1× `LinPageLayout` (**cấm** nested CatalogListShell) |
| **Toolbar FULL** | Làm mới · Chạy dự báo hàng loạt · Xuất Excel stub · Mở Dashboard stub · Sort score · Refresh KPI · Lịch sử · Sửa config (`fa-cog`) · **không** AI badge header |
| **Grid menu** | Xem chi tiết / Chạy dự báo đoạn / Ưu tiên đại tu / Lịch sử · help đúp/Ctrl+chuột phải |
| **Config FULL** | **`LinCatalogUiSchemaEditorModal`** title «Cấu hình hiển thị danh mục» · List/width/filter/sort/Thêm cột · `useCatalogUiSchema` · `buildDynamicGridColumns` · BE `CatalogUiSchemaRegistry` + Seed `{catalogKind}` · kéo cột default ON · **cấm** Zone F-only · **cấm** `LinListTableConfigModal` · **cấm** `configHint` · **cấm** leftover `const columns` / `LinCatalogDataColumn` |
| **Grid flow** | Sort cột · filter cột panel · chọn dòng · flex+skeleton |
| **Filter Zone B** | Dropdown/Text number — **filters must work** · **không** nút Tìm trùng toolbar · filter-bar-layout-hard |
| **KPI** | Strip trên grid: count · avg · major · horizon |
| **Form pair** | View/Edit note → Slideout · History → Modal |
| **Pagination** | **`LinCatalogListPagination`** — **cấm** footerPagination / pageSizeBar / raw table footer |
| **Tree?** | no |
| **SSOT** | `shared-grid-example` · `po-design-grid-standard` · `slideout-form-layout` · `tl-grid-full-flow` · `ai-chrome-skip` |

## 6b. Leave / alert (REQUIRED · GAP-PO-LEAVE-01)

| Case | Control | Cấm |
|------|---------|-----|
| Dirty note / Đóng / Hủy / route leave | **`LeaveConfirmModal`** (`/implement-show-leave-confirm`) | native `window.confirm` / `beforeunload` only |
| Xóa / chặn thao tác | **`useAlert` / `Modal`** | `window.alert` / `prompt` |
| Ưu tiên đại tu / Gắn kế hoạch BT | toast stub (P1) | auto WO |
| History | `LinCatalogHistoryModal` | custom history dialog ad-hoc |

## 7. Control hints (copy data-analy)

### 7.1 List filters (Zone B)

| Field key | Label | controlHint | catalogKind | Notes |
|-----------|-------|-------------|-------------|-------|
| routeId | Tuyến | `Dropdown` | enum / road-route | demo QL1A/QL22/QL14/ALL · P2 SearchInput road-route |
| horizonMonths | Horizon (tháng) | `Text` (number) | — | default 12 · 1–60 |
| topN | Top N | `Text` (number) | — | default 8 · 1–50 |
| scoreMin | Score tối thiểu | `Text` (number) | — | 0–100 |

### 7.2 Grid columns

| Field key | Label | controlHint | Notes |
|-----------|-------|-------------|-------|
| rank | Thứ hạng | `Text` (number) | derived |
| sectionId | Mã đoạn | `Text` | `SEC-*` |
| name | Tên đoạn / Km | `Text` | |
| score | Score | `Text` (number) | 0–100 · badge severity |
| remainingLifeMonths | Tuổi thọ còn lại | `Text` (number) | tháng |
| recommend | Khuyến nghị | `Dropdown` | major_rehab / routine / watch |
| model | Model | `Text` | readonly · cột/form only |
| pci / traffic / material / ageYears | meta | `Text` | column picker optional |
| weatherAgg / repairHistory | meta | `Text` | optional |
| predictedAt | Dự báo lúc | `Date` | local display |

### 7.3 Form fields (slideout)

| Field key | Label | controlHint | required | Notes |
|-----------|-------|-------------|----------|-------|
| sectionId | Mã đoạn | `Text` | auto | readonly |
| name | Tên đoạn / Km | `Text` | | readonly |
| routeId | Tuyến | `Dropdown` | | readonly on view |
| score | Score | `Text` (number) | | readonly after predict |
| horizonMonths | Horizon | `Text` (number) | | |
| remainingLifeMonths | Tuổi thọ còn lại | `Text` (number) | | |
| recommend | Khuyến nghị | `Dropdown` | | |
| model | Model | `Text` | | readonly |
| pci / traffic / material / ageYears | features | `Text` | | |
| weatherAgg / repairHistory | features | `Text` | | |
| predictedAt | Dự báo lúc | `Date` | | readonly |
| drivers[] | Drivers | list | | key + weight |
| chart[] | PCI trend stub | chart | | bars |
| note | Ghi chú khuyến nghị | `Text` | | multiline · **dirty leave-confirm** |

## 8. APIs (đề xuất SA)

Domain **AiVision** · `api/v1/ai-vision/predict` · BFF proxy · **cấm ERP.*** · **cấm** legacy `/ai-predict`.

| Op | Method | Path |
|----|--------|------|
| priority-list | GET | `/api/v1/ai-vision/predict/priority-list` |
| init-data | GET | `/api/v1/ai-vision/predict/init-data` |
| predict 1 | POST | `/api/v1/ai-vision/predict/sections/{id}` |
| batch | POST | `/api/v1/ai-vision/predict/batch` |
| history | GET | `/api/v1/ai-vision/predict/sections/{id}/history` |
| save note | PUT | `/api/v1/ai-vision/predict/sections/{id}/note` |

Entity: SectionFeatures + PredictionAudit · migration `Schema_RmmsAiVisionPredict`. Event `predict.updated` → Dashboard/Copilot **DEFER P2**.

## 9. Out of scope (this pack)

- Local train XGBoost/ONNX/ML.NET (P2) — `GAP-F-PRD-01`
- Real weather/traffic feed (stub/import P1) — `GAP-F-PRD-02`
- Auto tạo WorkOrder từ «Ưu tiên đại tu» — `GAP-F-PRD-04`
- Platform push `predict.updated` full — DEFER P2
- Legacy path `/api/v1/ai-predict/*`
- ERP.* / `Domains/Master` / `api/v1/rmms/*`
- AI badge / P1-P2 chrome trên list header

## 10. Open questions / GAP list

| ID | Question | Default / Status |
|----|----------|------------------|
| GAP-F-PRD-01 | Local train | **OUT P1** |
| GAP-F-PRD-02 | Weather/traffic source | Stub / import P1 |
| GAP-F-PRD-03 | BE path | **CLOSED for SA** — use `api/v1/ai-vision/predict` (not `/ai-predict`) |
| GAP-F-PRD-04 | Auto WO | **OUT P1** stub Gắn kế hoạch BT |
| GAP-F-PRD-AI-BADGE | AI badge header | **CLOSED** — **không** AI badge trên header |
| GAP-PO-LEAVE-01 | Leave/alert | **CLOSED** — §6b `LeaveConfirmModal` |
| GAP-DEV-CONFIG-PLACEHOLDER-01 | List config | **CLOSED in AC** — Config FULL ui-schema |
| `mfeStdRoute` | — | `/ai-vision/predict` |
| `beRepo` / `uiRepo` | Board | **pending** tick (**không auto**) trước Dev |

## 11. Handoff → Design

| Field | Value |
|-------|-------|
| feature | `predict` |
| phase_from / phase_to | `po` → `design` |
| STATUS | PO **done** · Design **pending** · autoApprove=OFF → Design xong → `await_confirm` |
| controlHint | `_data-analy/features/predict-control-hint.md` · §7 |
| Screens | S-LIST · S-FORM · S-MOD-HISTORY |
| Kind | B list A–D + KPI + D slideout footer-only · **no AI badge** |
| grid_standard | `po-design-grid-standard` · Config **FULL** |
| Leave | `LeaveConfirmModal` · §6b |
| peerStdUrl gợi ý | `http://localhost:9303/ai-vision/estimate` (cùng formType ai · Kind B+D) |
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
| generatedAt | 2026-08-17T10:45:00.000Z |
| versionGate | ok |
| contentHash | sha256:predict-ctx-demo-20260817 |

---
<!-- Version meta: skillVersion=2026.08.15.17 · schemaVersion=1 · workflowVersion=2026.08.16.02 · versionGate=ok -->
