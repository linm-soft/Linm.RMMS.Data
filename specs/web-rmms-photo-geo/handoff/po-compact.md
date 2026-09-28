# Handoff compact — po

schemaVersion: 1
feature: web-rmms-photo-geo
packKind: list
role: po
status: confirmed
skillVersion: 2026.09.05.03
writtenAt: 2026-09-27T13:00:00.000Z
contentHash: sha256:525b8f61bbe397050bb1049e38683d6c333c7283165859967e927c1dc285b9ba
autoApprove: ON
changeScope: edit_page
taskId: task_fdef0b97

## Decisions
- changeScope: edit_page · Keep prior AC/zones/Design reviewUrl/SA DEC-PGC-BE-01 · Delta Pattern B only
- cite: SUBMIT-VALIDATE Pattern B · slug web-rmms-photo-geo · PhotoGeoPage.tsx
- Route SSOT: /anh-vi-tri · http://localhost:9301/anh-vi-tri · cấm /web-rmms-photo-geo
- Pattern B: bỏ disabled={!canShutter|!canDetect|!canUse} · chỉ disable uploading/detecting/pending · GPS deny on-click modal · validationAttempted + banner string[]
- formPattern: Mobile sheet #sheet-pgc · phone 430 · N/A DES-GRID/Excel
- BFF: Mobile.Bff mobileApiBase only · cấm web-bff · cấm invent photo-geo path
- Keep: File flow · HITL · useFormOptions · sidecar MediaIds+HasGps
- Align: /align-mobile-to-mfe · cấm tab/route/icon mới · cấm android/ios proto
- OUT: Me*/B–E · native edit · Excel · new_page CRUD · fake GPS · demo rescan

## Inventory (slim)
| id | label | controlHint | AC |
|----|-------|-------------|-----|
| capturePreview | still | CameraStill | AC-PGC-02 |
| btnShutter | chụp | Button | AC-PGC-03 Pattern B |
| gimPin | gim 1 | MapPinTap | AC-PGC-04 |
| rowPhotog/Distance/Object | meta RO | ListRow | AC-GRID-02 |
| mapConfirm | HITL | MapHitl | AC-PGC-07 |
| btnDetect | nhận diện | Button | AC-PGC-10 detecting only |
| btnUse | dùng ảnh | Button | AC-PGC-09 / AC-GRID-04 |
| validationBanner | lỗi client | Banner[] | AC-PGC-15 |
| gpsLock | GPS | GPS | deny-on-click |
| files* | upload | File | AC-PGC-08 |

## Screens / zones
- PGC · peers CAP/INC/VIS/FR
- reviewUrl=file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-photo-geo/ui/prototype/index.html
- peerStdUrl=http://localhost:9301/anh-vi-tri
- zones: #sheet-pgc · #capture-preview · #gim-pin · #map-confirm · #btn-shutter · #btn-use · #btn-detect · #validation-banner
- DES-GRID / Excel: N/A

## API / tasks
- files/init·PUT·commit·GET · optional ai-vision/detect · optional patrol/sessions
- BFF users forward nếu thiếu · road-routes/search ok
- FormMode↔API: §6 requirement · T-W7-01

## AC ids
- AC-GRID-01…05 · AC-PGC-01…16 (Pattern B)

## UNCLEAR → next
- PGC-BE-01 keep sidecar → SA
- RESOLVED-ROUTE / PATTERN-B → Design delta CTA + Dev/QA
- WEB-CAM · MAP-HOST · COMPASS/PLANE → Design/Dev

## Full paths
- requirement: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-photo-geo/po/requirement.md
- prior compact: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-photo-geo/handoff/data_analy-compact.md
- control-hint: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-photo-geo-control-hint.md
- real-data: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-photo-geo-real-data.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-photo-geo/STATUS.md
- next: design · keep design+prototype · Delta CTA Pattern B
