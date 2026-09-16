# Data-analy — photo-geo-capture (controlHint)

| | |
|---|---|
| feature | `photo-geo-capture` |
| title | [Mobile] [Tuần đường] -> Chụp ảnh kèm tọa độ |
| role | `data_analy` · `/agent-data-analy-mobile` · mode `feature_context` |
| packKind | **`sheet`** (STATUS · CTX · camera slot + map confirm) · **không** row hub tuần đường |
| changeScope | `new_page` |
| status | **confirmed** |
| taskId | `task_fc7c8ad5` |
| autoApprove | `ON` |
| demo | packet `Linm.RMMS.Demo/src/demo/ios/index.html` **missing** → host zones: `field-reflect` `#sc-field-reflect` PhotoRow · `vis-capture` `#sc-vis-capture` · `incident-create` `#sc-inc-form` · map HITL reuse `patrol-map` / `gis-map` · Design dual proto pending |
| ctx | `docs/context/features/photo-geo-capture.md` · peers `field-reflect` · `vis-capture` · `incident-create` · `patrol-pin` · `mobile-bff-file` · `its-traffic-detect` · `16-ITS` §5.2 · `24-TUAN` §1b |
| generatedAt | `2026-09-12T17:20:00.000Z` |

**Cấm:** invent `api/v1/photo-geo*` · client tự đặt `objectKey` (FILE-ATT-08) · persist resign URL (FILE-ATT-09) · fake lat/lng · coi EXIF GPS = tọa độ vật thể · multi-pin P1 · gộp `field-reflect` / `vis-capture` / `cam-patrol` / `patrol-pin` · mfeStdUrl · ERP.* · nhãn chrome ARKit/LiDAR · Step 4b / MIG ở role này.

## Skill packet (`/agent-data-analy-mobile`) — 4 file

| File | Skill step |
|------|------------|
| **file này** | 4–5 controlHint + tech factors |
| [`photo-geo-capture-bff-endpoints.md`](photo-geo-capture-bff-endpoints.md) | 6 BFF · **cấm invent** |
| [`photo-geo-capture-action-tree.md`](photo-geo-capture-action-tree.md) | 7 tree + share/reuse |
| [`photo-geo-capture-real-data.md`](photo-geo-capture-real-data.md) | 6b real-data bind |

## § Delta Current vs New (`new_page`)

| ID | Current (native / peers) | New (DoD P1) | Surface |
|----|--------------------------|--------------|---------|
| GAP-MOB-PGC-NAV-01 | Không sheet riêng · PhotoRow host chỉ GPS chỗ đứng | Sheet capture → gim → meta → map confirm · entry `openCapture` từ host | sheet |
| GAP-MOB-PGC-CAP-01 | Camera still host ad-hoc | Preview full-bleed · EXIF GPS+UTC · sidecar IMU | Capture |
| GAP-MOB-PGC-GIM-01 | — | Tap 1 điểm ảnh · 1 pin kéo lại · **cấm** multi-pin | Gim |
| GAP-MOB-PGC-GEO-01 | EXIF = chỗ đứng | On-device pinhole ∩ mặt đường → distanceM + object lat/lng · **cấm** fake | compute |
| GAP-MOB-PGC-HITL-01 | — | Map sheet pin đề xuất + kéo HITL bắt buộc trước gắn | Map confirm |
| GAP-MOB-PGC-FILE-01 | `mobile-bff-file` live | `purpose=photo-geo-capture` · init→PUT→commit · domain lưu `attachmentId` | files/* |
| GAP-MOB-PGC-CONF-01 | peer vis-capture ≤30 m | Sai số > ngưỡng (default **30 m**) → lưu ảnh+key · **không** auto gắn object coord | Confidence |
| GAP-MOB-PGC-DENY-01 | `DES-MOB-GPS-DENY` peers | Deny GPS → không chụp geo / không gắn object coord | Modal |
| GAP-PGC-BE-01 | Incident `HasGps`+`MediaIds` only | Persist object lat/lng = **SA** · P1 sidecar on-device · **cấm** invent cột ở analy | BE defer |
| GAP-PGC-DETECT-01 | Detect Lat/Lng 1 cặp | Sau HITL gửi **object** lat/lng vào field đã có | optional detect |
| GAP-MOB-PGC-DUAL-01 | Demo path missing | Design dual iOS 390×844 · Android 412×915 | dual |

**Không** đổi (OUT): `field-reflect` form · `vis-capture` detect chrome · `patrol-pin` GPS chỗ đứng · `cam-patrol` finder · web ITS ≥2 frame · invent map API · P2 LiDAR/ARCore depth (DEFER).

**Reuse:** FileService BFF · PhotoRow / `LinmImageUpload` · `DES-MOB-GPS-DENY` · `patrol-map` / `gis-map` HITL · DetectAiVisionRequest Lat/Lng · MediaIds.

## Tech factors

| Factor | P1 | Notes |
|--------|----|-------|
| GPS | **yes** | photographerLat/Lng + accuracyM · EXIF · deny → `DES-MOB-GPS-DENY` · **cấm** fake |
| Camera | **yes** | Still capture · preview · gim overlay · **không** continuous finder |
| Compass / IMU | **yes** | headingDeg · pitchDeg · rollDeg · hfov · sidecar on-device · **không** API |
| Offline | yes | Upload fail → queue host · **cấm** fake attachmentId · compute local OK |
| Map | **yes** | HITL kéo pin · reuse patrol-map / gis-map · **cấm** invent map endpoint |
| Biometric | n/a | |
| Push | n/a | |
| JWT | **yes** | mọi `files/*` · preview `GET /object` |

## § Tab index

`tabs: none` — **sheet** overlay trên host (`field` / `incident`) · Shell Tab 5 giữ tab host · **không** thêm row hub tuần đường.

## § Demo dual

Cùng flow VN: chụp → gim 1 điểm → meta (key rút · GPS người · khoảng cách · tọa độ vật thể) → map confirm kéo pin → trả `attachmentId` + object lat/lng cho host.  
Demo SSOT packet path **missing** → Design tạo `specs/photo-geo-capture/ui/prototype/{ios,android}/index.html` · reviewUrl trước Approve.  
Copy chrome: «Vị trí đã chốt» / «Khoảng cách ước lượng» / sai số — **không** tên thuật toán.

## controlHint — sheet `photo-geo-capture` (`DES-MOB-PGC` · Design chốt id)

| Field | VN | controlHint | Size | Kit | Notes |
|-------|----|-------------|------|-----|-------|
| sheetTitle | Chụp ảnh kèm tọa độ | SheetTitle | 17 | `LinmSheet` | fixed |
| capturePreview | (ảnh) | ImagePreviewFullBleed | — | camera kit | sau chụp · overlay chữ thập |
| btnShutter | Chụp | ShutterButton | — | `#i-camera` | require GPS ok |
| gimPin | (1 điểm) | ImageTapPin | — | overlay | 1 pin · kéo lại · **cấm** multi |
| rowKey | Key / {shortKey} | ListRow readonly | 13 / ≥16 | `LinmListRow` | `attachmentId` rút gọn sau commit |
| rowPhotogGps | Vị trí đã chốt / ±{n} m | ListRow readonly | 13 / ≥16 | `LinmListRow` | GPS **người đứng** · **không** = vật thể |
| rowDistance | Khoảng cách ước lượng / {n} m | ListRow readonly | 13 / ≥16 | `LinmListRow` | on-device · sau gim |
| rowObjectCoord | Tọa độ vật thể / lat,lng | ListRow readonly | 13 / ≥16 | `LinmListRow` | proposed → HITL confirmed |
| bannerError | Sai số ước lượng cao · kéo pin | Banner | 13 | | > ngưỡng · giữ ảnh+key |
| bannerCompass | Đứng lệch xe · kéo pin trên bản đồ | Banner | 13 | | GAP-PGC-COMPASS-01 |
| mapConfirm | (map) | MapPinSheet | — | reuse patrol-map / gis-map | pin đề xuất + kéo HITL |
| btnConfirmMap | Xác nhận vị trí | PrimaryButton | 16 | `LinmPrimaryButton` | chốt object lat/lng |
| btnUse | Dùng ảnh | PrimaryButton | 16 | | trả host · attachmentId + coords |
| btnCancel | Hủy | SecondaryButton | 16 | | dismiss · không fake id |
| toastFail | Không tải được ảnh | Toast | 13–16 | `LinmToast` | files fail |
| toastOk | Đã gắn tọa độ vật thể | Toast | 13–16 | | sau HITL confirm |
| gpsDeny | (reuse) | Modal | 17/13 | `DES-MOB-GPS-DENY` | deny · không geo |

### Entry (parent chrome — không control riêng slug)

| Field | VN | controlHint | Kit | Notes |
|-------|----|-------------|-----|-------|
| hostPhotoSlot | Ảnh hiện trường | PhotoRow / CameraButton | `#i-camera` | `openCapture('photo-geo')` từ field-reflect / vis-capture / incident-create |

## UNCLEAR

**none** — CTX đủ pinhole + HITL + FileService · GAP-PGC-BE-01 / DETECT-01 defer SA · demo missing = Design dual · Step 4b **skip**.

## Handoff → PO

| Field | Value |
|-------|-------|
| feature | `photo-geo-capture` |
| packKind | **sheet** |
| control-hint | **PASS** · file này |
| real-data | **PASS** · `photo-geo-capture-real-data.md` |
| bff | **PASS** · `photo-geo-capture-bff-endpoints.md` |
| action-tree | **PASS** · `photo-geo-capture-action-tree.md` |
| next | `/agent-po-mobile` · autoApprove ON · **new_page** → requirement + Design prototype+reviewUrl |
| e2eQa | queued `/agent-qa*` — **cấm** e2e ở data_analy |
| note | Object coord on-device + HITL · FileService only · **cấm** invent photo-geo API |

## Version meta

| Field | Value |
|-------|-------|
| skillId | agent-data-analy-mobile |
| skillVersion | 2026.08.25.01 |
| schemaVersion | 2 |
| workflowVersion | 2026.08.25.01 |
| rulesVersion | 2026.08.25.2 |
| generatedAt | 2026-09-12T17:20:00.000Z |
| versionGate | rechecked |
| contentHash | sha256:photo-geo-capture-control-hint-20260912 |
| ctxHash | sha256:96c48bab551b693f |
| demoHash | sha256:photo-geo-capture-demo-missing-host-zones |

---
<!-- Version meta: skillId=agent-data-analy-mobile skillVersion=2026.08.25.01 schemaVersion=2 workflowVersion=2026.08.25.01 rulesVersion=2026.08.25.2 versionGate=rechecked -->
