# Data-analy — controlHint — web-rmms-photo-geo

| Field | Value |
|-------|-------|
| feature | `web-rmms-photo-geo` |
| title | Overlay chụp ảnh có tọa độ |
| packKind | `list` |
| changeScope | `edit_page` |
| mode | `feature_context` |
| status | `done` |
| skillId | `agent-data-analy` |
| skillVersion | `2026.09.05.03` |
| schemaVersion | `1` |
| workflowVersion | `2026.09.19.02` |
| rulesVersion | `2026.09.25.2` |
| versionGate | `ok` |
| contentHash | `sha256:525b8f61bbe397050bb1049e38683d6c333c7283165859967e927c1dc285b9ba` |
| analyzedAt | `2026-09-27T12:55:00.000Z` |
| demo | **N/A** |
| realData | `specs/_data-analy/features/web-rmms-photo-geo-real-data.md` |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · File + **AiVision** · Incident/Patrol cite · **cấm ERP.*** |
| uiRepo | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| mfeStdUrl | `http://localhost:9301/anh-vi-tri` |
| mfeStdRoute | `/anh-vi-tri` |
| productRoute | overlay · consumers `/incident/*` · `/field/*` · `/capture` |
| taskId | `task_a4a7babf` |
| phoneFrame | `max-width: 430px` |
| formPattern | Mobile sheet overlay · Android 1-1 `#sheet-pgc` · **không** ERP Modal/Slideout Kind B desktop |
| bff | `Linm.RMMS.Mobile.Bff` · `VITE_MOBILE_API_URL=http://localhost:5202/mobile-bff/api/v1` · **cấm** web-bff |
| priorPeer | `photo-geo-capture` · `web-rmms-vis-capture` · `web-rmms-field-reflect` · `web-rmms-incident` · `web-rmms-gis` |
| editCite | `docs/plan/web-rmms-mobile/SUBMIT-VALIDATE.md` · Pattern B |

> Data-analy **đề xuất** controlHint. **Keep** PO/Design artifacts (edit_page). Design **đã chốt** reviewUrl. SA **cite** Live paths · **cấm** invent `photo-geo*` controller.  
> Nhãn UI: `useFormOptions()` / copy key — **cấm** hardcode tiếng Việt trên form.  
> **Cấm** typed CRUD `new_page` · **cấm** toolbar/export Excel · **cấm** tab Cá nhân · **cấm** iOS/Android edit · **cấm** fake GPS.

## Sources

| Source | Path | note |
|--------|------|------|
| CTX | `docs/context/features/web-rmms-photo-geo.md` | hash `525b8f61…` · § Delta + edit_page |
| Edit SSOT | `docs/plan/web-rmms-mobile/SUBMIT-VALIDATE.md` | Pattern B · slug row `web-rmms-photo-geo` |
| Peer CTX | `docs/context/features/photo-geo-capture.md` | native SSOT · mobile done |
| Screens | `docs/plan/web-rmms-mobile/SCREENS.md` | Overlay chụp ảnh tọa độ |
| Code Current | `Linm.Web.RMMS.Mobile` `src/pages/WebRmmsPhotoGeo/PhotoGeoPage.tsx` | live page · route `/anh-vi-tri` |
| Prototype | `specs/web-rmms-photo-geo/ui/prototype/index.html` | **keep** · Design reviewUrl |
| DOMAIN-MAP | File cite · AiVision · Incident | SA prior DEC-PGC-BE-01 |
| Consumers | field-reflect · vis-capture · incident-create | `openCapture('photo-geo')` |

## § Delta Current vs New (HARD — edit_page)

Cite: `docs/plan/web-rmms-mobile/SUBMIT-VALIDATE.md` · slug `web-rmms-photo-geo` · file `PhotoGeoPage.tsx`.

| Area | Current (shipped) | New (this task) |
|------|-------------------|-----------------|
| changeScope | `new_page` (prior pipeline done) | `edit_page` · **cấm** typed CRUD new_page |
| Route / std URL | paths.ts `/anh-vi-tri` · pack cũ ghi `/web-rmms-photo-geo` | SSOT std = `/anh-vi-tri` · `http://localhost:9301/anh-vi-tri` |
| `#btn-shutter` | `disabled={!canShutter}` · canShutter = gpsOk ∧ !deny ∧ live ∧ camReady | **Bỏ** disable vì thiếu GPS/cam · chỉ `disabled` khi request đang chạy (nếu có) · bấm → set `validationAttempted` + banner/modal |
| `#btn-detect` | `disabled={!canDetect}` · thiếu map/GPS/attach/online | **Bỏ** disable vì thiếu dữ liệu · chỉ khóa lúc `detecting` · fail → banner client / toast API |
| `#btn-use` | `disabled={!canUse}` · thiếu mapConfirmed/attach/GPS | **Bỏ** disable vì thiếu dữ liệu · chỉ khóa lúc `uploading`/`pending` · bấm mới báo |
| `#btn-confirm-map` | `disabled={uploading \|\| !objectGeo}` | Giữ khóa lúc `uploading` · **bỏ** khóa vì thiếu objectGeo — bấm → banner |
| GPS deny | Block shutter/use trước khi bấm | Pattern B: **cấm** khóa nút trước · bấm mới modal `DES-MOB-GPS-DENY` / banner |
| Validation UX | Early disable gates | Pattern B: banner `string[]` + inline sau `validationAttempted` · **cấm** một `alert.warning` thay banner · API lỗi = toast |
| Camera | Shutter live camera (OK) | **Giữ** camera · **cấm** đổi gallery primary · input file (nếu có) thêm `capture="environment"` |
| Toolbar / export | N/A overlay | **Cấm** Excel / toolbar export (SUBMIT-VALIDATE override) |
| Search users/routes | N/A trên PGC (read-only session toast) | Không gắn User/Route SearchInput trên PGC · consumer forms ngoài scope |
| Align cuối | — | `/align-mobile-to-mfe` · SSOT = page MFE · 430px · **cấm** tab/route mới · **cấm** icon path mới · **cấm** mở android/ios proto |
| BFF | Mobile.Bff files/detect | Mọi call `mobileApiBase()`/`VITE_MOBILE_API_URL` · **cấm** web-bff · users thiếu → forward `GET integration/users` trên Mobile.Bff (nếu consumer cần; PGC không picker user) · road-routes/search đã có |

**Keep:** zones `#sheet-pgc` · Design prototype/reviewUrl · PO requirement · SA DEC-PGC-BE-01 sidecar · FileService flow · HITL map · useFormOptions labels.

## Screens (ids)

| id | route / surface | surface |
|----|-----------------|---------|
| PGC | overlay `#sheet-pgc` · std `/anh-vi-tri` | Capture · gim · meta · map HITL · use/cancel |
| CAP* | `/capture` peer | host slot `openCapture('photo-geo')` |
| INC* · VIS* · FR* | consumers | nhận `attachmentId` + object coords sidecar |

**Out:** Me* · feedback · cam-view · cam-patrol finder · journal/kết ca/tồn tại/tần suất (B–E) · invent PhotoGeo*Controller · web-bff client · native edit · Excel export.

## ControlHint inventory

### PGC — Capture / Gim / HITL / Return

| uiField | screen | controlHint | catalogKind / notes |
|---------|--------|-------------|---------------------|
| sheetTitle | PGC | Text | copy key «Chụp ảnh kèm tọa độ» · useFormOptions |
| btnClose | PGC | IconButton | đóng sheet · `#i-xmark` |
| capturePreview | PGC | CameraStill | `#capture-preview` · live in-app · fullscreen `#pgc-fullscreen` |
| btnShutter | PGC | Button | `#btn-shutter` · freeze still · **Pattern B:** không disable vì GPS/cam thiếu |
| gimPin | PGC | MapPinTap | `#gim-pin` · 1 điểm · kéo lại · **cấm** multi |
| rowKey | PGC | ListRow RO | `#row-key` · attachmentId rút gọn sau commit |
| rowPhotog | PGC | ListRow RO | `#row-photog` · «Vị trí đã chốt» ±N m |
| rowDistance | PGC | ListRow RO | `#row-distance` · «Khoảng cách ước lượng» · distanceM / lensRangeM |
| rowObject | PGC | ListRow RO | `#row-object` · «Tọa độ vật thể» sau tính / HITL |
| mapConfirm | PGC | MapHitl | `#map-confirm` · `MAP-HITL` · reuse GIS clip · `#map-pin` kéo |
| btnConfirmMap | PGC | Button | `#btn-confirm-map` · chốt pin HITL · chỉ disable khi uploading |
| btnDetect | PGC | Button | `#btn-detect` · optional · chỉ disable khi `detecting` |
| btnUse | PGC | Button primary | `#btn-use` · trả key cho host · chỉ disable khi uploading/pending |
| btnCancel | PGC | Button secondary | `#btn-cancel` |
| validationBanner | PGC | Banner `string[]` | sau `validationAttempted` · client fails |
| bannerCompass | PGC | Banner | GAP-PGC-COMPASS · đứng lệch xe · kéo pin |
| bannerConf | PGC | Banner/Toast | sai số > 30 m → lưu ảnh+key · **không** auto object GPS / detect |
| modalGpsDeny | PGC | Modal | `DES-MOB-GPS-DENY` · hiện khi bấm CTA cần GPS mà deny |
| gpsLock | PGC | GPS | `navigator.geolocation` · **không** pre-disable CTA (Pattern B) |
| toast.ok | PGC | Toast | commit / dùng ảnh ok |
| toast.fail | PGC | Toast | upload/fail API · **cấm** `window.alert` |
| reviewSheet | PGC | Sheet optional | `#sheet-pgc-review` · không re-upload |

## Filter / grid (desktop HARD)

| | |
|--|--|
| LinErpListFilterBar / DES-GRID-* | **N/A** — phone overlay · **không** Kind B desktop grid primary |
| toolbar / export Excel | **N/A · cấm** (SUBMIT-VALIDATE override) |

## GPS

| Màn | Rule |
|-----|------|
| PGC CTA | Pattern B: thiếu/deny GPS → bấm mới báo (banner/modal) · **cấm** khóa nút trước |
| Photographer | EXIF + sidecar lat/lng/accuracyM · **không** = object |
| Object | On-device ray ∩ mặt đường + HITL · **cấm** fake |
| Detect (optional) | Lat/Lng vật thể · accuracy ≤ 30 m · chỉ khóa lúc `detecting` |

## API (cite Live — SA confirm DTO)

| Method | Path | Note |
|--------|------|------|
| POST | `files/init` | `purpose=photo-geo-capture` |
| PUT | `files/{id}/object` | JPEG bytes |
| POST | `files/commit` | `attachmentId` |
| GET | `files/{id}/object` | preview JWT |
| POST | `ai-vision/detect` | object Lat/Lng sau HITL · optional |
| GET | `patrol/sessions` | optional Route/Km |
| GET | `integration/users` | BFF forward nếu thiếu · **không** gắn picker trên PGC |
| GET | `integration/road-routes/search` | đã có · PGC read-only session · **cấm** seed |
| — | consumer attach | `MediaIds` · `HasGps` · GAP-PGC-BE-01 |

App base: `{VITE_MOBILE_API_URL}` = `http://localhost:5202/mobile-bff/api/v1` · **cấm** web-bff.

## UNCLEAR

| id | Issue | Action |
|----|-------|--------|
| UNCLEAR-PGC-BE-01 | Không cột object lat trên incident create | Keep SA sidecar-only P1 (DEC-PGC-BE-01) |
| UNCLEAR-PACK-01 | packKind=`list` · surface = sheet overlay | PO/Design giữ list · pattern sheet |
| RESOLVED-ROUTE | std path | `/anh-vi-tri` (paths.ts) — **không** `/web-rmms-photo-geo` |
| RESOLVED-PATTERN-B | disable gates | SUBMIT-VALIDATE · edit_page Delta |

## Handoff

| Role | Dùng |
|------|------|
| PO | **Keep** requirement · Delta Pattern B + route `/anh-vi-tri` · out Excel/new_page |
| Design | **Keep** design.md + prototype reviewUrl · chỉ delta CTA enable nếu cần |
| SA | **Keep** solution · BFF users forward nếu còn thiếu · **cấm** invent path |
| TL/Dev | PhotoGeoPage Pattern B · align-mobile-to-mfe · Mobile.Bff only |
| QA | CTA always-on · deny-on-click · no fake · no web-bff · e2e queued |

## DoR

| Check | |
|-------|--|
| controlHint inventory | **PASS** |
| § Delta Current vs New | **PASS** (SUBMIT-VALIDATE) |
| real-data pair | **PASS** (same hash) |
| demo | N/A |
| changeScope | `edit_page` |
