# Handoff compact — po

schemaVersion: 1
feature: web-rmms-mnt-progress
packKind: list
role: po
status: confirmed
skillVersion: 2026.09.05.03
writtenAt: 2026-09-27T20:34:02.663Z
contentHash: sha256:544d007b5b40b3f3b71bb94aa78e804b2342af0c6eb7ec1edcea4b76b1b28080
taskId: task_41245e40

## Decisions
- changeScope: edit_page · cấm new_page typed CRUD
- deltaCite: docs/plan/web-rmms-mobile/SUBMIT-VALIDATE.md (Pattern B)
- formPattern: Mobile full/sheet · phone 430 · N/A ERP Modal/Slideout · N/A DES-GRID/filter/Excel
- mfe: D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile · mfeStdUrl http://localhost:9301/cong-viec/tien-do · route /cong-viec/tien-do · cấm /web-rmms-mnt-progress
- productRoute: /work/progress
- be: D:/AI-QLBD/Linm.RMMS.WebService · Maintenance WorkOrder · cấm ERP.*
- bff: Linm.RMMS.Mobile.Bff · mobileApiBase()/VITE_MOBILE_API_URL :5202 · cấm FE web-bff
- demo: N/A · hash-skip · cấm re-scan
- keep: baseline Live + Design prototype/reviewUrl · pipeline re-confirm
- Delta: CTA disabled=saving only · GPS deny → banner on click · capture=environment · API/DTO unchanged
- GPS SUPERSEDED: prior disable-gate → Pattern B (banner) · cấm fake · embed Note
- BANNER-COPY CLOSED: reuse mnt.progress.gps.* (deny/required/unavailable)
- MEDIA CLOSED-P1 keep · LABEL list-chrome CLOSED keep
- out: list/log/chat/estimate · Me* · journal/kết ca · Excel · invent · web-bff
- align last (later): /align-mobile-to-mfe · no android/ios proto · no new tab/route/icon

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| woCode/title/status/route/workType | header WO | Text/Badge RO | GET {id} · list chrome |
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
- T-EDIT-01 CTA · T-EDIT-02 banner · T-EDIT-03 capture · T-BE N/A · T-QA queued

## UNCLEAR
- (none open — BANNER-COPY/GPS Pattern B/MEDIA/LABEL closed)

## Full paths (Read only if needed)
- requirement: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-mnt-progress/po/requirement.md
- control-hint: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-mnt-progress-control-hint.md
- real-data: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-mnt-progress-real-data.md
- context: D:/AI-QLBD/Linm.RMMS.Data/docs/context/features/web-rmms-mnt-progress.md
- deltaCite: D:/AI-QLBD/Linm.RMMS.Data/docs/plan/web-rmms-mobile/SUBMIT-VALIDATE.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-mnt-progress/STATUS.md
