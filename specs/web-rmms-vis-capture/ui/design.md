# Design — web-rmms-vis-capture

| Field | Value |
|-------|-------|
| feature | `web-rmms-vis-capture` |
| title | Nhận diện sự cố |
| this role | `design` · `/agent-design` |
| status | `confirmed` (autoApprove=ON) |
| design_confirm | **approve** (`task_8f3b5723`) |
| changeScope | `new_page` |
| packKind | **`list`** (PO · surface **full** `#sc-vis-capture` · **≠** Kind B desktop) |
| lane | `web` |
| stack | `web_mfe_phone` · `Linm.Web.RMMS.Mobile` · `max-width: 430px` |
| formPattern | Mobile **full** · Android 1-1 · **không** ERP Modal/Slideout Kind B |
| DES-GRID / LinErpListFilterBar | **N/A** — phone full screen |
| Report AC / DES-RPT | **N/A** |
| shared_grid_example | **N/A** (phone) |
| real_view_parity | **v1** |
| peerStdUrl | `http://localhost:9301/web-rmms-vis-capture` |
| mfeStdUrl | `http://localhost:9301/web-rmms-vis-capture` |
| mfeStdRoute | `/web-rmms-vis-capture` |
| productRoute | `/incident/vis` |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-vis-capture/ui/prototype/index.html` |
| demo | **N/A** · hash skip · **cấm** re-scan (**GAP-DES-DEMO-RESCAN-01**) |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · AiVision+Incident(+Patrol) · **cấm ERP.*** |
| bff | `Linm.RMMS.Mobile.Bff` · `:5202` · `mobile-bff/api/v1` · **cấm** web-bff client |
| controlHint | `specs/_data-analy/features/web-rmms-vis-capture-control-hint.md` |
| realData | `specs/_data-analy/features/web-rmms-vis-capture-real-data.md` · §A+§B PASS |
| prior | PO `confirmed` · `handoff/po-compact.md` · contentHash `sha256:96ffc2878a4c6ad0367088c699203864c2e711b055ca68da8a59d696c8d4de97` |
| autoApprove | **ON** |
| e2eQa | ON queued `/agent-qa*` · **cấm** e2e / `yarn start:std` ở Design |
| `devSlash` | `/agent-dev` |
| updatedAt | `2026-09-26T04:29:24.000Z` |
| taskId | `task_8f3b5723` |
| skillId | `agent-design` |
| skillVersion | `2026.09.05.03` |
| schemaVersion | `1` |
| workflowVersion | `2026.09.19.02` |
| rulesVersion | `2026.09.25.2` |
| versionGate | `ok` |
| contentHash | `sha256:96ffc2878a4c6ad0367088c699203864c2e711b055ca68da8a59d696c8d4de97` |

**Cấm:** Dev/BE trước confirm (đã autoApprove) · ERP.* · invent slug controller · Kind B DES-GRID · `LinErpListFilterBar` · fake GPS · on-device detect · hardcode label keys ngoài `useFormOptions` · native `alert`/`confirm` · re-scan demo · `yarn build` / e2e / start:std · Me*/feedback/cam-view · cam-patrol/det-hitl · journal/kết ca/tồn tại/tần suất (B–E).

## 0. Context / Demo

| ID | Path | Notes |
|----|------|-------|
| CTX-01 | `docs/context/features/web-rmms-vis-capture.md` | VIS capture/detect/attach |
| CTX-02 | `docs/plan/web-rmms-mobile/SCREENS.md` | `/incident/vis` |
| CTX-03 | peer CTX | `vis-capture` · `ai-vision` · `incident-list` |
| DEM | — | **N/A** · hash skip · **cấm** crawl |
| P1 ref (visual only) | `specs/mobile-p1` / peer `vis-capture` `#sc-vis-capture` | **1-1 layout** · **không** demo SSOT ship |
| DA-01 / DA-02 | `_data-analy/features/web-rmms-vis-capture-{control-hint,real-data}.md` | inventory + §B |
| PO | `po/requirement.md` | TITLE-01 · PACK-01 · AC-VIS-01..10 · AC-GRID N/A |
| tokens | `docs/mobile-tokens.json` | primary `#0C84C0` · phone 430 |

## 1. Pattern & ownership

| | |
|--|--|
| Frame | Phone **430px** · tokens primary `#0C84C0` · label **13** · field **≥16** |
| This feature owns | **VIS** full screen `#sc-vis-capture` · `DES-MOB-VIS-CAPTURE` |
| Peer owns | INC-L banner entry · CAP `openCapture('vision')` · offline queue |
| Shell owns | Tab Incident active · NavigationBar 5 |
| DES-LEAVE | Skip / back → local dismiss · **cấm** `window.confirm` |
| Out | Me* · feedback · cam-view · cam-patrol · det-hitl · invent VisCapture*Controller |

### Ownership (Design resolve)

| Surface | Owner |
|---------|-------|
| VIS `/web-rmms-vis-capture` · `/incident/vis` | **this feature** |
| Banner entry from INC-L | **peer nav only** |
| Capture sheet `openCapture('vision')` | **peer CAP** · still photo · **không** continuous finder |
| Android section + Skip | **this feature** · **đóng UNCLEAR-DUAL-01 / GAP-MOB-VIS-DUAL-01** |
| Title copy | **«Nhận diện sự cố»** (PO TITLE-01) · **cấm** peer «Nhận diện mặt đường» primary |

## 2. Screens / zones

| Zone | Route | Surface | Wire |
|------|-------|---------|------|
| **VIS** | `/web-rmms-vis-capture` · cite `/incident/vis` | Full `#sc-vis-capture` | PhotoRow · GPS rows · detect · class/sev · Attach/Skip |
| peer INC-L | `/incident` | Banner entry · back | nav-only |
| peer CAP | `/capture` | `openCapture('vision')` | peer |

### IA

```
(auth) → shell tab Incident → INC-L
  banner.vis / entry → VIS (/incident/vis · std /web-rmms-vis-capture)
  photos → peer CAP still
  photo+GPS → detect → Attach | Skip
  Attach ok → toast → back INC-L
  Skip / Back → dismiss → INC-L
```

## 3. Field inventory (Control = controlHint)

### VIS

| uiField | controlHint | Required | Bind / notes |
|---------|-------------|----------|--------------|
| navBack | BackButton | * | copy key «Vấn đề» · → INC-L |
| screenTitle | Text | * | copy key **«Nhận diện sự cố»** · useFormOptions |
| sectionPhoto | SectionLabel | * | «Ảnh hiện trường» · **Android bắt buộc** (DUAL-01) |
| photos | PhotoRow | * | `#i-camera` · uploads init/PUT/complete · peer CAP |
| rowLoc | ListRow RO | * | GPS + optional `GET patrol/sessions` → Route/Km |
| rowAcc | ListRow RO | * | device `AccuracyM` |
| detect | Button/auto | * | `POST ai-vision/detect` · GPS + accuracy ≤ 30 m · photo required |
| rowClass | ListRow RO | — | `DefectClass` từ detect · **cấm** fake |
| rowSev | ListRow + Badge | — | `Severity` · badge map |
| btnAttach | Button primary | * | `POST incident/incidents` · `DetectionId` · `HasGps=true` |
| btnSkip | Button secondary | * | dismiss · **Android bắt buộc** (DUAL-01) |
| gpsLock | GPS | * | deny → disable Detect/Attach/geo · modal `DES-MOB-GPS-DENY` |
| toast.ok | Toast | — | attach ok |
| toast.gpsBlock | Toast | — | thiếu GPS / > 30 m |
| toast.fail | Toast | — | load/detect/attach · **cấm** `window.alert` |
| offlineQueue | — | — | peer offline · **cấm** invent OfflineQueueController |

**Labels:** `useFormOptions()` — prototype hiện nhãn VN review; Dev wire keys.  
**GPS HARD:** deny → block Detect/Attach/geo · accuracy >30 → no detect · **cấm** fake coords.  
**Live API only** — **cấm** itemsOrDemo · **cấm** invent path `web-rmms-vis-capture/*` · **cấm** on-device detect.

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
| Zones | VIS `#sc-vis-capture` · `DES-MOB-VIS-CAPTURE` · GPS modal |
| Form | Mobile full · Android 1-1 section + Skip |
| Grid/filter desktop | **N/A** |
| SSOT | control-hint · real-data §B · peer vis-capture Android · mobile-tokens |
| **reviewUrl** | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-vis-capture/ui/prototype/index.html` |
| **peerStdUrl** | `http://localhost:9301/web-rmms-vis-capture` |
| **real_view_parity** | `v1` |

### Wire

```
VIS: topbar(back+title) · sectionPhoto · PhotoRow · rowLoc/Acc/Class/Sev · Detect · Attach · Skip
GPS deny: DES-MOB-GPS-DENY modal · Detect/Attach disabled
Acc>30: toast block · no detect result
No session: rowLoc GPS-only · cấm bịa Route
Board: Default | GPS deny | Acc>30 | No photo | No session | Error
```

### Query modes (prototype)

| Query | Effect |
|-------|--------|
| (default) | VIS ok · photo · detect result · Attach enabled |
| `?gps=deny` / `?deny=1` | GPS modal · Detect/Attach disabled |
| `?acc=45` | Detect blocked (accuracy >30) |
| `?nophoto=1` | empty photo · Detect disabled |
| `?nosession=1` | loc GPS-only · no Route invent |
| `?error=1` | detect fail toast · **cấm** `window.alert` |

## 5. API map (cite real-data §B)

| Action | API |
|--------|-----|
| Upload | `POST mobile-bff/api/v1/ai-vision/uploads/init` · PUT `{id}/object` · complete |
| Detect | `POST …/ai-vision/detect` · Lat/Lng/AccuracyM |
| Detection | `GET …/ai-vision/detections/{id}` optional |
| Sessions | `GET …/patrol/sessions` optional stamp |
| Attach | `POST …/incident/incidents` · DetectionId · HasGps · Title/Type từ DefectClass |

**BFF:** Mobile.Bff `:5202` · **cấm** Web BFF · **cấm ERP.***  
Attach body: `DetectionId` · `HasGps=true` · Title/Type từ DefectClass · tuyến từ session · `RequestedAt` · `Status=new` · **không** invent Lat (PGC-BE-01 → SA).

## 6. DES checklist

| ID | Result |
|----|--------|
| DES-A zones VIS | **PASS** |
| DES-B control = controlHint | **PASS** |
| DES-C prototype + reviewUrl | **PASS** |
| DES-D Leave / Skip | **PASS** · local dismiss |
| DES-GRID / DES-RPT | **N/A** phone |
| DES-MOB-VIS-CAPTURE | **PASS** · `#sc-vis-capture` |
| GAP-MOB-VIS-DUAL-01 | **PASS** · section + Skip on Android 1-1 |
| TITLE-01 | **PASS** · «Nhận diện sự cố» |
| PACK-01 | **PASS** · packKind=list · full surface |
| real_view_parity | **v1** |
| GPS / HasGps | **PASS** · PGC-BE-01 → SA cite |

## 7. UNCLEAR (carry)

| id | Action |
|----|--------|
| UNCLEAR-DUAL-01 | **resolved Design** · Android section «Ảnh hiện trường» + CTA «Bỏ qua» |
| UNCLEAR-DOMAIN-MAP-VIS | SA thêm DOMAIN-MAP row `web-rmms-vis-capture` · AiVision(+Incident/Patrol) · MFE `/web-rmms-vis-capture` |
| UNCLEAR-DETECT-HOST | SA cite Live detect host · **cấm** on-device · **cấm** invent path |
| UNCLEAR-PGC-BE-01 | SA cite Live CreateIncidentRequest · HasGps + DetectionId · no Lat |
| UNCLEAR-SESS | Dev/QA · empty sessions toast · **cấm** itemsOrDemo |
| TITLE-01 / PACK-01 | **closed PO** · Design honor |

## 8. Handoff

| Role | Need |
|------|------|
| SA | DOMAIN-MAP row · Live AiVision(+Incident/Patrol) DTO · DETECT-HOST · PGC-BE-01 · Mobile.Bff · **cấm** invent path · **cấm** ERP.* |
| TL | Tasks VIS scaffold + GPS gate + detect/attach |
| Dev | `/agent-dev` · MFE Mobile only · BFF `:5202` · useFormOptions · GPS HARD · dual section+Skip |
| QA | GPS deny · acc>30 · skip · attach · no fake · no web-bff · no Me · e2e queued |

## Version meta

`skillVersion=2026.09.05.03` · `schemaVersion=1` · `contentHash=sha256:96ffc2878a4c6ad0367088c699203864c2e711b055ca68da8a59d696c8d4de97` · `rulesVersion=2026.09.25.2` · `updatedAt=2026-09-26T04:29:24.000Z` · `design_confirm=approve` · `autoApprove=ON`
