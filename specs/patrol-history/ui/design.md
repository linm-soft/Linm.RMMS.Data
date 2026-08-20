# Design — patrol-history (mobile list · Lịch sử ca)

| Field | Value |
|-------|-------|
| feature | `patrol-history` |
| title | [Design] [Mobile] [Tuần đường] -> Lịch sử phiên |
| this role | `design` · `/agent-design-mobile` |
| status | `confirmed` (autoApprove=ON) |
| design_confirm | **approve** (`task_c3eae165`) |
| changeScope | `new_page` |
| packKind | **`list`** (PO confirm) |
| stack | `native_dual` |
| kit_missing_confirm | **N/A** — reuse map list kit dual (`LinmTopBar` / `LinmLargeTitle` / `LinmSearchField` / `LinmListRow` / `LinmBadge`) |
| reviewUrlIos | `file:///Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/patrol-history/ui/prototype/ios/index.html#sc-patrol-history` |
| reviewUrlAndroid | `file:///Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/patrol-history/ui/prototype/android/index.html#sc-patrol-history` |
| ux-analy | `ui/ux-analy.md` §1–§9 |
| demo-parity | `ui/review/demo-parity.md` |
| prior | PO `confirmed` · `po/requirement.md` · contentHash `sha256:patrol-history-control-hint-20260820` · bffContentHash `sha256:patrol-history-mobile-bff-20260820` |
| autoApprove | **ON** |
| e2eQa | ON khi QA · `yarn e2e-qa-mobile` · **cấm** `yarn start:std` / `mfeStdUrl` |
| updatedAt | `2026-08-20T04:25:00.000Z` |
| taskId | `task_c3eae165` |

## 0. Context & Demo

| ID | Path | Notes |
|----|------|-------|
| CTX-01 | `docs/context/features/patrol-history.md` | list · § UI · § API |
| CTX-02 | `docs/context/features/patrol.md` | domain sessions |
| CTX-03 | `docs/context/features/patrol-home.md` | parent entry row **Lịch sử phiên** |
| DEM-P1 | `specs/mobile-p1/ui/prototype/{ios,android}/index.html` `#sc-patrol-history` | visual SSOT copy · **không** board (`go('patrol-detail')` → toast · Android parity fixed) |
| DEM | `specs/patrol-history/ui/prototype/{ios,android}/index.html` `#sc-patrol-history` | board dual · PO toast |
| MAP | `docs/html-to-native-map.md` + `ui/html-to-native-map.md` | kit list |
| STR | `docs/mobile-strings.json` keys `patrol.*` | VN SSOT |
| DA | `_data-analy/patrol-history-control-hint.md` · `patrol-history-bff-endpoints.md` · `patrol-history-action-tree.md` · `patrol-history-real-data.md` | |
| PO | `po/requirement.md` | §5 controlHint · §7 chốt |

**Cấm** `mfeStdUrl` / `yarn start:std` / WebView HTML-as-app.

## 1. Pattern

| | |
|--|--|
| Surface | Push list · nav back + large title + search + rows · tab 5 shell giữ · **không** Modal/Sheet / in-screen tabs |
| FormMode | none (search ≠ form dirty) |
| Action this slug | Appear GET sessions · display · client search · toast Lọc / Chi tiết phiên |
| `devSlash` | `/agent-dev-ios` + `/agent-dev-android` |
| Frame | iOS 390×844 · Android 412×915 · safe area |

## 2. Screens / DES-MOB-*

| DES / sc-* | Tên VN | Zones | CTA |
|------------|--------|-------|-----|
| `DES-MOB-PAT-LIST` `#sc-patrol-history` | Lịch sử ca | Nav · large title · search · list · tab | toast / pop |
| `DES-MOB-PAT-LIST-NAV` | Nav | back **Tuần đường** · trailing **Lọc** | pop hub / toast |
| `DES-MOB-PAT-LIST-SEARCH` | Search | `#i-search` · hint | client filter |
| `DES-MOB-PAT-LIST-ROWS` | List | ≥4 rows no-icon + badge + chevron (iOS) | toast detail |
| `DES-MOB-TABBAR` | Tab 5 | Trang Chủ · **Tuần đường** · Vấn đề · Công việc · Tôi | shell |

### IA lock

```
(auth) Login → Tab 5
  Tuần đường (#sc-patrol-home)
    → quick row «Lịch sử phiên» → push #sc-patrol-history
  Trang Chủ · Vấn đề · Công việc · Tôi (shell)
#sc-patrol-history  DES-MOB-PAT-LIST  ← this pack
  → nav back = pop #sc-patrol-home (reuse · cấm reimplement hub)
  → Lọc = toast «Lọc» · cấm filter sheet
  → tap row = toast «Chi tiết phiên» · cấm push #sc-patrol-detail
  → search = client filter code/route/type/status
  → tab Tuần đường selected · in-screen tabs **none**
  → không child form / sheet
```

**Cấm** invent tab · reorder tab 5 (`GAP-TAB-01`) · «Có mạng» · watermark Gói · device label · native alert · start sibling `patrol-detail`.

## 3. Field inventory (kit dual)

| Field | VN | controlHint | Required | Kit dual | Notes |
|-------|----|-------------|----------|----------|-------|
| navBack | Tuần đường | IconButton / text+chevron | * | `LinmTopBar` leading | `#i-chevron-left` · pop `patrol-home` |
| navFilter | Lọc | TextButton | * | `LinmTopBar` trailing | toast **Lọc** · **cấm** sheet |
| largeTitle | Lịch sử ca | Text | * | `LinmLargeTitle` | fixed · dual |
| search | Tìm | SearchField | * | `LinmSearchField` · `LinmSearchGlyph` `#i-search` | kit placeholder **Tìm** · demo hint dài OK |
| rowCode | PAT-… | Text | * | `LinmListRow` title | **no** leading icon · `leadingSlot: 0` |
| rowSub | status-aware | Text | * | `LinmListRow` subtitle | §3.4 |
| rowBadge | Đang tuần / Hoàn thành / Bỏ sót / Mất sóng | Badge | * | `LinmBadge` info/success/danger/warning | **cấm** «Xong» |
| rowChev | — | Chevron | * | `LinmListRow` `showsChevron` | `#i-chevron-right` · iOS primary |
| tab | Tuần đường | TabBar | * | `LinmTabBar` | label **13** · glyph 22 |

Toast → `LinmToast`. **Cấm** raw `List` / M3 `NavigationBar` / `TabView` on this screen (`GAP-MOB-ACT-05`).

### Demo rows SSOT (4 hàng — dual parity)

| code | sub | badge | kit badgeKind |
|------|-----|-------|---------------|
| PAT-20260810-0014 | QL.1 · Tuần đường · 2/3 điểm | **Đang tuần** | info |
| PAT-20260810-0009 | HCM · Tuần kiểm · 100% | **Hoàn thành** | success |
| PAT-20260809-0021 | QL.1 · Thiếu điểm tuần | **Bỏ sót** | danger |
| PAT-20260809-0015 | Chờ đồng bộ · 1 điểm tuần | **Mất sóng** | warning |

## 4. SF ↔ Material (chrome lệch OK · nghĩa khớp)

| Demo `#i-*` | Ý nghĩa | iOS (SF / kit) | Android (Material / kit) |
|-------------|---------|----------------|---------------------------|
| `#i-chevron-left` | Back hub | `chevron.left` | `ArrowBack` (kit text slot) |
| `#i-search` | Search | `magnifyingglass` / `LinmSearchGlyph` | same `d=` |
| `#i-chevron-right` | Row chevron (iOS) | `chevron.right` | optional / none |
| `#i-house` | Tab Trang Chủ | `LinmHouseGlyph` | same |
| `#i-mappin` | Tab Tuần đường | `LinmMapPinGlyph` | same |
| `#i-warning` | Tab Vấn đề | `LinmWarningGlyph` | same |
| `#i-wrench` | Tab Công việc | `LinmWrenchGlyph` | same |
| `#i-person` | Tab Tôi | `LinmPersonGlyph` | same |

Dual HTML **cùng `d=`** cho `#i-chevron-left` · `#i-search`. **Cấm** leading row icon trên list này.

## 5. Brand tokens

| Token | Hex | Dùng |
|-------|------|------|
| primary | `#0C84C0` | nav tint · tab selected · badge info |
| success | `#34C759` / `#3CB448` | badge Hoàn thành |
| danger | `#FF3B30` / `#B3261E` | badge Bỏ sót |
| warning | `#FF9500` / `#E65100` | badge Mất sóng |
| surface iOS | `#F2F2F7` | nền |
| surface Android | `#FFFBFE` | nền |
| card | `#FFFFFF` | list group |

**Cấm** skin Ministry / CCCD · **cấm** M3 tím tab selected.

## 6. Behaviors (parity demo ↔ native)

| Case | UI |
|------|-----|
| Appear | GET `patrol/sessions` page 1 size 50 · ≥3 live else demo SSOT · fail/offline → demo · list **mở** |
| Back | pop `patrol-home` · **cấm** reimplement hub |
| Lọc | toast **Lọc** · **cấm** sheet |
| Search | client filter code / route / patrolType / status · kit placeholder **Tìm** |
| Tap row | toast **Chi tiết phiên** · **cấm** push detail |
| Hub entry | row **Lịch sử phiên** → push list (reuse) |
| Tab shell | Tab 5 giữ · Tuần đường selected · **cấm** invent in-screen tabs |
| Signal | **N/A** trên list · **cấm** «Có mạng» · **cấm** tap-cycle |

## 7. BFF (Design lock — cấm invent)

App `{BffBase}/mobile-bff/api/v1`:

| Method | Path | Slug? |
|--------|------|-------|
| GET | `patrol/sessions` | **yes** — page 1 size 50 |
| GET | `patrol/sessions/{id}` | **no** P1 (toast) |

**Cấm** `GET patrol-history` · `PatrolHistoryController` · Step 4b endpoint mới · ERP.*.

## 8. Cấm

- WebView HTML · `mfeStdUrl` · `yarn start:std`
- Gộp `#sc-patrol-detail` · filter sheet · invent list API
- `UIAlert` / `AlertDialog` / `window.alert`
- «Có mạng» · watermark Gói · device label «iPhone» / «· Android»
- Board prototype **không** prefix `ios/` · `android/` (`GAP-MOB-DES-PFX-01`)
- Badge «Xong» trên list này · leading icon trên history rows

## 9. Handoff → SA

| Field | Value |
|-------|-------|
| Next slash | `/agent-sa-mobile` |
| BFF | reuse `GET patrol/sessions` · Step 4b **N/A** |
| Open Q | PO §7 đã chốt — SA **không** invent list API |
| kit_missing_confirm | **N/A** |
| Chain | roleOnly=`design` · **không** chain SA turn này |
| e2eQa | ON khi QA · `yarn e2e-qa-mobile` |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-design-mobile |
| skillVersion | 2026.08.20.04 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.20.04 |
| rulesVersion | 2026.08.20.8 |
| generatedAt | 2026-08-20T04:25:00.000Z |
| versionGate | rechecked |
| contentHash | sha256:patrol-history-control-hint-20260820 |
| bffContentHash | sha256:patrol-history-mobile-bff-20260820 |

---
<!-- Version meta: skillId=agent-design-mobile skillVersion=2026.08.20.04 schemaVersion=1 workflowVersion=2026.08.20.04 rulesVersion=2026.08.20.8 versionGate=rechecked -->
