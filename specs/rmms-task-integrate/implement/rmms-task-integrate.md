# Dev — Implement — rmms-task-integrate

> Status: **done** · `/agent-dev` · task `task_c3c045ca` · autoApprove ON  
> `task_kind=integration_consumer_p1` · Step 4b **N/A** · **cấm** e2e / `yarn start:std` ở role Dev

| Field | Value |
|-------|-------|
| feature | `rmms-task-integrate` |
| title | RMMS Field patrol/incident → Platform Task create + deep-link + ChatSectionParcel |
| this role | `dev` · `/integrate-task-service` · `/integrate-message-service` |
| packKind | **`platform`** |
| changeScope | `edit_page` |
| route_confirm | **`route_a`** locked |
| updatedAt | `2026-08-27T05:45:00.000Z` |

**Cấm:** RMMS TasksController embed · Field ChatTab mount · invent `api/v1/rmms/tasks` · demo localStorage SSOT · e2e ở role Dev.

---

## Done checklist (TL tasks)

| id | Result | Notes |
|----|--------|-------|
| T-CTX-01 | **done** | hub 24/25/26 · controlHint · real-data · Medical cite |
| T-FIELD-MODAL-01 | **done** | `GiaoViecModal` shared Zone B · POST `/tasks` |
| T-PATROL-FOOTER-01 | **done** | PatrolFormPage view footer «Kết ca» + «Giao việc» |
| T-INC-ACTION-01 | **done** | IncidentListPage row menu → modal (removed mock assignName overlay) |
| T-PRIORITY-PREFILL-01 | **done** | patrol high+48h · incident severity map SA §5 |
| T-SOURCE-FIELDS-01 | **done** | hidden `domainSource` · `sourceEntityType` · `sourceEntityId` |
| T-POST-NAV-01 | **done** | toast + `navigateToUrl` `/platform-task/cv/:id?from=&sourceId=` |
| T-HANDOFF-BANNER-01 | **done** | `HandoffBanner` patrol **+** incident ↗ read-only |
| T-PARCEL-ROUTEMAP-01 | **done** | `usePlatformTaskPaths` + Master `RMMS_MESSAGE_ROUTE_MAP` incident key |
| T-BFF-NUGET-01 | **defer P2** | P1 Medical cite via Field `taskService` · NuGet when platform QA green |
| T-PREREQ-GATE-01 | **done** | disabled CTA + tooltip · unlock `VITE_RMMS_TASK_INTEGRATE_UNLOCK=1` |
| T-LEAVE-01 | **done** | `LeaveConfirmModal` on GiaoViecModal dirty |
| T-TYP-01 | **done** | label 13px · input D14/M16 |
| T-UI-UX-01 | **done** | modal + banner amber + verify page |
| T-UI-RESP-01 | **done** | modal 2-col→1-col · footer stack |
| T-PERM-01 | **done** | reuse host JWT · no invent RMMS task perm |
| T-QA-INTEGRATE-01 | **done** | QA PASS · e2e PNG S0/S1/QA-20 · `task_22f9822f` |

---

## Key paths

| Layer | Path |
|-------|------|
| Field modal | `Linm.Web.RMMS.Field/src/components/GiaoViecModal/` |
| Field task API | `Linm.Web.RMMS.Field/src/services/task/` (Medical cite `/tasks`) |
| Patrol footer | `Linm.Web.RMMS.Field/src/pages/PatrolFormPage/` |
| Incident action | `Linm.Web.RMMS.Field/src/pages/IncidentListPage/` |
| Post-nav | `Linm.Web.RMMS.Field/src/utils/taskPostNavigate.ts` |
| Prereq gate | `Linm.Web.RMMS.Field/src/utils/platformTaskPrereq.ts` |
| Verify page | `Linm.Web.RMMS.Field/src/pages/RmmsTaskIntegrateVerifyPage/` · `/rmms-task-integrate` |
| Handoff banner | `Linm.Web.Task/src/pages/TaskDetailPage/components/HandoffBanner.tsx` |
| Route map Task | `Linm.Web.Task/src/router/platformTaskPaths.ts` · `incident→/su-co/:id` |
| Route map shell | `Linm.Web.RMMS.Master/src/config/rmmsMessageRouteMap.ts` |
| Dev nav | Field + Master `devRoutes.ts` |

### route_confirm route_a (locked)

```text
verify:    /rmms-task-integrate
patrol:    /td-tk/:id
incident:  /su-co
post:      /platform-task/cv/{id}?from=patrol|incident&sourceId=
detail:    /cv/:id
handoff:   /td-tk/{sourceId} · /su-co/{sourceId}
routeMap:  task=/cv/:id · incident=/su-co/:id
```

---

## Build / verify

| Check | Result |
|-------|--------|
| `Linm.Web.RMMS.Field` `yarn build` | **PASS** |
| `Linm.Web.Task` `yarn build` | **PASS** |
| `Linm.Web.RMMS.Master` `yarn build` | **PASS** |
| `Linm.RMMS.WebService.sln` `dotnet build` | **PASS** · 0 errors |
| Step 4b RMMS TasksController | **N/A** (integration_consumer_p1) |
| e2e / `yarn start:std` | **PASS** — QA `task_22f9822f` · Field `:9304` · PNG S0/S1/QA-20 |

---

## QA verdict (`task_22f9822f` · `/agent-qa`)

| Field | Value |
|-------|-------|
| verdict | **PASS** |
| e2eQa | ON · Field `yarn start:std` `:9304` + docker + Playwright |
| screens | `qa/screens/S0.png` · `S1.png` · `QA-20.png` · manifest `ok:true` |
| scenarios | `qa/scenarios.md` |
| Next | `/agent-review` · **cấm** `phase=done` |

---

## Gaps closed

| ID | Decision |
|----|----------|
| GAP-RTI-PATROL-01 | **CLOSED** — patrol footer + modal |
| GAP-RTI-PATROL-02 | **CLOSED** — priority/dueDate prefill |
| GAP-RTI-INC-01 | **CLOSED** — shared modal replaces mock assign |
| GAP-RTI-CHAT-01 | **CLOSED** — Task parcel only · 0 Field mount |
| GAP-RTI-ROUTE-01 | **CLOSED** — post-nav + routeMap |
| GAP-RTI-BFF-01 | **P1 cite** · P2 NuGet deferred |
| GAP-MSG-ROUTE-01 | **CLOSED** — incident key on routeMap |
| GAP-TD-PRIORITY-01 | **CLOSED** |
| GAP-PT-SOURCE-01 | **CLOSED** |
| GAP-TYP-01 | **CLOSED** |
| GAP-RTI-PREREQ | **ON** until platform QA green |

---

## Version meta

| Field | Value |
|-------|-------|
| skillId | agent-dev |
| skillVersion | 2026.08.25.02 |
| workflowVersion | 2026.08.25.02 |
| rulesVersion | 2026.08.25.7 |
| versionGate | rechecked |
| taskId | `task_c3c045ca` |
| route_confirm | route_a |
| build_verify | FE+BE **PASS** · `2026-08-27T05:45:00.000Z` |
