# STATUS — web-rmms-mobile-a

| Field | Value |
|-------|-------|
| feature | `web-rmms-mobile-a` |
| phase | `done` |
| status | `done` |
| packKind | `list` |
| changeScope | `new_page` |
| demo | **N/A** |
| context | `D:/AI-QLBD/Linm.RMMS.Data/docs/context/features/web-rmms-mobile-a.md` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| mfeStdRoute | `/web-rmms-mobile-a` |
| mfeStdUrl | `http://localhost:9301/web-rmms-mobile-a` |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-mobile-a/ui/prototype/index.html` |
| peerStdUrl | `http://localhost:9301/web-rmms-mobile-a` |
| real_view_parity | `v1` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · DOMAIN-MAP — **cấm ERP.*** |
| updatedAt | `2026-09-25T07:41:38.296Z` |
| contentHash | `sha256:c5b21efdd411635233b56b13ee0b1a318c182c0a488f10d8290481a3dbbd3c2e` |
| reviewHash | `sha256:8dfb19e3d9b2bc0b81efe259195a396d271f497d9ca6549ed332f0d00c36e8ee` |
| skillVersion | `2026.09.05.03` |

## Lock

| agent | scope | id | at |
|-------|-------|-----|-----|
| — | — | — | — |

## Pipeline

| Step | Agent | Artifact | Status |
|------|-------|----------|--------|
| 0 | data-analy | _data-analy/features/web-rmms-mobile-a-control-hint.md · web-rmms-mobile-a-real-data.md · handoff/data_analy-compact.md | **confirmed** |
| 1 | po | po/requirement.md · handoff/po-compact.md | **confirmed** |
| 2.1 | design | ui/design.md + ui/prototype/index.html + reviewUrl · handoff/design-compact.md | **confirmed** |
| 2.2 | sa | be/solution-discovery.md · handoff/sa-compact.md | **confirmed** |
| 3 | team-lead | task/web-rmms-mobile-a.md · handoff/team_lead-compact.md | **confirmed** |
| 4 | dev | implement/web-rmms-mobile-a.md · handoff/dev-compact.md | **confirmed** |
| 5 | qa | qa/scenarios.md · handoff/qa-compact.md | **confirmed** |
| 6 | review | review/findings.md · handoff/review-compact.md | **done** |
## Tasks

| id | page | role | deps | status | notes |
|----|------|------|------|--------|-------|
| T-BE-CRUD-01 | sessions+CI | Dev | — | **done** | Live · 409 dup · migration none |
| T-BE-INIT-01 | LOOKUP_STATIC | Dev | — | **done** | useFormOptions+LOOKUP_STATIC module |
| T-PERM-01 | perm | Dev | T-BE-CRUD-01 | **done** | peer codes KEEP |
| T-UI-HUB-01 | TD-00/01/07·TK-00 | Dev | T-BE-CRUD-01 | **done** | phone cards |
| T-UI-FORM-01 | TD-02/03·TK-01 | Dev | T-BE-CRUD-01·INIT | **done** | Full+Sheet |
| T-UI-ACT-01 | actions | Dev | HUB·FORM | **done** | |
| T-UI-LEAVE-01 | DES-LEAVE | Dev | FORM | **done** | LeaveConfirmModal |
| T-UI-LKP-01 | route | Dev | FORM | **done** | SearchInput |
| T-UI-FIELD-01 | fields | Dev | FORM | **done** | control↔DTO |
| T-UI-PROD-01 | chrome | Dev | HUB·FORM | **done** | end-user |
| T-UI-UX-01 | UX | Dev | HUB·FORM | **done** | constitution |
| T-UI-RESP-01 | DTM | Dev | UX | **done** | phone shell |
| T-UI-HIST-01 | TD-07 | Dev | HUB | **done** | alert overlay |
| T-QA-CRUD-01 | flows | QA | T-UI-* | **done** | S0/S1/QA-20 PASS |
| T-QA-FORM-01 | field↔body | QA | T-QA-CRUD | **done** | form UI + contract |
| T-REV-01 | QUERY/SEC/UI/BE | Review | QA | **done** | P0=0 · accept |
| T-UI-LIST-01 KindB | — | — | — | **WAIVE** | phone hub |
| T-UI-FILTER-01 | — | — | — | **WAIVE** | no LinErpListFilterBar |
| T-UI-CFG-01 | — | — | — | **WAIVE** | no ui-schema |
| T-BE-UISCHEMA-01 | — | — | — | **WAIVE** | wave A |
| T-QA-FILTER-01/02 | — | — | — | **WAIVE** | no filter-bar |

## Blockers / open questions

- none · review **accept** · soft: RequirePermission CommonLib · date locale · LOOKUP_STATIC FE

## Links

- data-analy → po → ui → be → task → implement → qa → review
- mfeStdUrl: `http://localhost:9301/web-rmms-mobile-a`
- mfeStdRoute: `/web-rmms-mobile-a`
- reviewUrl: `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-mobile-a/ui/prototype/index.html`
- handoff: `specs/web-rmms-mobile-a/handoff/review-compact.md`
- findings: `specs/web-rmms-mobile-a/review/findings.md`
- qa: `specs/web-rmms-mobile-a/qa/scenarios.md`
