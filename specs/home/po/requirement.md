# PO — Requirement — home (mobile hub)

| Field | Value |
|-------|-------|
| feature | `home` |
| title | [Mobile] Trang Chủ |
| this role | `po` · `/agent-po-mobile` |
| changeScope | `new_page` |
| packKind | **`hub`** (PO confirm · data-analy đề xuất) |
| stack | `native_dual` |
| thisAction | **Hub Trang Chủ** `#sc-home` only · tab **Trang Chủ** · **không** gộp sibling · reuse `me` / `ops` / `patrol-offline` |
| status | `confirmed` (autoApprove=ON) |
| requestSource | run packet `task_b088605a` · `/agent-qldb-workflow-mobile` · roleOnly=`po` · `/agent-po-mobile` |
| autoApprove | **ON** — Design/SA tự confirm **khi tới lượt** · turn này **không** chain |
| e2eQa | ON khi QA · `yarn e2e-qa-mobile` · sim 6.9" + emulator + Maestro · PNG `qa/screens` + `qa/store/home` · **cấm** `yarn e2e-qa` / `yarn start:std` / `mfeStdUrl` / test thủ công thay runtime |
| prior | data-analy **confirmed** · `specs/_data-analy/home-control-hint.md` · `home-bff-endpoints.md` · `home-action-tree.md` · contentHash `sha256:9f38399aa040cb3e106e719f47c76f67dd252503ca69eaed1d806bad164012ed` · bffContentHash `sha256:ca96af7dda63e5e34998ce57d51d7e76fd2391c0ffbdb39d7fca7abbf39ca581` · cluster `specs/home/specs/_data-analy/` **không tồn tại** — SSOT = 3 file `_data-analy/home-*` · **no Excel** |
| `devSlash` | `/agent-dev-ios` + `/agent-dev-android` |
| updatedAt | `2026-08-19T05:31:28.000Z` |
| taskId | `task_b088605a` |

**Cấm:** gộp sibling screens (`GAP-MOB-ACT-01/02`) · invent `api/v1/home` / wallet / org-unit · Grid AC web / Report AC Lin* · ERP.* · WebView HTML · `mfeStdUrl` · `UIAlert` / `AlertDialog` / `window.alert` · watermark «Phiên bản Gói N» / «gen realapp» · «Có mạng» · device label «iPhone» / «· Android» · AC tap-cycle tín hiệu · AC implement lại kit đã map (`GAP-MOB-ACT-05`) · start sibling `pending_confirm` (`GAP-MOB-ACT-06`).

## 1. Goal

Tab **Trang Chủ** native dual: **không required login**. Cold start = guest (`.who` **Khách** + nút **Đăng nhập** / **Dành cho cán bộ** `btn-home-login`). Guest body = **Câu hỏi thường gặp** + **Chính sách quyền riêng tư** (ref `docs/mobile-legacy/layout/` FAQ list + footer). Staff sau login mới GET profile + lưới nghiệp vụ. Tile/tab nghiệp vụ khi guest → toast **Đăng nhập để dùng nghiệp vụ** + overlay login. Persona: Khách Store · Tuần đường · Hạt. App **chỉ** `{BffBase}/mobile-bff/api/v1/…`. **Cấm** ERP.* · clone controller · WebView · `mfeStdUrl`. **Cấm** invent FAQ/privacy API.

**1 action = 1 feature.** Slug `home` = màn hub `#sc-home` `DES-MOB-HOME`. **Cấm** gộp Giám sát / Tuần đường / Công việc / Vấn đề / Tài sản / Lưu trữ / Ghi sự cố / Hồ sơ / Thông báo (`GAP-MOB-ACT-01`). `#sc-home` **không** child form/sheet (`GAP-MOB-ACT-02` = none). **Không** enqueue submit (`GAP-MOB-ACT-07`).

## 2. changeScope `new_page`

Native **chưa** có màn `#sc-home` (iOS `PlaceholderHomeView` + Android `PlaceholderHomeScreen` = **kit gallery** + chrome `btn-logout` — **không** đếm là hub production). Không bảng Current vs New (`edit_page`). SSOT visual = dual HTML `#sc-home` (iOS 390×844 · Android 412×915 · **parity copy**). Field + API khớp CTX `docs/context/features/home.md` + data-analy — **cấm** clone dashboard web / Lin* grid.

Pack này **thay** placeholder gallery bằng hub kit. **Cấm** ship `LinmKitGallery` trên tab Trang Chủ production. **Cấm** `btn-logout` trên `#sc-home` — Đăng xuất = `#sc-me` (`reuse=me`, đã ship).

## 3. DoD (đo được)

1. Dual native: **cùng** zone `#sc-home` + guest CTA `btn-home-login`. Guest: `btn-home-faq` → `#sc-faq` · `btn-home-privacy` → `#sc-privacy`. Tab 5: **Trang Chủ** luôn mở (guest). Login = overlay · **không** cổng bắt buộc.
2. Guest `.who` = copy `home.guest.who` **Khách** · **cấm** GET `auth/profile` khi chưa phiên. Staff `.who` = `fullName` từ `GET auth/profile` · **cấm** hardcode «Nguyễn Văn A» production.
3. Profile fail / offline: `.who` = `lastUserName` · hub **vẫn mở** · toast in-app **không** chặn màn / tab · **cấm** block Trang Chủ.
4. Role «Khu QLĐB IV»: **ẩn live** (không field org trên profile DTO) · **cấm** invent org-unit API (`GAP-F-HOME-01`). Tín hiệu **vẫn** hiện (`LinmStatusCapsule` / mark) bind OS path · hạng **Tốt / Trung bình / Yếu** · **cấm** «Có mạng».
5. Wallet chrome **static demo** (không API): eyebrow **HỒ SƠ TÀI SẢN** · title **QL.1 · Khu IV** · subtitle **32 loại KCHT · thông số + checklist sự cố** · **cấm** invent wallet / `api/v1/home` (`GAP-F-HOME-01`). Live số liệu = sibling `asset-hub`.
6. Notify badge: `notifyCount=0` → **ẩn** (`LinmNotifyCountBadge`) · **cấm** GET `notification/inbox` trên slug `home` (`GAP-F-HOME-02` · owner `ops`). **Cấm** hardcode badge `3` từ HTML.
7. Tap **Hồ sơ** → chuyển tab **Tôi** `#sc-me` (đã ship · `reuse=me`) · **cấm** reimplement `MeView` / `MeScreen`.
8. Tap sibling **chưa** ship → `LinmToast` **đúng nhãn control** · **không** mở màn sibling trong pack `home` · **không** start `pending_confirm` (`GAP-MOB-ACT-06`):

   | Control | Toast |
   |---------|-------|
   | Thông báo | **Thông báo** |
   | Điểm tuần | **Điểm tuần** |
   | Ghi sự cố | **Ghi sự cố** |
   | Giám sát | **Giám sát** |
   | Tuần đường | **Tuần đường** |
   | Công việc | **Công việc** |
   | Vấn đề | **Vấn đề** |
   | Tài sản + wallet | **Tài sản** |
   | Lưu trữ | **Lưu trữ** |

9. Tap tín hiệu → toast **Đã làm mới** + refresh profile · **cấm** cycle hạng proto (`GAP-MOB-SIGNAL-01`) · bind `NWPathMonitor` / Connectivity (`GAP-MOB-SIGNAL-02`).
10. **Cấm** `.home-foot` «Phiên bản Gói 1 · RMMS hiện trường / Cục Đường bộ VN…» (`GAP-F-HOME-03` · `GAP-DEV-MOB-PLACEHOLDER-01`).
11. Kit **reuse map** (đã dual + gallery): `LinmHeroTools` · `LinmProfileButton` · `LinmNotifyButton` · `LinmNotifyCountBadge` · `LinmStatusCapsule` · `LinmQuickActions` · `LinmQuickItem` · `LinmSectionLabel` · `LinmHomeGrid` · `LinmHomeTile` · `LinmWalletCard` · `LinmTabBar` · `LinmToast`. **Cấm** raw `LazyVGrid` / `LazyVerticalGrid` / `TabView` / M3 `NavigationBar` (`GAP-MOB-ACT-05` · `GAP-MOB-ALIGN-01`).
12. App chỉ `{BffPrefix}` · **cấm** biết Auth `:5001` / RMMS `:5101` · token Keychain / Encrypted.
13. Dev (role sau): iOS `xcodegen` + `xcodebuild` dest **iPhone 17 Pro** PASS · Android `assembleDebug` PASS · Mobile.Bff `dotnet build` PASS — **cấm** `yarn start:std`.
14. QA (role sau): Maestro slug `home` only · live sim 6.9" + emulator · store PNG `qa/store/home` · **cấm** test sibling screens như in-scope · **cấm** `yarn e2e-qa` web.
15. BE align: **không** endpoint mới — reuse `GET auth/profile`. Step 4b `/new-endpoint` **N/A** pack này. **Cấm** `HomeController` / wallet API trên Mobile.Bff.

## 4. CTX / DEM / DI inventory

| ID | Path | Loại |
|----|------|------|
| CTX-01 | `docs/context/features/home.md` | hub · §2 UI · §3 API · §5 GAP |
| CTX-02 | `docs/context/features/me.md` | sibling `reuse=me` · GET profile |
| DEM-01 | `specs/mobile-p1/ui/prototype/ios/index.html` `#sc-home` | iOS 390×844 · `DES-MOB-HOME` |
| DEM-02 | `specs/mobile-p1/ui/prototype/android/index.html` `#sc-home` | Android 412×915 · **cùng copy** |
| DEM-03 | `specs/home/ui/prototype/` | pack stub — Design chép dual từ mobile-p1 |
| DEM-04 | `specs/mobile-p1/ui/prototype/net-signal.js` | hạng Tốt / Trung bình / Yếu · **cấm** ship tap-cycle |
| MAP | `docs/html-to-native-map.md` | kit home **đã map dual** |
| DI-01 | — | **no Excel** |
| DA-01 | `specs/_data-analy/home-control-hint.md` | controlHint |
| DA-02 | `specs/_data-analy/home-bff-endpoints.md` | BFF · **chỉ** `GET auth/profile` |
| DA-03 | `specs/_data-analy/home-action-tree.md` | 1 hub + sibling enqueue |
| SCAN | `specs/_form-type-mobile/ACTION-TREE.md` | verify |
| IOS | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.iOS` | native · placeholder gallery |
| AND | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Android` | native · placeholder gallery |
| BFF | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Bff` | `mobile-bff/api/v1` |
| BE | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.WebService` | DOMAIN-MAP — **cấm ERP.*** · **không** `api/v1/home` |
| KIT | `Linm.Mobile.Kit.iOS` + `Linm.Mobile.Kit.Android` | `LinmHomeGrid` / `LinmQuickActions` / `LinmWalletCard` / `LinmHeroTools` **đã có** |

**Cấm** cite `mfeStdUrl` / `http://localhost:9301/` trên artifact native.

## 5. controlHint (PO chốt — Design map kit · SA map API)

Nguồn `#sc-home` dual + DA-01. UNCLEAR field = **none**.

| Field | VN | controlHint | Required | Kit (iOS+Android cùng turn) | Notes |
|-------|----|-------------|----------|------------------------------|-------|
| profileBtn | Hồ sơ | ProfileButton | * | `LinmProfileButton` trong `LinmHeroTools` | `reuse=me` · tap → tab Tôi |
| notifyBtn | Thông báo | NotifyButton | * | `LinmNotifyButton` · `LinmNotifyCountBadge` | toast **Thông báo** + `includeNotification` trên `#sc-home` · badge 0 ẩn · **cấm** push inbox |
| roleLine | Khu QLĐB IV | Text display | | `LinmStatusCapsule` `area` | **ẩn live** · không invent org |
| signal | Tín hiệu | SignalQuality | * | `LinmStatusCapsule` / `LinmNetSignalMark` | `shared_kit` `me-signal` · OS path · **cấm** cycle |
| who | Khách / FullName | Text display | * | typography hero | guest `home.guest.who` · staff GET `auth/profile` |
| loginBtn | Đăng nhập | Button | guest | card trên hero | `btn-home-login` · phụ **Dành cho cán bộ** · ẩn khi staff |
| quickPatrol | Điểm tuần | QuickItem | * | `LinmQuickItem` trong `LinmQuickActions` | phụ **Ghim định vị · lý trình** · sibling `patrol-home` |
| quickIncident | Ghi sự cố | QuickItem | * | `LinmQuickItem` | phụ **Chọn tài sản · mẫu sự cố** · sibling `incident-create` |
| sectionBiz | Nghiệp vụ thường dùng | SectionLabel | * | `LinmSectionLabel` | không route |
| tileSupervise | Giám sát | HomeTile | * | `LinmHomeTile` `#i-list` bg `#FCB43C` | sibling `supervise` |
| tilePatrol | Tuần đường | HomeTile | * | `LinmHomeTile` `#i-mappin` bg `#F03C30` | cùng slug `patrol-home` |
| tileMnt | Công việc | HomeTile | * | `LinmHomeTile` `#i-wrench` bg `#3CB448` | sibling `mnt-list` |
| tileIncident | Vấn đề | HomeTile | * | `LinmHomeTile` `#i-warning` bg `#FCB43C` | sibling `incident-list` |
| tileAsset | Tài sản | HomeTile | * | `LinmHomeTile` `#i-cube` bg `#0C84C0` | sibling `asset-hub` |
| tileOffline | Lưu trữ | HomeTile | * | `LinmHomeTile` `#i-sync` bg `#086A9A` | `reuse=patrol-offline` |
| wallet | HỒ SƠ TÀI SẢN | WalletCard | * | `LinmWalletCard` | static demo · cùng slug `asset-hub` |
| foot | Phiên bản Gói 1… | **Ẩn production** | | — | watermark — **cấm** ship |
| tabHome | Trang Chủ | Tab | * | `LinmTabBar` | `shell-tabs` `shared_kit` · **không** enqueue |

Toast / banner → `LinmToast`. **Cấm** AC implement raw control khi kit đã map.

## 6. BFF (PO chốt path — **cấm** invent)

App `ApiClient.base` = `{BffBase}/mobile-bff/api/v1`. Path **không** lặp prefix.

| Action | Method | Path | In slug `home`? |
|--------|--------|------|-----------------|
| Tên `.who` | GET | `auth/profile` | **yes** — Auth NuGet `GetProfile` `[Authorize]` + rewrite → `users/me` · DTO `UserProfileResponseDto` (`FullName`) |
| Role / org | — | — | **no** — ẩn live · **cấm** invent |
| Wallet / tuyến | — | — | **no** — static demo · sibling `asset-hub` |
| Badge thông báo | GET | `notification/inbox` | **no** — sibling `ops` |
| Điểm tuần / Tuần đường | — | `patrol/*` | **no** — sibling `patrol-home` |
| Ghi sự cố / Vấn đề | — | `incident/*` | **no** — `incident-create` / `incident-list` |
| Giám sát | — | — | **no** — sibling `supervise` · SA chốt khi tới lượt |
| Công việc | — | `maintenance/*` | **no** — sibling `mnt-list` |
| Tài sản | — | `asset/*` | **no** — sibling `asset-hub` |
| Lưu trữ | — | — | **no** — sibling `patrol-offline` · **cấm** invent queue API |
| Cập nhật hồ sơ | PUT | `auth/profile` | **no** — `me` / `me-profile` |
| Đăng xuất | POST | `auth/logout` | **no** — `#sc-me` local logout đã ship |

## 7. Open questions — PO chốt

| ID | Question | Decision (PO) |
|----|----------|----------------|
| GAP-F-HOME-01 | Role «Khu QLĐB IV» / wallet «QL.1 · Khu IV» không API | **Không invent.** Role **ẩn live**. Wallet **static demo copy** (3 dòng HTML) đến khi `asset-hub`. Không block DoD hub. |
| GAP-F-HOME-02 | Badge count inbox | Owner `ops`. Hub `notifyCount=0` (ẩn) · tap toast **Thông báo** + `includeNotification` trên `#sc-home` · **cấm** gọi inbox / push `#sc-ops` turn `home`. |
| GAP-F-HOME-03 | Foot Gói 1 | **Cấm** ship. Design skip zone. |
| Tap sibling vs nav stub | data-analy để PO chốt | **Hồ sơ** → tab Tôi (reuse shipped). Còn lại **toast nhãn** đến khi sibling Approve + implement. TL **không** nav stub giả màn. |
| packKind | data-analy `hub` | **Confirm `hub`.** **≠** web `dashboard`. **Cấm** Grid/Report AC. |
| Kit home | map + kit dual đã có | **`kit_missing_confirm` N/A** — reuse map. Design **verify** dual. Thiếu mới `implement_kit`. **Cấm** `kit_skip` im lặng · **cấm** Dev raw grid. |
| `shared_kit` tab / tín hiệu | shell + me-signal | **Không** enqueue · **không** AC reimplement `LinmTabBar` / signal kit. |
| Sibling 6 × `pending_confirm` | GAP-MOB-ACT-06 | **Không** start. Board Approve riêng. |
| Cluster web path | `specs/home/specs/_data-analy/` | **N/A.** Dùng `_data-analy/home-*.md`. |
| GAP-PO-STORE-01 | signup / xóa tài khoản | **N/A** — hub không signup. |
| Placeholder gallery + `btn-logout` | login e2e Home | **Gỡ** khỏi `#sc-home`. Logout = `#sc-me`. QA login cập nhật khi tới pack liên quan — **không** giữ gallery để «đỡ e2e». |

UNCLEAR field = **none** — không AskQuestion field.

## 8. Screens (REQUIRED)

| Surface | Demo | Pattern | FormMode | Actions **this** `{feature}` | `devSlash` |
|---------|------|---------|----------|------------------------------|------------|
| Hub Trang Chủ | `#sc-home` `DES-MOB-HOME` · iOS + Android | **Hub** (tab 5 · không Modal/Sheet) | none (không form) | Display profile name · tap chrome/tiles **theo §3** | `/agent-dev-ios` + `/agent-dev-android` |

**Không** trên pack này: `#sc-me` / `#sc-ops` / `#sc-patrol-home` / `#sc-supervise` / `#sc-mnt-list` / `#sc-incident-list` / `#sc-asset-hub` / `#sc-patrol-offline` / `#sc-inc-form` · submit/Lưu · kit gallery · watermark foot.

Cùng `go()` 2 chỗ (quick+tile / tile+wallet) = **một** slug sibling — Design 2 control, **một** route owner.

Frame: iOS 390×844 · Android 412×915 · safe area · content không đè notch / home indicator / `LinmTabBar`.

## 9. Device AC (REQUIRED)

| ID | Behavior | AC |
|----|----------|-----|
| AC-D-01 | Offline | Hub **mở** · `.who` = `lastUserName` · toast in-app không chặn · **cấm** full-screen block · **cấm** queue «home» |
| AC-D-02 | GPS deny | **N/A** — hub không GPS (sibling `patrol-home`) |
| AC-D-03 | Leave dirty | **N/A** — không form |
| AC-D-04 | Native alert | **Cấm** `UIAlert` / `AlertDialog` / `window.alert`. Mọi phản hồi = `LinmToast` |
| AC-D-05 | Keyboard | **N/A** — không input |
| AC-D-06 | Safe area | Hero + grid + wallet + tab không đè notch / home indicator / gesture inset |
| AC-D-07 | Biometric | **N/A** |
| AC-D-08 | Signal | Hạng **Tốt / Trung bình / Yếu** · bind OS path · tap toast **Đã làm mới** · **cấm** «Có mạng» · **cấm** tap-cycle |
| AC-D-09 | Token | GET profile Bearer Keychain / Encrypted · app chỉ `{BffPrefix}` |
| AC-D-10 | Tab / swipe | Tab **Trang Chủ** → `#sc-home` · `LinmTabBar` 5 · **cấm** `TabView` / M3 `NavigationBar` |
| AC-D-11 | Camera / push | **N/A** trên hub (Ghi sự cố / badge = sibling) |
| AC-F-01 | Appear | GET `auth/profile` · bind `.who` |
| AC-F-02 | Hồ sơ | Tab **Tôi** `#sc-me` · **cấm** reimplement me |
| AC-F-03 | Sibling khác | Toast nhãn §3.8 · **cấm** push màn sibling |
| AC-F-04 | Watermark / gallery | **Cấm** foot Gói · **cấm** `LinmKitGallery` · **cấm** `btn-logout` trên home |
| AC-F-05 | Dual parity | iOS + Android **cùng** copy + 6 tile + 2 quick + wallet · **cấm** lệch chrome (`GAP-MOB-ALIGN-01`) |

## 10. Leave / alert (REQUIRED)

| Case | UI |
|------|-----|
| Dirty leave | **Không áp dụng** |
| Profile fail / offline | `LinmToast` + fallback tên · **cấm** native alert (`GAP-PO-LEAVE-01`) |
| Sibling tap | Toast in-app (trừ Hồ sơ → tab Tôi) |
| Signal tap | Toast **Đã làm mới** |
| Success profile | Không toast bắt buộc · cập nhật `.who` |

## 11. Out of scope (this pack)

- Mọi màn sibling (kể `ops` / `patrol-home` / `incident-create` / `supervise` / `mnt-list` / `incident-list` / `asset-hub` / `patrol-offline`)
- Invent `GET home` / wallet / org-unit / notify inbox trên hub
- `HomeController` / `DashboardController` Mobile.Bff
- Web KPI `dashboard.md` · Lin* list · Kind A–G
- Kit gallery + `btn-logout` trên production home
- Watermark Gói / device label / proto-click tín hiệu
- GPS / camera / map / biometric / push request
- Start 6 sibling `pending_confirm`
- Clone AuthController · ERP.* · `mfeStdUrl`

## 12. KPI (HĐ Gói 1 — màn này)

Trang Chủ là launcher hiện trường: vào ca / sự cố / tài sản từ **một** hub sau login. DoD pack mobile-p1 yêu cầu `#sc-home` dual + GET profile + kit home — **không** omni-implement 6 nghiệp vụ trong 1 slug.

## 13. Handoff → Design

| Field | Value |
|-------|-------|
| feature / packKind | `home` / **`hub`** (confirmed) |
| phase_from / phase_to | po **confirmed** → design pending |
| STATUS | `specs/home/STATUS.md` |
| Context / Demo / DI | CTX-01 · DEM dual `#sc-home` · no Excel |
| controlHint / UNCLEAR | §5 · none |
| Screens / Pattern / `devSlash` | Hub `#sc-home` · `/agent-dev-ios` + `/agent-dev-android` |
| Grid AC / Report AC | **N/A** — không list/report web |
| peerStdUrl / reviewUrl | **cấm** `mfeStdUrl` · Design mở dual `file://…/prototype/{ios,android}/index.html#sc-home` + reviewUrl **cả hai** |
| ux-analy | `/mobile-ui-ux-analy` → `ui/ux-analy.md` §1–§9 **REQUIRED** trước `design_confirm` |
| Kit | reuse map · `kit_missing_confirm` **N/A** · verify dual `LinmHomeGrid` / `LinmQuickActions` / `LinmWalletCard` / `LinmHeroTools` |
| BFF | `home-bff-endpoints.md` · **chỉ** `GET auth/profile` |
| Open questions | GAP-F-HOME-01/02/03 đã chốt §7 — Design **không** vẽ org API · **không** vẽ foot Gói · **không** badge `3` |
| Next AskQuestion | autoApprove=ON — `design_confirm` khi Design xong **cả hai** mock + ux-analy |
| Next slash | `/agent-design-mobile` |
| Chain this turn | **không** (roleOnly=po) |
| e2eQa | ON khi QA · `yarn e2e-qa-mobile` · **cấm** yarn start:std / mfeStdUrl |

Design: HIG + Material · IA lock Login → Tab 5 · copy VN đúng HTML (trừ skip watermark / device label / role live) · **cấm** skin Ministry · **cấm** «Có mạng» · packet `design-demo-ssot.md`.

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-po-mobile |
| skillVersion | 2026.08.19.15 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.19.20 |
| rulesVersion | 2026.08.19.23 |
| generatedAt | 2026-08-19T05:31:28.000Z |
| versionGate | rechecked |
| contentHash | sha256:9f38399aa040cb3e106e719f47c76f67dd252503ca69eaed1d806bad164012ed |
| bffContentHash | sha256:ca96af7dda63e5e34998ce57d51d7e76fd2391c0ffbdb39d7fca7abbf39ca581 |

---
<!-- Version meta: skillId=agent-po-mobile skillVersion=2026.08.19.15 schemaVersion=1 workflowVersion=2026.08.19.20 rulesVersion=2026.08.19.23 versionGate=rechecked -->
