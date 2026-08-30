# PO — Requirement — mnt-list (mobile list · Công việc)

| Field | Value |
|-------|-------|
| feature | `mnt-list` |
| title | [Mobile] [Trang Chủ] -> Công việc |
| this role | `po` · `/agent-po-mobile` |
| changeScope | `new_page` |
| packKind | **`list`** (PO confirm · data-analy đề xuất) |
| stack | `native_dual` |
| thisAction | **List Công việc** `#sc-mnt-list` only · entry home tile + tab `work` · **không** gộp form WO / estimate form / chat / progress / log sheets |
| status | `confirmed` (autoApprove=ON) |
| requestSource | run packet `task_18c2cf15` · `/agent-qldb-workflow-mobile` · roleOnly=`po` · `/agent-po-mobile` |
| autoApprove | **ON** — Design/SA tự confirm **khi tới lượt** · turn này **không** chain |
| e2eQa | ON khi QA · `yarn e2e-qa-mobile` · sim 6.9" + emulator + Maestro · PNG `qa/screens` + `qa/store/mnt-list` · **cấm** `yarn e2e-qa` / `yarn start:std` / `mfeStdUrl` / test thủ công thay runtime |
| prior | data-analy **confirmed** · `specs/_data-analy/mnt-list-control-hint.md` · `mnt-list-bff-endpoints.md` · `mnt-list-action-tree.md` · `mnt-list-real-data.md` · contentHash `sha256:mnt-list-mobile-list-20260828` · bffContentHash `sha256:mnt-list-mobile-bff-20260828` · cluster `specs/mnt-list/specs/_data-analy/` **không tồn tại** — SSOT = 4 file `_data-analy/mnt-list-*` · **no Excel** · **hash skip** — **cấm** re-scan demo HTML (`GAP-PO-DEMO-RESCAN-01`) |
| `devSlash` | `/agent-dev-ios` + `/agent-dev-android` |
| updatedAt | `2026-08-28T19:00:00.000Z` |
| taskId | `task_18c2cf15` |

**Cấm:** gộp estimate form / chat / progress / log / WO create-edit (`GAP-MOB-ACT-01/02`) · invent `api/v1/mnt-list` / `MntListController` / mobile-only WO DTO fork · Grid AC web / Report AC Lin* · ERP.* · WebView HTML · `mfeStdUrl` · `UIAlert` / `AlertDialog` / `window.alert` · watermark «Phiên bản Gói N» / «gen realapp» · «Có mạng» · device label «iPhone» / «· Android» · AC tap-cycle tín hiệu · AC implement lại kit đã map (`GAP-MOB-ACT-05`) · start sibling `pending_confirm` (`GAP-MOB-ACT-06`) · enqueue search/filter/submit API sibling (`GAP-MOB-ACT-07`) · re-scan demo / crawl CTX (`GAP-PO-DEMO-RESCAN-01`).

## 1. Goal

Màn **Danh sách công việc** native dual (iOS SwiftUI + Android Compose): list work order bảo trì · search client-side · hub **Giao việc xử lý** · rich cards + status + action icons. Persona: Tuần đường · Hạt · hiện trường. App **chỉ** `{BffBase}/mobile-bff/api/v1/…`. **Cấm** ERP.* · clone controller · WebView bọc HTML demo · `mfeStdUrl`.

**1 action = 1 feature.** Slug `mnt-list` = màn list `#sc-mnt-list` `DES-MOB-MNT-LIST`. **Cấm** gộp `#sc-estimate` form / chat / progress / log sheets (`GAP-MOB-ACT-01`). `#sc-mnt-list` **không** child form/sheet (`GAP-MOB-ACT-02` = none · **cấm** filter sheet). Search / Lọc **cùng slug** — **không** enqueue sibling (`GAP-MOB-ACT-07`).

Entry: `home` tile **Công việc** + shell tab `work` (`TAB_HOME.work = mnt-list`) → push `#sc-mnt-list` (`reuse` hub · **cấm** reimplement `#sc-home`).

## 2. changeScope `new_page`

Pack **list mới** theo data-analy (`changeScope=new_page`). Native chưa có production list WO khớp SSOT — stub/toast từ Home **không** đếm là list shipped. Không bảng Current vs New web. SSOT visual = dual HTML `#sc-mnt-list` (iOS 390×844 · Android 412×915 · **parity copy** trừ chrome HIG/Material).

**GAP-MOB-MNT-DEMO-01 (PO chốt):** Android mock `mobile-p1` thiếu card 2 + copy lệch nhẹ. Dual **bắt buộc** **2** cards + copy iOS SSOT §3.4. Design sửa Android HTML trước `design_confirm`.

## 3. DoD (đo được)

1. Dual native push `#sc-mnt-list`: nav back Home · title **Danh sách công việc** · trailing **Lọc** · search · hub row **Giao việc xử lý** · **2** rich cards SSOT (demo/fallback). Frame proto iOS 390×844 · Android 412×915. Tab 5 shell **giữ** dưới list (`GAP-TAB-01` · in-screen tabs: **none** · **cấm** invent segment trên list · shell tab `work` = entry only).
2. Back → pop `home` (`reuse` · **cấm** reimplement hub).
3. Trailing **Lọc** P1 → toast **Bộ lọc · tuyến đường** · **cấm** filter sheet / modal.
4. Demo / fallback cards SSOT (**2** hàng — **cấm** rút Android còn 1):

   | title | assignLine | range | meta | statusLabel | chrome |
   |-------|------------|-------|------|-------------|--------|
   | Vá mặt đường | Hạt trưởng VP-IV.1 giao việc cho Nguyễn Văn A · Tổ tuần đường | 2026-08-10 08:30 — 2026-08-12 17:00 | Từ sự cố SC-2401 · QL.1 Km 1556+080 | Tình trạng xử lý: **Chờ xử lý** | warn (`new`) |
   | Nạo cống | Hạt trưởng giao việc cho Trần Khánh · Chi cục II.2 | 2026-08-09 07:00 — 2026-08-09 16:00 | Tuyến HCM | Tình trạng xử lý: **Đã hoàn thành** | ok (`done`) |

   Card actions: `#i-chat` · `#i-sync` · `#i-sum` (cả 2 card) · card done thêm `#i-list` (nhật ký).
5. Appear: GET `maintenance/work-orders` page 1 size 50 · live rows bind §6 · fail/empty/offline → demo SSOT 2 cards · screen **vẫn mở**.
6. Search client-side title / route / code / assign. Kit `LinmSearchField` placeholder **Tìm kiếm công việc…**.
7. Status VN map (Design §3.3 / DA):

   | API `status` | VN | chrome |
   |--------------|----|--------|
   | `new` | Chờ xử lý | warn |
   | `in_progress` | Đang xử lý | info |
   | `done` | Đã hoàn thành | ok |
   | `cancelled` | Đã hủy | gray |

8. Tap hub / card `#i-sum` P1 → toast **Giao việc xử lý** · **cấm** implement `#sc-estimate` form trên slug này (`GAP-MOB-ACT-02`) · khi sibling `estimate` Approve+ship → push `#sc-estimate` (Dev cập nhật CTA · **không** start sibling turn này · `GAP-MOB-ACT-06`).
9. Tap `#i-chat` → toast **Trao đổi công việc** · `#i-sync` → toast **Cập nhật trạng thái · ảnh + định vị** · `#i-list` (done) → toast **Nhật ký xử lý** · **cấm** API comments/progress trên slug này · **cấm** start siblings.
10. Kit **reuse map**: `LinmTopBar` · `LinmSearchField` · `LinmListRow` (hub) · rich card / `LinmListRow` · status bar / `LinmBadge` · `LinmIconButton` · `LinmToast` · `LinmEmptyChrome` (optional empty). **Cấm** raw `List` / M3 `NavigationBar` / `TabView` (`GAP-MOB-ACT-05` · `GAP-MOB-ALIGN-01`).
11. Typography: label/tab **13** · field/search/card ≥**16** (`GAP-TYP-01`) · dual copy parity trừ chrome HIG vs Material (iOS text «Lọc» · Android icon `#i-list` OK).
12. App chỉ `{BffPrefix}` · token Keychain / Encrypted · **cấm** biết RMMS `:5101`.
13. Dev (role sau): iOS `xcodegen` + `xcodebuild` dest **iPhone 17 Pro** PASS · Android `assembleDebug` PASS · Mobile.Bff `dotnet build` PASS — **cấm** `yarn start:std`.
14. QA (role sau): Maestro slug `mnt-list` only · login → Home tile/tab Công việc → `#sc-mnt-list` · live sim 6.9" + emulator · store PNG `qa/store/mnt-list` · **cấm** test estimate/chat/progress/log as in-scope · **cấm** `yarn e2e-qa` web.
15. BE align: **không** endpoint mới — reuse `GET maintenance/work-orders` proxy. Step 4b `/new-endpoint` **N/A**. **Cấm** `MntListController` / invent `api/v1/mnt-list`.

## 4. CTX / DEM / DI inventory

| ID | Path | Loại |
|----|------|------|
| CTX-01 | `docs/context/features/mnt-list.md` | list · § UI · § API · OOS form/siblings |
| CTX-02 | `docs/context/features/maintenance.md` | domain WorkOrder · status enum |
| CTX-03 | `docs/context/features/home.md` | parent entry tile + tab `work` |
| DEM-01 | `specs/mobile-p1/ui/prototype/ios/index.html` `#sc-mnt-list` | iOS 390×844 · `DES-MOB-MNT-LIST` · **copy SSOT** |
| DEM-02 | `specs/mobile-p1/ui/prototype/android/index.html` `#sc-mnt-list` | Android 412×915 · **lệch** (1 card) — Design sửa = DEM-01 |
| DEM-03 | `specs/mnt-list/ui/prototype/` | pack stub — Design chép dual từ mobile-p1 **sau** parity |
| MAP | `docs/html-to-native-map.md` | kit topbar / search / list row / badge / icon button **đã map dual** |
| DI-01 | — | **no Excel** |
| DA-01 | `specs/_data-analy/mnt-list-control-hint.md` | controlHint · **hash skip read** |
| DA-02 | `specs/_data-analy/mnt-list-bff-endpoints.md` | BFF · `GET maintenance/work-orders` |
| DA-03 | `specs/_data-analy/mnt-list-action-tree.md` | 1 list + 4 sibling enqueue |
| DA-04 | `specs/_data-analy/mnt-list-real-data.md` | bind §A+§B + 2 demo rows |
| SCAN | `specs/_form-type-mobile/ACTION-TREE.md` | verify · **không** re-crawl demo |
| IOS | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.iOS` | native |
| AND | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Android` | native |
| BFF | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Bff` | `mobile-bff/api/v1` proxy |
| BE | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.WebService` | DOMAIN-MAP Maintenance · **cấm ERP.*** · **không** `api/v1/mnt-list` |
| KIT | `Linm.Mobile.Kit.iOS` + `Linm.Mobile.Kit.Android` | `LinmTopBar` / `LinmSearchField` / `LinmListRow` / `LinmBadge` / `LinmIconButton` / `LinmToast` **đã có** |

**Cấm** cite `mfeStdUrl` / `http://localhost:9301/` trên artifact native.

## 5. controlHint (PO chốt — Design map kit · SA map API)

Nguồn DA-01 control-hint + real-data §A+§B (**cấm** re-scan HTML). UNCLEAR field path = **none** (GAP bind chốt §7).

| Field | VN | controlHint | Required | Kit (iOS+Android cùng turn) | Notes |
|-------|----|-------------|----------|------------------------------|-------|
| navBack | (chevron) | BackButton | * | `LinmTopBar` leading `#i-chevron-left` | pop `home` |
| title | Danh sách công việc | Text | * | `LinmTopBar` title | fixed · dual |
| navFilter | Lọc | Button / IconButton | * | `LinmTopBar` trailing | toast **Bộ lọc · tuyến đường** · iOS text / Android `#i-list` |
| search | Tìm kiếm công việc… | SearchField | * | `LinmSearchField` `#i-search` | client filter |
| hubTitle | Giao việc xử lý | ListRow | * | `LinmListRow` leading `#i-sum` green | toast P1 / later `go('estimate')` |
| hubSub | Khối lượng · thời hạn · giao việc | Text | * | `LinmListRow` subtitle | fixed |
| cardTitle | (tên CV) | Text | * | rich card / `LinmListRow` | DTO `title` |
| cardAssign | … giao việc cho … | Text | * | subtitle | TeamName + AssigneeName · §7 |
| cardRange | from — to | Text | * | subtitle | CreatedAt — DueAt |
| cardMeta | sự cố · tuyến | Text | | subtitle | IncidentId · RouteName |
| cardStatus | Tình trạng xử lý: … | Status bar text | * | 1 dòng prefix+label · **cấm** `LinmBadge` trùng | status → VN · **GAP-MOB-EDIT-STATUS-01** |
| actChat | Trao đổi | IconButton | * | `LinmIconButton` `#i-chat` | toast P1 |
| actProgress | Cập nhật trạng thái | IconButton | * | `LinmIconButton` `#i-sync` | toast P1 |
| actEstimate | Ước lượng / giao | IconButton | * | `LinmIconButton` `#i-sum` | toast P1 / later estimate |
| actLog | Nhật ký xử lý | IconButton | | `LinmIconButton` `#i-list` | done card · toast P1 |
| empty | (trống) | EmptyChrome | | `LinmEmptyChrome` | optional · 0 live + no demo gate |

Toast / banner → `LinmToast`. **Cấm** AC implement raw control khi kit đã map.

## 6. BFF (PO chốt path — **cấm** invent)

App `ApiClient.base` = `{BffBase}/mobile-bff/api/v1`. Path **không** lặp prefix.

| Action / zone | Method | Path | In slug `mnt-list`? |
|---------------|--------|------|---------------------|
| WO list | GET | `maintenance/work-orders` | **yes** — page 1 size 50 · query search/status/workType **không bắt** P1 (search **client**) |
| Init lookup | GET | `maintenance/work-orders/init-data` | **opt P2** filter — **không** P1 |
| Hub / `#i-sum` | — | — | **local** · toast / later nav estimate · **không** API |
| Nav back | — | — | **local** · `home` |
| Filter / search UI | — | — | **client** · toast Lọc |
| Detail / CRUD / progress / comments | — | `maintenance/work-orders…` | **no** — sibling / web |

### Bind (real-data §B)

| UI | DTO → card |
|----|------------|
| title | `title` |
| assignLine | `teamName` + `assigneeName` · rule: `"{teamName} giao việc cho {assigneeName}"` · thiếu team → `"Giao việc cho {assigneeName}"` · cả thiếu → demo copy fallback |
| range | `createdAt` — `dueAt` |
| meta | có `incidentId`: `"Từ sự cố {incidentId} · {routeName}"` · không: `routeName` only |
| statusLabel | `status` → VN map §3.7 |

**Cấm** `GET mnt-list` · `MntListController` · DbContext trên Mobile.Bff · app `:5101` · invent AssignerName field.

## 7. Open questions — PO chốt

| ID | Question | Decision (PO) |
|----|----------|----------------|
| GAP-F-MNT-MOB-01 | Demo «Hạt trưởng VP-IV.1» · DTO không AssignerName | **Không invent AssignerName.** Bind **TeamName + AssigneeName** per §6 · demo copy fallback khi thiếu. Không block DoD list. |
| GAP-MOB-MNT-DEMO-01 | Android 1 card · copy lệch | **Chốt 2 cards + copy iOS SSOT dual.** Design sửa Android HTML trước confirm. |
| Tap hub / `#i-sum` | Demo `go('estimate')` | **P1 toast «Giao việc xử lý».** **Cấm** form estimate trên slug (`GAP-MOB-ACT-02`). Khi `estimate` ship → push `#sc-estimate`. |
| Tap chat / sync / log | Demo toast / sibling | **Toast nhãn §3.9.** **Cấm** API + **cấm** start siblings (`GAP-MOB-ACT-06`). |
| Filter | Demo toast | **P1 toast «Bộ lọc · tuyến đường».** **Cấm** sheet. |
| packKind | data-analy `list` | **Confirm `list`.** **≠** hub/dashboard/web Kind B. **Cấm** Grid/Report AC. |
| Kit | map + kit dual đã có | **`kit_missing_confirm` N/A** — reuse map. Design **verify** dual. |
| Sibling ×4 | `estimate` · `mnt-chat` · `mnt-progress` · `mnt-log` | **Không** start (`GAP-MOB-ACT-06`). Board Approve riêng. |
| Cluster web path | `specs/mnt-list/specs/_data-analy/` | **N/A.** Dùng `_data-analy/mnt-list-*.md`. |
| GAP-PO-STORE-01 | signup / xóa tài khoản | **N/A** — list không signup. |
| Step 4b | New endpoint? | **N/A** — reuse `GET maintenance/work-orders`. |
| Hash skip | contentHash skip analy | **Cấm** re-scan demo HTML / crawl CTX (`GAP-PO-DEMO-RESCAN-01`). |
| Tab index | analy `tabs: none` | **Confirm none** trên surface list · shell tab `work` = entry (`GAP-TAB-01`). |

UNCLEAR field = **none** — không AskQuestion field (autoApprove=ON).

## 8. Screens (REQUIRED)

| Surface | Demo | Pattern | FormMode | Actions **this** `{feature}` | `devSlash` |
|---------|------|---------|----------|------------------------------|------------|
| Danh sách công việc | `#sc-mnt-list` `DES-MOB-MNT-LIST` · iOS + Android | **List** (push · không Modal/Sheet) | none (search ≠ form dirty) | GET work-orders · display 2+ cards · client search · toast Lọc / sibling CTAs | `/agent-dev-ios` + `/agent-dev-android` |

**Không** trên pack này: `#sc-estimate` form · chat/progress/log sheets · WO create/edit · Kind E KPI · watermark Gói · filter sheet.

Reuse only: `home` (back pop · entry tile/tab **Công việc**).

Frame: iOS 390×844 · Android 412×915 · safe area · nav + search + hub + cards + `LinmTabBar` không đè notch / home indicator.

## 9. Device AC (REQUIRED)

| ID | Behavior | AC |
|----|----------|-----|
| AC-D-01 | Offline | List **mở** · demo SSOT 2 cards · toast in-app không chặn · **cấm** full-screen block · **cấm** block tab |
| AC-D-02 | GPS deny | **N/A** — list không GPS (sibling `mnt-progress` may) |
| AC-D-03 | Leave dirty | **N/A** — search không leave-modal |
| AC-D-04 | Native alert | **Cấm** `UIAlert` / `AlertDialog` / `window.alert`. Mọi phản hồi = `LinmToast` |
| AC-D-05 | Keyboard | Search focus · field ≥16 · keyboard không đè tab bar cứng · dismiss không crash |
| AC-D-06 | Safe area | Nav + search + hub + cards + tab không đè notch / home indicator |
| AC-D-07 | Biometric | **N/A** |
| AC-D-08 | Signal | **N/A** trên list (signal trên hub parent) · **cấm** «Có mạng» · **cấm** tap-cycle |
| AC-D-09 | Token | GET work-orders Bearer Keychain / Encrypted · app chỉ `{BffPrefix}` |
| AC-D-10 | Tab / swipe | Shell tab **Công việc** giữ · in-screen tabs **none** · **cấm** invent / reorder (`GAP-TAB-01`) · **cấm** `TabView` / M3 `NavigationBar` trên màn này |
| AC-D-11 | Camera / push | **N/A** trên list (progress sibling) |
| AC-D-12 | Typography | label/tab **13** · title/search/card ≥**16** (`GAP-TYP-01`) |
| AC-F-01 | Appear | GET `maintenance/work-orders` · fail/empty → demo 2 cards |
| AC-F-02 | Back | Pop `home` · **cấm** reimplement hub |
| AC-F-03 | Lọc | Toast **Bộ lọc · tuyến đường** · **cấm** sheet |
| AC-F-04 | Search | Client filter title/route/code/assign |
| AC-F-05 | Hub / `#i-sum` | Toast **Giao việc xử lý** · **cấm** estimate form |
| AC-F-06 | Chat / sync / log | Toast §3.9 · **cấm** API sibling |
| AC-F-07 | Dual parity | iOS + Android **cùng** 2 cards + hub + copy §3.4 (`GAP-MOB-ALIGN-01` · `GAP-MOB-MNT-DEMO-01`) |
| AC-F-08 | Entry | Home tile / tab **Công việc** → push `#sc-mnt-list` |
| AC-F-09 | Chrome | **Cấm** device label / proto-click / watermark Gói |
| AC-F-10 | Assign bind | TeamName+AssigneeName · **cấm** invent AssignerName (`GAP-F-MNT-MOB-01`) |
| AC-F-11 | Card status | 1 dòng `Tình trạng xử lý: {label}` · **cấm** `LinmBadge` trùng prefix (**GAP-MOB-EDIT-STATUS-01**) |
| AC-F-12 | Card actions | Nút `#i-chat` `#i-sync` `#i-sum` `#i-list` **flex:1 dàn đều** full card · tap 44 (**GAP-MOB-EDIT-ACT-01**) |

## 10. Leave / alert (REQUIRED)

| Case | UI |
|------|-----|
| Dirty leave | **Không áp dụng** |
| List fail / offline | Demo fallback 2 cards + optional toast · **cấm** native alert (`GAP-PO-LEAVE-01`) |
| Lọc | Toast **Bộ lọc · tuyến đường** |
| Hub / estimate icon | Toast **Giao việc xử lý** |
| Chat / progress / log | Toast §3.9 |
| Back | Pop home · không confirm |
| Success load | Không toast bắt buộc · bind UI |

## 11. Out of scope (this pack)

- `#sc-estimate` form implement / Giao việc sheet
- `mnt-chat` / `mnt-progress` / `mnt-log` sheets + API comments/progress
- Full WO create/edit (web Kind B) · Kind E `maintenance/summary`
- Filter sheet / init-data bắt buộc P1
- Invent `GET mnt-list` / `MntListController` / AssignerName DTO
- Reimplement `#sc-home`
- Watermark Gói / device label / proto-click tín hiệu
- Start siblings `pending_confirm`
- Clone WorkOrdersController · ERP.* · `mfeStdUrl`
- Grid AC web / Report AC Lin*
- Re-scan demo HTML (`GAP-PO-DEMO-RESCAN-01`)

## 12. KPI (HĐ Gói 1 — màn này)

Công việc = hiện trường xem danh sách WO (title · giao · hạn · sự cố/tuyến · trạng thái) từ **một** push sau Home/tab. DoD pack: `#sc-mnt-list` dual + GET work-orders + kit list — **không** omni-implement estimate/chat/progress trong 1 slug.

## 13. Handoff → Design

| Field | Value |
|-------|-------|
| feature / packKind | `mnt-list` / **`list`** (confirmed) |
| phase_from / phase_to | po **confirmed** → design pending |
| STATUS | `specs/mnt-list/STATUS.md` |
| Context / Demo / DI | CTX-01 · DEM dual `#sc-mnt-list` · no Excel |
| controlHint / UNCLEAR | §5 · none (GAPs chốt §7) |
| Screens / Pattern / `devSlash` | List `#sc-mnt-list` · `/agent-dev-ios` + `/agent-dev-android` |
| Grid AC / Report AC | **N/A** — pack list native · **cấm** Lin* grid AC |
| peerStdUrl / reviewUrl | **cấm** `mfeStdUrl` · Design mở dual `file://…/prototype/{ios,android}/index.html#sc-mnt-list` + reviewUrl **cả hai** |
| ux-analy | `/mobile-ui-ux-analy` → `ui/ux-analy.md` §1–§9 **REQUIRED** trước `design_confirm` |
| Kit | reuse map · `kit_missing_confirm` **N/A** · verify dual `LinmTopBar` / `LinmSearchField` / `LinmListRow` / rich-card / `LinmBadge` / `LinmIconButton` |
| BFF | `mnt-list-bff-endpoints.md` · **chỉ** `GET maintenance/work-orders` (+ init-data P2) |
| Real-data | `mnt-list-real-data.md` §A+§B |
| Open questions | §7 đã chốt — Design **sửa Android HTML** = 2 cards + copy iOS · **không** vẽ estimate form · **không** filter sheet |
| Next AskQuestion | autoApprove=ON — `design_confirm` khi Design xong **cả hai** mock + ux-analy + `/review-demo-design-mobile` |
| Next slash | `/agent-design-mobile` |
| Chain this turn | **không** (roleOnly=po · **GAP-PKT-ROLE-01**) |
| e2eQa | ON khi QA · `yarn e2e-qa-mobile` · **cấm** yarn start:std / mfeStdUrl |

Design: HIG + Material · IA lock Tab 5 · copy VN đúng iOS HTML (trừ sibling CTA → toast P1 · skip device label) · **cấm** skin Ministry · **cấm** «Có mạng» · packet `design-demo-ssot.md` · `/review-demo-design-mobile` trước confirm.

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-po-mobile |
| skillVersion | 2026.08.25.01 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.25.01 |
| rulesVersion | 2026.08.25.2 |
| generatedAt | 2026-08-28T19:00:00.000Z |
| versionGate | rechecked |
| contentHash | sha256:mnt-list-mobile-list-20260828 |
| bffContentHash | sha256:mnt-list-mobile-bff-20260828 |

---
<!-- Version meta: skillId=agent-po-mobile skillVersion=2026.08.25.01 schemaVersion=1 workflowVersion=2026.08.25.01 rulesVersion=2026.08.25.2 versionGate=rechecked -->
