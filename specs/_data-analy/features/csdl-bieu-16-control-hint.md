# Data-analy — controlHint — csdl-bieu-16 (Kind B list + Kind D Slideout · Biểu 16)

| Field | Value |
|-------|-------|
| feature | `csdl-bieu-16` |
| packKind | `list` |
| mode | `feature_context` (edit_page · T-XLS-S16 · keep typed CRUD) |
| changeScope | `edit_page` |
| status | `done` |
| skillId | `agent-data-analy` |
| skillVersion | `2026.09.05.03` |
| schemaVersion | `1` |
| workflowVersion | `2026.09.05.03` |
| rulesVersion | `2026.09.17.3` |
| versionGate | `ok` (CTX hash change + export delta Wave 1 · autoApprove queue · **không** AskQuestion) |
| contentHash | `sha256:c71543b66c4f1d28f5dbae1743c1042e0bb9f12ab9c0efc55d9668af2a38e072` |
| headerFingerprint | `sha256:ec787bf2008ae89f1b6c085fe238f1b0d50b048f5c672b90b68d9ea102cf8fcc` |
| analyzedAt | `2026-09-18T02:50:00.000Z` |
| cluster | `csdl-cuc-2026` · Excel sheet Biểu 16 · **39 cột** · Nút giao · child `branches[]` · Wave 1 `T-XLS-S16` |
| taskId | `task_e344020d` |
| priorTask | `task_70fe1d76` → pipeline review `task_628c95a5` (typed CRUD **done** — **cấm** re-run new_page typed) |
| autoApprove | `ON` (queue) |
| realData | `specs/_data-analy/features/csdl-bieu-16-real-data.md` |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · domain **Asset** · `api/v1/asset/csdl-records` · **cấm ERP.*** · **cấm** invent `api/v1/infra/*` |
| uiRepo | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| mfeStdUrl | `http://localhost:9301/so-ts/csdl-so-sach` · alias `/csdl-bieu-16` · hub `?resource=interchanges` |
| resource | `interchanges` |
| formNo | `16` · title VN **Nút giao** |
| peerSoTs | `so-ts-interchange` · **≠** merge form so-ts-* · **GAP-CSDL-CUC-11** |
| runMode | `edit_page` · export/import Excel đúng mẫu Cục · **cấm** new_page typed CRUD |
| epicCite | `docs/context/features/csdl-export-print.md` Wave 1 · `T-XLS-S16` |
| devSlashExport | `/implement-export-import-excel` · BFF binary |

> Data-analy **đề xuất** controlHint. Design **chốt** control-map (giữ prototype typed · **chỉ** delta toolbar export). SA **chốt** binary export path + flatten `branches[]` → Excel.  
> Typography: label **13** · input D14 / M16 (**GAP-TYP-01**).  
> **Giữ** PO/Design/SA artifacts typed — analy **chỉ** § Delta export.  
> Toast stub / typed STATUS done **≠** export xong.  
> Golden = Cục **16-sheet** xls · **cấm** hồ sơ 12+8.

## Sources

| Source | Path | sha256 / note |
|--------|------|---------------|
| Context | `docs/context/features/csdl-bieu-16.md` | `c71543b66c4f1d28f5dbae1743c1042e0bb9f12ab9c0efc55d9668af2a38e072` |
| Export epic | `docs/context/features/csdl-export-print.md` | Wave 1 · `T-XLS-S16` · API export/import |
| Parent hub | `docs/context/features/csdl-so-sach.md` | cite hub Kind G · resource `interchanges` |
| Cluster analy | `specs/_data-analy/csdl-cuc-2026/ANALYSIS-AND-TASKS.md` | Biểu 16 · **39 cột** · nhánh 1–n |
| DB API SSOT | `docs/context/11-CSDL-SO-SACH-DATABASE-API.md` | Schema_CsdlBieu16 / Interchange + Branch |
| Demo | N/A (packet) · prior hub demo zone-only | **cấm** demo SSOT |
| DOMAIN-MAP | `Linm.RMMS.WebService/docs/DOMAIN-MAP.md` | Asset · `csdl-records` · slug `csdl-bieu-16` |
| Live MFE | `CsdlBieu16Page` · `fromCatalogToolbar` | typed list+slideout+branches **shipped** · **thiếu** Xuất Excel |
| Live API | `CsdlCatalogRecordsController` | CRUD live · export/import **gap** |
| Golden Excel | `data-import/…/1. Biểu mẫu CSDL.xls` sheet Biểu 16 | Cục **16-sheet** · **cấm** hồ sơ 12+8 làm golden |
| Peer Sổ TS | interchange · `road-assets?type=INTERCHANGE` | cite only · **cấm** merge vào export |

Normalized header (unchanged · 39 — Excel flatten + shared trail; runtime child = `branches[]`):

`code|name|roadCode|roadName|province|kmMain|kmAux|interchangeType|trafficOrg|mainBedWidth|mainSurfaceWidth|mainMedianWidth|mainLaneCount|branchName|branchKmFrom|branchKmTo|branchSide|branchDirection|branchLength|branchBedWidth|branchSurfaceWidth|branchMedianWidth|branchRadius|atgtSign|atgtMarking|atgtIsland|atgtLight|status|yearBuilt|manageUnit|notes|lat|lng|updatedBy|updatedAt|isActive|branchCount|formNo|side`

Form runtime: header scalar + **child grid** `branches[]`. Export Excel = **flatten** 1 dòng / nhánh (repeat header) — **không** invent sheet riêng nhánh.

## § Delta Current vs New (`edit_page` · `task_e344020d` · **T-XLS-S16**)

| ID | Current (live / prior analy) | New (this analy) | Surface |
|----|------------------------------|------------------|---------|
| GAP-BIEU16-XLS-01 | Typed CRUD + 39 cột + `branches[]` **PASS** · toolbar **không** Xuất/Import binary | **Xuất Excel** (+ Import P1) đúng sheet Biểu 16 · merge-header · 39 cột | `catalogToolbar` / `report-toolbar-actions` |
| GAP-BIEU16-XLS-02 | Toast / stub action coi «có nút» | File binary qua BFF · `/implement-export-import-excel` · **cấm** toast-only done | FE + BFF + BE |
| GAP-BIEU16-XLS-03 | — / hồ sơ 12+8 STALE | Golden = Cục **16-sheet** xls sheet Biểu 16 · **cấm** 12+8 golden | SA/Dev checksum |
| GAP-BIEU16-XLS-04 | Filter bar chỉ field + 🔍 | **Cấm** đặt Xuất/Import trên `LinErpListFilterBar` (**GAP-FILTER-BAR-08**) | Zone B filter vs toolbar |
| GAP-BIEU16-XLS-05 | API CRUD only | `GET …/csdl-records/export?resource=interchanges` · `POST …/import?resource=` (cite epic · SA chốt) | BE Asset |
| GAP-BIEU16-XLS-06 | Runtime `branches[]` 1–n · Excel flatten `branch*` | Export **1 sheet** · **1 row / nhánh** (repeat header) · **cấm** 1 row flatten-only mất nhánh · **cấm** invent sheet Branch riêng | export engine |
| GAP-BIEU16-XLS-07 | Peer so-ts-interchange tồn tại | Export qty/m biểu Cục · **cấm** merge/dump Sổ TS `road-assets` vào file | export bind |
| — | Typed form/list/route/hub/branches | **Không đổi** · **cấm** new_page typed CRUD re-open | form / list / hub |

**Không** đổi: API prefix `api/v1/asset/csdl-records` · resource `interchanges` · Kind B A–D · Kind D Slideout · filter slots · **cấm ERP.*** · IdCode `IX` · formNo `16` · section định danh + đặc trưng nút + child nhánh + ATGT · peer cite-only.

**Closed / keep (prior new_page — không reopen):** GAP-BIEU16-HUB/TYPED/ROUTE/BRANCH/TYPE/MAIN/ATGT/KM/DB/DMAP · ROAD/PROV/ORG P2 debt · GAP-CSDL-CUC-09/11 · prior GAP-CSDL-XLS-01 stub → **supersede** bằng GAP-BIEU16-XLS-*.

## Kind / zones (handoff Design — delta only)

| Zone / surface | Pattern | DoD this edit |
|----------------|---------|----------------|
| List A | Header | Giữ «Biểu 16 — Nút giao» · back hub |
| List B toolbar | `catalogToolbar` | **Thêm** Xuất Excel (+ Import P1) · icon `erp-control-icon-map` · **cấm** filter |
| List B filter | `LinErpListFilterBar` | **Unchanged** · 0 action Xuất (**GAP-FILTER-BAR-08**) |
| List C/D | Grid + pagination | Unchanged · typed 39 |
| Form | Kind D Slideout | Unchanged · header + `branches[]` + ATGT |
| Map | none | — |

## Control hint — list filters (Zone B) — **unchanged**

| Field key | Label | controlHint | catalogKind | Notes |
|-----------|-------|-------------|-------------|-------|
| search | Tìm kiếm | `SearchTextInput` | text | mã · tên nút · đường · ghi chú |
| province | Tỉnh/TP | `Dropdown` | LOOKUP_STATIC | |
| interchangeType | Loại nút | `Dropdown` | LOOKUP_STATIC | |
| status | Tình trạng | `Dropdown` | LOOKUP_STATIC | |
| roadCode | Đường | `SearchInput` | **road-route** | |
| kmMain | Km chính | `Number` | — | điểm nút |

## Control hint — form fields — **unchanged** (cite prior · 39 typed + branches)

Giữ bảng form prior `task_70fe1d76` (header + child `branches[]` + ATGT). **Cấm** đổi controlHint form trong pack này.

## Control hint — actions (**delta**)

| Action | Surface | Notes |
|--------|---------|-------|
| export-excel | **catalogToolbar** | Label **Xuất Excel** · binary download · sheet Biểu 16 · flatten nhánh · filter QS áp dụng nếu SA chốt |
| import-excel | **catalogToolbar** (P1) | Template Cục · merge-header 39 · map vào `branches[]` · **cấm** filter bar |
| create / view / edit / copy / delete / history / schema-config / refresh | Toolbar (keep) | Unchanged |
| branch add/remove | Child grid | Unchanged · min_1 |
| save / cancel | Form footer | Unchanged |
| print-pdf | — | **OUT** Biểu (sổ Word) · không Wave 1 S16 |

## Open questions (PO trước Design)

| ID | Q | Options |
|----|---|---------|
| Q-XLS-SCOPE | Export = **filtered set** (road/province/type/status/…) hay **all tenant resource**? | filtered · all_resource (**SA/PO**) |
| Q-XLS-IMPORT | Import P1 cùng task hay DEFER sau export-only? | import_now · export_only_p0 |
| Q-XLS-FILENAME | Tên file `Bieu16_NutGiao_yyyyMMdd.xlsx` vs Content-Disposition BE? | fe_name · be_header |
| Q-XLS-BRANCH | 0 nhánh → 1 row header trống branch* hay skip row? | header_blank · skip (**SA**) |
| Q-XLS-SHEET | Sheet name đúng «Biểu 16» Cục vs index? | name_cuc · index_16 |

## Handoff

| Role | Dùng packet |
|------|-------------|
| **PO** | § Delta T-XLS-S16 + Q-XLS-* → `requirement.md` (giữ AC typed prior) |
| **Design** | Giữ prototype · **chỉ** thêm nút Xuất trên catalogToolbar · reviewUrl |
| **SA** | BFF binary · golden checksum 39 · flatten `branches[]` · **cấm** đổi typed entity |
| **TL/Dev** | Wire export · `/implement-export-import-excel` · **cấm** toast stub · **cấm** filter-bar · **cấm** reopen typed CRUD |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-data-analy |
| skillVersion | 2026.09.05.03 |
| schemaVersion | 1 |
| workflowVersion | 2026.09.05.03 |
| rulesVersion | 2026.09.17.3 |
| contentHash | `sha256:c71543b66c4f1d28f5dbae1743c1042e0bb9f12ab9c0efc55d9668af2a38e072` |
| headerFingerprint | `sha256:ec787bf2008ae89f1b6c085fe238f1b0d50b048f5c672b90b68d9ea102cf8fcc` |
| generatedAt | 2026-09-18T02:50:00.000Z |
| versionGate | ok |
| taskId | task_e344020d |
| packKind | list |
| changeScope | edit_page |

---
<!-- Version meta: skillId=agent-data-analy skillVersion=2026.09.05.03 schemaVersion=1 workflowVersion=2026.09.05.03 rulesVersion=2026.09.17.3 versionGate=ok contentHash=sha256:c71543b66c4f1d28f5dbae1743c1042e0bb9f12ab9c0efc55d9668af2a38e072 -->
