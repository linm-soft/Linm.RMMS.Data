# QA — Scenarios — supervise-detail (mobile · Chi tiết check-in)

| Field | Value |
|-------|-------|
| feature | `supervise-detail` |
| this role | `qa` · `/agent-qa-mobile` |
| status | **pass** · `phase=review` |
| packKind | **`screen`** |
| changeScope | `edit_page` |
| taskId | `task_94ee2d50` |
| e2eQa | **ON** · `yarn e2e-qa-mobile` · `ios_test_phase=phase1_iphone` · **A4-IPAD DEFER** |
| store_qa | **run_store** |
| e2e result | **ok:true** · Maestro iOS+Android · bundle `com.drvn.rmms.store` |
| method | e2e runtime · yarn e2e-qa-mobile · Maestro + simctl/adb · **cấm** GenerateImage · **cấm** yarn start:std / mfeStdUrl |
| align | A3 + P6 **Aligned** vs `#sc-supervise-detail` · Must **0** |
| updatedAt | `2026-09-20T00:50:00.000Z` |

**Scope:** `#sc-supervise-detail` · entry list card. Live row tên `Nguyễn Văn A` · id `57ce2700-4eea-4ab7-b5a4-1e3b03599165` · mã `CC-DEMO-202609-001` (seed guid cũ `a0000001-…` không còn trên list).

## VERIFY GATE

| Gate | Result |
|------|--------|
| iOS xcodegen + xcodebuild iPhone 17 Pro Max | **PASS** (app `build/e2e-dd` · run đầu) |
| Android `:app:assembleW3Debug` | **PASS** (CLI cài APK trước Maestro) |
| BFF `dotnet build` | **PASS** · 0 warning |
| API :5101 / BFF :5202 | **PASS** · `--skip-start` (đã listen) |
| `yarn e2e-qa-mobile` | **PASS** · ok:true · 2026-09-20T00:47:41Z |

## E2E screenshots

| Case | Scenario | Expect | Actual | Result | Evidence |
|------|----------|--------|--------|--------|----------|
| A11-LAUNCH | Cán bộ mở app trên iPhone | Màn khách, chữ đọc được, không đen | Khách · FAQ · thẻ «Đăng nhập / Dành cho cán bộ» · 1320×2868 · 07:46 | **PASS** | ![A11-LAUNCH](screens/A11-LAUNCH.png) |
| A10-BFF | App gọi BFF | :5202 listen; list/detail không mock | BFF listen · list có card live (không `sup-empty`) · detail mã `CC-DEMO-202609-001` | **PASS** | — |
| A9-LOGIN | Cán bộ đăng nhập | Form tiếng Việt | «QUẢN LÝ BẢO TRÌ ĐƯỜNG BỘ» · user `linm-soft` · nút Đăng nhập · 1320×2868 · 07:45 | **PASS** | ![A9-LOGIN](screens/A9-LOGIN.png) |
| A3-CORE | Cán bộ mở chi tiết check-in trên iPhone | Title + việc chính khớp prototype | Title «Chi tiết check-in» · back «Giám sát» · Nguyễn Văn A · hàng org/tuyến/giờ/trạng thái/tọa độ/trong vùng · CTA «Xem trên bản đồ» · tab Trang Chủ · 1320×2868 | **PASS** | ![A3-CORE](screens/A3-CORE.png) |
| P6-CORE | Cùng việc trên Android | Title + hero + hàng | Cùng title/hero/6 hàng · 1080×1920 · CTA nằm fold sau | **PASS** | ![P6-CORE](screens/P6-CORE.png) |
| P6-CORE-2 | Fold còn lại Android | CTA bản đồ, không đen | Nút «Xem trên bản đồ» · hash ≠ P6-CORE | **PASS** | ![P6-CORE-2](screens/P6-CORE-2.png) |
| A4-IPAD | Listing iPad | Phase 2 | DEFER | DEFER | — |

## Visual align

Read A3 + P6 + P6-2 vs prototype `#sc-supervise-detail`. Prototype không có `.row-icon` trên row detail — live cũng không. Giá trị live (mã, tổ `demo-seed`, status raw `in`) khác chuỗi demo; map status `other` → raw. Must **0**.

## Gaps

| ID | Note | Status |
|----|------|--------|
| GAP-QA-SUP-DET-AND-LIST-01 | List không còn `sup-empty`; card live mở được detail | **closed** |
| GAP-QA-STORE-03 | P6-CORE + P6-CORE-2 harvest lần này | **closed** |

## Handoff → review

**Pass** — `phase=review` · **cấm** `done`. PNG `qa/screens/{caseId}.png`.
