# Handoff compact — data_analy

schemaVersion: 1
feature: photo-geo-capture
packKind: sheet
role: data_analy
status: confirmed
skillVersion: 2026.08.25.01
writtenAt: 2026-09-12T17:20:00.000Z
taskId: task_fc7c8ad5
slash: /agent-data-analy-mobile
mode: feature_context
changeScope: new_page

## Decisions
- Sheet capture → gim 1 pin → on-device object geo (pinhole ∩ mặt đường) → HITL map → FileService `purpose=photo-geo-capture`
- Object lat/lng ≠ photographer EXIF GPS · **cấm** fake · **cấm** invent `api/v1/photo-geo*`
- Entry: host PhotoRow `openCapture` (`field-reflect` / `vis-capture` / `incident-create`) — **không** hub row
- Files: init→PUT→commit · GET object JWT · **cấm** client objectKey / resign URL
- Optional detect: Lat/Lng = object HITL · confidence >30 m → no detect auto-attach
- GAP-PGC-BE-01 / DETECT-01 → SA · Step 4b: N/A · mfeStdUrl: none · ERP.*: none
- Demo packet path missing → Design dual proto + reviewUrl
- real-data §A/§B: **PASS** · UNCLEAR: none
- next: **po** (`/agent-po-mobile`) · autoApprove ON

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| capturePreview | preview | ImagePreviewFullBleed | EXIF+IMU sidecar |
| gimPin | gim 1 điểm | ImageTapPin | cấm multi-pin |
| rowPhotogGps | Vị trí đã chốt | ListRow | người đứng |
| rowDistance | Khoảng cách ước lượng | ListRow | on-device |
| rowObjectCoord | Tọa độ vật thể | ListRow | after HITL |
| mapConfirm | map | MapPinSheet | reuse patrol-map/gis-map |
| btnConfirmMap / btnUse | CTA | PrimaryButton | return attachmentId+coords |
| gpsDeny | Định vị bị tắt | Modal | DES-MOB-GPS-DENY |

## Screens / zones (ids only)
- sheet `DES-MOB-PGC` (Design chốt id)
- hosts: `#sc-field-reflect` · `#sc-vis-capture` · `#sc-inc-form`
- reviewUrl= (Design pending)

## API / tasks (ids only)
- POST `files/init` · PUT `files/{id}/object` · POST `files/commit` · GET `files/{id}/object`
- optional POST `ai-vision/detect` · GET `patrol/sessions` · host POST `incident/incidents` MediaIds
- on-device geo + HITL — no photo-geo API

## UNCLEAR
- none

## Full paths (Read only if needed)
- control-hint: `specs/_data-analy/photo-geo-capture-control-hint.md`
- real-data: `specs/_data-analy/photo-geo-capture-real-data.md`
- bff: `specs/_data-analy/photo-geo-capture-bff-endpoints.md`
- action-tree: `specs/_data-analy/photo-geo-capture-action-tree.md`
- ctx: `docs/context/features/photo-geo-capture.md`
- STATUS: `specs/photo-geo-capture/STATUS.md`
