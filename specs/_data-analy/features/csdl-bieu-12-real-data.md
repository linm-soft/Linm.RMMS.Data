# Real-data bind — csdl-bieu-12 (edit_page · T-XLS-S12 export/import)

| | |
|---|---|
| feature | `csdl-bieu-12` |
| packKind | `list` |
| changeScope | `edit_page` |
| status | `done` |
| taskId | `task_619ea74c` |
| priorTask | `task_94fca237` → review `task_9d0c01b9` (typed CRUD **done** · **cấm** reopen new_page) |
| resource | `green-assets` |
| prefix | **live** `api/v1/asset/csdl-records` · BFF `web-bff/api/v1/asset/csdl-records` |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · **cấm ERP.*** · **cấm** `api/v1/infra/*` |
| uiRepo | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| mfeStdUrl | `http://localhost:9301/so-ts/csdl-so-sach` · alias `/csdl-bieu-12` · hub `?resource=green-assets` |
| map | `none` |
| contentHash | `sha256:f42502cee520105fb0a7f618c17b8b0f582884d7f779f638ec7310c26346e77a` |
| headerFingerprint | `sha256:b6a541f8adc60a5badc72fc92c606631e5a1457fc119b9a6a546eb1f0acc437a` |
| sourceTables | typed `Schema_CsdlBieu12` / `GreenAsset` · **không** bảng report store P1 |
| catalogKind UI schema | `green-assets` |
| IdCode prefix | `CX` |
| peerSoTs | — · **cấm** invent so-ts-green |
| epicCite | `docs/context/features/csdl-export-print.md` · Wave 1 `T-XLS-S12` |
| golden | Cục `1. Biểu mẫu CSDL.xls` sheet Biểu 12 · **cấm** hồ sơ 12+8 |
| devSlash | `/implement-export-import-excel` · BFF binary |

## § Delta Current vs New (`edit_page` · `task_619ea74c`)

| ID | Current live | New (this analy) |
|----|--------------|------------------|
| Form / list | Typed 15 · 2 section khóm+cỏ · Slideout + grid **shipped** | **Unchanged** |
| Toolbar | Refresh · Add · History · Schema · View/Edit/Delete — **không** Xuất | **Xuất Excel** (+ Import P1) trên `catalogToolbar` |
| Filter | `LinErpListFilterBar` field+🔍 | **Unchanged** · **cấm** action Xuất (**GAP-FILTER-BAR-08**) |
| Export API | Missing / stub | `GET …/csdl-records/export?resource=green-assets` → binary (epic cite · SA) |
| Import API | Missing / stub | `POST …/csdl-records/import?resource=green-assets` (P1) |
| Golden | — | Cục 16-sheet · sheet Biểu 12 · checksum 15 cột · 1 sheet (khóm+cỏ cùng hàng) |
| Peer | none | **cấm** invent so-ts-green · **cấm** dump Sổ TS vào file |
| Done gate | Typed STATUS done | **≠** export xong · cần file mở được cạnh mẫu |

## §A — Nguồn

| sourceKind | sourceCite | empty | error |
|------------|------------|-------|-------|
| `context` | `docs/context/features/csdl-bieu-12.md` | — | version gate |
| `context` | `docs/context/features/csdl-export-print.md` § Wave 1 · API | — | golden / toolbar rules |
| `analy` | `specs/_data-analy/csdl-cuc-2026/ANALYSIS-AND-TASKS.md` Biểu 12 | — | 15 cột · khóm + m² |
| `db-ssot` | `docs/context/11-CSDL-SO-SACH-DATABASE-API.md` § GreenAsset | — | OleanderClumps · NgauClumps · PalmClumps · GrassAreaM2 · OtherClumps |
| `api` · list/CRUD | `GET/POST/PUT/DELETE …/csdl-records?resource=green-assets` | empty grid VN | toast 4xx |
| `api` · **export** | `GET …/csdl-records/export?resource=green-assets` (epic · SA chốt) | file 0 row OK | toast · **cấm** fake blob |
| `api` · **import** | `POST …/csdl-records/import?resource=green-assets` | — | validation · clump/grass qty |
| `entity` | `Schema_CsdlBieu12` / GreenAsset | — | CompanyCode tenant |
| `mfe` | `CsdlBieu12Page` · `fromCatalogToolbar` | — | wire export action |
| `excel` | `1. Biểu mẫu CSDL.xls` sheet Biểu 12 | — | golden · not runtime SSOT |
| `excel` | Hồ sơ `4.1. In_Mẫu…xlsx` 12 biểu | — | **STALE** · so sánh only |
| `peer` | — | — | **cấm** invent so-ts-green · **GAP-CSDL-CUC-11** |

## §B — Bind field (HARD)

### B1 — CRUD fields (**unchanged** — keep prior bind)

Reuse prior §B (`task_94fca237`): `resource` · filters · typed 15 · soft-delete · Oleander*/Ngau*/Palm*/Other*/GrassAreaM2. **Cấm** đổi write paths typed trong pack này.

### B2 — Export / import (**delta**)

| uiField / action | Label | controlHint | catalogKind | GET / POST | write field | sameMfe |
|------------------|-------|-------------|-------------|------------|-------------|---------|
| exportExcel | Xuất Excel | ToolbarButton | — | `GET …/export?resource=green-assets` (+ filter QS nếu Q-XLS-SCOPE=filtered) | — (download) | **gap** (thiếu nút) |
| importExcel | Nhập Excel | ToolbarButton + file | — | `POST …/import?resource=green-assets` multipart | upsert typed | **gap** P1 |
| exportFileName | — | derived | — | Content-Disposition | — | SA |

**Prefix map (keep + delta):**

| Operation | Path |
|-----------|------|
| List / Detail / CRUD | `/web-bff/api/v1/asset/csdl-records` (+ `/{id}`) — **keep** |
| **Export** | `GET /web-bff/api/v1/asset/csdl-records/export?resource=green-assets` |
| **Import** | `POST /web-bff/api/v1/asset/csdl-records/import?resource=green-assets` |
| API mirror | `api/v1/asset/csdl-records[/export|/import]` · **cấm** invent `/infra/` |

DB SSOT map (export row): `OleanderClumps`↔`oleanderClumps` · `NgauClumps`↔`ngauClumps` · `PalmClumps`↔`palmClumps` · `OtherClumps`↔`otherClumps` · `GrassAreaM2`↔`grassAreaM2` — **SA** giữ typed.

## §C — Catalog / lookup

Unchanged prior LOOKUP_STATIC (province/status/side) + `road-route` + `org-unit` P2. Export **không** thêm catalogKind.

## §D — Map / vẽ

`none`

## §E — Empty / error / permission / export

| Case | UX |
|------|-----|
| Empty list export | File vẫn tải · 0 data row · header merge đúng mẫu · toast info OK |
| Export fail | toast · **cấm** silent · **cấm** CSV generic lưới |
| Import clump/grass invalid | toast · giữ map SA · **cấm** đổi entity |
| Permission | Auth debt · **cấm** invent path |
| Toast stub only | **FAIL** DoD · **GAP-BIEU12-XLS-02** |

## §F — Cấm

- Demo / localStorage / seed giả làm SSOT runtime  
- ERP.* / Domains/Master / `api/v1/infra/*` / invent `api/v1/so-ts/*`  
- Toast stub = export done · filter-bar export (**GAP-FILTER-BAR-08**)  
- Golden hồ sơ 12+8 · invent 2 sheet khóm/cỏ  
- Invent peer so-ts-green / merge so-ts-* vào export  
- Re-open new_page typed CRUD · yarn build / e2e @ data_analy  

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-data-analy |
| skillVersion | 2026.09.05.03 |
| schemaVersion | 1 |
| workflowVersion | 2026.09.05.03 |
| rulesVersion | 2026.09.17.3 |
| contentHash | `sha256:f42502cee520105fb0a7f618c17b8b0f582884d7f779f638ec7310c26346e77a` |
| headerFingerprint | `sha256:b6a541f8adc60a5badc72fc92c606631e5a1457fc119b9a6a546eb1f0acc437a` |
| generatedAt | 2026-09-18T00:25:00.000Z |
| versionGate | ok |
| taskId | task_619ea74c |
| packKind | list |
| changeScope | edit_page |

---
<!-- Version meta: skillId=agent-data-analy skillVersion=2026.09.05.03 schemaVersion=1 workflowVersion=2026.09.05.03 rulesVersion=2026.09.17.3 versionGate=ok contentHash=sha256:f42502cee520105fb0a7f618c17b8b0f582884d7f779f638ec7310c26346e77a changeScope=edit_page taskId=task_619ea74c -->
