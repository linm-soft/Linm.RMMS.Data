# Action tree — gis-map

| | |
|---|---|
| feature | `gis-map` |
| owner | **this pack** `#sc-gis-map` · `DES-MOB-GIS` · Bản đồ tài sản |
| parent | `asset-hub` (`#sc-asset-hub` · tile/row `#i-scope`) |
| demo | `#sc-gis-map` · `DES-MOB-OMS-GIS` · entry hub · detail · incident |
| kind | `map` |
| taskId | `task_23d7eba0` |

Scan SSOT: `specs/_form-type-mobile/ACTION-TREE.md` · `BY-ACTION.md` · asset-hub / asset-detail / incident-* trees  
Verify: hub tile **Xem trên bản đồ** · row · detail Ghim · incident seg = **một** shared_action slug.

## Tree

```
asset-hub                     ← hub DES-MOB-ASSET-HUB
├── gis-map                   ← owner · DES-MOB-GIS · **this turn**
│   ├── (basemap / legend / fit / search)  ← cùng slug · **cấm** enqueue
│   ├── (GET geojson overlay)              ← cùng slug bind · **cấm** enqueue
│   ├── asset-hub                          ← back · reuse
│   └── asset (list)                       ← Android «Danh sách» · reuse · **không** start
├── asset-detail              ← CTA Ghim → gis-map · reuse entry
├── incident-list / detail    ← seg/CTA → gis-map · shared_action
└── patrol-map                ← OMS twin · **không** gộp
```

## Rows

| feature | parent | action | demoRel | kind | share | reuse | mapCite | usedOn | enqueue |
|---------|--------|--------|---------|------|-------|-------|---------|--------|---------|
| `gis-map` | `asset-hub` | Xem trên bản đồ / row | hub `#i-scope` · `#sc-gis-map` `DES-MOB-GIS` | map | shared_action | — | MapKit/OSM · `LinmTopBar` · `LinmChip` · `#i-scope` | hub tile · row | **this turn** `task_23d7eba0` |
| `asset-hub` | `gis-map` | Back Tài sản | nav | hub | reuse | `asset-hub` | `LinmTopBar` leading | pop | **không** |
| `asset` | `gis-map` | Danh sách | Android trailing | list | reuse | `asset` | TextButton | Android chrome | **không** (đã owner list) |
| `asset-detail` | — | Ghim trên bản đồ | Primary → `go('gis-map')` | sheet→screen | shared_action | `gis-map` | PrimaryButton | detail CTA | **không** (reuse · **cấm** re-enqueue) |
| `incident-list` | — | Bản đồ seg | `#i-mappin` → gis-map | map | shared_action | owner (this) | Segment | list seg | **không** nếu đã pending/done |
| `incident-detail` | — | Xem trên bản đồ | Secondary → gis-map | map | shared_action | owner (this) | SecondaryButton | detail CTA | **không** |

## Chrome / same-slug (không enqueue) — GAP-MOB-ACT-07

| Control | Lý do |
|---------|--------|
| Basemap Đường/Phố/Vệ tinh | local tile · cùng slug |
| Toàn tuyến fit | local camera · cùng slug |
| Legend Tất cả / TS / SC / Hành lang | isolate · cùng slug |
| Search overlay | input/filter · cùng slug |
| Lớp toast | chrome P1 · sheet P2 cùng slug |
| GET geojson / focus GetById | bind · cùng slug |
| Toast err | feedback |
| Back chevron | chrome nav parent |

## Enqueue sibling

| feature | status |
|---------|--------|
| `asset` list / `asset-hub` / `asset-detail` | đã pipeline · **cấm** re-enqueue · **cấm** start (`GAP-MOB-ACT-06`) |
| `incident-list` / `incident-detail` | đã · shared_action reuse · **cấm** start |
| `patrol-map` | sibling OMS · **không** từ gis-map CTA |
| layers sheet / draw / heatmap / Twin | **không** enqueue P1 · GAP LAYER-01 → PO |
| — new unique | **none** |

**GAP-MOB-ACT-01:** không — 1 slug owner map.  
**GAP-MOB-ACT-02:** không gộp list / draw / patrol-map / Kind F.  
**GAP-MOB-ACT-03:** hub tile/row + detail/incident CTA → this turn fills owner.  
**GAP-MOB-ACT-04:** share/mapCite stamped · shared_action reuse.  
**GAP-MOB-BFF-01:** không thiếu — `gis/geojson/*` + Asset GetById live proxy.  
**GAP-MOB-ACT-06:** không start list/detail/incident trong turn data_analy.  
**GAP-MOB-ACT-07:** không enqueue basemap/legend/fit/search/GET.

## Version meta

| Field | Value |
|-------|-------|
| skillId | agent-data-analy-mobile |
| skillVersion | 2026.08.31.2 |
| schemaVersion | 2 |
| workflowVersion | 2026.08.31.2 |
| rulesVersion | 2026.08.31.2 |
| generatedAt | 2026-08-31T00:35:00.000Z |
| versionGate | rechecked |
| contentHash | sha256:gis-map-action-tree-20260831 |
| taskId | `task_23d7eba0` |

---
<!-- Version meta: skillId=agent-data-analy-mobile skillVersion=2026.08.31.2 schemaVersion=2 workflowVersion=2026.08.31.2 rulesVersion=2026.08.31.2 versionGate=rechecked -->
