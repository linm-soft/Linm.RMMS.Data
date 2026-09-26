# Handoff compact — review

schemaVersion: 1
feature: web-rmms-photo-geo
packKind: list
role: review
status: confirmed
skillVersion: 2026.09.05.03
writtenAt: 2026-09-26T07:18:12.363Z
taskId: task_db972d1e
contentHash: sha256:2282c3b64ab8701681f5edbc548b5cf1a2221159d9ffb779dfe03d186010f7a4
review_confirm: approve
autoApprove: ON
verdict: PASS
hashSkip: true

## Decisions
- changeScope: new_page · sheet `#sheet-pgc` DES-MOB-PGC · openCapture('photo-geo') INC/VIS/FR
- QUERY PASS: purpose=photo-geo-capture · product=rmms · Mobile.Bff · cấm invent /photo-geo* · cấm ERP.* · detect Lat=object HITL Acc≤30
- SEC PASS: guest gate · JWT PUT · no resign URL · GPS deny/offline cấm fake · sidecar sessionStorage
- UI-FN PASS: still→gim1→GPS+object→HITL→files→sidecar · zones + modes QA PASS · DES-GRID N/A
- BE-FN PASS: DEC-PGC-BE-01 sidecar · MediaIds+HasGps · no Lat · T-BE=N/A · DOMAIN-MAP row · cấm PhotoGeoController
- fix_gaps: none · debt soft only (e2e port · MapLibre polish · headless cam)
- next: pipeline complete · roleOnly stop (GAP-PKT-ROLE-01)

## Inventory (slim)
| id | controlHint | review |
|----|-------------|--------|
| capturePreview | CameraStill | PASS getUserMedia |
| btnShutter | Button | PASS GPS gate |
| gimPin | MapPinTap | PASS 1 pin |
| rowPhotog/Distance/Object | ListRow RO | PASS photog≠object |
| mapConfirm | MapHitl | PASS GIS clip |
| btnUse | Button | PASS sidecar |
| gpsLock | GPS | PASS deny modal |
| files* | File | PASS init/PUT/commit |
| detect | Button opt | PASS object Lat Acc≤30 |

## Screens / zones
- PGC · #sheet-pgc · mfeStdUrl=http://localhost:9301/web-rmms-photo-geo
- reviewUrl=file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-photo-geo/ui/prototype/index.html
- QA screens=specs/web-rmms-photo-geo/qa/screens/{S0,S1,QA-20}.png

## API / tasks
- files/init·PUT·commit·GET · opt detect · opt patrol/sessions
- T-01…T-06 · T-QA PASS · T-BE=N/A · review PASS

## Full paths
- findings: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-photo-geo/review/findings.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-photo-geo/STATUS.md
- MFE: D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile/src/pages/WebRmmsPhotoGeo/
