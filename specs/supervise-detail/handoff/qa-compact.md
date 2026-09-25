# Handoff compact — qa

schemaVersion: 1
feature: supervise-detail
packKind: screen
role: qa
status: done
skillVersion: 2026.08.19.26
writtenAt: 2026-09-20T00:50:00.000Z

## Decisions
- changeScope: edit_page
- formPattern: view-only detail
- verdict: pass · phase=review · cấm done
- e2e: yarn e2e-qa-mobile ok:true · ios_test_phase=phase1_iphone · A4-IPAD DEFER
- align: A3+P6 Aligned · Must 0 · align_confirm approve
- open questions: none
- mfeStdUrl: —

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| T-QA-A3 | Chi tiết iPhone | TopBar+hero+rows+CTA | PASS · 1320×2868 |
| T-QA-P6 | Chi tiết Android | cùng zone | PASS · 1080×1920 · fold CTA = P6-CORE-2 |
| T-QA-TAB-01 | Tab Trang Chủ | index home | selected trên CORE |
| T-IOS-SUP-DETAIL | iOS detail | — | covered by A3 |
| T-AND-SUP-DETAIL | Android detail | — | covered by P6 |

## Screens / zones (ids only)
- `#sc-supervise` → `#sc-supervise-detail` · `DES-MOB-SUP-DETAIL`
- reviewUrl= specs/supervise-detail/ui/review/align-ux.md · peerStdUrl= —

## API / tasks (ids only)
- GET patrol/attendance-logs · GET patrol/attendance-logs/{id}
- live card 57ce2700-4eea-4ab7-b5a4-1e3b03599165 · Nguyễn Văn A · CC-DEMO-202609-001
- PNG: qa/screens/A11-LAUNCH.png · A9-LOGIN.png · A3-CORE.png · P6-CORE.png · P6-CORE-2.png

## UNCLEAR
- none

## Full paths (Read only if needed)
- qa: /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/supervise-detail/qa/scenarios.md
- store: /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/supervise-detail/qa/store/supervise-detail/CAPTURE.md
- align: /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/supervise-detail/ui/review/align-ux.md
