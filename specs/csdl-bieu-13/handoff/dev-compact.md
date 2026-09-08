# handoff-compact — dev · csdl-bieu-13

| | |
|--|--|
| schemaVersion | `1` |
| role | `dev` |
| feature | `csdl-bieu-13` |
| title | CSDL Biểu 13 — Tường chống ồn |
| packKind | `list` |
| changeScope | `new_page` |
| status | `done` |
| taskId | `task_94fc7cdd` |
| resource | `noise-barriers` |
| formNo | `13` |
| columns | `13` · lengthM/heightM/areaM2 |
| IdCode | `TC-` |
| peerSoTs | `so-ts-noise-barrier` · **cấm** merge · none_p1 |
| formPattern | **Kind D Slideout** 2col · Z2 Kích thước tường |
| Kind | **B** A–D+F · **D** Slideout Z1–Z3 |
| dim | lengthM/heightM/areaM2 ≥0 · area **manual** · reject all-zero |
| side | L/R/C/Both LOOKUP |
| mfeStdUrl | `http://localhost:9301/csdl-bieu-13` |
| hub | `/so-ts/csdl-so-sach?resource=noise-barriers` |
| domain | **Asset** · `api/v1/asset/csdl-records` |
| entity | shell + `CsdlBieu13Entity` · `Schema_CsdlBieu13` |
| buildFe | **PASS** (`yarn build`) |
| buildBe | **PASS** (`dotnet build` Api) |
| e2eQa | queued `/agent-qa*` only · **cấm** e2e @dev |
| contentHashPrior | `sha256:39a45de0a9b834c65373e6c20d1664ab43144ff60d97bae4f0d886ad09d91e3a` |
| skillVersion | `2026.08.25.01` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.08.31.2` |
| writtenAt | `2026-09-05T14:30:00.000Z` |

## Decisions

- Typed Biểu 13 · **cấm** detail* SSOT · shell + Schema_CsdlBieu13 1:1
- Route alias `/csdl-bieu-13` + hub NEW card formNo 13
- Dim flat LengthM/HeightM/AreaM2 · area manual · reject all-zero
- API giữ `asset/csdl-records` · BFF proxy · **cấm ERP.***
- List subset shared+lengthM/heightM/areaM2+status · Zone F UiSchema full
- road-route SearchInput P1 · org/XLS OUT/DEFER · peer cite only

## Artifacts

| Kind | Path |
|------|------|
| implement | `specs/csdl-bieu-13/implement/csdl-bieu-13.md` |
| FE page | `Linm.Web.RMMS.Asset/src/pages/CsdlBieu13Page/` |
| BE entity | `…/Entities/CsdlBieu13Entity.cs` |
| migration | `…/Migrations/20260905140000_Schema_CsdlBieu13.cs` |
| STATUS | `specs/csdl-bieu-13/STATUS.md` |

## Screens / APIs

- S-LIST · S-FORM-C/E/V/Copy · S-ACT-DELETE · S-HUB-ENTRY
- API-01..05 csdl-records · API-LKP-01 road-routes/search
- catalogKind `noise-barriers` · prefix `TC`

## Next

| Role | Need |
|------|------|
| **QA** | e2e `/agent-qa*` · CRUD/filter/dim/side/route |
| Review | after QA |

## UNCLEAR

- none

## Debt

- GAP-CSDL-ORG-01 P2 · XLS OUT · Auth DEFER · peer merge none_p1

## Cấm (compact)

ERP.* · invent API · detail* only · Guid IdCode · merge so-ts-noise-barrier · e2e/start:std @dev · start role khác
