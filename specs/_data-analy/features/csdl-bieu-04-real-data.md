# Real-data bind — csdl-bieu-04 (edit_page · T-XLS-S04 export/import)

| | |
|---|---|
| feature | `csdl-bieu-04` |
| packKind | `list` |
| changeScope | `edit_page` |
| status | `done` |
| taskId | `task_584ba7e8` |
| priorTask | `task_ea0d8d57` (typed CRUD **done** · **cấm** reopen new_page) |
| resource | `culverts` |
| prefix | **live** `api/v1/asset/csdl-records` · BFF `web-bff/api/v1/asset/csdl-records` |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · **cấm ERP.*** · **cấm** `api/v1/infra/*` |
| uiRepo | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| mfeStdUrl | `http://localhost:9301/so-ts/csdl-so-sach` · alias `/csdl-bieu-04` · hub `?resource=culverts` |
| map | `none` |
| contentHash | `sha256:eef182add5b68de5b3e27ec36ed9c099689831aeb77742814aa296bf286243f9` |
| headerFingerprint | `sha256:8b98f7a22739bdad37b67a7ef869d6c465edc38061f0d5853fe2e69758d4ccea` |
| sourceTables | typed `Schema_CsdlBieu4` / `rmms_csdl_bieu4` · **không** bảng report store P1 |
| catalogKind UI schema | `culverts` |
| IdCode prefix | `CG` |
| peerSoTs | `so-ts-culvert-x` · deep-link only · **cấm** gộp export |
| epicCite | `docs/context/features/csdl-export-print.md` · Wave 1 `T-XLS-S04` |
| golden | Cục `1. Biểu mẫu CSDL.xls` sheet Biểu 4 · **cấm** hồ sơ 12+8 |
| devSlash | `/implement-export-import-excel` · BFF binary |

## § Delta Current vs New (`edit_page` · `task_584ba7e8`)

| ID | Current live | New (this analy) |
|----|--------------|------------------|
| Form / list | Typed 17 cột Slideout + grid **shipped** · GPS/shape chốt | **Unchanged** |
| Toolbar | Refresh · Add · History · Schema · View/Edit/Delete — **không** Xuất | **Xuất Excel** (+ Import P1) trên `catalogToolbar` |
| Filter | `LinErpListFilterBar` field+🔍 | **Unchanged** · **cấm** action Xuất (**GAP-FILTER-BAR-08**) |
| Export API | Missing / stub · ExcelService Biểu 1–3 | `GET …/csdl-records/export?resource=culverts` → binary (epic · SA) |
| Import API | Missing / stub for Biểu 4 | `POST …/csdl-records/import?resource=culverts` (P1) |
| Golden | prior OUT XLS | Cục 16-sheet · sheet Biểu 4 · checksum **17** cột |
| Peer | `so-ts-culvert-x` deep-link | **Cấm** gộp cột/row Sổ TS vào file Biểu 4 |
| Done gate | Typed STATUS done | **≠** export xong · cần file mở được cạnh mẫu |

## §A — Nguồn

| sourceKind | sourceCite | empty | error |
|------------|------------|-------|-------|
| `context` | `docs/context/features/csdl-bieu-04.md` | — | version gate |
| `context` | `docs/context/features/csdl-export-print.md` § Wave 1 · API | — | golden / toolbar rules |
| `analy` | `specs/_data-analy/csdl-cuc-2026/ANALYSIS-AND-TASKS.md` Biểu 4 | — | 17 cột |
| `api` · list/CRUD | `GET/POST/PUT/DELETE …/csdl-records?resource=culverts` | empty grid VN | toast 4xx |
| `api` · **export** | `GET …/csdl-records/export?resource=culverts` (epic · SA chốt) | file 0 row OK | toast · **cấm** fake blob |
| `api` · **import** | `POST …/csdl-records/import?resource=culverts` | — | validation · 17 cột |
| `entity` | typed Biểu 4 / `Schema_CsdlBieu4` | — | CompanyCode tenant |
| `mfe` | `CsdlBieu04Page` · `fromCatalogToolbar` | — | wire export action |
| `excel` | `1. Biểu mẫu CSDL.xls` sheet Biểu 4 | — | golden · not runtime SSOT |
| `excel` | Hồ sơ `4.1. In_Mẫu…xlsx` 12 biểu | — | **STALE** · so sánh only |
| `peer` | `so-ts-culvert-x` · type `CULVERT_X` | — | deep-link only · **cấm** merge export |

## §B — Bind field (HARD)

### B1 — CRUD fields (**unchanged** — keep prior bind)

Reuse prior §B (`task_ea0d8d57`): `resource` · filters · typed 17 form fields · GPS four_xy · shape · soft-delete. **Cấm** đổi write paths typed trong pack này.

### B2 — Export / import (**delta**)

| uiField / action | Label | controlHint | catalogKind | GET / POST | write field | sameMfe |
|------------------|-------|-------------|-------------|------------|-------------|---------|
| exportExcel | Xuất Excel | ToolbarButton | — | `GET …/export?resource=culverts` (+ filter QS nếu Q-XLS-SCOPE=filtered) | — (download) | **gap** (thiếu nút) |
| importExcel | Nhập Excel | ToolbarButton + file | — | `POST …/import?resource=culverts` multipart | upsert typed rows | **gap** P1 |
| exportFileName | — | derived | — | Content-Disposition | — | SA |

**Prefix map (keep + delta):**

| Operation | Path |
|-----------|------|
| List / Detail / CRUD | `/web-bff/api/v1/asset/csdl-records` (+ `/{id}`) — **keep** |
| **Export** | `GET /web-bff/api/v1/asset/csdl-records/export?resource=culverts` |
| **Import** | `POST /web-bff/api/v1/asset/csdl-records/import?resource=culverts` |
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
| Peer Sổ TS | **cấm** mix row/cột CULVERT_X vào file Biểu 4 |
| Permission | Auth debt · **cấm** invent path |
| Toast stub only | **FAIL** DoD · **GAP-BIEU04-XLS-02** |

## §F — Cấm

- Re-run typed CRUD `new_page` / đổi form 17 cột không gap  
- Toast stub = done · STATUS typed done = export xong  
- Xuất/Import trên filter bar (**GAP-FILTER-BAR-08**)  
- Golden = hồ sơ 12+8  
- Gộp Sổ TS `so-ts-culvert-x` vào sheet Biểu 4  
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
| contentHash | `sha256:eef182add5b68de5b3e27ec36ed9c099689831aeb77742814aa296bf286243f9` |
| headerFingerprint | `sha256:8b98f7a22739bdad37b67a7ef869d6c465edc38061f0d5853fe2e69758d4ccea` |
| generatedAt | 2026-09-17T19:56:36.427Z |
| versionGate | ok |
| taskId | task_584ba7e8 |
| packKind | list |
| changeScope | edit_page |

---
<!-- Version meta: skillId=agent-data-analy skillVersion=2026.09.05.03 schemaVersion=2 workflowVersion=2026.09.05.03 rulesVersion=2026.09.17.3 versionGate=ok contentHash=sha256:eef182add5b68de5b3e27ec36ed9c099689831aeb77742814aa296bf286243f9 changeScope=edit_page taskId=task_584ba7e8 -->
