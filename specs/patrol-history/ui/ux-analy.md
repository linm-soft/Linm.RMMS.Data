# UX analy — patrol-history (mobile list · Lịch sử ca)

**Sources:** `ui/prototype/ios` · `ui/prototype/android` · `ui/design.md` · mobile-p1 `#sc-patrol-history` (copy SSOT) · PO `po/requirement.md`  
**Brand tokens:** primary `#0C84C0` · success `#34C759`/`#3CB448` · danger `#FF3B30`/`#B3261E` · warning `#FF9500`/`#E65100` · surface iOS `#F2F2F7` · surface Android `#FFFBFE`

## 1. IA

```
(auth) Login → Tab 5 (IA lock — không invent / reorder)
  Tuần đường (#sc-patrol-home)
    → quick row «Lịch sử phiên» → push #sc-patrol-history
  Trang Chủ · Vấn đề · Công việc · Tôi
#sc-patrol-history DES-MOB-PAT-LIST   ← this pack (push · tab shell giữ · in-screen tabs none)
  → nav back → pop #sc-patrol-home (reuse)
  → Lọc → toast «Lọc»
  → tap row → toast «Chi tiết phiên» (cấm push patrol-detail)
  → search → client filter
  → không child form / sheet (GAP-MOB-ACT-02 = none)
```

- Tab **Tuần đường** selected dưới list (`GAP-TAB-01`).
- In-screen tabs / segment **none** trên list.
- **Cấm** start sibling `patrol-detail` `pending_confirm` (`GAP-MOB-ACT-06`).

## 2. Màn

| DES / sc-* | Tên VN | iOS chrome | Android chrome | CTA |
|------------|--------|------------|----------------|-----|
| DES-MOB-PAT-LIST `#sc-patrol-history` | Lịch sử ca | nav text back · empty nav title · large title · search · card list · tab | top bar text back + Lọc · large title · search · card list · tab | toast / pop |
| DES-MOB-PAT-LIST-NAV | Nav | `LinmTopBar` leading+trailing text | same | pop / toast |
| DES-MOB-PAT-LIST-SEARCH | Search | pill `#i-search` | pill `#i-search` | client filter |
| DES-MOB-PAT-LIST-ROWS | List | `LinmListRow` no-icon + badge + chevron | `LinmListRow` no-icon + badge | toast P1 |
| DES-MOB-TABBAR | Tab 5 | `LinmTabBar` | same | shell |

## 3. Zone

### DES-MOB-PAT-LIST / `#sc-patrol-history`

| Zone | Demo (user thấy) | Map row (`docs/html-to-native-map.md` + `ui/html-to-native-map.md`) | SwiftUI | Compose |
|------|------------------|--------------------------------------------------------------------|---------|---------|
| Nav back | ‹ Tuần đường | A `.nav-btn` / `.nav-btn` + `#i-chevron-left` | `LinmTopBar` leadingText | same |
| Nav filter | Lọc | A trailing text | `LinmTopBar` trailingText | same |
| Large title | Lịch sử ca | A `.large-title` | `LinmLargeTitle` | same |
| Search | Tìm mã phiên, tuyến… (hint) | A `.search` + `#i-search` | `LinmSearchField` placeholder **Tìm** | same |
| Row title | PAT-* | A `.row-title` | `LinmListRow` title ≥16 | same |
| Row sub | QL.1 · … | A `.row-sub` | subtitle 13 | same |
| Row badge | Đang tuần / Hoàn thành / Bỏ sót / Mất sóng | A `.badge` color | `LinmBadge` kind | same |
| Row chev | › (iOS) | A `.chev` `#i-chevron-right` | `showsChevron` | optional |
| Toast | Lọc / Chi tiết phiên | A `.toast` | `LinmToast` | same |
| Tab | 5 · Tuần đường on | A `.tab` | `LinmTabBar` | same |

**Không** zone: filter sheet · detail push · leading row icon · «Có mạng» · watermark Gói · device label.

**States:**

| State | Hành vi |
|-------|---------|
| default | demo SSOT 4 rows |
| loading | refresh nhẹ · **cấm** full-screen block tab |
| error / offline | demo fallback 4 rows · optional toast · list **mở** |
| empty live | demo 4 rows OK P1 |
| permission GPS | **N/A** |
| leave dirty | **N/A** (search không leave-modal) |

## 4. Copy SSOT

| ✅ HTML / strings | ❌ Cấm trên máy |
|-------------------|-----------------|
| Tuần đường | Patrol / Field EN |
| Lịch sử ca | History EN only |
| Lọc | Filter sheet P1 |
| PAT-20260810-0014 / 0009 / 0021 / 0015 | invent codes |
| QL.1 · Tuần đường · 2/3 điểm · HCM · Tuần kiểm · 100% · Thiếu điểm tuần · Chờ đồng bộ · 1 điểm tuần | invent sub |
| Đang tuần · Hoàn thành · Bỏ sót · Mất sóng | «Xong» trên list này |
| Lọc · Chi tiết phiên | `AlertDialog` · push detail |
| Kit search **Tìm** (native) | fork search field P1 |
| — | «Có mạng» · watermark Gói · «· Android» |

## 5. Brand

Primary `#0C84C0` · surface iOS `#F2F2F7` · Android `#FFFBFE` · card `#FFFFFF` · muted `#8E8E93`/`#79747E`.  
Badge info/success/danger/warning theo §3 demo SSOT.  
**Cấm** skin đỏ CCCD · **cấm** M3 tím tab selected.

## 6. Signal

**N/A** trên list `#sc-patrol-history` (signal trên hub parent).  
**Cấm** boolean «Có mạng» · **cấm** tap-cycle proto.

## 7. Pictogram

| Control | Motif demo | SF Symbol | Material |
|---------|------------|-----------|----------|
| Back | `#i-chevron-left` | `chevron.left` | `ArrowBack` |
| Search | `#i-search` | `magnifyingglass` / `LinmSearchGlyph` | same `d=` |
| Chevron row | `#i-chevron-right` | `chevron.right` | optional |
| Tab glyphs | house / mappin / warning / wrench / person | kit glyphs | same |

Dual HTML **cùng `d=`** cho search + back. **Cấm** leading list icon trên history rows.

## 8. Motion

Không `/wf-anim` trên list `patrol-history`. Toast fade in-app · push/pop hub standard · search filter instant client-side.

## 9. GAP

| ID | Demo vs native | Quyết định |
|----|----------------|------------|
| GAP-MOB-DEMO-COPY | P1 Android thiếu Lọc / 3 rows / «Xong» | **closed** — mobile-p1 + pack dual 4 rows + Lọc + badge iOS |
| GAP-MOB-ACT-01 | 1 list action | **closed** — không gộp patrol-detail |
| GAP-MOB-ACT-02 | child form | **none** on list |
| GAP-MOB-ACT-05 | kit map | reuse TopBar/LargeTitle/SearchField/ListRow/Badge/Toast |
| GAP-MOB-ACT-06 | sibling enqueue | **không** start patrol-detail |
| GAP-MOB-ALIGN-01 | Dual chrome | Cùng copy 4 rows + Lọc · chevron iOS-only OK |
| GAP-TAB-01 | Tab 5 shell | Tuần đường selected · in-screen tabs none |
| GAP-TYP-01 | Type size | label/tab **13** · title/search/row **≥16** |
| GAP-MOB-DES-PFX-01 | Board prefix | `ios/index.html` · `android/index.html` |
| GAP-MOB-UX-07 | design ↔ HTML | Pack proto khớp `design.md` |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | mobile-ui-ux-analy |
| skillVersion | 2026.08.20.04 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.20.04 |
| rulesVersion | 2026.08.20.8 |
| generatedAt | 2026-08-20T04:25:00.000Z |
| versionGate | rechecked |
| contentHash | sha256:patrol-history-control-hint-20260820 |

---
<!-- Version meta: skillId=mobile-ui-ux-analy skillVersion=2026.08.20.04 schemaVersion=1 workflowVersion=2026.08.20.04 rulesVersion=2026.08.20.8 versionGate=rechecked -->
