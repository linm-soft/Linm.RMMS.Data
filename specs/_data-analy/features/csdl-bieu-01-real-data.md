# Real-data bind — csdl-bieu-01 (edit_page · T-XLS-S01 export/import)

| | |
|---|---|
| feature | `csdl-bieu-01` |
| packKind | `list` |
| changeScope | `edit_page` |
| status | `done` |
| taskId | `task_7168eb6e` |
| priorTask | `task_41122f1b` (typed CRUD **done** · **cấm** reopen new_page) |
| resource | `pavement-sections` |
| prefix | **live** `api/v1/asset/csdl-records` · BFF `web-bff/api/v1/asset/csdl-records` |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · **cấm ERP.*** · **cấm** `api/v1/infra/*` |
| uiRepo | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| mfeStdUrl | `http://localhost:9301/so-ts/csdl-so-sach` · alias `/csdl-bieu-01` · hub `?resource=pavement-sections` |
| map | `none` |
| contentHash | `sha256:b48e58e637a1dd4fc9e14298a0063d34c89eadb1ea02ba756b561b4648d4b085` |
| headerFingerprint | `sha256:6376475bbf48ca5b3e8cfd26688cd877fd1bc77d5b8d8c4c3d314cd0572f5cf2` |
| sourceTables | typed `rmms_csdl_bieu1` · shell catalog nếu còn · **không** bảng report store P1 |
| catalogKind UI schema | `pavement-sections` |
| IdCode prefix | `MD` |
| epicCite | `docs/context/features/csdl-export-print.md` · Wave 1 `T-XLS-S01` |
| golden | Cục `1. Biểu mẫu CSDL.xls` sheet Biểu 1 · **cấm** hồ sơ 12+8 |
| devSlash | `/implement-export-import-excel` · BFF binary |

## § Delta Current vs New (`edit_page` · `task_7168eb6e`)

| ID | Current live | New (this analy) |
|----|--------------|------------------|
| Form / list | Typed 38 cột Slideout + grid **shipped** | **Unchanged** |
| Toolbar | Refresh · Add · History · Schema · View/Edit/Delete — **không** Xuất | **Xuất Excel** (+ Import P1) trên `catalogToolbar` |
| Filter | `LinErpListFilterBar` field+🔍 | **Unchanged** · **cấm** action Xuất (**GAP-FILTER-BAR-08**) |
| Export API | Missing / stub | `GET …/csdl-records/export?resource=pavement-sections` → binary (epic cite · SA) |
| Import API | Missing / stub | `POST …/csdl-records/import?resource=pavement-sections` (P1) |
| Golden | — | Cục 16-sheet · sheet Biểu 1 · checksum 38 cột · skip-bridge |
| Done gate | Typed STATUS done | **≠** export xong · cần file mở được cạnh mẫu |

## §A — Nguồn

| sourceKind | sourceCite | empty | error |
|------------|------------|-------|-------|
| `context` | `docs/context/features/csdl-bieu-01.md` | — | version gate |
| `context` | `docs/context/features/csdl-export-print.md` § Wave 1 · API | — | golden / toolbar rules |
| `analy` | `specs/_data-analy/csdl-cuc-2026/ANALYSIS-AND-TASKS.md` Biểu 1 | — | 38 cột |
| `api` · list/CRUD | `GET/POST/PUT/DELETE …/csdl-records?resource=pavement-sections` | empty grid VN | toast 4xx |
| `api` · **export** | `GET …/csdl-records/export?resource=pavement-sections` (epic · SA chốt) | file 0 row OK | toast · **cấm** fake blob |
| `api` · **import** | `POST …/csdl-records/import?resource=pavement-sections` | — | validation · skip-bridge count |
| `entity` | typed Biểu 1 / `rmms_csdl_bieu1` | — | CompanyCode tenant |
| `mfe` | `CsdlBieu01Page` · `fromCatalogToolbar` | — | wire export action |
| `excel` | `1. Biểu mẫu CSDL.xls` sheet Biểu 1 | — | golden · not runtime SSOT |
| `excel` | Hồ sơ `4.1. In_Mẫu…xlsx` 12 biểu | — | **STALE** · so sánh only |

## §B — Bind field (HARD)

### B1 — CRUD fields (**unchanged** — keep prior bind)

Reuse prior §B (`task_41122f1b`): `resource` · filters · typed 38 form fields · soft-delete. **Cấm** đổi write paths typed trong pack này.

### B2 — Export / import (**delta**)

| uiField / action | Label | controlHint | catalogKind | GET / POST | write field | sameMfe |
|------------------|-------|-------------|-------------|------------|-------------|---------|
| exportExcel | Xuất Excel | ToolbarButton | — | `GET …/export?resource=pavement-sections` (+ filter QS nếu Q-XLS-SCOPE=filtered) | — (download) | **gap** (thiếu nút) |
| importExcel | Nhập Excel | ToolbarButton + file | — | `POST …/import?resource=pavement-sections` multipart | upsert typed rows | **gap** P1 |
| exportFileName | — | derived | — | Content-Disposition | — | SA |
| skipBridgeCount | Hàng bỏ qua | toast/summary | — | import response | — | yes (rule) |

**Prefix map (keep + delta):**

| Operation | Path |
|-----------|------|
| List / Detail / CRUD | `/web-bff/api/v1/asset/csdl-records` (+ `/{id}`) — **keep** |
| **Export** | `GET /web-bff/api/v1/asset/csdl-records/export?resource=pavement-sections` |
| **Import** | `POST /web-bff/api/v1/asset/csdl-records/import?resource=pavement-sections` |
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
| Import skip-bridge | count hàng bỏ · **cấm** ghi length âm |
| Permission | Auth debt · **cấm** invent path |
| Toast stub only | **FAIL** DoD · **GAP-BIEU01-XLS-02** |

## §F — Cấm

- Re-run typed CRUD `new_page` / đổi form 38 cột không gap  
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
| contentHash | `sha256:b48e58e637a1dd4fc9e14298a0063d34c89eadb1ea02ba756b561b4648d4b085` |
| headerFingerprint | `sha256:6376475bbf48ca5b3e8cfd26688cd877fd1bc77d5b8d8c4c3d314cd0572f5cf2` |
| generatedAt | 2026-09-17T17:40:33.868Z |
| versionGate | ok |
| taskId | task_7168eb6e |
| packKind | list |
| changeScope | edit_page |

---
<!-- Version meta: skillId=agent-data-analy skillVersion=2026.09.05.03 schemaVersion=2 workflowVersion=2026.09.05.03 rulesVersion=2026.09.17.3 versionGate=ok contentHash=sha256:b48e58e637a1dd4fc9e14298a0063d34c89eadb1ea02ba756b561b4648d4b085 changeScope=edit_page taskId=task_7168eb6e -->
