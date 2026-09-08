# Data-analy — controlHint — gis-draw-live (Kind F map · inspect)

| Field | Value |
|-------|-------|
| feature | `gis-draw-live` |
| packKind | `map` |
| mode | `feature_context` (`edit_page` · NEW AutocodeTask · CTX + demo + live MFE/BE cite) |
| changeScope | `edit_page` |
| status | `done` |
| skillId | `agent-data-analy` |
| skillVersion | `2026.08.25.01` |
| schemaVersion | `1` |
| workflowVersion | `2026.08.25.02` |
| rulesVersion | `2026.08.28.4` |
| versionGate | `rechecked` (STATUS workflow `2026.08.10.3` · data-analy SSOT `2026.08.25.*` · autopilot regen) |
| contentHash | `sha256:24f695fc96706b7876dffb8960f4186e34b439fb0d5b519d0fa282a01760de02` |
| analyzedAt | `2026-09-06T20:20:00.000Z` |
| taskId | `task_0b94a0ca` |
| autoApprove | `ON` |
| realData | `specs/_data-analy/features/gis-draw-live-real-data.md` |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · domain **Gis** · **cấm ERP.*** |
| uiRepo | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Gis` · route `/gis/tai-san` |
| mfeStdUrl | `http://localhost:9302/gis/draw` · live page `/gis/tai-san` |
| MapGateSlash | `/agent-dev-oms-map` · `/map-inspect-popup` · `/edit-web-feature` |
| runMode | `full_pipeline` · E2E QA queued |

> Data-analy **đề xuất** controlHint. Design **chốt** control-map + prototype/reviewUrl. SA **chốt** inspect/KPI API.  
> **Cấm** Dev đoán Text vs gallery khi đã có bảng này.  
> Demo = zone/field/action **tham chiếu** — **cấm** demo-json làm SSOT data.  
> **Giữ** PO/Design/SA/TL/implement/QA/Review artifacts đã confirmed (`task_6e79dde5` + edit locks 2026-09-01…03).

## Sources

| Source | Path | sha256 |
|--------|------|--------|
| Context | `docs/context/features/gis-draw-live.md` | `e307d186704aa2e97ce149d931247929f3eb66e474948caed739ea4243c9b2f4` |
| Demo page | `Linm.RMMS.Demo/src/demo/gis/gis-draw-live.html` | `1f09db8c43346ca5c346362e0918f18956f7c20318cc38ba17cba17a0dd03535` |
| DOMAIN-MAP | `Linm.RMMS.WebService/docs/DOMAIN-MAP.md` · slug `gis-draw-live` → **Gis** | cite |
| Controller | `Domains/Gis/Controllers/GisMapController.cs` | `api/v1/gis` |
| BFF Gis | `bff/domains/gis/.../GisBffController.cs` | `web-bff/api/v1/gis` |
| File host | `bff/src/RMMS.Service.Bff` · NuGet `Linm.Platform.FileService.Bff` | `web-bff/api/v1/files/*` |
| MFE page | `GisDrawLivePage.tsx` | Kind F |
| Inspect | `GisAssetInspectPanel.tsx` · `gisInspectTypes.ts` · `locateUserOnMap.ts` | popup + props |
| Map OMS | `mapLineLevels.ts` · `vnClipBasemap.ts` | R7b/R7c · Fit ≤13 · Carto |

## § Delta Current vs New (`edit_page` · `task_0b94a0ca` · họp 04/09 — 5)

Giữ shell Kind F đã ship (clip Carto · overlay Tuyến · locate card · inspect thuộc tính · **cấm** Lưu bản vẽ / nút Fit / seed toolbar). Delta **NEW** = Map inspect media + mặt cắt + KPI tuyến:

| ID | Current (live / prior Review) | New (SSOT họp + FileService) | Surface |
|----|-------------------------------|------------------------------|---------|
| GAP-MAP-INSPECT-PHOTO-01 | Click TS / pin → **text rows** only (`GisInspectModel.rows` + dumpSpecs) · **không** gallery ảnh | Click **vị trí** (TS hoặc map pick) → gallery **ảnh TS** tabs: Tài sản · Tuần kiểm · Tuần đường · persist **file id (guid)** · resign mỗi lần xem | Inspect popup / sidebar props |
| GAP-MAP-INSPECT-XSECT-01 | **Không** ảnh mặt cắt ngang kỹ thuật | Zone **Mặt cắt ngang** · 1+ ảnh kỹ thuật (file id) · empty = «Chưa có mặt cắt» | Inspect zone XSECT |
| GAP-MAP-INSPECT-KPI-01 | Overlay count «tuyến · N đã ghim» only · **không** báo cáo nhanh toàn tuyến | Panel **Báo cáo nhanh tuyến**: sự cố · tu sửa · tổng TS theo loại (route-scoped) | Inspect / dock KPI |
| GAP-MAP-INSPECT-FILE-HARD | — | Reuse FileService **đang có** · `/init-bff-file` + `/integrate-file-upload-web` · host `RMMS.Service.Bff` · `web-bff/api/v1/files/*` · **cấm** `/implement-file-service` · **cấm** copy `FilesController` · **cấm** invent `api/v1/nghiem-thu-files` · **cấm** persist/log full presigned URL · lane **web** only | SA/Dev |
| GAP-MAP-OMS-KEEP | OMS R1–R11 + Carto + locate popup done | **Giữ** · Dev gate vẫn `/agent-dev-oms-map` khi đụng paint/Fit/line — **không** regress | map host |

**Không** đổi: route `/gis/tai-san` · `/gis/live` redirect `?type=` · basemap chips **Tiêu chuẩn \| Vệ tinh** · Live\|Cache tile · maxZoom 16 · snap pin `GAP-MAP-PIN-ROUTE-01` · nét đứt sparse GPS · BE prefix `api/v1/gis` · **cấm ERP.*** · PO/Design confirmed files.

## Kind / zones (handoff Design)

| Zone | Pattern | DoD |
|------|---------|-----|
| Header | **Không** | title thuộc menu shell — **cấm** Dev/GIS chrome |
| Sidebar · Lớp | Checkbox asset layers + count | default off · `?type=` auto-tick |
| Sidebar · Props | Inspect tab | rows + dumpSpecs (**giữ**) + **NEW** photo tabs + XSECT + KPI |
| Map-bar | Chips + locate | **Tiêu chuẩn \| Vệ tinh** · Live\|Cache · **Vị trí của tôi** — **cấm** Fit · **cấm** Default/Streets EN |
| Map host | Kind F Leaflet | clip Carto nền+biên · overlay Tuyến pair blue · OMS R1–R11 · click TS **không** auto zoom |
| Locate popup | `/map-inspect-popup` | **Tên: Vị trí của bạn** + **GPS:** — **cấm** title-only |
| Inspect popup | `/map-inspect-popup` expand | Media + XSECT + KPI trên cùng card/panel props |
| Legend | Isolate bottom | giữ |

## Map tech factors (`packKind=map`)

| Factor | P1 | Notes |
|--------|----|-------|
| Engine | **yes** | `/agent-dev-oms-map` · Leaflet OMS · **cấm** Cesium embed |
| Basemap | clip BFF Carto · chips Tiêu chuẩn/Vệ tinh | `GET basemap-config?purpose=live` |
| Fit | overview ≤13 khi isolate focus · **cấm** nút Fit trên map-bar | R11 · page policy |
| Line levels | corridor + track panes · `mapLineLevels.ts` | R7b/R7c |
| OSRM | pin snap cùng mã tuyến · sparse = nét đứt | R8/R9 · `GAP-MAP-DRAW-STREET-01` |
| GPS geolocate | «Vị trí của tôi» | `locateUserOnMap.ts` |
| Draw tools | **display-only** trên `/gis/tai-san` | **cấm** Point/Line/Polygon invent |
| Inspect media | FileService resign | photo + xsect file ids |
| Offline | map vẫn mở | BFF fail → seed fallback · media empty state |

## Control hint — inspect / media / KPI (delta)

| Field key | Label | controlHint | catalogKind | Notes |
|-----------|-------|-------------|-------------|-------|
| inspectRows | Thuộc tính TS | `Text` readonly rows | — | giữ Tên · Mã · KM · GPS · Tuyến · dumpSpecs |
| photoTabAsset | Ảnh tài sản | `ImageGallery` / FileUpload view | FileService | fileIds · resign GET |
| photoTabPatrolCheck | Ảnh tuần kiểm | `ImageGallery` | FileService | nguồn patrol-check |
| photoTabRoadPatrol | Ảnh tuần đường | `ImageGallery` | FileService | nguồn tuần đường |
| crossSectionImage | Mặt cắt ngang KT | `ImageGallery` (1–n) | FileService | **GAP-MAP-INSPECT-XSECT-01** |
| kpiIncidentCount | Sự cố (tuyến) | `Text` / Stat | derived | route-scoped |
| kpiRepairCount | Tu sửa (tuyến) | `Text` / Stat | derived | maintenance |
| kpiAssetByType | Tổng TS theo loại | `ChipList` / table mini | derived | `summary-by-type` scoped route |
| locateName | Tên vị trí | `Text` | — | «Vị trí của bạn» |
| locateGps | GPS | `Text` | — | lat,lng |

## Control hint — map chrome (giữ · không re-open)

| Field key | Label | controlHint | Notes |
|-----------|-------|-------------|-------|
| layer.* | Lớp tài sản | Checkbox | sidebar · default off |
| basemapChip | Lớp nền | ChipGroup | Tiêu chuẩn \| Vệ tinh |
| tileMode | Live \| Cache | ChipGroup | `GAP-MAP-TILE-EMPTY-ZOOM` |
| btnLocateMe | Vị trí của tôi | Button | map-bar |
| overlayRoute | Tuyến đường | Checkbox | pair blue overlay |

## Lookup / map APIs (SA cite)

| Lookup | API | controlHint consumer |
|--------|-----|----------------------|
| basemap | `GET /api/v1/gis/basemap-config?purpose=live` | chips |
| layers | `GET /api/v1/gis/layers?purpose=live` | sidebar |
| geojson | `GET /api/v1/gis/geojson/{layer}?bbox=&route=&…` | pins / lines |
| summary | `GET /api/v1/gis/summary-by-type` (+ route scope **NEW**) | KPI loại TS |
| health | `GET /api/v1/gis/health` | overlay status |
| files | `web-bff/api/v1/files/*` | photo + xsect |
| incidents (KPI) | `api/v1/incident/…` **read aggregate** hoặc Gis summary — SA chốt | kpiIncidentCount |
| maintenance (KPI) | `api/v1/maintenance/…` **read aggregate** — SA chốt | kpiRepairCount |

**Prefix BFF Gis:** `web-bff/api/v1/gis` · **Files:** `web-bff/api/v1/files` · **cấm** invent path ngoài DOMAIN-MAP · **cấm** ERP.*.

## Actions (inventory · Design chốt)

| label | kind | zone |
|-------|------|------|
| Click TS / vị trí | select | map → inspect |
| Tab Ảnh TS / Tuần kiểm / Tuần đường | nav | inspect media |
| Xem mặt cắt | nav | inspect XSECT |
| Mở báo cáo nhanh tuyến | nav | KPI dock |
| Vị trí của tôi | action | map-bar |
| Chip Tiêu chuẩn / Vệ tinh | action | map-bar |
| Toggle lớp / Tuyến | filter | sidebar |

UNCLEAR = **none** (File host NuGet đã có trên `RMMS.Service.Bff`).

## Handoff

→ PO: copy § Delta vào requirement § Current vs New · keep prior DoD map  
→ Design: prototype + **reviewUrl** (user mở trước Approve) · zones PHOTO / XSECT / KPI  
→ SA: FileService confirm + KPI aggregate path (Gis vs Incident/Maintenance read)  
→ Dev: `/agent-dev-oms-map` nếu đụng paint · `/map-inspect-popup` media · **không** start trong task data_analy này  
→ QA: queued sau Dev — media resign · empty photo · KPI route scope

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-data-analy |
| skillVersion | 2026.08.25.01 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.25.02 |
| rulesVersion | 2026.08.28.4 |
| generatedAt | 2026-09-06T20:20:00.000Z |
| versionGate | rechecked |
| contentHash | sha256:24f695fc96706b7876dffb8960f4186e34b439fb0d5b519d0fa282a01760de02 |

---
<!-- Version meta: skillId=agent-data-analy skillVersion=2026.08.25.01 schemaVersion=1 workflowVersion=2026.08.25.02 rulesVersion=2026.08.28.4 versionGate=rechecked contentHash=sha256:24f695fc96706b7876dffb8960f4186e34b439fb0d5b519d0fa282a01760de02 taskId=task_0b94a0ca -->
