# handoff-compact — sa · csdl-so-01

| | |
|--|--|
| schemaVersion | `1` |
| role | `sa` |
| feature | `csdl-so-01` |
| title | CSDL Sổ 01 — Nhật ký tuần kiểm |
| packKind | `list` |
| changeScope | `new_page` |
| status | `done` |
| taskId | `task_71adf8b1` |
| resource | `inspection-logs` |
| formNo | `01` |
| IdCode | `SO-` |
| formPattern | **Kind D Slideout** 2col · entries `inline_grid` · **cấm** Full-page |
| Kind | **B** A–D+F+H · **D** Slideout Z1–Z3 |
| solution_confirm | **approve** (autoApprove ON) |
| domain | **Asset** · `api/v1/asset/csdl-records` |
| bff | proxy only · `web-bff/api/v1/asset/csdl-records` |
| entity | shell `CsdlCatalogRecordEntity` + typed `CsdlSo01Entity` · `rmms_csdl_so01` · widen `CsdlBookEntryEntity` · Schema_CsdlSo01 |
| sa_tz_gate | `tz_list_and_form` |
| sa_xco_gate | `xco_get_only` |
| sa_shared_table | `share_tenant` |
| contentHashPrior | `sha256:9b7c5f11adaed6b64404b77225fbdc0a6a4021b39d7a00dc1922c643aff822d3` |
| headerFingerprintPrior | `sha256:4e2c2ee770e209ccf28234cb47c2d32098a6b6f9efb8cc5817b9c8964e64a4da` |
| skillVersion | `2026.08.25.01` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.08.31.2` |
| writtenAt | `2026-09-06T01:05:00.000Z` |

## Decisions

- changeScope=`new_page` · packKind=`list` · Kind B+D Slideout · typed T-SO-01 · **cấm** detail*/col1–3 only
- API **giữ** `api/v1/asset/csdl-records` · BFF proxy · **cấm ERP.*** · **cấm** invent infra/so-ts
- Persist: shell + **Schema_CsdlSo01** 1:1 + widen entries · FileService postRepairMediaIds max 10 · cond ≥1 nếu repairRequest · **cấm** parent *Json
- Q-FORMNO label Sổ 01 · Q-STATUS tot/tb/kem/hong · Q-PROV keep_static · Q-ORG Text P1 · Q-MEDIA FileService
- Alias `/csdl-so-01` + hub · road-route SearchInput P1 · org **DEFER P2** · XLS **OUT** · map none
- Gates: tz_list_and_form · xco_get_only · share_tenant
- DOMAIN-MAP add `csdl-so-01`→Asset (T-DM-01)
- open questions: **none**

## Inventory (slim)

| id | label | controlHint | write |
|----|-------|-------------|-------|
| search | Tìm | SearchTextInput | filter |
| province/status | Tỉnh/TT | Dropdown | shell LOOKUP_STATIC |
| roadCode | Đường | SearchInput | shell + road-route |
| fromDate/toDate | Kỳ | Date | filter period · TZ |
| code | Mã | Text ro | shell SO- |
| bookNo/manageUnit | Số quyển/ĐV | Text | shell req |
| roadCode/roadName | Đường | SearchInput+display | shell req |
| kmFrom/kmTo | Km | Number | shell |
| inspector | Người TK | Text | typed req |
| periodStart/End | Kỳ sổ | Date | typed · TZ |
| notes | Ghi chú | Textarea | shell |
| entries.* | Dòng NK | Date/Text/Number/Textarea/File | entry widen · FileService |

## Screens / zones (ids only)

- S-LIST · S-FORM-C/E/V/Copy · S-ENTRIES · S-ACT-DELETE · S-HUB-ENTRY · S-SKIP-MAP
- mfeStdUrl=`http://localhost:9301/csdl-so-01`
- hub=`http://localhost:9301/so-ts/csdl-so-sach?resource=inspection-logs`

## API / tasks (ids only)

- FormMode↔API: list/C/E/V/Copy ↔ GET/POST/PUT · soft DELETE · LKP road-route · FileService
- T-DM-01 · T-BE-01..06 · T-BFF-01 · T-FE-01..07 · T-OUT-01 → TL

## UNCLEAR

- none

## Full paths

- solution: `specs/csdl-so-01/be/solution-discovery.md`
- design: `specs/csdl-so-01/ui/design.md`
- prior compact: `handoff/design-compact.md` · `po-compact.md` · `data_analy-compact.md`

## Next

| Role | Need |
|------|------|
| **TL** | task/csdl-so-01.md · T-* · gates |
| Dev | Schema_CsdlSo01 · typed DTO · alias page · Slideout + entries |
| QA | e2e queued `/agent-qa*` |

## Cấm (compact)

ERP.* · invent API · detail*/col1–3 only · Guid IdCode · merge Sổ TS · parent *Json · Step 4b/migration/e2e/build/start:std ở SA · Write MFE · re-scan demo
