# PO — pavement-section (Phân loại mặt đường · Biểu 1)

| Field | Value |
|-------|-------|
| feature | `pavement-section` |
| changeScope | `edit_page` |
| packKind | `list` |
| Feature Kind | **B** catalog list + **Full page** form (≥10 field) |
| status | `confirmed` (autopilot · task_94b861f5) |
| updatedAt | 2026-08-10T01:10:00.000Z |

## 1. Goal

CRUD đoạn mặt đường theo Biểu mẫu số 1: list catalog parity (Linm erp-form-context Kind B) · search work · row menu · Create/Edit/View/Copy **full page** form · IdCode `MD-YYYYMMDD-NNNN` · align demo → MFE `Linm.Web.RMMS.Asset` · BE `Linm.RMMS.WebService` domain **Asset**.

## 2. Current → New (edit_page)

| Layer | Current | New (delta) |
|-------|---------|-------------|
| Demo | List+form localStorage Signed | Giữ SSOT UX field Biểu 1 |
| MFE | Demo page + custom CSS table | `LinPageLayout` · `LinCatalogDataGrid` · `LinCatalogListPagination` · full page form |
| API client | — / mock infra | BFF → `api/v1/asset/pavement-sections` |
| BE | GAP-F-PVT-01 MISSING | Greenfield Asset domain (**cấm** ERP.* · **cấm** invent `api/v1/infra`) |

## 3. Personas / DoD

- Persona: Khu QLĐB · Văn phòng · Nhà thầu BDTX
- DoD:
  1. List load + search (mã/đường) + filter tỉnh/tình trạng
  2. Toolbar: Thêm mới · Làm mới · Lịch sử · config `fa-cog`
  3. Row menu: Xem · Sửa · Sao chép · Lịch sử · (Xóa trên form edit)
  4. View = `readOnly` (không disabled xám toàn form)
  5. Create/Edit/Copy validate + save · IdCode MD-*
  6. FE `yarn typecheck` + `yarn build` PASS · BE `dotnet build` PASS

## 4. CTX / DEM inventory

| Source | Path |
|--------|------|
| Context | `docs/context/features/pavement-section.md` |
| Control map | `docs/context/features/pavement-section-control-map.md` |
| Demo | `Demo/.../pavement-section-demo.html` |
| MFE | `Linm.Web.RMMS.Asset` `/asset/pavement-section` |

### List columns

STT · Mã · Đường · Tỉnh · KmFrom–To · Kết cấu · Cấp · Tình trạng · ĐV QL · actions

### Form sections

Header · Kết cấu · Khai thác · Đơn vị · Audit

## 5. Out of scope

- Import Excel full wizard (toolbar stub OK)
- PostGIS geometry / GIS draw deep
- Hub CSDL 12 biểu (`csdl-so-sach` riêng)

## 6. Handoff → Design

- Kind B list zones A–D · Full page form Z1–Z3
- prototype + reviewUrl bắt buộc
- controlHint: SearchTextInput · Select (province/status)

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-po |
| skillVersion | 2026.08.08.30 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.09.02 |
| rulesVersion | 2026.08.09.3 |
| generatedAt | 2026-08-10T01:10:00.000Z |
| versionGate | rechecked |
