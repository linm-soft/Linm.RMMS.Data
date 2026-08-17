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
| updatedAt | `2026-08-18T01:25:00.000Z` |
| skill | `/agent-design` · IA v3.3 form sự cố |
| iaVersion | `3.3` (Thông tin tài sản · chọn TS → form sự cố) |

## Lock

| agent | scope | id | at |
|-------|-------|-----|-----|
| agent-design | mobile-p1 IA v3.3 · Thông tin tài sản + form sự cố | design_mobile_p1_ia_v33 | 2026-08-18T01:25:00.000Z |
| agent-design | workflow-cam-patrol animation | design_wf_cam_patrol | 2026-08-18T01:35:00.000Z |

## Pipeline

| Step | Agent | Artifact | Status |
|------|-------|----------|--------|
| 0 | gate | product_root · p1_pack · full · both | **done** |
| 1–2 | analy | mobile/context.md | **done** |
| 3–6 | design | ui/design.md + ios + android · IA v3.3 | **await_confirm** |
| 2.2+ | sa… | `/agent-qldb-workflow-mobile` | sau `design_confirm` |

## Prototype

| | |
|--|--|
| iOS | `specs/mobile-p1/ui/prototype/ios/index.html` |
| Android | `specs/mobile-p1/ui/prototype/android/index.html` |
| Tổng quan | `specs/mobile-p1/ui/prototype/index.html` |
| Logo | `logo/rmms.png` → `ui/prototype/assets/rmms.png` · đăng nhập |
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
