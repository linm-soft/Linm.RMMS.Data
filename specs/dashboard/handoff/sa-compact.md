# Handoff compact — sa

schemaVersion: 1
feature: dashboard
packKind: dashboard
role: sa
status: done
skillVersion: 2026.09.05.03
workflowVersion: 2026.09.05.03
rulesVersion: 2026.09.17.2
writtenAt: 2026-09-17T17:05:00.000Z
taskId: task_78265452
contentHashPriorDataAnaly: sha256:0c1488357ccf88e8934c3fcb9a7925cc21aa9ae46624263ad2355a7597468b7f
autoApprove: ON
solution_confirm: approve
e2eQa: ON (queued `/agent-qa*` only)

## Decisions
- changeScope: new_page · Kind E KPI hub Full page · report_standard v1 · chart_none P1
- domain: Report (DOMAIN-MAP dashboard→report) + read Incident · BFF proxy-only
- **cấm** api/v1/dashboard/* · ERP.* · Schema_* · Write MFE ở SA
- FormMode: Read/Xem only · asOf→from/to · LeaveConfirmModal dirty · **cấm** CRUD
- Counts: reuse ReportQueryController + IncidentsController · pageSize=1 totalCount
- GAP-DASH-COV-01 / ROADLEN-01: lock **0** + toast (P2 formula/asset)
- Patrol residual: soft-degrade 0/empty/toast · PCI avg từ pavement-condition rows
- Export: toolbar `/report/checkins/export` · perm `report.dashboard.read`
- Gates: tz_list_only · xco_na · share_cite · COUNT-03 no silent 0

## Inventory (slim)
| id | controlHint | GET / bind | notes |
|----|-------------|------------|-------|
| asOf | Date | from/to query | Xem=🔍 |
| tuan-duong.count | KPI | /report/patrol-road totalCount | soft-degrade |
| tuan-kiem.count | KPI | /report/patrol-inspect | soft-degrade |
| bao-lu.count | KPI | /report/disasters | live · COUNT-02 |
| tai-nan.count | KPI | /report/traffic-accidents | live |
| vi-pham.count | KPI | /report/row-violations | live |
| cong-viec.count | KPI | /report/maintenance-summary | live |
| inc-open.count | KPI | /incident/incidents?status=open | drill |
| coverage.count | KPI | — | GAP→0 |
| road-len.count | KPI | — | GAP→0 |
| pci.count | KPI | /report/pavement-condition avg | live |
| topIncidents | grid RO | incidents open pageSize=5 | live |
| map.markers | Map | same + lat/lng | Leaflet |
| checkins.export | toolbar | /report/checkins/export | toolbar only |

## Screens / zones (ids only)
- DES-DSH-HDR · FILTER · TB · KPI6 · KPI4 · TABS · PANEL · MAP · TOP · NAV · P2
- DES-RPT-A/C/F · formPattern=Full · LeaveConfirmModal
- mfeStdRoute=/bao-cao/dashboard · mfeStdUrl=http://localhost:9311/bao-cao/dashboard
- peerStdUrl=http://localhost:9311/bao-cao/nhat-ky-tuan-duong
- reviewUrl=file:///D:/AI-QLBD/Linm.RMMS.Data/specs/dashboard/ui/prototype/dashboard-prototype.html

## API / tasks (ids only)
- T-FE-DSH-01 · T-UI-FILTER-01 · T-UI-TB-01 · T-FE-COUNT-01 · T-FE-MAP-TOP-01 · T-BE-CITE-01 · T-QA-DSH-01
- Migration: none · next=/agent-team-lead

## UNCLEAR → owned
- (none P0) · Coverage formula / road-len asset = P2 GAP lock

## Full paths
- solution: D:/AI-QLBD/Linm.RMMS.Data/specs/dashboard/be/solution-discovery.md
- design: D:/AI-QLBD/Linm.RMMS.Data/specs/dashboard/ui/design.md
- real-data: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/dashboard-real-data.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/dashboard/STATUS.md
