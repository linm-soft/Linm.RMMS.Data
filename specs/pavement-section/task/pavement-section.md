# Team-lead — pavement-section

| Field | Value |
|-------|-------|
| feature | `pavement-section` |
| status | `confirmed` |
| packKind | `list` |
| changeScope | `edit_page` · gap=`crud_formtype` |
| taskId | `task_d0fcb3d7` |
| updatedAt | 2026-08-10T17:20:00.000Z |

## Source assignment

| Layer | Path | Confirm |
|-------|------|---------|
| UI | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` | autopilot packet default |
| BE | `D:/AI-QLBD/Linm.RMMS.WebService` · domain **Asset** | autopilot packet default |
| Routes | `mfeStdRoute=/asset/pavement-section` | `mfeStdUrl=http://localhost:9301/asset/pavement-section` |

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
| T-CTX-01 | docs | — | context | Context API path note Asset (không infra) |
| T-BE-01 | api | SA | /new-endpoint | Controller+Service+DTO `api/v1/asset/pavement-sections` |
| T-BE-02 | migration | T-BE-01 | /database-migration | `rmms_pavement_sections` + indexes |
| T-BFF-01 | bff | T-BE-01 | /create-bff-api-feature | Proxy `web-bff/api/v1/asset/pavement-sections` |
| T-PERM-01 | ui+api | — | perm | FE `pavementListPermissions` · BE TODO RequirePermission |
| T-UI-LIST-01 | ui | design | /erp-form-context | 1× LinPageLayout · LinCatalogDataGrid · LinCatalogListPagination · toolbar FULL · LAYOUT-06 · list_parity |
| T-UI-FORM-01 | ui | T-UI-LIST-01 | form checklist | Full page form Z1–Z3 · View readOnly · Copy |
| T-QA-01 | qa | Dev | qa | Smoke mfeStdUrl + scenarios |

## FormType pack (canonical — `form-type-task-pack` · task_d0fcb3d7)

| Task id | Role | Status | Maps to / notes |
|---------|------|--------|-----------------|
| T-UI-LIST-01 | Dev | **done** | A–D · **không** rewrite (already PASS) |
| T-UI-FORM-01 | Dev | **done** | Full page C/E/V/Copy · View readOnly |
| T-UI-ACT-01 | Dev | **pending→done** | Action inventory → form/API (below) |
| T-BE-CRUD-01 | Dev | **pending→done** | list/search + C/U/D + getById (= prior T-BE-01 verify) |
| T-UI-MAP-FORM | — | **n/a** | packKind=`list` — không map OMS |
| T-QA-CRUD-01 | QA | **pending→done** | Create→Edit→View→Delete + row menu |
| T-PERM-01 | Dev | **done** | `asset.pavement-sections.*` |
| T-CTX-01 | Dev | **done** | context |
| T-BFF-01 | Dev | **done** | BFF proxy |
| T-BE-02 | Dev | **done** | Schema_RmmsPavementSections |

**GAP-TL-FORMTYPE-01:** closed (stamped this turn) — prior task chỉ LIST+FORM thiếu ACT/CRUD ids.

### T-UI-ACT-01 — action inventory

| Action | Surface | Handler | API |
|--------|---------|---------|-----|
| Search | S-LIST filter | `SearchTextInput` → `applyFilters` | GET `/pavement-sections` |
| Province / Status filter | S-LIST filter | `Select` → apply | GET `?province=` · `?status=` |
| Refresh | toolbar | `reloadAll` | GET `/pavement-sections` |
| +Tạo | toolbar | `openCreate` → full page create | POST `/pavement-sections` |
| Edit (toolbar) | toolbar | `openRow(edit)` | GET `/{id}` · PUT |
| View (toolbar) | toolbar | `openRow(view)` | GET `/{id}` |
| Delete (toolbar) | toolbar | `deleteRow` | DELETE `/{id}` soft |
| History (toolbar) | toolbar | `openHistory(activeRow)` | DEFER stub |
| Config `fa-cog` | toolbar | `setConfigOpen` | ui-schema |
| Row View/Edit/Copy/Delete | row menu | `handleRowMenuSelect` | same as above |
| Row History | row menu | `openHistory` | DEFER stub |
| Form Save/Cancel / View→Edit / Delete | Full page Z1+Z3 | `handleSave` · `handleDelete` | POST/PUT/DELETE |
| Map live | form toolbar | link `/gis?layerCode=mat-duong` | n/a |

**GAP-P2-ACT-\* (pre-Dev audit):**

| ID | Gap | Fix |
|----|-----|-----|
| GAP-P2-ACT-DELETE | Toolbar **thiếu** Delete · row menu **thiếu** `showDelete` dù form Edit có Xóa + `pavementService.delete` + API soft-delete sẵn | **CLOSED** — `canDelete`/`onDelete` · `showDelete` · shared `deleteRow` |

### T-BE-CRUD-01
**layer:** api  
**status:** **done** (verify — = prior T-BE-01)  
**DoD:**
- [x] API-01 list/search · API-02 getById (XCO) · API-03 create · API-04 update · API-05 soft delete
- [x] Route `api/v1/asset/pavement-sections` · domain Asset · no ERP
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
| Excel import/export | OUT pack |
| History API | stub |

## list_parity / form

- list_parity Kind B — PASS (prior · giữ)
- form checklist Z1–Z3 — PASS (prior · giữ)
- tree_master — n/a
- tl-list-shell-height (LAYOUT-06) — PASS (prior · giữ)

## Handoff → Dev / Review

| Field | Value |
|-------|-------|
| Next | Dev T-UI-ACT-01 · T-BE-CRUD-01 verify · QA-CRUD · Review autopilot |
| Anti-dup | reuse `pavementService.delete` · BE controller sẵn · **cấm** rewrite LIST/FORM |
| UI SSOT | `MFE-Source/Linm.Web.RMMS.Asset` · `pages/PavementSectionPage` |
| BE SSOT | `D:/AI-QLBD/Linm.RMMS.WebService` · Asset |
| HARD | `tl-retry-ssot-rereview` · fix_all · no list rewrite |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-team-lead |
| skillVersion | 2026.08.09.02 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.09.02 |
| rulesVersion | 2026.08.09.3 |
| generatedAt | 2026-08-10T17:20:00.000Z |
| versionGate | rechecked |
