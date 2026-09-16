# Handoff compact — sa

schemaVersion: 1
feature: nghiem-thu
packKind: list
role: sa
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-09-12T09:30:00.000Z
changeScope: new_page
taskId: task_25cd95bb
contentHash: sha256:41b14359b00a0bacbd2f5e88ab9ed8f7604f962c4e4e58219bf9c1145b5ef4ea
featureKind: B
solution_confirm: approve

## Decisions
- changeScope: new_page · formPattern Full page · Kind B list
- mfe: `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Field` · `/nghiem-thu` · mfeStdUrl `http://localhost:9301/nghiem-thu`
- be: `D:/AI-QLBD/Linm.RMMS.WebService` · domain **Patrol** · **cấm ERP.*** · **cấm** WO · **cấm** sessions reuse
- API: `api/v1/patrol/nghiem-thu` + BFF `web-bff/api/v1/patrol/nghiem-thu` (GAP-DA-NT-DOMAIN-01 / API-01 **CLOSED**)
- entity: `NghiemThu` + child `NghiemThuMedia` · migration **Schema_NghiemThu** · mediaIds guid[] **not** JSON
- files: FileService `web-bff/api/v1/files/*` reuse
- filters: search·status·route·templateType·fromDate·toDate · LinErpListFilterBar
- gates: TZ=**required** · XCO=**required** · SHARE=**tenant_keep**
- autoApprove ON · e2eQa queued QA only

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| search | Tìm | SearchTextInput | ?search= |
| status | TT | SearchInput | init-data LOOKUP |
| route | Tuyến | SearchInput | road-route Integration |
| templateType | Mẫu NT | SearchInput | mau-01…10 init-data |
| fromDate/toDate | Kỳ | Date | TZ list |
| code | Mã NT | Text | IdCode NT-* |
| zoneOrgCode/vpOrgCode | Khu/VP | SearchInput | org-unit |
| assigneeCode | Cán bộ | SearchInput | required |
| inspectedAt | Ngày NT | Date | TZ required |
| kmFrom/kmTo | Km | Number | |
| fieldInfo/note | Hiện trường/Ghi chú | Text | |
| mediaIds | Ảnh/video | FileMulti | child FileId |
| updatedAt | Cập nhật | Date | readonly |

## Screens / zones (ids only)
- DES-GRID-A…D · DES-NT-UPLOAD · DES-LEAVE · Full form C/E/V/Copy
- reviewUrl=`file:///D:/AI-QLBD/Linm.RMMS.Data/specs/nghiem-thu/ui/prototype/index.html`
- peerStdUrl=`http://localhost:9304/patrol`

## API / tasks (ids only)
- FormMode↔API: List→API-01 · View/Edit/Copy→API-02 · Create→API-03 · Edit-save→API-04 · Delete→API-05 · Lookups→API-00 · Files→API-FILE
- Entity/migration: Schema_NghiemThu **yes** · Seed optional
- TZ/XCO/SHARE: required / required / tenant_keep
- Perm: patrol.nghiem-thu.read|write
- next: `/agent-team-lead` · compact → tl

## UNCLEAR
- none blocking SA→TL

## Full paths (Read only if needed)
- solution: `D:/AI-QLBD/Linm.RMMS.Data/specs/nghiem-thu/be/solution-discovery.md`
- design: `D:/AI-QLBD/Linm.RMMS.Data/specs/nghiem-thu/ui/design.md`
- real-data: `D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/nghiem-thu-real-data.md`
- DOMAIN-MAP: `D:/AI-QLBD/Linm.RMMS.WebService/docs/DOMAIN-MAP.md`
- STATUS: `D:/AI-QLBD/Linm.RMMS.Data/specs/nghiem-thu/STATUS.md`
