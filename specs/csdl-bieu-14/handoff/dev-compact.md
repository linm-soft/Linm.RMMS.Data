# handoff-compact — dev · csdl-bieu-14

| | |
|--|--|
| schemaVersion | `1` |
| role | `dev` |
| feature | `csdl-bieu-14` |
| title | CSDL Biểu 14 — Hệ thống ITS (GTTM) |
| packKind | `list` |
| changeScope | `new_page` |
| status | `done` |
| taskId | `task_936065ca` |
| resource | `its-systems` |
| formNo | `14` |
| columns | `21` · Z1 vị trí/GPS · Z2 TB · Z3 HT |
| IdCode | `IT-` |
| peerSoTs | `so-ts-its-camera` · cite only · none_p1 |
| formPattern | Kind D Slideout 2col · footer_actions_only |
| Kind | B A–D+F · D Slideout |
| mfeStdUrl | `http://localhost:9301/csdl-bieu-14` |
| hub | `/so-ts/csdl-so-sach?resource=its-systems` |
| domain | Asset · `api/v1/asset/csdl-records` |
| entity | shell + `CsdlBieu14Entity` · `Schema_CsdlBieu14` |
| yarnBuild | **PASS** |
| dotnetBuild | **PASS** |
| e2eQa | ON · queued `/agent-qa*` only |
| contentHashPrior | `sha256:6cfdefa3baaffcf2bd97c7a429bb5043e7f9d77b96bbb77eafaa34689007b112` |
| headerFingerprintPrior | `sha256:14cd156a898dcc971a072dd1cd1b92460a8b597558a90dc9854fead9d4c4de5c` |
| skillVersion | `2026.08.25.01` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.08.31.2` |
| writtenAt | `2026-09-05T15:00:00.000Z` |

## Decisions

- route_a `/csdl-bieu-14` + hub NEW card formNo 14
- typed Device*/Infra*/Gps* flat · **cấm** detail* / parent *Json / ERP.*
- device keep_5 · infra keep_3 · direction T/G/H/U · operatingStatus→shell Status
- list subset: shared + deviceType/brand/operatingStatus/infraKind
- UiSchema catalogKind `its-systems` · buildDynamicGridColumns · Zone F full
- BFF proxy unchanged · migration Dev/4b applied as `20260905150000_Schema_CsdlBieu14`

## Artifacts

| Kind | Path |
|------|------|
| implement | `specs/csdl-bieu-14/implement/csdl-bieu-14.md` |
| FE | `Linm.Web.RMMS.Asset/src/pages/CsdlBieu14Page/` |
| BE entity | `…/Entities/CsdlBieu14Entity.cs` |
| migration | `…/Migrations/20260905150000_Schema_CsdlBieu14.cs` |
| STATUS | `specs/csdl-bieu-14/STATUS.md` |

## APIs

- CRUD `…/asset/csdl-records?resource=its-systems`
- filter: search/province/status/side/deviceType/roadCode/km*
- LKP road-routes/search

## Debt

- Auth wire DEFER · org P2 · XLS OUT · peer/map skip · e2e → QA

## Next

| Role | Need |
|------|------|
| **QA** | e2e `/agent-qa*` · scenarios |
| Review | after QA |

## UNCLEAR

- none

## Cấm (compact)

ERP.* · invent infra API · merge so-ts-its-camera/AiVision · e2e/start:std @ Dev · Guid IdCode
