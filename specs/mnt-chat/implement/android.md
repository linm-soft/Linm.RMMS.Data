# Dev Android — Implement — mnt-chat

| Field | Value |
|-------|-------|
| feature | `mnt-chat` |
| status | **done** · qaFixPhase=implement · `task_e0e94a4c` |
| updatedAt | `2026-09-01T09:30:11.000Z` |
| retry.ssot_rereview | stamped · plan §1–7 · no toast revert |

## Notes

- `#sc-mnt-chat` `MntChatScreen` · kit `LinmChatThread` + `LinmChatComposer`
- Route `mnt-chat/{id}` · testTag `sc-mnt-chat` · `btn-mnt-chat-{id}`
- GET/POST `maintenance/work-orders/{id}/messages`
- Entry: `MntListViewModel` → `onOpenChat` · **0** toast chat
- Copy `mnt.chat.*` · **cấm** watermark
- Analy backfill SSOT **confirmed** (shared with iOS)

## VERIFY GATE

| gate | result |
|------|--------|
| `./gradlew assembleDebug` | **BUILD SUCCESSFUL** |
| BFF `dotnet build` (shared) | **PASS** 0 warn / 0 err |

## Cấm revert

Không ghi lại toast-only cho `#i-chat`.

## Version meta

| Field | Value |
|-------|-------|
| skillId | agent-dev-android |
| skillVersion | 2026.08.25.01 |
| schemaVersion | 1 |
| qaFixPhase | implement |
| taskId | `task_e0e94a4c` |
| dorGate | PASS |
