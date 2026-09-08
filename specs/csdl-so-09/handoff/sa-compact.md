# handoff-compact — sa · csdl-so-09

| | |
|--|--|
| schemaVersion | `1` |
| role | `sa` |
| feature | `csdl-so-09` |
| title | CSDL Sổ 09 — QL vận hành ITS/ETC/KSTTX |
| packKind | `list` |
| changeScope | `new_page` |
| status | `done` |
| taskId | `task_05d75fc7` |
| resource | `its-ops-logs` |
| formNo | `09` |
| IdCode | `SO-` |
| formPattern | **Kind D Slideout** 2col · entries `inline_grid` 9 cột · **cấm** Full-page |
| Kind | **B** A–D+F+H · **D** Slideout Z1–Z3 |
| solution_confirm | **approve** (autoApprove ON) |
| domain | **Asset** · `api/v1/asset/csdl-records` |
| bff | proxy only · `web-bff/api/v1/asset/csdl-records` |
| entity | shell `CsdlCatalogRecordEntity` + typed `CsdlSo09Entity` · `rmms_csdl_so09` · widen `CsdlBookEntryEntity` · Schema_CsdlSo09 |
| sa_tz_gate | `tz_list_and_form` |
| sa_xco_gate | `xco_get_only` |
| sa_shared_table | `share_tenant` |
| contentHashPrior | `sha256:1cbd0cd26f977a518c29457acddd7c893fa56fe9bd750ac1ad6a15b0976d03dc` |
| headerFingerprintPrior | `sha256:c00fdbdda898129b6408c35f9fb57cd2cc918356208b1067310d40c8f3cbefd9` |
| skillVersion | `2026.08.25.01` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.08.31.2` |
| writtenAt | `2026-09-05T23:50:00.000Z` |

## Decisions

- changeScope=`new_page` · packKind=`list` · Kind B+D Slideout · typed T-SO-09 · **cấm** detail*/col1–3 only · **≠** Biểu 9
- API **giữ** `api/v1/asset/csdl-records` · BFF proxy · **cấm ERP.*** · **cấm** invent infra/so-ts
- Persist: shell + **Schema_CsdlSo09** 1:1 (Contractor·Period·LinkBieu14Id) + widen entries 9 cột ca trực · media **N/A** · **cấm** parent *Json
- Q-SHIFT ca1/2/3 · Q-SYS-STATUS tot/tb/kem/hong · Q-LINK14 optional SearchInput its-systems · Q-PROV keep_static · Q-ORG Text P1 · Q-SIGN Text P1
- Alias `/csdl-so-09` + hub · road-route SearchInput P1 · org **DEFER P2** · XLS **OUT** · map none · seed `its-ops-logs`
- Gates: tz_list_and_form · xco_get_only · share_tenant
- DOMAIN-MAP add `csdl-so-09`→Asset (T-DM-01)
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
| roadCode/roadName | Đường | SearchInput+display | shell req |
| kmFrom/kmTo | Km | Number | shell · kmFrom req |
| periodStart/End | Kỳ sổ | Date | typed · TZ |
| manageUnit/notes | ĐV QL/Ghi chú | Text/Textarea | shell |
| linkBieu14Id | Biểu 14 | SearchInput | typed optional · its-systems |
| entries.* | Ca trực | DateTime/Dropdown/Text/Textarea | entry widen · 9 cột |

## Screens / zones (ids only)

- S-LIST · S-FORM-C/E/V/Copy · S-ENTRIES · S-LINK14 · S-ACT-DELETE · S-HUB-ENTRY · S-SKIP-MAP
- mfeStdUrl=`http://localhost:9301/csdl-so-09`
- hub=`http://localhost:9301/so-ts/csdl-so-sach?resource=its-ops-logs`
- peer=`http://localhost:9301/csdl-bieu-14`

## API / tasks (ids only)

- FormMode↔API: list/C/E/V/Copy ↔ GET/POST/PUT · soft DELETE · LKP road-route · LKP its-systems
- T-DM-01 · T-BE-01..05 · T-BFF-01 · T-FE-01..07 · T-OUT-01 → TL

## UNCLEAR

- none

## Full paths

- solution: `specs/csdl-so-09/be/solution-discovery.md`
- design: `specs/csdl-so-09/ui/design.md`
- prior compact: `handoff/design-compact.md` · `po-compact.md` · `data_analy-compact.md`

## Next

| Role | Need |
|------|------|
| **TL** | task/csdl-so-09.md · T-* · gates |
| Dev | Schema_CsdlSo09 · typed DTO · seed · alias page · Slideout + entries 9 cột |
| QA | e2e queued `/agent-qa*` |

## Cấm (compact)

ERP.* · invent API · detail*/col1–3 only · Guid IdCode · merge Biểu 14/Sổ TS · parent *Json · invent media · Step 4b/migration/e2e/build/start:std ở SA · Write MFE · re-scan demo
