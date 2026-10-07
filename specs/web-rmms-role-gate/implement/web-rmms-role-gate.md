# Implement — web-rmms-role-gate

> Status: **done** · writtenAt `2026-09-30T17:00:00.000Z` · task `task_b93ec9fc`  
> skillVersion: `2026.09.05.03` · packKind: `list` (phone gate) · changeScope: `edit_page`  
> mfeStdUrl: `http://localhost:9301/web-rmms-role-gate` · roleOnly `/agent-dev`

| | |
|--|--|
| Feature | `web-rmms-role-gate` |
| MFE | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| BE | `D:/AI-QLBD/Linm.RMMS.WebService` |
| BFF | `D:/AI-QLBD/Linm.RMMS.Mobile.Bff` `:5202` |
| Route | `/web-rmms-role-gate` (keep) |

## Decisions

- changeScope `edit_page` · **cấm** invent `RoleGateController` / `role-gate/*`
- Profile enhance: `GET auth/profile` + BFF merge từ `GET integration/users/me` · roleCaps derive SSOT BE
- Seed: `Seed_JobTitleQlHatNghiemThu` · HAT-*→`QL_HAT` · `NGHIEM-THU` · **no** Schema columns
- init-data PackageHints += `QL_HAT`
- FE bind roleCaps · CTA Giao việc iff `qlHat` · Pass/Fail iff `tuanKiem` · **cấm** MANAGER→Giao
- dueAt gợi ý TT41 editable · **cấm** SLA 24h default
- LeaveConfirmModal trên seed + assign dirty · **cấm** native alert/confirm
- Kind B LIST/FILTER/CFG **WAIVE** (phone)

## APIs

| Id | Method | Path | Note |
|----|--------|------|------|
| API-01 | GET | `mobile-bff/api/v1/auth/profile` | enrich jobTitleCode/packageCode/roleCaps |
| API-me | GET | `…/integration/users/me` | source enrich |
| API-02..05 | GET/PUT | `…/integration/job-titles*` | Live + init-data QL_HAT |
| API-SEED | EF | `Seed_JobTitleQlHatNghiemThu` | applied Dev DB |

## FE surfaces

| Zone | File / peer |
|------|-------------|
| RG-00…03 | `src/pages/WebRmmsRoleGate/RoleGatePage.tsx` |
| RG-01 Me chips | `MeTabPage.tsx` |
| RG-03a Home tiles | `HomePage.tsx` gated |
| RG-03c Assign | `IncidentListPage.tsx` qlHat |
| RG-03d Recheck | `FindingDetailPage.tsx` tuanKiem · assign qlHat |

## Build

| Layer | Command | Result |
|-------|---------|--------|
| MFE | `yarn build` (cwd Mobile) | **PASS** (size warnings only) |
| BE API | `dotnet build` RMMS.Service.Api | **PASS** |
| Mobile BFF | `dotnet build` RMMS.Mobile.Bff | **PASS** |
| EF | `dotnet ef database update Seed_JobTitleQlHatNghiemThu` | **PASS** applied |
| Overlay | n/a (no start:std this role) | — |

## Notes

- 2026-10-05: Login success stuck on role-gate loader. In-app nav now updates MemoryRouter while the URL is already `/m/…`. Session-window is one shared call; role-gate renders without waiting on that boot. Verify: login → `/m/web-rmms-role-gate` shows the pick screen, Network has a single `session-window`.
- 2026-10-05: Chọn vai không được đưa về màn Khách. Có token thì `staff` bật ngay, không chờ `notification/overview`. Overview một request đang bay. Verify: chọn Tuần đường → Trang chủ còn đăng nhập, Network một `overview`.
- 2026-10-07: Màn `/cau-hinh-chuc-vu` cấu hình mã, tên, view (view ở trên). `ViewCode` trên `rmms_job_titles`. Hồ sơ trả `viewCode` + `roleCaps` theo chức vụ của user. Verify: sửa Chuyên viên sang Tuần kiểm, đăng nhập lại `RMMS-VPI1-005` vào `/tuan-kiem`.
- 2026-10-07: Nút Cấu hình chức vụ nằm full hàng trong lưới chọn vai. Chỉ phiên linm-soft (không phải lúc đang mimic) thấy nút và mở được `/cau-hinh-chuc-vu`.
- 2026-10-07: Cột `rmms_users.RouteConfirmedAt`. Hồ sơ trả `needsRouteConfirm` + `routeRequired`. Gói RMMS-TDTK mà BE nhận quản lý (nhóm LEAD, role Manager/Admin, package MANAGER-RMMS hoặc QL_HAT, view ql-hat) thì không hiện form. Tuần đường/tuần kiểm bắt buộc tuyến + lý trình. Checkbox «Bạn là quản lý» chỉ khi `routeRequired` false. Form `/xac-nhan-tuyen` khi load shell. Verify: `yarn typecheck` Mobile · `dotnet build` API + BFF · migration `Schema_AppUserRouteConfirm`.

## Debt / next

- E2E AC-RG-01…10 · **queued** `/agent-qa*` · **cấm** e2e ở Dev
- Live smoke mfeStdUrl sau QA start:std
- BFF enrich phụ thuộc API users/me reachable từ Mobile.Bff ApiBase

## T-* status

| Id | Status |
|----|--------|
| T-BE-PROF-01 · T-BE-SEED-01 · T-BE-JT-01 | done |
| T-UI-PROF-01 · T-UI-SEED-01 · T-UI-VIS-01 · T-UI-ASSIGN-01 · T-UI-LEAVE-01 | done |
| T-UI-UX-01 · T-UI-RESP-01 · T-UI-PROD-01 · T-UI-ALIGN-01 · T-PERM-01 | done (phone) |
| T-QA-RG-01 | pending QA |
