# handoff-compact — sa · csdl-so-06

| | |
|--|--|
| schemaVersion | `1` |
| role | `sa` |
| feature | `csdl-so-06` |
| title | CSDL Sổ 06 — QL cầu / phiếu KT |
| packKind | `list` |
| changeScope | `new_page` |
| status | `done` |
| taskId | `task_765e52bc` |
| resource | `bridge-inspections` |
| formNo | `06` |
| IdCode | `SO-` |
| formPattern | **Kind D Slideout** 2col · entries `inline_grid` **fixed-20** · **cấm** Full-page |
| Kind | **B** A–D+F+H · **D** Slideout Z1–Z3 |
| solution_confirm | **approve** (autoApprove ON) |
| domain | **Asset** · `api/v1/asset/csdl-records` |
| bff | proxy only · `web-bff/api/v1/asset/csdl-records` |
| entity | shell `CsdlCatalogRecordEntity` + typed `CsdlSo06Entity` · `rmms_csdl_so06` · widen `CsdlBookEntryEntity` · Schema_CsdlSo06 |
| file | FileService photoIds / dòng · max 5 · optional |
| sa_tz_gate | `tz_list_and_form` |
| sa_xco_gate | `xco_get_only` |
| sa_shared_table | `share_tenant` |
| contentHashPrior | `sha256:efbccc4800d45e5dfe2b30b8b35773d127554eb6912be14729c0da066e214d8a` |
| headerFingerprintPrior | `sha256:f87218b875c86a0a438994d8dd3abf30f59757fe4f85ddc4e9af0893efb9422f` |
| skillVersion | `2026.08.25.01` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.08.31.2` |
| writtenAt | `2026-09-06T03:40:00.000Z` |

## Decisions

- changeScope=`new_page` · packKind=`list` · Kind B+D Slideout · typed T-SO-06 · **cấm** detail*/col1–3 · **cấm** add/remove · **cấm** đổi partCode seed
- API **giữ** `api/v1/asset/csdl-records` · BFF proxy · **cấm ERP.*** · **cấm** runtime `/api/v1/bridge-inspections` · **cấm** invent infra/so-ts/file
- Persist: shell + **Schema_CsdlSo06** 1:1 + widen entries · seed 20 (Signage…AttachedDevices) · **cấm** parent *Json
- status draft|done|cancelled · priority required khi damageDesc · photoIds FileService max5 · manageUnit Text P1 · org DEFER P2
- Alias `/csdl-so-06` + hub · road-route + bridges SearchInput · peer Biểu 2 deep-link · **cấm** merge · XLS OUT · map none
- Gates: tz_list_and_form · xco_get_only · share_tenant
- DOMAIN-MAP add `csdl-so-06`→Asset (T-DM-01) · open Q: **none**

## Inventory (slim)

| id | label | controlHint | write |
|----|-------|-------------|-------|
| search | Tìm | SearchTextInput | filter |
| province/status | Tỉnh/TT | Dropdown | shell LOOKUP_STATIC |
| roadCode/bridgeId | Đường/Cầu | SearchInput | shell/typed + LKP |
| fromDate/toDate | Ngày KT | Date | filter inspectedAt · TZ |
| code | Mã | Text ro | shell SO- |
| bridge*/road* | Cầu/Đường | SearchInput+display | typed/shell req |
| kmStation/manageUnit | Km/ĐV | Number/Text | typed |
| passportRef | Passport | Text+link | typed · Biểu 2 |
| inspectedAt/inspector | Ngày/Người | Date/Text | typed · TZ |
| notes | Ghi chú | Textarea | shell |
| entries.* | 20 BP | ro part · Textarea/Text/Dropdown/FileMulti | PartCode…PhotoIds |

## Screens / zones (ids only)

- S-LIST · S-FORM-C/E/V/Copy · S-ENTRIES fixed-20 · S-ACT-DELETE · S-HUB-ENTRY · S-SKIP-MAP
- mfeStdUrl=`http://localhost:9301/csdl-so-06`
- hub=`http://localhost:9301/so-ts/csdl-so-sach?resource=bridge-inspections`

## API / tasks (ids only)

- FormMode↔API: list/C/E/V/Copy ↔ GET/POST/PUT · soft DELETE · LKP road+bridge · FileService
- T-DM-01 · T-BE-01..06 · T-BFF-01 · T-FE-01..07 · T-OUT-01 → TL

## UNCLEAR

- none

## Full paths

- solution: `specs/csdl-so-06/be/solution-discovery.md`
- design: `specs/csdl-so-06/ui/design.md`
- prior compact: `handoff/design-compact.md` · `po-compact.md` · `data_analy-compact.md`
- STATUS: `specs/csdl-so-06/STATUS.md`

## Cấm (compact)

Demo/LS SSOT · ERP.* · Guid IdCode · form 3 ô/col1–3 only · add/remove >20 · invent map/file API · runtime bridge-inspections path · Write MFE · yarn build/e2e/start:std · Step 4b @ SA · re-scan demo
