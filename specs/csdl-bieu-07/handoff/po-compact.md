# handoff-compact — po · csdl-bieu-07

| | |
|--|--|
| schemaVersion | `1` |
| role | `po` |
| feature | `csdl-bieu-07` |
| title | CSDL Biểu 07 — Lề / taluy / hàng rào |
| packKind | `list` |
| changeScope | `new_page` |
| status | `done` |
| taskId | `task_8566976f` |
| analyTaskId | `task_480d8882` |
| resource | `shoulders-fences` |
| formNo | `07` (renumber 10→7 · T-REN-01) |
| columns | `20` |
| IdCode | `LE-` |
| peerSoTs | `SHOULDER` (deep-link · cấm merge) |
| autoApprove | `ON` |
| e2eQa | `ON` |
| contentHash | `sha256:5634091e7ce3e5272c090320398a76d75f84ed7326366e93e088ff2154e8bf44` |
| headerFingerprint | `sha256:ba33856d00d23440b05be8c78c8b8a5462662c96a1067e702b791eb5020d64cf` |
| skillVersion | `2026.08.25.02` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.08.31.2` |
| writtenAt | `2026-09-05T09:30:00.000Z` |

## Decisions

- packKind: **list** · Kind B A–D+F · Kind D Slideout 2col · 3 section · Grid AC YES · Report AC N/A · Leave YES
- form: typed **20 cột** · **cấm** 3 ô detail* · **cấm** Full-page
- Q-ROUTE: **alias_now** `/csdl-bieu-07` + hub entry
- Q-PROV: **keep_static** P1 · master P2
- Q-SIDE: **shared** L/R/Both · 1 field 3 khối
- Q-SLOPE: **map_clearing** slopeLengthM↔SlopeClearingM · slopeAreaM2 riêng
- Q-FENCE-LEN: **km** fenceLengthKm · SA map FenceLengthM
- Q-PANEL: **omit_p1**
- Q-STRUCT: **lookup_seed** shoulderStructure + fenceKind
- Q-REN-LABEL: **with_typed** Biểu 10→07 cùng typed
- GAP-BIEU07-SHOULDER/SLOPE/FENCE: 3 khối typed P1
- GAP-CSDL-ROAD-01: SearchInput road-route P1
- GAP-CSDL-ORG-01: DEFER P2
- GAP-CSDL-XLS-01: OUT · toolbar stub OK
- GAP-BIEU07-PEER-01: deep-link · **cấm** merge Sổ TS / road-assets
- API: `api/v1/asset/csdl-records` · **cấm** ERP.* / infra invent
- open Q: **none** (autopilot chốt)

## Artifacts

| Kind | Path |
|------|------|
| requirement | `specs/csdl-bieu-07/po/requirement.md` |
| control-hint | `specs/_data-analy/features/csdl-bieu-07-control-hint.md` |
| real-data | `specs/_data-analy/features/csdl-bieu-07-real-data.md` |
| analy-compact | `specs/csdl-bieu-07/handoff/data_analy-compact.md` |
| STATUS | `specs/csdl-bieu-07/STATUS.md` |

## Inventory (slim)

| id | label | controlHint | notes |
|----|-------|-------------|-------|
| search | Tìm | SearchTextInput | filter |
| province | Tỉnh | Dropdown | LOOKUP_STATIC |
| status | TT | Dropdown | LOOKUP_STATIC |
| roadCode | Đường | SearchInput | road-route |
| kmFrom/kmTo | Km | Number | Line |
| side | Vị trí | Dropdown | shared L/R/Both |
| fenceKind | Loại HR | Dropdown | filter opt |
| code | Mã | Text ro | LE- |
| shoulderStructure | KC lề | Dropdown | lookup_seed |
| shoulderLengthM | Dài lề | Number | * |
| shoulderWidthM | Rộng lề | Number | * |
| shoulderAreaM2 | DT lề | Number | optional |
| slopeLengthM | Dài taluy | Number | =SlopeClearingM |
| slopeAreaM2 | DT taluy | Number | |
| fencePostCount | Số cột | Number | ≥0 |
| fenceLengthKm | Dài HR | Number | km |
| builtYear | Năm | Number | |
| manageUnit | ĐV QL | Text | P2 SearchInput |
| notes | Ghi chú | Textarea | |

## Screens / zones (ids only)

- S-LIST Kind B A/B/C/D+F · LinErpListFilterBar · cấm nút Tìm riêng
- S-FORM-* Kind D Slideout Z1–Z3 · 3 section lề/taluy/HR · C/E/V/Copy · LeaveConfirmModal
- S-HUB-ENTRY hub `?resource=shoulders-fences` · label Biểu 07
- S-PEER-SOTS / S-SKIP-MAP deep-link only
- mfeStdUrl=`http://localhost:9301/csdl-bieu-07`
- hub=`http://localhost:9301/so-ts/csdl-so-sach?resource=shoulders-fences`
- Grid AC=YES · Leave=YES · Report AC=N/A

## API / next

- CRUD BFF `…/asset/csdl-records` · resource=shoulders-fences · typed DTO SA
- road-route `…/integration/road-routes/search`
- Next: **Design** control-map · prototype 20 cột · 3 section · reviewUrl
- SA: Schema_CsdlBieu7 · typed UiSchema · FenceLengthM↔km · renumber formNo
- e2e: queued `/agent-qa*` only

## UNCLEAR

- none

## Cấm (compact)

Demo/LS SSOT · ERP.* · Guid IdCode · form 3 ô only · invent map · merge Sổ TS · yarn build/e2e/start:std ở PO · re-scan demo
