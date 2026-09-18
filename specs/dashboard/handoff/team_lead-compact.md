# Handoff compact — team_lead

schemaVersion: 1
feature: dashboard
packKind: dashboard
role: team_lead
status: done
skillVersion: 2026.09.05.03
workflowVersion: 2026.09.05.03
rulesVersion: 2026.09.17.2
writtenAt: 2026-09-17T17:10:00.000Z
taskId: task_1533257e
contentHashPriorDataAnaly: sha256:0c1488357ccf88e8934c3fcb9a7925cc21aa9ae46624263ad2355a7597468b7f
autoApprove: ON
route_confirm: route_a
e2eQa: ON (queued `/agent-qa*` only)

## Decisions
- changeScope: new_page · Kind E KPI hub Full page · report_standard v1
- formPattern: Full · chart_none P1 · export_yes (check-in toolbar)
- mfe: D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Report · mfeStdRoute=/bao-cao/dashboard
- be: D:/AI-QLBD/Linm.RMMS.WebService · DOMAIN-MAP Report + Incident read · **cấm** ERP.* · **cấm** api/v1/dashboard/*
- migration: none · Step 4b skip
- GAP lock: COV/ROADLEN → 0+toast · patrol soft-degrade
- open questions: none P0 (P2 chart/SignalR/budget/formula)

## Inventory (slim)
| id | controlHint | notes |
|----|-------------|-------|
| asOf | Date | filter · Xem=🔍 · LeaveModal |
| *.count KPI | KPI | live totalCount · GAP tiles 0 |
| topIncidents | grid RO | pageSize=5 |
| map.markers | Map | Leaflet |
| checkins.export | toolbar | /report/checkins/export |

## Screens / zones (ids only)
- DES-DSH-HDR · FILTER · TB · KPI6 · KPI4 · TABS · PANEL · MAP · TOP · NAV · P2
- DES-RPT-A/C/F · chart N/A
- reviewUrl=file:///D:/AI-QLBD/Linm.RMMS.Data/specs/dashboard/ui/prototype/dashboard-prototype.html
- peerStdUrl=http://localhost:9311/bao-cao/nhat-ky-tuan-duong
- mfeStdUrl=http://localhost:9311/bao-cao/dashboard

## API / tasks (ids only)
- FormMode: Read/Xem only · asOf→from/to · reuse ReportQuery + Incidents
- T-UI-DASH-01 · T-UI-RPT-01 · T-UI-LEAVE-01 · T-UI-RPT-TB-01 · T-UI-RPT-EXPORT-01 · T-UI-RPT-CONFIG-01 · T-UI-RPT-CHART-01=skip · T-UI-DASH-COUNT-01 · T-UI-DASH-MAP-01 · T-UI-UX-01 · T-UI-RESP-01 · T-BE-DASH-01 · T-PERM-01 · T-QA-DASH-01
- devSlash: `/agent-dev` (+ `/erp-report-context` · `/filter-bar-context` · `/dev-web-responsive` · `/dev-ui-review` · `/implement-show-leave-confirm`) · QA=`/agent-qa*`
- deps: BE-cite ∥ shell → filter/TB → count → map → UX/RESP → QA
- next=/agent-dev

## UNCLEAR
- none P0

## Full paths
- task: D:/AI-QLBD/Linm.RMMS.Data/specs/dashboard/task/dashboard.md
- sa: D:/AI-QLBD/Linm.RMMS.Data/specs/dashboard/be/solution-discovery.md
- design: D:/AI-QLBD/Linm.RMMS.Data/specs/dashboard/ui/design.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/dashboard/STATUS.md
