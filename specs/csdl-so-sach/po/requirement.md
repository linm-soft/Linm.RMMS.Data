# PO — csdl-so-sach (CSDL 12 biểu + 8 sổ BDTX)

| Field | Value |
|-------|-------|
| feature | `csdl-so-sach` |
| changeScope | `edit_page` |
| packKind | `list` |
| Feature Kind | **G** hub + **B** catalog list + **D** Slideout form |
| status | `confirmed` (autopilot · task_de8226e1) |
| updatedAt | 2026-08-09T15:20:00.000Z |

## 1. Goal

Hub số hóa **12 biểu CSDL kết cấu** + **8 sổ vận hành BDTX**: chọn resource → list catalog parity (Linm erp-form-context Kind B) · search work · row menu · Create/Edit/View/Copy form · align demo Signed → MFE `Linm.Web.RMMS.Asset` · BE `Linm.RMMS.WebService` domain Asset.

## 2. Current → New (edit_page)

| Layer | Current | New (delta) |
|-------|---------|-------------|
| Demo | Hub+list+slideout localStorage (Signed) | Giữ SSOT UX; pack ưu tiên hub + list + form |
| MFE | Chưa route `/asset/csdl-so-sach` | `LinPageLayout` · hub cards · `LinCatalogDataGrid` · pager · Slideout |
| API client | — | BFF → `api/v1/asset/csdl-records` |
| BE | GAP-F-CSDL-01 MISSING | Greenfield Asset domain (**cấm** ERP.* · **cấm** `/api/v1/infra` ngoài DOMAIN-MAP) |

## 3. Personas / DoD

- Persona: Khu QLĐB · Văn phòng · Nhà thầu BDTX · Hạt trưởng
- DoD:
  1. Hub tab **CSDL (12)** · **Sổ BDTX (8)** + KPI + cards đếm bản ghi
  2. List theo resource: load + **search work** (mã/đường/tỉnh) + filter tỉnh/trạng thái
  3. Toolbar: Tạo mới · Làm mới · history · config `fa-cog`
  4. Row menu: Xem · Sửa · Sao chép · Lịch sử · Xóa (soft)
  5. View = `readOnly` (không disabled xám)
  6. Create/Edit/Copy validate + save · IdCode prefix theo resource
  7. Sổ: header + entry lines `pattern_inline_grid` (child rows, không parent JSON)
  8. Live shell LAYOUT-06 · FE `yarn build` + `typecheck` PASS · BE build PASS

## 4. CTX / DEM inventory

| Source | Path | Notes |
|--------|------|-------|
| Context | `docs/context/features/csdl-so-sach.md` | Hub G+B+D · API skeleton · gaps |
| Demo | `Demo/.../asset/csdl-so-sach.html` + data/app JS | 12+8 resources · columns · form · entries |
| SSOT API/DB | `docs/context/11-CSDL-SO-SACH-DATABASE-API.md` | Entity/field chi tiết |
| MFE | `Linm.Web.RMMS.Asset` | Ownership `/asset/csdl-so-sach` |

### List columns (required)

STT · Mã · Đường · Tỉnh · Lý trình · TT · ĐV QL · Chi tiết chính · actions

### Form fields (required *)

code (readonly IdCode) · roadName* · province* · kmFrom* · kmTo · side · status* · manageUnit · ownerUnit · detailPrimary* · detailSpec · detailExtra · notes · (sổ) bookNo · contractor · entry lines

### Resources (catalog)

12 CSDL: `pavement-sections`…`green-assets` · 8 sổ: `patrol-logs`…`inspection-logs` (demo keys).

## 5. Out of scope (this pack)

- Import Excel full 12 sheet wizard (toolbar toast/stub OK)
- Deep Biểu 1 form = giữ `pavement-section` route riêng
- GIS map shell / PostGIS geometry
- AI auto-fill 12 biểu
- Multi-entity Biểu 7 facade (1 row facade P1)

## 6. Handoff → Design

- Kind G hub + Kind B list + Kind D Slideout
- Zones A–D · prototype + reviewUrl bắt buộc
- controlHint: SearchTextInput · Select (province/status) · inline entry grid
- Demo SSOT: `csdl-so-sach-demo.html` → `asset/csdl-so-sach.html`

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-po |
| skillVersion | 2026.08.08.30 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.09.02 |
| rulesVersion | 2026.08.09.3 |
| generatedAt | 2026-08-09T15:20:00.000Z |
| versionGate | rechecked |
