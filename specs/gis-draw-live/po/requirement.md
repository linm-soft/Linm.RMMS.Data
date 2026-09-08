# PO — gis-draw-live (Vẽ tài sản live · Leaflet · Kind F · inspect media)

| Field | Value |
|-------|-------|
| feature | `gis-draw-live` |
| changeScope | `edit_page` |
| packKind | `map` (**confirm**) |
| Feature Kind | **F** — GIS live map shell (sidebar · map-bar · props inspect) · **không** header/toolbar seed |
| requestSource | run packet `task_2aa163f0` · `/agent-qldb-workflow` · roleOnly=`po` · prior analy `task_0b94a0ca` |
| status | `confirmed` (autopilot · autoApprove=ON) |
| skillVersion | `2026.08.25.01` |
| schemaVersion | `qldb-workflow-skill-v1` |
| workflowVersion | `2026.08.25.02` |
| versionGate | `rechecked` (prior artifact `2026.08.10.3` → bump SSOT · autoApprove keep+bump) |
| contentHash | `sha256:24f695fc96706b7876dffb8960f4186e34b439fb0d5b519d0fa282a01760de02` |
| analyReuse | hash skip · **cấm** re-scan demo (**GAP-PO-DEMO-RESCAN-01**) |
| updatedAt | `2026-09-06T20:30:00.000Z` |
| taskId | `task_2aa163f0` |
| priorTaskId | `task_0b94a0ca` |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · Gis · **cấm ERP.*** |
| uiRepo | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Gis` · `/gis/tai-san` |
| mfeStdUrl | `http://localhost:9302/gis/draw` |
| MapGateSlash | `/agent-dev-oms-map` · `/map-inspect-popup` |
| Grid list AC | **N/A** (packKind=`map` · không Kind B) |
| Report AC | **N/A** (không report/dashboard page; KPI = inspect dock) |

## 1. Goal

Giữ MFE **Bản đồ tài sản** `/gis/tai-san` (redirect `/gis/live` giữ `?type=`).

**Delta P1 (họp 04/09 — 5):** click vị trí trên map → inspect có **gallery ảnh TS** (tài sản / tuần kiểm / tuần đường) + **mặt cắt ngang KT** + **KPI tuyến** (sự cố · tu sửa · tổng TS theo loại) · file id + resign qua FileService.Bff.

Deep-link `?type=` auto-tick lớp. Shell Kind F + OMS R1–R11 **giữ** (không regress).

## 2. Current → New (edit_page · § Delta)

### 2a. Keep prior (shipped · `task_6e79dde5` + edit locks 2026-09-01…03)

| Layer | Current (keep) |
|-------|----------------|
| Route | `/gis/tai-san` · `/gis/live` redirect `?type=` |
| Map | Kind F Leaflet · clip Carto nền+biên · overlay Tuyến pair blue · maxZoom 16 |
| Map-bar | **Tiêu chuẩn \| Vệ tinh** · Live\|Cache · **Vị trí của tôi** — **cấm** Fit · **cấm** Default/Streets EN |
| Locate | Card **Tên: Vị trí của bạn** + **GPS:** — **cấm** title-only |
| Inspect | Text rows + dumpSpecs · click TS **không** auto zoom |
| Overlay | bake/index mọi zoom · sparse GPS = nét đứt · **cấm** chord biển |
| BE | `api/v1/gis` · purpose=`live` · BFF `web-bff/api/v1/gis` |
| Chrome | **cấm** header Dev/GIS · **cấm** Lưu bản vẽ / Huỷ · **cấm** seed toolbar |

### 2b. NEW delta (`task_0b94a0ca` analy → this PO)

| ID | Current | New | Owner |
|----|---------|-----|-------|
| GAP-MAP-INSPECT-PHOTO-01 | Inspect = text rows only | Gallery ảnh TS · tabs Tài sản · Tuần kiểm · Tuần đường · persist **file id (guid)** · resign mỗi lần xem | Design/SA/Dev |
| GAP-MAP-INSPECT-XSECT-01 | Không mặt cắt | Zone **Mặt cắt ngang** · 1+ ảnh KT · empty «Chưa có mặt cắt» | Design/SA/Dev |
| GAP-MAP-INSPECT-KPI-01 | Chỉ overlay «tuyến · N đã ghim» | Panel **Báo cáo nhanh tuyến**: sự cố · tu sửa · tổng TS loại (route-scoped) | SA/Dev |
| GAP-MAP-INSPECT-FILE-HARD | — | FileService.Bff `web-bff/api/v1/files/*` · **cấm** `/implement-file-service` · **cấm** copy FilesController · **cấm** invent `api/v1/nghiem-thu-files` · **cấm** persist/log full presigned · lane **web** | SA/Dev |
| GAP-MAP-OMS-KEEP | OMS/Carto/locate ship | **Giữ** · Dev `/agent-dev-oms-map` nếu đụng paint/Fit/line | Dev |

**Không đổi:** basemap chips · Live\|Cache · snap pin · BE prefix Gis · **cấm ERP.*** · display-only trên page (không invent Point/Line/Polygon mới trên `/gis/tai-san`).

## 3. Personas / DoD

- Persona: Cán bộ GIS · tuần đường · kiểm tra hiện trường
- DoD P1 (**keep** prior 1–15) + **NEW**:
  16. Click TS/vị trí → gallery 3 tab ảnh · empty «Chưa có ảnh» · resign fail = placeholder + toast (**cấm** raw expired URL)
  17. Zone mặt cắt ngang KT · empty «Chưa có mặt cắt»
  18. KPI tuyến: sự cố · tu sửa · TS theo loại · count 0 vẫn hiện panel (**cấm** ẩn)
  19. Media chỉ **guid** + FileService resign · **cấm** persist presigned
  20. FE verify (Dev/QA): typecheck/build · **cấm** yarn build/e2e ở role PO

## 4. CTX / DEM / analy inventory (hash skip — copy path only)

| ID | Path | Notes |
|----|------|-------|
| CTX-01 | `docs/context/features/gis-draw-live.md` | P0 |
| DEM-01 | `Linm.RMMS.Demo/src/demo/gis/gis-draw-live.html` | zone ref · **cấm** demo-json SSOT |
| ANALY-CH | `specs/_data-analy/features/gis-draw-live-control-hint.md` | status=done |
| ANALY-RD | `specs/_data-analy/features/gis-draw-live-real-data.md` | §A+§B |
| COMPACT | `specs/gis-draw-live/handoff/data_analy-compact.md` | prior |
| DOMAIN | `Linm.RMMS.WebService/docs/DOMAIN-MAP.md` · slug → Gis | **cấm ERP.*** |
| MFE | `GisDrawLivePage.tsx` · `GisAssetInspectPanel.tsx` · `locateUserOnMap.ts` | Kind F |
| BE | `GisMapController` `api/v1/gis` · BFF Gis + FileService.Bff | |

## 5. Control hints (delta · cite analy)

| Field key | Label | controlHint | Notes |
|-----------|-------|-------------|-------|
| inspectRows | Thuộc tính TS | Text readonly | giữ |
| photoTabAsset | Ảnh tài sản | ImageGallery | `photo.assetFileIds` · files/* |
| photoTabPatrolCheck | Ảnh tuần kiểm | ImageGallery | resign |
| photoTabRoadPatrol | Ảnh tuần đường | ImageGallery | resign |
| crossSectionImage | Mặt cắt ngang KT | ImageGallery | `xsect.fileIds` |
| kpiIncidentCount | Sự cố (tuyến) | Stat | SA chốt path |
| kpiRepairCount | Tu sửa (tuyến) | Stat | SA chốt path |
| kpiAssetByType | Tổng TS theo loại | ChipList | `summary-by-type` + route |
| locateName / locateGps | Vị trí của bạn / GPS | Text | giữ |
| basemapChip / tileMode / btnLocateMe | Map-bar | ChipGroup / Button | giữ |

Full table: `gis-draw-live-control-hint.md` · bind: `gis-draw-live-real-data.md` §B.

## 6. § Screens (REQUIRED)

| ID | Surface | Pattern | FormMode | Actions | devSlash |
|----|---------|---------|----------|---------|----------|
| SCR-MAP | Bản đồ tài sản `/gis/tai-san` | **Full page** | view/inspect | click TS · layer toggle · basemap · locate · open media/KPI | `/agent-dev-oms-map` |
| SCR-INSPECT | Props / popup inspect | Panel in page (sidebar props + popup) | view | tabs ảnh · xsect · KPI | `/map-inspect-popup` |
| SCR-LOCATE | Locate card | Popup on map | view | show name+GPS | `/map-inspect-popup` |

- peerStdUrl gợi ý: `/gis` · `/gis/ha-tang` (cùng Kind F MFE)
- reviewUrl (Design sẽ refresh): `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/gis-draw-live/ui/prototype/gis-draw-live-prototype.html`
- **Grid AC:** N/A · **Report AC:** N/A · KPI = zone trong SCR-INSPECT (không page report)

## 7. § Leave / alert (REQUIRED)

| Case | Behavior |
|------|----------|
| Dirty props / draft media selection (nếu có form tạm) | **`LeaveConfirmModal`** — **cấm** `window.confirm` / native `alert` (**GAP-PO-LEAVE-01**) |
| Chặn / lỗi resign / geolocation deny | `useAlert` / toast Modal — **cấm** native `alert` |
| Display-only inspect (no dirty) | Leave N/A runtime · AC vẫn ghi rule trên |

## 8. Out of scope / DEFER

- Google Maps JS / Google proxy (sibling `gis-draw-google`)
- PostGIS persist · multi-user lock · commit drawing → Asset
- Cesium Twin / 3D Tiles placeholder
- Invent FilesController / `api/v1/nghiem-thu-files` / ERP.*
- Point/Line/Polygon draw invent trên `/gis/tai-san` (page display/inspect)
- KPI exact controller path = **SA chốt** (Incident/Maintenance vs Gis aggregate) — không assume ở PO

## 9. Open questions

| Q | Status |
|---|--------|
| KPI aggregate path (Incident/Maintenance vs Gis) | **Open → SA** (không block PO DoR) |
| UNCLEAR controlHint | **none** |

## 10. Handoff → Design

- Keep prior Kind F zones · **NEW** PHOTO tabs · XSECT · KPI dock trên inspect
- Prototype + **reviewUrl** bắt buộc (user/autopilot mở trước `design_confirm`)
- control-map khớp controlHint · real_view_parity vs `/gis/tai-san`
- MapGate: `/agent-dev-oms-map` R1–R11 · `/map-inspect-popup`
- packKind=`map` · Grid/Report AC = N/A
- Next: `/agent-design` · **cấm** start Dev/QA trong task PO này
- E2E QA queued sau Dev (`e2eQa=ON`)

---
<!-- Version meta: skillVersion=2026.08.25.01 · schemaVersion=qldb-workflow-skill-v1 · workflowVersion=2026.08.25.02 · versionGate=rechecked · contentHash=sha256:24f695fc96706b7876dffb8960f4186e34b439fb0d5b519d0fa282a01760de02 · taskId=task_2aa163f0 · changeScope=edit_page · packKind=map -->
