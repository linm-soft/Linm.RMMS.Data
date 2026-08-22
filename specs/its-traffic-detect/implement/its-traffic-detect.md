# Implement — its-traffic-detect

| Field | Value |
|-------|-------|
| feature | `its-traffic-detect` |
| status | `done` |
| changeScope | `edit_page` |
| packKind | `list` · featureClass `ai` (Kind B+D+F) |
| taskId | `task_432aea00` |
| role | `dev` · `/agent-dev` |
| updatedAt | `2026-08-21T05:55:00.000Z` |
| skillVersion | `2026.08.19.04` |
| schemaVersion | `4` |
| workflowVersion | `2026.08.20.01` |
| rulesVersion | `2026.08.20.8` |
| versionGate | `ok` · Autopilot `recheck_new` SSOT |
| contentHash (data-analy) | `sha256:E91426CE28303135A824CCDD5012AE64466FE2DB50A6C05FBC5F2A0E8F458526` |

## retry.ssot_rereview (Dev · live 2026-08-21 · trước/sau Write)

| # | Check | Result |
|---|-------|--------|
| 1 | 1× `LinPageLayout` — cấm nested `CatalogListShell` | **PASS** |
| 2 | `LinCatalogDataGrid` + `buildDynamicGridColumns` + kéo cột ON | **PASS** (removed leftover `LinCatalogDataColumn[]`) |
| 3 | Footer `LinCatalogListPagination` | **PASS** |
| 4 | Flex + `useServerPagedListLoading` + LAYOUT-06 | **PASS** |
| 5 | Toolbar catalog + config `fa-cog` → schema modal | **PASS** (`LinCatalogUiSchemaEditorModal`) |
| 6 | Filter Zone B: route SearchInput + class/source/status/engine + Date | **PASS** |
| 7 | Zone F Config FULL | **PASS** — **cấm** `configHint` |
| 8 | History stub | **PASS** |
| 9 | tree_master? | **n/a** |
| 10 | Form C/E/V/Copy + LeaveConfirm + Confirm/Dismiss | **PASS** · Confirm asset-type = SearchInput |
| 11 | Dropdowns init-data only · `sources[]` | **PASS** |
| 12 | Map overlay | **PASS** |
| 13 | No AI chrome header | **PASS** · titleIcon `fa-road` |
| 14 | List API `source`/`engine` | **PASS** |
| 15 | CatalogUiSchema kind `its-traffic-detect` | **PASS** |

**implement.list_parity.layout** = `flex-root + GAP-P2-LAYOUT-06 smoke`

## Gaps closed (P0)

| ID | Fix |
|----|-----|
| GAP-SA-ITS-FILTER-01 | GET `/objects` + FE query `source` · `engine` |
| GAP-SA-ITS-INIT-SOURCE-01 | init-data `Sources[]` (mobile/dashcam/cctv) |
| GAP-SA-ITS-UI-SCHEMA-01 | Registry + Seed kind `its-traffic-detect` |
| GAP-TL-CONFIG-01 | `useCatalogUiSchema` + `LinCatalogUiSchemaEditorModal` · removed `configHint` / leftover columns |
| GAP-TL-FILTER-01 | Zone B Dropdown source + engine |
| GAP-TL-LKP-CONFIRM-01 | Confirm `ASSET_TYPE_LOOKUP_CONFIG` SearchInput |

## FE (`Linm.Web.RMMS.AiVision`)

| Area | Path |
|------|------|
| Page | `src/pages/ItsTrafficDetectListPage/*` |
| Service | `src/services/itsTrafficDetect/*` (+ `source`/`engine` list params · `ASSET_TYPE_LOOKUP_CONFIG`) |
| Demo store | `src/demo/itsTrafficDetectStore.ts` (radius 10 m · filter source/engine) |
| Routes | `/its-traffic-detect` · `/ai-vision/its-traffic-detect` |
| Catalog kind | `its-traffic-detect` |

## BE (`Linm.RMMS.WebService` · AiVision)

| Area | Notes |
|------|-------|
| Entity | `AiVisionItsTrafficObjectEntity` → `rmms_ai_vision_its_traffic_objects` |
| Migration | `20260817160000_Schema_RmmsAiVisionItsTrafficObjects` — **EXISTS** (verify only · no recreate) |
| API | `api/v1/ai-vision/its/objects` (+ `source`/`engine`) · init-data `sources[]` · `/detect` |
| Catalog UI | `CatalogUiSchemaRegistry.ItsTrafficDetect` + Seed |
| BFF | `web-bff/api/v1/ai-vision/its/**` proxy Query forward |
| DOMAIN-MAP | `its-traffic-detect` → AiVision · **cấm ERP.*** |

## Tasks DoD

| Task | Status |
|------|--------|
| T-MIG-01 | **done** (verify exists) |
| T-BE-CRUD-01 | **done** (prior + verify) |
| T-BE-INIT-01 | **done** |
| T-BE-FILTER-01 | **done** |
| T-BE-AI-01 | **done** (prior stub) |
| T-BE-CONFIRM-ASSET | **done** (prior) |
| T-BE-UI-SCHEMA-01 | **done** |
| T-BFF-01 | **done** (query forward) |
| T-PERM-01 | **done** (FE perms prior) |
| T-UI-LIST-01 | **done** |
| T-UI-CONFIG-01 | **done** |
| T-UI-FORM-01 | **done** |
| T-UI-LKP-01 | **done** |
| T-UI-FIELD-01 | **done** |
| T-UI-PROD-01 | **done** |
| T-UI-UX-01 | **done** |
| T-UI-LEAVE-01 | **done** (prior LeaveConfirm) |
| T-UI-ACT-01 | **done** |
| T-UI-AI-01 | **done** (detect feed prior) |
| T-UI-AI-FORM-01 | **done** |
| T-UI-MAP-01 | **done** |

## Build

| Layer | Command | Result |
|-------|---------|--------|
| BE | `dotnet build Linm.RMMS.WebService.sln -c Release` | **PASS** 0 error 0 warning |
| MFE | `yarn build` @ AiVision | **PASS** exit 0 (size warnings only · no TS/webpack module errors) |

## Handoff → QA

| Field | Value |
|-------|-------|
| Next | `/agent-qa` · roleOnly · `qa/scenarios.md` |
| e2eQa | ON — yarn start:std + docker + yarn e2e-qa + screenshot |
| mfeStdUrl | `http://localhost:9303/its-traffic-detect` |
| autoApprove | ON — Review vẫn pending đến lượt |
| Cấm | class ổ gà · configHint · leftover columns · AI chrome · auto-create Asset |

## QA verdict

| Field | Value |
|-------|-------|
| taskId | `task_ef244cfe` |
| verdict | **PASS** |
| e2eQa | ON · S0 / S1 / QA-20 PNG · `qa/screens/` |
| method | e2e runtime · start:std `:9303` + docker API `:5101` / BFF `:5201` + Playwright |
| build | MFE `yarn build` PASS · BE `dotnet build` PASS |
| updatedAt | `2026-08-21T06:40:00.000Z` |
| Next | `/agent-review` · Review still pending |
