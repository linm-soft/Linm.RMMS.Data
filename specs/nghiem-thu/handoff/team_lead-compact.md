# Handoff compact — team_lead

schemaVersion: 1
feature: nghiem-thu
packKind: list
role: team_lead
status: done
skillVersion: 2026.08.25.01
writtenAt: 2026-09-19T16:05:00.000Z
taskId: task_b4b91c07
autoApprove: ON
changeScope: edit_page
contentHash: sha256:a635f3f55a8bedd952c4449056cf072a8eda890eda2b30a45e84bda5d7bf3859
formPattern: N/A
route_confirm: route_a
featureKind: list-screen

## Decisions
- changeScope: edit_page · keep web Kind B · delta = native list `#sc-nghiem-thu`
- formPattern: N/A list · create/detail siblings pending_confirm · navigate only
- route_a: hub `#row-nghiem-thu` → push list · Back patrol-home · tab patrol · **cấm** mfeStdUrl
- ios/android_repo: reuse dual · scaffold **không** `/mobile-app-architecture`
- kit_missing_confirm: N/A · T-KIT **n/a**
- T-BE-*/T-BFF: **n/a** · API-01+init live · migration=no · Step 4b SKIP · **cấm ERP.***
- autoApprove ON · e2eQa ON queued `/agent-qa*` only
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
| rowSub | Mẫu · tuyến · Km | Text | Template·Route·Km |
| rowStatus | Nháp/… | Badge | init-data |
| rowTap | Chi tiết | ListRow | → detail + Id |
| empty/toast | — | EmptyChrome/Toast | 0 / fail |

## Screens / zones (ids only)
- DES-MOB-NGHIEM-THU · `#sc-nghiem-thu` · DES-MOB-NT-SEARCH · hub `#row-nghiem-thu`
- reviewUrlIos=`…/prototype/ios/index.html` · reviewUrlAndroid=`…/prototype/android/index.html`
- peerStdUrl=`http://localhost:9304/patrol`

## API / tasks (ids only)
- FormMode↔API: List→API-01 · Lookups→API-00 · C/E/V/D/Files→OUT siblings
- **T-IOS-NGHIEM-THU** · deps SA+route_a · **devSlash** `/agent-dev-ios` · `/ios-new-screen` · `/dev-ios-swiftui`
- **T-AND-NGHIEM-THU** · deps SA+route_a · **devSlash** `/agent-dev-android` · `/android-new-screen` · `/dev-android-compose`
- T-BE-API / T-BE-MIG / T-BFF / T-KIT: **n/a**
- T-QA-NGHIEM-THU · T-QA-TAB-01 (cite) · serial Dev iOS→Android
- enqueue sibling: none (pending_confirm)

## UNCLEAR
- none

## Full paths (Read only if needed)
- task: /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/nghiem-thu/task/nghiem-thu.md
- sa compact: /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/nghiem-thu/handoff/sa-compact.md
- design compact: /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/nghiem-thu/handoff/design-compact.md
- STATUS: /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/nghiem-thu/STATUS.md
