# Data-analy — controlHint — csdl-bieu-10 (Kind B list + Kind D Slideout · Biểu 10)

| Field | Value |
|-------|-------|
| feature | `csdl-bieu-10` |
| packKind | `list` |
| mode | `feature_context` (edit_page · T-XLS-S10 · keep typed CRUD) |
| changeScope | `edit_page` |
| status | `done` |
| skillId | `agent-data-analy` |
| skillVersion | `2026.09.05.03` |
| schemaVersion | `1` |
| workflowVersion | `2026.09.05.03` |
| rulesVersion | `2026.09.17.3` |
| versionGate | `ok` (CTX hash change + export delta Wave 1 · autoApprove queue · **không** AskQuestion) |
| contentHash | `sha256:49ea64d3b8f51e899c4bb36ae444444b4c0a805e64349f8e1f52677909ab0302` |
| headerFingerprint | `sha256:9d4863dcab46439966e526cc7696f137695022911a3edc5066c852dc779fa598` |
| analyzedAt | `2026-09-18T06:05:57.248Z` |
| cluster | `csdl-cuc-2026` · Excel sheet Biểu 10 · **21 cột** · tường + rãnh đỉnh · Wave 1 `T-XLS-S10` |
| taskId | `task_0fb02546` |
| priorTask | `task_6b4b8a1b` → pipeline review `task_faf3807e` (typed CRUD **done** — **cấm** re-run new_page typed) |
| autoApprove | `ON` (queue) |
| realData | `specs/_data-analy/features/csdl-bieu-10-real-data.md` |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · domain **Asset** · `api/v1/asset/csdl-records` · **cấm ERP.*** · **cấm** invent `api/v1/infra/*` |
| uiRepo | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| mfeStdUrl | `http://localhost:9301/so-ts/csdl-so-sach` · alias `/csdl-bieu-10` · hub `?resource=retaining-walls` |
| resource | `retaining-walls` |
| formNo | `10` · title VN **Kè, tường chắn** |
| peerSoTs | `so-ts-retaining` · **≠** merge form · **GAP-CSDL-CUC-11** · deep-link OK |
| runMode | `edit_page` · export/import Excel đúng mẫu Cục · **cấm** new_page typed CRUD |
| epicCite | `docs/context/features/csdl-export-print.md` Wave 1 · `T-XLS-S10` |
| devSlashExport | `/implement-export-import-excel` · BFF binary |

> Data-analy **đề xuất** controlHint. Design **chốt** control-map (giữ prototype typed · **chỉ** delta toolbar export). SA **chốt** binary export path.  
> Typography: label **13** · input D14 / M16 (**GAP-TYP-01**).  
> **Giữ** PO/Design/SA artifacts typed — analy **chỉ** § Delta export.  
> Toast stub / typed STATUS done **≠** export xong.  
> Golden = Cục **16-sheet** xls · **cấm** hồ sơ 12+8.

## Sources

| Source | Path | sha256 / note |
|--------|------|---------------|
| Context | `docs/context/features/csdl-bieu-10.md` | `49ea64d3b8f51e899c4bb36ae444444b4c0a805e64349f8e1f52677909ab0302` |
| Export epic | `docs/context/features/csdl-export-print.md` | `2ca7ea0a7f1cfe4d3caf05688cc08ca2546457b09ed388671b58c3a769492c14` |
| Parent hub | `docs/context/features/csdl-so-sach.md` | cite hub Kind G · resource `retaining-walls` |
| Cluster analy | `specs/_data-analy/csdl-cuc-2026/ANALYSIS-AND-TASKS.md` | Biểu 10 · 21 cột · section tường + rãnh đỉnh |
| DB API SSOT | `docs/context/11-CSDL-SO-SACH-DATABASE-API.md` | RetainingWall · WidthM↔heightM |
| Demo | N/A (packet) · prior hub demo zone-only | **cấm** demo SSOT |
| DOMAIN-MAP | `Linm.RMMS.WebService/docs/DOMAIN-MAP.md` | Asset · `csdl-records` |
| Live MFE | `CsdlBieu10Page` / hub `retaining-walls` · `fromCatalogToolbar` | typed list+slideout **shipped** · **thiếu** Xuất Excel |
| Live API | `CsdlCatalogRecordsController` | CRUD live · export/import **gap** |
| Golden Excel | `data-import/…/1. Biểu mẫu CSDL.xls` sheet Biểu 10 | Cục **16-sheet** · **cấm** hồ sơ 12+8 làm golden |
| Peer Sổ TS | `so-ts-retaining` · type `RETAINING` | deep-link only · **cấm** merge |

Normalized header (unchanged · 21 — Excel flatten):

`code|roadCode|roadName|province|kmFrom|kmTo|side|wallKind|structure|material|lengthM|heightM|areaM2|crestDitchKind|crestDitchStructure|crestDitchShape|crestDitchLengthM|inServiceYear|status|manageUnit|notes`

Form trail (đã trong 21): `manageUnit` · `notes`. **Không** thêm cột ngoài 21.  
DB SSOT `WidthM` ↔ UI/export `heightM` (cao) — SA giữ map typed.

## § Delta Current vs New (`edit_page` · `task_0fb02546` · **T-XLS-S10**)

| ID | Current (live / prior analy) | New (this analy) | Surface |
|----|------------------------------|------------------|---------|
| GAP-BIEU10-XLS-01 | Typed CRUD + 21/2 section **PASS** · toolbar **không** Xuất/Import binary | **Xuất Excel** (+ Import P1) đúng sheet Biểu 10 · merge-header · 21 cột | `catalogToolbar` / `report-toolbar-actions` |
| GAP-BIEU10-XLS-02 | Toast / stub action coi «có nút» | File binary qua BFF · `/implement-export-import-excel` · **cấm** toast-only done | FE + BFF + BE |
| GAP-BIEU10-XLS-03 | — / hồ sơ 12+8 STALE | Golden = Cục **16-sheet** xls sheet Biểu 10 · **cấm** 12+8 golden | SA/Dev checksum |
| GAP-BIEU10-XLS-04 | Filter bar chỉ field + 🔍 | **Cấm** đặt Xuất/Import trên `LinErpListFilterBar` (**GAP-FILTER-BAR-08**) | Zone B filter vs toolbar |
| GAP-BIEU10-XLS-05 | API CRUD only | `GET …/csdl-records/export?resource=retaining-walls` · `POST …/import?resource=` (cite epic · SA chốt) | BE Asset |
| GAP-BIEU10-XLS-06 | 2 section UX tường + rãnh đỉnh | Export **1 sheet** 21 cột · crest* cùng hàng · **cấm** invent 2 sheet / child-only sheet | export engine |
| GAP-BIEU10-XLS-07 | heightM UI ↔ DB WidthM | Export/import map `heightM`↔`WidthM` giữ SA typed · **cấm** đổi entity | BE map |
| — | Typed form/list/route | **Không đổi** · **cấm** new_page typed CRUD re-open | form / list |

**Không** đổi: API prefix `api/v1/asset/csdl-records` · resource `retaining-walls` · Kind B A–D · Kind D Slideout · filter slots · **cấm ERP.*** · IdCode `KE` · peer `so-ts-retaining` deep-link · formNo `10` · 2 section form UX.

**Closed / keep (prior new_page — không reopen):** GAP-BIEU10-TYPED-01 · REN · ROUTE · KIND · STRUCT · MAT · DIM · CREST · YEAR · BLOCK · ROAD/PROV/ORG P2 debt · GAP-CSDL-CUC-11 · prior GAP-CSDL-XLS-01 stub → **supersede** bằng GAP-BIEU10-XLS-*.

## Kind / zones (handoff Design — delta only)

| Zone / surface | Pattern | DoD this edit |
|----------------|---------|----------------|
| List A | Header | Giữ «Biểu 10 — Kè, tường chắn» · back hub |
| List B toolbar | `catalogToolbar` | **Thêm** Xuất Excel (+ Import P1) · icon `erp-control-icon-map` · **cấm** filter |
| List B filter | `LinErpListFilterBar` | **Unchanged** · 0 action Xuất (**GAP-FILTER-BAR-08**) |
| List C/D | Grid + pagination | Unchanged · typed 21 · filter `wallKind` |
| Form | Kind D Slideout | Unchanged · 2 section tường + rãnh đỉnh |
| Map | none | — |

## Control hint — list filters (Zone B) — **unchanged**

| Field key | Label | controlHint | catalogKind | Notes |
|-----------|-------|-------------|-------------|-------|
| search | Tìm kiếm | `SearchTextInput` | text | mã · đường · chủng · vật liệu · ghi chú |
| province | Tỉnh/TP | `Dropdown` | LOOKUP_STATIC | |
| status | Tình trạng | `Dropdown` | LOOKUP_STATIC | tot/tb/kem/hong |
| roadCode | Đường | `SearchInput` | **road-route** | |
| kmFrom / kmTo | Lý trình từ–đến | `Number` | — | |
| side | Vị trí (T/P/C) | `Dropdown` | LOOKUP_STATIC | L/R/C/Both |
| wallKind | Loại kè/tường | `Dropdown` | LOOKUP_STATIC | trọng lực / rọ / BTCT / tường chắn |

## Control hint — form fields — **unchanged** (cite prior · 21/2 typed)

Giữ bảng form prior `task_6b4b8a1b` (shared + section tường + rãnh đỉnh). **Cấm** đổi controlHint form trong pack này.

## Control hint — actions (**delta**)

| Action | Surface | Notes |
|--------|---------|-------|
| export-excel | **catalogToolbar** | Label **Xuất Excel** · binary download · sheet Biểu 10 · filter QS áp dụng nếu SA chốt |
| import-excel | **catalogToolbar** (P1) | Template Cục · merge-header 21 · **cấm** filter bar |
| create / view / edit / copy / delete / history / schema-config / refresh / peer-sots | Toolbar (keep) | Unchanged |
| save / cancel | Form footer | Unchanged |
| print-pdf | — | **OUT** Biểu (sổ Word) · không Wave 1 S10 |

## Open questions (PO trước Design)

| ID | Q | Options |
|----|---|---------|
| Q-XLS-SCOPE | Export = **filtered set** (gồm `wallKind`/road/…) hay **all tenant resource**? | filtered · all_resource (**SA/PO**) |
| Q-XLS-IMPORT | Import P1 cùng task hay DEFER sau export-only? | import_now · export_only_p0 |
| Q-XLS-FILENAME | Tên file download? | `Bieu10_KeTuongChan_{yyyyMMdd}.xls(x)` · SA chốt |
| Q-XLS-HEIGHT | Export cột Excel «cao» = `heightM` (UI) hay raw `WidthM`? | height_alias · keep_width (**SA giữ typed**) |

## Handoff

| Role | Dùng packet |
|------|-------------|
| **PO** | § Delta T-XLS-S10 · DoD binary ≠ toast · giữ Grid AC typed |
| **Design** | **Giữ** prototype typed · **chỉ** thêm nút Xuất (+Import) trên toolbar · reviewUrl cập nhật zone |
| **SA** | Path export/import · BFF binary · golden 16-sheet · heightM↔WidthM · **cấm** đổi typed entity trừ gap |
| **TL/Dev** | `/implement-export-import-excel` · **cấm** filter-bar export · **cấm** re-CRUD typed |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-data-analy |
| skillVersion | 2026.09.05.03 |
| schemaVersion | 1 |
| workflowVersion | 2026.09.05.03 |
| rulesVersion | 2026.09.17.3 |
| contentHash | `sha256:49ea64d3b8f51e899c4bb36ae444444b4c0a805e64349f8e1f52677909ab0302` |
| headerFingerprint | `sha256:9d4863dcab46439966e526cc7696f137695022911a3edc5066c852dc779fa598` |
| generatedAt | 2026-09-18T06:05:57.248Z |
| versionGate | ok |
| taskId | task_0fb02546 |
| packKind | list |
| changeScope | edit_page |

---
<!-- Version meta: skillId=agent-data-analy skillVersion=2026.09.05.03 schemaVersion=1 workflowVersion=2026.09.05.03 rulesVersion=2026.09.17.3 versionGate=ok contentHash=sha256:49ea64d3b8f51e899c4bb36ae444444b4c0a805e64349f8e1f52677909ab0302 changeScope=edit_page taskId=task_0fb02546 -->
