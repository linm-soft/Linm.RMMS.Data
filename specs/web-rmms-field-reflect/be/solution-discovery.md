# SA — Solution — web-rmms-field-reflect

> Status: **confirmed** · autoApprove ON · task `task_804469f6` · 2026-09-27T12:00:00.000Z  
> **changeScope:** `edit_page` · delta Pattern B (SUBMIT-VALIDATE) trên prior `task_2164c9fb`  
> **Cấm** ERP.* · **cấm** invent `field-reflect` controller/path · **cấm** fake GPS/ca · **cấm** itemsOrDemo sessions · **cấm** Step 4b / migration ở role SA · **cấm** Write MFE/native · **cấm** Web BFF base từ Mobile MFE.

| | |
|--|--|
| Feature | `web-rmms-field-reflect` |
| Title | Phản ánh hiện trường |
| Role | `sa` |
| packKind | `list` |
| changeScope | `edit_page` |
| formPattern | Mobile full FR-00/01/02 · phone ≤430 · N/A ERP Modal/Slideout · Pattern B CTA/banner · useFormOptions |
| domain | **Incident** (`incident`) · cite **Patrol** (sessions) · **Integration** (asset-types) · **AiVision** (+ files) |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` · page `FieldReflectPage` · route `/phan-anh` |
| mfeStdUrl | `http://localhost:9301/phan-anh` |
| productRoute | `/field/reflect` |
| be | `D:/AI-QLBD/Linm.RMMS.WebService` |
| BFF | Mobile.Bff `http://localhost:5202` · prefix `mobile-bff/api/v1` |
| editCite | `docs/plan/web-rmms-mobile/SUBMIT-VALIDATE.md` · Pattern B |
| contentHash | `sha256:d8f13df3772c0f27b367c5e01a5ce2cf942b1a27640c1390e76e34c3a8c267f2` |
| skillVersion | `2026.09.05.03` |
| solution_confirm | **approve** (autoApprove) |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-field-reflect/ui/prototype/index.html` |

## 0. Delta edit_page (HARD)

| Item | Decision |
|------|----------|
| Scope | **edit** `FieldReflectPage` gates/CTA only · **giữ** prior Live FR-00/01/02 wire · **cấm** typed new_page |
| Pattern B Detect/Create | `disabled` **chỉ** `detecting` / `creating` · **bỏ** `disabled={!canDetect}` / `{!canCreate}` |
| validationBanner | Banner `string[]` **on click** khi thiếu precondition (ảnh/GPS/session/asset…) · **không** khóa CTA idle |
| Acc>30 | chặn `POST ai-vision/detect` **trong handler** · CTA vẫn idle-ON · banner Acc |
| GPS deny | **không** khóa CTA · báo khi bấm Detect/Create/capture · **cấm** fake |
| API / entity | **không** invent · **không** migration · T-BE = N/A invent |
| Align cuối | `/align-mobile-to-mfe` · SSOT=`FieldReflectPage` · **cấm** tab/route/icon mới · **cấm** mở android/ios proto |
| Route SSOT | MFE `/phan-anh` · product `/field/reflect` · DOMAIN-MAP slug row giữ Incident |

→ owns Dev close **UNCLEAR-VALIDATE-B** · **UNCLEAR-ALIGN-01**.

## 1. Domain / ownership

| Item | Decision |
|------|----------|
| DOMAIN-MAP slug | `web-rmms-field-reflect` → **Incident** / `incident` (prior row keep) |
| Rationale | Write chính `POST incident/incidents` · ca stamp Patrol · pick Integration · media/detect AiVision/FileService — **không** domain FieldReflect mới |
| API folder | **reuse** Incident · Patrol sessions · Integration asset-types · AiVision uploads/detect · FileService — **no new** controller |
| **Cấm** | invent `field-reflect/*` · ERP.* · Web BFF base · Me/feedback/cam-view · journal B–E · fake coords/ca |

**DOMAIN-MAP row (keep):**

| Feature slug | Domain Pascal | kebab |
|--------------|---------------|-------|
| `web-rmms-field-reflect` | Incident | `incident` · Live sessions+asset-types+uploads/files+detect+incidents · cite Patrol/Integration/AiVision · MFE `Linm.Web.RMMS.Mobile` `/phan-anh` · **cấm** invent FieldReflectController |

## 2. FormMode ↔ API

Surfaces **FR-00** (pick) · **FR-01** (form) · **FR-02** (photo-geo overlay). Session **Đang tuần** required for Route stamp.

| Mode / zone | UI | API | Write | Notes |
|-------------|----|-----|-------|-------|
| FR-00 pick | LookupGrid | `GET integration/asset-types` | → AssetLabel / Title seed | thiếu → banner on Create |
| FR-01 chrome | page shell | — | — | phone ≤430 · Android 1-1 |
| kind | Segment 3 | LOOKUP_STATIC | → `IncidentType` | Hư/Mất/Hỏng |
| checklist.* | CheckboxGroup | local by asset | fold → `Description` | **no** checklist API |
| photos | PhotoRow | uploads hoặc files/* | → `MediaIds` | thiếu → banner on Detect |
| detect | Button Pattern B | `POST ai-vision/detect` | Lat/Lng/AccuracyM | idle ON · Acc>30 chặn handler · disabled chỉ detecting |
| sessionStamp | Text RO | `GET patrol/sessions` | `RouteName` · Km · PatrolType | live-only · thiếu → banner on Create |
| gpsLock | GPS | `navigator.geolocation` | `HasGps=true` | deny → banner on click · **cấm** fake |
| severity | Select | LOOKUP_STATIC | `Severity` | useFormOptions |
| description | Textarea | — | `Description` | + checklist fold |
| validationBanner | Banner | — | client `string[]` | Pattern B on click |
| create | Button Pattern B | `POST incident/incidents` | CreateIncidentRequest | idle ON · disabled chỉ creating |
| draftOffline | Button | — | local queue peer offline | **cấm** invent OfflineQueueController |
| FR-02 capture | photo-geo overlay | `files/init`·PUT object·`commit` | FileService guids → MediaIds | purpose=`photo-geo-capture` · **cấm** persist full URL |

### DEC-MEDIA-01 — Live cite (HARD · keep)

**DTO:** `CreateIncidentRequest` · `api/domains/incident/LINM.RMMS.Incident.Models/DTOs/IncidentDtos.cs`  
**Controller:** `IncidentsController` · `POST api/v1/incident/incidents`  
**Service:** `IncidentRecordService.CreateAsync` · `SerializeMediaIds` (CSV · max 10 · distinct).

| Field | Source map (FR-*) |
|-------|-------------------|
| `MediaIds` | `List<string>` FileService guids từ FR-02 `files/commit` **hoặc** `ai-vision/uploads` · max 10 · **cấm** full URL |
| `DetectionId` | optional detect.`Id`.ToString() |
| `Description` | free text + checklist labels fold (GAP-MOB-FIELD-CHK-01 local) |
| `HasGps` | **true** khi có fix · **không** cột Lat/Lng trên Create (GAP-PGC-BE-01) |
| `Title` | asset label / copy key seed |
| `RouteName` | session stamp Route |
| `IncidentType` | kind Segment |
| `Status` | `new` (online create) · draft offline = local only |
| `RequestedAt` | client UTC now |
| `Severity` / `AssetLabel` / `KmStart` | optional bind §B |

### Live endpoints (HARD — real-data §B · keep)

| Method | BFF path (client) | Downstream | Response bind | Status |
|--------|-------------------|------------|----------------|--------|
| GET | `mobile-bff/api/v1/patrol/sessions` | Patrol | stamp Route/Km/PatrolType | **Live** |
| GET | `mobile-bff/api/v1/integration/asset-types` | Integration | FR-00 pick | **Live** |
| POST | `mobile-bff/api/v1/ai-vision/uploads` (+ PUT) | AiVision | optional pre-detect | **Live** |
| POST | `mobile-bff/api/v1/files/init` · PUT `files/{id}/object` · POST `files/commit` | FileService | FR-02 guids → MediaIds | **Live** |
| POST | `mobile-bff/api/v1/ai-vision/detect` | AiVision | optional DetectionId | **Live** |
| POST | `mobile-bff/api/v1/incident/incidents` | Incident | toast · nav opt | **Live** |

- Client base: `http://localhost:5202` + `mobile-bff/api/v1` — **không** gọi `web-bff` từ Mobile MFE.
- Peer (không invent): `GET integration/users` (forward if missing) · `road-routes/search` (có) · reflect **không** picker route.
- **API Mới:** none · **migration:** none · **entity mới:** none.
- Labels: `useFormOptions()` · **cấm** hardcode VN.
- Sessions: GAP-MOB-FIELD-SESS-01 live-only · **cấm** itemsOrDemo.

## 3. BFF vs API

| Layer | Role for Field Reflect |
|-------|------------------------|
| Mobile.Bff `:5202` | sole FE entry · proxy patrol / integration / ai-vision / files / incident · auth |
| RMMS.Service.Api | Live domains above — **no new** FieldReflect controller |
| web-bff | cite only · **not** Mobile client base |

Fail: 503/network → toast + retry · 4xx create → toast · client precondition → **banner on click** (Pattern B) — **cấm** mock SSOT · **cấm** fake coords · **cấm** silent ok · **cấm** disable CTA vì thiếu field.

## 4. Entity / migration

| Item | Decision |
|------|----------|
| Tables | none (reuse) |
| EF migration | **skip** at SA · GAP-PGC-BE-01 Lat columns deferred (HasGps only) |
| Step 4b | **skip** at SA |
| Upload | FileService + optional AiVision uploads — **cấm** invent media controller |

## 5. FE surface (SA contract — Dev implements)

| Zone | Contract |
|------|----------|
| FR-00 | asset-types LookupGrid pick · thiếu → banner on Create |
| FR-01 | form + Pattern B Detect/Create + validationBanner |
| FR-02 | PhotoRow → photo-geo overlay · GPS báo on click |
| CTA HARD | Detect/Create idle ON · disabled chỉ busy · Acc>30 handler-block detect |
| Required create | Title* · RouteName* · IncidentType* · Status* · RequestedAt* · HasGps when fix · MediaIds opt |
| HARD | sessions live-only · checklist local · useFormOptions · no fake GPS |
| REMOVED | `me*` · feedback · cam-view · journal B–E · invent path · canDetect/canCreate disable |
| DES-GRID / LinErpListFilterBar | **N/A** phone |
| Route | `mfeStdRoute=/phan-anh` · product `/field/reflect` · SSOT page `FieldReflectPage` |

## 6. Risks / open

| ID | Status |
|----|--------|
| UNCLEAR-DOMAIN-MAP-REFLECT · MEDIA · PGC · ENTRY · SESS · CHK | **closed** (prior) |
| GAP-PGC-BE-01 | deferred BE (HasGps only) — **no** MIG at SA |
| UNCLEAR-VALIDATE-B | **open** → Dev: bỏ canDetect/canCreate · Pattern B banner |
| UNCLEAR-ALIGN-01 | **open** → Dev/QA end: `/align-mobile-to-mfe` · SSOT MFE · 430px |

## 7. Handoff

| Next | Need |
|------|------|
| team-lead | Tasks delta: Pattern B CTA/banner · Acc handler · GPS on-click · align cuối · **no** new BE |
| Dev | edit `FieldReflectPage` only · `/agent-dev` · **cấm** native · **cấm** invent API |
| QA | Pattern B idle CTA · banner on click · Acc>30 no POST · GPS deny no lock · no fake · no Web BFF · MediaIds guids · align 430 |

## Version meta

`skillVersion=2026.09.05.03` · `contentHash=sha256:d8f13df3772c0f27b367c5e01a5ce2cf942b1a27640c1390e76e34c3a8c267f2` · `solution_confirm=approve` · `writtenAt=2026-09-27T12:00:00.000Z` · `taskId=task_804469f6` · `priorSa=task_2164c9fb`
