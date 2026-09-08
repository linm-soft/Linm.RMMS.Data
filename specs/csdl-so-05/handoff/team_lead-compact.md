# handoff-compact — team_lead · csdl-so-05

| | |
|--|--|
| schemaVersion | `1` |
| role | `team_lead` |
| feature | `csdl-so-05` |
| title | CSDL Sổ 05 — TNGT + điểm đen |
| packKind | `list` |
| changeScope | `new_page` |
| status | `done` |
| taskId | `task_fa602126` |
| saTaskId | `task_9c8cec8e` |
| resource | `accident-summaries` |
| formNo | `05` |
| IdCode | `SO-` |
| formPattern | **Kind D Slideout** 2col · **3 tabs** C.1/C.2/BS `inline_grid` **add-row** · **cấm** Full-page / col1–3 / 16 hạng |
| Kind | **B** A–D+F+H · **D** Slideout Z1–Z3 |
| route_confirm | **`route_a`** `/csdl-so-05` + hub |
| team_lead_confirm | **approve** (autoApprove ON) |
| design_confirm | approve |
| solution_confirm | approve |
| autoApprove | `ON` |
| e2eQa | `ON` (queued `/agent-qa*` only) |
| domain | **Asset** · `api/v1/asset/csdl-records` |
| entity | shell + `CsdlSo05Entity` · `Schema_CsdlSo05` · C1/C2/BS children |
| file | none (no photoIds) |
| gates | tz_none · xco_get_only · share_tenant |
| contentHashPrior | `sha256:ccb6cccc2010c67b8cd3b02484f6a424d09f5a7e0494ad59b5b71ea6ff15f8ce` |
| headerFingerprintPrior | `sha256:73a54e566bbad59af489c97e74cad13d131c338daa386a531e535704e374d14a` |
| skillVersion | `2026.08.25.01` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.08.31.2` |
| writtenAt | `2026-09-06T06:15:00.000Z` |

## Decisions

- changeScope=`new_page` · packKind=`list` · typed T-SO-05 + **3 tabs** · **cấm** detail*/col1–3 · **cấm** 16 hạng
- route_confirm **route_a** alias `/csdl-so-05` + hub `?resource=accident-summaries` · NEW catalog card
- Persist shell + Schema_CsdlSo05 + C1/C2/BS · migration **Dev/4b** · **cấm** parent *Json
- API **giữ** `asset/csdl-records` · BFF proxy · **cấm ERP.*** · **cấm** runtime `/accident-summaries`
- period month→1–12 · half→1|2 · year=year · cause 3× Number · damage + «triệu đồng» · BS `blackspot|potential|under_watch` · status draft|active|closed
- filters year/periodType/tableKind/road/province/status/search · road-route LKP · org Text P1 · org/XLS OUT-DEFER
- peer so-04 ROW riêng · CUC-07 drop «(+ TNGT)» khi cả 2 PASS · `rpt-tngt` RO · **cấm** merge · map none
- Grid AC YES · Leave YES · History reuse · File N/A · soft unique advisory
- open Q: **none**

## Artifacts

| Kind | Path |
|------|------|
| task | `specs/csdl-so-05/task/csdl-so-05.md` |
| solution | `specs/csdl-so-05/be/solution-discovery.md` |
| design | `specs/csdl-so-05/ui/design.md` |
| STATUS | `specs/csdl-so-05/STATUS.md` |

## Task matrix (ids)

T-DM-01 · T-CTX-01 · T-BE-01..06 · T-BFF-01 · T-PERM-01 · T-BE-UISCHEMA-01 · T-UI-LIST/FILTER/CFG/FORM/ENTRIES/LEAVE/ACT/HIST/LKP/FIELD/PROD/UX/RESP · T-OUT-01 · T-QA-CRUD/FORM/FILTER/TABS/SPLIT/TYP/TAB/ROUTE

SA map: T-FE-01→LIST · 02→FORM · 03→ENTRIES · 04→FILTER+LKP · 05→LEAVE+ACT+HIST · 06→PROD · 07→UISCHEMA

## Screens / zones (ids only)

- S-LIST · S-FORM-C/E/V/Copy · S-TAB-C1 · S-TAB-C2 · S-TAB-BS · S-ACT-DELETE · S-HUB-ENTRY · S-SKIP-MAP
- mfeStdUrl=`http://localhost:9301/csdl-so-05`
- hub=`http://localhost:9301/so-ts/csdl-so-sach?resource=accident-summaries`

## Next

| Role | Need |
|------|------|
| **Dev** | implement · T-* · Schema_CsdlSo05 @ 4b · 3 collections |
| QA | e2e queued `/agent-qa*` |
| Review | after QA |

## UNCLEAR

- none

## Cấm (compact)

ERP.* · invent API · detail*/col1–3 only · Guid IdCode · 16 hạng · merge so-04/Sổ TS · CRUD rpt-tngt · runtime accident-summaries path · parent *Json · invent map/file · implement code ở TL · Step 4b/migration/e2e/build/start:std ở TL · start role khác
