# Team-lead — task pack · rpt-vi-pham-hlatdb (Kind E · packKind=report)

| Field | Value |
|-------|-------|
| feature | `rpt-vi-pham-hlatdb` |
| this role | `team_lead` · `/agent-team-lead` |
| status | `done` |
| changeScope | `edit_page` |
| packKind | **`report`** (Kind **E** AnalyticsReportShell) — board packet `list` **stale** (GAP-PO-HLATDB-02 / GAP-DS-HLATDB-02) · **cấm** Kind B CRUD / `LinCatalogUiSchemaEditorModal` |
| Feature Kind | **E** · leaf `/bao-cao/vi-pham-hlatdb` · **không** CRUD form |
| route_confirm | **route_a** `/bao-cao/vi-pham-hlatdb` · mfeStdUrl `http://localhost:9311/bao-cao/vi-pham-hlatdb` |
| design_confirm | **approve** (`task_283c81e9` · autoApprove ON) |
| solution_confirm | **approve** (`task_f49d07d0` · autoApprove ON) |
| be_repo_confirm | **approve** `D:/AI-QLBD/Linm.RMMS.WebService` · `api/v1/report` |
| ui_repo_confirm | **approve** `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Report` |
| skillVersion | `2026.08.15.5` |
| schemaVersion | `1` |
| workflowVersion | `2026.08.15.5` |
| rulesVersion | `2026.08.15.8` |
| versionGate | `keep_current` (khớp PO + Design + SA + data-analy stamp) |
| autoApprove | **ON** |
| chain | **ON** |
| sourceFormReady | **yes** · entity `RowViolation` · CSDL §3.6 |
| sourceFeature | `csdl-so-sach` |
| sourceTables | `RowViolation` |
| taskId | `task_0f56b18c` |
| prior · data_analy | **confirmed** · `specs/_data-analy/features/rpt-vi-pham-hlatdb-control-hint.md` · hash `sha256:rpt-vi-pham-hlatdb-context-20260816` |
| prior · po | **confirmed** · `po/requirement.md` · `task_ab8fa516` |
| prior · design | **confirmed** · `ui/design.md` + prototype + reviewUrl · `task_283c81e9` |
| prior · sa | **confirmed** · `be/solution-discovery.md` · `task_f49d07d0` |
| updatedAt | `2026-08-16T17:40:00.000Z` |
| supersedes | stub TL `task_24fb0ec1` (ngắn) — pack này re-audit live + T-* đầy đủ sau SA confirmed |

**Cấm ERP.*** · **cấm** `ERP.Service.*` · **cấm** `Domains/Master` · **cấm** `api/v1/rmms/*` · **cấm** prefix `api/v1/reports` (plural) · **cấm** copy CRUD `csdl-so-sach` vào leaf này · **cấm** migration P1 · **cấm** invent QL.22.

`source.mfe` = `Linm.Web.RMMS.Report` · `source.backend` = `Linm.RMMS.WebService` · BFF proxy only.

## retry.ssot_rereview (trước Dev Write)

Audit live `src/pages/RowViolationReportPage/RowViolationReportPage.tsx` + `RowViolationFilterBar.tsx` · `index.tsx` route `bao-cao/vi-pham-hlatdb` · `yarn start:std` **:9311**. Surface **đã** Kind E (prior `task_24fb0ec1`). Pack này **không** patch 1 chỗ — Dev đóng GAP còn lại trên **cùng** surface.

| # | Check | Required | Live | Verdict |
|---|-------|----------|------|---------|
| 1 | 1× `LinPageLayout` kind=`report` · **cấm** nested `CatalogListShell` | yes | 1× `kind="report"` · không CatalogListShell | **PASS** |
| 2 | `LinCatalogDataGrid` kéo cột default **ON** | yes | `resizable: true` + migrate `RESIZE_DEFAULT_ON_MIGRATED` | **PASS** |
| 3 | Footer `LinCatalogListPagination` **luôn** | yes | footer luôn · `totalCount=0` khi `!viewed` | **PASS** |
| 4 | flex + skeleton | yes | `.page` + `skeletonRows={8}` | **PASS** |
| 5 | reportToolbar + Config **FULL** · **cấm** `LinListTableConfigModal` | yes | `buildRmmsReportToolbar` · `ReportDisplayConfigModal` · **không** `LinListTableConfigModal` · **không** `configHint` | **PASS** (Kind E analog — **cấm** đổi sang `LinCatalogUiSchemaEditorModal`) |
| 6 | `LinErpListFilterBar` SearchInput tab/tuyến/TT · Date · Input | yes | `RowViolationFilterBar` | **PASS** — Dev **cấm** đổi Select |
| 7 | Form OUT | yes | không Thêm mới / Resource / Slideout / View=readOnly | **PASS** |
| 8 | Xem mới load | yes | draft đến Xem | **PASS** |
| 9 | list_parity Kind E | yes | 2 tab · drill · Excel subset | **PASS** |
| 10 | tree_master | N/A | — | **N/A** |
| 11 | Cột ẩn default Design | `minutesCommune` `minutesAdmin` **ẩn** tab detail | `columnSeeds.visible: true` **mọi** cột | **GAP-TL-HLATDB-01** → Dev |
| 12 | Query FE | `tab` `status` `routeId` `from` `to` `q` · **cấm** `type`/`search` | SA: FE đã gửi canonical | Dev **verify** không regress alias |
| 13 | Kind B leftover | **cấm** `const columns` leftover **sau** schema bootstrap | `useMemo` columns + prefs = **đúng** Kind E | **PASS** — **không** bootstrap `useCatalogUiSchema` |

Form checklist: **OUT** — không T-UI-FORM implementation.

## T-* inventory

| id | layer | DoD | Owner |
|----|-------|-----|-------|
| T-CTX-01 | docs | Context Kind E + controlHint + parent `csdl-so-sach` **cấm** CRUD copy | keep |
| T-PERM-01 | stub | `report.vi-pham-hlatdb.read` (+ export cùng read) · P1 **không** `[RequirePermission]` nếu CommonLib chưa gate · **không** block P1 | BE keep |
| T-UI-LIST-01 | ui | Zones A–D Kind E (dưới) | Dev keep + GAP-01 |
| T-UI-FORM-01 | ui | **OUT** — **cấm** form CRUD / Resource / Slideout / View=readOnly | Dev keep |
| T-UI-ACT-01 | ui | Xem · Làm mới · Excel · In stub · Config FULL · Chart SoCai | Dev keep |
| T-UI-LKP-01 | ui | SearchInput tab/TT enum tĩnh · tuyến CUC2 **cấm QL.22** + Integration search fallback seed | Dev keep |
| T-UI-FIELD-01 | ui | Map typed RowViolation · **cấm** Col* · lastDay = alias UI của `day` | Dev keep |
| T-UI-PROD-01 | ui | Route `/bao-cao/vi-pham-hlatdb` · pageId `rpt-vi-pham-hlatdb` · testid `rmms-row-violation-report` · **cấm** hub `ReportListPage` làm trang này | keep |
| T-UI-UX-01 | ui | `dispatchAppToast` · **cấm** `window.alert`/`confirm` · empty hint chưa Xem | Dev keep |
| T-BE-01 | api | `GET api/v1/report/row-violations` envelope `ApiResponse<ReportPagedResult<ReportRowViolationRowDto>>` | BE keep |
| T-BE-02 | api | Seed 12 CUC2 · `FilterRoute` **exact** · tab summary group · pageSize 50/100/200/500 · coalesce `status??type` `q??search` | BE keep |
| T-BE-03 | api | `GET …/row-violations/export` CSV UTF-8 BOM `row-violations.csv` · **không** page | BE keep |
| T-BFF-01 | bff | Forward raw QS + auth/company headers · **không** business | BFF keep |
| T-QA-01 | qa | Sau Dev + **build PASS** — **pending** đến lượt | QA |

## T-CTX-01

| | |
|--|--|
| Context | `docs/context/features/rpt-vi-pham-hlatdb.md` — API plural `reports` **stale** · dùng SA prefix `api/v1/report` |
| ControlHint | `specs/_data-analy/features/rpt-vi-pham-hlatdb-control-hint.md` |
| Parent | `csdl-so-sach` · drill `/csdl-so-sach?kind=row-violations&id=` |
| Hub | `reports` — **tách leaf** · **cấm** KPI dashboard gộp slug |
| Prototype | `ui/prototype/rpt-vi-pham-hlatdb-prototype.html` |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/rpt-vi-pham-hlatdb/ui/prototype/rpt-vi-pham-hlatdb-prototype.html` |

## T-PERM-01

- Perm: `report.vi-pham-hlatdb.read`
- JWT + `X-Company-Id`
- P1 stub — **không** block ship nếu chưa gắn attribute
- **Cấm** perm catalog CRUD trên slug này

## T-UI-LIST-01 (zones A–D)

### Zone A — Header

- Title **Vi phạm HLATĐB** · icon `fas fa-exclamation-triangle`
- **Cấm** Thêm mới / Tạo mới
- **Cấm** GOVOne chrome

### Zone B — Filter + reportToolbar

`LinErpListFilterBar` 1 hàng wrap · title trái · cụm phải.

| key | Label | Control | catalogKind / rule |
|-----|-------|---------|-------------------|
| tab | Tab | SearchInput | `ROW_VIOLATION_TAB_LOOKUP` · `detail` / `summary` |
| routeId | Tuyến | SearchInput | road-route CUC2 38 · empty=Tất cả · **cấm QL.22** |
| status | Loại / TT VP | SearchInput | `phat-hien`/`lap-bb`/`dang-xu-ly`/`da-xu-ly`/`ton-dong` / empty=Tất cả |
| fromDate / toDate | Từ / Đến | Date | `day` (`At`) `yyyy-MM-dd` |
| qSearch | Tìm | Input | query `q` · Enter = Xem |
| — | **Xem** | primary | apply draft → page=1 → GET |
| — | Xuất Excel | | `canExport` chỉ khi `viewed` |

Toolbar: Làm mới (`!viewed` → apply+view; else refetch) · Biểu đồ SoCai (`viewed` + ≥1 dòng) · In stub toast · Config FULL title «Cấu hình hiển thị báo cáo».

Đổi filter **không** auto-fetch. Đổi page/pageSize sau viewed → refetch applied.

**Cấm:** `LinListTableConfigModal` · `configHint` · native `<select>` · Kind B schema editor.

### Zone C — Grid

- `listTitle`: **Kết quả báo cáo vi phạm HLATĐB**
- Empty: chưa Xem «Chưa xem — nhấn «Xem» để tải báo cáo.» · 0 dòng «Không có dòng phù hợp bộ lọc.»
- `LinCatalogDataGrid` kéo cột ON · skeleton 8 · STT grid · **cấm** cột CRUD ⋯
- Drill «Mở sổ VP» → `/csdl-so-sach?kind=row-violations&id={violationId}` top window
- Chart client từ `items` trang — **không** API chart P1

**Tab `detail`**

| key | Label | Default visible |
|-----|-------|-----------------|
| day | Ngày | hiện |
| route | Tuyến | hiện |
| stationKm | Km | hiện |
| adminArea | Địa bàn | hiện |
| statusLabel | TT / loại VP | hiện |
| orgName | Tổ chức | hiện |
| minutesDepot | BB hạt | hiện |
| minutesCommune | BB xã | **ẩn** (GAP-TL-HLATDB-01) |
| minutesAdmin | BB HC | **ẩn** (GAP-TL-HLATDB-01) |
| currentState | Hiện trạng | hiện |
| unitConfirm | Đơn vị XN | hiện |
| drill | Nguồn | hiện |

Seed prefs: cột mới / lần đầu **phải** `visible: false` cho `minutesCommune` `minutesAdmin`. User đã lưu prefs cũ: **một lần** migrate hide nếu chưa có flag `rpt-vi-pham-hlatdb-hide-bb-default-v1` (không reset width user).

**Tab `summary`**

| key | Label | DTO |
|-----|-------|-----|
| route | Tuyến | `route` |
| ticketCount | Số VP | `ticketCount` |
| outstandingCount | Tồn đọng | `outstandingCount` |
| day | Ngày gần nhất | `day`/`at` — UI alias lastDay · **không** field DTO mới |
| adminArea | Địa bàn | `adminArea` |
| drill | Nguồn | lọc sổ theo tuyến |

### Zone D — Pagination

`LinCatalogListPagination` 50/100/200/500 **luôn**. **Cấm** footerPagination / pageSizeBar / raw table footer.

## T-UI-FORM-01

**OUT.** Không form pack. **Cấm** Zone F catalog config. Config cột = Kind E `ReportDisplayConfigModal` / `LinReportTableConfigModal` analog.

## T-UI-ACT-01

| Action | Rule |
|--------|------|
| Xem | GET API-01 applied filters |
| Làm mới | xem trên |
| Excel | GET API-02 · subset cột hiện FE · UTF-8 BOM |
| In | `LinReportPrintScopeModal` · stub toast OK · **cấm** `window.confirm` |
| Config | FULL P1 |
| Chart | SoCai khi viewed + dòng · `showCharts` |
| Drill | FE route CSDL |

## T-UI-LKP-01

| Lookup | Source |
|--------|--------|
| tab | enum FE tĩnh — **không** API |
| status | enum FE tĩnh — **không** API |
| routeId | P1 `ROAD_ROUTE_SEED` + `GET /integration/road-routes/search` fallback seed nếu rỗng/down · strip QL.22 · **cấm** clone catalog vào Report DTO |

**Cấm** Dev đổi SearchInput → Select.

## T-UI-FIELD-01

Map UI → DTO → nguồn (SA): `day`←`At` · `route`←`RouteId` · `stationKm` `adminArea` `statusLabel`←`ViolationStatus` · `orgName` `minutes*` `currentState` `unitConfirm` · summary `ticketCount` `outstandingCount`. **Cấm** Col1–Col3.

## T-UI-PROD-01

- MFE `Linm.Web.RMMS.Report`
- Route `bao-cao/vi-pham-hlatdb` · pageId `rpt-vi-pham-hlatdb` · testid `rmms-row-violation-report`
- **Cấm** nested CatalogListShell

## T-UI-UX-01

Toast SSOT. Không native alert/confirm. Không title-clip. Flex column. Confirm lỗi API = toast.

## T-BE-01 / T-BE-02 / T-BE-03

Locked paths (SA — **không** folder domain mới):

| Layer | Path |
|-------|------|
| API | `api/src/RMMS.Service.Api/Domains/Report/` |
| Controller | `ReportQueryController.cs` · `api/v1/report` |
| Service | `ReportService.cs` |
| DTO | `ReportQueryDtos.cs` · `ReportRowViolationRowDto` |
| BFF | `bff/domains/report/LINM.RMMS.Report.Bff/Controllers/ReportBffController.cs` · `web-bff/api/v1/report` |

Query: `tab` `status` `routeId` `from` `to` `q` `page` `pageSize`. BE **giữ** coalesce `type`/`search`. FE **không** gửi alias.

Rules: tab empty→detail · status exact · route **exact** case-insensitive · day inclusive · q Contains · pageSize allow-list · seed 12 CUC2 **không** QL.22 · **không** POST/PUT/DELETE · **không** warehouse · RowViolation EF **P2**.

Dev BE: **không** đổi path/envelope trừ compile fail. Delta chính = **FE** GAP-01.

## T-BFF-01

Proxy only. Forward QS. Không transform envelope. Không business filter.

## T-QA-01

Pending đến lượt. Không chạy QA trong task TL này.

## Dev DoD (handoff)

1. Giữ Kind E live + đóng **GAP-TL-HLATDB-01** (ẩn default BB xã / BB HC + migrate prefs).
2. Verify không `type`/`search` trên FE · không QL.22 · không Kind B leftover.
3. **Build HARD:** MFE `yarn build` PASS · nếu đụng API: BE `dotnet build` PASS — ghi implement § Build. Fail → 1× auto-fix · **cấm** `completed` / handoff QA.
4. Role QA/Review = **pending** đến lượt. Chain ON · autoApprove ON → sau Dev completed enqueue QA.
5. **Cấm** Step 4b ERP.WebService · **cấm** `Linm.Web.ERP.WebService`.

## GAP TL

| ID | Decision |
|----|----------|
| GAP-TL-HLATDB-01 | `minutesCommune` `minutesAdmin` ẩn default tab detail (SA GAP-SA-HLATDB-HIDDEN / Design GAP-DS-HLATDB-11) |
| GAP-TL-HLATDB-02 | Pack **report** Kind E — packet board `list` stale · **cấm** `LinCatalogUiSchemaEditorModal` / CatalogUiSchemaRegistry seed |
| GAP-TL-HLATDB-03 | lastDay = alias UI · DTO giữ `day` |
| GAP-TL-HLATDB-04 | Perm stub P1 không block |
| GAP-TL-HLATDB-05 | Không migration P1 |
| GAP-TL-HLATDB-06 | TL **không** `yarn build` — Dev GAP-DEV-BUILD |
| GAP-TL-HLATDB-07 | autoApprove ON → TL tự confirm pack · enqueue **dev** · QA/Review pending |

## Out of pack

CRUD sổ 6 · warehouse · Kind B · ERP.* · plural reports · KPI hub · Integration Type A bắt buộc P1 · invent QL.22 · GetById Report.

## Handoff Dev

- Implement `specs/rpt-vi-pham-hlatdb/implement/rpt-vi-pham-hlatdb.md`
- BE root `D:/AI-QLBD/Linm.RMMS.WebService` nếu đụng API
- UI `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Report`
- beRepo + uiRepo **đã approve**
- Roles sau Dev = pending đến lượt

---
<!-- Version meta: skillVersion=2026.08.15.5 · schemaVersion=1 · workflowVersion=2026.08.15.5 · rulesVersion=2026.08.15.8 · versionGate=keep_current -->
