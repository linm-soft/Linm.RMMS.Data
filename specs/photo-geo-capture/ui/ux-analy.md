# UX analy — photo-geo-capture

**Sources:** `ui/prototype/ios/index.html` · `ui/prototype/android/index.html` · `ui/design.md` · PO compact · DA controlHint+real-data  
**Gate:** `/mobile-ui-ux-analy` §1–§9 · **REQUIRED** trước Dev  
**Slash:** `/mobile-ui-ux-analy` · `task_a487c57b` · `2026-09-12T17:50:00.000Z` · `changeScope=new_page` · packKind=`sheet`  
**Brand tokens:** Primary `#0C84C0` · success `#34C759` · surface `#F2F2F7` · label `#1C1C1E` · muted `#8E8E93` · danger `#FF3B30`

## 1. IA

```
Host (field-reflect | vis-capture | incident-create)
  → PhotoRow openCapture('photo-geo')
       → GPS deny → DES-MOB-GPS-DENY · stop (không sheet geo)
       → Sheet DES-MOB-PGC (#sheet-pgc)
            → live `#capture-preview` in-app (không Camera.app)
            → HUD tâm khung (distance + lat,lng) khi xoay
            → pinch / ± phóng to-thu nhỏ (`LinmInAppCapture`)
            → optional toàn màn hình in-app · **cùng** `#btn-shutter`
            → shutter → freeze still + auto gim tâm
            → gim 1 pin (tap/drag on still nếu lệch)
            → meta: Key · Vị trí đã chốt · Từ ống kính · Khoảng cách ước lượng · Tọa độ vật thể
            → banner nếu conf>30m | compass lệch
            → MapPinSheet HITL kéo pin → Xác nhận vị trí
            → FileService purpose=photo-geo-capture
            → Dùng ảnh → host attachmentId + object lat/lng · toastOk
            → tap still / tap thumb host → `#sheet-pgc-review` (ảnh + tọa độ) · Đóng
            → Hủy → dismiss · không fake attachmentId
```

`tabs: none` trên pack · Shell Tab 5 giữ tab host · **cấm** invent hub row / segment (`GAP-TAB-01`).

## 2. Màn

| DES / sc-* | Tên VN | iOS chrome | Android chrome | CTA |
|------------|--------|------------|----------------|-----|
| Host dim `#sc-field-reflect` (demo) | Ảnh hiện trường | large title host · Tab 5 field | TopAppBar · Nav 5 | PhotoRow camera |
| `DES-MOB-PGC` / `#sheet-pgc` | Chụp ảnh kèm tọa độ | bottom sheet 17 | Material sheet ~20 | Chụp / Dùng ảnh / Hủy |
| Map step `#map-confirm` | Xác nhận vị trí | MapPinSheet trong sheet | same | Xác nhận vị trí |
| `DES-MOB-GPS-DENY` / `#modal-gps` | Định vị bị tắt | in-app modal | Material dialog | Sao chép / Để sau |

## 3. Zone

### DES-MOB-PGC — capture + gim + meta

| Zone | Demo (user thấy) | Map row | SwiftUI | Compose |
|------|------------------|---------|---------|---------|
| Title | Chụp ảnh kèm tọa độ | `.sheet-title` | Text 17 | Text ~20 |
| Preview | live in-app + freeze still + chữ thập + HUD + zoom ±/pinch | `#capture-preview` | `LinmInAppCapture` + AVCapture | `LinmInAppCapture` + CameraX |
| HUD live | `n m · lat, lng` tâm khung · look-down gravity | `#hud-live` | overlay | same |
| Zoom | Phóng to / Thu nhỏ · pinch 1…8 | `#btn-pgc-zoom-in` / `#btn-pgc-zoom-out` | kit chrome · app `videoZoomFactor` / `setZoomRatio` | same |
| Expand | Toàn màn hình / Thu nhỏ | `#btn-pgc-expand` | overlay `#pgc-fullscreen` · ẩn tab footer | same |
| Shutter | Chụp + `#i-camera` | `#btn-shutter` | ShutterButton **cùng** fullscreen | same |
| Gim | 1 pin đỏ kéo | `#gim-pin` | ImageTapPin | same |
| Rows | Key · Vị trí đã chốt · Từ ống kính · Khoảng cách · Tọa độ | `.row` | `LinmListRow` | same |
| Review | Ảnh kèm tọa độ | `#sheet-pgc-review` | overlay | same |
| Banner | Sai số / Đứng lệch xe | `#banner` | Banner | same |
| Use / Cancel | Dùng ảnh · Hủy | CTA | Primary / Secondary | same |

**States:** idle · gps deny · captured · gimmed · conf_high · compass · uploading · ready_use · fail_upload

### Map HITL

| Zone | Demo | Map row | SwiftUI | Compose |
|------|------|---------|---------|---------|
| Map | road canvas · pin đề xuất | `#map-confirm` | MapKit reuse | Maps Compose reuse |
| Confirm | Xác nhận vị trí | `#btn-confirm-map` | `LinmPrimaryButton` | same |

**Cấm** skip HITL P1 · **cấm** coi EXIF GPS = object.

### DES-MOB-GPS-DENY

| Zone | Demo | Map row | SwiftUI | Compose |
|------|------|---------|---------|---------|
| Title | Định vị bị tắt | `h3` 17 | Text | same |
| Body | Cần vị trí… RMMS. | `p` 13 | Text | same |
| Primary | Sao chép hướng dẫn | `.btn` | `LinmPrimaryButton` | same |
| Secondary | Để sau | `.btn.secondary` | `LinmSecondaryButton` | same |

**Cấm** `UIAlertController` / `AlertDialog` hệ thống (`AC-D-04`).

## 4. Copy SSOT

Khớp `ui/design.md` Copy VN — dual parity. Demo numbers: ±6 m · 18 m · short Key · object lat/lng sau kéo pin.

## 5. A11y / touch

| Rule | Apply |
|------|-------|
| Tap ≥44×44 | shutter · gim · CTA · modal |
| Contrast | label on surface · banner text 13 |
| VoiceOver / TalkBack | sheet title · row labels · map confirm · deny modal |
| Reduce motion | pin drag still works · no required motion |

## 6. Error / empty

| Case | UI | Next |
|------|-----|------|
| GPS deny | modal | **chỉ** khi OS chưa cấp FINE **hoặc** COARSE · granted Approximate = ok · **cấm** toast cameraDeny khi quyền camera đã cấp |
| conf >30 m | banner | map HITL · no auto object/detect |
| conf >30 m | banner | map HITL · no auto object/detect |
| compass lệch | banner | map HITL |
| files fail | toastFail | retry / Hủy · **cấm** fake id |
| offline upload | queue host | compute local OK |

## 7. Dual parity

| Check | iOS | Android | Status |
|-------|-----|---------|--------|
| Frame | 390×844 | 412×915 | PASS |
| Flow VN | same steps | same | PASS |
| Copy | same strings | same | PASS |
| Icons `#i-*` | SF map | Material map · cùng `d=` | PASS |
| GPS deny | modal | dialog card | PASS |
| Sheet | LinmSheet | Material sheet | PASS |

## 8. Demo states (query)

| Query | Effect |
|-------|--------|
| (default) | sheet open · capture ready |
| `?deny=1` | GPS deny modal · no shutter geo |
| `?conf=45` | banner sai số · map vẫn bắt buộc |
| `?compass=1` | banner đứng lệch xe |
| `?step=map` | nhảy map HITL (sau gim demo) |
| `?fail=1` | toastFail trên Use |

## 9. Handoff

| Field | Value |
|-------|-------|
| design | **confirmed** |
| next | `/agent-solution-mobile` (SA) |
| GAP open | GAP-PGC-BE-01 · GAP-PGC-DETECT-01 **CLOSED P1** · detect BE hard-default 200 |
| e2e | queued `/agent-qa*` |

## Version meta

| Field | Value |
|-------|-------|
| skillId | mobile-ui-ux-analy |
| skillVersion | 2026.08.25.01 |
| generatedAt | 2026-09-12T17:50:00.000Z |
| contentHash | sha256:photo-geo-capture-control-hint-20260912 |
| taskId | `task_a487c57b` |

---
<!-- Version meta: skillId=mobile-ui-ux-analy schemaVersion=1 -->
