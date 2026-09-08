# handoff-compact — dev · csdl-so-07

| | |
|--|--|
| schemaVersion | `1` |
| role | `dev` |
| feature | `csdl-so-07` |
| title | CSDL Sổ 07 — HL + GPTC + Dự án |
| packKind | `list` |
| changeScope | `new_page` |
| status | `done` |
| taskId | `task_24b3bbfd` |
| resource | `row-violations` |
| formNo | `07` |
| IdCode | `SO-` |
| formPattern | **Kind D Slideout** 2col · Tab A/B `inline_grid` **add/remove** |
| Kind | **B** A–D+F+H · **D** Slideout Z1–Z3 |
| route_confirm | **`route_a`** `/csdl-so-07` + hub |
| mfeStdUrl | `http://localhost:9301/csdl-so-07` |
| hubDeepLink | `/so-ts/csdl-so-sach?resource=row-violations` |
| domain | **Asset** · `api/v1/asset/csdl-records` |
| bff | proxy · `web-bff/api/v1/asset/csdl-records` |
| entity | shell + `CsdlSo07Entity` · `Schema_CsdlSo07` · VP/GP children |
| yarnBuild | **PASS** |
| dotnetBuild | **PASS** |
| e2eQa | `ON` (queued `/agent-qa*` only) |
| contentHashPrior | `sha256:b928feb3e0d7900398812630e25afa43bfcbf4971633a9c1184c55ea2912ef69` |
| skillVersion | `2026.08.25.01` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.08.31.2` |
| writtenAt | `2026-09-06T04:45:00.000Z` |

## Decisions

- Implemented typed So07 page + BE Schema_CsdlSo07 + nested VP/GP · **cấm** flatten / detail*/col1–3 SSOT
- API **giữ** `asset/csdl-records` · BFF proxy · **cấm ERP.*** · **cấm** runtime `/row-violations`
- List FULL UiSchema `row-violations` · filter road-route + UpdatedAt TZ
- status sổ draft|active|closed · VP open|processing|resolved|dismissed · QLDA Text optional
- Alias `/csdl-so-07` + hub redirect · peer report drill READY · **cấm** merge
- open Q: **none**

## APIs

| ID | Method | Path |
|----|--------|------|
| API-01..05 | GET/POST/PUT/DELETE | `/api/v1/asset/csdl-records` (+ BFF) |
| API-LKP-01 | GET | `/integration/road-routes/search` |

## Artifacts

| Kind | Path |
|------|------|
| implement | `specs/csdl-so-07/implement/csdl-so-07.md` |
| FE | `Linm.Web.RMMS.Asset/src/pages/CsdlSo07Page/` |
| BE | `CsdlSo07*` · `Schema_CsdlSo07` · `CsdlCatalogService` |
| STATUS | `specs/csdl-so-07/STATUS.md` |

## Debt

- UiSchema seed default DEFER
- Auth wire / org SearchInput / hub rename T-REN-01 / XLS DEFER|OUT
- DB migrate apply ops · legacy backfill ops

## Next

| Role | Need |
|------|------|
| **QA** | e2e · CRUD · 2-tab nested · filter · route alias+hub |
| Review | after QA |

## UNCLEAR

- none

## Cấm (compact)

ERP.* · invent API · e2e/start:std ở Dev · start role khác · flatten tabs · runtime row-violations path · merge report
