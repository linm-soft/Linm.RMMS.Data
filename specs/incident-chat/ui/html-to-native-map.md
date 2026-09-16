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
| TopBar | `LinmTopBar` · `.toolbar(.hidden)` + `.navigationBarBackButtonHidden` | `LinmTopBar` · **không** Scaffold `topBar` | `inc.chat.title` · **1** bar (`GAP-MOB-CHAT-HDR-01`) |
| Thread | `LinmChatThread` | `LinmChatThread` | map DTO → `LinmChatMessage` |
| Bubble mine/theirs | `LinmChatBubble` | `LinmChatBubble` | `isMine` |
| Composer | `LinmChatComposer` `paperplane.fill` · `linmChatImeFlush` | `LinmChatComposer` Send · `linmChatImeFlush` | `onSend` · extra = ime − consumedBottom · **GAP-MOB-CHAT-IME-01** |
| Entry `#i-chat` | `bubble.left` | `ChatBubbleOutline` | `btn-inc-chat-{id}` |

**Cấm** VM/API trong kit.
