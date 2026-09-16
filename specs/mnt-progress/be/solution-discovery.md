# SA — Solution — mnt-progress (mobile sheet → screen · Cập nhật trạng thái)

| Field | Value |
|-------|-------|
| feature | `mnt-progress` |
| title | [Mobile] [Công việc] -> Cập nhật trạng thái |
| this role | `sa` · `/agent-sa-mobile` |
| status | `confirmed` |
| solution_confirm | **approve** (`autoApprove=ON` · `task_6dee11eb`) |
| changeScope | `new_page` |
| packKind | **`sheet`** (PO + Design confirm · GAP-MOB-MNT-PROG-PACK-01 **closed** · surface = **full screen** `#sc-mnt-progress` · **cấm** bottom-sheet chrome) |
| stack | `native_dual` |
| Feature Kind | **screen** · `DES-MOB-MNT-PROGRESS` · packKind meta `sheet` · **cấm** Kind A–G web / Grid / Report / invent tab / `mfeStdUrl` |
| thisAction | **Cập nhật trạng thái** `#sc-mnt-progress` only · entry mnt-list `#i-sync` · **cấm** gộp `mnt-chat` / `mnt-log` / `estimate` / web Kind B (`GAP-MOB-ACT-01/02`) |
| domain | **Maintenance** · `WorkOrdersController` progress + complete (+ opt GetById · init-data) · device GPS/camera · **cấm** invent `api/v1/mnt-progress` / `ProgressController` trên Mobile.Bff |
| BackendRoot | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.WebService` · **cấm ERP.*** |
| ios | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.iOS` |
| android | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Android` |
| bff | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Bff` · prefix `mobile-bff/api/v1` |
| prior · design | **confirmed** · `ui/design.md` · `ui/ux-analy.md` · `ui/html-to-native-map.md` · dual `#sc-mnt-progress` · `ui/review/demo-parity.md` · `task_be38de39` |
| prior · po | **confirmed** · `po/requirement.md` · `task_df7a4a8b` |
| prior · data_analy | **confirmed** · `_data-analy/mnt-progress-control-hint.md` · `mnt-progress-bff-endpoints.md` · `mnt-progress-action-tree.md` · `mnt-progress-real-data.md` · contentHash `sha256:mnt-progress-mobile-control-hint-20260829` · realDataHash `sha256:mnt-progress-mobile-real-data-20260829` · bffContentHash `sha256:mnt-progress-mobile-bff-20260829` · actionTreeHash `sha256:mnt-progress-mobile-action-tree-20260829` · ctxContentHash `sha256:7575cc93a9fc1e4c2ac0bdbdc219fdb28db7c6177f83457b747529646244ccec` · demoContentHash `sha256:394ab44597648f04b25e6d58476378c16141feb53d3b58d39923b3defcff8328` |
| autoApprove | **ON** |
| e2eQa | ON — queued QA · `yarn e2e-qa-mobile` · **cấm** role SA chạy e2e / `yarn start:std` / `mfeStdUrl` |
| versionGate | `rechecked` |
| requestSource | run packet `task_6dee11eb` · `/agent-qldb-workflow-mobile` · roleOnly=`sa` · `/agent-sa-mobile` |
| taskId | `task_6dee11eb` |
| confirmedBy | agent autoApprove · `task_6dee11eb` |
| updatedAt | `2026-08-29T06:16:00.000Z` |

**Cấm:** invent `api/v1/mnt-progress` · invent MediaUrl / lat-lng trên `ProgressWorkOrderRequest` · fork DTO · clone ProgressController trên Mobile.Bff · app `:5101` · DbContext trên BFF · parent JSON · ERP.* · `mfeStdUrl` / `yarn start:std` · `localhost` / LAN IP store listing (`GAP-SA-STORE-01`) · claim iPad family `1` · fake toast 200 / fake % / fake lat-lng · system `UIAlert` / `AlertDialog` · watermark Gói · device label · badge P1/P2 header · gộp sibling (`GAP-MOB-ACT-01/02/07`) · start `pending_confirm` (`GAP-MOB-ACT-06`) · re-scan demo · Write MFE/native ở role SA · chạy Step 4b / migration / e2e ở role này.

Standards: api-endpoint · bff-api-structure · company-field · no-parent-json-field · ssot-no-duplicate · sa-implement-gates · ios networking · android api-client · offline-sync · PrivacyInfo / Play Data safety (`GAP-SA-STORE-01`).

---

## Architecture (repo SSOT)

| Layer | Choice |
|-------|--------|
| BackendRoot | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.WebService` · `be_repo_confirm` |
| Domain | Maintenance · `WorkOrdersController` · table `rmms_work_orders` · DTOs `ProgressWorkOrderRequest` · `CompleteWorkOrderRequest` · `WorkOrderDto` |
| API downstream | `POST api/v1/maintenance/work-orders/{id}/progress` · `POST …/{id}/complete` · opt `GET …/{id}` · opt `GET …/init-data` · opt `POST ai-vision/uploads` |
| BFF mobile | `Linm.RMMS.Mobile.Bff` · `MobileApiProxyController` catch-all → `ApiBase` · path `maintenance/*` (`docs/bff-route-map.md`) |
| App | iOS `ApiClient` · Android Retrofit/`ApiService` · base `{BffBase}/mobile-bff/api/v1` · **cấm** URLSession/OkHttp trong View |
| Prefill | nav args từ mnt-list (`id` · title · code · status · progress) và/hoặc `GET maintenance/work-orders/{id}` · thiếu `id` → banner · **chặn** submit |
| GPS | Device CL / Fused · ListRow «Vị trí đã chốt» · deny → `DES-MOB-GPS-DENY` · **vẫn** cho submit **không** GPS · tóm tắt embed → `Note` · **cấm** fake · **cấm** invent lat/lng field |
| Camera | PhotoRow + `#i-camera` still · AVFoundation / CameraX · P1 UX bắt buộc · **không** MediaUrl trên progress body P1 |
| Media optional | `POST ai-vision/uploads` (+ object) nếu Signed/ready · **không** fork Progress DTO (`GAP-MOB-MNT-PROG-MEDIA-01`) |
| Write P1 | `POST …/progress` body `{ ProgressPercent, Note? }` · khi % = 100 / hoàn thành → `POST …/complete` cùng slug |
| Offline | POST fail → toast lỗi · **cấm** fake 200 · offline queue **DEFER** (P1) |
| Persist BE mới | **không** · Step 4b **N/A** — endpoints live Signed |
| Sibling | entry/back `mnt-list` · **cấm** re-own list / estimate / chat / log |
| Out of pack | Kind E summary · comments · WO create/edit · map embed · invent `mnt-progress` path |

### Route decision

| | Choice |
|--|--------|
| Slug | `mnt-progress` → packKind **`sheet`** · surface **screen** `#sc-mnt-progress` · owner `DES-MOB-MNT-PROGRESS` |
| App prefix | `mobile-bff/api/v1` |
| App path P1 read | opt `GET maintenance/work-orders/{id}` · opt `GET …/init-data` (display only · chrome status = mnt-list VN map) |
| App path P1 write | **`POST maintenance/work-orders/{id}/progress`** · **`POST …/{id}/complete`** khi 100%/done |
| App path P1 media | optional `POST ai-vision/uploads` · `PUT …/uploads/{id}/object` — **không** bind MediaUrl progress body |
| Downstream | existing `WorkOrdersController` · **không** dedicated invent ProgressController |
| GPS / camera / toast / leave | Device / local UI — **không** invent API |
| Step 4b | **N/A** — reuse Signed live endpoints · **cấm** `/new-endpoint` / `/database-migration` turn SA |
| Rationale | Live Maintenance progress + complete đủ CTA · BFF proxy passthrough · GPS/photo = device + Note embed · **cấm** invent mobile-only path |

---

## SSOT / anti-duplicate

| Concern | Package / rule | Note |
|---------|----------------|------|
| BFF HTTP | `MobileApiProxyController` catch-all | **cấm** `ProgressController` / `MntProgressController` local trên BFF |
| BE HTTP | `WorkOrdersController` `[Route("api/v1/maintenance/work-orders")]` | live `progress` · `complete` · `GetById` · `GetInitData` |
| Request body (progress) | `ProgressWorkOrderRequest` | `ProgressPercent` * · `Note?` — **không** MediaUrl · **không** Lat/Lng |
| Request body (complete) | `CompleteWorkOrderRequest` | `Note?` · effect `status=done` · `ProgressPercent=100` |
| Response | `ApiResponse<WorkOrderDto>` | toast `{ProgressPercent}%` · refresh badge status VN |
| HTTP app | reuse Maintenance / WorkOrder repository + use cases (peer `mnt-list`) + Progress / Complete use cases | **cấm** raw HTTP trong View |
| Location | `GetCurrentLocationUseCase` · `LocationReading` | allow / deny / unavailable |
| Offline | **no write queue P1** · toast err · DEFER queue | **cấm** full-screen block tab |
| Token | Keychain / EncryptedSharedPreferences | Bearer + company headers |
| Kit chrome | `LinmTopBar` · `LinmListRow` · `LinmTextField` number/slider · `LinmTextArea` · PhotoRow · `LinmIconButton` · `LinmPrimaryButton` · `LinmToast` · Tab shell | Design `kit_missing_confirm` = **N/A** |
| Modals | GPS deny `DES-MOB-GPS-DENY` · leave `DES-MOB-LEAVE` | **cấm** system alert |
| Surfaces | New feature screen · wire entry từ mnt-list `#i-sync` | owner slug = `mnt-progress` |
| Tabs | Shell Tab 5 **giữ** · pack `tabs: none` · tab **`work`** active | **cấm** invent (`GAP-TAB-01`) |
| Status VN | mnt-list map | `new`→Chờ xử lý · `in_progress`→Đang xử lý · `done`→Đã hoàn thành · `cancelled`→Đã hủy · **không** dùng init-data «Mới»/«Đang thực hiện» trên chrome (`GAP-MOB-MNT-PROG-LABEL-01`) |

---

## BFF / API contract (live audit 2026-08-29)

Nguồn: `_data-analy/mnt-progress-bff-endpoints.md` · `mnt-progress-real-data.md` §B · verify `WorkOrdersController` + DTOs · **cấm invent**.

| Action / zone | Method | App `{BffPrefix}` path | Downstream | P1 |
|---------------|--------|------------------------|------------|-----|
| Prefill WO header | GET | `maintenance/work-orders/{id}` | `WorkOrdersController.GetById` | **optional** nếu nav payload đủ |
| Init status labels | GET | `maintenance/work-orders/init-data` | `GetInitData` | optional · **không** thay chrome VN map |
| **Cập nhật tiến độ** | POST | `maintenance/work-orders/{id}/progress` | `Progress` · `ProgressWorkOrderRequest` | **yes** · primary CTA |
| Hoàn thành (100% / done) | POST | `maintenance/work-orders/{id}/complete` | `Complete` · `CompleteWorkOrderRequest` | **yes** · cùng slug |
| Optional media init | POST | `ai-vision/uploads` | `AiVisionUploadsController` | optional · **GAP MEDIA** |
| Optional media object | PUT | `ai-vision/uploads/{id}/object` | uploads | optional |
| GPS chốt | — | — | Device CL / Fused | **không** API |
| Camera capture | — | — | Device camera | **không** API trên progress body |
| Tiến độ % / Ghi chú UI | — | — | local form → body | |
| Nav back / toast / leave | — | — | local UI | |
| Invent mnt-progress API | `mnt-progress` / dedicated invent | — | — | **cấm invent** |

### Progress request (P1)

| Field | Required | Mobile P1 bind |
|-------|----------|----------------|
| `ProgressPercent` | yes (0–100) | field «Tiến độ (%)» · BE `ValidateProgress` → 422 |
| `Note` | opt | «Ghi chú» + GPS tóm tắt nếu có |

### Complete request (cùng slug khi done)

| Field | Mobile P1 |
|-------|-----------|
| `Note` | opt · reuse ghi chú (+ GPS text) |
| Effect | `status=done` · `ProgressPercent=100` |

### Service behavior (live)

| Rule | Effect |
|------|--------|
| WO `status == new` | auto → `in_progress` trên progress |
| `ProgressPercent` out of 0–100 | 422 · toast lỗi · **cấm** fake % |
| WO missing / inactive | 404 · toast · **cấm** fake ok |
| Response | `WorkOrderDto` → toast «Đã cập nhật tiến độ · {n}%» · refresh badge |

### Permissions

| Permission | Scope | Pack này |
|------------|-------|----------|
| `maintenance.work-orders.read` | GET detail / init-data | **reuse** · BE `[RequirePermission]` TODO debt P1 |
| `maintenance.work-orders.update` | POST progress / complete | **reuse** · BE TODO debt P1 |
| `ai-vision` uploads | optional media | **reuse** · no new permission slug |
| comments / summary / WO create-edit | OUT | **cấm** gọi |

**Cấm** thêm controller/permission trên Mobile.Bff · **cấm** invent permission slug mới trên app.

---

## Implement gates (confirm)

| Gate | Decision | Endpoints / surfaces | Skill | Note |
|------|----------|----------------------|-------|------|
| TZ | **tz_na** | **không** form date edit · toast time local display | `/review-timezone-implement` | |
| XCO | **xco_na** | WO scoped current company BE | `/implement-view-cross-company` | |
| SHARE | **share_na** | reuse `rmms_work_orders` + live DTOs · **cấm** parent JSON · **cấm** invent bảng `mnt_progress_*` | `/implement-shared-table` | |
| Offline | **screen mở + toast err** | GET fail → demo SSOT fallback (Design gate) · POST fail → toast · queue **DEFER** | offline-sync | **cấm** full-screen block · **cấm** fake 200/% |
| GPS | **Live loc optional submit** | location row · deny modal · embed Note | — | allow → «đã chốt» · deny → modal · **cấm** fake · submit **không** bắt buộc GPS |
| Camera | **Live capture P1 UX** | PhotoRow `#i-camera` | — | deny/cancel giữ form · **cấm** invent MediaUrl progress body |
| Push | **n/a** | — | — | — |
| Store | **camera + location claim** | PrivacyInfo / Play · Info.plist `NSCameraUsageDescription` + `NSLocationWhenInUseUsageDescription` **đã có** · Android `CAMERA` + `ACCESS_*_LOCATION` **đã có** | — | Dev verify claim trước ship · **cấm** `localhost` / LAN IP · family `1` · **cấm** iPad listing claim |
| Step 4b | **N/A** | endpoints live Signed | — | **không** chạy ở role SA · MEDIA body expand = **DEFER** (không invent turn này) |

AskQuestion (autoApprove=ON · không chờ board): `be_repo_confirm`=`/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.WebService` · `sa_tz_gate=tz_na` · `sa_xco_gate=xco_na` · `sa_shared_table=share_na` · `kit_missing_confirm=n/a` · `solution_confirm=approve` · `2026-08-29T06:16:00.000Z`.

---

## Persist gate (no-parent-json-field)

| | |
|--|--|
| Parent JSON string inventory (BE) | **none** trên pack mobile |
| Child tables this pack (BE) | **reuse** `rmms_work_orders` — **không** invent bảng |
| Client store | screen state · photo local · GPS reading · form dirty |
| Migration | **không** · Step 4b **N/A** |
| T-BE-API | **no (P1)** — progress/complete live đủ · MediaUrl trên Progress **DEFER** · **cấm** invent path |
| T-BE-MIG | **n/a** |

---

## Live vs delta (audit 2026-08-29 / `task_6dee11eb`)

| Surface | Live | SA chốt P1 |
|---------|------|------------|
| `POST …/maintenance/work-orders/{id}/progress` | BE + Mobile.Bff proxy live | **Giữ** · primary CTA |
| `POST …/{id}/complete` | live | **Giữ** · khi 100%/done cùng slug |
| `GET …/{id}` | live | **Optional** prefill nếu nav thiếu |
| `GET …/init-data` | live | optional · chrome VN = mnt-list map |
| `POST ai-vision/uploads` | live | **Optional** · **không** MediaUrl progress body |
| `api/v1/mnt-progress` / ProgressController | **không** | **Cấm** tạo invent slug |
| Screen `#sc-mnt-progress` | Design dual confirmed · native toast stub | **Ship** dual Design kit / form / GPS / PhotoRow / CTA |
| Progress DTO MediaUrl / LatLng | **không** | Device + Note embed · **cấm** invent |
| Tab 5 shell | dưới mnt-list / work | **Giữ** · `tabs: none` pack · tab work active |

---

## Form data analysis (REQUIRED)

| Screen / FormMode | Fields (UI) | Source type | Entity |
|-------------------|-------------|-------------|--------|
| Screen `#sc-mnt-progress` edit | header WO + % + note + PhotoRow + GPS + Cập nhật / complete | nav / GET detail + device GPS/camera + POST progress/complete | WorkOrder |
| Missing WO | banner | local | — |
| GPS deny | modal | local UI | — |
| Leave dirty | modal | local UI | — |

### Field map (ui → dto → store) — khớp real-data §B

| uiField | Label VN | dtoField | Wire | Notes |
|---------|----------|----------|------|-------|
| screenTitle | Cập nhật trạng thái | — | local | `LinmTopBar` 17 · **cấm** badge P1/P2 |
| navBack | Công việc | — | local | `go('mnt-list')` · Android icon-only OK |
| woTitle | (tên CV) | `title` | nav / GET | readonly · 13 / ≥16 |
| woCode | WO-* / CV-* | `code` | same | readonly |
| woStatus | Tình trạng hiện tại | `status` | same | VN mnt-list map |
| progressPct | Tiến độ (%) | `ProgressPercent` | form → POST | 0–100 * |
| note | Ghi chú | `Note` | form → POST | opt · + GPS text |
| photoLabel | Ảnh hiện trường | — | local | SectionLabel 13 |
| photos | Ảnh | — | device · opt uploads | **không** progress body P1 |
| addPhoto | (camera) | — | device camera | `#i-camera` |
| locationRow | Vị trí đã chốt | embed → `Note` | device GPS | ListRow · **cấm** fake |
| btnUpdate | Cập nhật | Progress / Complete | POST | busy · @100 → complete |
| toastOk | Đã cập nhật tiến độ · {n}% | `ProgressPercent` | after 200 | `LinmToast` |
| toastErr | (lỗi mạng / 422) | — | after fail | **cấm** fake ok |
| gpsDeny | Định vị bị tắt | — | modal reuse | form giữ · submit OK |
| bannerMissing | Thiếu công việc… | — | local | chặn Cập nhật |
| actProgress | Cập nhật trạng thái | — | entry | mnt-list `#i-sync` · `go('mnt-progress')` |

**Demo fallback SSOT** (API fail + Design gate): card «Vá mặt đường» · `CV-20260810-0001` · Chờ xử lý · progress `0` · **cấm** fake POST success.

---

## Navigation / action (this pack)

| Control | Behavior P1 | Owner slug |
|---------|-------------|------------|
| mnt-list `#i-sync` | push `#sc-mnt-progress` (thay toast-only) | **owner** `mnt-progress` (entry reuse) |
| Back | `go('mnt-list')` | owner |
| Progress % / Note | form edit | owner · **cấm** enqueue |
| PhotoRow / camera | capture still · optional uploads | owner · **cấm** enqueue |
| GPS location | chốt device · ListRow · Note embed | owner · **cấm** enqueue |
| Cập nhật | POST progress · toast % · refresh badge | owner · **cấm** enqueue |
| Complete path | % = 100 / done → POST complete · toast · back list | owner · **cấm** enqueue |
| GPS deny / leave dirty | modal kit reuse | chrome reuse |
| Tab 5 | shell giữ · work active | **cấm** invent |
| estimate / mnt-chat / mnt-log | **không** ship | siblings |

**Cấm** start sibling `pending_confirm` (`GAP-MOB-ACT-06`) · **cấm** enqueue Cập nhật / fields / camera / GPS (`GAP-MOB-ACT-07`).

---

## GAP chốt (SA)

| ID | Decision |
|----|----------|
| GAP-MOB-MNT-PROG-PACK-01 | **CLOSED** · packKind=`sheet` · surface screen |
| GAP-MOB-MNT-PROG-SCR-01 | **CLOSED** Design dual · Dev ship native screen |
| GAP-MOB-MNT-PROG-NAV-01 | Entry `#i-sync` → push · back `mnt-list` |
| GAP-MOB-MNT-PROG-MEDIA-01 | P1 camera UX · **không** MediaUrl trên progress body · optional uploads · **cấm** invent DTO · Step 4b **N/A** (expand DEFER) |
| GAP-MOB-MNT-PROG-GPS-01 | Device GPS + ListRow · embed `Note` · deny modal · **cấm** fake · **cấm** invent lat/lng |
| GAP-MOB-MNT-PROG-LABEL-01 | Chrome VN = mnt-list map · init-data **không** thay |
| GAP-MOB-MNT-PROG-DONE-01 | Cùng slug · progress bình thường · 100%/done → `POST complete` |
| GAP-MOB-MNT-PROG-DATA-01 | BFF paths = live Maintenance only |
| GAP-MOB-BFF-01 | **Không** — proxy catch-all đủ |
| GAP-MOB-REAL-01 | §B = BFF table only |
| GAP-TAB-01 | Tab 5 shell **giữ** · pack `tabs: none` |
| GAP-MOB-ACT-01/02/05/06/07 | 1 slug · không gộp sibling · kit map · không enqueue |
| GAP-MOB-ALIGN-01 | iOS + Android cùng copy · Android back icon-only OK |
| GAP-SA-STORE-01 | Camera + location **đã declare** · Dev verify PrivacyInfo/Play · **cấm** localhost/LAN · no iPad listing claim |
| Step 4b / T-BE-* | **N/A** P1 · **không** chạy turn SA |

---

## Client architecture (TL/Dev)

| Layer | iOS | Android |
|-------|-----|---------|
| Feature UI | `Presentation/Features/MntProgress/*` (screen + form + PhotoRow + GPS + modals) | `presentation/feature/mntprogress/*` |
| Entry wire | `MntList*` `#i-sync` toast → push | same |
| Use case | `GetWorkOrderUseCase` (opt) · `ProgressWorkOrderUseCase` · `CompleteWorkOrderUseCase` · `GetCurrentLocationUseCase` · camera capture · optional uploads | same |
| Location | `CoreLocationReader` | `AndroidLocationReader` |
| Camera | AVFoundation still | CameraX ImageCapture |
| Repo | `WorkOrderRepository*` (peer mnt-list) + progress/complete methods · optional AiVision uploads | same |
| Mapper / copy | `MntProgressCopy` VN SSOT Design · status map mnt-list | same |
| State | woId · title · code · status · progressPct · note · photos · gps · busy · dirty · showGpsDeny · showLeave · missingId | same |
| Shell | `AppRouter` work tab dưới screen | `MainTabScreen` / nav host |
| Store | camera + location already · verify PrivacyInfo/Play | same |
| DI | `AppContainer` | Hilt |

**Cấm** WebView HTML · watermark Gói · device label · native alert · invent mnt-progress API slug · invent MediaUrl/lat-lng trên Progress DTO.

### Delta Dev (role sau — không implement turn SA)

1. Ship screen dual theo Design / html-to-native-map / copy VN / PhotoRow / GPS / CTA.
2. Prefill nav / GET detail · missing-id banner · GPS live · deny modal · leave dirty.
3. POST progress · toast % · refresh badge · @100/done → POST complete · back list · **cấm** fake 200/%.
4. Wire mnt-list `#i-sync` entry (thay toast-only) · **cấm** sibling surfaces.
5. Optional uploads nếu Signed — **không** bind MediaUrl progress body.
6. Verify camera/location privacy claims · Play Data safety.
7. Verify builds: xcodegen + xcodebuild dest **iPhone 17 Pro** · `assembleDebug` · BFF `dotnet build`.

### Tasks đề xuất (TL)

| ID | Owner | Note |
|----|-------|------|
| `T-IOS-MNT-PROG` | Dev iOS | screen + form + GPS + PhotoRow + progress/complete + entry wire |
| `T-AND-MNT-PROG` | Dev Android | parity dual + CameraX still + Fused GPS |
| `T-BE-MNT-PROG-MEDIA` | T-BE | **DEFER** — chỉ nếu Signed cần MediaUrl trên Progress · **cấm** invent path riêng turn này |
| `T-BFF-*` | — | **n/a** · proxy catch-all đủ |
| `T-BE-MIG` | — | **n/a** |

---

## Handoff → TL

| Field | Value |
|-------|-------|
| feature / packKind | `mnt-progress` / **`sheet`** (surface **screen**) |
| solution_confirm | **approve** |
| BFF | `GET maintenance/work-orders/{id}` opt · `POST …/progress` live · `POST …/complete` live · opt uploads · **GAP MEDIA/GPS** path giữ · Step 4b **N/A** |
| Tasks đề xuất | `T-IOS-MNT-PROG` · `T-AND-MNT-PROG` · `T-BE-MNT-PROG-MEDIA` (DEFER) |
| Kit | reuse TopBar / ListRow / TextField / TextArea / PhotoRow / IconButton / Primary / Toast · GPS deny + leave reuse |
| Delta Dev | screen · form · GPS · PhotoRow · progress/complete · dual parity · entry wire |
| Verify (Dev) | iOS `xcodegen` + `xcodebuild` dest **iPhone 17 Pro** · Android `assembleDebug` · BFF `dotnet build` |
| Next slash | `/agent-tl-mobile` |
| Chain this turn | **không** (roleOnly=`sa` · GAP-PKT-ROLE-01) |
| e2eQa | ON khi QA · `yarn e2e-qa-mobile` · **cấm** mfeStdUrl / e2e ở SA |

---

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-sa-mobile |
| skillVersion | 2026.08.25.01 |
| schemaVersion | 2 |
| workflowVersion | 2026.08.25.01 |
| rulesVersion | 2026.08.25.2 |
| generatedAt | `2026-08-29T06:16:00.000Z` |
| versionGate | rechecked |
| contentHash | sha256:mnt-progress-mobile-control-hint-20260829 |
| realDataHash | sha256:mnt-progress-mobile-real-data-20260829 |
| bffContentHash | sha256:mnt-progress-mobile-bff-20260829 |
| actionTreeHash | sha256:mnt-progress-mobile-action-tree-20260829 |
| ctxContentHash | sha256:7575cc93a9fc1e4c2ac0bdbdc219fdb28db7c6177f83457b747529646244ccec |
| demoContentHash | sha256:394ab44597648f04b25e6d58476378c16141feb53d3b58d39923b3defcff8328 |
| taskId | `task_6dee11eb` |

---
<!-- Version meta: skillId=agent-sa-mobile skillVersion=2026.08.25.01 schemaVersion=2 workflowVersion=2026.08.25.01 rulesVersion=2026.08.25.2 versionGate=rechecked -->
