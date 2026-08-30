# Design — reports-filter-bar (hub `/bao-cao` filter)

| Field | Value |
|-------|-------|
| feature | `reports-filter-bar` |
| title | Báo cáo Web (hub) — filter bar (Tuyến chính · Khu · Đoạn · layout HARD) |
| this role | `design` · `/agent-design` |
| changeScope | **`edit_page`** (chỉ Zone B filter — **cấm** reopen Kind E grid/toolbar/config/chart · **cấm** batch leaf `rpt-*`) |
| packKind | **`report`** (PO confirmed · Kind **E** hub) |
| Feature Kind | **E** — AnalyticsReportShell hub — **EDIT TARGET = DES-RPT-C** |
| status | `confirmed` (autoApprove=ON · `design_confirm=approve`) |
| design_confirm | `approve` · `2026-08-30T15:45:00.000Z` |
| report_standard | **v1** (`po-design-report-standard` · `filter-bar-layout-hard` · `report-toolbar-actions`) |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/reports-filter-bar/ui/prototype/reports-filter-bar-prototype.html` |
| peerStdUrl | `http://localhost:9311/bao-cao` (parent hub live) · Master zone `http://localhost:9318/mas/phan-khu` |
| real_view_parity | **v1** |
| productRoot | `D:/AI-QLBD/Linm.RMMS.Data` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Report` |
| ui_repo_confirm | `approve` (`Linm.Web.RMMS.Report` · file `ReportFilterBar.tsx`) |
| mfeStdRoute | `/bao-cao` |
| mfeStdUrl | `http://localhost:9311/bao-cao` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · Report Xem + Integration lookups · **cấm ERP.*** · **cấm** `api/v1/rmms/*` |
| domain | **Report** (Xem) + **Integration** (lookups) |
| controlHint | `D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/reports-filter-bar-control-hint.md` |
| realData | `D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/reports-filter-bar-real-data.md` |
| po | `D:/AI-QLBD/Linm.RMMS.Data/specs/reports-filter-bar/po/requirement.md` (confirmed) |
| contentHash | `sha256:9c8f48aa63c0db817e348a729489019ecdb814928fedc007d79770d3724fcd4a` |
| headerFingerprint | `sha256:e5226ff0b146ffd2e67210f7ebc5ebbf68ab3612f5416314988acc7c1b5442a9` |
| analyReuse | **hash skip** — **cấm** re-scan demo / crawl CTX (**GAP-DES-DEMO-RESCAN-01**) |
| autoApprove | **ON** |
| e2eQa | **ON** (queued — chỉ `/agent-qa*` chạy E2E) |
| taskId | `task_68a32657` |
| priorTask | po `task_2acc197f` · analy `task_853659c0` |
| updatedAt | `2026-08-30T15:45:00.000Z` |
| versionGate | `rechecked` |

**Cấm:** Dev/BE · re-scan DEM · native `<select>` · action trên filter · invent-seed zone · mix Sở vào org tree · batch leaf `rpt-*` · ERP.* · yarn build/e2e/start:std · start role khác (**GAP-PKT-ROLE-01**).

## 0. Context & inventory (hash skip · copy analy/PO)

| ID | Path | Loại | Bắt buộc |
|----|------|------|----------|
| CTX-FIL | `docs/context/features/reports-filter-bar.md` | filter SSOT | P0 ✅ |
| CTX-HUB | `docs/context/features/reports.md` | parent hub | P0 ✅ |
| CTX-ORS | `docs/context/features/org-route-scope.md` | peer zone **done** | P0 ✅ |
| DEM-01 | `Linm.RMMS.Demo/src/demo/bao-cao/reports.html` | demo filter Select | P0 ref · **stale** · **không** re-scan body |
| DA-HINT | `specs/_data-analy/features/reports-filter-bar-control-hint.md` | controlHint | P0 ✅ |
| DA-REAL | `specs/_data-analy/features/reports-filter-bar-real-data.md` | real-data §A+§B | P0 ✅ |
| INV-01 | `specs/_data-analy/shared-catalogs/INVESTIGATE-CUC2.md` | seed 38 tuyến A | P0 ✅ |
| PO-01 | `specs/reports-filter-bar/po/requirement.md` | Report AC · Screens · Leave | P0 ✅ |
| MFE | `ReportFilterBar.tsx` · `services/report/lookups.ts` | live partial (thiếu zone/segment) | P0 ✅ |
| PROT-01 | `specs/reports-filter-bar/ui/prototype/reports-filter-bar-prototype.html` | Design gen | P0 ✅ |

Persona: Hạt trưởng · quản lý (Web). Prototype **content-only** · **DES-RPT-C focus**.

**≠** reopen hub grid/config/chart · **≠** batch leaf FilterBar · **≠** invent zone seed.

### § Delta Current vs New (`edit_page`)

| Area | Current (live FilterBar) | New (this Design) | Action |
|------|--------------------------|-------------------|--------|
| Tuyến | dump NHANH `Km 0+000…` (**mapped-wrong**) | Tuyến chính `QL.*`/`HCM`/`CT.*` · **cấm** NHANH/TRANH/GOM/`KM0+*` | DES-RPT-C |
| Khu | **0** field | `SearchInput` tree REG-I…IV DRVN-only | DES-RPT-C |
| Đoạn | nhầm trong Tuyến | Field riêng · dump P1 **hoặc** org-route-scopes segments · helper FIL-04 | DES-RPT-C |
| Layout | leading family/kind/route/search + period | + zone + segment · V1–V5 HARD · **cấm** wrapper leading | DES-RPT-C |
| Toolbar / Config / Grid | parent live | **OUT** change — giữ parent · **không** stub lại | DES-RPT-A/F note |
| Scope | — | Pilot **chỉ** `ReportFilterBar.tsx` hub | GAP-RPT-FIL-SCOPE |

## 1. Kind + UI pattern (HARD · report)

| | |
|--|--|
| Feature Kind | **E** |
| Shell | `LinPageLayout` kind=`report` — **1×** · **cấm** nested CatalogListShell |
| Filter (EDIT) | **`LinErpListFilterBar`** · `data-lin-list-layout="erp-filter-bar"` · testIdPrefix `rmms-reports-hub` |
| Layout HARD | **1 hàng wrap** · **mọi input + 🔍 cụm phải** · title trái · wrap `flex-end` · V1–V5 |
| Xem | bar `onSearch` 🔍 · `searchAriaLabel="Xem báo cáo"` — **cấm** nút Tìm/Xem riêng |
| Toolbar | `reportToolbar` Zone B trái — Làm mới · In · Sửa config · Xuất Excel (check-in) — **giữ** parent · **cấm** trên filter |
| Config FULL | **Giữ** `LinReportTableConfigModal` parent — **OUT** change this pack · **cấm** stub/`configHint` |
| Chart / Grid / Pagination | **OUT** this pack (giữ parent) |
| Typography | label **13** · input D14/M16 (**GAP-TYP-01**) |
| Leave | Filter draft **không** LeaveConfirm · API fail → toast — **cấm** `window.alert`/`confirm` |
| Map | **none** |
| Skip chrome | GOVOne · Catalog 172 · demo topnav · note/sidebar |

## 2. Screens (REQUIRED · `devSlash=/agent-dev`)

| Screen | Route / surface | Pattern | FormMode | Zones | `devSlash` |
|--------|-----------------|---------|----------|-------|------------|
| S-HUB-FILTER | `/bao-cao` | Kind E hub **edit filter** | filter | **DES-RPT-C** (EDIT) · A title giữ | `/agent-dev` |
| S-HUB-TOOLBAR | `/bao-cao` | reportToolbar | — | **DES-RPT-A** **OUT** change | `/agent-dev` (giữ) |
| S-HUB-CONFIG | `/bao-cao` | Config FULL | — | **DES-RPT-F** **OUT** change | `/agent-dev` (giữ) |
| S-HUB-GRID | `/bao-cao` | grid + pager | — | C/D **OUT** | `/agent-dev` (giữ) |
| S-LEAF-RPT | leaf `rpt-*` | — | — | FilterBar leaf | **OUT** (**GAP-RPT-FIL-SCOPE**) |

**Cấm** Modal/Slideout form mới · **cấm** `/bao-cao/new` · **cấm** batch leaf.

## 3. Control-map (chốt từ controlHint — **cấm** đoán)

> Typography: label **13** · input D14/M16 (**GAP-TYP-01**).  
> Normalized keys: `family|kind|routeId|routeCode|zoneOrgCode|segmentCode|search|viewMode|month|year|quarter|fromDate|toDate`

### 3a. Filter fields (Zone B · DES-RPT-C · P0)

| Field key | Label VN | Control (Design chốt) | catalogKind | Slot | Notes |
|-----------|----------|----------------------|-------------|------|-------|
| family | Loại BC | **`SearchInput`** | enum FE | `leading` | `assets` · `incidents` · `checkins` — **cấm** native Select |
| kind | Loại báo cáo | **`SearchInput`** | enum theo family | `leading` | cascade từ family · default đầu family |
| routeId / routeCode | Tuyến | **`SearchInput`** | **road-route** | `leading` | chỉ tuyến chính QUOC_LO/HCM/CAO_TOC/KHAC · empty=Tất cả · **cấm** KM* / NHANH/TRANH/GOM |
| zoneOrgCode | Khu | **`SearchInput`** tree | **org-unit** | `leading` | leaf `REG-I`…`REG-IV` · DRVN-only · **cấm** mix Sở |
| segmentCode | Đoạn | **`SearchInput`** | road-route dump **hoặc** org-route-scope segment | `leading` | cascade sau tuyến (+ khu) · helper GAP-RPT-FIL-04 |
| search | Tìm kiếm | **`SearchTextInput` / `Input`** | text | `leading` | hạng mục · mã · cán bộ · Enter = Xem · **không** nút Tìm riêng |
| viewMode · month · year · quarter | Kỳ | **`LinReportPeriodSelectorFields`** | enum | `dateLeading` | giữ |
| fromDate / toDate | Từ / Đến | bar `Date` | — | date | **ẩn** khi family=`assets` |
| onSearch | Xem | bar 🔍 `onSearch` | — | search | apply load · **cấm** nút Tìm trùng |

### 3b. Cascade (pilot · HARD)

| Trigger | Effect |
|---------|--------|
| Đổi **Tuyến** | clear **Khu** + **Đoạn** · page/xem lại từ đầu |
| Đổi **Khu** | clear **Đoạn** · page/xem lại từ đầu |
| Đổi family | reset kind về option đầu · clear viewed (giữ parent) · dates sync ẩn assets |
| Empty tuyến/khu/đoạn | = tất cả (trong scope tài khoản) |

### 3c. Shell wire (SSOT · **cấm** wrapper cả `leading`)

```tsx
<div data-lin-list-layout="erp-filter-bar">
  <LinErpListFilterBar
    testIdPrefix="rmms-reports-hub"
    onSearch={onView}
    searchAriaLabel="Xem báo cáo"
    leading={(
      <>
        <div data-testid="rmms-reports-hub-field-family">…</div>
        <div data-testid="rmms-reports-hub-field-kind">…</div>
        <div data-testid="rmms-reports-hub-field-route">…</div>
        <div data-testid="rmms-reports-hub-field-zone">…</div>
        <div data-testid="rmms-reports-hub-field-segment">…</div>
        <div data-testid="rmms-reports-hub-field-search">…</div>
      </>
    )}
    dateLeading={<LinReportPeriodSelectorFields … />}
  />
</div>
```

`leading` = fragment từng `div[data-testid]` — **cấm** wrapper cả block · **cấm** `filterMaxWidthPx` · **cấm** `ErpListHeaderFilters` / `LinListFilterField`.

### 3d. Real-data bind (copy §B1 — cite live · **cấm** invent path)

| Catalog / op | Path (BFF) | Note |
|--------------|------------|------|
| road-route Search | `GET /web-bff/api/v1/integration/road-routes/search` | live · **GAP** thiếu `routeKind` → SA |
| road-route List + routeKind | `GET /web-bff/api/v1/integration/road-routes?routeKind=` | live — prefer mother / dump Đoạn |
| org-unit Tree / List kind | `GET /web-bff/api/v1/integration/org-units{/tree,}?kind=REG` | live · leaf I–IV |
| org-unit search | `…/org-units/search` | live · **GAP** thiếu `kind=` — List/tree **hoặc** T-BE |
| org-route-scopes | `…/org-route-scopes` · `/search` · `/{id}/segments` | live · empty → dump NHANH P1 |
| Report Xem | `GET /web-bff/api/v1/report/{assets\|incidents\|checkins}` | live · query zone/segment khi SA chốt |

FE cite: `src/pages/ReportListPage/ReportFilterBar.tsx` · `src/services/report/lookups.ts`.

`map: none` · `progress: none`.

### 3e. Đoạn helper (GAP-RPT-FIL-04 · Design chốt copy)

| Case | UI |
|------|-----|
| Có gán `org-route-scopes` | Đoạn = segments ⊆ zone+tuyến · placeholder «Chọn đoạn quản lý» |
| **0** gán | Đoạn = dump `routeKind=NHANH\|TRANH\|GOM` · helper text dưới field: «Đoạn dump (Km…) — chưa có gán khu trên tuyến» |
| Empty | «Tất cả đoạn» |

**Cấm** invent-seed gán từ CSV (**GOV-IMP-01/03**).

## 4. Report AC (Design DoD · DES-RPT)

| Area | Design DoD |
|------|------------|
| **Shell 2C / DES-RPT-A** | Toolbar trái: Làm mới · In · Sửa config · Xuất Excel (check-in) — **giữ** parent · **cấm** Thêm mới · **cấm** action trên filter |
| **Config FULL / DES-RPT-F** | **Giữ** parent `LinReportTableConfigModal` — **OUT** change · **cấm** stub mới |
| **Filter / DES-RPT-C** | `LinErpListFilterBar` · **1 hàng wrap** · **input + 🔍 cụm phải** · V1–V5 · fields §3a + cascade §3b · **0** action button |
| **Grid / Chart** | **OUT** this pack |
| **SSOT** | `po-design-report-standard` · `filter-bar-layout-hard` · `report-toolbar-actions` · CTX filter |

### V1–V5 checklist (Dev/QA verify trên `:9311/bao-cao` — Design prototype mock PASS)

| # | Pass |
|---|------|
| V1 | Title trái · mọi input + 🔍 một cụm sát phải · 0 gap leading\|kỳ · wrap `flex-end` |
| V2 | Title không chồng field · card hẹp: title hàng 1, filters hàng 2 căn phải |
| V3 | `data-lin-list-layout="erp-filter-bar"` · **0** `ErpListHeaderFilters` · **0** `LinListFilterField` |
| V4 | leading = fragment · **0** wrapper cả block |
| V5 | Filter **0** Xuất Excel/In/Làm mới/Config/Chart — chỉ field + 🔍 |

## 5. Prototype (REQUIRED)

| | |
|--|--|
| Artifact | `ui/prototype/reports-filter-bar-prototype.html` |
| Focus zones | **DES-RPT-C** (EDIT) · DES-RPT-A toolbar **ref giữ** · grid stub minimal OUT |
| Filter mock | SearchInput combobox · **không** native Select · zone + segment + cascade |
| Layout | 1 hàng wrap · input cụm phải · title «Báo cáo Web» trái |
| Scope | content-only — **cấm** GOVOne / topnav / Catalog 172 / note |
| `report_standard` | v1 |
| `real_view_parity` | v1 |
| **peerStdUrl** | `http://localhost:9311/bao-cao` |
| **reviewUrl** | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/reports-filter-bar/ui/prototype/reports-filter-bar-prototype.html` |

### Wire (DES-RPT-C focus)

```
[A] icon + «Báo cáo Web» (**no** Thêm mới)
[DES-RPT-A] Làm mới · In · Config · (Xuất Excel nếu check-in) — **không** trong filter
[DES-RPT-C] LinErpListFilterBar mock:
  leading: family · kind · route(mẹ) · zone · segment · search
  dateLeading: Kỳ · (Từ/Đến ẩn assets)
  🔍 = Xem
  cascade clear · helper Đoạn dump
[C/D] placeholder «OUT — giữ parent reports» (không stub config/chart)
```

### Button SSOT (toolbar ref · §0)

| action | Icon | Text | Title |
|--------|------|------|-------|
| refresh | `fas fa-sync-alt` | Làm mới | Làm mới |
| print | `fas fa-print` | In | In |
| editConfig | `fas fa-cog` | Sửa config | Sửa config |
| export | `fas fa-file-excel` | Xuất Excel | Xuất Excel (check-in only) |
| search (bar) | `fas fa-search` | (aria Xem báo cáo) | bar onSearch |

## 6. Leave / alert

| Case | Behavior | Cấm |
|------|----------|-----|
| Filter draft chưa Xem · navigate | **không** LeaveConfirm (stateless đến Xem) | native `confirm` |
| Lookup / API fail | toast · SearchInput empty | `window.alert` |
| Zone gán 0 rows | Đoạn P1 dump + helper · **cấm** mock gán | invent-seed |
| Xem fail / empty | empty «Chưa xem» · toast | alert blocking |
| Cascade clear | clear child im lặng đúng rule | silent wrong retain |

## 7. Open questions (handoff SA — Design prototype **không** blocked)

| ID | Severity | Design decision |
|----|----------|-----------------|
| GAP-RPT-FIL-01 | P0 | Tuyến = **chỉ** mẹ · dump → **Đoạn** — **closed** mapped-wrong |
| GAP-RPT-FIL-ZONE / SEG | P0 | Fields Khu + Đoạn trên DES-RPT-C — **closed** UI |
| GAP-RPT-FIL-SCOPE | P0 | Pilot **chỉ hub** — **closed** |
| GAP-FILTER-BAR-01/07 · WRAP-01 | P0 | V1–V5 + shell wire §3c — **closed** Design · Dev verify live |
| GAP-RPT-FIL-04 | P1 | Helper copy §3e — **closed** Design |
| GAP-RPT-FIL-02 | P0 | Forward `routeKind` Search **hoặc** FE List — **SA chốt** (T-BE-FILTER-01) |
| GAP-RPT-FIL-ORG-KIND | P1 | org `/search?kind=` **hoặc** List/tree FE — **SA chốt** |
| GAP-RPT-FIL-03 | P1 | overlap km khi có gán — SA/Dev khi data có rows |

## 8. Handoff → SA

| Field | Value |
|-------|-------|
| feature | `reports-filter-bar` |
| phase_from / phase_to | design → sa |
| packKind | **report** |
| changeScope | `edit_page` |
| Kind / focus | E hub — **DES-RPT-C** filter edit |
| zone ids | DES-RPT-C (EDIT) · DES-RPT-A/F **OUT** giữ |
| Screens | §2 · `devSlash=/agent-dev` |
| control-map | §3 = controlHint chốt |
| realData | DA-REAL §A–§G |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/reports-filter-bar/ui/prototype/reports-filter-bar-prototype.html` |
| peerStdUrl | `http://localhost:9311/bao-cao` |
| mfeStdUrl | `http://localhost:9311/bao-cao` |
| Open → SA | GAP-RPT-FIL-02 · ORG-KIND · query zone/segment trên Report Xem |
| Next | `/agent-sa` · **cấm** start SA trong task Design này |
| Blockers | none cho Design · Dev wire Search forward **blocked** đến SA nếu chọn Search path |

`design_confirm` = **approve** — autoApprove **ON** · agent tự confirm (`task_68a32657`). Chain **SA** enqueue (roles sau = pending đến lượt). **Cấm** Dev/BE/e2e trong task này.

## DoR checklist (PASS)

| Check | Pass |
|-------|------|
| packKind report · Kind E · edit_page filter | ✅ |
| PO § Report AC · DES-RPT-A/C/F (C EDIT · A/F OUT giữ) | ✅ |
| Screens · S-HUB-FILTER · `devSlash=/agent-dev` | ✅ |
| Control-map = controlHint · zone + segment + cascade | ✅ |
| Filter LinErpListFilterBar · V1–V5 · 0 action trên filter | ✅ |
| Prototype + reviewUrl | ✅ |
| real_view_parity v1 + peerStdUrl | ✅ |
| Leave/toast · **cấm** native dialog | ✅ |
| Hash skip analy · **cấm** re-scan demo | ✅ |
| ui_repo_confirm = Linm.Web.RMMS.Report | ✅ |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-design |
| skillVersion | 2026.08.29.03 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.30.01 |
| rulesVersion | 2026.08.30.6 |
| contentHash | sha256:9c8f48aa63c0db817e348a729489019ecdb814928fedc007d79770d3724fcd4a |
| headerFingerprint | sha256:e5226ff0b146ffd2e67210f7ebc5ebbf68ab3612f5416314988acc7c1b5442a9 |
| generatedAt | 2026-08-30T15:45:00.000Z |
| versionGate | rechecked |
| taskId | task_68a32657 |
| contentHashPriorDataAnaly | sha256:9c8f48aa63c0db817e348a729489019ecdb814928fedc007d79770d3724fcd4a |
| orchestratorWorkflowVersion | 2026.08.30.01 |
| dataAnalySkillVersion | 2026.08.25.01 |
| priorPoTaskId | task_2acc197f |
| priorAnalyTaskId | task_853659c0 |

---
<!-- Version meta: skillId=agent-design skillVersion=2026.08.29.03 schemaVersion=1 workflowVersion=2026.08.30.01 rulesVersion=2026.08.30.6 versionGate=rechecked contentHash=sha256:9c8f48aa63c0db817e348a729489019ecdb814928fedc007d79770d3724fcd4a taskId=task_68a32657 -->
