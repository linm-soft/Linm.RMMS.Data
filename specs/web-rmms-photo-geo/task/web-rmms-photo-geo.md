# Team lead — Task — web-rmms-photo-geo

> Status: **confirmed** · writtenAt `2026-09-26T00:15:00.000Z` · task `task_aa1d7f78`  
> skillVersion: `2026.09.05.03` · packKind: `list` · autoApprove: ON · e2eQa: ON (queued QA)  
> **Cấm** xóa file này · **cấm** implement trong role team_lead · **cấm** e2e / yarn build / start:std.

| | |
|--|--|
| Feature | `web-rmms-photo-geo` |
| Title | Overlay chụp ảnh có tọa độ |
| Role | `team_lead` |
| changeScope | `new_page` |
| formPattern | Mobile sheet overlay phone ≤430 · Android 1-1 `#sheet-pgc` · DES-MOB-PGC · N/A ERP Modal/Slideout |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| mfeStdRoute | `/web-rmms-photo-geo` |
| mfeStdUrl | `http://localhost:9301/web-rmms-photo-geo` |
| productRoute | overlay consumers · `openCapture('photo-geo')` từ INC/VIS/FR · **cấm** hub Field row |
| nativeRouteCite | peer `photo-geo-capture` · SCREENS PGC · Android `#sheet-pgc` · DES-MOB-PGC · DES-MOB-GPS-DENY |
| be | `D:/AI-QLBD/Linm.RMMS.WebService` · Mobile.Bff `:5202` `mobile-bff/api/v1` · File + AiVision + Incident/Patrol cite + Gis HITL · **cấm ERP.*** · **cấm PhotoGeoController** |
| demo | N/A · hash skip · **cấm** rescan |
| DES-GRID / LinErpListFilterBar | N/A phone overlay |
| Step 4b / migration | **skip** · API Mới / entity: **none** (SA DEC-PGC-BE-01 sidecar) |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-photo-geo/ui/prototype/index.html` |
| zones | PGC · `#sheet-pgc` · `#capture-preview` · `#gim-pin` · `#map-confirm` · `#btn-shutter` · `#btn-use` · DES-MOB-PGC · DES-MOB-GPS-DENY · peers CAP/INC/VIS/FR |
| cite | T-W7-01 · AC-PGC-01..14 · Grid AC N/A |
| contentHash | `sha256:2282c3b64ab8701681f5edbc548b5cf1a2221159d9ffb779dfe03d186010f7a4` |
| nextSlash | `/agent-dev` · roleOnly stop (GAP-PKT-ROLE-01) |

## route_confirm

| Field | Value |
|-------|-------|
| action | **confirm** (new_page · URL std chưa có trong MFE) |
| mfeStdRoute | `/web-rmms-photo-geo` |
| mfeStdUrl | `http://localhost:9301/web-rmms-photo-geo` |
| productRoute | overlay · host `openCapture('photo-geo')` INC/VIS/FR |
| note | Sheet-only PGC · peer std deep-link · **cấm** invent photo-geo path / web-bff / hub Field row · autoApprove=ON |

## Decisions (rolled from prior)

- PACK-01: packKind=`list` · surface sheet overlay `#sheet-pgc` DES-MOB-PGC phone 430
- Flow: still → gim 1 pin → photographer GPS + object on-device → HITL map → files commit → return `attachmentId`+object coords sidecar
- DEC-PGC-BE-01: P1 sidecar return · host MediaIds+HasGps · **no** Lat column · migration N/A
- DOMAIN-MAP: `web-rmms-photo-geo` → Incident/`incident` · cite FileService+AiVision+Patrol+Gis HITL · **cấm** PhotoGeoController
- HARD: GPS deny → block shutter/use/detect · Acc≤30 detect · Lat detect=object HITL · **cấm** fake · useFormOptions
- WEB-CAM: getUserMedia/kit primary · file input **không** primary
- MAP-HOST: reuse web-rmms-gis clip · **cấm** invent map API
- COMPASS: banner + HITL pin drag (Design)
- BFF: Mobile.Bff only · **cấm** web-bff client · **cấm** invent `api/v1/web-rmms-photo-geo` / `api/v1/photo-geo*`
- Files Live: init→PUT→commit→GET · purpose=`photo-geo-capture` · product=rmms · JPEG · **cấm** objectKey/resign URL
- Detect optional: POST ai-vision/detect · Lat/Lng=object HITL · Acc≤30 · **cấm** photographer GPS as object
- SA: UNCLEAR-DOMAIN-MAP-PGC · UNCLEAR-PGC-BE-01 **resolved** · Step 4b **none**
- OUT: Me*/feedback/cam-view · journal B–E · native iOS/Android edit · multi-pin · Kind B desktop · demo rescan
- UNCLEAR closed Design: PACK-01 · WEB-CAM · MAP-HOST · COMPASS → Dev wire kit/GIS

## FormMode ↔ API

| Mode | APIs |
|------|------|
| Capture gate | navigator.geolocation · GPS deny → DES-MOB-GPS-DENY · disable shutter/use/detect |
| Files | `POST files/init` · `PUT files/{id}/object` · `POST files/commit` · `GET files/{id}/object` · purpose=`photo-geo-capture` |
| Detect (opt) | `POST ai-vision/detect` · Lat/Lng=object HITL · Acc≤30 · Vision via BFF |
| Session (opt) | `GET patrol/sessions` RO |
| Host bind | return attachmentId + object coords sidecar · MediaIds + HasGps · **no Lat** |
| Map HITL | GIS clip reuse (web-rmms-gis) · **cấm** invent map API |
| BFF | Mobile.Bff `:5202` `mobile-bff/api/v1` · no new controller · Step 4b skip |

## Tasks

| id | page / slice | role | deps | status | DoD (slim) |
|----|--------------|------|------|--------|------------|
| T-01 | Route + sheet shell `/web-rmms-photo-geo` · `#sheet-pgc` DES-MOB-PGC · host openCapture wire | FE | — | pending | Route registered · deep-link mfeStdUrl · phone ≤430 · Android 1-1 · openCapture('photo-geo') INC/VIS/FR · no ERP.* · no invent photo-geo path · AC-PGC-01 |
| T-02 | CameraStill + GPS lock · btnShutter · DES-MOB-GPS-DENY | FE | T-01 | pending | getUserMedia/kit primary · GPS deny→block shutter · **cấm** fake coords · file input không primary · AC-PGC-02..03 |
| T-03 | gimPin 1 · on-device object geo · rowPhotog/Distance/Object | FE | T-02 | pending | 1 pin only · photographer ≠ object · distanceM · **cấm** multi-pin · AC-PGC-04..06 · AC-GRID-02 meta RO |
| T-04 | mapConfirm HITL · GIS clip · compass banner | FE | T-03 | pending | reuse web-rmms-gis · pin drag · object Lat after HITL · **cấm** invent map API · AC-PGC-07 |
| T-05 | files init/PUT/commit · btnUse return attachmentId+sidecar | FE | T-04 | pending | purpose=`photo-geo-capture` · JWT GET · **cấm** objectKey · host MediaIds+HasGps · **no Lat** · GPS deny block use · AC-PGC-08..09 |
| T-06 | optional detect · sessions · useFormOptions · prototype parity | FE | T-01…T-05 | pending | Acc≤30 detect gate · Lat=object HITL · labels no hardcode · modes ?deny=1 · ?conf=45 · ?compass=1 · ?step=map · ?fail=1 · AC-PGC-10..14 |
| T-BE | — | — | — | **N/A** | No new API / entity / migration (SA) · DOMAIN-MAP row applied · DEC-PGC-BE-01 sidecar |
| T-QA | cite scenarios · e2e slug | QA | T-01…T-06 | pending | **chỉ** `/agent-qa*` · **cấm** e2e ở TL/Dev · modes deny/conf/compass/step/fail |

### Assignee

- Impl: `/agent-dev` · MFE cwd `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile`
- QA E2E: queued `/agent-qa*` · **cấm** e2e / `yarn start:std` ở team_lead
- Review: `/agent-review` after QA

## Acceptance map (PO → T-*)

| AC | Owner task |
|----|------------|
| AC-PGC-01 sheet entry / openCapture / route | T-01 |
| AC-PGC-02..03 still + shutter GPS gate | T-02 |
| AC-PGC-04..06 gim 1 + meta rows photographer≠object | T-03 |
| AC-PGC-07 HITL map confirm | T-04 |
| AC-PGC-08..09 files commit + btnUse sidecar | T-05 |
| AC-PGC-10..14 detect Acc≤30 · sessions · parity · fail | T-06 |
| AC-GRID-01..05 | N/A phone overlay (AC-GRID-02 meta RO cite T-03) |
| GPS deny · cấm fake · Mobile.Bff only · Step 4b skip | T-01 · T-02 · T-05 · T-BE |
| MAP-HOST GIS · WEB-CAM getUserMedia · COMPASS | T-02 · T-04 |
| Android 1-1 · cấm native code change | T-01 · T-06 |

## Inventory → T-*

| id | controlHint | T-* |
|----|-------------|-----|
| capturePreview | CameraStill | T-02 |
| btnShutter | Button | T-02 |
| gimPin | MapPinTap | T-03 |
| rowPhotog / rowDistance / rowObject | ListRow RO | T-03 |
| mapConfirm | MapHitl | T-04 |
| btnUse | Button | T-05 |
| gpsLock | GPS | T-02 · T-05 · T-06 |
| files* | File | T-05 |
| detect | Button opt | T-06 |

## Out of scope

- Me / feedback / cam-view
- Journal / kết ca / tồn tại / tần suất (B–E)
- Invent PhotoGeoController / web-bff / ERP.* / photo-geo API path
- Native iOS/Android code edits (peer `photo-geo-capture`)
- Multi-pin · Kind B desktop · demo rescan
- Step 4b / migration / new entity / Lat column on Incident

## Prior compact cite

- data_analy: `specs/web-rmms-photo-geo/handoff/data_analy-compact.md`
- po: `specs/web-rmms-photo-geo/handoff/po-compact.md`
- design: `specs/web-rmms-photo-geo/handoff/design-compact.md`
- sa: `specs/web-rmms-photo-geo/handoff/sa-compact.md`

## Full paths

- task: `D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-photo-geo/task/web-rmms-photo-geo.md`
- compact: `D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-photo-geo/handoff/team_lead-compact.md`
- solution: `D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-photo-geo/be/solution-discovery.md`
- design: `D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-photo-geo/ui/design.md`
- requirement: `D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-photo-geo/po/requirement.md`
- DOMAIN-MAP: `D:/AI-QLBD/Linm.RMMS.WebService/docs/DOMAIN-MAP.md`
- STATUS: `D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-photo-geo/STATUS.md`
