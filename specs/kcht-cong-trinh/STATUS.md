# STATUS — kcht-cong-trinh

| Field | Value |
|-------|-------|
| feature | `kcht-cong-trinh` |
| phase | `design` |
| status | `in_progress` |
| changeScope | `new_page` |
| packKind | `list` |
| gap | `crud_formtype` |
| mode | `feature_context` |
| runMode | `full_pipeline` |
| demo | — |
| context | `D:/AI-QLBD/Linm.RMMS.Data/docs/context/features/kcht-cong-trinh.md` |
| sourceDoc | `D:/AI-QLBD/Linm.RMMS.Data/docs/tinh-nang/Cung-cap-thong-tin-phan-mem.md` |
| plan | `D:/AI-QLBD/Linm.RMMS.Data/docs/plan/kcht-cong-trinh/PLAN.md` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Contract` (ứng viên — **chưa** `ui_repo_confirm`) |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · prefix **SA chốt** (**cấm ERP.***) |
| domain | **Contract** (widen) × **KchtProject** NEW |
| mfeStdRoute | `/kcht-cong-trinh` (draft — Design/TL confirm) |
| mfeStdUrl | `http://localhost:9301/kcht-cong-trinh` |
| taskId | `task_3b4ed0d9` |
| skillVersion | `2026.08.21.01` |
| schemaVersion | `qldb-workflow-skill-v1` |
| contentHash | `sha256:77c91b35d170a15297c00fd9219f11fbe1f9e51bcab589c0c9b1d7283c702bbe` |
| updatedAt | `2026-08-26T23:59:45.352Z` |
## Lock

| agent | scope | id | at |
|-------|-------|-----|-----|
| — | — | — | released |

## Pipeline

| Step | Agent | Artifact | Status |
|------|-------|----------|--------|
| 0 | data-analy | `_data-analy/features/kcht-cong-trinh-control-hint.md` + `kcht-cong-trinh-real-data.md` | **done** | 2026.08.21.01 | rechecked |
| 1 | po | po/requirement.md | **done** | 2026.08.21.01 | rechecked |
| 2.1 | design | ui/design.md + prototype + reviewUrl | **in_progress** |
| 2.2 | sa | be/solution-discovery.md | pending |
| 3 | team-lead | task/kcht-cong-trinh.md | pending |
| 4 | dev | implement/kcht-cong-trinh.md | pending |
| 5 | qa | qa/scenarios.md | pending |
| 6 | review | review/findings.md | pending |
## Confirms

| Gate | Value |
|------|-------|
| design_confirm | pending |
| solution_confirm | pending |
| be_repo_confirm | pending |
| ui_repo_confirm | pending |
| autoApprove | **ON** |

## Notes

- Nguồn: công văn KQLĐB IV `/KQLĐBIV-QLBT` 08/2026 — 5 phân hệ công trình KCHT.  
- data-analy **done** `task_e3745f39` · contentHash `sha256:77c91b35…` · hash skip — **cấm** re-scan demo.  
- PO **done** `task_3b4ed0d9` · `/agent-po` · Wave 1 PH1 AC: Kind B list + full-page 4 tab · **cấm** Slideout · packKind `list` confirm.  
- Wave 1 PH1: Kind B list + full-page 4 tab (Chung · QĐ · HĐ · File) · **cấm** Slideout.  
- E2E queued `/agent-qa*` — **cấm** start:std ở PO.  
- Release **ngoài** PL01 P1-900.

## Tasks

| id | page | role | deps | status | notes |
|----|------|------|------|--------|-------|
| `task_e3745f39` | kcht-cong-trinh | data_analy | — | **done** | control-hint + real-data |
| `task_3b4ed0d9` | kcht-cong-trinh | po | analy done | **done** | `/agent-po` · autoApprove ON · enqueue design |
