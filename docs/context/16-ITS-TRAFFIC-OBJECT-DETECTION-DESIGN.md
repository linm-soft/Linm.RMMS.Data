# RMMS — System Design: ITS Traffic Object Detection  
## (Biển báo · Cọc tiêu · Edge + Server AI · Realtime Map)

> **Status:** Design SSOT (chưa Signed · chưa scaffold BE)  
> **Slug feature:** `its-traffic-detect` · xem [`features/its-traffic-detect.md`](features/its-traffic-detect.md)  
> **Ngày:** 2026-08-03  
> **Nguồn phân tích:**  
> - Tech brief user (YOLOv8-nano · PostGIS 10 m · triangulate · Kalman · OTA)  
> - Demo + seed: `Linm.RMMS.Demo` · `ai-asset-detect`  
> - Context Data: `features/ai-asset-detect.md` · `ai-vision.md` · `toc.md` · `patrol.md` · `gis.md` · `iot`  
> - Architecture: `02-SYSTEM-ARCHITECTURE.md` · `03-EVENT-ARCHITECTURE.md` · `07` · `10` · `14-P2-AI-VISION-STANDARD.md` · `15-SCREEN-AI-MAP.md`  
> **Chuẩn platform Linm (bắt buộc khi implement):**  
> - `/bff-api-structure` · `common/rule/bff-api-structure.md`  
> - `/init-bff-auth` · `Linm.Platform.Authentication.Bff`  
> - `/review-backend-source` · `api-permission-gate` · `service-setup-checklist`  
> - Top rules: `api/v1/` · EF migration pair · tenant `companyCode` · CommonLib NuGet only  

---

## 0. Tóm tắt quyết định thiết kế

| Quyết định | Giá trị | Lý do |
|------------|---------|--------|
| **Loại service** | **API domain** (`api/v1/…`) + optional **Web BFF** (`web-bff/api/v1/…`) | Business logic + GIS + AI ingest = **API**; shell login/proxy = **BFF Auth NuGet** |
| **Layout BE** | Modular Monolith Layout **B** (`src/` Controllers/Services/Entities) trong `Rmms.Api` | Khớp `02-SYSTEM-ARCHITECTURE` — **không** 14 micro-process lúc P1/P2 |
| **Module host** | `Modules/AiVision` + `Modules/Iot` (edge bulk) + publish → `Asset` / `Gis` | Map demo slug `ai-asset-detect` / taxonomy biển báo · cọc |
| **Tách process** | `Its.GpuWorker` (RTSP/ONNX) khi stream > threshold | `10-YOLO` R6 · cấm block HTTP API chờ GPU |
| **Class ITS (scope)** | `bien_bao` · `coc_tieu` (+ taxonomy mở rộng sau) | User brief; **tách** 10 class mặt đường (`14` §3) |
| **Dedupe bán kính** | **10 m** `ST_DWithin(…::geography)` | User SSOT; demo HTML hiện **25 m** Haversine → **GAP-ITS-01** |
| **Auth Web** | `Linm.Platform.Authentication.Bff` trên BFF host | `/init-bff-auth` — **cấm** copy `AuthController` local |
| **Permission** | `[RequirePermission]` CommonLib ≥1.4 · scan `/review-backend-source` `PERM-BE` | Endpoint detect / model OTA / admin |

---

## 1. Mục tiêu nghiệp vụ

Hệ thống **giám sát / thu thập đối tượng giao thông cố định** (ITS object inventory) theo thời gian thực:

| Nguồn | Vai trò |
|-------|---------|
| **Mobile** (Android/iOS) | Edge AI (TFLite / CoreML) + GPS + heading · offline buffer |
| **Dashcam** | Edge hoặc upload clip → worker |
| **CCTV cố định** | RTSP → `BackgroundService` OpenCvSharp + ONNX Runtime GPU |

**Pipeline chuẩn hóa:**

```
Frame/Detect → (Kalman GPS) → (Triangulate ≥2 rays) → Candidate
     → PostGIS Dedupe 10 m (cùng class)
     → INSERT | UPDATE lastSeen
     → SignalR ItsHub → Web Dashboard (react-leaflet)
```

**Không nhầm module:**

| Slug / module | Đối tượng | Kết quả |
|---------------|-----------|---------|
| `ai-vision` | Ổ gà · nứt · bong bật… | `detections` → **Vấn đề / Incident** |
| **`its-traffic-detect`** (bản design) | **Biển báo · cọc tiêu** | `traffic_objects` / Asset candidate |
| `ai-asset-detect` (demo hiện có) | TS/thiết bị mới (biển báo, hộ lan, cột Km…) | Confirm → **Asset** |
| `toc` | Ùn tắc · tai nạn · VMS | Event P3 · không inventory 10 m |

**Khuyến nghị product:** P1 demo UI giữ `ai-asset-detect`; P2 BE ITS implement dưới domain `its` hoặc mở rộng `ai-vision/asset-candidates` với taxonomy subset — **một SSOT spatial**, hai UI nếu cần.

---

## 2. Phân tích data demo (bằng chứng)

### 2.1 Seed `ai-asset-detect`

File: `Linm.RMMS.Demo/src/demo/ai-vision/js/ai-asset-detect-data.js`

| id | class | lat / lng | flag | Ý nghĩa design |
|----|-------|-----------|------|----------------|
| AC-101 | Biển báo | 21.0285 / 105.8542 | Draft | Object mới |
| AC-102 | Hộ lan | 21.0291 / 105.855 | Draft | Class ≠ ITS core (mở rộng) |
| AC-103 | Cột Km | 21.03 / 105.8561 | Draft | Gần “cọc tiêu / cột mốc” |
| AC-104 | Biển báo | 21.02862 / 105.85428 | **nearbyRisk** vs AC-101 + TS-088 | Demo dedupe **~15–25 m** |
| TS-088 | Biển báo (existing) | 21.028 / 105.8538 | Manual Asset | “Đã có” trên map |

**Demo algorithms (JS):**

| Hàm | Hành vi | Khác ITS prod |
|-----|---------|----------------|
| `distanceM` | Haversine | Prod → PostGIS `geography` |
| `findNearby(…, radiusM=25)` | Cùng `assetClass` trong 25 m | SSOT ITS = **10 m** |
| Map pins | Leaflet · pin TS cũ / Confirm / AI new | Parity Web MFE |
| Confirm | localStorage → `assetCode` fake | BE: POST confirm + tenant |

### 2.2 Control-map & API skeleton (đã có)

| Path (skeleton) | Demo | Prod ITS |
|-----------------|------|----------|
| `POST /api/v1/ai-vision/detect-assets` | Mock toast | Accept edge batch |
| `GET …/asset-candidates` | localStorage | PostGIS filter |
| `POST …/confirm \| dismiss` | Mock | Asset write + history |
| SignalR | **Không** (demo) | `ItsHub` / reuse `GisHub` |
| OTA model | **Không** | `GET /api/v1/ml-models/current` |

### 2.3 Infra liên quan đã document

| File | Áp dụng ITS |
|------|-------------|
| `10-YOLO-SERVER-REQUIREMENTS.md` | GPU worker **tách** DMS; T4/L4 · ≥64 GB RAM |
| `14-P2-AI-VISION-STANDARD.md` | ONNX artifact + `manifest.json` + license P2-A/B |
| `03-EVENT-ARCHITECTURE.md` | `offline.sync.batch` · edge MQTT/gRPC |
| `02` § Railway | API+DB OK; **GPU không** trên Railway |

---

## 3. Kiến trúc thành phần (target)

```
┌──────────────── Mobile ────────────────┐  ┌──── Dashcam ────┐  ┌──── CCTV ────┐
│ Android: CameraX · TFLite · Fused GPS  │  │ Edge / upload   │  │ RTSP H.264   │
│ iOS: AVFoundation · Vision · CoreML    │  │ clip/json       │  │              │
│ Offline: Room / CoreData → Bulk Sync   │  └────────┬────────┘  └──────┬───────┘
└───────────────────┬────────────────────┘           │                  │
                    │ HTTPS bulk / single            │                  │
                    ▼                                ▼                  ▼
┌──────────────────────────────────────────────────────────────────────────────┐
│                     Rmms WebApp BFF (optional shell host)                    │
│  web-bff/api/v1/auth/*  ← Linm.Platform.Authentication.Bff (init-bff-auth) │
└───────────────────────────────────┬──────────────────────────────────────────┘
                                    │ user JWT
                                    ▼
┌──────────────────────────────────────────────────────────────────────────────┐
│  Rmms.Api (.NET 8 · Modular Monolith · Layout B)                             │
│  Prefix: api/v1/                                                             │
│  Modules: Its (or AiVision extension) · Iot · Asset · Gis · Integration      │
│  · Controllers/Its/*                                                         │
│  · Services: DedupeService · TriangulationService · KalmanFilter             │
│  · SignalR: ItsHub                                                           │
│  · BackgroundService: CctvStreamWorker (OpenCvSharp + OnnxRuntime.Gpu)       │
│    [hoặc remote Its.GpuWorker + Redis queue]                                 │
└───────────────┬───────────────────────────────┬──────────────────────────────┘
                │                               │
                ▼                               ▼
     PostgreSQL 16 + PostGIS 3.4          Redis · MinIO/R2
     SRID 4326 · GIST(geog)               model artifacts · frames
                │
                ▼
     MFE Linm.Web.RMMS.AiVision / Gis
     react-leaflet · @microsoft/signalr
```

### 3.1 Step 0 — API vs BFF (bff-api-structure)

| Concern | Kind | Route prefix | Ghi chú |
|---------|------|--------------|---------|
| Detect ingest · candidates · dedupe · model OTA · hubs | **API** | `api/v1/its/…` (hoặc `api/v1/ai-vision/…`) | Domain logic · EF · NetTopologySuite |
| Login / refresh / switch-company cho Web shell | **BFF** | `web-bff/api/v1/auth/*` | Package `Linm.Platform.Authentication.Bff` |
| Aggregate thin proxy cho MFE (nếu có host shell riêng) | **BFF** | `web-bff/api/v1/…` | **Không** nhét GIS heavy vào BFF |

**Cấm:**

- Domain controller dưới `bff/`  
- `ProjectReference` mount Auth API local (dùng Pack-local / GitHub Packages)  
- Clone `ApiClient` / `AuthController` trong mỗi MFE repo  

### 3.2 Layout repo đề xuất (khi scaffold)

```
{RmmsServiceRepo}/
├── src/                          # Layout B (canonical)
│   ├── Controllers/Its/
│   ├── DTOs/Its/
│   ├── Entities/Its/
│   ├── Data/AppDbContext.cs      # NetTopologySuite · schema its.*
│   ├── Services/Its/
│   ├── Hubs/ItsHub.cs
│   ├── Workers/CctvStreamWorker.cs
│   └── Startup/
├── optional: workers/Its.GpuWorker/
├── docker-compose.yml
└── nuget.config                  # Linm.* → GitHub Packages
```

Nếu host đã tách `api/` packaged: map tương đương Layout B **bên trong** `api/src/{Name}.Api/`.

Single-host Railway: **cùng PORT** — `api/v1/` + `web-bff/api/v1/` (rule `bff-service-token.md`).

---

## 4. Domain model & Database

### 4.1 Schema gợi ý `its.*` (có thể alias schema `ai_vision` nếu gộp)

```sql
-- Extension
CREATE EXTENSION IF NOT EXISTS postgis;

CREATE TABLE its.traffic_objects (
  id              uuid PRIMARY KEY,
  company_code    varchar(32) NOT NULL,          -- tenant
  object_class    varchar(32) NOT NULL,          -- bien_bao | coc_tieu | …
  geom            geography(Point, 4326) NOT NULL,
  lat             double precision NOT NULL,     -- denormal for DTO
  lng             double precision NOT NULL,
  route_id        varchar(64) NULL,
  section_id      varchar(64) NULL,
  asset_id        uuid NULL,                     -- sau confirm
  confidence_avg  real NOT NULL DEFAULT 0,
  detection_count int NOT NULL DEFAULT 1,
  first_seen_at   timestamptz NOT NULL,
  last_seen_at    timestamptz NOT NULL,
  model_version   varchar(64) NOT NULL,
  status          varchar(24) NOT NULL,           -- Active | Superseded | FalsePositive
  meta_json       jsonb NULL,
  created_at      timestamptz NOT NULL,
  updated_at      timestamptz NOT NULL
);

CREATE INDEX ix_its_objects_gist ON its.traffic_objects USING GIST (geom);
CREATE INDEX ix_its_objects_class_company ON its.traffic_objects (company_code, object_class);

CREATE TABLE its.observation_rays (
  id              uuid PRIMARY KEY,
  company_code    varchar(32) NOT NULL,
  device_id       varchar(64) NOT NULL,
  source          varchar(24) NOT NULL,          -- mobile | dashcam | cctv
  object_class    varchar(32) NOT NULL,
  vehicle_geom    geography(Point, 4326) NOT NULL,
  heading_deg     real NOT NULL,                 -- GPS course
  alpha_deg       real NOT NULL,                 -- offset so tâm camera
  ray_line        geography(LineString, 4326) NULL, -- 100 m ray
  score           real NOT NULL,
  bbox_json       jsonb NULL,
  frame_url       text NULL,
  raw_lat         double precision NOT NULL,     -- GPS raw (pre-Kalman)
  raw_lng         double precision NOT NULL,
  filtered_lat    double precision NULL,
  filtered_lng    double precision NULL,
  observed_at     timestamptz NOT NULL,
  synced_at       timestamptz NULL,
  batch_id        uuid NULL
);

CREATE INDEX ix_its_rays_time ON its.observation_rays (company_code, observed_at DESC);

CREATE TABLE its.ml_model_registry (
  id              uuid PRIMARY KEY,
  platform        varchar(16) NOT NULL,          -- server_onnx | android_tflite | ios_mlmodel
  model_version   varchar(64) NOT NULL,
  object_family   varchar(32) NOT NULL,          -- its_traffic_v1
  artifact_url    text NOT NULL,
  sha256          char(64) NOT NULL,
  is_active       boolean NOT NULL DEFAULT false,
  manifest_json   jsonb NOT NULL,
  published_at    timestamptz NOT NULL,
  UNIQUE (platform, model_version)
);
```

### 4.2 Dedupe 10 m (prod algorithm)

```sql
-- Pseudo: same company + class within 10 m
SELECT id
FROM its.traffic_objects
WHERE company_code = @company
  AND object_class = @class
  AND status = 'Active'
  AND ST_DWithin(
        geom,
        ST_SetSRID(ST_MakePoint(@lng, @lat), 4326)::geography,
        10   -- metres
      )
ORDER BY last_seen_at DESC
LIMIT 1;
```

| Nếu | Hành vi |
|-----|---------|
| Tìm thấy | `UPDATE last_seen_at · detection_count++ · confidence EMA` — **không** insert object mới |
| Không | `INSERT` object mới + broadcast SignalR `object.upserted` |

**EF note:** entity change → `dotnet ef migrations add Schema_ItsTrafficObjects` (+ Designer pair) — gate `ef-migration-gate`.

### 4.3 Taxonomy class API

| `object_class` | UI VN | Demo map (`ASSET_CLASSES`) |
|----------------|-------|----------------------------|
| `bien_bao` | Biển báo | Biển báo |
| `coc_tieu` | Cọc tiêu | *(chưa có — GAP-ITS-02; Cột Km gần nghĩa)* |
| `cot_km` | Cột Km | Cột Km |
| `ho_lan` | Hộ lan | Hộ lan |
| … | … | Mở rộng asset taxonomy |

**Cấm** trộn id class mặt đường (`pothole`, `alligator_crack`, …) vào bảng ITS (`14` §3 vs GAP-F-AAD-01).

---

## 5. Thuật toán cốt lõi (BE)

### 5.1 Kalman Filter (làm mịn GPS xe)

**Vị trí file gợi ý:** `Services/Its/GpsKalmanFilter.cs`  
**Model state:** `[lat, lng, v_lat, v_lng]` hoặc ENU local meters (ổn định hơn)  
**Input:** raw GPS + optional speed/heading  
**Output:** filtered lat/lng trước khi vẽ ray  

Áp dụng **per device_id** session; reset khi gap > N giây (cấu hình).

### 5.2 Triangulation (định vị từ xa)

Với cùng `object_class` + device trip, lấy ≥ **2** observation tại **t ≥ Δt_min** (vd 0.5–1 s) khác vị trí:

1. Heading ray = `heading_deg + alpha_deg` (chuẩn hóa 0–360)  
2. `LineString` dài **100 m** từ GPS lọc bằng NetTopologySuite  
3. `lineA.Intersection(lineB)`  
4. Nếu giao 1 điểm hợp lệ (nằm phía trước xe, distance 2–80 m) → dùng làm tọa độ object  
5. Fallback 1 ray: project **độ sâu ước lượng** theo bbox size / FOV (cấu hình) — confidence thấp  

### 5.3 Ingest pipeline (API service)

```
UpsertObservationAsync(cmd)
  → Validate tenant + permission
  → Kalman.Update(deviceId, raw)
  → Append observation_rays
  → if rays for objectTrack >= 2: Triangulate
  else: depthFallback
  → DedupeService.ST_DWithin 10m
  → Persist traffic_objects
  → IHubContext<ItsHub>.Clients → object.upserted
  → optional: emit domain event its.object.upserted (Asset/Gis)
```

### 5.4 CCTV worker

`BackgroundService` / `Its.GpuWorker`:

1. OpenCvSharp `VideoCapture(rtsp)`  
2. Sample N frame/s (config)  
3. ONNX Runtime GPU session (shared, lock hoặc channel)  
4. Map class indices → `bien_bao` / `coc_tieu`  
5. Camera has **fixed site coords** → object geom = camera site + bearing model (không Kalman path mobile) hoặc homography config  
6. Gọi cùng `DedupeService`  

---

## 6. API contracts (`api/v1/`)

> Versioned API; JWT + `company_id` claim · header `X-Company-Id` khi multi-company.

### 6.1 Ingest & query

| Method | Path | Mô tả |
|--------|------|-------|
| POST | `/api/v1/its/observations` | 1 observation ray (mobile realtime) |
| POST | `/api/v1/its/observations/bulk` | Offline bulk sync (IoT) |
| GET | `/api/v1/its/objects` | List active; filter bbox/route/class |
| GET | `/api/v1/its/objects/{id}` | Chi tiết |
| POST | `/api/v1/its/objects/{id}/dismiss` | False positive |
| POST | `/api/v1/its/objects/{id}/confirm-asset` | Tạo/gắn Asset (`ai-asset-detect` parity) |
| GET | `/api/v1/its/bbox` | GeoJSON cho map viewport |

### 6.2 Observation DTO (mobile → API)

```json
{
  "deviceId": "and-8a2f",
  "source": "mobile",
  "objectClass": "bien_bao",
  "score": 0.91,
  "rawLat": 21.02851,
  "rawLng": 105.85420,
  "headingDeg": 42.5,
  "alphaDeg": -8.2,
  "bbox": [120, 80, 220, 180],
  "frameKey": "minio://…/optional",
  "observedAt": "2026-08-03T04:12:01.123Z",
  "clientBatchId": "optional-uuid",
  "modelVersion": "its-yolov8n-2026.08"
}
```

### 6.3 OTA model

| Method | Path | Mô tả |
|--------|------|-------|
| GET | `/api/v1/ml-models/current?platform=android_tflite&family=its_traffic_v1` | Version + URL + sha256 |
| GET | `/api/v1/ml-models/{version}/artifact` | Redirect / presign |
| POST | `/api/v1/ml-models` | Admin publish (permission) |

`manifest.json` (align `14` §5):

```json
{
  "modelVersion": "its-yolov8n-2026.08",
  "family": "its_traffic_v1",
  "framework": "ultralytics-yolov8n",
  "freezeBackboneLayers": 10,
  "imgsz": 640,
  "classes": ["bien_bao", "coc_tieu"],
  "exports": {
    "server_onnx": "s3://…/model.onnx",
    "android_tflite": "s3://…/model.tflite",
    "ios_mlmodel": "s3://…/model.mlmodel"
  },
  "runtime": { "server": "onnxruntime-gpu", "android": "tflite-task-vision", "ios": "coreml" }
}
```

### 6.4 Permission keys (PERM-BE)

| Permission | Endpoint group |
|------------|----------------|
| `its.observations.write` | POST observations / bulk |
| `its.objects.read` | GET list/detail/bbox |
| `its.objects.moderate` | dismiss / confirm-asset |
| `its.ml_models.admin` | publish model |
| `its.cctv.admin` | camera registry |

Scan gate: `/review-backend-source` Step 2b trên Auth + API controllers.

---

## 7. BFF Auth (`/init-bff-auth`)

Áp dụng khi Web Dashboard chạy qua shell BFF:

| Step | Việc |
|------|------|
| 0 | Confirm package **GitHub Packages** `Linm.Platform.Authentication.Bff` |
| 1 | Layout micro-src `bff/src/{Name}.Bff` **hoặc** flat host + BFF part |
| 2 | `PackageReference` only — **không** ProjectReference Auth |
| 3 | `services.AddLinmAuthenticationBff(configuration)` + `AddLinmAuthenticationBffControllers()` |
| 4 | `ServiceClient` + `ServiceEndpoints__AuthenticationService` |
| 5 | Xóa `AuthController` local trùng route |
| 6 | DevAuth cho MFE standalone nếu cần |
| 7 | GHA + Dockerfile consumer align |

MFE gọi:

- Auth: `VITE_BFF_URL/web-bff/api/v1/auth/…`  
- ITS data: `VITE_API_URL/api/v1/its/…`  

---

## 8. Realtime Web (SignalR)

| Hub | Events |
|-----|--------|
| `ItsHub` | `object.upserted` · `object.dismissed` · `observation.received` (optional throttle) |

Web client:

- `@microsoft/signalr` reconnect  
- Marker layer: **component tách** theo class (Leaflet) — chỉ update pin diff, không re-render full list  

Reuse pattern demo: `ai-asset-detect-app.js` `renderPins()` + basemap OSM/Esri.

---

## 9. MLOps & train

| Bước | Công nghệ | Ghi chú |
|------|-----------|---------|
| Dataset label | CVAT / Roboflow | ≥ balance bien_bao / coc_tieu |
| Train | YOLOv8-nano · freeze backbone **10** · **VNSO A100 PAYG** (`17`) | Align user brief · ≤40kđ/lần · 20–40 phút |
| Export | ONNX · TFLite · MLModel | 3 artifact + sha256 · **tắt VM ngay** |
| License | **P2-A Apache** khuyến nghị **hoặc** Ultralytics Enterprise (P2-B) | `14` §2 — **cấm** AGPL prod đóng |
| Server host infer | **V100/L4 tháng** (25–40 CCTV @ 1 FPS+batch) · A40 nếu >50 | `10` + **`17`** — **không** DMS 1U 350W |
| Rollback | `is_active` flip registry | Mobile check-version |
| iOS compile | `MLModel.compileModel(at:)` → `.mlmodelc` | Ứng dụng Support dir |

**Chi phí / SKU GPU:** [`17-GPU-VNSO-COST-STANDARD.md`](17-GPU-VNSO-COST-STANDARD.md).

---

## 10. Mobile & offline

| Nền | Stack | Storage offline |
|-----|-------|-----------------|
| Android | Kotlin · CameraX ImageAnalysis RGBA · FusedLocation · TFLite Task Vision | Room JSON queue |
| iOS | Swift · AVFoundation · CoreLocation · Vision + CoreML | CoreData |
| Pattern | **MVVM** | `imageProxy.close()` ngay sau frame |

**Bulk sync:** `POST /api/v1/its/observations/bulk` — idempotent by `(deviceId, clientObservationId)` hoặc `clientBatchId` + line id.

Align existing event catalog: `offline.sync.batch` (`03-EVENT-ARCHITECTURE.md`).

---

## 11. Frontend ownership (MFE)

| Surface | Repo | Note |
|---------|------|------|
| Map + candidate list | `Linm.Web.RMMS.AiVision` `/ai-vision` | Demo: `ai-asset-detect.html` |
| GIS layer overlay | `Linm.Web.RMMS.Gis` | Consume SignalR / GET bbox |
| Asset confirm target | `Linm.Web.RMMS.Asset` | Sau confirm |
| TOC (ùn tắc/VMS) | AiVision `/toc` | **Khác scope** ITS inventory |

Demo hub register: `Linm.RMMS.Demo` domain `ai-vision/` · slug `ai-asset-detect` (UI); slug design `its-traffic-detect` document-only until Signed.

---

## 12. Backend quality gate (`/review-backend-source`)

Khi có code API thực, chạy theo skill:

| Step | Output |
|------|--------|
| 0 | Scope `Rmms.Api` / `Its.GpuWorker` |
| 1 | `dotnet build` 0 errors |
| 2 | Group `SRC-W-*` (CS86xx nullable, CS1591 docs…) |
| 2b | `PERM-BE` — mọi write controller có `[RequirePermission]` |
| 3–5 | Fix theo type user chọn · rebuild |

**Coding standards ITS-specific:**

- Không block thread pool trên ONNX sync trong controller — queue / `Channel`  
- `NetTopologySuite` geography units rõ (metre)  
- UTC `observedAt` · `ApplyUtcDateTimeConvention`  
- Không hardcode tenant  

---

## 13. Phase roadmap (khớp RMMS + user stack)

| Phase | In scope | Out |
|-------|----------|-----|
| **P1 (demo hiện tại)** | HTML seed · Haversine nearby 25 m · GPT-4o class mock · Leaflet | ONNX · PostGIS · SignalR thật · OTA |
| **P1.5 design** (doc này) | SSOT class · API · DB · 10 m · architecture | Code production |
| **P2 edge+server** | Mobile TFLite/CoreML · bulk · API dedupe PostGIS · OTA · map SignalR | Multi-country TOC |
| **P2.1 CCTV** | OpenCv worker GPU · fixed camera registry | Full TOC VMS |
| **P3** | TOC ùn tắc · VMS (slug `toc`) | — |

Gate Go local YOLO: UAT P1 + `14` · host GPU `10`.

---

## 14. Mapping technical brief → implement backlog

| Brief user | Component | Repo / module | Priority |
|------------|-----------|---------------|----------|
| YOLOv8-nano freeze=10 | MLOps train | VNSO A100 PAYG (`17`) / lab | P2 |
| Export onnx/tflite/mlmodel | `ml_model_registry` | API admin | P2 |
| NetTopologySuite GIS | Dedupe + rays | API | P2 |
| OpenCvSharp + OnnxRuntime.Gpu | CCTV worker | Worker process | P2.1 |
| SignalR realtime | `ItsHub` | API + MFE | P2 |
| PostGIS GIST + 10 m | SQL / EF | API + migration | P2 |
| Triangulation 100 m rays | `TriangulationService` | API | P2 |
| Kalman GPS | `GpsKalmanFilter` | API (+ optional edge) | P2 |
| Offline bulk | `…/bulk` + Room/CoreData | Mobile + IoT module | P2 |
| OTA check-version | `ml-models/current` | API + Mobile | P2 |
| Clean Architecture / CQRS | Layout B + optional MediatR khi phức tạp | API | P2 |
| React leaflet markers | AiVision/Gis pages | MFE | P2 |
| MVVM mobile | App native | Mobile | P2 |

---

## 15. Gaps & risks

| ID | Mô tả | Mức | Action |
|----|-------|-----|--------|
| GAP-ITS-01 | Demo nearby **25 m** vs design **10 m** | P1 docs | Align demo constant + badge; BE 10 m |
| GAP-ITS-02 | Class `coc_tieu` chưa có trong seed ASSET_CLASSES | P2 | Thêm class + sample pin |
| GAP-ITS-03 | BE endpoints **MISSING** (cả `ai-vision` & `its`) | P2 | Signed → `/qlbd-align-mfe` / scaffold API |
| GAP-ITS-04 | Triangulation / Kalman **chưa** demo | P2 | Unit test synthetic GPS path |
| GAP-ITS-05 | License YOLO Ultralytics vs Apache | P0 legal | Chốt P2-A/P2-B trước train |
| GAP-ITS-06 | GPU host DMS không đủ | P0 infra | Tách worker theo `10` |
| GAP-ITS-07 | SignalR OpsHub/GisHub mock only | P2 | ItsHub dedicated |
| GAP-ITS-08 | Auth path web shell | P1 | `/init-bff-auth` khi có BFF host |
| GAP-ITS-09 | Dual taxonomy UI (defect vs ITS) | P1 | Giữ 2 adapter; không gộp class |

---

## 16. Definition of Done (implement phase)

- [ ] Migration Schema pair + GIST index  
- [ ] `ST_DWithin` 10 m same class+company  
- [ ] Kalman + triangulation unit tests  
- [ ] Bulk offline idempotent  
- [ ] OTA manifest 3 platform + sha256  
- [ ] SignalR map live  
- [ ] `[RequirePermission]` + `/review-backend-source` clean selected types  
- [ ] Auth via Authentication.Bff (no local AuthController)  
- [ ] Demo ↔ BE field parity (`assetClass` ↔ `object_class`)  
- [ ] Không break `ai-vision` defect pipeline  

---

## 17. Tài liệu liên quan

| Doc | Role |
|-----|------|
| [`features/its-traffic-detect.md`](features/its-traffic-detect.md) | Feature context ngắn |
| [`features/ai-asset-detect.md`](features/ai-asset-detect.md) | Demo UI / confirm Asset |
| [`features/ai-vision.md`](features/ai-vision.md) | Defect face pavement |
| [`features/toc.md`](features/toc.md) | TOC ùn tắc P3 |
| [`14-P2-AI-VISION-STANDARD.md`](14-P2-AI-VISION-STANDARD.md) | ONNX · license · worker |
| [`10-YOLO-SERVER-REQUIREMENTS.md`](10-YOLO-SERVER-REQUIREMENTS.md) | GPU specs |
| [`17-GPU-VNSO-COST-STANDARD.md`](17-GPU-VNSO-COST-STANDARD.md) | SKU + chi phí VNSO train/infer |
| [`12-AI-COST-PHASES.md`](12-AI-COST-PHASES.md) | Chi phí AI theo phase |
| [`02-SYSTEM-ARCHITECTURE.md`](02-SYSTEM-ARCHITECTURE.md) | Mono modules |
| [`03-EVENT-ARCHITECTURE.md`](03-EVENT-ARCHITECTURE.md) | Offline / events |
| Linm `bff-api-structure.md` · `init-bff-auth.md` · `review-backend-source.md` | Platform implement gates |

---

## 18. Next commands (khi triển khai)

```text
1. Chốt scope: API only trước → scaffold module Its trong Rmms.Api (Layout B)
2. /database-migration  Schema_ItsTrafficObjects
3. /init-bff-auth        nếu Web shell BFF mới
4. Implement Dedupe + observations (+ unit tests)
5. /review-backend-source  sau build
6. Align demo constants 10 m · class coc_tieu
7. /qlbd-align-mfe @ai-asset-detect  khi Status Signed
```
