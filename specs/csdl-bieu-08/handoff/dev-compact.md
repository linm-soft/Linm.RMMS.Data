# handoff-compact — dev · csdl-bieu-08

| | |
|--|--|
| schemaVersion | `1` |
| role | `dev` |
| feature | `csdl-bieu-08` |
| title | CSDL Biểu 08 — Hệ thống ATGT |
| packKind | `list` |
| changeScope | `new_page` |
| status | `done` |
| taskId | `task_96940f90` |
| resource | `traffic-safety` |
| formNo | `08` |
| columns | `45` · **11 nhóm** |
| IdCode | `AT-` |
| formPattern | Kind D Slideout 2col · shared+1 child |
| Kind | B A–D+F · D Slideout Z1–Z3 |
| mfeStdUrl | `http://localhost:9301/csdl-bieu-08` |
| hub | `/so-ts/csdl-so-sach?resource=traffic-safety` → `/csdl-bieu-08` |
| domain | Asset · `api/v1/asset/csdl-records` |
| entity | shell + `CsdlBieu8Entity` + 11 children · `Schema_CsdlBieu8` |
| buildMfe | **PASS** |
| buildBe | **PASS** |
| autoApprove | ON |
| e2eQa | ON (queued `/agent-qa*` only) |
| contentHashPrior | `sha256:f972c82727726d256754d076435f9ef97c993b4f9844dc79e50b6415fcaf54be` |
| skillVersion | `2026.08.25.01` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.08.31.2` |
| writtenAt | `2026-09-05T10:30:00.000Z` |

## Decisions

- Typed page alias + hub redirect · formNo ATGT=08 · mốc=09 · kè=10
- Persist parent+11 children · list `?assetType=`/`type=` · subset_by_type
- Q-TYPE-UX confirm clear · LeaveConfirm · road-route P1 · XLS OUT · peer deep-link by type
- API keep `asset/csdl-records` · BFF proxy · **cấm ERP.***

## APIs

- GET/POST/PUT/DELETE `/api/v1/asset/csdl-records` · resource=`traffic-safety`
- LKP road-route `/integration/road-routes/search`
- BFF `/web-bff/api/v1/asset/csdl-records` proxy

## Artifacts

| Kind | Path |
|------|------|
| implement | `specs/csdl-bieu-08/implement/csdl-bieu-08.md` |
| FE | `Linm.Web.RMMS.Asset/src/pages/CsdlBieu08Page/*` |
| BE entities | `…/Entities/CsdlBieu8*.cs` |
| migration | `…/Migrations/20260905102400_Schema_CsdlBieu8.cs` |
| STATUS | `specs/csdl-bieu-08/STATUS.md` |

## Debt

- DB migrate apply · UiSchema seed · Auth wire DEFER · org/province P2

## Next

| Role | Need |
|------|------|
| **QA** | e2e `/agent-qa*` · T-QA-* |
| Review | after QA |

## UNCLEAR

- none

## Cấm (compact)

ERP.* · e2e/start:std @ Dev · invent API · detail* only · wide 45 · Guid IdCode · merge Sổ TS
