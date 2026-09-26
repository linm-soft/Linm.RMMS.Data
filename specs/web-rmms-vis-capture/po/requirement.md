# PO — requirement — web-rmms-vis-capture

| Field | Value |
|-------|-------|
| feature | `web-rmms-vis-capture` |
| title | Nhận diện sự cố |
| packKind | `list` |
| changeScope | `new_page` |
| lane | `web` |
| status | `confirmed` |
| skillId | `agent-po` |
| skillVersion | `2026.09.05.03` |
| schemaVersion | `1` |
| workflowVersion | `2026.09.19.02` |
| rulesVersion | `2026.09.25.2` |
| versionGate | `ok` |
| contentHash | `sha256:96ffc2878a4c6ad0367088c699203864c2e711b055ca68da8a59d696c8d4de97` |
| writtenAt | `2026-09-26T04:27:00.000Z` |
| demo | **N/A** |
| formPattern | Mobile full · phone `max-width: 430px` · Android 1-1 `#sc-vis-capture` · **không** ERP Modal/Slideout Kind B |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| mfeStdRoute | `/web-rmms-vis-capture` |
| mfeStdUrl | `http://localhost:9301/web-rmms-vis-capture` |
| productRoute | `/incident/vis` |
| be | `D:/AI-QLBD/Linm.RMMS.WebService` · AiVision + Incident (+ Patrol cite) · **cấm ERP.*** |
| bff | `Linm.RMMS.Mobile.Bff` · `VITE_MOBILE_API_URL=http://localhost:5202/mobile-bff/api/v1` · **cấm** web-bff client |
| priorAnaly | `_data-analy/features/web-rmms-vis-capture-control-hint.md` · `web-rmms-vis-capture-real-data.md` · hash skip |
| taskId | `task_82c59634` |
| citeTask | `T-W4-04` · `VisCaptureView` |

> Nhãn UI: `useFormOptions()` / copy key — **cấm** hardcode tiếng Việt trên form.  
> **Cấm** re-scan demo · **cấm** invent slug controller · **cấm** fake GPS · **cấm** itemsOrDemo · **cấm** on-device detect.

## 1. Goal / persona / DoD

| | |
|--|--|
| Goal | Màn **Nhận diện sự cố** (`/incident/vis`): PhotoRow + GPS → `POST ai-vision/detect` → phân loại/mức → **Gắn sự cố** hoặc **Bỏ qua** — 1-1 Android `#sc-vis-capture`. |
| Persona | Tuần đường (BDTX) · Tuần kiểm (Khu/VP) — Field; dưới tab Incident. |
| Entry | Banner list Incident «Nhận diện» → `/incident/vis` · peer Home/AI hub · std `/web-rmms-vis-capture`. |
| DoD P1 | photos · gpsLock · detect · rowClass/rowSev · btnAttach · btnSkip · GPS deny gate · accuracy ≤ 30 m · Mobile.Bff only · useFormOptions · **không** Me* · **không** fake coords. |
| Out P1 | Me*/feedback/cam-view · cam-patrol finder · det-hitl · journal/kết ca/tồn tại/tần suất (B–E) · invent VisCapture*Controller · web-bff · on-device detect · ERP Kind B desktop grid. |

## 2. Screens / zones

| id | productRoute | std | Surface / zones |
|----|--------------|-----|-----------------|
| VIS | `/incident/vis` | `/web-rmms-vis-capture` | navBack · screenTitle · sectionPhoto · photos · rowLoc · rowAcc · detect · rowClass · rowSev · btnAttach · btnSkip · gpsLock · toast.* · offlineQueue |
| INC-L* | `/incident` | peer `web-rmms-incident` | entry banner · back target |
| CAP* | `/capture` | peer photo-geo | `openCapture('vision')` overlay |

\* Peer: deep-link / entry OK · **không** invent CRUD controller slug này.

**reviewUrl** = Design chốt prototype.  
**peerStdUrl** = `http://localhost:9301/web-rmms-vis-capture`.  
**DES-GRID / LinErpListFilterBar** = **N/A** — phone full screen (không Kind B desktop primary).  
**Prototype zone** = `#sc-vis-capture` · `DES-MOB-VIS-CAPTURE` (Design 1-1 only).

## 3. Grid AC (packKind=list)

> packKind=`list` giữ queue STATUS · surface = **full screen capture** (không CardList desktop). Grid AC map flow VIS.

| AC id | Rule | Pass |
|-------|------|------|
| AC-GRID-01 | VIS full screen phone 430 · zones inventory control-hint · **không** LinErpListFilterBar / DES-GRID-* Kind B | N/A desktop HARD |
| AC-GRID-02 | PhotoRow + GPS rows RO (rowLoc/rowAcc) trước detect · empty photo → chặn detect | PhotoRow + GPS |
| AC-GRID-03 | Detect result: rowClass=`DefectClass` · rowSev=`Severity`+Badge · **cấm** fake class/severity | Live detect DTO |
| AC-GRID-04 | Empty/error: toast.fail / toast.gpsBlock · **cấm** `window.alert` · **cấm** itemsOrDemo | empty/error |
| AC-GRID-05 | Attach/Skip CTA · navBack → peer INC-L · offlineQueue = peer `web-rmms-offline` | nav + peer |

## 4. Capture / Detect / Attach AC (VIS)

| AC id | Rule | Pass |
|-------|------|------|
| AC-VIS-01 | screenTitle copy key **«Nhận diện sự cố»** (PO chốt TITLE-01) · sectionPhoto · navBack «Vấn đề» · toàn bộ nhãn `useFormOptions()` | copy key |
| AC-VIS-02 | photos: camera / `openCapture('vision')` · uploads init → PUT object → complete → media | Live uploads* |
| AC-VIS-03 | gpsLock: `navigator.geolocation` · deny → disable Detect + Attach + geo capture · **cấm** fake lat/lng | GPS HARD |
| AC-VIS-04 | detect: `POST ai-vision/detect` chỉ khi có ảnh + GPS fix + AccuracyM ≤ 30 · >30 → toast.gpsBlock · **không** POST | Live |
| AC-VIS-05 | rowLoc: GPS label + optional Route/Km từ `GET patrol/sessions` · empty session → GPS-only · **cấm** bịa Route | UNCLEAR-SESS |
| AC-VIS-06 | rowAcc: hiển thị AccuracyM thiết bị | device |
| AC-VIS-07 | btnAttach: `POST incident/incidents` · `DetectionId` · `HasGps=true` · Title/Type từ DefectClass · tuyến session · Status=new · RequestedAt · **không** invent Lat trên Create (PGC-BE-01) · toast.ok → back INC-L | Live |
| AC-VIS-08 | btnSkip: dismiss local · clear result · back INC-L · dual parity Android (DUAL-01 Design) | skip |
| AC-VIS-09 | Optional `GET ai-vision/detections/{id}` reload · fail → toast.fail · **cấm** on-device detect | Live |
| AC-VIS-10 | offlineQueue = peer `web-rmms-offline` · **không** invent OfflineQueueController | peer |

## 5. Leave / Out of scope

| Leave | Note |
|-------|------|
| Me* · feedback · cam-view | Out P1 |
| cam-patrol finder · det-hitl | Out |
| journal / kết ca / tồn tại / tần suất (B–E) | Out pack · peer mobile-b…e |
| invent controller/path `web-rmms-vis-capture/*` | SA cite Live AiVision/Incident |
| ERP.* / web-bff client base | HARD cấm |
| iOS/Android native edit | Web Mobile MFE only |
| on-device detect / demo-json / fake GPS / itemsOrDemo | HARD cấm |
| Desktop Kind B grid primary | N/A phone |

## 6. FormMode ↔ API

| Mode | API | Notes |
|------|-----|-------|
| Upload | `POST ai-vision/uploads/init` · PUT `{id}/object` · `complete` | media |
| Detect | `POST ai-vision/detect` | Lat/Lng/AccuracyM · GPS≤30 |
| Detection | `GET ai-vision/detections/{id}` | optional |
| Session | `GET patrol/sessions` | optional Route/Km stamp |
| Attach | `POST incident/incidents` | DetectionId · HasGps · no Lat column |

App base: `{BffBase}/mobile-bff/api/v1`. SA confirm DTO Live · DOMAIN-MAP row (UNCLEAR-DOMAIN-MAP-VIS). **Cấm** invent path theo slug.

## 7. PO decisions (closed)

| id | Decision |
|----|----------|
| TITLE-01 | Copy key title = **«Nhận diện sự cố»** (CTX/packet SSOT). Peer «Nhận diện mặt đường» = native/legacy label — **không** dùng làm primary title slug này. |
| PACK-01 | Giữ `packKind=list` · surface full `#sc-vis-capture` (không đổi queue kind). |
| changeScope | `new_page` confirmed. |

## 8. UNCLEAR → handoff

| id | Owner | Action |
|----|-------|--------|
| UNCLEAR-DOMAIN-MAP-VIS | SA | Thêm DOMAIN-MAP row `web-rmms-vis-capture` · AiVision (+ Incident/Patrol) · MFE `/web-rmms-vis-capture` |
| UNCLEAR-DUAL-01 | Design | Android 1-1: section «Ảnh hiện trường» + CTA «Bỏ qua» (GAP-MOB-VIS-DUAL-01) |
| UNCLEAR-DETECT-HOST | SA | Cite Live detect host · **cấm** invent path · **cấm** on-device |
| UNCLEAR-SESS | Dev/QA | Empty sessions → GPS-only + toast · **cấm** itemsOrDemo |
| UNCLEAR-PGC-BE-01 | SA | CreateIncidentRequest: HasGps + DetectionId · **không** Lat column nếu Live không có |

## 9. Handoff Design

| Need | Note |
|------|------|
| Prototype + reviewUrl | Phone 430 · Android 1-1 `#sc-vis-capture` · zones VIS |
| control-map | Copy inventory controlHint · dual Skip/sectionPhoto |
| N/A | DES-GRID / LinErpListFilterBar Kind B |
| Labels | useFormOptions keys only · title «Nhận diện sự cố» |

## Version meta

`skillVersion=2026.09.05.03` · `schemaVersion=1` · `contentHash=sha256:96ffc2878a4c6ad0367088c699203864c2e711b055ca68da8a59d696c8d4de97` · `rulesVersion=2026.09.25.2` · `writtenAt=2026-09-26T04:27:00.000Z` · `autoApprove=ON`
