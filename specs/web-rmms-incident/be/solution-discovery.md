# SA — Solution — web-rmms-incident

> Status: **confirmed** · autoApprove ON · task `task_b1cd136a` · 2026-09-26T04:20:00.000Z  
> **Cấm** ERP.* · **cấm** invent `web-rmms-incident` controller/path · **cấm** fake GPS/ca · **cấm** itemsOrDemo sessions · **cấm** Step 4b / migration ở role SA · **cấm** Write MFE/native · **cấm** Web BFF base từ Mobile MFE.

| | |
|--|--|
| Feature | `web-rmms-incident` |
| Title | Sự cố list, tạo, chi tiết |
| Role | `sa` |
| packKind | `list` |
| changeScope | `new_page` |
| formPattern | Mobile full INC-L/N/D · phone ≤430 · N/A ERP Modal/Slideout · Android 1-1 · useFormOptions |
| domain | **Incident** (`incident`) · cite **Patrol** (sessions) · **Integration** (asset-types) · **AiVision** (+ files) · Maintenance cite peer estimate only |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` · route `/web-rmms-incident` |
| mfeStdUrl | `http://localhost:9301/web-rmms-incident` |
| productRoute | `/incident` · `/incident/new` · `/incident/:id` |
| be | `D:/AI-QLBD/Linm.RMMS.WebService` |
| BFF | Mobile.Bff `http://localhost:5202` · prefix `mobile-bff/api/v1` |
| contentHash | `sha256:665f3697a399a948edb0ab14da5fc13716b477aa84b0b8e43f6ca33eb7216d2d` |
| skillVersion | `2026.09.05.03` |
| solution_confirm | **approve** (autoApprove) |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-incident/ui/prototype/index.html` |

## 1. Domain / ownership

| Item | Decision |
|------|----------|
| DOMAIN-MAP slug | `web-rmms-incident` → **Incident** / `incident` |
| Rationale | Core write `incident/incidents` list+create+detail+close · ca stamp cite Patrol · pick cite Integration · media/detect cite AiVision/FileService — **không** domain IncidentHub mới |
| Cite peers | `incident-list` · `incident-create` · `incident-detail` · `web-rmms-field-reflect` · offline · Maintenance WO peer |
| API folder | **reuse** Incident · Patrol sessions · Integration asset-types · AiVision uploads/detect · FileService — **no new** IncidentHub controller |
| **Cấm** | invent `web-rmms-incident/*` · ERP.* · Web BFF base · Me/feedback/cam-view · journal B–E · invent Lat on Create · primary WO CRUD |

**DOMAIN-MAP row (applied):**

| Feature slug | Domain Pascal | kebab |
|--------------|---------------|-------|
| `web-rmms-incident` | Incident | `incident` · Live incidents GET/POST/GET{id}/close + sessions + asset-types + uploads/files/detect · cite Patrol/Integration/AiVision · MFE `Linm.Web.RMMS.Mobile` `/web-rmms-incident` · **cấm** invent IncidentHubController |

→ resolves **UNCLEAR-DOMAIN-MAP-INC** / GAP-DOMAIN-MAP-INC.

## 2. FormMode ↔ API

Surfaces **INC-L** (list) · **INC-N** (create) · **INC-D** (detail). Peer **INC-V/C/E** nav-only. GPS deny → block Create / Detect / geo. Nested std mount `/new` `/:id` (Design resolved).

| Mode / zone | UI | API | Write | Notes |
|-------------|----|-----|-------|-------|
| INC-L search | SearchInput | `GET incident/incidents?search=` | — | empty → EmptyState |
| INC-L filters | Chip status/severity | query `status` · `severity` | — | LOOKUP_STATIC |
| INC-L cards | CardList | list DTO | — | Title/Type/Code/Route/Km/Status/**HasGps** · **không** Lat/Lng |
| INC-L fab | FAB | — | nav `/incident/new` | — |
| INC-N assetPick | LookupGrid | `GET integration/asset-types` | → AssetLabel / Title | empty pick toast |
| INC-N kind | Segment 3 | LOOKUP_STATIC | → `IncidentType` | Hư/Mất/Hỏng |
| INC-N checklist | CheckboxGroup | local by asset | fold → `Description` | **no** checklist API |
| INC-N photos | PhotoRow | uploads hoặc files/* | → `MediaIds` | FileService guids |
| INC-N detect | Button | `POST ai-vision/detect` | Lat/Lng/AccuracyM | GPS Acc≤30 · optional |
| INC-N sessionStamp | Text RO | `GET patrol/sessions` | `RouteName` · `KmStart` | live-only · empty toast+block Route |
| INC-N gpsLock | GPS | `navigator.geolocation` | `HasGps=true` | deny → block · **cấm** fake |
| INC-N severity | Select | LOOKUP_STATIC | `Severity` | useFormOptions |
| INC-N create | Button | `POST incident/incidents` | CreateIncidentRequest | required Title·RouteName·IncidentType·Status·RequestedAt |
| INC-N draftOffline | Button | — | local queue peer offline | **cấm** invent OfflineQueueController |
| INC-D detail | Text RO | `GET incident/incidents/{id}` | — | **cấm** invent Lat |
| INC-D close | Button+Note | `POST …/{id}/close` | `Note` optional | empty Note OK |

### DEC-CREATE-01 — CreateIncidentRequest (HARD · GAP-PGC-BE-01)

**DTO:** `CreateIncidentRequest` · cite Incident Models DTOs  
**Controller:** `IncidentsController` · `POST api/v1/incident/incidents`  
**Service:** `IncidentRecordService.CreateAsync` · MediaIds CSV max 10.

| Field | Source map (INC-*) |
|-------|-------------------|
| `MediaIds` | FileService guids từ uploads/files · max 10 · **cấm** full URL |
| `DetectionId` | optional detect.`Id`.ToString() |
| `Description` | free text + checklist labels fold (GAP-MOB-INC-CREATE-CHK-01 local) |
| `HasGps` | **true** khi có fix · **không** cột Lat/Lng trên Create (**UNCLEAR-PGC-BE-01** → cite HasGps only) |
| `Title` | asset label / seed |
| `RouteName` | session stamp Route |
| `IncidentType` | kind Segment |
| `Status` | `new` (online) · draft offline = local only |
| `RequestedAt` | client UTC now |
| `Severity` / `AssetLabel` / `KmStart` | optional bind §B |

→ resolves **UNCLEAR-PGC-BE-01** (SA cite) · Lat columns deferred BE — **no MIG at SA**.

### Live endpoints (HARD — real-data §B)

| Method | BFF path (client) | Downstream | Response bind | Status |
|--------|-------------------|------------|----------------|--------|
| GET | `mobile-bff/api/v1/incident/incidents` | Incident | INC-L cards · filters | **Live** |
| POST | `mobile-bff/api/v1/incident/incidents` | Incident | create toast · nav opt | **Live** |
| GET | `mobile-bff/api/v1/incident/incidents/{id}` | Incident | INC-D RO | **Live** |
| POST | `mobile-bff/api/v1/incident/incidents/{id}/close` | Incident | close · back list | **Live** |
| GET | `mobile-bff/api/v1/patrol/sessions` | Patrol | stamp Route/Km · empty block | **Live** |
| GET | `mobile-bff/api/v1/integration/asset-types` | Integration | INC-N pick | **Live** |
| POST | `mobile-bff/api/v1/ai-vision/uploads` (+ PUT) | AiVision | optional pre-detect | **Live** |
| POST | `mobile-bff/api/v1/files/init` · PUT · `commit` | FileService | guids → MediaIds | **Live** |
| POST | `mobile-bff/api/v1/ai-vision/detect` | AiVision | optional DetectionId | **Live** |

- Client base: `http://localhost:5202` + `mobile-bff/api/v1` — **không** gọi `web-bff` từ Mobile MFE.
- **API Mới:** none · **migration:** none · **entity mới:** none.
- Labels: `useFormOptions()` · **cấm** hardcode VN.
- Sessions: UNCLEAR-SESS → Dev/QA empty toast · **cấm** itemsOrDemo.

## 3. BFF vs API

| Layer | Role for Incident pack |
|-------|------------------------|
| Mobile.Bff `:5202` | sole FE entry · proxy incident / patrol / integration / ai-vision / files · auth |
| RMMS.Service.Api | Live domains above — **no new** IncidentHub controller |
| web-bff | cite only · **not** Mobile client base |

Fail: 503/network → toast + retry · 4xx create/close → toast · GPS deny → disable gated actions — **cấm** mock SSOT · **cấm** fake coords · **cấm** silent ok.

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
| INC-L | Search+Chip · CardList HasGps · FAB → new · EmptyState |
| INC-N | asset pick · kind · checklist local · photos/detect · session · GPS · severity · create · draftOffline |
| INC-D | RO fields · close Note optional |
| Peer | INC-V/C/E nav-only · **không** WO CRUD primary |
| Required create | Title* · RouteName* · IncidentType* · Status* · RequestedAt* · HasGps when fix · MediaIds opt |
| HARD | GPS deny block · sessions live-only · checklist local · useFormOptions · nested `/new` `/:id` |
| REMOVED | `me*` · feedback · cam-view · journal B–E · invent path |
| DES-GRID / LinErpListFilterBar | **N/A** phone |
| Route | `mfeStdRoute=/web-rmms-incident` · product `/incident` |

## 6. Risks / open

| ID | Status |
|----|--------|
| UNCLEAR-DOMAIN-MAP-INC | **resolved** — DOMAIN-MAP row Incident |
| UNCLEAR-PGC-BE-01 | **resolved SA** — HasGps only · no Lat Create · no MIG SA |
| UNCLEAR-CHK-01 / PEER-VIS / STD-NEST | **resolved Design** |
| UNCLEAR-SESS | open → Dev/QA empty toast · **cấm** itemsOrDemo |
| GAP-PGC-BE-01 Lat cols | deferred BE — **no** MIG at SA |

## 7. Handoff

| Next | Need |
|------|------|
| team-lead | Tasks INC-L/N/D wire · Live endpoints · HasGps · nested mount |
| Dev | Mobile MFE only · `/agent-dev` · **cấm** native iOS/Android · empty sessions toast |
| QA | empty list · GPS deny · Acc>30 detect · close empty Note · offline draft · no fake · no Web BFF · E2E queued |

## Version meta

`skillVersion=2026.09.05.03` · `contentHash=sha256:665f3697a399a948edb0ab14da5fc13716b477aa84b0b8e43f6ca33eb7216d2d` · `solution_confirm=approve` · `writtenAt=2026-09-26T04:20:00.000Z`
