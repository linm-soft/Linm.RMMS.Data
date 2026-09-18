# Data-analy — controlHint — csdl-bieu-02 (Kind B list + Kind D Slideout · Biểu 02)

| Field | Value |
|-------|-------|
| feature | `csdl-bieu-02` |
| packKind | `list` |
| mode | `feature_context` (edit_page · T-XLS-S02 · keep typed CRUD) |
| changeScope | `edit_page` |
| status | `done` |
| skillId | `agent-data-analy` |
| skillVersion | `2026.09.05.03` |
| schemaVersion | `1` |
| workflowVersion | `2026.09.05.03` |
| rulesVersion | `2026.09.17.3` |
| versionGate | `ok` (CTX hash bump + export delta Wave 1 · autoApprove queue · **không** AskQuestion) |
| contentHash | `sha256:43c517bec9635b8c3ac292e54e566cf38f3ba97c86a8ce56e5b4c587427dcf40` |
| headerFingerprint | `sha256:34e1fcb051f6010fbe70ebdffab71df3d6f441a373d3be0249dd601e596d5591` |
| analyzedAt | `2026-09-17T18:43:48.000Z` |
| cluster | `csdl-cuc-2026` · Excel sheet Biểu 2 · **48 cột** · Wave 1 `T-XLS-S02` |
| taskId | `task_55ac6074` |
| priorTask | `task_dd8553f8` (typed CRUD pipeline **done** — **cấm** re-run new_page typed) |
| autoApprove | `ON` (queue) |
| realData | `specs/_data-analy/features/csdl-bieu-02-real-data.md` |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · domain **Asset** · `api/v1/asset/csdl-records` · **cấm ERP.*** · **cấm** invent `api/v1/infra/*` |
| uiRepo | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| mfeStdUrl | `http://localhost:9301/so-ts/csdl-so-sach` · alias `/csdl-bieu-02` · hub `?resource=bridges` |
| resource | `bridges` |
| formNo | `02` · title VN **Thống kê cầu** |
| peerSoTs | Sổ 6 / passport `/bridges/{id}` — deep-link OK · **cấm** merge 1 form |
| IdCode prefix | `BR` |
| runMode | `edit_page` · export/import Excel đúng mẫu Cục · **cấm** new_page typed CRUD |
| epicCite | `docs/context/features/csdl-export-print.md` Wave 1 · `T-XLS-S02` |
| devSlashExport | `/implement-export-import-excel` · BFF binary |

> Data-analy **đề xuất** controlHint. Design **chốt** control-map (giữ prototype typed · **chỉ** delta toolbar export). SA **chốt** binary export path.  
> Typography: label **13** · input D14 / M16 (**GAP-TYP-01**).  
> **Giữ** PO/Design/SA artifacts typed — analy **chỉ** § Delta export.  
> Toast stub / typed STATUS done **≠** export xong.

## Sources

| Source | Path | sha256 / note |
|--------|------|---------------|
| Context | `docs/context/features/csdl-bieu-02.md` | `43c517bec9635b8c3ac292e54e566cf38f3ba97c86a8ce56e5b4c587427dcf40` |
| Export epic | `docs/context/features/csdl-export-print.md` | `2ca7ea0a7f1cfe4d3caf05688cc08ca2546457b09ed388671b58c3a769492c14` |
| Parent hub | `docs/context/features/csdl-so-sach.md` | cite hub Kind G · `resource=bridges` |
| Cluster analy | `specs/_data-analy/csdl-cuc-2026/ANALYSIS-AND-TASKS.md` | Biểu 2 · 48 cột · GPS 3 điểm |
| Demo | N/A (packet) · prior hub demo zone-only | **cấm** demo SSOT |
| DOMAIN-MAP | `Linm.RMMS.WebService/docs/DOMAIN-MAP.md` | Asset · `csdl-bieu-02` / `csdl-records` |
| Live MFE | `CsdlBieu02Page` / hub bridges · `fromCatalogToolbar` | typed list+slideout **shipped** · **thiếu** Xuất Excel |
| Live API | `CsdlCatalogRecordsController` | CRUD live · export/import **gap** |
| Golden Excel | `data-import/…/1. Biểu mẫu CSDL.xls` sheet Biểu 2 | Cục **16-sheet** · **cấm** hồ sơ 12+8 làm golden |

Normalized header (unchanged · 48):

`code|bridgeName|roadCode|roadName|province|kmFrom|kmTo|side|gpsStartLat|gpsStartLng|gpsMidLat|gpsMidLng|gpsEndLat|gpsEndLng|spanCount|spanScheme|beamLengthM|beamType|abutmentCondition|abutmentFoundation|abutmentBody|pierCondition|pierFoundation|pierBody|designLoad|actualLoad|bearingCount|bearingType|railingLengthM|curbAreaM2|handrailType|drainPipeCount|drainPipeLengthM|reflectiveArea10mM2|steelCompositeBeam|pierAbutmentCrown|lengthM|carriageWidthM|builtYear|status|manageUnit|updatedByName|notes|waterClearanceM|approachType|navigationClass|legacyCol64|legacyCol69`

## § Delta Current vs New (`edit_page` · `task_55ac6074` · **T-XLS-S02**)

| ID | Current (live / prior analy) | New (this analy) | Surface |
|----|------------------------------|------------------|---------|
| GAP-BIEU02-XLS-01 | Typed CRUD + grid 48 cột **PASS** · toolbar **không** Xuất/Import binary | **Xuất Excel** (+ Import P1) đúng sheet Biểu 2 · merge-header · 48 cột · GPS 3 điểm | `catalogToolbar` / `report-toolbar-actions` |
| GAP-BIEU02-XLS-02 | Toast / stub action coi «có nút» | File binary qua BFF · `/implement-export-import-excel` · **cấm** toast-only done | FE + BFF + BE |
| GAP-BIEU02-XLS-03 | — / hồ sơ 12+8 STALE | Golden = Cục **16-sheet** xls sheet Biểu 2 · **cấm** 12+8 golden | SA/Dev checksum |
| GAP-BIEU02-XLS-04 | Filter bar chỉ field + 🔍 | **Cấm** đặt Xuất/Import trên `LinErpListFilterBar` (**GAP-FILTER-BAR-08**) | Zone B filter vs toolbar |
| GAP-BIEU02-XLS-05 | API CRUD only | `GET …/csdl-records/export?resource=bridges` · `POST …/import?resource=` (cite epic · SA chốt) | BE Asset |
| GAP-BIEU02-XLS-06 | Prior GAP-CSDL-XLS-01 stub OUT | Đóng gap export sheet Biểu 2 đúng 48 (+ legacy map) | toolbar + engine |
| — | Typed form/list/route / Schema_CsdlBieu2 | **Không đổi** · **cấm** new_page typed CRUD re-open | form / list |

**Không** đổi: API prefix `api/v1/asset/csdl-records` · resource `bridges` · Kind B A–D · Kind D Slideout · filter slots · GPS/dầm/phần dưới typed · **cấm ERP.*** · IdCode `BR` · peer passport no-merge.

**Closed / keep (prior new_page — không reopen):** GAP-BIEU02-TYPED-01 · ROUTE · GPS · BEAM · SUB · LOAD · FURN · LEGACY (SA đã chốt) · ROAD/PROV/ORG P2 debt · DMAP.

## Kind / zones (handoff Design — delta only)

| Zone / surface | Pattern | DoD this edit |
|----------------|---------|----------------|
| List A | Header | Giữ title · back hub |
| List B toolbar | `catalogToolbar` | **Thêm** Xuất Excel (+ Import P1) · icon `erp-control-icon-map` · **cấm** filter |
| List B filter | `LinErpListFilterBar` | **Unchanged** · 0 action Xuất (**GAP-FILTER-BAR-08**) |
| List C/D | Grid + pagination | Unchanged typed cols |
| Form | Kind D Slideout | Unchanged typed 48 · GPS 3 điểm |
| Map | none | GPS fields only · **cấm** invent map canvas |

## Control hint — list filters (Zone B) — **unchanged**

| Field key | Label | controlHint | catalogKind | Notes |
|-----------|-------|-------------|-------------|-------|
| search | Tìm kiếm | `SearchTextInput` | text | mã · tên cầu · ghi chú |
| province | Tỉnh/TP | `Dropdown` | LOOKUP_STATIC | |
| status | Tình trạng | `Dropdown` | LOOKUP_STATIC | |
| roadCode | Đường | `SearchInput` | **road-route** | |
| kmFrom / kmTo | Từ/Đến Km | `Number` | — | |
| beamType | Loại dầm | `Dropdown` | LOOKUP_STATIC | optional filter |

## Control hint — form fields — **unchanged** (cite prior · 48 cột typed)

Giữ bảng form prior `task_dd8553f8` (GPS ×3 · dầm · phần dưới · gối/lan can · legacy). **Cấm** đổi controlHint form trong pack này.

## Control hint — actions (**delta**)

| Action | Surface | Notes |
|--------|---------|-------|
| export-excel | **catalogToolbar** | Label **Xuất Excel** · binary download · sheet Biểu 2 · filter QS áp dụng nếu SA chốt |
| import-excel | **catalogToolbar** (P1) | Template Cục · legacy 64–69 map/drop · **cấm** filter bar |
| create / view / edit / copy / delete / history / schema-config / refresh | Toolbar (keep) | Unchanged |
| save / cancel | Form footer | Unchanged |
| print-pdf | — | **OUT** Biểu (sổ Word) · không Wave 1 S02 |

## Open questions (PO trước Design)

| ID | Q | Options |
|----|---|---------|
| Q-XLS-SCOPE | Export = **filtered set** hay **all tenant resource**? | filtered · all_resource (**SA/PO**) |
| Q-XLS-IMPORT | Import P1 cùng task hay DEFER sau export-only? | import_now · export_only_p0 |
| Q-XLS-FILENAME | Tên file download? | `Bieu02_ThongKeCau_{yyyyMMdd}.xls(x)` · SA chốt |

## Handoff

| Role | Dùng packet |
|------|-------------|
| **PO** | § Delta T-XLS-S02 · DoD binary ≠ toast · giữ Grid AC typed |
| **Design** | **Giữ** prototype typed · **chỉ** thêm nút Xuất (+Import) trên toolbar · reviewUrl cập nhật zone |
| **SA** | Path export/import · BFF binary · golden 16-sheet · **cấm** đổi typed entity trừ gap |
| **TL/Dev** | `/implement-export-import-excel` · **cấm** filter-bar export · **cấm** re-CRUD typed |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-data-analy |
| skillVersion | 2026.09.05.03 |
| schemaVersion | 1 |
| workflowVersion | 2026.09.05.03 |
| rulesVersion | 2026.09.17.3 |
| contentHash | `sha256:43c517bec9635b8c3ac292e54e566cf38f3ba97c86a8ce56e5b4c587427dcf40` |
| headerFingerprint | `sha256:34e1fcb051f6010fbe70ebdffab71df3d6f441a373d3be0249dd601e596d5591` |
| generatedAt | 2026-09-17T18:43:48.000Z |
| versionGate | ok |
| taskId | task_55ac6074 |
| packKind | list |
| changeScope | edit_page |

---
<!-- Version meta: skillId=agent-data-analy skillVersion=2026.09.05.03 schemaVersion=1 workflowVersion=2026.09.05.03 rulesVersion=2026.09.17.3 versionGate=ok contentHash=sha256:43c517bec9635b8c3ac292e54e566cf38f3ba97c86a8ce56e5b4c587427dcf40 changeScope=edit_page taskId=task_55ac6074 -->
