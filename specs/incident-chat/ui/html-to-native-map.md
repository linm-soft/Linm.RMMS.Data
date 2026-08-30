# html-to-native-map — incident-chat

| Field | Value |
|-------|-------|
| feature | `incident-chat` |
| role | `design` |
| status | **confirmed** |
| updatedAt | `2026-08-29T17:40:00.000Z` |

| Demo / zone | iOS kit | Android kit | App |
|-------------|---------|-------------|-----|
| `#sc-incident-chat` | `IncidentChatView` | `IncidentChatScreen` | VM + BFF |
| TopBar | `LinmTopBar` | `LinmTopBar` | `inc.chat.title` |
| Thread | `LinmChatThread` | `LinmChatThread` | map DTO → `LinmChatMessage` |
| Bubble mine/theirs | `LinmChatBubble` | `LinmChatBubble` | `isMine` |
| Composer | `LinmChatComposer` `paperplane.fill` | `LinmChatComposer` Send | `onSend` |
| Entry `#i-chat` | `bubble.left` | `ChatBubbleOutline` | `btn-inc-chat-{id}` |

**Cấm** VM/API trong kit.
