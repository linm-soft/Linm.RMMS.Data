# Tasks — platform-task

> Team lead · `/agent-team-lead` · `task_be3ed3eb` · autoApprove ON  
> Status: **done** · `route_confirm` = **route_a** (autopilot) · `2026-08-27T06:25:00.000Z`  
> Serial by page+layer · **cấm** parallel same MFE/common file  
> **Cấm** implement product code ở role TL · **cấm** e2e / `yarn start:std` / build

| Field | Value |
|-------|-------|
| feature | `platform-task` |
| title | [TL] Platform.Task / Công việc dùng chung |
| this role | `team_lead` · `/agent-team-lead` |
| packKind | **`platform`** — Kind B list (mine/pool/sla) + Kind E KPI + Kind D detail + **`ChatSectionParcel`** · **cấm** DES-GRID / Field catalog |
| formType | **`platform`** (task hub · SA FormType pack) |
| changeScope | `new_page` |
| task_kind | **`consumer_cite_p1`** — cite Medical BFF P1 · NuGet TaskService P2 |
| design_confirm | **approve** (`task_38f6d3d3`) |
| solution_confirm | **approve** (`task_9e2b3742`) |
| route_confirm | **`route_a`** (autopilot) — list `/cv` · detail `/cv/:id` · RMMS `/platform-task` · `routeMap.task→/cv/:id` |
| autoApprove | **ON** |
| e2eQa | ON · queued `/agent-qa*` only |
| Dev slash | **`/implement-task-service`** · chat prereq **`/implement-message-service`** (`platform-message` done) |
| MFE target | `D:\MFE-CORE\Linm.Web.Task` (`@linm/task`) |
| MFE cite UI | `D:\MFE-CORE\Linm.Web.Tasks` (`TasksListPage` · `TaskDetailPage` · `TaskTabs`) |
| MFE cite API | `D:\Medical\Linm.Web.Medical.Incidents\src\services\task\endpoint.ts` |
| Common / parcel | `D:\MFE-CORE\Linm.Web.Message` (`ChatSectionParcel` `@linm/message`) |
| BE cite | Medical `TasksController` · `ITaskService` · `SlaController` — **cấm** RMMS embed |
| BE target P2 | `API-CORE/Linm.Platform.TaskService` |
| RMMS host | `D:\AI-QLBD\MFE-Source\Linm.Web.RMMS.Master` · mount std `/platform-task` |
| Step 4b / migration | **N/A** P1 |

**Cấm ERP.*** · **cấm** T-BE-API / T-BE-MIG trên `Linm.RMMS.WebService` P1 · **cấm** T-UI-GRID / DES-GRID · **cấm** fork ChatTab markup · **cấm** `signalRService.start()` trong `@linm/message` · **cấm** `window.alert` / `window.confirm` · **cấm** invent `api/v1/rmms/tasks`.

---

## System design checklist

| ID | Chuẩn | Status | Notes |
|----|-------|--------|-------|
| SD-JOB | `/review-event-job` | **n/a** | no platform-job |
| SD-BFF | `/create-bff-api-feature` | **n/a** P1 | cite Medical BFF only · no RMMS proxy |
| SD-AUTH | `/review-ui-authentication` | **reuse** | Medical / host role scope (staff/manager/admin) · **cấm** invent `rmms.tasks.*` P1 |
| SD-TOKEN | `bff-service-token.md` | **n/a** | no new BFF P1 |
| SD-HEADER | X-Company-Id / axios | **reuse** | host apiClient |
| SD-SPLIT | ownership | **pass** | `@linm/task` pages · `@linm/message` parcel · Medical cite · TaskService P2 |
| SD-STATE | redux | **reuse** | page hooks + `@linm/notification` SignalR · **cấm** local auth/toast fork |

---

## route_confirm (LOCKED · autopilot)

AskQuestion `route_confirm` **skipped wait** (`autoApprove=ON`) · chốt **route_a** = Design §5 proposed.

| Key | Path | Notes |
|-----|------|-------|
| **mfeStdRoute** (RMMS shell) | `/platform-task` | `mfeStdUrl` `http://localhost:9301/platform-task` |
| List (MFE internal) | `/cv` | tab mine/pool/sla index 0/1/2 |
| Detail (MFE internal) | `/cv/:id` | lifecycle + parcel tabs |
| Handoff query | `/cv/:id?from=patrol&sourceId=` | read-only banner · **cấm** session CRUD |
| `routeMap.task` | `/cv/:id` | RMMS host inject · GAP-MSG-ROUTE-01 |
| Medical cite (fallback) | `/tasks/:id` | chỉ khi host **không** inject routeMap |

**source.routes (confirmed):**

```text
rmms:      /platform-task          (shell mount · std)
list:      /cv
detail:    /cv/:id
handoff:   ?from=patrol&sourceId=
routeMap:  task=/cv/:id
```

---

## Platform SSOT (REQUIRED)

| Layer | Package / repo | Consume |
|-------|----------------|---------|
| **UI pages** | `MFE-CORE/Linm.Web.Task` (`@linm/task`) | TaskListPage · TaskDetailPage |
| **UI cite** | `MFE-CORE/Linm.Web.Tasks` | extract list/detail pattern — **cấm** copy inline chat |
| **Chat parcel** | `@linm/message` `ChatSectionParcel` | mode=`both` · prereq `platform-message` done |
| **Common** | `Linm.Web.Common.Components` | ChatTab · CommentsTab via parcel only |
| **HTTP** | Medical `task/endpoint.ts` paths | relative `/tasks` on apiClient — **cấm** invent RMMS prefix |
| **SignalR** | `@linm/notification` | join `Task_{id}` · **cấm** Message MFE `start()` |
| **BE P1** | Medical `web-bff/api/v1/tasks` + `sla/*` | cite only |
| **BE P2** | `Linm.Platform.TaskService` NuGet | **queued** extract · **cấm** RMMS embed P1 |

### ssot.reuse (REQUIRED mọi T-UI)

| Concern | Reuse | Cấm |
|---------|-------|-----|
| Task list/detail | `@linm/task` new scaffold | Task pages trong Field RMMS |
| Chat UI | `ChatSectionParcel` `@linm/message` | fork ChatTab/CommentsTab markup |
| HTTP | Medical `endpoint.ts` bind | invent `api/v1/rmms/tasks` |
| Lifecycle | `ITaskService` PATCH map | ad-hoc action paths |
| SLA | `SlaController` derived | invent `sla_alerts` table |
| Toast / leave | `useAppToast` · `LeaveConfirmModal` | `window.alert` / `window.confirm` |
| Typography | label 13 · input D14/M16 | GAP-TYP-01 violation |

## Source assignment

| Field | Value |
|-------|-------|
| `source.mfe` | `D:\MFE-CORE\Linm.Web.Task` (scaffold) |
| `source.mfe_cite` | `D:\MFE-CORE\Linm.Web.Tasks` · `D:\Medical\Linm.Web.Medical.Incidents\src\services\task` |
| `source.routes` | `/cv` · `/cv/:id` · **route_confirm=route_a** · RMMS `/platform-task` |
| `source.backend` | **cite** `D:\Medical\Linm.Web.Medical.WebService` P1 — **cấm** delta RMMS |
| `source.domain` | Platform TaskService (extract P2) — **no** RMMS domain P1 |
| `source.api` | Medical BFF `web-bff/api/v1/tasks` · `sla/alerts` · `sla/tasks/{id}/escalate` |
| `source.bff` | **N/A P1** — consumer direct cite |
| `source.persistence` | Medical DB cite — **cấm** RMMS migration P1 |
| `source.parcel` | `D:\MFE-CORE\Linm.Web.Message` `ChatSectionParcel` |
| Context | `docs/context/features/platform-task.md` · hub `25-PLATFORM-TASK.md` · `26-MESSAGE-PARCEL.md` |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/platform-task/ui/prototype/platform-task-prototype.html` |
| `mfeStdRoute` | `/platform-task` (**locked**) |
| `mfeStdUrl` | `http://localhost:9301/platform-task` |
| `peerStdUrl` | `http://localhost:9301/platform-task` |
| be_repo_confirm | **approved** (cite Medical until extract · PO) |
| ui_repo_confirm | **approved** (scaffold `@linm/task` from live cite · PO) |

---

## Implement gates (from SA)

| Gate | Decision | Apply |
|------|----------|-------|
| TZ | **tz_utc_store** | `dueDate` · `createdAt` · `updatedAt` UTC store · local display FE |
| XCO | **xco_na** | list scoped by Medical role — no cross-company form P1 |
| SHARE | **share_tenant** | `TaskEntity : TenantEntity` · `company_id` filter |
| Migration | **defer_p2** | `Schema_TaskCore` when TaskService scaffold |
| Step 4b | **N/A** | consumer_cite_p1 |

---

## FormType pack (`platform` · SA §4 — **không** §2a DES-GRID)

| Task id | Role | Nội dung |
|---------|------|----------|
| T-CTX-01 | Dev | Context / hub 25/26 · controlHint · real-data cite · ownership |
| T-SCAFFOLD-TASK-MFE-01 | Dev `/implement-task-service` | Scaffold `@linm/task` · RMMS remote mount · `endpoint.ts` bind |
| T-LIST-MINE-POOL-SLA-01 | Dev | KPI strip + tabs 0/1/2 + filters + list rows + pool claim |
| T-DETAIL-LIFECYCLE-01 | Dev | Detail header/info/actions · lifecycle PATCH map |
| T-PARCEL-MOUNT-01 | Dev `/implement-message-service` prereq | `ChatSectionParcel` `mode=both` tabs 0/1 |
| T-ROUTEMAP-01 | Dev | Host inject `routeMap` `task→/cv/:id` · **cấm** hard-code Medical-only |
| T-HANDOFF-BANNER-01 | Dev | `?from=patrol&sourceId=` read-only banner · **cấm** session CRUD |
| T-SIGNALR-01 | Dev | Join `Task_{id}` via `@linm/notification` · refresh list/detail |
| T-LEAVE-01 | Dev | Dirty composer → `LeaveConfirmModal` · block/cancel reason Modal |
| T-TYP-01 | Dev | label 13 · input D14/M16 · **GAP-TYP-01** |
| T-UI-UX-01 | Dev | `dev-ui-ux-constitution` · modern task surfaces · **cấm** DES-GRID |
| T-UI-RESP-01 | Dev `/dev-web-responsive` | 1280/768/375 · list + detail + parcel tabs |
| T-PERM-01 | Dev | **reuse** Medical role scope · **cấm** invent RMMS task perm P1 |
| T-QA-TASK-01 | QA | AC-T-01…10 · tabs · lifecycle · parcel · routeMap · handoff · typo |

**OUT / N/A:** T-UI-GRID-* · T-UI-LIST-CATALOG · T-BE-CRUD RMMS · T-BE-API RMMS · T-BE-MIG P1 · T-BE-UISCHEMA · create form P1 · subtasks UI P1 · GAP-PT-INBOX-01 (DEFER).

---

## Summary

| id | page | layer | role | domain/MFE | deps | APIs | status |
|----|------|-------|------|------------|------|------|--------|
| T-CTX-01 | platform-task | docs | dev | — | — | cite | pending |
| T-SCAFFOLD-TASK-MFE-01 | @linm/task | scaffold | dev | MFE-CORE | T-CTX-01 | cite | pending |
| T-LIST-MINE-POOL-SLA-01 | TaskListPage | ui | dev | `@linm/task` | T-SCAFFOLD-* | API-01…04 | pending |
| T-DETAIL-LIFECYCLE-01 | TaskDetailPage | ui | dev | `@linm/task` | T-SCAFFOLD-* | API-05…10 | pending |
| T-PARCEL-MOUNT-01 | ChatSectionParcel | ui | dev | `@linm/task` + `@linm/message` | T-DETAIL-* · platform-message | API-11 | pending |
| T-ROUTEMAP-01 | host routeMap | ui | dev | RMMS shell + task MFE | T-PARCEL-* | — (client) | pending |
| T-HANDOFF-BANNER-01 | patrol handoff | ui | dev | `@linm/task` | T-DETAIL-* | — | pending |
| T-SIGNALR-01 | live refresh | ui | dev | `@linm/notification` | T-LIST-* · T-DETAIL-* | hub | pending |
| T-LEAVE-01 | leave/reason | ui | dev | `@linm/task` + parcel | T-PARCEL-* | — | pending |
| T-TYP-01 | typography | ui | dev | `@linm/task` | T-LIST-* · T-DETAIL-* | — | pending |
| T-UI-UX-01 | UX constitution | ui | dev | `@linm/task` | T-LIST-* · T-DETAIL-* | — | pending |
| T-UI-RESP-01 | responsive | ui | dev | `@linm/task` | T-UI-UX-01 | — | pending |
| T-PERM-01 | perms | ui | dev | host / Medical | T-CTX-01 | cite | pending |
| T-QA-TASK-01 | qa | qa | qa | — | all UI | — | pending |

**deps order:** T-CTX-01 → T-SCAFFOLD-TASK-MFE-01 → T-LIST-MINE-POOL-SLA-01 → T-DETAIL-LIFECYCLE-01 → T-PARCEL-MOUNT-01 → (T-ROUTEMAP-01 ∥ T-HANDOFF-BANNER-01 ∥ T-SIGNALR-01) → (T-LEAVE-01 ∥ T-TYP-01 ∥ T-UI-UX-01) → T-UI-RESP-01 → T-PERM-01 → T-QA-TASK-01

---

## T-CTX-01 — Context + SSOT cite

**Page:** platform-task  
**Layer:** `docs`  
**Role:** dev  
**devSlash:** `/implement-task-service`

### Source

| | |
|--|--|
| mfe | `D:\MFE-CORE\Linm.Web.Task` (target) |
| mfe cite | `D:\MFE-CORE\Linm.Web.Tasks` · Medical `task/endpoint.ts` |
| domain | Platform TaskService (extract P2) — **no** RMMS domain P1 |
| api | **cite** Medical `web-bff/api/v1` |
| bff | **N/A P1** |
| layout | micro_src Task MFE · RMMS remote |

**from_design:** zones DES-PT-* + DES-MSG-SEC-* · reviewUrl prototype  
**from_solution:** API-01…12 cite · task_kind=consumer_cite_p1 · Step 4b N/A · GAP-PT-SOURCE-01 §4  
**ssot.reuse:** implement-task-service · platform-pack-live-mfe · hub 25/26 · controlHint · real-data §A–§F  
**Skills:** `/implement-task-service` · `ssot-no-duplicate`  
**system_design:** SD-BFF=n/a · SD-JOB=n/a · SD-AUTH=reuse  
**DoD:**
- [ ] Đọc CTX + PO + design + solution + DA control-hint/real-data trước Write
- [ ] **Cấm** re-scan demo `task.html` làm SSOT data
- [ ] **Cấm** invent RMMS task path · **cấm** embed TasksController
- [ ] GAP-PT-SOURCE-01: `domainSource` ≠ list filter `source` — **không** đổi tên field

### Links

| | Path |
|--|------|
| Design | `../ui/design.md` |
| Solution | `../be/solution-discovery.md` |
| PO | `../po/requirement.md` |
| Context | `docs/context/features/platform-task.md` · hub `25-PLATFORM-TASK.md` · `26-MESSAGE-PARCEL.md` |
| Analy | `specs/_data-analy/features/platform-task-control-hint.md` · `platform-task-real-data.md` |

**Deps:** —  
**Notes:** contentHash analy `sha256:3090b2b000bd6de1f400c259e6e737fcbb64e4aa6b6227c2828d9d77a5d65962`

---

## T-SCAFFOLD-TASK-MFE-01 — Scaffold `@linm/task`

**Page:** Linm.Web.Task  
**Layer:** `scaffold`  
**Role:** dev  
**devSlash:** `/implement-task-service`

### Source

| | |
|--|--|
| mfe | `D:\MFE-CORE\Linm.Web.Task` (**GAP-PT-REPO-01**) |
| cite | `D:\MFE-CORE\Linm.Web.Tasks` module layout |
| api client | copy/bind Medical `task/endpoint.ts` |
| rmms host | `D:\AI-QLBD\MFE-Source\Linm.Web.RMMS.Master` mount `/platform-task` |

**from_design:** S-LIST `/cv` · S-DETAIL `/cv/:id` · mfeStdUrl  
**from_solution:** consumer_cite_p1 · FE giữ `/tasks` relative paths  
**implement.wire:** webpack module federation · routes `/cv` + `/cv/:id` · export TaskListPage/TaskDetailPage  
**DoD:**
- [ ] Repo `@linm/task` scaffold · package.json · tsconfig · federation config
- [ ] Bind `endpoint.ts` — **giữ** Medical paths
- [ ] RMMS shell route `/platform-task` → remote MFE
- [ ] **Cấm** inline ChatTab — parcel only on detail
- [ ] `yarn build` PASS (**Dev role only**)

**Deps:** T-CTX-01  
**Notes:** GAP-PT-REPO-01 close

---

## T-LIST-MINE-POOL-SLA-01 — List surface (mine / pool / sla)

**Page:** TaskListPage  
**Layer:** `ui`  
**Role:** dev  
**devSlash:** `/implement-task-service`

### Source

| | |
|--|--|
| mfe | `@linm/task` `src/pages/TaskListPage` |
| cite | `Linm.Web.Tasks` `TasksListPage` pattern |
| zones | DES-PT-KPI · DES-PT-LIST-TAB · DES-PT-FILTER · DES-PT-LIST |

**from_design:** tab index 0 mine · 1 pool · 2 sla — **GAP-TAB-01**  
**from_solution:** API-01…04 · listMode→API map §3  
**APIs:** GET `/tasks` · `/tasks/pool` · `/tasks/stats` · `/tasks/pool/stats` · `/sla/alerts?domain=task`  
**DoD:**
- [ ] KPI strip 4 cards: Đã gán · Pool · SLA critical · SLA warning
- [ ] Segment tabs index 0/1/2 — **cấm** tab thứ 4 P1
- [ ] Filters: search · status · priority · source · assignmentStrategy
- [ ] Row: idCode · title · source chip · status · assignee · SLA · priority · pool claim CTA
- [ ] Empty list thật · toast 4xx/5xx · **cấm** fake demo row
- [ ] **Cấm** DES-GRID / LinCatalogDataGrid

**Deps:** T-SCAFFOLD-TASK-MFE-01  
**Notes:** GAP-PT-UI-01 partial (list half)

---

## T-DETAIL-LIFECYCLE-01 — Detail lifecycle

**Page:** TaskDetailPage  
**Layer:** `ui`  
**Role:** dev  
**devSlash:** `/implement-task-service`

### Source

| | |
|--|--|
| mfe | `@linm/task` `src/pages/TaskDetailPage` |
| cite | `Linm.Web.Tasks` `TaskDetailPage` + `TaskTabs` (lifecycle only — **không** inline chat) |
| zones | DES-PT-DETAIL-HDR · DES-PT-DETAIL-INFO · DES-PT-DETAIL-ACT |

**from_solution:** API-05…10 lifecycle map · 404 → toast · navigate `/cv`  
**APIs:** GET/PUT `/tasks/{id}` · PATCH claim/start/submit/complete/block/progress · DELETE cancel · POST escalate  
**DoD:**
- [ ] Header: idCode · title · status chip · priority chip
- [ ] Info: description · dueDate · assignee · assignmentStrategy · SLA chip
- [ ] Actions: claim · start · submit · complete · block (reason Modal) · escalate · cancel (manager)
- [ ] Block/cancel reason Modal — **cấm** native dialog
- [ ] **Cấm** create form P1 · **cấm** subtasks/checklist tab P1
- [ ] sourceLabel column/chip hidden/empty when DTO lacks `domainSource` (P1 cite)

**Deps:** T-SCAFFOLD-TASK-MFE-01  
**Notes:** GAP-PT-UI-01 partial (detail half)

---

## T-PARCEL-MOUNT-01 — ChatSectionParcel mount

**Page:** TaskDetailPage tabs  
**Layer:** `ui`  
**Role:** dev  
**devSlash:** `/implement-task-service` + prereq `/implement-message-service`

### Source

| | |
|--|--|
| parcel | `@linm/message` `ChatSectionParcel` |
| mount | detail tab index 0 Trao đổi · 1 Bình luận |

**from_design:** §5 prop shape · mode=`both`  
**from_solution:** API-11 messages · entityType=`task`  
**implement.wire:**

```tsx
<ChatSectionParcel
  entityType="task"
  entityId={task.id}
  mode="both"
  routeMap={hostRouteMap}
  onNavigate={navigate}
/>
```

**DoD:**
- [ ] Tabs index 0 chat · 1 comments — **cấm** reorder
- [ ] Send `fa-paper-plane` · POST `type=message|comment`
- [ ] Expand `TabSlideout` · ↗ via routeMap
- [ ] **Cấm** copy ChatTab/CommentsTab markup into `@linm/task`
- [ ] Prereq `platform-message` export PASS

**Deps:** T-DETAIL-LIFECYCLE-01 · `platform-message` done  
**Notes:** GAP-MSG-PARCEL-01 · GAP-PT-COMMENT-UI-01 close

---

## T-ROUTEMAP-01 — Host routeMap inject

**Page:** RMMS shell + TaskDetailPage  
**Layer:** `ui`  
**Role:** dev  
**devSlash:** `/implement-task-service`

**from_design:** GAP-MSG-ROUTE-01 · route_confirm locked  
**implement.wire:**

```ts
routeMap={{ task: (id) => `/cv/${id}` }}
```

**DoD:**
- [ ] RMMS host inject `routeMap` on parcel mount
- [ ] ↗ navigates `/cv/:id` not Medical `/tasks/:id`
- [ ] Expand panel uses same map
- [ ] **Cấm** hard-code Medical-only paths in task MFE

**Deps:** T-PARCEL-MOUNT-01  
**Notes:** route_confirm **route_a** locked

---

## T-HANDOFF-BANNER-01 — Patrol deep-link banner

**Page:** TaskDetailPage  
**Layer:** `ui`  
**Role:** dev  

**from_po:** S-HANDOFF · `?from=patrol&sourceId=`  
**DoD:**
- [ ] Read-only banner «Từ tuần đường» when query present
- [ ] **Cấm** session CRUD on task page from patrol
- [ ] Field patrol **cấm** chat form — deep-link only

**Deps:** T-DETAIL-LIFECYCLE-01  
**Notes:** AC-T-10 · `rmms-task-integrate` later for CreateTask

---

## T-SIGNALR-01 — Live refresh via notification

**Page:** list + detail  
**Layer:** `ui`  
**Role:** dev  

**from_solution:** hub `Task_{id}` · `NewMessage` · `TaskStatusChanged`  
**DoD:**
- [ ] Join `Task_{id}` on detail mount via `@linm/notification`
- [ ] Refresh messages on `NewMessage` · refresh header/list on `TaskStatusChanged`
- [ ] Reconnect → refresh · **cấm** `signalRService.start()` in Message MFE

**Deps:** T-LIST-* · T-DETAIL-* · T-PARCEL-*

---

## T-LEAVE-01 — Leave guard + reason modals

**Page:** detail + parcel  
**Layer:** `ui`  
**Role:** dev  

**from_po:** Leave §8  
**DoD:**
- [ ] Composer dirty → `LeaveConfirmModal` (parcel) · **cấm** `window.confirm`
- [ ] Cancel/block → Modal + reason Text
- [ ] API fail → `useAppToast` · **cấm** `window.alert`

**Deps:** T-PARCEL-MOUNT-01

---

## T-TYP-01 — Typography GAP-TYP-01

**Layer:** `ui`  
**Role:** dev  

**DoD:**
- [ ] Label 13px · input D14 desktop / M16 mobile
- [ ] Prototype CSS parity

**Deps:** T-LIST-* · T-DETAIL-*

---

## T-UI-UX-01 — UX constitution

**Layer:** `ui`  
**Role:** dev  

**DoD:**
- [ ] Modern platform task surfaces (KPI cards · segment tabs · SLA chips)
- [ ] Toast not alert · empty states
- [ ] **Cấm** demo chrome · GOVOne · mock SignalR note
- [ ] **Cấm** DES-GRID catalog patterns

**Deps:** T-LIST-* · T-DETAIL-*

---

## T-UI-RESP-01 — Responsive

**Layer:** `ui`  
**Role:** dev  
**devSlash:** `/dev-web-responsive`

**DoD:**
- [ ] 1280 / 768 / 375 breakpoints
- [ ] List filters stack · detail sidebar collapse · parcel tabs usable mobile

**Deps:** T-UI-UX-01

---

## T-PERM-01 — Permissions reuse

**Layer:** `ui`  
**Role:** dev  

**DoD:**
- [ ] Reuse Medical role scope (staff/manager/admin) for lifecycle actions
- [ ] **Cấm** invent `rmms.tasks.*` permission codes P1
- [ ] Pool claim / cancel gated per Medical cite

**Deps:** T-CTX-01

---

## T-QA-TASK-01 — QA scenarios seed

**Page:** platform-task  
**Layer:** `qa`  
**Role:** qa  
**devSlash:** `/agent-qa` (e2eQa ON)

**from_design:** AC-T-01…10  
**APIs:** cite API-01…11  
**mfeStdUrl:** `http://localhost:9301/platform-task` (Dev điền runtime)  
**DoD / scenarios seed (QA viết `qa/scenarios.md`):**
- [ ] List tabs mine/pool/sla index 0/1/2
- [ ] KPI strip from stats + sla alerts
- [ ] Row idCode · SLA chip · pool claim
- [ ] Detail lifecycle actions per `ITaskService` map
- [ ] Chat tabs = `ChatSectionParcel` 0/1 · send `fa-paper-plane`
- [ ] Expand · ↗ routeMap `/cv/:id`
- [ ] Patrol handoff banner read-only · **0** session CRUD
- [ ] LeaveConfirmModal dirty · **0** native dialog
- [ ] Typography label 13 / input D14
- [ ] Empty list thật · toast 5xx · **0** fake demo row
- [ ] e2eQa ON → runtime + PNG (**chỉ** QA role)

**Deps:** all UI tasks  
**Notes:** TL **cấm** chạy e2e / start:std

---

## GAP close map (TL lock)

| ID | Task | Status |
|----|------|--------|
| GAP-PT-REPO-01 | T-SCAFFOLD-TASK-MFE-01 | OPEN → Dev |
| GAP-PT-UI-01 | T-LIST-* + T-DETAIL-* | OPEN → Dev |
| GAP-PT-COMMENT-UI-01 | T-PARCEL-MOUNT-01 | OPEN → Dev |
| GAP-MSG-PARCEL-01 | T-PARCEL-MOUNT-01 | OPEN → Dev |
| GAP-MSG-ROUTE-01 | T-ROUTEMAP-01 | OPEN → Dev · route_confirm locked |
| GAP-PT-SOURCE-01 | T-CTX-01 (field names) · P2 migration | **LOCKED** SA §4 — Dev **không** đổi tên |
| GAP-PT-TICKET-01 | optional `ticketId` | CLOSED (SA) |
| GAP-PT-INBOX-01 | — | **DEFER** P2 |
| GAP-TAB-01 | T-LIST-* · T-PARCEL-* | KEEP — index hard |
| GAP-TYP-01 | T-TYP-01 | OPEN → Dev |
| RMMS embed | — | **Cấm** P1 |

---

## Rules

- Một lock / feature trong STATUS
- Dev **cấm** start nếu thiếu **source** + skills + API cite
- **Cấm** T-UI-GRID / DES-GRID / RMMS TasksController / migration P1
- **Cấm** `yarn build` / e2e / `start:std` ở role TL/QA-pending
- Commit chỉ sau `commit_confirm`
- Deps: scaffold → list → detail → parcel → route/handoff/signalr → leave/typ/ux → qa
- Prereq: `platform-message` / `ChatSectionParcel` export PASS
- GAP-PT-INBOX-01 **DEFER** · `rmms-task-integrate` **blocked/later**

---

## Handoff → Dev / QA

| Task | Ready? | Missing source/SD |
|------|--------|-------------------|
| T-CTX-01 | ✅ | — |
| T-SCAFFOLD-TASK-MFE-01 | ✅ | MFE-CORE path · RMMS host |
| T-LIST-MINE-POOL-SLA-01 | ✅ | cite TasksListPage |
| T-DETAIL-LIFECYCLE-01 | ✅ | cite TaskDetailPage |
| T-PARCEL-MOUNT-01 | ✅ | `@linm/message` prereq done |
| T-ROUTEMAP-01 | ✅ | route_confirm locked |
| T-HANDOFF-BANNER-01 | ✅ | — |
| T-SIGNALR-01 | ✅ | `@linm/notification` |
| T-LEAVE-01 · T-TYP-01 · T-UI-UX-01 · T-UI-RESP-01 | ✅ | — |
| T-PERM-01 | ✅ | reuse only |
| T-QA-TASK-01 | ✅ after Dev | mfeStdUrl runtime |

| Field | Value |
|-------|-------|
| Next slash | `/implement-task-service` (Dev) → `/agent-qa*` |
| phase_from / phase_to | team-lead → **dev** |
| task_kind | `consumer_cite_p1` |
| route_confirm | `route_a` locked |
| be_repo_confirm | approved (cite Medical) |
| ui_repo_confirm | approved (scaffold `@linm/task`) |
| e2e | queued QA only |
| Step 4b | **N/A** P1 |

---

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-team-lead |
| skillVersion | 2026.08.19.04 |
| schemaVersion | 2 |
| workflowVersion | 2026.08.25.02 |
| rulesVersion | 2026.08.25.7 |
| generatedAt | 2026-08-27T06:25:00.000Z |
| versionGate | ok |
| version_mismatch_action | recheck_new (prior SA) |
| contentHashPriorDataAnaly | sha256:3090b2b000bd6de1f400c259e6e737fcbb64e4aa6b6227c2828d9d77a5d65962 |
| real_view_parity | v1 |
| taskId | `task_be3ed3eb` |
| route_confirm | route_a · autopilot |
| prior_sa_taskId | `task_9e2b3742` |

---
<!-- Version meta: skillId=agent-team-lead skillVersion=2026.08.19.04 schemaVersion=2 workflowVersion=2026.08.25.02 rulesVersion=2026.08.25.7 versionGate=ok -->
