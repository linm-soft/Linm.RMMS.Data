# QA fix plan — platform-message

> Status: **await_confirm** (`qa_fix_plan`) · **cấm** Write code trước board Approve  
> Nguồn: `qa/scenarios.md` · STATUS blockers · live audit `Linm.Web.Message` (2026-08-30)  
> Phase: `qaFixPhase=plan` · taskId=`task_6a9ff48a` · qaFailFrom=`task_abf2c4eb`  
> packKind: **`platform`** · `msg_kind=parcel_only` · Step 4b **N/A**

## Gaps (từ QA)

| ID | Severity | Repro | Surface |
|----|----------|-------|---------|
| **GAP-QA-E2E-02** | **P0** | `yarn e2e-qa` abort: Docker wait API `:5101` fail (Linux compose API **`:5111`**; BFF `:5201` OK). Đồng thời (tại QA `task_abf2c4eb`) MFE **thiếu** `start:std` + `src/standalone/*` → không serve peer std. | MFE `package.json` / `webpack.config.js` / `src/standalone/*` · e2e waitPort · compose `API_HOST_PORT` |
| **GAP-QA-E2E-01** | **P0** | e2eQa ON · CLI `ok:false` · **0** PNG `qa/screens/{S0,S1,QA-20}.png` · **cấm** PASS static-only | QA runtime · `specs/platform-message/qa/screens/` |
| **GAP-QA-STD-ROUTE-01** | **P0** | STATUS `mfeStdUrl` = `http://localhost:9301/platform-message` · live WIP (unapproved) có `start:std` **:8606** + routes `/messages`·`/chat-demo` — **0** path `/platform-message` → GET peer URL **404** dù std listen. | `src/index.tsx` · `StandaloneShell` · `devRoutes.ts` · port `STANDALONE_DEV_PORT` |
| **R-QA-01** | **P0** gate | QA `task_abf2c4eb` verdict **FAIL** · board `qa_fail_rollback` → Dev plan | Workflow |

**Đã đóng (Dev `task_992a4353` — static AC — không override e2e fail):** GAP-MSG-PARCEL-01 · CAST · ROUTE · COMMENT · LEAVE · TYP · AC-P-01…08 · FE `yarn build` PASS · **0** RMMS chat / ERP.*

### Live audit note (plan only — **không** coi là closed)

| Check | State @ plan write |
|-------|-------------------|
| `yarn start:std` script | **present** WIP → port **8606** (≠ STATUS **9301**) |
| `src/standalone/*` | **present** WIP (`StandaloneEntry` · `index.html` · shell) |
| Route `/platform-message` | **missing** |
| API e2e `:5101` | **unfixed** (compose Linux `:5111`) |

## Plan

| # | Việc | Repo | Files | DoD |
|---|------|------|-------|-----|
| 1 | Align std port **9301** (STATUS `mfeStdUrl` locked) · `package.json` `start:std` + webpack `STANDALONE_DEV_PORT` | UI `Linm.Web.Message` | `package.json` · `webpack.config.js` | `yarn start:std` listen **:9301** · **không** 8606 |
| 2 | Peer route **`/platform-message`** → inbox surface (`MessagesInboxPage`) · giữ `/messages` live mount · shell/nav + `DEV_MODULES` link | UI | `src/index.tsx` · `StandaloneShell.tsx` · `dev/devRoutes.ts` | GET `http://localhost:9301/platform-message` **200** · empty thật · **0** fake demo row |
| 3 | Harden standalone stack (peer Task/Home): entry · mockAuth · **cấm** `signalRService.start()` thật trong Message MFE · HtmlWebpackPlugin standalone | UI | `src/standalone/*` · webpack | `isStandalone` boot · overlay sạch |
| 4 | ChatSection peer smoke path (S1/QA-20): std reachable surface cho tabs Trao đổi/Bình luận (reuse `/chat-demo` **hoặc** nest under `/platform-message` — **không** DES-GRID · **không** demo `task.html` SSOT) | UI | `ChatSectionDemoPage` · routes | S1 mount ChatSection · send/expand/routeMap code path sẵn |
| 5 | E2E docker API listen: (A) document/`e2e-qa` **apiPort=`5111`** khi Linux compose default **hoặc** (B) start Win64 camera API `:5101` per compose note — BFF giữ `:5201` | Ops · AutoCode e2e · WebService compose | `docker-compose.yml` cite · e2e wait args | waitPort API+BFF **PASS** trước capture |
| 6 | Build HARD | UI | — | MFE `yarn build` **PASS** · Step 4b / `dotnet` RMMS chat **N/A** (`parcel_only`) |
| 7 | SSOT note trên `implement/platform-message.md` (retry / qa-fix result) | Docs | `implement/platform-message.md` | gaps E2E closed checklist |
| 8 | Re-QA | QA only | `qa/scenarios.md` · `qa/screens/` | e2eQa ON · `yarn start:std` + docker + `yarn e2e-qa` · PNG **S0,S1,QA-20** · manifest `ok:true` · verdict **PASS** |

## Peer reference

| Piece | Peer |
|-------|------|
| Standalone entry / `start:std` | `Linm.Web.Task` (`:8608` + `/platform-task/*`) · `Linm.Web.Home` |
| Parcel exports / ChatSection | live `@linm/message` · common ChatTab/CommentsTab |
| BE cite | Medical `MessagesController` — **cấm** RMMS MessagesController / ERP.* |
| e2e shape | `specs/*/qa/scenarios.md` · AutoCode `yarn e2e-qa` |

## Out of scope

- Write MFE/BE **trước** board Approve `qa_fix_plan` (**GAP-DEV-QA-PLAN-01**)
- RMMS chat API / migration / Message.Api P1 · Step 4b
- `GAP-PT-INBOX-01` federate inbox (**DEFER**)
- `rmms-task-integrate` / `platform-task` sticky
- Đổi `controlHint` / `route_confirm=route_a` / DES-GRID Kind B
- Role Dev chạy `yarn e2e-qa` / `yarn start:std` smoke dài (chỉ `/agent-qa*`)
- Concurrent Asset `start:std` cũng claim **:9301** — QA session **exclusive** Message std trên 9301 (hoặc stop Asset std)

## Cấm

- Sửa ngoài gap list trên  
- Copy note demo / `task.html` mock SSOT  
- Mark Dev implement done trước build PASS  
- autoApprove bỏ `qa_fix_plan`  
- ERP.* / invent `api/v1/rmms/messages`

## Evidence

- Prior FAIL: `specs/platform-message/qa/scenarios.md` · error `Docker chưa listen API:5101 / BFF:5201` · **0** PNG  
- mfeStdUrl: `http://localhost:9301/platform-message`  
- MFE: `D:\MFE-CORE\Linm.Web.Message`  
- BE: Step 4b **N/A** · cite Medical only · `D:\AI-QLBD\Linm.RMMS.WebService` (compose ports only)

## Handoff

| Field | Value |
|-------|-------|
| next | board **Approve `qa_fix_plan`** → enqueue Dev `qaFixPhase=implement` (new taskId) |
| then | Dev fix per plan · `yarn build` PASS → `/agent-qa*` e2eQa ON |
| **cấm** | implement trước Approve · chain Review khi QA còn FAIL |

## Version meta

| Field | Value |
|-------|-------|
| skillId | agent-dev |
| skillVersion | 2026.08.29.02 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.29.04 |
| rulesVersion | 2026.08.29.32 |
| generatedAt | 2026-08-30T07:45:00.000Z |
| versionGate | ok |
| qaFixPhase | plan |
| taskId | task_6a9ff48a |
| qaFailFrom | task_abf2c4eb |

---
<!-- Version meta: skillId=agent-dev skillVersion=2026.08.29.02 schemaVersion=1 workflowVersion=2026.08.29.04 rulesVersion=2026.08.29.32 versionGate=ok qaFixPhase=plan -->
