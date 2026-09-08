# handoff-compact — dev · csdl-bieu-04

| | |
|--|--|
| schemaVersion | `1` |
| role | `dev` |
| feature | `csdl-bieu-04` |
| title | CSDL Biểu 04 — Cống các loại |
| packKind | `list` |
| changeScope | `new_page` |
| status | `done` |
| taskId | `task_cd72c67e` |
| resource | `culverts` |
| formNo | `04` |
| columns | `17` |
| IdCode | `CG-` |
| peerSoTs | `so-ts-culvert-x` |
| formPattern | **Kind D Slideout** 2col |
| Kind | **B** A–D+F · **D** Slideout Z1–Z3 |
| mfeStdUrl | `http://localhost:9301/csdl-bieu-04` |
| hubDeepLink | `/so-ts/csdl-so-sach?resource=culverts` |
| domain | **Asset** · `api/v1/asset/csdl-records` |
| entity | shell + `CsdlBieu4Entity` · `Schema_CsdlBieu4` |
| yarnBuild | **PASS** |
| dotnetBuild | **PASS** |
| e2eQa | `ON` (queued `/agent-qa*` only) |
| contentHashPrior | `sha256:7498ad6644d0e599bc40afb7589db5335c18adb4b92f1573de3c1fae2e17d3d6` |
| skillVersion | `2026.08.25.01` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.08.31.2` |
| writtenAt | `2026-09-05T06:30:00.000Z` |

## Decisions

- route_a `/csdl-bieu-04` + hub · typed 17 · **cấm** detail*-only
- four_xy gpsCulvert*/gpsRoad* · shape hộp/tròn · loadClass free_text
- Schema_CsdlBieu4 · IdCode `CG` · stop detail* write culverts
- BFF proxy keep · **cấm ERP.***
- road-route SearchInput P1 · org/XLS OUT/DEFER
- peer Sổ TS deep-link only

## Artifacts

| Kind | Path |
|------|------|
| implement | `specs/csdl-bieu-04/implement/csdl-bieu-04.md` |
| FE | `Linm.Web.RMMS.Asset/src/pages/CsdlBieu04Page/` |
| BE migration | `…/Migrations/20260905061652_Schema_CsdlBieu4.cs` |
| STATUS | `specs/csdl-bieu-04/STATUS.md` |

## APIs (ids)

API-01..05 csdl-records · API-LKP-01 road-routes/search

## Screens / zones

- S-LIST · S-FORM-C/E/V/Copy · S-ACT-DELETE · S-HUB-ENTRY · S-PEER-SOTS
- mfeStdUrl=`http://localhost:9301/csdl-bieu-04`

## Debt

- Auth RequirePermission DEFER · migrate DB apply at deploy · manageUnit org P2 · UiSchema override clear if stale

## Next

| Role | Need |
|------|------|
| **QA** | e2e T-QA-* · CRUD/form/filter/route |
| Review | after QA |

## UNCLEAR

- none

## Cấm (compact)

ERP.* · e2e/start:std ở Dev · invent API · merge Sổ TS · detail*-only SSOT · Guid IdCode
