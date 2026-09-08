# handoff-compact — po · csdl-bieu-04

| | |
|--|--|
| schemaVersion | `1` |
| role | `po` |
| feature | `csdl-bieu-04` |
| title | CSDL Biểu 04 — Cống các loại |
| packKind | `list` |
| changeScope | `new_page` |
| status | `done` |
| taskId | `task_ad060865` |
| analyTaskId | `task_ea0d8d57` |
| resource | `culverts` |
| formNo | `04` |
| columns | `17` |
| IdCode | `CG-` |
| peerSoTs | `so-ts-culvert-x` |
| autoApprove | `ON` |
| e2eQa | `ON` |
| contentHash | `sha256:7498ad6644d0e599bc40afb7589db5335c18adb4b92f1573de3c1fae2e17d3d6` |
| headerFingerprint | `sha256:155df2db0952d6e139fbedac748878ecd5c607d506fdf5fccc172f5b0f937024` |
| skillVersion | `2026.08.25.02` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.08.31.2` |
| writtenAt | `2026-09-05T06:00:00.000Z` |

## Decisions

- packKind: **list** · Kind B A–D+F · Kind D Slideout 2col · Grid AC YES · Report AC N/A · Leave YES
- form: typed **17 cột** · **cấm** 3 ô detail* · **cấm** Full-page
- Q-GPS: **four_xy** (gpsCulvertX/Y · gpsRoadX/Y) · SA CRS/storage
- Q-ROUTE: **alias_now** `/csdl-bieu-04` + hub entry
- Q-PROV: **keep_static** P1 · master P2
- Q-LOAD: **free_text** P1 · lookup DEFER
- GAP-CSDL-ROAD-01: SearchInput road-route P1
- GAP-BIEU04-SHAPE-01: Dropdown hộp/tròn · thân/đầu P1
- GAP-CSDL-ORG-01: DEFER P2
- GAP-CSDL-XLS-01: OUT · toolbar stub OK
- GAP-BIEU04-PEER-01: deep-link · **cấm** merge Sổ TS form
- API: `api/v1/asset/csdl-records` · **cấm** ERP.* / infra invent
- open Q: **none** (autopilot chốt)

## Artifacts

| Kind | Path |
|------|------|
| requirement | `specs/csdl-bieu-04/po/requirement.md` |
| control-hint | `specs/_data-analy/features/csdl-bieu-04-control-hint.md` |
| real-data | `specs/_data-analy/features/csdl-bieu-04-real-data.md` |
| analy-compact | `specs/csdl-bieu-04/handoff/data_analy-compact.md` |
| STATUS | `specs/csdl-bieu-04/STATUS.md` |

## Inventory (slim)

| id | label | controlHint | notes |
|----|-------|-------------|-------|
| search | Tìm | SearchTextInput | filter |
| province | Tỉnh | Dropdown | LOOKUP_STATIC |
| status | TT | Dropdown | LOOKUP_STATIC |
| roadCode | Đường | SearchInput | road-route |
| kmPoint | Km điểm | Number | filter+form |
| code | Mã | Text ro | CG- |
| gps* ×4 | GPS cống/đường | Number | Q-GPS |
| apertureM | Khẩu độ | Number | * |
| shape | Hình | Dropdown | hộp/tròn |
| bodyMaterial | Thân | Dropdown | |
| inlet/outlet | Đầu TL/HL | Text | |
| lengthM | Cdài | Number | * |
| loadClass | Tải | Text | Q-LOAD |
| builtYear | Năm | Number | |
| manageUnit | ĐV QL | Text | P2 SearchInput |
| notes/side/status | … | Textarea/Dropdown | |

## Screens / zones (ids only)

- S-LIST Kind B A/B/C/D+F · LinErpListFilterBar · cấm nút Tìm riêng
- S-FORM-* Kind D Slideout Z1–Z3 · C/E/V/Copy · LeaveConfirmModal
- S-HUB-ENTRY hub `?resource=culverts`
- S-PEER-SOTS / S-SKIP-MAP deep-link only
- mfeStdUrl=`http://localhost:9301/csdl-bieu-04`
- hub=`http://localhost:9301/so-ts/csdl-so-sach?resource=culverts`
- Grid AC=YES · Leave=YES · Report AC=N/A

## API / next

- CRUD BFF `…/asset/csdl-records` · resource=culverts · typed DTO SA
- road-route `…/integration/road-routes/search`
- Next: **Design** control-map · prototype 17 cột · reviewUrl
- SA: Schema_CsdlBieu4 · GPS four_xy CRS
- e2e: queued `/agent-qa*` only

## UNCLEAR

- none

## Cấm (compact)

Demo/LS SSOT · ERP.* · Guid IdCode · form 3 ô only · invent map · merge Sổ TS · yarn build/e2e/start:std ở PO · re-scan demo
