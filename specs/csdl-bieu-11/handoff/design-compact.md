# handoff-compact — design · csdl-bieu-11

| | |
|--|--|
| schemaVersion | `1` |
| role | `design` |
| feature | `csdl-bieu-11` |
| title | CSDL Biểu 11 — Hệ thống chiếu sáng |
| packKind | `list` |
| changeScope | `new_page` |
| status | `done` |
| taskId | `task_94e69c1a` |
| resource | `lighting-systems` |
| formNo | `11` |
| columns | `24` · 2 section lưới + NLMT |
| IdCode | `LT-` |
| peerSoTs | `so-ts-lighting` (toolbar deep-link · ≠ merge · qty ≠ điểm) |
| autoApprove | `ON` |
| e2eQa | `ON` |
| design_confirm | `approve` |
| shared_grid_example | `v1` |
| real_view_parity | `v1` |
| contentHashPrior | `sha256:7980db07b4712336ab0b675fa89feaab75c67fdaef3b54fe94647ab9ec1863d8` |
| headerFingerprintPrior | `sha256:b37759a9224c09c7c63bc81583b4a9bcbca02e74cba8b63579819e90d57f1d1a` |
| skillVersion | `2026.08.29.03` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.08.31.2` |
| writtenAt | `2026-09-05T12:25:00.000Z` |

## Decisions

- Kind **B** A–D+F + Kind **D** Slideout · `data-form-cols=2` · footer_actions_only · **2 section** lưới + NLMT · **cấm** Full-page
- form typed **24** · **cấm** detail* only · Control = controlHint
- Q-ROUTE **alias_now** `/csdl-bieu-11` · Q-PROV **keep_static** · Q-GRID-STATUS **align_status** · Q-LED-ZERO **allow_zero** · Q-SOLAR-REQ **optional** · Q-CABINET **split** · Q-LIST-COLS **subset** · Q-PEER **toolbar** · Q-TITLE **keep_demo**
- GAP-BIEU11-TYPED/ROUTE/GRID/LED/STATUS/QTY/SOLAR/BLOCK P1 · GAP-CSDL-ROAD-01 SearchInput P1 · ORG DEFER P2 · XLS OUT stub
- peer toolbar `so-ts-lighting` · map none · **cấm** merge Sổ TS · **cấm** dump điểm→qty
- API giữ `api/v1/asset/csdl-records` · catalogKind `lighting-systems` · **cấm** ERP.*
- design_confirm **approve** (autoApprove ON) · open Q: **none**
- Report DES-RPT **N/A** · Grid AC YES · Leave YES

## Inventory (slim)

| id | label | controlHint | notes |
|----|-------|-------------|-------|
| search | Tìm | SearchTextInput | Zone B · 🔍 cụm phải |
| province/status/side | Tỉnh/TT/Vị trí | Dropdown | LOOKUP_STATIC |
| roadCode | Đường | SearchInput | road-route |
| kmFrom/kmTo | Km | Number | Line |
| code | Mã | Text ro | LT- |
| gridLed600/240/150/125 | LED qty | Number | allow_zero |
| gridStatus | TT lưới | Dropdown | align_status |
| gridPoleCount/cabinetCount/substationCount | Cột/tủ/TBA | Number | cabinet split |
| solar* (6) | NLMT qty | Number | optional |
| manageUnit/notes/status | … | Text/Textarea/Dropdown | org P2 |

## Screens / zones (ids only)

- S-LIST DES-GRID-A · B · B-FILTER · C · D · F · H · peer toolbar
- S-FORM-* DES-GRID-Z · DES-FORM-Z1–Z3 · Z2b NLMT · LeaveConfirmModal
- S-HUB-ENTRY · S-PEER · S-SKIP-MAP
- reviewUrl=`file:///D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-bieu-11/ui/prototype/csdl-bieu-11-list-prototype.html`
- mfeStdUrl=`http://localhost:9301/csdl-bieu-11`
- hubUrl=`http://localhost:9301/so-ts/csdl-so-sach?resource=lighting-systems`
- prototype=`specs/csdl-bieu-11/ui/prototype/csdl-bieu-11-list-prototype.html`

## API / next

- CRUD BFF `…/asset/csdl-records` · resource=lighting-systems · typed DTO **SA**
- road-route `…/integration/road-routes/search`
- Next: **SA** Schema_CsdlBieu11 · UiSchema typed · GridLed*/Solar*
- e2e: queued `/agent-qa*` only · **cấm** e2e/start:std ở Design

## UNCLEAR

- none

## Full paths (Read only if needed)

- design: `D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-bieu-11/ui/design.md`
- control-hint: `D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/csdl-bieu-11-control-hint.md`
- real-data: `D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/csdl-bieu-11-real-data.md`
- prior po: `D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-bieu-11/handoff/po-compact.md`
- STATUS: `D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-bieu-11/STATUS.md`

## Cấm (compact)

Demo/LS SSOT · ERP.* · Guid IdCode · form 3 ô only · invent map · merge Sổ TS · dump điểm→qty · yarn build/e2e/start:std · re-scan demo · paste HTML vào compact
