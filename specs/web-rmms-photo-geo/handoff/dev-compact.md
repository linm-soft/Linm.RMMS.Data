# Handoff compact — dev

schemaVersion: 1
feature: web-rmms-photo-geo
packKind: list
role: dev
status: confirmed
skillVersion: 2026.09.05.03
writtenAt: 2026-09-26T00:45:00.000Z
taskId: task_3d8b771b
contentHash: sha256:2282c3b64ab8701681f5edbc548b5cf1a2221159d9ffb779dfe03d186010f7a4
autoApprove: ON
e2eQa: ON (queued /agent-qa*)
build: yarn build PASS
mfeStdUrl: http://localhost:9301/web-rmms-photo-geo
mfeStdRoute: /web-rmms-photo-geo

## Decisions
- changeScope: new_page · sheet `#sheet-pgc` DES-MOB-PGC · openCapture('photo-geo') INC/VIS/FR
- Flow: getUserMedia still→gim1→GPS+object→HITL→files commit→sidecar sessionStorage
- Files: init/PUT object/commit · purpose=photo-geo-capture · product=rmms · cấm invent photo-geo path
- Detect opt: Lat=object HITL · Acc≤30 · sessions opt toast
- DEC-PGC-BE-01 sidecar · Step4b N/A · cấm ERP.* · cấm PhotoGeoController
- Modes: ?deny=1 · ?conf= · ?compass=1 · ?step=map · ?fail=1
- next: /agent-qa* · roleOnly stop (GAP-PKT-ROLE-01)

## Inventory (slim)
| id | controlHint | notes |
|----|-------------|-------|
| capturePreview | CameraStill | getUserMedia |
| btnShutter | Button | GPS gate |
| gimPin | MapPinTap | 1 pin |
| rowPhotog/Distance/Object | ListRow RO | photog≠object |
| mapConfirm | MapHitl | pin drag |
| btnUse | Button | sidecar |
| gpsLock | GPS | DES-MOB-GPS-DENY |
| files* | File | init/PUT/commit |
| detect | Button opt | object Lat |

## Screens / zones
- PGC · peers INC/VIS/FR
- reviewUrl=file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-photo-geo/ui/prototype/index.html
- peerStdUrl=http://localhost:9301/web-rmms-photo-geo
- zones: #sheet-pgc · #capture-preview · #gim-pin · #map-confirm · #btn-shutter · #btn-use

## API / tasks
- files/init·PUT·commit·GET · ai-vision/detect · patrol/sessions
- T-01…T-06 done · T-BE=N/A · T-QA queued
- debt: MapLibre clip polish optional · E2E modes queued QA

## Full paths
- implement: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-photo-geo/implement/web-rmms-photo-geo.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-photo-geo/STATUS.md
- MFE: D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile/src/pages/WebRmmsPhotoGeo/
