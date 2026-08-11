# Team-lead — integration

| Field | Value |
|-------|-------|
| feature | `integration` |
| status | `confirmed` |
| packKind | `list` |
| updatedAt | 2026-08-09T16:36:00.000Z |

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
| schemaVersion | 1 |
| workflowVersion | 2026.08.09.02 |
| rulesVersion | 2026.08.09.02 |
| generatedAt | 2026-08-09T16:36:00.000Z |
| versionGate | rechecked |
