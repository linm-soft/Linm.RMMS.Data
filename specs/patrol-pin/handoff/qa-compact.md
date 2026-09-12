# Handoff compact — qa

schemaVersion: 1
feature: patrol-pin
packKind: sheet
role: qa
status: done
skillVersion: 2026.08.25.01
writtenAt: 2026-09-12T12:29:00.000Z
taskId: task_9a00d2c5
slash: /agent-qa-mobile
gap: none
changeScope: edit_page

## Decisions
- e2eQa: ON · yarn e2e-qa-mobile **PASS** · ok=true
- cases: A11-LAUNCH,A10-BFF,A9-LOGIN,A3-CORE,P6-CORE,P6-CORE-2 **PASS**
- visual: Aligned · Must **0** · Read A3/P6/P6-2 vs demo
- align_confirm: approve (autoApprove=ON)
- persist: real `#sheet-handoff-checkin` · pin **cấm** auto-POST · sibling check-in
- android login flow: Back+scroll btn-login (IME)
- mfeStdUrl: none · cấm start:std · cấm kill worker
- BFF dotnet build PASS · API :5101 · BFF :5202
- open questions: none
- next: `/agent-review-mobile` · roleOnly stop (GAP-PKT-ROLE-01)

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| DES-MOB-CI-PIN-HERE | Ghim vị trí | Primary+mappin | hub A3/P6 · map P6-2 |
| DES-MOB-GPS-DENY | GPS deny | Modal | code path |
| DES-MOB-HANDOFF-CHECKIN | Ghi điểm tuần | Sheet | post-pin payload |
| toast-pin-ok | Pin success | LinmToast | trước handoff |

## Screens / zones (ids only)
- #sc-patrol-home · #sc-patrol-map · #btn-pin-here · #sheet-handoff-checkin
- PNG: qa/screens/{A11,A9,A3,P6,P6-2}.png · store: qa/store/patrol-pin/
- T-QA: store A3/A9/A10/A11 · P6×2 · align Must 0

## API / tasks (ids only)
- GET mobile-bff/api/v1/patrol/sessions · A10-BFF PASS
- POST …/check-ins sibling only · T-BE N/A

## Full paths (Read only if needed)
- scenarios: /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/patrol-pin/qa/scenarios.md
- CAPTURE: /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/patrol-pin/qa/store/patrol-pin/CAPTURE.md
- manifest: /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/patrol-pin/qa/store/patrol-pin/manifest.json
- align: /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/patrol-pin/ui/review/align-ux.md
- bugs: /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/patrol-pin/qa/bugs/patrol-pin.md
- prior-dev: /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/patrol-pin/handoff/dev-compact.md
