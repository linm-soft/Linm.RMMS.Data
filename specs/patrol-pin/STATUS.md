# STATUS — patrol-pin

| Field | Value |
|-------|-------|
| feature | `patrol-pin` |
| phase | `review` |
| status | `in_progress` |
| packKind | `sheet` |
| stack | `native_dual` |
| demo | /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/patrol-pin/ui/prototype/ios/index.html |
| context | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/docs/context/features/patrol-pin.md` |
| mfe | — (native · **cấm** mfeStdUrl) |
| mfeStdRoute | `/patrol-pin` |
| mfeStdUrl | `http://localhost:9301/patrol-pin` |
| ios | `Linm.RMMS.Mobile.iOS` · e2e-qa-mobile sim 6.9" |
| android | `Linm.RMMS.Mobile.Android` · e2e-qa-mobile emulator |
| bff | `Linm.RMMS.Mobile.Bff` |
| backend | `Linm.RMMS.WebService` · DOMAIN-MAP — **cấm ERP.*** |
| updatedAt | `2026-08-21T04:01:18.524Z` |
| designConfirm | **approved** · autoApprove=ON · `task_463367a8` |
| solutionConfirm | **approved** · autoApprove=ON · `task_688fe507` |
| route_confirm | **route_a** · autoApprove=ON · `task_018ad2c4` |
| ios_repo_confirm | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.iOS` · reuse |
| android_repo_confirm | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Android` · reuse |
| ios_test_phase | **phase1_iphone** · autoApprove=ON · dest **iPhone 17 Pro Max** · A4-IPAD DEFER |
| align_confirm | **approve** · autoApprove=ON · Must **0** · `ui/review/align-ux.md` |

## Lock

| agent | scope | id | at |
|-------|-------|-----|-----|
| agent-review-mobile | review | task_ff84d158 | 2026-08-21T04:01:52.000Z |

## Pipeline

| Step | Agent | Artifact | Status |
|------|-------|----------|--------|
| 0 | data-analy | _data-analy/patrol-pin-*.md | **confirmed** |
| 1 | po | po/requirement.md | **confirmed** |
| 2.1 | design | ui/design.md · ui/ux-analy.md · prototype dual · demo-parity | **confirmed** |
| 2.2 | sa | be/solution-discovery.md | **confirmed** |
| 3 | team-lead | task/patrol-pin.md | **confirmed** |
| 4 | dev | implement/ios.md · implement/android.md | **confirmed** |
| 5 | qa | qa/scenarios.md · qa/store/patrol-pin/CAPTURE.md · ui/review/align-ux.md | **confirmed** |
| 6 | review | review/findings.md | **in_progress** |
## Tasks

| id | page | role | deps | status | notes |
|----|------|------|------|--------|-------|
| task_5b298c0a | patrol-pin | full_pipeline | — | completed | GPS pin hub+map · deny modal · BFF GET sessions only |
| task_6bd56781 | patrol-pin | po | data_analy confirmed | completed | roleOnly=po · autoApprove · requirement confirmed |
| task_19519750 | patrol-pin | design | po confirmed | superseded | superseded by task_463367a8 |
| task_463367a8 | patrol-pin | design | po confirmed | completed | roleOnly=design · dual proto + ux-analy + demo-parity Must=0 · design_confirm approve |
| task_688fe507 | patrol-pin | sa | design confirmed | completed | roleOnly=sa · solution_confirm approve · GET sessions only · Step 4b N/A · VERIFY Dev gate role sau |
| task_018ad2c4 | patrol-pin | team_lead | sa confirmed | completed | roleOnly=team_lead · route_a · T-IOS/T-AND · T-BE n/a · kit_skip · chain Dev **không** |
| task_5bb83877 | patrol-pin | dev | TL confirmed | completed | roleOnly=dev · dual iOS+Android · VERIFY PASS · Step 4b N/A |
| task_3a68f8d3 | patrol-pin | qa | Dev confirmed | completed | roleOnly=qa · e2eQa ON · yarn e2e-qa-mobile PASS · align Must 0 · VERIFY PASS |

## Blockers / open questions

-

## Links
- mfeStdUrl: `http://localhost:9301/patrol-pin`
- mfeStdRoute: `/patrol-pin`

- data-analy → po → ui → be → task → implement → qa → review
- native: e2eQa ON → `yarn e2e-qa-mobile` — **cấm** mfeStdUrl
- VERIFY QA `2026-08-21T04:00:00Z`: iOS xcodegen+xcodebuild **iPhone 17 Pro** **PASS** · Android `assembleDebug` **PASS** · BFF `dotnet build` **PASS** · Step 4b **N/A**
- E2E: A11/A9/A3/P6/P6-2 **PASS** · px 1320×2868 (iOS 6.9") · 1080×1920 (Play) · Maestro ON
- Align: `ui/review/align-ux.md` · Must **0** · Next `/agent-review-mobile`
- Design reviewUrl: `file://…/prototype/ios/index.html` · `file://…/prototype/android/index.html` (+ `?surface=map` · `?deny=1` · `?timeout=1`)
- SA: `be/solution-discovery.md` · BFF `GET patrol/sessions` only · Step 4b **N/A**
- TL: `task/patrol-pin.md` · `T-IOS-PAT-PIN` · `T-AND-PAT-PIN` · `T-BE-PAT-PIN` n/a
- Dev: `implement/ios.md` · `implement/android.md`
- QA: `qa/scenarios.md` · `qa/e2e/{ios,android}.yaml` · `qa/bugs/patrol-pin.md` CLOSED
