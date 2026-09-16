# Data-analy — asset-collect (controlHint · mobile Thu thập thủ công)

| | |
|---|---|
| feature | `asset-collect` |
| title | [Mobile] [Tài sản] -> Thủ công |
| role | `data_analy` · `/agent-data-analy-mobile` · mode `feature_context` |
| packKind | **`sheet`** (STATUS / `_form-type-mobile` · ACTION-TREE) · surface = full screen `#sc-asset-collect` |
| changeScope | `new_page` |
| status | **confirmed** |
| taskId | `task_e9f0235f` |
| autoApprove | `ON` |
| demo | `specs/mobile-p1/ui/prototype/{ios,android}/index.html` `#sc-asset-collect` · `DES-MOB-ASSET-COLLECT` · entry hub tile `#i-plus` |
| ctx | `docs/context/features/asset-collect.md` · peer `asset.md` · `asset-hub.md` · mobile P1 §7–8 · DOMAIN-MAP Asset |
| generatedAt | `2026-08-30T22:25:00.000Z` |

**Cấm:** watermark Gói · invent `api/v1/asset-collect` · invent Finance `api/v1/assets` · gộp `#sc-asset-ai` / adjust / list · ERP.* · mfeStdUrl · system alert · fake toast · gõ tay lat/lng.

## Skill packet (`/agent-data-analy-mobile`) — 4 file

| File | Skill step |
|------|------------|
| **file này** | 4–5 controlHint + tech factors |
| [`asset-collect-bff-endpoints.md`](asset-collect-bff-endpoints.md) | 6 BFF · **cấm invent** |
| [`asset-collect-action-tree.md`](asset-collect-action-tree.md) | 7 tree + share/reuse |
| [`asset-collect-real-data.md`](asset-collect-real-data.md) | 6b real-data bind |

## § Delta Current vs New (`new_page`)

| ID | Current (native) | New (CTX + demo + POST create) | Surface |
|----|------------------|--------------------------------|---------|
| GAP-MOB-ASSET-COLLECT-NAV-01 | Hub tile → toast `asset.tile.collect` · **không** push | Push `#sc-asset-collect` · back → `#sc-asset-hub` | asset-hub · collect |
| GAP-MOB-ASSET-COLLECT-SCR-01 | Không màn form | Full `#sc-asset-collect` · `DES-MOB-ASSET-COLLECT` | screen |
| GAP-MOB-ASSET-COLLECT-TYPE-01 | — | Select loại · GET `integration/asset-types` · dual option «Cầu» | select |
| GAP-MOB-ASSET-COLLECT-NAME-01 | — | Text «Tên / mô tả *» → `Name` | field |
| GAP-MOB-ASSET-COLLECT-ROUTE-01 | — | Readonly tuyến/Km · wire `Route`+`KmFrom` | field |
| GAP-MOB-ASSET-COLLECT-GPS-01 | — | Readonly ghim GPS * · Lat/Lng · deny chrome | GPS |
| GAP-MOB-ASSET-COLLECT-STATUS-01 | — | iOS «Tình trạng» · Android thiếu — dual | field |
| GAP-MOB-ASSET-COLLECT-PHOTO-01 | — | PhotoRow `#i-camera` · local capture | camera |
| GAP-MOB-ASSET-COLLECT-MEDIA-01 | — | **không** invent media API · GAP SA | media |
| GAP-MOB-ASSET-COLLECT-CTA-01 | — | Primary «Thêm tài sản» → POST create · toast Code | CTA |
| GAP-MOB-ASSET-COLLECT-PACK-01 | STATUS `sheet` | Demo full screen — PO/Design chốt | meta |

**Không** đổi (OUT): Camera AI · adjust PUT/DELETE · list/detail · web Kind B form · soft delete UI · nearby/bbox.

## Tech factors

| Factor | P1 | Notes |
|--------|----|-------|
| GPS | **yes** | Auto-pin * · accuracy · deny → `DES-MOB-GPS-DENY` · **cấm** fake · **cấm** gõ tay |
| Camera | **yes** | Capture slot `asset` · PhotoRow · upload path **GAP** |
| Offline | yes | POST fail → toast · queue draft optional P2 · **cấm** fake 200 |
| Map | n/a | Không embed map trên form · pin = GPS text |
| Biometric | n/a | |
| Push | n/a | |
| token | Keychain / Encrypted | Bearer trên GET/POST |

## § Tab index

`tabs: none` trên surface — demo `data-tab="home"` (shell Tab **Trang chủ** giữ). **Không** segment (`GAP-TAB-01`). Entry từ hub — không đổi IA Tab 5.

## § Demo dual

| # | iOS `#sc-asset-collect` | Android `#sc-asset-collect` | `#i-*` |
|---|-------------------------|------------------------------|--------|
| Back | text «Tài sản» + chevron | icon-only chevron | `#i-chevron-left` |
| Title | Thu thập thủ công | **same** | — |
| Loại * | 5 options (+ **Cầu**) | 4 options (thiếu Cầu) | Select |
| Tên / mô tả * | Cột Km 1556 | **same** | Text |
| Tuyến / lý trình * | QL.1 · Km 1556+000 readonly | **same** | Text readonly |
| Định vị ghim * | 11.5300, 109.0040 · ±5 m | **same** | Text readonly |
| Tình trạng | Tốt | **thiếu** | dual GAP-STATUS-01 |
| Ảnh | section «Ảnh» + slot | slot only (no label) | `#i-camera` |
| CTA | Thêm tài sản | **same** | PrimaryButton |
| Toast | Đã thêm tài sản · TS-… | **same** | Toast |

**Cấm** invent icon. Chrome top-bar text vs icon-btn = Design parity — không đổi field bind SSOT.

## controlHint — `#sc-asset-collect` (`DES-MOB-ASSET-COLLECT`)

| Field | VN | controlHint | Size | Kit | Notes |
|-------|----|-------------|------|-----|-------|
| navBack | Tài sản | BackButton | 16 | `LinmTopBar` leading `#i-chevron-left` | `go('asset-hub')` / pop hub |
| title | Thu thập thủ công | TopBar title | 17 | `LinmTopBar` | dual chrome only |
| typeSelect | Loại tài sản * | Select | label **13** / value **≥16** | `LinmSelect` | GET asset-types · code bind |
| nameField | Tên / mô tả * | TextField | 13 / ≥16 | `LinmTextField` | → `Name` |
| routeKm | Tuyến / lý trình * | TextField readonly | 13 / ≥16 | | display · wire Route+KmFrom |
| gpsPin | Định vị ghim tự động * | TextField readonly | 13 / ≥16 | | Lat,Lng · ±m · required UI |
| statusField | Tình trạng | TextField / Select | 13 / ≥16 | `LinmSelect` prefer | iOS · init-data Statuses · Android GAP |
| photoLabel | Ảnh | SectionLabel | **13** | | iOS · Android optional |
| photos | (slots) | PhotoRow | — | | local · MEDIA GAP |
| addPhoto | (camera) | CameraButton | — | `#i-camera` | `openCapture('asset')` |
| btnAdd | Thêm tài sản | PrimaryButton | 16 | `LinmPrimaryButton` | POST create · cùng slug |
| toastOk | Đã thêm tài sản · TS-… | Toast | 13–16 | `LinmToast` | Code từ response |
| toastErr | (lỗi mạng / 422) | Toast | 13–16 | `LinmToast` | **cấm** fake ok |
| gpsDeny | Định vị bị tắt | Modal | 17/13 | `DES-MOB-GPS-DENY` | reuse · CTA disabled |

### Entry (parent chrome — không control riêng slug)

| Field | VN | controlHint | Kit | Notes |
|-------|----|-------------|-----|-------|
| tileCollect | Thủ công | HubTile | `LinmHubTile` `#i-plus` | `asset-hub` · toast → **wire** `go('asset-collect')` |

## UNCLEAR

**none** trên path POST create live + init-data + asset-types. Open Q = dual STATUS/TYPE options · packKind sheet vs screen · media upload — PO/Design/SA · **không** bịa path.

## Handoff → PO

| Field | Value |
|-------|-------|
| DoD | Hub tile → form · GPS auto-pin · POST create thật · toast Code · dual parity gaps |
| Gaps | PACK-01 · STATUS-01 · TYPE-01 · MEDIA-01 · ROUTE-01 · GPS-01 |
| OUT | invent path · ERP.* · mfeStdUrl · gộp AI/adjust · gõ tay tọa độ |
| Next | PO `po/requirement.md` · **cấm** start Design/Dev trong task data_analy |

## Version meta

| Field | Value |
|-------|-------|
| skillId | agent-data-analy-mobile |
| skillVersion | 2026.08.25.01 |
| schemaVersion | 2 |
| workflowVersion | 2026.08.29.1 |
| rulesVersion | 2026.08.29.5 |
| generatedAt | 2026-08-30T22:25:00.000Z |
| versionGate | rechecked |
| contentHash | sha256:asset-collect-control-hint-20260830 |
| ctxContentHash | sha256:asset-collect-ctx-20260830 |
| demoContentHash | sha256:mobile-p1-sc-asset-collect-20260830 |
| taskId | `task_e9f0235f` |

---
<!-- Version meta: skillId=agent-data-analy-mobile skillVersion=2026.08.25.01 schemaVersion=2 workflowVersion=2026.08.29.1 rulesVersion=2026.08.29.5 versionGate=rechecked -->
