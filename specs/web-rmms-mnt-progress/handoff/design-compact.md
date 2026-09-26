# Handoff compact — design

schemaVersion: 1
feature: web-rmms-mnt-progress
packKind: list
role: design
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-09-26T05:30:00.000Z
taskId: task_93aa1b29
contentHash: sha256:a7e3c91b4d2f6801e5a9b0c3d8f1472e6b5a0d9c4e1f2837a6b5c4d3e2f1098a
design_confirm: approve
autoApprove: ON
real_view_parity: v1
shared_grid_example: N/A

## Decisions
- changeScope: new_page
- formPattern: Mobile full/sheet · phone 430 · N/A ERP Modal/Slideout
- Grid AC Kind B / DES-GRID / LinErpListFilterBar: N/A phone form
- Report AC / DES-RPT: N/A
- mfe: D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile · mfeStdUrl http://localhost:9301/web-rmms-mnt-progress · productRoute /work/progress?id=
- be: D:/AI-QLBD/Linm.RMMS.WebService · Maintenance · Mobile.Bff :5202 · cấm ERP.*
- demo: N/A · hash skip · cấm rescan (GAP-DES-DEMO-RESCAN-01)
- WORK-P primary · entry peer WORK-L (web-rmms-work)
- GPS gate: cả submitProgress + submitComplete · deny disable · cấm fake · encode Note only
- MEDIA P1: photoLocalIds local preview · cấm MediaUrl Progress/Complete body
- LABEL: badge list chrome (Chờ xử lý/Đang xử lý/Đã hoàn thành/Đã hủy) · useFormOptions
- labels: useFormOptions() · cấm hardcode · cấm Me*
- open: (none) · GAP-MEDIA Signed → SA
- next: /agent-sa · roleOnly stop (GAP-PKT-ROLE-01)

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
- reviewUrl deny= …/index.html?deny=1
- peerStdUrl= http://localhost:9301/web-rmms-work
- prototype zone: #sc-mnt-progress
- real_view_parity= v1
- DES-GRID / LinErpListFilterBar: N/A phone

## API / tasks (ids only)
- FormMode↔API: GET {id} · POST progress · POST complete · GET init-data
- real-data §A+§B: PASS · T-*: T-W5-02 · devSlash=/agent-dev

## UNCLEAR
- (none open — GPS/MEDIA/LABEL closed by PO)
- GAP-MEDIA Signed: SA optional DTO later

## Full paths (Read only if needed)
- design: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-mnt-progress/ui/design.md
- prototype: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-mnt-progress/ui/prototype/index.html
- control-hint: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-mnt-progress-control-hint.md
- real-data: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-mnt-progress-real-data.md
- po: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-mnt-progress/po/requirement.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-mnt-progress/STATUS.md
