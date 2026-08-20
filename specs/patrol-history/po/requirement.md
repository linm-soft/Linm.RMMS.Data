# PO — Requirement — patrol-history (mobile list)

| Field | Value |
|-------|-------|
| feature | `patrol-history` |
| title | [Mobile] [Tuần đường] -> Lịch sử phiên |
| this role | `po` · `/agent-po-mobile` |
| changeScope | `new_page` |
| packKind | **`list`** (PO confirm · data-analy đề xuất) |
| stack | `native_dual` |
| thisAction | **Lịch sử ca** `#sc-patrol-history` only · push từ hub row **Lịch sử phiên** · **không** gộp `#sc-patrol-detail` |
| status | `confirmed` (autoApprove=ON) |
| requestSource | run packet `task_580f12e0` · `/agent-qldb-workflow-mobile` · roleOnly=`po` · `/agent-po-mobile` |
| autoApprove | **ON** — Design/SA tự confirm **khi tới lượt** · turn này **không** chain |
| e2eQa | ON khi QA · `yarn e2e-qa-mobile` · sim 6.9" + emulator + Maestro · PNG `qa/screens` + `qa/store/patrol-history` · **cấm** `yarn e2e-qa` / `yarn start:std` / `mfeStdUrl` / test thủ công thay runtime |
| prior | data-analy **confirmed** · `specs/_data-analy/patrol-history-control-hint.md` · `patrol-history-bff-endpoints.md` · `patrol-history-action-tree.md` · `patrol-history-real-data.md` · contentHash `sha256:patrol-history-control-hint-20260820` · bffContentHash `sha256:patrol-history-mobile-bff-20260820` · cluster `specs/patrol-history/specs/_data-analy/` **không tồn tại** — SSOT = 4 file `_data-analy/patrol-history-*` · **no Excel** |
| `devSlash` | `/agent-dev-ios` + `/agent-dev-android` |
| updatedAt | `2026-08-20T04:05:00.000Z` |
| taskId | `task_580f12e0` |

**Cấm:** gộp `#sc-patrol-detail` / filter sheet (`GAP-MOB-ACT-01/02`) · invent `api/v1/patrol-history` / `PatrolHistoryController` · Grid AC web / Report AC Lin* · ERP.* · WebView HTML · `mfeStdUrl` · `UIAlert` / `AlertDialog` / `window.alert` · watermark «Phiên bản Gói N» / «gen realapp» · «Có mạng» · device label «iPhone» / «· Android» · AC tap-cycle tín hiệu · AC implement lại kit đã map (`GAP-MOB-ACT-05`) · start sibling `pending_confirm` (`GAP-MOB-ACT-06`) · enqueue search/filter/submit API sibling (`GAP-MOB-ACT-07`) · enqueue input search (`analy-auto-assign-share.md` §0).

## 1. Goal

Màn **Lịch sử ca** native dual (iOS SwiftUI + Android Compose): list phiên tuần tra · search client-side · badge trạng thái. Persona: Tuần đường · hiện trường. App **chỉ** `{BffBase}/mobile-bff/api/v1/…`. **Cấm** ERP.* · clone controller · WebView bọc HTML demo · `mfeStdUrl`.

**1 action = 1 feature.** Slug `patrol-history` = màn list `#sc-patrol-history` `DES-MOB-PAT-LIST`. **Cấm** gộp `patrol-detail` (`GAP-MOB-ACT-01`). `#sc-patrol-history` **không** child form/sheet (`GAP-MOB-ACT-02` = none · **cấm** filter sheet). Search / Lọc **cùng slug** — **không** enqueue sibling (`GAP-MOB-ACT-07`).

Entry: `patrol-home` row **Lịch sử phiên** → push `#sc-patrol-history` (`reuse` hub · **cấm** reimplement `#sc-patrol-home`).

## 2. changeScope `new_page`

Pack **list mới** theo data-analy. Native đã có scaffold prior (`PatrolHistoryView` / `PatrolHistoryScreen` + GET sessions) — **không** đổi `changeScope` thành `edit_page`. Delta Design/Dev = khớp PO này (dual copy 4 rows · Lọc trailing · toast detail · kit). Không bảng Current vs New web. SSOT visual = dual HTML `#sc-patrol-history` (iOS 390×844 · Android 412×915 · **parity copy** trừ chrome HIG/Material).

**GAP-MOB-DEMO-COPY (PO chốt):** Android mock `mobile-p1` thiếu **Lọc** · thiếu hàng PAT-20260810-0009 · badge «Xong» lệch iOS. Dual **bắt buộc** copy iOS SSOT §3.4. Design sửa Android HTML trước `design_confirm`.

## 3. DoD (đo được)

1. Dual native push `#sc-patrol-history`: nav back **Tuần đường** · trailing **Lọc** · large title **Lịch sử ca** · search · ≥4 rows. Frame proto iOS 390×844 · Android 412×915. Tab 5 shell **giữ** dưới list (`GAP-TAB-01` · in-screen tabs: **none** · **cấm** invent tab / segment trên list).
2. Back → pop `patrol-home` (`reuse` · **cấm** reimplement hub).
3. Trailing **Lọc** P1 → toast **Lọc** · **cấm** filter sheet / modal.
4. Demo / fallback rows SSOT (4 hàng — **cấm** rút Android còn 3 · **cấm** badge «Xong» trên list này):

   | code | sub | badge | kit badgeKind |
   |------|-----|-------|---------------|
   | PAT-20260810-0014 | QL.1 · Tuần đường · 2/3 điểm | **Đang tuần** | info |
   | PAT-20260810-0009 | HCM · Tuần kiểm · 100% | **Hoàn thành** | success |
   | PAT-20260809-0021 | QL.1 · Thiếu điểm tuần | **Bỏ sót** | danger |
   | PAT-20260809-0015 | Chờ đồng bộ · 1 điểm tuần | **Mất sóng** | warning |

   Rows **không** leading icon (`.row.no-icon` · `leadingSlot: 0`) · chevron **có**.
5. Appear: GET `patrol/sessions` page 1 size 50 · ≥3 live rows else demo SSOT · fail/empty/offline → demo · screen **vẫn mở**.
6. Search client-side code / route / patrolType / status. Kit `LinmSearchField` placeholder **Tìm** (`shared_kit` · **cấm** fork field). Demo HTML «Tìm mã phiên, tuyến…» = proto hint — native **không** reimplement search để đổi placeholder P1.
7. Tap row P1 → toast **Chi tiết phiên** · **cấm** push `#sc-patrol-detail` (`GAP-MOB-ACT-02`).
8. Hub row **Lịch sử phiên** → push list (`reuse` entry · **cấm** toast-only entry · **cấm** reimplement hub).
9. Kit **reuse map**: `LinmTopBar` · `LinmLargeTitle` · `LinmSearchField` · `LinmSearchGlyph` `#i-search` · `LinmListRow` · `LinmBadge` · `LinmToast`. **Cấm** raw `List` / M3 `NavigationBar` / `TabView` (`GAP-MOB-ACT-05` · `GAP-MOB-ALIGN-01`).
10. Typography: label/tab **13** · field/search ≥**16** (`GAP-TYP-01`) · dual copy parity trừ chrome HIG vs Material (iOS large title + empty nav title · Android cùng large title + trailing Lọc — **cấm** Android bỏ Lọc).
11. App chỉ `{BffPrefix}` · token Keychain / Encrypted · **cấm** biết RMMS `:5101`.
12. Dev (role sau): iOS `xcodegen` + `xcodebuild` dest **iPhone 17 Pro** PASS · Android `assembleDebug` PASS · Mobile.Bff `dotnet build` PASS — **cấm** `yarn start:std`.
13. QA (role sau): Maestro slug `patrol-history` only · login → tab Tuần đường → row Lịch sử phiên → `#sc-patrol-history` · live sim 6.9" + emulator · store PNG `qa/store/patrol-history` · **cấm** test `#sc-patrol-detail` in-scope · **cấm** `yarn e2e-qa` web.
14. BE align: **không** endpoint mới — reuse `GET patrol/sessions` proxy. Step 4b `/new-endpoint` **N/A**. **Cấm** `PatrolHistoryController` / invent `api/v1/patrol-history`.

## 4. CTX / DEM / DI inventory

| ID | Path | Loại |
|----|------|------|
| CTX-01 | `docs/context/features/patrol-history.md` | list · § UI · § API · OOS detail/filter |
| CTX-02 | `docs/context/features/patrol.md` | domain sessions · `GET api/v1/patrol/sessions` live |
| CTX-03 | `docs/context/features/patrol-home.md` | parent entry row **Lịch sử phiên** |
| DEM-01 | `specs/mobile-p1/ui/prototype/ios/index.html` `#sc-patrol-history` | iOS 390×844 · `DES-MOB-PAT-LIST` · **copy SSOT** |
| DEM-02 | `specs/mobile-p1/ui/prototype/android/index.html` `#sc-patrol-history` | Android 412×915 · **lệch** — Design sửa = DEM-01 |
| DEM-03 | `specs/patrol-history/ui/prototype/` | pack stub — Design chép dual từ mobile-p1 **sau** parity |
| MAP | `docs/html-to-native-map.md` | kit topbar / large title / search / list row / badge **đã map dual** |
| DI-01 | — | **no Excel** |
| DA-01 | `specs/_data-analy/patrol-history-control-hint.md` | controlHint |
| DA-02 | `specs/_data-analy/patrol-history-bff-endpoints.md` | BFF · `GET patrol/sessions` |
| DA-03 | `specs/_data-analy/patrol-history-action-tree.md` | 1 list + sibling `patrol-detail` enqueue |
| DA-04 | `specs/_data-analy/patrol-history-real-data.md` | bind + 4 demo rows |
| SCAN | `specs/_form-type-mobile/ACTION-TREE.md` · `BY-ACTION.md` | `unique` · `#row-history` · `LinmListRow` `#i-list` (icon **trên hub**, không trên hàng history) |
| IOS | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.iOS` | native · `PatrolHistoryView` |
| AND | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Android` | native · `PatrolHistoryScreen` |
| BFF | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Bff` | `mobile-bff/api/v1` proxy |
| BE | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.WebService` | DOMAIN-MAP Patrol · **cấm ERP.*** · **không** `api/v1/patrol-history` |
| KIT | `Linm.Mobile.Kit.iOS` + `Linm.Mobile.Kit.Android` | `LinmTopBar` / `LinmLargeTitle` / `LinmSearchField` / `LinmListRow` / `LinmBadge` **đã có** |

**Cấm** cite `mfeStdUrl` / `http://localhost:9301/` trên artifact native.

## 5. controlHint (PO chốt — Design map kit · SA map API)

Nguồn `#sc-patrol-history` dual + DA-01. UNCLEAR field = **none**.

| Field | VN | controlHint | Required | Kit (iOS+Android cùng turn) | Notes |
|-------|----|-------------|----------|------------------------------|-------|
| navBack | Tuần đường | IconButton / text+chevron | * | `LinmTopBar` leading | pop `patrol-home` · `#i-chevron-left` |
| navFilter | Lọc | TextButton | * | `LinmTopBar` trailing | toast **Lọc** · **cấm** sheet |
| largeTitle | Lịch sử ca | Text | * | `LinmLargeTitle` | fixed · dual |
| search | Tìm | SearchField | * | `LinmSearchField` · `LinmSearchGlyph` `#i-search` | client filter · kit placeholder **Tìm** |
| rowCode | PAT-… | Text | * | `LinmListRow` title | **no** leading icon |
| rowSub | status-aware | Text | * | `LinmListRow` subtitle | §3.4 |
| rowBadge | Đang tuần / Hoàn thành / Bỏ sót / Mất sóng | Badge | * | `LinmBadge` info/success/danger/warning | **cấm** «Xong» trên list này |
| rowChev | — | Chevron | * | `LinmListRow` `showsChevron` | `#i-chevron-right` |

Toast / banner → `LinmToast`. **Cấm** AC implement raw control khi kit đã map.

## 6. BFF (PO chốt path — **cấm** invent)

App `ApiClient.base` = `{BffBase}/mobile-bff/api/v1`. Path **không** lặp prefix.

| Action / zone | Method | Path | In slug `patrol-history`? |
|---------------|--------|------|---------------------------|
| List lịch sử | GET | `patrol/sessions` | **yes** — page 1 size 50 · query `search`/`status`/`route` **không bắt** P1 (filter **client**) |
| Detail drill | GET | `patrol/sessions/{id}` | **no P1** — toast **Chi tiết phiên** |
| Filter sheet | — | — | **no** — toast **Lọc** |
| Search | — | — | **client** trên payload list · **không** enqueue |

**Cấm** `GET patrol-history` · `PatrolHistoryController` · DbContext trên Mobile.Bff · app `:5101`.

## 7. Open questions — PO chốt

| ID | Question | Decision (PO) |
|----|----------|----------------|
| Tap row HTML `go('patrol-detail')` | Demo 2 hàng đầu push detail | **P1 toast Chi tiết phiên.** **Cấm** push detail (`GAP-MOB-ACT-02`). |
| Filter | Demo `toast('Lọc')` | **P1 toast only.** **Cấm** sheet. |
| Android mock lệch | 3 rows · «Xong» · thiếu Lọc | **Chốt 4 rows + badge iOS + trailing Lọc dual.** Design sửa Android HTML. |
| Search placeholder | Demo dài vs kit «Tìm» | **Kit `LinmSearchField` «Tìm» P1.** **Cấm** fork search. |
| packKind | data-analy `list` | **Confirm `list`.** **≠** hub/map. **Cấm** Grid/Report AC. |
| Kit | map + kit dual đã có | **`kit_missing_confirm` N/A** — reuse map. Design **verify** dual. |
| Sibling `patrol-detail` | `pending_confirm` P2 | **Không** start (`GAP-MOB-ACT-06`). Board Approve riêng. |
| Cluster web path | `specs/patrol-history/specs/_data-analy/` | **N/A.** Dùng `_data-analy/patrol-history-*.md`. |
| GAP-PO-STORE-01 | signup / xóa tài khoản | **N/A** — list không signup. |
| Step 4b | New endpoint? | **N/A** — reuse `GET patrol/sessions`. |
| Prior full_pipeline | `task_73b95722` VERIFY PASS | PO roleOnly **chốt requirement** · không re-ship code turn này (trừ VERIFY GATE rebuild). |
| Hub entry prior toast | patrol-home PO toast sibling | **Pack này:** row **Lịch sử phiên** **push** list. Native prior đã `onOpenHistory`. |

UNCLEAR field = **none** — không AskQuestion field.

## 8. Screens (REQUIRED)

| Surface | Demo | Pattern | FormMode | Actions **this** `{feature}` | `devSlash` |
|---------|------|---------|----------|------------------------------|------------|
| Lịch sử ca | `#sc-patrol-history` `DES-MOB-PAT-LIST` · iOS + Android | **List** (push · không Modal/Sheet) | none (search ≠ form dirty) | GET sessions · display 4+ rows · client search · toast Lọc / Chi tiết phiên | `/agent-dev-ios` + `/agent-dev-android` |

**Không** trên pack này: `#sc-patrol-detail` · filter sheet · POST sessions · watermark Gói.

Reuse only: `patrol-home` (back pop · entry row **Lịch sử phiên**). Hub row icon `#i-list` thuộc hub map — **không** vẽ icon trên hàng history.

Frame: iOS 390×844 · Android 412×915 · safe area · nav + large title + search + list + `LinmTabBar` không đè notch / home indicator.

## 9. Device AC (REQUIRED)

| ID | Behavior | AC |
|----|----------|-----|
| AC-D-01 | Offline | List **mở** · demo SSOT 4 rows · toast in-app không chặn · **cấm** full-screen block · **cấm** block tab |
| AC-D-02 | GPS deny | **N/A** |
| AC-D-03 | Leave dirty | **N/A** — search không leave-modal |
| AC-D-04 | Native alert | **Cấm** `UIAlert` / `AlertDialog` / `window.alert`. Mọi phản hồi = `LinmToast` |
| AC-D-05 | Keyboard | Search focus · field ≥16 · keyboard không đè tab bar cứng · dismiss không crash |
| AC-D-06 | Safe area | Nav + title + search + rows + tab không đè notch / home indicator |
| AC-D-07 | Biometric | **N/A** |
| AC-D-08 | Signal | **N/A** trên list (signal trên hub parent) · **cấm** «Có mạng» · **cấm** tap-cycle |
| AC-D-09 | Token | GET sessions Bearer Keychain / Encrypted · app chỉ `{BffPrefix}` |
| AC-D-10 | Tab / swipe | Tab shell **Tuần đường** giữ · in-screen tabs **none** · **cấm** invent / reorder (`GAP-TAB-01`) · **cấm** `TabView` / M3 `NavigationBar` trên màn này |
| AC-D-11 | Camera / push | **N/A** |
| AC-D-12 | Typography | label/tab **13** · title/search/row ≥**16** (`GAP-TYP-01`) |
| AC-F-01 | Appear | GET `patrol/sessions` · ≥3 live else demo |
| AC-F-02 | Back | Pop `patrol-home` · **cấm** reimplement hub |
| AC-F-03 | Lọc | Toast **Lọc** · **cấm** sheet |
| AC-F-04 | Search | Client filter code/route/type/status |
| AC-F-05 | Tap row | Toast **Chi tiết phiên** · **cấm** detail push |
| AC-F-06 | Dual parity | iOS + Android **cùng** 4 rows + Lọc + copy §3.4 (`GAP-MOB-ALIGN-01` · `GAP-MOB-DEMO-COPY`) |
| AC-F-07 | Entry | Hub **Lịch sử phiên** → push `#sc-patrol-history` |
| AC-F-08 | Chrome | **Cấm** device label / proto-click / watermark Gói |

## 10. Leave / alert (REQUIRED)

| Case | UI |
|------|-----|
| Dirty leave | **Không áp dụng** |
| Sessions fail / offline | Demo fallback 4 rows + optional toast · **cấm** native alert (`GAP-PO-LEAVE-01`) |
| Lọc | Toast **Lọc** |
| Tap row | Toast **Chi tiết phiên** |
| Back | Pop hub · không confirm |
| Success load | Không toast bắt buộc · bind UI |

## 11. Out of scope (this pack)

- `#sc-patrol-detail` push / GET `{id}` P1
- Filter sheet / query bắt buộc `status`/`route` trên BFF P1
- Invent `GET patrol-history` / `PatrolHistoryController`
- Reimplement `#sc-patrol-home`
- Watermark Gói / device label / proto-click tín hiệu
- Start sibling `patrol-detail` `pending_confirm`
- Clone PatrolSessionsController · ERP.* · `mfeStdUrl`
- Grid AC web / Report AC Lin*

## 12. KPI (HĐ Gói 1 — màn này)

Lịch sử ca = tuần đường xem danh sách phiên (mã · tuyến · trạng thái) từ **một** push sau hub. DoD pack: `#sc-patrol-history` dual + GET sessions + kit list — **không** omni-implement detail/filter sheet trong 1 slug.

## 13. Handoff → Design

| Field | Value |
|-------|-------|
| feature / packKind | `patrol-history` / **`list`** (confirmed) |
| phase_from / phase_to | po **confirmed** → design pending |
| STATUS | `specs/patrol-history/STATUS.md` |
| Context / Demo / DI | CTX-01 · DEM dual `#sc-patrol-history` · no Excel |
| controlHint / UNCLEAR | §5 · none |
| Screens / Pattern / `devSlash` | List `#sc-patrol-history` · `/agent-dev-ios` + `/agent-dev-android` |
| Grid AC / Report AC | **N/A** — pack list native · **cấm** Lin* grid AC |
| peerStdUrl / reviewUrl | **cấm** `mfeStdUrl` · Design mở dual `file://…/prototype/{ios,android}/index.html#sc-patrol-history` + reviewUrl **cả hai** |
| ux-analy | `/mobile-ui-ux-analy` → `ui/ux-analy.md` §1–§9 **REQUIRED** trước `design_confirm` |
| Kit | reuse map · `kit_missing_confirm` **N/A** · verify dual `LinmTopBar` / `LinmLargeTitle` / `LinmSearchField` / `LinmListRow` / `LinmBadge` |
| BFF | `patrol-history-bff-endpoints.md` · **chỉ** `GET patrol/sessions` (+ detail P2) |
| Open questions | §7 đã chốt — Design **sửa Android HTML** = 4 rows + Lọc + badge iOS · **không** vẽ detail · **không** filter sheet |
| Next AskQuestion | autoApprove=ON — `design_confirm` khi Design xong **cả hai** mock + ux-analy + `/review-demo-design-mobile` |
| Next slash | `/agent-design-mobile` |
| Chain this turn | **không** (roleOnly=po) |
| e2eQa | ON khi QA · `yarn e2e-qa-mobile` · **cấm** yarn start:std / mfeStdUrl |

Design: HIG + Material · IA lock Tab 5 · copy VN đúng iOS HTML (trừ skip `go('patrol-detail')` → toast · skip device label) · **cấm** skin Ministry · **cấm** «Có mạng» · packet `design-demo-ssot.md` · `/review-demo-design-mobile` trước confirm.

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-po-mobile |
| skillVersion | 2026.08.20.03 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.20.04 |
| rulesVersion | 2026.08.20.8 |
| generatedAt | 2026-08-20T04:05:00.000Z |
| versionGate | rechecked |
| contentHash | sha256:patrol-history-control-hint-20260820 |
| bffContentHash | sha256:patrol-history-mobile-bff-20260820 |

---
<!-- Version meta: skillId=agent-po-mobile skillVersion=2026.08.20.03 schemaVersion=1 workflowVersion=2026.08.20.04 rulesVersion=2026.08.20.8 versionGate=rechecked -->
