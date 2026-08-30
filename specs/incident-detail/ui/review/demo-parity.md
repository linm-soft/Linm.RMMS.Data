# Demo parity — incident-detail (screen · Chi tiết vấn đề)

Nguồn: `specs/incident-detail/ui/prototype/ios/index.html` · `android/index.html` `#sc-incident-detail`  
Slash: `/review-demo-design-mobile` · gate `ios-android-demo-parity.md`  
Ngày: 2026-08-29 · task `task_db8582b2`  
Hash skip: inventory từ control-hint + real-data + PO · **cấm** re-scan mobile-p1 (`GAP-DES-DEMO-RESCAN-01`)

## Verdict

**Must đóng** — dual HTML cùng zones · hero · rows (gồm **Nguồn**) · 3 CTA · toast close · shell tab Vấn đề.  
Chrome lệch (back text vs icon · title Chi tiết vs Chi tiết sự cố · code 28 vs 24) = platform-OK.  
`design_confirm` **approve** (autoApprove=ON).

## Must — verified

| Id | Check |
|----|-------|
| GAP-MOB-DEMO-COPY-01 | Caption **Mã** · Code **SC-2401** dual same |
| GAP-MOB-DEMO-COPY-02 | Badge **Nghiêm trọng · Đang mở** dual same |
| GAP-MOB-DEMO-COPY-03 | Rows **Loại** / **Nứt mặt đường** · **Vị trí ghim tự động** / **QL.1 · Km 1556+080** dual |
| GAP-MOB-DEMO-COPY-04 | **Định vị** / **10.9620, 106.8518 · ±5 m** dual (demo fallback only) |
| GAP-MOB-DEMO-COPY-05 | **Nguồn** / **Tuần đường PAT-…0014** dual (GAP-MOB-INC-DETAIL-SRC-01 closed in pack) |
| GAP-MOB-DEMO-COPY-06 | CTA **Giao việc xử lý** · **Xem trên bản đồ** · **Đóng sự cố** dual same |
| GAP-MOB-DEMO-COPY-07 | Toast **Đã đóng sự cố** · **cấm** `window.alert` |
| GAP-MOB-DEMO-ICON-01 | `#i-chevron-left` dual same `d=` · **cấm** invent icon |
| GAP-MOB-DEMO-TYPE-01 | caption/badge/tab **13** · code ≥**24/28** · row ≥**16** |
| GAP-MOB-ALIGN-01 | Dual zones + copy · Must **closed** |
| GAP-MOB-DES-PFX-01 | Board `ios/` · `android/` |
| GAP-TAB-01 | Shell tab **Vấn đề** selected · `tabs: none` surface · **cấm** invent tab 6 / segment |
| GAP-MOB-INC-DETAIL-PACK-01 | packKind **screen** · full `#sc-incident-detail` · **cấm** sheet chrome |

## Should — OK

| Item | Note |
|------|------|
| Back chrome | iOS text «Vấn đề» + chevron · Android icon-only — HIG vs Material |
| Title | iOS **Chi tiết** · Android **Chi tiết sự cố** — PO chrome OK |
| Code size | iOS 28 · Android 24 — platform OK · cả ≥24 |
| Button shape | iOS 12 radius · Android pill secondary outline — Material OK |
| Surface | iOS `#F2F2F7` · Android `#FFFBFE` — platform OK |

## DEFER (platform-OK)

| Token | iOS | Android | Note |
|-------|-----|---------|------|
| Frame | 390×844 | 412×915 | Device chrome |
| Surface | `#F2F2F7` | `#FFFBFE` | HIG vs M3 |
| Back trailing | text+icon | icon-only | chrome only |
| Title string | Chi tiết | Chi tiết sự cố | chrome only |
| Lat/Lng wire | demo fallback | same | GAP-MOB-INC-DETAIL-GPS-01 → SA Signed nếu cần |
| Home indicator | bar | gesture | chrome only |

## A11y ids (Maestro)

| Id | Element |
|----|---------|
| `sc-incident-detail` | screen root |
| `incident-detail-code` | hero Code |
| `incident-detail-badge` | severity×status badge |
| `incident-detail-assign` | CTA Giao việc xử lý |
| `incident-detail-map` | CTA Xem trên bản đồ |
| `incident-detail-close` | CTA Đóng sự cố |
| `tab-incident` | shell tab Vấn đề |

## Version meta

skillId=review-demo-design-mobile · skillVersion=2026.08.25.01 · generatedAt=2026-08-29T02:49:06.000Z · taskId=task_db8582b2 · contentHash=sha256:incident-detail-control-hint-20260829
