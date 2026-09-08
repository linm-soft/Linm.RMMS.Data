# handoff-compact — design · csdl-bieu-07

| | |
|--|--|
| schemaVersion | `1` |
| role | `design` |
| feature | `csdl-bieu-07` |
| title | CSDL Biểu 07 — Lề / taluy / hàng rào |
| packKind | `list` |
| changeScope | `new_page` |
| status | `done` |
| taskId | `task_50b066b7` |
| resource | `shoulders-fences` |
| formNo | `07` |
| columns | `20` |
| IdCode | `LE-` |
| peerSoTs | `SHOULDER` |
| autoApprove | `ON` |
| e2eQa | `ON` |
| design_confirm | `approve` |
| shared_grid_example | `v1` |
| real_view_parity | `v1` |
| contentHashPrior | `sha256:5634091e7ce3e5272c090320398a76d75f84ed7326366e93e088ff2154e8bf44` |
| headerFingerprintPrior | `sha256:ba33856d00d23440b05be8c78c8b8a5462662c96a1067e702b791eb5020d64cf` |
| skillVersion | `2026.08.29.03` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.08.31.2` |
| writtenAt | `2026-09-05T09:50:00.000Z` |

## Decisions

- Kind **B** A–D+F + Kind **D** Slideout · `data-form-cols=2` · footer_actions_only · **3 section** lề/taluy/HR · **cấm** Full-page
- form typed **20 cột** · **cấm** detail* only · Control = controlHint
- Q-ROUTE **alias_now** `/csdl-bieu-07` · Q-PROV **keep_static** · Q-SIDE **shared** · Q-SLOPE **map_clearing** · Q-FENCE-LEN **km** · Q-PANEL **omit_p1** · Q-STRUCT **lookup_seed** · Q-REN-LABEL **with_typed**
- GAP-CSDL-ROAD-01 SearchInput road-route P1 · Line kmFrom/kmTo
- GAP-CSDL-ORG-01 DEFER P2 · GAP-CSDL-XLS-01 OUT stub · peer deep-link · **cấm** merge Sổ TS · map none
- API giữ `api/v1/asset/csdl-records` · catalogKind `shoulders-fences` · **cấm** ERP.*
- design_confirm **approve** (autoApprove ON) · open Q: **none**
- Report DES-RPT **N/A**

## Inventory (slim)

| id | label | controlHint | notes |
|----|-------|-------------|-------|
| search | Tìm | SearchTextInput | Zone B · 🔍 cụm phải |
| province/status/side/fenceKind | Tỉnh/TT/Vị trí/HR | Dropdown | LOOKUP_STATIC |
| roadCode | Đường | SearchInput | road-route |
| kmFrom/kmTo | Km | Number | Line |
| code | Mã | Text ro | LE- |
| shoulderStructure | KC lề | Dropdown | lookup_seed * |
| shoulderLengthM/WidthM/AreaM2 | Lề | Number | * dài/rộng |
| slopeLengthM/AreaM2 | Taluy | Number | =SlopeClearingM |
| fencePostCount/fenceLengthKm | HR | Number | km UI |
| builtYear/manageUnit/notes/status | … | Number/Text/Textarea/Dropdown | org P2 |

## Screens / zones (ids only)

- S-LIST DES-GRID-A · B · B-FILTER · C0–C3 · D · F · H
- S-FORM-* DES-GRID-Z · DES-FORM-Z1–Z3 · 3 section · LeaveConfirmModal
- S-HUB-ENTRY · S-PEER-SOTS · S-SKIP-MAP
- reviewUrl=`file:///D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-bieu-07/ui/prototype/csdl-bieu-07-list-prototype.html`
- mfeStdUrl=`http://localhost:9301/csdl-bieu-07`
- peerStdUrl=`http://localhost:9301/so-ts/csdl-so-sach?resource=shoulders-fences`
- prototype=`specs/csdl-bieu-07/ui/prototype/csdl-bieu-07-list-prototype.html`

## API / next

- CRUD BFF `…/asset/csdl-records` · resource=shoulders-fences · typed DTO **SA**
- road-route `…/integration/road-routes/search`
- Next: **SA** Schema_CsdlBieu7 · UiSchema typed · FenceLengthM↔km · SlopeClearingM↔slopeLengthM · renumber formNo
- e2e: queued `/agent-qa*` only · **cấm** e2e/start:std ở Design

## UNCLEAR

- none

## Full paths (Read only if needed)

- design: `D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-bieu-07/ui/design.md`
- control-hint: `D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/csdl-bieu-07-control-hint.md`
- real-data: `D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/csdl-bieu-07-real-data.md`
- prior po: `D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-bieu-07/handoff/po-compact.md`
- STATUS: `D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-bieu-07/STATUS.md`

## Cấm (compact)

Demo/LS SSOT · ERP.* · Guid IdCode · form 3 ô only · invent map · merge Sổ TS · yarn build/e2e/start:std · re-scan demo · paste HTML vào compact
