# Team lead — Task — supervise-detail (mobile screen · Chi tiết check-in)

| Field | Value |
|-------|-------|
| feature | `supervise-detail` |
| title | [Mobile] [Giám sát] -> Chi tiết check-in |
| this role | `team_lead` · `/agent-tl-mobile` |
| status | `confirmed` |
| changeScope | `new_page` |
| packKind | **`screen`** (PO + Design + SA confirm · GAP-MOB-SUP-DET-PACK-01 **closed**) |
| stack | `native_dual` |
| Feature Kind | **screen** push `#sc-supervise-detail` `DES-MOB-SUP-DETAIL` · **cấm** sheet chrome / `#sheet-*` / Kind A–G web / Lin* grid / Report / `mfeStdUrl` |
| route_confirm | **route_a** (autoApprove=ON) — supervise rich-card → push `#sc-supervise-detail` + `Id` · Back → `go('supervise')` · CTA **Xem trên bản đồ** → `go('gis-map')` pass Id/Lat/Lng · **cấm** toast-only khi pack ship · **cấm** `go('checkin-detail')` / CI-DETAIL · **cấm** `mfeStdUrl` |
| autoApprove | **ON** |
| e2eQa | ON khi QA · `yarn e2e-qa-mobile` · sim 6.9" + emulator + Maestro · PNG `qa/screens` + `qa/store/supervise-detail` · **cấm** `yarn start:std` / `mfeStdUrl` / `yarn e2e-qa` web |
| prior · data_analy | **confirmed** · `_data-analy/supervise-detail-control-hint.md` · `supervise-detail-bff-endpoints.md` · `supervise-detail-action-tree.md` · `supervise-detail-real-data.md` · contentHash `sha256:supervise-detail-control-hint-20260831` · realDataHash `sha256:supervise-detail-real-data-20260831` · bffContentHash `sha256:patrol-attendance-logs-getbyid-passthrough` · actionTreeHash `sha256:supervise-detail-action-tree-20260831` |
| prior · po | **confirmed** · `po/requirement.md` · `task_bc7c9e03` |
| prior · design | **confirmed** · `ui/design.md` · `ui/ux-analy.md` · `ui/html-to-native-map.md` · dual `#sc-supervise-detail` · `ui/review/demo-parity.md` · `task_d9769d91` · `kit_missing_confirm` **N/A** |
| prior · sa | **confirmed** · `be/solution-discovery.md` · `solution_confirm=approve` · Step 4b **N/A** · `task_01a1a301` |
| taskId | `task_9f876bd7` |
| updatedAt | `2026-08-31T02:06:40.000Z` |
| thisAction | **Chi tiết check-in** `#sc-supervise-detail` only · GET `patrol/attendance-logs/{id}` · hero+rows+CTA map · wire list toast → push · offline demo CC-20260810-001 · **cấm** gộp list/filter/segment · `#sc-checkin-detail` / attendance CRUD |

**Cấm:** gộp `#sc-supervise` list/filter/segment · `#sc-checkin-detail` / `#sheet-checkin` / `patrol-checkin` (`GAP-MOB-ACT-01/02`) · invent `api/v1/supervise-detail` / `checkin-detail` / `SuperviseDetailController` · invent OrgUnit API / field BE P1 · ERP.* · WebView HTML · `mfeStdUrl` · `UIAlert` / `AlertDialog` · raw `NavigationBar` / M3 bar / `TabView` · watermark Gói / device label / «Có mạng» · hardcode production khi GET OK · fake coords khi live OK · POST/PUT/DELETE attendance · start sibling `gis-map` / `patrol-checkin` / `patrol-map` (`GAP-MOB-ACT-06`) · enqueue GET / chrome / CTA map (`GAP-MOB-ACT-07`) · `scaffold_new` / `/mobile-app-architecture` (repos đã có) · Step 4b / migration · TL chạy e2e / `yarn build` / `yarn start:std` · implement native Write ở role TL.

---

## Source lock

| Key | Value |
|-----|-------|
| ios | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.iOS` · `ios_repo_confirm` |
| android | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Android` · `android_repo_confirm` |
| bff | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Bff` · prefix `mobile-bff/api/v1` |
| be | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.WebService` · `be_repo_confirm` · Patrol · **cấm ERP.*** |
| app base | `{BffBase}/mobile-bff/api/v1` — path **không** lặp prefix |
| API P1 | **chỉ** `GET patrol/attendance-logs/{id}` Bearer · XCO giữ |
| kit | reuse map dual — `LinmTopBar` · Text hero · `LinmListRow` · `LinmPrimaryButton` · `LinmToast` · `LinmEmptyChrome` · `LinmTabBar` shell · map `ui/html-to-native-map.md` + `docs/html-to-native-map.md` · **không** `T-KIT-*` · `kit_missing_confirm` **N/A** |
| scaffold | repos **đã có** prior supervise · **không** `scaffold_new` · **không** `/mobile-app-architecture` trước Dev |
| Step 4b | **N/A** — reuse live `GET patrol/attendance-logs/{id}` · **không** `/new-endpoint` / `/database-migration` / `/create-bff-api-feature` |

### route_confirm (autoApprove=ON)

| Option | Decision |
|--------|----------|
| **route_a** (chọn) | Entry: `#sc-supervise` rich-card tap → **push** `#sc-supervise-detail` `DES-MOB-SUP-DETAIL` pass `Id` · **thay** toast-only `supervise.toast.detail` khi pack ship · **cấm** `go('checkin-detail')` / reuse CI-DETAIL (`GAP-MOB-SUP-DET-DEMO-01`). Back / leading «Giám sát»+chevron (iOS) / icon-only (Android) → `go('supervise')` · **cấm** reimplement list. Primary **Xem trên bản đồ** → `go('gis-map')` pass `Id` + Lat/Lng · **không** embed map · toast nhãn CTA nếu sibling chưa ship · **cấm** start sibling (`GAP-MOB-ACT-06`). Appear: GET by id · 404 EmptyChrome + back · network fail → demo SSOT + toast · screen **vẫn mở** · **cấm** fake 200. Thiếu Id nav → back list + toast · **cấm** blank invent. Shell Tab 5 **giữ** selected **Trang Chủ** · pack `tabs: none` · **cấm** invent segment/tab trên detail (`GAP-TAB-01`). |
| route_b | — không dùng (không deep-link web / `mfeStdUrl`) |
| route_c | — không dùng (không invent tab) |

IA lock (design §2 / ux-analy / SA): `(auth) Login → Tab 5 · Home → Giám sát list #sc-supervise → push #sc-supervise-detail · Back = supervise`. **Cấm** `TabView` / M3 `NavigationBar` thay `LinmTabBar` / `LinmTopBar`.

AskQuestion (autoApprove=ON · không chờ board): `ios_repo_confirm` · `android_repo_confirm` · `route_confirm=route_a` · `2026-08-31T02:06:40.000Z`.

---

## Live gap (TL audit 2026-08-31)

| Surface | Live | TL task |
|---------|------|---------|
| iOS `#sc-supervise-detail` | **DELTA** — **chưa** feature folder · list `TapItem` = toast `supervise.toast.detail` only | **T-IOS-SUP-DETAIL** |
| Android `#sc-supervise-detail` | **DELTA** — **chưa** `supervisedetail` · list `TapItem` = toast only | **T-AND-SUP-DETAIL** |
| `GET patrol/attendance-logs/{id}` | BE `AttendanceLogsController.GetById` + XCO + Mobile.Bff proxy **live** · app **chưa** gọi GetById | **reuse** path · Dev thêm `getById` / Retrofit `@GET` · **cấm** invent `supervise-detail` path |
| `AttendanceLogItemDto` | list DTO thiếu `Code` · `Lat` · `Lng` · `InZone` | **DELTA** decode thêm fields trên item / detail DTO · **cấm** fork app-only shape |
| List → detail entry | toast stub | wire push + `Id` · supersede toast-only · **cấm** reimplement list chrome |
| Org empty `Note` | list mapper fallback «Tổ tuần đường · VP-IV.1» | **reuse** same fallback trên detail (`GAP-MOB-SUP-DET-ORG-01`) |
| Status VN map | list partial | **DELTA** map control-hint (checked_in/ok · out_zone/warn · other raw) |
| Sibling `gis-map` | đã enqueue `task_23d7eba0` | nav reuse · toast P1 nếu chưa ship · **cấm** start |
| `#sc-checkin-detail` | owner `patrol-checkin` | **≠** slug · **cấm** reuse / gộp |
| Demo parity dual CC-20260810-001 | Design closed `#sc-supervise-detail` | fallback SSOT 1 row |
| New BE endpoint / Schema_* | **không** | **T-BE-API** / **T-BE-MIG** = **n/a** |
| Kit detail | dual map shipped · Design `kit_missing_confirm` **N/A** | Dev **cấm** raw NavBar/TabView · **cấm** `T-KIT-*` |
| Foot «Phiên bản Gói…» / device label | demo chrome | **cấm ship** |

---

## Tasks

| id | layer | deps | status | skills | DoD |
|----|-------|------|--------|--------|-----|
| T-KIT-SUP-DETAIL | kit | — | **n/a** | — | Kit detail **đã map dual** · Design `kit_missing_confirm` **N/A** — **không** giao Dev kit · **cấm** invent kit |
| **T-IOS-SUP-DETAIL** | ios | SA · route_a | **done** | `/agent-dev-ios` · `/ios-new-screen` · `/dev-ios-swiftui` · `/mobile-ui-ux-analy` packet · MVVM layer | Ship `Presentation/Features/SuperviseDetail/*` · kit parity · GET by id · offline demo · wire list → push · CTA map · decode Code/Lat/Lng/InZone · org fallback · Status VN · `xcodegen` + `xcodebuild` dest **iPhone 17 Pro** PASS · ghi `implement/ios.md` |
| **T-AND-SUP-DETAIL** | android | SA · route_a | **done** | `/agent-dev-android` · `/android-new-screen` · `/dev-android-compose` · `/android-new-api-call` · cùng ux packet | Same field/API/DoD dual · `presentation/feature/supervisedetail/*` · `./gradlew :app:assembleDebug` PASS · ghi `implement/android.md` |
| **T-BE-API** | be | — | **n/a** | — | **không** `/new-endpoint` — GetById **live** · Step 4b **N/A** |
| **T-BE-MIG** | be | — | **n/a** | — | **không** `/database-migration` |
| T-QA-TAB-01 | qa | T-IOS · T-AND | **confirmed** | `/agent-qa-mobile` | Shell Tab **Trang Chủ** · pack `tabs: none` · **cấm** invent segment trên detail (`GAP-TAB-01` · `tab-index-analy-review.md`) |
| T-QA-SUP-DETAIL | qa | T-IOS · T-AND | pending | `/agent-qa-mobile` | AC slug `supervise-detail` only · `yarn e2e-qa-mobile` · live sim 6.9" + emulator · store PNG `qa/store/supervise-detail` · **cấm** sibling list/checkin/CRUD in-scope · **cấm** `yarn e2e-qa` web |

**1 action = 1 feature.** **Cấm** gộp sibling (`supervise` list chrome · `gis-map` embed · `patrol-checkin` · `patrol-map`) vào task file này như in-scope implement. Sibling giữ reuse / `pending_confirm` — **cấm** auto start (`GAP-MOB-ACT-06`).

---

## T-IOS-SUP-DETAIL — detail

| | |
|--|--|
| `source.repo` | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.iOS` |
| `ssot.zones` | `DES-MOB-SUP-DETAIL` · `DES-MOB-TABBAR` · `#sc-supervise-detail` |
| Pattern | Screen push · **không** Modal/Sheet · frame proto 390×844 |

### UI (kit cite — `ui/html-to-native-map.md`)

| Field | Kit | Notes |
|-------|-----|-------|
| navBack | `LinmTopBar` leading `#i-chevron-left` | text «Giám sát» + chevron · `go('supervise')` · e2e `btn-sup-detail-back` · **cấm** reimplement list |
| title | `LinmTopBar` title | **Chi tiết check-in** fixed |
| userHero | Display Text bold **28** | DTO `UserName` |
| codeLabel | Caption Text **13** | **Mã** fixed |
| codeValue | Text ≥16 | DTO `Code` (CC-*) |
| rowOrg | `LinmListRow` | label **Tổ / đơn vị** · `Note` · empty → «Tổ tuần đường · VP-IV.1» · optional `#i-building` |
| rowLoc | `LinmListRow` | label **Tuyến · lý trình** · `"{Route} Km {KmPoint}"` · địa danh · optional `#i-mappin` |
| rowTime | `LinmListRow` | label **Thời điểm** · `CheckInAt` `yyyy-MM-dd HH:mm:ss` local |
| rowStatus | `LinmListRow` / status strip | label **Trạng thái** · Status VN map · ok/warn tint |
| rowGps | `LinmListRow` | label **Tọa độ** · `"{Lat}, {Lng}"` · **cấm** fake khi live OK |
| rowInZone | `LinmListRow` | label **Trong vùng** · true→«Trong vùng» · false→«Ngoài vùng» |
| btnMap | `LinmPrimaryButton` | **Xem trên bản đồ** · `go('gis-map')` · pass Id/Lat/Lng · e2e `btn-sup-detail-map` |
| toast | `LinmToast` | GET fail · sibling toast · thiếu Id · **cấm** `UIAlert` |
| empty404 | `LinmEmptyChrome` | NotFound · back list |
| tabHome | `LinmTabBar` | shell selected **Trang Chủ** · label **13** · **cấm** invent |

**Cấm** raw `NavigationBar` / `TabView` product chrome · **cấm** ship foot Gói / device label · **cấm** «Có mạng» · **cấm** bottom-sheet chrome · **cấm** request CLLocation trên detail.

### Demo / fallback SSOT (**1** row — CC-20260810-001)

| Field | Value |
|-------|-------|
| Title | Chi tiết check-in |
| UserName | Nguyễn Văn A |
| Code | CC-20260810-001 |
| Tổ | Tổ tuần đường · VP-IV.1 |
| Tuyến | QL.1 Km 1556+000 · Xuân Hải |
| Thời điểm | 2026-08-10 08:40:12 |
| Trạng thái | Đã ghi điểm tuần |
| Tọa độ | 11.5300, 109.0040 |
| Trong vùng | Trong vùng |
| CTA | Xem trên bản đồ |
| Back | Giám sát |

### Status VN map

| API `Status` (raw) | UI |
|--------------------|-----|
| `checked_in` / `ok` / chứa «ghi điểm» / empty+InZone | Đã ghi điểm tuần |
| `out_zone` / `warn` / InZone=false | Ngoài vùng · cần kiểm |
| other | `{Status raw}` |

### Bind (real-data §B · SA)

| Line | Rule |
|------|------|
| hero | `UserName` raw |
| code | `Code` raw (CC-*) |
| org | `Note` non-empty · else `Tổ tuần đường · VP-IV.1` |
| loc | `"{Route} Km {KmPoint}"` · thiếu Km → Route only · địa danh demo append OK offline |
| time | `CheckInAt` format `yyyy-MM-dd HH:mm:ss` local |
| status | map trên · default «Đã ghi điểm tuần» khi raw khớp demo |
| gps | `"{Lat}, {Lng}"` (DTO non-null decimal) · **không** fake khi live OK |
| inZone | `true` → «Trong vùng» · `false` → «Ngoài vùng» |
| map CTA | pass `Id` + Lat/Lng · **không** fake coords |
| nav key | `Id` |

### API / store

| Step | Spec |
|------|------|
| Appear | `FetchAttendanceLogByIdUseCase` (hoặc extend supervise) → `GET patrol/attendance-logs/{id}` Bearer |
| Repo | extend `SuperviseRepository` + `getById` **hoặc** `SuperviseDetailRepository` · **cấm** fork DTO · decode thêm `Code` · `Lat` · `Lng` · `InZone` |
| Mapper | extend `SuperviseDtoMapper` / detail mapper · Status VN · org/loc/gps/inZone |
| Fail / offline | `SuperviseDetailCopy.demo` · screen **vẫn mở** · toast · **cấm** native alert · **cấm** fake 200 · **không** OfflineQueue |
| 404 | `LinmEmptyChrome` · back list |
| 403 XCO | toast · back list |
| Thiếu Id | back list + toast · **cấm** blank invent |
| Sibling API | **cấm** list GET / POST/PUT/DELETE attendance / sessions check-ins trên slug này |

### Router / shell

| Entry | Behavior |
|-------|----------|
| List rich-card / `TapItem` | **thay** toast → push `#sc-supervise-detail` + `Id` |
| Back | `go('supervise')` · **cấm** reimplement list |
| btnMap | `go('gis-map')` pass Id/Lat/Lng · toast P1 nếu chưa ship |
| DI | `AppContainer` wire `SuperviseDetailViewModel` + use case + repo → `ApiClient` path `patrol/attendance-logs/{id}` |
| Shell | `LinmTabBar` giữ tab **home** · **không** segment trên detail |

**Cấm** WebView HTML · VM→URLSession trực tiếp.

### Build DoD

```bash
cd /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.iOS && xcodegen generate
xcodebuild -scheme LinmRmms -destination 'platform=iOS Simulator,name=iPhone 17 Pro' build
```

Fail → `build_fail_confirm` · **cấm** mark Dev done. Ghi `implement/ios.md`.

Optional Dest (skill TL): **iPad Pro 13-inch (M5)** khi team yêu cầu — **không** claim family `1` store.

---

## T-AND-SUP-DETAIL — detail

| | |
|--|--|
| `source.repo` | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Android` |
| `ssot.zones` | cùng iOS · `#sc-supervise-detail` · frame 412×915 |
| Pattern | Screen push · **không** Modal/Sheet · Material chrome OK |

### UI / API

Cùng bảng field · Status VN · demo CC-20260810-001 · bind · toast · kit cite như T-IOS.  
Title dual: **Chi tiết check-in**.  
Back: **icon-only** `#i-chevron-left` (không bắt buộc text «Giám sát»).  
Hero: Display **24** bold. Copy VN còn lại **parity** iOS (`GAP-MOB-ALIGN-01`).

### Router / shell

| Entry | Behavior |
|-------|----------|
| List `TapItem` | **thay** toast → navigate `#sc-supervise-detail` + `Id` |
| Back | pop → list · `supervise` reuse |
| btnMap | `go('gis-map')` pass Id/Lat/Lng · toast P1 nếu chưa ship |
| DI | Hilt `SuperviseDetailViewModel` · use case · repo → Retrofit/`ApiService` `@GET("patrol/attendance-logs/{id}")` |

### Build DoD

```bash
cd /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Android && ./gradlew :app:assembleDebug
```

Fail → `build_fail_confirm` · **cấm** mark Dev done. Ghi `implement/android.md`.

Optional verify (Dev, **không** TL): Mobile.Bff `dotnet build` PASS.

---

## T-BE-* — n/a

| id | Decision |
|----|----------|
| T-BE-API | **n/a** — SA `solution_confirm=approve` · reuse GetById live + XCO · **cấm** `SuperviseDetailController` / invent path |
| T-BE-MIG | **n/a** — không bảng mới · **cấm** `/database-migration` |
| Step 4b | **N/A** — **cấm** TL/Dev chạy migration / `/new-endpoint` cho pack này |

---

## Client contract (SSOT SA — bind Dev)

| Header | When |
|--------|------|
| `Authorization: Bearer {token}` | GET by id |
| `X-Company-Id` | interceptor chung |
| `X-Timezone` | interceptor chung |
| `Accept` | `application/json` |

| Envelope | Rule |
|----------|------|
| 200 | `ApiResponse<AttendanceLogDto>` → `data` · bind §B |
| 404 | EmptyChrome · back list |
| 403 XCO | toast · back list |
| Fail / offline | demo SSOT · screen **vẫn mở** · toast · **cấm** fake 200 · **cấm** native alert |

DTO bind P1: `Id` · `Code` · `UserName` · `Route` · `CheckInAt` · `KmPoint` · `Lat` · `Lng` · `InZone` · `Status` · `Note`.  
`IsActive` / timestamps **không** bind P1.

---

## Device / field AC (Dev + QA cite)

| ID | AC |
|----|-----|
| AC-D-01 | Offline → detail mở · demo CC-20260810-001 · toast in-app · **cấm** full-screen block · **cấm** fake 200 |
| AC-D-02 | GPS **readonly** Lat/Lng/InZone · **không** request location trên detail |
| AC-D-04 | **Cấm** `UIAlert` / `AlertDialog` — mọi phản hồi = `LinmToast` / EmptyChrome |
| AC-D-06 | Safe area · nav + hero + rows + CTA + tab shell |
| AC-D-10 | Shell tab **Trang Chủ** · pack **không** segment (`GAP-TAB-01`) |
| AC-D-11 | Camera thumb **N/A** P1 · **không** capture |
| AC-D-12 | caption **13** · hero ≥**24/28** · rows ≥**16** (`GAP-TYP-01`) |
| AC-F-01 | Appear GET by id · fail → demo · 404 → EmptyChrome |
| AC-F-02 | Back → `supervise` · **cấm** reimplement list |
| AC-F-03 | Bind hero · code · org · loc · time · status · gps · inZone per §B |
| AC-F-04 | Bản đồ → `gis-map` · **không** embed · toast P1 nếu chưa ship |
| AC-F-05 | Entry list card → push + `Id` · **cấm** CI-DETAIL / toast-only khi ship |
| AC-F-06 | Dual parity copy SSOT (trừ back chrome) (`GAP-MOB-ALIGN-01`) |
| AC-F-07 | Org Note / demo fallback · **cấm** invent OrgUnit API |
| AC-F-08 | **Cấm** device label / proto-click / watermark Gói |
| AC-F-09 | Thiếu Id → back list + toast · **cấm** blank invent |

---

## Sibling backlog (cấm start)

| feature | status | note |
|---------|--------|------|
| `supervise` | reuse shipped | back parent · entry card |
| `gis-map` | reuse / pending (`task_23d7eba0`) | CTA Bản đồ · toast P1 nếu chưa ship |
| `patrol-checkin` | **≠** slug · OUT | **cấm** reuse CI-DETAIL / `#sheet-checkin` |
| `patrol-map` | `pending_confirm` / sibling | **cấm** start từ detail |

**GAP-MOB-ACT-06:** board Approve riêng · **cấm** auto start sibling từ TL/Dev `supervise-detail`.

---

## Out of scope (this pack)

- `#sc-supervise` list/filter/segment implement
- `#sc-checkin-detail` / `#sheet-checkin` / patrol-checkin field save
- POST/PUT/DELETE attendance · sessions check-ins
- Embed map / gis overlay trên slug
- Invent `api/v1/supervise-detail` / `checkin-detail` / OrgUnit wire P1
- Bottom-sheet chrome · watermark Gói / device label / `mfeStdUrl` / ERP.*
- Start siblings · enqueue GET/CTA
- Step 4b / migration / e2e / `yarn start:std` ở role TL
- Implement native Write ở role TL

---

## Handoff → Dev

| Field | Value |
|-------|-------|
| feature / packKind | `supervise-detail` / **`screen`** |
| route_confirm | **route_a** (autoApprove) |
| Tasks | `T-IOS-SUP-DETAIL` · `T-AND-SUP-DETAIL` · T-BE **n/a** · T-KIT **n/a** |
| BFF | **chỉ** `GET patrol/attendance-logs/{id}` · XCO giữ |
| Real-data | `_data-analy/supervise-detail-real-data.md` §A+§B |
| UX packet | `ui/ux-analy.md` · `ui/design.md` · dual proto · `ui/html-to-native-map.md` |
| GPS | readonly Lat/Lng/InZone · **không** request device location |
| Org | Note / «Tổ tuần đường · VP-IV.1» |
| Next slash | `/agent-dev-ios` rồi `/agent-dev-android` (serial / scoped locks) |
| Chain this turn | **không** (roleOnly=`team_lead` · **GAP-PKT-ROLE-01**) |
| e2eQa | ON queued QA · **cấm** TL chạy e2e |

---

## VERIFY GATE (roleOnly=`team_lead`)

| Check | Result |
|-------|--------|
| task/supervise-detail.md | **PASS** · T-IOS-SUP-DETAIL · T-AND-SUP-DETAIL · T-BE n/a · route_a · source lock |
| Prior SA + Design + PO + data-analy | **PASS** · read · **cấm** invent API / control |
| ios_repo + android_repo + route_confirm | **PASS** · repos có · autoApprove route_a |
| Kit | **PASS** · reuse map · T-KIT **n/a** |
| Step 4b / migration / e2e | **SKIP** (cấm role TL) |
| yarn build / start:std / implement native Write | **SKIP** (cấm role TL) |
| Chain other role | **SKIP** · GAP-PKT-ROLE-01 |

---

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-tl-mobile |
| skillVersion | 2026.08.20.03 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.31.2 |
| rulesVersion | 2026.08.31.2 |
| generatedAt | `2026-08-31T02:06:40.000Z` |
| versionGate | rechecked |
| contentHash | sha256:supervise-detail-control-hint-20260831 |
| realDataHash | sha256:supervise-detail-real-data-20260831 |
| bffContentHash | sha256:patrol-attendance-logs-getbyid-passthrough |
| actionTreeHash | sha256:supervise-detail-action-tree-20260831 |
| taskId | `task_9f876bd7` |
| version_mismatch_action | **recheck_new** — stamp SSOT workflow/rules `2026.08.31.2` · khớp PO/Design/SA contentHash |

---
<!-- Version meta: skillId=agent-tl-mobile skillVersion=2026.08.20.03 schemaVersion=1 workflowVersion=2026.08.31.2 rulesVersion=2026.08.31.2 versionGate=rechecked -->
