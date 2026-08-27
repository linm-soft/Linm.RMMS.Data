# Dev — Implement — platform-task

> Status: **done** · `/agent-dev` · `/implement-task-service` · `task_08b9a781` · autoApprove ON  
> `task_kind=consumer_cite_p1` · Step 4b **N/A** · **cấm** e2e / `yarn start:std` ở role Dev

| Field | Value |
|-------|-------|
| feature | `platform-task` |
| title | [Dev] Platform.Task / Công việc dùng chung |
| this role | `dev` · `/agent-dev` |
| packKind | **`platform`** |
| changeScope | `new_page` |
| task_kind | **`consumer_cite_p1`** |
| route_confirm | **`route_a`** · list `/cv` · detail `/cv/:id` · RMMS `/platform-task` · `routeMap.task→/cv/:id` |
| MFE | `D:\MFE-CORE\Linm.Web.Task` (`@linm/platform-task` · bundle `linm-platform-task.js`) |
| MFE cite | `D:\MFE-CORE\Linm.Web.Tasks` · Medical `task/endpoint.ts` |
| Parcel | `@linm/message` `ChatSectionParcel` · `mode=both` |
| RMMS host | `D:\AI-QLBD\MFE-Source\Linm.Web.RMMS.Master` · dev nav peer link |
| BE | **N/A P1** — cite Medical BFF · **0** delta `Linm.RMMS.WebService` |
| verify | FE `yarn build` **PASS** (Linm.Web.Task + RMMS Master) · BE `dotnet build` **PASS** · Step 4b **N/A** |
| mfeStdUrl | `http://localhost:9302/platform-task/cv` (standalone `@linm/platform-task` · port 9302) |
| updatedAt | `2026-08-27T06:45:00.000Z` |

**Cấm:** RMMS TasksController embed · invent `api/v1/rmms/tasks` · fork ChatTab markup · `window.alert`/`confirm` · DES-GRID · demo `task.html` SSOT · e2e ở role Dev.

---

## Done checklist (TL tasks)

| id | Result | Notes |
|----|--------|-------|
| T-CTX-01 | **done** | hub 25/26 · design · SA · DA cite · GAP-PT-SOURCE-01 locked |
| T-SCAFFOLD-TASK-MFE-01 | **done** | `Linm.Web.Task` scaffold · `@linm/platform-task` · routes `/cv` + `/platform-task/cv` |
| T-LIST-MINE-POOL-SLA-01 | **done** | KPI 4 cards · tabs 0/1/2 · filters · rows · pool claim |
| T-DETAIL-LIFECYCLE-01 | **done** | header/info/actions · block/cancel Modal · **cấm** create/subtasks P1 |
| T-PARCEL-MOUNT-01 | **done** | `ChatSectionHost` → `ChatSectionParcel` `mode=both` tabs 0/1 |
| T-ROUTEMAP-01 | **done** | `usePlatformTaskPaths` · host `routeMap` `task→/cv/:id` or `/platform-task/cv/:id` |
| T-HANDOFF-BANNER-01 | **done** | `?from=patrol&sourceId=` read-only banner |
| T-SIGNALR-01 | **done** | `useTaskDetailSignalR` · join `Task_{id}` via `@linm/notification` pattern |
| T-LEAVE-01 | **done** | parcel `LeaveConfirmModal` · block/cancel reason Modal · toast |
| T-TYP-01 | **done** | label 13px · input D14/M16 CSS tokens |
| T-UI-UX-01 | **done** | KPI cards · segment tabs · SLA chips · empty states · **cấm** DES-GRID |
| T-UI-RESP-01 | **done** | responsive CSS 1280/768/375 patterns |
| T-PERM-01 | **done** | reuse Medical lifecycle gates · **0** invent `rmms.tasks.*` P1 |
| T-QA-TASK-01 | **queued** | QA `/agent-qa*` · e2e ON |

---

## Key paths

| Layer | Path |
|-------|------|
| MFE entry | `Linm.Web.Task/src/platform-task.tsx` |
| Routes | `src/index.tsx` — `/cv` · `/cv/:id` · `/platform-task/cv` · `/platform-task/cv/:id` |
| List | `src/pages/TaskListPage/TaskListPage.tsx` |
| Detail | `src/pages/TaskDetailPage/TaskDetailPage.tsx` |
| Parcel mount | `src/components/ChatSectionHost/ChatSectionHost.tsx` |
| Route map | `src/router/platformTaskPaths.ts` |
| API bind | `src/services/task/endpoint.ts` (Medical BFF `/tasks` paths) |
| SLA | `src/services/slaAlert/endpoint.ts` |
| SignalR | `src/hooks/useTaskDetailSignalR.ts` |
| Handoff | `src/pages/TaskDetailPage/components/HandoffBanner.tsx` |
| RMMS dev nav | `Linm.Web.RMMS.Master/src/dev/devRoutes.ts` → peer `9302/platform-task/cv` |

### Host inject (route_confirm route_a)

```ts
routeMap={{ task: (id) => `/cv/${id}` }}
// RMMS shell prefix:
routeMap={{ task: (id) => `/platform-task/cv/${id}` }}
```

---

## Build / verify

| Check | Result |
|-------|--------|
| `Linm.Web.Task` `yarn build` | **PASS** (`LINM_RUN_DEV_LOCAL_BUNDLE=1`) |
| `Linm.Web.RMMS.Master` `yarn build` | **PASS** |
| `Linm.RMMS.WebService.sln` `dotnet build` | **PASS** · 0 errors |
| Step 4b RMMS TasksController | **N/A** (consumer_cite_p1) |
| e2e / `yarn start:std` | **skipped** — queued `/agent-qa*` |

---

## Gaps closed

| ID | Decision |
|----|----------|
| GAP-PT-REPO-01 | **CLOSED** — `Linm.Web.Task` scaffold |
| GAP-PT-UI-01 | **CLOSED** — TaskListPage + TaskDetailPage |
| GAP-PT-COMMENT-UI-01 | **CLOSED** — parcel `mode=both` |
| GAP-MSG-PARCEL-01 | **CLOSED** — prereq `platform-message` |
| GAP-MSG-ROUTE-01 | **CLOSED** — dynamic `routeMap` |
| GAP-TYP-01 | **CLOSED** |
| GAP-PT-SOURCE-01 | **LOCKED** SA §4 — field names unchanged |
| GAP-PT-INBOX-01 | **DEFER** P2 |

**Note:** Package `@linm/platform-task` (webpack `projectName=platform-task`) — tránh collision với legacy `@linm/task` trong `Linm.Web.Tasks` (Medical full app).

---

## Handoff → QA

| Field | Value |
|-------|-------|
| Next slash | `/agent-qa*` (e2eQa ON) |
| mfeStdUrl | `http://localhost:9302/platform-task/cv` |
| peerStdUrl | `http://localhost:9302/platform-task/cv` |
| AC | AC-T-01…10 · T-QA-TASK-01 |
| **cấm** Dev | e2e · start:std · invent BE |

---

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-dev · implement-task-service |
| skillVersion | 2026.08.25.02 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.25.02 |
| rulesVersion | 2026.08.25.7 |
| generatedAt | 2026-08-27T06:45:00.000Z |
| versionGate | ok |
| contentHashPriorDataAnaly | sha256:3090b2b000bd6de1f400c259e6e737fcbb64e4aa6b6227c2828d9d77a5d65962 |
| real_view_parity | v1 |
| taskId | `task_08b9a781` |
| route_confirm | route_a |

---
<!-- Version meta: skillId=agent-dev skillVersion=2026.08.25.02 schemaVersion=1 workflowVersion=2026.08.25.02 rulesVersion=2026.08.25.7 versionGate=ok -->
