# Implement — contract

| Field | Value |
|-------|-------|
| feature | `contract` |
| status | `done` |
| changeScope | `edit_page` |
| gap | `formtype_quality` (LKP/FIELD/PROD/UX) |
| mode | `fix_gaps` |
| packKind | `list` |
| taskId | `task_7573a7b2` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Contract` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · `api/v1/contract/contracts` |
| mfeStdRoute | `/contract` |
| mfeStdUrl | `http://localhost:9312/contract` |
| updatedAt | 2026-08-14T21:40:00.000Z |
| versionGate | rechecked |

## Done this turn — form UX (GAP-DEV-UX-01)

Live review `/contract/new` full-page stretched 2-col → restore **Kind D Slideout** on list (Design). **Không** rewrite list shell.

| Gap | Fix |
|-----|-----|
| GAP-P2-FORM-PATTERN | `ContractFormSlideout` trên list · `/contract/new` + `/:id` → `?form=` |
| GAP-P2-SLIDE-TOP-ACT / DUP-SAVE | Header Slideout = title + ✕ · **Hủy/Lưu chỉ footer** |
| GAP-DEV-UX-01 P3–P4 | `FormRowCol` cols=2 · Money/Number `max-width: 200px` · Hiệu lực từ/đến cùng hàng |
| T-UI-FIELD | Select enum loại/TT · SearchInput nhà thầu/đơn vị · Integer/Number/TextArea |
| T-UI-PROD | Hint nghiệp vụ · **không** chữ Slideout / Kind D trên UI |
| View | `readOnly` cùng form · footer Đóng / Sao chép / Sửa |

**Build:** `yarn typecheck` PASS · `yarn build` PASS (size warnings only)

`mfeStdUrl` list: `http://localhost:9312/contract` · Tạo mới mở overlay (deep-link `/contract/new` vẫn redirect).

## retry.ssot_rereview: **pass** (live re-audit task_7573a7b2 · trước Write)

Live `ContractListPage` + `ContractFormPage` — quality gates vs `form-type-task-pack` / asset parity.

checklist: `tl-grid-ssot` · `list_parity` · `tl-list-shell-height` · `form-type-task-pack` · tree_master? n/a · form  
gaps closed this turn:
- GAP-P2-PROD-SLIDEOUT — removed `ContractFormSlideout` · full-page `ContractFormPage` · View `<dl>`
- GAP-P2-LKP-SELECT — type/status/contractor/org/payStatus `SearchInput` master (cấm native Select catalog)
- GAP-P2-UX-FILTER-WIDTH — removed `filterMaxWidthPx` · spacing 4/8/16 · no emoji footer
- GAP-P2-FIELD — MoneyInput amount/budget/payment · date Input · DTO Create/Update map
then: **fix_all** same surface (list filter + form + routes)

| # | Check | Result |
|---|-------|--------|
| 1 | 1× `LinPageLayout` — no nested CatalogListShell | **PASS** (`ContractListPage.tsx`) |
| 2 | Footer `LinCatalogListPagination` 50/100/200/500 | **PASS** |
| 3 | Flex + `useServerPagedListLoading` + LAYOUT-06 | **PASS** |
| 4 | Toolbar catalog refresh · history · config · add · delete | **PASS** |
| 5 | Filter SearchTextInput + SearchInput type/status — no Tìm btn | **PASS** |
| 6 | `LinCatalogDataGrid` + column resize via `tableConfig` | **PASS** |
| 7 | Zone F schema editor | **PASS** |
| 8 | History modal stub | **PASS** |
| 9 | tree_master | n/a |
| 10 | Form Create/Edit/View/Copy + payment lines | **PASS** (`ContractFormPage` · View `<dl>`) |
| T-UI-LKP / FIELD / PROD / UX | **PASS** |

`implement.list_parity.layout` = `flex-root + GAP-P2-LAYOUT-06 smoke`

## Done this turn (task_7573a7b2 · formtype_quality)

| Task | Result |
|------|--------|
| T-UI-LKP-01 | `services/contract/lookups.ts` · SearchInput type/status (list+form) · contractor/org/pay (form) |
| T-UI-FIELD-01 | Fields map `ContractDto` / Create·Update · MoneyInput · date Input |
| T-UI-PROD-01 | End-user labels · **cấm** chữ «Slideout» trên UI (vẫn dùng component `Slideout`) |
| T-UI-UX-01 | spacing 4/8/12/16 · **form ≤2 field/hàng** (`form-field-grid.md`) · Lin* |
| T-UI-FORM-01 | Kind D `ContractFormSlideout` · footer Hủy/Lưu · `FormRowCol` 1 hàng = 1–2 Item |
| T-UI-ACT-01 | Navigate form page · Delete toolbar/row/form |
| T-BE-CRUD-01 | Verified API-01…05 · no Write delta BE |
| T-UI-LIST-01 | Filter SearchInput · **không** rewrite shell |
| T-UI-MAP-FORM | n/a (packKind=list) |
| Step 4b | BE aligned `api/v1/contract/contracts` · BFF `ContractsBffController` · DOMAIN-MAP Contract |
| Verify | typecheck + webpack + API/BFF Release **PASS** |

## Paths (confirmed)

| Layer | Path |
|-------|------|
| BackendRoot | `D:/AI-QLBD/Linm.RMMS.WebService` |
| API | `api/src/RMMS.Service.Api/Domains/Contract/` |
| Entity | `api/shared/RMMS.Service.Persistence/Entities/ContractEntity.cs` |
| Migration | `20260809145758_Schema_RmmsContracts` |
| BFF | `bff/domains/contract/LINM.RMMS.Contract.Bff/Controllers/ContractsBffController.cs` |
| MFE list | `pages/ContractListPage/ContractListPage.tsx` |
| MFE form | `pages/ContractFormPage/ContractFormPage.tsx` |
| Lookups | `services/contract/lookups.ts` |
| Perm | `services/contract/permissions.ts` |
| Route prefix | `api/v1/contract/contracts` |

**Cấm** ERP.* — void.

## Verify (task_7573a7b2)

```
yarn typecheck → PASS
LINM_RUN_DEV_LOCAL_BUNDLE=1 yarn build → PASS (size warnings only)
dotnet build RMMS.Service.Api -c Release → PASS 0 err
dotnet build RMMS.Service.Bff -c Release → PASS 0 err
```

## Gaps / nợ

- `[RequirePermission]` chờ CommonLib NuGet
- History API stub empty
- Excel / quyết toán full / inventory CRUD / sign+kpi dedicated endpoints = out of pack

## Version meta

| Field | Value |
|-------|-------|
| skillId | agent-dev |
| skillVersion | 2026.08.09.02 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.09.02 |
| generatedAt | 2026-08-14T14:30:00.000Z |
| versionGate | rechecked |
| taskId | `task_7573a7b2` |
