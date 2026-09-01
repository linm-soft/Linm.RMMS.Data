# UX analy — supervise (mobile list · Giám sát)

**Sources:** `ui/prototype/ios` · `ui/prototype/android` · `ui/design.md` · mobile-p1 `#sc-supervise` (copy SSOT) · PO `po/requirement.md`  
**Brand tokens:** primary `#0C84C0` · success `#34C759`/`#1B5E20` · warn `#FF9500` · surface iOS `#F2F2F7` · surface Android `#FFFBFE`

## 1. IA

```
(auth) Login → Tab 5 (IA lock — không invent / reorder)
  Trang Chủ (#sc-home)
    → tile «Giám sát» → push #sc-supervise
  Tuần đường (#sc-patrol-home)
    → quick «Giám sát» → push #sc-supervise
  Vấn đề · Công việc · Tôi
#sc-supervise DES-MOB-SUPERVISE   ← this pack (push · không tab bar trên màn)
  → nav back → pop #sc-home
  → Lọc → toast «Lọc tuyến · ngày»
  → segment idx 1 «Bản đồ» → toast · reset idx 0 (cấm push patrol-map)
  → tap card → toast «Chi tiết check-in» (cấm push checkin-detail)
  → không child form / sheet (GAP-MOB-ACT-02 = none)
```

- Segment idx **0** Danh sách check in · **1** Bản đồ — **locked** (`GAP-TAB-01`).
- Shell tab 5 **không** đổi trên pack này.
- **Cấm** start 2 sibling `pending_confirm` (`GAP-MOB-ACT-06`).

## 2. Màn

| DES / sc-* | Tên VN | iOS chrome | Android chrome | CTA |
|------------|--------|------------|----------------|-----|
| DES-MOB-SUPERVISE `#sc-supervise` | Giám sát tuần đường | inline top bar text · pill seg · scroll cards | top bar text · underline seg · scroll cards | toast / pop |
| DES-MOB-SUP-NAV | Nav | `LinmTopBar` leading+trailing text | same | pop / toast |
| DES-MOB-SUP-SEG | Segment 2 | pill `LinmSegment` | underline `LinmSegment` | filter owner |
| DES-MOB-SUP-LIST | List | scroll | scroll | |
| DES-MOB-SUP-CARD | Rich card | `LinmCard` composition | same | toast P1 |

## 3. Zone

### DES-MOB-SUPERVISE / `#sc-supervise`

| Zone | Demo (user thấy) | Map row (`docs/html-to-native-map.md` + `ui/html-to-native-map.md`) | SwiftUI | Compose |
|------|------------------|--------------------------------------------------------------------|---------|---------|
| Nav back | ‹ Trang Chủ | A top bar text+`#i-chevron-left` | `LinmTopBar` leadingText | same |
| Nav title | Giám sát tuần đường | A `.nav-title` | `LinmTopBar` title | same |
| Nav filter | Lọc | A trailing text | `LinmTopBar` trailingText | same |
| Segment | Danh sách check in / Bản đồ | A `.seg` DES-MOB-SUP-SEG | `LinmSegment` | same |
| Card title | Nguyễn Văn A / Trần Khánh | A `.rc-title` | Text 17 | Text ≥16 |
| Card org | Tổ … / Chi cục II.2 + `#i-building` | A `.rc-line` | composition | same |
| Card loc | QL.1 Km … + `#i-mappin` | A `.rc-line` | composition | same |
| Card time | 2026-08-10 … | A `.rc-time` | muted 13 | same |
| Card status | Trạng thái: Đã ghi điểm tuần | A `.rc-status` | strip 13 | same |
| Card thumb | gradient 56 | A `.rc-thumb` | placeholder | same |
| Toast | Lọc tuyến · ngày / Bản đồ / Chi tiết check-in | A `.toast` | `LinmToast` | same |

**Không** zone: filter sheet · map live · tab bar · «Có mạng» · watermark Gói · device label.

**States:**

| State | Hành vi |
|-------|---------|
| default | live GET cards · segment 0 · **cấm** demo SSOT |
| loading | overlay nhẹ · **cấm** full-screen block list |
| error / offline | empty + toast `supervise.toast.loadFail` · list **mở** · **cấm** demo |
| empty live | EmptyChrome `sup-empty` · **cấm** mock rows |
| permission GPS | **N/A** |
| leave dirty | **N/A** (không form) |

## 4. Copy SSOT

| ✅ HTML / strings | ❌ Cấm trên máy |
|-------------------|-----------------|
| Trang Chủ | Home EN · device «iPhone» |
| Giám sát tuần đường | Supervise EN |
| Lọc | Filter sheet P1 |
| Danh sách check in · Bản đồ | reorder / invent tab |
| Nguyễn Văn A · Trần Khánh | invent names |
| Tổ tuần đường · VP-IV.1 · Chi cục II.2 | invent org API |
| QL.1 Km 1556+000 · Xuân Hải · QL.1 Km 1561+134 · Phước Dinh | invent km |
| 2026-08-10 08:40:12 · 09:12:44 | invent time |
| Trạng thái: Đã ghi điểm tuần | «OK» EN |
| Lọc tuyến · ngày · Bản đồ · Chi tiết check-in | `AlertDialog` · push sibling |
| — | «Có mạng» · watermark Gói · «· Android» |

## 5. Brand

Primary `#0C84C0` · surface iOS `#F2F2F7` · Android `#FFFBFE` · card `#FFFFFF` · status ok `#1B5E20` · muted `#8E8E93`/`#79747E`.  
**Cấm** skin đỏ CCCD · **cấm** M3 tím segment selected.

## 6. Signal

**N/A** trên list `#sc-supervise` (không status capsule).  
**Cấm** boolean «Có mạng» · **cấm** tap-cycle proto.

## 7. Pictogram

| Control | Motif demo | SF Symbol | Material |
|---------|------------|-----------|----------|
| Back | `#i-chevron-left` | `chevron.left` | `ArrowBack` |
| Org | `#i-building` | `building.2` | outline building · **cấm** Filled lệch |
| Loc | `#i-mappin` | `mappin` / `LinmMapPinGlyph` | outline pin · **cùng `d=`** |

Dual HTML **cùng `d=`**. `/convert-web-icon-to-mobile` — **cấm** invent icon · **cấm** `Icons.Filled` tab-style trên card.

## 8. Motion

Không `/wf-anim` trên list `supervise`. Segment reset instant · toast fade in-app · push/pop standard.

## 9. GAP

| ID | Demo vs native | Quyết định |
|----|----------------|------------|
| GAP-MOB-SUP-01 | Filter sheet | **closed** — P1 toast only (PO §7) |
| GAP-MOB-SUP-02 | Map live / `go('patrol-map')` | **closed** — toast · reset idx 0 |
| GAP-MOB-SUP-03 | Org unit API | **Accept** — demo / `Note` fallback |
| GAP-MOB-ACT-01 | 1 list action | **closed** — không gộp sibling screens |
| GAP-MOB-ACT-02 | child form | **none** on list |
| GAP-MOB-ACT-05 | kit map | reuse TopBar/Segment/Card/Toast · **cấm** invent `LinmRichCheckinCard` |
| GAP-MOB-ACT-06 | sibling enqueue | **không** start |
| GAP-MOB-ALIGN-01 | Dual chrome | Cùng copy zones · pill vs underline OK |
| GAP-TAB-01 | Segment order | 0 Danh sách check in · 1 Bản đồ |
| GAP-TYP-01 | Type size | segment **13** · title **≥16** · org/loc/status **13** |
| GAP-MOB-DES-PFX-01 | Board prefix | `ios/index.html` · `android/index.html` |
| GAP-MOB-UX-07 | design ↔ HTML | Pack proto khớp `design.md` |
| GAP-MOB-DEMO-COPY-* | P1 Android thiếu Lọc / card 2 / icons | **closed** — pack dual đủ |
| GAP-MOB-ICON-02 | Native Android Filled Business/Place | Dev follow-up · HTML outline SSOT |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | mobile-ui-ux-analy |
| skillVersion | 2026.08.19.23 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.19.29 |
| rulesVersion | 2026.08.19.34 |
| generatedAt | 2026-08-19T15:25:00.000Z |
| versionGate | rechecked |
| contentHash | sha256:supervise-mobile-list-20260819 |

---
<!-- Version meta: skillId=mobile-ui-ux-analy skillVersion=2026.08.19.23 schemaVersion=1 workflowVersion=2026.08.19.29 rulesVersion=2026.08.19.34 versionGate=rechecked -->
