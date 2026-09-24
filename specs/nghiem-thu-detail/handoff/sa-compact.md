# Handoff compact — sa

schemaVersion: 1
feature: nghiem-thu-detail
packKind: sheet
role: sa
status: done
skillVersion: 2026.08.25.01
workflowVersion: 2026.09.19.5
rulesVersion: 2026.09.19.7
writtenAt: 2026-09-19T20:10:00.000Z
taskId: task_1f6caf97
autoApprove: ON
e2eQa: ON
solution_confirm: approve
changeScope: edit_page
formPattern: sheet→screen
domain: Patrol · api/v1/patrol/nghiem-thu/{id}
bff: Mobile.Bff catch-all · mobile-bff/api/v1
entity: NghiemThuEntity · NghiemThuScoreEntity · NghiemThuMediaEntity · migration=none
sa_tz_gate: tz_required
sa_xco_gate: xco_get_only
sa_shared_table: share_tenant
contentHashPrior: sha256:250aebcbfb9a445c517a0c40f399fee82a5a00d524499e7310fd7feac0fb5380
bffContentHashPrior: sha256:nghiem-thu-detail-mobile-bff-20260919

## Decisions
- changeScope=edit_page · packKind=sheet · sheet→screen View+Edit cùng slug
- API giữ `patrol/nghiem-thu/{id}` · init-data · files/* · BFF proxy · **cấm** invent detail/files-nt · **cấm ERP.***
- FormMode↔API: View → GET/{id} + init-data + files resign · Edit Lưu → PUT UpdateNghiemThuRequest
- Persist: scalars + Scores[] child + MediaIds guid[] · no parent JSON · Step 4b **SKIP**
- Offline: **cấm** enqueue Lưu/files/scores · GPS live · PrivacyInfo location+photos
- Gates: tz_required · xco_get_only · share_tenant · solution_confirm **approve**
- DELETE OUT P1 · list/create **cấm** start
- open questions: none

## Inventory (slim)
| id | label | controlHint | write |
|----|-------|-------------|-------|
| title | NT-* | TopBar | Code read · GET |
| templateRow | Mẫu | ListRow/Select | TemplateType · init-data |
| resultRow | Kết quả | Select | ResultCode |
| resultNote | Ghi chú kết quả | Text | ResultNote |
| scoreList | Tiêu chí | Checklist | Scores[] · n_a |
| routeRow/kmRow/fieldRow | Tuyến · Km · Hiện trường | ListRow+GPS | Route · Km · FieldInfo |
| statusRow | Trạng thái | Select | Status · done⇒ResultCode |
| workTime/note | Thời gian · Ghi chú | DateTime/Text | Work* · Note |
| attachRow | Đính kèm | PhotoRow/files | MediaIds max 10 |
| navSave | Lưu | TextButton | PUT cùng slug |
| navEdit/navCancel/navClose | Sửa · Hủy · Đóng | local | leave-dirty · → nghiem-thu |
| assignee/inspectedAt | (ẩn) | derived | PUT required |

## Screens / zones (ids only)
- DES-MOB-NGHIEM-THU-DETAIL · `#sc-nghiem-thu-detail`
- DES-MOB-GPS-DENY · DES-MOB-LEAVE · `#sheet-mau` · `#sheet-result` · `#sheet-status`
- parent `#sc-nghiem-thu` · sibling `#sc-nghiem-thu-create` navigate only
- reviewUrlIos=`file:///Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/nghiem-thu-detail/ui/prototype/ios/index.html`
- reviewUrlAndroid=`file:///Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/nghiem-thu-detail/ui/prototype/android/index.html`
- peerStdUrl=`http://localhost:9304/nghiem-thu/:id` · **cấm** mfeStdUrl
- Grid/Report=N/A · Leave=Must

## API / tasks (ids only)
- FormMode↔API: View ↔ API-02 GET + API-01 init + API-04 files · Edit save ↔ API-03 PUT
- T-NTD-01..05 → TL (iOS·Android·Privacy·leave/GPS·DOMAIN-MAP)
- entity/migration=none · Step 4b SKIP · DELETE OUT

## UNCLEAR
- none

## Full paths (Read only if needed)
- solution: /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/nghiem-thu-detail/be/solution-discovery.md
- design compact: /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/nghiem-thu-detail/handoff/design-compact.md
- bff: /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/nghiem-thu-detail-bff-endpoints.md
- real-data: /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/nghiem-thu-detail-real-data.md
- STATUS: /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/nghiem-thu-detail/STATUS.md

## Next
| Role | Need |
|------|------|
| TL | task/nghiem-thu-detail.md · T-NTD-* · dual Dev |
| Dev | wire §B · prefix mobile-bff · **cấm** demo toast SSOT |
| QA | e2e queued /agent-qa* |

## Cấm (compact)
ERP.* · invent API · fork DTO · enqueue Lưu/files/scores · Schema_*/Step 4b/e2e/build/start:std ở SA · Write MFE/native · localhost runtime
