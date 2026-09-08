# handoff-compact — sa · csdl-so-07

| | |
|--|--|
| schemaVersion | `1` |
| role | `sa` |
| feature | `csdl-so-07` |
| title | CSDL Sổ 07 — HL + GPTC + Dự án |
| packKind | `list` |
| changeScope | `new_page` |
| status | `done` |
| taskId | `task_451a2571` |
| resource | `row-violations` |
| formNo | `07` |
| IdCode | `SO-` |
| formPattern | **Kind D Slideout** 2col · Tab A/B `inline_grid` **add/remove** · **cấm** Full-page / flatten |
| Kind | **B** A–D+F+H · **D** Slideout Z1–Z3 |
| solution_confirm | **approve** (autoApprove ON) |
| domain | **Asset** · `api/v1/asset/csdl-records` |
| bff | proxy only · `web-bff/api/v1/asset/csdl-records` |
| entity | shell + typed `CsdlSo07Entity` · `rmms_csdl_so07` + VP/GP children · Schema_CsdlSo07 |
| file | none (no photoIds this pack) |
| sa_tz_gate | `tz_list_and_form` |
| sa_xco_gate | `xco_get_only` |
| sa_shared_table | `share_tenant` |
| contentHashPrior | `sha256:b928feb3e0d7900398812630e25afa43bfcbf4971633a9c1184c55ea2912ef69` |
| headerFingerprintPrior | `sha256:a923102afa38664e58effeb2b0dccfae12b942d4a3a6fb3c1cb8355df00aa531` |
| skillVersion | `2026.08.25.01` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.08.31.2` |
| writtenAt | `2026-09-06T04:25:00.000Z` |

## Decisions

- changeScope=`new_page` · packKind=`list` · Kind B+D Slideout · typed T-SO-07 · **2 tab** nested · **cấm** detail*/col1–3 · **cấm** flatten
- API **giữ** `api/v1/asset/csdl-records` · BFF proxy · **cấm ERP.*** · **cấm** runtime `/row-violations` · `/construction-permits`
- Persist: shell + **Schema_CsdlSo07** 1:1 + `rmms_csdl_so07_violations` / `_permits` · replace-all arrays · **cấm** parent *Json · deprecate book_entries write
- status sổ draft|active|closed · VP open|processing|resolved|dismissed · QLDA Text optional · permitDays Integer · org Text P1 · org DEFER P2
- Alias `/csdl-so-07` + hub · road-route SearchInput · peer report drill READY · **cấm** merge · XLS OUT · map none
- Gates: tz_list_and_form · xco_get_only · share_tenant
- DOMAIN-MAP add `csdl-so-07`→Asset (T-DM-01) · open Q: **none**

## Inventory (slim)

| id | label | controlHint | write |
|----|-------|-------------|-------|
| search | Tìm | SearchTextInput | filter |
| province/status | Tỉnh/TT sổ | Dropdown | shell LOOKUP_STATIC |
| roadCode | Đường | SearchInput | shell + LKP |
| fromDate/toDate | Ngày | Date | filter UpdatedAt · TZ |
| code | Mã | Text ro | shell SO- |
| contractor/manageUnit | ĐV | Text | typed req · org P2 |
| road*/km* | Đường/Km | SearchInput+Number | shell/typed req |
| notes | Ghi chú | Textarea | shell |
| violations.* | Tab A VP | Date/Number/Text/Dropdown/Textarea | child VP · add/remove |
| permits.* | Tab B GPTC+QLDA | Text/Integer/Date/Textarea | child GP · projectMgmtUnit |

## Screens / zones (ids only)

- S-LIST · S-FORM-C/E/V/Copy · S-TAB-A · S-TAB-B · S-ACT-DELETE · S-HUB-ENTRY · S-SKIP-MAP
- mfeStdUrl=`http://localhost:9301/csdl-so-07`
- hub=`http://localhost:9301/so-ts/csdl-so-sach?resource=row-violations`

## API / tasks (ids only)

- FormMode↔API: list/C/E/V/Copy ↔ GET/POST/PUT · soft DELETE · LKP road
- T-DM-01 · T-BE-01..06 · T-BFF-01 · T-FE-01..07 · T-OUT-01 → TL

## UNCLEAR

- none

## Full paths

- solution: `specs/csdl-so-07/be/solution-discovery.md`
- design: `specs/csdl-so-07/ui/design.md`
- prior compact: `handoff/design-compact.md` · `po-compact.md` · `data_analy-compact.md`
- STATUS: `specs/csdl-so-07/STATUS.md`

## Cấm (compact)

Demo/LS SSOT · ERP.* · Guid IdCode · form 3 ô/col1–3 only · flatten tabs · invent map · runtime row-violations/construction-permits path · Write MFE · yarn build/e2e/start:std · Step 4b @ SA · re-scan demo
