# handoff-compact — team_lead · csdl-so-07

| | |
|--|--|
| schemaVersion | `1` |
| role | `team_lead` |
| feature | `csdl-so-07` |
| title | CSDL Sổ 07 — HL + GPTC + Dự án |
| packKind | `list` |
| changeScope | `new_page` |
| status | `done` |
| taskId | `task_567ebd2f` |
| saTaskId | `task_451a2571` |
| resource | `row-violations` |
| formNo | `07` |
| IdCode | `SO-` |
| formPattern | **Kind D Slideout** 2col · Tab A/B `inline_grid` **add/remove** · **cấm** Full-page / flatten |
| Kind | **B** A–D+F+H · **D** Slideout Z1–Z3 |
| route_confirm | **`route_a`** `/csdl-so-07` + hub |
| team_lead_confirm | **approve** (autoApprove ON) |
| design_confirm | approve |
| solution_confirm | approve |
| autoApprove | `ON` |
| e2eQa | `ON` (queued `/agent-qa*` only) |
| domain | **Asset** · `api/v1/asset/csdl-records` |
| entity | shell + `CsdlSo07Entity` · `Schema_CsdlSo07` · VP/GP children |
| file | none (no photoIds) |
| gates | tz_list_and_form · xco_get_only · share_tenant |
| contentHashPrior | `sha256:b928feb3e0d7900398812630e25afa43bfcbf4971633a9c1184c55ea2912ef69` |
| headerFingerprintPrior | `sha256:a923102afa38664e58effeb2b0dccfae12b942d4a3a6fb3c1cb8355df00aa531` |
| skillVersion | `2026.08.25.01` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.08.31.2` |
| writtenAt | `2026-09-06T04:30:00.000Z` |

## Decisions

- changeScope=`new_page` · packKind=`list` · typed T-SO-07 + **2 tab** nested · **cấm** detail*/col1–3 · **cấm** flatten
- route_confirm **route_a** alias `/csdl-so-07` + hub `?resource=row-violations`
- Persist shell + Schema_CsdlSo07 + VP/GP · migration **Dev/4b** · **cấm** parent *Json · deprecate book_entries write
- API **giữ** `asset/csdl-records` · BFF proxy · **cấm ERP.*** · **cấm** runtime `/row-violations` · `/construction-permits`
- status sổ draft|active|closed · VP open|processing|resolved|dismissed · QLDA Text optional · permitDays Integer · org Text P1 · org DEFER P2
- road-route SearchInput · peer report drill READY · **cấm** merge · XLS OUT · map none · hub rename T-REN-01 DEFER
- Grid AC YES · Leave YES · History reuse · File N/A
- open Q: **none**

## Artifacts

| Kind | Path |
|------|------|
| task | `specs/csdl-so-07/task/csdl-so-07.md` |
| solution | `specs/csdl-so-07/be/solution-discovery.md` |
| design | `specs/csdl-so-07/ui/design.md` |
| STATUS | `specs/csdl-so-07/STATUS.md` |

## Task matrix (ids)

T-DM-01 · T-CTX-01 · T-BE-01..06 · T-BFF-01 · T-PERM-01 · T-BE-UISCHEMA-01 · T-UI-LIST/FILTER/CFG/FORM/ENTRIES/LEAVE/ACT/HIST/LKP/FIELD/PROD/UX/RESP · T-OUT-01 · T-QA-CRUD/FORM/FILTER/TABS/PROJECT/TYP/TAB/ROUTE

SA map: T-FE-01→LIST · 02→FORM · 03→ENTRIES · 04→FILTER+LKP · 05→LEAVE+ACT+HIST · 06→PROD · 07→UISCHEMA

## Screens / zones (ids only)

- S-LIST · S-FORM-C/E/V/Copy · S-TAB-A · S-TAB-B · S-ACT-DELETE · S-HUB-ENTRY · S-SKIP-MAP
- mfeStdUrl=`http://localhost:9301/csdl-so-07`
- hub=`http://localhost:9301/so-ts/csdl-so-sach?resource=row-violations`

## Next

| Role | Need |
|------|------|
| **Dev** | implement · T-* · Schema_CsdlSo07 @ 4b · nested VP/GP |
| QA | e2e queued `/agent-qa*` |
| Review | after QA |

## UNCLEAR

- none

## Cấm (compact)

ERP.* · invent API · detail*/col1–3 only · Guid IdCode · flatten tabs · merge report · runtime row-violations/construction-permits path · parent *Json · invent map/file API · implement code ở TL · Step 4b/migration/e2e/build/start:std ở TL · start role khác
