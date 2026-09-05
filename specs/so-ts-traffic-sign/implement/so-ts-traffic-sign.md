# Implement — so-ts-traffic-sign

| Field | Value |
|-------|-------|
| feature | `so-ts-traffic-sign` |
| role | `dev` · `/agent-dev` |
| status | **done** |
| changeScope | `new_page` |
| packKind | `list` |
| typeCode | `TRAFFIC_SIGN` |
| taskId | `task_3fdbc375` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| be | `D:/AI-QLBD/Linm.RMMS.WebService` |
| mfeStdRoute | `/so-ts?type=TRAFFIC_SIGN` |
| mfeStdUrl | `http://localhost:9301/so-ts?type=TRAFFIC_SIGN` |
| peerStdUrl | `http://localhost:9301/so-ts?type=TRAFFIC_SIGN` |
| alias | `/so-ts-traffic-sign` → Navigate live |
| API | `api/v1/asset/road-assets` |
| migration | **none** P1 (dumpSpecs) |
| writtenAt | `2026-09-01T14:20:00.000Z` |
| contentHashPrior | `sha256:36d61492d82e2fbb37adf4b9935116f9ce71e357e336150de46e95049566de88` |

## new_page.ssot_rereview

**pass** — tl-grid-ssot · list_parity · filter-bar V1–V5 · form full 5col · S-LOC-POINT · LAYOUT-06 · LeaveConfirmModal · alias Navigate · LOOKUP materialsSign/shapesSign

## Shipped

| Task | Result |
|------|--------|
| T-CTX-01 | alias Navigate · filter-bar.md · context web=dev |
| T-BE-CRUD-01 | prefix **BB-** · ValidateRequired POINT · name←sign_code_number · ResolveTrafficSignName |
| T-BE-INIT-01 | init-data `materialsSign[]` · `shapesSign[]` |
| T-BFF-01 | proxy only · no Step 4b |
| T-UI-LIST-01 | TRAFFIC_SIGN profile · dump biển cols · hide type/kmTo/qty/unit |
| T-UI-FILTER-01 | LinErpListFilterBar · type lock |
| T-UI-FORM-01 | S-ATTR editable · ẩn kmTo · SearchInput QCVN · **cấm** PoleCount |
| T-UI-LEAVE-01 | LeaveConfirmModal shared |
| T-UI-HIST-01 | LinCatalogHistoryModal shared |
| T-UI-CFG-01 | LinCatalogUiSchemaEditorModal · buildDynamicGridColumns |

## Build

| Gate | Result |
|------|--------|
| MFE `yarn build` | **PASS** (size warnings only) |
| BE `dotnet build` | **PASS** (0 Warning · 0 Error) |
| Step 4b / Schema_* | **n/a** — migration none P1 |

## Debt

- GAP-SIGN-FLAT-01 flatten P2 · Auth DEFER · E2E `/agent-qa*` only
