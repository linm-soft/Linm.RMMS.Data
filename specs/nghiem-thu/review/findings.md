# Review — Findings — nghiem-thu

> Status: **done** · Mode: `review_only` · `review_confirm=accept` (autoApprove ON)  
> reviewHash: `sha256:4472b6cd5498ba5a206c9c21463c4adffe19c1c26299ccdfbc21757d190f8e1a` · rulesVersion: `2026.09.05.03`  
> task: `task_1b121e02` · prior contentHash: `sha256:41b14359b00a0bacbd2f5e88ab9ed8f7604f962c4e4e58219bf9c1145b5ef4ea`

| | |
|--|--|
| Feature | `nghiem-thu` |
| Title | Công tác nghiệm thu — Kind B list + Full form |
| Role | `review` · `/agent-review` |
| Surfaces | list · form · api |
| mfeStdUrl | `http://localhost:9304/nghiem-thu` (QA chốt; packet `:9301` lệch — STATUS authoritative) |
| Live smoke | **cấm** start:std this role · evidence = QA screens + static code |

## Scope

| Surface | Repo / path |
|---------|-------------|
| FE list/form | `Linm.Web.RMMS.Field` · `NghiemThuListPage` · `NghiemThuFormPage` · `services/nghiemThu/*` |
| BE/BFF | `Linm.RMMS.WebService` · Patrol · `api/v1/patrol/nghiem-thu` · BFF proxy |
| QA evidence | `specs/nghiem-thu/qa/scenarios.md` · `qa/screens/*` · manifest `ok=true` · row `NT-*` |

## Findings

| ID | Class | Sev | Where | Repro | Fix hint |
|----|-------|-----|-------|-------|----------|
| REV-S-01 | security | P2 | `NghiemThuController` | `[RequirePermission]` commented TODO Auth stub | Enable when CommonLib ≥1.4.0 · debt KEEP |
| REV-QA-01 | ui-fn | P2 | e2e harness | `yarn e2e-qa` npx resolve flake | GAP-QA-E2E-NPX · local playwright OK |
| REV-UI-02 | ui-fn | P3 | Leave headed | dirty cancel không luôn hiện dialog | LeaveConfirmModal + useFormLeaveGuard wired · visual follow-up |

**P0 / blocking:** none.

## Query (`/review-query`)

- List: `AsNoTracking` + filter status/route/templateType/from–to + search `ILike` multi-field · pageSize whitelist · **0** N+1 media on list (media only on GetById Include).
- Lookups: `init-data` status/template enum · road-route / org via Integration SearchInput · route exists check on write.
- FE endpoint: `/patrol/nghiem-thu` only · **0** `ERP.*`.
- Verdict: **PASS** · no `QUERY-*` P0.

## Security

- Tenant: GetById cross-company → 403 `NghiemThuForbiddenException` + `allowed_company_ids` · SHARE=tenant_keep.
- Auth attribute stub → **REV-S-01** P2 (documented Dev/QA debt) · **không** escalate fix_gaps.
- FE services: **0** token/secret in repo · files via FileService BFF.
- Injection: parameterized EF · path id `guid` · upload purpose scoped.
- Verdict: **PASS** with P2 debt.

## UI function

| Gate | Result | Evidence |
|------|--------|----------|
| Kind B shell LAYOUT-06 | PASS | QA S0/S1 · list page + filters mount |
| HDR / VI / badge | PASS | title «Nghiệm thu» · badge `Thêm`/`Sửa`/`Xem` (không `CREATE`) |
| TB / config | PASS | catalog toolbar · `LinCatalogUiSchemaEditorModal` · **0** configHint |
| FORM-GRID-05 | PASS | `data-form-cols="5"` live QA-20 + source |
| FILTER-RIGHT / DTM / wrap | PASS | `LinErpListFilterBar` + `data-lin-list-layout="erp-filter-bar"` · fragment leading · QA-FILTER-D/T/M |
| Leave | PASS (P3 visual) | `LeaveConfirmModal` · **0** `window.confirm` |
| LKP / enum | PASS | org/route SearchInput · status/template Select ≤10 (gates §1 Dropdown OK) |
| CRUD-EMPTY | PASS | QA-CRUD row `NT-20260912-0001` · **cấm** empty-only |
| Demo note | PASS | **0** GAP/SSOT/stub copy on UI |

## BE function

- Catalog vs SA: List/init/get/create/update/delete + BFF forward · migration `Schema_NghiemThu` · media child guid[].
- Domain Patrol · **cấm** WO / sessions / ERP.*.
- Status codes: 200 / 404 / 422 / 403 aligned.
- Verdict: **PASS**.

## Confirm

`review_confirm` = **accept** (autoApprove ON) · **không** `fix_gaps` · P2/P3 debt KEEP.

## Handoff → Dev (nếu fix)

| Gap | Task hint |
|-----|-----------|
| — | none blocking |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-review |
| skillVersion | 2026.09.05.03 |
| schemaVersion | 1 |
| workflowVersion | qldb-list |
| rulesVersion | 2026.09.05.03 |
| reviewHash | sha256:4472b6cd5498ba5a206c9c21463c4adffe19c1c26299ccdfbc21757d190f8e1a |
| contentHashPrior | sha256:41b14359b00a0bacbd2f5e88ab9ed8f7604f962c4e4e58219bf9c1145b5ef4ea |
| generatedAt | 2026-09-12T10:10:00.000Z |
| versionGate | ok |
| review_confirm | accept |
