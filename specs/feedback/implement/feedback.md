# Implement — feedback

| Field | Value |
|-------|-------|
| feature | `feedback` |
| status | `done` |
| changeScope | `edit_page` |
| taskId | `task_d242eb29` |
| updatedAt | 2026-08-09T16:10:00.000Z |
| versionGate | rechecked |

## retry.ssot_rereview: **pass**

checklist: `tl-grid-ssot` · `list_parity` · `tl-list-shell-height` · tree_master? n/a · form  
gaps fixed this turn: greenfield clone from citizen · Integration domain only  
then: **fix_all**

| Check | Result |
|-------|--------|
| 1× `LinPageLayout` (no nested `CatalogListShell`) | **PASS** |
| `LinCatalogDataGrid` + column resize default ON | **PASS** |
| Footer `LinCatalogListPagination` | **PASS** · sizes 50/100/200/500 |
| flex + skeleton + **LAYOUT-06** | **PASS** — reuse citizen shell patterns · `data-catalog-list-page` |
| toolbar `catalogToolbar` | **PASS** · refresh · history · config · create |
| filter SearchTextInput — no Tìm btn | **PASS** |
| list_parity Kind B | **PASS** |
| tree_master? | n/a |
| form checklist Z1–Z3 | **PASS** `FeedbackFormSlideout` Create/Edit/View/Copy · view readOnly · leave-confirm |
| ≠ citizen badge | **PASS** |

## Done this turn (task_d242eb29 resume)

| Task | Result |
|------|--------|
| PO→TL artifacts | Created + autopilot confirm |
| T-CTX-01 | Updated `docs/context/features/feedback.md` API Signed |
| T-BE-01 / T-BE-02 / T-BFF-01 | Integration domain · migration `rmms_app_feedbacks` · BFF proxy |
| T-PERM-01 | FE `permissions.ts` · BE Auth stub TODO |
| T-UI-LIST-01 | FeedbackListPage A–D · LAYOUT-06 |
| T-UI-FORM-01 | FeedbackFormSlideout Z1–Z3 |
| Verify | typecheck + webpack build + BE Release **PASS** |

## Paths (confirmed)

| Layer | Path |
|-------|------|
| BackendRoot | `D:/AI-QLBD/Linm.RMMS.WebService` |
| API | `api/src/RMMS.Service.Api/Domains/Integration/` |
| Entity | `api/shared/RMMS.Service.Persistence/Entities/AppFeedbackEntity.cs` |
| Migration | `20260809160018_Schema_RmmsAppFeedbacks` |
| BFF | `bff/domains/integration/LINM.RMMS.Integration.Bff/Controllers/AppFeedbacksBffController.cs` |
| MFE list | `pages/FeedbackListPage/FeedbackListPage.tsx` |
| MFE form | `pages/FeedbackListPage/FeedbackFormSlideout.tsx` |
| Perm | `services/feedback/permissions.ts` |
| Route prefix | `api/v1/integration/feedbacks` |
| mfeStdRoute | `/integration/feedback` |
| mfeStdUrl | `http://localhost:9314/integration/feedback` |

**Cấm** ERP.* — void.

## Verify (2026-08-09 · task_d242eb29)

```
yarn typecheck → PASS
LINM_RUN_DEV_LOCAL_BUNDLE=1 yarn build → PASS
dotnet build Linm.RMMS.WebService.sln -c Release → PASS (0 Error(s))
```

## Debt

| ID | Note |
|----|------|
| SD-AUTH | `[RequirePermission]` TODO BE (CommonLib NuGet) |
| SD-NOTIFY | email/notify DEFER |
| History API | window.alert stub |
| Schema editor | Config hint dialog P1 |
| GAP-F-FB-01 | Admin inbox UI now in pack (list) — closed for P1 pack |
| GAP-F-FB-02 | BE endpoints Signed under integration/feedbacks |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-dev |
| skillVersion | 2026.08.09.02 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.09.02 |
| rulesVersion | 2026.08.09.02 |
| generatedAt | 2026-08-09T16:10:00.000Z |
| versionGate | rechecked |
