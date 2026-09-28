# Handoff compact — sa

schemaVersion: 1
feature: web-rmms-mnt-progress
packKind: list
role: sa
status: confirmed
skillVersion: 2026.09.05.03
writtenAt: 2026-09-27T13:45:00.000Z
contentHash: sha256:544d007b5b40b3f3b71bb94aa78e804b2342af0c6eb7ec1edcea4b76b1b28080
taskId: task_836fa863
solution_confirm: approve
autoApprove: ON

## Decisions
- changeScope: edit_page · cấm new_page typed CRUD
- deltaCite: docs/plan/web-rmms-mobile/SUBMIT-VALIDATE.md (Pattern B)
- formPattern: Mobile full/sheet · phone 430 · N/A ERP Modal/Slideout · N/A DES-GRID/filter/Excel
- mfe: D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile · mfeStdUrl http://localhost:9301/cong-viec/tien-do · route /cong-viec/tien-do · cấm /web-rmms-mnt-progress
- productRoute: /work/progress?id=
- peerStdUrl: http://localhost:9301/cong-viec
- be: D:/AI-QLBD/Linm.RMMS.WebService · Maintenance work-orders · cấm ERP.*
- bff: Linm.RMMS.Mobile.Bff · mobileApiBase()/VITE_MOBILE_API_URL :5202 · cấm FE web-bff
- demo: N/A · hash-skip · cấm re-scan
- Domain: Maintenance · reuse WorkOrdersController · no new controller/entity/DTO/migration · T-BE N/A · Step 4b skip
- FormMode↔API: GET {id} · GET init-data · POST progress · POST complete — **unchanged Live**
- DTO: ProgressWorkOrderRequest {ProgressPercent,Note?} · CompleteWorkOrderRequest {Note?} · cấm lat/lng/MediaUrl body
- Delta SUPERSEDED: CTA disabled=saving only · GPS deny→banner on click · capture=environment · API/DTO keep
- GPS: embed Note · Pattern B · keys mnt.progress.gps.* · cấm fake · cấm CTA GPS pre-lock
- MEDIA CLOSED-P1 + capture · GAP-MEDIA Signed defer P2
- LABEL list-chrome CLOSED · useFormOptions
- out: list/log/chat/estimate · Me* · journal/kết ca · Excel · invent · web-bff · Write MFE at SA
- next: /agent-team-lead · roleOnly stop (GAP-PKT-ROLE-01)
- align last (later): /align-mobile-to-mfe · no android/ios proto · no new tab/route/icon

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| woCode/title/status/route/workType | header WO | Text/Badge RO | GET {id} |
| progressPercent | tiến độ % | Number/Slider | POST progress |
| note | ghi chú | Text | + GPS summary |
| lat/lng/accuracyM | GPS | GPS | Note only · Pattern B |
| validationBanner | lỗi client | Banner | NEW · mnt.progress.gps.* |
| photoLocalIds | ảnh | FileMulti | +capture · GAP media |
| submitProgress | cập nhật | Button | disabled=saving only |
| submitComplete | hoàn thành | Button | disabled=saving only |

## Screens / zones (ids only)
- WORK-P · WORK-P-GPS · (peer WORK-L)
- reviewUrl= file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-mnt-progress/ui/prototype/index.html
- prototype zone: #sc-mnt-progress
- DES-GRID / LinErpListFilterBar: N/A phone

## API / tasks (ids only)
- FormMode↔API: GET {id} · POST progress · POST complete · GET init-data · unchanged
- real-data §A+§B+§Delta: PASS
- T-EDIT-01 CTA · T-EDIT-02 banner · T-EDIT-03 capture · T-BE N/A · T-QA queued
- migration/entity/Step4b: none · skip

## UNCLEAR
- (none open)
- GAP-MEDIA Signed: defer P2 · optional DTO later · cấm invent P1

## Full paths (Read only if needed)
- solution: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-mnt-progress/be/solution-discovery.md
- design: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-mnt-progress/ui/design.md
- po: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-mnt-progress/po/requirement.md
- control-hint: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-mnt-progress-control-hint.md
- real-data: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-mnt-progress-real-data.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-mnt-progress/STATUS.md
