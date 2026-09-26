# Design — web-rmms-incident-chat

| Field | Value |
|-------|-------|
| feature | `web-rmms-incident-chat` |
| title | Chat sự cố |
| this role | `design` · `/agent-design` |
| status | `confirmed` (autoApprove=ON) |
| design_confirm | **approve** (`task_03fa59aa`) |
| changeScope | `new_page` |
| packKind | **`list`** (PO · UI = **phone chat** · **≠** Kind B desktop) |
| lane | `web` |
| stack | `web_mfe_phone` · `Linm.Web.RMMS.Mobile` · `max-width: 430px` |
| formPattern | Mobile **chat / full** · `LinmChatThread` + `LinmChatComposer` · **không** ERP Modal/Slideout Kind B · **không** master form |
| DES-GRID / LinErpListFilterBar | **N/A** — phone chat · **cấm** clone |
| Report AC / DES-RPT | **N/A** |
| shared_grid_example | **N/A** (phone) |
| real_view_parity | **v1** |
| peerStdUrl | `http://localhost:9301/web-rmms-incident` |
| mfeStdUrl | `http://localhost:9301/web-rmms-incident-chat` |
| mfeStdRoute | `/web-rmms-incident-chat` |
| productRoute | `/incident/:id/chat` |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-incident-chat/ui/prototype/index.html` |
| reviewUrl empty | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-incident-chat/ui/prototype/index.html?empty=1` |
| reviewUrl error | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-incident-chat/ui/prototype/index.html?error=1` |
| demo | **N/A** · hash skip · **cấm** re-scan (**GAP-DES-DEMO-RESCAN-01**) |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · Incident messages · **cấm ERP.*** |
| bff | `Linm.RMMS.Mobile.Bff` · `:5202` · `mobile-bff/api/v1` · **cấm** web-bff |
| controlHint | `specs/_data-analy/features/web-rmms-incident-chat-control-hint.md` |
| realData | `specs/_data-analy/features/web-rmms-incident-chat-real-data.md` · §A+§B PASS |
| prior | PO `confirmed` · `handoff/po-compact.md` · DA `confirmed` · contentHash `sha256:6f74282b807da7f2cc1aa57ac64848cd1d75ff3383c0f432eaad7bea53fff80e` |
| autoApprove | **ON** |
| e2eQa | ON queued `/agent-qa*` · **cấm** e2e / `yarn start:std` ở Design |
| `devSlash` | `/agent-dev` |
| updatedAt | `2026-09-26T02:50:00.000Z` |
| taskId | `task_03fa59aa` |
| skillId | `agent-design` |
| skillVersion | `2026.09.05.03` |
| schemaVersion | `1` |
| workflowVersion | `2026.09.19.02` |
| rulesVersion | `2026.09.25.2` |
| versionGate | `ok` |
| contentHash | `sha256:6f74282b807da7f2cc1aa57ac64848cd1d75ff3383c0f432eaad7bea53fff80e` |

**Cấm:** Dev/BE trước confirm (đã autoApprove) · ERP.* · invent `api/v1/incident-chat` · toast-only · SignalR kit · parentId P1 · fake GPS · hardcode VN ngoài `useFormOptions` · `window.alert` · re-scan demo · Kind B DES-GRID · `LinErpListFilterBar` · Me*/feedback/cam-view · create/detail/vis/estimate/journal-b…e · mnt-chat gộp · 2 header · `yarn build` / e2e / start:std ở role này.

## 0. Context / Demo

| ID | Path | Notes |
|----|------|-------|
| CTX-01 | `docs/context/features/web-rmms-incident-chat.md` | greenfield chat |
| CTX-02 | `docs/plan/web-rmms-mobile/SCREENS.md` | `/incident/:id/chat` · GPS: không |
| CTX-03 | peer `incident-chat.md` · `web-rmms-incident.md` | Android `#sc-incident-chat` · entry `#i-chat` |
| DEM | — | **N/A** · hash skip · **cấm** crawl (**GAP-DES-DEMO-RESCAN-01**) |
| DA-01 / DA-02 | `_data-analy/features/web-rmms-incident-chat-{control-hint,real-data}.md` | inventory + §B |
| PO | `po/requirement.md` · `handoff/po-compact.md` | P1 flat · re-GET · AC-C1…C10 |
| tokens | `docs/mobile-tokens.json` | primary `#0C84C0` · phone 430 |

## 1. Pattern & ownership

| | |
|--|--|
| Frame | Phone **430px** · tokens primary `#0C84C0` · label **13** · field **≥16** (**GAP-TYP-01**) · control **≥44** |
| Surface | Full chat · **cấm** ERP Modal/Slideout · **cấm** Kind B desktop |
| Kit | `LinmTopBar` · `LinmChatThread` · `LinmChatBubble` · `LinmChatComposer` |
| This feature | **CH-*** only — TopBar incident · thread GET · composer POST |
| Peer INC-L | Entry `#i-chat` / `btn-inc-chat-{id}` → `/incident/:id/chat` (`web-rmms-incident`) · **không** implement list ở slug này |
| Shell | TabBar / login — out |
| Parity | Android icon/layout **1-1** · cite native `#sc-incident-chat` · **cấm** sửa iOS/Android |
| Out | Me* · feedback · cam-view · create/detail · vis · estimate · journal/kết ca/tồn tại/tần suất · mnt-chat |

### Thread model (PO CLOSED)

| | |
|--|--|
| P1 | **Flat** thread · **không** `parentId` trên POST |
| Reply | **P2** — out of scope Design wire |
| Cite | UNCLEAR-PARENT-ID **resolved** |

### Realtime (PO CLOSED)

| | |
|--|--|
| P1 | HTTP only · **re-GET** messages sau POST OK · pull-to-refresh optional |
| Cấm | SignalR kit / websocket invent |
| Cite | UNCLEAR-POLLING **resolved** · GAP-DES-CHAT-POLL-01 |

### Labels

| | |
|--|--|
| Rule | `useFormOptions()` / LinmCopy `incident.chat.*` · **cấm** hardcode VN trên form Dev |
| Prototype | VN labels OK for board review only |

## 2. Screens / zones

| Zone | Route | Surface | Wire |
|------|-------|---------|------|
| **CH-00** | phone frame | ≤430 · center desktop review | Android 1-1 |
| **CH-01** | TopBar | `LinmTopBar` | back · title · subtitle incident · **cấm** 2 header |
| **CH-02** | thread | `LinmChatThread` | bubbles mine/theirs · empty |
| **CH-03** | composer | `LinmChatComposer` | TextArea + send · pin đáy · IME flush |
| **CH-04** | entry | peer list | `#i-chat` · **không** DoD list |

### IA

```
(auth) Tab Incident → INC-L (web-rmms-incident)
  #i-chat / btn-inc-chat-{id} → /incident/{id}/chat
  std entry → /web-rmms-incident-chat (?id=)
  missing id → empty + back CTA
  GET incident/incidents/{id} → TopBar subtitle
  GET …/messages?type=message → thread (isMine)
  type content → enable send
  Send → POST { content, type:"message" } · no parentId
  POST OK → clear draft · re-GET messages · scroll bottom
  POST fail → toast/banner · keep draft · cấm window.alert
  back → INC-L /incident
```

### Prototype states

| URL | State |
|-----|-------|
| `index.html` | Thread có tin · composer idle |
| `?empty=1` | EmptyState `incident.chat.empty` |
| `?error=1` | Load error banner + retry |

## 3. Control map (chốt)

| uiField | zone | control | copy key | bind |
|---------|------|---------|----------|------|
| phoneFrame | CH-00 | Layout 430 | — | — |
| topBarBack | CH-01 | Button/Nav | `incident.chat.back` | nav `/incident` |
| topBarTitle | CH-01 | Static | `incident.chat.title` | — |
| topBarSubtitle | CH-01 | Text RO | `incident.chat.subtitle` | GET `{id}` code/title |
| threadList | CH-02 | ChatThread | `incident.chat.thread` | GET messages |
| bubbleMine | CH-02 | ChatBubble | `incident.chat.bubble` | `isMine=true` · primary |
| bubbleTheirs | CH-02 | ChatBubble | `incident.chat.bubble` | `isMine=false` · card |
| bubbleTime | CH-02 | Meta | — | `createdAt` muted |
| emptyThread | CH-02 | EmptyState | `incident.chat.empty` | [] |
| composerInput | CH-03 | TextArea | `incident.chat.composer` | local draft |
| composerSend | CH-03 | Button | `incident.chat.send` | POST · disable empty/sending |
| entry.chatIcon | CH-04 | Button/Nav peer | `incident.list.chat` | `#i-chat` |

### Visual tokens (chat)

| Element | Token |
|---------|-------|
| bubble mine | bg `primary` `#0C84C0` · fg onPrimary |
| bubble theirs | bg `card` `#FFFFFF` · fg onSurface |
| time | meta · muted `#8E8E93` |
| send | circle ≥44 · primary · paper-plane |
| TopBar | gradient deep→primary (shell peer) · **1** bar only |
| Composer | pin bottom · IME flush (**GAP-MOB-CHAT-IME-01** web equiv) |

## 4. API bind (Design cite — SA confirms)

| Action | Method | Path | Body / notes |
|--------|--------|------|--------------|
| Header incident | GET | `mobile-bff/api/v1/incident/incidents/{id}` | subtitle |
| Load thread | GET | `…/incidents/{id}/messages?type=message` | `content` · `isMine` · `createdAt` |
| Send | POST | `…/incidents/{id}/messages` | `{ content, type:"message" }` · **no** parentId |
| Labels opt | GET | `…/init-data` | `useFormOptions` |
| **Cấm** | — | invent `api/v1/incident-chat` · ERP.* · web-bff client | — |

## 5. A–D / DES-RPT / Grid

| Check | Result |
|-------|--------|
| A inventory | PASS — CH-00…04 từ control-hint |
| B bind | PASS — real-data §B |
| C catalog | PASS — LOOKUP_STATIC copy · no master form |
| D map/GPS | **none** trên chat · GPS peer only |
| DES-GRID-* | **N/A** |
| DES-RPT / Report AC | **N/A** |
| LinErpListFilterBar | **N/A** |

## 6. Errors / empty / loading

| State | UI |
|-------|-----|
| Loading | skeleton / spinner thread · composer disabled |
| Empty | EmptyState `incident.chat.empty` · composer vẫn mở |
| Missing id | empty + back |
| GET fail | banner + retry · **cấm** `window.alert` |
| POST fail | toast/banner · keep draft |
| Unauth | shell → login |

## 7. Out of scope → peers

| Out | Owner |
|-----|-------|
| INC-L list / create / detail | `web-rmms-incident` |
| Vis / estimate / photo-geo | peers |
| Journal / kết ca / tồn tại / tần suất | `web-rmms-mobile-b`…`e` |
| mnt-chat | `web-rmms-mnt-chat` · **không** gộp |
| DOMAIN-MAP row | SA (**UNCLEAR-DOMAIN-MAP-CHAT**) |
| SignalR / parentId reply | P2+ |

## 8. design_confirm

| | |
|--|--|
| Gate | **approve** |
| Mode | autoApprove=ON · không chờ board |
| Artifact | `ui/design.md` + `ui/prototype/index.html` + reviewUrl |
| Next | `/agent-sa` · **roleOnly stop** (**GAP-PKT-ROLE-01**) |

## Version meta

`skillVersion=2026.09.05.03` · `schemaVersion=1` · `contentHash=sha256:6f74282b807da7f2cc1aa57ac64848cd1d75ff3383c0f432eaad7bea53fff80e` · `rulesVersion=2026.09.25.2` · `updatedAt=2026-09-26T02:50:00.000Z` · `taskId=task_03fa59aa`
