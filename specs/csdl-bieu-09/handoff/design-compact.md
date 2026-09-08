# handoff-compact — design · csdl-bieu-09

| | |
|--|--|
| schemaVersion | `1` |
| role | `design` |
| feature | `csdl-bieu-09` |
| title | CSDL Biểu 09 — Mốc lộ giới / GPMB |
| packKind | `list` |
| changeScope | `new_page` |
| status | `done` |
| taskId | `task_0eed32b7` |
| resource | `boundary-markers` |
| formNo | `09` (renumber 8→9 · T-REN-01) |
| columns | `17` · 2 section kind |
| IdCode | `MK-` |
| peerSoTs | — (≠ so-ts / road-assets) |
| autoApprove | `ON` |
| e2eQa | `ON` |
| design_confirm | `approve` |
| shared_grid_example | `v1` |
| real_view_parity | `v1` |
| contentHashPrior | `sha256:863490daf95d2c19ddad660fc05f901eaeb0248fb65961f9e96747ebcf5b04e4` |
| headerFingerprintPrior | `sha256:18fb135f880ed55afa6e9277e8980fd0458a24d85d87e69a753b805424f396bb` |
| skillVersion | `2026.08.29.03` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.08.31.2` |
| writtenAt | `2026-09-05T17:55:00.000Z` |

## Decisions

- Kind **B** A–D+F + Kind **D** Slideout · `data-form-cols=2` · footer_actions_only · **2 section kind** · **cấm** Full-page
- form typed **17** · **cấm** detail* only · **cấm** 2 entity · Control = controlHint
- Q-ROUTE **alias_now** `/csdl-bieu-09` · Q-PROV **keep_static** · Q-KIND-LABEL **code_en** · Q-STRUCT **excel_seed** · Q-DIM **full_dim** · Q-QTY **show_always** · Q-LIST-COLS **subset** · Q-REN-LABEL **with_typed**
- GAP-BIEU09-TYPED/KIND/STRUCT/DIM/YEAR/BLOCK/REN/ROUTE P1 · GAP-CSDL-ROAD-01 SearchInput P1 · ORG DEFER P2 · XLS OUT stub
- peer none · map none · **cấm** merge Sổ TS
- API giữ `api/v1/asset/csdl-records` · catalogKind `boundary-markers` · **cấm** ERP.*
- design_confirm **approve** (autoApprove ON) · open Q: **none**
- Report DES-RPT **N/A** · Grid AC YES · Leave YES

## Inventory (slim)

| id | label | controlHint | notes |
|----|-------|-------------|-------|
| search | Tìm | SearchTextInput | Zone B · 🔍 cụm phải |
| province/status/side/markerKind | Tỉnh/TT/Vị trí/Loại | Dropdown | LOOKUP_STATIC |
| roadCode | Đường | SearchInput | road-route |
| kmFrom/kmTo | Km | Number | Point thường bằng |
| code | Mã | Text ro | MK- |
| markerStructure | Kết cấu | Dropdown | Excel seed |
| markerLengthM/Width/Area | KC/DT | Number | optional |
| markerQty | SL | Number | default 1 · show_always |
| completedYear | Năm HT | Number | required |
| manageUnit/notes/status | … | Text/Textarea/Dropdown | org P2 |

## Screens / zones (ids only)

- S-LIST DES-GRID-A · B · B-FILTER · C · D · F · H
- S-FORM-* DES-GRID-Z · DES-FORM-Z1–Z3 · 2 section kind · LeaveConfirmModal
- S-HUB-ENTRY · S-SKIP-MAP · **cấm** peer Sổ TS
- reviewUrl=`file:///D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-bieu-09/ui/prototype/csdl-bieu-09-list-prototype.html`
- mfeStdUrl=`http://localhost:9301/csdl-bieu-09`
- hubUrl=`http://localhost:9301/so-ts/csdl-so-sach?resource=boundary-markers`
- prototype=`specs/csdl-bieu-09/ui/prototype/csdl-bieu-09-list-prototype.html`

## API / next

- CRUD BFF `…/asset/csdl-records` · resource=boundary-markers · typed DTO **SA**
- road-route `…/integration/road-routes/search`
- Next: **SA** Schema_CsdlBieu9 · UiSchema typed · renumber formNo
- e2e: queued `/agent-qa*` only · **cấm** e2e/start:std ở Design

## UNCLEAR

- none

## Full paths (Read only if needed)

- design: `D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-bieu-09/ui/design.md`
- control-hint: `D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/csdl-bieu-09-control-hint.md`
- real-data: `D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/csdl-bieu-09-real-data.md`
- prior po: `D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-bieu-09/handoff/po-compact.md`
- STATUS: `D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-bieu-09/STATUS.md`

## Cấm (compact)

Demo/LS SSOT · ERP.* · Guid IdCode · form 3 ô only · 2 entity · invent map · merge Sổ TS · yarn build/e2e/start:std · re-scan demo · paste HTML vào compact
