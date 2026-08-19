# UX analy — patrol-home (mobile hub · Tuần đường)

**Sources:** `ui/prototype/ios` · `ui/prototype/android` · `ui/design.md` · mobile-p1 `#sc-patrol-home` (copy SSOT) · PO `po/requirement.md`  
**Brand tokens:** primary `#0C84C0` · success `#34C759`/`#3CB448` · warn `#FF9500`/`#FCB43C` · surface iOS `#F2F2F7` · surface Android `#FFFBFE`

## 1. IA

```
(auth) Login → Tab 5 (IA lock — không invent / reorder)
  Trang Chủ (#sc-home)
    → quick «Điểm tuần» / tile «Tuần đường» → switch tab field
  Tuần đường (selected) → #sc-patrol-home DES-MOB-PAT-HOME   ← this pack
  Vấn đề · Công việc · Tôi
#sc-patrol-home
  → nav sync / row Lưu trữ → push #sc-patrol-offline (reuse · GAP-MOB-ACT-PAT-OFFLINE)
  → bell → toast «Thông báo» (cấm push ops)
  → segment idx 1 «Chấm công» → toast
  → hero / pin / today / quick siblings → toast nhãn
  → không child form / sheet check-in (GAP-MOB-ACT-02 = none)
```

- Tab **Tuần đường** = owner slug `patrol-home`.
- Segment idx **0** Tuần đường · **1** Chấm công — **locked** (`GAP-TAB-01`).
- **Cấm** start 6 sibling `pending_confirm` (`GAP-MOB-ACT-06`).

## 2. Màn

| DES / sc-* | Tên VN | iOS chrome | Android chrome | CTA |
|------------|--------|------------|----------------|-----|
| DES-MOB-PAT-HOME `#sc-patrol-home` | Tuần đường | nav icon · large title · pill seg · scroll | top-bar icon · large title · underline seg · scroll | toast / push offline |
| DES-MOB-PAT-SEG | Segment 2 | `LinmSegment` | `LinmSegment` | filter owner |
| DES-MOB-PAT-ACTIVE | Hero ca | `LinmHeroCard` | same | toast P1 |
| DES-MOB-CI-PIN-HERE | Pin | `LinmPrimaryButton` | same | toast P1 |
| DES-MOB-PAT-KPI | KPI 3 | `LinmKpiStrip` | same | display |
| DES-MOB-PAT-TODAY | Hôm nay | `LinmListRow` + `LinmRowIcon` + badge + chevron | `LinmListRow` + `LinmRowIcon` + badge | toast |
| DES-MOB-PAT-QUICK | Thao tác nhanh | `LinmListRow` + `LinmRowIcon` + chevron | `LinmListRow` + `LinmRowIcon` | toast / push |
| DES-MOB-TABBAR | Tab 5 | `LinmTabBar` | same | shell |

## 3. Zone

### DES-MOB-PAT-HOME / `#sc-patrol-home`

| Zone | Demo (user thấy) | Map row (`docs/html-to-native-map.md`) | SwiftUI | Compose |
|------|------------------|----------------------------------------|---------|---------|
| Nav sync | sync icon | A `.nav-btn` / `.icon-btn` + `#i-sync` | `LinmTopBar` leading | same |
| Nav notify | bell · **no badge** | A trailing + `#i-bell` | `LinmTopBar` trailing | same |
| Title | Tuần đường | A `.large-title` | `LinmLargeTitle` | same |
| Segment | Tuần đường / Chấm công | A `.seg` DES-MOB-PAT-SEG | `LinmSegment` | same |
| Hero eyebrow | Ca đang chạy · Tốt | A `.hero-eyebrow` + signal | `LinmHeroCard` + `LinmNetSignalMark` | same |
| Hero title | QL.1 · Km 1556+000 | A `.hero-title` | Text | same |
| Hero meta | PAT-* · user · điểm/coverage | A `.hero-meta` | Text | same |
| Progress | 67% bar | A `.progress` | `LinmProgress` | same |
| Hero actions | Tiếp tục bản đồ · Ghi điểm tuần | A `.hero-actions` | `LinmHeroAction` | same |
| Pin | Ghim vị trí hiện tại | A `.btn-primary.pin-here` | `LinmPrimaryButton` | same |
| KPI | 2 / 1 / 67% | A `.kpi-strip` | `LinmKpiStrip` | same |
| Section hôm nay | Hôm nay | A `.section-label` | `LinmSectionLabel` | same |
| Today rows | 2 PAT + badge + `.row-icon` | A `.row` `#i-walk`/`#i-check` | `LinmListRow` `leading:` `LinmRowIcon` + `LinmBadge` | same |
| Section quick | Thao tác nhanh | A `.section-label` | `LinmSectionLabel` | same |
| Quick rows | 6 rows + `.row-icon` | A `.row` `#i-camera`/`#i-video`/`#i-map`/`#i-list`/`#i-sync` | `LinmListRow` `leading:` `LinmRowIcon` | same |
| Toast | nhãn action | A `.toast` | `LinmToast` | same |
| Tab | 5 · Tuần đường on | A `.tab` | `LinmTabBar` | same |

**Không** zone: check-in sheet · map live · «Có mạng» · watermark Gói · device label · badge `3`.

**States:**

| State | Hành vi |
|-------|---------|
| default | demo SSOT hero/KPI/today · segment 0 |
| loading | refresh nhẹ · **cấm** full-screen block tab |
| error / offline | demo fallback · optional toast · hub **mở** |
| empty live sessions | demo 2 rows OK P1 |
| permission GPS | **N/A P1** (pin = toast) |
| leave dirty | **N/A** (không form) |

## 4. Copy SSOT

| ✅ HTML / strings | ❌ Cấm trên máy |
|-------------------|-----------------|
| Tuần đường | Patrol / Field EN |
| Chấm công | Attendance EN only |
| Ca đang chạy · Tốt / Trung bình / Yếu | «Có mạng» |
| QL.1 · Km 1556+000 | invent km |
| PAT-20260810-0014 / 0009 | invent codes |
| Đã ghi điểm tuần · Còn lại · Độ phủ | |
| Đang tuần · Xong | |
| Tiếp tục bản đồ · Ghi điểm tuần · Ghim vị trí hiện tại | openSheet |
| Ghi nhận hư hỏng · Thu thập bằng camera · Bản đồ ca · Lịch sử phiên · Giám sát · Lưu trữ | push sibling (trừ offline) |
| Thông báo · Chấm công (toast) | `AlertDialog` · push ops |
| Bản ghi chờ đồng bộ | hardcode «3 bản ghi» |

## 5. Brand

Primary `#0C84C0` · hero gradient `#086A9A`→`#0C84C0`→`#2A9AD4` · surface iOS `#F2F2F7` · Android `#FFFBFE` · card `#FFFFFF` · muted `#8E8E93`/`#79747E`.  
**Cấm** skin đỏ CCCD · **cấm** M3 tím tab selected.

## 6. Signal

Hero eyebrow embeds `LinmNetSignalMark` (OS path · hạng **Tốt / Trung bình / Yếu**).  
**Cấm** boolean «Có mạng» · **cấm** tap-cycle proto trên production.

## 7. Pictogram

| Control | Motif demo | SF Symbol | Material |
|---------|------------|-----------|----------|
| Sync / Lưu trữ | `#i-sync` | `arrow.triangle.2.circlepath` | `Sync` |
| Bell | `#i-bell` | `bell` | `Notifications` |
| Map | `#i-map` | `map` | `Map` |
| Plus | `#i-plus` | `plus` | `Add` |
| Pin / tab field | `#i-mappin` | `mappin` / `LinmMapPinGlyph` | `Place` / kit |
| Walk | `#i-walk` | `figure.walk` | `DirectionsWalk` |
| Check | `#i-check` | `checkmark` | `Check` |
| Camera | `#i-camera` | `camera` | `PhotoCamera` |
| Video | `#i-video` | `video` | `Videocam` |
| List | `#i-list` | `list.bullet` | `List` |
| Chevron (iOS) | `#i-chevron-right` | `chevron.right` | optional |

Tab glyphs: house / mappin / warning / wrench / person — **cấm** `Icons.Filled` tab · **cấm** pill nền icon.

## 8. Motion

Không `/wf-anim` trên hub `patrol-home`. Segment switch = instant · toast fade in-app · push/pop offline standard.

## 9. GAP

| ID | Demo vs native | Quyết định |
|----|----------------|------------|
| GAP-MOB-PAT-HOME-01 | P1 sheet check-in / `go(map)` | **closed** — P1 toast only (PO §7) |
| GAP-MOB-PAT-HOME-02 | Android bell `go('ops')` | **closed** — dual toast Thông báo |
| GAP-MOB-PAT-HOME-03 | Badge notify/offline `3` | **closed** — 0 ẩn · local count |
| GAP-MOB-ACT-01 | 1 hub action | **closed** — không gộp sibling screens |
| GAP-MOB-ACT-02 | child form | **none** on hub |
| GAP-MOB-ACT-05 | kit map | reuse · **cấm** raw TabView |
| GAP-MOB-ACT-06 | sibling enqueue | **không** start |
| GAP-MOB-ALIGN-01 | Dual chrome | Cùng copy zones · chrome HIG/M3 OK |
| GAP-TAB-01 | Segment order | 0 Tuần đường · 1 Chấm công |
| GAP-TYP-01 | Label size | segment/section **13** · row title **≥16** |
| GAP-MOB-DES-PFX-01 | Board prefix | `ios/index.html` · `android/index.html` |
| GAP-MOB-UX-07 | design ↔ HTML | Pack proto khớp `design.md` |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | mobile-ui-ux-analy |
| skillVersion | 2026.08.19.23 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.19.29 |
| rulesVersion | 2026.08.19.34 |
| generatedAt | 2026-08-19T14:25:09.000Z |
| versionGate | rechecked |
| contentHash | sha256:7ad6e12c43d77ffc6133f5e3063b85200a6d18d6bd1f8ff91a265b989dcd3b9c |

---
<!-- Version meta: skillId=mobile-ui-ux-analy skillVersion=2026.08.19.23 schemaVersion=1 workflowVersion=2026.08.19.29 rulesVersion=2026.08.19.34 versionGate=rechecked -->
