# PO — partner-unit (Sở / BOT / Cty)

| Field | Value |
|-------|-------|
| feature | `partner-unit` |
| changeScope | `new_page` |
| packKind | `master` (`master_catalog`) |
| Feature Kind | **B** — Catalog **flat** list + form |
| requestSource | run packet `task_42c50020` · `/agent-qldb-workflow` · Autopilot |
| demo | **N/A** — no Signed demo · UI chốt Design |
| status | `done` |
| updatedAt | 2026-08-08T12:05:00.000Z |

## 1. Goal

Implement **danh mục dùng chung** đơn vị đối tác ngoài DRVN (Sở GTVT · BOT · DN bảo trì): CRUD + search CI + seed 13 từ CUC 2 + SearchInput lookup — trên MFE Master — trước page nghiệp vụ / import dùng `partnerUnitCode`.

## 2. Personas / DoD

- Persona: Admin hệ thống · Import ops · filter ownership
- DoD (đo được):
  1. List Kind B: cột **Mã · Tên · Loại · Tỉnh · Trạng thái**
  2. Search CI mã + tên + legacyFolderName (không dấu)
  3. Toolbar: Tạo mới · Làm mới
  4. Row menu: Xem · Sửa · Sao chép
  5. View = `readOnly` (không disabled xám)
  6. Form: code · name · partnerKind · provinceCode · legacyFolderName · isActive
  7. Seed **13** partners từ INVESTIGATE-CUC2 §2
  8. Lookup API SearchInput cho consumer (`partnerUnitCode`) — Step **2li**
  9. FE `yarn build` + BE `dotnet build` PASS · **cấm** gen `ERP.*` / `api/v1/rmms/*`

## 3. CTX / DEM / DI inventory

| ID | Path | Loại | Bắt buộc |
|----|------|------|----------|
| CTX-01 | `docs/context/features/partner-unit.md` | feature | P0 ✅ |
| CTX-02 | `docs/context/features/master.md` | hub Master | P0 ✅ |
| CTX-03 | `specs/_data-analy/shared-catalogs/INVESTIGATE-CUC2.md` §2 | data-analy | P0 ✅ |
| DEM-* | — | — | **skip** (`packKind=master`) |
| DI-01 | `docs/context/seed/partner-unit-seed.json` | seed 13 | P0 |
| PROT-01 | `specs/partner-unit/ui/prototype/` | Design gen | P0 từ Design |

## 4. Screens / fields

| Screen | Pattern | Zones |
|--------|---------|-------|
| `/master/partner-unit` list | Kind B CatalogListShell / LinPageLayout flat | **A** header · **B** toolbar · **C** grid · **D** pagination |
| Form | Modal (&lt;10 fields) | code · name · partnerKind · provinceCode · legacyFolderName · isActive |

| Field | Control | Notes |
|-------|---------|-------|
| code | Text code | `SO-HATINH`, `BOT-TRUNGPHUONG`… |
| name | Text | Đúng tên folder / chuẩn hóa |
| partnerKind | LOOKUP / Dropdown | `SO_GTVT` · `BOT` · `DOANH_NGHIEP` — init-data |
| provinceCode | Text optional | mã tỉnh (Sở) |
| legacyFolderName | Text | path import / tên folder CUC 2 |
| isActive | Switch | |

**controlHint (data-analy):** `partnerUnitCode` → **SearchInput** (cấm freeText).

## 5. Out of scope

- org-unit / road-route / asset-type CRUD
- Quan hệ partner ↔ org-unit đoạn giao (GAP-PARTNER-02)
- Auth menu import
- Gen Signed `*-demo.html`

## 6. Open questions (Autopilot chốt)

| ID | Decision |
|----|----------|
| GAP-PARTNER-01 | Code scheme = **slug IdCode** (`SO-*` / `BOT-*` / `DN-*`) |
| GAP-PARTNER-02 | partner ↔ org-unit — OOS P0 |

## 7. Handoff → Design

| Field | Value |
|-------|-------|
| feature | `partner-unit` |
| phase_from / phase_to | po → design |
| Context | CTX-01 · CTX-02 · CTX-03 · DI-01 |
| Demo HTML | **N/A** |
| controlHint | partnerUnitCode = **SearchInput** · partnerKind = Dropdown |
| Next | Design Kind B + prototype + reviewUrl |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-po |
| skillVersion | 2026.08.08.17 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.08.21 |
| rulesVersion | 2026.08.08.19 |
| generatedAt | 2026-08-08T12:05:00.000Z |
| versionGate | ok |
