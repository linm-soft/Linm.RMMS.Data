# Handoff compact — design

schemaVersion: 1
feature: nghiem-thu-detail
packKind: sheet
role: design
status: done
skillVersion: 2026.08.25.01
writtenAt: 2026-09-19T19:45:00.000Z
taskId: task_69705146
autoApprove: ON
changeScope: edit_page
contentHash: sha256:250aebcbfb9a445c517a0c40f399fee82a5a00d524499e7310fd7feac0fb5380
formPattern: sheet→screen
real_view_parity: v1

## Decisions
- changeScope: edit_page · packKind **sheet** · Pattern sheet→screen `#sc-nghiem-thu-detail` · **cấm** new_page typed CRUD
- formPattern: sheet→screen · View + Edit cùng slug · leave-dirty Must (Thoát → View) · fail=toast
- COPY: display MAU-10 · proto `mau-02` **Vệ sinh / vá ổ gà mặt đường** · **cấm** «Mẫu nghiệm thu NN» · «Mẫu 03»
- n_a display **Không áp dụng** · scores catalog init-data · **cấm** hardcode 100+
- dual proto ios/ + android/ · hash skip · **cấm** re-scan demo
- design_confirm: **approve** (autoApprove ON) · ux-analy PASS · demo-parity Must=0
- mfe / be: native · BFF catch-all + files · Step 4b SKIP · **cấm ERP.*** · **cấm** mfeStdUrl · **cấm** invent detail / files-nt · DELETE OUT
- open questions: none

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| navClose | Đóng | BackButton | View → nghiem-thu |
| title | NT-* | TopBar | Code GET |
| navEdit | Sửa | TextButton | View → Edit cùng slug |
| navSave | Lưu | TextButton | PUT cùng slug |
| navCancel | Hủy | TextButton | discard → View · leave-dirty |
| templateRow | Mẫu | ListRow/Select | MAU-10 |
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
| leave | Huỷ thay đổi? | Modal | DES-MOB-LEAVE Must |

## Screens / zones (ids only)
- DES-MOB-NGHIEM-THU-DETAIL · `#sc-nghiem-thu-detail`
- DES-MOB-GPS-DENY · DES-MOB-LEAVE · `#sheet-mau` · `#sheet-result` · `#sheet-status`
- parent `#sc-nghiem-thu` · sibling `#sc-nghiem-thu-create` (navigate only · **cấm** start)
- reviewUrlIos=`file:///Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/nghiem-thu-detail/ui/prototype/ios/index.html`
- reviewUrlAndroid=`file:///Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/nghiem-thu-detail/ui/prototype/android/index.html`
- peerStdUrl=`http://localhost:9304/nghiem-thu/:id`
- formPattern=sheet→screen · real_view_parity=v1 · Leave=Must · Grid/Report=N/A

## API / tasks (ids only)
- GET `mobile-bff/api/v1/patrol/nghiem-thu/{id}`
- GET `mobile-bff/api/v1/patrol/nghiem-thu/init-data`
- PUT `mobile-bff/api/v1/patrol/nghiem-thu/{id}` · UpdateNghiemThuRequest
- files `mobile-bff/api/v1/files/*` · **cấm** invent path / enqueue · DELETE OUT
- next: `/agent-sa-mobile` · proxy keep · no MIG · then TL → Dev dual → QA e2e-mobile

## UNCLEAR
- none

## Full paths (Read only if needed)
- design: /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/nghiem-thu-detail/ui/design.md
- ux-analy: /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/nghiem-thu-detail/ui/ux-analy.md
- html-to-native-map: /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/nghiem-thu-detail/ui/html-to-native-map.md
- demo-parity: /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/nghiem-thu-detail/ui/review/demo-parity.md
- ios: /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/nghiem-thu-detail/ui/prototype/ios/index.html
- android: /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/nghiem-thu-detail/ui/prototype/android/index.html
- STATUS: /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/nghiem-thu-detail/STATUS.md
