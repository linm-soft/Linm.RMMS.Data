# handoff-compact — sa · csdl-bieu-11

| | |
|--|--|
| schemaVersion | `1` |
| role | `sa` |
| feature | `csdl-bieu-11` |
| title | CSDL Biểu 11 — Hệ thống chiếu sáng |
| packKind | `list` |
| changeScope | `new_page` |
| status | `done` |
| taskId | `task_e96d7cf9` |
| resource | `lighting-systems` |
| formNo | `11` |
| columns | `24` · **2 section** lưới + NLMT |
| IdCode | `LT-` |
| peerSoTs | `so-ts-lighting` (toolbar · ≠ merge · qty ≠ điểm) |
| formPattern | **Kind D Slideout** 2col · 2 section · **cấm** Full-page |
| Kind | **B** A–D+F · **D** Slideout Z1–Z3 · Z2b NLMT |
| solution_confirm | **approve** (autoApprove ON) |
| domain | **Asset** · `api/v1/asset/csdl-records` |
| bff | proxy only · `web-bff/api/v1/asset/csdl-records` |
| entity | shell `CsdlCatalogRecordEntity` + typed `CsdlBieu11Entity` · `rmms_csdl_bieu11` · Schema_CsdlBieu11 |
| cabinet | **split** `cabinetCount` ≠ `solarCabinetCount` |
| solar | optional_flat 6 col · **cấm** Solar child P1 |
| led | allow_zero · GridLed600/240/150/125 |
| gridStatus | align_status tot/tb/kem/hong |
| sa_tz_gate | `tz_na` |
| sa_xco_gate | `xco_get_only` |
| sa_shared_table | `share_tenant` |
| contentHashPrior | `sha256:7980db07b4712336ab0b675fa89feaab75c67fdaef3b54fe94647ab9ec1863d8` |
| headerFingerprintPrior | `sha256:b37759a9224c09c7c63bc81583b4a9bcbca02e74cba8b63579819e90d57f1d1a` |
| skillVersion | `2026.08.24.01` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.08.31.2` |
| writtenAt | `2026-09-05T12:30:00.000Z` |

## Decisions

- changeScope=`new_page` · packKind=`list` · Kind B+D Slideout · typed **24 cột** · 2 section · **cấm** detail* only · **cấm** 2 entity
- API **giữ** `api/v1/asset/csdl-records` · BFF proxy · **cấm ERP.*** · **cấm** invent infra/so-ts
- Persist: shell + **Schema_CsdlBieu11** 1:1 · solar flat · **cấm** parent *Json · migration Dev/4b only
- Q-ROUTE **alias_now** · Q-PROV **keep_static** · Q-GRID-STATUS **align_status** · Q-LED-ZERO **allow_zero** · Q-SOLAR-REQ **optional** · Q-CABINET **split** · Q-LIST-COLS **subset** · Q-PEER **toolbar** · Q-TITLE **keep_demo**
- road-route SearchInput P1 · org **DEFER P2** · XLS **OUT**
- Peer toolbar `so-ts-lighting` · **cấm** merge · **≠** road-assets · **cấm** dump điểm→qty · map none · GAP-CSDL-CUC-11
- Gates: tz_na · xco_get_only · share_tenant
- DOMAIN-MAP add `csdl-bieu-11`→Asset (T-DM-01)
- open questions: **none**

## Inventory (slim)

| id | label | controlHint | write |
|----|-------|-------------|-------|
| search | Tìm | SearchTextInput | filter |
| province/status/side | Tỉnh/TT/VT | Dropdown | shell LOOKUP |
| roadCode | Đường | SearchInput | shell + road-route |
| kmFrom/kmTo | Km | Number | shell Line |
| code | Mã | Text ro | shell LT- |
| gridLed600/240/150/125 | LED qty | Number | typed allow_zero |
| gridStatus | TT lưới | Dropdown | typed align_status |
| gridPoleCount/cabinetCount/substationCount | Cột/tủ/TBA | Number | typed · cabinet lưới |
| solar* (6) | NLMT qty | Number | typed flat optional |
| manageUnit/notes/status | … | Text/Textarea/Dropdown | shell P2 |

## Screens / zones (ids only)

- S-LIST · S-FORM-C/E/V/Copy · S-ACT-DELETE · S-HUB-ENTRY · S-PEER · S-SKIP-MAP
- mfeStdUrl=`http://localhost:9301/csdl-bieu-11`
- hub=`http://localhost:9301/so-ts/csdl-so-sach?resource=lighting-systems`

## API / tasks (ids only)

- FormMode↔API: list/C/E/V/Copy ↔ GET/POST/PUT · soft DELETE · LKP road-route
- T-DM-01 · T-BE-01..06 · T-BFF-01 · T-FE-01..06 · T-OUT-01/02 → TL

## UNCLEAR

- none

## Full paths

- solution: `specs/csdl-bieu-11/be/solution-discovery.md`
- design: `specs/csdl-bieu-11/ui/design.md`
- prior compact: `handoff/design-compact.md` · `po-compact.md` · `data_analy-compact.md`

## Next

| Role | Need |
|------|------|
| **TL** | task/csdl-bieu-11.md · T-* · gates |
| Dev | Schema_CsdlBieu11 · typed DTO · alias page · Slideout 24 · 2 section |
| QA | e2e queued `/agent-qa*` |

## Cấm (compact)

ERP.* · invent API · detail* only · Guid IdCode · merge Sổ TS · dump điểm→qty · parent *Json · Solar child P1 · 2 entity · Step 4b/migration/e2e/build/start:std ở SA · Write MFE · re-scan demo
