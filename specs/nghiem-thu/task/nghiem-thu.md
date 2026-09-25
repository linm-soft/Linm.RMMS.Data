# Team lead — Task — nghiem-thu (mobile list · § Delta MAU-10 + Result)

| Field | Value |
|-------|-------|
| feature | `nghiem-thu` |
| title | [Mobile] [Tuần đường] -> Công tác nghiệm thu (list) |
| this role | `team_lead` · `/agent-tl-mobile` |
| status | `confirmed` |
| changeScope | `edit_page` |
| packKind | **`list`** |
| stack | `native_dual` |
| Feature Kind | **list screen** · `DES-MOB-NGHIEM-THU` · `#sc-nghiem-thu` · **cấm** Kind A–G web / Lin* / Report / `mfeStdUrl` native |
| formPattern | **N/A** list · create/detail = sibling sheets **pending_confirm** |
| route_confirm | **route_a** keep — hub `#row-nghiem-thu` → push `#sc-nghiem-thu` · **không** URL mới |
| ios_repo_confirm | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.iOS` · **reuse** |
| android_repo_confirm | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Android` · **reuse** |
| bff | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Bff` · prefix `mobile-bff/api/v1` · catch-all proxy · **cấm** invent NT controller |
| backend | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.WebService` · Patrol · `api/v1/patrol/nghiem-thu` · **cấm ERP.*** |
| thisAction | **List** `#sc-nghiem-thu` only · overlay TemplateLabel + ResultCode · **1 action = 1 feature** · **cấm** gộp create/detail (`GAP-MOB-ACT-01/02`) |
| web keep | Full Kind B web **confirmed** · delta này = native list overlay · **cấm** re-emit web form-type pack |
| autoApprove | **ON** |
| e2eQa | ON queued `/agent-qa*` only · `yarn e2e-qa-mobile` · **cấm** e2e / `start:std` / `yarn build` ở TL |
| contentHash | `sha256:1044ba719edda88d256d5c2a780cd2293f2fab87e2a39acdbb86001fad6ff659` |
| prior · data_analy | **done** · compact `handoff/data_analy-compact.md` · `task_b82ebc4c` |
| prior · po | **done** · compact `handoff/po-compact.md` · `task_44dce651` |
| prior · design | **done** · compact `handoff/design-compact.md` · design_confirm=approve · `task_5999afb9` |
| prior · sa | **confirmed** · compact `handoff/sa-compact.md` · solution_confirm=approve · schema_choice=**child_table** · migration=**yes** · Step 4b **SKIP TL** · `task_1791e2ed` |
| taskId | `task_e1131e78` |
| skillVersion | `2026.08.25.01` |
| skillId | `agent-tl-mobile` |
| updatedAt | `2026-09-19T18:10:00.000Z` |

**Cấm:** invent API / NT BFF controller · ERP.* · maintenance WO · sessions reuse · WebView HTML · `mfeStdUrl` native · JSON blob scores trên parent · start sibling `nghiem-thu-create` / `nghiem-thu-detail` (`GAP-MOB-ACT-06`) · gộp iOS+Android 1 task id · scaffold_new · **TL chạy** Step 4b / `dotnet ef` / e2e / build · implement native ở role TL · ingest Pipeline web lên lane mobile · hiển thị raw `mau-0N` hoặc «Mẫu nghiệm thu NN».

---

## AskQuestion gates (autoApprove=ON)

| Gate | Decision |
|------|----------|
| `ios_repo_confirm` | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.iOS` · reuse |
| `android_repo_confirm` | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Android` · reuse |
| `be_repo_confirm` | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.WebService` · Patrol reuse |
| `route_confirm` | **route_a** keep — không URL mới · hub `#row-nghiem-thu` → `#sc-nghiem-thu` |
| `kit_missing_confirm` | **N/A** — TopBar / SearchField / ListRow / Badge / Empty / Toast / TextButton **đã map** · **cấm** `T-KIT-*` |
| `T-BE-*` | **pending Dev** — Schema_NghiemThuMau · migration=**yes** · list DTO thiếu TemplateLabel + ResultCode · init-data thiếu label MAU-10 + ResultCodes · **TL không chạy** Step 4b |
| `T-BFF-*` | **n/a** — Mobile.Bff catch-all đủ path · **cấm** NT controller |

### route_confirm (autoApprove=ON · URL không mới)

| Option | Decision |
|--------|----------|
| **route_a** (giữ) | Entry: patrol hub `#row-nghiem-thu` → **push** `#sc-nghiem-thu` `DES-MOB-NGHIEM-THU`. Back / leading → patrol-home (iOS text **Tuần đường** + chevron · Android icon-only OK). Shell Tab **patrol** active · pack `tabs: none` in-screen. **Tạo** → local navigate `nghiem-thu-create` (sibling **pending_confirm** · **cấm** implement create). **rowTap** → `nghiem-thu-detail` + `Id` (pending_confirm · navigate only). |
| route_b | — không dùng (`mfeStdUrl` / web deep-link) |
| route_c | — không dùng |

IA: `(auth) → Tab patrol → hub #row-nghiem-thu → #sc-nghiem-thu`. **Cấm** invent tab · **cấm** `TabView` thay `LinmTabBar`.

AskQuestion: `route_confirm=route_a` · repos reuse · `kit_missing_confirm=N/A` · `2026-09-19T18:10:00.000Z` (autoApprove ON).

---

## Source lock

| Key | Value |
|-----|-------|
| ios | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.iOS` · `ios_repo_confirm` |
| android | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Android` · `android_repo_confirm` |
| bff | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Bff` · `mobile-bff/api/v1` |
| be | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.WebService` · Patrol · **cấm ERP.*** |
| app base | `{BffBase}/mobile-bff/api/v1` |
| API P1 read | **`GET patrol/nghiem-thu`** (?search= · page) · **`GET …/init-data`** |
| API P1 write | **none** on list slug · C/E/V/D/Files/Scores → siblings OUT |
| Files / GPS / camera / offline | **OUT** list P1 · fail→toast · **cấm** offline queue mới |
| kit | `LinmTopBar` · `LinmSearchField` · `LinmListRow` · Badge · EmptyChrome · `LinmToast` · TextButton · `LinmTabBar` · map `ui/html-to-native-map.md` · type `LinmTokens` (`typography-analy-qa.md`) · **không** `T-KIT-*` |
| scaffold | repos **đã có** — **không** `/mobile-app-architecture` |
| Step 4b | **Dev** (T-BE) · **TL SKIP** — không `dotnet ef` ở role này |

---

## Live gap (TL audit · edit_page)

| Surface | Live | TL task |
|---------|------|---------|
| iOS `#sc-nghiem-thu` | list ship · thiếu TemplateLabel MAU-10 + badge ResultCode | **T-IOS-NGHIEM-THU** |
| Android `#sc-nghiem-thu` | same dual | **T-AND-NGHIEM-THU** |
| List DTO | Code · TemplateType · Route · Km · Status | **+** `TemplateLabel` · **+** `ResultCode` (null ẩn) · scores **OUT** |
| init-data | statuses + templateTypes | **+** label MAU-10 + criteria[] · **+** resultCodes pass/fail/deduct |
| Schema | Schema_NghiemThu | **+ Schema_NghiemThuMau** child_table · migration=**yes** |
| BFF | catch-all **live** | **T-BFF n/a** · **cấm** invent |
| Filter status/route/template | PO optional P1 | **OUT** — SearchField only |
| Sibling create/detail | pending_confirm | navigate only · **cấm** start pack |
| Kit | Badge đã map | **cấm** `T-KIT-*` |

---

## Tasks

| id | layer | deps | status | skills / devSlash | DoD |
|----|-------|------|--------|-------------------|-----|
| T-KIT-NGHIEM-THU | kit | — | **n/a** | — | Kit **đã map** · **không** giao Dev kit |
| **T-BE-MIG** | be | SA | **pending** | `/database-migration` · Dev Step 4b · **không** slash page | Schema_NghiemThuMau · parent ADD `ResultCode` varchar(16) null · `ResultNote` varchar(2000) null · `WorkStartedAt`/`WorkEndedAt` timestamptz null · child `NghiemThuScore` / `rmms_nghiem_thu_score` (CriterionCode · Verdict pass/fail/n_a · Note · SortOrder) · **cấm** JSON blob parent · pair Migrations + Api · **`dotnet build`** `Linm.RMMS.WebService` PASS (`be-dotnet-build-gate.md` · **GAP-MOB-BE-BUILD-01**) · **TL không chạy** |
| **T-BE-API** | be | T-BE-MIG | **pending** | cùng repo WebService · Dev Step 4b | List items **+** `TemplateLabel` · **+** `ResultCode` nullable · scores[] **OUT** list · init-data templateTypes.**label** MAU-10 + criteria[] · resultCodes `pass`/`fail`/`deduct` · value `mau-01`…`mau-10` **GIỮ** · **cấm** invent path · **cấm** ERP.* · **cấm** BFF controller · `dotnet build` WebService PASS |
| T-BFF-* | bff | — | **n/a** | — | catch-all proxy đủ · **GAP-MOB-BFF-01** closed |
| **T-IOS-NGHIEM-THU** | ios | T-BE-API · route_a | **pending** | `/agent-dev-ios` · `/edit-mobile-feature` · `/dev-ios-swiftui` · `/mobile-ui-ux-analy` | Edit `Presentation/Features/NghiemThu/*` · rowSub = TemplateLabel MAU-10 · tuyến · Km · badge ResultCode (null ẩn) · **cấm** render scores · `xcodegen` + `xcodebuild` dest **iPhone 17 Pro Max** + **iPad Pro 13-inch (M5)** PASS · `implement/ios.md` |
| **T-AND-NGHIEM-THU** | android | T-IOS-NGHIEM-THU | **pending** | `/agent-dev-android` · `/edit-mobile-feature` · `/dev-android-compose` | Same field/API dual · `presentation/feature/nghiemthu/*` · `./gradlew :app:assembleDebug` PASS · `implement/android.md` |
| T-QA-TAB-01 | qa cite | Dev dual | pending | `/agent-qa-mobile` | Shell Tab patrol · pack `tabs: none` · cite `tab-index-analy-review.md` |
| T-QA-NGHIEM-THU | qa | T-IOS · T-AND | pending | `/agent-qa-mobile` | AC list overlay only · `yarn e2e-qa-mobile` · store `qa/store/nghiem-thu` · **cấm** sibling form in-scope · **cấm** `yarn e2e-qa` web |

**Serial:** T-BE-MIG → T-BE-API (Step 4b **Dev**, repo WebService) → `/agent-dev-ios` → `/agent-dev-android`. **Cấm** 1 task id gộp hai nền · **cấm** TL chạy build/ef/e2e.

**Web form-type pack** (`T-UI-LIST` / filter / Leave / grid 5col) = **KEEP web** · **không** re-emit trên lane mobile list.

---

## T-BE-MIG — detail

| | |
|--|--|
| `source.repo` | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.WebService` |
| Migration name | **`Schema_NghiemThuMau`** |
| schema_choice | **child_table** |
| Gates | TZ=required · XCO=required · SHARE=tenant_keep |
| Validate | TemplateType ∈ mau-01…10 · ResultCode ∈ pass/fail/deduct khi Status=`done` · draft ResultCode null OK · Scores.CriterionCode ∈ catalog đúng TemplateType |
| Step 4b | **Dev only** · TL **SKIP** |

## T-BE-API — detail

| FormMode | Endpoint | Delta |
|----------|----------|-------|
| List | `GET mobile-bff/api/v1/patrol/nghiem-thu` | items + `TemplateLabel` + `ResultCode` · scores OUT |
| Lookups | `GET …/patrol/nghiem-thu/init-data` | templateTypes.label MAU-10 + criteria · resultCodes |
| C/E/V/D/Files/Scores | **OUT** siblings | **cấm** pack trong slug này |

**Perm list:** `patrol.nghiem-thu.read`. Write perm **OUT** list.

---

## T-IOS-NGHIEM-THU — detail

| | |
|--|--|
| `source.repo` | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.iOS` |
| `ssot.zones` | `DES-MOB-NGHIEM-THU` · `#sc-nghiem-thu` · `DES-MOB-NT-SEARCH` · `DES-MOB-NT-STATUS` · `DES-MOB-NT-RESULT` |
| Pattern | edit_page overlay · frame proto ios · **cấm** scaffold mới |

### UI (kit cite — `ui/html-to-native-map.md`)

| id | Kit | Notes |
|----|-----|-------|
| navBack | `LinmTopBar` leading | **Tuần đường** · → patrol-home |
| title | `LinmTopBar` | **Công tác nghiệm thu** fixed |
| navCreate | TextButton | **Tạo** · navigate `nghiem-thu-create` only |
| search | `LinmSearchField` | placeholder **Tìm mẫu nghiệm thu…** · `?search=` |
| rowCode | Text | `NT-*` · Code |
| rowSub | Text | **TemplateLabel** MAU-10 · Route · KmFrom · **cấm** raw `mau-0N` |
| rowStatus | Badge | Nháp / Đang NT / Hoàn thành / Hủy · init-data |
| rowResult | Badge | **Đạt / Không đạt / Khấu trừ** · `ResultCode` · **ẩn khi null** · `DES-MOB-NT-RESULT` |
| rowTap | `LinmListRow` | → detail + Id · **cấm** mở scores trên list |
| empty | EmptyChrome | **Chưa có phiếu…** (0 items) |
| toastFail | `LinmToast` | **Không tải được…** · **cấm** native alert · **cấm** demoItems · **cấm** hardcode 100 tiêu chí |

**DoD:** build PASS (Pro Max + iPad Pro 13-inch M5) · field parity Design dual · empty/toast · **cấm** invent path · ghi `implement/ios.md`.

---

## T-AND-NGHIEM-THU — detail

| | |
|--|--|
| `source.repo` | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Android` |
| `ssot.zones` | same DES-MOB-NGHIEM-THU · DES-MOB-NT-RESULT |
| Pattern | same list overlay · Material3 dual parity |

Same inventory / API / nav / empty / toast as iOS.  
**DoD:** `./gradlew :app:assembleDebug` PASS · `implement/android.md`.

---

## QA cite (không chạy ở TL)

- **T-QA-NGHIEM-THU** · `/agent-qa-mobile` · e2eQa ON
- reviewUrlIos = `file:///Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/nghiem-thu/ui/prototype/ios/index.html`
- reviewUrlAndroid = `file:///Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/nghiem-thu/ui/prototype/android/index.html`
- peerStdUrl=`http://localhost:9304/patrol` (web ref only · **cấm** `mfeStdUrl` native)

---

## GAP closed (TL mobile · edit_page)

| GAP | Status |
|-----|--------|
| GAP-MOB-ACT-01/02 | closed — 1 action list only |
| GAP-MOB-ACT-06 | closed — siblings pending_confirm · không start |
| GAP-MOB-BFF-01 | closed — T-BFF n/a catch-all |
| GAP-MOB-BE-BUILD-01 | **assigned** — T-BE DoD `dotnet build` WebService · TL không chạy |
| GAP-SA-MAU-01 / RESULT-01 / LABEL-01 | closed SA · TL gói T-BE + dual overlay |
| GAP-TL-DEV-ASSIGN-01 | closed — `/agent-dev-ios` + `/agent-dev-android` · T-BE `/database-migration` |
| route_confirm | **approve** route_a keep |

## Handoff next

1. Dev Step 4b · `T-BE-MIG` → `T-BE-API` · WebService · **không** start trong task TL
2. `/agent-dev-ios` · `T-IOS-NGHIEM-THU`
3. `/agent-dev-android` · `T-AND-NGHIEM-THU`
4. `/agent-qa-mobile` · e2e queued

**roleOnly=team_lead** · **GAP-PKT-ROLE-01** — không start Dev trong task này.
