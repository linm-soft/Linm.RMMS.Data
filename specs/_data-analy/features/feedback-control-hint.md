# Data-analy — controlHint — feedback (Kind B catalog list + form)

| Field | Value |
|-------|-------|
| feature | `feedback` |
| packKind | `list` |
| mode | `feature_context` (edit_page · **no Excel** · demo + context + live MFE) |
| status | `done` |
| skillId | `agent-data-analy` |
| skillVersion | `2026.08.15.5` |
| schemaVersion | `1` |
| workflowVersion | `2026.08.15.5` |
| rulesVersion | `2026.08.15.8` |
| versionGate | `rechecked` |
| contentHash | `sha256:feedback-delta-fullpage-schema-20260816` |
| headerFingerprint | `sha256:feedback-header-v2-app-feedbacks` |
| analyzedAt | `2026-08-16T04:53:00.000Z` |
| cluster | — (không Excel header · demo HTML + context + live MFE) |
| taskId | `task_6cb63382` |
| autoApprove | `ON` |

> Data-analy **đề xuất** controlHint. Design **chốt** control-map. SA **chốt** lookup API.  
> **Cấm** Dev đoán Text vs SearchInput khi đã có bảng này.  
> **Cấm ERP.*** · domain **Integration** · BE `D:/AI-QLBD/Linm.RMMS.WebService` · `api/v1/integration/feedbacks`.  
> **≠** Cổng người dân (`citizen`).

## Sources

| Source | Path | Note |
|--------|------|------|
| Context | `docs/context/features/feedback.md` | Kind B inbox + 7 fields · IdCode `FB-*` |
| Demo entry | `Linm.RMMS.Demo/src/demo/features/feedback-demo.html` → `integration/feedback.html` | host mock + Kind D slideout — **không** clone chrome |
| Control map | `docs/context/_raw/legacy-govone/demo-maps/feedback-control-map.md` | labels 7 |
| MFE live | `Linm.Web.RMMS.Integration` · `/integration/feedback` | `FeedbackListPage` + **Slideout** (stale vs SSOT) |
| Prior design.md | `specs/feedback/ui/design.md` | Slideout + View=`readOnly` — **GAP docs** |
| Shared catalogs | `INVESTIGATE-CUC2.md` | không master Excel · enum tĩnh |

Normalized header (no Excel):

`code|senderName|role|submittedAt|category|body|status|userId|search`

## § Delta Current vs New (`edit_page`)

Giữ PO/Design/SA artifacts đã confirmed. Delta **bắt buộc** `task_6cb63382`:

| ID | Current (MFE/BE 2026-08-15) | New (SSOT) | Surface |
|----|-----------------------------|------------|---------|
| GAP-F-SLIDE-01 | Form `FeedbackFormSlideout` + View Input `readOnly` | Kind B **full-page** `FeedbackFormPage` · View=`<dl>` display | form |
| GAP-DEV-CONFIG-PLACEHOLDER-01 | `configHint` dialog | `LinCatalogUiSchemaEditorModal` title «Cấu hình hiển thị danh mục» + `useCatalogUiSchema` · `buildDynamicGridColumns` | list |
| GAP-DEV-GRID-SCHEMA-BOOTSTRAP-01 | leftover `const columns` / `LinCatalogDataColumn` | seed `CatalogUiSchemaRegistry.AppFeedbacks` = `app-feedbacks` | BE Integration + FE |
| GAP-LIST-FILTER-STATUS | Zone B `Select` native | `SearchInput` enum status · **cấm** native `<select>` | list |
| GAP-FORM-LKP-01 | Form `Select` role/category/status | `SearchInput` static enum | form |

**Không** đổi: Kind B list A–D · IdCode `FB-YYYYMMDD-NNNN` · CRUD `api/v1/integration/feedbacks` · badge ≠ citizen · SearchTextInput tìm · LinPageLayout 1 shell · `LinCatalogListPagination` · domain Integration.

Demo host chrome / localStorage-only send — **SKIP** MFE list pack (BE signed).

## Kind / zones (handoff Design)

| Zone | Pattern | DoD |
|------|---------|-----|
| A | Header | title «Góp ý phần mềm» — **cấm** Thêm mới trên A |
| B | Toolbar + filter | SearchTextInput · SearchInput trạng thái · Tạo mới · Refresh · Delete · History · config FULL |
| C | `LinCatalogDataGrid` | kéo cột default ON · STT · Mã · Người gửi · Vai trò · Loại · Nội dung · Thời gian · Trạng thái · row menu |
| D | Footer | `LinCatalogListPagination` 50/100/200/500 |
| Form | Kind B **full-page** | C/E/V/Copy · View=`<dl>` · **cấm** Slideout/Resource/View=`readOnly` Input · footer Gửi/Nháp/Hủy · leave-confirm |
| F | Schema editor | `LinCatalogUiSchemaEditorModal` · **cấm** `LinListTableConfigModal` · **cấm** `configHint` |

**Skip chrome:** logo · hamburger · user menu demo · Ban.TK.

## Control hint — list filters (Zone B · list pack)

| Field key | Label | controlHint | catalogKind | Notes |
|-----------|-------|-------------|-------------|-------|
| search | Tìm kiếm | `SearchTextInput` | text | mã · người gửi · vai trò · loại · nội dung |
| status | Trạng thái | `SearchInput` | enum feedback-status | draft/sent · trống = tất cả · **cấm** native Select |

## Control hint — form fields

| Field key | Label | controlHint | required | Notes |
|-----------|-------|-------------|----------|-------|
| code | Mã góp ý | `Text` | auto | IdCode `FB-YYYYMMDD-NNNN` readonly |
| senderName | Người gửi | `Text` | * | |
| role | Vai trò | `SearchInput` | * | static 3 · **cấm** native Select |
| submittedAt | Thời gian | `DateTime` | * | datetime-local |
| category | Loại góp ý | `SearchInput` | * | loi · de-xuat · ux · khac |
| body | Nội dung cần góp ý | `Text` | * | textarea |
| status | Trạng thái | `SearchInput` | * | draft · sent |
| userId | UserId | `Text` | | optional |

## Lookup API (handoff SA)

| catalogKind | Source | Notes |
|-------------|--------|-------|
| feedback-status | static FE | draft · sent |
| feedback-role | static FE | tuan-duong · quan-ly · tuan-kiem |
| feedback-category | static FE | loi · de-xuat · ux · khac |
| app-feedbacks | `CatalogUiSchemaRegistry` | list column schema |

Không CUC2 master cho góp ý phần mềm.

## Handoff

- Design: chốt full-page + schema editor; prototype A–D content-only.
- SA: seed `app-feedbacks` trên Integration CatalogUiSchema (BFF đã có).
- TL: T-UI-LKP · T-UI-FIELD · T-UI-PROD · T-UI-UX · T-BE-SCHEMA.
- Dev: cấm Slideout / configHint / leftover `const columns`.

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-data-analy |
| skillVersion | 2026.08.15.5 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.15.5 |
| rulesVersion | 2026.08.15.8 |
| generatedAt | 2026-08-16T04:53:00.000Z |
| versionGate | rechecked |
| taskId | `task_6cb63382` |
