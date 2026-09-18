# STATUS — csdl-bieu-08

| Field | Value |
|-------|-------|
| feature | `csdl-bieu-08` |
| phase | `done` |
| status | `done` |
| qaTaskId | `task_0bd98d56` |
| reviewTaskId | `task_5844adb2` |
| qa_verdict | `PASS` |
| review_confirm | `done` |
| packKind | `list` |
| changeScope | `edit_page` |
| epic | `csdl-export-print` · Wave 1 `T-XLS-S08` |
| demo | N/A (packet) · prior hub demo zone-only |
| context | `D:/AI-QLBD/Linm.RMMS.Data/docs/context/features/csdl-bieu-08.md` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| mfeStdRoute | `/so-ts/csdl-so-sach` · alias `/csdl-bieu-08` |
| mfeStdUrl | `http://localhost:9301/so-ts/csdl-so-sach` |
| hubRoute | `/so-ts/csdl-so-sach?resource=traffic-safety` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · DOMAIN-MAP — **cấm ERP.*** |
| contentHash | `sha256:639566df4ddccc3927311d5618bf4e7c1dbad0dac80962c414f861dacc9d5e9c` |
| headerFingerprint | `sha256:ba8b8db4f7637ee32cfd4a882b6abdc774c538f6c9812c3ecd1d13f6151cdd6f` |
| updatedAt | `2026-09-17T22:29:42.392Z` |
## Lock

| agent | scope | id | at |
|-------|-------|-----|-----|
| — | — | — | unlocked · Review DoR PASS · phase=done |

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
| task_774ebbde | csdl-bieu-08 | data_analy | — | **PASS** | changeScope=edit_page · T-XLS-S08 · Xuất Excel catalogToolbar · golden Cục 16-sheet · GAP-FILTER-BAR-08 |
| task_c7498ca2 | csdl-bieu-08 | po | data_analy | **PASS** | edit_page · Q-XLS-* chốt · filtered · import_now · one_sheet_45 · handoff Design |
| task_b2622193 | csdl-bieu-08 | design | po | **PASS** | edit_page · design_confirm=approve · +Xuất/Nhập catalogToolbar · reviewUrl · handoff SA |
| task_72b0354c | csdl-bieu-08 | sa | design | **PASS** | edit_page · solution_confirm=approve · API-XLS-01..03 · Schema KEEP · no migration · handoff TL |
| task_21f9b30c | csdl-bieu-08 | team_lead | sa | **PASS** | edit_page · route_a keep · T-XLS-* pack · team_lead_confirm=approve · handoff Dev |
| task_ed6e77ce | csdl-bieu-08 | dev | team_lead | **PASS** | edit_page · T-XLS-BE/BFF/FE · yarn+dotnet PASS · handoff QA |
| task_0bd98d56 | csdl-bieu-08 | qa | dev | **PASS** | edit_page · T-XLS-QA-01 · e2e S0/S1/QA-20 · export/import · GAP-QA-E2E-PW-01 fallback · handoff Review |
| task_5844adb2 | csdl-bieu-08 | review | qa | **PASS** | edit_page · review_confirm=done · QUERY/SEC/UI-FN/BE-FN PASS · handoff compact · phase=done |

## Blockers / open questions

- none (Review PASS · pipeline complete)

## Links

- data-analy → po → ui → be → task → implement → qa → review
- mfeStdUrl: `http://localhost:9301/so-ts/csdl-so-sach`
- mfeStdRoute: `/so-ts/csdl-so-sach` · alias `/csdl-bieu-08`
- hub: `/so-ts/csdl-so-sach?resource=traffic-safety`
- epic: `docs/context/features/csdl-export-print.md` · `T-XLS-S08`
- reviewUrl: `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-bieu-08/ui/prototype/csdl-bieu-08-list-prototype.html`
- handoff: `specs/csdl-bieu-08/handoff/review-compact.md`
- findings: `specs/csdl-bieu-08/review/findings.md`
- scenarios: `specs/csdl-bieu-08/qa/scenarios.md`
- implement: `specs/csdl-bieu-08/implement/csdl-bieu-08.md`
- task: `specs/csdl-bieu-08/task/csdl-bieu-08.md`
- solution: `specs/csdl-bieu-08/be/solution-discovery.md`
- design: `specs/csdl-bieu-08/ui/design.md`
- requirement: `specs/csdl-bieu-08/po/requirement.md`
- control-hint: `specs/_data-analy/features/csdl-bieu-08-control-hint.md`
- real-data: `specs/_data-analy/features/csdl-bieu-08-real-data.md`
