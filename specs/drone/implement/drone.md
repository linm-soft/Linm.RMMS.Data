# Implement — drone

| Field | Value |
|-------|-------|
| feature | `drone` |
| status | `done` |
| taskId | `task_e4372bbe` |
| mfeStdRoute | `/drone` |
| mfeStdUrl | `http://localhost:9313/drone` |
| updatedAt | 2026-08-09T15:50:00.000Z |

## retry.ssot_rereview

| Check | Result |
|-------|--------|
| 1× LinPageLayout | **pass** — list only |
| LinCatalogDataGrid + column drag default | **pass** |
| Footer LinCatalogListPagination | **pass** — no raw pager |
| flex + skeleton | **pass** — `useServerPagedListLoading` |
| toolbar config / search work / row menu | **pass** |
| form C/E/V/Copy + artifacts | **pass** |
| GAP-P2-LAYOUT-06 | **pass** — catalog shell |

## FE changes

| Path | Notes |
|------|-------|
| `src/pages/DroneListPage/*` | Kind B catalog list |
| `src/pages/DroneFormPage/*` | Kind D form + artifacts |
| `src/demo/droneStore.ts` | localStorage seed/fallback |
| `src/hooks/useDronePermissions.ts` | stub allow-all |
| `src/services/drone/*` | `/drone/scans` + process |
| `package.json` | local common-components tarball (parity AiVision) |

## BE changes (Step 4b)

| Path | Notes |
|------|-------|
| Entities `DroneScan` / `DroneArtifact` | `rmms_drone_scans` · `rmms_drone_artifacts` |
| DTOs `DroneScanDtos.cs` | ApiResponse envelope |
| `DroneScanService` + `DroneScansController` | `api/v1/drone/scans` |
| `DroneScansBffController` | `web-bff/api/v1/drone/scans` |
| Migration | `20260809154047_Schema_RmmsDroneScans` |
| AppDbContext | DbSets + tenant filter + cascade |

## Verify

| Gate | Result |
|------|--------|
| FE typecheck | **PASS** |
| FE build (`LINM_RUN_DEV_LOCAL_BUNDLE=1`) | **PASS** |
| BE API Release | **PASS** |
| BE BFF Release | **PASS** |

## Debt

- Cesium live viewer P3 · real upload/worker PDAL · IAM permissions · event bus DEFER
- Unit tests pending (accept_test_debt)

## Version meta

| Field | Value |
|-------|-------|
| skillId | agent-dev |
| skillVersion | 2026.08.09.02 |
| workflowVersion | 2026.08.09.02 |
| versionGate | ok |
