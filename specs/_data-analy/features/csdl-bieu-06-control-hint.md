# Data-analy — controlHint — csdl-bieu-06 (Kind B list + Kind D Slideout · Biểu 06)

| Field | Value |
|-------|-------|
| feature | `csdl-bieu-06` |
| packKind | `list` |
| mode | `feature_context` (edit_page · T-XLS-S06 · keep typed CRUD) |
| changeScope | `edit_page` |
| status | `done` |
| skillId | `agent-data-analy` |
| skillVersion | `2026.09.05.03` |
| schemaVersion | `1` |
| workflowVersion | `2026.09.05.03` |
| rulesVersion | `2026.09.17.3` |
| versionGate | `ok` (export epic delta · CTX+hash pair · autoApprove queue · **không** AskQuestion) |
| contentHash | `sha256:e32c48126fa0edbd02e612b7bd917a9ae07e53ec8629dbe01e1bcdcf82759fa3` |
| headerFingerprint | `sha256:3b2f5c531f0538509147846466d92090a3c8f5adc05a4be6d1dbb80ad73ff2a7` |
| analyzedAt | `2026-09-18T04:14:00.000Z` |
| cluster | `csdl-cuc-2026` · Excel sheet Biểu 6 · **19 cột** · Wave 1 `T-XLS-S06` |
| taskId | `task_4f26a959` |
| priorTask | `task_b6ef926c` (typed CRUD pipeline **done** — **cấm** re-run new_page typed) |
| autoApprove | `ON` (queue) |
| realData | `specs/_data-analy/features/csdl-bieu-06-real-data.md` |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · domain **Asset** · `api/v1/asset/csdl-records` · **cấm ERP.*** · **cấm** invent `api/v1/infra/*` |
| uiRepo | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| mfeStdUrl | `http://localhost:9301/so-ts/csdl-so-sach` · alias `/csdl-bieu-06` · hub `?resource=underpasses` |
| resource | `underpasses` |
| formNo | `06` · title VN **Hầm chui DS + hộp KT** |
| peerSoTs | `so-ts-underpass` (UNDERPASS) — deep-link OK · **cấm** merge 1 form / 1 sheet hai chuẩn · **≠** Sổ TS |
| IdCode prefix | `HC` |
| runMode | `edit_page` · export/import Excel đúng mẫu Cục · **cấm** new_page typed CRUD |
| epicCite | `docs/context/features/csdl-export-print.md` Wave 1 · `T-XLS-S06` |
| devSlashExport | `/implement-export-import-excel` · BFF binary |

> Data-analy **đề xuất** controlHint. Design **chốt** control-map (giữ prototype typed · **chỉ** delta toolbar export). SA **chốt** binary export path.  
> Typography: label **13** · input D14 / M16 (**GAP-TYP-01**).  
> **Giữ** PO/Design/SA artifacts typed — analy **chỉ** § Delta export.  
> Toast stub / typed STATUS done **≠** export xong.

## Sources

| Source | Path | sha256 / note |
|--------|------|---------------|
| Context | `docs/context/features/csdl-bieu-06.md` | `e32c48126fa0edbd02e612b7bd917a9ae07e53ec8629dbe01e1bcdcf82759fa3` |
| Export epic | `docs/context/features/csdl-export-print.md` | `2ca7ea0a7f1cfe4d3caf05688cc08ca2546457b09ed388671b58c3a769492c14` |
| Parent hub | `docs/context/features/csdl-so-sach.md` | cite hub Kind G · `resource=underpasses` |
| Cluster analy | `specs/_data-analy/csdl-cuc-2026/ANALYSIS-AND-TASKS.md` | Biểu 6 · 19 cột · peer `so-ts-underpass` · hộp KT |
| Demo | N/A (packet) · prior hub demo zone-only | **cấm** demo SSOT |
| DOMAIN-MAP | `Linm.RMMS.WebService/docs/DOMAIN-MAP.md` | Asset · `csdl-records` · slug `csdl-bieu-06` |
| Live MFE | `CsdlBieu06Page` · `fromCatalogToolbar` | typed list+slideout **shipped** · **thiếu** Xuất Excel |
| Live API | `CsdlCatalogRecordsController` · `CsdlCatalogExcelService` | CRUD live · peer Biểu 1–5 typed XLS · **Biểu 6 export gap** |
| Golden Excel | `data-import/…/1. Biểu mẫu CSDL.xls` sheet Biểu 6 | Cục **16-sheet** · **cấm** hồ sơ 12+8 làm golden |
| Peer CTX | `docs/context/features/so-ts-underpass.md` | Sổ TS deep-link only · **cấm** gộp sheet export |

Normalized header (unchanged · 19):

`code|roadCode|roadName|province|kmPoint|underpassKind|apertureM|pipeCount|bodyStructure|portalStructure|lengthM|designLoad|pavementInside|lighting|drainage|builtYear|status|manageUnit|notes`

## § Delta Current vs New (`edit_page` · `task_4f26a959` · **T-XLS-S06**)

| ID | Current (live / prior analy) | New (this analy) | Surface |
|----|------------------------------|------------------|---------|
| GAP-BIEU06-XLS-01 | Typed CRUD + grid 19 cột **PASS** · toolbar **không** Xuất/Import binary | **Xuất Excel** (+ Import P1) đúng sheet Biểu 6 · merge-header · **19 cột** · gồm hộp KT | `catalogToolbar` / `report-toolbar-actions` |
| GAP-BIEU06-XLS-02 | Toast / stub action coi «có nút» · T-OUT-01 | File binary qua BFF · `/implement-export-import-excel` · **cấm** toast-only done | FE + BFF + BE |
| GAP-BIEU06-XLS-03 | — / hồ sơ 12+8 STALE · prior GAP-CSDL-XLS-01 OUT | Golden = Cục **16-sheet** xls sheet Biểu 6 · **cấm** 12+8 golden | SA/Dev checksum |
| GAP-BIEU06-XLS-04 | Filter bar chỉ field + 🔍 | **Cấm** đặt Xuất/Import trên `LinErpListFilterBar` (**GAP-FILTER-BAR-08**) | Zone B filter vs toolbar |
| GAP-BIEU06-XLS-05 | API CRUD only · ExcelService peer Biểu 1–5 | `GET …/csdl-records/export?resource=underpasses` · `POST …/import?resource=` (cite epic · SA chốt) | BE Asset |
| GAP-BIEU06-XLS-PEER | Peer Sổ TS `so-ts-underpass` / UNDERPASS | Export **chỉ** sheet Biểu 6 Cục · **cấm** gộp cột/row Sổ TS vào file | XLS engine |
| — | Typed form/list/route · underpassKind · Schema_CsdlBieu6 | **Không đổi** · **cấm** new_page typed CRUD re-open | form / list |

**Không** đổi: API prefix `api/v1/asset/csdl-records` · resource `underpasses` · Kind B A–D · Kind D Slideout · filter slots · **cấm ERP.*** · IdCode `HC` · underpassKind/hộp KT đã chốt · peer Sổ TS no-merge.

**Closed / keep (prior new_page — không reopen):** GAP-BIEU06-TYPED/ROUTE/KIND/PIPE/STRUCT/LOAD/PAVE/LIGHT/DRAIN/POINT · ROAD/PROV · ORG P2 debt · PEER/CUC-11 · prior GAP-CSDL-XLS-01 supersede bởi GAP-BIEU06-XLS-*.

## Kind / zones (handoff Design — delta only)

| Zone / surface | Pattern | DoD this edit |
|----------------|---------|----------------|
| List A | Header | Giữ «Biểu 06 — Hầm chui DS + hộp KT» · back hub |
| List B toolbar | `catalogToolbar` | **Thêm** Xuất Excel (+ Import P1) · icon `erp-control-icon-map` · **cấm** filter |
| List B filter | `LinErpListFilterBar` | **Unchanged** · 0 action Xuất (**GAP-FILTER-BAR-08**) |
| List C/D | Grid + pagination | Unchanged typed cols |
| Form | Kind D Slideout | Unchanged typed 19 · underpassKind · hộp KT |
| Map | none | — |

## Control hint — list filters (Zone B) — **unchanged**

| Field key | Label | controlHint | catalogKind | Notes |
|-----------|-------|-------------|-------------|-------|
| search | Tìm kiếm | `SearchTextInput` | text | mã · đường · ghi chú |
| province | Tỉnh/TP | `Dropdown` | LOOKUP_STATIC | |
| status | Tình trạng | `Dropdown` | LOOKUP_STATIC | tot/tb/kem/hong |
| roadCode | Đường | `SearchInput` | **road-route** | |
| kmPoint | Lý trình (Km) | `Number` | — | Point |
| underpassKind | Loại | `Dropdown` | LOOKUP_STATIC | hầm chui DS / hộp KT |

## Control hint — form fields — **unchanged** (cite prior · 19 cột typed)

Giữ bảng form prior `task_b6ef926c` (road · province · kmPoint · underpassKind · aperture · pipeCount · body/portal · length · designLoad · pavement · lighting · drainage · year · status · manageUnit · notes). **Cấm** đổi controlHint form trong pack này.

## Control hint — actions (**delta**)

| Action | Surface | Notes |
|--------|---------|-------|
| export-excel | **catalogToolbar** | Label **Xuất Excel** · binary download · sheet Biểu 6 · filter QS nếu SA chốt |
| import-excel | **catalogToolbar** (P1) | Template Cục · 19 cột · **cấm** filter bar · **cấm** gộp Sổ TS |
| create / view / edit / copy / delete / history / schema-config / refresh | Toolbar (keep) | Unchanged |
| save / cancel | Form footer | Unchanged |
| peer-sots | Toolbar / row (opt) | deep-link `/so-ts?type=UNDERPASS` · **cấm** merge form/export |
| print-pdf | — | **OUT** Biểu (sổ Word) · không Wave 1 S06 |

## Open questions (PO trước Design)

| ID | Q | Options |
|----|---|---------|
| Q-XLS-SCOPE | Export = **filtered set** hay **all tenant resource**? | filtered · all_resource (**SA/PO**) |
| Q-XLS-IMPORT | Import P1 cùng task hay DEFER sau export-only? | import_now · export_only_p0 |
| Q-XLS-FILENAME | Tên file download? | `Bieu06_HamChuiHopKT_{yyyyMMdd}.xls(x)` · SA chốt |

## Handoff

| Role | Dùng packet |
|------|-------------|
| **PO** | § Delta XLS + open Q → delta `requirement.md` (**giữ** typed prior) |
| **Design** | control-map **chỉ** toolbar Xuất · giữ prototype 19 · reviewUrl |
| **SA** | path export/import binary · sheet Biểu 6 · checksum 19 · **cấm** 12+8 golden |
| **TL/Dev** | `/implement-export-import-excel` · wire `catalogToolbar` · **cấm** filter bar |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-data-analy |
| skillVersion | 2026.09.05.03 |
| schemaVersion | 1 |
| workflowVersion | 2026.09.05.03 |
| rulesVersion | 2026.09.17.3 |
| contentHash | `sha256:e32c48126fa0edbd02e612b7bd917a9ae07e53ec8629dbe01e1bcdcf82759fa3` |
| headerFingerprint | `sha256:3b2f5c531f0538509147846466d92090a3c8f5adc05a4be6d1dbb80ad73ff2a7` |
| generatedAt | 2026-09-18T04:14:00.000Z |
| versionGate | ok |
| taskId | task_4f26a959 |
| packKind | list |
| changeScope | edit_page |

---
<!-- Version meta: skillId=agent-data-analy skillVersion=2026.09.05.03 schemaVersion=1 workflowVersion=2026.09.05.03 rulesVersion=2026.09.17.3 versionGate=ok contentHash=sha256:e32c48126fa0edbd02e612b7bd917a9ae07e53ec8629dbe01e1bcdcf82759fa3 -->
