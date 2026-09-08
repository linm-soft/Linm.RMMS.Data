# handoff-compact — dev · csdl-bieu-09

| | |
|--|--|
| schemaVersion | `1` |
| role | `dev` |
| feature | `csdl-bieu-09` |
| title | CSDL Biểu 09 — Mốc lộ giới / GPMB |
| packKind | `list` |
| changeScope | `new_page` |
| status | `done` |
| taskId | `task_b449f5f6` |
| resource | `boundary-markers` |
| formNo | `09` |
| columns | `17` · **2 section kind** |
| IdCode | `MK-` |
| formPattern | Kind D Slideout 2col · 2 section kind |
| Kind | B A–D+F · D Slideout Z1–Z3 |
| mfeStdUrl | `http://localhost:9301/csdl-bieu-09` |
| hub | `/so-ts/csdl-so-sach?resource=boundary-markers` → `/csdl-bieu-09` |
| peerSoTs | — (none) |
| domain | Asset · `api/v1/asset/csdl-records` |
| entity | shell + `CsdlBieu9Entity` · `Schema_CsdlBieu9` |
| buildMfe | **PASS** |
| buildBe | **PASS** |
| autoApprove | ON |
| e2eQa | ON (queued `/agent-qa*` only) |
| contentHashPrior | `sha256:863490daf95d2c19ddad660fc05f901eaeb0248fb65961f9e96747ebcf5b04e4` |
| skillVersion | `2026.08.25.01` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.08.31.2` |
| writtenAt | `2026-09-05T18:25:00.000Z` |

## Decisions

- Typed alias `/csdl-bieu-09` + hub redirect · formNo **09**
- Persist shell + `rmms_csdl_bieu9` 1:1 · migration `20260905180000_Schema_CsdlBieu9`
- markerKind RoadLimit/GPMB · structure Excel seed · L/W/Area optional · Qty default 1 · completedYear required
- 2 section kind (title switch) · LeaveConfirm · road-route P1 · peer **none** · XLS OUT
- API keep `asset/csdl-records` · BFF proxy · UiSchema seed · **cấm ERP.***

## APIs

- GET/POST/PUT/DELETE `/api/v1/asset/csdl-records` · resource=`boundary-markers` · filter `markerKind`
- LKP road-route `/integration/road-routes/search`
- BFF `/web-bff/api/v1/asset/csdl-records` proxy

## Artifacts

| Kind | Path |
|------|------|
| implement | `specs/csdl-bieu-09/implement/csdl-bieu-09.md` |
| FE | `Linm.Web.RMMS.Asset/src/pages/CsdlBieu09Page/*` |
| BE entity | `…/Entities/CsdlBieu9Entity.cs` |
| migration | `…/Migrations/20260905180000_Schema_CsdlBieu9.cs` |
| STATUS | `specs/csdl-bieu-09/STATUS.md` |

## Debt

- DB migrate apply · Auth wire DEFER · org/province P2 · XLS OUT

## Next

| Role | Need |
|------|------|
| **QA** | e2e `/agent-qa*` · T-QA-* |
| Review | after QA |

## UNCLEAR

- none

## Cấm (compact)

ERP.* · e2e/start:std @ Dev · invent API · detail* only · Guid IdCode · merge Sổ TS
