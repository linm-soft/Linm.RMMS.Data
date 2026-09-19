# PO — Requirement — csdl-bieu-10 (Biểu 10 — Kè, tường chắn · edit_page · T-XLS-S10)

| Field | Value |
|-------|-------|
| feature | `csdl-bieu-10` |
| title | CSDL Biểu 10 — Kè, tường chắn · Xuất/Nhập Excel |
| this role | `po` · `/agent-po` |
| changeScope | **`edit_page`** (Wave 1 `T-XLS-S10` · **giữ** typed CRUD · **cấm** reopen `new_page`) |
| packKind | **`list`** (**PO confirm**) · Kind B list A–D + Kind D Slideout |
| Feature Kind | **B** catalog · **D** Slideout · **cấm** Full-page · **cấm** report pack |
| resource | `retaining-walls` |
| formNo | `10` · title VN **Kè, tường chắn** |
| columns | **21** · 2 section UX tường + rãnh đỉnh (cùng schema · **cấm** 2 entity / 2 sheet invent) |
| IdCode | prefix **`KE`** · **cấm** Guid |
| peerSoTs | `so-ts-retaining` · type `RETAINING` · toolbar deep-link · **≠** merge · **GAP-CSDL-CUC-11** |
| gap | GAP-BIEU10-XLS-01…07 · GAP-FILTER-BAR-08 · (typed GAP closed @ prior review) |
| mode | `feature_context` · hash-skip analy · **cấm** re-scan demo (**GAP-PO-DEMO-RESCAN-01**) |
| status | `confirmed` (autoApprove=ON · task `task_f96b7dc8`) |
| requestSource | queue CHAIN `/agent-qldb-workflow` · roleOnly=`po` · prior data_analy **confirmed** `task_0fb02546` |
| autoApprove | **ON** — Design/SA/Review tự confirm khi tới lượt |
| e2eQa | **ON** — queued `/agent-qa*` · **cấm** e2e / `yarn start:std` / `yarn build` @ PO |
| prior · data_analy | status=`confirmed` · compact `handoff/data_analy-compact.md` · control-hint + real-data · contentHash `sha256:49ea64d3b8f51e899c4bb36ae444444b4c0a805e64349f8e1f52677909ab0302` · headerFingerprint `sha256:9d4863dcab46439966e526cc7696f137695022911a3edc5066c852dc779fa598` |
| prior · typed | review `task_faf3807e` **PASS** · **cấm** re-CRUD typed |
| productRoot | `D:/AI-QLBD/Linm.RMMS.Data` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| mfeStdRoute | `/so-ts/csdl-so-sach` · alias `/csdl-bieu-10` |
| mfeStdUrl | `http://localhost:9301/so-ts/csdl-so-sach` |
| hubDeepLink | `http://localhost:9301/so-ts/csdl-so-sach?resource=retaining-walls` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · Asset · `api/v1/asset/csdl-records` · **cấm ERP.*** · **cấm** invent `api/v1/infra/*` |
| domain | **Asset** |
| be_repo_confirm | `approve` |
| ui_repo_confirm | `approve` |
| controlHint | `D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/csdl-bieu-10-control-hint.md` |
| realData | `D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/csdl-bieu-10-real-data.md` |
| epicCite | `docs/context/features/csdl-export-print.md` · `T-XLS-S10` |
| devSlash | `/implement-export-import-excel` · BFF binary |
| contentHash | `sha256:49ea64d3b8f51e899c4bb36ae444444b4c0a805e64349f8e1f52677909ab0302` |
| headerFingerprint | `sha256:9d4863dcab46439966e526cc7696f137695022911a3edc5066c852dc779fa598` |
| analyReuse | **hash skip** — **cấm** re-scan demo / crawl CTX (**GAP-PO-DEMO-RESCAN-01**) |
| taskId | `task_f96b7dc8` · analy `task_0fb02546` · typed prior `task_c6ef9738`…`task_faf3807e` |
| updatedAt | `2026-09-18T06:14:00.000Z` |
| versionGate | `ok` (skill/schema/workflow khớp analy · pack `po/list@session`) |

**packKind confirm:** `list`. Kind B + Kind D Slideout trên MFE Asset `:9301` — **không** report · **không** map.

**Cấm:** implement @ PO · re-scan demo · toast stub = done · Xuất trên filter bar · golden hồ sơ 12+8 · invent 2 sheet tường/rãnh · reopen typed `new_page` · ERP.* · invent infra · yarn build/e2e/start:std @ PO · start role khác (**GAP-PKT-ROLE-01**).

## 1. Goal

Chốt requirement **edit_page** Wave 1 **`T-XLS-S10`**: toolbar **Xuất Excel** (+ **Nhập Excel**) binary đúng sheet Biểu 10 (Cục 16-sheet) · **giữ** typed list+Slideout 21 cột · 2 section tường + rãnh đỉnh · API CRUD prefix · map `heightM`↔`WidthM`.

Persona: Khu QLĐB · Văn phòng Cục · Ban QLDA (web).

**Keep (typed closed — không reopen):** form/list/route/IdCode/filters/Slideout/LeaveConfirm · Schema_CsdlBieu10 · 21 cols · 2 section UX · peer `so-ts-retaining` deep-link · formNo 10 · prior Q-ROUTE/PROV/KIND/… decisions.

**Delta pack này:**

1. **Xuất Excel** trên `catalogToolbar` → file binary sheet Biểu 10 · merge-header 21 · **cấm** toast-only (**GAP-BIEU10-XLS-01/02**).
2. **Nhập Excel** P1 cùng task · template Cục · upsert typed (**Q-XLS-IMPORT** = `import_now`).
3. Golden = Cục **16-sheet** xls sheet Biểu 10 · **cấm** 12+8 (**GAP-BIEU10-XLS-03**).
4. **Cấm** Xuất/Import trên `LinErpListFilterBar` (**GAP-BIEU10-XLS-04** / **GAP-FILTER-BAR-08**).
5. API: `GET …/export?resource=retaining-walls` · `POST …/import?resource=retaining-walls` (**GAP-BIEU10-XLS-05**).
6. Export **1 sheet** 21 cột · crest* cùng hàng · **cấm** invent 2 sheet (**GAP-BIEU10-XLS-06**).
7. Export/import map `heightM`↔`WidthM` giữ SA typed (**GAP-BIEU10-XLS-07** · **Q-XLS-HEIGHT** = `height_alias`).
8. Empty export: file vẫn tải · 0 data row · header đúng mẫu.

## 2. Current → New (`edit_page` · REQUIRED)

Nguồn SSOT: control-hint + real-data §A+§B · contentHash khớp STATUS · **không** crawl demo/CTX lại.

| Layer | Current (live / typed) | New (this pack) |
|-------|------------------------|-----------------|
| Form / list | Typed 21 · 2 section tường+rãnh · Slideout + grid **shipped** | **Unchanged** |
| Toolbar | Refresh · Add · History · Schema · row CRUD · peer — **không** Xuất binary | **+ Xuất Excel** · **+ Nhập Excel** trên `catalogToolbar` |
| Filter | `LinErpListFilterBar` field+🔍 (+ `wallKind`) | **Unchanged** · **0** action Xuất |
| Export API | Missing / stub | `GET …/csdl-records/export?resource=retaining-walls` (+ filter QS) |
| Import API | Missing / stub | `POST …/csdl-records/import?resource=retaining-walls` multipart |
| Golden | — / STALE 12+8 | Cục 16-sheet · sheet Biểu 10 · checksum 21 |
| heightM | UI heightM ↔ DB WidthM typed | Export/import giữ map · **cấm** đổi entity |
| Done gate | Typed STATUS done | **≠** export xong · file mở được cạnh mẫu |

**Không đổi:** Kind B A–D · Kind D Slideout · filter slots · prefix `api/v1/asset/csdl-records` · resource `retaining-walls` · IdCode `KE` · formNo `10` · peer deep-link · **cấm ERP.*** · map = none.

### Header (21 — không thêm ngoài)

`code|roadCode|roadName|province|kmFrom|kmTo|side|wallKind|structure|material|lengthM|heightM|areaM2|crestDitchKind|crestDitchStructure|crestDitchShape|crestDitchLengthM|inServiceYear|status|manageUnit|notes`

### GAP IDs (P1 trừ ghi chú)

| ID | New | P1 |
|----|-----|----|
| GAP-BIEU10-XLS-01 | Toolbar Xuất Excel binary sheet Biểu 10 | **YES** |
| GAP-BIEU10-XLS-02 | BFF binary · **cấm** toast stub done | **YES** |
| GAP-BIEU10-XLS-03 | Golden Cục 16-sheet · cấm 12+8 | **YES** |
| GAP-BIEU10-XLS-04 | GAP-FILTER-BAR-08 · cấm filter export | **YES** |
| GAP-BIEU10-XLS-05 | GET export / POST import path | **YES** |
| GAP-BIEU10-XLS-06 | 1 sheet 21 · crest cùng hàng · cấm 2 sheet | **YES** |
| GAP-BIEU10-XLS-07 | Export map heightM↔WidthM giữ SA | **YES** |
| Typed GAP-* | Closed prior review | **KEEP** · **cấm** reopen |

## 3. Decisions (autoApprove · chốt)

| ID | Decision | Rationale |
|----|----------|-----------|
| **Q-XLS-SCOPE** | **`filtered`** | Export theo filter list hiện tại (gồm `wallKind`/road/province/…) · peer Wave 1 S09 |
| **Q-XLS-IMPORT** | **`import_now`** | Wave 1 · epic Import P1 cùng task · peer S09 |
| **Q-XLS-FILENAME** | **`Bieu10_KeTuongChan_{yyyyMMdd}.xls`** | Label formNo 10 · SA có thể `.xlsx` nếu engine chốt |
| **Q-XLS-HEIGHT** | **`height_alias`** | Excel cột «cao» = UI `heightM` · BE map ↔ `WidthM` · **cấm** đổi entity |
| packKind | **`list`** | confirm |
| formPattern | **Slideout** keep | **cấm** new_page CRUD |
| Grid AC | **keep** + toolbar Xuất/Nhập | Report AC **N/A** |
| Leave | **LeaveConfirmModal** keep | **cấm** native alert |

Open questions: **none** (autopilot chốt). Prior typed Q-* **keep**.

## 4. Screens / zones

| Screen / zone | Pattern | DoD |
|---------------|---------|-----|
| DES-GRID-A | Header «Biểu 10 — Kè, tường chắn» · back hub | Keep |
| DES-GRID-B toolbar | `catalogToolbar` | **+exportExcel** · **+importExcel** · icon `erp-control-icon-map` · peer keep |
| DES-GRID-B filter | `LinErpListFilterBar` | Unchanged · **0** Xuất |
| DES-GRID-C/D | Grid + pagination | Unchanged · typed 21 · filter `wallKind` |
| Form Kind D | Slideout 2 section tường + rãnh đỉnh | Unchanged |
| S-XLS-EXPORT | Toolbar → download binary | File mở được · header merge 21 · height_alias |
| S-XLS-IMPORT | Toolbar → file picker → POST | Validation · wallKind/crest* · height map · toast lỗi |
| Map | none | — |

reviewUrl: prior prototype — Design **chỉ** delta nút toolbar · `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-bieu-10/ui/prototype/csdl-bieu-10-list-prototype.html`

## 5. Grid AC (list · keep + delta)

| AC | Expect |
|----|--------|
| G1 | List load `resource=retaining-walls` · filter `wallKind` · typed 21 **keep** |
| G2 | Toolbar có **Xuất Excel** · click → binary download · **cấm** toast-only |
| G3 | Toolbar có **Nhập Excel** · multipart import · toast lỗi validation |
| G4 | Filter bar **không** có Xuất/Import |
| G5 | Export tôn trọng filter QS (**filtered**) · empty → file 0 row + header đúng |
| G6 | Export **1 sheet** 21 cột · crest* cùng hàng · **cấm** invent 2 sheet |
| G7 | Export cột cao = `heightM` (alias) · BE ↔ `WidthM` |
| G8 | CRUD/Slideout/Leave/Copy/peer **keep** · **cấm** regress typed |

Report AC: **N/A**.

## 6. Leave / UX

- LeaveConfirmModal dirty form **keep**.
- Export/import fail → toast · **cấm** silent · **cấm** CSV generic lưới.
- Import height/Width mismatch → toast · giữ map SA · **cấm** đổi entity.
- Typography keep GAP-TYP-01 (label 13 · input D14/M16).

## 7. API / bind (cite real-data §B2)

| Op | Path |
|----|------|
| CRUD keep | `/web-bff/api/v1/asset/csdl-records` (+ `/{id}`) · `?resource=retaining-walls` |
| Export | `GET /web-bff/api/v1/asset/csdl-records/export?resource=retaining-walls` (+ filter QS) |
| Import | `POST /web-bff/api/v1/asset/csdl-records/import?resource=retaining-walls` |
| Mirror | `api/v1/asset/csdl-records[/export|/import]` · **cấm** `/infra/` |

## 8. Acceptance (DoD đo được)

1. Click **Xuất Excel** trên catalogToolbar → file `Bieu10_KeTuongChan_{yyyyMMdd}.xls` mở được · sheet Biểu 10 · merge-header 21.
2. Filter (vd. `wallKind`) → export chỉ tập đã lọc · vẫn **1 sheet** · crest* cùng hàng.
3. Empty list → file header đúng · 0 data row · toast info OK.
4. **Nhập Excel** P1 · template Cục · upsert typed · lỗi → toast.
5. Cột «cao» trong file = `heightM` · round-trip ↔ DB `WidthM`.
6. Filter bar **không** Xuất/Import · **cấm** toast-stub done.
7. Typed CRUD/Slideout/Leave **không regress**.

## 9. Handoff

| Role | Need |
|------|------|
| **Design** | Giữ prototype typed · **chỉ** +nút Xuất/Nhập trên `catalogToolbar` · reviewUrl · **cấm** filter export |
| **SA** | BFF binary path · golden 16-sheet checksum 21 · heightM↔WidthM · **cấm** đổi typed entity |
| **TL/Dev** | `/implement-export-import-excel` · wire toolbar · **cấm** re-CRUD typed · **cấm** filter-bar export |
| **QA** | scenarios S-XLS-EXPORT/IMPORT · e2e queued · **cấm** @ PO |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-po |
| skillVersion | 2026.09.05.03 |
| schemaVersion | 1 |
| workflowVersion | 2026.09.05.03 |
| rulesVersion | 2026.09.17.3 |
| contentHash | `sha256:49ea64d3b8f51e899c4bb36ae444444b4c0a805e64349f8e1f52677909ab0302` |
| headerFingerprint | `sha256:9d4863dcab46439966e526cc7696f137695022911a3edc5066c852dc779fa598` |
| generatedAt | 2026-09-18T06:14:00.000Z |
| versionGate | ok |
| taskId | task_f96b7dc8 |
| packKind | list |
| changeScope | edit_page |

---
<!-- Version meta: skillId=agent-po skillVersion=2026.09.05.03 schemaVersion=1 workflowVersion=2026.09.05.03 rulesVersion=2026.09.17.3 versionGate=ok contentHash=sha256:49ea64d3b8f51e899c4bb36ae444444b4c0a805e64349f8e1f52677909ab0302 changeScope=edit_page taskId=task_f96b7dc8 -->
