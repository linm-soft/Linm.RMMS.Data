# Dev iOS — Implement — mnt-chat

| Field | Value |
|-------|-------|
| feature | `mnt-chat` |
| status | **done** · `/edit-mobile-feature` |
| updatedAt | `2026-08-29T17:10:00.000Z` |

## Notes

- `#sc-mnt-chat` `MntChatView` · kit `LinmChatThread` + `LinmChatComposer`  
- GET/POST `maintenance/work-orders/{id}/messages` via Mobile.Bff  
- Entry: `MntListViewModel.chat` → `setOnOpenChat` · **không** toast  
- Dest A4 iPhone 17 Pro Max · `xcodebuild` **BUILD SUCCEEDED**  

## Cấm revert

Không ghi lại toast-only cho `#i-chat`.
