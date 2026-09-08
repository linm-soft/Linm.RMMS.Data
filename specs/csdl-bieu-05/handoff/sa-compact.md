# handoff-compact — sa · csdl-bieu-05

| | |
|--|--|
| schemaVersion | `1` |
| role | `sa` |
| feature | `csdl-bieu-05` |
| title | CSDL Biểu 05 — Rãnh các loại |
| packKind | `list` |
| changeScope | `new_page` |
| status | `done` |
| taskId | `task_e5779496` |
| resource | `ditches` |
| formNo | `05` |
| columns | `18` |
| IdCode | `RN-` |
| peerSoTs | `so-ts-ditch` |
| formPattern | **Kind D Slideout** 2col · **cấm** Full-page |
| Kind | **B** A–D+F · **D** Slideout Z1–Z3 |
| solution_confirm | **approve** (autoApprove ON) |
| domain | **Asset** · `api/v1/asset/csdl-records` |
| bff | proxy only · `web-bff/api/v1/asset/csdl-records` |
| entity | shell `CsdlCatalogRecordEntity` + typed `CsdlBieu5Entity` · `rmms_csdl_bieu5` · Schema_CsdlBieu5 |
| sa_tz_gate | `tz_na` |
| sa_xco_gate | `xco_get_only` |
| sa_shared_table | `share_tenant` |
| contentHashPrior | `sha256:fd4e6899790aa98d6bc4cb628dc9c0bc5efc90acb3abf03a7b157cf123590117` |
| headerFingerprintPrior | `sha256:008898723c0a5b94fae7de8810903b1dcc39ccfd0dfa5d4a36dd398eb088ac2f` |
| skillVersion | `2026.08.24.01` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.08.31.2` |
| writtenAt | `2026-09-05T13:42:46.024Z` |

## Decisions

- changeScope=`new_page` · packKind=`list` · Kind B+D Slideout · typed **18 cột** · **cấm** detail* only
- API **giữ** `api/v1/asset/csdl-records` · BFF proxy · **cấm ERP.*** · **cấm** invent infra/so-ts
- Persist: shell + **Schema_CsdlBieu5** 1:1 · **cấm** parent *Json · migration Dev/4b only
- Q-SHAPE **rect_trap_round** · Q-APERTURE **free_text** · Q-DRAIN **free_text** · ditchKind hở/kín
- Q-ROUTE **alias_now** `/csdl-bieu-05` + hub · Q-PROV **keep_static** P1
- kmFrom/kmTo shell filter+form · road-route SearchInput P1 · org **DEFER P2** · XLS **OUT**
- Peer Sổ TS deep-link · **cấm** merge form · map none
- Gates: tz_na · xco_get_only · share_tenant
- DOMAIN-MAP add `csdl-bieu-05`→Asset (T-DM-01)
- open questions: **none**

## Inventory (slim)

| id | label | controlHint | write |
|----|-------|-------------|-------|
| search | Tìm | SearchTextInput | filter |
| province/status/ditchKind | Tỉnh/TT/Loại | Dropdown | shell+typed LOOKUP |
| roadCode | Đường | SearchInput | shell + road-route |
| kmFrom/kmTo | Km từ–đến | Number | shell |
| code | Mã | Text ro | shell RN- |
| side | Bên | Dropdown | shell |
| structure/shape | KC/Hình | Dropdown | typed |
| apertureSize | Khẩu độ | Text | typed free_text |
| lengthM | Cdài | Number | typed * |
| drainageCapacity | Thoát | Text | typed free_text |
| builtYear | Năm | Number | typed |
| manageUnit/ownerUnit | ĐV | Text | shell / typed P2 |
| notes/status | … | Textarea/Dropdown | shell |

## Screens / zones (ids only)

- S-LIST · S-FORM-C/E/V/Copy · S-ACT-DELETE · S-HUB-ENTRY · S-PEER-SOTS · S-SKIP-MAP
- mfeStdUrl=`http://localhost:9301/csdl-bieu-05`
- hub=`http://localhost:9301/so-ts/csdl-so-sach?resource=ditches`

## API / tasks (ids only)

- FormMode↔API: list/C/E/V/Copy ↔ GET/POST/PUT · soft DELETE · LKP road-route
- T-DM-01 · T-BE-01..05 · T-BFF-01 · T-FE-01..06 · T-OUT-01 → TL

## UNCLEAR

- none

## Full paths

- solution: `specs/csdl-bieu-05/be/solution-discovery.md`
- design: `specs/csdl-bieu-05/ui/design.md`
- prior compact: `handoff/design-compact.md` · `po-compact.md` · `data_analy-compact.md`

## Next

| Role | Need |
|------|------|
| **TL** | task/csdl-bieu-05.md · T-* · gates |
| Dev | Schema_CsdlBieu5 · typed DTO · alias page · Slideout 18 |
| QA | e2e queued `/agent-qa*` |

## Cấm (compact)

ERP.* · invent API · detail* only · Guid IdCode · merge Sổ TS · parent *Json · Step 4b/migration/e2e/build/start:std ở SA · Write MFE · re-scan demo
