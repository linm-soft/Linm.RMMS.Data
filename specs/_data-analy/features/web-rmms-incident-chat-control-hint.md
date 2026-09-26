# Data-analy — controlHint — web-rmms-incident-chat

| Field | Value |
|-------|-------|
| feature | `web-rmms-incident-chat` |
| title | Chat sự cố — thread + composer |
| packKind | `list` |
| changeScope | `new_page` |
| mode | `feature_context` |
| status | `done` |
| skillId | `agent-data-analy` |
| skillVersion | `2026.09.05.03` |
| schemaVersion | `1` |
| workflowVersion | `2026.09.19.02` |
| rulesVersion | `2026.09.25.2` |
| versionGate | `ok` |
| contentHash | `sha256:6f74282b807da7f2cc1aa57ac64848cd1d75ff3383c0f432eaad7bea53fff80e` |
| analyzedAt | `2026-09-26T02:32:45.000Z` |
| demo | **N/A** |
| realData | `specs/_data-analy/features/web-rmms-incident-chat-real-data.md` |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · **Incident** messages · **cấm ERP.*** |
| uiRepo | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| mfeStdUrl | `http://localhost:9301/web-rmms-incident-chat` |
| mfeStdRoute | `/web-rmms-incident-chat` |
| productRoute | `/incident/:id/chat` |
| taskId | `task_2307d3a0` |
| phoneFrame | `max-width: 430px` |
| formPattern | Mobile chat / full · kit `LinmChatThread` + `LinmChatComposer` · **không** ERP Modal/Slideout Kind B · **không** form master |

> Data-analy **đề xuất** controlHint. Design **chốt** control-map. SA **chốt** DOMAIN-MAP row.  
> Nhãn UI: `useFormOptions()` / copy key — **cấm** hardcode tiếng Việt trên form.  
> **Cấm** nhét phone chat vào MFE desktop · **cấm** iOS/Android native.

## Sources

| Source | Path | note |
|--------|------|------|
| CTX | `docs/context/features/web-rmms-incident-chat.md` | new · written this run |
| Peer CTX | `docs/context/features/incident-chat.md` | Live Mobile.Bff messages · `#sc-incident-chat` |
| Screens | `docs/plan/web-rmms-mobile/SCREENS.md` | `6f74282b…` · `/incident/:id/chat` · GPS: không |
| Peer | `docs/context/features/web-rmms-incident.md` | entry `#i-chat` · INC-C peer |
| DOMAIN-MAP | Incident · peer `web-rmms-incident` | **GAP** slug `web-rmms-incident-chat` chưa có row |
| BFF | Mobile.Bff `:5202` · `mobile-bff/api/v1` | **cấm** Web BFF base |

## Screens Chat (ids)

| id | route / zone | surface |
|----|--------------|---------|
| CH-00 | phone | frame ≤430 · Android 1-1 |
| CH-01 | TopBar | `LinmTopBar` · back · title chat · subtitle incident · **cấm** 2 header |
| CH-02 | thread | bubbles mine/theirs · `isMine` · empty state |
| CH-03 | composer | content Text · send paper-plane · disable khi empty/sending |
| CH-04 | entry | peer list `#i-chat` / `btn-inc-chat-{id}` |

**Out:** `/me*` · feedback · cam-view · create/detail deep · vis · estimate · journal / kết ca / tồn tại / tần suất (`web-rmms-mobile-b`…`e`) · SignalR kit · mnt-chat gộp.

## ControlHint inventory (Chat)

| uiField | screen | controlHint | catalogKind / notes |
|---------|--------|-------------|---------------------|
| phoneFrame | CH-00 | Layout | `max-width: 430px` · center desktop review |
| topBarBack | CH-01 | Button/Nav | back → peer `/incident` |
| topBarTitle | CH-01 | Static | copy `incident.chat.title` |
| topBarSubtitle | CH-01 | Text RO | Code/Title · `GET incidents/{id}` |
| threadList | CH-02 | ChatThread | `LinmChatThread` · GET messages |
| bubbleMine | CH-02 | ChatBubble | `isMine=true` |
| bubbleTheirs | CH-02 | ChatBubble | `isMine=false` |
| emptyThread | CH-02 | EmptyState | copy `incident.chat.empty` |
| composerInput | CH-03 | TextArea | copy placeholder key · required non-empty |
| composerSend | CH-03 | Button | POST messages · paper-plane |

## Filter / grid (desktop HARD)

| | |
|--|--|
| LinErpListFilterBar / DES-GRID-* | **N/A** — phone chat · **không** Kind B desktop grid |
| Chat thread | bubble list · **cấm** ERP list filter bar |

## GPS

| Màn | Rule |
|-----|------|
| CH-00…04 chat | **không** bắt GPS |
| Peer create / photo-geo / vis | peer · `navigator.geolocation` · deny → disable nút cần tọa độ · **cấm** fake |

## UNCLEAR

| id | Issue | Action |
|----|-------|--------|
| UNCLEAR-DOMAIN-MAP-CHAT | DOMAIN-MAP chưa có row `web-rmms-incident-chat` | SA thêm row · Incident · Live messages · cite `web-rmms-incident` |
| UNCLEAR-PARENT-ID | `parentId` reply-only trong peer CTX | PO/Design: P1 flat thread vs reply thread |
| UNCLEAR-POLLING | P1 HTTP only · không SignalR | Design/Dev: pull-to-refresh / re-GET sau POST · **cấm** kit SignalR |

## Handoff

| Role | Dùng |
|------|------|
| PO | Chat screen · GET/POST messages · DoD · no me · no toast-only |
| Design | Phone 430 · zones CH-* · Android 1-1 · prototype+reviewUrl `#sc-incident-chat` |
| SA | DOMAIN-MAP row · Mobile.Bff only · **cấm** invent incident-chat controller |
| TL/Dev | Wire Mobile MFE chat only · entry từ incident list |

## Version meta

`skillVersion=2026.09.05.03` · `schemaVersion=1` · `contentHash=sha256:6f74282b807da7f2cc1aa57ac64848cd1d75ff3383c0f432eaad7bea53fff80e` · `rulesVersion=2026.09.25.2` · `analyzedAt=2026-09-26T02:32:45.000Z`
