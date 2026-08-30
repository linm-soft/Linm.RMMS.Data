# PO — Requirement — reports-filter-bar (hub `/bao-cao` filter)

| Field | Value |
|-------|-------|
| feature | `reports-filter-bar` |
| title | Báo cáo Web (hub) — filter bar (Tuyến chính · Khu · Đoạn · layout HARD) |
| this role | `po` · `/agent-po` |
| changeScope | **`edit_page`** (STATUS + packet · autopilot confirm — **chỉ** Zone B filter trên hub · **cấm** reopen Kind E grid/toolbar/config/chart hub · **cấm** batch leaf `rpt-*`) |
| packKind | **`report`** (**PO confirm** · data-analy đề xuất · Kind **E** hub) |
| Feature Kind | **E** — AnalyticsReportShell hub — **chỉ** sửa filter Zone B |
| gap | `edit_page` · GAP-RPT-FIL-* · layout V1–V5 · T-BE-FILTER-01 |
| mode | `feature_context` · **no Excel** · CTX filter SSOT + demo hub ref + live MFE FilterBar · sourceKind=`legacy` |
| status | `confirmed` (autoApprove=ON · task `task_2acc197f`) |
| requestSource | queue CHAIN `/agent-qldb-workflow` · roleOnly=`po` · `/agent-po` · prior data_analy **confirmed** |
| autoApprove | **ON** — Design/SA/Review khi tới lượt → agent tự confirm · enqueue role kế. Role PO **không** gate confirm. |
| e2eQa | **ON** — queued tới `/agent-qa*` · **cấm** e2e / `yarn start:std` / `yarn build` ở role PO |
| prior · data_analy | status=`done`/`confirmed` · `specs/_data-analy/features/reports-filter-bar-control-hint.md` · `reports-filter-bar-real-data.md` · contentHash `sha256:9c8f48aa63c0db817e348a729489019ecdb814928fedc007d79770d3724fcd4a` · headerFingerprint `sha256:e5226ff0b146ffd2e67210f7ebc5ebbf68ab3612f5416314988acc7c1b5442a9` · analy `task_853659c0` · **cấm** re-scan demo (**GAP-PO-DEMO-RESCAN-01**) |
| productRoot | `D:/AI-QLBD/Linm.RMMS.Data` |
| parent | `reports` · peer zone `org-route-scope` (**done**) |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Report` |
| mfeStdRoute | `/bao-cao` |
| mfeStdUrl | `http://localhost:9311/bao-cao` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · Report `api/v1/report` · Integration lookups · **cấm ERP.*** · **cấm** `api/v1/rmms/*` |
| domain | **Report** (Xem) + **Integration** (lookups) |
| be_repo_confirm | pending board (Dev) |
| ui_repo_confirm | pending board (Dev) |
| controlHint | `D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/reports-filter-bar-control-hint.md` |
| realData | `D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/reports-filter-bar-real-data.md` |
| contentHash | `sha256:9c8f48aa63c0db817e348a729489019ecdb814928fedc007d79770d3724fcd4a` |
| headerFingerprint | `sha256:e5226ff0b146ffd2e67210f7ebc5ebbf68ab3612f5416314988acc7c1b5442a9` |
| analyReuse | **hash skip** — **cấm** re-scan demo / crawl CTX / DemoRoot (**GAP-PO-DEMO-RESCAN-01**) |
| sourceFormReady | **yes** |
| sourceTables | `rmms_road_routes` · `rmms_org_units` · `rmms_org_route_scopes` · `rmms_org_route_scope_segments` · (Xem giữ) `rmms_road_assets` · `rmms_incidents` · `rmms_patrol_sessions` |
| taskId | `task_2acc197f` · analy `task_853659c0` |
| updatedAt | `2026-08-30T15:30:00.000Z` |
| versionGate | `rechecked` |

**packKind confirm:** `report` (data-analy đề xuất · PO chốt). Kind **E** hub trên MFE Report host `:9311` — **không** Kind B catalog · **không** Excel import · **không** reopen full hub grid/config/chart trong cùng pack.

**Cấm:** implement · re-scan DEM · invent seed gán zone từ dump (**GOV-IMP-01/03**) · mix Sở vào org tree · sửa hết leaf `rpt-*` FilterBar · ERP.* · `api/v1/rmms/*` · native `<select>` · yarn build/e2e/start:std ở role PO · start role khác (**GAP-PKT-ROLE-01**).

## 1. Goal

Chốt requirement **edit_page** cho **filter bar** hub Báo cáo Web (`ReportListPage` · `/bao-cao`): tách **Tuyến chính** vs **Đoạn** (dump KM*), thêm **Khu** REG-I…IV, cascade Tuyến→Khu→Đoạn, layout `filter-bar-layout-hard` V1–V5, forward `routeKind`/`kind` trên lookup — trên MFE `Linm.Web.RMMS.Report` · file mục tiêu `ReportFilterBar.tsx` (+ lookups).

Persona: Hạt trưởng · quản lý (Web).

**≠** reopen Kind E grid/pagination/config/chart/toolbar actions (giữ parent `reports` SSOT) · **≠** batch leaf `rpt-*` · **≠** invent zone seed.

## 2. Current → New (`edit_page` · REQUIRED)

Nguồn SSOT: control-hint + real-data §A+§B · `analyzedAt=2026-08-30T15:18:09.965Z` · contentHash khớp STATUS · **không** crawl demo/CTX lại.

| Layer | Current (live hub FilterBar) | New (this pack · copy analy) |
|-------|------------------------------|------------------------------|
| Tuyến SearchInput | dump NHANH `Km 0+000…` (**mapped-wrong**) | Tuyến chính = QUOC_LO / HCM / CAO_TOC / KHAC mã `QL.*`/`HCM`/`CT.*` · **cấm** NHANH/TRANH/GOM · **cấm** mã `KM0+*` (**GAP-RPT-FIL-01**) |
| `routeKind` on Search | Search API **không** nhận · FE **không** forward (List có) | T-BE-FILTER-01 forward `?routeKind=` **hoặc** FE List + filter — **SA chốt path** (**GAP-RPT-FIL-02**) |
| Khu | **0** field | `SearchInput` org-unit REG leaf `REG-I`…`REG-IV` · cây DRVN **không** mix Sở (**GAP-RPT-FIL-ZONE**) |
| Đoạn | nhầm trong Tuyến | Field «Đoạn» riêng · P1 dump `routeKind=NHANH\|TRANH\|GOM` **hoặc** segments từ `org-route-scopes` khi có gán · helper GAP-RPT-FIL-04 (**GAP-RPT-FIL-SEG**) |
| Khu↔km | chưa overlap assignment | Cascade sau `org-route-scope` Signed — overlap khi có rows gán (**GAP-RPT-FIL-03**) |
| Layout | leading family/kind/route/search + period | + zone + segment · V1–V5 · **cấm** wrapper cả `leading` · **cấm** native `<select>` · **cấm** `ErpListHeaderFilters` / `LinListFilterField` |
| Scope | — | **Pilot chỉ** `ReportFilterBar.tsx` hub `/bao-cao` (**GAP-RPT-FIL-SCOPE**) |
| Demo HTML | Select loại/tuyến/kỳ | **stale** ref only · **không** SSOT control |

**Không đổi:** toolbar Làm mới · In · Config · Xuất Excel (check-in) · grid/pagination Kind E · family default `assets` · kind `summary` · date ẩn khi `assets` · Report Xem prefixes · peer `org-route-scope` CRUD.

## 3. DoD (đo được)

1. **packKind=`report`** confirmed · Kind **E** hub filter edit · UI chốt Design (prototype filter + reviewUrl).
2. Zone A: title «Báo cáo Web» — **cấm** Thêm mới trên A — **giữ** (OUT change).
3. Zone B filter: `LinErpListFilterBar` · `data-lin-list-layout="erp-filter-bar"` · testIdPrefix `rmms-reports-hub` · **1 hàng wrap** · **mọi input + 🔍 cụm phải** · Xem = bar `onSearch` — **cấm** nút Tìm riêng · **cấm** action (Xuất/In/Làm mới/Config/Chart) trên filter.
4. Fields P0: family · kind · route (tuyến chính) · zone · segment · search · Kỳ (`LinReportPeriodSelectorFields`) · Từ/Đến (ẩn assets) — controlHint §5.
5. Cascade: đổi tuyến → clear khu+đoạn · đổi khu → clear đoạn · page/xem lại từ đầu.
6. Lookups real: road-route / org-unit / org-route-scopes (khi có gán) — empty = «Tất cả …» · **cấm** invent-seed · **cấm** chọn `KM0+*` làm tuyến chính.
7. Toolbar Zone B (reportToolbar): Làm mới · In · Config · Xuất Excel check-in — **giữ** parent · **không** trên filter (`report-toolbar-actions`).
8. Config FULL / Chart / Grid / Pagination: **giữ** parent `reports` — **OUT** this pack (không stub lại · không đổi Col).
9. V1–V5 `filter-bar-layout-hard` PASS trên `http://localhost:9311/bao-cao` (Dev/QA verify — **cấm** PO chạy start:std).
10. Typography: label **13** · input D14/M16 (**GAP-TYP-01**).
11. Fail/empty: toast · **cấm** `window.alert`/`confirm`.
12. `yarn build` / e2e / `start:std` **chỉ** Dev/QA — PO **cấm**.

## 4. CTX / DEM / DI inventory (hash skip — đọc analy · **không** re-crawl)

| ID | Path | Loại | Bắt buộc |
|----|------|------|----------|
| CTX-FIL | `docs/context/features/reports-filter-bar.md` | filter SSOT | P0 ✅ |
| CTX-HUB | `docs/context/features/reports.md` | parent hub | P0 ✅ |
| CTX-ORS | `docs/context/features/org-route-scope.md` | peer zone **done** | P0 ✅ |
| CTX-RR | `docs/context/features/road-route.md` | peer catalog | P1 |
| CTX-ORG | `docs/context/features/org-unit.md` | peer catalog | P1 |
| DEM-01 | `Linm.RMMS.Demo/src/demo/bao-cao/reports.html` | demo filter Select | P0 ref · **stale** · **không** re-scan body |
| DI-01 | — | **no Excel cluster** | — |
| DA-HINT | `specs/_data-analy/features/reports-filter-bar-control-hint.md` | controlHint | P0 ✅ |
| DA-REAL | `specs/_data-analy/features/reports-filter-bar-real-data.md` | real-data §A+§B | P0 ✅ |
| DA-PARENT | `specs/_data-analy/features/reports-control-hint.md` | parent Kind E | P1 |
| INV-01 | `specs/_data-analy/shared-catalogs/INVESTIGATE-CUC2.md` | seed 38 tuyến A | P0 ✅ |
| DOMAIN | `Linm.RMMS.WebService/docs/DOMAIN-MAP.md` | Report + Integration | P0 |
| MFE | `Linm.Web.RMMS.Report` · `ReportFilterBar.tsx` · `services/report/lookups.ts` | live partial | P0 |
| BE | Integration `RoadRoutes*` · `OrgUnits*` · `OrgRouteScopes*` · Report Xem | live | P0 |
| PROT-01 | `specs/reports-filter-bar/ui/prototype/` | Design gen | P0 từ Design |

## 5. Control hints (copy data-analy — Design chốt control-map)

> SSOT: `data-analy-control-hint.md` · typography label **13** · input D14/M16 (**GAP-TYP-01**).  
> Normalized keys: `family|kind|routeId|routeCode|zoneOrgCode|segmentCode|search|viewMode|month|year|quarter|fromDate|toDate`

### 5a. Filter fields (Zone B · P0)

| Field key | Label | controlHint | catalogKind | Slot | Notes |
|-----------|-------|-------------|-------------|------|-------|
| family | Loại BC | `SearchInput` | enum FE | `leading` | `assets` · `incidents` · `checkins` — **cấm** native Select |
| kind | Loại báo cáo | `SearchInput` | enum theo family | `leading` | cascade từ family |
| routeId / routeCode | Tuyến | `SearchInput` | **road-route** | `leading` | chỉ tuyến chính · empty = tất cả · **cấm** KM* |
| zoneOrgCode | Khu | `SearchInput` tree | **org-unit** | `leading` | leaf `REG-I`…`REG-IV` · **cấm** mix partner/Sở |
| segmentCode | Đoạn | `SearchInput` | **road-route** dump **hoặc** **org-route-scope** segment | `leading` | cascade sau tuyến (+ khu) · helper GAP-RPT-FIL-04 |
| search | Tìm kiếm | `SearchTextInput` / `Input` | text | `leading` | hạng mục · mã · cán bộ · **không** nút Tìm riêng |
| viewMode · month · year · quarter | Kỳ | `LinReportPeriodSelectorFields` | enum | `dateLeading` | giữ |
| fromDate / toDate | Từ / Đến | bar `Date` | — | date | **ẩn** khi family=`assets` |
| onSearch | Xem | bar 🔍 `onSearch` | — | search | apply load · **cấm** nút Tìm trùng |

### 5b. Cascade (pilot)

Tuyến → Khu → Đoạn. Đổi tuyến → clear khu+đoạn · đổi khu → clear đoạn · page/xem lại từ đầu.

### 5c. Shell (SSOT)

```tsx
<div data-lin-list-layout="erp-filter-bar">
  <LinErpListFilterBar
    testIdPrefix={TEST_ID}
    onSearch={onView}
    searchAriaLabel="Xem báo cáo"
    leading={(
      <>
        <div data-testid={`${TEST_ID}-field-family`}>…</div>
        <div data-testid={`${TEST_ID}-field-kind`}>…</div>
        <div data-testid={`${TEST_ID}-field-route`}>…</div>
        <div data-testid={`${TEST_ID}-field-zone`}>…</div>
        <div data-testid={`${TEST_ID}-field-segment`}>…</div>
        <div data-testid={`${TEST_ID}-field-search`}>…</div>
      </>
    )}
    dateLeading={<LinReportPeriodSelectorFields … />}
  />
</div>
```

`leading` = fragment từng `div[data-testid]` — **cấm** wrapper cả block · **cấm** `filterMaxWidthPx`.

### 5d. Real-data bind summary (copy §A+§B — cấm invent path)

| Catalog / op | Path (BFF) | Note |
|--------------|------------|------|
| road-route Search | `GET /web-bff/api/v1/integration/road-routes/search` | live · **GAP** thiếu `routeKind` |
| road-route List + routeKind | `GET /web-bff/api/v1/integration/road-routes?routeKind=` | live — prefer mother / dump Đoạn |
| org-unit Tree / List kind | `GET /web-bff/api/v1/integration/org-units{/tree,}?kind=REG` | live · leaf I–IV |
| org-unit search | `…/org-units/search` | live · **GAP** thiếu `kind=` — List/tree **hoặc** T-BE |
| org-route-scopes | `…/org-route-scopes` · `/search` · `/{id}/segments` | live · empty → dump NHANH P1 |
| Report Xem | `GET /web-bff/api/v1/report/{assets\|incidents\|checkins}` | live · query zone/segment khi SA chốt |

FE cite: `src/pages/ReportListPage/ReportFilterBar.tsx` · `src/services/report/lookups.ts`.

`map: none` · `progress: none`.

## 6. Report AC (REQUIRED · packKind=report)

> Paste `po-design-report-standard.md` · `filter-bar-layout-hard.md` · `report-toolbar-actions.md` — **GAP-PO-RPT-01**.

| Area | Acceptance |
|------|------------|
| **Shell 2C** | Toolbar trái: Làm mới · In · Sửa config · Xuất Excel (check-in) — **giữ** parent · **cấm** Thêm mới / Phê duyệt · **cấm** action button trên filter (`report-toolbar-actions`) |
| **Config FULL** | **Giữ** `LinReportTableConfigModal` parent — **OUT** change this pack · **cấm** stub/`configHint` mới |
| **Filter (EDIT TARGET)** | `LinErpListFilterBar` · **1 hàng wrap** · **mọi input + 🔍 cụm phải** (`filter-bar-layout-hard` V1–V5) · Xem = 🔍 · **không** Tìm · **không** stack · **không** gap leading \| kỳ · **không** Xuất Excel/In/Làm mới trên bar · fields §5a + cascade |
| **Grid** | Report grid + footer pager — **OUT** this pack (giữ parent) |
| **Chart** | **OUT** this pack (giữ parent `report_chart`) |
| **SSOT** | `/erp-report-context` · `po-design-report-standard` · `/filter-bar-context` · `reports-filter-bar.md` CTX |

### Grid list AC

**N/A** — packKind `report` · **không** Kind B catalog (**GAP-PO-GRID-01** không áp).

## 7. Screens (REQUIRED)

| Surface | Pattern | FormMode | URL | Actions | `devSlash` |
|---------|---------|----------|-----|---------|------------|
| S-HUB-FILTER | **Full page** Kind **E** hub (edit filter Zone B) | filter | `/bao-cao` | family/kind/route/zone/segment/search/period · Xem · cascade clear | `/agent-dev` |
| S-HUB-TOOLBAR | Full page (giữ) | — | `/bao-cao` | Làm mới · In · Config · Excel check-in | `/agent-dev` (OUT change) |
| S-HUB-GRID | Full page (giữ) | — | `/bao-cao` | grid + pager theo family | `/agent-dev` (OUT change) |
| S-LEAF-RPT | leaf `rpt-*` | — | leaf routes | FilterBar leaf | **OUT** this pack (**GAP-RPT-FIL-SCOPE**) |

**devSlash:** `/agent-dev` (filter bar + lookups · **không** oms-map / ai-detect / camera).

**Cấm** Modal/Slideout form mới · **cấm** `/bao-cao/new` · **cấm** batch leaf FilterBar.

## 8. Leave / alert (REQUIRED)

| Case | Behavior | Cấm |
|------|----------|-----|
| Form create/edit dirty | **N/A** — pack **không** form CRUD | — |
| Navigate away / đổi route sau khi đã chọn filter chưa Xem | **không** bắt buộc LeaveConfirm (filter draft stateless đến Xem) | native `confirm` nếu Dev tự thêm |
| API fail / lookup fail | toast · SearchInput empty | `window.alert` |
| Zone gán 0 rows | Đoạn P1 = dump NHANH · helper UI · **cấm** mock gán | invent-seed |
| Xem fail / empty | empty «Chưa xem» · toast | alert blocking |
| Cascade clear | clear child fields im lặng đúng rule | silent wrong retain |

Thiếu toast / dùng native dialog → **GAP-PO-LEAVE-01**.

## 9. Open questions — Autopilot chốt (UNCLEAR data-analy)

| ID | Severity | PO decision (autoApprove) |
|----|----------|---------------------------|
| GAP-RPT-FIL-01 | P0 | Tuyến = **chỉ** tuyến chính · dump KM* → field **Đoạn** — **đóng mapped-wrong** |
| GAP-RPT-FIL-02 | P0 | Forward `routeKind` trên Search **hoặc** FE dùng List `?routeKind=` — **SA chốt** contract (T-BE-FILTER-01) · Design/Dev **không** chọn `KM0+*` làm tuyến |
| GAP-RPT-FIL-ZONE | P0 | Thêm Khu `REG-I`…`REG-IV` SearchInput tree DRVN-only |
| GAP-RPT-FIL-SEG | P0 | Field Đoạn riêng · P1 dump NHANH/TRANH/GOM khi chưa có gán zone |
| GAP-RPT-FIL-03 | P1 | Khi `org-route-scopes` có rows → đoạn ⊆ km zone+tuyến · empty gán → dump P1 · **cấm** invent-seed |
| GAP-RPT-FIL-04 | P1 | UI helper/placeholder phân biệt dump vs đoạn quản lý zone |
| GAP-RPT-FIL-ORG-KIND | P1 | org-units: dùng List/`/tree` + FE leaf **hoặc** T-BE extend `/search?kind=` — **SA chốt** |
| GAP-RPT-FIL-SCOPE | P0 | **Pilot chỉ hub** `ReportFilterBar.tsx` — **cấm** batch leaf `rpt-*` cùng task |
| GAP-FILTER-BAR-01/07 · WRAP-01 | P0 | V1–V5 HARD — Design prototype + Dev wire · **cấm** wrapper leading |
| GAP-TL-FILTER-01 | P1 | TL/Dev **phải** load CTX `reports-filter-bar.md` trước Write |
| packKind | — | **Confirm `report`** |
| changeScope | — | **Confirm `edit_page`** |
| hold implement | — | Peer `org-route-scope` **done** · **không** hold PO/Design · CTX hold-user-confirm **hết** (autopilot) · Dev vẫn chờ SA contract lookup |

UNCLEAR field path/version = **none** sau autopilot chốt — không AskQuestion (autoApprove=ON).

## 10. Out of scope (this pack)

- Reopen hub grid columns / pagination / chart / config modal implementation
- Batch sửa FilterBar mọi leaf `rpt-*`
- Invent seed gán zone từ CSV/dump
- Re-CRUD `org-unit` / `road-route` / `org-route-scope`
- Form `/bao-cao/new` · Kind B catalog
- ERP.* / Finance fork / `api/v1/rmms/*`
- `yarn build` / e2e / `start:std` ở role PO
- Start role Design/SA/Dev trong cùng task (**GAP-PKT-ROLE-01**)
- Re-scan demo HTML / crawl DemoRoot (**GAP-PO-DEMO-RESCAN-01**)

## 11. Handoff → Design (`/agent-design`)

| Field | Value |
|-------|-------|
| feature | `reports-filter-bar` |
| phase_from / phase_to | po → design |
| packKind confirm | **`report`** |
| changeScope | `edit_page` |
| Kind / surfaces | E hub — **chỉ** Zone B filter (+ shell A title giữ) |
| Context | CTX-FIL · CTX-HUB · CTX-ORS · DA-HINT · DA-REAL · INV-01 |
| Demo | DEM-01 **ref only** · Select stale · **cấm** re-scan · skip chrome |
| controlHint | §5 + DA-HINT — **cấm** đoán Select vs SearchInput |
| realData | DA-REAL §A–§G |
| **§ Screens** | §7 · Pattern **Full page** filter · **devSlash=`/agent-dev`** |
| **report_standard** | `po-design-report-standard` + `filter-bar-layout-hard` + `report-toolbar-actions` (**REQUIRED**) |
| **grid_standard** | n/a |
| **Leave** | toast / no form LeaveConfirm (**REQUIRED** §8) |
| Prototype | content-only filter bar · DES-RPT-C focus · **skip** note/sidebar/menu/chrome demo · **cấm** stub toolbar/config lại |
| reviewUrl | bắt buộc · `autoApprove=ON` → agent tự confirm khi tới lượt |
| peerStdUrl gợi ý | `http://localhost:9311/bao-cao` (parent hub live) · Master zone `http://localhost:9318/mas/phan-khu` (peer cascade) |
| mfeStdUrl | `http://localhost:9311/bao-cao` |
| mfeStdRoute | `/bao-cao` |
| BE | Report Xem live · Integration lookups live · Search `routeKind`/`kind` **GAP** → SA |
| Open questions | GAP-RPT-FIL-02 / ORG-KIND → SA · FIL-01/ZONE/SEG/SCOPE → Design+Dev |
| Blockers | none cho Design prototype · Dev wire Search forward **blocked** đến SA nếu chọn Search path |
| Next | `/agent-design` khi tới lượt · **cấm** start Design trong task PO này |
| e2e | queued `/agent-qa*` only |

**Design MUST:** control-map khớp §5 · shell testId zone/segment · V1–V5 layout · **cấm** native Select · **cấm** action trên filter · **cấm** DEM chrome · **cấm** batch leaf.

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-po |
| skillVersion | 2026.08.25.02 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.30.01 |
| rulesVersion | 2026.08.30.6 |
| generatedAt | 2026-08-30T15:30:00.000Z |
| versionGate | rechecked |
| contentHashPriorDataAnaly | sha256:9c8f48aa63c0db817e348a729489019ecdb814928fedc007d79770d3724fcd4a |
| headerFingerprintPrior | sha256:e5226ff0b146ffd2e67210f7ebc5ebbf68ab3612f5416314988acc7c1b5442a9 |
| orchestratorSkillVersion | 2026.08.30.01 |
| orchestratorWorkflowVersion | 2026.08.30.01 |
| orchestratorRulesVersion | 2026.08.30.6 |
| dataAnalySkillVersion | 2026.08.25.01 |
| dataAnalyWorkflowVersion | 2026.08.30.01 |
| taskId | task_2acc197f |
| priorAnalyTaskId | task_853659c0 |

---
<!-- Version meta: skillId=agent-po skillVersion=2026.08.25.02 schemaVersion=1 workflowVersion=2026.08.30.01 rulesVersion=2026.08.30.6 versionGate=rechecked contentHash=sha256:9c8f48aa63c0db817e348a729489019ecdb814928fedc007d79770d3724fcd4a taskId=task_2acc197f -->
