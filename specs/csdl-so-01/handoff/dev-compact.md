# handoff-compact — dev · csdl-so-01

| | |
|--|--|
| schemaVersion | `1` |
| role | `dev` |
| feature | `csdl-so-01` |
| title | CSDL Sổ 01 — Nhật ký tuần kiểm |
| packKind | `list` |
| changeScope | `new_page` |
| status | `done` |
| taskId | `task_2b9f40d3` |
| resource | `inspection-logs` |
| formNo | `01` |
| IdCode | `SO-` |
| formPattern | **Kind D Slideout** 2col · entries `inline_grid` |
| Kind | **B** A–D+F+H · **D** Slideout Z1–Z3 |
| mfeStdUrl | `http://localhost:9301/csdl-so-01` |
| hubDeepLink | `/so-ts/csdl-so-sach?resource=inspection-logs` |
| domain | **Asset** · `api/v1/asset/csdl-records` |
| entity | `CsdlSo01Entity` · `Schema_CsdlSo01` · entries widen |
| buildFe | **PASS** `yarn build` |
| buildBe | **PASS** `dotnet build` |
| e2eQa | `ON` (queued `/agent-qa*` only · **cấm** e2e ở Dev) |
| contentHashPrior | `sha256:9b7c5f11adaed6b64404b77225fbdc0a6a4021b39d7a00dc1922c643aff822d3` |
| headerFingerprintPrior | `sha256:4e2c2ee770e209ccf28234cb47c2d32098a6b6f9efb8cc5817b9c8964e64a4da` |
| skillVersion | `2026.08.25.01` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.08.31.2` |
| writtenAt | `2026-09-06T01:25:00.000Z` |

## Decisions

- Alias `/csdl-so-01` + hub · typed inspector/period + entries · **cấm** detail*/col1–3 only
- API giữ `asset/csdl-records` · BFF proxy · DOMAIN-MAP `csdl-so-01`→Asset · **cấm ERP.***
- Migration `20260906010000_Schema_CsdlSo01` ready · apply on deploy
- File: postRepairMediaIds max 10 · ≥1 nếu repairRequest · UI text CSV (So02 parity)
- List config FULL: `LinCatalogUiSchemaEditorModal` + `buildDynamicGridColumns`

## APIs

- GET/POST/PUT/DELETE `/api/v1/asset/csdl-records` · `resource=inspection-logs`
- LKP road-route · FileService (ids)
- BFF `/web-bff/api/v1/asset/csdl-records` proxy

## Debt

- FileMulti polish · Auth wire DEFER · org/XLS OUT · migration apply runtime · snapshot not regen

## Artifacts

| Kind | Path |
|------|------|
| implement | `specs/csdl-so-01/implement/csdl-so-01.md` |
| STATUS | `specs/csdl-so-01/STATUS.md` |

## Next

| Role | Need |
|------|------|
| **QA** | e2e scenarios · mfeStdUrl |
| Review | after QA |

## UNCLEAR

- none

## Cấm (compact)

ERP.* · invent API · e2e/start:std ở Dev · Guid IdCode · merge Sổ TS · parent *Json · start role khác
