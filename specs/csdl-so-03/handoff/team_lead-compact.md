# handoff-compact — team_lead · csdl-so-03

| | |
|--|--|
| schemaVersion | `1` |
| role | `team_lead` |
| feature | `csdl-so-03` |
| title | CSDL Sổ 03 — Trực BĐGT + chốt + SC |
| packKind | `list` |
| changeScope | `new_page` |
| status | `done` |
| taskId | `task_3062383b` |
| saTaskId | `task_7d37d683` |
| resource | `duty-incident-logs` |
| retireKeys | `duty-logs` · `checkpoint-duties` |
| formNo | `03` |
| IdCode | `SO-` |
| formPattern | **Kind D Slideout** 2col · entries `inline_grid` · **cấm** Full-page |
| Kind | **B** A–D+F+H · **D** Slideout Z1–Z3 |
| route_confirm | **`route_a`** `/csdl-so-03` + hub |
| team_lead_confirm | **approve** (autoApprove ON) |
| design_confirm | approve |
| solution_confirm | approve |
| autoApprove | `ON` |
| e2eQa | `ON` (queued `/agent-qa*` only) |
| domain | **Asset** · `api/v1/asset/csdl-records` |
| entity | shell + `CsdlSo03Entity` · `Schema_CsdlSo03` · widen entries |
| gates | tz_list_and_form · xco_get_only · share_tenant |
| contentHashPrior | `sha256:1e8b4b6d6149c1ff2f27010cbf0d6649af9408b05738f416cd58d8c7361fdd9d` |
| headerFingerprintPrior | `sha256:b5b6baa32c1a5ebbf3d8eb2ecaad922d90a291958347aa22ec8fa27096d93997` |
| skillVersion | `2026.08.25.01` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.08.31.2` |
| writtenAt | `2026-09-06T02:45:00.000Z` |

## Decisions

- changeScope=`new_page` · packKind=`list` · typed T-SO-03 + entries · **cấm** detail*/col1–3 · **cấm** dutyKind
- route_confirm **route_a** alias `/csdl-so-03` + hub `?resource=duty-incident-logs`
- Merge P1: migrate+soft-retire `duty-logs`+`checkpoint-duties` · **1** hub card · legacy QS redirect
- Persist shell + Schema_CsdlSo03 + widen entries · migration **Dev/4b** · **cấm** parent *Json
- API **giữ** `asset/csdl-records` · BFF proxy · **cấm ERP.***
- road-route P1 · org/XLS/file **OUT/DEFER** · map none · **cấm** merge Sổ TS
- status draft|active|closed · contractor Text P1 · shift Text free
- Grid AC YES · Leave YES · History reuse · Report N/A P1
- open Q: **none**

## Artifacts

| Kind | Path |
|------|------|
| task | `specs/csdl-so-03/task/csdl-so-03.md` |
| solution | `specs/csdl-so-03/be/solution-discovery.md` |
| design | `specs/csdl-so-03/ui/design.md` |
| STATUS | `specs/csdl-so-03/STATUS.md` |

## Task matrix (ids)

T-DM-01 · T-CTX-01 · T-BE-01..06 · T-BFF-01 · T-PERM-01 · T-BE-UISCHEMA-01 · T-UI-LIST/FILTER/CFG/FORM/ENTRIES/LEAVE/ACT/HIST/LKP/FIELD/PROD/UX/RESP · T-OUT-01 · T-QA-CRUD/FORM/FILTER/MERGE/TYP/TAB/ROUTE

SA map: T-FE-01→LIST · 02→FORM · 03→ENTRIES · 04→FILTER+LKP · 05→LEAVE+ACT+HIST · 06→PROD · 07→UISCHEMA

## Screens / zones (ids only)

- S-LIST · S-FORM-C/E/V/Copy · S-ENTRIES · S-ACT-DELETE · S-HUB-ENTRY · S-SKIP-MAP
- mfeStdUrl=`http://localhost:9301/csdl-so-03`
- hub=`http://localhost:9301/so-ts/csdl-so-sach?resource=duty-incident-logs`

## Next

| Role | Need |
|------|------|
| **Dev** | implement · T-* · Schema_CsdlSo03 @ 4b · merge retire |
| QA | e2e queued `/agent-qa*` |
| Review | after QA |

## UNCLEAR

- none

## Cấm (compact)

ERP.* · invent API · detail*/col1–3 only · Guid IdCode · dutyKind · 2 resource song song · merge Sổ TS · parent *Json · implement code ở TL · Step 4b/migration/e2e/build/start:std ở TL · start role khác
