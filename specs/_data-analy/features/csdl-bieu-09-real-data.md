# Real-data bind — csdl-bieu-09 (edit_page · T-XLS-S09 export/import)

| | |
|---|---|
| feature | `csdl-bieu-09` |
| packKind | `list` |
| changeScope | `edit_page` |
| status | `done` |
| taskId | `task_f4041b8e` |
| priorTask | `task_b7a89508` → review `task_a5fbb485` (typed CRUD **done** · **cấm** reopen new_page) |
| resource | `boundary-markers` |
| prefix | **live** `api/v1/asset/csdl-records` · BFF `web-bff/api/v1/asset/csdl-records` |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · **cấm ERP.*** · **cấm** `api/v1/infra/*` |
| uiRepo | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| mfeStdUrl | `http://localhost:9301/so-ts/csdl-so-sach` · alias `/csdl-bieu-09` · hub `?resource=boundary-markers` |
| map | `none` |
| contentHash | `sha256:58c012cef8ad07ae7a6d5e8ab513668c51dc0755d1f209783beb41ba1c4ccc01` |
| headerFingerprint | `sha256:765521dee151f2ded36c582ca1a0b7ec048237b88cfc5b27481f09e6787e9a77` |
| sourceTables | typed `Schema_CsdlBieu9` / `BoundaryMarker` · **không** bảng report store P1 |
| catalogKind UI schema | `boundary-markers` |
| IdCode prefix | `MK` |
| epicCite | `docs/context/features/csdl-export-print.md` · Wave 1 `T-XLS-S09` |
| golden | Cục `1. Biểu mẫu CSDL.xls` sheet Biểu 9 · **cấm** hồ sơ 12+8 |
| devSlash | `/implement-export-import-excel` · BFF binary |

## § Delta Current vs New (`edit_page` · `task_f4041b8e`)

| ID | Current live | New (this analy) |
|----|--------------|------------------|
| Form / list | Typed 17 · 2 khối LG/GPMB · Slideout + grid **shipped** | **Unchanged** |
| Toolbar | Refresh · Add · History · Schema · View/Edit/Delete — **không** Xuất | **Xuất Excel** (+ Import P1) trên `catalogToolbar` |
| Filter | `LinErpListFilterBar` field+🔍 (+ `markerKind`) | **Unchanged** · **cấm** action Xuất (**GAP-FILTER-BAR-08**) |
| Export API | Missing / stub | `GET …/csdl-records/export?resource=boundary-markers` → binary (epic cite · SA) |
| Import API | Missing / stub | `POST …/csdl-records/import?resource=boundary-markers` (P1) |
| Golden | — | Cục 16-sheet · sheet Biểu 9 · checksum 17 cột · 1 sheet cả 2 kind |
| Done gate | Typed STATUS done | **≠** export xong · cần file mở được cạnh mẫu |

## §A — Nguồn

| sourceKind | sourceCite | empty | error |
|------------|------------|-------|-------|
| `context` | `docs/context/features/csdl-bieu-09.md` | — | version gate |
| `context` | `docs/context/features/csdl-export-print.md` § Wave 1 · API | — | golden / toolbar rules |
| `analy` | `specs/_data-analy/csdl-cuc-2026/ANALYSIS-AND-TASKS.md` Biểu 9 | — | 17 cột · 2 khối |
| `api` · list/CRUD | `GET/POST/PUT/DELETE …/csdl-records?resource=boundary-markers` | empty grid VN | toast 4xx |
| `api` · **export** | `GET …/csdl-records/export?resource=boundary-markers` (epic · SA chốt) | file 0 row OK | toast · **cấm** fake blob |
| `api` · **import** | `POST …/csdl-records/import?resource=boundary-markers` | — | validation · markerKind |
| `entity` | `Schema_CsdlBieu9` / BoundaryMarker | — | CompanyCode tenant |
| `mfe` | `CsdlBieu09Page` · `fromCatalogToolbar` | — | wire export action |
| `excel` | `1. Biểu mẫu CSDL.xls` sheet Biểu 9 | — | golden · not runtime SSOT |
| `excel` | Hồ sơ `4.1. In_Mẫu…xlsx` 12 biểu | — | **STALE** · so sánh only |
| `peer` | — | — | **≠** road-assets / so-ts · **GAP-CSDL-CUC-11** |

## §B — Bind field (HARD)

### B1 — CRUD fields (**unchanged** — keep prior bind)

Reuse prior §B (`task_b7a89508`): `resource` · filters · typed 17 · soft-delete. **Cấm** đổi write paths typed trong pack này.

### B2 — Export / import (**delta**)

| uiField / action | Label | controlHint | catalogKind | GET / POST | write field | sameMfe |
|------------------|-------|-------------|-------------|------------|-------------|---------|
| exportExcel | Xuất Excel | ToolbarButton | — | `GET …/export?resource=boundary-markers` (+ filter QS nếu Q-XLS-SCOPE=filtered) | — (download) | **gap** (thiếu nút) |
| importExcel | Nhập Excel | ToolbarButton + file | — | `POST …/import?resource=boundary-markers` multipart | upsert typed | **gap** P1 |
| exportFileName | — | derived | — | Content-Disposition | — | SA |
| kindScope | markerKind | derived | — | QS / row map | same 17 cols | Q-XLS-KIND |

**Prefix map (keep + delta):**

| Operation | Path |
|-----------|------|
| List / Detail / CRUD | `/web-bff/api/v1/asset/csdl-records` (+ `/{id}`) — **keep** |
| **Export** | `GET /web-bff/api/v1/asset/csdl-records/export?resource=boundary-markers` |
| **Import** | `POST /web-bff/api/v1/asset/csdl-records/import?resource=boundary-markers` |
| API mirror | `api/v1/asset/csdl-records[/export|/import]` · **cấm** invent `/infra/` |

## §C — Catalog / lookup

Unchanged prior LOOKUP_STATIC (province/status/side/markerKind/markerStructure) + `road-route` + `org-unit` P2. Export **không** thêm catalogKind.

## §D — Map / vẽ

`none`

## §E — Empty / error / permission / export

| Case | UX |
|------|-----|
| Empty list export | File vẫn tải · 0 data row · header merge đúng mẫu · toast info OK |
| Export fail | toast · **cấm** silent · **cấm** CSV generic lưới |
| Import kind mismatch | toast · **cấm** ép 2 sheet invent |
| Permission | Auth debt · **cấm** invent path |
| Toast stub only | **FAIL** DoD · **GAP-BIEU09-XLS-02** |

## §F — Cấm

- Re-run typed CRUD `new_page` / đổi form 17/2 không gap  
- Toast stub = done · STATUS typed done = export xong  
- Xuất/Import trên filter bar (**GAP-FILTER-BAR-08**)  
- Golden = hồ sơ 12+8  
- Invent 2 sheet theo `markerKind`  
- Demo/localStorage SSOT · ERP.* · invent `infra`  
- yarn build / e2e ở role data_analy  

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-data-analy |
| skillVersion | 2026.09.05.03 |
| schemaVersion | 2 |
| workflowVersion | 2026.09.05.03 |
| rulesVersion | 2026.09.17.3 |
| contentHash | `sha256:58c012cef8ad07ae7a6d5e8ab513668c51dc0755d1f209783beb41ba1c4ccc01` |
| headerFingerprint | `sha256:765521dee151f2ded36c582ca1a0b7ec048237b88cfc5b27481f09e6787e9a77` |
| generatedAt | 2026-09-18T05:30:00.000Z |
| versionGate | ok |
| taskId | task_f4041b8e |
| packKind | list |
| changeScope | edit_page |

---
<!-- Version meta: skillId=agent-data-analy skillVersion=2026.09.05.03 schemaVersion=2 workflowVersion=2026.09.05.03 rulesVersion=2026.09.17.3 versionGate=ok contentHash=sha256:58c012cef8ad07ae7a6d5e8ab513668c51dc0755d1f209783beb41ba1c4ccc01 changeScope=edit_page taskId=task_f4041b8e -->
