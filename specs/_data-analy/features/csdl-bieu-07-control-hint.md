# Data-analy — controlHint — csdl-bieu-07 (Kind B list + Kind D Slideout · Biểu 07)

| Field | Value |
|-------|-------|
| feature | `csdl-bieu-07` |
| packKind | `list` |
| mode | `feature_context` (edit_page · T-XLS-S07 · keep typed CRUD) |
| changeScope | `edit_page` |
| status | `done` |
| skillId | `agent-data-analy` |
| skillVersion | `2026.09.05.03` |
| schemaVersion | `1` |
| workflowVersion | `2026.09.05.03` |
| rulesVersion | `2026.09.17.3` |
| versionGate | `ok` (export epic delta · CTX+hash pair · autoApprove queue · **không** AskQuestion) |
| contentHash | `sha256:1250b5799e9174b21429e60e57abef17cb7d6c568ae417840c57b598f204a69a` |
| headerFingerprint | `sha256:ba33856d00d23440b05be8c78c8b8a5462662c96a1067e702b791eb5020d64cf` |
| analyzedAt | `2026-09-18T04:22:00.000Z` |
| cluster | `csdl-cuc-2026` · Excel sheet Biểu 7 · **20 cột** · Wave 1 `T-XLS-S07` |
| taskId | `task_9ab3979a` |
| priorTask | `task_480d8882` (typed CRUD pipeline **done** — **cấm** re-run new_page typed) |
| autoApprove | `ON` (queue) |
| realData | `specs/_data-analy/features/csdl-bieu-07-real-data.md` |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · domain **Asset** · `api/v1/asset/csdl-records` · **cấm ERP.*** · **cấm** invent `api/v1/infra/*` |
| uiRepo | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| mfeStdUrl | `http://localhost:9301/so-ts/csdl-so-sach` · alias `/csdl-bieu-07` · hub `?resource=shoulders-fences` |
| resource | `shoulders-fences` |
| formNo | `07` · title VN **Lề / taluy / hàng rào** |
| peerSoTs | `SHOULDER` (type-grid) — deep-link OK · **cấm** merge 1 form / 1 sheet hai chuẩn · **≠** Sổ TS |
| IdCode prefix | `LE` |
| runMode | `edit_page` · export/import Excel đúng mẫu Cục · **cấm** new_page typed CRUD |
| epicCite | `docs/context/features/csdl-export-print.md` Wave 1 · `T-XLS-S07` |
| devSlashExport | `/implement-export-import-excel` · BFF binary |

> Data-analy **đề xuất** controlHint. Design **chốt** control-map (giữ prototype typed · **chỉ** delta toolbar export). SA **chốt** binary export path.  
> Typography: label **13** · input D14 / M16 (**GAP-TYP-01**).  
> **Giữ** PO/Design/SA artifacts typed — analy **chỉ** § Delta export.  
> Toast stub / typed STATUS done **≠** export xong.

## Sources

| Source | Path | sha256 / note |
|--------|------|---------------|
| Context | `docs/context/features/csdl-bieu-07.md` | `1250b5799e9174b21429e60e57abef17cb7d6c568ae417840c57b598f204a69a` |
| Export epic | `docs/context/features/csdl-export-print.md` | `2ca7ea0a7f1cfe4d3caf05688cc08ca2546457b09ed388671b58c3a769492c14` |
| Parent hub | `docs/context/features/csdl-so-sach.md` | cite hub Kind G · `resource=shoulders-fences` |
| Cluster analy | `specs/_data-analy/csdl-cuc-2026/ANALYSIS-AND-TASKS.md` | Biểu 7 · 20 cột · 3 khối · T-REN-01 |
| Demo | N/A (packet) · prior hub demo zone-only | **cấm** demo SSOT |
| DOMAIN-MAP | `Linm.RMMS.WebService/docs/DOMAIN-MAP.md` | Asset · `csdl-records` · slug `csdl-bieu-07` |
| Live MFE | `CsdlBieu07Page` · `fromCatalogToolbar` | typed list+slideout **shipped** · **thiếu** Xuất Excel |
| Live API | `CsdlCatalogRecordsController` · `CsdlCatalogExcelService` | CRUD live · peer Biểu 1–6 typed XLS · **Biểu 7 export gap** |
| Golden Excel | `data-import/…/1. Biểu mẫu CSDL.xls` sheet Biểu 7 | Cục **16-sheet** · **cấm** hồ sơ 12+8 làm golden |
| Peer | type `SHOULDER` · so-ts-type-grid | deep-link only · **cấm** gộp sheet export |

Normalized header (unchanged · 20):

`code|roadCode|roadName|province|kmFrom|kmTo|side|shoulderStructure|shoulderLengthM|shoulderWidthM|shoulderAreaM2|slopeLengthM|slopeAreaM2|fenceKind|fencePostCount|fenceLengthKm|builtYear|status|manageUnit|notes`

## § Delta Current vs New (`edit_page` · `task_9ab3979a` · **T-XLS-S07**)

| ID | Current (live / prior analy) | New (this analy) | Surface |
|----|------------------------------|------------------|---------|
| GAP-BIEU07-XLS-01 | Typed CRUD + grid 20 cột **PASS** · toolbar **không** Xuất/Import binary | **Xuất Excel** (+ Import P1) đúng sheet Biểu 7 · merge-header · **20 cột** · 3 khối lề/taluy/HR | `catalogToolbar` / `report-toolbar-actions` |
| GAP-BIEU07-XLS-02 | Toast / stub action coi «có nút» · T-OUT-01 | File binary qua BFF · `/implement-export-import-excel` · **cấm** toast-only done | FE + BFF + BE |
| GAP-BIEU07-XLS-03 | — / hồ sơ 12+8 STALE · prior GAP-CSDL-XLS-01 OUT | Golden = Cục **16-sheet** xls sheet Biểu 7 · **cấm** 12+8 golden | SA/Dev checksum |
| GAP-BIEU07-XLS-04 | Filter bar chỉ field + 🔍 | **Cấm** đặt Xuất/Import trên `LinErpListFilterBar` (**GAP-FILTER-BAR-08**) | Zone B filter vs toolbar |
| GAP-BIEU07-XLS-05 | API CRUD only · ExcelService peer Biểu 1–6 | `GET …/csdl-records/export?resource=shoulders-fences` · `POST …/import?resource=` (cite epic · SA chốt) | BE Asset |
| GAP-BIEU07-XLS-PEER | Peer type `SHOULDER` / road-assets | Export **chỉ** sheet Biểu 7 Cục · **cấm** gộp cột/row Sổ TS vào file | XLS engine |
| — | Typed form/list/route · Schema_CsdlBieu7 · formNo 07 · FenceLengthM↔km | **Không đổi** · **cấm** new_page typed CRUD re-open | form / list |

**Không** đổi: API prefix `api/v1/asset/csdl-records` · resource `shoulders-fences` · Kind B A–D · Kind D Slideout · filter slots · **cấm ERP.*** · IdCode `LE` · 3 khối đã chốt · peer Sổ TS no-merge.

**Closed / keep (prior new_page — không reopen):** GAP-BIEU07-TYPED/REN/ROUTE/SHOULDER/SLOPE/FENCE/FENCE-LEN/PANEL/PEER · ROAD/PROV · ORG P2 debt · CUC-11 · prior GAP-CSDL-XLS-01 supersede bởi GAP-BIEU07-XLS-*.

## Kind / zones (handoff Design — delta only)

| Zone / surface | Pattern | DoD this edit |
|----------------|---------|----------------|
| List A | Header | Giữ «Biểu 07 — Lề / taluy / hàng rào» · back hub |
| List B toolbar | `catalogToolbar` | **Thêm** Xuất Excel (+ Import P1) · icon `erp-control-icon-map` · **cấm** filter |
| List B filter | `LinErpListFilterBar` | **Unchanged** · 0 action Xuất (**GAP-FILTER-BAR-08**) |
| List C/D | Grid + pagination | Unchanged typed cols |
| Form | Kind D Slideout | Unchanged typed 20 · 3 khối |
| Map | none | — |

## Control hint — list filters (Zone B) — **unchanged**

| Field key | Label | controlHint | catalogKind | Notes |
|-----------|-------|-------------|-------------|-------|
| search | Tìm kiếm | `SearchTextInput` | text | mã · đường · ghi chú · loại HR |
| province | Tỉnh/TP | `Dropdown` | LOOKUP_STATIC | |
| status | Tình trạng | `Dropdown` | LOOKUP_STATIC | tot/tb/kem/hong |
| roadCode | Đường | `SearchInput` | **road-route** | |
| kmFrom / kmTo | Lý trình từ–đến | `Number` | — | Line |
| side | Vị trí (T/P/C) | `Dropdown` | LOOKUP_STATIC | L/R/Both |
| fenceKind | Loại hàng rào | `Dropdown` | LOOKUP_STATIC | filter optional |

## Control hint — form fields — **unchanged** (cite prior · 20 cột typed)

Giữ bảng form prior `task_480d8882` (road · province · km · side · khối lề · taluy · HR · year · status · manageUnit · notes). **Cấm** đổi controlHint form trong pack này.

## Control hint — actions (**delta**)

| Action | Surface | Notes |
|--------|---------|-------|
| export-excel | **catalogToolbar** | Label **Xuất Excel** · binary download · sheet Biểu 7 · filter QS nếu SA chốt |
| import-excel | **catalogToolbar** (P1) | Template Cục · 20 cột · **cấm** filter bar · **cấm** gộp Sổ TS |
| create / view / edit / copy / delete / history / schema-config / refresh | Toolbar (keep) | Unchanged |
| save / cancel | Form footer | Unchanged |
| peer-sots | Toolbar / row (opt) | deep-link type `SHOULDER` · **cấm** merge form/export |
| print-pdf | — | **OUT** Biểu (sổ Word) · không Wave 1 S07 |

## Open questions (PO trước Design)

| ID | Q | Options |
|----|---|---------|
| Q-XLS-SCOPE | Export = **filtered set** hay **all tenant resource**? | filtered · all_resource (**SA/PO**) |
| Q-XLS-IMPORT | Import P1 cùng task hay DEFER sau export-only? | import_now · export_only_p0 |
| Q-XLS-FILENAME | Tên file download? | `Bieu07_LeTaluyHangRao_{yyyyMMdd}.xls(x)` · SA chốt |

## Handoff

| Role | Dùng packet |
|------|-------------|
| **PO** | § Delta XLS + open Q → delta `requirement.md` (**giữ** typed prior) |
| **Design** | control-map **chỉ** toolbar Xuất · giữ prototype 20 · reviewUrl |
| **SA** | path export/import binary · sheet Biểu 7 · checksum 20 · **cấm** 12+8 golden |
| **TL/Dev** | `/implement-export-import-excel` · wire `catalogToolbar` · **cấm** filter bar |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-data-analy |
| skillVersion | 2026.09.05.03 |
| schemaVersion | 1 |
| workflowVersion | 2026.09.05.03 |
| rulesVersion | 2026.09.17.3 |
| contentHash | `sha256:1250b5799e9174b21429e60e57abef17cb7d6c568ae417840c57b598f204a69a` |
| headerFingerprint | `sha256:ba33856d00d23440b05be8c78c8b8a5462662c96a1067e702b791eb5020d64cf` |
| generatedAt | 2026-09-18T04:22:00.000Z |
| versionGate | ok |
| taskId | task_9ab3979a |
| packKind | list |
| changeScope | edit_page |

---
<!-- Version meta: skillId=agent-data-analy skillVersion=2026.09.05.03 schemaVersion=1 workflowVersion=2026.09.05.03 rulesVersion=2026.09.17.3 versionGate=ok contentHash=sha256:1250b5799e9174b21429e60e57abef17cb7d6c568ae417840c57b598f204a69a -->
