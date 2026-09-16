# Handoff compact — dev

schemaVersion: 1
feature: ai-vision-service
packKind: ai
role: dev
status: done
skillVersion: 2026.09.05.03
rulesVersion: 2026.09.12.2
contentHash: sha256:90961d05e9d8c5fb4be3e151dc476d18c4c65e093aa0d9151d2a86ba6962702f
writtenAt: 2026-09-12T07:36:00.000Z
taskId: task_61d43835
changeScope: edit_page

## Decisions
- changeScope: edit_page · Wave2 BFF→Vision · Wave3 cutover :5301 · Wave4 hub+uploads
- formPattern: hub Full · peer Kind B · HITL LeaveConfirmModal
- mfe: Linm.Web.RMMS.AiVision · be: WebService BFF + Vision :5311 · cấm ERP.*
- mfeStdUrl: http://localhost:9301/ai-vision-service
- build: yarn AiVision PASS · dotnet Bff+Api+Vision PASS
- open questions: none

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| uploadId/fileId | Frame | FileUpload | BFF→Vision uploads |
| classCode | Mã catalog | Dropdown | init-data |
| status | HITL TT | Dropdown | Draft/Confirmed/Dismissed |
| score | Confidence | Number | form only |
| routeId | Tuyến | SearchInput | peer |
| engine | Engine | hidden | no badge header |

## Screens / zones (ids only)
- S-HOST `/ai-vision-service` · S-LIST-* peers · S-FORM-AIV · S-UPLOAD/HITL via AAD
- peerStdUrl=http://localhost:9301/ai-vision-service
- chrome GAP-AI-DETECT-CHROME skip

## API / tasks (ids only)
- BFF VisionApi: detections · detect · pci · asset-candidates · uploads · health
- Peers ITS/ANPR/predict/est: still RmmsApi (debt)
- T-BFF/CUTOVER/HITL/CTX-FILTER done · T-QA-* queued
- debt: peer migrate Vision · Wave5 P2 skip_until_p2_0

## UNCLEAR
- none

## Full paths (Read only if needed)
- implement: D:/AI-QLBD/Linm.RMMS.Data/specs/ai-vision-service/implement/ai-vision-service.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/ai-vision-service/STATUS.md
- filter-bar: D:/AI-QLBD/Linm.RMMS.Data/docs/context/features/ai-vision-service-filter-bar.md
- DOMAIN-MAP: D:/AI-QLBD/Linm.RMMS.WebService/docs/DOMAIN-MAP.md
