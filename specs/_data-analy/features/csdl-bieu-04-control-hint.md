# Data-analy — controlHint — csdl-bieu-04 (Kind B list + Kind D Slideout · Biểu 04)

| Field | Value |
|-------|-------|
| feature | `csdl-bieu-04` |
| packKind | `list` |
| mode | `feature_context` (edit_page · T-XLS-S04 · keep typed CRUD) |
| changeScope | `edit_page` |
| status | `done` |
| skillId | `agent-data-analy` |
| skillVersion | `2026.09.05.03` |
| schemaVersion | `1` |
| workflowVersion | `2026.09.05.03` |
| rulesVersion | `2026.09.17.3` |
| versionGate | `ok` (export epic delta · CTX+hash pair · autoApprove queue · **không** AskQuestion) |
| contentHash | `sha256:eef182add5b68de5b3e27ec36ed9c099689831aeb77742814aa296bf286243f9` |
| headerFingerprint | `sha256:8b98f7a22739bdad37b67a7ef869d6c465edc38061f0d5853fe2e69758d4ccea` |
| analyzedAt | `2026-09-17T19:56:36.427Z` |
| cluster | `csdl-cuc-2026` · Excel sheet Biểu 4 · **17 cột** · Wave 1 `T-XLS-S04` |
| taskId | `task_584ba7e8` |
| priorTask | `task_ea0d8d57` (typed CRUD pipeline **done** — **cấm** re-run new_page typed) |
| autoApprove | `ON` (queue) |
| realData | `specs/_data-analy/features/csdl-bieu-04-real-data.md` |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · domain **Asset** · `api/v1/asset/csdl-records` · **cấm ERP.*** · **cấm** invent `api/v1/infra/*` |
| uiRepo | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| mfeStdUrl | `http://localhost:9301/so-ts/csdl-so-sach` · alias `/csdl-bieu-04` · hub `?resource=culverts` |
| resource | `culverts` |
| formNo | `04` · title VN **Cống các loại** |
| peerSoTs | `so-ts-culvert-x` (CULVERT_X) — deep-link OK · **cấm** merge 1 form / 1 sheet hai chuẩn |
| IdCode prefix | `CG` |
| runMode | `edit_page` · export/import Excel đúng mẫu Cục · **cấm** new_page typed CRUD |
| epicCite | `docs/context/features/csdl-export-print.md` Wave 1 · `T-XLS-S04` |
| devSlashExport | `/implement-export-import-excel` · BFF binary |

> Data-analy **đề xuất** controlHint. Design **chốt** control-map (giữ prototype typed · **chỉ** delta toolbar export). SA **chốt** binary export path.  
> Typography: label **13** · input D14 / M16 (**GAP-TYP-01**).  
> **Giữ** PO/Design/SA artifacts typed — analy **chỉ** § Delta export.  
> Toast stub / typed STATUS done **≠** export xong.

## Sources

| Source | Path | sha256 / note |
|--------|------|---------------|
| Context | `docs/context/features/csdl-bieu-04.md` | `721e2ff880ab73aa68d611655ee59105a82a99a2ffd6de460a224a8a42947278` |
| Export epic | `docs/context/features/csdl-export-print.md` | `2ca7ea0a7f1cfe4d3caf05688cc08ca2546457b09ed388671b58c3a769492c14` |
| Parent hub | `docs/context/features/csdl-so-sach.md` | cite hub Kind G · `resource=culverts` |
| Cluster analy | `specs/_data-analy/csdl-cuc-2026/ANALYSIS-AND-TASKS.md` | Biểu 4 · 17 cột · peer `so-ts-culvert-x` |
| Demo | N/A (packet) · prior hub demo zone-only | **cấm** demo SSOT |
| DOMAIN-MAP | `Linm.RMMS.WebService/docs/DOMAIN-MAP.md` | Asset · `csdl-records` · slug `csdl-bieu-04` |
| Live MFE | `CsdlBieu04Page` · `fromCatalogToolbar` | typed list+slideout **shipped** · **thiếu** Xuất Excel |
| Live API | `CsdlCatalogRecordsController` · `CsdlCatalogExcelService` | CRUD live · Biểu 1–3 typed XLS · **Biểu 4 export gap** |
| Golden Excel | `data-import/…/1. Biểu mẫu CSDL.xls` sheet Biểu 4 | Cục **16-sheet** · **cấm** hồ sơ 12+8 làm golden |
| Peer CTX | `docs/context/features/so-ts-culvert-x.md` | Sổ TS deep-link only · **cấm** gộp sheet export |

Normalized header (unchanged · 17):

`code|roadCode|roadName|province|kmPoint|gpsCulvertX|gpsCulvertY|gpsRoadX|gpsRoadY|apertureM|shape|bodyMaterial|inletUpstream|outletDownstream|lengthM|loadClass|builtYear|status|side|manageUnit|notes`

## § Delta Current vs New (`edit_page` · `task_584ba7e8` · **T-XLS-S04**)

| ID | Current (live / prior analy) | New (this analy) | Surface |
|----|------------------------------|------------------|---------|
| GAP-BIEU04-XLS-01 | Typed CRUD + grid 17 cột **PASS** · toolbar **không** Xuất/Import binary | **Xuất Excel** (+ Import P1) đúng sheet Biểu 4 · merge-header · **17 cột** | `catalogToolbar` / `report-toolbar-actions` |
| GAP-BIEU04-XLS-02 | Toast / stub action coi «có nút» | File binary qua BFF · `/implement-export-import-excel` · **cấm** toast-only done | FE + BFF + BE |
| GAP-BIEU04-XLS-03 | — / hồ sơ 12+8 STALE · prior GAP-CSDL-XLS-01 OUT | Golden = Cục **16-sheet** xls sheet Biểu 4 · **cấm** 12+8 golden | SA/Dev checksum |
| GAP-BIEU04-XLS-04 | Filter bar chỉ field + 🔍 | **Cấm** đặt Xuất/Import trên `LinErpListFilterBar` (**GAP-FILTER-BAR-08**) | Zone B filter vs toolbar |
| GAP-BIEU04-XLS-05 | API CRUD only · ExcelService Biểu 1–3 | `GET …/csdl-records/export?resource=culverts` · `POST …/import?resource=` (cite epic · SA chốt) | BE Asset |
| GAP-BIEU04-XLS-PEER | Peer Sổ TS `so-ts-culvert-x` / CULVERT_X | Export **chỉ** sheet Biểu 4 Cục · **cấm** gộp cột/row Sổ TS vào file | XLS engine |
| — | Typed form/list/route | **Không đổi** · **cấm** new_page typed CRUD re-open | form / list |

**Không** đổi: API prefix `api/v1/asset/csdl-records` · resource `culverts` · Kind B A–D · Kind D Slideout · filter slots · **cấm ERP.*** · IdCode `CG` · GPS/shape/load đã chốt · peer Sổ TS no-merge.

**Closed / keep (prior new_page — không reopen):** GAP-BIEU04-TYPED/ROUTE/GPS/SHAPE · ROAD/PROV · ORG P2 debt · PEER/CUC-11 · prior GAP-CSDL-XLS-01 supersede bởi GAP-BIEU04-XLS-*.

## Kind / zones (handoff Design — delta only)

| Zone / surface | Pattern | DoD this edit |
|----------------|---------|----------------|
| List A | Header | Giữ «Biểu 04 — Cống các loại» · back hub |
| List B toolbar | `catalogToolbar` | **Thêm** Xuất Excel (+ Import P1) · icon `erp-control-icon-map` · **cấm** filter |
| List B filter | `LinErpListFilterBar` | **Unchanged** · 0 action Xuất (**GAP-FILTER-BAR-08**) |
| List C/D | Grid + pagination | Unchanged typed cols |
| Form | Kind D Slideout | Unchanged typed 17 · GPS four_xy · shape · load |
| Map | none | — |

## Control hint — list filters (Zone B) — **unchanged**

| Field key | Label | controlHint | catalogKind | Notes |
|-----------|-------|-------------|-------------|-------|
| search | Tìm kiếm | `SearchTextInput` | text | mã · đường · ghi chú |
| province | Tỉnh/TP | `Dropdown` | LOOKUP_STATIC | |
| status | Tình trạng | `Dropdown` | LOOKUP_STATIC | tot/tb/kem/hong |
| roadCode | Đường | `SearchInput` | **road-route** | |
| kmPoint | Km điểm | `Number` | — | filter QS |

## Control hint — form fields — **unchanged** (cite prior · 17 cột typed)

Giữ bảng form prior `task_ea0d8d57` (GPS four_xy · shape · body/inlet/outlet · loadClass…). **Cấm** đổi controlHint form trong pack này.

## Control hint — actions (**delta**)

| Action | Surface | Notes |
|--------|---------|-------|
| export-excel | **catalogToolbar** | Label **Xuất Excel** · binary download · sheet Biểu 4 · filter QS nếu SA chốt |
| import-excel | **catalogToolbar** (P1) | Template Cục · 17 cột · **cấm** filter bar · **cấm** gộp Sổ TS |
| create / view / edit / copy / delete / history / schema-config / refresh | Toolbar (keep) | Unchanged |
| save / cancel | Form footer | Unchanged |
| peer-sots | Toolbar / row (opt) | deep-link `/so-ts-culvert-x` · **cấm** merge form/export |
| print-pdf | — | **OUT** Biểu (sổ Word) · không Wave 1 S04 |

## Open questions (PO trước Design)

| ID | Q | Options |
|----|---|---------|
| Q-XLS-SCOPE | Export = **filtered set** hay **all tenant resource**? | filtered · all_resource (**SA/PO**) |
| Q-XLS-IMPORT | Import P1 cùng task hay DEFER sau export-only? | import_now · export_only_p0 |
| Q-XLS-FILENAME | Tên file download? | `Bieu04_CongCacLoai_{yyyyMMdd}.xls(x)` · SA chốt |

## Handoff

| Role | Dùng packet |
|------|-------------|
| **PO** | § Delta T-XLS-S04 · DoD binary ≠ toast · giữ Grid AC typed · **cấm** gộp Sổ TS |
| **Design** | **Giữ** prototype typed · **chỉ** thêm nút Xuất (+Import) trên toolbar · reviewUrl cập nhật zone |
| **SA** | Path export/import · BFF binary · golden 16-sheet · **cấm** đổi typed entity trừ gap · peer no-merge |
| **TL/Dev** | `/implement-export-import-excel` · **cấm** filter-bar export · **cấm** re-CRUD typed |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-data-analy |
| skillVersion | 2026.09.05.03 |
| schemaVersion | 1 |
| workflowVersion | 2026.09.05.03 |
| rulesVersion | 2026.09.17.3 |
| contentHash | `sha256:eef182add5b68de5b3e27ec36ed9c099689831aeb77742814aa296bf286243f9` |
| headerFingerprint | `sha256:8b98f7a22739bdad37b67a7ef869d6c465edc38061f0d5853fe2e69758d4ccea` |
| generatedAt | 2026-09-17T19:56:36.427Z |
| versionGate | ok |
| taskId | task_584ba7e8 |
| packKind | list |
| changeScope | edit_page |

---
<!-- Version meta: skillId=agent-data-analy skillVersion=2026.09.05.03 schemaVersion=1 workflowVersion=2026.09.05.03 rulesVersion=2026.09.17.3 versionGate=ok contentHash=sha256:eef182add5b68de5b3e27ec36ed9c099689831aeb77742814aa296bf286243f9 changeScope=edit_page taskId=task_584ba7e8 -->
