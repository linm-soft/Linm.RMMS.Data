# Handoff compact — sa

schemaVersion: 1
feature: patrol-checkin
packKind: sheet
role: sa
status: confirmed
skillVersion: 2026.08.25.01
writtenAt: 2026-09-12T12:58:00.000Z
taskId: task_0bbb7f91
slash: /agent-sa-mobile
mode: feature_context
changeScope: edit_page
autoApprove: ON
e2eQa: ON
solution_confirm: approve
contentHash: sha256:patrol-checkin-control-hint-20260912-edit
bffContentHash: sha256:patrol-checkin-mobile-bff-20260912-edit

## Decisions
- edit_page · giữ UI kit/dual · delta bind File + plan-points
- GAP-MOB-BFF-01 POST check-ins: **closed/live** · body attachment ids
- GAP-MOB-CI-PHOTO-UP-01: PhotoRow → files init/PUT/commit → attachmentId[] · preview object JWT
- GAP-MOB-CI-PLAN-BE-01: Kind E `GET …/plan-points` · wire sẵn · interim session label · **cấm** plan=GPS SSOT
- GAP-MOB-CI-FAKE-GPS-01: live GPS only
- GAP-MOB-BFF-FILE-01: nếu NuGet thiếu → offline queue · TL `/init-bff-file` · **cấm** fake 200
- MATCH_RADIUS_M=50 · haversine vs BE plan nearest
- SHARE share_pending_tbe · TZ/XCO n/a · Step 4b pending TL/T-BE
- solution_confirm approve (autoApprove ON)
- phase_to: team_lead

## Screens / zones (ids only)
- DES-MOB-PAT-CHECKIN-SHEET / #sheet-checkin
- DES-MOB-CI-DETAIL / #sc-checkin-detail
- DES-MOB-LOC-MISMATCH · DES-MOB-LEAVE · DES-MOB-GPS-DENY
- #ci-match-banner · #ci-plan · #ci-gps · #ci-dist · #ci-content · #ci-photos · #ci-add-photo · #ci-save-btn

## API (ids only)
- GET patrol/sessions · GET sessions/{id} (live)
- GET sessions/{id}/plan-points (Kind E · GAP · T-BE)
- POST sessions/{id}/check-ins (live · attachmentId[])
- files init/PUT/commit/object (FileService · GAP-MOB-BFF-FILE-01?)
- full: be/solution-discovery.md · _data-analy/patrol-checkin-bff-endpoints.md

## Tasks đề xuất (TL)
- T-IOS-PAT-CI-DELTA · T-AND-PAT-CI-DELTA
- T-BE-PAT-PLAN-PTS · T-BE-PAT-CI-PHOTO · T-BFF-FILE-INIT · T-BE-PAT-CI-MIG?

## VERIFY
- solution-discovery + compact + STATUS PASS · roleOnly sa
- cấm yarn build/e2e/start:std · cấm Step 4b · cấm Write MFE/native
- next: /agent-tl-mobile

## UNCLEAR
- none
