# SA — Solution — web-rmms-photo-geo

> Status: **confirmed** · autoApprove ON · task `task_b182eace` · 2026-09-27T13:20:00.000Z  
> changeScope=`edit_page` · **Keep** prior DEC-PGC-BE-01 / DEC-FILES / DEC-DETECT / DOMAIN-MAP · **Delta** Pattern B CTA + route `/anh-vi-tri`  
> **Cấm** ERP.* · **cấm** invent `api/v1/photo-geo*` / PhotoGeoController · **cấm** fake GPS · **cấm** invent Lat/ObjectLat cột Incident · **cấm** Step 4b / migration / e2e / `yarn start:std` ở role SA · **cấm** Write MFE/native · **cấm** web-bff client từ Mobile MFE · **cấm** client `objectKey` / resign URL img src.

| | |
|--|--|
| Feature | `web-rmms-photo-geo` |
| Title | Overlay chụp ảnh có tọa độ |
| Role | `sa` |
| packKind | `list` · surface **sheet overlay** `#sheet-pgc` · DES-MOB-PGC |
| changeScope | `edit_page` |
| formPattern | Mobile sheet overlay phone ≤430 · Android 1-1 · N/A ERP Modal/Slideout · useFormOptions |
| domain | **Incident** (host consumers) · Live **FileService** `files/*` · optional **AiVision** detect · optional **Patrol** sessions · **cấm** domain PhotoGeo mới |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` · route `/anh-vi-tri` |
| mfeStdUrl | `http://localhost:9301/anh-vi-tri` |
| productRoute | overlay `openCapture('photo-geo')` từ INC/VIS/FR · std route `/anh-vi-tri` · **cấm** `/web-rmms-photo-geo` |
| nativeCite | peer `photo-geo-capture` · Android `#sheet-pgc` · DES-MOB-PGC · `/align-mobile-to-mfe` |
| be | `D:/AI-QLBD/Linm.RMMS.WebService` |
| BFF | Mobile.Bff `http://localhost:5202` · prefix `mobile-bff/api/v1` · **cấm** web-bff |
| contentHash | `sha256:525b8f61bbe397050bb1049e38683d6c333c7283165859967e927c1dc285b9ba` |
| skillVersion | `2026.09.05.03` |
| solution_confirm | **approve** (autoApprove) |
| editCite | `docs/plan/web-rmms-mobile/SUBMIT-VALIDATE.md` · Pattern B |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-photo-geo/ui/prototype/index.html` |

## 0. Delta edit_page (Pattern B) — HARD

| Item | Keep | Delta |
|------|------|-------|
| Domain / Live APIs | DEC-PGC-BE-01 · DEC-FILES · DEC-DETECT · DOMAIN-MAP Incident | **none** API/entity/migration |
| Route | product overlay consumers | SSOT `mfeStdRoute=/anh-vi-tri` · mfeStdUrl `http://localhost:9301/anh-vi-tri` · **cấm** `/web-rmms-photo-geo` |
| CTA disable | File flow · HITL · files commit | **bỏ** `disabled={!canShutter\|!canDetect\|!canUse}` (pre-disable thiếu data) · **chỉ** `disabled` khi `uploading` / `detecting` / `pending` |
| GPS | HasGps sidecar · deny modal | deny **on-click** → DES-MOB-GPS-DENY `#modal-gps` · **không** pre-disable shutter vì thiếu GPS trước click |
| Validation | — | `validationAttempted` + `#validation-banner` `string[]` · AC-PGC-15 |
| BFF | Mobile.Bff only | optional `integration/users` forward **nếu thiếu** · `road-routes/search` already ok · **cấm** invent photo-geo path |
| Align | peer photo-geo-capture | `/align-mobile-to-mfe` · **cấm** tab/route/icon mới · **cấm** android/ios proto edit |

## 1. Domain / ownership

| Item | Decision |
|------|----------|
| DOMAIN-MAP slug | `web-rmms-photo-geo` → **Incident** / `incident` |
| Rationale | Overlay trả `attachmentId`(+sidecar) cho host INC/VIS/FR · **không** owner File/AiVision riêng; files/detect/sessions = cite Live |
| Cite peers | `photo-geo-capture` · `web-rmms-vis-capture` · `web-rmms-field-reflect` · `web-rmms-incident` · `web-rmms-gis` (HITL) |
| API folder | **reuse** FileService · AiVisionOps detect · Patrol sessions — **no new** PhotoGeo controller |
| **Cấm** | invent `photo-geo/*` · ERP.* · web-bff base · Me/feedback/cam-view · journal B–E · multi-pin · fake coords |

**DOMAIN-MAP row (kept):**

| Feature slug | Domain Pascal | kebab |
|--------------|---------------|-------|
| `web-rmms-photo-geo` | Incident | `incident` · Live files init/PUT/commit/GET · optional ai-vision/detect · optional patrol/sessions · cite FileService/AiVision/Patrol/Gis HITL · MFE `Linm.Web.RMMS.Mobile` · std route `/anh-vi-tri` · host MediaIds+HasGps · **cấm** invent PhotoGeoController / `photo-geo*` |

→ **UNCLEAR-DOMAIN-MAP-PGC** kept resolved · TL may note MFE path cite `/anh-vi-tri` vs legacy slug path in DOMAIN-MAP text (no API change).

## 2. FormMode ↔ API

Single surface **PGC** sheet (still → gim1 → GPS meta → HITL map → files commit → return). Pattern B: shutter/detect/use **clickable** unless in-flight; GPS deny handled on click via modal; validation banner after `validationAttempted`. Object Lat/Lng = HITL confirmed (**≠** photographer GPS).

| Mode / zone | UI | API / device | Write | Notes |
|-------------|----|--------------|-------|-------|
| PGC chrome | `#sheet-pgc` sheet | — | — | phone ≤430 · DES-MOB-PGC · hide tab footer |
| capturePreview | CameraStill | getUserMedia / kit | JPEG bytes | **cấm** file-input primary |
| btnShutter | Button | GPS on-click | freeze still | Pattern B · **no** pre-disable · deny→`#modal-gps` |
| gimPin | MapPinTap | on-device | tapNx/tapNy sidecar | 1 pin · **cấm** multi |
| rowPhotog | ListRow RO | device GPS | photographerLat/Lng sidecar | **≠** detect Lat |
| rowDistance | ListRow RO | on-device / HITL | distanceM sidecar | useFormOptions label |
| rowObject | ListRow RO | after HITL | objectLat/Lng sidecar | display |
| mapConfirm | MapHitl | GIS clip reuse | confirm object pin | **cấm** invent map API |
| btnDetect | Button optional | `POST ai-vision/detect` | DetectAiVisionRequest | disable **only** `detecting` · Acc≤30 gate on submit |
| btnUse | Button | after commit | return host | disable **only** `uploading`/`pending` · attachmentId+sidecar |
| validationBanner | Banner[] | client | — | `#validation-banner` after `validationAttempted` |
| gpsLock | GPS | `navigator.geolocation` | HasGps gate | deny-on-click DES-MOB-GPS-DENY |
| files* | File | init→PUT→commit→GET | uploadId / attachmentId | purpose=`photo-geo-capture` |
| session.routeKm | ListRow RO optional | `GET patrol/sessions` | toast only | **cấm** fake |

### DEC-PGC-BE-01 — object coords persist (HARD · keep)

| Layer | Decision |
|-------|----------|
| P1 persist | **sidecar on-device** + sheet return `{attachmentId, objectLat, objectLng, photographerLat/Lng, distanceM, accuracyM, …}` |
| Host CreateIncident | `MediaIds` (attachment guid) + `HasGps=true` · **không** cột ObjectLat/Lng / Lat trên Create |
| Future object-cols | TL backlog riêng · **cấm** invent field / migration turn này |
| Step 4b | **N/A** at SA |

→ **UNCLEAR-PGC-BE-01** kept resolved.

### DEC-FILES — FileService Live (HARD · keep)

| Step | BFF path (client) | Downstream | Bind |
|------|-------------------|------------|------|
| Init | `POST mobile-bff/api/v1/files/init` | FileService | uploadId · purpose=`photo-geo-capture` · product=`rmms` · `image/jpeg` |
| PUT | `PUT …/files/{uploadId}/object` | object store | JPEG bytes (+EXIF when available) |
| Commit | `POST …/files/commit` | FileService | → `attachmentId` |
| Preview | `GET …/files/{id}/object` | JWT bytes | **cấm** persist resign URL (FILE-ATT-09) |

**Cấm** client `objectKey` (FILE-ATT-08) · invent `photo-geo` path.

### DEC-DETECT — optional AiVision (HARD · keep)

| Field | Role PGC |
|-------|----------|
| `Lat` / `Lng` | **object HITL confirmed** · **cấm** photographer GPS |
| `AccuracyM` | device · ≤30 else **no POST** (banner / validation) |
| Image ref | attachment / bytes after commit · peer DTO |
| Engine | P1 / LOOKUP cite when required by Live DTO |

Downstream: `AiVisionOpsController` · Vision via ServiceEndpoints · **cấm** MFE direct `:5311` / `:5301` · **cấm** on-device ML.

### Live endpoints (HARD — real-data §B · keep)

| Method | BFF path (client) | Downstream | Response bind | Status |
|--------|-------------------|------------|----------------|--------|
| POST | `mobile-bff/api/v1/files/init` | FileService | uploadId | **Live** |
| PUT | `mobile-bff/api/v1/files/{uploadId}/object` | FileService | — | **Live** |
| POST | `mobile-bff/api/v1/files/commit` | FileService | attachmentId | **Live** |
| GET | `mobile-bff/api/v1/files/{id}/object` | FileService JWT | preview bytes | **Live** |
| POST | `mobile-bff/api/v1/ai-vision/detect` | AiVisionOps → Vision | optional | **Live** |
| GET | `mobile-bff/api/v1/patrol/sessions` | Patrol | optional Route/Km toast | **Live** |
| POST | `mobile-bff/api/v1/incident/incidents` | Incident (host) | MediaIds + HasGps | **Live** (consumer) |
| GET | `mobile-bff/api/v1/integration/users` | Integration | optional | **Live** · BFF forward **if missing** |
| GET | `mobile-bff/api/v1/…/road-routes/search` | cite Live | optional | **Live** · already ok |

- Client base: `http://localhost:5202` + `mobile-bff/api/v1` — **không** gọi `web-bff` từ Mobile MFE.
- **API Mới:** none · **migration:** none · **entity mới:** none.
- Labels: `useFormOptions()` · **cấm** hardcode VN.
- Map HITL: reuse `web-rmms-gis` clip · **cấm** invent tiles/map API in pack.

## 3. BFF vs API

| Layer | Role for PGC |
|-------|----------------|
| Mobile.Bff `:5202` | sole FE entry · File NuGet / proxy files · ai-vision · patrol · auth · users forward if missing |
| RMMS.Service.Api | FileService · AiVision detect · Patrol sessions · Incident Create (host) — **no new** PhotoGeo |
| Linm.RMMS.Vision `:5311` | optional detect infer (via API/BFF) · **cấm** MFE direct |
| web-bff | cite only · **not** Mobile client base |
| Device | GPS · camera · gim · object geo math · HITL pin |

Fail: 503/network → toast + retry · GPS deny → on-click modal · Acc>30 → banner · no detect — **cấm** mock SSOT · **cấm** fake attachmentId.

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
| `#map-confirm` | GIS clip HITL · enable use after confirm (logic) · CTA not pre-disabled |
| `#btn-shutter` | Pattern B · clickable · GPS deny on-click |
| `#btn-detect` | disable only `detecting` |
| `#btn-use` | disable only `uploading`/`pending` · commit→return sidecar |
| `#validation-banner` | `string[]` after `validationAttempted` |
| `#modal-gps` | DES-MOB-GPS-DENY |
| DES-GRID / LinErpListFilterBar | **N/A** phone overlay |
| Route | `mfeStdRoute=/anh-vi-tri` · product overlay consumers |
| REMOVED | Me* · journal B–E · invent photo-geo API · multi-pin · Kind B desktop · pre-disable can* |

## 6. Risks / open

| id | Status | Owner |
|----|--------|-------|
| UNCLEAR-DOMAIN-MAP-PGC | **resolved** SA · keep · route cite `/anh-vi-tri` | TL note DOMAIN-MAP MFE path text if needed |
| UNCLEAR-PGC-BE-01 | **resolved** SA · sidecar + MediaIds + HasGps · no Lat column | — |
| RESOLVED-ROUTE / PATTERN-B | **closed** PO/Design/SA | Dev implement CTA |
| WEB-CAM / MAP-HOST / COMPASS | closed Design · wire Dev | Dev |
| BFF users forward | optional if missing | TL/Dev verify |

## 7. Handoff

| Next | Packet |
|------|--------|
| team-lead | Keep FormMode↔API · Live endpoints · DEC-PGC-BE-01 · **Delta** Pattern B CTA + `/anh-vi-tri` · compact |
| Dev | PhotoGeoPage.tsx · Pattern B disable · validationBanner · GPS on-click · VITE_MOBILE_API_URL `:5202` · no web-bff · no invent path |
| QA | Pattern B CTA · GPS deny-on-click · Acc>30 · commit key · HITL · no fake · E2E queued `/agent-qa*` |

`solution_confirm=approve` · autoApprove ON · next `/agent-team-lead` · **roleOnly stop** (GAP-PKT-ROLE-01).

---
<!-- Version meta: skillId=agent-sa skillVersion=2026.09.05.03 schemaVersion=1 contentHash=sha256:525b8f61bbe397050bb1049e38683d6c333c7283165859967e927c1dc285b9ba changeScope=edit_page taskId=task_b182eace -->
