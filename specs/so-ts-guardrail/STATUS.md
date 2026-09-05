# STATUS — so-ts-guardrail

| Field | Value |
|-------|-------|
| feature | `so-ts-guardrail` |
| phase | `done` |
| status | `done` |
| packKind | `list` |
| demo | D:/AI-QLBD/Linm.RMMS.Demo/src/demo/features/asset-demo.html |
| context | `D:/AI-QLBD/Linm.RMMS.Data/docs/context/features/so-ts-guardrail.md` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| mfeStdRoute | `/so-ts-guardrail` |
| mfeStdUrl | `http://localhost:9301/so-ts-guardrail` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · DOMAIN-MAP — **cấm ERP.*** |
| updatedAt | `2026-09-01T16:49:10.996Z` |
## Lock

| agent | scope | id | at |
|-------|-------|-----|-----|
| — | — | — | unlocked (review done · pipeline complete roleOnly) |

## Pipeline

| Step | Agent | Artifact | Status |
|------|-------|----------|--------|
| 0 | data-analy | _data-analy/features/so-ts-guardrail-control-hint.md · so-ts-guardrail-real-data.md · handoff/data_analy-compact.md | **confirmed** |
| 1 | po | po/requirement.md · handoff/po-compact.md | **confirmed** |
| 2.1 | design | ui/design.md + prototype + reviewUrl · handoff/design-compact.md | **confirmed** |
| 2.2 | sa | be/solution-discovery.md · handoff/sa-compact.md | **confirmed** |
| 3 | team-lead | task/so-ts-guardrail.md · handoff/team_lead-compact.md | **confirmed** |
| 4 | dev | implement/so-ts-guardrail.md · handoff/dev-compact.md | **confirmed** |
| 5 | qa | qa/scenarios.md · handoff/qa-compact.md | **confirmed** |
| 6 | review | review/findings.md · handoff/review-compact.md | **done** |
## Tasks

| id | page | role | deps | status | notes |
|----|------|------|------|--------|-------|
| task_8062abd1 | so-ts-guardrail | data_analy | — | **done** | changeScope=new_page · packKind=list · type=GUARDRAIL · handoff compact PASS |
| task_124d8994 | so-ts-guardrail | po | data_analy | **done** | autoApprove ON · GAP lookup/name/reflective/prefix HL-/RANGE/peer chốt · Grid+Form+Leave AC · compact PASS |
| task_fc833be2 | so-ts-guardrail | design | po | **done** | autoApprove ON · design_confirm=approve · prototype+reviewUrl · Kind B · prefix HL- · reflective Number · compact PASS |
| task_4fe4e6c8 | so-ts-guardrail | sa | design | **done** | autoApprove ON · solution_confirm=approve · path road-assets · dumpSpecs P1 · flatten DEFER · HL- · LOOKUP init-data · gates tz_na/xco_get_only/share_tenant · compact PASS |
| task_ff5c4b7e | so-ts-guardrail | team_lead | sa | **done** | autoApprove ON · route_confirm=route_a · T-GR-01..10 mapped · form-type-task-pack PASS · compact PASS |
| task_a0431186 | so-ts-guardrail | dev | team_lead | **done** | GUARDRAIL profile FE+BE · HL- · LOOKUP init · alias route · build PASS · compact PASS |
| task_0d38492f | so-ts-guardrail | qa | dev | **done** | e2eQa PASS · S0/S1/QA-20 · T-QA-* PASS · compact PASS |
| task_95bf1b20 | so-ts-guardrail | review | qa | **done** | autoApprove ON · review_confirm=done · QUERY/SEC/UI-FN/BE-FN PASS · compact PASS |

## Blockers / open questions

- none (Review PASS · roleOnly complete)

## Links

- data-analy → po → ui → be → task → implement → qa → review
- mfeStdUrl: `http://localhost:9301/so-ts-guardrail`
- mfeStdRoute: `/so-ts-guardrail`
- live filter: `http://localhost:9301/so-ts?type=GUARDRAIL`
- reviewUrl: `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/so-ts-guardrail/ui/prototype/so-ts-guardrail-list-prototype.html`
- compact: `specs/so-ts-guardrail/handoff/review-compact.md`
- findings: `specs/so-ts-guardrail/review/findings.md`
- task: `specs/so-ts-guardrail/task/so-ts-guardrail.md`
- solution: `specs/so-ts-guardrail/be/solution-discovery.md`
- design: `specs/so-ts-guardrail/ui/design.md`
