# UX analy — gis-map

**Sources:** prototype dual `#sc-gis-map` · `ui/design.md` · PO `po/requirement.md` · DA controlHint + real-data §A+§B  
**Gate:** `/mobile-ui-ux-analy` §1–§9 · **REQUIRED** trước `design_confirm` / Dev  
**Slash:** `/mobile-ui-ux-analy` · task `task_81ce36d6` · `2026-08-31T00:40:00.000Z`  
**Hash skip:** inventory từ DA — **cấm** re-scan demo HTML (`GAP-DES-DEMO-RESCAN-01`)

## 1. IA

Login → Tab 5 · Trang Chủ / asset-hub → **push** Bản đồ tài sản `#sc-gis-map`.  
`tabs: none` trên surface map · shell tab **giữ** (`data-tab="home"`). **Cấm** reorder Tab 5 / invent segment trên map (`GAP-TAB-01`).

```
Trang Chủ (selected) → #sc-asset-hub
  push → #sc-gis-map DES-MOB-GIS   ← this pack
    ← back → pop asset-hub
    → iOS Lớp = toast P1 · cấm sheet P1
    → Android Danh sách = go('asset-list') reuse · cấm reimplement
    → iOS search overlay local filter/toast · Android không search P1
    → basemap ×4 · legend (iOS +Hành lang · Android 3 chip) = filter cùng slug
    → appear GET gis/geojson/* · focus GetById · fail → demo OMS + toast
```

Entry shared_action (không re-enqueue): hub tile/row · detail Ghim · incident Bản đồ / Xem trên bản đồ.

## 2. Màn

| DES / sc-* | Tên VN | iOS chrome | Android chrome | CTA |
|------------|--------|------------|----------------|-----|
| DES-MOB-GIS `#sc-gis-map` | Bản đồ tài sản | text back **Tài sản** · trailing **Lớp** · search overlay | icon back · trailing **Danh sách** · **không** search | overlay · toast · pop |
| DES-MOB-OMS-GIS | OMS | MapKit | OSM/Esri tiles | Basemap · isolate |
| DES-MOB-TABBAR | Tab 5 | shell home | shell home | **cấm** invent |

## 3. Zone

### DES-MOB-GIS / `#sc-gis-map`

| Zone | Demo | Map | SwiftUI | Compose |
|------|------|-----|---------|---------|
| Nav | Bản đồ tài sản · Lớp / Danh sách | A `.nav-bar` / `.top-bar` | `LinmTopBar` | same |
| Search | Tìm tài sản, sự cố… `#i-search` | A `.map-next-card` glass | overlay SearchField | **N/A P1** |
| Map | Leaflet demo host `#map-gis` | A `#map-gis-host` | MapKit `Map` | osmdroid / Esri `MapView` |
| Bar | Đường Phố Vệ tinh Toàn tuyến | A `#map-gis-bar` | `ChipWrap` + `LinmChip` | `FlowRow` + `LinmChip` |
| Legend | Tất cả · Tài sản · Sự cố · (+Hành lang iOS) | A `#map-gis-legend` | `ChipWrap` + `LinmChip` | `FlowRow` + `LinmChip` (3 chip) |
| Tab | Tab 5 home | shell | `LinmTabBar` | same |

**States:** default overlay · isolate ts/sc/corridor(iOS) · GET fail demo + toast · focus center · Lớp toast · search local · Danh sách nav · **cấm** blank map · **cấm** WebView · **cấm** `UIAlert` / `AlertDialog` · **cấm** invent tab.

## 4. Copy SSOT

Bản đồ tài sản · Tài sản · Lớp · Danh sách · Tìm tài sản, sự cố… · Đường · Phố · Vệ tinh · Toàn tuyến · Tất cả · Tài sản · Sự cố · Hành lang · Xem trên bản đồ · Ghim trên bản đồ.

Toast: **Lớp tài sản / sự cố · chú giải** (iOS) · network err via `LinmToast`.  
Popup fallback: **TS-20260810-014 · Cống ngang · QL.1 Km 1556+000** · **SC-2401 · Nứt mặt đường · QL.1 Km 1556+080**.

**Cấm trên máy:** GPS · Offline · Có mạng · P1/P2 · Gói N · device label · invent search API.

## 5. Brand

Tokens primary `#0C84C0` · success `#3CB448` · warn `#FCB43C`. Legend TS purple / SC red / corridor cyan. **Cấm** skin Ministry.

## 6. Type

Nav title **17** · chip / legend **13** · search hint demo **15** · editable field native **≥16** · tab **13** (`GAP-TYP-01`).

## 7. Signal / pict

**N/A** signal trên map (hub owns). **Cấm** «Có mạng» · **cấm** signal tap cycle trên map.

Pict: `#i-chevron-left` back · `#i-search` iOS search · `#i-scope` hub/pin — **cấm** invent.

## 8. Dual parity

Cùng title **Bản đồ tài sản** · cùng 4 basemap · cùng Tất cả/Tài sản/Sự cố · cùng map host OMS · cùng entry copy.  
**DEFER platform-OK (PO §7):** iOS Lớp + search + Hành lang · Android Danh sách · back text vs icon · MapKit vs OSM · legend hex tint.

Must: `/review-demo-design-mobile` → `ui/review/demo-parity.md`.

## 9. A11y ids

| Id | Element |
|----|---------|
| `sc-gis-map` | root |
| `map-gis-host` / `map-gis` | map |
| `map-gis-bar` | basemap chips |
| `map-gis-legend` | legend chips |
| `gis-layer-hint` | iOS Lớp |
| `#i-search` / `#i-chevron-left` / `#i-scope` | pict |

## Version meta

| Field | Value |
|-------|-------|
| skillId | mobile-ui-ux-analy |
| skillVersion | 2026.08.25.01 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.31.2 |
| rulesVersion | 2026.08.31.2 |
| generatedAt | 2026-08-31T00:40:00.000Z |
| contentHash | sha256:gis-map-control-hint-20260831 |
| taskId | `task_81ce36d6` |

---
<!-- Version meta: skillId=mobile-ui-ux-analy skillVersion=2026.08.25.01 schemaVersion=1 workflowVersion=2026.08.31.2 rulesVersion=2026.08.31.2 versionGate=rechecked -->
