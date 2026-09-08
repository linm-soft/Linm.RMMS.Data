# Implement — csdl-bieu-02

| Field | Value |
|-------|-------|
| feature | `csdl-bieu-02` |
| title | CSDL Biểu 02 — Thống kê cầu |
| this role | `dev` · `/agent-dev` |
| status | **done** |
| changeScope | `new_page` |
| packKind | `list` |
| resource | `bridges` |
| formNo | `02` |
| columns | `48` |
| IdCode | `BR-yyyyMMdd-nnnn` |
| mfeStdRoute | `/csdl-bieu-02` |
| mfeStdUrl | `http://localhost:9301/csdl-bieu-02` |
| hub | `/so-ts/csdl-so-sach?resource=bridges` |
| peerSoTs | `/so-ts?type=BRIDGE` · Sổ 6 deep-link only |
| taskId | `task_f8854c01` |
| prior · team_lead | `confirmed` · `task/csdl-bieu-02.md` · `task_361a0ea2` |
| contentHashPrior | `sha256:bd73974e607f886dd38736015cb5a6a3fb82aff9d6a63328963ceb5c4be436a2` |
| skillVersion | `2026.08.25.01` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.08.31.2` |
| writtenAt | `2026-09-05T15:25:00.000Z` |

## Summary

Typed Biểu 02 catalog page: FE alias Kind B+D Slideout sectioned (GPS/dầm/phần dưới/tải+gối/lan can) + BE `Schema_CsdlBieu2` (`rmms_csdl_bieu2`) joined on `api/v1/asset/csdl-records?resource=bridges`. Shell kmFrom/kmTo · IdCode `BR-`. Q-GPS six_numbers · Q-LOAD text · Q-LEGACY keep_hidden. BFF proxy-only. **Cấm** ERP.* / detail*-only SSOT / passport CRUD.

## Builds

| Gate | Result |
|------|--------|
| MFE `yarn build` | **PASS** (webpack size warnings only) |
| BE `dotnet build` RMMS.Service.Api | **PASS** 0 warning / 0 error |
| E2E / `start:std` | **skipped** (queued `/agent-qa*`) |

## Tasks done

| id | Notes |
|----|-------|
| T-DM-01 | DOMAIN-MAP `csdl-bieu-02`→Asset |
| T-CTX-01 | context feature page sync |
| T-BE-01 | `CsdlBieu2Entity` + EF |
| T-BE-02 | Migration `20260905082011_Schema_CsdlBieu2` |
| T-BE-03 | DTO + service join/write · stop detail* for bridges |
| T-BE-04 | IdCode `BR-` via ResourceMap |
| T-BE-05 | filters `roadCode` · kmFrom/kmTo · `beamType` |
| T-BFF-01 | proxy QS (beamType forwarded) |
| T-PERM-01 | reuse `asset.csdl-records.*` stub |
| T-BE-UISCHEMA-01 | catalogKind `bridges` seed |
| T-UI-LIST/FILTER/CFG/FORM/LEAVE/ACT/LKP/FIELD/PROD/UX | `CsdlBieu02Page` |
| T-UI-RESP-01 | reuse list shell responsive |
| T-OUT-01 | XLS OUT (no block) |

## FE

- `src/pages/CsdlBieu02Page/` — list + FormSlideout 2col sectioned
- Routes: `index.tsx` · `devRoutes.ts` · `StandaloneMockTopbar.tsx`
- Models: `requestModel` / `responseModel` / `endpoint` / `csdlService` + `beamType`
- Grid: `buildDynamicGridColumns` + `LinCatalogUiSchemaEditorModal` · no dead `const columns`

## BE

- Entity `CsdlBieu2Entity` · table `rmms_csdl_bieu2`
- `CsdlBieu2Dtos` normalizers (beamType / conditions)
- `CsdlCatalogService` branch `IsBridges`
- UiSchema registry + seed `bridges`
- Migration `Schema_CsdlBieu2`

## APIs

| id | Method | Path |
|----|--------|------|
| API-01..05 | CRUD | `/api/v1/asset/csdl-records` (+ BFF) |
| API-LKP-01 | GET | `/api/v1/integration/road-routes/search` |

## Debt / DEFER

- Auth wire DEFER · org SearchInput P2 · XLS OUT · DB migrate apply (ops) · History n/a P1
