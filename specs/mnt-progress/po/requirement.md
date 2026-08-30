# PO — Requirement — mnt-progress (mobile sheet → screen · Cập nhật trạng thái)

| Field | Value |
|-------|-------|
| feature | `mnt-progress` |
| title | [Mobile] [Công việc] -> Cập nhật trạng thái |
| this role | `po` · `/agent-po-mobile` |
| changeScope | `new_page` |
| packKind | **`sheet`** (PO chốt · form cập nhật tiến độ từ mnt-list `#i-sync` · **đóng** GAP-MOB-MNT-PROG-PACK-01) · surface demo = **full screen** `#sc-mnt-progress` (`.screen` · **không** bottom-sheet chrome · **không** toast-only) |
| stack | `native_dual` |
| thisAction | **Cập nhật trạng thái** `#sc-mnt-progress` only · owner `DES-MOB-MNT-PROGRESS` · entry mnt-list card `#i-sync` · **cấm** gộp `mnt-chat` / `mnt-log` / `estimate` · web Kind B/form WO |
| status | `confirmed` (autoApprove=ON) |
| requestSource | run packet `task_df7a4a8b` · `/agent-qldb-workflow-mobile` · roleOnly=`po` · `/agent-po-mobile` |
| autoApprove | **ON** — Design/SA tự confirm **khi tới lượt** · turn này **không** chain |
| e2eQa | ON khi QA · `yarn e2e-qa-mobile` · sim 6.9" + emulator + Maestro · PNG `qa/screens` + `qa/store/mnt-progress` · **cấm** `yarn e2e-qa` / `yarn start:std` / `mfeStdUrl` / test thủ công thay runtime |
| prior | data-analy **confirmed** · `specs/_data-analy/mnt-progress-control-hint.md` · `mnt-progress-bff-endpoints.md` · `mnt-progress-action-tree.md` · `mnt-progress-real-data.md` · contentHash `sha256:mnt-progress-mobile-control-hint-20260829` · real-data `sha256:mnt-progress-mobile-real-data-20260829` · bffContentHash `sha256:mnt-progress-mobile-bff-20260829` · action-tree `sha256:mnt-progress-mobile-action-tree-20260829` · ctxContentHash `sha256:7575cc93a9fc1e4c2ac0bdbdc219fdb28db7c6177f83457b747529646244ccec` · demoContentHash `sha256:394ab44597648f04b25e6d58476378c16141feb53d3b58d39923b3defcff8328` · cluster `specs/mnt-progress/specs/_data-analy/` **không tồn tại** — SSOT = 4 file `_data-analy/mnt-progress-*` · **no Excel** · **hash skip** — **cấm** re-scan demo (`GAP-PO-DEMO-RESCAN-01`) |
| priorWeb | — (mobile-first · không `requirement-web.md` bắt buộc) · domain Maintenance web Kind B **OUT** pack này |
| `devSlash` | `/agent-dev-ios` + `/agent-dev-android` |
| updatedAt | `2026-08-29T06:04:19.000Z` |
| taskId | `task_df7a4a8b` |

**Cấm:** gộp sibling (`GAP-MOB-ACT-01/02`) · invent `api/v1/mnt-progress` · invent ProgressController trên Mobile.Bff · Grid AC web / Report AC Lin* · ERP.* · WebView HTML · `mfeStdUrl` · `UIAlert` / `AlertDialog` / `window.alert` · watermark «Phiên bản Gói N» / «gen realapp» · «Có mạng» · device label «iPhone» / «· Android» · badge P1/P2 header · AC tap-cycle tín hiệu · AC implement lại kit đã map (`GAP-MOB-ACT-05`) · start sibling `pending_confirm` (`GAP-MOB-ACT-06`) · enqueue Cập nhật / fields / camera / GPS (`GAP-MOB-ACT-07`) · fake toast ok khi POST fail · fake lat/lng · re-scan demo HTML (`GAP-PO-DEMO-RESCAN-01`).

## 1. Goal

Màn **Cập nhật trạng thái** native dual (iOS SwiftUI + Android Compose): từ danh sách công việc → header WO readonly · tiến độ % · ghi chú · ảnh hiện trường · vị trí GPS chốt → **Cập nhật** POST progress (hoặc **complete** khi 100%/hoàn thành). Persona: Tuần đường · Hạt · hiện trường. App **chỉ** `{BffBase}/mobile-bff/api/v1/…`. **Cấm** ERP.* · clone controller · WebView bọc HTML demo · `mfeStdUrl`.

**1 action = 1 feature.** Slug `mnt-progress` = screen `#sc-mnt-progress` `DES-MOB-MNT-PROGRESS`. **Cấm** gộp `mnt-list` list · `estimate` / `mnt-chat` / `mnt-log` · web Kind B/form (`GAP-MOB-ACT-01`). Header / % / ghi chú / ảnh / GPS / Cập nhật / complete = **cùng slug** — **cấm** enqueue (`GAP-MOB-ACT-07`). **Không** child sheet riêng (`GAP-MOB-ACT-02` = none · surface = **full screen**).

Entry: `mnt-list` card `#i-sync` (toast P1 «Cập nhật trạng thái · ảnh + định vị») → **push** `#sc-mnt-progress` (thay toast-only · **GAP-MOB-MNT-PROG-NAV-01** / **SCR-01**).

## 2. changeScope `new_page`

Pack **new** toast stub → màn thật (data-analy `changeScope=new_page`).

| ID | Current (native / demo P1) | New (SSOT mobile + CTX + live API) | Surface |
|----|----------------------------|------------------------------------|---------|
| GAP-MOB-MNT-PROG-NAV-01 | mnt-list `#i-sync` → **toast only** | Nav push `#sc-mnt-progress` «Cập nhật trạng thái» · back → `mnt-list` | mnt-list · mnt-progress |
| GAP-MOB-MNT-PROG-SCR-01 | Không màn progress | Full `#sc-mnt-progress` · `DES-MOB-MNT-PROGRESS` · Design tạo dual | screen |
| GAP-MOB-MNT-PROG-HDR-01 | — | Header WO title · code · status hiện tại (readonly) | card rows |
| GAP-MOB-MNT-PROG-PCT-01 | — | Field «Tiến độ (%)» 0–100 · Number / Slider | number * |
| GAP-MOB-MNT-PROG-NOTE-01 | — | «Ghi chú» MultilineText | textarea |
| GAP-MOB-MNT-PROG-PHOTO-01 | toast «ảnh» | PhotoRow + `#i-camera` capture | camera |
| GAP-MOB-MNT-PROG-GPS-01 | toast «định vị» | ListRow «Vị trí đã chốt» · device GPS · **cấm** fake · embed tóm tắt → `Note` | GPS |
| GAP-MOB-MNT-PROG-CTA-01 | — | Primary «Cập nhật» → POST progress · toast ok | CTA |
| GAP-MOB-MNT-PROG-DONE-01 | — | % = 100 / hoàn thành → POST `complete` cùng slug | CTA path |
| GAP-MOB-MNT-PROG-DATA-01 | — | Mobile.Bff `maintenance/work-orders/{id}/progress` (+ opt GET detail · complete) | BFF |
| GAP-MOB-MNT-PROG-MEDIA-01 | — | Camera UX · optional `ai-vision/uploads` · **không** MediaUrl trên progress body P1 | device / opt API |
| GAP-MOB-MNT-PROG-LABEL-01 | — | Status VN map = **mnt-list** chrome (Chờ xử lý / Đang xử lý / …) | meta |
| GAP-MOB-MNT-PROG-PACK-01 | scan `sheet` · demo toast | packKind=`sheet` · surface **screen** | meta |

**Không** đổi (OUT pack): `mnt-list` cards · `estimate` · `mnt-chat` · `mnt-log` · web Kind B/form WO · comments DEFER · Kind E summary · map embed.

**Không** bảng Current vs New web admin. SSOT visual = Design tạo dual `#sc-mnt-progress` từ controlHint (demo P1 chưa có screen — **GAP-MOB-MNT-PROG-SCR-01**). Frame proto iOS 390×844 · Android 412×915 · **parity copy** trừ chrome: iOS back text «Công việc» + chevron · Android icon-btn chevron only — **OK**.

## 3. DoD (đo được)

1. Dual native: iOS SwiftUI + Android Compose — **cùng** zone `#sc-mnt-progress` `DES-MOB-MNT-PROGRESS`: nav back → `mnt-list` · title **Cập nhật trạng thái** · header WO (title · code · status) · Tiến độ (%) · Ghi chú · Ảnh hiện trường + camera · Vị trí đã chốt · primary **Cập nhật** · toast. Frame proto iOS 390×844 · Android 412×915. Tab 5 shell **giữ** · tab **`work`** · `tabs: none` trên surface (`GAP-TAB-01`). **Cấm** badge P1/P2 trên header.
2. Prefill header: nav args (`id` · title · code · status · progress) và/hoặc `GET maintenance/work-orders/{id}` · thiếu `id` → banner · **chặn** submit. Demo fallback SSOT card «Vá mặt đường» / `Chờ xử lý` / progress `0` chỉ khi API fail + Design gate.
3. Field **Tiến độ (%)** required 0–100 · Number/Slider · invalid → disable primary **hoặc** toast validation · BE `ValidateProgress` 422 → toast lỗi · **cấm** fake %.
4. **Ghi chú** MultilineText optional · placeholder **Mô tả tiến độ / ghi chú hiện trường…** · value ≥16 · có thể nhúng GPS text P1.
5. **Ảnh hiện trường** PhotoRow + `#i-camera` · P1 UX bắt buộc theo toast demo · upload body MediaUrl **DEFER** / optional `ai-vision/uploads` nếu SA Signed (**GAP-MOB-MNT-PROG-MEDIA-01**) · **cấm** invent MediaUrl trên `ProgressWorkOrderRequest`.
6. **Vị trí đã chốt** ListRow từ device CL/Fused · deny → reuse `DES-MOB-GPS-DENY` · **cấm** fake lat/lng · không embed map · tóm tắt → `Note` (**GAP-MOB-MNT-PROG-GPS-01**).
7. Primary **Cập nhật** → `POST maintenance/work-orders/{id}/progress` body `{ ProgressPercent, Note? }` · busy · toast **Đã cập nhật tiến độ · {n}%** khi 200 · response `WorkOrderDto` refresh badge · **cấm** native alert · **cấm** fake ok khi fail.
8. Khi % = **100** hoặc user chọn hoàn thành → `POST …/{id}/complete` (`CompleteWorkOrderRequest` · Note opt) · status=`done` · ProgressPercent=100 · toast + back `mnt-list` (**GAP-MOB-MNT-PROG-DONE-01** · cùng slug).
9. Service behavior: WO `new` → auto `in_progress` trên progress · status display VN map mnt-list (**GAP-MOB-MNT-PROG-LABEL-01**).
10. Entry (reuse parent · **cấm** reimplement list): mnt-list `#i-sync` → **push** `#sc-mnt-progress` (thay toast-only).
11. Kit reuse map: `LinmTopBar` · `LinmListRow` / card-group · `LinmTextField` number/slider · `LinmTextArea` · PhotoRow · `LinmIconButton` `#i-camera` · `LinmPrimaryButton` · `LinmToast` · entry `#i-sync` · GPS deny modal kit. **Cấm** invent tên kit · Design `kit_missing_confirm` nếu thiếu (`GAP-MOB-ACT-05`).
12. Typography: label **13** · field value **≥16** · title **17** (`GAP-TYP-01`) · dual copy parity trừ chrome HIG vs Material.
13. App chỉ `{BffPrefix}` · **cấm** biết RMMS `:5101` · token Keychain / Encrypted.
14. Dev (role sau): iOS `xcodegen` + `xcodebuild` dest **iPhone 17 Pro** PASS · Android `assembleDebug` PASS · Mobile.Bff `dotnet build` PASS — **cấm** `yarn start:std` / `yarn build` web.
15. QA (role sau): Maestro slug `mnt-progress` only · live sim 6.9" + emulator · store PNG `qa/store/mnt-progress` · **cấm** `yarn e2e-qa` web · **cấm** test estimate/chat/log as in-scope.
16. BE align: **không** invent path — reuse live `WorkOrdersController` progress + complete. Step 4b **N/A** · **cấm** PO chạy migration. **Cấm** dedicated ProgressController trên Mobile.Bff · **cấm** ERP.*.

## 4. CTX / DEM / DI inventory

| ID | Path | Loại |
|----|------|------|
| CTX-01 | `docs/context/features/mnt-progress.md` | feature · domain Maintenance |
| CTX-02 | `docs/context/features/mnt-list.md` | parent entry `#i-sync` · status VN map |
| CTX-03 | `docs/context/features/maintenance.md` | WorkOrder · Progress / Complete |
| DEM-01 | `specs/mobile-p1/ui/prototype/ios/index.html` `#sc-mnt-list` `#i-sync` toast | iOS entry P1 · **chưa** `#sc-mnt-progress` |
| DEM-02 | `specs/mobile-p1/ui/prototype/android/index.html` cùng toast | Android entry P1 |
| DEM-03 | `specs/mnt-progress/ui/prototype/` | pack — Design tạo dual `#sc-mnt-progress` |
| DES | `DES-MOB-MNT-PROGRESS` (Design tạo) | IA dưới Công việc |
| MAP | `docs/html-to-native-map.md` | TopBar / ListRow / TextField / TextArea / Primary / Toast / IconButton / PhotoRow |
| DI-01 | — | **no Excel** |
| DA-01 | `specs/_data-analy/mnt-progress-control-hint.md` | controlHint · tech factors · Delta |
| DA-02 | `specs/_data-analy/mnt-progress-bff-endpoints.md` | BFF table |
| DA-03 | `specs/_data-analy/mnt-progress-action-tree.md` | 1 action · share/reuse |
| DA-04 | `specs/_data-analy/mnt-progress-real-data.md` | §A–§F bind |
| SCAN | `specs/_form-type-mobile/ACTION-TREE.md` | verify · **không** re-crawl demo |
| IOS | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.iOS` | native · toast stub |
| AND | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Android` | native · toast stub |
| BFF | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Bff` | `mobile-bff/api/v1` proxy |
| BE | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.WebService` | Maintenance · `WorkOrdersController` · **cấm ERP.*** · **cấm** invent `mnt-progress` path |
| KIT | `Linm.Mobile.Kit.iOS` + `Linm.Mobile.Kit.Android` | TopBar / ListRow / TextField / TextArea / Primary / Toast / IconButton |

**Cấm** cite `mfeStdUrl` / `http://localhost:9301/` trên artifact native. **Cấm** re-scan demo — inventory từ DA-* + CTX (hash skip).

## 5. controlHint (PO chốt — Design map kit · SA map API)

Nguồn DA-01 `#sc-mnt-progress` proposed + real-data §A+§B. UNCLEAR field = **none**.

| Field | VN | controlHint | Required | Kit (iOS+Android cùng turn) | Notes |
|-------|----|-------------|----------|------------------------------|-------|
| screenTitle | Cập nhật trạng thái | TopBar title | * | `LinmTopBar` | `DES-MOB-MNT-PROGRESS` · fixed 17 · **cấm** badge P1/P2 |
| navBack | Công việc | BackButton | * | `LinmTopBar` leading | `go('mnt-list')` · Android icon-only OK |
| woTitle | (tên CV) | ListRow / Text readonly | * | `LinmListRow` | nav / GET `title` · 13 / ≥16 |
| woCode | WO-* / CV-* | Text readonly | * | | `code` |
| woStatus | Tình trạng hiện tại | Badge / Status readonly | * | | status → VN mnt-list map |
| progressPct | Tiến độ (%) | NumberField / Slider | * | `LinmTextField` number/slider | 0–100 → `ProgressPercent` |
| note | Ghi chú | MultilineText | | `LinmTextArea` | → `Note` · + GPS text |
| photoLabel | Ảnh hiện trường | SectionLabel | * | | toast «ảnh» |
| photos | Ảnh | PhotoRow | | PhotoRow slots | attach P1 UX |
| addPhoto | (camera) | CameraButton | | `LinmIconButton` `#i-camera` | device capture |
| locationRow | Vị trí đã chốt | ListRow readonly | | `LinmListRow` | GPS · ±m · **cấm** fake |
| btnUpdate | Cập nhật | PrimaryButton | * | `LinmPrimaryButton` | POST progress · busy |
| toastOk | Đã cập nhật tiến độ · {n}% | Toast | * | `LinmToast` | sau 200 |
| toastErr | (lỗi mạng / 422) | Toast | * | `LinmToast` | **cấm** fake ok |
| gpsDeny | Định vị bị tắt | Modal | | kit `DES-MOB-GPS-DENY` | reuse |
| actProgress | Cập nhật trạng thái | IconButton | * | `LinmIconButton` `#i-sync` | entry mnt-list · `go('mnt-progress')` |

### Status VN map (display · chốt LABEL-01)

| API | VN (mnt-list SSOT) |
|-----|-------------------|
| `new` | Chờ xử lý |
| `in_progress` | Đang xử lý |
| `done` | Đã hoàn thành |
| `cancelled` | Đã hủy |

init-data labels («Mới» / «Đang thực hiện»…) **không** thay chrome list trên slug này.

Toast / banner → `LinmToast`. **Cấm** AC implement raw control khi kit đã map.

## 6. BFF (PO chốt path — **cấm** invent)

App `ApiClient.base` = `{BffBase}/mobile-bff/api/v1`. Path **không** lặp prefix. Khớp DA-02 + real-data §B.

| Action / zone | Method | Path | In slug `mnt-progress`? |
|---------------|--------|------|-------------------------|
| Prefill WO header | GET | `maintenance/work-orders/{id}` | **yes** — optional nếu nav payload đủ |
| Init status labels (opt) | GET | `maintenance/work-orders/init-data` | optional · display only · chrome = mnt-list map |
| **Cập nhật tiến độ** | POST | `maintenance/work-orders/{id}/progress` | **yes** — **primary CTA** |
| Hoàn thành (100% / done) | POST | `maintenance/work-orders/{id}/complete` | **yes** — cùng slug |
| Optional media init | POST | `ai-vision/uploads` | optional P1 · **GAP MEDIA** |
| Optional media object | PUT | `ai-vision/uploads/{id}/object` | optional |
| GPS chốt | — | — | device CL / Fused · **không** API |
| Camera capture | — | — | device · **không** API trên progress body |
| Tiến độ % / Ghi chú UI | — | — | local → body fields |
| Nav back | — | — | local · `mnt-list` |
| Toast ok / err | — | — | UI after POST |

**Cấm** `GET/POST mnt-progress` · invent progress path · `ProgressController` trên Mobile.Bff · DbContext trên BFF · app `:5101`.

### Bind (real-data §B)

| UI | → API |
|----|-------|
| woTitle / woCode / woStatus | nav / GET detail · display |
| progressPct | `ProgressPercent` * |
| note (+ GPS text) | `Note` optional |
| photos | device · **không** progress body P1 · opt uploads |
| locationRow | device · embed → `Note` |
| btnUpdate | `POST …/progress` · `ProgressWorkOrderRequest` |
| complete path | `POST …/complete` · `CompleteWorkOrderRequest` |

### ProgressWorkOrderRequest (live)

| Field | Required | Mobile P1 |
|-------|----------|-----------|
| `ProgressPercent` | yes (0–100) | field «Tiến độ (%)» |
| `Note` | opt | «Ghi chú» + GPS tóm tắt nếu có |

### CompleteWorkOrderRequest (cùng slug khi done)

| Field | Mobile P1 |
|-------|-----------|
| `Note` | opt · reuse ghi chú |
| Effect | `status=done` · `ProgressPercent=100` |

## 7. Open questions — PO chốt (autoApprove=ON)

| ID | Question | Decision (PO) |
|----|----------|----------------|
| GAP-MOB-MNT-PROG-PACK-01 | sheet vs screen | **Chốt packKind=`sheet`** · surface = **full screen** `#sc-mnt-progress` · **không** bottom-sheet chrome. Design STATUS packKind=`sheet`. |
| GAP-MOB-MNT-PROG-SCR-01 | Demo toast only | **Must** Design tạo dual `#sc-mnt-progress` `DES-MOB-MNT-PROGRESS` · thay toast stub. |
| GAP-MOB-MNT-PROG-NAV-01 | Toast → screen | **IN P1:** push từ `#i-sync` · back → `mnt-list`. |
| GAP-MOB-MNT-PROG-MEDIA-01 | MediaUrl trên body? | **P1:** camera UX bắt buộc · **không** MediaUrl trên progress body · optional uploads nếu SA Signed · **cấm** invent DTO fork. |
| GAP-MOB-MNT-PROG-GPS-01 | lat/lng API? | **P1:** device GPS + ListRow · embed tóm tắt `Note` · deny modal · **cấm** fake · **cấm** invent lat/lng field. |
| GAP-MOB-MNT-PROG-LABEL-01 | init-data vs list VN | **Giữ mnt-list copy** trên chrome (Chờ xử lý / Đang xử lý / …). |
| GAP-MOB-MNT-PROG-DONE-01 | complete vs progress@100 | **Cùng slug:** progress bình thường · khi 100%/hoàn thành → `POST complete`. |
| Sibling enqueue | Cập nhật / fields / camera / GPS / mnt-* | **none** — cùng slug hoặc siblings **không** start (`GAP-MOB-ACT-06/07`). |
| Cluster path | `specs/mnt-progress/specs/_data-analy/` | **N/A.** Dùng `_data-analy/mnt-progress-*.md`. |
| GAP-PO-STORE-01 | signup / xóa TK | **N/A** — không signup. |
| Step 4b | New endpoint? | **N/A** — reuse live progress + complete. |
| Hash skip | contentHash skip analy | **Cấm** re-scan demo HTML / crawl CTX (`GAP-PO-DEMO-RESCAN-01`). |
| Tab index | analy `tabs: none` | **Confirm none** trên surface · shell tab `work` = entry (`GAP-TAB-01`). |
| UNCLEAR fields | — | **none** — không AskQuestion field · hash skip · **cấm** re-crawl. |

## 8. Screens (REQUIRED)

| Surface | Demo | Pattern | FormMode | Actions **this** `{feature}` | `devSlash` |
|---------|------|---------|----------|------------------------------|------------|
| Cập nhật trạng thái | `#sc-mnt-progress` `DES-MOB-MNT-PROGRESS` · iOS + Android (Design tạo) | **Screen** (packKind meta `sheet` · **không** Modal/Sheet chrome) | edit (progress form) | GET detail opt · POST progress · POST complete · GPS · camera · toast · back | `/agent-dev-ios` + `/agent-dev-android` |

**Không** trên pack này: `estimate` / `mnt-chat` / `mnt-log` · web Kind B form WO · comments · Kind E summary · map embed · watermark Gói · invent path · bottom-sheet `#sheet-*`.

Reuse only: `mnt-list` (entry + back) · Maintenance live APIs (cite · không enqueue) · `DES-MOB-GPS-DENY` chrome.

Frame: iOS 390×844 · Android 412×915 · safe area · form + CTA + `LinmTabBar` không đè notch / home indicator.

## 9. Device AC (REQUIRED)

| ID | Behavior | AC |
|----|----------|-----|
| AC-D-01 | Offline | Màn **mở** · POST fail → toast lỗi · **cấm** fake 200 / fake % · offline queue **DEFER** · **cấm** full-screen block tab |
| AC-D-02 | GPS deny | ListRow trống / modal `DES-MOB-GPS-DENY` · vẫn submit được **không** GPS · **cấm** fake lat/lng |
| AC-D-03 | Leave dirty | Back với %/ghi chú/ảnh đã sửa → confirm leave in-app (toast/modal kit) · **cấm** native alert |
| AC-D-04 | Native alert | **Cấm** `UIAlert` / `AlertDialog` / `window.alert`. Mọi phản hồi = `LinmToast` / in-app modal |
| AC-D-05 | Keyboard | Number/% / note focus · keyboard không đè CTA Primary · dismiss không crash |
| AC-D-06 | Safe area | TopBar + scroll form + CTA + tab không đè notch / home indicator |
| AC-D-07 | Biometric | **N/A** |
| AC-D-08 | Signal | **N/A** trên chrome · **cấm** «Có mạng» · **cấm** tap-cycle |
| AC-D-09 | Token | Bearer Keychain / Encrypted · app chỉ `{BffPrefix}` |
| AC-D-10 | Tab / swipe | Shell tab **Công việc** giữ · in-screen tabs **none** · **cấm** invent segment · **cấm** `TabView` / M3 `NavigationBar` raw |
| AC-D-11 | Camera | PhotoRow + `#i-camera` · deny/cancel giữ form · **cấm** crash · MediaUrl body DEFER |
| AC-D-12 | Typography | label **13** · field ≥**16** · title **17** (`GAP-TYP-01`) |
| AC-D-13 | Push | **N/A** |
| AC-F-01 | Appear / prefill | nav / GET detail · fail → demo SSOT rows · screen vẫn mở · thiếu id → banner · chặn submit |
| AC-F-02 | Back | Pop `mnt-list` · **cấm** reimplement list |
| AC-F-03 | Header WO | title · code · status VN bind readonly |
| AC-F-04 | Progress % | 0–100 required · invalid → không POST thành công |
| AC-F-05 | Note | optional · ≥16 · + GPS text |
| AC-F-06 | Photo | PhotoRow + camera UX · **cấm** invent MediaUrl progress body |
| AC-F-07 | GPS | chốt device · ListRow · deny modal · **cấm** fake |
| AC-F-08 | Cập nhật | POST progress · toast **Đã cập nhật tiến độ · {n}%** · **cấm** fake |
| AC-F-09 | Complete | 100%/done → POST complete · toast · back list |
| AC-F-10 | Entry | mnt-list `#i-sync` → **push** `#sc-mnt-progress` (thay toast) |
| AC-F-11 | Dual parity | iOS + Android **cùng** fields + copy SSOT (`GAP-MOB-ALIGN-01`) trừ chrome back |
| AC-F-12 | Chrome | **Cấm** device label / proto-click / watermark Gói |
| AC-F-13 | 1 action | **Cấm** gộp estimate/chat/log (`GAP-MOB-ACT-01/02`) |

## 10. Leave / alert (REQUIRED)

| Case | UI |
|------|-----|
| Dirty leave | In-app confirm (kit) · **cấm** native alert (`GAP-PO-LEAVE-01`) |
| Missing WO id / invalid % | Banner/toast · **chặn** Cập nhật |
| POST progress fail | Toast lỗi · **cấm** fake % / fake ok |
| POST complete fail | Toast lỗi · **cấm** fake done |
| Success progress | Toast **Đã cập nhật tiến độ · {n}%** |
| Success complete | Toast ok · back `mnt-list` |
| GPS deny | Modal `DES-MOB-GPS-DENY` · form giữ |
| Offline | Toast lỗi / keep form · queue DEFER · **cấm** full-screen block |

## 11. Out of scope (this pack)

- `mnt-list` card layout / filters (parent reuse only)
- `estimate` / `mnt-chat` / `mnt-log` + API comments
- Web Kind B catalog / form full-page WO
- Kind E `maintenance/summary`
- Map embed trên sheet
- Invent `api/v1/mnt-progress` / MediaUrl trên Progress DTO trước SA Signed
- Offline queue / staff lookup
- Reimplement `#sc-mnt-list`
- Watermark Gói / device label / proto-click tín hiệu
- Start siblings `pending_confirm`
- ERP.* · `mfeStdUrl` · Grid AC web / Report AC Lin*
- Re-scan demo HTML (`GAP-PO-DEMO-RESCAN-01`)
- Step 4b / migration / e2e / `yarn start:std` ở role PO

## 12. KPI (HĐ Gói 1 — màn này)

Cập nhật tiến độ hiện trường = **một** push `#sc-mnt-progress` sau mnt-list `#i-sync` → điền % + ghi chú (+ ảnh/GPS UX) → POST progress thật (toast %) hoặc complete khi done. DoD pack: dual screen + BFF bind §6 — **không** omni-implement list / estimate / chat trong 1 slug.

## 13. Handoff → Design

| Field | Value |
|-------|-------|
| feature / packKind | `mnt-progress` / **`sheet`** (confirmed · surface **screen**) |
| phase_from / phase_to | po **confirmed** → design pending |
| STATUS | `specs/mnt-progress/STATUS.md` |
| Context / Demo / DI | CTX-01..03 · DEM entry toast · Design **tạo** dual `#sc-mnt-progress` · no Excel |
| controlHint / UNCLEAR | §5 · none (GAPs chốt §7) |
| Screens / Pattern / `devSlash` | Screen `#sc-mnt-progress` · `/agent-dev-ios` + `/agent-dev-android` |
| Grid AC / Report AC | **N/A** — pack sheet native · **cấm** Lin* grid AC |
| peerStdUrl / reviewUrl | **cấm** `mfeStdUrl` · Design mở dual `file://…/prototype/{ios,android}/index.html#sc-mnt-progress` + reviewUrl **cả hai** |
| ux-analy | `/mobile-ui-ux-analy` → `ui/ux-analy.md` §1–§9 **REQUIRED** trước `design_confirm` |
| Kit | reuse map · `kit_missing_confirm` nếu thiếu PhotoRow/slider · TopBar / ListRow / TextField / TextArea / Primary / Toast / IconButton / GPS deny |
| BFF | `mnt-progress-bff-endpoints.md` · progress + complete |
| Real-data | `mnt-progress-real-data.md` §A+§B |
| Open questions | §7 đã chốt — Design **tạo** `#sc-mnt-progress` dual · **không** bottom-sheet · **không** invent MediaUrl/lat-lng · giữ mnt-list status VN |
| Next AskQuestion | autoApprove=ON — `design_confirm` khi Design xong **cả hai** mock + ux-analy + `/review-demo-design-mobile` |
| Next slash | `/agent-design-mobile` |
| Chain this turn | **không** (roleOnly=po · **GAP-PKT-ROLE-01**) |
| e2eQa | ON khi QA · `yarn e2e-qa-mobile` · **cấm** yarn start:std / mfeStdUrl |

Design: HIG + Material · IA lock Tab 5 · copy VN từ controlHint + mnt-list SSOT · **cấm** skin Ministry · **cấm** «Có mạng» · packet `design-demo-ssot.md` · `/review-demo-design-mobile` trước confirm.

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-po-mobile |
| skillVersion | 2026.08.25.01 |
| schemaVersion | 2 |
| workflowVersion | 2026.08.25.01 |
| rulesVersion | 2026.08.25.2 |
| generatedAt | 2026-08-29T06:04:19.000Z |
| versionGate | rechecked |
| contentHash | sha256:mnt-progress-mobile-control-hint-20260829 |
| realDataContentHash | sha256:mnt-progress-mobile-real-data-20260829 |
| bffContentHash | sha256:mnt-progress-mobile-bff-20260829 |
| actionTreeContentHash | sha256:mnt-progress-mobile-action-tree-20260829 |
| ctxContentHash | sha256:7575cc93a9fc1e4c2ac0bdbdc219fdb28db7c6177f83457b747529646244ccec |
| demoContentHash | sha256:394ab44597648f04b25e6d58476378c16141feb53d3b58d39923b3defcff8328 |
| taskId | `task_df7a4a8b` |

---
<!-- Version meta: skillId=agent-po-mobile skillVersion=2026.08.25.01 schemaVersion=2 workflowVersion=2026.08.25.01 rulesVersion=2026.08.25.2 versionGate=rechecked -->
