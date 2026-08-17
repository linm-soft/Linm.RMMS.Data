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
| updatedAt | `2026-08-17T15:20:00.000Z` |
| skill | `/gen-mobile-design` |

## Lock

| agent | scope | id | at |
|-------|-------|-----|-----|
| gen-mobile-design | mobile-p1 dual mock | design_mobile_p1_both | 2026-08-16T00:45:00.000Z |

## Pipeline

| Step | Agent | Artifact | Status |
|------|-------|----------|--------|
| 0 | gate | product_root · p1_pack · full · both | **done** |
| 1–2 | analy | mobile/context.md | **done** |
| 3–6 | design | ui/design.md + ios + android | **await_confirm** |
| 2.2+ | sa… | `/agent-qldb-workflow-mobile` | blocked until design_confirm |

## Prototype

| | |
|--|--|
| iOS | `specs/mobile-p1/ui/prototype/ios/index.html` |
| Android | `specs/mobile-p1/ui/prototype/android/index.html` |
| Logo | `logo/rmms.png` → `ui/prototype/assets/rmms.png` · login brand |
| Skip bio | `DES-MOB-LOGIN-SKIP-BIO` · Face ID / Touch ID → vào app (không nhập MK) |
| OMS | `specs/mobile-p1/ui/prototype/map-oms.js` |
| Chụp + GPS | Overlay `DES-MOB-PHOTO-GPS` + pin `DES-MOB-GPS-PIN` · chip review **Chụp + GPS** |
| **reviewUrl iOS** | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/mobile-p1/ui/prototype/ios/index.html` |
| **reviewUrl Android** | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/mobile-p1/ui/prototype/android/index.html` |
| serve | `npx --yes serve -p 5198 "D:/AI-QLBD/Linm.RMMS.Data/specs/mobile-p1/ui/prototype"` → `/ios/` · `/android/` |

## Confirms

| Gate | Value |
|------|-------|
| design_confirm | pending |
| ui_repo_confirm | pending (SwiftUI + Compose · cấm Flutter/KMP) |
