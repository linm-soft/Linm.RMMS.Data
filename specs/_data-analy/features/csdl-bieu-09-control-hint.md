# Data-analy — controlHint — csdl-bieu-09 (Kind B list + Kind D Slideout · Biểu 09)

| Field | Value |
|-------|-------|
| feature | `csdl-bieu-09` |
| packKind | `list` |
| mode | `feature_context` (edit_page · T-XLS-S09 · keep typed CRUD) |
| changeScope | `edit_page` |
| status | `done` |
| skillId | `agent-data-analy` |
| skillVersion | `2026.09.05.03` |
| schemaVersion | `1` |
| workflowVersion | `2026.09.05.03` |
| rulesVersion | `2026.09.17.3` |
| versionGate | `ok` (CTX hash change + export delta Wave 1 · autoApprove queue · **không** AskQuestion) |
| contentHash | `sha256:58c012cef8ad07ae7a6d5e8ab513668c51dc0755d1f209783beb41ba1c4ccc01` |
| headerFingerprint | `sha256:765521dee151f2ded36c582ca1a0b7ec048237b88cfc5b27481f09e6787e9a77` |
| analyzedAt | `2026-09-18T05:30:00.000Z` |
| cluster | `csdl-cuc-2026` · Excel sheet Biểu 9 · **17 cột** · 2 khối LG/GPMB · Wave 1 `T-XLS-S09` |
| taskId | `task_f4041b8e` |
| priorTask | `task_b7a89508` → pipeline review `task_a5fbb485` (typed CRUD **done** — **cấm** re-run new_page typed) |
| autoApprove | `ON` (queue) |
| realData | `specs/_data-analy/features/csdl-bieu-09-real-data.md` |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · domain **Asset** · `api/v1/asset/csdl-records` · **cấm ERP.*** · **cấm** invent `api/v1/infra/*` |
| uiRepo | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| mfeStdUrl | `http://localhost:9301/so-ts/csdl-so-sach` · alias `/csdl-bieu-09` · hub `?resource=boundary-markers` |
| resource | `boundary-markers` |
| formNo | `09` · title VN **Mốc lộ giới / GPMB** |
| peerSoTs | — · **≠** Sổ TS · **GAP-CSDL-CUC-11** |
| runMode | `edit_page` · export/import Excel đúng mẫu Cục · **cấm** new_page typed CRUD |
| epicCite | `docs/context/features/csdl-export-print.md` Wave 1 · `T-XLS-S09` |
| devSlashExport | `/implement-export-import-excel` · BFF binary |

> Data-analy **đề xuất** controlHint. Design **chốt** control-map (giữ prototype typed · **chỉ** delta toolbar export). SA **chốt** binary export path.  
> Typography: label **13** · input D14 / M16 (**GAP-TYP-01**).  
> **Giữ** PO/Design/SA artifacts typed — analy **chỉ** § Delta export.  
> Toast stub / typed STATUS done **≠** export xong.  
> Golden = Cục **16-sheet** xls · **cấm** hồ sơ 12+8.

## Sources

| Source | Path | sha256 / note |
|--------|------|---------------|
| Context | `docs/context/features/csdl-bieu-09.md` | `58c012cef8ad07ae7a6d5e8ab513668c51dc0755d1f209783beb41ba1c4ccc01` |
| Export epic | `docs/context/features/csdl-export-print.md` | `2ca7ea0a7f1cfe4d3caf05688cc08ca2546457b09ed388671b58c3a769492c14` |
| Parent hub | `docs/context/features/csdl-so-sach.md` | cite hub Kind G · resource `boundary-markers` |
| Cluster analy | `specs/_data-analy/csdl-cuc-2026/ANALYSIS-AND-TASKS.md` | Biểu 9 · 17 cột · 2 khối LG/GPMB |
| Demo | N/A (packet) · prior hub demo zone-only | **cấm** demo SSOT |
| DOMAIN-MAP | `Linm.RMMS.WebService/docs/DOMAIN-MAP.md` | Asset · `csdl-records` |
| Live MFE | `CsdlBieu09Page` · `fromCatalogToolbar` | typed list+slideout **shipped** · **thiếu** Xuất Excel |
| Live API | `CsdlCatalogRecordsController` | CRUD live · export/import **gap** |
| Golden Excel | `data-import/…/1. Biểu mẫu CSDL.xls` sheet Biểu 9 | Cục **16-sheet** · **cấm** hồ sơ 12+8 làm golden |

Normalized header (unchanged · 17 — Excel flatten):

`code|roadCode|roadName|province|kmFrom|kmTo|side|markerKind|markerStructure|markerLengthM|markerWidthM|markerAreaM2|markerQty|completedYear|status|manageUnit|notes`

Form trail (đã trong 17): `manageUnit` · `notes`. **Không** thêm cột ngoài 17.

## § Delta Current vs New (`edit_page` · `task_f4041b8e` · **T-XLS-S09**)

| ID | Current (live / prior analy) | New (this analy) | Surface |
|----|------------------------------|------------------|---------|
| GAP-BIEU09-XLS-01 | Typed CRUD + 17/2 khối **PASS** · toolbar **không** Xuất/Import binary | **Xuất Excel** (+ Import P1) đúng sheet Biểu 9 · merge-header · 17 cột | `catalogToolbar` / `report-toolbar-actions` |
| GAP-BIEU09-XLS-02 | Toast / stub action coi «có nút» | File binary qua BFF · `/implement-export-import-excel` · **cấm** toast-only done | FE + BFF + BE |
| GAP-BIEU09-XLS-03 | — / hồ sơ 12+8 STALE | Golden = Cục **16-sheet** xls sheet Biểu 9 · **cấm** 12+8 golden | SA/Dev checksum |
| GAP-BIEU09-XLS-04 | Filter bar chỉ field + 🔍 | **Cấm** đặt Xuất/Import trên `LinErpListFilterBar` (**GAP-FILTER-BAR-08**) | Zone B filter vs toolbar |
| GAP-BIEU09-XLS-05 | API CRUD only | `GET …/csdl-records/export?resource=boundary-markers` · `POST …/import?resource=` (cite epic · SA chốt) | BE Asset |
| GAP-BIEU09-XLS-06 | 2 khối UX `markerKind` | Export **1 sheet** 17 cột · cả RoadLimit + GPMB · **cấm** invent 2 sheet | export engine |
| — | Typed form/list/route | **Không đổi** · **cấm** new_page typed CRUD re-open | form / list |

**Không** đổi: API prefix `api/v1/asset/csdl-records` · resource `boundary-markers` · Kind B A–D · Kind D Slideout · filter slots · **cấm ERP.*** · IdCode `MK` · peer Sổ TS · formNo `09` · 2 section kind UX.

**Closed / keep (prior new_page — không reopen):** GAP-BIEU09-TYPED-01 · REN · ROUTE · KIND · STRUCT · DIM · YEAR · BLOCK · ROAD/PROV/ORG P2 debt · GAP-CSDL-CUC-11 · prior GAP-CSDL-XLS-01 stub → **supersede** bằng GAP-BIEU09-XLS-*.

## Kind / zones (handoff Design — delta only)

| Zone / surface | Pattern | DoD this edit |
|----------------|---------|----------------|
| List A | Header | Giữ «Biểu 09 — Mốc lộ giới / GPMB» · back hub |
| List B toolbar | `catalogToolbar` | **Thêm** Xuất Excel (+ Import P1) · icon `erp-control-icon-map` · **cấm** filter |
| List B filter | `LinErpListFilterBar` | **Unchanged** · 0 action Xuất (**GAP-FILTER-BAR-08**) |
| List C/D | Grid + pagination | Unchanged · typed 17 · filter `markerKind` |
| Form | Kind D Slideout | Unchanged · 2 section theo `markerKind` |
| Map | none | — |

## Control hint — list filters (Zone B) — **unchanged**

| Field key | Label | controlHint | catalogKind | Notes |
|-----------|-------|-------------|-------------|-------|
| search | Tìm kiếm | `SearchTextInput` | text | mã · đường · kết cấu · ghi chú |
| province | Tỉnh/TP | `Dropdown` | LOOKUP_STATIC | |
| status | Tình trạng | `Dropdown` | LOOKUP_STATIC | tot/tb/kem/hong |
| roadCode | Đường | `SearchInput` | **road-route** | |
| kmFrom / kmTo | Lý trình từ–đến | `Number` | — | |
| side | Vị trí (T/P/C) | `Dropdown` | LOOKUP_STATIC | L/R/C/Both |
| markerKind | Loại mốc | `Dropdown` | LOOKUP_STATIC | RoadLimit / GPMB |

## Control hint — form fields — **unchanged** (cite prior · 17/2 typed)

Giữ bảng form prior `task_b7a89508` (shared + 2 section theo `markerKind`). **Cấm** đổi controlHint form trong pack này.

## Control hint — actions (**delta**)

| Action | Surface | Notes |
|--------|---------|-------|
| export-excel | **catalogToolbar** | Label **Xuất Excel** · binary download · sheet Biểu 9 · filter QS áp dụng nếu SA chốt |
| import-excel | **catalogToolbar** (P1) | Template Cục · merge-header 17 · **cấm** filter bar |
| create / view / edit / copy / delete / history / schema-config / refresh | Toolbar (keep) | Unchanged |
| save / cancel | Form footer | Unchanged |
| print-pdf | — | **OUT** Biểu (sổ Word) · không Wave 1 S09 |

## Open questions (PO trước Design)

| ID | Q | Options |
|----|---|---------|
| Q-XLS-SCOPE | Export = **filtered set** (gồm `markerKind`/road/…) hay **all tenant resource**? | filtered · all_resource (**SA/PO**) |
| Q-XLS-IMPORT | Import P1 cùng task hay DEFER sau export-only? | import_now · export_only_p0 |
| Q-XLS-FILENAME | Tên file download? | `Bieu09_MocLoGioiGPMB_{yyyyMMdd}.xls(x)` · SA chốt |
| Q-XLS-KIND | Export luôn 1 sheet cả 2 kind hay tôn trọng filter `markerKind`? | all_kinds_1sheet · respect_filter (**cấm** 2 sheet invent) |

## Handoff

| Role | Dùng packet |
|------|-------------|
| **PO** | § Delta T-XLS-S09 · DoD binary ≠ toast · giữ Grid AC typed |
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
| contentHash | `sha256:58c012cef8ad07ae7a6d5e8ab513668c51dc0755d1f209783beb41ba1c4ccc01` |
| headerFingerprint | `sha256:765521dee151f2ded36c582ca1a0b7ec048237b88cfc5b27481f09e6787e9a77` |
| generatedAt | 2026-09-18T05:30:00.000Z |
| versionGate | ok |
| taskId | task_f4041b8e |
| packKind | list |
| changeScope | edit_page |

---
<!-- Version meta: skillId=agent-data-analy skillVersion=2026.09.05.03 schemaVersion=1 workflowVersion=2026.09.05.03 rulesVersion=2026.09.17.3 versionGate=ok contentHash=sha256:58c012cef8ad07ae7a6d5e8ab513668c51dc0755d1f209783beb41ba1c4ccc01 changeScope=edit_page taskId=task_f4041b8e -->
