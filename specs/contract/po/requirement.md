# PO — contract (Hợp đồng và ngân sách)

| Field | Value |
|-------|-------|
| feature | `contract` |
| changeScope | `edit_page` |
| packKind | `list` |
| Feature Kind | **B+D** — Catalog list + Slideout form (+ payment lines) |
| status | `confirmed` (autopilot · task_7e4ef9d4) |
| updatedAt | 2026-08-09T14:50:00.000Z |

## 1. Goal

Align demo Signed UX → MFE `Linm.Web.RMMS.Contract`: Kind B catalog list + Kind D slideout form (header + ngân sách/KPI meta + payment lines). BE greenfield trên `Linm.RMMS.WebService` domain Contract (**cấm ERP.***).

## 2. Current → New (edit_page)

| Layer | Current | New (delta) |
|-------|---------|-------------|
| Demo | Kind B+D mock/localStorage (Signed SSOT) | Giữ UX; pack ưu tiên list + form |
| MFE list | Scaffold plain table | `LinPageLayout` · `LinCatalogDataGrid` · `LinCatalogListPagination` · LAYOUT-06 |
| MFE form | Stub card | Slideout Z1–Z3 · Create/Edit/View/Copy · payment lines |
| API client | `/contract` scaffold | BFF → `api/v1/contract/contracts` |
| BE | Health-only | CRUD + entity + migration + BFF proxy |

## 3. Personas / DoD

- Persona: Ban QLDA · Finance · Hạt trưởng
- DoD:
  1. List load + **search work** (mã/số/tên/nhà thầu)
  2. Toolbar: Tạo mới · Làm mới · history · config `fa-cog` · KPI strip (4 ô)
  3. Filter: search + loại + trạng thái — **không** nút Tìm
  4. Row menu: Xem · Sửa · Sao chép · Ký · Ghi nhận TT · KPI · Xóa · Lịch sử
  5. View = `readOnly` (không disabled xám)
  6. Form validate + save · payment lines pattern_inline_grid
  7. Live shell: title + toolbar + grid/empty **không** blank/title-clip (GAP-P2-LAYOUT-06)
  8. FE `yarn typecheck` + `yarn build` PASS
  9. BE `dotnet build` API + BFF PASS · route DOMAIN-MAP only

## 4. CTX / DEM inventory

| Source | Path | Notes |
|--------|------|-------|
| Context | `docs/context/features/contract.md` | API · entities · Kind B+D |
| Demo | `Demo/.../contract-demo.html` + `contract/` | Columns · 26 fields · 24 actions |
| Control-map | `docs/context/_raw/.../contract-control-map.md` | |
| MFE | `Linm.Web.RMMS.Contract` | Ownership `/contract` |

### List columns (required)

STT · Mã HĐ · Số HĐ · Tên HĐ · Loại · Nhà thầu · Giá trị · KPI · Trạng thái · Hết hạn · actions

### Form fields (required *)

code (RO IdCode) · contractNo* · name* · type* · contractor* · amount* · status* · signedAt · effectiveFrom · effectiveTo · budgetAllocated · disbursed (RO) · budgetYear · kpiScore · slaPct · warrantyMonths · warrantyExpires · orgUnit · routeSegment · workOrderLink · note · payment lines (period* · amount* · paidAt · lineStatus · lineNote)

### Types / status

- Loại: Bảo trì · Xây dựng · Tư vấn · Khác
- TT: Nháp · Chờ duyệt · Đã ký · Đang thực hiện · Thanh lý · Hủy

## 5. Out of scope (this pack)

- Quyết toán UI full (P3 stub/toast)
- Inventory sub-route full CRUD
- Excel export runtime (toolbar stub OK)
- Platform events `contract.signed` / `payment.posted` (DEFER)
- CommonLib `[RequirePermission]` live NuGet (stub codes OK)

## 6. Handoff → Design

- Kind B catalog list + Slideout form (+ lines)
- Zones A–D · prototype + reviewUrl bắt buộc
- controlHint: SearchTextInput · Select (type/status/contractor) · Money · Date · inline grid lines

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-po |
| skillVersion | 2026.08.08.30 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.09.02 |
| rulesVersion | 2026.08.09.3 |
| generatedAt | 2026-08-09T14:50:00.000Z |
| versionGate | rechecked |
