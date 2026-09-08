# handoff-compact — dev · csdl-so-09

| | |
|--|--|
| schemaVersion | `1` |
| role | `dev` |
| feature | `csdl-so-09` |
| title | CSDL Sổ 09 — QL vận hành ITS/ETC/KSTTX |
| packKind | `list` |
| changeScope | `new_page` |
| status | `done` |
| taskId | `task_55ae2864` |
| resource | `its-ops-logs` |
| formNo | `09` |
| IdCode | `SO-` |
| formPattern | **Kind D Slideout** 2col · entries `inline_grid` **9 cột** |
| Kind | **B** A–D+F+H · **D** Slideout Z1–Z3 |
| route_confirm | **`route_a`** `/csdl-so-09` + hub |
| mfeStdUrl | `http://localhost:9301/csdl-so-09` |
| hubDeepLink | `/so-ts/csdl-so-sach?resource=its-ops-logs` |
| peerStdUrl | `http://localhost:9301/csdl-bieu-14` |
| domain | **Asset** · `api/v1/asset/csdl-records` |
| bff | proxy · `web-bff/api/v1/asset/csdl-records` |
| entity | shell + `CsdlSo09Entity` · `Schema_CsdlSo09` · widen entries |
| yarnBuild | **PASS** |
| dotnetBuild | **PASS** |
| e2eQa | `ON` (queued `/agent-qa*` only) |
| contentHashPrior | `sha256:1cbd0cd26f977a518c29457acddd7c893fa56fe9bd750ac1ad6a15b0976d03dc` |
| skillVersion | `2026.08.25.01` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.08.31.2` |
| writtenAt | `2026-09-06T00:10:00.000Z` |

## Decisions

- Implemented typed So09 page + BE Schema_CsdlSo09 · **cấm** detail*/col1–3 SSOT · **≠** Biểu 9
- API **giữ** `asset/csdl-records` · BFF proxy · **cấm ERP.***
- List FULL UiSchema `its-ops-logs` · filter road-route + period TZ
- Label «Sổ 09 — QL vận hành ITS/ETC/KSTTX» · hub → `/csdl-so-09`
- Entries 9 cột: occurredAt·shift·operatorName·systemStatus·anomaly·action·result·recommendation·signature
- linkBieu14Id optional SearchInput its-systems + deep-link · **cấm** embed
- media **N/A** · open Q: **none**

## APIs

| ID | Method | Path |
|----|--------|------|
| API-01..05 | GET/POST/PUT/DELETE | `/api/v1/asset/csdl-records` (+ BFF) |
| API-LKP-01 | GET | `/integration/road-routes/search` |
| API-LKP-02 | GET | `/asset/csdl-records?resource=its-systems` |

## Artifacts

| Kind | Path |
|------|------|
| implement | `specs/csdl-so-09/implement/csdl-so-09.md` |
| FE | `Linm.Web.RMMS.Asset/src/pages/CsdlSo09Page/` |
| BE | `CsdlSo09Entity` · `Schema_CsdlSo09` · `CsdlCatalogService` |
| STATUS | `specs/csdl-so-09/STATUS.md` |

## Debt

- UiSchema seed default DEFER
- Auth wire / org SearchInput / XLS / e-sign DEFER|OUT
- DB migrate apply ops · EF snapshot regen

## Next

| Role | Need |
|------|------|
| **QA** | e2e · CRUD · typed form+entries 9 cột · filter · route+hub · link14 |
| Review | after QA |

## UNCLEAR

- none

## Cấm (compact)

ERP.* · invent API · e2e/start:std ở Dev · start role khác · merge Biểu 14/Sổ TS · media invent · ≠ Biểu 9
