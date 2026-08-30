# Data-analy — controlHint — reports-filter-bar (hub `/bao-cao` filter)

| Field | Value |
|-------|-------|
| feature | `reports-filter-bar` |
| packKind | `report` |
| mode | `feature_context` (queue `roleOnly=data_analy` · **no Excel** · CTX + demo hub + live MFE FilterBar) |
| changeScope | `edit_page` (chỉ Zone B filter trên hub — **cấm** reopen Kind E grid/toolbar hub · **cấm** batch leaf `rpt-*`) |
| status | `done` |
| skillId | `agent-data-analy` |
| skillVersion | `2026.08.25.01` |
| schemaVersion | `1` |
| workflowVersion | `2026.08.30.01` |
| rulesVersion | `2026.08.30.6` |
| versionGate | `rechecked` |
| contentHash | `sha256:9c8f48aa63c0db817e348a729489019ecdb814928fedc007d79770d3724fcd4a` |
| headerFingerprint | `sha256:e5226ff0b146ffd2e67210f7ebc5ebbf68ab3612f5416314988acc7c1b5442a9` |
| analyzedAt | `2026-08-30T15:18:09.965Z` |
| cluster | — (không Excel · sourceKind=`legacy` demo filter + CTX filter SSOT) |
| taskId | `task_853659c0` |
| autoApprove | `ON` |
| realData | `specs/_data-analy/features/reports-filter-bar-real-data.md` |
| parent | `reports` · peer zone `org-route-scope` (**done**) |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · Report `api/v1/report` · Integration lookups · **cấm ERP.*** |
| uiRepo | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Report` · `ReportFilterBar.tsx` |
| mfeStdUrl | `http://localhost:9311/bao-cao` |
| mfeStdRoute | `/bao-cao` |
| runMode | `full_pipeline` · Autopilot ON · e2eQa queued QA |

> Data-analy **đề xuất** controlHint. Design **chốt** control-map + V1–V5 layout. SA **chốt** forward `routeKind` / `kind` trên Search.  
> Typography: label **13** · input D14 / M16 (**GAP-TYP-01**).  
> **Cấm** `api/v1/rmms/*` · **cấm** ERP.* · **cấm** invent seed gán zone từ dump (**GOV-IMP-01/03**).  
> Layout: `filter-bar-layout-hard` · export/print/config = toolbar Zone B (**không** trên filter) · `report-toolbar-actions`.

## Source form → tables

| Field | Value |
|-------|-------|
| sourceFeature | Hub parent **`reports`** (Xem) · lookup peers **`road-route`** · **`org-unit`** · **`org-route-scope`** · family cite `asset` / `incident` / `patrol` (đã ship trên hub — **không** remap cột lưới trong pack này) |
| sourceTables | Lookups: `rmms_road_routes` · `rmms_org_units` · `rmms_org_route_scopes` · `rmms_org_route_scope_segments` · Xem hub (giữ): `rmms_road_assets` · `rmms_incidents` · `rmms_patrol_sessions` (read-model Report) |
| sourceFormReady | **yes** — `specs/reports` pipeline done · `org-route-scope` **done** · master `road-route`/`org-unit` live Integration · pack = **edit filter** (không thêm cột lưới Kind E) |
| missingFormFields | — (OUT scope: Col lưới hub giữ reports SSOT) |

## Sources

| Source | Path | sha256 / note |
|--------|------|---------------|
| Context (P0) | `docs/context/features/reports-filter-bar.md` | `9c8f48aa…` (contentHash) |
| Parent CTX | `docs/context/features/reports.md` | peer hub |
| Peer zone | `docs/context/features/org-route-scope.md` | **done** · `/mas/phan-khu` |
| Demo filter | `Linm.RMMS.Demo/src/demo/bao-cao/reports.html` | `e5226ff0…` (headerFingerprint) · Select loại/tuyến/kỳ · **stale** vs SearchInput |
| Parent hint | `specs/_data-analy/features/reports-control-hint.md` | Kind E hub prior |
| Peer hint | `specs/_data-analy/features/org-route-scope-control-hint.md` | cascade consumer |
| Shared | `specs/_data-analy/shared-catalogs/INVESTIGATE-CUC2.md` · seed 38 tuyến | APPROVED A |
| MFE live | `ReportListPage/ReportFilterBar.tsx` · `services/report/lookups.ts` | family/kind/route/search/period — **thiếu** zone + segment |
| BE live | `RoadRoutesController` · `OrgUnitsController` · `OrgRouteScopes*` · Report controllers | Integration + Report |
| DOMAIN-MAP | `Linm.RMMS.WebService/docs/DOMAIN-MAP.md` | `reports` → Report · peers Integration |

Normalized header (filter keys):

`family|kind|routeId|routeCode|zoneOrgCode|segmentCode|search|viewMode|month|year|quarter|fromDate|toDate`

## § Delta Current vs New (`edit_page` · `task_853659c0`)

| ID | Current (live hub FilterBar) | New (this pack) | Surface |
|----|------------------------------|-----------------|---------|
| GAP-RPT-FIL-HINT-01 | stub control-hint/real-data | Full filter controlHint + real-data §A+§B | data-analy |
| GAP-RPT-FIL-01 | Tuyến SearchInput = dump NHANH `Km 0+000…` (**mapped-wrong**) | Tuyến chính = QUOC_LO / HCM / CAO_TOC / KHAC mã `QL.*`/`HCM`/`CT.*` · **cấm** NHANH/TRANH/GOM · **cấm** mã `KM0+*` | FE + BE search |
| GAP-RPT-FIL-02 | `searchRoadRoutes` **không** gửi `routeKind` · Search API **không** nhận `routeKind` (List có) | Forward / extend Search `?routeKind=` **hoặc** FE gọi List + filter · T-BE-FILTER-01 | BE/BFF/FE |
| GAP-RPT-FIL-ZONE | **0** field Khu | `SearchInput` org-unit REG leaf `REG-I`…`REG-IV` · cây DRVN **không** mix Sở | FE |
| GAP-RPT-FIL-SEG | Đoạn nhầm trong Tuyến | Field «Đoạn» riêng · P1 dump `routeKind=NHANH|TRANH|GOM` **hoặc** segments từ `org-route-scopes` khi có gán · placeholder GAP-RPT-FIL-04 | FE |
| GAP-RPT-FIL-03 | Khu chưa lọc km assignment | Cascade sau `org-route-scope` Signed — overlap km khi có rows gán | FE+API |
| GAP-RPT-FIL-SCOPE | — | **Pilot chỉ** `ReportFilterBar.tsx` hub `/bao-cao` · **cấm** sửa hết leaf `rpt-*` cùng task | TL/Dev |
| Layout | leading family/kind/route/search + period | + zone + segment · V1–V5 `filter-bar-layout-hard` · **cấm** wrapper cả `leading` · **cấm** native `<select>` · **cấm** `ErpListHeaderFilters` / `LinListFilterField` | Design/Dev |

**Không** đổi: toolbar Làm mới · In · Config · Xuất Excel (check-in) · grid/pagination Kind E · family default `assets` · kind `summary` · date ẩn khi `assets`.

## Kind / zones (handoff Design)

Pack **report** = Kind **E** hub — **chỉ** sửa filter Zone B. Demo HTML = Select stale.

| Zone | Pattern | DoD |
|------|---------|-----|
| A | Header | giữ «Báo cáo Web» — **cấm** Thêm mới |
| B filter | `LinErpListFilterBar` · `data-lin-list-layout="erp-filter-bar"` | title trái · inputs + 🔍 cụm phải · wrap `flex-end` · testIdPrefix `rmms-reports-hub` |
| B toolbar | `reportToolbar` | Làm mới · In · Config — **không** trên filter |
| C/D | Grid + pagination | **OUT** this pack |

**Skip chrome:** GOVOne · Catalog 172 · demo topnav.

## Control hint — filter fields (Zone B · P0)

| Field key | Label | controlHint | catalogKind | Slot | Notes |
|-----------|-------|-------------|-------------|------|-------|
| family | Loại BC | `SearchInput` | enum FE | `leading` | `assets` · `incidents` · `checkins` — **cấm** native Select |
| kind | Loại báo cáo | `SearchInput` | enum theo family | `leading` | cascade từ family |
| routeId / routeCode | Tuyến | `SearchInput` | **road-route** | `leading` | chỉ tuyến chính · empty = tất cả · **cấm** KM* |
| zoneOrgCode | Khu | `SearchInput` tree | **org-unit** | `leading` | leaf `REG-I`…`REG-IV` · **cấm** mix partner/Sở |
| segmentCode | Đoạn | `SearchInput` | **road-route** (dump NHANH…) **hoặc** **org-route-scope** segment | `leading` | cascade sau tuyến (+ khu) · helper GAP-RPT-FIL-04 |
| search | Tìm kiếm | `SearchTextInput` / `Input` | text | `leading` | hạng mục · mã · cán bộ · **không** nút Tìm riêng |
| viewMode · month · year · quarter | Kỳ | `LinReportPeriodSelectorFields` | enum | `dateLeading` | giữ |
| fromDate / toDate | Từ / Đến | bar `Date` | — | date | **ẩn** khi family=`assets` |
| onSearch | Xem | bar 🔍 `onSearch` | — | search | apply load · **cấm** nút Tìm trùng |

### Cascade (pilot)

Tuyến → Khu → Đoạn. Đổi tuyến → clear khu+đoạn · đổi khu → clear đoạn · page/xem lại từ đầu.

### Shell (SSOT)

`leading` = fragment từng `div[data-testid]` (`field-family` · `field-kind` · `field-route` · `field-zone` · `field-segment` · `field-search`) — **cấm** wrapper cả block · **cấm** `filterMaxWidthPx`.

## Lookup APIs (cite live · gap ghi rõ)

| Lookup | API (cite) | consumer | Gap |
|--------|------------|----------|-----|
| road-route list | `GET api/v1/integration/road-routes?routeKind=` **live** | Tuyến chính / Đoạn dump | — |
| road-route search | `GET …/road-routes/search` **live** · **thiếu** `routeKind` | SearchInput hiện tại | **GAP-RPT-FIL-02** |
| org-unit list | `GET …/org-units?kind=REG` **live** | Khu | — |
| org-unit search | `GET …/org-units/search` **live** · **thiếu** `kind` | SearchInput | dùng List/`/tree` + FE leaf **hoặc** T-BE extend |
| org-unit tree | `GET …/org-units/tree` **live** | Khu tree DRVN | **cấm** mix Sở |
| org-route-scopes | `GET …/org-route-scopes` · `/search` · `/{id}/segments` **live** | Đoạn ⊆ zone khi có gán | empty = dump NHANH P1 · **cấm** invent-seed |
| Xem hub | `GET web-bff/api/v1/report/{assets\|incidents\|checkins}` **live** | onSearch | query thêm zone/segment khi SA chốt |

BFF prefix: `web-bff/api/v1/integration/*` · `web-bff/api/v1/report/*`.

## Gaps / open Q (handoff PO)

| ID | Severity | Note |
|----|----------|------|
| GAP-RPT-FIL-01 | P0 | Tuyến = NHANH dump — tách sang «Đoạn» |
| GAP-RPT-FIL-02 | P0 | Search road-routes thiếu `routeKind` · FE không forward |
| GAP-RPT-FIL-03 | P1 | Khu↔km overlap — dùng gán `org-route-scopes` khi có data |
| GAP-RPT-FIL-04 | P1 | Đoạn dump ≠ đoạn quản lý zone — UI helper/placeholder |
| GAP-RPT-FIL-ORG-KIND | P1 | org-units `/search` thiếu `kind=` (List có) |
| GAP-RPT-FIL-SCOPE | P0 | Pilot **chỉ** hub — **cấm** batch leaf FilterBar |
| GAP-FILTER-BAR-01/07 · WRAP-01 | P0 | Layout V1–V5 trên `:9311/bao-cao` |
| GAP-TL-FILTER-01 | P1 | TL/Dev **phải** load CTX filter trước Write |

## Handoff

| To | Đủ khi |
|----|--------|
| **PO** | CTX §1–§9 · controlHint + real-data **cả hai** · `sourceFormReady=yes` · open Q GAP-RPT-FIL-* |
| Design | control-map khớp bảng filter · shell testId · V1–V5 · **cấm** Select native |
| SA | Forward `routeKind`/`kind` trên Search **hoặc** contract List · query zone/segment trên Report Xem |
| TL/Dev | T-UI-FILTER-01 hub only · T-BE-FILTER-01 · **cấm** ERP.* |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-data-analy |
| skillVersion | 2026.08.25.01 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.30.01 |
| rulesVersion | 2026.08.30.6 |
| contentHash | sha256:9c8f48aa63c0db817e348a729489019ecdb814928fedc007d79770d3724fcd4a |
| headerFingerprint | sha256:e5226ff0b146ffd2e67210f7ebc5ebbf68ab3612f5416314988acc7c1b5442a9 |
| generatedAt | 2026-08-30T15:18:09.965Z |
| versionGate | rechecked |
| taskId | task_853659c0 |

---
<!-- Version meta: skillId=agent-data-analy skillVersion=2026.08.25.01 schemaVersion=1 workflowVersion=2026.08.30.01 rulesVersion=2026.08.30.6 versionGate=rechecked contentHash=sha256:9c8f48aa63c0db817e348a729489019ecdb814928fedc007d79770d3724fcd4a -->
