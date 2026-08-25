# PO — Requirement — platform-message

| Field | Value |
|-------|-------|
| feature | `platform-message` |
| this role | `po` · `/agent-po` |
| changeScope | `edit_page` |
| packKind | **`platform`** (PO confirm · **không** list/report/master) |
| Feature Kind | Parcel hub — Topbar MessageCenter + Inbox `/messages` + **ChatSectionParcel** (entity Trao đổi / Bình luận) |
| gap | parcel gaps GAP-MSG-* · GAP-PT-* (cite analy) |
| mode | `feature_context` · **no Excel** |
| status | `done` |
| requestSource | run packet `task_0dfd8b78` · `/agent-qldb-workflow` · roleOnly=`po` · `/agent-po` · Retry from po |
| autoApprove | **ON** (Design/SA/Review khi tới lượt → agent tự confirm · enqueue role kế) |
| e2eQa | **ON** — queued tới `/agent-qa*` · **cấm** e2e / `yarn start:std` ở role PO |
| prior | data-analy **done** · hash skip · `specs/_data-analy/features/platform-message-control-hint.md` · `platform-message-real-data.md` · contentHash `sha256:d0cbce57a4131006ffab87e075dc05160c8734389e1d9968e6aeadfe484b6cea` · **cấm** re-scan demo (**GAP-PO-DEMO-RESCAN-01**) |
| productRoot | `D:/AI-QLBD/Linm.RMMS.Data` |
| mfe | `D:\MFE-CORE\Linm.Web.Message` (`@linm/message`) |
| mfeStdUrl | `http://localhost:9301/platform-message` |
| backend | **parcel-only P1** · cite Medical `MessagesController` + entity `…/messages` · **cấm** invent RMMS.WebService chat · **cấm** Message.Api trừ user `platform_api` |
| be_repo_confirm | `approved` (chat) |
| ui_repo_confirm | `approved` (chat) |
| common | `ChatTab` · `CommentsTab` · `MessageCenter` · `ChatPanel` · `useMessages` · `TabSlideout` |
| devSlash | **`/implement-message-service`** (`msg_kind=parcel_only` default) |
| updatedAt | `2026-08-25T15:35:00.000Z` |
| taskId | `task_0dfd8b78` · analy `task_platform_message_20260825` |

## 1. Goal

Chỉnh **Platform.Message** (`edit_page`): giữ Topbar + Inbox đã ship; **bổ sung** `ChatSectionParcel` + routeMap host + CommentsTab `incident` + bỏ ChatPanel cast — SSOT gửi tin + expand cho task / ticket / incident.

Persona: người nhận việc · điều phối · NV tuần đường (**chỉ** deep-link Task — **cấm** chat trên Field).

**packKind confirm:** `platform` (data-analy đề xuất · PO chốt). Run-packet header `list` = **stale** vs STATUS/analy — **không** áp Grid Kind B.

**Cấm ERP.*** · **cấm** clone chat vào `Linm.RMMS.WebService` · **cấm** `signalRService.start()` trong `@linm/message` · **cấm** `window.alert` / native confirm · **cấm** fork ChatTab markup · **cấm** demo mock / localStorage làm SSOT data.

## 2. Current → New (edit_page · REQUIRED)

| Layer | Current (MFE/common 2026-08-25) | New (delta PO chốt · copy analy) |
|-------|----------------------------------|----------------------------------|
| Demo | `task/task.html` mock Trao đổi/Bình luận | Zone/tab **tham chiếu** only · **cấm** copy chrome / «SignalR mock» note / logo GOVOne |
| CTX / hub 26 | P1 parcel + gaps ghi sẵn | DoD P2 = đóng GAP-MSG-PARCEL-01 · ROUTE-01 · CAST-01 · PT-COMMON-01 · PT-COMMENT-UI-01 |
| MFE export | `message.tsx` Center + Inbox only | + **`ChatSectionParcel`** (`entityType` · `entityId` · `onNavigate` · `mode` · `routeMap`) |
| Topbar / Inbox | MessageCenterParcel · MessagesInboxParcel · MessageParcelShell | **Giữ** · unread reconnect only · send `fa-paper-plane` · expand TabSlideout · toast |
| ChatPanel | ép `entityType as 'ticket'\|'task'` | **Bỏ cast** · truyền `incident` (**GAP-MSG-CAST-01**) |
| Detail ↗ | `getDetailRoute` hard-code Medical | Host **`routeMap`** (RMMS `/cv/:id` · `/su-co/:id` = TL `route_confirm` sau Design) (**GAP-MSG-ROUTE-01**) |
| CommentsTab | `entityType` thiếu `incident` | Thêm `'incident'` (**GAP-PT-COMMON-01**) · mount qua parcel `mode=both\|comments` (**GAP-PT-COMMENT-UI-01**) |
| Inbox federate | Medical DB conversations | **DEFER** GAP-PT-INBOX-01 · TaskService extract later · **cấm** Message.Api P1 |
| SignalR | Message MFE không `start()` | **Giữ** · connection owned `@linm/notification` (**MSG-SVC-01**) |
| API | Cite Medical BFF `web-bff/api/v1` | Giữ path · **cấm** invent `api/v1/rmms/messages` / `tuan-duong-*` chat |

### GAP IDs (PO bắt buộc Design/Dev đóng trong P1 trừ DEFER)

| ID | New |
|----|-----|
| GAP-MSG-PARCEL-01 | Export + mount `ChatSectionParcel` |
| GAP-MSG-ROUTE-01 | `routeMap` / `detailRoute` từ host — **cấm** if-domain trong common |
| GAP-MSG-CAST-01 | ChatPanel bỏ cast `ticket\|task` |
| GAP-PT-COMMON-01 | CommentsTab + `'incident'` |
| GAP-PT-COMMENT-UI-01 | Mount CommentsTab qua parcel |
| GAP-PT-INBOX-01 | **DEFER** federate inbox |
| GAP-PT-UI-01 | Medical Task*Page — **OUT** pack này (platform-task) |

**Không đổi:** `MessageCenterParcel` · `MessagesInboxParcel` · `MessageParcelShell` · send icon · expand · mute bell · toast.

## 3. DoD (đo được)

1. `@linm/message` export **3** parcels: Center · Inbox · **ChatSectionParcel**.
2. ChatSection: tabs SSOT index **0** `chat` Trao đổi · **1** `comments` Bình luận — **cấm** reorder (**GAP-TAB-01**).
3. `mode=chat|comments|both` hoạt động; wrap common ChatTab/CommentsTab — **cấm** copy markup.
4. Send chat / comment: `fa-paper-plane` · POST `…/{prefix}/{id}/messages` `type=message|comment` (+ `parent_id` comment).
5. Expand panel: `TabSlideout` `fa-expand`/`fa-compress`; entity ↗ dùng **routeMap** (không hard-code Medical-only).
6. ChatPanel nhận `incident` (không cast mất).
7. CommentsTab props nhận `incident`.
8. Mute: `fa-bell` / `fa-bell-slash` · `useEntitySubscription`.
9. Unread badge: `GET /messages/unread-count` · mark-read on open · reconnect → refresh unread only.
10. Empty/4xx/5xx: toast · **cấm** `window.alert` · **cấm** silent empty trên 5xx · **cấm** fake row demo.
11. Message MFE **không** gọi `signalRService.start()`.
12. Typography: label **13** · input D14/M16 (**GAP-TYP-01**).
13. FE `yarn build` PASS **ở role Dev** (PO **cấm** chạy build/e2e/start:std).
14. Live: Topbar badge + Inbox + entity chat **không** blank chrome.

## 4. CTX / DEM / DI inventory (hash skip — đọc analy · **không** re-crawl)

| ID | Path | Loại |
|----|------|------|
| CTX-01 | `docs/context/features/platform-message.md` | feature |
| CTX-02 | `docs/context/26-MESSAGE-PARCEL.md` | hub SSOT send/expand · gaps |
| PLAN-01 | `{RulesRoot}/docs/plan/linm-message-service/README.md` | pha 1 NEXT |
| CONTRACT-01 | `{RulesRoot}/common/skill/implement-message-service/example/parcel-contract.md` | 3 exports |
| DEM-01 | `Linm.RMMS.Demo/src/demo/task/task.html` + `js/task-app.js` | mock tab · **không** SSOT data · chrome SKIP |
| DI-01 | — | **no Excel** |
| DA-01 | `D:\AI-QLBD\Linm.RMMS.Data\specs\_data-analy\features\platform-message-control-hint.md` | controlHint SSOT |
| DA-02 | `D:\AI-QLBD\Linm.RMMS.Data\specs\_data-analy\features\platform-message-real-data.md` | real-data §A–§B |
| MFE | `D:\MFE-CORE\Linm.Web.Message` · `http://localhost:9301/platform-message` | UI |
| BE cite | Medical `MessagesController` · `TasksController` / `TicketsController` / `MedicalIncidentsController` `…/messages` | API cite — **không** clone RMMS |
| COMMON | `Linm.Web.Common.Components` ChatTab / CommentsTab / MessageCenter / ChatPanel | SSOT UI |

Normalized header (analy): `entityType|entityId|type|content|parentId|unread|muted`

## 5. controlHint (PO chốt · copy data-analy — Design map UI · SA map API)

`controlHint=UNCLEAR`: **none**.

### Inbox / topbar

| Field key | Label | controlHint | catalogKind | Notes |
|-----------|-------|-------------|-------------|-------|
| unreadBadge | Unread | `Text` readonly (badge) | — | `GET /messages/unread-count` · không input |
| entityTypeFilter | Loại hội thoại | `Dropdown` | message-entity-type | closed `ticket` \| `task` \| `incident` · optional query |
| conversationList | Danh sách | list (not form field) | — | click → ChatPanel · ↗ → routeMap |
| entityCode | Mã | `Text` readonly | — | `entityIdCode` |
| entityTitle | Tiêu đề | `Text` readonly | — | |
| entityStatus | Trạng thái | `Text` readonly | — | chip |
| detailLink | Chi tiết | action `fa-external-link-alt` | — | **không** Text · routeMap |

### Chat / comment (entity + ChatPanel)

| Field key | Label | controlHint | required | Notes |
|-----------|-------|-------------|----------|-------|
| messageBody | Nhắn tin | `Text` | * | input D14/M16 · ChatTab footer · **cấm** label 12 |
| sendChat | Gửi | action `fa-paper-plane` | * | `POST …/messages` `type=message` |
| commentBody | Bình luận | `Text` | * | textarea D14/M16 · CommentsTab |
| sendComment | Gửi Comment | action `fa-paper-plane` | * | `type=comment` · `parent_id` thread |
| mute | Thông báo | action `fa-bell` / `fa-bell-slash` | | `useEntitySubscription` |
| expandPanel | Mở rộng | action `fa-expand` / `fa-compress` | | `TabSlideout` `showExpandButton` |

### Real-data bind (copy §B analy — SA **giữ** path cite)

| uiField | GET / write | sameMfe |
|---------|-------------|---------|
| unreadBadge | `GET /messages/unread-count` | yes (`MessageParcelShell`) |
| conversationList | `GET /messages/conversations?page=&pageSize=&entityType=` | yes |
| messageBody / sendChat | GET/POST `/{prefix}/{id}/messages` `type=message` · write `content` | yes (`ChatTab`) |
| commentBody / sendComment | GET/POST same · `type=comment` · `parent_id` | **gap** incident + mount |
| mute | subscriptions GET · PUT/POST | yes |
| chatSection | same messages GET/POST | **no** — thiếu parcel |
| detailLink | navigate `routeMap` | **gap** hard-code Medical |

**Prefix map** (`endpoint.ts`):

| entityType | `{prefix}` |
|------------|------------|
| `task` | `tasks` |
| `ticket` | `tickets` |
| `incident` | `medical-incidents` |

### Lookup / enum (handoff SA)

| catalogKind | Source | Notes |
|-------------|--------|-------|
| message-entity-type | static | `ticket` · `task` · `incident` |
| message-type | static | `message` · `comment` |

Không CUC2 master. **Cấm** Dropdown cứng từ demo mock.

## 6. Grid AC / Report AC

| Section | Status |
|---------|--------|
| § Grid list AC | **N/A** — packKind `platform` · **không** Kind B catalog (**GAP-PO-GRID-01** không áp) |
| § Report AC | **N/A** — **không** report/dashboard (**GAP-PO-RPT-01** không áp) |

### Platform parcel AC (thay Grid/Report)

| ID | AC |
|----|-----|
| AC-P-01 | 3 exports: MessageCenter · MessagesInbox · **ChatSectionParcel** |
| AC-P-02 | Tabs entity: index 0 Trao đổi · 1 Bình luận — không reorder |
| AC-P-03 | Send = `fa-paper-plane` · expand = TabSlideout · ↗ = routeMap |
| AC-P-04 | ChatPanel + CommentsTab hỗ trợ `incident` |
| AC-P-05 | Không `signalRService.start()` trong Message MFE |
| AC-P-06 | Toast / useAlert — **cấm** `window.alert` / native confirm |
| AC-P-07 | Typography label 13 · input D14/M16 |
| AC-P-08 | Empty list thật · **cấm** fake demo row · 5xx không silent |

## 7. Screens (REQUIRED)

| Surface | Pattern | FormMode | URL / mount | Actions | devSlash |
|---------|---------|----------|-------------|---------|----------|
| S-TOPBAR | Parcel shell + **Slideout** ChatPanel | — | Topbar `TOPBAR_MESSAGE_PARCEL` | badge · list · ↗ · slideout send · footer `/messages` | `/implement-message-service` |
| S-INBOX | **Full page** parcel | — | `/messages` · `MESSAGES_INBOX_PARCEL` | ConversationList + ChatPanel (send + Chi tiết) | `/implement-message-service` |
| S-CHAT-SECTION | Parcel in-entity (tabs) | compose send | Host mount `ChatSectionParcel` trên task/ticket/incident | Trao đổi · Bình luận · mute · expand | `/implement-message-service` |
| S-SKIP | — | — | Field tuần đường | **Cấm** chat form — deep-link Task only | — |

**Cấm** Pattern Slideout làm form CRUD entity. ChatPanel slideout = **inbox/topbar** surface sản phẩm (không Kind D form CRUD).

## 8. Leave / alert (REQUIRED)

| Case | Control | Cấm |
|------|---------|-----|
| Composer draft (messageBody/commentBody) non-empty · đóng slideout / đổi tab entity / navigate away | `LeaveConfirmModal` + leave guard | `window.confirm` / native dialog (**GAP-PO-LEAVE-01**) |
| API 4xx/5xx · send fail · mark-read fail | `useAppToast` / `useAlert` | `window.alert` / `prompt` |
| Xóa / chặn (nếu có action sau) | `useAlert` / `Modal` | native dialog |
| SignalR down | reconnect → `fetchUnreadMessageCount` only | Message MFE `start()` |

## 9. Open questions — PO chốt (autopilot)

| ID | Question | Decision (PO) |
|----|----------|----------------|
| GAP-PO-PK-01 | packKind list vs platform | **`platform`** — không Grid Kind B |
| GAP-PO-BE-01 | RMMS.WebService chat? | **Cấm** · parcel-only · cite Medical |
| GAP-PO-API-01 | Message.Api P1? | **OUT** trừ user `platform_api` |
| GAP-PO-INBOX-01 | Federate inbox TaskService | **DEFER** GAP-PT-INBOX-01 |
| GAP-PO-ROUTE-01 | RMMS `/cv` · `/su-co` | **IN P1** qua routeMap · path exact = TL `route_confirm` sau Design |
| GAP-PO-FIELD-01 | Chat trên Field tuần đường | **Cấm** — deep-link Task (`platform-task` / `rmms-task-integrate` later) |
| GAP-PO-PTASK-01 | Start `platform-task`? | **Không** trong pack này — sticky await |
| GAP-PO-DEMO-01 | Re-scan demo? | **Cấm** — hash skip · đọc control-hint + real-data |

## 10. Out of scope (this pack)

- GAP-PT-INBOX-01 federate inbox / Message.Api P1
- `platform-task` UI / TaskService extract
- `rmms-task-integrate` Field chat
- Clone demo chrome · mock SignalR note · localStorage chat SSOT
- Invent RMMS chat controllers / `api/v1/rmms/messages`
- ERP.* paths
- Re-scan demo HTML / crawl DemoRoot

## 11. Handoff → Design (`/agent-design`)

| Field | Value |
|-------|-------|
| packKind confirm | **`platform`** |
| Kind / surfaces | Topbar parcel · Inbox full page · ChatSectionParcel tabs |
| Prototype | content-only Center / Inbox / ChatSection · **skip** logo · GOVOne · demo mock note |
| reviewUrl | bắt buộc · `autoApprove=ON` → agent tự confirm Design |
| controlHint | §5 — **không** đoán Text vs SearchInput ngoài bảng |
| Screens | §7 · Leave §8 · Platform AC §6 |
| Tab index | 0 chat · 1 comments (analy § Tab index) |
| peerStdUrl | `http://localhost:9301/platform-message` |
| BE | cite Medical only · **cấm** invent RMMS chat |
| routeMap | Design ghi prop shape · TL chốt RMMS path |
| Next roles | design → sa → team-lead → dev → qa → review = **pending** đến lượt · chain ON |
| e2e | queued `/agent-qa*` only |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-po |
| skillVersion | 2026.08.25.01 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.25.01 |
| rulesVersion | 2026.08.25.5 |
| generatedAt | 2026-08-25T15:35:00.000Z |
| versionGate | rechecked |
| version_mismatch_action | `recheck_new` (STATUS · rules 2026.08.25.4 → 2026.08.25.5) |
| contentHashPriorDataAnaly | sha256:d0cbce57a4131006ffab87e075dc05160c8734389e1d9968e6aeadfe484b6cea |
| headerFingerprintPrior | sha256:platform-message-parcel-v1 |
| orchestratorSkillVersion | 2026.08.25.01 |
| orchestratorWorkflowVersion | 2026.08.25.01 |
| dataAnalySkillVersion | 2026.08.25.01 |
| dataAnalyWorkflowVersion | 2026.08.25.01 |
| dataAnalyRulesVersion | 2026.08.25.4 |
| taskId | `task_0dfd8b78` |
| backup | `specs/platform-message/_backup/20260825T152000Z` |

---
<!-- Version meta: skillVersion=2026.08.25.01 · schemaVersion=1 · workflowVersion=2026.08.25.01 · rulesVersion=2026.08.25.5 · versionGate=rechecked -->
