# Dev Android — Implement — incident-chat

| Field | Value |
|-------|-------|
| feature | `incident-chat` |
| status | **done** · `/edit-mobile-feature` |
| updatedAt | `2026-08-29T17:40:00.000Z` |

## Notes

- `#sc-incident-chat` `IncidentChatScreen` · kit `LinmChatThread` + `LinmChatComposer`  
- Route `incident-chat/{id}` trong incident stack  
- GET/POST `incident/incidents/{id}/messages`  
- `assembleDebug` **BUILD SUCCESSFUL**  
- **GAP-MOB-CHAT-HDR-01:** **1** `LinmTopBar` · **cấm** Scaffold `topBar`  
- **GAP-MOB-CHAT-IME-01:** `linmChatImeFlush()` — extra = ime − Scaffold.bottom  

## Cấm revert

Không ghi lại toast-only cho `#i-chat`.
