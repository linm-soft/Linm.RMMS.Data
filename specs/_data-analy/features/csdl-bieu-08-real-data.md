# Real-data bind — csdl-bieu-08 (edit_page · T-XLS-S08 export/import)

| | |
|---|---|
| feature | `csdl-bieu-08` |
| packKind | `list` |
| changeScope | `edit_page` |
| status | `done` |
| taskId | `task_774ebbde` |
| priorTask | `task_a21c4937` → review `task_fdb010e9` (typed CRUD **done** · **cấm** reopen new_page) |
| resource | `traffic-safety` |
| prefix | **live** `api/v1/asset/csdl-records` · BFF `web-bff/api/v1/asset/csdl-records` |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · **cấm ERP.*** · **cấm** `api/v1/infra/*` |
| uiRepo | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| mfeStdUrl | `http://localhost:9301/so-ts/csdl-so-sach` · alias `/csdl-bieu-08` · hub `?resource=traffic-safety` |
| map | `none` |
| contentHash | `sha256:639566df4ddccc3927311d5618bf4e7c1dbad0dac80962c414f861dacc9d5e9c` |
| headerFingerprint | `sha256:ba8b8db4f7637ee32cfd4a882b6abdc774c538f6c9812c3ecd1d13f6151cdd6f` |
| sourceTables | typed `Schema_CsdlBieu8` + 11 children · **không** bảng report store P1 |
| catalogKind UI schema | `traffic-safety` |
| IdCode prefix | `AT` |
| epicCite | `docs/context/features/csdl-export-print.md` · Wave 1 `T-XLS-S08` |
| golden | Cục `1. Biểu mẫu CSDL.xls` sheet Biểu 8 · **cấm** hồ sơ 12+8 |
| devSlash | `/implement-export-import-excel` · BFF binary |

## § Delta Current vs New (`edit_page` · `task_774ebbde`)

| ID | Current live | New (this analy) |
|----|--------------|------------------|
| Form / list | Typed 45/11 · Slideout + grid **shipped** | **Unchanged** |
| Toolbar | Refresh · Add · History · Schema · View/Edit/Delete — **không** Xuất | **Xuất Excel** (+ Import P1) trên `catalogToolbar` |
| Filter | `LinErpListFilterBar` field+🔍 | **Unchanged** · **cấm** action Xuất (**GAP-FILTER-BAR-08**) |
| Export API | Missing / stub | `GET …/csdl-records/export?resource=traffic-safety` → binary (epic cite · SA) |
| Import API | Missing / stub | `POST …/csdl-records/import?resource=traffic-safety` (P1) |
| Golden | — | Cục 16-sheet · sheet Biểu 8 · checksum 45 cột · **cấm** 1 hàng kéo ngang lệch mẫu |
| Done gate | Typed STATUS done | **≠** export xong · cần file mở được cạnh mẫu |

## §A — Nguồn

| sourceKind | sourceCite | empty | error |
|------------|------------|-------|-------|
| `context` | `docs/context/features/csdl-bieu-08.md` | — | version gate |
| `context` | `docs/context/features/csdl-export-print.md` § Wave 1 · API | — | golden / toolbar rules |
| `analy` | `specs/_data-analy/csdl-cuc-2026/ANALYSIS-AND-TASKS.md` Biểu 8 | — | 45 cột · 11 nhóm |
| `api` · list/CRUD | `GET/POST/PUT/DELETE …/csdl-records?resource=traffic-safety` (+ `type=`) | empty grid VN | toast 4xx |
| `api` · **export** | `GET …/csdl-records/export?resource=traffic-safety` (epic · SA chốt) | file 0 row OK | toast · **cấm** fake blob |
| `api` · **import** | `POST …/csdl-records/import?resource=traffic-safety` | — | validation · child/`type=` |
| `entity` | `CsdlBieu8*` + 11 children | — | CompanyCode tenant · **cấm** wide |
| `mfe` | `CsdlBieu08Page` · `fromCatalogToolbar` | — | wire export action |
| `excel` | `1. Biểu mẫu CSDL.xls` sheet Biểu 8 | — | golden · not runtime SSOT |
| `excel` | Hồ sơ `4.1. In_Mẫu…xlsx` 12 biểu | — | **STALE** · so sánh only |
| `peer` | so-ts ATGT types | — | deep-link only · **cấm** bind export vào road-assets |

## §B — Bind field (HARD)

### B1 — CRUD fields (**unchanged** — keep prior bind)

Reuse prior §B (`task_a21c4937`): `resource` · filters · shared + 11 child · soft-delete. **Cấm** đổi write paths typed trong pack này.

### B2 — Export / import (**delta**)

| uiField / action | Label | controlHint | catalogKind | GET / POST | write field | sameMfe |
|------------------|-------|-------------|-------------|------------|-------------|---------|
| exportExcel | Xuất Excel | ToolbarButton | — | `GET …/export?resource=traffic-safety` (+ filter QS nếu Q-XLS-SCOPE=filtered) | — (download) | **gap** (thiếu nút) |
| importExcel | Nhập Excel | ToolbarButton + file | — | `POST …/import?resource=traffic-safety` multipart | upsert typed + child | **gap** P1 |
| exportFileName | — | derived | — | Content-Disposition | — | SA |
| typeScope | assetType | derived | — | QS / row map | child columns | Q-XLS-TYPE |

**Prefix map (keep + delta):**

| Operation | Path |
|-----------|------|
| List / Detail / CRUD | `/web-bff/api/v1/asset/csdl-records` (+ `/{id}`) — **keep** |
| **Export** | `GET /web-bff/api/v1/asset/csdl-records/export?resource=traffic-safety` |
| **Import** | `POST /web-bff/api/v1/asset/csdl-records/import?resource=traffic-safety` |
| API mirror | `api/v1/asset/csdl-records[/export|/import]` · **cấm** invent `/infra/` |

## §C — Catalog / lookup

Unchanged prior LOOKUP_STATIC (province/status/side/assetType/…) + `road-route` + `org-unit` P2. Export **không** thêm catalogKind.

## §D — Map / vẽ

`none`

## §E — Empty / error / permission / export

| Case | UX |
|------|-----|
| Empty list export | File vẫn tải · 0 data row · header merge đúng mẫu · toast info OK |
| Export fail | toast · **cấm** silent · **cấm** CSV generic lưới |
| Import child mismatch | toast · **cấm** ép 1 entity wide 45 |
| Permission | Auth debt · **cấm** invent path |
| Toast stub only | **FAIL** DoD · **GAP-BIEU08-XLS-02** |

## §F — Cấm

- Re-run typed CRUD `new_page` / đổi form 45/11 không gap  
- Toast stub = done · STATUS typed done = export xong  
- Xuất/Import trên filter bar (**GAP-FILTER-BAR-08**)  
- Golden = hồ sơ 12+8  
- 1 hàng kéo ngang lệch mẫu Cục · invent 11 sheet  
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
| contentHash | `sha256:639566df4ddccc3927311d5618bf4e7c1dbad0dac80962c414f861dacc9d5e9c` |
| headerFingerprint | `sha256:ba8b8db4f7637ee32cfd4a882b6abdc774c538f6c9812c3ecd1d13f6151cdd6f` |
| generatedAt | 2026-09-18T04:55:00.000Z |
| versionGate | ok |
| taskId | task_774ebbde |
| packKind | list |
| changeScope | edit_page |

---
<!-- Version meta: skillId=agent-data-analy skillVersion=2026.09.05.03 schemaVersion=2 workflowVersion=2026.09.05.03 rulesVersion=2026.09.17.3 versionGate=ok contentHash=sha256:639566df4ddccc3927311d5618bf4e7c1dbad0dac80962c414f861dacc9d5e9c changeScope=edit_page taskId=task_774ebbde -->
