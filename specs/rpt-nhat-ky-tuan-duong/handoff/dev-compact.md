# Handoff compact — dev

schemaVersion: 1
feature: rpt-nhat-ky-tuan-duong
packKind: report
role: dev
status: done
skillVersion: 2026.08.15.5
workflowVersion: 2026.08.15.5
rulesVersion: 2026.08.15.8
writtenAt: 2026-09-18T18:40:00.000Z
taskId: task_0d18fcc7
cr: nktd-pdf-20260917 · Wave B
contentHashPriorDataAnaly: sha256:c5bf1abeceee69764d8f365e1d599d92008faf28a01cb2a29c88520d8baa5703
autoApprove: ON
route_confirm: route_a
e2eQa: ON (queued `/agent-qa*` only)

## Decisions
- changeScope: edit_page · Kind E shell **giữ** · delta = load sổ + drill + SIGN + HDSD
- formPattern: Full page report + Modal config/chart/export
- mfe: D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Report · mfeStdRoute=/bao-cao/nhat-ky-tuan-duong
- mfeStdUrl: http://localhost:9311/bao-cao/nhat-ky-tuan-duong
- be: D:/AI-QLBD/Linm.RMMS.WebService · **giữ** GET api/v1/report/patrol-log-road (+/export) · **cấm** ERP.* / path mới
- source: csdl-so-02 · empty=[] · **cấm** seed/check-in fallback
- migration: none · Step 4b skip · BFF Forward reuse
- build: MFE yarn typecheck+build **PASS** · BE dotnet build Api **PASS**
- Print bìa PDF: P2 debt · open Q: none

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| routeId | Tuyến | SearchInput | org filter / road-route |
| staffId | Cán bộ | SearchInput | P1 |
| from/to | Kỳ | Date | tz_day EventAt |
| qSearch | Tìm | Input | q |
| grid | EventAt·Road·Staff·Km·LocationText·Weather·OnSite·RemarkSign→supervisorNote·Note·Status·BookNo | readonly | SRC/SIGN/LOC |
| toolbar | Refresh·Chart·Excel·In·Config | reportToolbar | filter 0 action |
| drill | /csdl-so-02?form=view&id= | — | cấm ?kind= |

## Screens / zones (ids only)
- DES-RPT-A/C/F/CHART · S-RPT Full · S-CFG/CHART/EXPORT Modal · S-FORM OUT
- peerStdUrl=http://localhost:9311/bao-cao/nhat-ky-tuan-duong

## API / tasks (ids only)
- FormMode↔API: Xem→API-01 · Excel→API-02 · route→API-LKP-01
- T-BE-RPT-01 · T-BE-02 · T-FE-02 · T-HDSD-01 · T-UI-RPT-* **PASS** · PRINT-01=P2
- GAP closed: SRC-01 · DRILL-01 · SIGN-01 · PRINT-01(P2 debt)

## UNCLEAR
- none

## Full paths (Read only if needed)
- implement: specs/rpt-nhat-ky-tuan-duong/implement/rpt-nhat-ky-tuan-duong.md
- task delta: specs/rpt-nhat-ky-tuan-duong/task/rpt-nhat-ky-tuan-duong-cr-pdf.md
- sa: specs/rpt-nhat-ky-tuan-duong/be/solution-discovery.md
