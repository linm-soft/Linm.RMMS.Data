# html-to-native-map — mnt-chat

| Field | Value |
|-------|-------|
| feature | `mnt-chat` |
| role | `design` |
| status | **confirmed** |
| updatedAt | `2026-09-16T14:25:00.000Z` |

| Demo / zone | iOS kit | Android kit | App |
|-------------|---------|-------------|-----|
| `#sc-mnt-chat` | `MntChatView` | `MntChatScreen` | VM + BFF |
| TopBar | `LinmTopBar` · `.toolbar(.hidden)` + `.navigationBarBackButtonHidden` | `LinmTopBar` · **không** Scaffold `topBar` | `mnt.chat.title` · **1** bar (`GAP-MOB-CHAT-HDR-01`) |
| Thread | `LinmChatThread` | `LinmChatThread` | map DTO → `LinmChatMessage` |
| Bubble mine/theirs | `LinmChatBubble` | `LinmChatBubble` | `isMine` |
| Composer | `LinmChatComposer` `paperplane.fill` · `linmChatImeFlush` | `LinmChatComposer` Send · `linmChatImeFlush` | `onSend` · extra = ime − consumedBottom · **GAP-MOB-CHAT-IME-01** |
| Entry `#i-chat` | `bubble.left` | `ChatBubbleOutline` | `btn-mnt-chat-{id}` |

**Cấm** VM/API trong kit.
