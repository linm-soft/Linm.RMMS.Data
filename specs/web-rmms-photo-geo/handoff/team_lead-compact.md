# Handoff compact — team_lead

schemaVersion: 1
feature: web-rmms-photo-geo
packKind: list
role: team_lead
status: confirmed
skillVersion: 2026.09.05.03
writtenAt: 2026-09-26T00:15:00.000Z
taskId: task_aa1d7f78
contentHash: sha256:2282c3b64ab8701681f5edbc548b5cf1a2221159d9ffb779dfe03d186010f7a4
autoApprove: ON
route_confirm: confirm
e2eQa: ON (queued /agent-qa*)

## Decisions
- changeScope: new_page · formPattern: Mobile sheet `#sheet-pgc` DES-MOB-PGC phone ≤430 · Android 1-1 · N/A ERP Modal · DES-GRID N/A
- PACK-01 list + sheet overlay · entry openCapture('photo-geo') INC/VIS/FR · **cấm** hub Field row
- mfeStdRoute: /web-rmms-photo-geo · mfeStdUrl http://localhost:9301/web-rmms-photo-geo
- BFF: Mobile.Bff :5202 · **cấm** web-bff · **cấm** invent photo-geo path · **cấm** ERP.* · **cấm** PhotoGeoController
- DEC-PGC-BE-01: sidecar attachmentId+object coords · host MediaIds+HasGps · **no** Lat · Step 4b **none** · T-BE=N/A
- Flow: still→gim1→GPS+object on-device→HITL map→files purpose=photo-geo-capture→return sidecar
- HARD: GPS deny block shutter/use/detect · Acc≤30 detect · Lat detect=object HITL · **cấm** fake · useFormOptions
- WEB-CAM getUserMedia · MAP-HOST GIS clip · COMPASS banner+pin drag
- T-*: T-01 route/sheet · T-02 cam+GPS · T-03 gim+meta · T-04 HITL · T-05 files+use · T-06 detect/parity · T-QA queued
- next: /agent-dev · roleOnly stop (GAP-PKT-ROLE-01)

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| capturePreview | still | CameraStill | T-02 · getUserMedia |
| btnShutter | chụp | Button | T-02 · GPS gate |
| gimPin | gim 1 | MapPinTap | T-03 · cấm multi |
| rowPhotog/Distance/Object | meta RO | ListRow | T-03 · photog≠object |
| mapConfirm | HITL | MapHitl | T-04 · GIS clip |
| btnUse | dùng ảnh | Button | T-05 · sidecar |
| gpsLock | GPS | GPS | T-02/T-05 · deny modal |
| files* | upload | File | T-05 · init/PUT/commit |
| detect | optional | Button | T-06 · object Lat Acc≤30 |

## Screens / zones (ids only)
- PGC · peers CAP/INC/VIS/FR
- reviewUrl= file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-photo-geo/ui/prototype/index.html
- peerStdUrl= http://localhost:9301/web-rmms-photo-geo
- zones: #sheet-pgc · #capture-preview · #gim-pin · #map-confirm · #btn-shutter · #btn-use · DES-MOB-PGC
- DES-GRID / LinErpListFilterBar: N/A

## API / tasks (ids only)
- FormMode↔API: files/init·PUT·commit·GET · opt detect · opt patrol/sessions · host MediaIds+HasGps
- T-01…T-06 · T-BE=N/A · T-QA queued
- cite: T-W7-01 · AC-PGC-01..14 · Grid N/A

## UNCLEAR
- none open (DOMAIN-MAP-PGC · PGC-BE-01 closed SA · PACK/WEB-CAM/MAP/COMPASS closed Design)

## Full paths (Read only if needed)
- task: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-photo-geo/task/web-rmms-photo-geo.md
- sa compact: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-photo-geo/handoff/sa-compact.md
- design: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-photo-geo/ui/design.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-photo-geo/STATUS.md
