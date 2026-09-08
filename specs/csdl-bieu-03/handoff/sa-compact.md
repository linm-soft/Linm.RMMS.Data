# handoff-compact — sa · csdl-bieu-03

| | |
|--|--|
| schemaVersion | `1` |
| role | `sa` |
| feature | `csdl-bieu-03` |
| title | CSDL Biểu 03 — Hầm đường bộ |
| packKind | `list` |
| changeScope | `new_page` |
| status | `done` |
| taskId | `task_539bb440` |
| resource | `road-tunnels` |
| formNo | `03` |
| columns | `42` |
| IdCode | `TN-` |
| peerSoTs | none (—) · Sổ 6 QL cầu/hầm deep-link only |
| formPattern | **Kind D Slideout** 2col sectioned · **cấm** Full-page |
| Kind | **B** A–D+F · **D** Slideout Z1–Z3 |
| solution_confirm | **approve** (autoApprove ON) |
| domain | **Asset** · `api/v1/asset/csdl-records` |
| bff | proxy only · `web-bff/api/v1/asset/csdl-records` |
| entity | shell `CsdlCatalogRecordEntity` + typed `CsdlBieu3Entity` · `rmms_csdl_bieu3` · Schema_CsdlBieu3 |
| sa_tz_gate | `tz_na` |
| sa_xco_gate | `xco_get_only` |
| sa_shared_table | `share_tenant` |
| contentHashPrior | `sha256:2c03537918bbda56c29e1e1ef98cc081cc4e72c94447a1ac2f87f06bd6f9310e` |
| headerFingerprintPrior | `sha256:60f7ea4153b5853222bdeaf2679929a6e4c5b66b6973bcfe12e5bd9dd3fcfbcc` |
| skillVersion | `2026.08.24.01` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.08.31.2` |
| writtenAt | `2026-09-05T08:55:00.000Z` |

## Decisions

- changeScope=`new_page` · packKind=`list` · Kind B+D Slideout · typed **42 cột** · **cấm** detail* only
- API **giữ** `api/v1/asset/csdl-records` · BFF proxy · **cấm ERP.*** · **cấm** invent infra
- Persist: shell + **Schema_CsdlBieu3** 1:1 · **cấm** parent *Json · migration Dev/4b only
- Q-GPS **six_numbers** · Q-TUBE **two_rows** (2 ống=2 POST/Copy) · Q-VENT **text** · Q-SECTION **sectioned**
- Q-ROUTE **alias_now** `/csdl-bieu-03` + hub · Q-PROV **keep_static** P1
- road-route SearchInput P1 · org **DEFER P2** · XLS **OUT**
- Peer Sổ 6 deep-link · **cấm** merge · map none · **cấm** 1 row 2 bộ GPS
- Gates: tz_na · xco_get_only · share_tenant
- DOMAIN-MAP add `csdl-bieu-03`→Asset (T-DM-01) — slug **thiếu**
- open questions: **none**

## Inventory (slim)

| id | label | controlHint | write |
|----|-------|-------------|-------|
| search | Tìm | SearchTextInput | filter |
| province/status/tunnelClass | Tỉnh/TT/cấp | Dropdown | shell LOOKUP_STATIC |
| roadCode | Đường | SearchInput | shell + road-route |
| kmFrom/kmTo/tubeCount | Km/ống | Number | shell/typed |
| code | Mã | Text ro | shell TN- |
| tunnelName | Tên hầm | Text | typed |
| gps* ×6 | GPS 3 điểm | Number | typed six_numbers |
| crossing*/tubeIndex/lining*/clearance*/section*/carriage*/pavement* | Kết cấu | Dropdown/Number/Text | typed |
| drain*/shoulder*/fire* | Thoát+PCCC | Number/Checkbox | typed |
| fan*/light*/cctv/vms/vent*/escape*/designLoad | Thiết bị | Number/Checkbox/Text | typed Q-VENT |
| lengthM | Cdài | Number | typed |
| manageUnit | ĐV QL | Text | shell P2 SearchInput |
| ownerUnit | Chủ quản | Text | typed optional |

## Screens / zones (ids only)

- S-LIST · S-FORM-C/E/V/Copy · S-ACT-DELETE · S-HUB-ENTRY · S-PEER-SO6 · S-SKIP-MAP
- mfeStdUrl=`http://localhost:9301/csdl-bieu-03`
- hub=`http://localhost:9301/so-ts/csdl-so-sach?resource=road-tunnels`

## API / tasks (ids only)

- FormMode↔API: list/C/E/V/Copy ↔ GET/POST/PUT · soft DELETE · LKP road-route
- Tube: 2 ống → 2 POST/Copy · validate tubeIndex if tubeCount>1
- T-DM-01 · T-BE-01..05 · T-BFF-01 · T-FE-01..06 · T-OUT-01 → TL

## UNCLEAR

- none

## Full paths

- solution: `D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-bieu-03/be/solution-discovery.md`
- design-compact: `D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-bieu-03/handoff/design-compact.md`
- STATUS: `D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-bieu-03/STATUS.md`

## Cấm (compact)

Demo/LS SSOT · ERP.* · Guid IdCode · form 3 ô only · invent map · merge Sổ 6 · 1 row 2 bộ GPS · parent *Json · yarn build/e2e/start:std · Step 4b/migration @ SA · Write MFE/native · re-scan demo
