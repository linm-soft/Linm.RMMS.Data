# handoff-compact — po · csdl-bieu-08

| | |
|--|--|
| schemaVersion | `1` |
| role | `po` |
| feature | `csdl-bieu-08` |
| title | CSDL Biểu 08 — Hệ thống ATGT |
| packKind | `list` |
| changeScope | `new_page` |
| status | `done` |
| taskId | `task_49b1fe15` |
| analyTaskId | `task_a21c4937` |
| resource | `traffic-safety` |
| formNo | `08` (renumber 7→8 · T-REN-01) |
| columns | `45` · **11 nhóm** |
| IdCode | `AT-` |
| peerSoTs | ATGT types (deep-link · cấm merge) |
| autoApprove | `ON` |
| e2eQa | `ON` |
| contentHash | `sha256:f972c82727726d256754d076435f9ef97c993b4f9844dc79e50b6415fcaf54be` |
| headerFingerprint | `sha256:ba8b8db4f7637ee32cfd4a882b6abdc774c538f6c9812c3ecd1d13f6151cdd6f` |
| skillVersion | `2026.08.25.02` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.08.31.2` |
| writtenAt | `2026-09-05T10:05:00.000Z` |

## Decisions

- packKind: **list** · Kind B A–D+F · Kind D Slideout 2col · shared+**1 child** · Grid AC YES · Report AC N/A · Leave YES
- form: typed **45/11** · **cấm** 3 ô detail* · **cấm** wide 45 entity · **cấm** Full-page
- Q-ROUTE: **alias_now** `/csdl-bieu-08` + hub entry
- Q-PROV: **keep_static** P1 · master P2
- Q-CHILD: **child_tables** (+ `?type=` filter) · Schema_CsdlBieu8+children
- Q-TYPE-UX: **confirm** clear child khi đổi assetType
- Q-MARKER-KIND: **lookup_static** (Excel seed)
- Q-LIST-COLS: **subset_by_type** · cấm 45 cols cùng lúc
- Q-REN-LABEL: **with_typed** Biểu 7→08 cùng typed
- Q-PEER: **optional** deep-link · **cấm** merge Sổ TS / road-assets
- GAP-BIEU08-TYPED/CHILD/TYPE + 11 child GAP: P1
- GAP-CSDL-ROAD-01: SearchInput road-route P1
- GAP-CSDL-ORG-01: DEFER P2
- GAP-CSDL-XLS-01: OUT · toolbar stub OK
- API: `api/v1/asset/csdl-records` · resource=traffic-safety · **cấm** ERP.* / infra invent
- open Q: **none** (autopilot chốt)

## Artifacts

| Kind | Path |
|------|------|
| requirement | `specs/csdl-bieu-08/po/requirement.md` |
| control-hint | `specs/_data-analy/features/csdl-bieu-08-control-hint.md` |
| real-data | `specs/_data-analy/features/csdl-bieu-08-real-data.md` |
| analy-compact | `specs/csdl-bieu-08/handoff/data_analy-compact.md` |
| STATUS | `specs/csdl-bieu-08/STATUS.md` |

## Inventory (slim)

| id | label | controlHint | notes |
|----|-------|-------------|-------|
| search | Tìm | SearchTextInput | filter |
| province | Tỉnh | Dropdown | LOOKUP_STATIC |
| status | TT | Dropdown | LOOKUP_STATIC |
| roadCode | Đường | SearchInput | road-route |
| kmFrom/kmTo | Km | Number | |
| side | Vị trí | Dropdown | L/R/C/Both |
| assetType | Chủng loại | Dropdown | 11 enum · `?type=` |
| code | Mã | Text ro | AT- |
| sign* | Biển | Text/Number | TRAFFIC_SIGN |
| marker* | Cọc/Km | Dropdown/Number | MARKER_POST |
| median* | GPC | Dropdown/Number | MEDIAN |
| antiGlare* | Chống chói | … | ANTI_GLARE |
| island* | Đảo | … | TRAFFIC_ISLAND |
| stud* | Đinh PQ | … | ROAD_STUD |
| guardrail* | Hộ lan | … | GUARDRAIL |
| mark* | Vạch sơn | … | ROAD_MARKING |
| cushionQty | Thùng GC | Number | CRASH_CUSHION |
| mirrorQty | Gương | Number | CONVEX_MIRROR |
| signal*/lamp* | Đèn | … | TRAFFIC_SIGNAL |
| builtYear | Năm | Number | |
| manageUnit | ĐV QL | Text | P2 SearchInput |
| notes | Ghi chú | Textarea | |

## Screens / zones (ids only)

- S-LIST Kind B A/B/C/D+F · LinErpListFilterBar · assetType filter · cấm nút Tìm riêng
- S-FORM-* Kind D Slideout Z1–Z3 · shared + 1 child · C/E/V/Copy · LeaveConfirmModal · type-change confirm
- S-HUB-ENTRY hub `?resource=traffic-safety` · label Biểu 08
- S-PEER-SOTS / S-SKIP-MAP deep-link only
- mfeStdUrl=`http://localhost:9301/csdl-bieu-08`
- hub=`http://localhost:9301/so-ts/csdl-so-sach?resource=traffic-safety`
- Grid AC=YES · Leave=YES · Report AC=N/A

## API / next

- CRUD BFF `…/asset/csdl-records` · resource=traffic-safety · optional `type=` · typed DTO SA
- road-route `…/integration/road-routes/search`
- Next: **Design** control-map · prototype 45/11 · 1 child · reviewUrl
- SA: Schema_CsdlBieu8 + children · typed UiSchema · renumber formNo
- e2e: queued `/agent-qa*` only

## UNCLEAR

- none

## Cấm (compact)

Demo/LS SSOT · ERP.* · Guid IdCode · form 3 ô only · wide 45 entity · invent map · merge Sổ TS · yarn build/e2e/start:std ở PO · re-scan demo
