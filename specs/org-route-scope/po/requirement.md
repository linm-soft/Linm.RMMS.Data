# PO — Requirement — org-route-scope (Phân khu lý trình · zone km)

| Field | Value |
|-------|-------|
| feature | `org-route-scope` |
| title | Phân khu lý trình (zone km) |
| this role | `po` · `/agent-po` |
| changeScope | **`new_page`** (STATUS + packet · autopilot confirm — lớp gán mới · **không** reopen CRUD peers `done`) |
| packKind | **`master`** (**PO confirm** · data-analy đề xuất · `master_catalog`) |
| Feature Kind | **B** — Catalog list A–D + form gán zone (+ nested đoạn child) |
| gap | `new_page` · GAP-ORS-* · API/DOMAIN-MAP **GAP** SA |
| mode | `feature_context` · **no Excel** · CTX + peer live · **DEM N/A** · sourceKind=`synthetic` |
| status | `confirmed` (autoApprove=ON · task `task_70c1a441`) |
| requestSource | queue CHAIN `/agent-qldb-workflow` · roleOnly=`po` · `/agent-po` · prior data_analy **confirmed** |
| autoApprove | **ON** — Design/SA/Review khi tới lượt → agent tự confirm · enqueue role kế. Role PO **không** gate confirm. |
| e2eQa | **ON** — queued tới `/agent-qa*` · **cấm** e2e / `yarn start:std` / `yarn build` ở role PO |
| prior · data_analy | status=`done`/`confirmed` · `specs/_data-analy/features/org-route-scope-control-hint.md` · `org-route-scope-real-data.md` · contentHash `sha256:81b3c9a520472625cc78375571d1d94ae34a6badc62a7a7bf21f0a2eac7894dc` · headerFingerprint `sha256:72758524d03f6b4b62ccf4262873b39bdd01601654b368e153678ecc84d1865d` · analy `task_8a74dc46` · **cấm** re-scan demo (**GAP-PO-DEMO-RESCAN-01**) |
| productRoot | `D:/AI-QLBD/Linm.RMMS.Data` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Master` |
| mfeStdRoute | `/mas/phan-khu` (CTX/STATUS đề xuất · SA chốt path) |
| mfeStdUrl | `http://localhost:9318/mas/phan-khu` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · domain **Integration** (đề xuất SA) · peers live `api/v1/integration/*` · zone assignment API = **GAP** · **cấm ERP.*** · **cấm** `api/v1/rmms/*` |
| domain | **Integration** |
| be_repo_confirm | `approve` (`Linm.RMMS.WebService`) |
| ui_repo_confirm | `approve` (`Linm.Web.RMMS.Master`) |
| controlHint | `D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/org-route-scope-control-hint.md` |
| realData | `D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/org-route-scope-real-data.md` |
| contentHash | `sha256:81b3c9a520472625cc78375571d1d94ae34a6badc62a7a7bf21f0a2eac7894dc` |
| headerFingerprint | `sha256:72758524d03f6b4b62ccf4262873b39bdd01601654b368e153678ecc84d1865d` |
| analyReuse | **hash skip** — **cấm** re-scan demo / crawl CTX / DemoRoot (**GAP-PO-DEMO-RESCAN-01**) |
| taskId | `task_70c1a441` · analy `task_8a74dc46` |
| updatedAt | `2026-08-30T11:05:00.000Z` |
| versionGate | `rechecked` |

**packKind confirm:** `master` (data-analy đề xuất · PO chốt). Kind **B** catalog trên MFE Master host `:9318` — **không** report pack · **không** Kind F map canvas · **không** Excel import wizard · **DEM N/A** (`master-catalog-no-demo.md`).

**Cấm:** implement · re-scan DEM · invent seed gán từ dump (**GOV-IMP-01/03**) · nhét km vào `OrgUnit` · mix Sở vào org tree · dùng `pavement-section` làm đoạn quản lý · invent zone API như live trước DOMAIN-MAP · ERP.* · `api/v1/rmms/*` · yarn build/e2e/start:std ở role PO · start role khác (**GAP-PKT-ROLE-01**).

## 1. Goal

Chốt requirement **new_page** lớp **gán zone km** (Khu REG-I…IV × tuyến chính × kmFrom–kmTo + hiệu lực) tách khỏi cây `org-unit` thuần và catalog `road-route` dump — trên MFE `Linm.Web.RMMS.Master` route đề xuất `/mas/phan-khu`. Cascade filter Cục→Khu→VP→Đơn vị→tuyến; SearchInput LRS 3 bước tuyến→zone→đoạn; đoạn child gán VP/SU hoặc `partner-unit`.

Persona: Admin hệ thống · Khu QLĐB · Văn phòng QLĐB · Ban QLDA (SU) · nhà thầu BDTX.

**≠** reopen CRUD `org-unit` / `road-route` / `partner-unit` (peers **done**) · **≠** `pavement-section` (Biểu 1 mặt đường).

## 2. Current → New (`new_page` · REQUIRED)

Nguồn SSOT: control-hint + real-data §A+§B · `analyzedAt=2026-08-30T10:43:51.475Z` · contentHash khớp STATUS · **không** crawl demo/CTX lại.

| Layer | Current (live 2026-08-30) | New (this pack · copy analy) |
|-------|---------------------------|------------------------------|
| Zone page MFE | **0** route `/mas/phan-khu` | Kind B list + form/grid gán · nested đoạn (**GAP-ORS-PAGE-01**) |
| Zone API / entity | **0** controller/entity · DOMAIN-MAP thiếu slug | SA `Schema_*` + DOMAIN-MAP row · **cấm** invent path live (**GAP-ORS-API-01** / **GAP-ORS-DM-01**) |
| Peer catalogs | org-unit / road-route / partner-unit **live** Integration | **giữ** — cite lookup only |
| Seed gán | dump **gap-no-source** | **0** invented-seed · config tay / file quản trị (**GAP-ORS-01**) |
| SearchInput org | live **mix** Sở (GAP-ORS-UI-01) | tree DRVN-only · partner SearchInput **tách** |
| OrgUnit / RoadRoute | **0** km FK trên OrgUnit · RoadRoute thiếu KmFrom/KmTo cột | Bảng gán zone riêng · km trên assignment (**GAP-ORS-03** / **GAP-ORS-04** → SA) |
| Dropdown BC «Tuyến» | chọn `KM0+000-*` như tuyến | Tuyến chính = QUOC_LO/HCM/CAO_TOC — **cấm** mã KM* (**GAP-ORS-05** / GAP-ROUTE-01/02) |

**Không đổi:** peer Kind B CRUD live · seed 60 DRVN · Integration prefixes peers · leave-confirm · toast not alert · DEM skip · **cấm** Slideout hồ sơ lớn trên catalog peer (&lt;10 fields → Modal).

## 3. DoD (đo được)

1. **packKind=`master`** confirmed · DEM **N/A** · UI chốt Design (prototype + reviewUrl).
2. List Kind **B** trên host `:9318` · route đề xuất `/mas/phan-khu` (SA chốt path) — Zone A title «Phân khu lý trình» — **cấm** Thêm mới trên A.
3. Zone B: `LinErpListFilterBar` 1 hàng wrap · **input + 🔍 cụm phải** — search · zone tabs/tree REG-I…IV · route SearchInput · isActive · **+ Tạo dòng gán** · Refresh · History · Schema config — filter đổi → page=1 · **cấm** nút Tìm riêng · **cấm** `ErpListHeaderFilters` / stack.
4. Zone C: `LinCatalogDataGrid` kéo cột ON · 1 dòng = Khu × tuyến × kmFrom–kmTo · hiệu lực · row menu Xem/Sửa/Copy/Lịch sử/Xóa.
5. Zone D: `LinCatalogListPagination` pageSize 50/100/200/500.
6. Zone F: `LinCatalogUiSchemaEditorModal` — **cấm** `configHint` · **cấm** `LinListTableConfigModal` thay schema.
7. Form dòng gán: Modal (&lt;10 fields) C/E/V/Copy · fields zoneOrgCode · routeCode · kmFrom · kmTo · effectiveFrom · effectiveTo · isActive · View=`readOnly` / `<dl>` — **cấm** Input disabled xám.
8. Đoạn child: nested list/tab ⊆ km zone · **vpOrgCode** bắt buộc (neo VP) · assigneeKind VP/SU/PARTNER · assigneeCode SearchInput org-unit **hoặc** partner-unit theo kind — **cấm** mix Sở vào org tree. Cấp trên xem hợp con (ô filter trống = mọi con).
9. Lookups peer live: org-unit / road-route / partner-unit — **cấm** free-text master · tuyến chính **cấm** `KM0+000-*`.
10. Empty/fail: empty copy VN · toast — **cấm** mock seed che API · **cấm** invent-seed · zone API chưa ship → toast «chưa cấu hình» (Design/Dev blocked đến SA).
11. Dirty → **`LeaveConfirmModal`** · xóa → **`useAlert` / `Modal`** — **cấm** `window.alert`/`confirm`.
12. Typography: label **13** · input D14/M16 (**GAP-TYP-01**).
13. Consumer cascade (Asset/Patrol/Report/Users) = handoff sau Signed — P1 note · **không** implement consumer CRUD trong pack này ngoài SearchInput pattern.
14. `yarn build` / e2e / `start:std` **chỉ** Dev/QA — PO **cấm**.

## 4. CTX / DEM / DI inventory (hash skip — đọc analy · **không** re-crawl)

| ID | Path | Loại | Bắt buộc |
|----|------|------|----------|
| CTX-01 | `docs/context/features/org-route-scope.md` | feature | P0 ✅ |
| CTX-DRVN | `docs/context/20-ORG-STRUCTURE-DRVN.md` | org SSOT | P0 ✅ |
| CTX-LRS | `docs/context/24-TUAN-DUONG-DUONG-BO.md` §6 | LRS | P0 ✅ |
| CTX-ORG | `docs/context/features/org-unit.md` | peer | P0 ✅ |
| CTX-RR | `docs/context/features/road-route.md` | peer | P0 ✅ |
| CTX-PU | `docs/context/features/partner-unit.md` | peer | P0 ✅ |
| CTX-PVT | `docs/context/features/pavement-section.md` | peer (≠ đoạn zone) | P1 |
| CTX-USR | `docs/context/features/users.md` · `login.md` | peer scope | P1 |
| CTX-IMP | `docs/context/features/import-gov-ssot.md` · `gov-vn` | import — **0** gán zone | P0 ✅ |
| CTX-HUB | `docs/context/features/master.md` | hub Master | P1 |
| SEED-ORG | `docs/context/seed/org-unit-seed.json` | 60 nodes · REG-I…IV | P0 ✅ |
| INV-01 | `specs/_data-analy/shared-catalogs/INVESTIGATE-CUC2.md` | investigate A | P0 ✅ |
| DA-HINT | `specs/_data-analy/features/org-route-scope-control-hint.md` | controlHint | P0 ✅ |
| DA-REAL | `specs/_data-analy/features/org-route-scope-real-data.md` | real-data §A+§B | P0 ✅ |
| DEM-* | — | — | **skip** (`packKind=master`) |
| DOMAIN | `Linm.RMMS.WebService/docs/DOMAIN-MAP.md` | Integration peers · **thiếu** slug | P0 — SA |
| MFE peers | `Linm.Web.RMMS.Master` `/mas/co-cau-tc` · `/mas/tuyen-duong` · `/mas/doi-tac` | live Kind B | P0 |
| BE peers | `…/Integration/Controllers/{OrgUnits,RoadRoutes,PartnerUnits}Controller.cs` | live | P0 |
| PROT-01 | `specs/org-route-scope/ui/prototype/` | Design gen | P0 từ Design |

## 5. Control hints (copy data-analy — Design chốt control-map)

> SSOT: `data-analy-control-hint.md` · typography label **13** · input D14/M16 (**GAP-TYP-01**).

### 5a. List filters (Zone B)

| Field key | Label | controlHint | catalogKind | Notes |
|-----------|-------|-------------|-------------|-------|
| search | Tìm kiếm | `SearchTextInput` | text | mã tuyến · tên · zone code · **L1** |
| cucOrgCode | Cục | **không ô** | **org-unit** | implicit Cục QLĐB — **cấm** hiện bar |
| zoneOrgCode | Khu | `SearchInput` tree **trong bar** | **org-unit** | leaf `REG-I`…`REG-IV` — **cấm** tabs ngoài bar · **L1** |
| vpOrgCode | Văn phòng | `SearchInput` | **org-unit** | ⊆ Khu · **L1** |
| assigneeCode | Đơn vị | `SearchInput` | SU / partner | **L1** |
| routeCode | Tuyến chính | `SearchInput` | **road-route** | ưu tiên QUOC_LO / HCM / CAO_TOC — **cấm** `KM0+000-*` · **L2** |
| isActive | Hiệu lực | `Dropdown` / Switch filter | — | optional |
| effectiveAt | Tại thời điểm | `Date` | — | filter cửa sổ hiệu lực (P1) |

### 5b. Form / dòng gán zone (P0)

| Field key | Label | controlHint | required | Notes |
|-----------|-------|-------------|----------|-------|
| zoneOrgCode | Khu QLĐB | `SearchInput` tree | * | catalogKind=org-unit · kind REG leaf I–IV · chọn xong **mã + tên** (dual-box) |
| routeCode | Tuyến chính | `SearchInput` | * | catalogKind=road-route · exclude NHANH/TRANH/GOM mã KM* · chọn xong **mã + tên** |
| kmFrom | Km từ | `Number` LRS | * | ≥ 0 |
| kmTo | Km đến | `Number` LRS | * | kmTo > kmFrom · ⊆ extent tuyến khi có |
| effectiveFrom | Hiệu lực từ | `Date` / Datetime UTC | * | «sẽ thay đổi» — bắt buộc |
| effectiveTo | Hiệu lực đến | `Date` / Datetime UTC | * | |
| isActive | Hiệu lực | `Switch` | | |

### 5c. Đoạn child (P0)

| Field key | Label | controlHint | required | Notes |
|-----------|-------|-------------|----------|-------|
| parentAssignmentId | Gán zone cha | hidden | * | ⊆ zone km |
| kmFrom · kmTo | Km đoạn | `Number` | * | ⊆ parent km |
| assigneeKind | Loại đơn vị | `Dropdown` | * | LOOKUP: `VP` · `SU` · `PARTNER` |
| vpOrgCode | Văn phòng | `SearchInput` | * | org-unit kind VP · `parentCode` = zone · kind VP → = assigneeCode |
| assigneeCode | Đơn vị | `SearchInput` | * | `org-unit` (SU) **hoặc** `partner-unit` theo kind — **cấm** mix Sở vào org tree |

### 5d. Cascade filter consumer (Asset / Patrol / Report / Users — handoff sau Signed)

| Field key | Label | controlHint | catalogKind | Notes |
|-----------|-------|-------------|-------------|-------|
| cucFilter | Cục | `SearchInput` tree | **org-unit** | root DRVN |
| zoneFilter | Khu | `SearchInput` tree | **org-unit** | REG-I…IV · cascade từ Cục |
| vpFilter | Văn phòng | `SearchInput` tree | **org-unit** | VP-*.* dưới Khu |
| unitFilter | Đơn vị | `SearchInput` | **org-unit** (SU) **hoặc** **partner-unit** | SearchInput **tách** — GAP-ORS-UI-01 |
| routeFilter | Tuyến | `SearchInput` | **road-route** | tuyến chính |
| zoneOnRoute | Zone trên tuyến | `SearchInput` | org-route-scope | derived từ gán · 3 bước LRS |
| segmentOnZone | Đoạn | `SearchInput` | org-route-scope-segment | ⊆ zone |

### 5e. Real-data bind summary (copy §A+§B — cấm invent path)

| Catalog / surface | Prefix | Note |
|-------------------|--------|------|
| org-unit **live** | `GET …/web-bff/api/v1/integration/org-units{/tree,/search,}` | FE `src/services/orgUnit/endpoint.ts` |
| road-route **live** | `…/integration/road-routes{/search,}` | FE `src/services/roadRoute/endpoint.ts` |
| partner-unit **live** | `…/integration/partner-units{/search,}` | FE `src/services/partnerUnit/endpoint.ts` |
| zone assignment | **GAP** SA — đề xuất Integration resource (vd `org-route-scopes` / `zone-route-assignments`) | unique `(ZoneOrgCode, RouteCode, KmFrom, KmTo, EffectiveFrom)` · **cấm** invent như live |
| đoạn child | **GAP** nested dưới assignment | ⊆ parent km |

`map: none` · `progress: none` (Type A · `isActive` + effectiveFrom/To soft window · overlap = SA **GAP-ORS-08**).

## 6. Grid list AC (REQUIRED · Kind B / master)

> Paste `po-design-grid-standard.md` · filter HARD `filter-bar-layout-hard.md` — **GAP-PO-GRID-01**.

| Area | Acceptance (Design phải prototype / parity peer Master) |
|------|-------------------------------------|
| **Shell A–D** | Header · Toolbar · Grid card · Pagination footer (+ Zone F config) |
| **Toolbar FULL** | Làm mới · Lịch sử · Sửa config (`fa-cog`) · View/Edit/Delete theo chọn · **+ Tạo dòng gán** — **cấm** Thêm mới trên Zone A |
| **Grid menu** | Row menu: Xem/Sửa/Sao chép/Lịch sử/Xóa · help «nhấn đúp / Ctrl+chuột phải» |
| **Config** | `LinCatalogUiSchemaEditorModal` (List/width/filter/sort) · kéo cột default ON — **cấm** Zone F-only `LinListTableConfigModal` · **cấm** `configHint` |
| **Grid flow** | Sort cột · filter cột (panel: tìm · chọn tất cả · Đã chọn N · Xác nhận) · chọn dòng |
| **Filter Zone B** | **`LinErpListFilterBar`** · 1 hàng wrap · **input + 🔍 cụm phải** — **không** nút Tìm · **cấm** `ErpListHeaderFilters` / stack |
| **Form pair** | Create/Edit/View/Copy → **Modal** (`ui-pattern-decision` · &lt;10 fields dòng gán) · Design clone `form-surface-prototype` Modal · nested đoạn = tab/panel trong Modal hoặc nested list (Design chốt) |
| **Tree?** | Zone tabs/tree **REG-I…IV** (filter) — **không** tree CRUD OrgUnit trên page này |
| **Empty/fail** | empty copy VN · toast — **cấm** fake row / invent-seed |
| **SSOT Design** | `shared-grid-example` · `list-shell-prototype` · `po-design-grid-standard` |
| **SSOT TL/Dev** | `tl-design-grid-component-map` · `tl-grid-full-flow` · `tl-filter-bar-task` (T-UI-FILTER-01) |
| **Skip chrome** | GOVOne · Signed demo · hub nav skin demo |

### Report AC

**N/A** — packKind `master` · **không** report/dashboard (**GAP-PO-RPT-01** không áp).

## 7. Screens (REQUIRED)

| Surface | Pattern | FormMode | URL | Actions | `devSlash` |
|---------|---------|----------|-----|---------|------------|
| S-LIST | Kind **B** catalog A–D+F | filter | `/mas/phan-khu` | search · zone/route filter · Tạo dòng gán · Refresh · Delete · config · History | `/agent-dev` |
| S-FORM-CREATE | **Modal** (&lt;10 fields) | create | overlay | Lưu · Hủy · leave-confirm · footer | `/agent-dev` |
| S-FORM-EDIT | **Modal** | edit | overlay | Lưu · Hủy · footer | `/agent-dev` |
| S-FORM-VIEW | **Modal** | view | overlay | readOnly / `<dl>` · **không** disabled xám | `/agent-dev` |
| S-FORM-COPY | **Modal** | create (copy) | overlay | POST new · clear id | `/agent-dev` |
| S-SEG-CHILD | Nested list/tab trong form | C/E | overlay | ⊆ km zone · assignee SearchInput | `/agent-dev` |
| S-ACT-DELETE | Confirm modal | — | — | soft delete / isActive | `/agent-dev` |
| S-HIST | `LinCatalogHistoryModal` | — | — | stub OK nếu API chưa có · **cấm** invent History path | `/agent-dev` |
| S-CONSUMER | Cascade filter (peer pages) | filter | peer routes | LRS 3 bước — **OUT** deep CRUD this pack | `/agent-dev` |

**devSlash:** `/agent-dev` (list + Modal · **không** oms-map / ai-detect / camera).

**Cấm** Full page `/new`·`:id` cho dòng gán (&lt;10 fields) · **cấm** Slideout hồ sơ lớn · **cấm** map canvas · **cấm** GOVOne chrome.

## 8. Leave / alert (REQUIRED)

| Case | Behavior | Cấm |
|------|----------|-----|
| Form dirty → đóng Modal / Esc / đổi mode | **`LeaveConfirmModal`** (`/implement-show-leave-confirm` · Modal = `useLeaveConfirm`) | `window.confirm` / native dialog |
| Xóa / chặn thao tác nguy hiểm | **`useAlert` / `Modal`** | `window.alert` |
| API fail / lookup fail | toast · empty | alert blocking |
| Zone API chưa ship | toast «chưa cấu hình» · empty grid | mock rows / invent-seed |
| Overlap km / validation 422 | toast business message | silent fail |
| History | `LinCatalogHistoryModal` | custom history alert · invent API |
| Lookup peer no match | SearchInput empty · save 422 | free-text substitute master |

Thiếu → **GAP-PO-LEAVE-01**.

## 9. Open questions — Autopilot chốt (UNCLEAR data-analy)

| ID | Severity | PO decision (autoApprove) |
|----|----------|---------------------------|
| GAP-ORS-01 | P0 | Nguồn gán = **config tay / file quản trị** · **cấm** invent-seed từ dump / `manage_unit` Sở |
| GAP-ORS-02 / GAP-ORS-UI-01 | P0 | Tree `org-unit` **chỉ** DRVN · Sở/BOT = `partner-unit` SearchInput tách — P1 peer filter fix |
| GAP-ORS-03 | P0 | Bảng gán zone **riêng** — **không** nhét km vào `OrgUnit` |
| GAP-ORS-04 | P1 | KmFrom/KmTo: **ưu tiên trên assignment** P0 · cột catalog RoadRoute = **SA** quyết (không block Design Kind B) |
| GAP-ORS-05 | P1 | Tuyến chính = QUOC_LO/HCM/CAO_TOC · **cấm** chọn `KM0+000-*` trên form gán |
| GAP-ORS-06 | P1 | Đoạn quản lý **≠** `pavement-section` |
| GAP-ORS-07 | P1 | `UserRoute`/`ContractRoute` — **OUT** deep CRUD this pack · cite peer login SPEC |
| GAP-ORS-08 | P2 | Overlap km cùng tuyến + cửa sổ hiệu lực → **SA** validation rule |
| GAP-ORS-DM-01 / GAP-ORS-API-01 | P0 | SA thêm DOMAIN-MAP slug + `Schema_*` · **cấm** Dev invent path trước map |
| GAP-ORS-PAGE-01 | P0 | Design/Dev ship `/mas/phan-khu` Kind B |
| packKind | — | **Confirm `master`** |
| Form pattern | — | **Modal** dòng gán (&lt;10) · nested đoạn Design chốt tab/panel |
| Route path | — | Đề xuất `/mas/phan-khu` · **SA chốt** nếu lệch shell |

UNCLEAR field path/version = **none** sau autopilot chốt — không AskQuestion (autoApprove=ON).

## 10. Out of scope (this pack)

- Re-CRUD `org-unit` / `road-route` / `partner-unit`
- Invent seed gán từ CSV / `manage_unit` Sở
- Deep UserRoute/ContractRoute entity ship (peer login)
- Report pack / Kind F map / LRS GPS snap API
- Excel import wizard gán zone
- Auth NuGet `[RequirePermission]` wire full
- Gen Signed `*-demo.html` / DEM-*
- ERP.* / Finance fork / `api/v1/rmms/*`
- `yarn build` / e2e / `start:std` ở role PO
- Start role Design/SA/Dev trong cùng task (**GAP-PKT-ROLE-01**)
- Re-scan demo HTML / crawl DemoRoot (**GAP-PO-DEMO-RESCAN-01**)

## 11. Handoff → Design (`/agent-design`)

| Field | Value |
|-------|-------|
| feature | `org-route-scope` |
| phase_from / phase_to | po → design |
| packKind confirm | **`master`** |
| changeScope | `new_page` |
| Kind / surfaces | B catalog A–D+F + Modal form dòng gán + nested đoạn |
| Context | CTX-01 · CTX-DRVN · CTX-LRS · CTX-ORG · CTX-RR · CTX-PU · INV-01 · DA-HINT · DA-REAL |
| Demo | **N/A** (`master-catalog-no-demo.md`) |
| controlHint | §5 + DA-HINT — **cấm** đoán Text vs SearchInput |
| realData | DA-REAL §A–§G |
| **§ Screens** | §7 · Pattern **Modal** · FormMode C/E/V/Copy · nested đoạn · **devSlash=`/agent-dev`** |
| **grid_standard** | `po-design-grid-standard` + `filter-bar-layout-hard` (**REQUIRED**) |
| **report_standard** | n/a |
| **Leave** | `LeaveConfirmModal` (**REQUIRED**) |
| Prototype | content-only · clone `shared-grid-example` · **skip** note/sidebar/menu/chrome demo |
| reviewUrl | bắt buộc · `autoApprove=ON` → agent tự confirm khi tới lượt |
| peerStdUrl gợi ý | `http://localhost:9318/mas/co-cau-tc` · `/mas/tuyen-duong` · `/mas/doi-tac` |
| mfeStdUrl | `http://localhost:9318/mas/phan-khu` |
| mfeStdRoute | `/mas/phan-khu` |
| BE | peers Integration live · zone API **GAP** SA — **cấm** invent ERP / rmms |
| Open questions | GAP-ORS-01/03/API-01/DM-01 · GAP-ORS-UI-01 · GAP-ORS-04/08 → SA |
| Blockers | Zone API/entity **GAP** đến SA — Design prototype **không** blocked · Dev wire CRUD **blocked** đến DOMAIN-MAP + Schema |
| Next | `/agent-design` khi tới lượt · **cấm** start Design trong task PO này |
| e2e | queued `/agent-qa*` only |

**Design MUST:** Kind B A–D · Modal form-surface · icons SSOT · `shared-grid-example` · real_view_parity vs peerStdUrl Master · zone tabs REG-I…IV · **cấm** DEM chrome · **cấm** mix Sở vào org SearchInput.

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-po |
| skillVersion | 2026.08.25.02 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.29.04 |
| rulesVersion | 2026.08.30.5 |
| generatedAt | 2026-08-30T11:05:00.000Z |
| versionGate | rechecked |
| contentHashPriorDataAnaly | sha256:81b3c9a520472625cc78375571d1d94ae34a6badc62a7a7bf21f0a2eac7894dc |
| headerFingerprintPrior | sha256:72758524d03f6b4b62ccf4262873b39bdd01601654b368e153678ecc84d1865d |
| orchestratorSkillVersion | 2026.08.29.04 |
| orchestratorWorkflowVersion | 2026.08.29.04 |
| orchestratorRulesVersion | 2026.08.29.32 |
| dataAnalySkillVersion | 2026.08.25.01 |
| dataAnalyWorkflowVersion | 2026.08.29.04 |
| dataAnalyRulesVersion | 2026.08.30.5 |
| taskId | `task_70c1a441` |

---
<!-- Version meta: skillId=agent-po skillVersion=2026.08.25.02 schemaVersion=1 workflowVersion=2026.08.29.04 rulesVersion=2026.08.30.5 versionGate=rechecked contentHashPriorDataAnaly=sha256:81b3c9a520472625cc78375571d1d94ae34a6badc62a7a7bf21f0a2eac7894dc taskId=task_70c1a441 -->
