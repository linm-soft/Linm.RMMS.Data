# handoff-compact — design · csdl-bieu-02

| | |
|--|--|
| schemaVersion | `1` |
| role | `design` |
| feature | `csdl-bieu-02` |
| title | CSDL Biểu 02 — Thống kê cầu |
| packKind | `list` |
| changeScope | `new_page` |
| status | `done` |
| taskId | `task_388b210f` |
| resource | `bridges` |
| formNo | `02` |
| columns | `48` |
| IdCode | `BR-` |
| peerSoTs | none (—) · Sổ 6 / passport deep-link only |
| autoApprove | `ON` |
| e2eQa | `ON` |
| design_confirm | `approve` |
| shared_grid_example | `v1` |
| real_view_parity | `v1` |
| contentHashPrior | `sha256:bd73974e607f886dd38736015cb5a6a3fb82aff9d6a63328963ceb5c4be436a2` |
| headerFingerprintPrior | `sha256:34e1fcb051f6010fbe70ebdffab71df3d6f441a373d3be0249dd601e596d5591` |
| skillVersion | `2026.08.29.03` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.08.31.2` |
| writtenAt | `2026-09-05T08:20:00.000Z` |

## Decisions

- Kind **B** A–D+F + Kind **D** Slideout · `data-form-cols=2` · footer_actions_only · **cấm** Full-page
- form typed **48 cột** · **cấm** detail* only · Control = controlHint · **sectioned**
- Q-GPS **six_numbers** · Q-LOAD **text** · Q-LEGACY **keep_hidden** · Q-ROUTE **alias_now** `/csdl-bieu-02` · Q-PROV **keep_static** · Q-SECTION **sectioned**
- GAP-CSDL-ROAD-01 SearchInput road-route P1 · GAP-CSDL-ORG-01 DEFER P2
- GAP-CSDL-XLS-01 OUT stub · peer deep-link · **cấm** merge passport/Sổ 6 · map none
- API giữ `api/v1/asset/csdl-records` · catalogKind `bridges` · **cấm** ERP.*
- design_confirm **approve** (autoApprove ON) · open Q: **none**
- Report DES-RPT **N/A**

## Inventory (slim)

| id | label | controlHint | notes |
|----|-------|-------------|-------|
| search | Tìm | SearchTextInput | Zone B · 🔍 cụm phải |
| province/status/beamType | Tỉnh/TT/dầm | Dropdown | LOOKUP_STATIC |
| roadCode | Đường | SearchInput | road-route |
| kmFrom/kmTo | Km | Number | filter+form |
| code | Mã | Text ro | BR- |
| bridgeName | Tên cầu | Text | * |
| gps* ×6 | GPS 3 điểm | Number | Q-GPS |
| span*/beam* | Dầm | Number/Text/Dropdown | BEAM |
| abutment*/pier* | Phần dưới | Dropdown/Text | SUB |
| design/actualLoad | Tải | Text | Q-LOAD |
| bearing*/railing*/drain*/PQ | Gối/lan can | Number/Text/Checkbox | FURN |
| lengthM/carriageWidthM | Cdài/B xe | Number | * |
| manageUnit | ĐV QL | Text | P2 SearchInput |
| legacyCol64/69 | Legacy | Text hidden | Q-LEGACY |

## Screens / zones (ids only)

- S-LIST DES-GRID-A · B · B-FILTER · C0–C3 · D · F · H
- S-FORM-* DES-GRID-Z · DES-FORM-Z1–Z3 sectioned · LeaveConfirmModal
- S-HUB-ENTRY · S-PEER-SO6 · S-SKIP-MAP
- reviewUrl=`file:///D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-bieu-02/ui/prototype/csdl-bieu-02-list-prototype.html`
- mfeStdUrl=`http://localhost:9301/csdl-bieu-02`
- peerStdUrl=`http://localhost:9301/so-ts/csdl-so-sach?resource=bridges`
- prototype=`specs/csdl-bieu-02/ui/prototype/csdl-bieu-02-list-prototype.html`

## API / next

- CRUD BFF `…/asset/csdl-records` · resource=bridges · typed DTO **SA**
- road-route `…/integration/road-routes/search`
- Next: **SA** Schema_CsdlBieu2 · GPS six_numbers · LOAD text · LEGACY keep_hidden · DOMAIN-MAP slug
- e2e: queued `/agent-qa*` only · **cấm** e2e/start:std ở Design

## UNCLEAR

- none

## Full paths (Read only if needed)

- design: `D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-bieu-02/ui/design.md`
- control-hint: `D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/csdl-bieu-02-control-hint.md`
- real-data: `D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/csdl-bieu-02-real-data.md`
- prior po: `D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-bieu-02/handoff/po-compact.md`
- STATUS: `D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-bieu-02/STATUS.md`

## Cấm (compact)

Demo/LS SSOT · ERP.* · Guid IdCode · form 3 ô only · invent map · merge passport/Sổ 6 · yarn build/e2e/start:std · re-scan demo · paste HTML vào compact
