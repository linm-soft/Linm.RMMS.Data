# STATUS — csdl-so-02

| Field | Value |
|-------|-------|
| feature | `csdl-so-02` |
| phase | `done` |
| status | `done` |
| packKind | `list` |
| changeScope | `edit_page` |
| cr | `nktd-pdf-20260917` · Wave A |
| reviewTaskId | `task_635f47f8` |
| review_confirm | **done** (`autoApprove=ON`) |
| reviewVerdict | **PASS** |
| qaTaskId | `task_2472bc94` |
| qaVerdict | **PASS** |
| demo | D:/AI-QLBD/Linm.RMMS.Demo/src/demo/features/csdl-so-sach-demo.html |
| context | `D:/AI-QLBD/Linm.RMMS.Data/docs/context/features/csdl-so-02.md` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| mfeStdRoute | `/csdl-so-02` |
| mfeStdUrl | `http://localhost:9301/csdl-so-02` |
| hubDeepLink | `/so-ts/csdl-so-sach?resource=patrol-logs` |
| resource | `patrol-logs` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · DOMAIN-MAP — **cấm ERP.*** |
| contentHash | `sha256:3ddc42d7c4404f439925322953f28ffc9d3b263726ac6cf5216065751c19b4d6` |
| headerFingerprint | `sha256:1b032f04f5154622239e0e2bdbebe6923ec76ba9ca33d283b51ebe0062c0d471` |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-so-02/ui/prototype/csdl-so-02-list-prototype.html` |
| route_confirm | `route_a` |
| team_lead_confirm | **approve** (`autoApprove=ON` · `task_a6a264ff`) |
| design_confirm | **approve** (`autoApprove=ON` · `task_b40a0dad`) |
| solution_confirm | **approve** (`autoApprove=ON` · `task_e5236699`) |
| yarnBuild | **PASS** (`task_00facaea`) |
| yarnTypecheck | — |
| dotnetBuild | **PASS** (`task_00facaea`) |
| e2eQa | **PASS** · S0/S1/QA-20 · Wave A locationText · GAP-QA-E2E-PW-01 fallback |
| updatedAt | `2026-09-18T04:12:40.987Z` |
## Lock

| agent | scope | id | at |
|-------|-------|-----|-----|
| review | feature | task_635f47f8 | 2026-09-18T04:10:30.000Z · **released** (DoR PASS · findings + review-compact · review_confirm done · Wave A PASS) |
| qa | feature | task_2472bc94 | 2026-09-18T04:06:10.676Z · **released** (DoR PASS · scenarios + qa-compact · e2e S0/S1/QA-20 · locationText/weather Textarea) |
| dev | feature | task_00facaea | 2026-09-18T04:15:00.000Z · **released** (DoR PASS · LocationText + OR + list col · yarn/dotnet build PASS · implement + dev-compact) |
| team_lead | feature | task_a6a264ff | 2026-09-18T04:00:00.000Z · **released** (DoR PASS · task CR + team_lead-compact · team_lead_confirm approve) |
| sa | feature | task_e5236699 | 2026-09-18T03:50:00.000Z · **released** (DoR PASS · solution-discovery + sa-compact · solution_confirm approve) |
| design | feature | task_b40a0dad | 2026-09-18T03:45:00.000Z · **released** (DoR PASS · design.md + prototype + design-compact · design_confirm approve) |
| po | feature | task_a2fc4833 | 2026-09-18T03:40:00.000Z · **released** (DoR PASS · requirement + po-compact) |
| data_analy | feature | task_2a2fd5c4 | 2026-09-18T03:29:00.290Z · **released** (DoR PASS · control-hint + real-data + compact) |
| review | feature | task_575d1ba6 | 2026-09-06T00:47:09.122Z · **released** (prior new_page) |
| qa | feature | task_50462aa5 | 2026-09-05T17:45:00.000Z · **released** (prior) |

## Pipeline

| Step | Agent | Artifact | Status |
|------|-------|----------|--------|
| 0 | data-analy | _data-analy/features/csdl-so-02-control-hint.md · csdl-so-02-real-data.md · handoff/data_analy-compact.md | **confirmed** |
| 1 | po | po/requirement.md · handoff/po-compact.md | **confirmed** |
| 2.1 | design | ui/design.md + prototype + reviewUrl · handoff/design-compact.md | **confirmed** |
| 2.2 | sa | be/solution-discovery.md · handoff/sa-compact.md | **confirmed** |
| 3 | team-lead | task/csdl-so-02-cr-pdf.md (CR) · **giữ** task/csdl-so-02.md · handoff/team_lead-compact.md | **confirmed** |
| 4 | dev | implement · LocationText · Schema_CsdlSo02LocationText · handoff/dev-compact.md | **confirmed** |
| 5 | qa | qa/scenarios.md · handoff/qa-compact.md · qa/screens | **confirmed** |
| 6 | review | review/findings.md · handoff/review-compact.md | **done** |
## Tasks

| id | page | role | deps | status | notes |
|----|------|------|------|--------|-------|
| task_635f47f8 | csdl-so-02 | review | qa | **completed** | Wave A review PASS · QUERY/SEC/UI-FN/BE-FN · LocationText OR · hash-skip · GAP-PKT-ROLE-01 |
| task_2472bc94 | csdl-so-02 | qa | dev | **completed** | Wave A e2e S0/S1/QA-20 · locationText + weather Textarea · GAP-QA-E2E-PW-01 · GAP-PKT-ROLE-01 |
| task_00facaea | csdl-so-02 | dev | team_lead | **completed** | Wave A LocationText · OR · Textarea · list Vị trí · Schema_CsdlSo02LocationText · yarn/dotnet PASS · GAP-PKT-ROLE-01 |
| task_a6a264ff | csdl-so-02 | team_lead | sa | **completed** | CR PDF Wave A · T-BE-LOC-* · T-FE-LOC-* · **giữ** new_page task · GAP-PKT-ROLE-01 |
| task_e5236699 | csdl-so-02 | sa | design | **completed** | CR PDF Wave A · LocationText DTO · Schema_CsdlSo02LocationText · OR-rule · solution_confirm · GAP-PKT-ROLE-01 |
| task_b40a0dad | csdl-so-02 | design | po | **completed** | CR PDF Wave A · locationText + weather Textarea · OR-rule · G-11/G-12 · GAP-PKT-ROLE-01 |
| task_a2fc4833 | csdl-so-02 | po | data_analy | **completed** | CR PDF Wave A · edit_page · locationText OR · GAP-PKT-ROLE-01 |
| task_2a2fd5c4 | csdl-so-02 | data_analy | — | **completed** | CR PDF Wave A · roleOnly · GAP-PKT-ROLE-01 · edit_page · locationText |
| task_1c1e0895 | csdl-so-02 | data_analy | — | **completed** | prior new_page |
| task_0da1b0a3 | csdl-so-02 | po | data_analy | **completed** | prior new_page |
| task_4a522163 | csdl-so-02 | design | po | **completed** | prior |
| task_c4f160af | csdl-so-02 | sa | design | **completed** | prior |
| task_21de79e2 | csdl-so-02 | team_lead | sa | **completed** | prior |
| task_d4e4f9fe | csdl-so-02 | dev | team_lead | **completed** | prior |
| task_50462aa5 | csdl-so-02 | qa | dev | **completed** | prior |
| task_575d1ba6 | csdl-so-02 | review | qa | **completed** | prior new_page |

## Blockers / open questions

- Wave A Review **PASS** · phase=`done` · Wave B report **park**.
- Debt: FileRef text-ids **GAP-SO02-FILE-01** · Auth/org/XLS DEFER|OUT · GAP-QA-E2E-PW-01.
- `mfeStdUrl` alias `/csdl-so-02` — **cấm** chỉ mở hub.
- Empty list: grid headers hidden — col «Vị trí» in DEFAULT_COLUMNS (verified form + code).

## Links

- data-analy → po → ui → be → task → implement → qa → review
- mfeStdUrl: `http://localhost:9301/csdl-so-02`
- hub: `http://localhost:9301/so-ts/csdl-so-sach?resource=patrol-logs`
- filter-bar: `docs/context/features/csdl-so-02-filter-bar.md`
- CR pack: `specs/_cr/nktd-pdf-20260917/`
- compact: `specs/csdl-so-02/handoff/review-compact.md` · `qa-compact.md` · `dev-compact.md` · `team_lead-compact.md` · `sa-compact.md` · `design-compact.md` · `po-compact.md` · `data_analy-compact.md`
- findings: `specs/csdl-so-02/review/findings.md`
- scenarios: `specs/csdl-so-02/qa/scenarios.md`
- screens: `specs/csdl-so-02/qa/screens/`
- implement: `specs/csdl-so-02/implement/csdl-so-02.md`
- task CR: `specs/csdl-so-02/task/csdl-so-02-cr-pdf.md`
- prior task (giữ): `specs/csdl-so-02/task/csdl-so-02.md`
- solution: `specs/csdl-so-02/be/solution-discovery.md`
- control-hint: `specs/_data-analy/features/csdl-so-02-control-hint.md`
- real-data: `specs/_data-analy/features/csdl-so-02-real-data.md`
- extract: `docs/data/analyzed/nhat-ky-tuan-duong-pdf.md`
- design: `specs/csdl-so-02/ui/design.md`
- reviewUrl: `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-so-02/ui/prototype/csdl-so-02-list-prototype.html`
- migration: `20260918035504_Schema_CsdlSo02LocationText`
