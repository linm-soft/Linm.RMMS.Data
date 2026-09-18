# STATUS — csdl-bieu-15

| Field | Value |
|-------|-------|
| feature | `csdl-bieu-15` |
| phase | `done` |
| status | `done` |
| packKind | `list` |
| changeScope | `edit_page` |
| epic | `csdl-export-print` · Wave 1 `T-XLS-S15` |
| demo | N/A (packet) · prior hub demo zone-only |
| context | `D:/AI-QLBD/Linm.RMMS.Data/docs/context/features/csdl-bieu-15.md` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| mfeStdRoute | `/so-ts/csdl-so-sach` · alias `/csdl-bieu-15` |
| mfeStdUrl | `http://localhost:9301/so-ts/csdl-so-sach` |
| hubDeepLink | `/so-ts/csdl-so-sach?resource=ops-facilities` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · DOMAIN-MAP — **cấm ERP.*** |
| resource | `ops-facilities` |
| contentHash | `sha256:8a85d68eaef24cf98c312f83a3a100de25b1212e8a751d6f1f42005d38dd0fc8` |
| headerFingerprint | `sha256:0064a4903777f7ea8d51c7423d8451a20daf77a5934929001905edaa380f4fe4` |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-bieu-15/ui/prototype/csdl-bieu-15-list-prototype.html` |
| design_confirm | `approve` (autoApprove ON · XLS · `task_c0f936f4`) |
| solution_confirm | `approve` (autoApprove ON · XLS · `task_a5aa9767`) |
| route_confirm | `route_a` (keep) |
| team_lead_confirm | `approve` (autoApprove ON · XLS · `task_ad295ce2`) |
| review_confirm | `approve` (autoApprove ON · XLS · `task_9dc96940`) |
| yarnBuild | **PASS** (XLS `task_88a1f9c1`) |
| yarnTypecheck | — (build PASS) |
| dotnetBuild | **PASS** (XLS `task_88a1f9c1`) |
| e2eQa | **PASS** · S0/S1/QA-20 + S-XLS-EXPORT · `task_2d0725d3` |
| qaTaskId | `task_2d0725d3` |
| qa_verdict | **PASS** · T-XLS-S15-QA-01 · `Bieu15_TMC_Tram_Hat_20260918.xls` |
| reviewTaskId | `task_9dc96940` |
| review_verdict | **PASS** · T-XLS-S15 · GAP-BIEU15-XLS-01..07 CLOSED |
| taskId | `task_9dc96940` |
| dataAnalyDoneAt | `2026-09-18T02:10:00.000Z` (XLS · `task_4b6f0c6e`) |
| dataAnaly | `PASS` · edit_page T-XLS-S15 · control-hint + real-data + compact · `task_4b6f0c6e` |
| poDoneAt | `2026-09-18T02:13:10.000Z` (XLS · `task_18337e1c`) |
| po | `PASS` · edit_page T-XLS-S15 · Q-XLS-* autoApprove · requirement + compact · `task_18337e1c` |
| designDoneAt | `2026-09-18T02:20:00.000Z` (XLS · `task_c0f936f4`) |
| design | `PASS` · edit_page T-XLS-S15 · +Xuất Excel toolbar · Import ẩn · prototype + compact · `task_c0f936f4` |
| saDoneAt | `2026-09-18T02:25:00.000Z` (XLS · `task_a5aa9767`) |
| sa | `PASS` · edit_page T-XLS-S15 · BFF binary export · Schema_CsdlBieu15 keep · compact · `task_a5aa9767` |
| teamLeadDoneAt | `2026-09-18T02:30:00.000Z` (XLS · `task_ad295ce2`) |
| teamLead | `PASS` · edit_page T-XLS-S15 · T-XLS-S15-* · route_a keep · `/implement-export-import-excel` · compact · `task_ad295ce2` |
| devDoneAt | `2026-09-18T02:40:00.000Z` (XLS · `task_88a1f9c1`) |
| dev | `PASS` · T-XLS-S15-BE/BFF/FE · yarn+dotnet PASS · implement + compact · `task_88a1f9c1` |
| qaDoneAt | `2026-09-18T02:41:00.000Z` (XLS · `task_2d0725d3`) |
| qa | `PASS` · T-XLS-S15-QA-01 · e2e S0/S1/QA-20 · scenarios + compact · `task_2d0725d3` |
| reviewDoneAt | `2026-09-18T02:50:00.000Z` (XLS · `task_9dc96940`) |
| review | `PASS` · findings QUERY/SEC/UI-FN/BE-FN · review_confirm=approve · compact · `task_9dc96940` |
| updatedAt | `2026-09-18T02:46:07.737Z` |
## Lock

| agent | scope | id | at |
|-------|-------|-----|----|
| review | feature | task_9dc96940 | 2026-09-18T02:50:00.000Z · **released** (DoR PASS) |

## Pipeline

| Step | Agent | Artifact | Status |
|------|-------|----------|--------|
| 0 | data-analy | _data-analy/features/csdl-bieu-15-control-hint.md · csdl-bieu-15-real-data.md · handoff/data_analy-compact.md | **confirmed** |
| 1 | po | po/requirement.md · handoff/po-compact.md | **confirmed** |
| 2.1 | design | ui/design.md + prototype + reviewUrl · handoff/design-compact.md | **confirmed** |
| 2.2 | sa | be/solution-discovery.md · handoff/sa-compact.md | **confirmed** |
| 3 | team-lead | task/csdl-bieu-15.md · handoff/team_lead-compact.md | **confirmed** |
| 4 | dev | implement/csdl-bieu-15.md · handoff/dev-compact.md | **confirmed** |
| 5 | qa | qa/scenarios.md · handoff/qa-compact.md | **confirmed** |
| 6 | review | review/findings.md · handoff/review-compact.md | **done** |
## Tasks

| id | page | role | deps | status | notes |
|----|------|------|------|--------|-------|
| task_23453ac3 | csdl-bieu-15 | data_analy | — | **done** | changeScope=new_page · 20 cột · ops-facilities · **keep** |
| task_a73f1c50 | csdl-bieu-15 | po | data_analy | **done** | Q-* autoApprove · alias_now · OF · subset · keep_5 · **keep** |
| task_dbeaf01a | csdl-bieu-15 | design | po | **done** | design_confirm=approve · reviewUrl · typed 20 · 4 section · **keep** |
| task_4d337ade | csdl-bieu-15 | sa | design | **done** | solution_confirm=approve · Schema_CsdlBieu15 · T-DM-01 · **keep** |
| task_94727a59 | csdl-bieu-15 | team_lead | sa | **done** | route_a · T-* matrix · team_lead_confirm=approve · **keep** |
| task_e6ad9bf7 | csdl-bieu-15 | dev | team_lead | **done** | yarn/dotnet PASS · Schema_CsdlBieu15 · CsdlBieu15Page · **keep** |
| task_cb969365 | csdl-bieu-15 | qa | dev | **done** | scenarios + e2e S0/S1/QA-20 PASS · **keep** |
| task_0c28671f | csdl-bieu-15 | review | qa | **done** | findings PASS · review_confirm=approve · **keep** |
| task_4b6f0c6e | csdl-bieu-15 | data_analy | — | **done** | changeScope=edit_page · T-XLS-S15 · § Delta export · keep typed |
| task_18337e1c | csdl-bieu-15 | po | data_analy | **done** | Q-XLS-* autoApprove · filtered · export_only_p0 · one_sheet 20 · **PASS** |
| task_c0f936f4 | csdl-bieu-15 | design | po | **done** | design_confirm=approve · +Xuất Excel · Import ẩn · reviewUrl · **PASS** |
| task_a5aa9767 | csdl-bieu-15 | sa | design | **done** | solution_confirm=approve · BFF binary · Schema keep · T-XLS-S15-* · **PASS** |
| task_ad295ce2 | csdl-bieu-15 | team_lead | sa | **done** | route_a keep · T-XLS-S15-* · team_lead_confirm=approve · `/implement-export-import-excel` · **PASS** |
| task_88a1f9c1 | csdl-bieu-15 | dev | team_lead | **done** | T-XLS-S15-BE/BFF/FE · yarn+dotnet PASS · implement + compact · **PASS** |
| task_2d0725d3 | csdl-bieu-15 | qa | dev | **done** | T-XLS-S15-QA-01 · e2e S0/S1/QA-20 + export · **PASS** |
| task_9dc96940 | csdl-bieu-15 | review | qa | **done** | findings PASS · GAP-XLS CLOSED · review_confirm=approve · **PASS** |

## Blockers / open questions

- XLS Q closed: Q-XLS-SCOPE=`filtered` · Q-XLS-IMPORT=`export_only_p0` · Q-XLS-FILENAME=`Bieu15_TMC_Tram_Hat_{yyyyMMdd}.xls` · Q-XLS-SHEET=`one_sheet`
- GAP-BIEU15-XLS-01..07 **CLOSED** · Review PASS · pipeline **done**
- Debt P1: Import · Auth wire · GAP-QA-E2E-PW-01 P2 · ROAD-TESTID P3 — **không** block

## Links

- data-analy (XLS) → po → ui → be → task → implement → qa → **review** ✓
- epic: `docs/context/features/csdl-export-print.md` · `T-XLS-S15`
- mfeStdUrl: `http://localhost:9301/so-ts/csdl-so-sach`
- hub: `/so-ts/csdl-so-sach?resource=ops-facilities`
- reviewUrl: `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-bieu-15/ui/prototype/csdl-bieu-15-list-prototype.html`
- handoff: `specs/csdl-bieu-15/handoff/review-compact.md`
- findings: `specs/csdl-bieu-15/review/findings.md`
