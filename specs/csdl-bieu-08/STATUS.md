# STATUS — csdl-bieu-08

| Field | Value |
|-------|-------|
| feature | `csdl-bieu-08` |
| phase | `done` |
| status | `done` |
| packKind | `list` |
| demo | D:/AI-QLBD/Linm.RMMS.Demo/src/demo/features/csdl-so-sach-demo.html |
| context | `D:/AI-QLBD/Linm.RMMS.Data/docs/context/features/csdl-bieu-08.md` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| mfeStdRoute | `/csdl-bieu-08` |
| mfeStdUrl | `http://localhost:9301/csdl-bieu-08` |
| hubRoute | `/so-ts/csdl-so-sach?resource=traffic-safety` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · DOMAIN-MAP — **cấm ERP.*** |
| contentHash | `sha256:f972c82727726d256754d076435f9ef97c993b4f9844dc79e50b6415fcaf54be` |
| updatedAt | `2026-09-05T10:41:25.169Z` |
## Lock

| agent | scope | id | at |
|-------|-------|-----|-----|
| — | — | — | unlocked (review done) |

## Pipeline

| Step | Agent | Artifact | Status |
|------|-------|----------|--------|
| 0 | data-analy | _data-analy/features/csdl-bieu-08-control-hint.md · csdl-bieu-08-real-data.md · handoff/data_analy-compact.md | **confirmed** |
| 1 | po | po/requirement.md · handoff/po-compact.md | **confirmed** |
| 2.1 | design | ui/design.md + prototype + reviewUrl · handoff/design-compact.md | **confirmed** |
| 2.2 | sa | be/solution-discovery.md · handoff/sa-compact.md | **confirmed** |
| 3 | team-lead | task/csdl-bieu-08.md · handoff/team_lead-compact.md | **confirmed** |
| 4 | dev | implement/csdl-bieu-08.md · handoff/dev-compact.md | **confirmed** |
| 5 | qa | qa/scenarios.md · handoff/qa-compact.md | **confirmed** |
| 6 | review | review/findings.md · handoff/review-compact.md | **done** |
## Tasks

| id | page | role | deps | status | notes |
|----|------|------|------|--------|-------|
| task_a21c4937 | csdl-bieu-08 | data_analy | — | **PASS** | changeScope=new_page · resource=traffic-safety · formNo 7→8 · 45c/11 nhóm |
| task_49b1fe15 | csdl-bieu-08 | po | data_analy | **PASS** | changeScope=new_page · packKind=list · Q chốt · alias_now · child_tables |
| task_daa7f8e9 | csdl-bieu-08 | design | po | **PASS** | design_confirm=approve · shared+1 child · subset_by_type · reviewUrl |
| task_53a8d473 | csdl-bieu-08 | sa | design | **PASS** | solution_confirm=approve · Schema_CsdlBieu8+11 children · tz_na · xco_get_only · share_tenant |
| task_b7d81208 | csdl-bieu-08 | team_lead | sa | **PASS** | route_a · T-* pack · team_lead_confirm=approve · handoff compact |
| task_96940f90 | csdl-bieu-08 | dev | team_lead | **PASS** | FE alias+hub · BE Schema_CsdlBieu8 · yarn+dotnet build PASS · handoff compact |
| task_e0d8a853 | csdl-bieu-08 | qa | dev | **PASS** | e2e S0/S1/QA-20 · typecheck · docker · GAP-QA-E2E-PW-01 fallback · handoff compact |
| task_fdb010e9 | csdl-bieu-08 | review | qa | **PASS** | review_confirm=approve · QUERY/SEC/UI-FN/BE-FN PASS · handoff compact |

## Blockers / open questions

- none (Review DoR PASS · pipeline complete · P2 debt only)

## Links

- data-analy → po → ui → be → task → implement → qa → review
- mfeStdUrl: `http://localhost:9301/csdl-bieu-08`
- mfeStdRoute: `/csdl-bieu-08`
- hub: `/so-ts/csdl-so-sach?resource=traffic-safety`
- reviewUrl: `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-bieu-08/ui/prototype/csdl-bieu-08-list-prototype.html`
- handoff: `specs/csdl-bieu-08/handoff/review-compact.md`
- findings: `specs/csdl-bieu-08/review/findings.md`
- scenarios: `specs/csdl-bieu-08/qa/scenarios.md`
- screens: `specs/csdl-bieu-08/qa/screens/{S0,S1,QA-20}.png`
