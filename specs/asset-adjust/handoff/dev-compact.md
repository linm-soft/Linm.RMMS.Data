# Handoff compact — dev

schemaVersion: 1
feature: asset-adjust
packKind: screen
role: dev
status: confirmed
skillVersion: 2026.08.25.01
writtenAt: 2026-09-01T16:05:00.000Z
qaFixPhase: implement
taskId: task_d8ada3bb
qaFailFrom: task_74581051
planTask: task_c02a17d5

## Decisions
- changeScope: new_page (prior) · this turn = **qa-fix implement** Plan §1–6
- formPattern: N/A (list + SoftDelete modal)
- mfeStdUrl: — (native · **cấm**)
- build PASS: iOS xcodegen+iPhone 17 Pro · Android assembleDebug · BFF dotnet — **PASS**
- Step 4b: N/A (SA+TL Signed · SoftDelete+GetList reuse)
- open questions: none · GAP-QA-REAL-01 **code closed** · await re-QA
- debt: GAP-MOB-SEARCH-PLACEHOLDER DEFER kit

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| GAP-QA-REAL-01 | Android list real | — | tenant harden dual · LoadFailed keep fail-only |
| GAP-MOB-SEARCH-PLACEHOLDER | Search | SearchInput | DEFER kit |

## Screens / zones (ids only)
- `#sc-asset-adjust` · `#tile-adjust` · `#md-asset-remove` · search · row Sửa/Bớt
- reviewUrl= `ui/review/align-ux.md` · peerStdUrl= —

## API / tasks (ids only)
- GET `asset/road-assets` · DELETE soft `asset/road-assets/{id}` · Bearer + **`X-Company-Id: LINM`**
- Fix: AuthInterceptor/ApiClient JWT fallback · AppSession/AppContainer hydrate applyCompanyId · TokenAuthenticator/ApiClient refresh re-apply
- T-IOS-ASSET-ADJUST · T-AND-ASSET-ADJUST · Step 4b N/A

## UNCLEAR
- none — BFF probe: no company → non-LINM rows; `X-Company-Id: LINM` → `KM-QL1-NA-*`

## Full paths (Read only if needed)
- plan: `specs/asset-adjust/implement/asset-adjust-qa-fix-plan.md`
- implement: `implement/ios.md` · `implement/android.md`
- STATUS: `specs/asset-adjust/STATUS.md`
