# Design — asset-hub (mobile hub)

| Field | Value |
|-------|-------|
| feature | `asset-hub` |
| title | [Design] [Mobile] Tài sản |
| this role | `design` · `/agent-design-mobile` |
| status | `confirmed` (autoApprove=ON) |
| design_confirm | **approve** (`task_c98a6c21`) |
| packKind | **`hub`** (PO confirm) |
| changeScope | `new_page` |
| kit_missing_confirm | **N/A** — reuse map hub kit dual (`LinmTopBar` · `LinmWalletCard` · `LinmHubTile` · `LinmSectionLabel` · `LinmListRow` · `LinmPrimaryButton` · `LinmToast`) |
| reviewUrlIos | `file:///Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/asset-hub/ui/prototype/ios/index.html#sc-asset-hub` |
| reviewUrlAndroid | `file:///Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/asset-hub/ui/prototype/android/index.html#sc-asset-hub` |
| ux-analy | `ui/ux-analy.md` §1–§9 |
| updatedAt | `2026-08-19T09:18:00.000Z` |
| taskId | `task_c98a6c21` |

## 0. Context & Demo

| ID | Path |
|----|------|
| CTX | `docs/context/features/asset-hub.md` |
| DEM-P1 | `specs/mobile-p1/ui/prototype/{ios,android}/index.html` `#sc-asset-hub` |
| DEM | `specs/asset-hub/ui/prototype/{ios,android}/index.html` |
| MAP | `docs/html-to-native-map.md` + `ui/html-to-native-map.md` |
| DA | `_data-analy/asset-hub-control-hint.md` · `asset-hub-bff-endpoints.md` · `asset-hub-action-tree.md` |
| PO | `po/requirement.md` |

**Cấm** `mfeStdUrl` / `yarn start:std`.

## 1. Pattern

| Surface | Push từ `home` · **không** Modal/Sheet · **không** tab riêng |
| Action this slug | Display wallet summary · load AI pending Draft · tap tiles/row → toast sibling (chưa ship) |
| Frame | iOS 390×844 · Android 412×915 |
| BFF | `GET integration/asset-types` · optional `GET integration/road-routes/search` · `GET ai-vision/asset-candidates` · **cấm** invent `api/v1/asset-hub` |

## 2. Screens / DES-MOB-*

| DES / sc-* | Tên VN | CTA / hành vi |
|------------|--------|---------------|
| `DES-MOB-ASSET-HUB` `#sc-asset-hub` | Tài sản | nav · wallet · hub-grid ×3 · row bản đồ · AI pending |
| `DES-MOB-ASSET-WALLET` | Ví hồ sơ TS | display only · **không** tap nav |
| `DES-MOB-ASSET-GRID` | Hub tiles | 32 loại · bản đồ · thu thập · quản lý |
| `DES-MOB-ASSET-MAP-ROW` | Bản đồ tài sản | cùng slug sibling `gis-map` |
| `DES-MOB-ASSET-AI` | Chờ xác nhận AI | ẩn khi 0 Draft · row đầu + **Xác nhận** |

### IA lock

```
home (tab Trang Chủ)
  → tile/wallet Tài sản → push #sc-asset-hub DES-MOB-ASSET-HUB   ← this pack
  → back «Trang Chủ» → pop home
  → sibling taps → LinmToast nhãn · **không** push sibling (GAP-MOB-ACT-06)
  → không child form / sheet (GAP-MOB-ACT-02 = none)
```

**Cấm** invent tab · watermark Gói · device label «iPhone»/«Android» trên title · submit Lưu/Tạo trên hub.

## 3. Field inventory (kit dual)

| Field | VN | Kit dual | SF ↔ Material | Notes |
|-------|----|----------|---------------|-------|
| navBack | Trang Chủ | `LinmTopBar` | `chevron.left` ↔ `ArrowBack` | `go('home')` |
| walletK | HỒ SƠ TÀI SẢN | `LinmWalletCard` eyebrow | — | display |
| walletT | QL.1 · Khu IV | `LinmWalletCard` title | — | optional route search · fail → demo |
| walletM | 32 loại KCHT… | `LinmWalletCard` subtitle | — | live count `asset-types` · fail → «32» |
| walletPatrol | Cột Km… đang tuần | `LinmWalletCard` line 3 | — | **iOS demo P1** · Android optional |
| tileTypes | 32 loại tài sản | `LinmHubTile` | `cube` ↔ `ViewInAr` | bg `#0C84C0` · toast · **cùng height hàng** |
| tileMap | Xem trên bản đồ | `LinmHubTile` | `scope` / binoculars ↔ `MyLocation`/`TravelExplore` | bg teal `#1B8A4A` · toast |
| secCollect | Thu thập | `LinmSectionLabel` | — | không route |
| tileCollect | Thủ công | `LinmHubTile` | `plus` ↔ `Add` | bg `#0C84C0` · toast |
| tileAI | Camera AI | `LinmHubTile` | `camera` ↔ `PhotoCamera` | bg indigo · toast |
| secManage | Quản lý | `LinmSectionLabel` | — | không route |
| tileList | Danh sách | `LinmHubTile` | `cube` ↔ `ViewInAr` | bg gray · toast |
| tileAdjust | Cập nhật / bớt | `LinmHubTile` | `minus` ↔ `Remove` | bg orange · toast |
| rowMap | Bản đồ tài sản | `LinmListRow` | same scope | cùng slug `gis-map` · toast **Bản đồ tài sản** |
| secAI | Chờ xác nhận AI | `LinmSectionLabel` | — | ẩn khi 0 Draft |
| aiTitle | Ứng viên TS-88 · Cống | `LinmListRow` title | — | candidate row 1 |
| aiSub | 91% · QL.1 Km… | `LinmListRow` subtitle | — | DTO |
| aiConfirm | Xác nhận | `LinmPrimaryButton` compact | — | toast **Xác nhận AI** |

Toast / banner → `LinmToast`. **Cấm** raw `LazyVGrid` / `LazyVerticalGrid` khi kit đã map.

**Hub tile align (GAP-MOB-AHUB-ALIGN-01):** mỗi hàng 2 cột **cùng height** — stretch theo ô cao nhất (CSS `align-items: stretch`) · subtitle slot **2 dòng** (`min-height` 32 / `2.6em`) · content `topLeading` · **cấm** card thấp hơn sibling vì wrap 1 dòng.

### Toast sibling (P1 — chưa ship)

| Control | Toast |
|---------|-------|
| 32 loại tài sản | **32 loại tài sản** |
| Xem trên bản đồ | **Xem trên bản đồ** |
| Bản đồ tài sản | **Bản đồ tài sản** |
| Thủ công | **Thủ công** |
| Camera AI | **Camera AI** |
| Danh sách | **Danh sách** |
| Cập nhật / bớt | **Cập nhật / bớt** |
| Xác nhận | **Xác nhận AI** |

## 4. Brand

| Token | Hex | Dùng |
|-------|-----|------|
| Primary | `#0C84C0` | tile 32 loại · Thủ công · CTA |
| Deep | `#086A9A` | wallet gradient start |
| Teal | `#1B8A4A` | tile/row bản đồ |
| Indigo iOS | `#5856D6` | Camera AI (iOS) |
| Indigo Android | `#6750A4` | Camera AI (Android M3) |
| Orange iOS | `#FF9500` | Cập nhật / bớt |
| Warn Android | `#E8A317` | Cập nhật / bớt |
| Gray | `#8E8E93` / `#79747E` | Danh sách |
| Surface | `#F2F2F7` | nền |

**Cấm** skin đỏ CCCD / Ministry · **cấm** M3 tím indicator ngoài tile Camera AI.

## 5. Parity note (iOS ↔ Android)

| Item | iOS | Android |
|------|-----|---------|
| Core copy tiles/sections/wallet | **cùng** | **cùng** |
| Wallet patrol line | **có** demo P1 | **không bắt buộc** |
| AI sub copy | «Độ tin cậy 91% · …» | «91% · …» (rút gọn OK) |
| Nav chrome | text back «Trang Chủ» | icon back · title **Tài sản** |
| Tile phụ «32 loại» | «Thông số kỹ thuật · checklist sự cố» | «Thông số · checklist sự cố» OK |

## 6. Cấm

- WebView HTML · `mfeStdUrl` · `yarn start:std`
- Invent tab / watermark Gói / `api/v1/asset-hub` / org API
- `UIAlert` / `AlertDialog` / `window.alert`
- Gộp sibling screens · start `pending_confirm`
- Hardcode «36» khi API trả count khác · block hub khi wallet/AI fail
- Ship process text «gen realapp» / device label trên title

## 7. Handoff → SA

| Field | Value |
|-------|-------|
| Next slash | `/agent-sa-mobile` |
| BFF | reuse `integration/*` · `ai-vision/asset-candidates` · Step 4b `/new-endpoint` **N/A** |
| Open Q | GAP-F-AHUB-01/02/03 đã chốt PO |
| Chain | roleOnly=design · **không** chain SA turn này |
| e2eQa | ON khi QA · `yarn e2e-qa-mobile` |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-design-mobile |
| skillVersion | 2026.08.19.07 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.19.20 |
| rulesVersion | 2026.08.19.23 |
| generatedAt | 2026-08-19T09:18:00.000Z |
| versionGate | rechecked |
| contentHash | sha256:c4be71e3e31309204f5a43ff4fd1aed611bcc7ab643bcdb054e0170334628bf2 |
| bffContentHash | sha256:6c32dc678168a7923cbd7c06a412ac5c3628d112a6d44ea22c4086128f9bf2a0 |

---
<!-- Version meta: skillId=agent-design-mobile skillVersion=2026.08.19.07 schemaVersion=1 workflowVersion=2026.08.19.20 rulesVersion=2026.08.19.23 versionGate=rechecked -->
