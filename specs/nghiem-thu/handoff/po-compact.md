# Handoff compact — po

schemaVersion: 1
feature: nghiem-thu
packKind: list
role: po
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-09-19T15:45:00.000Z
taskId: task_da538308
autoApprove: ON
changeScope: edit_page
contentHash: sha256:a635f3f55a8bedd952c4449056cf072a8eda890eda2b30a45e84bda5d7bf3859

## Decisions
- changeScope: edit_page · keep web Full-page confirmed · § Delta = native list only
- packKind: list · Pattern: List + SearchField · FormMode: none on slug
- Grid AC / Report AC: **N/A** (native) · Leave: **N/A** list · fail=EmptyChrome+toast
- live GET `patrol/nghiem-thu` · init-data badges · **cấm** demoItems
- Tạo → nghiem-thu-create · row → nghiem-thu-detail (pending_confirm · navigate only)
- mfe / be: native dual · Mobile.Bff catch-all · BE Patrol live · Step 4b N/A · **cấm ERP.***
- open questions: none · optional status/route/template filter = P1 sheet

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| navBack | Tuần đường | BackButton | patrol-home |
| title | Công tác nghiệm thu | TopBar title | fixed |
| navCreate | Tạo | TextButton | → create sibling |
| search | Tìm mẫu nghiệm thu… | SearchField | ?search= |
| rowCode | NT-* | Text | Code |
| rowSub | Mẫu · tuyến · Km | Text | Template·Route·Km |
| rowStatus | Nháp/Đang NT/Hoàn thành/Hủy | Badge | init-data |
| rowTap | Chi tiết | ListRow | → detail + Id |
| empty | (trống) | EmptyChrome | 0 items |
| toastFail | (fail) | Toast | offline/4xx |

## Screens / zones (ids only)
- DES-MOB-NGHIEM-THU · `#sc-nghiem-thu` · hub `#row-nghiem-thu`
- siblings: `#sc-nghiem-thu-create` · detail (pending_confirm)
- peerStdUrl= http://localhost:9304/patrol (web ref only · cấm mfeStdUrl native)
- reviewUrl= (Design mobile sau)
- Grid/Report AC= N/A · Leave= N/A list
- controlHint cite: `_data-analy/nghiem-thu-control-hint.md`
- devSlash: `/agent-dev-ios` + `/agent-dev-android`

## API / tasks (ids only)
- GET `mobile-bff/api/v1/patrol/nghiem-thu` · init-data · **cấm invent**
- Files OUT list · create/detail siblings pending_confirm
- T-*: Design dual proto → SA proxy keep → Dev wire dual → QA e2e-mobile

## UNCLEAR
- none

## Full paths (Read only if needed)
- requirement: /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/nghiem-thu/po/requirement.md
- control-hint: /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/nghiem-thu-control-hint.md
- real-data: /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/nghiem-thu-real-data.md
- prior compact: /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/nghiem-thu/handoff/data_analy-compact.md
- STATUS: /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/nghiem-thu/STATUS.md
