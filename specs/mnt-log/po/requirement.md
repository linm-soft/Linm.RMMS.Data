# PO — Requirement — mnt-log (mobile sheet → screen · Nhật ký xử lý)

| Field | Value |
|-------|-------|
| feature | `mnt-log` |
| title | [Mobile] [Công việc] -> Nhật ký xử lý |
| this role | `po` · `/agent-po-mobile` |
| changeScope | `new_page` |
| packKind | **`sheet`** (PO chốt · nhật ký từ mnt-list `#i-list` · **đóng** GAP-MOB-MNT-LOG-PACK-01) · surface demo = **full screen** `#sc-mnt-log` (`.screen` · **không** bottom-sheet chrome · **không** toast-only) |
| stack | `native_dual` |
| thisAction | **Nhật ký xử lý** `#sc-mnt-log` only · owner `DES-MOB-MNT-LOG` · entry mnt-list card `#i-list` (status=`done`) · **cấm** gộp `mnt-chat` composer · `mnt-progress` write · `estimate` · web Kind B/form WO |
| status | `confirmed` (autoApprove=ON) |
| requestSource | run packet `task_d21ff1dc` · `/agent-qldb-workflow-mobile` · roleOnly=`po` · `/agent-po-mobile` |
| autoApprove | **ON** — Design/SA tự confirm **khi tới lượt** · turn này **không** chain |
| e2eQa | ON khi QA · `yarn e2e-qa-mobile` · sim 6.9" + emulator + Maestro · PNG `qa/screens` + `qa/store/mnt-log` · **cấm** `yarn e2e-qa` / `yarn start:std` / `mfeStdUrl` / test thủ công thay runtime |
| prior | data-analy **confirmed** · `specs/_data-analy/mnt-log-control-hint.md` · `mnt-log-bff-endpoints.md` · `mnt-log-action-tree.md` · `mnt-log-real-data.md` · contentHash `sha256:mnt-log-mobile-control-hint-20260829` · real-data `sha256:mnt-log-mobile-real-data-20260829` · bffContentHash `sha256:mnt-log-mobile-bff-20260829` · action-tree `sha256:mnt-log-mobile-action-tree-20260829` · ctxContentHash `sha256:87761a7752a493d6ad176d96d76ccaf6116ea407ec5ec5513b6e12372a58d701` · demoContentHash `sha256:394ab44597648f04b25e6d58476378c16141feb53d3b58d39923b3defcff8328` · parentCtxHash `sha256:1df1005f6c0810be8e03a28e3c5c0e5dcb216234db9101f1571348000d11ae1f` · cluster `specs/mnt-log/specs/_data-analy/` **không tồn tại** — SSOT = 4 file `_data-analy/mnt-log-*` · **no Excel** · **hash skip** — **cấm** re-scan demo (`GAP-PO-DEMO-RESCAN-01`) |
| priorWeb | — (mobile-first · không `requirement-web.md` bắt buộc) · domain Maintenance web Kind B **OUT** pack này |
| `devSlash` | `/agent-dev-ios` + `/agent-dev-android` |
| updatedAt | `2026-08-29T07:18:00.000Z` |
| taskId | `task_d21ff1dc` |

**Cấm:** gộp sibling (`GAP-MOB-ACT-01/02`) · invent `api/v1/mnt-log` / `…/logs` / `…/progress-history` · invent LogController trên Mobile.Bff · Grid AC web / Report AC Lin* · ERP.* · WebView HTML · `mfeStdUrl` · `UIAlert` / `AlertDialog` / `window.alert` · watermark «Phiên bản Gói N» / «gen realapp» · «Có mạng» · device label «iPhone» / «· Android» · badge P1/P2 header · AC tap-cycle tín hiệu · AC implement lại kit đã map (`GAP-MOB-ACT-05`) · start sibling `pending_confirm` (`GAP-MOB-ACT-06`) · enqueue timeline / header / empty / back (`GAP-MOB-ACT-07`) · fake timeline khi GET fail · composer chat / POST progress trên slug này · re-scan demo HTML (`GAP-PO-DEMO-RESCAN-01`).

## 1. Goal

Màn **Nhật ký xử lý** native dual (iOS SwiftUI + Android Compose): từ danh sách công việc (card **Đã hoàn thành**) → header WO readonly · timeline dọc các mốc xử lý (tạo · hạn · mô tả · tiến độ · ghi chú · hoàn thành) — **readonly**. Persona: Tuần đường · Hạt · hiện trường / quản lý xem lịch sử. App **chỉ** `{BffBase}/mobile-bff/api/v1/…`. **Cấm** ERP.* · clone controller · WebView bọc HTML demo · `mfeStdUrl`.

**1 action = 1 feature.** Slug `mnt-log` = screen `#sc-mnt-log` `DES-MOB-MNT-LOG`. **Cấm** gộp `mnt-list` list · `estimate` / `mnt-chat` / `mnt-progress` · web Kind B/form (`GAP-MOB-ACT-01`). Header / timeline / empty / back / toast = **cùng slug** — **cấm** enqueue (`GAP-MOB-ACT-07`). **Không** child sheet riêng · **không** Primary write CTA (`GAP-MOB-ACT-02` = none · surface = **full screen**).

Entry: `mnt-list` card `#i-list` trên card status=`done` (toast P1 «Nhật ký xử lý») → **push** `#sc-mnt-log` (thay toast-only · **GAP-MOB-MNT-LOG-NAV-01** / **SCR-01** / **ENTRY-01**).

## 2. changeScope `new_page`

Pack **new** toast stub → màn thật (data-analy `changeScope=new_page`).

| ID | Current (native / demo P1) | New (SSOT mobile + CTX + live API) | Surface |
|----|----------------------------|------------------------------------|---------|
| GAP-MOB-MNT-LOG-NAV-01 | mnt-list `#i-list` → **toast only** (done card) | Nav push `#sc-mnt-log` «Nhật ký xử lý» · back → `mnt-list` | mnt-list · mnt-log |
| GAP-MOB-MNT-LOG-SCR-01 | Không màn log | Full `#sc-mnt-log` · `DES-MOB-MNT-LOG` · Design tạo dual | screen |
| GAP-MOB-MNT-LOG-HDR-01 | — | Header WO title · code · status (readonly) | card rows |
| GAP-MOB-MNT-LOG-TL-01 | — | Timeline dọc mốc xử lý (tạo · hạn · mô tả · tiến độ · note · hoàn thành) | timeline list |
| GAP-MOB-MNT-LOG-EMPTY-01 | — | Empty «Chưa có nhật ký» khi thiếu data / 0 derive + no fallback | empty |
| GAP-MOB-MNT-LOG-DATA-01 | — | Mobile.Bff `GET maintenance/work-orders/{id}` + **client derive** | BFF |
| GAP-MOB-MNT-LOG-HIST-01 | — | Không GET history live · P1 derive GetById · SA nếu Signed sau | GAP (P1 OK) |
| GAP-MOB-MNT-LOG-PACK-01 | scan `sheet` · demo toast | packKind=`sheet` · surface **screen** | meta |
| GAP-MOB-MNT-LOG-ENTRY-01 | Demo `#i-list` chỉ card `done` | **P1 entry chỉ status=`done`** (khớp demo) | entry |
| GAP-MOB-MNT-LOG-CMT-01 | — | Comments = `mnt-chat` · **cấm** composer trên slug này | scope |
| GAP-MOB-MNT-LOG-SORT-01 | — | Timeline **newest-first** (mobile feed default) | meta |

**Không** đổi (OUT pack): `mnt-list` cards · `estimate` · `mnt-chat` · `mnt-progress` write · web Kind B/form WO · Kind E summary · map embed.

**Không** bảng Current vs New web admin. SSOT visual = Design tạo dual `#sc-mnt-log` từ controlHint (demo P1 chưa có screen — **GAP-MOB-MNT-LOG-SCR-01**). Frame proto iOS 390×844 · Android 412×915 · **parity copy** trừ chrome: iOS back text «Công việc» + chevron · Android icon-btn chevron only — **OK**.

## 3. DoD (đo được)

1. Dual native: iOS SwiftUI + Android Compose — **cùng** zone `#sc-mnt-log` `DES-MOB-MNT-LOG`: nav back → `mnt-list` · title **Nhật ký xử lý** · header WO (title · code · status) · section **Nhật ký** · TimelineList · empty · toast lỗi. Frame proto iOS 390×844 · Android 412×915. Tab 5 shell **giữ** · tab **`work`** · `tabs: none` trên surface (`GAP-TAB-01`). **Cấm** badge P1/P2 trên header · **cấm** Primary write CTA.
2. Prefill header: nav args (`id` · title · code · status) và/hoặc `GET maintenance/work-orders/{id}` · thiếu `id` → banner / empty · **không** fake rows. Demo fallback SSOT card «Nạo cống» / `Đã hoàn thành` chỉ khi API fail + Design gate.
3. Timeline **client derive** từ `WorkOrderDto` Signed fields (created · due · description · progress · note · done) — khớp CTX + real-data §B · **newest-first** (**GAP-MOB-MNT-LOG-SORT-01**).
4. Empty **Chưa có nhật ký** khi thiếu id / 0 derive + không demo fallback · GET 404/network → toast lỗi + empty · **cấm** fake timeline (`GAP-MOB-MNT-LOG-EMPTY-01`).
5. **Không** history API P1 — **cấm** invent `…/logs` / `…/progress-history` (**GAP-MOB-MNT-LOG-HIST-01** · SA mở rộng nếu Signed).
6. **Không** composer / comments trên slug — comments = `mnt-chat` (**GAP-MOB-MNT-LOG-CMT-01`).
7. Status display VN map = **mnt-list** chrome (Chờ xử lý / Đang xử lý / Đã hoàn thành / Đã hủy).
8. Entry (reuse parent · **cấm** reimplement list): mnt-list `#i-list` trên card **`done` only** → **push** `#sc-mnt-log` (thay toast-only · **GAP-MOB-MNT-LOG-ENTRY-01**).
9. Kit reuse map: `LinmTopBar` · `LinmListRow` / card-group · Timeline / `LinmList` · EmptyChrome · `LinmIconButton` `#i-list` · `LinmToast`. **Cấm** invent tên kit · Design `kit_missing_confirm` nếu thiếu (`GAP-MOB-ACT-05`).
10. Typography: label **13** · field value **≥16** · title **17** (`GAP-TYP-01`) · dual copy parity trừ chrome HIG vs Material.
11. App chỉ `{BffPrefix}` · **cấm** biết RMMS `:5101` · token Keychain / Encrypted.
12. Dev (role sau): iOS `xcodegen` + `xcodebuild` dest **iPhone 17 Pro** PASS · Android `assembleDebug` PASS · Mobile.Bff `dotnet build` PASS — **cấm** `yarn start:std` / `yarn build` web.
13. QA (role sau): Maestro slug `mnt-log` only · live sim 6.9" + emulator · store PNG `qa/store/mnt-log` · **cấm** `yarn e2e-qa` web · **cấm** test estimate/chat/progress as in-scope.
14. BE align: **không** invent path — reuse live `WorkOrdersController.GetById`. Step 4b **N/A** · **cấm** PO chạy migration. **Cấm** dedicated LogController trên Mobile.Bff · **cấm** ERP.*.

## 4. CTX / DEM / DI inventory

| ID | Path | Loại |
|----|------|------|
| CTX-01 | `docs/context/features/mnt-log.md` | feature · domain Maintenance |
| CTX-02 | `docs/context/features/mnt-list.md` | parent entry `#i-list` · status VN map |
| CTX-03 | `docs/context/features/maintenance.md` | WorkOrder · DTO fields |
| DEM-01 | `specs/mobile-p1/ui/prototype/ios/index.html` `#sc-mnt-list` `#i-list` toast | iOS entry P1 · **chưa** `#sc-mnt-log` |
| DEM-02 | `specs/mobile-p1/ui/prototype/android/index.html` cùng toast | Android entry P1 |
| DEM-03 | `specs/mnt-log/ui/prototype/` | pack — Design tạo dual `#sc-mnt-log` |
| DES | `DES-MOB-MNT-LOG` (Design tạo) | IA dưới Công việc |
| MAP | `docs/html-to-native-map.md` | TopBar / ListRow / List / Empty / Toast / IconButton |
| DI-01 | — | **no Excel** |
| DA-01 | `specs/_data-analy/mnt-log-control-hint.md` | controlHint · tech factors · Delta |
| DA-02 | `specs/_data-analy/mnt-log-bff-endpoints.md` | BFF table |
| DA-03 | `specs/_data-analy/mnt-log-action-tree.md` | 1 action · share/reuse |
| DA-04 | `specs/_data-analy/mnt-log-real-data.md` | §A–§F bind |
| SCAN | `specs/_form-type-mobile/ACTION-TREE.md` | verify · **không** re-crawl demo |
| IOS | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.iOS` | native · toast stub |
| AND | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Android` | native · toast stub |
| BFF | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Bff` | `mobile-bff/api/v1` proxy |
| BE | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.WebService` | Maintenance · `WorkOrdersController.GetById` · **cấm ERP.*** · **cấm** invent `mnt-log` / `…/logs` |
| KIT | `Linm.Mobile.Kit.iOS` + `Linm.Mobile.Kit.Android` | TopBar / ListRow / List / Empty / Toast / IconButton |

**Cấm** cite `mfeStdUrl` / `http://localhost:9301/` trên artifact native. **Cấm** re-scan demo — inventory từ DA-* + CTX (hash skip).

## 5. controlHint (PO chốt — Design map kit · SA map API)

Nguồn DA-01 `#sc-mnt-log` proposed + real-data §A+§B. UNCLEAR field = **none**.

| Field | VN | controlHint | Required | Kit (iOS+Android cùng turn) | Notes |
|-------|----|-------------|----------|------------------------------|-------|
| screenTitle | Nhật ký xử lý | TopBar title | * | `LinmTopBar` | `DES-MOB-MNT-LOG` · fixed 17 · **cấm** badge P1/P2 |
| navBack | Công việc | BackButton | * | `LinmTopBar` leading | `go('mnt-list')` · Android icon-only OK |
| woTitle | (tên CV) | ListRow / Text readonly | * | `LinmListRow` | nav / GET `title` · 13 / ≥16 |
| woCode | WO-* / CV-* | Text readonly | * | | `code` |
| woStatus | Tình trạng hiện tại | Badge / Status readonly | * | | status → VN mnt-list map |
| sectionLog | Nhật ký | SectionLabel | * | | **13** |
| timeline | (các mốc) | TimelineList / List | * | `LinmList` / timeline group | derive P1 · newest-first |
| logAt | (thời điểm) | Text caption | * | | `CreatedAt` / `DueAt` / `UpdatedAt` · **13** |
| logBody | (nội dung mốc) | Text | * | | title + body row · ≥16 |
| empty | Chưa có nhật ký | EmptyChrome | * | EmptyChrome kit | thiếu id / 0 derive + no fallback |
| toastErr | (lỗi mạng / 404) | Toast | * | `LinmToast` | **cấm** fake timeline |
| actLog | Nhật ký xử lý | IconButton | * | `LinmIconButton` `#i-list` | entry mnt-list **done** · `go('mnt-log')` |

### Timeline row templates (derive · CTX · chốt)

| kind | when | VN body | at |
|------|------|---------|-----|
| `created` | always | Tạo công việc | `CreatedAt` |
| `due` | `DueAt` set | Hạn: {fmt DueAt} | `DueAt` |
| `description` | `Description` non-empty | Mô tả: {Description} | `CreatedAt` |
| `progress` | `%`>0 hoặc status in_progress/done | Tiến độ hiện tại {n}% | `UpdatedAt` |
| `note` | `Note` non-empty | {Note} | `UpdatedAt` |
| `done` | status=`done` | Hoàn thành | `UpdatedAt` |

Sort: **newest-first** (**GAP-MOB-MNT-LOG-SORT-01** chốt).

### Status VN map (display)

| API | VN (mnt-list SSOT) |
|-----|-------------------|
| `new` | Chờ xử lý |
| `in_progress` | Đang xử lý |
| `done` | Đã hoàn thành |
| `cancelled` | Đã hủy |

Toast / banner → `LinmToast`. **Cấm** AC implement raw control khi kit đã map. **Cấm** Primary write CTA trên surface.

## 6. BFF (PO chốt path — **cấm** invent)

App `ApiClient.base` = `{BffBase}/mobile-bff/api/v1`. Path **không** lặp prefix. Khớp DA-02 + real-data §B.

| Action / zone | Method | Path | In slug `mnt-log`? |
|---------------|--------|------|--------------------|
| **Load nhật ký + header** | GET | `maintenance/work-orders/{id}` | **yes** — **primary** · derive timeline |
| Init status labels (opt) | GET | `maintenance/work-orders/init-data` | optional · display only · chrome = mnt-list map |
| Timeline rows UI | — | — | **client derive** từ `WorkOrderDto` · **GAP HIST** |
| History list API | — | — | **không live** · **cấm invent** |
| Comments | — | — | **OUT** · `mnt-chat` |
| Nav back | — | — | local · `mnt-list` |
| Toast err | — | — | UI after GET fail · **cấm** fake |

**Cấm** `GET/POST mnt-log` · invent `…/logs` · invent `…/progress-history` · `LogController` trên Mobile.Bff · DbContext trên BFF · app `:5101`.

### Bind (real-data §B)

| UI | → API |
|----|-------|
| woTitle / woCode / woStatus | nav / GET detail · display |
| timeline[].at | derived `CreatedAt` / `DueAt` / `UpdatedAt` |
| timeline[].body | derived templates §5 |
| empty | local · thiếu data |
| toastErr | UI after GET fail |

### WorkOrderDto fields (live · P1 derive)

| Field | Mobile P1 bind |
|-------|----------------|
| `Id` / `Code` / `Title` | header |
| `Status` | badge → VN map |
| `CreatedAt` | timeline · created (+ description at) |
| `DueAt` | timeline · due |
| `Description` | timeline · description (nếu có) |
| `ProgressPercent` | timeline · progress |
| `Note` | timeline · note |
| `UpdatedAt` | at cho progress / note / done |
| `TeamName` / `AssigneeName` / `RouteName` / `IncidentId` | opt subtitle header (Design) |

## 7. Open questions — PO chốt (autoApprove=ON)

| ID | Question | Decision (PO) |
|----|----------|----------------|
| GAP-MOB-MNT-LOG-PACK-01 | sheet vs screen | **Chốt packKind=`sheet`** · surface = **full screen** `#sc-mnt-log` · **không** bottom-sheet chrome. Design STATUS packKind=`sheet`. |
| GAP-MOB-MNT-LOG-SCR-01 | Demo toast only | **Must** Design tạo dual `#sc-mnt-log` `DES-MOB-MNT-LOG` · thay toast stub. |
| GAP-MOB-MNT-LOG-NAV-01 | Toast → screen | **IN P1:** push từ `#i-list` · back → `mnt-list`. |
| GAP-MOB-MNT-LOG-ENTRY-01 | mọi status vs chỉ done | **P1: chỉ card status=`done`** (khớp demo SSOT «Nạo cống»). Entry `in_progress`/`new` = **OUT** pack này. |
| GAP-MOB-MNT-LOG-HIST-01 | History API? | **P1:** client derive GetById · **cấm** invent logs path · SA nếu Signed sau. |
| GAP-MOB-MNT-LOG-CMT-01 | Comments trên nhật ký? | **Không** — giữ `mnt-chat` · **cấm** composer. |
| GAP-MOB-MNT-LOG-SORT-01 | newest vs oldest | **newest-first** (mobile feed). |
| Sibling enqueue | timeline / header / mnt-* | **none** — cùng slug hoặc siblings **không** start (`GAP-MOB-ACT-06/07`). |
| Cluster path | `specs/mnt-log/specs/_data-analy/` | **N/A.** Dùng `_data-analy/mnt-log-*.md`. |
| GAP-PO-STORE-01 | signup / xóa TK | **N/A** — không signup. |
| Step 4b | New endpoint? | **N/A** — reuse live GetById. |
| Hash skip | contentHash skip analy | **Cấm** re-scan demo HTML / crawl CTX (`GAP-PO-DEMO-RESCAN-01`). |
| Tab index | analy `tabs: none` | **Confirm none** trên surface · shell tab `work` = entry (`GAP-TAB-01`). |
| Tech factors | GPS / Camera / Offline | GPS/Camera **N/A** · Offline: GET fail → empty/toast · **cấm** fake rows · demo fallback chỉ Design gate. |
| UNCLEAR fields | — | **none** — không AskQuestion field · hash skip · **cấm** re-crawl. |

## 8. Screens (REQUIRED)

| Surface | Demo | Pattern | FormMode | Actions **this** `{feature}` | `devSlash` |
|---------|------|---------|----------|------------------------------|------------|
| Nhật ký xử lý | `#sc-mnt-log` `DES-MOB-MNT-LOG` · iOS + Android (Design tạo) | **Screen** (packKind meta `sheet` · **không** Modal/Sheet chrome) | view (readonly timeline) | GET detail · derive timeline · empty · toast · back | `/agent-dev-ios` + `/agent-dev-android` |

**Không** trên pack này: `estimate` / `mnt-chat` / `mnt-progress` · web Kind B form WO · comments · Kind E summary · map embed · watermark Gói · invent path · bottom-sheet `#sheet-*` · Primary write CTA.

Reuse only: `mnt-list` (entry `#i-list` done + back) · Maintenance live GetById (cite · không enqueue).

Frame: iOS 390×844 · Android 412×915 · safe area · header + scroll timeline + `LinmTabBar` không đè notch / home indicator.

## 9. Device AC (REQUIRED)

| ID | Behavior | AC |
|----|----------|-----|
| AC-D-01 | Offline | Màn **mở** · GET fail → toast lỗi + empty · **cấm** fake timeline · offline queue **N/A** · **cấm** full-screen block tab |
| AC-D-02 | GPS | **N/A** — readonly nhật ký · **không** capture |
| AC-D-03 | Leave dirty | **N/A** — readonly · không form edit · back pop thẳng |
| AC-D-04 | Native alert | **Cấm** `UIAlert` / `AlertDialog` / `window.alert`. Mọi phản hồi = `LinmToast` / EmptyChrome |
| AC-D-05 | Keyboard | **N/A** — không input field |
| AC-D-06 | Safe area | TopBar + scroll timeline + tab không đè notch / home indicator |
| AC-D-07 | Biometric | **N/A** |
| AC-D-08 | Signal | **N/A** trên chrome · **cấm** «Có mạng» · **cấm** tap-cycle |
| AC-D-09 | Token | Bearer Keychain / Encrypted · app chỉ `{BffPrefix}` |
| AC-D-10 | Tab / swipe | Shell tab **Công việc** giữ · in-screen tabs **none** · **cấm** invent segment · **cấm** `TabView` / M3 `NavigationBar` raw |
| AC-D-11 | Camera | **N/A** |
| AC-D-12 | Typography | label **13** · field ≥**16** · title **17** (`GAP-TYP-01`) |
| AC-D-13 | Push | **N/A** |
| AC-F-01 | Appear / prefill | nav / GET detail · fail → empty/toast (± demo SSOT nếu Design gate) · thiếu id → empty/banner |
| AC-F-02 | Back | Pop `mnt-list` · **cấm** reimplement list |
| AC-F-03 | Header WO | title · code · status VN bind readonly |
| AC-F-04 | Timeline derive | rows theo §5 templates · **newest-first** · **cấm** invent history API |
| AC-F-05 | Empty | «Chưa có nhật ký» · **cấm** fake rows |
| AC-F-06 | GET fail | Toast lỗi · empty · **cấm** fake |
| AC-F-07 | Entry | mnt-list `#i-list` trên **done** → **push** `#sc-mnt-log` (thay toast) |
| AC-F-08 | Dual parity | iOS + Android **cùng** fields + copy SSOT (`GAP-MOB-ALIGN-01`) trừ chrome back |
| AC-F-09 | Chrome | **Cấm** device label / proto-click / watermark Gói |
| AC-F-10 | 1 action | **Cấm** gộp estimate/chat/progress (`GAP-MOB-ACT-01/02`) · **cấm** composer |
| AC-F-11 | Readonly | **Cấm** Primary write / POST progress / comments trên slug |

## 10. Leave / alert (REQUIRED)

| Case | UI |
|------|-----|
| Back | Pop `mnt-list` · không confirm (readonly) |
| Missing WO id | Empty / banner · **không** fake timeline |
| GET fail / 404 | Toast lỗi · empty · **cấm** fake rows |
| 0 derive + no fallback | Empty **Chưa có nhật ký** |
| Success load | Header + timeline newest-first |
| Offline | Toast lỗi / empty · **cấm** full-screen block |
| Demo fallback | Chỉ khi API fail **và** Design gate · SSOT «Nạo cống» |

## 11. Out of scope (this pack)

- `mnt-list` card layout / filters (parent reuse only · entry `#i-list` done)
- Entry `#i-list` trên card `new` / `in_progress` / `cancelled`
- `estimate` / `mnt-chat` / `mnt-progress` + API comments / POST progress
- Web Kind B catalog / form full-page WO
- Kind E `maintenance/summary`
- Map embed · GPS · Camera trên sheet nhật ký
- Invent `api/v1/mnt-log` / `…/logs` / history collection trước SA Signed
- Offline queue / staff lookup
- Reimplement `#sc-mnt-list`
- Watermark Gói / device label / proto-click tín hiệu
- Start siblings `pending_confirm`
- ERP.* · `mfeStdUrl` · Grid AC web / Report AC Lin*
- Re-scan demo HTML (`GAP-PO-DEMO-RESCAN-01`)
- Step 4b / migration / e2e / `yarn start:std` ở role PO

## 12. KPI (HĐ Gói 1 — màn này)

Xem nhật ký xử lý WO hoàn thành = **một** push `#sc-mnt-log` sau mnt-list `#i-list` (done) → header + timeline derive thật từ GetById (newest-first) · empty/toast khi fail. DoD pack: dual screen + BFF bind §6 — **không** omni-implement list / estimate / chat / progress trong 1 slug.

## 13. Handoff → Design

| Field | Value |
|-------|-------|
| feature / packKind | `mnt-log` / **`sheet`** (confirmed · surface **screen**) |
| phase_from / phase_to | po **confirmed** → design pending |
| STATUS | `specs/mnt-log/STATUS.md` |
| Context / Demo / DI | CTX-01..03 · DEM entry toast · Design **tạo** dual `#sc-mnt-log` · no Excel |
| controlHint / UNCLEAR | §5 · none (GAPs chốt §7) |
| Screens / Pattern / `devSlash` | Screen `#sc-mnt-log` · `/agent-dev-ios` + `/agent-dev-android` |
| Grid AC / Report AC | **N/A** — pack sheet native · **cấm** Lin* grid AC |
| peerStdUrl / reviewUrl | **cấm** `mfeStdUrl` · Design mở dual `file://…/prototype/{ios,android}/index.html#sc-mnt-log` + reviewUrl **cả hai** |
| ux-analy | `/mobile-ui-ux-analy` → `ui/ux-analy.md` §1–§9 **REQUIRED** trước `design_confirm` |
| Kit | reuse map · `kit_missing_confirm` nếu thiếu Timeline/Empty · TopBar / ListRow / List / Empty / Toast / IconButton |
| BFF | `mnt-log-bff-endpoints.md` · GetById + client derive |
| Real-data | `mnt-log-real-data.md` §A+§B |
| Open questions | §7 đã chốt — Design **tạo** `#sc-mnt-log` dual · **không** bottom-sheet · **không** invent logs path · newest-first · entry done-only · **không** composer |
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
| generatedAt | `2026-08-29T07:18:00.000Z` |
| versionGate | rechecked |
| contentHash | sha256:mnt-log-mobile-control-hint-20260829 |
| realDataContentHash | sha256:mnt-log-mobile-real-data-20260829 |
| bffContentHash | sha256:mnt-log-mobile-bff-20260829 |
| actionTreeContentHash | sha256:mnt-log-mobile-action-tree-20260829 |
| ctxContentHash | sha256:87761a7752a493d6ad176d96d76ccaf6116ea407ec5ec5513b6e12372a58d701 |
| demoContentHash | sha256:394ab44597648f04b25e6d58476378c16141feb53d3b58d39923b3defcff8328 |
| parentCtxHash | sha256:1df1005f6c0810be8e03a28e3c5c0e5dcb216234db9101f1571348000d11ae1f |
| taskId | `task_d21ff1dc` |
| dorGate | **PASS** |

---
<!-- Version meta: skillId=agent-po-mobile skillVersion=2026.08.25.01 schemaVersion=2 workflowVersion=2026.08.25.01 rulesVersion=2026.08.25.2 versionGate=rechecked dorGate=PASS -->
