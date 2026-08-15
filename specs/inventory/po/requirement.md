# PO — inventory (Vật tư và thiết bị)

| Field | Value |
|-------|-------|
| feature | `inventory` |
| changeScope | `edit_page` |
| packKind | `list` |
| Feature Kind | **B** — Catalog list A–D + **full-page** form (`InventoryFormPage`) · **cấm** Slideout |
| status | `done` |
| requestSource | run packet `task_ca2e6bf3` · `/agent-qldb-workflow` · roleOnly=`po` · `/agent-po` |
| autoApprove | **OFF** (Design gate → `await_confirm` khi tới lượt) |
| prior | data-analy `done` (`confirmed`) · controlHint `specs/_data-analy/features/inventory-control-hint.md` · hash `eb4b5dc996…` · cluster path `specs/inventory/specs/_data-analy/clusters/inventory.md` **không tồn tại** — SSOT = feature controlHint · **no Excel** |
| updatedAt | `2026-08-14T18:40:00.000Z` |
| taskId | `task_ca2e6bf3` |

## 1. Goal

Chỉnh trang **Vật tư và thiết bị** Kind B catalog list + form **full-page**: shell A–D · toolbar · **search must work** · row menu · View = display (`<dl>`) · Create/Edit/Copy · phiếu xuất/nhập `pattern_inline_grid`. Align demo → MFE `Linm.Web.RMMS.Contract` `/contract/inventory` · BE `Linm.RMMS.WebService` domain **Contract** · `api/v1/contract/inventory-items`. **Cấm ERP.*** · **cấm** `api/v1/rmms/*` · **cấm** parent JSON.

Persona: Kho · Hạt trưởng · Ban QLDA · Đội thi công.

**≠** Contract HĐ (`contract`) — inventory là sub-route cùng MFE.  
**≠** GIS «Danh sách thiết bị» (`gis-draw-google`).

Pack P1 **không** clone Kind F Leaflet GPS / Excel / chrome demo. List CRUD + KPI + nested moves **đã live** — PO chốt **controlHint + GAP** sau data-analy (Slideout · View=`readOnly` · Select · org-unit · confirm xóa).

## 2. Current → New (edit_page)

| Layer | Current | New (delta) |
|-------|---------|-------------|
| Demo | Kind B+D slideout + KPI + Leaflet · localStorage | Giữ visual SSOT demo; pack **không** clone chrome / Kind F map / Excel |
| MFE list | Kind B `/contract/inventory` · KPI `beforeToolbar` · filter **Select** | 1× `LinPageLayout` · Zone A–D · `LinCatalogDataGrid` kéo cột default ON · footer `LinCatalogListPagination` — **cấm** nested CatalogListShell · footerPagination · pageSizeBar · raw table · filter **SearchInput** |
| MFE form | `InventoryFormSlideout` + `InventoryFormPage` Navigate-bridge · View=`readOnly` Input · **Select** enum | **Chỉ full-page** `/contract/inventory/new` · `/:id` · View = **`<dl>`** (**cấm** Slideout · **cấm** Resource · **cấm** View=`readOnly` Input) · footer-only Lưu/Hủy · leave-confirm dirty |
| Filter | SearchText + Select loại/TT/kho | SearchTextInput + SearchInput category/status/warehouse · **cấm** native Select |
| orgUnit | Select 3 hạt local | SearchInput `catalogKind=org-unit` (CUC2) |
| Delete | `window.confirm` / `window.alert` | Lin confirm modal / toast — **cấm** native alert |
| API | `api/v1/contract/inventory-items` CRUD + kpi + nested moves **DONE** | Giữ CRUD/KPI/moves · query `?search=&category=&status=&warehouse=` · lookup Master org-unit · **không** parent JSON |
| BE | `Linm.RMMS.WebService` · Contract · `InventoryItem` / `InventoryMove` | `rmms_inventory_items` · `rmms_inventory_moves` · SHARE=`tenant_keep` · **cấm ERP.*** |

## 3. DoD (đo được)

1. List load + **search work** (mã · tên · serial · WO) — page=1 khi filter đổi.
2. Zone A: title «Vật tư và thiết bị» — **cấm** Thêm mới trên A.
3. Zone B: SearchTextInput · SearchInput loại / TT / kho · Tạo mới **primary trên B** · Làm mới · Delete · config `fa-cog` · History · KPI strip 4 ô **IN** list (`beforeToolbar`).
4. Zone C: grid STT · □ · Mã · Tên · Loại · Kho · Tồn · Giá trị · TT · GPS · WO · actions; row menu **Xem · Sửa · Sao chép · Xóa · Lịch sử**.
5. Zone D: `LinCatalogListPagination` pageSize **50 / 100 / 200 / 500**.
6. Form full-page: validate + save · leave-confirm dirty · Copy → POST new · IdCode `INV-yyyyMMdd-nnnn` readonly · footer-only Lưu/Hủy · moves `pattern_inline_grid`.
7. View = **display `<dl>`** (không Input `readOnly` xám).
8. Lookup: category / group / unit / warehouse / status / moves.kind / orgUnit = **SearchInput** — **cấm** native Select. `stockValue` = computed display (không Input khóa).
9. FE `yarn build` (+ typecheck nếu có) PASS · BE `dotnet build` PASS khi đụng API — Dev ghi implement § Build.
10. Live shell: title + toolbar + grid/empty **không** blank/title-clip.

## 4. CTX / DEM / DI inventory

| ID | Path | Loại |
|----|------|------|
| CTX-01 | `docs/context/features/inventory.md` | feature |
| CTX-02 | `docs/context/_raw/legacy-govone/demo-maps/inventory-control-map.md` | control-map |
| CTX-03 | `docs/context/_raw/legacy-govone/demo-maps/inventory-actions.md` | actions |
| DEM-01 | `Linm.RMMS.Demo/src/demo/features/inventory-demo.html` | demo entry |
| DEM-02 | `Linm.RMMS.Demo/src/demo/contract/inventory.html` | page |
| DEM-03 | `Linm.RMMS.Demo/src/demo/contract/js/inventory-data.js` | seed |
| DI-01 | — | **no Excel cluster** (synthetic + demo + CUC2) |
| DI-02 | `specs/_data-analy/features/inventory-control-hint.md` | controlHint |
| DI-03 | `specs/_data-analy/shared-catalogs/INVESTIGATE-CUC2.md` · `org-unit-seed.json` | org-unit |
| MFE | `Linm.Web.RMMS.Contract` `/contract/inventory` · `/new` · `/:id` | UI |
| BE | `D:/AI-QLBD/Linm.RMMS.WebService` · DOMAIN-MAP Contract | API |

## 5. controlHint (PO chốt từ data-analy — Design map UI · SA map API)

### List filters (Zone B)

| Field key | Label | controlHint | catalogKind |
|-----------|-------|-------------|-------------|
| search | Tìm kiếm | `SearchTextInput` | text (mã · tên · serial · WO) |
| category | Loại | `SearchInput` | enum: Vật tư · Máy móc · Xe chuyên dụng · Nhiên liệu · Thiết bị · (trống = tất cả) |
| status | Trạng thái | `SearchInput` | enum: Sẵn sàng · Đang dùng · Bảo dưỡng · Hỏng · Hết · (trống = tất cả) |
| warehouse | Kho | `SearchInput` | enum P1: Km299 · Km367 · Chi cục II.1 · (trống = tất cả) |
| checkAll | Chọn tất cả | `Checkbox` | grid selection — không persist |

### Form fields

| Field key | Label | controlHint | required |
|-----------|-------|-------------|----------|
| code | Mã VT/TB | `Text` readonly IdCode `INV-yyyyMMdd-nnnn` | auto |
| name | Tên | `Text` | * |
| category | Loại | `SearchInput` enum 5 | * |
| group | Nhóm | `SearchInput` enum 6 | |
| unit | ĐVT | `SearchInput` enum tấn/kg/lít/cái/bộ/md | * |
| qtyOnHand | Tồn | `Text` (number ≥0) | |
| minQty | Tồn min | `Text` (number ≥0) | |
| unitPrice | Đơn giá | `Money` | |
| stockValue | Giá trị tồn | `Money` computed display | readonly display |
| warehouse | Kho | `SearchInput` enum 3 P1 | * |
| status | Trạng thái | `SearchInput` enum 5 | * |
| receivedAt | Ngày nhập | `Date` (`type=date`) | |
| orgUnit | Đơn vị QL | `SearchInput` `org-unit` | |
| supplier | NCC | `Text` | P1 · partner-unit P2 |
| serial | Serial/biển số | `Text` | |
| model | Model | `Text` | |
| gpsLat / gpsLng | GPS | `Text` (number) | nullable |
| gpsAt | GPS lúc | `Date` datetime | display |
| woRef | Liên kết WO | `Text` | P1 free code |
| contractRef | Liên kết HĐ | `Text` | P1 free code |
| lastMaintAt / nextMaintAt | BD | `Date` | |
| fuelLiters | Nhiên liệu (L) | `Text` (number) | nullable |
| note | Ghi chú | `Text` textarea | |
| updatedAt | Cập nhật | `Date` | View display |
| moves[].kind | Loại phiếu | `SearchInput` nhập/xuất/điều chỉnh | * |
| moves[].qty | SL phiếu | `Text` (number ≥0) | * |
| moves[].movedAt | Ngày phiếu | `Date` | |
| moves[].woRef | WO phiếu | `Text` | P1 |
| moves[].note | Ghi chú phiếu | `Text` | |

### Enum values (P1)

- category: `vat-tu` · `may-moc` · `xe` · `nhien-lieu` · `thiet-bi`
- status: `san-sang` · `dang-dung` · `bao-duong` · `hong` · `het`
- warehouse: `kho-km299` / `kho-km367` / `kho-cc-ii-1` (khớp seed MFE; Design map label)
- group: mặt đường · hộ lan · chiếu sáng · cơ giới · GPS/IoT · khác
- moves.kind: `nhap` · `xuat` · `dieu-chinh`

## 6. Open questions — PO chốt (UNCLEAR / GAP data-analy)

| ID | Question | Decision (PO) |
|----|----------|----------------|
| GAP-PO-INV-01 · GAP-DA-INV-SLIDEOUT | Slideout vs full-page | **Full-page** `InventoryFormPage`. **Cấm** Slideout · **cấm** Resource. Deep-link `/contract/inventory/new` · `/:id`. |
| GAP-PO-INV-02 · GAP-DA-INV-VIEW-RO | View Input `readOnly` | View = **`<dl>` display**. **Cấm** View=`readOnly` Input. |
| GAP-PO-INV-03 · GAP-DA-INV-SELECT | Select vs SearchInput | **SearchInput** cho category/status/warehouse/group/unit/orgUnit/moves.kind. **Cấm** native Select. |
| GAP-PO-INV-04 · GAP-DA-INV-ORG | orgUnit 3 hạt local | **IN P1:** SearchInput `catalogKind=org-unit` CUC2. SA bind Master lookup. |
| GAP-PO-INV-05 · GAP-DA-INV-WH | warehouse master | **P1 enum 3** SearchInput. Dedicated Warehouse entity = **P2 / UNCLEAR** — không block CRUD. |
| GAP-PO-INV-06 · GAP-DA-INV-ALERT | `window.alert` / `confirm` xóa | **Cấm** native alert. Lin confirm + toast (constitution 2026.08.15.1). |
| GAP-PO-INV-07 · GAP-DA-INV-DESIGN-STALE | design.md B+D Slideout + RO + Select | Design **regen** prototype A–D + form full-page + reviewUrl. |
| GAP-PO-INV-08 | supplier / WO / HĐ lookup | **Text P1.** partner-unit / WO master / contract SearchInput = **P2**. |
| GAP-PO-INV-09 | KPI / moves | **IN P1.** KPI 4 ô list · moves nested DTO. |
| GAP-PO-INV-10 | GPS map / Excel / Timescale / Asset sync | **P2 / DEFER** (GAP-F-INV-04/05). Không clone demo modal vào P1. |
| GAP-PO-INV-11 | save-draft / approve-move / quick-issue / inbound-outbound toolbar | **P2** — demo only. |
| GAP-PO-INV-12 | parent JSON / ERP path | **Cấm** parent JSON. **Cấm** `ERP.*` · `api/v1/rmms/*`. BE = `D:/AI-QLBD/Linm.RMMS.WebService`. |

## 7. Grid AC (REQUIRED · list)

| ID | AC |
|----|-----|
| AC-G-01 | Zones **A Header · B Toolbar · C Grid · D Pagination** |
| AC-G-02 | Search + category/status/warehouse apply → page=1 |
| AC-G-03 | Row menu Xem / Sửa / Copy / Xóa / Lịch sử |
| AC-G-04 | `LinCatalogDataGrid` + kéo cột default ON |
| AC-G-05 | Footer `LinCatalogListPagination` 50/100/200/500 |
| AC-G-06 | 1× `LinPageLayout` — **cấm** nested CatalogListShell |
| AC-G-07 | Flex + skeleton load — **cấm** blank body |
| AC-G-08 | KPI strip IN list (Giá trị tồn · Dưới min · Đang BD · GPS online) |

## 8. Out of scope (this pack)

- Leaflet Kind F GPS map / Timescale realtime (GAP-F-INV-04)
- Sync Asset registry (GAP-F-INV-05)
- Dedicated assign-wo / gps / stock-moves endpoints (field `woRef` + nested moves P1)
- Excel import/export · báo cáo tồn
- Warehouse master entity · partner-unit SearchInput
- save-draft / duyệt phiếu / xuất kho nhanh / lên lịch BD toolbar demo
- Clone demo chrome (logo · hamburger · user menu · Ban.TK skin)
- Events `inventory.*` platform bus
- Invent warehouse/org codes ngoài seed P1 / CUC2

## 9. Handoff → Design

| Field | Value |
|-------|-------|
| Kind | B catalog list A–D + **full-page** form |
| Prototype | content-only zones A–D · `list-shell-prototype.md` · **skip** note/sidebar/menu/chrome demo |
| reviewUrl | bắt buộc · `autoApprove=OFF` → **await_confirm** (user Approve board) |
| controlHint | bảng §5 — **không** Select · **không** Slideout / View=`readOnly` Input |
| Demo visual | `inventory-demo.html` → `contract/inventory.html` |
| BE | `api/v1/contract/inventory-items` · lookup master org-unit · query `?category=&status=&warehouse=` |
| Next roles | design → sa → team-lead → dev → qa → review = **pending** đến lượt |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-po |
| skillVersion | 2026.08.15.1 |
| schemaVersion | 2 |
| workflowVersion | 2026.08.15.1 |
| rulesVersion | 2026.08.15.2 |
| generatedAt | 2026-08-14T18:40:00.000Z |
| versionGate | rechecked |
| version_mismatch_action | recheck_new (STATUS orchestrator `2026.08.15.1`) |
| contentHashPriorDataAnaly | sha256:eb4b5dc996f936d3aae146e61eceff7dd5e3d640f6f3ae377cc66402b31dcac8 |
| orchestratorSkillVersion | 2026.08.15.1 |
| orchestratorWorkflowVersion | 2026.08.15.1 |
| orchestratorRulesVersion | 2026.08.15.2 |

---
<!-- Version meta: skillVersion=2026.08.15.1 · schemaVersion=2 · workflowVersion=2026.08.15.1 · rulesVersion=2026.08.15.2 · versionGate=rechecked -->
