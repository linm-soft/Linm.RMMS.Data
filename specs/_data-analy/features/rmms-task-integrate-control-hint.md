# Data-analy — controlHint — rmms-task-integrate (RMMS × Platform Task/Message)

| Field | Value |
|-------|-------|
| feature | `rmms-task-integrate` |
| packKind | `platform` (integration · **không** list/report/master Field) |
| mode | `feature_context` (edit_page · **no Excel** · CTX hub 24/25/26 + live RMMS cite + platform cite) |
| changeScope | `edit_page` |
| status | `done` |
| skillId | `agent-data-analy` |
| skillVersion | `2026.08.25.01` |
| schemaVersion | `1` |
| workflowVersion | `2026.08.25.01` |
| rulesVersion | `2026.08.25.4` |
| versionGate | `rechecked` |
| contentHash | `sha256:49011e5dfcb8bbbb15adc781a60d62ba44446985c9dbf397806ba69dda786c54` |
| headerFingerprint | `sha256:rmms-task-integrate-integration-v1` |
| analyzedAt | `2026-08-27T05:15:00.000Z` |
| cluster | — (không Excel) |
| taskId | `task_adc7f208` |
| autoApprove | `ON` |
| beRepo | RMMS `PatrolSessionsController` · `IncidentsController` **live** + Platform Task BFF NuGet — **cấm** embed `TasksController` vào `Linm.RMMS.WebService` |
| uiRepo | `Linm.Web.RMMS.Patrol` · `Linm.Web.RMMS.Incident` (Field) + `D:\MFE-CORE\Linm.Web.Task` (`@linm/platform-task` · `/cv`) |
| common | `ChatSectionParcel` (`@linm/message`) · `routeMap` · `useAppToast` |
| devSlash | `/integrate-task-service` · `/integrate-message-service` (`client_scope=both`) |

> Data-analy **đề xuất** controlHint cho **điểm chạm tích hợp** Field → Platform. Design **chốt** control-map trên surface patrol/incident.  
> **Cấm** ChatTab / CommentsTab trong Field tuần đường — deep-link `/cv/:id` only.  
> **Cấm** `window.alert` · **cấm** mock CV localStorage làm SSOT.  
> Typography: label **13** · input D14 / M16 (**GAP-TYP-01**).  
> **DEM N/A** (`platform-pack-live-mfe`) — demo `tuan-duong-web.html` / `task.html` chỉ zone/tab ref · **cấm** SSOT data.

## Sources

| Source | Path | Note |
|--------|------|------|
| Plan | `docs/plan/platform-task/RMMS-TUAN-DUONG.md` | Luồng patrol/incident → TaskService |
| Hub 24 | `docs/context/24-TUAN-DUONG-DUONG-BO.md` | Kết ca · Cấp bách / kế hoạch năm |
| Hub 25 | `docs/context/25-PLATFORM-TASK.md` | CreateTask `domainSource=patrol` |
| Hub 26 | `docs/context/26-MESSAGE-PARCEL.md` | ChatSectionParcel · routeMap |
| Patrol CTX | `docs/context/features/patrol.md` | `/td-tk` · `api/v1/patrol/sessions` live |
| Incident CTX | `docs/context/features/incident.md` | `/su-co` · `api/v1/incident/incidents` live |
| Platform task | `specs/_data-analy/features/platform-task-control-hint.md` | List/detail/SLA — **không** duplicate |
| Platform message | `specs/_data-analy/features/platform-message-control-hint.md` | Parcel + routeMap |
| BE patrol live | `Linm.RMMS.WebService\...\PatrolSessionsController.cs` | `api/v1/patrol/sessions` |
| BE incident live | `Linm.RMMS.WebService\...\IncidentsController.cs` | `api/v1/incident/incidents` |
| BE task cite | `platform-task/be/solution-discovery.md` §GAP-PT-SOURCE-01 | `domainSource` · `sourceEntityId` |
| MFE RMMS | `Linm.Web.RMMS.Master` dev route → `localhost:9302/platform-task/cv` | shell link only P1 |
| Demo zone ref | `Linm.RMMS.Demo/src/demo/patrol/tuan-duong-web.html` · `task/task.html` | handoff ref — **không** SSOT |

Normalized header (integration touchpoints — no Excel):

`domainSource|sourceEntityType|sourceEntityId|title|priority|assignmentStrategy|dueDate|assigneeId`

## § Delta Current vs New (`edit_page`)

| ID | Current (2026-08-27 inventory) | New (SSOT hub 24/25/26 + plan) | Surface |
|----|--------------------------------|--------------------------------|---------|
| GAP-RTI-PATROL-01 | Patrol Field: Kết ca / Giao việc → toast mock hoặc absent | Modal Giao việc → `POST /tasks` `domainSource=patrol` → navigate `/cv/:id` | patrol detail |
| GAP-RTI-PATROL-02 | Điểm Cấp bách chưa auto-suggest task | Confirm modal · map severity → `priority` + `dueDate` SLA ngắn | patrol pin / session |
| GAP-RTI-INC-01 | Incident Giao việc → CV mock | Modal → `POST /tasks` `domainSource=incident` · `sourceEntityId=incidentId` | incident detail |
| GAP-RTI-CHAT-01 | Không chat trên Field (đúng) | Sau create: deep-link Task detail `ChatSectionParcel` | `/cv/:id` |
| GAP-RTI-ROUTE-01 | Hard-code hoặc absent routeMap | RMMS shell `routeMap`: `task=/cv/:id` · `incident=/su-co/:id` | shell + parcel |
| GAP-RTI-BFF-01 | RMMS.WebService **không** TasksController | PackageReference `Linm.Platform.Task.Bff` consumer | BE |
| GAP-TD-PRIORITY-01 | Màu đỏ/cam/vàng chưa map task priority | `critical`/`high` Cấp bách · `medium` kế hoạch năm — **SA chốt** enum | create modal |
| GAP-PT-SOURCE-01 | Medical `source` filter ≠ domain | `domainSource` column P2 — integration dùng create body | POST |
| GAP-TD-CHANNEL-01 | Web-App vs native dual | Mobile Giao việc = sibling deep-link `/cv/:id` — **cấm** native chat form | mobile |

**Không** đổi: Patrol session CRUD path · Incident CRUD path · Task list/detail SSOT (`platform-task`) · Message parcel SSOT (`platform-message`).  
**Cấm** invent `api/v1/tuan-duong-*` task · `api/v1/rmms/tasks` · embed Task trong RMMS.WebService.

## Kind / zones (handoff Design)

Pack **platform integration** = Kind **action/modal** trên Field existing pages + Kind **banner** read-only trên Task detail. **Không** new list page trong Field.

| Zone | Pattern | Host | DoD |
|------|---------|------|-----|
| A | Session detail footer actions | Patrol `/td-tk/:id` | «Kết ca» giữ · thêm «Giao việc» → modal |
| B | Giao việc modal | Patrol + Incident | title prefill · priority · due · assignee/pool · confirm |
| C | Post-create handoff | Field toast + navigate | success → `/cv/:id?from=patrol\|incident&sourceId=` |
| D | Task detail context banner | `Linm.Web.Task` `/cv/:id` | read-only link ↗ session/incident — **cấm** CRUD source entity |
| E | Chat | Task detail tab | `ChatSectionParcel` hub 26 — **cấm** mount trên Field |
| Skip | — | demo chrome · Field chat form · localStorage CV mock |

## Control hint — patrol session (Zone A)

| Field key | Label | controlHint | catalogKind | Notes |
|-----------|-------|-------------|-------------|-------|
| sessionIdCode | Mã ca | `Text` readonly | — | context từ `GET /patrol/sessions/{id}` |
| sessionRoute | Tuyến | `Text` readonly | road-route | prefill title modal |
| ketCa | Kết ca | action primary | — | giữ supervise flow — **không** gộp create task |
| giaoViec | Giao việc | action secondary | — | mở modal Zone B · **cấm** inline task form |
| linkedTaskId | CV liên kết | `Text` readonly | — | sau create · chip link `/cv/:id` P2 |

## Control hint — Giao việc modal (Zone B · patrol + incident)

| Field key | Label | controlHint | required | catalogKind | Notes |
|-----------|-------|-------------|----------|-------------|-------|
| title | Tiêu đề | `Text` | * | — | prefill: «Xử lý điểm Cấp bách — {route} km {km}» hoặc incident title |
| description | Ghi chú | `Text` | | — | textarea D14/M16 · optional note từ ca/sự cố |
| priority | Ưu tiên | `Dropdown` | * | task-priority | map GAP-TD-PRIORITY-01 · default từ severity |
| assignmentStrategy | Cách gán | `Dropdown` | * | task-assignment-strategy | `pool` default patrol Cấp bách · `direct` incident |
| assigneeId | Người nhận | `SearchInput` | | users | khi `assignmentStrategy=direct` |
| dueDate | Hạn xử lý | `Date` | * | — | Cấp bách 24–48h UTC · kế hoạch năm = kỳ SA |
| domainSource | Nguồn (hidden) | `Text` hidden | * | enum domain-source | `patrol` \| `incident` — POST body |
| sourceEntityType | Loại nguồn (hidden) | `Text` hidden | * | — | `patrol_session` \| `patrol_point` \| `incident` |
| sourceEntityId | Id nguồn (hidden) | `Text` hidden | * | — | Guid session/point/incident |
| confirmGiaoViec | Tạo công việc | action primary | * | — | `POST /web-bff/api/v1/tasks` → navigate |
| cancelModal | Hủy | action | | — | đóng modal · **cấm** alert |

## Control hint — incident detail (Zone A incident)

| Field key | Label | controlHint | Notes |
|-----------|-------|-------------|-------|
| incidentIdCode | Mã VĐ | `Text` readonly | `VD-yyyyMMdd-nnnn` |
| severity | Mức độ | `Text` readonly | chip → priority map |
| giaoViec | Giao việc | action | mở modal Zone B · thay CV mock |
| linkedTaskChip | Công việc | `Text` readonly + link | P2 list linked tasks by `sourceEntityId` |

## Control hint — task detail handoff (Zone D · read-only)

| Field key | Label | controlHint | Notes |
|-----------|-------|-------------|-------|
| sourceBanner | Nguồn | `Text` readonly + action ↗ | `?from=patrol&sourceId=` → `/td-tk/:id` hoặc `/su-co/:id` |
| chatSection | Trao đổi | parcel | `ChatSectionParcel` — cross-ref platform-message |
| commentsSection | Bình luận | parcel | same parcel `mode=both` |

`controlHint=UNCLEAR`: **none**.

## § Tab index (HARD · GAP-TAB-01)

Integration **không** thêm tab Field. Task detail tab order = SSOT `platform-task-control-hint.md` Surface B.

### Surface — Task detail (`/cv/:id`) — cite platform-task

| Index | id | VN | Kind |
|-------|-----|-----|------|
| 0 | `chat` | Trao đổi | `ChatSectionParcel` ChatTab |
| 1 | `comments` | Bình luận | `ChatSectionParcel` CommentsTab |

Field patrol/incident: `tabs: none` (modal only).

## Lookup / enum (handoff SA)

| catalogKind | Source | Notes |
|-------------|--------|-------|
| task-priority | `FormsService.TaskPriorityOptions` | `low` · `medium` · `high` · `critical` |
| task-assignment-strategy | platform-task cite | `direct` · `pool` · `team` |
| domain-source | integration closed | `patrol` · `incident` — **≠** list filter `source` |
| patrol-severity-map | GAP-TD-PRIORITY-01 | đỏ/cam → `critical`/`high` · vàng → `medium` |
| users | Integration search P2 | assignee SearchInput |

## Handoff → PO

| Field | Value |
|-------|-------|
| feature / packKind | `rmms-task-integrate` / `platform` (PO confirm) |
| phase_from / phase_to | data_analy → po |
| STATUS | data-analy **done** · chain `roleOnly=po` |
| Context / Demo / DI | plan RMMS-TUAN-DUONG · hub 24/25/26 · demo zone ref only · DI Task.Bff NuGet |
| controlHint / UNCLEAR | this file · **none** |
| real-data | `D:\AI-QLBD\Linm.RMMS.Data\specs\_data-analy\features\rmms-task-integrate-real-data.md` |
| Screens / Pattern / devSlash | Patrol+Incident modal + Task deep-link · `/integrate-task-service` + `/integrate-message-service` |
| Open questions | GAP-TD-PRIORITY-01 exact enum · GAP-TD-CHANNEL-01 native handoff · prereq platform-task QA green |
| Next AskQuestion | PO: packKind confirm · unblock khi `platform-message` + `platform-task` PASS |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-data-analy |
| skillVersion | 2026.08.25.01 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.25.01 |
| rulesVersion | 2026.08.25.4 |
| generatedAt | 2026-08-27T05:15:00.000Z |
| versionGate | rechecked |
| contentHash | sha256:49011e5dfcb8bbbb15adc781a60d62ba44446985c9dbf397806ba69dda786c54 |
| taskId | `task_adc7f208` |
