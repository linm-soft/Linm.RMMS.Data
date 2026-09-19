# Handoff compact — dev

schemaVersion: 1
feature: job-title
packKind: master
role: dev
status: done
changeScope: new_page
taskId: task_f94ade78
skillVersion: 2026.09.05.03
workflowVersion: 2026.09.19.01
rulesVersion: 2026.09.19.2
versionGate: ok
writtenAt: 2026-09-19T03:15:00.000Z
handoffTo: qa
autoApprove: ON
e2eQa: ON (queued /agent-qa* only)
sourceContentHash: sha256:fdd8fabdbf6bf58d33835fa5d4d1da37922f18062175288d9316f9ced76071ab
formPattern: Slideout · data-form-cols=2 · footer Hủy/Lưu
domain: Integration · api/v1/integration/job-titles
mfeStdUrl: http://localhost:9318/mas/chuc-vu
mfeStdRoute: /mas/chuc-vu
build: MFE yarn build PASS · API dotnet PASS · BFF dotnet PASS

## Decisions
- changeScope: new_page · Kind B master · Slideout · DEM N/A
- BE: JobTitleEntity · rmms_job_titles · Schema+Seed 19 · BFF proxy · cấm ERP.*
- FE: Master `/mas/chuc-vu` · catalogKind `job-title` · init-data dropdown only
- LeaveConfirmModal · LinCatalogHistoryModal · Modal delete · 0 window.alert/confirm
- e2e **not** run @ Dev
- open questions: none

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| search | Tìm | SearchTextInput | API-01 |
| titleGroup | Nhóm | Dropdown | API-03 |
| code | Mã | Text code | GenerateAsync · lock edit |
| name | Tên | Text | required |
| packageHint | Package | Dropdown | map LEAD→MANAGER-RMMS |
| legacyAliases | Alias | Text/tags | |
| isActive | Hiệu lực | Switch/checkbox | |
| jobTitleCode | Consumer | SearchInput | API-02 · peer out |

## Screens / zones (ids only)
- S-LIST DES-GRID-A B C0 C1 C2 C2a C3 D F H · S-FORM DES-GRID-Z · DES-LEAVE
- mfeStdUrl=http://localhost:9318/mas/chuc-vu
- reviewUrl=file:///D:/AI-QLBD/Linm.RMMS.Data/specs/job-title/ui/prototype/job-title-list-prototype.html

## API / tasks (ids only)
- FormMode↔API: C→05 · E→04+06 · V→04 · List→01 · init→03 · search→02 · DEL→07
- T-PERM/DM/BE-*/SEED/BFF/UISCHEMA/UI-* Dev **PASS** · T-QA-* → QA
- Next: **qa** · `/agent-qa*` · e2e ON

## UNCLEAR
- none

## Debt
- RequirePermission stub (parity AssetType)
- migrations not applied to live DB
- filter-bar context MD missing · peer AssetType wire
- consumer users UI out of pack

## Full paths (Read only if needed)
- implement: D:/AI-QLBD/Linm.RMMS.Data/specs/job-title/implement/job-title.md
- task: D:/AI-QLBD/Linm.RMMS.Data/specs/job-title/task/job-title.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/job-title/STATUS.md
- prior: team_lead-compact.md · sa-compact.md · design-compact.md
