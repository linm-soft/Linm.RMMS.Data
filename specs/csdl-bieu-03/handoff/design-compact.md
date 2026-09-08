# handoff-compact — design · csdl-bieu-03

| | |
|--|--|
| schemaVersion | `1` |
| role | `design` |
| feature | `csdl-bieu-03` |
| title | CSDL Biểu 03 — Hầm đường bộ |
| packKind | `list` |
| changeScope | `new_page` |
| status | `done` |
| taskId | `task_db02ce1d` |
| resource | `road-tunnels` |
| formNo | `03` |
| columns | `42` |
| IdCode | `TN-` |
| peerSoTs | none (—) · Sổ 6 QL cầu/hầm deep-link only |
| autoApprove | `ON` |
| e2eQa | `ON` |
| design_confirm | `approve` |
| shared_grid_example | `v1` |
| real_view_parity | `v1` |
| contentHashPrior | `sha256:2c03537918bbda56c29e1e1ef98cc081cc4e72c94447a1ac2f87f06bd6f9310e` |
| headerFingerprintPrior | `sha256:60f7ea4153b5853222bdeaf2679929a6e4c5b66b6973bcfe12e5bd9dd3fcfbcc` |
| skillVersion | `2026.08.29.03` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.08.31.2` |
| writtenAt | `2026-09-05T08:50:00.000Z` |

## Decisions

- Kind **B** A–D+F + Kind **D** Slideout · `data-form-cols=2` · footer_actions_only · **cấm** Full-page
- form typed **42 cột** · **cấm** detail* only · Control = controlHint · **sectioned**
- Q-GPS **six_numbers** · Q-TUBE **two_rows** · Q-VENT **text** · Q-ROUTE **alias_now** `/csdl-bieu-03` · Q-PROV **keep_static** · Q-SECTION **sectioned**
- GAP-CSDL-ROAD-01 SearchInput road-route P1 · GAP-CSDL-ORG-01 DEFER P2
- GAP-CSDL-XLS-01 OUT stub · peer deep-link · **cấm** merge Sổ 6 · map none · **cấm** 1 row 2 bộ GPS
- API giữ `api/v1/asset/csdl-records` · catalogKind `road-tunnels` · **cấm** ERP.*
- design_confirm **approve** (autoApprove ON) · open Q: **none**
- Report DES-RPT **N/A**

## Inventory (slim)

| id | label | controlHint | notes |
|----|-------|-------------|-------|
| search | Tìm | SearchTextInput | Zone B · 🔍 cụm phải |
| province/status/tunnelClass | Tỉnh/TT/cấp | Dropdown | LOOKUP_STATIC |
| roadCode | Đường | SearchInput | road-route |
| kmFrom/kmTo/tubeCount | Km/ống | Number | filter+form |
| code | Mã | Text ro | TN- |
| tunnelName | Tên hầm | Text | * |
| gps* ×6 | GPS 3 điểm | Number | Q-GPS |
| crossing*/tunnelClass/tube*/lining*/clearance*/section*/carriage*/pavement* | Kết cấu | Dropdown/Number/Text | STRUCT |
| drain*/shoulder*/fire* | Thoát+PCCC | Number/Checkbox | DRAIN/FIRE |
| fan*/light*/cctv/vms/vent*/escape*/designLoad | Thiết bị | Number/Checkbox/Text | FIRE/VENT |
| lengthM | Cdài | Number | * |
| manageUnit | ĐV QL | Text | P2 SearchInput |
| ownerUnit | Chủ quản | Text | optional |

## Screens / zones (ids only)

- S-LIST DES-GRID-A · B · B-FILTER · C0–C3 · D · F · H
- S-FORM-* DES-GRID-Z · DES-FORM-Z1–Z3 sectioned · LeaveConfirmModal
- S-HUB-ENTRY · S-PEER-SO6 · S-SKIP-MAP
- reviewUrl=`file:///D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-bieu-03/ui/prototype/csdl-bieu-03-list-prototype.html`
- mfeStdUrl=`http://localhost:9301/csdl-bieu-03`
- peerStdUrl=`http://localhost:9301/so-ts/csdl-so-sach?resource=road-tunnels`
- prototype=`specs/csdl-bieu-03/ui/prototype/csdl-bieu-03-list-prototype.html`

## API / next

- CRUD BFF `…/asset/csdl-records` · resource=road-tunnels · typed DTO **SA**
- road-route `…/integration/road-routes/search`
- Tube: 2 ống → 2 POST/Copy · **cấm** 1 payload 2 bộ GPS
- Next: **SA** Schema_CsdlBieu3 · GPS/TUBE/VENT · DOMAIN-MAP slug `csdl-bieu-03`
- e2e: queued `/agent-qa*` only · **cấm** e2e/start:std ở Design

## UNCLEAR

- none

## Full paths (Read only if needed)

- design: `D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-bieu-03/ui/design.md`
- control-hint: `D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/csdl-bieu-03-control-hint.md`
- real-data: `D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/csdl-bieu-03-real-data.md`
- prior po: `D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-bieu-03/handoff/po-compact.md`
- STATUS: `D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-bieu-03/STATUS.md`

## Cấm (compact)

Demo/LS SSOT · ERP.* · Guid IdCode · form 3 ô only · invent map · merge Sổ 6 · 1 row 2 bộ GPS · yarn build/e2e/start:std · re-scan demo · paste HTML vào compact
