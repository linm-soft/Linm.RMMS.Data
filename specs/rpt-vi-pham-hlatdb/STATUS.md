# STATUS — rpt-vi-pham-hlatdb

| Field | Value |
|-------|-------|
| feature | `rpt-vi-pham-hlatdb` |
| phase | `done` |
| status | `done` |
| packKind | `report` |
| changeScope | `edit_page` |
| demo | **N/A** |
| context | `D:/AI-QLBD/Linm.RMMS.Data/docs/context/features/rpt-vi-pham-hlatdb.md` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Report` |
| mfeStdRoute | `/bao-cao/vi-pham-hlatdb` |
| mfeStdUrl | `http://localhost:9311/bao-cao/vi-pham-hlatdb` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · `api/v1/report` · DOMAIN-MAP — **cấm ERP.*** |
| prototype.artifact | `specs/rpt-vi-pham-hlatdb/ui/prototype/rpt-vi-pham-hlatdb-prototype.html` |
| prototype.reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/rpt-vi-pham-hlatdb/ui/prototype/rpt-vi-pham-hlatdb-prototype.html` |
| skillVersion | `2026.08.15.5` |
| schemaVersion | `1` |
| workflowVersion | `2026.08.15.5` |
| rulesVersion | `2026.08.15.8` |
| versionGate | `keep_current` |
| autoApprove | **ON** |
| chain | **ON** |
| taskId | `task_bf056dec` |
| sourceFormReady | **yes** |
| sourceFeature | `csdl-so-sach` |
| sourceTables | `RowViolation` |
| updatedAt | `2026-08-16T17:30:28.609Z` |
## Lock

| agent | scope | id | at |
|-------|-------|-----|-----|
| — | — | — | released |

## Confirms

| Key | Value | Notes |
|-----|-------|-------|
| beRepo | **approve** | packet `Linm.RMMS.WebService` |
| uiRepo | **approve** | MFE `Linm.Web.RMMS.Report` |
| autoApprove | **ON** | run packet `task_bf056dec` |
| design_confirm | **approve** | Design `task_283c81e9` · autoApprove ON · prototype RowViolation A–D |
| solution_confirm | **approve** | SA `task_f49d07d0` · autoApprove ON · contract `api/v1/report/row-violations` |
| review_confirm | **approve** | Review `task_bf056dec` · autoApprove ON · P0 none · pipeline closed |

## Pipeline

| Step | Agent | Artifact | Status |
|------|-------|----------|--------|
| 0 | data-analy | `_data-analy/features/rpt-vi-pham-hlatdb-control-hint.md` | **confirmed** |
| 1 | po | po/requirement.md | **confirmed** |
| 2.1 | design | ui/design.md + prototype + reviewUrl | **confirmed** |
| 2.2 | sa | be/solution-discovery.md | **confirmed** |
| 3 | team-lead | task/rpt-vi-pham-hlatdb.md | **confirmed** |
| 4 | dev | implement/rpt-vi-pham-hlatdb.md | **confirmed** |
| 5 | qa | qa/scenarios.md | **confirmed** |
| 6 | review | review/findings.md | **done** |
## Tasks

| id | page | role | deps | status | notes |
|----|------|------|------|--------|-------|
| task_24fb0ec1 | `/bao-cao/vi-pham-hlatdb` | chain | — | **completed** | full pipeline trước · yarn typecheck+build PASS · API/BFF compile PASS |
| task_ab8fa516 | `/bao-cao/vi-pham-hlatdb` | po | data-analy confirmed | **completed** | roleOnly=po · enqueue **design** |
| task_283c81e9 | `/bao-cao/vi-pham-hlatdb` | design | po confirmed | **completed** | roleOnly=design · autoApprove ON · enqueue **sa** |
| task_f49d07d0 | `/bao-cao/vi-pham-hlatdb` | sa | design confirmed | **completed** | roleOnly=sa · autoApprove ON · enqueue **team-lead** |
| task_0f56b18c | `/bao-cao/vi-pham-hlatdb` | team_lead | sa confirmed | **completed** | roleOnly=team_lead · autoApprove ON · T-* + ssot_rereview · enqueue **dev** |
| task_17bb2aa6 | `/bao-cao/vi-pham-hlatdb` | dev | team_lead confirmed | **completed** | GAP-TL-HLATDB-01 · yarn typecheck+build PASS · enqueue **qa** |
| task_29672bef | `/bao-cao/vi-pham-hlatdb` | qa | dev confirmed | **completed** | roleOnly=qa · T-QA-01 PASS · P0 none · yarn typecheck+build PASS · enqueue **review** |
| task_bf056dec | `/bao-cao/vi-pham-hlatdb` | review | qa confirmed | **completed** | roleOnly=review · autoApprove ON · review_confirm approve · P0 none · yarn typecheck+build PASS · pipeline **closed** |

## Links

- controlHint: `specs/_data-analy/features/rpt-vi-pham-hlatdb-control-hint.md`
- po: `specs/rpt-vi-pham-hlatdb/po/requirement.md`
- design: `specs/rpt-vi-pham-hlatdb/ui/design.md`
- sa: `specs/rpt-vi-pham-hlatdb/be/solution-discovery.md`
- tl: `specs/rpt-vi-pham-hlatdb/task/rpt-vi-pham-hlatdb.md`
- implement: `specs/rpt-vi-pham-hlatdb/implement/rpt-vi-pham-hlatdb.md`
- qa: `specs/rpt-vi-pham-hlatdb/qa/scenarios.md`
- review: `specs/rpt-vi-pham-hlatdb/review/findings.md`
- reviewUrl: `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/rpt-vi-pham-hlatdb/ui/prototype/rpt-vi-pham-hlatdb-prototype.html`
- mfeStdUrl: `http://localhost:9311/bao-cao/vi-pham-hlatdb`
- API: `GET /api/v1/report/row-violations` · export `/row-violations/export`

<!-- Version meta: skillVersion=2026.08.15.5 · schemaVersion=1 · workflowVersion=2026.08.15.5 · rulesVersion=2026.08.15.8 · versionGate=keep_current -->
