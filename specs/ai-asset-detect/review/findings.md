# Review findings — ai-asset-detect

> Status: **done**  
> Mode: `review_and_fix` (autopilot · closed GAP-QA-ACT-DELETE-01)  
> reviewHash: `a7c4e91b2f08d6a1` · rulesVersion: `2026.08.11.1`

| Field | Value |
|-------|-------|
| feature | `ai-asset-detect` |
| status | `done` |
| review_confirm | **approve** (autopilot · task_b86293c4) |
| role | `review` · `/agent-review` |
| taskId | `task_b86293c4` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.AiVision` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · AiVision · **no ERP.*** |
| mfeStdRoute | `/ai-vision/ai-asset-detect` |
| mfeStdUrl | `http://localhost:9303/ai-vision/ai-asset-detect` |
| updatedAt | `2026-08-12T15:20:00.000Z` |

## Scope

| Surface | Repo / path |
|---------|-------------|
| list + form + map | `Linm.Web.RMMS.AiVision` · `AiAssetDetectListPage` |
| API + BFF | `Linm.RMMS.WebService` · `api/v1/ai-vision` · AiVision BFF |
| pack | Kind B list+form · Kind F map pin · FormType ACT |

## Findings

| ID | Class | Sev | Where | Repro | Fix hint / disposition |
|----|-------|-----|-------|-------|------------------------|
| REV-UI-01 | ui-fn | P1 | toolbar/row delete | QA GAP-QA-ACT-DELETE-01 | **CLOSED** — Draft-only `canDelete`/`showDelete` → `service.delete` |
| REV-S-01 | security | P2 | Controllers | `[RequirePermission]` TODO comments | Accept SD-AUTH · CommonLib ≥1.4.0 |
| REV-BE-01 | be-fn | info | detect engine | P1 stub | Documented OUT · no secret keys |
| REV-UI-LAYOUT-06 | ui-fn | — | list shell | flex `.page` height 100% · prior QA S0/S1 | **OK** (code) · live re-smoke when `yarn start:std` |
| REV-Q-01 | query | — | list/init/nearby | pageSize∈{50,100,200,500} · init-data only | **OK** |
| REV-PATH-01 | path | — | BE/FE | AiVision domain only | **OK** · no ERP.* |

## Query (`/review-query`)

- List filter: search / routeId / assetClass / status / from–to · Enter search · no Tìm button — **OK**
- Init-data drives class/status/engine dropdowns — **OK** (no KIND_LABEL / ổ gà mix)
- Soft-delete Draft-only · tenant `CompanyCode` filter · XCO GetById/confirm/dismiss IgnoreQueryFilters — **OK**
- Nearby Haversine + Confirm risk ack — **OK**

## Security

- Path: only `Linm.RMMS.WebService` / AiVision · FE `/ai-vision/asset-candidates` — **PASS**
- Soft-delete + draft guard — **PASS**
- `[RequirePermission]` stub (platform) — **P2 accept**
- No API secrets / detect keys in repo — **PASS**
- IDOR: company claim check on cross-tenant Get — **PASS** (service)

## UI / BE function

- 1× `LinPageLayout` · `LinCatalogDataGrid` (resize default ON) · `LinCatalogListPagination` only — **PASS**
- Form slideout C/E/V/Copy footer-only · Confirm/Dismiss modals — **PASS**
- Map Leaflet pins + Fit + basemap — **PASS**
- FormType ACT: Create/Edit/View/Copy/Confirm/Dismiss/**Delete** wired — **PASS** (delete closed in review_and_fix)
- BE API-01…11 + BFF proxy + migration `Schema_RmmsAiVisionAssetCandidates` — **PASS** (artifact)

## Gates

| Gate | Result |
|------|--------|
| Path guard / DOMAIN-MAP AiVision | **PASS** |
| Confirms beRepo + uiRepo | **PASS** (packet) |
| Prototype + reviewUrl | **PASS** |
| FE yarn typecheck + build | **PASS** (`LINM_RUN_DEV_LOCAL_BUNDLE=1`) |
| BE API + BFF `dotnet build` | **PASS** 0 err |
| review_confirm | **approve** (autopilot) |

## Verdict

**ACCEPT** — FormType ACT delete gap closed; LIST/FORM/MAP/AI SSOT + path guard OK; builds PASS. Feature `ai-asset-detect` → **done**.

## Accept TODOs (non-blocking)

- Apply migration on target DB before live Confirm / ITS_CAMERA smoke
- RequirePermission when CommonLib ready
- Real detect engine (replace P1 stub)

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-review |
| skillVersion | 2026.08.09.02 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.10.3 |
| rulesVersion | 2026.08.11.1 |
| reviewHash | a7c4e91b2f08d6a1 |
| generatedAt | 2026-08-12T15:20:00.000Z |
| versionGate | ok |
| taskId | `task_b86293c4` |

---
<!-- Version meta: skillVersion=2026.08.09.02 · schemaVersion=qldb-workflow-skill-v1 · workflowVersion=2026.08.10.3 · versionGate=ok -->
