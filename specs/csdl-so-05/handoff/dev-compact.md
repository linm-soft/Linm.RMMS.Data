# handoff-compact — dev · csdl-so-05

| | |
|--|--|
| schemaVersion | `1` |
| role | `dev` |
| feature | `csdl-so-05` |
| title | CSDL Sổ 05 — TNGT + điểm đen |
| packKind | `list` |
| changeScope | `new_page` |
| status | `done` |
| taskId | `task_63d978f8` |
| resource | `accident-summaries` |
| formNo | `05` |
| IdCode | `SO-` |
| formPattern | **Kind D Slideout** 2col · **3 tabs** C.1/C.2/BS add-row |
| Kind | **B** A–D+F+H · **D** Slideout Z1–Z3 |
| route_confirm | **`route_a`** `/csdl-so-05` + hub |
| mfeStdUrl | `http://localhost:9301/csdl-so-05` |
| hubDeepLink | `/so-ts/csdl-so-sach?resource=accident-summaries` |
| domain | **Asset** · `api/v1/asset/csdl-records` |
| bff | proxy · `web-bff/api/v1/asset/csdl-records` |
| entity | shell + `CsdlSo05Entity` · `Schema_CsdlSo05` · C1/C2/BS |
| yarnBuild | **PASS** |
| dotnetBuild | **PASS** |
| e2eQa | `ON` (queued `/agent-qa*` only) |
| contentHashPrior | `sha256:ccb6cccc2010c67b8cd3b02484f6a424d09f5a7e0494ad59b5b71ea6ff15f8ce` |
| headerFingerprintPrior | `sha256:73a54e566bbad59af489c97e74cad13d131c338daa386a531e535704e374d14a` |
| skillVersion | `2026.08.25.01` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.08.31.2` |
| writtenAt | `2026-09-06T06:22:26.191Z` |

## Decisions

- Typed So05 page + BE Schema_CsdlSo05 + 3 child tables · **cấm** detail*/col1–3 · **cấm** 16 hạng
- API **giữ** `asset/csdl-records` · BFF proxy · **cấm ERP.*** · **cấm** `/api/v1/accident-summaries`
- List FULL UiSchema `accident-summaries` · filter year/periodType/tableKind/road
- Alias `/csdl-so-05` + hub NEW card formNo 05 · so-04 title clean (CUC-07)
- period month→1–12 · half→1|2 · year=year · BS assess enum · status draft|active|closed
- open Q: **none**

## APIs

| ID | Method | Path |
|----|--------|------|
| API-01..05 | GET/POST/PUT/DELETE | `/api/v1/asset/csdl-records` (+ BFF) `?resource=accident-summaries` |
| API-LKP-01 | GET | `/integration/road-routes/search` |

## Artifacts

| Kind | Path |
|------|------|
| implement | `specs/csdl-so-05/implement/csdl-so-05.md` |
| FE | `Linm.Web.RMMS.Asset/src/pages/CsdlSo05Page/` |
| BE | `CsdlSo05*` · `Schema_CsdlSo05` · `CsdlCatalogService` |
| STATUS | `specs/csdl-so-05/STATUS.md` |

## Debt

- UiSchema seed DEFER · Auth/org P2 · XLS OUT
- Soft unique advisory · DB migrate apply ops
- Snapshot drift · list lines on GetById only

## Next

| Role | Need |
|------|------|
| **QA** | e2e · CRUD · 3 tabs · period/cause/BS · filter · alias+hub · split so-04 |
| Review | after QA |

## UNCLEAR

- none

## Cấm (compact)

ERP.* · invent API · e2e/start:std ở Dev · start role khác · merge so-04/Sổ TS · Guid IdCode · 16 hạng · col1–3 SSOT · CRUD rpt-tngt
