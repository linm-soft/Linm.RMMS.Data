# handoff-compact — team_lead · csdl-so-06

| | |
|--|--|
| schemaVersion | `1` |
| role | `team_lead` |
| feature | `csdl-so-06` |
| title | CSDL Sổ 06 — QL cầu / phiếu KT |
| packKind | `list` |
| changeScope | `new_page` |
| status | `done` |
| taskId | `task_17056b99` |
| saTaskId | `task_765e52bc` |
| resource | `bridge-inspections` |
| formNo | `06` |
| IdCode | `SO-` |
| formPattern | **Kind D Slideout** 2col · entries `inline_grid` **fixed-20** · **cấm** Full-page |
| Kind | **B** A–D+F+H · **D** Slideout Z1–Z3 |
| route_confirm | **`route_a`** `/csdl-so-06` + hub |
| team_lead_confirm | **approve** (autoApprove ON) |
| design_confirm | approve |
| solution_confirm | approve |
| autoApprove | `ON` |
| e2eQa | `ON` (queued `/agent-qa*` only) |
| domain | **Asset** · `api/v1/asset/csdl-records` |
| entity | shell + `CsdlSo06Entity` · `Schema_CsdlSo06` · widen entries |
| file | FileService photoIds / dòng · max 5 |
| gates | tz_list_and_form · xco_get_only · share_tenant |
| contentHashPrior | `sha256:efbccc4800d45e5dfe2b30b8b35773d127554eb6912be14729c0da066e214d8a` |
| headerFingerprintPrior | `sha256:f87218b875c86a0a438994d8dd3abf30f59757fe4f85ddc4e9af0893efb9422f` |
| skillVersion | `2026.08.25.01` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.08.31.2` |
| writtenAt | `2026-09-06T03:50:00.000Z` |

## Decisions

- changeScope=`new_page` · packKind=`list` · typed T-SO-06 + **fixed-20** · **cấm** detail*/col1–3 · **cấm** add/remove · **cấm** đổi partCode seed
- route_confirm **route_a** alias `/csdl-so-06` + hub `?resource=bridge-inspections`
- Persist shell + Schema_CsdlSo06 + widen entries · migration **Dev/4b** · **cấm** parent *Json
- API **giữ** `asset/csdl-records` · BFF proxy · **cấm ERP.*** · **cấm** runtime `/api/v1/bridge-inspections`
- status draft|done|cancelled · priority required khi damageDesc · photoIds FileService max5 · manageUnit Text P1 · org DEFER P2
- road-route + bridges SearchInput · peer Biểu 2 deep-link · **cấm** merge · XLS OUT · map none · hub rename T-REN-01 DEFER
- Grid AC YES · Leave YES · History reuse · Report N/A P1
- open Q: **none**

## Artifacts

| Kind | Path |
|------|------|
| task | `specs/csdl-so-06/task/csdl-so-06.md` |
| solution | `specs/csdl-so-06/be/solution-discovery.md` |
| design | `specs/csdl-so-06/ui/design.md` |
| STATUS | `specs/csdl-so-06/STATUS.md` |

## Task matrix (ids)

T-DM-01 · T-CTX-01 · T-BE-01..06 · T-BFF-01 · T-PERM-01 · T-BE-UISCHEMA-01 · T-UI-LIST/FILTER/CFG/FORM/ENTRIES/LEAVE/ACT/HIST/LKP/FIELD/PROD/UX/RESP · T-OUT-01 · T-QA-CRUD/FORM/FILTER/FIXED20/MEDIA/TYP/TAB/ROUTE

SA map: T-FE-01→LIST · 02→FORM · 03→ENTRIES · 04→FILTER+LKP · 05→LEAVE+ACT+HIST · 06→PROD · 07→UISCHEMA

## Screens / zones (ids only)

- S-LIST · S-FORM-C/E/V/Copy · S-ENTRIES fixed-20 · S-ACT-DELETE · S-HUB-ENTRY · S-SKIP-MAP
- mfeStdUrl=`http://localhost:9301/csdl-so-06`
- hub=`http://localhost:9301/so-ts/csdl-so-sach?resource=bridge-inspections`

## Next

| Role | Need |
|------|------|
| **Dev** | implement · T-* · Schema_CsdlSo06 @ 4b · FileService photoIds |
| QA | e2e queued `/agent-qa*` |
| Review | after QA |

## UNCLEAR

- none

## Cấm (compact)

ERP.* · invent API · detail*/col1–3 only · Guid IdCode · add/remove >20 · đổi partCode · merge Biểu 2 · runtime bridge-inspections path · parent *Json · invent map/file API · implement code ở TL · Step 4b/migration/e2e/build/start:std ở TL · start role khác
