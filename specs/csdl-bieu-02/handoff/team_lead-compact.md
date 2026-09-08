# handoff-compact — team_lead · csdl-bieu-02

| | |
|--|--|
| schemaVersion | `1` |
| role | `team_lead` |
| feature | `csdl-bieu-02` |
| title | CSDL Biểu 02 — Thống kê cầu |
| packKind | `list` |
| changeScope | `new_page` |
| status | `done` |
| taskId | `task_361a0ea2` |
| saTaskId | `task_547af74d` |
| resource | `bridges` |
| formNo | `02` |
| columns | `48` |
| IdCode | `BR-` |
| peerSoTs | none (—) · Sổ 6 / passport deep-link only |
| formPattern | **Kind D Slideout** 2col sectioned · **cấm** Full-page |
| Kind | **B** A–D+F · **D** Slideout Z1–Z3 |
| route_confirm | **`route_a`** `/csdl-bieu-02` + hub |
| team_lead_confirm | **approve** (autoApprove ON) |
| design_confirm | approve |
| solution_confirm | approve |
| autoApprove | `ON` |
| e2eQa | `ON` (queued `/agent-qa*` only) |
| domain | **Asset** · `api/v1/asset/csdl-records` |
| entity | shell + `CsdlBieu2Entity` · `Schema_CsdlBieu2` |
| gates | tz_na · xco_get_only · share_tenant |
| contentHashPrior | `sha256:bd73974e607f886dd38736015cb5a6a3fb82aff9d6a63328963ceb5c4be436a2` |
| headerFingerprintPrior | `sha256:34e1fcb051f6010fbe70ebdffab71df3d6f441a373d3be0249dd601e596d5591` |
| skillVersion | `2026.08.25.01` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.08.31.2` |
| writtenAt | `2026-09-05T08:35:00.000Z` |

## Decisions

- changeScope=`new_page` · packKind=`list` · typed **48 cột** · **cấm** detail* only
- route_confirm **route_a** alias `/csdl-bieu-02` + hub `?resource=bridges`
- Q-GPS **six_numbers** · Q-LOAD **text** · Q-LEGACY **keep_hidden** · Q-SECTION **sectioned** · Q-PROV **keep_static** P1
- Persist shell + Schema_CsdlBieu2 · migration **Dev/4b** · **cấm** parent *Json
- API **giữ** `asset/csdl-records` · BFF proxy · **cấm ERP.***
- road-route SearchInput P1 · org/XLS **OUT/DEFER**
- Peer Sổ 6/passport deep-link · **cấm** merge · **cấm** passport CRUD · map none
- Grid AC YES · Leave YES · Report N/A
- open Q: **none**

## Artifacts

| Kind | Path |
|------|------|
| task | `specs/csdl-bieu-02/task/csdl-bieu-02.md` |
| solution | `specs/csdl-bieu-02/be/solution-discovery.md` |
| design | `specs/csdl-bieu-02/ui/design.md` |
| STATUS | `specs/csdl-bieu-02/STATUS.md` |

## Task matrix (ids)

T-DM-01 · T-CTX-01 · T-BE-01..05 · T-BFF-01 · T-PERM-01 · T-BE-UISCHEMA-01 · T-UI-LIST/FILTER/CFG/FORM/LEAVE/ACT/LKP/FIELD/PROD/UX/RESP · T-OUT-01 · T-QA-CRUD/FORM/FILTER/TYP/TAB/ROUTE

SA map: T-FE-01→LIST · 02→FORM · 03→FILTER+LKP · 04→LEAVE+ACT · 05→PROD · 06→UISCHEMA

## Screens / zones (ids only)

- S-LIST · S-FORM-C/E/V/Copy · S-ACT-DELETE · S-HUB-ENTRY · S-PEER-SO6 · S-SKIP-MAP
- mfeStdUrl=`http://localhost:9301/csdl-bieu-02`
- hub=`http://localhost:9301/so-ts/csdl-so-sach?resource=bridges`

## Next

| Role | Need |
|------|------|
| **Dev** | implement · T-* · Schema_CsdlBieu2 @ 4b |
| QA | e2e queued `/agent-qa*` |
| Review | after QA |

## UNCLEAR

- none

## Cấm (compact)

ERP.* · invent API · detail* only · Guid IdCode · merge passport/Sổ 6 · passport CRUD · parent *Json · implement code ở TL · Step 4b/migration/e2e/build/start:std ở TL · start role khác
