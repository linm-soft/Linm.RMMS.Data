# PO — feedback (Góp ý phần mềm)

| Field | Value |
|-------|-------|
| feature | `feedback` |
| this role | `po` · `/agent-po` |
| changeScope | `edit_page` |
| packKind | `list` |
| gap | `crud_formtype` |
| mode | `fix_gaps` |
| Feature Kind | **B** — Catalog list (admin inbox A–D + Zone F schema) + **Kind B full-page** form (`FeedbackFormPage`) — **cấm** Slideout |
| status | `done` |
| requestSource | run packet `task_3fb91773` · `/agent-qldb-workflow` · roleOnly=`po` · `/agent-po` |
| autoApprove | **ON** (Design/SA/Review khi tới lượt → agent tự confirm · enqueue role kế) |
| prior | data-analy **confirmed** · `specs/_data-analy/features/feedback-control-hint.md` · contentHash `sha256:feedback-delta-fullpage-schema-20260816` · cluster `specs/feedback/specs/_data-analy/clusters/feedback.md` **không tồn tại** — SSOT = feature controlHint · **no Excel** · sourceKind=`synthetic` |
| updatedAt | `2026-08-16T05:02:00.000Z` |
| taskId | `task_3fb91773` |

## 1. Goal

Chỉnh **Góp ý phần mềm**: Kind **B** catalog inbox (zones A–D) + **full-page** form gửi/sửa/xem/sao chép (Z1–Z3). Persona: Tuần đường / Quản lý / Tuần kiểm (gửi) · Điều phối Integration (inbox). Align demo → MFE `Linm.Web.RMMS.Integration` `/integration/feedback` · BE `Linm.RMMS.WebService` domain **Integration** · `api/v1/integration/feedbacks`.

**≠** Cổng người dân (`citizen`) — badge/copy luôn phân biệt.

**Cấm ERP.*** · **cấm** `api/v1/rmms/*` · **cấm** parent JSON · **cấm** `FeedbackFormSlideout` / Resource / View Input `readOnly` · **cấm** `configHint` · **cấm** `LinListTableConfigModal`.

Demo host chrome / localStorage-only send — **SKIP** MFE list pack (BE signed).

## 2. Current → New (edit_page)

| Layer | Current (live 2026-08-16) | New (delta PO chốt) |
|-------|---------------------------|---------------------|
| Demo | Kind D slideout + host mock + localStorage · control-map **Select** / slideout | Giữ visual SSOT demo; pack **không** clone chrome. Control-map demo **stale** — SSOT = data-analy + PO (full-page + SearchInput). |
| Context `feedback.md` | §1 DoD còn «slideout Kind D»; §2 Kind B full-page đã Signed | **IN P1:** DoD = list Kind B + **full-page** form. Design/docs sửa copy slideout còn sót. |
| MFE list | `FeedbackListPage` · SearchInput status · `LinCatalogUiSchemaEditorModal` · `buildDynamicGridColumns` | Giữ A–D + F · 1× `LinPageLayout` · `LinCatalogDataGrid` kéo cột default ON · footer `LinCatalogListPagination` — **cấm** nested CatalogListShell · footerPagination · pageSizeBar · raw table · native `<select>` |
| MFE form | `FeedbackFormPage` `/new` `/:id` · View `<dl>` · SearchInput enum | Giữ full-page C/E/V/Copy · footer Gửi/Nháp/Xóa nội dung/Hủy · leave-confirm · **cấm** Slideout |
| API | `/integration/feedbacks` + BFF | Giữ CRUD · search/status/page/pageSize |
| BE | `AppFeedbacks*` · `rmms_app_feedbacks` · CatalogUiSchema `app-feedbacks` | Giữ seed schema · **cấm ERP.*** · domain Integration only |

## 3. DoD (đo được)

1. List load + **search work** (mã / người gửi / vai trò / loại / nội dung / status) — filter đổi → page=1.
2. Zone A: title «Góp ý phần mềm» · badge ≠ citizen — **cấm** Thêm mới / Save trên A.
3. Zone B: SearchTextInput · SearchInput trạng thái (draft/sent/tất cả) · **Tạo mới primary trên B** · Làm mới · History · config FULL · Delete khi có dòng — **cấm** native Select.
4. Zone C: grid STT · □ · Mã · Người gửi · Vai trò · Loại · Nội dung (preview) · Thời gian · Trạng thái · actions; row menu **Xem · Sửa · Sao chép · Xóa**.
5. Zone D: `LinCatalogListPagination` pageSize **50 / 100 / 200 / 500**.
6. Zone F: `LinCatalogUiSchemaEditorModal` title «Cấu hình hiển thị danh mục» · `useCatalogUiSchema` · `columns={buildDynamicGridColumns(schema, uiColumns)}` · catalogKind=`app-feedbacks` — **cấm** `configHint` · **cấm** leftover `const columns` / `LinCatalogDataColumn` · **cấm** `LinListTableConfigModal`.
7. Form routes `/integration/feedback/new` · `/integration/feedback/:id` — Kind B full-page Z1 Quay lại · Z2 fields · Z3 footer. View=`<dl>` — **cấm** Input `readOnly` xám (trừ mã IdCode).
8. Fields: code readonly IdCode `FB-YYYYMMDD-NNNN` · senderName* · role* SearchInput · submittedAt* DateTime · category* SearchInput · body* textarea · status* SearchInput.
9. Body bắt buộc · leave-confirm khi dirty — **cấm** `window.confirm`.
10. Perms FE gate: `integration.feedbacks.read|create|update|delete` (BE stub OK P1).
11. FE `yarn build` (+ typecheck nếu có) PASS · BE `dotnet build` PASS khi đụng API — Dev ghi implement § Build.
12. Live shell: title + toolbar + grid/empty **không** blank/title-clip.

## 4. CTX / DEM / DI inventory

| ID | Path | Loại |
|----|------|------|
| CTX-01 | `docs/context/features/feedback.md` | feature — §1 DoD slideout **stale** vs §2 full-page |
| CTX-02 | `docs/context/_raw/legacy-govone/demo-maps/feedback-control-map.md` | control-map **stale** (Kind D + Select) |
| CTX-03 | `docs/context/_raw/legacy-govone/demo-maps/feedback-actions.md` | actions (host «Mở góp ý» = demo only) |
| DEM-01 | `Linm.RMMS.Demo/src/demo/features/feedback-demo.html` | demo entry → `integration/feedback.html` |
| DEM-02 | `Linm.RMMS.Demo/src/demo/integration/feedback.html` | page SSOT visual · **không** clone chrome |
| DI-01 | — | **no Excel cluster** |
| DI-02 | `specs/_data-analy/features/feedback-control-hint.md` | controlHint SSOT |
| MFE | `Linm.Web.RMMS.Integration` `/integration/feedback` · `http://localhost:9314/integration/feedback` | UI |
| BE | `D:/AI-QLBD/Linm.RMMS.WebService` · DOMAIN-MAP **Integration** · `api/v1/integration/feedbacks` | API |

## 5. controlHint (PO chốt từ data-analy — Design map UI · SA map API)

### List filters (Zone B)

| Field key | Label | controlHint | catalogKind |
|-----------|-------|-------------|-------------|
| search | Tìm kiếm | `SearchTextInput` | text (mã · người gửi · vai trò · loại · nội dung) |
| status | Trạng thái | `SearchInput` | enum draft / sent / (trống=tất cả) — **cấm** native Select |

### Form fields

| Field key | Label | controlHint | required | Notes |
|-----------|-------|-------------|----------|-------|
| code | Mã góp ý | `Text` | auto | IdCode `FB-YYYYMMDD-NNNN` readonly |
| senderName | Người gửi | `Text` | * | View=`<dl>` |
| role | Vai trò | `SearchInput` | * | static 3 · **cấm** native Select |
| submittedAt | Thời gian | `DateTime` | * | datetime-local |
| category | Loại góp ý | `SearchInput` | * | loi · de-xuat · ux · khac |
| body | Nội dung cần góp ý | `Text` | * | textarea |
| status | Trạng thái | `SearchInput` | * | draft · sent |
| userId | UserId | `Text` | | optional · server |

### Lookup / schema (handoff SA)

| catalogKind | Source | Notes |
|-------------|--------|-------|
| feedback-status | static FE | draft · sent |
| feedback-role | static FE | tuan-duong · quan-ly · tuan-kiem |
| feedback-category | static FE | loi · de-xuat · ux · khac |
| app-feedbacks | `CatalogUiSchemaRegistry` | list column schema · seed Integration |

Không CUC2 master / Excel cho góp ý phần mềm.

## 6. Open questions — PO chốt (UNCLEAR / GAP data-analy)

| ID | Question | Decision (PO) |
|----|----------|----------------|
| GAP-PO-FB-01 · GAP-F-SLIDE-01 | Form Slideout vs full-page | **IN P1:** Kind B **full-page** `FeedbackFormPage`. **Cấm** Slideout/Resource. Context §1 DoD slideout = **stale**. |
| GAP-PO-FB-02 · GAP-DEV-CONFIG-PLACEHOLDER-01 | `configHint` dialog | **IN P1:** `LinCatalogUiSchemaEditorModal` «Cấu hình hiển thị danh mục». **Cấm** `configHint`. |
| GAP-PO-FB-03 · GAP-DEV-GRID-SCHEMA-BOOTSTRAP-01 | leftover `const columns` | **IN P1:** `useCatalogUiSchema` + `buildDynamicGridColumns` · BE seed `app-feedbacks`. |
| GAP-PO-FB-04 · GAP-LIST-FILTER-STATUS | Zone B native Select | **IN P1:** `SearchInput` enum status. **Cấm** `<select>`. |
| GAP-PO-FB-05 · GAP-FORM-LKP-01 | Form Select role/category/status | **IN P1:** `SearchInput` static enum. Control-map demo Select = **stale**. |
| GAP-PO-FB-06 | View Input `readOnly` | **IN P1:** View=`<dl>` display. **Cấm** Input xám (trừ code IdCode). |
| GAP-PO-FB-07 · GAP-F-FB-03 | Nhầm citizen | **IN P1:** badge/copy ≠ cổng người dân trên list + form. |
| GAP-PO-FB-08 · GAP-F-FB-01 | Admin inbox | **IN P1:** list Kind B Integration MFE. Host stub «Mở góp ý» = **demo only**. |
| GAP-PO-FB-09 | Email/notify đội kỹ thuật | **P2 / DEFER** — không block list pack. |
| GAP-PO-FB-10 | Real media attach | **P2 / DEFER**. |
| GAP-PO-FB-11 | Auth `[RequirePermission]` | **Debt P1** — FE gate ON · BE stub OK; không block PO. |
| GAP-PO-FB-12 | parent JSON / ERP path | **Cấm** parent JSON. **Cấm** `ERP.*` · `api/v1/rmms/*`. BE = `D:/AI-QLBD/Linm.RMMS.WebService`. |
| GAP-PO-FB-13 | Chrome demo / localStorage-only | **SKIP** MFE: logo · hamburger · user menu · Ban.TK · mock send no BE. |

## 7. Grid AC (REQUIRED · list)

| ID | AC |
|----|-----|
| AC-G-01 | Zones **A Header · B Toolbar · C Grid · D Pagination** |
| AC-G-02 | Search + status apply → page=1 |
| AC-G-03 | Row menu Xem / Sửa / Sao chép / Xóa |
| AC-G-04 | `LinCatalogDataGrid` + kéo cột default ON |
| AC-G-05 | Footer `LinCatalogListPagination` 50/100/200/500 |
| AC-G-06 | 1× `LinPageLayout` — **cấm** nested CatalogListShell |
| AC-G-07 | Flex + skeleton load — **cấm** blank body |
| AC-G-08 | Zone F schema editor FULL — **cấm** `LinListTableConfigModal` / `configHint` |

## 8. Out of scope (this pack)

- Email/notify đội kỹ thuật (GAP-PO-FB-09)
- Real media attach (GAP-PO-FB-10)
- Public anonymous portal / OTP / push
- Clone chrome demo · localStorage-only send trên MFE
- Kind D Slideout form (`FeedbackFormSlideout`)
- Invent CUC2 master lookup
- ERP.* / `api/v1/rmms/*`

## 9. Handoff → Design

| Field | Value |
|-------|-------|
| Kind | B catalog list A–D + F schema + **full-page** form Z1–Z3 (**không** Slideout) |
| Prototype | content-only zones A–D · `list-shell-prototype.md` · **skip** note/sidebar/menu/chrome demo |
| reviewUrl | bắt buộc · `autoApprove=ON` → agent tự confirm Design |
| controlHint | bảng §5 — **không** Select · **không** Slideout · **không** `configHint` · View=`<dl>` |
| Demo visual | `feedback-demo.html` → `integration/feedback.html` |
| BE | `api/v1/integration/feedbacks` · schema `app-feedbacks` · **cấm** `api/v1/rmms/*` |
| Next roles | design → sa → team-lead → dev → qa → review = **pending** đến lượt |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-po |
| skillVersion | 2026.08.15.5 |
| schemaVersion | 2 |
| workflowVersion | 2026.08.15.5 |
| rulesVersion | 2026.08.15.8 |
| generatedAt | 2026-08-16T05:02:00.000Z |
| versionGate | rechecked |
| version_mismatch_action | recheck_new (STATUS) |
| contentHashPriorDataAnaly | sha256:feedback-delta-fullpage-schema-20260816 |
| orchestratorSkillVersion | 2026.08.15.5 |
| orchestratorWorkflowVersion | 2026.08.15.5 |
| orchestratorRulesVersion | 2026.08.15.8 |
| dataAnalySkillVersion | 2026.08.15.5 |
| dataAnalyWorkflowVersion | 2026.08.15.5 |
| dataAnalyRulesVersion | 2026.08.15.8 |
| taskId | `task_3fb91773` |

---
<!-- Version meta: skillVersion=2026.08.15.5 · schemaVersion=2 · workflowVersion=2026.08.15.5 · rulesVersion=2026.08.15.8 · versionGate=rechecked -->
