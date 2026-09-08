# handoff-compact — team_lead · csdl-so-08

| | |
|--|--|
| schemaVersion | `1` |
| role | `team_lead` |
| feature | `csdl-so-08` |
| title | CSDL Sổ 08 — Kết quả BDTX |
| packKind | `list` |
| changeScope | `new_page` |
| status | `done` |
| taskId | `task_5f0e74e9` |
| saTaskId | `task_cb03edd5` |
| resource | `maintenance-work-logs` |
| formNo | `08` |
| IdCode | `SO-` |
| formPattern | **Kind D Slideout** 2col · entries `inline_grid` · **cấm** Full-page |
| Kind | **B** A–D+F+H · **D** Slideout Z1–Z3 |
| route_confirm | **`route_a`** `/csdl-so-08` + hub |
| team_lead_confirm | **approve** (autoApprove ON) |
| design_confirm | approve |
| solution_confirm | approve |
| autoApprove | `ON` |
| e2eQa | `ON` (queued `/agent-qa*` only) |
| domain | **Asset** · `api/v1/asset/csdl-records` |
| entity | shell + `CsdlSo08Entity` · `Schema_CsdlSo08` · widen entries |
| gates | tz_list_and_form · xco_get_only · share_tenant |
| contentHashPrior | `sha256:46cd2b05ce4a396d08fa326183d9a17603afc381fbd00669155c13703a4e3146` |
| headerFingerprintPrior | `sha256:e6fd49c647b1f4435fe5110097964fa15b4eeba116926d885297b81d2e373a02` |
| skillVersion | `2026.08.25.01` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.08.31.2` |
| writtenAt | `2026-09-05T18:55:00.000Z` |

## Decisions

- changeScope=`new_page` · packKind=`list` · typed T-SO-08 + entries 5 cột · **cấm** detail*/col1–3 only · **cấm** kmAt
- route_confirm **route_a** alias `/csdl-so-08` + hub `?resource=maintenance-work-logs`
- Persist shell + Schema_CsdlSo08 + widen entries (WorkItem·Km·Solution·MainResult·Note) · migration **Dev/4b** · **cấm** parent *Json
- API **giữ** `asset/csdl-records` · BFF proxy · **cấm ERP.***
- media **N/A** · road-route P1 · org/XLS **OUT/DEFER**
- Label «Sổ 08 — Kết quả BDTX» · key maintenance-work-logs giữ · map none · **cấm** merge Sổ TS
- Grid AC YES · Leave YES · History reuse · Report N/A P1
- open Q: **none**

## Artifacts

| Kind | Path |
|------|------|
| task | `specs/csdl-so-08/task/csdl-so-08.md` |
| solution | `specs/csdl-so-08/be/solution-discovery.md` |
| design | `specs/csdl-so-08/ui/design.md` |
| STATUS | `specs/csdl-so-08/STATUS.md` |

## Task matrix (ids)

T-DM-01 · T-CTX-01 · T-BE-01..05 · T-BFF-01 · T-PERM-01 · T-BE-UISCHEMA-01 · T-UI-LIST/FILTER/CFG/FORM/ENTRIES/LEAVE/ACT/HIST/LKP/FIELD/PROD/UX/RESP · T-OUT-01 · T-QA-CRUD/FORM/FILTER/TYP/TAB/ROUTE

SA map: T-FE-01→LIST · 02→FORM · 03→ENTRIES · 04→FILTER+LKP · 05→LEAVE+ACT+HIST · 06→PROD · 07→UISCHEMA

## Screens / zones (ids only)

- S-LIST · S-FORM-C/E/V/Copy · S-ENTRIES · S-ACT-DELETE · S-HUB-ENTRY · S-SKIP-MAP
- mfeStdUrl=`http://localhost:9301/csdl-so-08`
- hub=`http://localhost:9301/so-ts/csdl-so-sach?resource=maintenance-work-logs`

## Next

| Role | Need |
|------|------|
| **Dev** | implement · T-* · Schema_CsdlSo08 @ 4b |
| QA | e2e queued `/agent-qa*` |
| Review | after QA |

## UNCLEAR

- none

## Cấm (compact)

ERP.* · invent API · detail*/col1–3 only · Guid IdCode · merge Sổ TS · parent *Json · invent media · implement code ở TL · Step 4b/migration/e2e/build/start:std ở TL · start role khác
