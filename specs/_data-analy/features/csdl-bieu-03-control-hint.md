# Data-analy — controlHint — csdl-bieu-03 (Kind B list + Kind D Slideout · Biểu 03)

| Field | Value |
|-------|-------|
| feature | `csdl-bieu-03` |
| packKind | `list` |
| mode | `feature_context` (edit_page · T-XLS-S03 · keep typed CRUD) |
| changeScope | `edit_page` |
| status | `done` |
| skillId | `agent-data-analy` |
| skillVersion | `2026.09.05.03` |
| schemaVersion | `1` |
| workflowVersion | `2026.09.05.03` |
| rulesVersion | `2026.09.17.3` |
| versionGate | `ok` (export epic delta · CTX+hash pair · autoApprove queue · **không** AskQuestion) |
| contentHash | `sha256:57fc9dab0df1bc69fa444e65b543c8bc14b7ef9b2f12d92f72b12fa40e5cc1d9` |
| headerFingerprint | `sha256:3574a45ea4cc36f0f01b6cff9e5a7577f52fdb7a7b79508685c1038b473564d8` |
| analyzedAt | `2026-09-17T19:21:32.299Z` |
| cluster | `csdl-cuc-2026` · Excel sheet Biểu 3 · **42 cột** · Wave 1 `T-XLS-S03` |
| taskId | `task_9054a943` |
| priorTask | `task_df175ffd` (typed CRUD pipeline **done** — **cấm** re-run new_page typed) |
| autoApprove | `ON` (queue) |
| realData | `specs/_data-analy/features/csdl-bieu-03-real-data.md` |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · domain **Asset** · `api/v1/asset/csdl-records` · **cấm ERP.*** · **cấm** invent `api/v1/infra/*` |
| uiRepo | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| mfeStdUrl | `http://localhost:9301/so-ts/csdl-so-sach` · alias `/csdl-bieu-03` · hub `?resource=road-tunnels` |
| resource | `road-tunnels` |
| formNo | `03` · title VN **Hầm đường bộ** |
| peerSoTs | none (—) · Sổ 6 QL cầu/hầm deep-link OK · **cấm** merge |
| IdCode prefix | `TN` |
| runMode | `edit_page` · export/import Excel đúng mẫu Cục · **cấm** new_page typed CRUD |
| epicCite | `docs/context/features/csdl-export-print.md` Wave 1 · `T-XLS-S03` |
| devSlashExport | `/implement-export-import-excel` · BFF binary |

> Data-analy **đề xuất** controlHint. Design **chốt** control-map (giữ prototype typed · **chỉ** delta toolbar export). SA **chốt** binary export path.  
> Typography: label **13** · input D14 / M16 (**GAP-TYP-01**).  
> **Giữ** PO/Design/SA artifacts typed — analy **chỉ** § Delta export.  
> Toast stub / typed STATUS done **≠** export xong.

## Sources

| Source | Path | sha256 / note |
|--------|------|---------------|
| Context | `docs/context/features/csdl-bieu-03.md` | `98b63370d49070a44267fef7e0e73e199020efa547455d0cf68ca62845c4eb28` |
| Export epic | `docs/context/features/csdl-export-print.md` | `2ca7ea0a7f1cfe4d3caf05688cc08ca2546457b09ed388671b58c3a769492c14` |
| Parent hub | `docs/context/features/csdl-so-sach.md` | cite hub Kind G · `resource=road-tunnels` |
| Cluster analy | `specs/_data-analy/csdl-cuc-2026/ANALYSIS-AND-TASKS.md` | Biểu 3 · 42 cột · GPS 3 điểm · 2 ống = 2 bản ghi |
| Demo | N/A (packet) · prior hub demo zone-only | **cấm** demo SSOT |
| DOMAIN-MAP | `Linm.RMMS.WebService/docs/DOMAIN-MAP.md` | Asset · `csdl-records` · slug `csdl-bieu-03` |
| Live MFE | `CsdlBieu03Page` · `fromCatalogToolbar` | typed list+slideout **shipped** · **thiếu** Xuất Excel |
| Live API | `CsdlCatalogRecordsController` · `CsdlCatalogExcelService` | CRUD live · Biểu 1/2 typed XLS · **Biểu 3 export gap** |
| Golden Excel | `data-import/…/1. Biểu mẫu CSDL.xls` sheet Biểu 3 | Cục **16-sheet** · **cấm** hồ sơ 12+8 làm golden |

Normalized header (unchanged · 42):

`tunnelName|roadCode|roadName|province|kmFrom|kmTo|side|gpsStartLat|gpsStartLng|gpsMidLat|gpsMidLng|gpsEndLat|gpsEndLng|crossingType|tunnelClass|tubeCount|tubeIndex|liningType|clearanceM|sectionHeightM|sectionWidthM|carriageWidthM|pavementInTunnel|drainLengthM|drainSpacingM|shoulderInTunnelM|firePump|fireNicheCount|fanCount|lightCount|hasCctv|hasVms|lengthM|builtYear|status|manageUnit|updatedByName|notes|ventilationType|escapeExitCount|designLoad|ownerUnit`

## § Delta Current vs New (`edit_page` · `task_9054a943` · **T-XLS-S03**)

| ID | Current (live / prior analy) | New (this analy) | Surface |
|----|------------------------------|------------------|---------|
| GAP-BIEU03-XLS-01 | Typed CRUD + grid 42 cột **PASS** · toolbar **không** Xuất/Import binary | **Xuất Excel** (+ Import P1) đúng sheet Biểu 3 · merge-header · 42 cột · GPS 3 điểm · 2 ống = 2 rows | `catalogToolbar` / `report-toolbar-actions` |
| GAP-BIEU03-XLS-02 | Toast / stub action coi «có nút» | File binary qua BFF · `/implement-export-import-excel` · **cấm** toast-only done | FE + BFF + BE |
| GAP-BIEU03-XLS-03 | — / hồ sơ 12+8 STALE · prior GAP-CSDL-XLS-01 OUT | Golden = Cục **16-sheet** xls sheet Biểu 3 · **cấm** 12+8 golden | SA/Dev checksum |
| GAP-BIEU03-XLS-04 | Filter bar chỉ field + 🔍 | **Cấm** đặt Xuất/Import trên `LinErpListFilterBar` (**GAP-FILTER-BAR-08**) | Zone B filter vs toolbar |
| GAP-BIEU03-XLS-05 | API CRUD only · ExcelService Biểu 1/2 | `GET …/csdl-records/export?resource=road-tunnels` · `POST …/import?resource=` (cite epic · SA chốt) | BE Asset |
| GAP-BIEU03-XLS-TUBE | Export phải giữ **1 row Excel / 1 ống** (tubeIndex + GPS bộ) | Import/export **không** gộp 2 ống 1 hàng | XLS engine |
| — | Typed form/list/route | **Không đổi** · **cấm** new_page typed CRUD re-open | form / list |

**Không** đổi: API prefix `api/v1/asset/csdl-records` · resource `road-tunnels` · Kind B A–D · Kind D Slideout · filter slots · **cấm ERP.*** · IdCode `TN` · GPS/TUBE rules đã chốt · peer Sổ 6 no-merge.

**Closed / keep (prior new_page — không reopen):** GAP-BIEU03-TYPED/ROUTE/GPS/TUBE/STRUCT/DRAIN/FIRE/VENT · ROAD/PROV · ORG P2 debt · DMAP.

## Kind / zones (handoff Design — delta only)

| Zone / surface | Pattern | DoD this edit |
|----------------|---------|----------------|
| List A | Header | Giữ «Biểu 03 — Hầm đường bộ» · back hub |
| List B toolbar | `catalogToolbar` | **Thêm** Xuất Excel (+ Import P1) · icon `erp-control-icon-map` · **cấm** filter |
| List B filter | `LinErpListFilterBar` | **Unchanged** · 0 action Xuất (**GAP-FILTER-BAR-08**) |
| List C/D | Grid + pagination | Unchanged typed cols |
| Form | Kind D Slideout | Unchanged typed 42 · sections GPS/kết cấu/thoát+PCCC/thiết bị |
| Map | none | — |

## Control hint — list filters (Zone B) — **unchanged**

| Field key | Label | controlHint | catalogKind | Notes |
|-----------|-------|-------------|-------------|-------|
| search | Tìm kiếm | `SearchTextInput` | text | mã · tên hầm · đường · ghi chú |
| province | Tỉnh/TP | `Dropdown` | LOOKUP_STATIC | |
| status | Tình trạng | `Dropdown` | LOOKUP_STATIC | tot/tb/kem/hong |
| roadCode | Đường | `SearchInput` | **road-route** | |
| kmFrom / kmTo | Từ/Đến Km | `Number` | — | |
| tunnelClass | Cấp hầm | `Dropdown` | LOOKUP_STATIC | optional |
| tubeCount | Số ống | `Number` | — | optional |

## Control hint — form fields — **unchanged** (cite prior · 42 cột typed)

Giữ bảng form prior `task_df175ffd` (GPS ×3 · tubeCount/tubeIndex · kết cấu/PCCC/thiết bị · ventilationType…). **Cấm** đổi controlHint form trong pack này.

## Control hint — actions (**delta**)

| Action | Surface | Notes |
|--------|---------|-------|
| export-excel | **catalogToolbar** | Label **Xuất Excel** · binary download · sheet Biểu 3 · filter QS nếu SA chốt |
| import-excel | **catalogToolbar** (P1) | Template Cục · **1 row / ống** · **cấm** filter bar |
| create / view / edit / copy / delete / history / schema-config / refresh | Toolbar (keep) | Unchanged |
| save / cancel | Form footer | Unchanged |
| open-so6 | Row optional | deep-link · **cấm** merge |
| print-pdf | — | **OUT** Biểu (sổ Word) · không Wave 1 S03 |

## Open questions (PO trước Design)

| ID | Q | Options |
|----|---|---------|
| Q-XLS-SCOPE | Export = **filtered set** hay **all tenant resource**? | filtered · all_resource (**SA/PO**) |
| Q-XLS-IMPORT | Import P1 cùng task hay DEFER sau export-only? | import_now · export_only_p0 |
| Q-XLS-FILENAME | Tên file download? | `Bieu03_HamDuongBo_{yyyyMMdd}.xls(x)` · SA chốt |

## Handoff

| Role | Dùng packet |
|------|-------------|
| **PO** | § Delta T-XLS-S03 · DoD binary ≠ toast · giữ Grid AC typed |
| **Design** | **Giữ** prototype typed · **chỉ** thêm nút Xuất (+Import) trên toolbar · reviewUrl cập nhật zone |
| **SA** | Path export/import · BFF binary · golden 16-sheet · **cấm** đổi typed entity trừ gap · tube/GPS row rule |
| **TL/Dev** | `/implement-export-import-excel` · **cấm** filter-bar export · **cấm** re-CRUD typed |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-data-analy |
| skillVersion | 2026.09.05.03 |
| schemaVersion | 1 |
| workflowVersion | 2026.09.05.03 |
| rulesVersion | 2026.09.17.3 |
| contentHash | `sha256:57fc9dab0df1bc69fa444e65b543c8bc14b7ef9b2f12d92f72b12fa40e5cc1d9` |
| headerFingerprint | `sha256:3574a45ea4cc36f0f01b6cff9e5a7577f52fdb7a7b79508685c1038b473564d8` |
| generatedAt | 2026-09-17T19:21:32.299Z |
| versionGate | ok |
| taskId | task_9054a943 |
| packKind | list |
| changeScope | edit_page |

---
<!-- Version meta: skillId=agent-data-analy skillVersion=2026.09.05.03 schemaVersion=1 workflowVersion=2026.09.05.03 rulesVersion=2026.09.17.3 versionGate=ok contentHash=sha256:57fc9dab0df1bc69fa444e65b543c8bc14b7ef9b2f12d92f72b12fa40e5cc1d9 changeScope=edit_page taskId=task_9054a943 -->
