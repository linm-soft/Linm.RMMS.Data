# Handoff compact — design

schemaVersion: 1
feature: ai-vision-service
packKind: ai
role: design
status: done
skillVersion: 2026.09.05.03
rulesVersion: 2026.09.12.2
contentHash: sha256:90961d05e9d8c5fb4be3e151dc476d18c4c65e093aa0d9151d2a86ba6962702f
writtenAt: 2026-09-12T14:20:00.000Z
taskId: task_8d8de4b9

## Decisions
- changeScope: edit_page
- formPattern: N/A (stack) · consumer Full page (data-form-cols=5) · peer AAD Slideout OK
- real_view_parity: v1
- mfe: D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.AiVision
- be: Linm.RMMS.WebService + Vision :5311 · cấm ERP.* · cấm :5301 SSOT
- lane: web only · mobile defer
- chrome: GAP-AI-DETECT-CHROME skip (0 AI/P1/P2/score header)
- cutover: hard after BFF smoke (Q-AVS-02)
- design_confirm: approve (autoApprove)
- open questions: none

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| uploadId/fileId | Frame | FileUpload | Wave4 HITL |
| classCode | Mã catalog | Dropdown | TRAFFIC_SIGN≠GANTRY_SIGN |
| status | HITL TT | Dropdown | Draft/Confirmed/Dismissed |
| score | Confidence | Number | form only · no chrome |
| routeId | Tuyến | SearchInput | road-route |
| engine | Engine | hidden | no badge |
| peer grids | detections/candidates/… | peer | Grid AC yes |

## Screens / zones (ids only)
- S-HOST · S-BFF-WEB · S-CUTOVER · S-LIST-AIV/AAD/ITS/ANPR/PRED/EST · S-FORM-AIV · S-DETECT · S-UPLOAD · S-HITL · S-LEAVE
- DES-HOST-A · DES-WAVE · DES-CHROME · DES-PEER · DES-LIST-WIRE · DES-FORM-AIV · DES-UPLOAD-HITL · DES-API · DES-LEAVE
- Pattern: Full page peer · tabs:none · map:none
- reviewUrl= file:///D:/AI-QLBD/Linm.RMMS.Data/specs/ai-vision-service/ui/prototype/ai-vision-service-stack-hub.html
- peerStdUrl= http://localhost:9301/ai-vision-service
- real_view_parity=v1 · grid_standard=yes · leave=yes · report=n/a

## API / tasks (ids only)
- Prefix: web-bff/api/v1/ai-vision/** → Vision · cấm invent ai-vision-service/*
- Wave2 T-BFF · Wave3 T-CUTOVER · Wave4 T-HITL-UPLOAD
- real-data §A+§B: yes

## UNCLEAR
- none

## Full paths (Read only if needed)
- design: D:/AI-QLBD/Linm.RMMS.Data/specs/ai-vision-service/ui/design.md
- prototype: D:/AI-QLBD/Linm.RMMS.Data/specs/ai-vision-service/ui/prototype/ai-vision-service-stack-hub.html
- po: D:/AI-QLBD/Linm.RMMS.Data/specs/ai-vision-service/po/requirement.md
- control-hint: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/ai-vision-service-control-hint.md
- real-data: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/ai-vision-service-real-data.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/ai-vision-service/STATUS.md
