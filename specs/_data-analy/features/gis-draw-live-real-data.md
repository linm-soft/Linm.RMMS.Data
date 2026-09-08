# Real-data bind — gis-draw-live (Kind F map · inspect)

| | |
|---|---|
| feature | `gis-draw-live` |
| packKind | `map` |
| changeScope | `edit_page` |
| taskId | `task_0b94a0ca` |
| contentHash | `sha256:24f695fc96706b7876dffb8960f4186e34b439fb0d5b519d0fa282a01760de02` |
| prefix | API `api/v1/gis` · BFF `web-bff/api/v1/gis` · files `web-bff/api/v1/files` |
| MapGateSlash | `/agent-dev-oms-map` |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · DOMAIN-MAP **Gis** — **cấm** ERP.WebService / Domains/Master |
| uiRepo | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Gis` · `/gis/tai-san` |
| progress | `none` (map inspect) · overlay health stub only |
| runMode | `full_pipeline` · gap=`inspect_photo` + `xsect` + `route_kpi` + `files_hard` |

## § Delta Current vs New (`edit_page` · `task_0b94a0ca` · họp 04/09 — 5)

| ID | Current | New |
|----|---------|-----|
| GAP-MAP-INSPECT-PHOTO-01 | Inspect = text rows + dumpSpecs only | Bind gallery fileIds (TS · tuần kiểm · tuần đường) · resign view |
| GAP-MAP-INSPECT-XSECT-01 | Không mặt cắt | Bind cross-section fileIds |
| GAP-MAP-INSPECT-KPI-01 | Không KPI tuyến | Bind counts sự cố · tu sửa · TS theo loại (route) |
| GAP-MAP-INSPECT-FILE-HARD | — | FileService.Bff only · **cấm** scaffold API mới · **cấm** persist presigned |
| Map shell | Carto · OMS · locate · snap pin | **Giữ** · cite existing controllers |
| Demo | zone/action ref | **cấm** demo-json SSOT |

## §A — Nguồn

| sourceKind | sourceCite | empty | error |
|------------|------------|-------|-------|
| `context` | `docs/context/features/gis-draw-live.md` | — | version gate |
| `demo` (zone ref) | `Linm.RMMS.Demo/src/demo/gis/gis-draw-live.html` | — | **không** SSOT data |
| `api` · basemap | `GisMapController` `GET api/v1/gis/basemap-config?purpose=live` | client clip default | hardcode OMS defaults |
| `api` · layers | `GET api/v1/gis/layers?purpose=live` | sidebar empty | keep last / seed |
| `geo` · inventory | `GetGeoJson` · RoadAssets / seed layers | map mở · overlay trống · toast viewport | BFF fail → local seed · **cấm** blank page |
| `geo` · route overlay | bake/index · OSRM · `isSparseGpsChord` | ẩn nét + nét đứt | **cấm** chord biển |
| `derived` · summary | `GetSummaryByTypeAsync` | counts 0 | KPI empty chips |
| `bff` · gis | `GisBffController` `web-bff/api/v1/gis/*` | — | proxy fail → seed |
| `bff` · files | `RMMS.Service.Bff` · NuGet `Linm.Platform.FileService.Bff` · `web-bff/api/v1/files/*` | no photos | **GAP-MAP-INSPECT-PHOTO-01** empty gallery |
| `mfe` · page | `GisDrawLivePage.tsx` | — | catch → seed |
| `mfe` · inspect | `GisAssetInspectPanel.tsx` · `gisInspectTypes.ts` | «Chọn tài sản trên bản đồ.» | — |
| `mfe` · locate | `locateUserOnMap.ts` `buildMyLocationPopupHtml` | — | geolocation deny toast |
| `domain-map` | `docs/DOMAIN-MAP.md` row Gis · slug `gis-draw-live` | — | prefix SSOT |
| `kpi` · incident | Incident domain read aggregate **hoặc** Gis summary — **SA chốt** | 0 | toast soft |
| `kpi` · maintenance | Maintenance domain read aggregate — **SA chốt** | 0 | toast soft |

`sourceCite` = file/controller **có trong repo**. Fallback local seed chỉ khi BFF down — **không** SSOT.

## §B — Bind field (HARD)

| uiField | Label | controlHint | catalogKind | GET | write field | sameMfe | sameMobile |
|---------|-------|-------------|-------------|-----|-------------|---------|------------|
| inspect.name | Tên | Text | — | geojson props / asset | — | yes | patrol-map copy |
| inspect.code | Mã TS | Text | — | props | — | yes | n/a |
| inspect.km | KM | Text | — | props | — | yes | n/a |
| inspect.gps | GPS | Text | — | snapped/raw | — | yes | yes |
| inspect.route | Tuyến | Text | — | 3 tầng + dumpSpecs | — | yes | n/a |
| photo.assetFileIds | Ảnh tài sản | ImageGallery | FileService | resign `files/{id}` | fileIds[] | **gap** | n/a |
| photo.patrolCheckFileIds | Ảnh tuần kiểm | ImageGallery | FileService | resign | fileIds[] | **gap** | n/a |
| photo.roadPatrolFileIds | Ảnh tuần đường | ImageGallery | FileService | resign | fileIds[] | **gap** | n/a |
| xsect.fileIds | Mặt cắt ngang | ImageGallery | FileService | resign | fileIds[] | **gap** | n/a |
| kpi.incidents | Sự cố | Stat | derived | route aggregate | — | **gap** | n/a |
| kpi.repairs | Tu sửa | Stat | derived | route aggregate | — | **gap** | n/a |
| kpi.assetByType | TS theo loại | ChipList | derived | `summary-by-type` + route | — | **gap** | n/a |
| layer.* | Lớp TS | Checkbox | layer-code | `layers?purpose=live` | — | yes | n/a |
| basemap | Lớp nền | ChipGroup | basemap | `basemap-config?purpose=live` | — | yes | n/a |
| locate | Vị trí của tôi | Button + popup | — | geolocation | — | yes | yes |

**Prefix map (live cite):**

| Operation | Path |
|-----------|------|
| Basemap | `GET /web-bff/api/v1/gis/basemap-config?purpose=live` → `api/v1/gis/…` |
| Layers | `GET …/gis/layers?purpose=live` |
| GeoJSON | `GET …/gis/geojson/{layer}?bbox=&route=&…` |
| Summary | `GET …/gis/summary-by-type` |
| Health | `GET …/gis/health` |
| Files upload/view | `web-bff/api/v1/files/*` — FileService.Bff · **GAP-MAP-INSPECT-FILE-HARD** |
| KPI incident/repair | SA chốt path DOMAIN-MAP Incident/Maintenance **read** — **cấm** invent Gis-only fake tables |

## §C — Catalog

| catalogKind | search/list API | seed/import cite | Cấm |
|-------------|-----------------|------------------|------|
| layer-code (live) | `GET gis/layers?purpose=live` | DrawLayers / live layers | hardcode nhãn demo làm code |
| basemap | `GET gis/basemap-config?purpose=live` | clip Carto MFE | Google JS key client P1 |
| asset-type | `GET gis/summary-by-type` | `RoadAssets.Type` | hardcode count |
| FileService | `files/*` | NuGet Bff đã có trên host | invent FilesController |

## §D — Map / vẽ (`packKind=map` HARD)

| Mục | Ghi |
|-----|-----|
| Engine | Leaflet OMS — CTX + `/agent-dev-oms-map` · `mapLineLevels.ts` · **cấm** Cesium trên `/gis/tai-san` |
| Tools | Select/inspect · zoom · geolocate · layer toggle — **không** Point/Line/Polygon · **cấm** nút Fit |
| Layer | purpose=live codes · overlay Tuyến pair blue |
| Load | geojson bbox/route · bake/index mọi zoom (`GAP-MAP-INDEX-PAINT`) |
| Save | **không** Lưu bản vẽ trên page này |
| Pick | Click TS → inspect · click locate pin → card GPS |
| Fit | isolate focus ≤13 overview policy · page **no Fit button** |
| Line levels | corridor/track panes · R7b/R7c · `ensureLinePaneStyles` |
| OSRM | pin `osrmPinPlacement` cùng `itemRouteKey` · sparse = nét đứt |
| Media | file id only · resign mỗi view · **cấm** log presigned URL |
| maxZoom | 16 (`VN_CLIP_MAX_ZOOM`) |

## §E — Progress / vòng đời

`progress: none` — inspect map không PATCH status entity. KPI = derived counts. File ids gắn asset/patrol media (SA schema) — không invent workflow mới.

## §F — Handoff

| Role | Dùng packet |
|------|-------------|
| PO | DoD inspect media + KPI · copy § Delta · keep prior map DoD |
| Design | control-map PHOTO/XSECT/KPI · prototype + reviewUrl |
| SA | FileService confirm · KPI aggregate cite Incident/Maintenance hoặc Gis |
| Dev web | Wire §B media + §D OMS nếu đụng paint · **không** trong `roleOnly=data_analy` |
| QA | queued — resign · empty gallery · KPI route · **cấm** yarn ở data_analy |

## § Empty / fail

| Case | Behavior |
|------|----------|
| geojson empty | Map mở · props «Chọn tài sản…» |
| BFF gis fail | Seed fallback · toast · **cấm** blank |
| no photo ids | Gallery empty «Chưa có ảnh» |
| resign fail | placeholder + toast · **cấm** raw expired URL persist |
| KPI 0 | Stats hiện 0 · không ẩn panel |
| geolocation deny | toast · không crash |

## § Cấm

| ❌ | ✅ |
|----|-----|
| Mock demo-json SSOT | Cite GisMapController / BFF / FileService |
| ERP.WebService / Domains/Master | `Linm.RMMS.WebService` Gis (+ read Incident/Maintenance KPI) |
| `/implement-file-service` · copy FilesController · `api/v1/nghiem-thu-files` | `web-bff/api/v1/files/*` |
| Persist/log full presigned URL | Persist **guid** · resign on view |
| yarn build / e2e / start:std ở data_analy | Verify gate roleOnly |
| Skip §D vì «đã ship map» | §D REQUIRED mọi edit_page map |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-data-analy |
| skillVersion | 2026.08.25.01 |
| schemaVersion | 2 |
| workflowVersion | 2026.08.25.02 |
| rulesVersion | 2026.08.28.4 |
| generatedAt | 2026-09-06T20:20:00.000Z |
| versionGate | rechecked |
| contentHash | sha256:24f695fc96706b7876dffb8960f4186e34b439fb0d5b519d0fa282a01760de02 |

---
<!-- Version meta: skillId=agent-data-analy skillVersion=2026.08.25.01 schemaVersion=2 workflowVersion=2026.08.25.02 rulesVersion=2026.08.28.4 versionGate=rechecked contentHash=sha256:24f695fc96706b7876dffb8960f4186e34b439fb0d5b519d0fa282a01760de02 taskId=task_0b94a0ca -->
