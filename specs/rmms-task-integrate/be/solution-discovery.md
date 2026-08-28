# SA — Solution — rmms-task-integrate (RMMS Field × Platform Task/Message)

> Status: **confirmed** (`solution_confirm=approve` · autoApprove ON · `task_cfccd68d`)

| Field | Value |
|-------|-------|
| feature | `rmms-task-integrate` |
| title | RMMS Field patrol/incident → Platform Task create + deep-link + ChatSectionParcel |
| this role | `sa` · `/agent-sa` |
| packKind | **`platform`** (integration · **cấm** Kind B DES-GRID / new Field list page) |
| changeScope | `edit_page` |
| status | **`confirmed`** |
| design_confirm | **approve** (`task_5638b6a9`) |
| solution_confirm | **approve** (autoApprove ON · `task_cfccd68d`) |
| task_kind | **`integration_consumer_p1`** — Field modal create + Task handoff/chat · consumer Platform Task BFF NuGet on RMMS · **cấm** RMMS embed |
| domain | **cross-domain integration** — RMMS `patrol` + `incident` (context GET live) + Platform TaskService (create/detail/messages cite) · **cấm** DOMAIN-MAP domain mới |
| BackendRoot (RMMS) | `D:/AI-QLBD/Linm.RMMS.WebService` · patrol/incident **live** · Task = NuGet consumer only |
| BE cite (P1 interim) | `D:/Medical/Linm.Web.Medical.WebService` · `TasksController` · `ITaskService` · `MessagesController` |
| BE target (P2) | `Linm.Platform.TaskService` · NuGet `Linm.Platform.Task.Bff` on RMMS BFF |
| MFE Field | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Field` (PatrolFormPage · IncidentListPage) |
| MFE Task | `D:/MFE-CORE/Linm.Web.Task` (`HandoffBanner` · `ChatSectionHost` · `/cv/:id`) |
| MFE Message | `D:/MFE-CORE/Linm.Web.Message` (`ChatSectionParcel` · `@linm/message`) |
| MFE shell | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Master` (routeMap inject · post-create navigate) |
| common | `ChatSectionParcel` · `useAppToast` · `routeMap` · `@linm/notification` SignalR `Task_{id}` |
| prior · design | **confirmed** · `ui/design.md` + prototype · `task_5638b6a9` |
| prior · po | **done** · `po/requirement.md` · `task_74794df9` |
| prior · data_analy | **done** · `specs/_data-analy/features/rmms-task-integrate-control-hint.md` · `rmms-task-integrate-real-data.md` · contentHash `sha256:49011e5dfcb8bbbb15adc781a60d62ba44446985c9dbf397806ba69dda786c54` |
| dependsOn | `platform-message` · `platform-task` QA green (prereq P1 · DES-RTI-PREREQ) |
| autoApprove | **ON** |
| e2eQa | ON · queued `/agent-qa*` — SA **cấm** e2e / `yarn start:std` / build |
| devSlash | **`/integrate-task-service`** · **`/integrate-message-service`** (`client_scope=both`) |
| mfeStdUrl | `http://localhost:9301/rmms-task-integrate` |
| versionGate | `rechecked` |
| taskId | `task_cfccd68d` |
| confirmedBy | agent autoApprove · `task_cfccd68d` |
| updatedAt | `2026-08-27T05:17:00.000Z` |

**Cấm:** invent `api/v1/rmms/tasks` · `api/v1/tuan-duong-*` task · `api/v1/td-tk/tasks` · embed `TasksController` vào `Linm.RMMS.WebService` · ChatTab mount Field · re-scan demo · Write MFE/native ở role SA · Step 4b / migration ở role SA · `window.alert` · fork ChatTab markup · ERP.*.

Standards: `platform-task` §4 GAP-PT-SOURCE-01 · hub 24/25/26 · `integrate-task-service` · `integrate-message-service` · `sa-implement-gates` · real-data §B (cite only).

---

## 1. Ownership (DOMAIN-MAP + BFF vs API)

| Layer | Repo / path | P1 (this pack) | P2 |
|-------|-------------|----------------|-----|
| Field touchpoints | `Linm.Web.RMMS.Field` · `/td-tk/:id` · `/su-co` | Modal «Giao việc» Zone B · prereq gate | same |
| Task detail | `Linm.Web.Task` · `/cv/:id` | `HandoffBanner` patrol+incident · `ChatSectionHost` parcel | same |
| Message parcel | `@linm/message` `ChatSectionParcel` | tab 0 Trao đổi · tab 1 Bình luận · `mode=both` | same |
| Shell routeMap | `Linm.Web.RMMS.Master` | `task→/cv/:id` · `incident→/su-co/:id` | same |
| RMMS context API | `PatrolSessionsController` · `IncidentsController` | **live** GET only — **không** delta | same |
| Task create/detail | Platform Task BFF | cite Medical `web-bff/api/v1/tasks` P1 | NuGet `Linm.Platform.Task.Bff` proxy |
| RMMS TasksController | **none** (đúng) | **Cấm** embed | **Cấm** embed — NuGet only |
| SignalR | `@linm/notification` | group `Task_{id}` Task page only · **cấm** Field subscribe | same |

### Architecture

| Layer | Choice |
|-------|--------|
| Feature Kind | **Platform integration** — action/modal Field + banner read-only Task + chat parcel |
| task_kind | **`integration_consumer_p1`** |
| DOMAIN-MAP (RMMS) | `patrol` + `incident` domains **unchanged** · slug `rmms-task-integrate` **không** thêm domain thứ 16 |
| API delta RMMS domain | **none** on Patrol/Incident controllers |
| API delta RMMS BFF P1 | **none** until NuGet · Field calls Task via shell/BFF cite path |
| API delta RMMS BFF P2 | `PackageReference Linm.Platform.Task.Bff` · `AddTaskServiceBff()` — proxy `web-bff/api/v1/tasks` |
| Persist P1 | Medical `tasks` cite · RMMS patrol/incident tables **unchanged** |
| Persist P2 | TaskService `domain_source` columns per §4 · **migration Dev/Step 4b later** |
| Auth | reuse host JWT · **cấm** invent `rmms.tasks.*` permission P1 |

### BFF vs API (chốt)

| Concern | P1 (Dev integrate) | P2 (NuGet live) |
|---------|-------------------|-----------------|
| Patrol/incident context | RMMS BFF `web-bff/api/v1/patrol/sessions/{id}` · `…/incident/incidents/{id}` | same |
| Create task | Medical cite `POST web-bff/api/v1/tasks` (via platform-task bind) | RMMS BFF NuGet → TaskService |
| Task detail/messages | Medical cite `GET/POST …/tasks/{id}` · `…/messages` | same path via NuGet |
| RMMS API domain | **Không** thêm TasksController | **Không** thêm TasksController |
| Field → Task nav | shell `/platform-task/cv/{id}?from=&sourceId=` | same |

### SSOT / anti-duplicate

| Concern | Rule |
|---------|------|
| CreateTask UI | shared modal Zone B on Field — **cấm** inline task form on patrol/incident |
| Chat UI | `ChatSectionParcel` on Task only — **cấm** Field mount |
| HTTP paths | platform-task prefix `web-bff/api/v1/tasks` — **cấm** RMMS invent prefix |
| Handoff banner | query `?from=patrol\|incident&sourceId=` read-only ↗ — **cấm** CRUD source on Task page |
| Demo localStorage CV | zone ref only — **cấm** SSOT |

---

## 2. Implement gates (confirm)

| Gate | Decision | Surfaces | Note |
|------|----------|----------|------|
| TZ | **tz_utc_store** | `dueDate` POST ISO UTC · display local FE | cite Medical `CreateTaskDto.DueDate` |
| XCO | **xco_na** | task list/detail scoped by role (Platform cite) | patrol/incident GET = tenant filter live |
| SHARE | **share_tenant** | `TenantEntity` + `company_id` on TaskService P2 | RMMS session/incident already tenant-scoped |
| Offline | **n/a** | 404 session/incident → toast · **cấm** mở modal | |
| Migration | **defer_p2** | `domain_source` columns TaskService only | **cấm** SA/Dev migration P1 integration pack |
| Step 4b | **N/A** | không endpoint RMMS domain mới | Dev = `/integrate-task-service` NuGet wiring |
| Prereq | **platform_qa_gate** | disable «Giao việc» + tooltip DES-RTI-PREREQ | until `platform-message` + `platform-task` QA green |

AskQuestion (autoApprove=ON · không chờ board): `task_kind=integration_consumer_p1` · `sa_tz_gate=tz_utc_store` · `sa_xco_gate=xco_na` · `sa_shared_table=share_tenant` · `solution_confirm=approve` · `2026-08-27T05:17:00.000Z`.

---

## 3. Form data analysis (integration surfaces — REQUIRED)

Không Kind B grid. Surfaces = Design §2 · controlHint = data-analy (không đoán).

| Surface / FormMode | Fields (UI) | Source type | Entity / API |
|--------------------|-------------|-------------|--------------|
| S-PATROL-FOOTER View | sessionIdCode · sessionRoute · ketCa · giaoViec | api GET patrol session | **không** task entity on Field |
| S-INCIDENT-ACTION View | incidentIdCode · severity · giaoViec | api GET incident | replace mock assign overlay |
| S-GIAO-VIEC-MODAL Confirm | title · description · priority · assignmentStrategy · assigneeId · dueDate · hidden domain fields | derived prefill + user edit | **CreateTaskDto** POST |
| S-POST-CREATE | toast + navigate | client shell | `/platform-task/cv/{id}?from=&sourceId=` |
| S-TASK-HANDOFF View | sourceBanner read-only ↗ | query params | **cấm** session/incident CRUD |
| S-CHAT-SECTION View | messageBody · commentBody · send actions | api messages cite | `ChatSectionParcel` entityType=task |

Field patrol/incident: **`tabs: none`** (modal only). Task detail tabs: index **0** chat · **1** comments (HARD · GAP-TAB-01).

### FormMode ↔ API (HARD)

| Surface / FormMode | UI action | Method + path | Body / query | Notes |
|--------------------|-----------|---------------|--------------|-------|
| Patrol footer View | load context | `GET /web-bff/api/v1/patrol/sessions/{id}` | — | 404 → toast · **cấm** mở modal |
| Incident action View | load context | `GET /web-bff/api/v1/incident/incidents/{id}` | — | 404 → toast |
| Modal Confirm · patrol | Tạo công việc | `POST /web-bff/api/v1/tasks` | §4 + §5 body | `domainSource=patrol` · `sourceEntityType=patrol_session` |
| Modal Confirm · incident | Tạo công việc | `POST /web-bff/api/v1/tasks` | §4 + §5 body | `domainSource=incident` · `assignmentStrategy=direct` default |
| Post-create | navigate | shell route | `?from=patrol\|incident&sourceId={guid}` | DES-RTI-NAV |
| Task detail View | load task | `GET /web-bff/api/v1/tasks/{id}` | — | 404 → toast · fallback list |
| Handoff banner | display ↗ | client query only | `from` · `sourceId` | extend `HandoffBanner` patrol **+** incident |
| Chat tab 0 | load/send message | `GET/POST …/tasks/{id}/messages` | `type=message` | parcel only |
| Comment tab 1 | load/send comment | `GET/POST …/tasks/{id}/messages` | `type=comment` | parcel only |
| SignalR | live refresh | hub `Task_{id}` | Task page only | **cấm** Field `taskGroup` |

### Prefix map — RMMS live (Field context · unchanged)

| Operation | Path |
|-----------|------|
| Patrol detail | `GET /web-bff/api/v1/patrol/sessions/{id}` |
| Patrol list | `GET /web-bff/api/v1/patrol/sessions` |
| Incident detail | `GET /web-bff/api/v1/incident/incidents/{id}` |
| Incident list | `GET /web-bff/api/v1/incident/incidents` |

### Prefix map — Platform Task (create + detail · cite P1 · NuGet P2)

| Operation | Path |
|-----------|------|
| Create | `POST /web-bff/api/v1/tasks` |
| Detail | `GET /web-bff/api/v1/tasks/{id}` |
| Messages | `GET/POST /web-bff/api/v1/tasks/{id}/messages` |

FE bind cite: `D:/Medical/Linm.Web.Medical.Incidents/src/services/task/endpoint.ts` · Dev copy/bind on Field modal service + `@linm/task`.

### Field map (ui → wire) — controlHint SSOT

| uiField | Label VN | controlHint | Wire (POST) | GET context |
|---------|----------|-------------|-------------|-------------|
| sessionIdCode | Mã ca | Text readonly | — | `PatrolSessionDto.code` |
| sessionRoute | Tuyến | Text readonly | prefill `title` | `PatrolSessionDto.route` |
| giaoViec | Giao việc | action | opens modal | — |
| title | Tiêu đề | Text | `title` | derived prefill |
| description | Ghi chú | Text | `description` | optional |
| priority | Ưu tiên | Dropdown | `priority` | §5 map |
| assignmentStrategy | Cách gán | Dropdown | `assignmentStrategy` | patrol=`pool` · incident=`direct` |
| assigneeId | Người nhận | SearchInput | `assigneeId` | when `direct` P2 |
| dueDate | Hạn xử lý | Date | `dueDate` ISO UTC | §5 SLA derive |
| domainSource | Nguồn (hidden) | Text hidden | `domainSource` | const |
| sourceEntityType | Loại nguồn (hidden) | Text hidden | `sourceEntityType` | `patrol_session` \| `incident` |
| sourceEntityId | Id nguồn (hidden) | Text hidden | `sourceEntityId` | Guid route param |
| confirmGiaoViec | Tạo công việc | action | POST | navigate on 201 |
| sourceBanner | Nguồn | Text readonly + ↗ | — | query only |
| messageBody | Nhắn tin | Text | POST `type=message` | GET messages |
| commentBody | Bình luận | Text | POST `type=comment` | GET messages |

`controlHint=UNCLEAR`: **none**.

---

## 4. GAP-PT-SOURCE-01 — domain source on CreateTask (SA chốt · inherit platform-task §4)

**Cross-ref locked:** `specs/platform-task/be/solution-discovery.md` §4 — Dev **không** đổi tên field.

Medical P1 `CreateTaskDto` **chưa** có `DomainSource` columns — POST body vẫn gửi 3 field integration · P1 persist via query handoff + banner · P2 TaskService persist columns.

### Integration POST fields (RMMS pack)

| Field (JSON) | Column P2 | Required integration | Patrol value | Incident value |
|--------------|-----------|----------------------|--------------|----------------|
| `domainSource` | `domain_source` | * | `patrol` | `incident` |
| `sourceEntityType` | `source_entity_type` | * | `patrol_session` | `incident` |
| `sourceEntityId` | `source_entity_id` | * | session Guid | incident Guid |

**Cấm** overload list filter `source` (`created_by_me` \| `from_pool` \| `assigned_by_manager`) — **≠** `domainSource`.

P2 list filter (TaskService only): query `domainSource=patrol|incident` — **DEFER** linkedTaskChip P2.

### Create body — patrol (locked)

```json
POST /web-bff/api/v1/tasks
{
  "title": "Xử lý điểm Cấp bách — QL.1 km 12",
  "description": "Từ kết ca tuần đường",
  "priority": "high",
  "assignmentStrategy": "pool",
  "dueDate": "2026-08-28T10:00:00Z",
  "domainSource": "patrol",
  "sourceEntityType": "patrol_session",
  "sourceEntityId": "aaaaaaaa-bbbb-cccc-dddd-eeeeeeeeeeee"
}
```

### Create body — incident (locked)

```json
{
  "title": "Xử lý sự cố — VD-20260827-0001",
  "description": "…",
  "priority": "high",
  "assignmentStrategy": "direct",
  "assigneeId": "…",
  "dueDate": "2026-08-29T10:00:00Z",
  "domainSource": "incident",
  "sourceEntityType": "incident",
  "sourceEntityId": "…"
}
```

**GAP-PT-TICKET-01:** `ticketId` **optional** — RMMS integration **không** bắt parent ticket.

Handoff query P1 (banner SSOT when DTO columns absent): `/cv/:id?from=patrol&sourceId={sessionId}` | `?from=incident&sourceId={incidentId}`.

---

## 5. GAP-TD-PRIORITY-01 — severity → task priority + dueDate SLA (SA chốt)

Closed enum cite `FormsService.TaskPriorityOptions`: `critical` · `high` · `medium` · `low`.

### A — Patrol pin color (hub 24 §5 · session footer Cấp bách)

| Pin color (VN) | Hub group | Task `priority` | Default `dueDate` (UTC from modal open) |
|----------------|-----------|-----------------|----------------------------------------|
| **Đỏ** (Khẩn) | Cấp bách | `critical` | `now + 24h` |
| **Cam** (Trọng điểm) | Cấp bách | `high` | `now + 48h` |
| **Vàng** (Trong tuần/tháng) | Kế hoạch năm | `medium` | `now + 30d` (P1 default kỳ · TL có thể tune) |
| **Xanh** (Đã xử lý) | — | **cấm** suggest create | — |

**Session-level footer** (GAP-RTI-PATROL-02 · no pin selected): default `priority=high` · `dueDate=now+48h` · title prefill «Xử lý điểm Cấp bách — {route}».

**Point-level** (P2 when pin id available): `sourceEntityType=patrol_point` · map color from pin metadata — P1 session-only uses session defaults above.

### B — Incident severity → task priority (live enum)

RMMS incident `severity` values (Field `INCIDENT_SEVERITIES`): `low` · `medium` · `high` · `critical`.

| `incident.severity` | Task `priority` | Default `dueDate` |
|---------------------|-------------------|-------------------|
| `critical` | `critical` | `now + 24h` |
| `high` | `high` | `now + 48h` |
| `medium` | `medium` | `now + 7d` |
| `low` | `low` | `now + 14d` |

User may override priority/dueDate in modal before confirm — prefill = derived only.

### C — Assignment strategy defaults (locked)

| Surface | Default `assignmentStrategy` | Notes |
|---------|---------------------------|-------|
| Patrol modal | `pool` | Cấp bách → pool Khu |
| Incident modal | `direct` | P2 `assigneeId` SearchInput when direct |

Catalog `task-priority` · `task-assignment-strategy` · `domain-source`: closed enums — **cấm** invent demo `S.PRI`.

---

## 6. routeMap + navigation (Design §5 · TL route_confirm)

```ts
type MessageRouteMap = Partial<Record<MessageEntityType, (id: string) => string>>;

/** RMMS shell inject — GAP-RTI-ROUTE-01 · GAP-MSG-ROUTE-01 */
const RMMS_MESSAGE_ROUTE_MAP: MessageRouteMap = {
  task: (id) => `/cv/${id}`,
  incident: (id) => `/su-co/${id}`,
};
```

| Surface | URL |
|---------|-----|
| Post-create web shell | `/platform-task/cv/{taskId}?from=patrol&sourceId={sessionId}` |
| Incident create | `?from=incident&sourceId={incidentId}` |
| Handoff banner ↗ patrol | `/td-tk/{sourceId}` |
| Handoff banner ↗ incident | `/su-co/{sourceId}` |
| Parcel cross-link task | `/cv/{id}` |
| Parcel cross-link incident | `/su-co/{id}` |

`HandoffBanner` delta: accept `from === 'patrol' | 'incident'` · link ↗ respective RMMS Field routes · read-only strip `#fffbeb`.

`ChatSectionHost` mount shape (cite live):

```tsx
<ChatSectionHost
  taskId={task.id}
  onNavigate={navigate}
  routeMap={{
    task: (id) => `/cv/${id}`,
    incident: (id) => `/su-co/${id}`,
  }}
/>
```

**Cấm** copy ChatTab/CommentsTab markup into Field — parcel + deep-link only.

---

## 7. API catalog (cite · **không** delta RMMS domain P1)

Base Platform: `web-bff/api/v1`. RMMS patrol/incident: existing BFF paths. Demo: **N/A**.

| id | Method | Path | Purpose | UI zone |
|----|--------|------|---------|---------|
| RTI-01 | GET | `/patrol/sessions/{id}` | Patrol modal context | DES-RTI-PATROL-FOOTER |
| RTI-02 | GET | `/incident/incidents/{id}` | Incident modal context | DES-RTI-INC-ACTION |
| RTI-03 | POST | `/tasks` | Create from modal | DES-RTI-MODAL |
| RTI-04 | GET | `/tasks/{id}` | Task detail | `/cv/:id` |
| RTI-05 | GET/POST | `/tasks/{id}/messages` | Chat/comment parcel | DES-MSG-SEC-* |

Live cite:

| API | File |
|-----|------|
| Patrol | `Linm.RMMS.WebService/.../PatrolSessionsController.cs` |
| Incident | `Linm.RMMS.WebService/.../IncidentsController.cs` |
| Task create | Medical `TasksController.CreateTask` · `taskEndpoint.createTask` |
| Messages | Medical `TasksController` messages · platform-message cite |

**GAP-RTI-BFF-01 (Dev):** RMMS BFF `PackageReference Linm.Platform.Task.Bff` — proxy RTI-03..05 — **cấm** clone controller into `Domains/Patrol` or `Domains/Incident`.

---

## 8. Lifecycle / side effects (§E real-data)

| stateField | Create task impact |
|------------|-------------------|
| `PatrolSessionDto.status` | **không** auto-change on POST task |
| `IncidentDto.status` | **không** auto-close on POST task |
| Task status | Platform lifecycle on `/cv/:id` only |
| Link task↔source | POST `domainSource` + `sourceEntityId` P2 · query handoff P1 |

Luồng: Field confirm modal → POST task → toast → shell navigate Task MFE → chat/lifecycle on Task only.

---

## 9. Gaps (SA chốt — align PO/Design)

| ID | Decision |
|----|----------|
| GAP-RTI-PATROL-01 | **CLOSE** — footer «Giao việc» → shared modal |
| GAP-RTI-PATROL-02 | **CLOSE** — prefill priority/dueDate §5A |
| GAP-RTI-INC-01 | **CLOSE** — replace mock `assignName` overlay |
| GAP-RTI-CHAT-01 | **CLOSE** — ChatSectionParcel Task only · **cấm** Field |
| GAP-RTI-ROUTE-01 | **CLOSE** — shell routeMap + post-create query §6 |
| GAP-RTI-BFF-01 | **CLOSE** — NuGet consumer · **cấm** RMMS embed |
| GAP-MSG-ROUTE-01 | **CLOSE** — routeMap `task` + `incident` on host + ChatSectionHost |
| GAP-PT-SOURCE-01 | **CLOSE** — inherit platform-task §4 field names |
| GAP-TD-PRIORITY-01 | **CLOSE** — enum map §5A + §5B |
| GAP-TYP-01 | **CLOSE** — label 13 · input D14/M16 |
| GAP-RTI-PREREQ | **KEEP** — disable CTA until platform QA green |
| GAP-TD-CHANNEL-01 | **DEFER P2** — mobile deep-link `/cv/:id` only |
| GAP-F-OPS-01 | **DEFER P2** — Notification Giao việc out of scope |
| linkedTaskChip P2 | **DEFER** — list by `sourceEntityId` |
| RMMS embed TasksController | **Cấm** |

---

## 10. Live vs delta (audit SA 2026-08-27)

| Surface | Live | SA chốt P1 |
|---------|------|------------|
| Patrol «Giao việc» CTA | **MISSING** | **DELTA** footer + modal |
| Incident «Giao việc» | mock assign overlay | **DELTA** shared modal POST |
| `HandoffBanner` | patrol-only stub | **DELTA** + incident |
| `ChatSectionHost` routeMap | task only | **DELTA** + incident key |
| RMMS TasksController | **none** (đúng) | **Cấm** create |
| Task BFF on RMMS | **MISSING** | **DELTA** NuGet P1 Dev after prereq |
| `domain_source` DB columns | **MISSING** | **DELTA P2** TaskService |
| Patrol/incident GET API | **LIVE** | **Giữ** |
| Medical POST /tasks | **LIVE** cite | **Giữ** bind + integration body |
| `ChatSectionParcel` | **LIVE** | **Mount** on Task detail |

---

## 11. Handoff → Team Lead

| Field | Value |
|-------|-------|
| Next slash | `/agent-team-lead` |
| packKind | **`platform`** integration — **cấm** DES-GRID gates |
| Dev slash | **`/integrate-task-service`** · **`/integrate-message-service`** (`client_scope=both`) |
| Task pack (outline) | T-CTX · T-FIELD-MODAL · T-PATROL-FOOTER · T-INC-ACTION · T-POST-NAV · T-HANDOFF-BANNER · T-PARCEL-ROUTEMAP · T-PREREQ-GATE · T-TYP · **cấm** T-BE-API RMMS domain · **cấm** Field chat |
| route_confirm | TL chốt `/platform-task/cv/{id}` · query `from` `sourceId` · routeMap §6 |
| be_repo_confirm | RMMS patrol/incident live + Platform Task cite/NuGet · **cấm** embed |
| ui_repo_confirm | `Linm.Web.RMMS.Field` modal · `Linm.Web.Task` banner+parcel · shell routeMap |
| GAP-PT-SOURCE-01 | locked §4 — Dev **không** đổi tên field |
| GAP-TD-PRIORITY-01 | locked §5 — Dev bind prefill map |
| blockedReason | Dev integrate after `platform-message` + `platform-task` QA green |
| Chain | autoApprove=ON → TL **pending** enqueue |
| e2eQa | ON · **chỉ** `/agent-qa*` chạy e2e / start:std |

Canonical paths:

- Field: `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Field`
- Task: `D:/MFE-CORE/Linm.Web.Task`
- Parcel: `D:/MFE-CORE/Linm.Web.Message` (`ChatSectionParcel`)
- Shell: `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Master`
- BE RMMS: `D:/AI-QLBD/Linm.RMMS.WebService` (patrol/incident only)
- BE Task cite: `D:/Medical/Linm.Web.Medical.WebService`
- Product specs: `D:/AI-QLBD/Linm.RMMS.Data/specs/rmms-task-integrate`

---

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-sa |
| skillVersion | 2026.08.24.01 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.25.02 |
| rulesVersion | 2026.08.25.7 |
| generatedAt | 2026-08-27T05:17:00.000Z |
| versionGate | rechecked |
| contentHashPriorDataAnaly | sha256:49011e5dfcb8bbbb15adc781a60d62ba44446985c9dbf397806ba69dda786c54 |
| headerFingerprintPrior | sha256:rmms-task-integrate-integration-v1 |
| real_view_parity | v1 |
| taskId | `task_cfccd68d` |

---
<!-- Version meta: skillId=agent-sa skillVersion=2026.08.24.01 schemaVersion=1 workflowVersion=2026.08.25.02 rulesVersion=2026.08.25.7 versionGate=rechecked -->
