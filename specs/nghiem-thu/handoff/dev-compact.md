# Handoff compact — dev

schemaVersion: 1
feature: nghiem-thu
packKind: list
role: dev
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-09-12T09:45:00.000Z
changeScope: new_page
taskId: task_dda12f30
contentHash: sha256:41b14359b00a0bacbd2f5e88ab9ed8f7604f962c4e4e58219bf9c1145b5ef4ea
featureKind: B
formPattern: Full page
mfeStdUrl: http://localhost:9301/nghiem-thu
build: PASS

## Decisions
- changeScope: new_page · Kind B list · Full page `data-form-cols=5`
- mfe: `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Field` · routes `/nghiem-thu` · `/new` · `/:id`
- be: `D:/AI-QLBD/Linm.RMMS.WebService` · Patrol · `api/v1/patrol/nghiem-thu` · BFF proxy · **cấm ERP.***
- migration: Schema_NghiemThu · NghiemThu + NghiemThuMedia · mediaIds guid[]
- files: FileService `web-bff/api/v1/files/*`
- filter: LinErpListFilterBar · search·status·route·templateType·from/to
- Leave: LeaveConfirmModal · useFormLeaveGuard
- config: LinCatalogUiSchemaEditorModal · buildDynamicGridColumns · **0** configHint
- build: MFE yarn build PASS · BE Api+Bff dotnet build PASS
- autoApprove ON · e2eQa queued QA only
- next: `/agent-qa`

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| search/status/route/templateType/fromDate/toDate | filter | Search*·Date | wired |
| code…mediaIds | form | Text·SearchInput·FileMulti | Full 5col |
| updatedAt | Cập nhật | Date | readonly |

## Screens / zones (ids only)
- DES-GRID-A…D · C2a · C3 · F · H · Z · DES-NT-UPLOAD · DES-LEAVE
- mfeStdUrl=`http://localhost:9301/nghiem-thu`
- peerStdUrl=`http://localhost:9304/patrol`

## API / tasks (ids only)
- FormMode↔API: List→01 · V/E/Copy→02 · C→03 · E-save→04 · Del→05 · init→00 · Files→FILE
- T-* Dev: T-PERM…T-UI-HIST **done** · T-QA-* pending
- debt: Auth RequirePermission stub · assignee BE 422 soft · live responsive QA · migrate apply env

## UNCLEAR
- none blocking Dev→QA

## Full paths (Read only if needed)
- implement: `D:/AI-QLBD/Linm.RMMS.Data/specs/nghiem-thu/implement/nghiem-thu.md`
- task: `D:/AI-QLBD/Linm.RMMS.Data/specs/nghiem-thu/task/nghiem-thu.md`
- STATUS: `D:/AI-QLBD/Linm.RMMS.Data/specs/nghiem-thu/STATUS.md`
