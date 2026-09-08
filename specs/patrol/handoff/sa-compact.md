# Handoff compact — sa

schemaVersion: 1
feature: patrol
packKind: list
role: sa
status: done
skillVersion: 2026.08.14.5
writtenAt: 2026-09-06T17:55:00.000Z
changeScope: edit_page
taskId: task_8072f549
contentHashPriorDataAnaly: sha256:f2761b7dc5b13b1388b9db493b028a10227efd81de142607827c582bc04450b7
contentHashPriorPo: sha256:task_54394ae1
contentHashPriorDesign: sha256:task_a57d8389
autoApprove: ON
solution_confirm: approve

## Decisions
- changeScope: edit_page · leftover + upload media · prior route/LKP/VAL **KEEP CLOSED**
- FILE-01 LOCKED: `MediaIds` varchar(2000) CSV guid trên `rmms_patrol_sessions` · DTO `mediaIds[]` max 10 · pattern CSDL · **cấm** jsonb · child table **P2**
- Migration: `Schema_RmmsPatrolSessions_MediaIds` add column only
- FormMode↔API: List no media · View GetById+resign · Create/Update replace-all · Copy clone guid[] · Delete soft no cascade files
- Files: reuse `web-bff/api/v1/files/*` · persist guid only · **cấm** patrol-files · full URL · ERP.*
- MIME: jpeg|png|webp≤10MB · mp4|webm≤50MB · max10 — FE+FileService; BE count only
- Gates: tz_na · xco_get_only · share_tenant · parent_json cấm nested
- Domain Patrol · sessions path KEEP · BFF proxy-only
- formPattern: Kind B PatrolFormPage · upload zone · View gallery

## Inventory (slim)
| id | controlHint | dto/db | notes |
|----|-------------|--------|-------|
| mediaIds | FileMulti | MediaIds / media_ids | NEW CSV guid |
| route/status/… | KEEP | prior SA | CLOSED |

## Screens / zones (ids only)
- Zone A–D KEEP · Form data-zone=upload · View data-zone=media-gallery
- mfeStdUrl=http://localhost:9304/patrol

## API / tasks (ids only)
- sessions CRUD widen mediaIds · files/* reuse
- T-MIG-MEDIA · T-BE-FILE-01 · T-FE-FILE-01 · T-UI-FORM-MEDIA · T-UI-VIEW-GALLERY · T-UI-COPY-MEDIA · T-QA-MEDIA
- next: team_lead pending

## UNCLEAR → owned
- (none P0) · child table / Kind E+F / code readOnly = P2

## Full paths
- solution: D:/AI-QLBD/Linm.RMMS.Data/specs/patrol/be/solution-discovery.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/patrol/STATUS.md
