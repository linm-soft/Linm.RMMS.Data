# Data-analy — controlHint — csdl-bieu-05 (Kind B list + Kind D Slideout · Biểu 05)

| Field | Value |
|-------|-------|
| feature | `csdl-bieu-05` |
| packKind | `list` |
| mode | `feature_context` (edit_page · T-XLS-S05 · keep typed CRUD) |
| changeScope | `edit_page` |
| status | `done` |
| skillId | `agent-data-analy` |
| skillVersion | `2026.09.05.03` |
| schemaVersion | `1` |
| workflowVersion | `2026.09.05.03` |
| rulesVersion | `2026.09.17.3` |
| versionGate | `ok` (export epic delta · CTX+hash pair · autoApprove queue · **không** AskQuestion) |
| contentHash | `sha256:9e3e8cf8e90fb3a3e8252d1725b78ea2494b171d3b7507d0a57b13c7052da728` |
| headerFingerprint | `sha256:008898723c0a5b94fae7de8810903b1dcc39ccfd0dfa5d4a36dd398eb088ac2f` |
| analyzedAt | `2026-09-17T20:36:21.087Z` |
| cluster | `csdl-cuc-2026` · Excel sheet Biểu 5 · **18 cột** · Wave 1 `T-XLS-S05` |
| taskId | `task_a1caeb3f` |
| priorTask | `task_fdcb7c28` (typed CRUD pipeline **done** — **cấm** re-run new_page typed) |
| autoApprove | `ON` (queue) |
| realData | `specs/_data-analy/features/csdl-bieu-05-real-data.md` |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · domain **Asset** · `api/v1/asset/csdl-records` · **cấm ERP.*** · **cấm** invent `api/v1/infra/*` |
| uiRepo | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| mfeStdUrl | `http://localhost:9301/so-ts/csdl-so-sach` · alias `/csdl-bieu-05` · hub `?resource=ditches` |
| resource | `ditches` |
| formNo | `05` · title VN **Rãnh các loại** |
| peerSoTs | `so-ts-ditch` (DITCH) — deep-link OK · **cấm** merge 1 form / 1 sheet hai chuẩn · **≠** Sổ TS |
| IdCode prefix | `RN` |
| runMode | `edit_page` · export/import Excel đúng mẫu Cục · **cấm** new_page typed CRUD |
| epicCite | `docs/context/features/csdl-export-print.md` Wave 1 · `T-XLS-S05` |
| devSlashExport | `/implement-export-import-excel` · BFF binary |

> Data-analy **đề xuất** controlHint. Design **chốt** control-map (giữ prototype typed · **chỉ** delta toolbar export). SA **chốt** binary export path.  
> Typography: label **13** · input D14 / M16 (**GAP-TYP-01**).  
> **Giữ** PO/Design/SA artifacts typed — analy **chỉ** § Delta export.  
> Toast stub / typed STATUS done **≠** export xong.

## Sources

| Source | Path | sha256 / note |
|--------|------|---------------|
| Context | `docs/context/features/csdl-bieu-05.md` | `9e3e8cf8e90fb3a3e8252d1725b78ea2494b171d3b7507d0a57b13c7052da728` |
| Export epic | `docs/context/features/csdl-export-print.md` | `2ca7ea0a7f1cfe4d3caf05688cc08ca2546457b09ed388671b58c3a769492c14` |
| Parent hub | `docs/context/features/csdl-so-sach.md` | cite hub Kind G · `resource=ditches` |
| Cluster analy | `specs/_data-analy/csdl-cuc-2026/ANALYSIS-AND-TASKS.md` | Biểu 5 · 18 cột · peer `so-ts-ditch` |
| Demo | N/A (packet) · prior hub demo zone-only | **cấm** demo SSOT |
| DOMAIN-MAP | `Linm.RMMS.WebService/docs/DOMAIN-MAP.md` | Asset · `csdl-records` · slug `csdl-bieu-05` |
| Live MFE | `CsdlBieu05Page` · `fromCatalogToolbar` | typed list+slideout **shipped** · **thiếu** Xuất Excel |
| Live API | `CsdlCatalogRecordsController` · `CsdlCatalogExcelService` | CRUD live · Biểu 1–4 typed XLS (peer) · **Biểu 5 export gap** |
| Golden Excel | `data-import/…/1. Biểu mẫu CSDL.xls` sheet Biểu 5 | Cục **16-sheet** · **cấm** hồ sơ 12+8 làm golden |
| Peer CTX | `docs/context/features/so-ts-ditch.md` | Sổ TS deep-link only · **cấm** gộp sheet export |

Normalized header (unchanged · 18):

`code|roadCode|roadName|province|kmFrom|kmTo|side|ditchKind|structure|shape|apertureSize|lengthM|drainageCapacity|builtYear|status|manageUnit|ownerUnit|notes`

## § Delta Current vs New (`edit_page` · `task_a1caeb3f` · **T-XLS-S05**)

| ID | Current (live / prior analy) | New (this analy) | Surface |
|----|------------------------------|------------------|---------|
| GAP-BIEU05-XLS-01 | Typed CRUD + grid 18 cột **PASS** · toolbar **không** Xuất/Import binary | **Xuất Excel** (+ Import P1) đúng sheet Biểu 5 · merge-header · **18 cột** | `catalogToolbar` / `report-toolbar-actions` |
| GAP-BIEU05-XLS-02 | Toast / stub action coi «có nút» · T-OUT-01 skip-bridge | File binary qua BFF · `/implement-export-import-excel` · **cấm** toast-only done | FE + BFF + BE |
| GAP-BIEU05-XLS-03 | — / hồ sơ 12+8 STALE · prior GAP-CSDL-XLS-01 OUT | Golden = Cục **16-sheet** xls sheet Biểu 5 · **cấm** 12+8 golden | SA/Dev checksum |
| GAP-BIEU05-XLS-04 | Filter bar chỉ field + 🔍 | **Cấm** đặt Xuất/Import trên `LinErpListFilterBar` (**GAP-FILTER-BAR-08**) | Zone B filter vs toolbar |
| GAP-BIEU05-XLS-05 | API CRUD only · ExcelService peer Biểu 1–4 | `GET …/csdl-records/export?resource=ditches` · `POST …/import?resource=` (cite epic · SA chốt) | BE Asset |
| GAP-BIEU05-XLS-PEER | Peer Sổ TS `so-ts-ditch` / DITCH | Export **chỉ** sheet Biểu 5 Cục · **cấm** gộp cột/row Sổ TS vào file | XLS engine |
| — | Typed form/list/route | **Không đổi** · **cấm** new_page typed CRUD re-open | form / list |

**Không** đổi: API prefix `api/v1/asset/csdl-records` · resource `ditches` · Kind B A–D · Kind D Slideout · filter slots · **cấm ERP.*** · IdCode `RN` · ditchKind/shape/range đã chốt · peer Sổ TS no-merge.

**Closed / keep (prior new_page — không reopen):** GAP-BIEU05-TYPED/ROUTE/KIND/SHAPE/DRAIN/RANGE · ROAD/PROV · ORG P2 debt · PEER/CUC-11 · prior GAP-CSDL-XLS-01 supersede bởi GAP-BIEU05-XLS-*.

## Kind / zones (handoff Design — delta only)

| Zone / surface | Pattern | DoD this edit |
|----------------|---------|----------------|
| List A | Header | Giữ «Biểu 05 — Rãnh các loại» · back hub |
| List B toolbar | `catalogToolbar` | **Thêm** Xuất Excel (+ Import P1) · icon `erp-control-icon-map` · **cấm** filter |
| List B filter | `LinErpListFilterBar` | **Unchanged** · 0 action Xuất (**GAP-FILTER-BAR-08**) |
| List C/D | Grid + pagination | Unchanged typed cols |
| Form | Kind D Slideout | Unchanged typed 18 · ditchKind · shape · range |
| Map | none | — |

## Control hint — list filters (Zone B) — **unchanged**

| Field key | Label | controlHint | catalogKind | Notes |
|-----------|-------|-------------|-------------|-------|
| search | Tìm kiếm | `SearchTextInput` | text | mã · đường · ghi chú |
| province | Tỉnh/TP | `Dropdown` | LOOKUP_STATIC | |
| status | Tình trạng | `Dropdown` | LOOKUP_STATIC | tot/tb/kem/hong |
| roadCode | Đường | `SearchInput` | **road-route** | |
| kmFrom | Km từ | `Number` | — | filter range |
| kmTo | Km đến | `Number` | — | filter range |
| ditchKind | Loại rãnh | `Dropdown` | LOOKUP_STATIC | hở / kín |

## Control hint — form fields — **unchanged** (cite prior · 18 cột typed)

Giữ bảng form prior `task_fdcb7c28` (road · province · kmFrom/kmTo · side · ditchKind · structure · shape · aperture · length · drainage · year · status · units · notes). **Cấm** đổi controlHint form trong pack này.

## Control hint — actions (**delta**)

| Action | Surface | Notes |
|--------|---------|-------|
| export-excel | **catalogToolbar** | Label **Xuất Excel** · binary download · sheet Biểu 5 · filter QS nếu SA chốt |
| import-excel | **catalogToolbar** (P1) | Template Cục · 18 cột · **cấm** filter bar · **cấm** gộp Sổ TS |
| create / view / edit / copy / delete / history / schema-config / refresh | Toolbar (keep) | Unchanged |
| save / cancel | Form footer | Unchanged |
| peer-sots | Toolbar / row (opt) | deep-link `/so-ts-ditch` · **cấm** merge form/export |
| print-pdf | — | **OUT** Biểu (sổ Word) · không Wave 1 S05 |

## Open questions (PO trước Design)

| ID | Q | Options |
|----|---|---------|
| Q-XLS-SCOPE | Export = **filtered set** hay **all tenant resource**? | filtered · all_resource (**SA/PO**) |
| Q-XLS-IMPORT | Import P1 cùng task hay DEFER sau export-only? | import_now · export_only_p0 |
| Q-XLS-FILENAME | Tên file download? | `Bieu05_RanhCacLoai_{yyyyMMdd}.xls(x)` · SA chốt |

## Handoff

| Role | Dùng packet |
|------|-------------|
| **PO** | § Delta T-XLS-S05 · DoD binary ≠ toast · giữ Grid AC typed · **cấm** gộp Sổ TS |
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
| contentHash | `sha256:9e3e8cf8e90fb3a3e8252d1725b78ea2494b171d3b7507d0a57b13c7052da728` |
| headerFingerprint | `sha256:008898723c0a5b94fae7de8810903b1dcc39ccfd0dfa5d4a36dd398eb088ac2f` |
| generatedAt | 2026-09-17T20:36:21.087Z |
| versionGate | ok |
| taskId | task_a1caeb3f |
| packKind | list |
| changeScope | edit_page |

---
<!-- Version meta: skillId=agent-data-analy skillVersion=2026.09.05.03 schemaVersion=1 workflowVersion=2026.09.05.03 rulesVersion=2026.09.17.3 versionGate=ok contentHash=sha256:9e3e8cf8e90fb3a3e8252d1725b78ea2494b171d3b7507d0a57b13c7052da728 changeScope=edit_page taskId=task_a1caeb3f -->
