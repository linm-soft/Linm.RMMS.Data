# Handoff compact — team_lead

schemaVersion: 1
feature: nghiem-thu-detail
packKind: sheet
role: team_lead
status: done
skillVersion: 2026.08.25.01
writtenAt: 2026-09-19T19:08:00.000Z
taskId: task_289c880a
autoApprove: ON
e2eQa: ON
changeScope: edit_page
contentHash: sha256:250aebcbfb9a445c517a0c40f399fee82a5a00d524499e7310fd7feac0fb5380
bffContentHash: sha256:nghiem-thu-detail-mobile-bff-20260919
formPattern: sheet→screen
route_confirm: route_a
featureKind: sheet-detail

## Decisions
- changeScope: edit_page · packKind **sheet** · View+Edit cùng slug `#sc-nghiem-thu-detail`
- formPattern: sheet→screen · TopBar + ListRows · leave-dirty Must · fail=toast
- route_a: list `#sc-nghiem-thu` row → push detail View · Sửa/Lưu/Hủy cùng slug · Đóng → list · tab patrol · **cấm** mfeStdUrl
- ios/android_repo: reuse dual · screen detail chưa có · scaffold **không** `/mobile-app-architecture`
- kit_missing_confirm: N/A · T-KIT **n/a** · cite `ui/html-to-native-map.md` · LinmTokens
- T-BE-*/T-BFF: **n/a** · GET/{id}+init+PUT+files live · migration=none · Step 4b SKIP · **cấm ERP.***
- SA map: T-NTD-01→T-IOS · T-NTD-02→T-AND · 03/04 ∈ dual · 05 DOMAIN-MAP cite · DELETE OUT
- autoApprove ON · e2eQa ON queued `/agent-qa*` only
- open questions: none
- chain: không (roleOnly=team_lead · GAP-PKT-ROLE-01)

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| navClose | Đóng | BackButton | View → nghiem-thu |
| title | NT-* | TopBar | Code GET |
| navEdit | Sửa | TextButton | View → Edit cùng slug |
| navSave | Lưu | TextButton | PUT cùng slug |
| navCancel | Hủy | TextButton | discard → View · leave-dirty |
| templateRow | Mẫu | ListRow/Select | MAU-10 · `#sheet-mau` |
| resultRow | Kết quả | Select | pass/fail/deduct · `#sheet-result` |
| resultNote | Ghi chú kết quả | Text | ResultNote |
| scoreList | Tiêu chí | Checklist | scores[] · n_a |
| routeRow/kmRow/fieldRow | Tuyến · Km · Hiện trường | ListRow+GPS | Route · Km · FieldInfo |
| statusRow | Trạng thái | Select | `#sheet-status` · done⇒ResultCode |
| workTime/note | Thời gian · Ghi chú | DateTime/Text | optional |
| attachRow | Đính kèm | PhotoRow/files | MediaIds max 10 |
| assignee/inspectedAt | (ẩn) | derived | PUT required |
| toast/leave/gps | — | Toast/Modal | DES-MOB-LEAVE · GPS-DENY |

## Screens / zones (ids only)
- DES-MOB-NGHIEM-THU-DETAIL · `#sc-nghiem-thu-detail`
- DES-MOB-GPS-DENY · DES-MOB-LEAVE · `#sheet-mau` · `#sheet-result` · `#sheet-status`
- parent `#sc-nghiem-thu` · sibling `#sc-nghiem-thu-create` navigate only
- reviewUrlIos=`file:///Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/nghiem-thu-detail/ui/prototype/ios/index.html`
- reviewUrlAndroid=`file:///Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/nghiem-thu-detail/ui/prototype/android/index.html`
- peerStdUrl=`http://localhost:9304/nghiem-thu/:id`

## API / tasks (ids only)
- FormMode↔API: View→GET/{id}+init+files · Edit save→PUT UpdateNghiemThuRequest
- **T-IOS-NGHIEM-THU-DETAIL** · deps SA+route_a · **devSlash** `/agent-dev-ios` · `/ios-new-screen` · `/dev-ios-swiftui` · leave-confirm
- **T-AND-NGHIEM-THU-DETAIL** · deps SA+route_a · **devSlash** `/agent-dev-android` · `/android-new-screen` · `/dev-android-compose`
- T-BE-API / T-BE-MIG / T-BFF / T-KIT: **n/a**
- T-QA-NGHIEM-THU-DETAIL · T-QA-TAB-01 (cite) · serial Dev iOS→Android
- **cấm** enqueue Lưu/files/scores · invent detail/files-nt

## UNCLEAR
- none

## Full paths (Read only if needed)
- task: /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/nghiem-thu-detail/task/nghiem-thu-detail.md
- sa compact: /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/nghiem-thu-detail/handoff/sa-compact.md
- design compact: /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/nghiem-thu-detail/handoff/design-compact.md
- STATUS: /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/nghiem-thu-detail/STATUS.md

## Next
| Role | Need |
|------|------|
| Dev | `/agent-dev-ios` · T-IOS-NGHIEM-THU-DETAIL → `/agent-dev-android` · T-AND |
| QA | e2e queued `/agent-qa-mobile` |

## Cấm (compact)
ERP.* · invent API · fork DTO · enqueue Lưu/files/scores · Schema_*/Step 4b/e2e/build/start:std ở TL · Write native · mfeStdUrl · start sibling list/create
