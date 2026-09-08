# handoff-compact — dev · csdl-bieu-05

| | |
|--|--|
| schemaVersion | `1` |
| role | `dev` |
| feature | `csdl-bieu-05` |
| title | CSDL Biểu 05 — Rãnh các loại |
| packKind | `list` |
| changeScope | `new_page` |
| status | `done` |
| taskId | `task_83252c99` |
| resource | `ditches` |
| formNo | `05` |
| columns | `18` |
| IdCode | `RN-` |
| peerSoTs | `so-ts-ditch` |
| formPattern | **Kind D Slideout** 2col |
| Kind | **B** A–D+F · **D** Slideout |
| domain | **Asset** · `api/v1/asset/csdl-records` |
| mfeStdUrl | `http://localhost:9301/csdl-bieu-05` |
| hub | `/so-ts/csdl-so-sach?resource=ditches` |
| contentHashPrior | `sha256:fd4e6899790aa98d6bc4cb628dc9c0bc5efc90acb3abf03a7b157cf123590117` |
| skillVersion | `2026.08.25.01` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.08.31.2` |
| writtenAt | `2026-09-05T07:00:00.000Z` |

## Decisions

- Implemented typed 18 cột · Schema_CsdlBieu5 · alias `/csdl-bieu-05`
- ditchKind hở/kín · shape chữ nhật/thang/tròn · aperture/drain free_text
- kmFrom/kmTo filter+form · road-route SearchInput · org P2 DEFER · XLS OUT
- Grid AC YES · Leave YES · **cấm** ERP.* · BFF proxy only
- Build MFE+API+BFF **PASS**

## Artifacts

| Kind | Path |
|------|------|
| implement | `specs/csdl-bieu-05/implement/csdl-bieu-05.md` |
| STATUS | `specs/csdl-bieu-05/STATUS.md` |
| migration | `…/Migrations/20260905065854_Schema_CsdlBieu5.cs` |
| FE page | `Linm.Web.RMMS.Asset/src/pages/CsdlBieu05Page/` |

## APIs

- CRUD BFF `…/asset/csdl-records?resource=ditches`
- Filters: ditchKind · kmFrom · kmTo · roadCode · search · province · status
- UiSchema kind `ditches`

## Debt

- ORG P2 · XLS OUT · Auth RequirePermission stub · e2e → QA

## Next

| Role | Need |
|------|------|
| **QA** | `/agent-qa*` e2e CRUD/FORM/FILTER/ROUTE |
| Review | after QA |

## UNCLEAR

- none

## Cấm (compact)

ERP.* · invent API · e2e/start:std ở Dev · merge Sổ TS · parent *Json
