# handoff-compact — sa · csdl-bieu-02

| | |
|--|--|
| schemaVersion | `1` |
| role | `sa` |
| feature | `csdl-bieu-02` |
| title | CSDL Biểu 02 — Thống kê cầu |
| packKind | `list` |
| changeScope | `new_page` |
| status | `done` |
| taskId | `task_547af74d` |
| resource | `bridges` |
| formNo | `02` |
| columns | `48` |
| IdCode | `BR-` |
| peerSoTs | none (—) · Sổ 6 / passport deep-link only |
| formPattern | **Kind D Slideout** 2col sectioned · **cấm** Full-page |
| Kind | **B** A–D+F · **D** Slideout Z1–Z3 |
| solution_confirm | **approve** (autoApprove ON) |
| domain | **Asset** · `api/v1/asset/csdl-records` |
| bff | proxy only · `web-bff/api/v1/asset/csdl-records` |
| entity | shell `CsdlCatalogRecordEntity` + typed `CsdlBieu2Entity` · `rmms_csdl_bieu2` · Schema_CsdlBieu2 |
| sa_tz_gate | `tz_na` |
| sa_xco_gate | `xco_get_only` |
| sa_shared_table | `share_tenant` |
| contentHashPrior | `sha256:bd73974e607f886dd38736015cb5a6a3fb82aff9d6a63328963ceb5c4be436a2` |
| headerFingerprintPrior | `sha256:34e1fcb051f6010fbe70ebdffab71df3d6f441a373d3be0249dd601e596d5591` |
| skillVersion | `2026.08.24.01` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.08.31.2` |
| writtenAt | `2026-09-05T08:25:00.000Z` |

## Decisions

- changeScope=`new_page` · packKind=`list` · Kind B+D Slideout · typed **48 cột** · **cấm** detail* only
- API **giữ** `api/v1/asset/csdl-records` · BFF proxy · **cấm ERP.*** · **cấm** invent infra · **cấm** passport CRUD
- Persist: shell + **Schema_CsdlBieu2** 1:1 · **cấm** parent *Json · migration Dev/4b only
- Q-GPS **six_numbers** · Q-LOAD **text** · Q-LEGACY **keep_hidden** · Q-SECTION **sectioned**
- Q-ROUTE **alias_now** `/csdl-bieu-02` + hub · Q-PROV **keep_static** P1
- road-route SearchInput P1 · org **DEFER P2** · XLS **OUT**
- Peer Sổ 6/passport deep-link · **cấm** merge · map none
- Gates: tz_na · xco_get_only · share_tenant
- DOMAIN-MAP add `csdl-bieu-02`→Asset (T-DM-01) — slug thiếu
- open questions: **none**

## Inventory (slim)

| id | label | controlHint | write |
|----|-------|-------------|-------|
| search | Tìm | SearchTextInput | filter |
| province/status/beamType | Tỉnh/TT/dầm | Dropdown | shell LOOKUP_STATIC |
| roadCode | Đường | SearchInput | shell + road-route |
| kmFrom/kmTo | Km | Number | shell |
| code | Mã | Text ro | shell BR- |
| bridgeName | Tên cầu | Text | typed |
| gps* ×6 | GPS 3 điểm | Number | typed six_numbers |
| span*/beam* | Dầm | Number/Text/Dropdown | typed |
| abutment*/pier* | Phần dưới | Dropdown/Text | typed |
| design/actualLoad | Tải | Text | typed Q-LOAD |
| bearing*/railing*/drain*/PQ | Gối/lan can | Number/Text/Checkbox | typed |
| lengthM/carriageWidthM | Cdài/B xe | Number | typed |
| manageUnit | ĐV QL | Text | shell P2 SearchInput |
| legacyCol64/69 | Legacy | Text hidden | typed keep_hidden |

## Screens / zones (ids only)

- S-LIST · S-FORM-C/E/V/Copy · S-ACT-DELETE · S-HUB-ENTRY · S-PEER-SO6 · S-SKIP-MAP
- mfeStdUrl=`http://localhost:9301/csdl-bieu-02`
- hub=`http://localhost:9301/so-ts/csdl-so-sach?resource=bridges`

## API / tasks (ids only)

- FormMode↔API: list/C/E/V/Copy ↔ GET/POST/PUT · soft DELETE · LKP road-route
- T-DM-01 · T-BE-01..05 · T-BFF-01 · T-FE-01..06 · T-OUT-01 → TL

## UNCLEAR

- none

## Full paths

- solution: `specs/csdl-bieu-02/be/solution-discovery.md`
- design: `specs/csdl-bieu-02/ui/design.md`
- prior compact: `handoff/design-compact.md` · `po-compact.md` · `data_analy-compact.md`

## Next

| Role | Need |
|------|------|
| **TL** | task/csdl-bieu-02.md · T-* · gates |
| Dev | Schema_CsdlBieu2 · typed DTO · alias page · Slideout 48 |
| QA | e2e queued `/agent-qa*` |

## Cấm (compact)

ERP.* · invent API · detail* only · Guid IdCode · merge passport/Sổ 6 · passport CRUD · parent *Json · Step 4b/migration/e2e/build/start:std ở SA · Write MFE · re-scan demo
