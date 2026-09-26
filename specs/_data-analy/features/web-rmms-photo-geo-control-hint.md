# Data-analy — controlHint — web-rmms-photo-geo

| Field | Value |
|-------|-------|
| feature | `web-rmms-photo-geo` |
| title | Overlay chụp ảnh có tọa độ |
| packKind | `list` |
| changeScope | `new_page` |
| mode | `feature_context` |
| status | `done` |
| skillId | `agent-data-analy` |
| skillVersion | `2026.09.05.03` |
| schemaVersion | `1` |
| workflowVersion | `2026.09.19.02` |
| rulesVersion | `2026.09.25.2` |
| versionGate | `ok` |
| contentHash | `sha256:2282c3b64ab8701681f5edbc548b5cf1a2221159d9ffb779dfe03d186010f7a4` |
| analyzedAt | `2026-09-26T06:47:05.828Z` |
| demo | **N/A** |
| realData | `specs/_data-analy/features/web-rmms-photo-geo-real-data.md` |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · File + **AiVision** · Incident/Patrol cite · **cấm ERP.*** |
| uiRepo | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| mfeStdUrl | `http://localhost:9301/web-rmms-photo-geo` |
| mfeStdRoute | `/web-rmms-photo-geo` |
| productRoute | overlay · consumers `/incident/*` · `/field/*` · `/capture` |
| taskId | `task_82870871` |
| phoneFrame | `max-width: 430px` |
| formPattern | Mobile sheet overlay · Android 1-1 `#sheet-pgc` · **không** ERP Modal/Slideout Kind B desktop |
| bff | `Linm.RMMS.Mobile.Bff` · `VITE_MOBILE_API_URL=http://localhost:5202/mobile-bff/api/v1` · **cấm** web-bff |
| priorPeer | `photo-geo-capture` · `web-rmms-vis-capture` · `web-rmms-field-reflect` · `web-rmms-incident` · `web-rmms-gis` |

> Data-analy **đề xuất** controlHint. Design **chốt** control-map + prototype reviewUrl. SA **cite** Live paths · **cấm** invent `photo-geo*` controller.  
> Nhãn UI: `useFormOptions()` / copy key — **cấm** hardcode tiếng Việt trên form.  
> **Cấm** tab Cá nhân · **cấm** iOS/Android edit · **cấm** fake GPS · **cấm** journal/kết ca/tồn tại/tần suất (B–E).

## Sources

| Source | Path | note |
|--------|------|------|
| CTX | `docs/context/features/web-rmms-photo-geo.md` | **created this run** · `2282c3b6…` |
| Peer CTX | `docs/context/features/photo-geo-capture.md` | native SSOT · mobile done |
| Screens | `docs/plan/web-rmms-mobile/SCREENS.md` | Overlay chụp ảnh tọa độ |
| Plan/task | `TASKS.md` `T-W7-01` | `PhotoGeoCapture` component |
| Prototype | `specs/photo-geo-capture/ui/prototype/android/index.html` `#sheet-pgc` · `DES-MOB-PGC` | Design 1-1 · **không** demo SSOT ship |
| DOMAIN-MAP | File cite · AiVision · Incident | **GAP** slug `web-rmms-photo-geo` |
| Consumers | field-reflect · vis-capture · incident-create | `openCapture('photo-geo')` |

## Screens (ids)

| id | route / surface | surface |
|----|-----------------|---------|
| PGC | overlay `#sheet-pgc` · std `/web-rmms-photo-geo` | Capture · gim · meta · map HITL · use/cancel |
| CAP* | `/capture` peer | host slot `openCapture('photo-geo')` |
| INC* · VIS* · FR* | consumers | nhận `attachmentId` + object coords sidecar |

**Out:** Me* · feedback · cam-view · cam-patrol finder · journal/kết ca/tồn tại/tần suất (B–E) · invent PhotoGeo*Controller · web-bff client · native edit.

## ControlHint inventory

### PGC — Capture / Gim / HITL / Return

| uiField | screen | controlHint | catalogKind / notes |
|---------|--------|-------------|---------------------|
| sheetTitle | PGC | Text | copy key «Chụp ảnh kèm tọa độ» · useFormOptions |
| btnClose | PGC | IconButton | đóng sheet · `#i-xmark` |
| capturePreview | PGC | CameraStill | `#capture-preview` · live in-app · fullscreen `#pgc-fullscreen` |
| btnShutter | PGC | Button | `#btn-shutter` · freeze still · GPS deny → disabled |
| gimPin | PGC | MapPinTap | `#gim-pin` · 1 điểm · kéo lại · **cấm** multi |
| rowKey | PGC | ListRow RO | `#row-key` · attachmentId rút gọn sau commit |
| rowPhotog | PGC | ListRow RO | `#row-photog` · «Vị trí đã chốt» ±N m |
| rowDistance | PGC | ListRow RO | `#row-distance` · «Khoảng cách ước lượng» · distanceM / lensRangeM |
| rowObject | PGC | ListRow RO | `#row-object` · «Tọa độ vật thể» sau tính / HITL |
| mapConfirm | PGC | MapHitl | `#map-confirm` · `MAP-HITL` · reuse GIS clip · `#map-pin` kéo |
| btnConfirmMap | PGC | Button | `#btn-confirm-map` · chốt pin HITL |
| btnUse | PGC | Button primary | `#btn-use` · trả key cho host · disable đến confirm |
| btnCancel | PGC | Button secondary | `#btn-cancel` |
| bannerCompass | PGC | Banner | GAP-PGC-COMPASS · đứng lệch xe · kéo pin |
| bannerConf | PGC | Banner/Toast | sai số > 30 m → lưu ảnh+key · **không** auto object GPS / detect |
| modalGpsDeny | PGC | Modal | `DES-MOB-GPS-DENY` · deny → block openCapture geo |
| gpsLock | PGC | GPS | `navigator.geolocation` · deny → block shutter/use/detect |
| toast.ok | PGC | Toast | commit / dùng ảnh ok |
| toast.fail | PGC | Toast | upload/fail · **cấm** `window.alert` |
| reviewSheet | PGC | Sheet optional | `#sheet-pgc-review` · không re-upload |

## Filter / grid (desktop HARD)

| | |
|--|--|
| LinErpListFilterBar / DES-GRID-* | **N/A** — phone overlay · **không** Kind B desktop grid primary |

## GPS

| Màn | Rule |
|-----|------|
| PGC open | Xin quyền trước shutter · deny → modal + block |
| Photographer | EXIF + sidecar lat/lng/accuracyM · **không** = object |
| Object | On-device ray ∩ mặt đường + HITL · **cấm** fake |
| Detect (optional consumer) | Lat/Lng vật thể · accuracy ≤ 30 m |

## API (cite Live — SA confirm DTO)

| Method | Path | Note |
|--------|------|------|
| POST | `files/init` | `purpose=photo-geo-capture` |
| PUT | `files/{id}/object` | JPEG bytes |
| POST | `files/commit` | `attachmentId` |
| GET | `files/{id}/object` | preview JWT |
| POST | `ai-vision/detect` | object Lat/Lng sau HITL · optional |
| GET | `patrol/sessions` | optional Route/Km |
| — | consumer attach | `MediaIds` · `HasGps` · GAP-PGC-BE-01 |

## UNCLEAR

| id | Issue | Action |
|----|-------|--------|
| UNCLEAR-DOMAIN-MAP-PGC | DOMAIN-MAP thiếu `web-rmms-photo-geo` | SA add row File+AiVision cite Incident |
| UNCLEAR-PGC-BE-01 | Không cột object lat trên incident create | SA Schema_* hoặc sidecar-only P1 |
| UNCLEAR-PACK-01 | packKind=`list` · surface = sheet overlay | PO/Design giữ list · pattern sheet |
| UNCLEAR-WEB-CAM | Browser getUserMedia vs file input fallback | Design: live primary · SA/Dev cite kit PhotoRow web |
| UNCLEAR-MAP-HOST | Map HITL host trên Web Mobile | Reuse peer `web-rmms-gis` clip · **cấm** invent map API |

## Handoff

| Role | Dùng |
|------|------|
| PO | Overlay DoD · consumers · GPS deny · useFormOptions · out Me*/B–E |
| Design | Phone 430 · `#sheet-pgc` zones · Android 1-1 · reviewUrl |
| SA | Live files/* + detect · GAP-PGC-BE-01 · DOMAIN-MAP row · **cấm** invent photo-geo path |
| TL/Dev | MFE Mobile · Mobile.Bff only · VITE_MOBILE_API_URL :5202 |
| QA | Deny GPS · HITL · commit key · no fake coords · no web-bff |

## DoR

| Check | |
|-------|--|
| controlHint inventory | **PASS** |
| real-data pair | **PASS** (same hash) |
| demo | N/A |
| changeScope | `new_page` |
