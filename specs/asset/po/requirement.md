# PO — asset (List danh mục tài sản)

| Field | Value |
|-------|-------|
| feature | `asset` |
| changeScope | `edit_page` |
| packKind | `list` |
| Feature Kind | **B** — Catalog list + form (full page) |
| status | `confirmed` (autopilot) |
| updatedAt | 2026-08-08T08:16:00.000Z |

## 1. Goal

Chỉnh trang **Sổ / danh mục tài sản KCHT** từ mock MFE → list catalog parity (Linm erp-form-context Kind B): shell · toolbar · search work · row menu · View readonly · Create/Edit/Copy form work. Align demo Signed → MFE `Linm.Web.RMMS.Asset`.

## 2. Current → New (edit_page)

| Layer | Current | New (delta) |
|-------|---------|-------------|
| Demo | Kind F map+list full (Signed) | Giữ SSOT UX; pack này ưu tiên **list + form** |
| MFE list | Mock 5 rows, search substring | `LinPageLayout kind=catalog` · filter search/type · pagination · row menu |
| MFE form | Stub | Create / Edit / View / Copy — fields demo |
| API client | `/asset` + DTO `description` | `/rmms/road-assets` + DTO road fields |
| BE | Không có RMMS; ERP `assets` = TSCĐ | Greenfield `api/v1/rmms/road-assets` + BFF |

## 3. Personas / DoD

- Persona: Ban QLDA · Sở GTVT · Tuần đường (web)
- DoD:
  1. List load + **search work** (mã/tên/tuyến/loại)
  2. Toolbar: Tạo mới · Làm mới
  3. Row menu: Xem · Sửa · Sao chép
  4. View = `readOnly` (không disabled xám)
  5. Create/Edit/Copy form validate + save
  6. FE `yarn build` + `typecheck` PASS
  7. BE build PASS · route không đụng Finance FixedAsset

## 4. CTX / DEM inventory

| Source | Path | Notes |
|--------|------|-------|
| Context | `docs/context/features/asset.md` | API table · entities · demo checklist |
| Demo | `Demo/.../asset/asset.html` + `asset-data.js` | Columns · form fields · seed QL.1 |
| Legacy | GOVOne sổ tài sản capture | Toolbar actions reference |
| MFE | `Linm.Web.RMMS.Asset` | Ownership `/asset` |

### List columns (required)

STT · Mã · Tên · Loại · Tuyến · Lý trình từ · Lý trình đến · Trạng thái · GPS · actions

### Form fields (required *)

code (readonly IdCode) · name* · type* · route* · kmFrom* · kmTo · status* · lat · lng · qr · valueVnd · note

### Types

Mặt đường · Cầu · Biển báo · Hộ lan · Cột Km · Cống · Taluy · Đèn

## 5. Out of scope (this pack)

- Full Leaflet map shell (Kind F) — keep demo; MFE map strip optional later
- AI candidate Confirm flow (ai-asset-detect)
- Media upload / QR generate runtime (fields + display only)
- Import Excel wizard

## 6. Handoff → Design

- Kind B catalog list + form full page
- Parity pilot pattern: `TscdListPage` / Master catalog shell (`LinPageLayout`)
- Prototype + reviewUrl bắt buộc trước design_confirm
- Demo path for visual SSOT: `asset-demo.html` → `asset/asset.html`
