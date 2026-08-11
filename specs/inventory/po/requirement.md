# PO — inventory (Vật tư và thiết bị)

| Field | Value |
|-------|-------|
| feature | `inventory` |
| changeScope | `edit_page` |
| packKind | `list` |
| Feature Kind | **B** — Catalog list + **Kind D Slideout** form (+ Kind F GPS modal defer map-heavy) |
| status | `confirmed` (autopilot · task_27ba5c23) |
| updatedAt | 2026-08-09T16:50:00.000Z |

## 1. Goal

Chỉnh **Vật tư và thiết bị** từ demo mock (list KPI + slideout phiếu xuất/nhập + GPS Leaflet) → MFE catalog parity (Linm erp-form-context Kind B+D). Align demo → MFE `Linm.Web.RMMS.Contract` · BE `Linm.RMMS.WebService` domain **Contract** (DOMAIN-MAP · **cấm** ERP.*).

**≠** Contract HĐ (`contract`) — inventory là sub-route `/contract/inventory` cùng MFE.

## 2. Current → New (edit_page)

| Layer | Current | New (delta) |
|-------|---------|-------------|
| Demo | Kind B+D+F · localStorage · no BE | Giữ SSOT UX demo; pack ưu tiên **list + form + moves** |
| MFE | Không có route inventory | `LinPageLayout kind=catalog` · `/contract/inventory` · pagination · row menu |
| MFE form | — | Create / Edit / View / Copy — VT/TB + phiếu lines |
| API client | — | `/contract/inventory-items` |
| BE | MISSING | Greenfield `api/v1/contract/inventory-items` + BFF (**cấm** ERP.* · `/rmms/`) |

## 3. Personas / DoD

- Persona: Kho · Hạt trưởng · Ban QLDA · Đội thi công
- DoD:
  1. List load + **search work** (mã/tên/serial/WO) + filter loại/TT/kho
  2. Toolbar: Tạo mới · Làm mới · KPI strip 4 ô
  3. Row menu: Xem · Sửa · Sao chép · Xóa
  4. View = `readOnly` (không disabled xám)
  5. Create/Edit/Copy form validate + save · IdCode `INV-YYYYMMDD-NNNN`
  6. Moves `pattern_inline_grid` · leave-confirm khi dirty
  7. FE `yarn build` + `typecheck` PASS
  8. BE build PASS · domain Contract only

## 4. CTX / DEM inventory

| Source | Path | Notes |
|--------|------|-------|
| CTX-INV | `docs/context/features/inventory.md` | API · entities · Kind B+D |
| DEM-INV | `Demo/.../inventory-demo.html` → `contract/inventory.html` | Fields · actions · **không** clone chrome |
| DI-INV | — | No Excel this pack |

### List columns (required)

STT · Mã · Tên · Loại · Kho · Tồn · Giá trị · TT · GPS · WO · actions

### Form fields (required *)

code (readonly IdCode) · name* · category* · group · unit* · qtyOnHand · minQty · unitPrice · warehouse* · status* · receivedAt · orgUnit · supplier · serial · model · gps* · woRef · contractRef · maint* · fuelLiters · note · moves[]

### Category values

vat-tu · may-moc · xe · nhien-lieu · thiet-bi

### Status values

san-sang · dang-dung · bao-duong · hong · het

### controlHint (synthetic · no Excel cluster)

| Field | controlHint | Notes |
|-------|-------------|-------|
| name | Text | Tên VT/TB |
| category | Dropdown | 5 loại |
| group | Dropdown | nhóm |
| unit | Dropdown | ĐVT |
| qtyOnHand | Number | tồn |
| minQty | Number | tồn min |
| unitPrice | Number | đơn giá |
| warehouse | Dropdown | kho |
| status | Dropdown | 5 TT |
| receivedAt | Date | ngày nhập |
| gpsLat / gpsLng | Number | GPS |
| moves.kind | Dropdown | nhap/xuat/dieu-chinh |
| moves.qty | Number | SL phiếu |

## 5. Grid AC (REQUIRED · list)

| ID | AC |
|----|-----|
| AC-G-01 | Zones **A Header · B Toolbar · C Grid · D Pagination** |
| AC-G-02 | Search + category/status/warehouse → page=1 |
| AC-G-03 | Row menu View/Edit/Copy/Delete |
| AC-G-04 | `LinCatalogDataGrid` + column resize default ON |
| AC-G-05 | Footer `LinCatalogListPagination` pageSize 50/100/200/500 |
| AC-G-06 | 1× `LinPageLayout` — **cấm** nested CatalogListShell |

## 6. Out of scope (this pack)

- GPS realtime TimescaleDB — DEFER (modal stub / toast OK)
- Sync Asset registry — DEFER
- Excel import/export full — DEFER
- Events `inventory.*` platform bus — DEFER
- Dedicated stock-moves / assign-wo endpoints ngoài CRUD item+moves — DEFER (moves nested in item)

## 7. Handoff → Design

- Kind B catalog list + Kind D Slideout form
- Prototype + reviewUrl bắt buộc trước design_confirm
- Demo path visual SSOT: `inventory-demo.html` → `contract/inventory.html`
- BE domain **Contract** · route `api/v1/contract/inventory-items`

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-po |
| skillVersion | 2026.08.08.30 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.09.02 |
| rulesVersion | 2026.08.09.02 |
| generatedAt | 2026-08-09T16:50:00.000Z |
| versionGate | rechecked |
