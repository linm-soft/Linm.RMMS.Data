# handoff-compact — sa · csdl-bieu-15

| | |
|--|--|
| schemaVersion | `1` |
| role | `sa` |
| feature | `csdl-bieu-15` |
| title | CSDL Biểu 15 — TMC / thu phí / hạt / kho |
| packKind | `list` |
| changeScope | `new_page` |
| status | `done` |
| taskId | `task_4d337ade` |
| resource | `ops-facilities` |
| formNo | `15` |
| columns | `20` · section vị trí + công trình + thiết bị + quản lý |
| IdCode | `OF-` |
| peerSoTs | `so-ts-toll` · `so-ts-rest-area` · `so-ts-station-house` · **cấm** merge · none_p1 |
| formPattern | **Kind D Slideout** 2col · Z2 công trình · Z3 TB+QL · **cấm** Full-page |
| Kind | **B** A–D+F · **D** Slideout Z1–Z3 |
| solution_confirm | **approve** (autoApprove ON) |
| domain | **Asset** · `api/v1/asset/csdl-records` |
| bff | proxy only · `web-bff/api/v1/asset/csdl-records` |
| entity | shell `CsdlCatalogRecordEntity` + typed `CsdlBieu15Entity` · `rmms_csdl_bieu15` · Schema_CsdlBieu15 |
| facility | facilityKind keep_5 · facilityName · status · yearBuilt |
| area | courtyard/building/other · number_m2 · qty ≥0 |
| equipment | equipmentKind free_text · qty · status |
| sa_tz_gate | `tz_na` |
| sa_xco_gate | `xco_get_only` |
| sa_shared_table | `share_tenant` |
| contentHashPrior | `sha256:3bf356f00182dd6c0864bf5b88ae4d460ef8da73e5521f1b14756b7168dc20a7` |
| headerFingerprintPrior | `sha256:0064a4903777f7ea8d51c7423d8451a20daf77a5934929001905edaa380f4fe4` |
| skillVersion | `2026.08.24.01` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.08.31.2` |
| writtenAt | `2026-09-05T15:30:00.000Z` |

## Decisions

- changeScope=`new_page` · packKind=`list` · Kind B+D Slideout · typed **20 cột** · Z2 công trình · Z3 TB+QL · **cấm** detail* only · **cấm** 2 entity
- API **giữ** `api/v1/asset/csdl-records` · BFF proxy · **cấm ERP.*** · **cấm** invent infra · **cấm** merge road-assets/so-ts-*
- Persist: shell + **Schema_CsdlBieu15** 1:1 · Facility*/Area*/Equipment* flat · **cấm** parent *Json · migration Dev/4b only
- Q-ROUTE **alias_now** · Q-PROV **keep_static** · Q-KIND-SET **keep_5** · Q-EQ-SET **free_text** · Q-AREA-UNIT **number_m2** · Q-MANAGE **in_20** · Q-PREFIX **OF** · Q-LIST-COLS **subset** · Q-TITLE **ctx_tmc** · Q-DMAP **add_now** · Q-PEER-LINK **none_p1** · Q-KM **range**
- road-route SearchInput P1 · org **DEFER P2** · XLS **OUT**
- Peer cite only · map none · GAP-CSDL-CUC-11 · hub NEW card formNo 15
- Gates: tz_na · xco_get_only · share_tenant
- DOMAIN-MAP add `csdl-bieu-15`→Asset (T-DM-01) — map live thiếu `15`
- open questions: **none**

## Inventory (slim)

| id | label | controlHint | write |
|----|-------|-------------|-------|
| search | Tìm | SearchTextInput | filter |
| province/status/facilityKind | Tỉnh/TT/Loại CS | Dropdown | shell/typed LOOKUP |
| roadCode | Đường | SearchInput | shell + road-route |
| kmFrom/kmTo | Km | Number | shell Line |
| code | Mã | Text ro | shell OF- |
| facilityKind/Name/courtyard*/building*/other*/status/yearBuilt | Công trình | Dropdown/Text/Number | typed Z2 |
| equipmentKind/Qty/Status | Thiết bị | Text/Number/Dropdown | typed Z3 · free_text |
| manageUnit/notes | Quản lý | Text/Textarea | shell · org P2 |

## Screens / zones (ids only)

- S-LIST · S-FORM-C/E/V/Copy · S-ACT-DELETE · S-HUB-ENTRY · S-SKIP-PEER · S-SKIP-MAP
- mfeStdUrl=`http://localhost:9301/csdl-bieu-15`
- hub=`http://localhost:9301/so-ts/csdl-so-sach?resource=ops-facilities`

## API / tasks (ids only)

- FormMode↔API: list/C/E/V/Copy ↔ GET/POST/PUT · soft DELETE · LKP road-route
- T-DM-01 · T-BE-01..06 · T-BFF-01 · T-FE-01..06 · T-OUT-01/02 → TL

## UNCLEAR

- none

## Full paths

- solution: `specs/csdl-bieu-15/be/solution-discovery.md`
- design: `specs/csdl-bieu-15/ui/design.md`
- prior compact: `handoff/design-compact.md` · `po-compact.md` · `handoff/data_analy-compact.md`

## Next

| Role | Need |
|------|------|
| **TL** | task/csdl-bieu-15.md · T-* · gates |
| Dev | Schema_CsdlBieu15 · typed DTO · alias page · Slideout 20 · hub NEW |
| QA | e2e queued `/agent-qa*` |

## Cấm (compact)

ERP.* · invent API/infra · detail* only · Guid IdCode · merge so-ts-toll/rest/station/road-assets · parent *Json · 2 entity · Step 4b/migration/e2e/build/start:std ở SA · Write MFE · re-scan demo
