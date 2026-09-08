# handoff-compact — design · csdl-bieu-01

| | |
|--|--|
| schemaVersion | `1` |
| role | `design` |
| feature | `csdl-bieu-01` |
| title | CSDL Biểu 01 — Phân loại mặt đường |
| packKind | `list` |
| changeScope | `new_page` |
| status | `done` |
| taskId | `task_4d4cd4ac` |
| resource | `pavement-sections` |
| formNo | `01` |
| columns | `38` |
| IdCode | `MD-` |
| peerSoTs | `pavement-section` |
| autoApprove | `ON` |
| e2eQa | `ON` |
| design_confirm | `approve` |
| shared_grid_example | `v1` |
| real_view_parity | `v1` |
| contentHashPrior | `sha256:3545960f4006740c9dfe57b5f004fa4a1cd1b7befbcd51e35e2168e16821b65e` |
| headerFingerprintPrior | `sha256:6376475bbf48ca5b3e8cfd26688cd877fd1bc77d5b8d8c4c3d314cd0572f5cf2` |
| skillVersion | `2026.08.29.03` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.08.31.2` |
| writtenAt | `2026-09-05T12:05:00.000Z` |

## Decisions

- Kind **B** A–D+F + Kind **D** Slideout · `data-form-cols=2` · footer_actions_only · **cấm** Full-page
- form typed **38 cột** · **cấm** detail* only · Control = controlHint
- Q-WIDTH **four_buckets** · Q-STRUCT **one_enum** · Q-ROUTE **alias_now** `/csdl-bieu-01` · Q-PROV **keep_static**
- GAP-CSDL-ROAD-01 SearchInput road-route P1 · GAP-CSDL-ORG-01 DEFER P2
- GAP-CSDL-XLS-01 / SKIP-01 OUT · peer deep-link · **cấm** merge Sổ TS · map none
- API giữ `api/v1/asset/csdl-records` · catalogKind `pavement-sections` · **cấm** ERP.*
- design_confirm **approve** (autoApprove ON) · open Q: **none**
- Report DES-RPT **N/A**

## Inventory (slim)

| id | label | controlHint | notes |
|----|-------|-------------|-------|
| search | Tìm | SearchTextInput | Zone B · 🔍 cụm phải |
| province/status | Tỉnh/TT | Dropdown | LOOKUP_STATIC |
| roadCode | Đường | SearchInput | road-route |
| kmFrom/kmTo | Km | Number | filter+form |
| code | Mã | Text ro | MD- |
| lengthKm/baseWidthM | Cdài/B nền | Number | |
| surfW* ×4 | B mặt buckets | Number | Q-WIDTH |
| structureType | Kết cấu | Dropdown | Q-STRUCT |
| plain/mountainClass | Cấp | Dropdown | I–V |
| yearsInServiceBand | Năm SD | Dropdown | |
| handover* | BG | Checkbox | |
| last*Year | Năm ĐT/SC | Number | |
| manageUnit | ĐV QL | Text | P2 SearchInput |
| notes/side/status | … | Textarea/Dropdown | |

## Screens / zones (ids only)

- S-LIST DES-GRID-A · B · B-FILTER · C0–C3 · D · F · H
- S-FORM-* DES-GRID-Z · DES-FORM-Z1–Z3 · LeaveConfirmModal
- S-HUB-ENTRY · S-PEER-SOTS · S-SKIP-MAP
- reviewUrl=`file:///D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-bieu-01/ui/prototype/csdl-bieu-01-list-prototype.html`
- mfeStdUrl=`http://localhost:9301/csdl-bieu-01`
- peerStdUrl=`http://localhost:9301/so-ts/csdl-so-sach?resource=pavement-sections`
- prototype=`specs/csdl-bieu-01/ui/prototype/csdl-bieu-01-list-prototype.html`

## API / next

- CRUD BFF `…/asset/csdl-records` · resource=pavement-sections · typed DTO **SA**
- road-route `…/integration/road-routes/search`
- Next: **SA** Schema_CsdlBieu1 · WIDTH/STRUCT storage · UiSchema typed
- e2e: queued `/agent-qa*` only · **cấm** e2e/start:std ở Design

## UNCLEAR

- none

## Full paths (Read only if needed)

- design: `D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-bieu-01/ui/design.md`
- control-hint: `D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/csdl-bieu-01-control-hint.md`
- real-data: `D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/csdl-bieu-01-real-data.md`
- prior po: `D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-bieu-01/handoff/po-compact.md`
- STATUS: `D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-bieu-01/STATUS.md`

## Cấm (compact)

Demo/LS SSOT · ERP.* · Guid IdCode · form 3 ô only · invent map · merge Sổ TS · yarn build/e2e/start:std · re-scan demo · paste HTML vào compact
