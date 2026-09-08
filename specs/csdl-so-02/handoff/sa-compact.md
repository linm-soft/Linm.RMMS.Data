# handoff-compact — sa · csdl-so-02

| | |
|--|--|
| schemaVersion | `1` |
| role | `sa` |
| feature | `csdl-so-02` |
| title | CSDL Sổ 02 — Nhật ký tuần đường |
| packKind | `list` |
| changeScope | `new_page` |
| status | `done` |
| taskId | `task_c4f160af` |
| resource | `patrol-logs` |
| formNo | `02` |
| IdCode | `SO-` |
| formPattern | **Kind D Slideout** 2col · entries `inline_grid` · **cấm** Full-page |
| Kind | **B** A–D+F+H · **D** Slideout Z1–Z3 |
| solution_confirm | **approve** (autoApprove ON) |
| domain | **Asset** · `api/v1/asset/csdl-records` |
| bff | proxy only · `web-bff/api/v1/asset/csdl-records` |
| entity | shell `CsdlCatalogRecordEntity` + typed `CsdlSo02Entity` · `rmms_csdl_so02` · widen `CsdlBookEntryEntity` · Schema_CsdlSo02 |
| sa_tz_gate | `tz_list_and_form` |
| sa_xco_gate | `xco_get_only` |
| sa_shared_table | `share_tenant` |
| contentHashPrior | `sha256:70538d9c9588d335aa43fd5a1fe28433d1138960d5954c5a7ef4cff33a5bd1c3` |
| headerFingerprintPrior | `sha256:5da56778e38ecc53807d424082520372c7bbed355257bdacfa0457dba0036e3c` |
| skillVersion | `2026.08.25.01` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.08.31.2` |
| writtenAt | `2026-09-06T00:16:00.000Z` |

## Decisions

- changeScope=`new_page` · packKind=`list` · Kind B+D Slideout · typed T-SO-02 · **cấm** detail*/col1–3 only
- API **giữ** `api/v1/asset/csdl-records` · BFF proxy · **cấm ERP.*** · **cấm** invent infra/so-ts
- Persist: shell + **Schema_CsdlSo02** 1:1 + widen entries · FileService sketch/media max 10 · **cấm** parent *Json
- Q-FORMNO label Sổ 02 · Q-STATUS tot/tb/kem/hong · Q-PROV keep_static · Q-CONTRACTOR Text P1 · Q-SKETCH optional
- Alias `/csdl-so-02` + hub · road-route SearchInput P1 · org/partner **DEFER P2** · XLS **OUT** · map none
- Gates: tz_list_and_form · xco_get_only · share_tenant
- DOMAIN-MAP add `csdl-so-02`→Asset (T-DM-01)
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
| patrolStaff | NV tuần | Text | typed req |
| periodStart/End | Kỳ sổ | Date | typed · TZ |
| manageUnit/notes | ĐV/GC | Text/Textarea | shell |
| entries.* | Dòng NK | DateTime/Text/Textarea/File | entry widen · FileService |

## Screens / zones (ids only)

- S-LIST · S-FORM-C/E/V/Copy · S-ENTRIES · S-ACT-DELETE · S-HUB-ENTRY · S-SKIP-MAP
- mfeStdUrl=`http://localhost:9301/csdl-so-02`
- hub=`http://localhost:9301/so-ts/csdl-so-sach?resource=patrol-logs`

## API / tasks (ids only)

- FormMode↔API: list/C/E/V/Copy ↔ GET/POST/PUT · soft DELETE · LKP road-route · FileService
- T-DM-01 · T-BE-01..06 · T-BFF-01 · T-FE-01..07 · T-OUT-01 → TL

## UNCLEAR

- none

## Full paths

- solution: `specs/csdl-so-02/be/solution-discovery.md`
- design: `specs/csdl-so-02/ui/design.md`
- prior compact: `handoff/design-compact.md` · `po-compact.md` · `data_analy-compact.md`

## Next

| Role | Need |
|------|------|
| **TL** | task/csdl-so-02.md · T-* · gates |
| Dev | Schema_CsdlSo02 · typed DTO · alias page · Slideout + entries |
| QA | e2e queued `/agent-qa*` |

## Cấm (compact)

ERP.* · invent API · detail*/col1–3 only · Guid IdCode · merge Sổ TS · parent *Json · Step 4b/migration/e2e/build/start:std ở SA · Write MFE · re-scan demo
