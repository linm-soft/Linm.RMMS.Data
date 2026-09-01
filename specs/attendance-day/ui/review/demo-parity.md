# Demo parity — attendance-day (screen · Chi tiết ngày công)

Nguồn: `specs/attendance-day/ui/prototype/ios/index.html` · `android/index.html` `#sc-attendance-day`  
Slash: `/review-demo-design-mobile` · gate `ios-android-demo-parity.md`  
Ngày: 2026-08-31 · task `task_db7380c8`  
Hash skip: inventory từ control-hint + real-data + PO · **cấm** re-scan mobile-p1 (`GAP-DES-DEMO-RESCAN-01`)

## Verdict

**Must đóng** — dual HTML cùng zones · hero dayTitle · badge · 3 summary rows · section logs · 2 log rows · shell tab Tuần đường.  
Chrome lệch (back text vs icon · hero 28 vs 24 · card radius) = platform-OK.  
`design_confirm` **approve** (autoApprove=ON).

## Must — verified

| Id | Check |
|----|-------|
| GAP-MOB-DEMO-COPY-01 | Title dual **Chi tiết ngày công** |
| GAP-MOB-DEMO-COPY-02 | Hero **T7 09/08** · badge **Đủ công** dual same |
| GAP-MOB-DEMO-COPY-03 | Summary **Khoảng giờ** / **07:05 – 16:40** · **Tuyến · ca** / **QL.1 · Ca sáng** dual |
| GAP-MOB-DEMO-COPY-04 | **Số lần chấm** / **2 lần chấm** dual |
| GAP-MOB-DEMO-COPY-05 | Section **Các lần chấm** dual |
| GAP-MOB-DEMO-COPY-06 | Log1 **07:05** / **QL.1 · Đúng tuyến · Trong vùng** · Log2 **16:40** dual |
| GAP-MOB-DEMO-COPY-07 | Toast via `.toast` · tap log **Chi tiết lần chấm** · **cấm** `window.alert` |
| GAP-MOB-DEMO-ICON-01 | `#i-chevron-left` dual same `d=` · **cấm** invent icon |
| GAP-MOB-DEMO-TYPE-01 | caption/label/tab **13** · hero ≥**24/28** · row ≥**16** |
| GAP-MOB-ALIGN-01 | Dual zones + copy · Must **closed** |
| GAP-MOB-DES-PFX-01 | Board `ios/` · `android/` |
| GAP-TAB-01 | Shell tab **Tuần đường** selected · `tabs: none` surface · **cấm** invent tab 6 / segment |
| GAP-MOB-ATT-DAY-PACK-01 | packKind **screen** · full `#sc-attendance-day` · **cấm** sheet chrome |
| GAP-MOB-ATT-DAY-DEMO-01 | Own `#sc-attendance-day` · Dev rewire hub row `go('attendance-day')` |

## Should — OK

| Item | Note |
|------|------|
| Back chrome | iOS text «Chấm công» + chevron · Android icon-only — HIG vs Material |
| Title | Dual **Chi tiết ngày công** — PO TITLE-01 |
| Hero size | iOS 28 · Android 24 — platform OK · cả ≥24 |
| Card radius | iOS 12 · Android 16 — platform OK |
| Surface | iOS `#F2F2F7` · Android `#FFFBFE` — platform OK |

## DEFER (platform-OK)

| Token | iOS | Android | Note |
|-------|-----|---------|------|
| Frame | 390×844 | 412×915 | Device chrome |
| Surface | `#F2F2F7` | `#FFFBFE` | HIG vs M3 |
| Back trailing | text+icon | icon-only | chrome only |
| Hero size | 28 | 24 | ≥24 both |
| Home indicator | bar | gesture | chrome only |
| mobile-p1 rewire | Dev | Dev | day row `go('attendance-day')` · GAP-MOB-ATT-DAY-DEMO-01 / NAV-01 |
| Empty day CN 10/08 | Dev bind | Dev bind | empty chrome state · not primary proto frame |

## A11y ids (Maestro)

| Id | Element |
|----|---------|
| `sc-attendance-day` | screen root |
| `attendance-day-hero` | hero dayTitle |
| `attendance-day-badge` | badge aggregate |
| `attendance-day-range` | row Khoảng giờ |
| `attendance-day-route` | row Tuyến · ca |
| `attendance-day-count` | row Số lần chấm |
| `attendance-day-logs` | log list container |
| `attendance-day-log-1` | first log row |
| `attendance-day-log-2` | second log row |
| `tab-field` | shell tab Tuần đường |

## Version meta

skillId=review-demo-design-mobile · skillVersion=2026.08.25.01 · generatedAt=2026-08-31T03:00:00.000Z · taskId=task_db7380c8 · contentHash=sha256:attendance-day-control-hint-20260831
