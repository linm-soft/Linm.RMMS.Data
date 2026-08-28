# Tasks — rmms-task-integrate

> Team lead · `/agent-team-lead` · `task_ad52d111` · autoApprove ON  
> Status: **done** · `route_confirm` = **route_a** (autopilot) · `2026-08-27T05:25:00.000Z`  
> Serial by page+layer · **cấm** parallel same Field/Task/shell file  
> **Cấm** implement product code ở role TL · **cấm** e2e / `yarn start:std` / build

| Field | Value |
|-------|-------|
| feature | `rmms-task-integrate` |
| title | [TL] RMMS Field patrol/incident → Platform Task create + deep-link + ChatSectionParcel |
| this role | `team_lead` · `/agent-team-lead` |
| packKind | **`platform`** (integration · **cấm** Kind B DES-GRID / new Field list page) |
| formType | **`platform`** (integration_consumer · SA FormType pack) |
| changeScope | `edit_page` |
| task_kind | **`integration_consumer_p1`** — Field modal create + Task handoff/chat · NuGet Task BFF consumer · **cấm** RMMS embed |
| design_confirm | **approve** (`task_5638b6a9`) |
| solution_confirm | **approve** (`task_cfccd68d`) |
| route_confirm | **`route_a`** (autopilot) — patrol `/td-tk/:id` · incident `/su-co` · post-create `/platform-task/cv/:id?from=&sourceId=` · routeMap `task→/cv/:id` · `incident→/su-co/:id` |
| autoApprove | **ON** |
| e2eQa | ON · queued `/agent-qa*` only |
| Dev slash | **`/integrate-task-service`** · **`/integrate-message-service`** (`client_scope=both`) |
| MFE Field | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Field` (PatrolFormPage · IncidentListPage) |
| MFE Task | `D:/MFE-CORE/Linm.Web.Task` (`HandoffBanner` · `ChatSectionHost` · `/cv/:id`) |
| MFE Message | `D:/MFE-CORE/Linm.Web.Message` (`ChatSectionParcel` · `@linm/message`) |
| MFE shell | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Master` (routeMap inject · post-create navigate) |
| BE RMMS | `D:/AI-QLBD/Linm.RMMS.WebService` (patrol/incident GET live only) |
| BE Task cite | `D:/Medical/Linm.Web.Medical.WebService` · `task/endpoint.ts` P1 |
| BE target P2 | NuGet `Linm.Platform.Task.Bff` on RMMS BFF |
| dependsOn | `platform-message` · `platform-task` QA green (prereq P1 · DES-RTI-PREREQ) |
| blockedReason | Dev integrate **after** platform QA green — CTA gate until unblocked |
| Step 4b / migration | **N/A** — **cấm** RMMS TasksController · migration P2 TaskService only |

**Cấm ERP.*** · **cấm** T-BE-API / T-BE-MIG trên `Linm.RMMS.WebService` domain · **cấm** T-UI-LIST / DES-GRID · **cấm** ChatTab mount Field · **cấm** fork ChatTab markup · **cấm** `window.alert` / `window.confirm` · **cấm** invent `api/v1/rmms/tasks` · **cấm** demo localStorage CV SSOT.

---

## System design checklist

| ID | Chuẩn | Status | Notes |
|----|-------|--------|-------|
| SD-JOB | `/review-event-job` | **n/a** | no platform-job |
| SD-BFF | `/create-bff-api-feature` | **defer P2** | P1 cite Medical BFF · P2 NuGet `Linm.Platform.Task.Bff` on RMMS |
| SD-AUTH | `/review-ui-authentication` | **reuse** | host JWT · Medical task scope · **cấm** invent `rmms.tasks.*` P1 |
| SD-TOKEN | `bff-service-token.md` | **n/a** P1 | NuGet wiring P2 |
| SD-HEADER | X-Company-Id / axios | **reuse** | host apiClient |
| SD-SPLIT | ownership | **pass** | Field modal · Task banner+parcel · shell routeMap · RMMS patrol/incident GET only |
| SD-STATE | redux | **reuse** | page hooks + `@linm/notification` SignalR Task page only · **cấm** Field taskGroup |

---

## route_confirm (LOCKED · autopilot)

AskQuestion `route_confirm` **skipped wait** (`autoApprove=ON`) · chốt **route_a** = Design §5 + SA §6 proposed.

| Key | Path | Notes |
|-----|------|-------|
| **mfeStdRoute** (integration verify) | `/rmms-task-integrate` | QA e2e entry · `mfeStdUrl` runtime |
| Patrol Field detail | `/td-tk/:id` | DES-RTI-PATROL-FOOTER · «Giao việc» CTA |
| Incident Field | `/su-co` | DES-RTI-INC-ACTION · row/detail «Giao việc» |
| Post-create shell nav | `/platform-task/cv/{taskId}?from=patrol&sourceId={sessionId}` | DES-RTI-NAV |
| Incident post-create | `/platform-task/cv/{taskId}?from=incident&sourceId={incidentId}` | query locked |
| Task detail (MFE internal) | `/cv/:id` | lifecycle + parcel tabs 0/1 |
| Handoff banner ↗ patrol | `/td-tk/{sourceId}` | read-only · **cấm** session CRUD on Task |
| Handoff banner ↗ incident | `/su-co/{sourceId}` | read-only |
| `routeMap.task` | `/cv/:id` | RMMS shell + ChatSectionHost · GAP-RTI-ROUTE-01 |
| `routeMap.incident` | `/su-co/:id` | GAP-MSG-ROUTE-01 |
| Medical cite (fallback) | `/tasks/:id` | chỉ khi host **không** inject routeMap |

**source.routes (confirmed):**

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

## Platform SSOT (REQUIRED)

| Layer | Package / repo | Consume |
|-------|----------------|---------|
| **Field touchpoints** | `Linm.Web.RMMS.Field` | PatrolFormPage footer · IncidentListPage action · shared Giao việc modal |
| **Task detail** | `@linm/task` `Linm.Web.Task` | HandoffBanner extend · ChatSectionHost |
| **Chat parcel** | `@linm/message` `ChatSectionParcel` | mode=`both` · tab 0 Trao đổi · tab 1 Bình luận · prereq `platform-message` |
| **Shell** | `Linm.Web.RMMS.Master` | post-create navigate · `RMMS_MESSAGE_ROUTE_MAP` inject |
| **HTTP create** | Medical `task/endpoint.ts` | `POST /web-bff/api/v1/tasks` + integration body §GAP-PT-SOURCE-01 |
| **HTTP context** | RMMS BFF patrol/incident | GET sessions/incidents — **unchanged** |
| **SignalR** | `@linm/notification` | group `Task_{id}` Task page only · **cấm** Field subscribe |
| **BE P1** | Medical cite | create/detail/messages |
| **BE P2** | `Linm.Platform.Task.Bff` NuGet | RMMS BFF proxy · **cấm** embed TasksController |

### ssot.reuse (REQUIRED mọi T-UI)

| Concern | Reuse | Cấm |
|---------|-------|-----|
| CreateTask UI | shared modal Zone B on Field | inline task form on patrol/incident |
| Chat UI | `ChatSectionParcel` on Task only | fork ChatTab/CommentsTab · Field mount |
| HTTP create | Medical `endpoint.ts` bind | invent `api/v1/rmms/tasks` |
| Integration fields | `domainSource` · `sourceEntityType` · `sourceEntityId` | overload list filter `source` |
| Priority prefill | SA §5A pin color · §5B incident severity | invent demo enum |
| Toast / leave | `useAppToast` · `LeaveConfirmModal` | `window.alert` / mock assign overlay |
| Typography | label 13 · input D14/M16 | GAP-TYP-01 violation |

## Source assignment

| Field | Value |
|-------|-------|
| `source.mfe_field` | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Field` |
| `source.mfe_task` | `D:/MFE-CORE/Linm.Web.Task` |
| `source.mfe_message` | `D:/MFE-CORE/Linm.Web.Message` |
| `source.mfe_shell` | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Master` |
| `source.routes` | **route_confirm=route_a** · verify `/rmms-task-integrate` |
| `source.backend` | RMMS patrol/incident **live GET** · Task **cite** Medical P1 · NuGet P2 |
| `source.domain` | cross-domain integration — **no** new RMMS domain |
| `source.api` | RMMS `GET …/patrol/sessions/{id}` · `GET …/incident/incidents/{id}` · Platform `POST/GET …/tasks` |
| `source.bff` | P1 Medical cite · P2 `Linm.Platform.Task.Bff` on RMMS |
| `source.parcel` | `ChatSectionParcel` `@linm/message` |
| Context | `docs/plan/platform-task/RMMS-TUAN-DUONG.md` · hub 24/25/26 · `docs/context/features/patrol.md` · `incident.md` |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/rmms-task-integrate/ui/prototype/rmms-task-integrate-prototype.html` |
| `mfeStdRoute` | `/rmms-task-integrate` (**locked**) |
| `mfeStdUrl` | `http://localhost:9301/rmms-task-integrate` |
| `peerStdUrl` | `http://localhost:9301/rmms-task-integrate` |
| be_repo_confirm | **approved** (RMMS patrol/incident live · Task cite/NuGet · PO/SA) |
| ui_repo_confirm | **approved** (Field modal · Task banner+parcel · shell routeMap · PO/SA) |

---

## Implement gates (from SA)

| Gate | Decision | Apply |
|------|----------|-------|
| TZ | **tz_utc_store** | `dueDate` POST ISO UTC · display local FE |
| XCO | **xco_na** | task scoped by Platform role cite |
| SHARE | **share_tenant** | `TenantEntity` P2 · RMMS session/incident tenant-scoped live |
| Migration | **defer_p2** | `domain_source` columns TaskService only |
| Step 4b | **N/A** | integration_consumer_p1 · **cấm** RMMS TasksController |
| Prereq | **platform_qa_gate** | disable «Giao việc» until `platform-message` + `platform-task` QA green |

---

## FormType pack (`platform` integration · SA §3 — **không** §2a list / DES-GRID)

| Task id | Role | Nội dung |
|---------|------|----------|
| T-CTX-01 | Dev | Context hub 24/25/26 · controlHint · real-data §A–§F · ownership |
| T-FIELD-MODAL-01 | Dev `/integrate-task-service` | Shared Giao việc modal Zone B · patrol + incident |
| T-PATROL-FOOTER-01 | Dev | PatrolFormPage «Giao việc» secondary · «Kết ca» giữ |
| T-INC-ACTION-01 | Dev | IncidentListPage thay mock `assignName` overlay |
| T-PRIORITY-PREFILL-01 | Dev | GAP-TD-PRIORITY-01 · pin color + incident severity → priority/dueDate |
| T-SOURCE-FIELDS-01 | Dev | GAP-PT-SOURCE-01 · hidden POST fields locked §4 SA |
| T-POST-NAV-01 | Dev | Success toast + shell navigate DES-RTI-NAV query |
| T-HANDOFF-BANNER-01 | Dev | Extend `HandoffBanner` patrol **+** incident read-only ↗ |
| T-PARCEL-ROUTEMAP-01 | Dev `/integrate-message-service` | `ChatSectionHost` + shell `routeMap` incident key |
| T-BFF-NUGET-01 | Dev `/integrate-task-service` | RMMS BFF `Linm.Platform.Task.Bff` consumer P1 after prereq |
| T-PREREQ-GATE-01 | Dev | DES-RTI-PREREQ disabled CTA + tooltip until platform QA green |
| T-LEAVE-01 | Dev | Modal dirty → `LeaveConfirmModal` · **cấm** native dialog |
| T-TYP-01 | Dev | label 13 · input D14/M16 · **GAP-TYP-01** |
| T-UI-UX-01 | Dev | `dev-ui-ux-constitution` · integration surfaces · **cấm** DES-GRID |
| T-UI-RESP-01 | Dev `/dev-web-responsive` | 1280/768/375 · modal + banner + parcel tabs |
| T-PERM-01 | Dev | **reuse** host/Medical scope · **cấm** invent RMMS task perm P1 |
| T-QA-INTEGRATE-01 | QA | AC-I-01…11 · patrol/incident modal · post-nav · banner · parcel · prereq |

**OUT / N/A:** T-UI-LIST-* · T-UI-GRID-* · T-BE-CRUD RMMS domain · T-BE-API RMMS TasksController · T-BE-MIG P1 · Field ChatTab mount · Notification Giao việc P2 · linkedTaskChip P2 · native chat form P2.

---

## Summary

| id | page | layer | role | domain/MFE | deps | APIs | status |
|----|------|-------|------|------------|------|------|--------|
| T-CTX-01 | rmms-task-integrate | docs | dev | — | — | cite | pending |
| T-FIELD-MODAL-01 | GiaoViecModal | ui | dev | Field | T-CTX-01 | RTI-03 | pending |
| T-PATROL-FOOTER-01 | PatrolFormPage | ui | dev | Field | T-FIELD-MODAL-01 | RTI-01 | pending |
| T-INC-ACTION-01 | IncidentListPage | ui | dev | Field | T-FIELD-MODAL-01 | RTI-02 | pending |
| T-PRIORITY-PREFILL-01 | modal prefill | ui | dev | Field | T-FIELD-MODAL-01 | — | pending |
| T-SOURCE-FIELDS-01 | hidden POST | ui | dev | Field | T-FIELD-MODAL-01 | RTI-03 | pending |
| T-POST-NAV-01 | shell navigate | ui | dev | RMMS Master | T-FIELD-MODAL-01 | — | pending |
| T-HANDOFF-BANNER-01 | HandoffBanner | ui | dev | `@linm/task` | T-CTX-01 | — | pending |
| T-PARCEL-ROUTEMAP-01 | routeMap | ui | dev | Task + Master | T-HANDOFF-* · platform-message | RTI-05 | pending |
| T-BFF-NUGET-01 | Task BFF | be | dev | RMMS BFF | T-CTX-01 · prereq | RTI-03..05 | pending |
| T-PREREQ-GATE-01 | CTA gate | ui | dev | Field | T-PATROL-* · T-INC-* | — | pending |
| T-LEAVE-01 | modal leave | ui | dev | Field | T-FIELD-MODAL-01 | — | pending |
| T-TYP-01 | typography | ui | dev | Field + Task | T-FIELD-* · T-HANDOFF-* | — | pending |
| T-UI-UX-01 | UX constitution | ui | dev | Field + Task | T-FIELD-* | — | pending |
| T-UI-RESP-01 | responsive | ui | dev | Field + Task | T-UI-UX-01 | — | pending |
| T-PERM-01 | perms | ui | dev | host / Medical | T-CTX-01 | cite | pending |
| T-QA-INTEGRATE-01 | qa | qa | qa | — | all UI + BFF | — | pending |

**deps order:** T-CTX-01 → T-FIELD-MODAL-01 → (T-PATROL-FOOTER-01 ∥ T-INC-ACTION-01 ∥ T-PRIORITY-PREFILL-01 ∥ T-SOURCE-FIELDS-01) → T-POST-NAV-01 → (T-HANDOFF-BANNER-01 ∥ T-BFF-NUGET-01) → T-PARCEL-ROUTEMAP-01 → (T-PREREQ-GATE-01 ∥ T-LEAVE-01 ∥ T-TYP-01 ∥ T-UI-UX-01) → T-UI-RESP-01 → T-PERM-01 → T-QA-INTEGRATE-01

---

## T-CTX-01 — Context + SSOT cite

**Page:** rmms-task-integrate  
**Layer:** `docs`  
**Role:** dev  
**devSlash:** `/integrate-task-service` · `/integrate-message-service`

### Source

| | |
|--|--|
| mfe field | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Field` |
| mfe task | `D:/MFE-CORE/Linm.Web.Task` |
| mfe message | `D:/MFE-CORE/Linm.Web.Message` |
| mfe shell | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Master` |
| domain | cross-domain — **no** RMMS task domain |
| api | RMMS patrol/incident GET + Medical Task cite |
| bff | P1 cite · P2 NuGet |

**from_design:** zones DES-RTI-* + DES-MSG-SEC-* · reviewUrl prototype  
**from_solution:** RTI-01…05 · task_kind=integration_consumer_p1 · GAP-PT-SOURCE-01 §4 · GAP-TD-PRIORITY-01 §5  
**ssot.reuse:** hub 24/25/26 · RMMS-TUAN-DUONG plan · controlHint · real-data §A–§F · platform-task/message packs  
**Skills:** `/integrate-task-service` · `/integrate-message-service` · `platform-pack-live-mfe`  
**system_design:** SD-BFF=defer P2 · SD-SPLIT=pass  
**DoD:**
- [ ] Đọc PO + design + solution + DA trước Write
- [ ] **Cấm** re-scan demo `tuan-duong-web.html` / `task.html` làm SSOT
- [ ] **Cấm** invent RMMS task API path
- [ ] Confirm prereq `platform-message` + `platform-task` QA status before unblocking CTA

### Links

| | Path |
|--|------|
| PO | `../po/requirement.md` |
| Design | `../ui/design.md` |
| Solution | `../be/solution-discovery.md` |
| Plan | `docs/plan/platform-task/RMMS-TUAN-DUONG.md` |
| Analy | `specs/_data-analy/features/rmms-task-integrate-control-hint.md` · `rmms-task-integrate-real-data.md` |
| API cite | `D:/Medical/Linm.Web.Medical.Incidents/src/services/task/endpoint.ts` |

**Deps:** —  
**Notes:** contentHash analy `sha256:49011e5dfcb8bbbb15adc781a60d62ba44446985c9dbf397806ba69dda786c54`

---

## T-FIELD-MODAL-01 — Shared Giao việc modal (Zone B)

**Page:** GiaoViecModal  
**Layer:** `ui`  
**Role:** dev  
**devSlash:** `/integrate-task-service`

### Source

| | |
|--|--|
| mfe | `Linm.Web.RMMS.Field` |
| files | new shared modal component · service bind Medical `endpoint.ts` |
| zones | DES-RTI-MODAL |

**from_design:** title · description · priority · assignmentStrategy · assigneeId · dueDate · hidden domain fields · Tạo CV / Hủy  
**from_solution:** POST body §4 patrol + incident · FormMode Confirm  
**implement.wire:** modal open → prefill from context GET → confirm → `POST /web-bff/api/v1/tasks` → on 201 callback navigate  
**implement.state:** local modal form state · **cấm** global task slice on Field  
**Skills:** `/integrate-task-service` · `ssot-no-duplicate`  
**APIs:** RTI-01 · RTI-02 · RTI-03  
**DoD:**
- [ ] Centered overlay · 2-col desktop / 1-col mobile
- [ ] Hidden `domainSource` · `sourceEntityType` · `sourceEntityId` on POST
- [ ] 422/5xx → `useAppToast` · modal stays open · **cấm** alert
- [ ] 404 context → toast · **cấm** open modal
- [ ] Patrol default `assignmentStrategy=pool` · incident `direct`
- [ ] **Cấm** inline task form on patrol/incident pages

**Deps:** T-CTX-01  
**Notes:** Replace incident mock `assignName` overlay path

---

## T-PATROL-FOOTER-01 — Patrol session «Giao việc» CTA

**Page:** PatrolFormPage `/td-tk/:id`  
**Layer:** `ui`  
**Role:** dev  
**devSlash:** `/integrate-task-service`

### Source

| | |
|--|--|
| mfe | `src/pages/PatrolFormPage` |
| zone | DES-RTI-PATROL-FOOTER |

**from_design:** «Kết ca» primary giữ · «Giao việc» secondary → modal  
**from_solution:** GAP-RTI-PATROL-01 · GET RTI-01 context  
**DoD:**
- [ ] Footer secondary «Giao việc» opens T-FIELD-MODAL-01 with `domainSource=patrol`
- [ ] Context strip readonly sessionIdCode · sessionRoute
- [ ] **Cấm** merge create task into «Kết ca» flow
- [ ] Wire prereq gate T-PREREQ-GATE-01 when platform not green

**Deps:** T-FIELD-MODAL-01  
**APIs:** RTI-01

---

## T-INC-ACTION-01 — Incident «Giao việc» action

**Page:** IncidentListPage `/su-co`  
**Layer:** `ui`  
**Role:** dev  
**devSlash:** `/integrate-task-service`

### Source

| | |
|--|--|
| mfe | `src/pages/IncidentListPage` |
| zone | DES-RTI-INC-ACTION |

**from_design:** row menu «Giao việc» · severity chip → priority hint  
**from_solution:** GAP-RTI-INC-01 · replace mock assign overlay  
**DoD:**
- [ ] Remove mock `assignName`-only overlay
- [ ] «Giao việc» opens shared modal with `domainSource=incident`
- [ ] Prefill title from incident · severity readonly chip
- [ ] Default `assignmentStrategy=direct`

**Deps:** T-FIELD-MODAL-01  
**APIs:** RTI-02

---

## T-PRIORITY-PREFILL-01 — Severity → priority + dueDate SLA

**Page:** GiaoViecModal prefill  
**Layer:** `ui`  
**Role:** dev  
**devSlash:** `/integrate-task-service`

**from_solution:** §5A pin color · §5B incident severity · user may override before confirm  
**DoD:**
- [ ] Patrol session footer: default `priority=high` · `dueDate=now+48h` when no pin
- [ ] Pin Đỏ → `critical` +24h · Cam → `high` +48h · Vàng → `medium` +30d
- [ ] Incident: `critical`→+24h · `high`→+48h · `medium`→+7d · `low`→+14d
- [ ] Xanh / resolved → **cấm** suggest create
- [ ] Title prefill «Xử lý điểm Cấp bách — {route}» or incident title

**Deps:** T-FIELD-MODAL-01  
**Notes:** GAP-TD-PRIORITY-01 closed SA §5

---

## T-SOURCE-FIELDS-01 — Integration POST fields (GAP-PT-SOURCE-01)

**Page:** GiaoViecModal hidden fields  
**Layer:** `ui`  
**Role:** dev  
**devSlash:** `/integrate-task-service`

**from_solution:** §4 locked field names — **cấm** rename  
**DoD:**
- [ ] POST includes `domainSource` · `sourceEntityType` · `sourceEntityId`
- [ ] Patrol: `patrol` · `patrol_session` · session Guid
- [ ] Incident: `incident` · `incident` · incident Guid
- [ ] **Cấm** confuse with list filter `source` enum

**Deps:** T-FIELD-MODAL-01  
**APIs:** RTI-03

---

## T-POST-NAV-01 — Post-create shell navigation

**Page:** RMMS shell navigate  
**Layer:** `ui`  
**Role:** dev  
**devSlash:** `/integrate-task-service`

### Source

| | |
|--|--|
| mfe | `Linm.Web.RMMS.Master` |
| zone | DES-RTI-NAV |

**route_confirm:** `/platform-task/cv/{taskId}?from=patrol|incident&sourceId=`  
**DoD:**
- [ ] Success toast on 201 create
- [ ] Shell navigate to locked post-create URL with query params
- [ ] **Cấm** hard-code Medical-only `/tasks/:id` when routeMap injected
- [ ] Mobile = sibling deep-link `/cv/:id` — **cấm** native chat form P1

**Deps:** T-FIELD-MODAL-01

---

## T-HANDOFF-BANNER-01 — Task detail source banner (Zone D)

**Page:** TaskDetailPage `/cv/:id`  
**Layer:** `ui`  
**Role:** dev  
**devSlash:** `/integrate-task-service`

### Source

| | |
|--|--|
| mfe | `D:/MFE-CORE/Linm.Web.Task` · `HandoffBanner.tsx` |
| zone | DES-RTI-SOURCE-BANNER |

**from_design:** «Từ tuần tra» / «Từ sự cố» read-only ↗ · `#fffbeb` strip  
**DoD:**
- [ ] Accept `from === 'patrol' | 'incident'` + `sourceId` query
- [ ] Link ↗ `/td-tk/{sourceId}` or `/su-co/{sourceId}` read-only
- [ ] **Cấm** CRUD patrol/incident from Task page
- [ ] Extend current patrol-only stub

**Deps:** T-CTX-01

---

## T-PARCEL-ROUTEMAP-01 — ChatSectionHost + shell routeMap

**Page:** Task detail parcel + RMMS shell  
**Layer:** `ui`  
**Role:** dev  
**devSlash:** `/integrate-message-service`

### Source

| | |
|--|--|
| mfe task | `ChatSectionHost.tsx` |
| mfe shell | routeMap inject |
| zone | DES-MSG-SEC-* |

**route_confirm locked:**

```ts
const RMMS_MESSAGE_ROUTE_MAP: MessageRouteMap = {
  task: (id) => `/cv/${id}`,
  incident: (id) => `/su-co/${id}`,
};
```

**DoD:**
- [ ] `ChatSectionHost` routeMap includes `incident` key (delta from task-only live)
- [ ] Shell inject same map for parcel cross-links
- [ ] Tabs index **0** Trao đổi · **1** Bình luận · `mode=both` — **cấm** reorder
- [ ] Send `fa-paper-plane` · expand · ↗ via routeMap
- [ ] **Cấm** copy ChatTab markup into Field
- [ ] SignalR `Task_{id}` Task page only

**Deps:** T-HANDOFF-BANNER-01 · platform-message done  
**APIs:** RTI-05

---

## T-BFF-NUGET-01 — RMMS BFF Task consumer (GAP-RTI-BFF-01)

**Page:** RMMS BFF  
**Layer:** `be`  
**Role:** dev  
**devSlash:** `/integrate-task-service`

### Source

| | |
|--|--|
| repo | `D:/AI-QLBD/Linm.RMMS.WebService` BFF layer |
| package | `Linm.Platform.Task.Bff` NuGet P2 · Medical cite P1 interim |

**from_solution:** **cấm** embed `TasksController` into RMMS domain  
**DoD:**
- [ ] P1: Field modal calls Medical cite path via host apiClient (until NuGet live)
- [ ] P2: `PackageReference Linm.Platform.Task.Bff` · `AddTaskServiceBff()` proxy RTI-03..05
- [ ] **Cấm** clone TasksController into `Domains/Patrol` or `Domains/Incident`
- [ ] Patrol/incident controllers **unchanged** (GET only)

**Deps:** T-CTX-01 · prereq platform QA  
**Notes:** Unblock after `platform-task` extract/NuGet ready

---

## T-PREREQ-GATE-01 — Platform QA gate on CTA

**Page:** Field patrol + incident  
**Layer:** `ui`  
**Role:** dev  
**devSlash:** `/integrate-task-service`

**zone:** DES-RTI-PREREQ  
**DoD:**
- [ ] Disable «Giao việc» when `platform-message` or `platform-task` not QA green
- [ ] Tooltip «Đang triển khai Platform Task»
- [ ] Feature flag or STATUS prereq check — remove gate when both green
- [ ] Align STATUS `blockedReason` unblock procedure

**Deps:** T-PATROL-FOOTER-01 · T-INC-ACTION-01  
**Notes:** platform-message QA currently blocked · platform-task QA paused — keep gate ON P1

---

## T-LEAVE-01 — Modal dirty leave confirm

**Page:** GiaoViecModal  
**Layer:** `ui`  
**Role:** dev  

**DoD:**
- [ ] Dirty modal close / Hủy → `LeaveConfirmModal` or discard confirm
- [ ] Composer dirty on Task parcel → parcel `DES-MSG-LEAVE` (platform-message SSOT)
- [ ] **Cấm** `window.confirm`

**Deps:** T-FIELD-MODAL-01 · T-PARCEL-ROUTEMAP-01

---

## T-TYP-01 — Typography GAP-TYP-01

**DoD:**
- [ ] Label **13px** · input D14 desktop / M16 mobile on modal + banner
- [ ] Match prototype CSS tokens

**Deps:** T-FIELD-MODAL-01 · T-HANDOFF-BANNER-01

---

## T-UI-UX-01 — UX constitution

**DoD:**
- [ ] `dev-ui-ux-constitution` on integration surfaces
- [ ] Modern modal + banner + parcel — **cấm** DES-GRID catalog
- [ ] **Cấm** demo chrome / GOVOne clone

**Deps:** T-FIELD-MODAL-01

---

## T-UI-RESP-01 — Responsive

**devSlash:** `/dev-web-responsive`  
**DoD:** 1280 / 768 / 375 · modal 2-col→1-col · footer actions stack · parcel tabs

**Deps:** T-UI-UX-01

---

## T-PERM-01 — Permissions reuse

**DoD:**
- [ ] **Reuse** host JWT + Medical task scope
- [ ] **Cấm** invent `rmms.tasks.*` permission P1

**Deps:** T-CTX-01

---

## T-QA-INTEGRATE-01 — Integration QA scenarios

**Page:** rmms-task-integrate verify  
**Layer:** `qa`  
**Role:** qa  
**devSlash:** `/agent-qa` (e2eQa ON)

**from_design:** AC-I-01…11  
**mfeStdUrl:** `http://localhost:9301/rmms-task-integrate`  
**DoD / scenarios seed (QA viết `qa/scenarios.md`):**
- [ ] Patrol «Giao việc» → modal → POST thật → navigate `/cv/:id?from=patrol&sourceId=`
- [ ] Incident «Giao việc» thay mock assign
- [ ] Priority/dueDate prefill per severity map
- [ ] POST body includes `domainSource` + `sourceEntityId`
- [ ] Task banner ↗ patrol/incident read-only
- [ ] Chat/comment parcel tabs 0/1 send + expand + ↗ routeMap
- [ ] **0** ChatTab mount on Field
- [ ] **0** RMMS TasksController embed
- [ ] Toast errors · **0** `window.alert`
- [ ] Prereq gate when platform not green
- [ ] Typography label 13 / input D14
- [ ] e2eQa ON → runtime + PNG (**chỉ** QA role)

**Deps:** all UI + BFF tasks  
**Notes:** TL **cấm** chạy e2e / start:std

---

## Rules

- Một lock / feature trong STATUS
- Dev **cấm** start nếu thiếu **source** + skills + API cite + route_confirm
- **Cấm** T-UI-LIST / DES-GRID / RMMS TasksController embed / Field ChatTab
- Commit chỉ sau `commit_confirm`
- Deps: Field modal → patrol/incident → post-nav → Task banner+routeMap → prereq/leave/typ → qa
- Dev blocked until `platform-message` + `platform-task` QA green — T-PREREQ-GATE-01 remains until unblock
- GAP-TD-CHANNEL-01 native chat **DEFER P2** · GAP-F-OPS-01 Notification **DEFER P2**

---

## Handoff → Dev / QA

| Task | Ready? | Missing source/SD |
|------|--------|-------------------|
| T-CTX-01 | ✅ | — |
| T-FIELD-MODAL-01 | ✅ | Field paths · endpoint cite |
| T-PATROL-FOOTER-01 | ✅ | PatrolFormPage |
| T-INC-ACTION-01 | ✅ | IncidentListPage |
| T-PRIORITY-PREFILL-01 | ✅ | SA §5 locked |
| T-SOURCE-FIELDS-01 | ✅ | SA §4 locked |
| T-POST-NAV-01 | ✅ | route_confirm locked |
| T-HANDOFF-BANNER-01 | ✅ | HandoffBanner path |
| T-PARCEL-ROUTEMAP-01 | ✅ | platform-message prereq |
| T-BFF-NUGET-01 | ⏸ | until platform QA + NuGet |
| T-PREREQ-GATE-01 | ✅ | feature flag |
| T-LEAVE-01 · T-TYP-01 · T-UI-UX-01 · T-UI-RESP-01 | ✅ | — |
| T-PERM-01 | ✅ | reuse only |
| T-QA-INTEGRATE-01 | ✅ after Dev | mfeStdUrl runtime |

| Field | Value |
|-------|-------|
| Next slash | `/integrate-task-service` + `/integrate-message-service` (Dev) → `/agent-qa*` |
| phase_from / phase_to | team-lead → **dev** (blocked until platform QA green) |
| task_kind | `integration_consumer_p1` |
| route_confirm | `route_a` locked |
| e2e | queued QA only |
| tl_done | `task_ad52d111` · `2026-08-27T05:25:00.000Z` |

---

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-team-lead |
| skillVersion | 2026.08.19.04 |
| schemaVersion | 2 |
| workflowVersion | 2026.08.25.02 |
| rulesVersion | 2026.08.25.7 |
| generatedAt | 2026-08-27T05:25:00.000Z |
| versionGate | rechecked |
| contentHashPriorDataAnaly | sha256:49011e5dfcb8bbbb15adc781a60d62ba44446985c9dbf397806ba69dda786c54 |
| headerFingerprintPrior | sha256:rmms-task-integrate-integration-v1 |
| real_view_parity | v1 |
| taskId | `task_ad52d111` |
| route_confirm | route_a · autopilot |
| prior_sa_taskId | `task_cfccd68d` |
| prior_design_taskId | `task_5638b6a9` |

---
<!-- Version meta: skillId=agent-team-lead skillVersion=2026.08.19.04 schemaVersion=2 workflowVersion=2026.08.25.02 rulesVersion=2026.08.25.7 versionGate=rechecked taskId=task_ad52d111 route_confirm=route_a -->
