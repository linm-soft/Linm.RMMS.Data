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
| logo | `logo/mobile` AppIcon 1024 → `specs/mobile-p1/ui/prototype/assets/app-logo.png` |
| agent | `agent-data-analy-mobile` |
| at | `2026-08-18T17:24:22.000Z` |
| thisAction | **Đăng nhập** only · children `login-forgot` · `login-logout` = backlog |

## Fields (`#sc-login` — iOS + Android cùng copy)

| Field | VN | controlHint | Required | Source | Notes |
|-------|----|-------------|----------|--------|-------|
| brand | Logo app | Image (AppIcon) | * | `DES-MOB-LOGIN-BRAND` | SSOT `logo/mobile` AppIcon 1024 → `assets/app-logo.png` · **cấm** `rmms.png` wordmark |
| tagline | Quản lý bảo trì đường bộ | Static text | | demo `.login-brand p` | Dòng 2: `Hiện trường · iPhone` / `Hiện trường · Android` (chrome OS) |
| userName | Tài khoản | Text | * | CTX §2 · SPEC §7.1 · mobile-p1 § login | Username **hoặc** SĐT · `autocomplete=username` · **cấm** ô mã đơn vị |
| password | Mật khẩu | SecureText | * | CTX · demo `#f-pass` | Toggle hiện/ẩn = **chrome** · **không** slug riêng |
| submit | Đăng nhập | Button primary | * | demo `loginOk()` | **1 action = `login`** · POST BFF auth (bảng endpoints) |
| forgot | Quên mật khẩu? | Text link | | demo `.login-meta a` · CTX §2 | Child **`login-forgot`** · **cấm** gộp vào `login` |
| signal | Tín hiệu | SignalQuality | | demo `.login-meta` · `net-signal.js` | Hạng **Tốt / Trung bình / Yếu** · **cấm** «Có mạng» · chrome · không slug |
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
| Sai MK / Inactive / hết hạn HĐ | Toast in-app (không `window.alert` / native alert) |
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
| Next | `/agent-po-mobile` · AC đúng **1** action Đăng nhập · Device AC: offline no-submit · cấm native alert |
| autoApprove | OFF — Design/SA/Review dừng `await_confirm` khi tới lượt |

Chain: role **data_analy** xong. Roles sau = **pending**.

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-data-analy-mobile |
| skillVersion | 2026.08.18.10 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.18.11 |
| rulesVersion | 2026.08.18.26 |
| generatedAt | 2026-08-18T17:24:22.000Z |
| versionGate | ok |
| contentHash | sha256:2b627cdf80eca92c1f91cc999b6b516ca09d534ad0ffff887800699c4a02c3ef |
| bffContentHash | sha256:f360acfdda7595550f109031b58c84ed1eb4a3a40f55fd7e24090ea446d10c31 |

---
<!-- Version meta: skillId=agent-data-analy-mobile skillVersion=2026.08.18.10 schemaVersion=1 workflowVersion=2026.08.18.11 rulesVersion=2026.08.18.26 versionGate=ok -->
