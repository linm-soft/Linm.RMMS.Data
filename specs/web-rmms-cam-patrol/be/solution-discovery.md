# SA — Solution — web-rmms-cam-patrol

> Status: **confirmed** · autoApprove ON · task `task_c2290c20` · 2026-09-26T01:20:00.000Z  
> **Cấm** ERP.* · **cấm** invent `cam-patrol` controller/path · **cấm** fake GPS/class · **cấm** score % ship · **cấm** Step 4b / migration ở role SA · **cấm** Write MFE/native · **cấm** Web BFF base từ Mobile MFE.

| | |
|--|--|
| Feature | `web-rmms-cam-patrol` |
| Title | Camera tuần |
| Role | `sa` |
| packKind | `list` |
| changeScope | `new_page` |
| formPattern | Mobile full CP-01 · phone ≤430 · N/A ERP Modal/Slideout · Android 1-1 · useFormOptions / `cam.*` |
| domain | **Patrol** (`patrol`) · cite **AiVision** (detect) · **Incident** (confirm) |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` · route `/web-rmms-cam-patrol` |
| mfeStdUrl | `http://localhost:9301/web-rmms-cam-patrol` |
| nativeRouteCite | SCREENS `/field/cam` · Android `#sc-cam-patrol` · DES-MOB-CAM-PATROL |
| be | `D:/AI-QLBD/Linm.RMMS.WebService` |
| BFF | Mobile.Bff `http://localhost:5202` · prefix `mobile-bff/api/v1` |
| contentHash | `sha256:cd46c9486c0a3fe71165c27906508a1608ba46cca1351fe9df832ab7b2efa68c` |
| skillVersion | `2026.09.05.03` |
| solution_confirm | **approve** (autoApprove) |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-cam-patrol/ui/prototype/index.html` |

## 1. Domain / ownership

| Item | Decision |
|------|----------|
| DOMAIN-MAP slug | `web-rmms-cam-patrol` → **Patrol** / `patrol` |
| Rationale | Field CP-01 gắn ca `patrol/sessions` stamp · detect cite AiVision · confirm cite Incident — **không** domain CamPatrol mới |
| Cite peers | Field hub (`web-rmms-mobile-a`) · peer CTX `cam-patrol` · AiVision Ops+Detections · Incident create · offline cite only |
| API folder | **reuse** Patrol sessions · AiVision detect/detections · Incident incidents — **no new** CamPatrol controller |
| **Cấm** | invent `cam-patrol/*` · invent controller · ERP.* · Web BFF base · Me/cam-view/feedback · journal B–E · fake coords/class · score % ship |

**DOMAIN-MAP row (applied):**

| Feature slug | Domain Pascal | kebab |
|--------------|---------------|-------|
| `web-rmms-cam-patrol` | Patrol | `patrol` · Live sessions+detect+incident · cite AiVision/Incident · MFE `Linm.Web.RMMS.Mobile` `/web-rmms-cam-patrol` · **cấm** invent CamPatrolController |

→ resolves **DEC-DETECT-DTO** + DOMAIN-MAP gap for slug.

## 2. FormMode ↔ API

Single surface **CP-01** (Create Draft detect → Confirm|Skip). Session **Đang tuần** required. GPS Acc≤30 gates detect/confirm.

| Mode / zone | UI | API | Write | Notes |
|-------------|----|-----|-------|-------|
| CP-01 chrome | page shell | — | — | phone ≤430 · DES-MOB-CAM-PATROL |
| finder | CameraViewfinder | device | — | DES-MOB-CAM-FINDER · frame thật |
| stamp.route/km/type | Text RO | `GET patrol/sessions` filter Đang tuần | display | PatrolType từ ca · empty → block |
| lat/lng/accuracyM | GPS RO | `navigator.geolocation` | body detect + HasGps | Acc≤30 · deny/poor → block · **cấm** fake |
| imageBase64 | CameraCapture | device | `ImageBase64` detect | **required** · fail toast · **cấm** null heuristic |
| detect | Button | `POST ai-vision/detect` | DetectAiVisionRequest | Engine=P1 · → result card |
| detection.* | Text/Chip | detect resp / optional GET | display | **ẩn** Score % ship |
| confirm | Button | `POST incident/incidents` | CreateIncidentRequest | DetectionId · HasGps=true |
| skip | Button | — | UI dismiss | **no** POST · DES-LEAVE discard |
| Auth gate | staff | JWT (shell) | guest → login peer | shell owns |

### DEC-DETECT-DTO — Live cite (HARD)

**Controller:** `AiVisionOpsController` · `POST api/v1/ai-vision/detect` · body `DetectAiVisionRequest`  
**File:** `api/domains/ai-vision/.../DTOs/AiVisionDetectionDtos.cs`

| Field | Role CP-01 | Notes |
|-------|------------|-------|
| `ImageBase64` | **required** | JPEG/PNG base64 frame · GAP-MOB-CAM-FRAME-01 |
| `Lat` / `Lng` | **required** gate | device fix · **cấm** 0,0/fake |
| `AccuracyM` | **required** gate | ≤30 m else block |
| `Engine` | **fixed** `P1` | LOOKUP_STATIC / useFormOptions |
| `ImageUrl` / `ImageFileId` | optional | P1 prefer base64; FileService cite if upload later |
| `Note` / `VideoRef` | out CP-01 | request-only · entity columns deferred |

**Response bind** `AiVisionDetectionDto` (same file):

| Field | UI | Notes |
|-------|-----|-------|
| `Id` | Hidden → `DetectionId` confirm | Guid |
| `DefectClass` / `Severity` / `Code` | Chip/Text | display |
| `Score` | **OUT ship** | DEC-SCORE · demo only `?ship=1` |
| `Lat`/`Lng`/`RouteLabel`/`Engine`/`ImageUrl` | optional stamp | RO |
| `Status`/`DetectedAt` | optional | RO |

**Optional refresh:** `GET api/v1/ai-vision/detections/{id}` · `AiVisionDetectionsController.GetById` · 404 toast.

### Confirm body — Live cite

**Controller:** `IncidentsController` · `POST api/v1/incident/incidents` · `CreateIncidentRequest`  
**Validator:** `Title*` · `RouteName*` · `IncidentType*` (FluentValidation).

| Field | Source map |
|-------|------------|
| `DetectionId` | detect.`Id`.ToString() |
| `HasGps` | **true** (GPS gate passed) |
| `Title` | detect.`DefectClass` (or Code) |
| `RouteName` | session stamp Route |
| `IncidentType` | detect.`DefectClass` / init-data cite |
| `Severity` | detect.`Severity` opt |
| `KmStart` | session km stamp opt |
| `RequestedAt` | client UTC now |
| `Description` / `MediaIds` | opt · ImageFileId if present |

**Skip:** dismiss only · **cấm** silent invent POST.

### Live endpoints (HARD — real-data §B)

| Method | BFF path (client) | Downstream | Response bind | Status |
|--------|-------------------|------------|----------------|--------|
| GET | `mobile-bff/api/v1/patrol/sessions` | Patrol | stamp Route/Km/PatrolType · empty block | **Live** |
| POST | `mobile-bff/api/v1/ai-vision/detect` | AiVisionOps | AiVisionDetectionDto → card | **Live** |
| GET | `mobile-bff/api/v1/ai-vision/detections/{id}` | AiVisionDetections | optional refresh | **Live** |
| POST | `mobile-bff/api/v1/incident/incidents` | Incident | toast · nav opt list | **Live** |

- Client base: `http://localhost:5202` + `mobile-bff/api/v1` — **không** gọi `web-bff` từ Mobile MFE.
- **API Mới:** none · **migration:** none · **entity mới:** none.
- Labels: `useFormOptions()` / LinmCopy `cam.*` · **cấm** hardcode VN.
- Score: **ẩn** % ship (Design DEC-SCORE).

## 3. BFF vs API

| Layer | Role for Cam Patrol |
|-------|---------------------|
| Mobile.Bff `:5202` | sole FE entry · proxy patrol / ai-vision / incident · auth |
| RMMS.Service.Api | Patrol sessions · AiVision detect+detections · Incident create — **no new** CamPatrol controller |
| web-bff | cite only · **not** Mobile client base |

Fail: 503/network → toast + retry · validation → field/toast errors — **cấm** mock SSOT · **cấm** `window.alert` · **cấm** fake class on detect fail.

## 4. Entity / migration

| Item | Decision |
|------|----------|
| Tables | none (reuse patrol_sessions · ai-vision detections · incidents) |
| EF migration | **skip** (AccuracyM/VideoRef request-only · entity columns deferred — no MIG at SA) |
| Step 4b | **skip** at SA · Dev only if Live gap (not expected) |
| Upload | P1 ImageBase64 on detect · FileService cite optional later — **cấm** invent media controller |

## 5. FE surface (SA contract — Dev implements)

| Zone | Contract |
|------|----------|
| CP-01 | finder + GPS stamp + detect + result + confirm/skip · phone 430 · Android 1-1 |
| Required detect | session Đang tuần · ImageBase64* · GPS Acc≤30 · Engine=P1 |
| Confirm | DetectionId + HasGps + Title/RouteName/IncidentType map |
| Skip | dismiss · DES-LEAVE dirty result → discard no POST |
| REMOVED | `me*` · cam-view · feedback · journal B–E · asset-ai |
| DES-GRID / LinErpListFilterBar | **N/A** phone |
| Route | `mfeStdRoute=/web-rmms-cam-patrol` · product `/field/cam` |

## 6. Risks / open

| ID | Status |
|----|--------|
| DEC-DETECT-DTO | **resolved** — cite `DetectAiVisionRequest` + `AiVisionDetectionDto` + `CreateIncidentRequest` |
| DEC-FRAME | **resolved PO/Design** — frame thật DoD · fail toast |
| DEC-SCORE | **resolved Design** — ẩn % ship |
| DEC-ENTRY | **resolved PO** — 1 route CP-01 · PatrolType stamp từ ca |
| DOMAIN-MAP slug | **resolved** — row `web-rmms-cam-patrol` → Patrol |

## 7. Handoff

| Next | Need |
|------|------|
| team-lead | Tasks CP-01 wire · Live endpoints above · no invent |
| Dev | Mobile MFE only · `/agent-dev` · **cấm** native iOS/Android copy edit |
| QA | no session · GPS deny · Acc>30 · frame fail · no score % · no fake coords · no Web BFF · confirm DetectionId+HasGps |

## Version meta

`skillVersion=2026.09.05.03` · `contentHash=sha256:cd46c9486c0a3fe71165c27906508a1608ba46cca1351fe9df832ab7b2efa68c` · `solution_confirm=approve` · `writtenAt=2026-09-26T01:20:00.000Z`
