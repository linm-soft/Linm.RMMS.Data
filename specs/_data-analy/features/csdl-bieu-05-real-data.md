# Real-data bind — csdl-bieu-05 (edit_page · T-XLS-S05 export/import)

| | |
|---|---|
| feature | `csdl-bieu-05` |
| packKind | `list` |
| changeScope | `edit_page` |
| status | `done` |
| taskId | `task_a1caeb3f` |
| priorTask | `task_fdcb7c28` (typed CRUD **done** · **cấm** reopen new_page) |
| resource | `ditches` |
| prefix | **live** `api/v1/asset/csdl-records` · BFF `web-bff/api/v1/asset/csdl-records` |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · **cấm ERP.*** · **cấm** `api/v1/infra/*` |
| uiRepo | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| mfeStdUrl | `http://localhost:9301/so-ts/csdl-so-sach` · alias `/csdl-bieu-05` · hub `?resource=ditches` |
| map | `none` |
| contentHash | `sha256:9e3e8cf8e90fb3a3e8252d1725b78ea2494b171d3b7507d0a57b13c7052da728` |
| headerFingerprint | `sha256:008898723c0a5b94fae7de8810903b1dcc39ccfd0dfa5d4a36dd398eb088ac2f` |
| sourceTables | typed `Schema_CsdlBieu5` / `rmms_csdl_bieu5` · **không** bảng report store P1 |
| catalogKind UI schema | `ditches` |
| IdCode prefix | `RN` |
| peerSoTs | `so-ts-ditch` · deep-link only · **cấm** gộp export |
| epicCite | `docs/context/features/csdl-export-print.md` · Wave 1 `T-XLS-S05` |
| golden | Cục `1. Biểu mẫu CSDL.xls` sheet Biểu 5 · **cấm** hồ sơ 12+8 |
| devSlash | `/implement-export-import-excel` · BFF binary |

## § Delta Current vs New (`edit_page` · `task_a1caeb3f`)

| ID | Current live | New (this analy) |
|----|--------------|------------------|
| Form / list | Typed 18 cột Slideout + grid **shipped** · ditchKind/shape/range chốt | **Unchanged** |
| Toolbar | Refresh · Add · History · Schema · View/Edit/Delete — **không** Xuất binary | **Xuất Excel** (+ Import P1) trên `catalogToolbar` |
| Filter | `LinErpListFilterBar` field+🔍 | **Unchanged** · **cấm** action Xuất (**GAP-FILTER-BAR-08**) |
| Export API | Missing / stub · T-OUT-01 · ExcelService peer Biểu 1–4 | `GET …/csdl-records/export?resource=ditches` → binary (epic · SA) |
| Import API | Missing / stub for Biểu 5 | `POST …/csdl-records/import?resource=ditches` (P1) |
| Golden | prior OUT XLS | Cục 16-sheet · sheet Biểu 5 · checksum **18** cột |
| Peer | `so-ts-ditch` deep-link | **Cấm** gộp cột/row Sổ TS vào file Biểu 5 |
| Done gate | Typed STATUS done | **≠** export xong · cần file mở được cạnh mẫu |

## §A — Nguồn

| sourceKind | sourceCite | empty | error |
|------------|------------|-------|-------|
| `context` | `docs/context/features/csdl-bieu-05.md` | — | version gate |
| `context` | `docs/context/features/csdl-export-print.md` § Wave 1 · API | — | golden / toolbar rules |
| `analy` | `specs/_data-analy/csdl-cuc-2026/ANALYSIS-AND-TASKS.md` Biểu 5 | — | 18 cột |
| `api` · list/CRUD | `GET/POST/PUT/DELETE …/csdl-records?resource=ditches` | empty grid VN | toast 4xx |
| `api` · **export** | `GET …/csdl-records/export?resource=ditches` (epic · SA chốt) | file 0 row OK | toast · **cấm** fake blob |
| `api` · **import** | `POST …/csdl-records/import?resource=ditches` | — | validation · 18 cột |
| `entity` | typed Biểu 5 / `Schema_CsdlBieu5` | — | CompanyCode tenant |
| `mfe` | `CsdlBieu05Page` · `fromCatalogToolbar` | — | wire export action |
| `excel` | `1. Biểu mẫu CSDL.xls` sheet Biểu 5 | — | golden · not runtime SSOT |
| `excel` | Hồ sơ `4.1. In_Mẫu…xlsx` 12 biểu | — | **STALE** · so sánh only |
| `peer` | `so-ts-ditch` · type `DITCH` | — | deep-link only · **cấm** merge export |

## §B — Bind field (HARD)

### B1 — CRUD fields (**unchanged** — keep prior bind)

Reuse prior §B (`task_fdcb7c28`): `resource` · filters · typed 18 form fields · ditchKind · shape · kmFrom/kmTo · soft-delete. **Cấm** đổi write paths typed trong pack này.

### B2 — Export / import (**delta**)

| uiField / action | Label | controlHint | catalogKind | GET / POST | write field | sameMfe |
|------------------|-------|-------------|-------------|------------|-------------|---------|
| exportExcel | Xuất Excel | ToolbarButton | — | `GET …/export?resource=ditches` (+ filter QS nếu Q-XLS-SCOPE=filtered) | — (download) | **gap** (thiếu nút) |
| importExcel | Nhập Excel | ToolbarButton + file | — | `POST …/import?resource=ditches` multipart | upsert typed rows | **gap** P1 |
| exportFileName | — | derived | — | Content-Disposition | — | SA |

**Prefix map (keep + delta):**

| Operation | Path |
|-----------|------|
| List / Detail / CRUD | `/web-bff/api/v1/asset/csdl-records` (+ `/{id}`) — **keep** |
| **Export** | `GET /web-bff/api/v1/asset/csdl-records/export?resource=ditches` |
| **Import** | `POST /web-bff/api/v1/asset/csdl-records/import?resource=ditches` |
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
| Peer Sổ TS | **cấm** mix row/cột DITCH vào file Biểu 5 |
| Permission | Auth debt · **cấm** invent path |
| Toast stub only | **FAIL** DoD · **GAP-BIEU05-XLS-02** |

## §F — Cấm

- Re-run typed CRUD `new_page` / đổi form 18 cột không gap  
- Toast stub = done · STATUS typed done = export xong  
- Export trên `LinErpListFilterBar` (**GAP-FILTER-BAR-08**)  
- Golden = hồ sơ 12+8 · invent `api/v1/infra/*` · ERP.*  
- Gộp Sổ TS `so-ts-ditch` vào sheet Biểu 5  
- yarn build / e2e ở role data_analy  

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-data-analy |
| skillVersion | 2026.09.05.03 |
| schemaVersion | 1 |
| workflowVersion | 2026.09.05.03 |
| rulesVersion | 2026.09.17.3 |
| contentHash | `sha256:9e3e8cf8e90fb3a3e8252d1725b78ea2494b171d3b7507d0a57b13c7052da728` |
| headerFingerprint | `sha256:008898723c0a5b94fae7de8810903b1dcc39ccfd0dfa5d4a36dd398eb088ac2f` |
| generatedAt | 2026-09-17T20:36:21.087Z |
| versionGate | ok |
| taskId | task_a1caeb3f |
| packKind | list |
| changeScope | edit_page |

---
<!-- Version meta: skillId=agent-data-analy skillVersion=2026.09.05.03 schemaVersion=1 workflowVersion=2026.09.05.03 rulesVersion=2026.09.17.3 versionGate=ok contentHash=sha256:9e3e8cf8e90fb3a3e8252d1725b78ea2494b171d3b7507d0a57b13c7052da728 changeScope=edit_page taskId=task_a1caeb3f -->
