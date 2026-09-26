# Handoff compact — po

schemaVersion: 1
feature: web-rmms-photo-geo
packKind: list
role: po
status: confirmed
skillVersion: 2026.09.05.03
writtenAt: 2026-09-26T00:00:30.000Z
contentHash: sha256:2282c3b64ab8701681f5edbc548b5cf1a2221159d9ffb779dfe03d186010f7a4
autoApprove: ON
changeScope: new_page

## Decisions
- packKind=list · surface sheet overlay phone 430 · N/A DES-GRID / LinErpListFilterBar
- Goal: still → gim 1 → GPS người + object on-device → HITL map → files commit → return attachmentId+sidecar
- Entry: openCapture('photo-geo') từ INC/VIS/FR · std /web-rmms-photo-geo · cấm hub Field row
- formPattern: Mobile sheet `#sheet-pgc` · Android 1-1 · cấm ERP Modal/Slideout
- BFF: Mobile.Bff :5202 · cấm web-bff · cấm invent photo-geo path
- GPS deny → block shutter/use/detect · accuracy≤30 detect · Lat detect=object HITL · cấm fake
- WEB-CAM: getUserMedia/kit primary · file input không primary
- MAP-HOST: reuse web-rmms-gis clip · cấm invent map API
- PGC-BE-01: P1 sidecar+MediaIds+HasGps · SA Domain/Schema
- DOMAIN-MAP-PGC: SA add row
- OUT: Me*/B–E · native edit · multi-pin · Kind B desktop · demo rescan

## Inventory (slim)
| id | label | controlHint | AC |
|----|-------|-------------|-----|
| capturePreview | still | CameraStill | AC-PGC-02 |
| btnShutter | chụp | Button | AC-PGC-03 GPS |
| gimPin | gim 1 | MapPinTap | AC-PGC-04 |
| rowPhotog/Distance/Object | meta RO | ListRow | AC-GRID-02 |
| mapConfirm | HITL | MapHitl | AC-PGC-07 |
| btnUse | dùng ảnh | Button | AC-PGC-09 |
| gpsLock | GPS | GPS | DES-MOB-GPS-DENY |
| files* | upload | File | AC-PGC-08 |
| detect | optional | Button | AC-PGC-10 |

## Screens / zones
- PGC · peers CAP/INC/VIS/FR
- reviewUrl=(Design) · peerStdUrl=http://localhost:9301/web-rmms-photo-geo
- zones: #sheet-pgc · #capture-preview · #gim-pin · #map-confirm · #btn-shutter · #btn-use · DES-MOB-PGC
- DES-GRID: N/A

## API / tasks
- files/init·PUT·commit·GET · optional ai-vision/detect · optional patrol/sessions
- T-W7-01 PhotoGeoCapture
- FormMode↔API: §6 requirement

## AC ids
- AC-GRID-01…05 · AC-PGC-01…14

## UNCLEAR → next
- DOMAIN-MAP-PGC · PGC-BE-01 → SA
- WEB-CAM · MAP-HOST · PACK-01 → Design/Dev (PO chốt)
- COMPASS / PLANE → Design

## Full paths
- requirement: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-photo-geo/po/requirement.md
- prior compact: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-photo-geo/handoff/data_analy-compact.md
- control-hint: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-photo-geo-control-hint.md
- real-data: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-photo-geo-real-data.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-photo-geo/STATUS.md
- next: design · ui/design.md + prototype + reviewUrl
