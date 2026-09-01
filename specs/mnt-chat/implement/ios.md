# Dev iOS — Implement — mnt-chat

| Field | Value |
|-------|-------|
| feature | `mnt-chat` |
| status | **done** · qaFixPhase=implement · `task_e0e94a4c` |
| updatedAt | `2026-09-01T09:30:11.000Z` |
| retry.ssot_rereview | stamped · plan §1–7 · no toast revert |

## Notes

- `#sc-mnt-chat` `MntChatView` · kit `LinmChatThread` + `LinmChatComposer`
- GET/POST `maintenance/work-orders/{id}/messages` via Mobile.Bff
- Entry: `MntListViewModel.chat` → `setOnOpenChat` · **0** `mnt.list.toast.chat`
- Copy `mnt.chat.*` · empty/placeholder/send · **cấm** watermark
- Analy backfill: control-hint · real-data · bff-endpoints · action-tree **confirmed**

## VERIFY GATE

| gate | result |
|------|--------|
| xcodegen | PASS |
| xcodebuild dest **iPhone 17 Pro** | **BUILD SUCCEEDED** |

## Cấm revert

Không ghi lại toast-only cho `#i-chat`.

## Version meta

| Field | Value |
|-------|-------|
| skillId | agent-dev-ios |
| skillVersion | 2026.08.25.01 |
| schemaVersion | 1 |
| qaFixPhase | implement |
| taskId | `task_e0e94a4c` |
| dorGate | PASS |
