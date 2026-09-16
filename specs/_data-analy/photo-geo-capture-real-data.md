# Real-data bind — photo-geo-capture

| | |
|---|---|
| feature | `photo-geo-capture` |
| prefix | `mobile-bff/api/v1` |
| sameMobile | yes · File + optional AiVision + Incident + Patrol |
| changeScope | `new_page` |
| taskId | `task_fc7c8ad5` |
| status | **confirmed** |
| packKind | `sheet` |
| generatedAt | `2026-09-12T17:20:00.000Z` |

Skill: `example/real-data-bind.md` · **GAP-MOB-REAL-01** · **GAP-MOB-REAL-02** · **GAP-MOB-PGC-*** · **GAP-PGC-BE-01**

## §A — Nguồn

| sourceKind | sourceCite | empty | error |
|------------|------------|-------|-------|
| `geo` photographer | Device CL / Fused · EXIF GPS | deny → `DES-MOB-GPS-DENY` · **không** chụp geo | timeout toast · **cấm** fake |
| `device` IMU | headingDeg · pitch · roll · hfov · cameraHeightM=1.5 | banner compass · vẫn HITL | **cấm** invent API |
| `derived` object geo | on-device pinhole ∩ mặt đường + tapNx/Ny | banner sai số · vẫn lưu ảnh | **cấm** EXIF=object |
| `hitl` map | user kéo pin · reuse patrol-map / gis-map | bắt buộc confirm trước gắn object | **cấm** skip HITL P1 |
| `api` files | FileService via BFF · peer `mobile-bff-file` | — | toastFail · **cấm** fake attachmentId |
| `api` detect optional | `POST ai-vision/detect` · Lat/Lng = **object HITL** | skip nếu confidence xấu | toast · **cấm** invent ObjectLat |
| `api` sessions optional | `GET patrol/sessions` · Route/Km toast | empty OK | toast · **cấm** demo tuyến |
| `api` incident optional | host `POST incident/incidents` · `MediaIds` | — | host toast · GAP-PGC-BE-01 no object cols |

## §B — Bind field (HARD · khớp BFF)

| uiField | Label | controlHint | catalogKind | GET / write | write field | sameMfe | sameMobile |
|---------|-------|-------------|-------------|-------------|-------------|---------|------------|
| capturePreview | (ảnh) | ImagePreviewFullBleed | — | device camera + EXIF | local JPEG | gap | yes |
| gimPin | (gim) | ImageTapPin | — | local tapNx/Ny | sidecar | n/a | yes |
| rowPhotogGps | Vị trí đã chốt | ListRow | — | Device GPS | photographerLat/Lng · accuracyM | gap | yes |
| rowDistance | Khoảng cách ước lượng | ListRow | — | derived on-device | distanceM | n/a | yes |
| rowObjectCoord | Tọa độ vật thể | ListRow | — | derived → **HITL** | objectLat/Lng | n/a | yes |
| mapConfirm | (map) | MapPinSheet | — | HITL drag | confirmed objectLat/Lng | gap | yes |
| rowKey | Key | ListRow | — | commit response | `attachmentId` · objectKey BE | gap | yes |
| upload | (hidden) | — | — | POST `files/init` → PUT `files/{id}/object` → POST `files/commit` | purpose=`photo-geo-capture` | gap | yes |
| preview | (thumb host) | ImageThumb | — | GET `files/{id}/object` JWT | bytes · **cấm** resign URL | gap | yes |
| detectOpt | (host) | — | — | POST `ai-vision/detect` | Lat/Lng=object HITL | gap | yes |
| hostMedia | MediaIds | — | — | host Create | `MediaIds` CSV guid · `HasGps` | gap | yes |
| sessionsOpt | tuyến/Km | — | — | GET `patrol/sessions` | RouteLabel toast | gap | yes |

§B path **khớp** `photo-geo-capture-bff-endpoints.md`.

## §C — Catalog

| catalogKind | search/list API | seed/import cite | Cấm |
|-------------|-----------------|------------------|------|
| purpose | closed | `photo-geo-capture` | invent purpose path |
| confidence threshold | SA config | default **30 m** peer vis-capture | hardcode khác SA Signed |
| cameraHeightM | SA config | default **1.5** | invent height API |
| map tiles | reuse patrol-map / gis-map | peers | invent map API |

## §D — Map / vẽ

`map: hitl` — pin đề xuất từ compute · user kéo · confirmed coords = SSOT object · **cấm** fake · **cấm** ARGeoTracking VN SSOT (GAP-PGC-GEO-VN-01).

## §E — Progress / vòng đời

| stateField | Nguồn | Ai đổi | API | UI |
|------------|-------|--------|-----|-----|
| capture local | device | user shutter | — | preview |
| gim | tap | user | — | 1 pin |
| object proposed | on-device | compute | — | distance + coord rows |
| object confirmed | HITL | user drag+confirm | — | map · toastOk |
| attachmentId | FileService | upload lifecycle | files/* | rowKey · host |
| detect optional | AiVision | after HITL | POST detect | host rows |
| incident media | Incident | host submit | POST incidents | MediaIds · **GAP-PGC-BE-01** |

## §F — Handoff

| Role | Dùng packet |
|------|-------------|
| PO | DoD capture+gim+HITL+FileService · object ≠ photographer GPS · dual Design |
| Design | sheet zones · dual proto · copy «Vị trí đã chốt» / «Khoảng cách ước lượng» · reviewUrl |
| SA | GAP-PGC-BE-01 persist · DETECT-01 Lat/Lng reuse · confidence 30 m · **không** Step 4b analy |
| Dev iOS+Android | on-device geo · File purpose · HITL map · host openCapture |

## Demo rows (Design SSOT only — **cấm** ship fallback)

| Field | Value |
|-------|-------|
| Photographer | ±4–8 m · EXIF GPS |
| Distance | ~18 m ước lượng |
| Object | lat/lng sau kéo pin |
| Key | short attachmentId |
| Banner | Sai số cao / Đứng lệch xe |
| Toast | Đã gắn tọa độ vật thể |

## Version meta

| Field | Value |
|-------|-------|
| skillId | agent-data-analy-mobile |
| skillVersion | 2026.08.25.01 |
| schemaVersion | 2 |
| workflowVersion | 2026.08.25.01 |
| rulesVersion | 2026.08.25.2 |
| generatedAt | 2026-09-12T17:20:00.000Z |
| versionGate | rechecked |
| contentHash | sha256:photo-geo-capture-real-data-20260912 |
| ctxHash | sha256:96c48bab551b693f |
| demoHash | sha256:photo-geo-capture-demo-missing-host-zones |

---
<!-- Version meta: skillId=agent-data-analy-mobile skillVersion=2026.08.25.01 schemaVersion=2 -->
