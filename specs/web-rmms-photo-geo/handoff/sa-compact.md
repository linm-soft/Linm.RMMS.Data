# Handoff compact — sa

schemaVersion: 1
feature: web-rmms-photo-geo
packKind: list
role: sa
status: confirmed
skillVersion: 2026.09.05.03
writtenAt: 2026-09-26T00:10:00.000Z
taskId: task_8360a321
contentHash: sha256:2282c3b64ab8701681f5edbc548b5cf1a2221159d9ffb779dfe03d186010f7a4
solution_confirm: approve
autoApprove: ON
changeScope: new_page

## Decisions
- DOMAIN-MAP: `web-rmms-photo-geo` → Incident/`incident` · cite FileService+AiVision+Patrol+Gis HITL · cấm PhotoGeoController
- formPattern: Mobile sheet `#sheet-pgc` DES-MOB-PGC phone 430 · Android 1-1 · N/A DES-GRID
- BFF: Mobile.Bff :5202 `mobile-bff/api/v1` · cấm web-bff client
- Files Live: init→PUT→commit→GET · purpose=`photo-geo-capture` · product=rmms · JPEG · cấm objectKey/resign URL
- Detect optional: Lat/Lng=object HITL · Acc≤30 · cấm photographer GPS · Vision via BFF/API
- DEC-PGC-BE-01: P1 sidecar return attachmentId+object coords · host MediaIds+HasGps · **no** Lat column · migration N/A
- GPS deny→block shutter/use/detect · cấm fake · MAP-HOST=GIS clip · WEB-CAM=getUserMedia
- API mới/entity/Step4b: none · align peer photo-geo-capture
- next: /agent-team-lead · roleOnly stop (GAP-PKT-ROLE-01)

## Inventory (slim)
| id | controlHint | API/device |
|----|-------------|-----------|
| capturePreview | CameraStill | getUserMedia |
| btnShutter | Button | GPS gate |
| gimPin | MapPinTap | 1 pin sidecar |
| rowPhotog/Distance/Object | ListRow RO | device/HITL |
| mapConfirm | MapHitl | GIS clip |
| btnUse | Button | commit→return |
| gpsLock | GPS | deny modal |
| files* | File | init/PUT/commit/GET |
| detect | Button opt | ai-vision/detect |

## Screens / zones
- PGC · peers CAP/INC/VIS/FR
- reviewUrl=file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-photo-geo/ui/prototype/index.html
- peerStdUrl=http://localhost:9301/web-rmms-photo-geo
- zones: #sheet-pgc · #capture-preview · #gim-pin · #map-confirm · #btn-shutter · #btn-use · DES-MOB-PGC

## API / tasks
- FormMode↔API: files/init·PUT·commit·GET · opt detect · opt patrol/sessions · host incident MediaIds+HasGps
- T-W7-01 · AC-PGC-01..14 · Grid N/A
- UNCLEAR-DOMAIN-MAP-PGC · UNCLEAR-PGC-BE-01: **resolved SA**

## Full paths
- solution: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-photo-geo/be/solution-discovery.md
- DOMAIN-MAP: D:/AI-QLBD/Linm.RMMS.WebService/docs/DOMAIN-MAP.md
- design compact: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-photo-geo/handoff/design-compact.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-photo-geo/STATUS.md
- next: team-lead · task/web-rmms-photo-geo.md
