# Handoff compact — dev

schemaVersion: 1
feature: asset-detail
packKind: screen
role: dev
status: await_confirm
skillVersion: 2026.08.25.01
writtenAt: 2026-09-01T09:52:57.000Z
qaFixPhase: plan
taskId: task_24109163
qaFailFrom: task_cbda6a54

## Decisions
- changeScope: new_page (prior shipped) · this turn = **qa-fix-plan only**
- formPattern: N/A (detail screen · GET by id)
- mfeStdUrl: — (native · **cấm**)
- build PASS: N/A plan-only · implement phải VERIFY iOS xcodegen+iPhone 17 Pro · Android assembleDebug · BFF dotnet
- open questions: none · board **`qa_fix_plan`** required (**cấm** autoApprove skip)
- debt: GAP-MOB-E2E-VIS-01 re-QA after implement · gis-map CTA toast P1 OK

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| GAP-MOB-ASSET-DET-NAV-02 | iOS nav EmptyChrome | — | isPresented+appear race · fix after Approve |
| GAP-QA-REAL-01 | live GET by id | — | CORE bind live · cấm demo |
| GAP-QA-STORE-01 | Maestro iOS | — | EmptyChrome after live row |
| GAP-QA-STORE-03 | Maestro Android | — | no live KM-QL1 row |
| GAP-MOB-E2E-VIS-01 | visual harvest | — | re-QA note |

## Screens / zones (ids only)
- `#sc-asset-detail` · `#sc-asset-list` · `row-asset-*` · `label-code` · `value-code` · `btn-pin-map` · `empty-not-found`
- reviewUrl= `ui/review/align-ux.md` · peerStdUrl= —

## API / tasks (ids only)
- GET `asset/road-assets` · GET `asset/road-assets/{id}` · Bearer + `X-Company-Id: LINM`
- T-IOS-AL-01 · T-IOS-AD-01 · T-AND-AL-01 · T-AND-AD-01 (prior) · implement = Plan §1–6
- Step 4b: N/A

## UNCLEAR
- none — hypothesis: iOS appear("")/404 tenant · Android list/company before Maestro assert

## Full paths (Read only if needed)
- plan: `specs/asset-detail/implement/asset-detail-qa-fix-plan.md`
- qa: `specs/asset-detail/qa/scenarios.md` · `qa/bugs/asset-detail.md`
- implement prior: `implement/ios.md` · `implement/android.md`
- STATUS: `specs/asset-detail/STATUS.md`
