# Design — web-rmms-vis-capture

| Field | Value |
|-------|-------|
| feature | `web-rmms-vis-capture` |
| title | Nhận diện sự cố |
| this role | `design` · `/agent-design` |
| status | `confirmed` (autoApprove=ON) |
| design_confirm | **approve** (`task_f8d03a34`) |
| changeScope | `edit_page` |
| packKind | **`list`** (full `#sc-vis-capture` · **≠** Kind B desktop) |
| lane | `web` |
| stack | `web_mfe_phone` · `Linm.Web.RMMS.Mobile` · `max-width: 430px` |
| formPattern | Mobile **full** · Android 1-1 · **không** ERP Modal/Slideout Kind B |
| DES-GRID / LinErpListFilterBar | **N/A** — phone full screen |
| Report AC / DES-RPT | **N/A** |
| shared_grid_example | **N/A** (phone) |
| real_view_parity | **v1** |
| peerStdUrl | `http://localhost:9301/chup-hien-truong` |
| mfeStdUrl | `http://localhost:9301/chup-hien-truong` |
| mfeStdRoute | `/chup-hien-truong` |
| productRoute | `/incident/vis` |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-vis-capture/ui/prototype/index.html` |
| demo | **N/A** · hash skip · **cấm** re-scan (**GAP-DES-DEMO-RESCAN-01**) |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · AiVision+Incident(+Patrol) · **cấm ERP.*** |
| bff | `Linm.RMMS.Mobile.Bff` · `:5202` · `mobile-bff/api/v1` · **cấm** web-bff client |
| controlHint | `specs/_data-analy/features/web-rmms-vis-capture-control-hint.md` |
| realData | `specs/_data-analy/features/web-rmms-vis-capture-real-data.md` · §A+§B PASS · Delta PASS |
| prior | PO `confirmed` · `handoff/po-compact.md` · contentHash `sha256:f749bc65f84b7bde51beeebaa85e5db22dacc8e8a040a53de30af834fa55c8cd` |
| editCite | `docs/plan/web-rmms-mobile/SUBMIT-VALIDATE.md` · Pattern B · VisCapturePage |
| autoApprove | **ON** |
| e2eQa | ON queued `/agent-qa*` · **cấm** e2e / `yarn start:std` ở Design |
| `devSlash` | `/agent-dev` |
| updatedAt | `2026-09-27T11:20:00.000Z` |
| taskId | `task_f8d03a34` |
| priorDesign | `task_8f3b5723` (new_page · keep zones) |
| skillId | `agent-design` |
| skillVersion | `2026.09.05.03` |
| schemaVersion | `1` |
| workflowVersion | `2026.09.19.02` |
| rulesVersion | `2026.09.25.2` |
| versionGate | `ok` |
| contentHash | `sha256:f749bc65f84b7bde51beeebaa85e5db22dacc8e8a040a53de30af834fa55c8cd` |

**Cấm:** Dev/BE trước confirm (đã autoApprove) · ERP.* · invent slug controller · Kind B DES-GRID · `LinErpListFilterBar` · fake GPS · on-device detect · hardcode label keys ngoài `useFormOptions` · native `alert`/`confirm` · re-scan demo · `yarn build` / e2e / start:std · Me*/feedback/cam-view · cam-patrol/det-hitl · journal/kết ca/tồn tại/tần suất (B–E) · tab/route/icon mới · mở android/ios proto · path `/web-rmms-vis-capture`.

## § Delta Current vs New (edit_page HARD)

| | Current (prior design / shipped) | New (this task) |
|--|----------------------------------|-----------------|
| changeScope | `new_page` | `edit_page` · Pattern B overlay |
| mfeStdRoute | notes `/web-rmms-vis-capture` | **SSOT** `/chup-hien-truong` · alias `/incident/vis` · **cấm** slug path |
| Detect CTA | `disabled` khi thiếu GPS/ảnh/acc | idle **luôn bật** · `disabled` chỉ `detecting` |
| Attach CTA | multi-gate disable | idle **luôn bật** · `disabled` chỉ `attaching` |
| Skip CTA | `disabled={attaching}` | giữ |
| Validate UX | toast / GPS modal pre-block | `validationAttempted` · `#validationBanner` `string[]` + inline · API 4xx → toast |
| GPS deny / Acc>30 | pre-disable Detect/Attach | **không** khóa nút · bấm mới banner · Acc>30 **không** POST (handler) |
| Prototype | prior zones | **giữ** reviewUrl · delta banner zone · **cấm** icon/tab mới |
| Align cuối | — | `/align-mobile-to-mfe` · SSOT=`VisCapturePage` · **cấm** mở android/ios |

## 0. Context / Demo

| ID | Path | Notes |
|----|------|-------|
| CTX-01 | `docs/context/features/web-rmms-vis-capture.md` | edit_page |
| CTX-02 | `docs/plan/web-rmms-mobile/SCREENS.md` | `/incident/vis` |
| CTX-03 | `docs/plan/web-rmms-mobile/SUBMIT-VALIDATE.md` | Pattern B SSOT |
| DEM | — | **N/A** · hash skip · **cấm** crawl |
| DA-01 / DA-02 | `_data-analy/features/web-rmms-vis-capture-{control-hint,real-data}.md` | inventory + §B + Delta |
| PO | `po/requirement.md` | AC-VIS-01..12 · AC-GRID-01..05 N/A phone · VALIDATE-B |
| tokens | `docs/mobile-tokens.json` | primary `#0C84C0` · phone 430 |

## 1. Pattern & ownership

| | |
|--|--|
| Frame | Phone **430px** · tokens primary `#0C84C0` · label **13** · field **≥16** |
| This feature owns | **VIS** full `#sc-vis-capture` · `DES-MOB-VIS-CAPTURE` · Pattern B banner |
| Peer owns | INC-L banner entry · CAP `openCapture('vision')` · offline queue |
| Shell owns | Tab Incident active · NavigationBar 5 · **cấm** tab mới |
| DES-LEAVE | Skip / back → local dismiss · **cấm** `window.confirm` |
| Out | Me* · feedback · cam-view · invent VisCapture*Controller · Excel · new_page |

### Ownership

| Surface | Owner |
|---------|-------|
| VIS `/chup-hien-truong` · `/incident/vis` | **this feature** |
| Banner Pattern B `#validationBanner` | **this feature** (delta) |
| Capture sheet `openCapture('vision')` | **peer CAP** |
| Title copy | **«Nhận diện sự cố»** · useFormOptions |

## 2. Screens / zones

| Zone | Route | Surface | Wire |
|------|-------|---------|------|
| **VIS** | `/chup-hien-truong` · cite `/incident/vis` | Full `#sc-vis-capture` | PhotoRow · GPS · detect · class/sev · Attach/Skip · **validationBanner** |
| peer INC-L | `/incident` | Banner entry · back | nav-only |
| peer CAP | `/capture` | `openCapture('vision')` | peer |

### IA

```
(auth) → shell tab Incident → INC-L
  banner.vis → VIS (/incident/vis · std /chup-hien-truong)
  photos → peer CAP still
  photo+GPS → detect → Attach | Skip
  Detect/Attach click thiếu required → validationBanner (Pattern B)
  Attach ok → toast → back INC-L
  Skip / Back → dismiss → INC-L
```

## 3. Field inventory (Control = controlHint)

### VIS

| uiField | controlHint | Required | Bind / notes |
|---------|-------------|----------|--------------|
| navBack | BackButton | * | copy key «Vấn đề» · → INC-L |
| screenTitle | Text | * | «Nhận diện sự cố» · useFormOptions |
| sectionPhoto | SectionLabel | * | «Ảnh hiện trường» |
| photos | PhotoRow | * | uploads* · `capture="environment"` nếu file · peer CAP |
| rowLoc | ListRow RO | * | GPS + optional sessions · thiếu → `--` |
| rowAcc | ListRow RO | * | `AccuracyM` |
| detect | Button | * | Pattern B · idle-on · `disabled` chỉ `detecting` · POST khi GPS+Acc≤30 |
| rowClass | ListRow RO | — | `DefectClass` · **cấm** fake |
| rowSev | ListRow + Badge | — | `Severity` |
| btnAttach | Button primary | * | Pattern B · `disabled` chỉ `attaching` · POST + DetectionId |
| btnSkip | Button secondary | * | `disabled` chỉ `attaching` |
| gpsLock | GPS | * | deny → **banner on click** · **cấm** fake · **cấm** pre-disable CTA |
| validationBanner | Banner `string[]` | — | Pattern B · thu gọn/đóng · **cấm** một `alert.warning` |
| toast.ok / fail / gpsBlock | Toast | — | API / attach ok · **cấm** `window.alert` |
| offlineQueue | — | — | peer offline |

**Labels:** `useFormOptions()` — prototype nhãn VN review; Dev wire keys.  
**GPS HARD:** deny / Acc>30 → **không** khóa nút · click → banner · Acc>30 **không** POST detect · **cấm** fake.  
**Live API only** — **cấm** itemsOrDemo · **cấm** invent path · **cấm** on-device.

### Severity display map

| Severity | Badge |
|----------|-------|
| Cao | orange |
| Nghiêm trọng | red |
| Trung bình / Thấp | muted / green |

## 4. Prototype (REQUIRED)

| | |
|--|--|
| Artifact | `ui/prototype/index.html` |
| Zones | VIS `#sc-vis-capture` · `DES-MOB-VIS-CAPTURE` · `#validationBanner` · GPS modal (on-click deny) |
| Form | Mobile full · Android 1-1 section + Skip |
| Grid/filter desktop | **N/A** |
| SSOT | control-hint · real-data §B · SUBMIT-VALIDATE Pattern B · mobile-tokens |
| **reviewUrl** | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-vis-capture/ui/prototype/index.html` |
| **peerStdUrl** | `http://localhost:9301/chup-hien-truong` |
| **real_view_parity** | `v1` |

### Wire

```
VIS: topbar · validationBanner · sectionPhoto · PhotoRow · rowLoc/Acc/Class/Sev · Detect · Attach · Skip
Pattern B: Detect/Attach idle-on · click thiếu GPS/ảnh/detection → banner string[] + inline
Acc>30: nút on · click → banner · no detect POST/result
GPS deny: nút on · click → banner (+ optional settings modal) · cấm auto-lock on load
Skip: disabled chỉ attaching
Board: Default | GPS deny | Acc>30 | No photo | No session | Error
```

### Query modes (prototype)

| Query | Effect |
|-------|--------|
| (default) | VIS ok · photo · detect result · CTAs enabled |
| `?gps=deny` / `?deny=1` | GPS thiếu · CTAs **enabled** · click → banner (+ modal) |
| `?acc=45` | Acc>30 · CTAs **enabled** · Detect click → banner · no POST |
| `?nophoto=1` | empty photo · Detect click → banner |
| `?nosession=1` | loc GPS-only · no Route invent |
| `?error=1` | detect fail toast · **cấm** `window.alert` |
| `?banner=1` | seed `validationAttempted` show banner |

## 5. API map (cite real-data §B)

| Action | API |
|--------|-----|
| Upload | `POST mobile-bff/api/v1/ai-vision/uploads/init` · PUT `{id}/object` · complete |
| Detect | `POST …/ai-vision/detect` · Lat/Lng/AccuracyM · handler Acc≤30 |
| Detection | `GET …/ai-vision/detections/{id}` optional |
| Sessions | `GET …/patrol/sessions` optional stamp |
| Attach | `POST …/incident/incidents` · DetectionId · HasGps |

**BFF:** Mobile.Bff `:5202` · peer `GET integration/users` forward nếu thiếu · road-routes/search đã có · **cấm** Web BFF · **cấm ERP.***

## 6. DES checklist

| ID | Result |
|----|--------|
| DES-A zones VIS | **PASS** |
| DES-B control = controlHint | **PASS** · + validationBanner |
| DES-C prototype + reviewUrl | **PASS** · delta Pattern B |
| DES-D Leave / Skip | **PASS** · local dismiss |
| DES-GRID / DES-RPT | **N/A** phone |
| DES-MOB-VIS-CAPTURE | **PASS** · `#sc-vis-capture` |
| Pattern B VALIDATE-B | **PASS** · idle CTA · banner on click |
| TITLE-01 / PACK-01 | **PASS** (prior) |
| ROUTE-01 | **PASS** · `/chup-hien-truong` |
| real_view_parity | **v1** |
| GAP-DES-DEMO-RESCAN-01 | **PASS** · hash skip · no crawl |

## 7. UNCLEAR (carry)

| id | Action |
|----|--------|
| UNCLEAR-VALIDATE-B | Dev bỏ `canDetect`/`gpsBlocked` disable · Pattern B · QA re-e2e |
| UNCLEAR-ALIGN-01 | TL/Dev `/align-mobile-to-mfe` · SSOT MFE page · **cấm** mở android/ios |
| Prior UNCLEAR | DOMAIN-MAP / DUAL / TITLE / PACK / DETECT-HOST / PGC-BE · **closed** |

## 8. Handoff

| Role | Need |
|------|------|
| SA | Giữ solution · BFF users forward cite · **cấm** invent path · **cấm** ERP.* |
| TL | Edit gates VisCapturePage only · align cuối |
| Dev | Pattern B disable · `validationAttempted` + banner · mfeStd `/chup-hien-truong` |
| QA | Idle CTA · click GPS/ảnh missing → banner · Acc>30 no POST · attach pending-only · e2e queued |

## Version meta

`skillVersion=2026.09.05.03` · `schemaVersion=1` · `contentHash=sha256:f749bc65f84b7bde51beeebaa85e5db22dacc8e8a040a53de30af834fa55c8cd` · `rulesVersion=2026.09.25.2` · `updatedAt=2026-09-27T11:20:00.000Z` · `design_confirm=approve` · `autoApprove=ON` · `changeScope=edit_page` · `taskId=task_f8d03a34`
