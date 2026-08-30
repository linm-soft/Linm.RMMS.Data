# BFF endpoints — cam-view (mobile · Camera xem)

| | |
|---|---|
| feature | `cam-view` |
| bff | `Linm.RMMS.Mobile.Bff` · `MobileApiProxyController` catch-all |
| prefix | `mobile-bff/api/v1` |
| downstream | `ApiBase` → `RMMS.Service.Api` · **Camera** domain |
| source | CTX `cam-view.md` · `camera-connect.md` · `CamerasController` · `CamerasBffController` (web peer) |
| **cấm** | invent `api/v1/cam-view` · ERP.* · app `:5101` · DbContext trên BFF · credentials `connect/snapshot` trên mobile |

App `ApiClient.base` = `{BffBase}/mobile-bff/api/v1`.

## Như thế nào (skill step 6)

| Tầng | Repo / package | App có biết? |
|------|----------------|--------------|
| UI | iOS + Android | Có — `{BffPrefix}` |
| BFF host | `Linm.RMMS.Mobile.Bff` | Có — một host |
| Domain API | Camera (`CamerasController`) | **Không** — proxy rewrite |
| Dedicated CamViewController | **không** | **cấm invent** |

## Table — `#sc-cam-view` · `DES-MOB-CAM-VIEW`

| Action / zone | Method | `{BffPrefix}` path | BFF | Downstream | Source | Gap |
|---------------|--------|--------------------|-----|------------|--------|-----|
| Load cam mặc định | GET | `cameras` | proxy | `CamerasController.GetList` | camera-connect · live | filter Online client · **GAP-MOB-CAMVIEW-PICK-01** |
| Optional by id | GET | `cameras/{id}` | proxy | GetById | live | optional |
| JPEG preview / Làm mới | POST | `cameras/{id}/snapshot` | proxy | `SnapshotById` | live · CaptureJPEG | **preferred** — stored device |
| Sự kiện list | GET | `cameras/events` | proxy | `Events` | live · `CameraEventDto` | `limit` · optional `host` |
| Toast refresh | — | — | — | local UI | demo toast | **không** API |
| Device camera stream | — | — | — | — | — | **không** — OUT finder |

## Query

### GET `cameras`

`search` · `page` · `pageSize` (live paged).  
Mobile P1: `page=1` · `pageSize=20` · client pick first `Online=true` · `IsActive=true`.

### GET `cameras/events`

| Param | P1 |
|-------|-----|
| `limit` | `40` (default BE) · mobile có thể `20` |
| `host` | optional = `CameraDeviceDto.Host` của cam đang xem |

## DTO bind (live)

### CameraDeviceDto (list / pick)

`Id` · `Code` · `Name` · `ModelCode` · `Host` · `Online` · `IsActive` · `RoadRouteCode` · `KmMark` · …

### CameraSnapshotResponse

`Ok` · `Message` · `ContentType` · `Base64` · `Source` (`sdk`\|`isapi`) · `CapturedAt`

### CameraEventDto

`Id` · `At` · `Plate` · `SpeedKmh` · `VehicleType` · `Color` · `Direction` · `Source` · `CameraHost` · `RawKind` · `CameraDeviceId?`

**Cấm** app fork DTO khác BFF table.

## Có trên domain — **không** thuộc slug này

| Method | Path | Ghi |
|--------|------|-----|
| POST/PUT/DELETE | `cameras` · `cameras/{id}` | web `camera-connect` CRUD — **OUT** |
| POST | `cameras/connect/test` · `connect/snapshot` | credentials body — **OUT** mobile |
| POST | `cameras/ingest/isapi` | webhook server — **OUT** |
| GET/PUT | `cameras/wall/layout` | wall P2 — **OUT** |
| POST | `cameras/{id}/live/start` | RTSP gateway P2 — **OUT** |
| POST | `ai-vision/detect*` | `cam-patrol` / `vis-capture` — **OUT** |

## Verify live

| Check | Result |
|-------|--------|
| `GET api/v1/cameras` | **Live** |
| `POST api/v1/cameras/{id}/snapshot` | **Live** |
| `GET api/v1/cameras/events` | **Live** |
| `api/v1/cam-view` | **không** — **cấm invent** |

## Step 4b

**Skip** — schema CameraDevice / CameraEvent **DONE** (`camera-connect`). **Cấm** data_analy chạy migration / Step 4b (roleOnly).

## Version meta

| Field | Value |
|-------|-------|
| skillId | agent-data-analy-mobile |
| skillVersion | 2026.08.25.01 |
| schemaVersion | 2 |
| workflowVersion | 2026.08.29.1 |
| rulesVersion | 2026.08.29.5 |
| generatedAt | 2026-08-29T17:30:00.000Z |
| versionGate | rechecked |
| contentHash | sha256:cam-view-mobile-bff-20260829 |
| bffContentHash | sha256:cam-view-mobile-bff-20260829 |

---
<!-- Version meta: skillId=agent-data-analy-mobile skillVersion=2026.08.25.01 schemaVersion=2 workflowVersion=2026.08.29.1 rulesVersion=2026.08.29.5 versionGate=rechecked -->
