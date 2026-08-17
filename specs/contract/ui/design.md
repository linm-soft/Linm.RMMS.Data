# Design — contract (Hợp đồng và ngân sách)

| Field | Value |
|-------|-------|
| feature | `contract` |
| this role | `design` · `/agent-design` |
| Feature Kind | **B** — Catalog list A–D + **full-page** form (`ContractFormPage`) · **cấm** Slideout / Resource |
| status | `confirmed` |
| design_confirm | `approve` (`autoApprove=ON` · `task_eba480e8`) |
| changeScope | `edit_page` |
| packKind | `list` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Contract` (`/contract` · `http://localhost:9312/contract`) |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · `api/v1/contract/contracts` (**cấm ERP.***) |
| prior | PO `confirmed` · `po/requirement.md` · data-analy `contract-control-hint.md` hash `sha256:0f942023667b8cc7e10d626ce5aa10117700feac901284cecbf6038788284b73` |
| autoApprove | **ON** (`task_eba480e8`) |
| updatedAt | `2026-08-16T04:30:00.000Z` |
| taskId | `task_eba480e8` |

## 0. Context & Demo (from PO)

| ID | Path | Notes |
|----|------|-------|
| CTX-01 | `docs/context/features/contract.md` | Kind B+D slideout **SUPERSEDED** — Design lock = Kind B full-page |
| DEM-01 | `Linm.RMMS.Demo/src/demo/features/contract-demo.html` | Visual SSOT — **skip** chrome / topnav / user menu · **không** regen demo |
| DA-01 | `specs/_data-analy/features/contract-control-hint.md` | controlHint SSOT · cluster file **không tồn tại** |
| MFE live | `ContractListPage` + `ContractFormPage` | filter nhà thầu · schema editor · View `<dl>` — **keep** |

Persona: Ban QLDA · Finance · Hạt trưởng. **≠** Inventory `/contract/inventory`.

## 1. Kind + UI pattern

| | |
|--|--|
| Feature Kind | **B** |
| List pattern | **1×** `LinPageLayout` kind=catalog — **cấm** nested `CatalogListShell` |
| Grid | `LinCatalogDataGrid` · kéo cột **default ON** |
| Footer | `LinCatalogListPagination` — **cấm** footerPagination / pageSizeBar / raw table production |
| Form pattern | **Full-page** `ContractFormPage` C/E/V/Copy — **cấm** Resource · **cấm** Slideout |
| Routes | List `/contract` · Create `/contract/new` · Edit/View `/contract/:id` |
| Toolbar SSOT | `catalog-list-toolbar` + `erp-control-icon-map` (`editConfig`=`fa-cog`) |
| View | **`<dl>` / display** — **cấm** Input `readOnly` xám toàn form |
| KPI | 4 ô **IN P1** · slot `beforeToolbar` (giữa A và B) — **không** nút trên A |
| Zone F | `LinCatalogUiSchemaEditorModal` title «Cấu hình hiển thị danh mục» · `useCatalogUiSchema` · `buildDynamicGridColumns` · **cấm** `configHint` · **cấm** `LinListTableConfigModal` editor cột |

## 2. Screens / zones

| Screen | FormMode | Zones | Controls |
|--------|----------|-------|----------|
| Hợp đồng và ngân sách | list | **A Header · KPI · B Toolbar+filter · C Grid · D Pagination · F schema** | SearchTextInput + SearchInput type/status/**contractor** |
| Form HĐ | create/edit/view/copy | **Full-page** header + body + footer | fields P1 · payments `pattern_inline_grid` · View=`<dl>` · footer-only Lưu/Hủy |

### Zone A — Header

- Icon `fa-file-contract` + title **Hợp đồng và ngân sách** (22px)
- **Cấm** nút Thêm mới / Tạo mới trên A

### KPI strip (`beforeToolbar` · IN P1)

| Card | Metric |
|------|--------|
| Tổng giá trị HĐ | sum `amount` |
| Ngân sách còn | sum `budgetAllocated − disbursed` |
| KPI TB | avg `kpiScore` |
| HĐ sắp hết hạn | count `effectiveTo` trong 90 ngày · status ≠ đóng |

### Zone B — Toolbar + filter (PO DoD)

**Trái (filter + icon):**

| key | Label | Control (Design chốt) | catalogKind |
|-----|-------|------------------------|-------------|
| search | Tìm kiếm | `SearchTextInput` | text — mã · số HĐ · tên · nhà thầu |
| type | Loại hợp đồng | `SearchInput` | enum 3 + trống=tất cả — **cấm** native `<select>` |
| status | Trạng thái | `SearchInput` | enum 6 + trống=tất cả |
| contractor | Nhà thầu | `SearchInput` | enum 3 P1 + trống=tất cả · partner-unit **UNCLEAR P2** |
| — | Làm mới | `fa-sync-alt` | reload · page=1 · clear filter |
| — | Lịch sử | `fa-history` | `LinCatalogHistoryModal` stub OK |
| — | Cấu hình | `fa-cog` | Zone F `LinCatalogUiSchemaEditorModal` |
| — | Xóa | `fa-trash` | khi có selection · **Lin confirm** — **cấm** `window.alert` / `window.confirm` |

**Phải:** **Tạo hợp đồng** primary (`fa-plus`) — **chỉ trên B** → `/contract/new`.

**Cấm trên B (P1):** Xuất Excel · quyết toán · user-menu · Đề xuất / Chờ duyệt (asset leftover).

Filter đổi → **page=1** (search must work). **Không** nút Tìm riêng (icon SearchTextInput OK).

### Zone C — Grid

- Card title: **Danh sách hợp đồng**
- Help: nhấn đúp / menu dòng — Xem · Sửa · Sao chép · Xóa · Lịch sử
- Flex + skeleton load — **cấm** blank body
- Columns (kéo cột ON): STT · □ · **Mã HĐ** · **Số HĐ** · **Tên HĐ** · **Loại** · **Nhà thầu** · **Giá trị** · **KPI** · **Trạng thái** · **Hết hạn** · ⋯
- Click mã → View **full-page** `<dl>`
- Row menu P1: **Xem · Sửa · Sao chép · Xóa · Lịch sử**
- Row menu P2 stub OK: Ký · Ghi nhận TT · Xem KPI (không block P1)

### Zone D — Pagination

`LinCatalogListPagination`: `Tổng: N · Trang x/y` · Hiển thị **50 / 100 / 200 / 500** · FA pager 32×32.

### Zone F — Schema editor

Title «Cấu hình hiển thị danh mục» · bảng cột List / width / filter / sort / Thêm cột · catalogKind=`contracts`. **Cấm** leftover `const columns` / `LinCatalogDataColumn` sau schema.

## 3. Field inventory (form) — Design chốt controlHint

| uiField | Label VN | Control | Required | FormMode lock | Notes |
|---------|----------|---------|----------|---------------|-------|
| code | Mã HĐ | `Text` readonly IdCode | auto | all display | `CTR-yyyyMMdd-nnnn` · copy = mã mới |
| contractNo | Số HĐ | `Text` | * | view=`<dl>` | |
| name | Tên HĐ | `Text` | * | view=`<dl>` | |
| type | Loại HĐ | `SearchInput` | * | view=`<dl>` | enum 3 — **cấm** Select |
| contractor | Nhà thầu | `SearchInput` | * | view=`<dl>` | enum 3 P1 |
| amount | Giá trị HĐ | `Money` | * | view=`<dl>` | MoneyInput max-width 200px |
| status | Trạng thái | `SearchInput` | * | view=`<dl>` | enum 6 — **cấm** Select |
| signedAt | Ngày ký | `Date` | | view=`<dl>` | `type=date` |
| effectiveFrom | Ngày hiệu lực | `Date` | | view=`<dl>` | cùng hàng với effectiveTo |
| effectiveTo | Ngày hết hạn | `Date` | | view=`<dl>` | |
| budgetAllocated | Ngân sách năm | `Money` | | view=`<dl>` | |
| disbursed | Đã giải ngân | `Money` computed **display** | | all display | sum payments đã chi — **không** Input khóa |
| budgetYear | Năm NS | `Integer` | | view=`<dl>` | |
| kpiScore | Điểm KPI | `Number` | | view=`<dl>` | 0–100 |
| slaPct | SLA % | `Number` | | view=`<dl>` | 0–100 |
| warrantyMonths | Tháng BH | `Integer` | | view=`<dl>` | |
| warrantyExpires | Ngày hết BH | `Date` | | view=`<dl>` | |
| orgUnit | Đơn vị QL | `SearchInput` | | view=`<dl>` | P1 enum 3 hạt · org-unit CUC2 **UNCLEAR P2** |
| routeSegment | Tuyến/đoạn | `Text` | | view=`<dl>` | P1 · road-route **P2** |
| workOrderLink | Liên kết WO | `Text` | | view=`<dl>` | P1 free code |
| note | Ghi chú | `Text` textarea | | view=`<dl>` | |
| payments[].period | Kỳ TT | `Text` | * | view=`<dl>` | inline grid |
| payments[].amount | Số tiền TT | `Money` | * | view=`<dl>` | |
| payments[].paidAt | Ngày TT | `Date` | | view=`<dl>` | |
| payments[].status | TT dòng | `SearchInput` | | view=`<dl>` | chờ / đã chi / hủy |
| payments[].note | Ghi chú dòng | `Text` | | view=`<dl>` | |

### Enum values (P1) — Design chốt value + label (live MFE)

**type**

| value | Label |
|-------|--------|
| `bao-tri` | Bảo trì |
| `nang-cap` | Nâng cấp |
| `khac` | Khác |

**status**

| value | Label |
|-------|--------|
| `nhap` | Nháp |
| `da-ky` | Đã ký |
| `dang-th` | Đang thực hiện |
| `thanh-toan` | Thanh toán |
| `quyet-toan` | Quyết toán |
| `dong` | Đóng |

**contractor**

| value | Label |
|-------|--------|
| `nt-01` | Công ty CP Cầu đường Miền Trung |
| `nt-02` | Tổng Cty Xây dựng đường bộ 5 |
| `nt-03` | Công ty TNHH Bảo trì QLĐB |

**orgUnit (P1 local)**

| value | Label |
|-------|--------|
| `hat-1` | Hạt QLĐB 1 |
| `hat-2` | Hạt QLĐB 2 |
| `bql` | Ban QLDA |

**payments.status**

| value | Label |
|-------|--------|
| `cho` | Chờ |
| `da-chi` | Đã chi |
| `huy` | Hủy |

### CSS / layout gates

| Rule | Gap |
|------|-----|
| Full-page form · **cấm** Slideout / Resource | GAP-DA-CTR-SLIDEOUT **CLOSED live** · proto **re-chốt** |
| View `<dl>` — **cấm** Input `readOnly` xám | GAP-DA-CTR-VIEW-RO **CLOSED live** |
| SearchInput enum — **cấm** native Select | GAP-DA-CTR-SELECT **CLOSED live** |
| Filter nhà thầu SearchInput | GAP-DA-CTR-FILTER-NT **CLOSED live** |
| Zone F schema editor · **cấm** `configHint` | GAP-P2-CC-06 / GAP-DEV-CONFIG-PLACEHOLDER-01 |
| Input pad 6×10 · min-height 32 · focus shadow | GAP-P2-CSS-* |
| Checkbox grid 24×24 · cột STT/□ 48px | GAP-P2-GRID-CHECK-01 |
| Proto cũ asset/KCHT/Slideout | GAP-DA-CTR-DESIGN-STALE **CLOSED this role** |

## 4. Form full-page wire

```
[Header] [← Quay lại]  Title «Hợp đồng» · badge Tạo mới|Sửa|Xem|Sao chép
         [📋 Sao chép] [✏ Sửa] khi view — không Lưu/Hủy trên header (footer-only)
[Hint] leave-confirm dirty
[Body C/E/Copy] 2-col · SearchInput type/contractor/status/orgUnit · Money · disbursed display
[Body] pattern_inline_grid payments · SearchInput payStatus · add/remove dòng
[Body View] <dl> display — không Input xám
[Footer] [Hủy] [Lưu] — ẩn khi view
```

- Copy → POST new · IdCode mới
- Dirty leave-confirm khi Hủy / Quay lại
- **Cấm** parent JSON string trên field/DTO
- Excel / quyết toán full / dedicated sign+kpi APIs: **out of pack**

## Prototype (REQUIRED)

| | |
|--|--|
| Artifact | `ui/prototype/contract-list-prototype.html` |
| Zones | **A–D** content-only + KPI `beforeToolbar` + Zone F schema mock — skip note/sidebar/menu/chrome |
| Form | **Full-page** (không Slideout) · View = `<dl>` · footer-only Lưu/Hủy |
| Lookups | SearchInput combo mock type/status/contractor/orgUnit/payStatus |
| SSOT | `list-shell-prototype.md` · `erp-control-icon-map` · VatTu pager |
| **reviewUrl** | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/contract/ui/prototype/contract-list-prototype.html` |
| Live review | `http://localhost:9312/contract` |

### List wire

```
[A] fa-file-contract + «Hợp đồng và ngân sách»
[KPI] Tổng giá trị · NS còn · KPI TB · sắp hết hạn
[B] SearchTextInput · type · status · contractor SearchInput · Làm mới · Lịch sử · fa-cog · Xóa | [+ Tạo hợp đồng]
[C] «Danh sách hợp đồng» · LinCatalogDataGrid mock · ⋯ menu
[D] Tổng · Hiển thị [50|100|200|500] · pager FA
[F] modal «Cấu hình hiển thị danh mục»
```

## 5. Map / AI / report (out of pack)

- Excel export runtime: **P2**
- Quyết toán UI full: **P3**
- Dedicated kpi / sign / budgets APIs: **DEFER** (fields on Contract)
- Inventory sub-route CRUD: slug `inventory`
- Partner-unit / org-unit CUC2 / road-route master SearchInput: **P2 UNCLEAR**
- Events `contract.signed` / `payment.posted`: **out of pack**
- CommonLib `[RequirePermission]` live NuGet: **BE TODO**

## 6. Open questions (PO closed — Design không re-open)

GAP-DA-CTR-SLIDEOUT / VIEW-RO / SELECT / FILTER-NT / DESIGN-STALE giữ CLOSED. SA verify `GET …/contracts?search=&type=&status=&contractor=&page=&pageSize=` + nested payments + CatalogUiSchemaRegistry seed `contracts`. **Cấm ERP.*** · **cấm** `api/v1/rmms/*` · **cấm** parent JSON.

## Confirm

`design_confirm` = **approve** — autoApprove **ON** · agent tự confirm. Chain **SA** enqueue (roles sau = pending đến lượt).

## Handoff → SA

| Field | Value |
|-------|-------|
| Kind / pattern | B · catalog A–D + **full-page** form |
| Field inventory | §3 · SearchInput type/contractor/status/orgUnit/payments.status · Money amount/budgetAllocated/payments.amount · disbursed computed display |
| Filters | search · type · status · **contractor** → page=1 |
| Prototype · reviewUrl | § Prototype |
| API prefer | `GET/POST/PUT/DELETE api/v1/contract/contracts` + nested payments · BFF `web-bff/api/v1/contract/contracts` |
| Lookups (SA chốt) | P1 in-memory enum SearchInput · partner/org/road **UNCLEAR P2** |
| Entity | `ContractEntity` · `rmms_contracts` · payments `rmms_contract_payments` · SHARE=tenant_keep · **cấm** parent JSON |
| Seed | CatalogUiSchemaRegistry kind `contracts` · IdCode `CTR-yyyyMMdd-nnnn` |
| TZ | date fields form (signed/effective/paid) · list filter không date P1 → `tz_na` list |
| XCO | GetById only |
| Next | SA **pending** đến lượt · chain ON |

## DES-GRID map → Lin\*

| Zone | DES-GRID | Component |
|------|----------|-----------|
| A | DES-GRID-A | `LinPageLayout` header |
| KPI | beforeToolbar | 4 metric cards |
| B | DES-GRID-B | `catalogToolbar` |
| C | DES-GRID-C2 | `LinCatalogDataGrid` + resize ON |
| D | DES-GRID-D | `LinCatalogListPagination` |
| F | schema | `LinCatalogUiSchemaEditorModal` |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-design |
| skillVersion | 2026.08.15.19 |
| schemaVersion | qldb-workflow-skill-v1 |
| workflowVersion | 2026.08.15.19 |
| generatedAt | 2026-08-16T04:30:00.000Z |
| versionGate | rechecked |
| version_mismatch_action | recheck_new (STATUS orchestrator `2026.08.15.19` · data-analy skill `2026.08.08.20` / workflow `2026.08.15.1` → stamp Design 2026.08.15.19) |
| contentHashPriorPo | sha256:0f942023667b8cc7e10d626ce5aa10117700feac901284cecbf6038788284b73 |
| contentHashPriorDataAnaly | sha256:0f942023667b8cc7e10d626ce5aa10117700feac901284cecbf6038788284b73 |
| orchestratorSkillVersion | 2026.08.15.19 |
| orchestratorWorkflowVersion | 2026.08.15.19 |
| orchestratorSchemaVersion | qldb-workflow-skill-v1 |
| dataAnalySkillVersion | 2026.08.08.20 |
| dataAnalyWorkflowVersion | 2026.08.15.1 |
| poSkillVersion | 2026.08.15.19 |

---
<!-- Version meta: skillVersion=2026.08.15.19 · schemaVersion=qldb-workflow-skill-v1 · workflowVersion=2026.08.15.19 · versionGate=rechecked -->
