# handoff-compact — po · csdl-bieu-13

| | |
|--|--|
| schemaVersion | `1` |
| role | `po` |
| feature | `csdl-bieu-13` |
| title | CSDL Biểu 13 — Tường chống ồn |
| packKind | `list` |
| changeScope | `new_page` |
| status | `confirmed` |
| taskId | `task_397af5bc` |
| autoApprove | `ON` |
| resource | `noise-barriers` |
| formNo | `13` |
| columns | `13` |
| IdCode | `TC-` |
| peerSoTs | `so-ts-noise-barrier` · **cấm** merge |
| contentHash | `sha256:39a45de0a9b834c65373e6c20d1664ab43144ff60d97bae4f0d886ad09d91e3a` |
| headerFingerprint | `sha256:31dbc83200b511c9d61333b1cdb94e2880778980a3b21970be414e926db29008` |
| skillVersion | `2026.08.25.01` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.08.31.2` |
| confirmedAt | `2026-09-05T14:00:00.000Z` |

## Artifacts

| Kind | Path |
|------|------|
| requirement | `specs/csdl-bieu-13/po/requirement.md` |
| prior compact | `specs/csdl-bieu-13/handoff/data_analy-compact.md` |
| control-hint | `specs/_data-analy/features/csdl-bieu-13-control-hint.md` |
| real-data | `specs/_data-analy/features/csdl-bieu-13-real-data.md` |

## Live bind (1-liner)

- API: `api/v1/asset/csdl-records?resource=noise-barriers` (+ BFF) · **cấm ERP.***
- Entry: `/csdl-bieu-13` (**alias_now**) · hub NEW card `?resource=noise-barriers`
- Form: Kind D Slideout 2col · section vị trí + kích thước · typed 13 · **cấm** detail*
- Import: XLS Biểu 13 stub P1 · peer so-ts-noise-barrier · **cấm** merge

## Header (13)

`code|roadCode|roadName|province|kmFrom|kmTo|side|lengthM|heightM|areaM2|status|manageUnit|notes`

## PO decisions (autoApprove)

| Q | Decision |
|---|----------|
| Q-ROUTE | alias_now |
| Q-PROV | keep_static |
| Q-BARRIER-TYPE | no_type_keep_13 |
| Q-AREA-DERIVE | manual |
| Q-PREFIX | TC |
| Q-LIST-COLS | subset |
| Q-TITLE | ctx_tuong («Biểu 13 — Tường chống ồn») |
| Q-DMAP | add_now |
| Q-PEER-LINK | none_p1 |

## Zones / AC

- List A/B/C/D Kind B · search must work · **cấm** nút Tìm · paginate 50/100/200/500
- Form Kind D · LeaveConfirm dirty · View readOnly · IdCode TC auto
- Grid subset: shared + lengthM/heightM/areaM2 + status · map: none
- Empty: «Chưa có tường chống ồn» · hub NEW card formNo 13

## GAP (Design/SA)

HUB · TYPED · ROUTE · DIM · SIDE · DB Schema_CsdlBieu13 · DMAP · ROAD · PROV static · ORG P2 · XLS stub · CUC-11 ≠ merge peer

## Next

| Role | Need |
|------|------|
| **Design** | control-map · prototype 13 · hub card · section kích thước · reviewUrl · filter-bar HARD |
| SA | typed DTO/UiSchema · Schema_CsdlBieu13 · DOMAIN-MAP slug · **cấm** infra · **cấm** merge road-assets |
| TL/Dev | wire controlHint · hub card · **cấm** guess Text vs SearchInput |

## Cấm (compact)

ERP.* · invent infra · detail* form · merge so-ts-noise-barrier/road-assets · Guid IdCode · demo SSOT · yarn build/e2e @ po
