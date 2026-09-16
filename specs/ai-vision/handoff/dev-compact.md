# Handoff compact — dev

schemaVersion: 1
feature: ai-vision
packKind: ai
featureClass: ai
role: dev
status: done
skillVersion: 2026.08.09.02
writtenAt: 2026-09-12T08:55:00.000Z
changeScope: edit_page
taskId: task_f56eb5df
contentHash: sha256:506a7c7045dab6bd32038fe1dd6984ce12e7d01feea4b9bddcc3be35c0d66236
featureKind: B
mfeStdRoute: /ai-vision
mfeStdUrl: http://localhost:9301/ai-vision
autoApprove: ON
e2eQa: ON (queued /agent-qa* only)

## Decisions
- changeScope: edit_page · Upload+detect delta only · CRUD keep
- Kind B · **cấm** AI chrome · Kind F OUT · GAP-F-AIV-04 OUT
- Upload HARD: LinImageUpload → FileService `web-bff/api/v1/files/*` · persist imageFileId · resign · cấm FilesController
- Detect: POST …/detect `{ imageUrl|imageFileId, engine? }` · P1 default · Draft · disable no frame
- Taxonomy: taxonomy.ts 10 MD · cấm TS
- BE: ImageFileId column+DTO · mig 20260912120000 · detect validates frame
- Builds: FE yarn build PASS · BE Release PASS
- next: /agent-qa* · **cấm** e2e ở Dev

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| attachFrame | Ảnh hiện trạng | FileUpload | Zone A + form · files/* |
| imageFileId | File id | hidden | FileService guid |
| engineDetect | Engine detect | Dropdown | Zone A · P1 |
| runDetect | Chạy detect | Button | POST …/detect |
| defectClass | Loại hư hỏng | Dropdown | 10 MD taxonomy.ts |

## Screens / zones (ids only)
- Zone A detect strip · B filter · C grid · D pagination · Form C/E/V/Copy + upload
- mfeStdUrl=http://localhost:9301/ai-vision

## API / tasks (ids only)
- GET/POST/PUT/DELETE api/v1/ai-vision/detections (+ imageFileId)
- POST …/detect · files web-bff/api/v1/files/*
- T-UI-UPLOAD **done** · T-BE-04 **done** · T-QA-01 queued

## Build
- yarn build AiVision **PASS**
- dotnet Release WebService **PASS**

## Debt / note
- Apply mig ImageFileId on deploy
- File.Api local may be down → upload non-2xx; route wired
- GAP-F-AIV-04 Vision host deferred

## UNCLEAR
- (none)

## Full paths (Read only if needed)
- implement: D:/AI-QLBD/Linm.RMMS.Data/specs/ai-vision/implement/ai-vision.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/ai-vision/STATUS.md
- prior: handoff/team_lead-compact.md
