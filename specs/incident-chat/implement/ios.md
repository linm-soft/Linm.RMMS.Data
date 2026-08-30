# Dev iOS — Implement — incident-chat

| Field | Value |
|-------|-------|
| feature | `incident-chat` |
| status | **done** · `/edit-mobile-feature` |
| updatedAt | `2026-08-29T17:40:00.000Z` |

## Notes

- `#sc-incident-chat` `IncidentChatView` · kit `LinmChatThread` + `LinmChatComposer`  
- GET/POST `incident/incidents/{id}/messages` via Mobile.Bff  
- Entry: `IncidentListViewModel.chat` → `setOnOpenChat` · **không** toast  
- Dest A4 iPhone 17 Pro Max · `xcodebuild` **BUILD SUCCEEDED**  

## Cấm revert

Không ghi lại toast-only cho `#i-chat`.
