# Handoff compact — sa

schemaVersion: 1
feature: photo-geo-capture
packKind: sheet
role: sa
status: confirmed
skillVersion: 2026.08.25.01
writtenAt: 2026-09-12T17:35:00.000Z
taskId: task_c15db047
slash: /agent-sa-mobile
mode: solution
changeScope: new_page
solution_confirm: approve
autoApprove: ON

## Decisions
- Sheet `DES-MOB-PGC` · files `purpose=photo-geo-capture` · on-device object geo + HITL · **cấm** invent `api/v1/photo-geo*`
- Object lat/lng ≠ photographer EXIF · return host `attachmentId`+object coords sidecar
- **GAP-PGC-BE-01 CLOSED P1:** không cột Incident object · sidecar + MediaIds/HasGps only · Step 4b **N/A**
- **GAP-PGC-DETECT-01 CLOSED:** detect Lat/Lng = object HITL · conf>30m → no detect
- GPS deny `DES-MOB-GPS-DENY` · offline queue files/host · **cấm** fake attachmentId/coords
- BFF: File NuGet + proxy · **cấm** PhotoGeoController · ERP.* · mfeStdUrl
- solution_confirm: **approve** · next: **team-lead** (`/agent-team-lead-mobile`) · e2e queued QA

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| DES-MOB-PGC | Chụp ảnh kèm tọa độ | LinmSheet | #sheet-pgc |
| capturePreview | preview | ImagePreviewFullBleed | EXIF+IMU |
| gimPin | gim 1 điểm | ImageTapPin | cấm multi |
| rowPhotogGps | Vị trí đã chốt | ListRow | photographer |
| rowDistance | Khoảng cách ước lượng | ListRow | on-device |
| rowObjectCoord | Tọa độ vật thể | ListRow | after HITL |
| mapConfirm | map | MapPinSheet | reuse peers |
| btnConfirmMap / btnUse | CTA | PrimaryButton | id+object coords |
| DES-MOB-GPS-DENY | Định vị bị tắt | Modal | no geo |

## Screens / zones (ids only)
- #sheet-pgc · #capture-preview · #gim-pin · #map-confirm · #modal-gps
- hosts: #sc-field-reflect · #sc-vis-capture · #sc-inc-form
- reviewUrlIos/Android: design-compact paths

## API / tasks (ids only)
- POST files/init · PUT files/{id}/object · POST files/commit · GET files/{id}/object
- optional POST ai-vision/detect (object Lat/Lng) · GET patrol/sessions
- host POST incident/incidents MediaIds · HasGps
- on-device geo + HITL — no photo-geo API · Step 4b N/A

## UNCLEAR
- none

## Full paths (Read only if needed)
- solution: /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/photo-geo-capture/be/solution-discovery.md
- design-compact: /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/photo-geo-capture/handoff/design-compact.md
- bff: /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/photo-geo-capture-bff-endpoints.md
- STATUS: /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/photo-geo-capture/STATUS.md
