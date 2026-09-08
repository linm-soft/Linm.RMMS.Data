# handoff-compact — dev · csdl-bieu-16

| | |
|--|--|
| schemaVersion | `1` |
| role | `dev` |
| feature | `csdl-bieu-16` |
| title | CSDL Biểu 16 — Nút giao |
| packKind | `list` |
| changeScope | `new_page` |
| status | `done` |
| taskId | `task_71eac21e` |
| resource | `interchanges` |
| formNo | `16` |
| columns | `39` · header + child branches[] + ATGT |
| IdCode | `IX-` |
| peerSoTs | `so-ts-interchange` · cite only · none_p1 |
| child | `branches[]` embed · min_1 · replace-all |
| formPattern | Kind D Slideout 2col · 5 section + BRANCH |
| Kind | B A–D+F · D Slideout |
| mfeStdUrl | `http://localhost:9301/csdl-bieu-16` |
| hub | `/so-ts/csdl-so-sach?resource=interchanges` |
| domain | Asset · `api/v1/asset/csdl-records` |
| entity | shell + `CsdlBieu16Entity` + Branch · `Schema_CsdlBieu16` |
| yarnBuild | **PASS** |
| dotnetBuild | **PASS** |
| e2eQa | ON · queued `/agent-qa*` only |
| contentHashPrior | `sha256:56e2fb16e9bcde21f17d7e9639b72660666778f5393b1270cecc49d123beba4b` |
| headerFingerprintPrior | `sha256:ec787bf2008ae89f1b6c085fe238f1b0d50b048f5c672b90b68d9ea102cf8fcc` |
| skillVersion | `2026.08.25.01` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.08.31.2` |
| writtenAt | `2026-09-05T17:45:00.000Z` |

## Decisions

- route_a `/csdl-bieu-16` + hub NEW card formNo 16
- typed Schema_CsdlBieu16 1:1 + Branch 1–n · **cấm** detail* / parent *Json / flatten-only / ERP.*
- interchangeType cite_excel · trafficOrg lookup · ATGT qty · kmMain point_main
- list subset: code/name/road*/province/kmMain/interchangeType/status/branchCount
- UiSchema catalogKind `interchanges` · buildDynamicGridColumns · Zone F full
- BFF proxy unchanged · migration `20260905230000_Schema_CsdlBieu16`

## Artifacts

| Kind | Path |
|------|------|
| implement | `specs/csdl-bieu-16/implement/csdl-bieu-16.md` |
| FE | `Linm.Web.RMMS.Asset/src/pages/CsdlBieu16Page/` |
| BE entity | `…/Entities/CsdlBieu16Entity.cs` · `CsdlBieu16BranchEntity.cs` |
| migration | `…/Migrations/20260905230000_Schema_CsdlBieu16.cs` |
| STATUS | `specs/csdl-bieu-16/STATUS.md` |

## APIs

- CRUD `…/asset/csdl-records?resource=interchanges` (+ `branches[]` embed)
- filter: search/province/status/interchangeType/roadCode/kmMain
- LKP road-routes/search

## Debt

- Auth wire DEFER · org P2 · XLS OUT · peer/map skip · e2e → QA · apply migration runtime

## Next

| Role | Need |
|------|------|
| **QA** | e2e `/agent-qa*` · scenarios |
| Review | after QA |

## UNCLEAR

- none

## Cấm (compact)

ERP.* · invent infra API · merge so-ts-interchange/road-assets · flatten-only · e2e/start:std @ Dev · Guid IdCode
