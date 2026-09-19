# Team lead — Task — nghiem-thu (mobile list · Công tác nghiệm thu)

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
| route_confirm | **route_a** — hub `#row-nghiem-thu` → push `#sc-nghiem-thu` · Back → patrol-home · tab **patrol** · **cấm** `mfeStdUrl` |
| ios_repo_confirm | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.iOS` · **reuse** |
| android_repo_confirm | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Android` · **reuse** |
| bff | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Bff` · prefix `mobile-bff/api/v1` · catch-all proxy · **cấm** invent NT controller |
| backend | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.WebService` · Patrol · `api/v1/patrol/nghiem-thu` **live** · **cấm ERP.*** |
| thisAction | **List** `#sc-nghiem-thu` only · Search + rows + Tạo nav · **1 action = 1 feature** · **cấm** gộp create/detail form (`GAP-MOB-ACT-01/02`) |
| web keep | Full Kind B web **confirmed** · delta = native list + Mobile.Bff wire |
| autoApprove | **ON** |
| e2eQa | ON queued `/agent-qa*` only · `yarn e2e-qa-mobile` · **cấm** e2e / `start:std` / `yarn build` ở TL |
| contentHash | `sha256:a635f3f55a8bedd952c4449056cf072a8eda890eda2b30a45e84bda5d7bf3859` |
| prior · data_analy | **done** · compact `handoff/data_analy-compact.md` · `task_1bd5874a` |
| prior · po | **done** · compact `handoff/po-compact.md` · `task_da538308` |
| prior · design | **done** · compact `handoff/design-compact.md` · design_confirm=approve · `task_059c4327` |
| prior · sa | **confirmed** · compact `handoff/sa-compact.md` · solution_confirm=approve · migration=**no** · Step 4b **SKIP** · `task_ca050f3a` |
| taskId | `task_b4b91c07` |
| skillVersion | `2026.08.25.01` |
| updatedAt | `2026-09-19T16:05:00.000Z` |

**Cấm:** invent API / NT BFF controller · ERP.* · maintenance WO · sessions reuse · WebView HTML · `mfeStdUrl` native · start sibling `nghiem-thu-create` / `nghiem-thu-detail` (`GAP-MOB-ACT-06`) · gộp iOS+Android 1 task id · scaffold_new · Step 4b / migration · TL chạy e2e / build · implement native code ở role TL · ingest Pipeline web lên lane mobile.

---

## AskQuestion gates (autoApprove=ON)

| Gate | Decision |
|------|----------|
| `ios_repo_confirm` | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.iOS` · reuse |
| `android_repo_confirm` | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Android` · reuse |
| `be_repo_confirm` | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.WebService` · Patrol reuse · API live |
| `route_confirm` | **route_a** — hub `#row-nghiem-thu` → `#sc-nghiem-thu` · deep-link owner `nghiem-thu` · không tab mới |
| `kit_missing_confirm` | **N/A** — TopBar / SearchField / ListRow / Badge / Empty / Toast / TextButton **đã map** · **cấm** `T-KIT-*` |
| `T-BE-*` | **n/a** — Schema_NghiemThu exists · migration=**no** · List API-01 + init API-00 **live** |
| `T-BFF-*` | **n/a** — Mobile.Bff catch-all đủ path |

### route_confirm (autoApprove=ON)

| Option | Decision |
|--------|----------|
| **route_a** (chọn) | Entry: patrol hub `#row-nghiem-thu` → **push** `#sc-nghiem-thu` `DES-MOB-NGHIEM-THU`. Back / leading → patrol-home (iOS text **Tuần đường** + chevron · Android icon-only OK). Shell Tab **patrol** active · pack `tabs: none` in-screen. **Tạo** → local navigate `nghiem-thu-create` (sibling **pending_confirm** · wire stub/toast OK · **cấm** implement create form). **rowTap** → `nghiem-thu-detail` + `Id` (pending_confirm · navigate only). |
| route_b | — không dùng (`mfeStdUrl` / web deep-link) |
| route_c | — không dùng |

IA: `(auth) → Tab patrol → hub #row-nghiem-thu → #sc-nghiem-thu`. **Cấm** invent tab · **cấm** `TabView` thay `LinmTabBar`.

AskQuestion: `route_confirm=route_a` · repos reuse · `kit_missing_confirm=N/A` · `2026-09-19T16:05:00.000Z` (autoApprove ON).

---

## Source lock

| Key | Value |
|-----|-------|
| ios | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.iOS` · `ios_repo_confirm` |
| android | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Android` · `android_repo_confirm` |
| bff | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Bff` · `mobile-bff/api/v1` |
| be | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.WebService` · Patrol · **cấm ERP.*** |
| app base | `{BffBase}/mobile-bff/api/v1` |
| API P1 read | **`GET patrol/nghiem-thu`** (?search= · page) · **`GET …/init-data`** (status badges) |
| API P1 write | **none** on list slug · C/E/V/D/Files → siblings OUT |
| Files / GPS / camera / offline | **OUT** list P1 · fail→toast |
| kit | `LinmTopBar` · `LinmSearchField` · `LinmListRow` · Badge · EmptyChrome · `LinmToast` · TextButton · `LinmTabBar` shell · map `ui/html-to-native-map.md` · **không** `T-KIT-*` |
| scaffold | repos **đã có** — **không** `/mobile-app-architecture` |
| Step 4b | **SKIP** — reuse live BE + BFF proxy |

---

## Live gap (TL audit · mobile list)

| Surface | Live | TL task |
|---------|------|---------|
| iOS `#sc-nghiem-thu` | edit_page — ship/re-verify list Search+rows | **T-IOS-NGHIEM-THU** |
| Android `#sc-nghiem-thu` | same dual | **T-AND-NGHIEM-THU** |
| `GET …/patrol/nghiem-thu` + init-data | BE Patrol + BFF catch-all **live** | **reuse** · **cấm** invent |
| Schema_NghiemThu / media | exists · migration=**no** | **T-BE-*** = **n/a** |
| Filter status/route/template | PO optional P1 sheet | **OUT** list P1 — SearchField only |
| Sibling create/detail | pending_confirm | navigate only · **cấm** start pack |
| Kit TopBar+Search+List+Empty | dual Design map | **cấm** `T-KIT-*` |

---

## Tasks

| id | layer | deps | status | skills / devSlash | DoD |
|----|-------|------|--------|-------------------|-----|
| T-KIT-NGHIEM-THU | kit | — | **n/a** | — | Kit **đã map** · **không** giao Dev kit |
| **T-IOS-NGHIEM-THU** | ios | SA · route_a | **pending** | `/agent-dev-ios` · `/ios-new-screen` · `/dev-ios-swiftui` · `/mobile-ui-ux-analy` | Ship `Presentation/Features/NghiemThu/*` list · TopBar + Search + rows + empty/toast · wire hub + Tạo/detail navigate · `xcodegen` + `xcodebuild` dest **iPhone 17 Pro Max** (+ iPad Pro 13-inch M5 verify) PASS · `implement/ios.md` |
| **T-AND-NGHIEM-THU** | android | SA · route_a | **pending** | `/agent-dev-android` · `/android-new-screen` · `/dev-android-compose` · `/android-new-api-call` | Same field/API dual · `presentation/feature/nghiemthu/*` · `./gradlew :app:assembleDebug` PASS · `implement/android.md` |
| **T-BE-API** | be | — | **n/a** | — | API-01/00 **live** · **không** `/new-endpoint` · Step 4b **SKIP** |
| **T-BE-MIG** | be | — | **n/a** | — | migration=**no** · Schema exists |
| T-BFF-* | bff | — | **n/a** | — | catch-all proxy đủ |
| T-QA-TAB-01 | qa cite | Dev dual | pending | `/agent-qa-mobile` | Shell Tab patrol · pack `tabs: none` · cite `tab-index-analy-review.md` |
| T-QA-NGHIEM-THU | qa | T-IOS · T-AND | pending | `/agent-qa-mobile` | AC list slug only · `yarn e2e-qa-mobile` · store `qa/store/nghiem-thu` · **cấm** sibling form in-scope · **cấm** `yarn e2e-qa` web |

**Serial Dev:** `/agent-dev-ios` (`T-IOS-NGHIEM-THU`) → `/agent-dev-android` (`T-AND-NGHIEM-THU`) · **cấm** 1 task id gộp hai nền · **cấm** TL chạy build/e2e.

**Web form-type pack** (`T-UI-LIST` / filter / Leave Full 5col) = **KEEP web** · **không** re-emit trên lane mobile list.

---

## T-IOS-NGHIEM-THU — detail

| | |
|--|--|
| `source.repo` | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.iOS` |
| `ssot.zones` | `DES-MOB-NGHIEM-THU` · `#sc-nghiem-thu` · `DES-MOB-NT-SEARCH` |
| Pattern | Full screen push · frame proto ios |

### UI (kit cite — `ui/html-to-native-map.md`)

| id | Kit | Notes |
|----|-----|-------|
| navBack | `LinmTopBar` leading | **Tuần đường** · → patrol-home |
| title | `LinmTopBar` | **Công tác nghiệm thu** fixed |
| navCreate | TextButton | **Tạo** · navigate `nghiem-thu-create` only |
| search | `LinmSearchField` | placeholder **Tìm mẫu nghiệm thu…** · `?search=` |
| rowCode | Text | `NT-*` · Code |
| rowSub | Text | Mẫu · tuyến · Km |
| rowStatus | Badge | Nháp / Đang NT / Hoàn thành / Hủy · init-data |
| rowTap | `LinmListRow` | → detail + Id |
| empty | EmptyChrome | **Chưa có phiếu…** (0 items) |
| toastFail | `LinmToast` | **Không tải được…** · **cấm** native alert · **cấm** demoItems |

### API wire

| FormMode | Endpoint |
|----------|----------|
| List | `GET mobile-bff/api/v1/patrol/nghiem-thu` |
| Lookups/status | `GET …/patrol/nghiem-thu/init-data` |
| C/E/V/D/Files | **OUT** — siblings |

**Perm:** `patrol.nghiem-thu.read` (list).  
**Gates:** TZ=required · XCO=required · SHARE=tenant_keep (BE keep).  
**DoD:** build PASS · field parity Design dual · empty/toast · **cấm** invent path · ghi `implement/ios.md`.

---

## T-AND-NGHIEM-THU — detail

| | |
|--|--|
| `source.repo` | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Android` |
| `ssot.zones` | same DES-MOB-NGHIEM-THU |
| Pattern | same list · Material3 dual parity |

Same inventory / API / nav / empty / toast as iOS.  
**DoD:** `./gradlew :app:assembleDebug` PASS · `implement/android.md`.

---

## QA cite (không chạy ở TL)

- **T-QA-NGHIEM-THU** · `/agent-qa-mobile` · e2eQa ON
- reviewUrlIos / reviewUrlAndroid = Design dual prototype paths
- peerStdUrl=`http://localhost:9304/patrol` (web ref only)

---

## GAP closed (TL mobile)

| GAP | Status |
|-----|--------|
| GAP-MOB-ACT-01/02 | closed — 1 action list only |
| GAP-MOB-ACT-06 | closed — siblings pending_confirm · không start |
| GAP-MOB-BFF-01 | closed — T-BFF n/a catch-all |
| GAP-MOB-BE-BUILD-01 | n/a — no T-BE |
| GAP-TL-DEV-ASSIGN-01 | closed — `/agent-dev-ios` + `/agent-dev-android` |
| route_confirm | **approve** route_a |

## Handoff next

1. `/agent-dev-ios` · `T-IOS-NGHIEM-THU`
2. `/agent-dev-android` · `T-AND-NGHIEM-THU`
3. `/agent-qa-mobile` · e2e queued

**roleOnly=team_lead** · **GAP-PKT-ROLE-01** — không start Dev trong task này.
