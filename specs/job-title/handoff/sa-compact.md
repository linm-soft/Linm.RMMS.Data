# Handoff compact — sa

schemaVersion: 1
feature: job-title
packKind: master
role: sa
status: done
changeScope: new_page
taskId: task_eb28f575
skillVersion: 2026.09.05.03
workflowVersion: 2026.09.19.01
rulesVersion: 2026.09.19.2
versionGate: ok
writtenAt: 2026-09-19T02:35:00.000Z
handoffTo: team_lead
autoApprove: ON
solution_confirm: approve
sourceContentHash: sha256:fdd8fabdbf6bf58d33835fa5d4d1da37922f18062175288d9316f9ced76071ab

## Decisions
- changeScope: new_page · Kind B master · Slideout · DEM N/A
- formPattern: Slideout · list Full · LinErpListFilterBar (`search`,`titleGroup`)
- mfe: Master `/mas/chuc-vu` · be: Integration `api/v1/integration/job-titles` · BFF proxy · cấm ERP.*
- entity: JobTitleEntity · table `rmms_job_titles` · migration Schema_RmmsJobTitles + seed ~19
- TZ/XCO/SHARE: tz_na · xco_get_only · share_a
- open questions: none

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| search | Tìm | SearchTextInput | API-01 |
| titleGroup | Nhóm | Dropdown | API-03 init |
| code | Mã | Text code | GenerateAsync · lock edit |
| name | Tên | Text | required |
| packageHint | Package | Dropdown/derived | LEAD→MANAGER-RMMS |
| legacyAliases | Alias | Text/tags | scalar |
| isActive | Hiệu lực | Switch | |
| jobTitleCode | Chức vụ | SearchInput | API-02 consumer |

## Screens / zones (ids only)
- S-LIST DES-GRID-A…D F H · S-FORM DES-GRID-Z · DES-LEAVE
- reviewUrl= file:///D:/AI-QLBD/Linm.RMMS.Data/specs/job-title/ui/prototype/job-title-list-prototype.html
- mfeStdUrl= http://localhost:9318/mas/chuc-vu

## API / tasks (ids only)
- FormMode↔API: C→API-05 · E→API-04+06 · V→API-04 · List→API-01 · init→API-03 · search→API-02 · DEL→API-07
- API-01…07 · perm master.job-titles.*
- T-* DEFER TL · T-UI-FILTER-01 · devSlash=/agent-dev

## UNCLEAR
- none

## GAP (handoff TL)
- GAP-JOB-DM-01 / BE-01 / MFE-01 / 05 P0
- GAP-JOB-01/02/04/06 P1 · GAP-JOB-03 P2

## Full paths (Read only if needed)
- solution: D:/AI-QLBD/Linm.RMMS.Data/specs/job-title/be/solution-discovery.md
- design: D:/AI-QLBD/Linm.RMMS.Data/specs/job-title/ui/design.md
- control-hint: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/job-title-control-hint.md
- real-data: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/job-title-real-data.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/job-title/STATUS.md
