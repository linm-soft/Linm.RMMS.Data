# Handoff compact — design

schemaVersion: 1
feature: web-rmms-mnt-progress
packKind: list
role: design
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-09-27T13:40:00.000Z
taskId: task_70abcc01
contentHash: sha256:544d007b5b40b3f3b71bb94aa78e804b2342af0c6eb7ec1edcea4b76b1b28080
design_confirm: approve
autoApprove: ON
real_view_parity: v1
shared_grid_example: N/A

## Decisions
- changeScope: edit_page · cấm new_page typed CRUD
- deltaCite: docs/plan/web-rmms-mobile/SUBMIT-VALIDATE.md (Pattern B)
- formPattern: Mobile full/sheet · phone 430 · N/A ERP Modal/Slideout
- Grid AC Kind B / DES-GRID / LinErpListFilterBar: N/A phone form
- Report AC / DES-RPT: N/A
- mfe: D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile · mfeStdUrl http://localhost:9301/cong-viec/tien-do · route /cong-viec/tien-do · cấm /web-rmms-mnt-progress
- productRoute: /work/progress?id=
- peerStdUrl: http://localhost:9301/cong-viec
- be: D:/AI-QLBD/Linm.RMMS.WebService · Maintenance · Mobile.Bff :5202 · cấm ERP.*
- demo: N/A · hash skip · cấm rescan (GAP-DES-DEMO-RESCAN-01)
- keep: baseline Live WORK-P · re-confirm Pattern B
- Delta: CTA disabled=saving only · GPS deny → banner on click · capture=environment · API/DTO unchanged
- GPS SUPERSEDED: disable-gate → Pattern B · cấm fake · embed Note · keys mnt.progress.gps.*
- MEDIA CLOSED-P1 + capture · LABEL list-chrome CLOSED
- open: (none) · GAP-MEDIA Signed defer P2 → SA
- next: /agent-sa · roleOnly stop (GAP-PKT-ROLE-01)

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| woCode/title/status/route/workType | header WO | Text/Badge RO | GET {id} |
| progressPercent | tiến độ % | Number/Slider | POST progress 0–100 |
| note | ghi chú | Text | + GPS summary |
| lat/lng/accuracyM | GPS | GPS | Note only · Pattern B on click |
| validationBanner | lỗi client | Banner | NEW · mnt.progress.gps.* |
| photoLocalIds | ảnh | FileMulti | +capture=environment · GAP media |
| submitProgress | cập nhật | Button | disabled=saving only |
| submitComplete | hoàn thành | Button | disabled=saving only |

## Screens / zones (ids only)
- WORK-P · WORK-P-GPS · (peer WORK-L entry)
- reviewUrl= file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-mnt-progress/ui/prototype/index.html
- reviewUrl deny= …/index.html?deny=1 (CTA enabled · banner on click)
- peerStdUrl= http://localhost:9301/cong-viec
- prototype zone: #sc-mnt-progress
- real_view_parity= v1
- DES-GRID / LinErpListFilterBar: N/A phone

## API / tasks (ids only)
- FormMode↔API: GET {id} · POST progress · POST complete · GET init-data · unchanged
- real-data §A+§B+§Delta: PASS
- T-EDIT-01 CTA · T-EDIT-02 banner · T-EDIT-03 capture · T-BE N/A · devSlash=/agent-dev

## UNCLEAR
- (none open — BANNER-COPY/GPS Pattern B/MEDIA/LABEL closed by PO)
- GAP-MEDIA Signed: SA optional DTO later · defer P2

## Full paths (Read only if needed)
- design: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-mnt-progress/ui/design.md
- prototype: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-mnt-progress/ui/prototype/index.html
- control-hint: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-mnt-progress-control-hint.md
- real-data: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-mnt-progress-real-data.md
- po: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-mnt-progress/po/requirement.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-mnt-progress/STATUS.md
