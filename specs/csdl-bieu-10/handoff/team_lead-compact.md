# handoff-compact — team_lead · csdl-bieu-10

| | |
|--|--|
| schemaVersion | `1` |
| role | `team_lead` |
| feature | `csdl-bieu-10` |
| title | CSDL Biểu 10 — Kè, tường chắn |
| packKind | `list` |
| changeScope | `new_page` |
| status | `done` |
| taskId | `task_dbe17f40` |
| saTaskId | `task_652dcd09` |
| resource | `retaining-walls` |
| formNo | `10` |
| columns | `21` · **2 section** tường + rãnh đỉnh |
| IdCode | `KE-` |
| peerSoTs | `so-ts-retaining` (toolbar · ≠ merge) |
| formPattern | **Kind D Slideout** 2col · **2 section** · **cấm** Full-page |
| Kind | **B** A–D+F · **D** Slideout Z1–Z3 · Z2b crest |
| heightAlias | UI `heightM` ↔ DB `WidthM` |
| crest | optional_flat 4 · **cấm** CrestDitch child P1 |
| route_confirm | **`route_a`** `/csdl-bieu-10` + hub |
| team_lead_confirm | **approve** (autoApprove ON) |
| design_confirm | approve |
| solution_confirm | approve |
| autoApprove | `ON` |
| e2eQa | `ON` (queued `/agent-qa*` only) |
| domain | **Asset** · `api/v1/asset/csdl-records` |
| entity | shell + `CsdlBieu10Entity` · `Schema_CsdlBieu10` |
| gates | tz_na · xco_get_only · share_tenant |
| contentHashPrior | `sha256:56715ebbcfffd0589eab296a31137e79a82b49c672dc14582fc554f4ed262346` |
| headerFingerprintPrior | `sha256:100df2f2285c57a909981f9248564af4f788a1ea653fd261122e9a64064773ad` |
| skillVersion | `2026.08.25.01` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.08.31.2` |
| writtenAt | `2026-09-05T18:45:00.000Z` |

## Decisions

- changeScope=`new_page` · packKind=`list` · typed **21 cột** · 2 section tường+rãnh · **cấm** detail* only · **cấm** 2 entity · **cấm** CrestDitch child
- route_confirm **route_a** alias `/csdl-bieu-10` + hub `?resource=retaining-walls`
- T-REN-01 formNo 9→10 · Q-KIND **label_vn** Gravity/Gabion/RC/Retaining · Q-STRUCT **excel_seed** · Q-MAT **lookup** · Q-HEIGHT **height_alias** · Q-CREST **optional_flat** · Q-AREA **optional** · Q-LIST-COLS **subset** · Q-PROV **keep_static** · Q-REN-LABEL **with_typed** · Q-PEER **toolbar**
- Persist shell + Schema_CsdlBieu10 1:1 · crest flat · migration **Dev/4b** · **cấm** parent *Json
- API **giữ** `asset/csdl-records` · BFF proxy · **cấm** BFF remap heightM · **cấm ERP.***
- road-route SearchInput P1 · org/XLS **OUT/DEFER** · peer toolbar `so-ts-retaining` · **cấm** merge · map none · GAP-CSDL-CUC-11
- Grid AC YES · Leave YES · Report N/A
- open Q: **none**

## Artifacts

| Kind | Path |
|------|------|
| task | `specs/csdl-bieu-10/task/csdl-bieu-10.md` |
| solution | `specs/csdl-bieu-10/be/solution-discovery.md` |
| design | `specs/csdl-bieu-10/ui/design.md` |
| STATUS | `specs/csdl-bieu-10/STATUS.md` |

## Task matrix (ids)

T-DM-01 · T-REN-01 · T-CTX-01 · T-BE-01..06 · T-BFF-01 · T-PERM-01 · T-BE-UISCHEMA-01 · T-UI-LIST/FILTER/CFG/FORM/LEAVE/ACT/LKP/FIELD/PROD/UX/RESP · T-OUT-01/02 · T-QA-CRUD/FORM/FILTER/KIND/CREST/TYP/TAB/ROUTE

SA map: T-FE-01→LIST · 02→FORM · 03→FILTER+LKP · 04→LEAVE+ACT · 05→PROD · 06→BE-06/UISCHEMA

## Screens / zones (ids only)

- S-LIST · S-FORM-C/E/V/Copy · S-ACT-DELETE · S-HUB-ENTRY · S-PEER · S-SKIP-MAP
- mfeStdUrl=`http://localhost:9301/csdl-bieu-10`
- hub=`http://localhost:9301/so-ts/csdl-so-sach?resource=retaining-walls`
- peer=`/so-ts-retaining`

## Next

| Role | Need |
|------|------|
| **Dev** | implement · T-* · Schema_CsdlBieu10 @ 4b · heightM↔WidthM |
| QA | e2e queued `/agent-qa*` |
| Review | after QA |

## UNCLEAR

- none

## Cấm (compact)

ERP.* · invent API · detail* only · Guid IdCode · merge Sổ TS · parent *Json · CrestDitch child · 2 entity · BFF remap heightM · implement code ở TL · Step 4b/migration/e2e/build/start:std ở TL · start role khác
