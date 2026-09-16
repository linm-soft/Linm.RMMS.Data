# Design — asset-adjust (mobile · Cập nhật / bớt)

| Field | Value |
|-------|-------|
| feature | `asset-adjust` |
| title | [Design] [Mobile] [Tài sản] -> Cập nhật / bớt |
| this role | `design` · `/agent-design-mobile` |
| status | `confirmed` (autoApprove=ON) |
| design_confirm | **approve** (`task_6476a9ab`) |
| packKind | **`screen`** (PO chốt · đóng GAP-MOB-ASSET-ADJUST-PACK-01) |
| changeScope | `new_page` |
| stack | `native_dual` |
| kit_missing_confirm | **N/A** — reuse map dual (`LinmTopBar` · `LinmSearchField` · `LinmListRow` · Secondary/Danger/Text · Modal · `LinmToast` · EmptyState) |
| reviewUrlIos | `file:///Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/asset-adjust/ui/prototype/ios/index.html#sc-asset-adjust` |
| reviewUrlAndroid | `file:///Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/asset-adjust/ui/prototype/android/index.html#sc-asset-adjust` |
| ux-analy | `ui/ux-analy.md` §1–§9 |
| demo-parity | `ui/review/demo-parity.md` · Must **closed** |
| prior · po | `confirmed` · `po/requirement.md` · `sha256:asset-adjust-po-requirement-20260830` |
| prior · data_analy | `confirmed` · `_data-analy/asset-adjust-control-hint.md` · `asset-adjust-real-data.md` · **hash skip** · **cấm** re-scan |
| updatedAt | `2026-08-30T23:40:00.000Z` |
| taskId | `task_6476a9ab` |

## 0. Context & Demo

| ID | Path |
|----|------|
| CTX | `docs/context/features/asset-adjust.md` (inventory từ DA — **không** crawl) |
| DEM-P1 | `specs/mobile-p1/ui/prototype/{ios,android}/index.html` `#sc-asset-adjust` · `DES-MOB-ASSET-ADJUST` · `#md-asset-remove` (cite DA) |
| DEM | `specs/asset-adjust/ui/prototype/{ios,android}/index.html` |
| MAP | `docs/html-to-native-map.md` + `ui/html-to-native-map.md` |
| DA | `_data-analy/asset-adjust-control-hint.md` · `asset-adjust-bff-endpoints.md` · `asset-adjust-action-tree.md` · `asset-adjust-real-data.md` |
| PO | `po/requirement.md` |

**Cấm** `mfeStdUrl` / `yarn start:std` / WebView HTML-as-app / ERP.*.  
**Hash skip:** inventory + controlHint + real-data §A+§B từ DA — **cấm** re-scan demo HTML / crawl CTX (`GAP-DES-DEMO-RESCAN-01`).

## 1. Pattern

| Surface | Full screen push `#sc-asset-adjust` · shell tab `home` selected · **không** Modal/Sheet pack chrome · **không** `#sheet-*` |
| Action this slug | GET list(+search) · display rows · Sửa nav detail · open modal · DELETE soft · toast |
| Modal cùng slug | `#md-asset-remove` `DES-MOB-ASSET-REMOVE` — confirm overlay · **không** đổi packKind |
| Frame | iOS 390×844 · Android 412×915 |
| BFF | GET `asset/road-assets?search=&page=&pageSize=` · DELETE `asset/road-assets/{id}` soft · **cấm** invent `api/v1/asset-adjust` · PUT UI **OUT** P1 |

## 2. Screens / DES-MOB-*

| DES / sc-* | Tên VN | CTA / hành vi |
|------------|--------|---------------|
| `DES-MOB-ASSET-ADJUST` `#sc-asset-adjust` | Cập nhật / bớt | Search · ListRow · Sửa · Bớt |
| `DES-MOB-ASSET-REMOVE` `#md-asset-remove` | Bớt tài sản khỏi sổ? | Bớt khỏi sổ · Giữ lại |
| `DES-MOB-TABBAR` | Tab 5 | chrome shell · selected **Trang Chủ** · **cấm** invent / reorder |

### IA lock

```
(auth) Login → Tab 5
  … → Trang Chủ / asset-hub tile Cập nhật / bớt #i-minus → push #sc-asset-adjust DES-MOB-ASSET-ADJUST  ← this pack
  Back → go('asset-hub')
  Search debounce → GET ?search=
  Sửa → go('asset-detail') + Id · **cấm** PUT form P1
  Bớt → #md-asset-remove → DELETE soft → toast Code · remove row
  GET fail → demo SSOT rows + toast · screen vẫn mở · **cấm** fake 200
  Empty → EmptyState
```

**Cấm** invent tab 6 · segment trên adjust · collect/AI/list/detail form trên slug · watermark Gói · device label · «Có mạng» · bottom-sheet pack chrome.

## 3. Field inventory (kit dual)

| Field | VN | Kit dual | SF ↔ Material | Notes |
|-------|----|----------|---------------|-------|
| navBack | Tài sản | `LinmTopBar` leading `#i-chevron-left` | `chevron.left` ↔ `ArrowBack` | `go('asset-hub')` · iOS text+chevron · Android icon-only |
| title | Cập nhật / bớt | `LinmTopBar` title | — | dual **same** |
| search | Tìm mã TS cần sửa hoặc bớt… | `LinmSearchField` `#i-search` | `magnifyingglass` ↔ `Search` | SSOT dài dual (đóng SEARCH-01) · debounce GET `?search=` |
| rowAsset | Code · Type | `LinmListRow` | — | `Code` · `typeLabel(Type)` · title ≥**16** |
| rowSub | Route · Km | ListRow subtitle | — | `Route` · `Km {KmFrom}` · sub **13** |
| btnEdit | Sửa | SecondaryButton / TextButton | — | iOS filled secondary · Android text primary · `go('asset-detail')` + Id · **cấm** PUT |
| btnRemove | Bớt | DangerButton / TextButton | — | iOS filled danger · Android text error · open `#md-asset-remove` · **cấm** system alert |
| empty | (không có TS) | EmptyState | — | sau GET empty |
| toastErr | (lỗi mạng) | `LinmToast` | — | GET/DELETE fail · **cấm** fake ok |
| toastOk | Đã bớt tài sản · {Code} | `LinmToast` | — | sau DELETE 200 · Code từ row cache |
| mdTitle | Bớt tài sản khỏi sổ? | ModalTitle | — | **17** |
| mdBody | Ẩn khỏi danh sách hiện trường… | ModalBody | — | copy demo SSOT · **13** |
| mdConfirm | Bớt khỏi sổ | PrimaryButton (danger) | — | DELETE `asset/road-assets/{id}` |
| mdCancel | Giữ lại | SecondaryButton | — | close modal |
| tabHome | Trang Chủ | `LinmTabBar` | house ↔ Home | selected · label **13** |

### Entry (parent chrome — không control riêng slug)

| Field | VN | Kit | Notes |
|-------|----|-----|-------|
| tileAdjust | Cập nhật / bớt | `LinmHubTile` `#i-minus` | owner `asset-hub` · wire toast → **push** adjust |

### Demo / fallback SSOT

| Field | Value |
|-------|-------|
| Title | Cập nhật / bớt |
| Search | Tìm mã TS cần sửa hoặc bớt… (dual) |
| Row1 | TS-20260810-014 · Cống ngang · QL.1 · Km 1556+000 |
| Row2 (iOS sample) | TS-20260809-088 · Biển P.127 · HCM · Biển báo |
| Modal | Bớt tài sản khỏi sổ? · body demo · Bớt khỏi sổ · Giữ lại |
| Toast ok | Đã bớt tài sản · TS-20260810-014 |
| Back | Tài sản → hub |

Demo row count (iOS 2 / Android 1) = sample fallback only · live = GET list (`GAP-MOB-ASSET-ADJUST-ROW-01`).

Toast → `LinmToast`. **Cấm** raw `NavigationBar` / M3 bar / `TabView` / `UIAlert` / `AlertDialog` / `window.alert` / system `confirm()`.

## 4. Brand

| Token | Hex | Dùng |
|-------|-----|------|
| Primary | `#0C84C0` | tint · tab selected · secondary text |
| Deep | `#086A9A` | header deep |
| Success | `#3CB448` | — |
| Warn | `#FCB43C` | — |
| Danger | `#FF3B30` / `#B3261E` | Bớt filled / text error · modal confirm |
| Surface iOS | `#F2F2F7` | nền |
| Surface Android | `#FFFBFE` | nền Material · DEFER chrome |

**Cấm** skin đỏ CCCD / Ministry · **cấm** M3 tím indicator.

## 5. Typography

| Role | Size | Note |
|------|------|------|
| tab / caption / sub / modal body | **13** | `GAP-TYP-01` |
| search placeholder | **13–16** | dual |
| row title | **≥16** | |
| modal title / topbar | **17** | Android title chrome **22** OK Material |
| CTA row btn | **13–16** | iOS filled 13 · Android text 14 |

## 6. Cấm

- WebView HTML · `mfeStdUrl` · `yarn start:std` / e2e ở role này
- Invent tab 6 / segment trên adjust / collect·AI·list·detail form trên slug
- Invent `AssetAdjustController` / `api/v1/asset-adjust` / Finance `api/v1/assets`
- PUT edit form / inline tình trạng·ảnh P1 · hard delete · invent media path
- Fake 200 khi GET/DELETE fail · ship `demoItems` khi BFF live
- `UIAlert` / `AlertDialog` / `window.alert` / system `confirm()`
- Watermark Gói / device label / «Có mạng» / proto tap-cycle
- Start siblings `pending_confirm` · re-scan demo (`GAP-DES-DEMO-RESCAN-01`)
- Step 4b / migration / e2e ở role design · bottom-sheet chrome (pack = **screen**)

## 7. Handoff → SA

| Field | Value |
|-------|-------|
| Next slash | `/agent-sa-mobile` |
| BFF | GET list + DELETE soft · PUT domain OUT UI P1 · Step 4b `/new-endpoint` **N/A** · XCO giữ |
| Real-data | `_data-analy/asset-adjust-real-data.md` §A+§B |
| Open Q | PACK/SEARCH/ROW/EDIT/MEDIA/NAV **PO chốt** · Design closed dual search placeholder dài · packKind **screen** · modal in-app |
| Chain | roleOnly=design · **không** chain SA turn này (`GAP-PKT-ROLE-01`) |
| e2eQa | ON khi QA · `yarn e2e-qa-mobile` · **cấm** role này |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-design-mobile |
| skillVersion | 2026.08.25.01 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.31.2 |
| rulesVersion | 2026.08.31.2 |
| generatedAt | 2026-08-30T23:40:00.000Z |
| versionGate | rechecked |
| contentHash | sha256:asset-adjust-design-20260830 |
| priorPoHash | sha256:asset-adjust-po-requirement-20260830 |
| priorControlHintHash | sha256:asset-adjust-control-hint-20260830 |
| priorRealDataHash | sha256:asset-adjust-real-data-20260830 |
| demoContentHash | sha256:mobile-p1-sc-asset-adjust-20260830 |
| ctxContentHash | sha256:asset-adjust-ctx-20260830 |
| taskId | `task_6476a9ab` |

---
<!-- Version meta: skillId=agent-design-mobile skillVersion=2026.08.25.01 schemaVersion=1 workflowVersion=2026.08.31.2 rulesVersion=2026.08.31.2 versionGate=rechecked -->
