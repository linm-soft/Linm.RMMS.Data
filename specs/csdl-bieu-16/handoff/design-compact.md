# handoff-compact — design · csdl-bieu-16

| | |
|--|--|
| schemaVersion | `1` |
| role | `design` |
| feature | `csdl-bieu-16` |
| title | CSDL Biểu 16 — Nút giao |
| packKind | `list` |
| changeScope | `new_page` |
| status | `done` |
| taskId | `task_e0f9dbb6` |
| resource | `interchanges` |
| formNo | `16` |
| columns | `39` · header + child branches[] + ATGT |
| IdCode | `IX-` |
| peerSoTs | `so-ts-interchange` · **cấm** merge · none_p1 |
| autoApprove | `ON` |
| e2eQa | `ON` |
| design_confirm | `approve` |
| shared_grid_example | `v1` |
| real_view_parity | `v1` |
| contentHashPrior | `sha256:56e2fb16e9bcde21f17d7e9639b72660666778f5393b1270cecc49d123beba4b` |
| headerFingerprintPrior | `sha256:ec787bf2008ae89f1b6c085fe238f1b0d50b048f5c672b90b68d9ea102cf8fcc` |
| skillVersion | `2026.08.29.03` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.08.31.2` |
| writtenAt | `2026-09-05T16:25:00.000Z` |

## Decisions

- Kind **B** A–D+F + Kind **D** Slideout · `data-form-cols=2` · footer_actions_only · 5 section Định danh + Đặc trưng nút + Nhánh child + ATGT + Quản lý · **cấm** Full-page
- form typed **39** · **cấm** detail* only · Control = controlHint · child `branches[]` **min_1** · **cấm** flatten-only · ATGT qty
- Q-ROUTE **alias_now** `/csdl-bieu-16` · Q-PROV **keep_static** · Q-TYPE-SET **cite_excel** · Q-TRAFFIC-ORG **lookup** · Q-ATGT **qty** · Q-BRANCH-MIN **min_1** · Q-KM **point_main** · Q-MANAGE **in_39** · Q-PREFIX **IX** · Q-LIST-COLS **subset** · Q-TITLE **nut_giao** · Q-DMAP **add_now** · Q-PEER-LINK **none_p1** · Q-CHILD-API **embed**
- GAP-BIEU16-HUB/TYPED/ROUTE/BRANCH/TYPE/MAIN/ATGT/KM/DMAP P1 · GAP-CSDL-CUC-09 child · ROAD SearchInput P1 · ORG Text P1→org P2 · XLS OUT stub
- peer cite only · map none · hub NEW card formNo 16 «Nút giao»
- API giữ `api/v1/asset/csdl-records` · catalogKind `interchanges` · **cấm** ERP.* · **cấm** invent infra · **cấm** road-assets / so-ts-*
- design_confirm **approve** (autoApprove ON) · open Q: **none**
- Report DES-RPT **N/A** · Grid AC YES · Leave YES

## Inventory (slim)

| id | label | controlHint | notes |
|----|-------|-------------|-------|
| search | Tìm | SearchTextInput | Zone B · 🔍 cụm phải |
| province/interchangeType/status | Tỉnh/Loại/TT | Dropdown | LOOKUP_STATIC · cite_excel |
| roadCode | Đường | SearchInput | road-route |
| kmMain | Km chính | Number | point_main filter |
| code | Mã | Text ro | IX- |
| name/kmAux/side | Định danh | Text/Number/Dropdown | Z1 |
| interchangeType/trafficOrg/main* | Đặc trưng | Dropdown/Number | Z2 |
| branches[] | Nhánh | child grid | min_1 · add/remove |
| atgt* | ATGT | Number qty | Z3 |
| manageUnit/notes/lat/lng | Quản lý | Text/Textarea/Number | in_39 · org P2 |

## Screens / zones (ids only)

- S-LIST DES-GRID-A · B · B-FILTER · C · D · F · H
- S-FORM-* DES-GRID-Z · DES-FORM-Z1–Z3 · DES-FORM-BRANCH · LeaveConfirmModal
- S-HUB-ENTRY · S-SKIP-MAP · S-SKIP-PEER
- reviewUrl=`file:///D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-bieu-16/ui/prototype/csdl-bieu-16-list-prototype.html`
- mfeStdUrl=`http://localhost:9301/csdl-bieu-16`
- hubUrl=`http://localhost:9301/so-ts/csdl-so-sach?resource=interchanges`
- prototype=`specs/csdl-bieu-16/ui/prototype/csdl-bieu-16-list-prototype.html`

## API / next

- CRUD BFF `…/asset/csdl-records` · resource=interchanges · typed + `branches[]` embed **SA**
- road-route `…/integration/road-routes/search`
- Next: **SA** Schema_CsdlBieu16 + Branch · UiSchema typed · DOMAIN-MAP slug · **cấm** invent infra · **cấm** merge road-assets/so-ts-interchange
- e2e: queued `/agent-qa*` only · **cấm** e2e/start:std ở Design

## UNCLEAR

- none

## Full paths (Read only if needed)

- design: `D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-bieu-16/ui/design.md`
- control-hint: `D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/csdl-bieu-16-control-hint.md`
- real-data: `D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/csdl-bieu-16-real-data.md`
- prior po: `D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-bieu-16/handoff/po-compact.md`
- STATUS: `D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-bieu-16/STATUS.md`

## Cấm (compact)

Demo/LS SSOT · ERP.* · Guid IdCode · form 3 ô only · flatten-only · invent map · invent infra API · merge so-ts-interchange/road-assets · yarn build/e2e/start:std · re-scan demo · paste HTML vào compact
