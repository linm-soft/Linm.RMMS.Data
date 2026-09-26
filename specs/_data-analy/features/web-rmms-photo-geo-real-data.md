# Data-analy — real-data bind — web-rmms-photo-geo

| Field | Value |
|-------|-------|
| feature | `web-rmms-photo-geo` |
| title | Overlay chụp ảnh có tọa độ |
| packKind | `list` |
| changeScope | `new_page` |
| status | `done` |
| taskId | `task_82870871` |
| prefix API | `api/v1/files` · `api/v1/ai-vision` |
| prefix BFF web (cite) | `web-bff/api/v1/files` · `web-bff/api/v1/ai-vision` — **cấm** client MFE Mobile gọi |
| prefix BFF mobile (plan) | `mobile-bff/api/v1` · cùng `{resource}` · host `:5202` |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · **cấm ERP.*** |
| uiRepo | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| mfeStdUrl | `http://localhost:9301/web-rmms-photo-geo` |
| domain | **File** (+ **AiVision** detect) · Incident/Patrol consumers cite |
| contentHash | `sha256:2282c3b64ab8701681f5edbc548b5cf1a2221159d9ffb779dfe03d186010f7a4` |
| skillVersion | `2026.09.05.03` |
| schemaVersion | `2` |
| workflowVersion | `2026.09.19.02` |
| rulesVersion | `2026.09.25.2` |
| analyzedAt | `2026-09-26T06:47:05.828Z` |
| demo | **N/A** · **cấm** demo-json / in-app mock SSOT |

## § Scope

| In | Out |
|----|-----|
| Overlay PGC · files init/PUT/commit/GET · optional detect · GPS+gim+HITL on-device · return attachmentId | Invent `api/v1/photo-geo*` · web-bff client · Me* · journal/kết ca/tồn tại/tần suất · native edit · fake GPS |
| Consumers: incident-create · vis · field-reflect | Persist object lat column (GAP-PGC-BE-01 → SA) |

## §A — Nguồn

| sourceKind | sourceCite | empty | error |
|------------|------------|-------|-------|
| `context` | `docs/context/features/web-rmms-photo-geo.md` | — | — |
| `peer-context` | `docs/context/features/photo-geo-capture.md` | — | native SSOT |
| `plan` | `docs/plan/web-rmms-mobile/SCREENS.md` · `TASKS.md` T-W7-01 | — | overlay flow |
| `api` | FileService `files/*` · `ai-vision/detect` | empty preview | toast · **cấm** `window.alert` |
| `bff` | `Linm.RMMS.Mobile.Bff` · `mobile-bff/api/v1/files/*` · detect proxy | 503 | retry · **cấm** Route trên web-bff |
| `dto` | File init/commit DTOs · `DetectAiVisionRequest` Lat/Lng | — | accuracy ≤ 30 |
| `domain-map` | File cite · AiVision · Incident | **GAP slug** | SA add `web-rmms-photo-geo` |
| `geo` | `navigator.geolocation` (+ DeviceOrientation khi có) | deny → block | **cấm** fake |
| `map` | peer GIS clip / map host HITL | — | **cấm** invent map API |
| `prototype` | `specs/photo-geo-capture/ui/prototype/android/index.html` | — | Design only |
| `demo` | — | N/A | **cấm** demo SSOT |

## §B — Bind field (HARD)

| uiField | Label (key) | controlHint | catalogKind | GET / device | write field | sameMfe | sameMobile |
|---------|-------------|-------------|-------------|--------------|-------------|---------|------------|
| capture.still | ảnh still | CameraStill | files | getUserMedia / kit | JPEG bytes → PUT object | gap web | peer native |
| photographerLat | vị trí đã chốt | GPS RO | geo | device + EXIF | sidecar · **không** detect Lat | gap | peer |
| photographerLng | — | GPS RO | geo | device | sidecar | gap | peer |
| accuracyM | sai số | GPS RO | geo | device | sidecar · gate detect ≤30 | gap | peer |
| headingDeg / pitchDeg | hướng / nghiêng | derived | device | IMU / orientation | sidecar on-device | gap | peer |
| tapNx / tapNy | gim | MapPinTap | — | UI | sidecar | gap | peer |
| distanceM | khoảng cách ước lượng | Number RO | derived | on-device / HITL haversine | sidecar | gap | peer |
| lensRangeM | từ ống kính | Number RO | derived | on-device | sidecar | gap | peer |
| objectLat / objectLng | tọa độ vật thể | Number RO | derived+HITL | map pin confirm | sidecar · detect Lat/Lng · **GAP-PGC-BE-01** persist | gap | peer |
| uploadId | key tạm | Text RO | files | `POST files/init` | — | peer files | peer |
| attachmentId | key | Text RO | files | `POST files/commit` | return host · MediaIds | peer | peer |
| preview | xem ảnh | Img JWT | files | `GET files/{id}/object` | — · **cấm** resign URL persist | peer | peer |
| detect.optional | nhận diện | Button | ai-vision | `POST ai-vision/detect` | Lat/Lng=object · AccuracyM | peer vis | peer |
| session.routeKm | tuyến / km | ListRow RO | patrol | `GET patrol/sessions` optional | toast only · **cấm** fake | peer | peer |
| host.mediaIds | gắn consumer | — | incident | — | `MediaIds` guid · `HasGps=true` | peer INC/VIS/FR | peer |

**Init body (Live):** `purpose=photo-geo-capture` · `product=rmms` · `fileName` · `contentType=image/jpeg` · `sizeBytes`.

**Detect body (Live):** Lat/Lng = **object HITL** · AccuracyM · media ref — **cấm** photographer GPS.

**Cấm** invent `photo-geo` path · **cấm** ERP.* · **cấm** fake GPS · **cấm** client `objectKey`.

## §C — Catalog

| catalogKind | search/list API | seed/import cite | Cấm |
|-------------|-----------------|------------------|------|
| files | `POST files/init` → `PUT …/object` → `POST files/commit` · GET object JWT | FileService Mobile.Bff | persist full URL · invent objectKey |
| ai-vision | `POST ai-vision/detect` | AiVision DOMAIN-MAP | detect khi accuracy > 30 · GPS người |
| LOOKUP_STATIC | FE `useFormOptions` copy keys (sheet title · row labels · GPS deny) | CTX + Android proto | hardcode VN trên form |
| patrol (optional) | `GET patrol/sessions` | Patrol | fake session/route |
| map-host | peer GIS clip | `web-rmms-gis` | invent tiles API trong pack |

## §D — Map / vẽ

| Mục | Ghi |
|-----|-----|
| map | HITL pin confirm only · reuse GIS clip · **không** draw CRUD |
| GPS | photographer point + object point derived · không layer edit |
| gim | 1 tap trên still · không multi |

## §E — Progress / vòng đời

| stateField | Nguồn | Ai đổi | API | UI |
|------------|-------|--------|-----|-----|
| captured | local | shutter | — | preview freeze |
| gimmed | local | tap pin | — | `#gim-pin` |
| uploaded | FileService | init→PUT→commit | files/* | `#row-key` |
| mapConfirmed | local HITL | kéo pin + confirm | — | enable `#btn-use` |
| returned | host callback | Dùng ảnh | — | close sheet · MediaIds |
| detectOptional | AiVision | after HITL | `ai-vision/detect` | consumer VIS |

`progress: overlay capture lifecycle` (capture → gim → upload → HITL → return). Không workflow entity riêng.

## §F — Handoff

| Role | Need |
|------|------|
| PO | Scope overlay · consumers · GPS HARD · out B–E/Me |
| Design | Zones `#sheet-pgc` · reviewUrl Android 1-1 |
| SA | Confirm File/AiVision DTOs · DOMAIN-MAP slug · GAP-PGC-BE-01 |
| Dev | Mobile.Bff :5202 · getUserMedia · HITL map · no web-bff |
| QA | Deny · >30m · commit key · HITL đổi lat · no fake |

## DoR real-data

| Check | |
|-------|--|
| §A sources | **PASS** |
| §B bind | **PASS** |
| demo N/A | **PASS** |
| contentHash = CTX | **PASS** |
