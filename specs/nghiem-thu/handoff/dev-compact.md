# Handoff compact — dev

schemaVersion: 1
feature: nghiem-thu
packKind: list
role: dev
status: done
skillVersion: 2026.08.25.01
writtenAt: 2026-09-20T01:30:00.000Z
taskId: task_cdb487a6
autoApprove: ON
changeScope: edit_page
contentHash: sha256:1044ba719edda88d256d5c2a780cd2293f2fab87e2a39acdbb86001fad6ff659
formPattern: N/A
featureKind: list-screen
mfeStdUrl: http://localhost:9304/nghiem-thu

## Decisions
- changeScope: edit_page · list overlay MAU-10 Label + ResultCode · keep web · keep list chrome
- formPattern: N/A list · scores/write → create/detail siblings pending_confirm · toast only
- route_a: keep · hub `#row-nghiem-thu` → list · Back patrol-home · **cấm** mfeStdUrl native
- API: `GET mobile-bff/api/v1/patrol/nghiem-thu` + `init-data` · TemplateLabel · ResultCode · resultCodes · live-only
- BFF: catch-all keep · **no** NT controller · T-BFF **n/a**
- Step 4b: migration `Schema_NghiemThuMau` (`20260919180443`) · child `rmms_nghiem_thu_score` · parent Result* · Work* · **cấm ERP.***
- Build: iOS xcodegen+xcodebuild iPhone 17 Pro **PASS** · Android assembleDebug **PASS** · BFF+API dotnet **PASS**
- e2eQa: queued `/agent-qa*` only · **cấm** start:std this role
- open questions: none

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| navBack | Tuần đường | BackButton | pop hub |
| title | Công tác nghiệm thu | TopBar | fixed |
| navCreate | Tạo | TextButton | toast pending sibling |
| search | Tìm mẫu nghiệm thu… | SearchField | ?search= |
| rowCode | NT-* | Text | Code |
| rowSub | Label MAU-10 · tuyến · Km | Text | TemplateLabel·Route·Km |
| rowStatus | Nháp/… | Badge | init-data |
| rowResult | Đạt/Không đạt/Khấu trừ | Badge | ResultCode · ẩn null |
| rowTap | Chi tiết | ListRow | toast pending sibling |
| empty/toast | — | EmptyChrome/Toast | 0 / fail |

## Screens / zones (ids only)
- DES-MOB-NGHIEM-THU · `#sc-nghiem-thu` · DES-MOB-NT-SEARCH · DES-MOB-NT-STATUS · DES-MOB-NT-RESULT · hub `#row-nghiem-thu`
- reviewUrlIos=`…/prototype/ios/index.html` · reviewUrlAndroid=`…/prototype/android/index.html`
- peerStdUrl=`http://localhost:9304/patrol` · mfeStdUrl web only · **cấm** native

## API / tasks (ids only)
- List→API-01 TemplateLabel+ResultCode · Lookups→API-00 MAU-10+resultCodes · C/E/V/D/Scores→OUT siblings
- T-BE-MIG · T-BE-API **done** · T-IOS-NGHIEM-THU · T-AND-NGHIEM-THU **done**
- T-BFF / T-KIT new component: **n/a** (optional `secondaryBadge` on existing LinmListRow)
- next: `/agent-qa*` · T-QA-NGHIEM-THU

## Debt
- create/detail screens pending_confirm
- criteria catalog: CHI-SO mau-02 full · other mẫu one line
- Auth RequirePermission stub (KEEP) · migrate apply env (KEEP)
- **cấm** e2e this role

## UNCLEAR
- none

## Full paths (Read only if needed)
- ios: /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/nghiem-thu/implement/ios.md
- android: /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/nghiem-thu/implement/android.md
- migration: /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.WebService/api/shared/RMMS.Service.Migrations/Migrations/20260919180443_Schema_NghiemThuMau.cs
- STATUS: /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/nghiem-thu/STATUS.md
