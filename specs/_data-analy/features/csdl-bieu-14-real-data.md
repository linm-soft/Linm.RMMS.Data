# Real-data bind — csdl-bieu-14 (edit_page · T-XLS-S14 export/import)

| | |
|---|---|
| feature | `csdl-bieu-14` |
| packKind | `list` |
| changeScope | `edit_page` |
| status | `done` |
| taskId | `task_b92db6a6` |
| priorTask | `task_db0e2ea1` → review `task_1b0469b6` (typed CRUD **done** · **cấm** reopen new_page) |
| resource | `its-systems` |
| prefix | **live** `api/v1/asset/csdl-records` · BFF `web-bff/api/v1/asset/csdl-records` |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · **cấm ERP.*** · **cấm** `api/v1/infra/*` |
| uiRepo | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| mfeStdUrl | `http://localhost:9301/so-ts/csdl-so-sach` · alias `/csdl-bieu-14` · hub `?resource=its-systems` |
| map | `none` |
| contentHash | `sha256:e9a062f1f9eecd6bf98748db0c3f839e2247a74ecb9bcd56273d4e48d729fa0a` |
| headerFingerprint | `sha256:14cd156a898dcc971a072dd1cd1b92460a8b597558a90dc9854fead9d4c4de5c` |
| sourceTables | typed `Schema_CsdlBieu14` / `ItsSystem` · **không** bảng report store P1 |
| catalogKind UI schema | `its-systems` |
| IdCode prefix | `IT` |
| peerSoTs | `so-ts-its-camera` · **cấm** merge so-ts-* / `road-assets` / ITS AiVision vào export |
| epicCite | `docs/context/features/csdl-export-print.md` · Wave 1 `T-XLS-S14` |
| golden | Cục `1. Biểu mẫu CSDL.xls` sheet Biểu 14 · **cấm** hồ sơ 12+8 |
| devSlash | `/implement-export-import-excel` · BFF binary |

## § Delta Current vs New (`edit_page` · `task_b92db6a6`)

| ID | Current live | New (this analy) |
|----|--------------|------------------|
| Form / list | Typed 21 · thiết bị + hạ tầng + GPS · Slideout + grid **shipped** | **Unchanged** |
| Toolbar | Refresh · Add · History · Schema · View/Edit/Delete — **không** Xuất | **Xuất Excel** (+ Import P1) trên `catalogToolbar` |
| Filter | `LinErpListFilterBar` field+🔍 | **Unchanged** · **cấm** action Xuất (**GAP-FILTER-BAR-08**) |
| Export API | Missing / stub | `GET …/csdl-records/export?resource=its-systems` → binary (epic cite · SA) |
| Import API | Missing / stub | `POST …/csdl-records/import?resource=its-systems` (P1) |
| Golden | — | Cục 16-sheet · sheet Biểu 14 · checksum 21 cột · 1 sheet (device+infra+GPS cùng hàng) |
| Peer | `so-ts-its-camera` / ITS MFE cite | **cấm** merge/dump `road-assets` / AiVision vào file · **GAP-CSDL-CUC-11** |
| Done gate | Typed STATUS done | **≠** export xong · cần file mở được cạnh mẫu |

## §A — Nguồn

| sourceKind | sourceCite | empty | error |
|------------|------------|-------|-------|
| `context` | `docs/context/features/csdl-bieu-14.md` | — | version gate |
| `context` | `docs/context/features/csdl-export-print.md` § Wave 1 · API | — | golden / toolbar rules |
| `analy` | `specs/_data-analy/csdl-cuc-2026/ANALYSIS-AND-TASKS.md` Biểu 14 | — | 21 cột · device+infra |
| `db-ssot` | `docs/context/11-CSDL-SO-SACH-DATABASE-API.md` § ItsSystem / Schema_CsdlBieu14 | — | DeviceType · InfraKind · GPS |
| `api` · list/CRUD | `GET/POST/PUT/DELETE …/csdl-records?resource=its-systems` | empty grid VN | toast 4xx |
| `api` · **export** | `GET …/csdl-records/export?resource=its-systems` (epic · SA chốt) | file 0 row OK | toast · **cấm** fake blob |
| `api` · **import** | `POST …/csdl-records/import?resource=its-systems` | — | validation · typed fields |
| `entity` | `Schema_CsdlBieu14` / ItsSystem | — | CompanyCode tenant |
| `mfe` | `CsdlBieu14Page` · `fromCatalogToolbar` | — | wire export action |
| `excel` | `1. Biểu mẫu CSDL.xls` sheet Biểu 14 | — | golden · not runtime SSOT |
| `excel` | Hồ sơ `4.1. In_Mẫu…xlsx` 12 biểu | — | **STALE** · so sánh only |
| `peer` | `so-ts-its-camera` · `api/v1/asset/road-assets` | — | **cite only** · **cấm** bind export |
| `peer` | `its-traffic-detect` / `its-anpr-overload` | — | **cite only** · **cấm** bind |

## §B — Bind field (HARD)

### B1 — CRUD fields (**unchanged** — keep prior bind)

Reuse prior §B (`task_db0e2ea1`): `resource` · filters · typed 21 · soft-delete · deviceType/brand/infraKind/gps*. **Cấm** đổi write paths typed trong pack này.

### B2 — Export / import (**delta**)

| uiField / action | Label | controlHint | catalogKind | GET / POST | write field | sameMfe |
|------------------|-------|-------------|-------------|------------|-------------|---------|
| exportExcel | Xuất Excel | ToolbarButton | — | `GET …/export?resource=its-systems` (+ filter QS nếu Q-XLS-SCOPE=filtered) | — (download) | **gap** (thiếu nút) |
| importExcel | Nhập Excel | ToolbarButton + file | — | `POST …/import?resource=its-systems` multipart | upsert typed | **gap** P1 |
| exportFileName | — | derived | — | Content-Disposition | — | SA |

**Prefix map (keep + delta):**

| Operation | Path |
|-----------|------|
| List / Detail / CRUD | `/web-bff/api/v1/asset/csdl-records` (+ `/{id}`) — **keep** |
| **Export** | `GET /web-bff/api/v1/asset/csdl-records/export?resource=its-systems` |
| **Import** | `POST /web-bff/api/v1/asset/csdl-records/import?resource=its-systems` |
| API mirror | `api/v1/asset/csdl-records[/export|/import]` · **cấm** invent `/infra/` |

DB SSOT map (export row): `DeviceType`↔`deviceType` · `Brand`↔`brand` · `TechSpec`↔`techSpec` · `QtyOrLength`↔`qtyOrLength` · `OperatingStatus`↔`operatingStatus` · `InfraKind`↔`infraKind` · `ClearanceM`↔`clearanceM` · `InfraQty`↔`infraQty` · `SystemStatus`↔`systemStatus` · `YearBuilt`↔`yearBuilt` · `GpsLat`/`GpsLng` · `Direction`/`Side` — **SA** giữ typed.

## §C — Catalog / lookup

Unchanged prior LOOKUP_STATIC (province/operatingStatus/deviceType/infraKind/side/systemStatus) + `road-route` + `org-unit` P2. Export **không** thêm catalogKind.

## §D — Map / vẽ

`none`

## §E — Empty / error / permission / export

| Case | UX |
|------|-----|
| Empty list export | File vẫn tải · 0 data row · header merge đúng mẫu · toast info OK |
| Export fail | toast · **cấm** silent · **cấm** CSV generic lưới |
| Import invalid typed | toast · giữ map SA · **cấm** đổi entity |
| Permission | Auth debt · **cấm** invent path |
| Toast stub only | **FAIL** DoD · **GAP-BIEU14-XLS-02** |

## §F — Cấm

- Demo / localStorage / seed giả làm SSOT runtime  
- ERP.* / Domains/Master / `api/v1/infra/*` / invent `api/v1/so-ts/*`  
- Toast stub = export done · filter-bar export (**GAP-FILTER-BAR-08**)  
- Golden hồ sơ 12+8 · invent sheet riêng thiết bị/hạ tầng  
- Merge peer so-ts-its-camera / `road-assets` / ITS AiVision vào export  
- Re-open new_page typed CRUD · yarn build / e2e @ data_analy  

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-data-analy |
| skillVersion | 2026.09.05.03 |
| schemaVersion | 1 |
| workflowVersion | 2026.09.05.03 |
| rulesVersion | 2026.09.17.3 |
| contentHash | `sha256:e9a062f1f9eecd6bf98748db0c3f839e2247a74ecb9bcd56273d4e48d729fa0a` |
| headerFingerprint | `sha256:14cd156a898dcc971a072dd1cd1b92460a8b597558a90dc9854fead9d4c4de5c` |
| generatedAt | 2026-09-18T01:32:46.463Z |
| versionGate | ok |
| taskId | task_b92db6a6 |
| packKind | list |
| changeScope | edit_page |

---
<!-- Version meta: skillId=agent-data-analy skillVersion=2026.09.05.03 schemaVersion=1 workflowVersion=2026.09.05.03 rulesVersion=2026.09.17.3 versionGate=ok contentHash=sha256:e9a062f1f9eecd6bf98748db0c3f839e2247a74ecb9bcd56273d4e48d729fa0a changeScope=edit_page taskId=task_b92db6a6 -->
