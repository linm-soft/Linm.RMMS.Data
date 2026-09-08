# handoff-compact — design · csdl-bieu-08

| | |
|--|--|
| schemaVersion | `1` |
| role | `design` |
| feature | `csdl-bieu-08` |
| title | CSDL Biểu 08 — Hệ thống ATGT |
| packKind | `list` |
| changeScope | `new_page` |
| status | `done` |
| taskId | `task_daa7f8e9` |
| resource | `traffic-safety` |
| formNo | `08` |
| columns | `45` · **11 nhóm** |
| IdCode | `AT-` |
| peerSoTs | ATGT types (optional deep-link) |
| autoApprove | `ON` |
| e2eQa | `ON` |
| design_confirm | `approve` |
| shared_grid_example | `v1` |
| real_view_parity | `v1` |
| contentHashPrior | `sha256:f972c82727726d256754d076435f9ef97c993b4f9844dc79e50b6415fcaf54be` |
| headerFingerprintPrior | `sha256:ba8b8db4f7637ee32cfd4a882b6abdc774c538f6c9812c3ecd1d13f6151cdd6f` |
| skillVersion | `2026.08.29.03` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.08.31.2` |
| writtenAt | `2026-09-05T10:20:00.000Z` |

## Decisions

- Kind **B** A–D+F + Kind **D** Slideout · `data-form-cols=2` · footer_actions_only · **shared + 1 child** · **cấm** Full-page
- form typed **45/11** · **cấm** detail* only · **cấm** wide 45 entity · Control = controlHint
- Q-ROUTE **alias_now** `/csdl-bieu-08` · Q-PROV **keep_static** · Q-CHILD **child_tables** · Q-TYPE-UX **confirm** · Q-MARKER-KIND **lookup_static** · Q-LIST-COLS **subset_by_type** · Q-REN-LABEL **with_typed** · Q-PEER **optional**
- GAP-CSDL-ROAD-01 SearchInput road-route P1 · GAP-CSDL-ORG-01 DEFER P2 · GAP-CSDL-XLS-01 OUT stub
- peer deep-link optional · **cấm** merge Sổ TS · map none
- API giữ `api/v1/asset/csdl-records` · catalogKind `traffic-safety` · **cấm** ERP.*
- design_confirm **approve** (autoApprove ON) · open Q: **none**
- Report DES-RPT **N/A**

## Inventory (slim)

| id | label | controlHint | notes |
|----|-------|-------------|-------|
| search | Tìm | SearchTextInput | Zone B · 🔍 cụm phải |
| province/status/side/assetType | Tỉnh/TT/Vị trí/Loại | Dropdown | LOOKUP_STATIC · 11 type |
| roadCode | Đường | SearchInput | road-route |
| kmFrom/kmTo | Km | Number | |
| code | Mã | Text ro | AT- |
| sign*/marker*/median*/… | Child 11 | Text/Number/Dropdown | 1 section · Q-TYPE-UX |
| builtYear/manageUnit/notes/status | … | Number/Text/Textarea/Dropdown | org P2 |

## Screens / zones (ids only)

- S-LIST DES-GRID-A · B · B-FILTER · C0–C3 · D · F · H
- S-FORM-* DES-GRID-Z · DES-FORM-Z1–Z3 · shared+1 child · LeaveConfirmModal · type-change confirm
- S-HUB-ENTRY · S-PEER-SOTS · S-SKIP-MAP
- reviewUrl=`file:///D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-bieu-08/ui/prototype/csdl-bieu-08-list-prototype.html`
- mfeStdUrl=`http://localhost:9301/csdl-bieu-08`
- peerStdUrl=`http://localhost:9301/so-ts/csdl-so-sach?resource=traffic-safety`
- prototype=`specs/csdl-bieu-08/ui/prototype/csdl-bieu-08-list-prototype.html`

## API / next

- CRUD BFF `…/asset/csdl-records` · resource=traffic-safety · optional `type=` · typed DTO **SA**
- road-route `…/integration/road-routes/search`
- Next: **SA** Schema_CsdlBieu8 + children · UiSchema typed · renumber formNo
- e2e: queued `/agent-qa*` only · **cấm** e2e/start:std ở Design

## UNCLEAR

- none

## Full paths (Read only if needed)

- design: `D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-bieu-08/ui/design.md`
- control-hint: `D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/csdl-bieu-08-control-hint.md`
- real-data: `D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/csdl-bieu-08-real-data.md`
- prior po: `D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-bieu-08/handoff/po-compact.md`
- STATUS: `D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-bieu-08/STATUS.md`

## Cấm (compact)

Demo/LS SSOT · ERP.* · Guid IdCode · form 3 ô only · wide 45 · invent map · merge Sổ TS · yarn build/e2e/start:std · re-scan demo · paste HTML vào compact
