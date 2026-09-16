# Dev iOS — Implement — mnt-chat

| Field | Value |
|-------|-------|
| feature | `mnt-chat` |
| status | **done** · `/edit-mobile-feature` GAP-MOB-CHAT-HDR-01 · GAP-MOB-CHAT-IME-01 |
| updatedAt | `2026-09-16T14:45:00.000Z` |
| retry.ssot_rereview | stamped · plan §1–7 · no toast revert |

## Notes

- `#sc-mnt-chat` `MntChatView` · kit `LinmChatThread` + `LinmChatComposer`
- GET/POST `maintenance/work-orders/{id}/messages` via Mobile.Bff
- Entry: `MntListViewModel.chat` → `setOnOpenChat` · **0** `mnt.list.toast.chat`
- Copy `mnt.chat.*` · empty/placeholder/send · **cấm** watermark
- Analy backfill: control-hint · real-data · bff-endpoints · action-tree **confirmed**
- **GAP-MOB-CHAT-HDR-01:** `.navigationBarBackButtonHidden(true)` + `.toolbar(.hidden, for: .navigationBar)` trên view + `AppRouter` destination — **1** header = `LinmTopBar` (back «Công việc» + title). Subtitle WO giữ dưới bar.
- **GAP-MOB-CHAT-IME-01:** `linmChatImeFlush()` — extra = `max(0, keyboardOverlap − consumedBottom)`. Composer **flush** IME. **Cấm** `safeAreaInset` đếm trùng tab.

## VERIFY GATE

| gate | result |
|------|--------|
| xcodegen | PASS |
| xcodebuild dest **iPhone 17 Pro Max** | **BUILD SUCCEEDED** |
| xcodebuild dest **iPad Pro 13-inch (M5)** (A4) | **BUILD SUCCEEDED** |

## Cấm revert

Không ghi lại toast-only cho `#i-chat`.  
Không bỏ `.toolbar(.hidden)` — worker **cấm** hiện lại system back chồng `LinmTopBar`.  
Không bỏ `linmChatImeFlush` — worker **cấm** chìm dưới IME hoặc cách tab-bar.

## Version meta

| Field | Value |
|-------|-------|
| skillId | agent-dev-ios |
| skillVersion | 2026.08.25.01 |
| schemaVersion | 1 |
| qaFixPhase | implement |
| taskId | `task_e0e94a4c` |
| dorGate | PASS |
