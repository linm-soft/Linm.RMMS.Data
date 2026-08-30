# Real-data bind — reports-filter-bar (hub `/bao-cao` filter)

| | |
|---|---|
| feature | `reports-filter-bar` |
| packKind | `report` |
| changeScope | `edit_page` · pilot **T-UI-FILTER-01** hub only |
| status | `done` |
| taskId | `task_853659c0` |
| prefix | Report `api/v1/report` · lookup Integration `api/v1/integration` · BFF `web-bff/api/v1/{report\|integration}` |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · **cấm ERP.*** |
| uiRepo | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Report` · `ReportFilterBar.tsx` |
| mfeStdUrl | `http://localhost:9311/bao-cao` |
| mfeStdRoute | `/bao-cao` |
| map | `none` |
| demo | `Linm.RMMS.Demo/src/demo/bao-cao/reports.html` (zone/field ref · **không** SSOT data) |
| filter SSOT | `docs/context/features/reports-filter-bar.md` |
| peer | `org-route-scope` · STATUS **done** · API `org-route-scopes` **live** |
| contentHash | `sha256:9c8f48aa63c0db817e348a729489019ecdb814928fedc007d79770d3724fcd4a` |
| headerFingerprint | `sha256:e5226ff0b146ffd2e67210f7ebc5ebbf68ab3612f5416314988acc7c1b5442a9` |
| sourceFeature | `reports` + catalogs `road-route` · `org-unit` · `org-route-scope` |
| sourceTables | `rmms_road_routes` · `rmms_org_units` · `rmms_org_route_scopes` · `rmms_org_route_scope_segments` · (Xem giữ) `rmms_road_assets` · `rmms_incidents` · `rmms_patrol_sessions` |
| sourceFormReady | **yes** |

## § Delta Current vs New (`edit_page` · `task_853659c0`)

| ID | Current | New |
|----|---------|-----|
| Artifacts | draft stubs | §A–§G filled · status **done** |
| Tuyến | `searchRoadRoutes` → dump NHANH `Km 0+000…` | Tuyến chính `QL.*` / HCM / CT · exclude NHANH/TRANH/GOM / `KM0+*` |
| Khu | **0** field | `org-units` REG leaf I–IV |
| Đoạn | nhầm trong Tuyến | Field riêng · dump KM* **hoặc** `org-route-scopes/{id}/segments` |
| `routeKind` on Search | **GAP** (List có · Search không) | T-BE-FILTER-01 / FE List path |
| Scope | — | **chỉ** hub `ReportFilterBar.tsx` · **cấm** leaf `rpt-*` |

## §A — Nguồn

| sourceKind | sourceCite | empty | error |
|------------|------------|-------|-------|
| `context` | `docs/context/features/reports-filter-bar.md` | — | version mismatch → gate |
| `context` | `docs/context/features/reports.md` | — | parent hub |
| `context` | `docs/context/features/org-route-scope.md` | — | peer zone **done** |
| `catalog` | `specs/_data-analy/shared-catalogs/INVESTIGATE-CUC2.md` · seed 38 | — | **cấm** QL.22 |
| `api` · road-route **live** | `RoadRoutesController` `api/v1/integration/road-routes` (+ `/search` · list `?routeKind=`) | «Tất cả tuyến» | toast · **cấm** alert |
| `api` · org-unit **live** | `OrgUnitsController` `api/v1/integration/org-units` (+ `/tree` · `/search` · list `?kind=REG`) | «Tất cả khu» | toast |
| `api` · org-route-scopes **live** | `OrgRouteScopes*` `api/v1/integration/org-route-scopes` (+ `/search` · `/{id}/segments`) | Đoạn empty → dump NHANH P1 / helper | toast · **cấm** invent-seed |
| `api` · Report Xem **live** | Report domain `api/v1/report/{assets\|incidents\|checkins}` | empty «Chưa xem» | toast |
| `api` · BFF | `…/Integration.Bff` · Report BFF | — | proxy-only |
| `mfe` | `src/pages/ReportListPage/ReportFilterBar.tsx` · `services/report/lookups.ts` | — | sameMfe partial (thiếu zone/segment) |
| `entity` | `RoadRouteEntity` → `rmms_road_routes` · `OrgUnitEntity` → `rmms_org_units` · `OrgRouteScopeEntity` → `rmms_org_route_scopes` · `OrgRouteScopeSegmentEntity` → `rmms_org_route_scope_segments` | — | Persistence cite |
| `domain` | `docs/DOMAIN-MAP.md` rows `reports` · `road-route` · `org-unit` · `org-route-scope` | — | **cấm** ERP.* |
| `demo` | `bao-cao/reports.html` filter Select | — | ref only · **không** SSOT |

`sourceCite` = file/controller **có trong repo**. **Cấm** bịa path (**GAP-DA-REAL-03**).

## §B — Bind field (HARD)

### B1 — Filter lookups (edit target)

| uiField | Label | controlHint | catalogKind | GET | write field | sameMfe |
|---------|-------|-------------|-------------|-----|-------------|---------|
| family | Loại BC | SearchInput | enum FE | static `FAMILY_LOOKUP` | `family` query | **yes** |
| kind | Loại báo cáo | SearchInput | enum FE | `kindsForFamily(family)` | `kind` / `type` | **yes** |
| routeId | Tuyến chính | SearchInput | road-route | `GET …/road-routes/search` **live** · prefer list `?routeKind=` exclude NHANH/TRANH/GOM | `routeId`/`routeCode` | **yes** (mapped-wrong → fix) |
| zoneOrgCode | Khu | SearchInput tree | org-unit | `GET …/org-units?kind=REG` **hoặc** `/tree` + leaf REG-I…IV | `zoneOrgCode` | **gap** (chưa field) |
| segmentCode | Đoạn | SearchInput | road-route dump **hoặc** org-route-scope segment | `GET …/road-routes?routeKind=NHANH` (P1) · `GET …/org-route-scopes/{id}/segments` khi có gán | `segmentCode` | **gap** |
| search | Tìm kiếm | SearchTextInput / Input | — | query `search` trên Xem | `search` | **yes** |
| viewMode · month · year · quarter | Kỳ | LinReportPeriodSelectorFields | enum | — | period fields | **yes** |
| fromDate · toDate | Từ / Đến | Date | — | query `from`/`to` (ẩn assets) | from/to | **yes** |
| onSearch | Xem | Search button | — | `GET …/report/{family}` | — | **yes** |

**Prefix map (live):**

| Catalog / op | Path |
|--------------|------|
| road-route Search | `GET /web-bff/api/v1/integration/road-routes/search` |
| road-route List + routeKind | `GET /web-bff/api/v1/integration/road-routes?routeKind=` |
| org-unit Tree / List kind | `GET /web-bff/api/v1/integration/org-units{/tree,}?kind=REG` |
| org-route-scopes | `GET /web-bff/api/v1/integration/org-route-scopes` · `/search` · `/{id}/segments` |
| Report Xem | `GET /web-bff/api/v1/report/{assets\|incidents\|checkins}` |

FE cite: `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Report/src/services/report/lookups.ts` · `ReportFilterBar.tsx`.

### B2 — Report grid columns

**OUT this pack** — giữ `reports` / leaf `rpt-*` SSOT. Filter edit **không** đổi Col ← formField hub.

## §C — Catalog

| catalogKind | search/list API | seed/import cite | Cấm |
|-------------|-----------------|------------------|------|
| road-route | `/road-routes/search` · list `?routeKind=` **live** | CUC2 38 · INVESTIGATE §3 | Dropdown cứng demo · chọn `KM0+*` làm tuyến chính |
| org-unit | `/org-units/tree` · list `?kind=REG` **live** | `org-unit-seed.json` REG-I…IV | mix partner/Sở vào tree · Dropdown cứng |
| org-route-scope | `/org-route-scopes` **live** | **0** invent-seed · config tay trên Master | seed dump CSV làm gán |
| enum family/kind/period | FE static | reports CTX | native `<select>` |

## §D — Map / vẽ

`map: none` — filter bar hub. **Cấm** invent LRS canvas.

## §E — Progress / vòng đời

`progress: none` — filter apply Xem · không state machine.

## §F — Handoff / empty / fail

| Case | Behavior |
|------|----------|
| tuyến empty | «Tất cả tuyến» · Xem full scope tài khoản |
| khu/đoạn empty | tất cả · clear cascade đúng rule |
| zone gán 0 rows | Đoạn P1 = dump NHANH · helper GAP-RPT-FIL-04 · **cấm** mock gán |
| lookup fail | SearchInput empty · toast |
| Xem fail | empty «Chưa xem» · toast |
| BFF down | seed 38 tuyến fallback **chỉ** mother routes (đã có) — **cấm** thêm mã bịa |

| Role | Dùng packet |
|------|-------------|
| PO | DoD filter real lookup · open Q GAP-RPT-FIL-* · pilot hub-only |
| Design | control-map = §B1 · V1–V5 · testId zone/segment |
| SA | giữ path cite · extend Search `routeKind`/`kind` nếu chọn Search path |
| Dev | wire hub FilterBar only · forward query · **cấm** batch leaf |
| QA | queued e2e — **cấm** chạy ở data_analy |

## §G — Source form gate (`data-analy-report-source-form`)

| Check | Result |
|-------|--------|
| packKind report | yes · edit filter |
| sourceFeature CTX | hub `reports` + Integration catalogs |
| sourceTables cited | yes · Persistence tables trên |
| form nguồn hub/catalogs | **yes** — reports pipeline done · org-route-scope done · road-route/org-unit live |
| `sourceFormReady` | **yes** → **không** block · handoff PO OK |
| remapping lưới | N/A this pack |

**Cấm** chain PO nếu thiếu control-hint **hoặc** real-data — cả hai **có** · status **done**.

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-data-analy |
| skillVersion | 2026.08.25.01 |
| schemaVersion | 2 |
| workflowVersion | 2026.08.30.01 |
| rulesVersion | 2026.08.30.6 |
| contentHash | sha256:9c8f48aa63c0db817e348a729489019ecdb814928fedc007d79770d3724fcd4a |
| headerFingerprint | sha256:e5226ff0b146ffd2e67210f7ebc5ebbf68ab3612f5416314988acc7c1b5442a9 |
| generatedAt | 2026-08-30T15:18:09.965Z |
| versionGate | rechecked |
| taskId | task_853659c0 |

---
<!-- Version meta: skillId=agent-data-analy skillVersion=2026.08.25.01 schemaVersion=2 workflowVersion=2026.08.30.01 rulesVersion=2026.08.30.6 versionGate=rechecked contentHash=sha256:9c8f48aa63c0db817e348a729489019ecdb814928fedc007d79770d3724fcd4a -->
