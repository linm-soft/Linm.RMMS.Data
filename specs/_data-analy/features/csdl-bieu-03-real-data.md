# Real-data bind — csdl-bieu-03 (edit_page · T-XLS-S03 export/import)

| | |
|---|---|
| feature | `csdl-bieu-03` |
| packKind | `list` |
| changeScope | `edit_page` |
| status | `done` |
| taskId | `task_9054a943` |
| priorTask | `task_df175ffd` (typed CRUD **done** · **cấm** reopen new_page) |
| resource | `road-tunnels` |
| prefix | **live** `api/v1/asset/csdl-records` · BFF `web-bff/api/v1/asset/csdl-records` |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · **cấm ERP.*** · **cấm** `api/v1/infra/*` |
| uiRepo | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| mfeStdUrl | `http://localhost:9301/so-ts/csdl-so-sach` · alias `/csdl-bieu-03` · hub `?resource=road-tunnels` |
| map | `none` |
| contentHash | `sha256:57fc9dab0df1bc69fa444e65b543c8bc14b7ef9b2f12d92f72b12fa40e5cc1d9` |
| headerFingerprint | `sha256:3574a45ea4cc36f0f01b6cff9e5a7577f52fdb7a7b79508685c1038b473564d8` |
| sourceTables | typed `Schema_CsdlBieu3` / `rmms_csdl_bieu3` · **không** bảng report store P1 |
| catalogKind UI schema | `road-tunnels` |
| IdCode prefix | `TN` |
| epicCite | `docs/context/features/csdl-export-print.md` · Wave 1 `T-XLS-S03` |
| golden | Cục `1. Biểu mẫu CSDL.xls` sheet Biểu 3 · **cấm** hồ sơ 12+8 |
| devSlash | `/implement-export-import-excel` · BFF binary |

## § Delta Current vs New (`edit_page` · `task_9054a943`)

| ID | Current live | New (this analy) |
|----|--------------|------------------|
| Form / list | Typed 42 cột Slideout + grid **shipped** · GPS/TUBE chốt | **Unchanged** |
| Toolbar | Refresh · Add · History · Schema · View/Edit/Delete — **không** Xuất | **Xuất Excel** (+ Import P1) trên `catalogToolbar` |
| Filter | `LinErpListFilterBar` field+🔍 | **Unchanged** · **cấm** action Xuất (**GAP-FILTER-BAR-08**) |
| Export API | Missing / stub · ExcelService Biểu 1/2 only | `GET …/csdl-records/export?resource=road-tunnels` → binary (epic · SA) |
| Import API | Missing / stub for Biểu 3 | `POST …/csdl-records/import?resource=road-tunnels` (P1) |
| Golden | prior OUT XLS | Cục 16-sheet · sheet Biểu 3 · checksum **42** cột · 1 row/ống |
| Done gate | Typed STATUS done | **≠** export xong · cần file mở được cạnh mẫu |

## §A — Nguồn

| sourceKind | sourceCite | empty | error |
|------------|------------|-------|-------|
| `context` | `docs/context/features/csdl-bieu-03.md` | — | version gate |
| `context` | `docs/context/features/csdl-export-print.md` § Wave 1 · API | — | golden / toolbar rules |
| `analy` | `specs/_data-analy/csdl-cuc-2026/ANALYSIS-AND-TASKS.md` Biểu 3 | — | 42 cột |
| `api` · list/CRUD | `GET/POST/PUT/DELETE …/csdl-records?resource=road-tunnels` | empty grid VN | toast 4xx |
| `api` · **export** | `GET …/csdl-records/export?resource=road-tunnels` (epic · SA chốt) | file 0 row OK | toast · **cấm** fake blob |
| `api` · **import** | `POST …/csdl-records/import?resource=road-tunnels` | — | validation · tube/GPS row count |
| `entity` | typed Biểu 3 / `Schema_CsdlBieu3` | — | CompanyCode tenant |
| `mfe` | `CsdlBieu03Page` · `fromCatalogToolbar` | — | wire export action |
| `excel` | `1. Biểu mẫu CSDL.xls` sheet Biểu 3 | — | golden · not runtime SSOT |
| `excel` | Hồ sơ `4.1. In_Mẫu…xlsx` 12 biểu | — | **STALE** · so sánh only |

## §B — Bind field (HARD)

### B1 — CRUD fields (**unchanged** — keep prior bind)

Reuse prior §B (`task_df175ffd`): `resource` · filters · typed 42 form fields · GPS ×3 · tubeCount/tubeIndex · soft-delete. **Cấm** đổi write paths typed trong pack này.

**Tube rule (keep):** 2 ống → 2 bản ghi · export/import **1 Excel row = 1 ống** (kèm GPS bộ).

### B2 — Export / import (**delta**)

| uiField / action | Label | controlHint | catalogKind | GET / POST | write field | sameMfe |
|------------------|-------|-------------|-------------|------------|-------------|---------|
| exportExcel | Xuất Excel | ToolbarButton | — | `GET …/export?resource=road-tunnels` (+ filter QS nếu Q-XLS-SCOPE=filtered) | — (download) | **gap** (thiếu nút) |
| importExcel | Nhập Excel | ToolbarButton + file | — | `POST …/import?resource=road-tunnels` multipart | upsert typed rows | **gap** P1 |
| exportFileName | — | derived | — | Content-Disposition | — | SA |
| tubeRowCount | Hàng ống | toast/summary | — | import response | — | yes (rule) |

**Prefix map (keep + delta):**

| Operation | Path |
|-----------|------|
| List / Detail / CRUD | `/web-bff/api/v1/asset/csdl-records` (+ `/{id}`) — **keep** |
| **Export** | `GET /web-bff/api/v1/asset/csdl-records/export?resource=road-tunnels` |
| **Import** | `POST /web-bff/api/v1/asset/csdl-records/import?resource=road-tunnels` |
| API mirror | `api/v1/asset/csdl-records[/export|/import]` · **cấm** invent `/infra/` |

## §C — Catalog / lookup

Unchanged prior LOOKUP_STATIC + `road-route` + `org-unit` P2. Export **không** thêm catalogKind.

## §D — Map / vẽ

`none`

## §E — Empty / error / permission / export

| Case | UX |
|------|-----|
| Empty list export | File vẫn tải · 0 data row · header merge đúng mẫu · toast info OK |
| Export fail | toast · **cấm** silent · **cấm** CSV generic lưới |
| Import 2 ống | 2 rows Excel · **cấm** gộp 1 hàng 2 bộ GPS |
| Permission | Auth debt · **cấm** invent path |
| Toast stub only | **FAIL** DoD · **GAP-BIEU03-XLS-02** |

## §F — Cấm

- Re-run typed CRUD `new_page` / đổi form 42 cột không gap  
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
| contentHash | `sha256:57fc9dab0df1bc69fa444e65b543c8bc14b7ef9b2f12d92f72b12fa40e5cc1d9` |
| headerFingerprint | `sha256:3574a45ea4cc36f0f01b6cff9e5a7577f52fdb7a7b79508685c1038b473564d8` |
| generatedAt | 2026-09-17T19:21:32.299Z |
| versionGate | ok |
| taskId | task_9054a943 |
| packKind | list |
| changeScope | edit_page |

---
<!-- Version meta: skillId=agent-data-analy skillVersion=2026.09.05.03 schemaVersion=2 workflowVersion=2026.09.05.03 rulesVersion=2026.09.17.3 versionGate=ok contentHash=sha256:57fc9dab0df1bc69fa444e65b543c8bc14b7ef9b2f12d92f72b12fa40e5cc1d9 changeScope=edit_page taskId=task_9054a943 -->
