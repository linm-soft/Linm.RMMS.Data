# Design — master (hub · 4 shared catalogs)

| Field | Value |
|-------|-------|
| feature | `master` |
| title | Master catalogs — Feature hub |
| this role | `design` · `/agent-design` |
| changeScope | **`edit_page`** |
| packKind | **`master`** (PO confirmed) |
| Feature Kind | **B** ×4 — Catalog list/tree trên MFE Master |
| status | `confirmed` (autoApprove=ON · `design_confirm=approve`) |
| design_confirm | `approve` · `2026-08-29T06:45:00.000Z` |
| demo | **N/A** (`master-catalog-no-demo.md`) — **cấm** DEM-* / demo-json SSOT |
| productRoot | `D:/AI-QLBD/Linm.RMMS.Data` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Master` |
| ui_repo_confirm | `Linm.Web.RMMS.Master` |
| mfeStdRoute | `/mas/co-cau-tc` |
| mfeStdUrl | `http://localhost:9318/mas/co-cau-tc` |
| peerStdUrl | `http://localhost:9318/mas/co-cau-tc` (org-unit) · peers `/mas/tuyen-duong` · `/mas/loai-ts` · `/mas/doi-tac` |
| real_view_parity | **v1** |
| shared_grid_example | **v1** |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · prefix **live** `api/v1/integration/*` · **cấm ERP.*** · **cấm** `api/v1/rmms/*` |
| domain | **Integration** |
| childFeatures | `org-unit` (P0) · `road-route` (P0) · `asset-type` (P0) · `partner-unit` (P1) |
| controlHint | `D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/master-control-hint.md` |
| realData | `D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/master-real-data.md` |
| po | `D:/AI-QLBD/Linm.RMMS.Data/specs/master/po/requirement.md` (confirmed) |
| contentHash | `sha256:2e7c4a265a296e1f7bb4cce472f58a1041fdf4ef1b63d088f80cde5012cb8128` |
| headerFingerprint | `sha256:72758524d03f6b4b62ccf4262873b39bdd01601654b368e153678ecc84d1865d` |
| analyReuse | **hash skip** — **cấm** re-scan demo / crawl CTX (**GAP-DES-DEMO-RESCAN-01**) |
| autoApprove | **ON** |
| e2eQa | **ON** (queued — chỉ `/agent-qa*` chạy E2E) |
| taskId | `task_b904272f` |
| priorTask | `task_94eba9c4` (po completed) |
| updatedAt | `2026-08-29T06:45:00.000Z` |
| versionGate | `rechecked` |

**Cấm:** Dev/BE · re-scan DEM · invent `open-api` song song live · Dropdown consumer thay SearchInput · ERP.* · yarn build/e2e/start:std · start role khác (**GAP-PKT-ROLE-01**).

## 0. Context & inventory (hash skip · copy analy/PO)

| ID | Path | Loại | Bắt buộc |
|----|------|------|----------|
| CTX-HUB | `docs/context/features/master.md` | hub | P0 ✅ |
| CTX-ORG | `docs/context/features/org-unit.md` | child | P0 ✅ |
| CTX-RR | `docs/context/features/road-route.md` | child | P0 ✅ |
| CTX-AT | `docs/context/features/asset-type.md` | child | P0 ✅ |
| CTX-PU | `docs/context/features/partner-unit.md` | child | P0 ✅ |
| CTX-DRVN | `docs/context/20-ORG-STRUCTURE-DRVN.md` | org SSOT | P0 ✅ |
| INV-01 | `specs/_data-analy/shared-catalogs/INVESTIGATE-CUC2.md` | investigate A | P0 ✅ |
| DA-HINT | `specs/_data-analy/features/master-control-hint.md` | controlHint | P0 ✅ |
| DA-REAL | `specs/_data-analy/features/master-real-data.md` | real-data §A+§B | P0 ✅ |
| SEED-ORG | `docs/context/seed/org-unit-seed.json` | 60 nodes | P0 |
| DEM-* | — | — | **skip** (`packKind=master`) |
| CHILD-DES | `specs/{org-unit,road-route,asset-type,partner-unit}/ui/` | child design confirmed | P0 reuse |
| DOMAIN | `Linm.RMMS.WebService/docs/DOMAIN-MAP.md` | Integration | P0 |

## 1. Kind + UI pattern (HARD)

| | |
|--|--|
| Feature Kind | **B** ×4 |
| List pattern | `LinPageLayout` kind=catalog + CatalogListShell · **DES-GRID-A…D** (+ C2a/C3/F/H/Z) |
| Form pattern | **Modal** (`ui-pattern-decision` · &lt;10 fields) · `formSurface: modal` · **`data-form-cols="2"`** |
| Filter | **`LinErpListFilterBar`** · 1 hàng wrap · **input + 🔍 cụm phải** — **cấm** nút Tìm riêng · **cấm** `ErpListHeaderFilters` / stack (**GAP-FILTER-BAR-01/07**) |
| Toolbar | FULL · `erp-control-icon-map` §0 · `editConfig`=`fas fa-cog` · **+ Thêm mới** Zone B phải — **cấm** Thêm mới Zone A |
| Config | **`LinCatalogUiSchemaEditorModal`** FULL — **cấm** `configHint` · **cấm** Zone F-only `LinListTableConfigModal` |
| History | **`LinCatalogHistoryModal`** / `useCatalogHistoryModal` |
| Leave | Dirty → **`LeaveConfirmModal`** — **cấm** native `alert`/`confirm` (**GAP-DES-LEAVE-01**) |
| Alert | Xóa/chặn → **`useAlert` / `Modal`** — **cấm** `window.alert` |
| Tree | **org-unit only** — `DES-GRID-T` · `LinTree` / tree grid |
| Map | **none** |
| Routes live (GAP-MAS-ROUTE-01) | `/mas/co-cau-tc` · `/mas/tuyen-duong` · `/mas/loai-ts` · `/mas/doi-tac` |
| API live (GAP-MAS-API-01) | `api/v1/integration/*` · BFF `web-bff/api/v1/integration/*` |
| Skip chrome | GOVOne · Signed demo · hub nav skin demo · Zone B Hồ sơ/Đổi MK |

### § Delta Current vs New (`edit_page`)

| Area | Current | New (this turn) | Action |
|------|---------|-----------------|--------|
| Hub Design | `ui/design.md` **draft** stub | Full hub SSOT · Screens · control-map · prototype + reviewUrl | write |
| Child designs | org-unit / road-route / asset-type / partner-unit **confirmed** | **Reuse** reviewUrl + parity · hub sync routes `/mas/*` | keep + cite |
| Routes docs | legacy `/master/*` | Live `/mas/*` SSOT UI | GAP-MAS-ROUTE-01 |
| Control | analy controlHint | **Chốt** control-map = controlHint (không đổi SearchInput→Text) | chốt |

## 2. Screens (REQUIRED · `devSlash=/agent-dev`)

| Screen | Route live | Pattern | FormMode | Zones | formSurface / cols | `devSlash` |
|--------|------------|---------|----------|-------|--------------------|------------|
| org-unit list/tree | `/mas/co-cau-tc` | Kind B + tree | — | DES-GRID-A · B · C0–C3 · D · T · F · H | — | `/agent-dev` |
| org-unit form | Modal trên list | **Modal** | C · E · V · Copy | DES-GRID-Z | modal · `data-form-cols="2"` | `/agent-dev` |
| road-route list | `/mas/tuyen-duong` | Kind B flat | — | A–D · C2a · C3 · F · H | — | `/agent-dev` |
| road-route form | Modal | **Modal** | C · E · V · Copy | Z | modal · `2` | `/agent-dev` |
| asset-type list | `/mas/loai-ts` | Kind B flat | — | A–D · C2a · C3 · F · H | — | `/agent-dev` |
| asset-type form | Modal | **Modal** | C · E · V · Copy | Z | modal · `2` | `/agent-dev` |
| partner-unit list | `/mas/doi-tac` | Kind B flat | — | A–D · C2a · C3 · F · H | — | `/agent-dev` |
| partner-unit form | Modal | **Modal** | C · E · V · Copy | Z | modal · `2` | `/agent-dev` |

**Cấm** Full page `/new`·`:id` · **cấm** Slideout hồ sơ lớn · **cấm** map canvas.

### FormMode badge (VN)

| mode | Badge |
|------|-------|
| create | Tạo mới |
| edit | Sửa |
| view | Xem |
| copy | Sao chép |

## 3. Control-map (chốt từ controlHint — **cấm** đoán)

> Typography: label **13** · input D14/M16 (**GAP-TYP-01**).

### 3a. Consumer 2li (Asset / import / báo cáo)

| Field key | Label VN | Control | catalogKind | Notes |
|-----------|----------|---------|-------------|-------|
| orgUnitCode | Đơn vị quản lý | **SearchInput** tree | **org-unit** | **cấm** free-text |
| routeCode | Tuyến đường | **SearchInput** | **road-route** | LRS khóa `code` |
| assetTypeCode | Loại tài sản | **SearchInput** | **asset-type** | alias → code |
| partnerUnitCode | Đơn vị đối tác | **SearchInput** | **partner-unit** | Sở / BOT / DN |
| note | Ghi chú | Text | — | |
| measure | Số đo | Number / Text | — | |
| enum nhỏ | — | Dropdown | LOOKUP_STATIC | ≤ ~20–30 |

### 3b. org-unit (P0)

| uiField | Label VN | Control | Required | Surface |
|---------|----------|---------|----------|---------|
| search | Tìm kiếm | SearchTextInput | | filter C1 (cụm phải) |
| kind | Loại đơn vị | Dropdown | | filter · form * |
| parentCode (filter) | Đơn vị cha | SearchInput tree | | filter optional |
| code | Mã đơn vị | Text code | * | form · edit/view readonly |
| name | Tên đơn vị | Text | * | form |
| parentCode | Đơn vị cha | **SearchInput** tree | | form · exclude self · **cấm** Text |
| legacyAlias | Tên gọi cũ | Text | | form · GAP-ORG-02 secondary |
| isActive | Đang dùng | Switch | | form |

**GAP-ORG-02:** primary=`name` · secondary=`legacyAlias` · badge **hệ cũ** khi `isLegacyExtra` (không chữ «legacy» trên UI).

### 3c. road-route (P0)

| uiField | Label VN | Control | Required | Surface |
|---------|----------|---------|----------|---------|
| search | Tìm kiếm | SearchTextInput | | filter |
| routeKind | Loại tuyến | Dropdown | * | filter · form |
| code | Mã tuyến | Text code | * | form |
| name | Tên tuyến | Text | * | form |
| parentCode | Tuyến mẹ | **SearchInput** | | form · catalogKind=road-route |
| notes | Ghi chú | Text | | form |
| legacyAliases | Alias folder | Text / tags | | form |
| isActive | Đang dùng | Switch | | form |

### 3d. asset-type (P0)

| uiField | Label VN | Control | Required | Surface |
|---------|----------|---------|----------|---------|
| search | Tìm kiếm | SearchTextInput | | filter |
| groupCode | Nhóm | Dropdown | * | filter · form |
| code | Mã loại | Text code | * | form |
| name | Tên VN | Text | * | form |
| legacyAliases | Alias import | Text multi | | form |
| isActive | Đang dùng | Switch | | form |

### 3e. partner-unit (P1)

| uiField | Label VN | Control | Required | Surface |
|---------|----------|---------|----------|---------|
| search | Tìm kiếm | SearchTextInput | | filter |
| partnerKind | Loại ĐV | Dropdown | * | filter · form |
| code | Mã | Text code | * | form · GAP-PARTNER-01 → SA |
| name | Tên | Text | * | form |
| provinceCode | Tỉnh / TP | **Text** | | form · PO chốt Text P1 |
| legacyFolderName | Folder import | Text | | form |
| isActive | Đang dùng | Switch | | form |

### 3f. Real-data bind (copy §B — cite live)

| Catalog | BFF prefix | FE |
|---------|------------|-----|
| org-unit | `…/web-bff/api/v1/integration/org-units` (+ `/tree` · `/search` · `/init-data`) | `src/services/orgUnit/endpoint.ts` |
| road-route | `…/integration/road-routes` | `src/services/roadRoute/endpoint.ts` |
| asset-type | `…/integration/asset-types` | `src/services/assetType/endpoint.ts` |
| partner-unit | `…/integration/partner-units` | `src/services/partnerUnit/endpoint.ts` |

Empty/fail: empty copy VN · toast — **cấm** mock seed che API · **cấm** alert.

## 4. Grid list AC (parity · Kind B ×4)

| Area | Design DoD |
|------|------------|
| **Shell** | DES-GRID-A Header · B Toolbar · C0–C3 Grid · D Pagination |
| **Toolbar FULL** | Làm mới (`fa-sync-alt`) · Lịch sử (`fa-history`) · Sửa config (`fa-cog`) · Xem/Sửa/Xóa theo chọn · **+ Thêm mới** (`fa-plus` primary phải) |
| **Row menu C3** | Xem · Sửa · Sao chép · Lịch sử · Xóa · help «Nhấn đúp · Ctrl + chuột phải» |
| **Config F** | `LinCatalogUiSchemaEditorModal` · kéo cột default ON |
| **Filter C1** | `LinErpListFilterBar` 1 hàng wrap · input + 🔍 **cụm phải** · enum Dropdown cùng hàng |
| **Form Z** | Modal 2 cột · footer Hủy/Lưu · View=`readOnly` (không disabled xám / không `<dl>` tách) |
| **Tree T** | org-unit only |
| **Leave** | LeaveConfirmModal overlay |
| **SSOT** | `shared-grid-example` · `list-shell-prototype` · `form-surface-prototype` · `erp-control-icon-map` §0 |

## 5. Prototype — Shared grid + hub (REQUIRED)

| | |
|--|--|
| Base | `agent-design/example/shared-grid-example.html` |
| Hub artifact | `ui/prototype/master-hub-prototype.html` |
| Child reuse | `specs/org-unit/ui/prototype/org-unit-list-prototype.html` · `…/road-route-list-prototype.html` · `…/asset-type-list-prototype.html` · `…/partner-unit-list-prototype.html` |
| Zones | DES-GRID-A · B · C0 · C1 · C2 · C2a · C3 · D · F · H · T (org) · Z |
| formSurface | modal · `data-form-cols="2"` |
| Leave | LeaveConfirmModal (`data-des-id=DES-LEAVE`) |
| Scope | content-only — **cấm** GOVOne / Hồ sơ / Đổi MK |
| `shared_grid_example` | v1 |
| `real_view_parity` | v1 |
| **peerStdUrl** | `http://localhost:9318/mas/co-cau-tc` |
| **reviewUrl** | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/master/ui/prototype/master-hub-prototype.html` |
| Child reviewUrls | org-unit · road-route · asset-type · partner-unit (file://…/specs/{child}/ui/prototype/*-list-prototype.html) |

### Wire Modal (org-unit mẫu · 2 cột)

```
[title] Thêm/Sửa/Xem đơn vị · badge Tạo mới|Sửa|Xem|Sao chép · ✕
[fields data-form-cols="2"]
  [Mã đơn vị*] [Loại đơn vị*]
  [Tên đơn vị* span2]
  [Đơn vị cha SearchInput span2]
  [Tên gọi cũ] [Đang dùng Switch]
[footer] Hủy · Lưu
[LeaveConfirmModal] Chưa lưu · Ở lại / Rời đi
```

### Button SSOT (§0)

| action | Icon | Text | Title |
|--------|------|------|-------|
| refresh | `fas fa-sync-alt` | Làm mới | Làm mới |
| history | `fas fa-history` | Lịch sử | Lịch sử |
| editConfig | `fas fa-cog` | Sửa config | Sửa config |
| view | `fas fa-eye` | Xem | Xem |
| edit | `fas fa-edit` | Sửa | Sửa |
| delete | `fas fa-trash` | Xóa | Xóa |
| create | `fas fa-plus` | Thêm mới | Thêm mới |
| search (filter) | `fas fa-search` | (aria) | trong SearchTextInput |
| cancel | — | Hủy | Hủy |
| save | — | Lưu | Lưu |

## 6. Leave / alert

| Case | Behavior | Cấm |
|------|----------|-----|
| Form dirty → ✕ / Hủy / Esc | **LeaveConfirmModal** | `window.confirm` |
| Xóa / nguy hiểm | **useAlert / Modal** | `window.alert` |
| API / lookup fail | toast · empty | alert blocking |
| History | LinCatalogHistoryModal | custom alert |

## 7. Open questions (handoff SA — không block Design)

| ID | Severity | Design decision |
|----|----------|-----------------|
| GAP-MAS-API-01 | P1 | Cite live `integration/*` · SA sync CTX |
| GAP-MAS-ROUTE-01 | P1 | Live `/mas/*` SSOT · docs legacy `/master/*` |
| GAP-PARTNER-01 | P1 | Code scheme → SA |
| provinceCode | P2 | Giữ **Text** P1 |

## 8. Handoff → SA

| Field | Value |
|-------|-------|
| feature | `master` |
| phase_from / phase_to | design → sa |
| packKind | **master** |
| changeScope | `edit_page` |
| Kind / Form | B ×4 · **Modal** · `data-form-cols="2"` |
| zone ids | DES-GRID-A…D · C2a · C3 · F · H · T · Z · DES-LEAVE |
| Screens | §2 · `devSlash=/agent-dev` |
| control-map | §3 = controlHint chốt |
| realData | DA-REAL §A–§F |
| reviewUrl | file://…/master-hub-prototype.html |
| peerStdUrl | `http://localhost:9318/mas/co-cau-tc` |
| child STATUS | done — hub SSOT + GAP-MAS docs |
| Next | `/agent-sa` · **cấm** start SA trong task Design này |
| Blockers | không |

## DoR checklist (PASS)

| Check | Pass |
|-------|------|
| Kind B + Form Modal + `data-form-cols="2"` | ✅ |
| Screens ×4 catalogs · C/E/V/Copy | ✅ |
| DES-GRID-A…D (+ C2a/C3/F/H/T/Z) | ✅ |
| Toolbar FULL · icons §0 | ✅ |
| Filter LinErpListFilterBar mock · input cụm phải | ✅ |
| Control-map = controlHint | ✅ |
| Prototype + reviewUrl | ✅ |
| LeaveConfirmModal | ✅ |
| real_view_parity v1 + peerStdUrl | ✅ |
| DEM N/A · hash skip analy | ✅ |
| PO Grid AC | ✅ |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-design |
| skillVersion | 2026.08.29.03 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.29.03 |
| rulesVersion | 2026.08.29.28 |
| contentHash | sha256:2e7c4a265a296e1f7bb4cce472f58a1041fdf4ef1b63d088f80cde5012cb8128 |
| headerFingerprint | sha256:72758524d03f6b4b62ccf4262873b39bdd01601654b368e153678ecc84d1865d |
| generatedAt | 2026-08-29T06:45:00.000Z |
| versionGate | rechecked |
| taskId | task_b904272f |

---
<!-- Version meta: skillId=agent-design skillVersion=2026.08.29.03 schemaVersion=1 workflowVersion=2026.08.29.03 rulesVersion=2026.08.29.28 versionGate=rechecked contentHash=sha256:2e7c4a265a296e1f7bb4cce472f58a1041fdf4ef1b63d088f80cde5012cb8128 -->
