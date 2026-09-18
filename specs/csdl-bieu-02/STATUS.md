# STATUS — csdl-bieu-02

| Field | Value |
|-------|-------|
| feature | `csdl-bieu-02` |
| phase | `done` |
| status | `done` |
| qaTaskId | `task_eaf98be4` |
| reviewTaskId | `task_ae24b362` |
| packKind | `list` |
| changeScope | `edit_page` |
| epic | `csdl-export-print` · Wave 1 `T-XLS-S02` |
| demo | N/A (packet) · prior hub zone-only |
| context | `D:/AI-QLBD/Linm.RMMS.Data/docs/context/features/csdl-bieu-02.md` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| mfeStdRoute | `/so-ts/csdl-so-sach` |
| mfeStdUrl | `http://localhost:9301/so-ts/csdl-so-sach` |
| hubRoute | `/so-ts/csdl-so-sach?resource=bridges` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · DOMAIN-MAP — **cấm ERP.*** |
| contentHash | `sha256:43c517bec9635b8c3ac292e54e566cf38f3ba97c86a8ce56e5b4c587427dcf40` |
| updatedAt | `2026-09-17T19:20:32.995Z` |
## Lock

| agent | scope | id | at |
|-------|-------|-----|-----|
| — | — | — | **released** (review DoR PASS · review_confirm=done · task_ae24b362) |

## Pipeline

| Step | Agent | Artifact | Status |
|------|-------|----------|--------|
| 0 | data-analy | _data-analy/features/csdl-bieu-02-control-hint.md · csdl-bieu-02-real-data.md · handoff/data_analy-compact.md | **confirmed** |
| 1 | po | po/requirement.md · handoff/po-compact.md | **confirmed** |
| 2.1 | design | ui/design.md + prototype + reviewUrl · handoff/design-compact.md | **confirmed** |
| 2.2 | sa | be/solution-discovery.md · handoff/sa-compact.md | **confirmed** |
| 3 | team-lead | task/csdl-bieu-02.md · handoff/team_lead-compact.md | **confirmed** |
| 4 | dev | implement/csdl-bieu-02.md · handoff/dev-compact.md | **confirmed** |
| 5 | qa | qa/scenarios.md · handoff/qa-compact.md · qa/screens | **confirmed** |
| 6 | review | review/findings.md · handoff/review-compact.md | **done** |
## Tasks

| id | page | role | deps | status | notes |
|----|------|------|------|--------|-------|
| task_dd8553f8 | csdl-bieu-02 | data_analy | — | **done** | prior new_page typed · 48 cột · bridges |
| task_ba5815a6 | csdl-bieu-02 | po | data_analy | **done** | prior typed requirement |
| task_388b210f | csdl-bieu-02 | design | po | **done** | prior typed prototype |
| task_547af74d | csdl-bieu-02 | sa | design | **done** | prior Schema_CsdlBieu2 |
| task_361a0ea2 | csdl-bieu-02 | team_lead | sa | **done** | prior T-* typed |
| task_f8854c01 | csdl-bieu-02 | dev | team_lead | **done** | prior typed implement |
| task_ac771056 | csdl-bieu-02 | qa | dev | **done** | prior typed e2e |
| task_38fe4842 | csdl-bieu-02 | review | qa | **done** | prior typed review · phase was done |
| task_55ac6074 | csdl-bieu-02 | data_analy | — | **done** | edit_page T-XLS-S02 · control-hint + real-data + compact · Xuất Excel toolbar · golden 16-sheet · **cấm** filter-bar |
| task_f1ae575f | csdl-bieu-02 | po | data_analy | **done** | edit_page · Q-XLS SCOPE=filtered · IMPORT=export_only_p0 · FILENAME pattern · AC-XLS-01..08 · compact |
| task_d763be35 | csdl-bieu-02 | design | po | **done** | edit_page · Xuất Excel catalogToolbar · Import ẩn P1 · prototype + design.md + compact · design_confirm=approve |
| task_5ee91442 | csdl-bieu-02 | sa | design | **done** | edit_page · solution + compact · FILENAME `.xls` · filter-all · Import DEFER · solution_confirm=approve |
| task_b5696c4c | csdl-bieu-02 | team_lead | sa | **done** | edit_page · task pack T-XLS-* · route_a keep · Import OUT · team_lead_confirm=approve · compact |
| task_a201197f | csdl-bieu-02 | dev | team_lead | **done** | edit_page XLS · T-XLS-BE/BFF/FE · yarn+dotnet PASS · Import DEFER · compact |
| task_eaf98be4 | csdl-bieu-02 | qa | dev | **done** | edit_page XLS · T-XLS-QA-01 PASS · S0/S1/QA-20 PNG · export `.xls` · Import ẩn · compact |
| task_ae24b362 | csdl-bieu-02 | review | qa | **done** | edit_page XLS · findings + compact · review_confirm=done · **0** fix_gaps · QUERY/SEC/UI-FN/BE-FN PASS |

## Blockers / open questions

- Import P1 DEFER (Q-XLS-IMPORT=export_only_p0)
- residual P2: Auth DEFER · migrate apply · GAP-QA-E2E-PW-01 · getBlob CD strip
- SA locked: ext `.xls` · export mode filter-all (no streaming P0)

## Links

- data-analy (**edit_page export**) → po → design → sa → team-lead → dev → qa → **review confirmed** · phase **done**
- mfeStdUrl: `http://localhost:9301/so-ts/csdl-so-sach`
- mfeStdRoute: `/so-ts/csdl-so-sach`
- hub: `http://localhost:9301/so-ts/csdl-so-sach?resource=bridges`
- reviewUrl: `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-bieu-02/ui/prototype/csdl-bieu-02-list-prototype.html`
- handoff: `specs/csdl-bieu-02/handoff/review-compact.md`
- findings: `specs/csdl-bieu-02/review/findings.md`
- scenarios: `specs/csdl-bieu-02/qa/scenarios.md`
- implement: `specs/csdl-bieu-02/implement/csdl-bieu-02.md`
- task: `specs/csdl-bieu-02/task/csdl-bieu-02.md`
- solution: `specs/csdl-bieu-02/be/solution-discovery.md`
- design: `specs/csdl-bieu-02/ui/design.md`
- requirement: `specs/csdl-bieu-02/po/requirement.md`
- epic: `docs/context/features/csdl-export-print.md` · T-XLS-S02
