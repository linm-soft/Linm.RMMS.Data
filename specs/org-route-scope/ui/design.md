# Design — org-route-scope (Phân khu lý trình · zone km)

| Field | Value |
|-------|-------|
| feature | `org-route-scope` |
| title | Phân khu lý trình (zone km) |
| this role | `design` · `/agent-design` |
| changeScope | **`new_page`** |
| packKind | **`master`** (PO confirmed) |
| Feature Kind | **B** — Catalog list A–D+F + Modal form dòng gán + nested đoạn tab |
| status | `confirmed` (autoApprove=ON · `design_confirm=approve`) |
| design_confirm | `approve` · `2026-08-30T11:20:00.000Z` |
| demo | **N/A** (`master-catalog-no-demo.md`) — **cấm** DEM-* / demo-json SSOT |
| productRoot | `D:/AI-QLBD/Linm.RMMS.Data` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Master` |
| ui_repo_confirm | `approve` (`Linm.Web.RMMS.Master`) |
| mfeStdRoute | `/mas/phan-khu` (SA chốt path nếu lệch shell) |
| mfeStdUrl | `http://localhost:9318/mas/phan-khu` |
| peerStdUrl | `http://localhost:9318/mas/co-cau-tc` · `/mas/tuyen-duong` · `/mas/doi-tac` |
| real_view_parity | **v1** |
| shared_grid_example | **v1** |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · peers live Integration · zone assignment API = **GAP** SA · **cấm ERP.*** · **cấm** `api/v1/rmms/*` |
| domain | **Integration** (đề xuất SA) |
| controlHint | `D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/org-route-scope-control-hint.md` |
| realData | `D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/org-route-scope-real-data.md` |
| po | `D:/AI-QLBD/Linm.RMMS.Data/specs/org-route-scope/po/requirement.md` (confirmed) |
| contentHash | `sha256:81b3c9a520472625cc78375571d1d94ae34a6badc62a7a7bf21f0a2eac7894dc` |
| headerFingerprint | `sha256:72758524d03f6b4b62ccf4262873b39bdd01601654b368e153678ecc84d1865d` |
| analyReuse | **hash skip** — **cấm** re-scan demo / crawl CTX (**GAP-DES-DEMO-RESCAN-01**) |
| autoApprove | **ON** |
| e2eQa | **ON** (queued — chỉ `/agent-qa*` chạy E2E) |
| taskId | `task_4126a205` |
| priorTask | `task_70c1a441` (po) · analy `task_8a74dc46` |
| updatedAt | `2026-08-30T11:20:00.000Z` |
| versionGate | `rechecked` |

**Cấm:** Dev/BE · re-scan DEM · invent zone API như live · Dropdown consumer thay SearchInput master · mix Sở vào org tree · invent-seed dump · ERP.* · yarn build/e2e/start:std · start role khác (**GAP-PKT-ROLE-01**).

## 0. Context & inventory (hash skip · copy analy/PO)

| ID | Path | Loại | Bắt buộc |
|----|------|------|----------|
| CTX-01 | `docs/context/features/org-route-scope.md` | feature | P0 ✅ |
| CTX-DRVN | `docs/context/20-ORG-STRUCTURE-DRVN.md` | org SSOT | P0 ✅ |
| CTX-LRS | `docs/context/24-TUAN-DUONG-DUONG-BO.md` §6 | LRS | P0 ✅ |
| CTX-ORG | `docs/context/features/org-unit.md` | peer | P0 ✅ |
| CTX-RR | `docs/context/features/road-route.md` | peer | P0 ✅ |
| CTX-PU | `docs/context/features/partner-unit.md` | peer | P0 ✅ |
| SEED-ORG | `docs/context/seed/org-unit-seed.json` | 60 · REG-I…IV | P0 ✅ |
| INV-01 | `specs/_data-analy/shared-catalogs/INVESTIGATE-CUC2.md` | investigate A | P0 ✅ |
| DA-HINT | `specs/_data-analy/features/org-route-scope-control-hint.md` | controlHint | P0 ✅ |
| DA-REAL | `specs/_data-analy/features/org-route-scope-real-data.md` | real-data §A+§B | P0 ✅ |
| PO-01 | `specs/org-route-scope/po/requirement.md` | Grid AC · Screens · Leave | P0 ✅ |
| DEM-* | — | — | **skip** (`packKind=master`) |
| DOMAIN | `Linm.RMMS.WebService/docs/DOMAIN-MAP.md` | thiếu slug | P0 — SA |
| PROT-01 | `specs/org-route-scope/ui/prototype/org-route-scope-list-prototype.html` | Design gen | P0 ✅ |

Persona: Admin · Khu QLĐB · Văn phòng · Ban QLDA (SU) · nhà thầu BDTX.

**≠** reopen CRUD `org-unit` / `road-route` / `partner-unit` · **≠** `pavement-section` làm đoạn quản lý.

### § Delta Current vs New (`new_page`)

| Area | Current (live 2026-08-30) | New (this Design) | Action |
|------|---------------------------|-------------------|--------|
| Zone page MFE | **0** `/mas/phan-khu` | Kind B list + Modal gán + nested đoạn | ship Design/Dev |
| Zone API | **0** · DOMAIN-MAP thiếu | SA `Schema_*` + DOMAIN-MAP · **cấm** invent live | handoff SA |
| Control | analy controlHint | **Chốt** control-map = controlHint | chốt |
| SearchInput org | live mix Sở | Tree DRVN-only · partner tách | GAP-ORS-UI-01 note |
| Seed gán | dump gap-no-source | **0** invent-seed · proto rows = UX only | keep |

## 1. Kind + UI pattern (HARD)

| | |
|--|--|
| Feature Kind | **B** |
| List pattern | `LinPageLayout` kind=catalog + CatalogListShell · **DES-GRID-A…D** (+ C2a/C3/F/H/Z) |
| Zone filter | Tabs **REG-I…IV** (+ Tất cả) — **không** tree CRUD OrgUnit trên page |
| Form pattern | **Modal** (`ui-pattern-decision` · &lt;10 fields dòng gán) · `formSurface: modal` · **`data-form-cols="2"`** |
| Nested đoạn | Tab **Đoạn con** trong Modal · ⊆ km zone |
| Filter | **`LinErpListFilterBar`** · 1 hàng wrap · **input + 🔍 cụm phải** — **cấm** nút Tìm riêng · **cấm** `ErpListHeaderFilters` / stack |
| Toolbar | FULL · `erp-control-icon-map` §0 · `editConfig`=`fas fa-cog` · **+ Tạo dòng gán** Zone B phải — **cấm** Thêm mới Zone A |
| Config | **`LinCatalogUiSchemaEditorModal`** FULL — **cấm** `configHint` · **cấm** Zone F-only `LinListTableConfigModal` |
| History | **`LinCatalogHistoryModal`** — stub OK · **cấm** invent History path |
| Leave | Dirty → **`LeaveConfirmModal`** — **cấm** native `alert`/`confirm` (**GAP-DES-LEAVE-01**) |
| Alert | Xóa → **`useAlert` / `Modal`** |
| Typography | label **13** · input D14/M16 (**GAP-TYP-01**) |
| Map | **none** |
| Routes | `/mas/phan-khu` (đề xuất · SA chốt) |
| Skip chrome | GOVOne · Signed demo · hub nav skin demo |

## 2. Screens (REQUIRED · `devSlash=/agent-dev`)

| Screen | Route / surface | Pattern | FormMode | Zones | formSurface / cols | `devSlash` |
|--------|-----------------|---------|----------|-------|--------------------|------------|
| S-LIST | `/mas/phan-khu` | Kind B A–D+F | filter | DES-GRID-A · B · C0–C3 · D · F · H · ORG-CASCADE | — | `/agent-dev` |
| S-FORM-CREATE | Modal overlay | **Modal** | create | DES-GRID-Z · tab gán | modal · `data-form-cols="2"` | `/agent-dev` |
| S-FORM-EDIT | Modal | **Modal** | edit | Z | modal · `2` | `/agent-dev` |
| S-FORM-VIEW | Modal | **Modal** | view | Z | readOnly · **không** disabled xám | `/agent-dev` |
| S-FORM-COPY | Modal | **Modal** | create (copy) | Z | clear id · POST new | `/agent-dev` |
| S-SEG-CHILD | Tab trong Modal | nested | C/E | Z tab Đoạn | SearchInput assignee | `/agent-dev` |
| S-ACT-DELETE | Confirm modal | — | — | DES-ALERT | soft delete / isActive | `/agent-dev` |
| S-HIST | History modal | — | — | DES-GRID-H | stub OK | `/agent-dev` |
| S-CONSUMER | peer pages | cascade | filter | — | LRS 3 bước — **OUT** deep CRUD this pack | `/agent-dev` |

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

### 3a. List filters (Zone B / C1)

| Field key | Label VN | Control | catalogKind | Notes |
|-----------|----------|---------|-------------|-------|
| search | Tìm kiếm | `SearchTextInput` | text | min **280px** · field **320px** · **L1** |
| cucOrgCode | Cục | **không ô** | **org-unit** | implicit Cục QLĐB (`DRVN`) — **cấm** hiện trên bar |
| zoneOrgCode | Khu | **`SearchInput`** REG leaf | **org-unit** | trong bar · `?zoneOrgCode=` · **cấm** tabs ngoài bar · **L1** |
| vpOrgCode | Văn phòng | **`SearchInput`** VP | **org-unit** | `parentCode`=Khu · **L1** |
| assigneeCode | Đơn vị | **`SearchInput`** | SU / partner | **L2** · dropdown min **32rem** |
| routeCode | Tuyến chính | `SearchInput` | **road-route** | ưu tiên QUOC_LO/HCM/CAO_TOC — **cấm** `KM0+000-*` · **L2** |
| isActive | Hiệu lực | `Dropdown` | — | Tất cả / Đang / Ngừng · **L2** |
| effectiveAt | Tại thời điểm | `Date` | — | P1 optional |

### 3b. Form / dòng gán zone (P0)

| uiField | Label VN | Control | Required | Notes |
|---------|----------|---------|----------|-------|
| zoneOrgCode | Khu QLĐB | **SearchInput** tree | * | catalogKind=org-unit · REG leaf I–IV · **dual-box** trái mã / phải tên (`primaryDisplay=code` · `secondaryDisplay=name`) — **GAP-ORS-LKP-DISPLAY-01** |
| routeCode | Tuyến chính | **SearchInput** | * | road-route · exclude NHANH/TRANH/GOM mã KM* · **dual-box** mã+tên sau chọn |
| kmFrom | Km từ | `Number` LRS | * | ≥ 0 |
| kmTo | Km đến | `Number` LRS | * | kmTo > kmFrom |
| effectiveFrom | Hiệu lực từ | `Date` / Datetime | * | bắt buộc |
| effectiveTo | Hiệu lực đến | `Date` / Datetime | * | |
| isActive | Hiệu lực | `Switch` | | |

### 3c. Đoạn child (P0 · tab Modal)

| uiField | Label VN | Control | Required | Notes |
|---------|----------|---------|----------|-------|
| parentAssignmentId | Gán zone cha | hidden | * | ⊆ zone km |
| kmFrom · kmTo | Km đoạn | `Number` | * | ⊆ parent |
| vpOrgCode | Văn phòng | **SearchInput** | * | org-unit kind=`VP` · `parentCode` = zone · kind VP → = assigneeCode |
| assigneeKind | Loại đơn vị | `Dropdown` | * | `VP` · `SU` · `PARTNER` |
| assigneeCode | Đơn vị | **SearchInput** | * | org-unit (SU) **hoặc** partner-unit khi kind ≠ VP — **cấm** mix Sở vào org tree · dual-box mã+tên |

### 3d. Consumer cascade (handoff sau Signed — P1 note)

| Field key | Label VN | Control | catalogKind |
|-----------|----------|---------|-------------|
| cucFilter | Cục | **không ô** | implicit Cục QLĐB (`DRVN`) — **cấm** hiện bar |
| zoneFilter | Khu | SearchInput | org-unit `REG-I`…`IV` — **trong bar** · **cấm** tabs |
| vpFilter | Văn phòng | SearchInput | org-unit VP — live có |
| unitFilter | Đơn vị | SearchInput tách | org-unit (SU) \| partner-unit — live có |
| routeFilter | Tuyến | SearchInput | road-route mẹ — live có |
| segmentOnZone | Đoạn | SearchInput | segment ⊆ tuyến — **GAP-ORS-CASCADE-01** live = tab form |

### 3e. Real-data bind (copy §B — cite live · zone = GAP)

| Catalog / surface | Prefix | Note |
|-------------------|--------|------|
| org-unit **live** | `GET …/web-bff/api/v1/integration/org-units{/tree,/search,}` | FE `src/services/orgUnit/endpoint.ts` |
| road-route **live** | `…/integration/road-routes{/search,}` | FE `src/services/roadRoute/endpoint.ts` |
| partner-unit **live** | `…/integration/partner-units{/search,}` | FE `src/services/partnerUnit/endpoint.ts` |
| zone assignment | **GAP** SA — đề xuất Integration resource | unique `(ZoneOrgCode, RouteCode, KmFrom, KmTo, EffectiveFrom)` |
| đoạn child | **GAP** nested | ⊆ parent km |

Empty/fail: empty copy VN · toast — **cấm** mock seed che API · zone API chưa ship → toast «chưa cấu hình».

### List columns (header VN)

STT · □ · **Khu** · **Tuyến** · **Km từ** · **Km đến** · **HL từ** · **HL đến** · **Trạng thái** · ⋯

## 4. Grid list AC (parity · Kind B)

| Area | Design DoD |
|------|------------|
| **Shell** | DES-GRID-A Header · B Toolbar · C0–C3 Grid · D Pagination · ORG-CASCADE (2 line) |
| **Toolbar FULL** | Làm mới · Lịch sử · Sửa config · Xem/Sửa/Xóa theo chọn · **+ Tạo dòng gán** |
| **Row menu C3** | Xem · Sửa · Sao chép · Lịch sử · Xóa · help «Nhấn đúp · Ctrl + chuột phải» |
| **Config F** | `LinCatalogUiSchemaEditorModal` · kéo cột default ON |
| **Filter C1** | `LinErpListFilterBar` **3–3** · search 320px · dropdown 32rem · 🔍 **cụm phải** |
| **Form Z** | Modal 2 cột · footer Hủy/Lưu · View=`readOnly` · tab Đoạn con |
| **Leave** | LeaveConfirmModal overlay |
| **SSOT** | `shared-grid-example` · `list-shell-prototype` · `form-surface-prototype` · `erp-control-icon-map` §0 |

## 5. Prototype — Shared grid (REQUIRED)

| | |
|--|--|
| Base | `agent-design/example/shared-grid-example.html` (+ Master Kind B parity) |
| Artifact | `ui/prototype/org-route-scope-list-prototype.html` |
| Zones | DES-GRID-A · B · C0 · C1 · C2 · C2a · C3 · D · F · H · Z · ORG-CASCADE · DES-LEAVE · DES-ALERT |
| formSurface | modal · `data-form-cols="2"` |
| Leave | LeaveConfirmModal (`data-des-id=DES-LEAVE`) |
| Scope | content-only — **cấm** GOVOne / Hồ sơ / Đổi MK |
| `shared_grid_example` | v1 |
| `real_view_parity` | v1 |
| **peerStdUrl** | `http://localhost:9318/mas/co-cau-tc` |
| **reviewUrl** | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/org-route-scope/ui/prototype/org-route-scope-list-prototype.html` |
| Mock rows | UX structure only — **cấm** treat as invent-seed / dump |

### Wire Modal (2 cột + tab đoạn)

```
[title] Tạo/Sửa/Xem dòng gán · badge · ✕
[tabs] Dòng gán | Đoạn con
[fields data-form-cols="2"]
  [Khu QLĐB* SearchInput dual-box mã|tên span2]
  [Tuyến chính* SearchInput dual-box mã|tên span2]
  [Km từ*] [Km đến*]
  [HL từ*] [HL đến*]
  [Hiệu lực Switch]
[tab Đoạn] km · assigneeKind Dropdown · assigneeCode SearchInput · nested table
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
| create | `fas fa-plus` | Tạo dòng gán | Tạo dòng gán |
| search (filter) | `fas fa-search` | (aria) | trong SearchTextInput |
| cancel | — | Hủy | Hủy |
| save | — | Lưu | Lưu |

## 6. Leave / alert

| Case | Behavior | Cấm |
|------|----------|-----|
| Form dirty → ✕ / Hủy / Esc | **LeaveConfirmModal** | `window.confirm` |
| Xóa / nguy hiểm | **useAlert / Modal** | `window.alert` |
| API / lookup fail | toast · empty | alert blocking |
| Zone API chưa ship | toast «chưa cấu hình» · empty grid | mock rows / invent-seed |
| Overlap km / 422 | toast business | silent fail |
| History | LinCatalogHistoryModal | invent History API |

## 7. Open questions (handoff SA — Design prototype **không** blocked)

| ID | Severity | Design decision |
|----|----------|-----------------|
| GAP-ORS-01 | P0 | Nguồn gán = config tay / file quản trị · **cấm** invent-seed |
| GAP-ORS-03 / API-01 / DM-01 | P0 | Bảng gán + DOMAIN-MAP + Schema → **SA** · Dev wire **blocked** |
| GAP-ORS-UI-01 | P0 | org SearchInput DRVN-only · partner tách — P1 peer fix |
| GAP-ORS-LKP-DISPLAY-01 | P0 | SearchInput chọn xong **ô mã + ô tên** — `getPrimaryDisplay=code` · `getSecondaryDisplay=name` · form `primaryDisplay`/`secondaryDisplay` · **cấm** chỉ fill mã |
| GAP-ORS-04 | P1 | Km trên assignment P0 · cột catalog RoadRoute = SA |
| GAP-ORS-08 | P2 | Overlap rule → SA validation |
| Route path | — | `/mas/phan-khu` đề xuất · SA chốt nếu lệch |

## 8. Handoff → SA

| Field | Value |
|-------|-------|
| feature | `org-route-scope` |
| phase_from / phase_to | design → sa |
| packKind | **master** |
| changeScope | `new_page` |
| Kind / Form | B · **Modal** · `data-form-cols="2"` · nested đoạn tab |
| zone ids | DES-GRID-A…D · C2a · C3 · F · H · Z · ORG-CASCADE · DES-LEAVE |
| Screens | §2 · `devSlash=/agent-dev` |
| control-map | §3 = controlHint chốt |
| realData | DA-REAL §A–§G |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/org-route-scope/ui/prototype/org-route-scope-list-prototype.html` |
| peerStdUrl | `http://localhost:9318/mas/co-cau-tc` |
| mfeStdUrl | `http://localhost:9318/mas/phan-khu` |
| Next | `/agent-sa` · **cấm** start SA trong task Design này |
| Blockers | Zone API/entity GAP → Dev wire CRUD blocked · Design PASS |

`design_confirm` = **approve** — autoApprove **ON** · agent tự confirm (`task_4126a205`). Chain **SA** enqueue (roles sau = pending đến lượt). **Cấm** Dev/BE/e2e trong task này.

## DoR checklist (PASS)

| Check | Pass |
|-------|------|
| Kind B + Form Modal + `data-form-cols="2"` | ✅ |
| Screens · C/E/V/Copy · nested đoạn | ✅ |
| DES-GRID-A…D (+ C2a/C3/F/H/Z) | ✅ |
| Toolbar FULL · icons §0 · Tạo dòng gán Zone B | ✅ |
| Filter LinErpListFilterBar · input cụm phải | ✅ |
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
| workflowVersion | 2026.08.29.04 |
| rulesVersion | 2026.08.30.5 |
| contentHash | sha256:81b3c9a520472625cc78375571d1d94ae34a6badc62a7a7bf21f0a2eac7894dc |
| headerFingerprint | sha256:72758524d03f6b4b62ccf4262873b39bdd01601654b368e153678ecc84d1865d |
| generatedAt | 2026-08-30T11:20:00.000Z |
| versionGate | rechecked |
| taskId | task_4126a205 |
| contentHashPriorDataAnaly | sha256:81b3c9a520472625cc78375571d1d94ae34a6badc62a7a7bf21f0a2eac7894dc |
| orchestratorWorkflowVersion | 2026.08.29.04 |
| dataAnalySkillVersion | 2026.08.25.01 |

---
<!-- Version meta: skillId=agent-design skillVersion=2026.08.29.03 schemaVersion=1 workflowVersion=2026.08.29.04 rulesVersion=2026.08.30.5 versionGate=rechecked contentHash=sha256:81b3c9a520472625cc78375571d1d94ae34a6badc62a7a7bf21f0a2eac7894dc taskId=task_4126a205 -->
