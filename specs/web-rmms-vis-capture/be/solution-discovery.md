# SA — Solution — web-rmms-vis-capture

> Status: **confirmed** · autoApprove ON · task `task_75570f6c` · 2026-09-26T04:35:00.000Z  
> **Cấm** ERP.* · **cấm** invent `web-rmms-vis-capture` / VisCapture controller/path · **cấm** fake GPS/class · **cấm** on-device detect · **cấm** invent Lat on Create · **cấm** Step 4b / migration ở role SA · **cấm** Write MFE/native · **cấm** Web BFF base từ Mobile MFE · **cấm** MFE gọi `:5311` / `:5301`.

| | |
|--|--|
| Feature | `web-rmms-vis-capture` |
| Title | Nhận diện sự cố |
| Role | `sa` |
| packKind | `list` |
| changeScope | `new_page` |
| formPattern | Mobile full VIS · phone ≤430 · N/A ERP Modal/Slideout · Android 1-1 · useFormOptions |
| domain | **Incident** (`incident`) · cite **AiVision** (uploads+detect+detections) · **Patrol** (sessions optional) |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` · route `/web-rmms-vis-capture` |
| mfeStdUrl | `http://localhost:9301/web-rmms-vis-capture` |
| productRoute | `/incident/vis` |
| nativeCite | SCREENS `/incident/vis` · Android `#sc-vis-capture` · DES-MOB-VIS-CAPTURE |
| be | `D:/AI-QLBD/Linm.RMMS.WebService` |
| BFF | Mobile.Bff `http://localhost:5202` · prefix `mobile-bff/api/v1` |
| contentHash | `sha256:96ffc2878a4c6ad0367088c699203864c2e711b055ca68da8a59d696c8d4de97` |
| skillVersion | `2026.09.05.03` |
| solution_confirm | **approve** (autoApprove) |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-vis-capture/ui/prototype/index.html` |

## 1. Domain / ownership

| Item | Decision |
|------|----------|
| DOMAIN-MAP slug | `web-rmms-vis-capture` → **Incident** / `incident` |
| Rationale | Core DoD = attach `POST incident/incidents` sau detect · product `/incident/vis` · peer INC-L entry — **không** domain VisCapture mới; detect/uploads cite AiVision · ca stamp optional cite Patrol |
| Cite peers | `web-rmms-incident` · `web-rmms-cam-patrol` · `web-rmms-field-reflect` · CTX vis-capture / ai-vision · offline peer |
| API folder | **reuse** Incident · AiVision uploads/detect/detections · Patrol sessions — **no new** VisCapture controller |
| **Cấm** | invent `web-rmms-vis-capture/*` · ERP.* · Web BFF base · Me/feedback/cam-view · cam-patrol/det-hitl · journal B–E · on-device · fake coords |

**DOMAIN-MAP row (applied):**

| Feature slug | Domain Pascal | kebab |
|--------------|---------------|-------|
| `web-rmms-vis-capture` | Incident | `incident` · Live uploads+detect+detections+sessions+incidents · cite AiVision/Patrol · MFE `Linm.Web.RMMS.Mobile` `/web-rmms-vis-capture` · **cấm** invent VisCaptureController |

→ resolves **UNCLEAR-DOMAIN-MAP-VIS** / GAP-DOMAIN-MAP-VIS.

## 2. FormMode ↔ API

Single surface **VIS** (photo+GPS → detect → attach|skip). GPS deny → block Detect/Attach/geo. Acc≤30 m gates detect. Sessions **optional** (empty → loc GPS-only · **cấm** itemsOrDemo).

| Mode / zone | UI | API | Write | Notes |
|-------------|----|-----|-------|-------|
| VIS chrome | page shell | — | — | phone ≤430 · DES-MOB-VIS-CAPTURE · title «Nhận diện sự cố» |
| photos | PhotoRow | `POST ai-vision/uploads/init` → PUT object → `complete` | ImageFileId / ImageUrl | empty → block detect · FileService cite |
| rowLoc | ListRow RO | GPS + optional `GET patrol/sessions` | RouteName/Km display | empty session → GPS-only · **cấm** bịa Route |
| rowAcc | ListRow RO | device AccuracyM | Detect `AccuracyM` | Acc>30 → block detect |
| gpsLock | GPS | `navigator.geolocation` | Lat/Lng/HasGps | deny → block · **cấm** fake |
| detect | Button/auto | `POST ai-vision/detect` | DetectAiVisionRequest | Engine=P1 · photo+GPS Acc≤30 |
| rowClass | ListRow RO | detect DTO | DefectClass display | **cấm** fake class |
| rowSev | ListRow+Badge | detect DTO | Severity display | peer badge map |
| btnAttach | Button primary | `POST incident/incidents` | CreateIncidentRequest | DetectionId · HasGps=true · **no Lat** |
| btnSkip | Button secondary | — | UI dismiss | dual PASS Design · **no** POST |
| Auth gate | staff | JWT (shell) | guest → login peer | shell owns |

### DEC-DETECT-HOST — Live cite (HARD · GAP-DETECT-HOST)

| Layer | Decision |
|-------|----------|
| Client | Mobile MFE → **chỉ** Mobile.Bff `:5202` `mobile-bff/api/v1/ai-vision/**` |
| Downstream | RMMS AiVision API `POST api/v1/ai-vision/detect` · controller `AiVisionOpsController` |
| Infer host | DOMAIN-MAP Wave 2+ · `ServiceEndpoints:Vision` / `AiVisionBaseUrl` = **`Linm.RMMS.Vision` `:5311`** |
| **Cấm** | on-device ML · MFE gọi `:5311` · RMMS infer qua `Linm.AI.WebService` `:5301` · invent detect path |

### DEC-DETECT-DTO — Live cite

**DTO:** `DetectAiVisionRequest` · `api/domains/ai-vision/.../DTOs/AiVisionDetectionDtos.cs`  
**Controller:** `AiVisionOpsController` · `POST api/v1/ai-vision/detect`

| Field | Role VIS | Notes |
|-------|----------|-------|
| `ImageFileId` / `ImageUrl` | **preferred** sau uploads* | PhotoRow complete → FileService guid |
| `ImageBase64` | optional alt | P1 stub · prefer uploads path on VIS |
| `Lat` / `Lng` | **required** gate | device fix · **cấm** 0,0/fake |
| `AccuracyM` | **required** gate | ≤30 m else block · request-only (MIG n/a) |
| `Engine` | **fixed** `P1` | LOOKUP_STATIC / useFormOptions |
| `Note` / `VideoRef` | out VIS P1 | — |

**Response bind** `AiVisionDetectionDto`:

| Field | UI | Notes |
|-------|-----|-------|
| `Id` | Hidden → `DetectionId` attach | Guid |
| `DefectClass` / `Severity` / `Code` | rowClass / rowSev | display |
| `Lat`/`Lng`/`RouteLabel`/`ImageUrl` | optional RO | — |
| `Score` | **OUT ship** optional | demo only · không % bắt buộc |

**Optional refresh:** `GET api/v1/ai-vision/detections/{id}` · 404 toast.

### DEC-PGC-BE-01 — CreateIncidentRequest (HARD)

**DTO:** `CreateIncidentRequest` · Incident Models DTOs  
**Controller:** `IncidentsController` · `POST api/v1/incident/incidents`  
**Live:** có `DetectionId` · `HasGps` · **không** cột `Lat`/`Lng` trên Create.

| Field | Source map (VIS) |
|-------|------------------|
| `DetectionId` | detect.`Id`.ToString() · **required** attach path |
| `HasGps` | **true** (GPS gate passed) · **không** invent Lat trên Create |
| `Title` | detect.`DefectClass` (or Code) |
| `IncidentType` | detect.`DefectClass` / LOOKUP cite |
| `Severity` | detect.`Severity` opt |
| `RouteName` | session RouteLabel **hoặc** GPS-derived label / RouteLabel detect · empty session → detect.`RouteLabel` hoặc toast+block if validator* |
| `KmStart` | session km opt |
| `Status` | `new` |
| `RequestedAt` | client UTC now |
| `MediaIds` | FileService guids từ uploads · max 10 · **cấm** full URL only |
| `Description` | opt |

**Skip:** dismiss only · **cấm** silent invent POST.

### Live endpoints (HARD — real-data §B)

| Method | BFF path (client) | Downstream | Response bind | Status |
|--------|-------------------|------------|----------------|--------|
| POST | `mobile-bff/api/v1/ai-vision/uploads/init` | AiVisionUploads | InitUploadResponse | **Live** |
| PUT | upload object URL (init) | FileService / uploads | — | **Live** |
| POST | `mobile-bff/api/v1/ai-vision/uploads/complete` | AiVisionUploads | CompleteUploadResponse | **Live** |
| GET | `mobile-bff/api/v1/patrol/sessions` | Patrol | optional Route/Km · empty → GPS-only | **Live** |
| POST | `mobile-bff/api/v1/ai-vision/detect` | AiVisionOps → Vision `:5311` | AiVisionDetectionDto | **Live** |
| GET | `mobile-bff/api/v1/ai-vision/detections/{id}` | AiVisionDetections | optional refresh | **Live** |
| POST | `mobile-bff/api/v1/incident/incidents` | Incident | toast · nav peer list | **Live** |

- Client base: `http://localhost:5202` + `mobile-bff/api/v1` — **không** gọi `web-bff` từ Mobile MFE.
- **API Mới:** none · **migration:** none · **entity mới:** none.
- Labels: `useFormOptions()` · **cấm** hardcode VN.
- Offline fail: peer `web-rmms-offline` queue cite · **cấm** invent OfflineQueueController.

## 3. BFF vs API

| Layer | Role for VIS |
|-------|----------------|
| Mobile.Bff `:5202` | sole FE entry · proxy ai-vision / incident / patrol · auth |
| RMMS.Service.Api | uploads · detect · detections · incidents · sessions — **no new** VisCapture controller |
| Linm.RMMS.Vision `:5311` | detect infer host (via API/BFF ServiceEndpoints) · **cấm** MFE direct |
| web-bff | cite only · **not** Mobile client base |

Fail: 503/network → toast + retry · validation → field/toast — **cấm** mock SSOT · **cấm** fake class on detect fail · **cấm** itemsOrDemo sessions.

## 4. Entity / migration

| Item | Decision |
|------|----------|
| Tables | none (reuse upload sessions · ai-vision detections · incidents · patrol_sessions) |
| EF migration | **skip** (AccuracyM request-only · Create no Lat — GAP-PGC-BE-01 accepted as Live contract) |
| Step 4b | **skip** at SA · Dev only if Live gap (not expected) |
| Upload | Live AiVision uploads* · FileService — **cấm** invent media controller |

## 5. FE surface (SA contract — Dev implements)

| Zone | Contract |
|------|----------|
| VIS | PhotoRow + GPS rows + detect + result + Attach/Skip · phone 430 · Android 1-1 · `#sc-vis-capture` |
| Required detect | photo (uploads*) · GPS Acc≤30 · Engine=P1 · Lat/Lng |
| Attach | DetectionId + HasGps=true + Title/RouteName/IncidentType/Status/RequestedAt · **no Lat** |
| Skip | dismiss · dual section «Ảnh hiện trường» + Skip (Design DUAL-01) |
| REMOVED | `me*` · feedback · cam-view · cam-patrol/det-hitl · journal B–E |
| DES-GRID / LinErpListFilterBar | **N/A** phone |
| Route | `mfeStdRoute=/web-rmms-vis-capture` · product `/incident/vis` |

## 6. Risks / open

| id | Status | Owner |
|----|--------|-------|
| UNCLEAR-DOMAIN-MAP-VIS | **resolved** SA · DOMAIN-MAP row applied | — |
| UNCLEAR-DETECT-HOST | **resolved** SA · Vision `:5311` via BFF/API · cấm on-device / `:5301` | — |
| UNCLEAR-PGC-BE-01 | **resolved** SA · HasGps + DetectionId · no Lat on Create | — |
| UNCLEAR-DUAL-01 | resolved Design | — |
| UNCLEAR-TITLE-01 / PACK-01 | resolved PO | — |
| UNCLEAR-SESS | **open** → Dev/QA · empty sessions toast · GPS-only loc · cấm itemsOrDemo | Dev/QA |

## 7. Handoff

| Next | Packet |
|------|--------|
| team-lead | FormMode↔API table · Live endpoints · DOMAIN-MAP · DEC-DETECT-HOST · DEC-PGC-BE-01 · compact |
| Dev | MFE Mobile · VITE_MOBILE_API_URL `:5202` · GPS gate · uploads* · detect · attach · Skip dismiss |
| QA | GPS deny · Acc>30 · skip · attach · no fake · no web-bff · no on-device · no Me |

`solution_confirm=approve` · autoApprove ON · next `/agent-team-lead` · **roleOnly stop** (GAP-PKT-ROLE-01).
