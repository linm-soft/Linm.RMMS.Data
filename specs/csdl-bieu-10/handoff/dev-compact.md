# handoff-compact — dev · csdl-bieu-10

| | |
|--|--|
| schemaVersion | `1` |
| role | `dev` |
| feature | `csdl-bieu-10` |
| title | CSDL Biểu 10 — Kè, tường chắn |
| packKind | `list` |
| changeScope | `new_page` |
| status | `done` |
| taskId | `task_db0c0344` |
| resource | `retaining-walls` |
| formNo | `10` |
| columns | `21` · **2 section** tường + rãnh đỉnh |
| IdCode | `KE-` |
| peerSoTs | `so-ts-retaining` (toolbar · ≠ merge) |
| formPattern | Kind D Slideout 2col · 2 section |
| Kind | B A–D+F · D Slideout Z1–Z3 · Z2b crest |
| heightAlias | UI `heightM` ↔ DB `WidthM` |
| crest | optional_flat 4 · **cấm** CrestDitch child |
| mfeStdUrl | `http://localhost:9301/csdl-bieu-10` |
| hub | `/so-ts/csdl-so-sach?resource=retaining-walls` → `/csdl-bieu-10` |
| domain | Asset · `api/v1/asset/csdl-records` |
| entity | shell + `CsdlBieu10Entity` · `Schema_CsdlBieu10` |
| buildMfe | **PASS** |
| buildBe | **PASS** |
| autoApprove | ON |
| e2eQa | ON (queued `/agent-qa*` only) |
| contentHashPrior | `sha256:56715ebbcfffd0589eab296a31137e79a82b49c672dc14582fc554f4ed262346` |
| headerFingerprintPrior | `sha256:100df2f2285c57a909981f9248564af4f788a1ea653fd261122e9a64064773ad` |
| skillVersion | `2026.08.25.01` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.08.31.2` |
| writtenAt | `2026-09-05T19:15:00.000Z` |

## Decisions

- Typed alias `/csdl-bieu-10` + hub · formNo **10** · typed **21** · 2 section
- Persist shell + `rmms_csdl_bieu10` 1:1 · migration `20260905184300_Schema_CsdlBieu10`
- heightM↔WidthM · wallKind EN+label_vn · crest flat optional · LeaveConfirm · road-route P1
- Peer toolbar `so-ts-retaining` · XLS OUT · API keep `asset/csdl-records` · BFF proxy · **cấm ERP.***

## APIs

- GET/POST/PUT/DELETE `/api/v1/asset/csdl-records` · resource=`retaining-walls` · filter `wallKind`
- LKP road-route `/integration/road-routes/search`
- BFF `/web-bff/api/v1/asset/csdl-records` proxy

## Artifacts

| Kind | Path |
|------|------|
| implement | `specs/csdl-bieu-10/implement/csdl-bieu-10.md` |
| FE | `Linm.Web.RMMS.Asset/src/pages/CsdlBieu10Page/*` |
| BE entity | `…/Entities/CsdlBieu10Entity.cs` |
| migration | `…/Migrations/20260905184300_Schema_CsdlBieu10.cs` |
| STATUS | `specs/csdl-bieu-10/STATUS.md` |

## Debt

- DB migrate apply · Auth DEFER · org/province P2 · XLS OUT

## Next

| Role | Need |
|------|------|
| **QA** | e2e `/agent-qa*` · T-QA-* |
| Review | after QA |

## UNCLEAR

- none

## Cấm (compact)

ERP.* · e2e/start:std @ Dev · invent API · detail* only · Guid IdCode · merge Sổ TS · CrestDitch child · BFF remap heightM
