# Review findings — reports (Kind E)

> Status: **done**  
> Mode: `review_only` (autopilot · autoApprove ON · không AskQuestion)  
> reviewHash: `task_42801963-reports-kind-e-20260815` · rulesVersion: `2026.08.15.8`

| Field | Value |
|-------|-------|
| feature | `reports` |
| this role | `review` · `/agent-review` |
| review_confirm | **approve** (autoApprove ON · `task_42801963`) |
| packKind | `report` · Kind **E** AnalyticsReportShell (board packet `list` superseded TL GAP-PO-RPT-07) |
| taskId | `task_42801963` |
| prior QA | `task_44115473` · `qa/scenarios.md` **done** |
| prior Dev | `task_cc67808f` · T-UI-FIELD-01/02 closed |
| mfeStdUrl | `http://localhost:9311/bao-cao` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · `api/v1/report` |
| autoApprove | ON |
| skillVersion | `2026.08.15.5` |
| schemaVersion | `1` |
| workflowVersion | `2026.08.15.5` |
| rulesVersion | `2026.08.15.8` |
| versionGate | `keep_current` |
| updatedAt | `2026-08-15T08:40:00.000Z` |

## Scope

| Surface | Repo / path |
|---------|-------------|
| List | `Linm.Web.RMMS.Report` · `ReportListPage` · `/bao-cao` |
| Form | `ReportFormPage` · `/bao-cao/new` · `/bao-cao/:id` → `Navigate` `/bao-cao` |
| API | `Linm.RMMS.WebService` · `api/v1/report` · domain **Report** |
| BFF | `web-bff/api/v1/report` · proxy-only QS |
| Prototype | `specs/reports/ui/prototype/reports-prototype.html` |

## Live re-audit (sau QA + Dev FIELD)

| Check | Live | Result |
|-------|------|--------|
| 1× `LinPageLayout` kind=`report` · **cấm** nested `CatalogListShell` | `ReportListPage.tsx` | **PASS** |
| `LinCatalogDataGrid` `resizable: true` | `tableConfig` | **PASS** |
| Footer `LinCatalogListPagination` · **cấm** footerPagination / pageSizeBar / raw table | `footer=` | **PASS** |
| `.page` flex column · `gridWrap` flex:1 min-height:0 · `skeletonRows={8}` | CSS + layout | **PASS** |
| Zone A header «Báo cáo Web» · `fas fa-chart-bar` · **cấm** Thêm mới | `header` | **PASS** |
| Zone B SearchInput family/kind/route/period · `LinListFilterDateRangeField` **ẩn** `assets` · SearchTextInput · Xem · Excel checkins · `filterCols=4` · `filterMaxWidthPx={null}` | filters | **PASS** (Date **không** còn native `input type=date`) |
| Zone C columns theo family · Dropdown display condition/severity/status · **không** CRUD ⋯ | columns | **PASS** |
| Zone D pager only | pagination | **PASS** |
| Xem mới load · đổi family `viewed=false` + empty hint | `applyAndView` / `handleFamilyChange` | **PASS** |
| Enter = Xem | `SearchTextInput onSearch` | **PASS** |
| Form OUT · **cấm** Resource/Slideout/View=readOnly | `Navigate` | **PASS** |
| FE `BASE=/report` · **cấm** ERP.* · **cấm** `api/v1/rmms/*` · **cấm** plural `reports` | endpoint + grep | **PASS** |
| Lookup Type A route + seed 38 · **cấm** QL.22 | `lookups.ts` | **PASS** |
| pageSize 50/100/200/500 · BE clamp 50 | FE pager + `AllowedPageSizes` | **PASS** |
| toast SSOT · **cấm** `alert` | `dispatchAppToast` | **PASS** |

## Findings

| ID | Class | Sev | Where | Repro | Fix hint |
|----|-------|-----|-------|-------|----------|
| REV-Q-01 | query | — | GET assets/incidents/checkins `type,routeId,from,to,search,period,page,pageSize` · in-memory filter | Controller + `ReportService` | **OK** |
| REV-Q-02 | query | — | Date `from`/`to` chỉ incidents/checkins · assets không gửi | FE `queryParams` + BE GetAssets không from/to | **OK** |
| REV-S-01 | security | P2 | `[RequirePermission]` chưa gắn | Report controllers | Debt CommonLib ≥1.4.0 — **không P0** (QA out-of-pack) |
| REV-S-02 | security | — | BFF forward `Authorization` + `X-Company-Id` | `ReportBffController` | **OK** |
| REV-UI-01 | ui-fn | — | Kind E A–D shell SSOT | `ReportListPage` | **OK** |
| REV-UI-02 | ui-fn | — | Form CRUD OUT P1 | `ReportFormPage` | **OK** GAP-PO-RPT-03 |
| REV-UI-03 | ui-fn | — | Chart/Print stub toast | `reportToolbar` | **OK** GAP-PO-RPT-05 P1 |
| REV-UI-FIELD-01 | ui-fn | — | `LinListFilterDateRangeField` ẩn assets | Zone B | **OK** (Dev closed GAP) |
| REV-UI-FIELD-02 | ui-fn | — | VN dropdown display readonly `data-dropdown-display` | grid cells | **OK** (Dev closed GAP) |
| REV-BE-01 | be-fn | — | Domain Report · **cấm ERP.*** · in-memory seed | `Domains/Report` | **OK** (SA: không schema bắt buộc) |
| REV-BE-02 | be-fn | — | Export CSV UTF-8 · `checkins.csv` | `ExportCheckins` | **OK** |
| REV-BFF-01 | be-fn | — | proxy `web-bff/api/v1/report` QS passthrough + blob export | BFF | **OK** |

**P0:** none.

## Query (`/review-query`)

- List fetch chỉ sau **Xem** (`viewed`).
- Paging server `paginateClient={false}` · allow-list pageSize.
- N+1/OOM: in-memory seed nhỏ — chấp nhận P1 warehouse EF (out of pack).
- Lookup: family/kind/period enum tĩnh · route `GET /integration/road-routes/search` + seed 38 fallback.

## Security

- JWT/`X-Company-Id` forwarded BFF.
- Permission attribute **debt** P2 SD-AUTH.
- Không secrets trong MFE report pages.
- IDOR: không GetById CRUD (Kind E).

## UI / BE function

- Zone A–D + reportToolbar (refresh / chart stub / print stub / config hint).
- Excel chỉ `familyDraft=checkins`.
- Path `api/v1/report` khớp SA / DOMAIN-MAP Report.

## Gates

| Gate | Result |
|------|--------|
| Version recheck | **PASS** — workflow **2026.08.15.5** · `keep_current` |
| SSOT Kind E shell | **PASS** |
| FormType LKP/FIELD/PROD/UX | **PASS** (QA T-QA-01 + live FIELD-01/02) |
| Prototype + reviewUrl | **PASS** |
| mfeStdUrl | `http://localhost:9311/bao-cao` · `index.tsx` `/bao-cao` |
| Confirms BE+UI | **PASS** (giữ board tick) |
| `yarn typecheck` | **PASS** (VERIFY this role) |
| `LINM_RUN_DEV_LOCAL_BUNDLE=1 yarn build` | **PASS** (VERIFY this role) |
| BE Write this role | **n/a** — review_only · không đụng API |
| Prior Dev `dotnet` API+BFF | **PASS** (`task_cc67808f`) |
| autoApprove review_confirm | **approve** |

## Verdict

**PASS** · **approve** · không P0. Chart/Print/warehouse EF / `[RequirePermission]` = debt P1–P2 đã ghi QA out-of-pack — **không** reopen Dev.

Pipeline reports **complete** (data-analy → … → review). Chain: **không** enqueue role sau Review.

---
<!-- Version meta: skillVersion=2026.08.15.5 · schemaVersion=1 · workflowVersion=2026.08.15.5 · rulesVersion=2026.08.15.8 · versionGate=keep_current · skillId=agent-review -->
