# Handoff compact — team_lead

schemaVersion: 1
feature: rpt-nhat-ky-tuan-duong
packKind: report
role: team_lead
status: done
skillVersion: 2026.08.15.5
workflowVersion: 2026.08.15.5
rulesVersion: 2026.08.15.8
writtenAt: 2026-09-18T17:55:00.000Z
taskId: task_8cbb2073
cr: nktd-pdf-20260917 · Wave B
contentHashPriorDataAnaly: sha256:c5bf1abeceee69764d8f365e1d599d92008faf28a01cb2a29c88520d8baa5703
autoApprove: ON
route_confirm: route_a
e2eQa: ON (queued `/agent-qa*` only)

## Decisions
- changeScope: edit_page · Kind E shell **giữ** · delta = load sổ + drill + SIGN
- formPattern: Full page report + Modal config/chart/export
- mfe: D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Report · mfeStdRoute=/bao-cao/nhat-ky-tuan-duong
- be: D:/AI-QLBD/Linm.RMMS.WebService · **giữ** GET api/v1/report/patrol-log-road (+/export) · **cấm** ERP.* / path mới
- source: csdl-so-02 · sourceFormReady=yes · empty=[] · **cấm** seed
- migration: none · report_export=export_yes · report_chart=socai
- Print bìa PDF: P2 · open Q: none
- route_confirm: route_a (**giữ** · URL không mới)

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| routeId | Tuyến | SearchInput | road-route share_a |
| staffId | Cán bộ | SearchInput | P1 |
| from/to | Kỳ | Date | tz_day EventAt |
| qSearch | Tìm | Input | q |
| grid | EventAt·Road·Staff·Km·LocationText·Weather·OnSite·RemarkSign→supervisorNote·Note·Status·BookNo | readonly | SRC/SIGN/LOC |
| toolbar | Refresh·Chart·Excel·In·Config | reportToolbar | filter 0 action |
| drill | /csdl-so-02 · hub resource+id | — | cấm ?kind= |

## Screens / zones (ids only)
- DES-RPT-A/C/F/CHART · S-RPT Full · S-CFG/CHART/EXPORT Modal · S-FORM OUT
- reviewUrl=file:///D:/AI-QLBD/Linm.RMMS.Data/specs/rpt-nhat-ky-tuan-duong/ui/prototype/rpt-nhat-ky-tuan-duong-prototype.html
- peerStdUrl=http://localhost:9311/bao-cao/nhat-ky-tuan-duong

## API / tasks (ids only)
- FormMode↔API: Xem→API-01 · Excel→API-02 · route→API-LKP-01
- T-BE-RPT-01 → T-BE-02 → T-UI-RPT-01 · TB-01 · CONFIG-01 · EXPORT-01 · CHART-01 · PRINT-01=P2 · T-FE-02 · T-HDSD-01 · T-PERM-01 · T-QA-RPT-01
- devSlash: /agent-dev (+ /erp-report-context · filter-bar-pipeline)
- GAP: SRC-01 · DRILL-01 · SIGN-01 · PRINT-01(P2)

## UNCLEAR
- none

## Full paths (Read only if needed)
- task: specs/rpt-nhat-ky-tuan-duong/task/rpt-nhat-ky-tuan-duong.md
- delta: specs/rpt-nhat-ky-tuan-duong/task/rpt-nhat-ky-tuan-duong-cr-pdf.md
- sa: specs/rpt-nhat-ky-tuan-duong/be/solution-discovery.md
- design: specs/rpt-nhat-ky-tuan-duong/ui/design.md
- control-hint: specs/_data-analy/features/rpt-nhat-ky-tuan-duong-control-hint.md
- real-data: specs/_data-analy/features/rpt-nhat-ky-tuan-duong-real-data.md
