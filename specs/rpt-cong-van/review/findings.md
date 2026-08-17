# Review — rpt-cong-van (Công văn đi — đến)

| Field | Value |
|-------|-------|
| feature | `rpt-cong-van` |
| this role | `review` · `/agent-review` |
| status | `confirmed` |
| review_confirm | **approve** (`autoApprove=ON`) |
| changeScope | `edit_page` |
| packKind | **`report`** (Kind **E**) — packet board `list` **stale** |
| productRoot | `D:/AI-QLBD/Linm.RMMS.Data` |
| MFE | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Report` |
| mfeStdRoute | `/bao-cao/cong-van` |
| mfeStdUrl | `http://localhost:9311/bao-cao/cong-van` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · `api/v1/report` |
| BFF | `web-bff/api/v1/report` |
| autoApprove | **ON** |
| chain | **ON** · pipeline leaf — không role sau Review |
| prior · qa | `done` · `qa/scenarios.md` · `task_228ef478` |
| prior · dev | `done` · `implement/rpt-cong-van.md` · `task_adae5aea` |
| skillVersion | `2026.08.15.5` |
| schemaVersion | `1` |
| workflowVersion | `2026.08.15.5` |
| rulesVersion | `2026.08.15.8` |
| versionGate | `keep_current` |
| taskId | `task_fb8e8b5f` |
| updatedAt | `2026-08-15T16:35:00.000Z` |

**Phương pháp:** static re-audit live `OfficialDocsReportPage.tsx` + `OfficialDocsFilterBar.tsx` + `endpoint.ts` `qs`/`exportOfficialDocs` + `lookups.ts` + BE `ReportQueryController` / `FilterOfficialDocs` coalesce + Report BFF Forward + DOMAIN-MAP. **Không** write FE/BE (QA T-QA-01 PASS · không GAP P0/P1). **Cấm** `ERP.*`.

## SSOT surface (live)

| # | Gate | Live | Verdict |
|---|------|------|---------|
| 1 | 1× `LinPageLayout` `kind="report"` · **cấm** nested CatalogListShell | 1× `kind="report"` · không CatalogListShell | **PASS** |
| 2 | `LinCatalogDataGrid` + kéo cột default ON | Cột `resizable: true` · `tableConfig` force · `visibleColumns` force · migrate `rmms-official-docs-report-resizable-default-on-v1` | **PASS** |
| 3 | Footer **luôn** `LinCatalogListPagination` | Footer không ẩn · `totalCount=0` khi `!viewed` | **PASS** |
| 4 | flex + skeleton | `.page` flex · `skeletonRows={8}` | **PASS** |
| 5 | toolbar config FULL | refresh / chart / print `LinReportPrintScopeModal` / `onEditConfig` → `ReportDisplayConfigModal` | **PASS** |
| 6 | list_parity SearchInput + Date + Input · **cấm** native `<select>` | `OfficialDocsFilterBar` SearchInput chiều/đơn vị · Date · Input q · Enter = Xem | **PASS** |
| 7 | tree_master | N/A Kind E | **N/A** |
| Form | **OUT** · **cấm** Thêm mới / Resource / Slideout / View=`readOnly` | Không form Zone A · không `onAdd` · không `/new` | **PASS** |
| Prefix | `api/v1/report/official-docs` · **cấm** plural `reports` · **cấm** `api/v1/rmms/*` | FE `BASE=/report` · BE `[Route("api/v1/report")]` | **PASS** |
| Lookup | enum FE chiều `di`/`den` · đơn vị CC2.1/2.2/2.3/DRVN · **cấm** road-route / `QL.22` trên leaf | FilterBar **không** `ROAD_ROUTE_*` | **PASS** |
| Query | canonical `direction`/`q` · BE coalesce `direction ?? type`, `q ?? search` | `queryParams` + `FilterOfficialDocs` `CoalesceCanonical` | **PASS** |
| Excel | gated `viewed` · applied filters · CSV subset `columnPrefs` · BOM | `canExport: viewed` · `subsetOfficialDocsCsv` | **PASS** |
| Drill | `/ops?id={docId}` | `drillOps` top window | **PASS** |
| Toast | `dispatchAppToast` · **cấm** `window.alert`/`confirm` | load/export/print toasts | **PASS** |
| Xem-then-load | chưa Xem = empty hint · không auto list | `viewed` gate | **PASS** |
| Day | grid `vi-VN` | `formatDayVi` → `toLocaleDateString('vi-VN')` | **PASS** |

## Findings

Không P0 / P1.

| ID | Sev | Note |
|----|-----|------|
| REV-CV-01 | P2 | Seed BE in-memory (12 dòng) — không join OfficialDocument EF P1. Khớp SA / Dev. |
| REV-CV-02 | P2 | Integration org-unit Type A / `[RequirePermission]` CommonLib ≥1.4.0 = P2. Khớp TL stub P1. |
| REV-CV-03 | note | Default filter tháng hiện tại · seed 2026-07-27…2026-08-01 — tester set kỳ QA-02. Không fail DoD. |
| REV-CV-04 | note | Chart SoCai client trên page hiện tại (không API chart riêng). Khớp Kind E P1. |

Pack kind `report` / Kind E **giữ**. Dev GAP query/Excel/resize/day **closed** (QA confirm).

## Verdict

**PASS** — Kind E leaf `/bao-cao/cong-van` · API Report `api/v1/report/official-docs` đúng DOMAIN-MAP · QA T-QA-01 PASS · SSOT list/report gates PASS.

**review_confirm = approve** (`autoApprove=ON`). Pipeline **done** (không role sau).

## Build

| Gate | Result |
|------|--------|
| MFE `yarn build` | **PASS** (webpack 5.109.2 · 3 size warnings only) |
| BE `dotnet build` | **N/A** Review — không đụng API (Dev `task_adae5aea` isolated API + BFF PASS) |

---
<!-- Version meta: skillVersion=2026.08.15.5 · schemaVersion=1 · workflowVersion=2026.08.15.5 · rulesVersion=2026.08.15.8 · versionGate=keep_current · skillId=agent-review -->
