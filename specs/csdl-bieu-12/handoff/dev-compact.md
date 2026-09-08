# handoff-compact — dev · csdl-bieu-12

| | |
|--|--|
| schemaVersion | `1` |
| role | `dev` |
| feature | `csdl-bieu-12` |
| title | CSDL Biểu 12 — Cây xanh, thảm cỏ |
| packKind | `list` |
| changeScope | `new_page` |
| status | `done` |
| taskId | `task_b5ce8177` |
| resource | `green-assets` |
| formNo | `12` |
| columns | `15` · **2 section** khóm + thảm cỏ |
| IdCode | `CX-` |
| peerSoTs | — (**cấm** invent so-ts-green) |
| formPattern | **Kind D Slideout** 2col · 2 section |
| Kind | **B** list + **D** Slideout |
| mfeStdUrl | `http://localhost:9301/csdl-bieu-12` |
| hub | `/so-ts/csdl-so-sach?resource=green-assets` |
| domain | **Asset** · `api/v1/asset/csdl-records` |
| entity | shell + `CsdlBieu12Entity` · `Schema_CsdlBieu12` |
| yarnBuild | **PASS** |
| dotnetBuild | **PASS** |
| e2eQa | `ON` (queued `/agent-qa*` only) |
| contentHashPrior | `sha256:6da498be3a84192c6f3e3c30a7e8032bf2753359591a9aabd3ad36d809f4c457` |
| headerFingerprintPrior | `sha256:54aef0c755530d138ecefa7a303b22c78c32ca1b6ae3555d5bb33492799b5af9` |
| skillVersion | `2026.08.25.01` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.08.31.2` |
| writtenAt | `2026-09-05T14:05:00.000Z` |

## Decisions locked

- route_a `/csdl-bieu-12` · typed 15 · keep_other · allow_either · side_only L/R/C/Both · Q-LIST-COLS subset
- API giữ `asset/csdl-records` · BFF proxy · **cấm ERP.***
- List: `buildDynamicGridColumns` + UiSchemaEditor · **cấm** leftover `const columns`
- **no peer** toolbar

## Artifacts

| Kind | Path |
|------|------|
| implement | `specs/csdl-bieu-12/implement/csdl-bieu-12.md` |
| FE page | `Linm.Web.RMMS.Asset/src/pages/CsdlBieu12Page/` |
| BE entity | `…/Entities/CsdlBieu12Entity.cs` |
| migration | `…/Migrations/20260905134500_Schema_CsdlBieu12.cs` |
| STATUS | `specs/csdl-bieu-12/STATUS.md` |

## APIs (ids)

- CRUD `…/asset/csdl-records?resource=green-assets`
- LKP road-route · UiSchema `green-assets`
- filter side (shell)

## Debt

- DB migrate apply · Auth wire DEFER · org SearchInput P2 · XLS OUT

## Screens

- S-LIST · S-FORM-C/E/V/Copy · S-ACT-DELETE · S-HUB-ENTRY · S-SKIP-PEER · S-SKIP-MAP

## Next

| Role | Need |
|------|------|
| **QA** | e2e `/agent-qa*` · scenarios · mfeStdUrl |
| Review | after QA |

## UNCLEAR

- none

## Cấm (compact)

ERP.* · invent API · detail* only · Guid IdCode · invent so-ts-green · e2e/start:std @ Dev · start role khác
