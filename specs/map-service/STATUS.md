# STATUS — map-service

| Field | Value |
|-------|-------|
| feature | `map-service` |
| phase | `draft` |
| status | `pending` |
| packKind | `map` |
| stackSkill | `/implement-map-stack` |
| context | `docs/context/features/map-service.md` |
| mobileBff | `specs/mobile-bff-map/STATUS.md` |
| updatedAt | `2026-09-16T15:55:00.000Z` |

## Stack waves

| Wave | Name | Confirm | Status | at |
|------|------|---------|--------|-----|
| 1 | map_service | — | pending | — |
| 2 | bff_service | web=partial (Web BFF Map NuGet) · **mobile=done** `wave2_host=mobile_bff` | pending | 2026-09-12T18:53:46.000Z |
| 3 | integrate_bff | web=pending · **mobile=done** `wave3_client=mobile` `wave3_pin=viewport_lod` | pending | 2026-09-12T19:39:36.000Z |
| 4 | map_ui | web=pending · **ios=done** `wave4_host=ios` · **android=done** `wave4_host=android` | pending | 2026-09-16T15:55:00.000Z |

## Notes

- Clip crop fix 2026-09-13: MapService mask SQL `ST_Subdivide` nested SRF → Postgres `0A000` empty mask (Da Nang/Hà Nội/HS **0 B**). `CROSS JOIN LATERAL ST_Subdivide` + empty-land = full tile sea. Verify mask z8 Đà Nẵng **3117 B** `layers=['mask']`. iOS Debug `{BffBase}` → `http://127.0.0.1:5202` (parity Android emulator) · GIS overlay fetch **sau** viewport MapLibre (cấm dump clipFill 6020 pin) · paint OSM `landuse`/`waterway` + `bounds`. Abroad-land vẫn ring đơn giản (NE 50m khi có `seAsiaLand.json`).
- Wave 4 **Android** verify PASS: MapLibre `android-sdk:11.13.1` · `GisClipMapView` `{TileUrl}` BFF MVT (`basemap`/`boundaries`/`mask`) · chips **Tiêu chuẩn \| Vệ tinh** cùng clip · maxBounds **97.0–118.0 / 6.8–23.5** · minZoom **5** · 3 tone sea / landAbroad / vn-land · HS/TS / Biển Đông labels · pin LOD Wave 3 giữ · `assembleDebug` **BUILD SUCCESSFUL** · **0** `openstreetmap.org` / Esri / Google tile URL in Android Kotlin. Patrol + HITL reuse same host.
- Wave 4 **iOS** verify PASS: MapLibre SPM `MapLibre` 6.31.0 · `GisClipMapView` `{TileUrl}` BFF MVT (`basemap`/`boundaries`/`mask`) · chips **Tiêu chuẩn \| Vệ tinh** cùng clip · maxBounds **97.0–118.0 / 6.8–23.5** · minZoom **5** · 3 tone sea / landAbroad / vn-land · HS/TS / Biển Đông labels · pin LOD Wave 3 giữ · `xcodebuild` dest **iPhone 17 Pro Max** **BUILD SUCCEEDED** · **0** `openstreetmap.org` / Esri / Google tile URL in iOS Swift.
- Wave 3 **mobile** verify PASS: TileUrl BFF clip · `GET gis/clusters?bbox=&zoom=` z11 **200** · `geojson/all?bbox=&take=100` **200** · overlay tile no JWT **401**.
- Wave 2 **mobile** verify PASS: `GisTilesController` → MapService `:5021` · guest `basemap` z5 **200** MVT.
- Wave 0p PASS this machine: clone `{ApiCore}/Linm.Platform.MapService` · compose `:5021`/`:5461`.
- Wave 1–3 overall **pending** (web vẫn pending/partial). Wave 4 overall **pending** (web). Next `/implement-map-stack` (`wave4_host=web`). Store law `/review-map-release` **không** auto-done.
- Patrol overlay live bugs 2026-09-16: iOS first-load style-ready miss (`GAP-MOB-IOS-FIRST-OVERLAY-01`) + Android numbered clickable stops (`GAP-MOB-AND-STOP-PIN-01`) — **fixed** in `GisClipMapView` / `#sc-patrol-map`. **Không** đổi Wave 4 web pending.
- iOS implement: `specs/map-service/implement/ios.md`.
- Android implement: `specs/map-service/implement/android.md`.
- Mobile BFF tasks: `specs/mobile-bff-map/task/mobile-bff-map.md`.
