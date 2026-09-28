# Design — web-rmms-photo-geo

| Field | Value |
|-------|-------|
| feature | `web-rmms-photo-geo` |
| title | Overlay chụp ảnh có tọa độ |
| this role | `design` · `/agent-design` |
| status | `confirmed` (autoApprove=ON) |
| design_confirm | **approve** (`task_0c82ed08`) |
| changeScope | `edit_page` |
| packKind | **`list`** (PO · surface **sheet overlay** `#sheet-pgc` · **≠** Kind B desktop) |
| lane | `web` |
| stack | `web_mfe_phone` · `Linm.Web.RMMS.Mobile` · `max-width: 430px` |
| formPattern | Mobile **sheet overlay** · Android 1-1 `#sheet-pgc` · **không** ERP Modal/Slideout Kind B |
| DES-GRID / LinErpListFilterBar | **N/A** — phone overlay |
| Report AC / DES-RPT | **N/A** |
| shared_grid_example | **N/A** (phone) |
| real_view_parity | **v1** |
| peerStdUrl | `http://localhost:9301/anh-vi-tri` |
| mfeStdUrl | `http://localhost:9301/anh-vi-tri` |
| mfeStdRoute | `/anh-vi-tri` |
| productRoute | overlay · consumers `/incident/*` · `/field/*` · `/capture` |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-photo-geo/ui/prototype/index.html` |
| demo | **N/A** · hash skip · **cấm** re-scan (**GAP-DES-DEMO-RESCAN-01**) |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · File + AiVision · Incident/Patrol cite · **cấm ERP.*** |
| bff | `Linm.RMMS.Mobile.Bff` · `:5202` · `mobile-bff/api/v1` · **cấm** web-bff client |
| controlHint | `specs/_data-analy/features/web-rmms-photo-geo-control-hint.md` |
| realData | `specs/_data-analy/features/web-rmms-photo-geo-real-data.md` · §A+§B+§Delta PASS |
| editCite | `docs/plan/web-rmms-mobile/SUBMIT-VALIDATE.md` · Pattern B |
| prior | PO `confirmed` · `handoff/po-compact.md` · contentHash `sha256:525b8f61bbe397050bb1049e38683d6c333c7283165859967e927c1dc285b9ba` |
| keep | prior zones · reviewUrl · File flow · HITL · useFormOptions · DEC-PGC-BE-01 sidecar |
| autoApprove | **ON** |
| e2eQa | ON queued `/agent-qa*` · **cấm** e2e / `yarn start:std` ở Design |
| `devSlash` | `/agent-dev` |
| updatedAt | `2026-09-27T13:10:00.000Z` |
| taskId | `task_0c82ed08` |
| skillId | `agent-design` |
| skillVersion | `2026.09.05.03` |
| schemaVersion | `1` |
| workflowVersion | `2026.09.19.02` |
| rulesVersion | `2026.09.25.2` |
| versionGate | `ok` |
| contentHash | `sha256:525b8f61bbe397050bb1049e38683d6c333c7283165859967e927c1dc285b9ba` |

**Cấm:** Dev/BE trước confirm (đã autoApprove) · ERP.* · invent `photo-geo*` controller · Kind B DES-GRID · `LinErpListFilterBar` · fake GPS · hardcode label ngoài `useFormOptions` · `window.alert` · re-scan demo · `yarn build` / e2e / start:std · Me*/feedback/cam-view · journal/kết ca/tồn tại/tần suất (B–E) · native iOS/Android edit · multi-pin · invent map API · Excel · new tab/route/icon · web-bff.

## 0. Context / Demo

| ID | Path | Notes |
|----|------|-------|
| CTX-01 | `docs/context/features/web-rmms-photo-geo.md` | PGC overlay · hash `525b8f61…` |
| CTX-02 | `docs/plan/web-rmms-mobile/SCREENS.md` | Overlay chụp ảnh tọa độ |
| CTX-03 | peer CTX | `photo-geo-capture` · consumers INC/VIS/FR |
| EDIT | `docs/plan/web-rmms-mobile/SUBMIT-VALIDATE.md` | Pattern B · slug `web-rmms-photo-geo` |
| DEM | — | **N/A** · hash skip · **cấm** crawl |
| P1 ref (visual only) | `specs/photo-geo-capture/ui/prototype/android/index.html` `#sheet-pgc` | **1-1 layout** · **không** demo SSOT ship |
| DA-01 / DA-02 | `_data-analy/features/web-rmms-photo-geo-{control-hint,real-data}.md` | inventory + §B + §Delta |
| PO | `po/requirement.md` | keep AC + Delta Pattern B · AC-PGC-01..16 |
| tokens | `docs/mobile-tokens.json` | primary `#0C84C0` · phone 430 |

## § Delta Current vs New (HARD — edit_page)

Cite: SUBMIT-VALIDATE Pattern B · PhotoGeoPage.tsx · keep prior design/prototype/reviewUrl.

| Area | Current (prior design) | New (this task) |
|------|------------------------|-----------------|
| changeScope | `new_page` | `edit_page` · **cấm** typed CRUD new_page |
| Route / std URL | `/web-rmms-photo-geo` | SSOT **`/anh-vi-tri`** · `http://localhost:9301/anh-vi-tri` |
| `#btn-shutter` | GPS deny → disabled / block | **Pattern B:** không pre-disable · bấm → modal/banner |
| `#btn-detect` | missing / gate `canDetect` | luôn bật · chỉ `disabled` khi `detecting` |
| `#btn-use` | `disabled` đến mapConfirmed | luôn bật · chỉ khóa `uploading`/`pending` · thiếu data → banner |
| `#btn-confirm-map` | khóa thiếu objectGeo | giữ khóa `uploading` · thiếu pin → banner |
| GPS deny | Block openCapture / shutter | Sheet mở được · CTA click → `DES-MOB-GPS-DENY` |
| Validation UX | Early disable | `#validation-banner` `string[]` sau `validationAttempted` · API = toast |
| Align cuối | — | `/align-mobile-to-mfe` · 430px · **cấm** tab/route/icon mới |

**Keep:** zones `#sheet-pgc` · reviewUrl · File flow · HITL · useFormOptions · sidecar MediaIds+HasGps.

## 1. Pattern & ownership

| | |
|--|--|
| Frame | Phone **430px** · tokens primary `#0C84C0` · label **13** · field **≥16** |
| This feature owns | **PGC** sheet `#sheet-pgc` · `DES-MOB-PGC` · std `/anh-vi-tri` |
| Peer owns | CAP host slot · INC/VIS/FR `openCapture('photo-geo')` · GIS map clip |
| Shell owns | Host dim under sheet · NavigationBar 5 (host) |
| DES-LEAVE | Hủy / close → local dismiss · **cấm** `window.confirm` |
| Out | Me* · B–E journal · invent PhotoGeo*Controller · web-bff · Excel |

### Ownership (Design resolve)

| Surface | Owner |
|---------|-------|
| PGC `#sheet-pgc` · `/anh-vi-tri` | **this feature** |
| Entry `openCapture('photo-geo')` | **peer consumers** · INC/VIS/FR/CAP |
| Map HITL clip | **peer GIS** reuse · **cấm** invent tiles API |
| Camera still | **getUserMedia / kit primary** · file input **không** primary (WEB-CAM) · `capture="environment"` nếu có |
| Title copy | **«Chụp ảnh kèm tọa độ»** · useFormOptions |

## 2. Screens / zones

| Zone | Route | Surface | Wire |
|------|-------|---------|------|
| **PGC** | `/anh-vi-tri` · overlay | Sheet `#sheet-pgc` | still · gim · meta · map HITL · detect · use/cancel · validation banner |
| peer CAP | `/capture` | host slot | `openCapture('photo-geo')` |
| peer INC* · VIS* · FR* | consumers | receive | `attachmentId` + object coords sidecar |

### IA

```
(auth) → consumer (INC/VIS/FR/CAP)
  openCapture('photo-geo') → PGC sheet (mở cả khi GPS deny)
  live still → shutter → gim 1 → files init/PUT/commit
  → map HITL confirm → (optional detect) → Dùng ảnh → return attachmentId + sidecar → close
  CTA thiếu GPS/cam/map → validationAttempted + banner/modal · không pre-disable
  GPS deny on CTA → DES-MOB-GPS-DENY
  Hủy / X → dismiss · no commit
```

## 3. Field inventory (Control = controlHint)

### PGC

| uiField | controlHint | Required | Bind / notes |
|---------|-------------|----------|--------------|
| sheetTitle | Text | * | copy key «Chụp ảnh kèm tọa độ» · useFormOptions |
| btnClose | IconButton | * | `#i-xmark` · close sheet |
| capturePreview | CameraStill | * | `#capture-preview` · getUserMedia primary · optional `#pgc-fullscreen` |
| btnShutter | Button | * | `#btn-shutter` · freeze still · **Pattern B:** không disable vì GPS/cam thiếu |
| gimPin | MapPinTap | * | `#gim-pin` · **1 điểm** · kéo lại · **cấm** multi |
| rowKey | ListRow RO | — | `#row-key` · attachmentId rút gọn sau commit |
| rowPhotog | ListRow RO | * | `#row-photog` · photographer GPS ±N m · **≠** object |
| rowDistance | ListRow RO | — | `#row-distance` · distanceM / lensRangeM |
| rowObject | ListRow RO | — | `#row-object` · sau tính / HITL |
| mapConfirm | MapHitl | * | `#map-confirm` · `MAP-HITL` · GIS clip · `#map-pin` |
| btnConfirmMap | Button | * | `#btn-confirm-map` · chỉ disable khi `uploading` |
| btnDetect | Button optional | — | `#btn-detect` · chỉ disable khi `detecting` |
| btnUse | Button primary | * | `#btn-use` · chỉ disable khi `uploading`/`pending` |
| btnCancel | Button secondary | * | `#btn-cancel` |
| validationBanner | Banner `string[]` | * | `#validation-banner` · sau `validationAttempted` |
| bannerCompass | Banner | — | GAP-PGC-COMPASS · đứng lệch xe · kéo pin |
| bannerConf | Banner/Toast | — | sai số > 30 m → lưu ảnh+key · **không** auto object GPS / detect |
| modalGpsDeny | Modal | * | `DES-MOB-GPS-DENY` · hiện khi bấm CTA cần GPS mà deny |
| gpsLock | GPS | * | **không** pre-disable CTA (Pattern B) |
| toast.ok | Toast | — | commit / dùng ảnh ok |
| toast.fail | Toast | — | upload/fail · **cấm** `window.alert` |
| reviewSheet | Sheet optional | — | `#sheet-pgc-review` · không re-upload |

**Labels:** `useFormOptions()` — prototype nhãn VN review; Dev wire keys.  
**GPS HARD Pattern B:** deny → on-click modal · accuracy >30 → no auto object / detect · **cấm** fake · **cấm** pre-disable CTA.  
**Live API only** — **cấm** invent `photo-geo*` path · **cấm** ERP.* · **cấm** client `objectKey`.

## 4. Prototype (REQUIRED)

| | |
|--|--|
| Artifact | `ui/prototype/index.html` |
| Zones | PGC `#sheet-pgc` · `DES-MOB-PGC` · `#capture-preview` · `#gim-pin` · `#map-confirm` · `#btn-shutter` · `#btn-detect` · `#btn-use` · `#validation-banner` · GPS modal |
| Form | Mobile sheet · Android 1-1 peer photo-geo-capture |
| Grid/filter desktop | **N/A** |
| SSOT | control-hint · real-data §B+§Delta · peer Android · mobile-tokens |
| **reviewUrl** | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-photo-geo/ui/prototype/index.html` |
| **peerStdUrl** | `http://localhost:9301/anh-vi-tri` |
| **real_view_parity** | `v1` |

### Wire

```
Host FR dim → sheet-pgc open (kể cả deny)
PGC: preview · shutter · gim 1 · meta · map HITL · detect · use/cancel · validation banner
Pattern B: CTA always-on · thiếu data → banner · GPS deny → modal on click
Acc>30 / compass: banner · kéo pin · no auto object
Board: Default | ?deny=1 | ?conf=45 | ?compass=1 | ?step=map | ?fail=1
```

### Query modes (prototype)

| Query | Effect |
|-------|--------|
| (default) | open PGC · GPS ok · flow shutter→gim→map→use |
| `?deny=1` | sheet mở · CTA → GPS modal (không pre-disable) |
| `?conf=45` | banner sai số cao · kéo pin |
| `?compass=1` | banner compass · kéo pin |
| `?step=map` | jump shutter+gim+map |
| `?fail=1` | use → toast fail · **cấm** `window.alert` |

## 5. API map (cite real-data §B)

| Action | API |
|--------|-----|
| Init | `POST mobile-bff/api/v1/files/init` · `purpose=photo-geo-capture` |
| Upload | `PUT …/files/{id}/object` · JPEG |
| Commit | `POST …/files/commit` · `attachmentId` |
| Preview | `GET …/files/{id}/object` · JWT · **cấm** resign URL persist |
| Detect optional | `POST …/ai-vision/detect` · Lat/Lng=**object HITL** · AccuracyM |
| Sessions optional | `GET …/patrol/sessions` · toast only · **cấm** fake |
| Users forward | `GET …/integration/users` · BFF nếu thiếu · **không** picker trên PGC |
| Road routes | `GET …/integration/road-routes/search` · đã có · PGC read-only |
| Host attach | consumer `MediaIds` · `HasGps=true` · sidecar object lat · GAP-PGC-BE-01 → SA keep |

**BFF:** Mobile.Bff `:5202` · **cấm** Web BFF · **cấm ERP.***  
Detect Lat/Lng = **object** sau HITL — **cấm** photographer GPS.

## 6. DES checklist

| ID | Result |
|----|--------|
| DES-A zones PGC | **PASS** |
| DES-B control = controlHint | **PASS** |
| DES-C prototype + reviewUrl | **PASS** · Delta CTA Pattern B |
| DES-D Leave / Cancel | **PASS** · local dismiss |
| DES-GRID / DES-RPT | **N/A** phone overlay |
| DES-MOB-PGC | **PASS** · `#sheet-pgc` |
| DES-MOB-GPS-DENY | **PASS** · modal on CTA click (Pattern B) |
| DES-PATTERN-B | **PASS** · always-on CTA · validation banner |
| PACK-01 | **PASS** · packKind=list · sheet overlay |
| WEB-CAM | **PASS** Design · getUserMedia primary |
| MAP-HOST | **PASS** Design · reuse GIS clip |
| COMPASS / PLANE | **PASS** Design · banner + pin drag |
| real_view_parity | **v1** |
| Route SSOT | **PASS** · `/anh-vi-tri` |
| GPS / HasGps | **PASS** · PGC-BE-01 → SA keep |

## 7. UNCLEAR (carry)

| id | Action |
|----|--------|
| UNCLEAR-PACK-01 | **closed** · list · sheet `#sheet-pgc` |
| UNCLEAR-WEB-CAM | **closed Design** · getUserMedia/kit primary |
| UNCLEAR-MAP-HOST | **closed Design** · reuse `web-rmms-gis` clip |
| GAP-PGC-COMPASS | **closed Design** · banner + HITL pin |
| RESOLVED-ROUTE | **closed** · `/anh-vi-tri` |
| RESOLVED-PATTERN-B | **closed Design** · Delta CTA · Dev/QA wire |
| UNCLEAR-DOMAIN-MAP-PGC | SA keep DOMAIN-MAP row · File+AiVision |
| UNCLEAR-PGC-BE-01 | SA keep sidecar P1 · MediaIds + HasGps · no invent Lat column |

## 8. Handoff

| Role | Need |
|------|------|
| SA | **Keep** solution DEC-PGC-BE-01 · BFF users forward nếu thiếu · **cấm** invent path · **cấm** ERP.* |
| TL | Tasks Pattern B CTA · PhotoGeoPage · align-mobile-to-mfe |
| Dev | `/agent-dev` · Pattern B disable rules · `/anh-vi-tri` · Mobile.Bff only · useFormOptions |
| QA | Always-on CTA · deny-on-click · validation banner · no fake · no web-bff · e2e queued |

## Version meta

`skillVersion=2026.09.05.03` · `schemaVersion=1` · `contentHash=sha256:525b8f61bbe397050bb1049e38683d6c333c7283165859967e927c1dc285b9ba` · `rulesVersion=2026.09.25.2` · `updatedAt=2026-09-27T13:10:00.000Z` · `design_confirm=approve` · `autoApprove=ON` · `changeScope=edit_page`
