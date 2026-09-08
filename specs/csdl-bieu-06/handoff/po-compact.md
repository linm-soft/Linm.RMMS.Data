# handoff-compact — po · csdl-bieu-06

| | |
|--|--|
| schemaVersion | `1` |
| role | `po` |
| feature | `csdl-bieu-06` |
| title | CSDL Biểu 06 — Hầm chui DS + hộp KT |
| packKind | `list` |
| changeScope | `new_page` |
| status | `done` |
| taskId | `task_93f99dd1` |
| analyTaskId | `task_b6ef926c` |
| resource | `underpasses` |
| formNo | `06` |
| columns | `19` |
| IdCode | `HC-` |
| peerSoTs | `so-ts-underpass` |
| autoApprove | `ON` |
| e2eQa | `ON` |
| contentHash | `sha256:ffc5c8381b04dcec3f0376df87187012f34b16bf211a3e3fb7311a8375a386f0` |
| headerFingerprint | `sha256:3b2f5c531f0538509147846466d92090a3c8f5adc05a4be6d1dbb80ad73ff2a7` |
| skillVersion | `2026.08.25.02` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.08.31.2` |
| writtenAt | `2026-09-05T07:20:00.000Z` |

## Decisions

- packKind: **list** · Kind B A–D+F · Kind D Slideout 2col · Grid AC YES · Report AC N/A · Leave YES
- form: typed **19 cột** · **cấm** 3 ô detail* · **cấm** Full-page · gồm hộp KT
- Q-ROUTE: **alias_now** `/csdl-bieu-06` + hub entry
- Q-PROV: **keep_static** P1 · master P2
- Q-APERTURE: **number_m** (DB ApertureM)
- Q-PIPE: **optional** P1 · integer ≥1 khi nhập
- Q-LOAD: **lookup_hl** (HL93/H30/khác)
- Q-LIGHT: **yes_no** · Q-DRAIN: **yes_no**
- Q-KIND: **hc_ds_hop_kt** (hầm chui DS / hộp KT)
- GAP-BIEU06-POINT-01: kmPoint Point · **không** ép kmTo
- GAP-BIEU06-STRUCT-01 / PAVE-01: body+portal · pavementInside BTXM/BTN P1
- GAP-CSDL-ROAD-01: SearchInput road-route P1
- GAP-CSDL-ORG-01: DEFER P2
- GAP-CSDL-XLS-01: OUT · toolbar stub OK
- GAP-BIEU06-PEER-01: deep-link · **cấm** merge Sổ TS / road-assets
- API: `api/v1/asset/csdl-records` · **cấm** ERP.* / infra invent
- open Q: **none** (autopilot chốt)

## Artifacts

| Kind | Path |
|------|------|
| requirement | `specs/csdl-bieu-06/po/requirement.md` |
| control-hint | `specs/_data-analy/features/csdl-bieu-06-control-hint.md` |
| real-data | `specs/_data-analy/features/csdl-bieu-06-real-data.md` |
| analy-compact | `specs/csdl-bieu-06/handoff/data_analy-compact.md` |
| STATUS | `specs/csdl-bieu-06/STATUS.md` |

## Inventory (slim)

| id | label | controlHint | notes |
|----|-------|-------------|-------|
| search | Tìm | SearchTextInput | filter |
| province | Tỉnh | Dropdown | LOOKUP_STATIC |
| status | TT | Dropdown | LOOKUP_STATIC |
| roadCode | Đường | SearchInput | road-route |
| kmPoint | Km | Number | Point · no kmTo |
| underpassKind | Loại | Dropdown | hc_ds / hop_kt |
| code | Mã | Text ro | HC- |
| apertureM | Khẩu độ | Number | * m |
| pipeCount | Số ống | Number | optional |
| bodyStructure | KC thân | Dropdown | BT/BTCT/… |
| portalStructure | KC cửa | Dropdown | |
| lengthM | Cdài | Number | * |
| designLoad | Tải | Dropdown | lookup_hl |
| pavementInside | Mặt trong | Dropdown | BTXM/BTN |
| lighting | Chiếu sáng | Dropdown | yes_no |
| drainage | Thoát nước | Dropdown | yes_no |
| builtYear | Năm | Number | |
| manageUnit | ĐV QL | Text | P2 SearchInput |
| notes | Ghi chú | Textarea | |

## Screens / zones (ids only)

- S-LIST Kind B A/B/C/D+F · LinErpListFilterBar · cấm nút Tìm riêng
- S-FORM-* Kind D Slideout Z1–Z3 · C/E/V/Copy · LeaveConfirmModal
- S-HUB-ENTRY hub `?resource=underpasses`
- S-PEER-SOTS / S-SKIP-MAP deep-link only
- mfeStdUrl=`http://localhost:9301/csdl-bieu-06`
- hub=`http://localhost:9301/so-ts/csdl-so-sach?resource=underpasses`
- Grid AC=YES · Leave=YES · Report AC=N/A

## API / next

- CRUD BFF `…/asset/csdl-records` · resource=underpasses · typed DTO SA
- road-route `…/integration/road-routes/search`
- Next: **Design** control-map · prototype 19 cột · reviewUrl
- SA: Schema_CsdlBieu6 · typed UiSchema underpasses
- e2e: queued `/agent-qa*` only

## UNCLEAR

- none

## Cấm (compact)

Demo/LS SSOT · ERP.* · Guid IdCode · form 3 ô only · invent map · merge Sổ TS · yarn build/e2e/start:std ở PO · re-scan demo
