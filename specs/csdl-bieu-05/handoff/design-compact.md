# handoff-compact — design · csdl-bieu-05

| | |
|--|--|
| schemaVersion | `1` |
| role | `design` |
| feature | `csdl-bieu-05` |
| title | CSDL Biểu 05 — Rãnh các loại |
| packKind | `list` |
| changeScope | `new_page` |
| status | `done` |
| taskId | `task_8881f84f` |
| resource | `ditches` |
| formNo | `05` |
| columns | `18` |
| IdCode | `RN-` |
| peerSoTs | `so-ts-ditch` |
| autoApprove | `ON` |
| e2eQa | `ON` |
| design_confirm | `approve` |
| shared_grid_example | `v1` |
| real_view_parity | `v1` |
| contentHashPrior | `sha256:fd4e6899790aa98d6bc4cb628dc9c0bc5efc90acb3abf03a7b157cf123590117` |
| headerFingerprintPrior | `sha256:008898723c0a5b94fae7de8810903b1dcc39ccfd0dfa5d4a36dd398eb088ac2f` |
| skillVersion | `2026.08.29.03` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.08.31.2` |
| writtenAt | `2026-09-05T13:37:00.000Z` |

## Decisions

- Kind **B** A–D+F + Kind **D** Slideout · `data-form-cols=2` · footer_actions_only · **cấm** Full-page
- form typed **18 cột** · **cấm** detail* only · Control = controlHint
- Q-ROUTE **alias_now** `/csdl-bieu-05` · Q-PROV **keep_static** · Q-APERTURE **free_text** · Q-DRAIN **free_text** · Q-SHAPE **rect_trap_round**
- GAP-CSDL-ROAD-01 SearchInput road-route P1 · GAP-BIEU05-KIND-01 ditchKind hở/kín · GAP-BIEU05-RANGE-01 kmFrom/kmTo
- GAP-CSDL-ORG-01 DEFER P2 · GAP-CSDL-XLS-01 OUT stub · peer deep-link · **cấm** merge Sổ TS · map none
- API giữ `api/v1/asset/csdl-records` · catalogKind `ditches` · **cấm** ERP.*
- design_confirm **approve** (autoApprove ON) · open Q: **none**
- Report DES-RPT **N/A**

## Inventory (slim)

| id | label | controlHint | notes |
|----|-------|-------------|-------|
| search | Tìm | SearchTextInput | Zone B · 🔍 cụm phải |
| province/status/ditchKind | Tỉnh/TT/Loại | Dropdown | LOOKUP_STATIC |
| roadCode | Đường | SearchInput | road-route |
| kmFrom/kmTo | Km từ–đến | Number | filter+form |
| code | Mã | Text ro | RN- |
| side | Bên | Dropdown | L/R/C/Both |
| structure | KC | Dropdown | BT/BTCT/… |
| shape | Hình | Dropdown | Q-SHAPE |
| apertureSize | Khẩu độ | Text | Q-APERTURE |
| lengthM | Cdài | Number | * |
| drainageCapacity | Thoát | Text | Q-DRAIN |
| builtYear | Năm | Number | |
| manageUnit/ownerUnit | ĐV | Text | org P2 |
| notes/status | … | Textarea/Dropdown | |

## Screens / zones (ids only)

- S-LIST DES-GRID-A · B · B-FILTER · C0–C3 · D · F · H
- S-FORM-* DES-GRID-Z · DES-FORM-Z1–Z3 · LeaveConfirmModal
- S-HUB-ENTRY · S-PEER-SOTS · S-SKIP-MAP
- reviewUrl=`file:///D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-bieu-05/ui/prototype/csdl-bieu-05-list-prototype.html`
- mfeStdUrl=`http://localhost:9301/csdl-bieu-05`
- peerStdUrl=`http://localhost:9301/so-ts/csdl-so-sach?resource=ditches`
- prototype=`specs/csdl-bieu-05/ui/prototype/csdl-bieu-05-list-prototype.html`

## API / next

- CRUD BFF `…/asset/csdl-records` · resource=ditches · typed DTO **SA**
- road-route `…/integration/road-routes/search`
- Next: **SA** Schema_CsdlBieu5 · UiSchema typed ditches · aperture/drain free_text
- e2e: queued `/agent-qa*` only · **cấm** e2e/start:std ở Design

## UNCLEAR

- none

## Full paths (Read only if needed)

- design: `D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-bieu-05/ui/design.md`
- control-hint: `D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/csdl-bieu-05-control-hint.md`
- real-data: `D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/csdl-bieu-05-real-data.md`
- prior po: `D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-bieu-05/handoff/po-compact.md`
- STATUS: `D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-bieu-05/STATUS.md`

## Cấm (compact)

Demo/LS SSOT · ERP.* · Guid IdCode · form 3 ô only · invent map · merge Sổ TS · yarn build/e2e/start:std · re-scan demo · paste HTML vào compact
