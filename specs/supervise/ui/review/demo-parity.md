# Demo parity — supervise (list · Giám sát)

Nguồn: `specs/supervise/ui/prototype/ios/index.html` · `android/index.html` `#sc-supervise`  
Slash: `/review-demo-design-mobile` · gate `ios-android-demo-parity.md`  
Ngày: 2026-08-19 · task `task_b163f3ae`

## Verdict

**Must đóng** — dual HTML cùng copy zones · `#i-*` motif · toast PO · 2 cards SSOT.  
`design_confirm` **approve** (autoApprove=ON).

## Must — verified

| Id | Check |
|----|-------|
| GAP-MOB-DEMO-COPY-01 | Title **Giám sát tuần đường** dual same |
| GAP-MOB-DEMO-COPY-02 | Back **Trang Chủ** + trailing **Lọc** dual (Android pack **không** icon-only) |
| GAP-MOB-DEMO-COPY-03 | Segment **Danh sách check in** / **Bản đồ** · idx 0/1 lock |
| GAP-MOB-DEMO-COPY-04 | Card 1 **Nguyễn Văn A** · Tổ tuần đường · VP-IV.1 · QL.1 Km 1556+000 · Xuân Hải · 2026-08-10 08:40:12 |
| GAP-MOB-DEMO-COPY-05 | Card 2 **Trần Khánh** · Chi cục II.2 · QL.1 Km 1561+134 · Phước Dinh · 2026-08-10 09:12:44 |
| GAP-MOB-DEMO-COPY-06 | Status dual **Trạng thái: Đã ghi điểm tuần** |
| GAP-MOB-DEMO-COPY-07 | Toast **Lọc tuyến · ngày** · **Bản đồ** · **Chi tiết check-in** · **cấm** `go(sibling)` / `window.alert` |
| GAP-MOB-DEMO-ICON-01 | `#i-chevron-left` · `#i-building` · `#i-mappin` dual **cùng `d=`** |
| GAP-MOB-DEMO-TYPE-01 | Segment **13** · title **16/17** · org/loc/status **13** |
| GAP-MOB-ALIGN-01 | Dual lệch Must **closed** (copy + icons) |
| GAP-MOB-DES-PFX-01 | Board `ios/` · `android/` |

## Should — OK

| Item | Note |
|------|------|
| Segment chrome | iOS pill · Android underline — HIG vs M3 |
| Card title size | iOS 17 · Android 16 — field ≥16 |
| Thumb 56 | dual placeholder gradient |

## DEFER (platform-OK)

| Token | iOS | Android | Note |
|-------|-----|---------|------|
| Frame | 390×844 | 412×915 | Device chrome |
| Surface | `#F2F2F7` | `#FFFBFE` | HIG vs M3 |
| Seg style | pill | underline | chrome only |
| Home indicator | bar | gesture | chrome only |

## A11y ids (Maestro)

| Id | Element |
|----|---------|
| `sc-supervise` | screen root |
| `btn-sup-back` | back Trang Chủ |
| `btn-sup-filter` | Lọc |
| `sup-segment` | segment host |
| `seg-list` | segment 0 |
| `seg-map` | segment 1 |
| `sup-card-demo-1` / `sup-card-demo-2` | cards |

## Version meta

skillId=review-demo-design-mobile · generatedAt=2026-08-19T15:25:00.000Z · taskId=task_b163f3ae
