# Implement — so-ts-rescue-station

| Field | Value |
|-------|-------|
| feature | `so-ts-rescue-station` |
| role | `dev` · `/agent-dev` |
| status | **done** |
| changeScope | `new_page` |
| packKind | `list` |
| typeCode | `RESCUE_STATION` |
| taskId | `task_8de8e1e0` (qa-fix implement) · prior `task_2f84d6b5` |
| mfeStdRoute | `/so-ts?type=RESCUE_STATION` |
| mfeStdUrl | `http://localhost:9301/so-ts?type=RESCUE_STATION` |
| alias | `/so-ts-rescue-station` → `/so-ts?type=RESCUE_STATION` |
| API | `api/v1/asset/road-assets` |
| migration | **none** |
| writtenAt | `2026-09-01T09:20:00.000Z` |
| yarn typecheck | **PASS** |
| webpack prod | **PASS** (`--parallelism=1` · Node24 OOM workaround) |
| yarn build (default parallel) | **OOM** Node24 Zone Allocation — debt below |
| dotnet build | **PASS** (`Linm.RMMS.WebService.sln`) |
| e2eQa | queued `/agent-qa*` only — **not run** this role |
| qaFixPhase | **implement** · plan approved (autoApprove) |

## Delta shipped

| Area | Change |
|------|--------|
| BE init | `storedBuildingGrades[]` · `vitriOptions[]` (+ seed ∪ dump) · keep office/aux grades |
| BE CRUD | RESCUE_STATION validate: name/kmFrom optional · prefix `CN-` · **no** IsWeak→đoạn · no required dump key |
| FE list | Profile hide type/kmTo/qty/unit + peer type cols · **ON mẫu** materials/site/office/aux/stored grades+areas · titles Công trình cứu hộ |
| FE form | S-ATTR editable dump §4 · Dropdown LOOKUP · name←`name_building` «Tên kho bãi» · ẩn kmTo/SL/ĐVT · LeaveConfirmModal reuse |
| Route | alias Navigate board |
| CTX | `so-ts-rescue-station-filter-bar.md` · context track `dev=done` |
| Labels | dumpSpecLabels materials_in_store · stored_building_* · vitri |

## qa-fix (`task_8de8e1e0`)

| # | DoD | Result |
|---|-----|--------|
| 1 | MFE `yarn typecheck` + `yarn build --parallelism=1` · BE `dotnet build` | **PASS** · **0** feature code delta |
| 2 | Document qa-fix retry SSOT | this § |
| 3 | Peer capture contract (QA owns run) | `qa/screens/_capture.mjs` · `_live-assert.mjs` · API `:5111` · BFF `:5201` · `channel=chrome` |
| 4 | STATUS `mfeStdUrl` locked | `http://localhost:9301/so-ts?type=RESCUE_STATION` |
| 5 | Re-QA | **queued** `/agent-qa*` — Dev **cấm** e2e |

**Gaps handoff QA:** GAP-QA-E2E-01 (scenarios+PNG) · GAP-QA-E2E-DOCKER-01 (gate `:5101` vs compose `:5111` — contract documents `:5111`) · GAP-QA-E2E-PW-01 (use `_capture.mjs`) · R-QA-01 closed for Dev plan/implement.

**Live audit (prior plan probe — still valid):** S0/S1/QA-20 DOM PASS · init-data LOOKUP OK · Config FULL OK.

## Files (key)

**MFE** `Linm.Web.RMMS.Asset`
- `src/pages/AssetListPage/AssetListPage.tsx`
- `src/pages/AssetFormPage/AssetFormPage.tsx`
- `src/services/asset/dumpSpecLabels.ts` · `lookups.ts` · `endpoint.ts`
- `src/index.tsx`

**BE** `Linm.RMMS.WebService`
- `api/domains/asset/LINM.RMMS.Asset.Models/DTOs/RoadAssetDtos.cs`
- `api/src/RMMS.Service.Api/Domains/Asset/Services/RoadAssetService.cs`

**Data**
- `docs/context/features/so-ts-rescue-station-filter-bar.md`
- `docs/context/features/so-ts-rescue-station.md`
- `specs/so-ts-rescue-station/qa/screens/_capture.mjs`
- `specs/so-ts-rescue-station/qa/screens/_live-assert.mjs`
- `specs/so-ts-rescue-station/implement/so-ts-rescue-station-qa-fix-plan.md`

## GAP close

GAP-SOTS-COL/FORM/REUSE · GAP-RS-NAME/SPEC/POINT/LOOKUP/LEAVE/ROUTE · GAP-RS-TILE-01 (no tile invent) — **closed** P1 · flatten DEFER P2  
Dev qa-fix plan items 1–4 — **closed** · E2E PNG/scenarios — **QA owns**

## new_page.ssot_rereview

**pass** · checklist: grid profile · filter-bar V1–V5 context · form 5col · leave Modal · dumpSpecLabels · init LOOKUP · qa-fix verify rebuild

## Debt / QA

- Auth perm align DEFER
- E2E T-QA-* queued QA only — run `_capture.mjs` + `_live-assert.mjs` with std `:9301` + docker API `:5111` + BFF `:5201`
- `yarn build` default parallel OOM on Node 24 — use `--parallelism=1` (or pin Node 20 LTS)
- KCHT ô `—` kept · **cấm** invent RESCUE_STATION tile

## Next

role: `qa` · `/agent-qa*` · fill `qa/scenarios.md` · run peer capture · PNG S0/S1/QA-20 · `qa-compact.md` · verdict PASS

---
<!-- Version meta: skillId=agent-dev skillVersion=2026.08.19.04 schemaVersion=1 workflowVersion=2026.08.30.01 rulesVersion=2026.08.31.2 versionGate=ok qaFixPhase=implement taskId=task_8de8e1e0 -->
