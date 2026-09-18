# Real-data bind — csdl-bieu-02 (edit_page · T-XLS-S02 export/import)

| | |
|---|---|
| feature | `csdl-bieu-02` |
| packKind | `list` |
| changeScope | `edit_page` |
| status | `done` |
| taskId | `task_55ac6074` |
| priorTask | `task_dd8553f8` (typed CRUD **done** · **cấm** reopen new_page) |
| resource | `bridges` |
| prefix | **live** `api/v1/asset/csdl-records` · BFF `web-bff/api/v1/asset/csdl-records` |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · **cấm ERP.*** · **cấm** `api/v1/infra/*` |
| uiRepo | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| mfeStdUrl | `http://localhost:9301/so-ts/csdl-so-sach` · alias `/csdl-bieu-02` · hub `?resource=bridges` |
| map | `none` · GPS fields only |
| contentHash | `sha256:43c517bec9635b8c3ac292e54e566cf38f3ba97c86a8ce56e5b4c587427dcf40` |
| headerFingerprint | `sha256:34e1fcb051f6010fbe70ebdffab71df3d6f441a373d3be0249dd601e596d5591` |
| sourceTables | typed `rmms_csdl_bieu2` · Schema_CsdlBieu2 · **không** bảng report store P1 |
| catalogKind UI schema | `bridges` |
| IdCode prefix | `BR` |
| epicCite | `docs/context/features/csdl-export-print.md` · Wave 1 `T-XLS-S02` |
| golden | Cục `1. Biểu mẫu CSDL.xls` sheet Biểu 2 · **cấm** hồ sơ 12+8 |
| devSlash | `/implement-export-import-excel` · BFF binary |

## § Delta Current vs New (`edit_page` · `task_55ac6074`)

| ID | Current live | New (this analy) |
|----|--------------|------------------|
| Form / list | Typed 48 cột Slideout + grid **shipped** · GPS 3 điểm | **Unchanged** |
| Toolbar | Refresh · Add · History · Schema · View/Edit/Delete — **không** Xuất | **Xuất Excel** (+ Import P1) trên `catalogToolbar` |
| Filter | `LinErpListFilterBar` field+🔍 | **Unchanged** · **cấm** action Xuất (**GAP-FILTER-BAR-08**) |
| Export API | Missing / stub | `GET …/csdl-records/export?resource=bridges` → binary (epic cite · SA) |
| Import API | Missing / stub | `POST …/csdl-records/import?resource=bridges` (P1) |
| Golden | — | Cục 16-sheet · sheet Biểu 2 · checksum 48 cột · legacy 64–69 map/drop |
| Done gate | Typed STATUS done | **≠** export xong · cần file mở được cạnh mẫu |

## §A — Nguồn

| sourceKind | sourceCite | empty | error |
|------------|------------|-------|-------|
| `context` | `docs/context/features/csdl-bieu-02.md` | — | version gate |
| `context` | `docs/context/features/csdl-export-print.md` § Wave 1 · API | — | golden / toolbar rules |
| `analy` | `specs/_data-analy/csdl-cuc-2026/ANALYSIS-AND-TASKS.md` Biểu 2 | — | 48 cột · GPS |
| `api` · list/CRUD | `GET/POST/PUT/DELETE …/csdl-records?resource=bridges` | empty grid VN | toast 4xx |
| `api` · **export** | `GET …/csdl-records/export?resource=bridges` (epic · SA chốt) | file 0 row OK | toast · **cấm** fake blob |
| `api` · **import** | `POST …/csdl-records/import?resource=bridges` | — | validation · legacy map |
| `entity` | typed Biểu 2 / `rmms_csdl_bieu2` | — | CompanyCode tenant |
| `mfe` | Biểu 02 page / hub bridges · `fromCatalogToolbar` | — | wire export action |
| `excel` | `1. Biểu mẫu CSDL.xls` sheet Biểu 2 | — | golden · not runtime SSOT |
| `excel` | Hồ sơ `4.1. In_Mẫu…xlsx` 12 biểu | — | **STALE** · so sánh only |
| `peer` | passport `/api/v1/bridges/{id}` | — | deep-link only · **cấm** CRUD Biểu 2 |

## §B — Bind field (HARD)

### B1 — CRUD fields (**unchanged** — keep prior bind)

Reuse prior §B (`task_dd8553f8`): `resource` · filters · typed 48 form fields (GPS ×3 · dầm · phần dưới · gối/lan can · legacy) · soft-delete. **Cấm** đổi write paths typed trong pack này.

### B2 — Export / import (**delta**)

| uiField / action | Label | controlHint | catalogKind | GET / POST | write field | sameMfe |
|------------------|-------|-------------|-------------|------------|-------------|---------|
| exportExcel | Xuất Excel | ToolbarButton | — | `GET …/export?resource=bridges` (+ filter QS nếu Q-XLS-SCOPE=filtered) | — (download) | **gap** (thiếu nút) |
| importExcel | Nhập Excel | ToolbarButton + file | — | `POST …/import?resource=bridges` multipart | upsert typed rows | **gap** P1 |
| exportFileName | — | derived | — | Content-Disposition | — | SA |
| legacyMapCount | Cột legacy 64–69 | toast/summary | — | import response | map/drop | yes (prior LEGACY) |

**Prefix map (keep + delta):**

| Operation | Path |
|-----------|------|
| List / Detail / CRUD | `/web-bff/api/v1/asset/csdl-records` (+ `/{id}`) — **keep** |
| **Export** | `GET /web-bff/api/v1/asset/csdl-records/export?resource=bridges` |
| **Import** | `POST /web-bff/api/v1/asset/csdl-records/import?resource=bridges` |
| API mirror | `api/v1/asset/csdl-records[/export|/import]` · **cấm** invent `/infra/` |
| Passport peer | `/api/v1/bridges/{id}` — **cấm** dùng làm export/CRUD Biểu 2 |

## §C — Catalog / lookup

Unchanged prior LOOKUP_STATIC + `road-route` + `org-unit` P2. Export **không** thêm catalogKind.

## §D — Map / vẽ

`none` · GPS fields only · **cấm** invent map canvas trên list.

## §E — Empty / error / permission / export

| Case | UX |
|------|-----|
| Empty list export | File vẫn tải · 0 data row · header merge đúng mẫu · toast info OK |
| Export fail | toast · **cấm** silent · **cấm** CSV generic lưới |
| Import legacy | map/drop 64–69 · count · **cấm** silent fail |
| Permission | Auth debt · **cấm** invent path |
| Toast stub only | **FAIL** DoD · **GAP-BIEU02-XLS-02** |

## §F — Cấm

- Re-run typed CRUD `new_page` / đổi form 48 cột không gap  
- Toast stub = done · STATUS typed done = export xong  
- Xuất/Import trên filter bar (**GAP-FILTER-BAR-08**)  
- Golden = hồ sơ 12+8  
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
| contentHash | `sha256:43c517bec9635b8c3ac292e54e566cf38f3ba97c86a8ce56e5b4c587427dcf40` |
| headerFingerprint | `sha256:34e1fcb051f6010fbe70ebdffab71df3d6f441a373d3be0249dd601e596d5591` |
| generatedAt | 2026-09-17T18:43:48.000Z |
| versionGate | ok |
| taskId | task_55ac6074 |
| packKind | list |
| changeScope | edit_page |

---
<!-- Version meta: skillId=agent-data-analy skillVersion=2026.09.05.03 schemaVersion=2 workflowVersion=2026.09.05.03 rulesVersion=2026.09.17.3 versionGate=ok contentHash=sha256:43c517bec9635b8c3ac292e54e566cf38f3ba97c86a8ce56e5b4c587427dcf40 changeScope=edit_page taskId=task_55ac6074 -->
