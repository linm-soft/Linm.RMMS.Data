# Data-analy — cam-patrol (controlHint)

| | |
|---|---|
| feature | `cam-patrol` |
| title | [Mobile] [Tuần đường] -> Thu thập camera |
| role | `data_analy` · `/agent-data-analy-mobile` · mode `feature_context` |
| packKind | **`sheet`** (STATUS / `_form-type-mobile` scan) · **demo surface** = full screen `#sc-cam-patrol` (không `#sheet-*`) |
| changeScope | `new_page` |
| status | **confirmed** |
| taskId | `task_21653e83` |
| autoApprove | `ON` |
| demo | `specs/mobile-p1/ui/prototype/{ios,android}/index.html` `#sc-cam-patrol` · `DES-MOB-CAM-PATROL` · `DES-MOB-CAM-FINDER` · workflow `workflow-cam-patrol/` |
| ctx | `docs/context/features/cam-patrol.md` · `patrol-home.md` · `ai-vision.md` · `specs/mobile-p1/ui/design.md` §5b bước 2 |
| generatedAt | `2026-08-28T21:10:00.000Z` |

**Cấm:** watermark Gói · invent `api/v1/cam-patrol` · gộp `field-reflect` / `cam-view` / `vis-capture` · fake lat/lng · ERP.* · mfeStdUrl · system alert · score chrome ship (Design).

## Skill packet (`/agent-data-analy-mobile`) — 4 file

| File | Skill step |
|------|------------|
| **file này** | 4–5 controlHint + tech factors |
| [`cam-patrol-bff-endpoints.md`](cam-patrol-bff-endpoints.md) | 6 BFF · **cấm invent** |
| [`cam-patrol-action-tree.md`](cam-patrol-action-tree.md) | 7 tree + share/reuse |
| [`cam-patrol-real-data.md`](cam-patrol-real-data.md) | 6b real-data bind |

## § Delta Current vs New (`new_page`)

| ID | Current (native) | New (SSOT mobile demo + CTX) | Surface |
|----|------------------|------------------------------|---------|
| GAP-MOB-CAM-SCR-01 | Stub / toast / missing | Full `#sc-cam-patrol` «Thu thập bằng camera» · back Tuần đường | screen |
| GAP-MOB-CAM-FIND-01 | — | Finder FOV + stamp tuyến/Km/GPS chốt | `DES-MOB-CAM-FINDER` |
| GAP-MOB-CAM-DET-01 | — | Card Phát hiện · tin cậy · hành động | list rows |
| GAP-MOB-CAM-CONFIRM-01 | — | Primary «Xác nhận · tạo vấn đề» → POST incident | CTA |
| GAP-MOB-CAM-SKIP-01 | — | Secondary «Bỏ qua» dismiss detection | CTA |
| GAP-MOB-CAM-DATA-01 | — | POST `ai-vision/detect` · POST `incident/incidents` via Mobile.Bff | BFF |
| GAP-MOB-CAM-PACK-01 | — | STATUS packKind=`sheet` vs demo full screen — Design chốt | meta |
| GAP-MOB-CAM-SCORE-01 | — | Demo 91% · Design **cấm** score chrome → ẩn % khi ship | Design |

**Không** đổi (OUT pack): web `camera-connect` · `cam-view` · `vis-capture` · `ai-asset-detect` · field-reflect form · Twin/YOLO local train.

## Tech factors

| Factor | P1 | Notes |
|--------|----|-------|
| GPS | **yes** | Stamp chốt · accuracy · deny → `DES-MOB-GPS-DENY` (reuse) · **cấm** fake |
| Camera | **yes** | Continuous finder `DES-MOB-CAM-FINDER` · capture frame → detect |
| Offline | yes | Mất sóng → queue local / `patrol-offline` · **cấm** fake 200 |
| Map | n/a | Entry từ hub · không embed map trên màn này |
| Biometric | n/a | |
| Push | n/a | |

## § Tab index

`tabs: none` trên surface — **không** segment riêng (`GAP-TAB-01`). Shell Tab 5: tab **`field`** (Tuần đường) active khi đứng `#sc-cam-patrol` (`data-tab="field"`).

## § Demo dual

Cùng copy VN · cùng stamp `QL.1 · Km 1556+040` · cùng `11.5308, 109.0082 · ±4 m · đã chốt` · cùng rows Phát hiện / Độ tin cậy / Hành động · cùng CTA «Xác nhận · tạo vấn đề» / «Bỏ qua» · cùng toast.  
iOS: back label «Tuần đường» + `#i-chevron-left`. Android: icon-btn chevron only (parity ok · Design giữ).  
**Cấm** invent icon — entry hub dùng `#i-video` (đã có).

## controlHint — `#sc-cam-patrol` (`DES-MOB-CAM-PATROL`)

| Field | VN | controlHint | Size | Kit | Notes |
|-------|----|-------------|------|-----|-------|
| navBack | Tuần đường | BackButton | 16 | `LinmTopBar` leading `#i-chevron-left` | `go('patrol-home')` |
| title | Thu thập bằng camera | TopBar title | 17 | `LinmTopBar` | fixed |
| finder | (viewfinder) | CameraFinder | — | native camera layer | `DES-MOB-CAM-FINDER` · FOV box |
| stampRoute | QL.1 · Km 1556+040 | OverlayStamp | 13 | on finder | bind Route + chainage |
| stampGps | {lat}, {lng} · ±{a} m · đã chốt | OverlayStamp | 13 | on finder | GPS fix · **cấm** fake |
| rowDetect | Phát hiện / Ổ gà · Mặt đường | ListRow | 13 / ≥16 | `LinmListRow` | bind `DefectClass` (+ asset surface) |
| rowScore | Độ tin cậy / 91% | ListRow | 13 / ≥16 | `LinmListRow` | demo · **ship: ẩn %** (GAP-MOB-CAM-SCORE-01) |
| rowAction | Hành động / Tạo vấn đề sau xác nhận | ListRow | 13 / ≥16 | `LinmListRow` | copy cố định P1 |
| btnConfirm | Xác nhận · tạo vấn đề | PrimaryButton | 16 | `LinmPrimaryButton` | submit · POST incident · toast SC-* |
| btnSkip | Bỏ qua | SecondaryButton | 16 | `LinmSecondaryButton` | dismiss detection · toast bỏ |
| toastOk | Đã tạo vấn đề SC-2409 · định vị đã chốt | Toast | 13–16 | `LinmToast` | sau confirm |
| toastSkip | Đã bỏ · nhận nhầm | Toast | 13–16 | `LinmToast` | sau skip |
| gpsDeny | (reuse) | Modal | 17/13 | `DES-MOB-GPS-DENY` | khi deny · chặn confirm |

## UNCLEAR

**none** — demo + design §5b chốt flow · detect stub body = GAP SA (không UNCLEAR UI).

## Handoff → PO

| Field | Value |
|-------|-------|
| feature | `cam-patrol` |
| control-hint | **PASS** · file này |
| real-data | **PASS** · `cam-patrol-real-data.md` |
| bff | **PASS** · `cam-patrol-bff-endpoints.md` |
| action-tree | **PASS** · `cam-patrol-action-tree.md` |
| next | `/agent-po-mobile` · autoApprove ON |
| e2eQa | queued `/agent-qa*` — **cấm** e2e ở data_analy |

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
| contentHash | sha256:cam-patrol-control-hint-20260828 |
| ctxHash | sha256:cam-patrol-ctx-20260828 |
| demoHash | sha256:mobile-p1-sc-cam-patrol-20260828 |

---
<!-- Version meta: skillId=agent-data-analy-mobile skillVersion=2026.08.25.01 schemaVersion=2 workflowVersion=2026.08.25.01 rulesVersion=2026.08.25.2 versionGate=rechecked -->
