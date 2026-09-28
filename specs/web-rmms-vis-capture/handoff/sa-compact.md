# Handoff compact — sa

schemaVersion: 1
feature: web-rmms-vis-capture
packKind: list
role: sa
status: confirmed
changeScope: edit_page
taskId: task_5bd02046
skillVersion: 2026.09.05.03
writtenAt: 2026-09-27T11:30:00.000Z
contentHash: sha256:f749bc65f84b7bde51beeebaa85e5db22dacc8e8a040a53de30af834fa55c8cd
solution_confirm: approve
autoApprove: ON

## Decisions
- changeScope: edit_page · cấm typed new_page · giữ Live API / DOMAIN-MAP / DEC-*
- cite: SUBMIT-VALIDATE Pattern B · VisCapturePage
- Delta: Detect/Attach idle-on · disabled chỉ detecting/attaching · banner on click · Acc>30 no POST handler
- ROUTE-01: std /chup-hien-truong · cấm /web-rmms-vis-capture
- Align: /align-mobile-to-mfe · SSOT=VisCapturePage · cấm tab/route/icon mới
- domain: Incident/incident · cite AiVision+Patrol · cấm invent VisCapture controller · cấm ERP.*
- BFF: Mobile.Bff :5202 · mobile-bff/api/v1 · cấm web-bff · users forward if missing
- DEC-DETECT-HOST: Vision :5311 via BFF/API · cấm on-device · cấm MFE :5311/:5301
- DEC-PGC-BE-01: CreateIncident DetectionId+HasGps · no Lat · Skip=dismiss
- entity/migration/Step4b: none · T-BE=N/A invent
- formPattern: Mobile full 430 · #sc-vis-capture · N/A DES-GRID · useFormOptions
- demo: N/A · cấm re-scan · cấm Write MFE/native
- next: /agent-team-lead · roleOnly stop (GAP-PKT-ROLE-01)

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| photos | ảnh | PhotoRow | uploads* |
| rowLoc | vị trí | ListRow RO | GPS + optional sessions |
| rowAcc | sai số | ListRow RO | AccuracyM |
| detect | nhận diện | Button | Pattern B · disabled chỉ detecting |
| rowClass | phân loại | ListRow RO | DefectClass |
| rowSev | mức | ListRow+Badge | Severity |
| btnAttach | gắn sự cố | Button | Pattern B · disabled chỉ attaching |
| btnSkip | bỏ qua | Button | disabled chỉ attaching |
| gpsLock | GPS | GPS | deny→banner on click · cấm fake |
| validationBanner | lỗi client | Banner | Pattern B string[] |

## Screens / zones (ids only)
- VIS · (peer INC-L · CAP)
- reviewUrl= file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-vis-capture/ui/prototype/index.html
- peerStdUrl= http://localhost:9301/chup-hien-truong
- DES-GRID: N/A · #sc-vis-capture · DES-MOB-VIS-CAPTURE · #validationBanner

## API / tasks (ids only)
- FormMode↔API: uploads* · POST ai-vision/detect · GET detections/{id} · GET patrol/sessions · POST incident/incidents
- peer BFF: GET integration/users (forward if missing) · road-routes/search (có)
- real-data §A+§B: PASS · Delta PASS · API mới=none
- T-*: edit VisCapturePage gates · T-BE=N/A invent

## UNCLEAR
- UNCLEAR-VALIDATE-B → Dev/QA Pattern B
- UNCLEAR-ALIGN-01 → TL/Dev align-mobile-to-mfe
- UNCLEAR-SESS → Dev/QA GPS-only empty sessions

## Full paths (Read only if needed)
- solution: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-vis-capture/be/solution-discovery.md
- design-compact: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-vis-capture/handoff/design-compact.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-vis-capture/STATUS.md
