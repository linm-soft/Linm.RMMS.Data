# Prototype — patrol-pin

| Field | Value |
|-------|-------|
| packKind | `sheet` |
| design status | **confirmed** (autoApprove=ON · `task_463367a8`) |
| SSOT demo | `specs/mobile-p1/ui/prototype/{ios,android}/index.html` · `DES-MOB-CI-PIN-HERE` · `DES-MOB-GPS-DENY` · `pinHereCheckin()` |
| Title | Ghim vị trí hiện tại |

## Paths (board prefix — REQUIRED)

| Platform | File |
|----------|------|
| iOS | `ui/prototype/ios/index.html` |
| Android | `ui/prototype/android/index.html` |

**Cấm** chỉ một `index.html` gốc (`GAP-MOB-DES-PFX-01`).

## reviewUrl

- iOS hub: `file:///Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/patrol-pin/ui/prototype/ios/index.html`
- iOS map: `…/ios/index.html?surface=map`
- Android hub: `file:///Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/patrol-pin/ui/prototype/android/index.html`
- Android map: `…/android/index.html?surface=map`

States: `?deny=1` · `?timeout=1`

## Out of pack

Form **Ghi điểm tuần** → sibling `patrol-checkin`. **Cấm** `mfeStdUrl` / watermark Gói / device label.
