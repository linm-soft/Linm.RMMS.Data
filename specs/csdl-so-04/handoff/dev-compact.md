# handoff-compact — dev · csdl-so-04

| | |
|--|--|
| schemaVersion | `1` |
| role | `dev` |
| feature | `csdl-so-04` |
| title | CSDL Sổ 04 — Tổng hợp đếm xe |
| packKind | `list` |
| changeScope | `new_page` |
| status | `done` |
| taskId | `task_b4b31215` |
| resource | `traffic-counts` |
| formNo | `04` |
| IdCode | `SO-` |
| formPattern | **Kind D Slideout** 2col · count matrix 16 · **cấm** journal |
| Kind | **B** A–D+F+H · **D** Slideout Z1–Z3 |
| route_confirm | **`route_a`** `/csdl-so-04` + hub |
| mfeStdUrl | `http://localhost:9301/csdl-so-04` |
| hubDeepLink | `/so-ts/csdl-so-sach?resource=traffic-counts` |
| domain | **Asset** · `api/v1/asset/csdl-records` |
| bff | proxy · `web-bff/api/v1/asset/csdl-records` |
| entity | shell + `CsdlSo04Entity` · `Schema_CsdlSo04` · matrix typed |
| yarnBuild | **PASS** |
| dotnetBuild | **PASS** |
| e2eQa | `ON` (queued `/agent-qa*` only) |
| contentHashPrior | `sha256:f4b9c168d339477350ba42a03f7ec00e774b38da0ecc6037de8950d9f25e944d` |
| skillVersion | `2026.08.25.01` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.08.31.2` |
| writtenAt | `2026-09-06T05:45:00.000Z` |

## Decisions

- Typed So04 page + BE Schema_CsdlSo04 · **cấm** detail*/col1–3 · **cấm** TNGT · **cấm** journal
- API **giữ** `asset/csdl-records` · BFF proxy · **cấm ERP.*** · **cấm** `/api/v1/traffic-counts`
- List FULL UiSchema `traffic-counts` · filter road + COUNT_STATION + year/quarter/countMethod
- Label «Sổ 04 — Tổng hợp đếm xe» · hub redirect → `/csdl-so-04`
- Matrix class01…16 · totalCars derived BE+FE RO · unique 422 station+year+quarter
- open Q: **none**

## APIs

| ID | Method | Path |
|----|--------|------|
| API-01..05 | GET/POST/PUT/DELETE | `/api/v1/asset/csdl-records` (+ BFF) `?resource=traffic-counts` |
| API-LKP-01 | GET | `/integration/road-routes/search` |
| API-LKP-02 | GET | `/asset/road-assets?type=COUNT_STATION` |

## Artifacts

| Kind | Path |
|------|------|
| implement | `specs/csdl-so-04/implement/csdl-so-04.md` |
| FE | `Linm.Web.RMMS.Asset/src/pages/CsdlSo04Page/` |
| BE | `CsdlSo04Entity` · `Schema_CsdlSo04` · `CsdlCatalogService` |
| STATUS | `specs/csdl-so-04/STATUS.md` |

## Debt

- Class Excel overlay pending · UiSchema seed DEFER
- Auth / org P2 / XLS OUT · legacy backfill DEFER
- DB migrate apply ops · FE unique-422 toast polish

## Next

| Role | Need |
|------|------|
| **QA** | e2e · CRUD · matrix · unique 422 · filter · alias+hub |
| Review | after QA |

## UNCLEAR

- none

## Cấm (compact)

ERP.* · invent API · e2e/start:std ở Dev · start role khác · merge Sổ TS · TNGT/journal · Guid IdCode
