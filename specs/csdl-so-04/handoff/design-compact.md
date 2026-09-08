# handoff-compact — design · csdl-so-04

| | |
|--|--|
| schemaVersion | `1` |
| role | `design` |
| feature | `csdl-so-04` |
| title | CSDL Sổ 04 — Tổng hợp đếm xe |
| packKind | `list` |
| changeScope | `new_page` |
| status | `done` |
| taskId | `task_e5edcfa3` |
| resource | `traffic-counts` |
| formNo | `04` |
| IdCode | `SO-` |
| autoApprove | `ON` |
| e2eQa | `ON` |
| design_confirm | `approve` |
| shared_grid_example | `v1` |
| real_view_parity | `v1` |
| contentHashPrior | `sha256:f4b9c168d339477350ba42a03f7ec00e774b38da0ecc6037de8950d9f25e944d` |
| headerFingerprintPrior | `sha256:202e875ac43d1dd97b8ac8f32d3528ac827776078cde980e7bb6ca9634aff7e2` |
| skillVersion | `2026.08.25.01` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.08.31.2` |
| writtenAt | `2026-09-06T05:20:00.000Z` |

## Decisions

- Kind **B** A–D+F+H + Kind **D** Slideout · `data-form-cols=2` · footer_actions_only · count matrix 16 class (**không** journal)
- Control = controlHint · **cấm** detail*/col1–3 · **cấm** TNGT · title «Sổ 04 — Tổng hợp đếm xe»
- Alias `/csdl-so-04` + hub `?resource=traffic-counts` · giữ key · split so-05
- Filter-bar HARD 1 hàng · SearchText+🔍 · province/status/road/station/year/quarter/countMethod · **cấm** nút Tìm
- station SearchInput P1 · road SearchInput P1 · countMethod `manual|auto` · status draft|active|closed · contractor Text P1 · org DEFER P2 · XLS OUT
- class01…16 interim «Hạng xe {nn}» · Excel overlay pending cite · totalCars readonly derived
- Unique hard 422 station+year+quarter · API giữ `…/csdl-records` · map none · DES-RPT N/A
- design_confirm **approve** (autoApprove ON) · open Q: **none**

## Inventory (slim)

| id | label | controlHint | notes |
|----|-------|-------------|-------|
| search | Tìm | SearchTextInput | Zone B · 🔍 cụm phải |
| province/status | Tỉnh/TT | Dropdown | LOOKUP_STATIC · draft/active/closed |
| roadCode | Đường | SearchInput | road-route |
| stationCode | Trạm | SearchInput | count-station |
| year/quarter | Năm/Quý | Integer/Dropdown | filter+form |
| countMethod | PP | Dropdown | manual\|auto |
| code | Mã | Text ro | SO- |
| bookNo/contractor | Số quyển/NT | Text | req · NT Text P1 |
| station*/road* | Trạm/Đường | SearchInput+display | req |
| kmFrom/kmTo | Km | Number | kmFrom req |
| notes | Ghi chú | Textarea | |
| class01…16 | Hạng xe nn | Number | req · interim label |
| totalCars | Tổng ôtô | Number ro | derived sum |

## Screens / zones (ids only)

- S-LIST DES-GRID-A · B · B-FILTER · C · D · F · H
- S-FORM-* DES-GRID-Z · DES-FORM-Z1–Z3 · DES-COUNT-MATRIX · LeaveConfirmModal
- S-HUB-ENTRY (title không TNGT) · S-SKIP-MAP
- reviewUrl=`file:///D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-so-04/ui/prototype/csdl-so-04-list-prototype.html`
- mfeStdUrl=`http://localhost:9301/csdl-so-04`
- peerStdUrl=`http://localhost:9301/so-ts/csdl-so-sach?resource=traffic-counts`
- prototype=`specs/csdl-so-04/ui/prototype/csdl-so-04-list-prototype.html`

## API / next

- CRUD BFF `…/asset/csdl-records` · resource=traffic-counts · typed DTO **SA**
- road-route `…/integration/road-routes/search` · COUNT_STATION peer LOOKUP
- Next: **SA** Schema_CsdlSo04 · unique station+year+quarter · totalCars derived · typed UiSchema
- e2e: queued `/agent-qa*` only · **cấm** e2e/start:std ở Design

## UNCLEAR

- none (class Excel overlay = pending cite when file lands · keys ổn định)

## Full paths (Read only if needed)

- design: `D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-so-04/ui/design.md`
- control-hint: `D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/csdl-so-04-control-hint.md`
- real-data: `D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/csdl-so-04-real-data.md`
- prior po: `D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-so-04/handoff/po-compact.md`
- STATUS: `D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-so-04/STATUS.md`

## Cấm (compact)

Demo/LS SSOT · ERP.* · Guid IdCode · form 3 ô/col1–3 only · gộp TNGT · invent map · yarn build/e2e/start:std · re-scan demo · paste HTML vào compact · CRUD rpt-dem-xe
