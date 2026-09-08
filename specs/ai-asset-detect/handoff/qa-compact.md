# Handoff compact — qa

schemaVersion: 1
feature: ai-asset-detect
packKind: list
featureClass: ai
role: qa
status: blocked
skillVersion: 2026.09.05.03
writtenAt: 2026-09-06T17:39:00.000Z
changeScope: edit_page
taskId: task_60644689
route_confirm: route_a
verdict: FAIL

## Decisions
- changeScope: edit_page · e2eQa=ON · method=e2e runtime start:std+docker+playwright
- formPattern: Kind D Slideout · Miss/Confirm/Dismiss · Map Kind F
- mfe: Linm.Web.RMMS.AiVision · be: Linm.RMMS.WebService (cấm ERP.*)
- verdict: **FAIL** · GAP-QA-STD-01 P0 · queue failed · qa_fail_rollback
- mfeStdUrl `/ai-vision/ai-asset-detect` → NotFound · live only `/ai-kd/phat-hien-ts`
- testid live: `rmms-ai-asset-detect-list-page`
- PNG: S0/S1/QA-20 FAIL · S0-vn PASS (diagnostic)
- yarn e2e-qa npx install flake → capture via local playwright+chromium-1187
- open questions: Dev add Route alias for mfeStdUrl · re-run QA

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| missOnly | Chỉ mất | Checkbox | visible on VN route |
| imageFileId | Frame | FileUpload | blocked e2e std |
| expectedAssetId | TS kỳ vọng | SearchInput | blocked |

## Screens / zones (ids only)
- S-LIST · S-FORM · S-MOD-* · S-MAP · S-LEAVE
- mfeStdUrl=http://localhost:9303/ai-vision/ai-asset-detect (**404**)
- vn=http://localhost:9303/ai-kd/phat-hien-ts (**PASS** S0-vn)
- PNG: specs/ai-asset-detect/qa/screens/{S0,S1,QA-20,S0-vn}.png

## API / tasks (ids only)
- T-QA-CRUD/FORM/FILTER×2/AI: **blocked** by STD-01
- next: qa_fail_rollback → Dev route fix → re `/agent-qa`

## UNCLEAR
- none

## Full paths (Read only if needed)
- scenarios: D:/AI-QLBD/Linm.RMMS.Data/specs/ai-asset-detect/qa/scenarios.md
- manifest: D:/AI-QLBD/Linm.RMMS.Data/specs/ai-asset-detect/qa/screens/manifest.json
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/ai-asset-detect/STATUS.md
