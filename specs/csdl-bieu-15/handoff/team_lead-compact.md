# handoff-compact — team_lead · csdl-bieu-15

| | |
|--|--|
| schemaVersion | `1` |
| role | `team_lead` |
| feature | `csdl-bieu-15` |
| title | CSDL Biểu 15 — TMC / thu phí / hạt / kho |
| packKind | `list` |
| changeScope | `new_page` |
| status | `done` |
| taskId | `task_94727a59` |
| saTaskId | `task_4d337ade` |
| resource | `ops-facilities` |
| formNo | `15` |
| columns | `20` · section vị trí + công trình + thiết bị + quản lý |
| IdCode | `OF-` |
| peerSoTs | `so-ts-toll` · `so-ts-rest-area` · `so-ts-station-house` · **cấm** merge · none_p1 |
| formPattern | **Kind D Slideout** 2col · Z2 công trình · Z3 TB+QL · **cấm** Full-page |
| Kind | **B** A–D+F · **D** Slideout Z1–Z3 |
| facility | keep_5 · facilityName · status · yearBuilt |
| area | courtyard/building/other · number_m2 · qty ≥0 |
| equipment | free_text · qty · status |
| route_confirm | **`route_a`** `/csdl-bieu-15` + hub NEW |
| team_lead_confirm | **approve** (autoApprove ON) |
| design_confirm | approve |
| solution_confirm | approve |
| autoApprove | `ON` |
| e2eQa | `ON` (queued `/agent-qa*` only) |
| domain | **Asset** · `api/v1/asset/csdl-records` |
| entity | shell + `CsdlBieu15Entity` · `Schema_CsdlBieu15` |
| gates | tz_na · xco_get_only · share_tenant |
| contentHashPrior | `sha256:3bf356f00182dd6c0864bf5b88ae4d460ef8da73e5521f1b14756b7168dc20a7` |
| headerFingerprintPrior | `sha256:0064a4903777f7ea8d51c7423d8451a20daf77a5934929001905edaa380f4fe4` |
| skillVersion | `2026.08.25.01` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.08.31.2` |
| writtenAt | `2026-09-05T15:30:37.000Z` |

## Decisions

- changeScope=`new_page` · packKind=`list` · typed **20 cột** · Z2 công trình · Z3 TB+QL · **cấm** detail* only · **cấm** 2 entity
- route_confirm **route_a** alias `/csdl-bieu-15` + hub NEW `?resource=ops-facilities`
- Q-ROUTE alias_now · Q-PROV keep_static · Q-KIND-SET keep_5 · Q-EQ-SET free_text · Q-AREA-UNIT number_m2 · Q-MANAGE in_20 · Q-PREFIX OF · Q-LIST-COLS subset · Q-TITLE ctx_tmc · Q-DMAP add_now · Q-PEER-LINK none_p1 · Q-KM range
- Persist shell + Schema_CsdlBieu15 1:1 · Facility*/Area*/Equipment* flat · migration **Dev/4b** · **cấm** parent *Json
- API **giữ** `asset/csdl-records` · BFF proxy · **cấm ERP.***
- road-route SearchInput P1 · org/XLS **OUT/DEFER** · peer cite only · **cấm** merge so-ts-* · map none · GAP-CSDL-CUC-11 · GAP-BIEU15-HUB-01
- Grid AC YES · Leave YES · Report N/A
- open Q: **none**

## Artifacts

| Kind | Path |
|------|------|
| task | `specs/csdl-bieu-15/task/csdl-bieu-15.md` |
| solution | `specs/csdl-bieu-15/be/solution-discovery.md` |
| design | `specs/csdl-bieu-15/ui/design.md` |
| STATUS | `specs/csdl-bieu-15/STATUS.md` |

## Task matrix (ids)

T-DM-01 · T-CTX-01 · T-BE-01..06 · T-BFF-01 · T-PERM-01 · T-BE-UISCHEMA-01 · T-UI-LIST/FILTER/CFG/FORM/LEAVE/ACT/LKP/FIELD/PROD/UX/RESP · T-OUT-01/02 · T-QA-CRUD/FORM/FILTER/FAC/AREA/EQ/TYP/TAB/ROUTE

SA map: T-FE-01→LIST · 02→FILTER · 03→FORM · 04→LKP · 05→PROD · 06→LEAVE+ACT · T-BE-01 entity · 02 migr · 03 DTO · 04 IdCode · 05 list · 06 soft/UiSchema

## Screens / zones (ids only)

- S-LIST · S-FORM-C/E/V/Copy · S-ACT-DELETE · S-HUB-ENTRY · S-SKIP-PEER · S-SKIP-MAP
- mfeStdUrl=`http://localhost:9301/csdl-bieu-15`
- hub=`http://localhost:9301/so-ts/csdl-so-sach?resource=ops-facilities`

## Next

| Role | Need |
|------|------|
| **Dev** | implement · T-* · Schema_CsdlBieu15 @ 4b · typed 20 · hub NEW |
| QA | e2e queued `/agent-qa*` |
| Review | after QA |

## UNCLEAR

- none

## Cấm (compact)

ERP.* · invent API/infra · detail* only · Guid IdCode · merge so-ts-toll/rest/station/road-assets · parent *Json · 2 entity · implement code ở TL · Step 4b/migration/e2e/build/start:std ở TL · start role khác
