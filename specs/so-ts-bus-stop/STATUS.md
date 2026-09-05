# STATUS — so-ts-bus-stop

| Field | Value |
|-------|-------|
| feature | `so-ts-bus-stop` |
| phase | `done` |
| status | `done` |
| packKind | `list` |
| demo | D:/AI-QLBD/Linm.RMMS.Demo/src/demo/features/asset-demo.html |
| context | `D:/AI-QLBD/Linm.RMMS.Data/docs/context/features/so-ts-bus-stop.md` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| mfeStdRoute | `/so-ts-bus-stop` |
| mfeStdUrl | `http://localhost:9301/so-ts-bus-stop` |
| liveList | `/so-ts?type=BUS_STOP` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · DOMAIN-MAP — **cấm ERP.*** |
| contentHash | `sha256:c1af893aa22666c6c7941b086d81a47824dda068262aa58824b3657b7f2a4f0f` |
| updatedAt | `2026-09-01T08:15:32.865Z` |
## Lock

| agent | scope | id | at |
|-------|-------|-----|-----|
| — | — | — | — |

## Pipeline

| Step | Agent | Artifact | Status |
|------|-------|----------|--------|
| 0 | data-analy | _data-analy/features/so-ts-bus-stop-control-hint.md · so-ts-bus-stop-real-data.md · handoff/data_analy-compact.md | **confirmed** |
| 1 | po | po/requirement.md · handoff/po-compact.md | **confirmed** |
| 2.1 | design | ui/design.md + prototype + reviewUrl · handoff/design-compact.md | **confirmed** |
| 2.2 | sa | be/solution-discovery.md · handoff/sa-compact.md | **confirmed** |
| 3 | team-lead | task/so-ts-bus-stop.md · handoff/team_lead-compact.md | **confirmed** |
| 4 | dev | implement/so-ts-bus-stop.md · handoff/dev-compact.md | **confirmed** |
| 5 | qa | qa/scenarios.md · handoff/qa-compact.md | **confirmed** |
| 6 | review | review/findings.md · handoff/review-compact.md | **done** |
## Tasks

| id | page | role | deps | status | notes |
|----|------|------|------|--------|-------|
| T-CTX-01 | list | Dev | — | **done** | filter-bar.md created |
| T-BE-CRUD-01 | api | Dev | — | **done** | GAP-DD-NAME/SPEC/PREFIX |
| T-BE-INIT-01 | api | Dev | T-BE-CRUD-01 | **done** | busStop* LOOKUP |
| T-BE-UISCHEMA-01 | api | Dev | — | **done** | road-assets verify |
| T-BFF-01 | bff | Dev | T-BE-CRUD-01 | **done** | proxy only |
| T-PERM-01 | api | Dev | T-BE-CRUD-01 | **done** | Auth DEFER |
| T-UI-LIST-01 | list | Dev | T-BFF-01 | **done** | BUS_STOP profile · LAYOUT-06 |
| T-UI-FILTER-01 | list | Dev | T-BE-CRUD-01 | **done** | filter-bar V1–V5 |
| T-UI-CFG-01 | list | Dev | T-BE-UISCHEMA-01 | **done** | full cột |
| T-UI-FORM-01 | form | Dev | T-UI-LIST-01 · T-BE-INIT-01 | **done** | S-ATTR · DX- · kmTo ẩn |
| T-UI-LEAVE-01 | form | Dev | T-UI-FORM-01 | **done** | LeaveConfirmModal |
| T-UI-ACT-01 | list | Dev | T-UI-LIST-01 | **done** | action inventory |
| T-UI-LKP-01 | form | Dev | — | **done** | SearchInput + LOOKUP_STATIC |
| T-UI-FIELD-01 | form | Dev | T-UI-FORM-01 | **done** | dumpSpecs keys 1:1 |
| T-UI-PROD-01 | list | Dev | T-UI-LIST-01 | **done** | end-user chrome |
| T-UI-UX-01 | form | Dev | T-UI-FORM-01 | **done** | 5col constitution |
| T-UI-RESP-01 | list | Dev | T-UI-LIST-01 | **done** | 1280/768/375 |
| T-UI-HIST-01 | list | Dev | T-UI-LIST-01 | **done** | History Modal |
| T-QA-CRUD-01 | e2e | QA | T-UI-* | **done** | PASS · S0/S1/QA-20 |
| T-QA-FORM-01 | e2e | QA | T-UI-FORM-01 | **done** | PASS · kmTo ẩn · Tên điểm |
| T-QA-FILTER-01 | e2e | QA | T-UI-FILTER-01 | **done** | PASS · V1–V5 |
| T-QA-FILTER-02 | e2e | QA | T-UI-FILTER-01 | **done** | PASS · DTM 0 overflow |
| T-QA-TYP-01 | e2e | QA | T-UI-UX-01 | **done** | PASS |
| T-QA-TAB-01 | e2e | QA | T-UI-UX-01 | **done** | PASS |
| T-REV-01 | review | Review | T-QA-* | **done** | PASS · review_confirm=done · P0=0 |

## Blockers / open questions

- none (Review DoR PASS · review_confirm=done · P0=0)
- debt: Auth DEFER · Schema_* flatten P2 · GAP-QA-E2E-PW-01 · GAP-QA-E2E-HAF-01 · GAP-QA-E2E-DOCKER-01 (info)

## Links

- data-analy → po → ui → be → task → implement → qa → review
- liveList: `http://localhost:9301/so-ts?type=BUS_STOP`
- mfeStdUrl: `http://localhost:9301/so-ts-bus-stop`
- mfeStdRoute: `/so-ts-bus-stop`
- alias board: `http://localhost:9301/so-ts-bus-stop` → live
- reviewUrl: `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/so-ts-bus-stop/ui/prototype/so-ts-bus-stop-list-prototype.html`
- handoff: `specs/so-ts-bus-stop/handoff/review-compact.md`
- prior: `specs/so-ts-bus-stop/handoff/qa-compact.md`
- findings: `specs/so-ts-bus-stop/review/findings.md`
- scenarios: `specs/so-ts-bus-stop/qa/scenarios.md`
- screens: `specs/so-ts-bus-stop/qa/screens/`
- filter-bar: `docs/context/features/so-ts-bus-stop-filter-bar.md`
