# SA — Solution — cam-view (Camera xem)

| Field | Value |
|-------|-------|
| feature | `cam-view` |
| title | [Mobile] Camera xem |
| this role | `sa` · `/agent-sa-mobile` |
| status | `confirmed` |
| solution_confirm | **approve** (`autoApprove=ON` · `task_3d3bd784`) |
| changeScope | `new_page` |
| packKind | **`screen`** (PO + Design confirm · GAP-MOB-CAMVIEW-PACK-01 **closed** · **cấm** sheet chrome / `#sheet-*`) |
| stack | `native_dual` |
| Feature Kind | **screen** · `DES-MOB-CAM-VIEW` · **cấm** Kind A–G web / Grid / Report / invent tab |
| thisAction | **Camera xem** only · entry reuse `me` row «Camera xem» + ops/home chip «Camera tuyến» · **cấm** gộp `camera-connect` / `cam-patrol` / `vis-capture` (`GAP-MOB-ACT-01/02`) |
| domain | **Camera** list + snapshot + events (read-only view) · **không** device cam / GPS · **cấm** invent `api/v1/cam-view` / `CamViewController` |
| BackendRoot | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.WebService` · **cấm ERP.*** |
| ios | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.iOS` |
| android | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Android` |
| bff | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Bff` · prefix `mobile-bff/api/v1` |
| prior · design | **confirmed** · `ui/design.md` · `ui/ux-analy.md` · `ui/html-to-native-map.md` · dual proto · `ui/review/demo-parity.md` · `task_a3c2af87` |
| prior · po | **confirmed** · `po/requirement.md` · `task_317a47d9` |
| prior · data_analy | **confirmed** · `_data-analy/cam-view-*.md` · contentHash `sha256:cam-view-control-hint-20260829` · realDataHash `sha256:cam-view-real-data-20260829` · bffContentHash `sha256:cam-view-mobile-bff-20260829` · actionTreeHash `sha256:cam-view-action-tree-20260829` |
| autoApprove | **ON** |
| e2eQa | ON khi QA · `yarn e2e-qa-mobile` · **cấm** `yarn start:std` / `mfeStdUrl` / e2e ở role SA |
| version_mismatch_action | **recheck_new** — stamp SSOT workflow `2026.08.29.1` · rules `2026.08.29.5` (design stamped older `2026.08.25.*` · contentHash khớp) |
| versionGate | `rechecked` |
| taskId | `task_3d3bd784` |
| confirmedBy | agent autoApprove · `task_3d3bd784` |
| updatedAt | `2026-08-29T17:55:00.000Z` |

**Cấm:** invent `api/v1/cam-view` · invent path ngoài BFF table · clone domain controller trên Mobile.Bff · app `:5101` · ERP.* · `mfeStdUrl` / `yarn start:std` · system `UIAlert` / `AlertDialog` · fake Base64 / SpeedKmh / Plate · credentials `connect/snapshot` trên app · AVCapture / CameraX finder · RTSP/WebRTC P1 · watermark Gói · device label · Write MFE/native ở role SA · chạy Step 4b / migration / e2e ở role này · gộp sibling (`GAP-MOB-ACT-01/02/07`) · re-scan demo (`hash skip`).

Standards: api-endpoint · bff-api-structure · company-field · no-parent-json-field · sa-implement-gates · ios networking · android api-client · offline-sync · PrivacyInfo / Play Data safety (`GAP-SA-STORE-01`).

---

## Architecture (repo SSOT)

| Layer | Choice |
|-------|--------|
| BackendRoot | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.WebService` · `be_repo_confirm` |
| Domain | Camera `CamerasController` — GetList · SnapshotById · Events |
| API downstream | `GET cameras` live · `POST cameras/{id}/snapshot` live · `GET cameras/events` live |
| BFF mobile | `Linm.RMMS.Mobile.Bff` · `MobileApiProxyController` catch-all → `ApiBase` |
| App | iOS + Android · base `{BffBase}/mobile-bff/api/v1` · **cấm** URLSession/OkHttp trong View |
| Pick cam P1 | `GET cameras` `page=1` `pageSize=20` · client **first** `Online=true` ∧ `IsActive=true` · **không** picker UI (`GAP-MOB-CAMVIEW-PICK-01`) |
| JPEG | `POST cameras/{id}/snapshot` · bind `Base64` · `ContentType` · `CapturedAt` · gate `Ok` |
| Events | `GET cameras/events?limit=20` · optional `host=` = `CameraDeviceDto.Host` cam đang xem |
| Làm mới | re-POST snapshot + re-GET events · toast OK / fail |
| GPS | **n/a** — không stamp GPS trên màn này |
| Camera device | **no** — JPEG từ domain snapshot · **không** AVCapture / CameraX |
| Offline | Fail GET/POST / mất sóng → toast · giữ placeholder / list cũ · **cấm** fake 200 · **không** OfflineQueue P1 |
| Persist BE mới | **không** — schema CameraDevice / CameraEvent **DONE** (`camera-connect`) · Step 4b **Skip** |
| Sibling | entry `me` / ops-home chip · **cấm** re-own `camera-connect` / `cam-patrol` / `vis-capture` |
| Out of pack | HW CRUD · connect/test · connect/snapshot credentials · wall · live/start RTSP · ingest webhook · invent tab |

### Route decision

| | Choice |
|--|--------|
| Slug | `cam-view` → **screen** · owner `DES-MOB-CAM-VIEW` |
| App prefix | `mobile-bff/api/v1` |
| App path P1 list | `GET cameras` — pick first Online∧IsActive |
| App path P1 optional | `GET cameras/{id}` — optional reload |
| App path P1 JPEG | `POST cameras/{id}/snapshot` — load + Làm mới |
| App path P1 events | `GET cameras/events` — section Sự kiện |
| Downstream | existing `CamerasController` · **không** dedicated `CamViewController` |
| GPS / device cam | **N/A** |
| Step 4b | **Skip** — schema DONE · **cấm** SA chạy `/new-endpoint` / `/database-migration` |
| Rationale | BFF table + real-data §B khớp live Camera domain · read-only view · P1 JPEG poll only · no invent path |

---

## SSOT / anti-duplicate

| Concern | Package / rule | Note |
|---------|----------------|------|
| BFF HTTP | `MobileApiProxyController` catch-all | **cấm** `CamViewController` local trên BFF |
| BE HTTP | `CamerasController` (`api/v1/cameras`) | live GetList · SnapshotById · Events |
| Response DTO (device) | `CameraDeviceDto` / paged | `Id` · `Code` · `Name` · `ModelCode` · `Host` · `Online` · `IsActive` · `RoadRouteCode` · `KmMark` · … |
| Response DTO (snapshot) | `CameraSnapshotResponse` | `Ok` · `Message` · `ContentType` · `Base64` · `Source` · `CapturedAt` |
| Response DTO (event) | `CameraEventDto` | `Id` · `At` · `Plate` · `SpeedKmh` · `VehicleType` · `Color` · `Direction` · `Source` · `CameraHost` · `RawKind` · `CameraDeviceId?` |
| HTTP app | new `CameraRepository*` + use cases list/snapshot/events | **cấm** raw HTTP trong View · **cấm** fork DTO khác BFF |
| Location | — | **n/a** this pack |
| Offline queue | — | **n/a** P1 — toast only · **cấm** fake |
| Token | Keychain / EncryptedSharedPreferences | Bearer + company headers |
| Kit chrome | `LinmTopBar` · SectionLabel · ImageCard/MediaPreview · `LinmListRow` · EmptyState · `LinmToast` · Tab shell | Design `kit_missing_confirm` = **none** |
| Modals | — | **cấm** system alert · fail = toast |
| Surfaces | New feature screen · wire entry từ `me` / chip | owner slug = `cam-view` |
| Tabs | Shell Tab 5 **giữ** · pack `tabs: none` · tab **`me`** (Tôi) active | **cấm** invent (`GAP-TAB-01`) |

---

## BFF / API contract (live audit 2026-08-29)

| Action | App path | BFF | Downstream | Live |
|--------|----------|-----|------------|------|
| Load cam / pick | `GET cameras` | proxy | `CamerasController.GetList` | **PASS** |
| Optional by id | `GET cameras/{id}` | proxy | GetById | **PASS** · optional |
| JPEG preview / Làm mới | `POST cameras/{id}/snapshot` | proxy | `SnapshotById` · CaptureJPEG stored device | **PASS** |
| Sự kiện list | `GET cameras/events` | proxy | `Events` · `CameraEventDto` | **PASS** |
| Toast / Empty / pick | — | — | local UI | **N/A** API |
| Invent cam-view API | `cam-view` / dedicated invent | — | — | **cấm invent** |
| OUT credentials snapshot | `POST cameras/connect/snapshot` | — | — | **OUT** mobile |
| OUT CRUD / live / wall | `POST/PUT/DELETE cameras*` · `live/start` · wall | — | — | **OUT** · web `camera-connect` |

### Query params

#### GET `cameras`

`search` · `online` · `page` · `pageSize`  
Mobile P1: `page=1` · `pageSize=20` · client filter first `Online=true` ∧ `IsActive=true` (có thể gửi `online=true` nếu BE hỗ trợ — Dev khớp live GetList).

#### GET `cameras/events`

| Param | P1 |
|-------|-----|
| `limit` | `20` (BE default 40) |
| `host` | optional = `Host` cam đang xem |

### Snapshot response gate

| Condition | Behavior |
|-----------|----------|
| `Ok=true` + Base64 | Decode JPEG · bind card · caption ModelCode + CapturedAt local HH:mm |
| `Ok=false` / empty Base64 | Giữ placeholder `#i-video` · toast `Message` hoặc copy fail · **cấm** fake |
| HTTP fail / offline | Toast mất sóng / lỗi · **cấm** fake 200 |

### Event row bind (dual parity — GAP-MOB-CAMVIEW-DUAL-01 CLOSED)

| Row type | Title | Sub |
|----------|-------|-----|
| Speed | «Tốc độ {SpeedKmh} km/h» | `{HH:mm}` · optional «làn …» / `Direction` |
| Plate | «Phát hiện biển {Plate}» | `{HH:mm}` · `RawKind` optional |

Android **bắt buộc** ship cả 2 kiểu row + lane sub như iOS. Empty events → section + empty list (**không** invent).

### Permissions

| Permission | Scope | Pack này |
|------------|-------|----------|
| `camera.devices.read` | GET list / events / snapshot-by-id | **reuse** · BE stub debt P1 OK |
| create/update/delete / connect | OUT | **cấm** gọi |

**Cấm** thêm controller/permission trên Mobile.Bff · **cấm** invent permission slug mới trên app.

---

## Implement gates (confirm)

| Gate | Decision | Endpoints / surfaces | Skill | Note |
|------|----------|----------------------|-------|------|
| TZ | **tz_na** | **không** form date edit · `CapturedAt` / `At` display local HH:mm | `/review-timezone-implement` | |
| XCO | **xco_na** | company filter BE list | `/implement-view-cross-company` | |
| SHARE | **share_na** | reuse `rmms_camera_devices` + `rmms_camera_events` **đã có** · **cấm** parent JSON · **cấm** invent bảng `cam_view_*` | `/implement-shared-table` | |
| Offline | **screen mở + toast** | GET/POST fail → toast · empty/placeholder · **cấm** fake JPEG/events · **không** OfflineQueue P1 | offline-sync | **cấm** full-screen block |
| GPS | **n/a** | — | — | tech factors DA |
| Camera | **n/a device** | JPEG domain only | — | **cấm** AVCapture/CameraX · **cấm** claim camera permission mới cho pack này |
| Push | **n/a** | — | — | |
| Store | **no new cam/loc claim** | PrivacyInfo / Play **không** thêm camera/location cho view JPEG remote · family `1` · **cấm** iPad listing · **cấm** `localhost` / LAN IP in solution | — | `GAP-SA-STORE-01` |
| Step 4b | **Skip** | schema Camera DONE | — | **không** chạy ở role SA |

AskQuestion (autoApprove=ON · không chờ board): `be_repo_confirm`=`/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.WebService` · `sa_tz_gate=tz_na` · `sa_xco_gate=xco_na` · `sa_shared_table=share_na` · `kit_missing_confirm=none` · `solution_confirm=approve` · `version_mismatch_action=recheck_new` · `2026-08-29T17:55:00.000Z`.

---

## Persist gate (no-parent-json-field)

| | |
|--|--|
| Parent JSON string inventory (BE) | **none** trên pack mobile |
| Child tables this pack (BE) | **reuse** `CameraDevice` / `rmms_camera_devices` + `CameraEvent` / `rmms_camera_events` — **không** invent bảng |
| Client store | screen state (selected device · JPEG bytes · events list · busy · toasts) |
| Migration | **không** — Step 4b Skip |
| T-BE-API | **n/a** — paths live · **cấm** invent |
| T-BE-MIG | **n/a** — **cấm** invent `rmms_cam_view` |

---

## Live vs delta (audit 2026-08-29 / `task_3d3bd784`)

| Surface | Live | SA chốt P1 |
|---------|------|------------|
| `GET …/cameras` | BE + Mobile.Bff proxy live | **Giữ** · pick first Online∧IsActive |
| `POST …/cameras/{id}/snapshot` | live SnapshotById | **Giữ** · JPEG card bind |
| `GET …/cameras/events` | live | **Giữ** · speed + plate rows · optional host |
| `api/v1/cam-view` / CamViewController | **không** | **Cấm** tạo invent slug |
| Screen `#sc-cam-view` | stub / missing native | **Ship** dual Design kit / JPEG / events / Làm mới |
| Device finder / RTSP | — | **OUT** P1 · GAP-MOB-CAMVIEW-LIVE-01 |
| Tab 5 shell | me active | **Giữ** · `tabs: none` pack |
| Dual Android events | Design CLOSED | **2 rows** + lane · **cấm** 1-row Android |

---

## Form data analysis (REQUIRED)

| Screen / FormMode | Fields (UI) | Source type | Entity |
|-------------------|-------------|-------------|--------|
| Screen `#sc-cam-view` | TopBar + JPEG card + Sự kiện rows + Làm mới | GET cameras + POST snapshot + GET events | CameraDevice + CameraSnapshot + CameraEvent |
| EmptyState | no Online cam | local UI | — |

### Field map (ui → dto → store) — khớp real-data §B + controlHint

| uiField | Label VN | dtoField | Wire | Notes |
|---------|----------|----------|------|-------|
| navBack | Tôi | — | local | `go('me')` · Android icon-only OK |
| title | Camera xem | — | local | `LinmTopBar` |
| btnRefresh | Làm mới | — | re-POST snapshot + re-GET events | toast OK/fail |
| jpegCard | Ảnh JPEG · {ModelCode} | `Base64` · `ContentType` · `ModelCode` | POST snapshot + device | placeholder `#i-video` |
| jpegUpdated | Cập nhật {HH:mm} | `CapturedAt` | snapshot | local TZ · **13** |
| sectionEvents | Sự kiện | — | local | SectionLabel **13** |
| rowEventSpeed | Tốc độ {n} km/h | `SpeedKmh` · `At` · `Direction` | GET events | dual + lane |
| rowEventPlate | Phát hiện biển {Plate} | `Plate` · `At` · `RawKind` | GET events | dual **bắt buộc** |
| toastRefresh | Đã làm mới ảnh | — | local after OK | `LinmToast` |
| toastFail | Không tải được ảnh / sự kiện / Mất sóng | `Message` / network | local | **cấm** fake |
| emptyCam | Chưa có camera Online | — | after GET empty / no Online | EmptyState |

**Demo fallback SSOT** (Design mock only — **không** ship fake API): Model `iDS-TCM403` · `08:41` · `Tốc độ 72 km/h` · `P.127` — chỉ khi Design proto; runtime **bind live** hoặc empty/placeholder.

---

## Navigation / action (this pack)

| Control | Behavior P1 | Owner slug |
|---------|-------------|------------|
| `me` row **Camera xem** `#i-video` | push `#sc-cam-view` | **owner** `cam-view` (entry reuse) |
| ops/home chip **Camera tuyến** | cùng route | owner (`shared_action` · **không** enqueue) |
| On appear | GET cameras → pick → POST snapshot + GET events | owner · **cấm** enqueue |
| Làm mới | re-POST + re-GET · toast | owner · **cấm** enqueue (`GAP-MOB-ACT-07`) |
| Event rows | display only · **không** detail route P1 | owner |
| Back | `go('me')` | owner |
| Tab 5 | shell giữ · **me** active | **cấm** invent |
| camera-connect / cam-patrol / vis-capture | **không** ship | siblings |

**Cấm** start sibling `pending_confirm` (`GAP-MOB-ACT-06`) · **cấm** enqueue Làm mới / JPEG / events (`GAP-MOB-ACT-07`).

---

## GAP chốt (SA)

| ID | Decision |
|----|----------|
| GAP-MOB-CAMVIEW-SCR-01 | Ship screen dual `#sc-cam-view` |
| GAP-MOB-CAMVIEW-JPEG-01 | Bind snapshot Base64 · ModelCode · CapturedAt |
| GAP-MOB-CAMVIEW-EVT-01 | Events list speed + plate |
| GAP-MOB-CAMVIEW-REF-01 | Làm mới = re-POST + re-GET + toast |
| GAP-MOB-CAMVIEW-DATA-01 | GET cameras · POST snapshot · GET events via Mobile.Bff only |
| GAP-MOB-CAMVIEW-PICK-01 | **CLOSED** · first Online∧IsActive · EmptyState · **không** picker P1 |
| GAP-MOB-CAMVIEW-DUAL-01 | **CLOSED** Design · Android 2 rows + lane |
| GAP-MOB-CAMVIEW-PACK-01 | **CLOSED** · packKind=`screen` |
| GAP-MOB-CAMVIEW-LIVE-01 | **OUT P2** · JPEG only · **cấm** RTSP/WebRTC P1 |
| GAP-MOB-BFF-01 | **Không** — proxy catch-all đủ Camera paths |
| GAP-MOB-REAL-01 | §B = BFF table only · **cấm** invent cam-view |
| GAP-TAB-01 | Tab 5 shell **giữ** · pack `tabs: none` · me active |
| GAP-MOB-ACT-01/02/05/06/07 | 1 slug · không gộp sibling · kit đã có · không enqueue |
| GAP-SA-STORE-01 | **Không** thêm camera/location claim · **cấm** localhost/LAN · no iPad listing |
| Step 4b / T-BE-* | **Skip / n/a** — không chạy turn SA |

---

## Client architecture (TL/Dev)

| Layer | iOS | Android |
|-------|-----|---------|
| Feature UI | `Presentation/Features/CamView/*` (screen · JPEG card · events · empty) | `presentation/feature/camview/*` |
| Entry wire | `Me*` row push · ops/home chip jump | same |
| Use case | `FetchCamerasUseCase` · `FetchCameraSnapshotUseCase` · `FetchCameraEventsUseCase` (new) | same |
| Repo | new `CameraRepository*` → BFF `cameras*` | same |
| Mapper / copy | `CamViewCopy` VN SSOT Design · LinmCopy keys | same |
| State | selectedDevice? · jpegBase64? · capturedAt? · events · busy · toast · empty | same |
| Shell | `AppRouter` me tab dưới screen | `MainTabScreen` / nav host |
| Store | **không** declare camera/location mới cho pack này | same |
| DI | `AppContainer` | Hilt |

**Cấm** WebView HTML · watermark Gói · device label · native alert · invent cam-view API slug · device finder.

### Delta Dev (role sau — không implement turn SA)

1. Ship screen dual theo Design / html-to-native-map / copy VN / JPEG MediaPreview / 2 event rows + lane.
2. GET cameras → pick first Online∧IsActive → POST snapshot + GET events · EmptyState khi none.
3. Làm mới · toast OK/fail · **cấm** fake Base64/events.
4. Wire `me` entry + chip shared_action · **cấm** sibling surfaces.
5. Verify builds: xcodegen + xcodebuild dest **iPhone 17 Pro** · `assembleDebug` · BFF `dotnet build` (nếu không Write BFF → build verify optional).

### Tasks đề xuất (TL)

| ID | Owner | Note |
|----|-------|------|
| `T-IOS-CAM-VIEW` | Dev iOS | screen + Camera repo/use cases + JPEG decode + events + entry wire |
| `T-AND-CAM-VIEW` | Dev Android | parity dual (2 event rows + lane) + same API |
| `T-BE-*` | — | **n/a** · paths live · Step 4b Skip |
| `T-BFF-*` | — | **n/a** · proxy catch-all đủ |

---

## Handoff → TL

| Field | Value |
|-------|-------|
| feature / packKind | `cam-view` / **`screen`** |
| solution_confirm | **approve** |
| BFF | `GET cameras` live · `POST cameras/{id}/snapshot` live · `GET cameras/events` live · Step 4b **Skip** |
| Tasks đề xuất | `T-IOS-CAM-VIEW` · `T-AND-CAM-VIEW` |
| Kit | reuse TopBar / ListRow / Toast / EmptyState · ImageCard/MediaPreview app surface (`kit_missing` **none**) |
| Delta Dev | screen · pick Online · JPEG · events dual · Làm mới · entry me/chip · no device cam/GPS |
| Verify (Dev) | iOS `xcodegen` + `xcodebuild` dest **iPhone 17 Pro** · Android `assembleDebug` · BFF `dotnet build` nếu đụng |
| Next slash | `/agent-tl-mobile` |
| Chain this turn | **không** (roleOnly=`sa` · GAP-PKT-ROLE-01) |
| e2eQa | ON khi QA · `yarn e2e-qa-mobile` · **cấm** mfeStdUrl / e2e ở SA |

---

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-sa-mobile |
| skillVersion | 2026.08.20.03 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.29.1 |
| rulesVersion | 2026.08.29.5 |
| generatedAt | `2026-08-29T17:55:00.000Z` |
| versionGate | rechecked |
| contentHash | sha256:cam-view-control-hint-20260829 |
| realDataHash | sha256:cam-view-real-data-20260829 |
| bffContentHash | sha256:cam-view-mobile-bff-20260829 |
| actionTreeHash | sha256:cam-view-action-tree-20260829 |

---
<!-- Version meta: skillId=agent-sa-mobile skillVersion=2026.08.20.03 schemaVersion=1 workflowVersion=2026.08.29.1 rulesVersion=2026.08.29.5 versionGate=rechecked -->
