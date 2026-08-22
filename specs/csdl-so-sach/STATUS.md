# STATUS — csdl-so-sach

| Field | Value |
|-------|-------|
| feature | `csdl-so-sach` |
| phase | `data_analy` |
| status | `pending` |
| changeScope | `edit_page` |
| packKind | `list` |
| demo | D:/AI-QLBD/Linm.RMMS.Demo/src/demo/features/csdl-so-sach-demo.html |
| context | `D:/AI-QLBD/Linm.RMMS.Data/docs/context/features/csdl-so-sach.md` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · **`api/v1/asset/csdl-records`** (**cấm ERP.***) |
| prototype.artifact | `specs/csdl-so-sach/ui/prototype/csdl-so-sach-list-prototype.html` |
| prototype.reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-so-sach/ui/prototype/csdl-so-sach-list-prototype.html` |
| mfeStdRoute | `/asset/csdl-so-sach` |
| mfeStdUrl | `http://localhost:9301/asset/csdl-so-sach` |
| taskId | `task_f3691e8e` |
| updatedAt | `2026-08-21T05:30:32.884Z` |
## Lock

| agent | scope | id | at |
|-------|-------|-----|-----|
| — | — | — | — |

## Pipeline

| Step | Agent | Artifact | Status |
|------|-------|----------|--------|
| 0 | data-analy | _data-analy/features/csdl-so-sach-control-hint.md | **pending** |
| 1 | po | po/requirement.md | **pending** |
| 2.1 | design | ui/design.md + prototype + reviewUrl | **pending** |
| 2.2 | sa | be/solution-discovery.md | **pending** |
| 3 | team-lead | task/csdl-so-sach.md | **pending** |
| 4 | dev | implement/csdl-so-sach.md | **pending** |
| 5 | qa | qa/scenarios.md | **pending** |
| 6 | review | review/findings.md | **pending** |
## Confirms

| Gate | Value |
|------|-------|
| design_confirm | **confirmed** (user Approve board) |
| solution_confirm | **confirmed** (user Approve board) |
| sa_tz_gate | `tz_na` |
| sa_xco_gate | `xco_get_only` (API-02) |
| sa_shared_table | `share_tenant` (`CsdlCatalogRecordEntity`) |
| be_repo_confirm | `Linm.RMMS.WebService` |
| ui_repo_confirm | `Linm.Web.RMMS.Asset` |
| version_mismatch_action | **recheck_new** |
| prototype.reviewUrl | giữ cho Dev/QA (xem Field table) |
| review_confirm | pending (edit restart · chờ analy xong) |
| autoApprove | **OFF** (run packet) |

## Tasks (summary)

| id | layer | status |
|----|-------|--------|
| T-CTX-01 | docs | **done** |
| T-BE-01 | api | **done** |
| T-BE-02 | migration | **done** |
| T-BFF-01 | bff | **done** |
| T-PERM-01 | ui+api | **done** |
| T-UI-LIST-01 | ui | **done** |
| T-UI-FORM-01 | ui | **done** |
| T-UI-ACT-01 | ui | **done** |
| T-UI-PROD-01 | ui | **done** |
| T-UI-FIELD-01 | ui | **done** |
| T-UI-LKP-01 | ui | **done** |
| T-UI-UX-01 | ui | **done** |
| T-BE-CRUD-01 | api | **done** |
| T-UI-MAP-FORM | — | **n/a** |
| T-QA-01 | qa | **done** |
| T-QA-CRUD-01 | qa | **done** |

## Blockers / open questions

- **GAP-RPT-SRC-CSDL-01** — sổ report cần **field typed** (không Col1–Col3) — `specs/_form-type/REPORT-SOURCE-FIELD-GAPS.md`
- CommonLib / Auth NuGet chưa mount — `[RequirePermission]` TODO BE
- Excel import OUT pack
- History API stub
- **GAP-QA-HUB-SLUG** P2 — hub card hiện slug `c.key` (không fail T-QA)
- **cấm ERP.*** · **cấm** parent JSON string

## Links
- mfeStdUrl: `http://localhost:9301/asset/csdl-so-sach`
- mfeStdRoute: `/asset/csdl-so-sach`

- Design: `specs/csdl-so-sach/ui/design.md`
- Solution: `specs/csdl-so-sach/be/solution-discovery.md`
- Task: `specs/csdl-so-sach/task/csdl-so-sach.md`
- Implement: `specs/csdl-so-sach/implement/csdl-so-sach.md`
- QA: `specs/csdl-so-sach/qa/scenarios.md`
- Review: `specs/csdl-so-sach/review/findings.md`
- Prototype: `specs/csdl-so-sach/ui/prototype/csdl-so-sach-list-prototype.html`
- **Final MFE:** `http://localhost:9301/asset/csdl-so-sach` (`yarn start:std`)
- DOMAIN-MAP: `D:/AI-QLBD/Linm.RMMS.WebService/docs/DOMAIN-MAP.md`

## Resume / closeout

- resume: `task_f3691e8e` · Review · at: `2026-08-15T16:52:00.000Z`
- notes: roleOnly=review · autoApprove=OFF · findings **PASS** · review_confirm **pending** · STATUS **await_confirm** · không auto-confirm · không enqueue (pipeline leaf) · VERIFY GATE MFE typecheck+build PASS

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | orchestrator |
| skillVersion | 2026.08.08.21 |
| schemaVersion | 2 |
| workflowVersion | 2026.08.09.02 |
| rulesVersion | 2026.08.09.3 |
| generatedAt | 2026-08-15T16:52:00.000Z |
| versionGate | rechecked |
| formTypePack | task_4a2be2fe |
