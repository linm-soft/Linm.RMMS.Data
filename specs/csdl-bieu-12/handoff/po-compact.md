# handoff-compact — po · csdl-bieu-12

| | |
|--|--|
| schemaVersion | `1` |
| role | `po` |
| feature | `csdl-bieu-12` |
| title | CSDL Biểu 12 — Cây xanh, thảm cỏ |
| packKind | `list` |
| changeScope | `new_page` |
| status | `confirmed` |
| taskId | `task_65010473` |
| autoApprove | `ON` |
| resource | `green-assets` |
| formNo | `12` |
| columns | `15` |
| IdCode | `CX-` |
| peerSoTs | — (không peer · **cấm** invent so-ts-green) |
| contentHash | `sha256:6da498be3a84192c6f3e3c30a7e8032bf2753359591a9aabd3ad36d809f4c457` |
| headerFingerprint | `sha256:54aef0c755530d138ecefa7a303b22c78c32ca1b6ae3555d5bb33492799b5af9` |
| skillVersion | `2026.08.25.01` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.08.31.2` |
| confirmedAt | `2026-09-05T13:05:00.000Z` |

## Artifacts

| Kind | Path |
|------|------|
| requirement | `specs/csdl-bieu-12/po/requirement.md` |
| prior compact | `specs/csdl-bieu-12/handoff/data_analy-compact.md` |
| control-hint | `specs/_data-analy/features/csdl-bieu-12-control-hint.md` |
| real-data | `specs/_data-analy/features/csdl-bieu-12-real-data.md` |

## Live bind (1-liner)

- API: `api/v1/asset/csdl-records?resource=green-assets` (+ BFF) · **cấm ERP.***
- Entry: `/csdl-bieu-12` (**alias_now**) · hub `?resource=green-assets`
- Form: Kind D Slideout 2col · 2 section khóm + thảm cỏ · typed 15 · **cấm** detail*
- Import: XLS Biểu 12 stub P1 · **cấm** invent peer so-ts-green

## Header (15)

`code|roadCode|roadName|province|kmFrom|kmTo|side|oleanderClumps|ngauClumps|palmClumps|otherClumps|grassAreaM2|status|manageUnit|notes`

## PO decisions (autoApprove)

| Q | Decision |
|---|----------|
| Q-ROUTE | alias_now |
| Q-PROV | keep_static |
| Q-OTHER-CLUMP | keep_other |
| Q-GRASS-REQ | allow_either |
| Q-TALUY | side_only |
| Q-LIST-COLS | subset |
| Q-TITLE | keep_demo («Biểu 12 — Cây xanh, thảm cỏ») |
| Q-DMAP | add_now |

## Zones / AC

- List A/B/C/D Kind B · search must work · **cấm** nút Tìm · paginate 50/100/200/500
- Form Kind D · LeaveConfirm dirty · View readOnly · IdCode CX auto
- Grid subset: shared + 4 khóm + grassAreaM2 + status · map: none
- Empty: «Chưa có cây xanh, thảm cỏ»

## GAP (Design/SA)

TYPED · ROUTE · CLUMP · GRASS · SIDE · DMAP · ROAD · PROV static · ORG P2 · XLS stub · CUC-11 ≠ invent peer

## Next

| Role | Need |
|------|------|
| **Design** | control-map · prototype 15 · 2 section · reviewUrl · filter-bar HARD |
| SA | typed DTO/UiSchema · Schema_CsdlBieu12 · DOMAIN-MAP slug · **cấm** infra |
| TL/Dev | wire controlHint · **cấm** guess Text vs SearchInput |

## Cấm (compact)

ERP.* · invent infra · detail* form · invent so-ts-green · Guid IdCode · demo SSOT · yarn build/e2e @ po
