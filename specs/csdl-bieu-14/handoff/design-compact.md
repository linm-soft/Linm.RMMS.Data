# handoff-compact — design · csdl-bieu-14

| | |
|--|--|
| schemaVersion | `1` |
| role | `design` |
| feature | `csdl-bieu-14` |
| title | CSDL Biểu 14 — Hệ thống ITS (GTTM) |
| packKind | `list` |
| changeScope | `new_page` |
| status | `done` |
| taskId | `task_d302ab8a` |
| resource | `its-systems` |
| formNo | `14` |
| columns | `21` · section vị trí + TB ITS + HT gắn kèm |
| IdCode | `IT-` |
| peerSoTs | `so-ts-its-camera` · **cấm** merge · none_p1 |
| autoApprove | `ON` |
| e2eQa | `ON` |
| design_confirm | `approve` |
| shared_grid_example | `v1` |
| real_view_parity | `v1` |
| contentHashPrior | `sha256:6cfdefa3baaffcf2bd97c7a429bb5043e7f9d77b96bbb77eafaa34689007b112` |
| headerFingerprintPrior | `sha256:14cd156a898dcc971a072dd1cd1b92460a8b597558a90dc9854fead9d4c4de5c` |
| skillVersion | `2026.08.29.03` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.08.31.2` |
| writtenAt | `2026-09-05T14:55:00.000Z` |

## Decisions

- Kind **B** A–D+F + Kind **D** Slideout · `data-form-cols=2` · footer_actions_only · section Vị trí tuyến + Thiết bị ITS + Hạ tầng gắn kèm · **cấm** Full-page
- form typed **21** · **cấm** detail* only · Control = controlHint · device keep_5 · infra keep_3
- Q-ROUTE **alias_now** `/csdl-bieu-14` · Q-PROV **keep_static** · Q-DIR **lookup** · Q-QTY-UNIT **number** · Q-DEVICE-SET **keep_5** · Q-INFRA-SET **keep_3** · Q-MANAGE **trail_p2** · Q-PREFIX **IT** · Q-LIST-COLS **subset** · Q-TITLE **ctx_its** · Q-DMAP **add_now** · Q-PEER-LINK **none_p1** · Q-SO09 **none_p1**
- GAP-BIEU14-HUB/TYPED/ROUTE/DEV/INFRA/GPS/DIR/DMAP P1 · GAP-CSDL-ROAD-01 SearchInput P1 · ORG DEFER P2 · XLS OUT stub
- peer cite only · map none · hub NEW card formNo 14 «Hệ thống ITS (GTTM)»
- API giữ `api/v1/asset/csdl-records` · catalogKind `its-systems` · **cấm** ERP.* · **cấm** invent infra · **cấm** road-assets / ITS AiVision
- design_confirm **approve** (autoApprove ON) · open Q: **none**
- Report DES-RPT **N/A** · Grid AC YES · Leave YES

## Inventory (slim)

| id | label | controlHint | notes |
|----|-------|-------------|-------|
| search | Tìm | SearchTextInput | Zone B · 🔍 cụm phải |
| province/operatingStatus/deviceType/side | Tỉnh/TT HĐ/Loại TB/Vị trí | Dropdown | LOOKUP_STATIC |
| roadCode | Đường | SearchInput | road-route |
| kmFrom/kmTo | Km | Number | Line |
| code | Mã | Text ro | IT- |
| direction/gpsLat/gpsLng | Hướng/GPS | Dropdown/Number | Z1 |
| deviceType/brand/techSpec/qtyOrLength/operatingStatus | TB ITS | Dropdown/Text/Textarea/Number | Z2 |
| infraKind/clearanceM/infraQty/systemStatus/yearBuilt/notes | HT | Dropdown/Number/Textarea | Z3 · manageUnit P2 |

## Screens / zones (ids only)

- S-LIST DES-GRID-A · B · B-FILTER · C · D · F · H
- S-FORM-* DES-GRID-Z · DES-FORM-Z1–Z3 · Z2 Thiết bị ITS · Z3 Hạ tầng gắn kèm · LeaveConfirmModal
- S-HUB-ENTRY · S-SKIP-MAP · S-SKIP-PEER
- reviewUrl=`file:///D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-bieu-14/ui/prototype/csdl-bieu-14-list-prototype.html`
- mfeStdUrl=`http://localhost:9301/csdl-bieu-14`
- hubUrl=`http://localhost:9301/so-ts/csdl-so-sach?resource=its-systems`
- prototype=`specs/csdl-bieu-14/ui/prototype/csdl-bieu-14-list-prototype.html`

## API / next

- CRUD BFF `…/asset/csdl-records` · resource=its-systems · typed DTO **SA**
- road-route `…/integration/road-routes/search`
- Next: **SA** Schema_CsdlBieu14 · UiSchema typed · Device*/Infra*/Gps* · DOMAIN-MAP slug · **cấm** invent infra · **cấm** merge road-assets/ITS AiVision
- e2e: queued `/agent-qa*` only · **cấm** e2e/start:std ở Design

## UNCLEAR

- none

## Full paths (Read only if needed)

- design: `D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-bieu-14/ui/design.md`
- control-hint: `D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/csdl-bieu-14-control-hint.md`
- real-data: `D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/csdl-bieu-14-real-data.md`
- prior po: `D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-bieu-14/handoff/po-compact.md`
- STATUS: `D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-bieu-14/STATUS.md`

## Cấm (compact)

Demo/LS SSOT · ERP.* · Guid IdCode · form 3 ô only · invent map · invent infra API · merge so-ts-its-camera/road-assets/ITS AiVision · yarn build/e2e/start:std · re-scan demo · paste HTML vào compact
