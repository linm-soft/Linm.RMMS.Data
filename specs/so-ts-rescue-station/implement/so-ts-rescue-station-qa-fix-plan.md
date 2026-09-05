# QA fix plan — so-ts-rescue-station

> Status: **approved** (`qa_fix_plan` · autoApprove) · implement **done** `task_8de8e1e0`  
> Nguồn: `qa/scenarios.md` (draft) · STATUS · QA `task_5d9e0c34` paused · live audit probe 2026-09-01  
> Phase: `qaFixPhase=implement` · planTask=`task_01b6dc2c` · implementTask=`task_8de8e1e0` · qaFailFrom=`task_5d9e0c34`  
> packKind: **`list`** · typeCode=`RESCUE_STATION` · Step 4b **none** (reuse road-assets)

## Gaps (từ QA)

| ID | Severity | Repro | Surface |
|----|----------|-------|---------|
| **GAP-QA-E2E-01** | **P0** | e2eQa ON · `qa/scenarios.md` vẫn **draft** · **0** PNG `qa/screens/{S0,S1,QA-20}.png` · **0** `manifest.json` · **0** `qa-compact.md` | QA artifact · `specs/so-ts-rescue-station/qa/` |
| **GAP-QA-E2E-DOCKER-01** | **P0** | `yarn e2e-qa` Docker wait API `:5101` fail — Linux compose map **`:5111`** (peer so-ts-bus-station cùng pattern) | AutoCode e2e · `Linm.RMMS.WebService` compose |
| **GAP-QA-E2E-PW-01** | **P0** | QA `task_5d9e0c34` không hoàn tất CLI/capture (agent paused trước Write scenarios) · **cấm** PASS static-only | QA runtime · peer `_capture.mjs` + `channel=chrome` |
| **GAP-QA-PKT-URL-01** | info | Packet QA `--url=…/so-ts-rescue-station` · STATUS `route_a` `mfeStdUrl` = `/so-ts?type=RESCUE_STATION` — alias redirect **OK** live | STATUS SSOT wins · S1 dùng alias |
| **R-QA-01** | **P0** gate | QA `task_5d9e0c34` verdict **FAIL** / paused · board `qa_fail_rollback` approved → Dev plan | Workflow |

**Live audit @ plan write (probe only — không override QA FAIL):**

| Check | Result |
|-------|--------|
| S0 `/so-ts?type=RESCUE_STATION` | list page + testid `rmms-so-ts-rescue-station-list-page` · title/header OK |
| S1 alias `/so-ts-rescue-station` | redirect → cùng list |
| QA-20 create form | `data-form-cols=5` · `asset-rescue-station-attr` · «Tên kho bãi» · **kmTo ẩn** |
| init-data BFF `web-bff/api/v1/asset/road-assets/init-data` | `storedBuildingGrades`/`vitriOptions`/`officeBuildingGrades`/`auxiliaryWorksGrades` = 3 each |
| FE list Config FULL | `LinCatalogUiSchemaEditorModal` + `buildDynamicGridColumns` — **0** `configHint` leftover |

**Đã đóng (Dev `task_2f84d6b5` — không re-open trừ re-QA fail mới):** GAP-RS-NAME/SPEC/POINT/LOOKUP/LEAVE/ROUTE · init LOOKUP delta · grid ON mẫu · prefix `CN-` · FE typecheck/webpack/dotnet **PASS**.

## Plan

| # | Việc | Repo | Files | DoD |
|---|------|------|-------|-----|
| 1 | **Verify** build HARD (no feature delta unless re-QA finds gap) | UI + BE | — | MFE `yarn typecheck` + `yarn build --parallelism=1` **PASS** · BE `dotnet build` **PASS** |
| 2 | Document qa-fix retry trên implement SSOT | Docs | `implement/so-ts-rescue-station.md` § qa-fix | checklist gaps closed · debt giữ |
| 3 | E2E infra: peer capture contract (QA owns scripts) — Dev **không** chạy e2e | QA artifact | `qa/screens/_capture.mjs` · `_live-assert.mjs` (peer `so-ts-bus-station`) | `--skip-start` · API `:5111` · BFF `:5201` · `channel=chrome` |
| 4 | STATUS `mfeStdUrl` locked | — | STATUS | `http://localhost:9301/so-ts?type=RESCUE_STATION` · alias board-only |
| 5 | Re-QA | QA only | `qa/scenarios.md` · `qa/screens/` · `handoff/qa-compact.md` | e2eQa ON · S0/S1/QA-20 PNG · manifest `ok:true` · T-QA-* PASS · verdict **PASS** |

**Implement phase (`qaFixPhase=implement`) DONE `task_8de8e1e0`:** verify build PASS · SSOT §qa-fix · peer `_capture.mjs`/`_live-assert.mjs` scaffolded · **0** MFE/BE feature delta · re-QA queued.

## Peer reference

| Piece | Peer |
|-------|------|
| E2E capture + live-assert | `specs/so-ts-bus-station/qa/screens/` |
| List/form parity | `so-ts-station-house` · `so-ts-ferry` |
| Filter bar context | `docs/context/features/so-ts-rescue-station-filter-bar.md` |
| BE init-data | `RoadAssetService.cs` · BFF `RoadAssetsBffController` |

## Out of scope

- Write MFE/BE **trước** board Approve `qa_fix_plan` (**GAP-DEV-QA-PLAN-01**)
- Role Dev chạy `yarn e2e-qa` / `yarn start:std` smoke dài (chỉ `/agent-qa*`)
- ERP.* · invent `api/v1/so-ts/*` · RESCUE_STATION tile invent (**GAP-RS-TILE-01**)
- flatten dumpSpecs / auth fine-grain (**DEFER P2**)
- Đổi `controlHint` / `route_confirm=route_a`

## Evidence

- Prior FAIL: `qa/scenarios.md` draft only · **0** `qa/screens/` · QA `task_5d9e0c34` paused @ probe init-data
- mfeStdUrl: `http://localhost:9301/so-ts?type=RESCUE_STATION`
- MFE: `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset`
- BE: `D:/AI-QLBD/Linm.RMMS.WebService` · **cấm ERP.***
- Dev prior: `implement/so-ts-rescue-station.md` · `task_2f84d6b5`

## Handoff

| Field | Value |
|-------|-------|
| plan | **approved** autoApprove · implement **done** `task_8de8e1e0` |
| next | `/agent-qa*` e2eQa ON · run `_capture.mjs` · fill scenarios · PNG S0/S1/QA-20 |
| **cấm** | chain Review khi QA còn FAIL · Dev chạy e2e |

## Version meta

| Field | Value |
|-------|-------|
| skillId | agent-dev |
| skillVersion | 2026.08.19.04 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.30.01 |
| rulesVersion | 2026.08.31.2 |
| generatedAt | 2026-09-01T09:20:00.000Z |
| versionGate | ok |
| qaFixPhase | implement |
| taskId | task_8de8e1e0 |
| planTaskId | task_01b6dc2c |
| qaFailFrom | task_5d9e0c34 |

---
<!-- Version meta: skillId=agent-dev skillVersion=2026.08.19.04 schemaVersion=1 workflowVersion=2026.08.30.01 rulesVersion=2026.08.31.2 versionGate=ok qaFixPhase=implement taskId=task_8de8e1e0 -->
