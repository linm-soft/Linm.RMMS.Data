# Handoff compact — po

schemaVersion: 1
feature: web-rmms-vis-capture
packKind: list
role: po
status: confirmed
skillVersion: 2026.09.05.03
writtenAt: 2026-09-26T04:27:00.000Z
contentHash: sha256:96ffc2878a4c6ad0367088c699203864c2e711b055ca68da8a59d696c8d4de97
autoApprove: ON

## Decisions
- changeScope: new_page
- packKind: list confirmed · Grid AC-GRID-01..05 · VIS AC-VIS-01..10
- TITLE-01: copy key «Nhận diện sự cố» (cấm peer «Nhận diện mặt đường» primary)
- PACK-01: giữ list · surface full #sc-vis-capture
- formPattern: Mobile full phone 430 · Android 1-1 · N/A ERP Modal/Slideout · N/A DES-GRID Kind B
- mfe: Linm.Web.RMMS.Mobile · mfeStdUrl http://localhost:9301/web-rmms-vis-capture · productRoute /incident/vis
- be: Linm.RMMS.WebService · AiVision+Incident(+Patrol) · cấm ERP.*
- bff: Mobile.Bff :5202 · VITE_MOBILE_API_URL · cấm web-bff client
- demo: N/A · hash skip analy · cấm re-scan
- DoD: VIS photo+GPS→detect→attach|skip · GPS deny→block Detect/Attach/geo · accuracy≤30 · live uploads/detect/incidents · useFormOptions · cấm fake coords · cấm on-device
- OUT: Me*/feedback/cam-view · cam-patrol/det-hitl · journal/kết ca/tồn tại/tần suất (B–E) · invent slug controller
- open→SA/Design/Dev/QA: DOMAIN-MAP-VIS · DUAL-01 · DETECT-HOST · SESS · PGC-BE-01

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
| btnSkip | bỏ qua | Button | dismiss · dual GAP Design |
| gpsLock | GPS | GPS | deny→block detect/attach |

## Screens / zones (ids only)
- VIS · (peer INC-L · CAP)
- reviewUrl= (Design)
- peerStdUrl= http://localhost:9301/web-rmms-vis-capture
- DES-GRID / LinErpListFilterBar: N/A phone
- prototype zone: #sc-vis-capture · DES-MOB-VIS-CAPTURE

## API / tasks (ids only)
- FormMode↔API: uploads* · POST ai-vision/detect · GET detections/{id} · GET patrol/sessions · POST incident/incidents
- real-data §A+§B: PASS · T-W4-04
- Grid AC: AC-GRID-01..05 · VIS AC-VIS-01..10

## UNCLEAR
- UNCLEAR-DOMAIN-MAP-VIS → SA
- UNCLEAR-DUAL-01 → Design (Android section+Skip)
- UNCLEAR-DETECT-HOST → SA (cite Live · cấm on-device)
- UNCLEAR-SESS → Dev/QA (empty toast)
- UNCLEAR-PGC-BE-01 → SA (HasGps + DetectionId · no Lat)

## Full paths (Read only if needed)
- requirement: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-vis-capture/po/requirement.md
- control-hint: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-vis-capture-control-hint.md
- real-data: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-vis-capture-real-data.md
- context: D:/AI-QLBD/Linm.RMMS.Data/docs/context/features/web-rmms-vis-capture.md
- prior compact: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-vis-capture/handoff/data_analy-compact.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-vis-capture/STATUS.md
