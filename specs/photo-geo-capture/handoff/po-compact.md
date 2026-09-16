# Handoff compact — po

schemaVersion: 1
feature: photo-geo-capture
packKind: sheet
role: po
status: confirmed
skillVersion: 2026.08.25.01
writtenAt: 2026-09-12T17:22:30.000Z
taskId: task_b9a20f2f
slash: /agent-po-mobile
mode: requirement
changeScope: new_page

## Decisions
- Sheet capture → gim 1 pin → on-device object geo → HITL map → FileService `purpose=photo-geo-capture` → host `attachmentId`+object coords
- Object lat/lng ≠ photographer EXIF · **cấm** fake · **cấm** invent `api/v1/photo-geo*`
- Entry: host PhotoRow `openCapture` (`field-reflect` / `vis-capture` / `incident-create`) — **không** hub row
- GPS deny → `DES-MOB-GPS-DENY` · confidence >30 m → banner · no auto-attach object/detect
- Files init→PUT→commit · GET object JWT · **cấm** client objectKey / resign URL / fake attachmentId
- GAP-PGC-BE-01 / DETECT-01 → SA · Step 4b N/A · mfeStdUrl none · ERP.* none
- Demo missing → Design dual proto + reviewUrl · **cấm** re-scan demo (GAP-PO-DEMO-RESCAN-01)
- analy §A/§B PASS · UNCLEAR none · hash skip reused
- next: **design** (`/agent-design-mobile`) · autoApprove ON · e2eQa queued QA

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| capturePreview | preview | ImagePreviewFullBleed | EXIF+IMU |
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

## Device AC
- GPS · Camera still · IMU sidecar · Offline queue · Map HITL · JWT files/* · Bio/Push n/a

## Action (1=1)
- unique: `photo-geo-capture` openCapture sheet
- shared/no enqueue: files · hosts · map HITL · optional detect · patrol-pin ≠ object

## API / tasks (ids only)
- POST `files/init` · PUT `files/{id}/object` · POST `files/commit` · GET `files/{id}/object`
- optional POST `ai-vision/detect` · GET `patrol/sessions` · host POST `incident/incidents` MediaIds
- on-device geo + HITL — no photo-geo API

## UNCLEAR
- none

## Full paths (Read only if needed)
- requirement: `specs/photo-geo-capture/po/requirement.md`
- control-hint: `specs/_data-analy/photo-geo-capture-control-hint.md`
- real-data: `specs/_data-analy/photo-geo-capture-real-data.md`
- action-tree: `specs/_data-analy/photo-geo-capture-action-tree.md`
- prior: `specs/photo-geo-capture/handoff/data_analy-compact.md`
- STATUS: `specs/photo-geo-capture/STATUS.md`
