# Demo parity — patrol-home (hub · Tuần đường · edit_page)

Nguồn: `specs/patrol-home/ui/prototype/ios/index.html` · `android/index.html` `#sc-patrol-home`  
Slash: `/review-demo-design-mobile` · gate `ios-android-demo-parity.md`  
Ngày: 2026-09-12 · task `task_77ea403c`

## Verdict

**Must đóng** — dual HTML cùng zones · `#btn-open-session` / `emptyActive` · keep pin/kpi/quick · `#i-*` motif.  
`design_confirm` **approve** (autoApprove=ON).

## Must — verified

| Id | Check |
|----|-------|
| GAP-MOB-DEMO-COPY-01 | Title **Tuần đường** dual same |
| GAP-MOB-DEMO-COPY-02 | Segment **Tuần đường** / **Chấm công** · idx 0/1 lock |
| GAP-MOB-DEMO-COPY-03 | Hero active illustrative live · empty fields rule `—` (cấm mapper fallback) |
| GAP-MOB-DEMO-COPY-03b | **emptyActive** · eyebrow **Chưa có ca đang chạy** · title **—** dual |
| GAP-MOB-DEMO-COPY-04 | CTA **Tiếp tục bản đồ** · **Ghi điểm tuần** · **Ghim vị trí hiện tại** (active) |
| GAP-MOB-DEMO-COPY-04b | CTA **Mở ca** `#btn-open-session` dual (empty state) |
| GAP-MOB-DEMO-COPY-05 | KPI labels Đã ghi · Còn lại · Độ phủ · empty → **—** |
| GAP-MOB-DEMO-COPY-06 | Today PAT rows · badge Đang tuần / Xong |
| GAP-MOB-DEMO-COPY-07 | Quick 6 rows · Lưu trữ **Bản ghi chờ đồng bộ** |
| GAP-MOB-DEMO-COPY-08 | Toast: Thông báo · Chấm công · **Mở ca · POST** · sibling · **cấm** sheet |
| GAP-MOB-DEMO-ICON-01 | `#i-sync` · `#i-bell` · `#i-map` · `#i-plus` · `#i-mappin` · `#i-walk` · `#i-check` · `#i-camera` · `#i-video` · `#i-list` dual |
| GAP-MOB-DEMO-TYPE-01 | Segment/section **13** · row title **16** |
| GAP-MOB-ALIGN-01 | Dual lệch Must **closed** |
| GAP-MOB-DES-PFX-01 | Board `ios/` · `android/` |

## Should — OK

| Item | Note |
|------|------|
| iOS row chevron | Android no chevron — platform-OK |
| Segment chrome | iOS pill · Android underline |
| State toggle Có ca / Chưa có ca | preview only · **không** ship product chrome |

## DEFER (platform-OK)

| Token | iOS | Android | Note |
|-------|-----|---------|------|
| Frame | 390×844 | 412×915 | Device chrome |
| Surface | `#F2F2F7` | `#FFFBFE` | HIG vs M3 |
| Seg style | pill | underline | chrome only |

## A11y ids (Maestro)

| Id | Element |
|----|---------|
| `sc-patrol-home` | screen root |
| `nav-sync` / `nav-notify` | nav |
| `seg-patrol` / `seg-attendance` | segment |
| `hero-active` / `hero-empty` | hero states |
| `btn-open-session` | Mở ca |
| `hero-map` / `hero-checkin` | hero actions |
| `pin-here` | pin CTA |
| `row-today-1` / `row-today-2` | today |
| `row-reflect` … `row-offline` | quick |

## Version meta

skillId=review-demo-design-mobile · generatedAt=2026-09-12T15:15:00.000Z · taskId=task_77ea403c · changeScope=edit_page
