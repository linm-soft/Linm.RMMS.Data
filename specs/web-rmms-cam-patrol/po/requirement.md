# PO — Requirement — web-rmms-cam-patrol

| Field | Value |
|-------|-------|
| feature | `web-rmms-cam-patrol` |
| title | Camera tuần |
| this role | `po` · `/agent-po` |
| changeScope | **`edit_page`** |
| packKind | **`list`** (PO confirm · phone Field · **≠** Kind B desktop) |
| lane | `web` |
| stack | `web_mfe_phone` · `Linm.Web.RMMS.Mobile` · phone `max-width: 430px` |
| status | `confirmed` (autoApprove=ON) |
| requestSource | run packet `task_20b3107a` · `/agent-qldb-workflow` · roleOnly=`po` · `/agent-po` · source `qldb_implement` |
| autoApprove | **ON** — Design/SA tự confirm **khi tới lượt** · turn này **không** chain role khác (**GAP-PKT-ROLE-01**) |
| e2eQa | ON — queued `/agent-qa*` · **cấm** e2e / `yarn start:std` ở role PO |
| prior | data-analy **confirmed** · compact `handoff/data_analy-compact.md` · `specs/_data-analy/features/web-rmms-cam-patrol-{control-hint,real-data}.md` · contentHash `sha256:c46ae5660ccba1b8e64ce8e5294acef77ceb4e0a75474372f2a3d3901efb5796` · skillVersion `2026.09.05.03` · rulesVersion `2026.09.27.1` · **hash skip** · demo **N/A** · **cấm** re-scan (**GAP-PO-DEMO-RESCAN-01**) |
| deltaCite | `docs/plan/web-rmms-mobile/SUBMIT-VALIDATE.md` · Pattern B · row `web-rmms-cam-patrol` |
| keepPrior | DEC-FRAME · DEC-SCORE · DEC-ENTRY · DEC-DETECT-DTO · Design zones/prototype · SA Live cite |
| `devSlash` | `/agent-dev` |
| demo | **N/A** |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| mfeStdRoute | `/camera-tuan` |
| mfeStdUrl | `http://localhost:9301/camera-tuan` |
| productRoute | `/field/cam` |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · domain **Patrol** + **AiVision** + **Incident** · **cấm ERP.*** |
| bff | `Linm.RMMS.Mobile.Bff` · `VITE_MOBILE_API_URL=http://localhost:5202/mobile-bff/api/v1` · **cấm** web-bff client |
| codeSSOT | `src/pages/WebRmmsCamPatrol/CamPatrolPage.tsx` |
| context | `docs/context/features/web-rmms-cam-patrol.md` |
| controlHint | `specs/_data-analy/features/web-rmms-cam-patrol-control-hint.md` |
| realData | `specs/_data-analy/features/web-rmms-cam-patrol-real-data.md` |
| screensPlan | `docs/plan/web-rmms-mobile/SCREENS.md` · `/field/cam` |
| peerCtx | `docs/context/features/cam-patrol.md` |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-cam-patrol/ui/prototype/index.html` (keep) |
| updatedAt | `2026-09-27T10:40:00.000Z` |
| taskId | `task_20b3107a` |
| skillId | `agent-po` |
| skillVersion | `2026.09.05.03` |
| schemaVersion | `1` |
| workflowVersion | `2026.09.19.02` |
| rulesVersion | `2026.09.27.1` |
| versionGate | `ok` |
| contentHash | `sha256:c46ae5660ccba1b8e64ce8e5294acef77ceb4e0a75474372f2a3d3901efb5796` |

**Cấm:** implement ở role PO · ERP.* · typed CRUD `new_page` · nhét màn desktop Asset · iOS/Android · invent `cam-patrol/*` · fake GPS / class · hardcode label VN · hiện % score · Me / cam-view / waves B–E · `window.alert` · re-scan demo · clone LinErpListFilterBar · Excel toolbar · SearchInput user/route trên CP-01 · `yarn start:std` / e2e / build ở PO · mfeStdUrl `/web-rmms-cam-patrol`.

## 1. Goal

Trong ca Field `Đang tuần`: finder + GPS → `POST ai-vision/detect` → card → **Xác nhận** / **Bỏ qua**. **Edit này:** áp Pattern B (SUBMIT-VALIDATE) — CTA detect/confirm **không** `disabled` vì thiếu GPS/frame/session/online; chỉ khóa lúc request chạy; thiếu điều kiện → banner `string[]` khi bấm. Keep prior DEC + Design/SA. Align end: `/align-mobile-to-mfe` · SSOT `CamPatrolPage.tsx` · 430px · no tab/route/icon mới.

## 2. packKind confirm

| | |
|--|--|
| packKind | **`list`** (PO confirm) |
| Kind UI | **Phone Field camera full** — **≠** Kind B desktop catalog |
| Grid AC Kind B | **N/A** — `LinErpListFilterBar` / `DES-GRID-*` **cấm** |
| Report AC | **N/A** |
| formPattern | Mobile **Full page** CP-01 · Android 1-1 · **không** ERP Modal/Slideout |
| typography | label **13** · field ≥**16** · labels `useFormOptions()` / copy key |

## 3. changeScope `edit_page` — Current vs New

| Area | Current (`CamPatrolPage.tsx`) | New (PO chốt) |
|------|------------------------------|---------------|
| Scope | CP-01 shipped · `/camera-tuan` | **edit only** · **cấm** new_page CRUD |
| `#btnDetect` | `disabled={!canDetect}` | chỉ `disabled={detecting}` · thiếu session/GPS/frame/online → banner on click |
| `#btnConfirm` | `disabled={confirming \|\| gpsBlocked \|\| !online}` | chỉ `disabled={confirming}` · fail → banner on click |
| `#btnSkip` | `disabled={confirming}` | giữ |
| capture | `capture="environment"` | giữ |
| score % | ẩn | giữ (**DEC-SCORE**) |
| route stamp | RO ca | giữ RO · mã lạ → `--` · **không** SearchInput |
| APIs / DTO | sessions · detect · detections · incidents | **không đổi** paths (**DEC-DETECT-DTO**) |
| Design / SA | approve prior | **keep** zones · reviewUrl · Live cite |
| align | — | `/align-mobile-to-mfe` · 430 · Mobile.Bff only |

## 4. DoD (đo được)

1. Route std `/camera-tuan` · product `/field/cam` · phone 430 · **cấm** đổi path sang `/web-rmms-cam-patrol`.
2. **CP-01** giữ: finder + stamp Route/Km/`PatrolType` · GPS · Detect · result · Confirm/Skip.
3. **Pattern B HARD:** Detect luôn bật (UI ready) · chỉ `disabled={detecting}` · Confirm chỉ `disabled={confirming}` · **cấm** `canDetect` / `gpsBlocked` / `!online` khóa nút trước bấm.
4. **Client validate on click:** thiếu session / GPS deny / Acc>30 / thiếu frame / offline → banner `string[]` + `validationAttempted` · lookupStatic keys có sẵn · **cấm** `alert.warning` thay banner · **cấm** hardcode VN mới nếu key có.
5. **GPS:** Acc ≤ 30 m cho success path · deny/poor → báo khi bấm · **cấm** fake lat/lng.
6. **Frame:** `ImageBase64` bắt buộc detect · fail toast · **cấm** null / class giả (**DEC-FRAME**).
7. Detect: `POST ai-vision/detect` · Engine=P1 · ImageBase64 + Lat/Lng/AccuracyM (SA cite).
8. Result: kind / surface / actionHint · **cấm** % score (**DEC-SCORE**).
9. Confirm: `POST incident/incidents` · DetectionId · HasGps=true · API fail = toast (không banner API).
10. Skip: dismiss · lock khi `confirming` · không POST.
11. Empty no session / offline: banner on click · **cấm** bịa ca / fake success.
12. Labels: `useFormOptions()` · **cấm** hardcode VN form.
13. BE ONLY WebService Patrol+AiVision+Incident · BFF ONLY Mobile `:5202` · **cấm ERP.*** · **cấm** invent cam-patrol · **cấm** web-bff.
14. Dev (sau): edit `CamPatrolPage` · yarn build PASS · Step 4b N/A · align 430.
15. QA (sau): CTA enabled · missing GPS/frame → banner · detecting/confirming lock · e2e queued.

## 5. CTX / DEM / DI inventory

| ID | Path | Loại |
|----|------|------|
| CTX-01 | `docs/context/features/web-rmms-cam-patrol.md` | feature · § Delta edit |
| CTX-02 | `docs/plan/web-rmms-mobile/SCREENS.md` `/field/cam` | screens |
| CTX-03 | `docs/plan/web-rmms-mobile/SUBMIT-VALIDATE.md` | Pattern B SSOT |
| CTX-04 | `docs/context/features/cam-patrol.md` | peer DES · GAP FRAME/SCORE |
| DEM | — | **N/A** · hash skip · **cấm** crawl |
| DI | — | **no Excel** |
| DA-01 | `specs/_data-analy/features/web-rmms-cam-patrol-control-hint.md` | controlHint · done |
| DA-02 | `specs/_data-analy/features/web-rmms-cam-patrol-real-data.md` | §A+§B PASS |
| CODE | `CamPatrolPage.tsx` | current SSOT edit |
| MFE | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` | web phone |
| BE | `D:/AI-QLBD/Linm.RMMS.WebService` | **cấm ERP.*** |
| BFF | `Linm.RMMS.Mobile.Bff` · `:5202` | mobile-bff only |
| UI keep | `specs/web-rmms-cam-patrol/ui/` | reviewUrl prior |

## 6. Screens (REQUIRED)

| ID | Route | Pattern | FormMode | Actions | Notes |
|----|-------|---------|----------|---------|-------|
| CP-01 | `/field/cam` · std `/camera-tuan` | **Full page** | Create (detect/confirm) | back · getGps · detect · confirm · skip | Pattern B banner · Dirty card → Leave |

**Out:** `/me*` · feedback · `cam-view` · journal/kết ca/tần suất (B–E) · invent `cam-patrol` path · Excel.  
**tabs:** none · **`devSlash`:** `/agent-dev`.

## 7. controlHint (PO chốt — copy DA-01 + Pattern B)

| uiField | screen | controlHint | Required | Notes |
|---------|--------|-------------|----------|-------|
| screenTitle | CP-01 | Text | * | copy key · useFormOptions |
| back | CP-01 | Button/Nav | * | → Field hub |
| finder | CP-01 | CameraViewfinder | * | DES-MOB-CAM-FINDER |
| stamp.route | CP-01 | Text RO | * | GET sessions · không SearchInput |
| stamp.km | CP-01 | Text RO | * | từ ca · **cấm** bịa |
| stamp.patrolType | CP-01 | Text RO / Chip | * | **DEC-ENTRY** |
| stamp.gps | CP-01 | GPS | * | lat,lng · ±accuracyM |
| getGps / lockGps | CP-01 | Button | * | deny → banner **khi bấm** detect/confirm |
| imageBase64 | CP-01 | CameraCapture | * | `capture="environment"` · required detect |
| detect | CP-01 | Button primary | * | Pattern B · chỉ `disabled={detecting}` |
| detection.kind | CP-01 | Text/Chip | — | **không** % score |
| detection.surface | CP-01 | Text | — | DTO |
| detection.actionHint | CP-01 | Text | — | copy key |
| confirm | CP-01 | Button | * | chỉ `disabled={confirming}` |
| skip | CP-01 | Button secondary | — | disabled khi confirming |
| validationBanner | CP-01 | Banner `string[]` | — | Pattern B · **new edit** |
| offlineBanner | CP-01 | Banner | — | **cấm** fake ok |
| emptyNoSession | CP-01 | EmptyState / banner on click | — | **cấm** bịa ca |
| toast.* | CP-01 | Toast | — | API 4xx/5xx · **cấm** banner API |

## 8. Grid AC / Report AC

| AC | Status |
|----|--------|
| DES-GRID / LinErpListFilterBar | **N/A** — phone Field |
| Report AC | **N/A** |
| Mobile Field AC | **PASS** §4 · Pattern B · GPS≤30 · frame · no score % · BFF mobile |

## 9. Leave / Dirty

| Screen | Dirty when | Leave |
|--------|------------|-------|
| CP-01 | Result card mở (chưa confirm/skip) · GPS in-progress | Confirm Leave → discard · **không** POST incident |

## 10. API FormMode ↔ bind (giữ Live · không đổi path)

| Action | Method | Path | Body / note |
|--------|--------|------|-------------|
| Load stamp | GET | `patrol/sessions` | Đang tuần · Route/Km/PatrolType |
| Detect | POST | `ai-vision/detect` | ImageBase64 · Lat · Lng · AccuracyM · Engine=P1 |
| Detection detail | GET | `ai-vision/detections/{id}` | optional |
| Confirm | POST | `incident/incidents` | DetectionId · HasGps=true |

App base: `{BffBase}/mobile-bff/api/v1`. **Cấm** invent `cam-patrol/*`. Field names → SA cite giữ (**DEC-DETECT-DTO**).

## 11. PO decisions (keep + Pattern B)

| id | Decision | Owner next |
|----|----------|------------|
| **DEC-FRAME** (keep) | Frame thật · fail toast · **cấm** fake class | Dev |
| **DEC-SCORE** (keep) | Ẩn % tin cậy ship | Design keep |
| **DEC-ENTRY** (keep) | 1 route CP-01 · stamp PatrolType từ ca | Design keep |
| **DEC-DETECT-DTO** (keep) | ImageBase64+Lat/Lng/AccuracyM+Engine=P1 · DetectionId+HasGps · SA cite Live | SA keep |
| **DEC-PATTERN-B** (new) | Detect/Confirm Pattern B · banner on click · keys lookupStatic có sẵn · **cấm** pre-disable GPS/frame | Design optional banner copy · Dev edit · QA |

## 12. Out of scope (HARD)

- new_page CRUD · Excel toolbar/export
- Me / cam-view / waves B–E
- invent cam-patrol path · ERP.* · web-bff · desktop MFE · iOS/Android
- score % · fake GPS · demo JSON ship
- SearchInput user/route trên CP-01 (stamp RO only)
- re-scan demo (**GAP-PO-DEMO-RESCAN-01**)

## 13. Handoff Design

| Field | Value |
|-------|-------|
| next | `/agent-design` (khi tới lượt · autoApprove ON) |
| write | keep `ui/design.md` + prototype · optional banner copy keys |
| zones | CP-01 keep · DES-MOB-CAM-FINDER · ẩn score · Pattern B banner zone |
| peerStdUrl | `http://localhost:9301/camera-tuan` |
| reviewUrl | keep prior |
| compact | `handoff/po-compact.md` |
| cấm | re-scan demo · implement · e2e · new_page redesign |

## Version meta

`skillVersion=2026.09.05.03` · `schemaVersion=1` · `contentHash=sha256:c46ae5660ccba1b8e64ce8e5294acef77ceb4e0a75474372f2a3d3901efb5796` · `rulesVersion=2026.09.27.1` · `updatedAt=2026-09-27T10:40:00.000Z` · `changeScope=edit_page` · `versionGate=ok`
