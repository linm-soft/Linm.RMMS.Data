# Implement — csdl-so-sach

| Field | Value |
|-------|-------|
| feature | `csdl-so-sach` |
| status | `done` |
| changeScope | `edit_page` |
| taskId | `task_8872584b` |
| pack | list · roleOnly=dev |
| updatedAt | 2026-08-14T14:32:00.000Z |
| versionGate | rechecked |

## retry.ssot_rereview: **pass**

checklist: `tl-grid-ssot` · `list_parity` · `tl-list-shell-height` · `form-type-task-pack` · tree_master? n/a · form · T-UI-PROD/FIELD/UX  
gaps fixed this turn: **GAP-T-UI-PROD-01** · **GAP-T-UI-FIELD-NOTES** · **GAP-T-UI-UX-COPY**

| Check | Result |
|-------|--------|
| 1× `LinPageLayout` (no nested `CatalogListShell`) | **PASS** (list mode) |
| `LinCatalogDataGrid` + column resize default ON | **PASS** |
| Footer `LinCatalogListPagination` | **PASS** · 50/100/200/500 |
| flex + skeleton + **LAYOUT-06** | **PASS** · `data-catalog-list-page` |
| toolbar `catalogToolbar` | **PASS** · Add/Edit/View/Delete/History/Config |
| filter SearchTextInput — no Tìm btn | **PASS** |
| list_parity Kind B | **PASS** |
| hub Kind G | **PASS** · tabs + KPI + cards · copy user-facing |
| form checklist Z1–Z3 | **PASS** `CsdlFormSlideout` footer-only |
| **cấm** Resource/Slideout/View=readOnly trên UI | **PASS** (removed leak copy) |
| notes = textarea | **PASS** |
| Zone F / History | **PASS** stub |
| Deep-link `?resource=&form=` | **PASS** |

## Done this turn (Dev · task_8872584b)

| Task | Result |
|------|--------|
| T-UI-LIST-01 | Re-audit PASS — no rewrite |
| T-UI-FORM-01 | Footer-only · leave-confirm dirty · View Sửa/Đóng |
| T-UI-ACT-01 | Toolbar + row menu C/E/V/Copy/Delete/History |
| T-UI-PROD-01 | Hub/form: không hiện Resource / Slideout / View=readOnly / API path |
| T-UI-FIELD-01 | notes textarea · Select tỉnh/TT/bên · number km |
| T-UI-LKP-01 | Enum PROVINCES/STATUSES/SIDES (không master lookup API) |
| T-UI-UX-01 | Title VN · KPI «Đã có dữ liệu» |
| T-BE-CRUD-01 | Verify API-00…05 Asset · no ERP · no new BE write |
| T-BFF-01 | Proxy-only verified |
| T-PERM-01 | FE `asset.csdl-records.*` |

## Paths

| Layer | Path |
|-------|------|
| BackendRoot | `D:/AI-QLBD/Linm.RMMS.WebService` |
| API | `Domains/Asset/Controllers/CsdlCatalogRecordsController.cs` |
| Entity | `CsdlCatalogRecordEntity` + `CsdlBookEntryEntity` |
| BFF | `CsdlCatalogRecordsBffController.cs` |
| MFE | `pages/CsdlSoSachPage/` |
| mfeStdRoute | `/asset/csdl-so-sach` |
| mfeStdUrl | `http://localhost:9301/asset/csdl-so-sach` |

**Cấm** ERP.* — void.

## Verify (task_8872584b · 2026-08-14)

```
yarn typecheck → PASS
LINM_RUN_DEV_LOCAL_BUNDLE=1 yarn build → PASS (webpack 5.109.2, 3 size warnings, 0 errors)
dotnet build RMMS.Service.Api -c Release → PASS (0 errors, 0 warnings)
dotnet build LINM.RMMS.Asset.Bff -c Release → PASS (0 errors)
```

**retry.ssot_rereview (live `CsdlSoSachPage.tsx` + `CsdlFormSlideout.tsx`):** 1× LinPageLayout · no nested CatalogListShell · LinCatalogDataGrid · LinCatalogListPagination · toolbar Delete + row menu · deep-link · form footer-only · no Resource/Slideout/View=readOnly leak.

## Debt

| ID | Note |
|----|------|
| SD-AUTH | `[RequirePermission]` TODO BE |
| Excel import | OUT pack · toast stub later |
| History API | Stub empty |
| Per-entity tables | P1 polymorphic facade — split later if needed |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-dev |
| skillVersion | 2026.08.09.02 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.09.02 |
| rulesVersion | 2026.08.09.3 |
| generatedAt | 2026-08-14T14:32:00.000Z |
| versionGate | rechecked |
| formTypePack | task_8872584b |
