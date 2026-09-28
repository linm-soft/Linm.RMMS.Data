# PO — requirement — web-rmms-photo-geo

| Field | Value |
|-------|-------|
| feature | `web-rmms-photo-geo` |
| title | Overlay chụp ảnh có tọa độ |
| packKind | `list` |
| changeScope | `edit_page` |
| lane | `web` |
| status | `confirmed` |
| skillId | `agent-po` |
| skillVersion | `2026.09.05.03` |
| schemaVersion | `1` |
| workflowVersion | `2026.09.19.02` |
| rulesVersion | `2026.09.25.2` |
| versionGate | `ok` |
| contentHash | `sha256:525b8f61bbe397050bb1049e38683d6c333c7283165859967e927c1dc285b9ba` |
| writtenAt | `2026-09-27T13:00:00.000Z` |
| autoApprove | `ON` |
| demo | **N/A** |
| formPattern | Mobile sheet overlay · phone `max-width: 430px` · Android 1-1 `#sheet-pgc` · **không** ERP Modal/Slideout Kind B |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| mfeStdRoute | `/anh-vi-tri` |
| mfeStdUrl | `http://localhost:9301/anh-vi-tri` |
| productRoute | overlay · consumers `/incident/*` · `/field/*` · `/capture` · `openCapture('photo-geo')` |
| be | `D:/AI-QLBD/Linm.RMMS.WebService` · File + AiVision · Incident/Patrol cite · **cấm ERP.*** |
| bff | `Linm.RMMS.Mobile.Bff` · `VITE_MOBILE_API_URL=http://localhost:5202/mobile-bff/api/v1` · **cấm** web-bff client |
| priorAnaly | `_data-analy/features/web-rmms-photo-geo-control-hint.md` · `web-rmms-photo-geo-real-data.md` · hash skip |
| editCite | `docs/plan/web-rmms-mobile/SUBMIT-VALIDATE.md` · Pattern B · slug `web-rmms-photo-geo` |
| codeCurrent | `src/pages/WebRmmsPhotoGeo/PhotoGeoPage.tsx` |
| taskId | `task_fdef0b97` |
| priorTask | `task_d8b79507` · keep PGC AC · new_page done |
| citeTask | `T-W7-01` · `PhotoGeoCapture` |
| peerNative | `photo-geo-capture` · Android `#sheet-pgc` · `DES-MOB-PGC` |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-photo-geo/ui/prototype/index.html` |

> Nhãn UI: `useFormOptions()` / copy key — **cấm** hardcode tiếng Việt trên form.  
> **Keep** prior requirement/AC · Design reviewUrl · SA DEC-PGC-BE-01.  
> **Cấm** re-scan demo (GAP-PO-DEMO-RESCAN-01) · invent `api/v1/photo-geo*` · fake GPS · Excel/toolbar export · typed CRUD `new_page` · e2e / start:std ở role PO.

## § Delta Current vs New (HARD — edit_page)

Cite: SUBMIT-VALIDATE Pattern B · analy hash `525b8f61…` · file `PhotoGeoPage.tsx`.

| Area | Current (shipped) | New (this task) |
|------|-------------------|-----------------|
| changeScope | `new_page` (prior pipeline done) | `edit_page` · **cấm** typed CRUD new_page |
| Route / std | Artifact cũ `/web-rmms-photo-geo` | SSOT `/anh-vi-tri` · `http://localhost:9301/anh-vi-tri` |
| `#btn-shutter` | `disabled={!canShutter}` (GPS/cam gate) | **Bỏ** disable vì thiếu GPS/cam · chỉ khóa nếu request đang chạy · bấm → `validationAttempted` + banner/modal |
| `#btn-detect` | `disabled={!canDetect}` | Chỉ `disabled` khi `detecting` · fail → banner client / toast API |
| `#btn-use` | `disabled={!canUse}` | Chỉ khóa lúc `uploading`/`pending` · bấm mới báo thiếu data |
| `#btn-confirm-map` | `disabled={uploading \|\| !objectGeo}` | Giữ khóa lúc uploading · **bỏ** khóa vì thiếu objectGeo — bấm → banner |
| GPS deny | Pre-disable shutter/use | Pattern B: **cấm** khóa nút trước · bấm mới `#modal-gps` `DES-MOB-GPS-DENY` / banner |
| Validation UX | Early disable gates | Banner `string[]` + inline sau `validationAttempted` · **cấm** một `alert.warning` thay banner · API lỗi = toast |
| Camera | Live shutter OK | **Giữ** · **cấm** gallery primary · file input (nếu có) thêm `capture="environment"` |
| Toolbar / export | N/A | **Cấm** Excel / toolbar export |
| Align cuối | — | `/align-mobile-to-mfe` · SSOT = page MFE 430px · **cấm** tab/route/icon mới · **cấm** mở android/ios proto |
| BFF | Mobile.Bff files/detect | `mobileApiBase()` only · users thiếu → forward `GET integration/users` (consumer; PGC không picker) · road-routes/search đã có |

**Keep:** zones `#sheet-pgc` · File flow · HITL · useFormOptions · DEC-PGC-BE-01 sidecar · Design reviewUrl · AC-PGC-01…14 (cập nhật enable theo Pattern B).

## 1. Goal / persona / DoD

| | |
|--|--|
| Goal | **Edit** PGC overlay: Pattern B CTA always-on · still → gim 1 → GPS người + object on-device → HITL → FileService key → return `attachmentId` + sidecar. |
| Persona | Tuần đường / tuần kiểm hiện trường (Field BDTX · Khu/VP). |
| Entry | Host `openCapture('photo-geo')` từ INC/VIS/FR · std `/anh-vi-tri` — **không** hub Field row · **không** route mới. |
| DoD P1 | Pattern B (no pre-disable) · Android 1-1 `#sheet-pgc` · live camera · deny-on-click GPS · gim 1 · HITL · files init/PUT/commit · return attachmentId · align-mobile-to-mfe · **cấm** fake GPS · **cấm** Excel. |
| Out P1 | Me*/B–E · invent PhotoGeo*Controller · web-bff · native edit · multi-pin · Kind B grid · new_page CRUD · Excel. |

## 2. Screens / zones

| id | productRoute / surface | std | Zones |
|----|------------------------|-----|-------|
| PGC | overlay `#sheet-pgc` · `DES-MOB-PGC` | `/anh-vi-tri` | sheetTitle · btnClose · `#capture-preview` · `#btn-shutter` · `#gim-pin` · `#meta-card` · `#row-key` · `#row-photog` · `#row-distance` · `#row-object` · `#map-confirm` · `#map-pin` · `#btn-confirm-map` · `#btn-detect` · `#btn-use` · `#btn-cancel` · `#validation-banner` · banners · `#modal-gps` · toast.* · optional `#sheet-pgc-review` · `#pgc-fullscreen` |
| CAP* | `/capture` peer | — | host slot `openCapture('photo-geo')` |
| INC* · VIS* · FR* | consumers | peers | nhận `attachmentId` + object coords sidecar · MediaIds · HasGps |

**reviewUrl** = `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-photo-geo/ui/prototype/index.html` (**keep**).  
**peerStdUrl** = `http://localhost:9301/anh-vi-tri`.  
**DES-GRID / LinErpListFilterBar / Excel** = **N/A · cấm**.

## 3. Grid AC (packKind=list)

> packKind=`list` · surface = sheet overlay (UNCLEAR-PACK-01 **PO chốt**). **Không** CardList desktop.

| AC id | Rule | Pass |
|-------|------|------|
| AC-GRID-01 | PGC phone `max-width: 430` · zones control-hint · **không** LinErpListFilterBar / DES-GRID-* | N/A desktop HARD |
| AC-GRID-02 | Meta rows RO: rowKey · rowPhotog · rowDistance · rowObject (sau HITL) · empty trước shutter | ListRow RO |
| AC-GRID-03 | Empty/error: banner `string[]` / toast.fail / modal GPS deny · **cấm** `window.alert` · **cấm** demo-json | empty/error |
| AC-GRID-04 | `#btn-use` **không** pre-disable vì thiếu map/GPS · chỉ khóa `uploading`/`pending` · bấm thiếu data → banner · **không** fake attachmentId | Pattern B CTA |
| AC-GRID-05 | Host return: attachmentId + sidecar · MediaIds / HasGps · std `/anh-vi-tri` | host bind |

## 4. Capture / GPS / HITL / Files AC (PGC)

| AC id | Rule | Pass |
|-------|------|------|
| AC-PGC-01 | sheetTitle copy key **«Chụp ảnh kèm tọa độ»** · nhãn `useFormOptions()` · **cấm** tên thuật toán trên chrome | copy key |
| AC-PGC-02 | `#capture-preview` live primary · fullscreen `#pgc-fullscreen` optional · **cấm** gallery/file dialog primary · file input (nếu có) `capture="environment"` | CameraStill |
| AC-PGC-03 | `#btn-shutter` **không** disable vì GPS/cam thiếu · bấm khi deny → `#modal-gps` / banner · freeze still khi cam+GPS ok | Pattern B GPS |
| AC-PGC-04 | `#gim-pin` đúng **1** điểm · kéo lại · **cấm** multi-pin P1 | MapPinTap |
| AC-PGC-05 | photographer GPS ≠ object lat · EXIF + sidecar · **cấm** fake · **cấm** photographer GPS vào detect | GPS split |
| AC-PGC-06 | distanceM / lensRangeM · sai số > 30 m → bannerConf · lưu ảnh+key · **không** auto object GPS / detect | threshold |
| AC-PGC-07 | `#map-confirm` MAP-HITL · reuse `web-rmms-gis` · `#btn-confirm-map` chỉ disable khi uploading · thiếu objectGeo → banner | MapHitl |
| AC-PGC-08 | Files: init (`purpose=photo-geo-capture`) → PUT → commit → `attachmentId` · GET JWT · **cấm** client objectKey · **cấm** resign URL persist | Live files* |
| AC-PGC-09 | `#btn-use` trả host attachmentId + sidecar · chỉ disable uploading/pending · toast.ok · cancel không fake id | Pattern B return |
| AC-PGC-10 | Optional detect: Lat/Lng = **object HITL** · ≤30 m · chỉ disable khi `detecting` | Live detect |
| AC-PGC-11 | Optional `GET patrol/sessions` toast only · **cấm** fake/seed | Live optional |
| AC-PGC-12 | Consumers: MediaIds + HasGps · object lat P1 sidecar (DEC-PGC-BE-01) · bannerCompass | host |
| AC-PGC-13 | Optional `#sheet-pgc-review` · **không** re-upload | review |
| AC-PGC-14 | Dual parity Android 1-1 · **keep** Design reviewUrl · align-mobile-to-mfe cuối | Design/Dev |
| AC-PGC-15 | Validation: `validationAttempted` + banner `string[]` + inline · API 4xx/5xx = toast · **cấm** pre-disable vì thiếu data | Pattern B |
| AC-PGC-16 | **Cấm** Excel / toolbar export · **cấm** SearchInput user/route trên PGC · **cấm** web-bff | SUBMIT-VALIDATE |

## 5. Leave / Out of scope

| Leave | Note |
|-------|------|
| Me* · feedback · cam-view · cam-patrol finder | Out P1 |
| journal / kết ca / tồn tại / tần suất (B–E) | Out pack |
| invent `api/v1/photo-geo*` / PhotoGeo*Controller | SA cite Live files + ai-vision |
| ERP.* / web-bff client | HARD cấm |
| iOS/Android native edit · open android/ios proto | Web Mobile MFE only |
| fake GPS / demo-json / re-scan demo | HARD cấm |
| Desktop Kind B · LinErpListFilterBar · Excel export | N/A · cấm |
| Persist object lat cột Incident | DEC-PGC-BE-01 sidecar P1 |
| Multi-pin / draw CRUD map · new tab/route/icon | Out |
| typed CRUD `new_page` | changeScope=edit_page |

## 6. FormMode ↔ API

| Mode / step | API | Note |
|-------------|-----|------|
| capture still | device + kit | getUserMedia primary |
| photographer GPS | `navigator.geolocation` | deny → on-click modal (Pattern B) |
| upload | `POST files/init` → `PUT …/object` → `POST files/commit` | purpose=`photo-geo-capture` |
| preview | `GET files/{id}/object` | JWT · cấm resign persist |
| object HITL | on-device + map pin | sidecar |
| detect (optional) | `POST ai-vision/detect` | object Lat/Lng · ≤30 m |
| session (optional) | `GET patrol/sessions` | toast only |
| host attach | consumer MediaIds · HasGps | DEC-PGC-BE-01 |
| BFF | `mobileApiBase()` only | users forward nếu thiếu · road-routes/search ok |

## 7. UNCLEAR / PO decisions

| id | PO decision | Next |
|----|-------------|------|
| UNCLEAR-PACK-01 | **Chốt** packKind=`list` · sheet overlay | Design keep |
| UNCLEAR-WEB-CAM | **Chốt** live getUserMedia primary · file không primary | Design/Dev |
| UNCLEAR-MAP-HOST | **Chốt** reuse `web-rmms-gis` · **cấm** invent map API | Design/SA/Dev |
| UNCLEAR-PGC-BE-01 | **Keep** DEC-PGC-BE-01 sidecar + MediaIds + HasGps | SA |
| RESOLVED-ROUTE | std = `/anh-vi-tri` · **không** `/web-rmms-photo-geo` | Dev/QA |
| RESOLVED-PATTERN-B | Pattern B CTA · SUBMIT-VALIDATE edit_page | Design/Dev/QA |
| GAP-PGC-COMPASS-01 | Banner + HITL bắt buộc | Design |
| GAP-PGC-PLANE-01 | User kéo pin | Design/Dev |

## 8. Handoff Design

| Need | |
|------|--|
| Keep | design.md + prototype + reviewUrl (Android 1-1 `#sheet-pgc`) |
| Delta | CTA always-on · deny-on-click GPS modal · validation banner `string[]` · route label `/anh-vi-tri` nếu hiện trên proto |
| Out | Excel · new route/tab/icon · Kind B · demo SSOT · re-open android/ios proto |
| Next | autoApprove ON → Design delta then SA keep |

## 9. DoR PO

| Check | |
|-------|--|
| changeScope=`edit_page` | **PASS** |
| § Delta Pattern B + route `/anh-vi-tri` | **PASS** |
| packKind=`list` confirmed (sheet overlay) | **PASS** |
| Screens / zones · keep reviewUrl | **PASS** |
| Grid AC + PGC AC (Pattern B) | **PASS** |
| Leave · no Excel · no new_page CRUD | **PASS** |
| analy reuse hash · no demo rescan | **PASS** |
| compact handoff | **PASS** → `handoff/po-compact.md` |
| autoApprove | **ON** → Design next |
