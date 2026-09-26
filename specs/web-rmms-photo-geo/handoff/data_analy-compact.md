# Handoff compact — data_analy

schemaVersion: 1
feature: web-rmms-photo-geo
packKind: list
role: data_analy
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-09-26T06:47:05.828Z
contentHash: sha256:2282c3b64ab8701681f5edbc548b5cf1a2221159d9ffb779dfe03d186010f7a4

## Decisions
- changeScope: new_page
- formPattern: Mobile sheet overlay · phone max-width 430 · Android 1-1 #sheet-pgc · N/A ERP Modal/Slideout
- mfe: D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile · mfeStdUrl http://localhost:9301/web-rmms-photo-geo · productRoute overlay consumers
- be: D:/AI-QLBD/Linm.RMMS.WebService · File+AiVision · Incident/Patrol cite · cấm ERP.*
- bff: Linm.RMMS.Mobile.Bff · VITE_MOBILE_API_URL http://localhost:5202/mobile-bff/api/v1 · cấm web-bff client · cấm mobile-bff Route trên web-bff
- demo: N/A
- PGC: still → files init/PUT/commit → gim 1 điểm → object lat on-device → HITL map → return attachmentId
- HARD: GPS deny → block shutter/use/detect · accuracy≤30 detect · Lat detect=object HITL · cấm fake · useFormOptions · cấm invent photo-geo path
- OUT: Me*/feedback/cam-view · journal/kết ca/tồn tại/tần suất (B–E) · native iOS/Android edit
- open: UNCLEAR-DOMAIN-MAP-PGC · PGC-BE-01 · PACK-01 · WEB-CAM · MAP-HOST

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| capturePreview | still | CameraStill | #capture-preview · live |
| btnShutter | chụp | Button | GPS deny→disable |
| gimPin | gim | MapPinTap | 1 điểm #gim-pin |
| rowPhotog | vị trí đã chốt | ListRow RO | photographer GPS |
| rowDistance | khoảng cách | ListRow RO | distanceM |
| rowObject | tọa độ vật thể | ListRow RO | after HITL |
| mapConfirm | xác nhận map | MapHitl | #map-confirm MAP-HITL |
| btnUse | dùng ảnh | Button | return attachmentId |
| gpsLock | GPS | GPS | deny→DES-MOB-GPS-DENY |
| files* | upload | File | init/PUT/commit/GET |
| detect | optional | Button | POST ai-vision/detect object Lat |

## Screens / zones (ids only)
- PGC · (peer CAP · INC · VIS · FR)
- reviewUrl= (Design)
- peerStdUrl= http://localhost:9301/web-rmms-photo-geo
- DES-GRID / LinErpListFilterBar: N/A phone overlay
- prototype zone: #sheet-pgc · DES-MOB-PGC · #capture-preview · #gim-pin · #map-confirm · #btn-shutter · #btn-use

## API / tasks (ids only)
- FormMode↔API: files/init · PUT object · files/commit · GET object · optional ai-vision/detect · GET patrol/sessions
- real-data §A+§B: PASS
- T-*: T-W7-01 (cite TASKS)

## UNCLEAR
- UNCLEAR-DOMAIN-MAP-PGC: SA add DOMAIN-MAP row web-rmms-photo-geo
- UNCLEAR-PGC-BE-01: Create no object Lat · HasGps + MediaIds + sidecar
- UNCLEAR-PACK-01: packKind=list · surface sheet overlay
- UNCLEAR-WEB-CAM: getUserMedia primary · Design/Dev kit
- UNCLEAR-MAP-HOST: reuse web-rmms-gis clip · cấm invent map API

## Full paths (Read only if needed)
- control-hint: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-photo-geo-control-hint.md
- real-data: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-photo-geo-real-data.md
- context: D:/AI-QLBD/Linm.RMMS.Data/docs/context/features/web-rmms-photo-geo.md
- peer: photo-geo-capture.md
- screens: D:/AI-QLBD/Linm.RMMS.Data/docs/plan/web-rmms-mobile/SCREENS.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-photo-geo/STATUS.md
