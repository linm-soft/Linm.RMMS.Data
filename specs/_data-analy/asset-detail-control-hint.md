# Data-analy — asset-detail (controlHint · mobile Chi tiết tài sản)

| | |
|---|---|
| feature | `asset-detail` |
| title | [Mobile] [Tài sản] -> Chi tiết tài sản |
| role | `data_analy` · `/agent-data-analy-mobile` · mode `feature_context` |
| packKind | **`sheet`** (STATUS / `_form-type-mobile` · ACTION-TREE) · surface = full screen `#sc-asset-detail` |
| changeScope | `new_page` |
| status | **confirmed** |
| taskId | `task_f6ca06ad` |
| autoApprove | `ON` |
| demo | `specs/mobile-p1/ui/prototype/{ios,android}/index.html` `#sc-asset-detail` · `DES-MOB-ASSET-DETAIL` · entry `#sc-asset-list` `row-asset-*` |
| ctx | `docs/context/features/asset-detail.md` · peer `asset.md` · `asset-hub.md` · mobile list `asset` · DOMAIN-MAP Asset |
| generatedAt | `2026-08-30T21:15:00.000Z` |

**Cấm:** watermark Gói · invent `api/v1/asset-detail` · invent Finance `api/v1/assets` · gộp `#sc-asset-list` / collect / adjust / AI · ERP.* · mfeStdUrl · system alert · fake toast · PUT/DELETE trên slug này.

## Skill packet (`/agent-data-analy-mobile`) — 4 file

| File | Skill step |
|------|------------|
| **file này** | 4–5 controlHint + tech factors |
| [`asset-detail-bff-endpoints.md`](asset-detail-bff-endpoints.md) | 6 BFF · **cấm invent** |
| [`asset-detail-action-tree.md`](asset-detail-action-tree.md) | 7 tree + share/reuse |
| [`asset-detail-real-data.md`](asset-detail-real-data.md) | 6b real-data bind |

## § Delta Current vs New (`new_page`)

| ID | Current (native) | New (CTX + demo + GET by id) | Surface |
|----|------------------|------------------------------|---------|
| GAP-MOB-ASSET-DET-NAV-01 | List row → toast `asset.list.toast.detail` · **không** push | Push `#sc-asset-detail` · back → `#sc-asset-list` | asset · asset-detail |
| GAP-MOB-ASSET-DET-SCR-01 | Không màn chi tiết | Full `#sc-asset-detail` · `DES-MOB-ASSET-DETAIL` · hero + rows + CTA | screen |
| GAP-MOB-ASSET-DET-DATA-01 | — | GET `asset/road-assets/{id}` · fail → demo SSOT · **cấm** ship mock-only | BFF |
| GAP-MOB-ASSET-DET-MAP-01 | — | «Ghim trên bản đồ» → `gis-map` (nav) · **không** API slug này | CTA |
| GAP-MOB-ASSET-DET-TITLE-01 | — | iOS «Chi tiết» · Android «Chi tiết tài sản» — Design dual | chrome |
| GAP-MOB-ASSET-DET-GPS-01 | — | Android row Tọa độ · iOS thiếu — dual · bind `Lat`/`Lng` | row |
| GAP-MOB-ASSET-DET-TYPE-01 | List mapper typeLabel | Reuse `AssetDtoMapper.typeLabel` · **không** lookup P1 | field |
| GAP-MOB-ASSET-DET-PACK-01 | STATUS `sheet` | Demo full screen — PO/Design chốt label | meta |

**Không** đổi (OUT): list search/filter · collect · adjust PUT/DELETE · Camera AI · web Kind B form · soft delete UI.

## Tech factors

| Factor | P1 | Notes |
|--------|----|-------|
| GPS | display | Readonly `Lat`/`Lng` khi có · **không** request location trên detail |
| Camera | n/a | sibling collect/AI |
| Offline | yes | GET fail → demo SSOT fallback · toast lỗi · **cấm** fake 200 |
| Map | nav | CTA → `gis-map` · **không** embed map P1 |
| Biometric | n/a | |
| Push | n/a | |
| token | Keychain / Encrypted | Bearer trên GET |

## § Tab index

`tabs: none` trên surface — demo `data-tab="home"` (shell Tab **Trang chủ** giữ). **Không** segment (`GAP-TAB-01`). Entry từ list / adjust — không đổi IA Tab 5.

## § Demo dual

| # | iOS `#sc-asset-detail` | Android `#sc-asset-detail` | `#i-*` |
|---|------------------------|----------------------------|--------|
| Back | text «Tài sản» + chevron | icon-only chevron | `#i-chevron-left` |
| Title | Chi tiết | Chi tiết tài sản | — · Design parity |
| Mã TS caption | Mã TS · 13 | **same** | — |
| Code hero | TS-20260810-014 · **28** bold | TS-20260810-014 · **24** bold | — |
| Loại | Cống | **same** | — |
| Tuyến · lý trình | QL.1 · Km 1556+000 | **same** | — |
| Tọa độ | **thiếu** | 11.5300, 109.0040 | dual GAP-MOB-ASSET-DET-GPS-01 |
| CTA | Ghim trên bản đồ | **same** | PrimaryButton |
| Entry list | toast → **wire push** | **same** | `row-asset-{i}` |

**Cấm** invent icon. Chrome top-bar text vs icon-btn = Design parity — không đổi field bind.

## controlHint — `#sc-asset-detail` (`DES-MOB-ASSET-DETAIL`)

| Field | VN | controlHint | Size | Kit | Notes |
|-------|----|-------------|------|-----|-------|
| navBack | Tài sản | BackButton | 16 | `LinmTopBar` leading `#i-chevron-left` | `go('asset-list')` / pop list |
| title | Chi tiết / Chi tiết tài sản | TopBar title | 17 | `LinmTopBar` | iOS vs Android — GAP title |
| codeLabel | Mã TS | Text caption | **13** | | fixed |
| codeValue | TS-* | Text display | **≥24 / 28** bold | | GET `Code` |
| rowType | Loại | ListRow no-icon | label **13** / value **≥16** | `LinmListRow` | `Type` + typeLabel |
| rowRouteKm | Tuyến · lý trình | ListRow no-icon | 13 / ≥16 | `LinmListRow` | `Route` · `KmFrom` (+ `KmTo`?) |
| rowGps | Tọa độ | ListRow no-icon | 13 / ≥16 | `LinmListRow` | Android · `Lat`,`Lng` · ẩn nếu null · dual GAP |
| btnPinMap | Ghim trên bản đồ | PrimaryButton | 16 | `LinmPrimaryButton` | `go('gis-map')` · pass id/coords |
| empty404 | (không tìm thấy) | EmptyChrome | 13–16 | | NotFound · back list |
| toastErr | (lỗi mạng) | Toast | 13–16 | `LinmToast` | GET fail · **cấm** fake ok |

### Entry (parent chrome — không control riêng slug)

| Field | VN | controlHint | Kit | Notes |
|-------|----|-------------|-----|-------|
| rowAsset | (live code · name) | ListRow nav | `LinmListRow` `#i-cube` | `asset` list · `row-asset-{i}` · toast → **wire** `go('asset-detail')` + `Id` |
| btnSuaAdjust | Sửa | SecondaryButton | adjust row | `asset-adjust` · `go('asset-detail')` · **không** gộp adjust |

## UNCLEAR

**none** trên path GET live. Open Q = title dual · GPS row dual · packKind sheet vs screen — PO/Design · **không** bịa path.

## Handoff → PO

| Field | Value |
|-------|-------|
| DoD | Row list → push detail · GET by id thật · CTA map nav · demo fallback |
| Gaps | TITLE-01 · GPS-01 · PACK-01 · TYPE-01 |
| OUT | PUT/DELETE · invent path · ERP.* · mfeStdUrl |
| Next | PO `po/requirement.md` · **cấm** start Design/Dev trong task data_analy |

## Version meta

| Field | Value |
|-------|-------|
| skillId | agent-data-analy-mobile |
| skillVersion | 2026.08.25.01 |
| schemaVersion | 2 |
| workflowVersion | 2026.08.29.1 |
| rulesVersion | 2026.08.29.5 |
| generatedAt | 2026-08-30T21:15:00.000Z |
| versionGate | rechecked |
| contentHash | sha256:asset-detail-control-hint-20260830 |
| ctxContentHash | sha256:asset-detail-ctx-20260830 |
| demoContentHash | sha256:mobile-p1-sc-asset-detail-20260830 |
| taskId | `task_f6ca06ad` |

---
<!-- Version meta: skillId=agent-data-analy-mobile skillVersion=2026.08.25.01 schemaVersion=2 workflowVersion=2026.08.29.1 rulesVersion=2026.08.29.5 versionGate=rechecked -->
