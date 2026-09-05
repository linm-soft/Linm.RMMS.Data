# STATUS — so-ts-convex-mirror

| Field | Value |
|-------|-------|
| feature | `so-ts-convex-mirror` |
| phase | `done` |
| status | `done` |
| packKind | `list` |
| demo | D:/AI-QLBD/Linm.RMMS.Demo/src/demo/features/asset-demo.html |
| context | `D:/AI-QLBD/Linm.RMMS.Data/docs/context/features/so-ts-convex-mirror.md` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| mfeStdRoute | `/so-ts-convex-mirror` |
| mfeStdUrl | `http://localhost:9301/so-ts-convex-mirror` |
| aliasBoard | `/so-ts-convex-mirror` → Navigate live |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · DOMAIN-MAP — **cấm ERP.*** |
| updatedAt | `2026-09-01T16:07:56.914Z` |
| dataAnalyDoR | `PASS` · control-hint + real-data `done` · compact · hash `36242a5e…` |
| poDoR | `PASS` · requirement confirmed · compact · openQ resolved (autoApprove) |
| designDoR | `PASS` · design.md + prototype + reviewUrl · compact · design_confirm=approve (autoApprove) |
| saDoR | `PASS` · solution-discovery confirmed · compact · solution_confirm=approve (autoApprove) · dumpSpecs P1 · flatten DEFER |
| teamLeadDoR | `PASS` · task pack confirmed · route_confirm=route_a · compact · T-* đủ |
| devDoR | `PASS` · implement + compact · MFE/BE build PASS · e2eQa queued |
| qaDoR | `PASS` · scenarios + compact · e2e S0/S1/QA-20 · typecheck+build PASS · autoApprove |
| reviewDoR | `PASS` · findings + compact · review_confirm=approve · P0=0 · P1=0 · autoApprove |

## Lock

| agent | scope | id | at |
|-------|-------|-----|-----|
| — | — | — | — |

## Pipeline

| Step | Agent | Artifact | Status |
|------|-------|----------|--------|
| 0 | data-analy | _data-analy/features/so-ts-convex-mirror-control-hint.md · so-ts-convex-mirror-real-data.md | **confirmed** |
| 1 | po | po/requirement.md | **confirmed** |
| 2.1 | design | ui/design.md + prototype + reviewUrl | **confirmed** |
| 2.2 | sa | be/solution-discovery.md | **confirmed** |
| 3 | team-lead | task/so-ts-convex-mirror.md | **confirmed** |
| 4 | dev | implement/so-ts-convex-mirror.md | **confirmed** |
| 5 | qa | qa/scenarios.md | **confirmed** |
| 6 | review | review/findings.md | **done** |
## Tasks

| id | page | role | deps | status | notes |
|----|------|------|------|--------|-------|
| T-CTX-01 | context+filter-bar | Dev | — | **done** | filter-bar.md |
| T-BE-CRUD-01 | API CRUD | Dev | — | **done** | NAME/QTY · dumpSpecs P1 |
| T-BE-INIT-01 | init-data LOOKUP | Dev | T-BE-CRUD-01 | **done** | assetTypeMsts·shapeCutPosts·materialPosts·locationPosts |
| T-BE-UISCHEMA-01 | ui-schema | Dev | — | **done** | road-assets verify |
| T-BFF-01 | BFF proxy | Dev | T-BE-CRUD-01 | **done** | proxy only |
| T-PERM-01 | perms | Dev | T-BE-CRUD-01 | **done** | Auth DEFER |
| T-UI-LIST-01 | list+grid | Dev | T-BFF-01 | **done** | CONVEX_MIRROR profile · LAYOUT-06 |
| T-UI-FILTER-01 | filter bar | Dev | T-BE-CRUD-01 | **done** | V1–V5 |
| T-UI-CFG-01 | config | Dev | T-BE-UISCHEMA-01 | **done** | full cột |
| T-UI-FORM-01 | form C/E/V/Copy | Dev | T-UI-LIST-01·T-BE-INIT-01 | **done** | S-ATTR 9 attr · Point · Leave |
| T-UI-LEAVE-01 | dirty leave | Dev | T-UI-FORM-01 | **done** | LeaveConfirmModal |
| T-UI-ACT-01 | actions | Dev | T-UI-LIST-01 | **done** | inventory |
| T-UI-LKP-01 | lookups | Dev | API-LKP-* | **done** | SearchInput + LOOKUP_STATIC |
| T-UI-FIELD-01 | fields | Dev | T-UI-FORM-01 | **done** | controlHint 1:1 |
| T-UI-PROD-01 | chrome | Dev | T-UI-LIST-01 | **done** | cấm demo |
| T-UI-UX-01 | UX | Dev | T-UI-FORM-01 | **done** | 5col constitution |
| T-UI-RESP-01 | responsive | Dev | T-UI-LIST-01 | **done** | inherit shell |
| T-UI-HIST-01 | history+alert | Dev | T-UI-LIST-01 | **done** | Modal · cấm alert |
| T-QA-CRUD-01 | e2e CRUD | QA | T-UI-* | **done** | S0/S1/QA-20 + code |
| T-QA-FORM-01 | e2e form | QA | T-UI-FORM-01 | **done** | S-ATTR9 · kmTo ẩn · LOOKUP |
| T-QA-FILTER-01 | e2e filter | QA | T-UI-FILTER-01 | **done** | V1–V5 · DTM |
| T-QA-TYP-01 | typography | QA | T-UI-* | **done** | live |

## Blockers / open questions

- (none — Review DoR PASS · review_confirm=approve · flatten DEFER · Auth DEFER · GAP-QA-E2E-PW-01 noted)

## Links

- data-analy → po → ui → be → task → implement → qa → review ✓
- mfeStdUrl: `http://localhost:9301/so-ts-convex-mirror`
- mfeStdRoute: `/so-ts-convex-mirror` · alias board `/so-ts-convex-mirror`
- reviewUrl: `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/so-ts-convex-mirror/ui/prototype/so-ts-convex-mirror-list-prototype.html`
- handoff compact: `specs/so-ts-convex-mirror/handoff/review-compact.md`
- findings: `specs/so-ts-convex-mirror/review/findings.md`
- scenarios: `specs/so-ts-convex-mirror/qa/scenarios.md`
- screens: `specs/so-ts-convex-mirror/qa/screens/`
