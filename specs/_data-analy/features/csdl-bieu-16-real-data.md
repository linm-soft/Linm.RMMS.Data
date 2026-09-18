# Real-data bind — csdl-bieu-16 (edit_page · T-XLS-S16 export/import)

| | |
|---|---|
| feature | `csdl-bieu-16` |
| packKind | `list` |
| changeScope | `edit_page` |
| status | `done` |
| taskId | `task_e344020d` |
| priorTask | `task_70fe1d76` → review `task_628c95a5` (typed CRUD **done** · **cấm** reopen new_page) |
| resource | `interchanges` |
| prefix | **live** `api/v1/asset/csdl-records` · BFF `web-bff/api/v1/asset/csdl-records` |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · **cấm ERP.*** · **cấm** `api/v1/infra/*` |
| uiRepo | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| mfeStdUrl | `http://localhost:9301/so-ts/csdl-so-sach` · alias `/csdl-bieu-16` · hub `?resource=interchanges` |
| map | `none` |
| contentHash | `sha256:c71543b66c4f1d28f5dbae1743c1042e0bb9f12ab9c0efc55d9668af2a38e072` |
| headerFingerprint | `sha256:ec787bf2008ae89f1b6c085fe238f1b0d50b048f5c672b90b68d9ea102cf8fcc` |
| sourceTables | typed `Schema_CsdlBieu16` / `Interchange` + `InterchangeBranch` · **không** bảng report store P1 |
| catalogKind UI schema | `interchanges` |
| IdCode prefix | `IX` |
| peerSoTs | `so-ts-interchange` · **cấm** merge so-ts-* / `road-assets` vào export |
| epicCite | `docs/context/features/csdl-export-print.md` · Wave 1 `T-XLS-S16` |
| golden | Cục `1. Biểu mẫu CSDL.xls` sheet Biểu 16 · **cấm** hồ sơ 12+8 |
| devSlash | `/implement-export-import-excel` · BFF binary |

## § Delta Current vs New (`edit_page` · `task_e344020d`)

| ID | Current live | New (this analy) |
|----|--------------|------------------|
| Form / list | Typed 39 · header + `branches[]` + ATGT · Slideout + grid **shipped** | **Unchanged** |
| Toolbar | Refresh · Add · History · Schema · View/Edit/Delete — **không** Xuất | **Xuất Excel** (+ Import P1) trên `catalogToolbar` |
| Filter | `LinErpListFilterBar` field+🔍 | **Unchanged** · **cấm** action Xuất (**GAP-FILTER-BAR-08**) |
| Export API | Missing / stub | `GET …/csdl-records/export?resource=interchanges` → binary (epic cite · SA) |
| Import API | Missing / stub | `POST …/csdl-records/import?resource=interchanges` (P1) |
| Golden | — | Cục 16-sheet · sheet Biểu 16 · checksum 39 cột · flatten 1 row/nhánh |
| Peer | so-ts-interchange cite | **cấm** merge/dump `road-assets` vào file · **GAP-CSDL-CUC-11** |
| Done gate | Typed STATUS done | **≠** export xong · cần file mở được cạnh mẫu |

## §A — Nguồn

| sourceKind | sourceCite | empty | error |
|------------|------------|-------|-------|
| `context` | `docs/context/features/csdl-bieu-16.md` | — | version gate |
| `context` | `docs/context/features/csdl-export-print.md` § Wave 1 · API | — | golden / toolbar rules |
| `analy` | `specs/_data-analy/csdl-cuc-2026/ANALYSIS-AND-TASKS.md` Biểu 16 | — | 39 cột · nhánh 1–n |
| `db-ssot` | `docs/context/11-CSDL-SO-SACH-DATABASE-API.md` § Interchange / Schema_CsdlBieu16 | — | header + Branch |
| `api` · list/CRUD | `GET/POST/PUT/DELETE …/csdl-records?resource=interchanges` | empty grid VN | toast 4xx |
| `api` · **export** | `GET …/csdl-records/export?resource=interchanges` (epic · SA chốt) | file 0 row OK | toast · **cấm** fake blob |
| `api` · **import** | `POST …/csdl-records/import?resource=interchanges` | — | validation · map `branches[]` |
| `entity` | `Schema_CsdlBieu16` / Interchange + InterchangeBranch | — | CompanyCode tenant |
| `mfe` | `CsdlBieu16Page` · `fromCatalogToolbar` | — | wire export action |
| `excel` | `1. Biểu mẫu CSDL.xls` sheet Biểu 16 | — | golden · not runtime SSOT |
| `excel` | Hồ sơ `4.1. In_Mẫu…xlsx` 12 biểu | — | **STALE** · so sánh only |
| `peer` | so-ts-interchange · `api/v1/asset/road-assets` | — | **cite only** · **cấm** bind export |

## §B — Bind field (HARD)

### B1 — CRUD fields (**unchanged** — keep prior bind)

Reuse prior §B (`task_70fe1d76`): `resource` · filters · typed 39 · soft-delete · `branches[]` · ATGT · main* widths. **Cấm** đổi write paths typed trong pack này.

### B2 — Export / import (**delta**)

| uiField / action | Label | controlHint | catalogKind | GET / POST | write field | sameMfe |
|------------------|-------|-------------|-------------|------------|-------------|---------|
| exportExcel | Xuất Excel | ToolbarButton | — | `GET …/export?resource=interchanges` (+ filter QS nếu Q-XLS-SCOPE=filtered) | — (download) | **gap** (thiếu nút) |
| importExcel | Nhập Excel | ToolbarButton + file | — | `POST …/import?resource=interchanges` multipart | upsert typed + `branches[]` | **gap** P1 |
| exportFileName | — | derived | — | Content-Disposition | — | SA |
| branch flatten | — | engine | — | export rows = 1 / nhánh | Excel `branch*` cols | SA · **GAP-BIEU16-XLS-06** |

**Prefix map (keep + delta):**

| Operation | Path |
|-----------|------|
| List / Detail / CRUD | `/web-bff/api/v1/asset/csdl-records` (+ `/{id}`) — **keep** |
| **Export** | `GET /web-bff/api/v1/asset/csdl-records/export?resource=interchanges` |
| **Import** | `POST /web-bff/api/v1/asset/csdl-records/import?resource=interchanges` |
| API mirror | `api/v1/asset/csdl-records[/export|/import]` · **cấm** invent `/infra/` |

DB SSOT map (export row): header `Name`↔`name` · `KmMain`/`KmAux` · `InterchangeType` · `TrafficOrg` · `MainBedWidth`/`MainSurfaceWidth`/`MainMedianWidth`/`MainLaneCount` · ATGT · child Branch → Excel flatten `branchName`…`branchRadius` — **SA** giữ typed · **Q-XLS-BRANCH**.

## §C — Catalog / lookup

Unchanged prior LOOKUP_STATIC (province/interchangeType/status/side) + `road-route` + `org-unit` P2. Export **không** thêm catalogKind.

## §D — Map / vẽ

`none`

## §E — Empty / error / permission / export

| Case | UX |
|------|-----|
| Empty list export | File vẫn tải · 0 data row · header merge đúng mẫu · toast info OK |
| Export fail | toast · **cấm** silent · **cấm** CSV generic lưới |
| Import invalid typed / branch | toast · giữ map SA · **cấm** đổi entity |
| 0 nhánh | theo **Q-XLS-BRANCH** |
| Permission | Auth debt · **cấm** invent path |
| Toast stub only | **FAIL** DoD · **GAP-BIEU16-XLS-02** |

## §F — Cấm

- Demo / localStorage / seed giả làm SSOT runtime  
- ERP.* / Domains/Master / `api/v1/infra/*` / invent `api/v1/so-ts/*`  
- Toast stub = export done · filter-bar export (**GAP-FILTER-BAR-08**)  
- Golden hồ sơ 12+8 · invent sheet riêng nhánh  
- Flatten-only 1 nhánh mất data · merge peer so-ts-interchange / `road-assets` vào export  
- Re-open new_page typed CRUD · yarn build / e2e @ data_analy  

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
