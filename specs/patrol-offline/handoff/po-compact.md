# Handoff compact — po

schemaVersion: 1
feature: patrol-offline
packKind: list
role: po
status: confirmed
skillVersion: 2026.08.19.29
writtenAt: 2026-09-12T14:30:00.000Z
taskId: task_d268d5b7
slash: /agent-po-mobile
mode: feature_context
changeScope: edit_page
gap: offline_sync_apply_checkins

## Decisions
- Keep UI zones `#sc-patrol-offline` · **no** layout redesign
- Sync = replay `checkIn` → POST `patrol/sessions/{id}/check-ins` · remove **only** 2xx
- offline-batch = optional receipt after OK · RecordCount = synced · **không** apply DB
- Enqueue persist sessionId + CreatePatrolCheckInRequest fields dual
- Incident = P2 keep pending · **cấm** clear-all / clear incident
- Step 4b N/A · **cấm** invent GET queue / ERP.*
- packKind **list** · autoApprove ON · e2eQa queued QA

## Screens
| id | pattern | actions |
|----|---------|---------|
| sc-patrol-offline | List | Appear local · segment filter · replay sync · toast N |

## controlHint (slim)
| id | hint | notes |
|----|------|-------|
| syncBtn | TopBar text | replay primary |
| segment | LinmSegment | 0 checkIn / 1 incident |
| row-card | rich display | keep |
| payload | Hidden | sessionId+body **NEW** |
| toastSync | LinmToast | N = apply OK |

## Device AC (slim)
- Offline sync → toast · keep queue
- Partial fail → keep fail items
- No native alert · no GET queue · no re-seed after sync

## Artifacts
- `po/requirement.md` (delta confirm)
- prior analy: control-hint · real-data · bff · action-tree · `data_analy-compact.md`
- contentHash: sha256:patrol-offline-delta-apply-checkins-20260912
- bffContentHash: sha256:patrol-offline-bff-apply-checkins-20260912

## Next
- handoff Design (keep prototype · annotate replay)
- **cấm** start non-Design roles in next task until due
