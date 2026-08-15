# Data-analy — controlHint — reports (Kind E Web report · 3 loại)

| Field | Value |
|-------|-------|
| feature | `reports` |
| packKind | `report` |
| mode | `feature_context` (Start `roleOnly=data_analy` · **no Excel** · context + demo + live MFE scaffold) |
| status | `done` |
| skillId | `agent-data-analy` |
| skillVersion | `2026.08.15.5` |
| schemaVersion | `1` |
| workflowVersion | `2026.08.15.5` |
| rulesVersion | `2026.08.15.8` |
| versionGate | `rechecked` |
| contentHash | `sha256:5d30e1a7796fe50fb67b8444809805e826017017337ddc328ac0b1fcdbaadbdf` |
| headerFingerprint | `sha256:e5226ff0b146ffd2e67210f7ebc5ebbf68ab3612f5416314988acc7c1b5442a9` |
| analyzedAt | `2026-08-15T07:50:00.000Z` |
| cluster | — (không Excel header · sourceKind=`legacy` · 11 vision packets · P1 = 3 loại Web) |
| taskId | `task_51457ed6` |
| autoApprove | `ON` |

> Data-analy **đề xuất** controlHint. Design **chốt** control-map. SA **chốt** lookup API.  
> **Cấm** Dev đoán Text vs SearchInput khi đã có bảng này.  
> **Cấm ERP.*** · domain **Report** · BE `D:/AI-QLBD/Linm.RMMS.WebService` · prefix **`api/v1/report`** (DOMAIN-MAP kebab `report` — **không** `api/v1/reports`).  
> Kind **E** report — **không** CRUD form / Thêm mới. Catalog 172 = inventory toast **OUT P1** MFE.

## Sources

| Source | Path | sha256 |
|--------|------|--------|
| Context | `docs/context/features/reports.md` | `5d30e1a7796fe50fb67b8444809805e826017017337ddc328ac0b1fcdbaadbdf` |
| Control map | `docs/context/_raw/legacy-govone/demo-maps/reports-control-map.md` | `355eee76e2d49adfb83bfb832c87b59d341693e72b0d95dc34645254cdef6c33` |
| Actions | `docs/context/_raw/legacy-govone/demo-maps/reports-actions.md` | `51d5059458c090b433bfe0ef1ec6c60a94d80740c8d7ca79991edf3c9018c2ee` |
| Demo entry | `Linm.RMMS.Demo/src/demo/features/reports-demo.html` | `4a6680e792f80a3aa7d9968f60dea9c6a3e37074bc80448a4401487a737bf737` |
| Demo page | `Linm.RMMS.Demo/src/demo/bao-cao/reports.html` | `e5226ff0b146ffd2e67210f7ebc5ebbf68ab3612f5416314988acc7c1b5442a9` |
| Demo app | `Linm.RMMS.Demo/src/demo/bao-cao/js/reports-app.js` | `0a7d7fb840ff7576c5898dc7cabfc3a7f7ee0cff6c930e52b81e432456ab7e91` |
| Demo data | `Linm.RMMS.Demo/src/demo/bao-cao/js/reports-data.js` | `6b3a4da8b140aeadd83be68d10c6dada25a51ddcb84708a060726a5b89c4f0d7` |
| Shared catalogs | `specs/_data-analy/shared-catalogs/INVESTIGATE-CUC2.md` · `road-route-seed.json` | APPROVED A · 38 tuyến |
| MFE live (read) | `Linm.Web.RMMS.Report` · `/bao-cao` · `ReportListPage` raw table + `ReportFormPage` scaffold | **GAP** — không Kind E |

Normalized header (no Excel):

`reportFamily|reportKind|routeId|periodMode|fromDate|toDate|qSearch|stt|item|qty|unit|condition|code|type|severity|status|at|staff|points|coverage|day|firstAt|lastAt`

## Kind / zones (handoff Design)

Pack **report** = Kind **E** AnalyticsReportShell. Demo HTML = 3 tab + filter + fake grid + Excel check-in — **không** clone chrome/topnav/user menu / Catalog 172 / footer GOVOne vào MFE.

| Zone | Pattern | DoD |
|------|---------|-----|
| A | Header | title «Báo cáo Web» — **cấm** Thêm mới trên A |
| B | Toolbar Kind E + filter | `reportToolbar` (Làm mới · Biểu đồ stub · In stub · Config) · **Xem** (primary filter) · **Xuất Excel** chỉ tab check-in · SearchInput loại/tuyến/kỳ · Date từ/đến khi sự cố/check-in · SearchTextInput |
| C | `LinCatalogDataGrid` | kéo cột default ON · cột đổi theo `reportFamily` |
| D | Footer | `LinCatalogListPagination` 50/100/200/500 — **cấm** footerPagination / pageSizeBar / raw table |
| Form | — | **OUT P1** — `ReportFormPage` scaffold **không** surface |

**Skip chrome:** logo · hamburger · user Hồ sơ/Đăng xuất demo · Ban.TK skin · Catalog 172 dump · GOVOne left-rail.

## Control hint — report filters (Zone B · Kind E)

| Field key | Label | controlHint | catalogKind | Notes |
|-----------|-------|-------------|-------------|-------|
| reportFamily | Loại BC (tab) | `SearchInput` | enum | `assets` · `incidents` · `checkins` — demo tabs · **cấm** native Select |
| reportKind | Loại báo cáo | `SearchInput` | enum theo family | assets: summary/by-route/by-org/by-item · incidents: monthly/half-year/serious/compare · checkins: daily/patrol/worklog/coverage · demo `<select id="fKind">` |
| routeId | Tuyến | `SearchInput` | **road-route** | Master 38 · empty = tất cả · **cấm** free-text · demo `<select id="fRoute">` |
| periodMode | Kỳ báo cáo | `SearchInput` | enum | day/month/quarter/year · demo `fPeriod` |
| fromDate | Từ ngày | `Date` | | hiện khi family ≠ assets |
| toDate | Đến ngày | `Date` | | hiện khi family ≠ assets |
| qSearch | Tìm kiếm | `SearchTextInput` | text | hạng mục · mã · cán bộ |

Demo control-map ghi Select/Text — **stale** vs SSOT: enum/catalog = **SearchInput**, search = **SearchTextInput**.

## Control hint — result columns (Zone C · đổi theo family)

### assets

| Field key | Label | controlHint | Notes |
|-----------|-------|-------------|-------|
| route | Tuyến | `Text` readonly | |
| item | Hạng mục | `Text` readonly | |
| qty | Số lượng | `Text` number | |
| unit | ĐVT | `Text` | |
| condition | Tình trạng | `Dropdown` display | Tốt · TB · Kém |
| updatedAt | Cập nhật | `Date` | |

### incidents

| Field key | Label | controlHint | Notes |
|-----------|-------|-------------|-------|
| code | Mã | `Text` readonly | INC-* |
| route | Tuyến | `Text` | |
| type | Loại | `Text` | |
| severity | Mức độ | `Dropdown` display | |
| status | Trạng thái | `Dropdown` display | |
| at | Thời điểm | `Date` | |

### checkins

| Field key | Label | controlHint | Notes |
|-----------|-------|-------------|-------|
| staff | Cán bộ | `Text` | |
| route | Tuyến | `Text` | |
| points | Số điểm | `Text` number | |
| coverage | Coverage % | `Text` number | |
| day | Ngày | `Date` | |
| firstAt | Check-in đầu | `Date` | |
| lastAt | Check-in cuối | `Date` | |

## Demo route ↔ road-route

Demo HTML seed: `QL.1A` · `QL.15` · `ĐT.538` · `ĐT.217` · `CT.01`. CUC2 38 **có** `QL.15` · **không** `QL.1A` / `ĐT.*` / `CT.01` 1:1 (`CT.001` khác mã).

| Demo label | Proposed `road-route.code` | controlHint |
|------------|----------------------------|-------------|
| QL.15 | `QL.15` | SearchInput · khớp seed |
| QL.1A | — | **UNCLEAR** — alias PO (`QL.1`) hoặc giữ mã demo **chỉ** seed report in-memory · **cấm** invent vào 38 |
| ĐT.538 / ĐT.217 / CT.01 | — | **UNCLEAR** — P1 report query in-memory demo codes · lookup UI = 38 + «Tất cả» |

## Lookup APIs (đề xuất SA — **chưa chốt**)

Domain **Report** · prefix `api/v1/report` · BFF `web-bff/api/v1/report` · repo `D:/AI-QLBD/Linm.RMMS.WebService`.

| Lookup | API | controlHint consumer | BE |
|--------|-----|----------------------|-----|
| road-route | `GET api/v1/integration/road-routes/search` | `routeId` SearchInput | Integration Type A — **không** copy vào Report |
| reportKind / period / family | enum tĩnh FE | SearchInput | **không** parent JSON |

## Query APIs (đề xuất — context skeleton `/api/v1/reports/*` **stale**)

DOMAIN-MAP **bắt buộc** singular `report`:

| Method | Path | Notes |
|--------|------|-------|
| GET | `/api/v1/report/assets` | `type` `routeId` `search` `period` `page` `pageSize` |
| GET | `/api/v1/report/incidents` | + `from` `to` |
| GET | `/api/v1/report/checkins` | + `from` `to` |
| GET | `/api/v1/report/checkins/export` | Excel/CSV UTF-8 BOM |

Không schema riêng bắt buộc — query in-memory / Asset+Incident+Patrol read. **Cấm** `api/v1/rmms/*` · **cấm** ERP.*.

## GAP

| ID | Issue | Default |
|----|-------|---------|
| GAP-DA-RPT-MFE | Live MFE raw `<table>` + Tạo mới + Form scaffold | Kind E `LinPageLayout` kind=`report` · **cấm** CRUD |
| GAP-DA-RPT-PREFIX | Context `/api/v1/reports/*` | SA chốt `api/v1/report/*` |
| GAP-DA-RPT-ROUTE | Demo mã ≠ 38 CUC2 | PO alias · SearchInput 38 + tất cả |
| GAP-DA-RPT-SELECT | Demo Select/Text | SearchInput + SearchTextInput |
| GAP-DA-RPT-CATALOG | Catalog 172 / GOVOne rail | **OUT P1** MFE |
| GAP-DA-RPT-EXCEL | Excel chỉ check-in | IN P1 · CSV BOM |

## Handoff PO / Design / SA

- P1 = 3 loại Web · tách slug `dashboard`.
- 1× `LinPageLayout` · **cấm** nested CatalogListShell · grid + `LinCatalogListPagination`.
- `ReportFormPage` **OUT P1**.
- autoApprove **ON** → Design/SA tự confirm trên board; repo BE+UI = user tick (executor packet = authorize Dev).
