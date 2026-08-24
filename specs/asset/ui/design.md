# Design — asset (mobile list · Danh mục tài sản)

| Field | Value |
|-------|-------|
| feature | `asset` |
| title | [Design] [Mobile] List danh mục tài sản |
| this role | `design` · `/agent-design-mobile` |
| status | `confirmed` (autoApprove=ON) |
| design_confirm | **approve** (`task_179e1510`) |
| changeScope | `edit_page` |
| packKind | **`list`** (PO confirm) |
| stack | `native_dual` |
| kit_missing_confirm | **N/A** — reuse map list kit dual (`LinmTopBar` / `LinmSearchField` / `LinmListRow` / `LinmRowIcon` / `LinmToast`) |
| reviewUrlIos | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/asset/ui/prototype/ios/index.html#sc-asset-list` |
| reviewUrlAndroid | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/asset/ui/prototype/android/index.html#sc-asset-list` |
| ux-analy | `ui/ux-analy.md` §1–§9 |
| demo-parity | `ui/review/demo-parity.md` |
| prior | PO mobile `confirmed` · `po/requirement-mobile.md` · contentHash `sha256:asset-mobile-edit-list-20260823` · bffContentHash `sha256:asset-mobile-list-road-assets-proxy-20260823` |
| prior web | Kind B web **done** (`task_bf4df098`) · `po/requirement.md` · `ui/prototype/asset-list-prototype.html` — **không** AC mobile |
| autoApprove | **ON** |
| e2eQa | ON khi QA · `yarn e2e-qa-mobile` · **cấm** `yarn start:std` / `mfeStdUrl` |
| updatedAt | `2026-08-24T05:15:00.000Z` |
| taskId | `task_179e1510` |

## 0. Context & Demo

| ID | Path | Notes |
|----|------|-------|
| CTX-01 | `docs/context/features/asset.md` | domain · API road-assets |
| CTX-02 | `docs/context/features/asset-hub.md` | parent hub · entry tile **Danh sách** |
| DEM-P1 | `specs/mobile-p1/ui/prototype/{ios,android}/index.html` `#sc-asset-list` | visual SSOT copy · **không** board (`go('asset-detail')` · badge Ghim · Android 1 row) |
| DEM | `specs/asset/ui/prototype/{ios,android}/index.html` `#sc-asset-list` | board dual · PO toast · 2 rows · **cấm** Ghim P1 |
| MAP | `docs/html-to-native-map.md` + `ui/html-to-native-map.md` | kit list |
| STR | `docs/mobile-strings.json` keys `asset.*` | VN SSOT |
| DA | `specs/_data-analy/features/asset-control-hint.md` · `asset-real-data.md` · `asset-hub-bff-endpoints.md` · `asset-hub-action-tree.md` | |
| PO | `po/requirement-mobile.md` | §5 controlHint · §7 chốt |

**Cấm** `mfeStdUrl` / `yarn start:std` / WebView HTML-as-app.

## 1. Pattern

| | |
|--|--|
| Surface | Push list từ hub · nav back + title + search + rows · **không** tab bar · **không** Modal/Sheet / filter sheet |
| FormMode | none (search ≠ form dirty) |
| Action this slug | Appear GET road-assets · search apply · tap row toast · back pop hub |
| `devSlash` | `/agent-dev-ios` + `/agent-dev-android` |
| Frame | iOS 390×844 · Android 412×915 · safe area |

## 2. Screens / DES-MOB-*

| DES / sc-* | Tên VN | Zones | CTA |
|------------|--------|-------|-----|
| `DES-MOB-ASSET-LIST` `#sc-asset-list` | Danh sách | Nav · search · list | toast / pop |
| `DES-MOB-ASSET-LIST-NAV` | Nav | back **Tài sản** · title **Danh sách** | pop hub |
| `DES-MOB-ASSET-LIST-SEARCH` | Search | `#i-search` · hint | server `search=` |
| `DES-MOB-ASSET-LIST-ROWS` | List | 2 rows + icon + chevron (iOS) | toast detail |

### IA lock

```
home (tab Trang Chủ)
  → push #sc-asset-hub DES-MOB-ASSET-HUB (reuse · cấm reimplement)
    → tile **Danh sách** → push #sc-asset-list DES-MOB-ASSET-LIST   ← this pack
#sc-asset-list
  → nav back = pop #sc-asset-hub (reuse)
  → search apply → GET `search=` page=1
  → tap row = toast **Chi tiết tài sản** · cấm push `#sc-asset-detail`
  → **không** tab bar · **không** filter type/route/km P1
  → không child form / sheet (GAP-MOB-ACT-02 = none)
```

**Cấm** invent tab · «Có mạng» · watermark Gói · device label · native alert · start sibling `asset-detail` · badge Ghim P1.

## 3. Field inventory (kit dual)

| Field | VN | controlHint | Required | Kit dual | Notes |
|-------|----|-------------|----------|----------|-------|
| navBack | Tài sản | BackButton | * | `LinmTopBar` leading | `#i-chevron-left` · pop `asset-hub` · iOS text · Android icon OK |
| title | Danh sách | Text | * | `LinmTopBar` title | dual same |
| search | Tìm mã TS, tuyến, loại… | SearchField | * | `LinmSearchField` · `LinmSearchGlyph` `#i-search` | GET `search=` · page=1 |
| rowIcon | — | RowIcon | * | `LinmRowIcon` `#i-cube` | indigo row1 · gray row2 |
| rowTitle | {code} · {name} | Text | * | `LinmListRow` title ≥16 | DTO bind |
| rowSub | route · km · loại | Text | * | `LinmListRow` subtitle 13 | `route` · chainage · type label |
| rowChev | — | Chevron | * | `LinmListRow` `showsChevron` | `#i-chevron-right` · iOS primary |
| rowTap | — | ListRow action | * | `LinmListRow` onTap | toast **Chi tiết tài sản** P1 |
| empty | (trống) | EmptyChrome | | optional | fail → demo 2 rows |

Toast → `LinmToast`. **Cấm** raw `List` / M3 `SearchBar` / swipe CRUD (`GAP-MOB-ACT-05`).

### Demo rows SSOT (2 hàng — dual parity)

| code | title line | subtitle | icon bg |
|------|------------|----------|---------|
| TS-20260810-014 | TS-20260810-014 · Cống ngang | QL.1 · Km 1556+000 · Cống | indigo |
| TS-20260809-088 | TS-20260809-088 · Biển P.127 | HCM · Biển báo | gray |

**P2 Nice:** badge **Ghim** trên row1 — **không** DoD P1 · **cấm** trên board proto.

## 4. SF ↔ Material (chrome lệch OK · nghĩa khớp)

| Demo `#i-*` | Ý nghĩa | iOS (SF / kit) | Android (Material / kit) |
|-------------|---------|----------------|---------------------------|
| `#i-chevron-left` | Back hub | `chevron.left` + text **Tài sản** | `ArrowBack` icon-only |
| `#i-search` | Search | `magnifyingglass` / `LinmSearchGlyph` | same `d=` |
| `#i-cube` | Row asset | `LinmRowIcon` cube | same `d=` |
| `#i-chevron-right` | Row chevron (iOS) | `chevron.right` | optional / none |

Dual HTML **cùng `d=`** cho search + back + cube.

## 5. Brand tokens

| Token | Hex | Dùng |
|-------|-----|------|
| primary | `#0C84C0` | nav tint · search focus |
| indigo iOS | `#5856D6` | row icon row1 |
| indigo Android | `#6750A4` | row icon row1 M3 |
| gray iOS | `#8E8E93` | row icon row2 |
| gray Android | `#79747E` | row icon row2 |
| surface iOS | `#F2F2F7` | nền |
| surface Android | `#FFFBFE` | nền |
| card | `#FFFFFF` | list group |

**Cấm** skin Ministry / CCCD · **cấm** M3 tím tab (no tab on screen).

## 6. Behaviors (parity demo ↔ native)

| Case | UI |
|------|-----|
| Appear | GET `asset/road-assets` page 1 size 50 · bind rows · fail/offline/empty → demo 2 rows · list **mở** |
| Back | pop `asset-hub` · **cấm** reimplement hub |
| Search | debounce/submit → `search=` · page=1 · re-fetch · **cấm** filter sheet P1 |
| Tap row | toast **Chi tiết tài sản** · **cấm** push detail |
| Hub entry | tile **Danh sách** → push list (reuse hub) |
| Signal | **N/A** · **cấm** «Có mạng» |

## 7. BFF (Design lock — cấm invent)

App `{BffBase}/mobile-bff/api/v1`:

| Method | Path | Slug? |
|--------|------|-------|
| GET | `asset/road-assets` | **yes** — `search` · `page` · `pageSize` (default 50) |

**Cấm** `GET asset-list` · `AssetListController` · Step 4b endpoint mới · ERP.* · Finance `api/v1/assets`.

## 8. Cấm

- WebView HTML · `mfeStdUrl` · `yarn start:std`
- Gộp `#sc-asset-detail` / collect / adjust / form / gis-map
- Filter toolbar type/route/km · pagination footer · pull-refresh P1
- Row menu Xem/Sửa/Copy/Lịch sử · swipe delete · Tạo mới trên list
- `UIAlert` / `AlertDialog` / `window.alert`
- «Có mạng» · watermark Gói · device label «iPhone» / «· Android»
- Badge **Ghim** P1 · board **không** prefix sai path

## 9. Handoff → SA

| Field | Value |
|-------|-------|
| Next slash | `/agent-sa-mobile` |
| BFF | reuse `GET asset/road-assets` · Step 4b **N/A** |
| Open Q | PO §7 đã chốt — SA **không** invent list API |
| kit_missing_confirm | **N/A** |
| Chain | roleOnly=`design` · **không** chain SA turn này |
| e2eQa | ON khi QA · `yarn e2e-qa-mobile` |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-design-mobile |
| skillVersion | 2026.08.19.27 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.19.27 |
| rulesVersion | 2026.08.19.32 |
| generatedAt | 2026-08-24T05:15:00.000Z |
| versionGate | rechecked |
| contentHash | sha256:asset-mobile-edit-list-20260823 |
| bffContentHash | sha256:asset-mobile-list-road-assets-proxy-20260823 |

---
<!-- Version meta: skillId=agent-design-mobile skillVersion=2026.08.19.27 schemaVersion=1 workflowVersion=2026.08.19.27 rulesVersion=2026.08.19.32 versionGate=rechecked -->
