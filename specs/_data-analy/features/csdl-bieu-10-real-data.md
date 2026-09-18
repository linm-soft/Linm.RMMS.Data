# Real-data bind — csdl-bieu-10 (edit_page · T-XLS-S10 export/import)

| | |
|---|---|
| feature | `csdl-bieu-10` |
| packKind | `list` |
| changeScope | `edit_page` |
| status | `done` |
| taskId | `task_0fb02546` |
| priorTask | `task_6b4b8a1b` → review `task_faf3807e` (typed CRUD **done** · **cấm** reopen new_page) |
| resource | `retaining-walls` |
| prefix | **live** `api/v1/asset/csdl-records` · BFF `web-bff/api/v1/asset/csdl-records` |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · **cấm ERP.*** · **cấm** `api/v1/infra/*` |
| uiRepo | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| mfeStdUrl | `http://localhost:9301/so-ts/csdl-so-sach` · alias `/csdl-bieu-10` · hub `?resource=retaining-walls` |
| map | `none` |
| contentHash | `sha256:49ea64d3b8f51e899c4bb36ae444444b4c0a805e64349f8e1f52677909ab0302` |
| headerFingerprint | `sha256:9d4863dcab46439966e526cc7696f137695022911a3edc5066c852dc779fa598` |
| sourceTables | typed `Schema_CsdlBieu10` / `RetainingWall` · **không** bảng report store P1 |
| catalogKind UI schema | `retaining-walls` |
| IdCode prefix | `KE` |
| peerSoTs | `so-ts-retaining` · type `RETAINING` · deep-link only |
| epicCite | `docs/context/features/csdl-export-print.md` · Wave 1 `T-XLS-S10` |
| golden | Cục `1. Biểu mẫu CSDL.xls` sheet Biểu 10 · **cấm** hồ sơ 12+8 |
| devSlash | `/implement-export-import-excel` · BFF binary |

## § Delta Current vs New (`edit_page` · `task_0fb02546`)

| ID | Current live | New (this analy) |
|----|--------------|------------------|
| Form / list | Typed 21 · 2 section tường+rãnh · Slideout + grid **shipped** | **Unchanged** |
| Toolbar | Refresh · Add · History · Schema · View/Edit/Delete — **không** Xuất | **Xuất Excel** (+ Import P1) trên `catalogToolbar` |
| Filter | `LinErpListFilterBar` field+🔍 (+ `wallKind`) | **Unchanged** · **cấm** action Xuất (**GAP-FILTER-BAR-08**) |
| Export API | Missing / stub | `GET …/csdl-records/export?resource=retaining-walls` → binary (epic cite · SA) |
| Import API | Missing / stub | `POST …/csdl-records/import?resource=retaining-walls` (P1) |
| Golden | — | Cục 16-sheet · sheet Biểu 10 · checksum 21 cột · 1 sheet (crest* cùng hàng) |
| heightM | UI heightM ↔ DB WidthM typed | Export/import giữ map · **cấm** đổi entity |
| Done gate | Typed STATUS done | **≠** export xong · cần file mở được cạnh mẫu |

## §A — Nguồn

| sourceKind | sourceCite | empty | error |
|------------|------------|-------|-------|
| `context` | `docs/context/features/csdl-bieu-10.md` | — | version gate |
| `context` | `docs/context/features/csdl-export-print.md` § Wave 1 · API | — | golden / toolbar rules |
| `analy` | `specs/_data-analy/csdl-cuc-2026/ANALYSIS-AND-TASKS.md` Biểu 10 | — | 21 cột · tường + rãnh đỉnh |
| `db-ssot` | `docs/context/11-CSDL-SO-SACH-DATABASE-API.md` § RetainingWall | — | WidthM↔heightM |
| `api` · list/CRUD | `GET/POST/PUT/DELETE …/csdl-records?resource=retaining-walls` | empty grid VN | toast 4xx |
| `api` · **export** | `GET …/csdl-records/export?resource=retaining-walls` (epic · SA chốt) | file 0 row OK | toast · **cấm** fake blob |
| `api` · **import** | `POST …/csdl-records/import?resource=retaining-walls` | — | validation · wallKind / crest* |
| `entity` | `Schema_CsdlBieu10` / RetainingWall | — | CompanyCode tenant |
| `mfe` | `CsdlBieu10Page` / hub retaining-walls · `fromCatalogToolbar` | — | wire export action |
| `excel` | `1. Biểu mẫu CSDL.xls` sheet Biểu 10 | — | golden · not runtime SSOT |
| `excel` | Hồ sơ `4.1. In_Mẫu…xlsx` 12 biểu | — | **STALE** · so sánh only |
| `peer` | `so-ts-retaining` | — | deep-link · **≠** road-assets · **GAP-CSDL-CUC-11** |

## §B — Bind field (HARD)

### B1 — CRUD fields (**unchanged** — keep prior bind)

Reuse prior §B (`task_6b4b8a1b`): `resource` · filters · typed 21 · soft-delete · heightM↔WidthM. **Cấm** đổi write paths typed trong pack này.

### B2 — Export / import (**delta**)

| uiField / action | Label | controlHint | catalogKind | GET / POST | write field | sameMfe |
|------------------|-------|-------------|-------------|------------|-------------|---------|
| exportExcel | Xuất Excel | ToolbarButton | — | `GET …/export?resource=retaining-walls` (+ filter QS nếu Q-XLS-SCOPE=filtered) | — (download) | **gap** (thiếu nút) |
| importExcel | Nhập Excel | ToolbarButton + file | — | `POST …/import?resource=retaining-walls` multipart | upsert typed | **gap** P1 |
| exportFileName | — | derived | — | Content-Disposition | — | SA |
| heightMap | heightM | derived | — | row map ↔ WidthM | same typed | Q-XLS-HEIGHT |

**Prefix map (keep + delta):**

| Operation | Path |
|-----------|------|
| List / Detail / CRUD | `/web-bff/api/v1/asset/csdl-records` (+ `/{id}`) — **keep** |
| **Export** | `GET /web-bff/api/v1/asset/csdl-records/export?resource=retaining-walls` |
| **Import** | `POST /web-bff/api/v1/asset/csdl-records/import?resource=retaining-walls` |
| API mirror | `api/v1/asset/csdl-records[/export|/import]` · **cấm** invent `/infra/` |

## §C — Catalog / lookup

Unchanged prior LOOKUP_STATIC (province/status/side/wallKind/structure/material/crestDitch*) + `road-route` + `org-unit` P2. Export **không** thêm catalogKind.

## §D — Map / vẽ

`none`

## §E — Empty / error / permission / export

| Case | UX |
|------|-----|
| Empty list export | File vẫn tải · 0 data row · header merge đúng mẫu · toast info OK |
| Export fail | toast · **cấm** silent · **cấm** CSV generic lưới |
| Import height/Width mismatch | toast · giữ map SA · **cấm** đổi entity |
| Permission | Auth debt · **cấm** invent path |
| Toast stub only | **FAIL** DoD · **GAP-BIEU10-XLS-02** |

## §F — Cấm

- Re-run typed CRUD `new_page` / đổi form 21/2 không gap  
- Toast stub = done · STATUS typed done = export xong  
- Xuất/Import trên filter bar (**GAP-FILTER-BAR-08**)  
- Golden = hồ sơ 12+8  
- Invent 2 sheet theo section tường/rãnh  
- Demo/localStorage SSOT · ERP.* · invent `infra` · merge so-ts-retaining  
- yarn build / e2e ở role data_analy  

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-data-analy |
| skillVersion | 2026.09.05.03 |
| schemaVersion | 2 |
| workflowVersion | 2026.09.05.03 |
| rulesVersion | 2026.09.17.3 |
| contentHash | `sha256:49ea64d3b8f51e899c4bb36ae444444b4c0a805e64349f8e1f52677909ab0302` |
| headerFingerprint | `sha256:9d4863dcab46439966e526cc7696f137695022911a3edc5066c852dc779fa598` |
| generatedAt | 2026-09-18T06:05:57.248Z |
| versionGate | ok |
| taskId | task_0fb02546 |
| packKind | list |
| changeScope | edit_page |

---
<!-- Version meta: skillId=agent-data-analy skillVersion=2026.09.05.03 schemaVersion=2 workflowVersion=2026.09.05.03 rulesVersion=2026.09.17.3 versionGate=ok contentHash=sha256:49ea64d3b8f51e899c4bb36ae444444b4c0a805e64349f8e1f52677909ab0302 changeScope=edit_page taskId=task_0fb02546 -->
