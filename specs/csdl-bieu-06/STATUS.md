# STATUS — csdl-bieu-06

| Field | Value |
|-------|-------|
| feature | `csdl-bieu-06` |
| phase | `sa` |
| status | `pending` |
| packKind | `list` |
| changeScope | `edit_page` |
| demo | N/A (packet) · prior hub demo zone-only |
| context | `D:/AI-QLBD/Linm.RMMS.Data/docs/context/features/csdl-bieu-06.md` |
| epicCite | `docs/context/features/csdl-export-print.md` Wave 1 · `T-XLS-S06` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| mfeStdRoute | `/so-ts/csdl-so-sach` · alias `/csdl-bieu-06` |
| mfeStdUrl | `http://localhost:9301/so-ts/csdl-so-sach` |
| hubRoute | `/so-ts/csdl-so-sach?resource=underpasses` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · DOMAIN-MAP — **cấm ERP.*** |
| resource | `underpasses` |
| columns | `19` |
| IdCode | `HC-` |
| contentHash | `sha256:e32c48126fa0edbd02e612b7bd917a9ae07e53ec8629dbe01e1bcdcf82759fa3` |
| updatedAt | `2026-09-18T14:57:01.142Z` |
## Lock

| agent | scope | id | at |
|-------|-------|-----|----|
| — | — | — | — |

## Pipeline

| Step | Agent | Artifact | Status |
|------|-------|----------|--------|
| 0 | data-analy | _data-analy/features/csdl-bieu-06-control-hint.md · csdl-bieu-06-real-data.md · handoff/data_analy-compact.md | **confirmed** |
| 1 | po | po/requirement.md · handoff/po-compact.md | **confirmed** |
| 2.1 | design | ui/design.md + prototype + reviewUrl · handoff/design-compact.md | **confirmed** |
| 2.2 | sa | be/solution-discovery.md · handoff/sa-compact.md | **pending** |
| 3 | team-lead | task/csdl-bieu-06.md · handoff/team_lead-compact.md | **pending** |
| 4 | dev | implement/csdl-bieu-06.md · handoff/dev-compact.md | **pending** |
| 5 | qa | qa/scenarios.md · handoff/qa-compact.md | **pending** |
| 6 | review | review/findings.md · handoff/review-compact.md | **pending** |
## Tasks

| id | page | role | deps | status | notes |
|----|------|------|------|--------|-------|
| task_b6ef926c | csdl-bieu-06 | data_analy | — | **completed** | changeScope=new_page · 19 cột · resource=underpasses · IdCode HC- |
| task_93f99dd1 | csdl-bieu-06 | po | data_analy | **completed** | packKind=list · alias_now · typed 19 · open Q chốt autopilot |
| task_2224e771 | csdl-bieu-06 | design | po | **completed** | design_confirm=approve · reviewUrl · typed 19 · Slideout 2col · hash skip |
| task_789a57e3 | csdl-bieu-06 | sa | design | **completed** | solution_confirm=approve · Schema_CsdlBieu6 · FormMode↔API · gates tz_na/xco_get_only/share_tenant |
| task_149f14d2 | csdl-bieu-06 | team_lead | sa | **completed** | route_a · T-* matrix · Schema_CsdlBieu6 · team_lead_confirm=approve |
| task_f79fea88 | csdl-bieu-06 | dev | team_lead | **completed** | FE CsdlBieu06Page · Schema_CsdlBieu6 · yarn+dotnet build PASS · e2e queued QA |
| task_eb952548 | csdl-bieu-06 | qa | dev | **completed** | e2e S0/S1/QA-20 PASS · verdict PASS · next Review |
| task_3c7fa889 | csdl-bieu-06 | review | qa | **completed** | review_confirm=done · QUERY/SEC/UI-FN/BE-FN PASS · hash skip |
| task_4f26a959 | csdl-bieu-06 | data_analy | — | **completed** | changeScope=edit_page · T-XLS-S06 · Xuất Excel catalogToolbar · golden Cục 16-sheet · **cấm** filter-bar · **cấm** new_page typed |
| task_fec070f9 | csdl-bieu-06 | po | data_analy | **completed** | edit_page · T-XLS-S06 · Q-XLS filtered/export_only_p0/filename · AC-XLS-01..09 · handoff Design |

## Blockers / open questions

- Q-XLS-* **closed** PO (filtered · export_only_p0 · `Bieu06_HamChuiHopKT_{yyyyMMdd}.xlsx`) · SA chốt ext / page-all
- Toast stub ≠ export done · typed CRUD done ≠ export xong
- **Cấm** golden hồ sơ 12+8 · **cấm** GAP-FILTER-BAR-08

## Links

- data-analy → po → ui → be → task → implement → qa → review
- epic: `docs/context/features/csdl-export-print.md` · `T-XLS-S06`
- mfeStdUrl: `http://localhost:9301/so-ts/csdl-so-sach`
- mfeStdRoute: `/so-ts/csdl-so-sach` · alias `/csdl-bieu-06`
- hub: `/so-ts/csdl-so-sach?resource=underpasses`
- reviewUrl: `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-bieu-06/ui/prototype/csdl-bieu-06-list-prototype.html`
- handoff: `specs/csdl-bieu-06/handoff/data_analy-compact.md` · `po-compact.md` · (design/sa/… delta pending)
- prior typed: `po/` · `ui/` · `be/` · **giữ** · delta export only
- control-hint: `specs/_data-analy/features/csdl-bieu-06-control-hint.md`
- real-data: `specs/_data-analy/features/csdl-bieu-06-real-data.md`
