# Team-lead — integration

| Field | Value |
|-------|-------|
| feature | `integration` |
| status | `confirmed` |
| changeScope | `edit_page` |
| gap | `crud_formtype` |
| mode | `fix_gaps` |
| taskId | `task_fd8ec33e` |
| updatedAt | 2026-08-14T19:20:00.000Z |

## Source assignment

| Layer | Path | Confirm |
|-------|------|---------|
| UI | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Integration` | autopilot packet default |
| BE | `D:/AI-QLBD/Linm.RMMS.WebService` · domain **Integration** | autopilot packet default |
| Routes | `mfeStdRoute=/integration` | autopilot |

## DES-GRID → Lin\*

| Zone | Component | DoD |
|------|-----------|-----|
| A | `LinPageLayout` header | 1 shell · no nested CatalogListShell |
| B | `catalogToolbar` + hub actions | refresh · config · Import |
| C | `LinCatalogDataGrid` (Sync/Partners) | resize ON · row menu |
| D | `LinCatalogListPagination` | 50/100/200/500 |

## Tasks

| id | layer | deps | skills | DoD |
|----|-------|------|--------|-----|
| T-CTX-01 | docs | — | context | Update integration.md API Signed under `api/v1/integration/*` |
| T-BE-01 | api | T-CTX-01 | /new-endpoint | SyncJob · PartnerAdapter · endpoints · import · offline-batch |
| T-BE-02 | migration | T-BE-01 | /database-migration | `rmms_sync_jobs` · `rmms_partner_adapters` |
| T-BFF-01 | bff | T-BE-01 | /create-bff-api-feature | Proxy hub controllers |
| T-PERM-01 | ui+api | T-BE-01 | perm | FE permissions.ts · BE TODO RequirePermission |
| T-UI-LIST-01 | ui | T-BFF-01 · T-PERM-01 | /erp-form-context | Hub Kind G · Sync/Partners A–D · LAYOUT-06 |
| T-UI-FORM-01 | ui | T-UI-LIST-01 | form checklist | ImportAssetSlideout Z1–Z3 · leave-confirm |
| T-QA-01 | qa | T-UI-FORM-01 | qa | scenarios + mfeStdUrl |

## FormType pack (canonical — `form-type-task-pack` · task_fd8ec33e)

| Task id | Role | Status | Maps to / notes |
|---------|------|--------|-----------------|
| T-UI-LIST-01 | Dev | **done** | A–D · **không** rewrite (already PASS) |
| T-UI-FORM-01 | Dev | **done** | Import Z1–Z3 · polish footer-only under ACT |
| T-UI-ACT-01 | Dev | **pending→done** | Action inventory → form/API |
| T-BE-CRUD-01 | Dev | **pending→done** | list/search + C/U/D + getById |
| T-UI-MAP-FORM | — | **n/a** | packKind=`list` |
| T-QA-CRUD-01 | QA | **done** | Create→Edit→View→Delete + row menu |

**GAP-TL-FORMTYPE-01:** closed this turn — prior LIST+FORM thiếu ACT/CRUD ids.

### T-UI-ACT-01 — action inventory

| Action | Surface | Handler | API |
|--------|---------|---------|-----|
| Search jobs | filter | SearchTextInput | GET `/sync-jobs` |
| Refresh | toolbar | reloadActive | GET |
| +Import | toolbar | openImport | POST `/assets/import` |
| View/Edit/Delete | toolbar | openJob / deleteJob | GET/PUT/DELETE |
| Row View/Edit/Delete/History/Retry | row menu | buildCatalogRowMenuItems + retry | same + POST retry |
| Partner View/Toggle | row menu | modal / toggle | GET id · POST toggle |
| Form actions | footer only | customFooter | POST import · PUT |

**GAP-P2-ACT-\*** live audit:

| ID | Gap | Fix |
|----|-----|-----|
| GAP-P2-ACT-CRUD | Toolbar thiếu View/Edit/Delete | Wire showView/showEdit/canDelete |
| GAP-P2-ACT-ROW | Row menu thiếu Edit/Delete | buildCatalogRowMenuItems |
| GAP-P2-SLIDE-TOP-ACT | Z1 Đóng Import | footer-only |
| GAP-P2-BE-CRUD | Thiếu PUT/DELETE · partner getById | API + BFF |

### T-BE-CRUD-01
list/get/create(import)/update/soft-delete · partner getById · domain Integration · BFF PUT/DELETE

### T-QA-CRUD-01
Smoke Import→Edit→View→Delete + Retry/Toggle · footer-only

## SD flags

| Flag | Value |
|------|-------|
| SD-AUTH | stub `[RequirePermission]` TODO |
| SD-BFF | proxy-only |
| SD-JOB | sync retry mock in-process |
| SD-NOTIFY | webhook register DEFER stub |
| SD-MEDIA | import file name only P1 |

## list_parity / form

- list_parity Kind B (Sync + Partners) — PASS required
- form checklist Z1–Z3 Import — PASS required
- tree_master — n/a
- tl-list-shell-height (LAYOUT-06) — PASS required

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-team-lead |
| skillVersion | 2026.08.09.02 |
| schemaVersion | 2 |
| workflowVersion | 2026.08.09.02 |
| rulesVersion | 2026.08.09.02 |
| generatedAt | 2026-08-14T19:20:00.000Z |
| versionGate | rechecked |
| taskId | `task_fd8ec33e` |
