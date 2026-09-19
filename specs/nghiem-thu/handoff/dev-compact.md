# Handoff compact — dev

schemaVersion: 1
feature: nghiem-thu
packKind: list
role: dev
status: done
skillVersion: 2026.08.25.01
writtenAt: 2026-09-19T16:05:00.000Z
taskId: task_00546351
autoApprove: ON
changeScope: edit_page
contentHash: sha256:a635f3f55a8bedd952c4449056cf072a8eda890eda2b30a45e84bda5d7bf3859
formPattern: N/A
featureKind: list-screen

## Decisions
- changeScope: edit_page · native list `#sc-nghiem-thu` dual iOS+Android · keep web
- formPattern: N/A list · create/detail siblings pending_confirm → toast only
- route_a: hub `#row-nghiem-thu` → list · Back patrol-home · tab field
- API: `GET mobile-bff/api/v1/patrol/nghiem-thu` + `init-data` · live-only · **cấm** demoItems
- BFF: catch-all keep · **no** NT controller invent · Step 4b **SKIP** · T-BE **n/a**
- Build: iOS xcodegen+xcodebuild iPhone 17 Pro **PASS** · Android assembleDebug **PASS** · BFF dotnet **PASS**
- e2eQa: queued `/agent-qa*` only · **cấm** mfeStdUrl / start:std this role
- open questions: none

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| navBack | Tuần đường | BackButton | pop hub |
| title | Công tác nghiệm thu | TopBar | fixed |
| navCreate | Tạo | TextButton | toast pending sibling |
| search | Tìm mẫu nghiệm thu… | SearchField | ?search= |
| rowCode | NT-* | Text | Code |
| rowSub | Mẫu · tuyến · Km | Text | Template·Route·Km |
| rowStatus | Nháp/… | Badge | init-data |
| rowTap | Chi tiết | ListRow | toast pending sibling |
| empty/toast | — | EmptyChrome/Toast | 0 / fail |

## Screens / zones (ids only)
- DES-MOB-NGHIEM-THU · `#sc-nghiem-thu` · DES-MOB-NT-SEARCH · hub `#row-nghiem-thu`
- reviewUrlIos=`…/prototype/ios/index.html` · reviewUrlAndroid=`…/prototype/android/index.html`
- peerStdUrl=`http://localhost:9304/patrol` · **cấm** mfeStdUrl native

## API / tasks (ids only)
- List→API-01 · Lookups→API-00 · C/E/V/D→OUT siblings
- T-IOS-NGHIEM-THU · T-AND-NGHIEM-THU **done**
- T-BE/T-BFF/T-KIT: **n/a**
- next: `/agent-qa*` · T-QA-NGHIEM-THU

## Debt
- create/detail screens pending_confirm
- Auth RequirePermission stub (KEEP web)
- Android assembleDebug may need ↑ heap on low-RAM hosts

## UNCLEAR
- none

## Full paths (Read only if needed)
- ios: /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/nghiem-thu/implement/ios.md
- android: /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/nghiem-thu/implement/android.md
- STATUS: /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/nghiem-thu/STATUS.md
