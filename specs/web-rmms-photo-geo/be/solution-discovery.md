# SA — Solution — web-rmms-photo-geo

> Status: **confirmed** · autoApprove ON · task `task_8360a321` · 2026-09-26T00:10:00.000Z  
> **Cấm** ERP.* · **cấm** invent `api/v1/photo-geo*` / PhotoGeoController · **cấm** fake GPS · **cấm** invent Lat/ObjectLat cột Incident · **cấm** Step 4b / migration / e2e / `yarn start:std` ở role SA · **cấm** Write MFE/native · **cấm** web-bff client từ Mobile MFE · **cấm** client `objectKey` / resign URL img src.

| | |
|--|--|
| Feature | `web-rmms-photo-geo` |
| Title | Overlay chụp ảnh có tọa độ |
| Role | `sa` |
| packKind | `list` · surface **sheet overlay** `#sheet-pgc` · DES-MOB-PGC |
| changeScope | `new_page` |
| formPattern | Mobile sheet overlay phone ≤430 · Android 1-1 · N/A ERP Modal/Slideout · useFormOptions |
| domain | **Incident** (host consumers) · Live **FileService** `files/*` · optional **AiVision** detect · optional **Patrol** sessions · **cấm** domain PhotoGeo mới |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` · route `/web-rmms-photo-geo` |
| mfeStdUrl | `http://localhost:9301/web-rmms-photo-geo` |
| productRoute | overlay `openCapture('photo-geo')` từ INC/VIS/FR — **không** hub Field row |
| nativeCite | peer `photo-geo-capture` · Android `#sheet-pgc` · DES-MOB-PGC |
| be | `D:/AI-QLBD/Linm.RMMS.WebService` |
| BFF | Mobile.Bff `http://localhost:5202` · prefix `mobile-bff/api/v1` |
| contentHash | `sha256:2282c3b64ab8701681f5edbc548b5cf1a2221159d9ffb779dfe03d186010f7a4` |
| skillVersion | `2026.09.05.03` |
| solution_confirm | **approve** (autoApprove) |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-photo-geo/ui/prototype/index.html` |

## 1. Domain / ownership

| Item | Decision |
|------|----------|
| DOMAIN-MAP slug | `web-rmms-photo-geo` → **Incident** / `incident` |
| Rationale | Overlay trả `attachmentId`(+sidecar) cho host INC/VIS/FR · product entry `openCapture('photo-geo')` · **không** owner File/AiVision riêng; files/detect/sessions = cite Live |
| Cite peers | `photo-geo-capture` (native SA confirmed) · `web-rmms-vis-capture` · `web-rmms-field-reflect` · `web-rmms-incident` · `web-rmms-gis` (HITL map host) |
| API folder | **reuse** FileService · AiVisionOps detect · Patrol sessions — **no new** PhotoGeo controller |
| **Cấm** | invent `photo-geo/*` · ERP.* · web-bff base · Me/feedback/cam-view · journal B–E · multi-pin · fake coords |

**DOMAIN-MAP row (applied):**

| Feature slug | Domain Pascal | kebab |
|--------------|---------------|-------|
| `web-rmms-photo-geo` | Incident | `incident` · Live files init/PUT/commit/GET · optional ai-vision/detect · optional patrol/sessions · cite FileService/AiVision/Patrol/Gis HITL · MFE `Linm.Web.RMMS.Mobile` `/web-rmms-photo-geo` · **cấm** invent PhotoGeoController / `photo-geo*` |

→ resolves **UNCLEAR-DOMAIN-MAP-PGC** / GAP-PGC-DOMAIN-01.

## 2. FormMode ↔ API

Single surface **PGC** sheet (still → gim1 → GPS meta → HITL map → files commit → return). GPS deny → block shutter/use/detect. Acc≤30 m gates detect. Object Lat/Lng = HITL confirmed (**≠** photographer GPS).

| Mode / zone | UI | API / device | Write | Notes |
|-------------|----|--------------|-------|-------|
| PGC chrome | `#sheet-pgc` sheet | — | — | phone ≤430 · DES-MOB-PGC · hide tab footer |
| capturePreview | CameraStill | getUserMedia / kit | JPEG bytes | **cấm** file-input primary |
| btnShutter | Button | GPS gate | freeze still | deny → disable |
| gimPin | MapPinTap | on-device | tapNx/tapNy sidecar | 1 pin · **cấm** multi |
| rowPhotog | ListRow RO | device GPS | photographerLat/Lng sidecar | **≠** detect Lat |
| rowDistance | ListRow RO | on-device / HITL | distanceM sidecar | useFormOptions label |
| rowObject | ListRow RO | after HITL | objectLat/Lng sidecar | display |
| mapConfirm | MapHitl | GIS clip reuse | confirm object pin | **cấm** invent map API |
| btnUse | Button | after commit | return host | attachmentId + sidecar |
| gpsLock | GPS | `navigator.geolocation` | HasGps gate | deny → DES-MOB-GPS-DENY |
| files* | File | init→PUT→commit→GET | uploadId / attachmentId | purpose=`photo-geo-capture` |
| detect | Button optional | `POST ai-vision/detect` | DetectAiVisionRequest | Lat/Lng=**object** · Acc≤30 |
| session.routeKm | ListRow RO optional | `GET patrol/sessions` | toast only | **cấm** fake |

### DEC-PGC-BE-01 — object coords persist (HARD)

| Layer | Decision |
|-------|----------|
| P1 persist | **sidecar on-device** + sheet return `{attachmentId, objectLat, objectLng, photographerLat/Lng, distanceM, accuracyM, …}` |
| Host CreateIncident | `MediaIds` (attachment guid) + `HasGps=true` · **không** cột ObjectLat/Lng / Lat trên Create |
| Future object-cols | TL backlog riêng · **cấm** invent field / migration turn này |
| Step 4b | **N/A** at SA |

→ resolves **UNCLEAR-PGC-BE-01** / GAP-PGC-BE-01 (align native peer).

### DEC-FILES — FileService Live (HARD)

| Step | BFF path (client) | Downstream | Bind |
|------|-------------------|------------|------|
| Init | `POST mobile-bff/api/v1/files/init` | FileService | uploadId · purpose=`photo-geo-capture` · product=`rmms` · `image/jpeg` |
| PUT | `PUT …/files/{uploadId}/object` | object store | JPEG bytes (+EXIF when available) |
| Commit | `POST …/files/commit` | FileService | → `attachmentId` |
| Preview | `GET …/files/{id}/object` | JWT bytes | **cấm** persist resign URL (FILE-ATT-09) |

**Cấm** client `objectKey` (FILE-ATT-08) · invent `photo-geo` path.

### DEC-DETECT — optional AiVision (HARD)

| Field | Role PGC |
|-------|----------|
| `Lat` / `Lng` | **object HITL confirmed** · **cấm** photographer GPS |
| `AccuracyM` | device · ≤30 else **no POST** |
| Image ref | attachment / bytes after commit · peer DTO |
| Engine | P1 / LOOKUP cite when required by Live DTO |

Downstream: `AiVisionOpsController` · Vision host via ServiceEndpoints (cite vis-capture DEC-DETECT-HOST) · **cấm** MFE direct `:5311` / `:5301` · **cấm** on-device ML.

### Live endpoints (HARD — real-data §B)

| Method | BFF path (client) | Downstream | Response bind | Status |
|--------|-------------------|------------|----------------|--------|
| POST | `mobile-bff/api/v1/files/init` | FileService | uploadId | **Live** |
| PUT | `mobile-bff/api/v1/files/{uploadId}/object` | FileService | — | **Live** |
| POST | `mobile-bff/api/v1/files/commit` | FileService | attachmentId | **Live** |
| GET | `mobile-bff/api/v1/files/{id}/object` | FileService JWT | preview bytes | **Live** |
| POST | `mobile-bff/api/v1/ai-vision/detect` | AiVisionOps → Vision | optional | **Live** |
| GET | `mobile-bff/api/v1/patrol/sessions` | Patrol | optional Route/Km toast | **Live** |
| POST | `mobile-bff/api/v1/incident/incidents` | Incident (host) | MediaIds + HasGps | **Live** (consumer) |

- Client base: `http://localhost:5202` + `mobile-bff/api/v1` — **không** gọi `web-bff` từ Mobile MFE.
- **API Mới:** none · **migration:** none · **entity mới:** none.
- Labels: `useFormOptions()` · **cấm** hardcode VN.
- Map HITL: reuse `web-rmms-gis` clip · **cấm** invent tiles/map API in pack.

## 3. BFF vs API

| Layer | Role for PGC |
|-------|----------------|
| Mobile.Bff `:5202` | sole FE entry · File NuGet / proxy files · ai-vision · patrol · auth |
| RMMS.Service.Api | FileService · AiVision detect · Patrol sessions · Incident Create (host) — **no new** PhotoGeo |
| Linm.RMMS.Vision `:5311` | optional detect infer (via API/BFF) · **cấm** MFE direct |
| web-bff | cite only · **not** Mobile client base |
| Device | GPS · camera · gim · object geo math · HITL pin |

Fail: 503/network → toast + retry · GPS deny → modal block · Acc>30 → banner · no detect — **cấm** mock SSOT · **cấm** fake attachmentId.

## 4. Entity / migration

| Item | Decision |
|------|----------|
| Tables | none (reuse File attachments · optional detections · incidents · patrol_sessions) |
| EF migration | **skip** — GAP-PGC-BE-01 P1 sidecar · no ObjectLat column |
| Step 4b | **skip** at SA · N/A (no new endpoint) |
| Sidecar schema (FE) | attachmentId · objectLat/Lng · photographerLat/Lng · distanceM · accuracyM · tapNx/Ny · heading/pitch opt |

## 5. FE surface (SA contract — Dev implements)

| Zone | Contract |
|------|----------|
| `#sheet-pgc` | full-height capture · Android 1-1 · DES-MOB-PGC |
| `#capture-preview` | getUserMedia/kit primary |
| `#gim-pin` | 1 tap · drag lại |
| `#map-confirm` | GIS clip HITL · enable `#btn-use` after confirm |
| `#btn-use` | files commit → return attachmentId+sidecar · close sheet |
| GPS | deny → DES-MOB-GPS-DENY · block shutter/use/detect |
| DES-GRID / LinErpListFilterBar | **N/A** phone overlay |
| Route | `mfeStdRoute=/web-rmms-photo-geo` · product overlay consumers |
| REMOVED | Me* · journal B–E · invent photo-geo API · multi-pin · Kind B desktop |

## 6. Risks / open

| id | Status | Owner |
|----|--------|-------|
| UNCLEAR-DOMAIN-MAP-PGC | **resolved** SA · DOMAIN-MAP row applied | — |
| UNCLEAR-PGC-BE-01 | **resolved** SA · sidecar + MediaIds + HasGps · no Lat column | — |
| UNCLEAR-PACK-01 / WEB-CAM / MAP-HOST / COMPASS | resolved Design | — |
| WEB-CAM kit wire | **open** → Dev · getUserMedia/kit | Dev |
| MAP-HOST clip reuse | **open** → Dev · cite web-rmms-gis | Dev |

## 7. Handoff

| Next | Packet |
|------|--------|
| team-lead | FormMode↔API · Live endpoints · DOMAIN-MAP · DEC-PGC-BE-01 · DEC-FILES · compact |
| Dev | MFE Mobile · VITE_MOBILE_API_URL `:5202` · GPS gate · files* · HITL GIS · return sidecar · no web-bff |
| QA | GPS deny · Acc>30 · commit key · HITL đổi lat · no fake · no invent path · E2E queued |

`solution_confirm=approve` · autoApprove ON · next `/agent-team-lead` · **roleOnly stop** (GAP-PKT-ROLE-01).

---
<!-- Version meta: skillId=agent-sa skillVersion=2026.09.05.03 schemaVersion=1 contentHash=sha256:2282c3b64ab8701681f5edbc548b5cf1a2221159d9ffb779dfe03d186010f7a4 -->
