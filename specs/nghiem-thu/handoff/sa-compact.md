# Handoff compact — sa

schemaVersion: 1
feature: nghiem-thu
packKind: list
role: sa
status: done
skillVersion: 2026.08.25.01
writtenAt: 2026-09-20T01:00:00.000Z
taskId: task_1791e2ed
autoApprove: ON
changeScope: edit_page
contentHash: sha256:1044ba719edda88d256d5c2a780cd2293f2fab87e2a39acdbb86001fad6ff659
featureKind: B
formPattern: N/A
solution_confirm: approve
planCite: docs/plan/nghiem-thu-mau/{README,MAU-10,CHI-SO,SCHEMA}.md

## Decisions
- changeScope: edit_page · keep list chrome + Mobile.Bff · § Delta = MAU-10 Label + ResultCode + Schema_NghiemThuMau
- formPattern: N/A list · scores/Result write → create/detail siblings pending_confirm
- be: Linm.RMMS.WebService · Patrol · `api/v1/patrol/nghiem-thu` · **cấm ERP.***
- BFF: Mobile.Bff catch-all · proxy only · **cấm** NT controller / invent path
- schema_choice: **child_table** · parent ResultCode/ResultNote/Work* · child `rmms_nghiem_thu_score` · **cấm** JSON blob parent
- migration: Schema_NghiemThuMau flag=**yes** · Step 4b SKIP this role · TL/Dev pair CLI
- list DTO: TemplateLabel · ResultCode (null ẩn) · scores OUT list
- init-data: statuses + templateTypes(label MAU-10 + criteria) + resultCodes pass/fail/deduct
- gates: TZ=**required** · XCO=**required** · SHARE=**tenant_keep**
- offline/GPS/camera/files: OUT list P1 · fail→toast · FileService siblings
- solution_confirm: **approve** · e2eQa queued QA only

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| search | Tìm mẫu… | SearchField | API-01 ?search= |
| rowCode | NT-* | Text | Code |
| rowSub | Label MAU-10 · tuyến · Km | Text | TemplateLabel·Route·Km |
| rowStatus | Nháp/… | Badge | API-00 statuses |
| rowResult | Đạt/Không đạt/Khấu trừ | Badge | ResultCode · ẩn null |
| navCreate | Tạo | TextButton | local → create |
| rowTap | Chi tiết | ListRow | local → detail + Id |
| empty/toast | — | EmptyChrome/Toast | 0 / fail |

## Screens / zones (ids only)
- DES-MOB-NGHIEM-THU · `#sc-nghiem-thu` · DES-MOB-NT-SEARCH · DES-MOB-NT-STATUS · DES-MOB-NT-RESULT · hub `#row-nghiem-thu`
- reviewUrlIos=`…/prototype/ios/index.html` · reviewUrlAndroid=`…/prototype/android/index.html`
- peerStdUrl=`http://localhost:9304/patrol` · **cấm** mfeStdUrl native

## API / tasks (ids only)
- FormMode↔API: List→API-01 · Lookups→API-00 · C/E/V/D/Files/Scores→OUT siblings
- Entity/migration: Schema_NghiemThuMau · migration=**yes** · SA Step4b SKIP
- TZ/XCO/SHARE: required / required / tenant_keep
- Perm: patrol.nghiem-thu.read (list)
- next: `/agent-team-lead-mobile` · devSlash `/agent-dev-ios`+`/agent-dev-android`

## UNCLEAR
- none

## Full paths (Read only if needed)
- solution: /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/nghiem-thu/be/solution-discovery.md
- bff: /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/nghiem-thu-bff-endpoints.md
- design compact: /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/nghiem-thu/handoff/design-compact.md
- SCHEMA: /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/docs/plan/nghiem-thu-mau/SCHEMA.md
- STATUS: /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/nghiem-thu/STATUS.md
