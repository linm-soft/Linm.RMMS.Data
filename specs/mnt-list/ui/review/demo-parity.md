# Demo parity — mnt-list (list · Công việc)

Nguồn: `specs/mnt-list/ui/prototype/ios/index.html` · `android/index.html` `#sc-mnt-list`  
Slash: `/review-demo-design-mobile` · gate `ios-android-demo-parity.md`  
Ngày: 2026-08-29 · task `task_9df501b1`

## Verdict

**Must đóng** — dual HTML cùng copy zones · hub · **2** cards SSOT · toast PO P1.  
GAP-MOB-MNT-DEMO-01 **closed**.  
`design_confirm` **approve** (autoApprove=ON).

## Must — verified

| Id | Check |
|----|-------|
| GAP-MOB-DEMO-COPY-01 | Title **Danh sách công việc** dual same |
| GAP-MOB-DEMO-COPY-02 | Search **Tìm kiếm công việc…** dual same |
| GAP-MOB-DEMO-COPY-03 | Hub **Giao việc xử lý** · **Khối lượng · thời hạn · giao việc** dual |
| GAP-MOB-DEMO-COPY-04 | Card 1 **Vá mặt đường** · assign full · range · meta SC-2401 · status **Chờ xử lý** |
| GAP-MOB-DEMO-COPY-05 | Card 2 **Nạo cống** · assign · range · **Tuyến HCM** · status **Đã hoàn thành** |
| GAP-MOB-DEMO-COPY-06 | Toast **Bộ lọc · tuyến đường** · **Giao việc xử lý** · **Trao đổi công việc** · **Cập nhật trạng thái · ảnh + định vị** · **Nhật ký xử lý** · **cấm** `window.alert` |
| GAP-MOB-DEMO-ICON-01 | `#i-chevron-left` · `#i-search` · `#i-sum` · `#i-chat` · `#i-sync` · `#i-list` dual same `d=` |
| GAP-MOB-DEMO-TYPE-01 | tab/label **13** · search/card title **≥16** · meta/status **13** |
| GAP-MOB-ALIGN-01 | Dual 2 cards + hub + copy · Must **closed** |
| GAP-MOB-MNT-DEMO-01 | Android **2** cards (was 1) · copy = iOS SSOT |
| GAP-MOB-DES-PFX-01 | Board `ios/` · `android/` |
| GAP-TAB-01 | Shell tab **Công việc** selected · in-screen tabs **none** |

## Should — OK

| Item | Note |
|------|------|
| Filter chrome | iOS text «Lọc» · Android icon `#i-list` — HIG vs Material |
| Hub chevron | iOS has chevron · Android row without — chrome OK |
| Surface | iOS `#F2F2F7` · Android `#FFFBFE` — platform OK |

## DEFER (platform-OK)

| Token | iOS | Android | Note |
|-------|-----|---------|------|
| Frame | 390×844 | 412×915 | Device chrome |
| Surface | `#F2F2F7` | `#FFFBFE` | HIG vs M3 |
| Filter trailing | text Lọc | icon list | chrome only |
| Home indicator | bar | gesture | chrome only |

## A11y ids (Maestro)

| Id | Element |
|----|---------|
| `sc-mnt-list` | screen root |
| `mnt-search` | search field (Dev) |
| `mnt-hub-estimate` | hub row |
| `mnt-card-1` / `mnt-card-2` | WO cards |
| `tab-work` | shell tab Công việc |

## Version meta

skillId=review-demo-design-mobile · skillVersion=2026.08.25.01 · generatedAt=2026-08-29T01:50:00.000Z · taskId=task_9df501b1 · contentHash=sha256:mnt-list-mobile-list-20260828
