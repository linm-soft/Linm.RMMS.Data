# handoff-compact — sa · csdl-bieu-16

| | |
|--|--|
| schemaVersion | `1` |
| role | `sa` |
| feature | `csdl-bieu-16` |
| title | CSDL Biểu 16 — Nút giao |
| packKind | `list` |
| changeScope | `new_page` |
| status | `done` |
| taskId | `task_5c3d4c6b` |
| resource | `interchanges` |
| formNo | `16` |
| columns | `39` · header + child branches[] + ATGT |
| IdCode | `IX-` |
| peerSoTs | `so-ts-interchange` · **cấm** merge · none_p1 |
| formPattern | **Kind D Slideout** 2col · 5 section · child min_1 · **cấm** Full-page |
| Kind | **B** A–D+F · **D** Slideout Z1–Z3 + BRANCH |
| solution_confirm | **approve** (autoApprove ON) |
| domain | **Asset** · `api/v1/asset/csdl-records` |
| bff | proxy only · `web-bff/api/v1/asset/csdl-records` |
| entity | shell + `CsdlBieu16Entity` · `rmms_csdl_bieu16` · Branch `rmms_csdl_bieu16_branch` · Schema_CsdlBieu16 |
| child | `branches[]` embed · min_1 · replace-all PUT · **cấm** flatten-only · **cấm** nested API P1 |
| sa_tz_gate | `tz_na` |
| sa_xco_gate | `xco_get_only` |
| sa_shared_table | `share_tenant` |
| contentHashPrior | `sha256:56e2fb16e9bcde21f17d7e9639b72660666778f5393b1270cecc49d123beba4b` |
| headerFingerprintPrior | `sha256:ec787bf2008ae89f1b6c085fe238f1b0d50b048f5c672b90b68d9ea102cf8fcc` |
| skillVersion | `2026.08.24.01` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.08.31.2` |
| writtenAt | `2026-09-05T16:35:00.000Z` |

## Decisions

- changeScope=`new_page` · packKind=`list` · Kind B+D Slideout · typed **39** · child `branches[]` **min_1** · **cấm** detail* only · **cấm** 2 catalog entity
- API **giữ** `api/v1/asset/csdl-records` · BFF proxy · **cấm ERP.*** · **cấm** invent infra · **cấm** merge road-assets/so-ts-interchange
- Persist: shell + **Schema_CsdlBieu16** 1:1 + Branch 1–n · Q-CHILD-API **embed** · **cấm** parent *Json · migration Dev/4b only
- Q-ROUTE **alias_now** · Q-PROV **keep_static** · Q-TYPE-SET **cite_excel** · Q-TRAFFIC-ORG **lookup** · Q-ATGT **qty** · Q-BRANCH-MIN **min_1** · Q-KM **point_main** · Q-MANAGE **in_39** · Q-PREFIX **IX** · Q-LIST-COLS **subset** · Q-TITLE **nut_giao** · Q-DMAP **add_now** · Q-PEER-LINK **none_p1** · Q-CHILD-API **embed**
- road-route SearchInput P1 · org **DEFER P2** · XLS **OUT**
- Peer cite only · map none · GAP-CSDL-CUC-09/11 · hub NEW card formNo 16
- Gates: tz_na · xco_get_only · share_tenant
- DOMAIN-MAP add `csdl-bieu-16`→Asset (T-DM-01) — map live thiếu `16`
- open questions: **none**

## Inventory (slim)

| id | label | controlHint | write |
|----|-------|-------------|-------|
| search | Tìm | SearchTextInput | filter |
| province/interchangeType/status | Tỉnh/Loại/TT | Dropdown | shell/typed LOOKUP |
| roadCode | Đường | SearchInput | shell + road-route |
| kmMain | Km chính | Number | typed point_main filter |
| code | Mã | Text ro | shell IX- |
| name/kmAux/side | Định danh | Text/Number/Dropdown | typed Z1 |
| interchangeType/trafficOrg/main* | Đặc trưng | Dropdown/Number | typed Z2 |
| branches[] | Nhánh | child grid | Branch table · embed · min_1 |
| atgt* | ATGT | Number qty | typed Z3 |
| manageUnit/notes/lat/lng | Quản lý | Text/Textarea/Number | shell/typed · org P2 |

## Screens / zones (ids only)

- S-LIST · S-FORM-C/E/V/Copy · S-ACT-DELETE · S-HUB-ENTRY · S-SKIP-PEER · S-SKIP-MAP · DES-FORM-BRANCH
- mfeStdUrl=`http://localhost:9301/csdl-bieu-16`
- hub=`http://localhost:9301/so-ts/csdl-so-sach?resource=interchanges`

## API / tasks (ids only)

- FormMode↔API: list/C/E/V/Copy ↔ GET/POST/PUT (+ branches embed) · soft DELETE · LKP road-route
- T-DM-01 · T-BE-01..06 · T-BFF-01 · T-FE-01..06 · T-OUT-01/02 → TL

## UNCLEAR

- none

## Full paths

- solution: `specs/csdl-bieu-16/be/solution-discovery.md`
- design: `specs/csdl-bieu-16/ui/design.md`
- prior compact: `handoff/design-compact.md` · `po-compact.md` · `handoff/data_analy-compact.md`

## Next

| Role | Need |
|------|------|
| **TL** | task/csdl-bieu-16.md · T-* · gates |
| Dev | Schema_CsdlBieu16 + Branch · typed DTO embed · alias page · Slideout + child · hub NEW |
| QA | e2e queued `/agent-qa*` |

## Cấm (compact)

ERP.* · invent API/infra · detail* only · Guid IdCode · flatten-only · merge so-ts-interchange/road-assets · parent *Json · 2 catalog entity · nested branch API P1 · Step 4b/migration/e2e/build/start:std ở SA · Write MFE · re-scan demo
