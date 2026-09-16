# Handoff compact — dev

schemaVersion: 1
feature: patrol-checkin
packKind: sheet
role: dev
status: confirmed
skillVersion: 2026.08.20.03
writtenAt: 2026-09-12T13:15:00.000Z
taskId: task_e7e16bae
slash: /agent-dev-ios + /agent-dev-android
mode: feature_context
changeScope: edit_page
autoApprove: ON
e2eQa: ON
contentHash: sha256:patrol-checkin-control-hint-20260912-edit
bffContentHash: sha256:patrol-checkin-mobile-bff-20260912-edit

## Decisions
- edit_page delta dual PASS · kit_skip · UI zones giữ
- T-IOS-PAT-CI-DELTA · T-AND-PAT-CI-DELTA PASS
- T-BE-PAT-PLAN-PTS · Kind E GET plan-points + table `rmms_patrol_plan_points` + seed
- T-BE-PAT-CI-PHOTO · photoLocalIds = FileService guids (+ attachmentIds alias)
- T-BFF-FILE-INIT · NuGet FileService.Bff 1.1.0 · rewrite mobile→web files · GAP-MOB-BFF-FILE-01 **closed**
- T-BE-PAT-CI-MIG · plan-points migration shipped
- cấm plan=GPS · cấm fake 200 · MATCH_RADIUS_M=50
- mfeStdUrl: — (native)
- phase_to: qa (/agent-qa-mobile)

## Screens / zones (ids only)
- DES-MOB-PAT-CHECKIN-SHEET / #sheet-checkin
- DES-MOB-CI-DETAIL / #sc-checkin-detail
- DES-MOB-LOC-MISMATCH · DES-MOB-LEAVE · DES-MOB-GPS-DENY
- #ci-match-banner · #ci-plan · #ci-gps · #ci-dist · #ci-content · #ci-photos · #ci-add-photo · #ci-save-btn

## APIs
- GET patrol/sessions · GET sessions/{id}
- GET sessions/{id}/plan-points (**live**)
- POST sessions/{id}/check-ins (live · attachment ids)
- files/init · PUT files/{id}/object · files/commit · GET files/{id}/object

## VERIFY
- iOS xcodegen + xcodebuild iPhone 17 Pro **PASS**
- Android assembleDebug **PASS**
- Mobile.Bff dotnet build **PASS**
- WebService Api dotnet build **PASS**
- cấm mfeStdUrl / yarn start:std / e2e ở Dev
- next: /agent-qa-mobile · T-QA-TAB-01

## Debt
- Apply migration `20260912140000_Schema_RmmsPatrolPlanPoints` on target DB before E2E
- FileService `:5018` must be up for live photo upload (else offline queue)

## UNCLEAR
- none
