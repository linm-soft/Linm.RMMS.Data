# Handoff compact — dev

schemaVersion: 1
feature: asset-adjust
packKind: screen
role: dev
status: await_confirm
skillVersion: 2026.08.25.01
writtenAt: 2026-09-01T09:45:09.000Z
qaFixPhase: plan
taskId: task_c02a17d5
qaFailFrom: task_74581051

## Decisions
- changeScope: new_page (prior shipped) · this turn = **qa-fix-plan only**
- formPattern: N/A (list + SoftDelete modal)
- mfeStdUrl: — (native · **cấm**)
- build PASS: N/A plan-only · implement phải VERIFY iOS xcodegen+iPhone 17 Pro · Android assembleDebug · BFF dotnet
- open questions: none · board **`qa_fix_plan`** required (**cấm** autoApprove skip)
- debt: GAP-MOB-SEARCH-PLACEHOLDER DEFER kit

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| GAP-QA-REAL-01 | Android list real | — | P6 OfflineDemo+toast · fix after Approve |
| GAP-MOB-SEARCH-PLACEHOLDER | Search | SearchInput | DEFER kit |

## Screens / zones (ids only)
- `#sc-asset-adjust` · `#tile-adjust` · `#md-asset-remove` · search · row Sửa/Bớt
- reviewUrl= `ui/review/align-ux.md` · peerStdUrl= —

## API / tasks (ids only)
- GET `asset/road-assets` · DELETE soft `asset/road-assets/{id}` · Bearer + `X-Company-Id`
- T-IOS-ASSET-ADJUST · T-AND-ASSET-ADJUST (prior) · implement = Plan §1–6
- Step 4b: N/A

## UNCLEAR
- none — hypothesis: Android throw/missing company header vs iOS live

## Full paths (Read only if needed)
- plan: `specs/asset-adjust/implement/asset-adjust-qa-fix-plan.md`
- qa: `specs/asset-adjust/qa/scenarios.md` · `qa/bugs/asset-adjust.md`
- implement prior: `implement/ios.md` · `implement/android.md`
- STATUS: `specs/asset-adjust/STATUS.md`
