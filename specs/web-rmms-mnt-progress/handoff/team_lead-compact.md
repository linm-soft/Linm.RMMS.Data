# Handoff compact — team_lead

schemaVersion: 1
feature: web-rmms-mnt-progress
packKind: list
role: team_lead
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-09-26T05:40:00.000Z
taskId: task_4b78e867
contentHash: sha256:a7e3c91b4d2f6801e5a9b0c3d8f1472e6b5a0d9c4e1f2837a6b5c4d3e2f1098a
team_lead_confirm: approve
autoApprove: ON
changeScope: new_page
route_confirm: confirm
e2eQa: ON (queued /agent-qa*)

## Decisions
- formPattern: Mobile full/sheet WORK-P · phone ≤430 · Android 1-1 #sc-mnt-progress · N/A ERP Modal · useFormOptions
- mfe: Linm.Web.RMMS.Mobile · mfeStdRoute=/web-rmms-mnt-progress · mfeStdUrl http://localhost:9301/web-rmms-mnt-progress · product /work/progress?id= · entry peer WORK-L
- be: Mobile.Bff :5202 mobile-bff/api/v1 · Maintenance work-orders · cấm ERP.* · cấm invent Progress · Step 4b skip
- GPS: both CTAs required · deny disable · cấm fake · GPS→Note only · cấm lat body
- MEDIA P1 local · GAP-MEDIA Signed defer P2 · LABEL list chrome · cấm Me*/web-bff
- T-01 route+shell · T-02 header GET{id} · T-03 %/note/photo · T-04 GPS gate · T-05 BFF+POST+parity · T-BE N/A · T-QA queued
- cite T-W5-02 · AC-P-01…09 · demo N/A · DES-GRID N/A
- next: /agent-dev · roleOnly stop (GAP-PKT-ROLE-01) · e2eQa queued QA

## Inventory (slim)
| id | controlHint | T-* |
|----|-------------|-----|
| woCode/title/status/route/workType | Text/Badge RO | T-02 |
| progressPercent | Number/Slider | T-03 · T-05 |
| note | Text | T-03 · T-04 |
| lat/lng/accuracyM | GPS | T-04 |
| photoLocalIds | FileMulti | T-03 |
| submitProgress | Button | T-04 · T-05 |
| submitComplete | Button | T-04 · T-05 |

## Screens / zones
- WORK-P · WORK-P-GPS · (peer WORK-L entry)
- reviewUrl= file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-mnt-progress/ui/prototype/index.html
- peerStdUrl= http://localhost:9301/web-rmms-work
- prototype zone: #sc-mnt-progress
- DES-GRID / LinErpListFilterBar: N/A

## API / tasks
- FormMode↔API: GET {id} · POST progress · POST complete · GET init-data
- Body: Progress {ProgressPercent,Note?} · Complete {Note?} · GPS→Note
- T-01…T-05 pending · T-BE N/A · T-QA queued · devSlash=/agent-dev

## UNCLEAR
- (none blocking) · GAP-MEDIA Signed defer P2

## Full paths
- task: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-mnt-progress/task/web-rmms-mnt-progress.md
- sa: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-mnt-progress/be/solution-discovery.md
- design: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-mnt-progress/ui/design.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-mnt-progress/STATUS.md
