# handoff-compact — dev · csdl-so-03

| | |
|--|--|
| schemaVersion | `1` |
| role | `dev` |
| feature | `csdl-so-03` |
| title | CSDL Sổ 03 — Trực BĐGT + chốt + SC |
| packKind | `list` |
| changeScope | `new_page` |
| status | `done` |
| taskId | `task_dd89680a` |
| resource | `duty-incident-logs` |
| retireKeys | `duty-logs` · `checkpoint-duties` |
| formNo | `03` |
| IdCode | `SO-` |
| formPattern | **Kind D Slideout** 2col · entries `inline_grid` |
| Kind | **B** A–D+F+H · **D** Slideout Z1–Z3 |
| route_confirm | **`route_a`** `/csdl-so-03` + hub |
| mfeStdUrl | `http://localhost:9301/csdl-so-03` |
| hubDeepLink | `/so-ts/csdl-so-sach?resource=duty-incident-logs` |
| domain | **Asset** · `api/v1/asset/csdl-records` |
| bff | proxy · `web-bff/api/v1/asset/csdl-records` |
| entity | shell + `CsdlSo03Entity` · `Schema_CsdlSo03` · widen entries |
| yarnBuild | **PASS** |
| dotnetBuild | **PASS** |
| e2eQa | `ON` (queued `/agent-qa*` only) |
| contentHashPrior | `sha256:1e8b4b6d6149c1ff2f27010cbf0d6649af9408b05738f416cd58d8c7361fdd9d` |
| headerFingerprintPrior | `sha256:b5b6baa32c1a5ebbf3d8eb2ecaad922d90a291958347aa22ec8fa27096d93997` |
| skillVersion | `2026.08.25.01` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.08.31.2` |
| writtenAt | `2026-09-06T03:15:00.000Z` |

## Decisions

- Implemented typed So03 page + BE Schema_CsdlSo03 · **cấm** detail*/col1–3 · **cấm** dutyKind
- Merge P1: 1 hub card `duty-incident-logs` · legacy QS redirect · ResourceMap retire 2 keys
- API **giữ** `asset/csdl-records` · BFF proxy · **cấm ERP.***
- List FULL UiSchema · filter road-route + period TZ · status draft|active|closed
- open Q: **none**

## APIs

| ID | Method | Path |
|----|--------|------|
| API-01..05 | GET/POST/PUT/DELETE | `/api/v1/asset/csdl-records` (+ BFF) |
| API-LKP-01 | GET | `/integration/road-routes/search` |

## Artifacts

| Kind | Path |
|------|------|
| implement | `specs/csdl-so-03/implement/csdl-so-03.md` |
| FE | `Linm.Web.RMMS.Asset/src/pages/CsdlSo03Page/` |
| BE | `CsdlSo03Entity` · `Schema_CsdlSo03` · `CsdlCatalogService` |
| STATUS | `specs/csdl-so-03/STATUS.md` |

## Debt

- Auth wire DEFER · org SearchInput P2 · XLS OUT · migration apply @ deploy

## Next

| Role | Need |
|------|------|
| **QA** | e2e · CRUD · typed form · filter · merge redirect · route alias |
| Review | after QA |

## UNCLEAR

- none

## Cấm (compact)

ERP.* · invent API · e2e/start:std ở Dev · start role khác · merge Sổ TS · dutyKind
