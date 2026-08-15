# Data-analy — controlHint — inventory (Kind B catalog list + form)

| Field | Value |
|-------|-------|
| feature | `inventory` |
| packKind | `list` |
| mode | `cluster_import` feature-scoped (retry `roleOnly=data_analy` · **no Excel** in ProductRoot · demo + context + CUC2 catalogs) |
| status | `done` |
| skillId | `agent-data-analy` |
| skillVersion | `2026.08.08.20` |
| schemaVersion | `1` |
| workflowVersion | `2026.08.15.1` |
| rulesVersion | `2026.08.15.2` |
| versionGate | `rechecked` |
| contentHash | `sha256:eb4b5dc996f936d3aae146e61eceff7dd5e3d640f6f3ae377cc66402b31dcac8` |
| headerFingerprint | `sha256:a033fc07f6b8fda4927fff699ba571470a39a36cbfe0f1a12d7d4e680f8fefdf` |
| analyzedAt | `2026-08-14T18:25:00.000Z` |
| cluster | — (không Excel header · synthetic P3 + demo HTML) |
| taskId | `task_efd934ec` |
| autoApprove | `OFF` |

> Data-analy **đề xuất** controlHint. Design **chốt** control-map. SA **chốt** lookup API.  
> **Cấm** Dev đoán Text vs SearchInput khi đã có bảng này.  
> **Cấm ERP.*** · domain **Contract** · BE `D:/AI-QLBD/Linm.RMMS.WebService` · prefix `api/v1/contract`.  
> **≠** GIS «Danh sách thiết bị» (`gis-draw-google`) · **≠** Contract HĐ (`contract`).

## Sources

| Source | Path | sha256 |
|--------|------|--------|
| Context | `docs/context/features/inventory.md` | `eb4b5dc996f936d3aae146e61eceff7dd5e3d640f6f3ae377cc66402b31dcac8` |
| Control map | `docs/context/_raw/legacy-govone/demo-maps/inventory-control-map.md` | `8ab8ee7824f8c378fe25060b0ae7fa4384ca835ee71dd83ee864aca135118905` |
| Actions | `docs/context/_raw/legacy-govone/demo-maps/inventory-actions.md` | `6f1d529478bb88ecb4d742ec30fd4b88563f80a539d292dd17ed600e9fc1f4da` |
| Demo entry | `Linm.RMMS.Demo/src/demo/features/inventory-demo.html` | `48425d17642b6ff081853179592f798f77a2d0f0015f636c5417a22dc90f44d3` |
| Demo page | `Linm.RMMS.Demo/src/demo/contract/inventory.html` | `a033fc07f6b8fda4927fff699ba571470a39a36cbfe0f1a12d7d4e680f8fefdf` |
| Demo data | `Linm.RMMS.Demo/src/demo/contract/js/inventory-data.js` | `f23fbea0696e4d2bf66627d982df5b246a24f03f5d6e8fc5fb32d57e15d998cd` |
| Shared catalogs | `specs/_data-analy/shared-catalogs/INVESTIGATE-CUC2.md` · `org-unit-seed.json` | APPROVED A · org-unit |
| MFE live (read) | `Linm.Web.RMMS.Contract` · `/contract/inventory` · `InventoryListPage` + `InventoryFormSlideout` + `InventoryFormPage` (Navigate bridge) | Kind B list + **Slideout** form |
| Prior design.md | `specs/inventory/ui/design.md` | Kind **B+D** Slideout · view=`readOnly` · **Select** filters |

Normalized header (no Excel):

`code|name|category|group|unit|qtyOnHand|minQty|unitPrice|stockValue|warehouse|orgUnit|supplier|serial|model|status|gpsLat|gpsLng|gpsAt|woRef|contractRef|receivedAt|lastMaintAt|nextMaintAt|fuelLiters|note|moves.kind|moves.qty|moves.movedAt|moves.woRef|moves.note|search`

## Kind / zones (handoff Design)

Pack **list** = Kind **B** catalog (MFE Contract). Demo HTML = Kind **B+D** slideout + KPI + Leaflet GPS — **không** clone chrome/topnav/user menu vào MFE.

List-form quality / Dev constitution (SSOT 2026.08.15): **cấm** Resource / **Slideout** / View=`readOnly` Input trên UI list pack. Live MFE **đang** Slideout + View `readOnly` — **GAP**.

| Zone | Pattern | DoD |
|------|---------|-----|
| A | Header | title «Vật tư và thiết bị» — **cấm** Thêm mới trên A |
| B | Toolbar + filter | SearchTextInput (mã/tên/serial/WO) · **đề xuất** SearchInput loại/TT/kho · Tạo mới primary · Refresh · Delete · config · History · **search must work** |
| C | `LinCatalogDataGrid` | kéo cột default ON · STT · □ · Mã · Tên · Loại · Kho · Tồn · Giá trị · TT · GPS · WO · row menu Xem/Sửa/Copy/Xóa/Lịch sử |
| D | Footer | `LinCatalogListPagination` 50/100/200/500 — **cấm** footerPagination / pageSizeBar / raw table |
| Form | Kind B **full-page** (đề xuất) | C/E/V/Copy · View=`<dl>` display (**cấm** Slideout · **cấm** View=`readOnly` Input) · footer-only Lưu/Hủy · leave-confirm dirty · deep-link `/contract/inventory/new` · `/:id` |
| KPI strip | metric cards | Giá trị tồn · Dưới mức min · Đang bảo dưỡng · GPS online — **IN** list (live đã có `beforeToolbar`) |
| Move lines | `pattern_inline_grid` | phiếu nhập/xuất/điều chỉnh trên form — **IN** P1 |
| GPS map / Excel / Timescale / Asset sync | Kind F / export | **P2 / DEFER** (GAP-F-INV-04/05) — không clone demo modal vào P1 list CRUD |

**Skip chrome:** logo · hamburger · user Hồ sơ/Đăng xuất demo · Ban.TK skin · govone/youtube/facebook · đổi mật khẩu · theme/font-size.

## Control hint — list filters (Zone B · list pack)

| Field key | Label | controlHint | catalogKind | Notes |
|-----------|-------|-------------|-------------|-------|
| search | Tìm kiếm | `SearchTextInput` | text | mã · tên · serial · WO (live MFE) |
| category | Loại | `SearchInput` | enum | Vật tư · Máy móc · Xe chuyên dụng · Nhiên liệu · Thiết bị · (trống = tất cả) — live = **Select** — GAP |
| status | Trạng thái | `SearchInput` | enum | Sẵn sàng · Đang dùng · Bảo dưỡng · Hỏng · Hết · (trống = tất cả) — live = **Select** — GAP |
| warehouse | Kho | `SearchInput` | enum / **UNCLEAR** warehouse master | 3 kho seed CUC2-style (Km299 · Km367 · Chi cục II.1) — **không** shared catalog CUC2; live = **Select** — GAP |
| checkAll | Chọn tất cả | `Checkbox` | bool | grid selection SSOT — không persist |

## Control hint — form fields (VT/TB · list pack)

| Field key | Label | controlHint | required | Notes |
|-----------|-------|-------------|----------|-------|
| code | Mã VT/TB | `Text` | auto | IdCode `INV-yyyyMMdd-nnnn` readonly |
| name | Tên | `Text` | * | |
| category | Loại | `SearchInput` | * | enum 5 · **cấm** native Select |
| group | Nhóm | `SearchInput` | | enum 6 (mặt đường · hộ lan · chiếu sáng · cơ giới · GPS/IoT · khác) |
| unit | ĐVT | `SearchInput` | * | enum tấn/kg/lít/cái/bộ/md |
| qtyOnHand | Tồn | `Text` (number) | | ≥0 · LabelMoney/Qty |
| minQty | Tồn min | `Text` (number) | | ≥0 |
| unitPrice | Đơn giá | `Money` | | MoneyInput |
| stockValue | Giá trị tồn | `Money` | | computed qty×price · **readonly display** (View `<dl>` / create-edit computed, không Input khóa) |
| warehouse | Kho | `SearchInput` | * | enum 3 P1 · **UNCLEAR** master warehouse P2 |
| status | Trạng thái | `SearchInput` | * | enum 5 |
| receivedAt | Ngày nhập | `Date` | | `type=date` · UTC store / local display |
| orgUnit | Đơn vị QL | `SearchInput` | | `catalogKind=org-unit` · **cấm** Text; live = **Select** 3 hạt local — GAP |
| supplier | NCC | `Text` | | **UNCLEAR** P2 `partner-unit` SearchInput |
| serial | Serial/biển số | `Text` | | |
| model | Model | `Text` | | |
| gpsLat | GPS lat | `Text` (number) | | nullable |
| gpsLng | GPS lng | `Text` (number) | | nullable |
| gpsAt | GPS lúc | `Date` | | datetime · readonly khi mock |
| woRef | Liên kết WO | `Text` | | P1 free code · **UNCLEAR** P2 SearchInput WO master |
| contractRef | Liên kết HĐ | `Text` | | P1 free code · **UNCLEAR** P2 SearchInput contract |
| lastMaintAt | BD gần nhất | `Date` | | |
| nextMaintAt | BD kế tiếp | `Date` | | |
| fuelLiters | Nhiên liệu (L) | `Text` (number) | | xe/máy · nullable |
| note | Ghi chú | `Text` | | textarea |
| updatedAt | Cập nhật | `Date` | | readonly display View |
| isActive | Hiệu lực | — | | soft-delete · không field form P1 |
| moves[].kind | Loại phiếu | `SearchInput` | * | nhập / xuất / điều chỉnh |
| moves[].qty | SL phiếu | `Text` (number) | * | ≥0 |
| moves[].movedAt | Ngày phiếu | `Date` | | |
| moves[].woRef | WO phiếu | `Text` | | P1 |
| moves[].note | Ghi chú phiếu | `Text` | | |

## Control hint — demo extras (Kind D slideout / F map · **out of list-pack P1** / P2)

| Field key | Label | controlHint | Notes |
|-----------|-------|-------------|-------|
| kpi-* | KPI strip | metric cards | **IN** list P1 (không Kind E report) |
| gps-map | Bản đồ GPS | Leaflet OSM | **P2** · Timescale DEFER |
| export-excel / stock-report | Xuất | stub | **P2** |
| assign-wo dedicated | Gán WO | nav | **DEFER** (field `woRef` P1) |
| user-menu | User | chrome | **SKIP** |

## Lookup APIs (đề xuất SA — **chưa chốt** trừ CRUD đã DONE)

Domain **Contract** · prefix `api/v1/contract` · BFF `web-bff/api/v1/contract` · repo `D:/AI-QLBD/Linm.RMMS.WebService` · **cấm ERP.*** · **cấm** `api/v1/rmms/*` · **cấm** parent JSON.

| Lookup | API | controlHint consumer | BE |
|--------|-----|----------------------|-----|
| list | `GET /api/v1/contract/inventory-items?search=&category=&status=&warehouse=&page=&pageSize=` | Zone B + grid | **DONE** |
| kpi | `GET /api/v1/contract/inventory-items/kpi` | KPI strip | **DONE** |
| by id | `GET /api/v1/contract/inventory-items/{id}` | form View/Edit · XCO | **DONE** |
| create / update | `POST` / `PUT …/inventory-items` | form Create/Edit/Copy | **DONE** |
| soft delete | `DELETE …/inventory-items/{id}` | toolbar/row | **DONE** |
| moves | nested in item DTO | `pattern_inline_grid` | **DONE** |
| org-unit | Master `GET /api/v1/integration/…` org-unit search | SearchInput orgUnit | master pack |
| warehouse master | — | SearchInput warehouse | **MISSING** · P1 enum 3 · **UNCLEAR** dedicated entity |
| partner-unit | Master partner search | supplier P2 | master pack · **UNCLEAR** P1 Text |
| WO / HĐ lookup | dedicated | woRef / contractRef | **DEFER** Text P1 |
| assign-wo / gps dedicated | — | | **DEFER** (GAP-F-INV-03) |

Entity: `InventoryItem` · table `rmms_inventory_items` · TenantEntity · SHARE=tenant_keep.  
`InventoryMove` nested `rmms_inventory_moves`.  
Perms: `contract.inventory.read|create|update|delete` (BE `[RequirePermission]` stub CommonLib).

## Seed / mock

- MFE `inventoryStore`: kho Km299 / Km367 / Chi cục II.1 · hạt Km286–316 · loại `vat-tu`… · IdCode `INV-yyyyMMdd-nnnn`
- Demo HTML: seed QL.1 / Chi cục II.1 · sourceKind=synthetic
- Import Excel **out of scope**

## Actions (list pack P1 vs demo)

| id | label | list pack P1 | Notes |
|----|-------|--------------|-------|
| refresh | Làm mới | **IN** | toolbar |
| filter / search | Lọc / Tìm | **IN** | Zone B |
| create | Thêm vật tư / TB | **IN** | toolbar primary → full-page `/contract/inventory/new` (**không** Slideout) |
| view / edit / copy / delete | row + toolbar | **IN** | live MFE (delete: **cấm** `window.alert` — GAP) |
| history | Lịch sử | **IN** | `LinCatalogHistoryModal` live |
| config | Cấu hình lưới | hint P1 | schema editor stub |
| kpi-refresh | Làm mới KPI | **IN** | refresh list/kpi |
| add-move / remove-move | Dòng phiếu | **IN** | form grid |
| save / cancel | Lưu / Hủy | **IN** | form footer-only |
| save-draft / approve-move | Lưu nháp / Duyệt phiếu | **P2** | demo footer |
| quick-issue / schedule-maint / gps-track | Xuất kho nhanh / BD / GPS | **P2** | demo row |
| export-excel / stock-report | Xuất | **P2** | |
| gps-map / assign-wo / inbound / outbound | Bản đồ / Gán WO / Nhập / Xuất | **P2** | demo toolbar |
| user-profile / logout | User | **SKIP** chrome | |

## GAP (data-analy → PO/Design/SA/TL)

| ID | Gap | Severity | Hướng |
|----|-----|----------|-------|
| GAP-DA-INV-SLIDEOUT | Live form = `InventoryFormSlideout` + `InventoryFormPage` Navigate-bridge; SSOT list pack = full-page · **cấm** Slideout | P0 list | Design re-chốt Kind B form · T-UI-FORM · T-UI-UX |
| GAP-DA-INV-VIEW-RO | View mode = Input/`readOnly` (hint «không disabled xám»); SSOT View=`<dl>` | P0 list | T-UI-FORM · T-UI-FIELD |
| GAP-DA-INV-SELECT | Filter+form `Select` (category/status/warehouse/group/unit/org/moves.kind); SSOT = `SearchInput` | P0 list | T-UI-LKP · T-UI-FIELD |
| GAP-DA-INV-ORG | `orgUnit` Select 3 hạt local; SSOT SearchInput `org-unit` CUC2 | P1 | T-UI-LKP · SA master |
| GAP-DA-INV-WH | warehouse 3 mã local · **không** shared catalog | P2 | P1 enum SearchInput · UNCLEAR master |
| GAP-DA-INV-ALERT | `window.confirm` / `window.alert` trên xóa | P1 | constitution 2026.08.15.1 · T-UI-UX |
| GAP-DA-INV-DESIGN-STALE | `ui/design.md` B+D Slideout + view=RO + Select | P0 docs | Design re-chốt |
| GAP-F-INV-01 | OUT P1 · phase P3 | Closed context | badge P3 |
| GAP-F-INV-03 | dedicated assign-wo/gps | DEFER | field P1 |
| GAP-F-INV-04 | GPS Timescale | DEFER | Leaflet P2 |
| GAP-F-INV-05 | Sync Asset | DEFER | |

## Handoff

→ **PO:** Kind B list+form · inventory bảng trên · Q UNCLEAR warehouse master / partner-unit / WO·HĐ lookup · **không** mở Excel · **không** Kind F map trong P1  
→ **Design:** A–D + controlHint · **không** Select cho enum lookup · **không** Slideout / View=`readOnly` · prototype content-only + reviewUrl · `autoApprove=OFF` → **await_confirm** khi tới lượt  
→ **SA:** Contract `inventory-items` (đã có) · Master org-unit lookup · giữ query `?category=&status=&warehouse=` · **cấm** `api/v1/rmms/*` ERP-style · **cấm parent JSON**  
→ **TL:** T-CTX · T-PERM · T-UI-LIST (A–D) · T-UI-FORM · T-UI-ACT · **T-UI-LKP · T-UI-FIELD · T-UI-PROD · T-UI-UX** · T-BE/BFF (delta org-unit nếu cần) · T-UI-HIST  
→ **Dev:** sau `confirms.beRepo && uiRepo` · MFE `Linm.Web.RMMS.Contract` · `/contract/inventory`

Chain: role này **done**. Roles sau = **pending**. `autoApprove=OFF` → Design/SA/Review dừng `await_confirm` khi tới lượt. PO **không** gate confirm → enqueue PO.

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-data-analy |
| skillVersion | 2026.08.08.20 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.15.1 |
| rulesVersion | 2026.08.15.2 |
| generatedAt | 2026-08-14T18:25:00.000Z |
| versionGate | rechecked |
| orchestratorSkillVersion | 2026.08.15.1 |
| orchestratorWorkflowVersion | 2026.08.15.1 |
| orchestratorRulesVersion | 2026.08.15.2 |

---
<!-- Version meta: skillVersion=2026.08.08.20 · schemaVersion=1 · workflowVersion=2026.08.15.1 · rulesVersion=2026.08.15.2 · versionGate=rechecked -->
