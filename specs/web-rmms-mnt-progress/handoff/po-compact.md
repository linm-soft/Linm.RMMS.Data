# Handoff compact — po

schemaVersion: 1
feature: web-rmms-mnt-progress
packKind: list
role: po
status: confirmed
skillVersion: 2026.09.05.03
writtenAt: 2026-09-25T22:30:00.000Z
contentHash: sha256:a7e3c91b4d2f6801e5a9b0c3d8f1472e6b5a0d9c4e1f2837a6b5c4d3e2f1098a

## Decisions
- changeScope: new_page
- formPattern: Mobile full / sheet · phone max-width 430 · N/A ERP Modal/Slideout
- mfe: D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile · mfeStdUrl http://localhost:9301/web-rmms-mnt-progress
- productRoute: /work/progress
- be: D:/AI-QLBD/Linm.RMMS.WebService · Maintenance WorkOrder · cấm ERP.*
- bff: Linm.RMMS.Mobile.Bff · mobile-bff/api/v1 :5202 · cấm FE web-bff
- demo: N/A · cấm re-scan
- DES-GRID / LinErpListFilterBar: N/A phone form
- GPS gate CLOSED: bắt buộc cả submitProgress + submitComplete · deny → disable · cấm fake
- MEDIA CLOSED-P1: camera local preview optional · cấm MediaUrl trên Progress/Complete body
- LABEL-MAP CLOSED: badge = list chrome (Chờ xử lý / Đang xử lý / Đã hoàn thành / Đã hủy) · useFormOptions · cấm hardcode
- persona: Tuần đường (BDTX) · Tuần kiểm (Khu/VP)
- out: WORK-G/C · Me* · feedback · cam-view · journal/kết ca · list/create WO · invent controller

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| woCode/title/status/route/workType | header WO | Text/Badge RO | GET {id} · status=list chrome |
| progressPercent | tiến độ % | Number/Slider | POST progress 0–100 |
| note | ghi chú | Text | + GPS summary |
| lat/lng/accuracyM | GPS | GPS | Note only · gate both buttons |
| photoLocalIds | ảnh | FileMulti | local only · GAP media |
| submitProgress | cập nhật | Button | POST …/progress · GPS required |
| submitComplete | hoàn thành | Button | POST …/complete · GPS required |

## Screens / zones (ids only)
- WORK-P · entry peer WORK-L (web-rmms-work)
- reviewUrl= (Design)
- peerStdUrl= http://localhost:9301/web-rmms-work
- DES-GRID: N/A

## API / tasks (ids only)
- FormMode↔API: prefill GET · progress POST · complete POST · init-data GET
- real-data §A+§B: PASS (analy)
- T-*: (team_lead)

## UNCLEAR
- (none open — GPS/MEDIA/LABEL closed by PO)

## Full paths (Read only if needed)
- requirement: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-mnt-progress/po/requirement.md
- control-hint: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-mnt-progress-control-hint.md
- real-data: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-mnt-progress-real-data.md
- context: D:/AI-QLBD/Linm.RMMS.Data/docs/context/features/web-rmms-mnt-progress.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-mnt-progress/STATUS.md
