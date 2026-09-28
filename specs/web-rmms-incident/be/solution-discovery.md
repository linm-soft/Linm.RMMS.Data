# SA — Solution — web-rmms-incident

> Status: **confirmed** · autoApprove ON · task `task_73c6c2b2` · 2026-09-27T12:32:00.000Z  
> **Cấm** ERP.* · **cấm** invent `web-rmms-incident` controller/path · **cấm** fake GPS/ca · **cấm** itemsOrDemo sessions · **cấm** Step 4b / migration ở role SA · **cấm** Write MFE/native · **cấm** Web BFF base từ Mobile MFE.

| | |
|--|--|
| Feature | `web-rmms-incident` |
| Title | Sự cố — Pattern B submit-validate (edit INC-N) |
| Role | `sa` |
| packKind | `list` |
| changeScope | `edit_page` |
| formPattern | Mobile full phone ≤430 · Pattern B INC-N · N/A ERP Modal/Slideout · useFormOptions |
| domain | **Incident** (`incident`) · cite **Patrol** (sessions) · **Integration** (asset-types) · **AiVision** (+ files) |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| mfeStdRoute | `/van-de` · `/van-de/moi` · `/van-de/:id` |
| mfeStdUrl | `http://localhost:9301/van-de/moi` |
| productRoute | `/incident` · `/incident/new` · `/incident/:id` (alias std `/van-de*`) |
| be | `D:/AI-QLBD/Linm.RMMS.WebService` |
| BFF | Mobile.Bff `http://localhost:5202` · prefix `mobile-bff/api/v1` |
| contentHash | `sha256:d753df685c7334cda81339c1c6daccaa3463c4e8c6350eaff5562a6e41584015` |
| skillVersion | `2026.09.05.03` |
| solution_confirm | **approve** (autoApprove) |
| deltaCite | `docs/plan/web-rmms-mobile/SUBMIT-VALIDATE.md` · IncidentCreatePage |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-incident/ui/prototype/index.html` |
| prior SA | new_page `task_b1cd136a` — keep DEC-CREATE-01 / Live endpoints · **delta** Pattern B FE gate only |

## 1. Domain / ownership

| Item | Decision |
|------|----------|
| DOMAIN-MAP slug | `web-rmms-incident` → **Incident** / `incident` (row exists — keep) |
| Rationale | edit_page Pattern B = client validate UX trên INC-N · **không** domain mới · **không** API mới |
| Cite peers | prior INC-L/N/D · offline draft · Maintenance WO peer-only |
| API folder | **reuse** Incident · Patrol sessions · Integration asset-types · AiVision/FileService — **no new** controller |
| **Cấm** | invent path · ERP.* · Web BFF · Me* · journal B–E · invent Lat on Create · primary WO CRUD |

**DOMAIN-MAP row (applied — unchanged):**

| Feature slug | Domain Pascal | kebab |
|--------------|---------------|-------|
| `web-rmms-incident` | Incident | `incident` · Live GET/POST/GET{id}/close + sessions + asset-types + uploads/files/detect · MFE Mobile · **cấm** invent IncidentHubController |

## 2. FormMode ↔ API

Surfaces keep **INC-L** · **INC-N (Delta Pattern B)** · **INC-D**. Peer **INC-V/C/E** nav-only.

### DEC-PB-01 — Pattern B client gate (HARD · edit_page)

| Rule | Decision |
|------|----------|
| create Button | `disabled` **chỉ** khi `creating` · **cấm** `disabled={!canCreate}` |
| validate.banner | client `string[]` trước POST · keys AC-PB-04 · useFormOptions · **không** API validate endpoint mới |
| GPS deny | gate **on-submit** (+ modal deny) · **cấm** khóa nút Create vì GPS · deny → **không** gọi POST |
| photos | capture=`environment` giữ · MediaIds path giữ |
| sessions empty | banner key `incident.session.empty` · block Route on-submit · live-only |
| asset empty | banner key `incident.pick.title` · block on-submit |
| offline | banner `incident.offline` · draft local peer · **cấm** invent OfflineQueueController |

Banner keys (PO AC-PB-04 · Design confirmed):

| Condition | i18n key |
|-----------|----------|
| asset missing | `incident.pick.title` |
| session empty | `incident.session.empty` |
| GPS deny | `incident.gps.deny` (+ modal `deny.title` / `deny.body`) |
| offline | `incident.offline` |

### FormMode ↔ API matrix

| Mode / zone | UI | API | Write | Notes |
|-------------|----|-----|-------|-------|
| INC-L * | Search+Chip+Card+FAB | `GET incident/incidents` | — | **keep** prior · HasGps on card · no Lat |
| INC-N assetPick | LookupGrid | `GET integration/asset-types` | → Title/AssetLabel | empty → banner · on-submit block |
| INC-N kind | Segment | LOOKUP_STATIC | → `IncidentType` | keep |
| INC-N checklist | CheckboxGroup | local | → `Description` | no checklist API |
| INC-N photos | PhotoRow | uploads/files | → `MediaIds` | keep capture |
| INC-N detect | Button | `POST ai-vision/detect` | DetectionId · Acc≤30 | optional · GPS gate on action |
| INC-N sessionStamp | Text RO | `GET patrol/sessions` | RouteName · KmStart | empty → banner |
| INC-N gpsLock | GPS | `navigator.geolocation` | `HasGps=true` | deny → on-submit banner/modal · **cấm** fake |
| INC-N validate.banner | Banner | — | — | Pattern B string[] · **no** BE |
| INC-N create | Button | `POST incident/incidents` | CreateIncidentRequest | disabled chỉ `creating` · preflight banner then POST |
| INC-N draftOffline | Button | — | local queue | peer offline |
| INC-D * | RO + close | GET{id} · POST close | Note opt | **keep** |

### DEC-CREATE-01 — CreateIncidentRequest (HARD · keep · GAP-PGC-BE-01)

**DTO:** `CreateIncidentRequest` · **Controller:** `IncidentsController` · `POST api/v1/incident/incidents`  
**Service:** `IncidentRecordService.CreateAsync` · MediaIds CSV max 10.

| Field | Source map |
|-------|------------|
| `MediaIds` | FileService guids · max 10 · **cấm** full URL |
| `DetectionId` | optional detect Id |
| `Description` | free + checklist fold |
| `HasGps` | **true** khi có fix · **không** cột Lat/Lng Create |
| `Title` · `RouteName` · `IncidentType` · `Status` | required · Status=`new` online |
| `RequestedAt` | client ISO UTC lúc submit · server UtcNow fallback |
| `Severity` / `AssetLabel` / `KmStart` | optional |

→ Pattern B **không** đổi DTO/shape · chỉ đổi thời điểm client gate (on-submit + banner).

### Live endpoints (HARD — real-data §B · reuse)

| Method | BFF path (client) | Downstream | Status |
|--------|-------------------|------------|--------|
| GET | `mobile-bff/api/v1/incident/incidents` | Incident | **Live** |
| POST | `mobile-bff/api/v1/incident/incidents` | Incident | **Live** |
| GET | `mobile-bff/api/v1/incident/incidents/{id}` | Incident | **Live** |
| POST | `mobile-bff/api/v1/incident/incidents/{id}/close` | Incident | **Live** |
| GET | `mobile-bff/api/v1/patrol/sessions` | Patrol | **Live** |
| GET | `mobile-bff/api/v1/integration/asset-types` | Integration | **Live** |
| POST | `mobile-bff/api/v1/ai-vision/uploads` (+ PUT) | AiVision | **Live** |
| POST | `mobile-bff/api/v1/files/init` · PUT · `commit` | FileService | **Live** |
| POST | `mobile-bff/api/v1/ai-vision/detect` | AiVision | **Live** |

- Client base: `:5202` + `mobile-bff/api/v1` — **không** `web-bff` từ Mobile MFE.
- **API Mới:** none · **migration:** none · **entity mới:** none · **Step 4b:** skip SA.
- Labels: `useFormOptions()` · **cấm** hardcode VN.
- Sessions: empty → banner · **cấm** itemsOrDemo.

## 3. BFF vs API

| Layer | Role |
|-------|------|
| Mobile.Bff `:5202` | sole FE entry · proxy incident/patrol/integration/ai-vision/files |
| RMMS.Service.Api | Live domains — **no new** controller |
| web-bff | cite only · **not** Mobile client base |

Fail: 503/network → toast+retry · 4xx create/close → toast · Pattern B preflight → banner (no POST) · GPS deny on-submit → modal+banner · **cấm** mock SSOT · **cấm** fake coords.

## 4. Entity / migration

| Item | Decision |
|------|----------|
| Tables / EF / Step 4b | **none** at SA · edit_page FE-only Delta |
| Upload | FileService + optional AiVision — **cấm** invent media controller |
| Lat columns | GAP-PGC-BE-01 deferred — HasGps only · **no MIG** |

## 5. FE surface (SA contract — Dev implements)

| Zone | Contract |
|------|----------|
| INC-L / INC-D | **keep** prior SA · Search+Chip+Card+FAB · close Note |
| INC-N Delta | Pattern B: create always-on · validate.banner string[] · GPS deny on-submit · photos capture giữ |
| Required create | Title* · RouteName* · IncidentType* · Status* · HasGps when fix · RequestedAt default · MediaIds opt |
| HARD | useFormOptions banner keys · sessions live-only · checklist local · nested `/van-de/moi` `/:id` |
| REMOVED | `disabled={!canCreate}` · Me* · journal B–E · invent path |
| DES-GRID / LinErpListFilterBar | **N/A** phone |
| Route | `mfeStdRoute=/van-de/moi` · product `/incident*` |

## 6. Risks / open

| ID | Status |
|----|--------|
| UNCLEAR-PB-BANNER-01 | **resolved** PO AC-PB-04 · Design |
| UNCLEAR-DOMAIN-MAP-INC / PGC-BE-01 | **resolved** prior SA · keep |
| UNCLEAR-SESS | Dev/QA empty banner · **cấm** itemsOrDemo |
| GAP-PGC-BE-01 Lat | deferred BE — **no** MIG at SA |

## 7. Handoff

| Next | Need |
|------|------|
| team-lead | T-* edit IncidentCreatePage Pattern B · keep L/D · no BE task |
| Dev | Mobile MFE only · `/agent-dev` · align-mobile-to-mfe no_demo · **cấm** native · **cấm** Step 4b |
| QA | AC-PB-01…04 · GPS deny on-submit · banner keys · create always-on · E2E queued `/agent-qa*` |

## Version meta

`skillVersion=2026.09.05.03` · `contentHash=sha256:d753df685c7334cda81339c1c6daccaa3463c4e8c6350eaff5562a6e41584015` · `solution_confirm=approve` · `writtenAt=2026-09-27T12:32:00.000Z` · `taskId=task_73c6c2b2`
