# Handoff compact — sa

schemaVersion: 1
feature: web-rmms-photo-geo
packKind: list
role: sa
status: confirmed
skillVersion: 2026.09.05.03
writtenAt: 2026-09-27T13:20:00.000Z
taskId: task_b182eace
contentHash: sha256:525b8f61bbe397050bb1049e38683d6c333c7283165859967e927c1dc285b9ba
solution_confirm: approve
autoApprove: ON
changeScope: edit_page

## Decisions
- changeScope: edit_page · Keep DEC-PGC-BE-01/DEC-FILES/DEC-DETECT/DOMAIN-MAP · Delta Pattern B + route `/anh-vi-tri`
- DOMAIN-MAP: `web-rmms-photo-geo` → Incident/`incident` · cite File+AiVision+Patrol+Gis · cấm PhotoGeoController
- Route SSOT: `/anh-vi-tri` · http://localhost:9301/anh-vi-tri · cấm `/web-rmms-photo-geo`
- Pattern B: bỏ pre-disable canShutter/canDetect/canUse · chỉ disabled uploading/detecting/pending · GPS deny on-click `#modal-gps` · validationAttempted + `#validation-banner` string[]
- formPattern: Mobile sheet `#sheet-pgc` DES-MOB-PGC phone 430 · N/A DES-GRID/Excel
- BFF: Mobile.Bff :5202 `mobile-bff/api/v1` · cấm web-bff · users forward nếu thiếu · road-routes/search ok
- Files Live: init→PUT→commit→GET · purpose=`photo-geo-capture` · product=rmms · JPEG · cấm objectKey/resign URL
- Detect optional: Lat/Lng=object HITL · Acc≤30 · cấm photographer GPS
- DEC-PGC-BE-01: P1 sidecar attachmentId+object coords · host MediaIds+HasGps · **no** Lat column · migration/Step4b N/A
- API mới/entity: none · align `/align-mobile-to-mfe` · cấm tab/route/icon mới
- next: /agent-team-lead · roleOnly stop (GAP-PKT-ROLE-01)

## Inventory (slim)
| id | controlHint | API/device |
|----|-------------|-----------|
| capturePreview | CameraStill | getUserMedia |
| btnShutter | Button | Pattern B · GPS on-click |
| gimPin | MapPinTap | 1 pin sidecar |
| rowPhotog/Distance/Object | ListRow RO | device/HITL |
| mapConfirm | MapHitl | GIS clip |
| btnDetect | Button opt | disable only detecting |
| btnUse | Button | disable only uploading/pending · commit→return |
| validationBanner | Banner[] | after validationAttempted |
| gpsLock | GPS | deny-on-click modal |
| files* | File | init/PUT/commit/GET |

## Screens / zones
- PGC · peers CAP/INC/VIS/FR
- reviewUrl=file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-photo-geo/ui/prototype/index.html
- peerStdUrl=http://localhost:9301/anh-vi-tri
- mfeStdRoute=/anh-vi-tri
- zones: #sheet-pgc · #capture-preview · #gim-pin · #map-confirm · #btn-shutter · #btn-detect · #btn-use · #validation-banner · #modal-gps
- DES-GRID / Excel: N/A

## API / tasks
- FormMode↔API: files/init·PUT·commit·GET · opt detect · opt patrol/sessions · host incident MediaIds+HasGps · opt users forward
- T-W7-01 · AC-PGC-01..16 Pattern B · Grid N/A
- UNCLEAR-DOMAIN-MAP-PGC · UNCLEAR-PGC-BE-01: **resolved SA keep**
- API mới / migration / Step4b: none

## Full paths
- solution: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-photo-geo/be/solution-discovery.md
- DOMAIN-MAP: D:/AI-QLBD/Linm.RMMS.WebService/docs/DOMAIN-MAP.md
- design compact: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-photo-geo/handoff/design-compact.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-photo-geo/STATUS.md
- next: team-lead · task/web-rmms-photo-geo.md
