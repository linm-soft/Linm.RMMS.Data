# Team lead — Task — nghiem-thu-detail (mobile sheet · Chi tiết nghiệm thu)

| Field | Value |
|-------|-------|
| feature | `nghiem-thu-detail` |
| title | [Mobile] [Công tác nghiệm thu] -> Chi tiết nghiệm thu |
| this role | `team_lead` · `/agent-tl-mobile` |
| status | `confirmed` |
| changeScope | `edit_page` |
| packKind | **`sheet`** |
| stack | `native_dual` |
| Feature Kind | **sheet→screen** · `DES-MOB-NGHIEM-THU-DETAIL` · `#sc-nghiem-thu-detail` · **cấm** Kind A–G web / Lin* / Grid / Report / `mfeStdUrl` native · **cấm** Full list/create trên slug |
| formPattern | **sheet→screen** · FormMode View + Edit cùng slug · TopBar + ListRows · leave-dirty Must |
| route_confirm | **route_a** — list `#sc-nghiem-thu` row → push `#sc-nghiem-thu-detail` View · Sửa/Lưu/Hủy cùng slug · Đóng → list · tab **patrol** · **cấm** `mfeStdUrl` |
| ios_repo_confirm | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.iOS` · **reuse** · screen detail **chưa** có (Create sibling có) |
| android_repo_confirm | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Android` · **reuse** |
| bff | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Bff` · prefix `mobile-bff/api/v1` · catch-all + `files/*` · **cấm** invent NghiemThu detail controller |
| backend | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.WebService` · Patrol · `api/v1/patrol/nghiem-thu/{id}` **live** · **cấm ERP.*** |
| thisAction | **Xem/Sửa phiếu nghiệm thu** only · entry parent list row · **1 action = 1 feature** · **cấm** gộp list/create (`GAP-MOB-ACT-01/02`) |
| web keep | peerStdUrl web ref only · delta = native View/Edit sheet + BFF wire |
| autoApprove | **ON** |
| e2eQa | ON queued `/agent-qa*` only · `yarn e2e-qa-mobile` · **cấm** e2e / `start:std` / `yarn build` ở TL |
| contentHash | `sha256:250aebcbfb9a445c517a0c40f399fee82a5a00d524499e7310fd7feac0fb5380` |
| bffContentHash | `sha256:nghiem-thu-detail-mobile-bff-20260919` |
| prior · data_analy | **confirmed** · compact `handoff/data_analy-compact.md` · `task_edea0c3a` |
| prior · po | **confirmed** · compact `handoff/po-compact.md` · `task_64a693da` |
| prior · design | **confirmed** · compact `handoff/design-compact.md` · design_confirm=approve · `task_69705146` |
| prior · sa | **confirmed** · compact `handoff/sa-compact.md` · solution_confirm=approve · migration=**none** · Step 4b **SKIP** · `task_1f6caf97` |
| taskId | `task_289c880a` |
| skillVersion | `2026.08.25.01` |
| updatedAt | `2026-09-19T19:08:00.000Z` |

**Cấm:** invent `api/v1/nghiem-thu-detail` / `files-nt` · ERP.* · enqueue Lưu/files/scores · fake GPS / fake NT-* · WebView HTML · `mfeStdUrl` native · start sibling list/create pack · gộp iOS+Android 1 task id · scaffold_new · Step 4b / migration · TL chạy e2e / build · implement native code ở role TL · DELETE P1 · «Mẫu nghiệm thu NN».

**SA → TL map:** T-NTD-01→**T-IOS-NGHIEM-THU-DETAIL** · T-NTD-02→**T-AND-NGHIEM-THU-DETAIL** · T-NTD-03 Privacy/Play ∈ cả hai · T-NTD-04 leave/GPS/toast ∈ cả hai · T-NTD-05 DOMAIN-MAP cite · **T-BE-*** = **n/a**.

Child sheets `#sheet-mau` · `#sheet-result` · `#sheet-status` = picker cùng slug · **không** task file riêng.

---

## AskQuestion gates (autoApprove=ON)

| Gate | Decision |
|------|----------|
| `ios_repo_confirm` | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.iOS` · reuse |
| `android_repo_confirm` | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Android` · reuse |
| `be_repo_confirm` | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.WebService` · Patrol reuse · API live |
| `route_confirm` | **route_a** — list row → `#sc-nghiem-thu-detail` · deep-link owner detail · không tab mới |
| `kit_missing_confirm` | **N/A** — TopBar / ListRow / Select sheets / PhotoRow / Toast / Modal leave+GPS **đã map** `ui/html-to-native-map.md` · **cấm** `T-KIT-*` |
| `T-BE-*` | **n/a** — Schema_NghiemThuMau live · migration=**none** · GET/init/PUT/files live |
| `T-BFF-*` | **n/a** — Mobile.Bff catch-all + files đủ path |

### route_confirm (autoApprove=ON)

| Option | Decision |
|--------|----------|
| **route_a** (chọn) | Entry: parent list `#sc-nghiem-thu` **row** → **push** `#sc-nghiem-thu-detail` `DES-MOB-NGHIEM-THU-DETAIL` FormMode **View**. **Sửa** → Edit cùng slug. **Lưu** → PUT cùng slug · toast «Đã lưu · {Code}» → View. **Hủy** → View (+ leave-dirty Must nếu dirty). **Đóng** → list. Shell Tab **patrol** active · pack `tabs: none` in-screen. Create sibling = navigate only OUT. id = list row id · **cấm** Code toast làm id. |
| route_b | — không dùng (`mfeStdUrl` / web deep-link) |
| route_c | — không dùng |

IA: `(auth) → Tab patrol → hub → #sc-nghiem-thu → row → #sc-nghiem-thu-detail`. **Cấm** invent tab · **cấm** `TabView` thay `LinmTabBar`.

AskQuestion: `route_confirm=route_a` · repos reuse · `kit_missing_confirm=N/A` · `2026-09-19T19:08:00.000Z` (autoApprove ON).

---

## Source lock

| Key | Value |
|-----|-------|
| ios | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.iOS` · `ios_repo_confirm` |
| android | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Android` · `android_repo_confirm` |
| bff | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Bff` · `mobile-bff/api/v1` |
| be | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.WebService` · Patrol · **cấm ERP.*** |
| app base | `{BffBase}/mobile-bff/api/v1` |
| API P1 open | **`GET patrol/nghiem-thu/{id}`** · `NghiemThuDto` + Scores |
| API P1 catalog | **`GET patrol/nghiem-thu/init-data`** · TemplateTypes + criteria · ResultCodes · Statuses |
| API P1 write | **`PUT patrol/nghiem-thu/{id}`** · `UpdateNghiemThuRequest` |
| Files | **`files/*`** · MediaIds guid[] max 10 · resign GET · **cấm** persist URL · **cấm** invent files-nt |
| GPS / camera / offline | GPS live Edit · View không gọi GPS · PrivacyInfo location+photos · **cấm** enqueue Lưu/files/scores · fail→toast |
| kit | `LinmTopBar` · `LinmListRow` · Select sheets · PhotoRow · `LinmToast` · Modal leave/GPS · type `LinmTokens` (`typography-analy-qa.md`) · map `ui/html-to-native-map.md` · **không** `T-KIT-*` |
| scaffold | repos **đã có** — **không** `/mobile-app-architecture` |
| Step 4b | **SKIP** — reuse live BE + BFF proxy · entity/migration=**none** |

---

## Live gap (TL audit · mobile sheet Detail)

| Surface | Live | TL task |
|---------|------|---------|
| iOS `#sc-nghiem-thu-detail` | chưa có feature (Create sibling có) | **T-IOS-NGHIEM-THU-DETAIL** |
| Android `#sc-nghiem-thu-detail` | same dual | **T-AND-NGHIEM-THU-DETAIL** |
| `GET …/{id}` + `init-data` + `PUT …/{id}` + `files/*` | BE Patrol + BFF catch-all **live** | **reuse** · **cấm** invent |
| Schema_NghiemThuMau / score / media | exists · migration=**none** | **T-BE-*** = **n/a** |
| Privacy / leave / GPS deny | Design Must · SA gates | ∈ T-IOS + T-AND (T-NTD-03/04) |
| Parent list / create | siblings | entry from list row · create OUT |
| Kit TopBar+rows+sheets+modals | dual Design map | **cấm** `T-KIT-*` |

---

## Tasks

| id | layer | deps | status | skills / devSlash | DoD |
|----|-------|------|--------|-------------------|-----|
| T-KIT-NGHIEM-THU-DETAIL | kit | — | **n/a** | — | Kit **đã map** · **không** giao Dev kit |
| **T-IOS-NGHIEM-THU-DETAIL** | ios | SA · route_a | **pending** | `/agent-dev-ios` · `/ios-new-screen` · `/dev-ios-swiftui` · `/mobile-ui-ux-analy` · `/implement-show-leave-confirm` | Ship View/Edit sheet · GET+init+GPS+files+PUT · PrivacyInfo location+photos · leave/GPS/toast · **cấm** enqueue · `xcodegen` + `xcodebuild` dest **iPhone 17 Pro Max** (+ iPad Pro 13-inch M5 verify · **cấm** claim iPad · family `1`) PASS · `implement/ios.md` |
| **T-AND-NGHIEM-THU-DETAIL** | android | SA · route_a | **pending** | `/agent-dev-android` · `/android-new-screen` · `/dev-android-compose` · `/android-new-api-call` | Same field/API dual · Play location+photos · leave/GPS/toast · `./gradlew :app:assembleDebug` PASS · `implement/android.md` |
| **T-BE-API** | be | — | **n/a** | — | API-01/02/03/04 **live** · **không** `/new-endpoint` · Step 4b **SKIP** · DOMAIN-MAP Patrol cite · DELETE OUT |
| **T-BE-MIG** | be | — | **n/a** | — | migration=**none** · Schema_NghiemThuMau exists · **GAP-MOB-BE-BUILD-01** n/a |
| T-BFF-* | bff | — | **n/a** | — | catch-all + files proxy đủ |
| T-QA-TAB-01 | qa cite | Dev dual | pending | `/agent-qa-mobile` | Shell Tab patrol · pack `tabs: none` · cite `tab-index-analy-review.md` |
| T-QA-NGHIEM-THU-DETAIL | qa | T-IOS · T-AND | pending | `/agent-qa-mobile` | AC detail slug only · `yarn e2e-qa-mobile` · store `qa/store/nghiem-thu-detail` · leave/GPS/toast · **cấm** list/create in-scope · **cấm** `yarn e2e-qa` web |

**Serial Dev:** `/agent-dev-ios` (`T-IOS-NGHIEM-THU-DETAIL`) → `/agent-dev-android` (`T-AND-NGHIEM-THU-DETAIL`) · **cấm** 1 task id gộp hai nền · **cấm** TL chạy build/e2e.

**Web form-type pack** (`T-UI-FORM` / Leave Full 5col) = **KEEP web** · **không** re-emit trên lane mobile sheet.

---

## T-IOS-NGHIEM-THU-DETAIL — detail

| | |
|--|--|
| `source.repo` | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.iOS` |
| `ssot.zones` | `DES-MOB-NGHIEM-THU-DETAIL` · `#sc-nghiem-thu-detail` · `DES-MOB-GPS-DENY` · `DES-MOB-LEAVE` · `#sheet-mau` · `#sheet-result` · `#sheet-status` |
| Pattern | sheet→screen push · frame proto ios |
| SA cite | T-NTD-01 · T-NTD-03 · T-NTD-04 · T-NTD-05 |

### UI (kit cite — `ui/html-to-native-map.md`)

| id | Kit | Notes |
|----|-----|-------|
| navClose | `LinmTopBar` leading / BackButton | **Đóng** · View → `#sc-nghiem-thu` |
| title | `LinmTopBar` | Code từ GET · NT-* |
| navEdit | TextButton | View → Edit · cùng slug |
| navSave | TextButton | **Lưu** · PUT · cùng slug · **cấm** enqueue |
| navCancel | TextButton | **Hủy** · discard → View · leave-dirty Must |
| templateRow | `LinmListRow` Select | TemplateLabel MAU-10 · mau-01…10 · `#sheet-mau` · **cấm** «Mẫu nghiệm thu NN» · **cấm** hardcode 100+ |
| resultRow | `LinmListRow` Select | pass/fail/deduct · `#sheet-result` |
| resultNote | TextField | ResultNote |
| scoreList | Checklist | Scores[] · n_a display **Không áp dụng** · criteria init-data |
| routeRow/kmRow/fieldRow | `LinmListRow`+GPS | Route · Km · FieldInfo · deny→`DES-MOB-GPS-DENY` · View không GPS · **cấm** fake |
| statusRow | Select | `#sheet-status` · done ⇒ ResultCode |
| workTime/note | DateTime/Text | WorkStartedAt · WorkEndedAt · Note · optional |
| attachRow | PhotoRow/files | MediaIds guid max 10 · Edit mới thêm · **cấm** persist URL |
| assignee/inspectedAt | (ẩn) derived | PUT required · **cấm** omit |
| toastOk/Fail | `LinmToast` | **Đã lưu · NT-*** · fail toast · **cấm** alert |
| leave | Modal | `DES-MOB-LEAVE` · **Huỷ thay đổi?** |

### API wire

| FormMode | Endpoint |
|----------|----------|
| View open | `GET mobile-bff/api/v1/patrol/nghiem-thu/{id}` |
| Catalog | `GET mobile-bff/api/v1/patrol/nghiem-thu/init-data` |
| Media | `mobile-bff/api/v1/files/*` · resign GET |
| Edit save | `PUT mobile-bff/api/v1/patrol/nghiem-thu/{id}` · `UpdateNghiemThuRequest` |
| List/Create/DELETE | **OUT** — siblings / P1 OUT |

**Perm:** `patrol.nghiem-thu.read` (View) · `patrol.nghiem-thu.write` (PUT). **Cấm** invent permission code mới.  
**Gates:** tz_required (`InspectedAt` · `WorkStartedAt` · `WorkEndedAt` · store UTC · display local · `/review-timezone-implement`) · xco_get_only · share_tenant (SA).  
**Offline:** **cấm** enqueue Lưu/files/scores · toast fail · **cấm** fake 200.  
**DTO:** giữ `NghiemThuDto` / `UpdateNghiemThuRequest` / score+media child · **cấm** fork · **cấm** parent JSON.  
**DoD:** build PASS · field parity Design dual · PrivacyInfo · leave/GPS · **cấm** invent path · **cấm** demo toast SSOT · ghi `implement/ios.md`.

---

## T-AND-NGHIEM-THU-DETAIL — detail

| | |
|--|--|
| `source.repo` | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Android` |
| `ssot.zones` | same DES-MOB-NGHIEM-THU-DETAIL |
| Pattern | same View/Edit · Material3 dual parity |
| SA cite | T-NTD-02 · T-NTD-03 · T-NTD-04 · T-NTD-05 |

Same inventory / API / nav / leave / GPS / toast as iOS · Play location+photos declarations.  
**DoD:** `./gradlew :app:assembleDebug` PASS · `implement/android.md`.

---

## QA cite (không chạy ở TL)

- **T-QA-NGHIEM-THU-DETAIL** · `/agent-qa-mobile` · e2eQa ON
- reviewUrlIos=`file:///Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/nghiem-thu-detail/ui/prototype/ios/index.html`
- reviewUrlAndroid=`file:///Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/nghiem-thu-detail/ui/prototype/android/index.html`
- peerStdUrl=`http://localhost:9304/nghiem-thu/:id` (web ref only)

---

## GAP closed (TL mobile)

| GAP | Status |
|-----|--------|
| GAP-MOB-ACT-01/02 | closed — 1 action Detail View/Edit only · child sheets cùng slug |
| GAP-MOB-ACT-07 | closed — **cấm** enqueue Lưu/files/scores |
| GAP-MOB-NT-BIND/LABEL/SAVE/MEDIA/DETAIL-01 | closed — SA/Design · TL wire tasks |
| GAP-MOB-BFF-01 | closed — T-BFF n/a catch-all |
| GAP-MOB-BE-BUILD-01 | n/a — no T-BE |
| GAP-TL-DEV-ASSIGN-01 | closed — `/agent-dev-ios` + `/agent-dev-android` |
| GAP-TL-LEAVE-01 | closed — leave Must ∈ T-IOS/T-AND |
| route_confirm | **approve** route_a |
| DELETE | OUT P1 |

## Handoff next

1. `/agent-dev-ios` · `T-IOS-NGHIEM-THU-DETAIL`
2. `/agent-dev-android` · `T-AND-NGHIEM-THU-DETAIL`
3. `/agent-qa-mobile` · e2e queued

**roleOnly=team_lead** · **GAP-PKT-ROLE-01** — không start Dev trong task này.

## UI notes Dev — MOB-PERM-OS-01 (2026-09-20)

OS location/camera dialog first. GPS deny CTA **Mở Cài đặt** / **Để sau**. **Cấm** Sao chép hướng dẫn / clipboard. iOS already-denied camera → Settings only. View read-only không gọi GPS. Edit chưa chốt GPS → chặn Lưu.

---
<!-- Version meta: skillId=agent-tl-mobile skillVersion=2026.08.25.01 schemaVersion=1 taskId=task_289c880a -->
