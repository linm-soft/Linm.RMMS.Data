# PO — asset-type (Loại tài sản KCHT)

| Field | Value |
|-------|-------|
| feature | `asset-type` |
| changeScope | `new_page` |
| packKind | `master` (`master_catalog`) |
| Feature Kind | **B** — Catalog **flat** list + form |
| requestSource | run packet `task_495e5501` · `/agent-qldb-workflow` · Autopilot |
| demo | **N/A** — no Signed demo · UI chốt Design |
| status | `done` |
| updatedAt | 2026-08-08T18:50:00.000Z |

## 1. Goal

Implement **danh mục dùng chung** loại tài sản KCHT (canonical từ RMMS CUC 2 folder cấp 3): CRUD + search CI + seed + alias map + SearchInput lookup — trên MFE Master — trước page Asset / import dùng `assetTypeCode`.

## 2. Personas / DoD

- Persona: Admin hệ thống · Import ops · Asset list filter
- DoD (đo được):
  1. List Kind B: cột **Mã · Tên · Nhóm · Số alias · Trạng thái**
  2. Search CI mã + tên (không dấu)
  3. Toolbar: Tạo mới · Làm mới
  4. Row menu: Xem · Sửa · Sao chép
  5. View = `readOnly` (không disabled xám)
  6. Form: code · name · groupCode · legacyAliases · isActive
  7. Seed canonical **23** từ INVESTIGATE-CUC2 §4
  8. Lookup API SearchInput cho consumer Asset (`assetTypeCode`) — Step **2li**
  9. Optional `GET /alias-map` cho import job
  10. FE `yarn build` + BE `dotnet build` PASS · **cấm** gen `ERP.*` / `api/v1/rmms/*`

## 3. CTX / DEM / DI inventory

| ID | Path | Loại | Bắt buộc |
|----|------|------|----------|
| CTX-01 | `docs/context/features/asset-type.md` | feature | P0 ✅ |
| CTX-02 | `docs/context/features/master.md` | hub Master | P0 ✅ |
| CTX-03 | `specs/_data-analy/shared-catalogs/INVESTIGATE-CUC2.md` §4 | data-analy | P0 ✅ |
| DEM-* | — | — | **skip** (`packKind=master`) |
| DI-01 | `docs/context/seed/asset-type-seed.json` | seed canonical 23 | P0 |
| DI-02 | folder cấp 3 dưới tuyến `RMMS CUC 2` | alias → `legacyAliases[]` | P1 |
| PROT-01 | `specs/asset-type/ui/prototype/` | Design gen | P0 từ Design |

## 4. Screens / fields

| Screen | Pattern | Zones |
|--------|---------|-------|
| `/master/asset-type` list | Kind B CatalogListShell / LinPageLayout flat | **A** header · **B** toolbar · **C** grid · **D** pagination |
| Form | Modal (&lt;10 fields) | code · name · groupCode · legacyAliases · isActive |

| Field | Control | Notes |
|-------|---------|-------|
| code | Text code | `CULVERT_X`, `KM_POST`… |
| name | Text | Tên VN chuẩn |
| groupCode | LOOKUP / Dropdown | `THOAT_NUOC` · `AN_TOAN` · `GIAO_THONG` · `NHA_TRAM` · `KHAC` — init-data |
| legacyAliases | Text (comma / JSON BE) | mọi tên folder import |
| isActive | Switch | |

**controlHint (data-analy):** `assetTypeCode` → **SearchInput** (cấm free Text).

## 5. Out of scope

- org-unit / road-route / partner-unit CRUD
- Excel header fingerprint (GAP-ATYPE-03)
- Auth menu import
- Gen Signed `*-demo.html`

## 6. Open questions (Autopilot chốt)

| ID | Decision |
|----|----------|
| GAP-ATYPE-01 | Alias table = `legacyAliases[]` JSON text trên entity |
| GAP-ATYPE-02 | Folder `QL.*` nhầm dưới type — exclude seed (không seed) |
| GAP-ATYPE-03 | Header Excel cluster — OOS P0 |

## 7. Handoff → Design

| Field | Value |
|-------|-------|
| feature | `asset-type` |
| phase_from / phase_to | po → design |
| Context | CTX-01 · CTX-02 · CTX-03 · DI-01 |
| Demo HTML | **N/A** |
| controlHint | assetTypeCode = **SearchInput** · groupCode = Dropdown |
| Next | Design Kind B + prototype + reviewUrl |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-po |
| skillVersion | 2026.08.08.17 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.08.21 |
| rulesVersion | 2026.08.08.19 |
| generatedAt | 2026-08-08T18:50:00.000Z |
| versionGate | ok |
