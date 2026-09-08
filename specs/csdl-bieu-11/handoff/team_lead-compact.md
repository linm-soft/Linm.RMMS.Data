# handoff-compact — team_lead · csdl-bieu-11

| | |
|--|--|
| schemaVersion | `1` |
| role | `team_lead` |
| feature | `csdl-bieu-11` |
| title | CSDL Biểu 11 — Hệ thống chiếu sáng |
| packKind | `list` |
| changeScope | `new_page` |
| status | `done` |
| taskId | `task_345a7e07` |
| saTaskId | `task_e96d7cf9` |
| resource | `lighting-systems` |
| formNo | `11` |
| columns | `24` · **2 section** lưới + NLMT |
| IdCode | `LT-` |
| peerSoTs | `so-ts-lighting` (toolbar · ≠ merge · qty ≠ điểm) |
| formPattern | **Kind D Slideout** 2col · **2 section** · **cấm** Full-page |
| Kind | **B** A–D+F · **D** Slideout Z1–Z3 · Z2b NLMT |
| cabinet | **split** · solar optional_flat 6 · LED allow_zero · gridStatus align_status |
| route_confirm | **`route_a`** `/csdl-bieu-11` + hub |
| team_lead_confirm | **approve** (autoApprove ON) |
| design_confirm | approve |
| solution_confirm | approve |
| autoApprove | `ON` |
| e2eQa | `ON` (queued `/agent-qa*` only) |
| domain | **Asset** · `api/v1/asset/csdl-records` |
| entity | shell + `CsdlBieu11Entity` · `Schema_CsdlBieu11` |
| gates | tz_na · xco_get_only · share_tenant |
| contentHashPrior | `sha256:7980db07b4712336ab0b675fa89feaab75c67fdaef3b54fe94647ab9ec1863d8` |
| headerFingerprintPrior | `sha256:b37759a9224c09c7c63bc81583b4a9bcbca02e74cba8b63579819e90d57f1d1a` |
| skillVersion | `2026.08.25.01` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.08.31.2` |
| writtenAt | `2026-09-05T12:35:00.000Z` |

## Decisions

- changeScope=`new_page` · packKind=`list` · typed **24 cột** · 2 section lưới+NLMT · **cấm** detail* only · **cấm** 2 entity · **cấm** Solar child
- route_confirm **route_a** alias `/csdl-bieu-11` + hub `?resource=lighting-systems`
- Q-ROUTE alias_now · Q-PROV keep_static · Q-GRID-STATUS align_status · Q-LED-ZERO allow_zero · Q-SOLAR-REQ optional · Q-CABINET split · Q-LIST-COLS subset · Q-PEER toolbar · Q-TITLE keep_demo
- Persist shell + Schema_CsdlBieu11 1:1 · solar flat · migration **Dev/4b** · **cấm** parent *Json
- API **giữ** `asset/csdl-records` · BFF proxy · **cấm ERP.***
- road-route SearchInput P1 · org/XLS **OUT/DEFER** · peer toolbar `so-ts-lighting` · **cấm** merge · **cấm** dump điểm→qty · map none · GAP-CSDL-CUC-11
- Grid AC YES · Leave YES · Report N/A
- open Q: **none**

## Artifacts

| Kind | Path |
|------|------|
| task | `specs/csdl-bieu-11/task/csdl-bieu-11.md` |
| solution | `specs/csdl-bieu-11/be/solution-discovery.md` |
| design | `specs/csdl-bieu-11/ui/design.md` |
| STATUS | `specs/csdl-bieu-11/STATUS.md` |

## Task matrix (ids)

T-DM-01 · T-CTX-01 · T-BE-01..06 · T-BFF-01 · T-PERM-01 · T-BE-UISCHEMA-01 · T-UI-LIST/FILTER/CFG/FORM/LEAVE/ACT/LKP/FIELD/PROD/UX/RESP · T-OUT-01/02 · T-QA-CRUD/FORM/FILTER/LED/SOLAR/TYP/TAB/ROUTE

SA map: T-FE-01→LIST · 02→FILTER · 03→FORM · 04→LKP · 05→PROD · 06→LEAVE+ACT · T-BE-01 entity · 02 migr · 03 DTO · 04 IdCode · 05 list · 06 soft/UiSchema

## Screens / zones (ids only)

- S-LIST · S-FORM-C/E/V/Copy · S-ACT-DELETE · S-HUB-ENTRY · S-PEER · S-SKIP-MAP
- mfeStdUrl=`http://localhost:9301/csdl-bieu-11`
- hub=`http://localhost:9301/so-ts/csdl-so-sach?resource=lighting-systems`
- peer=`/so-ts-lighting`

## Next

| Role | Need |
|------|------|
| **Dev** | implement · T-* · Schema_CsdlBieu11 @ 4b · typed 24 · 2 section |
| QA | e2e queued `/agent-qa*` |
| Review | after QA |

## UNCLEAR

- none

## Cấm (compact)

ERP.* · invent API · detail* only · Guid IdCode · merge Sổ TS · dump điểm→qty · parent *Json · Solar child · 2 entity · implement code ở TL · Step 4b/migration/e2e/build/start:std ở TL · start role khác
