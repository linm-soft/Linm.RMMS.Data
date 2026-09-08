# handoff-compact — dev · csdl-bieu-15

| | |
|--|--|
| schemaVersion | `1` |
| role | `dev` |
| feature | `csdl-bieu-15` |
| title | CSDL Biểu 15 — TMC / thu phí / hạt / kho |
| packKind | `list` |
| changeScope | `new_page` |
| status | `done` |
| taskId | `task_e6ad9bf7` |
| resource | `ops-facilities` |
| formNo | `15` |
| columns | `20` · Z2 công trình · Z3 TB+QL |
| IdCode | `OF-` |
| peerSoTs | `so-ts-toll` · `so-ts-rest-area` · `so-ts-station-house` · cite only · none_p1 |
| formPattern | Kind D Slideout 2col · footer_actions_only |
| Kind | B A–D+F · D Slideout |
| facility | keep_5 tmc/toll/rest/station/warehouse |
| mfeStdUrl | `http://localhost:9301/csdl-bieu-15` |
| hub | `/so-ts/csdl-so-sach?resource=ops-facilities` |
| domain | Asset · `api/v1/asset/csdl-records` |
| entity | shell + `CsdlBieu15Entity` · `Schema_CsdlBieu15` |
| yarnBuild | **PASS** |
| dotnetBuild | **PASS** |
| e2eQa | ON · queued `/agent-qa*` only |
| contentHashPrior | `sha256:3bf356f00182dd6c0864bf5b88ae4d460ef8da73e5521f1b14756b7168dc20a7` |
| headerFingerprintPrior | `sha256:0064a4903777f7ea8d51c7423d8451a20daf77a5934929001905edaa380f4fe4` |
| skillVersion | `2026.08.25.01` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.08.31.2` |
| writtenAt | `2026-09-05T15:45:00.000Z` |

## Decisions

- route_a `/csdl-bieu-15` + hub NEW card formNo 15
- typed Facility*/Area*/Equipment* flat · **cấm** detail* / parent *Json / ERP.*
- facilityKind keep_5 · equipmentKind free_text · area/qty ≥0 · status→shell Status
- list subset: shared + facilityKind/facilityName/status/yearBuilt
- UiSchema catalogKind `ops-facilities` · buildDynamicGridColumns · Zone F full
- BFF proxy unchanged · migration `20260905160000_Schema_CsdlBieu15`

## Artifacts

| Kind | Path |
|------|------|
| implement | `specs/csdl-bieu-15/implement/csdl-bieu-15.md` |
| FE | `Linm.Web.RMMS.Asset/src/pages/CsdlBieu15Page/` |
| BE entity | `…/Entities/CsdlBieu15Entity.cs` |
| migration | `…/Migrations/20260905160000_Schema_CsdlBieu15.cs` |
| STATUS | `specs/csdl-bieu-15/STATUS.md` |

## APIs

- CRUD `…/asset/csdl-records?resource=ops-facilities`
- filter: search/province/status/facilityKind/roadCode/km*
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

ERP.* · invent infra API · merge so-ts-toll/rest/station/road-assets · e2e/start:std @ Dev · Guid IdCode
