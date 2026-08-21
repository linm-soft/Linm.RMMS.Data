# SA — Solution — patrol-pin (Ghim vị trí hiện tại)

| Field | Value |
|-------|-------|
| feature | `patrol-pin` |
| title | [Mobile] [Tuần đường] -> Ghim vị trí hiện tại |
| this role | `sa` · `/agent-sa-mobile` |
| status | `confirmed` |
| solution_confirm | **approve** (`autoApprove=ON` · `task_688fe507`) |
| changeScope | `new_page` |
| packKind | **`sheet`** (PO + Design confirm) |
| stack | `native_dual` |
| Feature Kind | **sheet/CTA** · `DES-MOB-CI-PIN-HERE` · **cấm** Kind A–G web / Grid / Report / full hub AC |
| thisAction | **Ghim vị trí hiện tại** only · hub + map reuse · **cấm** gộp form check-in |
| domain | **Patrol** sessions read · device GPS · **cấm** `PatrolPinController` / invent `api/v1/patrol-pin` |
| BackendRoot | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.WebService` · **cấm ERP.*** |
| ios | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.iOS` |
| android | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Android` |
| bff | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Bff` · prefix `mobile-bff/api/v1` |
| prior · design | **confirmed** · `ui/design.md` · `ui/ux-analy.md` · `ui/review/demo-parity.md` · dual proto · `task_463367a8` |
| prior · po | **confirmed** · `po/requirement.md` · `task_6bd56781` |
| prior · data_analy | **confirmed** · `_data-analy/patrol-pin-*.md` · contentHash `sha256:patrol-pin-control-hint-20260821` · bffContentHash `sha256:patrol-pin-mobile-bff-20260821` |
| autoApprove | **ON** |
| e2eQa | ON khi QA · `yarn e2e-qa-mobile` · **cấm** `yarn start:std` / `mfeStdUrl` |
| versionGate | `rechecked` |
| taskId | `task_688fe507` |
| confirmedBy | agent autoApprove · `task_688fe507` |
| updatedAt | `2026-08-21T03:33:43.000Z` |

**Cấm:** invent `api/v1/patrol-pin` · `POST …/pins` · `POST …/check-ins` P1 trên pack · clone `PatrolSessionsController` trên Mobile.Bff · app `:5101` · ERP.* · `mfeStdUrl` / `yarn start:std` · system `UIAlert` / `AlertDialog` · fake lat/lng · gộp form **Ghi điểm tuần** (`GAP-MOB-ACT-02`) · watermark Gói · device label.

Standards: api-endpoint · bff-api-structure · company-field · no-parent-json-field · sa-implement-gates · ios networking · android api-client · offline-sync · PrivacyInfo / Play Data safety (`GAP-SA-STORE-01`).

---

## Architecture (repo SSOT)

| Layer | Choice |
|-------|--------|
| BackendRoot | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.WebService` · `be_repo_confirm` |
| Domain | Patrol `PatrolSessionsController` · **không** RMMS `patrol-pin` controller |
| API downstream | `PatrolSessionsController.GetList` → `GET api/v1/patrol/sessions` |
| BFF mobile | `Linm.RMMS.Mobile.Bff` · `MobileApiProxyController` catch-all → `ApiBase` |
| App | iOS `FetchPatrolSessionsUseCase` + `GetCurrentLocationUseCase` · Android same · base `{BffBase}/mobile-bff/api/v1` |
| Route / toast | Client filter status «Đang tuần» · bind `Route` → toast · empty/fail → demo `QL.1 · Km 1561+134` |
| GPS fix | iOS `CoreLocationReader` · Android `AndroidLocationReader` · **không** API pin P1 |
| Persist BE | **không** bảng mới · **không** `/database-migration` · **không** `/new-endpoint` |
| Sibling | handoff callback `patrol-checkin` · **cấm** ship form / POST check-ins |
| Out of pack | invent pin API · Kind E check-ins P1 · invent tab · native alert |

### Route decision

| | Choice |
|--|--------|
| Slug | `patrol-pin` → **sheet/CTA** · owner `DES-MOB-CI-PIN-HERE` trên hub + map |
| App prefix | `mobile-bff/api/v1` |
| App path P1 | **chỉ** `GET patrol/sessions` (Bearer) |
| Downstream | `PatrolSessionsController.GetList` · query `search` · `status` · `route` · `page` · `pageSize` |
| GPS | Device CL / Fused · accuracyM → toast ±N m |
| Persist pin | **không** — sibling `patrol-checkin` owns POST |
| Step 4b | **N/A** — list live · GPS device · **cấm** `/new-endpoint` · **cấm** `/database-migration` |
| Rationale | Toast cần Route từ session active · pin = device · không BE mới |

---

## SSOT / anti-duplicate

| Concern | Package / rule | Note |
|---------|----------------|------|
| BFF HTTP | `MobileApiProxyController` catch-all | **cấm** `PatrolPinController` local |
| BE HTTP | `PatrolSessionsController` | live `GET api/v1/patrol/sessions` |
| Response DTO | `ApiResponse<PatrolSessionPagedResult>` → `PatrolSessionDto[]` | app decode `items` / `data.items` |
| DTO fields (toast) | `Id` · `Code` · `Route` · `Status` · … | bind Route / filter «Đang tuần» |
| HTTP app | reuse `FetchPatrolSessionsUseCase` + `PatrolRepository*` | **cấm** URLSession/OkHttp trong View |
| Location | `GetCurrentLocationUseCase` · `LocationReading` | allow / deny / unavailable |
| Token | Keychain / EncryptedSharedPreferences | Bearer + company headers |
| Mapper | `PatrolDtoMapper.active(from:)` | active → RouteKm / demo fallback |
| Toast copy | `PatrolPinCopy.successToast(routeKm:accuracyM:)` | VN SSOT Design |
| Deny modal | `GpsDenyModal` / `GpsDenyDialog` feature | `DES-MOB-GPS-DENY` · **cấm** system alert |
| Kit chrome | `LinmPrimaryButton` · `LinmMapPinGlyph` `#i-mappin` · `LinmToast` · `LinmSecondaryButton` | Design `kit_missing_confirm` **N/A** (đã có) |
| Surfaces | `PatrolHome*` + `PatrolMap*` wire pin intent | owner slug = `patrol-pin` · **cấm** re-own hub/map pack |

---

## BFF / API contract (live audit 2026-08-21)

| Action | App path | BFF | Downstream | Live |
|--------|----------|-----|------------|------|
| Route / active cho toast | `GET patrol/sessions` | proxy | `GET api/v1/patrol/sessions` | **PASS** |
| GPS fix | — | — | Device CL / Fused | **N/A** API |
| Persist pin / check-in | `POST …/check-ins` | — | CTX Kind E | **không** gọi P1 · sibling |
| Invent pin API | `patrol-pin` / `…/pins` | — | — | **cấm invent** |

### Query params (list)

`search` · `status` · `route` · `page` (default 1) · `pageSize` (default 50)

### Response shape

`ApiResponse<PatrolSessionPagedResult>` where `Items[]` contains `PatrolSessionDto`. App maps via existing `PatrolSessionItem` / `PatrolDtoMapper.active`.

### Permissions

| Permission | Scope | Pack này |
|------------|-------|----------|
| `patrol.sessions.read` | GET list | **reuse** · BE `[RequirePermission]` TODO debt P1 |
| `patrol.sessions.create/update` | Writer siblings | **không** gọi |
| Kind E check-ins | sibling `patrol-checkin` | **cấm** gọi P1 |

**Cấm** thêm controller/permission trên Mobile.Bff · **cấm** invent permission slug mới.

---

## Implement gates (confirm)

| Gate | Decision | Endpoints / surfaces | Skill | Note |
|------|----------|----------------------|-------|------|
| TZ | **tz_na** | **không** form date | `/review-timezone-implement` | toast + GPS only |
| XCO | **xco_na** | list current-user sessions | `/implement-view-cross-company` | BE company filter live |
| SHARE | **n/a** | **không** bảng RMMS mới | `/implement-shared-table` | read + device GPS |
| Offline | **ghim local OK** | GET fail → demo route toast | offline-sync | **cấm** full-screen block · GPS vẫn chạy |
| GPS | **Live loc required** | hub + map CTA | — | allow → toast + map pin/follow · deny modal · timeout toast · **cấm** fake lat/lng |
| Camera | **n/a** | — | — | sibling check-in |
| Push | **n/a** | — | — | — |
| Store | **n/a delta** | location already claimed | PrivacyInfo / Play | **cấm** `localhost` / LAN IP in solution · family `1` · **cấm** iPad listing claim |
| Step 4b | **N/A** | không endpoint mới | — | reuse Patrol live |

AskQuestion (autoApprove=ON · không chờ board): `be_repo_confirm`=`/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.WebService` · `sa_tz_gate=tz_na` · `sa_xco_gate=xco_na` · `sa_shared_table=share_na` · `solution_confirm=approve` · `2026-08-21T03:33:43.000Z`.

---

## Persist gate (no-parent-json-field)

| | |
|--|--|
| Parent JSON string inventory (BE) | **none** |
| Child tables this pack (BE) | **n/a** — read existing Patrol sessions · GPS device-only |
| Client store | last fix optional in UI state · **không** persist pin BE P1 |
| Migration | **không** `Schema_*` · **không** `/database-migration` |
| T-BE-API / T-BE-MIG | **n/a** |

---

## Live vs delta (audit 2026-08-21 / `task_688fe507`)

| Surface | Live | SA chốt P1 |
|---------|------|------------|
| `GET …/patrol/sessions` | BE + Mobile.Bff proxy live | **Giữ** · app path `patrol/sessions` |
| `PatrolPinController` / `GET/POST patrol-pin` | **không** | **Cấm** tạo |
| Kind E check-ins POST | sibling / P2 | **Cấm** gọi trên pack này |
| Hub CTA pin | scaffolded prior · `PatrolHome*` | **Giữ** · verify Design dual copy / kit |
| Map pin + follow | scaffolded prior · `PatrolMap*` | **Giữ** · loc live + `.here` · **cấm** fake |
| Deny modal `DES-MOB-GPS-DENY` | in-app dual | **Giữ** · Sao chép / Để sau · **cấm** system alert |
| Handoff check-in | callback / stub | **Handoff only** · **cấm** form fields |
| Tab 5 shell | dưới hub/map | **Giữ** · `tabs: none` pack · **cấm** invent (`GAP-TAB-01`) |

---

## Form data analysis (REQUIRED)

| Screen / FormMode | Fields (UI) | Source type | Entity |
|-------------------|-------------|-------------|--------|
| CTA hub `#sc-patrol-home` | pin button · toast · deny modal | GET sessions + device GPS | **không** RMMS form entity |
| CTA map `#sc-patrol-map` | pin overlay · toast · deny · pin `.here` | same + map camera | **không** form |
| Check-in sheet | — | — | **out of pack** · sibling |

### Field map (ui → dto → store)

| uiField | Label VN | dtoField | Wire | Notes |
|---------|----------|----------|------|-------|
| pinHere | Ghim vị trí hiện tại | — | loc live · toast · deny/timeout | `LinmPrimaryButton` + `#i-mappin` · hub+map |
| pinToast | Đã ghim vị trí hiện tại · {route} · ±N m | `Route` (active) | GET → active · else demo | `LinmToast` success |
| locDenyTitle | Định vị bị tắt | — | local modal | `DES-MOB-GPS-DENY` |
| locDenyBody | Cần vị trí để chấm công / chấm điểm tuần… | — | local | copy Design |
| locDenyCopy | Sao chép hướng dẫn | — | clipboard + toast | `LinmPrimaryButton` |
| locDenyLater | Để sau | — | dismiss | `LinmSecondaryButton` |
| locTimeout | Chưa lấy được vị trí. Thử lại. | — | toast warning | **cấm** fake coords |
| mapHerePin | pin `.here` | lat/lng fix | MapKit / Maps Compose | chỉ khi allow |
| handoffCheckin | (implicit) | — | sibling callback | **cấm** form |

**Cấm** invent DTO pin aggregate / `…/pins` endpoints trên slug này.

---

## Navigation / action (this pack)

| Control | Behavior P1 | Owner slug |
|---------|-------------|------------|
| Hub **Ghim vị trí hiện tại** | loc → toast Route/±m · deny modal · timeout toast · handoff callback | **owner** `patrol-pin` |
| Map **Ghim vị trí hiện tại** | same + pin `.here` + camera follow | **owner** (shared_action reuse) |
| Sao chép hướng dẫn | clipboard + toast hướng dẫn | owner |
| Để sau | đóng modal | owner |
| Tab 5 | shell giữ | **cấm** invent |
| Form Ghi điểm tuần | **không** ship | sibling `patrol-checkin` |

**Cấm** start sibling `pending_confirm` (`GAP-MOB-ACT-06`) · **cấm** enqueue thêm check-in (`GAP-MOB-ACT-07`) · **cấm** `UIAlert` / `AlertDialog`.

---

## GAP chốt (SA)

| ID | Decision |
|----|----------|
| GAP-MOB-ACT-02 | **Cấm** ship form Ghi điểm tuần trên pack này · handoff only |
| GAP-MOB-BFF-01 | Path = BFF table only · **chỉ** `GET patrol/sessions` |
| GAP-MOB-REAL-01 | Route bind live · GPS device · demo fallback khi GET fail |
| GAP-TAB-01 | Tab 5 shell **giữ** · pack `tabs: none` |
| GAP-MOB-ACT-05 | Kit reuse pin/toast/modal buttons · **cấm** raw M3/HIG alert |
| GAP-MOB-ACT-06/07 | Sibling check-in **không** start / enqueue thêm · deny/timeout cùng slug |
| GAP-MOB-ALIGN-01 | iOS + Android **cùng** copy · `#i-mappin` |
| GAP-SA-STORE-01 | **cấm** localhost/LAN trong solution · no new privacy claim delta |
| Step 4b / T-BE-* | **N/A** |

---

## Client architecture (TL/Dev)

| Layer | iOS | Android |
|-------|-----|---------|
| Feature UI | `Presentation/Features/PatrolHome/*` · `PatrolMap/*` · `GpsDenyModal` | `presentation/feature/patrolhome/*` · `patrolmap/*` · `GpsDenyDialog` |
| Use case | `FetchPatrolSessionsUseCase` · `GetCurrentLocationUseCase` | same |
| Location | `CoreLocationReader` | `AndroidLocationReader` |
| Repo | `PatrolRepositoryImpl` → `GET patrol/sessions` | `PatrolRepository` + `ApiService` |
| Mapper / copy | `PatrolDtoMapper.active` · `PatrolPinCopy` | same |
| State | `showGpsDeny` · activeSession.routeKm · here? (map) | same |
| Shell | `AppRouter` / field tab | `MainTabScreen` / nav host |
| DI | `AppContainer` | Hilt |

**Cấm** WebView HTML · watermark Gói · device label · native alert · invent pin API.

### Delta Dev (role sau — không implement turn SA)

1. Verify dual Design zones / kit / copy VN / `#i-mappin` parity hub+map.
2. GPS allow → toast Route/±m · map pin+follow · **cấm** fake lat/lng.
3. Deny → in-app modal · timeout → toast · offline ghim local + demo route fallback.
4. Handoff sibling stub only · **cấm** check-in form / POST.
5. Verify builds: xcodegen + xcodebuild dest **iPhone 17 Pro** · `assembleDebug` · BFF `dotnet build`.

---

## Handoff → TL

| Field | Value |
|-------|-------|
| feature / packKind | `patrol-pin` / **`sheet`** |
| solution_confirm | **approve** |
| BFF | **chỉ** `GET patrol/sessions` · Step 4b **N/A** |
| Tasks đề xuất | `T-IOS-PAT-PIN` · `T-AND-PAT-PIN` · `T-BE-*` **n/a** |
| Kit | reuse `LinmPrimaryButton` / `LinmMapPinGlyph` / `LinmToast` / secondary · verify dual Design |
| Delta Dev | verify pin CTA hub+map · GPS gates · handoff only · dual parity |
| Verify (Dev) | iOS `xcodegen` + `xcodebuild` dest **iPhone 17 Pro** · Android `assembleDebug` · BFF `dotnet build` |
| Next slash | `/agent-tl-mobile` |
| Chain this turn | **không** (roleOnly=`sa`) |
| e2eQa | ON khi QA · `yarn e2e-qa-mobile` · **cấm** mfeStdUrl |

---

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-sa-mobile |
| skillVersion | 2026.08.20.03 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.20.04 |
| rulesVersion | 2026.08.20.8 |
| generatedAt | `2026-08-21T03:33:43.000Z` |
| versionGate | rechecked |
| contentHash | sha256:patrol-pin-control-hint-20260821 |
| bffContentHash | sha256:patrol-pin-mobile-bff-20260821 |

---
<!-- Version meta: skillId=agent-sa-mobile skillVersion=2026.08.20.03 schemaVersion=1 workflowVersion=2026.08.20.04 rulesVersion=2026.08.20.8 versionGate=rechecked -->
