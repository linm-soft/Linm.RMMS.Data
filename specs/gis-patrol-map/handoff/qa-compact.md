# Handoff compact — qa

schemaVersion: 1
feature: gis-patrol-map
packKind: map
role: qa
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-09-12T06:52:00.000Z
taskId: task_e57e18ab
contentHash: sha256:e1d043dbf402977a2d0e888df1d32d0e542b2792b22076e2dc5fc482e8a7c287
changeScope: edit_page
formPattern: Full page + MapPopup Modal
formType: map
e2eQa: PASS
autoApprove: ON

## Decisions
- changeScope: edit_page
- mfe: D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Gis · mfeStdUrl=`http://localhost:9301/gis-patrol-map` · live=`/gis/tuan-duong`
- be: D:/AI-QLBD/Linm.RMMS.WebService · docker up · migration=none
- E2E S0/S1/QA-20 PASS · screens PNG + manifest ok
- Fixes during QA: mapCheckInPin click types · route alias `gis-patrol-map`
- Playwright CDN install treo → capture Chrome channel (không kill worker rộng)
- open questions: none · gallery Lỗi ảnh = known FileService seed debt

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| list.personName | Họ tên | Text | S1 assert |
| list.status | Trạng thái | Badge | Đang tuần/Hoàn thành |
| detail.history | Lịch sử | Timeline | QA-20 |
| map.track | Nét tuần | MapPolyline | OSRM bar |
| map.pin | Pin | MapPin | QA-20 click |
| inspect.photoIds | Ảnh | ImageGallery | Lỗi ảnh seed |

## Screens / zones (ids only)
- SCR-MAP / SCR-INSPECT / SCR-DETAIL
- NAV-GIS · TAB-* · LIST-PERSON · MAP-HOST · MAP-BAR · MAP-POPUP-INSPECT · GALLERY-PATROL
- shots: `specs/gis-patrol-map/qa/screens/S0.png` · `S1.png` · `QA-20.png`

## API / tasks (ids only)
- FormMode↔API: View→sessions · check-ins · files resign
- T-QA-MAP-01 PASS
- debt: FileService seed 404 · RequirePermission stub

## UNCLEAR
- none

## Full paths (Read only if needed)
- scenarios: D:/AI-QLBD/Linm.RMMS.Data/specs/gis-patrol-map/qa/scenarios.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/gis-patrol-map/STATUS.md
- prior compact: D:/AI-QLBD/Linm.RMMS.Data/specs/gis-patrol-map/handoff/dev-compact.md

## Handoff next
| Role | Do |
|------|----|
| review | pending · không start (roleOnly=qa) |

## Cấm
- ERP.* · phase=done · start role khác · taskkill rộng node/yarn

<!-- compact schemaVersion=1 role=qa feature=gis-patrol-map taskId=task_e57e18ab -->
