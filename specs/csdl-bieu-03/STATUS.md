# STATUS — csdl-bieu-03

| Field | Value |
|-------|-------|
| feature | `csdl-bieu-03` |
| phase | `done` |
| status | `done` |
| packKind | `list` |
| changeScope | `edit_page` · T-XLS-S03 |
| qaTaskId | `task_1df2c910` |
| reviewTaskId | `task_d08de1b6` |
| demo | N/A (packet) · prior hub zone-only |
| context | `D:/AI-QLBD/Linm.RMMS.Data/docs/context/features/csdl-bieu-03.md` |
| epic | `docs/context/features/csdl-export-print.md` Wave 1 |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| mfeStdRoute | `/so-ts/csdl-so-sach` |
| mfeStdUrl | `http://localhost:9301/so-ts/csdl-so-sach` |
| hubDeepLink | `/so-ts/csdl-so-sach?resource=road-tunnels` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · DOMAIN-MAP — **cấm ERP.*** |
| contentHash | `sha256:57fc9dab0df1bc69fa444e65b543c8bc14b7ef9b2f12d92f72b12fa40e5cc1d9` |
| headerFingerprint | `sha256:3574a45ea4cc36f0f01b6cff9e5a7577f52fdb7a7b79508685c1038b473564d8` |
| updatedAt | `2026-09-17T19:55:57.384Z` |
## Lock

| agent | scope | id | at |
|-------|-------|-----|-----|
| — | — | — | **released** (review DoR PASS · review_confirm=approve · task_d08de1b6 · phase=done) |

## Pipeline

| Step | Agent | Artifact | Status |
|------|-------|----------|--------|
| 0 | data-analy | _data-analy/features/csdl-bieu-03-control-hint.md · csdl-bieu-03-real-data.md · handoff/data_analy-compact.md | **confirmed** |
| 1 | po | po/requirement.md · handoff/po-compact.md | **confirmed** |
| 2.1 | design | ui/design.md + prototype + reviewUrl · handoff/design-compact.md | **confirmed** |
| 2.2 | sa | be/solution-discovery.md · handoff/sa-compact.md | **confirmed** |
| 3 | team-lead | task/csdl-bieu-03.md · handoff/team_lead-compact.md | **confirmed** |
| 4 | dev | implement/csdl-bieu-03.md · handoff/dev-compact.md | **confirmed** |
| 5 | qa | qa/scenarios.md · handoff/qa-compact.md · qa/screens/{S0,S1,QA-20}.png | **confirmed** |
| 6 | review | review/findings.md · handoff/review-compact.md | **done** |
## Tasks

| id | page | role | deps | status | notes |
|----|------|------|------|--------|-------|
| task_df175ffd | csdl-bieu-03 | data_analy | — | **done** | changeScope=new_page · resource=road-tunnels · 42 cột · GPS 3 điểm · 2 ống=2 bản ghi |
| task_69bca3c6 | csdl-bieu-03 | po | data_analy | **done** | packKind=list · Q-GPS=six_numbers · Q-TUBE=two_rows · Q-VENT=text · Q-ROUTE=alias_now · Q-PROV=keep_static · Q-SECTION=sectioned · autoApprove=ON |
| task_db02ce1d | csdl-bieu-03 | design | po | **done** | design_confirm=approve · reviewUrl prototype · typed 42 · sectioned · hash skip · autoApprove=ON |
| task_539bb440 | csdl-bieu-03 | sa | design | **done** | solution_confirm=approve · Schema_CsdlBieu3 · GPS/TUBE/VENT · T-DM-01 slug · gates tz_na/xco_get_only/share_tenant · autoApprove=ON |
| task_fb34ebd6 | csdl-bieu-03 | team_lead | sa | **done** | route_confirm=route_a · team_lead_confirm=approve · T-* matrix · Schema_CsdlBieu3 @4b · autoApprove=ON |
| task_8650b573 | csdl-bieu-03 | dev | team_lead | **done** | FE CsdlBieu03Page · BE CsdlBieu3+Schema_CsdlBieu3 · yarn+dotnet build PASS · autoApprove=ON |
| task_677b9487 | csdl-bieu-03 | qa | dev | **done** | e2e S0/S1/QA-20 PASS · typecheck PASS · GAP-QA-E2E-PW-01 fallback · **cấm** phase=done |
| task_50bbebc7 | csdl-bieu-03 | review | qa | **done** | review_confirm=approve · QUERY/SEC/UI-FN/BE-FN PASS · autoApprove=ON · phase=done |
| task_9054a943 | csdl-bieu-03 | data_analy | — | **done** | changeScope=edit_page · T-XLS-S03 · Xuất Excel catalogToolbar · golden 16-sheet · **cấm** filter-bar · keep typed CRUD |
| task_6861dd5b | csdl-bieu-03 | po | data_analy | **done** | edit_page · Q-XLS-SCOPE=filtered · Q-XLS-IMPORT=export_only_p0 · Q-XLS-FILENAME=Bieu03_HamDuongBo_{yyyyMMdd}.xlsx · AC-XLS-01..09 · autoApprove=ON |
| task_089e1774 | csdl-bieu-03 | design | po | **done** | edit_page · design_confirm=approve · toolbar Xuất Excel · Import ẩn P1 · prototype mock binary · AC-XLS-01..09 · hash skip · autoApprove=ON |
| task_124631cd | csdl-bieu-03 | sa | design | **done** | edit_page · solution_confirm=approve · FILENAME `.xls` · filter-all · XLS-TUBE 1row/ống · Import DEFER · gates KEEP · autoApprove=ON |
| task_28ddf784 | csdl-bieu-03 | team_lead | sa | **done** | edit_page · team_lead_confirm=approve · route_confirm=keep · T-XLS-BE/BFF/FE/QA · AC-XLS-01..09 · autoApprove=ON |
| task_310ad88c | csdl-bieu-03 | dev | team_lead | **done** | edit_page · T-XLS-BE/BFF/FE · yarn+dotnet PASS · Import DEFER · autoApprove=ON |
| task_1df2c910 | csdl-bieu-03 | qa | dev | **done** | edit_page · T-XLS-QA-01 · e2e S0/S1/QA-20 PASS · export `Bieu03_HamDuongBo_*.xls` · Import ẩn · **cấm** phase=done |
| task_d08de1b6 | csdl-bieu-03 | review | qa | **done** | edit_page · review_confirm=approve · QUERY/SEC/UI-FN/BE-FN PASS · autoApprove=ON · phase=done |

## Blockers / open questions

- (none) · Review closed Wave 1 T-XLS-S03
- prior debt: GAP-CSDL-ORG-01 DEFER P2 · Auth DEFER · Import DEFER P1 · GAP-QA-E2E-PW-01 P2 · getBlob CD strip
- **cấm** toast stub = export done · typed STATUS done ≠ export xong (binary shipped)

## Links

- data-analy → po → ui → be → task → implement → qa → review
- mfeStdUrl: `http://localhost:9301/so-ts/csdl-so-sach`
- mfeStdRoute: `/so-ts/csdl-so-sach`
- hub: `http://localhost:9301/so-ts/csdl-so-sach?resource=road-tunnels`
- reviewUrl: `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-bieu-03/ui/prototype/csdl-bieu-03-list-prototype.html`
- handoff: `…/handoff/data_analy-compact.md` · `po-compact.md` · `design-compact.md` · `sa-compact.md` · `team_lead-compact.md` · `dev-compact.md` · `qa-compact.md` · `review-compact.md`
- control-hint: `specs/_data-analy/features/csdl-bieu-03-control-hint.md`
- real-data: `specs/_data-analy/features/csdl-bieu-03-real-data.md`
- epic: `docs/context/features/csdl-export-print.md` · T-XLS-S03
- requirement: `specs/csdl-bieu-03/po/requirement.md`
- design: `specs/csdl-bieu-03/ui/design.md`
- findings: `specs/csdl-bieu-03/review/findings.md`
- scenarios: `specs/csdl-bieu-03/qa/scenarios.md`
- implement: `specs/csdl-bieu-03/implement/csdl-bieu-03.md`
- solution: `specs/csdl-bieu-03/be/solution-discovery.md`
- task: `specs/csdl-bieu-03/task/csdl-bieu-03.md`
