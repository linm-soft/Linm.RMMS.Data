# Real-data bind — cam-view

| | |
|---|---|
| feature | `cam-view` |
| prefix | `mobile-bff/api/v1` |
| sameMobile | yes · proxy Camera domain |
| taskId | `task_2a5ed594` |

Skill: `example/real-data-bind.md` · **GAP-MOB-REAL-01**

## §A Source / Resource

| Resource | Entity | Key |
|----------|--------|-----|
| Camera device | `CameraDevice` / `rmms_camera_devices` | `Id` Guid · `Code` |
| Snapshot JPEG | transient `CameraSnapshotResponse` | `CapturedAt` · `Base64` |
| Camera event | `CameraEvent` / `rmms_camera_events` | `Id` string · `At` |

CTX `cam-view.md` · peer `camera-connect.md` · BFF table `cam-view-bff-endpoints.md` · demo `#sc-cam-view` · `DES-MOB-CAM-VIEW`.

## §B Path = BFF table

| UI zone | Bind | Method · Path |
|---------|------|----------------|
| Pick cam / ModelCode | `CameraDeviceDto` Online | `GET cameras` |
| JPEG card image | `Base64` · `ContentType` | `POST cameras/{id}/snapshot` |
| Caption model | `ModelCode` (device) | same GET / device |
| Cập nhật HH:mm | `CapturedAt` | snapshot response |
| Sự kiện tốc độ | `SpeedKmh` · `At` · optional lane/`Direction` | `GET cameras/events` |
| Sự kiện biển | `Plate` · `At` · `RawKind` | same events |
| Làm mới | re-POST snapshot + re-GET events | same paths |
| Toast OK | local | — · **không** API |

§B path **khớp** BFF table — **không** invent `cam-view`.

## §C Map DTO → UI

| dtoField | UI |
|----------|-----|
| `ModelCode` | «Ảnh JPEG · {ModelCode}» (demo iDS-TCM403) |
| `Base64` | JPEG card image |
| `CapturedAt` | «Cập nhật {HH:mm}» local TZ |
| `Ok` / `Message` | gate toast fail khi `Ok=false` |
| `SpeedKmh` | «Tốc độ {n} km/h» |
| `Plate` | «Phát hiện biển {Plate}» |
| `At` | row-sub time |
| `Direction` / lane | optional sub «làn …» · dual GAP |
| `Host` | query `events?host=` filter |
| `Online` | pick filter · offline → empty / toast |

## §D Map overlay

N/A trên màn cam-view — không embed map. Entry từ `me` (tab me).

## §E Progress

| Case | Behavior |
|------|----------|
| GET cameras empty | Empty-state · **cấm** fake TCM403 JPEG |
| Snapshot fail / Ok=false | Giữ placeholder `#i-video` · toast lỗi · **cấm** fake Base64 |
| Events empty | Section «Sự kiện» + empty list (không invent tốc độ) |
| Events fail | Toast · giữ list cũ nếu có |
| Offline | Toast mất sóng · **cấm** fake 200 |
| Dual Android thiếu row biển | Design GAP-MOB-CAMVIEW-DUAL-01 · ship parity iOS |

## §F Cấm

- Watermark / «bản Gói N» / process text  
- Fake JPEG / fake SpeedKmh / Plate  
- Invent mobile-only path `cam-view`  
- Bind `mfeStdUrl`  
- Skip §B ≠ BFF → **GAP-MOB-REAL-01**  
- `POST cameras/connect/snapshot` credentials trên app  
- Gộp confirm thành sibling queue → **GAP-MOB-ACT-07**  
- Gộp `camera-connect` / `cam-patrol` / `vis-capture`

## Demo rows SSOT (fallback UI copy — chỉ khi Design mock; **không** ship fake API)

| Field | Value |
|-------|-------|
| Model | Ảnh JPEG · iDS-TCM403 |
| Updated | Cập nhật 08:41 |
| Event 1 | Tốc độ 72 km/h · 08:41 · làn 2 |
| Event 2 | Phát hiện biển P.127 · 08:36 |
| Toast refresh | Đã làm mới ảnh |

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
| contentHash | sha256:cam-view-real-data-20260829 |

---
<!-- Version meta: skillId=agent-data-analy-mobile skillVersion=2026.08.25.01 schemaVersion=2 workflowVersion=2026.08.29.1 rulesVersion=2026.08.29.5 versionGate=rechecked -->
