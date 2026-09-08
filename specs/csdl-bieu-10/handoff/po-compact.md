# handoff-compact — po · csdl-bieu-10

| | |
|--|--|
| schemaVersion | `1` |
| role | `po` |
| feature | `csdl-bieu-10` |
| title | CSDL Biểu 10 — Kè, tường chắn |
| packKind | `list` |
| changeScope | `new_page` |
| status | `confirmed` |
| taskId | `task_c6ef9738` |
| autoApprove | `ON` |
| resource | `retaining-walls` |
| formNo | `10` |
| columns | `21` |
| IdCode | `KE-` |
| peerSoTs | `so-ts-retaining` (toolbar deep-link · ≠ merge) |
| contentHash | `sha256:56715ebbcfffd0589eab296a31137e79a82b49c672dc14582fc554f4ed262346` |
| headerFingerprint | `sha256:100df2f2285c57a909981f9248564af4f788a1ea653fd261122e9a64064773ad` |
| skillVersion | `2026.08.25.01` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.08.31.2` |
| confirmedAt | `2026-09-05T11:30:00.000Z` |

## Artifacts

| Kind | Path |
|------|------|
| requirement | `specs/csdl-bieu-10/po/requirement.md` |
| prior compact | `specs/csdl-bieu-10/handoff/data_analy-compact.md` |
| control-hint | `specs/_data-analy/features/csdl-bieu-10-control-hint.md` |
| real-data | `specs/_data-analy/features/csdl-bieu-10-real-data.md` |

## Live bind (1-liner)

- API: `api/v1/asset/csdl-records?resource=retaining-walls` (+ BFF) · **cấm ERP.***
- Entry: `/csdl-bieu-10` (**alias_now**) · hub `?resource=retaining-walls`
- Form: Kind D Slideout 2col · 2 section tường + rãnh đỉnh · typed 21 · **cấm** detail*
- Import: XLS Biểu 10 stub P1 · peer toolbar deep-link

## Header (21)

`code|roadCode|roadName|province|kmFrom|kmTo|side|wallKind|structure|material|lengthM|heightM|areaM2|crestDitchKind|crestDitchStructure|crestDitchShape|crestDitchLengthM|inServiceYear|status|manageUnit|notes`

## PO decisions (autoApprove)

| Q | Decision |
|---|----------|
| Q-ROUTE | alias_now |
| Q-PROV | keep_static |
| Q-KIND | label_vn (+ stable EN codes) |
| Q-STRUCT | excel_seed |
| Q-MAT | lookup |
| Q-HEIGHT | height_alias (UI heightM ↔ DB WidthM) |
| Q-CREST | optional_flat |
| Q-AREA | optional |
| Q-LIST-COLS | subset |
| Q-REN-LABEL | with_typed |
| Q-PEER | toolbar |

## Zones / AC

- List A/B/C/D Kind B · search must work · **cấm** nút Tìm · paginate 50/100/200/500
- Form Kind D · LeaveConfirm dirty · View readOnly · IdCode KE auto
- Grid subset: shared + kind/dim/year/status · map: none
- Empty: «Chưa có kè / tường chắn»

## GAP (Design/SA)

TYPED · REN · ROUTE · KIND/STRUCT/MAT/DIM/CREST/YEAR/BLOCK · ROAD · PROV static · ORG P2 · XLS stub · CUC-11 peer ≠ merge

## Next

| Role | Need |
|------|------|
| **Design** | control-map · prototype 21 · 2 section · reviewUrl · filter-bar HARD |
| SA | typed DTO/UiSchema · Schema_CsdlBieu10 · heightM↔WidthM · formNo=10 |
| TL/Dev | wire controlHint · **cấm** guess Text vs SearchInput |

## Cấm (compact)

ERP.* · invent infra · detail* form · merge so-ts-retaining · Guid IdCode · demo SSOT · child CrestDitch P1 · yarn build/e2e @ po
