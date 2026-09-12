# Handoff compact — design

schemaVersion: 1
feature: patrol-checkin
packKind: sheet
role: design
status: confirmed
skillVersion: 2026.08.25.01
writtenAt: 2026-09-12T12:55:00.000Z
taskId: task_e4a48d29
slash: /agent-design-mobile
mode: feature_context
changeScope: edit_page
autoApprove: ON
e2eQa: ON
hashSkip: yes
contentHash: sha256:patrol-checkin-control-hint-20260912-edit

## Decisions
- edit_page · giữ UI zones/kit/copy/dual · delta bind only
- GAP-MOB-CI-PHOTO-UP-01: PhotoRow → FileService files/* → attachmentId[] · preview object JWT
- GAP-MOB-CI-PLAN-BE-01: match vs BE plan-points · cấm plan=GPS SSOT · interim session label
- GAP-MOB-CI-FAKE-GPS-01: live GPS only
- GAP-MOB-BFF-01 POST check-ins: closed/live · body attachmentId[]
- GAP-MOB-BFF-FILE-01: offline queue nếu NuGet thiếu · cấm fake 200
- design_confirm approve (autoApprove ON)
- phase_to: sa

## Screens / zones (ids only)
- DES-MOB-PAT-CHECKIN-SHEET / #sheet-checkin
- DES-MOB-CI-DETAIL / #sc-checkin-detail
- DES-MOB-LOC-MISMATCH · DES-MOB-LEAVE · DES-MOB-GPS-DENY
- #ci-match-banner · #ci-plan · #ci-gps · #ci-dist · #ci-content · #ci-photos · #ci-add-photo · #ci-save-btn

## reviewUrl (paths only)
- ui/prototype/ios/index.html (+ ?mismatch=1 · ?deny=1 · ?surface=detail)
- ui/prototype/android/index.html (same query)
- full: file:///…/specs/patrol-checkin/ui/prototype/{ios,android}/index.html

## API / bind (ids only)
- GET patrol/sessions · GET sessions/{id}
- GET sessions/{id}/plan-points (GAP · SA)
- POST sessions/{id}/check-ins (live · attachmentId[])
- files init/PUT/commit/object (FileService)
- full: ui/design.md · ui/ux-analy.md · ui/html-to-native-map.md

## VERIFY
- design + ux-analy + html-to-native-map + dual proto + compact + STATUS PASS
- roleOnly design · cấm yarn build/e2e/start:std · cấm Step 4b · cấm re-scan demo
- next: /agent-sa-mobile

## UNCLEAR
- none
