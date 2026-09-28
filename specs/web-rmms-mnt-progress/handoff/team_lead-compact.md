# Handoff compact — team_lead

schemaVersion: 1
feature: web-rmms-mnt-progress
packKind: list
role: team_lead
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-09-27T13:50:00.000Z
taskId: task_b1a6e7b8
contentHash: sha256:544d007b5b40b3f3b71bb94aa78e804b2342af0c6eb7ec1edcea4b76b1b28080
team_lead_confirm: approve
autoApprove: ON
changeScope: edit_page
route_confirm: confirm
e2eQa: ON (queued /agent-qa*)

## Decisions
- changeScope: edit_page · cấm new_page typed CRUD
- deltaCite: docs/plan/web-rmms-mobile/SUBMIT-VALIDATE.md (Pattern B)
- formPattern: Mobile full/sheet WORK-P · phone ≤430 · #sc-mnt-progress · N/A ERP Modal · N/A DES-GRID
- mfe: D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile · mfeStdRoute=/cong-viec/tien-do · mfeStdUrl http://localhost:9301/cong-viec/tien-do · cấm /web-rmms-mnt-progress
- productRoute: /work/progress?id= · peerStdUrl http://localhost:9301/cong-viec
- be: Mobile.Bff :5202 · Maintenance work-orders · cấm ERP.* · cấm invent · Step 4b skip · T-BE N/A
- Delta: CTA disabled=saving only · GPS deny→banner on click · keys mnt.progress.gps.* · capture=environment · API/DTO keep
- GPS SUPERSEDED: disable-gate → Pattern B · cấm fake · embed Note · cấm lat body
- MEDIA CLOSED-P1 + capture · GAP-MEDIA Signed defer P2 · LABEL list-chrome CLOSED
- T-01…T-05 done (baseline) · T-EDIT-01 CTA · T-EDIT-02 banner · T-EDIT-03 capture · T-QA queued · T-REV pending
- next: /agent-dev · roleOnly stop (GAP-PKT-ROLE-01) · e2eQa queued QA · BE align skip

## Inventory (slim)
| id | controlHint | T-* |
|----|-------------|-----|
| woCode/title/status/route/workType | Text/Badge RO | keep done |
| progressPercent | Number/Slider | keep |
| note | Text | keep · GPS summary |
| lat/lng/accuracyM | GPS | T-EDIT-01 · T-EDIT-02 |
| validationBanner | Banner | T-EDIT-02 |
| photoLocalIds | FileMulti | T-EDIT-03 |
| submitProgress | Button | T-EDIT-01 · T-EDIT-02 |
| submitComplete | Button | T-EDIT-01 · T-EDIT-02 |

## Screens / zones
- WORK-P · WORK-P-GPS · (peer WORK-L)
- reviewUrl= file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-mnt-progress/ui/prototype/index.html
- reviewUrl deny= …/index.html?deny=1
- prototype zone: #sc-mnt-progress
- DES-GRID / LinErpListFilterBar: N/A

## API / tasks
- FormMode↔API: GET {id} · POST progress · POST complete · GET init-data · unchanged
- Body: Progress {ProgressPercent,Note?} · Complete {Note?} · GPS→Note
- T-EDIT-01…03 pending · T-BE N/A · T-QA queued · devSlash=/agent-dev

## UNCLEAR
- (none blocking) · GAP-MEDIA Signed defer P2

## Full paths
- task: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-mnt-progress/task/web-rmms-mnt-progress.md
- sa: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-mnt-progress/be/solution-discovery.md
- design: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-mnt-progress/ui/design.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-mnt-progress/STATUS.md
