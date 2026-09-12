# Handoff compact — sa

schemaVersion: 1
feature: patrol-offline
packKind: list
role: sa
status: confirmed
skillVersion: 2026.08.19.29
writtenAt: 2026-09-12T14:35:00.000Z
taskId: task_c7ddb8a3
slash: /agent-sa-mobile
mode: feature_context
changeScope: edit_page
gap: offline_sync_apply_checkins
autoApprove: ON
e2eQa: ON
contentHash: sha256:patrol-offline-delta-apply-checkins-20260912
bffContentHash: sha256:patrol-offline-bff-apply-checkins-20260912
solution_confirm: approve

## Decisions
- Sync DoD = replay `checkIn` → POST `patrol/sessions/{sessionId}/check-ins` · remove **only** 2xx
- offline-batch = optional receipt after OK · RecordCount=synced · **không** apply DB
- Enqueue persist sessionId + CreatePatrolCheckInRequest dual
- Incident = P2 keep · **cấm** clear-all / clear incident / invent GET queue / ERP.*
- Keep UI `#sc-patrol-offline` · Step 4b **N/A** · solution_confirm **approve**
- Gates: tz_na · xco_na · share_na · Offline=owner queue
- phase_to: team_lead

## API (slim)
| Action | Method path | Note |
|--------|-------------|------|
| apply | POST patrol/sessions/{sessionId}/check-ins | primary · live |
| receipt | POST integration/sync/offline-batch | optional after OK |
| queue | local store | **cấm** GET |

## Screens / zones
- DES-MOB-PAT-OFFLINE / #sc-patrol-offline · #btn-sync replay
- payload hidden: sessionId+body

## Artifacts
- `be/solution-discovery.md` (delta apply)
- prior: design/po/data_analy compact + full paths in STATUS

## VERIFY
- solution + compact + STATUS · roleOnly sa · cấm build/e2e/start:std · cấm Step 4b
- next: /agent-tl-mobile

## UNCLEAR
- none
