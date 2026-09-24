# Handoff compact — team_lead

schemaVersion: 1
feature: nghiem-thu
packKind: list
role: team_lead
status: done
skillVersion: 2026.08.25.01
writtenAt: 2026-09-19T18:10:00.000Z
taskId: task_e1131e78
autoApprove: ON
changeScope: edit_page
contentHash: sha256:1044ba719edda88d256d5c2a780cd2293f2fab87e2a39acdbb86001fad6ff659
formPattern: N/A
route_confirm: route_a
featureKind: list-screen
planCite: docs/plan/nghiem-thu-mau/{README,MAU-10,CHI-SO,SCHEMA}.md

## Decisions
- changeScope: edit_page · keep web Kind B + list chrome ship · § Delta = MAU-10 Label + ResultCode + Schema_NghiemThuMau
- formPattern: N/A list · scores/write → create/detail siblings pending_confirm · navigate only
- route_a: **keep** · không URL mới · hub `#row-nghiem-thu` → push list · Back patrol-home · tab patrol · **cấm** mfeStdUrl
- ios/android_repo: reuse dual · scaffold **không** `/mobile-app-architecture` · kit_missing_confirm=N/A · T-KIT **n/a**
- schema_choice: **child_table** · migration=**yes** · T-BE-MIG + T-BE-API **pending Dev** · Step 4b **SKIP TL** · T-BFF **n/a** · **cấm ERP.***
- list bind: TemplateLabel (cấm raw mau-0N / «Mẫu nghiệm thu NN») · ResultCode badge null ẩn · scores OUT list
- autoApprove ON · e2eQa ON queued `/agent-qa*` only · **cấm** e2e/start:std/build ở TL
- open questions: none
- chain: không (roleOnly=team_lead · GAP-PKT-ROLE-01)

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| navBack | Tuần đường | BackButton | patrol-home |
| title | Công tác nghiệm thu | TopBar | fixed |
| navCreate | Tạo | TextButton | → create sibling |
| search | Tìm mẫu nghiệm thu… | SearchField | ?search= |
| rowCode | NT-* | Text | Code |
| rowSub | Label MAU-10 · tuyến · Km | Text | TemplateLabel·Route·KmFrom |
| rowStatus | Nháp/… | Badge | init-data |
| rowResult | Đạt/Không đạt/Khấu trừ | Badge | ResultCode · ẩn null |
| rowTap | Chi tiết | ListRow | → detail + Id |
| empty/toast | — | EmptyChrome/Toast | 0 / fail |

## Screens / zones (ids only)
- DES-MOB-NGHIEM-THU · `#sc-nghiem-thu` · DES-MOB-NT-SEARCH · DES-MOB-NT-STATUS · DES-MOB-NT-RESULT · hub `#row-nghiem-thu`
- reviewUrlIos=`…/prototype/ios/index.html` · reviewUrlAndroid=`…/prototype/android/index.html`
- peerStdUrl=`http://localhost:9304/patrol`

## API / tasks (ids only)
- FormMode↔API: List→API-01 · Lookups→API-00 · C/E/V/D/Files/Scores→OUT siblings
- **T-BE-MIG** · Schema_NghiemThuMau · `/database-migration` · Dev Step 4b · `dotnet build` WebService
- **T-BE-API** · deps T-BE-MIG · TemplateLabel + ResultCode · init resultCodes + MAU-10 label
- **T-IOS-NGHIEM-THU** · deps T-BE-API+route_a · **devSlash** `/agent-dev-ios` · `/edit-mobile-feature` · `/dev-ios-swiftui`
- **T-AND-NGHIEM-THU** · deps T-IOS · **devSlash** `/agent-dev-android` · `/edit-mobile-feature` · `/dev-android-compose`
- T-BFF / T-KIT: **n/a**
- T-QA-NGHIEM-THU · T-QA-TAB-01 (cite) · serial BE → iOS → Android
- enqueue sibling: none (pending_confirm)

## UNCLEAR
- none

## Full paths (Read only if needed)
- task: /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/nghiem-thu/task/nghiem-thu.md
- sa compact: /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/nghiem-thu/handoff/sa-compact.md
- design compact: /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/nghiem-thu/handoff/design-compact.md
- solution: /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/nghiem-thu/be/solution-discovery.md
- STATUS: /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/nghiem-thu/STATUS.md
