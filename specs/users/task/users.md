# Team-lead — task pack · users

| Field | Value |
|-------|-------|
| feature | `users` |
| status | `confirmed` |
| mfeStdRoute | `/integration/users` |
| route_confirm | **approve** A = `/integration/users` (context + DOMAIN-MAP) |
| updatedAt | 2026-08-10T08:37:00.000Z |

## Source lock

| Key | Value |
|-----|-------|
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Integration` |
| be | `D:/AI-QLBD/Linm.RMMS.WebService` |
| domain | Integration |
| api | `api/v1/integration/users` |
| bff | `web-bff/api/v1/integration/users` |
| org reuse | `api/v1/integration/org-units` |

## DES-GRID → Lin\* map

| DES-GRID | Component |
|----------|-----------|
| A | `LinPageLayout` header |
| B | catalogToolbar (refresh · history · editConfig · add) + page actions profile/pwd |
| C1 | `ErpListHeaderFilters` · `SearchTextInput` · `Select` |
| C2 | org tree panel + `LinCatalogDataGrid` (resizable ON) · `LinCatalogRowActionMenu` |
| D | `LinCatalogListPagination` |
| Form | `Slideout` Z1–Z3 · Input/Select · readOnly view |
| LAYOUT-06 | page flex column · gridWrap `min-height:0` · skeleton |

## Tasks

| id | page | layer | deps | DoD |
|----|------|-------|------|-----|
| T-CTX-01 | users | docs | — | context API paths Signed Integration |
| T-PERM-01 | users | ui+api | T-CTX-01 | codes `integration.users.*` · FE gate · BE stub TODO RequirePermission |
| T-BE-01 | users | api | T-CTX-01 | CRUD + change-password + assign stubs · DTOs |
| T-BE-02 | users | migration | T-BE-01 | `Schema_RmmsUsers` · AppDbContext |
| T-BFF-01 | users | bff | T-BE-01 | proxy UsersBffController |
| T-UI-LIST-01 | users | ui | T-BFF-01 | A–D · tree · grid · pagination · no nested shell |
| T-UI-FORM-01 | users | ui | T-UI-LIST-01 | Slideout + pwd + profile modals |
| T-QA-01 | users | qa | T-UI-FORM-01 | scenarios.md · mfeStdUrl smoke |

## SD flags

| Flag | Value |
|------|-------|
| SD-BFF | proxy-only |
| SD-AUTH | stub local perms |
| SD-JOB | n/a |
| SD-TOKEN | reuse existing API client |
| SD-HEADER | X-Company-Id forward |

## Handoff → Dev

1. Implement T-BE → migration → BFF → FE list/form
2. Local demo store fallback when API down
3. VERIFY: `yarn typecheck` + `yarn build` · `dotnet build`
4. Stamp `mfeStdUrl` = `http://localhost:9314/integration/users`

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-team-lead |
| skillVersion | 2026.08.09.02 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.09.02 |
| rulesVersion | 2026.08.09.3 |
| generatedAt | 2026-08-10T08:37:00.000Z |
| versionGate | rechecked |
