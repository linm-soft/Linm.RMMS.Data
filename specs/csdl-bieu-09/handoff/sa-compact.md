# handoff-compact — sa · csdl-bieu-09

| | |
|--|--|
| schemaVersion | `1` |
| role | `sa` |
| feature | `csdl-bieu-09` |
| title | CSDL Biểu 09 — Mốc lộ giới / GPMB |
| packKind | `list` |
| changeScope | `new_page` |
| status | `done` |
| taskId | `task_fe29c657` |
| resource | `boundary-markers` |
| formNo | `09` |
| columns | `17` · **2 section kind** |
| IdCode | `MK-` |
| peerSoTs | — (≠ so-ts / road-assets) |
| formPattern | **Kind D Slideout** 2col · 2 section kind · **cấm** Full-page |
| Kind | **B** A–D+F · **D** Slideout Z1–Z3 |
| solution_confirm | **approve** (autoApprove ON) |
| domain | **Asset** · `api/v1/asset/csdl-records` |
| bff | proxy only · `web-bff/api/v1/asset/csdl-records` |
| entity | shell `CsdlCatalogRecordEntity` + typed `CsdlBieu9Entity` · `rmms_csdl_bieu9` · Schema_CsdlBieu9 |
| sa_tz_gate | `tz_na` |
| sa_xco_gate | `xco_get_only` |
| sa_shared_table | `share_tenant` |
| contentHashPrior | `sha256:863490daf95d2c19ddad660fc05f901eaeb0248fb65961f9e96747ebcf5b04e4` |
| headerFingerprintPrior | `sha256:18fb135f880ed55afa6e9277e8980fd0458a24d85d87e69a753b805424f396bb` |
| skillVersion | `2026.08.24.01` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.08.31.2` |
| writtenAt | `2026-09-05T18:00:00.000Z` |

## Decisions

- changeScope=`new_page` · packKind=`list` · Kind B+D Slideout · typed **17 cột** · 2 section kind · **cấm** detail* only · **cấm** 2 entity
- API **giữ** `api/v1/asset/csdl-records` · BFF proxy · **cấm ERP.*** · **cấm** invent infra/so-ts
- Persist: shell + **Schema_CsdlBieu9** 1:1 · **cấm** parent *Json · migration Dev/4b only
- Q-KIND-LABEL **code_en** RoadLimit/GPMB · Q-STRUCT **excel_seed** · Q-DIM **full_dim** · Q-QTY **show_always** default 1 · Q-LIST-COLS **subset**
- Q-ROUTE **alias_now** `/csdl-bieu-09` + hub · Q-PROV **keep_static** P1 · Q-REN-LABEL **with_typed** (T-REN-01)
- road-route SearchInput P1 · org **DEFER P2** · XLS **OUT**
- Peer **none** · **cấm** merge Sổ TS · **≠** road-assets · map none · GAP-CSDL-CUC-11
- Gates: tz_na · xco_get_only · share_tenant
- DOMAIN-MAP add `csdl-bieu-09`→Asset (T-DM-01)
- open questions: **none**

## Inventory (slim)

| id | label | controlHint | write |
|----|-------|-------------|-------|
| search | Tìm | SearchTextInput | filter |
| province/status/side/markerKind | Tỉnh/TT/VT/Loại | Dropdown | shell+typed LOOKUP |
| roadCode | Đường | SearchInput | shell + road-route |
| kmFrom/kmTo | Km | Number | shell Point |
| code | Mã | Text ro | shell MK- |
| markerStructure | Kết cấu | Dropdown | typed Excel seed |
| markerLengthM/WidthM/AreaM2 | KC/DT | Number | typed optional |
| markerQty | SL | Number | typed default 1 |
| completedYear | Năm HT | Number | typed required |
| manageUnit/notes/status | … | Text/Textarea/Dropdown | shell P2 |

## Screens / zones (ids only)

- S-LIST · S-FORM-C/E/V/Copy · S-ACT-DELETE · S-HUB-ENTRY · S-SKIP-MAP · **cấm** peer Sổ TS
- mfeStdUrl=`http://localhost:9301/csdl-bieu-09`
- hub=`http://localhost:9301/so-ts/csdl-so-sach?resource=boundary-markers`

## API / tasks (ids only)

- FormMode↔API: list/C/E/V/Copy ↔ GET/POST/PUT · soft DELETE · LKP road-route
- T-DM-01 · T-REN-01 · T-BE-01..05 · T-BFF-01 · T-FE-01..06 · T-OUT-01/02 → TL

## UNCLEAR

- none

## Full paths

- solution: `specs/csdl-bieu-09/be/solution-discovery.md`
- design: `specs/csdl-bieu-09/ui/design.md`
- prior compact: `handoff/design-compact.md` · `po-compact.md` · `data_analy-compact.md`

## Next

| Role | Need |
|------|------|
| **TL** | task/csdl-bieu-09.md · T-* · gates |
| Dev | Schema_CsdlBieu9 · typed DTO · alias page · Slideout 17 · 2 section kind |
| QA | e2e queued `/agent-qa*` |

## Cấm (compact)

ERP.* · invent API · detail* only · Guid IdCode · merge Sổ TS · parent *Json · 2 entity · Step 4b/migration/e2e/build/start:std ở SA · Write MFE · re-scan demo
