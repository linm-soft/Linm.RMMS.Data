# QA fix plan — its-anpr-overload

> Status: **implemented**  
> Nguồn: `qa/scenarios.md` (stale static) · `task/its-anpr-overload.md` T-QA-* · STATUS blockers · live audit vs peer `its-traffic-detect`  
> Phase: `qaFixPhase=plan` · taskId=`task_36ebe928` · planFrom=`task_62331d3c` · qaFailFrom=`task_62331d3c`  
> catalogKind: **`its-anpr-overload`**

## Gaps (từ QA + live audit)

| ID | Severity | Repro | Surface |
|----|----------|-------|---------|
| **GAP-QA-E2E-01** | **P0** | `qa/scenarios.md` chỉ «static review · E2E OFF» (2026-08-17) · **không** có `qa/screens/` · **không** `method=e2e runtime` | QA artifact · `specs/its-anpr-overload/qa/` |
| **GAP-QA-PAGES-01** | **P0** | QA `task_62331d3c` · `mfeServe=localRoot` · e2e local-deploy :9100 + `yarn e2e-qa --serve=local-root` **không** hoàn tất (Playwright/manifest) · **0** PNG `S0/S1/QA-20` | E2E pipeline · `{MfeSource}/local-deploy-page` |
| **R-QA-01** | **P0** gate | QA `task_62331d3c` verdict **FAIL** / paused · board `qa_fail_rollback` approved → Dev plan | Workflow |
| **GAP-QA-FILTER-01** | **P1** | Live page dùng `ErpListHeaderFilters` · peer PASS `its-traffic-detect` / `estimate` dùng `LinErpListFilterBar` + Áp dụng/Xóa lọc | FE `ItsAnprOverloadListPage.tsx` ~L441–490 |
| **GAP-QA-DEMO-01** | **P1** | Confirm modal hiện text end-user «vấn đề **stub** `VI-ANPR-*`» — vi phạm design/PO **cấm** «stub» trên UI | FE `ItsAnprOverloadListPage.tsx` ~L843–844 |
| **GAP-DEV-CONFIG-LEFTOVER-01** | **P2** | CSS `.configHint*` còn trong module.css · TSX đã `LinCatalogUiSchemaEditorModal` FULL | FE `ItsAnprOverloadListPage.module.css` |

**Đã đóng (Dev `task_9afb76f4` — không re-open):** GAP-SA-ANPR-UI-SCHEMA-01 · GAP-TL-CONFIG-01 · GAP-TL-UX-01 · Config FULL · `buildDynamicGridColumns` · BE seed `its-anpr-overload`.

## Plan

| # | Việc | Repo | Files | DoD |
|---|------|------|-------|-----|
| 1 | Zone B filter parity: `LinErpListFilterBar` thay `ErpListHeaderFilters` · search + camera + status · Áp dụng/Xóa lọc · **cấm** text «Tìm» standalone | UI MFE | `ItsAnprOverloadListPage.tsx` · `.module.css` | QA-FILTER-01 PASS · peer `ItsTrafficDetectListPage` |
| 2 | Confirm modal UX: bỏ «stub» / checklist khách · message user-friendly (mã vấn đề sẽ được tạo) | UI | `ItsAnprOverloadListPage.tsx` | QA-DEMO-01 PASS · **0** «stub» trên UI |
| 3 | Xóa dead `.configHint*` CSS | UI | `ItsAnprOverloadListPage.module.css` | **0** configHint leftover |
| 4 | Verify local-deploy: `deploy.ps1` → `{MfeSource}/local-deploy-page` · `_manifest.json` khớp `@linm/rmms-ai-vision` + `mfePagesVersion` | Ops/MFE | `local-deploy-page/deploy.ps1` · manifest | GAP-QA-PAGES-01 closed pre re-QA |
| 5 | Route smoke: `/its-anpr-overload` + alias `ai-its/toc-do-qt` · testid `rmms-its-anpr-overload-list-page` | UI | `src/index.tsx` (verify only) | S0 e2e mount |
| 6 | SSOT retry re-review | — | `implement/its-anpr-overload.md` § `retry.ssot_rereview` | checklist PASS sau filter fix |
| 7 | Build HARD | UI + BE | — | MFE `yarn typecheck` + `yarn build` · BE `dotnet build` **PASS** |
| 8 | Re-QA | QA | `qa/scenarios.md` · `qa/screens/` | e2eQa ON · localRoot :9100 + docker + `yarn e2e-qa` · PNG S0/S1/QA-20 + manifest `ok:true` · verdict **PASS** |

## Peer reference

| Piece | Peer |
|-------|------|
| Filter bar | `ItsTrafficDetectListPage` · `LinErpListFilterBar` |
| E2E evidence shape | `specs/its-traffic-detect/qa/scenarios.md` · `specs/predict/qa/scenarios.md` |
| Config FULL (closed) | `EstimateListPage` · BE `CatalogUiSchemaSeed.ItsAnprOverload()` |

## Out of scope

- S-MAP DEFER P2
- Real Cục Đăng kiểm adapter · full Incident domain (stub VI-ANPR backend OK P1)
- Apply migration on production DB (STATUS info blocker — QA env SQL)
- Path rename / ERP.* / AI badge header
- Re-implement CatalogUiSchema (đã FULL)

## Evidence

- Prior FAIL: `qa/scenarios.md` static-only · **no** `qa/screens/` · QA `task_62331d3c` paused/failed
- mfeStdUrl: `http://localhost:9303/its-anpr-overload`
- mfeLocalRootUrl: `http://localhost:9100/its-anpr-overload`
- BE: `D:/AI-QLBD/Linm.RMMS.WebService` · **cấm ERP.***
- UI: `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.AiVision`

## Handoff

| Field | Value |
|-------|-------|
| next | `/agent-qa` re-QA · e2eQa=ON |
| STATUS | Dev implement **completed** · `task_524f0c3e` |

## Version meta

| Field | Value |
|-------|-------|
| skillId | agent-dev |
| skillVersion | 2026.08.24.01 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.24.01 |
| rulesVersion | 2026.08.16.05 |
| generatedAt | 2026-08-24T18:30:00.000Z |
| versionGate | ok |
| qaFixPhase | implement |
| taskId | task_524f0c3e |

---
<!-- Version meta: skillVersion=2026.08.24.01 · schemaVersion=1 · workflowVersion=2026.08.24.01 · versionGate=ok · skillId=agent-dev · qaFixPhase=implement -->
