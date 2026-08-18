# Control hint — login (mobile)

| | |
|---|---|
| feature | `login` |
| kind | `shell` |
| packKind đề xuất | `shell` (mobile P1 · **cấm** Lin* list / Kind A–G web) |
| changeScope | `new_page` (native shell · CTX web đã có) |
| demo | `specs/mobile-p1/ui/prototype/{ios,android}/index.html` `#sc-login` |
| ctx | `docs/context/features/login.md` |
| mobileCtx | `specs/mobile-p1/mobile/context.md` § login |
| spec | `docs/plan/login-contract-lifecycle/SPEC.md` §7.1 |
| map | `docs/html-to-native-map.md` |
| logo | `logo/mobile` AppIcon 1024 → `specs/mobile-p1/ui/prototype/assets/app-logo.png` |
| agent | `agent-data-analy-mobile` |
| at | `2026-08-18T17:35:15.000Z` |
| thisAction | **Đăng nhập** only · children `login-forgot` · `login-logout` = backlog |
| recheck | `recheck_new` autopilot · backup `specs/login/_backup/20260818T173515Z` · skill `2026.08.18.10` → `2026.08.19.01` |

## Skill packet (`/agent-data-analy-mobile`) — 3 file

| File | Skill step | Đọc để |
|------|------------|--------|
| **file này** | 4–5 | `controlHint` từng field + tech factors |
| [`login-bff-endpoints.md`](login-bff-endpoints.md) | 6 | App → BFF → service · **cấm invent** |
| [`login-action-tree.md`](login-action-tree.md) | 7 | 1 nút / menu = 1 `{feature}` |

**Không** đọc `specs/_data-analy/features/login-control-hint.md` (pointer web).

## UI control — như thế nào

Mỗi ô trên `#sc-login` = 1 `controlHint` (Text / SecureText / Button / Image / chrome).  
Design chốt kit dual · Dev **cấm** raw khi thiếu hàng `docs/html-to-native-map.md` → `kit_missing_confirm`.

| Field | controlHint | Kit (iOS + Android cùng turn) | Native |
|-------|-------------|-------------------------------|--------|
| brand | Image | logo pack → AppIcon / mipmap (không kit form) | `Image` / `Image` Compose |
| userName | Text | `LinmTextField` | SwiftUI `TextField` · Compose `OutlinedTextField` **qua kit** |
| password | SecureText | **thiếu map** eye — Design `kit_missing_confirm` | **cấm** `SecureField` / `OutlinedTextField` raw |
| submit | Button primary | `LinmPrimaryButton` | 1 action = slug `login` |
| forgot | Text link | chrome / text | child slug `login-forgot` — **không** gộp |
| signal | SignalQuality | `LinmNetSignalMark` | chrome · **cấm** «Có mạng» |

## Service / BFF — như thế nào

App **chỉ** gọi `{BffBase}/mobile-bff/api/v1/…` — **cấm** biết `:5001` / `:5101` / WebService URL.

```
iOS / Android  ApiClient
      │  POST  mobile-bff/api/v1/auth/login
      ▼
Linm.RMMS.Mobile.Bff
      │  AuthPrefixRewriteMiddleware
      │  /mobile-bff/api/v1/auth → /web-bff/api/v1/auth
      ▼
Linm.Platform.Authentication.Bff  1.26.0  (AuthController)
      │  ServiceEndpoints:AuthenticationService  (BFF-only)
      ▼
Platform Auth service
```

Login **không** đi `MobileApiProxyController` (proxy bỏ qua `auth/*`).  
Sau login: GET `mobile-bff/api/v1/contract-accounts/session-window` → proxy → RMMS API (cửa sổ HĐ).  
Chi tiết path / gap: [`login-bff-endpoints.md`](login-bff-endpoints.md).

## Fields (`#sc-login` — iOS + Android cùng copy)

| Field | VN | controlHint | Required | Source | Notes |
|-------|----|-------------|----------|--------|-------|
| brand | Logo app | Image (AppIcon) | * | `DES-MOB-LOGIN-BRAND` | SSOT `logo/mobile` AppIcon 1024 → `assets/app-logo.png` · **cấm** `rmms.png` wordmark · không kit form |
| tagline | Quản lý bảo trì đường bộ | Static text | | demo `.login-brand p` | Dòng 2: `Hiện trường · iPhone` / `Hiện trường · Android` (chrome OS) |
| userName | Tài khoản | Text | * | CTX §2 · SPEC §7.1 · mobile-p1 § login | Username **hoặc** SĐT · iOS `autocomplete=username` · **cấm** ô mã đơn vị · kit `LinmTextField` |
| password | Mật khẩu | SecureText | * | CTX · demo `#f-pass` | Toggle hiện/ẩn = **chrome** · **không** slug riêng · iOS `autocomplete=current-password` |
| submit | Đăng nhập | Button primary | * | demo `loginOk()` | **1 action = `login`** · POST BFF auth (bảng endpoints) · kit `LinmPrimaryButton` |
| forgot | Quên mật khẩu? | Text link | | demo `.login-meta a` · CTX §2 | Child **`login-forgot`** · **cấm** gộp vào `login` |
| signal | Tín hiệu | SignalQuality | | demo `.login-meta` · `net-signal.js` | Hạng **Tốt / Trung bình / Yếu** · **cấm** «Có mạng» · chrome · không slug · kit `LinmNetSignalMark` / `LinmSignalIcon` |
| buildMeta | bản Gói 1 | Static text | | demo `.login-meta` | Chrome · không slug |
| companyCode | Mã đơn vị | **Ẩn Gói 1** | | mobile-p1 § login | Đơn vị theo tài khoản / JWT `company_id` · **cấm** hiện field trên shell |
| biometric | Khuôn mặt / vân tay | **Ẩn Gói 1** | | mobile-p1 § login · demo **không** nút | **cấm** invent slug |

## Không có trên `#sc-login` (cấm gộp)

| Surface | Lý do |
|---------|--------|
| Toolbar Hồ sơ / Đổi MK | CTX §2 cấm chrome login |
| `login-logout` | `#sc-me` row Đăng xuất — child backlog |
| Tab 5 / Home 6 ô | chrome / hub — ngoài pack `login` |
| `#sc-me` Góp ý · Camera · Thông báo · Cài đặt · Hàng đợi | slug khác |
| Child form / sheet trên login | **không** — **GAP-MOB-ACT-02** = none |

## Kit map (Design → Dev — không enqueue)

Nguồn `docs/html-to-native-map.md`. **Cấm** Dev raw khi thiếu hàng map → AskQuestion `kit_missing_confirm`.

| Demo chrome | Map | Kit dual |
|-------------|---------|----------|
| `#f-user` `input type=text` | `input type=text` | `LinmTextField` |
| `button.btn-primary` Đăng nhập | `button` primary / `.btn-ok` | `LinmPrimaryButton` |
| toast sai MK / success | toast / banner | `LinmToast` |
| `data-net-signal` | `#i-wifi` + bars · `.role` + `data-net-signal` | `LinmNetSignalMark` · `LinmSignalIcon` · `LinmStatusCapsule` |
| `#f-pass` `input type=password` + `.trail` eye | **không** hàng `type=password` / eye | Design `kit_missing_confirm` — **cấm** Dev `SecureField` / `OutlinedTextField` raw · **cấm** `kit_skip` im lặng |

## Tech factors

| Factor | Login form | Note |
|--------|------------|------|
| GPS | no | — |
| camera | no | — |
| offline | **no submit** | Queue sau login · **cấm** local `rmms_users.PasswordHash` |
| map | no | — |
| biometric | defer Gói 1 | Demo không nút · không invent |
| push | no | — |
| token | Keychain / Encrypted store | App chỉ gọi `{BffPrefix}` · **cấm** `:5001` / `:5101` |

## Hành vi (CTX + SPEC — không `alert`)

| Case | UI |
|------|----|
| Sai MK / Inactive / hết hạn HĐ | Toast in-app (`LinmToast` — không `window.alert` / native alert) |
| Leave dirty | Không áp dụng (SPEC §7.1) |
| Thành công | Toast demo `Đăng nhập thành công` → Home (`go('home')`) |
| CONTRACT cửa sổ HĐ đóng | 403 `CONTRACT_WINDOW_CLOSED` · forceLogout (CTX L5) — SA chốt gọi GET session-window |

## UNCLEAR

**none** trên field login Gói 1. Open Q = GAP BFF (bảng endpoints) — PO **không** bịa path.

## Cấm

- Clone `AuthController` / mật khẩu local `rmms_users`
- `window.alert` / `confirm` / system alert
- Gộp quên MK + đăng xuất vào slug `login` (`GAP-MOB-ACT-01`)
- Invent field company / biometric trên shell Gói 1
- WebView bọc HTML demo
- 1 slug ôm child form (`GAP-MOB-ACT-02`) — không có child form trên `#sc-login`

## Handoff → PO

| Field | Value |
|-------|-------|
| feature / packKind | `login` / **shell** (đề xuất) |
| phase_from / phase_to | `data_analy` **done** → `po` pending |
| Context / Demo / DI | CTX `docs/context/features/login.md` · demo `#sc-login` dual · **không** Excel |
| controlHint / UNCLEAR | file này · UNCLEAR **none** |
| Action tree | `login-action-tree.md` · enqueue **chỉ** `login` |
| BFF | `login-bff-endpoints.md` · prefix `mobile-bff/api/v1` |
| Open questions | `GAP-MOB-BFF-01` quên MK · `GAP-MOB-BFF-02` `refresh` vs `refresh-token` |
| Kit | password/eye **thiếu** trên map → Design `kit_missing_confirm` |
| Next | `/agent-po-mobile` · AC đúng **1** action Đăng nhập · Device AC: offline no-submit · cấm native alert |
| autoApprove | ON (packet) · **roleOnly** data_analy — **không** chain PO turn này |
| e2eQa | ON khi tới QA · **không** chạy turn này |

Chain: role **data_analy** xong. Roles sau = **pending**.

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-data-analy-mobile |
| skillVersion | 2026.08.19.01 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.19.01 |
| rulesVersion | 2026.08.19.01 |
| generatedAt | 2026-08-18T17:35:15.000Z |
| versionGate | rechecked |
| contentHash | sha256:2b627cdf80eca92c1f91cc999b6b516ca09d534ad0ffff887800699c4a02c3ef |
| bffContentHash | sha256:de9bc7143374ca6a38aad393b3ce928ad00462ade2254adf9bcdfd97ac7eb017 |

---
<!-- Version meta: skillId=agent-data-analy-mobile skillVersion=2026.08.19.01 schemaVersion=1 workflowVersion=2026.08.19.01 rulesVersion=2026.08.19.01 versionGate=rechecked -->
