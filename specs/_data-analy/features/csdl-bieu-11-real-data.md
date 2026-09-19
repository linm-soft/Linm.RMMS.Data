# Real-data bind — csdl-bieu-11 (edit_page · T-XLS-S11 export/import)

| | |
|---|---|
| feature | `csdl-bieu-11` |
| packKind | `list` |
| changeScope | `edit_page` |
| status | `done` |
| taskId | `task_55dac8de` |
| priorTask | `task_ed491c32` → review `task_20e43f26` (typed CRUD **done** · **cấm** reopen new_page) |
| resource | `lighting-systems` |
| prefix | **live** `api/v1/asset/csdl-records` · BFF `web-bff/api/v1/asset/csdl-records` |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · **cấm ERP.*** · **cấm** `api/v1/infra/*` |
| uiRepo | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| mfeStdUrl | `http://localhost:9301/so-ts/csdl-so-sach` · alias `/csdl-bieu-11` · hub `?resource=lighting-systems` |
| map | `none` |
| contentHash | `sha256:7f64b8dcea4265af23b9f2e5e1dae3ab1c933b0a4404b0f872d39029716b4d62` |
| headerFingerprint | `sha256:b37759a9224c09c7c63bc81583b4a9bcbca02e74cba8b63579819e90d57f1d1a` |
| sourceTables | typed `Schema_CsdlBieu11` / `LightingSystem` · **không** bảng report store P1 |
| catalogKind UI schema | `lighting-systems` |
| IdCode prefix | `LT` |
| peerSoTs | `so-ts-lighting` · type `LIGHTING` · deep-link only |
| epicCite | `docs/context/features/csdl-export-print.md` · Wave 1 `T-XLS-S11` |
| golden | Cục `1. Biểu mẫu CSDL.xls` sheet Biểu 11 · **cấm** hồ sơ 12+8 |
| devSlash | `/implement-export-import-excel` · BFF binary |

## § Delta Current vs New (`edit_page` · `task_55dac8de`)

| ID | Current live | New (this analy) |
|----|--------------|------------------|
| Form / list | Typed 24 · 2 section lưới+NLMT · Slideout + grid **shipped** | **Unchanged** |
| Toolbar | Refresh · Add · History · Schema · View/Edit/Delete — **không** Xuất | **Xuất Excel** (+ Import P1) trên `catalogToolbar` |
| Filter | `LinErpListFilterBar` field+🔍 | **Unchanged** · **cấm** action Xuất (**GAP-FILTER-BAR-08**) |
| Export API | Missing / stub | `GET …/csdl-records/export?resource=lighting-systems` → binary (epic cite · SA) |
| Import API | Missing / stub | `POST …/csdl-records/import?resource=lighting-systems` (P1) |
| Golden | — | Cục 16-sheet · sheet Biểu 11 · checksum 24 cột · 1 sheet (LED+NLMT cùng hàng) |
| Peer qty | Sổ TS điểm ≠ bucket | Export chỉ qty biểu Cục · **cấm** dump điểm |
| Done gate | Typed STATUS done | **≠** export xong · cần file mở được cạnh mẫu |

## §A — Nguồn

| sourceKind | sourceCite | empty | error |
|------------|------------|-------|-------|
| `context` | `docs/context/features/csdl-bieu-11.md` | — | version gate |
| `context` | `docs/context/features/csdl-export-print.md` § Wave 1 · API | — | golden / toolbar rules |
| `analy` | `specs/_data-analy/csdl-cuc-2026/ANALYSIS-AND-TASKS.md` Biểu 11 | — | 24 cột · LED + NLMT qty |
| `db-ssot` | `docs/context/11-CSDL-SO-SACH-DATABASE-API.md` § LightingSystem | — | GridLed* · Solar* |
| `api` · list/CRUD | `GET/POST/PUT/DELETE …/csdl-records?resource=lighting-systems` | empty grid VN | toast 4xx |
| `api` · **export** | `GET …/csdl-records/export?resource=lighting-systems` (epic · SA chốt) | file 0 row OK | toast · **cấm** fake blob |
| `api` · **import** | `POST …/csdl-records/import?resource=lighting-systems` | — | validation · LED/Solar qty |
| `entity` | `Schema_CsdlBieu11` / LightingSystem | — | CompanyCode tenant |
| `mfe` | `CsdlBieu11Page` · `fromCatalogToolbar` | — | wire export action |
| `excel` | `1. Biểu mẫu CSDL.xls` sheet Biểu 11 | — | golden · not runtime SSOT |
| `excel` | Hồ sơ `4.1. In_Mẫu…xlsx` 12 biểu | — | **STALE** · so sánh only |
| `peer` | `so-ts-lighting` | — | deep-link · **≠** road-assets · **GAP-CSDL-CUC-11** |

## §B — Bind field (HARD)

### B1 — CRUD fields (**unchanged** — keep prior bind)

Reuse prior §B (`task_ed491c32`): `resource` · filters · typed 24 · soft-delete · GridLed*/Solar*. **Cấm** đổi write paths typed trong pack này.

### B2 — Export / import (**delta**)

| uiField / action | Label | controlHint | catalogKind | GET / POST | write field | sameMfe |
|------------------|-------|-------------|-------------|------------|-------------|---------|
| exportExcel | Xuất Excel | ToolbarButton | — | `GET …/export?resource=lighting-systems` (+ filter QS nếu Q-XLS-SCOPE=filtered) | — (download) | **gap** (thiếu nút) |
| importExcel | Nhập Excel | ToolbarButton + file | — | `POST …/import?resource=lighting-systems` multipart | upsert typed | **gap** P1 |
| exportFileName | — | derived | — | Content-Disposition | — | SA |

**Prefix map (keep + delta):**

| Operation | Path |
|-----------|------|
| List / Detail / CRUD | `/web-bff/api/v1/asset/csdl-records` (+ `/{id}`) — **keep** |
| **Export** | `GET /web-bff/api/v1/asset/csdl-records/export?resource=lighting-systems` |
| **Import** | `POST /web-bff/api/v1/asset/csdl-records/import?resource=lighting-systems` |
| API mirror | `api/v1/asset/csdl-records[/export|/import]` · **cấm** invent `/infra/` |

DB SSOT map (export row): `GridLed600`↔`gridLed600` · … · `SolarCabinetCount`↔`solarCabinetCount` — **SA** giữ typed.

## §C — Catalog / lookup

Unchanged prior LOOKUP_STATIC (province/status/side/gridStatus) + `road-route` + `org-unit` P2. Export **không** thêm catalogKind.

## §D — Map / vẽ

`none`

## §E — Empty / error / permission / export

| Case | UX |
|------|-----|
| Empty list export | File vẫn tải · 0 data row · header merge đúng mẫu · toast info OK |
| Export fail | toast · **cấm** silent · **cấm** CSV generic lưới |
| Import LED/Solar invalid | toast · giữ map SA · **cấm** đổi entity |
| Permission | Auth debt · **cấm** invent path |
| Toast stub only | **FAIL** DoD · **GAP-BIEU11-XLS-02** |

## §F — Cấm

- Demo / localStorage / seed giả làm SSOT runtime  
- ERP.* / Domains/Master / `api/v1/infra/*` / invent `api/v1/so-ts/*`  
- Toast stub = export done · filter-bar export (**GAP-FILTER-BAR-08**)  
- Golden hồ sơ 12+8 · invent 2 sheet lưới/NLMT  
- Dump điểm `so-ts-lighting` vào qty export  
- Re-open new_page typed CRUD · yarn build / e2e @ data_analy  

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
