# Handoff compact — data_analy

schemaVersion: 1
feature: patrol
packKind: list
role: data_analy
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-09-06T17:45:00.000Z
changeScope: edit_page
taskId: task_53b3bcbb
contentHash: sha256:f2761b7dc5b13b1388b9db493b028a10227efd81de142607827c582bc04450b7

## Decisions
- changeScope: edit_page · NEW task · keep PO/Design/SA/Dev/QA artifacts
- Scope: leftover crud_formtype + upload ảnh/video (họp 04/09 W4-1 W4-2)
- Prior route SearchInput / `?route=` / validate **KEEP CLOSED**
- Upload: FileService `web-bff/api/v1/files/*` · persist `mediaIds[]` guid · resign · **cấm** scaffold API mới
- formPattern: Kind B full-page `PatrolFormPage` · View `<dl>` · footer-only
- mfe: Linm.Web.RMMS.Field · be: Linm.RMMS.WebService (cấm ERP.*) · lane web only
- packKind STATUS: list
- open: GAP-DA-PAT-MEDIA-01 · GAP-DA-PAT-FILE-01 · GAP-DA-PAT-MEDIA-UI · GAP-QA-PAT-CODE-DISABLED P2

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| search | Tìm | SearchTextInput | Zone B |
| status | TT | SearchInput | enum VN |
| route | Tuyến | SearchInput | road-route · KEEP |
| code | Mã | Text | leftover readOnly P2 |
| userName | NV | Text | P1 |
| zone/vp/assignee | Org | SearchInput | RmmsOrgFormFields |
| patrolType | Loại | SearchInput | |
| plannedDate | Ngày KH | Date | * |
| mediaIds | Ảnh/video | FileMulti | NEW FileService |
| note | Ghi chú | Text | |

## Screens / zones (ids only)
- Zone A header · B filter · C grid · D pagination · Form full-page + upload zone
- reviewUrl=file:///D:/AI-QLBD/Linm.RMMS.Data/specs/patrol/ui/prototype/patrol-list-prototype.html
- mfeStdUrl=http://localhost:9304/patrol

## API / tasks (ids only)
- GET/POST/PUT/DELETE `api/v1/patrol/sessions` (+ `?route=`)
- files `web-bff/api/v1/files/*` · slash `/init-bff-file` + `/integrate-file-upload-web`
- real-data §A=yes · §B=yes · §D=map P2 defer · §E=status+media lifecycle
- next: PO pending (copy § Delta)

## UNCLEAR
- GAP-DA-PAT-FILE-01 mediaIds jsonb vs child table
- GAP-DA-PAT-MEDIA-UI upload zone layout
- MIME/size limits

## Full paths (Read only if needed)
- control-hint: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/patrol-control-hint.md
- real-data: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/patrol-real-data.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/patrol/STATUS.md
- context: D:/AI-QLBD/Linm.RMMS.Data/docs/context/features/patrol.md
