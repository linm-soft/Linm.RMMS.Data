# Handoff compact — design

schemaVersion: 1
feature: web-rmms-vis-capture
packKind: list
role: design
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-09-26T04:29:24.000Z
taskId: task_8f3b5723
contentHash: sha256:96ffc2878a4c6ad0367088c699203864c2e711b055ca68da8a59d696c8d4de97
design_confirm: approve
autoApprove: ON
real_view_parity: v1
shared_grid_example: N/A

## Decisions
- changeScope: new_page
- formPattern: Mobile full phone 430 · Android 1-1 · N/A ERP Modal/Slideout
- Grid AC Kind B / DES-GRID / LinErpListFilterBar: N/A phone full
- Report AC / DES-RPT: N/A
- mfe: D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile · mfeStdUrl http://localhost:9301/web-rmms-vis-capture · productRoute /incident/vis
- be: D:/AI-QLBD/Linm.RMMS.WebService · AiVision+Incident(+Patrol) · cấm ERP.*
- bff: Linm.RMMS.Mobile.Bff :5202 mobile-bff/api/v1 · cấm web-bff
- demo: N/A · hash skip · cấm rescan (GAP-DES-DEMO-RESCAN-01)
- TITLE-01: «Nhận diện sự cố» · PACK-01 list + full #sc-vis-capture
- DUAL-01: resolved — section «Ảnh hiện trường» + Skip dual
- DoD: photo+GPS→detect→attach|skip · GPS deny→block · acc≤30 · live APIs · cấm fake/on-device
- kit_missing_confirm: N/A
- next: /agent-sa · roleOnly stop (GAP-PKT-ROLE-01)

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| photos | ảnh | PhotoRow | uploads init/PUT/complete |
| rowLoc | vị trí | ListRow RO | GPS + optional sessions |
| rowAcc | sai số | ListRow RO | AccuracyM |
| detect | nhận diện | Button/auto | POST ai-vision/detect · GPS≤30 |
| rowClass | phân loại | ListRow RO | DefectClass |
| rowSev | mức | ListRow+Badge | Severity |
| btnAttach | gắn sự cố | Button | POST incidents + DetectionId · HasGps |
| btnSkip | bỏ qua | Button | dismiss · dual PASS |
| gpsLock | GPS | GPS | deny→block detect/attach |

## Screens / zones (ids only)
- VIS · (peer INC-L · CAP)
- reviewUrl= file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-vis-capture/ui/prototype/index.html
- reviewUrl modes=?gps=deny · ?acc=45 · ?nophoto=1 · ?nosession=1 · ?error=1
- peerStdUrl= http://localhost:9301/web-rmms-vis-capture
- real_view_parity= v1
- DES-GRID / LinErpListFilterBar: N/A
- prototype zone: #sc-vis-capture · DES-MOB-VIS-CAPTURE

## API / tasks (ids only)
- FormMode↔API: uploads* · POST ai-vision/detect · GET detections/{id} · GET patrol/sessions · POST incident/incidents
- real-data §A+§B: PASS · T-W4-04 · VIS AC-VIS-01..10 · Grid AC N/A · devSlash=/agent-dev

## UNCLEAR
- UNCLEAR-DUAL-01: resolved Design — section+Skip
- UNCLEAR-DOMAIN-MAP-VIS→SA add DOMAIN-MAP row web-rmms-vis-capture
- UNCLEAR-DETECT-HOST→SA cite Live · cấm on-device
- UNCLEAR-PGC-BE-01→SA HasGps + DetectionId · no Lat
- UNCLEAR-SESS→Dev/QA empty toast · cấm itemsOrDemo

## Full paths (Read only if needed)
- design: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-vis-capture/ui/design.md
- prototype: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-vis-capture/ui/prototype/index.html
- control-hint: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-vis-capture-control-hint.md
- real-data: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-vis-capture-real-data.md
- po: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-vis-capture/po/requirement.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-vis-capture/STATUS.md
