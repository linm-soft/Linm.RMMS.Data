# Team lead — Task — web-rmms-photo-geo

> Status: **confirmed** · writtenAt `2026-09-27T13:30:00.000Z` · task `task_daf06c08`  
> skillVersion: `2026.09.05.03` · packKind: `list` · autoApprove: ON · e2eQa: ON (queued QA)  
> **Cấm** xóa file này · **cấm** implement trong role team_lead · **cấm** e2e / yarn build / start:std.

| | |
|--|--|
| Feature | `web-rmms-photo-geo` |
| Title | Overlay chụp ảnh có tọa độ · edit_page Pattern B |
| Role | `team_lead` |
| changeScope | `edit_page` |
| formPattern | Mobile sheet overlay phone ≤430 · Android 1-1 `#sheet-pgc` · DES-MOB-PGC · N/A ERP Modal/Slideout |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| mfeStdRoute | `/anh-vi-tri` |
| mfeStdUrl | `http://localhost:9301/anh-vi-tri` |
| productRoute | overlay consumers · `openCapture('photo-geo')` từ INC/VIS/FR · **cấm** hub Field row · **cấm** `/web-rmms-photo-geo` |
| nativeRouteCite | peer `photo-geo-capture` · SCREENS PGC · Android `#sheet-pgc` · DES-MOB-PGC · DES-MOB-GPS-DENY |
| be | `D:/AI-QLBD/Linm.RMMS.WebService` · Mobile.Bff `:5202` `mobile-bff/api/v1` · File + AiVision + Incident/Patrol cite + Gis HITL · **cấm ERP.*** · **cấm PhotoGeoController** |
| demo | N/A · hash skip · **cấm** rescan |
| DES-GRID / LinErpListFilterBar | N/A phone overlay |
| Step 4b / migration | **skip** · API Mới / entity: **none** (SA DEC-PGC-BE-01 sidecar) |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-photo-geo/ui/prototype/index.html` |
| zones | PGC · `#sheet-pgc` · `#capture-preview` · `#gim-pin` · `#map-confirm` · `#btn-shutter` · `#btn-detect` · `#btn-use` · `#validation-banner` · `#modal-gps` · DES-MOB-PGC · DES-MOB-GPS-DENY · peers CAP/INC/VIS/FR |
| cite | T-W7-01 · AC-PGC-01..16 Pattern B · Grid AC N/A · editCite `docs/plan/web-rmms-mobile/SUBMIT-VALIDATE.md` |
| contentHash | `sha256:525b8f61bbe397050bb1049e38683d6c333c7283165859967e927c1dc285b9ba` |
| code | `PhotoGeoPage.tsx` · keep File+HITL+useFormOptions · Delta Pattern B CTA only |
| nextSlash | `/agent-dev` · roleOnly stop (GAP-PKT-ROLE-01) |

## route_confirm

| Field | Value |
|-------|-------|
| action | **keep** (edit_page · route SSOT đã chốt) |
| mfeStdRoute | `/anh-vi-tri` |
| mfeStdUrl | `http://localhost:9301/anh-vi-tri` |
| productRoute | overlay · host `openCapture('photo-geo')` INC/VIS/FR |
| note | RESOLVED-ROUTE · **cấm** `/web-rmms-photo-geo` · **cấm** tab/route/icon mới · align `/align-mobile-to-mfe` · autoApprove=ON |

## Decisions (rolled from prior + Delta)

- changeScope: `edit_page` · Keep prior AC/zones/File+HITL/DEC-PGC-BE-01 · **Delta Pattern B CTA only**
- cite: SUBMIT-VALIDATE Pattern B · slug `web-rmms-photo-geo` · `PhotoGeoPage.tsx`
- PACK-01: packKind=`list` · surface sheet overlay `#sheet-pgc` DES-MOB-PGC phone 430
- Route SSOT: `/anh-vi-tri` · **cấm** `/web-rmms-photo-geo`
- **Pattern B HARD:** bỏ `disabled={!canShutter|!canDetect|!canUse}` (thiếu data) · chỉ disable lúc `uploading` / `detecting` / `pending` · GPS/cam deny → **bấm mới** banner/modal `#modal-gps` · `validationAttempted` + `#validation-banner` `string[]`
- Flow keep: still → gim 1 pin → photographer GPS + object on-device → HITL map → files commit → return `attachmentId`+object coords sidecar
- DEC-PGC-BE-01: P1 sidecar return · host MediaIds+HasGps · **no** Lat column · migration N/A
- DOMAIN-MAP: `web-rmms-photo-geo` → Incident/`incident` · cite FileService+AiVision+Patrol+Gis HITL · **cấm** PhotoGeoController
- Detect optional: Acc≤30 · Lat/Lng=object HITL · **cấm** photographer GPS as object · **cấm** fake
- WEB-CAM: getUserMedia/kit primary · file input **không** primary
- MAP-HOST: reuse web-rmms-gis clip · **cấm** invent map API
- COMPASS: banner + HITL pin drag (Design closed)
- BFF: Mobile.Bff only · **cấm** web-bff · **cấm** invent `api/v1/web-rmms-photo-geo` / `api/v1/photo-geo*`
- Files Live: init→PUT→commit→GET · purpose=`photo-geo-capture` · product=rmms · JPEG · **cấm** objectKey/resign URL
- Align: `/align-mobile-to-mfe` · **cấm** tab/route/icon mới · **cấm** android/ios proto
- SA: UNCLEAR-DOMAIN-MAP-PGC · UNCLEAR-PGC-BE-01 **resolved keep** · Step 4b **none**
- OUT: Me*/feedback/cam-view · journal B–E · native iOS/Android edit · multi-pin · Kind B desktop · demo rescan · new_page CRUD

## FormMode ↔ API

| Mode | APIs |
|------|------|
| Capture gate | navigator.geolocation · GPS deny **on-click** → `#modal-gps` DES-MOB-GPS-DENY · **không** pre-disable shutter |
| Files | `POST files/init` · `PUT files/{id}/object` · `POST files/commit` · `GET files/{id}/object` · purpose=`photo-geo-capture` |
| Detect (opt) | `POST ai-vision/detect` · Lat/Lng=object HITL · Acc≤30 · disable **only** detecting |
| Session (opt) | `GET patrol/sessions` RO |
| Host bind | return attachmentId + object coords sidecar · MediaIds + HasGps · **no Lat** |
| Map HITL | GIS clip reuse (web-rmms-gis) · **cấm** invent map API |
| Validation | `validationAttempted` + `#validation-banner` string[] · Pattern B |
| BFF | Mobile.Bff `:5202` `mobile-bff/api/v1` · no new controller · Step 4b skip |

## Tasks

| id | page / slice | role | deps | status | DoD (slim) |
|----|--------------|------|------|--------|------------|
| T-01 | Keep route `/anh-vi-tri` · sheet `#sheet-pgc` · openCapture wire · **cấm** `/web-rmms-photo-geo` | FE | — | pending | Route SSOT keep · deep-link mfeStdUrl · phone ≤430 · Android 1-1 · no new tab/route/icon · no ERP.* · AC-PGC-01 |
| T-02 | CameraStill + btnShutter **Pattern B** · GPS deny on-click `#modal-gps` | FE | T-01 | pending | getUserMedia primary · **bỏ** pre-disable canShutter · deny→modal on click · **cấm** fake · AC-PGC-02..03 · AC-PGC-15 banner |
| T-03 | gimPin 1 · on-device object geo · rowPhotog/Distance/Object | FE | T-02 | pending | keep 1 pin · photographer ≠ object · distanceM · **cấm** multi-pin · AC-PGC-04..06 |
| T-04 | mapConfirm HITL · GIS clip · compass banner | FE | T-03 | pending | keep GIS reuse · pin drag · object Lat after HITL · AC-PGC-07 |
| T-05 | files init/PUT/commit · btnUse **Pattern B** · sidecar return | FE | T-04 | pending | purpose=`photo-geo-capture` · disable **only** uploading/pending · host MediaIds+HasGps · **no Lat** · AC-PGC-08..09 |
| T-06 | btnDetect **Pattern B** · sessions · useFormOptions · validationBanner · parity | FE | T-01…T-05 | pending | disable **only** detecting · Acc≤30 · Lat=object HITL · `#validation-banner` string[] · modes ?deny=1·?conf=45·?compass=1·?step=map·?fail=1 · AC-PGC-10..16 |
| T-BE | — | — | — | **N/A** | No new API / entity / migration · DOMAIN-MAP keep · DEC-PGC-BE-01 sidecar |
| T-QA | cite scenarios · e2e Pattern B | QA | T-01…T-06 | pending | **chỉ** `/agent-qa*` · **cấm** e2e ở TL/Dev · Pattern B CTA + deny-on-click + banner |

### Assignee

- Impl: `/agent-dev` · MFE cwd `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` · code `PhotoGeoPage.tsx`
- QA E2E: queued `/agent-qa*` · **cấm** e2e / `yarn start:std` ở team_lead
- Review: `/agent-review` after QA

## Acceptance map (PO → T-*)

| AC | Owner task |
|----|------------|
| AC-PGC-01 sheet entry / openCapture / route `/anh-vi-tri` | T-01 |
| AC-PGC-02..03 still + shutter Pattern B (no pre-disable GPS) | T-02 |
| AC-PGC-04..06 gim 1 + meta rows photographer≠object | T-03 |
| AC-PGC-07 HITL map confirm | T-04 |
| AC-PGC-08..09 files commit + btnUse Pattern B (uploading/pending only) | T-05 |
| AC-PGC-10 detect Pattern B (detecting only) · Acc≤30 | T-06 |
| AC-PGC-11..14 sessions · parity · fail modes | T-06 |
| AC-PGC-15 validationAttempted + banner string[] | T-02 · T-06 |
| AC-PGC-16 GPS deny on-click modal | T-02 · T-05 |
| AC-GRID-01..05 | N/A phone overlay (AC-GRID-02 meta RO cite T-03) |
| Mobile.Bff only · Step 4b skip · DEC-PGC-BE-01 | T-01 · T-05 · T-BE |
| MAP-HOST GIS · WEB-CAM · COMPASS | T-02 · T-04 |
| Android 1-1 · cấm native / new tab | T-01 · T-06 |

## Inventory → T-*

| id | controlHint | T-* |
|----|-------------|-----|
| capturePreview | CameraStill | T-02 |
| btnShutter | Button | T-02 · Pattern B |
| gimPin | MapPinTap | T-03 |
| rowPhotog / rowDistance / rowObject | ListRow RO | T-03 |
| mapConfirm | MapHitl | T-04 |
| btnDetect | Button | T-06 · Pattern B |
| btnUse | Button | T-05 · Pattern B |
| validationBanner | Banner[] | T-06 · `#validation-banner` |
| gpsLock | GPS | T-02 · T-05 · on-click `#modal-gps` |
| files* | File | T-05 |

## Out of scope

- Me / feedback / cam-view
- Journal / kết ca / tồn tại / tần suất (B–E)
- Invent PhotoGeoController / web-bff / ERP.* / photo-geo API path
- Native iOS/Android code edits · new tab/route/icon
- Multi-pin · Kind B desktop · demo rescan · new_page typed CRUD
- Step 4b / migration / new entity / Lat column on Incident
- Pre-disable `canShutter|canDetect|canUse` (Pattern B **cấm**)

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
