# Dev — Implement — kcht-cong-trinh

> Role: `/agent-dev` · task_40fed195 · autoApprove ON · 2026-08-27

| Field | Value |
|-------|-------|
| feature | `kcht-cong-trinh` |
| status | **done** |
| MFE | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Contract` |
| BE | `D:/AI-QLBD/Linm.RMMS.WebService` |
| API prefix | `api/v1/kcht-ct/projects` |
| BFF | `web-bff/api/v1/kcht-ct/projects` |
| UI schema kind | `kcht-projects` |

## Build verify

| Gate | Result |
|------|--------|
| MFE `yarn build` | **PASS** |
| BE `dotnet build Linm.RMMS.WebService.sln` | **PASS** |

## Delivered

### Backend (Contract domain widen)

- Entities: `KchtProjectEntity`, `KchtProjectDecisionEntity`, `KchtProjectContractEntity`, `KchtProjectAttachmentEntity`
- Widen `ContractEntity` (startDate, completionDate, durationMonths, extensionDate, completionAfterExtension, adjustedAmount, appendices)
- Migration: `Schema_RmmsKchtProjects` (EF auto-generated)
- `KchtProjectsController` API-01…11
- `KchtProjectsBffController` proxy-only
- `CatalogUiSchemaRegistry` + seed kind `kcht-projects`

### Frontend

- Routes: `/kcht-cong-trinh`, `/kcht-cong-trinh/tao-moi`, `/kcht-cong-trinh/:id`
- `KchtProjectListPage` Kind B A–D+F (no KPI strip)
- `KchtProjectFormPage` full-page 4 tab (Chung · QĐ · HĐ · File)
- `buildDynamicGridColumns` + `LinCatalogUiSchemaEditorModal`
- Services: `kchtProjectService`, lookups (province static P1, Integration road/org/partner)
- Handoff: `ContractFormPage` read-only when `from=kcht`
- Permissions stub: `kcht.projects.*`

## retry.ssot_rereview (post-write)

| # | Check | Verdict |
|---|-------|---------|
| 1 | LinPageLayout catalog | **PASS** |
| 2 | LinCatalogListPagination 50/100/200/500 | **PASS** |
| 3 | 8 filter Zone B | **PASS** |
| 4 | LinCatalogDataGrid schema-driven | **PASS** |
| 5 | Zone F ui-schema `kcht-projects` | **PASS** |
| 6 | Routes registered | **PASS** |
| 7 | Form 4 tab index 0–3 | **PASS** |
| 8 | View `<dl>` | **PASS** |
| 9 | Lin confirm (no window.confirm on KCHT pages) | **PASS** |
| 10 | API `kcht-ct/projects` | **PASS** |
| 11 | Handoff `/hd-ns/:id?from=kcht` | **PASS** |
| 12 | No ERP.* / rmms/* | **PASS** |
| 13 | File tab presign | **PARTIAL** — metadata bind stub P1 |
| 14 | Tab HĐ link/create UI | **PARTIAL** — list/unlink/open; create+link via API ready |
| 15 | ownerUserId Integration | **DEFER** P2 |

## Out of pack

- PH2–PH5 surfaces
- KPI strip
- RequirePermission mount
- Full FileService presign UI
- E2E (queued `/agent-qa*`)

## QA verdict (`task_d1044158` · `/agent-qa`)

| Field | Value |
|-------|-------|
| verdict | **PASS** |
| e2eQa | ON · PNG `qa/screens/S0.png` · `S1.png` · `QA-20.png` · manifest `ok:true` |
| mfeStdUrl runtime | `http://localhost:9312/kcht-cong-trinh` |
| gaps non-blocking | File presign stub · Tab HĐ create UI minimal · ownerUserId P2 |
| next | `/agent-review` · **cấm** `phase=done` |
