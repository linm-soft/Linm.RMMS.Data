# Handoff compact — team_lead

schemaVersion: 1
feature: patrol-checkin
packKind: sheet
role: team_lead
status: confirmed
skillVersion: 2026.08.20.03
writtenAt: 2026-09-12T13:00:00.000Z
taskId: task_acb64415
slash: /agent-tl-mobile
mode: feature_context
changeScope: edit_page
autoApprove: ON
e2eQa: ON
contentHash: sha256:patrol-checkin-control-hint-20260912-edit
bffContentHash: sha256:patrol-checkin-mobile-bff-20260912-edit

## Decisions
- edit_page · route_a reuse · kit_skip yes · dual giữ · delta bind only
- T-IOS-PAT-CI-DELTA · T-AND-PAT-CI-DELTA (serial iOS→Android)
- T-BE-PAT-PLAN-PTS (Kind E plan-points) · T-BE-PAT-CI-PHOTO (attachmentId[]) · T-BE-PAT-CI-MIG?
- T-BFF-FILE-INIT nếu GAP-MOB-BFF-FILE-01 · else N/A
- GAP-MOB-BFF-01 POST check-ins closed/live · GAP-MOB-CI-FAKE-GPS-01 live only
- cấm plan=GPS SSOT · cấm fake 200 · MATCH_RADIUS_M=50
- Step 4b pending Dev/T-BE · cấm TL chạy
- phase_to: dev (/agent-dev-ios)

## Screens / zones (ids only)
- DES-MOB-PAT-CHECKIN-SHEET / #sheet-checkin
- DES-MOB-CI-DETAIL / #sc-checkin-detail
- DES-MOB-LOC-MISMATCH · DES-MOB-LEAVE · DES-MOB-GPS-DENY
- #ci-match-banner · #ci-plan · #ci-gps · #ci-dist · #ci-content · #ci-photos · #ci-add-photo · #ci-save-btn

## Tasks (ids)
- T-IOS-PAT-CI-DELTA · T-AND-PAT-CI-DELTA
- T-BE-PAT-PLAN-PTS · T-BE-PAT-CI-PHOTO · T-BFF-FILE-INIT · T-BE-PAT-CI-MIG?
- T-QA-TAB-01
- full: task/patrol-checkin.md

## API (ids only)
- GET patrol/sessions · GET sessions/{id}
- GET sessions/{id}/plan-points (Kind E · T-BE)
- POST sessions/{id}/check-ins (live · attachmentId[])
- files init/PUT/commit/object (FileService · T-BFF-FILE-INIT?)

## VERIFY
- task/ + compact + STATUS PASS · roleOnly team_lead
- cấm yarn build/e2e/start:std · cấm Step 4b · cấm implement native
- next: /agent-dev-ios

## UNCLEAR
- none
