# Design — feedback (Góp ý phần mềm)

| Field | Value |
|-------|-------|
| feature | `feedback` |
| this role | `design` · `/agent-design` |
| Feature Kind | **B** — Catalog list A–D + Zone F schema + **full-page** form (`FeedbackFormPage`) · **cấm** Slideout |
| status | `confirmed` (autopilot) |
| design_confirm | **approve** (`autoApprove=ON` · `task_de49ebf9`) |
| changeScope | `edit_page` |
| packKind | `list` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Integration` (`/integration/feedback`) |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · `api/v1/integration/feedbacks` |
| domain | **Integration** |
| prior | PO `confirmed` · `po/requirement.md` · GAP-PO-FB-01..13 · data-analy hash `sha256:feedback-delta-fullpage-schema-20260816` |
| autoApprove | **ON** (`task_de49ebf9`) → agent confirm Design |
| updatedAt | `2026-08-16T05:15:00.000Z` |
| taskId | `task_de49ebf9` |

## 0. Context & Demo (from PO)

| ID | Path | Notes |
|----|------|-------|
| CTX-01 | `docs/context/features/feedback.md` | §1 DoD slideout **stale** vs §2 full-page — Design sửa copy |
| DEM-01 | `Linm.RMMS.Demo/.../feedback-demo.html` → `integration/feedback.html` | Visual SSOT fields — **skip** chrome / Ban.TK / localStorage-only |
| DI-02 | `specs/_data-analy/features/feedback-control-hint.md` | controlHint SSOT |
| CTX-02 | `demo-maps/feedback-control-map.md` | Kind D + Select = **stale** — SSOT = PO §5 |

Persona: Tuần đường / Quản lý / Tuần kiểm (gửi) · Điều phối Integration (inbox). **≠** Cổng người dân (`citizen`). Pack **không** clone chrome demo.

## 1. Kind + UI pattern

| | |
|--|--|
| Feature Kind | **B** |
| List pattern | **1×** `LinPageLayout` kind=catalog — **cấm** nested `CatalogListShell` |
| Grid | `LinCatalogDataGrid` · kéo cột **default ON** |
| Footer | `LinCatalogListPagination` — **cấm** footerPagination / pageSizeBar / raw table production |
| Form pattern | **Full-page** `FeedbackFormPage` C/E/V/Copy — **cấm** Resource · **cấm** Slideout · **cấm** `FeedbackFormSlideout` (GAP-PO-FB-01) |
| Routes | List `/integration/feedback` · Create `/integration/feedback/new` · Edit/View `/integration/feedback/:id` |
| Toolbar SSOT | `catalog-list-toolbar` + `erp-control-icon-map` (`editConfig`=`fa-cog`) |
| View | **`<dl>` / display** — **cấm** Input `readOnly` xám trừ mã IdCode (GAP-PO-FB-06) |
| Badge | Luôn ≠ citizen / Cổng người dân (GAP-PO-FB-07) |

## 2. Screens / zones

| Screen | FormMode | Zones | Controls |
|--------|----------|-------|----------|
| Inbox góp ý | list | **A Header · B Toolbar+filter · C Grid · D Pagination · F schema** | SearchTextInput · SearchInput status · row menu |
| Form góp ý | create/edit/view/copy | **Full-page** Z1 Quay lại · Z2 fields/`<dl>` · Z3 footer | 7 controls · View=`<dl>` |

### Zone A — Header

- Icon `fa-comment-dots` + title **Góp ý phần mềm** (22px)
- Badge **Kind B** + **≠ Cổng người dân**
- **Cấm** nút Thêm mới / Tạo mới / Save trên A

### Zone B — Toolbar + filter (PO DoD)

**Trái (filter + icon):**

| key | Label | Control (Design chốt) | catalogKind |
|-----|-------|------------------------|-------------|
| search | Tìm kiếm | `SearchTextInput` | text — mã · người gửi · vai trò · loại · nội dung |
| status | Trạng thái | `SearchInput` | enum `feedback-status` draft / sent / (trống=tất cả) — **cấm** native `<select>` |
| — | Làm mới | `fa-sync-alt` | reload · page=1 |
| — | Lịch sử | `fa-history` | stub `LinCatalogHistoryModal` |
| — | Sửa config | `fa-cog` | **Zone F** `LinCatalogUiSchemaEditorModal` — **cấm** `LinListTableConfigModal` · **cấm** `configHint` |
| — | Xóa | `fa-trash` | khi có selection · Lin confirm — **cấm** `window.alert` / `window.confirm` |

**Phải:** **Tạo mới** primary (`fa-plus`) — **chỉ trên B** → `/integration/feedback/new`.

Filter đổi → **page=1** (search must work). **Cấm** native Select trên Zone B (GAP-PO-FB-04).

### Zone C — Grid

- Card title: **Danh sách góp ý phần mềm**
- Help: nhấn đúp / menu dòng — Xem · Sửa · Sao chép · Xóa
- Flex + skeleton load — **cấm** blank body
- Columns (kéo cột ON): STT · □ · **Mã** · **Người gửi** · **Vai trò** · **Loại** · **Nội dung** (preview) · **Thời gian** · **Trạng thái** · ⋯
- Click mã → View **full-page** `<dl>`
- Row menu: **Xem · Sửa · Sao chép · Xóa**
- Production: `columns={buildDynamicGridColumns(schema, uiColumns)}` · **cấm** leftover `const columns` / `LinCatalogDataColumn`

### Zone D — Pagination

`LinCatalogListPagination`: `Tổng: N · Trang x/y` · Hiển thị **50 / 100 / 200 / 500** · FA pager 32×32.

### Zone F — Schema editor (HARD)

- Modal title **«Cấu hình hiển thị danh mục»**
- `useCatalogUiSchema` · catalogKind=`app-feedbacks`
- Bảng cột: List / width / filter / sort / Thêm cột
- BE `CatalogUiSchemaRegistry` seed `app-feedbacks` (SA/Dev)
- **Cấm** `configHint` · **cấm** `LinListTableConfigModal` (GAP-PO-FB-02 · GAP-PO-FB-03)

## 3. Field inventory (form) — Design chốt controlHint

| uiField | Label VN | Control | Required | FormMode lock | Notes |
|---------|----------|---------|----------|---------------|-------|
| code | Mã góp ý | `Text` readonly IdCode | auto | all readonly | `FB-YYYYMMDD-NNNN` · copy = mã mới |
| senderName | Người gửi | `Text` | * | view=`<dl>` | |
| role | Vai trò | `SearchInput` | * | view=`<dl>` | static 3 — **cấm** native Select |
| submittedAt | Thời gian | `DateTime` | * | view=`<dl>` | datetime-local |
| category | Loại góp ý | `SearchInput` | * | view=`<dl>` | loi · de-xuat · ux · khac |
| body | Nội dung cần góp ý | `Text` (textarea) | * | view=`<dl>` | bắt buộc |
| status | Trạng thái | `SearchInput` | * | view=`<dl>` | draft · sent |
| userId | UserId | `Text` | | server / optional | không hiện Zone B |

### Enum values (P1) — Design chốt value + label

**status** (`feedback-status`)

| value | Label |
|-------|--------|
| `` (list filter) | Tất cả trạng thái |
| `draft` | Nháp |
| `sent` | Đã gửi |

**role** (`feedback-role`)

| value | Label |
|-------|--------|
| `tuan-duong` | Tuần đường |
| `quan-ly` | Quản lý |
| `tuan-kiem` | Tuần kiểm |

**category** (`feedback-category`)

| value | Label |
|-------|--------|
| `loi` | Lỗi |
| `de-xuat` | Đề xuất |
| `ux` | UX |
| `khac` | Khác |

Không CUC2 master / Excel. Lookup = static FE (SA xác nhận không cần API catalog).

### CSS / layout gates

| Rule | Gap |
|------|-----|
| Full-page form · **cấm** Slideout / Resource | GAP-PO-FB-01 |
| View `<dl>` — **cấm** Input `readOnly` xám (trừ code) | GAP-PO-FB-06 |
| SearchInput enum — **cấm** native Select | GAP-PO-FB-04 · GAP-PO-FB-05 |
| Schema editor FULL · **cấm** `configHint` / leftover columns | GAP-PO-FB-02 · GAP-PO-FB-03 |
| Badge ≠ citizen | GAP-PO-FB-07 |
| Skip chrome demo / localStorage-only send | GAP-PO-FB-13 |
| Input pad 6×10 · min-height 32 · focus shadow | T-UI-UX |
| Spacing 4/8/16 · **cấm** `filterMaxWidth` | T-UI-UX |
| Checkbox grid 24×24 · cột STT/□ 48px | T-UI-UX |
| Leave-confirm dirty — **cấm** `window.confirm` | PO DoD-9 |

## 4. Form full-page wire

```
[Z1] [← Quay lại]  Title «Góp ý phần mềm» · badge Tạo mới|Sửa|Xem|Sao chép · ≠ citizen
     [📋 Sao chép] [✏ Sửa] khi view — không Save trên header
[Z2a] Validation banner (nội dung bắt buộc)
[Z2b C/E/Copy] fields §3 · SearchInput role/category/status
[Z2b View] <dl> display — không Input xám (trừ code IdCode)
[Z3] [Hủy thay đổi] [Xóa nội dung] [Lưu nháp] [Gửi góp ý của bạn] — ẩn Gửi/Nháp khi view
```

- Copy → POST new · IdCode mới
- Dirty leave-confirm khi Hủy / Quay lại (Lin modal)
- **Cấm** parent JSON string trên field/DTO

## Prototype (REQUIRED)

| | |
|--|--|
| Artifact | `ui/prototype/feedback-list-prototype.html` |
| Zones | **A–D** content-only — skip note/sidebar/menu/chrome |
| Form | **Full-page** Z1–Z3 (không Slideout) · View = `<dl>` · footer Gửi/Nháp/Xóa/Hủy |
| Lookups | SearchInput combo mock status/role/category |
| Zone F | Cog → modal «Cấu hình hiển thị danh mục» |
| SSOT | `list-shell-prototype.md` · `erp-control-icon-map` |
| **reviewUrl** | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/feedback/ui/prototype/feedback-list-prototype.html` |

### List wire

```
[A] fa-comment-dots + «Góp ý phần mềm» + badge ≠ citizen
[B] SearchTextInput · status SearchInput · Làm mới · Lịch sử · fa-cog · Xóa | [+ Tạo mới]
[C] «Danh sách góp ý phần mềm» · LinCatalogDataGrid mock · ⋯ menu
[D] Tổng · Hiển thị [50|100|200|500] · pager FA
[F] LinCatalogUiSchemaEditorModal catalogKind=app-feedbacks
```

## 5. Map / AI / report (out of pack)

- Email/notify đội kỹ thuật (GAP-PO-FB-09 P2)
- Real media attach (GAP-PO-FB-10 P2)
- Clone chrome demo · localStorage-only send trên MFE (GAP-PO-FB-13)
- Kind D Slideout form
- Invent CUC2 master lookup
- ERP.* / `api/v1/rmms/*`

## 6. Open questions (PO closed — Design không re-open)

GAP-PO-FB-01..13 giữ nguyên. Auth `[RequirePermission]` = debt P1 (FE gate ON · BE stub OK). **Cấm ERP.*** · **cấm** `api/v1/rmms/*` · **cấm** parent JSON.

## Confirm

`design_confirm` = **approve** — `autoApprove=ON` (`task_de49ebf9`) · agent tự confirm · chain SA.

## Handoff → SA

| Field | Value |
|-------|-------|
| Kind / pattern | B · catalog A–D + F schema + **full-page** form |
| Field inventory | §3 · SearchInput role/category/status · SearchTextInput search |
| Filters | search · status → page=1 |
| Prototype · reviewUrl | § Prototype |
| API prefer | `GET/POST/PUT/DELETE api/v1/integration/feedbacks` · query `search`/`status`/`page`/`pageSize` · BFF `web-bff/api/v1/integration/feedbacks` |
| Lookups (SA chốt) | static FE `feedback-status` · `feedback-role` · `feedback-category` · schema `app-feedbacks` |
| Entity | `AppFeedback` · `rmms_app_feedbacks` · **cấm** parent JSON · **cấm ERP.*** |
| Seed | IdCode `FB-YYYYMMDD-NNNN` · CatalogUiSchema `app-feedbacks` |
| Next | SA **pending** đến lượt · `be/solution-discovery.md` |

## DES-GRID map → Lin\*

| Zone | DES-GRID | Component |
|------|----------|-----------|
| A | DES-GRID-A | `LinPageLayout` header |
| B | DES-GRID-B | `catalogToolbar` + SearchTextInput + SearchInput status |
| C | DES-GRID-C | `LinCatalogDataGrid` + resize ON |
| D | DES-GRID-D | `LinCatalogListPagination` |
| F | DES-GRID-F | `LinCatalogUiSchemaEditorModal` kind=`app-feedbacks` |
| Form | DES-FORM-Z1–Z3 | `FeedbackFormPage` full-page |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-design |
| skillVersion | 2026.08.15.5 |
| schemaVersion | 2 |
| workflowVersion | 2026.08.15.5 |
| rulesVersion | 2026.08.15.8 |
| generatedAt | 2026-08-16T05:15:00.000Z |
| versionGate | rechecked |
| version_mismatch_action | recheck_new (STATUS) |
| contentHashPriorPo | sha256:task_3fb91773 |
| contentHashPriorDataAnaly | sha256:feedback-delta-fullpage-schema-20260816 |
| orchestratorSkillVersion | 2026.08.15.5 |
| orchestratorWorkflowVersion | 2026.08.15.5 |
| orchestratorRulesVersion | 2026.08.15.8 |
| dataAnalySkillVersion | 2026.08.15.5 |
| poSkillVersion | 2026.08.15.5 |
| taskId | `task_de49ebf9` |

---
<!-- Version meta: skillVersion=2026.08.15.5 · schemaVersion=2 · workflowVersion=2026.08.15.5 · rulesVersion=2026.08.15.8 · versionGate=rechecked -->
