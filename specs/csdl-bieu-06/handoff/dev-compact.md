# handoff-compact — dev · csdl-bieu-06

| | |
|--|--|
| schemaVersion | `1` |
| role | `dev` |
| feature | `csdl-bieu-06` |
| title | CSDL Biểu 06 — Hầm chui DS + hộp KT |
| packKind | `list` |
| changeScope | `new_page` |
| status | `done` |
| taskId | `task_f79fea88` |
| resource | `underpasses` |
| formNo | `06` |
| columns | `19` |
| IdCode | `HC-` |
| peerSoTs | `so-ts-underpass` |
| formPattern | **Kind D Slideout** 2col · **cấm** Full-page |
| Kind | **B** A–D+F · **D** Slideout Z1–Z3 |
| domain | **Asset** · `api/v1/asset/csdl-records` |
| entity | shell + `CsdlBieu6Entity` · `Schema_CsdlBieu6` |
| mfeStdUrl | `http://localhost:9301/csdl-bieu-06` |
| hub | `/so-ts/csdl-so-sach?resource=underpasses` |
| yarnBuild | **PASS** |
| dotnetBuild | **PASS** |
| e2eQa | `ON` (queued `/agent-qa*` only · **not** run here) |
| contentHashPrior | `sha256:ffc5c8381b04dcec3f0376df87187012f34b16bf211a3e3fb7311a8375a386f0` |
| skillVersion | `2026.08.25.01` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.08.31.2` |
| writtenAt | `2026-09-05T14:50:00.000Z` |

## Decisions

- route_a `/csdl-bieu-06` + hub · typed 19 · kmPoint→KmFrom · no kmTo
- Persist `rmms_csdl_bieu6` · migration `20260905073931_Schema_CsdlBieu6`
- Filters: search/province/status/underpassKind/roadCode/kmPoint
- Q-KIND hc_ds/hop_kt · aperture number_m · pipe optional · load HL · light/drain yes_no
- UiSchema catalogKind `underpasses` · buildDynamicGridColumns · no detail* SSOT
- BFF proxy · **cấm** ERP.* · peer deep-link only

## Artifacts

| Kind | Path |
|------|------|
| implement | `specs/csdl-bieu-06/implement/csdl-bieu-06.md` |
| FE | `Linm.Web.RMMS.Asset/src/pages/CsdlBieu06Page/` |
| BE entity | `…/Entities/CsdlBieu6Entity.cs` |
| migration | `…/Migrations/20260905073931_Schema_CsdlBieu6.cs` |
| STATUS | `specs/csdl-bieu-06/STATUS.md` |

## APIs

- CRUD `…/asset/csdl-records?resource=underpasses`
- LKP road-route · org DEFER P2

## Debt

- Auth wire DEFER · org P2 · XLS OUT · DB migrate apply (ops)

## Screens / zones (ids only)

- S-LIST · S-FORM-C/E/V/Copy · S-ACT-DELETE · S-HUB-ENTRY · S-PEER-SOTS · S-SKIP-MAP

## Next

| Role | Need |
|------|------|
| **QA** | scenarios + e2e `/agent-qa*` |
| Review | after QA |

## UNCLEAR

- none

## Cấm (compact)

ERP.* · e2e/start:std ở Dev · invent API · detail* only · Guid IdCode · merge Sổ TS · parent *Json · start role khác
