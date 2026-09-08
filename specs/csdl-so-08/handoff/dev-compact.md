# handoff-compact — dev · csdl-so-08

| | |
|--|--|
| schemaVersion | `1` |
| role | `dev` |
| feature | `csdl-so-08` |
| title | CSDL Sổ 08 — Kết quả BDTX |
| packKind | `list` |
| changeScope | `new_page` |
| status | `done` |
| taskId | `task_85207485` |
| resource | `maintenance-work-logs` |
| formNo | `08` |
| IdCode | `SO-` |
| formPattern | **Kind D Slideout** 2col · entries `inline_grid` |
| Kind | **B** A–D+F+H · **D** Slideout Z1–Z3 |
| route_confirm | **`route_a`** `/csdl-so-08` + hub |
| mfeStdUrl | `http://localhost:9301/csdl-so-08` |
| hubDeepLink | `/so-ts/csdl-so-sach?resource=maintenance-work-logs` |
| domain | **Asset** · `api/v1/asset/csdl-records` |
| bff | proxy · `web-bff/api/v1/asset/csdl-records` |
| entity | shell + `CsdlSo08Entity` · `Schema_CsdlSo08` · widen entries |
| yarnBuild | **PASS** |
| dotnetBuild | **PASS** |
| e2eQa | `ON` (queued `/agent-qa*` only) |
| contentHashPrior | `sha256:46cd2b05ce4a396d08fa326183d9a17603afc381fbd00669155c13703a4e3146` |
| skillVersion | `2026.08.25.01` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.08.31.2` |
| writtenAt | `2026-09-06T02:10:00.000Z` |

## Decisions

- Implemented typed So08 page + BE Schema_CsdlSo08 · **cấm** detail*/col1–3 SSOT · **cấm** kmAt
- API **giữ** `asset/csdl-records` · BFF proxy · **cấm ERP.***
- List FULL UiSchema `maintenance-work-logs` · filter road-route + period TZ
- Label «Sổ 08 — Kết quả BDTX» · hub redirect → `/csdl-so-08`
- Entries 5 cột: workItem·kmFrom/To·solution·mainResult·note · media N/A
- open Q: **none**

## APIs

| ID | Method | Path |
|----|--------|------|
| API-01..05 | GET/POST/PUT/DELETE | `/api/v1/asset/csdl-records` (+ BFF) |
| API-LKP-01 | GET | `/integration/road-routes/search` |

## Artifacts

| Kind | Path |
|------|------|
| implement | `specs/csdl-so-08/implement/csdl-so-08.md` |
| FE | `Linm.Web.RMMS.Asset/src/pages/CsdlSo08Page/` |
| BE | `CsdlSo08Entity` · `Schema_CsdlSo08` · `CsdlCatalogService` |
| STATUS | `specs/csdl-so-08/STATUS.md` |

## Debt

- UiSchema seed default DEFER
- Auth wire / org SearchInput / XLS DEFER|OUT
- DB migrate apply ops

## Next

| Role | Need |
|------|------|
| **QA** | e2e · CRUD · typed form+entries · filter · route alias+hub |
| Review | after QA |

## UNCLEAR

- none

## Cấm (compact)

ERP.* · invent API · e2e/start:std ở Dev · start role khác · merge Sổ TS · kmAt · media invent
