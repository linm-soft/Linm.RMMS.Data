# Handoff compact — design

schemaVersion: 1
feature: web-rmms-photo-geo
packKind: list
role: design
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-09-26T00:05:00.000Z
taskId: task_dc3f39e0
contentHash: sha256:2282c3b64ab8701681f5edbc548b5cf1a2221159d9ffb779dfe03d186010f7a4
design_confirm: approve
autoApprove: ON
real_view_parity: v1
shared_grid_example: N/A

## Decisions
- changeScope: new_page
- formPattern: Mobile sheet overlay phone 430 · Android 1-1 #sheet-pgc · N/A ERP Modal/Slideout
- Grid AC Kind B / DES-GRID / LinErpListFilterBar: N/A phone overlay
- Report AC / DES-RPT: N/A
- mfe: D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile · mfeStdUrl http://localhost:9301/web-rmms-photo-geo · productRoute overlay consumers
- be: D:/AI-QLBD/Linm.RMMS.WebService · File+AiVision · Incident/Patrol cite · cấm ERP.*
- bff: Linm.RMMS.Mobile.Bff :5202 mobile-bff/api/v1 · cấm web-bff
- demo: N/A · hash skip · cấm rescan (GAP-DES-DEMO-RESCAN-01)
- PACK-01: list + sheet #sheet-pgc · DES-MOB-PGC
- WEB-CAM: getUserMedia/kit primary · file input không primary
- MAP-HOST: reuse web-rmms-gis clip · cấm invent map API
- COMPASS: banner + HITL pin drag
- DoD: still→gim1→GPS+object on-device→HITL→files commit→return attachmentId+sidecar · GPS deny→block · acc≤30 detect · Lat detect=object · cấm fake
- kit_missing_confirm: N/A
- next: /agent-sa · roleOnly stop (GAP-PKT-ROLE-01)

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| capturePreview | still | CameraStill | #capture-preview · getUserMedia |
| btnShutter | chụp | Button | GPS deny→disable |
| gimPin | gim 1 | MapPinTap | #gim-pin · cấm multi |
| rowPhotog/Distance/Object | meta RO | ListRow | photographer ≠ object |
| mapConfirm | HITL | MapHitl | #map-confirm MAP-HITL · GIS clip |
| btnUse | dùng ảnh | Button | return attachmentId |
| gpsLock | GPS | GPS | DES-MOB-GPS-DENY |
| files* | upload | File | init/PUT/commit/GET |
| detect | optional | Button | object Lat HITL · acc≤30 |

## Screens / zones (ids only)
- PGC · (peer CAP · INC · VIS · FR)
- reviewUrl= file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-photo-geo/ui/prototype/index.html
- reviewUrl modes=?deny=1 · ?conf=45 · ?compass=1 · ?step=map · ?fail=1
- peerStdUrl= http://localhost:9301/web-rmms-photo-geo
- real_view_parity= v1
- DES-GRID / LinErpListFilterBar: N/A
- prototype zone: #sheet-pgc · DES-MOB-PGC · #capture-preview · #gim-pin · #map-confirm · #btn-shutter · #btn-use

## API / tasks (ids only)
- FormMode↔API: files/init · PUT object · files/commit · GET object · optional ai-vision/detect · GET patrol/sessions
- real-data §A+§B: PASS · T-W7-01 · AC-PGC-01..14 · Grid AC N/A · devSlash=/agent-dev

## UNCLEAR
- UNCLEAR-PACK-01 / WEB-CAM / MAP-HOST / COMPASS: resolved Design
- UNCLEAR-DOMAIN-MAP-PGC→SA add DOMAIN-MAP row web-rmms-photo-geo
- UNCLEAR-PGC-BE-01→SA sidecar+MediaIds+HasGps · no invent Lat column

## Full paths (Read only if needed)
- design: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-photo-geo/ui/design.md
- prototype: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-photo-geo/ui/prototype/index.html
- control-hint: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-photo-geo-control-hint.md
- real-data: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-photo-geo-real-data.md
- po: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-photo-geo/po/requirement.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-photo-geo/STATUS.md
