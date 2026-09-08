# handoff-compact — team_lead · csdl-so-01

| | |
|--|--|
| schemaVersion | `1` |
| role | `team_lead` |
| feature | `csdl-so-01` |
| title | CSDL Sổ 01 — Nhật ký tuần kiểm |
| packKind | `list` |
| changeScope | `new_page` |
| status | `done` |
| taskId | `task_bf0fa3d0` |
| saTaskId | `task_71adf8b1` |
| resource | `inspection-logs` |
| formNo | `01` |
| IdCode | `SO-` |
| formPattern | **Kind D Slideout** 2col · entries `inline_grid` · **cấm** Full-page |
| Kind | **B** A–D+F+H · **D** Slideout Z1–Z3 |
| route_confirm | **`route_a`** `/csdl-so-01` + hub |
| team_lead_confirm | **approve** (autoApprove ON) |
| design_confirm | approve |
| solution_confirm | approve |
| autoApprove | `ON` |
| e2eQa | `ON` (queued `/agent-qa*` only) |
| domain | **Asset** · `api/v1/asset/csdl-records` |
| entity | shell + `CsdlSo01Entity` · `Schema_CsdlSo01` · widen entries |
| gates | tz_list_and_form · xco_get_only · share_tenant |
| contentHashPrior | `sha256:9b7c5f11adaed6b64404b77225fbdc0a6a4021b39d7a00dc1922c643aff822d3` |
| headerFingerprintPrior | `sha256:4e2c2ee770e209ccf28234cb47c2d32098a6b6f9efb8cc5817b9c8964e64a4da` |
| skillVersion | `2026.08.25.01` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.08.31.2` |
| writtenAt | `2026-09-06T01:10:00.000Z` |

## Decisions

- changeScope=`new_page` · packKind=`list` · typed T-SO-01 + entries · **cấm** detail*/col1–3 only
- route_confirm **route_a** alias `/csdl-so-01` + hub `?resource=inspection-logs`
- Persist shell + Schema_CsdlSo01 + widen entries · migration **Dev/4b** · **cấm** parent *Json
- API **giữ** `asset/csdl-records` · BFF proxy · **cấm ERP.***
- FileService postRepairMediaIds max 10 · ≥1 nếu repairRequest · road-route P1 · org/XLS **OUT/DEFER**
- Label «Sổ 01» · key inspection-logs giữ · map none · **cấm** merge Sổ TS
- Grid AC YES · Leave YES · History reuse · Report N/A P1
- open Q: **none**

## Artifacts

| Kind | Path |
|------|------|
| task | `specs/csdl-so-01/task/csdl-so-01.md` |
| solution | `specs/csdl-so-01/be/solution-discovery.md` |
| design | `specs/csdl-so-01/ui/design.md` |
| STATUS | `specs/csdl-so-01/STATUS.md` |

## Task matrix (ids)

T-DM-01 · T-CTX-01 · T-BE-01..06 · T-BFF-01 · T-PERM-01 · T-BE-UISCHEMA-01 · T-UI-LIST/FILTER/CFG/FORM/ENTRIES/LEAVE/ACT/HIST/LKP/FIELD/PROD/UX/RESP · T-OUT-01 · T-QA-CRUD/FORM/FILTER/FILE/TYP/TAB/ROUTE

SA map: T-FE-01→LIST · 02→FORM · 03→ENTRIES · 04→FILTER+LKP · 05→LEAVE+ACT+HIST · 06→PROD · 07→UISCHEMA

## Screens / zones (ids only)

- S-LIST · S-FORM-C/E/V/Copy · S-ENTRIES · S-ACT-DELETE · S-HUB-ENTRY · S-SKIP-MAP
- mfeStdUrl=`http://localhost:9301/csdl-so-01`
- hub=`http://localhost:9301/so-ts/csdl-so-sach?resource=inspection-logs`

## Next

| Role | Need |
|------|------|
| **Dev** | implement · T-* · Schema_CsdlSo01 @ 4b |
| QA | e2e queued `/agent-qa*` |
| Review | after QA |

## UNCLEAR

- none

## Cấm (compact)

ERP.* · invent API · detail*/col1–3 only · Guid IdCode · merge Sổ TS · parent *Json · implement code ở TL · Step 4b/migration/e2e/build/start:std ở TL · start role khác
