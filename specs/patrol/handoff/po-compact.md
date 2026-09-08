# Handoff compact — po

schemaVersion: 1
feature: patrol
packKind: list
role: po
status: done
skillVersion: 2026.08.14.5
writtenAt: 2026-09-06T17:50:00.000Z
changeScope: edit_page
taskId: task_54394ae1
contentHashPriorDataAnaly: sha256:f2761b7dc5b13b1388b9db493b028a10227efd81de142607827c582bc04450b7
autoApprove: ON
e2eQa: ON (queued qa)

## Decisions
- changeScope: edit_page · leftover crud_formtype + upload media (W4-1 W4-2)
- Prior GAP-PO-PAT-01..07 route/filter/Slideout/user/map/ERP **KEEP CLOSED**
- P0: mediaIds[] FileMulti · FileService web-bff/api/v1/files/* · persist guid only · resign View
- Cấm invent patrol-files / full URL / ERP.* / re-scan demo
- MIME: image jpeg|png|webp ≤10MB · video mp4|webm ≤50MB · max 10/session
- FILE-01: P1 guid[] on PatrolSession · SA chốt schema · child table P2
- MEDIA-UI: form upload section + View gallery · Design chốt visual
- code readOnly leftover P2 · Kind E+F P2
- formPattern: Kind B full-page PatrolFormPage · View dl · footer-only
- packKind: list · lane web · mfe Field · be RMMS.WebService

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| search/status/route | Zone B | SearchText/SearchInput | KEEP road-route |
| code..note | form | per §5 requirement | KEEP |
| mediaIds | Ảnh/video | FileMulti | NEW P0 FileService |
| org | zone/vp/assignee | SearchInput | RmmsOrgFormFields KEEP |

## Screens / zones (ids only)
- Zone A–D list KEEP · Form full-page + upload zone · leave-confirm dirty
- reviewUrl=file:///D:/AI-QLBD/Linm.RMMS.Data/specs/patrol/ui/prototype/patrol-list-prototype.html
- mfeStdUrl=http://localhost:9304/patrol

## Grid AC (ids)
- AC-G-01..07 KEEP · AC-G-08 media không cột grid P1

## API / tasks (ids only)
- sessions CRUD + ?route= KEEP · files web-bff/api/v1/files/* · T-FILE-01
- next: Design pending (upload zone + prototype)

## UNCLEAR → owned
- FILE-01 schema exact → SA
- MEDIA-UI visual → Design
- MIME refine copy → Design (limits PO-chốt)

## Full paths
- requirement: D:/AI-QLBD/Linm.RMMS.Data/specs/patrol/po/requirement.md
- control-hint: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/patrol-control-hint.md
- real-data: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/patrol-real-data.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/patrol/STATUS.md
