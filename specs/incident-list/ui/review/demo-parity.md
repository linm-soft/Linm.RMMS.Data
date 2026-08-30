# Demo parity — incident-list (list · Vấn đề)

Nguồn: `specs/incident-list/ui/prototype/ios/index.html` · `android/index.html` `#sc-incident-list`  
Slash: `/review-demo-design-mobile` · gate `ios-android-demo-parity.md`  
Ngày: 2026-08-29 · task `task_6800d075`  
Hash skip: inventory từ control-hint + real-data + PO · **cấm** re-scan mobile-p1 (`GAP-DES-DEMO-RESCAN-01`)

## Verdict

**Must đóng** — dual HTML cùng copy zones · segment · banner · **2** cards SSOT · FAB · toast PO P1.  
`design_confirm` **approve** (autoApprove=ON).

## Must — verified

| Id | Check |
|----|-------|
| GAP-MOB-DEMO-COPY-01 | Title **Quản lý vấn đề** dual same |
| GAP-MOB-DEMO-COPY-02 | Segment **Danh sách** / **Bản đồ** dual same |
| GAP-MOB-DEMO-COPY-03 | Search **Tìm kiếm vấn đề…** dual same |
| GAP-MOB-DEMO-COPY-04 | Banner **Nhận diện mặt đường** · **Chụp + định vị → gắn sự cố** dual |
| GAP-MOB-DEMO-COPY-05 | Card 1 **Nứt mặt đường** · Sự cố nhanh · SC-2401 · loc · person · time · **Đợi phân công giám sát** |
| GAP-MOB-DEMO-COPY-06 | Card 2 **Cống tắc** · Hệ thống an toàn · SC-2398 · HCM · Km 12+400 · **Đang được giám sát** |
| GAP-MOB-DEMO-COPY-07 | Toast **Lọc tuyến · loại · trạng thái** · **Trao đổi sự cố** · **Chi tiết vấn đề** · **Nhận diện mặt đường** · **cấm** `window.alert` |
| GAP-MOB-DEMO-ICON-01 | `#i-chevron-left` · `#i-search` · `#i-camera` · `#i-warning` · `#i-mappin` · `#i-person` · `#i-chat` · `#i-briefcase` · `#i-list` · `#i-plus` dual same `d=` |
| GAP-MOB-DEMO-TYPE-01 | tab/segment/label **13** · search/card/banner title **≥16** · meta/status **13** |
| GAP-MOB-ALIGN-01 | Dual 2 cards + banner + segment + FAB + copy · Must **closed** |
| GAP-MOB-DES-PFX-01 | Board `ios/` · `android/` |
| GAP-TAB-01 | Shell tab **Vấn đề** selected · in-screen **segment-2** · **cấm** invent tab 6 |

## Should — OK

| Item | Note |
|------|------|
| Filter chrome | iOS text «Lọc» · Android icon `#i-list` — HIG vs Material |
| Segment chrome | iOS pill segment · Android rounded — platform OK · cùng index/copy |
| FAB shape | iOS circle · Android rounded square — Material OK |
| Surface | iOS `#F2F2F7` · Android `#FFFBFE` — platform OK |

## DEFER (platform-OK)

| Token | iOS | Android | Note |
|-------|-----|---------|------|
| Frame | 390×844 | 412×915 | Device chrome |
| Surface | `#F2F2F7` | `#FFFBFE` | HIG vs M3 |
| Filter trailing | text Lọc | icon list | chrome only |
| Thumb media | placeholder | placeholder | GAP-MOB-INC-LIST-THUMB-01 DEFER |
| Home indicator | bar | gesture | chrome only |

## A11y ids (Maestro)

| Id | Element |
|----|---------|
| `sc-incident-list` | screen root |
| `incident-search` | search field (Dev) |
| `incident-banner-vis` | banner Nhận diện mặt đường |
| `incident-card-1` / `incident-card-2` | rich cards |
| `incident-fab` | FAB Ghi sự cố |
| `tab-incident` | shell tab Vấn đề |

## Version meta

skillId=review-demo-design-mobile · skillVersion=2026.08.25.01 · generatedAt=2026-08-29T01:45:00.000Z · taskId=task_6800d075 · contentHash=sha256:incident-list-mobile-list-20260829
