# Review — rpt-giay-phep-thi-cong (Giấy phép thi công)

| Field | Value |
|-------|-------|
| feature | `rpt-giay-phep-thi-cong` |
| this role | `review` · `/agent-review` |
| status | `confirmed` |
| review_confirm | **approve** (`autoApprove=ON`) |
| changeScope | `edit_page` |
| packKind | **`report`** (Kind **E**) — packet board `list` **stale** |
| productRoot | `D:/AI-QLBD/Linm.RMMS.Data` |
| MFE | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Report` |
| mfeStdRoute | `/bao-cao/giay-phep-thi-cong` |
| mfeStdUrl | `http://localhost:9311/bao-cao/giay-phep-thi-cong` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · `api/v1/report` |
| BFF | `web-bff/api/v1/report` |
| autoApprove | **ON** |
| chain | **ON** · pipeline leaf — không role sau Review |
| prior · qa | `done` · `qa/scenarios.md` · `task_e2f60a2f` |
| prior · dev | `done` · `implement/rpt-giay-phep-thi-cong.md` · `task_797ce368` |
| skillVersion | `2026.08.15.5` |
| schemaVersion | `1` |
| workflowVersion | `2026.08.15.5` |
| rulesVersion | `2026.08.15.8` |
| versionGate | `keep_current` |
| taskId | `task_e037e3dc` |
| updatedAt | `2026-08-16T05:05:00.000Z` |

**Phương pháp:** static re-audit live `ConstructionPermitReportPage.tsx` + `ConstructionPermitFilterBar.tsx` + `endpoint.ts` `qs`/`exportConstructionPermits` + `lookups.ts` + BE `ReportQueryController` / `FilterConstructionPermits` / `FilterRoute` exact + Report BFF Forward + DOMAIN-MAP. **Không** write FE/BE (QA T-QA-01 PASS · không GAP P0/P1). **Cấm** `ERP.*`.

## SSOT surface (live)

| # | Gate | Live | Verdict |
|---|------|------|---------|
| 1 | 1× `LinPageLayout` `kind="report"` · **cấm** nested CatalogListShell | 1× `kind="report"` · không CatalogListShell | **PASS** |
| 2 | `LinCatalogDataGrid` + kéo cột default ON | Cột `resizable: true` · `tableConfig` force · `visibleColumns` force · migrate `rmms-construction-permit-report-resizable-default-on-v1` | **PASS** |
| 3 | Footer **luôn** `LinCatalogListPagination` | Footer không ẩn · `totalCount=0` khi `!viewed` · BE `AllowedPageSizes` 50/100/200/500 | **PASS** |
| 4 | flex + skeleton | `.page` flex · `skeletonRows={8}` | **PASS** |
| 5 | toolbar config FULL | refresh / chart / print `LinReportPrintScopeModal` / `onEditConfig` → `ReportDisplayConfigModal` | **PASS** |
| 6 | list_parity SearchInput + Date + Input · **cấm** native `<select>` | `ConstructionPermitFilterBar` SearchInput tuyến/TT · Date · Input q · Enter = Xem | **PASS** |
| 7 | tree_master | N/A Kind E | **N/A** |
| Form | **OUT** · **cấm** Thêm mới / Resource / Slideout / View=`readOnly` | Không form Zone A · không `onAdd` · không `/new` | **PASS** |
| Prefix | `api/v1/report/construction-permits` · **cấm** plural `reports` · **cấm** `api/v1/rmms/*` | FE `BASE=/report` · BE `[Route("api/v1/report")]` | **PASS** |
| Lookup | SearchInput tuyến CUC2 strip `QL.22` · TT `hieu-luc`/`het-han`/`gia-han` | FilterBar `ROAD_ROUTE_LOOKUP_CONFIG` + `PERMIT_STATUS_LOOKUP` | **PASS** |
| Query | canonical `status`/`q` · BE coalesce `status ?? type`, `q ?? search` | `queryParams` + `FilterConstructionPermits` `CoalesceCanonical` | **PASS** |
| Excel | gated `viewed` · applied filters · CSV subset `columnPrefs` · BOM | `canExport: viewed` · `subsetPermitCsv` · `CSV_COL_BY_GRID` contractor/issuer/extendedAt | **PASS** |
| Drill | `/csdl-so-sach?kind=construction-permits&id={permitId}` | `drillSource` top window | **PASS** |
| Toast | `dispatchAppToast` · **cấm** `window.alert`/`confirm` | load/export/print toasts | **PASS** |
| Xem-then-load | chưa Xem = empty hint · không auto list | `viewed` gate | **PASS** |
| Day / hiệu lực | grid `vi-VN` · IssuedAt → ExpiresAt · GH ExtendedAt | `formatDayVi` + `formatValidity` | **PASS** |
| FilterRoute | exact case-insensitive · **cấm** StartsWith `QL.1` | `FilterRoute` `string.Equals` OrdinalIgnoreCase | **PASS** |
| Kind E config | `const columns` + ReportDisplayConfigModal · **cấm** UiSchema editor / `configHint` | giữ `const columns` · seed `visible: false` contractor/issuer | **PASS** |

## Findings

Không P0 / P1.

| ID | Sev | Note |
|----|-----|------|
| REV-GPTC-01 | P2 | Seed BE in-memory (12 dòng) — không join ConstructionPermit EF P1. Khớp SA / Dev / QA. |
| REV-GPTC-02 | P2 | `[RequirePermission]` CommonLib ≥1.4.0 · Integration road-route Type A = P2. Khớp TL stub. |
| REV-GPTC-03 | note | Default filter tháng hiện tại · seed 2026-07-27…2026-08-01 — tester set kỳ QA-02. Không fail DoD. |
| REV-GPTC-04 | note | Chart SoCai client trên page hiện tại (không API chart riêng). Khớp Kind E P1. |
| REV-GPTC-05 | note | Context MD còn `api/v1/reports` plural — SA GAP-PO-GPTC-01 đóng; live prefix singular. Không P0. |

Pack kind `report` / Kind E **giữ**. Dev GAP FilterRoute/drill/cột ẩn/CSV/ExtendedAt **closed** (QA confirm).

## Verdict

**PASS** — Kind E leaf `/bao-cao/giay-phep-thi-cong` · API Report `api/v1/report/construction-permits` đúng DOMAIN-MAP · QA T-QA-01 PASS · SSOT report gates PASS.

**review_confirm = approve** (`autoApprove=ON`). Pipeline **done** (không role sau).

## Build

| Gate | Result |
|------|--------|
| MFE `yarn build` | **PASS** (webpack 5.109.2 · 3 size warnings only · 2026-08-16 Review) |
| BE `dotnet build` | **N/A** Review — không đụng API (Dev `task_797ce368` isolated API + BFF PASS) |

---
<!-- Version meta: skillVersion=2026.08.15.5 · schemaVersion=1 · workflowVersion=2026.08.15.5 · rulesVersion=2026.08.15.8 · versionGate=keep_current · skillId=agent-review -->
