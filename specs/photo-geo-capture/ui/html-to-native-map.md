# html-to-native-map — photo-geo-capture

**Sources:** dual `#sheet-pgc` · DA controlHint · PO · map skill `html-to-native-map.md`  
**Cấm** WebView bọc HTML · invent `photo-geo` API · ERP.* · client objectKey / resign URL

| Demo | Zone | HTML / token | iOS kit | Android kit | Notes |
|------|------|--------------|---------|-------------|-------|
| Host | PhotoRow | `.photo-slot` · `#i-camera` | PhotoRow | same | `openCapture('photo-geo')` |
| DES-MOB-PGC | Sheet | `#sheet-pgc` · grabber · title | `LinmSheet` | Material bottom sheet | pack owner |
| Title | Header | `.sheet-title` | Text 17 | Text ~20 | Chụp ảnh kèm tọa độ |
| capturePreview | Preview | `#capture-preview` | `LinmInAppCapture` + `PhotoGeoInAppPreview` | `LinmInAppCapture` + CameraX | live idle · zoom ±/pinch · `#hud-live` · freeze + gim after shutter · **cấm** UIImagePicker |
| hudLive | Overlay | `#hud-live` | live pinhole tâm · look-down gravity | same | idle only · **cấm** kẹp 37 m |
| btnZoom | CTA | `#btn-pgc-zoom-in` / `#btn-pgc-zoom-out` | `LinmInAppCapture` | same | pinch + ± · 1…min(device, 8) · **cấm** kit đọc GPS |
| btnExpand | CTA | `#btn-pgc-expand` | overlay `#pgc-fullscreen` | same | ẩn `LinmTabBar` full-height |
| btnShutter | CTA | `#btn-shutter` | ShutterButton | same | GPS ok · **cùng** id sheet+fullscreen |
| gimPin | Overlay | `#gim-pin` | ImageTapPin | same | 1 pin · cấm multi |
| rowKey | List | `.row` Key | `LinmListRow` | same | after commit |
| rowPhotogGps | List | `.row` Vị trí đã chốt | `LinmListRow` | same | photographer |
| rowLens | List | `.row` Từ ống kính | `LinmListRow` | same | `lensRangeM` · HUD live |
| rowDistance | List | `.row` Khoảng cách ước lượng | `LinmListRow` | same | `distanceM` mặt đường |
| rowObjectCoord | List | `.row` Tọa độ vật thể | `LinmListRow` | same | after HITL |
| reviewSheet | Overlay | `#sheet-pgc-review` | feature overlay | same | tap still/thumb |
| bannerError | Banner | `#banner` conf | Banner | same | >30 m |
| bannerCompass | Banner | `#banner` compass | Banner | same | GAP-PGC-COMPASS-01 |
| mapConfirm | Map | `#map-confirm` | MapPinSheet | same | reuse patrol-map/gis-map |
| btnConfirmMap | CTA | `#btn-confirm-map` | `LinmPrimaryButton` | same | chốt object |
| btnUse | CTA | `#btn-use` | `LinmPrimaryButton` | same | return host |
| btnCancel | CTA | `#btn-cancel` | `LinmSecondaryButton` | same | dismiss |
| Toast | Banner | `#toast` | `LinmToast` | same | OK / fail |
| DES-MOB-GPS-DENY | Modal | `#modal-gps` | feature overlay | Material dialog | chặn geo **khi chưa cấp** · Android FINE **hoặc** COARSE = granted |
| Shell Tab 5 | Chrome | `.tabbar` | `LinmTabBar` | NavigationBar | giữ host tab |

## CSS token (ý nghĩa — không clone px)

| CSS demo | Native |
|----------|--------|
| `--blue` / `#0C84C0` | brand primary |
| `--surface` `#F2F2F7` | host background |
| `--card` `#fff` | sheet / rows |
| `.row-sub` 13 / `.row-title` 16 | Dynamic Type / M3 |
| sheet radius 16 top | HIG sheet · M3 sheet |
| pin `#FF3B30` | object pin accent |

## JS hành vi → native

| Demo JS | Native |
|---------|--------|
| `openCapture('photo-geo')` | present sheet · require GPS |
| `?deny=1` | CoreLocation / Fused deny → modal · no shutter geo |
| shutter | still from **in-app** session + EXIF GPS + IMU sidecar · **cấm** system picker |
| gim tap/drag | tapNx/Ny · 1 pin only |
| on-device geo | 3D ray ∩ mặt đường → `distanceM` (ngang) + `lensRangeM` (từ ống kính) + object proposed |
| tap still / thumb | `#sheet-pgc-review` · ảnh + gim + rows · **không** re-upload |
| `?conf=45` | banner · **không** auto-attach object/detect |
| map drag + confirm | HITL objectLat/Lng SSOT |
| Use | files init→PUT→commit · return attachmentId+coords |
| `?fail=1` | toastFail · **cấm** fake attachmentId |
| Cancel | dismiss sheet · no id |

## BFF bind (Design note · SA chi tiết)

| Zone | Method · Path |
|------|----------------|
| Upload | `POST files/init` · `PUT files/{id}/object` · `POST files/commit` · purpose=`photo-geo-capture` |
| Preview host | `GET files/{id}/object` JWT |
| Detect optional | `POST ai-vision/detect` · Lat/Lng=object HITL · BE P1 hard-default 200 |
| Sessions optional | `GET patrol/sessions` |
| Host | `POST incident/incidents` MediaIds |
| Object geo | device + HITL — **no** photo-geo endpoint |

**Cấm** invent `api/v1/photo-geo*` · `PhotoGeoController` · ERP.*.

## Version meta

| Field | Value |
|-------|-------|
| skillId | mobile-ui-ux-analy |
| generatedAt | 2026-09-12T17:50:00.000Z |
| contentHash | sha256:photo-geo-capture-control-hint-20260912 |
| taskId | `task_a487c57b` |

---
<!-- Version meta: skillId=mobile-ui-ux-analy schemaVersion=1 -->
