# STATUS — nghiem-thu

| Field | Value |
|-------|-------|
| feature | `nghiem-thu` |
| phase | `done` |
| status | `done` |
| packKind | `list` |
| demo | **N/A** |
| context | `D:/AI-QLBD/Linm.RMMS.Data/docs/context/features/nghiem-thu.md` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Field` |
| mfeStdRoute | `/nghiem-thu` |
| mfeStdUrl | `http://localhost:9304/nghiem-thu` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · DOMAIN-MAP — **cấm ERP.*** |
| updatedAt | `2026-09-12T10:10:11.575Z` |
| lastRole | `review` · `done` · task `task_1b121e02` · review_confirm=accept |
| contentHash | `sha256:41b14359b00a0bacbd2f5e88ab9ed8f7604f962c4e4e58219bf9c1145b5ef4ea` |
| reviewHash | `sha256:4472b6cd5498ba5a206c9c21463c4adffe19c1c26299ccdfbc21757d190f8e1a` |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/nghiem-thu/ui/prototype/index.html` |
| peerStdUrl | `http://localhost:9304/patrol` |

## Lock

| agent | scope | id | at |
|-------|-------|-----|-----|
| — | — | — | — |

## Pipeline

| Step | Agent | Artifact | Status |
|------|-------|----------|--------|
| 0 | data-analy | _data-analy/features/nghiem-thu-control-hint.md · nghiem-thu-real-data.md · nghiem-thu-filter-bar.md · handoff/data_analy-compact.md | **confirmed** |
| 1 | po | po/requirement.md · handoff/po-compact.md | **confirmed** |
| 2.1 | design | ui/design.md + prototype + reviewUrl · handoff/design-compact.md | **confirmed** |
| 2.2 | sa | be/solution-discovery.md · handoff/sa-compact.md | **confirmed** |
| 3 | team-lead | task/nghiem-thu.md · handoff/team_lead-compact.md | **confirmed** |
| 4 | dev | implement/nghiem-thu.md · handoff/dev-compact.md | **confirmed** |
| 5 | qa | qa/scenarios.md · handoff/qa-compact.md | **confirmed** |
| 6 | review | review/findings.md · handoff/review-compact.md | **done** |
## Tasks

| id | page | role | deps | status | notes |
|----|------|------|------|--------|-------|
| task_01b899ee | nghiem-thu | data_analy | — | **completed** | changeScope=new_page · packKind=list |
| task_8d642b15 | nghiem-thu | po | data_analy | **completed** | Grid+Leave+Screens · TMPL/STATUS CLOSED · DOMAIN/API → SA |
| task_16791ccc | nghiem-thu | design | po | **completed** | A–D + Full×5 · reviewUrl · design_confirm=approve · hash skip |
| task_25cd95bb | nghiem-thu | sa | design | **completed** | Patrol path · Schema_NghiemThu · TZ/XCO/SHARE · solution_confirm=approve |
| task_9bf1287f | nghiem-thu | team_lead | sa | **completed** | form-type pack §2a · route_confirm=/nghiem-thu · T-* + filter/leave/grid |
| task_dda12f30 | nghiem-thu | dev | team_lead | **completed** | FE+BE build PASS · list+form · Schema_NghiemThu · BFF |
| task_7d0037b7 | nghiem-thu | qa | dev | **completed** | e2eQa PASS · S0/S1/QA-20 · T-QA-* · mfeStdUrl :9304 |
| task_1b121e02 | nghiem-thu | review | qa | **completed** | findings PASS · review_confirm=accept · P0=0 · debt P2/P3 KEEP |

## Blockers / open questions

- CLOSED (SA): GAP-DA-NT-DOMAIN-01 · GAP-DA-NT-API-01 — DOMAIN-MAP `nghiem-thu`→Patrol · `api/v1/patrol/nghiem-thu`
- CLOSED (PO): GAP-DA-NT-TMPL-01 · GAP-DA-NT-STATUS-01 · GAP-DA-NT-FORM-01 · missing_demo_context=continue_no_demo
- CLOSED (Design): zones A–D · Full page 5 cols · LeaveConfirmModal · filter-bar wrap · FileMulti upload
- CLOSED (TL): GAP-TL-FORMTYPE-01 · GAP-TL-GRID-MAP-01 · GAP-TL-FILTER-01 · GAP-TL-LEAVE-01 · route_confirm=approve `/nghiem-thu`
- CLOSED (Dev): yarn build PASS · dotnet Api+Bff PASS · Kind B list + Full form · Leave · ui-schema
- CLOSED (QA): e2eQa PASS · docker+start:std+screens · CRUD real NT-* · mfeStdUrl chốt `:9304`
- CLOSED (Review): review_confirm=accept · QUERY/SEC/UI/BE PASS · P0=0
- HARD: FileService reuse · cấm maintenance WO · cấm ERP.* · lane web only · cấm sessions reuse
- Gates: TZ=required · XCO=required · SHARE=tenant_keep
- Debt KEEP: Auth RequirePermission stub · migrate apply env · e2e npx flake P2 · Leave visual P3

## Links

- data-analy → po → ui → be → task → implement → qa → review
- mfeStdUrl: `http://localhost:9304/nghiem-thu`
- mfeStdRoute: `/nghiem-thu`
- reviewUrl: `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/nghiem-thu/ui/prototype/index.html`
- handoff: `specs/nghiem-thu/handoff/review-compact.md`
- findings: `specs/nghiem-thu/review/findings.md`
- peerStdUrl: `http://localhost:9304/patrol`
- implement: `specs/nghiem-thu/implement/nghiem-thu.md`
- scenarios: `specs/nghiem-thu/qa/scenarios.md`
- task: `specs/nghiem-thu/task/nghiem-thu.md`
- solution: `specs/nghiem-thu/be/solution-discovery.md`
