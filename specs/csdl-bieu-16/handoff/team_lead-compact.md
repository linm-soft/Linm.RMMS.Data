# handoff-compact — team_lead · csdl-bieu-16

| | |
|--|--|
| schemaVersion | `1` |
| role | `team_lead` |
| feature | `csdl-bieu-16` |
| title | CSDL Biểu 16 — Nút giao |
| packKind | `list` |
| changeScope | `new_page` |
| status | `done` |
| taskId | `task_4dfa0ca5` |
| saTaskId | `task_5c3d4c6b` |
| resource | `interchanges` |
| formNo | `16` |
| columns | `39` · header + child branches[] + ATGT |
| IdCode | `IX-` |
| peerSoTs | `so-ts-interchange` · **cấm** merge · none_p1 |
| child | `branches[]` embed · **min_1** · replace-all · **cấm** flatten-only |
| formPattern | **Kind D Slideout** 2col · 5 section + BRANCH · **cấm** Full-page |
| Kind | **B** A–D+F · **D** Slideout Z1–Z3 + BRANCH |
| route_confirm | **`route_a`** `/csdl-bieu-16` + hub NEW |
| team_lead_confirm | **approve** (autoApprove ON) |
| design_confirm | approve |
| solution_confirm | approve |
| autoApprove | `ON` |
| e2eQa | `ON` (queued `/agent-qa*` only) |
| domain | **Asset** · `api/v1/asset/csdl-records` |
| entity | shell + `CsdlBieu16Entity` + Branch · `Schema_CsdlBieu16` |
| gates | tz_na · xco_get_only · share_tenant |
| contentHashPrior | `sha256:56e2fb16e9bcde21f17d7e9639b72660666778f5393b1270cecc49d123beba4b` |
| headerFingerprintPrior | `sha256:ec787bf2008ae89f1b6c085fe238f1b0d50b048f5c672b90b68d9ea102cf8fcc` |
| skillVersion | `2026.08.25.01` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.08.31.2` |
| writtenAt | `2026-09-05T17:05:00.000Z` |

## Decisions

- changeScope=`new_page` · packKind=`list` · typed **39** · child `branches[]` **min_1** · **cấm** detail* only · **cấm** 2 catalog entity · **cấm** flatten-only
- route_confirm **route_a** alias `/csdl-bieu-16` + hub NEW `?resource=interchanges`
- Q-ROUTE alias_now · Q-PROV keep_static · Q-TYPE-SET cite_excel · Q-TRAFFIC-ORG lookup · Q-ATGT qty · Q-BRANCH-MIN min_1 · Q-KM point_main · Q-MANAGE in_39 · Q-PREFIX IX · Q-LIST-COLS subset · Q-TITLE nut_giao · Q-DMAP add_now · Q-PEER-LINK none_p1 · Q-CHILD-API embed
- Persist shell + Schema_CsdlBieu16 1:1 + Branch 1–n · migration **Dev/4b** · **cấm** parent *Json · **cấm** nested branch API P1
- API **giữ** `asset/csdl-records` · BFF proxy · **cấm ERP.***
- road-route SearchInput P1 · org/XLS **OUT/DEFER** · peer cite only · **cấm** merge so-ts-interchange · map none · GAP-CSDL-CUC-09/11 · GAP-BIEU16-HUB-01
- Grid AC YES · Leave YES · Report N/A
- open Q: **none**

## Artifacts

| Kind | Path |
|------|------|
| task | `specs/csdl-bieu-16/task/csdl-bieu-16.md` |
| solution | `specs/csdl-bieu-16/be/solution-discovery.md` |
| design | `specs/csdl-bieu-16/ui/design.md` |
| STATUS | `specs/csdl-bieu-16/STATUS.md` |

## Task matrix (ids)

T-DM-01 · T-CTX-01 · T-BE-01..06 · T-BFF-01 · T-PERM-01 · T-BE-UISCHEMA-01 · T-UI-LIST/FILTER/CFG/FORM/LEAVE/ACT/LKP/FIELD/PROD/UX/RESP · T-OUT-01/02 · T-QA-CRUD/FORM/FILTER/BRANCH/MAIN/ATGT/TYP/TAB/ROUTE

SA map: T-FE-01→LIST · 02→FILTER · 03→FORM · 04→LKP · 05→PROD · 06→LEAVE+ACT · T-BE-01 entity+Branch · 02 migr · 03 DTO/embed · 04 IdCode/min_1 · 05 list · 06 soft/UiSchema

## Screens / zones (ids only)

- S-LIST · S-FORM-C/E/V/Copy · S-ACT-DELETE · S-HUB-ENTRY · S-SKIP-PEER · S-SKIP-MAP · DES-FORM-BRANCH
- mfeStdUrl=`http://localhost:9301/csdl-bieu-16`
- hub=`http://localhost:9301/so-ts/csdl-so-sach?resource=interchanges`

## Next

| Role | Need |
|------|------|
| **Dev** | implement · T-* · Schema_CsdlBieu16 @ 4b · typed 39 + Branch · hub NEW |
| QA | e2e queued `/agent-qa*` |
| Review | after QA |

## UNCLEAR

- none

## Cấm (compact)

ERP.* · invent API/infra · detail* only · Guid IdCode · flatten-only · merge so-ts-interchange/road-assets · parent *Json · 2 catalog entity · nested branch API P1 · implement code ở TL · Step 4b/migration/e2e/build/start:std ở TL · start role khác
