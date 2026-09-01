# Demo parity — supervise-detail (screen · Chi tiết check-in)

Nguồn: `specs/supervise-detail/ui/prototype/ios/index.html` · `android/index.html` `#sc-supervise-detail`  
Slash: `/review-demo-design-mobile` · gate `ios-android-demo-parity.md`  
Ngày: 2026-08-31 · task `task_d9769d91`  
Hash skip: inventory từ control-hint + real-data + PO · **cấm** re-scan mobile-p1 (`GAP-DES-DEMO-RESCAN-01`)

## Verdict

**Must đóng** — dual HTML cùng zones · hero UserName · Mã/Code · 6 rows · CTA map · shell tab Trang Chủ.  
Chrome lệch (back text vs icon · hero 28 vs 24 · button radius) = platform-OK.  
`design_confirm` **approve** (autoApprove=ON).

## Must — verified

| Id | Check |
|----|-------|
| GAP-MOB-DEMO-COPY-01 | Title dual **Chi tiết check-in** |
| GAP-MOB-DEMO-COPY-02 | Hero **Nguyễn Văn A** · caption **Mã** · **CC-20260810-001** dual same |
| GAP-MOB-DEMO-COPY-03 | Rows **Tổ / đơn vị** / **Tổ tuần đường · VP-IV.1** · **Tuyến · lý trình** / **QL.1 Km 1556+000 · Xuân Hải** dual |
| GAP-MOB-DEMO-COPY-04 | **Thời điểm** / **2026-08-10 08:40:12** · **Trạng thái** / **Đã ghi điểm tuần** dual |
| GAP-MOB-DEMO-COPY-05 | **Tọa độ** / **11.5300, 109.0040** · **Trong vùng** / **Trong vùng** dual |
| GAP-MOB-DEMO-COPY-06 | CTA **Xem trên bản đồ** dual same |
| GAP-MOB-DEMO-COPY-07 | Toast via `.toast` · **cấm** `window.alert` |
| GAP-MOB-DEMO-ICON-01 | `#i-chevron-left` dual same `d=` · **cấm** invent icon |
| GAP-MOB-DEMO-TYPE-01 | caption/label/tab **13** · hero ≥**24/28** · row/code ≥**16** |
| GAP-MOB-ALIGN-01 | Dual zones + copy · Must **closed** |
| GAP-MOB-DES-PFX-01 | Board `ios/` · `android/` |
| GAP-TAB-01 | Shell tab **Trang Chủ** selected · `tabs: none` surface · **cấm** invent tab 6 / segment |
| GAP-MOB-SUP-DET-PACK-01 | packKind **screen** · full `#sc-supervise-detail` · **cấm** sheet chrome |
| GAP-MOB-SUP-DET-DEMO-01 | Own `#sc-supervise-detail` · **cấm** reuse CI-DETAIL / title «Ghi điểm tuần» |

## Should — OK

| Item | Note |
|------|------|
| Back chrome | iOS text «Giám sát» + chevron · Android icon-only — HIG vs Material |
| Title | Dual **Chi tiết check-in** — PO TITLE-01 |
| Hero size | iOS 28 · Android 24 — platform OK · cả ≥24 |
| Button shape | iOS 12 radius · Android pill — Material OK |
| Surface | iOS `#F2F2F7` · Android `#FFFBFE` — platform OK |

## DEFER (platform-OK)

| Token | iOS | Android | Note |
|-------|-----|---------|------|
| Frame | 390×844 | 412×915 | Device chrome |
| Surface | `#F2F2F7` | `#FFFBFE` | HIG vs M3 |
| Back trailing | text+icon | icon-only | chrome only |
| Hero size | 28 | 24 | ≥24 both |
| Home indicator | bar | gesture | chrome only |
| mobile-p1 rewire | Dev | Dev | card `go('supervise-detail')` · GAP-MOB-SUP-DET-DEMO-01 / NAV-01 |

## A11y ids (Maestro)

| Id | Element |
|----|---------|
| `sc-supervise-detail` | screen root |
| `supervise-detail-hero` | hero UserName |
| `supervise-detail-code` | Code CC-* |
| `supervise-detail-map` | CTA Xem trên bản đồ |
| `tab-home` | shell tab Trang Chủ |

## Version meta

skillId=review-demo-design-mobile · skillVersion=2026.08.25.01 · generatedAt=2026-08-31T02:10:00.000Z · taskId=task_d9769d91 · contentHash=sha256:supervise-detail-control-hint-20260831
