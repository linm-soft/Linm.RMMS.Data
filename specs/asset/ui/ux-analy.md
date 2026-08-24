# UX analy — asset (mobile list · Danh mục tài sản)

**Sources:** `ui/prototype/ios` · `ui/prototype/android` · `ui/design.md` · mobile-p1 `#sc-asset-list` (copy SSOT) · PO `po/requirement-mobile.md`  
**Brand tokens:** primary `#0C84C0` · indigo iOS `#5856D6` / Android `#6750A4` · gray iOS `#8E8E93` / Android `#79747E` · surface iOS `#F2F2F7` · surface Android `#FFFBFE`

## 1. IA

```
home (tab Trang Chủ)
  → push #sc-asset-hub DES-MOB-ASSET-HUB (reuse)
    → tile **Danh sách** → push #sc-asset-list DES-MOB-ASSET-LIST   ← this pack
#sc-asset-list DES-MOB-ASSET-LIST (push · **không** tab bar · in-screen tabs none)
  → nav back → pop #sc-asset-hub (reuse)
  → search → GET `search=` page=1
  → tap row → toast «Chi tiết tài sản» (cấm push asset-detail)
  → không child form / sheet (GAP-MOB-ACT-02 = none)
```

- **Không** tab bar trên list (`PO §3.1`).
- Filter type/route/km = **P2** — **cấm** toolbar P1.
- **Cấm** start sibling `asset-detail` `pending_confirm` (`GAP-MOB-ACT-06`).

## 2. Màn

| DES / sc-* | Tên VN | iOS chrome | Android chrome | CTA |
|------------|--------|------------|----------------|-----|
| DES-MOB-ASSET-LIST `#sc-asset-list` | Danh sách | nav text back + title · search · card list | top bar icon back + title · search · card list | toast / pop |
| DES-MOB-ASSET-LIST-NAV | Nav | `LinmTopBar` leading text **Tài sản** | `LinmTopBar` leading icon | pop hub |
| DES-MOB-ASSET-LIST-SEARCH | Search | pill `#i-search` | pill `#i-search` | server search |
| DES-MOB-ASSET-LIST-ROWS | List | `LinmListRow` + icon + chevron | `LinmListRow` + icon | toast P1 |

## 3. Zone

### DES-MOB-ASSET-LIST / `#sc-asset-list`

| Zone | Demo (user thấy) | Map row (`docs/html-to-native-map.md` + `ui/html-to-native-map.md`) | SwiftUI | Compose |
|------|------------------|--------------------------------------------------------------------|---------|---------|
| Nav back | ‹ Tài sản (iOS) / ‹ icon (Android) | A `.nav-btn` / `.icon-btn` + `#i-chevron-left` | `LinmTopBar` leadingText / leadingIcon | same |
| Nav title | Danh sách | A `.nav-title` | `LinmTopBar` title | same |
| Search | Tìm mã TS, tuyến, loại… | A `.search` + `#i-search` | `LinmSearchField` | same |
| Row icon | cube indigo/gray | A `.row-icon` `#i-cube` | `LinmRowIcon` | same |
| Row title | TS-* · name | A `.row-title` | `LinmListRow` title ≥16 | same |
| Row sub | QL.1 · Km … · loại | A `.row-sub` | subtitle 13 | same |
| Row chev | › (iOS) | A `.chev` `#i-chevron-right` | `showsChevron` | optional |
| Toast | Chi tiết tài sản | A `.toast` | `LinmToast` | same |

**Không** zone: tab bar · filter sheet · detail push · badge Ghim P1 · «Có mạng» · watermark Gói · device label.

**States:**

| State | Hành vi |
|-------|---------|
| default | demo SSOT 2 rows |
| loading | refresh nhẹ · **cấm** full-screen block |
| error / offline | demo fallback 2 rows · optional toast · list **mở** |
| empty live | demo 2 rows OK P1 |
| permission GPS | **N/A** |
| leave dirty | **N/A** (search không leave-modal) |

## 4. Copy SSOT

| ✅ HTML / strings | ❌ Cấm trên máy |
|-------------------|-----------------|
| Tài sản | Asset EN only back |
| Danh sách | List EN only title |
| Tìm mã TS, tuyến, loại… | rút «Tìm mã TS…» làm SSOT |
| TS-20260810-014 · Cống ngang | invent codes |
| TS-20260809-088 · Biển P.127 | invent codes |
| QL.1 · Km 1556+000 · Cống · HCM · Biển báo | invent sub |
| Chi tiết tài sản | `AlertDialog` · push detail |
| — | Ghim badge P1 · «Có mạng» · watermark Gói · «· Android» |

## 5. Brand

Primary `#0C84C0` · surface iOS `#F2F2F7` · Android `#FFFBFE` · card `#FFFFFF` · muted `#8E8E93`/`#79747E`.  
Row icon indigo/gray theo §3 demo SSOT.  
**Cấm** skin đỏ CCCD.

## 6. Signal

**N/A** trên list `#sc-asset-list`.  
**Cấm** boolean «Có mạng» · **cấm** tap-cycle proto.

## 7. Pictogram

| Control | Motif demo | SF Symbol | Material |
|---------|------------|-----------|----------|
| Back | `#i-chevron-left` | `chevron.left` | `ArrowBack` |
| Search | `#i-search` | `magnifyingglass` / `LinmSearchGlyph` | same `d=` |
| Row asset | `#i-cube` | `LinmRowIcon` cube | same `d=` |
| Chevron row | `#i-chevron-right` | `chevron.right` | optional |

Dual HTML **cùng `d=`** cho search + back + cube.

## 8. Motion

Không `/wf-anim` trên list `asset`. Toast fade in-app · push/pop hub standard · search debounce → GET.

## 9. GAP

| ID | Demo vs native | Quyết định |
|----|----------------|------------|
| GAP-MOB-DEMO-COPY | P1 mobile-p1 push detail · Ghim · Android 1 row | **closed** — pack dual 2 rows · toast · **cấm** Ghim |
| GAP-MOB-ACT-01 | 1 list action | **closed** — không gộp asset-detail |
| GAP-MOB-ACT-02 | child form | **none** on list |
| GAP-MOB-ACT-05 | kit map | reuse TopBar/SearchField/ListRow/RowIcon/Toast |
| GAP-MOB-ACT-06 | sibling enqueue | **không** start asset-detail |
| GAP-MOB-ALIGN-01 | Dual chrome | Cùng copy 2 rows · iOS back text · Android icon-only OK |
| GAP-TYP-01 | Type size | search hint **13** · row title **≥16** · row sub **13** |
| GAP-MOB-DES-PFX-01 | Board prefix | `ios/index.html` · `android/index.html` |
| GAP-MOB-UX-07 | design ↔ HTML | Pack proto khớp `design.md` |
| GAP-F-ASSET-MOB-01 | Filter toolbar | **OUT P1** — search only |
| GAP-F-ASSET-MOB-03 | Ghim badge | **P2 Nice** — **cấm** board P1 |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | mobile-ui-ux-analy |
| skillVersion | 2026.08.19.27 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.19.27 |
| rulesVersion | 2026.08.19.32 |
| generatedAt | 2026-08-24T05:15:00.000Z |
| versionGate | rechecked |
| contentHash | sha256:asset-mobile-edit-list-20260823 |

---
<!-- Version meta: skillId=mobile-ui-ux-analy skillVersion=2026.08.19.27 schemaVersion=1 workflowVersion=2026.08.19.27 rulesVersion=2026.08.19.32 versionGate=rechecked -->
