# Team-lead — CR PDF · báo cáo nhật ký tuần đường live · `rpt-nhat-ky-tuan-duong`

| Field | Value |
|-------|-------|
| feature | `rpt-nhat-ky-tuan-duong` |
| this role | `team_lead` · `/agent-team-lead` |
| changeScope | **`edit_page`** · `editTask=1` |
| packKind | **`report` Kind E** |
| formType | `report` |
| cite | [review.md](./review.md) · [workflow-run.md](./workflow-run.md) · SRC-NKTD-PDF |
| prior pack | `specs/rpt-nhat-ky-tuan-duong/task/rpt-nhat-ky-tuan-duong.md` (**giữ**) |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Report` |
| mfeStdRoute | `/bao-cao/nk-td` (alias live) · `/bao-cao/nhat-ky-tuan-duong` |
| mfeStdUrl | `http://localhost:9311/bao-cao/nk-td` |
| BE | `GET api/v1/report/patrol-log-road` (+ `/export`) |
| sourceFeature | **`csdl-so-02`** |
| sourceTables | `rmms_csdl_catalog_records` · `rmms_csdl_so02` · `rmms_csdl_book_entries` |
| sourceFormReady | **yes sau Wave A Review `done`** |
| `devSlash` | **`/agent-dev`** · layout `/erp-report-context` (không clone ERP repo) |
| **cấm** | CRUD / Thêm mới Zone A · Resource/Slideout · `ERP.*` · `api/v1/reports` · path API **mới** · Kind B schema editor · enqueue trước Wave A |

**Wave B — chỉ sau Wave A merge.** `data-analy-report-source-form` HARD.

---

## § Delta Current vs New

| Area | Current (live done) | New (CR) | Task |
|------|---------------------|----------|------|
| Load | `LoadPatrolLogAsync("Tuần đường")` → `PatrolSessions`+`PatrolCheckIns` · empty → **12-row seed** | Query sổ `resource=patrol-logs` + typed So02 + book entries. **0 dòng = empty** · **cấm** seed fallback | **T-BE-RPT-01** · GAP-NKTD-SRC-01 |
| Drill | `?kind=patrol-logs` | `/csdl-so-02` hoặc hub `?resource=patrol-logs&id=` · **cấm** `?kind=` | **T-FE-02** · GAP-NKTD-DRILL-01 |
| Vị trí | Km / check-in | `locationText` fallback Km string | T-UI-RPT-01 |
| Ký | `MatchOk` check-in · SupervisorNote `""` | `RemarkSign` → supervisorNote · signed nếu RemarkSign không rỗng | GAP-NKTD-SIGN-01 |
| HDSD | «Tạo mới» trên report | bỏ · ghi tạo data `/csdl-so-02` | T-HDSD-01 |
| Print bìa PDF | `window.print` | **P2** không block | T-UI-RPT-PRINT-01 |
| Filter/toolbar | Kind E bar | **giữ** V10 + toolbar export/print | T-UI-RPT-01 / TB |
| CRUD form | — | **OUT** | T-OUT-CRUD |

---

## Screens

| id | Surface | Route |
|----|---------|-------|
| S-NKTD | Kind E A–D + SoCai | `/bao-cao/nk-td` |
| S-FORM | — | **OUT** |

---

## FormType pack — task matrix (`report` · §2d · CR)

| Task id | Role | Status | deps | `devSlash` | DoD CR |
|---------|------|--------|------|------------|--------|
| **T-CTX-CR-02** | data_analy | pending | Wave A done | `/agent-data-analy` | control-hint: `sourceFeature=csdl-so-02` · `sourceFormReady=yes` · map cột report←entry · **cấm** Col1–3 · **cấm** re-scan demo |
| **T-BE-RPT-01** | Dev | pending | T-CTX-CR-02 | `/agent-dev` | Đổi `LoadPatrolLogRoadAsync` / `LoadPatrolLogAsync("Tuần đường")`: query **sổ**. Filter `from/to` trên `EventAt` (tz_day). Map bảng dưới. **Cấm** fallback seed khi query sổ chạy. **Cấm** path mới. Join **không** N+1. |
| **T-BE-02** | Dev | pending | T-BE-RPT-01 | `/agent-dev` | Export CSV cùng filter · UTF-8 BOM · `patrol-log-road.csv` · cột `supervisorNote` nếu grid có. Index tenant+resource+EventAt nếu chậm → Schema **riêng** (không Seed). |
| **T-BFF-01** | Dev | reuse | T-BE-RPT-01 | `/agent-dev` | Proxy keep · **không** business |
| **T-PERM-01** | Dev | reuse | — | `/agent-dev` | permission report search/export |
| **T-UI-RPT-01** | Dev | pending | T-BE-RPT-01 | `/agent-dev` | `LinErpListFilterBar` + `/filter-bar-context` · V10 🔍 mép phải · **0** action trên bar · Xem work · cột Vị trí = `locationText` fallback Km · **cấm** Thêm mới |
| **T-UI-RPT-TB-01** | Dev | reuse | T-UI-RPT-01 | `/agent-dev` | Toolbar: Làm mới · Chart · In · Config · Xuất Excel · **cấm** filter button |
| **T-UI-RPT-CONFIG-01** | Dev | reuse | T-UI-RPT-01 | `/agent-dev` | `LinReportTableConfigModal` FULL · **cấm** `configHint` |
| **T-UI-RPT-EXPORT-01** | Dev | pending | T-BE-02 | `/agent-dev` | Excel **sau** Xem · applied filters · trên toolbar |
| **T-UI-RPT-CHART-01** | Dev | pending | T-UI-RPT-01 | `/agent-dev` | SoCai từ `items` **live** · **cấm** stub toast |
| **T-UI-RPT-PRINT-01** | Dev | pending | T-UI-RPT-01 | `/agent-dev` | P1: print grid OK. Layout bìa PDF = **P2** GAP-NKTD-PRINT-01 — không block |
| **T-UI-UX-01** | Dev | reuse | T-UI-RPT-01 | `/agent-dev` | constitution |
| **T-FE-02** | Dev | pending | T-UI-RPT-01 | `/agent-dev` | Drill `/csdl-so-02` **hoặc** `/so-ts/csdl-so-sach?resource=patrol-logs&id={bookId}` — **cấm** `?kind=` |
| **T-HDSD-01** | Dev | pending | T-UI-RPT-01 | `/agent-dev` | `docs/hdsd/bao-cao/nk-td/huong-dan-su-dung.md` — bỏ «Tạo mới / Thêm»; ghi tạo data `/csdl-so-02` |
| **T-QA-RPT-01** | QA | pending | T-FE-02 | `/agent-qa` | Kỳ có sổ Wave A → lưới khớp. Kỳ trống → empty, **không** 12 CUC2. Drill mở sổ. Excel toolbar. Form OUT. Filter V1+V5+V10. |
| **T-RV-01** | review | pending | T-QA-RPT-01 | `/agent-review` | `/review-query` join sổ · **cấm** N+1 per entry |

---

## Map cột (HARD)

| Report DTO | Form / table |
|------------|----------------|
| `bookId` | `CsdlCatalogRecord.Id` |
| `bookNo` | `BookNo` |
| `entryId` | `CsdlBookEntry.Id` |
| `day` / `checkedAt` | `EventAt` UTC→local |
| `route` | `RoadCode` / `RoadName` |
| `patrolStaff` | `CsdlSo02.PatrolStaff` |
| `locationKm` | `LocationKm` |
| `locationText` | **`LocationText`** (Wave A) else Km string |
| `weatherAndEvent` | `WeatherEvent` |
| `onSiteAction` | `OnSiteAction` |
| `supervisorNote` | `RemarkSign` |

---

### T-BE-RPT-01 — rewrite load

- Keep controller `GetPatrolLogRoad` path.
- Replace in-memory/check-in branch when sổ query succeeds (including 0 rows).
- Tenant + `resource=patrol-logs` + `EventAt` in `[from,to]` TZ day bounds.
- DoD: seed 0 `PatrolSessions` + 1 sổ Wave A → Xem ra đúng dòng. Kỳ không sổ → `items=[]` · totalCount 0.

### T-QA-RPT-01

- **Fail** nếu thấy 12 dòng CUC2 khi kỳ trống.
- **Fail** nếu drill `?kind=`.
- **Fail** Xuất Excel / In trên filter bar.

---

## ssot.reuse

| Layer | Reuse |
|-------|--------|
| UI | `PatrolLogRoadReportPage` · `PatrolLogRoadFilterBar` · `reportEndpoint.getPatrolLogRoad` |
| BE | `ReportQueryController.GetPatrolLogRoad` · **đổi service load** |
| Lookup | Integration `road-routes/search` Type A |
| Filter | `docs/context/features` report filter-bar nếu có · `/filter-bar-context` |

## Out of pack

CRUD sổ · `rpt-tuan-duong` GPS coverage · Mẫu 8 tuần kiểm · print bìa giấy P2 · `api/v1/reports`.

## Version meta

| Field | Value |
|-------|-------|
| skillId | agent-team-lead |
| skillVersion | 2026.09.05.03 |
| rulesVersion | 2026.09.17.2 |
| packKind | report |
| changeScope | edit_page |
| cr | nktd-pdf-20260917 |
| writtenAt | 2026-09-17T16:40:00.000Z |
