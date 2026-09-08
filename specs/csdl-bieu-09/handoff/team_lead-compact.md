# handoff-compact — team_lead · csdl-bieu-09

| | |
|--|--|
| schemaVersion | `1` |
| role | `team_lead` |
| feature | `csdl-bieu-09` |
| title | CSDL Biểu 09 — Mốc lộ giới / GPMB |
| packKind | `list` |
| changeScope | `new_page` |
| status | `done` |
| taskId | `task_f4dc1618` |
| saTaskId | `task_fe29c657` |
| resource | `boundary-markers` |
| formNo | `09` |
| columns | `17` · **2 section kind** |
| IdCode | `MK-` |
| peerSoTs | — (none · ≠ road-assets) |
| formPattern | **Kind D Slideout** 2col · **2 section kind** · **cấm** Full-page |
| Kind | **B** A–D+F · **D** Slideout Z1–Z3 |
| route_confirm | **`route_a`** `/csdl-bieu-09` + hub |
| team_lead_confirm | **approve** (autoApprove ON) |
| design_confirm | approve |
| solution_confirm | approve |
| autoApprove | `ON` |
| e2eQa | `ON` (queued `/agent-qa*` only) |
| domain | **Asset** · `api/v1/asset/csdl-records` |
| entity | shell + `CsdlBieu9Entity` · `Schema_CsdlBieu9` |
| gates | tz_na · xco_get_only · share_tenant |
| contentHashPrior | `sha256:863490daf95d2c19ddad660fc05f901eaeb0248fb65961f9e96747ebcf5b04e4` |
| headerFingerprintPrior | `sha256:18fb135f880ed55afa6e9277e8980fd0458a24d85d87e69a753b805424f396bb` |
| skillVersion | `2026.08.25.01` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.08.31.2` |
| writtenAt | `2026-09-05T18:05:00.000Z` |

## Decisions

- changeScope=`new_page` · packKind=`list` · typed **17 cột** · 2 section kind · **cấm** detail* only · **cấm** 2 entity
- route_confirm **route_a** alias `/csdl-bieu-09` + hub `?resource=boundary-markers`
- T-REN-01 formNo 8→09 · Q-KIND-LABEL **code_en** RoadLimit/GPMB · Q-STRUCT **excel_seed** · Q-DIM **full_dim** · Q-QTY **show_always** default 1 · Q-LIST-COLS **subset** · Q-PROV **keep_static** P1 · Q-REN-LABEL **with_typed**
- Persist shell + Schema_CsdlBieu9 1:1 · migration **Dev/4b** · **cấm** parent *Json
- API **giữ** `asset/csdl-records` · BFF proxy · **cấm ERP.***
- road-route SearchInput P1 · org/XLS **OUT/DEFER** · peer **none** · **cấm** merge Sổ TS · map none · GAP-CSDL-CUC-11
- Grid AC YES · Leave YES · Report N/A
- open Q: **none**

## Artifacts

| Kind | Path |
|------|------|
| task | `specs/csdl-bieu-09/task/csdl-bieu-09.md` |
| solution | `specs/csdl-bieu-09/be/solution-discovery.md` |
| design | `specs/csdl-bieu-09/ui/design.md` |
| STATUS | `specs/csdl-bieu-09/STATUS.md` |

## Task matrix (ids)

T-DM-01 · T-REN-01 · T-CTX-01 · T-BE-01..05 · T-BFF-01 · T-PERM-01 · T-BE-UISCHEMA-01 · T-UI-LIST/FILTER/CFG/FORM/LEAVE/ACT/LKP/FIELD/PROD/UX/RESP · T-OUT-01/02 · T-QA-CRUD/FORM/FILTER/KIND/TYP/TAB/ROUTE

SA map: T-FE-01→LIST · 02→FORM · 03→FILTER+LKP · 04→LEAVE+ACT · 05→PROD · 06→UISCHEMA

## Screens / zones (ids only)

- S-LIST · S-FORM-C/E/V/Copy · S-ACT-DELETE · S-HUB-ENTRY · S-SKIP-MAP · **cấm** peer Sổ TS
- mfeStdUrl=`http://localhost:9301/csdl-bieu-09`
- hub=`http://localhost:9301/so-ts/csdl-so-sach?resource=boundary-markers`

## Next

| Role | Need |
|------|------|
| **Dev** | implement · T-* · Schema_CsdlBieu9 @ 4b |
| QA | e2e queued `/agent-qa*` |
| Review | after QA |

## UNCLEAR

- none

## Cấm (compact)

ERP.* · invent API · detail* only · Guid IdCode · merge Sổ TS · parent *Json · 2 entity · implement code ở TL · Step 4b/migration/e2e/build/start:std ở TL · start role khác
