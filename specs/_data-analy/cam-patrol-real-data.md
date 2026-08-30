# Real-data bind — cam-patrol

| | |
|---|---|
| feature | `cam-patrol` |
| prefix | `mobile-bff/api/v1` |
| sameMobile | yes · proxy AiVision + Incident + Patrol |
| taskId | `task_21653e83` |

Skill: `example/real-data-bind.md` · **GAP-MOB-REAL-01**

## §A Source / Resource

| Resource | Entity | Key |
|----------|--------|-----|
| Patrol session | `PatrolSession` / `rmms_patrol_sessions` | `Id` Guid · `Code` PAT-* |
| AI detection | `AiVisionDetection` / detections | `Id` Guid · `Code` DET-* |
| Incident | `Incident` / `rmms_incidents` | `Id` Guid · code SC-* |

CTX `cam-patrol.md` · BFF table `cam-patrol-bff-endpoints.md` · demo `#sc-cam-patrol` · `DES-MOB-CAM-PATROL` · `DES-MOB-CAM-FINDER`.

## §B Path = BFF table

| UI zone | Bind | Method · Path |
|---------|------|----------------|
| Stamp tuyến / Km | `Route` session + chainage | `GET patrol/sessions` (Đang tuần) |
| Stamp GPS | `LocationFix` lat/lng/accuracyM | Device GPS · **cấm** fake |
| Phát hiện row | `DefectClass` (+ surface label) | `POST ai-vision/detect` → DTO |
| Độ tin cậy row | `Score` (demo %) | same detect · **ship ẩn %** |
| Hành động row | copy cố định P1 | local |
| Xác nhận · tạo vấn đề | CreateIncident + `DetectionId` | `POST incident/incidents` |
| Bỏ qua | clear local detection card | — · **không** API |
| Toast SC-* | `Code` / title từ Create response | POST incident response |

§B path **khớp** BFF table — **không** invent `cam-patrol`.

## §C Map DTO → UI

| dtoField | UI |
|----------|-----|
| `Route` (session) | stamp `QL.1 · Km …` |
| `lat`·`lng`·`accuracyM` (device) | stamp GPS · «đã chốt» |
| `DefectClass` | row Phát hiện title |
| `Score` | row Độ tin cậy (demo) |
| `RouteLabel` · `SectionId` | stamp / incident RouteName |
| `Id` (detection) | `DetectionId` khi Create |
| Incident `Code` / title | toast «Đã tạo vấn đề SC-…» |
| `HasGps` | true khi stamp chốt |

## §D Map overlay

N/A trên màn cam-patrol — không embed map. Entry từ `patrol-home` (tab field).

## §E Progress

| Case | Behavior |
|------|----------|
| GET sessions fail/empty | Stamp demo SSOT `QL.1 · Km 1556+040` · GPS vẫn chạy |
| GPS deny | modal `DES-MOB-GPS-DENY` · **không** confirm tạo vấn đề |
| Detect stub fail | Giữ finder · toast lỗi · **cấm** fake detection 200 |
| POST incident fail / offline | Queue local · sibling `patrol-offline` · toast nháp · **cấm** fake SC code |
| Skip | Clear card · toast «Đã bỏ · nhận nhầm» · finder tiếp tục |
| Score chrome | P1 Design: **không** hiện % trên UI ship |

## §F Cấm

- Watermark / «bản Gói N» / process text  
- Fake lat/lng  
- Invent mobile-only path `cam-patrol`  
- Bind `mfeStdUrl`  
- Skip §B ≠ BFF → **GAP-MOB-REAL-01**  
- Gộp confirm thành sibling queue → **GAP-MOB-ACT-07**  
- Gộp `field-reflect` / `cam-view` / `camera-connect`

## Demo rows SSOT (fallback)

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
| generatedAt | 2026-08-28T21:10:00.000Z |
| versionGate | rechecked |
| contentHash | sha256:cam-patrol-real-data-20260828 |

---
<!-- Version meta: skillId=agent-data-analy-mobile skillVersion=2026.08.25.01 schemaVersion=2 workflowVersion=2026.08.25.01 rulesVersion=2026.08.25.2 versionGate=rechecked -->
