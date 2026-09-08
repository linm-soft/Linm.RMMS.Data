# handoff-compact — team_lead · csdl-so-02

| | |
|--|--|
| schemaVersion | `1` |
| role | `team_lead` |
| feature | `csdl-so-02` |
| title | CSDL Sổ 02 — Nhật ký tuần đường |
| packKind | `list` |
| changeScope | `new_page` |
| status | `done` |
| taskId | `task_21de79e2` |
| saTaskId | `task_c4f160af` |
| resource | `patrol-logs` |
| formNo | `02` |
| IdCode | `SO-` |
| formPattern | **Kind D Slideout** 2col · entries `inline_grid` · **cấm** Full-page |
| Kind | **B** A–D+F+H · **D** Slideout Z1–Z3 |
| route_confirm | **`route_a`** `/csdl-so-02` + hub |
| team_lead_confirm | **approve** (autoApprove ON) |
| design_confirm | approve |
| solution_confirm | approve |
| autoApprove | `ON` |
| e2eQa | `ON` (queued `/agent-qa*` only) |
| domain | **Asset** · `api/v1/asset/csdl-records` |
| entity | shell + `CsdlSo02Entity` · `Schema_CsdlSo02` · widen entries |
| gates | tz_list_and_form · xco_get_only · share_tenant |
| contentHashPrior | `sha256:70538d9c9588d335aa43fd5a1fe28433d1138960d5954c5a7ef4cff33a5bd1c3` |
| headerFingerprintPrior | `sha256:5da56778e38ecc53807d424082520372c7bbed355257bdacfa0457dba0036e3c` |
| skillVersion | `2026.08.25.01` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.08.31.2` |
| writtenAt | `2026-09-06T00:20:00.000Z` |

## Decisions

- changeScope=`new_page` · packKind=`list` · typed T-SO-02 + entries · **cấm** detail*/col1–3 only
- route_confirm **route_a** alias `/csdl-so-02` + hub `?resource=patrol-logs`
- Persist shell + Schema_CsdlSo02 + widen entries · migration **Dev/4b** · **cấm** parent *Json
- API **giữ** `asset/csdl-records` · BFF proxy · **cấm ERP.***
- FileService sketch/media max 10 · road-route P1 · org/partner/XLS **OUT/DEFER**
- Label «Sổ 02» · key patrol-logs giữ · map none · **cấm** merge Sổ TS
- Grid AC YES · Leave YES · History reuse · Report N/A P1
- open Q: **none**

## Artifacts

| Kind | Path |
|------|------|
| task | `specs/csdl-so-02/task/csdl-so-02.md` |
| solution | `specs/csdl-so-02/be/solution-discovery.md` |
| design | `specs/csdl-so-02/ui/design.md` |
| STATUS | `specs/csdl-so-02/STATUS.md` |

## Task matrix (ids)

T-DM-01 · T-CTX-01 · T-BE-01..06 · T-BFF-01 · T-PERM-01 · T-BE-UISCHEMA-01 · T-UI-LIST/FILTER/CFG/FORM/ENTRIES/LEAVE/ACT/HIST/LKP/FIELD/PROD/UX/RESP · T-OUT-01 · T-QA-CRUD/FORM/FILTER/FILE/TYP/TAB/ROUTE

SA map: T-FE-01→LIST · 02→FORM · 03→ENTRIES · 04→FILTER+LKP · 05→LEAVE+ACT+HIST · 06→PROD · 07→UISCHEMA

## Screens / zones (ids only)

- S-LIST · S-FORM-C/E/V/Copy · S-ENTRIES · S-ACT-DELETE · S-HUB-ENTRY · S-SKIP-MAP
- mfeStdUrl=`http://localhost:9301/csdl-so-02`
- hub=`http://localhost:9301/so-ts/csdl-so-sach?resource=patrol-logs`

## Next

| Role | Need |
|------|------|
| **Dev** | implement · T-* · Schema_CsdlSo02 @ 4b |
| QA | e2e queued `/agent-qa*` |
| Review | after QA |

## UNCLEAR

- none

## Cấm (compact)

ERP.* · invent API · detail*/col1–3 only · Guid IdCode · merge Sổ TS · parent *Json · implement code ở TL · Step 4b/migration/e2e/build/start:std ở TL · start role khác
