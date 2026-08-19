# Control hint — me (mobile hub)

| | |
|---|---|
| feature | `me` |
| kind | `hub` |
| packKind đề xuất | `hub` (tab Tôi · **cấm** Lin* list / Kind A–G web) |
| changeScope | `new_page` |
| demo | `specs/mobile-p1/ui/prototype/{ios,android}/index.html` `#sc-me` · pack `specs/me/ui/prototype/{ios,android}/index.html` |
| ctx | `docs/context/features/me.md` |
| map | `docs/html-to-native-map.md` |
| agent | `agent-data-analy-mobile` |
| at | `2026-08-19T02:05:00.000Z` |
| thisAction | **Hub Tôi** only · children enqueue `pending_confirm` · logout `reuse=login-logout` |
| taskId | `task_84e8e0e2` |

## Skill packet (`/agent-data-analy-mobile`) — 3 file

| File | Skill step |
|------|------------|
| **file này** | 4–5 controlHint + tech factors |
| [`me-bff-endpoints.md`](me-bff-endpoints.md) | 6 BFF · **cấm invent** |
| [`me-action-tree.md`](me-action-tree.md) | 7 tree + share/reuse |

## UI control — như thế nào

Màn `#sc-me` = large title + list rows (không form submit). Design kit dual · Dev **cấm** raw `List`/`LazyColumn` row khi thiếu hàng map → `kit_missing_confirm`.

| Field / row | controlHint | Kit (iOS + Android cùng turn) | Native |
|-------------|----------------|-------------------------------|--------|
| title | LargeTitle | `LinmLargeTitle` | SwiftUI / Compose |
| profile | ListRow display | `LinmListRow` + person circle | **không** route (`me-profile` gap) |
| offlineQueue | ListRow nav | `LinmListRow` · `#i-sync` Android | sibling `patrol-offline` |
| signal | SignalQuality | `LinmNetSignalMark` / `LinmStatusCapsule` | chrome · **cấm** «Có mạng» |
| feedback | ListRow nav | `LinmListRow` · `#i-info` | sibling `feedback` |
| camView | ListRow nav | `LinmListRow` · `#i-video` | sibling `cam-view` |
| ops | ListRow nav | `LinmListRow` · `#i-bell` + badge | sibling `ops` |
| settings | ListRow toast | `LinmListRow` · `#i-gear` | **iOS only** · không màn |
| logout | ListRow destructive | `LinmListRow` title danger | `reuse=login-logout` local clear |
| tabbar | Tab 5 | `LinmTabBar` | `shell-tabs` `shared_kit` |

## Fields (`#sc-me` — dual copy, chrome lệch platform ghi rõ)

| Field | VN | controlHint | Required | Source | Notes |
|-------|----|-------------|----------|--------|-------|
| title | Tôi | LargeTitle | * | `.large-title` | kit `LinmLargeTitle` |
| displayName | (live FullName) | Text display | * | GET `auth/profile` · demo «Nguyễn Văn A» | **cấm** hardcode mock trên production |
| displaySub | (live hoặc ẩn) | Text display | | demo «Tuần đường · Văn phòng QLĐB IV.1» | **không** invent org/role API |
| profileChevron | chevron | chrome iOS | | iOS `.chev` · Android **không** | platform chrome |
| offlineQueue | Hàng đợi mất sóng | ListRow | * | `go('patrol-offline')` | phụ «N chờ đồng bộ» · badge ẩn khi 0 |
| signal | Tín hiệu | SignalQuality | * | `data-net-signal` | iOS tap toast **Đã làm mới** · Android display-only · bind OS path |
| feedback | Góp ý | ListRow | * | `go('feedback')` | phụ «Phản ánh tính năng phần mềm» |
| camView | Camera xem | ListRow | * | `go('cam-view')` | |
| ops | Thông báo | ListRow | * | `go('ops')` | badge ẩn khi 0 |
| settings | Cài đặt | ListRow | | iOS `toast('Cài đặt')` | Android **thiếu** row · **không** enqueue |
| logout | Đăng xuất | ListRow danger | * | `logout()` | **không** POST `auth/logout` turn này |
| tabMe | Tôi | Tab | * | `DES-MOB-TABBAR` | chrome shell |

## Không có trên slug `me` (cấm gộp)

| Surface | Lý do |
|---------|--------|
| Màn `#sc-feedback` / `#sc-cam-view` / `#sc-ops` / `#sc-patrol-offline` | sibling `{feature}` |
| Sheet Hồ sơ / Đổi MK | `me-profile` gap · pack `users` |
| POST `auth/logout` | `login-logout` |
| Tab Trang Chủ nội dung | pack `home` |
| Submit trên hub | **không** — **GAP-MOB-ACT-07** |

## Kit map (Design → Dev)

Nguồn `docs/html-to-native-map.md`. `LinmListRow` hiện **thiếu** tap / chevron / leading / badge → Design `kit_missing_confirm=implement_kit` (cùng turn dual).

| Demo chrome | Map | Kit dual |
|-------------|---------|----------|
| `.large-title` | `.large-title` | `LinmLargeTitle` |
| `.section-label` | `.section-label` | `LinmSectionLabel` |
| `.list` / `.row` | `.list` / `.rich-card` | `LinmListRow` |
| `.badge` | `.badge` | `LinmBadge` |
| `data-net-signal` | 4 cột 4/6/8/11 | `LinmNetSignalMark` |
| `.tabbar` | `.tabbar` | `LinmTabBar` |
| toast | toast / banner | `LinmToast` |

## Tech factors

| Factor | Hub `me` | Note |
|--------|----------|------|
| GPS | no | — |
| camera | no | row Camera xem = sibling `cam-view` |
| offline | **hub vẫn mở** | GET profile fail → fallback `lastUserName` · **cấm** block tab |
| map | no | — |
| biometric | no | — |
| push | no | badge Thông báo = sibling `ops` |
| token | Keychain / Encrypted | GET `auth/profile` Bearer |

## Hành vi (không `alert`)

| Case | UI |
|------|----|
| Profile OK | Tên = `fullName` (trim) · subtitle ẩn nếu không có field live |
| Profile fail / offline | Tên = `lastUserName` · toast in-app **không** chặn màn |
| Tap sibling (queue / góp ý / camera / thông báo) | **Không** mở màn sibling · toast tên hàng (pack `me` only) |
| Tap tín hiệu iOS | Toast **Đã làm mới** · **cấm** cycle hạng proto |
| Tap Cài đặt iOS | Toast **Cài đặt** |
| Tap Đăng xuất | `LogoutUseCase` local · toast **Đã đăng xuất** · `#sc-login` |
| Leave dirty | N/A (không form) |

## UNCLEAR

**none** trên field hub. Open Q = GAP BFF subtitle org — PO **không** bịa path.

## Cấm

- Invent `api/v1/users/me` / `profile/*` RMMS  
- Gộp sibling screens vào slug `me` (`GAP-MOB-ACT-01/02`)  
- Enqueue `shared_kit` / `reuse=login-logout` / gap không route (`GAP-MOB-ACT-05/07`)  
- «Có mạng» · watermark Gói · WebView HTML  

## Handoff → PO

| Field | Value |
|-------|-------|
| feature / packKind | `me` / **hub** |
| phase_from / phase_to | `data_analy` **done** → `po` |
| controlHint / UNCLEAR | file này · UNCLEAR **none** |
| Action tree | `me-action-tree.md` |
| BFF | `me-bff-endpoints.md` · `GET auth/profile` |
| Kit | `LinmListRow` thiếu tap/leading → `implement_kit` |
| Next | `/agent-po-mobile` · AC đúng **1** hub `#sc-me` |
| autoApprove | ON · full_pipeline `task_84e8e0e2` |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-data-analy-mobile |
| skillVersion | 2026.08.19.17 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.19.19 |
| rulesVersion | 2026.08.19.22 |
| generatedAt | 2026-08-19T02:05:00.000Z |
| versionGate | rechecked |
| contentHash | sha256:2a7c7514a4afb35d7ea136a00a5e06a7e3f5c3d2edf8f92daf875959efb9e0d5 |
| bffContentHash | sha256:cbe9388a93bf8ac2dac030b0f716eb97f5a0010ca9e2749ca65ddbf5a16b85e4 |

---
<!-- Version meta: skillId=agent-data-analy-mobile skillVersion=2026.08.19.17 schemaVersion=1 workflowVersion=2026.08.19.19 rulesVersion=2026.08.19.22 versionGate=rechecked -->
