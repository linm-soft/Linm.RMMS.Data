# Review — drone

| Field | Value |
|-------|-------|
| feature | `drone` |
| status | `confirmed` (autopilot) |
| review_confirm | approve |
| updatedAt | 2026-08-09T15:50:00.000Z |

## REVIEW-META

| Key | Hash/note |
|-----|-----------|
| FE list shell | LinPageLayout×1 · LinCatalogDataGrid · LinCatalogListPagination |
| BE path | `Linm.RMMS.WebService` Domains/Drone only — **no ERP.*** |
| Migration | Schema_RmmsDroneScans |
| mfeStdUrl | http://localhost:9313/drone |

## Findings

| ID | Sev | Area | Note | Disposition |
|----|-----|------|------|-------------|
| F-01 | P2 | Viewer | Cesium stub only | backlog P3 |
| F-02 | P2 | Upload | batch stub toast | backlog |
| F-03 | P3 | IAM | permissions stub allow-all | backlog |
| F-04 | info | Event | drone.scan.completed DEFER | documented |

## Security

- Soft-delete · tenant CompanyCode filter · no secrets in FE
- BFF proxy-only · no ERP Master leakage

## Function

- List search/filter/pager · form C/E/V/Copy · process stub · artifacts lines — **OK**
- Builds PASS (FE+BE)

## Version meta

skillId=agent-review · skillVersion=2026.08.09.02 · workflowVersion=2026.08.09.02 · versionGate=ok
