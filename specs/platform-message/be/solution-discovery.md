# SA — Solution — platform-message (parcel chat / inbox)

> Status: **confirmed** (`solution_confirm=approve` · autoApprove ON · `task_8aceb84c`)

| Field | Value |
|-------|-------|
| feature | `platform-message` |
| title | [SA] Platform.Message parcel / Chat section |
| this role | `sa` · `/agent-sa` |
| packKind | **`platform`** — **cấm** Kind B DES-GRID / list CRUD / report |
| changeScope | `edit_page` |
| status | `confirmed` |
| design_confirm | **approve** (`task_998f4da4`) |
| solution_confirm | **approve** (autoApprove ON · `task_8aceb84c`) |
| msg_kind | **`parcel_only`** (default · PO / `be_repo_confirm` · **cấm** scaffold Message.Api P1) |
| domain | **Platform parcel** · cite **Medical** messages — **không** DOMAIN-MAP RMMS domain mới |
| BackendRoot (RMMS) | `D:/AI-QLBD/Linm.RMMS.WebService` · **cấm** clone chat · **cấm ERP.*** |
| BE cite (live) | `D:/Medical/Linm.Web.Medical.WebService` · `MessagesController` + entity `…/messages` |
| MFE | `D:\MFE-CORE\Linm.Web.Message` (`@linm/message`) |
| common | `Linm.Web.Common.Components` · ChatTab · CommentsTab · MessageCenter · ChatPanel · `useMessages` · `TabSlideout` |
| notification | `@linm/notification` owns SignalR `start()` |
| prior · design | **confirmed** · `ui/design.md` · prototype · `task_998f4da4` |
| prior · po | **done** · `po/requirement.md` · `task_0dfd8b78` |
| prior · data_analy | **done** · `specs/_data-analy/features/platform-message-control-hint.md` · `platform-message-real-data.md` · contentHash `sha256:d0cbce57a4131006ffab87e075dc05160c8734389e1d9968e6aeadfe484b6cea` |
| autoApprove | **ON** |
| e2eQa | ON · queued `/agent-qa*` — SA **cấm** e2e / `yarn start:std` / build |
| versionGate | `rechecked` |
| taskId | `task_8aceb84c` |
| confirmedBy | agent autoApprove · `task_8aceb84c` |
| updatedAt | `2026-08-25T17:20:00.000Z` |

**Cấm:** invent `api/v1/rmms/messages` · `api/v1/tuan-duong-*` chat · clone `MessagesController` vào `Linm.RMMS.WebService` · Message.Api P1 · `signalRService.start()` trong `@linm/message` · fork ChatTab markup · `window.alert` / `window.confirm` · DES-GRID · Write MFE/native ở role SA · Step 4b / migration ở role SA · re-scan demo.

Standards: `platform-message-service` · `implement-message-service` · `ssot-no-duplicate` · `sa-implement-gates` · `no-parent-json-field` · real-data §B (cite only).

---

## 1. Ownership (DOMAIN-MAP + parcel)

| Layer | Repo / path |
|-------|-------------|
| MFE | `D:\MFE-CORE\Linm.Web.Message` · exports MessageCenter · Inbox · **+ ChatSectionParcel** |
| Common UI | `Linm.Web.Common.Components` · ChatTab / CommentsTab / MessageCenter / ChatPanel |
| FE bind | common `services/message/endpoint.ts` · `conversationEndpoint.ts` · `useMessages` |
| BE cite inbox | Medical `MessagesController` · `GET …/messages/conversations` · `unread-count` · mark-read |
| BE cite thread | Medical Tasks / Tickets / MedicalIncidents controllers · `…/{id}/messages` via `ITaskService` |
| SignalR | `@linm/notification` hub · Message shell **chỉ** `onReconnected` → unread refresh |
| RMMS DOMAIN-MAP | **N/A P1** — slug `platform-message` **không** map vào 15 domain RMMS · **cấm** invent domain Message trên `Linm.RMMS.WebService` |
| Task extract later | `platform-task` / TaskService — entity messages stay on `…/tasks/{id}/messages` · inbox federate = **GAP-PT-INBOX-01 DEFER** |

### Architecture

| Layer | Choice |
|-------|--------|
| Feature Kind | **Platform parcel hub** — Topbar + Inbox + ChatSection |
| msg_kind | **`parcel_only`** |
| Domain prefix (RMMS) | **none** — **cấm** delta API trên RMMS.WebService |
| API (cite) | Medical BFF `web-bff/api/v1` · FE relative `/messages/…` · `/{prefix}/{id}/messages` |
| Persist (this pack) | **không** bảng RMMS mới · **không** `/database-migration` |
| BFF (RMMS) | **N/A** — không proxy mới |
| Auth | reuse Medical / host entity perms — **cấm** invent `rmms.messages.*` P1 |
| Tenant | Medical participant + subscription model (cite) — **cấm** invent RMMS tenant chat table |

### Route decision

| | Choice |
|--|--------|
| Slug | `platform-message` → packKind **platform** |
| FE parcels | `MessageCenterParcel` · `MessagesInboxParcel` (`/messages`) · **`ChatSectionParcel`** (in-entity) |
| API delta RMMS | **none** |
| Step 4b | **N/A** — parcel_only · **cấm** `/new-endpoint` · **cấm** `/database-migration` |
| Rationale | Live Medical cite + common `endpoint.ts` đủ P1 · Dev = `/implement-message-service` |

### SSOT / anti-duplicate

| Concern | Package / rule | Note |
|---------|----------------|------|
| Chat UI | common ChatTab / CommentsTab / ChatPanel | **cấm** fork markup vào Field / Task page |
| Inbox / topbar | `@linm/message` parcels | **cấm** clone MessageCenter vào domain MFE |
| HTTP FE | `endpoint.ts` `routePrefix` + `conversationEndpoint.ts` | **giữ** Medical paths · **cấm** invent RMMS |
| SignalR start | `@linm/notification` | Message MFE reconnect unread only (**MSG-SVC-01**) |
| Detail ↗ | host `routeMap` / `detailRoute` | **cấm** if-domain trong common (**GAP-MSG-ROUTE-01**) |
| Task CRUD | TaskService / `platform-task` | **cấm** nhét lifecycle task vào Message MFE |

---

## 2. Implement gates (confirm)

| Gate | Decision | Endpoints / surfaces | Skill | Note |
|------|----------|----------------------|-------|------|
| TZ | **tz_na** | không DATE filter / form date trên pack | `/review-timezone-implement` | message timestamps display-only · không fromDate/toDate |
| XCO | **xco_na** | không View form GET/{id} message entity | `/implement-view-cross-company` | inbox list + entity thread theo participant Medical · product parcel cite |
| SHARE | **share_na** | **không** bảng RMMS / shared master | `/implement-shared-table` | messages live Medical/TaskService cite · **cấm** `ISharedMasterCatalogEntity` chat |
| Offline | **n/a** | fail → toast · empty thật | — | **cấm** fake demo row · **cấm** silent 5xx |
| Migration | **n/a** | no Schema_* | — | GAP-PT-INBOX-01 later |
| Step 4b | **N/A** | không endpoint RMMS mới | — | parcel_only |

AskQuestion (autoApprove=ON · không chờ board): `msg_kind=parcel_only` · `sa_tz_gate=tz_na` · `sa_xco_gate=xco_na` · `sa_shared_table=share_na` · `solution_confirm=approve` · `2026-08-25T17:20:00.000Z`.

---

## 3. Form data analysis (platform parcel — REQUIRED)

Không Kind B form CRUD. Surfaces = Design §2 · controlHint = data-analy (không đoán).

| Screen / FormMode | Fields (UI) | Source type | Entity |
|-------------------|-------------|-------------|--------|
| S-TOPBAR MessageCenter | unreadBadge · conversationList · detailLink · slideout ChatPanel | api cite Medical inbox + thread | **không** RMMS form entity |
| S-INBOX `/messages` | entityTypeFilter · conversationList · ChatPanel header + messageBody/sendChat | api cite | **không** RMMS form entity |
| S-CHAT-SECTION `mode=both\|chat\|comments` | tabs · messageBody/sendChat · commentBody/sendComment · mute · expand | api cite entity messages + subscription | host entity (task/ticket/incident) |
| S-SKIP Field tuần đường | — | — | **cấm** chat — deep-link Task only |

### FormMode ↔ API (HARD)

| Surface / FormMode | UI action | Method + path (cite) | Body / query | Notes |
|--------------------|-----------|----------------------|--------------|-------|
| Inbox list | load conversations | `GET /messages/conversations?page=&pageSize=&entityType=` | query `entityType?` | ConversationList |
| Unread | badge | `GET /messages/unread-count` | — | MessageParcelShell |
| Open conv | mark-read | `PATCH /messages/conversations/{entityType}/{entityId}/read` | — | on select |
| Compose chat | sendChat | `POST /{prefix}/{id}/messages` | `content` · `type=message` | ChatTab · fa-paper-plane |
| Load chat | messageBody list | `GET /{prefix}/{id}/messages?type=message` | — | ChatTab |
| Compose comment | sendComment | `POST /{prefix}/{id}/messages` | `content` · `type=comment` · `parent_id?` | CommentsTab |
| Load comments | commentBody list | `GET /{prefix}/{id}/messages?type=comment` | — | CommentsTab |
| Mute | toggle bell | `GET/PUT\|POST /subscriptions/{entityType}/{entityId}` | subscription | `useEntitySubscription` |
| Detail ↗ | navigate | — (client) | `routeMap[entityType](id)` / `detailRoute` | **không** API |
| SignalR | live / reconnect | hub owned notification | `HubEvent.NewMessage` | **cấm** Message MFE `start()` |

### Prefix map (`endpoint.ts` `routePrefix` — **giữ** · **cấm** invent)

| entityType | `{prefix}` | GET/POST |
|------------|------------|----------|
| `task` | `tasks` | `/tasks/{id}/messages` |
| `ticket` | `tickets` | `/tickets/{id}/messages` |
| `incident` | `medical-incidents` | `/medical-incidents/{id}/messages` |

### Field map (ui → wire) — controlHint SSOT

| uiField | Label VN | controlHint | Wire | Notes |
|---------|----------|-------------|------|-------|
| unreadBadge | Unread | Text readonly | `GET /messages/unread-count` | badge · không input |
| entityTypeFilter | Loại hội thoại | Dropdown | query `entityType` | closed `ticket`\|`task`\|`incident` |
| conversationList | Danh sách | list | `GET /messages/conversations` | click → ChatPanel |
| entityCode | Mã | Text readonly | DTO `entityIdCode` | header |
| entityTitle | Tiêu đề | Text readonly | `entityTitle` | |
| entityStatus | Trạng thái | Text readonly | `entityStatus` | chip |
| detailLink | Chi tiết | action ↗ | navigate routeMap | **GAP-MSG-ROUTE-01** |
| messageBody | Nhắn tin | Text * | write `content` · `type=message` | D14/M16 · **cấm** label 12 |
| sendChat | Gửi | action fa-paper-plane * | POST messages | |
| commentBody | Bình luận | Text * | write `content` · `type=comment` · `parent_id` | **GAP-PT-COMMON-01** incident |
| sendComment | Gửi Comment | action fa-paper-plane * | same POST | mount via parcel |
| mute | Thông báo | action bell | subscriptions | |
| expandPanel | Mở rộng | action expand | TabSlideout local | |
| chatSection | Trao đổi + Bình luận | parcel | same GET/POST | **GAP-MSG-PARCEL-01** |

`controlHint=UNCLEAR`: **none**.

### Tab index (HARD · GAP-TAB-01)

| Index | id | VN |
|-------|-----|-----|
| 0 | `chat` | Trao đổi |
| 1 | `comments` | Bình luận |

**Cấm** reorder / invent tab.

### ChatSectionParcel prop shape (Design §5 — SA chốt contract · path = TL)

```ts
type MessageEntityType = 'ticket' | 'task' | 'incident';
type ChatSectionMode = 'chat' | 'comments' | 'both';
type MessageRouteMap = Partial<Record<MessageEntityType, (id: string) => string>>;

interface ChatSectionParcelProps {
  entityType: MessageEntityType;
  entityId: string;
  onNavigate: (path: string) => void;
  mode?: ChatSectionMode;       // default 'both'
  routeMap?: MessageRouteMap;   // GAP-MSG-ROUTE-01
  detailRoute?: string;
}
```

| entityType | Medical default (cite) | RMMS proposed (TL `route_confirm`) |
|------------|------------------------|-------------------------------------|
| `task` | `/tasks/:id` | `/cv/:id` |
| `ticket` | `/tickets/:id` | (host) |
| `incident` | `/medical-incidents/:id` | `/su-co/:id` |

---

## 4. API catalog (cite Medical — **không** delta RMMS)

Base FE: Medical BFF `web-bff/api/v1` (relative paths dưới đây). Demo: **N/A** (packKind=platform). data-import: **none**.

### API-01: GET `/messages/conversations` · **CITE LIVE**

| | |
|--|--|
| Purpose | Inbox / topbar conversation list |
| Permission | Medical participant auth (cite) |
| Request | `page` · `pageSize` · `entityType?` (`ticket`\|`task`\|`incident`) |
| Response | paged conversations · `entityIdCode` · `entityTitle` · `entityStatus` · preview |
| Errors | 4xx/5xx → toast · **cấm** silent empty 5xx · **cấm** fake demo row |
| UI | DES-MSG-TOP · DES-MSG-INBOX-L |
| Live | Medical `MessagesController` · FE `conversationEndpoint.ts` |
| gates.tz / xco / shared | n/a · n/a · n/a |
| Migration | none |

### API-02: GET `/messages/unread-count` · **CITE LIVE**

| | |
|--|--|
| Purpose | Topbar unread badge |
| Request | — |
| Response | count |
| UI | DES-MSG-TOP · MessageParcelShell |
| Live | Medical MessagesController · `fetchUnreadMessageCount` |
| gates | n/a |

### API-03: PATCH `/messages/conversations/{entityType}/{entityId}/read` · **CITE LIVE**

| | |
|--|--|
| Purpose | Mark conversation read on open |
| UI | open ChatPanel / select list item |
| Live | `conversationEndpoint.markConversationRead` |
| gates | n/a |

### API-04: GET `/{prefix}/{id}/messages` · **CITE LIVE**

| | |
|--|--|
| Purpose | Load chat (`type=message`) hoặc comment thread (`type=comment`) |
| Request | `type=message\|comment` · page/pageSize per common |
| Response | message DTOs · comment tree via `parentId` |
| UI | DES-MSG-SEC-CHAT · DES-MSG-SEC-CMT · ChatPanel body |
| Live | entity controllers + `ITaskService` · FE `endpoint.ts` |
| gates | n/a |

### API-05: POST `/{prefix}/{id}/messages` · **CITE LIVE**

| | |
|--|--|
| Purpose | Send chat or comment |
| Body | `content` · `type=message\|comment` · `parent_id?` (comment reply) |
| UI | sendChat · sendComment · fa-paper-plane |
| Live | CreateMessage · SignalR `NewMessage` fan-out (cite) |
| gates | n/a |

### API-06: GET/PUT|POST `/subscriptions/{entityType}/{entityId}` · **CITE LIVE**

| | |
|--|--|
| Purpose | Mute / unmute entity notifications |
| UI | mute bell |
| Live | `useEntitySubscription` |
| gates | n/a |

### FormType pack (`platform`)

| Surface | Pattern | Endpoint |
|---------|---------|----------|
| Topbar | Parcel + Slideout | API-01 · API-02 · API-03 · API-04/05 |
| Inbox | Full-page parcel | API-01…05 |
| ChatSection | In-entity tabs | API-04 · API-05 · API-06 |
| CRUD Kind B / report / grid | **OUT** | — |
| Message.Api / RMMS MessagesController | **OUT P1** | trừ user `platform_api` later |

**Cấm** T-UI-LIST / LinCatalogDataGrid / Zone F / invent RMMS chat aggregate.

---

## 5. Persist gate (no-parent-json-field)

| | |
|--|--|
| Parent JSON string inventory (RMMS) | **none** — pack không ghi RMMS entity |
| Child tables this pack (RMMS) | **n/a** |
| Medical / TaskService messages | cite existing `messages` (`entity_type` · `entity_id` · `type` · `parent_id`) — **không** redesign schema P1 |
| Migration | **không** `Schema_*` · **không** `/database-migration` |
| T-BE-API / T-BE-MIG (RMMS) | **n/a** |

---

## 6. Gaps (SA chốt — align PO/Design)

| ID | Decision P1 |
|----|-------------|
| GAP-MSG-PARCEL-01 | **CLOSE** — export `ChatSectionParcel` wrap ChatTab+CommentsTab |
| GAP-MSG-ROUTE-01 | **CLOSE** — host inject `routeMap`/`detailRoute` · TL `route_confirm` path exact |
| GAP-MSG-CAST-01 | **CLOSE** — ChatPanel bỏ cast · pass `incident` |
| GAP-PT-COMMON-01 | **CLOSE** — CommentsTab `entityType` + `'incident'` |
| GAP-PT-COMMENT-UI-01 | **CLOSE** — mount via parcel `mode=both\|comments` |
| GAP-PT-INBOX-01 | **DEFER** — federate inbox sau TaskService extract · **cấm** Message.Api P1 |
| GAP-PT-UI-01 | **OUT** — Medical Task*Page → `platform-task` |
| MSG-SVC-01 | **KEEP** — không `start()` trong Message MFE |
| GAP-TYP-01 | **CLOSE** — label 13 · input D14/M16 |
| GAP-DES-LEAVE-01 | **CLOSE** — LeaveConfirmModal dirty composer |

---

## 7. Live vs delta (audit SA 2026-08-25)

| Surface | Live | SA chốt P1 |
|---------|------|------------|
| MessageCenterParcel · MessagesInboxParcel · MessageParcelShell | **LIVE** MFE | **Giữ** · unread reconnect only |
| ChatSectionParcel | **MISSING** | **DELTA** export + mount contract |
| ChatPanel incident cast | **GAP** cast drop incident | **DELTA** common bỏ cast |
| getDetailRoute Medical hard-code | **GAP** | **DELTA** routeMap host |
| CommentsTab `incident` | **GAP** | **DELTA** common bump |
| Medical messages API | **LIVE** cite | **Giữ path** · **cấm** clone RMMS |
| RMMS.WebService chat | **không** | **Cấm** tạo |
| Message.Api | **không** P1 | **parcel_only** |
| SignalR start in Message | **không** (đúng) | **Giữ** |

---

## 8. Handoff → Team Lead

| Field | Value |
|-------|-------|
| Next slash | `/agent-team-lead` |
| packKind | **`platform`** — **cấm** Kind B list gates / DES-GRID |
| Dev slash | **`/implement-message-service`** (`msg_kind=parcel_only`) |
| Task pack (outline) | T-CTX · T-PARCEL-CHAT-SECTION · T-COMMON-CAST · T-COMMON-COMMENTS-INCIDENT · T-ROUTEMAP · T-LEAVE · T-TYP · T-QA-PARCEL · **cấm** T-BE-API RMMS · **cấm** T-UI-LIST |
| route_confirm | TL chốt `/cv/:id` · `/su-co/:id` (Design proposed) |
| be_repo_confirm | parcel-only · Medical cite · **cấm** RMMS chat |
| ui_repo_confirm | `D:\MFE-CORE\Linm.Web.Message` |
| Chain | autoApprove=ON → TL **pending** enqueue |
| e2eQa | ON · **chỉ** `/agent-qa*` chạy e2e / start:std |

Canonical paths:

- UI: `D:\MFE-CORE\Linm.Web.Message`
- Common: `Linm.Web.Common.Components`
- BE cite: `D:\Medical\Linm.Web.Medical.WebService`
- RMMS BackendRoot (no delta P1): `D:\AI-QLBD\Linm.RMMS.WebService`
- Product specs: `D:\AI-QLBD\Linm.RMMS.Data\specs\platform-message`

---

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-sa |
| skillVersion | 2026.08.24.01 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.25.02 |
| rulesVersion | 2026.08.25.7 |
| generatedAt | 2026-08-25T17:20:00.000Z |
| versionGate | rechecked |
| version_mismatch_action | `recheck_new` (prior design) |
| contentHashPriorDataAnaly | sha256:d0cbce57a4131006ffab87e075dc05160c8734389e1d9968e6aeadfe484b6cea |
| real_view_parity | v1 |
| taskId | `task_8aceb84c` |
| backup | `specs/platform-message/_backup/20260825T152000Z` |

---
<!-- Version meta: skillId=agent-sa skillVersion=2026.08.24.01 schemaVersion=1 workflowVersion=2026.08.25.02 rulesVersion=2026.08.25.7 versionGate=rechecked -->
