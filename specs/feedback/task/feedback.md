# Team-lead — feedback

| Field | Value |
|-------|-------|
| feature | `feedback` |
| status | `confirmed` |
| packKind | `list` |
| changeScope | `edit_page` |
| gap | `crud_formtype` |
| mode | `fix_gaps` |
| taskId | `task_4ff7bc4b` (prior `task_d242eb29` LIST/FORM **kept**) |
| updatedAt | 2026-08-14T19:10:00.000Z |

## Source assignment

| Layer | Path | Confirm |
|-------|------|---------|
| UI | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Integration` | autopilot packet default |
| BE | `D:/AI-QLBD/Linm.RMMS.WebService` · domain **Integration** | autopilot packet default |
| Routes | `mfeStdRoute=/integration/feedback` | autopilot |

## DES-GRID → Lin\*

| Zone | Component | DoD |
|------|-----------|-----|
| A | `LinPageLayout` header | 1 shell · no nested CatalogListShell |
| B | `catalogToolbar` | refresh · history · config · create |
| C | `LinCatalogDataGrid` | resize default ON · row menu |
| D | `LinCatalogListPagination` | 50/100/200/500 · **cấm** footerPagination/pageSizeBar |

## Tasks

| id | layer | deps | skills | DoD |
|----|-------|------|--------|-----|
| T-CTX-01 | docs | — | context | Update feedback.md API route + BE status Signed |
| T-BE-01 | api | T-CTX-01 | /new-endpoint | Entity · CRUD · ApiResponse · XCO GetById |
| T-BE-02 | migration | T-BE-01 | /database-migration | `rmms_app_feedbacks` |
| T-BFF-01 | bff | T-BE-01 | /create-bff-api-feature | Proxy AppFeedbacksBffController |
| T-PERM-01 | ui+api | T-BE-01 | perm | FE permissions.ts · BE TODO RequirePermission |
| T-UI-LIST-01 | ui | T-BFF-01 · T-PERM-01 | /erp-form-context | Zones A–D · search · status filter · pageSize 50 · LAYOUT-06 |
| T-UI-FORM-01 | ui | T-UI-LIST-01 | form checklist | Slideout Z1–Z3 Create/Edit/View/Copy · readOnly view · leave-confirm · ≠ citizen |
| T-QA-01 | qa | T-UI-FORM-01 | qa | scenarios + mfeStdUrl | **done** |

## FormType pack (canonical — `form-type-task-pack` · task_4ff7bc4b)

| Task id | Role | Status | Maps to / notes |
|---------|------|--------|-----------------|
| T-UI-LIST-01 | Dev | **done** | A–D · **không** rewrite (already PASS) |
| T-UI-FORM-01 | Dev | **done** | Slideout C/E/V/Copy · View readOnly · polish under ACT |
| T-UI-ACT-01 | Dev | **done** | Action inventory → form/API (below) |
| T-BE-CRUD-01 | Dev | **done** | list/search + C/U/D + getById (= prior T-BE-01 verify) |
| T-UI-MAP-FORM | — | **n/a** | packKind=`list` — không map OMS |
| T-QA-CRUD-01 | QA | **done** | Create→Edit→View→Delete + row menu |
| T-PERM-01 | Dev | **done** | `integration.feedbacks.*` |
| T-CTX-01 | Dev | **done** | context |
| T-BFF-01 | Dev | **done** | BFF proxy |
| T-BE-02 | Dev | **done** | Schema migration |

**GAP-TL-FORMTYPE-01:** closed this turn — prior task chỉ LIST+FORM thiếu ACT/CRUD ids.

### T-UI-ACT-01 — action inventory

| Action | Surface | Handler | API |
|--------|---------|---------|-----|
| Search | S-LIST filter | `SearchTextInput` → `applyFilters` | GET `/` |
| Status filter | S-LIST filter | `Select` → `handleStatusChange` | GET `?status=` |
| Refresh | toolbar | `reloadAll` | GET `/` |
| +Thêm | toolbar | `openCreate` → Slideout create | POST `/` |
| Edit (toolbar) | toolbar | `openRow(edit)` | GET `/{id}` · PUT |
| View (toolbar) | toolbar | `openRow(view)` | GET `/{id}` |
| Delete (toolbar) | toolbar | `deleteRow` | DELETE `/{id}` soft |
| History (toolbar) | toolbar | `historyStub(activeRow)` | DEFER stub |
| Config `fa-cog` | toolbar | config hint dialog | P1 schema later |
| Row View/Edit/Copy/Delete/History | row menu | `handleRowMenuSelect` | same as above |
| Deep-link `?form=` | URL | create/edit/view/copy | GET `/{id}` when id |
| Form Save/Cancel/View actions | Slideout footer only | `customFooter` | POST/PUT |

**GAP-P2-ACT-\*** (live audit `FeedbackListPage` + `FeedbackFormSlideout`):

| ID | Gap | Fix |
|----|-----|-----|
| GAP-P2-ACT-DELETE | Toolbar/row menu **thiếu** Delete dù `canDelete` + `feedbackService.delete` + API DELETE sẵn | Wire `canDelete`/`onDelete` · `showDelete` · `case 'delete'` |
| GAP-P2-SLIDE-TOP-ACT | Z1 «Quay lại» + Hủy/Lưu/Sửa/Sao chép trên header form | footer-only |
| GAP-P2-SLIDE-DUP-SAVE | Hai cụm Lưu (top + footer Gửi/Nháp) | footer only · View Đóng/Sửa/Sao chép in footer |

### T-BE-CRUD-01
**layer:** api  
**status:** **done** (verify — = prior T-BE-01)  
**DoD:**
- [x] API-01 list/search · API-02 getById (XCO) · API-03 create · API-04 update · API-05 soft delete
- [x] Route `api/v1/integration/feedbacks` · domain Integration · no ERP
- [x] BFF proxy DELETE present
- [x] `dotnet build` API + BFF PASS

### T-QA-CRUD-01
**layer:** qa  
**status:** **done**  
**deps:** T-UI-ACT-01 · T-BE-CRUD-01  
**DoD:**
- [x] Smoke Create→Edit→View→Delete + row menu Delete
- [x] Update `qa/scenarios.md` QA-CRUD rows
- [x] Form footer-only actions (no top Hủy/Lưu)

## SD flags

| Flag | Value |
|------|-------|
| SD-AUTH | stub `[RequirePermission]` TODO |
| SD-BFF | proxy-only |
| SD-JOB | n/a |
| SD-NOTIFY | email/notify DEFER |
| SD-MEDIA | n/a |

## list_parity / form

- list_parity Kind B — PASS required
- form checklist Z1–Z3 · `implement.form_shell.actions=footer_only` — PASS required
- tree_master — n/a
- tl-list-shell-height (LAYOUT-06) — PASS required

## Deps

```
T-CTX-01 → T-BE-01 → T-BE-02 → T-BFF-01
                ↘ T-PERM-01
T-BE-01 → T-UI-LIST-01 → T-UI-FORM-01 → T-QA-01
T-BE-01 ≈ T-BE-CRUD-01
T-UI-FORM-01 → T-UI-ACT-01 → T-QA-CRUD-01
```

## Handoff → Dev

| Field | Value |
|-------|-------|
| Next | `/agent-dev` — **chỉ** T-UI-ACT-01 (wire Delete + footer-only) + T-BE-CRUD-01 verify · **cấm** rewrite T-UI-LIST |
| Anti-dup | reuse `feedbackService.delete` · BE controller sẵn |
| UI SSOT | `MFE-COMMON/Linm.Web.Common.Components` |
| BE SSOT | `D:/AI-QLBD/Linm.RMMS.WebService` · Integration |
| HARD | `tl-retry-ssot-rereview` · cấm patch mù 1 chỗ · fix GAP-P2-ACT-DELETE + GAP-P2-SLIDE-* |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-team-lead |
| skillVersion | 2026.08.10.2 |
| schemaVersion | 2 |
| workflowVersion | 2026.08.10.2 |
| rulesVersion | 2026.08.10.3 |
| generatedAt | 2026-08-14T19:10:00.000Z |
| versionGate | rechecked |
| taskId | `task_4ff7bc4b` |
