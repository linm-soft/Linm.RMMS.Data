# handoff-compact — dev · csdl-bieu-01

| | |
|--|--|
| schemaVersion | `1` |
| role | `dev` |
| feature | `csdl-bieu-01` |
| title | CSDL Biểu 01 — Phân loại mặt đường |
| packKind | `list` |
| changeScope | `new_page` |
| status | `done` |
| taskId | `task_aefea7f3` |
| resource | `pavement-sections` |
| formNo | `01` |
| columns | `38` |
| IdCode | `MD-` |
| peerSoTs | `pavement-section` |
| formPattern | **Kind D Slideout** 2col |
| Kind | **B** A–D+F · **D** Slideout Z1–Z3 |
| mfeStdUrl | `http://localhost:9301/csdl-bieu-01` |
| hubDeepLink | `/so-ts/csdl-so-sach?resource=pavement-sections` |
| domain | **Asset** · `api/v1/asset/csdl-records` |
| entity | shell + `CsdlBieu1Entity` · `Schema_CsdlBieu1` |
| yarnBuild | **PASS** |
| dotnetBuild | **PASS** |
| e2eQa | `ON` (queued `/agent-qa*` only) |
| contentHashPrior | `sha256:3545960f4006740c9dfe57b5f004fa4a1cd1b7befbcd51e35e2168e16821b65e` |
| skillVersion | `2026.08.25.01` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.08.31.2` |
| writtenAt | `2026-09-05T12:45:00.000Z` |

## Decisions

- route_a `/csdl-bieu-01` + hub · typed 38 · **cấm** detail*-only
- four_buckets surfW* · one_enum structureType
- Schema_CsdlBieu1 + RoadCode shell · stop detail* write pavement-sections
- BFF proxy keep · **cấm ERP.***
- road-route SearchInput P1 · org/XLS OUT/DEFER
- peer Sổ TS deep-link only

## Artifacts

| Kind | Path |
|------|------|
| implement | `specs/csdl-bieu-01/implement/csdl-bieu-01.md` |
| FE | `Linm.Web.RMMS.Asset/src/pages/CsdlBieu01Page/` |
| BE migration | `…/Migrations/20260905052251_Schema_CsdlBieu1.cs` |
| STATUS | `specs/csdl-bieu-01/STATUS.md` |

## APIs (ids)

API-01..05 csdl-records · API-LKP-01 road-routes/search

## Screens / zones

- S-LIST · S-FORM-C/E/V/Copy · S-ACT-DELETE · S-HUB-ENTRY · S-PEER-SOTS
- mfeStdUrl=`http://localhost:9301/csdl-bieu-01`

## Debt

- Auth RequirePermission DEFER · migrate DB apply at deploy · UiSchema override clear if stale

## Next

| Role | Need |
|------|------|
| **QA** | e2e T-QA-* · CRUD/form/filter/route |
| Review | after QA |

## UNCLEAR

- none

## Cấm (compact)

ERP.* · e2e/start:std ở Dev · invent API · merge Sổ TS · detail*-only SSOT · Guid IdCode
