# Review — csdl-so-sach

| Field | Value |
|-------|-------|
| feature | `csdl-so-sach` |
| this role | `review` · `/agent-review` |
| status | `await_confirm` |
| review_confirm | **pending** (`autoApprove=OFF` · user Approve board) |
| changeScope | `edit_page` |
| packKind | `list` · Kind B catalog + Kind G hub |
| productRoot | `D:/AI-QLBD/Linm.RMMS.Data` |
| MFE | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| mfeStdRoute | `/asset/csdl-so-sach` |
| mfeStdUrl | `http://localhost:9301/asset/csdl-so-sach` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · `api/v1/asset/csdl-records` |
| BFF | `web-bff/api/v1/asset/csdl-records` |
| autoApprove | **OFF** |
| chain | **ON** · pipeline leaf — không role sau Review |
| prior · qa | `done` · `qa/scenarios.md` · `task_4a2be2fe` |
| prior · dev | `done` · `implement/csdl-so-sach.md` · `task_8872584b` |
| taskId | `task_f3691e8e` |
| updatedAt | `2026-08-15T16:52:00.000Z` |

**Phương pháp:** static re-audit live `CsdlSoSachPage.tsx` + `CsdlFormSlideout.tsx` + `csdlSoSachStore.ts` + BE `CsdlCatalogRecordsController` + BFF `CsdlCatalogRecordsBffController` + DOMAIN-MAP `csdl-so-sach` → Asset. **Không** write FE/BE (QA T-QA-01 / T-QA-CRUD-01 PASS · không GAP P0). **Cấm** `ERP.*`.

## SSOT surface (live)

| # | Gate | Live | Verdict |
|---|------|------|---------|
| 1 | 1× `LinPageLayout` · **cấm** nested `CatalogListShell` | List: 1× `kind="catalog"` · 0 `CatalogListShell` | **PASS** |
| 2 | `LinCatalogDataGrid` + kéo cột default ON | `tableConfig` từ schema · `catalogListTableConfigFromSchema` | **PASS** |
| 3 | Footer **luôn** `LinCatalogListPagination` | Footer slot · **cấm** `footerPagination` / `pageSizeBar` | **PASS** |
| 4 | flex + skeleton + LAYOUT-06 | `.page` height 100% flex · `data-catalog-list-page` · `skeletonRows={8}` · `gridWrap` | **PASS** |
| 5 | toolbar config | Add/Edit/View/Delete/History/SchemaConfig | **PASS** |
| 6 | list_parity SearchTextInput · **cấm** nút Tìm riêng | `SearchTextInput` + Select tỉnh/TT + date bar | **PASS** |
| 7 | tree_master | N/A Kind G hub + Kind B list | **N/A** |
| Form | Slideout Z1–Z3 footer-only · View `readOnly` prop · notes textarea · **cấm** leak copy Resource/Slideout/View=readOnly | `CsdlFormSlideout` · `MODE_TITLE` VN | **PASS** |
| Hub | 12 biểu + 8 sổ · KPI «Đã có dữ liệu» | `CSDL_RESOURCES`=12 · `SO_RESOURCES`=8 | **PASS** |
| Prefix | `api/v1/asset/csdl-records` · **cấm** `api/v1/rmms/*` · **cấm ERP.*** | Controller + BFF proxy-only | **PASS** |
| Lookup | enum PROVINCES/STATUSES/SIDES | FE store · không master API | **PASS** |
| Deep-link | `?resource=&form=` strip form/id | `useSearchParams` | **PASS** |
| FormType ACT | Toolbar + row menu C/E/V/Copy/Delete | `buildCatalogRowMenuItems` + `deleteRow` | **PASS** |

## Findings

Không P0 / P1 blocking.

| ID | Sev | Where | Disposition |
|----|-----|-------|-------------|
| REV-CSDL-01 | Info | Polymorphic `CsdlCatalogRecord` + child `CsdlBookEntry` | Accept P1 · split tables later |
| REV-CSDL-02 | P1 debt | History API stub `LinCatalogHistoryModal` | Accept · cùng pack asset |
| REV-CSDL-03 | P2 | `[RequirePermission]` TODO CommonLib | Accept · **SD-AUTH** |
| REV-CSDL-04 | P2 | Hub card meta hiện `c.key` slug · `listTitle` `Danh sách · ${resource}` | **GAP-QA-HUB-SLUG** — không fail DoD |
| REV-CSDL-05 | note | Sổ entries Col1–Col3 | **GAP-RPT-SRC-CSDL-01** out of pack |
| REV-CSDL-06 | note | Delete dùng `window.confirm` (không `window.alert`) | Accept P2 UX · QA đã PASS |
| REV-CSDL-07 | — | ERP.* / parent JSON / Domains/Master | **None** |

## Query / Security / BE

- List QS: `resource,search,province,status,fromDate,toDate,page,pageSize` · 422 khi thiếu resource.
- GetById 404 / 403 `ForbiddenAccessException`.
- Soft DELETE trên API. Tenant `X-Company-Id` + Authorization forwarded BFF.
- Permission FE `asset.csdl-records.*`. BE attribute **debt**.
- DOMAIN-MAP: `csdl-so-sach` → Asset · `asset`.

## Gates

| Gate | Result |
|------|--------|
| Design prototype + reviewUrl | confirmed |
| SA solution | confirmed · `api/v1/asset/csdl-records` |
| be_repo / ui_repo | Linm.RMMS.WebService · Linm.Web.RMMS.Asset |
| FormType ACT / T-BE-CRUD / T-QA-CRUD | **PASS** (QA) |
| SSOT list shell | **PASS** |
| VERIFY `yarn typecheck` + `yarn build` | **PASS** (this role · webpack 5.109.2 · 3 size warnings · 0 errors) |
| BE write this role | **n/a** — review_only |
| Prior Dev/QA `dotnet` API+BFF | **PASS** (`task_4a2be2fe`) |

## Confirm

`review_confirm` = **pending** — `autoApprove=OFF`. Khuyến nghị board: **approve** (không `fix_gaps`). User Approve → STATUS `confirmed` / pipeline **done**.

## Verdict

**PASS** — Kind G hub + Kind B list `csdl-so-sach` đóng DoD pack. Residual P2 slug / auth / history / Col1–Col3 **không** chặn accept.

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-review |
| skillVersion | 2026.08.08.21 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.09.02 |
| rulesVersion | 2026.08.09.3 |
| reviewHash | `task_f3691e8e-csdl-so-sach-review-20260815` |
| generatedAt | 2026-08-15T16:52:00.000Z |
| versionGate | rechecked (`recheck_new` · STATUS SSOT) |
| formTypePack | task_4a2be2fe |
| taskId | `task_f3691e8e` |
