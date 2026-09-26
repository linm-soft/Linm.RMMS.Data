# Handoff compact — team_lead

schemaVersion: 1
feature: web-rmms-vis-capture
packKind: list
role: team_lead
status: confirmed
skillVersion: 2026.09.05.03
writtenAt: 2026-09-26T04:40:00.000Z
taskId: task_45fa6cfc
contentHash: sha256:96ffc2878a4c6ad0367088c699203864c2e711b055ca68da8a59d696c8d4de97
autoApprove: ON
route_confirm: confirm

## Decisions
- changeScope: new_page · formPattern: Mobile full VIS · phone ≤430 · Android 1-1 #sc-vis-capture · N/A ERP Modal · DES-GRID N/A
- TITLE-01: «Nhận diện sự cố» · PACK-01 list + full · DUAL-01 section+Skip
- mfeStdRoute: /web-rmms-vis-capture · mfeStdUrl http://localhost:9301/web-rmms-vis-capture · product /incident/vis
- BFF: Mobile.Bff :5202 · **cấm** web-bff · **cấm** invent VisCapture · **cấm** ERP.*
- DEC-DETECT-HOST: Vision :5311 via BFF · **cấm** on-device · DEC-PGC-BE-01: HasGps+DetectionId · no Lat
- HARD: GPS deny block · Acc≤30 detect · Skip=dismiss · live · useFormOptions · **cấm** fake
- Step 4b / migration / API Mới: **none** · T-BE=N/A
- T-*: T-01 route · T-02 Photo+GPS · T-03 detect · T-04 result · T-05 attach/skip · T-06 session+labels · T-QA queued
- next: /agent-dev · roleOnly stop (GAP-PKT-ROLE-01) · e2eQa queued /agent-qa*

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| photos | ảnh | PhotoRow | T-02 uploads |
| rowLoc | vị trí | ListRow RO | T-02 · T-06 |
| rowAcc | sai số | ListRow RO | T-02 · Acc≤30 |
| detect | nhận diện | Button/auto | T-03 Engine=P1 |
| rowClass | phân loại | ListRow RO | T-04 |
| rowSev | mức | ListRow+Badge | T-04 |
| btnAttach | gắn sự cố | Button | T-05 HasGps |
| btnSkip | bỏ qua | Button | T-05 dismiss |
| gpsLock | GPS | GPS | T-02 deny→block |

## Screens / zones (ids only)
- VIS · #sc-vis-capture · DES-MOB-VIS-CAPTURE · peer INC-L · CAP
- reviewUrl= file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-vis-capture/ui/prototype/index.html
- peerStdUrl= http://localhost:9301/web-rmms-vis-capture
- DES-GRID / LinErpListFilterBar: N/A

## API / tasks (ids only)
- FormMode↔API: uploads* · sessions · detect · detections/{id} · incidents
- T-01…T-06 · T-BE=N/A · T-QA queued
- cite: T-W4-04 · AC-VIS-01..10

## UNCLEAR
- UNCLEAR-SESS → Dev/QA empty toast · GPS-only · cấm itemsOrDemo
- (closed: DOMAIN-MAP-VIS · DETECT-HOST · PGC-BE-01 · DUAL-01 · TITLE-01 · PACK-01)

## Full paths (Read only if needed)
- task: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-vis-capture/task/web-rmms-vis-capture.md
- sa compact: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-vis-capture/handoff/sa-compact.md
- design: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-vis-capture/ui/design.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-vis-capture/STATUS.md
