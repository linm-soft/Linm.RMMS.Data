# Review — findings — citizen

| Field | Value |
|-------|-------|
| feature | `citizen` |
| status | `done` |
| taskId | `task_ae6e4e92` |
| review_confirm | **approve** (autopilot 2026-08-09) |
| updatedAt | 2026-08-09T14:52:00.000Z |

## REVIEW-META

| Key | Value |
|-----|-------|
| scope | Kind B list `/integration/citizen` + API `citizen-incidents` + public incidents |
| mfe | `Linm.Web.RMMS.Integration` |
| be | `Linm.RMMS.WebService` · domain Integration |
| recheck | full_pipeline · SSOT · LAYOUT-06 · ≠ feedback |

## Query / API

| Check | Result |
|-------|--------|
| List search/status/page/pageSize | OK |
| GetById XCO | OK |
| Soft delete | OK (API) |
| Public POST/GET + alias | OK |
| BFF proxy only | OK |
| No ERP.* / Domains/Master | OK |
| `[RequirePermission]` | Debt P1 (stub) |

## Security

| Check | Result |
|-------|--------|
| Tenant filter list/CUD | OK |
| Cross-company GetById deny → 403 | OK |
| PII enc-at-rest | Debt P1 |
| Rate-limit IP | Debt P1 |
| P0 open | none |

## UI / function

| Check | Result |
|-------|--------|
| LinPageLayout single shell | OK |
| LinCatalogDataGrid + resize ON | OK |
| LinCatalogListPagination | OK |
| Filter no Tìm | OK |
| Form slideout modes + leave-confirm | OK |
| ≠ feedback badge | OK |
| **GAP-P2-LAYOUT-06** | **OK** |

## Verdict

**approve** — list pack ready; debt Auth/PII/presign/Kind G map tracked in implement MD.

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-review |
| skillVersion | 2026.08.09.02 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.08.31 |
| rulesVersion | 2026.08.08.31 |
| generatedAt | 2026-08-09T14:52:00.000Z |
| versionGate | rechecked |
