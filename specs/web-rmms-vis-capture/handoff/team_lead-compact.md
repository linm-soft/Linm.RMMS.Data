# Handoff compact — team_lead

schemaVersion: 1
feature: web-rmms-vis-capture
packKind: list
role: team_lead
status: confirmed
changeScope: edit_page
taskId: task_9ed74d76
skillVersion: 2026.09.05.03
writtenAt: 2026-09-27T11:35:00.000Z
contentHash: sha256:f749bc65f84b7bde51beeebaa85e5db22dacc8e8a040a53de30af834fa55c8cd
autoApprove: ON
route_confirm: keep

## Decisions
- changeScope: edit_page · cấm typed new_page · giữ Live API / DEC-*
- cite: SUBMIT-VALIDATE Pattern B · VisCapturePage
- Delta: Detect/Attach idle-on · disabled chỉ detecting/attaching · #validationBanner on click · Acc>30 no POST handler
- ROUTE-01: std /chup-hien-truong · cấm /web-rmms-vis-capture · route_confirm=keep
- Align: /align-mobile-to-mfe · SSOT=VisCapturePage · cấm tab/route/icon mới
- formPattern: Mobile full 430 · #sc-vis-capture · N/A DES-GRID · useFormOptions
- BFF: Mobile.Bff :5202 · users forward if missing · cấm web-bff · cấm ERP.*
- DEC-DETECT-HOST: Vision :5311 via BFF · cấm on-device · DEC-PGC-BE-01: HasGps+DetectionId · no Lat
- Step 4b / migration / API Mới: none · T-BE=N/A
- T-*: T-01 keep route · T-02 Photo+GPS · T-03 Detect Pattern B · T-04 result · T-05 Attach Pattern B · T-06 banner+align · T-QA queued
- next: /agent-dev · roleOnly stop (GAP-PKT-ROLE-01) · e2eQa queued /agent-qa*

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| photos | ảnh | PhotoRow | T-02 uploads |
| rowLoc | vị trí | ListRow RO | T-02 · T-06 |
| rowAcc | sai số | ListRow RO | T-02 · Acc>30 handler |
| detect | nhận diện | Button | T-03 Pattern B |
| rowClass | phân loại | ListRow RO | T-04 |
| rowSev | mức | ListRow+Badge | T-04 |
| btnAttach | gắn sự cố | Button | T-05 Pattern B |
| btnSkip | bỏ qua | Button | T-05 dismiss |
| gpsLock | GPS | GPS | T-02 deny→banner |
| validationBanner | lỗi client | Banner | T-03 · T-05 · T-06 |

## Screens / zones (ids only)
- VIS · #sc-vis-capture · DES-MOB-VIS-CAPTURE · #validationBanner · peer INC-L · CAP
- reviewUrl= file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-vis-capture/ui/prototype/index.html
- peerStdUrl= http://localhost:9301/chup-hien-truong
- DES-GRID / LinErpListFilterBar: N/A

## API / tasks (ids only)
- FormMode↔API: uploads* · sessions · detect · detections/{id} · incidents · users forward
- T-01…T-06 · T-BE=N/A · T-QA queued
- cite: AC-VIS-01..12 · Pattern B

## UNCLEAR
- UNCLEAR-VALIDATE-B → Dev/QA Pattern B
- UNCLEAR-ALIGN-01 → Dev align-mobile-to-mfe
- UNCLEAR-SESS → Dev/QA GPS-only empty sessions

## Full paths (Read only if needed)
- task: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-vis-capture/task/web-rmms-vis-capture.md
- sa-compact: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-vis-capture/handoff/sa-compact.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-vis-capture/STATUS.md
