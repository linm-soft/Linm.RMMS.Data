# handoff-compact — team_lead · csdl-bieu-08

| | |
|--|--|
| schemaVersion | `1` |
| role | `team_lead` |
| feature | `csdl-bieu-08` |
| title | CSDL Biểu 08 — Hệ thống ATGT |
| packKind | `list` |
| changeScope | `new_page` |
| status | `done` |
| taskId | `task_b7d81208` |
| saTaskId | `task_53a8d473` |
| resource | `traffic-safety` |
| formNo | `08` |
| columns | `45` · **11 nhóm** |
| IdCode | `AT-` |
| peerSoTs | ATGT types (deep-link) |
| formPattern | **Kind D Slideout** 2col · **shared+1 child** · **cấm** Full-page |
| Kind | **B** A–D+F · **D** Slideout Z1–Z3 |
| route_confirm | **`route_a`** `/csdl-bieu-08` + hub |
| team_lead_confirm | **approve** (autoApprove ON) |
| design_confirm | approve |
| solution_confirm | approve |
| autoApprove | `ON` |
| e2eQa | `ON` (queued `/agent-qa*` only) |
| domain | **Asset** · `api/v1/asset/csdl-records` |
| entity | shell + `CsdlBieu8Entity` + **11 children** · `Schema_CsdlBieu8` |
| gates | tz_na · xco_get_only · share_tenant |
| contentHashPrior | `sha256:f972c82727726d256754d076435f9ef97c993b4f9844dc79e50b6415fcaf54be` |
| headerFingerprintPrior | `sha256:ba8b8db4f7637ee32cfd4a882b6abdc774c538f6c9812c3ecd1d13f6151cdd6f` |
| skillVersion | `2026.08.25.01` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.08.31.2` |
| writtenAt | `2026-09-05T17:20:00.000Z` |

## Decisions

- changeScope=`new_page` · packKind=`list` · typed **45/11** · shared+1 child · **cấm** detail* only · **cấm** wide 45 entity
- route_confirm **route_a** alias `/csdl-bieu-08` + hub `?resource=traffic-safety`
- T-REN-01 formNo 7→08 · Q-CHILD **child_tables** · Q-TYPE-UX **confirm** clear · Q-LIST-COLS **subset_by_type** · Q-MARKER-KIND **lookup_static** · Q-PROV **keep_static** P1 · Q-REN-LABEL **with_typed** · Q-PEER **optional** deep-link
- Persist shell + Schema_CsdlBieu8 parent + 11 children · migration **Dev/4b** · **cấm** parent *Json
- API **giữ** `asset/csdl-records` · BFF proxy · **cấm ERP.***
- road-route SearchInput P1 · org/XLS **OUT/DEFER** · peer ATGT deep-link · **cấm** merge Sổ TS · map none
- **Retry Dev 2026-09-05:** GIỮ `CsdlBieu08Page`+`FormSlideout`+`Schema_CsdlBieu8` · hub card `traffic-safety` → `/csdl-bieu-08` · **cấm** generic `CsdlFormSlideout` · peer map theo `assetType` · formNo 08 unique
- Grid AC YES · Leave YES · Report N/A
- open Q: **none**

## Artifacts

| Kind | Path |
|------|------|
| task | `specs/csdl-bieu-08/task/csdl-bieu-08.md` |
| solution | `specs/csdl-bieu-08/be/solution-discovery.md` |
| design | `specs/csdl-bieu-08/ui/design.md` |
| STATUS | `specs/csdl-bieu-08/STATUS.md` |

## Task matrix (ids)

T-DM-01 · T-REN-01 · T-CTX-01 · T-BE-01..05 · T-BFF-01 · T-PERM-01 · T-BE-UISCHEMA-01 · T-UI-LIST/FILTER/CFG/FORM/LEAVE/ACT/LKP/FIELD/PROD/UX/RESP · T-OUT-01/02 · T-QA-CRUD/FORM/FILTER/TYPE/TYP/TAB/ROUTE

SA map: T-FE-01→LIST · 02→FORM · 03→FILTER+LKP · 04→LEAVE+ACT · 05→PROD · 06→UISCHEMA

## Screens / zones (ids only)

- S-LIST · S-FORM-C/E/V/Copy · S-ACT-DELETE · S-HUB-ENTRY · S-PEER-SOTS · S-SKIP-MAP
- mfeStdUrl=`http://localhost:9301/csdl-bieu-08`
- hub=`http://localhost:9301/so-ts/csdl-so-sach?resource=traffic-safety`

## Next

| Role | Need |
|------|------|
| **Dev** | retry · GIỮ typed page/form · hub `traffic-safety` → `/csdl-bieu-08` · peer map · formNo 08 unique |
| QA | e2e queued `/agent-qa*` |
| Review | after QA |

## UNCLEAR

- none

## Cấm (compact)

ERP.* · invent API · detail* only · wide 45 · Guid IdCode · merge Sổ TS · parent *Json · implement code ở TL · Step 4b/migration/e2e/build/start:std ở TL · start role khác
