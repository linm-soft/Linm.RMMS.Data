# Review — rpt-checkin (BC Check-in)

| Field | Value |
|-------|-------|
| feature | `rpt-checkin` |
| this role | `review` · `/agent-review` |
| status | `confirmed` |
| review_confirm | **approve** (`autoApprove=ON`) |
| changeScope | `edit_page` |
| packKind | **`report`** (Kind **E**) — packet board `list` **bỏ** |
| productRoot | `D:/AI-QLBD/Linm.RMMS.Data` |
| MFE | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Report` |
| mfeStdRoute | `/bao-cao/checkin` |
| mfeStdUrl | `http://localhost:9311/bao-cao/checkin` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · `api/v1/report` |
| BFF | `web-bff/api/v1/report` |
| autoApprove | **ON** |
| chain | **ON** · pipeline leaf — không role sau Review |
| prior · qa | `done` · `qa/scenarios.md` · `task_78abffa6` |
| prior · dev | `done` · `implement/rpt-checkin.md` · `task_a6b7e97e` |
| skillVersion | `2026.08.15.5` |
| schemaVersion | `1` |
| workflowVersion | `2026.08.15.5` |
| rulesVersion | `2026.08.15.8` |
| versionGate | `keep_current` |
| taskId | `task_c2393b8e` |
| updatedAt | `2026-08-15T15:55:00.000Z` |

**Phương pháp:** static re-audit live `CheckinReportPage.tsx` + `CheckinFilterBar.tsx` + `endpoint.ts` + `lookups.ts` + BE `ReportQueryController` / `ReportService.FilterCheckins` / Report BFF + DOMAIN-MAP. **Không** write FE/BE (QA PASS · không GAP P0/P1). **Cấm** `ERP.*`.

## SSOT surface (live)

| # | Gate | Live | Verdict |
|---|------|------|---------|
| 1 | 1× `LinPageLayout` `kind="report"` · **cấm** nested CatalogListShell | 1× `kind="report"` · không CatalogListShell | **PASS** |
| 2 | `LinCatalogDataGrid` + kéo cột default ON | Cột `resizable: true` · `visibleColumns` force ON · migrate `rmms-checkin-report-resizable-default-on-v1` | **PASS** (GAP-TL-CHK-RESIZE **đóng**) |
| 3 | Footer **luôn** `LinCatalogListPagination` | Footer không gate ẩn · `totalCount=0` khi `!viewed` | **PASS** |
| 4 | flex + skeleton | `.page` + `skeletonRows={8}` | **PASS** |
| 5 | toolbar config FULL | refresh / chart / print / `onEditConfig` → `ReportDisplayConfigModal` | **PASS** |
| 6 | list_parity SearchInput + Date + Input · **cấm** native `<select>` | `CheckinFilterBar` SearchInput loại/tuyến · Date · Input | **PASS** |
| 7 | tree_master | N/A Kind E | **N/A** |
| Form | **OUT** · **cấm** Thêm mới / Resource / Slideout / View=`readOnly` | Không form Zone A · không `onAdd` | **PASS** |
| Prefix | `api/v1/report/checkins` · **cấm** plural `reports` · **cấm** `api/v1/rmms/*` | FE `reportEndpoint` · BE `[Route("api/v1/report")]` | **PASS** |
| Lookup | Type A tuyến Integration · **cấm** `QL.22` | `lookups.ts` filter + seed 38 CUC2 | **PASS** |
| Coverage | `type=coverage` → `points >= 3` | `FilterCheckins` | **PASS** |
| Drill | `/patrol?id={patrolId}` | `drillPatrol` top window | **PASS** |
| Toast | `dispatchAppToast` · **cấm** `window.alert`/`confirm` | toast load/export/print | **PASS** |
| Xem-then-load | chưa Xem = empty hint · không auto list | `viewed` gate | **PASS** |

## Findings

Không P0 / P1.

| ID | Sev | Note |
|----|-----|------|
| REV-CHK-01 | P2 | Seed BE in-memory (12 dòng CUC2) — không join Patrol EF P1. Khớp SA. |
| REV-CHK-02 | P2 | Export CSV cột cố định server (không theo `columnPrefs` đang hiện). Khớp P1 SA/Dev; Excel «theo cột hiện» = P2. |
| REV-CHK-03 | note | Default filter tháng hiện tại (Aug 2026) · seed Jul 27–Aug 1 — tester set kỳ QA-02. Không fail DoD. |
| REV-CHK-04 | note | `report.checkin.read` stub P1 — `[RequirePermission]` khi CommonLib ≥1.4.0. |

GAP-TL-CHK-RESIZE **closed** (Dev + QA). Pack kind `report` / Kind E **giữ**.

## Verdict

**PASS** — Kind E leaf `/bao-cao/checkin` · API Report `api/v1/report/checkins` đúng DOMAIN-MAP · QA T-QA-01 PASS · SSOT list/report gates PASS.

**review_confirm = approve** (`autoApprove=ON`). Pipeline **done** (không role sau).

## Build

| Gate | Result |
|------|--------|
| MFE `yarn build` | **PASS** (webpack 5.109.2 · 3 size warnings only) |
| BE `dotnet build` | **N/A** Review — không đụng API (Dev `task_a6b7e97e` PASS) |

---
<!-- Version meta: skillVersion=2026.08.15.5 · schemaVersion=1 · workflowVersion=2026.08.15.5 · rulesVersion=2026.08.15.8 · versionGate=keep_current -->
