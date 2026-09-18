# Real-data bind — csdl-bieu-06 (edit_page · T-XLS-S06 export/import)

| | |
|---|---|
| feature | `csdl-bieu-06` |
| packKind | `list` |
| changeScope | `edit_page` |
| status | `done` |
| taskId | `task_4f26a959` |
| priorTask | `task_b6ef926c` (typed CRUD **done** · **cấm** reopen new_page) |
| resource | `underpasses` |
| prefix | **live** `api/v1/asset/csdl-records` · BFF `web-bff/api/v1/asset/csdl-records` |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · **cấm ERP.*** · **cấm** `api/v1/infra/*` |
| uiRepo | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| mfeStdUrl | `http://localhost:9301/so-ts/csdl-so-sach` · alias `/csdl-bieu-06` · hub `?resource=underpasses` |
| map | `none` |
| contentHash | `sha256:e32c48126fa0edbd02e612b7bd917a9ae07e53ec8629dbe01e1bcdcf82759fa3` |
| headerFingerprint | `sha256:3b2f5c531f0538509147846466d92090a3c8f5adc05a4be6d1dbb80ad73ff2a7` |
| sourceTables | typed `Schema_CsdlBieu6` / `rmms_csdl_bieu6` · **không** bảng report store P1 |
| catalogKind UI schema | `underpasses` |
| IdCode prefix | `HC` |
| peerSoTs | `so-ts-underpass` · deep-link only · **cấm** gộp export |
| epicCite | `docs/context/features/csdl-export-print.md` · Wave 1 `T-XLS-S06` |
| golden | Cục `1. Biểu mẫu CSDL.xls` sheet Biểu 6 · **cấm** hồ sơ 12+8 |
| devSlash | `/implement-export-import-excel` · BFF binary |

## § Delta Current vs New (`edit_page` · `task_4f26a959`)

| ID | Current live | New (this analy) |
|----|--------------|------------------|
| Form / list | Typed 19 cột Slideout + grid **shipped** · underpassKind/hộp KT chốt | **Unchanged** |
| Toolbar | Refresh · Add · History · Schema · View/Edit/Delete — **không** Xuất binary | **Xuất Excel** (+ Import P1) trên `catalogToolbar` |
| Filter | `LinErpListFilterBar` field+🔍 | **Unchanged** · **cấm** action Xuất (**GAP-FILTER-BAR-08**) |
| Export API | Missing / stub · peer Biểu 1–5 ExcelService | `GET …/csdl-records/export?resource=underpasses` → binary (epic · SA) |
| Import API | Missing / stub for Biểu 6 | `POST …/csdl-records/import?resource=underpasses` (P1) |
| Golden | prior OUT XLS | Cục 16-sheet · sheet Biểu 6 · checksum **19** cột |
| Peer | `so-ts-underpass` deep-link | **Cấm** gộp cột/row Sổ TS vào file Biểu 6 |
| Done gate | Typed STATUS done | **≠** export xong · cần file mở được cạnh mẫu |

## §A — Nguồn

| sourceKind | sourceCite | empty | error |
|------------|------------|-------|-------|
| `context` | `docs/context/features/csdl-bieu-06.md` | — | version gate |
| `context` | `docs/context/features/csdl-export-print.md` § Wave 1 · API | — | golden / toolbar rules |
| `analy` | `specs/_data-analy/csdl-cuc-2026/ANALYSIS-AND-TASKS.md` Biểu 6 | — | 19 cột |
| `api` · list/CRUD | `GET/POST/PUT/DELETE …/csdl-records?resource=underpasses` | empty grid VN | toast 4xx |
| `api` · **export** | `GET …/csdl-records/export?resource=underpasses` (epic · SA chốt) | file 0 row OK | toast · **cấm** fake blob |
| `api` · **import** | `POST …/csdl-records/import?resource=underpasses` | — | validation · 19 cột |
| `entity` | typed Biểu 6 / `Schema_CsdlBieu6` | — | CompanyCode tenant |
| `mfe` | `CsdlBieu06Page` · `fromCatalogToolbar` | — | wire export action |
| `excel` | `1. Biểu mẫu CSDL.xls` sheet Biểu 6 | — | golden · not runtime SSOT |
| `excel` | Hồ sơ `4.1. In_Mẫu…xlsx` 12 biểu | — | **STALE** · so sánh only |
| `peer` | `so-ts-underpass` · type `UNDERPASS` | — | deep-link only · **cấm** merge export |

## §B — Bind field (HARD)

### B1 — CRUD fields (**unchanged** — keep prior bind)

Reuse prior §B (`task_b6ef926c`): `resource` · filters · typed 19 form fields · underpassKind · kmPoint · soft-delete. **Cấm** đổi write paths typed trong pack này.

### B2 — Export / import (**delta**)

| uiField / action | Label | controlHint | catalogKind | GET / POST | write field | sameMfe |
|------------------|-------|-------------|-------------|------------|-------------|---------|
| exportExcel | Xuất Excel | ToolbarButton | — | `GET …/export?resource=underpasses` (+ filter QS nếu Q-XLS-SCOPE=filtered) | — (download) | **gap** (thiếu nút) |
| importExcel | Nhập Excel | ToolbarButton + file | — | `POST …/import?resource=underpasses` multipart | upsert typed rows | **gap** P1 |
| exportFileName | — | derived | — | Content-Disposition | — | SA |

**Prefix map (keep + delta):**

| Operation | Path |
|-----------|------|
| List / Detail / CRUD | `/web-bff/api/v1/asset/csdl-records` (+ `/{id}`) — **keep** |
| **Export** | `GET /web-bff/api/v1/asset/csdl-records/export?resource=underpasses` |
| **Import** | `POST /web-bff/api/v1/asset/csdl-records/import?resource=underpasses` |
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
| Peer Sổ TS | **cấm** mix row/cột UNDERPASS vào file Biểu 6 |
| Permission | Auth debt · **cấm** invent path |
| Toast stub only | **FAIL** DoD · **GAP-BIEU06-XLS-02** |

## §F — Cấm

- Re-run typed CRUD `new_page` / đổi form 19 cột không gap  
- Toast stub = done · STATUS typed done = export xong  
- Filter-bar export (**GAP-FILTER-BAR-08**)  
- Golden hồ sơ 12+8 · invent `api/v1/infra/*` · ERP.*  
- Gộp Sổ TS `so-ts-underpass` / `road-assets` vào sheet Biểu 6  
- yarn build / e2e ở role data_analy  

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-data-analy |
| skillVersion | 2026.09.05.03 |
| schemaVersion | 1 |
| workflowVersion | 2026.09.05.03 |
| rulesVersion | 2026.09.17.3 |
| contentHash | `sha256:e32c48126fa0edbd02e612b7bd917a9ae07e53ec8629dbe01e1bcdcf82759fa3` |
| headerFingerprint | `sha256:3b2f5c531f0538509147846466d92090a3c8f5adc05a4be6d1dbb80ad73ff2a7` |
| generatedAt | 2026-09-18T04:14:00.000Z |
| versionGate | ok |
| taskId | task_4f26a959 |
| packKind | list |
| changeScope | edit_page |

---
<!-- Version meta: skillId=agent-data-analy skillVersion=2026.09.05.03 schemaVersion=1 workflowVersion=2026.09.05.03 rulesVersion=2026.09.17.3 versionGate=ok contentHash=sha256:e32c48126fa0edbd02e612b7bd917a9ae07e53ec8629dbe01e1bcdcf82759fa3 -->
