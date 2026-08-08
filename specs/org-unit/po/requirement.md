# PO — org-unit (Cơ cấu tổ chức DRVN)

| Field | Value |
|-------|-------|
| feature | `org-unit` |
| changeScope | `new_page` |
| packKind | `master` (`master_catalog`) |
| Feature Kind | **B** — Catalog **tree** list + form |
| requestSource | user slash `/qldb-workflow org-unit` · run_mode=`full_pipeline` |
| demo | **N/A** — no Signed demo · UI chốt Design |
| status | `done` · GAP-ORG-01=`keep_legacy` |
| updatedAt | 2026-08-08T17:40:00.000Z |

## 1. Goal

Implement **danh mục dùng chung** cơ cấu tổ chức Cục Đường bộ Việt Nam (DRVN): CRUD + tree + search + seed, trên MFE Master — **trước** các page nghiệp vụ (Asset / Patrol) dùng `SearchInput` `orgUnitCode`.

## 2. Personas / DoD

- Persona: Admin hệ thống · Khu QLĐB · Văn phòng QLĐB
- DoD (đo được):
  1. Tree load đầy đủ theo SSOT DRVN (HQ · ADV · REG · VP · SU · ROOM)
  2. Search CI mã + tên (flat list khi search)
  3. Toolbar: Tạo mới · Làm mới · (config cột nếu Kind B shell)
  4. Row/tree menu: Xem · Sửa · (Xóa theo permission shared)
  5. View = `readOnly` (không disabled xám)
  6. Form: code · name · parentCode (SearchInput) · kind · legacyAlias · isActive
  7. Seed map folder `Chi cục QLĐB II.x` → `VP-II.x` + `legacyAlias`
  8. Lookup API work cho consumer Asset (`orgUnitCode`)
  9. FE `yarn build` + BE `dotnet build` PASS · **cấm** gen `ERP.*`

## 3. CTX / DEM / DI inventory

| ID | Path | Loại | Bắt buộc |
|----|------|------|----------|
| CTX-01 | `docs/context/features/org-unit.md` | feature | P0 ✅ |
| CTX-02 | `docs/context/20-ORG-STRUCTURE-DRVN.md` | org SSOT | P0 ✅ |
| CTX-03 | `docs/context/features/master.md` | hub Master | P0 ✅ |
| CTX-04 | `specs/_data-analy/shared-catalogs/org-structure.md` | data-analy cluster | P1 |
| DEM-* | — | — | **skip** (`packKind=master`) |
| DI-01 | `data-import/RMMS CUC 2/Chi cục QLĐB II.2` … `II.5` | alias → `VP-II.2…5` | P0 |
| DI-02 | `data-import/RMMS CUC 2/Chi cục QLĐB II.1` · `II.6` | **GAP-ORG-01** | AskQuestion |
| DI-03 | Sở / BOT / Cty under CUC 2 | **OOS** → `partner-unit` | — |
| PROT-01 | `specs/org-unit/ui/prototype/` | Design gen | P0 từ Design |

## 4. Screens / fields (draft → Design chốt)

| Screen | Pattern | Zones |
|--------|---------|-------|
| `/master/org-unit` list | Kind B + `LinTreeGridLayout` / `LinTreeNav` | **A** header · **B** toolbar · **C** tree+grid · **D** pagination (khi flat search) |
| Form | Modal hoặc Slideout (&lt;10 fields) | code · name · parent · kind · legacyAlias · isActive |

| Field | Control | Notes |
|-------|---------|-------|
| code | Text code | vd `VP-II.2` · uppercase |
| name | Text | |
| parentCode | SearchInput org-unit | tree parent |
| kind | LOOKUP_STATIC | HQ · ADV · REG · VP · SU · ROOM |
| legacyAlias | Text optional | `Chi cục QLĐB II.2` |
| isActive | Switch | |

## 5. Out of scope

- Catalog `partner-unit` / `road-route` / `asset-type` (hub sau)
- Auth user package / menu import Auth
- Asset CRUD / GIS / AI
- Gen Signed `*-demo.html`

## 6. Open questions (AskQuestion)

| ID | Question | Options |
|----|----------|---------|
| GAP-ORG-01 | Chi cục II.1 / II.6 không trên trang DRVN | **`keep_legacy`** ✅ (user 2026-08-08) · seed `org-unit-seed.json` |
| GAP-ORG-02 | Hiển thị chính = tên DRVN hay «Chi cục…»? | Design: primary=`name` · secondary=`legacyAlias` · badge legacy |

## 7. Handoff → Design

| Field | Value |
|-------|-------|
| feature | `org-unit` |
| phase_from / phase_to | po → design |
| STATUS | draft · unlock sau PO |
| Context (docs) | CTX-01 · CTX-02 · CTX-03 · CTX-04 |
| Demo HTML | **N/A** (`packKind=master`) |
| Demo data / JSON | seed từ CTX-02 tree + DI-01 map |
| data-import files | `RMMS CUC 2/Chi cục QLĐB II.1`…`II.6` (alias) |
| APIs (ids) | outline `api/v1/rmms/org-units` — SA chốt |
| Forms / screens | list tree A–D · form modal/slideout |
| Open questions | GAP-ORG-01 · GAP-ORG-02 |
| Blockers | không — đủ context · chờ GAP-ORG-01 confirm |
| Next AskQuestion | `gap_org_01` rồi Design · sau Design: `design_confirm` (prototype + reviewUrl) |

**Design MUST:** Kind B + tree A–D · icons SSOT · prototype `ui/prototype/org-unit-list-prototype.html` + **reviewUrl** · form control-map · `/implement-grid-tree-context` wire note.
