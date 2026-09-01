# Demo parity — asset-detail (screen · Chi tiết tài sản)

Nguồn: `specs/asset-detail/ui/prototype/ios/index.html` · `android/index.html` `#sc-asset-detail`  
Slash: `/review-demo-design-mobile` · gate `ios-android-demo-parity.md`  
Ngày: 2026-08-30 · task `task_039c59ba`  
Hash skip: inventory từ control-hint + real-data + PO · **cấm** re-scan mobile-p1 (`GAP-DES-DEMO-RESCAN-01`)

## Verdict

**Must đóng** — dual HTML cùng zones · hero · rows (gồm **Tọa độ**) · CTA Ghim trên bản đồ · shell tab Trang Chủ.  
Chrome lệch (back text vs icon · title Chi tiết vs Chi tiết tài sản · code 28 vs 24) = platform-OK.  
`design_confirm` **approve** (autoApprove=ON).

## Must — verified

| Id | Check |
|----|-------|
| GAP-MOB-DEMO-COPY-01 | Caption **Mã TS** · Code **TS-20260810-014** dual same |
| GAP-MOB-DEMO-COPY-02 | Rows **Loại** / **Cống** · **Tuyến · lý trình** / **QL.1 · Km 1556+000** dual |
| GAP-MOB-DEMO-COPY-03 | **Tọa độ** / **11.5300, 109.0040** dual (GAP-MOB-ASSET-DET-GPS-01 closed in pack · demo offline only) |
| GAP-MOB-DEMO-COPY-04 | CTA **Ghim trên bản đồ** dual same |
| GAP-MOB-DEMO-COPY-05 | Toast in-app · **cấm** `window.alert` |
| GAP-MOB-DEMO-ICON-01 | `#i-chevron-left` dual same `d=` · **cấm** invent icon |
| GAP-MOB-DEMO-TYPE-01 | caption/tab **13** · code ≥**24/28** · row ≥**16** |
| GAP-MOB-ALIGN-01 | Dual zones + copy · Must **closed** |
| GAP-MOB-DES-PFX-01 | Board `ios/` · `android/` |
| GAP-TAB-01 | Shell tab **Trang Chủ** selected · `tabs: none` surface · **cấm** invent tab 6 / segment |
| GAP-MOB-ASSET-DET-PACK-01 | packKind **screen** · full `#sc-asset-detail` · **cấm** sheet chrome |

## Should — OK

| Item | Note |
|------|------|
| Back chrome | iOS text «Tài sản» + chevron · Android icon-only — HIG vs Material |
| Title | iOS **Chi tiết** · Android **Chi tiết tài sản** — PO chrome OK (GAP-MOB-ASSET-DET-TITLE-01) |
| Code size | iOS 28 · Android 24 — platform OK · cả ≥24 |
| Button shape | iOS 12 radius · Android pill — Material OK |
| Surface | iOS `#F2F2F7` · Android `#FFFBFE` — platform OK |

## DEFER (platform-OK)

| Token | iOS | Android | Note |
|-------|-----|---------|------|
| Frame | 390×844 | 412×915 | Device chrome |
| Surface | `#F2F2F7` | `#FFFBFE` | HIG vs M3 |
| Back trailing | text+icon | icon-only | chrome only |
| Title string | Chi tiết | Chi tiết tài sản | chrome only |
| GPS hide-if-null | runtime | same | demo shows coords (offline SSOT) |
| Home indicator | bar | gesture | chrome only |

## A11y ids (Maestro)

| Id | Element |
|----|---------|
| `sc-asset-detail` | screen root |
| `asset-detail-code` | hero Code |
| `asset-detail-map` | CTA Ghim trên bản đồ |
| `row-gps` | row Tọa độ |
| `tab-home` | shell tab Trang Chủ |

## Version meta

skillId=review-demo-design-mobile · skillVersion=2026.08.25.01 · generatedAt=2026-08-30T21:30:00.000Z · taskId=task_039c59ba · contentHash=sha256:asset-detail-control-hint-20260830
