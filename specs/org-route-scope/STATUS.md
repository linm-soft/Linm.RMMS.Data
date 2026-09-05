# STATUS — org-route-scope

| Field | Value |
|-------|-------|
| feature | `org-route-scope` |
| phase | `done` |
| status | `done` |
| packKind | `master` |
| changeScope | `new_page` |
| demo | **N/A** |
| context | `D:/AI-QLBD/Linm.RMMS.Data/docs/context/features/org-route-scope.md` |
| controlHint | `D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/org-route-scope-control-hint.md` |
| realData | `D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/org-route-scope-real-data.md` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Master` |
| mfeStdRoute | `/org-route-scope` |
| mfeStdUrl | `http://localhost:9301/org-route-scope` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · DOMAIN-MAP Integration · resource `org-route-scopes` · **cấm ERP.*** |
| task | `task_badbc48d` |
| contentHash | `sha256:81b3c9a520472625cc78375571d1d94ae34a6badc62a7a7bf21f0a2eac7894dc` |
| updatedAt | `2026-08-30T12:32:04.986Z` |
## Lock

| agent | scope | id | at |
|-------|-------|-----|-----|
| — | — | — | — |

## Pipeline

| Step | Agent | Artifact | Status |
|------|-------|----------|--------|
| 0 | data-analy | `_data-analy/features/org-route-scope-control-hint.md` · `org-route-scope-real-data.md` | **confirmed** |
| 1 | po | po/requirement.md | **confirmed** |
| 2.1 | design | ui/design.md + prototype + reviewUrl | **confirmed** |
| 2.2 | sa | be/solution-discovery.md | **confirmed** |
| 3 | team-lead | task/org-route-scope.md | **confirmed** |
| 4 | dev | implement/org-route-scope.md | **confirmed** |
| 5 | qa | qa/scenarios.md | **confirmed** |
| 6 | review | review/findings.md | **done** |
## Confirms

| Gate | Value |
|------|-------|
| design_confirm | **confirmed** (user Approve board) |
| solution_confirm | **confirmed** (user Approve board) |
| be_repo_confirm | **approve** · `Linm.RMMS.WebService` |
| ui_repo_confirm | **approve** · `Linm.Web.RMMS.Master` |
| review_confirm | **confirmed** (user Approve board) |
| version_mismatch_action | **rechecked** · workflow `2026.08.29.04` |

## Tasks

| id | page | role | deps | status | notes |
|----|------|------|------|--------|-------|
| T-CTX-01 | — | Dev | — | **done** | DOMAIN-MAP + context |
| T-BE-SCHEMA-01 | — | Dev | T-CTX-01 | **done** | Schema_RmmsOrgRouteScopes · Step 4b |
| T-BE-CRUD-01 | — | Dev | T-BE-SCHEMA-01 | **done** | API-01…07 + overlap |
| T-BE-SEG-01 | — | Dev | T-BE-CRUD-01 | **done** | API-08…10 |
| T-BE-INIT-01 | — | Dev | T-BE-CRUD-01 | **done** | init-data |
| T-BE-SEARCH-01 | — | Dev | T-BE-CRUD-01 | **done** | /search · exclude KM* |
| T-BE-UISCHEMA-01 | — | Dev | T-BE-CRUD-01 | **done** | catalogKind org-route-scopes |
| T-BFF-01 | — | Dev | T-BE-CRUD-01 | **done** | proxy only · docker image follow-up GAP-QA-BFF-DOCKER-01 |
| T-PERM-01 | — | Dev | T-BE-CRUD-01 | **done** | master.org-route-scopes.* |
| T-SEED-01 | — | Dev | T-BE-SCHEMA-01 | **done** | **0** invent-seed |
| T-UI-LIST-01 | `/mas/phan-khu` | Dev `/agent-dev` | T-BFF-01 | **done** | Kind B grid FULL |
| T-UI-FILTER-01 | `/mas/phan-khu` | Dev | T-UI-LIST-01 | **done** | filter-bar.md |
| T-UI-CFG-01 | `/mas/phan-khu` | Dev | T-UI-LIST-01 | **done** | ui-schema FULL |
| T-UI-FORM-01 | Modal | Dev | T-UI-LIST-01 | **done** | C/E/V/Copy · đoạn tab |
| T-UI-LEAVE-01 | Modal | Dev | T-UI-FORM-01 | **done** | LeaveConfirmModal |
| T-UI-ACT-01 | list | Dev | T-UI-LIST-01 | **done** | action inventory |
| T-UI-LKP-01 | form | Dev | T-UI-FORM-01 | **done** | SearchInput peers |
| T-UI-FIELD-01 | form | Dev | T-UI-FORM-01 | **done** | field↔DTO |
| T-UI-PROD-01 | page | Dev | T-UI-LIST-01 | **done** | end-user |
| T-UI-UX-01 | page | Dev | T-UI-FORM-01 | **done** | Slideout 2 cột |
| T-UI-RESP-01 | page | Dev | T-UI-LIST-01 | **done** | responsive shell |
| T-UI-HIST-01 | list | Dev | T-UI-LIST-01 | **done** | history stub |
| T-QA-CRUD-01 | — | QA | UI+BE | **done** | e2e S0/S1/QA-20 PASS |
| T-QA-FORM-01 | — | QA | T-UI-FORM-01 | **done** | field e2e + code |
| T-QA-FILTER-01 | — | QA | T-UI-FILTER-01 | **done** | V1–V5 |
| T-QA-TYP-01 | — | QA | T-UI-UX-01 | **done** | typography |
| T-QA-TAB-01 | — | QA | T-UI-FORM-01 | **done** | tab order |
| T-RV-01 | — | Review | QA | **done** | findings · `review_confirm=approve` |

## Blockers / open questions

- GAP-ORS-CASCADE-01 — cây đủ Cục→Khu→VP→Đơn vị→tuyến→đoạn — Cục **ẩn** (implicit QLĐB) · Khu SearchInput **trong bar** (2 line) **closed** 2026-08-30 · còn filter/list đoạn
- GAP-ORS-VP-01 — `vpOrgCode` đoạn + list cascade cấp trên xem cấp dưới — **closed** 2026-08-30 (`Schema_OrgRouteScopeVpOrgCode`)
- GAP-ORS-01 — **0** invent-seed · empty table OK · config tay / file quản trị
- GAP-ORS-LKP-DISPLAY-01 — SearchInput chọn thiếu tên — **closed** `/edit-web-feature` 2026-08-30 (dual-box mã+tên)
- GAP-ORS-UI-01 — SearchInput org mix Sở — peer fix P1 (OOS deep CRUD this pack)
- GAP-ORS-04 — RoadRoute catalog KmFrom/KmTo **defer P1** · km P0 trên assignment
- GAP-ORS-05 — exclude `KM0+000-*` làm tuyến chính (Dev search filter) — **done** FE+BE
- Thuật ngữ — **Tuyến mẹ** → **Tuyến chính** (form/filter label) — **locked** 2026-08-30
- GAP-ORS-07 — UserRoute/ContractRoute OOS · peer login
- GAP-QA-BFF-DOCKER-01 — docker BFF image 404 `org-route-scopes` · local Release BFF OK — follow-up Ops/Dev publish
- Review — **PASS** · `review_confirm=approve` · pipeline **done**

## Links

- data-analy → po → ui → be → task → implement → qa → review ✅
- mfeStdUrl: `http://localhost:9301/org-route-scope`
- mfeStdRoute: `/org-route-scope` (TL route_confirm=route_a)
- filterBar: `docs/context/features/org-route-scope-filter-bar.md`
- context: `docs/context/features/org-route-scope.md`
- controlHint: `specs/_data-analy/features/org-route-scope-control-hint.md`
- realData: `specs/_data-analy/features/org-route-scope-real-data.md`
- po: `specs/org-route-scope/po/requirement.md` · **confirmed** · `task_70c1a441`
- design: `specs/org-route-scope/ui/design.md` · **confirmed** · `design_confirm=approve` · `task_4126a205`
- reviewUrl: `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/org-route-scope/ui/prototype/org-route-scope-list-prototype.html`
- sa: `specs/org-route-scope/be/solution-discovery.md` · **confirmed** · `solution_confirm=approve` · `task_0c95c02f`
- task: `specs/org-route-scope/task/org-route-scope.md` · **confirmed** · `task_8b1f0e40`
- implement: `specs/org-route-scope/implement/org-route-scope.md` · **confirmed** · `task_966e1ff3`
- qa: `specs/org-route-scope/qa/scenarios.md` · **confirmed** · `task_8148ad6d` · verdict **PASS** · screens S0/S1/QA-20
- review: `specs/org-route-scope/review/findings.md` · **confirmed** · `task_badbc48d` · `review_confirm=approve`
- DOMAIN-MAP: `Linm.RMMS.WebService/docs/DOMAIN-MAP.md` · slug `org-route-scope` → Integration · resource `org-route-scopes`
- queue: `task_badbc48d` · `roleOnly=review` · **PASS**
