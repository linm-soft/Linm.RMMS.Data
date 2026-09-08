# handoff-compact — dev · csdl-bieu-11

| | |
|--|--|
| schemaVersion | `1` |
| role | `dev` |
| feature | `csdl-bieu-11` |
| title | CSDL Biểu 11 — Hệ thống chiếu sáng |
| packKind | `list` |
| changeScope | `new_page` |
| status | `done` |
| taskId | `task_049ab5a3` |
| resource | `lighting-systems` |
| formNo | `11` |
| columns | `24` · **2 section** lưới + NLMT |
| IdCode | `LT-` |
| peerSoTs | `so-ts-lighting` (toolbar · ≠ merge) |
| formPattern | **Kind D Slideout** 2col · 2 section |
| Kind | **B** list + **D** Slideout |
| mfeStdUrl | `http://localhost:9301/csdl-bieu-11` |
| hub | `/so-ts/csdl-so-sach?resource=lighting-systems` |
| domain | **Asset** · `api/v1/asset/csdl-records` |
| entity | shell + `CsdlBieu11Entity` · `Schema_CsdlBieu11` |
| yarnBuild | **PASS** |
| dotnetBuild | **PASS** |
| e2eQa | `ON` (queued `/agent-qa*` only) |
| contentHashPrior | `sha256:7980db07b4712336ab0b675fa89feaab75c67fdaef3b54fe94647ab9ec1863d8` |
| headerFingerprintPrior | `sha256:b37759a9224c09c7c63bc81583b4a9bcbca02e74cba8b63579819e90d57f1d1a` |
| skillVersion | `2026.08.25.01` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.08.31.2` |
| writtenAt | `2026-09-05T13:00:00.000Z` |

## Decisions locked

- route_a `/csdl-bieu-11` · typed 24 · LED allow_zero · gridStatus align_status · cabinet split · solar optional_flat · Q-LIST-COLS subset
- API giữ `asset/csdl-records` · BFF proxy · **cấm ERP.***
- List: `buildDynamicGridColumns` + UiSchemaEditor · **cấm** leftover `const columns`

## Artifacts

| Kind | Path |
|------|------|
| implement | `specs/csdl-bieu-11/implement/csdl-bieu-11.md` |
| FE page | `Linm.Web.RMMS.Asset/src/pages/CsdlBieu11Page/` |
| BE entity | `…/Entities/CsdlBieu11Entity.cs` |
| migration | `…/Migrations/20260905124000_Schema_CsdlBieu11.cs` |
| STATUS | `specs/csdl-bieu-11/STATUS.md` |

## APIs (ids)

- CRUD `…/asset/csdl-records?resource=lighting-systems`
- LKP road-route · UiSchema `lighting-systems`
- filter `gridStatus`

## Debt

- DB migrate apply · Auth wire DEFER · org SearchInput P2 · XLS OUT

## Screens

- S-LIST · S-FORM-C/E/V/Copy · S-ACT-DELETE · S-HUB-ENTRY · S-PEER · S-SKIP-MAP

## Next

| Role | Need |
|------|------|
| **QA** | e2e `/agent-qa*` · scenarios · mfeStdUrl |
| Review | after QA |

## UNCLEAR

- none

## Cấm (compact)

ERP.* · invent API · detail* only · Guid IdCode · merge Sổ TS · dump điểm→qty · Solar child · e2e/start:std @ Dev · start role khác
