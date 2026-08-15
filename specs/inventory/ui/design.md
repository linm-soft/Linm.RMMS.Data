# Design — inventory (Vật tư và thiết bị)

| Field | Value |
|-------|-------|
| feature | `inventory` |
| Feature Kind | **B** — Catalog list A–D + **full-page** form (`InventoryFormPage`) · **cấm** Slideout |
| status | `await_confirm` |
| design_confirm | `pending` (`autoApprove=OFF` · user Approve board) |
| changeScope | `edit_page` |
| packKind | `list` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Contract` (`/contract/inventory`) |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · `api/v1/contract/inventory-items` |
| prior | PO `done` · `po/requirement.md` · GAP-PO-INV-01..12 · data-analy hash `eb4b5dc996…` |
| autoApprove | **OFF** (`task_9a6113cf`) → **await_confirm** |
| updatedAt | `2026-08-14T18:50:00.000Z` |
| taskId | `task_9a6113cf` |

## 0. Context & Demo (from PO)

| ID | Path | Notes |
|----|------|-------|
| CTX-01 | `docs/context/features/inventory.md` | Kind B list + form; **regen** khỏi B+D Slideout |
| DEM-01 | `Linm.RMMS.Demo/.../inventory-demo.html` → `contract/inventory.html` | Visual SSOT — **skip** chrome / Leaflet / Excel |
| DI-02 | `specs/_data-analy/features/inventory-control-hint.md` | controlHint SSOT |
| DI-03 | `org-unit-seed.json` | **org-unit** CUC2 — **cấm** Select 3 hạt local |

Persona: Kho · Hạt trưởng · Ban QLDA · Đội thi công. Pack **không** clone Kind F map / Excel / chrome demo.

## 1. Kind + UI pattern

| | |
|--|--|
| Feature Kind | **B** |
| List pattern | **1×** `LinPageLayout` kind=catalog — **cấm** nested `CatalogListShell` |
| Grid | `LinCatalogDataGrid` · kéo cột **default ON** |
| Footer | `LinCatalogListPagination` — **cấm** footerPagination / pageSizeBar / raw table production |
| Form pattern | **Full-page** `InventoryFormPage` C/E/V/Copy — **cấm** Resource · **cấm** Slideout (GAP-PO-INV-01) |
| Routes | List `/contract/inventory` · Create `/contract/inventory/new` · Edit/View `/contract/inventory/:id` |
| Toolbar SSOT | `catalog-list-toolbar` + `erp-control-icon-map` (`editConfig`=`fa-cog`) |
| View | **`<dl>` / display** — **cấm** Input `readOnly` xám · **cấm** disabled xám toàn form (GAP-PO-INV-02) |
| KPI | 4 ô **IN P1** · slot `beforeToolbar` (giữa A và B) — **không** nút trên A |

## 2. Screens / zones

| Screen | FormMode | Zones | Controls |
|--------|----------|-------|----------|
| Vật tư và thiết bị | list | **A Header · KPI · B Toolbar+filter · C Grid · D Pagination** | SearchTextInput + SearchInput ×3 |
| Form VT/TB | create/edit/view/copy | **Full-page** header + body + footer | fields P1 · moves `pattern_inline_grid` · footer-only Lưu/Hủy |

### Zone A — Header

- Icon `fa-boxes-stacked` + title **Vật tư và thiết bị** (22px)
- **Cấm** nút Thêm mới / Tạo mới trên A

### KPI strip (`beforeToolbar` · IN P1)

| Card | Metric |
|------|--------|
| Giá trị tồn | sum `stockValue` |
| Dưới mức min | count `qtyOnHand < minQty` |
| Đang bảo dưỡng | count status=`bao-duong` |
| GPS online | count có `gpsLat`/`gpsLng` |

### Zone B — Toolbar + filter (PO DoD)

**Trái (filter + icon):**

| key | Label | Control (Design chốt) | catalogKind |
|-----|-------|------------------------|-------------|
| search | Tìm kiếm | `SearchTextInput` | text — mã · tên · serial · WO |
| category | Loại | `SearchInput` | enum 5 + trống=tất cả — **cấm** native `<select>` |
| status | Trạng thái | `SearchInput` | enum 5 + trống=tất cả |
| warehouse | Kho | `SearchInput` | enum 3 P1 + trống=tất cả |
| — | Làm mới | `fa-sync-alt` | reload · page=1 |
| — | Lịch sử | `fa-history` | `LinCatalogHistoryModal` |
| — | Sửa config | `fa-cog` | column config |
| — | Xóa | `fa-trash` | khi có selection · **Lin confirm** — **cấm** `window.alert` / `window.confirm` |

**Phải:** **Tạo mới** primary (`fa-plus`) — **chỉ trên B** → `/contract/inventory/new`.

**Cấm trên B (P1):** Xuất Excel · inbound/outbound toolbar · GPS map · assign-wo dedicated (GAP-PO-INV-10/11).

Filter đổi → **page=1** (search must work).

### Zone C — Grid

- Card title: **Danh sách vật tư và thiết bị**
- Help: nhấn đúp / menu dòng — Xem · Sửa · Sao chép · Xóa · Lịch sử
- Flex + skeleton load — **cấm** blank body
- Columns (kéo cột ON): STT · □ · **Mã** · **Tên** · **Loại** · **Kho** · **Tồn** · **Giá trị** · **TT** · **GPS** · **WO** · ⋯
- Click mã → View **full-page** `<dl>`
- Row menu: **Xem · Sửa · Sao chép · Xóa · Lịch sử**

### Zone D — Pagination

`LinCatalogListPagination`: `Tổng: N · Trang x/y` · Hiển thị **50 / 100 / 200 / 500** · FA pager 32×32.

## 3. Field inventory (form) — Design chốt controlHint

| uiField | Label VN | Control | Required | FormMode lock | Notes |
|---------|----------|---------|----------|---------------|-------|
| code | Mã VT/TB | `Text` readonly IdCode | auto | all readonly | `INV-yyyyMMdd-nnnn` · copy = mã mới |
| name | Tên | `Text` | * | view=`<dl>` | |
| category | Loại | `SearchInput` | * | view=`<dl>` | enum 5 — **cấm** native Select |
| group | Nhóm | `SearchInput` | | view=`<dl>` | enum 6 |
| unit | ĐVT | `SearchInput` | * | view=`<dl>` | tấn/kg/lít/cái/bộ/md |
| qtyOnHand | Tồn | `Text` (number ≥0) | | view=`<dl>` | |
| minQty | Tồn min | `Text` (number ≥0) | | view=`<dl>` | |
| unitPrice | Đơn giá | `Money` | | view=`<dl>` | MoneyInput |
| stockValue | Giá trị tồn | `Money` computed **display** | | all display | qty×price — **không** Input khóa |
| warehouse | Kho | `SearchInput` | * | view=`<dl>` | enum 3 P1 |
| status | Trạng thái | `SearchInput` | * | view=`<dl>` | enum 5 |
| receivedAt | Ngày nhập | `Date` (`type=date`) | | view=`<dl>` | UTC store / local display |
| orgUnit | Đơn vị QL | `SearchInput` | | view=`<dl>` | `catalogKind=org-unit` CUC2 — **cấm** Select 3 hạt local |
| supplier | NCC | `Text` | | view=`<dl>` | P1 · partner-unit P2 |
| serial | Serial/biển số | `Text` | | view=`<dl>` | |
| model | Model | `Text` | | view=`<dl>` | |
| gpsLat / gpsLng | GPS | `Text` (number) | | view=`<dl>` | nullable |
| gpsAt | GPS lúc | `Date` datetime | | view=`<dl>` | display |
| woRef | Liên kết WO | `Text` | | view=`<dl>` | P1 free code |
| contractRef | Liên kết HĐ | `Text` | | view=`<dl>` | P1 free code |
| lastMaintAt / nextMaintAt | BD | `Date` | | view=`<dl>` | |
| fuelLiters | Nhiên liệu (L) | `Text` (number) | | view=`<dl>` | nullable |
| note | Ghi chú | `Text` textarea | | view=`<dl>` | |
| updatedAt | Cập nhật | `Date` | | View display | |
| moves[].kind | Loại phiếu | `SearchInput` | * | view=`<dl>` | nhập/xuất/điều chỉnh |
| moves[].qty | SL phiếu | `Text` (number ≥0) | * | view=`<dl>` | |
| moves[].movedAt | Ngày phiếu | `Date` | | view=`<dl>` | |
| moves[].woRef | WO phiếu | `Text` | | view=`<dl>` | P1 |
| moves[].note | Ghi chú phiếu | `Text` | | view=`<dl>` | |

### Enum values (P1) — Design chốt value + label

**category**

| value | Label |
|-------|--------|
| `vat-tu` | Vật tư |
| `may-moc` | Máy móc |
| `xe` | Xe chuyên dụng |
| `nhien-lieu` | Nhiên liệu |
| `thiet-bi` | Thiết bị |

**status**

| value | Label |
|-------|--------|
| `san-sang` | Sẵn sàng |
| `dang-dung` | Đang dùng |
| `bao-duong` | Bảo dưỡng |
| `hong` | Hỏng |
| `het` | Hết |

**warehouse** — chốt **mã live MFE** (PO alias `kho-km299` / `kho-km367` / `kho-cc-ii-1` **map** sang đây — **cấm** invent mã thứ 4)

| value (canonical P1) | Label |
|----------------------|--------|
| `kho-hat-km299` | Kho Hạt QLĐB QL.1 · Nhà hạt Km299 |
| `kho-hat-km367` | Kho Hạt QLĐB QL.1 · Nhà hạt Km367 |
| `kho-chi-cuc` | Kho Chi cục QLĐB II.1 · Km327 |

**group**

| value | Label |
|-------|--------|
| `mat-duong` | Vật liệu mặt đường |
| `ho-lan` | Hộ lan · an toàn giao thông |
| `chieu-sang` | Chiếu sáng · điện |
| `co-gioi` | Cơ giới |
| `gps` | Thiết bị GPS/IoT |
| `khac` | Khác |

**unit:** `tan` Tấn · `kg` Kg · `lit` Lít · `cai` Cái · `bo` Bộ · `md` Mét dài

**moves.kind:** `nhap` Nhập · `xuat` Xuất · `dieu-chinh` Điều chỉnh

**orgUnit:** SearchInput Master org-unit (CUC2). Prototype mock: `VP-II.1` · `HQ` · `DRVN`. **Cấm** persist `hat-km286-316` local-only nếu Master trả `code` khác.

### CSS / layout gates

| Rule | Gap |
|------|-----|
| Full-page form · **cấm** Slideout / Resource | GAP-PO-INV-01 · GAP-DA-INV-SLIDEOUT |
| View `<dl>` — **cấm** Input `readOnly` xám | GAP-PO-INV-02 · GAP-DA-INV-VIEW-RO |
| SearchInput enum — **cấm** native Select | GAP-PO-INV-03 · GAP-DA-INV-SELECT |
| orgUnit SearchInput org-unit | GAP-PO-INV-04 · GAP-DA-INV-ORG |
| Xóa: Lin confirm + toast — **cấm** native alert | GAP-PO-INV-06 |
| Input pad 6×10 · min-height 32 · focus shadow | GAP-P2-CSS-* |
| Spacing 4/8/16 · **cấm** `filterMaxWidth` | T-UI-UX |
| Checkbox grid 24×24 · cột STT/□ 48px | GAP-P2-GRID-CHECK-01 |

## 4. Form full-page wire

```
[Header] [← Quay lại]  Title «Vật tư / thiết bị» · badge Tạo mới|Sửa|Xem|Sao chép
         [📋 Sao chép] [✏ Sửa] khi view — không Lưu/Hủy trên header (footer-only)
[Hint] leave-confirm dirty
[Body C/E/Copy] 2-col · SearchInput loại/nhóm/ĐVT/kho/TT/orgUnit · Money · computed stockValue display
[Body] pattern_inline_grid phiếu · SearchInput kind
[Body View] <dl> display — không Input xám
[Footer] [Hủy] [Lưu] — ẩn khi view
```

- Copy → POST new · IdCode mới
- Dirty leave-confirm khi Hủy / Quay lại
- **Cấm** parent JSON string trên field/DTO
- Leaflet / Excel / Timescale / Asset sync: **out of pack** (P2)

## Prototype (REQUIRED)

| | |
|--|--|
| Artifact | `ui/prototype/inventory-list-prototype.html` |
| Zones | **A–D** content-only + KPI `beforeToolbar` — skip note/sidebar/menu/chrome |
| Form | **Full-page** (không Slideout) · View = `<dl>` · footer-only Lưu/Hủy |
| Lookups | SearchInput combo mock category/status/warehouse/group/unit/org-unit/moves.kind |
| SSOT | `list-shell-prototype.md` · `erp-control-icon-map` · VatTu pager |
| **reviewUrl** | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/inventory/ui/prototype/inventory-list-prototype.html` |

### List wire

```
[A] fa-boxes-stacked + «Vật tư và thiết bị»
[KPI] Giá trị tồn · Dưới min · Đang BD · GPS online
[B] SearchTextInput · category · status · warehouse SearchInput · Làm mới · Lịch sử · fa-cog · Xóa | [+ Tạo mới]
[C] «Danh sách vật tư và thiết bị» · LinCatalogDataGrid mock · ⋯ menu
[D] Tổng · Hiển thị [50|100|200|500] · pager FA
```

## 5. Map / AI / report (out of pack)

- Leaflet Kind F GPS map + Timescale: **P2** (GAP-PO-INV-10)
- Excel / stock-report: **P2**
- save-draft / approve-move / quick-issue / inbound-outbound toolbar: **P2** (GAP-PO-INV-11)
- Warehouse master entity · partner-unit SearchInput: **P2** (GAP-PO-INV-05/08)
- Events `inventory.*` bus: **out of pack**

## 6. Open questions (PO closed — Design không re-open)

GAP-PO-INV-01..12 giữ nguyên. SA map lookup org-unit Master + giữ `GET …/inventory-items?search=&category=&status=&warehouse=&page=&pageSize=` + kpi + nested moves. **Cấm ERP.*** · **cấm** `api/v1/rmms/*` · **cấm** parent JSON.

## Confirm

`design_confirm` = **pending** — autoApprove **OFF** · user Approve board → chain SA. Agent **không** tự confirm.

## Handoff → SA

| Field | Value |
|-------|-------|
| Kind / pattern | B · catalog A–D + **full-page** form |
| Field inventory | §3 · SearchInput category/group/unit/warehouse/status/orgUnit/moves.kind · Text supplier/woRef/contractRef P1 |
| Filters | search · category · status · warehouse → page=1 |
| Prototype · reviewUrl | § Prototype |
| API prefer | `GET/POST/PUT/DELETE api/v1/contract/inventory-items` + `GET …/kpi` + BFF `web-bff/api/v1/contract/inventory-items` |
| Lookups (SA chốt) | Master org-unit · warehouse **enum 3 P1** (không entity mới) |
| Entity | `InventoryItem` · `rmms_inventory_items` · `InventoryMove` · `rmms_inventory_moves` · SHARE=tenant_keep · **cấm** parent JSON |
| Seed | warehouse 3 mã MFE · IdCode `INV-yyyyMMdd-nnnn` |
| Next | SA **pending** đến khi user Approve Design |

## DES-GRID map → Lin\*

| Zone | DES-GRID | Component |
|------|----------|-----------|
| A | DES-GRID-A | `LinPageLayout` header |
| KPI | beforeToolbar | 4 metric cards |
| B | DES-GRID-B | `catalogToolbar` |
| C | DES-GRID-C2 | `LinCatalogDataGrid` + resize ON |
| D | DES-GRID-D | `LinCatalogListPagination` |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-design |
| skillVersion | 2026.08.15.1 |
| schemaVersion | 2 |
| workflowVersion | 2026.08.15.1 |
| rulesVersion | 2026.08.15.2 |
| generatedAt | 2026-08-14T18:50:00.000Z |
| versionGate | rechecked |
| version_mismatch_action | recheck_new (STATUS orchestrator `2026.08.15.1`) |
| contentHashPriorPo | sha256:task_ca2e6bf3 |
| contentHashPriorDataAnaly | sha256:eb4b5dc996f936d3aae146e61eceff7dd5e3d640f6f3ae377cc66402b31dcac8 |
| orchestratorSkillVersion | 2026.08.15.1 |
| orchestratorWorkflowVersion | 2026.08.15.1 |
| orchestratorRulesVersion | 2026.08.15.2 |

---
<!-- Version meta: skillVersion=2026.08.15.1 · schemaVersion=2 · workflowVersion=2026.08.15.1 · rulesVersion=2026.08.15.2 · versionGate=rechecked -->
