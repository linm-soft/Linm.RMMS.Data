# handoff-compact — sa · csdl-bieu-06

| | |
|--|--|
| schemaVersion | `1` |
| role | `sa` |
| feature | `csdl-bieu-06` |
| title | CSDL Biểu 06 — Hầm chui DS + hộp KT |
| packKind | `list` |
| changeScope | `new_page` |
| status | `done` |
| taskId | `task_789a57e3` |
| resource | `underpasses` |
| formNo | `06` |
| columns | `19` |
| IdCode | `HC-` |
| peerSoTs | `so-ts-underpass` |
| formPattern | **Kind D Slideout** 2col · **cấm** Full-page |
| Kind | **B** A–D+F · **D** Slideout Z1–Z3 |
| solution_confirm | **approve** (autoApprove ON) |
| domain | **Asset** · `api/v1/asset/csdl-records` |
| bff | proxy only · `web-bff/api/v1/asset/csdl-records` |
| entity | shell `CsdlCatalogRecordEntity` + typed `CsdlBieu6Entity` · `rmms_csdl_bieu6` · Schema_CsdlBieu6 |
| sa_tz_gate | `tz_na` |
| sa_xco_gate | `xco_get_only` |
| sa_shared_table | `share_tenant` |
| contentHashPrior | `sha256:ffc5c8381b04dcec3f0376df87187012f34b16bf211a3e3fb7311a8375a386f0` |
| headerFingerprintPrior | `sha256:3b2f5c531f0538509147846466d92090a3c8f5adc05a4be6d1dbb80ad73ff2a7` |
| skillVersion | `2026.08.24.01` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.08.31.2` |
| writtenAt | `2026-09-05T07:35:00.000Z` |

## Decisions

- changeScope=`new_page` · packKind=`list` · Kind B+D Slideout · typed **19 cột** · **cấm** detail* only
- API **giữ** `api/v1/asset/csdl-records` · BFF proxy · **cấm ERP.*** · **cấm** invent infra/so-ts
- Persist: shell + **Schema_CsdlBieu6** 1:1 · **cấm** parent *Json · migration Dev/4b only
- Q-KIND **hc_ds_hop_kt** · Q-APERTURE **number_m** · Q-PIPE **optional** · Q-LOAD **lookup_hl** · Q-LIGHT/DRAIN **yes_no**
- Q-ROUTE **alias_now** `/csdl-bieu-06` + hub · Q-PROV **keep_static** P1
- kmPoint Point · **không** ép kmTo · road-route SearchInput P1 · org **DEFER P2** · XLS **OUT**
- Peer Sổ TS deep-link · **cấm** merge · **≠** road-assets · map none
- Gates: tz_na · xco_get_only · share_tenant
- DOMAIN-MAP add `csdl-bieu-06`→Asset (T-DM-01)
- open questions: **none**

## Inventory (slim)

| id | label | controlHint | write |
|----|-------|-------------|-------|
| search | Tìm | SearchTextInput | filter |
| province/status/underpassKind | Tỉnh/TT/Loại | Dropdown | shell+typed LOOKUP |
| roadCode | Đường | SearchInput | shell + road-route |
| kmPoint | Km | Number | shell Point · no kmTo |
| code | Mã | Text ro | shell HC- |
| apertureM | Khẩu độ | Number | typed * m |
| pipeCount | Số ống | Number | typed optional |
| bodyStructure/portalStructure | KC thân/cửa | Dropdown | typed |
| lengthM | Cdài | Number | typed * |
| designLoad | Tải | Dropdown | typed lookup_hl |
| pavementInside | Mặt trong | Dropdown | typed BTXM/BTN |
| lighting/drainage | Chiếu sáng/Thoát | Dropdown | typed yes_no |
| builtYear/manageUnit/notes/status | … | Number/Text/Textarea/Dropdown | typed / shell P2 |

## Screens / zones (ids only)

- S-LIST · S-FORM-C/E/V/Copy · S-ACT-DELETE · S-HUB-ENTRY · S-PEER-SOTS · S-SKIP-MAP
- mfeStdUrl=`http://localhost:9301/csdl-bieu-06`
- hub=`http://localhost:9301/so-ts/csdl-so-sach?resource=underpasses`

## API / tasks (ids only)

- FormMode↔API: list/C/E/V/Copy ↔ GET/POST/PUT · soft DELETE · LKP road-route
- T-DM-01 · T-BE-01..05 · T-BFF-01 · T-FE-01..06 · T-OUT-01 → TL

## UNCLEAR

- none

## Full paths

- solution: `specs/csdl-bieu-06/be/solution-discovery.md`
- design: `specs/csdl-bieu-06/ui/design.md`
- prior compact: `handoff/design-compact.md` · `po-compact.md` · `data_analy-compact.md`

## Next

| Role | Need |
|------|------|
| **TL** | task/csdl-bieu-06.md · T-* · gates |
| Dev | Schema_CsdlBieu6 · typed DTO · alias page · Slideout 19 |
| QA | e2e queued `/agent-qa*` |

## Cấm (compact)

ERP.* · invent API · detail* only · Guid IdCode · merge Sổ TS · parent *Json · Step 4b/migration/e2e/build/start:std ở SA · Write MFE · re-scan demo
