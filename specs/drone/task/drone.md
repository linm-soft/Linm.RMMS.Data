# Team-lead — task pack · drone

| Field | Value |
|-------|-------|
| feature | `drone` |
| status | `done` |
| mfeStdRoute | `/drone` (route_confirm autopilot — keep DOMAIN-MAP ownership) |
| uiRepo | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Drone` |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` |

## SSOT re-review (HARD before Dev Write)

| Check | Expected |
|-------|----------|
| LinPageLayout | **1×** — cấm nested CatalogListShell |
| Grid | `LinCatalogDataGrid` · column drag default ON |
| Footer | `LinCatalogListPagination` only |
| Flex+skeleton | `useServerPagedListLoading` |
| Toolbar | refresh · history · config · add |
| Search | `SearchTextInput` work |
| Form | C/E/V/Copy · readOnly view · required name/flightType/road |

## DES-GRID → Lin*

| DES | Lin* |
|-----|------|
| A/B/C/D | LinPageLayout + catalogToolbar + LinCatalogDataGrid + LinCatalogListPagination |
| C3 | LinCatalogRowActionMenu |

## Tasks

| id | page | role | deps | layer | DoD |
|----|------|------|------|-------|-----|
| T-CTX-01 | drone | team_lead | — | docs | context+demo+controlHint linked |
| T-PERM-01 | drone | dev | T-CTX-01 | FE | `useDronePermissions` stub allow-all |
| T-BE-01 | scans | dev | — | BE | Entity+DTO+Service+Controller `api/v1/drone/scans` |
| T-BE-02 | scans | dev | T-BE-01 | BFF | proxy `web-bff/api/v1/drone/scans` |
| T-BE-03 | scans | dev | T-BE-01 | MIG | `Schema_RmmsDroneScans` tables |
| T-UI-LIST | /drone | dev | T-PERM-01,T-BE-01 | FE | Kind B list DoD |
| T-UI-FORM | /drone/:id | dev | T-UI-LIST | FE | form + artifacts + process stub |
| T-QA-01 | drone | qa | T-UI-FORM,T-BE-02 | QA | scenarios + mfeStdUrl |
| T-RV-01 | drone | review | T-QA-01 | RV | findings |

## source.*

| Key | Path |
|-----|------|
| list | `src/pages/DroneListPage/` |
| form | `src/pages/DroneFormPage/` |
| service | `src/services/drone/` |
| demo store | `src/demo/droneStore.ts` |
| entity | `api/shared/.../Entities/DroneScanEntity.cs` |
| domain | `api/src/.../Domains/Drone/` |
| bff | `bff/domains/drone/` |

## Handoff → Dev

Repo confirms from RUN PACKET: BE=`Linm.RMMS.WebService` · UI=`MFE-Source/Linm.Web.RMMS.Drone`. Build PASS required. Set `mfeStdUrl=http://localhost:9313/drone`.

## Version meta

| Field | Value |
|-------|-------|
| skillId | agent-team-lead |
| skillVersion | 2026.08.09.02 |
| workflowVersion | 2026.08.09.02 |
| versionGate | ok |
