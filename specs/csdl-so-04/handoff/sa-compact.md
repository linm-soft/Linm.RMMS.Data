# handoff-compact — sa · csdl-so-04

| | |
|--|--|
| schemaVersion | `1` |
| role | `sa` |
| feature | `csdl-so-04` |
| title | CSDL Sổ 04 — Tổng hợp đếm xe |
| packKind | `list` |
| changeScope | `new_page` |
| status | `done` |
| taskId | `task_ae910ab6` |
| resource | `traffic-counts` |
| formNo | `04` |
| IdCode | `SO-` |
| formPattern | **Kind D Slideout** 2col · count matrix · **cấm** journal / Full-page |
| Kind | **B** A–D+F+H · **D** Slideout Z1–Z3 |
| solution_confirm | **approve** (autoApprove ON) |
| domain | **Asset** · `api/v1/asset/csdl-records` |
| bff | proxy only · `web-bff/api/v1/asset/csdl-records` |
| entity | shell `CsdlCatalogRecordEntity` + typed `CsdlSo04Entity` · `rmms_csdl_so04` · Schema_CsdlSo04 · **không** entries journal |
| sa_tz_gate | `tz_none` |
| sa_xco_gate | `xco_get_only` |
| sa_shared_table | `share_tenant` |
| contentHashPrior | `sha256:f4b9c168d339477350ba42a03f7ec00e774b38da0ecc6037de8950d9f25e944d` |
| headerFingerprintPrior | `sha256:202e875ac43d1dd97b8ac8f32d3528ac827776078cde980e7bb6ca9634aff7e2` |
| skillVersion | `2026.08.25.01` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.08.31.2` |
| writtenAt | `2026-09-06T05:30:00.000Z` |

## Decisions

- changeScope=`new_page` · packKind=`list` · Kind B+D Slideout · typed T-SO-04 · 1 row/trạm/quý · 16 class · **cấm** detail*/col1–3 · **cấm** TNGT
- API **giữ** `api/v1/asset/csdl-records` · BFF proxy · **cấm ERP.*** · **cấm** runtime `/api/v1/traffic-counts` · **cấm** invent infra/so-ts/file
- Persist: shell + **Schema_CsdlSo04** 1:1 · matrix trên typed · **cấm** parent *Json · **cấm** journal entries
- Unique hard **422** stationCode+year+quarter (+tenant) · totalCars **derived** sum(class*)
- Q-STATUS draft/active/closed · Q-PROV keep_static · Q-ORG Text P1 · countMethod manual|auto · station SearchInput P1
- Alias `/csdl-so-04` + hub · road-route + COUNT_STATION · org **DEFER P2** · XLS **OUT** · map none · split so-05
- Gates: tz_none · xco_get_only · share_tenant
- DOMAIN-MAP add `csdl-so-04`→Asset (T-DM-01)
- open questions: **none**

## Inventory (slim)

| id | label | controlHint | write |
|----|-------|-------------|-------|
| search | Tìm | SearchTextInput | filter |
| province/status | Tỉnh/TT | Dropdown | shell LOOKUP_STATIC |
| roadCode | Đường | SearchInput | shell + road-route |
| stationCode | Trạm | SearchInput | typed + COUNT_STATION |
| year/quarter/countMethod | Năm/Quý/PP | Integer/Dropdown | filter+typed |
| code | Mã | Text ro | shell SO- |
| bookNo/contractor | Số quyển/NT | Text | shell req |
| station*/road* | Trạm/Đường | SearchInput+display | typed/shell req |
| kmFrom/kmTo | Km | Number | shell |
| notes | Ghi chú | Textarea | shell |
| class01…16 | Hạng xe nn | Number | typed req |
| totalCars | Tổng ôtô | Number ro | typed derived |

## Screens / zones (ids only)

- S-LIST · S-FORM-C/E/V/Copy · S-COUNT-MATRIX · S-ACT-DELETE · S-HUB-ENTRY · S-SKIP-MAP
- mfeStdUrl=`http://localhost:9301/csdl-so-04`
- hub=`http://localhost:9301/so-ts/csdl-so-sach?resource=traffic-counts`

## API / tasks (ids only)

- FormMode↔API: list/C/E/V/Copy ↔ GET/POST/PUT · soft DELETE · LKP road-route + COUNT_STATION
- T-DM-01 · T-BE-01..06 · T-BFF-01 · T-FE-01..07 · T-OUT-01 → TL

## UNCLEAR

- none (class Excel overlay pending cite · keys ổn định)

## Full paths

- solution: `specs/csdl-so-04/be/solution-discovery.md`
- design: `specs/csdl-so-04/ui/design.md`
- prior compact: `handoff/design-compact.md` · `po-compact.md` · `data_analy-compact.md`

## Next

| Role | Need |
|------|------|
| **TL** | task/csdl-so-04.md · T-* · gates · unique · Schema_CsdlSo04 |
| Dev | Schema_CsdlSo04 · typed DTO · alias page · Slideout + matrix · unique 422 |
| QA | e2e queued `/agent-qa*` |

## Cấm (compact)

ERP.* · invent API · detail*/col1–3 only · Guid IdCode · TNGT/AccidentSummary · journal entries · merge Sổ TS · parent *Json · runtime `/api/v1/traffic-counts` · Step 4b/migration/e2e/build/start:std ở SA · Write MFE · re-scan demo · CRUD rpt-dem-xe
