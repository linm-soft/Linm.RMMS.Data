# Real-data bind — csdl-bieu-07 (edit_page · T-XLS-S07 export/import)

| | |
|---|---|
| feature | `csdl-bieu-07` |
| packKind | `list` |
| changeScope | `edit_page` |
| status | `done` |
| taskId | `task_9ab3979a` |
| priorTask | `task_480d8882` (typed CRUD **done** · **cấm** reopen new_page) |
| resource | `shoulders-fences` |
| prefix | **live** `api/v1/asset/csdl-records` · BFF `web-bff/api/v1/asset/csdl-records` |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · **cấm ERP.*** · **cấm** `api/v1/infra/*` |
| uiRepo | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| mfeStdUrl | `http://localhost:9301/so-ts/csdl-so-sach` · alias `/csdl-bieu-07` · hub `?resource=shoulders-fences` |
| map | `none` |
| contentHash | `sha256:1250b5799e9174b21429e60e57abef17cb7d6c568ae417840c57b598f204a69a` |
| headerFingerprint | `sha256:ba33856d00d23440b05be8c78c8b8a5462662c96a1067e702b791eb5020d64cf` |
| sourceTables | typed `Schema_CsdlBieu7` / `rmms_csdl_bieu7` · **không** bảng report store P1 |
| catalogKind UI schema | `shoulders-fences` |
| IdCode prefix | `LE` |
| peerSoTs | type `SHOULDER` · deep-link only · **cấm** gộp export |
| epicCite | `docs/context/features/csdl-export-print.md` · Wave 1 `T-XLS-S07` |
| golden | Cục `1. Biểu mẫu CSDL.xls` sheet Biểu 7 · **cấm** hồ sơ 12+8 |
| devSlash | `/implement-export-import-excel` · BFF binary |

## § Delta Current vs New (`edit_page` · `task_9ab3979a`)

| ID | Current live | New (this analy) |
|----|--------------|------------------|
| Form / list | Typed 20 cột Slideout + grid **shipped** · 3 khối chốt | **Unchanged** |
| Toolbar | Refresh · Add · History · Schema · View/Edit/Delete — **không** Xuất binary | **Xuất Excel** (+ Import P1) trên `catalogToolbar` |
| Filter | `LinErpListFilterBar` field+🔍 | **Unchanged** · **cấm** action Xuất (**GAP-FILTER-BAR-08**) |
| Export API | Missing / stub · peer Biểu 1–6 ExcelService | `GET …/csdl-records/export?resource=shoulders-fences` → binary (epic · SA) |
| Import API | Missing / stub for Biểu 7 | `POST …/csdl-records/import?resource=shoulders-fences` (P1) |
| Golden | prior OUT XLS | Cục 16-sheet · sheet Biểu 7 · checksum **20** cột |
| Peer | type `SHOULDER` deep-link | **Cấm** gộp cột/row Sổ TS vào file Biểu 7 |
| Done gate | Typed STATUS done | **≠** export xong · cần file mở được cạnh mẫu |

## §A — Nguồn

| sourceKind | sourceCite | empty | error |
|------------|------------|-------|-------|
| `context` | `docs/context/features/csdl-bieu-07.md` | — | version gate |
| `context` | `docs/context/features/csdl-export-print.md` § Wave 1 · API | — | golden / toolbar rules |
| `analy` | `specs/_data-analy/csdl-cuc-2026/ANALYSIS-AND-TASKS.md` Biểu 7 | — | 20 cột · 3 khối |
| `api` · list/CRUD | `GET/POST/PUT/DELETE …/csdl-records?resource=shoulders-fences` | empty grid VN | toast 4xx |
| `api` · **export** | `GET …/csdl-records/export?resource=shoulders-fences` (epic · SA chốt) | file 0 row OK | toast · **cấm** fake blob |
| `api` · **import** | `POST …/csdl-records/import?resource=shoulders-fences` | — | validation · 20 cột |
| `entity` | typed Biểu 7 / `Schema_CsdlBieu7` | — | CompanyCode tenant |
| `mfe` | `CsdlBieu07Page` · `fromCatalogToolbar` | — | wire export action |
| `excel` | `1. Biểu mẫu CSDL.xls` sheet Biểu 7 | — | golden · not runtime SSOT |
| `excel` | Hồ sơ `4.1. In_Mẫu…xlsx` 12 biểu | — | **STALE** · so sánh only |
| `peer` | type `SHOULDER` · so-ts-type-grid | — | deep-link only · **cấm** merge export |

## §B — Bind field (HARD)

### B1 — CRUD fields (**unchanged** — keep prior bind)

Reuse prior §B (`task_480d8882`): `resource` · filters · typed 20 form fields · 3 khối · soft-delete. **Cấm** đổi write paths typed trong pack này.

### B2 — Export / import (**delta**)

| uiField / action | Label | controlHint | catalogKind | GET / POST | write field | sameMfe |
|------------------|-------|-------------|-------------|------------|-------------|---------|
| exportExcel | Xuất Excel | ToolbarButton | — | `GET …/export?resource=shoulders-fences` (+ filter QS nếu Q-XLS-SCOPE=filtered) | — (download) | **gap** (thiếu nút) |
| importExcel | Nhập Excel | ToolbarButton + file | — | `POST …/import?resource=shoulders-fences` multipart | upsert typed rows | **gap** P1 |
| exportFileName | — | derived | — | Content-Disposition | — | SA |

**Prefix map (keep + delta):**

| Operation | Path |
|-----------|------|
| List / Detail / CRUD | `/web-bff/api/v1/asset/csdl-records` (+ `/{id}`) — **keep** |
| **Export** | `GET /web-bff/api/v1/asset/csdl-records/export?resource=shoulders-fences` |
| **Import** | `POST /web-bff/api/v1/asset/csdl-records/import?resource=shoulders-fences` |
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
| Peer Sổ TS | **cấm** mix row/cột SHOULDER vào file Biểu 7 |
| Permission | Auth debt · **cấm** invent path |
| Toast stub only | **FAIL** DoD · **GAP-BIEU07-XLS-02** |

## §F — Cấm

- Re-run typed CRUD `new_page` / đổi form 20 cột không gap  
- Toast stub = done · STATUS typed done = export xong  
- Filter-bar export (**GAP-FILTER-BAR-08**)  
- Golden hồ sơ 12+8 · invent `api/v1/infra/*` · ERP.*  
- Gộp Sổ TS `SHOULDER` / `road-assets` vào sheet Biểu 7  
- yarn build / e2e ở role data_analy  

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-data-analy |
| skillVersion | 2026.09.05.03 |
| schemaVersion | 1 |
| workflowVersion | 2026.09.05.03 |
| rulesVersion | 2026.09.17.3 |
| contentHash | `sha256:1250b5799e9174b21429e60e57abef17cb7d6c568ae417840c57b598f204a69a` |
| headerFingerprint | `sha256:ba33856d00d23440b05be8c78c8b8a5462662c96a1067e702b791eb5020d64cf` |
| generatedAt | 2026-09-18T04:22:00.000Z |
| versionGate | ok |
| taskId | task_9ab3979a |
| packKind | list |
| changeScope | edit_page |

---
<!-- Version meta: skillId=agent-data-analy skillVersion=2026.09.05.03 schemaVersion=1 workflowVersion=2026.09.05.03 rulesVersion=2026.09.17.3 versionGate=ok contentHash=sha256:1250b5799e9174b21429e60e57abef17cb7d6c568ae417840c57b598f204a69a -->
