# Demo parity — patrol-home (hub · Tuần đường)

Nguồn: `specs/patrol-home/ui/prototype/ios/index.html` · `android/index.html` `#sc-patrol-home`  
Slash: `/review-demo-design-mobile` · gate `ios-android-demo-parity.md`  
Ngày: 2026-08-19 · task `task_e73de8f1`

## Verdict

**Must đóng** — dual HTML cùng copy zones · `#i-*` motif · toast PO · badge 0 ẩn.  
`design_confirm` **approve** (autoApprove=ON).

## Must — verified

| Id | Check |
|----|-------|
| GAP-MOB-DEMO-COPY-01 | Title **Tuần đường** dual same |
| GAP-MOB-DEMO-COPY-02 | Segment **Tuần đường** / **Chấm công** · idx 0/1 lock |
| GAP-MOB-DEMO-COPY-03 | Hero **QL.1 · Km 1556+000** · PAT-20260810-0014 · Nguyễn Văn A · Điểm tuần 2/3 · Độ phủ 67% |
| GAP-MOB-DEMO-COPY-04 | CTA **Tiếp tục bản đồ** · **Ghi điểm tuần** · **Ghim vị trí hiện tại** |
| GAP-MOB-DEMO-COPY-05 | KPI **2** / **1** / **67%** labels Đã ghi điểm tuần · Còn lại · Độ phủ |
| GAP-MOB-DEMO-COPY-06 | Today PAT-…0014 **Đang tuần** · PAT-…0009 **Xong** |
| GAP-MOB-DEMO-COPY-07 | Quick 6 rows cùng title/sub · Lưu trữ sub **Bản ghi chờ đồng bộ** (không «3») |
| GAP-MOB-DEMO-COPY-08 | Toast targets: Thông báo · Chấm công · sibling labels · **cấm** sheet / push ops |
| GAP-MOB-DEMO-ICON-01 | `#i-sync` · `#i-bell` · `#i-map` · `#i-plus` · `#i-mappin` · `#i-walk` · `#i-check` · `#i-camera` · `#i-video` · `#i-list` dual |
| GAP-MOB-DEMO-TYPE-01 | Segment/section **13** · row title **16** · large title hero |
| GAP-MOB-ALIGN-01 | Dual lệch Must **closed** (copy + icons) |
| GAP-MOB-DES-PFX-01 | Board `ios/` · `android/` |

## Should — OK

| Item | Note |
|------|-------|
| iOS row chevron | Android no chevron — platform-OK |
| Segment chrome | iOS pill · Android underline — HIG vs M3 |
| Hero button icons | dual `#i-map` / `#i-plus` present |

## DEFER (platform-OK)

| Token | iOS | Android | Note |
|-------|-----|---------|------|
| Frame | 390×844 | 412×915 | Device chrome |
| Surface | `#F2F2F7` | `#FFFBFE` | HIG vs M3 |
| Seg style | pill | underline | chrome only |
| Row min-height | 56 | 56 | OK |
| Icon slot | 36 rounded-rect | 40 circle | Material OK |

## A11y ids (Maestro)

| Id | Element |
|----|---------|
| `sc-patrol-home` | screen root |
| `nav-sync` | sync |
| `nav-notify` | bell |
| `seg-patrol` | segment 0 |
| `seg-attendance` | segment 1 |
| `hero-map` / `hero-checkin` | hero actions |
| `pin-here` | pin CTA |
| `row-today-1` / `row-today-2` | today rows |
| `row-reflect` · `row-cam` · `row-map` · `row-history` · `row-supervise` · `row-offline` | quick |

## Version meta

skillId=review-demo-design-mobile · generatedAt=2026-08-19T14:25:09.000Z · taskId=task_e73de8f1
