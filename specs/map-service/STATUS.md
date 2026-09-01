# STATUS — map-service

| Field | Value |
|-------|-------|
| feature | `map-service` |
| phase | `dev` |
| status | `in_progress` |
| changeScope | `new_svc` |
| packKind | `map` |
| demo | none |
| stackSkill | `/implement-map-stack` |
| context | `docs/context/features/map-service.md` |
| backend | `D:/API-CORE/Linm.Platform.MapService` · `api/v1/gis/*` |
| mfe | `Linm.Web.RMMS.Gis` — **chưa** clip tile (GAP-MAP-OSM-CDN-01) |
| updatedAt | `2026-09-01T06:05:00+07:00` |

## Stack waves

| Wave | Name | Confirm | Status | at |
|------|------|---------|--------|-----|
| 1 | map_service | `new_svc` · `wave1_pin=clusters_rmms` | **done** | verify 2026-09-01: Schema pair + 34 + HS/TS + mask + MVT + guest 401 overlay · Osmium PBF = P2 |
| 2 | bff_service | web=pending · mobile=pending | pending | BFF lib exists · RMMS **chưa** pin |
| 3 | integrate_bff | queued `both` · `viewport_lod` | pending | Confirm xong — **chưa** chạy (một wave / lượt) |
| 4 | map_ui | web=pending · ios=pending · android=pending | pending | — |

## Confirms

| Key | Value |
|-----|-------|
| svc_host | `new_svc` |
| service_kind | `api` |
| src_style | `micro_src` |
| host | platform `Linm.Platform.MapService` (không RMMS domain) |
| wave1_pin | `clusters_rmms` — `GET /gis/clusters` RMMS · không chuyển MapService |
| wave3_client | `both` (queued) |
| wave3_pin | `viewport_lod` (queued) |

## Done (BE) — Wave 1 PASS

- Scaffold Layout C + BFF NuGet lib (consumer **chưa** pin)
- `Schema_GisBoundary` pair + `dotnet ef migrations list` · applied `linm_maps` `:5461`
- Ingest gis.vn **34** (Đà Nẵng 48 · Khánh Hòa 56) + clip mask invert · `/clip/vietnam.poly`
- Tile guest `GET /api/v1/gis/tiles/basemap/5/25/14.pbf` **200** MVT (~109 KB)
- Guest overlay `assets`/`cameras` + `geojson/assets` **401** · inspector `Authorization` **200**
- `dotnet build` Map.Api Release 0 error · Docker `linm-maps-api` healthy `:5021`

## Next (cấm fake done)

| Slash | Việc |
|-------|------|
| `/implement-map-stack` Wave 2 | `/create-bff-api-feature` `AddLinmMapServiceBff` Web.Bff + Mobile.Bff |
| `/implement-gis-map` | MFE bỏ OSM.org |
| `/data-gov-integration` | overlay routes/assets |
| Osmium | PBF clip — P2 street basemap (`MAP-P2-01`) |

**Cấm** duplicate `VietnamBoundaries` trên `Linm.RMMS.WebService`.
