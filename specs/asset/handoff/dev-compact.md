# Handoff compact — dev

schemaVersion: 1
feature: asset
packKind: list
role: dev
status: done
skillVersion: 2026.08.29.1
writtenAt: 2026-09-01T16:15:30.000Z
taskId: task_fa241430

## Decisions
- changeScope: edit_page
- formPattern: N/A (list)
- mode: qaFixPhase=implement · qa_fix_plan **approved** (autopilot)
- mfeStdUrl: **cấm** mobile AC
- open questions: none
- root-cause fix: Android SideEffect handlers + LaunchedEffect(Unit) Appear
- Step 4b: N/A · reuse GET road-assets

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| appear | Appear/fetch | List | fixed Android |
| rows | live rows | ListRow | EmptyChrome only real empty |
| ios | list | List | no code delta |

## Screens / zones (ids only)
- `#sc-asset-list` · DES-MOB-ASSET-LIST
- closed wire: STORE-03 · AND-FETCH-01 · UX-DUAL-01

## API / tasks (ids only)
- GET `mobile-bff/api/v1/asset/road-assets` — dual live
- T-AND-LIST-01 qa-fix **done** · T-QA-01 pending re-run
- task_7e0b31e2 plan approved · task_fa241430 implement done

## VERIFY
- iOS xcodegen + xcodebuild iPhone 17 Pro: **PASS**
- Android assembleDebug: **PASS**
- Mobile.Bff dotnet build: **PASS**
- e2e: **cấm** Dev · next `/agent-qa-mobile`

## Debt
- auth/profile Android → web-bff 500 (note · non-block)
- P2 filter toolbar · Review Should badge/search-ph

## UNCLEAR
- none

## Full paths (Read only if needed)
- plan: specs/asset/implement/asset-qa-fix-plan.md
- ios: specs/asset/implement/ios.md
- android: specs/asset/implement/android.md
- STATUS: specs/asset/STATUS.md
