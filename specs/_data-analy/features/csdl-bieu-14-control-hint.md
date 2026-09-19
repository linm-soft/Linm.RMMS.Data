# Data-analy — controlHint — csdl-bieu-14 (Kind B list + Kind D Slideout · Biểu 14)

| Field | Value |
|-------|-------|
| feature | `csdl-bieu-14` |
| packKind | `list` |
| mode | `feature_context` (edit_page · T-XLS-S14 · keep typed CRUD) |
| changeScope | `edit_page` |
| status | `done` |
| skillId | `agent-data-analy` |
| skillVersion | `2026.09.05.03` |
| schemaVersion | `1` |
| workflowVersion | `2026.09.05.03` |
| rulesVersion | `2026.09.17.3` |
| versionGate | `ok` (CTX hash change + export delta Wave 1 · autoApprove queue · **không** AskQuestion) |
| contentHash | `sha256:e9a062f1f9eecd6bf98748db0c3f839e2247a74ecb9bcd56273d4e48d729fa0a` |
| headerFingerprint | `sha256:14cd156a898dcc971a072dd1cd1b92460a8b597558a90dc9854fead9d4c4de5c` |
| analyzedAt | `2026-09-18T01:32:46.463Z` |
| cluster | `csdl-cuc-2026` · Excel sheet Biểu 14 · **21 cột** · ITS/GTTM · Wave 1 `T-XLS-S14` |
| taskId | `task_b92db6a6` |
| priorTask | `task_db0e2ea1` → pipeline review `task_1b0469b6` (typed CRUD **done** — **cấm** re-run new_page typed) |
| autoApprove | `ON` (queue) |
| realData | `specs/_data-analy/features/csdl-bieu-14-real-data.md` |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · domain **Asset** · `api/v1/asset/csdl-records` · **cấm ERP.*** · **cấm** invent `api/v1/infra/*` |
| uiRepo | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| mfeStdUrl | `http://localhost:9301/so-ts/csdl-so-sach` · alias `/csdl-bieu-14` · hub `?resource=its-systems` |
| resource | `its-systems` |
| formNo | `14` · title VN **Hệ thống ITS (GTTM)** |
| peerSoTs | `so-ts-its-camera` (peer type `ITS_CAMERA`) · **≠** merge form so-ts-* · **GAP-CSDL-CUC-11** |
| runMode | `edit_page` · export/import Excel đúng mẫu Cục · **cấm** new_page typed CRUD |
| epicCite | `docs/context/features/csdl-export-print.md` Wave 1 · `T-XLS-S14` |
| devSlashExport | `/implement-export-import-excel` · BFF binary |

> Data-analy **đề xuất** controlHint. Design **chốt** control-map (giữ prototype typed · **chỉ** delta toolbar export). SA **chốt** binary export path.  
> Typography: label **13** · input D14 / M16 (**GAP-TYP-01**).  
> **Giữ** PO/Design/SA artifacts typed — analy **chỉ** § Delta export.  
> Toast stub / typed STATUS done **≠** export xong.  
> Golden = Cục **16-sheet** xls · **cấm** hồ sơ 12+8.

## Sources

| Source | Path | sha256 / note |
|--------|------|---------------|
| Context | `docs/context/features/csdl-bieu-14.md` | `e9a062f1f9eecd6bf98748db0c3f839e2247a74ecb9bcd56273d4e48d729fa0a` |
| Export epic | `docs/context/features/csdl-export-print.md` | `2ca7ea0a7f1cfe4d3caf05688cc08ca2546457b09ed388671b58c3a769492c14` |
| Parent hub | `docs/context/features/csdl-so-sach.md` | cite hub Kind G · resource `its-systems` |
| Cluster analy | `specs/_data-analy/csdl-cuc-2026/ANALYSIS-AND-TASKS.md` | Biểu 14 · **21 cột** · § Biểu 14 |
| DB API SSOT | `docs/context/11-CSDL-SO-SACH-DATABASE-API.md` | Schema_CsdlBieu14 / ItsSystem · device + infra + GPS |
| Demo | N/A (packet) · prior hub demo zone-only | **cấm** demo SSOT |
| DOMAIN-MAP | `Linm.RMMS.WebService/docs/DOMAIN-MAP.md` | Asset · `csdl-records` · slug `csdl-bieu-14` |
| Live MFE | `CsdlBieu14Page` · `fromCatalogToolbar` | typed list+slideout **shipped** · **thiếu** Xuất Excel |
| Live API | `CsdlCatalogRecordsController` | CRUD live · export/import **gap** |
| Golden Excel | `data-import/…/1. Biểu mẫu CSDL.xls` sheet Biểu 14 | Cục **16-sheet** · **cấm** hồ sơ 12+8 làm golden |
| Peer Sổ TS | `so-ts-its-camera` · `road-assets?type=ITS_CAMERA` | cite only · **cấm** merge vào export |
| Peer ITS MFE | `its-traffic-detect` / `its-anpr-overload` / Camera | **cite only** · **cấm** bind export |

Normalized header (unchanged · 21 — Excel flatten):

`code|roadCode|roadName|province|kmFrom|kmTo|side|direction|gpsLat|gpsLng|deviceType|brand|techSpec|qtyOrLength|operatingStatus|infraKind|clearanceM|infraQty|systemStatus|yearBuilt|notes`

Form trail (đã trong 21): `notes` · `manageUnit` P2 nếu có. **Không** thêm cột ngoài 21.  
DB SSOT: `DeviceType` · `Brand` · `TechSpec` · `QtyOrLength` · `OperatingStatus` · `InfraKind` · `ClearanceM` · `InfraQty` · `SystemStatus` · `YearBuilt` · `GpsLat`/`GpsLng` · `Direction` · `Side` ↔ camelCase (**SA** giữ map typed).

## § Delta Current vs New (`edit_page` · `task_b92db6a6` · **T-XLS-S14**)

| ID | Current (live / prior analy) | New (this analy) | Surface |
|----|------------------------------|------------------|---------|
| GAP-BIEU14-XLS-01 | Typed CRUD + 21 cột + section thiết bị/hạ tầng **PASS** · toolbar **không** Xuất/Import binary | **Xuất Excel** (+ Import P1) đúng sheet Biểu 14 · merge-header · 21 cột | `catalogToolbar` / `report-toolbar-actions` |
| GAP-BIEU14-XLS-02 | Toast / stub action coi «có nút» | File binary qua BFF · `/implement-export-import-excel` · **cấm** toast-only done | FE + BFF + BE |
| GAP-BIEU14-XLS-03 | — / hồ sơ 12+8 STALE | Golden = Cục **16-sheet** xls sheet Biểu 14 · **cấm** 12+8 golden | SA/Dev checksum |
| GAP-BIEU14-XLS-04 | Filter bar chỉ field + 🔍 | **Cấm** đặt Xuất/Import trên `LinErpListFilterBar` (**GAP-FILTER-BAR-08**) | Zone B filter vs toolbar |
| GAP-BIEU14-XLS-05 | API CRUD only | `GET …/csdl-records/export?resource=its-systems` · `POST …/import?resource=` (cite epic · SA chốt) | BE Asset |
| GAP-BIEU14-XLS-06 | Section thiết bị + hạ tầng UX form | Export **1 sheet** 21 cột · device+infra+GPS cùng hàng · **cấm** invent sheet riêng TB/HT | export engine |
| GAP-BIEU14-XLS-07 | Peer `so-ts-its-camera` / ITS AiVision tồn tại | Export qty/m biểu Cục · **cấm** merge/dump Sổ TS `road-assets` / ITS MFE vào file | export bind |
| — | Typed form/list/route/hub | **Không đổi** · **cấm** new_page typed CRUD re-open | form / list / hub |

**Không** đổi: API prefix `api/v1/asset/csdl-records` · resource `its-systems` · Kind B A–D · Kind D Slideout · filter slots · **cấm ERP.*** · IdCode `IT` · formNo `14` · section thiết bị + hạ tầng · peer cite-only.

**Closed / keep (prior new_page — không reopen):** GAP-BIEU14-HUB/TYPED/ROUTE/DEV/INFRA/GPS/DIR/DB/DMAP · ROAD/PROV/ORG P2 debt · GAP-CSDL-CUC-11 · GAP-BIEU14-PEER-ITS-01 · prior GAP-CSDL-XLS-01 stub → **supersede** bằng GAP-BIEU14-XLS-*.

## Kind / zones (handoff Design — delta only)

| Zone / surface | Pattern | DoD this edit |
|----------------|---------|----------------|
| List A | Header | Giữ «Biểu 14 — Hệ thống ITS (GTTM)» · back hub |
| List B toolbar | `catalogToolbar` | **Thêm** Xuất Excel (+ Import P1) · icon `erp-control-icon-map` · **cấm** filter |
| List B filter | `LinErpListFilterBar` | **Unchanged** · 0 action Xuất (**GAP-FILTER-BAR-08**) |
| List C/D | Grid + pagination | Unchanged · typed 21 |
| Form | Kind D Slideout | Unchanged · section thiết bị + hạ tầng |
| Map | none | — |

## Control hint — list filters (Zone B) — **unchanged**

| Field key | Label | controlHint | catalogKind | Notes |
|-----------|-------|-------------|-------------|-------|
| search | Tìm kiếm | `SearchTextInput` | text | mã · đường · hãng · ghi chú |
| province | Tỉnh/TP | `Dropdown` | LOOKUP_STATIC | |
| operatingStatus | TT hoạt động | `Dropdown` | LOOKUP_STATIC | |
| deviceType | Loại TB | `Dropdown` | LOOKUP_STATIC | cáp/CCTV/ANPR/VMS/tủ |
| roadCode | Đường | `SearchInput` | **road-route** | |
| kmFrom / kmTo | Lý trình từ–đến | `Number` | — | |
| side | Vị trí (T/P/C) | `Dropdown` | LOOKUP_STATIC | L/R/C/Both |

## Control hint — form fields — **unchanged** (cite prior · 21 typed)

Giữ bảng form prior `task_db0e2ea1` (shared + thiết bị ITS + hạ tầng gắn kèm). **Cấm** đổi controlHint form trong pack này.

## Control hint — actions (**delta**)

| Action | Surface | Notes |
|--------|---------|-------|
| export-excel | **catalogToolbar** | Label **Xuất Excel** · binary download · sheet Biểu 14 · filter QS áp dụng nếu SA chốt |
| import-excel | **catalogToolbar** (P1) | Template Cục · merge-header 21 · **cấm** filter bar |
| create / view / edit / copy / delete / history / schema-config / refresh | Toolbar (keep) | Unchanged |
| save / cancel | Form footer | Unchanged |
| print-pdf | — | **OUT** Biểu (sổ Word) · không Wave 1 S14 |

## Open questions (PO trước Design)

| ID | Q | Options |
|----|---|---------|
| Q-XLS-SCOPE | Export = **filtered set** (road/province/deviceType/…) hay **all tenant resource**? | filtered · all_resource (**SA/PO**) |
| Q-XLS-IMPORT | Import P1 cùng task hay DEFER sau export-only? | import_now · export_only_p0 |
| Q-XLS-FILENAME | Tên file download? | `Bieu14_HeThongITS_{yyyyMMdd}.xls(x)` · SA chốt |
| Q-XLS-SHEET | 1 sheet 21 cột (device+infra+GPS cùng hàng) hay split? | one_sheet · split (**cấm** split trừ Excel Cục yêu cầu) |

## Handoff

| Role | Dùng packet |
|------|-------------|
| **PO** | § Delta T-XLS-S14 · DoD binary ≠ toast · giữ Grid AC typed |
| **Design** | **Giữ** prototype typed · **chỉ** thêm nút Xuất (+Import) trên toolbar · reviewUrl cập nhật zone |
| **SA** | Path export/import · BFF binary · golden 16-sheet · 21 cột checksum · **cấm** đổi typed entity trừ gap |
| **TL/Dev** | `/implement-export-import-excel` · **cấm** filter-bar export · **cấm** re-CRUD typed · **cấm** merge so-ts-its-camera / ITS AiVision |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-data-analy |
| skillVersion | 2026.09.05.03 |
| schemaVersion | 1 |
| workflowVersion | 2026.09.05.03 |
| rulesVersion | 2026.09.17.3 |
| contentHash | `sha256:e9a062f1f9eecd6bf98748db0c3f839e2247a74ecb9bcd56273d4e48d729fa0a` |
| headerFingerprint | `sha256:14cd156a898dcc971a072dd1cd1b92460a8b597558a90dc9854fead9d4c4de5c` |
| generatedAt | 2026-09-18T01:32:46.463Z |
| versionGate | ok |
| taskId | task_b92db6a6 |
| packKind | list |
| changeScope | edit_page |

---
<!-- Version meta: skillId=agent-data-analy skillVersion=2026.09.05.03 schemaVersion=1 workflowVersion=2026.09.05.03 rulesVersion=2026.09.17.3 versionGate=ok contentHash=sha256:e9a062f1f9eecd6bf98748db0c3f839e2247a74ecb9bcd56273d4e48d729fa0a changeScope=edit_page taskId=task_b92db6a6 -->
