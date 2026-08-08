# PO — road-route (Tuyến đường)

| Field | Value |
|-------|-------|
| feature | `road-route` |
| changeScope | `new_page` |
| packKind | `master` (`master_catalog`) |
| Feature Kind | **B** — Catalog **flat** list + form |
| requestSource | run packet `task_1140cae2` · `/agent-qldb-workflow` · Autopilot |
| demo | **N/A** — no Signed demo · UI chốt Design |
| status | `done` |
| updatedAt | 2026-08-08T18:35:00.000Z |

## 1. Goal

Implement **danh mục dùng chung** tuyến / đoạn đường (canonical từ RMMS CUC 2): CRUD + search CI + seed + SearchInput lookup — trên MFE Master — trước page nghiệp vụ (Asset / map / import) dùng `routeCode`.

## 2. Personas / DoD

- Persona: Admin hệ thống · Khu QLĐB · Văn phòng QLĐB · Import ops
- DoD (đo được):
  1. List Kind B: cột **Mã · Tên · Loại · Trạng thái**
  2. Search CI mã + tên (không dấu)
  3. Toolbar: Tạo mới · Làm mới
  4. Row menu: Xem · Sửa · Sao chép
  5. View = `readOnly` (không disabled xám)
  6. Form: code · name · routeKind · parentCode (SearchInput) · notes · isActive
  7. Seed canonical ~38 từ INVESTIGATE-CUC2 §3 · exclude `Đã Import Xong` / KM noise
  8. Lookup API cho consumer Asset (`routeCode`) — Step **2li** SearchInput
  9. FE `yarn build` + BE `dotnet build` PASS · **cấm** gen `ERP.*` / `api/v1/rmms/*`

## 3. CTX / DEM / DI inventory

| ID | Path | Loại | Bắt buộc |
|----|------|------|----------|
| CTX-01 | `docs/context/features/road-route.md` | feature | P0 ✅ |
| CTX-02 | `docs/context/features/master.md` | hub Master | P0 ✅ |
| CTX-03 | `specs/_data-analy/shared-catalogs/INVESTIGATE-CUC2.md` §3 | data-analy | P0 ✅ |
| DEM-* | — | — | **skip** (`packKind=master`) |
| DI-01 | `docs/context/seed/road-route-seed.json` | seed canonical | P0 |
| DI-02 | folder cấp 2 dưới đơn vị `RMMS CUC 2` | alias → `legacyAliases[]` | P1 |
| PROT-01 | `specs/road-route/ui/prototype/` | Design gen | P0 từ Design |

## 4. Screens / fields

| Screen | Pattern | Zones |
|--------|---------|-------|
| `/master/road-route` list | Kind B CatalogListShell / LinPageLayout flat | **A** header · **B** toolbar · **C** grid · **D** pagination |
| Form | Modal (&lt;10 fields) | code · name · routeKind · parentCode · notes · isActive |

| Field | Control | Notes |
|-------|---------|-------|
| code | Text code | `QL.1`, `HCM`, `QL.46B` |
| name | Text | |
| routeKind | LOOKUP_STATIC / Dropdown | `QUOC_LO` · `HCM` · `CAO_TOC` · `KHAC` — init-data |
| parentCode | **SearchInput** road-route | optional tuyến mẹ |
| notes | Text | optional |
| legacyAliases | tags (BE json text) | import folder names · form optional text |
| isActive | Switch | |

**controlHint (data-analy):** `routeCode` → **SearchInput** (cấm free Text).

## 5. Out of scope

- org-unit / asset-type / partner-unit CRUD
- Segment codes `QL1;000` (GAP-ROUTE-01 → Asset/import)
- Auth menu import
- Gen Signed `*-demo.html`

## 6. Open questions (Autopilot chốt)

| ID | Decision |
|----|----------|
| GAP-ROUTE-01 | Segment `;000`/`;052` **không** seed catalog — giữ Asset/import |
| GAP-ROUTE-02 | Tránh/hầm = optional `parentCode` child · seed P1 flat canonical only |
| GAP-ROUTE-03 | Exclude `Đã Import Xong` · KM range folders |

## 7. Handoff → Design

| Field | Value |
|-------|-------|
| feature | `road-route` |
| phase_from / phase_to | po → design |
| Context | CTX-01 · CTX-02 · CTX-03 · DI-01 |
| Demo HTML | **N/A** |
| controlHint | parentCode / routeCode = **SearchInput** · routeKind = Dropdown |
| Next | Design Kind B + prototype + reviewUrl |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-po |
| skillVersion | 2026.08.08.17 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.08.20 |
| rulesVersion | 2026.08.08.19 |
| generatedAt | 2026-08-08T18:35:00.000Z |
| versionGate | ok |
