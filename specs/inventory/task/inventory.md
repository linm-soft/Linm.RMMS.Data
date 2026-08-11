# Team-lead — inventory

| Field | Value |
|-------|-------|
| feature | `inventory` |
| status | `confirmed` |
| packKind | `list` |
| updatedAt | 2026-08-09T16:56:00.000Z |

## Source assignment

| Layer | Path | Confirm |
|-------|------|---------|
| UI | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Contract` | autopilot packet default |
| BE | `D:/AI-QLBD/Linm.RMMS.WebService` · domain **Contract** | autopilot packet default |
| Routes | `mfeStdRoute=/contract/inventory` | autopilot |

## DES-GRID → Lin\*

| Zone | Component | DoD |
|------|-----------|-----|
| A | `LinPageLayout` header | 1 shell · no nested CatalogListShell |
| B | `catalogToolbar` | refresh · history · config · create · KPI |
| C | `LinCatalogDataGrid` | resize default ON · row menu |
| D | `LinCatalogListPagination` | 50/100/200/500 · **cấm** footerPagination/pageSizeBar |

## Tasks

| id | layer | deps | skills | DoD |
|----|-------|------|--------|-----|
| T-CTX-01 | docs | — | context | Update inventory.md API → DOMAIN-MAP contract routes |
| T-BE-01 | api | T-CTX-01 | /new-endpoint | Entity · CRUD · KPI · ApiResponse · XCO GetById |
| T-BE-02 | migration | T-BE-01 | /database-migration | `rmms_inventory_items` + `rmms_inventory_moves` |
| T-BFF-01 | bff | T-BE-01 | /create-bff-api-feature | Proxy InventoryItemsBffController |
| T-PERM-01 | ui+api | T-BE-01 | perm | FE permissions.ts · BE TODO RequirePermission |
| T-UI-LIST-01 | ui | T-BFF-01 · T-PERM-01 | /erp-form-context | Zones A–D · search · filters · pageSize 50 · LAYOUT-06 |
| T-UI-FORM-01 | ui | T-UI-LIST-01 | form checklist | Slideout Z1–Z3 Create/Edit/View/Copy · moves grid · leave-confirm |
| T-QA-01 | qa | T-UI-FORM-01 | qa | scenarios + mfeStdUrl |

## SD flags

| Flag | Value |
|------|-------|
| SD-AUTH | stub `[RequirePermission]` TODO |
| SD-BFF | proxy-only |
| SD-JOB | n/a |
| SD-NOTIFY | n/a |
| SD-MEDIA | n/a |
| SD-MAP | Leaflet full DEFER |

## list_parity / form

- list_parity Kind B — PASS required
- form checklist Z1–Z3 — PASS required
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
| generatedAt | 2026-08-09T16:56:00.000Z |
| versionGate | rechecked |
