# STATUS — mobile-p1

| Field | Value |
|-------|-------|
| feature | `mobile-p1` |
| phase | `design` |
| status | `await_confirm` |
| changeScope | `new_mobile_design` |
| packKind | `mobile` |
| runMode | `design_only` |
| platforms | ios + android |
| genMode | `full` |
| brief | `D:/AI-QLBD/Linm.RMMS.Data/map-feature/mobile-design-brief.md` |
| context | `specs/mobile-p1/mobile/context.md` · 12 slug P1 |
| mfe / app | **TBD** — `ui_repo_confirm` (SwiftUI + Compose) |
| backend | same BFF Web · `web-bff/api/v1/*` |
| updatedAt | `2026-08-18T23:20:00.000Z` |
| skill | `/scan-and-implement-kit-control` · kit_scan all_ab |
| iaVersion | `3.3` (Thông tin tài sản · chọn TS → form sự cố) |

## Lock

| agent | scope | id | at |
|-------|-------|-----|-----|
| agent-design | mobile-p1 IA v3.3 · Thông tin tài sản + form sự cố | design_mobile_p1_ia_v33 | 2026-08-18T01:25:00.000Z |
| agent-design | workflow-cam-patrol animation | design_wf_cam_patrol | 2026-08-18T01:35:00.000Z |
| agent-design-mobile | kit chrome extract (no RMMS name) · chip/seg/badge/kpi/hub/fab | kit_extract_p1 | 2026-08-18 |
| agent-design-mobile | kit visual parity · same size/style iOS↔Android | kit_visual_parity | 2026-08-18 |
| agent-design-mobile | header chrome · profile + status capsule + notify count | kit_header_chrome | 2026-08-18 |
| agent-design-mobile | GPS on/off + tín hiệu icons (no Location/Reachability in kit) | kit_status_icons | 2026-08-18 |
| edit-mobile-kit-control | Signal wifi glyph 3-cung + Notify badge 16/ring (iOS+Android) | kit_control_signal_notify | 2026-08-18 |
| edit-mobile-kit-control | Sheet size + chrome Huỷ/Lưu + footer main/second fullWidth\|inline | kit_control_sheet | 2026-08-18 |
| build-mobile-kit-to-app | local_both · iOS BUILD SUCCEEDED · Android assembleDebug | kit_patched | 2026-08-18 |
| agent-design | Notify count badge 16→22 · font 11 · proto iOS+Android + kit dual | design_notify_badge_22 | 2026-08-18 |
| scan-and-implement-kit-control | kit_scan all_ab · analy only · **cấm** design_confirm | kit_scan_p1 | 2026-08-18T23:20:00.000Z |
| build-mobile-kit-to-app | local_both · iOS BUILD SUCCEEDED · Android assembleDebug | kit_scan_patched | 2026-08-18T23:20:00.000Z |

## Pipeline

| Step | Agent | Artifact | Status |
|------|-------|----------|--------|
| 0 | gate | product_root · p1_pack · full · both | **done** |
| 1–2 | analy | mobile/context.md | **done** |
| 3–6 | design | ui/design.md + ios + android · IA v3.3 | **await_confirm** |
| kit_scan | scan-and-implement-kit-control | ui/kit-scan.md · ux-analy.md · 8 kit_new | **kit_scan** |
| 2.2+ | sa… | `/agent-qldb-workflow-mobile` | sau `design_confirm` |

## Prototype

| | |
|--|--|
| iOS | `specs/mobile-p1/ui/prototype/ios/index.html` |
| Android | `specs/mobile-p1/ui/prototype/android/index.html` |
| Tổng quan | `specs/mobile-p1/ui/prototype/index.html` |
| Logo | `logo/mobile` AppIcon 1024 → `ui/prototype/assets/app-logo.png` · đăng nhập |
| Mock địa bàn | Khu IV (`VP-IV.1`) · QL.1 Km 1551+200–1561+134 · Xuân Hải / Phước Dinh · seed `khu-iv/map-seed.json` |
| Bản đồ | `specs/mobile-p1/ui/prototype/map-oms.js` |
| Chụp + GPS | Overlay `DES-MOB-PHOTO-GPS` + pin `DES-MOB-GPS-PIN` · chip review **Chụp + GPS** |
| **reviewUrl tổng quan** | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/mobile-p1/ui/prototype/index.html` |
| **reviewUrl iOS** | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/mobile-p1/ui/prototype/ios/index.html` |
| **reviewUrl Android** | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/mobile-p1/ui/prototype/android/index.html` |
| **reviewUrl workflow** | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/mobile-p1/ui/prototype/workflow-cam-patrol/index.html` |
| serve | `npx --yes serve -p 5198 "D:/AI-QLBD/Linm.RMMS.Data/specs/mobile-p1/ui/prototype"` → `/` · `/ios/` · `/android/` · `/workflow-cam-patrol/` |

## Confirms

| Gate | Value |
|------|-------|
| design_confirm | pending IA v3.3 (form sự cố) |
| design_confirm_wf_anim | **approve** · workflow-cam-patrol |
| ui_repo_confirm | pending (SwiftUI + Compose · cấm Flutter/KMP) |
