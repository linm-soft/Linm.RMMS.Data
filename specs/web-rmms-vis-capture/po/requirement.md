# PO — requirement — web-rmms-vis-capture

| Field | Value |
|-------|-------|
| feature | `web-rmms-vis-capture` |
| title | Nhận diện sự cố |
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
| contentHash | `sha256:f749bc65f84b7bde51beeebaa85e5db22dacc8e8a040a53de30af834fa55c8cd` |
| writtenAt | `2026-09-27T11:15:00.000Z` |
| demo | **N/A** |
| formPattern | Mobile full · phone `max-width: 430px` · Android 1-1 `#sc-vis-capture` · **không** ERP Modal/Slideout Kind B |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| mfeStdRoute | `/chup-hien-truong` |
| mfeStdUrl | `http://localhost:9301/chup-hien-truong` |
| productRoute | `/incident/vis` |
| be | `D:/AI-QLBD/Linm.RMMS.WebService` · AiVision + Incident (+ Patrol cite) · **cấm ERP.*** |
| bff | `Linm.RMMS.Mobile.Bff` · `VITE_MOBILE_API_URL=http://localhost:5202/mobile-bff/api/v1` · **cấm** web-bff client |
| priorAnaly | `_data-analy/features/web-rmms-vis-capture-control-hint.md` · `web-rmms-vis-capture-real-data.md` · hash skip |
| editCite | `docs/plan/web-rmms-mobile/SUBMIT-VALIDATE.md` · Pattern B · `VisCapturePage` |
| taskId | `task_f6dbc931` |
| priorPoTask | `task_82c59634` (new_page · keep DoD) |
| citeTask | `T-W4-04` · `VisCapturePage` |

> Nhãn UI: `useFormOptions()` / copy key — **cấm** hardcode tiếng Việt trên form.  
> **Cấm** typed `new_page` · **cấm** re-scan demo · **cấm** invent slug controller · **cấm** fake GPS · **cấm** itemsOrDemo · **cấm** on-device detect · **cấm** Excel toolbar.  
> **Cấm** path slug `/web-rmms-vis-capture` — SSOT std = `/chup-hien-truong`.

## § Delta Current vs New (edit_page HARD)

| | Current (shipped) | New (this task) |
|--|-------------------|-----------------|
| changeScope | `new_page` prior PASS | `edit_page` · giữ DoD VIS · delta Pattern B |
| mfeStdRoute | notes `/web-rmms-vis-capture` | **SSOT** `/chup-hien-truong` · alias `/incident/vis` → redirect |
| Detect CTA | `disabled={!canDetect}` | Idle **luôn bật** · `disabled` chỉ `detecting` · thiếu GPS/ảnh → bấm → banner |
| Attach CTA | multi-gate detection/GPS/offline | `disabled` chỉ `attaching` · thiếu điều kiện → bấm → banner |
| Skip CTA | `disabled={attaching}` | Giữ — pending only |
| Validate UX | toast / offline; thiếu Pattern B | `validationAttempted` · banner `string[]` + inline · API 4xx → toast |
| GPS | khóa Detect/Attach trước | Deny / Acc>30: **không** khóa nút · bấm mới báo · Acc>30 **vẫn không POST** trong handler |
| Photo | peer `openCapture('vision')` | Giữ · file input local → `capture="environment"` |
| Align cuối | — | `/align-mobile-to-mfe` · SSOT=`VisCapturePage` · **cấm** tab/route/icon mới · **cấm** mở android/ios proto |
| Artifacts | requirement/design/solution PASS | **Giữ** · ghi delta validate · **không** typed new_page |

## 1. Goal / persona / DoD

| | |
|--|--|
| Goal | Giữ màn **Nhận diện sự cố**: PhotoRow + GPS → detect → Attach/Skip — **edit** CTA/validate theo Pattern B (SUBMIT-VALIDATE). |
| Persona | Tuần đường (BDTX) · Tuần kiểm (Khu/VP) — Field; dưới tab Incident. |
| Entry | Banner Incident «Nhận diện» → `/incident/vis` · std `/chup-hien-truong`. |
| DoD P1 | Giữ prior VIS DoD + **Pattern B**: Detect/Attach idle-on · banner on click · Acc≤30 handler · Mobile.Bff · useFormOptions · **không** Me* · **không** fake coords · std route `/chup-hien-truong`. |
| Out P1 | Me*/feedback/cam-view · cam-patrol/det-hitl · journal/kết ca/tồn tại/tần suất (B–E) · invent controller · web-bff · on-device · Excel · new tab/route · typed new_page. |

## 2. Screens / zones

| id | productRoute | std | Surface / zones |
|----|--------------|-----|-----------------|
| VIS | `/incident/vis` | `/chup-hien-truong` | navBack · screenTitle · sectionPhoto · photos · rowLoc · rowAcc · detect · rowClass · rowSev · btnAttach · btnSkip · gpsLock · validationBanner · toast.* · offlineQueue |
| INC-L* | `/incident` | peer `web-rmms-incident` | entry banner · back target |
| CAP* | `/capture` | peer photo-geo | `openCapture('vision')` overlay |

\* Peer: deep-link / entry OK · **không** invent CRUD controller slug này.

**reviewUrl** = giữ Design `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-vis-capture/ui/prototype/index.html`.  
**peerStdUrl** = `http://localhost:9301/chup-hien-truong`.  
**DES-GRID / LinErpListFilterBar** = **N/A** — phone full screen.  
**Prototype zone** = `#sc-vis-capture` · `DES-MOB-VIS-CAPTURE` (giữ · không vẽ icon mới).

## 3. Grid AC (packKind=list)

> packKind=`list` · surface = **full screen capture** (không CardList desktop).

| AC id | Rule | Pass |
|-------|------|------|
| AC-GRID-01 | VIS full screen phone 430 · zones control-hint · **không** LinErpListFilterBar / DES-GRID-* Kind B | N/A desktop HARD |
| AC-GRID-02 | PhotoRow + GPS rows RO trước detect · thiếu ảnh → **không** disable Detect · bấm → banner Pattern B | Pattern B |
| AC-GRID-03 | Detect result: rowClass=`DefectClass` · rowSev=`Severity`+Badge · **cấm** fake class/severity | Live detect DTO |
| AC-GRID-04 | Client fail: validationBanner `string[]` + inline · API fail: toast · **cấm** `window.alert` · **cấm** itemsOrDemo | Pattern B |
| AC-GRID-05 | Attach/Skip CTA · navBack → INC-L · offlineQueue = peer `web-rmms-offline` | nav + peer |

## 4. Capture / Detect / Attach AC (VIS)

| AC id | Rule | Pass |
|-------|------|------|
| AC-VIS-01 | screenTitle «Nhận diện sự cố» · sectionPhoto · navBack «Vấn đề» · nhãn `useFormOptions()` | copy key |
| AC-VIS-02 | photos: camera / `openCapture('vision')` · uploads* · file input → `capture="environment"` | Live uploads* |
| AC-VIS-03 | gpsLock: deny → **không** khóa Detect/Attach · bấm mới banner · **cấm** fake lat/lng | Pattern B GPS |
| AC-VIS-04 | detect: idle `disabled` chỉ `detecting` · POST chỉ khi ảnh+GPS+Acc≤30 (handler) · >30 → banner/toast · **không** POST | Pattern B + Live |
| AC-VIS-05 | rowLoc: GPS + optional `GET patrol/sessions` · empty → GPS-only · thiếu catalog → `--` · **cấm** bịa Route | Live |
| AC-VIS-06 | rowAcc: hiển thị AccuracyM thiết bị | device |
| AC-VIS-07 | btnAttach: idle `disabled` chỉ `attaching` · thiếu detection/GPS/offline → banner on click · POST incidents + DetectionId · HasGps · Title/Type từ DefectClass · Status=new · **không** invent Lat · toast.ok → INC-L | Pattern B + Live |
| AC-VIS-08 | btnSkip: dismiss · `disabled` chỉ `attaching` · back INC-L | skip |
| AC-VIS-09 | Optional `GET ai-vision/detections/{id}` · fail → toast · **cấm** on-device | Live |
| AC-VIS-10 | offlineQueue = peer `web-rmms-offline` · **không** invent OfflineQueueController | peer |
| AC-VIS-11 | `validationAttempted` lần bấm Detect/Attach đầu · banner thu gọn/đóng · API 4xx → toast (không banner API) | Pattern B |
| AC-VIS-12 | Align cuối: SSOT = `VisCapturePage` · std `/chup-hien-truong` · **cấm** mở android/ios proto · **cấm** tab/route/icon mới | ALIGN-01 |

## 5. Leave / Out of scope

| Leave | Note |
|-------|------|
| Me* · feedback · cam-view | Out P1 |
| cam-patrol finder · det-hitl | Out |
| journal / kết ca / tồn tại / tần suất (B–E) | Out pack |
| invent controller/path `web-rmms-vis-capture/*` | SA cite Live |
| ERP.* / web-bff client base | HARD cấm |
| iOS/Android native edit · mở android/ios proto | Web MFE only · ALIGN |
| on-device detect / demo-json / fake GPS / itemsOrDemo | HARD cấm |
| Desktop Kind B grid · Excel export | N/A phone · SUBMIT-VALIDATE |
| typed `new_page` · path `/web-rmms-vis-capture` | edit_page · std `/chup-hien-truong` |
| SearchInput users/routes trên VIS | VIS loc RO · peer BFF users forward ngoài màn |

## 6. FormMode ↔ API

| Mode | API | Notes |
|------|-----|-------|
| Upload | `POST ai-vision/uploads/init` · PUT `{id}/object` · `complete` | media |
| Detect | `POST ai-vision/detect` | Lat/Lng/AccuracyM · handler Acc≤30 · UI Pattern B |
| Detection | `GET ai-vision/detections/{id}` | optional |
| Session | `GET patrol/sessions` | optional Route/Km stamp |
| Attach | `POST incident/incidents` | DetectionId · HasGps · no Lat column |
| Users (peer) | `GET integration/users` | BFF forward nếu thiếu · VIS không picker |
| Routes (peer) | `GET integration/road-routes/search` | đã có · VIS RO |

App base: `{BffBase}/mobile-bff/api/v1`. SA cite Live · **cấm** invent path theo slug · **cấm** ERP.*.

## 7. PO decisions

| id | Decision |
|----|----------|
| TITLE-01 | Copy key title = **«Nhận diện sự cố»** — **closed** prior. |
| PACK-01 | Giữ `packKind=list` · surface full `#sc-vis-capture` — **closed**. |
| changeScope | `edit_page` confirmed · **cấm** typed `new_page`. |
| ROUTE-01 | SSOT std = `/chup-hien-truong` · **cấm** ship path `/web-rmms-vis-capture`. |
| VALIDATE-B | Pattern B per SUBMIT-VALIDATE · Detect/Attach idle-on · banner on click · Acc>30 no POST handler. |
| ALIGN-01 | End `/align-mobile-to-mfe` · SSOT=`VisCapturePage` · giữ reviewUrl path · **không** mở android/ios. |
| Prior closed | DOMAIN-MAP-VIS · DUAL-01 · DETECT-HOST · SESS · PGC-BE-01 · TITLE/PACK — **không reopen** trừ lệch code. |

## 8. UNCLEAR → handoff

| id | Owner | Action |
|----|-------|--------|
| UNCLEAR-VALIDATE-B | Dev/QA | Bỏ `canDetect`/`gpsBlocked` disable · Pattern B · QA re-e2e |
| UNCLEAR-ALIGN-01 | TL/Dev | End align-mobile-to-mfe · SSOT MFE page · cấm android/ios open |

## 9. Handoff Design

| Need | Note |
|------|------|
| Giữ prototype + reviewUrl | Phone 430 · `#sc-vis-capture` · **không** vẽ icon/route mới |
| Delta zones | validationBanner Pattern B · Detect/Attach idle-on note |
| N/A | DES-GRID / LinErpListFilterBar Kind B · Excel |
| Labels | useFormOptions keys only · title «Nhận diện sự cố» |

## Version meta

`skillVersion=2026.09.05.03` · `schemaVersion=1` · `contentHash=sha256:f749bc65f84b7bde51beeebaa85e5db22dacc8e8a040a53de30af834fa55c8cd` · `rulesVersion=2026.09.25.2` · `writtenAt=2026-09-27T11:15:00.000Z` · `changeScope=edit_page` · `taskId=task_f6dbc931` · `autoApprove=ON`
