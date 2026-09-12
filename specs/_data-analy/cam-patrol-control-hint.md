# Data-analy — cam-patrol (controlHint)

| | |
|---|---|
| feature | `cam-patrol` |
| title | [Mobile] [Tuần đường] -> Thu thập camera |
| role | `data_analy` · `/agent-data-analy-mobile` · mode `feature_context` |
| packKind | **`screen`** (STATUS · GAP-MOB-CAM-PACK-01 **closed**) · demo `#sc-cam-patrol` |
| changeScope | `edit_page` · NEW AutocodeTask · keep PO/Design confirmed |
| status | **confirmed** |
| taskId | `task_9ab16ef2` |
| autoApprove | `ON` |
| demo | `specs/cam-patrol/ui/prototype/{ios,android}/index.html` `#sc-cam-patrol` · `DES-MOB-CAM-PATROL` · `DES-MOB-CAM-FINDER` · (legacy mobile-p1 same zones) |
| ctx | `docs/context/features/cam-patrol.md` · peers patrol-home · ai-vision · design §5b bước 2 |
| generatedAt | `2026-09-12T11:16:49.000Z` |

**Cấm:** watermark Gói · invent `api/v1/cam-patrol` · gộp `field-reflect` / `cam-view` / `vis-capture` · fake lat/lng · ERP.* · mfeStdUrl · system alert · score chrome ship · **class giả trên UI khi detect fail / thiếu khung hình**.

## Skill packet (`/agent-data-analy-mobile`) — 4 file

| File | Skill step |
|------|------------|
| **file này** | 4–5 controlHint + tech factors |
| [`cam-patrol-bff-endpoints.md`](cam-patrol-bff-endpoints.md) | 6 BFF · **cấm invent** |
| [`cam-patrol-action-tree.md`](cam-patrol-action-tree.md) | 7 tree + share/reuse |
| [`cam-patrol-real-data.md`](cam-patrol-real-data.md) | 6b real-data bind |

## § Delta Current vs New (`edit_page` · GAP review 2026-09-12)

| ID | Current (native ship) | New (DoD) | Surface |
|----|----------------------|-----------|---------|
| GAP-MOB-CAM-FRAME-01 | iOS `CamPatrolViewModel.runDetect` gửi `imageBase64: nil` · Android omit → default null · BE `SignedRoadDefectDetector` heuristic **signed không khung hình thật** | Capture frame JPEG từ finder → `imageBase64` non-null trên `POST ai-vision/detect` · GPS giữ lat/lng/accuracyM | finder → detect |
| GAP-MOB-CAM-FRAME-02 | Detect HTTP ok với body null-image → card class heuristic hiện UI | Thiếu frame / capture fail / HTTP fail → toast `cam.toast.detectFail` · `detection=nil` · **cấm** bind class giả / demo «Ổ gà» | card + toast |
| GAP-MOB-CAM-FRAME-03 | Dual: incident-create / field-reflect / vis-capture đã truyền `lastImageBase64` | Cam-patrol parity: cùng body `DetectAiVisionBody.imageBase64` từ camera session | iOS+Android |

**Không** đổi (OUT): PO/Design copy · zones `#sc-cam-patrol` · packKind `screen` · score chrome ẩn · fake GPS · invent path · Step 4b / MIG ở role này · sibling field-reflect / cam-view.

**Giữ** (đã PASS cleanup_mock): live session stamp · empty label · fail toast · Must 0.

## Tech factors

| Factor | P1 | Notes |
|--------|----|-------|
| GPS | **yes** | Stamp chốt · accuracy · deny → `DES-MOB-GPS-DENY` · **cấm** fake |
| Camera | **yes** | Continuous finder `DES-MOB-CAM-FINDER` · **bắt buộc** capture frame → base64 trước detect |
| Offline | yes | Mất sóng → queue / `patrol-offline` · **cấm** fake 200 |
| Map | n/a | |
| Biometric | n/a | |
| Push | n/a | |

## § Tab index

`tabs: none` — shell Tab 5: tab **`field`** active trên `#sc-cam-patrol`.

## § Demo dual

Cùng copy VN · stamp · GPS · rows · CTA · toast. iOS back «Tuần đường» · Android icon-btn. Entry hub `#i-video`. Demo HTML **không** đổi zone ids (edit_page code-only GAP).

## controlHint — `#sc-cam-patrol` (`DES-MOB-CAM-PATROL`)

| Field | VN | controlHint | Size | Kit | Notes |
|-------|----|-------------|------|-----|-------|
| navBack | Tuần đường | BackButton | 16 | `LinmTopBar` leading `#i-chevron-left` | `go('patrol-home')` |
| title | Thu thập bằng camera | TopBar title | 17 | `LinmTopBar` | fixed |
| finder | (viewfinder) | CameraFinder | — | native camera layer | `DES-MOB-CAM-FINDER` · FOV · **frame capture** |
| stampRoute | QL.1 · Km 1556+040 | OverlayStamp | 13 | on finder | bind Route + chainage live |
| stampGps | {lat}, {lng} · ±{a} m · đã chốt | OverlayStamp | 13 | on finder | GPS fix · **cấm** fake |
| rowDetect | Phát hiện / {DefectClass} · Mặt đường | ListRow | 13 / ≥16 | `LinmListRow` | **chỉ** sau detect ok + real frame |
| rowScore | Độ tin cậy / 91% | ListRow | 13 / ≥16 | `LinmListRow` | demo · **ship: ẩn %** |
| rowAction | Hành động / Tạo vấn đề sau xác nhận | ListRow | 13 / ≥16 | `LinmListRow` | copy cố định P1 |
| btnConfirm | Xác nhận · tạo vấn đề | PrimaryButton | 16 | `LinmPrimaryButton` | POST incident · cần detection thật |
| btnSkip | Bỏ qua | SecondaryButton | 16 | `LinmSecondaryButton` | dismiss · toast bỏ |
| toastOk | Đã tạo vấn đề SC-* · định vị đã chốt | Toast | 13–16 | `LinmToast` | sau confirm |
| toastSkip | Đã bỏ · nhận nhầm | Toast | 13–16 | `LinmToast` | sau skip |
| toastDetectFail | (copy `cam.toast.detectFail`) | Toast | 13–16 | `LinmToast` | capture/HTTP fail · **cấm** fake class |
| gpsDeny | (reuse) | Modal | 17/13 | `DES-MOB-GPS-DENY` | deny · chặn confirm |

## UNCLEAR

**none** — GAP frame = edit native · BE request đã có `ImageBase64` · **không** UNCLEAR UI · Step 4b **skip** (DTO live).

## Handoff → PO

| Field | Value |
|-------|-------|
| feature | `cam-patrol` |
| control-hint | **PASS** · file này |
| real-data | **PASS** · `cam-patrol-real-data.md` |
| bff | **PASS** · `cam-patrol-bff-endpoints.md` |
| action-tree | **PASS** · `cam-patrol-action-tree.md` |
| next | `/agent-po-mobile` · autoApprove ON · **keep** existing requirement · § Delta only |
| e2eQa | queued `/agent-qa*` — **cấm** e2e ở data_analy |
| note | Design/PO artifacts **giữ** · Dev sau sửa capture frame dual |

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
| contentHash | sha256:cam-patrol-control-hint-20260912-frame |
| ctxHash | sha256:cam-patrol-ctx-20260912 |
| demoHash | sha256:cam-patrol-sc-cam-patrol-zones-unchanged |

---
<!-- Version meta: skillId=agent-data-analy-mobile skillVersion=2026.08.25.01 schemaVersion=2 workflowVersion=2026.08.25.01 rulesVersion=2026.08.25.2 versionGate=rechecked -->
