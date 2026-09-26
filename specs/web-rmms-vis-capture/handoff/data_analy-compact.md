# Handoff compact — data_analy

schemaVersion: 1
feature: web-rmms-vis-capture
packKind: list
role: data_analy
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-09-25T21:24:17.563Z
contentHash: sha256:96ffc2878a4c6ad0367088c699203864c2e711b055ca68da8a59d696c8d4de97

## Decisions
- changeScope: new_page
- formPattern: Mobile full (phone max-width 430) · Android 1-1 #sc-vis-capture · N/A ERP Modal/Slideout
- mfe: D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile · mfeStdUrl http://localhost:9301/web-rmms-vis-capture · productRoute /incident/vis
- be: D:/AI-QLBD/Linm.RMMS.WebService · AiVision+Incident(+Patrol) · cấm ERP.*
- bff: Linm.RMMS.Mobile.Bff · VITE_MOBILE_API_URL http://localhost:5202/mobile-bff/api/v1 · cấm web-bff client
- demo: N/A
- VIS: photo+GPS → detect → attach|skip · peer INC-L entry banner
- HARD: GPS deny → block Detect/Attach/geo · accuracy≤30 detect · live uploads/detect/incidents · cấm fake coords · useFormOptions
- OUT: Me*/feedback/cam-view · cam-patrol/det-hitl · journal/kết ca/tồn tại/tần suất (B–E) · invent slug controller · on-device detect
- open: UNCLEAR-DOMAIN-MAP-VIS · DUAL-01 · TITLE-01 · PACK-01 · DETECT-HOST · SESS · PGC-BE-01

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| photos | ảnh | PhotoRow | uploads init/PUT/complete |
| rowLoc | vị trí | ListRow RO | GPS + optional sessions |
| rowAcc | sai số | ListRow RO | AccuracyM |
| detect | nhận diện | Button/auto | POST ai-vision/detect · GPS≤30 |
| rowClass | phân loại | ListRow RO | DefectClass |
| rowSev | mức | ListRow+Badge | Severity |
| btnAttach | gắn sự cố | Button | POST incident/incidents + DetectionId |
| btnSkip | bỏ qua | Button | dismiss · dual GAP |
| gpsLock | GPS | GPS | deny→block detect/attach |

## Screens / zones (ids only)
- VIS · (peer INC-L · CAP)
- reviewUrl= (Design)
- peerStdUrl= http://localhost:9301/web-rmms-vis-capture
- DES-GRID / LinErpListFilterBar: N/A phone
- prototype zone: #sc-vis-capture · DES-MOB-VIS-CAPTURE

## API / tasks (ids only)
- FormMode↔API: uploads* · POST ai-vision/detect · GET detections/{id} · GET patrol/sessions · POST incident/incidents
- real-data §A+§B: PASS
- T-*: T-W4-04 (cite TASKS)

## UNCLEAR
- UNCLEAR-DOMAIN-MAP-VIS: SA add DOMAIN-MAP row web-rmms-vis-capture
- UNCLEAR-DUAL-01: GAP-MOB-VIS-DUAL-01 Android section+Skip
- UNCLEAR-TITLE-01: «Nhận diện sự cố» vs peer «Nhận diện mặt đường» — PO copy key
- UNCLEAR-PACK-01: packKind=list · surface full screen
- UNCLEAR-DETECT-HOST: P1 detect host cite Live · cấm on-device
- UNCLEAR-SESS: empty sessions · cấm itemsOrDemo
- UNCLEAR-PGC-BE-01: Create no Lat · HasGps + DetectionId

## Full paths (Read only if needed)
- control-hint: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-vis-capture-control-hint.md
- real-data: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-vis-capture-real-data.md
- context: D:/AI-QLBD/Linm.RMMS.Data/docs/context/features/web-rmms-vis-capture.md
- screens: D:/AI-QLBD/Linm.RMMS.Data/docs/plan/web-rmms-mobile/SCREENS.md
- peer: vis-capture · ai-vision · web-rmms-incident
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-vis-capture/STATUS.md
