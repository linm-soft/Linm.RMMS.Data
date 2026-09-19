# Handoff compact — sa

schemaVersion: 1
feature: nghiem-thu
packKind: list
role: sa
status: done
skillVersion: 2026.08.25.01
writtenAt: 2026-09-19T15:55:00.000Z
taskId: task_ca050f3a
autoApprove: ON
changeScope: edit_page
contentHash: sha256:a635f3f55a8bedd952c4449056cf072a8eda890eda2b30a45e84bda5d7bf3859
featureKind: B
formPattern: N/A
solution_confirm: approve

## Decisions
- changeScope: edit_page · keep web Full Kind B · delta = native list + Mobile.Bff
- formPattern: N/A list · create/detail siblings pending_confirm
- be: Linm.RMMS.WebService · Patrol · `api/v1/patrol/nghiem-thu` live · **cấm ERP.***
- BFF: Mobile.Bff catch-all `mobile-bff/api/v1` · proxy only · **cấm** NT controller / invent path
- entity: NghiemThu + NghiemThuMedia · migration=**no** (Schema_NghiemThu exists) · Step 4b SKIP
- gates: TZ=**required** · XCO=**required** · SHARE=**tenant_keep**
- offline/GPS/camera/files: OUT list P1 · fail→toast · **cấm** localhost/IP in solution
- solution_confirm: **approve** · e2eQa queued QA only

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| search | Tìm mẫu… | SearchField | API-01 ?search= |
| rowCode | NT-* | Text | Code |
| rowSub | Mẫu · tuyến · Km | Text | Template·Route·Km |
| rowStatus | Nháp/… | Badge | API-00 statuses |
| navCreate | Tạo | TextButton | local → create |
| rowTap | Chi tiết | ListRow | local → detail + Id |
| empty/toast | — | EmptyChrome/Toast | 0 / fail |

## Screens / zones (ids only)
- DES-MOB-NGHIEM-THU · `#sc-nghiem-thu` · DES-MOB-NT-SEARCH · hub `#row-nghiem-thu`
- reviewUrlIos=`…/prototype/ios/index.html` · reviewUrlAndroid=`…/prototype/android/index.html`
- peerStdUrl=`http://localhost:9304/patrol` · **cấm** mfeStdUrl native

## API / tasks (ids only)
- FormMode↔API: List→API-01 · Lookups→API-00 · C/E/V/D/Files→OUT siblings
- Entity/migration: Schema_NghiemThu **exists** · migration flag=**no**
- TZ/XCO/SHARE: required / required / tenant_keep
- Perm: patrol.nghiem-thu.read (list)
- next: `/agent-team-lead-mobile` · devSlash `/agent-dev-ios`+`/agent-dev-android`

## UNCLEAR
- none

## Full paths (Read only if needed)
- solution: /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/nghiem-thu/be/solution-discovery.md
- bff: /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/nghiem-thu-bff-endpoints.md
- design compact: /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/nghiem-thu/handoff/design-compact.md
- STATUS: /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/nghiem-thu/STATUS.md
