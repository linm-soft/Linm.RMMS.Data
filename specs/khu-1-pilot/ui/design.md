# Design — khu-1-pilot (Pilot dữ liệu Khu I)

| Field | Value |
|-------|-------|
| feature | `khu-1-pilot` |
| title | Pilot dữ liệu Khu I |
| this role | `design` · `/agent-design` |
| changeScope | **`new_page`** |
| packKind | **`list`** (PO confirmed) |
| Feature Kind | **A/B** — list Zone A–D · **không** form CRUD catalog · **không** Thêm mới |
| status | `confirmed` (autoApprove=ON · `design_confirm=approve`) |
| design_confirm | `approve` · `2026-09-06T15:40:00.000Z` |
| demo | **N/A** — hash skip · **cấm** DEM-* / re-scan (**GAP-DES-DEMO-RESCAN-01**) |
| productRoot | `D:/AI-QLBD/Linm.RMMS.Data` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| ui_repo_confirm | `approve` (`Linm.Web.RMMS.Asset`) |
| mfeStdRoute | `/khu-1-pilot` |
| mfeStdUrl | `http://localhost:9301/khu-1-pilot` |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/khu-1-pilot/ui/prototype/khu-1-pilot-list-prototype.html` |
| real_view_parity | **v1** |
| shared_grid_example | **v1** (list A–D; ops toolbar thay CRUD) |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · lookups **Integration** live · page/ops = **GAP** SA · **cấm ERP.*** · **cấm** `api/v1/rmms/*` |
| domain | **Asset** (đề xuất SA) + Integration lookups |
| controlHint | `D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/khu-1-pilot-control-hint.md` |
| realData | `D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/khu-1-pilot-real-data.md` |
| po | `D:/AI-QLBD/Linm.RMMS.Data/specs/khu-1-pilot/po/requirement.md` (confirmed) |
| contentHash | `sha256:721f9c659b694240f987553196aa422ceba50f1f2c1e7849e42fe27050168056` |
| headerFingerprint | `sha256:39ac2fc4e677a0980881d50eb9a10daa22430065a0fafa39ff57485d505940a3` |
| analyReuse | **hash skip** — đọc control-hint + real-data · **cấm** re-scan demo / crawl CTX |
| autoApprove | **ON** |
| e2eQa | **ON** (queued — chỉ `/agent-qa*` chạy E2E) |
| taskId | `task_57fde78f` |
| priorTask | po `task_25122961` · analy `task_d855768c` |
| updatedAt | `2026-09-06T15:40:00.000Z` |
| versionGate | `rechecked` |
| skillId | `agent-design` |
| skillVersion | `2026.08.25.01` |
| schemaVersion | `1` |
| workflowVersion | `2026.09.06.01` |
| rulesVersion | `2026.08.30.6` |

**Cấm:** Dev/BE · re-scan DEM · invent page API như live · native `<select>` filter · `ErpListHeaderFilters` / `LinListFilterField` · Thêm mới · II.1 / QL.1 demo · ERP.* · yarn build/e2e/start:std · start role khác (**GAP-PKT-ROLE-01**) · mobile lane.

## 0. Context & inventory (hash skip · copy analy/PO)

| ID | Path | Loại | Bắt buộc |
|----|------|------|----------|
| CTX-01 | `docs/context/features/khu-1-pilot.md` | feature | P0 ✅ |
| CTX-ORS | `docs/context/features/org-route-scope.md` | peer | P0 ✅ |
| CTX-IMP | `docs/context/features/import-gov-ssot.md` | peer | P0 ✅ |
| CTX-FB | `docs/context/features/reports-filter-bar.md` | `/rmms-filter-org` | P0 ✅ |
| CTX-DRVN | `docs/context/20-ORG-STRUCTURE-DRVN.md` | org SSOT | P0 ✅ |
| SEED-ORG | `docs/context/seed/org-unit-seed.json` | REG-I · VP-I.1…I.4 | P0 ✅ |
| DA-HINT | `specs/_data-analy/features/khu-1-pilot-control-hint.md` | controlHint | P0 ✅ |
| DA-REAL | `specs/_data-analy/features/khu-1-pilot-real-data.md` | real-data §A+§B | P0 ✅ |
| PO-01 | `specs/khu-1-pilot/po/requirement.md` | Grid AC · Screens | P0 ✅ |
| DEM-* | — | — | **skip** (demo N/A · hash skip) |
| DOMAIN | `Linm.RMMS.WebService/docs/DOMAIN-MAP.md` | thiếu slug | P0 — SA **GAP-K1-DM-01** |
| PROT-01 | `specs/khu-1-pilot/ui/prototype/khu-1-pilot-list-prototype.html` | Design gen | P0 ✅ |

Persona: Data/Admin Khu I · Viewer ngoài scope (RBAC — SA/Dev).

**≠** reopen CRUD org-route-scope · **≠** enqueue 16 biểu + 10 sổ · **≠** khu-2/khu-4.

### § Delta Current vs New (`new_page`)

| Area | Current | New (this Design) | Action |
|------|---------|-------------------|--------|
| MFE page | **0** `/khu-1-pilot` | Kind A/B list + FilterBar REG-I lock + ops | Design/Dev **GAP-K1-PAGE-01** |
| Page/ops API | **0** | SA Asset resource + scoped ReImport/ReInit | handoff SA **GAP-K1-API-01** |
| Control | analy controlHint | **Chốt** control-map = controlHint | chốt |
| Alias | rủi ro II.1 / QL.1 | lock REG-I · exclude VP-II.* · copy Khu I only | **GAP-K1-ALIAS-01** enforce UI |
| Proto rows | — | UX placeholder only · **cấm** mock as live | keep |

## 1. Kind + UI pattern (HARD)

| | |
|--|--|
| Feature Kind | **A/B** (packKind=`list`) |
| List pattern | `LinPageLayout` + list shell · **DES-GRID-A…D** |
| Form pattern | **none** P0 — **cấm** Thêm mới / Slideout CRUD catalog |
| Filter | **`LinErpListFilterBar`** · `/rmms-filter-org` · 1 hàng wrap · search + 🔍 **cụm phải** — **cấm** nút Tìm riêng · **cấm** `ErpListHeaderFilters` / `LinListFilterField` / wrapper cả `leading` |
| Toolbar | Refresh · ReImportSeed · ReInitData (danger) · importSet chips RO · pilotScope chip — **cấm** export chrome demo · **cấm** History/Config CRUD master |
| Leave | N/A dirty form — confirm modals trên ReImport/ReInit only · **cấm** native `alert`/`confirm` |
| Typography | label **13** · input D14/M16 (**GAP-TYP-01**) |
| Map | **none** invent — Gis/Field **consume** `zoneOrgCode=REG-I` (cite peer) |
| Routes | `/khu-1-pilot` |
| Skip chrome | GOVOne · Signed demo · hub nav demo · mobile shell |

## 2. Screens (REQUIRED · `devSlash=/agent-dev`)

| Screen | Route / surface | Pattern | FormMode | Zones | `devSlash` |
|--------|-----------------|---------|----------|-------|------------|
| SCR-K1-01 / S-LIST | `/khu-1-pilot` | Kind A/B A–D | filter | DES-GRID-A · B · B-FILTER · C0–C2 · D · OPS | `/agent-dev` |
| S-ACT-REIMPORT | Confirm modal | — | — | DES-ALERT · scope chip REG-I | `/agent-dev` |
| S-ACT-REINIT | Confirm danger | — | — | DES-ALERT · scope chip REG-I | `/agent-dev` |
| SCR-K1-MAP | Gis/Field peer | filter consume | — | cite `zoneOrgCode=REG-I` | OUT deep |

**Cấm** Full page `/new`·`:id` · **cấm** Slideout hồ sơ · **cấm** map canvas trong pack.

## 3. Control-map (chốt từ controlHint — **cấm** đoán)

> Typography: label **13** · input D14/M16 (**GAP-TYP-01**).

### 3a. List filters (Zone B · `/rmms-filter-org`)

| Field key | Label VN | Control | catalogKind | Slot | Notes |
|-----------|----------|---------|-------------|------|-------|
| zoneOrgCode | Khu | locked chip **hoặc** SearchInput tree RO | **org-unit** | leading | **default + lock `REG-I`** · reject/hide REG-II…IV · **cấm** ô Cục · **cấm** mix Sở |
| vpOrgCode | Văn phòng | **`SearchInput`** | org-unit kind=`VP` | leading | ⊆ `REG-I` → `VP-I.1`…`VP-I.4` · **cấm** `VP-II.*` |
| assigneeCode | Đơn vị | **`SearchInput`** | org-unit SU **hoặc** partner-unit | leading | cascade sau VP · **cấm** nhét Sở vào org tree |
| routeCode | Tuyến | **`SearchInput`** | **road-route** | leading | ⊆ org-route-scope Khu I · **cấm** NHANH/TRANH/GOM · **cấm** `KM0+*` · **cấm** default demo QL.1 |
| search | Tìm kiếm | `SearchTextInput` | text | leading | mã/tên · min ~280px · **không** nút Tìm riêng |
| — | Đoạn | **không ô** P0 | — | — | `km_skip` · **GAP-ORS-CASCADE-01** · **cấm** invent `segmentId` |

**Cascade HARD:** locked `REG-I` → VP → ĐV → Tuyến. Đổi VP → clear ĐV · page=1. Layout: `filter-bar-layout-hard`.

### 3b. Pilot ops (Zone B toolbar)

| Field key | Label VN | Control | Notes |
|-----------|----------|---------|-------|
| importSet | Bộ import | chips / Dropdown RO | chỉ `gov-vn` · `t6-org-scope` · `drvn-org` — **cấm** khu-2/khu-4 |
| pilotScope | Phạm vi | locked chip | luôn `zoneOrgCode=REG-I` |
| reImport | ReImportSeed | `Button` + confirm | scoped REG-I — path **GAP-K1-API-01** |
| reInit | ReInitData | `Button` danger + confirm | gỡ mã rác **trong scope** — **cấm** wipe ngoài REG-I |
| refresh | Làm mới | `Button` | reload list/status |

### 3c. Grid columns (Zone C)

| Field key | Label VN | Control | Notes |
|-----------|----------|---------|-------|
| catalog | Catalog | Text / Badge | route · pavement · asset-type aggregate |
| countInScope | Số lượng (Khu I) | Number | DB sau import · **cấm** HasData/demo JSON |
| lastImportAt | Lần import | Datetime | status API **GAP** |
| status | Trạng thái | Badge | ok · empty · gap-no-source · error → toast (**cấm** `alert`) |

### 3d. Real-data bind (copy §B — cite live · page = GAP)

| Catalog / surface | Prefix | Note |
|-------------------|--------|------|
| org-unit **live** | `GET …/web-bff/api/v1/integration/org-units{/tree,/search,}` | force `REG-I` |
| road-route **live** | `…/integration/road-routes{/search,}` | ⊆ Khu I scope khi có |
| partner-unit **live** | `…/integration/partner-units{/search,}` | tách tree |
| org-route-scope **peer** | `…/integration/org-route-scopes` | filter tuyến |
| pilot list/status | **GAP** SA Asset | query bắt buộc `zoneOrgCode=REG-I` |
| scoped ReImport/ReInit | **GAP** SA | confirm + toast · **cấm** invent như live |

Empty/fail: empty state + CTA import scoped · toast — **cấm** mock rows che API.

## 4. Grid list AC (parity · Kind A/B)

| Area | Design DoD |
|------|------------|
| **Shell** | DES-GRID-A Header (title + badge REG-I) · B Toolbar ops · B-FILTER · C grid · D Pagination |
| **Toolbar** | Làm mới · ReImport · ReInit(danger) · importSet · pilotScope — **cấm** + Thêm mới Zone A/B |
| **Filter** | `LinErpListFilterBar` · REG-I lock · cascade · 🔍 cụm phải |
| **Grid C** | catalog · countInScope · lastImportAt · status |
| **Pagination D** | flat khi có rows |
| **Confirm** | Modal scope chip REG-I trên ReImport/ReInit |
| **SSOT** | `shared_grid_example` v1 · `filter-bar-layout-hard` · `/rmms-filter-org` |

## 5. Prototype — Shared grid (REQUIRED)

| | |
|--|--|
| Base | list A–D + ops (no CRUD create) |
| File | `specs/khu-1-pilot/ui/prototype/khu-1-pilot-list-prototype.html` |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/khu-1-pilot/ui/prototype/khu-1-pilot-list-prototype.html` |
| mfeStdUrl | `http://localhost:9301/khu-1-pilot` |
| Proto rows | UX only · label «placeholder · không phải live» — **cấm** coi như DB |

Zone ids in HTML: `DES-GRID-A` · `DES-GRID-B` · `DES-GRID-B-FILTER` · `DES-GRID-C0` · `DES-GRID-C2` · `DES-GRID-D` · `DES-OPS` · `DES-ALERT`.

## 6. GAPs (handoff)

| ID | Owner | Note |
|----|-------|------|
| GAP-K1-PAGE-01 | Dev | Route `/khu-1-pilot` + FilterBar — Design chốt shell |
| GAP-K1-ALIAS-01 | Dev | Enforce lock REG-I · exclude II.1/QL.1 (PO copy closed) |
| GAP-K1-DM-01 | SA | DOMAIN-MAP slug → Asset |
| GAP-K1-API-01 | SA | List/status + scoped ReImport/ReInit |
| GAP-K1-SCOPE-01 | SA/Data | Import flags scoped REG-I |
| GAP-ORS-CASCADE-01 | peer | Đoạn `km_skip` |
| GAP-K1-MOBILE-01 | TL | Lane web only |

## 7. design_confirm

| | |
|--|--|
| autoApprove | **ON** |
| decision | **`approve`** |
| at | `2026-09-06T15:40:00.000Z` |
| note | Prototype + reviewUrl + control-map = controlHint · open Q none blocking (DM/API → SA) |

## 8. Handoff

→ **SA** `be/solution-discovery.md` · compact `handoff/design-compact.md`  
**Cấm** start Dev/QA trong task này.
