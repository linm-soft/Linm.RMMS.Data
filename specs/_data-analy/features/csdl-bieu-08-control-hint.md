# Data-analy — controlHint — csdl-bieu-08 (Kind B list + Kind D Slideout · Biểu 08)

| Field | Value |
|-------|-------|
| feature | `csdl-bieu-08` |
| packKind | `list` |
| mode | `feature_context` (edit_page · T-XLS-S08 · keep typed CRUD) |
| changeScope | `edit_page` |
| status | `done` |
| skillId | `agent-data-analy` |
| skillVersion | `2026.09.05.03` |
| schemaVersion | `1` |
| workflowVersion | `2026.09.05.03` |
| rulesVersion | `2026.09.17.3` |
| versionGate | `ok` (CTX hash change + export delta Wave 1 · autoApprove queue · **không** AskQuestion) |
| contentHash | `sha256:639566df4ddccc3927311d5618bf4e7c1dbad0dac80962c414f861dacc9d5e9c` |
| headerFingerprint | `sha256:ba8b8db4f7637ee32cfd4a882b6abdc774c538f6c9812c3ecd1d13f6151cdd6f` |
| analyzedAt | `2026-09-18T04:55:00.000Z` |
| cluster | `csdl-cuc-2026` · Excel sheet Biểu 8 · **45 cột** · **11 nhóm** · Wave 1 `T-XLS-S08` |
| taskId | `task_774ebbde` |
| priorTask | `task_a21c4937` → pipeline review `task_fdb010e9` (typed CRUD **done** — **cấm** re-run new_page typed) |
| autoApprove | `ON` (queue) |
| realData | `specs/_data-analy/features/csdl-bieu-08-real-data.md` |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · domain **Asset** · `api/v1/asset/csdl-records` · **cấm ERP.*** · **cấm** invent `api/v1/infra/*` |
| uiRepo | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| mfeStdUrl | `http://localhost:9301/so-ts/csdl-so-sach` · alias `/csdl-bieu-08` · hub `?resource=traffic-safety` |
| resource | `traffic-safety` |
| formNo | `08` · title VN **Hệ thống ATGT** |
| peerSoTs | ATGT types deep-link OK · **cấm** merge 1 form · **≠** Sổ TS |
| runMode | `edit_page` · export/import Excel đúng mẫu Cục · **cấm** new_page typed CRUD |
| epicCite | `docs/context/features/csdl-export-print.md` Wave 1 · `T-XLS-S08` |
| devSlashExport | `/implement-export-import-excel` · BFF binary |

> Data-analy **đề xuất** controlHint. Design **chốt** control-map (giữ prototype typed · **chỉ** delta toolbar export). SA **chốt** binary export path.  
> Typography: label **13** · input D14 / M16 (**GAP-TYP-01**).  
> **Giữ** PO/Design/SA artifacts typed — analy **chỉ** § Delta export.  
> Toast stub / typed STATUS done **≠** export xong.  
> **Cấm** 1 hàng kéo ngang 45 cột trên grid/export layout lệch mẫu (**T-XLS-S08**).

## Sources

| Source | Path | sha256 / note |
|--------|------|---------------|
| Context | `docs/context/features/csdl-bieu-08.md` | `639566df4ddccc3927311d5618bf4e7c1dbad0dac80962c414f861dacc9d5e9c` |
| Export epic | `docs/context/features/csdl-export-print.md` | `2ca7ea0a7f1cfe4d3caf05688cc08ca2546457b09ed388671b58c3a769492c14` |
| Parent hub | `docs/context/features/csdl-so-sach.md` | cite hub Kind G · resource `traffic-safety` |
| Cluster analy | `specs/_data-analy/csdl-cuc-2026/ANALYSIS-AND-TASKS.md` | Biểu 8 · 45 cột · 11 nhóm |
| Demo | N/A (packet) · prior hub demo zone-only | **cấm** demo SSOT |
| DOMAIN-MAP | `Linm.RMMS.WebService/docs/DOMAIN-MAP.md` | Asset · `csdl-records` |
| Live MFE | `CsdlBieu08Page` · `fromCatalogToolbar` | typed list+slideout **shipped** · **thiếu** Xuất Excel |
| Live API | `CsdlCatalogRecordsController` | CRUD live · export/import **gap** |
| Golden Excel | `data-import/…/1. Biểu mẫu CSDL.xls` sheet Biểu 8 | Cục **16-sheet** · **cấm** hồ sơ 12+8 làm golden |

Normalized header (unchanged · 45 — Excel flatten · runtime = shared + child theo `assetType`):

`code|roadCode|roadName|province|kmFrom|kmTo|side|assetType|signCode|signSize|signPoleCount|signPoleHeightM|markerKind|markerQty|markerStructure|markerAreaM2|medianKind|medianStructure|medianLengthM|medianHeightM|antiGlareKind|antiGlareStructure|antiGlareQty|antiGlareLengthM|islandType|islandStructure|islandAreaM2|studSize|studQty|guardrailKind|guardrailStructure|guardrailLengthM|guardrailReflector|markCode|markLengthM|markWidthM|markAreaM2|cushionQty|mirrorQty|signalPoleKind|signalHeightM|lampKind|lampQty|builtYear|status`

Form trail extras (không đếm 45): `manageUnit` · `notes`.

## § Delta Current vs New (`edit_page` · `task_774ebbde` · **T-XLS-S08**)

| ID | Current (live / prior analy) | New (this analy) | Surface |
|----|------------------------------|------------------|---------|
| GAP-BIEU08-XLS-01 | Typed CRUD + 45/11 nhóm **PASS** · toolbar **không** Xuất/Import binary | **Xuất Excel** (+ Import P1) đúng sheet Biểu 8 · merge-header · 45 cột | `catalogToolbar` / `report-toolbar-actions` |
| GAP-BIEU08-XLS-02 | Toast / stub action coi «có nút» | File binary qua BFF · `/implement-export-import-excel` · **cấm** toast-only done | FE + BFF + BE |
| GAP-BIEU08-XLS-03 | — / hồ sơ 12+8 STALE | Golden = Cục **16-sheet** xls sheet Biểu 8 · **cấm** 12+8 golden | SA/Dev checksum |
| GAP-BIEU08-XLS-04 | Filter bar chỉ field + 🔍 | **Cấm** đặt Xuất/Import trên `LinErpListFilterBar` (**GAP-FILTER-BAR-08**) | Zone B filter vs toolbar |
| GAP-BIEU08-XLS-05 | API CRUD only | `GET …/csdl-records/export?resource=traffic-safety` · `POST …/import?resource=` (cite epic · SA chốt) | BE Asset |
| GAP-BIEU08-XLS-06 | Risk flatten 1 hàng wide 45 | Export map shared+child theo `assetType` · **cấm** 1 hàng kéo ngang lệch mẫu Cục | export engine |
| — | Typed form/list/route | **Không đổi** · **cấm** new_page typed CRUD re-open | form / list |

**Không** đổi: API prefix `api/v1/asset/csdl-records` · resource `traffic-safety` · Kind B A–D · Kind D Slideout · filter slots · **cấm ERP.*** · IdCode `AT` · peer Sổ TS no-merge · formNo `08`.

**Closed / keep (prior new_page — không reopen):** GAP-BIEU08-TYPED-01 · CHILD · REN · ROUTE · TYPE · 11 child sections · PEER · ROAD/PROV/ORG P2 debt · GAP-CSDL-CUC-08/11.

## Kind / zones (handoff Design — delta only)

| Zone / surface | Pattern | DoD this edit |
|----------------|---------|----------------|
| List A | Header | Giữ «Biểu 08 — Hệ thống ATGT» · back hub |
| List B toolbar | `catalogToolbar` | **Thêm** Xuất Excel (+ Import P1) · icon `erp-control-icon-map` · **cấm** filter |
| List B filter | `LinErpListFilterBar` | **Unchanged** · 0 action Xuất (**GAP-FILTER-BAR-08**) |
| List C/D | Grid + pagination | Unchanged · subset_by_type · **cấm** hiện đủ 45 cột |
| Form | Kind D Slideout | Unchanged · shared + 1 child theo `assetType` |
| Map | none | — |

## Control hint — list filters (Zone B) — **unchanged**

| Field key | Label | controlHint | catalogKind | Notes |
|-----------|-------|-------------|-------------|-------|
| search | Tìm kiếm | `SearchTextInput` | text | mã · đường · signCode · ghi chú |
| province | Tỉnh/TP | `Dropdown` | LOOKUP_STATIC | |
| status | Tình trạng | `Dropdown` | LOOKUP_STATIC | tot/tb/kem/hong |
| roadCode | Đường | `SearchInput` | **road-route** | |
| kmFrom / kmTo | Lý trình từ–đến | `Number` | — | |
| side | Vị trí (T/P/C) | `Dropdown` | LOOKUP_STATIC | L/R/C/Both |
| assetType | Chủng loại ATGT | `Dropdown` | LOOKUP_STATIC | 11 nhóm · map `?type=` |

## Control hint — form fields — **unchanged** (cite prior · 45/11 typed)

Giữ bảng form prior `task_a21c4937` (shared + 11 child theo `assetType`). **Cấm** đổi controlHint form trong pack này.

## Control hint — actions (**delta**)

| Action | Surface | Notes |
|--------|---------|-------|
| export-excel | **catalogToolbar** | Label **Xuất Excel** · binary download · sheet Biểu 8 · filter QS áp dụng nếu SA chốt |
| import-excel | **catalogToolbar** (P1) | Template Cục · merge-header 45 · **cấm** filter bar · **cấm** wide-row invent |
| create / view / edit / copy / delete / history / schema-config / refresh | Toolbar (keep) | Unchanged |
| save / cancel | Form footer | Unchanged |
| peer-sots | Toolbar / row (opt) | Deep-link keep · **cấm** merge |
| print-pdf | — | **OUT** Biểu (sổ Word) · không Wave 1 S08 |

## Open questions (PO trước Design)

| ID | Q | Options |
|----|---|---------|
| Q-XLS-SCOPE | Export = **filtered set** (gồm `assetType`/road/…) hay **all tenant resource**? | filtered · all_resource (**SA/PO**) |
| Q-XLS-IMPORT | Import P1 cùng task hay DEFER sau export-only? | import_now · export_only_p0 |
| Q-XLS-FILENAME | Tên file download? | `Bieu08_HeThongATGT_{yyyyMMdd}.xls(x)` · SA chốt |
| Q-XLS-TYPE | Export 1 sheet gộp 11 nhóm hay sheet/filter theo `assetType`? | one_sheet_45 · filter_type_only (**cấm** 11 sheet invent) |

## Handoff

| Role | Dùng packet |
|------|-------------|
| **PO** | § Delta T-XLS-S08 · DoD binary ≠ toast · giữ Grid AC typed |
| **Design** | **Giữ** prototype typed · **chỉ** thêm nút Xuất (+Import) trên toolbar · reviewUrl cập nhật zone |
| **SA** | Path export/import · BFF binary · golden 16-sheet · **cấm** đổi typed entity trừ gap · **cấm** wide-row |
| **TL/Dev** | `/implement-export-import-excel` · **cấm** filter-bar export · **cấm** re-CRUD typed |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-data-analy |
| skillVersion | 2026.09.05.03 |
| schemaVersion | 1 |
| workflowVersion | 2026.09.05.03 |
| rulesVersion | 2026.09.17.3 |
| contentHash | `sha256:639566df4ddccc3927311d5618bf4e7c1dbad0dac80962c414f861dacc9d5e9c` |
| headerFingerprint | `sha256:ba8b8db4f7637ee32cfd4a882b6abdc774c538f6c9812c3ecd1d13f6151cdd6f` |
| generatedAt | 2026-09-18T04:55:00.000Z |
| versionGate | ok |
| taskId | task_774ebbde |
| packKind | list |
| changeScope | edit_page |

---
<!-- Version meta: skillId=agent-data-analy skillVersion=2026.09.05.03 schemaVersion=1 workflowVersion=2026.09.05.03 rulesVersion=2026.09.17.3 versionGate=ok contentHash=sha256:639566df4ddccc3927311d5618bf4e7c1dbad0dac80962c414f861dacc9d5e9c changeScope=edit_page taskId=task_774ebbde -->
