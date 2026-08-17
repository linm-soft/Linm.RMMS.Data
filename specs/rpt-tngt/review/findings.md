# Review — rpt-tngt · task_935f6484

| Field | Value |
|-------|-------|
| feature | `rpt-tngt` |
| this role | `review` · `/agent-review` |
| status | `done` |
| review_confirm | **approve** (`autoApprove=ON`) |
| packKind | **`report`** Kind **E** (packet board `list` stale) |
| changeScope | `edit_page` |
| mfeStdUrl | `http://localhost:9311/bao-cao/tngt` |
| mfeStdRoute | `/bao-cao/tngt` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · `api/v1/report` |
| prior QA | `task_693acbcd` · `qa/scenarios.md` **confirmed** · T-QA-01 PASS · P0 none |
| skillVersion | `2026.08.15.5` |
| schemaVersion | `1` |
| workflowVersion | `2026.08.15.5` |
| rulesVersion | `2026.08.15.8` |
| versionGate | `keep_current` |
| method | static re-audit live `TrafficAccidentReportPage` + `TrafficAccidentFilterBar` + `endpoint.ts` `getTrafficAccidents`/`exportTrafficAccidents` + `lookups.ts` + `ReportQueryController` + `ReportService.FilterTrafficAccidents`/`FilterRoute`/`FilterDate` + BFF Forward + DOMAIN-MAP · `yarn typecheck` + `yarn build` PASS |
| updatedAt | `2026-08-16T13:45:00.000Z` |

## Verdict

**PASS** · **approve**. Không P0. Pipeline Kind E leaf Tai nạn giao thông **đóng**. autoApprove ON → self-confirm `review_confirm`. Role sau pipeline = **không** (step 6 cuối). **Không** enqueue role khác.

Step 4b live keep: `GET api/v1/report/traffic-accidents` + `/traffic-accidents/export` · BFF `web-bff/api/v1/report` proxy · DOMAIN-MAP slug `rpt-tngt` → **Report** · **không** ERP.* · **không** `api/v1/reports` · **không** migration · **không** path API mới.

**GAP-TL-TNGT-01** closed: `handleTabDraftChange` (`serious` → `sevDraft` Nghiêm trọng nếu trống · `half-year` → `halfYearRange`) · `applyAndView` fallback · BE `FilterTrafficAccidents` serious + severity trống → `Nghiêm trọng`.

## SSOT surface (live)

| # | Check | Result |
|---|-------|--------|
| 1 | 1× `LinPageLayout` `kind="report"` · **cấm** nested CatalogListShell | **PASS** |
| 2 | `LinCatalogDataGrid` kéo cột `resizable: true` | **PASS** |
| 3 | Footer `LinCatalogListPagination` luôn · total 0 khi `!viewed` | **PASS** |
| 4 | flex + `skeletonRows={8}` · `data-catalog-list-page` | **PASS** |
| 5 | Config FULL `ReportDisplayConfigModal` · **cấm** Kind B schema editor / `LinListTableConfigModal` / `configHint` | **PASS** |
| 6 | `LinErpListFilterBar` SearchInput tab/tuyến/mức · Date · Input · Xem=`onSearch` | **PASS** |
| 7 | Form OUT · **cấm** Resource/Slideout/View=readOnly · **cấm** `/new` | **PASS** |
| 8 | Zone A không Thêm mới | **PASS** |
| 9 | Xem mới load · empty hint chưa xem | **PASS** `viewed` |
| 10 | Làm mới `!viewed` toast «Chưa xem» | **PASS** |
| 11 | Excel gated viewed + applied + `columnPrefs` subset · `traffic-accidents.csv` | **PASS** |
| 12 | Lookup tab 6 · tuyến CUC2 strip `QL.22` · mức · **cấm** filter type trên leaf | **PASS** |
| 13 | FE query `search` · `type=TNGT` khóa | **PASS** |
| 14 | `formatAtVi` `vi-VN` | **PASS** |
| 15 | Drill `/incident?id=` top window · `row.id` | **PASS** |
| 16 | Chart SoCai KPI Dòng · Tuyến · Nghiêm trọng · client | **PASS** |
| 17 | `filterMaxWidthPx={null}` · toast `dispatchAppToast` · **cấm** `window.alert` | **PASS** |
| 18 | FilterRoute exact `Equals` · **cấm** StartsWith | **PASS** |
| 19 | Kind E `const columns` leftover **OK** | **PASS** |
| 20 | Route `bao-cao/tngt` · pageId `rpt-tngt` · testId `rmms-tngt-report` | **PASS** |
| 21 | FE BASE `/report` · **cấm** ERP.* | **PASS** |
| 22 | Tab draft `serious` / `half-year` không fetch | **PASS** GAP-TL-TNGT-01 |

## T-RV-01 vs prior T-*

| id | Result |
|----|--------|
| T-UI-LIST / FORM / ACT / LKP / FIELD / PROD / UX | **PASS** (QA `task_693acbcd` + live re-audit) |
| T-BE-01 · T-BE-02 · T-BFF-01 | **PASS** keep `api/v1/report/traffic-accidents` |
| T-PERM-01 | stub P1 — **không** block P0 |
| T-QA-01 | **PASS** confirmed |

## Findings

| ID | Sev | Note |
|----|-----|------|
| REV-TNGT-01 | P2 | Seed in-memory 12 — không EF `rmms_incidents` P1 (SA/TL/QA accepted) |
| REV-TNGT-02 | P2 | `[RequirePermission]` stub đến CommonLib ≥1.4.0 |
| REV-TNGT-03 | P3 | Webpack size (1.63 MiB cached bundle) |
| REV-TNGT-04 | P3 | Chart KPI đếm **trang hiện tại** (`items`) không `totalCount` — analog SoCai client, không P0 |

Không P0. Không yêu cầu Dev retry.

## Query / security (review-query)

| Class | Result |
|-------|--------|
| QUERY | In-memory filter + `Page` allow-list · **không** N+1 EF · canonical `search` · type khóa `TNGT` |
| SEC | BFF Forward QS · không upload path · drill `encodeURIComponent` · **không** secret trong repo leaf |
| IDOR | Report read stub · P1 permission — không P0 |

## Build (VERIFY GATE)

| Gate | Result |
|------|--------|
| FE `yarn typecheck` | **PASS** (`tsc --noEmit`) |
| FE `yarn build` | **PASS** webpack 5.109.2 · 1.63 MiB cached asset · compiled successfully |
| BE `dotnet build` | **n/a this role** — Review không đụng API; prior Dev keep compile PASS |

**Cấm** `completed` nếu build fail — compile FE **PASS**.

## Handoff

- roleOnly=`review` · **không** chạy role khác trong `task_935f6484`
- `review_confirm` **approve** (autoApprove ON)
- Pipeline **closed** · feature `rpt-tngt` Review done
- mfeStdUrl `http://localhost:9311/bao-cao/tngt`

---
<!-- Version meta: skillVersion=2026.08.15.5 · schemaVersion=1 · workflowVersion=2026.08.15.5 · rulesVersion=2026.08.15.8 · versionGate=keep_current · skillId=agent-review -->
