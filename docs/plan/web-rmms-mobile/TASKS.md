# TASKS — Linm.Web.RMMS.Mobile

> Parent: [`PLAN.md`](PLAN.md) · 2026-09-24  
> Nav: `Linm.RMMS.Mobile.iOS/App/AppRouter.swift`  
> API: Mobile.Bff `:5202` · `mobile-bff/api/v1` · path lấy từ `docs/context/features/{slug}.md`  
> Status mặc định: **pending** · chưa enqueue queue.  
> **2026-09-24:** W6 (tab Cá nhân, cài đặt) **ngoài phạm vi** — chi tiết form/GPS ở [`SCREENS.md`](SCREENS.md).

Mỗi task: làm đúng màn, gọi API đã có, nhãn qua `useFormOptions()`. Thiếu endpoint trong context → ghi `GAP-WRM-{id}` trong PR note, dừng bịa path.

## W0 — Scaffold

| ID | Việc | Xong khi |
|----|------|----------|
| T-W0-01 | Tạo `MFE-Source/Linm.Web.RMMS.Mobile`, package `@linm/rmms-mobile`, single-spa + TS, common-components GitHub Packages | `yarn install` · `yarn typecheck` |
| T-W0-02 | `start` **9230** · `start:std` **9330** · standalone khung phone 390×844 | Mở `http://localhost:9330` thấy khung, không sidebar desktop |
| T-W0-03 | `MobileShell`: 5 tab `home` `field` `incident` `work` `me`, copy key `tab.*`, icon cùng ý `tabItems` | Đổi tab giữ session, test id `tab-home` … `tab-me` |
| T-W0-04 | `routes.ts` đủ path trong PLAN (page stub title = slug) | Deep link từng route không 404 |
| T-W0-05 | `services/bff.ts` base `mobile-bff/api/v1`, gắn JWT | Một GET `auth/profile` khi đã login |
| T-W0-06 | Auth gate: guest vào `/`; `/login` và `/login/forgot` là overlay | Chưa login vẫn thấy Home stub |

## W1 — Home + login

| ID | Route | Native | Context |
|----|-------|--------|---------|
| T-W1-01 | `/login` | `LoginView` | `features/login.md` |
| T-W1-02 | `/login/forgot` | `LoginForgotView` | `features/login.md` |
| T-W1-03 | `/` guest | `HomeView` guest: Khách, FAQ, privacy, CTA đăng nhập | `features/home.md` §2 |
| T-W1-04 | `/` staff | Hero, quick Điểm tuần / Ghi sự cố, grid 6 ô, wallet | `features/home.md` §2–§4 |
| T-W1-05 | profile | `GET auth/profile` lần đầu, cache tên khi back Home | `home.md` §3 |

## W2 — Stack Home

| ID | Route | Native | Context |
|----|-------|--------|---------|
| T-W2-01 | `/ops` | `OpsView` | `features/ops.md` |
| T-W2-02 | `/asset` | `AssetHubView` | `features/asset-hub.md` |
| T-W2-03 | `/asset/kcht` | `AssetKchtDashboardView` | `features/asset-kcht-dashboard.md` |
| T-W2-04 | `/asset/list` | `AssetListView` | `features/asset.md` |
| T-W2-05 | `/asset/:id` | `AssetDetailView` | `features/asset-detail.md` |
| T-W2-06 | `/asset/collect` | `AssetCollectView` | `features/asset-collect.md` |
| T-W2-07 | `/asset/ai` + `/asset/ai/hitl/:id` | `AssetAiView` · `DetHitlEnqueueView` | `features/asset-ai.md` |
| T-W2-08 | `/asset/adjust` | `AssetAdjustView` → detail | `features/asset-adjust.md` |
| T-W2-09 | `/gis` | `GisMapView` | `features/gis-map.md` |
| T-W2-10 | `/offline` | `PatrolOfflineView` | `features/patrol-offline.md` |
| T-W2-11 | `/supervise` + `/:id` | `SuperviseView` · `SuperviseDetailView` | `supervise.md` · `supervise-detail.md` |
| T-W2-12 | `/patrol-map` | `PatrolMapView` | `features/patrol-map.md` |
| T-W2-13 | `/incident/new` từ Home | `IncidentCreateView` | `features/incident-create.md` |

## W3 — Field

| ID | Route | Native | Context |
|----|-------|--------|---------|
| T-W3-01 | `/field` | `PatrolHomeView` + nav sync/notify | `features/patrol-home.md` |
| T-W3-02 | `/field/offline` | `PatrolOfflineView` | `patrol-offline.md` |
| T-W3-03 | `/field/supervise` + detail | cùng W2 supervise, entry field | `supervise.md` |
| T-W3-04 | `/field/map` | `PatrolMapView` | `patrol-map.md` |
| T-W3-05 | `/field/attendance` | `AttendanceView` | `features/attendance.md` |
| T-W3-06 | report → day → log | `AttendanceReportView` · `AttendanceDayView` · `AttendanceLogView` | `attendance-report.md` · `attendance-day.md` · `attendance-log.md` |
| T-W3-07 | `/field/history` + `/:id` | `PatrolHistoryView` · detail | `patrol-history.md` |
| T-W3-08 | nghiệm thu list / new / detail | `NghiemThu*` (iOS; Android chưa có package) | `nghiem-thu.md` · `nghiem-thu-create.md` · `nghiem-thu-detail.md` |
| T-W3-09 | `/field/cam` | `CamPatrolView` | `cam-patrol` spec `specs/cam-patrol` |
| T-W3-10 | `/field/reflect` | `FieldReflectView` | context field-reflect nếu có; thiếu file thì GAP |
| T-W3-11 | sheet check-in | `PatrolCheckIn` | `specs/patrol-checkin` |

## W4 — Incident

| ID | Route | Native | Context |
|----|-------|--------|---------|
| T-W4-01 | `/incident` | `IncidentListView` | `incident-list.md` |
| T-W4-02 | `/incident/new` | `IncidentCreateView` | `incident-create.md` |
| T-W4-03 | `/incident/:id` | `IncidentDetailView` | `incident-detail.md` |
| T-W4-04 | `/incident/vis` | `VisCaptureView` | `vis-capture.md` |
| T-W4-05 | `/incident/:id/chat` | `IncidentChatView` | `incident-chat.md` |
| T-W4-06 | estimate | Estimate screen | `features/estimate.md` |

## W5 — Work

| ID | Route | Native | Context |
|----|-------|--------|---------|
| T-W5-01 | `/work` | `MntListView` | `maintenance.md` |
| T-W5-02 | `/work/progress` | `MntProgressView` | `mnt-progress.md` |
| T-W5-03 | `/work/log` | `MntLogView` | `mnt-log.md` |
| T-W5-04 | `/work/chat` | `MntChatView` | platform message / mnt chat context |
| T-W5-05 | estimate từ work | cùng T-W4-06 | `estimate.md` |

## W6 — Me

| ID | Route | Native | Context |
|----|-------|--------|---------|
| T-W6-01 | `/me` | `MeView` | me feature (shell tab) |
| T-W6-02 | `/me/profile` | `MeProfileView` | `users.md` / me profile |
| T-W6-03 | `/me/feedback` | `FeedbackView` | `feedback.md` |
| T-W6-04 | `/me/settings` | `MeSettingsView` | `me-settings.md` |
| T-W6-05 | `/me/cam` | `CamViewView` | `cam-view` spec |

## W7 — Dùng chung + đối chiếu UI

| ID | Việc | Xong khi |
|----|------|----------|
| T-W7-01 | `PhotoGeoCapture` một component, mở từ incident-create, vis, field-reflect | `features/photo-geo-capture.md` |
| T-W7-02 | So từng tab với `specs/{slug}/ui/prototype/ios/index.html` (và android nếu có) | Cùng thứ tự vùng, cùng nút, cùng back |
| T-W7-03 | Pass viewport 390 và desktop giữa khung 430 | Tab bar không nhảy, stack back đúng màn cha |

## Thứ tự enqueue gợi ý

`T-W0-*` → `T-W1-*` → `T-W2-*` → `T-W3-*` → `T-W4-*` → `T-W5-*` → `T-W6-*` → `T-W7-*`.

W4 và W5 có thể song song sau W1 vì không phụ thuộc stack Home, trừ estimate dùng chung (làm ở W4 trước, W5 chỉ mount).
