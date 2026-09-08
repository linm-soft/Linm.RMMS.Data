# Implement — csdl-bieu-13 (Dev)

| Field | Value |
|-------|-------|
| feature | `csdl-bieu-13` |
| title | CSDL Biểu 13 — Tường chống ồn |
| role | `dev` · `/agent-dev` |
| status | **done** |
| changeScope | `new_page` |
| packKind | `list` |
| resource | `noise-barriers` |
| formNo | `13` |
| IdCode | `TC-` |
| mfeStdUrl | `http://localhost:9301/csdl-bieu-13` |
| hub | `/so-ts/csdl-so-sach?resource=noise-barriers` |
| taskId | `task_94fc7cdd` |
| writtenAt | `2026-09-05T14:30:00.000Z` |
| contentHashPrior | `sha256:39a45de0a9b834c65373e6c20d1664ab43144ff60d97bae4f0d886ad09d91e3a` |

## Done (T-*)

| Task | Result |
|------|--------|
| T-DM-01 | DOMAIN-MAP `csdl-bieu-13`→Asset |
| T-BE-01/02 | `CsdlBieu13Entity` · `rmms_csdl_bieu13` · Migration `Schema_CsdlBieu13` |
| T-BE-03..06 | `CsdlCatalogService` branch `noise-barriers` · dim≥0 · reject all-zero · IdCode `TC-` · soft-delete reuse · UiSchema seed |
| T-BFF-01 | proxy only (reuse `asset/csdl-records`) |
| T-UI-LIST/FILTER/CFG/FORM/LEAVE/ACT/LKP/FIELD/PROD/UX | `CsdlBieu13Page` Kind B + Slideout Kind D · hub NEW card · alias `/csdl-bieu-13` |

## Verify

- MFE `yarn build` **PASS** (size warnings only)
- BE `dotnet build` RMMS.Service.Api **PASS** 0 err
- E2E **not run** (queued `/agent-qa*`)

## APIs

- `GET/POST/PUT/DELETE` `api/v1/asset/csdl-records?resource=noise-barriers`
- LKP `api/v1/integration/road-routes/search`
- UiSchema catalogKind `noise-barriers`

## Debt / OUT

- org-unit SearchInput P2 · XLS OUT · peer so-ts-noise-barrier merge none_p1 · Auth wire DEFER
