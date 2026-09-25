# QA — scenarios — nghiem-thu (mobile · e2eQa=ON)

| Field | Value |
|-------|-------|
| feature | `nghiem-thu` |
| this role | `qa` · `/agent-qa-mobile` |
| status | `confirmed` |
| verdict | **PASS** · handoff Review |
| packKind | `list` · native list `#sc-nghiem-thu` |
| changeScope | `edit_page` · MAU-10 Label + ResultCode · keep web |
| lane | `mobile` · dual iOS+Android |
| contentHash | `sha256:1044ba719edda88d256d5c2a780cd2293f2fab87e2a39acdbb86001fad6ff659` |
| taskId | `task_4b20206f` |
| prior Dev | `task_cdb487a6` · compact `handoff/dev-compact.md` |
| autoApprove | ON |
| e2eQa | ON |
| ios_test_phase | `phase1_iphone` · iPhone 17 Pro Max · **A4-IPAD DEFER** |
| method | e2e runtime · `yarn e2e-qa-mobile` · Maestro · **cấm** `start:std` / mfeStdUrl / kill worker |
| updatedAt | `2026-09-19T18:42:00.000Z` |

## Device AC — Scenario / Expect / Actual (VN)

| # | Scenario | Expect | Actual | Result |
|---|----------|--------|--------|--------|
| T-QA-NGHIEM-THU-01 | Cán bộ mở app ở màn khách | Thấy title Khách và nút Đăng nhập, không màn đen | A11: header Khách, Hỗ trợ người dân, nút Đăng nhập, link Chính sách quyền riêng tư · 1320×2868 | **PASS** |
| T-QA-NGHIEM-THU-02 | Cán bộ đăng nhập tài khoản seed | Form tiếng Việt, vào được app sau login | A9: title QUẢN LÝ BẢO TRÌ ĐƯỜNG BỘ, ô linm-soft, nút Đăng nhập; iOS vào list, Android vào hub Tài sản rồi tab Tuần đường | **PASS** |
| T-QA-NGHIEM-THU-03 | Từ hub Tuần đường mở Công tác nghiệm thu | Title Công tác nghiệm thu, ô tìm, empty hoặc dòng NT-* live | A3 và P6: Back, title đúng, nút Tạo, placeholder Tìm mẫu nghiệm thu…, empty «Chưa có phiếu nghiệm thu» | **PASS** |
| T-QA-NGHIEM-THU-04 | Gõ tìm trên Android | Fold tìm khác ảnh list trống | P6-2 ô tìm hiện NT; hash khác P6-CORE; title và empty vẫn thấy | **PASS** |
| T-QA-TAB-01 | Tab đang đứng khi xem list | Tab Tuần đường được chọn | A3 và P6 tab Tuần đường màu xanh; P6-2 IME che tab vì ô tìm đang focus | **PASS** |
| T-QA-REAL-01 | Danh sách lấy từ BFF, không hàng mẫu | 0 phiếu thì empty; cấm demoItems | BFF :5202 listen; màn empty đúng copy, không hàng NT-* giả | **PASS** |

## E2E screenshots

Viewer: `/api/qldb/artifact?id=&rel=qa/scenarios.md` rewrite `screens/{caseId}.png`.

CLI **PASS** = Maestro + PNG không đen + store px + ảnh không trùng. Visual = Read CORE vs `#sc-nghiem-thu`.

| Case | Scenario | Expect | Actual | Result | Evidence |
|------|----------|--------|--------|--------|----------|
| A10-BFF | App gọi BFF khi mở nghiem-thu | BFF listen; dữ liệu thật — không mock in-app | Mobile.Bff listen :5202; list live empty, không hàng mẫu | **PASS** | — |
| A11-LAUNCH | Cán bộ mở app trên iPhone | Thấy màn khách/home, title đọc được, không màn đen | Title Khách, nút Đăng nhập, không màn đen · 1320×2868 | **PASS** | ![A11-LAUNCH](screens/A11-LAUNCH.png) |
| A9-LOGIN | Cán bộ đăng nhập | Form tiếng Việt, vào được Trang chủ | Form QUẢN LÝ BẢO TRÌ ĐƯỜNG BỘ, tài khoản linm-soft, nút Đăng nhập; login xong vào được nghiệp vụ | **PASS** | ![A9-LOGIN](screens/A9-LOGIN.png) |
| A3-CORE | Cán bộ vào màn nghiem-thu trên iPhone | Title và việc chính khớp prototype; làm được việc như người dùng cuối | Title Công tác nghiệm thu, Back Tuần đường, Tạo, ô tìm, empty Chưa có phiếu nghiệm thu, tab Tuần đường | **PASS** | ![A3-CORE](screens/A3-CORE.png) |
| P6-CORE | Cán bộ vào màn nghiem-thu trên Android | Title và việc chính khớp prototype; làm được việc như người dùng cuối | Cùng title, mũi tên Back, Tạo, ô tìm, empty cùng câu; tab Tuần đường · 1080×1920 | **PASS** | ![P6-CORE](screens/P6-CORE.png) |
| P6-CORE-2 | Cán bộ gõ tìm trên Android | Fold tìm khác ảnh list, không màn đen | Ô tìm hiện NT; empty vẫn đúng câu; hash khác P6-CORE; thanh IME che tab dưới | **PASS** | ![P6-CORE-2](screens/P6-CORE-2.png) |

## Align UX (Read CORE vs demo)

| Shot | vs demo `#sc-nghiem-thu` | Verdict |
|------|--------------------------|---------|
| A3-CORE iOS | Title Công tác nghiệm thu · Back Tuần đường · Tạo · DES-MOB-NT-SEARCH · empty · tab Tuần đường | **Aligned** |
| P6-CORE Android | Cùng title/Tạo/search/empty · Back icon Material · tab Tuần đường | **Aligned** |
| P6-CORE-2 | Search `NT` · không trùng bytes P6 · IME che tab (focus ô tìm) | **Aligned** |
| ResultCode | Badge Đạt/Không đạt/Khấu trừ chỉ khi có dòng; 0 phiếu → empty, không vẽ demo | **Aligned** · không GAP-QA-REAL-01 |
| Must mở | design / title / feat / end-user | **0** · autoApprove `align_confirm=approve` |

## Runtime log

| Check | Result |
|-------|--------|
| BFF `dotnet build` | **PASS** · 0 error |
| docker API :5101 + Mobile.Bff :5202 | **PASS** |
| iOS xcodegen + xcodebuild · iPhone 17 Pro Max | **PASS** · bundle `com.drvn.rmms.store` |
| Android assembleW3Debug · emulator 1080×1920 | **PASS** |
| Maestro iOS+Android | **PASS** · guest → login → `#row-nghiem-thu` → `#sc-nghiem-thu` |
| PNG blank / DUP | **PASS** · 6 hash khác nhau · luma không đen |
| **cấm** start:std / mfeStdUrl / kill worker | **PASS** |

## Debt / notes

- 0 phiếu trên tenant → empty đúng design; badge ResultCode chưa có dòng để hiện
- create/detail `pending_confirm` — Tạo không mở sibling trong task này
- A4-IPAD **DEFER** Phase 1
- Android sau login vào `sc-asset-hub` rồi tab Tuần đường (không dừng ở `sc-home`)

## Handoff → review

| Field | Value |
|-------|-------|
| phase_to | `review` · `/agent-review-mobile` |
| verdict | PASS · Must 0 |
| T-QA-* | T-QA-NGHIEM-THU-* · T-QA-TAB-01 · T-QA-REAL-01 |
| PNG | `qa/screens/{A11,A9,A3,P6,P6-2}.png` · `qa/store/nghiem-thu/` |
| Open questions | none |
