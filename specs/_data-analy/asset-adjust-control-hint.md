# Data-analy — asset-adjust (controlHint · mobile Cập nhật / bớt)

| | |
|---|---|
| feature | `asset-adjust` |
| title | [Mobile] [Tài sản] -> Cập nhật / bớt |
| role | `data_analy` · `/agent-data-analy-mobile` · mode `feature_context` |
| packKind | **`sheet`** (STATUS / `_form-type-mobile`) · surface demo = **full screen** `#sc-asset-adjust` |
| changeScope | `new_page` |
| status | **confirmed** |
| taskId | `task_0fcd1c99` |
| autoApprove | `ON` |
| demo | `specs/mobile-p1/ui/prototype/{ios,android}/index.html` `#sc-asset-adjust` · `DES-MOB-ASSET-ADJUST` · modal `#md-asset-remove` · entry hub `#i-minus` |
| ctx | `docs/context/features/asset-adjust.md` · peer `asset.md` · `asset-hub.md` · `asset-detail.md` · DOMAIN-MAP Asset |
| generatedAt | `2026-08-30T23:30:00.000Z` |

**Cấm:** watermark Gói · invent `api/v1/asset-adjust` · invent Finance `api/v1/assets` · gộp collect / AI / list · ERP.* · mfeStdUrl · system `confirm()` · fake toast · hard delete.

## Skill packet (`/agent-data-analy-mobile`) — 4 file

| File | Skill step |
|------|------------|
| **file này** | 4–5 controlHint + tech factors |
| [`asset-adjust-bff-endpoints.md`](asset-adjust-bff-endpoints.md) | 6 BFF · **cấm invent** |
| [`asset-adjust-action-tree.md`](asset-adjust-action-tree.md) | 7 tree + share/reuse |
| [`asset-adjust-real-data.md`](asset-adjust-real-data.md) | 6b real-data bind |

## § Delta Current vs New (`new_page`)

| ID | Current (native) | New (CTX + demo + GET/DELETE) | Surface |
|----|------------------|-------------------------------|---------|
| GAP-MOB-ASSET-ADJUST-NAV-01 | Hub tile → toast `asset.tile.adjust` · **không** push | Push `#sc-asset-adjust` · back → `#sc-asset-hub` | asset-hub · adjust |
| GAP-MOB-ASSET-ADJUST-SCR-01 | Không màn | Full `#sc-asset-adjust` · `DES-MOB-ASSET-ADJUST` | screen |
| GAP-MOB-ASSET-ADJUST-SEARCH-01 | — | SearchField · GET `?search=` · dual placeholder | search |
| GAP-MOB-ASSET-ADJUST-LIST-01 | — | ListRow Code·Type · Route·Km · live GET | list |
| GAP-MOB-ASSET-ADJUST-EDIT-01 | — | «Sửa» → `asset-detail` · PUT form **OUT** demo | nav |
| GAP-MOB-ASSET-ADJUST-DEL-01 | — | «Bớt» → modal · DELETE soft · toast Code | modal+API |
| GAP-MOB-ASSET-ADJUST-PACK-01 | STATUS `sheet` | Demo full screen — PO/Design chốt | meta |

**Không** đổi (OUT): Camera AI · collect POST · list riêng · web Kind B Edit · hard delete · invent media upload.

## Tech factors

| Factor | P1 | Notes |
|--------|----|-------|
| GPS | n/a | Không pin trên adjust list · edit GPS = OUT demo |
| Camera | n/a | Ảnh update OUT demo · MEDIA GAP nếu P2 edit |
| Offline | yes | GET/DELETE fail → toast · **cấm** fake 200 · queue draft optional P2 |
| Map | n/a | Không embed · không CTA gis trên adjust P1 |
| Biometric | n/a | |
| Push | n/a | |
| token | Keychain / Encrypted | Bearer trên GET/DELETE(/PUT) |

## § Tab index

`tabs: none` trên surface — demo `data-tab="home"` (shell Tab **Trang chủ** giữ). **Không** segment (`GAP-TAB-01`). Entry từ hub — không đổi IA Tab 5.

## § Demo dual

| # | iOS `#sc-asset-adjust` | Android `#sc-asset-adjust` | `#i-*` |
|---|------------------------|----------------------------|--------|
| Back | text «Tài sản» + chevron | icon-only chevron | `#i-chevron-left` |
| Title | Cập nhật / bớt | **same** | — |
| Search | Tìm mã TS cần sửa hoặc bớt… | Tìm mã TS… | `#i-search` |
| Rows | 2 demo rows | 1 demo row | ListRow |
| Sửa | Secondary filled | text primary | btn |
| Bớt | Primary red filled | text error | btn |
| Modal | `#md-asset-remove` copy full | **same** copy | `DES-MOB-ASSET-REMOVE` |
| Toast | Đã bớt tài sản · TS-… | **same** | Toast |

**Cấm** invent icon. Chrome top-bar text vs icon-btn = Design parity — không đổi field bind SSOT.

## controlHint — `#sc-asset-adjust` (`DES-MOB-ASSET-ADJUST`)

| Field | VN | controlHint | Size | Kit | Notes |
|-------|----|-------------|------|-----|-------|
| navBack | Tài sản | BackButton | 16 | `LinmTopBar` leading `#i-chevron-left` | `go('asset-hub')` / pop hub |
| title | Cập nhật / bớt | TopBar title | 17 | `LinmTopBar` | dual chrome only |
| search | Tìm mã TS… | SearchField | placeholder 13–16 | `LinmSearchField` `#i-search` | debounce → GET `?search=` |
| rowAsset | Code · Type | ListRow | title ≥16 / sub 13 | `LinmListRow` | bind Code · typeLabel(Type) |
| rowSub | Route · Km | ListRow subtitle | 13 | | `Route` · `Km {KmFrom}` |
| btnEdit | Sửa | SecondaryButton / TextButton | 13–16 | | nav `asset-detail` · pass Id · **cấm** enqueue submit |
| btnRemove | Bớt | DangerButton / TextButton | 13–16 | | open modal · **cấm** system alert |
| empty | (không có TS) | EmptyState | 13–16 | | sau GET empty |
| toastErr | (lỗi mạng) | Toast | 13–16 | `LinmToast` | **cấm** fake ok |
| toastOk | Đã bớt tài sản · {Code} | Toast | 13–16 | `LinmToast` | sau DELETE 200 |

### Modal `#md-asset-remove` (`DES-MOB-ASSET-REMOVE`) — cùng slug

| Field | VN | controlHint | Kit | Notes |
|-------|----|-------------|-----|-------|
| mdTitle | Bớt tài sản khỏi sổ? | ModalTitle | 17 | soft IsActive |
| mdBody | Ẩn khỏi danh sách hiện trường… | ModalBody | 13 | copy demo |
| mdConfirm | Bớt khỏi sổ | PrimaryButton (danger) | 16 | DELETE `asset/road-assets/{id}` · cùng slug |
| mdCancel | Giữ lại | SecondaryButton | 16 | close modal |

### Entry (parent chrome — không control riêng slug)

| Field | VN | controlHint | Kit | Notes |
|-------|----|-------------|-----|-------|
| tileAdjust | Cập nhật / bớt | HubTile | `LinmHubTile` `#i-minus` | owner `asset-hub` · wire push |

## UNCLEAR

**none** trên path GET list + DELETE soft live. Open Q = packKind sheet vs screen · PUT edit UI P2 · dual search/row chrome — PO/Design · **không** bịa path.

## Handoff → PO

| Field | Value |
|-------|-------|
| DoD | Hub tile → list · search GET · Sửa → detail · Bớt soft DELETE · toast Code · dual parity |
| Gaps | PACK-01 · SEARCH-01 · ROW-01 · EDIT-01 · MEDIA-01 |
| OUT | invent path · ERP.* · mfeStdUrl · gộp collect/AI · hard delete · system confirm |
| Next | PO `po/requirement.md` · **cấm** start Design/Dev trong task data_analy |

## Version meta

| Field | Value |
|-------|-------|
| skillId | agent-data-analy-mobile |
| skillVersion | 2026.08.25.01 |
| schemaVersion | 2 |
| workflowVersion | 2026.08.29.1 |
| rulesVersion | 2026.08.29.5 |
| generatedAt | 2026-08-30T23:30:00.000Z |
| versionGate | rechecked |
| contentHash | sha256:asset-adjust-control-hint-20260830 |
| ctxContentHash | sha256:asset-adjust-ctx-20260830 |
| demoContentHash | sha256:mobile-p1-sc-asset-adjust-20260830 |
| taskId | `task_0fcd1c99` |

---
<!-- Version meta: skillId=agent-data-analy-mobile skillVersion=2026.08.25.01 schemaVersion=2 workflowVersion=2026.08.29.1 rulesVersion=2026.08.29.5 versionGate=rechecked -->
