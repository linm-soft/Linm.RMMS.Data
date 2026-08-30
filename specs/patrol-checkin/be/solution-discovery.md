# SA — Solution — patrol-checkin (Ghi điểm tuần)

| Field | Value |
|-------|-------|
| feature | `patrol-checkin` |
| title | [Mobile] [Tuần đường] -> Ghi điểm tuần |
| this role | `sa` · `/agent-sa-mobile` |
| status | `confirmed` |
| solution_confirm | **approve** (`autoApprove=ON` · `task_87205a40`) |
| changeScope | `new_page` |
| packKind | **`sheet`** (PO + Design confirm) |
| stack | `native_dual` |
| Feature Kind | **sheet** · `DES-MOB-PAT-CHECKIN-SHEET` + read `DES-MOB-CI-DETAIL` · **cấm** Kind A–G web / Grid / Report / invent tab |
| thisAction | **Ghi điểm tuần** only · entry reuse hub/map/pin · **cấm** gộp pin CTA / map host (`GAP-MOB-ACT-02`) |
| domain | **Patrol** sessions read + Kind E `…/check-ins` · device GPS/camera · **cấm** invent `api/v1/patrol-checkin` / `PatrolCheckInController` slug mới |
| BackendRoot | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.WebService` · **cấm ERP.*** |
| ios | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.iOS` |
| android | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Android` |
| bff | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Bff` · prefix `mobile-bff/api/v1` |
| prior · design | **confirmed** · `ui/design.md` · `ui/ux-analy.md` · `ui/html-to-native-map.md` · dual proto · `ui/review/demo-parity.md` · `task_34eb58bb` |
| prior · po | **confirmed** · `po/requirement.md` · `task_10f5eb97` |
| prior · data_analy | **confirmed** · `_data-analy/patrol-checkin-*.md` · contentHash `sha256:patrol-checkin-control-hint-20260828` · bffContentHash `sha256:patrol-checkin-mobile-bff-20260828` |
| autoApprove | **ON** |
| e2eQa | ON khi QA · `yarn e2e-qa-mobile` · **cấm** `yarn start:std` / `mfeStdUrl` / e2e ở role SA |
| versionGate | `rechecked` |
| taskId | `task_87205a40` |
| confirmedBy | agent autoApprove · `task_87205a40` |
| updatedAt | `2026-08-28T20:20:00.000Z` |

**Cấm:** invent `api/v1/patrol-checkin` · invent path ngoài BFF table · clone `PatrolSessionsController` trên Mobile.Bff · app `:5101` · ERP.* · `mfeStdUrl` / `yarn start:std` · system `UIAlert` / `AlertDialog` · fake lat/lng · gộp form **Ghim vị trí** (`GAP-MOB-ACT-02`) · watermark Gói · device label · fake HTTP 200 khi POST MISSING · Write MFE/native ở role SA · chạy Step 4b / migration / e2e ở role này.

Standards: api-endpoint · bff-api-structure · company-field · no-parent-json-field · sa-implement-gates · ios networking · android api-client · offline-sync · PrivacyInfo / Play Data safety (`GAP-SA-STORE-01`).

---

## Architecture (repo SSOT)

| Layer | Choice |
|-------|--------|
| BackendRoot | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.WebService` · `be_repo_confirm` |
| Domain | Patrol `PatrolSessionsController` · Kind E path CTX `…/check-ins` (**MISSING** action) |
| API downstream | `GetList` / `GetById` live · `POST …/check-ins` **GAP-MOB-BFF-01** |
| BFF mobile | `Linm.RMMS.Mobile.Bff` · `MobileApiProxyController` catch-all → `ApiBase` |
| App | iOS + Android · base `{BffBase}/mobile-bff/api/v1` · **cấm** URLSession/OkHttp trong View |
| Prefill | `GET patrol/sessions` filter «Đang tuần» · optional `GET patrol/sessions/{id}` · fail/empty → demo SSOT |
| GPS / match | Device CL / Fused + haversine vs plan · banner `DES-MOB-LOC-MISMATCH` · **cấm** fake |
| Camera | Device capture → local URI PhotoRow P1 · upload media P2 khi BE có |
| Submit P1 | Khi BE check-ins **live** → `POST patrol/sessions/{id}/check-ins` · khi **MISSING**/offline → local queue `OfflineQueueKind.checkIn` + sibling `patrol-offline` · toast ok · **cấm** fake 200 |
| Persist BE mới | T-BE Kind E trên **đúng** path CTX · **không** invent slug · Step 4b **pending TL/T-BE** (SA **không** chạy migration) |
| Sibling | entry `patrol-home` / `patrol-map` / handoff `patrol-pin` · queue `patrol-offline` · **cấm** re-own |
| Out of pack | pin CTA form · map host · tracks/coverage/kpi · attendance · invent tab |

### Route decision

| | Choice |
|--|--------|
| Slug | `patrol-checkin` → **sheet** · owner `DES-MOB-PAT-CHECKIN-SHEET` (+ read `DES-MOB-CI-DETAIL` cùng slug) |
| App prefix | `mobile-bff/api/v1` |
| App path P1 read | `GET patrol/sessions` · `GET patrol/sessions/{id}` (Bearer) |
| App path P1 write | `POST patrol/sessions/{id}/check-ins` — **wire sẵn** · call khi live · else queue local |
| Downstream | `PatrolSessionsController` · **không** dedicated invent controller slug |
| GPS / camera | Device — **không** API pin |
| Match gate | Client haversine · `MATCH_RADIUS_M = 50` (SSOT SA · khớp demo 18 m ok / 86 m bad) · `matchOk = distanceToPlanM ≤ 50` |
| Step 4b | **Pending TL/T-BE** — thêm action Kind E trên `api/v1/patrol/sessions/{id}/check-ins` · **cấm** SA chạy `/new-endpoint` / `/database-migration` turn này |
| Rationale | Prefill live sessions · submit = CTX Kind E path · P1 offline-safe khi GAP |

---

## SSOT / anti-duplicate

| Concern | Package / rule | Note |
|---------|----------------|------|
| BFF HTTP | `MobileApiProxyController` catch-all | **cấm** `PatrolCheckInController` local trên BFF |
| BE HTTP | `PatrolSessionsController` | live GET list/byId · **MISSING** check-ins (audit 2026-08-28) |
| Response DTO (prefill) | `ApiResponse<PatrolSessionPagedResult>` / `PatrolSessionDto` | `Id` · `Code` · `Route` · `Status` · `CheckInCount` · `Note` · … |
| Request body (POST check-ins) | Khớp BFF table / PO §6 — **không** fork app-only | `planPointLabel` · `route` · `lat`·`lng`·`accuracyM` · `distanceToPlanM`·`matchOk` · `content` · `photoLocalIds[]` |
| HTTP app | reuse `FetchPatrolSessionsUseCase` / `PatrolRepository*` + new `SubmitPatrolCheckInUseCase` | **cấm** raw HTTP trong View |
| Location | `GetCurrentLocationUseCase` · `LocationReading` | allow / deny / unavailable |
| Offline queue | `OfflineQueueStore` · `OfflineQueueKind.checkIn` | enqueue payload + toast · sync qua sibling pack |
| Token | Keychain / EncryptedSharedPreferences | Bearer + company headers |
| Kit chrome | `LinmBottomSheet` · `LinmTextField` · `LinmTextArea` · `LinmPrimaryButton` · `LinmSecondaryButton` · `LinmToast` · PhotoRow / `#i-camera` · `LinmTopBar` (detail) | Design `kit_missing_confirm` **N/A** (đã map) |
| Modals | leave `DES-MOB-LEAVE` · GPS deny `DES-MOB-GPS-DENY` reuse pin | **cấm** system alert |
| Surfaces | New feature UI sheet + detail · wire entry từ hub/map/pin callback | owner slug = `patrol-checkin` |
| Tabs | Shell Tab 5 **giữ** · pack `tabs: none` | **cấm** invent (`GAP-TAB-01`) |

---

## BFF / API contract (live audit 2026-08-28)

| Action | App path | BFF | Downstream | Live |
|--------|----------|-----|------------|------|
| Prefill Route / CheckInCount / active | `GET patrol/sessions` | proxy | `GET api/v1/patrol/sessions` | **PASS** |
| Prefill session detail | `GET patrol/sessions/{id}` | proxy | `GET api/v1/patrol/sessions/{id}` | **PASS** |
| Submit Lưu / Ghi nhận | `POST patrol/sessions/{id}/check-ins` | proxy | Kind E · **không** action trên controller | **MISSING** · **GAP-MOB-BFF-01** |
| GPS / distance / match | — | — | Device CL / Fused + haversine | **N/A** API |
| Camera attach | — | — | Device local URI | **N/A** API P1 |
| Offline / POST GAP | — | — | local `OfflineQueueKind.checkIn` → `patrol-offline` | **không** invent path |
| Invent check-in API | `patrol-checkin` / dedicated invent | — | — | **cấm invent** |

### Query params (list)

`search` · `status` · `route` · `page` (default 1) · `pageSize` (default 50)  
Mobile P1: client filter `Status=Đang tuần` · `page=1` · `pageSize=50`.

### Response shape (session)

`ApiResponse<PatrolSessionPagedResult>` → `Items[]` / `data.items` → `PatrolSessionDto`. App maps via existing `PatrolSessionItem` / `PatrolDtoMapper.active` (reuse pin/home).

### Body (POST check-ins — CTX Kind E · schema **pending T-BE**)

| Field | UI / source |
|-------|-------------|
| `planPointLabel` | Điểm kế hoạch (session Note / pin handoff / demo SSOT) |
| `route` | Tuyến / lý trình · `Route` session |
| `lat` · `lng` · `accuracyM` | Device GPS ghim |
| `distanceToPlanM` · `matchOk` | Client haversine · radius 50 m |
| `content` | TextArea Nội dung |
| `photoLocalIds[]` | PhotoRow local ids P1 |

**Cấm** app fork DTO khác BFF table · **cấm** invent `api/v1/patrol-checkin`.

### Permissions

| Permission | Scope | Pack này |
|------------|-------|----------|
| `patrol.sessions.read` | GET list / byId | **reuse** · BE `[RequirePermission]` TODO debt P1 |
| Kind E check-ins write | POST `…/check-ins` | **T-BE** khi live · P1 queue local nếu MISSING |
| `patrol.sessions.create/update/delete` | session CRUD | **OUT** pack |
| tracks / coverage / kpi | Kind E OUT | **cấm** gọi |

**Cấm** thêm controller/permission trên Mobile.Bff · **cấm** invent permission slug mới trên app.

---

## Implement gates (confirm)

| Gate | Decision | Endpoints / surfaces | Skill | Note |
|------|----------|----------------------|-------|------|
| TZ | **tz_na** | **không** form date edit · toast/detail time local display | `/review-timezone-implement` | |
| XCO | **xco_na** | list current-user sessions · company filter BE | `/implement-view-cross-company` | |
| SHARE | **share_pending_tbe** | Kind E check-ins entity/table **T-BE** · **cấm** assume table name SA · **cấm** parent JSON | `/implement-shared-table` | TL + `/database-migration` khi T-BE chạy |
| Offline | **sheet mở + queue** | GET fail → demo prefill · POST MISSING/offline → `OfflineQueueKind.checkIn` | offline-sync | **cấm** full-screen block · **cấm** fake 200 |
| GPS | **Live loc required** submit | sheet open + match | — | allow → prefill + banner · deny modal · timeout toast · **cấm** fake lat/lng |
| Camera | **P1 local attach** | PhotoRow + `#i-camera` | — | `openCapture('checkin')` · upload P2 |
| Push | **n/a** | — | — | — |
| Store | **camera + location already claimed** | PrivacyInfo / Play | — | **cấm** `localhost` / LAN IP in solution · family `1` · **cấm** iPad listing claim · no new privacy delta nếu đã declare |
| Step 4b | **Pending TL/T-BE** | `POST …/check-ins` | — | **không** chạy ở role SA · stamp GAP |

AskQuestion (autoApprove=ON · không chờ board): `be_repo_confirm`=`/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.WebService` · `sa_tz_gate=tz_na` · `sa_xco_gate=xco_na` · `sa_shared_table=share_pending_tbe` · `solution_confirm=approve` · `2026-08-28T20:20:00.000Z`.

---

## Persist gate (no-parent-json-field)

| | |
|--|--|
| Parent JSON string inventory (BE) | **none** trên pack mobile |
| Child tables this pack (BE) | **T-BE** Kind E check-ins — **không** invent tên bảng SA · **cấm** nhét JSON vào `PatrolSession.Note` |
| Client store | form state + `OfflineQueueStore` checkIn items · photo local URIs |
| Migration | **không** chạy turn SA · TL/T-BE khi implement endpoint |
| T-BE-API | **yes** — `POST api/v1/patrol/sessions/{id}/check-ins` trên domain Patrol (CTX path) |
| T-BE-MIG | **pending** — chỉ nếu T-BE cần bảng/entity mới (TL quyết sau audit schema) |

---

## Live vs delta (audit 2026-08-28 / `task_87205a40`)

| Surface | Live | SA chốt P1 |
|---------|------|------------|
| `GET …/patrol/sessions` | BE + Mobile.Bff proxy live | **Giữ** · prefill Route / CheckInCount / active |
| `GET …/patrol/sessions/{id}` | live | **Giữ** · detail prefill khi có id |
| `POST …/check-ins` | **MISSING** trên `PatrolSessionsController` | Wire path · call khi live · else local queue + stamp GAP · **cấm** fake 200 |
| `PatrolCheckInController` / `api/v1/patrol-checkin` | **không** | **Cấm** tạo invent slug |
| Sheet `#sheet-checkin` | stub toast hub/map | **Ship** dual Design kit / copy / match / camera / leave |
| Detail `#sc-checkin-detail` | — | **Ship** cùng slug read sau save |
| Pin / map host | siblings | **Entry/handoff only** · **cấm** re-own |
| Tab 5 shell | dưới hub/map | **Giữ** · `tabs: none` pack |

---

## Form data analysis (REQUIRED)

| Screen / FormMode | Fields (UI) | Source type | Entity |
|-------------------|-------------|-------------|--------|
| Sheet `#sheet-checkin` edit | readonly prefill + Nội dung + photos | GET sessions + device GPS/camera → POST / queue | Patrol session + Kind E check-in |
| Match banner | distance / matchOk | device + plan coords | — |
| Leave / GPS deny | modals | local UI | — |
| Detail `#sc-checkin-detail` read | plan / dist / saved time | last save local / GET khi list check-ins live | cùng slug |

### Field map (ui → dto → store)

| uiField | Label VN | dtoField | Wire | Notes |
|---------|----------|----------|------|-------|
| sheetTitle | Ghi điểm tuần | — | local | `LinmBottomSheet` |
| navCancel / btnCancelFooter | Hủy | — | leave modal dirty | `DES-MOB-LEAVE` |
| navSave / btnSave | Lưu / Ghi nhận điểm tuần | POST body | submit cùng slug | disable khi `!matchOk` |
| matchBanner | Đúng/Sai điểm · … | `distanceToPlanM` · `matchOk` · `accuracyM` | device | `DES-MOB-LOC-MISMATCH` |
| planPoint | Điểm kế hoạch | `planPointLabel` | session Note / pin / demo | readonly |
| routeChainage | Tuyến / lý trình | `Route` | GET sessions | readonly |
| gpsPinned | Định vị ghim tự động | `lat`·`lng`·`accuracyM` | device | **cấm** fake |
| distPlan | Cách điểm KH | `distanceToPlanM` · match label | haversine | readonly |
| content | Nội dung | `content` | POST / queue | `LinmTextArea` |
| photos / addPhoto | Ảnh | `photoLocalIds[]` | device camera | `#i-camera` |
| toastOk | Đã ghi điểm tuần · … | `CheckInCount` (+1 local) | after save | `LinmToast` |
| toastBlock | Chặn — không đúng điểm kế hoạch | — | local | warning |
| detail rows | Điểm KH / Cách điểm / Đã lưu | last payload | local / future GET | `DES-MOB-CI-DETAIL` |

**Demo fallback SSOT** (GET fail/empty · plan coords chưa live): plan `Km 1561+134 · Phước Dinh` · route `QL.1 · Km 1561+134` · demo GPS display only khi deny/timeout **không** submit với fake — GPS live vẫn bắt buộc cho submit.

**Plan coords P1:** ưu tiên pin-handoff `LocationFix` · else demo plan point `(11.6030, 109.0160)` chỉ để haversine vs **live** GPS · khi Kind E plan-points live → bind BE.

---

## Navigation / action (this pack)

| Control | Behavior P1 | Owner slug |
|---------|-------------|------------|
| Hub / map **Ghi điểm tuần** | `openSheet('checkin')` → sheet | **owner** `patrol-checkin` (entry reuse) |
| Pin handoff | sau ghim → open sheet | owner (shared_action) |
| Lưu / Ghi nhận | `matchOk` → POST hoặc queue · toast · detail | owner · **cấm** enqueue sibling submit |
| Camera | capture attach PhotoRow | owner · cùng slug |
| Hủy dirty | leave modal | owner |
| GPS deny | modal reuse | chrome reuse `DES-MOB-GPS-DENY` |
| Detail back **Ca** | `go('patrol-detail')` / hub | owner read |
| Tab 5 | shell giữ | **cấm** invent |
| Pin CTA / map host | **không** ship | siblings |

**Cấm** start sibling `pending_confirm` (`GAP-MOB-ACT-06`) · **cấm** enqueue submit/camera/leave/detail (`GAP-MOB-ACT-07`).

---

## GAP chốt (SA)

| ID | Decision |
|----|----------|
| GAP-MOB-BFF-01 | Path = CTX `POST patrol/sessions/{id}/check-ins` · **MISSING** controller · P1 local queue + toast · T-BE TL · **cấm** invent `patrol-checkin` · **cấm** fake 200 |
| GAP-MOB-CI-SHEET-01 | Ship sheet dual theo Design · thay toast stub hub/map |
| GAP-MOB-CI-MATCH-01 | Banner + disable primary khi sai · `MATCH_RADIUS_M=50` |
| GAP-MOB-CI-GPS-01 | Live GPS · deny modal · **cấm** fake |
| GAP-MOB-CI-PHOTO-01 | PhotoRow + `#i-camera` local P1 |
| GAP-MOB-CI-DATA-01 | GET sessions prefill · POST/queue submit |
| GAP-MOB-CI-DETAIL-01 | Read surface cùng slug |
| GAP-MOB-ACT-02 | **Cấm** ship pin form / map host trên pack |
| GAP-MOB-REAL-01 | §B = BFF table only |
| GAP-TAB-01 | Tab 5 shell **giữ** · pack `tabs: none` |
| GAP-MOB-ACT-05 | Kit toast/modal · **cấm** raw system alert |
| GAP-MOB-ACT-06/07 | Không start/enqueue sibling mới · submit/camera/leave/detail cùng slug |
| GAP-MOB-ALIGN-01 | iOS + Android cùng copy · `#i-camera` · Android label **Ảnh** |
| GAP-SA-STORE-01 | **cấm** localhost/LAN trong solution · no iPad listing claim |
| Step 4b / T-BE-* | **Pending TL** — không chạy turn SA |

---

## Client architecture (TL/Dev)

| Layer | iOS | Android |
|-------|-----|---------|
| Feature UI | `Presentation/Features/PatrolCheckIn/*` (sheet + detail + leave) | `presentation/feature/patrolcheckin/*` |
| Entry wire | `PatrolHome*` / `PatrolMap*` / pin handoff → open sheet | same |
| Use case | `FetchPatrolSessionsUseCase` · `GetCurrentLocationUseCase` · `SubmitPatrolCheckInUseCase` (new) · camera use case | same |
| Location | `CoreLocationReader` | `AndroidLocationReader` |
| Repo | `PatrolRepository*` + offline enqueue checkIn | same |
| Mapper / copy | session active + `PatrolCheckInCopy` VN SSOT Design | same |
| State | matchOk · gps · content · photos · dirty · showLeave · showGpsDeny · lastSaved | same |
| Shell | `AppRouter` field tab dưới sheet | `MainTabScreen` / nav host |
| DI | `AppContainer` | Hilt |

**Cấm** WebView HTML · watermark Gói · device label · native alert · invent check-in API slug.

### Delta Dev (role sau — không implement turn SA)

1. Ship sheet + detail dual theo Design / html-to-native-map / copy VN / `#i-camera` / Android label Ảnh.
2. Prefill GET sessions · GPS live + haversine radius 50 · match gate · leave / GPS deny in-app.
3. Camera attach local · submit: POST khi live else `OfflineQueueKind.checkIn` + toast · **cấm** fake 200.
4. Wire hub/map/pin entry · **cấm** pin form / map host.
5. Verify builds: xcodegen + xcodebuild dest **iPhone 17 Pro** · `assembleDebug` · BFF `dotnet build`.

### Tasks đề xuất (TL)

| ID | Owner | Note |
|----|-------|------|
| `T-IOS-PAT-CI` | Dev iOS | sheet + detail + GPS/camera/offline |
| `T-AND-PAT-CI` | Dev Android | parity dual |
| `T-BE-PAT-CI-API` | T-BE | `POST api/v1/patrol/sessions/{id}/check-ins` trên Patrol domain · body SSOT |
| `T-BE-PAT-CI-MIG` | T-BE | chỉ nếu cần entity/table mới · `/database-migration` |
| `T-BFF-*` | — | **n/a** · proxy catch-all đủ |

---

## Handoff → TL

| Field | Value |
|-------|-------|
| feature / packKind | `patrol-checkin` / **`sheet`** |
| solution_confirm | **approve** |
| BFF | `GET patrol/sessions` (+ optional `{id}`) live · `POST …/check-ins` **GAP-MOB-BFF-01** · Step 4b **pending TL/T-BE** |
| Tasks đề xuất | `T-IOS-PAT-CI` · `T-AND-PAT-CI` · `T-BE-PAT-CI-API` · `T-BE-PAT-CI-MIG` (nếu cần) |
| Kit | reuse BottomSheet / TextField / TextArea / Primary / Secondary / Toast / camera / TopBar |
| Delta Dev | sheet+detail · GPS match 50 m · camera · POST/queue · dual parity · entry wire |
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
| schemaVersion | 1 |
| workflowVersion | 2026.08.25.01 |
| rulesVersion | 2026.08.29.4 |
| generatedAt | `2026-08-28T20:20:00.000Z` |
| versionGate | rechecked |
| contentHash | sha256:patrol-checkin-control-hint-20260828 |
| bffContentHash | sha256:patrol-checkin-mobile-bff-20260828 |

---
<!-- Version meta: skillId=agent-sa-mobile skillVersion=2026.08.25.01 schemaVersion=1 workflowVersion=2026.08.25.01 rulesVersion=2026.08.29.4 versionGate=rechecked -->
