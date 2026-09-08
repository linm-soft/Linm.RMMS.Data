# handoff-compact — design · csdl-bieu-10

| | |
|--|--|
| schemaVersion | `1` |
| role | `design` |
| feature | `csdl-bieu-10` |
| title | CSDL Biểu 10 — Kè, tường chắn |
| packKind | `list` |
| changeScope | `new_page` |
| status | `done` |
| taskId | `task_652820eb` |
| resource | `retaining-walls` |
| formNo | `10` (renumber 9→10 · T-REN-01) |
| columns | `21` · 2 section tường + rãnh đỉnh |
| IdCode | `KE-` |
| peerSoTs | `so-ts-retaining` (toolbar deep-link · ≠ merge) |
| autoApprove | `ON` |
| e2eQa | `ON` |
| design_confirm | `approve` |
| shared_grid_example | `v1` |
| real_view_parity | `v1` |
| contentHashPrior | `sha256:56715ebbcfffd0589eab296a31137e79a82b49c672dc14582fc554f4ed262346` |
| headerFingerprintPrior | `sha256:100df2f2285c57a909981f9248564af4f788a1ea653fd261122e9a64064773ad` |
| skillVersion | `2026.08.29.03` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.08.31.2` |
| writtenAt | `2026-09-05T18:30:00.000Z` |

## Decisions

- Kind **B** A–D+F + Kind **D** Slideout · `data-form-cols=2` · footer_actions_only · **2 section** tường + rãnh đỉnh · **cấm** Full-page
- form typed **21** · **cấm** detail* only · **cấm** CrestDitch child P1 · Control = controlHint
- Q-ROUTE **alias_now** `/csdl-bieu-10` · Q-PROV **keep_static** · Q-KIND **label_vn** · Q-STRUCT **excel_seed** · Q-MAT **lookup** · Q-HEIGHT **height_alias** · Q-CREST **optional_flat** · Q-AREA **optional** · Q-LIST-COLS **subset** · Q-REN-LABEL **with_typed** · Q-PEER **toolbar**
- GAP-BIEU10-TYPED/REN/ROUTE/KIND/STRUCT/MAT/DIM/CREST/YEAR/BLOCK P1 · GAP-CSDL-ROAD-01 SearchInput P1 · ORG DEFER P2 · XLS OUT stub
- peer toolbar `so-ts-retaining` · map none · **cấm** merge Sổ TS
- API giữ `api/v1/asset/csdl-records` · catalogKind `retaining-walls` · **cấm** ERP.*
- design_confirm **approve** (autoApprove ON) · open Q: **none**
- Report DES-RPT **N/A** · Grid AC YES · Leave YES

## Inventory (slim)

| id | label | controlHint | notes |
|----|-------|-------------|-------|
| search | Tìm | SearchTextInput | Zone B · 🔍 cụm phải |
| province/status/side/wallKind | Tỉnh/TT/Vị trí/Loại | Dropdown | LOOKUP_STATIC · label_vn |
| roadCode | Đường | SearchInput | road-route |
| kmFrom/kmTo | Km | Number | Line |
| code | Mã | Text ro | KE- |
| structure/material | KC/VL | Dropdown | Excel seed / lookup |
| lengthM/heightM/areaM2 | Dài/Cao/DT | Number | heightM↔WidthM · area optional |
| crestDitch* (4) | Rãnh đỉnh | Dropdown/Number | optional_flat |
| inServiceYear | Năm SD | Number | required |
| manageUnit/notes/status | … | Text/Textarea/Dropdown | org P2 |

## Screens / zones (ids only)

- S-LIST DES-GRID-A · B · B-FILTER · C · D · F · H · peer toolbar
- S-FORM-* DES-GRID-Z · DES-FORM-Z1–Z3 · Z2b rãnh đỉnh · LeaveConfirmModal
- S-HUB-ENTRY · S-PEER · S-SKIP-MAP
- reviewUrl=`file:///D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-bieu-10/ui/prototype/csdl-bieu-10-list-prototype.html`
- mfeStdUrl=`http://localhost:9301/csdl-bieu-10`
- hubUrl=`http://localhost:9301/so-ts/csdl-so-sach?resource=retaining-walls`
- prototype=`specs/csdl-bieu-10/ui/prototype/csdl-bieu-10-list-prototype.html`

## API / next

- CRUD BFF `…/asset/csdl-records` · resource=retaining-walls · typed DTO **SA**
- road-route `…/integration/road-routes/search`
- Next: **SA** Schema_CsdlBieu10 · UiSchema typed · renumber formNo · heightM↔WidthM
- e2e: queued `/agent-qa*` only · **cấm** e2e/start:std ở Design

## UNCLEAR

- none

## Full paths (Read only if needed)

- design: `D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-bieu-10/ui/design.md`
- control-hint: `D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/csdl-bieu-10-control-hint.md`
- real-data: `D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/csdl-bieu-10-real-data.md`
- prior po: `D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-bieu-10/handoff/po-compact.md`
- STATUS: `D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-bieu-10/STATUS.md`

## Cấm (compact)

Demo/LS SSOT · ERP.* · Guid IdCode · form 3 ô only · CrestDitch child P1 · invent map · merge Sổ TS · yarn build/e2e/start:std · re-scan demo · paste HTML vào compact
