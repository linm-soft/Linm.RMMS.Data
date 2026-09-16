# Real-data bind — cam-patrol

| | |
|---|---|
| feature | `cam-patrol` |
| prefix | `mobile-bff/api/v1` |
| sameMobile | yes · proxy AiVision + Incident + Patrol |
| changeScope | `edit_page` |
| taskId | `task_9ab16ef2` |
| generatedAt | `2026-09-12T11:16:49.000Z` |

Skill: `example/real-data-bind.md` · **GAP-MOB-REAL-01** · **GAP-MOB-CAM-FRAME-01**

## § Delta Current vs New

| Bind | Current | New |
|------|---------|-----|
| `imageBase64` | null (iOS explicit · Android default) → BE heuristic signed | **required** non-empty JPEG/PNG base64 từ finder frame trước POST |
| Detection card | Hiện class từ heuristic khi null-image 200 | Chỉ bind khi detect ok + frame đã gửi · fail → toast · card clear |
| Fallback copy `cam.detect.fallback` | Dùng khi `defectClass` empty | **Cấm** dùng để che fail / null-frame · chỉ empty-class sau detect **thật** ok |

## §A Source / Resource

| Resource | Entity | Key |
|----------|--------|-----|
| Patrol session | `PatrolSession` / `rmms_patrol_sessions` | `Id` Guid · `Code` PAT-* |
| AI detection | `AiVisionDetection` / detections | `Id` Guid · `Code` DET-* |
| Incident | `Incident` / `rmms_incidents` | `Id` Guid · code SC-* |
| Camera frame | Device capture | local → `DetectAiVisionRequest.ImageBase64` |

CTX `cam-patrol.md` · BFF `cam-patrol-bff-endpoints.md` · demo `#sc-cam-patrol` · `DES-MOB-CAM-PATROL` · `DES-MOB-CAM-FINDER`.

## §B Path = BFF table

| UI zone | Bind | Method · Path |
|---------|------|----------------|
| Stamp tuyến / Km | `Route` session + chainage | `GET patrol/sessions` (Đang tuần) |
| Stamp GPS | `LocationFix` lat/lng/accuracyM | Device GPS · **cấm** fake |
| Frame capture | JPEG/PNG bytes → base64 | Device camera · **không** API |
| Phát hiện row | `DefectClass` (+ surface) | `POST ai-vision/detect` + **ImageBase64** |
| Độ tin cậy row | `Score` (demo %) | same · **ship ẩn %** |
| Hành động row | copy cố định P1 | local |
| Xác nhận · tạo vấn đề | CreateIncident + `DetectionId` | `POST incident/incidents` |
| Bỏ qua | clear detection card | — · **không** API |
| Toast SC-* | `Code` Create response | POST incident |
| Toast detect fail | local | capture/HTTP fail |

§B path **khớp** BFF — **không** invent `cam-patrol`.

## §C Map DTO → UI

| dtoField | UI |
|----------|-----|
| `ImageBase64` (request) | từ finder frame · **cấm** null khi gọi detect |
| `Lat`·`Lng`·`AccuracyM` (request) | stamp GPS đã chốt |
| `Route` (session) | stamp `QL.1 · Km …` |
| `DefectClass` | row Phát hiện · **chỉ** sau 200 + real frame |
| `Score` | row tin cậy (demo) · ship ẩn |
| `RouteLabel` · `SectionId` | stamp / Create `RouteName` |
| `Id` (detection) | `DetectionId` Create |
| Incident `Code` | toast SC-* |
| `HasGps` | true khi stamp chốt |

## §D Map overlay

N/A — không embed map.

## §E Progress

| Case | Behavior |
|------|----------|
| GET sessions fail/empty | Stamp empty/live label · GPS vẫn chạy · **cấm** demoRouteStamp |
| GPS deny | `DES-MOB-GPS-DENY` · **không** confirm |
| Camera deny | toast cameraDeny · **không** detect |
| Capture frame fail / empty base64 | **không** POST · toast detectFail · card nil |
| Detect HTTP fail | card nil · toast detectFail · **cấm** fake class / demo Ổ gà |
| Detect 200 + real frame | bind DefectClass card |
| POST incident fail / offline | queue · `patrol-offline` · **cấm** fake SC |
| Skip | clear card · toast bỏ · finder tiếp |
| Score chrome | ship **không** hiện % |

## §F Cấm

- Fake lat/lng · invent path `cam-patrol` · `mfeStdUrl`
- POST detect với `imageBase64=null` / omit khi camera granted (GAP-MOB-CAM-FRAME-01)
- Fallback class giả trên UI khi fail / thiếu frame
- Watermark Gói · gộp field-reflect / cam-view
- Skip §B ≠ BFF → **GAP-MOB-REAL-01**

## Demo rows SSOT (prototype only · **không** ship fallback)

| Field | Value |
|-------|-------|
| Stamp | QL.1 · Km 1556+040 |
| GPS | 11.5308, 109.0082 · ±4 m · đã chốt |
| Phát hiện | Ổ gà · Mặt đường |
| Độ tin cậy | 91% |
| Hành động | Tạo vấn đề sau xác nhận |
| Toast ok | Đã tạo vấn đề SC-2409 · định vị đã chốt |
| Toast skip | Đã bỏ · nhận nhầm |

## Version meta

| Field | Value |
|-------|-------|
| skillId | agent-data-analy-mobile |
| skillVersion | 2026.08.25.01 |
| schemaVersion | 2 |
| workflowVersion | 2026.08.25.01 |
| rulesVersion | 2026.08.25.2 |
| generatedAt | 2026-09-12T11:16:49.000Z |
| versionGate | rechecked |
| contentHash | sha256:cam-patrol-real-data-20260912-frame |

---
<!-- Version meta: skillId=agent-data-analy-mobile skillVersion=2026.08.25.01 schemaVersion=2 workflowVersion=2026.08.25.01 rulesVersion=2026.08.25.2 versionGate=rechecked -->
