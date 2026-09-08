# handoff-compact — sa · csdl-bieu-12

| | |
|--|--|
| schemaVersion | `1` |
| role | `sa` |
| feature | `csdl-bieu-12` |
| title | CSDL Biểu 12 — Cây xanh, thảm cỏ |
| packKind | `list` |
| changeScope | `new_page` |
| status | `done` |
| taskId | `task_a36be038` |
| resource | `green-assets` |
| formNo | `12` |
| columns | `15` · **2 section** khóm + thảm cỏ |
| IdCode | `CX-` |
| peerSoTs | — (không peer · **cấm** invent so-ts-green) |
| formPattern | **Kind D Slideout** 2col · 2 section · **cấm** Full-page |
| Kind | **B** A–D+F · **D** Slideout Z1–Z3 · Z2b Thảm cỏ |
| solution_confirm | **approve** (autoApprove ON) |
| domain | **Asset** · `api/v1/asset/csdl-records` |
| bff | proxy only · `web-bff/api/v1/asset/csdl-records` |
| entity | shell `CsdlCatalogRecordEntity` + typed `CsdlBieu12Entity` · `rmms_csdl_bieu12` · Schema_CsdlBieu12 |
| clumps | 4× int ≥0 · **keep_other** |
| grass | `grassAreaM2` decimal · **allow_either** vs khóm |
| side | **side_only** L/R/C/Both |
| sa_tz_gate | `tz_na` |
| sa_xco_gate | `xco_get_only` |
| sa_shared_table | `share_tenant` |
| contentHashPrior | `sha256:6da498be3a84192c6f3e3c30a7e8032bf2753359591a9aabd3ad36d809f4c457` |
| headerFingerprintPrior | `sha256:54aef0c755530d138ecefa7a303b22c78c32ca1b6ae3555d5bb33492799b5af9` |
| skillVersion | `2026.08.24.01` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.08.31.2` |
| writtenAt | `2026-09-05T13:25:00.000Z` |

## Decisions

- changeScope=`new_page` · packKind=`list` · Kind B+D Slideout · typed **15 cột** · 2 section · **cấm** detail* only · **cấm** 2 entity
- API **giữ** `api/v1/asset/csdl-records` · BFF proxy · **cấm ERP.*** · **cấm** invent infra/so-ts-green
- Persist: shell + **Schema_CsdlBieu12** 1:1 · clumps/grass flat · **cấm** parent *Json · migration Dev/4b only
- Q-ROUTE **alias_now** · Q-PROV **keep_static** · Q-OTHER-CLUMP **keep_other** · Q-GRASS-REQ **allow_either** · Q-TALUY **side_only** · Q-LIST-COLS **subset** · Q-TITLE **keep_demo** · Q-DMAP **add_now**
- road-route SearchInput P1 · org **DEFER P2** · XLS **OUT**
- Peer **none** · **cấm** invent so-ts-green · map none · GAP-CSDL-CUC-11
- Gates: tz_na · xco_get_only · share_tenant
- DOMAIN-MAP add `csdl-bieu-12`→Asset (T-DM-01) — map live thiếu `12`
- open questions: **none**

## Inventory (slim)

| id | label | controlHint | write |
|----|-------|-------------|-------|
| search | Tìm | SearchTextInput | filter |
| province/status/side | Tỉnh/TT/VT | Dropdown | shell LOOKUP · side_only |
| roadCode | Đường | SearchInput | shell + road-route |
| kmFrom/kmTo | Km | Number | shell Line |
| code | Mã | Text ro | shell CX- |
| oleander/ngau/palm/otherClumps | Khóm SL | Number | typed keep_other |
| grassAreaM2 | Thảm cỏ m² | Number | typed allow_either |
| manageUnit/notes/status | … | Text/Textarea/Dropdown | shell P2 |

## Screens / zones (ids only)

- S-LIST · S-FORM-C/E/V/Copy · S-ACT-DELETE · S-HUB-ENTRY · S-SKIP-PEER · S-SKIP-MAP
- mfeStdUrl=`http://localhost:9301/csdl-bieu-12`
- hub=`http://localhost:9301/so-ts/csdl-so-sach?resource=green-assets`

## API / tasks (ids only)

- FormMode↔API: list/C/E/V/Copy ↔ GET/POST/PUT · soft DELETE · LKP road-route
- T-DM-01 · T-BE-01..06 · T-BFF-01 · T-FE-01..06 · T-OUT-01/02 → TL

## UNCLEAR

- none

## Full paths

- solution: `specs/csdl-bieu-12/be/solution-discovery.md`
- design: `specs/csdl-bieu-12/ui/design.md`
- prior compact: `handoff/design-compact.md` · `po-compact.md` · `data_analy-compact.md`

## Next

| Role | Need |
|------|------|
| **TL** | task/csdl-bieu-12.md · T-* · gates |
| Dev | Schema_CsdlBieu12 · typed DTO · alias page · Slideout 15 · 2 section |
| QA | e2e queued `/agent-qa*` |

## Cấm (compact)

ERP.* · invent API · detail* only · Guid IdCode · invent so-ts-green · parent *Json · 2 entity · Step 4b/migration/e2e/build/start:std ở SA · Write MFE · re-scan demo
