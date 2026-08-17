# Team-lead — feedback (Góp ý phần mềm)

| Field | Value |
|-------|-------|
| feature | `feedback` |
| this role | `team_lead` · `/agent-team-lead` |
| status | `confirmed` |
| packKind | `list` |
| Feature Kind | **B** — catalog A–D + Zone F schema + **full-page** form |
| changeScope | `edit_page` |
| gap | `crud_formtype` |
| mode | `fix_gaps` |
| autoApprove | **ON** (`task_d4ec3f5b`) |
| taskId | `task_d4ec3f5b` |
| prior · sa | `confirmed` · `be/solution-discovery.md` · `task_064242e5` |
| prior · design | `confirmed` · `ui/design.md` + prototype |
| prior · po | `confirmed` · `po/requirement.md` |
| prior · data_analy | `confirmed` · controlHint hash `sha256:feedback-delta-fullpage-schema-20260816` |
| updatedAt | `2026-08-16T05:30:00.000Z` |

**SUPERSEDED:** `task/feedback.md` prior (`task_4ff7bc4b` / `task_6cb63382`) — còn Slideout / native Select / «all done». Pack này **re-lock** Design+SA 2026-08-16 + live MFE audit.

## Source assignment

| Layer | Path | Confirm |
|-------|------|---------|
| UI | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Integration` | `ui_repo_confirm=approve` |
| BE | `D:/AI-QLBD/Linm.RMMS.WebService` · domain **Integration** | `be_repo_confirm=approve` |
| Routes | list `/integration/feedback` · form `/new` · `/:id` | `mfeStdUrl` :9314 |
| API | `api/v1/integration/feedbacks` · BFF `web-bff/api/v1/integration/feedbacks` | **cấm ERP.*** · **cấm** `api/v1/rmms/*` |

## retry.ssot_rereview (HARD — live 2026-08-16)

Checklist: `tl-grid-ssot` · `list_parity` · `tl-list-shell-height` · tree_master? · form checklist.

| Check | Live | Result |
|-------|------|--------|
| 1× `LinPageLayout` kind=catalog · **cấm** nested `CatalogListShell` | `FeedbackListPage` only | **PASS** |
| `LinCatalogDataGrid` + kéo cột default ON | `tableConfig` ← `catalogListTableConfigFromSchema` | **PASS** |
| Footer `LinCatalogListPagination` · **cấm** footerPagination / pageSizeBar / raw table | sizes default 50 | **PASS** |
| flex + skeleton · `data-catalog-list-page` | `skeletonRows={8}` | **PASS** |
| toolbar config FULL · `LinCatalogUiSchemaEditorModal` title schema · `useCatalogUiSchema` · `columns={buildDynamicGridColumns(schema, uiColumns)}` | kind=`app-feedbacks` | **PASS** |
| **cấm** `LinListTableConfigModal` · **cấm** `configHint` · **cấm** leftover grid `LinCatalogDataColumn` | none on feedback pages | **PASS** |
| list_parity Kind B A–D + F | present | **PASS** (copy Zone C/A — GAP below) |
| tree_master? | — | **n/a** |
| Form `FeedbackFormPage` full-page Z1–Z3 · View=`<dl>` · footer Gửi/Nháp · **cấm** Slideout/Resource/View Input xám | no `FeedbackFormSlideout` | **PASS** shell |
| SearchInput list status + form role/category/status · **cấm** native `<select>` | SearchInput | **PASS** control |
| FE perm gate `integration.feedbacks.*` | `permissions.ts` | **PASS** |
| Delete toolbar + row + Lin `Modal` · **cấm** `window.confirm` | wired | **PASS** |
| Leave-confirm | `useFormLeaveGuard` | **PASS** |

**Cấm** chỉ patch 1 chỗ user nêu nếu còn GAP cùng surface — Dev **fix_all** GAPs dưới.

### GAPs còn (Dev P1 — cùng list/form surface)

| ID | Surface | Live | SSOT | Task |
|----|---------|------|------|------|
| GAP-TL-LIST-TITLE | Zone C | `listTitle="Inbox góp ý phần mềm · ≠ Cổng người dân"` | Design: card **«Danh sách góp ý phần mềm»** | T-UI-LIST-01 |
| GAP-TL-LIST-BADGE | Zone A | header title only · badge nằm listTitle | Design A: icon + title 22px + badge **Kind B** + **≠ Cổng người dân** · **cấm** Thêm mới trên A | T-UI-LIST-01 |
| GAP-TL-UX-FILTERMAX | Zone B | `filterMaxWidthPx={1000}` trên `LinPageLayout` + `ErpListHeaderFilters` | Design CSS: **cấm** `filterMaxWidth` | T-UI-UX-01 |
| GAP-TL-LKP-LABEL | form+grid | `feedbackStore` category: «Báo lỗi» / «Đề xuất tính năng» / «UX / giao diện» | Design §3: **Lỗi** · **Đề xuất** · **UX** · **Khác** | T-UI-LKP-01 |
| GAP-TL-PROD-DEMO | form | `FeedbackFormPage` import `EMPTY_FORM`/`genFeedbackCode`/`loadRows` từ `demo/feedbackStore` · copy hiện mã local | SA: POST **không** nhận Code · copy = mã mới server | T-UI-PROD-01 |
| GAP-TL-CTX-DB | docs | context §4 còn `At` / thiếu Code·SenderName | entity `AppFeedbackEntity` SA §2 | T-CTX-01 |
| GAP-TL-FORM-TITLEPX | form Z1 | `.title` 18px | Design list header 22px · form title align Kind B | T-UI-UX-01 |

**Keep (không rewrite):** CRUD API · BFF proxy · CatalogUiSchema seed `app-feedbacks` · 1× LinPageLayout list · schema editor · SearchInput · full-page form · Delete confirm.

**P2 không block Dev complete:** email/notify · media · `[RequirePermission]` CommonLib · History API stub · Lookup.SearchFieldKeys seed align role/category.

## DES-GRID → Lin\*

| Zone | Component | DoD |
|------|-----------|-----|
| A | `LinPageLayout` header | title «Góp ý phần mềm» · badge Kind B ≠ citizen · **cấm** Create/Save trên A |
| B | `catalogToolbar` + filters | SearchTextInput · SearchInput status · Tạo mới **chỉ B** · refresh · history stub · cog schema · Delete |
| C | `LinCatalogDataGrid` | title «Danh sách góp ý phần mềm» · resize ON · row Xem/Sửa/Sao chép/Xóa |
| D | `LinCatalogListPagination` | 50/100/200/500 |
| F | `LinCatalogUiSchemaEditorModal` | «Cấu hình hiển thị danh mục» · kind=`app-feedbacks` |
| Form | `FeedbackFormPage` | Z1 Quay lại · Z2/`<dl>` · Z3 footer · **cấm** Slideout |

## FormType pack (canonical)

| Task id | Role | Status | Maps to |
|---------|------|--------|---------|
| T-CTX-01 | Dev+docs | **pending** | GAP-TL-CTX-DB — TL đã re-lock §2 Kind B; Dev stamp tracking |
| T-BE-01 | Dev | **pending** verify/no-op | SA PASS CRUD — **cấm** rewrite unless regression |
| T-BE-02 | — | **n/a** | `Schema_RmmsAppFeedbacks` exists |
| T-BE-SCHEMA-01 | Dev | **pending** verify/no-op | seed `app-feedbacks` SA PASS |
| T-BFF-01 | Dev | **pending** verify/no-op | querystring forward SA PASS |
| T-PERM-01 | Dev | **pending** verify | FE gate ON · BE attribute stub P1 |
| T-UI-LIST-01 | Dev | **pending** delta | GAP-TL-LIST-TITLE · GAP-TL-LIST-BADGE · **cấm** rewrite shell |
| T-UI-FORM-01 | Dev | **pending** verify | keep full-page · **cấm** Slideout |
| T-UI-LKP-01 | Dev | **pending** delta | GAP-TL-LKP-LABEL · static enums Design §3 |
| T-UI-FIELD-01 | Dev | **pending** verify | Design §3 map · code readonly · body* textarea |
| T-UI-PROD-01 | Dev | **pending** delta | GAP-TL-PROD-DEMO |
| T-UI-UX-01 | Dev | **pending** delta | GAP-TL-UX-FILTERMAX · GAP-TL-FORM-TITLEPX |
| T-UI-ACT-01 | Dev | **pending** verify | Delete/History already wired |
| T-QA-01 | QA | **pending** | đến lượt |
| T-QA-CRUD-01 | QA | **pending** | đến lượt |

### T-CTX-01

**layer:** docs · **deps:** —  
**DoD:**
- [ ] `docs/context/features/feedback.md` §4 columns = Code, SenderName, Role, SubmittedAt, Category, Body, Status, UserId (không `At` legacy)
- [ ] Tracking taskId = pipeline hiện tại · Kind B full-page · **cấm** Slideout copy
- [ ] **Cấm** invent CUC2

### T-BE-01 / T-BE-SCHEMA-01 / T-BFF-01

**layer:** api Integration · **deps:** T-CTX-01  
**DoD:**
- [ ] Verify API-01..05 + XCO GetById + IdCode server `FB-yyyyMMdd-nnnn` + Body 422 + soft delete
- [ ] Verify `CatalogUiSchemaRegistry.AppFeedbacks` keys `code,senderName,role,category,body,submittedAt,status`
- [ ] Verify BFF `BuildListPath()` forwards `Request.QueryString`
- [ ] **No new migration** · **cấm** file dưới `ERP.Service.*` / `api/v1/rmms/*`
- [ ] `dotnet build` PASS **chỉ nếu** đụng API/schema; no-op → ghi implement «no BE write»

### T-PERM-01

**DoD:**
- [ ] Keep `integration.feedbacks.read|create|update|delete` FE
- [ ] BE `[RequirePermission]` = debt P1 — **không** block

### T-UI-LIST-01

**deps:** T-BFF-01 · T-PERM-01  
**DoD:**
- [ ] Keep A–D + F · 1 shell · dynamic columns · schema modal
- [ ] Zone C title **«Danh sách góp ý phần mềm»** (GAP-TL-LIST-TITLE)
- [ ] Zone A badge Kind B + ≠ Cổng người dân (GAP-TL-LIST-BADGE)
- [ ] Filter đổi → page=1 (đã có — keep)
- [ ] **Cấm** nested CatalogListShell · configHint · LinListTableConfigModal · native Select

### T-UI-FORM-01

**deps:** T-UI-LIST-01  
**DoD:**
- [ ] Routes `/integration/feedback/new` · `/:id`
- [ ] View=`<dl>` · footer Gửi/Nháp/Xóa nội dung/Hủy · **cấm** Save trên Z1
- [ ] **Cấm** `FeedbackFormSlideout` · Resource · View Input `readOnly` (trừ code)

### T-UI-LKP-01

**deps:** T-UI-FORM-01  
**DoD:**
- [ ] Static FE only — **không** API catalog
- [ ] Labels **đúng Design §3** (GAP-TL-LKP-LABEL)
- [ ] status list: trống = Tất cả · `draft` Nháp · `sent` Đã gửi
- [ ] role: tuan-duong / quan-ly / tuan-kiem
- [ ] category: loi / de-xuat / ux / khac

### T-UI-FIELD-01

**deps:** T-UI-FORM-01  
**DoD:**
- [ ] Fields Design §3 · required * · datetime-local submittedAt
- [ ] code IdCode readonly · copy không gửi Code client

### T-UI-PROD-01

**deps:** T-UI-FORM-01  
**DoD:**
- [ ] Form không phụ thuộc `loadRows`/`genFeedbackCode` localStorage (GAP-TL-PROD-DEMO)
- [ ] Create/copy code display `(tự sinh)` until server
- [ ] Enums có thể sống `services/feedback/lookups.ts` (không demo store)

### T-UI-UX-01

**deps:** T-UI-FORM-01  
**DoD:**
- [ ] Bỏ `filterMaxWidthPx` list (GAP-TL-UX-FILTERMAX)
- [ ] Title form ~22px (GAP-TL-FORM-TITLEPX)
- [ ] Spacing 4/8/16 · Input pad 6×10 · min-height 32
- [ ] Leave-confirm dirty — **cấm** `window.confirm`

### T-UI-ACT-01

**deps:** T-UI-FORM-01  
**DoD:**
- [ ] Verify toolbar/row Delete + Lin Modal
- [ ] History stub keep
- [ ] Tạo mới chỉ Zone B

### T-QA-*

Pending đến lượt QA. **Cấm** QA-B khi feedback Dev chưa completed.

## Action inventory (T-UI-ACT)

| Action | Surface | Handler | API |
|--------|---------|---------|-----|
| Search | B | SearchTextInput debounce → page=1 | GET `?search=` |
| Status | B | SearchInput | GET `?status=` |
| Refresh | toolbar | reloadAll | GET |
| Tạo mới | toolbar B | `/new` | POST |
| Edit/View | toolbar + row | `/:id?mode=` | GET/PUT |
| Copy | row / form footer | `/new?copyFrom=` | POST |
| Delete | toolbar + row | Modal | DELETE soft |
| History | toolbar + row | stub modal | — |
| Config | fa-cog | schema editor | GET/PUT ui-schema |
| Gửi / Nháp | form Z3 | handleSave sent/draft | POST/PUT |
| Xóa nội dung / Hủy | form Z3 | clear body / leave-guard | — |

## SD flags

| Flag | Value |
|------|-------|
| SD-AUTH | stub `[RequirePermission]` TODO CommonLib |
| SD-BFF | proxy-only |
| SD-JOB | n/a |
| SD-NOTIFY | email P2 |
| SD-MEDIA | P2 |

## Deps

```
T-CTX-01 → T-BE-01 → T-BE-SCHEMA-01 → T-BFF-01 → T-PERM-01
T-BFF-01 → T-UI-LIST-01 → T-UI-FORM-01 → T-UI-LKP-01
                                      → T-UI-FIELD-01
                                      → T-UI-PROD-01
                                      → T-UI-UX-01
                                      → T-UI-ACT-01 → T-QA-CRUD-01
T-UI-FORM-01 → T-QA-01
```

## Handoff → Dev (`/agent-dev`)

| Field | Value |
|-------|-------|
| Next | roleOnly=`dev` · chain ON · autoApprove ON |
| Scope | **delta GAPs** + verify BE/BFF/PERM/ACT — **cấm** rewrite list shell / **cấm** Slideout |
| Anti-dup | reuse `feedbackService` · `AppFeedbacks*` · schema `app-feedbacks` |
| UI SSOT | `MFE-COMMON` Lin\* |
| BE SSOT | `D:/AI-QLBD/Linm.RMMS.WebService` Integration |
| HARD | `tl-retry-ssot-rereview` trên implement.md · `yarn build` PASS · `dotnet build` nếu đụng API · ghi § Build |
| Roles sau | QA · review = **pending** |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-team-lead |
| skillVersion | 2026.08.15.5 |
| schemaVersion | qldb-workflow-skill-v1 |
| workflowVersion | 2026.08.15.5 |
| rulesVersion | 2026.08.15.8 |
| generatedAt | 2026-08-16T05:30:00.000Z |
| versionGate | rechecked |
| version_mismatch_action | recheck_new (STATUS) |
| orchestratorSkillVersion | 2026.08.15.5 |
| orchestratorWorkflowVersion | 2026.08.15.5 |
| dataAnalySkillVersion | 2026.08.15.5 |
| poSkillVersion | 2026.08.15.5 |
| designSkillVersion | 2026.08.15.5 |
| saSkillVersion | 2026.08.15.5 |
| contentHashPriorDataAnaly | sha256:feedback-delta-fullpage-schema-20260816 |
| taskId | `task_d4ec3f5b` |

---
<!-- Version meta: skillVersion=2026.08.15.5 · schemaVersion=qldb-workflow-skill-v1 · workflowVersion=2026.08.15.5 · rulesVersion=2026.08.15.8 · versionGate=rechecked -->
