# STATUS — gis-camera-map

| Field | Value |
|-------|-------|
| feature | `gis-camera-map` |
| phase | `dev` |
| status | `in_progress` |
| changeScope | `edit_page` |
| packKind | `map` |
| context | `docs/context/features/gis-camera-map.md` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Gis` |
| backend | peer `api/v1/cameras` + events + live HLS |
| mfeStdRoute | `/gis/camera` |
| mfeStdUrl | `http://localhost:9302/gis/camera` |
| updatedAt | `2026-09-21T10:48:00.000Z` |

## Lock

| agent | scope | id | at |
|-------|-------|-----|-----|
| — | — | — | — |

## Confirms

| Key | Value |
|-----|-------|
| route_confirm | `/gis/camera` |
| new_mode | `implement` |
| form_pattern | Kind F map + wall |
| map_split | default 50/50 · hide allowed |
| live_default | `hls` |
| live_aspect | **16:9 contain** (GAP-CAM-MAP-ASPECT-16-9) |
| list_ssot | `GET /api/v1/cameras` (không CAM-VINH mock) |

## Wave map-stack

Reuse Wave 4 web clip (`attachVnClipBasemap`) — **không** đánh `map-service` STATUS.

## Notes

Wall tile auto `POST …/live/start` `mode=hls`. KPI/inspect = event ISAPI hôm nay. Pin = mã lớp GIS cameras hoặc nội suy Km. Live **16:9 contain** (GAP-CAM-MAP-ASPECT-16-9) — **cấm** `object-fit: cover`.

## Blockers

| | |
|--|--|
| GPS column on CameraDevice | **DONE** `Latitude`/`Longitude` · `Schema_CameraDeviceGps` |
| Menu Auth seed | `/gen-navigation-menu-import` |
