# handoff-compact — team_lead · csdl-bieu-01

| | |
|--|--|
| schemaVersion | `1` |
| role | `team_lead` |
| feature | `csdl-bieu-01` |
| title | CSDL Biểu 01 — Phân loại mặt đường |
| packKind | `list` |
| changeScope | `new_page` |
| status | `done` |
| taskId | `task_b3159dbc` |
| saTaskId | `task_2a18844f` |
| resource | `pavement-sections` |
| formNo | `01` |
| columns | `38` |
| IdCode | `MD-` |
| peerSoTs | `pavement-section` |
| formPattern | **Kind D Slideout** 2col · **cấm** Full-page |
| Kind | **B** A–D+F+H · **D** Slideout Z1–Z3 |
| route_confirm | **`route_a`** `/csdl-bieu-01` + hub |
| team_lead_confirm | **approve** (autoApprove ON) |
| design_confirm | approve |
| solution_confirm | approve |
| autoApprove | `ON` |
| e2eQa | `ON` (queued `/agent-qa*` only) |
| domain | **Asset** · `api/v1/asset/csdl-records` |
| entity | shell + `CsdlBieu1Entity` · `Schema_CsdlBieu1` |
| gates | tz_na · xco_get_only · share_tenant |
| contentHashPrior | `sha256:3545960f4006740c9dfe57b5f004fa4a1cd1b7befbcd51e35e2168e16821b65e` |
| headerFingerprintPrior | `sha256:6376475bbf48ca5b3e8cfd26688cd877fd1bc77d5b8d8c4c3d314cd0572f5cf2` |
| skillVersion | `2026.08.25.01` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.08.31.2` |
| writtenAt | `2026-09-05T12:30:00.000Z` |

## Decisions

- changeScope=`new_page` · packKind=`list` · typed **38 cột** · **cấm** detail* only
- route_confirm **route_a** alias `/csdl-bieu-01` + hub `?resource=pavement-sections`
- Q-WIDTH **four_buckets** · Q-STRUCT **one_enum** · Q-PROV **keep_static** P1
- Persist shell + Schema_CsdlBieu1 · migration **Dev/4b** · **cấm** parent *Json
- API **giữ** `asset/csdl-records` · BFF proxy · **cấm ERP.***
- road-route SearchInput P1 · org/XLS/skip-bridge **OUT/DEFER**
- Peer deep-link · **cấm** merge Sổ TS · map none
- Grid AC YES · Leave YES · Report N/A
- open Q: **none**

## Artifacts

| Kind | Path |
|------|------|
| task | `specs/csdl-bieu-01/task/csdl-bieu-01.md` |
| solution | `specs/csdl-bieu-01/be/solution-discovery.md` |
| design | `specs/csdl-bieu-01/ui/design.md` |
| STATUS | `specs/csdl-bieu-01/STATUS.md` |

## Task matrix (ids)

T-DM-01 · T-CTX-01 · T-BE-01..05 · T-BFF-01 · T-PERM-01 · T-BE-UISCHEMA-01 · T-UI-LIST/FILTER/CFG/FORM/LEAVE/ACT/LKP/FIELD/PROD/UX/RESP · T-OUT-01 · T-QA-CRUD/FORM/FILTER/TYP/TAB/ROUTE

SA map: T-FE-01→LIST · 02→FORM · 03→FILTER+LKP · 04→LEAVE+ACT · 05→PROD · 06→UISCHEMA

## Screens / zones (ids only)

- S-LIST · S-FORM-C/E/V/Copy · S-ACT-DELETE · S-HUB-ENTRY · S-PEER-SOTS · S-SKIP-MAP
- mfeStdUrl=`http://localhost:9301/csdl-bieu-01`
- hub=`http://localhost:9301/so-ts/csdl-so-sach?resource=pavement-sections`

## Next

| Role | Need |
|------|------|
| **Dev** | implement · T-* · Schema_CsdlBieu1 @ 4b |
| QA | e2e queued `/agent-qa*` |
| Review | after QA |

## UNCLEAR

- none

## Cấm (compact)

ERP.* · invent API · detail* only · Guid IdCode · merge Sổ TS · parent *Json · implement code ở TL · Step 4b/migration/e2e/build/start:std ở TL · start role khác
