# Handoff compact — sa

schemaVersion: 1
feature: web-rmms-mnt-progress
packKind: list
role: sa
status: confirmed
skillVersion: 2026.09.05.03
writtenAt: 2026-09-26T05:35:00.000Z
taskId: task_401f070c
contentHash: sha256:a7e3c91b4d2f6801e5a9b0c3d8f1472e6b5a0d9c4e1f2837a6b5c4d3e2f1098a
solution_confirm: approve
autoApprove: ON

## Decisions
- changeScope: new_page · formPattern: Mobile full/sheet · phone ≤430 · N/A ERP Modal · DES-GRID N/A
- domain: Maintenance (`maintenance`) · Live work-orders · DOMAIN-MAP row `web-rmms-mnt-progress` applied
- mfeStdRoute: /web-rmms-mnt-progress · mfeStdUrl http://localhost:9301/web-rmms-mnt-progress · productRoute /work/progress?id=
- BFF: Mobile.Bff :5202 · mobile-bff/api/v1 · **cấm** web-bff · **cấm** ERP.* · **cấm** invent ProgressController
- FormMode↔API: GET {id} · POST progress · POST complete · GET init-data
- Body: Progress `{ ProgressPercent, Note? }` · Complete `{ Note? }` · GPS→Note only · **cấm** lat/media body
- GPS gate: both CTAs · deny disable · **cấm** fake
- MEDIA P1 local · GAP-MEDIA Signed defer P2
- API Mới / entity / migration / Step 4b: **none** at SA
- labels: useFormOptions · list chrome badge · demo N/A · **cấm** Me*
- Out: WORK-G/C · Me* · invent path · web-bff · native edits
- next: /agent-team-lead · roleOnly stop (GAP-PKT-ROLE-01)

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| woCode/title/status/route/workType | header WO | Text/Badge RO | GET {id} |
| progressPercent | tiến độ % | Number/Slider | POST progress 0–100 |
| note | ghi chú | Text | + GPS summary |
| lat/lng/accuracyM | GPS | GPS | Note only · gate both CTAs |
| photoLocalIds | ảnh | FileMulti | local only · GAP media |
| submitProgress | cập nhật | Button | POST …/progress · GPS * |
| submitComplete | hoàn thành | Button | POST …/complete · GPS * |

## Screens / zones (ids only)
- WORK-P · WORK-P-GPS · (peer WORK-L entry)
- reviewUrl= file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-mnt-progress/ui/prototype/index.html
- peerStdUrl= http://localhost:9301/web-rmms-work
- prototype zone: #sc-mnt-progress
- DES-GRID / LinErpListFilterBar: N/A

## API / tasks (ids only)
- FormMode↔API: GET/progress/complete/init-data maintenance/work-orders
- DOMAIN-MAP: applied · GAP-MEDIA: defer P2
- T-*: T-W5-02 · devSlash=/agent-dev

## UNCLEAR
- (none open — GPS/MEDIA-P1/LABEL closed · GAP-MEDIA Signed defer P2)

## Full paths (Read only if needed)
- solution: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-mnt-progress/be/solution-discovery.md
- design compact: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-mnt-progress/handoff/design-compact.md
- real-data: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-mnt-progress-real-data.md
- DOMAIN-MAP: D:/AI-QLBD/Linm.RMMS.WebService/docs/DOMAIN-MAP.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-mnt-progress/STATUS.md
