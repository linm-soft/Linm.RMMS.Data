# Review findings — rmms-task-integrate

> Status: **done** · Mode: `review_only` · `review_confirm=fix_gaps` (autoApprove ON)  
> reviewHash: `sha256:f1bff805a575abd36c0771927919b3829f83128d01952d61a6ef6942e4bde9dd` · rulesVersion: `2026.08.25.7`  
> taskId: `task_c427be7b` · `/agent-review` · **cấm** implement · **cấm** e2e / `yarn start:std` / build ở role này

| Field | Value |
|-------|-------|
| feature | `rmms-task-integrate` |
| packKind | **`platform`** · `task_kind=integration_consumer_p1` |
| changeScope | `edit_page` |
| surfaces | Field modal/footer · Task handoff/chat · Master routeMap · RMMS patrol/incident GET (no task embed) |
| prior · qa | **PASS claimed** · `qa/scenarios.md` · PNG S0/S1/QA-20 — **evidence INVALID** (see REV-UI-01) |
| prior · dev | **confirmed** · `implement/rmms-task-integrate.md` |
| Kind B list shell (GAP-P2-LAYOUT-06) | **N/A** — not Kind B DES-GRID |
| mfeStdUrl (runtime QA) | `http://localhost:9304/rmms-task-integrate` (Field) |
| updatedAt | `2026-08-27T06:33:00.000Z` |

**Cấm:** assume vuln · auto-fix P0 security · parallel review+dev · approve khi e2eQa evidence blank · `phase=done` khi `fix_gaps`.

---

## Scope

| Surface | Repo / path |
|---------|-------------|
| Field modal / footer / incident / verify | `Linm.Web.RMMS.Field` · `GiaoViecModal` · `PatrolFormPage` · `IncidentListPage` · `RmmsTaskIntegrateVerifyPage` · `taskPostNavigate` · `platformTaskPrereq` |
| Task handoff + routeMap | `Linm.Web.Task` · `HandoffBanner` · `usePlatformTaskPaths` |
| Shell routeMap constants | `Linm.Web.RMMS.Master` · `src/config/rmmsMessageRouteMap.ts` |
| BE RMMS | `Linm.RMMS.WebService` — patrol/incident live · **0** TasksController |
| QA evidence | `specs/rmms-task-integrate/qa/screens/{S0,S1,QA-20}.png` + `manifest.json` |

---

## Findings

| ID | Class | Sev | Where | Repro | Fix hint |
|----|-------|-----|-------|-------|----------|
| **REV-UI-01** | ui-fn / qa-evidence | **P1** | `qa/screens/S0.png` · `S1.png` · `QA-20.png` | 3 files **identical** SHA256 `d9a1a5ca…` · 1440×900 · center RGB(255,255,255) · 209 bytes each — **không** hiện verify / DES-RTI zones dù `scenarios.md` + `manifest.ok=true` claim PASS | Re-run `/agent-qa` capture trên `:9304/rmms-task-integrate` — PNG **khác hash** · nội dung verify + patrol/incident cards visible · update `manifest.json` |
| **REV-UI-02** | ui-fn | **P2** | `Linm.Web.RMMS.Master/src/config/rmmsMessageRouteMap.ts` | Grep: constants only · **0** import shell/bootstrap | Wire shell inject **hoặc** document P1 SSOT = Task `usePlatformTaskPaths` (đã có `incident→/su-co/:id`) · Master map = P2 |
| **UI-FN-01** | ui-fn | **P2** | `taskPriorityPrefill.ts` `canSuggestTaskFromIncident` | SA §5B maps `low`→priority low+14d; code **blocks** `severity==='low'` mở modal | Align SA (allow + prefill) **hoặc** ghi product exception vào requirement |
| **UI-FN-02** | ui-fn | **P2** | `GiaoViecModal` dueDate date input | Prefill ISO `now+48h` → date-only → `T12:00:00` mất giờ SLA | Keep full ISO in state · datetime control · hoặc date display-only |
| **SEC-01** | security | **P2** | Field POST `sourceEntityId` | Client trusts row/route id; P1 Medical cite chưa prove ownership nguồn (IDOR risk Task BE) | TaskService P2 validate tenant + source entity access |
| **REV-S-01** | ui-fn | **P3** | `HandoffBanner` copy | Design «Từ tuần tra» / «Từ sự cố»; code «Chuyển từ…» | Align copy design |
| **REV-UI-03** | ui-fn | **P3** | `IncidentListPage` live row | `data-des-id="DES-RTI-INC-ACTION"` mainly on verify card | Optional DES attr on row menu CTA |

**P0:** none.

---

## Query (`/review-query`)

| Check | Result |
|-------|--------|
| Field SSOT HTTK/STK | **N/A** — no voucher/account surface |
| N+1 / OOM list-import | **N/A** — `integration_consumer_p1` · single `POST /tasks` · context from loaded patrol/incident |
| Lookup 422 | **N/A** P1 (assignee SearchInput deferred P2 per SA) |
| Gaps QUERY-P* | **none** |

---

## Security (`/review-mfe-security` scoped)

| Check | Result |
|-------|--------|
| Auth | Host JWT via shared `apiClient` · **cấm** invent `rmms.tasks.*` — **PASS** |
| ChatTab / SignalR Field | **0** Field ChatTab / ChatSectionParcel mount · Task page only — **PASS** |
| Secrets in scoped paths | **none** found |
| `window.alert` modal path | **0** on `GiaoViecModal` · LeaveConfirmModal used — **PASS** (NotificationList `alert` = GAP-F-OPS-01 out of scope) |
| IDOR sourceEntityId | **SEC-01 P2** — defer TaskService P2 |
| Storage envelope (login/token) | Out of feature delta — host MFE auth unchanged |

---

## UI / BE function

### UI — PASS (code)

| Check | Result |
|-------|--------|
| Shared `GiaoViecModal` Zone B | **PASS** · POST body `domainSource` + `sourceEntityType` + `sourceEntityId` |
| Patrol footer «Giao việc» + prereq gate | **PASS** · `platformTaskPrereq` + unlock env |
| Incident row → modal (no mock assignName) | **PASS** |
| Prefill patrol high+48h · incident severity map | **PASS** (except UI-FN-01 low block) |
| Post-nav `/platform-task/cv/:id?from=&sourceId=` | **PASS** · `taskPostNavigate.ts` |
| `HandoffBanner` patrol + incident ↗ read-only | **PASS** |
| Task `routeMap` incident key | **PASS** · `usePlatformTaskPaths` |
| LeaveConfirmModal · typography D14/M16 | **PASS** |
| Demo chrome / localStorage SSOT | **PASS** (verify page instructional only · no demo-json SSOT) |
| Master `RMMS_MESSAGE_ROUTE_MAP` wired | **FAIL partial** · REV-UI-02 P2 |

### UI — FAIL (evidence)

| Check | Result |
|-------|--------|
| e2eQa PNG S0/S1/QA-20 prove DES zones | **FAIL** · REV-UI-01 P1 |

### BE — PASS

| Check | Result |
|-------|--------|
| RMMS TasksController embed | **0** matches · **PASS** |
| Step 4b / migration | **N/A** · integration_consumer_p1 |
| Patrol/Incident task create on RMMS domain | **none** · GET live only |
| Medical cite `POST /tasks` | Field `services/task` · **PASS** (cite) |
| NuGet BFF | **defer P2** · GAP-RTI-BFF-01 |

---

## Non-blocking deferred (known)

| ID | Note |
|----|------|
| GAP-RTI-BFF-01 / T-BFF-NUGET-01 | NuGet `Linm.Platform.Task.Bff` P2 · P1 Medical cite |
| GAP-RTI-PREREQ | Gate ON until platform-message + platform-task QA green |
| GAP-F-OPS-01 | Notification `window.alert` Giao việc — out of P1 |
| GAP-TD-CHANNEL-01 | Mobile native chat defer |
| GAP-QA-STD-PORT | Docs `:9301`/Master vs runtime Field `:9304` |

---

## Confirm

AskQuestion `review_confirm` (autoApprove ON · không chờ board):

| Option | Chosen |
|--------|--------|
| accept → `phase=done` | **no** — REV-UI-01 P1 evidence |
| **fix_gaps** | **yes** · primary → **QA recapture** · secondary P2 → Dev optional |
| abort | no |

`review_confirm=fix_gaps` · `2026-08-27T06:33:00.000Z` · agent autoApprove.

---

## Handoff → QA (primary) / Dev (optional P2)

| Gap | Owner | Task hint |
|-----|-------|-----------|
| REV-UI-01 | **qa** · `/agent-qa` | Recapture S0/S1/QA-20 distinct non-blank PNGs · fix manifest hashes · **cấm** claim PASS với blank frame |
| REV-UI-02 | dev (P2) | Wire Master `RMMS_MESSAGE_ROUTE_MAP` **or** STATUS note Task path SSOT |
| UI-FN-01 | po/dev (P2) | Align low-severity gate vs SA §5B |
| UI-FN-02 | dev (P2) | dueDate ISO fidelity |
| SEC-01 | be/platform-task (P2) | source ownership validate |

**Next role:** `qa` (recapture) — **cấm** `phase=done` · chain Dev chỉ nếu QA evidence PASS mà còn P1 code gap (hiện không).

---

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-review |
| skillVersion | 2026.08.19.04 |
| schemaVersion | qldb-workflow-skill-v1 |
| workflowVersion | 2026.08.25.02 |
| rulesVersion | 2026.08.25.7 |
| reviewHash | sha256:f1bff805a575abd36c0771927919b3829f83128d01952d61a6ef6942e4bde9dd |
| generatedAt | 2026-08-27T06:33:00.000Z |
| versionGate | rechecked |
| taskId | task_c427be7b |
| review_confirm | fix_gaps |
| contentHash (STATUS) | sha256:49011e5dfcb8bbbb15adc781a60d62ba44446985c9dbf397806ba69dda786c54 |

---
<!-- Version meta: skillId=agent-review skillVersion=2026.08.19.04 schemaVersion=qldb-workflow-skill-v1 workflowVersion=2026.08.25.02 rulesVersion=2026.08.25.7 versionGate=rechecked reviewHash=sha256:f1bff805a575abd36c0771927919b3829f83128d01952d61a6ef6942e4bde9dd -->