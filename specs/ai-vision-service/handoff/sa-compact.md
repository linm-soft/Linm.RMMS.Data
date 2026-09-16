# Handoff compact — sa

schemaVersion: 1
feature: ai-vision-service
packKind: ai
role: sa
status: done
skillVersion: 2026.09.05.03
rulesVersion: 2026.09.12.2
contentHash: sha256:90961d05e9d8c5fb4be3e151dc476d18c4c65e093aa0d9151d2a86ba6962702f
writtenAt: 2026-09-12T14:30:00.000Z
taskId: task_31fbfd98
solution_confirm: approve
changeScope: edit_page

## Decisions
- changeScope: edit_page · Wave 2 BFF → 3 hard cutover → 4 HITL
- formPattern: N/A stack · consumer Full page peer · HITL `/agent-dev-ai-detect`
- mfe: Linm.Web.RMMS.AiVision · vision: Linm.RMMS.Vision :5311 · bff: WebService ai-vision proxy
- cấm ERP.* · invent ai-vision-service/* · MFE→:5311 · :5301 after cutover
- lane: web only · mobile defer · chrome GAP-AI-DETECT-CHROME skip
- cutover: hard after BFF smoke (Q-AVS-02)
- Gates: TZ=tz_required · XCO=xco_get_only · SHARE=share_tenant
- BFF: proxy only · Wave1 Schema_RmmsVision done · W2 config · W3 out WebService SSOT
- autoApprove: ON · solution_confirm=approve
- open questions: none

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| uploadId/fileId | Frame | FileUpload | Wave4 uploads/files |
| classCode | Mã catalog | Dropdown | init-data · TRAFFIC_SIGN≠GANTRY_SIGN |
| status | HITL TT | Dropdown | Draft/Confirmed/Dismissed |
| score | Confidence | Number | form only · no chrome |
| routeId | Tuyến | SearchInput | road-route |
| engine | Engine | hidden | persist · no badge |
| peer grids | detections/candidates/… | peer | Grid AC yes |

## Screens / zones (ids only)
- S-HOST · S-BFF-WEB · S-CUTOVER · S-LIST-* · S-FORM-AIV · S-DETECT · S-UPLOAD · S-HITL · S-LEAVE
- reviewUrl=file:///D:/AI-QLBD/Linm.RMMS.Data/specs/ai-vision-service/ui/prototype/ai-vision-service-stack-hub.html
- peerStdUrl=http://localhost:9301/ai-vision-service

## API / tasks (ids only)
- FormMode↔API: API-01…09 (detections CRUD · detect · pci · candidates · uploads · peers · BFF retarget · cutover)
- Entity/mig: Wave1 done · W2 none · W3 out WebService SSOT · W4 uploads/FileService
- T-*: T-BFF · T-CUTOVER · T-HITL-UPLOAD · T-UI-FILTER-01 · T-UI-AI-01 · T-UI-AI-FORM-01 · T-UI-LEAVE-01 · T-BE-CRUD · T-PERM
- devSlash: /create-bff-api-feature · /agent-dev · /agent-dev-ai-detect
- TZ/XCO/SHARE: tz_required · xco_get_only · share_tenant
- Gaps: GAP-VIS-CUTOVER-01 · GAP-AI-DETECT-CHROME · GAP-VIS-UPLOAD-01

## UNCLEAR
- none

## Full paths (Read only if needed)
- solution: D:/AI-QLBD/Linm.RMMS.Data/specs/ai-vision-service/be/solution-discovery.md
- design: D:/AI-QLBD/Linm.RMMS.Data/specs/ai-vision-service/ui/design.md
- control-hint: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/ai-vision-service-control-hint.md
- real-data: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/ai-vision-service-real-data.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/ai-vision-service/STATUS.md
