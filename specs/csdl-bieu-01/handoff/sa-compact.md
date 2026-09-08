# handoff-compact — sa · csdl-bieu-01

| | |
|--|--|
| schemaVersion | `1` |
| role | `sa` |
| feature | `csdl-bieu-01` |
| title | CSDL Biểu 01 — Phân loại mặt đường |
| packKind | `list` |
| changeScope | `new_page` |
| status | `done` |
| taskId | `task_2a18844f` |
| resource | `pavement-sections` |
| formNo | `01` |
| columns | `38` |
| IdCode | `MD-` |
| peerSoTs | `pavement-section` |
| formPattern | **Kind D Slideout** 2col · **cấm** Full-page |
| Kind | **B** A–D+F · **D** Slideout Z1–Z3 |
| solution_confirm | **approve** (autoApprove ON) |
| domain | **Asset** · `api/v1/asset/csdl-records` |
| bff | proxy only · `web-bff/api/v1/asset/csdl-records` |
| entity | shell `CsdlCatalogRecordEntity` + typed `CsdlBieu1Entity` · `rmms_csdl_bieu1` · Schema_CsdlBieu1 |
| sa_tz_gate | `tz_na` |
| sa_xco_gate | `xco_get_only` |
| sa_shared_table | `share_tenant` |
| contentHashPrior | `sha256:3545960f4006740c9dfe57b5f004fa4a1cd1b7befbcd51e35e2168e16821b65e` |
| headerFingerprintPrior | `sha256:6376475bbf48ca5b3e8cfd26688cd877fd1bc77d5b8d8c4c3d314cd0572f5cf2` |
| skillVersion | `2026.08.24.01` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.08.31.2` |
| writtenAt | `2026-09-05T12:20:00.000Z` |

## Decisions

- changeScope=`new_page` · packKind=`list` · Kind B+D Slideout · typed **38 cột** · **cấm** detail* only
- API **giữ** `api/v1/asset/csdl-records` · BFF proxy · **cấm ERP.*** · **cấm** invent infra/so-ts
- Persist: shell + **Schema_CsdlBieu1** 1:1 · **cấm** parent *Json · migration Dev/4b only
- Q-WIDTH **four_buckets** surfW*×4 · Q-STRUCT **one_enum** structureType
- Q-ROUTE **alias_now** `/csdl-bieu-01` + hub · Q-PROV **keep_static** P1
- road-route SearchInput P1 · org SearchInput **DEFER P2** · XLS/skip-bridge **OUT**
- Peer Sổ TS deep-link · **cấm** merge form · map none
- Gates: tz_na · xco_get_only · share_tenant
- DOMAIN-MAP add `csdl-bieu-01`→Asset (T-DM-01)
- open questions: **none**

## Inventory (slim)

| id | label | controlHint | write |
|----|-------|-------------|-------|
| search | Tìm | SearchTextInput | filter |
| province/status | Tỉnh/TT | Dropdown | shell LOOKUP_STATIC |
| roadCode | Đường | SearchInput | shell + road-route |
| kmFrom/kmTo | Km | Number | shell |
| code | Mã | Text ro | shell MD- |
| lengthKm/baseWidthM | Cdài/B nền | Number | typed |
| surfW* ×4 | B mặt | Number | typed four_buckets |
| structureType | Kết cấu | Dropdown | typed one_enum |
| plain/mountainClass | Cấp | Dropdown | typed |
| yearsInServiceBand | Năm SD | Dropdown | typed |
| handover* | BG | Checkbox | typed |
| last*Year | Năm ĐT/SC | Number | typed |
| manageUnit | ĐV QL | Text | shell P2 SearchInput |
| notes/side/status | … | Textarea/Dropdown | shell |

## Screens / zones (ids only)

- S-LIST · S-FORM-C/E/V/Copy · S-ACT-DELETE · S-HUB-ENTRY · S-PEER-SOTS · S-SKIP-MAP
- mfeStdUrl=`http://localhost:9301/csdl-bieu-01`
- hub=`http://localhost:9301/so-ts/csdl-so-sach?resource=pavement-sections`

## API / tasks (ids only)

- FormMode↔API: list/C/E/V/Copy ↔ GET/POST/PUT · soft DELETE · LKP road-route
- T-DM-01 · T-BE-01..05 · T-BFF-01 · T-FE-01..06 · T-OUT-01 → TL

## UNCLEAR

- none

## Full paths

- solution: `specs/csdl-bieu-01/be/solution-discovery.md`
- design: `specs/csdl-bieu-01/ui/design.md`
- prior compact: `handoff/design-compact.md` · `po-compact.md` · `data_analy-compact.md`

## Next

| Role | Need |
|------|------|
| **TL** | task/csdl-bieu-01.md · T-* · gates |
| Dev | Schema_CsdlBieu1 · typed DTO · alias page · Slideout 38 |
| QA | e2e queued `/agent-qa*` |

## Cấm (compact)

ERP.* · invent API · detail* only · Guid IdCode · merge Sổ TS · parent *Json · Step 4b/migration/e2e/build/start:std ở SA · Write MFE · re-scan demo
