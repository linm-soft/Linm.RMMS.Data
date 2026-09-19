# Data-analy — controlHint — csdl-bieu-01 (Kind B list + Kind D Slideout · Biểu 01)

| Field | Value |
|-------|-------|
| feature | `csdl-bieu-01` |
| packKind | `list` |
| mode | `feature_context` (edit_page · T-XLS-S01 · keep typed CRUD) |
| changeScope | `edit_page` |
| status | `done` |
| skillId | `agent-data-analy` |
| skillVersion | `2026.09.05.03` |
| schemaVersion | `1` |
| workflowVersion | `2026.09.05.03` |
| rulesVersion | `2026.09.17.3` |
| versionGate | `ok` (skill/rules bump + CTX+export delta · autoApprove queue · **không** AskQuestion) |
| contentHash | `sha256:b48e58e637a1dd4fc9e14298a0063d34c89eadb1ea02ba756b561b4648d4b085` |
| headerFingerprint | `sha256:6376475bbf48ca5b3e8cfd26688cd877fd1bc77d5b8d8c4c3d314cd0572f5cf2` |
| analyzedAt | `2026-09-17T17:40:33.868Z` |
| cluster | `csdl-cuc-2026` · Excel sheet Biểu 1 · **38 cột** · Wave 1 `T-XLS-S01` |
| taskId | `task_7168eb6e` |
| priorTask | `task_41122f1b` (typed CRUD pipeline **done** — **cấm** re-run new_page typed) |
| autoApprove | `ON` (queue) |
| realData | `specs/_data-analy/features/csdl-bieu-01-real-data.md` |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · domain **Asset** · `api/v1/asset/csdl-records` · **cấm ERP.*** · **cấm** invent `api/v1/infra/*` |
| uiRepo | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| mfeStdUrl | `http://localhost:9301/so-ts/csdl-so-sach` · alias `/csdl-bieu-01` · hub `?resource=pavement-sections` |
| resource | `pavement-sections` |
| formNo | `01` · title VN **Phân loại mặt đường** |
| peerSoTs | `pavement-section` — deep-link OK · **cấm** merge 1 form |
| runMode | `edit_page` · export/import Excel đúng mẫu Cục · **cấm** new_page typed CRUD |
| epicCite | `docs/context/features/csdl-export-print.md` Wave 1 · `T-XLS-S01` |
| devSlashExport | `/implement-export-import-excel` · BFF binary |

> Data-analy **đề xuất** controlHint. Design **chốt** control-map (giữ prototype typed · **chỉ** delta toolbar export). SA **chốt** binary export path.  
> Typography: label **13** · input D14 / M16 (**GAP-TYP-01**).  
> **Giữ** PO/Design/SA artifacts typed — analy **chỉ** § Delta export.  
> Toast stub / typed STATUS done **≠** export xong.

## Sources

| Source | Path | sha256 / note |
|--------|------|---------------|
| Context | `docs/context/features/csdl-bieu-01.md` | `aba048e4f176ea041fa74063501297ee1e9dbe7ff06bb3495329d3e7ad948e0e` |
| Export epic | `docs/context/features/csdl-export-print.md` | `2ca7ea0a7f1cfe4d3caf05688cc08ca2546457b09ed388671b58c3a769492c14` |
| Parent hub | `docs/context/features/csdl-so-sach.md` | cite hub Kind G |
| Cluster analy | `specs/_data-analy/csdl-cuc-2026/ANALYSIS-AND-TASKS.md` | Biểu 1 · 38 cột · skip cầu âm |
| Demo | N/A (packet) · prior hub demo zone-only | **cấm** demo SSOT |
| DOMAIN-MAP | `Linm.RMMS.WebService/docs/DOMAIN-MAP.md` | Asset · `csdl-records` |
| Live MFE | `CsdlBieu01Page` · `fromCatalogToolbar` | typed list+slideout **shipped** · **thiếu** Xuất Excel |
| Live API | `CsdlCatalogRecordsController` | CRUD live · export/import **gap** |
| Golden Excel | `data-import/…/1. Biểu mẫu CSDL.xls` sheet Biểu 1 | Cục **16-sheet** · **cấm** hồ sơ 12+8 làm golden |

Normalized header (unchanged):

`code|roadCode|roadName|province|kmFrom|kmTo|lengthKm|baseWidthM|surfWGe14|surfW14To10|surfW10To5|surfWLe5|structureType|surfaceThicknessCm|plainClass|mountainClass|yearsInServiceBand|handoverMinistry|handoverLocal|lastMajorRehabYear|lastSurfaceRepairYear|updatedByName|manageUnit|notes|status|side`

## § Delta Current vs New (`edit_page` · `task_7168eb6e` · **T-XLS-S01**)

| ID | Current (live / prior analy) | New (this analy) | Surface |
|----|------------------------------|------------------|---------|
| GAP-BIEU01-XLS-01 | Typed CRUD + grid 38 cột **PASS** · toolbar **không** Xuất/Import binary | **Xuất Excel** (+ Import P1) đúng sheet Biểu 1 · merge-header · 38 cột | `catalogToolbar` / `report-toolbar-actions` |
| GAP-BIEU01-XLS-02 | Toast / stub action coi «có nút» | File binary qua BFF · `/implement-export-import-excel` · **cấm** toast-only done | FE + BFF + BE |
| GAP-BIEU01-XLS-03 | — / hồ sơ 12+8 STALE | Golden = Cục **16-sheet** xls sheet Biểu 1 · **cấm** 12+8 golden | SA/Dev checksum |
| GAP-BIEU01-XLS-04 | Filter bar chỉ field + 🔍 | **Cấm** đặt Xuất/Import trên `LinErpListFilterBar` (**GAP-FILTER-BAR-08**) | Zone B filter vs toolbar |
| GAP-BIEU01-XLS-05 | API CRUD only | `GET …/csdl-records/export?resource=pavement-sections` · `POST …/import?resource=` (cite epic · SA chốt) | BE Asset |
| GAP-BIEU01-SKIP-01 | Import skip-bridge (prior) | Giữ: skip hàng «Cầu …. Km» length âm khi import | import engine |
| — | Typed form/list/route | **Không đổi** · **cấm** new_page typed CRUD re-open | form / list |

**Không** đổi: API prefix `api/v1/asset/csdl-records` · resource `pavement-sections` · Kind B A–D · Kind D Slideout · filter slots · **cấm ERP.*** · IdCode `MD` · peer Sổ TS no-merge.

**Closed / keep (prior new_page — không reopen):** GAP-BIEU01-TYPED-01 · ROUTE · WIDTH/STRUCT (SA đã chốt) · ROAD/PROV/ORG P2 debt.

## Kind / zones (handoff Design — delta only)

| Zone / surface | Pattern | DoD this edit |
|----------------|---------|----------------|
| List A | Header | Giữ title · back hub |
| List B toolbar | `catalogToolbar` | **Thêm** Xuất Excel (+ Import P1) · icon `erp-control-icon-map` · **cấm** filter |
| List B filter | `LinErpListFilterBar` | **Unchanged** · 0 action Xuất (**GAP-FILTER-BAR-08**) |
| List C/D | Grid + pagination | Unchanged typed cols |
| Form | Kind D Slideout | Unchanged typed 38 |
| Map | none | — |

## Control hint — list filters (Zone B) — **unchanged**

| Field key | Label | controlHint | catalogKind | Notes |
|-----------|-------|-------------|-------------|-------|
| search | Tìm kiếm | `SearchTextInput` | text | mã · đường · ghi chú |
| province | Tỉnh/TP | `Dropdown` | LOOKUP_STATIC | |
| status | Tình trạng | `Dropdown` | LOOKUP_STATIC | tot/tb/kem/hong |
| roadCode | Đường | `SearchInput` | **road-route** | |
| kmFrom / kmTo | Từ/Đến Km | `Number` | — | |
| fromDate / toDate | Kỳ | Date pair | — | bar date cluster |

## Control hint — form fields — **unchanged** (cite prior · 38 cột typed)

Giữ bảng form prior `task_41122f1b` (road-route · four_buckets / structureType · …). **Cấm** đổi controlHint form trong pack này.

## Control hint — actions (**delta**)

| Action | Surface | Notes |
|--------|---------|-------|
| export-excel | **catalogToolbar** | Label **Xuất Excel** · binary download · sheet Biểu 1 · filter QS áp dụng nếu SA chốt |
| import-excel | **catalogToolbar** (P1) | Template Cục · skip-bridge · **cấm** filter bar |
| create / view / edit / copy / delete / history / schema-config / refresh | Toolbar (keep) | Unchanged |
| save / cancel | Form footer | Unchanged |
| print-pdf | — | **OUT** Biểu (sổ Word) · không Wave 1 S01 |

## Open questions (PO trước Design)

| ID | Q | Options |
|----|---|---------|
| Q-XLS-SCOPE | Export = **filtered set** hay **all tenant resource**? | filtered · all_resource (**SA/PO**) |
| Q-XLS-IMPORT | Import P1 cùng task hay DEFER sau export-only? | import_now · export_only_p0 |
| Q-XLS-FILENAME | Tên file download? | `Bieu01_PhanLoaiMatDuong_{yyyyMMdd}.xls(x)` · SA chốt |

## Handoff

| Role | Dùng packet |
|------|-------------|
| **PO** | § Delta T-XLS-S01 · DoD binary ≠ toast · giữ Grid AC typed |
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
| contentHash | `sha256:b48e58e637a1dd4fc9e14298a0063d34c89eadb1ea02ba756b561b4648d4b085` |
| headerFingerprint | `sha256:6376475bbf48ca5b3e8cfd26688cd877fd1bc77d5b8d8c4c3d314cd0572f5cf2` |
| generatedAt | 2026-09-17T17:40:33.868Z |
| versionGate | ok |
| taskId | task_7168eb6e |
| packKind | list |
| changeScope | edit_page |

---
<!-- Version meta: skillId=agent-data-analy skillVersion=2026.09.05.03 schemaVersion=1 workflowVersion=2026.09.05.03 rulesVersion=2026.09.17.3 versionGate=ok contentHash=sha256:b48e58e637a1dd4fc9e14298a0063d34c89eadb1ea02ba756b561b4648d4b085 changeScope=edit_page taskId=task_7168eb6e -->
