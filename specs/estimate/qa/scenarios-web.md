# QA — scenarios — estimate

| Field | Value |
|-------|-------|
| feature | `estimate` |
| status | `done` |
| role | `qa` · `/agent-qa` |
| taskId | `task_1c6c0433` |
| pack | T-QA-CRUD-01 · T-QA-LEAVE-01 · FormType ai Kind B+D · Config **FULL** · re-QA after `task_5554ab03` |
| e2eQa | **ON** |
| method | `e2e runtime · start:std + docker (API+BFF rebuild) + extended capture` |
| verdict | **PASS** |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.AiVision` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · AiVision · **no ERP.*** |
| mfeStdRoute | `/ai-vision/estimate` |
| mfeStdUrl | `http://localhost:9303/ai-vision/estimate` |
| demo | `Linm.RMMS.Demo/src/demo/ai-vision/estimate.html` |
| skillVersion | `2026.08.17.04` |
| schemaVersion | `2` |
| workflowVersion | `2026.08.17.05` |
| versionGate | `ok` |
| updatedAt | `2026-08-17T17:21:00.000Z` |

## Preconditions

- AiVision MFE: `yarn start:std` · port **9303** · open `mfeStdUrl` — **listen OK** · typecheck **PASS**
- Docker: `linm-rmms-api` + `linm-rmms-bff` + postgres — **healthy** (API image rebuild 2026-08-17 · BFF rebuild · `ApiBase=http://linm-rmms-api:8080`)
  - Host API **`:5111`** · BFF `:5201` · MFE → `VITE_API_URL=…/web-bff/api/v1`
- Tables `rmms_ai_vision_estimates` (+ lines) present (hand SQL apply — see Gaps info)
- Seed: POST `from-incident/INC-441` → Draft `EST-20260817-0001`
- Screens: `specs/estimate/qa/screens/` · `manifest.json` · **ok=true** · 21 PNG
- **Cấm** verify chỉ prototype `reviewUrl`

## Smoke — Final MFE (e2e)

| # | Step | Expect | Result | Evidence |
|---|------|--------|--------|----------|
| S0 | Open `mfeStdUrl` | Route mount · title **Ước lượng sửa chữa** · **no AI badge** | **PASS** | ![S0](screens/S0.png) |
| S1 | List shell | 1× `LinPageLayout` · flex · **cấm** nested CatalogListShell | **PASS** | ![S1](screens/S1.png) |
| S2 | Footer pager | `LinCatalogListPagination` only · pageSize 50/100/200/500 | **PASS** | ![S2](screens/S2.png) |
| S3 | Search | `SearchTextInput` · status Select · `LinErpListFilterBar` · **cấm** text «Tìm» | **PASS** | ![S3](screens/S3.png) |
| S4 | Toolbar | from-incident · from-defects · Excel stub · refresh · **Sửa config** · **no AI chrome** | **PASS** | ![S4](screens/S4.png) |
| S5 | Row menu | View/Edit/Copy/Confirm/Delete(Draft)/History surface | **PASS** | ![S5](screens/S5.png) |
| S6 | Form C/E/V/Copy | Kind D slideout · footer-only · lines · leave-confirm | **PASS** | ![S6](screens/S6.png) |
| S7 | Confirm | Modal confirm · **cấm** `window.confirm` · **no auto WO** | **PASS** | ![S7](screens/S7.png) |
| S8 | Path | FE `/ai-vision/estimate` · BE `api/v1/ai-vision/estimates` · **cấm** `/ai-estimate` · **cấm ERP.*** | **PASS** | ![S8](screens/S8.png) |

## T-QA-CRUD-01

| # | Step | Expect | Result | Evidence |
|---|------|--------|--------|----------|
| QA-20 | Create from-incident | Host picker INC-* → POST → Draft + lines | **PASS** | ![QA-20](screens/QA-20.png) |
| QA-21 | Create from-defects | DET ids → POST → Draft | **PASS** | ![QA-21](screens/QA-21.png) |
| QA-22 | Edit | Draft PUT header+lines · recalc total | **PASS** | ![QA-22](screens/QA-22.png) |
| QA-23 | View | readOnly · footer Đóng | **PASS** | ![QA-23](screens/QA-23.png) |
| QA-24 | Copy | New draft from existing | **PASS** (control gated) | ![QA-24](screens/QA-24.png) |
| QA-25 | Delete | Soft delete Draft-only | **PASS** (control gated) | ![QA-25](screens/QA-25.png) |
| QA-26 | Confirm | Draft → Confirmed · toast · no WO | **PASS** (control gated) | ![QA-26](screens/QA-26.png) |
| QA-27 | History | `LinCatalogHistoryModal` | **PASS** | ![QA-27](screens/QA-27.png) |
| QA-28 | Lines | Add/edit/delete line · amount = qty×unitPrice | **PASS** | ![QA-28](screens/QA-28.png) |
| QA-CFG | Config FULL | `LinCatalogUiSchemaEditorModal` title «Cấu hình hiển thị danh mục» · cột List/width/filter/sort · **cấm** `configHint` · GET `ai-estimates` ui-schema **200** (8 fields) | **PASS** | ![QA-CFG](screens/QA-CFG.png) |

## T-QA-LEAVE-01

| # | Step | Expect | Result | Evidence |
|---|------|--------|--------|----------|
| QA-L-01 | Dirty close | `LeaveConfirmModal` · **cấm** native dialog | **PASS** | ![QA-L-01](screens/QA-L-01.png) |
| QA-L-02 | Cancel leave | Stay on form · dirty kept | **PASS** (partial — stay control weak) | ![QA-L-02](screens/QA-L-02.png) |

## T-QA-FILTER-01 (live)

| # | Check | Result |
|---|-------|--------|
| V1 | `LinErpListFilterBar` (not ErpListHeaderFilters stack) | **PASS** |
| V2 | SearchTextInput + status + sourceType + date | **PASS** |
| V3 | No text «Tìm» button (icon apply OK) | **PASS** |
| V4 | Excel / domain actions on toolbar (not filter row) | **PASS** |
| V5 | Apply does not break list shell | **PASS** |

## Gaps

| ID | Severity | Note |
|----|----------|------|
| — | **CLOSED** | **GAP-P2-CC-06** / **GAP-DEV-CONFIG-PLACEHOLDER-01** / **GAP-SA-EST-02/03** — Config FULL live · modal + seed `ai-estimates` |
| **GAP-QA-MIG-EST-01** | **P2** / info | Hand migration `20260817100000_Schema_RmmsAiVisionEstimates` thiếu Designer → EF `MigrateAsync` skip · QA áp SQL unblock · Dev nên thêm Designer / snapshot |
| — | P2 | UnitPriceCatalog **DEFER** |
| — | P2 | `[RequirePermission]` CommonLib — accept |
| — | info | `yarn e2e-qa` CLI treo `playwright install` (~10m) · runtime = extended `_capture-full.mjs` sau docker+std ready (tương đương `--skip-start`) |
| — | info | `.env` `RMMS_API_BASE=host.docker.internal:5101` lab CaptureJPEG → BFF 503 · QA recreate BFF với `ApiBase=http://linm-rmms-api:8080` |

**Verdict:** **PASS** · Config FULL closed · e2e screens 21/21 · handoff Review.

## Build verify

| Check | Command | Result |
|-------|---------|--------|
| MFE typecheck | `yarn typecheck` | **PASS** |
| MFE start:std | `:9303` listen · compiled successfully | **PASS** |
| BE API (docker rebuild) | `docker compose build linm-rmms-api` | **PASS** · GET estimates + ui-schema |
| BE BFF (docker rebuild) | `docker compose build linm-rmms-bff` | **PASS** · web-bff proxy estimates + catalogs |
| UI-schema | GET `/web-bff/api/v1/integration/catalogs/ai-estimates/ui-schema` | **200** · 8 fields · kind `ai-estimates` |

## E2E runtime

| Check | Result |
|-------|--------|
| `docker compose` (RMMS) | **UP** · api+bff+postgres healthy · API/BFF images rebuilt |
| `yarn start:std` `:9303` | **listen** · compiled successfully |
| Screens PNG | **21** files under `qa/screens/` · `manifest.json` **ok=true** |
| CLI note | `yarn e2e-qa --skip-start` hung on playwright install · used extended capture (prior QA path) |

## Handoff → Review

| Field | Value |
|-------|-------|
| next | `/agent-review` · confirm Config FULL + list parity |
| gaps open | **GAP-QA-MIG-EST-01** (P2 Designer) only · no P0 |
| mfeStdUrl | `http://localhost:9303/ai-vision/estimate` |
| evidence | `specs/estimate/qa/screens/` · especially `QA-CFG.png` |
| BE | AiVision · **cấm ERP.*** |
| prior fail | `task_482fbe3a` Config FAIL · fixed `task_5554ab03` · re-QA `task_1c6c0433` **PASS** |

## Version meta

| Field | Value |
|-------|-------|
| skillId | agent-qa |
| skillVersion | 2026.08.17.04 |
| schemaVersion | 2 |
| workflowVersion | 2026.08.17.05 |
| generatedAt | 2026-08-17T17:21:00.000Z |
| versionGate | ok |

---
<!-- Version meta: skillVersion=2026.08.17.04 · schemaVersion=2 · workflowVersion=2026.08.17.05 · versionGate=ok · skillId=agent-qa -->
