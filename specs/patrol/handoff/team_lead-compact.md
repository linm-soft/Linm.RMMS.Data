# Handoff compact — team_lead

schemaVersion: 1
feature: patrol
packKind: list
role: team_lead
status: done
skillVersion: 2026.08.14.5
writtenAt: 2026-09-07T00:55:57.818Z
changeScope: edit_page
taskId: task_62694861
contentHashPriorDataAnaly: sha256:f2761b7dc5b13b1388b9db493b028a10227efd81de142607827c582bc04450b7
contentHashPriorPo: sha256:task_54394ae1
contentHashPriorDesign: sha256:task_a57d8389
contentHashPriorSa: sha256:task_8072f549
autoApprove: ON
e2eQa: ON (queued qa)
design_confirm: approve
solution_confirm: approve
route_confirm: N/A (KEEP /patrol)

## Decisions
- changeScope: edit_page · leftover + upload media · prior route/LKP/VAL/LIST/FORM **KEEP CLOSED**
- FILE-01: MediaIds varchar(2000) CSV · DTO mediaIds[] max10 · cấm jsonb · child P2
- Files: reuse web-bff/api/v1/files/* · guid only · cấm patrol-files · ERP.* · full URL
- Form: data-zone=upload FileMulti · View gallery resign · Copy clone guid[] · List no media col
- MIME: jpeg|png|webp≤10MB · mp4|webm≤50MB · max10 — FE+FileService; BE count
- formPattern: Kind B PatrolFormPage · footer-only KEEP
- route_confirm: skip — URL /patrol đã có
- packKind: list · lane web · mfe Field · be RMMS.WebService

## Inventory (slim)
| id | controlHint | notes |
|----|-------------|-------|
| mediaIds | FileMulti | NEW P0 · guid[] |
| route/status/… | KEEP | prior CLOSED |
| AC-G-08 | — | no media grid col |

## Screens / zones (ids only)
- Zone A–D KEEP · Form data-zone=upload · View data-zone=media-gallery
- mfeStdUrl=http://localhost:9304/patrol
- reviewUrl=file:///D:/AI-QLBD/Linm.RMMS.Data/specs/patrol/ui/prototype/patrol-list-prototype.html

## API / tasks (ids only)
- T-MIG-MEDIA · T-BE-FILE-01 · T-BFF-FILE-01 · T-FE-FILE-01
- T-UI-FORM-MEDIA · T-UI-VIEW-GALLERY · T-UI-COPY-MEDIA · T-UI-FIELD-01 ext · T-UI-LIST verify
- T-QA-MEDIA (QA only)
- next: /agent-dev pending

## UNCLEAR → owned
- (none P0) · child table / Kind E+F / code readOnly = P2

## Full paths
- task: D:/AI-QLBD/Linm.RMMS.Data/specs/patrol/task/patrol.md
- solution: D:/AI-QLBD/Linm.RMMS.Data/specs/patrol/be/solution-discovery.md
- design: D:/AI-QLBD/Linm.RMMS.Data/specs/patrol/ui/design.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/patrol/STATUS.md
