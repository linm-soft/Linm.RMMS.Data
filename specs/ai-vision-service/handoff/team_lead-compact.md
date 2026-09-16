# Handoff compact — team_lead

schemaVersion: 1
feature: ai-vision-service
packKind: ai
role: team_lead
status: done
skillVersion: 2026.09.05.03
rulesVersion: 2026.09.12.2
contentHash: sha256:90961d05e9d8c5fb4be3e151dc476d18c4c65e093aa0d9151d2a86ba6962702f
writtenAt: 2026-09-12T14:45:00.000Z
taskId: task_48454408
route_confirm: approve
changeScope: edit_page

## Decisions
- changeScope: edit_page · Wave 2 BFF → 3 hard cutover → 4 HITL
- formPattern: N/A stack · consumer Full page 5-col · HITL `/agent-dev-ai-detect`
- mfe: Linm.Web.RMMS.AiVision · vision: Linm.RMMS.Vision :5311 · bff: WebService
- cấm ERP.* · invent ai-vision-service/* · MFE→:5311 · :5301 after cutover
- lane: web only · chrome GAP-AI-DETECT-CHROME skip
- route locked: `/ai-vision-service` (autoApprove · peerStdUrl)
- filter context: T-CTX-FILTER-01 → create ai-vision-service-filter-bar.md trước T-UI-FILTER
- open questions: none

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| uploadId/fileId | Frame | FileUpload | Wave4 |
| classCode | Mã catalog | Dropdown | init-data |
| status | HITL TT | Dropdown | Draft/Confirmed/Dismissed |
| score | Confidence | Number | form only · no chrome |
| routeId | Tuyến | SearchInput | road-route |
| engine | Engine | hidden | no badge |
| peer grids | detections/… | peer | Kind B CRUD |

## Screens / zones (ids only)
- S-HOST · S-BFF-WEB · S-CUTOVER · S-LIST-* · S-FORM-AIV · S-DETECT · S-UPLOAD · S-HITL · S-LEAVE
- reviewUrl=file:///D:/AI-QLBD/Linm.RMMS.Data/specs/ai-vision-service/ui/prototype/ai-vision-service-stack-hub.html
- peerStdUrl=http://localhost:9301/ai-vision-service
- mfeStdRoute=/ai-vision-service

## API / tasks (ids only)
- T-BFF-01 (/create-bff-api-feature) · T-CUTOVER-01 · T-HITL-UPLOAD-01 · T-BE-AI-01 · T-BE-CRUD-01 · T-BE-UISCHEMA-01 · T-BE-INIT-01 · T-PERM-01
- T-CTX-FILTER-01 · T-UI-LIST-01 · T-UI-FILTER-01 · T-UI-CFG-01 · T-UI-FORM-01 · T-UI-ACT-01 · T-UI-LEAVE-01 · T-UI-LKP-01 · T-UI-FIELD-01 · T-UI-PROD-01 · T-UI-UX-01 · T-UI-RESP-01 · T-UI-HIST-01
- T-UI-AI-01 · T-UI-AI-FORM-01 (devSlash=/agent-dev-ai-detect)
- T-QA-AI-01 · T-QA-FILTER-01/02 · T-QA-CRUD-01 · T-QA-FORM-01
- deps: T-BFF→CUTOVER→HITL · T-BE-CRUD→UI · T-CTX-FILTER→T-UI-FILTER
- TZ/XCO/SHARE: tz_required · xco_get_only · share_tenant

## UNCLEAR
- none

## Full paths (Read only if needed)
- task: D:/AI-QLBD/Linm.RMMS.Data/specs/ai-vision-service/task/ai-vision-service.md
- solution: D:/AI-QLBD/Linm.RMMS.Data/specs/ai-vision-service/be/solution-discovery.md
- design: D:/AI-QLBD/Linm.RMMS.Data/specs/ai-vision-service/ui/design.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/ai-vision-service/STATUS.md
