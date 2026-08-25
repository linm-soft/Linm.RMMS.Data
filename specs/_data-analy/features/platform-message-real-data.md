# Real-data bind — platform-message (parcel chat / inbox)

| | |
|---|---|
| feature | `platform-message` |
| packKind | `platform` |
| changeScope | `edit_page` |
| taskId | `task_platform_message_20260825` |
| prefix | Medical BFF `web-bff/api/v1` (cite) · **cấm** invent RMMS chat |
| beRepo | parcel-only P1 · **cấm** `Linm.RMMS.WebService` MessagesController · **cấm** Message.Api trừ `platform_api` |
| uiRepo | `D:\MFE-CORE\Linm.Web.Message` |
| map | `none` |

## § Delta Current vs New (`edit_page` · `task_platform_message_20260825`)

| ID | Current | New |
|----|---------|-----|
| GAP-DA-REAL | Chưa có real-data packet | §A–§F cite Medical + common endpoint |
| Inbox | `MessagesController` Medical live | Giữ path · **không** clone vào RMMS |
| Entity thread | `TasksController` / `TicketsController` / `MedicalIncidentsController` `…/{id}/messages` | Giữ · Task extract → TaskService later (`platform-task`) |
| ChatSection | Host import ChatTab (Medical incident) | Parcel wrap · **cùng** §B |
| Federate inbox | Medical DB | **DEFER** GAP-PT-INBOX-01 |

## §A — Nguồn

| sourceKind | sourceCite | empty | error |
|------------|------------|-------|-------|
| `api` · inbox | `Medical\Linm.Web.Medical.WebService\src\Controllers\MessagesController.cs` `GetConversations` · FE `conversationEndpoint.ts` | Inbox list trống · ChatPanel không chọn | 4xx → toast · **cấm** `window.alert` · **cấm** silent empty nếu 5xx |
| `api` · unread | `MessagesController` `GET unread-count` · `messagesInboxSlice.fetchUnreadMessageCount` | badge 0 | keep last count · toast |
| `api` · mark-read | `PATCH /messages/conversations/{entityType}/{entityId}/read` | — | toast |
| `api` · task thread | `TasksController.GetMessages` / `CreateMessage` `D:\Medical\Linm.Web.Medical.WebService\src\Controllers\TasksController.cs` | ChatTab empty state | 404 entity → toast |
| `api` · ticket thread | `TicketsController` `…/tickets/{id}/messages` | same | same |
| `api` · incident thread | `MedicalIncidentsController` `…/medical-incidents/{id}/messages` | same | same |
| `api` · FE bind | `Linm.Web.Common.Components\src\services\message\endpoint.ts` `routePrefix` | — | — |
| `derived` · live | SignalR `HubEvent.NewMessage` · connection **owned** `@linm/notification` | — | reconnect → `fetchUnreadMessageCount` only |

`sourceCite` = file **có trong repo**. Demo `task-app.js` mock = zone/tab **tham chiếu** — **không** SSOT data (**GAP-DA-REAL-03** nếu dùng demo-json làm API).

## §B — Bind field (HARD)

| uiField | Label | controlHint | catalogKind | GET | write field | sameMfe | sameMobile |
|---------|-------|-------------|-------------|-----|-------------|---------|------------|
| unreadBadge | Unread | Text readonly | — | `GET /messages/unread-count` | — | yes (`MessageParcelShell`) | n/a |
| conversationList | Hội thoại | list | — | `GET /messages/conversations?page=&pageSize=&entityType=` | — | yes (`MessagesInboxParcel` · `MessageCenterParcel`) | n/a |
| entityTypeFilter | Loại | Dropdown | message-entity-type | same query `entityType` | — | yes (optional) | n/a |
| entityCode | Mã | Text readonly | — | conversation DTO `entityIdCode` | — | yes | n/a |
| entityTitle | Tiêu đề | Text readonly | — | `entityTitle` | — | yes | n/a |
| entityStatus | Trạng thái | Text readonly | — | `entityStatus` | — | yes | n/a |
| detailLink | Chi tiết | action ↗ | — | — | — (navigate `routeMap`) | **gap** hard-code Medical | n/a |
| messageBody | Nhắn tin | Text | — | `GET /{prefix}/{id}/messages?type=message` | `content` · `type=message` | yes (`ChatTab`) | n/a |
| sendChat | Gửi | action | — | — | `POST /{prefix}/{id}/messages` | yes | n/a |
| commentBody | Bình luận | Text | — | `GET /{prefix}/{id}/messages?type=comment` | `content` · `type=comment` · `parent_id` | **gap** CommentsTab chưa `incident` | n/a |
| sendComment | Gửi Comment | action | — | — | same POST | **gap** mount | n/a |
| mute | Thông báo | action bell | — | `GET /subscriptions/{entityType}/{entityId}` | PUT/POST subscription | yes (ChatTab props) | n/a |
| chatSection | Trao đổi + Bình luận | parcel | — | same GET messages | same POST | **no** — thiếu `ChatSectionParcel` | n/a |

**Prefix map** (`endpoint.ts` `routePrefix` = Medical controller):

| entityType | `{prefix}` | GET/POST |
|------------|------------|----------|
| `task` | `tasks` | `/tasks/{id}/messages` |
| `ticket` | `tickets` | `/tickets/{id}/messages` |
| `incident` | `medical-incidents` | `/medical-incidents/{id}/messages` |

Inbox aggregator (không entity prefix): `/messages/conversations` · `/messages/unread-count`.

**Cấm** invent `api/v1/tuan-duong-*` chat · `api/v1/rmms/messages` · clone `MessagesController` vào `Linm.RMMS.WebService`.

## §C — Catalog

| catalogKind | search/list API | seed/import cite | Cấm |
|-------------|-----------------|------------------|------|
| message-entity-type | query param · không master search | closed `ticket` \| `task` \| `incident` | Dropdown nhãn demo |
| message-type | query `type=` | `message` \| `comment` | invent type |

## §D — Map / vẽ

`map: none`

## §E — Progress / vòng đời

`progress: none` — tin nhắn không có vòng đời chứng từ. Unread / mute = derived subscription · **không** PATCH status entity.

| stateField | Nguồn | Ai đổi | API | UI |
|------------|-------|--------|-----|-----|
| unreadCount | inbox aggregate | mark-read on open | `PATCH …/read` · `GET unread-count` | badge |
| isMuted | subscription | user toggle | subscriptions PUT | bell |

## §F — Handoff

| Role | Dùng packet |
|------|-------------|
| PO | DoD «inbox/chat = data thật Medical cite» · copy § Delta · packKind `platform` |
| Design | control-map khớp §B · parcel prototype · **cấm** copy demo mock note |
| SA | **giữ path đã cite** · Message.Api chỉ nếu user `platform_api` · FormMode↔API = send/list messages |
| Dev | `/implement-message-service` parcel · **không** trong `roleOnly=data_analy` |
| QA | queued sau Dev — Center / Inbox / ChatSection / ↗ routeMap / no `start()` |

## § Empty / fail

| Case | Behavior |
|------|----------|
| conversations empty | list trống · không ChatPanel · **cấm** fake row demo |
| unread 0 | badge ẩn / 0 |
| GET messages empty | ChatTab / CommentsTab empty copy common |
| 4xx entity | toast · không native dialog |
| 5xx inbox | toast error · **cấm** silent empty (**GAP-DASH-COUNT** N/A · vẫn cấm nuốt 5xx) |
| SignalR down | reconnect unread refresh only · **cấm** Message MFE `start()` |

## § Cấm

| ❌ | ✅ |
|----|-----|
| Demo-json / localStorage chat làm SSOT | Cite Medical controller + `endpoint.ts` |
| RMMS.WebService chat API | Parcel + domain BFF / TaskService later |
| Message.Api P1 bắt buộc | `parcel_only` |
| `signalRService.start()` trong `@linm/message` | `@linm/notification` owns hub |
| Fork ChatTab vào Field | `ChatSectionParcel` + deep-link Task |
| `window.alert` | `useAppToast` / `useAlert` |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-data-analy |
| skillVersion | 2026.08.25.01 |
| schemaVersion | 2 |
| workflowVersion | 2026.08.25.01 |
| rulesVersion | 2026.08.25.4 |
| generatedAt | 2026-08-25T15:20:00.000Z |
| versionGate | rechecked |
| contentHash | sha256:d0cbce57a4131006ffab87e075dc05160c8734389e1d9968e6aeadfe484b6cea |
| taskId | `task_platform_message_20260825` |
| backup | `specs/platform-message/_backup/20260825T152000Z` |
