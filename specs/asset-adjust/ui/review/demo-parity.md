# Demo parity — asset-adjust (screen · Cập nhật / bớt)

Nguồn: `specs/asset-adjust/ui/prototype/ios/index.html` · `android/index.html` `#sc-asset-adjust` · `#md-asset-remove`  
Slash: `/review-demo-design-mobile` · gate `ios-android-demo-parity.md`  
Ngày: 2026-08-30 · task `task_6476a9ab`  
Hash skip: inventory từ control-hint + real-data + PO · **cấm** re-scan mobile-p1 (`GAP-DES-DEMO-RESCAN-01`)

## Verdict

**Must đóng** — dual HTML cùng zones · search SSOT dài · list rows · Sửa/Bớt · modal `#md-asset-remove` · toast · shell tab Trang Chủ.  
Chrome lệch (back text vs icon · btn filled vs text · demo row count 2 vs 1) = platform-OK / PO ROW-01.  
`design_confirm` **approve** (autoApprove=ON).

## Must — verified

| Id | Check |
|----|-------|
| GAP-MOB-DEMO-COPY-01 | Title **Cập nhật / bớt** dual same |
| GAP-MOB-DEMO-COPY-02 | Search **Tìm mã TS cần sửa hoặc bớt…** dual (SEARCH-01 closed) |
| GAP-MOB-DEMO-COPY-03 | Row1 **TS-20260810-014 · Cống ngang** / **QL.1 · Km 1556+000** dual |
| GAP-MOB-DEMO-COPY-04 | CTA **Sửa** · **Bớt** dual same labels |
| GAP-MOB-DEMO-COPY-05 | Modal **Bớt tài sản khỏi sổ?** · **Bớt khỏi sổ** · **Giữ lại** · body SSOT dual |
| GAP-MOB-DEMO-COPY-06 | Toast **Đã bớt tài sản · TS-20260810-014** · in-app · **cấm** `window.alert` |
| GAP-MOB-DEMO-ICON-01 | `#i-chevron-left` · `#i-search` dual same `d=` · **cấm** invent icon |
| GAP-MOB-DEMO-TYPE-01 | tab/sub **13** · row title ≥**16** · modal title ≥**17** |
| GAP-MOB-ALIGN-01 | Dual zones + copy · Must **closed** |
| GAP-MOB-DES-PFX-01 | Board `ios/` · `android/` |
| GAP-TAB-01 | Shell tab **Trang Chủ** selected · `tabs: none` surface · **cấm** invent tab 6 / segment |
| GAP-MOB-ASSET-ADJUST-PACK-01 | packKind **screen** · full `#sc-asset-adjust` · **cấm** sheet chrome |

## Should — OK

| Item | Note |
|------|------|
| Back chrome | iOS text «Tài sản» + chevron · Android icon-only — HIG vs Material |
| Btn style | iOS filled Secondary/Danger · Android text primary/error — PO chrome OK |
| Demo row count | iOS 2 · Android 1 — sample fallback only (ROW-01) · live = GET |
| Button shape | iOS 10–12 radius · Android pill/text — Material OK |
| Surface | iOS `#F2F2F7` · Android `#FFFBFE` — platform OK |

## DEFER (platform-OK)

| Token | iOS | Android | Note |
|-------|-----|---------|------|
| Frame | 390×844 | 412×915 | Device chrome |
| Surface | `#F2F2F7` | `#FFFBFE` | HIG vs M3 |
| Back trailing | text+icon | icon-only | chrome only |
| Row actions | filled | text | chrome only |
| Demo rows | 2 | 1 | sample only · live GET |
| Home indicator | bar | gesture | chrome only |

## A11y ids (Maestro)

| Id | Element |
|----|---------|
| `sc-asset-adjust` | screen root |
| `asset-adjust-back` | back → hub |
| `asset-adjust-search` | SearchField |
| `asset-adjust-list` | list container |
| `asset-adjust-edit-1` | Sửa row1 |
| `asset-adjust-remove-1` | Bớt row1 |
| `md-asset-remove` | modal confirm |
| `md-confirm` | Bớt khỏi sổ |
| `md-cancel` | Giữ lại |
| `tab-home` | shell tab Trang Chủ |

## Version meta

skillId=review-demo-design-mobile · skillVersion=2026.08.25.01 · generatedAt=2026-08-30T23:40:00.000Z · taskId=task_6476a9ab · contentHash=sha256:asset-adjust-control-hint-20260830
