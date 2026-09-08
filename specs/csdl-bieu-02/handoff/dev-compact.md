# handoff-compact — dev · csdl-bieu-02

| | |
|--|--|
| schemaVersion | `1` |
| role | `dev` |
| feature | `csdl-bieu-02` |
| title | CSDL Biểu 02 — Thống kê cầu |
| packKind | `list` |
| changeScope | `new_page` |
| status | `done` |
| taskId | `task_f8854c01` |
| resource | `bridges` |
| formNo | `02` |
| columns | `48` |
| IdCode | `BR-` |
| peerSoTs | none (—) · Sổ 6 / passport deep-link only |
| formPattern | **Kind D Slideout** 2col sectioned · **cấm** Full-page |
| Kind | **B** A–D+F · **D** Slideout Z1–Z3 |
| domain | **Asset** · `api/v1/asset/csdl-records` |
| entity | shell + `CsdlBieu2Entity` · `Schema_CsdlBieu2` |
| mfeStdUrl | `http://localhost:9301/csdl-bieu-02` |
| hub | `/so-ts/csdl-so-sach?resource=bridges` |
| yarnBuild | **PASS** |
| dotnetBuild | **PASS** |
| e2eQa | `ON` (queued `/agent-qa*` only · **not** run here) |
| contentHashPrior | `sha256:bd73974e607f886dd38736015cb5a6a3fb82aff9d6a63328963ceb5c4be436a2` |
| skillVersion | `2026.08.25.01` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.08.31.2` |
| writtenAt | `2026-09-05T15:25:00.000Z` |

## Decisions

- route_a `/csdl-bieu-02` + hub · typed 48 · GPS six_numbers · LOAD text · LEGACY keep_hidden
- Persist `rmms_csdl_bieu2` · migration `20260905082011_Schema_CsdlBieu2`
- Filters: search/province/status/roadCode/kmFrom/kmTo/beamType
- UiSchema catalogKind `bridges` · buildDynamicGridColumns · no detail* SSOT
- BFF proxy · **cấm** ERP.* · peer deep-link only

## Artifacts

| Kind | Path |
|------|------|
| implement | `specs/csdl-bieu-02/implement/csdl-bieu-02.md` |
| FE | `Linm.Web.RMMS.Asset/src/pages/CsdlBieu02Page/` |
| BE entity | `…/Entities/CsdlBieu2Entity.cs` |
| migration | `…/Migrations/20260905082011_Schema_CsdlBieu2.cs` |
| STATUS | `specs/csdl-bieu-02/STATUS.md` |

## APIs

- CRUD `…/asset/csdl-records?resource=bridges`
- LKP road-route · org DEFER P2

## Debt

- Auth wire DEFER · org P2 · XLS OUT · DB migrate apply (ops)

## Screens / zones (ids only)

- S-LIST · S-FORM-C/E/V/Copy · S-ACT-DELETE · S-HUB-ENTRY · S-PEER-SO6 · S-SKIP-MAP

## Next

| Role | Need |
|------|------|
| **QA** | scenarios + e2e `/agent-qa*` |
| Review | after QA |

## UNCLEAR

- none

## Cấm (compact)

ERP.* · e2e/start:std ở Dev · invent API · detail* only · Guid IdCode · merge passport/Sổ 6 · parent *Json · start role khác
