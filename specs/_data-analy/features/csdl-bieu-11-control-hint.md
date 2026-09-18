# Data-analy — controlHint — csdl-bieu-11 (Kind B list + Kind D Slideout · Biểu 11)

| Field | Value |
|-------|-------|
| feature | `csdl-bieu-11` |
| packKind | `list` |
| mode | `feature_context` (edit_page · T-XLS-S11 · keep typed CRUD) |
| changeScope | `edit_page` |
| status | `done` |
| skillId | `agent-data-analy` |
| skillVersion | `2026.09.05.03` |
| schemaVersion | `1` |
| workflowVersion | `2026.09.05.03` |
| rulesVersion | `2026.09.17.3` |
| versionGate | `ok` (CTX hash change + export delta Wave 1 · autoApprove queue · **không** AskQuestion) |
| contentHash | `sha256:7f64b8dcea4265af23b9f2e5e1dae3ab1c933b0a4404b0f872d39029716b4d62` |
| headerFingerprint | `sha256:b37759a9224c09c7c63bc81583b4a9bcbca02e74cba8b63579819e90d57f1d1a` |
| analyzedAt | `2026-09-18T06:44:00.000Z` |
| cluster | `csdl-cuc-2026` · Excel sheet Biểu 11 · **24 cột** · lưới LED + NLMT · Wave 1 `T-XLS-S11` |
| taskId | `task_55dac8de` |
| priorTask | `task_ed491c32` → pipeline review `task_20e43f26` (typed CRUD **done** — **cấm** re-run new_page typed) |
| autoApprove | `ON` (queue) |
| realData | `specs/_data-analy/features/csdl-bieu-11-real-data.md` |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · domain **Asset** · `api/v1/asset/csdl-records` · **cấm ERP.*** · **cấm** invent `api/v1/infra/*` |
| uiRepo | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| mfeStdUrl | `http://localhost:9301/so-ts/csdl-so-sach` · alias `/csdl-bieu-11` · hub `?resource=lighting-systems` |
| resource | `lighting-systems` |
| formNo | `11` · title VN **Hệ thống chiếu sáng** / CTX **Chiếu sáng lưới + NLMT** |
| peerSoTs | `so-ts-lighting` · type `LIGHTING` · **≠** merge form · **GAP-CSDL-CUC-11** · deep-link OK |
| runMode | `edit_page` · export/import Excel đúng mẫu Cục · **cấm** new_page typed CRUD |
| epicCite | `docs/context/features/csdl-export-print.md` Wave 1 · `T-XLS-S11` |
| devSlashExport | `/implement-export-import-excel` · BFF binary |

> Data-analy **đề xuất** controlHint. Design **chốt** control-map (giữ prototype typed · **chỉ** delta toolbar export). SA **chốt** binary export path.  
> Typography: label **13** · input D14 / M16 (**GAP-TYP-01**).  
> **Giữ** PO/Design/SA artifacts typed — analy **chỉ** § Delta export.  
> Toast stub / typed STATUS done **≠** export xong.  
> Golden = Cục **16-sheet** xls · **cấm** hồ sơ 12+8.

## Sources

| Source | Path | sha256 / note |
|--------|------|---------------|
| Context | `docs/context/features/csdl-bieu-11.md` | `7f64b8dcea4265af23b9f2e5e1dae3ab1c933b0a4404b0f872d39029716b4d62` |
| Export epic | `docs/context/features/csdl-export-print.md` | `2ca7ea0a7f1cfe4d3caf05688cc08ca2546457b09ed388671b58c3a769492c14` |
| Parent hub | `docs/context/features/csdl-so-sach.md` | cite hub Kind G · resource `lighting-systems` |
| Cluster analy | `specs/_data-analy/csdl-cuc-2026/ANALYSIS-AND-TASKS.md` | Biểu 11 · 24 cột · § Biểu 11 · GAP-CSDL-CUC-11 |
| DB API SSOT | `docs/context/11-CSDL-SO-SACH-DATABASE-API.md` | § LightingSystem · GridLed* · Solar* |
| Demo | N/A (packet) · prior hub demo zone-only | **cấm** demo SSOT |
| DOMAIN-MAP | `Linm.RMMS.WebService/docs/DOMAIN-MAP.md` | Asset · `csdl-records` |
| Live MFE | `CsdlBieu11Page` · `fromCatalogToolbar` | typed list+slideout **shipped** · **thiếu** Xuất Excel |
| Live API | `CsdlCatalogRecordsController` | CRUD live · export/import **gap** |
| Golden Excel | `data-import/…/1. Biểu mẫu CSDL.xls` sheet Biểu 11 | Cục **16-sheet** · **cấm** hồ sơ 12+8 làm golden |
| Peer Sổ TS | `so-ts-lighting` · type `LIGHTING` | deep-link only · **cấm** merge · qty ≠ điểm |

Normalized header (unchanged · 24 — Excel flatten):

`code|roadCode|roadName|province|kmFrom|kmTo|side|gridLed600|gridLed240|gridLed150|gridLed125|gridStatus|gridPoleCount|cabinetCount|substationCount|solarPoleCount|solarControllerCount|solarPanel240Wp|solarLamp100W|solarBattery145Ah|solarCabinetCount|status|manageUnit|notes`

Form trail (đã trong 24): `manageUnit` · `notes`. **Không** thêm cột ngoài 24.  
DB SSOT: `GridLed600`…`GridLed125` · `GridStatus` · `GridPoleCount` · `CabinetCount` · `SubstationCount` · `Solar*` ↔ camelCase (**SA** giữ map typed).

## § Delta Current vs New (`edit_page` · `task_55dac8de` · **T-XLS-S11**)

| ID | Current (live / prior analy) | New (this analy) | Surface |
|----|------------------------------|------------------|---------|
| GAP-BIEU11-XLS-01 | Typed CRUD + 24/2 section **PASS** · toolbar **không** Xuất/Import binary | **Xuất Excel** (+ Import P1) đúng sheet Biểu 11 · merge-header · 24 cột | `catalogToolbar` / `report-toolbar-actions` |
| GAP-BIEU11-XLS-02 | Toast / stub action coi «có nút» | File binary qua BFF · `/implement-export-import-excel` · **cấm** toast-only done | FE + BFF + BE |
| GAP-BIEU11-XLS-03 | — / hồ sơ 12+8 STALE | Golden = Cục **16-sheet** xls sheet Biểu 11 · **cấm** 12+8 golden | SA/Dev checksum |
| GAP-BIEU11-XLS-04 | Filter bar chỉ field + 🔍 | **Cấm** đặt Xuất/Import trên `LinErpListFilterBar` (**GAP-FILTER-BAR-08**) | Zone B filter vs toolbar |
| GAP-BIEU11-XLS-05 | API CRUD only | `GET …/csdl-records/export?resource=lighting-systems` · `POST …/import?resource=` (cite epic · SA chốt) | BE Asset |
| GAP-BIEU11-XLS-06 | 2 section UX lưới + NLMT | Export **1 sheet** 24 cột · LED + Solar cùng hàng · **cấm** invent 2 sheet / child-only sheet | export engine |
| GAP-BIEU11-XLS-07 | Peer `so-ts-lighting` điểm/asset | Export **qty bucket** biểu Cục · **cấm** dump điểm Sổ TS vào file | export bind |
| — | Typed form/list/route | **Không đổi** · **cấm** new_page typed CRUD re-open | form / list |

**Không** đổi: API prefix `api/v1/asset/csdl-records` · resource `lighting-systems` · Kind B A–D · Kind D Slideout · filter slots · **cấm ERP.*** · IdCode `LT` · peer `so-ts-lighting` deep-link · formNo `11` · 2 section form UX.

**Closed / keep (prior new_page — không reopen):** GAP-BIEU11-TYPED-01 · ROUTE · GRID-* · SOLAR · BLOCK · ROAD/PROV/ORG P2 debt · GAP-CSDL-CUC-11 · prior GAP-CSDL-XLS-01 stub → **supersede** bằng GAP-BIEU11-XLS-*.

## Kind / zones (handoff Design — delta only)

| Zone / surface | Pattern | DoD this edit |
|----------------|---------|----------------|
| List A | Header | Giữ «Biểu 11 — Hệ thống chiếu sáng» · back hub |
| List B toolbar | `catalogToolbar` | **Thêm** Xuất Excel (+ Import P1) · icon `erp-control-icon-map` · **cấm** filter |
| List B filter | `LinErpListFilterBar` | **Unchanged** · 0 action Xuất (**GAP-FILTER-BAR-08**) |
| List C/D | Grid + pagination | Unchanged · typed 24 |
| Form | Kind D Slideout | Unchanged · 2 section lưới + NLMT |
| Map | none | — |

## Control hint — list filters (Zone B) — **unchanged**

| Field key | Label | controlHint | catalogKind | Notes |
|-----------|-------|-------------|-------------|-------|
| search | Tìm kiếm | `SearchTextInput` | text | mã · đường · ghi chú · qty text |
| province | Tỉnh/TP | `Dropdown` | LOOKUP_STATIC | |
| status | Tình trạng | `Dropdown` | LOOKUP_STATIC | tot/tb/kem/hong |
| roadCode | Đường | `SearchInput` | **road-route** | |
| kmFrom / kmTo | Lý trình từ–đến | `Number` | — | |
| side | Vị trí (T/P/C) | `Dropdown` | LOOKUP_STATIC | L/R/C/Both |

## Control hint — form fields — **unchanged** (cite prior · 24/2 typed)

Giữ bảng form prior `task_ed491c32` (shared + section lưới + NLMT). **Cấm** đổi controlHint form trong pack này.

## Control hint — actions (**delta**)

| Action | Surface | Notes |
|--------|---------|-------|
| export-excel | **catalogToolbar** | Label **Xuất Excel** · binary download · sheet Biểu 11 · filter QS áp dụng nếu SA chốt |
| import-excel | **catalogToolbar** (P1) | Template Cục · merge-header 24 · **cấm** filter bar |
| create / view / edit / copy / delete / history / schema-config / refresh / peer-sots | Toolbar (keep) | Unchanged |
| save / cancel | Form footer | Unchanged |
| print-pdf | — | **OUT** Biểu (sổ Word) · không Wave 1 S11 |

## Open questions (PO trước Design)

| ID | Q | Options |
|----|---|---------|
| Q-XLS-SCOPE | Export = **filtered set** (road/province/status/…) hay **all tenant resource**? | filtered · all_resource (**SA/PO**) |
| Q-XLS-IMPORT | Import P1 cùng task hay DEFER sau export-only? | import_now · export_only_p0 |
| Q-XLS-FILENAME | Tên file download? | `Bieu11_ChieuSang_{yyyyMMdd}.xls(x)` · SA chốt |
| Q-XLS-SHEET | 1 sheet 24 cột (LED+NLMT cùng hàng) hay split sheet? | one_sheet · split (**cấm** split trừ Excel Cục yêu cầu) |

## Handoff

| Role | Dùng packet |
|------|-------------|
| **PO** | § Delta T-XLS-S11 · DoD binary ≠ toast · giữ Grid AC typed |
| **Design** | **Giữ** prototype typed · **chỉ** thêm nút Xuất (+Import) trên toolbar · reviewUrl cập nhật zone |
| **SA** | Path export/import · BFF binary · golden 16-sheet · 24 cột checksum · **cấm** đổi typed entity trừ gap |
| **TL/Dev** | `/implement-export-import-excel` · **cấm** filter-bar export · **cấm** re-CRUD typed |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-data-analy |
| skillVersion | 2026.09.05.03 |
| schemaVersion | 1 |
| workflowVersion | 2026.09.05.03 |
| rulesVersion | 2026.09.17.3 |
| contentHash | `sha256:7f64b8dcea4265af23b9f2e5e1dae3ab1c933b0a4404b0f872d39029716b4d62` |
| headerFingerprint | `sha256:b37759a9224c09c7c63bc81583b4a9bcbca02e74cba8b63579819e90d57f1d1a` |
| generatedAt | 2026-09-18T06:44:00.000Z |
| versionGate | ok |
| taskId | task_55dac8de |
| packKind | list |
| changeScope | edit_page |

---
<!-- Version meta: skillId=agent-data-analy skillVersion=2026.09.05.03 schemaVersion=1 workflowVersion=2026.09.05.03 rulesVersion=2026.09.17.3 versionGate=ok contentHash=sha256:7f64b8dcea4265af23b9f2e5e1dae3ab1c933b0a4404b0f872d39029716b4d62 changeScope=edit_page taskId=task_55dac8de -->
