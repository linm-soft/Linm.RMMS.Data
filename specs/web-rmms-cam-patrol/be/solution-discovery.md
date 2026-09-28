# SA — Solution — web-rmms-cam-patrol

> Status: **confirmed** · autoApprove ON · task `task_9f9e4a81` · 2026-09-27T10:50:00.000Z  
> **changeScope=edit_page** · keep prior Live cite · Pattern B CTA/banner delta · **cấm** invent API · **cấm** ERP.* · **cấm** Step 4b/migration · **cấm** Write MFE/native · **cấm** Web BFF từ Mobile MFE.

| | |
|--|--|
| Feature | `web-rmms-cam-patrol` |
| Title | Camera tuần |
| Role | `sa` |
| packKind | `list` |
| changeScope | `edit_page` |
| formPattern | Mobile full CP-01 · phone ≤430 · N/A ERP Modal/Slideout · Android 1-1 · useFormOptions / `cam.*` |
| domain | **Patrol** (`patrol`) · cite **AiVision** (detect) · **Incident** (confirm) |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` · route `/camera-tuan` |
| mfeStdUrl | `http://localhost:9301/camera-tuan` |
| productRoute | `/field/cam` |
| nativeRouteCite | SCREENS `/field/cam` · Android `#sc-cam-patrol` · DES-MOB-CAM-PATROL |
| be | `D:/AI-QLBD/Linm.RMMS.WebService` |
| BFF | Mobile.Bff `http://localhost:5202` · prefix `mobile-bff/api/v1` |
| contentHash | `sha256:c46ae5660ccba1b8e64ce8e5294acef77ceb4e0a75474372f2a3d3901efb5796` |
| deltaCite | `docs/plan/web-rmms-mobile/SUBMIT-VALIDATE.md` · Pattern B |
| skillVersion | `2026.09.05.03` |
| solution_confirm | **approve** (autoApprove) |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-cam-patrol/ui/prototype/index.html` |
| code | `src/pages/WebRmmsCamPatrol/CamPatrolPage.tsx` |

## 1. Domain / ownership

| Item | Decision |
|------|----------|
| DOMAIN-MAP slug | `web-rmms-cam-patrol` → **Patrol** / `patrol` (**keep** prior row) |
| Rationale | Field CP-01 gắn ca `patrol/sessions` · detect cite AiVision · confirm cite Incident — **không** domain/controller mới |
| API folder | **reuse** Patrol sessions · AiVision detect/detections · Incident incidents — **no new** CamPatrol controller |
| **Cấm** | invent `cam-patrol/*` · invent controller · ERP.* · Web BFF base · Me/cam-view · Excel toolbar · SearchInput user/route · fake coords/class · score % ship |

**DOMAIN-MAP row (keep):**

| Feature slug | Domain Pascal | kebab |
|--------------|---------------|-------|
| `web-rmms-cam-patrol` | Patrol | `patrol` · Live sessions+detect+incident · cite AiVision/Incident · MFE `Linm.Web.RMMS.Mobile` `/camera-tuan` · **cấm** invent CamPatrolController |

## 2. FormMode ↔ API (keep Live)

Single surface **CP-01**. Session **Đang tuần** required. GPS Acc≤30 + frame validated **on button click** (Pattern B — not pre-disable).

| Mode / zone | UI | API | Write | Notes |
|-------------|----|-----|-------|-------|
| CP-01 chrome | page shell | — | — | phone ≤430 · DES-MOB-CAM-PATROL |
| finder | CameraViewfinder | device | — | DES-MOB-CAM-FINDER · frame thật |
| stamp.route/km/type | Text RO | `GET patrol/sessions` filter Đang tuần | display | empty → banner on detect click |
| lat/lng/accuracyM | GPS RO | `navigator.geolocation` | body detect + HasGps | Acc≤30 · deny/poor → banner on click · **cấm** fake |
| imageBase64 | CameraCapture | device | `ImageBase64` detect | **required** · fail → banner/toast · **cấm** null heuristic |
| validationBanner | Banner `string[]` | — | client | Pattern B · lookupStatic keys · DES-MOB-CAM-VALIDATION |
| detect | Button | `POST ai-vision/detect` | DetectAiVisionRequest | **disabled={detecting} only** · Engine=P1 |
| detection.* | Text/Chip | detect resp / optional GET | display | **ẩn** Score % ship |
| confirm | Button | `POST incident/incidents` | CreateIncidentRequest | **disabled={confirming} only** · DetectionId · HasGps=true |
| skip | Button | — | UI dismiss | **no** POST · lock khi confirming |
| Auth gate | staff | JWT (shell) | guest → login peer | shell owns |

### DEC-PATTERN-B — FE contract delta (HARD · edit_page)

Cite `SUBMIT-VALIDATE.md` Pattern B · **no API change**:

| Control | Prior (anti-pattern) | Edit contract |
|---------|----------------------|---------------|
| detect | `disabled={!canDetect}` (GPS/frame/session/online pre-lock) | `disabled={detecting}` **only** |
| confirm | pre-disable on missing DetectionId/GPS | `disabled={confirming}` **only** |
| validation | silent / pre-disable | on click → `validationBanner: string[]` · keys lookupStatic |
| capture | — | **keep** CameraCapture / finder |

Server gates unchanged: detect body still requires ImageBase64* · Lat* · Lng* · AccuracyM* · Engine=P1; confirm still Title* · RouteName* · IncidentType* · DetectionId · HasGps.

### DEC-DETECT-DTO — Live cite (HARD · keep)

**Controller:** `AiVisionOpsController` · `POST api/v1/ai-vision/detect` · body `DetectAiVisionRequest`  
**File:** `api/domains/ai-vision/.../DTOs/AiVisionDetectionDtos.cs`

| Field | Role CP-01 | Notes |
|-------|------------|-------|
| `ImageBase64` | **required** | JPEG/PNG base64 · GAP-MOB-CAM-FRAME-01 |
| `Lat` / `Lng` | **required** gate | device fix · **cấm** 0,0/fake |
| `AccuracyM` | **required** gate | ≤30 m else client banner + server reject |
| `Engine` | **fixed** `P1` | LOOKUP_STATIC / useFormOptions |
| `ImageUrl` / `ImageFileId` | optional | P1 prefer base64 |
| `Note` / `VideoRef` | out CP-01 | request-only · entity deferred |

**Response bind** `AiVisionDetectionDto`:

| Field | UI | Notes |
|-------|-----|-------|
| `Id` | Hidden → `DetectionId` confirm | Guid |
| `DefectClass` / `Severity` / `Code` | Chip/Text | display |
| `Score` | **OUT ship** | DEC-SCORE · demo only `?ship=1` |
| `Lat`/`Lng`/`RouteLabel`/`Engine`/`ImageUrl` | optional stamp | RO |

**Optional refresh:** `GET api/v1/ai-vision/detections/{id}` · 404 toast.

### Confirm body — Live cite (keep)

**Controller:** `IncidentsController` · `POST api/v1/incident/incidents` · `CreateIncidentRequest`

| Field | Source map |
|-------|------------|
| `DetectionId` | detect.`Id`.ToString() |
| `HasGps` | **true** (GPS gate passed at click) |
| `Title` | detect.`DefectClass` (or Code) |
| `RouteName` | session stamp Route |
| `IncidentType` | detect.`DefectClass` / init-data cite |
| `Severity` | detect.`Severity` opt |
| `KmStart` | session km stamp opt |
| `RequestedAt` | client UTC now |

**Skip:** dismiss only · **cấm** silent invent POST.

### Live endpoints (HARD — real-data §B · unchanged)

| Method | BFF path (client) | Downstream | Response bind | Status |
|--------|-------------------|------------|----------------|--------|
| GET | `mobile-bff/api/v1/patrol/sessions` | Patrol | stamp Route/Km/PatrolType · empty → banner | **Live** |
| POST | `mobile-bff/api/v1/ai-vision/detect` | AiVisionOps | AiVisionDetectionDto → card | **Live** |
| GET | `mobile-bff/api/v1/ai-vision/detections/{id}` | AiVisionDetections | optional refresh | **Live** |
| POST | `mobile-bff/api/v1/incident/incidents` | Incident | toast · nav opt | **Live** |

- Client base: `http://localhost:5202` + `mobile-bff/api/v1` — **không** `web-bff`.
- **API Mới:** none · **migration:** none · **entity mới:** none.
- Labels: `useFormOptions()` / LinmCopy `cam.*` · banner keys lookupStatic · **cấm** hardcode VN.
- Score: **ẩn** % ship (DEC-SCORE).

## 3. BFF vs API

| Layer | Role for Cam Patrol |
|-------|---------------------|
| Mobile.Bff `:5202` | sole FE entry · proxy patrol / ai-vision / incident · auth |
| RMMS.Service.Api | Patrol sessions · AiVision detect+detections · Incident create — **no new** controller |
| web-bff | cite only · **not** Mobile client base |

Fail: 503/network → toast + retry · client Pattern B banner on click · server validation → field/toast — **cấm** mock SSOT · **cấm** `window.alert` · **cấm** fake class on detect fail.

## 4. Entity / migration

| Item | Decision |
|------|----------|
| Tables | none (reuse) |
| EF migration | **skip** |
| Step 4b | **skip** at SA · Dev only if Live gap (not expected) |
| Upload | P1 ImageBase64 on detect · **cấm** invent media controller |

## 5. FE surface (SA contract — Dev implements edit)

| Zone | Contract |
|------|----------|
| CP-01 | finder + GPS stamp + detect + result + confirm/skip + **validationBanner** · phone 430 · Android 1-1 |
| Pattern B | detect lock `detecting` only · confirm lock `confirming` only · banner on click |
| Required detect (at click) | session Đang tuần · ImageBase64* · GPS Acc≤30 · Engine=P1 · online |
| Confirm (at click) | DetectionId + HasGps + Title/RouteName/IncidentType map |
| Skip | dismiss · lock khi confirming · DES-LEAVE dirty → discard no POST |
| REMOVED | `me*` · cam-view · feedback · Excel · SearchInput user/route · invent cam-patrol |
| DES-GRID / LinErpListFilterBar | **N/A** phone |
| Route | `mfeStdRoute=/camera-tuan` · product `/field/cam` · **cấm** `/web-rmms-cam-patrol` |
| align end | `/align-mobile-to-mfe` · CamPatrolPage SSOT · no tab/route/icon |

## 6. Risks / open

| ID | Status |
|----|--------|
| DEC-DETECT-DTO | **keep resolved** — DetectAiVisionRequest + AiVisionDetectionDto + CreateIncidentRequest |
| DEC-PATTERN-B | **resolved this SA** — FE CTA/banner only · no API/entity delta |
| DEC-FRAME | **keep** soft UNCLEAR-CAM-FRAME · DoD frame thật |
| DEC-SCORE | **keep** — ẩn % ship |
| DEC-ENTRY | **keep** — 1 route CP-01 · PatrolType từ ca |
| DOMAIN-MAP slug | **keep** — Patrol |

## 7. Handoff

| Next | Need |
|------|------|
| team-lead | T-* edit CamPatrolPage Pattern B (cite SUBMIT-VALIDATE) · Live endpoints keep · no invent |
| Dev | Mobile MFE only · `/agent-dev` · **cấm** native iOS/Android copy edit |
| QA | Pattern B: click detect w/o GPS/frame/session → banner · no pre-disable · no score % · no Web BFF · confirm DetectionId+HasGps |

## Version meta

`skillVersion=2026.09.05.03` · `contentHash=sha256:c46ae5660ccba1b8e64ce8e5294acef77ceb4e0a75474372f2a3d3901efb5796` · `solution_confirm=approve` · `changeScope=edit_page` · `writtenAt=2026-09-27T10:50:00.000Z`
