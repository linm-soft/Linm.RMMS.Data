# handoff-compact — team_lead · csdl-bieu-03

| | |
|--|--|
| schemaVersion | `1` |
| role | `team_lead` |
| feature | `csdl-bieu-03` |
| title | CSDL Biểu 03 — Hầm đường bộ |
| packKind | `list` |
| changeScope | `new_page` |
| status | `done` |
| taskId | `task_fb34ebd6` |
| saTaskId | `task_539bb440` |
| resource | `road-tunnels` |
| formNo | `03` |
| columns | `42` |
| IdCode | `TN-` |
| peerSoTs | none (—) · Sổ 6 QL cầu/hầm deep-link only |
| formPattern | **Kind D Slideout** 2col sectioned · **cấm** Full-page |
| Kind | **B** A–D+F · **D** Slideout Z1–Z3 |
| route_confirm | **`route_a`** `/csdl-bieu-03` + hub |
| team_lead_confirm | **approve** (autoApprove ON) |
| design_confirm | approve |
| solution_confirm | approve |
| autoApprove | `ON` |
| e2eQa | `ON` (queued `/agent-qa*` only) |
| domain | **Asset** · `api/v1/asset/csdl-records` |
| entity | shell + `CsdlBieu3Entity` · `Schema_CsdlBieu3` |
| gates | tz_na · xco_get_only · share_tenant |
| contentHashPrior | `sha256:2c03537918bbda56c29e1e1ef98cc081cc4e72c94447a1ac2f87f06bd6f9310e` |
| headerFingerprintPrior | `sha256:60f7ea4153b5853222bdeaf2679929a6e4c5b66b6973bcfe12e5bd9dd3fcfbcc` |
| skillVersion | `2026.08.25.01` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.08.31.2` |
| writtenAt | `2026-09-05T09:00:00.000Z` |

## Decisions

- changeScope=`new_page` · packKind=`list` · typed **42 cột** · **cấm** detail* only
- route_confirm **route_a** alias `/csdl-bieu-03` + hub `?resource=road-tunnels`
- Q-GPS **six_numbers** · Q-TUBE **two_rows** · Q-VENT **text** · Q-SECTION **sectioned** · Q-PROV **keep_static** P1
- Persist shell + Schema_CsdlBieu3 · migration **Dev/4b** · **cấm** parent *Json
- API **giữ** `asset/csdl-records` · BFF proxy · **cấm ERP.***
- road-route SearchInput P1 · org/XLS **OUT/DEFER**
- Peer Sổ 6 deep-link · **cấm** merge · map none · **cấm** 1 row 2 bộ GPS
- Grid AC YES · Leave YES · Report N/A
- open Q: **none**

## Artifacts

| Kind | Path |
|------|------|
| task | `specs/csdl-bieu-03/task/csdl-bieu-03.md` |
| solution | `specs/csdl-bieu-03/be/solution-discovery.md` |
| design | `specs/csdl-bieu-03/ui/design.md` |
| STATUS | `specs/csdl-bieu-03/STATUS.md` |

## Task matrix (ids)

T-DM-01 · T-CTX-01 · T-BE-01..05 · T-BFF-01 · T-PERM-01 · T-BE-UISCHEMA-01 · T-UI-LIST/FILTER/CFG/FORM/LEAVE/ACT/LKP/FIELD/PROD/UX/RESP · T-OUT-01 · T-QA-CRUD/FORM/FILTER/TYP/TAB/ROUTE/TUBE

SA map: T-FE-01→LIST · 02→FORM · 03→FILTER+LKP · 04→LEAVE+ACT · 05→PROD · 06→UISCHEMA

## Screens / zones (ids only)

- S-LIST · S-FORM-C/E/V/Copy · S-ACT-DELETE · S-HUB-ENTRY · S-PEER-SO6 · S-SKIP-MAP
- mfeStdUrl=`http://localhost:9301/csdl-bieu-03`
- hub=`http://localhost:9301/so-ts/csdl-so-sach?resource=road-tunnels`

## Next

| Role | Need |
|------|------|
| **Dev** | implement · T-* · Schema_CsdlBieu3 @ 4b |
| QA | e2e queued `/agent-qa*` |
| Review | after QA |

## UNCLEAR

- none

## Cấm (compact)

ERP.* · invent API · detail* only · Guid IdCode · merge Sổ 6 · 1 row 2 GPS · parent *Json · implement code ở TL · Step 4b/migration/e2e/build/start:std ở TL · start role khác
