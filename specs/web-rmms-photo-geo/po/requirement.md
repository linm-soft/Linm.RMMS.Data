# PO — requirement — web-rmms-photo-geo

| Field | Value |
|-------|-------|
| feature | `web-rmms-photo-geo` |
| title | Overlay chụp ảnh có tọa độ |
| packKind | `list` |
| changeScope | `new_page` |
| lane | `web` |
| status | `confirmed` |
| skillId | `agent-po` |
| skillVersion | `2026.09.05.03` |
| schemaVersion | `1` |
| workflowVersion | `2026.09.19.02` |
| rulesVersion | `2026.09.25.2` |
| versionGate | `ok` |
| contentHash | `sha256:2282c3b64ab8701681f5edbc548b5cf1a2221159d9ffb779dfe03d186010f7a4` |
| writtenAt | `2026-09-26T00:00:30.000Z` |
| autoApprove | `ON` |
| demo | **N/A** |
| formPattern | Mobile sheet overlay · phone `max-width: 430px` · Android 1-1 `#sheet-pgc` · **không** ERP Modal/Slideout Kind B |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| mfeStdRoute | `/web-rmms-photo-geo` |
| mfeStdUrl | `http://localhost:9301/web-rmms-photo-geo` |
| productRoute | overlay · consumers `/incident/*` · `/field/*` · `/capture` · `openCapture('photo-geo')` |
| be | `D:/AI-QLBD/Linm.RMMS.WebService` · File + AiVision · Incident/Patrol cite · **cấm ERP.*** |
| bff | `Linm.RMMS.Mobile.Bff` · `VITE_MOBILE_API_URL=http://localhost:5202/mobile-bff/api/v1` · **cấm** web-bff client · **cấm** Route `mobile-bff` trên web-bff |
| priorAnaly | `_data-analy/features/web-rmms-photo-geo-control-hint.md` · `web-rmms-photo-geo-real-data.md` · hash skip |
| taskId | `task_d8b79507` |
| citeTask | `T-W7-01` · `PhotoGeoCapture` |
| peerNative | `photo-geo-capture` · Android `#sheet-pgc` · `DES-MOB-PGC` |

> Nhãn UI: `useFormOptions()` / copy key — **cấm** hardcode tiếng Việt trên form.  
> **Cấm** re-scan demo (GAP-PO-DEMO-RESCAN-01) · invent `api/v1/photo-geo*` · client `objectKey` / resign URL · fake GPS · EXIF photographer = object lat · Me* / B–E · native iOS/Android edit · e2e / start:std ở role PO.

## 1. Goal / persona / DoD

| | |
|--|--|
| Goal | Web Mobile overlay **Chụp ảnh kèm tọa độ**: still → gim 1 điểm → GPS người + on-device object lat/lng → HITL map → FileService key → trả host `attachmentId` + sidecar object coords. |
| Persona | Tuần đường / tuần kiểm hiện trường (Field BDTX · Khu/VP). |
| Entry | Host PhotoRow `openCapture('photo-geo')` từ `incident-create` · `vis-capture` · `field-reflect` · std `/web-rmms-photo-geo` — **không** hub Field row riêng. |
| DoD P1 | Android 1-1 `#sheet-pgc` · live camera primary · GPS deny block · gim 1 pin · HITL map · files init/PUT/commit · useFormOptions · return attachmentId · **cấm** fake lat/lng · **cấm** persist resign URL. |
| Out P1 | Me*/feedback/cam-view · journal/kết ca/tồn tại/tần suất (B–E) · invent PhotoGeo*Controller · web-bff · native edit · multi-pin · desktop Kind B grid. |

## 2. Screens / zones

| id | productRoute / surface | std | Zones |
|----|------------------------|-----|-------|
| PGC | overlay `#sheet-pgc` · `DES-MOB-PGC` | `/web-rmms-photo-geo` | sheetTitle · btnClose · `#capture-preview` · `#btn-shutter` · `#gim-pin` · `#meta-card` · `#row-key` · `#row-photog` · `#row-distance` · `#row-object` · `#map-confirm` · `#map-pin` · `#btn-confirm-map` · `#btn-use` · `#btn-cancel` · banners · `#modal-gps` · toast.* · optional `#sheet-pgc-review` · `#pgc-fullscreen` |
| CAP* | `/capture` peer | — | host slot `openCapture('photo-geo')` |
| INC* · VIS* · FR* | consumers | peers | nhận `attachmentId` + object coords sidecar · MediaIds · HasGps |

\* Peer deep-link / callback OK · **không** invent CRUD controller slug này.

**reviewUrl** = Design chốt prototype (Android 1-1 `#sheet-pgc`).  
**peerStdUrl** = `http://localhost:9301/web-rmms-photo-geo`.  
**DES-GRID / LinErpListFilterBar** = **N/A** — phone sheet overlay (không Kind B desktop primary).  
**Prototype zone** = `#sheet-pgc` · `DES-MOB-PGC` · `#capture-preview` · `#gim-pin` · `#map-confirm` · `#btn-shutter` · `#btn-use` (Design only · **không** demo SSOT ship).

## 3. Grid AC (packKind=list)

> packKind=`list` giữ queue STATUS · surface = **sheet overlay** (UNCLEAR-PACK-01 **PO chốt**). Grid AC map flow PGC — **không** CardList desktop.

| AC id | Rule | Pass |
|-------|------|------|
| AC-GRID-01 | PGC phone `max-width: 430` · zones control-hint · **không** LinErpListFilterBar / DES-GRID-* Kind B | N/A desktop HARD |
| AC-GRID-02 | Meta rows RO sau capture: rowKey · rowPhotog · rowDistance · rowObject (sau HITL) · empty trước shutter | ListRow RO |
| AC-GRID-03 | Empty/error: toast.fail / modal GPS deny · **cấm** `window.alert` · **cấm** demo-json / itemsOrDemo | empty/error |
| AC-GRID-04 | CTA `#btn-use` enable sau map confirm · `#btn-cancel` dismiss · **không** fake attachmentId khi upload fail | CTA gate |
| AC-GRID-05 | Host return: attachmentId + sidecar · MediaIds / HasGps trên consumer · std route overlay OK | host bind |

## 4. Capture / GPS / HITL / Files AC (PGC)

| AC id | Rule | Pass |
|-------|------|------|
| AC-PGC-01 | sheetTitle copy key **«Chụp ảnh kèm tọa độ»** · nhãn row/banner `useFormOptions()` · **cấm** tên thuật toán trên chrome | copy key |
| AC-PGC-02 | `#capture-preview` live in-app primary (getUserMedia / kit) · fullscreen `#pgc-fullscreen` optional · **ẩn** tab footer khi sheet full · **cấm** `<input type=file>` / dialog máy ảnh hệ thống làm UX chính (UNCLEAR-WEB-CAM → Design/Dev) | CameraStill |
| AC-PGC-03 | `#btn-shutter` freeze still · GPS deny → disabled + `#modal-gps` `DES-MOB-GPS-DENY` · block openCapture geo / use / detect | GPS HARD |
| AC-PGC-04 | `#gim-pin` đúng **1** điểm · kéo lại · **cấm** multi-pin P1 | MapPinTap |
| AC-PGC-05 | photographer GPS (rowPhotog) ≠ object lat · EXIF + sidecar accuracyM · **cấm** fake · **cấm** gửi photographer GPS vào detect | GPS split |
| AC-PGC-06 | distanceM / lensRangeM on-device · sai số > 30 m → bannerConf · vẫn lưu ảnh+key · **không** auto object GPS / detect | threshold |
| AC-PGC-07 | `#map-confirm` MAP-HITL · reuse `web-rmms-gis` clip · `#map-pin` kéo · `#btn-confirm-map` chốt · **cấm** invent map API (UNCLEAR-MAP-HOST) | MapHitl |
| AC-PGC-08 | Files: `POST files/init` (`purpose=photo-geo-capture`) → `PUT …/object` → `POST files/commit` → `attachmentId` · GET object JWT preview · **cấm** client objectKey · **cấm** resign URL persist | Live files* |
| AC-PGC-09 | `#btn-use` trả host attachmentId + object coords sidecar · enable sau confirm · toast.ok · cancel không fake id | return |
| AC-PGC-10 | Optional `POST ai-vision/detect`: Lat/Lng = **object HITL** · AccuracyM ≤ 30 · **cấm** photographer GPS | Live detect |
| AC-PGC-11 | Optional `GET patrol/sessions` Route/Km toast only · empty → GPS-only · **cấm** fake session | Live optional |
| AC-PGC-12 | Consumers: MediaIds + HasGps=true · object lat P1 sidecar (GAP-PGC-BE-01 → SA) · bannerCompass GAP-PGC-COMPASS | host |
| AC-PGC-13 | Optional `#sheet-pgc-review` xem lại · **không** re-upload | review |
| AC-PGC-14 | Dual parity Android 1-1 `#sheet-pgc` · Design reviewUrl | Design |

## 5. Leave / Out of scope

| Leave | Note |
|-------|------|
| Me* · feedback · cam-view · cam-patrol finder | Out P1 |
| journal / kết ca / tồn tại / tần suất (B–E) | Out pack |
| invent `api/v1/photo-geo*` / PhotoGeo*Controller | SA cite Live files + ai-vision |
| ERP.* / web-bff client / mobile-bff Route trên web-bff | HARD cấm |
| iOS/Android native edit | Web Mobile MFE only · peer native done |
| fake GPS / demo-json / itemsOrDemo / re-scan demo | HARD cấm |
| Desktop Kind B grid primary · LinErpListFilterBar | N/A phone overlay |
| Persist object lat cột Incident | GAP-PGC-BE-01 → SA · P1 sidecar |
| Multi-pin / draw CRUD map | Out |

## 6. FormMode ↔ API

| Mode / step | API | Note |
|-------------|-----|------|
| capture still | device + kit | getUserMedia primary |
| photographer GPS | `navigator.geolocation` | deny → block |
| upload | `POST files/init` → `PUT files/{id}/object` → `POST files/commit` | purpose=`photo-geo-capture` |
| preview | `GET files/{id}/object` | JWT · cấm resign persist |
| object HITL | on-device + map pin | sidecar |
| detect (optional) | `POST ai-vision/detect` | object Lat/Lng · ≤30 m |
| session (optional) | `GET patrol/sessions` | toast only |
| host attach | consumer MediaIds · HasGps | GAP-PGC-BE-01 |

## 7. UNCLEAR / PO decisions

| id | PO decision | Next |
|----|-------------|------|
| UNCLEAR-PACK-01 | **Chốt** packKind=`list` · surface = sheet overlay phone | Design giữ sheet |
| UNCLEAR-WEB-CAM | **Chốt** live getUserMedia / kit primary · file input **không** primary UX | Design/Dev |
| UNCLEAR-MAP-HOST | **Chốt** reuse peer `web-rmms-gis` clip · **cấm** invent map API | Design/SA/Dev |
| UNCLEAR-DOMAIN-MAP-PGC | Forward | SA add DOMAIN-MAP row File+AiVision cite Incident |
| UNCLEAR-PGC-BE-01 | P1 sidecar + MediaIds + HasGps · **không** block DoD overlay | SA Schema_* nếu cần |
| GAP-PGC-COMPASS-01 | Banner + HITL bắt buộc | Design |
| GAP-PGC-PLANE-01 | User kéo pin | Design/Dev |

## 8. Handoff Design

| Need | |
|------|--|
| Prototype | Android 1-1 `#sheet-pgc` · zones §2 · reviewUrl |
| Control-map | Chốt CameraStill / MapPinTap / MapHitl / GPS deny modal |
| Phone | `max-width: 430` · ẩn tab footer khi capture full |
| Copy | useFormOptions keys · không thuật toán trên chrome |
| Out | Me* · B–E · Kind B desktop · demo SSOT |

## 9. DoR PO

| Check | |
|-------|--|
| changeScope=`new_page` | **PASS** |
| packKind=`list` confirmed (sheet overlay) | **PASS** |
| Screens / zones | **PASS** |
| Grid AC + PGC AC | **PASS** |
| Leave | **PASS** |
| analy reuse hash · no demo rescan | **PASS** |
| compact handoff | **PASS** → `handoff/po-compact.md` |
| autoApprove | **ON** → Design next |
