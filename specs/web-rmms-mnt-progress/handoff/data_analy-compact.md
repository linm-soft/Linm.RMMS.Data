# Handoff compact — data_analy

schemaVersion: 1
feature: web-rmms-mnt-progress
packKind: list
role: data_analy
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-09-25T22:23:32.489Z
contentHash: sha256:a7e3c91b4d2f6801e5a9b0c3d8f1472e6b5a0d9c4e1f2837a6b5c4d3e2f1098a

## Decisions
- changeScope: new_page
- formPattern: Mobile full / sheet (phone max-width 430) · N/A ERP Modal/Slideout
- mfe: D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile · mfeStdUrl http://localhost:9301/web-rmms-mnt-progress
- productRoute: /work/progress
- be: D:/AI-QLBD/Linm.RMMS.WebService · Maintenance WorkOrder · cấm ERP.*
- bff: Linm.RMMS.Mobile.Bff · mobile-bff/api/v1 :5202 · cấm FE web-bff · cấm Route mobile-bff trên web-bff controllers
- demo: N/A
- Live: GET work-orders/{id} · POST …/progress · POST …/complete · init-data
- GPS: navigator.geolocation → Note (GAP-MOB-MNT-PROG-GPS-01) · deny blocks nút cần tọa độ · cấm fake
- media: GAP-MOB-MNT-PROG-MEDIA-01 · Progress body không MediaUrl
- labels: useFormOptions() · cấm hardcode VN form
- out: list/log/chat/estimate · Me* · feedback · cam-view · journal/kết ca (web-rmms-mobile-b…e)
- persona: Tuần đường (BDTX) · Tuần kiểm (Khu/VP) — Work tab dùng chung
- open questions: UNCLEAR-GPS-GATE · UNCLEAR-MEDIA · UNCLEAR-LABEL-MAP (PO/Design/SA)

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| woCode/title/status/route/workType | header WO | Text/Badge RO | GET {id} |
| progressPercent | tiến độ % | Number/Slider | POST progress 0–100 |
| note | ghi chú | Text | + GPS summary |
| lat/lng/accuracyM | GPS | GPS | Note only · no body field |
| photoLocalIds | ảnh | FileMulti | GAP media |
| submitProgress | cập nhật | Button | POST …/progress |
| submitComplete | hoàn thành | Button | POST …/complete |

## Screens / zones (ids only)
- WORK-P · entry peer WORK-L (web-rmms-work)
- reviewUrl= (Design)
- peerStdUrl= http://localhost:9301/web-rmms-work
- DES-GRID / LinErpListFilterBar: N/A phone form

## API / tasks (ids only)
- FormMode↔API: prefill GET · progress POST · complete POST · init-data GET
- real-data §A+§B: PASS
- T-*: (team_lead)

## UNCLEAR
- UNCLEAR-GPS-GATE: which button requires GPS
- UNCLEAR-MEDIA: MediaUrl on Progress — SA Signed
- UNCLEAR-LABEL-MAP: init-data vs list chrome status VN

## Full paths (Read only if needed)
- control-hint: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-mnt-progress-control-hint.md
- real-data: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-mnt-progress-real-data.md
- context: D:/AI-QLBD/Linm.RMMS.Data/docs/context/features/web-rmms-mnt-progress.md
- screens: D:/AI-QLBD/Linm.RMMS.Data/docs/plan/web-rmms-mobile/SCREENS.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-mnt-progress/STATUS.md
