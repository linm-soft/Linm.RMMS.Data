# Team-lead — patrol

| Field | Value |
|-------|-------|
| feature | `patrol` |
| status | `confirmed` |
| packKind | `list` |
| changeScope | `edit_page` · gap=`crud_formtype` |
| taskId | `task_e0173ab6` |
| updatedAt | 2026-08-10T17:00:00.000Z |

## Source assignment

| Layer | Path | Confirm |
|-------|------|---------|
| UI | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Patrol` | autopilot packet default |
| BE | `D:/AI-QLBD/Linm.RMMS.WebService` · domain **Patrol** | autopilot packet default |
| Routes | `mfeStdRoute=/patrol` | `mfeStdUrl=http://localhost:9304/patrol` |

## DES-GRID → Lin\*

| Zone | Component | DoD |
|------|-----------|-----|
| A | `LinPageLayout` header | 1 shell · no nested CatalogListShell |
| B | `catalogToolbar` | refresh · history · config · create · **delete** |
| C | `LinCatalogDataGrid` | resize default ON · row menu |
| D | `LinCatalogListPagination` | 50/100/200/500 · **cấm** footerPagination/pageSizeBar |

## Tasks (prior — giữ)

| id | layer | deps | skills | DoD |
|----|-------|------|--------|-----|
| T-CTX-01 | docs | — | context | Update patrol.md API route + BE status Signed |
| T-BE-01 | api | T-CTX-01 | /new-endpoint | Entity · CRUD · ApiResponse · XCO GetById |
| T-BE-02 | migration | T-BE-01 | /database-migration | `rmms_patrol_sessions` |
| T-BFF-01 | bff | T-BE-01 | /create-bff-api-feature | Proxy PatrolSessionsBffController |
| T-PERM-01 | ui+api | T-BE-01 | perm | FE permissions.ts · BE TODO RequirePermission |
| T-UI-LIST-01 | ui | T-BFF-01 · T-PERM-01 | /erp-form-context | Zones A–D · search · status filter · pageSize 50 |
| T-UI-FORM-01 | ui | T-UI-LIST-01 | form checklist | Slideout Z1–Z3 Create/Edit/View/Copy · readOnly view |
| T-QA-01 | qa | T-UI-FORM-01 | qa | scenarios + mfeStdUrl |

## FormType pack (canonical — `form-type-task-pack` · task_e0173ab6)

| Task id | Role | Status | Maps to / notes |
|---------|------|--------|-----------------|
| T-UI-LIST-01 | Dev | **done** | A–D · **không** rewrite (already PASS) |
| T-UI-FORM-01 | Dev | **done** | Slideout C/E/V/Copy · View readOnly |
| T-UI-ACT-01 | Dev | **pending→done** | Action inventory → form/API (below) |
| T-BE-CRUD-01 | Dev | **pending→done** | list/search + C/U/D + getById (= prior T-BE-01 verify) |
| T-UI-MAP-FORM | — | **n/a** | packKind=`list` — không map OMS |
| T-QA-CRUD-01 | QA | **pending→done** | Create→Edit→View→Delete + row menu |
| T-PERM-01 | Dev | **done** | `patrol.sessions.*` |
| T-CTX-01 | Dev | **done** | context |
| T-BFF-01 | Dev | **done** | BFF proxy |
| T-BE-02 | Dev | **done** | Schema_RmmsPatrolSessions |

**GAP-TL-FORMTYPE-01:** closed (stamped this turn) — prior task chỉ LIST+FORM thiếu ACT/CRUD ids.

### T-UI-ACT-01 — action inventory

| Action | Surface | Handler | API |
|--------|---------|---------|-----|
| Search | S-LIST filter | `SearchTextInput` → `applyFilters` | GET `/sessions` |
| Status filter | S-LIST filter | `Select` → apply | GET `?status=` |
| Refresh | toolbar | `reloadAll` | GET `/sessions` |
| +Tạo | toolbar | `openCreate` → Slideout create | POST `/sessions` |
| Edit (toolbar) | toolbar | `openRow(edit)` | GET `/{id}` · PUT |
| View (toolbar) | toolbar | `openRow(view)` | GET `/{id}` |
| Delete (toolbar) | toolbar | `deleteRow` | DELETE `/{id}` soft |
| History (toolbar) | toolbar | `historyStub(activeRow)` | DEFER stub |
| Config `fa-cog` | toolbar | `editConfigStub` | ui-schema hint |
| Row View/Edit/Copy/Delete | row menu | `handleRowMenuSelect` | same as above |
| Row History | row menu | alert stub | DEFER |
| Deep-link `?form=` | URL | create/edit/view/copy | GET `/{id}` when id |
| Form Save/Cancel / View→Edit/Copy | Slideout Z1+Z3 | `handleSave` | POST/PUT |

**GAP-P2-ACT-\* (pre-Dev audit):**

| ID | Gap | Fix |
|----|-----|-----|
| GAP-P2-ACT-DELETE | Toolbar **thiếu** Delete · row menu **thiếu** `showDelete` dù `patrolService.delete` + API soft-delete sẵn | **CLOSED** — `canDelete`/`onDelete` · `showDelete` · shared `deleteRow` |

### T-BE-CRUD-01
**layer:** api  
**status:** **done** (verify — = prior T-BE-01)  
**DoD:**
- [x] API-01 list/search · API-02 getById (XCO) · API-03 create · API-04 update · API-05 soft delete
- [x] Route `api/v1/patrol/sessions` · domain Patrol · no ERP
- [x] BFF proxy DELETE present
- [x] `dotnet build` API + BFF PASS (verify gate)

### T-QA-CRUD-01
**layer:** qa  
**status:** **done**  
**deps:** T-UI-ACT-01 · T-BE-CRUD-01  
**DoD:**
- [x] Smoke Create→Edit→View→Delete + row menu Delete + toolbar Delete
- [x] Update `qa/scenarios.md` QA-CRUD rows

## Deps (FormType delta)

```
T-BE-01 ≈ T-BE-CRUD-01
T-UI-FORM-01 → T-UI-ACT-01 → T-QA-CRUD-01
```

## SD flags

| Flag | Value |
|-------|-------|
| SD-AUTH | stub `[RequirePermission]` TODO |
| SD-BFF | proxy-only |
| SD-JOB | n/a |
| SD-TOKEN | n/a P1 |
| Kind E map/tracks | P2 out of list pack |

## list_parity / form

- list_parity Kind B — PASS (prior · giữ)
- form checklist Z1–Z3 — PASS (prior · giữ)
- tree_master — n/a
- tl-list-shell-height (LAYOUT-06) — PASS (prior · giữ)

## Handoff → Dev / Review

| Field | Value |
|-------|-------|
| Next | Dev T-UI-ACT-01 · T-BE-CRUD-01 verify · QA-CRUD · Review autopilot |
| Anti-dup | reuse `patrolService.delete` · BE controller sẵn · **cấm** rewrite LIST/FORM |
| UI SSOT | `MFE-Source/Linm.Web.RMMS.Patrol` · `pages/PatrolListPage` |
| BE SSOT | `D:/AI-QLBD/Linm.RMMS.WebService` · Patrol |
| HARD | `tl-retry-ssot-rereview` · fix_all · no list rewrite |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-team-lead |
| skillVersion | 2026.08.09.02 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.09.02 |
| rulesVersion | 2026.08.09.02 |
| generatedAt | 2026-08-10T17:00:00.000Z |
| versionGate | rechecked |
