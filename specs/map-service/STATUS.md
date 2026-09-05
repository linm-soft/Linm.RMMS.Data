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
| mfe | `Linm.Web.RMMS.Gis` — clip BFF MVT · OpenMapTiles streets + place · maxBounds 6.8–23.5 · **0** OSM.org trên Gis*Page |
| mfeStdRoute | `/map-service` |
| mfeStdUrl | `http://localhost:9301/map-service` |
| updatedAt | `2026-09-03T19:50:00+07:00` |

## Stack waves

| Wave | Name | Confirm | Status | at |
|------|------|---------|--------|-----|
| 1 | map_service | `new_svc` · `wave1_pin=clusters_rmms` | **done** | verify 2026-09-01: Schema pair + 34 + HS/TS + mask + MVT + guest 401 overlay · **P2 street MBTiles** `streetTilesReady=true` |
| 2 | bff_service | web=**done** · mobile=pending | pending | `wave2_host=web_bff` · NuGet `1.1.0` · tiles same-origin · guest overlay 401 · Docker `:5201` proxy **200** after MapService SQLite fix |
| 3 | integrate_bff | `both` · `viewport_lod` | pending | web=**done** · mobile=pending (Wave 2 mobile BFF chưa có · repo `Linm.RMMS.Mobile.Bff` không trong workspace) |
| 4 | map_ui | web=**done** · ios=pending · android=pending | pending | `wave4_host=web` · MapLibre + BFF `{TileUrl}` · mask layer · maxBounds SSOT · tsc 0 · 0 `openstreetmap.org` trên Gis*Page · **mobile stack:** tab 44px + ẩn/hiện nội dung |

## Confirms

| Key | Value |
|-----|-------|
| svc_host | `new_svc` |
| service_kind | `api` |
| src_style | `micro_src` |
| host | platform `Linm.Platform.MapService` (không RMMS domain) |
| wave1_pin | `clusters_rmms` — `GET /gis/clusters` RMMS · không chuyển MapService |
| wave2_host | `web_bff` |
| bff_route_gap | `publish_bump` — GitHub Packages `Linm.Platform.MapService.Bff` **1.1.0** |
| wave3_client | `both` — web verify PASS · mobile blocked Wave 2 |
| wave3_pin | `viewport_lod` |
| wave4_host | `web` |

### Follow-up — QL.Nghi Sơn–Bãi Trành pin lệch thôn (`GAP-MAP-NSBT-01`) — 2026-09-04

Screenshot: `KM-km_post_539080` · GPS `19.43000, 105.67000` · popup **`raw`** · pin đường làng vs cao tốc OSM **QL.45-Nghi Sơn**.

1. Dump lưới **0.01°** (ô ~1 km) — không phải GPS mặt đường.
2. Tên named `QL.Nghi Sơn - Bãi Trành…` → canon dài **không** `QL\d+` → OSRM/index không khớp nhãn OSM.
3. Không phải bug sample-GPS cluster — cần **alias + snap bake all-data**.

- Plan: [`docs/plan/gis-coord-normalize/PLAN.md`](../../docs/plan/gis-coord-normalize/PLAN.md) (Phase 0 inventory → 1 alias pilot → 2 bake → 3 FE gate).
- **Cấm** invent GPS / km-lerp ghi đè dump.

### Follow-up — QL.48E Nghệ An pin lệch + zoom ẩn (`GAP-MAP-QL48E-01`) — 2026-09-04

1. Pin lưới 0.01° không bám QL.48E: cluster force dump + `canonRouteKey('QL.48E - Nghệ An')` → **QL48** (nuốt E) → OSRM sai/không khớp.
2. Zoom ẩn: `shouldShowInventoryPin` bắt buộc snap ở detail.

- Fix canon FE+BE: strip đuôi tỉnh rồi giữ hậu tố `E` → **QL48E**.
- Detail/cụm: dump tạm rồi `osrmPinPlacement` đúng mã tuyến; zoom detail không ẩn dump.

## Follow-up — data return nhưng map không pin (`GAP-MAP-CLUSTER-PAINT-OSRM-01`) — 2026-09-04

Screenshot: API `KM_POST` total **54** · overlay `cụm · 17/58` · bubble **58** vẫn đè.

- **Root:** `shouldShowInventoryPin` ẩn dump 0.01° khi chưa OSRM snap → hầu hết feature geojson không `addLayer`.
- **Root 2:** gỡ bubble chỉ khi N≥badge / `focusDone` → bubble che pin đã vẽ.
- **Fix:** cluster focus → paint dump GPS ngay (bypass OSRM gate) · gỡ bubble khi `paintedFocusCount > 0` · scope ưu tiên bán kính GPS mẫu.

## Follow-up — click cụm: GPS mẫu + pin dump (`GAP-MAP-CLUSTER-GPS-PIN-01`) — 2026-09-04

User: tọa độ group = 1 TS chi tiết; click → zoom → pin đúng tọa độ + full TS khu vực.

- Marker cụm / `setView` = GPS mẫu DB (`lat`/`lng`).
- Fetch = **ô lưới** (+ pad mẫu); không `route=` API (FE lọc ô+canon).
- Paint cụm: pin = **dump GPS**, cấm OSRM; mẫu index 0 đúng điểm; dump trùng 0.01° spiral nhẹ.
- Dest: `GisDrawLivePage.tsx` · `gisMapLod.ts`.

### Follow-up — badge 48 vs ~14 pin (`GAP-MAP-CLUSTER-COUNT-01`) — 2026-09-03

Badge/tooltip **48** khớp BE; click detail chỉ ~14 pin.

- **Root BE:** `ToClusterFeature` đổi ô `(i,j)` theo GPS mẫu sát biên → `south/west/north/east` ≠ ô GroupBy count 48.
- **Root FE:** filter scope theo bbox lệch, không `FLOOR(lat×scale)` như BE; zoom detail không đổi scale cụm.
- **Fix BE:** bounds/id luôn `cellI/cellJ` GroupBy + props `cellI`/`cellJ`/`scale`.
- **Fix FE:** parse `cluster-{scale}-{i}-{j}-…` · `pinMatchesClusterScope` = cùng ô FLOOR · fetch `route=` · status `cụm · N/M` theo GPS dump.

## Follow-up — click cụm pin 500+ (`GAP-MAP-CLUSTER-SCOPE-01`) — 2026-09-03

Cụm badge **68** · overlay `pin 513` · Thuộc tính «Số lượng: 38» = field mẫu DB, không phải số cụm.

- **Root:** `setSaved` giữ pin detail cũ viewport · `drain(orderedDetail)` tải mọi loại · hold xóa sớm → `pinInView` pad viewport · popup cụm.
- **Fix:** `clusterFocusActiveRef` (ô + loại + tuyến) đến zoom-out · click cụm xóa inventory DB cũ · chỉ fetch loại cụm · `pinMatchesClusterScope` · status `cụm · N/M` · Thuộc tính hàng **Cụm:** + **SL mẫu:**.
- Dest: `GisDrawLivePage.tsx` · `gisMapLod.ts` · `gisDrawHelpers.ts`.

## Gap — zoom/select cụm không hiện pin (`GAP-MAP-CLUSTER-HOLD-01`) — 2026-09-03

User: click/zoom cụm (vd. **56** cọc tiêu `CT-guide_post_*` QL.HCM Đà Nẵng) → bubble/popup dọc, overlay `pin 30`, map trống. **Không** Wave 1–3.

| Symptom | Root |
|---------|------|
| Click cụm rồi zoom → 0 pin loại đó | `loadViewport` **xóa `clusterHoldRef`** khi `lod !== 'detail'` — `setView` còn ở corridor / timer 220ms chạy giữa animation |
| Fetch lệch số cụm | `holdLl` → chỉ `bboxFromRadius` 0.05° (~5.5 km); ô cụm scale 8 ~14 km + sample ở góc ô |
| `pin 30` nhưng không thấy cọc tiêu | Wave1 `DETAIL_TYPE_PRIORITY` (KM/biển/đèn) ăn cap 2000 **trước** `DELINEATOR`; `wantedPins > 0` gỡ bubble cụm |
| Thanh dọc cạnh cụm 56 | `bindPopup` + `autoPan` lúc zoom (`chữ dọc`) |

**Cấm:** `fitBounds` cell 0.5° · chuyển clusters sang MapService · coi overlay `pin N` = đã vẽ đúng loại.

## Fix (2026-09-03) — hold + ô cụm + loại click trước (`GAP-MAP-CLUSTER-HOLD-01`)

- Hold **chỉ** clear khi zoom **ra** khỏi detail (`lastLod === detail`).
- Fetch bbox = ô lưới ∪ radius GPS mẫu (`clusterHoldFetchBbox`).
- Hold: drain **đúng `topType`** (vd. DELINEATOR) hết trang trước loại khác.
- Giữ bubble cụm đến khi pin **cùng loại** vẽ; click cụm đóng popup, không `bindPopup`/`autoPan`.
- Dest: `GisDrawLivePage.tsx` · `gisMapLod.ts` · `gisMapTypePlan.ts` · `mapAssetIcons.ts`.

## Gap — zoom graphics (2026-09-03)

Local = prod: staircase coast + Mercator holes. Cause: `ST_Simplify` quá thô (GL z = Leaflet−1) + `ST_ClipByBox2D` pad 0.02 / MVT buffer 64 + empty OSM cached `200`. Fix: simp/pad/buffer.

## Fix (2026-09-03) — mất đất liền/biển đồ họa (`GAP-MAP-MASK-HOLES`)

Screenshot chip **Tiêu chuẩn**: pin + nhãn HS/TS/Biển Đông, nền một màu biển `#8eb8c8`. Tile BFF **200** (basemap 35 KB · boundaries 51 KB · mask 24 KB) — không phải 404/rỗng.

- **Root:** invert `clip-mask` = `ST_Difference` 1 polygon × **2167 holes** (z5). MapLibre earcut bỏ hole → fill outer ring → đè `vn-land` + OSM. Fallback `THEN bounds.clip` càng phủ cả ô.
- **Fix BE:** `ST_Subdivide(..., 48)` + MVT buffer 0 + fail-open (cấm full-tile). Verify PostGIS: max_holes 2167 → **10**. `mask/5/25/14` 200 ~41 KB.
- **Fix FE:** `clip-mask` `minzoom: 8` (GL) — country fit Leaflet 5–6 không paint invert. Dest: `TileService.cs` · `vnClipBasemap.ts` · `clip-basemap-ui.md`.

## Fix (2026-09-03) — lớp nền xanh lệch biên (`GAP-MAP-MASK-ALIGN`)

- **Root:** OSM landcover/water (clip Osmium `.poly` 0.002°) **tràn** tây biên gis.vn; invert `clip_masks` simp **0.008** + **không** paint `clip-mask` trên MFE → xanh/xanh lá sai vs `vn-line`. OSM `water` ocean ≠ `theme.sea` → ô PBF chữ nhật trên biển.
- **Fix BE:** `mask` MVT = `ST_Difference(tile clip, union tỉnh đã simp cùng @simp với boundaries)` — **cấm** MVT stored `clip_masks`. Simp/pad mịn hơn (GL = Leaflet−1). Ingest mask bỏ simp 0.008.
- **Fix FE:** source `mask` + layer `clip-mask` (`theme.sea`) sau OSM **fill/line**, **trước** symbol — crop đất/đường, không crop nhãn (`GAP-MAP-LABEL-CLIP`). OSM `class=ocean|sea` = `theme.sea`.
- Dest: `TileService.cs` · `BoundaryIngestService.cs` · `vnClipBasemap.ts` · `clip-basemap-ui.md`.

## Gap — empty map on zoom (2026-09-03)

Country zoom still shows `vn-land`; zoom-in → canvas/OSM trống + **Network trống**. Cause: browser HTTP cache ô PBF rỗng + MapLibre overzoom in-memory (không request z mới). Fix MFE: `src/config/gisMapRuntime.ts` · chip **Live / Cache** · DEV default `real` (`?v=` session + `volatile` + `Cache-Control: no-cache`). `?gisTiles=real` · `VITE_GIS_TILE_FETCH`. `padding: 0`; OSM miss z≤12 = empty `200 no-store`.

## Gap — click cụm auto-zoom → mất detail (`GAP-MAP-CLICK-ZOOM` · `GAP-MAP-CLUSTER-DETAIL-01`) — 2026-09-03

Deep check `/gis/tai-san` (Wave 4 web). User: «load map 404» + click group không hiện detail. **Không** Wave 1–3.

| Symptom trên UI | Thực tế Network |
|-----------------|-----------------|
| «404 load map» sau auto zoom-in | Basemap **z>12** = **404 cố ý** (Planetiler max 12 → MapLibre overzoom). `clip` `maxzoom: 12`. |
| Console 81× `Failed to load resource` | **400** `router.project-osrm.org` `/route` + `radiuses=40;40;…` (dump lưới 0.01° ~1 km, radius 40 m) + `/nearest?number=30`. Không phải tile 404. |
| Bar `cụm · 143` · tooltip `Chiếu sáng đường · 26 · CS-street_lighting_484494` | Cụm corridor; click **không** gọi `inspectItemRef` |

**Chuỗi hỏng (cùng click):**

1. `GisDrawLivePage` cluster `click` → `map.setView(ll, DETAIL_ZOOM)` **z=14** — **cấm** `GAP-MAP-CLICK-ZOOM` / `gisMapLod.ts` «popup only».
2. `zoomstart` abort paint (`paintToken++`) · `loadViewport` **xóa cụm ngay** (`setClusterFeatures([])`) **trước** khi pin detail vẽ xong.
3. Pin dump lưới: `isCoarseDegreeGrid && !snapped` → **skip**. OSRM 400 → `snapped=false` → **0 pin**.
4. `LIGHTING` **không** trong `DETAIL_TYPE_PRIORITY` → wave2 sau KM/biển/cầu; budget 800 có thể hết trước chiếu sáng.
5. Cluster id `CS-street_lighting_*` **không** GUID → dù inspect cũng không `GET /asset/road-assets/{id}`.
6. `clusterCellBounds` (south/west/north/east) **không dùng** — zoom 1 điểm sample, không bbox nhóm.

**Cấm khi fix:** `{OsrmNearest}` inventory · `fitBounds` cell 0.5° · coi 404 z>12 là bug tile · fake Wave 4 undone.

## Fix (2026-09-03) — click cụm: maxZoom + hold loading (`GAP-MAP-CLUSTER-DETAIL-01`)

Confirm: auto zoom = **max hệ thống** (`VN_CLIP_MAX_ZOOM` 16 / `map.getMaxZoom`) · giữ bubble cụm **loading** đến khi pin detail vẽ.

- Click cụm: `setView(ll, gisDetailMinZoom())` · `clusterHoldRef` · ưu tiên `topType` (vd. LIGHTING) trong `sortTypesForDetail`.
- **Không** xóa `clusterFeatures` lúc vào detail; pulse `rmms-cluster-loading` đến `wantedPins.size > 0`.
- z≥ min detail: hiện dump pin trong VN dù OSRM 400 / lưới 0.01° (cấm skip `!snapped` ở detail).
- Pin xong → inspect `sampleCode` nếu khớp `pendingPoints` · rồi mới `setClusterFeatures([])`.
- `DETAIL_TYPE_PRIORITY` thêm `LIGHTING`. Tile 404 z>12 **giữ** (overzoom) — không đổi MapService.
- Dest: `GisDrawLivePage.tsx` · `gisMapLod.ts` · `gisMapTypePlan.ts` · `mapAssetIcons.ts`.

## Config (2026-09-03) — min zoom hiện detail TS

`VITE_GIS_DETAIL_MIN_ZOOM` default **14** (LOD cũ). Clamp 5–16. Query `?gisDetailZoom=` · localStorage `rmms.gis.detailMinZoom`. Click cụm zoom tới số này (không còn luôn 16). `.env.template` · `gisMapRuntime.ts` · webpack DefinePlugin.

## Fix (2026-09-03) — click cụm không GET detail (`GAP-MAP-CLUSTER-INSPECT-01`)

Popup «106 tài sản» = cụm (`bindPopup`), không pin. `GET /asset/road-assets/{id}` chỉ chạy khi `inspectItemRef` + GUID.

- Click cụm **không** inspect — chờ pin `sampleCode`; paint lúc `lodMode` còn corridor **xóa `clusterHoldRef`** trước `setLodMode(detail)` → không bao giờ GET.
- Cluster BE đã có `sampleId` GUID — click cụm gọi inspect **ngay** (`clusterSampleSaved`) + zoom. Paint **không** xóa hold. Match pin theo `sampleId` hoặc `sampleCode`.
- Network đúng: `GET …/asset/road-assets/{guid}` khi click cụm (cùng lúc `DELINEATOR?bbox=`). Cụm id `cluster-…` **không** GET.

## Fix (2026-09-03) — cụm GPS thật + nhóm tuyến trong ô (`GAP-MAP-CLUSTER-ROUTE-AREA-01`)

Popup «106/108» + GPS `8.89,105.02`: z9–13 gộp **cả tuyến trong bbox** (QL.1 cả ĐBSCL), marker = `Min(Id)` (Cà Mau) ≠ đám đang xem. OSRM-snap cụm → popup/icon lệch. Zoom z14 pad ~2 km → vài pin, không gần số cụm.

- BE `GetClustersAsync`: **mọi** zoom cluster = ô lưới × type × tuyến (`GisRouteCanon`). Marker = GPS 1 row DB. Props `lat`/`lng`/`sampleLat`/`sampleLng`/`routeCanon` + geometry.
- FE: cụm **không** OSRM-snap. Popup + `setView` = cùng GPS DB. Click giữ **icon cụm**, fetch `getGeoJson` bbox ô + `route`, pin cùng tuyến lân cận.
- `ClusterScale`: z≤8 → 2 (0.5°) · z≤11 → 4 · còn lại 8. Zoom-out khỏi detail thì bỏ hold.

### Follow-up — detail empty `route=QL61B` (`GAP-MAP-CLUSTER-ROUTE-MATCH-01`)

Cụm 34 KM_POST QL61B; `GET …/geojson/KM_POST?bbox=105.5,9.25,105.75,9.5&route=QL61B` **total 0**. Cluster gộp canon (`QL.61B` ≡ `QL61B`); `ApplyRoute` literal `QL61B` / `QL61B%` **không** khớp dump `QL.61B`.

- `ApplyRoute`: fold `.` / space / `-` + dotted `QL.61B` + canon prefix.
- Click cụm: `getGeoJson` **bbox ô + type** (không `route=`), FE lọc `canonRouteKey` — cùng tập với group.

### Follow-up — bbox ô lệch GPS mẫu (`GAP-MAP-CLUSTER-CELL-FLOOR-01`)

KM `13.10, 108.22` (QL HCM Đắk Lắk) nhưng `geojson/KM_POST?bbox=108.248,12.998,108.502,13.252` **total 0**. PG `CAST(lng*4 AS int)` **làm tròn** 432.88→433 → ô `108.25–108.50` **không chứa** sample. C# `(int)` cắt 432.

- GroupBy `FLOOR(lat|lng * scale)`. `ToClusterFeature` ô từ GPS nếu I,J không chứa điểm.
- FE `expandBboxToInclude` sample ±0.02° khi click cụm.

### Follow-up — geojson 173 nhưng map không pin (`GAP-MAP-DETAIL-PAINT-01`)

`KM_POST?bbox=104.98,8.76,105.50,9.50` **total 173** · overlay «đang tải chi tiết…» · chỉ bubble cụm **4**. Paint chờ OSRM `hydrate` (zoomstart `paintToken++` abort) · dump 0.01° cull · pinInView 0.03°.

- Detail: vẽ dump pin **trước** hydrate OSRM · `isDetailZoom(map)` · pinInView = ô cụm.
- Có pin → gỡ bubble cụm · overlay `pin N`. Dump trùng GPS: offset nhẹ.

### Follow-up — zoom detail hiện đủ pin trong bán kính (`GAP-MAP-DETAIL-RADIUS-01`)

Click cụm «10 tài sản» QL.57B dump `10.11,106.70`: popup cụm + icon chồng, không thấy đủ điểm trong vòng quanh GPS.

- Fetch + vẽ theo **bán kính 0.05° (~5.5 km)** quanh GPS click (`bboxFromRadius` / `inDetailRadius`) — mọi loại đã tick, không lọc `route`.
- Dump trùng ô: spiral `dumpStackOffset` (mẫu inspect ở tâm). Overlay `pin N`.

### Follow-up — zoom sát mất pin (`GAP-MAP-DETAIL-PAGE-FULL-01`)

View vùng (vd. `pin 788`) có data, zoom vào góc **trống**. Detail dừng ~800 pin (`DETAIL_PIN_BUDGET`) theo `OrderBy Route, KmFrom, Code` — trang đầu **không** nằm trong viewport mới. `shouldReloadDetail` + `bboxCovers` **không refetch** khi zoom-in.

- `getGeoJson` lặp `skip/take=300` đến `hasMore === false` (trần `DETAIL_FETCH_CAP` = BE `DetailCap` 2000).
- Zoom-in (`viewIsZoomIn` bbox fetch nhỏ hơn) → reset skip + tải **viewport hiện tại** đến hết trang.
- Cùng bbox chưa hết trang → tiếp tục skip, không đổi query.

---

- Geofabrik `vietnam-latest.osm.pbf` (~312 MB) · Osmium `--polygon` gis.vn `vietnam.poly` → `vietnam-clipped.osm.pbf`
- Planetiler OpenMapTiles **maxzoom 12** → `local-script/data/tile-cache/vietnam.mbtiles` (~67 MB)
- MapService `OsmTileCache` SQLite MBTiles · `GET /api/v1/gis/health` **`streetTilesReady: true`**
- `basemap/10/813/453.pbf` **200** ~53 KB · layers `water`/`transportation`/`place` (không còn ST_AsMVT tỉnh-only trên `basemap`)
- `boundaries` vẫn PostGIS ST_AsMVT (~109 KB z5) · mask HS/TS giữ
- Client URL **không đổi**: BFF `/gis/tiles/basemap/{z}/{x}/{y}.pbf` — **cấm** OSM.org CDN
- Script: `local-script/render-osm-mvt.ps1` / `.sh`

## Done (BE) — Wave 1 PASS

- Scaffold Layout C + BFF NuGet lib (consumer **chưa** pin)
- `Schema_GisBoundary` pair + `dotnet ef migrations list` · applied `linm_maps` `:5461`
- Ingest gis.vn **34** (Đà Nẵng 48 · Khánh Hòa 56) + clip mask invert · `/clip/vietnam.poly`
- Tile guest `GET /api/v1/gis/tiles/basemap/5/25/14.pbf` **200** MVT (~109 KB)
- Guest overlay `assets`/`cameras` + `geojson/assets` **401** · inspector `Authorization` **200**
- `dotnet build` Map.Api Release 0 error · Docker `linm-maps-api` healthy `:5021`

## Done (BFF web) — Wave 2 partial PASS

- Publish GHA `Linm.Platform.MapService.Bff` **1.1.0** (GitHub Packages)
- `PackageReference` + `AddLinmMapServiceBff` trên `RMMS.Service.Bff` — **không** `AddLinmMapServiceBffControllers` (tránh trùng `web-bff/api/v1/gis`)
- `GisBffController` tiles → `MapServiceDownstreamProxy` · `ServiceEndpoints:MapService` `:5021`
- `dotnet build` RMMS.Service.Bff Release **0 error**
- Smoke `:5299` `GET /web-bff/api/v1/gis/tiles/basemap/5/25/14.pbf` **200** MVT (~109 KB) · guest `assets`/`cameras` **401**
- Clusters / drawings / heatmap **vẫn** RMMS Gis (`ApiBase`)

## Done (Integrate BFF web) — Wave 3 web PASS (2026-09-01)

- `{MFE}` `Linm.Web.RMMS.Gis`: `VITE_API_URL` = `http://localhost:5201/web-bff/api/v1` — **cấm** gọi MapService `:5021` / RMMS API `:5111` từ browser
- Clusters `GET /gis/clusters` BFF · z≤8 không bbox (cụm quốc gia) · z≥9 `bbox` viewport (`viewport_lod`)
- TileUrl `resolveGisBffApiBase()` → `gis/tiles/{basemap\|boundaries}/{z}/{x}/{y}.pbf` · JWT + `X-Company-Id` overlay
- Smoke `:5201`: clusters **200** · `basemap/5/25/14.pbf` **200** · guest `assets`/`cameras` **401**
- Gis*Page: **0** `tileLayer(` OSM/Esri · **0** `openstreetmap.org` trên page
- **Không** đánh Wave 3 `done` — confirm `both`; mobile = Wave 2 `mobile_bff` trước

## Done (Map UI web) — Wave 4 web PASS

- `Linm.Web.RMMS.Gis` `GisListPage` / `GisDrawLivePage` / `GisDrawGoogleDemoPage`: MapLibre GL trên Leaflet `tilePane` · `{TileUrl}` = BFF `gis/tiles/{basemap\|mask}/{z}/{x}/{y}.pbf` · P2 style OpenMapTiles (`transportation` / `place`) + `boundaries` tỉnh
- maxBounds 102–118 / **6.8–23.5** · minZoom 5 · invert mask MVT `source-layer=mask`
- `transformRequest` JWT + `X-Company-Id` khi apiClient có header · **cấm** OSM.org / Esri / Carto fallback
- `yarn typecheck` **0 error** · grep `tileLayer(` OSM/Esri/Carto trên pages = **0**

## Fix (2026-09-01) — revert sơn đất/biển (mất màu Carto)

- **Lệch vs HEAD:** `water` → `water-ocean` `theme.sea` · `clip-mask` invert đè landcover · sea-fill world
- **Revert:** stack `clip-basemap-ui.md` (sea-fill → water `#aad3df` → vn-land → landcover). GL vẫn không đụng transform

## Fix (2026-09-01) — nền đất/biển 2 tone + dải phải

- **Root:** OSM `water` (ocean) `#aad3df` ≠ `theme.sea` `#8eb8c8` · sea-fill bbox 102–118 · overflow GL layer + xóa canvas transform → mép dọc / dải inverted
- **Fix:** sea-fill world · OSM ocean/`sea` = `theme.sea` · hồ mới `theme.water` trên `vn-land` · mask invert cùng biển · **không** đụng canvas transform · overflow **chỉ** tile-pane (`GAP-MAP-LAND-SEA-01`)
- Dest: `vnClipBasemap.ts` · `mapLineLevels.ts`

## Fix (2026-09-01) — nét bake chord + canvas mép tây

- **Root nét:** `expandLineItemsOnJump` đổi FeatureId · pairwise OSRM `Skip(1)` sau pair fail · simplify 64 pts
- **Fix:** `skipBaked` · paint `splitPathOnJump` nhiều polyline cùng id · `GisOsrmClient` không nối chord >150 km (`GAP-MAP-BAKE-JUMP`)
- **Root GL:** `resetClipGlCanvas` identity transform mỗi zoom/pan → mép tây = nền biển Leaflet
- **Fix:** chỉ `gl.resize()` · bỏ `map.on('zoom')` · MVT `mask` (`GAP-MAP-GL-LEFT`) — canvas transform = plugin
- Dest: `vnClipBasemap.ts` · `GisDrawLivePage.tsx` · `GisOsrmClient.cs`

## Fix (2026-09-01) — mobile tab stack (full bản đồ)

- **Root:** `@media (max-width: 960px)` 1 cột · `.side { height: 100% }` đặt Lớp/Chú giải **trên** map → list lớp chiếm viewport, không còn bản đồ.
- **Fix:** stacked ≤960 — tab title **44px** (nowrap) dưới map-bar · chevron **ẩn/hiện** `.sideBody` (`max-height: 48vh`) · mobile `isSmall` mặc định ẩn nội dung. Tap tab đang mở = collapse. `invalidateSize` khi đổi.
- Pages: `GisDrawLivePage` · `GisListPage` · `GisDrawGoogleDemoPage` · shared `GisMapSideTabs` + `useGisSideDock`.
- Verify: `yarn typecheck` Gis MFE **0 error**. Webpack `start:std` compiled.

## Fix (2026-09-01) — zoom min letterbox (chỉ một phần bản đồ)

- **Root:** `fitVnClipMap` `maxZoom: 5` + `minZoom` cố định 5. Trên viewport lớn, clip 102–118 / 6.8–23.5 chỉ ~360px ở z5 → hình chữ nhật giữa biển CSS. `maxBounds` + canvas GL scale sau zoom-out.
- **Fix:** `vnClipFillZoom` = `getBoundsZoom` clip (floor SSOT 5) · `zoomSnap: 0` · `fitBounds` cap theo fill · `setMinZoom(fill)` lúc resize · reset `maplibregl-canvas` transform + `overflow: visible` tilePane (`GAP-MAP-ZOOM-FILL` · `GAP-MAP-GL-CLIP-01`).
- Verify: `yarn typecheck` Gis MFE **0 error**. Zoom min = VN fill viewport (Hoàng Sa / Trường Sa vẫn trong maxBounds).

## Fix (2026-09-01) — Overpass 429/500 + zoom không pin

- **Root 429/500:** `osrmCenterline.ts` POST `overpass-api.de` + `overpass.kumi.systems` từ browser (rate-limit + CORS). Chặn `routeSavedLines` → `byRoute` trống → pin lưới 0.01° bị `shouldShowInventoryPin` ẩn.
- **Fix FE:** mặc định **không** gọi Overpass public. OSM `ref` chỉ khi `VITE_OVERPASS_URL` (self-host). Tuyến inventory = OSRM `/route` seed thưa.
- **Fix pin:** seed `byRoute` từ corridor km-chain **trước** OSRM; vẽ pin ngay; OSRM success overlay. Click cụm → `setView` z≥14.
- Verify: `yarn typecheck` Gis MFE **0 error**. Console không còn `overpass-api.de` / kumi 429/500.

## Fix (2026-09-01) — tile 500 + bóng mờ biên

- **Root 500:** `OsmTileCache` singleton SQLite connection NRE khi MapLibre burst `basemap` (zoom/move). BFF `:5201` forward 500. URL user `boundaries/8/203/120` hay 200; console lẫn `basemap/{z}/{x}/{y}` 500.
- **Fix BE:** connection-per-read + try/catch · `ST_ClipByBox2D` boundaries · rate 3000/min · pan abort ≠ 500.
- **Root bóng mờ:** lỗ tile 500 + Leaflet navy `#0f172a !important` + `vn-land` đè OSM water (polygon simplify) + road-casing rộng.
- **Fix FE:** sea bg · `vn-land` dưới water · casing/outline mỏng hơn.
- Verify: `basemap/8/203/120` + `boundaries/8/203/120` BFF **200** · parallel 24× **200**.

## Fix (2026-09-01) — popup click tài sản (Tên / Mã TS / KM / GPS / Tuyến)

- Click pin: popup **nhãn đủ 5 dòng** — không dump slug `cot-km` / mã QCVN làm title.
- **Tên** = catalog 36 `TYPE_LABEL` (`KM_POST` → «Cột Km») khi name = `Km*` hoặc slug lớp; tên công trình import khi khác lý trình.
- **Mã TS:** `code` · **KM** `kmFrom` · **GPS:** lat/lng · **Tuyến:** `route` (dump `road_name`).
- `buildMapPopupHtml` + `inventoryPopupHtml` trên GisDrawLive / Demo / List.

## Fix (2026-09-01) — snap tài sản / tuyến

- Overlay **vẽ trên UI** (Leaflet + OSRM `/route` + OSM `ref`) — **không** MVT `assets`/`routes` MapService (P1 trống).
- Pin/cụm: `projectToPath` **đúng mã tuyến** (`props.route` = dump `road_name` tầng 1) — **cấm** `OsrmNearest` / `/match` inventory.
- z 9–13: gộp cụm theo `GisRouteCanon` (QL.1 ≡ QL.1 - tỉnh). Thiếu corridor cùng mã → raw, không kéo sang tuyến khác.
- Data-gov: **GAP-GOV-ROUTE-3LVL** còn mở — nhánh/tránh nếu `Route` = QL.1 sẽ bám tim QL chính (không bịa map).

## Fix (2026-09-01) — cột km / tuyến vs tim đường (QL.27C)

- Dump `gov-vn` **không** đổi (GOV-IMP): `KM-km_post_718193` Km98 = `12.09,108.54` lưới 0.01° · corridor `coordSource=asset-km-chain`.
- Overlay `/gis/live`: pin **chỉ** ghim nét OSRM cùng mã — seed km-chain không còn gán popup «snap tim đường».
- Abort OSRM không cache chord = xong; retry id chưa `byId`/`failed`. Fail = nét đứt + popup `raw`.
- Popup `snapped === true` mới «snap tim đường»; default = `raw`.

## Fix (2026-09-01) — QL snap nhầm đường con (QL.20)

- Dump `CT-guide_post_519501` = `11.61,108.13` lưới 0.01°. Overpass tắt → `/route` seed thô bám đường làng; pin `projectToPath` theo nét sai.
- Regex tên OSM cũ `quố lộ` **không** khớp «Quốc lộ 20». Fold NFD `QUOC LO 20` / `QL 20`.
- Luôn ghim seed lên QL (`nearest?number=15` + tên) **trước** `/route`; bỏ via không khớp. `continue_straight`. Detour >2.5× seed → fail nét đứt (không `byRoute`).

## Fix (2026-09-01) — tuyến mọi zoom

- Review: z≤8 `osrmNow=false` xóa overlay + không fetch corridor → tick Tuyến vẫn 0 nét; status «ẩn nét» vì 1 fail.
- Tuyến đường vẽ **mọi LOD** khi Lớp bật: fetch corridor cả cluster, OSRM overview 36 (trục dài trước), cache zoom-out vẫn hiện. Pin/cụm z≤8 giữ cụm. «ẩn nét» chỉ khi 0 đoạn snap.

## Fix (2026-09-01) — zoom: đoạn trong view trước, không nét xám

- **Không** vẽ km-chain không màu rồi tô — geometry sai vẫn hiện (nét song song QL.1 cũ).
- Zoom: giữ nét đã snap (Leaflet scale); `moveend` clip SVG trong view ngay; OSRM ưu tiên đoạn **nằm trọn** view, đoạn ngắn trước. 1 polyline (bỏ corridor twin). Concurrency 4.

## Fix (2026-09-01) — không vào nhánh / lưới phố

- `/route` inventory: `alternatives` + điểm số góc 90° — bỏ bậc thang Manhattan và vòng «đường tránh cầu».
- Ghim seed: cấm tên TRANH CAU / NHANH / HEM / ĐT; khoảng cách pin ≥150 m; via tối đa 6 → retry 3 → 2 đầu-cuối.
- Lưới phố / detour → throw (ẩn nét), không `byRoute` giả.

## Fix (2026-09-01) — biển + zoom snap ready

- Pin/cụm biển: `GisCoordGate` + FE `inVietnamMainland` thêm **cửa đông** (Phan Thiết / Cà Mau / vịnh Thái Lan). Cấm chord km-chain ra biển (`SplitKmChain` cắt đỉnh ngoài đất).
- `/gis/live` z≥9: **không** `addLayer` km-chain thô. Chỉ vẽ khi OSRM `snapped`. Zoomstart xóa overlay; idle viewport mới paint. Fail = ẩn nét, không nét đứt xuyên rừng/biển.
- Lazy: `VIEWPORT_IDLE_MS` + `mapViewKey` + cap OSRM viewport 24. Cache `byId` giữ khi pan; tuyến mới mới route.

## Fix (2026-09-01) — QL.TRUONGSONDONG snap ĐT.666

- Dump `CT-guide_post_521880` = `13.65,108.4` lưới 0.01° · `route=QL.TRUONGSONDONG` (`GisRouteCanon`=`QLTSDONG`). **Không** invented-seed.
- Lần QL.20 chỉ ghim `/^QL\d/` → TSDONG/HCM **bỏ qua** pin seed → `/route` thô vòng ĐT.666 / đường làng; pin `projectToPath` theo nét sai (`13.65082,108.39749` · popup «snap»).
- Matcher named: OSM name fold `TRUONG SON DONG` / `HO CHI MINH` (cấm ĐT.666). Overpass `name` trunk/primary khi có `VITE_OVERPASS_URL`. Fail pin → nét đứt, không `byRoute`.
- Popup KM: không nhét tên cọc vào ô KM (dump `KmFrom` trống · GAP-DELIM-SPEC-01).

## Fix (2026-09-01) — OSM Carto muted (hạ tone nền)

- Confirm `tone_plan=osm_muted` — **không** OSM.org / Esri CDN.
- Default + Streets: đất `#e8e4dc` (tối hơn OSM `#f2efe9`) · biển `#8eb8c8` · nước `#aad3df`.
- `landcover`/`landuse` theo `class` (wood/grass/farm/residential/park) · hồ/sông `water-inland` trên `vn-land`.
- Đường OSM Carto: motorway `#e892a2` · trunk `#f9b29c` · primary `#fcd6a4` · secondary `#f7fabf`.
- Sat giữ địa hình clip. `yarn typecheck` Gis MFE **0 error**. Hard-refresh chip Default/Streets.

## Fix (2026-09-01) — z≤8 không vẽ theo tuyến đã index/bake

- **Root:** `ApplyBakedGeoms` so `geomKey` dump (sample 80) với bake (full km-chain) → miss hầu hết QL; FE `landReadyPath` + `clipPathToView` ẩn nét ven biển Bắc. Overlay «13 đã ghim» = 13 tuyến ngắn khớp key, không phải đủ index.
- **Fix BE:** overlay bake theo FeatureId (bỏ geomKey) · append segment id lệch split · xóa km-chain cùng mã đã bake. OSRM bake: bỏ `continue_straight` + fallback từng cặp (354 hàng từng `Failed` vì NoRoute).
- **Fix FE:** z≤8 GetCorridors không bbox · paint full path bake/index · IDB lookup theo `id`.
- Verify: `dotnet build` API Release 0 · `yarn typecheck` Gis MFE 0.

## Fix (2026-09-01) — zoom: nhãn EN + pin kéo khỏi tim đường

- **Root nhãn:** `NAME_FIELD` coalesce `name:vi` → **`name_en` / `name:en`**. Tile có `National Route 12A` + `Quốc lộ 12A`; thiếu `name:vi` trên đoạn OSM → hiện English.
- **Fix nhãn:** chỉ `name:vi` / nonlatin / `name` / `ref`. Đổi `National Route N` → `Quốc lộ N`. **Cấm** `name_en` fallback (`GAP-MAP-LABEL-VI`).
- **Root pin:** `gl.resize()` trên **zoomend/moveend** đụng transform plugin (padding 0.1 + scale leftover) → marker Leaflet đứng, nền GL trượt — pin «kéo» khỏi đường cam.
- **Fix pin:** `padding: 0` · resize GL **chỉ** `resize` / dock · plugin tự zoom/pan (`GAP-MAP-PIN-ZOOM`).
- Dest: `vnClipBasemap.ts`. Verify: `yarn typecheck` Gis MFE.

## Fix (2026-09-01) — đường nền + biên OSM Carto

- **Root:** casing +0.35–0.7px · width dừng z12 (overzoom nét chỉ) · overlay Tuyến `#2563eb`.
- **Fix:** class fill + casing pad ~1–1.8px/phía · z14–16 · minor dưới QL · overlay `cartoRoutePairStyle` primary.
- Dest: `vnClipBasemap.ts`. Gap `GAP-MAP-ROAD-CARTO-01`.

## Fix (2026-09-01) — zoom max: mất pin + QL tách 2 dải

- **Root đường:** Leaflet default maxZoom 18 + MBTiles max 12 → overzoom ×64. QL.1 OSM hai chiều ~20 m median thành khe be; interpolate width dốc sau GL z16.
- **Fix đường:** `VN_CLIP_MAX_ZOOM = 16` · `setMaxZoom` · ROAD_Z thêm stop 18 = cùng px z16 (`GAP-MAP-ZOOM-MAX`).
- **Root pin:** dump lưới 0.01° (~1 km). Detail `padBbox` min 0.002° + `pinInView(raw)` → viewport phố không chứa dump → 0 pin.
- **Fix pin:** `DETAIL_BBOX_MIN_PAD` 0.02° · cull theo latlng **đã snap hoặc dump** + `DETAIL_PIN_PAD_DEG` 0.015° (`GAP-MAP-PIN-DETAIL-BBOX`).
- Dest: `vnClipBasemap.ts` · `gisMapLod.ts` · `GisDrawLivePage.tsx` · `locateUserOnMap.ts`.

## Next (cấm fake done)

| Slash | Việc |
|-------|------|
| `/implement-map-stack` Wave 2 | Mobile BFF `AddLinmMapServiceBff` (`wave2_host=mobile_bff`) — **chặn** Wave 3 mobile |
| `/implement-map-stack` Wave 3 | web **done** · mobile sau Wave 2 |
| `/implement-map-stack` Wave 4 | iOS / Android (`wave4_host`) |
| `/data-gov-integration` | overlay routes/assets |
| P2 z14 | `pwsh ./local-script/render-osm-mvt.ps1 -MaxZoom 14` nếu cần phố nhỏ (hiện z12) |

**Cấm** duplicate `VietnamBoundaries` trên `Linm.RMMS.WebService`.
