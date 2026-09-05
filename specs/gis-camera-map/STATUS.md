# STATUS — gis-camera-map

| Field | Value |
|-------|-------|
| feature | `gis-camera-map` |
| phase | `dev` |
| status | `in_progress` |
| changeScope | `new_page` |
| packKind | `map` |
| context | `docs/context/features/gis-camera-map.md` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Gis` |
| backend | mock P1 · peer `api/v1/cameras` P2 |
| mfeStdRoute | `/gis/camera` |
| mfeStdUrl | `http://localhost:9302/gis/camera` |
| updatedAt | `2026-09-01T17:20:00.000Z` |

## Lock

| agent | scope | id | at |
|-------|-------|-----|-----|
| — | — | — | — |

## Confirms

| Key | Value |
|-----|-------|
| route_confirm | `/gis/camera` |
| new_mode | `implement` (in-chat `/new-web-feature`) |
| form_pattern | Kind F map + wall |
| map_split | default 50/50 · hide allowed |

## Wave map-stack

Reuse Wave 4 web clip (`attachVnClipBasemap`) — **không** đánh `map-service` STATUS.

## Blockers

| | |
|--|--|
| BE live events | P2 `camera-connect` gateway |
| Menu Auth seed | `/gen-navigation-menu-import` |
