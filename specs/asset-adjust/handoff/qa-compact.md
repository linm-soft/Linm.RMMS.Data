# Handoff compact — qa

schemaVersion: 1
feature: asset-adjust
packKind: screen
role: qa
status: failed
skillVersion: 2026.08.25.01
writtenAt: 2026-09-01T16:06:00.000Z
taskId: task_385e599f
qaFailFrom: task_74581051
e2eQa: ON
verdict: fail

## Decisions
- changeScope: new_page (prior) · this turn = **re-QA** after Dev tenant harden
- CLI `yarn e2e-qa-mobile` · cases A11/A10/A9/A3/P6/P6-2 · **ok:true** · dest iPhone 17 Pro Max · Pixel 2
- Visual Read CORE: iOS **live** · Android **LoadFailed** → **GAP-QA-REAL-01 OPEN**
- OfflineDemo `TS-20260810-*` **gone** (LoadFailed path) · live Android **still fail**
- autoApprove: ON · board **qa_fail_rollback** · **cấm** completed / phase=review
- open questions: Android GET throw root còn · DEFER GAP-MOB-SEARCH-PLACEHOLDER

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| GAP-QA-REAL-01 | Android list real | — | Must · P6 empty+toast · A3 live OK |
| GAP-MOB-SEARCH-PLACEHOLDER | Search | SearchInput | Should · DEFER kit |

## Screens / zones (ids only)
- `#sc-asset-adjust` · `#tile-adjust` · `#md-asset-remove` · search · row Sửa/Bớt
- evidence: `qa/screens/{A11,A9,A3,P6,P6-CORE-2}.png` · store `qa/store/asset-adjust/`
- reviewUrl= `ui/review/align-ux.md` · peerStdUrl= —

## API / tasks (ids only)
- GET `asset/road-assets` · DELETE soft · Bearer + `X-Company-Id`
- API `:5111` · BFF `:5202` · A10 PASS · iOS bind live · Android LoadFailed
- next: `qa_fail_rollback` → Dev `qa_fix_plan` · **cấm** QA Write native

## UNCLEAR
- none — visual evidence đủ cho FAIL

## Full paths (Read only if needed)
- scenarios: `specs/asset-adjust/qa/scenarios.md`
- bugs: `specs/asset-adjust/qa/bugs/asset-adjust.md`
- align: `specs/asset-adjust/ui/review/align-ux.md`
- CAPTURE: `specs/asset-adjust/qa/store/asset-adjust/CAPTURE.md`
- STATUS: `specs/asset-adjust/STATUS.md`
