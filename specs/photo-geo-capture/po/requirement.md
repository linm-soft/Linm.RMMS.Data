# PO — Requirement — photo-geo-capture

| | |
|---|---|
| feature | `photo-geo-capture` |
| title | [Mobile] [Tuần đường] -> Chụp ảnh kèm tọa độ |
| role | `po` · `/agent-po-mobile` |
| packKind | **sheet** |
| changeScope | `new_page` |
| status | **confirmed** |
| taskId | `task_b9a20f2f` |
| autoApprove | `ON` |
| lane | `mobile` · iOS + Android · **cấm** mfeStdUrl · **cấm** ERP.* |
| prior | data_analy **confirmed** · `handoff/data_analy-compact.md` |
| demo | packet missing → Design dual proto + reviewUrl |
| generatedAt | `2026-09-12T17:22:30.000Z` |

**Cấm:** invent `api/v1/photo-geo*` · client `objectKey` / resign URL · fake lat/lng · EXIF GPS = tọa độ vật thể · multi-pin · gộp `patrol-pin` / `cam-patrol` · chrome ARKit/LiDAR · Step 4b / e2e ở role PO · re-scan demo (GAP-PO-DEMO-RESCAN-01).

## 1. Goal / DoD (P1)

Người tuần đường từ **host PhotoRow** (`field-reflect` / `vis-capture` / `incident-create`) mở sheet **Chụp ảnh kèm tọa độ**: chụp still → gim **1 điểm** trên ảnh → on-device ước lượng **từ ống kính** (`lensRangeM`) + khoảng cách mặt đường + tọa độ vật thể (3D ray ∩ mặt đường) → **HITL** kéo pin trên map → upload FileService `purpose=photo-geo-capture` → trả host `attachmentId` + object lat/lng đã confirm. Tap still sau xác nhận / tap thumb host → `#sheet-pgc-review` xem lại ảnh + tọa độ (**không** re-upload).

**DoD PASS khi:**
1. Entry `openCapture('photo-geo')` từ 3 host — **không** hub row tuần đường.
2. GPS ok bắt buộc trước shutter · deny → `DES-MOB-GPS-DENY` **chỉ khi chưa cấp** (Android FINE **hoặc** COARSE · iOS WhenInUse) · **cấm** deny toast khi quyền đã cấp · capture fail → `pgc.toast.captureFail` · không chụp geo / không gắn object coord.
3. Live preview **trong** `#capture-preview` + HUD tâm khung (look-down gravity `d=h/tan(θ)` · **cấm** kẹp 37 m) + pinch/± zoom (`LinmInAppCapture` · 1…8) + optional overlay **Toàn màn hình** + **ẩn tab footer** máy full-height + freeze still. **Cấm** UIImagePicker / Camera.app / Intent máy ảnh hệ thống / Dialog camera hệ thống.
4. Gim **đúng 1 pin** · kéo lại được · **cấm** multi-pin.
5. Object lat/lng **≠** photographer EXIF GPS · **cấm** fake.
6. Map HITL bắt buộc trước gắn object · reuse `patrol-map` / `gis-map`.
7. Sai số ước lượng > ngưỡng (default **30 m**) → banner · vẫn lưu ảnh+key · **không** auto-attach object coord / detect.
8. Files: init → PUT object → commit · GET object JWT · domain lưu `attachmentId` · **cấm** fake id khi upload fail (queue host).
9. Dual iOS 390×844 + Android 412×915 (Design) · copy VN không tên thuật toán.
10. Optional detect: Lat/Lng = **object HITL** · GAP-PGC-BE-01 / DETECT-01 → SA.
11. Fullscreen in-app **không** rời session camera · thu nhỏ về sheet · HITL map vẫn bắt buộc.

## 2. Screens / zones

| Zone id | Surface | Mục đích |
|---------|---------|----------|
| `DES-MOB-PGC` | sheet overlay | Owner slug · Design chốt id |
| `#sc-field-reflect` | host | PhotoRow `openCapture` |
| `#sc-vis-capture` | host | chain / openCapture |
| `#sc-inc-form` | host | photos → MediaIds |
| map HITL | reuse patrol-map / gis-map | kéo pin object |
| `DES-MOB-GPS-DENY` | modal | GPS deny |

**Tabs:** none — giữ tab host · **không** thêm row hub.

### Control inventory (SSOT analy)

| id | VN | controlHint | AC note |
|----|-----|-------------|---------|
| sheetTitle | Chụp ảnh kèm tọa độ | SheetTitle | fixed |
| capturePreview | (ảnh) | ImagePreviewFullBleed | sau chụp · chữ thập |
| btnShutter | Chụp | ShutterButton | require GPS ok |
| gimPin | (1 điểm) | ImageTapPin | 1 pin · kéo lại |
| rowKey | Key / {shortKey} | ListRow | sau commit |
| rowPhotogGps | Vị trí đã chốt / ±{n} m | ListRow | GPS **người đứng** |
| rowLens | Từ ống kính / {n} m | ListRow | slant ống kính → vật thể trên mặt đường |
| rowDistance | Khoảng cách ước lượng / {n} m | ListRow | mặt đường ngang |
| rowObjectCoord | Tọa độ vật thể / lat,lng | ListRow | proposed → HITL |
| reviewSheet | Ảnh kèm tọa độ | Overlay | tap still/thumb · **không** re-upload |
| bannerError | Sai số ước lượng cao · kéo pin | Banner | > 30 m |
| bannerCompass | Đứng lệch xe · kéo pin trên bản đồ | Banner | GAP-PGC-COMPASS-01 |
| mapConfirm | (map) | MapPinSheet | pin đề xuất + kéo |
| btnConfirmMap | Xác nhận vị trí | PrimaryButton | chốt object |
| btnUse | Dùng ảnh | PrimaryButton | return host |
| btnCancel | Hủy | SecondaryButton | dismiss · không fake id |
| toastFail | Không tải được ảnh | Toast | files fail |
| toastOk | Đã gắn tọa độ vật thể | Toast | sau HITL |
| gpsDeny | (reuse) | Modal | DES-MOB-GPS-DENY |
| hostPhotoSlot | Ảnh hiện trường | PhotoRow | entry only |

## 3. Action tree (1 action = 1 feature)

```
host PhotoRow (field-reflect | vis-capture | incident-create)
└── photo-geo-capture          ← **this feature** · sheet · unique
    ├── capture + EXIF + IMU   ← cùng slug
    ├── gim 1 pin              ← cùng slug
    ├── distance + object geo  ← cùng slug · on-device
    ├── map HITL               ← reuse map · không enqueue
    ├── files/*                ← mobile-bff-file shared · không enqueue
    └── optional detect        ← peer · Lat/Lng = object HITL · không gộp
```

| feature | action | enqueue |
|---------|--------|---------|
| `photo-geo-capture` | Chụp + tọa độ vật thể | **this turn** |
| `mobile-bff-file` / hosts / map / `patrol-pin` | shared / peer / **khác** chỗ đứng | **không** |

**Sibling enqueue:** none.

## 4. Device AC (HARD)

| Factor | P1 | Acceptance |
|--------|----|------------|
| GPS | yes | photographerLat/Lng + accuracyM · EXIF · deny → modal · **cấm** fake |
| Camera | yes | still · preview · gim · **không** continuous finder |
| Compass / IMU | yes | sidecar on-device · banner lệch xe · **không** API |
| Offline | yes | compute local OK · upload fail → host queue · **cấm** fake attachmentId |
| Map | yes | HITL kéo pin · reuse peers · **cấm** invent map API |
| JWT | yes | mọi `files/*` · GET object |
| Biometric / Push | n/a | |

## 5. User stories + AC

### US-01 Capture + gim
**Given** GPS granted · host mở sheet  
**When** user Chụp → tap 1 điểm ảnh  
**Then** preview + gim 1 pin · rowPhotogGps hiện · rowDistance/object đề xuất sau compute · không multi-pin.

### US-02 HITL map
**Given** có object proposed  
**When** user kéo pin + Xác nhận vị trí  
**Then** rowObjectCoord = confirmed · toastOk · btnUse trả `attachmentId` + object lat/lng · **cấm** skip HITL P1.

### US-03 Confidence
**Given** sai số > 30 m (SA config)  
**When** compute xong  
**Then** bannerError · lưu ảnh+key · **không** auto gắn object / detect.

### US-04 Files
**Given** HITL confirmed (hoặc chỉ ảnh khi confidence xấu theo SA)  
**When** upload  
**Then** purpose=`photo-geo-capture` · init→PUT→commit · rowKey · fail → toastFail · không fake id.

### US-05 GPS deny
**Given** định vị tắt/deny  
**When** mở capture geo  
**Then** `DES-MOB-GPS-DENY` · không shutter geo / không object coord.

### US-06 Host return
**Given** btnUse  
**When** dismiss sheet  
**Then** host nhận `attachmentId` + object coords (nếu confirmed) · incident MediaIds CSV guid · HasGps theo host · **GAP-PGC-BE-01** persist object cols → SA.

## 6. Real-data bind (PO cite)

| uiField | write | source |
|---------|-------|--------|
| capturePreview / gimPin | local JPEG · tapNx/Ny | device |
| rowPhotogGps | photographerLat/Lng · accuracyM | geo |
| rowDistance / rowObjectCoord | distanceM · objectLat/Lng | derived → HITL |
| mapConfirm | confirmed objectLat/Lng | hitl |
| upload / rowKey | attachmentId | files/* |
| detectOpt | Lat/Lng = object HITL | sau Dùng ảnh **always** · BE **hard-default 200** detect (skip AiService HTTP · ImageUrl stub ≤1024) |
| hostMedia | MediaIds | host Create |

§A/§B analy **PASS** · UNCLEAR: none · hash skip · **cấm** re-scan demo.

## 7. OUT / DEFER

| Item | Owner |
|------|-------|
| Persist object lat/lng BE columns | SA · GAP-PGC-BE-01 |
| Detect field reuse Lat/Lng | SA · GAP-PGC-DETECT-01 |
| Dual proto + reviewUrl | Design |
| LiDAR / ARCore depth / ARGeoTracking VN | P2 DEFER |
| Step 4b / MIG / e2e | **không** role PO · e2e → `/agent-qa*` |
| Invent photo-geo API / map API / purpose path | **cấm** |

## 8. Handoff → Design

| Field | Value |
|-------|-------|
| next | `/agent-design-mobile` · autoApprove ON |
| write | `ui/design.md` · `ui/ux-analy.md` · `ui/prototype/ios/index.html` · `ui/prototype/android/index.html` · reviewUrl |
| zones | `DES-MOB-PGC` + inventory ids · hosts `#sc-field-reflect` · `#sc-vis-capture` · `#sc-inc-form` |
| copy | «Vị trí đã chốt» · «Khoảng cách ước lượng» · banner sai số / lệch xe · **không** tên thuật toán |
| dual | iOS 390×844 · Android 412×915 |
| e2eQa | queued QA — **cấm** e2e ở Design/PO |

## Version meta

| Field | Value |
|-------|-------|
| skillId | agent-po-mobile |
| skillVersion | 2026.08.25.01 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.25.01 |
| rulesVersion | 2026.08.25.2 |
| generatedAt | `2026-09-12T17:22:30.000Z` |
| versionGate | rechecked |
| contentHash | sha256:photo-geo-capture-po-requirement-20260912 |
| ctxHash | sha256:96c48bab551b693f |
| analyHash | sha256:photo-geo-capture-control-hint-20260912 |
| demoHash | sha256:photo-geo-capture-demo-missing-host-zones |

---
<!-- Version meta: skillId=agent-po-mobile skillVersion=2026.08.25.01 schemaVersion=1 workflowVersion=2026.08.25.01 rulesVersion=2026.08.25.2 versionGate=rechecked -->
