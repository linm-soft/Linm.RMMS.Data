# handoff-compact — sa · csdl-so-03

| | |
|--|--|
| schemaVersion | `1` |
| role | `sa` |
| feature | `csdl-so-03` |
| title | CSDL Sổ 03 — Trực BĐGT + chốt + SC |
| packKind | `list` |
| changeScope | `new_page` |
| status | `done` |
| taskId | `task_7d37d683` |
| resource | `duty-incident-logs` |
| retireKeys | `duty-logs` · `checkpoint-duties` |
| formNo | `03` |
| IdCode | `SO-` |
| formPattern | **Kind D Slideout** 2col · entries `inline_grid` · **cấm** Full-page |
| Kind | **B** A–D+F+H · **D** Slideout Z1–Z3 |
| solution_confirm | **approve** (autoApprove ON) |
| domain | **Asset** · `api/v1/asset/csdl-records` |
| bff | proxy only · `web-bff/api/v1/asset/csdl-records` |
| entity | shell `CsdlCatalogRecordEntity` + typed `CsdlSo03Entity` · `rmms_csdl_so03` · widen `CsdlBookEntryEntity` · Schema_CsdlSo03 |
| sa_tz_gate | `tz_list_and_form` |
| sa_xco_gate | `xco_get_only` |
| sa_shared_table | `share_tenant` |
| contentHashPrior | `sha256:1e8b4b6d6149c1ff2f27010cbf0d6649af9408b05738f416cd58d8c7361fdd9d` |
| headerFingerprintPrior | `sha256:b5b6baa32c1a5ebbf3d8eb2ecaad922d90a291958347aa22ec8fa27096d93997` |
| skillVersion | `2026.08.25.01` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.08.31.2` |
| writtenAt | `2026-09-06T02:35:00.000Z` |

## Decisions

- changeScope=`new_page` · packKind=`list` · Kind B+D Slideout · typed T-SO-03 · **cấm** detail*/col1–3 · **cấm** `dutyKind`
- API **giữ** `api/v1/asset/csdl-records` · BFF proxy · **cấm ERP.*** · **cấm** invent infra/so-ts/file
- Persist: shell + **Schema_CsdlSo03** 1:1 + widen entries · **cấm** parent *Json
- Merge P1: migrate+soft-retire `duty-logs`+`checkpoint-duties` · **1** hub card · legacy QS redirect
- Q-STATUS draft/active/closed · Q-PROV keep_static · Q-ORG Text P1 · Q-SHIFT Text free
- Alias `/csdl-so-03` + hub · road-route SearchInput P1 · org **DEFER P2** · XLS **OUT** · map none
- Gates: tz_list_and_form · xco_get_only · share_tenant
- DOMAIN-MAP add `csdl-so-03`→Asset (T-DM-01)
- open questions: **none**

## Inventory (slim)

| id | label | controlHint | write |
|----|-------|-------------|-------|
| search | Tìm | SearchTextInput | filter |
| province/status | Tỉnh/TT | Dropdown | shell LOOKUP_STATIC |
| roadCode | Đường | SearchInput | shell + road-route |
| fromDate/toDate | Kỳ | Date | filter period · TZ |
| code | Mã | Text ro | shell SO- |
| bookNo/contractor | Số quyển/NT | Text | shell req |
| roadCode/roadName | Đường | SearchInput+display | shell req |
| kmFrom/kmTo | Km | Number | shell |
| periodStart/End | Kỳ sổ | Date | typed · TZ |
| notes | Ghi chú | Textarea | shell |
| entries.* | Dòng NK | Date/Text/Textarea | DutyDate·Shift·PersonName·Content·Handling·SignRemark |

## Screens / zones (ids only)

- S-LIST · S-FORM-C/E/V/Copy · S-ENTRIES · S-ACT-DELETE · S-HUB-ENTRY · S-SKIP-MAP
- mfeStdUrl=`http://localhost:9301/csdl-so-03`
- hub=`http://localhost:9301/so-ts/csdl-so-sach?resource=duty-incident-logs`

## API / tasks (ids only)

- FormMode↔API: list/C/E/V/Copy ↔ GET/POST/PUT · soft DELETE · LKP road-route
- T-DM-01 · T-BE-01..06 · T-BFF-01 · T-FE-01..07 · T-OUT-01 → TL

## UNCLEAR

- none

## Full paths

- solution: `specs/csdl-so-03/be/solution-discovery.md`
- design: `specs/csdl-so-03/ui/design.md`
- prior compact: `handoff/design-compact.md` · `po-compact.md` · `data_analy-compact.md`

## Next

| Role | Need |
|------|------|
| **TL** | task/csdl-so-03.md · T-* · gates · merge retire |
| Dev | Schema_CsdlSo03 · typed DTO · merge migrate · alias page · Slideout + entries |
| QA | e2e queued `/agent-qa*` |

## Cấm (compact)

ERP.* · invent API · detail*/col1–3 only · Guid IdCode · dutyKind · 2 resource song song · merge Sổ TS · parent *Json · Step 4b/migration/e2e/build/start:std ở SA · Write MFE · re-scan demo
