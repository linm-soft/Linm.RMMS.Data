# Handoff compact — dev

schemaVersion: 1
feature: patrol
packKind: list
role: dev
status: done
skillVersion: 2026.08.14.5
writtenAt: 2026-09-06T18:10:00.000Z
changeScope: edit_page
taskId: task_12280943
contentHashPriorDataAnaly: sha256:f2761b7dc5b13b1388b9db493b028a10227efd81de142607827c582bc04450b7
contentHashPriorPo: sha256:task_54394ae1
contentHashPriorDesign: sha256:task_a57d8389
contentHashPriorSa: sha256:task_8072f549
contentHashPriorTl: sha256:task_62694861
autoApprove: ON
e2eQa: ON (queued qa)
mfeStdUrl: http://localhost:9304/patrol

## Decisions
- changeScope: edit_page · leftover + upload media · prior route/LKP/VAL/LIST/FORM KEEP
- FILE-01: MediaIds varchar(2000) CSV · DTO mediaIds[] max10 · replace-all · no cascade files
- Files: FE LinImageUpload → web-bff/api/v1/files/* · guid only · cấm patrol-files / ERP.* / full URL
- Form data-zone=upload · View data-zone=media-gallery · Copy clone guid[]
- MIME: jpeg|png|webp≤10MB · mp4|webm≤50MB · max10 — FE+FileService; BE count
- BFF sessions proxy-only passthrough (no controller change)
- formPattern: Kind B PatrolFormPage · footer-only KEEP · AC-G-08 no media grid col

## Inventory (slim)
| id | controlHint | notes |
|----|-------------|-------|
| mediaIds | FileMulti | DONE · LinImageUpload |
| route/status/… | KEEP | prior CLOSED |

## Screens / zones (ids only)
- Zone A–D KEEP · Form data-zone=upload · View data-zone=media-gallery
- mfeStdUrl=http://localhost:9304/patrol

## API / tasks (ids only)
- T-MIG-MEDIA · T-BE-FILE-01 · T-BFF-FILE-01 · T-FE-FILE-01
- T-UI-FORM-MEDIA · T-UI-VIEW-GALLERY · T-UI-COPY-MEDIA → **done**
- T-QA-MEDIA → next /agent-qa
- APIs: GET/POST/PUT/DELETE api/v1/patrol/sessions (+ mediaIds) · files/*

## Build
- yarn build Field PASS · dotnet Api+Bff PASS

## UNCLEAR → owned
- (none P0) · Kind E+F / child media / code readOnly = P2

## Full paths
- implement: D:/AI-QLBD/Linm.RMMS.Data/specs/patrol/implement/patrol.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/patrol/STATUS.md
