# Design — asset (Sổ / danh mục tài sản KCHT)

| Field | Value |
|-------|-------|
| feature | `asset` |
| Feature Kind | **B** — Catalog list A–D + **full-page** form (`AssetFormPage`) |
| status | `confirmed` |
| changeScope | `edit_page` |
| packKind | `list` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` (`/asset`) |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · `api/v1/asset/road-assets` |
| prior | PO `confirmed` · `po/requirement.md` · GAP-PO-ASSET-01..06 · data-analy hash `b21de98e…` |
| autoApprove | **ON** (`task_86f45a3c`) → `design_confirm=approve` |
| updatedAt | `2026-08-14T22:10:00.000Z` |
| taskId | `task_52b245e2` |

## 0. Context & Demo (from PO)

| ID | Path | Notes |
|----|------|-------|
| CTX-01 | `docs/context/features/asset.md` | Kind B list + full-page form |
| DEM-01 | `Linm.RMMS.Demo/.../asset-demo.html` → `asset/asset.html` | Visual SSOT map — **không** clone chrome/map |
| DI-02 | `specs/_data-analy/features/asset-control-hint.md` | controlHint SSOT |
| DI-03 | `asset-type-seed.json` | **23** loại — **cấm** Dropdown 8 nhãn demo |
| DI-04 | `road-route-seed.json` | **38** tuyến |

## 1. Kind + UI pattern

| | |
|--|--|
| Feature Kind | **B** |
| List pattern | **1×** `LinPageLayout` kind=catalog — **cấm** nested `CatalogListShell` |
| Grid | `LinCatalogDataGrid` · kéo cột **default ON** |
| Footer | `LinCatalogListPagination` — **cấm** footerPagination / pageSizeBar / raw table production |
| Form pattern | **Full-page** `AssetFormPage` C/E/V/Copy (PO GAP-04 · ≥10 field) — **cấm** Resource / Slideout |
| Routes | List `/asset` · form `/asset/new` · `/asset/:id` · `/asset/:id/edit` · `/asset/:id/copy` |
| Toolbar SSOT | `catalog-list-toolbar` + `erp-control-icon-map` (`editConfig`=`fa-cog`) |
| View | `readOnly` — **cấm** disabled xám toàn form |

## 2. Screens / zones

| Screen | FormMode | Zones | Controls |
|--------|----------|-------|----------|
| Danh mục TS | list | **A Header · B Toolbar+filter · C Grid · D Pagination** | SearchInput ×4 + Text km + grid + pager |
| Form TS | create/edit/view/copy | Full-page **Z1 · Z1h · Z2 · Z3** | 15 fields · leave-confirm dirty |

### Zone A — Header

- Icon `fa-road` + title **Sổ tài sản kết cấu hạ tầng đường bộ** (22px)
- **Cấm** nút Thêm mới / Tạo mới trên A

### Zone B — Toolbar + filter (PO DoD-2)

**Trái (filter + icon):**

| key | Label | Control (Design chốt) | catalogKind |
|-----|-------|------------------------|-------------|
| search | Tìm kiếm | `SearchInput` | text — mã · tên · QR · tuyến · loại |
| type | Loại tài sản | `SearchInput` | **asset-type** (23) — **cấm** Select 8 nhãn |
| route | Tuyến đường | `SearchInput` | **road-route** (38) — **cấm** free-text |
| kmFrom | Lý trình từ | `Text` | chainage |
| kmTo | Lý trình đến | `Text` | chainage |
| orgTree | Cây đơn vị / tuyến | `SearchInput` tree | **org-unit** |
| — | Xóa điều kiện | button | clear all filter → page=1 |
| — | Làm mới | `fa-sync-alt` | reload list |
| — | Sửa config | `fa-cog` | column config modal |

**Phải:** **Tạo mới** primary (`fa-plus`) — **chỉ trên B**.

**Cấm trên B (pack này):** Xuất Excel (P1 · GAP-PO-05) · Đề xuất / Chờ duyệt (không shared-master).

Filter đổi → **page=1** (search must work).

### Zone C — Grid

- Card title: **Danh sách tài sản KCHT**
- Help: nhấn đúp / menu dòng — Xem · Sửa · Sao chép · Lịch sử
- Flex + skeleton load — **cấm** blank body (GAP-P2-LAYOUT-06)
- Columns (kéo cột ON): STT · □ · **Mã tài sản** · **Tên tài sản** · **Loại tài sản** · **Tuyến đường** · **Lý trình từ** · **Lý trình đến** · **Tình trạng KT** · **Tọa độ GPS** · ⋯
- Loại / tuyến hiển thị `code — name` (master), **không** nhãn demo 8 loại
- Row menu: **Xem · Sửa · Sao chép · Lịch sử** (history stub P1)
- Click mã → View full-page

### Zone D — Pagination

`LinCatalogListPagination`: `Tổng: N · Trang x/y` · Hiển thị **50 / 100 / 200 / 500** · FA pager 32×32.

## 3. Field inventory (form) — Design chốt controlHint

| uiField | Label VN | Control | Required | FormMode lock | Notes |
|---------|----------|---------|----------|---------------|-------|
| code | Mã tài sản | `Text` readonly IdCode | auto | all readonly | BE `TS-yyyyMMdd-nnn` · copy = mã mới |
| name | Tên tài sản | `Text` | * | view=readOnly | |
| type | Loại tài sản | `SearchInput` | * | view=readOnly | master **asset-type** 23 |
| route | Tuyến đường | `SearchInput` | * | view=readOnly | master **road-route** 38 |
| kmFrom | Lý trình bắt đầu | `Text` | * | view=readOnly | vd km12+300 |
| kmTo | Lý trình kết thúc | `Text` | | view=readOnly | |
| status | Tình trạng KT | `Dropdown` | * | view=readOnly | Tốt · Theo dõi · Cần bảo trì |
| source | Nguồn | `Dropdown` | | view=readOnly | `manual` · `ai` |
| lat | Vĩ độ | `Text` (number) | | view=readOnly | GPS pair |
| lng | Kinh độ | `Text` (number) | | view=readOnly | GPS pair |
| qr | Mã QR | `Text` display | | view=readOnly | P1 display |
| photos | Ảnh | `Text` mock | | view=readOnly | P1 mock |
| valueVnd | Giá trị (VND) | `Text` (Money) | | view=readOnly | |
| note | Ghi chú | `Text` multiline | | view=readOnly | |
| updatedAt | Cập nhật | `Date` readonly | | all readonly | |

### Alias demo 8 nhãn (không phải SSOT UI)

Chốt PO — prototype/MFE **không** render 8 Select. Create chỉ 23 mã.

| Demo label | Canonical `asset-type.code` |
|------------|-----------------------------|
| Mặt đường | **không map** `LAND_ROW` · CRUD mặt đường = `pavement-section` |
| Cầu | **không invent** `BRIDGE` pack này |
| Biển báo | `GANTRY_SIGN` |
| Hộ lan | `GUARDRAIL` |
| Cột Km | `KM_POST` |
| Cống | `CULVERT_X` (default; `CULVERT_L` chọn SearchInput) |
| Taluy | `SLOPE_PROTECT` |
| Đèn | `LIGHTING` |

`LAND_ROW` vẫn là một trong 23 (Đất thuộc TS hạ tầng) — **không** gắn nhãn «Mặt đường».

### CSS / layout gates

| Rule | Gap |
|------|-----|
| SearchInput type/route — **cấm** Text / Select 8 | GAP-PO + controlHint |
| Checkbox grid 24×24 · cột 48px | GAP-P2-GRID-CHECK-01 |
| Ellipsis cột | GAP-P2-GRID-ELL-01 |
| AppLayout definite height · title không clip | GAP-P2-LAYOUT-06 |
| Input pad 6×10 · min-height 32 · focus shadow | GAP-P2-CSS-* |

## 4. Form full-page wire

```
[Z1] [← Quay lại]     [📋 Sao chép] [✏ Sửa] | [✕ Hủy] [💾 Lưu]
     Title · badge create|edit|view|copy · «Full-page · 15 fields»
[Z1h] hint (view/edit/dirty leave-confirm)
[Z2] sections: Thông tin KCHT · Vị trí / phụ · Audit  (scroll)
[Z3] [Hủy] [Lưu]  — ẩn khi view
```

- Copy → POST new · IdCode mới
- Dirty leave-confirm khi Hủy / Quay lại
- **Cấm** parent JSON string trên field/DTO

## Prototype (REQUIRED)

| | |
|--|--|
| Artifact | `ui/prototype/asset-list-prototype.html` |
| Zones | **A–D** content-only — skip note/sidebar/menu/chrome |
| Form | **full-page** (không slideout) |
| Lookups | SearchInput combo mock 23 type · 38-subset route · org-unit tree |
| SSOT | `list-shell-prototype.md` · `erp-control-icon-map` · VatTu pager |
| **reviewUrl** | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/asset/ui/prototype/asset-list-prototype.html` |

### List wire

```
[A] fa-road + «Sổ tài sản kết cấu hạ tầng đường bộ»
[B] SearchInput · type · route · kmFrom · kmTo · orgTree · Xóa điều kiện · Làm mới · fa-cog | [+ Tạo mới]
[C] «Danh sách tài sản KCHT» · LinCatalogDataGrid mock · ⋯ menu
[D] Tổng · Hiển thị [50|100|200|500] · pager FA
```

## 5. Map / AI

- Leaflet Kind F: demo only — **out of pack**
- AI candidate Confirm: `ai-asset-detect` — **out of pack**
- Excel import/export — **out of pack**

## 6. Open questions (PO closed — Design không re-open)

GAP-PO-ASSET-01..06 giữ nguyên. SA map lookup API; **cấm ERP.*** · **cấm** Finance `api/v1/assets` · **cấm** `/rmms/`.

## Confirm

`design_confirm` = **approve** (autoApprove ON · `task_86f45a3c` · 2026-08-14T16:05:00.000Z).

## Handoff → SA

| Field | Value |
|-------|-------|
| Kind / pattern | B · catalog A–D + **full-page** form |
| Field inventory | §3 · SearchInput type/route/org · Dropdown status/source |
| Prototype · reviewUrl | § Prototype |
| API prefer | `GET/POST/PUT/DELETE api/v1/asset/road-assets` + BFF `web-bff/api/v1/asset/road-assets` |
| Lookups (SA chốt) | asset-types · road-routes · org-unit tree |
| Entity | `RoadAssetEntity` · `rmms_road_assets` · SHARE=tenant_keep · **cấm** parent JSON |
| Next | SA **confirmed** · `/agent-team-lead` **pending** |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-design |
| skillVersion | 2026.08.14.5 |
| schemaVersion | 2 |
| workflowVersion | 2026.08.14.5 |
| rulesVersion | 2026.08.14.9 |
| generatedAt | 2026-08-14T22:10:00.000Z |
| versionGate | rechecked |
| contentHashPriorPo | sha256:po-requirement-task_9ab7f74a |
| contentHashPriorDataAnaly | sha256:b21de98e21ce800f30383fb452770f85aa87d5be969e4bf0ccd5387c2acd17af |
