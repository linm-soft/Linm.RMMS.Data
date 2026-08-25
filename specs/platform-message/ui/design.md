# Design — platform-message (parcel chat / inbox)

| Field | Value |
|-------|-------|
| feature | `platform-message` |
| this role | `design` · `/agent-design` |
| Feature Kind | **Platform parcel** — Topbar MessageCenter + Inbox `/messages` + **ChatSectionParcel** (entity Trao đổi / Bình luận) |
| packKind | **`platform`** (PO confirm) |
| changeScope | `edit_page` |
| status | **`confirmed`** (autopilot · `design_confirm=approve`) |
| design_confirm | **`approve`** · autoApprove ON · `2026-08-25T17:05:00.000Z` |
| DEMO | **N/A** · packKind=platform · **cấm** `task.html` SSOT · **cấm** re-scan DemoRoot (hash skip) |
| peer | live `@linm/message` + common ChatTab/CommentsTab/MessageCenter/ChatPanel · Medical `ITaskService` messages cite |
| mfe | `D:\MFE-CORE\Linm.Web.Message` |
| peerStdUrl | `http://localhost:9301/platform-message` |
| mfeStdUrl | `http://localhost:9301/platform-message` |
| backend | parcel-only P1 · cite Medical `MessagesController` + entity `…/messages` · **cấm** invent RMMS chat |
| common | `ChatTab` · `CommentsTab` · `MessageCenter` · `ChatPanel` · `TabSlideout` · `useMessages` · `useEntitySubscription` |
| devSlash | `/implement-message-service` (`msg_kind=parcel_only`) |
| prior | PO **done** · analy hash `sha256:d0cbce57a4131006ffab87e075dc05160c8734389e1d9968e6aeadfe484b6cea` |
| taskId | `task_998f4da4` |
| updatedAt | `2026-08-25T17:05:00.000Z` |

## 0. Context / live peer (hash skip — **cấm** demo crawl)

| ID | Path | Notes |
|----|------|-------|
| CTX-01 | `docs/context/features/platform-message.md` | packKind platform |
| CTX-02 | `docs/context/26-MESSAGE-PARCEL.md` | send/expand SSOT · gaps |
| DA-01 | `specs/_data-analy/features/platform-message-control-hint.md` | controlHint SSOT |
| DA-02 | `specs/_data-analy/features/platform-message-real-data.md` | §A–§B Medical cite |
| PO-01 | `specs/platform-message/po/requirement.md` | DoD · Screens · Leave |
| DEM | **N/A** | platform-pack-live-mfe · **cấm** `task.html` |
| LIVE-MFE | `D:\MFE-CORE\Linm.Web.Message` | Center + Inbox **shipped** · **thiếu** `ChatSectionParcel` |
| LIVE-COMMON | ChatTab / CommentsTab / MessageCenter / ChatPanel | SSOT UI — **cấm** fork markup |
| LIVE-BE | Medical `MessagesController` · `ITaskService` Get/Create messages · Tickets/Incidents `…/messages` | cite only |

**real_view_parity:** `v1` · peer = live Message MFE (`yarn start` / std route) — **không** clone demo host.

---

## 1. Kind + UI pattern (HARD — **không** Kind B)

| | |
|--|--|
| Feature Kind | **Platform parcel hub** (chat/message) |
| List / Grid | **N/A** — **cấm** DES-GRID A–D · **cấm** catalog Kind B |
| Form CRUD | **N/A** — không form entity CRUD trong pack này |
| Surfaces | S-TOPBAR (parcel + **Slideout** ChatPanel) · S-INBOX (full-page split) · S-CHAT-SECTION (in-entity tabs) |
| Pattern Slideout | ChatPanel slideout = **inbox/topbar product surface** — **không** Kind D form CRUD |
| Skip | Field tuần đường chat form · logo GOVOne · demo «SignalR mock» note |

### Visual direction — modern chat/message

- Split inbox: conversation rail + chat pane (parity live `MessagesInboxPage`)
- Bubble thread + sticky composer (`fa-paper-plane`)
- Soft surface tokens (`--color-surface` / primary blue accent) — **không** purple-on-white AI default
- Entity tabs SSOT: index **0** Trao đổi · **1** Bình luận
- Expand: `TabSlideout` `fa-expand`/`fa-compress` · entity ↗ via **routeMap**

---

## 2. Screens / zones (PO §7 expand)

| Surface | Pattern | Mount | Zones (DES-MSG-*) | Actions |
|---------|---------|-------|-------------------|---------|
| **S-TOPBAR** | Parcel shell + Slideout | `TOPBAR_MESSAGE_PARCEL` · `MessageCenterParcel` | **DES-MSG-TOP** icon · badge · dropdown list · item ↗ · slideout ChatPanel · footer «Xem tất cả» | unread · open · send · navigate `/messages` |
| **S-INBOX** | Full-page parcel | `/messages` · `MessagesInboxParcel` | **DES-MSG-INBOX-L** list · **DES-MSG-INBOX-R** ChatPanel · empty | select · reload · send · Chi tiết ↗ · mobile back |
| **S-CHAT-SECTION** | Parcel in-entity | Host `ChatSectionParcel` trên task/ticket/incident | **DES-MSG-SEC-TAB** · **DES-MSG-SEC-CHAT** · **DES-MSG-SEC-CMT** · mute · expand | send chat · send comment · mute · expand · mode |
| **S-SKIP** | — | Field tuần đường | — | **cấm** chat — deep-link Task only |

### Zone ids (prototype `data-des-id`)

| id | Surface | Content |
|----|---------|---------|
| `DES-MSG-TOP` | Topbar | `fa-comments` · unreadBadge · Conversation dropdown · ↗ · ChatPanel slideout |
| `DES-MSG-INBOX-L` | Inbox left | Title «Tin nhắn» · reload · ConversationList · optional entityTypeFilter |
| `DES-MSG-INBOX-R` | Inbox right | ChatPanel header (code/title/status/Chi tiết) · ChatTab body · empty state |
| `DES-MSG-SEC-TAB` | Entity | Tabs index 0 `chat` Trao đổi · 1 `comments` Bình luận |
| `DES-MSG-SEC-CHAT` | Entity | ChatTab + composer messageBody + sendChat · mute · expand |
| `DES-MSG-SEC-CMT` | Entity | CommentsTab thread + commentBody + sendComment |
| `DES-MSG-LEAVE` | Overlay | `LeaveConfirmModal` khi composer dirty |

**Cấm** `DES-GRID-A`…`D` trên artifact này.

---

## 3. Current → New (Design chốt)

| Layer | Current (live MFE 2026-08-25) | New (design) |
|-------|-------------------------------|--------------|
| Exports | Center + Inbox only | + **`ChatSectionParcel`** |
| ChatPanel | cast `ticket\|task` | Bỏ cast · pass **`incident`** (**GAP-MSG-CAST-01**) |
| Detail ↗ | Medical hard-code routes | Host **`routeMap`** / `detailRoute` (**GAP-MSG-ROUTE-01**) |
| CommentsTab | thiếu `incident` | + `'incident'` (**GAP-PT-COMMON-01**) · mount via parcel (**GAP-PT-COMMENT-UI-01**) |
| Topbar / Inbox / Shell | MessageCenter · Inbox · MessageParcelShell | **Giữ** visual + unread reconnect only |
| SignalR | không `start()` | **Giữ** (**MSG-SVC-01**) |
| Inbox federate | Medical DB | **DEFER** GAP-PT-INBOX-01 |

### GAP close map (Design → Dev)

| ID | Design zone / prop | Dev |
|----|--------------------|-----|
| GAP-MSG-PARCEL-01 | `DES-MSG-SEC-*` · export ChatSectionParcel | `/implement-message-service` |
| GAP-MSG-ROUTE-01 | `routeMap` prop shape §5 | Host inject · TL `route_confirm` paths |
| GAP-MSG-CAST-01 | ChatPanel wire `incident` | Common ChatPanel |
| GAP-PT-COMMON-01 | CommentsTab entityType | Common bump |
| GAP-PT-COMMENT-UI-01 | mode=`both`\|`comments` | Parcel mount |
| GAP-PT-INBOX-01 | — | **OUT / DEFER** |
| GAP-TYP-01 | label 13 · input D14/M16 | Prototype + Dev |
| GAP-DES-LEAVE-01 | `DES-MSG-LEAVE` | LeaveConfirmModal |

---

## 4. Field inventory / control-map (Control = controlHint — **không** đoán)

### Inbox / topbar

| uiField | Label VN | Control | Required | Zone | Notes |
|---------|----------|---------|----------|------|-------|
| unreadBadge | Unread | Text readonly (badge) | — | DES-MSG-TOP | `GET /messages/unread-count` · không input |
| entityTypeFilter | Loại hội thoại | Dropdown | — | DES-MSG-INBOX-L | enum `ticket`\|`task`\|`incident` · optional |
| conversationList | Danh sách | list | — | DES-MSG-TOP / INBOX-L | click → ChatPanel |
| entityCode | Mã | Text readonly | — | DES-MSG-INBOX-R | `entityIdCode` |
| entityTitle | Tiêu đề | Text readonly | — | DES-MSG-INBOX-R | |
| entityStatus | Trạng thái | Text readonly (chip) | — | DES-MSG-INBOX-R | |
| detailLink | Chi tiết | action `fa-external-link-alt` | — | DES-MSG-INBOX-R / TOP | **routeMap** — **không** Text |

### Chat / comment

| uiField | Label VN | Control | Required | Zone | Notes |
|---------|----------|---------|----------|------|-------|
| messageBody | Nhắn tin | Text | * | DES-MSG-SEC-CHAT | input D14 / M16 · **cấm** label 12 |
| sendChat | Gửi | action `fa-paper-plane` | * | DES-MSG-SEC-CHAT | POST `type=message` |
| commentBody | Bình luận | Text (textarea) | * | DES-MSG-SEC-CMT | D14 / M16 |
| sendComment | Gửi Comment | action `fa-paper-plane` | * | DES-MSG-SEC-CMT | `type=comment` · `parent_id` |
| mute | Thông báo | action `fa-bell` / `fa-bell-slash` | — | DES-MSG-SEC-CHAT | `useEntitySubscription` |
| expandPanel | Mở rộng | action `fa-expand` / `fa-compress` | — | DES-MSG-SEC-* | `TabSlideout` |

`controlHint=UNCLEAR`: **none**.

### Tab index (HARD · GAP-TAB-01)

| Index | id | VN | Kind |
|-------|-----|-----|------|
| 0 | `chat` | Trao đổi | form tab |
| 1 | `comments` | Bình luận | form tab |

**Cấm** reorder / invent tab.

---

## 5. ChatSectionParcel — prop shape (Design chốt · TL path confirm)

```ts
type MessageEntityType = 'ticket' | 'task' | 'incident';

type ChatSectionMode = 'chat' | 'comments' | 'both';

/** Host inject — cấm if-domain trong common */
type MessageRouteMap = Partial<Record<MessageEntityType, (id: string) => string>>;

interface ChatSectionParcelProps {
  entityType: MessageEntityType;
  entityId: string;
  onNavigate: (path: string) => void;
  mode?: ChatSectionMode;           // default 'both'
  routeMap?: MessageRouteMap;       // GAP-MSG-ROUTE-01
  detailRoute?: string;             // override single entity
}
```

**Proposed RMMS keys (TL `route_confirm` — Design không hard-lock path):**

| entityType | Medical default (cite) | RMMS proposed |
|------------|------------------------|---------------|
| `task` | `/tasks/:id` | `/cv/:id` |
| `ticket` | `/tickets/:id` | (host) |
| `incident` | `/medical-incidents/:id` | `/su-co/:id` |

Wrap **only** common `ChatTab` + `CommentsTab` + `useMessages` — **cấm** copy markup.

---

## 6. Leave / alert

| Case | Control | Cấm |
|------|---------|-----|
| Composer dirty (messageBody/commentBody) · đóng slideout / đổi tab / navigate | `LeaveConfirmModal` (`DES-MSG-LEAVE`) | `window.confirm` |
| API 4xx/5xx · send fail | `useAppToast` / `useAlert` | `window.alert` |
| SignalR down | reconnect → `fetchUnreadMessageCount` only | Message MFE `start()` |

---

## 7. Platform AC (Design mirror PO)

| ID | AC | Prototype |
|----|-----|-----------|
| AC-P-01 | 3 exports: Center · Inbox · ChatSectionParcel | DES-MSG-TOP / INBOX / SEC |
| AC-P-02 | Tabs 0 Trao đổi · 1 Bình luận | DES-MSG-SEC-TAB |
| AC-P-03 | Send `fa-paper-plane` · expand TabSlideout · ↗ routeMap | composer + expand + Chi tiết |
| AC-P-04 | ChatPanel + CommentsTab hỗ trợ `incident` | incident chip in mock |
| AC-P-05 | Không `signalRService.start()` trong Message MFE | note Dev — không mock start |
| AC-P-06 | Toast / LeaveConfirmModal | DES-MSG-LEAVE |
| AC-P-07 | label 13 · input D14 | CSS in prototype |
| AC-P-08 | Empty list thật · không fake demo row SSOT | empty states labeled |

---

## Prototype (REQUIRED)

| | |
|--|--|
| Artifact | `ui/prototype/platform-message-prototype.html` |
| Zones | **DES-MSG-TOP** · **DES-MSG-INBOX-L/R** · **DES-MSG-SEC-TAB/CHAT/CMT** · **DES-MSG-LEAVE** |
| Scope | content-only — **skip** logo · GOVOne · demo mock note · Field chat |
| SSOT | `platform-pack-live-mfe.md` · hub 26 · live Message MFE · **cấm** shared-grid / DES-GRID |
| **reviewUrl** | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/platform-message/ui/prototype/platform-message-prototype.html` |
| **peerStdUrl** | `http://localhost:9301/platform-message` |
| **real_view_parity** | `v1` |
| shared_grid_example | **N/A** (packKind=platform) |

### Wire (platform chat — REQUIRED)

```
[TOP]  fa-comments · badge · dropdown list · ↗ · slideout ChatPanel · footer /messages
[INBOX-L]  Tin nhắn · reload · ConversationList (± entityTypeFilter)
[INBOX-R]  ChatPanel header (code·title·status·Chi tiết) · ChatTab · empty
[SEC-TAB]  0 Trao đổi | 1 Bình luận
[SEC-CHAT] mute bell · expand · bubbles · messageBody · fa-paper-plane Gửi
[SEC-CMT]  comment thread · commentBody · Gửi Comment
[LEAVE]    LeaveConfirmModal (dirty composer)
```

---

## 8. Handoff → SA (`/agent-sa`)

| Field | Value |
|-------|-------|
| design_confirm | **approve** (autopilot) |
| reviewUrl | file://…/platform-message-prototype.html |
| zone ids | DES-MSG-* (không DES-GRID) |
| control-map | §4 = controlHint |
| API | **giữ** Medical cite real-data §A–§B · **cấm** invent RMMS chat · Message.Api OUT |
| FormMode↔API | compose send ↔ POST `…/{prefix}/{id}/messages` |
| routeMap | prop shape §5 · path exact = TL `route_confirm` |
| Next | sa → team-lead → dev → qa → review = **pending** đến lượt |
| e2e | queued `/agent-qa*` only — Design **không** chạy e2e/start:std |

---

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-design |
| skillVersion | 2026.08.25.02 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.25.02 |
| rulesVersion | 2026.08.25.7 |
| generatedAt | 2026-08-25T17:05:00.000Z |
| versionGate | rechecked |
| version_mismatch_action | `recheck_new` (PO rules 2026.08.25.5 → platformMin 2026.08.25.7) |
| contentHashPriorDataAnaly | sha256:d0cbce57a4131006ffab87e075dc05160c8734389e1d9968e6aeadfe484b6cea |
| headerFingerprintPrior | sha256:platform-message-parcel-v1 |
| real_view_parity | v1 |
| taskId | `task_998f4da4` |
| backup | `specs/platform-message/_backup/20260825T152000Z` |

---
<!-- Version meta: skillVersion=2026.08.25.02 · schemaVersion=1 · workflowVersion=2026.08.25.02 · rulesVersion=2026.08.25.7 · versionGate=rechecked -->
