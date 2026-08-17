# Design — pavement-section (Phân loại mặt đường · Biểu 1)

| Field | Value |
|-------|-------|
| feature | `pavement-section` |
| this role | `design` · `/agent-design` |
| Feature Kind | **B** — Catalog list A–D + **full-page** form C/E/V/Copy |
| status | `confirmed` (`design_confirm=approve` · autoApprove ON · `task_def5f4d1`) |
| changeScope | `edit_page` |
| packKind | `list` |
| prior · po | `confirmed` · `po/requirement.md` |
| prior · data_analy | `confirmed` · `_data-analy/features/pavement-section-control-hint.md` · hash `sha256:pavement-section-delta-pci-20260816` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` · `/asset/pavement-section` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · **`api/v1/asset/pavement-sections`** + **`api/v1/integration/catalogs/pavement-sections/ui-schema`** (**cấm ERP.***) |
| taskId | `task_def5f4d1` |
| updatedAt | 2026-08-16T00:15:00.000Z |
| design_confirm | **approve** (autoApprove ON) |
| GAP-PO-PVT-PROTO | **CLOSED** — prototype refresh PCI/filter/full-page/`<dl>` |

## 0. Context & Demo (from PO)

| ID | Path | Notes |
|----|------|-------|
| CTX-01 | `docs/context/features/pavement-section.md` | Kind B · Biểu 1 |
| CTX-02 | `docs/context/features/pavement-section-control-map.md` | PCI đã có |
| DEM-01 | `Linm.RMMS.Demo/src/demo/features/pavement-section-demo.html` | visual parity · **không** clone chrome |
| DA-01 | `specs/_data-analy/features/pavement-section-control-hint.md` | controlHint SSOT — Design chốt dưới đây |

**Delta this Design:** prototype stale (Modal + generic Mã/Tên) → content-only A–D + form full-page Z1–Z3 · cột PCI · Lớp GIS · Ngày đo · filter Tên đường / Từ–Đến Km · Zone F schema mock. Live MFE/BE đã ship PCI/filter/schema/View-dl — Design **không** invent field mới.

## 1. Kind + UI pattern (chốt)

| | |
|--|--|
| Feature Kind | **B** catalog list + form **full-page** (≥10 field — **không** Modal) |
| List pattern | `LinPageLayout kind="catalog"` · **1×** — **cấm** nested `CatalogListShell` |
| Form pattern | **full-page** `PavementSectionFormPage` · routes `/asset/pavement-section/new` · `/:id` · `/:id/edit` · `/:id/copy` — **cấm** Resource · **cấm** Kind D Slideout · **cấm** overlay `?form=` |
| Toolbar SSOT | `catalogToolbar` + `erp-control-icon-map` |
| Zone F | **`LinCatalogUiSchemaEditorModal`** title «Cấu hình hiển thị danh mục» · catalogKind=`pavement-sections` · **cấm** `configHint` · **cấm** `LinListTableConfigModal` làm editor cột |

## 2. Screens / zones

| Screen | FormMode | Zones | Controls |
|--------|----------|-------|----------|
| Danh sách đoạn mặt đường | list | **A Header · B Toolbar+filter · C Grid · D Pagination · F Schema** | SearchText + SearchInput tỉnh/tình trạng · Text road · Number kmFrom/kmTo |
| Form | create / edit / copy | full-page Z1 toolbar · Z2 sections · Z3 footer | SearchInput + Text + Date + Checkbox · leave-confirm dirty |
| Form | view | full-page **`<dl>` display** | **cấm** Input `readOnly` / disabled xám |

## 3. Control map (Design chốt — không đoán Dev)

### 3.1 Zone B filters

| uiField | Label VN | Control | catalogKind | Notes |
|---------|----------|---------|-------------|-------|
| search | Tìm kiếm | `SearchTextInput` | text | mã / tên đường · apply → page=1 |
| province | Tỉnh | `SearchInput` | **province** | **cấm** native `<select>` |
| road | Tên đường | `Text` | text | GET `road=` |
| kmFrom | Từ Km | `Text` (number) | chainage | GET `kmFrom=` |
| kmTo | Đến Km | `Text` (number) | chainage | GET `kmTo=` |
| status | Tình trạng | `SearchInput` | **pavement-status** | Tốt · Đang TC · Theo dõi · Hư hỏng |
| fromDate / toDate | Ngày cập nhật | Date range | — | `LinErpListFilterBar` (optional keep) |

GET list: `?search=&province=&road=&kmFrom=&kmTo=&status=&page=`

### 3.2 Form fields

| uiField | Label VN | Control | Required | FormMode |
|---------|----------|---------|----------|----------|
| code | Mã | `Text` IdCode `MD-YYYYMMDD-NNNN` readonly | auto | create empty until save |
| roadName | Tên đường | `Text` | * | view=**display** |
| provinceName | Tỉnh | `SearchInput` · **province** | * | view=**display** |
| kmFrom / kmTo | Từ/Đến Km | `Text` (number) | * | KmTo ≥ KmFrom |
| lengthKm | Chiều dài | `Text` (number) | | |
| baseWidthM / surfaceWidthM | B nền / B mặt | `Text` (number) | | |
| structureType | Loại kết cấu | `SearchInput` · **structure-type** | * | |
| surfaceThicknessCm | Dày mặt | `Text` (number) | | |
| roadClass | Cấp đường | `SearchInput` · **road-class** | | |
| yearsInService | Số năm | `Text` | | |
| handoverMaintenance / handoverConstruction | Bàn giao BT / XDCB | `Checkbox` | | |
| lastMajorRehabYear / lastSurfaceRepairYear | Năm đại tu / SC | `Text` (year) | | |
| status | Tình trạng | `SearchInput` · **pavement-status** | * | |
| pci | PCI | `Text` (number 0–100) | | **KEEP** live |
| layerCode | Lớp GIS | `SearchInput` · **gis-layer** | | default `mat-duong` |
| measuredAt | Ngày đo | `Date` | | |
| constructionUnit / manageUnit / ownerUnit | Đơn vị | `Text` | manage * | |
| notes | Ghi chú | `Text` | | |
| updatedAt / updatedBy | Audit | display | | |

**Cấm** View = `Input`/`Text` `readOnly`. Copy = create prefill, code empty (IdCode khi lưu). Map live: `layerCode=mat-duong` (nav, không engine AI).

### 3.3 Lookup labels VN (chốt UI · P1 constants FE)

| catalog | value / label |
|---------|---------------|
| province | Lạng Sơn · Nghệ An · Hà Nội (master `PROVINCES`) |
| pavement-status | Tốt · Đang TC · Theo dõi · Hư hỏng |
| structure-type | BTN · BTXM · Đá dăm (`STRUCTURE_TYPES`) |
| road-class | I · II · III · IV |
| gis-layer | `mat-duong` (default) |

SA **không** bắt buộc master API P1.

### List columns (bootstrap schema `pavement-sections`)

STT · **Mã** · **Tên đường** · **Tỉnh** · **Từ–Đến Km** · **Kết cấu** · **Cấp** · **Tình trạng** · **PCI** · **Lớp GIS** · **Ngày đo** · **ĐV QL** · ⋯

Grid = `useCatalogUiSchema('pavement-sections')` + `columns={buildDynamicGridColumns(schema, uiColumns)}`. **Cấm** leftover `const columns` / `LinCatalogDataColumn[]` sau đổi import.

### DES-GRID

| Zone | Spec |
|------|------|
| DES-GRID-A | Header title «Phân loại mặt đường (Biểu 1)» — **cấm** Thêm mới trên A |
| DES-GRID-B | catalogToolbar: Làm mới · Lịch sử (stub) · **Cấu hình** (Zone F) · Xem/Sửa/Xóa (perm) khi chọn · **+ Tạo mới** (navigate full-page) |
| DES-GRID-B-FILTER | SearchText + SearchInput tỉnh/tình trạng · Text đường · Number kmFrom/kmTo |
| DES-GRID-C2 | `LinCatalogDataGrid` · resize default ON · cột PCI/Lớp/Ngày đo · row menu: Xem · Sửa · Sao chép · Lịch sử · Xóa |
| DES-GRID-D | `LinCatalogListPagination` 50/100/200/500 — **cấm** footerPagination / pageSizeBar / raw table |
| DES-GRID-F | Modal title «Cấu hình hiển thị danh mục» · List/width/filter/sort · Thêm cột · kind=`pavement-sections` |

### DES-FORM

| Zone | Spec |
|------|------|
| Z1 | Lưu · Huỷ/Đóng · Xóa (edit+perm) · Mở bản đồ live · Sửa (view) |
| Z2 | Sections: Đoạn đường · Kết cấu · Khai thác (PCI/Lớp/Ngày đo) · Đơn vị · Audit |
| Z3 | View = `<dl>` — **cấm** Input disabled xám |

## 4. Prototype (REQUIRED)

| | |
|--|--|
| Artifact | `ui/prototype/pavement-section-list-prototype.html` |
| Zones | **A–D** + **Zone F** schema + **full-page form** C/E/V/Copy (`<dl>` view) |
| Scope | content-only (no chrome / note banner / menu / GOVOne) |
| **reviewUrl** | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/pavement-section/ui/prototype/pavement-section-list-prototype.html` |

Prototype **không** Modal form. Click Mã / Tạo mới / Sửa → full-page trong cùng file (`#screen-form`).

## 5. AC Design (align PO)

| ID | AC |
|----|-----|
| AC-G-01 | Zones A · B · C · D |
| AC-G-02 | Search + province/status/road/km → page=1 |
| AC-G-03 | Row menu Xem / Sửa / Sao chép / Lịch sử / Xóa |
| AC-G-04 | Schema columns + resize ON · PCI · Lớp · Ngày đo |
| AC-G-05 | Footer pageSize 50/100/200/500 |
| AC-G-06 | 1× LinPageLayout — **cấm** nested CatalogListShell |
| AC-G-07 | Flex + skeleton — **cấm** blank body |
| AC-G-08 | Zone F `LinCatalogUiSchemaEditorModal` kind=`pavement-sections` |
| AC-F-01 | Form full-page C/E/V/Copy · leave-confirm dirty |
| AC-F-02 | View = `<dl>` display · **cấm** Input readOnly |
| AC-F-03 | required: roadName · provinceName · kmFrom/kmTo · structureType · status · manageUnit · IdCode MD-* |
| AC-F-04 | PCI 0–100 nếu nhập · layer default `mat-duong` |

## 6. Out of scope (this pack)

- Excel import/export wizard (toolbar stub OK)
- History API server (client stub OK)
- `[RequirePermission]` CommonLib mount
- PostGIS geometry / GIS draw deep (nav map only)
- Hub CSDL 12 biểu · AI detect engine / `aiSupport` trên Biểu 1
- Clone chrome demo · Resource · Kind D Slideout
- GAP-P2-DT UpdatedAt UTC ↔ local — P2

## 7. Handoff → SA (`/agent-sa`)

- List/CRUD `GET/POST/PUT/DELETE api/v1/asset/pavement-sections` (**cấm** `api/v1/infra` · **cấm ERP.***)
- Fields DTO: Pci · LayerCode · MeasuredAt (KEEP live)
- ui-schema `GET/PUT api/v1/integration/catalogs/pavement-sections/ui-schema` · Registry + Seed kind=`pavement-sections`
- Lookup P1 FE constants: province · pavement-status · structure-type · road-class · gis-layer
- Entity `PavementSectionEntity` · SHARE=tenant_keep
- MFE Asset `/asset/pavement-section` · form full-page
- `autoApprove=ON` → Design **confirmed** `task_def5f4d1` · next SA **pending** đến lượt (roleOnly=design this task)

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-design |
| skillVersion | 2026.08.15.5 |
| schemaVersion | 2 |
| workflowVersion | 2026.08.15.5 |
| rulesVersion | 2026.08.15.8 |
| generatedAt | 2026-08-16T00:15:00.000Z |
| versionGate | rechecked |
| version_mismatch_action | recheck_new (STATUS) |
| contentHashPriorDataAnaly | sha256:pavement-section-delta-pci-20260816 |
| orchestratorSkillVersion | 2026.08.15.5 |
| poSkillVersion | 2026.08.15.5 |
| dataAnalySkillVersion | 2026.08.15.5 |

---
<!-- Version meta: skillVersion=2026.08.15.5 · schemaVersion=2 · workflowVersion=2026.08.15.5 · rulesVersion=2026.08.15.8 · versionGate=rechecked -->
