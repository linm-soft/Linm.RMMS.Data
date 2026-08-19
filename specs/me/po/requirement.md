# PO — Requirement — me (mobile hub)

| Field | Value |
|-------|-------|
| feature | `me` |
| title | [Mobile] Tôi / Hồ sơ |
| changeScope | `new_page` |
| packKind | **`hub`** |
| stack | `native_dual` |
| status | `confirmed` (autoApprove=ON) |
| requestSource | run packet `task_84e8e0e2` · `/agent-qldb-workflow-mobile` · full_pipeline |
| thisAction | **Hub Tôi** `#sc-me` only · sibling `pending_confirm` · logout `reuse=login-logout` |
| updatedAt | `2026-08-19T02:20:00.000Z` |
| taskId | `task_84e8e0e2` |

## 1. Goal

Tab **Tôi** native dual: large title · hàng hồ sơ (GET `auth/profile`) · Đồng bộ · Cập nhật thông tin · Đăng xuất local. Persona hiện trường. App chỉ `{BffPrefix}`. **Cấm** ERP.* · WebView HTML · `mfeStdUrl`.

**1 action = 1 feature.** Slug `me` = màn hub. **Cấm** gộp Góp ý / Camera / Thông báo / Hàng đợi / Đổi MK (`GAP-MOB-ACT-01`).

## 2. changeScope `new_page`

Native chưa có `MeView` / `MeScreen`. SSOT = dual `#sc-me`.

## 3. DoD

1. Tab 5 IA lock: Trang Chủ · Tuần đường · Vấn đề · Công việc · **Tôi**. Login **ngoài** tab. Home kit gallery giữ `btn-logout`.
2. `#sc-me`: title **Tôi** · hàng tên live · section **Đồng bộ** + **Cập nhật thông tin** · copy VN demo.
3. Dual hàng **Cài đặt** (`row-settings`) = toast · **cấm** thiếu Android.
4. GET `mobile-bff/api/v1/auth/profile` · fail → `lastUserName` · **cấm** invent org/role API · **cấm** hardcode «Nguyễn Văn A».
5. Tap sibling (queue / góp ý / camera / thông báo) → toast tên hàng · **không** implement màn sibling.
6. iOS tín hiệu tap → toast **Đã làm mới** · bind OS path · **cấm** «Có mạng».
7. Đăng xuất row → `LogoutUseCase` local · toast **Đã đăng xuất** → `#sc-login` · **cấm** POST `auth/logout`.
8. Badge 0 ẩn.
9. Kit `LinmLargeTitle` · `LinmSectionLabel` · `LinmListRow` · `LinmNetSignalMark` · `LinmToast` · **`LinmTabBar`** · **cấm** raw list · **cấm** `TabView` / M3 `NavigationBar`.
10. VERIFY GATE: iOS `xcodegen` + `xcodebuild` dest **iPhone 17 Pro** · Android `assembleDebug` · BFF `dotnet build`.
11. QA: AC hub only · **cấm** test sibling screens in-scope.

## 4. Device AC

| ID | Behavior |
|----|----------|
| AC-D-01 | Offline: hub mở · profile fallback · toast in-app |
| AC-D-02 | GPS N/A |
| AC-D-03 | Leave dirty N/A |
| AC-D-04 | **Cấm** native alert |
| AC-D-05 | Keyboard N/A (không form) |
| AC-D-06 | Safe area + tab bar |
| AC-D-08 | Signal hạng Tốt/TB/Yếu · không tap cycle |
| AC-F-01 | Tab Tôi → `#sc-me` |
| AC-F-02 | Logout local → login |
| AC-F-03 | Sibling tap = toast only |

## 5. Kit

`kit_missing_confirm=implement_kit` · `LinmListRow` + tap/leading/chevron/badge dual.

## 6. Handoff → Design

`/agent-design-mobile` · dual prototype `ios/` + `android/` · `/mobile-ui-ux-analy` §1–§9.

## Version meta

| skillId | agent-po-mobile |
| skillVersion | 2026.08.19.15 |
| workflowVersion | 2026.08.19.19 |
| rulesVersion | 2026.08.19.22 |
| generatedAt | 2026-08-19T02:20:00.000Z |
