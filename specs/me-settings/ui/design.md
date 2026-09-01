# Design — me-settings (mobile sheet → screen)

| Field | Value |
|-------|-------|
| feature | `me-settings` |
| title | [Mobile] [Tôi] -> Cài đặt |
| role | `/agent-design-mobile` |
| status | **confirmed** (autoApprove=ON) |
| design_confirm | **approve** (`task_d7095795`) |
| packKind | **`sheet`** (PO chốt · quyền/OS + about · surface **full screen** `#sc-me-settings` · **cấm** bottom-sheet chrome) |
| changeScope | `new_page` |
| stack | `native_dual` |
| taskId | `task_d7095795` |
| priorPo | `po/requirement.md` **confirmed** |
| priorDa | `_data-analy/me-settings-control-hint.md` + `me-settings-real-data.md` **confirmed** · hash skip · **cấm** re-scan (`GAP-DES-DEMO-RESCAN-01`) |
| contentHash | `sha256:me-settings-control-hint-20260830` |
| realDataHash | `sha256:me-settings-real-data-20260830` |
| designContentHash | `sha256:me-settings-design-20260830` |
| autoApprove | **ON** |
| e2eQa | ON — queued QA · **cấm** e2e / `yarn start:std` ở Design |
| kit_missing_confirm | **N/A** — kit đã map (`LinmTopBar` · `LinmSectionLabel` · `LinmListRow` · `LinmSecondaryButton` · `LinmToast`) |
| updatedAt | `2026-08-30T20:25:00.000Z` |

## reviewUrl (dual — REQUIRED)

| Platform | Path | reviewUrl |
|----------|------|-----------|
| iOS | `ui/prototype/ios/index.html` | `file:///Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/me-settings/ui/prototype/ios/index.html` |
| iOS OS fail | same + `?fail=1` | `file:///Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/me-settings/ui/prototype/ios/index.html?fail=1` |
| iOS unknown status | same + `?unknown=1` | `file:///Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/me-settings/ui/prototype/ios/index.html?unknown=1` |
| iOS empty version | same + `?emptyver=1` | `file:///Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/me-settings/ui/prototype/ios/index.html?emptyver=1` |
| iOS privacy | same + `?privacy=1` | `file:///Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/me-settings/ui/prototype/ios/index.html?privacy=1` |
| iOS entry hint | same + `?entry=1` | `file:///Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/me-settings/ui/prototype/ios/index.html?entry=1` |
| Android | `ui/prototype/android/index.html` | `file:///Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/me-settings/ui/prototype/android/index.html` |
| Android OS fail | same + `?fail=1` | `file:///Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/me-settings/ui/prototype/android/index.html?fail=1` |
| Android unknown | same + `?unknown=1` | `file:///Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/me-settings/ui/prototype/android/index.html?unknown=1` |
| Entry SSOT (cite) | mobile-p1 `#sc-me` row-settings | cite only · hash skip · **cấm** re-scan |

**Cấm** `mfeStdUrl` / `yarn start:std` / port 9301.

## Frame / chrome

| | iOS | Android |
|--|-----|---------|
| Frame | 390×844 | 412×915 |
| Back | `#i-chevron-left` + label **Tôi** | icon-btn chevron only (parity OK) |
| Title | **Cài đặt** 17 | TopAppBar **Cài đặt** ~20 |
| Shell | Tab 5 · tab **`me`** active | NavigationBar 5 · cùng index |
| pack tabs | **none** — **cấm** invent segment (`GAP-TAB-01`) | same |
| Surface | **full screen** `#sc-me-settings` — **cấm** bottom-sheet | same |
| Badge | **cấm** P1/P2 trên header | same |

## DES table

| DES | Zone | iOS | Android | Notes |
|-----|------|-----|---------|-------|
| `DES-MOB-ME-SETTINGS` | Screen owner `#sc-me-settings` | push từ Me | same | `data-tab="me"` |
| sectionPerm | **Quyền ứng dụng** | `LinmSectionLabel` 13 | same | |
| rowLocation | **Vị trí** + status | `LinmListRow` `#i-mappin` | same | phụ OS · tap → openAppSettings |
| rowCamera | **Camera** + status | `LinmListRow` `#i-camera` | same | phụ OS · tap → openAppSettings |
| rowNotifyOs | **Thông báo hệ thống** | `LinmListRow` `#i-bell` | same | **≠** ops inbox · tap → openAppSettings |
| btnOpenOs | **Mở Cài đặt hệ thống** | `LinmSecondaryButton` | same | cùng deep-link · toast fail |
| sectionSync | **Đồng bộ** | `LinmSectionLabel` 13 | same | |
| rowOffline | **Hàng đợi mất sóng** | `LinmListRow` `#i-sync` | same | `reuse=patrol-offline` |
| sectionAbout | **Thông tin** | `LinmSectionLabel` 13 | same | |
| appVersion | **Phiên bản** | Text display | same | Bundle `x.y.z (build)` · empty «—» |
| rowPrivacy | **Chính sách quyền riêng tư** | `LinmListRow` `#i-info` | same | `home.privacy.*` · **cấm** invent URL |
| Privacy panel | push/sheet nội dung | local copy | same | DES-MOB-ME-SETTINGS-PRIVACY |
| toastOsFail | **Không mở được Cài đặt hệ thống** | `LinmToast` | same | **cấm** fake ok |
| Entry (reuse) | Me `#row-settings` `#i-gear` | `LinmListRow` | same · **không** chevron Android hub | **không** reimplement hub |

## SF ↔ Material icon

| `#i-*` | Motif (SSOT) | SF Symbol | Material |
|--------|--------------|-----------|----------|
| `#i-chevron-left` | `M15 5l-7 7 7 7` | `chevron.left` | `ArrowBack` |
| `#i-chevron-right` | `M9 5l7 7-7 7` | `chevron.right` | `ChevronRight` |
| `#i-mappin` | pin + circle r=2.2 | `mappin` | `Place` |
| `#i-camera` | body + lens | `camera` | `PhotoCamera` |
| `#i-bell` | bell + clapper | `bell` | `Notifications` |
| `#i-sync` | dual arcs | `arrow.triangle.2.circlepath` | `Sync` |
| `#i-info` | circle + i | `info.circle` | `Info` |
| `#i-gear` | cog (entry Me) | `gearshape` | `Settings` |
| `#i-home` `#i-warning` `#i-wrench` `#i-person` | shell Tab 5 | reuse shell | reuse |

**Cấm** invent `#i-*` · **cấm** lệch `d=` dual (`GAP-MOB-ICON-*`) · FaceID/Finger **không** bind P1.

## Copy VN (SSOT — parity dual)

| Key | Copy |
|-----|------|
| Title | **Cài đặt** |
| Back (iOS) | **Tôi** |
| Section perm | **Quyền ứng dụng** |
| rowLocation | **Vị trí** |
| rowCamera | **Camera** |
| rowNotifyOs | **Thông báo hệ thống** |
| Status granted | **Đã cấp** |
| Status denied | **Chưa cấp** |
| Status unknown | **Không xác định** |
| CTA OS | **Mở Cài đặt hệ thống** |
| Section sync | **Đồng bộ** |
| Offline | **Hàng đợi mất sóng** |
| Section about | **Thông tin** |
| Version label | **Phiên bản** |
| Privacy | **Chính sách quyền riêng tư** |
| Toast OS fail | **Không mở được Cài đặt hệ thống** |
| Tabs | Trang Chủ · Tuần đường · Vấn đề · Công việc · Tôi |

**Cấm ship:** watermark Gói · device label «iPhone»/«· Android» · «Có mạng» · fake toast «Đã lưu cài đặt» · invent HTTPS privacy URL · request permission từ settings.

## Kit map

| Demo | Kit iOS+Android | Notes |
|------|-----------------|-------|
| `.nav-bar` / `.top-bar` | `LinmTopBar` | leading chevron · title |
| `.section-label` | `LinmSectionLabel` | **13** |
| `.row` + `.row-icon` | `LinmListRow` | title ≥16 · status 13 |
| `.btn-secondary` | `LinmSecondaryButton` | Mở Cài đặt hệ thống |
| `.version-row` | Text display | Bundle readonly |
| toast | `LinmToast` | OS fail only · **cấm** fake ok |
| Tab 5 | `LinmTabBar` / NavigationBar | giữ shell · `me` active |
| Me entry | `LinmListRow` `#i-gear` | reuse Me · **cấm** reimplement |

### kit_missing_confirm

**N/A** — tất cả control đã có trong map / kit (`GAP-MOB-ACT-05`). **Cấm** invent tên kit.

## controlHint ↔ DES

Khớp PO §5 / DA controlHint — UNCLEAR=**none**. openAppSettings · version · privacy · offline nav = **cùng slug / reuse** (`GAP-MOB-ACT-07`).

## Bind (Design note · SA xác nhận no API)

| uiField | Wire |
|---------|------|
| rowLocation / rowCamera | OS auth status · write = openAppSettings |
| rowNotifyOs / btnOpenOs | openAppSettings |
| appVersion | Bundle / BuildConfig · readonly |
| rowPrivacy | `LinmCopy` `home.privacy.*` |
| rowOffline | nav `patrol-offline` |
| toastOsFail | after OS open fail |

**Cấm** invent `api/v1/me-settings` / `preferences` · `MeSettingsController` · ERP.* · `mfeStdUrl`.

## Out of pack

| Item | Owner |
|------|-------|
| `me-profile` / `login-logout` / `ops` / `feedback` | sibling |
| Request GPS/Camera permission | attendance/patrol |
| Biometric rows | **DEFER** P1 |
| Preference sync server | **P1 skip** · **cấm invent** |
| Privacy HTTPS landing | GAP-MOB-MESET-PRIVACY-01 · khi khách giao |
| Bottom-sheet chrome | **cấm** (surface = screen) |

## Gates

| Gate | Artifact | Result |
|------|----------|--------|
| `/mobile-ui-ux-analy` | `ui/ux-analy.md` §1–§9 | **PASS** |
| html-to-native-map | `ui/html-to-native-map.md` | **PASS** |
| `/review-demo-design-mobile` | `ui/review/demo-parity.md` | Must=**0** |
| `kit_missing_confirm` | — | **N/A** |
| `design_confirm` | autoApprove=ON | **approve** |

## design_confirm

**approve** · autoApprove=ON · dual `ios/`+`android/` · ux-analy §1–§9 · demo-parity Must=0 · packKind=`sheet` · surface screen · local/OS only · hash skip (no re-scan) · GAP-MOB-MESET-DEMO-01 closed.

## Version meta

| Field | Value |
|-------|-------|
| skillId | agent-design-mobile |
| skillVersion | 2026.08.25.01 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.31.2 |
| rulesVersion | 2026.08.31.2 |
| generatedAt | 2026-08-30T20:25:00.000Z |
| versionGate | rechecked |
| contentHash | sha256:me-settings-control-hint-20260830 |
| realDataHash | sha256:me-settings-real-data-20260830 |
| designContentHash | sha256:me-settings-design-20260830 |
| poContentHash | sha256:me-settings-po-requirement-20260830 |
| demoHash | sha256:me-settings-sc-me-settings-20260830 |
| ctxHash | sha256:me-settings-ctx-20260830 |
| bffContentHash | sha256:me-settings-bff-local-only-20260830 |
| actionTreeHash | sha256:me-settings-action-tree-20260830 |
| taskId | `task_d7095795` |

---
<!-- Version meta: skillId=agent-design-mobile skillVersion=2026.08.25.01 schemaVersion=1 workflowVersion=2026.08.31.2 rulesVersion=2026.08.31.2 versionGate=rechecked -->
