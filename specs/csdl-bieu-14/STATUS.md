# STATUS — csdl-bieu-14

| Field | Value |
|-------|-------|
| feature | `csdl-bieu-14` |
| phase | `done` |
| status | `done` |
| packKind | `list` |
| demo | D:/AI-QLBD/Linm.RMMS.Demo/src/demo/features/csdl-so-sach-demo.html |
| context | `D:/AI-QLBD/Linm.RMMS.Data/docs/context/features/csdl-bieu-14.md` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| mfeStdRoute | `/csdl-bieu-14` |
| mfeStdUrl | `http://localhost:9301/csdl-bieu-14` |
| hubRoute | `/so-ts/csdl-so-sach?resource=its-systems` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · DOMAIN-MAP — **cấm ERP.*** |
| contentHash | `sha256:6cfdefa3baaffcf2bd97c7a429bb5043e7f9d77b96bbb77eafaa34689007b112` |
| headerFingerprint | `sha256:14cd156a898dcc971a072dd1cd1b92460a8b597558a90dc9854fead9d4c4de5c` |
| updatedAt | `2026-09-05T15:16:16.912Z` |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-bieu-14/ui/prototype/csdl-bieu-14-list-prototype.html` |
| design_confirm | `approve` (autoApprove ON) |
| solution_confirm | `approve` (autoApprove ON · `task_c534e53a`) |
| route_confirm | `route_a` (autoApprove ON · `/csdl-bieu-14` + hub NEW) |
| team_lead_confirm | `approve` (autoApprove ON · `task_b21db737`) |
| review_confirm | `approve` (autoApprove ON · `task_1b0469b6`) |
| yarnBuild | **PASS** |
| yarnTypecheck | **PASS** |
| dotnetBuild | **PASS** |
| e2eQa | **PASS** (S0/S1/QA-20 · chrome fallback) |
| qaTaskId | `task_e13a402d` |
| qa_verdict | **PASS** |
| review_verdict | **PASS** |

## Lock

| agent | scope | id | at |
|-------|-------|-----|-----|
| review | feature | task_1b0469b6 | 2026-09-05T15:15:00.000Z · **released** (DoR PASS · review_confirm approve) |

## Pipeline

| Step | Agent | Artifact | Status |
|------|-------|----------|--------|
| 0 | data-analy | _data-analy/features/csdl-bieu-14-control-hint.md · csdl-bieu-14-real-data.md · handoff/data_analy-compact.md | **confirmed** |
| 1 | po | po/requirement.md · handoff/po-compact.md | **confirmed** |
| 2.1 | design | ui/design.md + prototype + reviewUrl · handoff/design-compact.md | **confirmed** |
| 2.2 | sa | be/solution-discovery.md · handoff/sa-compact.md | **confirmed** |
| 3 | team-lead | task/csdl-bieu-14.md · handoff/team_lead-compact.md | **confirmed** |
| 4 | dev | implement/csdl-bieu-14.md · handoff/dev-compact.md | **confirmed** |
| 5 | qa | qa/scenarios.md · handoff/qa-compact.md | **confirmed** |
| 6 | review | review/findings.md · handoff/review-compact.md | **done** |
## Tasks

| id | page | role | deps | status | notes |
|----|------|------|------|--------|-------|
| task_db0e2ea1 | csdl-bieu-14 | data_analy | — | **done** | control-hint + real-data + compact · resource `its-systems` · 21 cột |
| task_475a3c19 | csdl-bieu-14 | po | data_analy | **done** | requirement + po-compact · Q* autoApprove · alias_now · prefix IT |
| task_d302ab8a | csdl-bieu-14 | design | po | **done** | design.md + prototype + design-compact · design_confirm approve · reviewUrl |
| task_c534e53a | csdl-bieu-14 | sa | design | **done** | solution-discovery + sa-compact · solution_confirm approve · Schema_CsdlBieu14 · gates tz_na/xco_get_only/share_tenant |
| task_b21db737 | csdl-bieu-14 | team_lead | sa | **done** | task pack + team_lead-compact · route_a · T-* matrix · team_lead_confirm approve |
| task_936065ca | csdl-bieu-14 | dev | team_lead | **done** | FE `/csdl-bieu-14` + BE Schema_CsdlBieu14 · yarn/dotnet build PASS |
| task_e13a402d | csdl-bieu-14 | qa | dev | **done** | scenarios + e2e S0/S1/QA-20 PASS · qa-compact · typecheck wire deviceType |
| task_1b0469b6 | csdl-bieu-14 | review | qa | **done** | findings + review-compact · review_confirm approve · QUERY/SEC/UI-FN/BE-FN PASS |

## Blockers / open questions

- (none — Review DoR PASS · phase=`done` · pipeline complete)

## Links

- data-analy → po → ui → be → task → implement → qa → review ✅
- mfeStdUrl: `http://localhost:9301/csdl-bieu-14`
- mfeStdRoute: `/csdl-bieu-14`
- hub: `/so-ts/csdl-so-sach?resource=its-systems`
- reviewUrl: `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-bieu-14/ui/prototype/csdl-bieu-14-list-prototype.html`
- handoff: `specs/csdl-bieu-14/handoff/review-compact.md`
