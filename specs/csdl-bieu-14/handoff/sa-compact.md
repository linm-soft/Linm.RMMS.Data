# handoff-compact — sa · csdl-bieu-14

| | |
|--|--|
| schemaVersion | `1` |
| role | `sa` |
| feature | `csdl-bieu-14` |
| title | CSDL Biểu 14 — Hệ thống ITS (GTTM) |
| packKind | `list` |
| changeScope | `new_page` |
| status | `done` |
| taskId | `task_c534e53a` |
| resource | `its-systems` |
| formNo | `14` |
| columns | `21` · section vị trí + TB ITS + HT gắn kèm |
| IdCode | `IT-` |
| peerSoTs | `so-ts-its-camera` · **cấm** merge · none_p1 · **cấm** AiVision |
| formPattern | **Kind D Slideout** 2col · Z2 TB · Z3 HT · **cấm** Full-page |
| Kind | **B** A–D+F · **D** Slideout Z1–Z3 |
| solution_confirm | **approve** (autoApprove ON) |
| domain | **Asset** · `api/v1/asset/csdl-records` |
| bff | proxy only · `web-bff/api/v1/asset/csdl-records` |
| entity | shell `CsdlCatalogRecordEntity` + typed `CsdlBieu14Entity` · `rmms_csdl_bieu14` · Schema_CsdlBieu14 |
| device | deviceType keep_5 · brand · techSpec · qtyOrLength number ≥0 · operatingStatus |
| infra | infraKind keep_3 · clearanceM · infraQty · systemStatus · yearBuilt |
| gps | gpsLat/gpsLng · direction LOOKUP |
| sa_tz_gate | `tz_na` |
| sa_xco_gate | `xco_get_only` |
| sa_shared_table | `share_tenant` |
| contentHashPrior | `sha256:6cfdefa3baaffcf2bd97c7a429bb5043e7f9d77b96bbb77eafaa34689007b112` |
| headerFingerprintPrior | `sha256:14cd156a898dcc971a072dd1cd1b92460a8b597558a90dc9854fead9d4c4de5c` |
| skillVersion | `2026.08.24.01` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.08.31.2` |
| writtenAt | `2026-09-05T15:05:00.000Z` |

## Decisions

- changeScope=`new_page` · packKind=`list` · Kind B+D Slideout · typed **21 cột** · Z2 TB · Z3 HT · **cấm** detail* only · **cấm** 2 entity
- API **giữ** `api/v1/asset/csdl-records` · BFF proxy · **cấm ERP.*** · **cấm** invent infra · **cấm** merge road-assets/so-ts-its-camera/AiVision
- Persist: shell + **Schema_CsdlBieu14** 1:1 · Device*/Infra*/Gps* flat · **cấm** parent *Json · migration Dev/4b only
- Q-ROUTE **alias_now** · Q-PROV **keep_static** · Q-DIR **lookup** · Q-QTY-UNIT **number** · Q-DEVICE-SET **keep_5** · Q-INFRA-SET **keep_3** · Q-MANAGE **trail_p2** · Q-PREFIX **IT** · Q-LIST-COLS **subset** · Q-TITLE **ctx_its** · Q-DMAP **add_now** · Q-PEER-LINK **none_p1** · Q-SO09 **none_p1**
- road-route SearchInput P1 · org **DEFER P2** · XLS **OUT**
- Peer cite only · map none · GAP-CSDL-CUC-11 · GAP-BIEU14-PEER-ITS-01 · hub NEW card formNo 14
- Gates: tz_na · xco_get_only · share_tenant
- DOMAIN-MAP add `csdl-bieu-14`→Asset (T-DM-01) — map live thiếu `14`
- open questions: **none**

## Inventory (slim)

| id | label | controlHint | write |
|----|-------|-------------|-------|
| search | Tìm | SearchTextInput | filter |
| province/operatingStatus/deviceType/side | Tỉnh/TT/Loại/VT | Dropdown | shell/typed LOOKUP |
| roadCode | Đường | SearchInput | shell + road-route |
| kmFrom/kmTo | Km | Number | shell Line |
| code | Mã | Text ro | shell IT- |
| direction/gpsLat/gpsLng | Hướng/GPS | Dropdown/Number | typed Z1 |
| deviceType/brand/techSpec/qtyOrLength/operatingStatus | TB ITS | Dropdown/Text/Textarea/Number | typed Z2 |
| infraKind/clearanceM/infraQty/systemStatus/yearBuilt/notes | HT | Dropdown/Number/Textarea | typed Z3 · manageUnit P2 |

## Screens / zones (ids only)

- S-LIST · S-FORM-C/E/V/Copy · S-ACT-DELETE · S-HUB-ENTRY · S-SKIP-PEER · S-SKIP-MAP
- mfeStdUrl=`http://localhost:9301/csdl-bieu-14`
- hub=`http://localhost:9301/so-ts/csdl-so-sach?resource=its-systems`

## API / tasks (ids only)

- FormMode↔API: list/C/E/V/Copy ↔ GET/POST/PUT · soft DELETE · LKP road-route
- T-DM-01 · T-BE-01..06 · T-BFF-01 · T-FE-01..06 · T-OUT-01/02 → TL

## UNCLEAR

- none

## Full paths

- solution: `specs/csdl-bieu-14/be/solution-discovery.md`
- design: `specs/csdl-bieu-14/ui/design.md`
- prior compact: `handoff/design-compact.md` · `po-compact.md` · `data_analy-compact.md`

## Next

| Role | Need |
|------|------|
| **TL** | task/csdl-bieu-14.md · T-* · gates |
| Dev | Schema_CsdlBieu14 · typed DTO · alias page · Slideout 21 · hub NEW |
| QA | e2e queued `/agent-qa*` |

## Cấm (compact)

ERP.* · invent API/infra · detail* only · Guid IdCode · merge so-ts-its-camera/road-assets/AiVision · parent *Json · 2 entity · Step 4b/migration/e2e/build/start:std ở SA · Write MFE · re-scan demo
