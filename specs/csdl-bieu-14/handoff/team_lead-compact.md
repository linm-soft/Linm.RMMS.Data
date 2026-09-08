# handoff-compact — team_lead · csdl-bieu-14

| | |
|--|--|
| schemaVersion | `1` |
| role | `team_lead` |
| feature | `csdl-bieu-14` |
| title | CSDL Biểu 14 — Hệ thống ITS (GTTM) |
| packKind | `list` |
| changeScope | `new_page` |
| status | `done` |
| taskId | `task_b21db737` |
| saTaskId | `task_c534e53a` |
| resource | `its-systems` |
| formNo | `14` |
| columns | `21` · section vị trí + TB ITS + HT gắn kèm |
| IdCode | `IT-` |
| peerSoTs | `so-ts-its-camera` · **cấm** merge · none_p1 · **cấm** AiVision |
| formPattern | **Kind D Slideout** 2col · Z2 TB · Z3 HT · **cấm** Full-page |
| Kind | **B** A–D+F · **D** Slideout Z1–Z3 |
| device | keep_5 · brand · techSpec · qtyOrLength ≥0 · operatingStatus |
| infra | keep_3 · clearanceM · infraQty · systemStatus · yearBuilt |
| gps | gpsLat/gpsLng · direction LOOKUP |
| route_confirm | **`route_a`** `/csdl-bieu-14` + hub NEW |
| team_lead_confirm | **approve** (autoApprove ON) |
| design_confirm | approve |
| solution_confirm | approve |
| autoApprove | `ON` |
| e2eQa | `ON` (queued `/agent-qa*` only) |
| domain | **Asset** · `api/v1/asset/csdl-records` |
| entity | shell + `CsdlBieu14Entity` · `Schema_CsdlBieu14` |
| gates | tz_na · xco_get_only · share_tenant |
| contentHashPrior | `sha256:6cfdefa3baaffcf2bd97c7a429bb5043e7f9d77b96bbb77eafaa34689007b112` |
| headerFingerprintPrior | `sha256:14cd156a898dcc971a072dd1cd1b92460a8b597558a90dc9854fead9d4c4de5c` |
| skillVersion | `2026.08.25.01` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.08.31.2` |
| writtenAt | `2026-09-05T15:20:00.000Z` |

## Decisions

- changeScope=`new_page` · packKind=`list` · typed **21 cột** · Z2 TB · Z3 HT · **cấm** detail* only · **cấm** 2 entity
- route_confirm **route_a** alias `/csdl-bieu-14` + hub NEW `?resource=its-systems`
- Q-ROUTE alias_now · Q-PROV keep_static · Q-DIR lookup · Q-QTY-UNIT number · Q-DEVICE-SET keep_5 · Q-INFRA-SET keep_3 · Q-MANAGE trail_p2 · Q-PREFIX IT · Q-LIST-COLS subset · Q-TITLE ctx_its · Q-DMAP add_now · Q-PEER-LINK none_p1 · Q-SO09 none_p1
- Persist shell + Schema_CsdlBieu14 1:1 · Device*/Infra*/Gps* flat · migration **Dev/4b** · **cấm** parent *Json
- API **giữ** `asset/csdl-records` · BFF proxy · **cấm ERP.***
- road-route SearchInput P1 · org/XLS **OUT/DEFER** · peer cite only · **cấm** merge/AiVision · map none · GAP-CSDL-CUC-11 · GAP-BIEU14-HUB-01
- Grid AC YES · Leave YES · Report N/A
- open Q: **none**

## Artifacts

| Kind | Path |
|------|------|
| task | `specs/csdl-bieu-14/task/csdl-bieu-14.md` |
| solution | `specs/csdl-bieu-14/be/solution-discovery.md` |
| design | `specs/csdl-bieu-14/ui/design.md` |
| STATUS | `specs/csdl-bieu-14/STATUS.md` |

## Task matrix (ids)

T-DM-01 · T-CTX-01 · T-BE-01..06 · T-BFF-01 · T-PERM-01 · T-BE-UISCHEMA-01 · T-UI-LIST/FILTER/CFG/FORM/LEAVE/ACT/LKP/FIELD/PROD/UX/RESP · T-OUT-01/02 · T-QA-CRUD/FORM/FILTER/DEV/INFRA/GPS/TYP/TAB/ROUTE

SA map: T-FE-01→LIST · 02→FILTER · 03→FORM · 04→LKP · 05→PROD · 06→LEAVE+ACT · T-BE-01 entity · 02 migr · 03 DTO · 04 IdCode · 05 list · 06 soft/UiSchema

## Screens / zones (ids only)

- S-LIST · S-FORM-C/E/V/Copy · S-ACT-DELETE · S-HUB-ENTRY · S-SKIP-PEER · S-SKIP-MAP
- mfeStdUrl=`http://localhost:9301/csdl-bieu-14`
- hub=`http://localhost:9301/so-ts/csdl-so-sach?resource=its-systems`

## Next

| Role | Need |
|------|------|
| **Dev** | implement · T-* · Schema_CsdlBieu14 @ 4b · typed 21 · hub NEW |
| QA | e2e queued `/agent-qa*` |
| Review | after QA |

## UNCLEAR

- none

## Cấm (compact)

ERP.* · invent API/infra · detail* only · Guid IdCode · merge so-ts-its-camera/road-assets/AiVision · parent *Json · 2 entity · implement code ở TL · Step 4b/migration/e2e/build/start:std ở TL · start role khác
