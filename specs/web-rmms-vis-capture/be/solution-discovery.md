# SA — Solution — web-rmms-vis-capture

> Status: **confirmed** · autoApprove ON · task `task_5bd02046` · 2026-09-27T11:30:00.000Z  
> changeScope: **edit_page** · Pattern B (SUBMIT-VALIDATE) · **cấm** ERP.* · **cấm** invent VisCapture controller/path · **cấm** fake GPS/class · **cấm** on-device · **cấm** invent Lat on Create · **cấm** Step 4b / migration ở SA · **cấm** Write MFE/native · **cấm** web-bff · **cấm** MFE gọi `:5311` / `:5301`.

| | |
|--|--|
| Feature | `web-rmms-vis-capture` |
| Title | Nhận diện sự cố |
| Role | `sa` |
| packKind | `list` |
| changeScope | `edit_page` |
| formPattern | Mobile full VIS · phone ≤430 · `#sc-vis-capture` · N/A ERP Modal · N/A DES-GRID · useFormOptions |
| domain | **Incident** (`incident`) · cite **AiVision** · **Patrol** (sessions optional) |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| mfeStdRoute | `/chup-hien-truong` · **cấm** `/web-rmms-vis-capture` |
| mfeStdUrl | `http://localhost:9301/chup-hien-truong` |
| productRoute | `/incident/vis` |
| nativeCite | SCREENS `/incident/vis` · Android `#sc-vis-capture` · DES-MOB-VIS-CAPTURE · SSOT=VisCapturePage |
| be | `D:/AI-QLBD/Linm.RMMS.WebService` |
| BFF | Mobile.Bff `http://localhost:5202` · prefix `mobile-bff/api/v1` |
| contentHash | `sha256:f749bc65f84b7bde51beeebaa85e5db22dacc8e8a040a53de30af834fa55c8cd` |
| skillVersion | `2026.09.05.03` |
| solution_confirm | **approve** (autoApprove) |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-vis-capture/ui/prototype/index.html` |
| cite | `docs/plan/web-rmms-mobile/SUBMIT-VALIDATE.md` · Pattern B |

## 0. Delta edit_page (Pattern B) — HARD

Giữ prior Live API / DOMAIN-MAP / DEC-* · **chỉ** đổi FE gate contract:

| Item | Prior (new_page) | Delta (edit_page) |
|------|------------------|-------------------|
| Detect/Attach `disabled` | gated by `canDetect` / multi-gate | **idle-on** · `disabled` **chỉ** khi `detecting` / `attaching` |
| Acc>30 / no photo / GPS deny | block via disabled | **banner on click** · Acc>30 **vẫn chặn POST trong handler** (no request) |
| validationBanner | — | Pattern B `string[]` · `#validationBanner` |
| Route std | `/web-rmms-vis-capture` | **`/chup-hien-truong`** · **cấm** alias path |
| Align | — | `/align-mobile-to-mfe` · SSOT=`VisCapturePage` · **cấm** tab/route/icon mới · **cấm** mở android/ios |
| API / entity / migration | Live reuse | **unchanged** · T-BE=N/A invent |

**T-* FE:** edit `VisCapturePage` gates only · **không** invent slug/controller.

## 1. Domain / ownership

| Item | Decision |
|------|----------|
| DOMAIN-MAP slug | `web-rmms-vis-capture` → **Incident** / `incident` |
| Rationale | Attach `POST incident/incidents` sau detect · product `/incident/vis` — **không** domain VisCapture mới |
| Cite peers | `web-rmms-incident` · `web-rmms-cam-patrol` · CTX vis-capture / ai-vision |
| API folder | **reuse** Incident · AiVision uploads/detect/detections · Patrol sessions |
| **Cấm** | invent `web-rmms-vis-capture/*` · ERP.* · Web BFF · Me/feedback/cam-view · on-device · fake coords |

**DOMAIN-MAP row (kept):**

| Feature slug | Domain Pascal | kebab |
|--------------|---------------|-------|
| `web-rmms-vis-capture` | Incident | `incident` · Live uploads+detect+detections+sessions+incidents · cite AiVision/Patrol · MFE route **`/chup-hien-truong`** · **cấm** invent VisCaptureController |

## 2. FormMode ↔ API

Single surface **VIS**. Sessions **optional** (empty → GPS-only · **cấm** itemsOrDemo). Pattern B: idle buttons · gate in handler + banner.

| Mode / zone | UI | API | Write | Notes |
|-------------|----|-----|-------|-------|
| VIS chrome | page shell | — | — | phone ≤430 · DES-MOB-VIS-CAPTURE · title «Nhận diện sự cố» |
| photos | PhotoRow | `POST ai-vision/uploads/init` → PUT → `complete` | ImageFileId / ImageUrl | empty → banner+block detect on click |
| rowLoc | ListRow RO | GPS + optional `GET patrol/sessions` | RouteName/Km | empty session → GPS-only |
| rowAcc | ListRow RO | device AccuracyM | Detect `AccuracyM` | Acc>30 → banner+**no POST** in handler |
| gpsLock | GPS | `navigator.geolocation` | Lat/Lng/HasGps | deny → banner on Detect/Attach click · **cấm** fake |
| detect | Button | `POST ai-vision/detect` | DetectAiVisionRequest | Engine=P1 · disabled **chỉ** `detecting` |
| rowClass | ListRow RO | detect DTO | DefectClass | **cấm** fake class |
| rowSev | ListRow+Badge | detect DTO | Severity | peer badge map |
| btnAttach | Button primary | `POST incident/incidents` | CreateIncidentRequest | DetectionId · HasGps=true · **no Lat** · disabled **chỉ** `attaching` |
| btnSkip | Button secondary | — | UI dismiss | disabled **chỉ** `attaching` |
| validationBanner | Banner | — | client `string[]` | Pattern B on click fail |
| Auth gate | staff | JWT (shell) | guest → login peer | shell owns |

### DEC-DETECT-HOST — Live cite (HARD · kept)

| Layer | Decision |
|-------|----------|
| Client | Mobile MFE → **chỉ** Mobile.Bff `:5202` `mobile-bff/api/v1/ai-vision/**` |
| Downstream | RMMS AiVision API `POST api/v1/ai-vision/detect` · `AiVisionOpsController` |
| Infer host | `ServiceEndpoints:Vision` / `AiVisionBaseUrl` = **`Linm.RMMS.Vision` `:5311`** |
| **Cấm** | on-device · MFE → `:5311` · infer qua `Linm.AI.WebService` `:5301` · invent detect path |

### DEC-DETECT-DTO — Live cite (kept)

**DTO:** `DetectAiVisionRequest` · **Controller:** `AiVisionOpsController` · `POST api/v1/ai-vision/detect`

| Field | Role VIS | Notes |
|-------|----------|-------|
| `ImageFileId` / `ImageUrl` | preferred sau uploads* | FileService guid |
| `ImageBase64` | optional alt | prefer uploads on VIS |
| `Lat` / `Lng` | required gate | device · **cấm** 0,0/fake |
| `AccuracyM` | required gate | ≤30 else **handler** block · request-only |
| `Engine` | fixed `P1` | useFormOptions |

**Response:** `AiVisionDetectionDto` → `Id`→DetectionId · DefectClass/Severity → rows · Score OUT ship.

**Optional:** `GET api/v1/ai-vision/detections/{id}`.

### DEC-PGC-BE-01 — CreateIncidentRequest (HARD · kept)

**DTO:** `CreateIncidentRequest` · `IncidentsController` · `POST api/v1/incident/incidents`  
Live: `DetectionId` · `HasGps` · **không** Lat/Lng trên Create.

| Field | Source map (VIS) |
|-------|------------------|
| `DetectionId` | detect.`Id` · required attach |
| `HasGps` | **true** (GPS gate passed) |
| `Title` | detect.`DefectClass` (or Code) |
| `IncidentType` | detect.`DefectClass` / LOOKUP |
| `Severity` | detect.`Severity` opt |
| `RouteName` | session RouteLabel **hoặc** detect.`RouteLabel` |
| `KmStart` | session km opt |
| `Status` | `new` |
| `RequestedAt` | client UTC now |
| `MediaIds` | uploads guids · max 10 |

**Skip:** dismiss only · **cấm** silent invent POST.

### Live endpoints (HARD — real-data §B · unchanged)

| Method | BFF path (client) | Downstream | Response bind | Status |
|--------|-------------------|------------|----------------|--------|
| POST | `mobile-bff/api/v1/ai-vision/uploads/init` | AiVisionUploads | InitUploadResponse | **Live** |
| PUT | upload object URL (init) | FileService | — | **Live** |
| POST | `mobile-bff/api/v1/ai-vision/uploads/complete` | AiVisionUploads | CompleteUploadResponse | **Live** |
| GET | `mobile-bff/api/v1/patrol/sessions` | Patrol | optional Route/Km | **Live** |
| POST | `mobile-bff/api/v1/ai-vision/detect` | AiVisionOps → Vision `:5311` | AiVisionDetectionDto | **Live** |
| GET | `mobile-bff/api/v1/ai-vision/detections/{id}` | AiVisionDetections | optional refresh | **Live** |
| POST | `mobile-bff/api/v1/incident/incidents` | Incident | toast · nav peer | **Live** |

**Peer BFF (kept cite):** `GET integration/users` — **forward if missing** · `road-routes/search` (có). **Không** bắt buộc VIS P1 attach path.

- Client base: `:5202` + `mobile-bff/api/v1` — **không** `web-bff`.
- **API Mới / migration / entity mới:** none.
- Labels: `useFormOptions()` · **cấm** hardcode VN.

## 3. BFF vs API

| Layer | Role for VIS |
|-------|----------------|
| Mobile.Bff `:5202` | sole FE entry · proxy ai-vision / incident / patrol · auth · users forward if missing |
| RMMS.Service.Api | uploads · detect · detections · incidents · sessions — **no new** controller |
| Linm.RMMS.Vision `:5311` | detect infer (via API/BFF) · **cấm** MFE direct |
| web-bff | **not** Mobile client base |

Fail: 503/network → toast+retry · Pattern B validation → banner — **cấm** mock · **cấm** fake class · **cấm** itemsOrDemo.

## 4. Entity / migration

| Item | Decision |
|------|----------|
| Tables / EF / Step 4b | **none** · skip at SA · Dev only if Live gap (not expected) |
| Upload | Live AiVision uploads* · FileService |

## 5. FE surface (SA contract — Dev implements)

| Zone | Contract |
|------|----------|
| VIS | PhotoRow + GPS + detect + result + Attach/Skip · `#sc-vis-capture` · Pattern B gates |
| Detect click | if !photo \| !GPS \| Acc>30 → `#validationBanner` · **no** POST |
| Attach click | if !detection \| GPS deny → banner · **no** POST |
| Detect/Attach disabled | **chỉ** `detecting` / `attaching` |
| Attach body | DetectionId + HasGps=true + Title/RouteName/IncidentType/Status/RequestedAt · **no Lat** |
| Skip | dismiss · disabled chỉ `attaching` |
| Route | `mfeStdRoute=/chup-hien-truong` · product `/incident/vis` |
| Align | SSOT=`VisCapturePage` · **cấm** tab/route/icon mới |
| DES-GRID | **N/A** phone |
| REMOVED | me* · feedback · cam-view · invent slug |

## 6. Risks / open

| id | Status | Owner |
|----|--------|-------|
| UNCLEAR-DOMAIN-MAP-VIS / DETECT-HOST / PGC-BE-01 | **resolved** prior SA | — |
| UNCLEAR-DUAL-01 / TITLE-01 / PACK-01 | resolved prior | — |
| UNCLEAR-VALIDATE-B | **open** → Dev/QA Pattern B idle-on + banner + handler Acc>30 | Dev/QA |
| UNCLEAR-ALIGN-01 | **open** → TL/Dev `/align-mobile-to-mfe` SSOT VisCapturePage | TL/Dev |
| UNCLEAR-SESS | **open** → empty sessions GPS-only · cấm itemsOrDemo | Dev/QA |

## 7. Handoff

| Next | Packet |
|------|--------|
| team-lead | FormMode↔API · Pattern B delta · Live endpoints · DEC-* · compact |
| Dev | edit VisCapturePage gates · VITE_MOBILE_API_URL `:5202` · banner · Acc>30 handler · **cấm** invent API |
| QA | Pattern B · GPS deny · Acc>30 no POST · skip · attach · no fake · no web-bff · queued e2e |

`solution_confirm=approve` · autoApprove ON · next `/agent-team-lead` · **roleOnly stop** (GAP-PKT-ROLE-01).
