# UX analy — attendance (mobile list · Chấm công)

**Sources:** `ui/prototype/ios` · `ui/prototype/android` · `ui/design.md` · mobile-p1 `#sc-attendance` · PO `po/requirement.md`  
**Brand tokens:** primary `#0C84C0` · hero green `#34C759`/`#248A3D` · surface iOS `#F2F2F7` · Android `#FFFBFE`

## 1. IA

```
(auth) Login → Tab 5 (IA lock — không invent / reorder)
  Trang Chủ · Vấn đề · Công việc · Tôi
  Tuần đường (#sc-patrol-home)
    → segment idx 1 «Chấm công» → push #sc-attendance
#sc-attendance DES-MOB-ATT   ← this pack
  → segment idx 0 «Tuần đường» → pop #sc-patrol-home
  → Chấm vào → GPS + POST patrol/attendance-logs
  → Báo cáo → toast «Báo cáo công» (cấm push report)
  → tap day → toast «Chi tiết ngày công» (cấm push detail)
  → không child form / sheet (GAP-MOB-ACT-02 = none)
```

- Segment idx **0** Tuần đường · **1** Chấm công — **locked** (`GAP-TAB-01`).
- Shell tab 5 **không** đổi trên pack này.
- **Cấm** start 2 sibling `pending_confirm` (`GAP-MOB-ACT-06`).
- Check-in POST **cùng slug** — **cấm** enqueue submit sibling (`GAP-MOB-ACT-07`).

## 2. Màn

| DES / sc-* | Tên VN | iOS chrome | Android chrome | CTA |
|------------|--------|------------|----------------|-----|
| DES-MOB-ATT `#sc-attendance` | Chấm công | large title · pill seg · green hero · rows | large title · underline seg · green hero · rows | POST / toast / pop |
| DES-MOB-ATT-SEG | Segment 2 | pill `LinmSegment` | underline `LinmSegment` | filter owner |
| DES-MOB-ATT-HERO | Hero | `LinmHeroCard` green | same | check-in / report |
| DES-MOB-ATT-DAYS | 7 ngày gần đây | `LinmListRow` + badge | same | toast day |

## 3. Zone

### DES-MOB-ATT / `#sc-attendance`

| Zone | Demo (user thấy) | Map row | SwiftUI | Compose |
|------|------------------|---------|---------|---------|
| Large title | Chấm công | A `.large-title` | `LinmLargeTitle` | same |
| Segment | Tuần đường / Chấm công | A `.seg` | `LinmSegment` | same |
| Hero eyebrow | Chấm công theo định vị | A `.hero-eyebrow` | `LinmHeroCard` | same |
| Hero title | Chưa chấm vào | A `.hero-title` | same | same |
| Hero meta | Vị trí: Văn phòng QLĐB IV.1 · Khu IV · ±6 m / Ca sáng · 10/08/2026 | A `.hero-meta` | same | same |
| Chấm vào | white btn | A `.btn-white` | `LinmHeroAction` | same |
| Báo cáo | ghost btn | A `.btn-ghost` | `LinmHeroAction` | same |
| Section | 7 ngày gần đây | A `.section-label` | `LinmSectionLabel` | same |
| Day rows | CN/T7/T6 + badge | A `.row` | `LinmListRow` | same |
| Toast | Báo cáo công / Chi tiết ngày công / locDeny | A `.toast` | `LinmToast` | same |

**Không** zone: report screen · day detail · tab invent · «Có mạng» · watermark Gói · device label.

**States:**

| State | Hành vi |
|-------|---------|
| default | demo SSOT hero Chưa chấm · ≥3 day rows · segment 1 |
| loading | overlay nhẹ · **cấm** full-screen block |
| error / offline | demo fallback · optional toast · screen **mở** |
| checked-in | hero title **Đã chấm vào** after POST |
| GPS deny | toast locDeny · no POST |
| leave dirty | **N/A** |

## 4. Copy SSOT

| ✅ HTML / strings | ❌ Cấm trên máy |
|-------------------|-----------------|
| Chấm công | Attendance EN · device «iPhone» |
| Tuần đường · Chấm công | reorder / invent tab |
| Chấm công theo định vị | invent eyebrow |
| Chưa chấm vào · Đã chấm vào | «Not checked» EN |
| Vị trí: Văn phòng QLĐB IV.1 · Khu IV · ±6 m · Ca sáng · 10/08/2026 | invent meta lệch dual |
| Chấm vào · Báo cáo | invent CTA |
| 7 ngày gần đây | invent section |
| CN 10/08 · T7 09/08 · T6 08/08 | invent day titles |
| — · 07:05 – 16:40 · 07:12 – 16:55 | invent times |
| Nghỉ · Đủ công | invent badge EN |
| Báo cáo công · Chi tiết ngày công | `AlertDialog` · push sibling |
| — | «Có mạng» · watermark Gói · «· Android» |

## 5. Brand

Primary `#0C84C0` · hero green `#34C759`→`#248A3D` (iOS) / `#1B8A4A`→`#0F5C30` (Android chrome) · surface iOS `#F2F2F7` · Android `#FFFBFE` · card `#FFFFFF` · badge green / gray.  
**Cấm** skin đỏ CCCD · **cấm** M3 tím segment selected.

## 6. Signal

**N/A** trên hub `#sc-attendance` (không status capsule mạng).  
Hero = GPS / check-in state — **cấm** boolean «Có mạng» · **cấm** tap-cycle proto.

## 7. Pictogram

| Control | Motif | SF / Material |
|---------|-------|---------------|
| Hero check-in | kit plus (optional) | `LinmHeroAction` glyph |
| Day row | list chevron | kit default chevron |
| Segment | text only | no invent icon |

**Cấm** invent icon lệch dual · **cấm** Filled Material lệch metaphor trên hub.

## 8. Motion

Không `/wf-anim` trên hub `attendance`. Segment pop instant · toast fade · hero title swap after POST · push/pop standard.

## 9. GAP

| ID | Demo vs native | Quyết định |
|----|----------------|------------|
| GAP-MOB-ATT-01 | Báo cáo live | **closed** — P1 toast only |
| GAP-MOB-ATT-02 | Day detail live | **closed** — P1 toast only |
| GAP-MOB-ATT-03 | GPS deny | **closed** — toast · no POST |
| GAP-MOB-ACT-01 | 1 hub action | **closed** — không gộp sibling |
| GAP-MOB-ACT-02 | child form | **none** on hub |
| GAP-MOB-ACT-05 | kit map | reuse LargeTitle/Segment/Hero/ListRow/Toast |
| GAP-MOB-ACT-06 | sibling enqueue | **không** start |
| GAP-MOB-ACT-07 | check-in submit | **cùng slug** POST · **không** sibling |
| GAP-MOB-ALIGN-01 | Dual chrome | Cùng copy zones · pill vs underline OK |
| GAP-TAB-01 | Segment order | 0 Tuần đường · 1 Chấm công |
| GAP-TYP-01 | Type size | segment **13** · title ≥**16** · meta/row **13** |
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
| generatedAt | 2026-08-19T20:40:00.000Z |
| versionGate | rechecked |
| contentHash | sha256:attendance-mobile-hub-20260819 |

---
<!-- Version meta: skillId=mobile-ui-ux-analy skillVersion=2026.08.19.23 schemaVersion=1 workflowVersion=2026.08.19.29 rulesVersion=2026.08.19.34 versionGate=rechecked -->
