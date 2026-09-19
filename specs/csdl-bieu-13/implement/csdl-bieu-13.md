# Implement — csdl-bieu-13 (Dev · T-XLS-S13)

| Field | Value |
|-------|-------|
| feature | `csdl-bieu-13` |
| title | CSDL Biểu 13 — Xuất Excel (Wave 1 T-XLS-S13) |
| role | `dev` · `/agent-dev` · `/implement-export-import-excel` |
| status | **done** |
| changeScope | `edit_page` |
| packKind | `list` |
| resource | `noise-barriers` |
| formNo | `13` |
| IdCode | `TC-` |
| mfeStdUrl | `http://localhost:9301/so-ts/csdl-so-sach` |
| hub | `/so-ts/csdl-so-sach?resource=noise-barriers` |
| alias | `/csdl-bieu-13` |
| taskId | `task_71b8eb1b` |
| tlTaskId | `task_6af52a22` |
| priorTyped | `task_94fc7cdd` · **keep** |
| writtenAt | `2026-09-18T08:25:00.000Z` |
| contentHash | `sha256:800386bb8f86bfcc815b9c7d3a6dc246dc58b0a95b5132a317c5a094d0b4194f` |
| headerFingerprint | `sha256:31dbc83200b511c9d61333b1cdb94e2880778980a3b21970be414e926db29008` |

## Done (T-XLS-S13-*)

| Task | Result |
|------|--------|
| T-XLS-S13-BE-01 | `CsdlCatalogExcelService` branch `noise-barriers` · sheet **Biểu 13** · 13 cols · lengthM/heightM/areaM2 cùng hàng · filter-all · `Bieu13_TuongChongOn_{yyyyMMdd}.xls` · **cấm** streaming · migration none |
| T-XLS-S13-BFF-01 | reuse `CsdlCatalogRecordsBffController` GET `export` binary proxy (no new logic) |
| T-XLS-S13-FE-01 | `CsdlBieu13Page` catalogToolbar **Xuất Excel** · filter QS (search/province/status/side/road/km/date) · Import **ẩn** · **cấm** filter-bar export · **cấm** merge peer |
| T-XLS-S13-FE-02 | download filename fallback + empty/fail toast · **cấm** stub=done |
| T-XLS-S13-BE-02 | **OUT / DEFER P1** — POST import |

## Typed keep

- Schema_CsdlBieu13 · CRUD `csdl-records?resource=noise-barriers` · Kind B+D Slideout · hub NEW · alias — **unchanged**

## Verify

- MFE `yarn build` **PASS**
- BE `dotnet build` RMMS.Service.Api **PASS** · LINM.RMMS.Asset.Bff **PASS**
- E2E **not run** (queued `/agent-qa*` · T-XLS-S13-QA-01)

## APIs

- CRUD keep: `GET/POST/PUT/DELETE api/v1/asset/csdl-records?resource=noise-barriers`
- Export: `GET api/v1/asset/csdl-records/export?resource=noise-barriers` (+ filter QS · no page)
- BFF: `web-bff/api/v1/asset/csdl-records/export`
- FE BASE: `/asset/csdl-records`
- Import: POST …/import — **DEFER P1**

## Files touched

| Area | Path |
|------|------|
| BE | `api/.../CsdlCatalogExcelService.cs` — Bieu13 headers + export branch |
| FE | `src/pages/CsdlBieu13Page/CsdlBieu13Page.tsx` — handleExportExcel + toolbar |
| FE | `src/services/csdlSoSach/endpoint.ts` — filename `Bieu13_TuongChongOn_*.xls` |

## Debt / OUT

- Import P1 · Auth DEFER · GAP-QA-E2E-PW-01 · ORG P2 · peer so-ts-noise-barrier cite only
