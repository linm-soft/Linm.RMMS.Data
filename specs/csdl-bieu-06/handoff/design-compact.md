# handoff-compact — design · csdl-bieu-06

| | |
|--|--|
| schemaVersion | `1` |
| role | `design` |
| feature | `csdl-bieu-06` |
| title | CSDL Biểu 06 — Hầm chui DS + hộp KT |
| packKind | `list` |
| changeScope | `new_page` |
| status | `done` |
| taskId | `task_2224e771` |
| resource | `underpasses` |
| formNo | `06` |
| columns | `19` |
| IdCode | `HC-` |
| peerSoTs | `so-ts-underpass` |
| autoApprove | `ON` |
| e2eQa | `ON` |
| design_confirm | `approve` |
| shared_grid_example | `v1` |
| real_view_parity | `v1` |
| contentHashPrior | `sha256:ffc5c8381b04dcec3f0376df87187012f34b16bf211a3e3fb7311a8375a386f0` |
| headerFingerprintPrior | `sha256:3b2f5c531f0538509147846466d92090a3c8f5adc05a4be6d1dbb80ad73ff2a7` |
| skillVersion | `2026.08.29.03` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.08.31.2` |
| writtenAt | `2026-09-05T14:25:00.000Z` |

## Decisions

- Kind **B** A–D+F + Kind **D** Slideout · `data-form-cols=2` · footer_actions_only · **cấm** Full-page
- form typed **19 cột** · **cấm** detail* only · Control = controlHint · gồm hộp KT
- Q-ROUTE **alias_now** `/csdl-bieu-06` · Q-PROV **keep_static** · Q-APERTURE **number_m** · Q-PIPE **optional** · Q-LOAD **lookup_hl** · Q-LIGHT/DRAIN **yes_no** · Q-KIND **hc_ds_hop_kt**
- GAP-CSDL-ROAD-01 SearchInput road-route P1 · GAP-BIEU06-POINT-01 kmPoint Point · no kmTo
- GAP-CSDL-ORG-01 DEFER P2 · GAP-CSDL-XLS-01 OUT stub · peer deep-link · **cấm** merge Sổ TS · map none
- API giữ `api/v1/asset/csdl-records` · catalogKind `underpasses` · **cấm** ERP.*
- design_confirm **approve** (autoApprove ON) · open Q: **none**
- Report DES-RPT **N/A**

## Inventory (slim)

| id | label | controlHint | notes |
|----|-------|-------------|-------|
| search | Tìm | SearchTextInput | Zone B · 🔍 cụm phải |
| province/status/underpassKind | Tỉnh/TT/Loại | Dropdown | LOOKUP_STATIC |
| roadCode | Đường | SearchInput | road-route |
| kmPoint | Km | Number | Point · no kmTo |
| code | Mã | Text ro | HC- |
| apertureM | Khẩu độ | Number | * m · Q-APERTURE |
| pipeCount | Số ống | Number | optional |
| bodyStructure/portalStructure | KC thân/cửa | Dropdown | STRUCT |
| lengthM | Cdài | Number | * |
| designLoad | Tải | Dropdown | lookup_hl |
| pavementInside | Mặt trong | Dropdown | BTXM/BTN |
| lighting/drainage | Chiếu sáng/Thoát | Dropdown | yes_no |
| builtYear/manageUnit/notes/status | … | Number/Text/Textarea/Dropdown | org P2 |

## Screens / zones (ids only)

- S-LIST DES-GRID-A · B · B-FILTER · C0–C3 · D · F · H
- S-FORM-* DES-GRID-Z · DES-FORM-Z1–Z3 · LeaveConfirmModal
- S-HUB-ENTRY · S-PEER-SOTS · S-SKIP-MAP
- reviewUrl=`file:///D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-bieu-06/ui/prototype/csdl-bieu-06-list-prototype.html`
- mfeStdUrl=`http://localhost:9301/csdl-bieu-06`
- peerStdUrl=`http://localhost:9301/so-ts/csdl-so-sach?resource=underpasses`
- prototype=`specs/csdl-bieu-06/ui/prototype/csdl-bieu-06-list-prototype.html`

## API / next

- CRUD BFF `…/asset/csdl-records` · resource=underpasses · typed DTO **SA**
- road-route `…/integration/road-routes/search`
- Next: **SA** Schema_CsdlBieu6 · UiSchema typed underpasses · aperture Number · pipe optional
- e2e: queued `/agent-qa*` only · **cấm** e2e/start:std ở Design

## UNCLEAR

- none

## Full paths (Read only if needed)

- design: `D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-bieu-06/ui/design.md`
- control-hint: `D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/csdl-bieu-06-control-hint.md`
- real-data: `D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/csdl-bieu-06-real-data.md`
- prior po: `D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-bieu-06/handoff/po-compact.md`
- STATUS: `D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-bieu-06/STATUS.md`

## Cấm (compact)

Demo/LS SSOT · ERP.* · Guid IdCode · form 3 ô only · invent map · merge Sổ TS · yarn build/e2e/start:std · re-scan demo · paste HTML vào compact
