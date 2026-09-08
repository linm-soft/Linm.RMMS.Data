# handoff-compact — po · csdl-bieu-03

| | |
|--|--|
| schemaVersion | `1` |
| role | `po` |
| feature | `csdl-bieu-03` |
| title | CSDL Biểu 03 — Hầm đường bộ |
| packKind | `list` |
| changeScope | `new_page` |
| status | `done` |
| taskId | `task_69bca3c6` |
| analyTaskId | `task_df175ffd` |
| resource | `road-tunnels` |
| formNo | `03` |
| columns | `42` |
| IdCode | `TN-` |
| peerSoTs | none (—) · Sổ 6 QL cầu/hầm deep-link only |
| autoApprove | `ON` |
| e2eQa | `ON` |
| contentHash | `sha256:2c03537918bbda56c29e1e1ef98cc081cc4e72c94447a1ac2f87f06bd6f9310e` |
| headerFingerprint | `sha256:60f7ea4153b5853222bdeaf2679929a6e4c5b66b6973bcfe12e5bd9dd3fcfbcc` |
| skillVersion | `2026.08.25.02` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.08.31.2` |
| writtenAt | `2026-09-05T08:40:30.000Z` |

## Decisions

- packKind: **list** · Kind B A–D+F · Kind D Slideout 2col sectioned · Grid AC YES · Report AC N/A · Leave YES
- form: typed **42 cột** · **cấm** 3 ô detail* · **cấm** Full-page
- Q-GPS: **six_numbers** (lat/lng×3) · cấm map canvas
- Q-TUBE: **two_rows** · 2 ống = 2 bản ghi GPS · cấm 1 row 2 bộ GPS · child_table REJECT
- Q-VENT: **text** · ventilationType/designLoad Text P1 · SA enum/unit later
- Q-ROUTE: **alias_now** `/csdl-bieu-03` + hub entry
- Q-PROV: **keep_static** P1 · master P2
- Q-SECTION: **sectioned** (GPS/kết cấu/thoát+PCCC/thiết bị)
- GAP-CSDL-ROAD-01: SearchInput road-route P1
- GAP-CSDL-ORG-01: DEFER P2
- GAP-CSDL-XLS-01: OUT
- GAP-BIEU03-PEER-01: deep-link · **cấm** merge Sổ 6
- GAP-BIEU03-DMAP-01: SA thêm slug
- API: `api/v1/asset/csdl-records` · **cấm** ERP.* / infra
- open Q: **none** (autopilot chốt)

## Artifacts

| Kind | Path |
|------|------|
| requirement | `specs/csdl-bieu-03/po/requirement.md` |
| control-hint | `specs/_data-analy/features/csdl-bieu-03-control-hint.md` |
| real-data | `specs/_data-analy/features/csdl-bieu-03-real-data.md` |
| analy-compact | `specs/csdl-bieu-03/handoff/data_analy-compact.md` |
| STATUS | `specs/csdl-bieu-03/STATUS.md` |

## Inventory (slim)

| id | label | controlHint | notes |
|----|-------|-------------|-------|
| search | Tìm | SearchTextInput | filter |
| province | Tỉnh | Dropdown | LOOKUP_STATIC |
| status | TT | Dropdown | LOOKUP_STATIC |
| roadCode | Đường | SearchInput | road-route |
| kmFrom/kmTo | Km | Number | filter+form |
| tunnelClass | Cấp hầm | Dropdown | filter optional |
| tubeCount | Số ống | Number | filter+form * |
| code | Mã | Text ro | TN- |
| tunnelName | Tên hầm | Text | * |
| gps* ×6 | GPS 3 điểm | Number | Q-GPS |
| crossingType/tunnelClass | Xuyên/cấp | Dropdown | STRUCT |
| tubeIndex | Ống số | Number | Q-TUBE * if >1 |
| lining*/clearance*/section*/carriage*/pavement* | Kết cấu | Number/Text/Dropdown | STRUCT |
| drain*/shoulder* | Thoát/lề | Number | DRAIN |
| fire*/fan*/light*/cctv/vms | PCCC/TB | Checkbox/Number | FIRE |
| lengthM | Cdài | Number | * |
| ventilationType/designLoad | Vent/tải | Text | Q-VENT |
| manageUnit | ĐV QL | Text | P2 SearchInput |
| ownerUnit | Chủ quản | Text | optional |

## Screens / zones (ids only)

- S-LIST Kind B A/B/C/D+F · LinErpListFilterBar · cấm nút Tìm riêng
- S-FORM-* Kind D Slideout Z1–Z3 sectioned · C/E/V/Copy · LeaveConfirmModal
- S-HUB-ENTRY hub `?resource=road-tunnels`
- S-PEER-SO6 / S-SKIP-MAP deep-link only
- mfeStdUrl=`http://localhost:9301/csdl-bieu-03`
- hub=`http://localhost:9301/so-ts/csdl-so-sach?resource=road-tunnels`
- Grid AC=YES · Leave=YES · Report AC=N/A

## API / next

- CRUD BFF `…/asset/csdl-records` · resource=road-tunnels · typed DTO SA · Schema_CsdlBieu3
- road-route `…/integration/road-routes/search`
- Tube: 2 ống → 2 POST/Copy
- Next: **Design** control-map · prototype 42 cột sectioned · reviewUrl
- SA: GPS/TUBE/VENT · DOMAIN-MAP slug
- e2e: queued `/agent-qa*` only

## UNCLEAR

- none

## Cấm (compact)

Demo/LS SSOT · ERP.* · Guid IdCode · form 3 ô only · invent map · merge Sổ 6 · 1 row 2 bộ GPS · yarn build/e2e/start:std ở PO · re-scan demo
