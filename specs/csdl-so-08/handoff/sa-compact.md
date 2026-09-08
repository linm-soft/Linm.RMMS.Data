# handoff-compact — sa · csdl-so-08

| | |
|--|--|
| schemaVersion | `1` |
| role | `sa` |
| feature | `csdl-so-08` |
| title | CSDL Sổ 08 — Kết quả BDTX |
| packKind | `list` |
| changeScope | `new_page` |
| status | `done` |
| taskId | `task_cb03edd5` |
| resource | `maintenance-work-logs` |
| formNo | `08` |
| IdCode | `SO-` |
| formPattern | **Kind D Slideout** 2col · entries `inline_grid` · **cấm** Full-page |
| Kind | **B** A–D+F+H · **D** Slideout Z1–Z3 |
| solution_confirm | **approve** (autoApprove ON) |
| domain | **Asset** · `api/v1/asset/csdl-records` |
| bff | proxy only · `web-bff/api/v1/asset/csdl-records` |
| entity | shell `CsdlCatalogRecordEntity` + typed `CsdlSo08Entity` · `rmms_csdl_so08` · widen `CsdlBookEntryEntity` · Schema_CsdlSo08 |
| sa_tz_gate | `tz_list_and_form` |
| sa_xco_gate | `xco_get_only` |
| sa_shared_table | `share_tenant` |
| contentHashPrior | `sha256:46cd2b05ce4a396d08fa326183d9a17603afc381fbd00669155c13703a4e3146` |
| headerFingerprintPrior | `sha256:e6fd49c647b1f4435fe5110097964fa15b4eeba116926d885297b81d2e373a02` |
| skillVersion | `2026.08.25.01` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.08.31.2` |
| writtenAt | `2026-09-06T01:47:00.000Z` |

## Decisions

- changeScope=`new_page` · packKind=`list` · Kind B+D Slideout · typed T-SO-08 · **cấm** detail*/col1–3 only · **cấm** kmAt
- API **giữ** `api/v1/asset/csdl-records` · BFF proxy · **cấm ERP.*** · **cấm** invent infra/so-ts
- Persist: shell + **Schema_CsdlSo08** 1:1 + widen entries (WorkItem·Km·Solution·MainResult·Note) · media **N/A** · **cấm** parent *Json
- Q-VP-KHU Text P1 · Q-STATUS tot/tb/kem/hong · Q-PROV keep_static · Q-ORG Text P1 · Q-ENTRY-KM cặp
- Alias `/csdl-so-08` + hub · road-route SearchInput P1 · org **DEFER P2** · XLS **OUT** · map none
- Gates: tz_list_and_form · xco_get_only · share_tenant
- DOMAIN-MAP add `csdl-so-08`→Asset (T-DM-01)
- open questions: **none**

## Inventory (slim)

| id | label | controlHint | write |
|----|-------|-------------|-------|
| search | Tìm | SearchTextInput | filter |
| province/status | Tỉnh/TT | Dropdown | shell LOOKUP_STATIC |
| roadCode | Đường | SearchInput | shell + road-route |
| fromDate/toDate | Kỳ | Date | filter period · TZ |
| code | Mã | Text ro | shell SO- |
| bookNo/contractor | Số quyển/Thầu | Text | shell / typed req |
| officeUnit/zoneUnit | VP/Khu | Text | typed req · P1 |
| roadCode/roadName | Đường | SearchInput+display | shell req |
| kmFrom/kmTo | Km | Number | shell · kmFrom req |
| periodStart/End | Kỳ sổ | Date | typed · TZ |
| manageUnit/notes | ĐV QL/Ghi chú | Text/Textarea | shell |
| entries.* | Dòng BDTX | Text/Number/Textarea | entry widen · 5 cột |

## Screens / zones (ids only)

- S-LIST · S-FORM-C/E/V/Copy · S-ENTRIES · S-ACT-DELETE · S-HUB-ENTRY · S-SKIP-MAP
- mfeStdUrl=`http://localhost:9301/csdl-so-08`
- hub=`http://localhost:9301/so-ts/csdl-so-sach?resource=maintenance-work-logs`

## API / tasks (ids only)

- FormMode↔API: list/C/E/V/Copy ↔ GET/POST/PUT · soft DELETE · LKP road-route
- T-DM-01 · T-BE-01..05 · T-BFF-01 · T-FE-01..07 · T-OUT-01 → TL

## UNCLEAR

- none

## Full paths

- solution: `specs/csdl-so-08/be/solution-discovery.md`
- design: `specs/csdl-so-08/ui/design.md`
- prior compact: `handoff/design-compact.md` · `po-compact.md` · `data_analy-compact.md`

## Next

| Role | Need |
|------|------|
| **TL** | task/csdl-so-08.md · T-* · gates |
| Dev | Schema_CsdlSo08 · typed DTO · alias page · Slideout + entries |
| QA | e2e queued `/agent-qa*` |

## Cấm (compact)

ERP.* · invent API · detail*/col1–3 only · Guid IdCode · merge Sổ TS · parent *Json · invent media · Step 4b/migration/e2e/build/start:std ở SA · Write MFE · re-scan demo
