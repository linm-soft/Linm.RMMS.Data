# Handoff compact — data_analy

schemaVersion: 1
feature: patrol-offline
packKind: list
role: data_analy
status: confirmed
skillVersion: 2026.08.19.29
writtenAt: 2026-09-12T14:26:21.000Z
taskId: task_82f104b5
slash: /agent-data-analy-mobile
mode: feature_context
changeScope: edit_page
gap: offline_sync_apply_checkins

## Decisions
- Keep existing PO/Design/SA artifacts · analy § Delta only
- DoD: replay queue → POST `patrol/sessions/{id}/check-ins` · remove only on 2xx · no data loss
- offline-batch = optional receipt after OK · **không** apply DB (current SyncJob stub)
- Enqueue must persist sessionId + CreatePatrolCheckInRequest fields
- incident sync = P2 keep pending · cấm clear-all
- Step 4b N/A · reuse live endpoints · cấm invent GET queue / ERP.*
- UI zones unchanged `#sc-patrol-offline`

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| sc-patrol-offline | Dữ liệu lưu trữ | Screen | list |
| btn-sync | Đồng bộ | TopBar trailing | replay check-ins |
| segment | Điểm tuần / Sự cố | LinmSegment | filter |
| row-card | Queue card | Rich card | display |
| payload | sessionId+body | Hidden | NEW local |

## Artifacts
- `_data-analy/patrol-offline-control-hint.md` (§ Delta)
- `_data-analy/patrol-offline-real-data.md`
- `_data-analy/patrol-offline-bff-endpoints.md`
- `_data-analy/patrol-offline-action-tree.md`
- contentHash: sha256:patrol-offline-delta-apply-checkins-20260912
- bffContentHash: sha256:patrol-offline-bff-apply-checkins-20260912

## Next
- handoff PO (edit_page delta confirm · keep prior requirement)
- **cấm** start non-PO roles in this task
