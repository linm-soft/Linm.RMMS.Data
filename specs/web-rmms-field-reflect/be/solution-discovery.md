# SA — Solution — web-rmms-field-reflect

> Status: **confirmed** · autoApprove ON · task `task_2164c9fb` · 2026-09-26T03:30:00.000Z  
> **Cấm** ERP.* · **cấm** invent `field-reflect` controller/path · **cấm** fake GPS/ca · **cấm** itemsOrDemo sessions · **cấm** Step 4b / migration ở role SA · **cấm** Write MFE/native · **cấm** Web BFF base từ Mobile MFE.

| | |
|--|--|
| Feature | `web-rmms-field-reflect` |
| Title | Phản ánh hiện trường |
| Role | `sa` |
| packKind | `list` |
| changeScope | `new_page` |
| formPattern | Mobile full FR-00/01/02 · phone ≤430 · N/A ERP Modal/Slideout · Android 1-1 · useFormOptions |
| domain | **Incident** (`incident`) · cite **Patrol** (sessions) · **Integration** (asset-types) · **AiVision** (+ files) |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` · route `/web-rmms-field-reflect` |
| mfeStdUrl | `http://localhost:9301/web-rmms-field-reflect` |
| productRoute | `/field/reflect` |
| be | `D:/AI-QLBD/Linm.RMMS.WebService` |
| BFF | Mobile.Bff `http://localhost:5202` · prefix `mobile-bff/api/v1` |
| contentHash | `sha256:e678be9152069e48f353f88e9f4d377e20e4fd4ad5c8d4aa2c86bd995bc1e667` |
| skillVersion | `2026.09.05.03` |
| solution_confirm | **approve** (autoApprove) |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-field-reflect/ui/prototype/index.html` |

## 1. Domain / ownership

| Item | Decision |
|------|----------|
| DOMAIN-MAP slug | `web-rmms-field-reflect` → **Incident** / `incident` |
| Rationale | Write chính `POST incident/incidents` · ca stamp cite Patrol · pick cite Integration · media/detect cite AiVision/FileService — **không** domain FieldReflect mới |
| Cite peers | Field hub · peer CTX `field-reflect` · `incident-create` · `photo-geo-capture` · offline |
| API folder | **reuse** Incident · Patrol sessions · Integration asset-types · AiVision uploads/detect · FileService — **no new** FieldReflect controller |
| **Cấm** | invent `field-reflect/*` · ERP.* · Web BFF base · Me/feedback/cam-view · journal B–E · fake coords/ca |

**DOMAIN-MAP row (applied):**

| Feature slug | Domain Pascal | kebab |
|--------------|---------------|-------|
| `web-rmms-field-reflect` | Incident | `incident` · Live sessions+asset-types+uploads/files+detect+incidents · cite Patrol/Integration/AiVision · MFE `Linm.Web.RMMS.Mobile` `/web-rmms-field-reflect` · **cấm** invent FieldReflectController |

→ resolves **UNCLEAR-DOMAIN-MAP-REFLECT** / GAP-DOMAIN-MAP-REFLECT.

## 2. FormMode ↔ API

Surfaces **FR-00** (pick) · **FR-01** (form) · **FR-02** (photo-geo overlay). Session **Đang tuần** required for Route stamp. GPS deny → block Create / Detect / geo capture.

| Mode / zone | UI | API | Write | Notes |
|-------------|----|-----|-------|-------|
| FR-00 pick | LookupGrid | `GET integration/asset-types` | → AssetLabel / Title seed | empty → toast |
| FR-01 chrome | page shell | — | — | phone ≤430 · Android 1-1 |
| kind | Segment 3 | LOOKUP_STATIC | → `IncidentType` | Hư/Mất/Hỏng |
| checklist.* | CheckboxGroup | local by asset | fold → `Description` | **no** checklist API |
| photos | PhotoRow | uploads hoặc files/* | → `MediaIds` | → FR-02 |
| detect | Button | `POST ai-vision/detect` | Lat/Lng/AccuracyM | GPS Acc≤30 · optional |
| sessionStamp | Text RO | `GET patrol/sessions` | `RouteName` · Km · PatrolType | live-only · empty toast+block |
| gpsLock | GPS | `navigator.geolocation` | `HasGps=true` | deny → block · **cấm** fake |
| severity | Select | LOOKUP_STATIC | `Severity` | useFormOptions |
| description | Textarea | — | `Description` | + checklist fold |
| create | Button | `POST incident/incidents` | CreateIncidentRequest | required Title·RouteName·IncidentType·Status·RequestedAt |
| draftOffline | Button | — | local queue peer offline | **cấm** invent OfflineQueueController |
| FR-02 capture | photo-geo overlay | `files/init`·PUT object·`commit` | FileService guids → MediaIds | purpose=`photo-geo-capture` · **cấm** persist full URL |

### DEC-MEDIA-01 — Live cite (HARD)

**DTO:** `CreateIncidentRequest` · file `api/domains/incident/LINM.RMMS.Incident.Models/DTOs/IncidentDtos.cs`  
**Controller:** `IncidentsController` · `POST api/v1/incident/incidents`  
**Service:** `IncidentRecordService.CreateAsync` · `SerializeMediaIds` (CSV · max 10 · distinct).

| Field | Source map (FR-*) |
|-------|-------------------|
| `MediaIds` | `List<string>` FileService guids từ FR-02 `files/commit` **hoặc** `ai-vision/uploads` · max 10 · replace-all · **cấm** full URL |
| `DetectionId` | optional detect.`Id`.ToString() |
| `Description` | free text + checklist labels fold (GAP-MOB-FIELD-CHK-01 local) |
| `HasGps` | **true** khi có fix · **không** cột Lat/Lng trên Create (GAP-PGC-BE-01) |
| `Title` | asset label / copy key seed |
| `RouteName` | session stamp Route |
| `IncidentType` | kind Segment |
| `Status` | `new` (online create) · draft offline = local only |
| `RequestedAt` | client UTC now |
| `Severity` / `AssetLabel` / `KmStart` | optional bind §B |

→ resolves **UNCLEAR-MEDIA-01** / GAP-MOB-FIELD-MEDIA-01.

### Live endpoints (HARD — real-data §B)

| Method | BFF path (client) | Downstream | Response bind | Status |
|--------|-------------------|------------|----------------|--------|
| GET | `mobile-bff/api/v1/patrol/sessions` | Patrol | stamp Route/Km/PatrolType · empty block | **Live** |
| GET | `mobile-bff/api/v1/integration/asset-types` | Integration | FR-00 pick | **Live** |
| POST | `mobile-bff/api/v1/ai-vision/uploads` (+ PUT) | AiVision | optional pre-detect | **Live** |
| POST | `mobile-bff/api/v1/files/init` · PUT `files/{id}/object` · POST `files/commit` | FileService | FR-02 guids → MediaIds | **Live** |
| POST | `mobile-bff/api/v1/ai-vision/detect` | AiVision | optional DetectionId | **Live** |
| POST | `mobile-bff/api/v1/incident/incidents` | Incident | toast · nav opt | **Live** |

- Client base: `http://localhost:5202` + `mobile-bff/api/v1` — **không** gọi `web-bff` từ Mobile MFE.
- **API Mới:** none · **migration:** none · **entity mới:** none.
- Labels: `useFormOptions()` · **cấm** hardcode VN.
- Sessions: GAP-MOB-FIELD-SESS-01 live-only · **cấm** itemsOrDemo.

## 3. BFF vs API

| Layer | Role for Field Reflect |
|-------|------------------------|
| Mobile.Bff `:5202` | sole FE entry · proxy patrol / integration / ai-vision / files / incident · auth |
| RMMS.Service.Api | Live domains above — **no new** FieldReflect controller |
| web-bff | cite only · **not** Mobile client base |

Fail: 503/network → toast + retry · 4xx create → toast · GPS deny → disable gated actions — **cấm** mock SSOT · **cấm** fake coords · **cấm** silent ok.

## 4. Entity / migration

| Item | Decision |
|------|----------|
| Tables | none (reuse incidents · patrol_sessions · asset-types · detections · FileService) |
| EF migration | **skip** at SA · GAP-PGC-BE-01 Lat columns deferred (HasGps only) |
| Step 4b | **skip** at SA |
| Upload | FileService + optional AiVision uploads — **cấm** invent media controller |

## 5. FE surface (SA contract — Dev implements)

| Zone | Contract |
|------|----------|
| FR-00 | asset-types LookupGrid pick |
| FR-01 | form kind/checklist/photos/detect/session/GPS/severity/description/create/draft |
| FR-02 | PhotoRow → photo-geo overlay · GPS gate |
| Required create | Title* · RouteName* · IncidentType* · Status* · RequestedAt* · HasGps when fix · MediaIds opt |
| HARD | GPS deny block · sessions live-only · checklist local · useFormOptions |
| REMOVED | `me*` · feedback · cam-view · journal B–E · invent path |
| DES-GRID / LinErpListFilterBar | **N/A** phone |
| Route | `mfeStdRoute=/web-rmms-field-reflect` · product `/field/reflect` |

## 6. Risks / open

| ID | Status |
|----|--------|
| UNCLEAR-DOMAIN-MAP-REFLECT | **resolved** — DOMAIN-MAP row Incident |
| UNCLEAR-MEDIA-01 | **resolved** — MediaIds `List<string>` FileService guids · max 10 · cite CreateIncidentRequest |
| UNCLEAR-PGC | **resolved Design** — PhotoRow→FR-02 |
| UNCLEAR-ENTRY / CHK-01 / SESS-01 | **resolved PO** |
| GAP-PGC-BE-01 | open BE (HasGps only) — **no** MIG at SA |

## 7. Handoff

| Next | Need |
|------|------|
| team-lead | Tasks FR-00/01/02 wire · Live endpoints · MediaIds bind |
| Dev | Mobile MFE only · `/agent-dev` · **cấm** native iOS/Android |
| QA | no session · GPS deny · Acc>30 detect · offline draft · no fake coords · no Web BFF · MediaIds guids only |

## Version meta

`skillVersion=2026.09.05.03` · `contentHash=sha256:e678be9152069e48f353f88e9f4d377e20e4fd4ad5c8d4aa2c86bd995bc1e667` · `solution_confirm=approve` · `writtenAt=2026-09-26T03:30:00.000Z`
