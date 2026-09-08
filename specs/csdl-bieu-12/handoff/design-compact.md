# handoff-compact — design · csdl-bieu-12

| | |
|--|--|
| schemaVersion | `1` |
| role | `design` |
| feature | `csdl-bieu-12` |
| title | CSDL Biểu 12 — Cây xanh, thảm cỏ |
| packKind | `list` |
| changeScope | `new_page` |
| status | `done` |
| taskId | `task_8d909c44` |
| resource | `green-assets` |
| formNo | `12` |
| columns | `15` · 2 section khóm + thảm cỏ |
| IdCode | `CX-` |
| peerSoTs | — (không peer · **cấm** invent so-ts-green) |
| autoApprove | `ON` |
| e2eQa | `ON` |
| design_confirm | `approve` |
| shared_grid_example | `v1` |
| real_view_parity | `v1` |
| contentHashPrior | `sha256:6da498be3a84192c6f3e3c30a7e8032bf2753359591a9aabd3ad36d809f4c457` |
| headerFingerprintPrior | `sha256:54aef0c755530d138ecefa7a303b22c78c32ca1b6ae3555d5bb33492799b5af9` |
| skillVersion | `2026.08.29.03` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.08.31.2` |
| writtenAt | `2026-09-05T13:15:00.000Z` |

## Decisions

- Kind **B** A–D+F + Kind **D** Slideout · `data-form-cols=2` · footer_actions_only · **2 section** Khóm cây + Thảm cỏ · **cấm** Full-page
- form typed **15** · **cấm** detail* only · Control = controlHint
- Q-ROUTE **alias_now** `/csdl-bieu-12` · Q-PROV **keep_static** · Q-OTHER-CLUMP **keep_other** · Q-GRASS-REQ **allow_either** · Q-TALUY **side_only** · Q-LIST-COLS **subset** · Q-TITLE **keep_demo** · Q-DMAP **add_now**
- GAP-BIEU12-TYPED/ROUTE/CLUMP/GRASS/SIDE/DMAP P1 · GAP-CSDL-ROAD-01 SearchInput P1 · ORG DEFER P2 · XLS OUT stub
- peer **none** · map none · **cấm** invent so-ts-green
- API giữ `api/v1/asset/csdl-records` · catalogKind `green-assets` · **cấm** ERP.*
- design_confirm **approve** (autoApprove ON) · open Q: **none**
- Report DES-RPT **N/A** · Grid AC YES · Leave YES

## Inventory (slim)

| id | label | controlHint | notes |
|----|-------|-------------|-------|
| search | Tìm | SearchTextInput | Zone B · 🔍 cụm phải |
| province/status/side | Tỉnh/TT/Vị trí | Dropdown | LOOKUP_STATIC · side_only |
| roadCode | Đường | SearchInput | road-route |
| kmFrom/kmTo | Km | Number | Line/Polygon |
| code | Mã | Text ro | CX- |
| oleander/ngau/palm/otherClumps | Khóm SL | Number | keep_other |
| grassAreaM2 | Thảm cỏ m² | Number | allow_either |
| manageUnit/notes/status | … | Text/Textarea/Dropdown | org P2 |

## Screens / zones (ids only)

- S-LIST DES-GRID-A · B · B-FILTER · C · D · F · H
- S-FORM-* DES-GRID-Z · DES-FORM-Z1–Z3 · Z2b Thảm cỏ · LeaveConfirmModal
- S-HUB-ENTRY · S-SKIP-MAP · S-SKIP-PEER
- reviewUrl=`file:///D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-bieu-12/ui/prototype/csdl-bieu-12-list-prototype.html`
- mfeStdUrl=`http://localhost:9301/csdl-bieu-12`
- hubUrl=`http://localhost:9301/so-ts/csdl-so-sach?resource=green-assets`
- prototype=`specs/csdl-bieu-12/ui/prototype/csdl-bieu-12-list-prototype.html`

## API / next

- CRUD BFF `…/asset/csdl-records` · resource=green-assets · typed DTO **SA**
- road-route `…/integration/road-routes/search`
- Next: **SA** Schema_CsdlBieu12 · UiSchema typed · Oleander*/GrassAreaM2 · DOMAIN-MAP slug
- e2e: queued `/agent-qa*` only · **cấm** e2e/start:std ở Design

## UNCLEAR

- none

## Full paths (Read only if needed)

- design: `D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-bieu-12/ui/design.md`
- control-hint: `D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/csdl-bieu-12-control-hint.md`
- real-data: `D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/csdl-bieu-12-real-data.md`
- prior po: `D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-bieu-12/handoff/po-compact.md`
- STATUS: `D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-bieu-12/STATUS.md`

## Cấm (compact)

Demo/LS SSOT · ERP.* · Guid IdCode · form 3 ô only · invent map · invent so-ts-green · yarn build/e2e/start:std · re-scan demo · paste HTML vào compact
