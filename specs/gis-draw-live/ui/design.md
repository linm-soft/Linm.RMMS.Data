# Design — gis-draw-live (Kind F map · inspect media + KPI)

| Field | Value |
|-------|-------|
| feature | `gis-draw-live` |
| packKind | `map` |
| Feature Kind | **F** |
| changeScope | `edit_page` |
| this role | `design` · `/agent-design` |
| status | `confirmed` (autopilot · `design_confirm=approve`) |
| formPattern | `Full page` (+ inspect panel/popup) |
| Grid AC | `N/A` (map · **cấm** DES-GRID A–D) |
| Report AC | `N/A` (KPI dock ≠ DES-RPT) |
| Leave | `LeaveConfirmModal` · **cấm** native alert/confirm |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/gis-draw-live/ui/prototype/gis-draw-live-prototype.html` |
| peerStdUrl | `http://localhost:9302/gis/draw` · live `/gis/tai-san` · peer `/gis` · `/gis/ha-tang` |
| real_view_parity | `v1` |
| MapGateSlash | `/agent-dev-oms-map` · `/map-inspect-popup` |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · Gis · **cấm ERP.*** |
| uiRepo | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Gis` |
| skillVersion | `2026.08.25.01` |
| schemaVersion | `qldb-workflow-skill-v1` |
| workflowVersion | `2026.08.25.02` |
| rulesVersion | `2026.08.28.4` |
| versionGate | `rechecked` (prior `2026.08.10.3` → SSOT · autoApprove) |
| contentHashPriorDataAnaly | `sha256:24f695fc96706b7876dffb8960f4186e34b439fb0d5b519d0fa282a01760de02` |
| taskId | `task_1e588399` |
| priorTaskId | `task_2aa163f0` |
| updatedAt | `2026-09-06T20:45:00.000Z` |
| prior · data_analy | `confirmed`/`done` · hash skip · **cấm** re-scan demo (**GAP-DES-DEMO-RESCAN-01**) |
| prior · po | `confirmed` · § Delta PHOTO/XSECT/KPI/FILE |

## 1. Context & sources (hash skip · **cấm** DEM re-scan)

| Source | Path |
|--------|------|
| Context | `docs/context/features/gis-draw-live.md` |
| Demo (zone ref only) | `Linm.RMMS.Demo/src/demo/gis/gis-draw-live.html` — **không** crawl lại |
| control-hint | `specs/_data-analy/features/gis-draw-live-control-hint.md` |
| real-data | `specs/_data-analy/features/gis-draw-live-real-data.md` |
| PO | `specs/gis-draw-live/po/requirement.md` |
| OMS | `/agent-dev-oms-map` R1–R11 (+ R7b/R7c/R11) |

## 2. Screens / zones (ids)

| Screen | Route / surface | Zones |
|--------|-----------------|-------|
| SCR-MAP | Full `/gis/tai-san` (`/gis/live` redirect `?type=`) | Map · Map-bar · Sidebar Lớp · Legend isolate |
| SCR-INSPECT | Inspect panel/popup | Props rows (**keep**) · **PHOTO** · **XSECT** · **KPI** |
| SCR-LOCATE | Locate popup | Tên + GPS |

| Zone id | Name | Content |
|---------|------|---------|
| Z-SIDE-LAYER | Sidebar · Lớp | Checkbox asset layers · default off · `?type=` auto-tick |
| Z-MAP | Map host | Kind F Leaflet · clip Carto · overlay Tuyến pair blue · **display-only** · click TS **không** auto zoom |
| Z-MAP-BAR | Map-bar | **Tiêu chuẩn \| Vệ tinh** · Live\|Cache · **Vị trí của tôi** · full/dock · **cấm** Fit · **cấm** Default/Streets EN |
| Z-PROPS | Props · text | Tên · Mã · KM · GPS · Tuyến · dumpSpecs · **cấm** Lưu bản vẽ / Huỷ |
| Z-PHOTO | Props · Ảnh TS | Tabs: Tài sản · Tuần kiểm · Tuần đường · `ImageGallery` fileIds + resign |
| Z-XSECT | Props · Mặt cắt | Gallery 1–n · empty «Chưa có mặt cắt» |
| Z-KPI | Props · Báo cáo nhanh tuyến | Stat sự cố · tu sửa · ChipList TS theo loại (route) |
| Z-LOCATE | Locate card | **Tên: Vị trí của bạn** + **GPS:** · **cấm** title-only |

**Header chrome:** **cấm** `← Dev ← GIS` + page title toolbar seed.

## 3. § Delta Current vs New (`edit_page` · họp 04/09 — 5)

| ID | Current (prior Design) | New (Design chốt) |
|----|------------------------|-------------------|
| GAP-MAP-INSPECT-PHOTO-01 | Props text only | **Z-PHOTO** 3 tabs · control=`ImageGallery` · fileIds + resign `web-bff/api/v1/files/*` |
| GAP-MAP-INSPECT-XSECT-01 | — | **Z-XSECT** · control=`ImageGallery` · empty copy |
| GAP-MAP-INSPECT-KPI-01 | Overlay «tuyến · N đã ghim» only | **Z-KPI** · Stat + ChipList route-scoped |
| GAP-MAP-INSPECT-FILE-HARD | — | FileService.Bff only · **cấm** invent FilesController / persist presigned |
| GAP-MAP-OMS-KEEP | R1–R11 ship | **Giữ** · Dev `/agent-dev-oms-map` nếu đụng paint |

## 4. Control map (Control = controlHint)

| Field key | Label | Control | Zone |
|-----------|-------|---------|------|
| layer.* | Lớp tài sản | Checkbox | Z-SIDE-LAYER |
| basemapChip | Lớp nền | ChipGroup Tiêu chuẩn\|Vệ tinh | Z-MAP-BAR |
| tileMode | Live \| Cache | ChipGroup | Z-MAP-BAR |
| btnLocateMe | Vị trí của tôi | Button | Z-MAP-BAR |
| inspectRows | Thuộc tính TS | Text readonly | Z-PROPS |
| photo.assetFileIds | Ảnh tài sản | ImageGallery | Z-PHOTO |
| photo.patrolCheckFileIds | Ảnh tuần kiểm | ImageGallery | Z-PHOTO |
| photo.roadPatrolFileIds | Ảnh tuần đường | ImageGallery | Z-PHOTO |
| xsect.fileIds | Mặt cắt ngang KT | ImageGallery | Z-XSECT |
| kpi.incidents | Sự cố (tuyến) | Stat | Z-KPI |
| kpi.repairs | Tu sửa (tuyến) | Stat | Z-KPI |
| kpi.assetByType | TS theo loại | ChipList | Z-KPI |
| locateName / locateGps | Vị trí của bạn / GPS | Text | Z-LOCATE |

## 5. Prototype (REQUIRED)

| | |
|--|--|
| Artifact | `ui/prototype/gis-draw-live-prototype.html` |
| List zones | **N/A** (packKind=map · **cấm** DES-GRID) |
| Form zones | Full page map shell + inspect panel · **không** form 5-cột voucher |
| SSOT | `design-prototype-review.md` · `design-real-view-parity.md` · `/agent-dev-oms-map` |
| **reviewUrl** | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/gis-draw-live/ui/prototype/gis-draw-live-prototype.html` |
| **peerStdUrl** | `http://localhost:9302/gis/draw` |
| **real_view_parity** | `v1` |

### Wire (map · content-only)

```
[Z-SIDE-LAYER] Lớp / Chú giải / Thuộc tính / Kết quả
[Z-PROPS]      rows text (keep)
[Z-PHOTO]      tabs Tài sản | Tuần kiểm | Tuần đường · gallery
[Z-XSECT]      Mặt cắt ngang · gallery / empty
[Z-KPI]        Sự cố · Tu sửa · TS theo loại
[Z-MAP]        Leaflet flex fill · display-only · +/- only
[Z-MAP-BAR]    Tiêu chuẩn|Vệ tinh · Vị trí của tôi · cấm Fit
[Z-LOCATE]     card Tên + GPS (on locate pin)
```

## 6. Visual / map rules (KEEP prior + OMS)

- Live Leaflet only — **cấm** fake gradient map · **cấm** Cesium trên `/gis/tai-san`
- Default Fit = `fitVnClipMap` · maxZoom 16 · **cấm** nút Fit trên map-bar (R11)
- Click map TS = popup/inspect only — **cấm** auto zoom (R7c · `GAP-MAP-CLICK-ZOOM`)
- Carto nền+biên · overlay Tuyến pair blue `#2563EB`/`#1D4ED8` · sparse GPS = nét đứt
- Locate: **Tên: Vị trí của bạn** + **GPS:** — **cấm** title-only
- **Cấm** Leaflet.draw / Lưu bản vẽ / seed toolbar / legend isolate bottom chrome
- Media empty: «Chưa có ảnh» / «Chưa có mặt cắt» · KPI 0 vẫn hiện panel
- Dirty leave panel = **LeaveConfirmModal**

## 7. Handoff → SA

- Files: `web-bff/api/v1/files/*` · resign on view · persist **guid** only
- Gis: `api/v1/gis` · BFF `web-bff/api/v1/gis` · `summary-by-type` (+ route)
- KPI path Incident/Maintenance **or** Gis aggregate — **SA chốt**
- Domain Gis only · **cấm ERP.***
- Next Dev: wire Z-PHOTO/XSECT/KPI · OMS gate nếu paint

## 8. design_confirm

| Key | Value |
|-----|-------|
| design_confirm | `approve` (autoApprove ON) |
| reviewUrl opened | path above (artifact written) |
| UNCLEAR | none · KPI path deferred SA |

---
<!-- Version meta: skillId=agent-design skillVersion=2026.08.25.01 schemaVersion=qldb-workflow-skill-v1 workflowVersion=2026.08.25.02 rulesVersion=2026.08.28.4 versionGate=rechecked contentHashPriorDataAnaly=sha256:24f695fc96706b7876dffb8960f4186e34b439fb0d5b519d0fa282a01760de02 taskId=task_1e588399 real_view_parity=v1 -->
