# Implement — csdl-so-01 (Dev)

| Field | Value |
|-------|-------|
| feature | `csdl-so-01` |
| title | CSDL Sổ 01 — Nhật ký tuần kiểm |
| role | `dev` · `/agent-dev` |
| status | **done** |
| changeScope | `new_page` |
| packKind | `list` |
| resource | `inspection-logs` |
| formNo | `01` |
| IdCode | `SO-yyyyMMdd-nnnn` |
| taskId | `task_2b9f40d3` |
| mfeStdUrl | `http://localhost:9301/csdl-so-01` |
| hubDeepLink | `/so-ts/csdl-so-sach?resource=inspection-logs` |
| contentHashPrior | `sha256:9b7c5f11adaed6b64404b77225fbdc0a6a4021b39d7a00dc1922c643aff822d3` |
| headerFingerprintPrior | `sha256:4e2c2ee770e209ccf28234cb47c2d32098a6b6f9efb8cc5817b9c8964e64a4da` |
| skillVersion | `2026.08.25.01` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.08.31.2` |
| writtenAt | `2026-09-06T01:25:00.000Z` |
| autoApprove | ON |
| e2eQa | ON (queued `/agent-qa*` only) |

## Summary

Typed Sổ 01 alias page + BE `Schema_CsdlSo01` + widen book entries. API giữ `api/v1/asset/csdl-records?resource=inspection-logs`. Peer pattern = `csdl-so-02`.

## FE (MFE `Linm.Web.RMMS.Asset`)

| Path | Note |
|------|------|
| `src/pages/CsdlSo01Page/*` | Kind B list + Kind D Slideout · entries inline typed |
| `src/index.tsx` | route `/csdl-so-01` |
| `src/dev/devRoutes.ts` · `StandaloneMockTopbar.tsx` | nav/title |
| `src/pages/CsdlSoSachPage/CsdlSoSachPage.tsx` | hub alias `inspection-logs` → `/csdl-so-01` |
| `src/services/csdlSoSach/requestModel.ts` · `responseModel.ts` | `inspector` + entry typed fields |
| `src/demo/csdlSoSachStore.ts` | formNo/title Sổ 01 |

Gates: `buildDynamicGridColumns` + `LinCatalogUiSchemaEditorModal` · filter-bar HARD · LeaveConfirm · History reuse · road-route SearchInput · **cấm** `const columns` / `configHint`.

## BE (`Linm.RMMS.WebService` · Asset)

| Path | Note |
|------|------|
| `Entities/CsdlSo01Entity.cs` | Inspector · PeriodStart/End |
| `Entities/CsdlBookEntryEntity.cs` | InspectDate…PostRepairMediaIds widen |
| `Migrations/20260906010000_Schema_CsdlSo01.cs` | table `rmms_csdl_so01` + entry cols |
| `CsdlCatalogDtos.cs` | Inspector + entry DTO |
| `CsdlCatalogService.cs` | CRUD/list period TZ · validation media |
| `CatalogUiSchemaRegistry/Seed` | `inspection-logs` typed schema |
| `docs/DOMAIN-MAP.md` | `csdl-so-01` → Asset |
| BFF | proxy only (existing `csdl-records`) |

## Verify

| Check | Result |
|-------|--------|
| MFE `yarn build` | **PASS** (size warnings only) |
| BE `dotnet build` RMMS.Service.Api | **PASS** 0 err / 0 warn |
| E2E / `start:std` | **skipped** (role Dev · queued QA) |
| Migration apply | **not run** (artifact ready · apply on deploy/4b runtime) |

## Task matrix

T-DM-01 · T-CTX-01 · T-BE-01..06 · T-BFF-01 · T-PERM-01 · T-BE-UISCHEMA-01 · T-UI-* → **done** · T-OUT-01 OUT · T-QA-* pending

## Debt

- `postRepairMediaIds` UI = comma-separated text (parity So02 `mediaIds`) — FileMulti upload polish → QA/P2
- Auth wire `asset.csdl-records.*` DEFER (reuse stub)
- Org SearchInput / XLS OUT P2
- `AppDbContextModelSnapshot` not regenerated (manual migration pattern = So02)

## Next

| Role | Need |
|------|------|
| QA | e2e `/agent-qa*` · mfeStdUrl |
| Review | after QA |
