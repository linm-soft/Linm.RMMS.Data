# Team lead — Task — nghiem-thu-create (mobile sheet · Tạo nghiệm thu)

| Field | Value |
|-------|-------|
| feature | `nghiem-thu-create` |
| title | [Mobile] [Công tác nghiệm thu] -> Tạo nghiệm thu |
| this role | `team_lead` · `/agent-tl-mobile` |
| status | `confirmed` |
| changeScope | `new_page` |
| packKind | **`sheet`** |
| stack | `native_dual` |
| Feature Kind | **sheet→screen** · `DES-MOB-NGHIEM-THU-CREATE` · `#sc-nghiem-thu-create` · **cấm** Kind A–G web / Lin* / Grid / Report / `mfeStdUrl` native · **cấm** Full list/detail trên slug |
| formPattern | **sheet→screen** · FormMode Create draft P1 · TopBar + 3 ListRows · leave-dirty Must |
| route_confirm | **route_a** — list `#sc-nghiem-thu` nav **Tạo** → push `#sc-nghiem-thu-create` · Back → list · tab **patrol** · **cấm** `mfeStdUrl` |
| ios_repo_confirm | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.iOS` · **reuse** |
| android_repo_confirm | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Android` · **reuse** |
| bff | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Bff` · prefix `mobile-bff/api/v1` · catch-all + `files/*` · **cấm** invent NT create controller |
| backend | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.WebService` · Patrol · `api/v1/patrol/nghiem-thu` **live** · **cấm ERP.*** |
| thisAction | **Tạo nghiệm thu** only · entry parent list **Tạo** · **1 action = 1 feature** · **cấm** gộp list/detail (`GAP-MOB-ACT-01/02`) |
| web keep | peerStdUrl web ref only · delta = native Create sheet + BFF wire |
| autoApprove | **ON** |
| e2eQa | ON queued `/agent-qa*` only · `yarn e2e-qa-mobile` · **cấm** e2e / `start:std` / `yarn build` ở TL |
| contentHash | `sha256:c2b17a793325c8eb40cc64a98b7775db138841107cd178cd6a6aa12ba8cfa66f` |
| bffContentHash | `sha256:nghiem-thu-create-mobile-bff-20260919` |
| prior · data_analy | **confirmed** · compact `handoff/data_analy-compact.md` · `task_eb0e541f` |
| prior · po | **confirmed** · compact `handoff/po-compact.md` · `task_a31ee0a5` |
| prior · design | **confirmed** · compact `handoff/design-compact.md` · design_confirm=approve · `task_b6b0bafc` |
| prior · sa | **confirmed** · compact `handoff/sa-compact.md` · solution_confirm=approve · migration=**none** · Step 4b **SKIP** · `task_22aa08eb` |
| taskId | `task_ce5b70e0` |
| skillVersion | `2026.08.25.01` |
| updatedAt | `2026-09-19T17:30:00.000Z` |

**Cấm:** invent `api/v1/nghiem-thu-create` / `nghiem-thu-files` · ERP.* · enqueue Lưu/files · fake GPS / fake NT-* · WebView HTML · `mfeStdUrl` native · start sibling list/detail pack · gộp iOS+Android 1 task id · scaffold_new · Step 4b / migration · TL chạy e2e / build · implement native code ở role TL.

**SA → TL map:** T-NTC-01→**T-IOS-NGHIEM-THU-CREATE** · T-NTC-02→**T-AND-NGHIEM-THU-CREATE** · T-NTC-03 Privacy/Play ∈ cả hai · T-NTC-04 leave/GPS/toast ∈ cả hai · T-NTC-05 DOMAIN-MAP cite · **T-BE-*** = **n/a**.

---

## AskQuestion gates (autoApprove=ON)

| Gate | Decision |
|------|----------|
| `ios_repo_confirm` | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.iOS` · reuse |
| `android_repo_confirm` | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Android` · reuse |
| `be_repo_confirm` | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.WebService` · Patrol reuse · API live |
| `route_confirm` | **route_a** — list **Tạo** → `#sc-nghiem-thu-create` · deep-link owner create · không tab mới |
| `kit_missing_confirm` | **N/A** — TopBar / ListRow / Select sheet / PhotoRow / Toast / Modal leave+GPS **đã map** · **cấm** `T-KIT-*` |
| `T-BE-*` | **n/a** — Schema_NghiemThu + media live · migration=**none** · API-01/02/03 live |
| `T-BFF-*` | **n/a** — Mobile.Bff catch-all + files đủ path |

### route_confirm (autoApprove=ON)

| Option | Decision |
|--------|----------|
| **route_a** (chọn) | Entry: parent list `#sc-nghiem-thu` nav **Tạo** → **push** `#sc-nghiem-thu-create` `DES-MOB-NGHIEM-THU-CREATE`. Back / **Hủy** → list (+ leave-dirty Must nếu dirty). Shell Tab **patrol** active · pack `tabs: none` in-screen. Lưu success → toast + back list (hoặc stay per Design). Detail sibling = navigate only OUT. |
| route_b | — không dùng (`mfeStdUrl` / web deep-link) |
| route_c | — không dùng |

IA: `(auth) → Tab patrol → hub → #sc-nghiem-thu → Tạo → #sc-nghiem-thu-create`. **Cấm** invent tab · **cấm** `TabView` thay `LinmTabBar`.

AskQuestion: `route_confirm=route_a` · repos reuse · `kit_missing_confirm=N/A` · `2026-09-19T17:30:00.000Z` (autoApprove ON).

---

## Source lock

| Key | Value |
|-----|-------|
| ios | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.iOS` · `ios_repo_confirm` |
| android | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Android` · `android_repo_confirm` |
| bff | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Bff` · `mobile-bff/api/v1` |
| be | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.WebService` · Patrol · **cấm ERP.*** |
| app base | `{BffBase}/mobile-bff/api/v1` |
| API P1 read | **`GET patrol/nghiem-thu/init-data`** (TemplateTypes) |
| API P1 write | **`POST patrol/nghiem-thu`** · `CreateNghiemThuRequest` · `Status=draft` |
| Files | **`files/*`** · MediaIds guid[] max 10 · **cấm** invent nghiem-thu-files |
| GPS / camera / offline | GPS live · PrivacyInfo location+photos · **cấm** enqueue Lưu/files · fail→toast |
| kit | `LinmTopBar` · ListRow · Select `#sheet-mau` · PhotoRow · `LinmToast` · Modal leave/GPS · map `ui/html-to-native-map.md` · **không** `T-KIT-*` |
| scaffold | repos **đã có** — **không** `/mobile-app-architecture` |
| Step 4b | **SKIP** — reuse live BE + BFF proxy |

---

## Live gap (TL audit · mobile sheet Create)

| Surface | Live | TL task |
|---------|------|---------|
| iOS `#sc-nghiem-thu-create` | new_page — ship Create sheet | **T-IOS-NGHIEM-THU-CREATE** |
| Android `#sc-nghiem-thu-create` | same dual | **T-AND-NGHIEM-THU-CREATE** |
| `GET …/init-data` + `POST …/nghiem-thu` + `files/*` | BE Patrol + BFF catch-all **live** | **reuse** · **cấm** invent |
| Schema_NghiemThu / media | exists · migration=**none** | **T-BE-*** = **n/a** |
| Privacy / leave / GPS deny | Design Must · SA gates | ∈ T-IOS + T-AND (T-NTC-03/04) |
| Parent list / detail | siblings | entry from list · detail OUT |
| Kit TopBar+3 rows+modals | dual Design map | **cấm** `T-KIT-*` |

---

## Tasks

| id | layer | deps | status | skills / devSlash | DoD |
|----|-------|------|--------|-------------------|-----|
| T-KIT-NGHIEM-THU-CREATE | kit | — | **n/a** | — | Kit **đã map** · **không** giao Dev kit |
| **T-IOS-NGHIEM-THU-CREATE** | ios | SA · route_a | **pending** | `/agent-dev-ios` · `/ios-new-screen` · `/dev-ios-swiftui` · `/mobile-ui-ux-analy` · `/implement-show-leave-confirm` | Ship Create sheet · init+GPS+files+POST draft · PrivacyInfo location+photos · leave/GPS/toast · **cấm** enqueue · `xcodegen` + `xcodebuild` dest **iPhone 17 Pro Max** (+ iPad Pro 13-inch M5 verify) PASS · `implement/ios.md` |
| **T-AND-NGHIEM-THU-CREATE** | android | SA · route_a | **pending** | `/agent-dev-android` · `/android-new-screen` · `/dev-android-compose` · `/android-new-api-call` | Same field/API dual · Play location+photos · leave/GPS/toast · `./gradlew :app:assembleDebug` PASS · `implement/android.md` |
| **T-BE-API** | be | — | **n/a** | — | API-01/02/03 **live** · **không** `/new-endpoint` · Step 4b **SKIP** · DOMAIN-MAP Patrol cite |
| **T-BE-MIG** | be | — | **n/a** | — | migration=**none** · Schema exists |
| T-BFF-* | bff | — | **n/a** | — | catch-all + files proxy đủ |
| T-QA-TAB-01 | qa cite | Dev dual | pending | `/agent-qa-mobile` | Shell Tab patrol · pack `tabs: none` · cite `tab-index-analy-review.md` |
| T-QA-NGHIEM-THU-CREATE | qa | T-IOS · T-AND | pending | `/agent-qa-mobile` | AC Create slug only · `yarn e2e-qa-mobile` · store `qa/store/nghiem-thu-create` · leave/GPS/toast · **cấm** list/detail in-scope · **cấm** `yarn e2e-qa` web |

**Serial Dev:** `/agent-dev-ios` (`T-IOS-NGHIEM-THU-CREATE`) → `/agent-dev-android` (`T-AND-NGHIEM-THU-CREATE`) · **cấm** 1 task id gộp hai nền · **cấm** TL chạy build/e2e.

**Web form-type pack** (`T-UI-FORM` / Leave Full 5col) = **KEEP web** · **không** re-emit trên lane mobile sheet.

---

## T-IOS-NGHIEM-THU-CREATE — detail

| | |
|--|--|
| `source.repo` | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.iOS` |
| `ssot.zones` | `DES-MOB-NGHIEM-THU-CREATE` · `#sc-nghiem-thu-create` · `DES-MOB-GPS-DENY` · `DES-MOB-LEAVE` · `#sheet-mau` |
| Pattern | sheet→screen push · frame proto ios |
| SA cite | T-NTC-01 · T-NTC-03 · T-NTC-04 · T-NTC-05 |

### UI (kit cite — `ui/html-to-native-map.md`)

| id | Kit | Notes |
|----|-----|-------|
| navCancel | `LinmTopBar` leading / BackButton | **Hủy** · → list · leave-dirty Must |
| title | `LinmTopBar` | **Tạo nghiệm thu** fixed |
| navSave | TextButton | **Lưu** · POST draft · cùng slug |
| templateRow | Select LOOKUP_STATIC | mau-01…10 · init Label · **cấm** invent «Mặt đường» · picker `#sheet-mau` |
| locationRow | ListRow+GPS | Zone·Route·FieldInfo · deny→`DES-MOB-GPS-DENY` · **cấm** fake |
| attachRow | PhotoRow/files | MediaIds guid max 10 |
| assignee/inspectedAt | (ẩn) derived | auth + device now · Status=draft · **cấm** omit POST |
| toastOk/Fail | `LinmToast` | **Đã lưu nháp · NT-*** · fail toast · **cấm** alert |
| leave | Modal | `DES-MOB-LEAVE` · **Huỷ thay đổi?** |

### API wire

| FormMode | Endpoint |
|----------|----------|
| Create init | `GET mobile-bff/api/v1/patrol/nghiem-thu/init-data` |
| Create save | `POST mobile-bff/api/v1/patrol/nghiem-thu` · Status=draft |
| Media | `mobile-bff/api/v1/files/*` |
| List/Detail | **OUT** — siblings |

**Perm:** `patrol.nghiem-thu.write` (create draft) + read init.  
**Gates:** tz_required · xco_get_only · share_tenant (SA).  
**Offline:** **cấm** enqueue Lưu/files · toast fail.  
**DoD:** build PASS · field parity Design dual · PrivacyInfo · leave/GPS · **cấm** invent path · **cấm** demoItems · ghi `implement/ios.md`.

---

## T-AND-NGHIEM-THU-CREATE — detail

| | |
|--|--|
| `source.repo` | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Android` |
| `ssot.zones` | same DES-MOB-NGHIEM-THU-CREATE |
| Pattern | same Create · Material3 dual parity |
| SA cite | T-NTC-02 · T-NTC-03 · T-NTC-04 · T-NTC-05 |

Same inventory / API / nav / leave / GPS / toast as iOS · Play location+photos declarations.  
**DoD:** `./gradlew :app:assembleDebug` PASS · `implement/android.md`.

---

## QA cite (không chạy ở TL)

- **T-QA-NGHIEM-THU-CREATE** · `/agent-qa-mobile` · e2eQa ON
- reviewUrlIos=`file:///Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/nghiem-thu-create/ui/prototype/ios/index.html`
- reviewUrlAndroid=`file:///Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/nghiem-thu-create/ui/prototype/android/index.html`
- peerStdUrl=`http://localhost:9304/patrol` (web ref only)

---

## GAP closed (TL mobile)

| GAP | Status |
|-----|--------|
| GAP-MOB-ACT-01/02 | closed — 1 action Create only |
| GAP-MOB-ACT-06/07 | closed — siblings OUT · **cấm** enqueue Lưu/files |
| GAP-MOB-NTC-REQ/COPY/MAU/SAVE/MEDIA | closed — SA/Design · TL wire tasks |
| GAP-MOB-BFF-01 | closed — T-BFF n/a catch-all |
| GAP-MOB-BE-BUILD-01 | n/a — no T-BE |
| GAP-TL-DEV-ASSIGN-01 | closed — `/agent-dev-ios` + `/agent-dev-android` |
| GAP-TL-LEAVE-01 | closed — leave Must ∈ T-IOS/T-AND |
| route_confirm | **approve** route_a |

## Handoff next

1. `/agent-dev-ios` · `T-IOS-NGHIEM-THU-CREATE`
2. `/agent-dev-android` · `T-AND-NGHIEM-THU-CREATE`
3. `/agent-qa-mobile` · e2e queued

**roleOnly=team_lead** · **GAP-PKT-ROLE-01** — không start Dev trong task này.


## UI notes Dev — MOB-PERM-OS-01 (2026-09-20)

OS location/camera dialog first. GPS deny CTA **Mở Cài đặt** / **Để sau**. **Cấm** Sao chép hướng dẫn / clipboard. iOS already-denied camera → Settings only.

---
<!-- Version meta: skillId=agent-tl-mobile skillVersion=2026.08.25.01 schemaVersion=1 taskId=task_ce5b70e0 -->
