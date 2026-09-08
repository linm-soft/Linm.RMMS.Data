# Implement — csdl-bieu-10 (CSDL Biểu 10 — Kè, tường chắn)

| Field | Value |
|-------|-------|
| feature | `csdl-bieu-10` |
| role | `dev` · `/agent-dev` |
| status | **done** |
| changeScope | `new_page` |
| packKind | `list` |
| resource | `retaining-walls` |
| formNo | `10` |
| IdCode | `KE-yyyyMMdd-nnnn` |
| mfeStdUrl | `http://localhost:9301/csdl-bieu-10` |
| hub | `/so-ts/csdl-so-sach?resource=retaining-walls` → alias |
| peer | `/so-ts-retaining` toolbar deep-link · ≠ merge |
| taskId | `task_db0c0344` |
| contentHashPrior | `sha256:56715ebbcfffd0589eab296a31137e79a82b49c672dc14582fc554f4ed262346` |
| buildMfe | **PASS** (`yarn build`) |
| buildBe | **PASS** (`dotnet build`) |
| writtenAt | `2026-09-05T19:15:00.000Z` |

## Delta delivered

| Area | Done |
|------|------|
| Route alias | `/csdl-bieu-10` + hub redirect map |
| Form | Kind D Slideout 2col · 2 section tường + rãnh đỉnh · typed 21 |
| Persist | `CsdlBieu10Entity` · `rmms_csdl_bieu10` · `Schema_CsdlBieu10` |
| heightM↔WidthM | API `heightM` · DB `WidthM` · no BFF remap |
| wallKind | Gravity/Gabion/RC/Retaining · label_vn |
| crest | optional_flat 4 · **cấm** child |
| List | Kind B · filter wallKind/road/km/side · schema-config |
| Peer | toolbar Sổ TS retaining |
| DOMAIN-MAP | `csdl-bieu-10` → Asset |
| formNo | store `retaining-walls` = 10 (T-REN-01) |

## FE

- `Linm.Web.RMMS.Asset/src/pages/CsdlBieu10Page/*`
- Route `index.tsx` · `devRoutes` · StandaloneMockTopbar
- Hub alias `CsdlSoSachPage` `retaining-walls` → `/csdl-bieu-10`
- Models/endpoint `wallKind` + typed Biểu 10 fields

## BE

- Entity `CsdlBieu10Entity` · DbSet · nav on shell
- DTO `CsdlBieu10Dtos` + widen `CsdlCatalogDtos`
- `CsdlCatalogService` branch `retaining-walls` · filter `wallKind`
- Controller/BFF `wallKind` query · BFF proxy only
- UiSchema seed `retaining-walls`
- Migration `20260905184300_Schema_CsdlBieu10.cs` (+ snapshot)

## APIs

| Method | Path | Notes |
|--------|------|-------|
| GET/POST/PUT/DELETE | `/api/v1/asset/csdl-records` | `resource=retaining-walls` |
| GET | `…?wallKind=` | typed filter |
| GET | `/integration/road-routes/search` | road SearchInput |
| BFF | `/web-bff/api/v1/asset/csdl-records` | proxy · no height remap |

## Task matrix (Dev)

| id | status |
|----|--------|
| T-DM-01 · T-REN-01 · T-CTX-01 | done |
| T-BE-01..06 · T-BFF-01 · T-PERM-01 · T-BE-UISCHEMA-01 | done |
| T-UI-LIST/FILTER/CFG/FORM/LEAVE/ACT/LKP/FIELD/PROD/UX/RESP | done |
| T-OUT-01/02 | OUT stub / skip |
| T-QA-* | pending QA |

## Gates

tz_na · xco_get_only · share_tenant · list-form quality · filter-bar HARD · build PASS

## Debt

- Apply migration to DB (env) · Auth wire DEFER · org SearchInput P2 · XLS OUT · province master P2

## Next

QA e2e queued `/agent-qa*` only · **cấm** e2e @ Dev.
