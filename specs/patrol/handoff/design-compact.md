# Handoff compact — design

schemaVersion: 1
feature: patrol
packKind: list
role: design
status: done
skillVersion: 2026.08.14.5
writtenAt: 2026-09-07T00:49:00.000Z
changeScope: edit_page
taskId: task_a57d8389
contentHashPriorDataAnaly: sha256:f2761b7dc5b13b1388b9db493b028a10227efd81de142607827c582bc04450b7
contentHashPriorPo: sha256:task_54394ae1
autoApprove: ON
design_confirm: approve

## Decisions
- changeScope: edit_page · KEEP A–D + full-page · + upload zone media
- GAP-DES-PAT-MEDIA-UI CLOSED: form section FileMulti sau note · View gallery resign
- MIME UI: jpeg|png|webp ≤10MB · mp4|webm ≤50MB · max 10 · toast reject
- AC-G-08: media không cột grid P1
- controlHint mediaIds=FileMulti · route SearchInput KEEP · RmmsOrg* KEEP
- Prior GAP-PO-PAT-01..07 KEEP CLOSED · Kind E+F P2
- formPattern: Kind B PatrolFormPage · View dl+gallery · footer-only
- cấm ERP.* · invent patrol-files · persist full URL · re-scan demo

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| search/status/route | Zone B | SearchText/SearchInput | KEEP road-route |
| code..note | form | per design §3 | KEEP + org RmmsOrg* |
| mediaIds | Ảnh/video | FileMulti | NEW · guid · upload zone |

## Screens / zones (ids only)
- Zone A–D list KEEP
- Form full-page · data-zone=upload · View data-zone=media-gallery
- reviewUrl=file:///D:/AI-QLBD/Linm.RMMS.Data/specs/patrol/ui/prototype/patrol-list-prototype.html
- mfeStdUrl=http://localhost:9304/patrol

## Grid AC (ids)
- AC-G-01..07 KEEP · AC-G-08 no media column P1

## API / tasks (ids only)
- sessions CRUD KEEP · files web-bff/api/v1/files/*
- next: SA pending (mediaIds schema FILE-01)

## UNCLEAR → owned
- FILE-01 schema exact → SA
- media copy-on-clone file → SA

## Full paths
- design: D:/AI-QLBD/Linm.RMMS.Data/specs/patrol/ui/design.md
- prototype: D:/AI-QLBD/Linm.RMMS.Data/specs/patrol/ui/prototype/patrol-list-prototype.html
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/patrol/STATUS.md
