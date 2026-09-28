# Handoff compact — review

schemaVersion: 1
feature: web-rmms-photo-geo
packKind: list
role: review
status: confirmed
skillVersion: 2026.09.05.03
writtenAt: 2026-09-27T13:28:00.000Z
taskId: task_2a8988f8
contentHash: sha256:525b8f61bbe397050bb1049e38683d6c333c7283165859967e927c1dc285b9ba
review_confirm: approve
autoApprove: ON
verdict: PASS
hashSkip: true
changeScope: edit_page

## Decisions
- changeScope: edit_page · Pattern B CTA Delta · Keep File+HITL+DEC-PGC-BE-01 · sheet `#sheet-pgc`
- Route SSOT: `/anh-vi-tri` · http://localhost:9301/anh-vi-tri · **cấm** `/web-rmms-photo-geo`
- QUERY PASS: purpose=photo-geo-capture · Mobile.Bff · cấm invent /photo-geo* · cấm ERP.* · detect Lat=object HITL Acc≤30
- SEC PASS: guest · JWT PUT · no resign · GPS deny on-click · sidecar sessionStorage MediaIds+HasGps
- UI-FN PASS: Pattern B no disabled={!can*} · banner after click · zones+modes QA PASS · DES-GRID N/A
- BE-FN PASS: DEC-PGC-BE-01 sidecar · T-BE=N/A · DOMAIN-MAP · cấm PhotoGeoController
- fix_gaps: none · debt soft (e2e port · MapLibre · headless · DOMAIN-MAP path string)
- next: pipeline complete · roleOnly stop (GAP-PKT-ROLE-01)

## Inventory (slim)
| id | controlHint | review |
|----|-------------|--------|
| capturePreview | CameraStill | PASS getUserMedia |
| btnShutter | Button | PASS Pattern B no pre-disable |
| gimPin | MapPinTap | PASS 1 pin |
| rowPhotog/Distance/Object | ListRow RO | PASS photog≠object |
| mapConfirm | MapHitl | PASS GIS clip |
| btnDetect | Button | PASS detecting only |
| btnUse | Button | PASS uploading only |
| validationBanner | Banner[] | PASS #validation-banner |
| gpsLock | GPS | PASS #modal-gps on-click |
| files* | File | PASS init/PUT/commit |

## Screens / zones
- PGC · mfeStdRoute=/anh-vi-tri · mfeStdUrl=http://localhost:9301/anh-vi-tri
- reviewUrl=file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-photo-geo/ui/prototype/index.html
- zones: #sheet-pgc · #capture-preview · #gim-pin · #map-confirm · #btn-shutter · #btn-detect · #btn-use · #validation-banner · #modal-gps
- QA screens=specs/web-rmms-photo-geo/qa/screens/

## API / tasks
- files/init·PUT·commit·GET · opt detect · opt patrol/sessions
- T-01…T-06 · T-QA PASS · T-BE=N/A · review PASS

## UNCLEAR
- none

## Full paths
- findings: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-photo-geo/review/findings.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-photo-geo/STATUS.md
- MFE: D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile/src/pages/WebRmmsPhotoGeo/PhotoGeoPage.tsx
