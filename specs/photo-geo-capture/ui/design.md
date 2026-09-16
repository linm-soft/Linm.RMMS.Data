# Design — photo-geo-capture

| Field | Value |
|-------|-------|
| feature | `photo-geo-capture` |
| title | [Mobile] [Tuần đường] -> Chụp ảnh kèm tọa độ |
| role | `/agent-design-mobile` |
| status | **confirmed** (autoApprove=ON) |
| packKind | **`sheet`** · overlay trên host · **không** hub row · **không** Tab mới |
| changeScope | `new_page` |
| taskId | `task_a487c57b` |
| priorPo | `po/requirement.md` **confirmed** · compact `handoff/po-compact.md` |
| priorDa | `_data-analy/photo-geo-capture-control-hint.md` + `photo-geo-capture-real-data.md` **confirmed** · hash skip · **cấm** re-scan (`GAP-DES-DEMO-RESCAN-01`) |
| contentHash | `sha256:photo-geo-capture-control-hint-20260912` |
| realDataHash | `sha256:photo-geo-capture-real-data-20260912` |
| demoHash | `sha256:photo-geo-capture-demo-missing-host-zones` |
| updatedAt | `2026-09-13T03:20:00.000Z` |

## reviewUrl (dual — REQUIRED)

| Platform | Path | reviewUrl |
|----------|------|-----------|
| iOS | `ui/prototype/ios/index.html` | `file:///Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/photo-geo-capture/ui/prototype/ios/index.html` |
| iOS GPS deny | same + `?deny=1` | `file:///Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/photo-geo-capture/ui/prototype/ios/index.html?deny=1` |
| iOS confidence | same + `?conf=45` | `file:///Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/photo-geo-capture/ui/prototype/ios/index.html?conf=45` |
| iOS compass | same + `?compass=1` | `file:///Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/photo-geo-capture/ui/prototype/ios/index.html?compass=1` |
| iOS map step | same + `?step=map` | `file:///Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/photo-geo-capture/ui/prototype/ios/index.html?step=map` |
| Android | `ui/prototype/android/index.html` | `file:///Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/photo-geo-capture/ui/prototype/android/index.html` |
| Android GPS deny | same + `?deny=1` | `file:///Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/photo-geo-capture/ui/prototype/android/index.html?deny=1` |
| Android confidence | same + `?conf=45` | `file:///Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/photo-geo-capture/ui/prototype/android/index.html?conf=45` |
| Android compass | same + `?compass=1` | `file:///Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/photo-geo-capture/ui/prototype/android/index.html?compass=1` |
| Android map step | same + `?step=map` | `file:///Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/photo-geo-capture/ui/prototype/android/index.html?step=map` |

**Cấm** `mfeStdUrl` / `yarn start:std` / port 9301 / invent demo packet rescan.

## Frame / chrome

| | iOS | Android |
|--|-----|---------|
| Frame | 390×844 | 412×915 |
| Host | dimmed `#sc-field-reflect` (demo) · PhotoRow `openCapture('photo-geo')` | same |
| Sheet | `#sheet-pgc` bottom sheet · grabber · title 17 | Material bottom sheet · title ~20 |
| Shell Tab 5 | giữ tab host (field / incident) · **không** thêm row hub | NavigationBar 5 · cùng |
| pack tabs | **none** (`GAP-TAB-01`) | same |
| Surface | **sheet** `DES-MOB-PGC` · **cấm** full-screen hub | same |

## DES table

| DES | Zone | iOS | Android | Notes |
|-----|------|-----|---------|-------|
| `DES-MOB-PGC` | Sheet owner `#sheet-pgc` | `LinmSheet` | Material bottom sheet | entry host PhotoRow |
| sheetTitle | Chụp ảnh kèm tọa độ | 17 semibold | ~20 | fixed |
| capturePreview | ImagePreviewFullBleed | **in-app live** `#capture-preview` + chữ thập + HUD live + zoom ± / pinch + `#btn-pgc-expand` | same | `LinmInAppCapture` · **cấm** UIImagePicker / Camera.app / Dialog máy ảnh hệ thống · fullscreen = overlay in-app **cùng** session · gim trên still freeze |
| btnShutter | Chụp | ShutterButton `#i-camera` `#btn-shutter` | same | **cùng** button sheet và fullscreen · require GPS ok |
| hudLive | Live aim | `#hud-live` tâm khung | same | distance + lat,lng khi `phase=idle` · pinhole (0.5,0.5) |
| btnExpand | Toàn màn hình / Thu nhỏ | `#btn-pgc-expand` | same | in-app overlay `#pgc-fullscreen` · **cấm** Camera.app |
| gimPin | ImageTapPin | 1 pin kéo lại | same | **cấm** multi-pin |
| rowKey | Key / shortId | `LinmListRow` | same | sau commit |
| rowPhotogGps | Vị trí đã chốt / ±n m | `LinmListRow` | same | người đứng · ≠ object |
| rowDistance | Khoảng cách ước lượng / n m | `LinmListRow` | same | mặt đường ngang (`distanceM`) |
| rowLens | Từ ống kính / n m | `LinmListRow` `#row-lens` | same | slant `|hit−camera|` (`lensRangeM`) · HUD live ưu tiên |
| rowObjectCoord | Tọa độ vật thể | `LinmListRow` | same | live HUD → proposed → HITL |
| reviewSheet | Ảnh kèm tọa độ | `#sheet-pgc-review` | same | tap still sau HITL / tap thumb host · **không** re-upload |
| bannerError | Sai số ước lượng cao… | Banner 13 | same | conf > 30 m |
| bannerCompass | Đứng lệch xe… | Banner 13 | same | GAP-PGC-COMPASS-01 |
| mapConfirm | MapPinSheet | reuse patrol-map/gis-map | same | kéo HITL bắt buộc |
| btnConfirmMap | Xác nhận vị trí | `LinmPrimaryButton` | same | chốt object lat/lng |
| btnUse | Dùng ảnh | `LinmPrimaryButton` | same | return attachmentId+coords |
| btnCancel | Hủy | `LinmSecondaryButton` | same | dismiss · **cấm** fake id |
| toastFail | Không tải được ảnh | `LinmToast` | same | files fail |
| toastOk | Đã gắn tọa độ vật thể | `LinmToast` | same | sau HITL |
| `DES-MOB-GPS-DENY` | `#modal-gps` | in-app modal | Material dialog | deny **chưa cấp** · **không** khi FINE/COARSE đã cấp / capture fail |

## SF ↔ Material icon

| `#i-*` | Motif (SSOT mobile-p1) | SF Symbol | Material |
|--------|------------------------|-----------|----------|
| `#i-chevron-left` | `M15 5l-7 7 7 7` | `chevron.left` | `ArrowBack` |
| `#i-camera` | body + lens r=3.5 | `camera` | `PhotoCamera` |
| `#i-mappin` | pin + circle r=2.2 | `mappin` | `Place` |
| `#i-xmark` | X path | `xmark` | `Close` |
| `#i-warning` | triangle | `exclamationmark.triangle` | `Warning` |
| `#i-home` | house | `house` | `Home` |
| `#i-wrench` | wrench | `wrench` | `Build` |
| `#i-person` | person | `person` | `Person` |

**Cấm** invent `#i-*` · **cấm** lệch `d=` dual · **cấm** nhãn ARKit/LiDAR trên chrome.

## Copy VN (SSOT — parity dual)

| Key | Copy |
|-----|------|
| Sheet title | **Chụp ảnh kèm tọa độ** |
| Shutter | **Chụp** |
| Expand | **Toàn màn hình** |
| Collapse | **Thu nhỏ** |
| HUD live | **Tâm khung** + `n m · lat, lng` |
| Row Key | **Key** / short attachmentId |
| Row Photog | **Vị trí đã chốt** / **±6 m** (demo) |
| Row Distance | **Khoảng cách ước lượng** / **18 m** (demo) |
| Row Object | **Tọa độ vật thể** / lat,lng sau HITL |
| Banner conf | **Sai số ước lượng cao · kéo pin trên bản đồ** |
| Banner compass | **Đứng lệch xe · kéo pin trên bản đồ** |
| Map CTA | **Xác nhận vị trí** |
| Primary use | **Dùng ảnh** |
| Secondary | **Hủy** |
| Toast OK | **Đã gắn tọa độ vật thể** |
| Toast fail | **Không tải được ảnh** |
| Modal title | **Định vị bị tắt** |
| Modal body | **Cần vị trí để chấm công / chấm điểm tuần. Mở Cài đặt → Quyền vị trí cho RMMS.** |
| Modal primary | **Sao chép hướng dẫn** |
| Modal secondary | **Để sau** |
| Host PhotoRow | **Ảnh hiện trường** + camera slot |

**Cấm ship:** watermark Gói · «iPhone»/«Android» label · tên thuật toán pinhole · fake lat/lng · EXIF = object · multi-pin · invent `api/v1/photo-geo*` · client objectKey / resign URL.

## Flow (zones)

```
Host PhotoRow openCapture('photo-geo')
  → GPS deny? → DES-MOB-GPS-DENY · stop
  → Sheet DES-MOB-PGC
       → live preview **trong** `#capture-preview` (AVCapture / CameraX)
       → HUD `#hud-live` tâm khung (distance + lat,lng) khi xoay máy
       → optional `#btn-pgc-expand` → `#pgc-fullscreen` **cùng** `#btn-shutter`
       → shutter (GPS ok) → freeze still + auto gim tâm · user chạm lại nếu lệch
       → gimPin (1 tap / drag on still)
       → meta rows (photog · distance · object proposed)
       → conf>30m | compass → banner · vẫn map HITL (không auto-attach object)
       → mapConfirm kéo pin → btnConfirmMap
       → files init→PUT→commit purpose=photo-geo-capture
       → btnUse → host attachmentId + object lat/lng + toastOk
       → btnCancel → dismiss · không fake id
```

### § Delta Current vs New (`edit_page` · `/edit-mobile-feature` · gap=`lookdown_gravity_hide_tab`)

| | Current | New |
|--|---------|-----|
| Distance | `max(0.04, −pitchIMU)` → luôn **37 m** khi cầm gần chân trời | `d = h / tan(θ)` · θ = **look-down gravity** `asin(−ĝ.z)` + pixel · sàn = `atan(h/120)` → 120 m khi ngang chân trời · **cấm** kẹp 0.04 |
| IMU | raw `attitude.pitch` / `orientation[1]` (trục khác nhau iOS≠Android) | Gravity Z SSOT dual · `pitchDeg` = look-down deg (+) xuống đường |
| Footer tab | `LinmTabBar` đè sheet/fullscreen trên máy full-height | **ẩn** tab 5 khi `#sheet-pgc` mở · overlay full height · **cấm** Camera.app |

### § Delta prior (`task_b6a752b4` · live HUD + fullscreen)

| | Current | New |
|--|---------|-----|
| Live coords | chữ thập tĩnh · row object/distance `—` đến khi gim | HUD `#hud-live` + row cập nhật theo IMU/GPS tâm (0.5, 0.5) khi `idle` |
| Preview size | 220pt trong sheet | `#btn-pgc-expand` → overlay `#pgc-fullscreen` in-app |
| Shutter | chỉ dưới preview 220pt | **cùng** `#btn-shutter` (icon camera · cùng intent) ở sheet **và** fullscreen |
| After shutter | freeze · user tap gim | freeze + auto gim tâm · chạm lại still nếu lệch · HITL map |
| System camera | — | **vẫn cấm** UIImagePicker / Camera.app / Intent / Dialog máy ảnh hệ thống |

### § Delta prior (`task_9c1bec7c` · in-app frame)

| | Current | New |
|--|---------|-----|
| iOS capture | `UIImagePickerController` fullScreenCover | `AVCaptureSession` live **trong** `#capture-preview` |
| Android capture | CameraX `Dialog` full-screen đen | CameraX `PreviewView` **trong** Box 220.dp |
| Gim | tap still sau khi về sheet | tap still **cùng khung** sau freeze · **cấm** tap live P1 |
| System camera | iOS ra Camera.app chrome | **cấm** |

## Kit map

| Demo | Kit iOS+Android | Notes |
|------|-----------------|-------|
| `#sheet-pgc` | `LinmSheet` | grabber · title |
| `.preview` | `LinmInAppCapture` | live + pinch/± `#btn-pgc-zoom-in` / `#btn-pgc-zoom-out` · chữ thập · `#hud-live` |
| `.shutter` | ShutterButton | `#i-camera` · same id fullscreen |
| `.expand` | FullscreenToggle | `#btn-pgc-expand` · in-app overlay |
| `.gim-pin` | ImageTapPin | 1 pin |
| `.row` | `LinmListRow` | Key · Photog · Lens · Distance · Object |
| `#sheet-pgc-review` | Review overlay | tap still/thumb · gim pin + rows |
| `.banner` | Banner | conf / compass |
| `#map-confirm` | MapPinSheet | reuse patrol-map / gis-map |
| `.btn-primary` | `LinmPrimaryButton` | Confirm / Use |
| `.btn-secondary` | `LinmSecondaryButton` | Hủy |
| `#toast` | `LinmToast` | OK / fail |
| `#modal-gps` | `DES-MOB-GPS-DENY` | **cấm** system alert |
| `LinmTabBar` | ẩn khi `#sheet-pgc` / `#pgc-fullscreen` | full-height devices · hide footer |
| Host PhotoRow | PhotoRow / `LinmImageUpload` | entry only |

### kit_missing_confirm

**none** — Sheet / ListRow / Primary / Secondary / Toast / MapPinSheet / GPS deny / PhotoRow / **`LinmInAppCapture`** (zoom chrome) **đã có**.

## controlHint ↔ DES

Khớp DA controlHint + PO · UNCLEAR=**none**. Object lat/lng ≠ photographer EXIF · HITL bắt buộc trước gắn · confidence >30 m → banner · no auto-attach object/detect · GAP-PGC-BE-01 / DETECT-01 → SA.

## BFF (Design note · SA chi tiết)

| Zone | Method · Path |
|------|----------------|
| Upload | `POST files/init` → `PUT files/{id}/object` → `POST files/commit` · purpose=`photo-geo-capture` |
| Preview | `GET files/{id}/object` JWT · **cấm** resign URL |
| Detect optional | `POST ai-vision/detect` · Lat/Lng = **object HITL** · BE P1 **hard-default 200** (skip AiService) |
| Sessions optional | `GET patrol/sessions` |
| Host media | host `POST incident/incidents` MediaIds |
| Object geo | on-device + HITL — **no** photo-geo API |

**Cấm** invent `api/v1/photo-geo*` · ERP.* · `mfeStdUrl` · client objectKey.

## Out of pack

| Item | Owner |
|------|-------|
| `field-reflect` / `vis-capture` / `incident-create` form chrome | host · entry only |
| `patrol-pin` GPS chỗ đứng | sibling · ≠ object |
| `cam-patrol` continuous finder | sibling |
| Persist object cols BE | SA · GAP-PGC-BE-01 |
| Detect Lat/Lng reuse | SA · GAP-PGC-DETECT-01 |
| P2 LiDAR/ARCore depth | DEFER |

## Gates

| Gate | Result |
|------|--------|
| Dual proto + reviewUrl | **PASS** |
| `/mobile-ui-ux-analy` | **PASS** · `ui/ux-analy.md` |
| html-to-native-map | **PASS** · `ui/html-to-native-map.md` |
| Hash skip / no demo rescan | **PASS** (`GAP-DES-DEMO-RESCAN-01`) |
| design_confirm | **approve** · autoApprove=ON |
| e2e / start:std | **SKIP** · queued QA |

## Version meta

| Field | Value |
|-------|-------|
| skillId | agent-design-mobile |
| skillVersion | 2026.08.25.01 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.25.01 |
| rulesVersion | 2026.08.25.2 |
| generatedAt | 2026-09-12T17:50:00.000Z |
| versionGate | rechecked |
| contentHash | sha256:photo-geo-capture-control-hint-20260912 |
| realDataHash | sha256:photo-geo-capture-real-data-20260912 |
| demoHash | sha256:photo-geo-capture-demo-missing-host-zones |
| taskId | `task_a487c57b` |

---
<!-- Version meta: skillId=agent-design-mobile skillVersion=2026.08.25.01 schemaVersion=1 -->
