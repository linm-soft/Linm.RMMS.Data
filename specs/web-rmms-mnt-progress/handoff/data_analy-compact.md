# Handoff compact — data_analy

schemaVersion: 1
feature: web-rmms-mnt-progress
packKind: list
role: data_analy
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-09-27T13:30:10.000Z
contentHash: sha256:544d007b5b40b3f3b71bb94aa78e804b2342af0c6eb7ec1edcea4b76b1b28080
taskId: task_f99adc72

## Decisions
- changeScope: edit_page · NEW task · cấm new_page typed CRUD
- deltaCite: docs/plan/web-rmms-mobile/SUBMIT-VALIDATE.md (Pattern B)
- formPattern: Mobile full/sheet · phone 430 · N/A ERP Modal/Slideout · N/A DES-GRID/filter/Excel
- mfe: D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile · mfeStdUrl http://localhost:9301/cong-viec/tien-do · route /cong-viec/tien-do · cấm /web-rmms-mnt-progress
- productRoute: /work/progress
- be: D:/AI-QLBD/Linm.RMMS.WebService · Maintenance WorkOrder · cấm ERP.*
- bff: Linm.RMMS.Mobile.Bff · mobileApiBase()/VITE_MOBILE_API_URL :5202 · cấm FE web-bff
- demo: N/A
- keep: existing PO/Design artifacts · pipeline re-confirm
- Delta: bỏ disabled={ctasDisabled} GPS pre-lock → chỉ saving · GPS deny báo lúc bấm (banner) · file +capture=environment · API/DTO không đổi
- Live: GET work-orders/{id} · POST …/progress · POST …/complete · init-data
- GPS: embed Note · cấm fake · cấm lat body
- media: local + capture · GAP MediaUrl body
- labels: useFormOptions · list chrome badge (PO CLOSED)
- out: list/log/chat/estimate · Me* · journal/kết ca · Excel · invent controller · user/route SearchInput N/A
- align last (later roles): /align-mobile-to-mfe · no android/ios proto · no new tab/route/icon

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| woCode/title/status/route/workType | header WO | Text/Badge RO | GET {id} · keep |
| progressPercent | tiến độ % | Number/Slider | POST progress · keep |
| note | ghi chú | Text | + GPS summary · keep |
| lat/lng/accuracyM | GPS | GPS | Note only · Pattern B on click |
| validationBanner | lỗi client | Banner | NEW Pattern B |
| photoLocalIds | ảnh | FileMulti | +capture=environment |
| submitProgress | cập nhật | Button | disabled=saving only |
| submitComplete | hoàn thành | Button | disabled=saving only |

## Screens / zones (ids only)
- WORK-P · entry peer WORK-L (web-rmms-work)
- reviewUrl= file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-mnt-progress/ui/prototype/index.html (keep)
- peerStdUrl= http://localhost:9301/cong-viec
- DES-GRID / LinErpListFilterBar / Excel: N/A

## API / tasks (ids only)
- FormMode↔API: unchanged Live paths
- real-data §A+§B+§Delta: PASS
- T-*: team_lead (edit tasks for Pattern B + capture)

## UNCLEAR
- UNCLEAR-BANNER-COPY: GPS/required banner messages — PO reuse mnt.progress.gps.*

## Full paths (Read only if needed)
- control-hint: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-mnt-progress-control-hint.md
- real-data: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-mnt-progress-real-data.md
- context: D:/AI-QLBD/Linm.RMMS.Data/docs/context/features/web-rmms-mnt-progress.md
- deltaCite: D:/AI-QLBD/Linm.RMMS.Data/docs/plan/web-rmms-mobile/SUBMIT-VALIDATE.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-mnt-progress/STATUS.md
