# STATUS — csdl-so-05

| Field | Value |
|-------|-------|
| feature | `csdl-so-05` |
| phase | `done` |
| status | `done` |
| packKind | `list` |
| demo | D:/AI-QLBD/Linm.RMMS.Demo/src/demo/features/csdl-so-sach-demo.html |
| context | `D:/AI-QLBD/Linm.RMMS.Data/docs/context/features/csdl-so-05.md` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| mfeStdRoute | `/csdl-so-05` |
| mfeStdUrl | `http://localhost:9301/csdl-so-05` |
| hubDeepLink | `/so-ts/csdl-so-sach?resource=accident-summaries` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · DOMAIN-MAP — **cấm ERP.*** |
| contentHash | `sha256:ccb6cccc2010c67b8cd3b02484f6a424d09f5a7e0494ad59b5b71ea6ff15f8ce` |
| headerFingerprint | `sha256:73a54e566bbad59af489c97e74cad13d131c338daa386a531e535704e374d14a` |
| updatedAt | `2026-09-05T23:36:29.332Z` |
## Lock

| agent | scope | id | at |
|-------|-------|-----|-----|
| — | — | — | — |

## Pipeline

| Step | Agent | Artifact | Status |
|------|-------|----------|--------|
| 0 | data-analy | _data-analy/features/csdl-so-05-control-hint.md · csdl-so-05-real-data.md · handoff/data_analy-compact.md | **confirmed** |
| 1 | po | po/requirement.md · handoff/po-compact.md | **confirmed** |
| 2.1 | design | ui/design.md + prototype + reviewUrl · handoff/design-compact.md | **confirmed** |
| 2.2 | sa | be/solution-discovery.md · handoff/sa-compact.md | **confirmed** |
| 3 | team-lead | task/csdl-so-05.md · handoff/team_lead-compact.md | **confirmed** |
| 4 | dev | implement/csdl-so-05.md · handoff/dev-compact.md | **confirmed** |
| 5 | qa | qa/scenarios.md · handoff/qa-compact.md | **confirmed** |
| 6 | review | review/findings.md · handoff/review-compact.md | **done** |
## Tasks

| id | page | role | deps | status | notes |
|----|------|------|------|--------|-------|
| task_6deceabd | csdl-so-05 | data_analy | — | **completed** | changeScope=new_page · resource=`accident-summaries` · 3 grid C.1/C.2/BS |
| task_2cd724ab | csdl-so-05 | po | data_analy | **completed** | packKind=list · Open Q resolved · handoff Design |
| task_0332f55e | csdl-so-05 | design | po | **completed** | control-map · prototype 3 tabs · reviewUrl · design_confirm=approve · hash skip |
| task_9c8cec8e | csdl-so-05 | sa | design | **completed** | Schema_CsdlSo05 · 3 collections · solution_confirm=approve · gates tz/xco/share |
| task_fa602126 | csdl-so-05 | team_lead | sa | **completed** | route_a · T-* matrix · team_lead_confirm=approve · handoff compact |
| task_63d978f8 | csdl-so-05 | dev | team_lead | **completed** | FE CsdlSo05Page · BE Schema_CsdlSo05 · yarn+dotnet PASS · handoff/dev-compact |
| task_bb8c09cc | csdl-so-05 | qa | dev | **completed** | e2e S0/S1/QA-20 PASS · docker rebuild · chrome capture · handoff/qa-compact |
| task_4ea0d1b3 | csdl-so-05 | review | qa | **completed** | findings PASS · review_confirm=done · QUERY/SEC/UI-FN/BE-FN · handoff/review-compact · phase=done |

## Blockers / open questions

- (none Review) — gates PASS · review_confirm=done · phase=done
- Debt accept: Auth T-PERM-01 P2 · GAP-QA-E2E-PW-01 P2 · GAP-QA-ROAD-TESTID P3 · soft unique · UiSchema DEFER · org/XLS OUT

## Links

- data-analy → po → ui → be → task → implement → qa → review ✅
- mfeStdUrl: `http://localhost:9301/csdl-so-05`
- hub: `http://localhost:9301/so-ts/csdl-so-sach?resource=accident-summaries`
- reviewUrl: `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-so-05/ui/prototype/csdl-so-05-list-prototype.html`
- handoff: `specs/csdl-so-05/handoff/review-compact.md`
- findings: `specs/csdl-so-05/review/findings.md`
- scenarios: `specs/csdl-so-05/qa/scenarios.md`
- screens: `specs/csdl-so-05/qa/screens/`
