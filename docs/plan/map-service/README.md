# MapService — implement BE → BFF → UI

> **Host:** `gis_domain` — mở rộng `Linm.RMMS.WebService` domain Gis. **Không** `/new-service` trừ khi tách ingest gis.vn hẳn (cấm hai bảng `VietnamBoundaries`).  
> **Context:** [`../../context/features/map-service.md`](../../context/features/map-service.md) · clip UI [`gis-osm-clip.md`](../../context/features/gis-osm-clip.md) · luật [`legal-tech-corridor.md`](../../context/features/legal-tech-corridor.md)  
> **Pack cắt VN:** [`../../gis-vn-map/`](../../gis-vn-map/) — SSOT `Việt Nam (tỉnh thành) - 34.geojson`  
> **Cấm invent** `api/v1/map-service/*` · `api/assets/{z}/{x}/{y}.pbf`

**Entry:** `/implement-map-stack` (`/map-be-bff-ui`) — một workflow, AskQuestion mỗi wave, STATUS `specs/map-service/STATUS.md`.

Chạy **đúng thứ tự**. Không copy prompt generic MapLibre/Flutter.

---

## Chuỗi slash (SSOT)

| # | Tầng | Slash | Repo / host | Output |
|---|------|-------|-------------|--------|
| 0 | Context | *(xong)* `/hey-linm` | `Linm.RMMS.Data` | Clip SSOT + maxBounds 6.8–23.5 |
| 1 | **BE** | `/implement-map-service` · `svc_host=gis_domain` | `Linm.RMMS.WebService` | Ingest 34 tỉnh · `ST_Union` mask · Osmium `.poly` · `ST_AsMVT` layer `basemap`/`routes`/`assets`/`cameras` · cluster Z&lt;10 · JWT overlay · rate limit |
| 1b | EF | `/database-migration` | `ERP.Service.Migrations` **không** — RMMS Migrations + startup WebService | `Schema_GisBoundary` **pair** (.cs + Designer) nếu entity mới |
| 2 | **BFF web** | `/create-bff-api-feature` · Ask **BFF** (không API mới) | `Linm.RMMS.Web.Bff` (hoặc host `web-bff` hiện có) | Proxy **cùng origin** `web-bff/api/v1/gis/tiles/{layer}/{z}/{x}/{y}.pbf` · forward JWT · **cấm** lộ URL Martin/OSM |
| 2b | **BFF mobile** | `/create-bff-api-feature` lần 2 · BFF | `Linm.RMMS.Mobile.Bff` | Cùng path `mobile-bff/api/v1/gis/tiles/…` — **cấm** app gọi `:5101` / WebService trực tiếp |
| 3 | **UI web** | `/implement-gis-map` · host `web` | `Linm.Web.RMMS.Gis` | MapLibre · `{TileUrl}` BFF · invert mask · maxBounds · `transformRequest` JWT · tắt OSM.org |
| 3b | Chrome OMS | `/agent-dev-oms-map` | Cùng MFE Gis | Fit · legend · `LeaveConfirmModal` · tile URL **override** clip |
| 4 | **UI native** | `/implement-gis-map` · host `ios` rồi `android` | `Linm.RMMS.Mobile.iOS` · `.Android` | MapLibre Native · cùng `{TileUrl}` BFF · cùng bounds/mask |
| 4b | Tuần + GPS | `/edit-mobile-feature` · `patrol-map` | Native dual | Follow WhenInUse · **cấm** invent `api/v1/patrol-map` · tracks = P2 SA |
| 5 | Gate | `/review-map-release` rồi `/review-app-vn-map-law` | Web + iOS + Android | 0 request `openstreetmap.org` · HS/TS trên mask · **cấm** geo-block reviewer |

**Không** dùng: `/init-bff-file` / `/init-bff-auth` / `/init-bff-job` (BFF platform khác). GIS BFF **đã có** `web-bff/api/v1/gis` — skill 2 = **mở rộng proxy tile**, không tạo BFF mới.

Overlay sổ TS: `/data-gov-integration` (set `gov-vn`) — **không** seed OSM POI.

---

## API Signed (reuse)

| Method | Path | Ai gọi |
|--------|------|--------|
| GET | `/api/v1/gis/tiles/{layer}/{z}/{x}/{y}.pbf` | Client **qua BFF** · `layer` = `basemap` \| `routes` \| `assets` \| `cameras` \| `patrol` |
| GET | `/api/v1/gis/geojson/{layer}?bbox=` | Staff JWT only |
| GET | `/api/v1/gis/heatmap/pci` | Staff |
| GET | `/api/v1/gis/geojson/cameras?bbox=` | Overlay cam — Signed `gis.md` P1.6 |

`layer=basemap` guest OK (clip). `assets` / `cameras` / `patrol` = `[Authorize]`.

---

## Clip chỉ Việt Nam

| | |
|--|--|
| File | `docs/gis-vn-map/Việt Nam (tỉnh thành) - 34.geojson` |
| maxBounds | Lon 102.0–118.0 · Lat **6.8–23.5** · minZoom 5 |
| HS / TS | Đà Nẵng / Khánh Hòa (trong 34 — không file 65) |
| Cấm | 31 MB GeoJSON trong MFE/Store · Lat min 8.0 · `tile.openstreetmap.org` prod |

---

## Ba màn UI (một pipeline tile)

| Màn | Context | Slash UI |
|-----|---------|----------|
| Tuyến + tài sản (vẽ) | `gis` · `gis-draw-live` · `asset` | `/implement-gis-map` web + draw APIs **existing** |
| Tuyến + camera | `gis` P1.6 · `camera-connect` | Cùng map · layer `cameras` |
| Tuần + GPS user | `patrol-map` | `/implement-gis-map` native + `/edit-mobile-feature` |

---

## Verify (fail closed)

- `dotnet ef migrations list` hiện `Schema_GisBoundary` (nếu có entity).  
- `dotnet build` WebService + Web.Bff + Mobile.Bff.  
- Tile biển tây VN: không đường đứt đoạn. HS/TS thấy trên mask.  
- MFE/app: 0 request `openstreetmap.org` / Esri / Google (release).  
- Guest không đọc được MVT `assets`.

---

## Skill path (Rules)

| Slash | File |
|-------|------|
| `/implement-map-service` | `{RulesRoot}/common/skill/implement-map-service/implement-map-service.md` |
| `/create-bff-api-feature` | `{RulesRoot}/service/skill/bff-api-structure/bff-api-structure.md` |
| `/database-migration` | `{RulesRoot}/service/skill/database-migration/` |
| `/implement-gis-map` | `{RulesRoot}/common/skill/implement-gis-map/implement-gis-map.md` |
| `/agent-dev-oms-map` | `{RulesRoot}/common/skill/agent-dev-oms-map/` |
| `/edit-mobile-feature` | `{AutoCodeRoot}/.cursor/skills/edit-mobile-feature/` |
| `/review-map-release` | `{RulesRoot}/common/skill/review-map-release/` |
| `/review-app-vn-map-law` | `{RulesRoot}/common/skill/review-app-vn-map-law/` |
