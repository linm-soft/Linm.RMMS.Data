# Handoff compact — data_analy

schemaVersion: 1
feature: patrol-checkin
packKind: sheet
role: data_analy
status: confirmed
skillVersion: 2026.08.25.01
writtenAt: 2026-09-12T12:38:16.000Z
taskId: task_7e0ff15b
slash: /agent-data-analy-mobile
mode: feature_context
changeScope: edit_page
autoApprove: ON

## Decisions
- edit_page NEW AutocodeTask · keep PO/Design artifacts · § Delta only
- DoD: FileService upload `files/*` · BE plan-points khi có · cấm fake lat/lng · cấm plan=GPS SSOT
- GAP-MOB-CI-PHOTO-UP-01 · GAP-MOB-CI-PLAN-BE-01 · GAP-MOB-BFF-FILE-01 (if NuGet missing)
- POST check-ins live · plan-points path đề xuất Kind E — SA chốt
- UI zones/kit unchanged · dual prototype keep
- phase_to: po (delta confirm)

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| sheet-checkin | Ghi điểm tuần | Sheet | DES-MOB-PAT-CHECKIN-SHEET |
| ci-match-banner | Đúng/Sai điểm | Banner | vs BE plan |
| plan/route/gps | readonly | Text | GPS live · plan BE |
| ci-content | Nội dung | TextArea | |
| ci-add-photo | Ảnh | PhotoRow | attachmentId |
| ci-btn-save | Ghi nhận | Primary | matchOk gate |
| sc-checkin-detail | Chi tiết | detail | file preview |

## Screens / zones (ids only)
- DES-MOB-PAT-CHECKIN-SHEET / #sheet-checkin
- DES-MOB-CI-DETAIL / #sc-checkin-detail
- DES-MOB-LOC-MISMATCH · DES-MOB-LEAVE · DES-MOB-GPS-DENY

## API / tasks (ids only)
- GET patrol/sessions · GET sessions/{id}
- POST sessions/{id}/check-ins (live)
- GET sessions/{id}/plan-points (GAP)
- files init/PUT/commit/object (FileService · GAP-MOB-BFF-FILE-01?)
- full: `_data-analy/patrol-checkin-*.md` · CTX patrol-checkin.md

## VERIFY
- 4 artifacts + compact + STATUS PASS · roleOnly data_analy
- cấm yarn build/e2e/start:std · cấm Step 4b
- next: /agent-po-mobile

## UNCLEAR
- none
