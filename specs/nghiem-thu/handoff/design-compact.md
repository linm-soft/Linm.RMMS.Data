# Handoff compact — design

schemaVersion: 1
feature: nghiem-thu
packKind: list
role: design
status: done
skillVersion: 2026.08.25.01
writtenAt: 2026-09-20T00:55:00.000Z
taskId: task_5999afb9
autoApprove: ON
changeScope: edit_page
contentHash: sha256:1044ba719edda88d256d5c2a780cd2293f2fab87e2a39acdbb86001fad6ff659
formPattern: N/A
real_view_parity: v1
planCite: docs/plan/nghiem-thu-mau/{README,MAU-10,CHI-SO,SCHEMA}.md

## Decisions
- changeScope: edit_page · § Delta = MAU-10 Label + ResultCode badge · keep list chrome / ship base
- formPattern: N/A list · scores → create/detail siblings pending_confirm
- dual proto ios/ + android/ overlay · hash skip · **cấm** re-scan demo
- design_confirm: **approve** (autoApprove ON) · Must=0
- mfe / be: Mobile.Bff catch-all · BE Patrol live · Schema_NghiemThuMau → SA · **cấm ERP.*** · **cấm** mfeStdUrl native
- open questions: none

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| navBack | Tuần đường | BackButton | patrol-home |
| title | Công tác nghiệm thu | TopBar | fixed |
| navCreate | Tạo | TextButton | → create |
| search | Tìm mẫu nghiệm thu… | SearchField | ?search= |
| rowCode | NT-* | Text | Code |
| rowSub | Label MAU-10 · tuyến · Km | Text | TemplateLabel·Route·KmFrom |
| rowStatus | Nháp/…/Hoàn thành/Hủy | Badge | Status |
| rowResult | Đạt/Không đạt/Khấu trừ | Badge | ResultCode · ẩn null |
| rowTap | Chi tiết | ListRow | → detail + Id |
| empty | Chưa có phiếu… | EmptyChrome | 0 items |
| toastFail | Không tải được… | Toast | fail/offline |

## Screens / zones (ids only)
- DES-MOB-NGHIEM-THU · `#sc-nghiem-thu` · DES-MOB-NT-SEARCH · DES-MOB-NT-STATUS · DES-MOB-NT-RESULT · hub `#row-nghiem-thu`
- reviewUrlIos=`file:///Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/nghiem-thu/ui/prototype/ios/index.html`
- reviewUrlAndroid=`file:///Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/nghiem-thu/ui/prototype/android/index.html`
- peerStdUrl=`http://localhost:9304/patrol`
- formPattern=N/A · real_view_parity=v1 · Leave=N/A list

## API / tasks (ids only)
- GET `mobile-bff/api/v1/patrol/nghiem-thu` · init-data (MAU-10+ResultCodes) · **cấm invent**
- Schema_NghiemThuMau → SA · next `/agent-sa-mobile` · then TL → Dev dual → QA e2e-mobile

## UNCLEAR
- none

## Full paths (Read only if needed)
- design: /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/nghiem-thu/ui/design.md
- ux-analy: /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/nghiem-thu/ui/ux-analy.md
- html-to-native-map: /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/nghiem-thu/ui/html-to-native-map.md
- ios: /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/nghiem-thu/ui/prototype/ios/index.html
- android: /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/nghiem-thu/ui/prototype/android/index.html
- STATUS: /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/nghiem-thu/STATUS.md
