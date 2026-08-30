# PO — Requirement — master (hub · 4 shared catalogs)

| Field | Value |
|-------|-------|
| feature | `master` |
| title | Master catalogs — Feature hub |
| this role | `po` · `/agent-po` |
| changeScope | **`edit_page`** (STATUS + packet · autopilot) |
| packKind | **`master`** (**PO confirm** · data-analy đề xuất · `master_catalog`) |
| Feature Kind | **B** ×4 — Catalog list/tree trên MFE Master |
| requestSource | queue CHAIN `/agent-qldb-workflow` · roleOnly=`po` · prior data_analy **confirmed** |
| demo | **N/A** (`master-catalog-no-demo.md`) — **cấm** DEM-* / demo-json SSOT |
| status | `confirmed` (autoApprove=ON · task `task_94eba9c4`) |
| productRoot | `D:/AI-QLBD/Linm.RMMS.Data` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Master` |
| mfeStdRoute | `/mas/co-cau-tc` |
| mfeStdUrl | `http://localhost:9318/mas/co-cau-tc` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · prefix **live** `api/v1/integration/*` · **cấm ERP.*** · **cấm** `api/v1/rmms/*` |
| domain | **Integration** |
| childFeatures | `org-unit` (P0) · `road-route` (P0) · `asset-type` (P0) · `partner-unit` (P1) |
| controlHint | `D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/master-control-hint.md` |
| realData | `D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/master-real-data.md` |
| contentHash | `sha256:2e7c4a265a296e1f7bb4cce472f58a1041fdf4ef1b63d088f80cde5012cb8128` |
| headerFingerprint | `sha256:72758524d03f6b4b62ccf4262873b39bdd01601654b368e153678ecc84d1865d` |
| analyReuse | **hash skip** — **cấm** re-scan demo / crawl CTX (**GAP-PO-DEMO-RESCAN-01**) |
| autoApprove | **ON** |
| e2eQa | **ON** (queued — chỉ `/agent-qa*` chạy E2E) |
| taskId | `task_94eba9c4` |
| priorTask | `task_ecc53315` (data_analy completed) |
| updatedAt | `2026-08-29T06:35:00.000Z` |
| versionGate | `rechecked` |

**Cấm:** implement · re-scan DEM · invent `open-api` song song live · Dropdown consumer thay SearchInput master · ERP.* · yarn build/e2e/start:std ở role PO · start role khác (**GAP-PKT-ROLE-01**).

## 1. Goal

Hub **Master catalogs** gắn SSOT 4 danh mục dùng chung (DRVN + `gov-vn`) trên MFE `Linm.Web.RMMS.Master`: org-unit · road-route · asset-type · partner-unit. Child pipelines **đã ship** riêng; pack hub `edit_page` = chốt requirement hub + controlHint + real-data bind Integration live + đồng bộ docs route/API (GAP-MAS-*).

Persona: Admin hệ thống · Khu QLĐB · Văn phòng QLĐB · Import ops · consumer Asset/import/báo cáo (lookup `orgUnitCode` / `routeCode` / `assetTypeCode` / `partnerUnitCode`).

## 2. changeScope `edit_page` — Current vs New (REQUIRED)

| Area | Current | New (this turn) | Action |
|------|---------|-----------------|--------|
| Hub PO | `po/requirement.md` **draft** stub | Full hub DoD · Grid AC ×4 · Screens · Leave · handoff Design | write |
| controlHint / real-data | analy **done** · contentHash `2e7c4a26…` | **Reuse** — copy inventory §A+§B · **cấm** re-scan | keep |
| Child catalogs | org-unit / road-route / asset-type / partner-unit STATUS **done** | Hub SSOT chỉ delta docs + consumer 2li | no re-CRUD child unless Design gap |
| Routes (docs) | CTX/packet `/master/*` · `:9318/master/org-unit` | **Live** `/mas/co-cau-tc` · `/mas/tuyen-duong` · `/mas/loai-ts` · `/mas/doi-tac` | GAP-MAS-ROUTE-01 → Design/CTX sync |
| API (docs) | CTX hub `api/v1/open-api/*` | **Live** `api/v1/integration/*` · BFF `web-bff/api/v1/integration/*` | GAP-MAS-API-01 → SA/CTX sync |
| UI pattern | Kind B + Modal (&lt;10 fields) live | Giữ · **cấm** Slideout hồ sơ lớn · **cấm** invent map | keep |
| Seed | org 60 · investigate A · `gov-vn` | Giữ · CUC 2 archive **không** production SSOT | keep |

**Không đổi:** CatalogListShell A–D · Modal C/E/V/Copy · leave-confirm · toast not alert · DEM skip · SearchInput consumer · seed DRVN.

## 3. DoD (đo được)

1. **packKind=`master`** confirmed · DEM **N/A** · UI chốt Design (prototype + reviewUrl per child / hub peer).
2. 4 catalog Kind **B** trên host `:9318` — routes **live** `/mas/*` (không docs `/master/*`).
3. API **live** Integration — **cấm** `api/v1/rmms/*` · **cấm** ERP.* · CTX `open-api` = debt GAP-MAS-API-01 (SA sync, không invent path mới).
4. Filter Zone B = **`LinErpListFilterBar`** 1 hàng wrap · **input + 🔍 cụm phải** — **cấm** nút Tìm riêng · **cấm** `ErpListHeaderFilters` / stack.
5. Toolbar FULL: Làm mới · Lịch sử · Config (`fa-cog`) · selection · **+ Thêm mới** — **cấm** Thêm mới trên Zone A.
6. Config cột = **`LinCatalogUiSchemaEditorModal`** FULL — **cấm** `configHint` · **cấm** leftover `const columns`.
7. Form Modal C/E/V/Copy · View=`<dl>` / readonly · footer Lưu/Hủy.
8. Dirty → **`LeaveConfirmModal`** · chặn/xóa → **`useAlert` / `Modal`** — **cấm** `window.alert`/`confirm`.
9. History → **`LinCatalogHistoryModal`** / `useCatalogHistoryModal`.
10. Consumer 2li: `orgUnitCode` SearchInput **tree** · `routeCode` / `assetTypeCode` / `partnerUnitCode` SearchInput — **cấm** free-text.
11. Empty/fail: empty copy VN · toast — **cấm** mock seed che API · **cấm** alert.
12. Child run order: org-unit **P0** → road-route → asset-type → partner-unit **P1**.
13. Dev/QA (role sau): FE `yarn build` · BE build · E2E — **cấm** ở role PO.

## 4. CTX / DEM / DI inventory (hash skip · copy analy)

| ID | Path | Loại | Bắt buộc |
|----|------|------|----------|
| CTX-HUB | `docs/context/features/master.md` | hub | P0 ✅ |
| CTX-ORG | `docs/context/features/org-unit.md` | child | P0 ✅ |
| CTX-RR | `docs/context/features/road-route.md` | child | P0 ✅ |
| CTX-AT | `docs/context/features/asset-type.md` | child | P0 ✅ |
| CTX-PU | `docs/context/features/partner-unit.md` | child | P0 ✅ |
| CTX-DRVN | `docs/context/20-ORG-STRUCTURE-DRVN.md` | org SSOT | P0 ✅ |
| CTX-IMP | `docs/context/features/import-gov-ssot.md` · set `gov-vn` | import | P0 ✅ |
| INV-01 | `specs/_data-analy/shared-catalogs/INVESTIGATE-CUC2.md` | investigate A | P0 ✅ |
| ORG-SS | `specs/_data-analy/shared-catalogs/org-structure.md` | APPROVED A | P1 |
| DA-HINT | `specs/_data-analy/features/master-control-hint.md` | controlHint | P0 ✅ |
| DA-REAL | `specs/_data-analy/features/master-real-data.md` | real-data §A+§B | P0 ✅ |
| SEED-ORG | `docs/context/seed/org-unit-seed.json` | 60 nodes · keep_legacy | P0 |
| DI-CUC2 | `data-import/RMMS CUC 2` | archive/demo only | P1 — **cấm** production SSOT |
| DEM-* | — | — | **skip** (`packKind=master`) |
| PROT-* | `specs/{child}/ui/prototype/` | Design | P0 từ Design (child đã có) |
| DOMAIN | `Linm.RMMS.WebService/docs/DOMAIN-MAP.md` | Integration | P0 |
| MFE | `Linm.Web.RMMS.Master` `/mas/*` · services `endpoint.ts` | live | P0 |
| BE | `…/Integration/Controllers/{OrgUnits,RoadRoutes,AssetTypes,PartnerUnits}Controller.cs` | live | P0 |

## 5. Control hints (copy data-analy — Design chốt control-map)

> SSOT: `data-analy-control-hint.md` · typography label **13** · input D14/M16 (**GAP-TYP-01**).

### 5a. Consumer fields (Asset / import / báo cáo · 2li)

| Field key | Label | controlHint | catalogKind | Notes |
|-----------|-------|-------------|-------------|-------|
| orgUnitCode | Đơn vị quản lý | `SearchInput` **tree** | **org-unit** | **cấm** free-text |
| routeCode | Tuyến đường | `SearchInput` | **road-route** | LRS khóa `code` |
| assetTypeCode | Loại tài sản | `SearchInput` | **asset-type** | nhiều alias → lookup code |
| partnerUnitCode | Đơn vị đối tác | `SearchInput` | **partner-unit** | Sở / BOT / DN |
| note / mô tả | Ghi chú | `Text` | — | free-style |
| measure / số đo thô | Số đo | `Number` / `Text` | — | không khóa mã |
| enum nhỏ ổn định | — | `Dropdown` | LOOKUP_STATIC | ≤ ~20–30 mã |

### 5b. org-unit (P0) — list/tree + form

| Field key | Label | controlHint | required | Notes |
|-----------|-------|-------------|----------|-------|
| search | Tìm kiếm | `SearchTextInput` | | mã · tên · alias CI không dấu |
| kind (filter) | Loại đơn vị | `Dropdown` | | HQ · ADV · REG · VP · SU · ROOM · init-data |
| parentCode (filter) | Đơn vị cha | `SearchInput` tree | | catalogKind=org-unit |
| code | Mã | `Text` code | * | vd `VP-II.2` |
| name | Tên | `Text` | * | |
| kind | Loại | `Dropdown` | * | init-data |
| parentCode | Đơn vị cha | `SearchInput` tree | | exclude self |
| legacyAlias | Tên legacy | `Text` | | Chi cục II.x · GAP-ORG-01/02 |
| isActive | Hiệu lực | `Switch` | | |

### 5c. road-route (P0)

| Field key | Label | controlHint | required | Notes |
|-----------|-------|-------------|----------|-------|
| search | Tìm kiếm | `SearchTextInput` | | |
| routeKind (filter) | Loại tuyến | `Dropdown` | | QUOC_LO · HCM · CAO_TOC · KHAC |
| code | Mã tuyến | `Text` code | * | `QL.1` · `HCM` |
| name | Tên | `Text` | * | |
| routeKind | Loại | `Dropdown` | * | |
| parentCode | Tuyến mẹ | `SearchInput` | | catalogKind=road-route |
| notes | Ghi chú | `Text` | | |
| legacyAliases | Alias folder | `Text` / tags | | |
| isActive | Hiệu lực | `Switch` | | |

### 5d. asset-type (P0)

| Field key | Label | controlHint | required | Notes |
|-----------|-------|-------------|----------|-------|
| search | Tìm kiếm | `SearchTextInput` | | |
| groupCode (filter) | Nhóm | `Dropdown` | | THOAT_NUOC · AN_TOAN · … |
| code | Mã loại | `Text` code | * | |
| name | Tên VN | `Text` | * | |
| groupCode | Nhóm | `Dropdown` | * | |
| legacyAliases | Alias import | `Text` multi | | |
| isActive | Hiệu lực | `Switch` | | |

### 5e. partner-unit (P1)

| Field key | Label | controlHint | required | Notes |
|-----------|-------|-------------|----------|-------|
| search | Tìm kiếm | `SearchTextInput` | | |
| partnerKind (filter) | Loại ĐV | `Dropdown` | | SO_GTVT · BOT · DOANH_NGHIEP |
| code | Mã | `Text` code | * | GAP-PARTNER-01 → SA |
| name | Tên | `Text` | * | |
| partnerKind | Loại | `Dropdown` | * | |
| provinceCode | Tỉnh / TP | `Text` | | P1 — **không** SearchInput province master (PO chốt Text; SA reopen nếu có master) |
| legacyFolderName | Folder import | `Text` | | |
| isActive | Hiệu lực | `Switch` | | |

## 5f. Real-data bind summary (copy §A+§B — cấm invent path)

| Catalog | Prefix (live BFF) | FE endpoint |
|---------|-------------------|-------------|
| org-unit | `GET/POST/PUT/DELETE …/web-bff/api/v1/integration/org-units` (+ `/tree` · `/search` · `/init-data`) | `src/services/orgUnit/endpoint.ts` |
| road-route | `…/integration/road-routes` (+ `/search` · `/init-data`) | `src/services/roadRoute/endpoint.ts` |
| asset-type | `…/integration/asset-types` (+ `/search` · `/init-data`) | `src/services/assetType/endpoint.ts` |
| partner-unit | `…/integration/partner-units` (+ `/search` · `/init-data`) | `src/services/partnerUnit/endpoint.ts` |

`map: none` · `progress: none` (Type A CRUD · `isActive` soft only).

## 6. Grid list AC (REQUIRED · Kind B ×4)

> Paste `po-design-grid-standard.md` · filter HARD `filter-bar-layout-hard.md` — **GAP-PO-GRID-01**.

| Area | Acceptance (Design phải prototype / parity live) |
|------|-------------------------------------|
| **Shell A–D** | Header · Toolbar · Grid/tree card · Pagination footer |
| **Toolbar FULL** | Làm mới · Lịch sử · Sửa config (`fa-cog`) · View/Edit/Delete theo chọn · **+ Thêm mới** |
| **Grid menu** | Row menu: Xem/Sửa/Sao chép/Lịch sử/Xóa · help «nhấn đúp / Ctrl+chuột phải» |
| **Config** | `LinCatalogUiSchemaEditorModal` (List/width/filter/sort) · kéo cột default ON — **cấm** Zone F-only `LinListTableConfigModal` · **cấm** `configHint` |
| **Grid flow** | Sort cột · filter cột (panel: tìm · chọn tất cả · Đã chọn N · Xác nhận) · chọn dòng |
| **Filter Zone B** | **`LinErpListFilterBar`** · 1 hàng wrap · **input + 🔍 cụm phải** — **không** nút Tìm · **cấm** `ErpListHeaderFilters` / stack |
| **Form pair** | Create/Edit/View/Copy → **Modal** (`ui-pattern-decision` · &lt;10 fields) · Design clone `form-surface-prototype` Modal |
| **Tree?** | **org-unit only** — `LinTree` / tree grid · left non-leaf; flat list khi search |
| **SSOT Design** | `shared-grid-example` · `list-shell-prototype` · `po-design-grid-standard` |
| **SSOT TL/Dev** | `tl-design-grid-component-map` · `tl-grid-full-flow` · `tl-filter-bar-task` (T-UI-FILTER-01) |
| **Skip chrome** | GOVOne · Signed demo · hub nav skin demo |

Áp dụng **đồng nhất** 4 catalog; org-unit thêm tree zone.

## 7. Screens (REQUIRED)

| Screen | Route live | Pattern | FormMode | Zones | `devSlash` |
|--------|------------|---------|----------|-------|------------|
| org-unit list/tree | `/mas/co-cau-tc` | Kind B + tree | — | A–D | `/agent-dev` |
| org-unit form | Modal trên list | **Modal** | C · E · V · Copy | code · name · kind · parentCode · legacyAlias · isActive | `/agent-dev` |
| road-route list | `/mas/tuyen-duong` | Kind B flat | — | A–D | `/agent-dev` |
| road-route form | Modal | **Modal** | C · E · V · Copy | code · name · routeKind · parentCode · notes · legacyAliases · isActive | `/agent-dev` |
| asset-type list | `/mas/loai-ts` | Kind B flat | — | A–D | `/agent-dev` |
| asset-type form | Modal | **Modal** | C · E · V · Copy | code · name · groupCode · legacyAliases · isActive | `/agent-dev` |
| partner-unit list | `/mas/doi-tac` | Kind B flat | — | A–D | `/agent-dev` |
| partner-unit form | Modal | **Modal** | C · E · V · Copy | code · name · partnerKind · provinceCode · legacyFolderName · isActive | `/agent-dev` |

**Cấm** Full page `/new`·`:id` cho catalog master (&lt;10 fields) · **cấm** Slideout hồ sơ lớn · **cấm** map canvas.

## 8. Leave / alert (REQUIRED)

| Case | Behavior | Cấm |
|------|----------|-----|
| Form dirty → đóng / Esc / đổi mode | **`LeaveConfirmModal`** (`/implement-show-leave-confirm` · Modal = `useLeaveConfirm`) | `window.confirm` / native dialog |
| Xóa / chặn thao tác nguy hiểm | **`useAlert` / `Modal`** | `window.alert` |
| API fail / lookup fail | toast · empty | alert blocking |
| History | `LinCatalogHistoryModal` | custom history alert |

Thiếu → **GAP-PO-LEAVE-01**.

## 9. Out of scope

- Re-implement full child CRUD khi STATUS child = done (chỉ hub SSOT + GAP docs)
- Auth menu import / user package
- Asset CRUD / GIS / AI / LRS GPS snap API tại hub
- Gen Signed `*-demo.html` / DEM-*
- Parallel `open-api` controllers mới
- ERP.* / Finance fork

## 10. Open questions (Autopilot chốt · handoff SA/Design)

| ID | Severity | PO decision (autoApprove) |
|----|----------|---------------------------|
| GAP-MAS-API-01 | P1 | Cite **live** `integration/*` · SA sync CTX hub `open-api` → `integration` — **cấm** invent path song song |
| GAP-MAS-ROUTE-01 | P1 | Live `/mas/*` là SSOT UI · Design/CTX cập nhật docs `/master/*` → `/mas/*` |
| GAP-ORG-01 | accept | `keep_legacy` (seed II.1/II.6) — đã chốt child |
| GAP-ORG-02 | P2 | primary=`name` · secondary=`legacyAlias` (Design) |
| GAP-ROUTE-01..04 | P1–P2 | Giữ quyết định child road-route · không reopen hub |
| GAP-ATYPE-01..03 | P1 | Giữ child asset-type · Excel fingerprint later |
| GAP-PARTNER-01 | P1 | Code scheme → **SA** chốt (không block Design Kind B) |
| GAP-PARTNER-02 | P2 | partner ↔ org-unit link — P2 |
| provinceCode UNCLEAR | P2 | PO: giữ **`Text`** P1 · SA reopen nếu province master sẵn |

## 11. Handoff → Design

| Field | Value |
|-------|-------|
| feature | `master` |
| phase_from / phase_to | po → design |
| packKind | **`master`** (confirmed) |
| changeScope | `edit_page` |
| Context | CTX-HUB · CTX-ORG · CTX-RR · CTX-AT · CTX-PU · CTX-DRVN · INV-01 |
| Demo | **N/A** |
| data-import | SEED-ORG · `gov-vn` · DI-CUC2 archive only |
| controlHint | §5 + DA-HINT |
| realData | DA-REAL §A–§F |
| **§ Screens** | §7 · Pattern **Modal** · FormMode C/E/V/Copy · **devSlash=`/agent-dev`** |
| **grid_standard** | `po-design-grid-standard` + `filter-bar-layout-hard` (**REQUIRED**) |
| **report_standard** | n/a |
| **Leave** | `LeaveConfirmModal` (**REQUIRED**) |
| **peerStdUrl gợi ý** | `http://localhost:9318/mas/co-cau-tc` (org-unit live) · peers `/mas/tuyen-duong` · `/mas/loai-ts` · `/mas/doi-tac` |
| child STATUS | org-unit / road-route / asset-type / partner-unit = **done** — Design hub = parity + GAP-MAS docs · prototype reviewUrl child reuse |
| Open questions | GAP-MAS-API-01 · GAP-MAS-ROUTE-01 · GAP-PARTNER-01 |
| Blockers | không — đủ CTX + analy hash skip |
| Next | `/agent-design` · `design_confirm` (autoApprove=ON khi tới lượt) · **cấm** start Design trong task PO này |

**Design MUST:** Kind B A–D ×4 · Modal form-surface · icons SSOT · `shared-grid-example` · real_view_parity vs peerStdUrl · **cấm** DEM chrome.

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-po |
| skillVersion | 2026.08.25.02 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.29.03 |
| rulesVersion | 2026.08.29.28 |
| contentHash | sha256:2e7c4a265a296e1f7bb4cce472f58a1041fdf4ef1b63d088f80cde5012cb8128 |
| headerFingerprint | sha256:72758524d03f6b4b62ccf4262873b39bdd01601654b368e153678ecc84d1865d |
| generatedAt | 2026-08-29T06:35:00.000Z |
| versionGate | rechecked |
| taskId | task_94eba9c4 |

---
<!-- Version meta: skillId=agent-po skillVersion=2026.08.25.02 schemaVersion=1 workflowVersion=2026.08.29.03 rulesVersion=2026.08.29.28 versionGate=rechecked contentHash=sha256:2e7c4a265a296e1f7bb4cce472f58a1041fdf4ef1b63d088f80cde5012cb8128 -->
