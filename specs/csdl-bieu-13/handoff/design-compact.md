# handoff-compact — design · csdl-bieu-13

| | |
|--|--|
| schemaVersion | `1` |
| role | `design` |
| feature | `csdl-bieu-13` |
| title | CSDL Biểu 13 — Tường chống ồn |
| packKind | `list` |
| changeScope | `new_page` |
| status | `done` |
| taskId | `task_ba6fcf2c` |
| resource | `noise-barriers` |
| formNo | `13` |
| columns | `13` · section vị trí + kích thước |
| IdCode | `TC-` |
| peerSoTs | `so-ts-noise-barrier` · **cấm** merge · none_p1 |
| autoApprove | `ON` |
| e2eQa | `ON` |
| design_confirm | `approve` |
| shared_grid_example | `v1` |
| real_view_parity | `v1` |
| contentHashPrior | `sha256:39a45de0a9b834c65373e6c20d1664ab43144ff60d97bae4f0d886ad09d91e3a` |
| headerFingerprintPrior | `sha256:31dbc83200b511c9d61333b1cdb94e2880778980a3b21970be414e926db29008` |
| skillVersion | `2026.08.29.03` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.08.31.2` |
| writtenAt | `2026-09-05T14:10:00.000Z` |

## Decisions

- Kind **B** A–D+F + Kind **D** Slideout · `data-form-cols=2` · footer_actions_only · section Vị trí tuyến + Kích thước tường · **cấm** Full-page
- form typed **13** · **cấm** detail* only · Control = controlHint · **cấm** barrierType ngoài 13
- Q-ROUTE **alias_now** `/csdl-bieu-13` · Q-PROV **keep_static** · Q-BARRIER-TYPE **no_type_keep_13** · Q-AREA-DERIVE **manual** · Q-PREFIX **TC** · Q-LIST-COLS **subset** · Q-TITLE **ctx_tuong** · Q-DMAP **add_now** · Q-PEER-LINK **none_p1**
- GAP-BIEU13-HUB/TYPED/ROUTE/DIM/SIDE/DMAP P1 · GAP-CSDL-ROAD-01 SearchInput P1 · ORG DEFER P2 · XLS OUT stub
- peer cite only · map none · hub NEW card formNo 13
- API giữ `api/v1/asset/csdl-records` · catalogKind `noise-barriers` · **cấm** ERP.* · **cấm** road-assets
- design_confirm **approve** (autoApprove ON) · open Q: **none**
- Report DES-RPT **N/A** · Grid AC YES · Leave YES

## Inventory (slim)

| id | label | controlHint | notes |
|----|-------|-------------|-------|
| search | Tìm | SearchTextInput | Zone B · 🔍 cụm phải |
| province/status/side | Tỉnh/TT/Vị trí | Dropdown | LOOKUP_STATIC · L/R/C/Both |
| roadCode | Đường | SearchInput | road-route |
| kmFrom/kmTo | Km | Number | Line |
| code | Mã | Text ro | TC- |
| lengthM/heightM/areaM2 | Dài/Cao/DT | Number | area manual |
| manageUnit/notes/status | … | Text/Textarea/Dropdown | org P2 |

## Screens / zones (ids only)

- S-LIST DES-GRID-A · B · B-FILTER · C · D · F · H
- S-FORM-* DES-GRID-Z · DES-FORM-Z1–Z3 · Z2 Kích thước tường · LeaveConfirmModal
- S-HUB-ENTRY · S-SKIP-MAP · S-SKIP-PEER
- reviewUrl=`file:///D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-bieu-13/ui/prototype/csdl-bieu-13-list-prototype.html`
- mfeStdUrl=`http://localhost:9301/csdl-bieu-13`
- hubUrl=`http://localhost:9301/so-ts/csdl-so-sach?resource=noise-barriers`
- prototype=`specs/csdl-bieu-13/ui/prototype/csdl-bieu-13-list-prototype.html`

## API / next

- CRUD BFF `…/asset/csdl-records` · resource=noise-barriers · typed DTO **SA**
- road-route `…/integration/road-routes/search`
- Next: **SA** Schema_CsdlBieu13 · UiSchema typed · LengthM/HeightM/AreaM2 · DOMAIN-MAP slug · **cấm** merge road-assets
- e2e: queued `/agent-qa*` only · **cấm** e2e/start:std ở Design

## UNCLEAR

- none

## Full paths (Read only if needed)

- design: `D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-bieu-13/ui/design.md`
- control-hint: `D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/csdl-bieu-13-control-hint.md`
- real-data: `D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/csdl-bieu-13-real-data.md`
- prior po: `D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-bieu-13/handoff/po-compact.md`
- STATUS: `D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-bieu-13/STATUS.md`

## Cấm (compact)

Demo/LS SSOT · ERP.* · Guid IdCode · form 3 ô only · invent map · merge so-ts-noise-barrier/road-assets · yarn build/e2e/start:std · re-scan demo · paste HTML vào compact
