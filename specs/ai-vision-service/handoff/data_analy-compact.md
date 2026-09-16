# Handoff compact — data_analy

schemaVersion: 1
feature: ai-vision-service
packKind: ai
role: data_analy
status: done
skillVersion: 2026.09.05.03
rulesVersion: 2026.09.12.2
contentHash: sha256:90961d05e9d8c5fb4be3e151dc476d18c4c65e093aa0d9151d2a86ba6962702f
writtenAt: 2026-09-12T07:05:00.000Z
taskId: task_d99b6bc2

## Decisions
- changeScope: edit_page (Wave 0p+1 done → Wave 2–4 BFF+cutover+HITL)
- formPattern: N/A (stack host · UI = peer AiVision pages)
- mfe: D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.AiVision
- be: Linm.RMMS.WebService DOMAIN-MAP + host Linm.RMMS.Vision :5311 · cấm ERP.* · cấm :5301 SSOT
- lane: web only · mobile BFF defer
- packKind: ai · stackSkill /implement-ai-vision-stack
- chrome: GAP-AI-DETECT-CHROME skip P1/P2/AI/score header
- open questions: Q-AVS-01 mobile defer · Q-AVS-02 cutover mode · Q-AVS-03 peer prototypes

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| uploadId/fileId | Frame | FileUpload | uploads / FileService |
| classCode | Mã catalog | Dropdown | TRAFFIC_SIGN≠GANTRY_SIGN |
| status | HITL TT | Dropdown | Draft/Confirmed/Dismissed |
| score | Confidence | Number | form only · no chrome |
| routeId | Tuyến | SearchInput | road-route |
| engine | Engine | hidden | persist OK · no badge |
| peer grids | detections/candidates/… | peer analy | AiVision MFE pages |

## Screens / zones (ids only)
- HOST · BFF-WEB · CUTOVER · HITL-UI
- DES-LIST-AIV / AAD / ITS / ANPR / PRED / EST · DES-FORM-AIV · UPLOAD
- reviewUrl= (Design peer) · peerStdUrl= http://localhost:9301/ai-vision-service
- map: none

## API / tasks (ids only)
- Prefix: api/v1/ai-vision/** via web-bff · cấm invent ai-vision-service/*
- Controllers: Ops detect/detect-assets · Detections · AssetCandidates · Uploads · VisionDetect internal
- Wave2 T-BFF retarget · Wave3 T-CUTOVER · Wave4 T-HITL-UPLOAD
- real-data §A+§B: yes · §D map:none · §E: yes

## UNCLEAR
- none

## Full paths (Read only if needed)
- control-hint: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/ai-vision-service-control-hint.md
- real-data: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/ai-vision-service-real-data.md
- context: D:/AI-QLBD/Linm.RMMS.Data/docs/context/features/ai-vision-service.md
- plan: D:/AI-QLBD/Linm.RMMS.Data/docs/plan/ai-vision-service/README.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/ai-vision-service/STATUS.md
- DOMAIN-MAP: D:/AI-QLBD/Linm.RMMS.WebService/docs/DOMAIN-MAP.md
