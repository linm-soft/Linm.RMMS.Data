# PO — Requirement — csdl-bieu-01 (edit_page · T-XLS-S01 export/import)

| Field | Value |
|-------|-------|
| feature | `csdl-bieu-01` |
| title | CSDL Biểu 01 — Phân loại mặt đường · **Xuất/Nhập Excel** |
| this role | `po` · `/agent-po` |
| changeScope | **`edit_page`** (Wave 1 `T-XLS-S01` · keep typed CRUD) |
| packKind | **`list`** (**PO confirm**) |
| Feature Kind | **B** catalog A–D+F · **D** Slideout Z1–Z3 · **2col** · **cấm** Full-page form · **cấm** new_page typed reopen |
| resource | `pavement-sections` |
| formNo | `01` · title VN **Phân loại mặt đường** |
| columns | **38** (Excel Biểu 1 · **unchanged**) |
| IdCode | prefix **`MD`** · **cấm** Guid |
| peerSoTs | `pavement-section` — deep-link OK · **cấm** merge |
| gap | GAP-BIEU01-XLS-01…05 · GAP-BIEU01-SKIP-01 · GAP-FILTER-BAR-08 · GAP-CSDL-CUC-04 (đóng GAP-CSDL-XLS-01) · GAP-TYP-01 keep |
| mode | `feature_context` · hash-skip analy · epic `csdl-export-print` |
| status | `confirmed` (autoApprove=ON · task `task_3e372741`) |
| requestSource | queue CHAIN · roleOnly=`po` · prior data_analy **confirmed** `task_7168eb6e` |
| autoApprove | **ON** |
| e2eQa | **ON** — queued `/agent-qa*` · **cấm** e2e / start:std / build ở PO |
| prior · data_analy | done · control-hint + real-data · compact `handoff/data_analy-compact.md` · contentHash `sha256:b48e58e637a1dd4fc9e14298a0063d34c89eadb1ea02ba756b561b4648d4b085` · **cấm** re-scan demo (**GAP-PO-DEMO-RESCAN-01**) |
| prior · typed | PO/Design/SA/Dev/QA/Review **done** (`task_4ffaaf27`…`task_c53d69d9`) · CRUD live · **≠** export xong |
| productRoot | `D:/AI-QLBD/Linm.RMMS.Data` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| mfeStdRoute | `/so-ts/csdl-so-sach` · alias `/csdl-bieu-01` |
| mfeStdUrl | `http://localhost:9301/so-ts/csdl-so-sach` |
| hubDeepLink | `http://localhost:9301/so-ts/csdl-so-sach?resource=pavement-sections` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · Asset · `api/v1/asset/csdl-records` · **cấm ERP.*** · **cấm** invent `api/v1/infra/*` |
| controlHint | `D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/csdl-bieu-01-control-hint.md` |
| realData | `D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/csdl-bieu-01-real-data.md` |
| epicCite | `docs/context/features/csdl-export-print.md` · Wave 1 `T-XLS-S01` |
| contentHash | `sha256:b48e58e637a1dd4fc9e14298a0063d34c89eadb1ea02ba756b561b4648d4b085` |
| headerFingerprint | `sha256:6376475bbf48ca5b3e8cfd26688cd877fd1bc77d5b8d8c4c3d314cd0572f5cf2` |
| analyReuse | **hash skip** — **cấm** re-scan demo / crawl CTX (**GAP-PO-DEMO-RESCAN-01**) |
| taskId | `task_3e372741` · analy `task_7168eb6e` |
| updatedAt | `2026-09-17T17:55:00.000Z` |
| versionGate | `ok` |
| devSlashExport | `/implement-export-import-excel` · BFF binary |

**packKind confirm:** `list`. Keep Kind B A–D + Kind D Slideout typed 38 — **chỉ** delta toolbar + export/import API.

**Cấm:** implement · re-scan DEM · reopen typed CRUD new_page · toast stub = done · Xuất trên filter bar · golden hồ sơ 12+8 · ERP.* · yarn build/e2e/start:std ở PO · start role khác (**GAP-PKT-ROLE-01**).

## 1. Goal

Đóng **T-XLS-S01** / **GAP-CSDL-XLS-01** / **GAP-CSDL-CUC-04** trên Biểu 01 đã typed: **Xuất Excel** (+ **Nhập Excel**) đúng mẫu Cục sheet Biểu 1 · merge-header · 38 cột · BFF binary · **≠** toast stub.

Persona: Khu QLĐB · Văn phòng Cục · Ban QLDA (web).

**Delta pack này:**

1. Toolbar `catalogToolbar` **Xuất Excel** binary download — **GAP-BIEU01-XLS-01/02**.
2. Toolbar **Nhập Excel** P1 (cùng wave) — file picker · upsert · skip-bridge.
3. Golden = Cục **16-sheet** `1. Biểu mẫu CSDL.xls` sheet Biểu 1 — **cấm** 12+8 — **GAP-BIEU01-XLS-03**.
4. **Cấm** Xuất/Import trên `LinErpListFilterBar` — **GAP-FILTER-BAR-08** / **GAP-BIEU01-XLS-04**.
5. API `GET …/export` · `POST …/import` — **GAP-BIEU01-XLS-05**.
6. Keep typed form/list/route/filter/CRUD — **cấm** reopen.

## 2. Current → New (`edit_page` · REQUIRED)

Nguồn SSOT: control-hint + real-data §A+§B · contentHash khớp STATUS · **không** crawl demo/CTX.

| Layer | Current (live / prior) | New (this pack) |
|-------|------------------------|-----------------|
| Form / list | Typed 38 · Slideout · grid **shipped** | **Unchanged** |
| Toolbar | Refresh · Add · History · Schema · View/Edit/Delete — **không** binary Xuất | **+ Xuất Excel** · **+ Nhập Excel** trên `catalogToolbar` |
| Filter Zone B | `LinErpListFilterBar` field+🔍 | **Unchanged** · **0** action Xuất/Import |
| Export | Toast / stub | `GET …/csdl-records/export?resource=pavement-sections` → binary mở được cạnh mẫu |
| Import | Missing / stub | `POST …/csdl-records/import?resource=pavement-sections` · skip-bridge |
| Golden | — / risk 12+8 | Cục 16-sheet sheet Biểu 1 · checksum 38 cột |
| Done gate | Typed STATUS done | **≠** export xong · file binary PASS |

**Không đổi:** API prefix · resource · Kind B A–D · Kind D Slideout · filter slots · IdCode `MD` · peer no-merge · **cấm ERP.*** · map=none.

### GAP IDs (P1 đóng trừ note)

| ID | New | P1 |
|----|-----|----|
| GAP-BIEU01-XLS-01 | Nút Xuất (+Import) toolbar | **YES** |
| GAP-BIEU01-XLS-02 | Binary BFF · **cấm** toast-only | **YES** |
| GAP-BIEU01-XLS-03 | Golden Cục 16-sheet | **YES** |
| GAP-BIEU01-XLS-04 / GAP-FILTER-BAR-08 | **Cấm** export trên filter | **YES** |
| GAP-BIEU01-XLS-05 | GET export · POST import | **YES** |
| GAP-BIEU01-SKIP-01 | Skip hàng cầu length âm khi import | **YES** (import engine) |
| GAP-CSDL-CUC-04 / GAP-CSDL-XLS-01 | Đóng epic Wave 1 S01 | **YES** |
| GAP-TYP-01 | label 13 · input D14/M16 | keep |
| Typed CRUD gaps | — | **CLOSED** · **cấm** reopen |

## 3. DoD (đo được)

1. Typed list/form **giữ** PASS — **cấm** regress 38 cột / Slideout / filter.
2. Zone B toolbar: **Xuất Excel** visible · click → download binary `.xls`/`.xlsx` mở được · header merge khớp Cục sheet Biểu 1 · 38 cột — **cấm** CSV generic · **cấm** toast-only (**GAP-BIEU01-XLS-02**).
3. Export scope = **filtered** set (QS filter hiện tại) — empty list → file 0 data row + header đúng · toast info OK.
4. Filename: `Bieu01_PhanLoaiMatDuong_{yyyyMMdd}.xls` (SA có thể bump extension nếu engine xlsx).
5. Zone B toolbar: **Nhập Excel** · chọn file Cục/template · upsert rows · response skip-bridge count — **cấm** ghi length âm.
6. Filter bar: **0** nút Xuất/Import/In/Config — chỉ field + 🔍 (**GAP-FILTER-BAR-08**).
7. Filter layout keep: `LinErpListFilterBar` · lấp hàng rồi wrap · 🔍 mép phải (**GAP-FILTER-WRAP-02**).
8. API live: `GET/POST …/csdl-records/export|import?resource=pavement-sections` qua BFF — **cấm** invent infra.
9. Golden checksum vs Cục 16-sheet — **cấm** hồ sơ 12+8.
10. Leave/dirty form **unchanged** — `LeaveConfirmModal` · **cấm** native alert/confirm.
11. `yarn build` / e2e / `start:std` **chỉ** Dev/QA.

## 4. CTX / DEM / DI (hash skip — **không** re-crawl)

| ID | Path | Loại |
|----|------|------|
| CTX-01 | `docs/context/features/csdl-bieu-01.md` | feature |
| CTX-02 | `docs/context/features/csdl-export-print.md` | epic Wave 1 |
| CTX-03 | `docs/context/features/csdl-so-sach.md` | hub |
| DA-01 | `specs/_data-analy/features/csdl-bieu-01-control-hint.md` | controlHint · **done** |
| DA-02 | `specs/_data-analy/features/csdl-bieu-01-real-data.md` | real-data §A+§B PASS |
| DA-03 | `specs/_data-analy/csdl-cuc-2026/ANALYSIS-AND-TASKS.md` | cluster |
| DEM | N/A (packet) · prior hub zone-only | **cấm** demo SSOT |
| DI-01 | `data-import/…/1. Biểu mẫu CSDL.xls` sheet Biểu 1 | **golden** |
| DI-STALE | Hồ sơ `4.1. In_Mẫu…xlsx` 12 biểu | so sánh only · **cấm** golden |
| MFE | `CsdlBieu01Page` · `fromCatalogToolbar` | wire export/import |
| BE | `CsdlCatalogRecordsController` | + export/import |
| keep | `specs/csdl-bieu-01/po|ui|be` prior typed | delta only |

## 5. controlHint (PO chốt · delta + cite keep)

### List filters — **unchanged**

| Field key | Label | controlHint | catalogKind | Notes |
|-----------|-------|-------------|-------------|-------|
| search | Tìm kiếm | `SearchTextInput` | text | |
| province | Tỉnh/TP | `Dropdown` | LOOKUP_STATIC | |
| status | Tình trạng | `Dropdown` | LOOKUP_STATIC | |
| roadCode | Đường | `SearchInput` | **road-route** | |
| kmFrom / kmTo | Từ/Đến Km | `Number` | — | |
| fromDate / toDate | Kỳ | Date pair | — | bar cluster |

### Form fields — **unchanged**

Cite prior typed 38 cột (`task_41122f1b` / prior PO) — **cấm** đổi controlHint form trong pack này.

### Actions (**delta**)

| Action | Surface | Notes |
|--------|---------|-------|
| export-excel | **catalogToolbar** | Label **Xuất Excel** · ToolbarButton · binary · filtered QS |
| import-excel | **catalogToolbar** | Label **Nhập Excel** · ToolbarButton + file · skip-bridge |
| create / view / edit / copy / delete / history / schema-config / refresh | Toolbar (keep) | Unchanged |
| save / cancel | Form footer | Unchanged · LeaveConfirmModal |
| print-pdf | — | **OUT** Wave 1 S01 |

### Real-data bind (**delta** + keep CRUD)

| Operation | Path |
|-----------|------|
| CRUD keep | `GET/POST/PUT/DELETE /web-bff/api/v1/asset/csdl-records` (+ `/{id}`) `?resource=pavement-sections` |
| **Export** | `GET /web-bff/api/v1/asset/csdl-records/export?resource=pavement-sections` (+ filter QS) |
| **Import** | `POST /web-bff/api/v1/asset/csdl-records/import?resource=pavement-sections` multipart |

API mirror: `api/v1/asset/csdl-records[/export|/import]` · **cấm** `/infra/`.

## 6. Grid list AC (REQUIRED · list)

| ID | AC |
|----|-----|
| AC-G-01…11 | **Keep** prior typed Grid AC (A–D · filter `LinErpListFilterBar` · lấp hàng rồi wrap · 🔍 mép phải · typed cols · pagination · UiSchema · empty VN · toast) |
| AC-G-12 | Toolbar FULL keep + **Xuất Excel** + **Nhập Excel** trên `catalogToolbar` — **cấm** stub toast-only · **cấm** đặt trên filter (**GAP-FILTER-BAR-08**) |
| AC-G-13 | Grid flow keep: sort · filter cột · chọn dòng · row menu |
| AC-G-14 | Typed 38 cols keep — **cấm** regress detail* |
| AC-G-15 | Export empty → file header-only OK |
| AC-G-16 | Import summary: upsert + skip-bridge count |

### Report AC

**N/A** — packKind `list`.

## 7. Screens (REQUIRED)

| Surface | Pattern | FormMode | URL | Actions | devSlash |
|---------|---------|----------|-----|---------|----------|
| S-LIST | Kind **B** A–D+F | filter | hub + alias | filter · CRUD toolbar · **Xuất** · **Nhập** | `/agent-dev` + `/implement-export-import-excel` |
| S-FORM-* | Kind **D Slideout** | create/edit/view/copy | overlay | keep typed | `/agent-dev` |
| S-ACT-DELETE | Confirm modal | — | — | soft delete | `/agent-dev` |
| S-XLS-EXPORT | toolbar action | — | download | binary file | `/implement-export-import-excel` |
| S-XLS-IMPORT | toolbar + file | — | multipart | upsert + skip count | `/implement-export-import-excel` |

**tabs:** none (1 list surface + slideout overlay).

**Cấm** Full-page form · **cấm** GOVOne chrome.

## 8. Leave / alert (REQUIRED)

| Case | Control | Cấm |
|------|---------|-----|
| Form dirty · đóng / navigate | `LeaveConfirmModal` | native `confirm` |
| API 4xx/5xx CRUD | `useAppToast` | `window.alert` |
| Export fail | toast error | silent / fake blob |
| Export empty | toast info + file header | fake rows |
| Import validation | toast + skip count | ghi length âm |
| Delete | Confirm Modal | native `confirm` |

## 9. Open questions — Autopilot chốt

| ID | Question | Decision (PO) |
|----|----------|----------------|
| Q-XLS-SCOPE | filtered vs all_resource? | **`filtered`** — export theo QS filter hiện tại (kể cả empty→0 row). |
| Q-XLS-IMPORT | import_now vs export_only_p0? | **`import_now`** — P1 cùng wave với Xuất (epic Wave 1 pattern). |
| Q-XLS-FILENAME | Tên file? | **`Bieu01_PhanLoaiMatDuong_{yyyyMMdd}.xls`** — SA được bump `.xlsx` nếu engine chốt. |
| packKind | list? | **Confirm `list`**. |
| Prior Q-WIDTH/STRUCT/ROUTE/PROV | — | **keep** prior · **cấm** reopen. |

UNCLEAR sau chốt = **none**.

## 10. Out of scope

- Reopen typed CRUD / đổi 38 cột không gap
- Print PDF sổ Word (Wave 2)
- Golden hồ sơ 12+8
- Xuất trên filter bar
- Auth NuGet wire
- yarn build / e2e / start:std ở PO
- Start Design/SA/Dev trong cùng task (**GAP-PKT-ROLE-01**)
- Step 4b / migration (SA/Dev)
- `--rescan` demo (**GAP-PO-DEMO-RESCAN-01**)

## 11. Handoff → Design (`/agent-design`)

| Field | Value |
|-------|-------|
| packKind confirm | **`list`** |
| changeScope | `edit_page` · T-XLS-S01 |
| Prototype | **Giữ** typed prototype · **chỉ** thêm Xuất (+Nhập) trên toolbar · cập nhật reviewUrl zone |
| reviewUrl | prior `ui/prototype/csdl-bieu-01-list-prototype.html` · Design delta |
| controlHint | §5 · cite DA-01 |
| Screens | §7 · Grid AC §6 · Leave §8 |
| grid_standard | keep · filter-bar-layout-hard · **GAP-FILTER-BAR-08** |
| peerStdUrl | `http://localhost:9301/so-ts/csdl-so-sach?resource=pavement-sections` |
| mfeStdUrl | `http://localhost:9301/so-ts/csdl-so-sach` |
| BE | export/import paths §5 · **cấm** ERP/infra |
| Q chốt | SCOPE=filtered · IMPORT=import_now · FILENAME=Bieu01_…_{yyyyMMdd}.xls |
| Next | design → sa → team-lead → dev → qa → review = **pending** · chain ON · autoApprove |
| e2e | queued `/agent-qa*` only |
| blockedReason | — |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-po |
| skillVersion | 2026.09.05.03 |
| schemaVersion | 1 |
| workflowVersion | 2026.09.05.03 |
| rulesVersion | 2026.09.17.3 |
| generatedAt | 2026-09-17T17:55:00.000Z |
| versionGate | ok |
| contentHashPriorDataAnaly | sha256:b48e58e637a1dd4fc9e14298a0063d34c89eadb1ea02ba756b561b4648d4b085 |
| headerFingerprintPrior | sha256:6376475bbf48ca5b3e8cfd26688cd877fd1bc77d5b8d8c4c3d314cd0572f5cf2 |
| dataAnalySkillVersion | 2026.09.05.03 |
| dataAnalyWorkflowVersion | 2026.09.05.03 |
| dataAnalyRulesVersion | 2026.09.17.3 |
| taskId | `task_3e372741` |
| packKind | list |
| changeScope | edit_page |

---
<!-- Version meta: skillId=agent-po skillVersion=2026.09.05.03 schemaVersion=1 workflowVersion=2026.09.05.03 rulesVersion=2026.09.17.3 versionGate=ok contentHash=sha256:b48e58e637a1dd4fc9e14298a0063d34c89eadb1ea02ba756b561b4648d4b085 changeScope=edit_page taskId=task_3e372741 -->
