# html-to-native-map — mnt-chat

| Field | Value |
|-------|-------|
| feature | `mnt-chat` |
| role | `design` |
| status | **confirmed** |
| updatedAt | `2026-08-29T17:10:00.000Z` |

| Demo / zone | iOS kit | Android kit | App |
|-------------|---------|-------------|-----|
| `#sc-mnt-chat` | `MntChatView` | `MntChatScreen` | VM + BFF |
| TopBar | `LinmTopBar` | `LinmTopBar` | `mnt.chat.title` |
| Thread | `LinmChatThread` | `LinmChatThread` | map DTO → `LinmChatMessage` |
| Bubble mine/theirs | `LinmChatBubble` | `LinmChatBubble` | `isMine` |
| Composer | `LinmChatComposer` `paperplane.fill` | `LinmChatComposer` Send | `onSend` |
| Entry `#i-chat` | `bubble.left` | `ChatBubbleOutline` | `btn-mnt-chat-{id}` |

**Cấm** VM/API trong kit.
