# Handoff compact — po

schemaVersion: 1
feature: nghiem-thu-detail
packKind: sheet
role: po
status: done
skillVersion: 2026.08.25.01
writtenAt: 2026-09-19T19:15:00.000Z
taskId: task_64a693da
autoApprove: ON
changeScope: edit_page
contentHash: sha256:250aebcbfb9a445c517a0c40f399fee82a5a00d524499e7310fd7feac0fb5380

## Decisions
- changeScope: edit_page · packKind **sheet** · Pattern sheet→screen `#sc-nghiem-thu-detail` · **cấm** new_page typed CRUD
- formPattern: sheet→screen · FormMode View + Edit cùng slug · **cấm** Full list/create trên slug
- Grid AC / Report AC: **N/A** · Leave: **Must** leave-dirty modal (Edit dirty) · fail=toast
- mở=`GET` · Lưu=`PUT` · mediaIds guid max 10 · Label MAU-10 · scores catalog · GPS deny reuse · **cấm** enqueue Lưu/files/scores
- mfe / be: native dual · Mobile.Bff catch-all + files · BE Patrol live · Step 4b SKIP · **cấm ERP.***
- open questions: none · GAP-MOB-NT-DETAIL-01 = Design gen screen · DELETE OUT P1

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| navClose | Đóng | BackButton | View → nghiem-thu |
| title | NT-* | TopBar title | Code từ GET |
| navEdit | Sửa | TextButton | View → Edit · cùng slug |
| navSave | Lưu | TextButton | PUT · cùng slug |
| navCancel | Hủy | TextButton | discard → View · leave-dirty |
| templateRow | Mẫu | ListRow/Select | TemplateLabel MAU-10 · mau-01…10 |
| resultRow | Kết quả | Select | pass/fail/deduct |
| resultNote | Ghi chú kết quả | Text | ResultNote |
| scoreList | Tiêu chí | Checklist | scores[] · n_a |
| routeRow/kmRow/fieldRow | Tuyến · Km · Hiện trường | ListRow+GPS | Route · Km · FieldInfo |
| statusRow | Trạng thái | Select | done ⇒ ResultCode |
| workTime/note | Thời gian · Ghi chú | DateTime/Text | optional |
| attachRow | Đính kèm | PhotoRow/files | MediaIds max 10 |
| assignee/inspectedAt | (ẩn) | derived | PUT required |
| toastOk/Fail | Đã lưu · NT-* | Toast | **cấm** alert |
| gpsDeny | Định vị bị tắt | Modal | DES-MOB-GPS-DENY |

## Screens / zones (ids only)
- DES-MOB-NGHIEM-THU-DETAIL · `#sc-nghiem-thu-detail`
- parent `#sc-nghiem-thu` · sibling `#sc-nghiem-thu-create` (navigate only · **cấm** start)
- peerStdUrl= web `/nghiem-thu/:id` (ref only · **cấm** mfeStdUrl native)
- reviewUrl= (Design mobile sau)
- Grid/Report AC= N/A · Leave= leave-dirty Must
- controlHint cite: `_data-analy/nghiem-thu-detail-control-hint.md`
- Pattern: sheet→screen · View/Edit · TopBar + ListRows
- devSlash: `/agent-dev-ios` + `/agent-dev-android`

## API / tasks (ids only)
- GET `mobile-bff/api/v1/patrol/nghiem-thu/{id}`
- GET `mobile-bff/api/v1/patrol/nghiem-thu/init-data`
- PUT `mobile-bff/api/v1/patrol/nghiem-thu/{id}` · UpdateNghiemThuRequest
- files `mobile-bff/api/v1/files/*` · **cấm** invent nghiem-thu-detail / files-nt
- DELETE OUT P1 · **cấm** enqueue Lưu/files/scores
- T-*: Design dual proto → SA proxy keep · Step 4b SKIP → Dev wire dual → QA e2e-mobile

## UNCLEAR
- none

## Full paths (Read only if needed)
- requirement: /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/nghiem-thu-detail/po/requirement.md
- control-hint: /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/nghiem-thu-detail-control-hint.md
- real-data: /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/nghiem-thu-detail-real-data.md
- prior compact: /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/nghiem-thu-detail/handoff/data_analy-compact.md
- STATUS: /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/nghiem-thu-detail/STATUS.md
