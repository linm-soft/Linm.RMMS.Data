# PO — Requirement — ops (mobile list · Thông báo)

| Field | Value |
|-------|-------|
| feature | `ops` |
| title | [Mobile] Thông báo |
| this role | `po` · `/agent-po-mobile` |
| changeScope | `edit_page` |
| packKind | **`list`** (PO confirm · data-analy đề xuất · **≠** web Kind B catalog) |
| stack | `native_dual` |
| thisAction | **List Thông báo** `#sc-ops` `DES-MOB-OPS` only · entry Me `row-ops` + Home bell · **không** gộp form/create · mark-read **không** enqueue (`GAP-MOB-ACT-07`) |
| status | `confirmed` (autoApprove=ON) |
| requestSource | run packet `task_8f46a3b3` · `/agent-qldb-workflow-mobile` · roleOnly=`po` · `/agent-po-mobile` |
| autoApprove | **ON** — Design/SA/Review tự confirm **khi tới lượt** · turn này **không** chain |
| e2eQa | ON khi QA · `yarn e2e-qa-mobile` · sim 6.9" + emulator + Maestro · PNG `qa/screens` + `qa/store/ops` · **cấm** `yarn e2e-qa` / `yarn start:std` / `mfeStdUrl` / test thủ công thay runtime |
| prior | data-analy **confirmed** · `specs/_data-analy/ops-control-hint.md` · `ops-bff-endpoints.md` · `ops-action-tree.md` · `ops-real-data.md` · contentHash `sha256:ops-mobile-edit-list-20260819` · bffContentHash `sha256:notification-inbox-proxy-passthrough` · cluster `specs/ops/specs/_data-analy/` **không tồn tại** — SSOT = 4 file `_data-analy/ops-*` · **no Excel** |
| prior native | `task_f2c9a5de` Review **approve** · list dual **đã ship** · PO artifact cũ **thin** → **recheck_new** this turn |
| `devSlash` | `/agent-dev-ios` + `/agent-dev-android` |
| updatedAt | `2026-08-19T12:30:35.000Z` |
| taskId | `task_8f46a3b3` |

**Cấm:** gộp form create / Kind B schema / Command / SignalR (`GAP-MOB-ACT-01/02`) · invent `api/v1/ops` / fork inbox DTO · Grid AC web / Report AC Lin* · ERP.* · WebView HTML · `mfeStdUrl` · `UIAlert` / `AlertDialog` / `window.alert` · watermark «Phiên bản Gói N» / «gen realapp» · «Có mạng» · device label «iPhone» / «· Android» · AC tap-cycle tín hiệu · AC implement lại kit đã map (`GAP-MOB-ACT-05`) · start sibling `pending_confirm` (`GAP-MOB-ACT-06`) · enqueue mark-read như màn mới (`GAP-MOB-ACT-07`).

## 1. Goal

Màn **Thông báo** native dual (iOS SwiftUI + Android Compose): inbox list chỉ đạo — title · subtitle `sender · HH:mm` · badge **Mới** / **Đã đọc**. Persona: Hạt trưởng · điều phối · hiện trường. App **chỉ** `{BffBase}/mobile-bff/api/v1/…`. **Cấm** ERP.* · clone controller · WebView bọc HTML demo · `mfeStdUrl`.

**1 action = 1 feature.** Slug `ops` = list `#sc-ops` `DES-MOB-OPS`. **Cấm** gộp Tạo chỉ đạo / chi tiết form / mark-all-read / Command center / map (`GAP-MOB-ACT-01`). `#sc-ops` **không** child form/sheet (`GAP-MOB-ACT-02` = none). Mark-read = action trên cùng list — **không** enqueue (`GAP-MOB-ACT-07`).

**≠** web Kind B `LinPageLayout` + schema editor + full-page form — kept `po/requirement.md`. Mobile P1 = **list inbox** only.

## 2. changeScope `edit_page` — Current → New

Nguồn SSOT: data-analy `2026-08-19T11:50:00.000Z` + native live sau `task_f2c9a5de` + dual HTML `#sc-ops`.

| ID | Current (native 2026-08-19 · sau Review `task_f2c9a5de`) | New (this PO `task_8f46a3b3`) | Surface |
|----|----------------------------------------------------------|-------------------------------|---------|
| GAP-MOB-OPS-NAV-01 | Me `row-ops` + Home `LinmNotifyButton` → **push** `#sc-ops` · back pop | **keep** · AC a11y `row-ops` · `hero-tools`/`btn-notify` · `sc-ops` · `nav-back` | me · home · ops |
| GAP-MOB-OPS-LIST-01 | List title · sub · badge Mới/Đã đọc · kit `LinmListRow` + `LinmBadge` | **keep** · dual copy SSOT 2 hàng demo | ops list |
| GAP-MOB-OPS-READ-01 | Tap unread → POST mark-read · toast **Đã đọc chỉ đạo** · badge Đã đọc | **keep** · tap already-read = no-op | ops list |
| GAP-MOB-OPS-DATA-01 | GET `notification/inbox` · fail/empty → demo 2 rows | **keep** · list **vẫn mở** · **cấm** crash / block Me | ops · BFF |
| GAP-MOB-OPS-DEMO-01 | Dual 2 rows cùng VN copy | **keep** | prototype dual |
| PO artifact | `requirement-mobile.md` thin (thiếu Device AC / Screens / Version meta) | **this turn** full `/agent-po-mobile` AC | po |
| GAP-QA-OPS-IOS-01 | Maestro iOS nav **FAIL** (non-block) | **OUT expand** — lock a11y ids · sửa runtime = `/edit-mobile-feature` khi Dev/QA | qa follow-up |

**Không** đổi (OUT pack mobile P1): web Kind B schema editor · full-page form create · SignalR `OpsHub` · Command center · map embed · org-unit filter bar · mark-all-read · live unread badge Me/Home (optional overview = **P2 Nice**).

**Reuse:** domain Notification · paths `notification/inbox*` · kit `LinmTopBar` · `LinmListRow` · `LinmBadge` · `LinmToast` · entry `LinmNotifyButton` (`reuse=home`) · parent `me`. OfficialDocument scalars trên DTO — list row **không** bắt buộc hiện số CV.

## 3. DoD (đo được)

1. Dual native: iOS SwiftUI + Android Compose — **cùng** zone `#sc-ops`: `LinmTopBar` title **Thông báo** · list rows · badge. Frame proto iOS 390×844 · Android 412×915. Tab 5 IA lock **giữ** trên shell (entry Me) — **cấm** invent segment trên ops (`tabs: none`).
2. Entry: Me hàng **Thông báo** `row-ops` → push `#sc-ops`. Home bell (`LinmNotifyButton` trong `LinmHeroTools`) → **cùng** slug `ops` · **cấm** reimplement Home/Me hub.
3. Back: pop → Me hoặc Home (theo stack). iOS leading label **Tôi** + `#i-chevron-left`. Android icon chevron `#i-chevron-left` (HIG vs M3 chrome OK) · title **Thông báo** **cùng** 2 OS.
4. Rows: `title` · subtitle `sender · HH:mm` · badge **Mới** (`isUnread`) / **Đã đọc**. Demo fallback **đúng** copy:
   - Ưu tiên SC-2401 · Hạt trưởng · 08:12 · Mới
   - Ca PAT-…0014 độ phủ 67% · Hệ thống · 07:50 · Đã đọc
5. GET `mobile-bff/api/v1/notification/inbox` (`page=1` · `pageSize=50`) · bind `title` · `sender`+`sentAt` · `isUnread`. **Cấm** invent `api/v1/ops` · **cấm** app gọi RMMS `:5101`.
6. GET fail / offline / empty live → demo 2 rows §3.4 · list **mở** · toast info **optional** · **cấm** crash · **cấm** block tab Tôi / Trang Chủ.
7. Tap unread → POST `notification/inbox/{id}/mark-read` · toast in-app **Đã đọc chỉ đạo** · badge → **Đã đọc**. POST fail → toast error in-app · **giữ** unread UI.
8. Tap already-read → no-op · **không** toast bắt buộc.
9. Kit **reuse map**: `LinmTopBar` · `LinmListRow` · `LinmBadge` · `LinmToast` · entry `LinmNotifyButton`. **Cấm** raw `List`/`LazyColumn` row chrome · **cấm** M3 `Badge` · **cấm** native alert.
10. **Cấm** watermark Gói / device label / proto-click (`GAP-DEV-MOB-PLACEHOLDER-01` · `GAP-MOB-CHROME-01`).
11. Type: shell tab **13** (reuse `LinmTabBar` · **không** AC reimplement) · row title ≥ **16** (`fieldText`) · badge/label **13** · **cấm** tab 10 / label 12 (`GAP-TYP-01`).
12. App chỉ `{BffPrefix}` · token Keychain / Encrypted.
13. Dev (role sau): iOS `xcodegen` + `xcodebuild` dest **iPhone 17 Pro** PASS · Android `assembleDebug` PASS · Mobile.Bff `dotnet build` PASS — **cấm** `yarn start:std`.
14. QA (role sau): Maestro slug `ops` · live sim 6.9" + emulator · store PNG `qa/store/ops` · **cấm** `yarn e2e-qa` web. GAP-QA-OPS-IOS-01 **không** block PO confirm.
15. BE align: **không** endpoint mới — Signed Notification inbox/mark-read. Step 4b `/new-endpoint` **N/A**. **Cấm** `OpsController` trên Mobile.Bff.

## 4. CTX / DEM / DI inventory

| ID | Path | Loại |
|----|------|------|
| CTX-01 | `docs/context/features/ops.md` | Kind B web + notify list · §3 API Notification |
| DEM-01 | `specs/ops/ui/prototype/ios/index.html` `#sc-ops` | iOS 390×844 · `DES-MOB-OPS` |
| DEM-02 | `specs/ops/ui/prototype/android/index.html` `#sc-ops` | Android 412×915 · **cùng copy** 2 rows |
| DEM-03 | `specs/mobile-p1/ui/prototype/{ios,android}/index.html` `#sc-ops` | pack SSOT gốc |
| MAP | `docs/html-to-native-map.md` | `LinmTopBar` · `LinmListRow` · `LinmBadge` · `LinmToast` · `LinmNotifyButton` **đã map dual** |
| DI-01 | — | **no Excel** |
| DA-01 | `specs/_data-analy/ops-control-hint.md` | controlHint |
| DA-02 | `specs/_data-analy/ops-bff-endpoints.md` | BFF proxy Notification |
| DA-03 | `specs/_data-analy/ops-action-tree.md` | 1 list + parent reuse |
| DA-04 | `specs/_data-analy/ops-real-data.md` | bind title/sender/sentAt/isUnread |
| SCAN | `specs/_form-type-mobile/ACTION-TREE.md` | verify |
| WEB-PO | `specs/ops/po/requirement.md` | Kind B web — **không** AC mobile |
| IOS | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.iOS` | `OpsView` shipped |
| AND | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Android` | `OpsScreen` shipped |
| BFF | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Bff` | `mobile-bff/api/v1` catch-all proxy |
| BE | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.WebService` | DOMAIN-MAP Notification · **cấm ERP.*** |
| KIT | `Linm.Mobile.Kit.iOS` + `Linm.Mobile.Kit.Android` | list kit **đã có** |

**Cấm** cite `mfeStdUrl` / `http://localhost:9301/` trên artifact native.

## 5. controlHint (PO chốt — Design map kit · SA map API)

Nguồn `#sc-ops` dual + DA-01. UNCLEAR field = **none**.

| Field | VN | controlHint | Required | Kit (iOS+Android cùng turn) | Notes |
|-------|----|-------------|----------|------------------------------|-------|
| navBack | Tôi | BackButton | * | `LinmTopBar` leading | `reuse=me` · `go('me')` / pop Home · `#i-chevron-left` |
| title | Thông báo | Text | * | `LinmTopBar` title | DES-MOB-OPS · dual same |
| items[].title | (tiêu đề) | Text | * | `LinmListRow` title | DTO `title` · demo «Ưu tiên SC-2401» |
| items[].subtitle | sender · time | Text | * | `LinmListRow` subtitle | `sender` + `sentAt` |
| badgeUnread | Mới | Badge | * | `LinmBadge` info | khi `isUnread` |
| badgeRead | Đã đọc | Badge | * | `LinmBadge` neutral | `isUnread=false` |
| rowTap | — | ListRow action | * | `LinmListRow` onTap | mark-read nếu unread |
| empty | (trống) | EmptyChrome | | optional | 0 live + no demo — **không** bắt buộc P1 (fail → demo) |
| toastRead | Đã đọc chỉ đạo | Toast | * | `LinmToast` | tap unread OK |
| entryMe | Thông báo | ListRow | * | `LinmListRow` Me | `row-ops` · **cấm** reimplement Me hub |
| entryHome | Thông báo | NotifyButton | * | `LinmNotifyButton` | `reuse=home` · **cấm** reimplement Home |

Toast / banner → `LinmToast`. **Cấm** AC implement raw control khi kit đã map (`GAP-MOB-ACT-05`).

## 6. BFF (PO chốt path — **cấm** invent)

App `ApiClient.base` = `{BffBase}/mobile-bff/api/v1`. Path **không** lặp prefix.

| Action | Method | Path | In slug `ops`? |
|--------|--------|------|-----------------|
| Inbox list | GET | `notification/inbox` | **yes** — `page=1` · `pageSize=50` · query filter **không** UI P1 |
| Mark read | POST | `notification/inbox/{id}/mark-read` | **yes** — tap unread |
| Overview unread | GET | `notification/overview` | **optional** — Me/Home badge **P2 Nice** · **không** DoD P1 |
| Nav back | — | — | local nav |
| Create / PUT / DELETE inbox | POST/PUT/DELETE | `notification/inbox` · `…/{id}` | **no** — web / sibling |
| Mark all read | POST | `notification/inbox/mark-all-read` | **no** — OUT demo P1 |
| SignalR | — | `OpsHub` | **no** — P2 DEFER |
| Invent `ops` | GET | `ops` / `api/v1/ops` | **cấm** |

## 7. Open questions — PO chốt

| ID | Question | Decision (PO) |
|----|----------|----------------|
| GAP-F-OPS-MOB-01 | Home bell vs Me entry | **Cùng slug `ops`.** Hai entry · một màn. **Không** enqueue Home/Me. |
| GAP-F-OPS-01 | Command UI | **OUT P2.** **Cấm** badge Command trên mobile list P1. |
| packKind | data-analy `list` | **Confirm `list`.** **≠** web Kind B. **Cấm** Grid/Report AC. |
| Kit list | map + kit dual đã có | **`kit_missing_confirm` N/A** — reuse. Design **verify** dual. **Cấm** `kit_skip` im lặng · **cấm** Dev raw row. |
| OfficialDoc số CV | web grid cols | List row P1 **không** bắt buộc `documentNumber`. |
| Live unread badge | GET overview | **P2 Nice** (Review prior). P1 Home `notifyCount=0` ẩn OK. |
| GAP-QA-OPS-IOS-01 | Maestro iOS | **Non-block PO.** AC ids bắt buộc; fix tap = Dev/QA `/edit-mobile-feature`. |
| Cluster web path | `specs/ops/specs/_data-analy/` | **N/A.** Dùng `_data-analy/ops-*.md`. |
| GAP-PO-STORE-01 | signup / xóa tài khoản | **N/A** — list không signup. |
| Filter UI | search/status/org | **OUT P1** — query passthrough only, không toolbar filter trên `#sc-ops`. |

UNCLEAR field = **none** — không AskQuestion field.

## 8. Screens (REQUIRED)

| Surface | Demo | Pattern | FormMode | Actions **this** `{feature}` | `devSlash` |
|---------|------|---------|----------|------------------------------|------------|
| List Thông báo | `#sc-ops` `DES-MOB-OPS` · iOS + Android | **List** (push từ Me/Home · không Modal/Sheet) | none (không form) | Appear GET inbox · tap unread mark-read · back pop | `/agent-dev-ios` + `/agent-dev-android` |

**Không** trên pack này: `#sc-ops` form create · `#sc-home` hub · `#sc-me` hub (chỉ **entry reuse**) · Command · map · schema editor · mark-all-read · watermark.

Frame: iOS 390×844 · Android 412×915 · safe area · content không đè notch / home indicator / `LinmTabBar` (khi pop về Me).

## 9. Device AC (REQUIRED)

| ID | Behavior | AC |
|----|----------|-----|
| AC-D-01 | Offline | List **mở** · demo 2 rows SSOT · toast info optional · **cấm** full-screen block · **cấm** block Me/Home |
| AC-D-02 | GPS deny | **N/A** — ops không GPS |
| AC-D-03 | Leave dirty | **N/A** — không form |
| AC-D-04 | Native alert | **Cấm** `UIAlert` / `AlertDialog` / `window.alert`. Mọi phản hồi = `LinmToast` |
| AC-D-05 | Keyboard | **N/A** — không input |
| AC-D-06 | Safe area | TopBar + list không đè notch / home indicator |
| AC-D-07 | Biometric | **N/A** |
| AC-D-08 | Signal | **N/A** trên `#sc-ops` (signal = Home/Me · **cấm** «Có mạng» · **cấm** tap-cycle) |
| AC-D-09 | Token | GET/POST Bearer Keychain / Encrypted · app chỉ `{BffPrefix}` |
| AC-D-10 | Tab / swipe | `tabs: none` trên ops · shell tab **Tôi** = entry · **cấm** invent segment · tab order = analy § Tab index |
| AC-D-11 | Camera / push | Display only · OS local notify = app toast path · **không** request push · **không** OpsHub |
| AC-D-12 | Type | Tab/label **13** · row title ≥ **16** · **cấm** GAP-TYP-01 |
| AC-D-13 | Dual parity | Cùng copy VN 2 rows + title **Thông báo** + toast **Đã đọc chỉ đạo** · `#i-chevron-left` · **cấm** lệch text (`GAP-MOB-DEMO-COPY-*`) |
| AC-D-14 | Chrome skip | **Cấm** device label «iPhone» / «· Android» · **cấm** watermark Gói |
| AC-F-01 | Appear | GET `notification/inbox` · bind rows · fail → demo |
| AC-F-02 | Entry Me | `row-ops` → `#sc-ops` · **cấm** toast-only (supersede Home/Me stub) |
| AC-F-03 | Entry Home | `LinmNotifyButton` → `#sc-ops` · **cấm** reimplement Home |
| AC-F-04 | Mark-read | Unread tap → POST · toast **Đã đọc chỉ đạo** · read tap no-op |
| AC-F-05 | POST fail | Toast error · giữ unread |
| AC-F-06 | A11y / Maestro | `sc-ops` · `nav-back` · `row-ops` (Me) · `row-ops-{id}` · Home notify hittable (`hero-tools` / `btn-notify`) |
| AC-F-07 | Watermark | **Cấm** «bản Gói N» / «gen realapp» trên UI |

## 10. Leave / alert (REQUIRED)

| Case | UI |
|------|-----|
| Dirty leave | **Không áp dụng** |
| GET fail / offline | Demo rows + optional `LinmToast` · **cấm** native alert (`GAP-PO-LEAVE-01`) |
| Mark-read OK | Toast **Đã đọc chỉ đạo** |
| Mark-read fail | Toast error in-app · giữ unread |
| Tap already-read | Không toast bắt buộc |
| Back | pop — không confirm |

## 11. Out of scope (this pack)

- Form create/edit/delete chỉ đạo · Kind B schema editor · View `<dl>` web
- Command center · SignalR `OpsHub` · map Patrol/Gis embed
- Mark-all-read · filter toolbar · org-unit / direction SearchInput
- Live unread badge Me/Home (P2 Nice)
- `OpsController` / invent `GET ops` trên Mobile.Bff
- Web KPI overview 4 ô trên mobile list
- Start sibling `pending_confirm`
- Clone ERP.* · `mfeStdUrl` · iPad Phase 2 (`A4-IPAD DEFER`)
- Sửa Maestro iOS GAP-QA-OPS-IOS-01 trong role PO (không Dev write)

## 12. KPI (HĐ Gói 1 — màn này)

Inbox nhẹ hiện trường: mở Thông báo từ Tôi / chuông Home, đọc hàng, đánh dấu đã đọc. DoD mobile-p1 `#sc-ops` dual + GET inbox + mark-read — **không** omni Command / form Kind B trong 1 slug.

## 13. Handoff → Design

| Field | Value |
|-------|-------|
| feature / packKind | `ops` / **`list`** (confirmed) |
| phase_from / phase_to | po **confirmed** → design pending |
| STATUS | `specs/ops/STATUS.md` |
| Context / Demo / DI | CTX-01 · DEM dual `#sc-ops` · no Excel |
| controlHint / UNCLEAR | §5 · none |
| Screens / Pattern / `devSlash` | List `#sc-ops` · `/agent-dev-ios` + `/agent-dev-android` |
| Grid AC / Report AC | **N/A** — không list/report web |
| peerStdUrl / reviewUrl | **cấm** `mfeStdUrl` · Design mở dual `file://…/prototype/{ios,android}/index.html#sc-ops` + reviewUrl **cả hai** |
| ux-analy | `/mobile-ui-ux-analy` → `ui/ux-analy.md` §1–§9 **REQUIRED** trước `design_confirm` |
| Kit | reuse map · `kit_missing_confirm` **N/A** · verify dual `LinmTopBar` / `LinmListRow` / `LinmBadge` / `LinmToast` |
| BFF | `ops-bff-endpoints.md` · GET inbox + POST mark-read · overview **optional P2** |
| Open questions | GAP-F-OPS-01/MOB-01 đã chốt §7 — Design **không** vẽ form create · **không** vẽ Command · **không** filter bar |
| Next AskQuestion | autoApprove=ON — `design_confirm` khi Design xong **cả hai** mock + ux-analy |
| Next slash | `/agent-design-mobile` |
| Chain this turn | **không** (roleOnly=po) |
| e2eQa | ON khi QA · `yarn e2e-qa-mobile` · **cấm** yarn start:std / mfeStdUrl |
| Step 4b | **N/A** — Notification Signed · **cấm** invent path |

Design: HIG + Material · copy VN đúng HTML · **cấm** skin Ministry · **cấm** «Có mạng» · packet `design-demo-ssot.md` · dual parity `/review-demo-design-mobile`.

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-po-mobile |
| skillVersion | 2026.08.19.23 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.19.27 |
| rulesVersion | 2026.08.19.32 |
| generatedAt | 2026-08-19T12:30:35.000Z |
| versionGate | rechecked |
| contentHash | sha256:ops-mobile-edit-list-20260819 |
| bffContentHash | sha256:notification-inbox-proxy-passthrough |

---
<!-- Version meta: skillId=agent-po-mobile skillVersion=2026.08.19.23 schemaVersion=1 workflowVersion=2026.08.19.27 rulesVersion=2026.08.19.32 versionGate=rechecked -->
