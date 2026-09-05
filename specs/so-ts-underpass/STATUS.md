# STATUS — so-ts-underpass

| Field | Value |
|-------|-------|
| feature | `so-ts-underpass` |
| phase | `dev` |
| status | `await_confirm` |
| packKind | `list` |
| qaFixPhase | **plan** · `await_confirm` `qa_fix_plan` · task `task_9c2ed21d` |
| demo | D:/AI-QLBD/Linm.RMMS.Demo/src/demo/features/asset-demo.html |
| context | `D:/AI-QLBD/Linm.RMMS.Data/docs/context/features/so-ts-underpass.md` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| mfeStdRoute | `/so-ts-underpass` |
| mfeStdUrl | `http://localhost:9301/so-ts-underpass` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · DOMAIN-MAP — **cấm ERP.*** |
| updatedAt | `2026-09-01T13:23:14.412Z` |
| contentHash | `sha256:e0d055aba3a52b289144ba966e1c00448c1f54daf105b50bef00004d8355e2bd` |
| dataAnaly | `done` · compact `handoff/data_analy-compact.md` |
| po | `confirmed` · `po/requirement.md` · compact `handoff/po-compact.md` |
| design | `confirmed` · `ui/design.md` · prototype + reviewUrl · compact `handoff/design-compact.md` |
| sa | `confirmed` · `be/solution-discovery.md` · compact `handoff/sa-compact.md` · solution_confirm=approve |
| team_lead | `confirmed` · `task/so-ts-underpass.md` · compact `handoff/team_lead-compact.md` · route_confirm=`route_a` |
| dev | `done` · prior `implement/so-ts-underpass.md` · **qa-fix-plan** `implement/so-ts-underpass-qa-fix-plan.md` · compact `handoff/dev-compact.md` |
| qa | `failed` · `task_bdd72a01` · scenarios **draft** · screens present · await re-QA after plan approve |

## Lock

| agent | scope | id | at |
|-------|-------|-----|-----|
| — | — | — | released after plan task complete |

## Pipeline

| Step | Agent | Artifact | Status |
|------|-------|----------|--------|
| 0 | data-analy | _data-analy/features/so-ts-underpass-control-hint.md · so-ts-underpass-real-data.md | **confirmed** |
| 1 | po | po/requirement.md | **confirmed** |
| 2.1 | design | ui/design.md + prototype + reviewUrl | **confirmed** |
| 2.2 | sa | be/solution-discovery.md | **confirmed** |
| 3 | team-lead | task/so-ts-underpass.md | **confirmed** |
| 4 | dev | implement/so-ts-underpass.md | **await_confirm** |
| 4q | dev | implement/so-ts-underpass-qa-fix-plan.md | **await_confirm** · plan `task_9c2ed21d` |
| 5 | qa | qa/scenarios.md | **blocked** |
| 6 | review | review/findings.md | **pending** |
## Tasks

| id | page | role | deps | status | notes |
|----|------|------|------|--------|-------|
| task_3deb2a56 | so-ts-underpass | data_analy | — | **done** | changeScope=new_page · packKind=list · handoff PO |
| task_7eb8c843 | so-ts-underpass | po | data_analy | **done** | packKind=list · changeScope=new_page · handoff Design |
| task_bee06bee | so-ts-underpass | design | po | **done** | Kind B · full-page 5 cols · design_confirm=approve |
| task_f5f39e3e | so-ts-underpass | sa | design | **done** | solution_confirm=approve · dumpSpecs P1 · CC- |
| task_38aaab50 | so-ts-underpass | team_lead | sa | **done** | route_confirm=route_a · T-* pack |
| task_5069938c | so-ts-underpass | dev | team_lead | **done** | UNDERPASS profile · build PASS · handoff QA |
| task_bdd72a01 | so-ts-underpass | qa | task_5069938c | **failed** | worker exception active-run · scenarios draft · screens S0/S1/QA-20 present · qa_fail_rollback approved |
| task_9c2ed21d | so-ts-underpass | dev | task_bdd72a01 | **done** | qaFailFix=1 · qaFixPhase=**plan** · `so-ts-underpass-qa-fix-plan.md` · **cấm** code trước Approve |

## Blockers / open questions

- **qa_fix_plan** `await_confirm` — board Approve rồi mới `qaFixPhase=implement`
- GAP-QA-WORKER-01 · GAP-QA-E2E-01 (scenarios/qa-compact) · GAP-QA-E2E-PW/DOCKER info
- flatten DEFER GAP-UP-FLAT-01 · Auth DEFER

## Links
- mfeStdUrl: `http://localhost:9301/so-ts-underpass`
- mfeStdRoute: `/so-ts-underpass`

- data-analy → po → ui → be → task → implement → **qa-fix-plan** → (approve) → implement-fix → qa → review
- mfeStdUrl live: `http://localhost:9301/so-ts?type=UNDERPASS`
- alias board: `http://localhost:9301/so-ts-underpass`
- qa-fix-plan: `specs/so-ts-underpass/implement/so-ts-underpass-qa-fix-plan.md`
- compact: `specs/so-ts-underpass/handoff/dev-compact.md`
