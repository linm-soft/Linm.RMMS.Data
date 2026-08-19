# PO — Requirement — patrol-home (mobile hub)

| Field | Value |
|-------|-------|
| feature | `patrol-home` |
| title | [Mobile] Tuần đường |
| this role | `po` · `/agent-po-mobile` |
| changeScope | `new_page` |
| packKind | **`hub`** (PO confirm · data-analy đề xuất) |
| stack | `native_dual` |
| thisAction | **Hub Tuần đường** `#sc-patrol-home` only · tab field + entry Home quick/tile · **không** gộp sibling · reuse `patrol-offline` |
| status | `confirmed` (autoApprove=ON) |
| requestSource | run packet `task_9415067f` · `/agent-qldb-workflow-mobile` · roleOnly=`po` · `/agent-po-mobile` |
| autoApprove | **ON** — Design/SA tự confirm **khi tới lượt** · turn này **không** chain |
| e2eQa | ON khi QA · `yarn e2e-qa-mobile` · sim 6.9" + emulator + Maestro · PNG `qa/screens` + `qa/store/patrol-home` · **cấm** `yarn e2e-qa` / `yarn start:std` / `mfeStdUrl` / test thủ công thay runtime |
| prior | data-analy **confirmed** · `specs/_data-analy/patrol-home-control-hint.md` · `patrol-home-bff-endpoints.md` · `patrol-home-action-tree.md` · contentHash `sha256:7ad6e12c43d77ffc6133f5e3063b85200a6d18d6bd1f8ff91a265b989dcd3b9c` · bffContentHash `sha256:bcf39a561ac6a4ecf60df85f6c8526b926a1c33a3b3f34628aeaa9b9d6d36ead` · cluster `specs/patrol-home/specs/_data-analy/` **không tồn tại** — SSOT = 3 file `_data-analy/patrol-home-*` · **no Excel** |
| `devSlash` | `/agent-dev-ios` + `/agent-dev-android` |
| updatedAt | `2026-08-19T14:21:00.000Z` |
| taskId | `task_9415067f` |

**Cấm:** gộp sibling screens / check-in sheet / map live (`GAP-MOB-ACT-01/02`) · invent `api/v1/patrol-home` / `PatrolHomeController` · Grid AC web / Report AC Lin* · ERP.* · WebView HTML · `mfeStdUrl` · `UIAlert` / `AlertDialog` / `window.alert` · watermark «Phiên bản Gói N» / «gen realapp» · «Có mạng» · device label «iPhone» / «· Android» · AC tap-cycle tín hiệu · AC implement lại kit đã map (`GAP-MOB-ACT-05`) · start sibling `pending_confirm` (`GAP-MOB-ACT-06`) · hardcode badge notify `3` · openSheet check-in trên hub.

## 1. Goal

Hub **Tuần đường** native dual (iOS SwiftUI + Android Compose): tab field · hero ca đang chạy · KPI · danh sách hôm nay · thao tác nhanh. Persona: Tuần đường · hiện trường. App **chỉ** `{BffBase}/mobile-bff/api/v1/…`. **Cấm** ERP.* · clone controller · WebView bọc HTML demo · `mfeStdUrl`.

**1 action = 1 feature.** Slug `patrol-home` = màn hub `#sc-patrol-home` `DES-MOB-PAT-HOME`. **Cấm** gộp `attendance` / `patrol-map` / check-in form / `field-reflect` / `cam-patrol` / `patrol-history` / `supervise` / `ops` (`GAP-MOB-ACT-01`). `#sc-patrol-home` **không** child form/sheet (`GAP-MOB-ACT-02` = none · **cấm** `openSheet('checkin')`). **Không** enqueue submit (`GAP-MOB-ACT-07`).

Entry: tab **Tuần đường** (shell) · Home quick **Điểm tuần** · Home tile **Tuần đường** → switch tab field / `#sc-patrol-home`.

## 2. changeScope `new_page`

Pack **hub mới** theo data-analy. Native đã có scaffold prior (`PatrolHomeView` / `PatrolHomeScreen` + GET sessions) — **không** đổi `changeScope` thành `edit_page`. Delta Design/Dev = khớp PO này (dual copy · kit · toast sibling · offline badge local). Không bảng Current vs New web. SSOT visual = dual HTML `#sc-patrol-home` (iOS 390×844 · Android 412×915 · **parity copy** trừ chrome HIG/Material).

## 3. DoD (đo được)

1. Dual native: iOS SwiftUI + Android Compose — **cùng** zone `#sc-patrol-home`: nav sync+bell · large title **Tuần đường** · segment 2 · hero ca · pin CTA · KPI 3 · section **Hôm nay** · section **Thao tác nhanh**. Frame proto iOS 390×844 · Android 412×915. Tab 5 IA lock: Trang Chủ · **Tuần đường** · Vấn đề · Công việc · Tôi.
2. Nav sync → push `#sc-patrol-offline` (`reuse=patrol-offline` · **cấm** reimplement offline list). Bell → toast **Thông báo** · **cấm** native alert · **cấm** push `#sc-ops` trên pack này · notify badge **0 ẩn** · **cấm** hardcode `3` từ HTML.
3. Segment index **0** **Tuần đường** (owner) · **1** **Chấm công** → toast **Chấm công** (sibling `attendance`) — **cấm** đổi thứ tự (`GAP-TAB-01`).
4. Hero SSOT demo / fallback: eyebrow **Ca đang chạy · {signal}** · title **QL.1 · Km 1556+000** · meta **PAT-20260810-0014 · {user}** · **Điểm tuần 2/3 · Độ phủ 67%** · progress **67%**. Live: map session status «Đang tuần» từ `GET patrol/sessions` · fail/offline → demo SSOT · hub **vẫn mở**.
5. Hero actions P1: **Tiếp tục bản đồ** → toast **Tiếp tục bản đồ** · **Ghi điểm tuần** → toast **Ghi điểm tuần** · **cấm** sheet check-in · **cấm** push map live.
6. Pin **Ghim vị trí hiện tại** P1 → toast **Ghim vị trí hiện tại** (hoặc copy demo pin) · **cấm** openSheet · GPS live = **P2** (không block DoD P1).
7. KPI strip: **2** / **1** / **67%** labels **Đã ghi điểm tuần** · **Còn lại** · **Độ phủ** — bind active session hoặc demo fallback.
8. Hôm nay 2 rows SSOT (demo / live map):

   | code | sub | badge |
   |------|-----|-------|
   | PAT-20260810-0014 | Tuần đường · QL.1 · 07:20 | **Đang tuần** |
   | PAT-20260810-0009 | Tuần kiểm · HCM · Hoàn thành | **Xong** |

   Tap row P1 → toast mã/row · drill detail **P2**.
9. Thao tác nhanh — sibling **chưa** ship → toast nhãn · **không** start `pending_confirm` (`GAP-MOB-ACT-06`):

   | Control | Toast / nav |
   |---------|-------------|
   | Ghi nhận hư hỏng | toast **Ghi nhận hư hỏng** |
   | Thu thập bằng camera | toast **Thu thập bằng camera** |
   | Bản đồ ca | toast **Bản đồ ca** |
   | Lịch sử phiên | toast **Lịch sử phiên** |
   | Giám sát | toast **Giám sát** |
   | Lưu trữ | push `patrol-offline` · badge = **local offline count** · **ẩn khi 0** · **cấm** hardcode `3` production |

10. Home quick **Điểm tuần** / tile **Tuần đường** → switch tab field `#sc-patrol-home` (`reuse` entry · **cấm** reimplement Home hub).
11. Kit **reuse map**: `LinmTopBar` · `LinmLargeTitle` · `LinmSegment` · `LinmHeroCard` · `LinmProgress` · `LinmPrimaryButton` · `LinmKpiStrip` · `LinmSectionLabel` · `LinmListRow` · `LinmNetSignalMark` · `LinmToast` · `LinmTabBar`. **Cấm** raw list / `TabView` / M3 `NavigationBar` (`GAP-MOB-ACT-05` · `GAP-MOB-ALIGN-01`).
12. App chỉ `{BffPrefix}` · **cấm** biết RMMS `:5101` · token Keychain / Encrypted.
13. Dev (role sau): iOS `xcodegen` + `xcodebuild` dest **iPhone 17 Pro** PASS · Android `assembleDebug` PASS · Mobile.Bff `dotnet build` PASS — **cấm** `yarn start:std`.
14. QA (role sau): Maestro slug `patrol-home` only · live sim 6.9" + emulator · store PNG `qa/store/patrol-home` · **cấm** test sibling screens in-scope · **cấm** `yarn e2e-qa` web.
15. BE align: **không** endpoint mới — reuse `GET patrol/sessions` proxy. Step 4b `/new-endpoint` **N/A**. **Cấm** `PatrolHomeController` / invent hub API.

## 4. CTX / DEM / DI inventory

| ID | Path | Loại |
|----|------|------|
| CTX-01 | `docs/context/features/patrol-home.md` | hub · §2 UI · §3 API · sibling |
| CTX-02 | `docs/context/features/patrol.md` | domain sessions |
| CTX-03 | `docs/context/features/home.md` | parent entry quick/tile |
| CTX-04 | `docs/context/features/patrol-offline.md` | reuse sync / Lưu trữ |
| DEM-01 | `specs/mobile-p1/ui/prototype/ios/index.html` `#sc-patrol-home` | iOS 390×844 · `DES-MOB-PAT-HOME` |
| DEM-02 | `specs/mobile-p1/ui/prototype/android/index.html` `#sc-patrol-home` | Android 412×915 · **cùng copy** |
| DEM-03 | `specs/patrol-home/ui/prototype/` | pack stub — Design chép dual từ mobile-p1 |
| MAP | `docs/html-to-native-map.md` | kit segment / hero / kpi **đã map dual** |
| DI-01 | — | **no Excel** |
| DA-01 | `specs/_data-analy/patrol-home-control-hint.md` | controlHint |
| DA-02 | `specs/_data-analy/patrol-home-bff-endpoints.md` | BFF · `GET patrol/sessions` |
| DA-03 | `specs/_data-analy/patrol-home-action-tree.md` | 1 hub + sibling enqueue |
| SCAN | `specs/_form-type-mobile/ACTION-TREE.md` | verify |
| IOS | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.iOS` | native · `PatrolHomeView` |
| AND | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Android` | native · `PatrolHomeScreen` |
| BFF | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Bff` | `mobile-bff/api/v1` proxy |
| BE | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.WebService` | DOMAIN-MAP Patrol · **cấm ERP.*** · **không** `api/v1/patrol-home` |
| KIT | `Linm.Mobile.Kit.iOS` + `Linm.Mobile.Kit.Android` | `LinmHeroCard` / `LinmKpiStrip` / `LinmSegment` / `LinmListRow` **đã có** |

**Cấm** cite `mfeStdUrl` / `http://localhost:9301/` trên artifact native.

## 5. controlHint (PO chốt — Design map kit · SA map API)

Nguồn `#sc-patrol-home` dual + DA-01. UNCLEAR field = **none**.

| Field | VN | controlHint | Required | Kit (iOS+Android cùng turn) | Notes |
|-------|----|-------------|----------|------------------------------|-------|
| navSync | Đồng bộ | IconButton | * | `LinmTopBar` leading | `reuse=patrol-offline` · push |
| navNotify | Thông báo | IconButton + badge | * | `LinmTopBar` trailing | toast **Thông báo** · badge 0 ẩn |
| title | Tuần đường | LargeTitle | * | `LinmLargeTitle` | fixed |
| segPatrol | Tuần đường | Segment | * | `LinmSegment` index **0** | owner |
| segAttendance | Chấm công | Segment | * | `LinmSegment` index **1** | sibling toast |
| heroEyebrow | Ca đang chạy · {signal} | Text + signal | * | `LinmHeroCard` · `LinmNetSignalMark` | OS path · **cấm** «Có mạng» |
| heroTitle | QL.1 · Km 1556+000 | Text | * | `LinmHeroCard` | session.route |
| heroMeta | PAT-* · user · điểm/coverage | Text | * | `LinmHeroCard` | session |
| heroProgress | 67% | Progress | * | `LinmProgress` | coverage |
| heroMap | Tiếp tục bản đồ | HeroAction | * | `LinmHeroAction` | toast P1 |
| heroCheckin | Ghi điểm tuần | HeroAction | * | `LinmHeroAction` | toast P1 · **cấm** sheet |
| pinHere | Ghim vị trí hiện tại | PrimaryButton | * | `LinmPrimaryButton` | toast P1 · GPS P2 |
| kpiChecked | Đã ghi điểm tuần | KPI | * | `LinmKpiStrip` | checkInCount |
| kpiRemaining | Còn lại | KPI | * | `LinmKpiStrip` | computed/demo |
| kpiCoverage | Độ phủ | KPI | * | `LinmKpiStrip` | coveragePercent |
| sectionToday | Hôm nay | SectionLabel | * | `LinmSectionLabel` | — |
| todayRows | PAT-* | ListRow + `.row-icon` + badge | * | `LinmListRow` `leading:` `LinmRowIcon` | GET sessions · `#i-walk`/`#i-check` |
| sectionQuick | Thao tác nhanh | SectionLabel | * | `LinmSectionLabel` | — |
| quickRows | 6 rows | ListRow + `.row-icon` | * | `LinmListRow` `leading:` `LinmRowIcon` | toast / Lưu trữ push |
| offlineBadge | N | Badge | | `LinmListRow` badge | local count · ẩn 0 |

Toast / banner → `LinmToast`. **Cấm** AC implement raw control khi kit đã map.

## 6. BFF (PO chốt path — **cấm** invent)

App `ApiClient.base` = `{BffBase}/mobile-bff/api/v1`. Path **không** lặp prefix.

| Action / zone | Method | Path | In slug `patrol-home`? |
|---------------|--------|------|------------------------|
| List hôm nay + ca active | GET | `patrol/sessions` | **yes** — filter «Đang tuần» client-side P1 |
| Detail drill | GET | `patrol/sessions/{id}` | **no** P1 — toast row · P2 |
| Nav sync / Lưu trữ | — | — | local nav · sibling `patrol-offline` POST batch |
| Offline badge | — | — | **local store count** · **cấm** GET queue API |
| Attendance / map / camera / history / supervise | — | sibling paths | **no** — toast only |
| Notify inbox | GET | `notification/inbox` | **no** — toast · owner `ops` |

**Cấm** `GET patrol-home` · `PatrolHomeController` · DbContext trên Mobile.Bff · app `:5101`.

## 7. Open questions — PO chốt

| ID | Question | Decision (PO) |
|----|----------|----------------|
| Pin / check-in sheet | Demo `pinHereCheckin` + `openSheet('checkin')` | **P1 toast only.** **Cấm** sheet / form trên hub (`GAP-MOB-ACT-02`). GPS live P2. |
| Android bell → `go('ops')` | Lệch iOS toast | **Chốt toast Thông báo** dual · **cấm** push ops trên pack này. |
| Badge notify `3` / offline `3` | Hardcode HTML | Notify **0 ẩn**. Offline = **local count** · ẩn khi 0. |
| Hero user «Nguyễn Văn A» | Demo name | Live = `UserName` session · fail → demo SSOT OK · **cấm** invent profile API trên hub. |
| packKind | data-analy `hub` | **Confirm `hub`.** **≠** list. **Cấm** Grid/Report AC. |
| Kit | map + kit dual đã có | **`kit_missing_confirm` N/A** — reuse map. Design **verify** dual. Thiếu mới `implement_kit`. |
| Sibling 6 × `pending_confirm` | GAP-MOB-ACT-06 | **Không** start. Board Approve riêng. |
| Cluster web path | `specs/patrol-home/specs/_data-analy/` | **N/A.** Dùng `_data-analy/patrol-home-*.md`. |
| GAP-PO-STORE-01 | signup / xóa tài khoản | **N/A** — hub không signup. |
| Prior full_pipeline | `task_26954659` VERIFY PASS | PO roleOnly **chốt requirement** · không re-ship code turn này. |

UNCLEAR field = **none** — không AskQuestion field.

## 8. Screens (REQUIRED)

| Surface | Demo | Pattern | FormMode | Actions **this** `{feature}` | `devSlash` |
|---------|------|---------|----------|------------------------------|------------|
| Hub Tuần đường | `#sc-patrol-home` `DES-MOB-PAT-HOME` · iOS + Android | **Hub** (tab field · không Modal/Sheet) | none (không form) | GET sessions · display hero/KPI/today · tap theo §3 | `/agent-dev-ios` + `/agent-dev-android` |

**Không** trên pack này: `#sc-attendance` / `#sc-patrol-map` / check-in sheet / `#sc-field-reflect` / `#sc-cam-patrol` / `#sc-patrol-history` / `#sc-supervise` / `#sc-ops` · submit/Lưu · watermark Gói.

Reuse only: `#sc-patrol-offline` (nav sync · row Lưu trữ) · Home entry switch tab.

Frame: iOS 390×844 · Android 412×915 · safe area · content không đè notch / home indicator / `LinmTabBar`.

## 9. Device AC (REQUIRED)

| ID | Behavior | AC |
|----|----------|-----|
| AC-D-01 | Offline | Hub **mở** · demo SSOT hero/today/KPI · toast in-app không chặn · **cấm** full-screen block · **cấm** block tab |
| AC-D-02 | GPS deny | **N/A P1** (pin = toast) · P2: deny → toast không crash |
| AC-D-03 | Leave dirty | **N/A** — không form |
| AC-D-04 | Native alert | **Cấm** `UIAlert` / `AlertDialog` / `window.alert`. Mọi phản hồi = `LinmToast` |
| AC-D-05 | Keyboard | **N/A** — không input |
| AC-D-06 | Safe area | Nav + title + segment + hero + lists + tab không đè notch / home indicator |
| AC-D-07 | Biometric | **N/A** |
| AC-D-08 | Signal | Hạng **Tốt / Trung bình / Yếu** trên hero · bind OS path · **cấm** «Có mạng» · **cấm** tap-cycle |
| AC-D-09 | Token | GET sessions Bearer Keychain / Encrypted · app chỉ `{BffPrefix}` |
| AC-D-10 | Tab / swipe | Tab **Tuần đường** → `#sc-patrol-home` · segment idx 0/1 lock · **cấm** `TabView` / M3 `NavigationBar` |
| AC-D-11 | Camera / push | **N/A** trên hub (quick rows = sibling) |
| AC-F-01 | Appear | GET `patrol/sessions` · map active · fallback demo |
| AC-F-02 | Sync / Lưu trữ | Push `patrol-offline` · **cấm** reimplement |
| AC-F-03 | Sibling tap | Toast nhãn §3.9 · **cấm** push màn sibling (trừ offline) |
| AC-F-04 | Sheet check-in | **Cấm** trên hub |
| AC-F-05 | Dual parity | iOS + Android **cùng** copy zones · **cấm** lệch chrome (`GAP-MOB-ALIGN-01`) |
| AC-F-06 | Home entry | Quick/tile → tab field |

## 10. Leave / alert (REQUIRED)

| Case | UI |
|------|-----|
| Dirty leave | **Không áp dụng** |
| Sessions fail / offline | Demo fallback + optional toast · **cấm** native alert (`GAP-PO-LEAVE-01`) |
| Sibling tap | Toast in-app §3.9 |
| Bell | Toast **Thông báo** |
| Sync / Lưu trữ | Push offline · không confirm |
| Success load | Không toast bắt buộc · bind UI |

## 11. Out of scope (this pack)

- Mọi màn sibling (`attendance` · `patrol-map` · check-in form · `field-reflect` · `cam-patrol` · `patrol-history` · `supervise` · `ops`)
- Invent `GET patrol-home` / hub controller / queue API
- Live GPS pin / map Leaflet / camera trên hub
- Watermark Gói / device label / proto-click tín hiệu
- Hardcode badge `3`
- Start 6 sibling `pending_confirm`
- Clone PatrolSessionsController · ERP.* · `mfeStdUrl`

## 12. KPI (HĐ Gói 1 — màn này)

Hub Tuần đường = entry hiện trường vào ca / điểm tuần / offline sync từ **một** tab sau Home. DoD pack: `#sc-patrol-home` dual + GET sessions + kit hub — **không** omni-implement map/check-in/camera trong 1 slug.

## 13. Handoff → Design

| Field | Value |
|-------|-------|
| feature / packKind | `patrol-home` / **`hub`** (confirmed) |
| phase_from / phase_to | po **confirmed** → design pending |
| STATUS | `specs/patrol-home/STATUS.md` |
| Context / Demo / DI | CTX-01 · DEM dual `#sc-patrol-home` · no Excel |
| controlHint / UNCLEAR | §5 · none |
| Screens / Pattern / `devSlash` | Hub `#sc-patrol-home` · `/agent-dev-ios` + `/agent-dev-android` |
| Grid AC / Report AC | **N/A** — không list/report web |
| peerStdUrl / reviewUrl | **cấm** `mfeStdUrl` · Design mở dual `file://…/prototype/{ios,android}/index.html#sc-patrol-home` + reviewUrl **cả hai** |
| ux-analy | `/mobile-ui-ux-analy` → `ui/ux-analy.md` §1–§9 **REQUIRED** trước `design_confirm` |
| Kit | reuse map · `kit_missing_confirm` **N/A** · verify dual `LinmHeroCard` / `LinmKpiStrip` / `LinmSegment` / `LinmListRow` |
| BFF | `patrol-home-bff-endpoints.md` · **chỉ** `GET patrol/sessions` (+ detail P2) |
| Open questions | §7 đã chốt — Design **không** vẽ check-in sheet · **không** badge `3` · bell = toast |
| Next AskQuestion | autoApprove=ON — `design_confirm` khi Design xong **cả hai** mock + ux-analy |
| Next slash | `/agent-design-mobile` |
| Chain this turn | **không** (roleOnly=po) |
| e2eQa | ON khi QA · `yarn e2e-qa-mobile` · **cấm** yarn start:std / mfeStdUrl |

Design: HIG + Material · IA lock Tab 5 · copy VN đúng HTML (trừ skip hardcode badge / sheet check-in / device label) · **cấm** skin Ministry · **cấm** «Có mạng» · packet `design-demo-ssot.md`.

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-po-mobile |
| skillVersion | 2026.08.19.23 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.19.29 |
| rulesVersion | 2026.08.19.34 |
| generatedAt | 2026-08-19T14:21:00.000Z |
| versionGate | rechecked |
| contentHash | sha256:7ad6e12c43d77ffc6133f5e3063b85200a6d18d6bd1f8ff91a265b989dcd3b9c |
| bffContentHash | sha256:bcf39a561ac6a4ecf60df85f6c8526b926a1c33a3b3f34628aeaa9b9d6d36ead |

---
<!-- Version meta: skillId=agent-po-mobile skillVersion=2026.08.19.23 schemaVersion=1 workflowVersion=2026.08.19.29 rulesVersion=2026.08.19.34 versionGate=rechecked -->
