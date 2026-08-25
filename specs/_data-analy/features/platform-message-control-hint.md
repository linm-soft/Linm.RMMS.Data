# Data-analy — controlHint — platform-message (parcel chat / inbox)

| Field | Value |
|-------|-------|
| feature | `platform-message` |
| packKind | `platform` (đề xuất · **không** list/report/master) |
| mode | `feature_context` (edit_page · **no Excel** · CTX + live MFE + Medical cite + demo mock) |
| changeScope | `edit_page` |
| status | `done` |
| skillId | `agent-data-analy` |
| skillVersion | `2026.08.25.01` |
| schemaVersion | `1` |
| workflowVersion | `2026.08.25.01` |
| rulesVersion | `2026.08.25.4` |
| versionGate | `rechecked` |
| contentHash | `sha256:d0cbce57a4131006ffab87e075dc05160c8734389e1d9968e6aeadfe484b6cea` |
| headerFingerprint | `sha256:platform-message-parcel-v1` |
| analyzedAt | `2026-08-25T15:20:00.000Z` |
| cluster | — (không Excel) |
| taskId | `task_platform_message_20260825` |
| editTask | `1` |
| autoApprove | `ON` |
| beRepo | parcel-only · cite Medical `MessagesController` · **cấm** RMMS.WebService chat |
| uiRepo | `D:\MFE-CORE\Linm.Web.Message` (`@linm/message`) |
| common | `Linm.Web.Common.Components` ChatTab / CommentsTab / MessageCenter / ChatPanel |
| devSlash | `/implement-message-service` (`msg_kind=parcel_only` default) |

> Data-analy **đề xuất** controlHint. Design **chốt** control-map. SA **không** invent RMMS chat path.  
> **Cấm** Dev đoán Text vs SearchInput khi đã có bảng này.  
> **Cấm** `signalRService.start()` trong Message MFE. **Cấm** `window.alert`.  
> Typography: label **13** · input D14 / M16 (**GAP-TYP-01**).

## Sources

| Source | Path | Note |
|--------|------|------|
| Context | `docs/context/features/platform-message.md` | packKind platform · P1 parcel |
| Hub | `docs/context/26-MESSAGE-PARCEL.md` | send + expand SSOT · gaps |
| Plan | `{RulesRoot}/docs/plan/linm-message-service/README.md` | pha 1 NEXT |
| Parcel contract | `{RulesRoot}/common/skill/implement-message-service/example/parcel-contract.md` | 3 exports |
| MFE live | `D:\MFE-CORE\Linm.Web.Message` | Center + Inbox **đã có** · **thiếu** `ChatSectionParcel` |
| Common | `ChatTab.tsx` · `CommentsTab.tsx` · `MessageCenter.tsx` · `ChatPanel.tsx` | SSOT UI |
| BE cite | `Medical\Linm.Web.Medical.WebService\src\Controllers\MessagesController.cs` | inbox |
| BE cite | `TasksController` / `TicketsController` / `MedicalIncidentsController` `…/messages` | entity thread |
| Demo | `Linm.RMMS.Demo/src/demo/task/js/task-app.js` | mock Trao đổi / Bình luận — **không** SSOT data · **cấm** copy chrome demo |

Normalized header (no Excel):

`entityType|entityId|type|content|parentId|unread|muted`

## § Delta Current vs New (`edit_page`)

Giữ MessageCenter + Inbox đã ship. **Không** xóa PO/Design (chưa có). Delta `task_platform_message_20260825`:

| ID | Current (MFE/common 2026-08-25) | New (SSOT hub 26) | Surface |
|----|----------------------------------|-------------------|---------|
| GAP-MSG-PARCEL-01 | `message.tsx` chỉ export Center + Inbox | Thêm `ChatSectionParcel` (`entityType` · `entityId` · `onNavigate` · `mode` · `routeMap`) | entity |
| GAP-MSG-ROUTE-01 | `getDetailRoute` hard-code `/tickets` `/tasks` `/medical-incidents` | Host **routeMap** (RMMS `/cv/:id` · `/su-co/:id` chốt TL) | ↗ expand |
| GAP-MSG-CAST-01 | `ChatPanel` ép `entityType as 'ticket' \| 'task'` (icon có incident) | Bỏ cast · truyền `incident` vào `ChatTab` | inbox / slideout |
| GAP-PT-COMMON-01 | `CommentsTabProps.entityType` = `'ticket' \| 'task'` | Thêm `'incident'` | comments |
| GAP-PT-COMMENT-UI-01 | CommentsTab không mount Task/incident form | Mount qua `ChatSectionParcel` `mode=both\|comments` | entity |
| GAP-PT-INBOX-01 | Conversations Medical DB | **DEFER** federate đến TaskService extract · **cấm** Message.Api P1 | inbox |
| MSG-SVC-01 | Message MFE **không** `start()` (đã đúng) | Giữ · reconnect unread only | shell |

**Không** đổi: `MessageCenterParcel` · `MessagesInboxParcel` · `MessageParcelShell` (`fetchUnreadMessageCount` + `onReconnected`) · send `fa-paper-plane` · expand `TabSlideout` · toast not alert.

**Cấm** chat trên Field tuần đường — deep-link Task (`platform-task` / `rmms-task-integrate` later).

## Kind / zones (handoff Design)

| Zone | Pattern | DoD |
|------|---------|-----|
| Topbar | Parcel | `fa-comments` · badge unread · dropdown list · ↗ · slideout ChatPanel · footer `/messages` |
| Inbox | Parcel page | ConversationList + ChatPanel (send + Chi tiết) · `/messages` |
| Entity | `ChatSectionParcel` | ChatTab Trao đổi + CommentsTab thread · `TabSlideout` expand · mute bell |
| Skip chrome | — | logo · GOVOne · demo «SignalR mock» note · Field chat form |

## Control hint — inbox / topbar

| Field key | Label | controlHint | catalogKind | Notes |
|-----------|-------|-------------|-------------|-------|
| unreadBadge | Unread | `Text` readonly (badge) | — | `GET /messages/unread-count` · không input |
| entityTypeFilter | Loại hội thoại | `Dropdown` | enum message-entity-type | closed `ticket` \| `task` \| `incident` · optional query |
| conversationList | Danh sách | list (not form field) | — | click → ChatPanel · ↗ → routeMap |
| entityCode | Mã | `Text` readonly | — | `entityIdCode` |
| entityTitle | Tiêu đề | `Text` readonly | — | |
| entityStatus | Trạng thái | `Text` readonly | — | chip |
| detailLink | Chi tiết | action `fa-external-link-alt` | — | **không** Text · routeMap |

## Control hint — chat / comment (entity + ChatPanel)

| Field key | Label | controlHint | required | Notes |
|-----------|-------|-------------|----------|-------|
| messageBody | Nhắn tin | `Text` | * | input D14/M16 · ChatTab footer · **cấm** label 12 |
| sendChat | Gửi | action `fa-paper-plane` | * | `POST …/messages` `type=message` |
| commentBody | Bình luận | `Text` | * | textarea D14/M16 · CommentsTab |
| sendComment | Gửi Comment | action `fa-paper-plane` | * | `type=comment` · `parent_id` thread |
| mute | Thông báo | action `fa-bell` / `fa-bell-slash` | | `useEntitySubscription` |
| expandPanel | Mở rộng | action `fa-expand` / `fa-compress` | | `TabSlideout` `showExpandButton` |

`controlHint=UNCLEAR`: **none**.

## § Tab index (HARD · GAP-TAB-01)

Demo `task-app.js` + CTX hub 26 §2–4. Role sau **cấm** reorder / invent tab.

### Surface A — Topbar MessageCenter

| Index | id | VN | Kind |
|-------|-----|-----|------|
| — | — | `tabs: none` | shell |

### Surface B — Inbox `/messages`

| Index | id | VN | Kind |
|-------|-----|-----|------|
| — | — | `tabs: none` | page |

### Surface C — Chat section (in-entity) — **SSOT tab order**

| Index | id | VN | Kind |
|-------|-----|-----|------|
| 0 | `chat` | Trao đổi | form tab |
| 1 | `comments` | Bình luận | form tab |

## Lookup / enum (handoff SA)

| catalogKind | Source | Notes |
|-------------|--------|-------|
| message-entity-type | static | `ticket` · `task` · `incident` |
| message-type | static | `message` · `comment` |

Không CUC2 master. **Cấm** Dropdown cứng từ demo mock.

## Handoff → PO

| Field | Value |
|-------|-------|
| feature / packKind | `platform-message` / `platform` (PO confirm) |
| phase_from / phase_to | data_analy → po |
| STATUS | data-analy **done** · chain `roleOnly=po` |
| Context / Demo / DI | CTX + hub 26 · demo mock `task/task.html` · DI none |
| controlHint / UNCLEAR | this file · **none** |
| real-data | `D:\AI-QLBD\Linm.RMMS.Data\specs\_data-analy\features\platform-message-real-data.md` |
| Screens / Pattern / devSlash | Topbar + Inbox + ChatSectionParcel · `/implement-message-service` |
| Open questions | none (routeMap RMMS = TL `route_confirm` sau Design) |
| Next AskQuestion | PO: packKind confirm nếu đổi `platform` |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-data-analy |
| skillVersion | 2026.08.25.01 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.25.01 |
| rulesVersion | 2026.08.25.4 |
| generatedAt | 2026-08-25T15:20:00.000Z |
| versionGate | rechecked |
| contentHash | sha256:d0cbce57a4131006ffab87e075dc05160c8734389e1d9968e6aeadfe484b6cea |
| taskId | `task_platform_message_20260825` |
| backup | `specs/platform-message/_backup/20260825T152000Z` |
