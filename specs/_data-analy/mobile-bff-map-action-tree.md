# Action tree — mobile-bff-map

| | |
|---|---|
| feature | `mobile-bff-map` |
| owner | **this pack** · BFF tile proxy + dual TileUrl (edit) |
| parent | platform map stack · peers `gis-map` · `patrol-map` |
| demo | **không** screen mới · consumers peer map |
| kind | `map` · `edit_page` |
| taskId | `task_acda32fe` |

Scan: CTX peers · task `T-MAP-BFF-*` / `T-MAP-APP-01` · **không** hub CTA mới.

## Tree

```
mobile-bff-map                 ← owner · Wave 2–3 · **this turn**
├── (ServiceEndpoints:MapService)     ← cùng slug · **cấm** enqueue
├── (GET gis/tiles → MapService)      ← cùng slug bind · **cấm** enqueue
├── (gis/* non-tile → RMMS)           ← giữ catch-all · **cấm** enqueue
├── gis-map                           ← TileUrl consumer · reuse · **không** start
├── patrol-map                        ← TileUrl consumer · reuse · **không** start
└── map-service / gis-osm-clip        ← peer platform · **không** gộp slug
```

## Rows

| feature | parent | action | demoRel | kind | share | reuse | mapCite | usedOn | enqueue |
|---------|--------|--------|---------|------|-------|-------|---------|--------|---------|
| `mobile-bff-map` | platform | BFF MapService tile + TileUrl | CTX checklist curl | map | shared_kit BFF | — | MapService proxy · R2 TileUrl BFF | BFF + dual OS | **this turn** `task_acda32fe` |
| `gis-map` | — | consume TileUrl | peer `#sc-gis-map` | map | reuse | `gis-map` | MapKit/OSM | Wave 3 client | **không** (đã owner UI) |
| `patrol-map` | — | consume TileUrl | peer patrol | map | reuse | `patrol-map` | same | Wave 3 client | **không** |
| `map-service` | — | clip ingest | peer CTX | map | peer | — | MapService `:5021` | platform | **không** trong slug |

## Chrome / same-slug (không enqueue) — GAP-MOB-ACT-07

| Control | Lý do |
|---------|--------|
| Config MapService endpoint | BFF infra · cùng slug |
| Tile proxy GET | bind · cùng slug |
| Catch-all non-tile gis | giữ · cùng slug |
| curl / build verify | Dev/QA · **không** data_analy |
| Peer basemap chips | owner `gis-map` / `patrol-map` |

## Enqueue sibling

| feature | status |
|---------|--------|
| `gis-map` / `patrol-map` | đã pipeline UI · Wave 3 **edit TileUrl** trong **this** Dev turn · **cấm** re-enqueue slug · **cấm** start (`GAP-MOB-ACT-06`) |
| `map-service` / `gis-osm-clip` | peer Wave 1/4 · **không** từ CTA |
| new unique screen | **none** |

**GAP-MOB-ACT-01:** không — 1 slug owner BFF+TileUrl.  
**GAP-MOB-ACT-02:** không gộp Wave 4 UI / draw / Twin.  
**GAP-MOB-ACT-03:** không hub CTA mới.  
**GAP-MOB-ACT-04:** share/mapCite stamped · peer reuse.  
**GAP-MOB-BFF-01:** không thiếu path — cite Web GetTiles + CTX; **gap** = chưa wire Mobile.  
**GAP-MOB-ACT-05:** không enqueue shared_kit implement riêng.  
**GAP-MOB-ACT-06:** không start gis-map/patrol-map trong turn data_analy.  
**GAP-MOB-ACT-07:** không enqueue config/GET/curl.

## Version meta

| Field | Value |
|-------|-------|
| skillId | agent-data-analy-mobile |
| skillVersion | 2026.09.05.03 |
| schemaVersion | 2 |
| workflowVersion | 2026.09.05.03 |
| rulesVersion | 2026.09.12.1 |
| generatedAt | 2026-09-12T06:40:00.000Z |
| versionGate | ok |
| contentHash | sha256:b04a50005f77e99fc2c564e39ac3a438cce8742996899ef2aaa47b698f7e0131 |
| taskId | `task_acda32fe` |

---
<!-- Version meta: skillId=agent-data-analy-mobile skillVersion=2026.09.05.03 schemaVersion=2 -->
