# Implement — gis-draw-live

| Field | Value |
|-------|-------|
| feature | `gis-draw-live` |
| status | `done` |
| taskId | `task_6e79dde5` |
| mfeStdRoute | `/gis/draw` |
| mfeStdUrl | `http://localhost:9302/gis/draw` |
| skillVersion | `2026.08.10.3` |
| schemaVersion | `qldb-workflow-skill-v1` |
| workflowVersion | `2026.08.10.3` |
| versionGate | `ok` |
| updatedAt | `2026-09-01T20:25:00.000Z` |

## retry.ssot_rereview

Live page `/gis/draw` audit before Write:

| Check | Result |
|-------|--------|
| LinPageLayout / CatalogListShell | N/A Kind F — 1 map shell, no nested CatalogListShell |
| CatalogListPagination | N/A |
| flex + skeleton | map-host flex · loading overlay Leaflet / sync |
| toolbar | map-bar only (clip · Fit · Full/Dock) — **cấm** zone B seed toolbar |
| list_parity | N/A packKind=map |
| tree_master | layer tree sidebar (checkbox + radio target) |
| form checklist | props inspect (popup + gov fields) — not Slideout / not save-draw form |
| OMS R1 live Leaflet | PASS |
| OMS R2 basemap OSM default + Esri/sat | PASS |
| OMS R3 title/aria | PASS map `role=application` · bar aria |
| OMS R4b full flex | PASS · full ẩn sidebar (demo parity) |
| OMS R4c host→bar | PASS · **không** legend isolate bottom |
| OMS R5b sat maxNativeZoom 17 | PASS |
| OMS R7b corridor + track panes | PASS `corridorStyle` / `trackLineStyle` |
| OMS R7c isolate + Fit focus | List Kết quả only — **cấm** map click auto zoom |
| OMS R8/R9 OSRM route + snap | PASS (fallback raw) |
| OMS R11 Fit overview ≤13 | PASS |

## Tasks done

| id | status | notes |
|----|--------|-------|
| T-CTX | done | context + demo |
| T-PERM | done | JWT TODO (health pattern) |
| T-BE-01 | done | purpose=live layers + LiveBasemapConfig · reuse drawings |
| T-BE-02 | done | BFF forward `basemap-config?purpose=` |
| T-UI-MAP | done | Kind F `/gis/draw` · OMS R1–R11 |
| T-FE-CLIENT | done | BFF + local-seed fallback |

## Paths

### FE (`Linm.Web.RMMS.Gis`)

- `src/pages/GisDrawLivePage/GisDrawLivePage.tsx` — Kind F live + OMS chrome
- `src/pages/GisDrawLivePage/GisDrawLivePage.module.css`
- `src/services/gis/endpoint.ts` · `gisService.ts` — `getBasemapConfig(purpose)`

### BE (`Linm.RMMS.WebService`)

- `Domains/Gis/Services/GisDrawingStore.cs` — `LiveBasemapConfig`
- `Domains/Gis/Services/GisService.cs` · `IGisService.cs` — purpose live
- `Domains/Gis/Controllers/GisMapController.cs` — `basemap-config?purpose=`
- `bff/domains/gis/.../GisBffController.cs` — forward query
- `docs/DOMAIN-MAP.md` — slug `gis-draw-live` → Gis

## Verify (`task_6e79dde5` · 2026-08-11)

| Check | Result |
|-------|--------|
| FE `yarn typecheck` | PASS |
| FE `yarn build` (`LINM_RUN_DEV_LOCAL_BUNDLE=1`) | PASS (webpack 3 size warnings) |
| BE `dotnet build Linm.RMMS.WebService.sln -c Release` | PASS (0 errors) |

## Notes (2026-09-01 `/edit-web-feature` · display only)

- Pin/cụm **chỉ xem**: `ASSET_DISPLAY_MARKER_OPTS.draggable=false` · bỏ `bindDrawEditPersist` · `Draw.CREATED` · Leaflet.Draw edit trên demo live
- Dest: `GisDrawLivePage.tsx` · `GisDrawGoogleDemoPage.tsx` · `GisListPage.tsx` · `mapAssetIcons.ts` · demo `gis-draw-live-app.js`
- Gap: `GAP-MAP-DISPLAY-ONLY`

## Notes (2026-09-01 `/edit-web-feature` · road nền + biên)

- Root: casing chỉ +0.35–0.7px · interpolate dừng z12 (MBTiles overzoom = nét chỉ) · overlay Tuyến `#2563eb` đè OSM
- FE: OSM Carto class fill + casing pad ~1–1.8px/phía · z14–16 · minor dưới / QL trên · `line-cap` round · overlay `cartoRoutePairStyle` primary `#fcd6a4` / `#a06b00`
- Dest: `vnClipBasemap.ts` · `GisDrawLivePage.tsx` · `GisDrawGoogleDemoPage.tsx` · demo `gis-draw-live-app.js`
- Gap: `GAP-MAP-ROAD-CARTO-01`

## Notes (2026-09-01 `/map-inspect-popup` · locate card)

- Click pin **Vị trí của tôi** → `{MapPopup}` **Tên: Vị trí của bạn** · **GPS:** 5 decimal · meta `GPS · EPSG:4326`
- **Cấm** `bindPopup` title-only · bar copy không đổi
- Dest: `locateUserOnMap.ts` `buildMyLocationPopupHtml` · demo `gis-draw-live-app.js`
- Gap: `GAP-MAP-LOCATE-POPUP-01`

## Notes (2026-09-03 `/map-draw-street` · chord GPS = fail)

- View: nét xanh dày / tam giác / cắt biển = dump GPS thưa vẽ như xong (`paintSnappedLine(waypoints)` khi `!snapped`)
- FE: `isSparseGpsChord` chặn bake/index/routeSavedLines/paint · fail = ẩn nét + overlay **nét đứt** · **cấm** chord dump
- Dest: `gisDrawHelpers.ts` · `GisDrawLivePage.tsx` · `osrmCenterline.ts` `isSparseGpsChord`
- Gap: `GAP-MAP-DRAW-STREET-01`

## Notes (2026-09-03 `/map-draw-street` · chord GPS = fail)

- View: nét xanh dày / tam giác / cắt biển = dump GPS thưa vẽ như xong (`paintSnappedLine(waypoints)` khi `!snapped`)
- FE: `isSparseGpsChord` chặn bake/index/`routeSavedLines`/paint · fail = ẩn nét + overlay **nét đứt** · **cấm** chord dump
- Dest: `gisDrawHelpers.ts` · `GisDrawLivePage.tsx`
- Gap: `GAP-MAP-DRAW-STREET-01`

## Notes (2026-09-03 `/edit-web-feature` · tuyến mất khi zoom sát)

- Root: zoom z≥9 refetch corridor **bbox** thay cache `national` (dump GPS 0.01°) → `clipPathToView` 0 vertex in viewport → `removeLine` khi OSRM chưa xong (status `tìm đường…`)
- FE: tick Tuyến → luôn cache `national` · `pathBboxOverlapsBounds` · skip clip/landReady cho route **đã ghim** · GPS thưa không vẽ
- Dest: `GisDrawLivePage.tsx` · `gisDrawHelpers.ts`
- Gap: `GAP-MAP-INDEX-PAINT`

## Notes (2026-09-03 `/edit-web-feature` · overlay Tuyến blue)

- User: lớp **Tuyến đường** trên map = cam Carto, đổi **blue**
- FE: `cartoRoutePairStyle` fill `guideBlue` `#2563EB` · casing `routeBlueCase` `#1D4ED8` · `LAYER_COLOR['tuyen-duong']` · pict TD `guideBlue` · **cấm** peach `#fcd6a4` overlay (nền OSM Carto giữ nguyên)
- Dest: `vnClipBasemap.ts` · `rmmsAssetColorSsot.ts` · `gisDrawHelpers.ts` · `mapAssetIcons.ts` · demo `gis-draw-live-app.js`
- Gap: `GAP-MAP-ROUTE-BLUE`

## Notes (2026-09-03 `/edit-web-feature` · `_leaflet_pos` pane)

- Root: `attachVnClipBasemap` `setTimeout` 0/50/200/600 gọi `setMaxBounds` **không** lưu handle · `unload` chỉ `clearTimeout(roTimer)` → `map.remove()` xóa `_mapPane` nhưng `_loaded` còn → `getCenter` đọc `undefined._leaflet_pos`
- FE: `isVnClipMapAlive` (container + `mapPane` `isConnected`) · `applyVnClipCamera` / `fitVnClipMap` / `syncVnClipGl` no-op khi chết · schedule IDs clear trên `unload`
- Dest: `vnClipBasemap.ts` · `GisDrawLivePage.tsx` · `GisCameraMapPage.tsx`
- Gap: `GAP-MAP-PANE-ALIVE`

## Notes (2026-09-01 `/edit-web-feature` · zoom max pin + dual road)

- Root đường: Leaflet max 18 + overzoom tile z12 ×64 · QL dual carriageway ~20 m → dải be + nhãn khe; interpolate width tiếp dốc sau z16
- Root pin: dump GPS lưới 0.01° · `padBbox` min 0.002° + cull `pinInView(raw)` → viewport z16–18 miss asset
- FE: `VN_CLIP_MAX_ZOOM = 16` · ROAD_Z plateau z16=z18 · detail pad 0.02° · cull snap **hoặc** dump + min pad 0.015°
- Dest: `vnClipBasemap.ts` · `gisMapLod.ts` · `GisDrawLivePage.tsx` · `locateUserOnMap.ts`
- Gap: `GAP-MAP-ZOOM-MAX` · `GAP-MAP-PIN-DETAIL-BBOX`

## Notes (2026-09-01 `/edit-web-feature` · locate me)

- Map-bar **Vị trí của tôi** (`locateUserOnMap`) — pin teal + vòng accuracy · **cấm** nút Fit · **cấm** `alert`
- Dest: `locateUserOnMap.ts` · `GisDrawLivePage.tsx` (shared `/gis` · `/gis/ha-tang`)

## Notes (2026-09-01 `/edit-web-feature` · map-bar 2 chip)

- Map-bar **Tiêu chuẩn** (`default`) + **Vệ tinh** (`sat`) — **cấm** Default/Streets/Sat EN · **cấm** chip Streets
- Dest: `vnClipBasemap.ts` `CLIP_STYLE_OPTIONS` (shared `/gis` · `/gis/live` · `/gis/ha-tang`)

## Notes (2026-09-01 `/edit-web-feature` · land/sea revert)

- Compare vs HEAD: lệch `water`→`water-ocean` `theme.sea` + `clip-mask` invert đè landcover/đường + sea-fill world → mất màu nước `#aad3df` / đồ họa Carto
- Revert stack về `clip-basemap-ui.md`: sea-fill clip bbox → **water `#aad3df`** → vn-land → landcover. **Không** mask fill. Giữ GL: không đụng canvas transform / không bind `zoom` từng frame
- Dest: `vnClipBasemap.ts`

## Notes (2026-09-01 `/edit-web-feature` · land/sea)

- Root: OSM `water` (cả ocean) tô `#aad3df` khác `theme.sea` `#8eb8c8` + sea-fill chữ nhật 102–118 → mép dọc 2 nền; `overflow:visible` trên GL layer + xóa canvas transform → canvas tràn (dải phải inverted)
- Stack: bg + sea-fill **world** + OSM ocean/`sea` = `theme.sea` → `vn-land` → landcover → hồ `theme.water` → mask invert cùng biển
- GL: **không** đụng `canvas.style.transform` · overflow visible **chỉ** tile-pane
- Dest: `vnClipBasemap.ts` · `mapLineLevels.ts`

## Notes (2026-09-01 `/edit-web-feature` · bake jump + GL left)

- Root (1): `expandLineItemsOnJump` đổi `id#si` → miss bake/index; pairwise OSRM `Skip(1)` nối pair fail = chord >150 km; `simplifyPathForLod` 64 pts + `landReadyPath` lọc đỉnh = blob
- FE: `skipSplit` · paint nhiều polyline cùng id · không simplify/land-filter bake · cluster
- BE: `GisOsrmClient` pairwise: nhảy >150 km thì `AddRange(pair)` (không `Skip(1)`)
- Root (2): `resetClipGlCanvas` gán `transform: identity` mỗi `zoom`/`moveend` đánh plugin maplibre-gl-leaflet → mép tây = nền biển Leaflet `#8eb8c8`
- FE: chỉ clear transform khi `scale < 0.82` · bỏ bind `zoom` từng frame · overflow visible GL · MVT `mask`
- Dest: `GisDrawLivePage.tsx` · `gisDrawHelpers.ts` · `vnClipBasemap.ts` · `mapLineLevels.ts` · `GisOsrmClient.cs`

## Notes (`/edit-web-feature` 2026-09-01)

- Tab Thuộc tính: `GisAssetInspectPanel` — Tên / Mã TS / KM / GPS / Tuyến (parity popup) + Loại + Tuyến chính / named / Đoạn + dumpSpecs (`GET /asset/road-assets/{id}`). Overlay GeoJSON thêm `routeNamed` · `routeSegment` · `kmTo`.
- **Cấm** Lưu bản vẽ / Huỷ · **cấm** textarea GeoJSON.
- Dest: `GisDrawLivePage.tsx` · `gisDrawHelpers.ts` `buildGisInspectModel` · `GisInventoryMapper` / `GisService` overlay props.

## Debt

- PostGIS persist — DEFER
- JWT Authorize — TODO when platform auth lands
- Unit tests — pending
- Demo seed QL.1 vs MFE Cot_km QL.22 — seed file remains QL.22 (existing MFE seed)

## Notes (2026-09-01 `/edit-web-feature` · index paint)

- Root: `ApplyBakedGeoms` so khớp `geomKey` (sample 80 ≠ full chain) → chỉ ~13 tuyến ngắn inland; `landReadyPath` + `clipPathToView` ẩn QL ven biển Bắc
- BE: overlay bake theo FeatureId · append split id · bỏ km-chain cùng mã đã bake
- FE z≤8: GetCorridors **không bbox** · không clip · bake/index không `landReadyPath` drop · IDB lookup theo `id` nếu geomKey lệch
- Dest: `GisInventoryMapper.ApplyBakedGeoms` · `GisDrawLivePage.tsx` · `osrmLineIndex.ts`

## Notes (2026-09-01 `/edit-web-feature`)

- Removed page header (`← Dev ← GIS` + title) · seed toolbar · bottom isolate legend
- Dock map-host **flex fill** remaining (sidebar + status + map-bar)
- Click cụm / pin / line trên map: **popup only** — **cấm** `setView` auto zoom
- Attribution: ẩn Leaflet · `RMMS.vn` (`CLIP_MAP_ATTRIBUTION` · `setPrefix(false)`)
- Dest: `GisDrawLivePage.tsx` · `.module.css` · `vnClipBasemap.ts` · demo `gis-draw-live.html`

## Notes (2026-08-26 · lazy Lớp + zoom snap)

Reopen `docs/defect/gis-live-lop-lazy-load-zoom-snap.md`:

- Lớp checkbox default **off**; boot chỉ `getSummaryByType` (count); tick mới fetch + spinner
- `loadViewport`: clusters trước, corridor 1-shot `take=400` sau; `getGisClusters({ layer })` bắt buộc
- Paint raw `overlayPane` trước `linePaintSigRef`; z≥9 OSRM `setLatLngs`; abort giữ nét
- `hasMore !== false`; `routeSavedLines` fail **không** `byRoute.set`
- Tab Lớp ≠ `{OsrmNearest}`

## Notes (2026-09-01 · `/edit-web-feature` menu + path)

- Shell menu: **Bản đồ tài sản** (`/gis/tai-san`) — aria `Bản đồ tài sản`
- `?type=` / `?types=` auto-check Loại tài sản (`gisMapTypePlan.ts`)
- Redirect `/gis` · `/gis/live` · `/gis/ha-tang` · `/gis/tao-moi` → `/gis/tai-san` (giữ query)
- Sibling **Bản đồ Tuần đường** `/gis/tuan-duong` (`gis-patrol-map`)
- Removed MFE pages: `GisListPage` · `GisFormPage` · `GisDrawGoogleDemoPage` (helpers kept)

## Permissions

Local mode OK · Authorize TODO when platform auth lands.

---
<!-- Version meta: skillVersion=2026.08.10.3 · schemaVersion=qldb-workflow-skill-v1 · workflowVersion=2026.08.10.3 · versionGate=ok -->
