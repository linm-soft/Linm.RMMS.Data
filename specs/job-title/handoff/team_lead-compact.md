# Handoff compact — team_lead

schemaVersion: 1
feature: job-title
packKind: master
role: team_lead
status: done
changeScope: new_page
taskId: task_7017698c
skillVersion: 2026.09.05.03
workflowVersion: 2026.09.19.01
rulesVersion: 2026.09.19.2
versionGate: ok
writtenAt: 2026-09-18T19:50:00.000Z
handoffTo: dev
autoApprove: ON
demo: N/A
sourceContentHash: sha256:fdd8fabdbf6bf58d33835fa5d4d1da37922f18062175288d9316f9ced76071ab

## Decisions
- changeScope: new_page · Kind B master · Slideout `data-form-cols=2` · DEM N/A
- route_confirm: inherited · URL không mới · `/mas/chuc-vu` (VN «chức vụ») · Autopilot không AskQuestion
- routes: list `/mas/chuc-vu` · create `/mas/chuc-vu/tao-moi` · edit `/sua?id=` · view `/:id` (deep-link Slideout)
- devSlash: `/agent-dev` · T-UI-RESP-01 thêm `/dev-web-responsive` + `/dev-ui-review`
- catalogKind: `job-title` · tree: none · retry TL: n/a
- filter: LinErpListFilterBar · `search` + `titleGroup` · context `docs/context/features/job-title-filter-bar.md` (Dev `/filter-bar-context` trước Write — file chưa có)
- dropdown: API-03 init-data only · cấm KIND_LABEL
- mfe: Master · be: Integration `api/v1/integration/job-titles` · BFF proxy · cấm ERP.*
- open questions: none

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| search | Tìm kiếm | SearchTextInput | API-01 query |
| titleGroup | Nhóm | Dropdown | API-03 |
| code | Mã chức vụ | Text code | GenerateAsync · lock edit |
| name | Tên chức vụ | Text | required |
| packageHint | Package gợi ý | Dropdown/derived | LEAD→MANAGER-RMMS |
| legacyAliases | Alias Excel | Text/tags | |
| isActive | Hiệu lực | Switch | |
| jobTitleCode | Chức vụ | SearchInput | peer only · API-02 · không sửa users |

## Screens / zones (ids only)
- S-LIST DES-GRID-A B C0 C1 C2 C2a C3 D F H · S-FORM DES-GRID-Z · DES-LEAVE
- map: A LinPageLayout · B catalogToolbar · C1 LinErpListFilterBar · C2 LinCatalogDataGrid · C3 LinCatalogRowActionMenu · D LinCatalogListPagination · F LinCatalogUiSchemaEditorModal · H LinCatalogHistoryModal · Z Slideout 2 cột
- reviewUrl= file:///D:/AI-QLBD/Linm.RMMS.Data/specs/job-title/ui/prototype/job-title-list-prototype.html
- mfeStdUrl= http://localhost:9318/mas/chuc-vu

## API / tasks (ids only)
- devSlash: `/agent-dev`
- FormMode↔API: C→API-05 · E→API-04+06 · V→API-04 · Copy→API-04+05 · List→API-01 · init→API-03 · search→API-02 · DEL→API-07
- perm: `master.job-titles.read|create|update|delete`
- deps: T-PERM + T-BE-CRUD/INIT/UISCHEMA/SEED/BFF **trước** T-UI-* · T-QA queued
- T-PERM-01 · T-DM-01 · T-BE-CRUD-01 · T-BE-INIT-01 · T-SEED-01 · T-BFF-01 · T-BE-UISCHEMA-01
- T-UI-FILTER-01 · T-UI-LIST-01 · T-UI-CFG-01 · T-UI-FORM-01 · T-UI-LEAVE-01 · T-UI-ACT-01 · T-UI-LKP-01 · T-UI-FIELD-01 · T-UI-PROD-01 · T-UI-UX-01 · T-UI-RESP-01 · T-UI-HIST-01 · T-CTX-01
- T-QA-CRUD-01 · T-QA-FORM-01 · T-QA-FILTER-01 · T-QA-FILTER-02 · T-QA-TYP-01 · T-QA-TAB-01
- out: consumer users · menu · Auth package · report

## UNCLEAR
- none

## GAP (handoff Dev)
- GAP-JOB-DM-01 / BE-01 / MFE-01 / 05 P0 → T-DM · T-BE · T-SEED · T-UI-LIST
- GAP-JOB-01/02/04/06 P1 · GAP-JOB-03 P2 — ngoài core (note task)
- GAP-P2-LAYOUT-06 DoD live trên T-UI-LIST-01 · cấm DEFER

## Full paths (Read only if needed)
- task: D:/AI-QLBD/Linm.RMMS.Data/specs/job-title/task/job-title.md
- solution: D:/AI-QLBD/Linm.RMMS.Data/specs/job-title/be/solution-discovery.md
- design: D:/AI-QLBD/Linm.RMMS.Data/specs/job-title/ui/design.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/job-title/STATUS.md
