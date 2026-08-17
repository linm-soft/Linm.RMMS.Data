# PO — pavement-section (Phân loại mặt đường · Biểu 1)

| Field | Value |
|-------|-------|
| feature | `pavement-section` |
| this role | `po` · `/agent-po` |
| changeScope | `edit_page` |
| packKind | `list` |
| Feature Kind | **B** catalog list A–D + **Full page** form (≥10 field — **không** Modal) |
| status | `done` |
| requestSource | run packet `task_af2ca1a0` · `/agent-qldb-workflow` · roleOnly=`po` · autoApprove=**ON** |
| prior · data_analy | `confirmed` · `specs/_data-analy/features/pavement-section-control-hint.md` · contentHash `sha256:pavement-section-delta-pci-20260816` · cluster `specs/pavement-section/specs/_data-analy/clusters/pavement-section.md` **không tồn tại** — SSOT = feature controlHint · **no Excel** · sourceKind=`synthetic` |
| taskId | `task_af2ca1a0` |
| autoApprove | **ON** |
| productRoot | `D:/AI-QLBD/Linm.RMMS.Data` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` · `/asset/pavement-section` · `http://localhost:9301/asset/pavement-section` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · **`api/v1/asset/pavement-sections`** (**cấm ERP.***) |
| updatedAt | `2026-08-15T18:10:00.000Z` |

## 1. Goal

Chốt yêu cầu Kind **B** list + form full-page **Đoạn mặt đường (Biểu 1)** theo data-analy `feature_context`. Persona: Khu QLĐB · Văn phòng · Nhà thầu BDTX.

**Delta pack này (SSOT lock):** PCI · Lớp GIS (`layerCode`) · Ngày đo (`measuredAt`) trên list+form+BE; filter Zone B Tên đường / Từ–Đến Km; View = `<dl>` (không Input disabled); Zone F `LinCatalogUiSchemaEditorModal` kind=`pavement-sections`. Align demo → MFE Asset · BE domain **Asset**.

Live MFE/BE sau `task_6a731526` **đã ship** các GAP data-analy (PCI/filter/schema/View-dl). PO **không** invent field mới. Design **phải** cập nhật prototype (hiện stale: thiếu PCI/filter road-km · form mock Modal). Dev = **verify / no-op** nếu parity giữ.

**Cấm ERP.*** · **cấm** invent `api/v1/infra` · **cấm** `api/v1/rmms/*`.

## 2. Current → New (`edit_page`)

Nguồn SSOT: control-hint `2026-08-16T00:25:00.000Z` + live MFE `PavementSectionPage` / `PavementSectionFormPage` + Review `task_6a731526` ACCEPT.

| Layer | Current (live 2026-08-16) | New (delta this pack) |
|-------|---------------------------|------------------------|
| Kind / shell | 1× `LinPageLayout` A–D · `LinCatalogDataGrid` kéo cột ON · `LinCatalogListPagination` | **keep** — **cấm** nested CatalogListShell · footerPagination · pageSizeBar · raw table |
| Zone B filter | SearchText + SearchInput tỉnh/tình trạng · Text `road` · Number kmFrom/kmTo · date range | **keep** — GET `?search=&province=&road=&kmFrom=&kmTo=&status=` |
| Grid cols | STT · Mã · Đường · Tỉnh · Km · Kết cấu · Cấp · Tình trạng · PCI · Lớp · Ngày đo · ĐV QL | **keep** · schema-driven `buildDynamicGridColumns` |
| Zone F | `LinCatalogUiSchemaEditorModal` title «Cấu hình hiển thị danh mục» · seed `pavement-sections` | **keep** — **cấm** `LinListTableConfigModal` editor cột · **cấm** `configHint` |
| Form | Full page C/E/V/Copy · PCI 0–100 · layer SearchInput · measuredAt Date · View `<dl>` | **keep** — **cấm** Resource / Slideout / View=`readOnly` Input |
| Prototype | A–D generic (Mã/Tên) · form **Modal** mock · **không** PCI/road/km | **IN P1 Design:** content-only A–D + form **full-page** Z1–Z3 · cột PCI/Lớp/Ngày đo · filter road/km · Zone F schema mock |
| Demo HTML | Biểu 1 local · map `layerCode=mat-duong` · **thiếu** PCI fields | **IN P1 Design** visual parity (không clone chrome) |
| API / BE | Asset CRUD + Pci/LayerCode/MeasuredAt · BFF passthrough | **keep** · **cấm ERP.*** |
| Auth | FE gate · BE `[RequirePermission]` stub | **OUT pack** |
| Excel / History API | stub | **OUT pack** |

## 3. Personas / DoD (đo được)

1. List load + search (mã/đường) + filter tỉnh / tình trạng / tên đường / Từ–Đến Km → page=1.
2. Zone A: title «Phân loại mặt đường (Biểu 1)» — **cấm** Thêm mới trên A.
3. Zone B: Tạo mới primary · Làm mới · Lịch sử stub · config · Delete (perm) · SearchText + SearchInput + road/km.
4. Zone C: `LinCatalogDataGrid` + cột PCI · Lớp · Ngày đo · row menu Xem · Sửa · Sao chép · Lịch sử · Xóa.
5. Zone D: `LinCatalogListPagination` pageSize 50/100/200/500.
6. Zone F: `LinCatalogUiSchemaEditorModal` kind=`pavement-sections`.
7. Form full-page: IdCode `MD-YYYYMMDD-NNNN` · required roadName · provinceName · kmFrom/kmTo (KmTo≥KmFrom) · structureType · status · manageUnit · PCI 0–100 nếu nhập · layer default `mat-duong`.
8. View = `<dl>` display — **cấm** Input disabled xám.
9. Map live: `layerCode=mat-duong` (nav, không engine AI trên Biểu 1).
10. FE `yarn build` PASS · BE `dotnet build` PASS khi đụng API — Dev ghi implement § Build. **This PO role: no FE/BE write → build n/a.**

## 4. CTX / DEM / DI inventory

| ID | Path | Loại |
|----|------|------|
| CTX-01 | `docs/context/features/pavement-section.md` | feature Kind B |
| CTX-02 | `docs/context/features/pavement-section-control-map.md` | control-map (PCI đã có) |
| DEM-01 | `Linm.RMMS.Demo/src/demo/features/pavement-section-demo.html` | demo entry |
| DI-01 | — | **no Excel cluster** |
| DA-01 | `specs/_data-analy/features/pavement-section-control-hint.md` | controlHint SSOT |
| MFE | `Linm.Web.RMMS.Asset` `/asset/pavement-section` | UI |
| BE | `D:/AI-QLBD/Linm.RMMS.WebService` · DOMAIN-MAP Asset · `api/v1/asset/pavement-sections` | API |

### List columns (bootstrap)

STT · Mã · Tên đường · Tỉnh · Từ–Đến Km · Kết cấu · Cấp · Tình trạng · PCI · Lớp GIS · Ngày đo · ĐV QL · actions

### Form fields (controlHint — Design chốt UI · SA chốt API)

| Field key | Label | controlHint | required |
|-----------|-------|-------------|----------|
| code | Mã | `Text` IdCode `MD-*` readonly | auto |
| roadName | Tên đường | `Text` | * |
| provinceName | Tỉnh | `SearchInput` · **province** | * |
| kmFrom / kmTo | Từ/Đến Km | `Text` (number) | * |
| lengthKm | Chiều dài | `Text` (number) | |
| baseWidthM / surfaceWidthM | B nền / B mặt | `Text` (number) | |
| structureType | Loại kết cấu | `SearchInput` · **structure-type** | * |
| surfaceThicknessCm | Dày mặt | `Text` (number) | |
| roadClass | Cấp đường | `SearchInput` · **road-class** | |
| yearsInService | Số năm | `Text` | |
| handoverMaintenance / Construction | Bàn giao | `Checkbox` | |
| lastMajorRehabYear / lastSurfaceRepairYear | Năm đại tu / SC | `Text` (year) | |
| status | Tình trạng | `SearchInput` · **pavement-status** | * |
| pci | PCI | `Text` (number 0–100) | |
| layerCode | Lớp GIS | `SearchInput` · **gis-layer** | default `mat-duong` |
| measuredAt | Ngày đo | `Date` | |
| constructionUnit / manageUnit / ownerUnit | Đơn vị | `Text` | manage * |
| notes | Ghi chú | `Text` | |
| updatedAt / updatedBy | Audit | display | |

### Lookup (P1 constants FE — SA không bắt buộc master API)

| catalogKind | Source |
|-------------|--------|
| province | `PROVINCES` |
| pavement-status | `STATUS_OPTIONS` |
| structure-type | `STRUCTURE_TYPES` |
| road-class | `ROAD_CLASSES` |
| gis-layer | `LAYER_CODES` (`mat-duong`) |

CRUD: `GET/POST/PUT/DELETE /api/v1/asset/pavement-sections` · ui-schema Integration catalogs `pavement-sections`.

## 5. Grid AC (REQUIRED · list)

| ID | AC |
|----|-----|
| AC-G-01 | Zones **A Header · B Toolbar · C Grid · D Pagination** |
| AC-G-02 | Search + province/status/road/km apply → page=1 |
| AC-G-03 | Row menu Xem / Sửa / Sao chép / Lịch sử / Xóa |
| AC-G-04 | `LinCatalogDataGrid` + kéo cột default ON · cột PCI/Lớp/Ngày đo |
| AC-G-05 | Footer `LinCatalogListPagination` 50/100/200/500 |
| AC-G-06 | 1× `LinPageLayout` — **cấm** nested CatalogListShell |
| AC-G-07 | Flex + skeleton — **cấm** blank body |
| AC-G-08 | Zone F `LinCatalogUiSchemaEditorModal` — **cấm** `configHint` / `LinListTableConfigModal` cột |

## 6. Open questions — PO chốt

| ID | Question | Decision (PO) |
|----|----------|----------------|
| GAP-RPT-SRC-PAV-01 | Pci · LayerCode · MeasuredAt | **CLOSED live** (`task_6a731526`). Keep DoD. Design proto **IN**. |
| GAP-LIST-FILTER-ROAD | Filter road/km | **CLOSED live**. Keep. |
| GAP-SCHEMA-SEED | CatalogUiSchema `pavement-sections` | **CLOSED live**. Keep. |
| GAP-VIEW-DL | View `<dl>` | **CLOSED live**. Keep. |
| GAP-PO-PVT-PROTO | Prototype stale (Modal form · thiếu PCI) | **IN P1 Design** content-only + reviewUrl. autoApprove=ON → agent tự confirm. |
| GAP-P2-DT | UpdatedAt UTC ↔ local | **P2** — không block pack. |
| Excel import/export | Wizard biểu 1 | **OUT pack** (toolbar stub OK). |
| History API | Server timeline | **OUT pack** (client stub OK). |
| `[RequirePermission]` | Auth NuGet | **OUT pack** (FE gate + BE stub). |
| parent JSON / ERP | — | **Cấm**. BE = `Linm.RMMS.WebService` Asset. |

## 7. Out of scope (this pack)

- Excel import/export wizard
- History API server
- `[RequirePermission]` mount CommonLib
- PostGIS geometry / GIS draw deep (nav map only)
- Hub CSDL 12 biểu (`csdl-so-sach`)
- AI detect engine / `aiSupport` badge trên Biểu 1
- Clone chrome demo · Resource · Kind D Slideout

## 8. Handoff → Design

| Field | Value |
|-------|-------|
| Kind | B list A–D + Full page form Z1–Z3 (**không** Modal) |
| Prototype | content-only · `list-shell-prototype.md` · **skip** note/sidebar/menu/chrome · **bắt buộc** PCI/Lớp/Ngày đo + filter road/km |
| reviewUrl | bắt buộc · `autoApprove=ON` → agent tự confirm |
| controlHint | bảng §4 — **cấm** native select tỉnh/kết cấu/cấp/tình trạng/layer |
| Demo visual | `pavement-section-demo.html` |
| BE | `api/v1/asset/pavement-sections` · **cấm** `api/v1/infra` |
| Next roles | design → sa → team-lead → dev → qa → review = **pending** đến lượt |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-po |
| skillVersion | 2026.08.15.5 |
| schemaVersion | 2 |
| workflowVersion | 2026.08.15.5 |
| rulesVersion | 2026.08.15.8 |
| generatedAt | 2026-08-15T18:10:00.000Z |
| versionGate | rechecked |
| version_mismatch_action | recheck_new (STATUS) |
| contentHashPriorDataAnaly | sha256:pavement-section-delta-pci-20260816 |
| orchestratorSkillVersion | 2026.08.15.5 |
| orchestratorWorkflowVersion | 2026.08.15.5 |
| orchestratorRulesVersion | 2026.08.15.8 |
| dataAnalySkillVersion | 2026.08.15.5 |
| dataAnalyWorkflowVersion | 2026.08.15.5 |
| dataAnalyRulesVersion | 2026.08.15.8 |

---
<!-- Version meta: skillVersion=2026.08.15.5 · schemaVersion=2 · workflowVersion=2026.08.15.5 · rulesVersion=2026.08.15.8 · versionGate=rechecked -->
