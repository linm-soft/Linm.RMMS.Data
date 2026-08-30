# Data-analy — vis-capture (controlHint · mobile Nhận diện mặt đường)

| | |
|---|---|
| feature | `vis-capture` |
| title | [Mobile] [Vấn đề] -> Nhận diện mặt đường |
| role | `data_analy` · `/agent-data-analy-mobile` · mode `feature_context` |
| packKind | **`sheet`** (packet · `_form-type-mobile` · STATUS) · surface = **screen** `#sc-vis-capture` (demo full · không `#sheet-*`) |
| changeScope | `new_page` |
| status | **confirmed** |
| taskId | `task_086ba802` |
| autoApprove | `ON` |
| demo | `specs/mobile-p1/ui/prototype/{ios,android}/index.html` `#sc-vis-capture` · `DES-MOB-VIS-CAPTURE` · entry `#sc-incident-list` `.vn-banner` |
| ctx | `docs/context/features/vis-capture.md` · `ai-vision.md` · `incident-list.md` · feature-guide `vis-capture` |
| generatedAt | `2026-08-29T08:28:20.000Z` |

**Cấm:** watermark Gói · invent `api/v1/vis-capture` · gộp `cam-patrol` / `det-hitl` / `incident-create` · fake lat/lng · nhận diện on-device · ERP.* · mfeStdUrl · system alert · gõ tay tọa độ (guide negative).

## Skill packet (`/agent-data-analy-mobile`) — 4 file

| File | Skill step |
|------|------------|
| **file này** | 4–5 controlHint + tech factors |
| [`vis-capture-bff-endpoints.md`](vis-capture-bff-endpoints.md) | 6 BFF · **cấm invent** |
| [`vis-capture-action-tree.md`](vis-capture-action-tree.md) | 7 tree + share/reuse |
| [`vis-capture-real-data.md`](vis-capture-real-data.md) | 6b real-data bind |

## § Delta Current vs New (`new_page`)

| ID | Current (native / demo) | New (SSOT mobile + CTX) | Surface |
|----|-------------------------|-------------------------|---------|
| GAP-MOB-VIS-NAV-01 | incident-list banner → demo screen | Nav push `#sc-vis-capture` · back → `incident-list` | screen |
| GAP-MOB-VIS-SCR-01 | Prototype only | Full «Nhận diện mặt đường» · `DES-MOB-VIS-CAPTURE` | screen |
| GAP-MOB-VIS-PHOTO-01 | PhotoRow demo filled | Camera capture + optional upload · `openCapture('vision')` | PhotoRow |
| GAP-MOB-VIS-GPS-01 | Demo ±4 m | Device GPS chốt · gate ≤ 30 m trước detect | rows |
| GAP-MOB-VIS-DET-01 | Demo rows Nứt dọc / Cao | POST `ai-vision/detect` → DefectClass · Severity | card |
| GAP-MOB-VIS-ATTACH-01 | Toast «Đã gắn sự cố» | Primary → POST `incident/incidents` + DetectionId | CTA |
| GAP-MOB-VIS-SKIP-01 | iOS «Bỏ qua» | Secondary dismiss · back list | CTA |
| GAP-MOB-VIS-DUAL-01 | Android thiếu label + Bỏ qua | Design dual parity iOS | dual |
| GAP-MOB-VIS-PACK-01 | scan `sheet` · demo screen | packKind=`sheet` · surface screen — Design/PO chốt | meta |
| GAP-MOB-VIS-DATA-01 | — | Mobile.Bff detect + uploads + incident | BFF |

**Không** đổi (OUT pack): `cam-patrol` finder · `det-hitl` · `incident-create` form · `cam-view` · web AiVision Kind B list · Twin/ONNX local · `ai-asset-detect`.

**Reuse:** domain AiVision · Incident · `DetectAiVisionRequest` · `AiVisionDetectionDto` · `CreateIncidentRequest` · photo-capture GPS pipeline (guide).

## Tech factors

| Factor | P1 | Notes |
|--------|----|-------|
| GPS | **yes** | Chốt vị trí · accuracy · deny → `DES-MOB-GPS-DENY` · gate **> 30 m** chặn detect · **cấm** fake / gõ tay |
| Camera | **yes** | Still capture PhotoRow · **không** continuous finder (cam-patrol) |
| Offline | yes | Detect/attach fail → queue / `patrol-offline` · **cấm** fake SC |
| Map | n/a | Không embed map · loc = label Route/Km |
| Biometric | n/a | |
| Push | n/a | |

## § Tab index

`tabs: none` trên surface — **không** segment riêng (`GAP-TAB-01`). Shell Tab 5: tab **`incident`** (Vấn đề) active khi đứng `#sc-vis-capture` (`data-tab="incident"`). Entry từ `incident-list` banner.

## § Demo dual

Cùng title «Nhận diện mặt đường» · cùng PhotoRow + `#i-camera` · cùng rows Loc `QL.1 · Km 1556+050` · ±4 m · Phân loại `Nứt dọc` · Mức `Cao` + badge · cùng primary «Gắn sự cố» · toast «Đã gắn sự cố».  
iOS: section «Ảnh hiện trường» · back label «Vấn đề» · secondary «Bỏ qua».  
Android: icon-btn chevron only · **thiếu** section-label + «Bỏ qua» → **GAP-MOB-VIS-DUAL-01** (Design chốt parity).  
**Cấm** invent icon — entry banner `#i-camera` (đã có).

## controlHint — `#sc-vis-capture` (`DES-MOB-VIS-CAPTURE`)

| Field | VN | controlHint | Size | Kit | Notes |
|-------|----|-------------|------|-----|-------|
| navBack | Vấn đề | BackButton | 16 | `LinmTopBar` leading `#i-chevron-left` | `go('incident-list')` |
| title | Nhận diện mặt đường | TopBar title | 17 | `LinmTopBar` | fixed |
| sectionPhoto | Ảnh hiện trường | SectionLabel | **13** | | iOS demo · Android GAP dual |
| photos | (slots) | PhotoRow | — | camera slot `#i-camera` | `openCapture('vision')` · filled preview |
| rowLoc | Vị trí đã chốt / QL.1 · Km … | ListRow readonly | 13 / ≥16 | `LinmListRow` | GPS + optional session Route/Km |
| rowAcc | Sai số định vị / ±{n} m | ListRow readonly | 13 / ≥16 | `LinmListRow` | device accuracyM |
| rowClass | Phân loại / {DefectClass} | ListRow readonly | 13 / ≥16 | `LinmListRow` | bind detect |
| rowSev | Mức / {Severity} | ListRow + Badge | 13 / ≥16 | `LinmListRow` · badge | bind Severity · color map |
| btnAttach | Gắn sự cố | PrimaryButton | 16 | `LinmPrimaryButton` | submit · POST incident · toast |
| btnSkip | Bỏ qua | SecondaryButton | 16 | `LinmSecondaryButton` | dismiss · `go('incident-list')` · dual GAP |
| toastOk | Đã gắn sự cố | Toast | 13–16 | `LinmToast` | sau attach |
| toastGpsBlock | (thiếu GPS / > 30 m) | Toast | 13–16 | `LinmToast` | chặn detect |
| gpsDeny | (reuse) | Modal | 17/13 | `DES-MOB-GPS-DENY` | khi deny |

### Entry (parent chrome — không control riêng slug)

| Field | VN | controlHint | Kit | Notes |
|-------|----|-------------|-----|-------|
| bannerVis | Nhận diện mặt đường · Chụp + định vị → gắn sự cố | BannerButton | `.vn-banner` `#i-camera` | incident-list · `go('vis-capture')` |

### Severity display map (demo)

| Severity | Badge |
|----------|-------|
| Cao | orange |
| Nghiêm trọng | red (reuse incident) |
| Trung bình / Thấp | muted / green |

## UNCLEAR

**none** — demo + guide + live detect DTO chốt flow · dual Android = GAP Design (không UNCLEAR UI iOS).

## Handoff → PO

| Field | Value |
|-------|-------|
| feature | `vis-capture` |
| control-hint | **PASS** · file này |
| real-data | **PASS** · `vis-capture-real-data.md` |
| bff | **PASS** · `vis-capture-bff-endpoints.md` |
| action-tree | **PASS** · `vis-capture-action-tree.md` |
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
| generatedAt | `2026-08-29T08:28:20.000Z` |
| versionGate | rechecked |
| contentHash | sha256:vis-capture-control-hint-20260829 |
| ctxHash | sha256:vis-capture-ctx-20260829 |
| demoHash | sha256:mobile-p1-sc-vis-capture-20260829 |
| taskId | `task_086ba802` |

---
<!-- Version meta: skillId=agent-data-analy-mobile skillVersion=2026.08.25.01 schemaVersion=2 workflowVersion=2026.08.25.01 rulesVersion=2026.08.25.2 versionGate=rechecked -->
