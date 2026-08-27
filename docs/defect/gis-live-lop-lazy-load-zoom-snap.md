# GIS Live — Lớp lazy load + zoom/snap tuyến

**Date:** 2026-08-26  
**Status:** implemented — lazy Lớp + paint overlayPane + snap đúng tuyến  
**Page:** `/gis/live` · MFE `Linm.Web.RMMS.Gis`  
**Skill:** `/map-snap-centerline` (SSOT Linm) — **không** nearest cho KM/TS

---

## Goal

1. Tab **Lớp**: đủ loại tài sản + **count**, user filter bằng checkbox.
2. Vào trang **không load 394k**. Tick loại nào → fetch loại đó + spinner trên row.
3. Zoom gần phải thấy **nét tuyến / pin**, không chỉ marker CT.01.
4. Pin ghim **đúng quốc lộ** (`props.route`), không đường làng / ruộng.
5. Đổi tab Lớp / isolate **không** bị detect thành `{OsrmNearest}`.

---

## Task table

| # | Việc | Done khi |
|---|------|----------|
| 1 | Lớp UI: count + checkbox default **off** + spinner | Vào trang: 0 TS, count hiện |
| 2 | Lazy fetch theo layer đã tick | Tick Cột km → cụm; bỏ tick → ẩn |
| 3 | Corridor **paint** vs **snap** tách nhau | Tick Tuyến → nét; tick Point zoom gần vẫn snap |
| 4 | Overview z≤8: vẽ raw, **cấm** OSRM quốc gia | Cụm/nét hiện ngay, không chờ |
| 5 | Paint line: raw trước, sig sau `addLayer`, overlay-pane | Zoom: nét không mất |
| 6 | Click cụm → `setView` ≥ DETAIL_ZOOM | Zoom vào pin, không fitBounds ô 0.5° |
| 7 | Detail fetch: `hasMore !== false` | Đổi loại khi đang zoom vẫn tải pin |
| 8 | Snap: project đúng mã tuyến; fail không vào `byRoute` | Pin trên QL, không ruộng |
| 9 | BE corridor: jump 150 km, sample 80, take 400 | Overview có LineString |
| 10 | Skill wrapper: cấm nearest KM/TS; tab Lớp ≠ snap | Chat tab mới không “update sai” |

---

## File

**FE** `Linm.Web.RMMS.Gis`

- `src/pages/GisDrawLivePage/GisDrawLivePage.tsx`
- `src/pages/GisDrawLivePage/gisMapTypePlan.ts` — `selectedLayerSet` · `countForLayer` · `filterSelectedTypes`
- `src/pages/GisDrawLivePage/GisDrawLivePage.module.css` — `.layerCount` · `.layerSpin`
- `src/pages/GisDrawLivePage/gisMapLod.ts` — `CORRIDOR_ROUTE_TAKE = 400`
- `src/pages/GisDrawGoogleDemoPage/gisDrawHelpers.ts` — `routeSavedLines`: fail **không** `byRoute.set`
- `src/shared/map/mapLineLevels.ts` — CSS `svg { max-width: none }` mọi `.leaflet-pane`

**BE** `Linm.RMMS.WebService`

- `api/src/RMMS.Service.Api/Domains/Gis/Services/GisService.cs`
- `api/src/RMMS.Service.Api/Domains/Gis/Services/GisInventoryMapper.cs` — `SplitKmChain(..., maxJumpKm: 150)`

**Skill** (nếu chưa có)

- `common/skill/map-snap-centerline/map-snap-centerline.md`
- `example/lazy-layer-snap.md`
- Wrapper `.cursor` / `.cline` / AutoCode: **cấm** `projectToPath` rồi `snapPointToStreet` cho inventory

---

## Root cause (đừng lặp)

| Hiện tượng | Nguyên nhân |
|------------|-------------|
| 394k TS lúc load | `layersVisible` default all on; `loadViewport` fetch all types + national clusters (không `layer`) |
| Tick Cột km map trống / pin ẩn | Corridor chỉ fetch khi tick **Tuyến đường**. Pin lưới 0.01° bị `shouldShowInventoryPin` ẩn khi không có `byRoute` |
| Zoom không ra pin | (1) Click cụm dùng `fitBounds` ô 0.5° → không vào `DETAIL_ZOOM`. (2) `hasMore` **undefined** = không fetch loại mới khi đang detail |
| Snap sai QL.1 / QL.28B | `{OsrmNearest}` cho inventory; `byRoute` nhận cả nét OSRM **fail**. Wrapper `.cline` bảo `projectToPath` rồi `snapPointToStreet` |
| Tick lớp / tuyến không vẽ | Paint **await OSRM cả nước** trước khi vẽ cụm/pin. `loadGeoJsonBatched` corridor 20×100 trang chặn clusters |
| Zoom thấy marker CT.01, **không thấy nét** | (1) `linePaintSigRef` gán **trước** `addLayer` → abort coi như đã vẽ. (2) Custom pane `rmms-track` + Linm `svg { max-width:100% }` → polyline width 0, pin (img) vẫn hiện. (3) Track gắn vào `drawn` (Draw), không phải overlay-pane |

---

## Spec implement

### 1. Lớp lazy load

- `layersVisible` default **false**. Bootstrap: layer mới = false (không `= true`).
- Load đầu: chỉ `getSummaryByType()`. Count = sum `typeSummary` theo `layerCode`.
- Tick: `layersVisibleRef` sync **trước** `loadViewport`. Spinner row đang fetch.
- Untick: ẩn; isolate cùng loại thì clear isolate.
- Isolate pill: chưa tick → auto-tick + load. **Tất cả** = `isolate=null`, **không** tick hết.

### 2. `loadViewport`

```
selected = layers đã tick
paintCorridor = selected có tuyen-duong && (!isolated || isolated === tuyen-duong)
wantSnapCorridor = selected.size > 0 && lod !== 'cluster'   // z≥9
wantFetchCorridor = paintCorridor || wantSnapCorridor
```

- `fullTypes` / `largeTypes` = filter `selected` (+ isolate).
- **Clusters trước**, corridor **sau**. Cấm `await` corridor trước cụm.
- Cluster API: `getGisClusters({ zoom, layer })` — **cấm** gọi không `layer` (394k).
- Corridor: **1 shot** `getGeoJson('tuyen-duong', { lod:'corridor', bbox, take:400 })` — **cấm** `loadGeoJsonBatched` 20 trang.
- Overview z≤8 + chỉ tick Point: **không** fetch corridor.
- Detail: `needFetch` nếu `staleDetail || hasMore !== false` (undefined = chưa tải loại mới).
- `dbItems`: corridor (nếu fetch) + full + detail. `visibleItems` ẩn corridor khi không tick Tuyến đường. Paint snap: `visibleItems + corridor ẩn` khi `osrmNow`.

### 3. Paint line (zoom — P0)

Thứ tự **bắt buộc**:

1. `ensureLinePanes` + CSS pane.
2. Clear overlay.
3. `L.polyline(raw, { pane: 'overlayPane' })` → `overlay.addLayer` (**không** `drawn`).
4. **Rồi mới** `linePaintSigRef = lineSig`.
5. z≥9: `await routeSavedLines` → `setLatLngs`. Abort → **giữ nét raw**, không `return` map trống.
6. Overlay 0 layer nhưng còn `lineItems` → paint lại.

**Cấm**

- `linePaintSigRef` trước `addLayer`
- Custom pane `rmms-track` làm SSOT vẽ (Linm `svg max-width:100%` → nét biến mất, pin CT.01 còn)
- Await OSRM xong mới `addLayer` ở overview / lúc zoom

Click cụm:

```ts
map.setView([lat, lng], Math.max(DETAIL_ZOOM, map.getZoom()))
// cấm fitBounds(cell 0.5°, { maxZoom: 14 })
```

### 4. Snap

- `snapInventoryPoint` → `projectToNearestPath` đúng `canonRouteKey(props.route)`.
- `{OsrmNearest}` **chỉ** Draw CREATED.
- `routeSavedLines`: `failed.has(id)` → **không** `byRoute.set`.
- Check xanh icon = **Đang dùng**, không phải snap OK.

### 5. BE corridor

- `take` default `CorridorRouteMax` (400).
- Sample **80** điểm/tuyến (kể cả wide bbox).
- `SplitKmChain` **150** km (40 km + 24 điểm → mất LineString overview).
- Rebuild API sau khi sửa.

---

## Cấm (incident)

- Load all types / clusters không `layer` lúc boot
- Skip `GetCorridors` vì user chỉ tick Cột km (khi z≥9 cần snap)
- `hasMore` undefined = hết data
- Push km-chain fail vào `byRoute`
- Detect đổi tab Lớp = snap-centerline + nearest
- `fitBounds` cell cụm lớn rồi nghĩ đã vào pin mode

---

## Verify

1. `/gis/live` → Lớp có count, map **0 TS** (không 394k).
2. Tick **Cột km** overview → **cụm** hiện ngay.
3. Tick **Tuyến đường** → **nét** hiện ngay; zoom gần nét **còn** (không chỉ CT.01).
4. Click cụm / zoom z≥14 → pin trên **đúng QL**.
5. Đổi tab Lớp/Chú giải/isolate → không re-OSRM nearest.
6. `yarn typecheck` Gis MFE.

---

## LOD (tham chiếu)

| Zoom | lod | Vẽ |
|------|-----|-----|
| z≤8 | cluster | Cụm + nét tuyến raw (nếu tick). Không OSRM |
| 9–13 | corridor | Cụm bbox + nét raw rồi OSRM setLatLngs |
| z≥14 | detail | Pin bbox; corridor ẩn để snap |
