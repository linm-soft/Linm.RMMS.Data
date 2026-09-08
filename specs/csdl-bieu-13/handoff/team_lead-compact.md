# handoff-compact — team_lead · csdl-bieu-13

| | |
|--|--|
| schemaVersion | `1` |
| role | `team_lead` |
| feature | `csdl-bieu-13` |
| title | CSDL Biểu 13 — Tường chống ồn |
| packKind | `list` |
| changeScope | `new_page` |
| status | `done` |
| taskId | `task_a0486d94` |
| saTaskId | `task_66b443d8` |
| resource | `noise-barriers` |
| formNo | `13` |
| columns | `13` · section vị trí + kích thước |
| IdCode | `TC-` |
| peerSoTs | `so-ts-noise-barrier` · **cấm** merge · none_p1 |
| formPattern | **Kind D Slideout** 2col · Z2 Kích thước · **cấm** Full-page |
| Kind | **B** A–D+F · **D** Slideout Z1–Z3 |
| dim | lengthM/heightM/areaM2 ≥0 · area **manual** · reject all-zero |
| side | L/R/C/Both LOOKUP · **no_type_keep_13** |
| route_confirm | **`route_a`** `/csdl-bieu-13` + hub NEW |
| team_lead_confirm | **approve** (autoApprove ON) |
| design_confirm | approve |
| solution_confirm | approve |
| autoApprove | `ON` |
| e2eQa | `ON` (queued `/agent-qa*` only) |
| domain | **Asset** · `api/v1/asset/csdl-records` |
| entity | shell + `CsdlBieu13Entity` · `Schema_CsdlBieu13` |
| gates | tz_na · xco_get_only · share_tenant |
| contentHashPrior | `sha256:39a45de0a9b834c65373e6c20d1664ab43144ff60d97bae4f0d886ad09d91e3a` |
| headerFingerprintPrior | `sha256:31dbc83200b511c9d61333b1cdb94e2880778980a3b21970be414e926db29008` |
| skillVersion | `2026.08.25.01` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.08.31.2` |
| writtenAt | `2026-09-05T14:00:00.000Z` |

## Decisions

- changeScope=`new_page` · packKind=`list` · typed **13 cột** · section kích thước · **cấm** detail* only · **cấm** 2 entity
- route_confirm **route_a** alias `/csdl-bieu-13` + hub NEW `?resource=noise-barriers`
- Q-ROUTE alias_now · Q-PROV keep_static · Q-BARRIER-TYPE no_type_keep_13 · Q-AREA-DERIVE manual · Q-PREFIX TC · Q-LIST-COLS subset · Q-TITLE ctx_tuong · Q-DMAP add_now · Q-PEER-LINK none_p1
- Persist shell + Schema_CsdlBieu13 1:1 · dim flat · migration **Dev/4b** · **cấm** parent *Json
- API **giữ** `asset/csdl-records` · BFF proxy · **cấm ERP.***
- road-route SearchInput P1 · org/XLS **OUT/DEFER** · peer cite only · **cấm** merge · map none · GAP-CSDL-CUC-11 · GAP-BIEU13-HUB-01
- Grid AC YES · Leave YES · Report N/A
- open Q: **none**

## Artifacts

| Kind | Path |
|------|------|
| task | `specs/csdl-bieu-13/task/csdl-bieu-13.md` |
| solution | `specs/csdl-bieu-13/be/solution-discovery.md` |
| design | `specs/csdl-bieu-13/ui/design.md` |
| STATUS | `specs/csdl-bieu-13/STATUS.md` |

## Task matrix (ids)

T-DM-01 · T-CTX-01 · T-BE-01..06 · T-BFF-01 · T-PERM-01 · T-BE-UISCHEMA-01 · T-UI-LIST/FILTER/CFG/FORM/LEAVE/ACT/LKP/FIELD/PROD/UX/RESP · T-OUT-01/02 · T-QA-CRUD/FORM/FILTER/DIM/SIDE/TYP/TAB/ROUTE

SA map: T-FE-01→LIST · 02→FILTER · 03→FORM · 04→LKP · 05→PROD · 06→LEAVE+ACT · T-BE-01 entity · 02 migr · 03 DTO · 04 IdCode · 05 list · 06 soft/UiSchema

## Screens / zones (ids only)

- S-LIST · S-FORM-C/E/V/Copy · S-ACT-DELETE · S-HUB-ENTRY · S-SKIP-PEER · S-SKIP-MAP
- mfeStdUrl=`http://localhost:9301/csdl-bieu-13`
- hub=`http://localhost:9301/so-ts/csdl-so-sach?resource=noise-barriers`

## Next

| Role | Need |
|------|------|
| **Dev** | implement · T-* · Schema_CsdlBieu13 @ 4b · typed 13 · hub NEW |
| QA | e2e queued `/agent-qa*` |
| Review | after QA |

## UNCLEAR

- none

## Cấm (compact)

ERP.* · invent API · detail* only · Guid IdCode · merge so-ts-noise-barrier/road-assets · parent *Json · 2 entity · invent barrierType · implement code ở TL · Step 4b/migration/e2e/build/start:std ở TL · start role khác
