# handoff-compact — sa · csdl-bieu-07

| | |
|--|--|
| schemaVersion | `1` |
| role | `sa` |
| feature | `csdl-bieu-07` |
| title | CSDL Biểu 07 — Lề / taluy / hàng rào |
| packKind | `list` |
| changeScope | `new_page` |
| status | `done` |
| taskId | `task_b41ac662` |
| resource | `shoulders-fences` |
| formNo | `07` |
| columns | `20` |
| IdCode | `LE-` |
| peerSoTs | `SHOULDER` |
| formPattern | **Kind D Slideout** 2col · 3 section · **cấm** Full-page |
| Kind | **B** A–D+F · **D** Slideout Z1–Z3 |
| solution_confirm | **approve** (autoApprove ON) |
| domain | **Asset** · `api/v1/asset/csdl-records` |
| bff | proxy only · `web-bff/api/v1/asset/csdl-records` |
| entity | shell `CsdlCatalogRecordEntity` + typed `CsdlBieu7Entity` · `rmms_csdl_bieu7` · Schema_CsdlBieu7 |
| sa_tz_gate | `tz_na` |
| sa_xco_gate | `xco_get_only` |
| sa_shared_table | `share_tenant` |
| contentHashPrior | `sha256:5634091e7ce3e5272c090320398a76d75f84ed7326366e93e088ff2154e8bf44` |
| headerFingerprintPrior | `sha256:ba33856d00d23440b05be8c78c8b8a5462662c96a1067e702b791eb5020d64cf` |
| skillVersion | `2026.08.24.01` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.08.31.2` |
| writtenAt | `2026-09-05T16:30:00.000Z` |

## Decisions

- changeScope=`new_page` · packKind=`list` · Kind B+D Slideout · typed **20 cột** · 3 section · **cấm** detail* only
- API **giữ** `api/v1/asset/csdl-records` · BFF proxy · **cấm ERP.*** · **cấm** invent infra/so-ts
- Persist: shell + **Schema_CsdlBieu7** 1:1 · **cấm** parent *Json · migration Dev/4b only
- Q-SIDE **shared** L/R/Both · Q-SLOPE **map_clearing** slopeLengthM↔SlopeClearingM · Q-FENCE-LEN **km**↔FenceLengthM×1000 · Q-PANEL **omit_p1** · Q-STRUCT **lookup_seed**
- Q-ROUTE **alias_now** `/csdl-bieu-07` + hub · Q-PROV **keep_static** P1 · Q-REN-LABEL **with_typed** (T-REN-01)
- road-route SearchInput P1 · org **DEFER P2** · XLS **OUT** · FencePanelCount P2
- Peer SHOULDER deep-link · **cấm** merge · **≠** road-assets · map none
- Gates: tz_na · xco_get_only · share_tenant
- DOMAIN-MAP add `csdl-bieu-07`→Asset (T-DM-01)
- open questions: **none**

## Inventory (slim)

| id | label | controlHint | write |
|----|-------|-------------|-------|
| search | Tìm | SearchTextInput | filter |
| province/status/side/fenceKind | Tỉnh/TT/Vị trí/HR | Dropdown | shell+typed LOOKUP |
| roadCode | Đường | SearchInput | shell + road-route |
| kmFrom/kmTo | Km | Number | shell Line |
| code | Mã | Text ro | shell LE- |
| shoulderStructure | KC lề | Dropdown | typed * |
| shoulderLengthM/WidthM/AreaM2 | Lề | Number | typed * dài/rộng |
| slopeLengthM/AreaM2 | Taluy | Number | typed · SlopeClearingM |
| fencePostCount/fenceLengthKm | HR | Number | typed · km→FenceLengthM |
| builtYear/manageUnit/notes/status | … | Number/Text/Textarea/Dropdown | typed / shell P2 |

## Screens / zones (ids only)

- S-LIST · S-FORM-C/E/V/Copy · S-ACT-DELETE · S-HUB-ENTRY · S-PEER-SOTS · S-SKIP-MAP
- mfeStdUrl=`http://localhost:9301/csdl-bieu-07`
- hub=`http://localhost:9301/so-ts/csdl-so-sach?resource=shoulders-fences`

## API / tasks (ids only)

- FormMode↔API: list/C/E/V/Copy ↔ GET/POST/PUT · soft DELETE · LKP road-route
- T-DM-01 · T-REN-01 · T-BE-01..05 · T-BFF-01 · T-FE-01..06 · T-OUT-01/02 → TL

## UNCLEAR

- none

## Full paths

- solution: `specs/csdl-bieu-07/be/solution-discovery.md`
- design: `specs/csdl-bieu-07/ui/design.md`
- prior compact: `handoff/design-compact.md` · `po-compact.md` · `data_analy-compact.md`

## Next

| Role | Need |
|------|------|
| **TL** | task/csdl-bieu-07.md · T-* · gates |
| Dev | Schema_CsdlBieu7 · typed DTO · alias page · Slideout 20 · 3 section |
| QA | e2e queued `/agent-qa*` |

## Cấm (compact)

ERP.* · invent API · detail* only · Guid IdCode · merge Sổ TS · parent *Json · Step 4b/migration/e2e/build/start:std ở SA · Write MFE · re-scan demo · FencePanelCount P1
