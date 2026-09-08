# handoff-compact — sa · csdl-bieu-10

| | |
|--|--|
| schemaVersion | `1` |
| role | `sa` |
| feature | `csdl-bieu-10` |
| title | CSDL Biểu 10 — Kè, tường chắn |
| packKind | `list` |
| changeScope | `new_page` |
| status | `done` |
| taskId | `task_652dcd09` |
| resource | `retaining-walls` |
| formNo | `10` |
| columns | `21` · **2 section** tường + rãnh đỉnh |
| IdCode | `KE-` |
| peerSoTs | `so-ts-retaining` (toolbar · ≠ merge) |
| formPattern | **Kind D Slideout** 2col · 2 section · **cấm** Full-page |
| Kind | **B** A–D+F · **D** Slideout Z1–Z3 · Z2b crest |
| solution_confirm | **approve** (autoApprove ON) |
| domain | **Asset** · `api/v1/asset/csdl-records` |
| bff | proxy only · `web-bff/api/v1/asset/csdl-records` |
| entity | shell `CsdlCatalogRecordEntity` + typed `CsdlBieu10Entity` · `rmms_csdl_bieu10` · Schema_CsdlBieu10 |
| heightAlias | UI `heightM` ↔ DB `WidthM` |
| crest | optional_flat 4 col · **cấm** CrestDitch child P1 |
| sa_tz_gate | `tz_na` |
| sa_xco_gate | `xco_get_only` |
| sa_shared_table | `share_tenant` |
| contentHashPrior | `sha256:56715ebbcfffd0589eab296a31137e79a82b49c672dc14582fc554f4ed262346` |
| headerFingerprintPrior | `sha256:100df2f2285c57a909981f9248564af4f788a1ea653fd261122e9a64064773ad` |
| skillVersion | `2026.08.24.01` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.08.31.2` |
| writtenAt | `2026-09-05T18:35:00.000Z` |

## Decisions

- changeScope=`new_page` · packKind=`list` · Kind B+D Slideout · typed **21 cột** · 2 section · **cấm** detail* only · **cấm** 2 entity
- API **giữ** `api/v1/asset/csdl-records` · BFF proxy · **cấm ERP.*** · **cấm** invent infra/so-ts
- Persist: shell + **Schema_CsdlBieu10** 1:1 · crest flat · **cấm** parent *Json · migration Dev/4b only
- Q-KIND **label_vn** EN codes Gravity/Gabion/RC/Retaining · Q-STRUCT **excel_seed** · Q-MAT **lookup** · Q-HEIGHT **height_alias** · Q-CREST **optional_flat** · Q-AREA **optional** · Q-LIST-COLS **subset**
- Q-ROUTE **alias_now** `/csdl-bieu-10` + hub · Q-PROV **keep_static** P1 · Q-REN-LABEL **with_typed** (T-REN-01) · Q-PEER **toolbar**
- road-route SearchInput P1 · org **DEFER P2** · XLS **OUT**
- Peer toolbar `so-ts-retaining` · **cấm** merge · **≠** road-assets · map none · GAP-CSDL-CUC-11
- Gates: tz_na · xco_get_only · share_tenant
- DOMAIN-MAP add `csdl-bieu-10`→Asset (T-DM-01)
- open questions: **none**

## Inventory (slim)

| id | label | controlHint | write |
|----|-------|-------------|-------|
| search | Tìm | SearchTextInput | filter |
| province/status/side/wallKind | Tỉnh/TT/VT/Loại | Dropdown | shell+typed LOOKUP |
| roadCode | Đường | SearchInput | shell + road-route |
| kmFrom/kmTo | Km | Number | shell Line |
| code | Mã | Text ro | shell KE- |
| structure/material | KC/VL | Dropdown | typed Excel/lookup |
| lengthM/heightM/areaM2 | Dài/Cao/DT | Number | typed · height↔WidthM · area opt |
| crestDitch* (4) | Rãnh đỉnh | Dropdown/Number | typed flat optional |
| inServiceYear | Năm SD | Number | typed required |
| manageUnit/notes/status | … | Text/Textarea/Dropdown | shell P2 |

## Screens / zones (ids only)

- S-LIST · S-FORM-C/E/V/Copy · S-ACT-DELETE · S-HUB-ENTRY · S-PEER · S-SKIP-MAP
- mfeStdUrl=`http://localhost:9301/csdl-bieu-10`
- hub=`http://localhost:9301/so-ts/csdl-so-sach?resource=retaining-walls`

## API / tasks (ids only)

- FormMode↔API: list/C/E/V/Copy ↔ GET/POST/PUT · soft DELETE · LKP road-route
- T-DM-01 · T-REN-01 · T-BE-01..06 · T-BFF-01 · T-FE-01..06 · T-OUT-01/02 → TL

## UNCLEAR

- none

## Full paths

- solution: `specs/csdl-bieu-10/be/solution-discovery.md`
- design: `specs/csdl-bieu-10/ui/design.md`
- prior compact: `handoff/design-compact.md` · `po-compact.md` · `data_analy-compact.md`

## Next

| Role | Need |
|------|------|
| **TL** | task/csdl-bieu-10.md · T-* · gates |
| Dev | Schema_CsdlBieu10 · typed DTO · heightM↔WidthM · alias page · Slideout 21 · 2 section |
| QA | e2e queued `/agent-qa*` |

## Cấm (compact)

ERP.* · invent API · detail* only · Guid IdCode · merge Sổ TS · parent *Json · CrestDitch child P1 · 2 entity · Step 4b/migration/e2e/build/start:std ở SA · Write MFE · re-scan demo
