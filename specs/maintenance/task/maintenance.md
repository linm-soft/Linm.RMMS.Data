# Team-lead — maintenance

| Field | Value |
|-------|-------|
| feature | `maintenance` |
| status | `confirmed` |
| packKind | `list` |
| changeScope | `edit_page` · gap=`crud_formtype` |
| taskId | `task_6d32b46f` |
| updatedAt | 2026-08-10T16:50:00.000Z |

## Source assignment

| Layer | Path | Confirm |
|-------|------|---------|
| UI | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Maintenance` | autopilot packet default |
| BE | `D:/AI-QLBD/Linm.RMMS.WebService` · domain **Maintenance** | autopilot packet default |
| Routes | `mfeStdRoute=/maintenance` | autopilot |

## DES-GRID → Lin\*

| Zone | Component | DoD |
|------|-----------|-----|
| A | `LinPageLayout` header | 1 shell · no nested CatalogListShell |
| B | `catalogToolbar` | refresh · history · config · create · delete |
| C | `LinCatalogDataGrid` | resize default ON · row menu |
| D | `LinCatalogListPagination` | 50/100/200/500 · **cấm** footerPagination/pageSizeBar |

## Tasks (prior — giữ)

| id | layer | deps | skills | DoD |
|----|-------|------|--------|-----|
| T-CTX-01 | docs | — | context | Update maintenance.md API route + BE status Signed |
| T-BE-01 | api | T-CTX-01 | /new-endpoint | Entity · CRUD · progress/complete · ApiResponse · XCO GetById |
| T-BE-02 | migration | T-BE-01 | /database-migration | `rmms_work_orders` |
| T-BFF-01 | bff | T-BE-01 | /create-bff-api-feature | Proxy WorkOrdersBffController |
| T-PERM-01 | ui+api | T-BE-01 | perm | FE permissions.ts · BE TODO RequirePermission |
| T-UI-LIST-01 | ui | T-BFF-01 · T-PERM-01 | /erp-form-context | Zones A–D · search · status/workType · pageSize 50 · LAYOUT-06 |
| T-UI-FORM-01 | ui | T-UI-LIST-01 | form checklist | Slideout Z1–Z3 Create/Edit/View/Copy · readOnly view · leave-confirm |
| T-QA-01 | qa | T-UI-FORM-01 | qa | scenarios + mfeStdUrl |

## FormType pack (canonical — `form-type-task-pack` · task_6d32b46f)

| Task id | Role | Status | Maps to / notes |
|---------|------|--------|-----------------|
| T-UI-LIST-01 | Dev | **done** | A–D · **không** rewrite (already PASS) |
| T-UI-FORM-01 | Dev | **done** | Slideout C/E/V/Copy · View readOnly |
| T-UI-ACT-01 | Dev | **pending→done** | Action inventory → form/API (below) |
| T-BE-CRUD-01 | Dev | **pending→done** | list/search + C/U/D + getById + progress/complete (= prior T-BE-01 verify) |
| T-UI-MAP-FORM | — | **n/a** | packKind=`list` — không map OMS |
| T-QA-CRUD-01 | QA | **pending→done** | Create→Edit→View→Delete + row menu |
| T-PERM-01 | Dev | **done** | `maintenance.work-orders.*` |
| T-CTX-01 | Dev | **done** | context |
| T-BFF-01 | Dev | **done** | BFF proxy |
| T-BE-02 | Dev | **done** | Schema_RmmsWorkOrders |

**GAP-TL-FORMTYPE-01:** closed (stamped this turn) — prior task chỉ LIST+FORM thiếu ACT/CRUD ids.

### T-UI-ACT-01 — action inventory

| Action | Surface | Handler | API |
|--------|---------|---------|-----|
| Search | S-LIST filter | `SearchTextInput` → `applyFilters` | GET `/` |
| Status / WorkType filter | S-LIST filter | `Select` → apply | GET `?status=&workType=` |
| Refresh | toolbar | `reloadAll` | GET `/` |
| +Tạo | toolbar | `openCreate` → Slideout create | POST `/` |
| Edit (toolbar) | toolbar | `openRow(edit)` | GET `/{id}` · PUT |
| View (toolbar) | toolbar | `openRow(view)` | GET `/{id}` |
| Delete (toolbar) | toolbar | `deleteRow` | DELETE `/{id}` soft |
| History (toolbar) | toolbar | `historyStub(activeRow)` | DEFER stub |
| Config `fa-cog` | toolbar | `editConfigStub` | ui-schema hint |
| Row View/Edit/Copy/Delete | row menu | `handleRowMenuSelect` | same as above |
| Row Progress | row menu | `updateProgress` | POST `/{id}/progress` |
| Row Complete | row menu | `completeRow` | POST `/{id}/complete` |
| Deep-link `?form=` | URL | create/edit/view/copy | GET `/{id}` when id |
| Form Save/Cancel/View actions | Slideout footer + Z1 | `handleSave` | POST/PUT |

**GAP-P2-ACT-\* (pre-Dev audit):**

| ID | Gap | Fix |
|----|-----|-----|
| GAP-P2-ACT-DELETE | Toolbar/row menu **thiếu** Delete dù `canDelete` + `maintenanceService.delete` + API soft-delete sẵn | **CLOSED** — `canDelete`/`onDelete` · `showDelete` · shared `deleteRow` |

### T-BE-CRUD-01
**layer:** api  
**status:** **done** (verify — = prior T-BE-01)  
**DoD:**
- [x] API-01 list/search · API-02 getById (XCO) · API-03 create · API-04 update · API-05 soft delete
- [x] API-06 progress · API-07 complete (stub)
- [x] Route `api/v1/maintenance/work-orders` · domain Maintenance · no ERP
- [x] BFF proxy DELETE/progress/complete present
- [x] `dotnet build` API + BFF PASS

### T-QA-CRUD-01
**layer:** qa  
**status:** **done**  
**deps:** T-UI-ACT-01 · T-BE-CRUD-01  
**DoD:**
- [x] Smoke Create→Edit→View→Delete + row menu Delete + toolbar Delete
- [x] Progress/Complete row actions → dedicated API
- [x] Update `qa/scenarios.md` QA-CRUD rows

## Deps (FormType delta)

```
T-BE-01 ≈ T-BE-CRUD-01
T-UI-FORM-01 → T-UI-ACT-01 → T-QA-CRUD-01
```

## SD flags

| Flag | Value |
|------|-------|
| SD-AUTH | stub `[RequirePermission]` TODO |
| SD-BFF | proxy-only |
| SD-JOB | n/a |
| SD-KPI | Kind E summary stub |
| SD-COMMENT | comment entity DEFER |
| SD-SLA | stub DEFER Workflow |
| SD-ACCEPT | complete endpoint stub P2 |

## list_parity / form

- list_parity Kind B — PASS (prior · giữ)
- form checklist Z1–Z3 — PASS (prior · giữ)
- tree_master — n/a
- tl-list-shell-height (LAYOUT-06) — PASS (prior · giữ)

## Handoff → Dev / Review

| Field | Value |
|-------|-------|
| Next | Dev T-UI-ACT-01 · T-BE-CRUD-01 verify · QA-CRUD · Review autopilot |
| Anti-dup | reuse `maintenanceService.delete` · BE controller sẵn |
| UI SSOT | `MFE-Source/Linm.Web.RMMS.Maintenance` · `pages/MaintenanceListPage` |
| BE SSOT | `D:/AI-QLBD/Linm.RMMS.WebService` · Maintenance |
| HARD | `tl-retry-ssot-rereview` · fix_all · no list rewrite |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-team-lead |
| skillVersion | 2026.08.09.02 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.09.02 |
| rulesVersion | 2026.08.09.02 |
| generatedAt | 2026-08-10T16:50:00.000Z |
| versionGate | rechecked |
