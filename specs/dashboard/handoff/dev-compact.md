# Handoff compact — dev

schemaVersion: 1
feature: dashboard
packKind: dashboard
role: dev
status: done
skillVersion: 2026.09.05.03
workflowVersion: 2026.09.05.03
rulesVersion: 2026.09.17.2
writtenAt: 2026-09-17T17:20:00.000Z
taskId: task_9f189622
contentHashPriorDataAnaly: sha256:0c1488357ccf88e8934c3fcb9a7925cc21aa9ae46624263ad2355a7597468b7f
autoApprove: ON
e2eQa: ON (queued `/agent-qa*` only)

## Decisions
- changeScope: new_page · Kind E KPI hub · report_standard v1 · chart_none
- formPattern: Full · LeaveConfirmModal dirty asOf
- mfe: D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Report · route `/bao-cao/dashboard`
- be: cite Report+Incident BFF · **0** new API · Step 4b skip · **cấm** ERP.* / api/v1/dashboard/*
- build: MFE yarn build PASS · BE dotnet build PASS
- open questions: none P0 · map lat/lng soft-empty · COV/ROADLEN lock 0

## Inventory (slim)
| id | controlHint | notes |
|----|-------------|-------|
| asOf | Date | filter · Xem=🔍 |
| *.count | KPI | live totalCount · GAP→0+toast |
| topIncidents | grid RO | /incident open pageSize=5 |
| map.markers | Map | Leaflet OSM |
| checkins.export | toolbar | /report/checkins/export |

## Screens / zones (ids only)
- DES-DSH-HDR · FILTER · TB · KPI6 · KPI4 · TABS · PANEL · MAP · TOP · NAV
- DES-RPT-A/C/F · chart N/A
- mfeStdUrl=http://localhost:9311/bao-cao/dashboard
- peerStdUrl=http://localhost:9311/bao-cao/nhat-ky-tuan-duong

## API / tasks (ids only)
- T-UI-DASH-01 · RPT-01 · LEAVE-01 · RPT-TB/EXPORT/CONFIG · DASH-COUNT · DASH-MAP · UX/RESP · BE-DASH · PERM — done
- T-UI-RPT-CHART-01=skip · T-QA-DASH-01=pending QA
- APIs: report/patrol-road|inspect|disasters|traffic-accidents|row-violations|maintenance-summary|pavement-condition|checkins/export · incident/incidents?status=open
- debt: marker geo optional · panel tree P2 · patrol soft-degrade
- next=/agent-qa*

## UNCLEAR
- none P0

## Full paths
- implement: D:/AI-QLBD/Linm.RMMS.Data/specs/dashboard/implement/dashboard.md
- task: D:/AI-QLBD/Linm.RMMS.Data/specs/dashboard/task/dashboard.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/dashboard/STATUS.md
