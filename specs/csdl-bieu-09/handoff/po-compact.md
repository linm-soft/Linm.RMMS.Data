# handoff-compact — po · csdl-bieu-09

| | |
|--|--|
| schemaVersion | `1` |
| role | `po` |
| feature | `csdl-bieu-09` |
| title | CSDL Biểu 09 — Mốc lộ giới / GPMB |
| packKind | `list` |
| changeScope | `new_page` |
| status | `done` |
| taskId | `task_cee30b17` |
| analyTaskId | `task_b7a89508` |
| resource | `boundary-markers` |
| formNo | `09` (renumber 8→9 · T-REN-01) |
| columns | `17` · 2 section UX theo kind |
| IdCode | `MK-` |
| peerSoTs | — (≠ so-ts / road-assets) |
| autoApprove | `ON` |
| e2eQa | `ON` |
| contentHash | `sha256:863490daf95d2c19ddad660fc05f901eaeb0248fb65961f9e96747ebcf5b04e4` |
| headerFingerprint | `sha256:18fb135f880ed55afa6e9277e8980fd0458a24d85d87e69a753b805424f396bb` |
| skillVersion | `2026.08.25.02` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.08.31.2` |
| writtenAt | `2026-09-05T17:50:00.000Z` |

## Decisions

- packKind: **list** · Kind B A–D+F · Kind D Slideout 2col · 2 section kind · Grid AC YES · Report AC N/A · Leave YES
- form: typed **17** · **cấm** 3 ô detail* · **cấm** 2 entity · **cấm** Full-page
- Q-ROUTE: **alias_now** `/csdl-bieu-09` + hub entry
- Q-PROV: **keep_static** P1 · master P2
- Q-KIND-LABEL: **code_en** RoadLimit/GPMB · UI label VN
- Q-STRUCT: **excel_seed** LOOKUP_STATIC
- Q-DIM: **full_dim** L/W/Area/Qty · L/W/Area optional
- Q-QTY: **show_always** · default 1
- Q-LIST-COLS: **subset** shared+marker · schema-config bổ sung
- Q-REN-LABEL: **with_typed** Biểu 8→09 cùng typed
- GAP-BIEU09-TYPED/KIND/STRUCT/DIM/YEAR/BLOCK/REN/ROUTE: P1
- GAP-CSDL-ROAD-01: SearchInput road-route P1
- GAP-CSDL-ORG-01: DEFER P2
- GAP-CSDL-XLS-01: OUT · toolbar stub OK
- API: `api/v1/asset/csdl-records` · resource=boundary-markers · **cấm** ERP.* / infra invent
- open Q: **none** (autopilot chốt)

## Artifacts

| Kind | Path |
|------|------|
| requirement | `specs/csdl-bieu-09/po/requirement.md` |
| control-hint | `specs/_data-analy/features/csdl-bieu-09-control-hint.md` |
| real-data | `specs/_data-analy/features/csdl-bieu-09-real-data.md` |
| analy-compact | `specs/csdl-bieu-09/handoff/data_analy-compact.md` |
| STATUS | `specs/csdl-bieu-09/STATUS.md` |

## Inventory (slim)

| id | label | controlHint | notes |
|----|-------|-------------|-------|
| search | Tìm | SearchTextInput | filter |
| province | Tỉnh | Dropdown | LOOKUP_STATIC |
| status | TT | Dropdown | LOOKUP_STATIC |
| roadCode | Đường | SearchInput | road-route |
| kmFrom/kmTo | Km | Number | Point thường bằng |
| side | Vị trí | Dropdown | L/R/C/Both |
| markerKind | Loại mốc | Dropdown | RoadLimit/GPMB |
| code | Mã | Text ro | MK- |
| markerStructure | Kết cấu | Dropdown | Excel seed |
| markerLengthM | Dài (m) | Number | optional |
| markerWidthM | Rộng (m) | Number | optional |
| markerAreaM2 | DT (m²) | Number | optional |
| markerQty | SL | Number | default 1 |
| completedYear | Năm HT | Number | required |
| manageUnit | ĐV QL | Text | P2 SearchInput |
| notes | Ghi chú | Textarea | |

## Screens / zones (ids only)

- S-LIST Kind B A/B/C/D+F · LinErpListFilterBar · markerKind filter · cấm nút Tìm riêng
- S-FORM-* Kind D Slideout Z1–Z3 · 2 section kind · C/E/V/Copy · LeaveConfirmModal
- S-HUB-ENTRY hub `?resource=boundary-markers` · label Biểu 09
- S-SKIP-MAP none · ≠ so-ts
- mfeStdUrl=`http://localhost:9301/csdl-bieu-09`
- hub=`http://localhost:9301/so-ts/csdl-so-sach?resource=boundary-markers`
- Grid AC=YES · Leave=YES · Report AC=N/A

## API / next

- CRUD BFF `…/asset/csdl-records` · resource=boundary-markers · typed DTO SA
- road-route `…/integration/road-routes/search`
- Next: **Design** control-map · prototype 17 cột · 2 section kind · reviewUrl
- SA: Schema_CsdlBieu9 · typed UiSchema · renumber formNo
- e2e: queued `/agent-qa*` only

## UNCLEAR

- none

## Cấm (compact)

Demo/LS SSOT · ERP.* · Guid IdCode · form 3 ô only · 2 entity · invent map · merge Sổ TS · yarn build/e2e/start:std ở PO · re-scan demo
