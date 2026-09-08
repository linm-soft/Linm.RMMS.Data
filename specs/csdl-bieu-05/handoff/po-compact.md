# handoff-compact — po · csdl-bieu-05

| | |
|--|--|
| schemaVersion | `1` |
| role | `po` |
| feature | `csdl-bieu-05` |
| title | CSDL Biểu 05 — Rãnh các loại |
| packKind | `list` |
| changeScope | `new_page` |
| status | `done` |
| taskId | `task_0ccf0f40` |
| analyTaskId | `task_fdcb7c28` |
| resource | `ditches` |
| formNo | `05` |
| columns | `18` |
| IdCode | `RN-` |
| peerSoTs | `so-ts-ditch` |
| autoApprove | `ON` |
| e2eQa | `ON` |
| contentHash | `sha256:fd4e6899790aa98d6bc4cb628dc9c0bc5efc90acb3abf03a7b157cf123590117` |
| headerFingerprint | `sha256:008898723c0a5b94fae7de8810903b1dcc39ccfd0dfa5d4a36dd398eb088ac2f` |
| skillVersion | `2026.08.25.02` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.08.31.2` |
| writtenAt | `2026-09-05T06:40:00.000Z` |

## Decisions

- packKind: **list** · Kind B A–D+F · Kind D Slideout 2col · Grid AC YES · Report AC N/A · Leave YES
- form: typed **18 cột** · **cấm** 3 ô detail* · **cấm** Full-page
- Q-ROUTE: **alias_now** `/csdl-bieu-05` + hub entry
- Q-PROV: **keep_static** P1 · master P2
- Q-APERTURE: **free_text** (WxH/m) · Number m DEFER
- Q-DRAIN: **free_text** P1 · number_cms DEFER
- Q-SHAPE: **rect_trap_round** (chữ nhật / thang / tròn)
- GAP-BIEU05-KIND-01: ditchKind hở/kín LOOKUP P1
- GAP-BIEU05-RANGE-01: kmFrom/kmTo filter+form P1
- GAP-CSDL-ROAD-01: SearchInput road-route P1
- GAP-CSDL-ORG-01: DEFER P2
- GAP-CSDL-XLS-01: OUT · toolbar stub OK
- GAP-BIEU05-PEER-01: deep-link · **cấm** merge Sổ TS form
- API: `api/v1/asset/csdl-records` · **cấm** ERP.* / infra invent
- open Q: **none** (autopilot chốt)

## Artifacts

| Kind | Path |
|------|------|
| requirement | `specs/csdl-bieu-05/po/requirement.md` |
| control-hint | `specs/_data-analy/features/csdl-bieu-05-control-hint.md` |
| real-data | `specs/_data-analy/features/csdl-bieu-05-real-data.md` |
| analy-compact | `specs/csdl-bieu-05/handoff/data_analy-compact.md` |
| STATUS | `specs/csdl-bieu-05/STATUS.md` |

## Inventory (slim)

| id | label | controlHint | notes |
|----|-------|-------------|-------|
| search | Tìm | SearchTextInput | filter |
| province | Tỉnh | Dropdown | LOOKUP_STATIC |
| status | TT | Dropdown | LOOKUP_STATIC |
| roadCode | Đường | SearchInput | road-route |
| kmFrom/kmTo | Km từ–đến | Number | filter+form |
| ditchKind | Hở/Kín | Dropdown | LOOKUP |
| code | Mã | Text ro | RN- |
| side | Bên | Dropdown | L/R/C/Both |
| structure | KC | Dropdown | BT/BTCT/… |
| shape | Hình | Dropdown | Q-SHAPE |
| apertureSize | Khẩu độ | Text | Q-APERTURE |
| lengthM | Cdài | Number | * |
| drainageCapacity | Thoát | Text | Q-DRAIN |
| builtYear | Năm | Number | |
| manageUnit | ĐV QL | Text | P2 SearchInput |
| ownerUnit | ĐV SH | Text | |
| notes/status | … | Textarea/Dropdown | |

## Screens / zones (ids only)

- S-LIST Kind B A/B/C/D+F · LinErpListFilterBar · cấm nút Tìm riêng
- S-FORM-* Kind D Slideout Z1–Z3 · C/E/V/Copy · LeaveConfirmModal
- S-HUB-ENTRY hub `?resource=ditches`
- S-PEER-SOTS / S-SKIP-MAP deep-link only
- mfeStdUrl=`http://localhost:9301/csdl-bieu-05`
- hub=`http://localhost:9301/so-ts/csdl-so-sach?resource=ditches`
- Grid AC=YES · Leave=YES · Report AC=N/A

## API / next

- CRUD BFF `…/asset/csdl-records` · resource=ditches · typed DTO SA
- road-route `…/integration/road-routes/search`
- Next: **Design** control-map · prototype 18 cột · reviewUrl
- SA: Schema_CsdlBieu5 · typed UiSchema ditches
- e2e: queued `/agent-qa*` only

## UNCLEAR

- none

## Cấm (compact)

Demo/LS SSOT · ERP.* · Guid IdCode · form 3 ô only · invent map · merge Sổ TS · yarn build/e2e/start:std ở PO · re-scan demo
