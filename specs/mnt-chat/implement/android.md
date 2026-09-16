# Dev Android — Implement — mnt-chat

| Field | Value |
|-------|-------|
| feature | `mnt-chat` |
| status | **done** · `/edit-mobile-feature` GAP-MOB-CHAT-HDR-01 · GAP-MOB-CHAT-IME-01 |
| updatedAt | `2026-09-16T14:25:00.000Z` |
| retry.ssot_rereview | stamped · plan §1–7 · no toast revert |

## Notes

- `#sc-mnt-chat` `MntChatScreen` · kit `LinmChatThread` + `LinmChatComposer`
- Route `mnt-chat/{id}` · testTag `sc-mnt-chat` · `btn-mnt-chat-{id}`
- GET/POST `maintenance/work-orders/{id}/messages`
- Entry: `MntListViewModel` → `onOpenChat` · **0** toast chat
- Copy `mnt.chat.*` · **cấm** watermark
- Analy backfill SSOT **confirmed** (shared with iOS)
- **GAP-MOB-CHAT-HDR-01:** NavHost **không** Scaffold `topBar` · **1** header = `LinmTopBar` (`leadingText` «Công việc» · kit tự vẽ chevron). **Cấm** thêm Material `TopAppBar`.
- **GAP-MOB-CHAT-IME-01:** `LinmChatImeLock` (`ADJUST_NOTHING`) + `Modifier.imePadding()` trên Column — composer pin trên IME. **Cấm** bỏ pad / compact layout theo IME.

## VERIFY GATE

| gate | result |
|------|--------|
| `./gradlew assembleDebug` | **BUILD SUCCESSFUL** |
| BFF `dotnet build` (shared) | **PASS** 0 warn / 0 err |

## Cấm revert

Không ghi lại toast-only cho `#i-chat`.  
Không bọc `#sc-mnt-chat` bằng Scaffold `topBar`.  
Không bỏ `imePadding` / `LinmChatImeLock`.

## Version meta

| Field | Value |
|-------|-------|
| skillId | agent-dev-android |
| skillVersion | 2026.08.25.01 |
| schemaVersion | 1 |
| qaFixPhase | implement |
| taskId | `task_e0e94a4c` |
| dorGate | PASS |
