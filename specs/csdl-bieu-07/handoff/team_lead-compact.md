# handoff-compact — team_lead · csdl-bieu-07

| | |
|--|--|
| schemaVersion | `1` |
| role | `team_lead` |
| feature | `csdl-bieu-07` |
| title | CSDL Biểu 07 — Lề / taluy / hàng rào |
| packKind | `list` |
| changeScope | `new_page` |
| status | `done` |
| taskId | `task_02e3c2e7` |
| saTaskId | `task_b41ac662` |
| resource | `shoulders-fences` |
| formNo | `07` |
| columns | `20` |
| IdCode | `LE-` |
| peerSoTs | `SHOULDER` |
| formPattern | **Kind D Slideout** 2col · **3 section** · **cấm** Full-page |
| Kind | **B** A–D+F · **D** Slideout Z1–Z3 |
| route_confirm | **`route_a`** `/csdl-bieu-07` + hub |
| team_lead_confirm | **approve** (autoApprove ON) |
| design_confirm | approve |
| solution_confirm | approve |
| autoApprove | `ON` |
| e2eQa | `ON` (queued `/agent-qa*` only) |
| domain | **Asset** · `api/v1/asset/csdl-records` |
| entity | shell + `CsdlBieu7Entity` · `Schema_CsdlBieu7` |
| gates | tz_na · xco_get_only · share_tenant |
| contentHashPrior | `sha256:5634091e7ce3e5272c090320398a76d75f84ed7326366e93e088ff2154e8bf44` |
| headerFingerprintPrior | `sha256:ba33856d00d23440b05be8c78c8b8a5462662c96a1067e702b791eb5020d64cf` |
| skillVersion | `2026.08.25.01` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.08.31.2` |
| writtenAt | `2026-09-05T16:45:00.000Z` |

## Decisions

- changeScope=`new_page` · packKind=`list` · typed **20 cột** · 3 section lề/taluy/HR · **cấm** detail* only
- route_confirm **route_a** alias `/csdl-bieu-07` + hub `?resource=shoulders-fences`
- T-REN-01 formNo 10→07 · Q-SIDE **shared** · Q-SLOPE **map_clearing** · Q-FENCE-LEN **km**↔FenceLengthM · Q-PANEL **omit_p1** · Q-STRUCT **lookup_seed** · Q-PROV **keep_static** P1
- Persist shell + Schema_CsdlBieu7 · migration **Dev/4b** · **cấm** parent *Json
- API **giữ** `asset/csdl-records` · BFF proxy · **cấm ERP.***
- road-route SearchInput P1 · org/XLS/FencePanelCount **OUT/DEFER** · peer deep-link · **cấm** merge Sổ TS · map none
- Grid AC YES · Leave YES · Report N/A
- open Q: **none**

## Artifacts

| Kind | Path |
|------|------|
| task | `specs/csdl-bieu-07/task/csdl-bieu-07.md` |
| solution | `specs/csdl-bieu-07/be/solution-discovery.md` |
| design | `specs/csdl-bieu-07/ui/design.md` |
| STATUS | `specs/csdl-bieu-07/STATUS.md` |

## Task matrix (ids)

T-DM-01 · T-REN-01 · T-CTX-01 · T-BE-01..05 · T-BFF-01 · T-PERM-01 · T-BE-UISCHEMA-01 · T-UI-LIST/FILTER/CFG/FORM/LEAVE/ACT/LKP/FIELD/PROD/UX/RESP · T-OUT-01/02 · T-QA-CRUD/FORM/FILTER/UNIT/TYP/TAB/ROUTE

SA map: T-FE-01→LIST · 02→FORM · 03→FILTER+LKP · 04→LEAVE+ACT · 05→PROD · 06→UISCHEMA

## Screens / zones (ids only)

- S-LIST · S-FORM-C/E/V/Copy · S-ACT-DELETE · S-HUB-ENTRY · S-PEER-SOTS · S-SKIP-MAP
- mfeStdUrl=`http://localhost:9301/csdl-bieu-07`
- hub=`http://localhost:9301/so-ts/csdl-so-sach?resource=shoulders-fences`

## Next

| Role | Need |
|------|------|
| **Dev** | implement · T-* · Schema_CsdlBieu7 @ 4b |
| QA | e2e queued `/agent-qa*` |
| Review | after QA |

## UNCLEAR

- none

## Cấm (compact)

ERP.* · invent API · detail* only · Guid IdCode · merge Sổ TS · parent *Json · FencePanelCount P1 · implement code ở TL · Step 4b/migration/e2e/build/start:std ở TL · start role khác
