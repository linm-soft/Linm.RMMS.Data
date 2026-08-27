# Design — platform-task (Platform.Task / Công việc dùng chung)

| Field | Value |
|-------|-------|
| feature | `platform-task` |
| this role | `design` · `/agent-design` |
| Feature Kind | **Platform task hub** — list (mine/pool/SLA) + detail lifecycle + **`ChatSectionParcel`** (Trao đổi / Bình luận) |
| packKind | **`platform`** (PO confirm) |
| changeScope | `new_page` |
| status | **`confirmed`** (autopilot · `design_confirm=approve`) |
| design_confirm | **`approve`** · autoApprove ON · `2026-08-27T06:15:00.000Z` |
| DEMO | **N/A** · packKind=platform · **cấm** `task.html` SSOT · **cấm** re-scan DemoRoot (hash skip) |
| peer | live `Linm.Web.Tasks` (`TasksListPage` · `TaskDetailPage`) + Medical `task/endpoint.ts` + `@linm/message` **`ChatSectionParcel`** |
| mfe | target `D:\MFE-CORE\Linm.Web.Task` (`@linm/task` · route `/cv` draft) |
| peerStdUrl | `http://localhost:9301/platform-task` |
| mfeStdUrl | `http://localhost:9301/platform-task` |
| backend | cite Medical `ITaskService` / `TasksController` / `SlaController` · **cấm** RMMS.WebService embed |
| common | `ChatTab` · `CommentsTab` · **`ChatSectionParcel`** (`@linm/message`) · `useMessages` · `taskGroup` |
| devSlash | `/implement-task-service` · chat prereq `/implement-message-service` |
| prior | PO **done** · analy hash `sha256:3090b2b000bd6de1f400c259e6e737fcbb64e4aa6b6227c2828d9d77a5d65962` |
| taskId | `task_38f6d3d3` |
| updatedAt | `2026-08-27T06:15:00.000Z` |

## 0. Context / live peer (hash skip — **cấm** demo crawl)

| ID | Path | Notes |
|----|------|-------|
| CTX-01 | `docs/context/features/platform-task.md` | Kind B list + D detail · packKind platform |
| CTX-02 | `docs/context/25-PLATFORM-TASK.md` | Medical → TaskService extract |
| CTX-03 | `docs/context/26-MESSAGE-PARCEL.md` | send/expand/↗ SSOT |
| DA-01 | `specs/_data-analy/features/platform-task-control-hint.md` | controlHint SSOT |
| DA-02 | `specs/_data-analy/features/platform-task-real-data.md` | §A–§F Medical cite |
| PO-01 | `specs/platform-task/po/requirement.md` | DoD · Screens · Leave |
| DEM | **N/A** | platform-pack-live-mfe · zone/tab ref only |
| LIVE-MFE-LIST | `D:\MFE-CORE\Linm.Web.Tasks\src\pages\TasksListPage` | stats · filters · table/kanban — **extract** mine/pool/sla tabs |
| LIVE-MFE-DETAIL | `D:\MFE-CORE\Linm.Web.Tasks\src\pages\TaskDetailPage` | header · lifecycle · **inline** ChatTab/CommentsTab → **thay** bằng parcel |
| LIVE-API | `D:\Medical\Linm.Web.Medical.Incidents\src\services\task\endpoint.ts` | full lifecycle + messages cite |
| LIVE-PARCEL | `D:\MFE-CORE\Linm.Web.Message\src\parcels\ChatSectionParcel.tsx` | shipped · mode=`both` · routeMap |

**real_view_parity:** `v1` · peer = live Task MFE pattern + Message parcel — **không** clone demo host/chrome.

---

## 1. Kind + UI pattern (HARD — **không** Field catalog grid)

| | |
|--|--|
| Feature Kind | **Platform task hub** (list + detail + chat parcel) |
| Field Kind B catalog grid | **N/A** — **cấm** DES-GRID A–D |
| Form CRUD | Detail lifecycle header (Kind D) — **không** master/catalog form |
| Surfaces | S-LIST (zones A–C) · S-DETAIL (zones D–E) · S-CHAT-SECTION (parcel) · S-HANDOFF |
| Chat pattern | **Modern chat/message** via `ChatSectionParcel` — send `fa-paper-plane` · expand `TabSlideout` · ↗ `routeMap` |
| Skip | logo · GOVOne · demo «SignalR mock» note · Field patrol chat form |

### Visual direction — modern platform task + chat parcel

- KPI strip (Kind E): soft cards — Đã gán · Pool · SLA critical · SLA warning
- List: segment tabs underline (`mine` · `pool` · `sla`) + filter bar + card/table rows with SLA chips
- Detail: two-column — main (info + **parcel tabs**) · sidebar (SLA · progress · collaborators P2)
- Chat zone: reuse **`DES-MSG-SEC-*`** parcel zones — bubble thread · sticky composer · mute · expand
- Tokens: `--color-surface` / primary blue · SLA `--sla-warning` / `--sla-danger` (cite `Linm.Web.Tasks` variables)
- Typography: label **13px** · input D14 / M16 (**GAP-TYP-01**)

---

## 2. Screens / zones (PO §7 expand)

| Surface | Pattern | Mount | Zones (DES-PT-*) | Actions |
|---------|---------|-------|------------------|---------|
| **S-LIST** | Platform list + KPI | `/cv` draft · `mfeStdUrl` `/platform-task` | **DES-PT-KPI** · **DES-PT-LIST-TAB** · **DES-PT-FILTER** · **DES-PT-LIST** | tab switch · filter · row click · pool claim |
| **S-DETAIL** | Kind D header + parcel tabs | `/cv/:id` | **DES-PT-DETAIL-HDR** · **DES-PT-DETAIL-INFO** · **DES-PT-DETAIL-ACT** · **DES-PT-SEC-*** | lifecycle · escalate · cancel |
| **S-CHAT-SECTION** | Parcel in-entity | `ChatSectionParcel` on detail | **DES-MSG-SEC-TAB/CHAT/CMT** (cross-ref platform-message) | send · comment · mute · expand |
| **S-HANDOFF** | Read-only banner | `?from=patrol&sourceId=` | **DES-PT-HANDOFF** | **cấm** session CRUD |
| **S-SKIP** | — | Field tuần đường | — | deep-link `/cv/:id` only |

### Zone ids (prototype `data-des-id`)

| id | Surface | Content |
|----|---------|---------|
| `DES-PT-KPI` | List | 4 KPI cards: Đã gán · Pool · SLA critical · SLA warning |
| `DES-PT-LIST-TAB` | List | Segment index 0 `mine` · 1 `pool` · 2 `sla` |
| `DES-PT-FILTER` | List | search · status · priority · source · assignmentStrategy |
| `DES-PT-LIST` | List | Row: idCode · title · source chip · status · assignee · SLA · priority · claim CTA |
| `DES-PT-DETAIL-HDR` | Detail | Back · idCode · title · status chip · priority chip |
| `DES-PT-DETAIL-INFO` | Detail | description · dueDate · assignee · assignmentStrategy · progress P2 |
| `DES-PT-DETAIL-ACT` | Detail | claim · start · submit · complete · block · escalate · cancel |
| `DES-MSG-SEC-TAB` | Detail | Tabs index 0 Trao đổi · 1 Bình luận (parcel SSOT) |
| `DES-MSG-SEC-CHAT` | Detail | ChatTab + composer + `fa-paper-plane` |
| `DES-MSG-SEC-CMT` | Detail | CommentsTab thread + Gửi Comment |
| `DES-PT-HANDOFF` | Detail | Banner «Từ tuần đường» read-only |
| `DES-MSG-LEAVE` | Overlay | `LeaveConfirmModal` dirty composer |

**Cấm** `DES-GRID-A`…`D` trên artifact này.

---

## 3. Current → New (Design chốt)

| Layer | Current (live inventory 2026-08-27) | New (design) |
|-------|-------------------------------------|--------------|
| Repo MFE | **Chưa** `Linm.Web.Task` (**GAP-PT-REPO-01**) | Scaffold `@linm/task` · RMMS `/platform-task` std route |
| List UI | `Linm.Web.Tasks` TasksListPage — list/kanban · generic stats | **Redesign** mine/pool/sla tabs + SLA KPI strip + pool claim row |
| Detail UI | `TaskDetailPage` + `TaskTabs` **inline** ChatTab/CommentsTab | **Thay** chat/comments bằng **`ChatSectionParcel`** `mode=both` (**GAP-MSG-PARCEL-01**) |
| CommentsTab | Medical detail không mount (**GAP-PT-COMMENT-UI-01**) | Parcel `mode=both` |
| Detail ↗ | Medical `/tasks/:id` hard-code (**GAP-MSG-ROUTE-01**) | Host `routeMap` `task→/cv/:id` |
| API client | Medical `task/endpoint.ts` đủ paths | Bind same paths trên MFE mới |
| BE RMMS | none | Consumer cite Medical P1 · NuGet P2 — **cấm** embed |
| Subtasks/checklist | `TaskTabs` checklist tab | **OUT P1** — API cite only |
| Inbox federate | Medical DB | **DEFER** GAP-PT-INBOX-01 |

### GAP close map (Design → Dev)

| ID | Design zone / prop | Dev |
|----|--------------------|-----|
| GAP-PT-REPO-01 | scaffold `@linm/task` | `/implement-task-service` |
| GAP-PT-UI-01 | DES-PT-* list + detail | TaskListPage + TaskDetailPage |
| GAP-PT-COMMENT-UI-01 | parcel `mode=both` | mount ChatSectionParcel |
| GAP-MSG-PARCEL-01 | DES-MSG-SEC-* | prereq `platform-message` |
| GAP-MSG-ROUTE-01 | `routeMap` §5 | host inject · TL `route_confirm` |
| GAP-PT-SOURCE-01 | source chip column | SA chốt DTO |
| GAP-TAB-01 | list 0/1/2 · detail chat 0/1 | **cấm** reorder |
| GAP-TYP-01 | label 13 · input D14/M16 | prototype + Dev |

---

## 4. Field inventory / control-map (Control = controlHint — **không** đoán)

### List filters (Zone DES-PT-FILTER)

| uiField | Label VN | Control | Required | Zone | Notes |
|---------|----------|---------|----------|------|-------|
| listMode | Chế độ xem | Tab (segment) | — | DES-PT-LIST-TAB | `mine` · `pool` · `sla` |
| search | Tìm kiếm | SearchTextInput | — | DES-PT-FILTER | `GET /tasks?search=` |
| status | Trạng thái | Dropdown | — | DES-PT-FILTER | enum task-status |
| priority | Ưu tiên | Dropdown | — | DES-PT-FILTER | enum task-priority |
| source | Nguồn / phạm vi | Dropdown | — | DES-PT-FILTER | enum task-source-filter |
| assignmentStrategy | Chiến lược gán | Dropdown | — | DES-PT-FILTER | direct · pool · team |

### List row (Zone DES-PT-LIST)

| uiField | Label VN | Control | Required | Zone | Notes |
|---------|----------|---------|----------|------|-------|
| idCode | Mã | Text readonly | — | DES-PT-LIST | IdCode — **cấm** Guid |
| title | Tiêu đề | Text readonly | — | DES-PT-LIST | click → detail |
| status | Trạng thái | Text readonly (chip) | — | DES-PT-LIST | lifecycle chip |
| priority | Ưu tiên | Text readonly (chip) | — | DES-PT-LIST | color chip |
| assigneeName | Người nhận | Text readonly | — | DES-PT-LIST | «chưa gán» pool |
| dueDate | Hạn | Date readonly | — | DES-PT-LIST | local display UTC |
| slaSeverity | SLA | Text readonly (chip) | — | DES-PT-LIST | critical/warning/none |
| sourceLabel | Nguồn | Text readonly (chip) | — | DES-PT-LIST | GAP-PT-SOURCE-01 P2 |
| claimAction | Nhận việc | action primary | — | DES-PT-LIST | pool · `PATCH …/claim` |

### KPI strip (Zone DES-PT-KPI)

| uiField | Label VN | Control | API |
|---------|----------|---------|-----|
| kpiAssigned | Đã gán | Text readonly (card) | `GET /tasks/stats` |
| kpiPool | Pool | Text readonly (card) | `GET /tasks/pool/stats` |
| kpiSlaCritical | SLA quá hạn | Text readonly (card) | `GET /sla/alerts?domain=task&severity=critical` |
| kpiSlaWarning | SLA &lt; 24h | Text readonly (card) | `GET /sla/alerts?domain=task&severity=warning` |

### Detail header + lifecycle (Zones DES-PT-DETAIL-*)

| uiField | Label VN | Control | Required | Zone | Notes |
|---------|----------|---------|----------|------|-------|
| idCode | Mã | Text readonly | — | DES-PT-DETAIL-HDR | header |
| title | Tiêu đề | Text | * | DES-PT-DETAIL-HDR | View/Edit |
| description | Mô tả | Text (textarea) | — | DES-PT-DETAIL-INFO | D14/M16 |
| status | Trạng thái | Text readonly (chip) | * | DES-PT-DETAIL-HDR | lifecycle |
| priority | Ưu tiên | Dropdown | * | DES-PT-DETAIL-HDR | enum |
| dueDate | Hạn xử lý | Date | — | DES-PT-DETAIL-INFO | ISO UTC |
| slaSeverity | SLA | Text readonly (chip) | — | DES-PT-DETAIL-INFO | derived |
| claimTask | Nhận việc | action | — | DES-PT-DETAIL-ACT | pool |
| startTask | Bắt đầu | action | — | DES-PT-DETAIL-ACT | `PATCH …/start` |
| submitReview | Gửi duyệt | action | — | DES-PT-DETAIL-ACT | `PATCH …/submit` |
| completeTask | Hoàn thành | action | — | DES-PT-DETAIL-ACT | `PATCH …/complete` |
| blockTask | Chặn | action | — | DES-PT-DETAIL-ACT | reason modal |
| escalateSla | Leo thang SLA | action warn | — | DES-PT-DETAIL-ACT | `POST …/escalate` |
| cancelTask | Hủy | action danger | — | DES-PT-DETAIL-ACT | manager |

### Chat / comment (parcel — cross-ref platform-message §4)

| uiField | Label VN | Control | Zone | Notes |
|---------|----------|---------|------|-------|
| messageBody | Nhắn tin | Text | DES-MSG-SEC-CHAT | input D14/M16 |
| sendChat | Gửi | action `fa-paper-plane` | DES-MSG-SEC-CHAT | `type=message` |
| commentBody | Bình luận | Text (textarea) | DES-MSG-SEC-CMT | D14/M16 |
| sendComment | Gửi Comment | action `fa-paper-plane` | DES-MSG-SEC-CMT | `type=comment` |
| expandPanel | Mở rộng | action `fa-expand` | DES-MSG-SEC-* | `TabSlideout` |
| detailLink | Chi tiết | action ↗ | DES-MSG-SEC-TAB | `routeMap` |

`controlHint=UNCLEAR`: **none**.

### Tab index (HARD · GAP-TAB-01)

**List surface (`/cv`):**

| Index | id | VN | API |
|-------|-----|-----|-----|
| 0 | `mine` | Của tôi | `GET /tasks` |
| 1 | `pool` | Pool chờ nhận | `GET /tasks/pool` |
| 2 | `sla` | Cảnh báo SLA | `GET /sla/alerts?domain=task` |

**Detail surface (`/cv/:id`):**

| Index | id | VN | Component |
|-------|-----|-----|-----------|
| 0 | `chat` | Trao đổi | `ChatSectionParcel` → ChatTab |
| 1 | `comments` | Bình luận | `ChatSectionParcel` → CommentsTab |

**Cấm** reorder / invent tab P1.

---

## 5. ChatSectionParcel — mount shape (Design chốt · TL path confirm)

Reuse prop shape từ `platform-message` design §5 (live `ChatSectionParcel.tsx`):

```ts
interface TaskDetailChatProps {
  entityType: 'task';
  entityId: string;
  onNavigate: (path: string) => void;
  mode?: 'both';                    // default both — tabs 0/1
  routeMap?: { task?: (id: string) => string };
  detailRoute?: string;
}
```

**RMMS host inject (proposed — TL `route_confirm`):**

```ts
routeMap={{
  task: (id) => `/cv/${id}`,
}}
```

Detail page mount:

```tsx
<ChatSectionParcel
  entityType="task"
  entityId={task.id}
  mode="both"
  routeMap={hostRouteMap}
  onNavigate={navigate}
/>
```

**Cấm** copy ChatTab/CommentsTab markup vào `@linm/task` — parcel only.

---

## 6. Leave / alert

| Case | Control | Cấm |
|------|---------|-----|
| Composer dirty · đổi tab detail / navigate away | `LeaveConfirmModal` (`DES-MSG-LEAVE` via parcel) | `window.confirm` |
| Cancel/block reason | `Modal` + reason Text | native dialog |
| API 4xx/5xx · lifecycle fail | `useAppToast` / `useAlert` | `window.alert` |
| detail 404 | toast · navigate `/cv` | silent fail |
| SignalR down | reconnect via `@linm/notification` | Message MFE `start()` |

---

## 7. Platform AC (Design mirror PO)

| ID | AC | Prototype zone |
|----|-----|----------------|
| AC-T-01 | List tabs mine/pool/sla index 0/1/2 | DES-PT-LIST-TAB |
| AC-T-02 | KPI strip stats + sla alerts | DES-PT-KPI |
| AC-T-03 | Row idCode · SLA chip · pool claim | DES-PT-LIST |
| AC-T-04 | Detail lifecycle actions | DES-PT-DETAIL-ACT |
| AC-T-05 | Chat tabs = ChatSectionParcel 0/1 | DES-MSG-SEC-TAB |
| AC-T-06 | Send `fa-paper-plane` · expand · ↗ routeMap | DES-MSG-SEC-CHAT |
| AC-T-07 | Toast — **cấm** alert | note Dev |
| AC-T-08 | label 13 · input D14/M16 | prototype CSS |
| AC-T-09 | Empty list thật | empty states |
| AC-T-10 | Field patrol deep-link only | DES-PT-HANDOFF |

---

## Prototype (REQUIRED)

| | |
|--|--|
| Artifact | `ui/prototype/platform-task-prototype.html` |
| Zones | **DES-PT-KPI** · **DES-PT-LIST-TAB/FILTER/LIST** · **DES-PT-DETAIL-*** · **DES-MSG-SEC-*** · **DES-PT-HANDOFF** |
| Scope | content-only — **skip** logo · GOVOne · demo mock · Field chat |
| SSOT | platform-pack-live-mfe · hub 25/26 · live Tasks MFE + ChatSectionParcel · **cấm** DES-GRID |
| **reviewUrl** | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/platform-task/ui/prototype/platform-task-prototype.html` |
| **peerStdUrl** | `http://localhost:9301/platform-task` |
| **real_view_parity** | `v1` |
| shared_grid_example | **N/A** (packKind=platform) |

### Wire (platform task — REQUIRED)

```
[KPI]     Đã gán · Pool · SLA critical · SLA warning
[TAB]     0 Của tôi | 1 Pool | 2 Cảnh báo SLA
[FILTER]  search · status · priority · source · assignmentStrategy
[LIST]    rows · idCode · chips · claim CTA (pool)
[HDR]     back · idCode · title · status · priority chips
[INFO]    description · due · assignee · SLA
[ACT]     claim · start · submit · complete · block · escalate · cancel
[SEC-TAB] 0 Trao đổi | 1 Bình luận (ChatSectionParcel)
[SEC-CHAT] mute · expand · bubbles · messageBody · fa-paper-plane
[SEC-CMT]  thread · commentBody · Gửi Comment
[HANDOFF] ?from=patrol&sourceId= banner read-only
```

---

## 8. Handoff → SA (`/agent-sa`)

| Field | Value |
|-------|-------|
| design_confirm | **approve** (autopilot) |
| reviewUrl | file://…/platform-task-prototype.html |
| zone ids | DES-PT-* + DES-MSG-SEC-* (không DES-GRID) |
| control-map | §4 = controlHint |
| API | **giữ** Medical cite real-data §A–§F · **cấm** invent RMMS task path |
| listMode→API | mine=`GET /tasks` · pool=`GET /tasks/pool` · sla=`GET /sla/alerts?domain=task` |
| routeMap | §5 · path exact = TL `route_confirm` |
| GAP-PT-SOURCE-01 | SA chốt `CreateTaskDto` domain `source=patrol` |
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
| generatedAt | 2026-08-27T06:15:00.000Z |
| versionGate | rechecked |
| contentHashPriorDataAnaly | sha256:3090b2b000bd6de1f400c259e6e737fcbb64e4aa6b6227c2828d9d77a5d65962 |
| headerFingerprintPrior | sha256:platform-task-mfe-v1 |
| real_view_parity | v1 |
| taskId | `task_38f6d3d3` |

---
<!-- Version meta: skillVersion=2026.08.25.02 · schemaVersion=1 · workflowVersion=2026.08.25.02 · rulesVersion=2026.08.25.7 · versionGate=rechecked -->
