# PO — Requirement — feedback (mobile sheet → screen)

| Field | Value |
|-------|-------|
| feature | `feedback` |
| title | [Mobile] Góp ý |
| this role | `po` · `/agent-po-mobile` |
| changeScope | `edit_page` |
| packKind | **`sheet`** (PO chốt · form send từ Me · **đóng** GAP-MOB-FB-PACK-01 ≠ web `list`) · surface demo = **full screen** `#sc-feedback` (`.screen` · **không** bottom-sheet chrome) |
| stack | `native_dual` |
| thisAction | **Góp ý** `#sc-feedback` only · owner `DES-MOB-FEEDBACK` · entry Me `#row-feedback` · **cấm** gộp web Kind B list/schema · `citizen` · media attach |
| status | `confirmed` (autoApprove=ON) |
| requestSource | run packet `task_fddeb2c5` · `/agent-qldb-workflow-mobile` · roleOnly=`po` · `/agent-po-mobile` |
| autoApprove | **ON** — Design/SA tự confirm **khi tới lượt** · turn này **không** chain |
| e2eQa | ON khi QA · `yarn e2e-qa-mobile` · sim 6.9" + emulator + Maestro · PNG `qa/screens` + `qa/store/feedback` · **cấm** `yarn e2e-qa` / `yarn start:std` / `mfeStdUrl` / test thủ công thay runtime |
| prior | data-analy **confirmed** · `specs/_data-analy/feedback-control-hint.md` · `feedback-bff-endpoints.md` · `feedback-action-tree.md` · `feedback-real-data.md` · contentHash `sha256:feedback-mobile-control-hint-20260829` · real-data `sha256:feedback-mobile-real-data-20260829` · bffContentHash `sha256:feedback-mobile-bff-20260829` · action-tree `sha256:feedback-mobile-action-tree-20260829` · cluster `specs/feedback/specs/_data-analy/` **không tồn tại** — SSOT = 4 file `_data-analy/feedback-*` · **no Excel** · **hash skip** — **cấm** re-scan demo (`GAP-PO-DEMO-RESCAN-01`) |
| priorWeb | **giữ** · `po/requirement-web.md` (+ `ui|be|task|implement|qa|review` web) · Kind B list/full-page — **OUT** mobile P1 |
| `devSlash` | `/agent-dev-ios` + `/agent-dev-android` |
| updatedAt | `2026-08-29T06:02:00.000Z` |
| taskId | `task_fddeb2c5` |

**Cấm:** gộp sibling (`GAP-MOB-ACT-01/02`) · invent `api/v1/feedback` / `api/v1/nhan-dan/gop-ys` trên app · invent `FeedbackController` trên Mobile.Bff · Grid AC web / Report AC Lin* · ERP.* · WebView HTML · `mfeStdUrl` · `UIAlert` / `AlertDialog` / `window.alert` · watermark «Phiên bản Gói N» / «gen realapp» · «Có mạng» · device label «iPhone» / «· Android» · badge P1/P2 header · AC tap-cycle tín hiệu · AC implement lại kit đã map (`GAP-MOB-ACT-05`) · start sibling `pending_confirm` (`GAP-MOB-ACT-06`) · enqueue Gửi/body/toast (`GAP-MOB-ACT-07`) · fake toast «Đã gửi góp ý» khi POST fail · gộp `citizen` · re-scan demo HTML (`GAP-PO-DEMO-RESCAN-01`).

## 1. Goal

Màn **Góp ý** native dual (iOS SwiftUI + Android Compose): gửi phản ánh tính năng phần mềm từ hub **Tôi**. Persona: Tuần đường / Quản lý / Tuần kiểm · hiện trường. App **chỉ** `{BffBase}/mobile-bff/api/v1/…`. **Cấm** ERP.* · clone controller · WebView bọc HTML demo · `mfeStdUrl`.

**≠** Cổng người dân (`citizen`) — Me subtitle «Phản ánh tính năng phần mềm».

**1 action = 1 feature.** Slug `feedback` = screen `#sc-feedback` `DES-MOB-FEEDBACK`. **Cấm** gộp web Kind B inbox/list/schema · full-page 7-field form · `citizen` (`GAP-MOB-ACT-01`). Body / Gửi / toast = **cùng slug** — **cấm** enqueue (`GAP-MOB-ACT-07`).

Entry: Me row **Góp ý** `#row-feedback` · `#i-info` · `go('feedback')`.

## 2. changeScope `edit_page`

Pack **edit** stub native → màn thật (data-analy `changeScope=edit_page`).

| Layer | Current (native 2026-08-29) | New (SSOT mobile demo + CTX + live API) |
|-------|-----------------------------|----------------------------------------|
| Me entry | `row-feedback` → **toast only** (iOS/Android) | **Push** `#sc-feedback` «Góp ý» · back → Me |
| Screen | Không màn Góp ý | Full `#sc-feedback` · `DES-MOB-FEEDBACK` · label + textarea + primary |
| Body | — | «Nội dung góp ý» · placeholder SSOT · required |
| Send | — | «Gửi góp ý» → POST create · toast «Đã gửi góp ý» |
| Data | — | POST `integration/feedbacks` via Mobile.Bff · session → DTO |
| packKind | Web `list` Kind B | Mobile **`sheet`** (form send) · surface **screen** |
| CTX path | CTX `api/v1/nhan-dan/gop-ys` | Live `api/v1/integration/feedbacks` — cite live |

**Không** bảng Current vs New web admin. Prior web artifacts **giữ** · **OUT** mobile P1. SSOT visual = dual HTML `#sc-feedback` (iOS 390×844 · Android 412×915 · **parity copy** trừ chrome: iOS back text «Tôi» + chevron · Android icon-btn chevron only — **OK**).

## 3. DoD (đo được)

1. Dual native: iOS SwiftUI + Android Compose — **cùng** zone `#sc-feedback` `DES-MOB-FEEDBACK`: nav back → `me` · title **Góp ý** · label **Nội dung góp ý** · textarea · primary **Gửi góp ý** · toast. Frame proto iOS 390×844 · Android 412×915. Tab 5: tab **`me`** active · `tabs: none` trên surface (`GAP-TAB-01`). **Cấm** badge P1/P2 trên header.
2. Textarea required · placeholder **Mô tả tính năng cần sửa / bổ sung…** · empty → disable send **hoặc** banner/toast validation · **cấm** POST body trống.
3. Primary **Gửi góp ý** → `POST integration/feedbacks` · busy spinner · toast **Đã gửi góp ý** khi 200 · **cấm** native alert · **cấm** toast ok khi fail / 422 / mạng.
4. Hidden bind (không UI P1): `SenderName` từ Me/auth display name · `Role` từ session (`tuan-duong` \| `quan-ly` \| `tuan-kiem`) · `Category` default **`de-xuat`** · `Status`=`sent` · `SubmittedAt`=UTC now · `UserId` optional auth · **GAP-MOB-FB-CAT-01**.
5. Entry (reuse Me, **cấm** reimplement hub): Me **Góp ý** → **push** `#sc-feedback` (thay toast-only) · back «Tôi» / chevron → `me`.
6. Kit reuse: `LinmTopBar` · FieldLabel · `LinmTextArea` · `LinmPrimaryButton` · `LinmToast` · Me `LinmListRow` `#i-info`. **Cấm** invent tên kit · Design `kit_missing_confirm` nếu thiếu (`GAP-MOB-ACT-05`).
7. App chỉ `{BffPrefix}` · **cấm** biết RMMS `:5101` · token Keychain / Encrypted.
8. Perms: FE gate `integration.feedbacks.create` (BE stub OK P1) — **không** block PO.
9. Dev (role sau): iOS `xcodegen` + `xcodebuild` dest **iPhone 17 Pro** PASS · Android `assembleDebug` PASS · Mobile.Bff `dotnet build` PASS — **cấm** `yarn start:std` / `yarn build` web.
10. QA (role sau): Maestro slug `feedback` only · live sim 6.9" + emulator · store PNG `qa/store/feedback` · **cấm** `yarn e2e-qa` web · **cấm** test sibling / web list in-scope.
11. BE align: **không** invent path — reuse live `AppFeedbacksController` `POST api/v1/integration/feedbacks`. Step 4b **N/A** (schema Signed) · CTX path alias = GAP handoff SA. **Cấm** dedicated FeedbackController trên Mobile.Bff · **cấm** ERP.*.

## 4. CTX / DEM / DI inventory

| ID | Path | Loại |
|----|------|------|
| CTX-01 | `docs/context/features/feedback.md` | feature · path alias stale vs live |
| CTX-02 | `docs/context/features/me.md` | entry hub |
| DEM-01 | `specs/mobile-p1/ui/prototype/ios/index.html` `#sc-feedback` | iOS 390×844 · `DES-MOB-FEEDBACK` |
| DEM-02 | `specs/mobile-p1/ui/prototype/android/index.html` `#sc-feedback` | Android 412×915 · **cùng** field/CTA/toast |
| DEM-03 | `specs/feedback/ui/prototype/` | pack stub — Design chép dual từ mobile-p1 |
| DES | `specs/mobile-p1/ui/design.md` · `DES-MOB-FEEDBACK` | IA dưới Tôi |
| MAP | `docs/html-to-native-map.md` | TopBar / TextArea / Primary / Toast / ListRow |
| STR | `docs/mobile-strings.json` · `me.row.feedback*` · feedback.* | VN SSOT |
| DI-01 | — | **no Excel** |
| DA-01 | `specs/_data-analy/feedback-control-hint.md` | controlHint · tech factors · Delta |
| DA-02 | `specs/_data-analy/feedback-bff-endpoints.md` | BFF table |
| DA-03 | `specs/_data-analy/feedback-action-tree.md` | 1 action · share/reuse |
| DA-04 | `specs/_data-analy/feedback-real-data.md` | §A–§F bind |
| WEB | `po/requirement-web.md` (+ ui/be/task/…) | prior Kind B — **giữ** · OUT mobile |
| IOS | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.iOS` | native · Me toast stub |
| AND | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Android` | native · Me toast stub |
| BFF | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Bff` | `mobile-bff/api/v1` proxy |
| BE | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.WebService` | Integration · `AppFeedbacksController` · **cấm ERP.*** · **cấm** invent `nhan-dan/gop-ys` trên app |
| KIT | `Linm.Mobile.Kit.iOS` + `Linm.Mobile.Kit.Android` | TopBar / TextArea / Primary / Toast / ListRow |

**Cấm** cite `mfeStdUrl` / `http://localhost:9301/` trên artifact native. **Cấm** re-scan demo — inventory từ DA-* + CTX (hash skip).

## 5. controlHint (PO chốt — Design map kit · SA map API)

Nguồn DA-01 `#sc-feedback` dual. UNCLEAR field = **none**.

| Field | VN | controlHint | Required | Kit (iOS+Android cùng turn) | Notes |
|-------|----|-------------|----------|------------------------------|-------|
| navBack | Tôi | BackButton | * | `LinmTopBar` leading | `go('me')` · iOS text «Tôi» · Android icon-only OK |
| title | Góp ý | TopBar title | * | `LinmTopBar` | fixed 17 · **cấm** badge P1/P2 |
| bodyLabel | Nội dung góp ý | FieldLabel | * | | **13** |
| body | (textarea) | MultilineText | * | `LinmTextArea` | placeholder SSOT · value **≥16** |
| btnSend | Gửi góp ý | PrimaryButton | * | `LinmPrimaryButton` | POST create · busy |
| toastOk | Đã gửi góp ý | Toast | * | `LinmToast` | sau Create 200 |
| toastErr | (lỗi mạng / 422) | Toast | * | `LinmToast` | **cấm** fake ok |
| meRowTitle | Góp ý | ListRow | * | `LinmListRow` | entry · `#i-info` · reuse Me |
| meRowSub | Phản ánh tính năng phần mềm | ListRow sub | * | | ≠ citizen |

### Hidden bind (không control UI P1)

| Field | Source | Create DTO | Notes |
|-------|--------|------------|-------|
| senderName | Me / auth profile | `SenderName` | required |
| role | session map | `Role` | tuan-duong / quan-ly / tuan-kiem |
| category | default `de-xuat` | `Category` | **GAP-MOB-FB-CAT-01** — Design có thể thêm pill P2 |
| status | `sent` on submit | `Status` | |
| submittedAt | device UTC | `SubmittedAt` | |
| userId | auth subject | `UserId` | optional |
| code | server | — | `FB-YYYYMMDD-NNNN` response · show P2 optional |

Toast → `LinmToast`. **Cấm** AC implement raw control khi kit đã map.

## 6. BFF (PO chốt path — **cấm** invent)

App `ApiClient.base` = `{BffBase}/mobile-bff/api/v1`. Path **không** lặp prefix. Khớp DA-02 + real-data §B.

| Action / zone | Method | Path | In slug `feedback`? |
|---------------|--------|------|---------------------|
| Gửi góp ý | POST | `integration/feedbacks` | **yes** — CreateAppFeedbackRequest |
| Nav back | — | — | local → `me` |
| Body textarea | — | — | local input |
| Toast ok / err | — | — | UI after POST |
| GET list / detail | GET | `integration/feedbacks`… | **OUT** mobile P1 UI |

**Cấm** `POST feedback` · `POST nhan-dan/gop-ys` · `FeedbackController` · DbContext trên Mobile.Bff · app `:5101`.

### Create body map (P1)

| UI / session | → CreateAppFeedbackRequest |
|--------------|----------------------------|
| textarea body | `Body` * |
| Me display name | `SenderName` * |
| session role | `Role` * |
| default | `Category`=`de-xuat` * |
| submit | `Status`=`sent` * |
| now UTC | `SubmittedAt` * |
| auth | `UserId` optional |

## 7. Open questions — PO chốt (autoApprove=ON)

| ID | Question | Decision (PO) |
|----|----------|----------------|
| GAP-MOB-FB-NAV-01 | Me toast → nav | **IN P1:** push `#sc-feedback` · back → Me |
| GAP-MOB-FB-SCR-01 | Thiếu màn | **IN P1:** full `#sc-feedback` `DES-MOB-FEEDBACK` |
| GAP-MOB-FB-BODY-01 | Textarea | **IN P1:** bind label + placeholder SSOT · required |
| GAP-MOB-FB-SEND-01 | CTA | **IN P1:** POST + toast «Đã gửi góp ý» · **cấm** fake ok |
| GAP-MOB-FB-DATA-01 | API | **IN P1:** `POST integration/feedbacks` via BFF |
| GAP-MOB-FB-PACK-01 | sheet vs web list | **Chốt packKind=`sheet`** (form send) · surface **screen** · ≠ web `list` Kind B |
| GAP-MOB-FB-CTX-PATH-01 | CTX `nhan-dan/gop-ys` | **Cite live** `integration/feedbacks` · CTX alias = **stale** · SA/CTX align · **cấm** invent alias trên app |
| GAP-MOB-FB-CAT-01 | Category UI | **P1:** default `de-xuat` **không** pill UI · P2 Design optional pills |
| Email/notify · media | P2 | **DEFER** — không block |
| Auth `[RequirePermission]` | debt | **P1:** FE gate · BE stub OK |
| Sibling enqueue | Gửi / body / toast | **none** — cùng slug (`GAP-MOB-ACT-06/07`) |
| Cluster path | `specs/feedback/specs/_data-analy/` | **N/A.** Dùng `_data-analy/feedback-*.md` |
| GAP-PO-STORE-01 | signup / xóa TK | **N/A** — không signup |
| UNCLEAR fields | — | **none** — hash skip · **cấm** re-crawl CTX/demo |

## 8. Screens (REQUIRED)

| Surface | Demo | Pattern | FormMode | Actions **this** `{feature}` | `devSlash` |
|---------|------|---------|----------|------------------------------|------------|
| Góp ý | `#sc-feedback` `DES-MOB-FEEDBACK` · iOS + Android | **Screen** (tab me · packKind meta `sheet` · **không** Modal/Sheet chrome) | create (send form) | POST `integration/feedbacks` · toast · back Me | `/agent-dev-ios` + `/agent-dev-android` |

**Không** trên pack này: web Kind B list A–D · schema `app-feedbacks` · Slideout · Delete/Copy/View · full 7-field form · `citizen` · media · email · watermark Gói · invent path.

Reuse only: `me` (entry / back) · auth profile / session (hidden bind).

Frame: iOS 390×844 · Android 412×915 · safe area · content không đè notch / home indicator / `LinmTabBar`.

## 9. Device AC (REQUIRED)

| ID | Behavior | AC |
|----|----------|-----|
| AC-D-01 | Offline | Màn mở · POST fail → toast lỗi · **cấm** toast «Đã gửi góp ý» · **cấm** fake 200 · draft offline **DEFER** (demo không «Lưu nháp») |
| AC-D-02 | GPS | **N/A** |
| AC-D-03 | Leave dirty | Back với body đã gõ → confirm leave in-app (optional Design) · **cấm** native alert |
| AC-D-04 | Native alert | **Cấm** `UIAlert` / `AlertDialog` / `window.alert`. Mọi phản hồi = `LinmToast` / in-app modal |
| AC-D-05 | Keyboard | Textarea focus · keyboard **không** đè CTA «Gửi góp ý» |
| AC-D-06 | Safe area | TopBar + scroll form + CTA + tab không đè notch / home indicator |
| AC-D-07 | Biometric | **N/A** |
| AC-D-08 | Signal | **N/A** trên chrome · **cấm** «Có mạng» · **cấm** tap-cycle |
| AC-D-09 | Token | Bearer Keychain / Encrypted · app chỉ `{BffPrefix}` |
| AC-D-10 | Tab / swipe | Tab **Tôi** active · **cấm** segment trên surface · **cấm** `TabView` / M3 `NavigationBar` raw |
| AC-D-11 | Camera | **N/A** P1 (media = P2) |
| AC-D-12 | Push | **N/A** |
| AC-F-01 | Appear | Form trống · focus-ready · session bind ready |
| AC-F-02 | Validate | Body trống → không POST thành công |
| AC-F-03 | Send | POST `integration/feedbacks` · toast ok · **cấm** fake |
| AC-F-04 | Error | Toast lỗi · giữ form · **cấm** clear body khi fail |
| AC-F-05 | Dual parity | iOS + Android **cùng** copy zones (trừ back chrome) · **cấm** lệch (`GAP-MOB-ALIGN-01`) |
| AC-F-06 | Entry | Me → push owner · **cấm** toast-only sau ship |
| AC-F-07 | ≠ citizen | Subtitle / copy «tính năng phần mềm» · **cấm** nhầm cổng dân |

Typography: label/tab **13** · field value **≥16** (`typography-analy-qa.md`).

## 10. Leave / alert (REQUIRED)

| Case | UI |
|------|-----|
| Dirty leave | In-app confirm (kit · optional) · **cấm** native alert (`GAP-PO-LEAVE-01`) |
| POST fail | `LinmToast` lỗi · **cấm** alert · **cấm** toast ok |
| Offline POST | Toast lỗi · **cấm** fake 200 · draft **DEFER** |
| Send success | Toast **Đã gửi góp ý** |
| Empty body | Disable / validation toast · **cấm** POST |

## 11. Out of scope (this pack)

- Web Kind B admin list A–D · Zone F schema · full-page 7-field · Slideout · Delete/Copy/View
- `citizen` cổng dân
- Email/notify đội kỹ thuật · media attach (P2)
- Category pills UI P1 (default only)
- GET inbox native · show `Code` P1
- Offline draft «Lưu nháp» (demo không có)
- Step 4b / migration (schema Signed)
- Watermark Gói / device label / mfeStdUrl / ERP.* / badge P1/P2
- Enqueue sibling · re-scan demo HTML

## 12. KPI (HĐ Gói 1 — màn này)

Góp ý phần mềm = gửi nội dung phản ánh tính năng từ hub Tôi → POST thật · toast thành công. DoD pack: `#sc-feedback` dual + Me nav + textarea + POST `integration/feedbacks` — **không** omni-implement web inbox / citizen trong 1 slug.

## 13. Handoff → Design

| Field | Value |
|-------|-------|
| feature / packKind | `feedback` / **`sheet`** (confirmed · surface **screen** · đóng GAP-MOB-FB-PACK-01) |
| phase_from / phase_to | po **confirmed** → design pending |
| STATUS | `specs/feedback/STATUS.md` |
| Context / Demo / DI | CTX-01 · DEM dual `#sc-feedback` · no Excel |
| controlHint / UNCLEAR | §5 · none |
| Screens / Pattern / `devSlash` | Screen `#sc-feedback` · `/agent-dev-ios` + `/agent-dev-android` |
| Grid AC / Report AC | **N/A** — không list/report web trên pack mobile |
| peerStdUrl / reviewUrl | **cấm** `mfeStdUrl` · Design mở dual `file://…/prototype/{ios,android}/index.html#sc-feedback` + reviewUrl **cả hai** |
| ux-analy | `/mobile-ui-ux-analy` → `ui/ux-analy.md` §1–§9 **REQUIRED** trước `design_confirm` |
| Kit | TopBar / TextArea / Primary / Toast / ListRow reuse · `kit_missing_confirm` nếu cần · **cấm** bottom-sheet chrome |
| BFF | `feedback-bff-endpoints.md` · POST `integration/feedbacks` |
| Open questions | §7 đã chốt — Design **không** web list · category pills = P2 note · Create = POST thật |
| Next AskQuestion | autoApprove=ON — `design_confirm` khi Design xong **cả hai** mock + ux-analy |
| Next slash | `/agent-design-mobile` |
| Chain this turn | **không** (roleOnly=po) |
| e2eQa | ON khi QA · `yarn e2e-qa-mobile` · **cấm** yarn start:std / mfeStdUrl |
| SA note | GAP-MOB-FB-CTX-PATH-01 · GAP-MOB-FB-CAT-01 |

Design: HIG + Material · IA lock Tab 5 me · copy VN đúng HTML · **cấm** skin Ministry · packet `design-demo-ssot.md` · **cấm** re-scan demo từ đầu nếu hash skip (`GAP-DES-DEMO-RESCAN-01`).

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-po-mobile |
| skillVersion | 2026.08.25.01 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.25.01 |
| rulesVersion | 2026.08.25.2 |
| generatedAt | `2026-08-29T06:02:00.000Z` |
| versionGate | rechecked |
| contentHash | sha256:feedback-mobile-po-requirement-20260829 |
| priorControlHintHash | sha256:feedback-mobile-control-hint-20260829 |
| priorRealDataHash | sha256:feedback-mobile-real-data-20260829 |
| bffContentHash | sha256:feedback-mobile-bff-20260829 |
| actionTreeHash | sha256:feedback-mobile-action-tree-20260829 |
| taskId | `task_fddeb2c5` |

---
<!-- Version meta: skillId=agent-po-mobile skillVersion=2026.08.25.01 schemaVersion=1 workflowVersion=2026.08.25.01 rulesVersion=2026.08.25.2 versionGate=rechecked -->
