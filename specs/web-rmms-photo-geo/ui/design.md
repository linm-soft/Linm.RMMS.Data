# Design — web-rmms-photo-geo

| Field | Value |
|-------|-------|
| feature | `web-rmms-photo-geo` |
| title | Overlay chụp ảnh có tọa độ |
| this role | `design` · `/agent-design` |
| status | `confirmed` (autoApprove=ON) |
| design_confirm | **approve** (`task_dc3f39e0`) |
| changeScope | `new_page` |
| packKind | **`list`** (PO · surface **sheet overlay** `#sheet-pgc` · **≠** Kind B desktop) |
| lane | `web` |
| stack | `web_mfe_phone` · `Linm.Web.RMMS.Mobile` · `max-width: 430px` |
| formPattern | Mobile **sheet overlay** · Android 1-1 `#sheet-pgc` · **không** ERP Modal/Slideout Kind B |
| DES-GRID / LinErpListFilterBar | **N/A** — phone overlay |
| Report AC / DES-RPT | **N/A** |
| shared_grid_example | **N/A** (phone) |
| real_view_parity | **v1** |
| peerStdUrl | `http://localhost:9301/web-rmms-photo-geo` |
| mfeStdUrl | `http://localhost:9301/web-rmms-photo-geo` |
| mfeStdRoute | `/web-rmms-photo-geo` |
| productRoute | overlay · consumers `/incident/*` · `/field/*` · `/capture` |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-photo-geo/ui/prototype/index.html` |
| demo | **N/A** · hash skip · **cấm** re-scan (**GAP-DES-DEMO-RESCAN-01**) |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · File + AiVision · Incident/Patrol cite · **cấm ERP.*** |
| bff | `Linm.RMMS.Mobile.Bff` · `:5202` · `mobile-bff/api/v1` · **cấm** web-bff client |
| controlHint | `specs/_data-analy/features/web-rmms-photo-geo-control-hint.md` |
| realData | `specs/_data-analy/features/web-rmms-photo-geo-real-data.md` · §A+§B PASS |
| prior | PO `confirmed` · `handoff/po-compact.md` · contentHash `sha256:2282c3b64ab8701681f5edbc548b5cf1a2221159d9ffb779dfe03d186010f7a4` |
| autoApprove | **ON** |
| e2eQa | ON queued `/agent-qa*` · **cấm** e2e / `yarn start:std` ở Design |
| `devSlash` | `/agent-dev` |
| updatedAt | `2026-09-26T00:05:00.000Z` |
| taskId | `task_dc3f39e0` |
| skillId | `agent-design` |
| skillVersion | `2026.09.05.03` |
| schemaVersion | `1` |
| workflowVersion | `2026.09.19.02` |
| rulesVersion | `2026.09.25.2` |
| versionGate | `ok` |
| contentHash | `sha256:2282c3b64ab8701681f5edbc548b5cf1a2221159d9ffb779dfe03d186010f7a4` |

**Cấm:** Dev/BE trước confirm (đã autoApprove) · ERP.* · invent `photo-geo*` controller · Kind B DES-GRID · `LinErpListFilterBar` · fake GPS · hardcode label ngoài `useFormOptions` · `window.alert` · re-scan demo · `yarn build` / e2e / start:std · Me*/feedback/cam-view · journal/kết ca/tồn tại/tần suất (B–E) · native iOS/Android edit · multi-pin · invent map API.

## 0. Context / Demo

| ID | Path | Notes |
|----|------|-------|
| CTX-01 | `docs/context/features/web-rmms-photo-geo.md` | PGC overlay |
| CTX-02 | `docs/plan/web-rmms-mobile/SCREENS.md` | Overlay chụp ảnh tọa độ |
| CTX-03 | peer CTX | `photo-geo-capture` · consumers INC/VIS/FR |
| DEM | — | **N/A** · hash skip · **cấm** crawl |
| P1 ref (visual only) | `specs/photo-geo-capture/ui/prototype/android/index.html` `#sheet-pgc` | **1-1 layout** · **không** demo SSOT ship |
| DA-01 / DA-02 | `_data-analy/features/web-rmms-photo-geo-{control-hint,real-data}.md` | inventory + §B |
| PO | `po/requirement.md` | PACK-01 sheet · AC-PGC-01..14 · AC-GRID N/A |
| tokens | `docs/mobile-tokens.json` | primary `#0C84C0` · phone 430 |

## 1. Pattern & ownership

| | |
|--|--|
| Frame | Phone **430px** · tokens primary `#0C84C0` · label **13** · field **≥16** |
| This feature owns | **PGC** sheet `#sheet-pgc` · `DES-MOB-PGC` · std `/web-rmms-photo-geo` |
| Peer owns | CAP host slot · INC/VIS/FR `openCapture('photo-geo')` · GIS map clip |
| Shell owns | Host dim under sheet · NavigationBar 5 (host) |
| DES-LEAVE | Hủy / close → local dismiss · **cấm** `window.confirm` |
| Out | Me* · B–E journal · invent PhotoGeo*Controller · web-bff |

### Ownership (Design resolve)

| Surface | Owner |
|---------|-------|
| PGC `#sheet-pgc` · `/web-rmms-photo-geo` | **this feature** |
| Entry `openCapture('photo-geo')` | **peer consumers** · INC/VIS/FR/CAP |
| Map HITL clip | **peer GIS** reuse · **cấm** invent tiles API |
| Camera still | **getUserMedia / kit primary** · file input **không** primary (WEB-CAM) |
| Title copy | **«Chụp ảnh kèm tọa độ»** · useFormOptions |

## 2. Screens / zones

| Zone | Route | Surface | Wire |
|------|-------|---------|------|
| **PGC** | `/web-rmms-photo-geo` · overlay | Sheet `#sheet-pgc` | still · gim · meta · map HITL · use/cancel |
| peer CAP | `/capture` | host slot | `openCapture('photo-geo')` |
| peer INC* · VIS* · FR* | consumers | receive | `attachmentId` + object coords sidecar |

### IA

```
(auth) → consumer (INC/VIS/FR/CAP)
  openCapture('photo-geo') → PGC sheet
  GPS ok → live still → shutter → gim 1 → files init/PUT/commit
  → map HITL confirm → Dùng ảnh → return attachmentId + sidecar → close
  GPS deny → DES-MOB-GPS-DENY · block shutter/use/detect
  Hủy / X → dismiss · no commit
```

## 3. Field inventory (Control = controlHint)

### PGC

| uiField | controlHint | Required | Bind / notes |
|---------|-------------|----------|--------------|
| sheetTitle | Text | * | copy key «Chụp ảnh kèm tọa độ» · useFormOptions |
| btnClose | IconButton | * | `#i-xmark` · close sheet |
| capturePreview | CameraStill | * | `#capture-preview` · getUserMedia primary · optional `#pgc-fullscreen` |
| btnShutter | Button | * | `#btn-shutter` · freeze still · GPS deny → disabled |
| gimPin | MapPinTap | * | `#gim-pin` · **1 điểm** · kéo lại · **cấm** multi |
| rowKey | ListRow RO | — | `#row-key` · attachmentId rút gọn sau commit |
| rowPhotog | ListRow RO | * | `#row-photog` · photographer GPS ±N m · **≠** object |
| rowDistance | ListRow RO | — | `#row-distance` · distanceM / lensRangeM |
| rowObject | ListRow RO | — | `#row-object` · sau tính / HITL |
| mapConfirm | MapHitl | * | `#map-confirm` · `MAP-HITL` · GIS clip · `#map-pin` |
| btnConfirmMap | Button | * | `#btn-confirm-map` · chốt pin HITL |
| btnUse | Button primary | * | `#btn-use` · return key · disable đến confirm |
| btnCancel | Button secondary | * | `#btn-cancel` |
| bannerCompass | Banner | — | GAP-PGC-COMPASS · đứng lệch xe · kéo pin |
| bannerConf | Banner/Toast | — | sai số > 30 m → lưu ảnh+key · **không** auto object GPS / detect |
| modalGpsDeny | Modal | * | `DES-MOB-GPS-DENY` · deny → block openCapture geo |
| gpsLock | GPS | * | deny → block shutter/use/detect |
| toast.ok | Toast | — | commit / dùng ảnh ok |
| toast.fail | Toast | — | upload/fail · **cấm** `window.alert` |
| reviewSheet | Sheet optional | — | `#sheet-pgc-review` · không re-upload |
| detect | Button optional | — | consumer VIS · POST ai-vision/detect · Lat=object HITL · acc≤30 |

**Labels:** `useFormOptions()` — prototype nhãn VN review; Dev wire keys.  
**GPS HARD:** deny → block shutter/use/detect · accuracy >30 → no auto object / detect · **cấm** fake.  
**Live API only** — **cấm** invent `photo-geo*` path · **cấm** ERP.* · **cấm** client `objectKey`.

## 4. Prototype (REQUIRED)

| | |
|--|--|
| Artifact | `ui/prototype/index.html` |
| Zones | PGC `#sheet-pgc` · `DES-MOB-PGC` · `#capture-preview` · `#gim-pin` · `#map-confirm` · `#btn-shutter` · `#btn-use` · GPS modal |
| Form | Mobile sheet · Android 1-1 peer photo-geo-capture |
| Grid/filter desktop | **N/A** |
| SSOT | control-hint · real-data §B · peer Android · mobile-tokens |
| **reviewUrl** | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-photo-geo/ui/prototype/index.html` |
| **peerStdUrl** | `http://localhost:9301/web-rmms-photo-geo` |
| **real_view_parity** | `v1` |

### Wire

```
Host FR dim → sheet-pgc open
PGC: preview · shutter · gim 1 · meta rows · map HITL · confirm · use/cancel
GPS deny: DES-MOB-GPS-DENY · shutter/use blocked
Acc>30 / compass: banner · kéo pin · no auto object
Board: Default | ?deny=1 | ?conf=45 | ?compass=1 | ?step=map | ?fail=1
```

### Query modes (prototype)

| Query | Effect |
|-------|--------|
| (default) | open PGC · GPS ok · flow shutter→gim→map→use |
| `?deny=1` | GPS modal · block openCapture geo |
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
| Host attach | consumer `MediaIds` · `HasGps=true` · sidecar object lat · GAP-PGC-BE-01 → SA |

**BFF:** Mobile.Bff `:5202` · **cấm** Web BFF · **cấm ERP.***  
Detect Lat/Lng = **object** sau HITL — **cấm** photographer GPS.

## 6. DES checklist

| ID | Result |
|----|--------|
| DES-A zones PGC | **PASS** |
| DES-B control = controlHint | **PASS** |
| DES-C prototype + reviewUrl | **PASS** |
| DES-D Leave / Cancel | **PASS** · local dismiss |
| DES-GRID / DES-RPT | **N/A** phone overlay |
| DES-MOB-PGC | **PASS** · `#sheet-pgc` |
| DES-MOB-GPS-DENY | **PASS** · modal + block |
| PACK-01 | **PASS** · packKind=list · sheet overlay |
| WEB-CAM | **PASS** Design · getUserMedia primary |
| MAP-HOST | **PASS** Design · reuse GIS clip |
| COMPASS / PLANE | **PASS** Design · banner + pin drag |
| real_view_parity | **v1** |
| GPS / HasGps | **PASS** · PGC-BE-01 → SA cite |

## 7. UNCLEAR (carry)

| id | Action |
|----|--------|
| UNCLEAR-PACK-01 | **closed PO+Design** · list · sheet `#sheet-pgc` |
| UNCLEAR-WEB-CAM | **closed Design** · getUserMedia/kit primary · Dev cite PhotoRow web |
| UNCLEAR-MAP-HOST | **closed Design** · reuse `web-rmms-gis` clip · **cấm** invent map API |
| GAP-PGC-COMPASS | **closed Design** · banner + HITL pin |
| UNCLEAR-DOMAIN-MAP-PGC | SA add DOMAIN-MAP row `web-rmms-photo-geo` · File+AiVision cite Incident |
| UNCLEAR-PGC-BE-01 | SA Schema_* hoặc sidecar P1 · MediaIds + HasGps · no invent Lat column |

## 8. Handoff

| Role | Need |
|------|------|
| SA | DOMAIN-MAP row · Live files/* + detect DTO · PGC-BE-01 · Mobile.Bff · **cấm** invent path · **cấm** ERP.* |
| TL | Tasks PGC sheet + GPS gate + gim/HITL + files commit |
| Dev | `/agent-dev` · MFE Mobile only · BFF `:5202` · getUserMedia · GIS clip · useFormOptions · GPS HARD |
| QA | GPS deny · >30m · gim 1 · HITL · commit key · no fake · no web-bff · e2e queued |

## Version meta

`skillVersion=2026.09.05.03` · `schemaVersion=1` · `contentHash=sha256:2282c3b64ab8701681f5edbc548b5cf1a2221159d9ffb779dfe03d186010f7a4` · `rulesVersion=2026.09.25.2` · `updatedAt=2026-09-26T00:05:00.000Z` · `design_confirm=approve` · `autoApprove=ON`
