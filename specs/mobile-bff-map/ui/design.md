# Design — mobile-bff-map

| Field | Value |
|-------|-------|
| feature | `mobile-bff-map` |
| title | [Design] [Mobile] Mobile.Bff × MapService (tile clip) |
| this role | `design` · `/agent-design-mobile` |
| status | **confirmed** (autoApprove=ON) |
| design_confirm | **approve** (`task_d741af34`) |
| changeScope | `edit_page` |
| packKind | **`map`** |
| formPattern | **N/A** (no new screen · TileUrl config + BFF tile) |
| stack | `native_dual` |
| real_view_parity | `v1` |
| kit_missing_confirm | **N/A** — không chrome kit mới · reuse peer map |
| reviewUrlIos | `file:///Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/mobile-bff-map/ui/prototype/ios/index.html#zone-tileurl-note` |
| reviewUrlAndroid | `file:///Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/mobile-bff-map/ui/prototype/android/index.html#zone-tileurl-note` |
| peerStdUrl | `n/a` native · peer consumers `gis-map` / `patrol-map` |
| ux-analy | `ui/ux-analy.md` §1–§9 |
| html-to-native | `ui/html-to-native-map.md` |
| demo-parity | `ui/review/demo-parity.md` · Must **closed** |
| prior · po | `confirmed` · `handoff/po-compact.md` · contentHash `sha256:b04a50005f77e99fc2c564e39ac3a438cce8742996899ef2aaa47b698f7e0131` |
| prior · data_analy | `confirmed` · hash skip · **cấm** re-scan (`GAP-DES-DEMO-RESCAN-01`) |
| autoApprove | **ON** |
| e2eQa | ON queued QA · **cấm** e2e / `start:std` ở role này |
| updatedAt | `2026-09-12T07:00:00.000Z` |
| taskId | `task_d741af34` |

## 0. Context (hash skip — copy analy)

| ID | Path | Notes |
|----|------|-------|
| CTX-01 | `docs/context/features/mobile-bff-map.md` | P0 · peers map-service · gis-osm-clip · gis-map · patrol-map |
| DA | `_data-analy/mobile-bff-map-{control-hint,real-data,bff-endpoints,action-tree}.md` | abs · **không** prefix `specs/{feature}/` |
| PO | `po/requirement.md` · `handoff/po-compact.md` | confirmed |
| WEB | `LINM.RMMS.Gis.Bff/Controllers/GisBffController.cs` | GetTiles parity |

**Cấm:** mfeStdUrl · ERP.* · invent `#sc-*` · invent `#i-*` · Wave 4 UI/draw/Twin · OSM.org/Esri/Google CDN TileUrl · re-scan demo (`GAP-DES-DEMO-RESCAN-01`).

## 1. Pattern

| | |
|--|--|
| Surface | **Không** màn mới — board **TileUrl note** + peer map reuse |
| FormMode | none |
| Action this slug | Wave 2 BFF `gis/tiles` → MapService · Wave 3 dual TileUrl = BFF clip |
| Consumers | `gis-map` · `patrol-map` (reuse chrome · **cấm** redesign peer) |
| `devSlash` | `/agent-dev-ios` + `/agent-dev-android` (+ OMS R2) |
| Frame | iOS 390×844 · Android 412×915 · note board only |

## 2. Screens / DES-MOB-*

| DES / zone | Tên VN | Zones | CTA |
|------------|--------|-------|-----|
| `DES-MOB-TILEURL-NOTE` `#zone-tileurl-note` | Nguồn lớp nền (BFF) | Title · TileUrl path · basemap/overlay state · peer cite | none (config note) |
| `DES-MOB-PEER-GIS` | Bản đồ tài sản | **reuse** `gis-map` | — |
| `DES-MOB-PEER-PATROL` | Bản đồ ca | **reuse** `patrol-map` | — |

### IA lock

```
(auth) Login → Tab 5
  peer gis-map / patrol-map   ← consumers · không đổi IA
  TileUrl config (Wave 3)     ← THIS slug · edit_page only
    basemap guest → BFF MVT 200
    overlay JWT → BFF MVT · 401 no token → empty overlay (peer toast)
  **không** #sc-* mới · tabs: none
```

**Cấm** invent tab (`GAP-TAB-01`) · watermark Gói · device label · native alert · draw/heatmap trên slug.

## 3. Field inventory (cite DA · không invent)

| Field | VN | controlHint | Required | Kit dual | Notes |
|-------|----|-------------|----------|----------|-------|
| tileUrl | Đường dẫn lớp nền | Text (config) | * | config / InfoRow | `{Bff}/mobile-bff/api/v1/gis/tiles/{layer}/{z}/{x}/{y}.pbf` |
| tileBasemap | Lớp nền clip | MapTile | * | peer Map | `layer=basemap` · guest 200 |
| tileOverlay | Lớp overlay MVT | MapTile | * | peer Map | JWT · 401 → empty |
| overlayGeo | Lớp geo peer | MapPin/Polyline | * | peer | **giữ** RMMS catch-all |
| mapHostPeer | Bản đồ peer | Map | * | MapKit / OSM-style | **reuse** · **cấm** control mới |

### OMS R1–R11 (slug = TileUrl source)

| R | Áp dụng | Note |
|---|---------|------|
| R2 / CDN | **HARD Wave 3** | prod TileUrl = BFF clip · **0** openstreetmap.org |
| R1–R4e · R11 | peer UI | **cấm** AC redesign chrome peer |

## 4. States (peer map · TileUrl)

| State | Hành vi |
|-------|---------|
| default | basemap guest từ BFF · overlay nếu JWT |
| empty overlay | 401 / no token → map mở · overlay trống · toast peer |
| MapService down | 502/404 forward · toast peer · **cấm** fallback CDN |
| offline | blank tile ok · map host vẫn mở |
| leave dirty | n/a (no form) |

## 5. Dual chrome (note board)

| Token | iOS | Android |
|-------|-----|---------|
| Title | Nguồn lớp nền | Nguồn lớp nền |
| Body | grouped list (HIG) | Material cards/rows |
| Path display | monospaced caption | same copy |
| Status pills | Basemap · Overlay | same labels |
| Map engine cite | MapKit + BFF MVT | OSM-style + BFF MVT |

## Prototype (REQUIRED)

| | |
|--|--|
| Artifact | `ui/prototype/ios/index.html` · `ui/prototype/android/index.html` |
| Kind | Map · TileUrl note (edit_page · **không** full new map screen) |
| Zones | `#zone-tileurl-note` · `#zone-tile-url` · `#zone-tile-basemap` · `#zone-tile-overlay` · `#zone-peer-cite` |
| SSOT | DA controlHint · PO · `/agent-dev-oms-map` R2 |
| **reviewUrlIos** | `file:///Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/mobile-bff-map/ui/prototype/ios/index.html#zone-tileurl-note` |
| **reviewUrlAndroid** | `file:///Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/mobile-bff-map/ui/prototype/android/index.html#zone-tileurl-note` |
| **peerStdUrl** | n/a native |
| **real_view_parity** | `v1` |

### Wire (TileUrl note)

```
[Title] Nguồn lớp nền
[Body]  TileUrl path (BFF) · Basemap guest · Overlay JWT
[Cite]  Peer: Bản đồ tài sản · Bản đồ ca (reuse)
[Out]   Không màn mới · 0 CDN OSM
```

## Gaps (carry)

- GAP-MOB-BFF-MAP-01 · GAP-MOB-BFF-MAP-02 · GAP-MAP-OSM-CDN-01 → Dev Wave 2–3
- OUT: Wave 4 UI · invent map-service path · ERP.*

## Version meta

| Field | Value |
|-------|-------|
| skillId | agent-design-mobile |
| skillVersion | 2026.09.05.03 |
| schemaVersion | 1 |
| rulesVersion | 2026.09.12.1 |
| contentHash | sha256:b04a50005f77e99fc2c564e39ac3a438cce8742996899ef2aaa47b698f7e0131 |
| versionGate | ok |
| generatedAt | 2026-09-12T07:00:00.000Z |
| taskId | `task_d741af34` |

---
<!-- Version meta: skillId=agent-design-mobile skillVersion=2026.09.05.03 schemaVersion=1 rulesVersion=2026.09.12.1 versionGate=ok -->
