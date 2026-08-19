# UX analy — patrol-map

**Sources:** prototype dual `#sc-patrol-map` · `ui/design.md` · PO `po/requirement.md` · DA controlHint  
**Gate:** `/mobile-ui-ux-analy` §1–§9 · **REQUIRED** trước `design_confirm` / Dev  
**Slash:** `/mobile-ui-ux-analy` · task `task_4ba10fbc` · `2026-08-20T01:56:00.000Z`

## 1. IA

Login → Tab 5 · Tuần đường hub → **push** Bản đồ ca `#sc-patrol-map`.  
`tabs: none` trên surface map. Shell tab **giữ** (field selected). **Cấm** reorder Tab 5 (`GAP-TAB-01`).

```
Tuần đường (selected) → #sc-patrol-home
  push → #sc-patrol-map DES-MOB-PAT-MAP   ← this pack
    ← back → pop patrol-home
    → Ghi điểm tuần = toast P1 · cấm sheet (GAP-MOB-ACT-02)
    → Ghim = loc live + zoom + pin here · toast · deny copy · cấm fake lat/lng
    → basemap ×4 · legend ×4 wrap (flex-wrap) = filter cùng slug
```

## 2. Màn

| DES / sc-* | Tên VN | iOS chrome | Android chrome | CTA |
|------------|--------|------------|----------------|-----|
| DES-MOB-PAT-MAP `#sc-patrol-map` | Ca đang chạy | Nav text back **Tuần đường** | Icon back | Ghi điểm tuần · Ghim |
| DES-MOB-OMS-PATROL | OMS | MapKit | OSM tiles | Basemap · isolate |
| DES-MOB-CI-PIN-HERE | Ghim | `LinmPrimaryButton` + `#i-mappin` | same | loc + zoom + pin here · toast · deny `patrol.map.locDeny` |
| DES-MOB-TABBAR | Tab 5 | shell | shell | **cấm** invent |

## 3. Zone

### DES-MOB-PAT-MAP / `#sc-patrol-map`

| Zone | Demo | Map | SwiftUI | Compose |
|------|------|-----|---------|---------|
| Nav | Ca đang chạy · Ghi điểm tuần | A `.nav-bar` / `.top-bar` | `LinmTopBar` | same |
| Map | Leaflet live demo | A `#map-patrol-host` / `#map-patrol` | MapKit `Map` | osmdroid `MapView` |
| Next | Điểm tiếp theo · OSRM · Km… | A `.map-next-card` | overlay + `LinmPrimaryButton` | same |
| Pin | Ghim vị trí hiện tại | A `#btn-pin-here` `#i-mappin` | `LinmPrimaryButton` + `LinmMapPinGlyph` | same · **live loc** zoom + pin `.here` |
| Bar | Đường Phố Vệ tinh Toàn tuyến | A `#mb-osm`…`#mb-fit` wrap | `ChipWrap` + `LinmChip` | `FlowRow` + `LinmChip` |
| Legend | 4 isolate | A `#lg-all`…`#lg-next` wrap | `ChipWrap` + `LinmChip` | `FlowRow` + `LinmChip` |
| Tab | Tab 5 field | shell | `LinmTabBar` | same |

**States:** default overlay · isolate track/done/next · GET fail demo · offline map mở · pin-here loc+zoom · deny/timeout toast · toast check-in · **cấm** fake pin · **cấm** full-screen block · **cấm** sheet check-in · **cấm** `UIAlert` / `AlertDialog`.

## 4. Copy SSOT

Ca đang chạy · Tuần đường · Ghi điểm tuần · Điểm tiếp theo · OSRM · Km 1561+134 · Phước Dinh · Ghim vị trí hiện tại · Đường · Phố · Vệ tinh · Toàn tuyến · Tất cả · Hành trình · Đã ghi điểm tuần · Điểm kế tiếp.

Toast: **Ghi điểm tuần** · **Ghim vị trí hiện tại** (ok) · deny `patrol.map.locDeny` · timeout `patrol.map.locTimeout`. **Cấm** chữ «GPS» trên máy.

**Cấm trên máy:** Check-in · GPS · Offline · Có mạng · P1/P2 · Gói N · device label.

## 5. Brand

Tokens primary `#0C84C0` · track `#0A84FF` · pin done green · next orange. **Cấm** skin Ministry.

## 6. Type

Nav title **17** · overlay eyebrow / chip / legend **13** · next title / primary CTA **≥16** (`GAP-TYP-01`).  
Android eyebrow demo **13** (đã sửa từ 12).

## 7. Signal / pict

**N/A** trên map (hub owns signal). **Cấm** «Có mạng» · **cấm** signal tap cycle trên map.

Pict: `#i-mappin` pin · `#i-chevron-left` back — **cấm** invent.

## 8. Dual parity

Cùng copy zones · cùng `#i-mappin` · cùng 4 basemap + 4 legend wrap · cùng pin-here loc+zoom. **Cấm** worker revert toast-only (**GAP-MOB-EDIT-01**).  
DEFER platform-OK: iOS MapKit vs Android OSM · iOS back text vs Android icon · pin done/next hex platform tint.

Must: `/review-demo-design-mobile` → `ui/review/demo-parity.md`.

## 9. A11y ids

| Id | Element |
|----|---------|
| `sc-patrol-map` | root |
| `btn-map-back` | back |
| `btn-map-checkin` | nav Ghi điểm tuần |
| `map-patrol-host` | map |
| `btn-next-checkin` | card CTA |
| `btn-pin-here` | pin |
| `mb-osm` `mb-esri` `mb-sat` `mb-fit` | bar |
| `lg-all` `lg-track` `lg-done` `lg-next` | legend |

## Version meta

| Field | Value |
|-------|-------|
| skillId | mobile-ui-ux-analy |
| skillVersion | 2026.08.19.23 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.19.29 |
| generatedAt | 2026-08-20T01:56:00.000Z |
| contentHash | sha256:patrol-map-control-hint-20260820 |
