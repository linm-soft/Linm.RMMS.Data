# STATUS — web-rmms-cam-nghiem-thu

| Field | Value |
|-------|-------|
| feature | `web-rmms-cam-nghiem-thu` |
| phase | `done` |
| status | `done` |
| packKind | `list` |
| changeScope | `edit_page` |
| demo | **N/A** |
| context | `D:/AI-QLBD/Linm.RMMS.Data/docs/context/features/web-rmms-cam-nghiem-thu.md` (**created** PO) |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| mfeStdRoute | product `/nghiem-thu*` · alias queue `/web-rmms-cam-nghiem-thu` |
| mfeStdUrl | `http://localhost:9301/web-rmms-cam-nghiem-thu` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · DOMAIN-MAP Patrol · **cấm ERP.*** |
| bff | `Linm.RMMS.Mobile.Bff` `:5202` · **cấm** web-bff |
| contentHash | `sha256:c4e8a1b9d2f57306e8a0c1d4b7f9e2a5c8d0f3b6a9e1c4d7f0b2e5a8c1d4f7b0` |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-cam-nghiem-thu/ui/prototype/index.html` |
| design_confirm | **approve** (autoApprove) |
| solution_confirm | **approve** (autoApprove) |
| route_confirm | **keep** (edit_page · product `/nghiem-thu*` · autoApprove) |
| team_lead_confirm | **approve** (autoApprove) |
| qa_confirm | **approve** (autoApprove · e2e PASS) |
| review_confirm | **approve** (autoApprove · PASS · P0=0) |
| updatedAt | `2026-09-30T19:50:43.438Z` |
## Lock

| agent | scope | id | at |
|-------|-------|-----|-----|
| review | feature | task_36107c82 | 2026-10-01T03:00:00.000Z · **released** (DoR PASS) |

## Pipeline

| Step | Agent | Artifact | Status |
|------|-------|----------|--------|
| 0 | data-analy | `_data-analy/features/web-rmms-cam-nghiem-thu-control-hint.md` · `web-rmms-cam-nghiem-thu-real-data.md` · `handoff/data_analy-compact.md` | **confirmed** |
| 1 | po | po/requirement.md · `handoff/po-compact.md` · CTX created | **confirmed** |
| 2.1 | design | ui/design.md + prototype + reviewUrl · `handoff/design-compact.md` | **confirmed** |
| 2.2 | sa | be/solution-discovery.md · `handoff/sa-compact.md` | **confirmed** |
| 3 | team-lead | task/web-rmms-cam-nghiem-thu.md · `handoff/team_lead-compact.md` | **confirmed** |
| 4 | dev | implement/web-rmms-cam-nghiem-thu.md · `handoff/dev-compact.md` | **confirmed** |
| 5 | qa | qa/scenarios.md · `handoff/qa-compact.md` | **confirmed** |
| 6 | review | review/findings.md · `handoff/review-compact.md` | **done** |
## Tasks

| id | page | role | deps | status | notes |
|----|------|------|------|--------|-------|
| task_85003423 | NghiemThuFormPage · List | data_analy | PLAN-3-VAI #6 | **completed** | edit_page · role NT + camera · cấm giao/hoàn thành SC |
| task_131a0d3f | NghiemThu* role-gate + RO | po | data_analy | **completed** | AC Grid/Form · LIST-VIS · CTX · handoff Design |
| task_d877da9e | NT-L/F prototype · RO zone | design | po | **completed** | reviewUrl · design_confirm approve · hide Tạo · NT-RO-LINK |
| task_bbcbf513 | solution FormMode↔API · DOMAIN bind | sa | design | **completed** | bind nghiem-thu peer · role-gate · RO deep-link · solution_confirm approve |
| task_5d5e31fb | T-* role-gate + RO + Pattern B | team_lead | sa | **completed** | route_confirm keep · team_lead_confirm approve · handoff Dev |
| task_aaa3a7da | NghiemThu* role-gate + RO + alias | dev | team_lead | **completed** | yarn build PASS · BE PASS · Step 4b skip · handoff QA |
| task_0324ce40 | NghiemThu* E2E S0/S1/QA-20 | qa | dev | **completed** | T-QA-FORM/CRUD · `_capture_cam_nghiem_thu.mjs` · role-view AC · soft write/hidden |
| task_36107c82 | review findings QUERY/SEC/UI-FN/BE-FN | review | qa | **completed** | review_confirm approve · P0=0 · compact · **cấm** phase=done |

## Blockers / open questions

- UNCLEAR-NT-CTX: **RESOLVED** — CTX created
- UNCLEAR-NT-LIST-VIS: **RESOLVED** — NT full; tuần đường ẩn; TK/QL_HAT RO · không Tạo
- UNCLEAR-NT-DOMAIN-ROW: **RESOLVED** — bind DOMAIN-MAP `nghiem-thu` / `web-rmms-nghiem-thu` · no new slug
- UNCLEAR-NT-ROLE-SOURCE: **RESOLVED** — deps `web-rmms-role-gate` · `roleCaps.nghiemThu` · seed NGHIEM-THU
- UNCLEAR-NT-RO-LINKS: **RESOLVED** — deep-link `/tuan-duong` + `/phat-hien?status=xong` · GET sessions/findings RO

## Links

- data-analy → po → ui → be → task → implement → qa → review
- compact: `specs/web-rmms-cam-nghiem-thu/handoff/review-compact.md`
- findings: `specs/web-rmms-cam-nghiem-thu/review/findings.md`
- scenarios: `specs/web-rmms-cam-nghiem-thu/qa/scenarios.md`
- screens: `specs/web-rmms-cam-nghiem-thu/qa/screens/{S0,S1,QA-20}.png`
- implement: `specs/web-rmms-cam-nghiem-thu/implement/web-rmms-cam-nghiem-thu.md`
- task: `specs/web-rmms-cam-nghiem-thu/task/web-rmms-cam-nghiem-thu.md`
- solution: `specs/web-rmms-cam-nghiem-thu/be/solution-discovery.md`
- design: `specs/web-rmms-cam-nghiem-thu/ui/design.md`
- reviewUrl: `specs/web-rmms-cam-nghiem-thu/ui/prototype/index.html`
- requirement: `specs/web-rmms-cam-nghiem-thu/po/requirement.md`
- delta: `docs/plan/web-rmms-mobile/PLAN-3-VAI.md`
- mfeStdUrl: `http://localhost:9301/web-rmms-cam-nghiem-thu`
- productRoute: `/nghiem-thu` · `/nghiem-thu/moi` · `/nghiem-thu/:id`
- next: chain complete · review PASS · **cấm** phase=done (GAP-PKT-ROLE-01)
