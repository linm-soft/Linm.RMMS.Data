# handoff-compact — dev · csdl-so-06

| | |
|--|--|
| schemaVersion | `1` |
| role | `dev` |
| feature | `csdl-so-06` |
| title | CSDL Sổ 06 — QL cầu / phiếu KT |
| packKind | `list` |
| changeScope | `new_page` |
| status | `done` |
| taskId | `task_e9296e25` |
| resource | `bridge-inspections` |
| formNo | `06` |
| IdCode | `SO-` |
| formPattern | **Kind D Slideout** 2col · entries `inline_grid` **fixed-20** |
| Kind | **B** A–D+F+H · **D** Slideout Z1–Z3 |
| route_confirm | **`route_a`** `/csdl-so-06` + hub |
| mfeStdUrl | `http://localhost:9301/csdl-so-06` |
| hubDeepLink | `/so-ts/csdl-so-sach?resource=bridge-inspections` |
| domain | **Asset** · `api/v1/asset/csdl-records` |
| bff | proxy · `web-bff/api/v1/asset/csdl-records` |
| entity | shell + `CsdlSo06Entity` · `Schema_CsdlSo06` · widen entries |
| yarnBuild | **PASS** |
| dotnetBuild | **PASS** |
| e2eQa | `ON` (queued `/agent-qa*` only) |
| contentHashPrior | `sha256:efbccc4800d45e5dfe2b30b8b35773d127554eb6912be14729c0da066e214d8a` |
| skillVersion | `2026.08.25.01` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.08.31.2` |
| writtenAt | `2026-09-06T03:55:00.000Z` |

## Decisions

- Implemented typed So06 page + BE Schema_CsdlSo06 · fixed-20 seed · **cấm** detail*/col1–3 SSOT · **cấm** add/remove
- API **giữ** `asset/csdl-records` · BFF proxy · **cấm ERP.*** · **cấm** runtime `/api/v1/bridge-inspections`
- List FULL UiSchema `bridge-inspections` · filter road+bridgeId+period TZ · status draft|done|cancelled
- photoIds CSV max5 / dòng · FileMulti widget DEFER · bridge SearchInput → Text P1
- Peer Biểu 2 deep-link · open Q: **none**

## APIs

| ID | Method | Path |
|----|--------|------|
| API-01..05 | GET/POST/PUT/DELETE | `/api/v1/asset/csdl-records` (+ BFF) |
| API-LKP-01 | GET | `/integration/road-routes/search` |
| API-FILE-01 | FileService | photoIds (CSV bind · max 5) |

## Artifacts

| Kind | Path |
|------|------|
| implement | `specs/csdl-so-06/implement/csdl-so-06.md` |
| FE | `Linm.Web.RMMS.Asset/src/pages/CsdlSo06Page/` |
| BE | `CsdlSo06Entity` · `Schema_CsdlSo06` · `CsdlCatalogService` |
| STATUS | `specs/csdl-so-06/STATUS.md` |

## Debt

- FileMulti UI · bridges SearchInput · UiSchema seed DEFER
- Auth wire / org / hub rename T-REN-01 / XLS DEFER|OUT
- DB migrate apply ops

## Next

| Role | Need |
|------|------|
| **QA** | e2e · CRUD · fixed-20 · priority/photo · filter · route alias+hub |
| Review | after QA |

## UNCLEAR

- none

## Cấm (compact)

ERP.* · invent API · e2e/start:std ở Dev · start role khác · merge Biểu 2 · runtime bridge-inspections path · add/remove >20
