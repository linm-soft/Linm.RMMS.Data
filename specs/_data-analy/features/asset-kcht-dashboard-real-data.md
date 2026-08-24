# Real-data bind — asset-kcht-dashboard

| | |
|---|---|
| feature | `asset-kcht-dashboard` |
| prefix | `web-bff/api/v1` |
| sourceFeature | `asset` |
| sourceTables | `rmms_road_assets` · `rmms_road_routes` · `rmms_pavement_sections` |
| taskId | `task_9791424e` |

## §A Resource

| Resource | Entity / table | Key |
|----------|----------------|-----|
| Count by loại TS | `RoadAssetEntity` / `rmms_road_assets` | `Type` group count |
| Tuyến | `RoadRouteEntity` / `rmms_road_routes` | `totalCount` |
| Đoạn | `PavementSectionEntity` / `rmms_pavement_sections` | `totalCount` |
| Label loại | `AssetTypeEntity` / master | `code` · `name` · icon |

## §B Bind

| UI (card) | Method | Path | DTO → display |
|-----------|--------|------|---------------|
| 38 ô `RoadAsset.type` | GET | `/asset/road-assets/summary-by-type` | `{ type, count }[]` → card count |
| Thông tin tuyến | GET | `/integration/road-routes?page=1&pageSize=1` | `totalCount` |
| Thông tin đoạn tuyến | GET | `/asset/pavement-sections?page=1&pageSize=1` | `totalCount` |
| Label/icon | GET | `/integration/asset-types?pageSize=200` | `code`→type key · `name`→label |

## §C Write rules

| Action | Rule |
|--------|------|
| create/update/delete | **OUT** — read-only hub |
| click card | Client navigate only |

## §D Offline / fail

| Case | Behavior |
|------|----------|
| summary-by-type fail | Cards show 0 · skeleton → empty counts |
| master fail | Fallback label từ tile config SSOT |
| widget mount fail | Host placeholder (Dashboard catch) |

## §E Progress

| Milestone | Status |
|-----------|--------|
| Analy real-data | **this turn** |
| BE summary-by-type | Dev |
| FE bind + widget | Dev |

## §F Cấm

- Invent `api/v1/dashboard/*`  
- N+1 GET list với pageSize lớn thay aggregate  
- ERP.* / Domains/Master fork  
- Bind web `mfeStdUrl` sai prefix BFF

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-data-analy |
| skillVersion | 2026.08.15.19 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.18.02 |
| rulesVersion | 2026.08.16.05 |
| generatedAt | 2026-08-23T11:15:00.000Z |
| versionGate | rechecked |

---
<!-- Version meta: skillId=agent-data-analy skillVersion=2026.08.15.19 schemaVersion=1 workflowVersion=2026.08.18.02 rulesVersion=2026.08.16.05 versionGate=rechecked -->
