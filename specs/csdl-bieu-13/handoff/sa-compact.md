# handoff-compact — sa · csdl-bieu-13

| | |
|--|--|
| schemaVersion | `1` |
| role | `sa` |
| feature | `csdl-bieu-13` |
| title | CSDL Biểu 13 — Tường chống ồn |
| packKind | `list` |
| changeScope | `new_page` |
| status | `done` |
| taskId | `task_66b443d8` |
| resource | `noise-barriers` |
| formNo | `13` |
| columns | `13` · section vị trí + kích thước |
| IdCode | `TC-` |
| peerSoTs | `so-ts-noise-barrier` · **cấm** merge · none_p1 |
| formPattern | **Kind D Slideout** 2col · Z2 Kích thước · **cấm** Full-page |
| Kind | **B** A–D+F · **D** Slideout Z1–Z3 |
| solution_confirm | **approve** (autoApprove ON) |
| domain | **Asset** · `api/v1/asset/csdl-records` |
| bff | proxy only · `web-bff/api/v1/asset/csdl-records` |
| entity | shell `CsdlCatalogRecordEntity` + typed `CsdlBieu13Entity` · `rmms_csdl_bieu13` · Schema_CsdlBieu13 |
| dim | lengthM/heightM/areaM2 decimal ≥0 · area **manual** · reject all-zero |
| side | L/R/C/Both LOOKUP |
| barrierType | **no_type_keep_13** |
| sa_tz_gate | `tz_na` |
| sa_xco_gate | `xco_get_only` |
| sa_shared_table | `share_tenant` |
| contentHashPrior | `sha256:39a45de0a9b834c65373e6c20d1664ab43144ff60d97bae4f0d886ad09d91e3a` |
| headerFingerprintPrior | `sha256:31dbc83200b511c9d61333b1cdb94e2880778980a3b21970be414e926db29008` |
| skillVersion | `2026.08.24.01` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.08.31.2` |
| writtenAt | `2026-09-05T14:20:00.000Z` |

## Decisions

- changeScope=`new_page` · packKind=`list` · Kind B+D Slideout · typed **13 cột** · section kích thước · **cấm** detail* only · **cấm** 2 entity
- API **giữ** `api/v1/asset/csdl-records` · BFF proxy · **cấm ERP.*** · **cấm** invent infra · **cấm** merge road-assets/so-ts-noise-barrier
- Persist: shell + **Schema_CsdlBieu13** 1:1 · LengthM/HeightM/AreaM2 flat · **cấm** parent *Json · migration Dev/4b only
- Q-ROUTE **alias_now** · Q-PROV **keep_static** · Q-BARRIER-TYPE **no_type_keep_13** · Q-AREA-DERIVE **manual** · Q-PREFIX **TC** · Q-LIST-COLS **subset** · Q-TITLE **ctx_tuong** · Q-DMAP **add_now** · Q-PEER-LINK **none_p1**
- road-route SearchInput P1 · org **DEFER P2** · XLS **OUT**
- Peer cite only · map none · GAP-CSDL-CUC-11 · hub NEW card formNo 13
- Gates: tz_na · xco_get_only · share_tenant
- DOMAIN-MAP add `csdl-bieu-13`→Asset (T-DM-01) — map live thiếu `13`
- open questions: **none**

## Inventory (slim)

| id | label | controlHint | write |
|----|-------|-------------|-------|
| search | Tìm | SearchTextInput | filter |
| province/status/side | Tỉnh/TT/VT | Dropdown | shell LOOKUP |
| roadCode | Đường | SearchInput | shell + road-route |
| kmFrom/kmTo | Km | Number | shell Line |
| code | Mã | Text ro | shell TC- |
| lengthM/heightM/areaM2 | Dài/Cao/DT | Number | typed manual area |
| manageUnit/notes/status | … | Text/Textarea/Dropdown | shell P2 |

## Screens / zones (ids only)

- S-LIST · S-FORM-C/E/V/Copy · S-ACT-DELETE · S-HUB-ENTRY · S-SKIP-PEER · S-SKIP-MAP
- mfeStdUrl=`http://localhost:9301/csdl-bieu-13`
- hub=`http://localhost:9301/so-ts/csdl-so-sach?resource=noise-barriers`

## API / tasks (ids only)

- FormMode↔API: list/C/E/V/Copy ↔ GET/POST/PUT · soft DELETE · LKP road-route
- T-DM-01 · T-BE-01..06 · T-BFF-01 · T-FE-01..06 · T-OUT-01/02 → TL

## UNCLEAR

- none

## Full paths

- solution: `specs/csdl-bieu-13/be/solution-discovery.md`
- design: `specs/csdl-bieu-13/ui/design.md`
- prior compact: `handoff/design-compact.md` · `po-compact.md` · `data_analy-compact.md`

## Next

| Role | Need |
|------|------|
| **TL** | task/csdl-bieu-13.md · T-* · gates |
| Dev | Schema_CsdlBieu13 · typed DTO · alias page · Slideout 13 · hub NEW |
| QA | e2e queued `/agent-qa*` |

## Cấm (compact)

ERP.* · invent API · detail* only · Guid IdCode · merge so-ts-noise-barrier/road-assets · parent *Json · 2 entity · Step 4b/migration/e2e/build/start:std ở SA · Write MFE · re-scan demo
