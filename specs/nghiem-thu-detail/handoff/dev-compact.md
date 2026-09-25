# Handoff compact — dev

schemaVersion: 1
feature: nghiem-thu-detail
packKind: sheet
role: dev
status: done
skillVersion: 2026.08.25.01
writtenAt: 2026-09-20T02:25:00.000Z
taskId: task_1621bc9e
autoApprove: ON
e2eQa: ON
changeScope: edit_page
formPattern: sheet→screen
route_confirm: route_a
contentHash: sha256:250aebcbfb9a445c517a0c40f399fee82a5a00d524499e7310fd7feac0fb5380
bffContentHash: sha256:nghiem-thu-detail-mobile-bff-20260919

## Decisions
- Dual native `#sc-nghiem-thu-detail` · list row → push View · Sửa/Lưu/Hủy cùng slug · Đóng → list refresh
- API reuse: GET `patrol/nghiem-thu/{id}` · GET init-data · PUT UpdateNghiemThuRequest · `files/*` MediaIds ≤10
- Scores catalog init-data · n_a=Không áp dụng · done thiếu ResultCode không PUT · GPS chặn Lưu · leave-dirty → View
- **cấm** enqueue Lưu/files/scores · invent path · mfeStdUrl · ERP.* · DELETE · Step 4b
- T-BE/T-BFF n/a · BFF verify-only PASS
- VERIFY: iOS xcodegen+xcodebuild iPhone 17 Pro PASS · Android assembleDebug PASS · BFF dotnet build PASS
- open questions: none
- chain: không (roleOnly=dev · GAP-PKT-ROLE-01) · QA e2e queued

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| navClose | Đóng | BackButton | View → nghiem-thu |
| title | NT-* | TopBar | Code GET |
| navEdit/navSave/navCancel | Sửa · Lưu · Hủy | TextButton | cùng slug · leave-dirty |
| templateRow | Mẫu | ListRow/Select | `#sheet-mau` |
| resultRow/resultNote | Kết quả · ghi chú | Select/Text | `#sheet-result` |
| scoreList | Tiêu chí | Checklist | pass/fail/n_a |
| routeRow/kmRow/fieldRow | Tuyến · Km · Hiện trường | ListRow+GPS | GPS deny |
| statusRow | Trạng thái | Select | `#sheet-status` · done⇒ResultCode |
| workTime/note/attach | Thời gian · Ghi chú · Ảnh | DateTime/Text/Photo | MediaIds max 10 |

## Screens / zones (ids only)
- DES-MOB-NGHIEM-THU-DETAIL · `#sc-nghiem-thu-detail`
- DES-MOB-GPS-DENY · DES-MOB-LEAVE · `#sheet-mau` · `#sheet-result` · `#sheet-status`
- parent `#sc-nghiem-thu` · sibling create navigate only
- mfeStdUrl=—
- reviewUrlIos=`file:///Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/nghiem-thu-detail/ui/prototype/ios/index.html`
- reviewUrlAndroid=`file:///Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/nghiem-thu-detail/ui/prototype/android/index.html`

## API / tasks (ids only)
- FormMode↔API: View→GET/{id}+init+files · Edit Lưu→PUT
- T-IOS-NGHIEM-THU-DETAIL **done** · T-AND-NGHIEM-THU-DETAIL **done**
- T-BE/T-BFF/T-KIT **n/a** · debt: none ship

## UNCLEAR
- none

## Full paths (Read only if needed)
- ios: /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/nghiem-thu-detail/implement/ios.md
- android: /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/nghiem-thu-detail/implement/android.md
- STATUS: /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/nghiem-thu-detail/STATUS.md

## Next
| Role | Need |
|------|------|
| QA | `/agent-qa-mobile` · e2e queued · leave/GPS/toast · store `qa/store/nghiem-thu-detail` |
| Review | after QA |
