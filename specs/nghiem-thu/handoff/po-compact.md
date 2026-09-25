# Handoff compact — po

schemaVersion: 1
feature: nghiem-thu
packKind: list
role: po
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-09-20T00:50:00.000Z
taskId: task_44dce651
autoApprove: ON
changeScope: edit_page
contentHash: sha256:1044ba719edda88d256d5c2a780cd2293f2fab87e2a39acdbb86001fad6ff659
planCite: docs/plan/nghiem-thu-mau/{README,MAU-10,CHI-SO,SCHEMA}.md

## Decisions
- changeScope: edit_page · keep web + mobile list ship · § Delta = MAU-10 Label + ResultCode badge
- TemplateType value mau-01…10 GIỮ · Label MAU-10 · cấm «Mẫu nghiệm thu NN»
- List badge ResultCode pass/fail/deduct · null ẩn · scores[] owner create/detail
- packKind: list · Pattern: List + SearchField · FormMode: none on slug
- Grid AC / Report AC: **N/A** (native) · Leave: **N/A** list · fail=EmptyChrome+toast
- live GET `patrol/nghiem-thu` · init-data Statuses+TemplateTypes(criteria)+ResultCodes · **cấm** demoItems · **cấm** hardcode 100+ tiêu chí
- Schema_NghiemThuMau → SA · PO SKIP Step 4b
- Tạo → nghiem-thu-create · row → nghiem-thu-detail (pending_confirm · navigate only)
- mfe / be: native dual · Mobile.Bff catch-all · BE Patrol live · **cấm ERP.*** · web Field OUT queue
- open questions: none · optional status/route/template filter = P1 sheet

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| navBack | Tuần đường | BackButton | patrol-home |
| title | Công tác nghiệm thu | TopBar title | fixed |
| navCreate | Tạo | TextButton | → create sibling |
| search | Tìm mẫu nghiệm thu… | SearchField | ?search= |
| rowCode | NT-* | Text | Code |
| rowSub | Label MAU-10 · tuyến · Km | Text | TemplateLabel·Route·KmFrom |
| rowStatus | Nháp/Đang NT/Hoàn thành/Hủy | Badge | Status |
| rowResult | Đạt/Không đạt/Khấu trừ | Badge | ResultCode · ẩn null |
| rowTap | Chi tiết | ListRow | → detail + Id |
| empty | (trống) | EmptyChrome | 0 items |
| toastFail | (fail) | Toast | offline/4xx |

## Screens / zones (ids only)
- DES-MOB-NGHIEM-THU · `#sc-nghiem-thu` · hub `#row-nghiem-thu` (sub: 10 công việc BDTX)
- siblings: create/detail scores+MAU picker · pending_confirm · **cấm** start
- peerStdUrl= http://localhost:9304/patrol (web ref only · cấm mfeStdUrl native)
- reviewUrl= Design overlay Result + MAU-10 trên dual proto · hash skip
- Grid/Report AC= N/A · Leave= N/A list
- controlHint cite: `_data-analy/nghiem-thu-control-hint.md`
- devSlash: `/agent-dev-ios` + `/agent-dev-android`

## API / tasks (ids only)
- GET `mobile-bff/api/v1/patrol/nghiem-thu` · init-data (MAU-10+criteria+ResultCodes) · **cấm invent**
- Files OUT list · FileService guid · create/detail only
- Schema_NghiemThuMau → SA
- T-*: Design dual overlay → SA schema pair → Dev wire dual → QA e2e-mobile

## UNCLEAR
- none

## Full paths (Read only if needed)
- requirement: /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/nghiem-thu/po/requirement.md
- control-hint: /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/nghiem-thu-control-hint.md
- real-data: /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/nghiem-thu-real-data.md
- prior compact: /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/nghiem-thu/handoff/data_analy-compact.md
- STATUS: /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/nghiem-thu/STATUS.md
