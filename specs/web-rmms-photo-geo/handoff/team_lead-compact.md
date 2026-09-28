# Handoff compact — team_lead

schemaVersion: 1
feature: web-rmms-photo-geo
packKind: list
role: team_lead
status: confirmed
skillVersion: 2026.09.05.03
writtenAt: 2026-09-27T13:30:00.000Z
taskId: task_daf06c08
contentHash: sha256:525b8f61bbe397050bb1049e38683d6c333c7283165859967e927c1dc285b9ba
autoApprove: ON
route_confirm: keep
changeScope: edit_page
e2eQa: ON (queued /agent-qa*)

## Decisions
- changeScope: edit_page · Keep File+HITL+DEC-PGC-BE-01 · Delta Pattern B CTA only
- cite: SUBMIT-VALIDATE Pattern B · PhotoGeoPage.tsx · hash 525b8f61
- formPattern: Mobile sheet `#sheet-pgc` DES-MOB-PGC phone ≤430 · Android 1-1 · N/A ERP Modal · DES-GRID N/A
- Route SSOT: `/anh-vi-tri` · http://localhost:9301/anh-vi-tri · **cấm** `/web-rmms-photo-geo`
- Pattern B: bỏ pre-disable canShutter/canDetect/canUse · chỉ disabled uploading/detecting/pending · GPS deny on-click `#modal-gps` · validationAttempted + `#validation-banner` string[]
- BFF: Mobile.Bff :5202 · **cấm** web-bff · invent photo-geo path · ERP.* · PhotoGeoController
- DEC-PGC-BE-01: sidecar attachmentId+object coords · host MediaIds+HasGps · **no** Lat · Step 4b **none** · T-BE=N/A
- Keep flow: still→gim1→GPS+object→HITL→files purpose=photo-geo-capture→sidecar
- Align: `/align-mobile-to-mfe` · **cấm** tab/route/icon mới · **cấm** android/ios proto
- T-*: T-01 route keep · T-02 cam+shutter Pattern B · T-03 gim+meta · T-04 HITL · T-05 files+use Pattern B · T-06 detect+banner+parity · T-QA queued
- next: /agent-dev · roleOnly stop (GAP-PKT-ROLE-01)

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| capturePreview | still | CameraStill | T-02 · getUserMedia |
| btnShutter | chụp | Button | T-02 · Pattern B · no pre-disable |
| gimPin | gim 1 | MapPinTap | T-03 · cấm multi |
| rowPhotog/Distance/Object | meta RO | ListRow | T-03 · photog≠object |
| mapConfirm | HITL | MapHitl | T-04 · GIS clip |
| btnDetect | nhận diện | Button | T-06 · detecting only |
| btnUse | dùng ảnh | Button | T-05 · uploading/pending only |
| validationBanner | lỗi client | Banner[] | T-06 · #validation-banner |
| gpsLock | GPS | GPS | T-02/T-05 · on-click #modal-gps |
| files* | upload | File | T-05 · init/PUT/commit |

## Screens / zones (ids only)
- PGC · peers CAP/INC/VIS/FR
- reviewUrl=file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-photo-geo/ui/prototype/index.html
- peerStdUrl=http://localhost:9301/anh-vi-tri
- mfeStdRoute=/anh-vi-tri
- zones: #sheet-pgc · #capture-preview · #gim-pin · #map-confirm · #btn-shutter · #btn-detect · #btn-use · #validation-banner · #modal-gps
- DES-GRID / LinErpListFilterBar: N/A

## API / tasks (ids only)
- FormMode↔API: files/init·PUT·commit·GET · opt detect · opt patrol/sessions · host MediaIds+HasGps
- T-01…T-06 · T-BE=N/A · T-QA queued
- cite: T-W7-01 · AC-PGC-01..16 Pattern B · Grid N/A

## UNCLEAR
- none open (DOMAIN-MAP-PGC · PGC-BE-01 closed SA · PACK/WEB-CAM/MAP/COMPASS closed Design · ROUTE/PATTERN-B closed)

## Full paths (Read only if needed)
- task: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-photo-geo/task/web-rmms-photo-geo.md
- sa compact: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-photo-geo/handoff/sa-compact.md
- design: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-photo-geo/ui/design.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-photo-geo/STATUS.md
