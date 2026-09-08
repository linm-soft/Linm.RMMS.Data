# handoff-compact — dev · csdl-bieu-07

| | |
|--|--|
| schemaVersion | `1` |
| role | `dev` |
| feature | `csdl-bieu-07` |
| title | CSDL Biểu 07 — Lề / taluy / hàng rào |
| packKind | `list` |
| changeScope | `new_page` |
| status | `done` |
| taskId | `task_457e5414` |
| tlTaskId | `task_02e3c2e7` |
| resource | `shoulders-fences` |
| formNo | `07` |
| columns | `20` |
| IdCode | `LE-` |
| peerSoTs | `SHOULDER` |
| formPattern | **Kind D Slideout** 2col · **3 section** |
| Kind | **B** A–D+F · **D** Slideout Z1–Z3 |
| route_confirm | `route_a` `/csdl-bieu-07` + hub |
| domain | **Asset** · `api/v1/asset/csdl-records` |
| entity | shell + `CsdlBieu7Entity` · `Schema_CsdlBieu7` |
| mfeStdUrl | `http://localhost:9301/csdl-bieu-07` |
| yarnBuild | **PASS** |
| dotnetBuild | **PASS** |
| e2eQa | ON (queued `/agent-qa*` only · **cấm** e2e @ Dev) |
| contentHashPrior | `sha256:5634091e7ce3e5272c090320398a76d75f84ed7326366e93e088ff2154e8bf44` |
| skillVersion | `2026.08.25.01` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.08.31.2` |
| writtenAt | `2026-09-05T17:00:00.000Z` |

## Decisions

- Typed 20 cột · 3 section lề/taluy/HR · **cấm** detail* SSOT · **cấm** FencePanelCount P1
- FenceLengthKm UI ↔ FenceLengthM DB ×1000 · slopeLengthM↔SlopeClearingM 1:1
- List filters: side (shell) · fenceKind (typed) · roadCode · km range
- Hub formNo 7 · AT→10 · DOMAIN-MAP `csdl-bieu-07`→Asset
- UiSchema catalogKind `shoulders-fences` · `buildDynamicGridColumns`
- BFF proxy only · no unit convert at BFF
- open Q: **none**

## APIs

| id | Method | Path |
|----|--------|------|
| API-01 | GET | `/api/v1/asset/csdl-records?resource=shoulders-fences&…` |
| API-02 | GET | `/api/v1/asset/csdl-records/{id}` |
| API-03 | POST | `/api/v1/asset/csdl-records` |
| API-04 | PUT | `/api/v1/asset/csdl-records/{id}` |
| API-05 | DELETE | `/api/v1/asset/csdl-records/{id}` |
| API-LKP-01 | GET | `/api/v1/integration/road-routes/search` |

BFF: `/web-bff/api/v1/asset/csdl-records/**` proxy.

## Artifacts

| Kind | Path |
|------|------|
| implement | `specs/csdl-bieu-07/implement/csdl-bieu-07.md` |
| FE | `Linm.Web.RMMS.Asset/src/pages/CsdlBieu07Page/` |
| migration | `…/Migrations/20260905094346_Schema_CsdlBieu7.cs` |
| STATUS | `specs/csdl-bieu-07/STATUS.md` |

## Screens / zones

- S-LIST · S-FORM-C/E/V/Copy · S-ACT-DELETE · S-HUB-ENTRY · S-PEER-SOTS · S-SKIP-MAP
- mfeStdUrl=`http://localhost:9301/csdl-bieu-07`
- hub=`http://localhost:9301/so-ts/csdl-so-sach?resource=shoulders-fences`

## Debt

- Auth wire DEFER · org SearchInput P2 · XLS OUT · FencePanelCount P2 · HIST n/a P1

## Next

| Role | Need |
|------|------|
| **QA** | e2e `/agent-qa*` · scenarios |
| Review | after QA |

## UNCLEAR

- none

## Cấm (compact)

ERP.* · invent API · detail* only · Guid IdCode · merge Sổ TS · FencePanelCount P1 · e2e/start:std @ Dev · start role khác
