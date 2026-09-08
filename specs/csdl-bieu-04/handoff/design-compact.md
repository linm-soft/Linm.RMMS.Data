# handoff-compact — design · csdl-bieu-04

| | |
|--|--|
| schemaVersion | `1` |
| role | `design` |
| feature | `csdl-bieu-04` |
| title | CSDL Biểu 04 — Cống các loại |
| packKind | `list` |
| changeScope | `new_page` |
| status | `done` |
| taskId | `task_95985c62` |
| resource | `culverts` |
| formNo | `04` |
| columns | `17` |
| IdCode | `CG-` |
| peerSoTs | `so-ts-culvert-x` |
| autoApprove | `ON` |
| e2eQa | `ON` |
| design_confirm | `approve` |
| shared_grid_example | `v1` |
| real_view_parity | `v1` |
| contentHashPrior | `sha256:7498ad6644d0e599bc40afb7589db5335c18adb4b92f1573de3c1fae2e17d3d6` |
| headerFingerprintPrior | `sha256:155df2db0952d6e139fbedac748878ecd5c607d506fdf5fccc172f5b0f937024` |
| skillVersion | `2026.08.29.03` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.08.31.2` |
| writtenAt | `2026-09-05T13:05:00.000Z` |

## Decisions

- Kind **B** A–D+F + Kind **D** Slideout · `data-form-cols=2` · footer_actions_only · **cấm** Full-page
- form typed **17 cột** · **cấm** detail* only · Control = controlHint
- Q-GPS **four_xy** · Q-ROUTE **alias_now** `/csdl-bieu-04` · Q-PROV **keep_static** · Q-LOAD **free_text**
- GAP-CSDL-ROAD-01 SearchInput road-route P1 · GAP-BIEU04-SHAPE-01 Dropdown hộp/tròn
- GAP-CSDL-ORG-01 DEFER P2 · GAP-CSDL-XLS-01 OUT stub · peer deep-link · **cấm** merge Sổ TS · map none
- API giữ `api/v1/asset/csdl-records` · catalogKind `culverts` · **cấm** ERP.*
- design_confirm **approve** (autoApprove ON) · open Q: **none**
- Report DES-RPT **N/A**

## Inventory (slim)

| id | label | controlHint | notes |
|----|-------|-------------|-------|
| search | Tìm | SearchTextInput | Zone B · 🔍 cụm phải |
| province/status | Tỉnh/TT | Dropdown | LOOKUP_STATIC |
| roadCode | Đường | SearchInput | road-route |
| kmPoint | Km điểm | Number | filter+form |
| code | Mã | Text ro | CG- |
| gps* ×4 | GPS cống/đường | Number | Q-GPS four_xy |
| apertureM | Khẩu độ | Number | * |
| shape | Hình | Dropdown | hộp/tròn |
| bodyMaterial | Thân | Dropdown | |
| inlet/outlet | Đầu TL/HL | Text | |
| lengthM | Cdài | Number | * |
| loadClass | Tải | Text | Q-LOAD |
| builtYear | Năm | Number | |
| manageUnit | ĐV QL | Text | P2 SearchInput |
| notes/side/status | … | Textarea/Dropdown | |

## Screens / zones (ids only)

- S-LIST DES-GRID-A · B · B-FILTER · C0–C3 · D · F · H
- S-FORM-* DES-GRID-Z · DES-FORM-Z1–Z3 · LeaveConfirmModal
- S-HUB-ENTRY · S-PEER-SOTS · S-SKIP-MAP
- reviewUrl=`file:///D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-bieu-04/ui/prototype/csdl-bieu-04-list-prototype.html`
- mfeStdUrl=`http://localhost:9301/csdl-bieu-04`
- peerStdUrl=`http://localhost:9301/so-ts/csdl-so-sach?resource=culverts`
- prototype=`specs/csdl-bieu-04/ui/prototype/csdl-bieu-04-list-prototype.html`

## API / next

- CRUD BFF `…/asset/csdl-records` · resource=culverts · typed DTO **SA**
- road-route `…/integration/road-routes/search`
- Next: **SA** Schema_CsdlBieu4 · GPS four_xy CRS · UiSchema typed
- e2e: queued `/agent-qa*` only · **cấm** e2e/start:std ở Design

## UNCLEAR

- none

## Full paths (Read only if needed)

- design: `D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-bieu-04/ui/design.md`
- control-hint: `D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/csdl-bieu-04-control-hint.md`
- real-data: `D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/csdl-bieu-04-real-data.md`
- prior po: `D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-bieu-04/handoff/po-compact.md`
- STATUS: `D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-bieu-04/STATUS.md`

## Cấm (compact)

Demo/LS SSOT · ERP.* · Guid IdCode · form 3 ô only · invent map · merge Sổ TS · yarn build/e2e/start:std · re-scan demo · paste HTML vào compact
