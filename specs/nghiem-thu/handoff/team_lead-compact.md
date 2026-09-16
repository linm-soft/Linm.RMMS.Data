# Handoff compact — team_lead

schemaVersion: 1
feature: nghiem-thu
packKind: list
role: team_lead
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-09-12T09:27:42.000Z
changeScope: new_page
taskId: task_9bf1287f
contentHash: sha256:41b14359b00a0bacbd2f5e88ab9ed8f7604f962c4e4e58219bf9c1145b5ef4ea
featureKind: B
route_confirm: approve
formPattern: Full page

## Decisions
- changeScope: new_page · Kind B list · Full page `data-form-cols=5`
- route: `/nghiem-thu` · `/nghiem-thu/new` · `/nghiem-thu/:id` (autoApprove A)
- mfe: `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Field` · mfeStdUrl `http://localhost:9301/nghiem-thu`
- be: `D:/AI-QLBD/Linm.RMMS.WebService` · Patrol · `api/v1/patrol/nghiem-thu` · **cấm ERP.*** · **cấm** WO
- files: FileService `web-bff/api/v1/files/*` · Schema_NghiemThu · mediaIds guid[]
- filter: LinErpListFilterBar · `nghiem-thu-filter-bar.md` · lấp hàng rồi wrap · 🔍 right
- Leave: LeaveConfirmModal · **cấm** native confirm
- autoApprove ON · e2eQa queued QA only
- next: `/agent-dev`

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| search/status/route/templateType/fromDate/toDate | filter | Search*·Date | T-UI-FILTER-01 |
| code…mediaIds | form | Text·SearchInput·FileMulti | T-UI-FORM-01 Full 5col |
| updatedAt | Cập nhật | Date | readonly |

## Screens / zones (ids only)
- DES-GRID-A…D · C2a · C3 · F · H · Z · DES-NT-UPLOAD · DES-LEAVE
- reviewUrl=`file:///D:/AI-QLBD/Linm.RMMS.Data/specs/nghiem-thu/ui/prototype/index.html`
- peerStdUrl=`http://localhost:9304/patrol`

## API / tasks (ids only)
- FormMode↔API: List→01 · V/E/Copy→02 · C→03 · E-save→04 · Del→05 · init→00 · Files→FILE
- T-*: T-PERM-01 · T-BE-MIG-01 · T-BE-CRUD-01 · T-BE-INIT-01 · T-BE-UISCHEMA-01 · T-BFF-01 · T-FE-API-01 · T-UI-LIST-01 · T-UI-FILTER-01 · T-UI-CFG-01 · T-UI-FORM-01 · T-UI-LEAVE-01 · T-UI-ACT-01 · T-UI-LKP-01 · T-UI-FIELD-01 · T-UI-PROD-01 · T-UI-UX-01 · T-UI-RESP-01 · T-UI-HIST-01 · T-QA-CRUD-01 · T-QA-FORM-01 · T-QA-FILTER-01 · T-QA-FILTER-02
- deps: T-BE-MIG → T-BE-CRUD → T-BFF → T-FE-API → T-UI-* · T-BE before T-UI
- devSlash: `/agent-dev` · T-UI-RESP-01=`/dev-web-responsive`+`/dev-ui-review` · QA=`/agent-qa`

## UNCLEAR
- none blocking TL→Dev

## Full paths (Read only if needed)
- task: `D:/AI-QLBD/Linm.RMMS.Data/specs/nghiem-thu/task/nghiem-thu.md`
- solution: `D:/AI-QLBD/Linm.RMMS.Data/specs/nghiem-thu/be/solution-discovery.md`
- filter-bar: `D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/nghiem-thu-filter-bar.md`
- STATUS: `D:/AI-QLBD/Linm.RMMS.Data/specs/nghiem-thu/STATUS.md`
