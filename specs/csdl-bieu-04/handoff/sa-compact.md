# handoff-compact — sa · csdl-bieu-04

| | |
|--|--|
| schemaVersion | `1` |
| role | `sa` |
| feature | `csdl-bieu-04` |
| title | CSDL Biểu 04 — Cống các loại |
| packKind | `list` |
| changeScope | `new_page` |
| status | `done` |
| taskId | `task_c8366fab` |
| resource | `culverts` |
| formNo | `04` |
| columns | `17` |
| IdCode | `CG-` |
| peerSoTs | `so-ts-culvert-x` |
| formPattern | **Kind D Slideout** 2col · **cấm** Full-page |
| Kind | **B** A–D+F · **D** Slideout Z1–Z3 |
| solution_confirm | **approve** (autoApprove ON) |
| domain | **Asset** · `api/v1/asset/csdl-records` |
| bff | proxy only · `web-bff/api/v1/asset/csdl-records` |
| entity | shell `CsdlCatalogRecordEntity` + typed `CsdlBieu4Entity` · `rmms_csdl_bieu4` · Schema_CsdlBieu4 |
| sa_tz_gate | `tz_na` |
| sa_xco_gate | `xco_get_only` |
| sa_shared_table | `share_tenant` |
| contentHashPrior | `sha256:7498ad6644d0e599bc40afb7589db5335c18adb4b92f1573de3c1fae2e17d3d6` |
| headerFingerprintPrior | `sha256:155df2db0952d6e139fbedac748878ecd5c607d506fdf5fccc172f5b0f937024` |
| skillVersion | `2026.08.24.01` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.08.31.2` |
| writtenAt | `2026-09-05T06:20:00.000Z` |

## Decisions

- changeScope=`new_page` · packKind=`list` · Kind B+D Slideout · typed **17 cột** · **cấm** detail* only
- API **giữ** `api/v1/asset/csdl-records` · BFF proxy · **cấm ERP.*** · **cấm** invent infra/so-ts
- Persist: shell + **Schema_CsdlBieu4** 1:1 · **cấm** parent *Json · migration Dev/4b only
- Q-GPS **four_xy** gpsCulvertX/Y · gpsRoadX/Y decimal(18,6) · raw XY · **cấm** latlng collapse
- Q-SHAPE Dropdown hộp/tròn · thân/đầu Text · Q-LOAD **free_text** P1
- Q-ROUTE **alias_now** `/csdl-bieu-04` + hub · Q-PROV **keep_static** P1
- road-route SearchInput P1 · org SearchInput **DEFER P2** · XLS/skip-bridge **OUT**
- Peer Sổ TS deep-link · **cấm** merge form · map none
- Gates: tz_na · xco_get_only · share_tenant
- DOMAIN-MAP add `csdl-bieu-04`→Asset (T-DM-01)
- open questions: **none**

## Inventory (slim)

| id | label | controlHint | write |
|----|-------|-------------|-------|
| search | Tìm | SearchTextInput | filter |
| province/status | Tỉnh/TT | Dropdown | shell LOOKUP_STATIC |
| roadCode | Đường | SearchInput | shell + road-route |
| kmPoint | Km điểm | Number | shell |
| code | Mã | Text ro | shell CG- |
| gps* ×4 | GPS cống/đường | Number | typed four_xy |
| apertureM | Khẩu độ | Number | typed * |
| shape | Hình | Dropdown | typed hộp/tròn |
| bodyMaterial | Thân | Dropdown/Text | typed |
| inlet/outlet | Đầu TL/HL | Text | typed |
| lengthM | Cdài | Number | typed * |
| loadClass | Tải | Text | typed free_text |
| builtYear | Năm | Number | typed |
| manageUnit | ĐV QL | Text | shell P2 SearchInput |
| notes/side/status | … | Textarea/Dropdown | shell |

## Screens / zones (ids only)

- S-LIST · S-FORM-C/E/V/Copy · S-ACT-DELETE · S-HUB-ENTRY · S-PEER-SOTS · S-SKIP-MAP
- mfeStdUrl=`http://localhost:9301/csdl-bieu-04`
- hub=`http://localhost:9301/so-ts/csdl-so-sach?resource=culverts`

## API / tasks (ids only)

- FormMode↔API: list/C/E/V/Copy ↔ GET/POST/PUT · soft DELETE · LKP road-route
- T-DM-01 · T-BE-01..05 · T-BFF-01 · T-FE-01..06 · T-OUT-01 → TL

## UNCLEAR

- none

## Full paths

- solution: `specs/csdl-bieu-04/be/solution-discovery.md`
- design: `specs/csdl-bieu-04/ui/design.md`
- prior compact: `handoff/design-compact.md` · `po-compact.md` · `data_analy-compact.md`

## Next

| Role | Need |
|------|------|
| **TL** | task/csdl-bieu-04.md · T-* · gates |
| Dev | Schema_CsdlBieu4 · typed DTO · alias page · Slideout 17 |
| QA | e2e queued `/agent-qa*` |

## Cấm (compact)

ERP.* · invent API · detail* only · Guid IdCode · merge Sổ TS · parent *Json · Step 4b/migration/e2e/build/start:std ở SA · Write MFE · re-scan demo
