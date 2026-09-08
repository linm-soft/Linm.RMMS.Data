# handoff-compact — po · csdl-bieu-01

| | |
|--|--|
| schemaVersion | `1` |
| role | `po` |
| feature | `csdl-bieu-01` |
| title | CSDL Biểu 01 — Phân loại mặt đường |
| packKind | `list` |
| changeScope | `new_page` |
| status | `done` |
| taskId | `task_4ffaaf27` |
| analyTaskId | `task_41122f1b` |
| resource | `pavement-sections` |
| formNo | `01` |
| columns | `38` |
| IdCode | `MD-` |
| peerSoTs | `pavement-section` |
| autoApprove | `ON` |
| e2eQa | `ON` |
| contentHash | `sha256:3545960f4006740c9dfe57b5f004fa4a1cd1b7befbcd51e35e2168e16821b65e` |
| headerFingerprint | `sha256:6376475bbf48ca5b3e8cfd26688cd877fd1bc77d5b8d8c4c3d314cd0572f5cf2` |
| skillVersion | `2026.08.25.02` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.08.31.2` |
| writtenAt | `2026-09-05T05:00:00.000Z` |

## Decisions

- packKind: **list** · Kind B A–D+F · Kind D Slideout 2col · Grid AC YES · Report AC N/A · Leave YES
- form: typed **38 cột** · **cấm** 3 ô detail* · **cấm** Full-page
- Q-WIDTH: **four_buckets** (surfWGe14…surfWLe5) · SA storage
- Q-STRUCT: **one_enum** structureType
- Q-ROUTE: **alias_now** `/csdl-bieu-01` + hub entry
- Q-PROV: **keep_static** P1 · master P2
- GAP-CSDL-ROAD-01: SearchInput road-route P1
- GAP-CSDL-ORG-01: DEFER P2
- GAP-CSDL-XLS-01 / SKIP-01: OUT · skip-bridge locked
- GAP-BIEU01-PEER-01: deep-link · **cấm** merge Sổ TS form
- API: `api/v1/asset/csdl-records` · **cấm** ERP.* / infra invent
- open Q: **none** (autopilot chốt)

## Artifacts

| Kind | Path |
|------|------|
| requirement | `specs/csdl-bieu-01/po/requirement.md` |
| control-hint | `specs/_data-analy/features/csdl-bieu-01-control-hint.md` |
| real-data | `specs/_data-analy/features/csdl-bieu-01-real-data.md` |
| analy-compact | `specs/csdl-bieu-01/handoff/data_analy-compact.md` |
| STATUS | `specs/csdl-bieu-01/STATUS.md` |

## Inventory (slim)

| id | label | controlHint | notes |
|----|-------|-------------|-------|
| search | Tìm | SearchTextInput | filter |
| province | Tỉnh | Dropdown | LOOKUP_STATIC |
| status | TT | Dropdown | LOOKUP_STATIC |
| roadCode | Đường | SearchInput | road-route |
| kmFrom/kmTo | Km | Number | filter+form |
| code | Mã | Text ro | MD- |
| lengthKm/baseWidthM | Cdài/B nền | Number | |
| surfW* ×4 | B mặt buckets | Number | Q-WIDTH |
| structureType | Kết cấu | Dropdown | Q-STRUCT |
| plain/mountainClass | Cấp | Dropdown | I–V |
| yearsInServiceBand | Năm SD | Dropdown | |
| handover* | BG | Checkbox | |
| last*Year | Năm ĐT/SC | Number | |
| manageUnit | ĐV QL | Text | P2 SearchInput |
| notes/side/status | … | Textarea/Dropdown | |

## Screens / zones (ids only)

- S-LIST Kind B A/B/C/D+F · LinErpListFilterBar · cấm nút Tìm riêng
- S-FORM-* Kind D Slideout Z1–Z3 · C/E/V/Copy · LeaveConfirmModal
- S-HUB-ENTRY hub `?resource=pavement-sections`
- S-PEER-SOTS / S-SKIP-MAP deep-link only
- mfeStdUrl=`http://localhost:9301/csdl-bieu-01`
- hub=`http://localhost:9301/so-ts/csdl-so-sach?resource=pavement-sections`
- Grid AC=YES · Leave=YES · Report AC=N/A

## API / next

- CRUD BFF `…/asset/csdl-records` · resource=pavement-sections · typed DTO SA
- road-route `…/integration/road-routes/search`
- Next: **Design** control-map · prototype 38 cột · reviewUrl
- SA: Schema_CsdlBieu1 · WIDTH/STRUCT storage
- e2e: queued `/agent-qa*` only

## UNCLEAR

- none

## Cấm (compact)

Demo/LS SSOT · ERP.* · Guid IdCode · form 3 ô only · invent map · merge Sổ TS · yarn build/e2e/start:std ở PO · re-scan demo
