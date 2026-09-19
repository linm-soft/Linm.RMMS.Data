# Real-data bind — csdl-bieu-13 (edit_page · T-XLS-S13 export/import)

| | |
|---|---|
| feature | `csdl-bieu-13` |
| packKind | `list` |
| changeScope | `edit_page` |
| status | `done` |
| taskId | `task_4fec1f3f` |
| priorTask | `task_3cec1103` → review `task_bdbf3809` (typed CRUD **done** · **cấm** reopen new_page) |
| resource | `noise-barriers` |
| prefix | **live** `api/v1/asset/csdl-records` · BFF `web-bff/api/v1/asset/csdl-records` |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · **cấm ERP.*** · **cấm** `api/v1/infra/*` |
| uiRepo | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| mfeStdUrl | `http://localhost:9301/so-ts/csdl-so-sach` · alias `/csdl-bieu-13` · hub `?resource=noise-barriers` |
| map | `none` |
| contentHash | `sha256:800386bb8f86bfcc815b9c7d3a6dc246dc58b0a95b5132a317c5a094d0b4194f` |
| headerFingerprint | `sha256:31dbc83200b511c9d61333b1cdb94e2880778980a3b21970be414e926db29008` |
| sourceTables | typed `Schema_CsdlBieu13` / `NoiseBarrier` · **không** bảng report store P1 |
| catalogKind UI schema | `noise-barriers` |
| IdCode prefix | `TC` |
| peerSoTs | `so-ts-noise-barrier` · **cấm** merge so-ts-* / `road-assets` vào export |
| epicCite | `docs/context/features/csdl-export-print.md` · Wave 1 `T-XLS-S13` |
| golden | Cục `1. Biểu mẫu CSDL.xls` sheet Biểu 13 · **cấm** hồ sơ 12+8 |
| devSlash | `/implement-export-import-excel` · BFF binary |

## § Delta Current vs New (`edit_page` · `task_4fec1f3f`)

| ID | Current live | New (this analy) |
|----|--------------|------------------|
| Form / list | Typed 13 · section kích thước · Slideout + grid **shipped** | **Unchanged** |
| Toolbar | Refresh · Add · History · Schema · View/Edit/Delete — **không** Xuất | **Xuất Excel** (+ Import P1) trên `catalogToolbar` |
| Filter | `LinErpListFilterBar` field+🔍 | **Unchanged** · **cấm** action Xuất (**GAP-FILTER-BAR-08**) |
| Export API | Missing / stub | `GET …/csdl-records/export?resource=noise-barriers` → binary (epic cite · SA) |
| Import API | Missing / stub | `POST …/csdl-records/import?resource=noise-barriers` (P1) |
| Golden | — | Cục 16-sheet · sheet Biểu 13 · checksum 13 cột · 1 sheet (dài/cao/DT cùng hàng) |
| Peer | `so-ts-noise-barrier` cite | **cấm** merge/dump `road-assets` vào file · **GAP-CSDL-CUC-11** |
| Done gate | Typed STATUS done | **≠** export xong · cần file mở được cạnh mẫu |

## §A — Nguồn

| sourceKind | sourceCite | empty | error |
|------------|------------|-------|-------|
| `context` | `docs/context/features/csdl-bieu-13.md` | — | version gate |
| `context` | `docs/context/features/csdl-export-print.md` § Wave 1 · API | — | golden / toolbar rules |
| `analy` | `specs/_data-analy/csdl-cuc-2026/ANALYSIS-AND-TASKS.md` Biểu 13 | — | 13 cột · dài/cao/DT |
| `db-ssot` | `docs/context/11-CSDL-SO-SACH-DATABASE-API.md` § NoiseBarrier / Schema_CsdlBieu13 | — | LengthM · HeightM · AreaM2 |
| `api` · list/CRUD | `GET/POST/PUT/DELETE …/csdl-records?resource=noise-barriers` | empty grid VN | toast 4xx |
| `api` · **export** | `GET …/csdl-records/export?resource=noise-barriers` (epic · SA chốt) | file 0 row OK | toast · **cấm** fake blob |
| `api` · **import** | `POST …/csdl-records/import?resource=noise-barriers` | — | validation · dim ≥0 |
| `entity` | `Schema_CsdlBieu13` / NoiseBarrier | — | CompanyCode tenant |
| `mfe` | `CsdlBieu13Page` · `fromCatalogToolbar` | — | wire export action |
| `excel` | `1. Biểu mẫu CSDL.xls` sheet Biểu 13 | — | golden · not runtime SSOT |
| `excel` | Hồ sơ `4.1. In_Mẫu…xlsx` 12 biểu | — | **STALE** · so sánh only |
| `peer` | `so-ts-noise-barrier` · `api/v1/asset/road-assets` | — | **cite only** · **cấm** bind export |

## §B — Bind field (HARD)

### B1 — CRUD fields (**unchanged** — keep prior bind)

Reuse prior §B (`task_3cec1103`): `resource` · filters · typed 13 · soft-delete · lengthM/heightM/areaM2. **Cấm** đổi write paths typed trong pack này.

### B2 — Export / import (**delta**)

| uiField / action | Label | controlHint | catalogKind | GET / POST | write field | sameMfe |
|------------------|-------|-------------|-------------|------------|-------------|---------|
| exportExcel | Xuất Excel | ToolbarButton | — | `GET …/export?resource=noise-barriers` (+ filter QS nếu Q-XLS-SCOPE=filtered) | — (download) | **gap** (thiếu nút) |
| importExcel | Nhập Excel | ToolbarButton + file | — | `POST …/import?resource=noise-barriers` multipart | upsert typed | **gap** P1 |
| exportFileName | — | derived | — | Content-Disposition | — | SA |

**Prefix map (keep + delta):**

| Operation | Path |
|-----------|------|
| List / Detail / CRUD | `/web-bff/api/v1/asset/csdl-records` (+ `/{id}`) — **keep** |
| **Export** | `GET /web-bff/api/v1/asset/csdl-records/export?resource=noise-barriers` |
| **Import** | `POST /web-bff/api/v1/asset/csdl-records/import?resource=noise-barriers` |
| API mirror | `api/v1/asset/csdl-records[/export|/import]` · **cấm** invent `/infra/` |

DB SSOT map (export row): `LengthM`↔`lengthM` · `HeightM`↔`heightM` · `AreaM2`↔`areaM2` — **SA** giữ typed.

## §C — Catalog / lookup

Unchanged prior LOOKUP_STATIC (province/status/side) + `road-route` + `org-unit` P2. Export **không** thêm catalogKind.

## §D — Map / vẽ

`none`

## §E — Empty / error / permission / export

| Case | UX |
|------|-----|
| Empty list export | File vẫn tải · 0 data row · header merge đúng mẫu · toast info OK |
| Export fail | toast · **cấm** silent · **cấm** CSV generic lưới |
| Import dim invalid (âm / all-zero) | toast · giữ map SA · **cấm** đổi entity |
| Permission | Auth debt · **cấm** invent path |
| Toast stub only | **FAIL** DoD · **GAP-BIEU13-XLS-02** |

## §F — Cấm

- Demo / localStorage / seed giả làm SSOT runtime  
- ERP.* / Domains/Master / `api/v1/infra/*` / invent `api/v1/so-ts/*`  
- Toast stub = export done · filter-bar export (**GAP-FILTER-BAR-08**)  
- Golden hồ sơ 12+8 · invent sheet riêng kích thước  
- Merge peer so-ts-noise-barrier / `road-assets` vào export  
- Re-open new_page typed CRUD · yarn build / e2e @ data_analy  

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-data-analy |
| skillVersion | 2026.09.05.03 |
| schemaVersion | 1 |
| workflowVersion | 2026.09.05.03 |
| rulesVersion | 2026.09.17.3 |
| contentHash | `sha256:800386bb8f86bfcc815b9c7d3a6dc246dc58b0a95b5132a317c5a094d0b4194f` |
| headerFingerprint | `sha256:31dbc83200b511c9d61333b1cdb94e2880778980a3b21970be414e926db29008` |
| generatedAt | 2026-09-18T00:53:47.050Z |
| versionGate | ok |
| taskId | task_4fec1f3f |
| packKind | list |
| changeScope | edit_page |

---
<!-- Version meta: skillId=agent-data-analy skillVersion=2026.09.05.03 schemaVersion=1 workflowVersion=2026.09.05.03 rulesVersion=2026.09.17.3 versionGate=ok contentHash=sha256:800386bb8f86bfcc815b9c7d3a6dc246dc58b0a95b5132a317c5a094d0b4194f changeScope=edit_page taskId=task_4fec1f3f -->
