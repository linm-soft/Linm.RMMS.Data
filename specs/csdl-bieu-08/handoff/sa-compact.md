# handoff-compact — sa · csdl-bieu-08

| | |
|--|--|
| schemaVersion | `1` |
| role | `sa` |
| feature | `csdl-bieu-08` |
| title | CSDL Biểu 08 — Hệ thống ATGT |
| packKind | `list` |
| changeScope | `new_page` |
| status | `done` |
| taskId | `task_53a8d473` |
| resource | `traffic-safety` |
| formNo | `08` |
| columns | `45` · **11 nhóm** |
| IdCode | `AT-` |
| peerSoTs | ATGT types (deep-link) |
| formPattern | **Kind D Slideout** 2col · shared+**1 child** · **cấm** Full-page |
| Kind | **B** A–D+F · **D** Slideout Z1–Z3 |
| solution_confirm | **approve** (autoApprove ON) |
| domain | **Asset** · `api/v1/asset/csdl-records` |
| bff | proxy only · `web-bff/api/v1/asset/csdl-records` |
| entity | shell + `CsdlBieu8Entity` · `rmms_csdl_bieu8` + **11 children** · Schema_CsdlBieu8 |
| sa_tz_gate | `tz_na` |
| sa_xco_gate | `xco_get_only` |
| sa_shared_table | `share_tenant` |
| contentHashPrior | `sha256:f972c82727726d256754d076435f9ef97c993b4f9844dc79e50b6415fcaf54be` |
| headerFingerprintPrior | `sha256:ba8b8db4f7637ee32cfd4a882b6abdc774c538f6c9812c3ecd1d13f6151cdd6f` |
| skillVersion | `2026.08.24.01` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.08.31.2` |
| writtenAt | `2026-09-05T10:25:00.000Z` |

## Decisions

- changeScope=`new_page` · packKind=`list` · Kind B+D Slideout · typed **45/11** · shared+1 child · **cấm** detail* only · **cấm** wide 45
- API **giữ** `api/v1/asset/csdl-records` · BFF proxy · **cấm ERP.*** · **cấm** invent infra/so-ts
- Persist: shell + **Schema_CsdlBieu8** parent + **child_tables** (11) · **cấm** parent *Json · migration Dev/4b only
- Q-CHILD **child_tables** · Q-TYPE-UX **confirm** clear · Q-LIST-COLS **subset_by_type** · Q-MARKER-KIND **lookup_static**
- Q-ROUTE **alias_now** `/csdl-bieu-08` + hub · Q-PROV **keep_static** P1 · Q-REN-LABEL **with_typed** (T-REN-01)
- road-route SearchInput P1 · org **DEFER P2** · XLS **OUT**
- Peer ATGT deep-link · **cấm** merge · **≠** road-assets · map none
- Gates: tz_na · xco_get_only · share_tenant
- DOMAIN-MAP add `csdl-bieu-08`→Asset (T-DM-01)
- open questions: **none**

## Inventory (slim)

| id | label | controlHint | write |
|----|-------|-------------|-------|
| search | Tìm | SearchTextInput | filter |
| province/status/side/assetType | Tỉnh/TT/VT/Loại | Dropdown | shell+parent LOOKUP · `?type=` |
| roadCode | Đường | SearchInput | shell + road-route |
| kmFrom/kmTo | Km | Number | shell |
| code | Mã | Text ro | shell AT- |
| sign*/marker*/median*/… | Child 11 | Text/Number/Dropdown | **1** child table |
| builtYear/manageUnit/notes/status | … | Number/Text/Textarea/Dropdown | parent / shell P2 |

## Screens / zones (ids only)

- S-LIST · S-FORM-C/E/V/Copy · S-ACT-DELETE · S-HUB-ENTRY · S-PEER-SOTS · S-SKIP-MAP
- mfeStdUrl=`http://localhost:9301/csdl-bieu-08`
- hub=`http://localhost:9301/so-ts/csdl-so-sach?resource=traffic-safety`

## API / tasks (ids only)

- FormMode↔API: list/C/E/V/Copy ↔ GET/POST/PUT · soft DELETE · LKP road-route · optional `type=`
- T-DM-01 · T-REN-01 · T-BE-01..05 · T-BFF-01 · T-FE-01..06 · T-OUT-01/02 → TL

## UNCLEAR

- none

## Full paths

- solution: `specs/csdl-bieu-08/be/solution-discovery.md`
- design: `specs/csdl-bieu-08/ui/design.md`
- prior compact: `handoff/design-compact.md` · `po-compact.md` · `data_analy-compact.md`

## Next

| Role | Need |
|------|------|
| **TL** | task/csdl-bieu-08.md · T-* · gates |
| Dev | Schema_CsdlBieu8 · parent+11 children · alias page · Slideout shared+1 child |
| QA | e2e queued `/agent-qa*` |

## Cấm (compact)

ERP.* · invent API · detail* only · wide 45 · Guid IdCode · merge Sổ TS · parent *Json · Step 4b/migration/e2e/build/start:std ở SA · Write MFE · re-scan demo
