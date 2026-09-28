# Handoff compact — design

schemaVersion: 1
feature: web-rmms-photo-geo
packKind: list
role: design
status: confirmed
skillVersion: 2026.09.05.03
writtenAt: 2026-09-27T13:10:00.000Z
taskId: task_0c82ed08
contentHash: sha256:525b8f61bbe397050bb1049e38683d6c333c7283165859967e927c1dc285b9ba
design_confirm: approve
autoApprove: ON
changeScope: edit_page
real_view_parity: v1
shared_grid_example: N/A

## Decisions
- changeScope: edit_page · Keep prior zones/reviewUrl/File+HITL · Delta Pattern B CTA only
- cite: SUBMIT-VALIDATE Pattern B · PhotoGeoPage.tsx
- Route SSOT: /anh-vi-tri · http://localhost:9301/anh-vi-tri · cấm /web-rmms-photo-geo
- Pattern B: bỏ pre-disable canShutter/canDetect/canUse · chỉ disabled uploading/detecting/pending · GPS deny on-click DES-MOB-GPS-DENY · validationAttempted + #validation-banner string[]
- formPattern: Mobile sheet #sheet-pgc · phone 430 · N/A DES-GRID/Excel
- reviewUrl kept · prototype Delta CTA + #btn-detect + #validation-banner
- BFF: Mobile.Bff mobileApiBase only · cấm web-bff · cấm invent photo-geo path
- Keep: File flow · HITL · useFormOptions · DEC-PGC-BE-01 sidecar
- Align: /align-mobile-to-mfe · cấm tab/route/icon mới · cấm android/ios proto
- demo: N/A · hash skip · cấm rescan (GAP-DES-DEMO-RESCAN-01)
- next: /agent-sa · roleOnly stop (GAP-PKT-ROLE-01)

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| capturePreview | still | CameraStill | #capture-preview |
| btnShutter | chụp | Button | Pattern B · no pre-disable GPS |
| gimPin | gim 1 | MapPinTap | #gim-pin · cấm multi |
| rowPhotog/Distance/Object | meta RO | ListRow | photographer ≠ object |
| mapConfirm | HITL | MapHitl | #map-confirm MAP-HITL |
| btnDetect | nhận diện | Button | disable only detecting |
| btnUse | dùng ảnh | Button | disable only uploading/pending |
| validationBanner | lỗi client | Banner[] | #validation-banner |
| gpsLock | GPS | GPS | deny-on-click modal |
| files* | upload | File | init/PUT/commit/GET |

## Screens / zones (ids only)
- PGC · (peer CAP · INC · VIS · FR)
- reviewUrl=file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-photo-geo/ui/prototype/index.html
- reviewUrl modes=?deny=1 · ?conf=45 · ?compass=1 · ?step=map · ?fail=1
- peerStdUrl=http://localhost:9301/anh-vi-tri
- mfeStdRoute=/anh-vi-tri
- real_view_parity=v1
- DES-GRID / LinErpListFilterBar / Excel: N/A
- zones: #sheet-pgc · #capture-preview · #gim-pin · #map-confirm · #btn-shutter · #btn-detect · #btn-use · #validation-banner · #modal-gps

## API / tasks (ids only)
- FormMode↔API: files/init · PUT object · files/commit · GET object · optional ai-vision/detect · GET patrol/sessions
- BFF users forward nếu thiếu · road-routes/search ok
- real-data §A+§B+§Delta: PASS · AC-PGC-01..16 · Grid AC N/A · devSlash=/agent-dev

## UNCLEAR
- UNCLEAR-PGC-BE-01 → SA keep sidecar MediaIds+HasGps
- UNCLEAR-DOMAIN-MAP-PGC → SA keep
- RESOLVED-ROUTE / PATTERN-B / WEB-CAM / MAP-HOST / COMPASS → closed Design

## Full paths (Read only if needed)
- design: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-photo-geo/ui/design.md
- prototype: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-photo-geo/ui/prototype/index.html
- control-hint: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-photo-geo-control-hint.md
- real-data: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-photo-geo-real-data.md
- po: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-photo-geo/po/requirement.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-photo-geo/STATUS.md
