# Implement — rpt-giay-phep-thi-cong (Dev)

| Field | Value |
|-------|-------|
| feature | `rpt-giay-phep-thi-cong` |
| this role | `dev` · `/agent-dev` |
| status | `done` |
| taskId | `task_797ce368` |
| changeScope | `edit_page` |
| packKind | **report** (Kind E) |
| autoApprove | **ON** |
| skillVersion | `2026.08.15.5` |
| schemaVersion | `1` |
| workflowVersion | `2026.08.15.5` |
| rulesVersion | `2026.08.15.8` |
| versionGate | `keep_current` |
| updatedAt | `2026-08-16T04:50:00.000Z` |

## retry.ssot_rereview (HARD · trước Write · live MFE + BE)

| # | Check | Live trước Write | After Dev |
|---|---------|------------------|-----------|
| 1 | 1× `LinPageLayout` kind=`report` · cấm nested CatalogListShell | PASS | **PASS** |
| 2 | `LinCatalogDataGrid` kéo cột `resizable: true` | PASS | **PASS** |
| 3 | Footer `LinCatalogListPagination` luôn · 50/100/200/500 | PASS | **PASS** |
| 4 | flex + skeleton `skeletonRows={8}` | PASS | **PASS** |
| 5 | reportToolbar + Config FULL · cấm `LinListTableConfigModal` / `configHint` | analog PASS · GAP seed ẩn contractor/issuer | **PASS** seed `visible: false` + Config checkbox «Hiện» |
| 6 | `LinErpListFilterBar` SearchInput · cấm native select | PASS | **PASS** |
| 7 | Form OUT · cấm Resource/Slideout/View=readOnly | PASS | **PASS** |
| 8 | Excel `canExport=viewed` · `CSV_COL_BY_GRID` contractor/issuer/extendedAt | GAP map + BE header | **PASS** |
| 9 | Query FE `status`/`q` · BE coalesce | PASS | **PASS** · không regress alias |
| 10 | Drill `kind=construction-permits` | GAP `?id=` thiếu kind | **PASS** |
| 11 | Grid ngày `vi-VN` · Hiệu lực + `ExtendedAt` | GAP GH | **PASS** `IssuedAt → ExpiresAt · GH {ExtendedAt}` |
| 12 | Tuyến CUC2 · cấm QL.22 | PASS | **PASS** |
| 13 | `FilterRoute` exact | GAP StartsWith `QL.1` | **PASS** exact case-insensitive · shared helper |
| 14 | Kind E · cấm `LinCatalogUiSchemaEditorModal` / `buildDynamicGridColumns` | OK | **PASS** giữ `const columns` |

**Cấm** chỉ patch 1 GAP: đã sửa cùng surface FilterRoute · drill · cột ẩn · ExtendedAt · CSV.

## FE

- `ConstructionPermitReportPage` · route `/bao-cao/giay-phep-thi-cong` · FE BASE `/report`.
- Cột `contractor` (Nhà thầu) · `issuer` (Cơ quan cấp) default **ẩn**; Config FULL bật «Hiện».
- Drill top window `/csdl-so-sach?kind=construction-permits&id={permitId}`.
- `CSV_COL_BY_GRID`: `contractor`/`issuer` · `validity` → `issuedAt`,`expiresAt`,`extendedAt`.
- `seedColumnPrefs` tôn trọng `visible?: boolean` trên seed.

## BE

- `GET api/v1/report/construction-permits` + `/export` · BFF proxy unchanged (QS passthrough).
- `FilterRoute`: exact `Route` vs `routeId` · empty/`all` = all · **cấm** StartsWith `QL.1`.
- CSV UTF-8 BOM header: `permitNo,day,route,stationKm,investor,workName,contractor,issuer,extendedAt,issuedAt,expiresAt,status,permitId` · `status` = StatusLabel VN.
- In-memory 12 · **không** migration · **không** ERP.* · **không** path mới.

## T-* DoD

| id | Result |
|----|--------|
| T-BE-01 | **done** FilterRoute exact |
| T-BE-02 | **done** CSV extra cols |
| T-BFF-01 | **keep** proxy |
| T-UI-LIST-01 | **done** cột ẩn |
| T-UI-ACT-01 | **done** drill + CSV map |
| T-UI-FIELD-01 | **done** ExtendedAt |
| T-UI-FORM-01 | **OUT** |
| T-QA-01 / T-RV-01 | **pending** (roleOnly=dev) |

## Build

| Gate | Result |
|------|--------|
| MFE `yarn build` | **PASS** (webpack 5.109.2 · 3 size warnings) |
| MFE `yarn typecheck` | **PASS** (`tsc --noEmit`) |
| BE `dotnet build` API isolated | **PASS** (`-o .build-verify-gptc` · 0 warning) |
| BE `dotnet build` BFF Report isolated | **PASS** |

<!-- Version meta: skillVersion=2026.08.15.5 · schemaVersion=1 · workflowVersion=2026.08.15.5 · rulesVersion=2026.08.15.8 · versionGate=keep_current -->
