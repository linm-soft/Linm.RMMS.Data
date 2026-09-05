# QA fix plan — so-ts-underpass

> Status: **await_confirm** (`qa_fix_plan`) · **cấm** Write code trước board Approve  
> Nguồn: `qa/scenarios.md` (draft) · STATUS · QA `task_bdd72a01` failed · screens/live-assert @ 2026-09-01T11:55Z  
> Phase: `qaFixPhase=plan` · taskId=`task_9c2ed21d` · qaFailFrom=`task_bdd72a01`  
> packKind: **`list`** · typeCode=`UNDERPASS` · Step 4b **none** (reuse road-assets · dumpSpecs P1)

## Gaps (từ QA)

| ID | Severity | Repro | Surface |
|----|----------|-------|---------|
| **GAP-QA-WORKER-01** | **P0** | QA `task_bdd72a01` **failed** · error=`Agent … already has active run` · notes=`worker exception` · `qa_fail_rollback` approved → Dev plan | AutoCode worker / queue |
| **GAP-QA-E2E-01** | **P0** | e2eQa ON · `qa/scenarios.md` vẫn **draft** (Notes trống) · **0** `handoff/qa-compact.md` · **cấm** PASS khi DoR QA chưa Write | QA artifact · `specs/so-ts-underpass/qa/` · handoff |
| **GAP-QA-E2E-PW-01** | info | `yarn e2e-qa` headed hang → capture `channel=chrome` · `--skip-start` (manifest note) | AutoCode e2e · `_capture.mjs` |
| **GAP-QA-E2E-DOCKER-01** | info | compose API host map **`:5111`** (≠ default `:5101`) · BFF `:5201` · init-data LOOKUP OK trong `_init.json` | WebService compose · e2e waitPort |
| **R-QA-01** | **P0** gate | QA verdict **FAIL** (worker) · board `qa_fail_rollback` → Dev **plan only** | Workflow |

**Live evidence @ plan write (probe from QA screens — không override FAIL DoR):**

| Check | Result |
|-------|--------|
| S0 `/so-ts?type=UNDERPASS` | PNG + manifest **PASS** · testid `rmms-so-ts-underpass-list-page` · title/header OK · filter · hide low-fill |
| S1 alias `/so-ts-underpass` | PNG **PASS** · Navigate → UNDERPASS list |
| QA-20 create form | PNG **PASS** · `data-form-cols=5` · `asset-underpass-attr` · Loại cống/Thi công/Kết cấu · **kmTo ẩn** · CC- |
| live-assert.json | list/form/DTM checks **PASS** · overflowX=false D/T/M |
| init-data (`_init.json`) | `culvertTypes`·`constructionTypes`·`structureTypes`·`wingwallMaterials`·`underpassPavementTypes` present |
| Product P0 MFE/BE delta | **none observed** from capture — confirm on re-QA |

**Đã đóng (Dev `task_5069938c` — không re-open trừ re-QA fail mới):** GAP-UP-NAME/LOOKUP/PREFIX/POINT/SPEC/LEAVE/ROUTE · GAP-SOTS-COL/FORM · init LOOKUP · prefix `CC-` · LeaveConfirmModal · FE/BE build **PASS** · flatten **DEFER** GAP-UP-FLAT-01.

## Plan

| # | Việc | Repo | Files | DoD |
|---|------|------|-------|-----|
| 1 | **Verify** build HARD (no feature delta unless re-QA finds product gap) | UI + BE | — | MFE `yarn typecheck` + `yarn build` **PASS** · BE `dotnet build` **PASS** |
| 2 | Document qa-fix retry trên implement SSOT | Docs | `implement/so-ts-underpass.md` § qa-fix | checklist gaps · debt giữ (FLAT/Auth DEFER) |
| 3 | E2E infra contract (QA owns run) — Dev **không** chạy e2e | QA artifact | `qa/screens/_capture.mjs` · `_live-assert.mjs` (đã có) | `--skip-start` · API `:5111` · BFF `:5201` · `channel=chrome` · **cấm** kill `:9301` |
| 4 | Worker/session hygiene trước re-QA | Ops | Autocode queue | **0** stale active run · 1 agent / feature |
| 5 | STATUS `mfeStdUrl` locked | — | STATUS | live `http://localhost:9301/so-ts?type=UNDERPASS` · alias board-only |
| 6 | Re-QA | QA only | `qa/scenarios.md` · `qa/screens/` · `handoff/qa-compact.md` | e2eQa ON · fill scenarios + compact · S0/S1/QA-20 · manifest `ok:true` · T-QA-* · verdict **PASS** |

**Expected implement delta:** **0** MFE/BE feature code nếu re-QA chỉ đóng GAP-QA-E2E-01/WORKER (artifact + worker). Chỉ mở code khi re-QA ghi GAP sản phẩm mới.

## Peer reference

| Piece | Peer |
|-------|------|
| E2E capture + live-assert | `specs/so-ts-culvert-x/qa/` · `so-ts-ditch/qa/` |
| qa-fix-plan shape | `specs/so-ts-rescue-station/implement/*-qa-fix-plan.md` |
| Filter bar context | `docs/context/features/so-ts-underpass-filter-bar.md` |
| BE init-data / prefix | `RoadAssetService` · DOMAIN-MAP Asset · **cấm ERP.*** |

## Out of scope

- Write MFE/BE **trước** board Approve `qa_fix_plan` (**GAP-DEV-QA-PLAN-01**)
- Role Dev chạy `yarn e2e-qa` / `yarn start:std` smoke dài (chỉ `/agent-qa*`)
- ERP.* · invent `api/v1/so-ts/*` · Step 4b / Schema_* flatten (**GAP-UP-FLAT-01** DEFER)
- Đổi `controlHint` / `route_confirm=route_a` / Kind B
- autoApprove bỏ qua `qa_fix_plan` / `qa_fail_rollback`

## Evidence

- Prior FAIL: queue `task_bdd72a01` status=`failed` · error worker active-run · `qa/scenarios.md` draft · **0** `qa-compact.md`
- Screens present: `qa/screens/{S0,S1,QA-20}.png` · `manifest.json` `ok:true` · `live-assert.json` · `_init.json`
- mfeStdUrl: `http://localhost:9301/so-ts?type=UNDERPASS`
- MFE: `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset`
- BE: `D:/AI-QLBD/Linm.RMMS.WebService` · **cấm ERP.***
- Dev prior: `implement/so-ts-underpass.md` · `task_5069938c`

## Handoff

| Field | Value |
|-------|-------|
| next | board **Approve `qa_fix_plan`** → enqueue Dev `qaFixPhase=implement` (new taskId) |
| then | Dev verify build / SSOT note · **0** code trừ gap mới → `/agent-qa*` e2eQa ON fill scenarios+compact |
| **cấm** | implement trước Approve · chain Review khi QA còn FAIL · Dev chạy e2e |

## Version meta

| Field | Value |
|-------|-------|
| skillId | agent-dev |
| skillVersion | 2026.08.19.04 |
| schemaVersion | 1 |
| workflowVersion | 2026.09.01.02 |
| rulesVersion | 2026.09.01.1 |
| generatedAt | 2026-09-01T13:25:00.000Z |
| versionGate | ok |
| qaFixPhase | plan |
| taskId | task_9c2ed21d |
| qaFailFrom | task_bdd72a01 |

---
<!-- Version meta: skillId=agent-dev skillVersion=2026.08.19.04 schemaVersion=1 workflowVersion=2026.09.01.02 rulesVersion=2026.09.01.1 versionGate=ok qaFixPhase=plan taskId=task_9c2ed21d -->
