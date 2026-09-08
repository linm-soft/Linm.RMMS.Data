# handoff-compact — team_lead · csdl-bieu-06

| | |
|--|--|
| schemaVersion | `1` |
| role | `team_lead` |
| feature | `csdl-bieu-06` |
| title | CSDL Biểu 06 — Hầm chui DS + hộp KT |
| packKind | `list` |
| changeScope | `new_page` |
| status | `done` |
| taskId | `task_149f14d2` |
| saTaskId | `task_789a57e3` |
| resource | `underpasses` |
| formNo | `06` |
| columns | `19` |
| IdCode | `HC-` |
| peerSoTs | `so-ts-underpass` |
| formPattern | **Kind D Slideout** 2col · **cấm** Full-page |
| Kind | **B** A–D+F · **D** Slideout Z1–Z3 |
| route_confirm | **`route_a`** `/csdl-bieu-06` + hub |
| team_lead_confirm | **approve** (autoApprove ON) |
| design_confirm | approve |
| solution_confirm | approve |
| autoApprove | `ON` |
| e2eQa | `ON` (queued `/agent-qa*` only) |
| domain | **Asset** · `api/v1/asset/csdl-records` |
| entity | shell + `CsdlBieu6Entity` · `Schema_CsdlBieu6` |
| gates | tz_na · xco_get_only · share_tenant |
| contentHashPrior | `sha256:ffc5c8381b04dcec3f0376df87187012f34b16bf211a3e3fb7311a8375a386f0` |
| headerFingerprintPrior | `sha256:3b2f5c531f0538509147846466d92090a3c8f5adc05a4be6d1dbb80ad73ff2a7` |
| skillVersion | `2026.08.25.01` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.08.31.2` |
| writtenAt | `2026-09-05T14:30:00.000Z` |

## Decisions

- changeScope=`new_page` · packKind=`list` · typed **19 cột** · **cấm** detail* only
- route_confirm **route_a** alias `/csdl-bieu-06` + hub `?resource=underpasses`
- Q-KIND **hc_ds_hop_kt** · Q-APERTURE **number_m** · Q-PIPE **optional** · Q-LOAD **lookup_hl** · Q-LIGHT/DRAIN **yes_no** · Q-PROV **keep_static** P1
- kmPoint Point · **không** ép kmTo · road-route SearchInput P1
- Persist shell + Schema_CsdlBieu6 · migration **Dev/4b** · **cấm** parent *Json
- API **giữ** `asset/csdl-records` · BFF proxy · **cấm ERP.***
- org/XLS **OUT/DEFER** · peer deep-link · **cấm** merge Sổ TS · map none
- Grid AC YES · Leave YES · Report N/A
- open Q: **none**

## Artifacts

| Kind | Path |
|------|------|
| task | `specs/csdl-bieu-06/task/csdl-bieu-06.md` |
| solution | `specs/csdl-bieu-06/be/solution-discovery.md` |
| design | `specs/csdl-bieu-06/ui/design.md` |
| STATUS | `specs/csdl-bieu-06/STATUS.md` |

## Task matrix (ids)

T-DM-01 · T-CTX-01 · T-BE-01..05 · T-BFF-01 · T-PERM-01 · T-BE-UISCHEMA-01 · T-UI-LIST/FILTER/CFG/FORM/LEAVE/ACT/LKP/FIELD/PROD/UX/RESP · T-OUT-01 · T-QA-CRUD/FORM/FILTER/TYP/TAB/ROUTE

SA map: T-FE-01→LIST · 02→FORM · 03→FILTER+LKP · 04→LEAVE+ACT · 05→PROD · 06→UISCHEMA

## Screens / zones (ids only)

- S-LIST · S-FORM-C/E/V/Copy · S-ACT-DELETE · S-HUB-ENTRY · S-PEER-SOTS · S-SKIP-MAP
- mfeStdUrl=`http://localhost:9301/csdl-bieu-06`
- hub=`http://localhost:9301/so-ts/csdl-so-sach?resource=underpasses`

## Next

| Role | Need |
|------|------|
| **Dev** | implement · T-* · Schema_CsdlBieu6 @ 4b |
| QA | e2e queued `/agent-qa*` |
| Review | after QA |

## UNCLEAR

- none

## Cấm (compact)

ERP.* · invent API · detail* only · Guid IdCode · merge Sổ TS · parent *Json · implement code ở TL · Step 4b/migration/e2e/build/start:std ở TL · start role khác
