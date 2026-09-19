# Data-analy — controlHint — csdl-bieu-12 (Kind B list + Kind D Slideout · Biểu 12)

| Field | Value |
|-------|-------|
| feature | `csdl-bieu-12` |
| packKind | `list` |
| mode | `feature_context` (edit_page · T-XLS-S12 · keep typed CRUD) |
| changeScope | `edit_page` |
| status | `done` |
| skillId | `agent-data-analy` |
| skillVersion | `2026.09.05.03` |
| schemaVersion | `1` |
| workflowVersion | `2026.09.05.03` |
| rulesVersion | `2026.09.17.3` |
| versionGate | `ok` (CTX hash change + export delta Wave 1 · autoApprove queue · **không** AskQuestion) |
| contentHash | `sha256:f42502cee520105fb0a7f618c17b8b0f582884d7f779f638ec7310c26346e77a` |
| headerFingerprint | `sha256:b6a541f8adc60a5badc72fc92c606631e5a1457fc119b9a6a546eb1f0acc437a` |
| analyzedAt | `2026-09-18T00:25:00.000Z` |
| cluster | `csdl-cuc-2026` · Excel sheet Biểu 12 · **15 cột** · khóm + m² cỏ · Wave 1 `T-XLS-S12` |
| taskId | `task_619ea74c` |
| priorTask | `task_94fca237` → pipeline review `task_9d0c01b9` (typed CRUD **done** — **cấm** re-run new_page typed) |
| autoApprove | `ON` (queue) |
| realData | `specs/_data-analy/features/csdl-bieu-12-real-data.md` |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · domain **Asset** · `api/v1/asset/csdl-records` · **cấm ERP.*** · **cấm** invent `api/v1/infra/*` |
| uiRepo | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| mfeStdUrl | `http://localhost:9301/so-ts/csdl-so-sach` · alias `/csdl-bieu-12` · hub `?resource=green-assets` |
| resource | `green-assets` |
| formNo | `12` · title VN **Cây xanh, thảm cỏ** |
| peerSoTs | — (không peer · **cấm** invent so-ts-green) · **GAP-CSDL-CUC-11** |
| runMode | `edit_page` · export/import Excel đúng mẫu Cục · **cấm** new_page typed CRUD |
| epicCite | `docs/context/features/csdl-export-print.md` Wave 1 · `T-XLS-S12` |
| devSlashExport | `/implement-export-import-excel` · BFF binary |

> Data-analy **đề xuất** controlHint. Design **chốt** control-map (giữ prototype typed · **chỉ** delta toolbar export). SA **chốt** binary export path.  
> Typography: label **13** · input D14 / M16 (**GAP-TYP-01**).  
> **Giữ** PO/Design/SA artifacts typed — analy **chỉ** § Delta export.  
> Toast stub / typed STATUS done **≠** export xong.  
> Golden = Cục **16-sheet** xls · **cấm** hồ sơ 12+8.

## Sources

| Source | Path | sha256 / note |
|--------|------|---------------|
| Context | `docs/context/features/csdl-bieu-12.md` | `f42502cee520105fb0a7f618c17b8b0f582884d7f779f638ec7310c26346e77a` |
| Export epic | `docs/context/features/csdl-export-print.md` | `2ca7ea0a7f1cfe4d3caf05688cc08ca2546457b09ed388671b58c3a769492c14` |
| Parent hub | `docs/context/features/csdl-so-sach.md` | cite hub Kind G · resource `green-assets` |
| Cluster analy | `specs/_data-analy/csdl-cuc-2026/ANALYSIS-AND-TASKS.md` | Biểu 12 · 15 cột · § Biểu 12 |
| DB API SSOT | `docs/context/11-CSDL-SO-SACH-DATABASE-API.md` | § GreenAsset · OleanderClumps · NgauClumps · PalmClumps · GrassAreaM2 |
| Demo | N/A (packet) · prior hub demo zone-only | **cấm** demo SSOT |
| DOMAIN-MAP | `Linm.RMMS.WebService/docs/DOMAIN-MAP.md` | Asset · `csdl-records` · slug `csdl-bieu-12` |
| Live MFE | `CsdlBieu12Page` · `fromCatalogToolbar` | typed list+slideout **shipped** · **thiếu** Xuất Excel |
| Live API | `CsdlCatalogRecordsController` | CRUD live · export/import **gap** |
| Golden Excel | `data-import/…/1. Biểu mẫu CSDL.xls` sheet Biểu 12 | Cục **16-sheet** · **cấm** hồ sơ 12+8 làm golden |
| Peer Sổ TS | — | **cấm** invent so-ts-green · **≠** merge so-ts-* |

Normalized header (unchanged · 15 — Excel flatten):

`code|roadCode|roadName|province|kmFrom|kmTo|side|oleanderClumps|ngauClumps|palmClumps|otherClumps|grassAreaM2|status|manageUnit|notes`

Form trail (đã trong 15): `manageUnit` · `notes`. **Không** thêm cột ngoài 15.  
DB SSOT: `OleanderClumps` · `NgauClumps` · `PalmClumps` · `GrassAreaM2` · `OtherClumps` ↔ camelCase (**SA** giữ map typed).

## § Delta Current vs New (`edit_page` · `task_619ea74c` · **T-XLS-S12**)

| ID | Current (live / prior analy) | New (this analy) | Surface |
|----|------------------------------|------------------|---------|
| GAP-BIEU12-XLS-01 | Typed CRUD + 15/2 section **PASS** · toolbar **không** Xuất/Import binary | **Xuất Excel** (+ Import P1) đúng sheet Biểu 12 · merge-header · 15 cột | `catalogToolbar` / `report-toolbar-actions` |
| GAP-BIEU12-XLS-02 | Toast / stub action coi «có nút» | File binary qua BFF · `/implement-export-import-excel` · **cấm** toast-only done | FE + BFF + BE |
| GAP-BIEU12-XLS-03 | — / hồ sơ 12+8 STALE | Golden = Cục **16-sheet** xls sheet Biểu 12 · **cấm** 12+8 golden | SA/Dev checksum |
| GAP-BIEU12-XLS-04 | Filter bar chỉ field + 🔍 | **Cấm** đặt Xuất/Import trên `LinErpListFilterBar` (**GAP-FILTER-BAR-08**) | Zone B filter vs toolbar |
| GAP-BIEU12-XLS-05 | API CRUD only | `GET …/csdl-records/export?resource=green-assets` · `POST …/import?resource=` (cite epic · SA chốt) | BE Asset |
| GAP-BIEU12-XLS-06 | 2 section UX khóm + thảm cỏ | Export **1 sheet** 15 cột · khóm + m² cùng hàng · **cấm** invent 2 sheet | export engine |
| GAP-BIEU12-XLS-07 | Không peer Sổ TS | Export qty/m² biểu Cục · **cấm** invent/merge so-ts-green vào file | export bind |
| — | Typed form/list/route | **Không đổi** · **cấm** new_page typed CRUD re-open | form / list |

**Không** đổi: API prefix `api/v1/asset/csdl-records` · resource `green-assets` · Kind B A–D · Kind D Slideout · filter slots · **cấm ERP.*** · IdCode `CX` · formNo `12` · 2 section form UX · **cấm** invent peer so-ts-green.

**Closed / keep (prior new_page — không reopen):** GAP-BIEU12-TYPED-01 · ROUTE · CLUMP-* · GRASS · SIDE · DMAP · ROAD/PROV/ORG P2 debt · GAP-CSDL-CUC-11 · prior GAP-CSDL-XLS-01 stub → **supersede** bằng GAP-BIEU12-XLS-*.

## Kind / zones (handoff Design — delta only)

| Zone / surface | Pattern | DoD this edit |
|----------------|---------|----------------|
| List A | Header | Giữ «Biểu 12 — Cây xanh, thảm cỏ» · back hub |
| List B toolbar | `catalogToolbar` | **Thêm** Xuất Excel (+ Import P1) · icon `erp-control-icon-map` · **cấm** filter |
| List B filter | `LinErpListFilterBar` | **Unchanged** · 0 action Xuất (**GAP-FILTER-BAR-08**) |
| List C/D | Grid + pagination | Unchanged · typed 15 |
| Form | Kind D Slideout | Unchanged · 2 section khóm + thảm cỏ |
| Map | none | — |

## Control hint — list filters (Zone B) — **unchanged**

| Field key | Label | controlHint | catalogKind | Notes |
|-----------|-------|-------------|-------------|-------|
| search | Tìm kiếm | `SearchTextInput` | text | mã · đường · ghi chú |
| province | Tỉnh/TP | `Dropdown` | LOOKUP_STATIC | |
| status | Tình trạng | `Dropdown` | LOOKUP_STATIC | tot/tb/kem/hong |
| roadCode | Đường | `SearchInput` | **road-route** | |
| kmFrom / kmTo | Lý trình từ–đến | `Number` | — | |
| side | Vị trí (T/P/C) | `Dropdown` | LOOKUP_STATIC | L/R/C/Both |

## Control hint — form fields — **unchanged** (cite prior · 15/2 typed)

Giữ bảng form prior `task_94fca237` (shared + section khóm + thảm cỏ). **Cấm** đổi controlHint form trong pack này.

## Control hint — actions (**delta**)

| Action | Surface | Notes |
|--------|---------|-------|
| export-excel | **catalogToolbar** | Label **Xuất Excel** · binary download · sheet Biểu 12 · filter QS áp dụng nếu SA chốt |
| import-excel | **catalogToolbar** (P1) | Template Cục · merge-header 15 · **cấm** filter bar |
| create / view / edit / copy / delete / history / schema-config / refresh | Toolbar (keep) | Unchanged |
| save / cancel | Form footer | Unchanged |
| print-pdf | — | **OUT** Biểu (sổ Word) · không Wave 1 S12 |

## Open questions (PO trước Design)

| ID | Q | Options |
|----|---|---------|
| Q-XLS-SCOPE | Export = **filtered set** (road/province/status/…) hay **all tenant resource**? | filtered · all_resource (**SA/PO**) |
| Q-XLS-IMPORT | Import P1 cùng task hay DEFER sau export-only? | import_now · export_only_p0 |
| Q-XLS-FILENAME | Tên file download? | `Bieu12_CayXanh_{yyyyMMdd}.xls(x)` · SA chốt |
| Q-XLS-SHEET | 1 sheet 15 cột (khóm+cỏ cùng hàng) hay split sheet? | one_sheet · split (**cấm** split trừ Excel Cục yêu cầu) |

## Handoff

| Role | Dùng packet |
|------|-------------|
| **PO** | § Delta T-XLS-S12 · DoD binary ≠ toast · giữ Grid AC typed |
| **Design** | **Giữ** prototype typed · **chỉ** thêm nút Xuất (+Import) trên toolbar · reviewUrl cập nhật zone |
| **SA** | Path export/import · BFF binary · golden 16-sheet · 15 cột checksum · **cấm** đổi typed entity trừ gap |
| **TL/Dev** | `/implement-export-import-excel` · **cấm** filter-bar export · **cấm** re-CRUD typed |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-data-analy |
| skillVersion | 2026.09.05.03 |
| schemaVersion | 1 |
| workflowVersion | 2026.09.05.03 |
| rulesVersion | 2026.09.17.3 |
| contentHash | `sha256:f42502cee520105fb0a7f618c17b8b0f582884d7f779f638ec7310c26346e77a` |
| headerFingerprint | `sha256:b6a541f8adc60a5badc72fc92c606631e5a1457fc119b9a6a546eb1f0acc437a` |
| generatedAt | 2026-09-18T00:25:00.000Z |
| versionGate | ok |
| taskId | task_619ea74c |
| packKind | list |
| changeScope | edit_page |

---
<!-- Version meta: skillId=agent-data-analy skillVersion=2026.09.05.03 schemaVersion=1 workflowVersion=2026.09.05.03 rulesVersion=2026.09.17.3 versionGate=ok contentHash=sha256:f42502cee520105fb0a7f618c17b8b0f582884d7f779f638ec7310c26346e77a changeScope=edit_page taskId=task_619ea74c -->
