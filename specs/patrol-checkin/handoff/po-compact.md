# Handoff compact — po

schemaVersion: 1
feature: patrol-checkin
packKind: sheet
role: po
status: confirmed
skillVersion: 2026.08.25.01
writtenAt: 2026-09-12T12:50:00.000Z
taskId: task_07ab9a33
slash: /agent-po-mobile
mode: feature_context
changeScope: edit_page
autoApprove: ON
e2eQa: ON

## Decisions
- edit_page · giữ UI zones/kit/dual · delta bind only
- GAP-MOB-CI-PHOTO-UP-01: FileService files/* → attachmentId[] · preview object JWT
- GAP-MOB-CI-PLAN-BE-01: match vs BE plan-points · cấm plan=GPS SSOT
- GAP-MOB-CI-FAKE-GPS-01: live GPS only · cấm fake
- GAP-MOB-BFF-01 POST check-ins: closed/live · body attachmentId[]
- GAP-MOB-BFF-FILE-01 (if NuGet missing): offline queue · cấm fake 200
- plan-points MISSING: stamp GAP · interim label session · SA chốt Kind E
- packKind sheet confirmed · 1 action = DES-MOB-PAT-CHECKIN-SHEET
- phase_to: design (delta confirm · giữ dual)

## Screens / zones (ids only)
- DES-MOB-PAT-CHECKIN-SHEET / #sheet-checkin
- DES-MOB-CI-DETAIL / #sc-checkin-detail
- DES-MOB-LOC-MISMATCH · DES-MOB-LEAVE · DES-MOB-GPS-DENY

## Device AC (ids)
- AC-GPS-01/02/03 · AC-MATCH-01/02/03 · AC-CAM-01 · AC-FILE-01 · AC-OFF-01 · AC-D-03/04 · AC-F-05

## API (ids only)
- GET patrol/sessions · GET sessions/{id}
- GET sessions/{id}/plan-points (GAP · SA)
- POST sessions/{id}/check-ins (live · attachmentId[])
- files init/PUT/commit/object (FileService)
- full: po/requirement.md · _data-analy/patrol-checkin-*.md

## VERIFY
- requirement + compact + STATUS PASS · roleOnly po
- cấm yarn build/e2e/start:std · cấm Step 4b · cấm re-scan demo
- next: /agent-design-mobile

## UNCLEAR
- none
