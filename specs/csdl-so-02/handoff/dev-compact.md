# handoff-compact — dev · csdl-so-02

| | |
|--|--|
| schemaVersion | `1` |
| role | `dev` |
| feature | `csdl-so-02` |
| title | CSDL Sổ 02 — Nhật ký tuần đường |
| packKind | `list` |
| changeScope | `new_page` |
| status | `done` |
| taskId | `task_d4e4f9fe` |
| resource | `patrol-logs` |
| formNo | `02` |
| IdCode | `SO-` |
| formPattern | **Kind D Slideout** 2col · entries `inline_grid` |
| Kind | **B** A–D+F+H · **D** Slideout Z1–Z3 |
| route_confirm | **`route_a`** `/csdl-so-02` + hub |
| mfeStdUrl | `http://localhost:9301/csdl-so-02` |
| hubDeepLink | `/so-ts/csdl-so-sach?resource=patrol-logs` |
| domain | **Asset** · `api/v1/asset/csdl-records` |
| bff | proxy · `web-bff/api/v1/asset/csdl-records` |
| entity | shell + `CsdlSo02Entity` · `Schema_CsdlSo02` · widen entries |
| yarnBuild | **PASS** |
| dotnetBuild | **PASS** |
| e2eQa | `ON` (queued `/agent-qa*` only) |
| contentHashPrior | `sha256:70538d9c9588d335aa43fd5a1fe28433d1138960d5954c5a7ef4cff33a5bd1c3` |
| skillVersion | `2026.08.25.01` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.08.31.2` |
| writtenAt | `2026-09-06T00:36:00.000Z` |

## Decisions

- Implemented typed So02 page + BE Schema_CsdlSo02 · **cấm** detail*/col1–3 SSOT
- API **giữ** `asset/csdl-records` · BFF proxy · **cấm ERP.***
- List FULL UiSchema `patrol-logs` · filter road-route + period TZ
- Label «Sổ 02» · hub redirect patrol-logs → `/csdl-so-02`
- File sketch/media: ids text P1 · max 10 validated BE
- open Q: **none**

## APIs

| ID | Method | Path |
|----|--------|------|
| API-01..05 | GET/POST/PUT/DELETE | `/api/v1/asset/csdl-records` (+ BFF) |
| API-LKP-01 | GET | `/integration/road-routes/search` |

## Artifacts

| Kind | Path |
|------|------|
| implement | `specs/csdl-so-02/implement/csdl-so-02.md` |
| FE | `Linm.Web.RMMS.Asset/src/pages/CsdlSo02Page/` |
| BE | `CsdlSo02Entity` · `Schema_CsdlSo02` · `CsdlCatalogService` |
| STATUS | `specs/csdl-so-02/STATUS.md` |

## Debt

- FileRef/FileMulti UI → text ids P1
- duty-logs hub formNo collision display
- Auth wire / org-partner / XLS DEFER|OUT

## Next

| Role | Need |
|------|------|
| **QA** | e2e · CRUD · typed form · filter · route alias |
| Review | after QA |

## UNCLEAR

- none

## Cấm (compact)

ERP.* · invent API · e2e/start:std ở Dev · start role khác · merge Sổ TS
