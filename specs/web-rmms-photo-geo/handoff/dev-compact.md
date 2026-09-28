# Handoff compact — dev

schemaVersion: 1
feature: web-rmms-photo-geo
packKind: list
role: dev
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-09-27T13:45:00.000Z
taskId: task_8103d989
contentHash: sha256:525b8f61bbe397050bb1049e38683d6c333c7283165859967e927c1dc285b9ba
changeScope: edit_page
autoApprove: ON
e2eQa: ON (queued /agent-qa*)

## Decisions
- changeScope: edit_page · Pattern B CTA on PhotoGeoPage.tsx · Keep File+HITL+DEC-PGC-BE-01
- Route SSOT: `/anh-vi-tri` · http://localhost:9301/anh-vi-tri · **cấm** `/web-rmms-photo-geo`
- Pattern B: bỏ disabled={!canShutter|!canDetect|!canUse} · chỉ uploading/detecting · GPS deny on-click `#modal-gps` · validationAttempted + `#validation-banner` string[]
- BFF: Mobile.Bff :5202 · **cấm** web-bff · invent photo-geo · ERP.* · PhotoGeoController
- DEC-PGC-BE-01: sidecar · Step 4b **none** · T-BE=N/A
- Align: `/align-mobile-to-mfe` · **cấm** tab/route/icon mới · **cấm** android/ios proto
- Build: MFE yarn build **PASS** · BE dotnet build **PASS**
- next: /agent-qa* · roleOnly stop (GAP-PKT-ROLE-01) · **cấm** e2e ở Dev

## Inventory (slim)
| id | controlHint | notes |
|----|-------------|-------|
| btnShutter | Button | Pattern B · no pre-disable |
| btnDetect | Button | disabled={detecting} only |
| btnUse | Button | disabled={uploading} only |
| btnConfirmMap | Button | disabled={uploading} only |
| validationBanner | Banner[] | #validation-banner |
| gpsLock | GPS | on-click #modal-gps |
| files* | File | keep init/PUT/commit |

## Screens / zones
- mfeStdRoute=/anh-vi-tri · mfeStdUrl=http://localhost:9301/anh-vi-tri
- zones: #sheet-pgc · #capture-preview · #gim-pin · #map-confirm · #btn-shutter · #btn-detect · #btn-use · #validation-banner · #modal-gps
- DES-GRID: N/A

## API / tasks
- APIs: files/init·PUT·commit·GET · opt detect · opt patrol/sessions · host MediaIds+HasGps
- T-01…T-06 **done** · T-BE=N/A · T-QA queued
- FE Delta: PhotoGeoPage.tsx · styles.module.css

## UNCLEAR
- none

## Full paths
- implement: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-photo-geo/implement/web-rmms-photo-geo.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-photo-geo/STATUS.md
- MFE: D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile/src/pages/WebRmmsPhotoGeo/PhotoGeoPage.tsx
