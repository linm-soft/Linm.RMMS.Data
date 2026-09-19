# Implement — job-title

| Field | Value |
|-------|-------|
| feature | `job-title` |
| status | **done** |
| changeScope | `new_page` · packKind=`master` |
| domain | Integration · `api/v1/integration/job-titles` |
| mfe | `Linm.Web.RMMS.Master` · `/mas/chuc-vu` |
| mfeStdRoute | `/mas/chuc-vu` |
| mfeStdUrl | `http://localhost:9318/mas/chuc-vu` |
| formPattern | Slideout · `data-form-cols=2` |
| verify | MFE `yarn build` **PASS** · API `dotnet build` **PASS** · BFF `dotnet build` **PASS** |
| updatedAt | `2026-09-19T03:15:00.000Z` |
| task | `task_f94ade78` · prior TL `task_7017698c` |
| sourceContentHash | `sha256:fdd8fabdbf6bf58d33835fa5d4d1da37922f18062175288d9316f9ced76071ab` |

## Build

| Check | Result |
|-------|--------|
| MFE `yarn build` (cwd Master) | **PASS** — webpack 5.109.2 compiled successfully |
| API `dotnet build` RMMS.Service.Api | **PASS** — 0 errors |
| BFF `dotnet build` Integration.Bff | **PASS** — 0 errors |
| overlay / webpack WARNING | none observed at build |

## Done checklist

- [x] T-PERM-01 — `useJobTitlePermissions` · `master.job-titles.read\|create\|update\|delete` · local mode
- [x] T-DM-01 — DOMAIN-MAP `job-title` → Integration CRUD catalog share_a · resource `job-titles`
- [x] T-BE-CRUD-01 — Entity · DTOs · Service · Controller API-01/02/04…07 · soft-delete 409 if user refs
- [x] T-BE-INIT-01 — API-03 init-data titleGroups + packageHints + titleGroupPackageMap
- [x] T-SEED-01 — `Seed_RmmsJobTitles` · 19 rows from `job-title-seed.json`
- [x] T-BFF-01 — `JobTitlesBffController` proxy list/search/init/CRUD
- [x] T-BE-UISCHEMA-01 — registry + seed catalogKind `job-title`
- [x] T-UI-FILTER-01 — LinErpListFilterBar · search + titleGroup · init-data only
- [x] T-UI-LIST-01 — LinPageLayout · LinCatalogDataGrid · LinCatalogListPagination · `/mas/chuc-vu`
- [x] T-UI-CFG-01 — LinCatalogUiSchemaEditorModal
- [x] T-UI-FORM-01 — Slideout 2 cột · C/E/V/Copy
- [x] T-UI-LEAVE-01 — LeaveConfirmModal + useLeaveConfirm
- [x] T-UI-ACT-01 — toolbar + row menu Xem/Sửa/Sao chép/Lịch sử/Xóa
- [x] T-UI-LKP-01 — API-02 search ship (consumer users out of pack)
- [x] T-UI-FIELD-01 / T-UI-PROD-01 / T-UI-UX-01 — field wire · no demoItems · no window.alert/confirm
- [x] T-UI-RESP-01 — Desktop/Tablet same layout pattern (peer AssetType)
- [x] T-UI-HIST-01 — LinCatalogHistoryModal · documentType=`job-title`
- [x] T-CTX-01 — context route `/mas/chuc-vu` · seed SSOT
- [ ] T-QA-* — queued `/agent-qa*` only (e2eQa ON · **not** run in Dev)

## Key paths

| Layer | Path |
|-------|------|
| Entity | `RMMS.Service.Persistence/Entities/JobTitleEntity.cs` |
| DTOs | `LINM.RMMS.Integration.Models/DTOs/JobTitleDtos.cs` |
| API | `Domains/Integration/Controllers/JobTitlesController.cs` |
| Service | `Domains/Integration/Services/JobTitleService.cs` |
| BFF | `LINM.RMMS.Integration.Bff/Controllers/JobTitlesBffController.cs` |
| Migration | `20260918194841_Schema_RmmsJobTitles` · `20260918194928_Seed_RmmsJobTitles` |
| FE list | `pages/JobTitleListPage/` |
| FE form deep-link | `pages/JobTitleFormPage/` |
| FE perm | `hooks/useJobTitlePermissions.ts` |
| FE svc | `services/jobTitle/` |
| Seed | `docs/context/seed/job-title-seed.json` |

## FormMode ↔ API

| Mode | API |
|------|-----|
| List | API-01 GET `/` |
| Create | API-05 POST `/` (+ API-03) |
| Edit | API-04 GET → API-06 PUT (code lock) |
| View | API-04 GET |
| Copy | API-04 → API-05 |
| Delete | API-07 DELETE soft |
| Dropdown | API-03 init-data |
| SearchInput peer | API-02 `/search` |

## Debt

- `[RequirePermission("master.job-titles.*")]` TODO stub (parity AssetType / CommonLib)
- Migrations added — **not** applied to live DB in this role (`dotnet ef database update` = ops)
- `job-title-filter-bar.md` context file missing — filter implemented peer AssetType; QA may create via `/filter-bar-context`
- Consumer staff/ProfileTab SearchInput UI out of pack (API-02 ready)
- Auth package CRUD / menu / Excel alias expand — GAP-JOB-01/03/04 out of pack

## QA verdict

**FAIL** (`task_bd915c30` · 2026-09-18T20:20:00.000Z). Live `GET /api/v1/integration/job-titles` và BFF init-data/ui-schema **404** · lưới empty · 🔍 không mép phải card (gap 230px) · title 20px. Scenarios: `specs/job-title/qa/scenarios.md`. Không sửa prod trong role QA.

## Version meta

| Field | Value |
|-------|-------|
| skillId | `agent-dev` |
| skillVersion | `2026.09.05.03` |
| workflowVersion | `2026.09.19.01` |
| rulesVersion | `2026.09.19.2` |
| schemaVersion | `1` |
| versionGate | `ok` |
| generatedAt | `2026-09-19T03:15:00.000Z` |
