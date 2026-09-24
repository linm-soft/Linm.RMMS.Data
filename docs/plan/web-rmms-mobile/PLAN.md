# PLAN — Linm.Web.RMMS.Mobile (MFE phone, clone app 1-1)

> **Ngày:** 2026-09-24 · `/hey-linm`  
> **Mục tiêu:** MFE web chạy trên điện thoại, cùng tính năng và cùng layout với app native (tab, stack, màn hình).  
> **Repo mới:** `AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` · package `@linm/rmms-mobile`  
> **Nav SSOT:** `Linm.RMMS.Mobile.iOS/App/AppRouter.swift` (5 tab + `navigationDestination`)  
> **Parity Android:** `Linm.RMMS.Mobile.Android/.../presentation/feature/*`  
> **API:** **Mobile.Bff** `http://localhost:5202` · prefix `mobile-bff/api/v1` · **không** base Web BFF  
> **Chi tiết màn:** [`SCREENS.md`](SCREENS.md) — input, action, GPS · **bỏ** tab Cá nhân và config  
> **Implement tuần đường / tuần kiểm:** [`IMPLEMENT-SCREENS.md`](IMPLEMENT-SCREENS.md)  
> **Task:** [`TASKS.md`](TASKS.md)  
> **Chưa enqueue.** Wave chạy khi user confirm `/add-task`.

## Kết luận

Tạo **một MFE phone shell mới**. Mỗi màn native có một route web tương ứng, chrome giống app (bottom tab, full-screen stack, nút back). Dữ liệu lấy đúng API Mobile.Bff đã có trong context từng slug. Desktop MFE hiện có (`Asset` :9201/:9301, `Gis` :9202/:9302, `Camera` :9216/:9316) giữ nguyên — chúng là lưới web, không phải bản clone app.

Context native (`home.md` và các slug mobile) vẫn là pack SwiftUI/Compose. Slug mới của bề mặt này là `web-rmms-mobile`.

## Hiện trạng

| Hạng mục | Đã có | Mới |
|----------|--------|-----|
| App native | iOS `Presentation/Features/*` + Android feature packages · 5 tab `home` `field` `incident` `work` `me` | — |
| BFF | `Linm.RMMS.Mobile.Bff` :5202 · prefix `mobile-bff/api/v1` | Client web gọi cùng prefix |
| MFE desktop | `Linm.Web.RMMS.Asset` · `Gis` · `Camera` | `Linm.Web.RMMS.Mobile` **chưa có thư mục** |
| Context | `docs/context/features/{slug}.md` cho từng màn native | Plan này + task; context slug `web-rmms-mobile` khi lock (`/new-web-feature`) |

## HARD

| Quy tắc | Cách làm |
|---------|----------|
| Layout | Khung điện thoại, bottom tab 5 mục, stack push/pop như `AppRouter`. Viewport chuẩn ~390×844, `max-width` 430px căn giữa trên desktop để review. |
| Tính năng | Đúng cây màn trong bảng Map bên dưới. 1 nút native = 1 route web. |
| API | Mobile.Bff :5202. Auth và `files/*` rewrite nội bộ sang NuGet. Tile `gis/tiles` trên cùng host. Web BFF không phải base client. Chi tiết [`SCREENS.md`](SCREENS.md). |
| Nhãn | `useFormOptions()` / copy key cùng bộ `LinmCopy` / `LinmKitCopy`. |
| Auth | JWT `company_id` · login overlay giống app (guest Home vẫn mở). |
| Schema | Không đụng entity / migration trong plan này. |
| Native | Không sửa iOS/Android khi làm MFE này. |
| Desktop MFE | Không nhét màn phone vào `Asset` / `Gis` / `Camera`. |

## Port đề xuất

| Script | Port | Lý do |
|--------|------|--------|
| `start` | **9230** | Trống (Asset 9201, Gis 9202, Camera 9216, widget Asset 9221) |
| `start:std` | **9330** | Trống (Asset 9301, Gis 9302, Camera 9316) |

## Shell

```
Linm.Web.RMMS.Mobile/
  package.json          @linm/rmms-mobile
  src/rmms-mobile.tsx   single-spa entry
  src/shell/            MobileShell · TabBar · stack
  src/routes.ts         mirror AppRouter
  src/pages/{slug}/     1 folder = 1 màn
  src/services/bff.ts   base mobile-bff/api/v1
  src/standalone/       khung phone cho start:std
```

Stack: React 18 · single-spa · `@linm-soft-org/linm-web-common-components` (GitHub Packages, cùng pin cách MFE Asset đang dùng lúc scaffold). State màn: local + service, Redux chỉ khi shell session cần.

## Map màn (1-1 `AppRouter`)

Tab id lấy từ `AppTab` / `tabItems` (`tab.home` · `tab.field` · `tab.incident` · `tab.work` · `tab.me`).

### Auth (overlay, không tab)

| Route | Native | Slug context |
|-------|--------|----------------|
| `/login` | `LoginView` | `login` |
| `/login/forgot` | `LoginForgotView` | `login` (forgot) |

Guest mở Home không JWT. Staff sau login thấy quick actions và tab.

### Tab `home`

| Route | Native | Slug |
|-------|--------|------|
| `/` | `HomeView` | `home` |
| `/ops` | `OpsView` | `ops` |
| `/asset` | `AssetHubView` | `asset-hub` |
| `/asset/kcht` | `AssetKchtDashboardView` | `asset-kcht-dashboard` |
| `/asset/list` | `AssetListView` | `asset` |
| `/asset/:id` | `AssetDetailView` | `asset-detail` |
| `/asset/collect` | `AssetCollectView` | `asset-collect` |
| `/asset/ai` | `AssetAiView` | `asset-ai` |
| `/asset/ai/hitl/:id` | `DetHitlEnqueueView` | `asset-ai` |
| `/asset/adjust` | `AssetAdjustView` | `asset-adjust` |
| `/gis` | `GisMapView` | `gis-map` |
| `/offline` | `PatrolOfflineView` | `patrol-offline` |
| `/supervise` | `SuperviseView` | `supervise` |
| `/supervise/:id` | `SuperviseDetailView` | `supervise-detail` |
| `/patrol-map` | `PatrolMapView` | `patrol-map` |
| `/incident/new` | `IncidentCreateView` | `incident-create` |

Home grid (context `home.md`): Giám sát · Tuần đường · Công việc · Vấn đề · Tài sản · Lưu trữ. Quick staff: Điểm tuần → tab field · Ghi sự cố → `/incident/new`. Wallet → `/asset`.

### Tab `field` — root `PatrolHomeView` (`patrol-home`)

| Route | Native | Slug |
|-------|--------|------|
| `/field` | `PatrolHomeView` | `patrol-home` |
| `/field/offline` | `PatrolOfflineView` | `patrol-offline` |
| `/field/supervise` | `SuperviseView` | `supervise` |
| `/field/supervise/:id` | `SuperviseDetailView` | `supervise-detail` |
| `/field/map` | `PatrolMapView` | `patrol-map` |
| `/field/attendance` | `AttendanceView` | `attendance` |
| `/field/attendance/report` | `AttendanceReportView` | `attendance-report` |
| `/field/attendance/day/:key` | `AttendanceDayView` | `attendance-day` |
| `/field/attendance/log/:id` | `AttendanceLogView` | `attendance-log` |
| `/field/history` | `PatrolHistoryView` | `patrol-history` |
| `/field/history/:id` | `PatrolHistoryDetailView` | `patrol-history` |
| `/field/nghiem-thu` | `NghiemThuView` | `nghiem-thu` |
| `/field/nghiem-thu/new` | `NghiemThuCreateView` | `nghiem-thu-create` |
| `/field/nghiem-thu/:id` | `NghiemThuDetailView` | `nghiem-thu-detail` |
| `/field/cam` | `CamPatrolView` | `cam-patrol` |
| `/field/reflect` | `FieldReflectView` | `field-reflect` |

`PatrolCheckIn` là sheet trên field/attendance (`checkin.title`), không phải tab.

**Gap Android:** package `presentation/feature` chưa có `nghiemthu*`. Web vẫn làm 3 màn theo iOS. Khi Android bổ sung sau, đối chiếu lại layout.

### Tab `incident` — root `IncidentListView`

| Route | Native | Slug |
|-------|--------|------|
| `/incident` | `IncidentListView` | `incident-list` |
| `/incident/new` | `IncidentCreateView` (cùng màn, entry từ list) | `incident-create` |
| `/incident/:id` | `IncidentDetailView` | `incident-detail` |
| `/incident/vis` | `VisCaptureView` | `vis-capture` |
| `/incident/:id/chat` | `IncidentChatView` | `incident-chat` |
| `/incident/estimate/:id` | `Estimate` | `estimate` |

### Tab `work` — root `MntListView`

| Route | Native | Slug |
|-------|--------|------|
| `/work` | `MntListView` | `maintenance` / mnt-list |
| `/work/progress` | `MntProgressView` | `mnt-progress` |
| `/work/log` | `MntLogView` | `mnt-log` |
| `/work/chat` | `MntChatView` | `mnt-chat` |
| `/work/estimate/:id` | `Estimate` | `estimate` |

### Tab `me` — root `MeView`

| Route | Native | Slug |
|-------|--------|------|
| `/me` | `MeView` | `me` |
| `/me/profile` | `MeProfileView` | `me-profile` |
| `/me/feedback` | `FeedbackView` | `feedback` |
| `/me/settings` | `MeSettingsView` | `me-settings` |
| `/me/cam` | `CamViewView` | `cam-view` |

### Overlay dùng chung

| Route | Native | Gắn từ |
|-------|--------|--------|
| `/capture` | `PhotoGeoCapture` | incident-create · vis-capture · field-reflect |
| `/estimate/:incidentId` | Estimate screen | home incident-create · incident list/detail · work |

## Wave

| Wave | Phạm vi | Xong khi |
|------|---------|----------|
| **W0** | Scaffold repo, shell tab, BFF client, login gate, standalone :9330 | `yarn start:std` mở khung phone, 5 tab chuyển route rỗng đúng id |
| **W1** | Login + Home (guest + staff) đúng `home.md` | Guest thấy FAQ/privacy/login; staff thấy quick + grid 6 + wallet |
| **W2** | Stack Home: ops, asset hub và con, supervise, map, offline, ghi sự cố | Mỗi `navigationDestination` của `case .home` có page |
| **W3** | Tab Field đủ bảng trên | Patrol home + attendance chain + nghiệm thu + cam + reflect |
| **W4** | Tab Incident | List, create, detail, vis, chat, estimate |
| **W5** | Tab Work | List, progress, log, chat, estimate |
| **W6** | Tab Me | Profile, feedback, settings, cam view |
| **W7** | Overlay capture + check-in sheet + so layout với prototype iOS/Android | Cùng hierarchy, cùng thứ tự nút |

Một wave một lượt implement. API của slug đọc context trước khi viết service — thiếu path thì ghi GAP, không bịa endpoint.

## Slash khi chạy (sau plan)

| Việc | Slash |
|------|--------|
| Lock context slug `web-rmms-mobile` | `/new-web-feature` `analyze_only` rồi `context_lock` |
| Enqueue một wave | `/add-task` (confirm trước khi ghi queue) |
| Sửa màn sau khi đã có code | `/edit-web-feature` |
| File upload | `/integrate-file-upload-web` trên BFF file đã có |
| Map clip | context `gis-map` / `patrol-map` · tile qua Mobile.Bff |

## Ngoài phạm vi

- Store iOS/Android, Maestro, `ReleaseFlags` native.
- Màn desktop CSDL / sổ TS / filter bar ERP (`Linm.Web.RMMS.Asset`).
- Entity mới, migration, BFF controller mới.
- Sửa copy native `LinmCopy`.
