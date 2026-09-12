# Handoff compact — dev

schemaVersion: 1
feature: patrol-offline
packKind: list
role: dev
status: confirmed
skillVersion: 2026.08.19.29
writtenAt: 2026-09-12T14:45:00.000Z
taskId: task_8bf4b63c
slash: /agent-dev-ios + /agent-dev-android
mode: feature_context
changeScope: edit_page
gap: offline_sync_apply_checkins
autoApprove: ON
e2eQa: ON
contentHash: sha256:patrol-offline-delta-apply-checkins-20260912
bffContentHash: sha256:patrol-offline-bff-apply-checkins-20260912
mfeStdUrl: —

## Decisions
- Dual enqueue sessionId + CreatePatrolCheckInBody
- Sync = replay POST patrol/sessions/{id}/check-ins · remove only 2xx
- offline-batch = optional receipt after OK · RecordCount=synced
- Incident P2 keep · no clear-all · no GET queue · no ERP.* · Step 4b N/A
- UI zones keep · T-IOS-PAT-OFF-APPLY · T-AND-PAT-OFF-APPLY done
- phase_to: qa (/agent-qa-mobile)

## Screens / zones (ids only)
- DES-MOB-PAT-OFFLINE / #sc-patrol-offline
- DES-MOB-PAT-OFFLINE-NAV · #btn-sync (replay)
- SEG · BANNER · CARD · payload hidden sessionId+body

## API (ids only)
- POST patrol/sessions/{sessionId}/check-ins (primary apply)
- POST integration/sync/offline-batch (optional receipt)
- queue = local only

## Artifacts
- implement/ios.md · implement/android.md
- full: ios OfflineQueueRepositoryImpl · android OfflineQueueRepositoryImpl

## VERIFY
- xcodegen + xcodebuild iPhone 17 Pro PASS
- assembleDebug PASS · BFF dotnet build PASS
- cấm e2e / start:std / mfeStdUrl · next: /agent-qa-mobile

## Debt
- Incident apply P2 · legacy no-payload skip · patrol-home sync stub Defer

## UNCLEAR
- none
