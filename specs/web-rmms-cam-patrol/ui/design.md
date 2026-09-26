# Design — web-rmms-cam-patrol

| Field | Value |
|-------|-------|
| feature | `web-rmms-cam-patrol` |
| title | Camera tuần |
| this role | `design` · `/agent-design` |
| status | `confirmed` (autoApprove=ON) |
| design_confirm | **approve** (`task_feb572c6`) |
| changeScope | `new_page` |
| packKind | **`list`** (PO confirm · UI = **phone Field cam** · **≠** Kind B desktop) |
| lane | `web` |
| stack | `web_mfe_phone` · `Linm.Web.RMMS.Mobile` · `max-width: 430px` |
| formPattern | Mobile full CP-01 · **N/A** ERP Modal/Slideout |
| DES-GRID / LinErpListFilterBar | **N/A** — phone Field · **cấm** clone |
| Report AC / DES-RPT | **N/A** |
| shared_grid_example | **N/A** (phone) |
| real_view_parity | **v1** |
| peerStdUrl | `http://localhost:9301/web-rmms-cam-patrol` |
| mfeStdUrl | `http://localhost:9301/web-rmms-cam-patrol` |
| mfeStdRoute | `/web-rmms-cam-patrol` |
| productRoute | `/field/cam` |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-cam-patrol/ui/prototype/index.html` |
| reviewUrl ship | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-cam-patrol/ui/prototype/index.html?ship=1` |
| reviewUrl GPS deny | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-cam-patrol/ui/prototype/index.html?deny=1` |
| reviewUrl no session | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-cam-patrol/ui/prototype/index.html?nosession=1` |
| reviewUrl frame fail | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-cam-patrol/ui/prototype/index.html?fail=1` |
| demo | **N/A** · hash skip · **cấm** re-scan (**GAP-DES-DEMO-RESCAN-01**) |
| ui1to1 | Android `#sc-cam-patrol` · `DES-MOB-CAM-PATROL` / `DES-MOB-CAM-FINDER` · **bỏ Me tabs** · **ẩn score % ship** |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · Patrol + AiVision + Incident · **cấm ERP.*** |
| bff | `Linm.RMMS.Mobile.Bff` · `VITE_MOBILE_API_URL` · **cấm** web-bff client |
| controlHint | `specs/_data-analy/features/web-rmms-cam-patrol-control-hint.md` |
| realData | `specs/_data-analy/features/web-rmms-cam-patrol-real-data.md` · §A+§B PASS |
| prior | PO `confirmed` · `handoff/po-compact.md` · contentHash `sha256:cd46c9486c0a3fe71165c27906508a1608ba46cca1351fe9df832ab7b2efa68c` |
| autoApprove | **ON** |
| e2eQa | ON queued `/agent-qa*` · **cấm** e2e / `yarn start:std` ở Design |
| `devSlash` | `/agent-dev` |
| updatedAt | `2026-09-26T01:05:00.000Z` |
| taskId | `task_feb572c6` |
| skillId | `agent-design` |
| skillVersion | `2026.09.05.03` |
| schemaVersion | `1` |
| workflowVersion | `2026.09.19.02` |
| rulesVersion | `2026.09.25.2` |
| versionGate | `ok` |
| contentHash | `sha256:cd46c9486c0a3fe71165c27906508a1608ba46cca1351fe9df832ab7b2efa68c` |

**Cấm:** Dev/BE trước confirm (đã autoApprove) · ERP.* · iOS/Android native dual · Kind B DES-GRID · `LinErpListFilterBar` · invent `cam-patrol/*` path · fake GPS/coords/class · score % ship · Me / cam-view / feedback · journal B–E · hardcode label keys ngoài `useFormOptions` · native `alert`/`confirm` · re-scan demo · `yarn build` / e2e / start:std ở role này · Route mobile-bff trên web-bff.

## 0. Context / Demo

| ID | Path | Notes |
|----|------|-------|
| CTX-01 | `docs/context/features/web-rmms-cam-patrol.md` | feature P0 |
| CTX-02 | `docs/plan/web-rmms-mobile/SCREENS.md` · `/field/cam` | Camera tuần |
| CTX-03 | `docs/context/features/cam-patrol.md` | peer DES · GAP FRAME/SCORE |
| DEM | — | **N/A** · hash skip |
| DA-01 / DA-02 | `_data-analy/features/web-rmms-cam-patrol-{control-hint,real-data}.md` | inventory + §B |
| PO | `po/requirement.md` | DEC-FRAME/SCORE/ENTRY · DEC-DETECT-DTO→SA |
| Peer proto | `specs/mobile-p1/ui/prototype/android/index.html` `#sc-cam-patrol` | UI 1-1 zones |
| tokens | `docs/mobile-tokens.json` | color/radius/size |

## 1. Pattern & shell

| | |
|--|--|
| Frame | Phone **430px** · content-only · tokens primary `#0C84C0` · label **13** · field **≥16** |
| Shell | App topbar (back · title) · **không** ERP `LinPageLayout` catalog chrome |
| Surface | Full page CP-01 — **không** Modal/Slideout form |
| Filter | **N/A** — **cấm** LinErpListFilterBar |
| Leave | Dirty result card → discard local · **không** POST incident · **cấm** native dialog |
| Tabs | **không** Me tabs (out of feature) |
| Entry | **1 route** CP-01 · `PatrolType` stamp từ ca (DEC-ENTRY) |
| Out | Me / cam-view / feedback · journal/kết ca/tần suất (B–E) · native iOS/Android edits |

## 2. Screens / zones

| Zone | Route | Surface | Wire |
|------|-------|---------|------|
| **CP-01** | `/web-rmms-cam-patrol` · `/field/cam` | Full cam | finder + stamp + detect + confirm/skip |
| **DES-MOB-CAM-PATROL** | screen owner `#sc-cam-patrol` | Screen | data-tab field peer |
| **DES-MOB-CAM-FINDER** | finder + FOV `.box` | CameraViewfinder | live + frame capture → ImageBase64 |
| stamp.route/km/type | overlay stamp | Text RO | GET `patrol/sessions` Đang tuần |
| stamp.gps | overlay | GPS | lat,lng · ±accuracyM · chip đã chốt |
| detect | actions | Button primary | POST `ai-vision/detect` Engine=P1 |
| **DES-MOB-CAM-RESULT** | card | Text/Chip | kind · surface · actionHint · **no score %** |
| confirm / skip | actions | Button | POST incident / dismiss |
| **DES-MOB-GPS-DENY** | overlay | Modal | deny · chặn detect/confirm |
| emptyNoSession | content | EmptyState | no ca Đang tuần |
| offlineBanner | content | Banner | peer offline · **cấm** fake success |
| toast | overlay | Toast | ok / skip / fail / gpsDeny |

### IA

```
(auth) → Field hub (TD / TK)
  → CP-01 /field/cam
       GPS fix ≤30m + frame → Detect
       result card → Confirm (POST incident) | Skip (local)
```

## 3. Field inventory (Control = controlHint)

| uiField | screen | controlHint | Required | Bind / notes |
|---------|--------|-------------|----------|--------------|
| screenTitle | CP-01 | Text | — | key `cam.title` · «Camera tuần» |
| back | CP-01 | Button/Nav | — | → Field hub |
| finder | CP-01 | CameraViewfinder | * | DES-MOB-CAM-FINDER · live FOV |
| stamp.route | CP-01 | Text RO | * | session.Route |
| stamp.km | CP-01 | Text RO | — | session km / Note |
| stamp.type | CP-01 | Text RO | — | PatrolType từ ca |
| lat / lng / accuracyM | CP-01 | GPS | * | device · gate ≤ 30 m |
| getGps / lockGps | CP-01 | Button | — | deny → disable detect/confirm |
| imageBase64 | CP-01 | CameraCapture | * | JPEG→base64 trước detect · DEC-FRAME |
| engine | CP-01 | Hidden | * | `Engine=P1` |
| detect | CP-01 | Button | — | POST `ai-vision/detect` |
| detection.id | CP-01 | Hidden | * (confirm) | DetectionId |
| detection.kind | CP-01 | Text/Chip | — | class · **cấm** fake |
| detection.surface | CP-01 | Text | — | hạng mục DTO |
| detection.score | — | — | — | **OUT ship** DEC-SCORE |
| detection.actionHint | CP-01 | Text | — | copy key |
| confirm | CP-01 | Button | — | POST `incident/incidents` · HasGps=true |
| skip | CP-01 | Button | — | dismiss only · **không** POST |
| offlineBanner | CP-01 | Banner | — | peer offline |
| emptyNoSession | CP-01 | EmptyState | — | chặn detect · **cấm** bịa ca |

**Labels:** `useFormOptions()` / `cam.*` — prototype hiện nhãn VN để review; Dev wire key.

### Hành vi (Design chốt)

| Case | UI |
|------|-----|
| GPS deny \| accuracy > 30 m | Modal `DES-MOB-GPS-DENY` · disable detect + confirm · toast gpsDeny · **cấm** fake coords |
| No ca Đang tuần | EmptyState · chặn detect · **cấm** bịa stamp |
| Frame null / capture fail | toast detectFail · card nil · **cấm** fake class (DEC-FRAME) |
| Detect ok | result card · **ẩn** score % (DEC-SCORE) |
| Confirm | POST incident · DetectionId · HasGps · toast ok |
| Skip | dismiss card · toast skip · **không** POST |
| Offline | banner · queue peer · **cấm** fake success |
| Leave dirty card | discard local · no POST |

## 4. DES ↔ kit map

| Zone / DES | Kit / surface | Notes |
|------------|---------------|-------|
| Topbar | `LinmTopBar` | back chevron · title |
| Finder | CameraViewfinder + FOV | capture frame → base64 · **không** package mới P1 |
| Stamp | overlay Text | live session · **cấm** demo stamp ship |
| Result rows | `LinmListRow` / Chip | score row **không ship** |
| Detect / Confirm | `LinmPrimaryButton` | GPS + frame gate |
| Skip | `LinmSecondaryButton` | local dismiss |
| GPS deny | feature Modal | **cấm** `window.alert` |
| Toast | `LinmToast` | ok / skip / fail / gpsDeny |

### kit_missing_confirm (CameraViewfinder)

**approve** · autoApprove=ON · Finder = getUserMedia / Camera API + FOV + stamp + **frame capture** · **không** tạo `LinmCameraFinder` package mới P1.

## 5. API (Design note · SA cite DTO)

| Zone | Method · Path |
|------|----------------|
| Stamp ca | `GET …/patrol/sessions` · filter Đang tuần |
| Detect | `POST …/ai-vision/detect` · ImageBase64 · Lat · Lng · AccuracyM · Engine=P1 |
| Detection RO | `GET …/ai-vision/detections/{id}` optional |
| Confirm | `POST …/incident/incidents` · DetectionId · HasGps=true |

App base: `{BffBase}/mobile-bff/api/v1`. **Cấm** invent `cam-patrol/*` · ERP.* · web-bff client.

DEC-DETECT-DTO → SA cite `AiVisionOpsController` field names (PO fields fixed).

## 6. Prototype review states

| State | URL query | Expect |
|-------|-----------|--------|
| Ready | (default) | finder + Detect |
| Ship | `?ship=1` | result card · **ẩn** 91% |
| GPS deny | `?deny=1` | modal · buttons disabled |
| No session | `?nosession=1` | EmptyState |
| Frame fail | `?fail=1` | Detect → toast fail · no card |
| Offline | `?offline=1` | banner |

**Cấm** dùng `mfeStdUrl` / `yarn start:std` làm reviewUrl Design.

## 7. Out of pack

| Item | Owner |
|------|-------|
| Me / cam-view / feedback | other features |
| Journal / kết ca / tần suất | web-rmms-mobile-b…e |
| AiVision DTO field cite | SA |
| Frame capture Dev DoD | Dev (DEC-FRAME) |
| E2E | `/agent-qa*` queued |

## 8. design_confirm

| | |
|--|--|
| Gate | `design_confirm` |
| Result | **approve** |
| Mode | autoApprove=ON · không chờ board |
| Next | `/agent-sa` · **stop** this task (GAP-PKT-ROLE-01) |
