# Handoff compact — design

schemaVersion: 1
feature: nghiem-thu
packKind: list
role: design
status: done
skillVersion: 2026.08.25.01
writtenAt: 2026-09-19T15:50:00.000Z
taskId: task_059c4327
autoApprove: ON
changeScope: edit_page
contentHash: sha256:a635f3f55a8bedd952c4449056cf072a8eda890eda2b30a45e84bda5d7bf3859
formPattern: N/A
real_view_parity: v1

## Decisions
- changeScope: edit_page · keep web Full-page Kind B · delta = native list only
- formPattern: N/A list · create/detail siblings pending_confirm
- dual proto ios/ + android/ · hash skip · **cấm** re-scan demo
- design_confirm: **approve** (autoApprove ON)
- mfe / be: Mobile.Bff catch-all · BE Patrol live · **cấm ERP.*** · **cấm** mfeStdUrl native
- open questions: none

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| navBack | Tuần đường | BackButton | patrol-home |
| title | Công tác nghiệm thu | TopBar | fixed |
| navCreate | Tạo | TextButton | → create |
| search | Tìm mẫu nghiệm thu… | SearchField | ?search= |
| rowCode | NT-* | Text | Code |
| rowSub | Mẫu · tuyến · Km | Text | Template·Route·Km |
| rowStatus | Nháp/…/Hoàn thành/Hủy | Badge | init-data |
| rowTap | Chi tiết | ListRow | → detail + Id |
| empty | Chưa có phiếu… | EmptyChrome | 0 items |
| toastFail | Không tải được… | Toast | fail/offline |

## Screens / zones (ids only)
- DES-MOB-NGHIEM-THU · `#sc-nghiem-thu` · DES-MOB-NT-SEARCH · hub `#row-nghiem-thu`
- reviewUrlIos=`file:///Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/nghiem-thu/ui/prototype/ios/index.html`
- reviewUrlAndroid=`file:///Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/nghiem-thu/ui/prototype/android/index.html`
- peerStdUrl=`http://localhost:9304/patrol`
- formPattern=N/A · real_view_parity=v1 · Leave=N/A list

## API / tasks (ids only)
- GET `mobile-bff/api/v1/patrol/nghiem-thu` · init-data · **cấm invent**
- next: `/agent-sa-mobile` · proxy keep · no MIG · then TL → Dev dual → QA e2e-mobile

## UNCLEAR
- none

## Full paths (Read only if needed)
- design: /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/nghiem-thu/ui/design.md
- ux-analy: /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/nghiem-thu/ui/ux-analy.md
- html-to-native-map: /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/nghiem-thu/ui/html-to-native-map.md
- demo-parity: /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/nghiem-thu/ui/review/demo-parity.md
- ios: /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/nghiem-thu/ui/prototype/ios/index.html
- android: /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/nghiem-thu/ui/prototype/android/index.html
- STATUS: /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/nghiem-thu/STATUS.md
