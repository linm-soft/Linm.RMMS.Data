# Data-analy — controlHint — web-rmms-vis-capture

| Field | Value |
|-------|-------|
| feature | `web-rmms-vis-capture` |
| title | Nhận diện sự cố |
| packKind | `list` |
| changeScope | `new_page` |
| mode | `feature_context` |
| status | `done` |
| skillId | `agent-data-analy` |
| skillVersion | `2026.09.05.03` |
| schemaVersion | `1` |
| workflowVersion | `2026.09.19.02` |
| rulesVersion | `2026.09.25.2` |
| versionGate | `ok` |
| contentHash | `sha256:96ffc2878a4c6ad0367088c699203864c2e711b055ca68da8a59d696c8d4de97` |
| analyzedAt | `2026-09-25T21:24:17.563Z` |
| demo | **N/A** |
| realData | `specs/_data-analy/features/web-rmms-vis-capture-real-data.md` |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · **AiVision** + Incident · Patrol cite · **cấm ERP.*** |
| uiRepo | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| mfeStdUrl | `http://localhost:9301/web-rmms-vis-capture` |
| mfeStdRoute | `/web-rmms-vis-capture` |
| productRoute | `/incident/vis` |
| taskId | `task_9af023ae` |
| phoneFrame | `max-width: 430px` |
| formPattern | Mobile full · Android 1-1 `#sc-vis-capture` · **không** ERP Modal/Slideout Kind B desktop |
| bff | `Linm.RMMS.Mobile.Bff` · `VITE_MOBILE_API_URL=http://localhost:5202/mobile-bff/api/v1` · **cấm** web-bff |
| priorPeer | `vis-capture` · `web-rmms-incident` · photo-geo · offline · ai-vision |

> Data-analy **đề xuất** controlHint. Design **chốt** control-map + prototype reviewUrl. SA **cite** Live paths · **cấm** invent `web-rmms-vis-capture` controller.  
> Nhãn UI: `useFormOptions()` / copy key — **cấm** hardcode tiếng Việt trên form.  
> **Cấm** tab Cá nhân · **cấm** iOS/Android edit · **cấm** fake GPS · **cấm** journal/kết ca/tồn tại/tần suất (B–E).

## Sources

| Source | Path | note |
|--------|------|------|
| CTX | `docs/context/features/web-rmms-vis-capture.md` | **created this run** · hash gate |
| Screens | `docs/plan/web-rmms-mobile/SCREENS.md` | `/incident/vis` Nhận diện |
| Plan/task | `PLAN.md` · TASKS `T-W4-04` | `VisCaptureView` |
| Peer CTX | `vis-capture.md` · `ai-vision.md` · `incident-list.md` | DES + Live detect/attach |
| Peer | web-rmms-incident · photo-geo · offline | banner entry · capture · queue |
| DOMAIN-MAP | AiVision (+ Incident/Patrol cite) | **GAP** slug `web-rmms-vis-capture` |
| Prototype | `specs/mobile-p1/ui/prototype/android/index.html` `#sc-vis-capture` · `DES-MOB-VIS-CAPTURE` | Design 1-1 only · **không** demo SSOT ship |

## Screens (ids)

| id | route | surface |
|----|-------|---------|
| VIS | `/incident/vis` · std `/web-rmms-vis-capture` | PhotoRow · GPS rows · detect result · Attach/Skip |
| INC-L* | `/incident` | peer entry banner · back |
| CAP* | `/capture` | peer `openCapture('vision')` |

**Out:** Me* · feedback · cam-view · cam-patrol finder · det-hitl · journal/kết ca/tồn tại/tần suất (B–E) · invent VisCapture*Controller · web-bff client · on-device detect.

## ControlHint inventory

### VIS — Capture / Detect / Attach

| uiField | screen | controlHint | catalogKind / notes |
|---------|--------|-------------|---------------------|
| navBack | VIS | BackButton | copy key «Vấn đề» · nav peer incident list |
| screenTitle | VIS | Text | copy key «Nhận diện sự cố» / peer «Nhận diện mặt đường» · useFormOptions |
| sectionPhoto | VIS | SectionLabel | copy key «Ảnh hiện trường» · Android parity GAP-DUAL |
| photos | VIS | PhotoRow | camera `#i-camera` · `openCapture('vision')` · uploads init/PUT/complete |
| rowLoc | VIS | ListRow RO | GPS + optional `GET patrol/sessions` → Route/Km |
| rowAcc | VIS | ListRow RO | device `AccuracyM` display |
| detect | VIS | Button / auto | `POST ai-vision/detect` · GPS + accuracy ≤ 30 m |
| rowClass | VIS | ListRow RO | `DefectClass` từ detect |
| rowSev | VIS | ListRow + Badge | `Severity` từ detect |
| btnAttach | VIS | Button primary | `POST incident/incidents` · `DetectionId` · `HasGps=true` |
| btnSkip | VIS | Button secondary | dismiss · back list · dual GAP Android |
| gpsLock | VIS | GPS | `navigator.geolocation` · deny → disable Detect/Attach/geo |
| toast.ok | VIS | Toast | attach ok copy key |
| toast.gpsBlock | VIS | Toast | thiếu GPS / > 30 m |
| toast.fail | VIS | Toast | load/detect/attach error · **cấm** `window.alert` |
| offlineQueue | VIS | — | peer `web-rmms-offline` · **cấm** fake SC |

## Filter / grid (desktop HARD)

| | |
|--|--|
| LinErpListFilterBar / DES-GRID-* | **N/A** — phone full screen · **không** Kind B desktop grid primary |

## GPS

| Màn | Rule |
|-----|------|
| VIS | **HARD** deny → chặn Detect · Attach · geo capture · **cấm** fake |
| Detect | accuracy > 30 m → không POST detect |
| Attach | `HasGps=true` khi có fix · Title/Type từ DefectClass · tuyến từ session |

## API (cite Live — SA confirm DTO)

| Method | Path | Note |
|--------|------|------|
| POST | `ai-vision/uploads/init` · PUT `{id}/object` · complete | media |
| POST | `ai-vision/detect` | Lat/Lng/AccuracyM |
| GET | `ai-vision/detections/{id}` | optional |
| GET | `patrol/sessions` | optional stamp |
| POST | `incident/incidents` | attach + DetectionId |

App base: `{BffBase}/mobile-bff/api/v1`. **Cấm** invent path theo slug `web-rmms-vis-capture`.

## UNCLEAR

| id | Issue | Action |
|----|-------|--------|
| UNCLEAR-DOMAIN-MAP-VIS | DOMAIN-MAP chưa có row `web-rmms-vis-capture` | SA thêm · AiVision (+ Incident/Patrol) · MFE `/web-rmms-vis-capture` |
| UNCLEAR-DUAL-01 | GAP-MOB-VIS-DUAL-01 Android thiếu section + Bỏ qua | Design dual parity Android 1-1 |
| UNCLEAR-TITLE-01 | Packet title «Nhận diện sự cố» vs peer/demo «Nhận diện mặt đường» | PO chốt copy key · useFormOptions |
| UNCLEAR-PACK-01 | STATUS packKind=`list` vs peer native `screen` | PO giữ `list` queue · surface vẫn full `#sc-vis-capture` |
| UNCLEAR-DETECT-HOST | P1 detect hard-default / Vision host | SA cite Live · **cấm** invent path · **cấm** on-device |
| UNCLEAR-SESS | sessions empty | live-only · toast · **cấm** itemsOrDemo |
| UNCLEAR-PGC-BE-01 | CreateIncidentRequest không cột Lat | HasGps + DetectionId · SA cite Live |

## Handoff

| Role | Dùng |
|------|------|
| PO | VIS DoD · GPS gate · live detect/attach · no Me · useFormOptions · title key |
| Design | Phone 430 · Android 1-1 `#sc-vis-capture` · zones VIS · dual Skip · prototype + reviewUrl |
| SA | Cite Live ai-vision(+incident/patrol) · Mobile.Bff · DOMAIN-MAP row · **cấm** ERP.* |
| TL/Dev | Wire Mobile MFE only · BFF `:5202` · GPS + live detect · **cấm** web-bff |
| QA | GPS deny · accuracy>30 · skip · attach · no fake coords · no Me · no web-bff |

## Version meta

`skillVersion=2026.09.05.03` · `schemaVersion=1` · `contentHash=sha256:96ffc2878a4c6ad0367088c699203864c2e711b055ca68da8a59d696c8d4de97` · `rulesVersion=2026.09.25.2` · `analyzedAt=2026-09-25T21:24:17.563Z`
