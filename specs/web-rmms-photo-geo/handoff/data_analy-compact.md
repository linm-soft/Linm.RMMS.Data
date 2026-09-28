# Handoff compact — data_analy

schemaVersion: 1
feature: web-rmms-photo-geo
packKind: list
role: data_analy
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-09-27T12:55:00.000Z
contentHash: sha256:525b8f61bbe397050bb1049e38683d6c333c7283165859967e927c1dc285b9ba
taskId: task_a4a7babf
changeScope: edit_page

## Decisions
- changeScope: edit_page · NEW task · keep PO/Design/SA artifacts · analy § Delta only
- cite: docs/plan/web-rmms-mobile/SUBMIT-VALIDATE.md · Pattern B · slug web-rmms-photo-geo
- formPattern: Mobile sheet overlay · phone 430 · #sheet-pgc · N/A ERP Modal
- mfe: D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile · mfeStdRoute /anh-vi-tri · mfeStdUrl http://localhost:9301/anh-vi-tri
- be: D:/AI-QLBD/Linm.RMMS.WebService · File+AiVision · cấm ERP.*
- bff: Linm.RMMS.Mobile.Bff · VITE_MOBILE_API_URL …/mobile-bff/api/v1 · cấm web-bff · users forward nếu thiếu · road-routes/search đã có
- demo: N/A · cấm Excel/toolbar export · cấm new_page typed CRUD
- Delta HARD: bỏ disabled={!canShutter|!canDetect|!canUse} vì thiếu data · chỉ disable lúc uploading/detecting/pending · GPS/cam deny → bấm mới banner/modal · validationAttempted + banner string[]
- Keep: File flow · HITL · useFormOptions · DEC-PGC-BE-01 sidecar · Design reviewUrl
- Last: /align-mobile-to-mfe · no android/ios proto · no new tab/route/icon
- OUT: Me*/B–E · native edit · invent photo-geo path · fake GPS

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| capturePreview | still | CameraStill | #capture-preview · live |
| btnShutter | chụp | Button | Pattern B · no pre-disable GPS |
| gimPin | gim | MapPinTap | 1 điểm #gim-pin |
| rowPhotog | vị trí đã chốt | ListRow RO | photographer GPS |
| rowDistance | khoảng cách | ListRow RO | distanceM |
| rowObject | tọa độ vật thể | ListRow RO | after HITL |
| mapConfirm | xác nhận map | MapHitl | #map-confirm MAP-HITL |
| btnDetect | nhận diện | Button | disable only detecting |
| btnUse | dùng ảnh | Button | disable only uploading |
| validationBanner | lỗi client | Banner[] | after validationAttempted |
| gpsLock | GPS | GPS | deny-on-click modal |
| files* | upload | File | init/PUT/commit/GET |

## Screens / zones (ids only)
- PGC · (peer CAP · INC · VIS · FR)
- reviewUrl= file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-photo-geo/ui/prototype/index.html
- peerStdUrl= http://localhost:9301/anh-vi-tri
- DES-GRID / LinErpListFilterBar / Excel: N/A
- zones: #sheet-pgc · #capture-preview · #gim-pin · #map-confirm · #btn-shutter · #btn-use · #btn-detect

## API / tasks (ids only)
- FormMode↔API: files/init · PUT object · files/commit · GET object · optional ai-vision/detect · GET patrol/sessions
- BFF: mobileApiBase only · integration/users forward if missing · road-routes/search ok
- real-data §A+§B+§Delta: PASS
- code: PhotoGeoPage.tsx

## UNCLEAR
- UNCLEAR-PGC-BE-01: keep sidecar · HasGps + MediaIds (DEC-PGC-BE-01)
- UNCLEAR-PACK-01: packKind=list · sheet overlay
- RESOLVED-ROUTE: /anh-vi-tri
- RESOLVED-PATTERN-B: SUBMIT-VALIDATE edit_page

## Full paths (Read only if needed)
- control-hint: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-photo-geo-control-hint.md
- real-data: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-photo-geo-real-data.md
- context: D:/AI-QLBD/Linm.RMMS.Data/docs/context/features/web-rmms-photo-geo.md
- edit-ssot: D:/AI-QLBD/Linm.RMMS.Data/docs/plan/web-rmms-mobile/SUBMIT-VALIDATE.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-photo-geo/STATUS.md
