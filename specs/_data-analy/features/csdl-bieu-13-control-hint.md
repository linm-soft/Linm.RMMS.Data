# Data-analy — controlHint — csdl-bieu-13 (Kind B list + Kind D Slideout · Biểu 13)

| Field | Value |
|-------|-------|
| feature | `csdl-bieu-13` |
| packKind | `list` |
| mode | `feature_context` (edit_page · T-XLS-S13 · keep typed CRUD) |
| changeScope | `edit_page` |
| status | `done` |
| skillId | `agent-data-analy` |
| skillVersion | `2026.09.05.03` |
| schemaVersion | `1` |
| workflowVersion | `2026.09.05.03` |
| rulesVersion | `2026.09.17.3` |
| versionGate | `ok` (CTX hash change + export delta Wave 1 · autoApprove queue · **không** AskQuestion) |
| contentHash | `sha256:800386bb8f86bfcc815b9c7d3a6dc246dc58b0a95b5132a317c5a094d0b4194f` |
| headerFingerprint | `sha256:31dbc83200b511c9d61333b1cdb94e2880778980a3b21970be414e926db29008` |
| analyzedAt | `2026-09-18T00:53:47.050Z` |
| cluster | `csdl-cuc-2026` · Excel sheet Biểu 13 · **13 cột** · dài · cao · DT · Wave 1 `T-XLS-S13` |
| taskId | `task_4fec1f3f` |
| priorTask | `task_3cec1103` → pipeline review `task_bdbf3809` (typed CRUD **done** — **cấm** re-run new_page typed) |
| autoApprove | `ON` (queue) |
| realData | `specs/_data-analy/features/csdl-bieu-13-real-data.md` |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · domain **Asset** · `api/v1/asset/csdl-records` · **cấm ERP.*** · **cấm** invent `api/v1/infra/*` |
| uiRepo | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| mfeStdUrl | `http://localhost:9301/so-ts/csdl-so-sach` · alias `/csdl-bieu-13` · hub `?resource=noise-barriers` |
| resource | `noise-barriers` |
| formNo | `13` · title VN **Tường chống ồn** |
| peerSoTs | `so-ts-noise-barrier` (peer type `NOISE_BARRIER`) · **≠** merge form so-ts-* · **GAP-CSDL-CUC-11** |
| runMode | `edit_page` · export/import Excel đúng mẫu Cục · **cấm** new_page typed CRUD |
| epicCite | `docs/context/features/csdl-export-print.md` Wave 1 · `T-XLS-S13` |
| devSlashExport | `/implement-export-import-excel` · BFF binary |

> Data-analy **đề xuất** controlHint. Design **chốt** control-map (giữ prototype typed · **chỉ** delta toolbar export). SA **chốt** binary export path.  
> Typography: label **13** · input D14 / M16 (**GAP-TYP-01**).  
> **Giữ** PO/Design/SA artifacts typed — analy **chỉ** § Delta export.  
> Toast stub / typed STATUS done **≠** export xong.  
> Golden = Cục **16-sheet** xls · **cấm** hồ sơ 12+8.

## Sources

| Source | Path | sha256 / note |
|--------|------|---------------|
| Context | `docs/context/features/csdl-bieu-13.md` | `800386bb8f86bfcc815b9c7d3a6dc246dc58b0a95b5132a317c5a094d0b4194f` |
| Export epic | `docs/context/features/csdl-export-print.md` | `2ca7ea0a7f1cfe4d3caf05688cc08ca2546457b09ed388671b58c3a769492c14` |
| Parent hub | `docs/context/features/csdl-so-sach.md` | cite hub Kind G · resource `noise-barriers` |
| Cluster analy | `specs/_data-analy/csdl-cuc-2026/ANALYSIS-AND-TASKS.md` | Biểu 13 · 13 cột · § Biểu 13 |
| DB API SSOT | `docs/context/11-CSDL-SO-SACH-DATABASE-API.md` | Schema_CsdlBieu13 / NoiseBarrier · LengthM · HeightM · AreaM2 |
| Demo | N/A (packet) · prior hub demo zone-only | **cấm** demo SSOT |
| DOMAIN-MAP | `Linm.RMMS.WebService/docs/DOMAIN-MAP.md` | Asset · `csdl-records` · slug `csdl-bieu-13` |
| Live MFE | `CsdlBieu13Page` · `fromCatalogToolbar` | typed list+slideout **shipped** · **thiếu** Xuất Excel |
| Live API | `CsdlCatalogRecordsController` | CRUD live · export/import **gap** |
| Golden Excel | `data-import/…/1. Biểu mẫu CSDL.xls` sheet Biểu 13 | Cục **16-sheet** · **cấm** hồ sơ 12+8 làm golden |
| Peer Sổ TS | `so-ts-noise-barrier` · `road-assets?type=NOISE_BARRIER` | cite only · **cấm** merge vào export |

Normalized header (unchanged · 13 — Excel flatten):

`code|roadCode|roadName|province|kmFrom|kmTo|side|lengthM|heightM|areaM2|status|manageUnit|notes`

Form trail (đã trong 13): `manageUnit` · `notes`. **Không** thêm cột ngoài 13.  
DB SSOT: `LengthM` · `HeightM` · `AreaM2` ↔ camelCase (**SA** giữ map typed).

## § Delta Current vs New (`edit_page` · `task_4fec1f3f` · **T-XLS-S13**)

| ID | Current (live / prior analy) | New (this analy) | Surface |
|----|------------------------------|------------------|---------|
| GAP-BIEU13-XLS-01 | Typed CRUD + 13 cột + section kích thước **PASS** · toolbar **không** Xuất/Import binary | **Xuất Excel** (+ Import P1) đúng sheet Biểu 13 · merge-header · 13 cột | `catalogToolbar` / `report-toolbar-actions` |
| GAP-BIEU13-XLS-02 | Toast / stub action coi «có nút» | File binary qua BFF · `/implement-export-import-excel` · **cấm** toast-only done | FE + BFF + BE |
| GAP-BIEU13-XLS-03 | — / hồ sơ 12+8 STALE | Golden = Cục **16-sheet** xls sheet Biểu 13 · **cấm** 12+8 golden | SA/Dev checksum |
| GAP-BIEU13-XLS-04 | Filter bar chỉ field + 🔍 | **Cấm** đặt Xuất/Import trên `LinErpListFilterBar` (**GAP-FILTER-BAR-08**) | Zone B filter vs toolbar |
| GAP-BIEU13-XLS-05 | API CRUD only | `GET …/csdl-records/export?resource=noise-barriers` · `POST …/import?resource=` (cite epic · SA chốt) | BE Asset |
| GAP-BIEU13-XLS-06 | Section kích thước UX form | Export **1 sheet** 13 cột · dài/cao/DT cùng hàng · **cấm** invent sheet riêng kích thước | export engine |
| GAP-BIEU13-XLS-07 | Peer `so-ts-noise-barrier` tồn tại | Export qty/m² biểu Cục · **cấm** merge/dump Sổ TS `road-assets` vào file | export bind |
| — | Typed form/list/route/hub | **Không đổi** · **cấm** new_page typed CRUD re-open | form / list / hub |

**Không** đổi: API prefix `api/v1/asset/csdl-records` · resource `noise-barriers` · Kind B A–D · Kind D Slideout · filter slots · **cấm ERP.*** · IdCode `TC` · formNo `13` · section kích thước · peer cite-only.

**Closed / keep (prior new_page — không reopen):** GAP-BIEU13-HUB/TYPED/ROUTE/DIM/SIDE/DB/DMAP · ROAD/PROV/ORG P2 debt · GAP-CSDL-CUC-11 · prior GAP-CSDL-XLS-01 stub → **supersede** bằng GAP-BIEU13-XLS-*.

## Kind / zones (handoff Design — delta only)

| Zone / surface | Pattern | DoD this edit |
|----------------|---------|----------------|
| List A | Header | Giữ «Biểu 13 — Tường chống ồn» · back hub |
| List B toolbar | `catalogToolbar` | **Thêm** Xuất Excel (+ Import P1) · icon `erp-control-icon-map` · **cấm** filter |
| List B filter | `LinErpListFilterBar` | **Unchanged** · 0 action Xuất (**GAP-FILTER-BAR-08**) |
| List C/D | Grid + pagination | Unchanged · typed 13 |
| Form | Kind D Slideout | Unchanged · section kích thước dài/cao/DT |
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

## Control hint — form fields — **unchanged** (cite prior · 13 typed)

Giữ bảng form prior `task_3cec1103` (shared + section kích thước lengthM/heightM/areaM2). **Cấm** đổi controlHint form trong pack này.

## Control hint — actions (**delta**)

| Action | Surface | Notes |
|--------|---------|-------|
| export-excel | **catalogToolbar** | Label **Xuất Excel** · binary download · sheet Biểu 13 · filter QS áp dụng nếu SA chốt |
| import-excel | **catalogToolbar** (P1) | Template Cục · merge-header 13 · **cấm** filter bar |
| create / view / edit / copy / delete / history / schema-config / refresh | Toolbar (keep) | Unchanged |
| save / cancel | Form footer | Unchanged |
| print-pdf | — | **OUT** Biểu (sổ Word) · không Wave 1 S13 |

## Open questions (PO trước Design)

| ID | Q | Options |
|----|---|---------|
| Q-XLS-SCOPE | Export = **filtered set** (road/province/status/…) hay **all tenant resource**? | filtered · all_resource (**SA/PO**) |
| Q-XLS-IMPORT | Import P1 cùng task hay DEFER sau export-only? | import_now · export_only_p0 |
| Q-XLS-FILENAME | Tên file download? | `Bieu13_TuongChongOn_{yyyyMMdd}.xls(x)` · SA chốt |
| Q-XLS-SHEET | 1 sheet 13 cột (dài/cao/DT cùng hàng) hay split? | one_sheet · split (**cấm** split trừ Excel Cục yêu cầu) |

## Handoff

| Role | Dùng packet |
|------|-------------|
| **PO** | § Delta T-XLS-S13 · DoD binary ≠ toast · giữ Grid AC typed |
| **Design** | **Giữ** prototype typed · **chỉ** thêm nút Xuất (+Import) trên toolbar · reviewUrl cập nhật zone |
| **SA** | Path export/import · BFF binary · golden 16-sheet · 13 cột checksum · **cấm** đổi typed entity trừ gap |
| **TL/Dev** | `/implement-export-import-excel` · **cấm** filter-bar export · **cấm** re-CRUD typed · **cấm** merge so-ts-noise-barrier |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-data-analy |
| skillVersion | 2026.09.05.03 |
| schemaVersion | 1 |
| workflowVersion | 2026.09.05.03 |
| rulesVersion | 2026.09.17.3 |
| contentHash | `sha256:800386bb8f86bfcc815b9c7d3a6dc246dc58b0a95b5132a317c5a094d0b4194f` |
| headerFingerprint | `sha256:31dbc83200b511c9d61333b1cdb94e2880778980a3b21970be414e926db29008` |
| generatedAt | 2026-09-18T00:53:47.050Z |
| versionGate | ok |
| taskId | task_4fec1f3f |
| packKind | list |
| changeScope | edit_page |

---
<!-- Version meta: skillId=agent-data-analy skillVersion=2026.09.05.03 schemaVersion=1 workflowVersion=2026.09.05.03 rulesVersion=2026.09.17.3 versionGate=ok contentHash=sha256:800386bb8f86bfcc815b9c7d3a6dc246dc58b0a95b5132a317c5a094d0b4194f changeScope=edit_page taskId=task_4fec1f3f -->
