# Team-lead — attendance

| Field | Value |
|-------|-------|
| feature | `attendance` |
| status | `confirmed` |
| packKind | `list` |
| changeScope | `edit_page` |
| gap | `crud_formtype` |
| mode | `fix_gaps` |
| taskId | `task_13e76e73` |
| updatedAt | 2026-08-10T16:05:00.000Z |

## Source assignment

| Layer | Path | Confirm |
|-------|------|---------|
| UI | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Patrol` | board ui_repo_confirm |
| BE | `D:/AI-QLBD/Linm.RMMS.WebService` · domain **Patrol** | board be_repo_confirm |
| Routes | `mfeStdRoute=/patrol/attendance` | VN abbrev keep English slug SSOT context |

## DES-GRID → Lin\*

| Zone | Component | DoD |
|------|-----------|-----|
| A | `LinPageLayout` header | 1 shell · no nested CatalogListShell |
| B | `catalogToolbar` | refresh · history · config · create · delete |
| C | `LinCatalogDataGrid` | resize default ON · row menu |
| D | `LinCatalogListPagination` | 50/100/200/500 · **cấm** footerPagination/pageSizeBar |

## Tasks (prior — done · **không rewrite**)

| id | layer | deps | skills | DoD | Status |
|----|-------|------|--------|-----|--------|
| T-CTX-01 | docs | — | context | Update attendance.md API route + BE status | **done** |
| T-BE-01 | api | T-CTX-01 | /new-endpoint | Entity · CRUD · ApiResponse · XCO GetById | **done** |
| T-BE-02 | migration | T-BE-01 | /database-migration | `rmms_attendance_logs` | **done** |
| T-BFF-01 | bff | T-BE-01 | /create-bff-api-feature | Proxy AttendanceLogsBffController | **done** |
| T-PERM-01 | ui+api | T-BE-01 | perm | FE permissions.ts · BE TODO RequirePermission | **done** |
| T-UI-LIST-01 | ui | T-BFF-01 · T-PERM-01 | /erp-form-context | Zones A–D · search · status filter · pageSize 50 | **done** — **cấm rewrite** |
| T-UI-FORM-01 | ui | T-UI-LIST-01 | form checklist | Slideout Create/Edit/View/Copy · readOnly view | **done** (footer-only polish under ACT) |
| T-QA-01 | qa | T-UI-FORM-01 | qa | scenarios + mfeStdUrl | **done** |

## FormType pack (canonical — `form-type-task-pack` · task_13e76e73)

| Task id | Role | Status | Maps to / notes |
|---------|------|--------|-----------------|
| T-UI-LIST-01 | Dev | **done** | A–D · **không** rewrite (already PASS) |
| T-UI-FORM-01 | Dev | **done** | Slideout C/E/V/Copy · View readOnly · `slideout_layout: footer_actions_only` |
| T-UI-ACT-01 | Dev | **done** | Action inventory → form/API (below) |
| T-BE-CRUD-01 | Dev | **done** | list/search + C/U/D + getById (= prior T-BE-01 verify) |
| T-UI-MAP-FORM | — | **n/a** | packKind=`list` — không map OMS |
| T-QA-CRUD-01 | QA | **done** | Create→Edit→View→Delete + row menu |
| T-PERM-01 | Dev | **done** | `patrol.attendance-logs.*` |
| T-CTX-01 | Dev | **done** | context |
| T-BFF-01 | Dev | **done** | BFF proxy |
| T-BE-02 | Dev | **done** | Schema migration |

**GAP-TL-FORMTYPE-01:** closed (stamped this turn) — prior task chỉ LIST+FORM thiếu ACT/CRUD ids.

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

**GAP-P2-ACT-\* (pre-Dev audit):**

| ID | Gap | Fix |
|----|-----|-----|
| GAP-P2-ACT-DELETE | Toolbar/row menu **thiếu** Delete dù `canDelete` + `attendanceService.delete` + API DELETE sẵn | **CLOSED** — `canDelete`/`onDelete` · `showDelete` · `case 'delete'` |
| GAP-P2-SLIDE-TOP-ACT | Z1 «Quay lại» + Hủy/Lưu trùng footer | **CLOSED** — footer-only |
| GAP-P2-SLIDE-DUP-SAVE | Hai cụm Lưu (top + footer) | **CLOSED** — footer only |

### T-BE-CRUD-01
**layer:** api  
**status:** **done** (verify — = prior T-BE-01)  
**DoD:**
- [x] API-01 list/search · API-02 getById (XCO) · API-03 create · API-04 update · API-05 soft delete
- [x] Route `api/v1/patrol/attendance-logs` · domain Patrol · no ERP
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
| SD-TOKEN | n/a P1 |

## list_parity / form

- list_parity Kind B — PASS required (re-audit HARD)
- form checklist · `implement.form_shell.actions=footer_only` — PASS required
- tree_master — n/a

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
| Anti-dup | reuse `attendanceService.delete` · BE controller sẵn |
| UI SSOT | `MFE-COMMON/Linm.Web.Common.Components` |
| BE SSOT | `D:/AI-QLBD/Linm.RMMS.WebService` · Patrol |
| HARD | `tl-retry-ssot-rereview` · cấm patch mù 1 chỗ · fix GAP-P2-ACT-DELETE + GAP-P2-SLIDE-* |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-team-lead |
| skillVersion | 2026.08.10.2 |
| schemaVersion | 2 |
| workflowVersion | 2026.08.10.2 |
| rulesVersion | 2026.08.10.3 |
| generatedAt | 2026-08-10T16:05:00.000Z |
| versionGate | rechecked |
| taskId | `task_13e76e73` |
