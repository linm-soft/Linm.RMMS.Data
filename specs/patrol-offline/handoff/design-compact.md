# Handoff compact — design

schemaVersion: 1
feature: patrol-offline
packKind: list
role: design
status: confirmed
skillVersion: 2026.08.19.29
writtenAt: 2026-09-12T14:31:03.000Z
taskId: task_1f9f2ea2
slash: /agent-design-mobile
mode: feature_context
changeScope: edit_page
gap: offline_sync_apply_checkins
autoApprove: ON
e2eQa: ON
hashSkip: yes
contentHash: sha256:patrol-offline-delta-apply-checkins-20260912
bffContentHash: sha256:patrol-offline-bff-apply-checkins-20260912

## Decisions
- Keep UI zones `#sc-patrol-offline` · **no** layout redesign
- Sync = replay checkIn → POST `patrol/sessions/{id}/check-ins` · remove only 2xx
- offline-batch = optional receipt after OK · RecordCount = synced
- Hidden payload: sessionId + CreatePatrolCheckInRequest (enqueue dual)
- Incident = P2 keep · **cấm** clear-all / clear incident
- design_confirm **approve** (autoApprove ON)
- Step 4b N/A · **cấm** invent GET queue / ERP.* / re-scan demo
- phase_to: sa

## Screens / zones (ids only)
- DES-MOB-PAT-OFFLINE / #sc-patrol-offline
- DES-MOB-PAT-OFFLINE-NAV · #btn-sync (replay)
- DES-MOB-PAT-OFFLINE-SEG · DES-MOB-PAT-OFFLINE-BANNER · DES-MOB-PAT-OFFLINE-CARD
- payload hidden: sessionId+body

## reviewUrl (paths only)
- ui/prototype/ios/index.html#sc-patrol-offline
- ui/prototype/android/index.html#sc-patrol-offline
- full: file:///Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/patrol-offline/ui/prototype/{ios,android}/index.html#sc-patrol-offline

## API / bind (ids only)
- POST patrol/sessions/{sessionId}/check-ins (primary apply)
- POST integration/sync/offline-batch (optional receipt)
- full: ui/design.md · ui/ux-analy.md · ui/html-to-native-map.md

## VERIFY
- design + ux-analy + html-to-native-map + dual proto annotate + compact + STATUS PASS
- roleOnly design · cấm yarn build/e2e/start:std · cấm Step 4b · cấm re-scan demo
- next: /agent-sa-mobile

## UNCLEAR
- none
