# Implement — so-ts-culvert-x

| Field | Value |
|-------|-------|
| feature | `so-ts-culvert-x` |
| role | `dev` · `/agent-dev` |
| status | **done** |
| changeScope | `new_page` |
| packKind | `list` |
| typeCode | `CULVERT_X` |
| taskId | `task_c9bbebd3` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| be | `D:/AI-QLBD/Linm.RMMS.WebService` |
| mfeStdUrl | `http://localhost:9301/so-ts-culvert-x` |
| peerStdUrl | `http://localhost:9301/so-ts?type=CULVERT_X` |
| API | `api/v1/asset/road-assets` |
| migration | **none** P1 (dumpSpecs) |
| writtenAt | `2026-09-01T13:10:00.000Z` |
| contentHashPrior | `sha256:baf73523f54f4452cfe4c8eaef3f1a5cd333c56f48f44933027a34a417d49b1b` |

## new_page.ssot_rereview

**pass** — tl-grid-ssot · list_parity · filter-bar V1–V5 plan · form full 5col · S-LOC-POINT · LAYOUT-06 shell · LeaveConfirmModal · alias Navigate

## Shipped

| Task | Result |
|------|--------|
| T-CTX-01 | alias Navigate `/so-ts-culvert-x` · filter-bar.md · context lane web=dev |
| T-BE-CRUD-01 | prefix **CN-** · ValidateRequired POINT · name optional · ResolveCulvertXName · **cấm** seed |
| T-BE-INIT-01 | init-data `typeWork` · `culvertShapes` (+Hộp/Bản) · `materialBody` · `structures` |
| T-BFF-01 | proxy only (existing asset BFF) · no new endpoint |
| T-UI-LIST-01 | CULVERT_X profile · hide-empty width/material_body_id · list OFF name · ẩn type/kmTo/SL/ĐVT |
| T-UI-FILTER-01 | shared `LinErpListFilterBar` · type lock |
| T-UI-FORM-01 | S-ATTR editable · S-LOC-POINT · 5col · LOOKUP_STATIC |
| T-UI-LEAVE-01 | `useFormLeaveGuard` + LeaveConfirmModal (shared) |
| T-UI-CFG-01 | `LinCatalogUiSchemaEditorModal` · `buildDynamicGridColumns` |

## Build

| Gate | Result |
|------|--------|
| MFE `yarn build` | **PASS** (0 error · size warnings only) |
| BE `dotnet build` | **PASS** (0 Warning · 0 Error) |
| Step 4b / Schema_* | **n/a** — migration none P1 · BFF proxy existing |

## Debt

- GAP-CN-FLAT-01 flatten P2 · Auth DEFER · E2E `/agent-qa*` only · dump CSV 0 empty OK
