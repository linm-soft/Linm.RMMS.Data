# Handoff compact — po

schemaVersion: 1
feature: ai-vision-service
packKind: ai
role: po
status: done
skillVersion: 2026.09.05.03
rulesVersion: 2026.09.12.2
contentHash: sha256:90961d05e9d8c5fb4be3e151dc476d18c4c65e093aa0d9151d2a86ba6962702f
writtenAt: 2026-09-12T07:10:00.000Z
taskId: task_73b158a9

## Decisions
- changeScope: edit_page
- packKind: ai (PO confirm)
- formPattern: N/A stack host · consumer Full page
- Grid AC: yes (peer S-LIST-*) · Report AC: N/A · Leave: yes (LeaveConfirmModal)
- controlHint cite: specs/_data-analy/features/ai-vision-service-control-hint.md
- mfe: D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.AiVision
- be: Linm.RMMS.WebService + Vision :5311 · cấm ERP.* · cấm :5301 SSOT
- lane: web only · mobile defer (Q-AVS-01)
- cutover: hard after BFF smoke (Q-AVS-02)
- chrome: GAP-AI-DETECT-CHROME skip
- open questions: none (autoApprove)

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
- S-HOST · S-BFF-WEB · S-CUTOVER · S-LIST-AIV/AAD/ITS/ANPR/PRED/EST · S-FORM-AIV · S-DETECT · S-UPLOAD · S-HITL
- Pattern: Full page peer · tabs:none · map:none
- devSlash: /agent-dev (lists) · /agent-dev-ai-detect (HITL/upload) · /create-bff-api-feature (W2)
- peerStdUrl= http://localhost:9301/ai-vision-service · reviewUrl= (Design)
- grid_standard=yes · leave=yes · report_standard=n/a

## API / tasks (ids only)
- Prefix: web-bff/api/v1/ai-vision/** → Vision · cấm invent ai-vision-service/*
- Wave2 T-BFF · Wave3 T-CUTOVER · Wave4 T-HITL-UPLOAD
- real-data §A+§B: yes

## UNCLEAR
- none

## Full paths (Read only if needed)
- po: D:/AI-QLBD/Linm.RMMS.Data/specs/ai-vision-service/po/requirement.md
- control-hint: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/ai-vision-service-control-hint.md
- real-data: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/ai-vision-service-real-data.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/ai-vision-service/STATUS.md
