# Implement — csdl-bieu-06

| Field | Value |
|-------|-------|
| feature | `csdl-bieu-06` |
| title | CSDL Biểu 06 — Hầm chui DS + hộp KT |
| this role | `dev` · `/agent-dev` |
| status | **done** |
| changeScope | `new_page` |
| packKind | `list` |
| resource | `underpasses` |
| formNo | `06` |
| columns | `19` |
| IdCode | `HC-yyyyMMdd-nnnn` |
| mfeStdRoute | `/csdl-bieu-06` |
| mfeStdUrl | `http://localhost:9301/csdl-bieu-06` |
| hub | `/so-ts/csdl-so-sach?resource=underpasses` |
| peerSoTs | `/so-ts?type=UNDERPASS` |
| taskId | `task_f79fea88` |
| prior · team_lead | `confirmed` · `task/csdl-bieu-06.md` |
| contentHashPrior | `sha256:ffc5c8381b04dcec3f0376df87187012f34b16bf211a3e3fb7311a8375a386f0` |
| skillVersion | `2026.08.25.01` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.08.31.2` |
| writtenAt | `2026-09-05T14:50:00.000Z` |

## Summary

Typed Biểu 06 catalog page: FE alias Kind B+D Slideout + BE `Schema_CsdlBieu6` (`rmms_csdl_bieu6`) joined on `api/v1/asset/csdl-records?resource=underpasses`. Point `kmPoint`→shell `KmFrom` · **không** ép `KmTo`. IdCode prefix `HC-`. BFF proxy-only. **Cấm** ERP.* / detail*-only SSOT.

## Builds

| Gate | Result |
|------|--------|
| MFE `yarn build` | **PASS** (webpack size warnings only) |
| BE `dotnet build` RMMS.Service.Api | **PASS** 0 warning / 0 error |
| E2E / `start:std` | **skipped** (queued `/agent-qa*`) |

## Tasks done

| id | Notes |
|----|-------|
| T-DM-01 | DOMAIN-MAP `csdl-bieu-06`→Asset |
| T-CTX-01 | context feature page sync |
| T-BE-01 | `CsdlBieu6Entity` + EF |
| T-BE-02 | Migration `20260905073931_Schema_CsdlBieu6` |
| T-BE-03 | DTO + service join/write · stop detail* for underpasses |
| T-BE-04 | IdCode `HC-` via ResourceMap |
| T-BE-05 | filters `roadCode` · `kmPoint` · `underpassKind` |
| T-BFF-01 | proxy QS + underpassKind comment |
| T-PERM-01 | reuse `asset.csdl-records.*` stub |
| T-BE-UISCHEMA-01 | catalogKind `underpasses` seed |
| T-UI-LIST/FILTER/CFG/FORM/LEAVE/ACT/LKP/FIELD/PROD/UX | `CsdlBieu06Page` |
| T-UI-RESP-01 | reuse list shell responsive |
| T-OUT-01 | XLS OUT (no block) |

## FE

- `src/pages/CsdlBieu06Page/` — list + FormSlideout 2col
- Routes: `index.tsx` · `devRoutes.ts` · `StandaloneMockTopbar.tsx`
- Models: `requestModel` / `responseModel` / `endpoint` / `csdlService` + `underpassKind`
- Grid: `buildDynamicGridColumns` + `LinCatalogUiSchemaEditorModal` · no dead `const columns`

## BE

- Entity `CsdlBieu6Entity` · table `rmms_csdl_bieu6`
- `CsdlBieu6Dtos` normalizers (kind/struct/load/pave/yes_no)
- `CsdlCatalogService` branch `IsUnderpasses`
- UiSchema registry + seed `underpasses`
- Migration `Schema_CsdlBieu6`

## APIs

| id | Method | Path |
|----|--------|------|
| API-01..05 | CRUD | `/api/v1/asset/csdl-records` (+ BFF) |
| API-LKP-01 | GET | `/api/v1/integration/road-routes/search` |

## Debt / DEFER

- Auth RequirePermission wire (T-PERM-01) · org SearchInput P2 · XLS OUT · History n/a P1
- Apply migration to DB env (ops) — migration file added

## Next

| Role | Need |
|------|------|
| **QA** | e2e queued `/agent-qa*` · scenarios |
| Review | after QA |
