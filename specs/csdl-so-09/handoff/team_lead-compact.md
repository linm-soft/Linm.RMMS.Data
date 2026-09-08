# handoff-compact — team_lead · csdl-so-09

| | |
|--|--|
| schemaVersion | `1` |
| role | `team_lead` |
| feature | `csdl-so-09` |
| title | CSDL Sổ 09 — QL vận hành ITS/ETC/KSTTX |
| packKind | `list` |
| changeScope | `new_page` |
| status | `done` |
| taskId | `task_f3c35413` |
| saTaskId | `task_05d75fc7` |
| resource | `its-ops-logs` |
| formNo | `09` |
| IdCode | `SO-` |
| formPattern | **Kind D Slideout** 2col · entries `inline_grid` **9 cột** · **cấm** Full-page |
| Kind | **B** A–D+F+H · **D** Slideout Z1–Z3 |
| route_confirm | **`route_a`** `/csdl-so-09` + hub |
| team_lead_confirm | **approve** (autoApprove ON) |
| design_confirm | approve |
| solution_confirm | approve |
| autoApprove | `ON` |
| e2eQa | `ON` (queued `/agent-qa*` only) |
| domain | **Asset** · `api/v1/asset/csdl-records` |
| entity | shell + `CsdlSo09Entity` · `Schema_CsdlSo09` · widen entries · seed `its-ops-logs` |
| gates | tz_list_and_form · xco_get_only · share_tenant |
| contentHashPrior | `sha256:1cbd0cd26f977a518c29457acddd7c893fa56fe9bd750ac1ad6a15b0976d03dc` |
| headerFingerprintPrior | `sha256:c00fdbdda898129b6408c35f9fb57cd2cc918356208b1067310d40c8f3cbefd9` |
| skillVersion | `2026.08.25.01` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.08.31.2` |
| writtenAt | `2026-09-06T00:00:00.000Z` |

## Decisions

- changeScope=`new_page` · packKind=`list` · typed T-SO-09 + entries **9 cột** ca trực · **cấm** detail*/col1–3 only · **≠** Biểu 9
- route_confirm **route_a** alias `/csdl-so-09` + hub `?resource=its-ops-logs`
- Persist shell + Schema_CsdlSo09 (Contractor·Period·LinkBieu14Id) + widen entries · migration **Dev/4b** · **cấm** parent *Json
- API **giữ** `asset/csdl-records` · BFF proxy · **cấm ERP.*** · seed `its-ops-logs`
- linkBieu14Id optional SearchInput `its-systems` + deep-link · **cấm** embed Biểu 14
- media **N/A** · road-route P1 · org/XLS/e-sign **OUT/DEFER**
- Label «Sổ 09 — QL vận hành ITS/ETC/KSTTX» · map none · **cấm** merge Biểu 14 / Sổ TS
- Grid AC YES · Leave YES · History reuse · Report N/A P1
- open Q: **none**

## Artifacts

| Kind | Path |
|------|------|
| task | `specs/csdl-so-09/task/csdl-so-09.md` |
| solution | `specs/csdl-so-09/be/solution-discovery.md` |
| design | `specs/csdl-so-09/ui/design.md` |
| STATUS | `specs/csdl-so-09/STATUS.md` |

## Task matrix (ids)

T-DM-01 · T-CTX-01 · T-BE-01..05 · T-BFF-01 · T-PERM-01 · T-BE-UISCHEMA-01 · T-UI-LIST/FILTER/CFG/FORM/ENTRIES/LEAVE/ACT/HIST/LKP-01/LKP-02/FIELD/PROD/UX/RESP · T-OUT-01 · T-QA-CRUD/FORM/FILTER/TYP/TAB/ROUTE/LINK14

SA map: T-FE-01→LIST · 02→FORM · 03→ENTRIES · 04→FILTER+LKP-01 · 05→LEAVE+ACT+HIST · 06→PROD · 07→UISCHEMA · link14→LKP-02

## Screens / zones (ids only)

- S-LIST · S-FORM-C/E/V/Copy · S-ENTRIES · S-LINK14 · S-ACT-DELETE · S-HUB-ENTRY · S-SKIP-MAP
- mfeStdUrl=`http://localhost:9301/csdl-so-09`
- hub=`http://localhost:9301/so-ts/csdl-so-sach?resource=its-ops-logs`
- peer=`http://localhost:9301/csdl-bieu-14`

## Next

| Role | Need |
|------|------|
| **Dev** | implement · T-* · Schema_CsdlSo09 + seed @ 4b |
| QA | e2e queued `/agent-qa*` |
| Review | after QA |

## UNCLEAR

- none

## Cấm (compact)

ERP.* · invent API · detail*/col1–3 only · Guid IdCode · merge Biểu 14/Sổ TS · ≠ Biểu 9 · parent *Json · invent media · implement code ở TL · Step 4b/migration/e2e/build/start:std ở TL · start role khác
