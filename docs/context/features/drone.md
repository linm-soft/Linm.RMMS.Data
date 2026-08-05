# Drone / Reality Capture — Feature Context

> **Slug:** `drone` · **Module:** `Drone` · **Phase:** P2–P3  
> **Status:** Demo  
> **Kind:** **B** (CatalogListShell) + **D** (slideout form) + viewer stub — Confirmed by: ai-autocode-autopilot  
> **Sources:** `RMMS` §13 · `07` Hạng mục 13 · `09` OUT P1 · `15-SCREEN-AI-MAP.md` · extract Phân hệ 13  
> **Demo HTML:** `Linm.RMMS.Demo/public/demo/drone/drone.html`  
> **MFE (align):** `Linm.Web.RMMS.Drone` · route `/drone` · **cấm** sửa MFE ở phase demo  
> **≠** GIS draw (`gis` / `gis-draw-google`) — Twin/viewer GIS riêng · drone publish artifacts → Gis / AiVision

## 1. Tổng quan

| | |
|--|--|
| Mục tiêu | Bay kiểm tra · 3D mapping · point cloud · orthophoto · cầu/taluy/sạt lở |
| Persona | Hạt trưởng · Kỹ thuật cầu · GIS · AI Vision ops |
| App hiện có | Module mới — không có màn GOVOne |
| DoD P2 | Upload job + process mock + viewer stub + artifact list |
| DoD P3 | Worker PDAL/WebODM · Cesium 3D Tiles live · event full |

## 2. Design / UI

| Screen | Pattern | Zones | Ghi chú |
|--------|---------|-------|---------|
| List `/drone` | Kind **B** CatalogListShell | KPI · toolbar · filter · grid | P2 |
| Tạo / Chi tiết | Kind **D** Slideout | Z1 toolbar · Z2 fields+artifacts · Z3 footer | `/drone/new` · `/drone/:id` |
| Viewer | Modal stub | Cesium / 3D Tiles placeholder | GAP-F-DRN-04 |
| GIS Twin | Nav | `/gis` demo | Event consumer |

**Kind B+D layout (erp-form-context):**

- **List** — title «Drone / Reality Capture» · toolbar · filter · grid · KPI 4 ô  
- **Z1** — Quay lại · Đóng · title · dirty badge · hint · badge P2–P3  
- **Z2a** — Validation banner (tên · loại bay · tuyến)  
- **Z2b** — Header fields control-map (nhiệm vụ bay)  
- **Z2c** — Output keys (point cloud · ortho · 3D Tiles · refs)  
- **Z2d** — Artifact lines `pattern_inline_grid`  
- **Z3** — Lưu · Lưu nháp · Upload · Process · Hủy job · Hủy  

**Mock:** fake scans + artifacts · IdCode `SCN-YYYYMMDD-NNNN` · localStorage · toast · **no BE**.

**2d readonly:** rule_defaults · Confirmed by: ai-autocode-autopilot  
**2e IdCode:** `SCN-YYYYMMDD-NNNN`  
**2k:** voucher_default · leave-confirm khi dirty  
**2cm:** pattern_inline_grid + toolbar_standard  
**2j platform event:** DEFER (`drone.scan.completed`)

## 3. API

| Method | Path | Mô tả | BE status |
|--------|------|-------|-----------|
| GET/POST | `/api/v1/drone/scans` | CRUD / list scan jobs | **MISSING** (Step 4b khi Signed) |
| GET/PUT | `/api/v1/drone/scans/{id}` | Chi tiết | **MISSING** |
| POST | `/api/v1/drone/scans/{id}/process` | Queue xử lý | **MISSING** |
| GET | `/api/v1/drone/scans/{id}/artifacts` | Artifacts | **MISSING** |
| POST | `/api/v1/drone/scans/{id}/upload` | Upload batch | **MISSING** |

```json
{
  "code": "SCN-20260801-0001",
  "name": "Bay kiểm tra cầu Km42+200",
  "flightType": "cau",
  "road": "QL1A Km40–Km45",
  "areaKm2": 0.85,
  "status": "completed",
  "pointCloudKey": "drone/2026/scn-0001/cloud.las",
  "orthophotoKey": "drone/2026/scn-0001/ortho.tif",
  "artifacts": [{ "kind": "las", "fileName": "cloud.las", "sizeMb": 420, "status": "uploaded" }]
}
```

> Phase demo: **cấm** gọi BE · fake / localStorage only. Align BE khi Status Signed + be_align ON.

## 4. Database

| Entity | Key columns | Notes |
|--------|-------------|-------|
| DroneScan | Id, Code, Name, FlightType, Road, Structure, OfficeId, DeviceId, Pilot, FlightDate, StartTime, EndTime, AreaKm2, PhotoCount, Status | P2 |
| DroneArtifact | Id, ScanId, Kind, FileName, SizeMb, StorageKey, Status | P2 |
| DroneProcessJob | Id, ScanId, Pipeline, StartedAt, FinishedAt, Error | P2 worker |
| DroneTiles | Id, ScanId, TilesStatus, TilesUrl | P2–P3 Cesium |

## 5. Events / tích hợp

| Event | Publisher | Consumer |
|-------|-----------|----------|
| `drone.scan.completed` | Drone | Gis · AiVision — DEFER |

Payload gợi ý: `{scanId, pointCloudKey, orthophotoKey, areaKm2}` · nguồn sự cố adapter stub P1 (GAP-MAP-04).

## 6. Gaps / quyết định

| ID | Question | Default |
|----|----------|---------|
| GAP-F-DRN-01 | OUT P1 | Giữ P2–P3 · badge hub |
| GAP-F-DRN-02 | Kind | **B+D** + viewer stub · autopilot |
| GAP-F-DRN-03 | BE endpoints drone/scans/* | MISSING · be_align khi Signed |
| GAP-F-DRN-04 | Cesium 3D Tiles live | P2 modal stub · P3 live |
| GAP-F-DRN-05 | Pipeline PDAL/WebODM | Worker ngoài · process mock demo |

## 7. Demo checklist (chốt khách)

- [x] List đủ cột + filter loại/TT/đơn vị
- [x] KPI 4 ô mock (tổng · đang XL · hoàn thành · diện tích)
- [x] Form Kind D đủ 27 field control-map (kể cả dòng artifact)
- [x] Đủ 24 actions (click → toast/modal/nav)
- [x] Artifact lines pattern_inline_grid
- [x] Viewer stub modal
- [x] Badge P2–P3
- [x] Leave-confirm khi dirty
- [x] Không gọi BE
- [x] sourceKind=synthetic · User menu Linm shell

<!-- LEGACY-GOVONE-CAPTURE:START -->
## Legacy GOVOne (auto-capture)

> Auto map từ `tools/legacy-govone-capture` · vision: `_raw/legacy-govone/ai-analysis/`.
> Dùng làm **step context** cho `/qlbd-analy-demo` · `yarn scan-qlbd-demo`.

### Nguồn

- Raw feature: `docs/context/_raw/legacy-govone/features/drone.md`
- Vision packets: 0

### Capture inventory

> Không có màn GOVOne vision cho Drone / Reality Capture (module mới P2–P3).  
> Synthetized từ `07-TECHNICAL-IMPLEMENTATION.md` § Hạng mục 13 · `_extract/rmms-giaiphap-tinhnang.txt` Phân hệ 13 · `15-SCREEN-AI-MAP.md` #13 · MFE ownership Drone.

## Pages (2)

### DANH SÁCH SCAN / JOB BAY

- **id:** `drone-list`
- **url:** (planned) `/drone`
- **title:** Drone / Reality Capture

#### Labels / field captions (list + KPI)

- Mã scan · Tên nhiệm vụ · Loại bay · Mục đích · Tuyến/đoạn · Công trình · Đơn vị TH · Thiết bị · Phi công · Ngày bay · Giờ BD · Giờ KT · Diện tích km² · Số ảnh · Trạng thái · Point cloud · Orthophoto · 3D Tiles · GIS ref · Incident ref · AiVision job · Ghi chú

#### Actions / buttons (full)

| label | kind | zone |
|-------|------|------|
| Làm mới | action | toolbar |
| Làm mới KPI | action | toolbar |
| Tạo scan / Upload | create | toolbar |
| Lọc / Tìm | filter | filter |
| Xem chi tiết | view | grid |
| Sửa | action | grid |
| Xóa | destructive | grid |
| Upload files | action | grid |
| Xử lý (process) | action | grid |
| Xem artifacts | view | grid |
| Mở viewer stub | view | toolbar |
| Mở GIS Twin | nav | toolbar |
| Xuất Excel | export | toolbar |
| Gửi sự cố | action | grid |
| Liên kết AiVision | nav | toolbar |
| User menu | nav | header |

### CHI TIẾT / TẠO SCAN

- **id:** `drone-form`
- **url:** (planned) `/drone/new` · `/drone/:id`
- **title:** Chi tiết scan drone

#### Labels / field captions (form + artifact lines)

- Mã scan · Tên nhiệm vụ · Loại bay · Mục đích · Tuyến/đoạn · Công trình · Đơn vị TH · Thiết bị · Phi công · Ngày bay · Giờ BD · Giờ KT · Diện tích km² · Số ảnh · Trạng thái · Point cloud key · Orthophoto key · 3D Tiles · GIS ref · Incident ref · AiVision job · Ghi chú · Loại artifact · Tên file · Size MB · Storage key · TT artifact

#### Actions / buttons (full)

| label | kind | zone |
|-------|------|------|
| Lưu | create | footer |
| Lưu nháp | action | footer |
| Hủy job | destructive | footer |
| Thêm artifact | create | lines |
| Xóa artifact | destructive | lines |
| Hủy thay đổi | close | footer |
| Đóng | close | header |
| Quay lại | nav | header |

- **fieldCount:** 27
- **actionCount:** 24

## Migration notes

- Map → control-map modern MFE · erp-form-context Kind **B** list + Kind **D** slideout + viewer stub.
- Demo: same fields · Linm shell — **cấm** clone skin GOVOne · **cấm** BE.
- Badge **P2–P3** trên hub/list · DoD P2: upload job + viewer stub.

### Step context checklist

- [x] Design demo parity synthetic zones (no GOVOne)
- [x] Control-map fields từ Labels/Inputs · product docs
- [ ] Status Demo → Signed → `/qlbd-align-mfe`
<!-- LEGACY-GOVONE-CAPTURE:END -->

<!-- DEMO-MFE-MODERN:START -->
## Demo MFE modern (erp-form-context)

> Same fields/actions từ capture · UI chuẩn Linm — **không** clone skin legacy.

- Control-map: [`drone-control-map.md`](../_raw/legacy-govone/demo-maps/drone-control-map.md)
- Actions: [`drone-actions.md`](../_raw/legacy-govone/demo-maps/drone-actions.md)
- Fields mapped: 27 · Actions: 24
- Kind hint: **B+D** — erp-form-context · leave-confirm · pattern_inline_grid · KPI · viewer stub

Gen demo: `/qlbd-analy-demo @drone` — load control-map trên + `/erp-form-context` rules (2a-K · 2g · common controls).
<!-- DEMO-MFE-MODERN:END -->

## 8. Tracking (autopilot)

| | |
|--|--|
| Task | `task_98716a69` |
| Skill | `/qlbd-analy-demo @drone` |
| Files | `drone.md` · `demo-maps/drone-*.md` · `public/demo/drone/drone.html` · `js/drone-*.js` · `demoCatalog.ts` |
| BE align | OFF (demo) · GAP-F-DRN-03 documented · Step 4b khi Signed |
| sourceKind | synthetic |
| Confirmed by | ai-autocode-autopilot |
