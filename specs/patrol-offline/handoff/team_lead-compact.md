# Handoff compact — team_lead

schemaVersion: 1
feature: patrol-offline
packKind: list
role: team_lead
status: confirmed
skillVersion: 2026.08.19.29
writtenAt: 2026-09-12T14:36:20.000Z
taskId: task_1618aef2
slash: /agent-tl-mobile
mode: feature_context
changeScope: edit_page
gap: offline_sync_apply_checkins
autoApprove: ON
e2eQa: ON
contentHash: sha256:patrol-offline-delta-apply-checkins-20260912
bffContentHash: sha256:patrol-offline-bff-apply-checkins-20260912
route_confirm: route_a
kit_missing_confirm: prior_topbar_text_unchanged

## Decisions
- edit_page · keep UI `#sc-patrol-offline` · route_a keep · kit n/a
- Sync DoD = replay checkIn → POST `patrol/sessions/{sessionId}/check-ins` · remove **only** 2xx
- offline-batch = optional receipt after OK · RecordCount=synced · **không** apply DB
- Enqueue persist sessionId + CreatePatrolCheckInRequest dual
- Incident = P2 keep · **cấm** clear-all / GET queue / ERP.* / Step 4b
- T-IOS-PAT-OFF-APPLY · T-AND-PAT-OFF-APPLY · T-BE/T-KIT/T-BFF **n/a**
- phase_to: dev (/agent-dev-ios)

## Screens / zones (ids only)
- DES-MOB-PAT-OFFLINE / #sc-patrol-offline
- DES-MOB-PAT-OFFLINE-NAV · #btn-sync (replay)
- DES-MOB-PAT-OFFLINE-SEG · BANNER · CARD
- payload hidden: sessionId+body

## Tasks (ids)
- T-IOS-PAT-OFF-APPLY · T-AND-PAT-OFF-APPLY
- T-QA-PAT-OFFLINE (later)
- T-BE-* / T-KIT / T-BFF = n/a
- full: task/patrol-offline.md

## API (ids only)
- POST patrol/sessions/{sessionId}/check-ins (primary apply)
- POST integration/sync/offline-batch (optional receipt)
- queue = local only · **cấm** GET

## VERIFY
- task/ + compact + STATUS PASS · roleOnly team_lead
- cấm yarn build/e2e/start:std · cấm Step 4b · cấm implement native
- next: /agent-dev-ios

## UNCLEAR
- none
