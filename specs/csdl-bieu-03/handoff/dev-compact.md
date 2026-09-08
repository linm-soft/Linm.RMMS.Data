# handoff-compact — dev · csdl-bieu-03

| | |
|--|--|
| schemaVersion | `1` |
| role | `dev` |
| feature | `csdl-bieu-03` |
| title | CSDL Biểu 03 — Hầm đường bộ |
| packKind | `list` |
| changeScope | `new_page` |
| status | `done` |
| taskId | `task_8650b573` |
| resource | `road-tunnels` |
| formNo | `03` |
| columns | `42` |
| IdCode | `TN-` |
| formPattern | **Kind D Slideout** 2col sectioned |
| Kind | **B** A–D+F · **D** Slideout Z1–Z3 |
| mfeStdUrl | `http://localhost:9301/csdl-bieu-03` |
| mfeStdRoute | `/csdl-bieu-03` |
| hubDeepLink | `/so-ts/csdl-so-sach?resource=road-tunnels` |
| domain | **Asset** · `api/v1/asset/csdl-records` |
| entity | shell + `CsdlBieu3Entity` · `Schema_CsdlBieu3` |
| yarnBuild | **PASS** |
| dotnetBuild | **PASS** |
| e2eQa | `ON` (queued `/agent-qa*` only — **cấm** e2e ở Dev) |
| contentHashPrior | `sha256:2c03537918bbda56c29e1e1ef98cc081cc4e72c94447a1ac2f87f06bd6f9310e` |
| skillVersion | `2026.08.25.01` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.08.31.2` |
| writtenAt | `2026-09-05T09:20:00.000Z` |

## Decisions

- Typed 42 cột · GPS six_numbers · TUBE two_rows · VENT text · sectioned · alias `/csdl-bieu-03`
- List FULL UiSchema + `buildDynamicGridColumns` · **cấm** `const columns`/`configHint`
- Persist shell + Schema_CsdlBieu3 · stop detail* write road-tunnels · **cấm** ERP.*
- DOMAIN-MAP `csdl-bieu-03`→Asset · BFF proxy ok

## APIs

| ID | Method | Path |
|----|--------|------|
| API-01..05 | GET/POST/PUT/DELETE | `/api/v1/asset/csdl-records` (+ `?resource=road-tunnels`) |
| API-LKP-01 | GET | `/api/v1/integration/road-routes/search` |
| BFF | proxy | `/web-bff/api/v1/asset/csdl-records` |

## Artifacts

| Kind | Path |
|------|------|
| implement | `specs/csdl-bieu-03/implement/csdl-bieu-03.md` |
| FE | `Linm.Web.RMMS.Asset/src/pages/CsdlBieu03Page/` |
| BE entity | `…/Entities/CsdlBieu3Entity.cs` |
| migration | `…/Migrations/20260905085812_Schema_CsdlBieu3.cs` |
| STATUS | `specs/csdl-bieu-03/STATUS.md` |

## Debt

- ef database update Schema_CsdlBieu3 (deploy)
- legacy detail* backfill optional · org SearchInput P2 · XLS OUT · Auth wire DEFER

## Next

| Role | Need |
|------|------|
| **QA** | T-QA-* · e2e `/agent-qa*` · mfeStdUrl |
| Review | after QA |

## UNCLEAR

- none

## Cấm (compact)

ERP.* · e2e/start:std ở Dev · invent API · detail* only · Guid IdCode · merge Sổ 6 · 1 row 2 GPS · start role khác
