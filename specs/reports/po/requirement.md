# PO — reports (Báo cáo Web)

| Field | Value |
|-------|-------|
| feature | `reports` |
| this role | `po` · `/agent-po` |
| changeScope | `edit_page` |
| packKind | **`report`** (Kind **E** AnalyticsReportShell) — **không** Kind B catalog list |
| packKindNote | Run packet ghi `list` · **SSOT lệch** → PO **chốt `report`** theo context + data-analy + DOMAIN-MAP. **Cấm** Design/TL/Dev chuyển sang CRUD list/form. |
| Feature Kind | **E** · 3 loại P1 (Tài sản · Sự cố · Check-in) · **không** CRUD form P1 |
| status | `done` |
| requestSource | run packet `task_323faa8f` · `/agent-qldb-workflow` · `roleOnly=po` · chain ON · autoApprove **OFF** |
| autoApprove | **OFF** — Design/SA/Review **await_confirm** trên board (user Approve). Role PO **không** gate confirm. |
| productRoot | `D:/AI-QLBD/Linm.RMMS.Data` |
| prior · data_analy | status=`confirmed`/`done` · artifact **`specs/_data-analy/features/reports-control-hint.md`** (handoff path `specs/reports/specs/_data-analy/clusters/reports.md` **không tồn tại** — dùng artifact thật) · contentHash `sha256:5d30e1a7796fe50fb67b8444809805e826017017337ddc328ac0b1fcdbaadbdf` · **no Excel cluster** · sourceKind=`legacy` |
| skillVersion | `2026.08.15.5` |
| schemaVersion | `1` |
| workflowVersion | `2026.08.15.5` |
| rulesVersion | `2026.08.15.8` |
| versionGate | `keep_current` (khớp data-analy stamp · không mismatch) |
| updatedAt | `2026-08-15T08:05:00.000Z` |
| taskId | `task_323faa8f` |

## 1. Goal

Trang **Báo cáo Web** (`/bao-cao`): Kind **E** — đúng 3 loại P1 (Tài sản · Sự cố · Check-in). Filter loại BC / loại báo cáo / tuyến / kỳ / thời gian / qSearch → **Xem** mới load lưới. **Xuất Excel** chỉ check-in (CSV UTF-8 BOM). Align demo → MFE `Linm.Web.RMMS.Report` · BE `D:/AI-QLBD/Linm.RMMS.WebService` domain **Report** · prefix **`api/v1/report`**. Tách slug `dashboard` (KPI tổng).

Persona: Hạt trưởng · quản lý (Web).

`ReportFormPage` / Thêm mới **OUT P1**. Catalog 172 / GOVOne rail **OUT P1**.

**Cấm ERP.*** · **cấm** `api/v1/rmms/*` · **cấm** `api/v1/reports` (plural) · **cấm** parent JSON.

## 2. Current → New (edit_page)

| Layer | Current (live / prior chain `task_51457ed6`) | New (delta PO này — Design re-review) |
|-------|-----------------------------------------------|----------------------------------------|
| Demo | 3 tab · filter · fake grid · Excel CSV BOM · `features/reports-demo.html` redirect | Giữ visual SSOT content-only A–D; **skip** chrome/sidebar/menu demo |
| MFE | `ReportListPage`: 1× `LinPageLayout` kind=`report` · `LinCatalogDataGrid` · `LinCatalogListPagination` · SearchInput family/kind/route/period · Date từ/đến · SearchTextInput · Xem · Excel check-in · form redirect list | **Giữ** Kind E · Design prototype content-only + `reviewUrl` · **cấm** nested CatalogListShell · footerPagination · pageSizeBar · raw table · **cấm** Thêm mới Zone A |
| API | `GET api/v1/report/{assets\|incidents\|checkins}` + `checkins/export` · lookup Integration road-routes | **Không** đổi prefix · SA confirm lookup Type A · query in-memory P1 (không schema bắt buộc) |
| Prefix | DOMAIN-MAP singular | **`api/v1/report`** — GAP-PO-RPT-01 giữ |
| BE | `Linm.RMMS.WebService` · Report · **cấm ERP.*** | STATUS `backend` = path + `api/v1/report` |

## 3. DoD (đo được)

1. Family 3 loại (`assets` · `incidents` · `checkins`) · đổi filter → page=1 · **Xem** mới load (empty hint khi chưa xem).
2. Zone A: title «Báo cáo Web» — **cấm** Thêm mới trên A.
3. Zone B: SearchInput family/kind/route/period · Date từ/đến (**ẩn** khi assets) · SearchTextInput · reportToolbar Làm mới · Biểu đồ stub · In stub · Config · **Xuất Excel** chỉ check-in.
4. Zone C: `LinCatalogDataGrid` kéo cột default ON · STT + cột theo family; search hạng mục · mã · cán bộ.
5. Zone D: `LinCatalogListPagination` 50/100/200/500.
6. Excel check-in: CSV UTF-8 BOM download.
7. Live: title + toolbar + grid/empty **không** blank/title-clip.
8. Dev gate: FE `yarn build` + `yarn typecheck` PASS · BE `dotnet build` PASS (khi đụng API).
9. **Cấm** `ERP.*` · **cấm** `api/v1/rmms/*` · **cấm** `api/v1/reports`.

## 4. CTX / DEM / DI inventory

| ID | Path | Loại |
|----|------|------|
| CTX-01 | `docs/context/features/reports.md` | feature |
| CTX-02 | demo-maps `reports-control-map.md` | Select/Text **stale** vs SearchInput |
| CTX-03 | `reports-actions.md` | 172 — OUT P1 UI |
| DEM-01 | `Linm.RMMS.Demo/src/demo/features/reports-demo.html` | redirect |
| DEM-02 | `bao-cao/reports.html` + js | page + seed |
| DI-01 | — | **no Excel cluster** (handoff `clusters/reports.md` N/A) |
| DI-02 | `specs/_data-analy/features/reports-control-hint.md` | controlHint SSOT · **confirmed** |
| DI-03 | `specs/_data-analy/shared-catalogs/INVESTIGATE-CUC2.md` · `road-route-seed.json` | 38 tuyến APPROVED A |
| MFE | `Linm.Web.RMMS.Report` `/bao-cao` · `http://localhost:9311/bao-cao` | UI |
| BE | `D:/AI-QLBD/Linm.RMMS.WebService` · Report · `api/v1/report` | API |

## 5. controlHint (PO chốt — từ data-analy)

| Field key | Label | controlHint | catalogKind |
|-----------|-------|-------------|-------------|
| reportFamily | Loại BC | `SearchInput` | enum `assets`/`incidents`/`checkins` |
| reportKind | Loại báo cáo | `SearchInput` | enum theo family |
| routeId | Tuyến | `SearchInput` | **road-route** · trống = tất cả · **cấm** free-text |
| periodMode | Kỳ | `SearchInput` | enum day/month/quarter/year |
| fromDate | Từ ngày | `Date` | ẩn khi assets |
| toDate | Đến ngày | `Date` | ẩn khi assets |
| qSearch | Tìm kiếm | `SearchTextInput` | text |

Result columns (readonly grid): assets `route/item/qty/unit/condition/updatedAt` · incidents `code/route/type/severity/status/at` · checkins `staff/route/points/coverage/day/firstAt/lastAt`. Display Dropdown chỉ **condition/severity/status** trên lưới — không editor.

## 6. GAP PO

| ID | Decision |
|----|----------|
| GAP-PO-RPT-01 | API prefix **`api/v1/report`** (không plural) — đóng GAP-DA-RPT-PREFIX |
| GAP-PO-RPT-02 | Demo `QL.1A` → alias filter **`QL.1`** khi user chọn CUC2 `QL.1`; seed in-memory giữ mã demo · **cấm** invent `ĐT.*`/`CT.01` vào 38 |
| GAP-PO-RPT-03 | Form `/bao-cao/new` **OUT** — redirect list |
| GAP-PO-RPT-04 | Catalog 172 **OUT P1** |
| GAP-PO-RPT-05 | Chart/Print/Config = stub toast P1 |
| GAP-PO-RPT-06 | Không gộp `dashboard` |
| GAP-PO-RPT-07 | Pack kind board `list` → **bỏ** · dùng **`report` / Kind E** |

## 7. Out of pack

Legacy GOVOne full catalog · RAG/AI trên BC · schema warehouse · parent JSON · Kind B CRUD · nested CatalogListShell.

## 8. Handoff Design

- Prototype **content-only** zones A–D (`list-shell-prototype.md` / report shell) · **skip** note/sidebar/menu/chrome demo · + `reviewUrl`.
- controlHint bảng §5 → Design Control · **không** đổi SearchInput → Select.
- autoApprove **OFF** → Design xong **dừng `await_confirm`** · user Approve board mới enqueue SA.
- Roles sau PO = **pending** đến lượt. **Cấm** nhảy QA khi Design/SA/TL/Dev còn pending.
- Repo BE+UI tick = user (không auto) trước Dev.
