# Real-data bind — rmms-task-integrate (RMMS Field × Platform Task/Message)

| | |
|---|---|
| feature | `rmms-task-integrate` |
| packKind | `platform` |
| changeScope | `edit_page` |
| taskId | `task_adc7f208` |
| prefix | RMMS BFF `web-bff/api/v1` (patrol/incident live) + Platform Task BFF `web-bff/api/v1/tasks` (cite/NuGet) |
| beRepo | RMMS `PatrolSessionsController` · `IncidentsController` live + **cấm** embed Task — consumer `Linm.Platform.Task.Bff` |
| uiRepo | `Linm.Web.RMMS.Patrol` · `Linm.Web.RMMS.Incident` + `D:\MFE-CORE\Linm.Web.Task` |
| map | `none` |

## § Delta Current vs New (`edit_page` · `task_adc7f208`)

| ID | Current | New |
|----|---------|-----|
| GAP-DA-REAL | Stub draft only | §A–§F cite RMMS live + platform-task/message cross-ref |
| Patrol Giao việc | toast/mock hoặc absent | `POST /tasks` + navigate `/cv/:id` |
| Incident Giao việc | demo CV mock | same POST + `domainSource=incident` |
| Task API on RMMS | **none** (đúng) | BFF NuGet proxy — **cấm** `TasksController` embed |
| Chat on Field | absent (đúng) | deep-link Task · `ChatSectionParcel` on `/cv/:id` |
| Demo | `tuan-duong-web.html` localStorage | zone/handoff ref only — **cấm** SSOT (**GAP-DA-REAL-03**) |

## §A — Nguồn

| sourceKind | sourceCite | empty | error |
|------------|------------|-------|-------|
| `api` · patrol session | `Linm.RMMS.WebService\...\PatrolSessionsController.cs` `GET /api/v1/patrol/sessions/{id}` · BFF `web-bff/api/v1/patrol/sessions/{id}` | — | 404 → toast · **cấm** `window.alert` |
| `api` · patrol list | `GET /api/v1/patrol/sessions` | list trống | 4xx toast · **cấm** silent empty 5xx |
| `api` · incident detail | `IncidentsController.cs` `GET /api/v1/incident/incidents/{id}` · BFF `web-bff/api/v1/incident/incidents/{id}` | — | 404 toast |
| `api` · incident assign (legacy) | `POST …/incidents/{id}/assign` | — | **không** thay CreateTask — assign RMMS user only P1 stub |
| `api` · create task | cite `platform-task/be/solution-discovery.md` `POST /web-bff/api/v1/tasks` · Medical `TasksController` until NuGet | — | 422 business toast |
| `api` · task detail | cite `platform-task-real-data.md` `GET /tasks/{id}` | — | 404 → toast · redirect list |
| `api` · messages | cite `platform-message-real-data.md` `GET/POST /tasks/{id}/messages` | ChatTab empty | parcel on Task page only |
| `derived` · priority map | GAP-TD-PRIORITY-01 severity → `priority` + `dueDate` | default `medium` | — |
| `derived` · live | SignalR `Task_{id}` via `@linm/notification` on Task page | — | **cấm** Field subscribe |
| `demo` · zone ref | `Linm.RMMS.Demo/src/demo/patrol/tuan-duong-web.html` · `task/task.html` | — | **cấm** bind demo-json |

`sourceCite` = file **có trong repo**. Inventory = live RMMS patrol/incident + platform task cite (Medical/NuGet).

## §B — Bind field (HARD)

| uiField | Label | controlHint | catalogKind | GET (context) | write (create task) | sameMfe | sameMobile |
|---------|-------|-------------|-------------|---------------|---------------------|---------|------------|
| sessionIdCode | Mã ca | Text readonly | — | `PatrolSessionDto.idCode` | — | patrol Field | deep-link |
| sessionRoute | Tuyến | Text readonly | road-route | `PatrolSessionDto.route` | prefill `title` | patrol | n/a |
| giaoViecAction | Giao việc | action | — | — | opens modal | patrol/incident | mobile action |
| title | Tiêu đề | Text | — | derived from session/incident | `title` POST | modal | modal |
| description | Ghi chú | Text | — | optional incident desc | `description` POST | modal | modal |
| priority | Ưu tiên | Dropdown | task-priority | map from severity | `priority` POST | modal | modal |
| assignmentStrategy | Gán | Dropdown | task-assignment-strategy | — | `assignmentStrategy` POST | modal | modal |
| assigneeId | Người nhận | SearchInput | users | — | `assigneeId` when direct | modal P2 | modal P2 |
| dueDate | Hạn | Date | — | SLA derive | `dueDate` ISO UTC POST | modal | modal |
| domainSource | Nguồn domain | hidden | domain-source | const per surface | `domainSource` POST | modal | modal |
| sourceEntityType | Loại entity | hidden | — | `patrol_session` \| `incident` | `sourceEntityType` POST | modal | modal |
| sourceEntityId | Id entity | hidden | — | route param | `sourceEntityId` POST | modal | modal |
| confirmGiaoViec | Tạo CV | action | — | — | `POST /tasks` | modal | modal |
| taskDeepLink | Mở CV | action ↗ | — | — | navigate `/cv/:id` | shell | shell |
| sourceBanner | Từ tuần đường | Text + link | — | query `from` `sourceId` | — | Task MFE | n/a |
| messageBody | Nhắn tin | Text | — | `GET /tasks/{id}/messages` | POST `type=message` | Task only (`ChatSectionParcel`) | n/a |
| commentBody | Bình luận | Text | — | same GET | POST `type=comment` | Task only | n/a |

**Prefix map — RMMS live (Field context)**

| Operation | Path |
|-----------|------|
| Patrol detail | `GET /web-bff/api/v1/patrol/sessions/{id}` |
| Patrol list | `GET /web-bff/api/v1/patrol/sessions` |
| Incident detail | `GET /web-bff/api/v1/incident/incidents/{id}` |
| Incident list | `GET /web-bff/api/v1/incident/incidents` |

**Prefix map — Platform Task (create + detail · cite until NuGet live)**

| Operation | Path |
|-----------|------|
| Create | `POST /web-bff/api/v1/tasks` |
| Detail | `GET /web-bff/api/v1/tasks/{id}` |
| Messages | `GET/POST /web-bff/api/v1/tasks/{id}/messages` |

**Create body example — patrol (cite solution-discovery §GAP-PT-SOURCE-01)**

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

**Create body example — incident**

```json
{
  "title": "Xử lý sự cố — VD-20260827-0001",
  "priority": "high",
  "assignmentStrategy": "direct",
  "assigneeId": "…",
  "domainSource": "incident",
  "sourceEntityType": "incident",
  "sourceEntityId": "…"
}
```

**Post-create navigation (HARD)**

| Surface | URL |
|---------|-----|
| Web shell | `/platform-task/cv/{taskId}?from=patrol&sourceId={sessionId}` |
| RMMS routeMap | `task` → `/cv/:id` · `incident` → `/su-co/:id` |

**Cấm** invent `api/v1/td-tk/tasks` · `api/v1/rmms/tasks` · `TasksController` trong `Linm.RMMS.WebService`.

## §C — Catalog

| catalogKind | search/list API | seed/import cite | Cấm |
|-------------|-----------------|------------------|------|
| task-priority | closed enum platform-task | hub 25 | demo `S.PRI` |
| task-assignment-strategy | closed | direct · pool · team | — |
| domain-source | integration closed | `patrol` · `incident` | nhầm `source` list filter |
| patrol-severity-map | derived GAP-TD-PRIORITY-01 | hub 24 màu đỏ/cam/vàng | invent severity |
| users | Integration P2 | — | hard-code demo user |

## §D — Map / vẽ

`map: none` — Integration **không** map canvas. Patrol/incident map pins giữ nguyên — Giao việc = modal only.

Handoff query on Task detail: `?from=patrol&sourceId={sessionId}` | `?from=incident&sourceId={incidentId}` — banner read-only ↗ source.

## §E — Progress / vòng đời

| stateField | Nguồn | Ai đổi | API | UI |
|------------|-------|--------|-----|-----|
| patrol session status | `PatrolSessionDto.status` | NV / supervise | `PUT /patrol/sessions/{id}` | **không** đổi khi create task |
| incident status | `IncidentDto.status` | assign/close | `POST …/assign` · `…/close` | task create **không** auto-close incident |
| task status | TaskService lifecycle | assignee | cite platform-task §E | `/cv/:id` |
| link task↔source | `domainSource` + `sourceEntityId` on task DTO | create only | POST body | banner + chip P2 |

Luồng: Field confirm → POST task → navigate Task MFE → lifecycle + chat trên Task only.

SignalR: group `Task_{id}` — owned Task page / `@linm/notification` · **cấm** Field `taskGroup`.

## §F — Handoff

| Role | Dùng packet |
|------|-------------|
| PO | DoD «Giao việc = POST task thật + deep-link» · prereq platform PASS · packKind `platform` |
| Design | control-map modal Zone B · banner Zone D · **cấm** Field chat tab |
| SA | RMMS BFF NuGet · GAP-PT-SOURCE-01 columns · **cấm** RMMS embed · priority map SA |
| Dev | `/integrate-task-service` `client_scope=both` · `/integrate-message-service` routeMap — **không** trong `roleOnly=data_analy` |
| QA | queued `/agent-qa*` — patrol/incident create → `/cv` chat · no alert · no Field chat |

## § Empty / fail

| Case | Behavior |
|------|----------|
| session 404 | toast · không mở modal |
| incident 404 | toast |
| create task 422 | toast business message · modal stays open |
| create task 5xx | toast error · **cấm** silent success |
| navigate task 404 | toast · fallback `/cv` list |
| messages empty on Task | ChatSectionParcel empty state |
| platform prereq blocked | disable Giao việc CTA + tooltip «Đang triển khai Platform Task» P1 |

## § Cấm

| ❌ | ✅ |
|----|-----|
| Demo-json / localStorage CV mock SSOT | POST platform Task BFF |
| ChatTab fork trong Field patrol/incident | deep-link `/cv/:id` + `ChatSectionParcel` |
| RMMS.WebService TasksController embed | `Linm.Platform.Task.Bff` NuGet |
| `api/v1/tuan-duong-*` task paths | cite platform-task prefix |
| `window.alert` | `useAppToast` / `useAlert` |
| Create task on Task detail page | create only from Field modal |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-data-analy |
| skillVersion | 2026.08.25.01 |
| schemaVersion | 2 |
| workflowVersion | 2026.08.25.01 |
| rulesVersion | 2026.08.25.4 |
| generatedAt | 2026-08-27T05:15:00.000Z |
| versionGate | rechecked |
| contentHash | sha256:49011e5dfcb8bbbb15adc781a60d62ba44446985c9dbf397806ba69dda786c54 |
| taskId | `task_adc7f208` |
