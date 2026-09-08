# handoff-compact — po · csdl-bieu-02

| | |
|--|--|
| schemaVersion | `1` |
| role | `po` |
| feature | `csdl-bieu-02` |
| title | CSDL Biểu 02 — Thống kê cầu |
| packKind | `list` |
| changeScope | `new_page` |
| status | `done` |
| taskId | `task_ba5815a6` |
| analyTaskId | `task_dd8553f8` |
| resource | `bridges` |
| formNo | `02` |
| columns | `48` |
| IdCode | `BR-` |
| peerSoTs | none (—) · Sổ 6 / passport deep-link only |
| autoApprove | `ON` |
| e2eQa | `ON` |
| contentHash | `sha256:bd73974e607f886dd38736015cb5a6a3fb82aff9d6a63328963ceb5c4be436a2` |
| headerFingerprint | `sha256:34e1fcb051f6010fbe70ebdffab71df3d6f441a373d3be0249dd601e596d5591` |
| skillVersion | `2026.08.25.02` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.08.31.2` |
| writtenAt | `2026-09-05T08:05:00.000Z` |

## Decisions

- packKind: **list** · Kind B A–D+F · Kind D Slideout 2col sectioned · Grid AC YES · Report AC N/A · Leave YES
- form: typed **48 cột** · **cấm** 3 ô detail* · **cấm** Full-page
- Q-GPS: **six_numbers** (lat/lng×3) · cấm map canvas
- Q-LOAD: **text** · SA unit later
- Q-LEGACY: **keep_hidden** P1
- Q-ROUTE: **alias_now** `/csdl-bieu-02` + hub entry
- Q-PROV: **keep_static** P1 · master P2
- Q-SECTION: **sectioned** (GPS/dầm/phần dưới/tải+gối/lan can+thoát)
- GAP-CSDL-ROAD-01: SearchInput road-route P1
- GAP-CSDL-ORG-01: DEFER P2
- GAP-CSDL-XLS-01: OUT
- GAP-BIEU02-PEER-01: deep-link · **cấm** merge passport/Sổ 6
- GAP-BIEU02-DMAP-01: SA thêm slug
- API: `api/v1/asset/csdl-records` · **cấm** ERP.* / infra / passport CRUD
- open Q: **none** (autopilot chốt)

## Artifacts

| Kind | Path |
|------|------|
| requirement | `specs/csdl-bieu-02/po/requirement.md` |
| control-hint | `specs/_data-analy/features/csdl-bieu-02-control-hint.md` |
| real-data | `specs/_data-analy/features/csdl-bieu-02-real-data.md` |
| analy-compact | `specs/csdl-bieu-02/handoff/data_analy-compact.md` |
| STATUS | `specs/csdl-bieu-02/STATUS.md` |

## Inventory (slim)

| id | label | controlHint | notes |
|----|-------|-------------|-------|
| search | Tìm | SearchTextInput | filter |
| province | Tỉnh | Dropdown | LOOKUP_STATIC |
| status | TT | Dropdown | LOOKUP_STATIC |
| roadCode | Đường | SearchInput | road-route |
| kmFrom/kmTo | Km | Number | filter+form |
| beamType | Loại dầm | Dropdown | filter optional |
| code | Mã | Text ro | BR- |
| bridgeName | Tên cầu | Text | * |
| gps* ×6 | GPS 3 điểm | Number | Q-GPS |
| span*/beam* | Dầm | Number/Text/Dropdown | BEAM |
| abutment*/pier* | Phần dưới | Dropdown/Text | SUB |
| design/actualLoad | Tải | Text | Q-LOAD |
| bearing*/railing*/drain*/PQ | Gối/lan can/thoát | Number/Text/Checkbox | FURN |
| lengthM/carriageWidthM | Cdài/B xe | Number | * |
| manageUnit | ĐV QL | Text | P2 SearchInput |
| legacyCol64/69 | Legacy | Text hidden | Q-LEGACY |

## Screens / zones (ids only)

- S-LIST Kind B A/B/C/D+F · LinErpListFilterBar · cấm nút Tìm riêng
- S-FORM-* Kind D Slideout Z1–Z3 sectioned · C/E/V/Copy · LeaveConfirmModal
- S-HUB-ENTRY hub `?resource=bridges`
- S-PEER-SO6 / S-SKIP-MAP deep-link only
- mfeStdUrl=`http://localhost:9301/csdl-bieu-02`
- hub=`http://localhost:9301/so-ts/csdl-so-sach?resource=bridges`
- Grid AC=YES · Leave=YES · Report AC=N/A

## API / next

- CRUD BFF `…/asset/csdl-records` · resource=bridges · typed DTO SA · Schema_CsdlBieu2
- road-route `…/integration/road-routes/search`
- Next: **Design** control-map · prototype 48 cột sectioned · reviewUrl
- SA: GPS/LOAD/LEGACY · DOMAIN-MAP slug
- e2e: queued `/agent-qa*` only

## UNCLEAR

- none

## Cấm (compact)

Demo/LS SSOT · ERP.* · Guid IdCode · form 3 ô only · invent map · merge passport/Sổ 6 · yarn build/e2e/start:std ở PO · re-scan demo
