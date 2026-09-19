# PO — Requirement — csdl-bieu-09 (Biểu 09 — Mốc lộ giới / GPMB · edit_page · T-XLS-S09)

| Field | Value |
|-------|-------|
| feature | `csdl-bieu-09` |
| title | CSDL Biểu 09 — Mốc lộ giới / GPMB · Xuất/Nhập Excel |
| this role | `po` · `/agent-po` |
| changeScope | **`edit_page`** (Wave 1 `T-XLS-S09` · **giữ** typed CRUD · **cấm** reopen `new_page`) |
| packKind | **`list`** (**PO confirm**) · Kind B list A–D + Kind D Slideout |
| Feature Kind | **B** catalog · **D** Slideout · **cấm** Full-page · **cấm** report pack |
| resource | `boundary-markers` |
| formNo | `09` · title VN **Mốc lộ giới / GPMB** |
| columns | **17** · 2 khối UX `markerKind` (cùng schema · **cấm** 2 entity / 2 sheet invent) |
| IdCode | prefix **`MK`** · **cấm** Guid |
| peerSoTs | — · **≠** Sổ TS · **≠** `road-assets` · **GAP-CSDL-CUC-11** |
| gap | GAP-BIEU09-XLS-01…06 · GAP-FILTER-BAR-08 · GAP-EXP-STUB-01 · (typed GAP closed @ prior review) |
| mode | `feature_context` · hash-skip analy · **cấm** re-scan demo (**GAP-PO-DEMO-RESCAN-01**) |
| status | `confirmed` (autoApprove=ON · task `task_2a1b2790`) |
| requestSource | queue CHAIN `/agent-qldb-workflow` · roleOnly=`po` · prior data_analy **confirmed** `task_f4041b8e` |
| autoApprove | **ON** — Design/SA/Review tự confirm khi tới lượt |
| e2eQa | **ON** — queued `/agent-qa*` · **cấm** e2e / `yarn start:std` / `yarn build` @ PO |
| prior · data_analy | status=`confirmed` · compact `handoff/data_analy-compact.md` · control-hint + real-data · contentHash `sha256:58c012cef8ad07ae7a6d5e8ab513668c51dc0755d1f209783beb41ba1c4ccc01` · headerFingerprint `sha256:765521dee151f2ded36c582ca1a0b7ec048237b88cfc5b27481f09e6787e9a77` |
| prior · typed | review `task_a5fbb485` **PASS** · **cấm** re-CRUD typed |
| productRoot | `D:/AI-QLBD/Linm.RMMS.Data` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| mfeStdRoute | `/so-ts/csdl-so-sach` · alias `/csdl-bieu-09` |
| mfeStdUrl | `http://localhost:9301/so-ts/csdl-so-sach` |
| hubDeepLink | `http://localhost:9301/so-ts/csdl-so-sach?resource=boundary-markers` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · Asset · `api/v1/asset/csdl-records` · **cấm ERP.*** · **cấm** invent `api/v1/infra/*` |
| domain | **Asset** |
| be_repo_confirm | `approve` |
| ui_repo_confirm | `approve` |
| controlHint | `D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/csdl-bieu-09-control-hint.md` |
| realData | `D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/csdl-bieu-09-real-data.md` |
| epicCite | `docs/context/features/csdl-export-print.md` · `T-XLS-S09` |
| devSlash | `/implement-export-import-excel` · BFF binary |
| contentHash | `sha256:58c012cef8ad07ae7a6d5e8ab513668c51dc0755d1f209783beb41ba1c4ccc01` |
| headerFingerprint | `sha256:765521dee151f2ded36c582ca1a0b7ec048237b88cfc5b27481f09e6787e9a77` |
| analyReuse | **hash skip** — **cấm** re-scan demo / crawl CTX (**GAP-PO-DEMO-RESCAN-01**) |
| taskId | `task_2a1b2790` · analy `task_f4041b8e` · typed prior `task_cee30b17` / review `task_a5fbb485` |
| updatedAt | `2026-09-18T05:36:00.000Z` |
| versionGate | `ok` (skill/schema/workflow khớp analy · pack `po/list@session`) |

**packKind confirm:** `list`. Kind B + Kind D Slideout trên MFE Asset `:9301` — **không** report · **không** map.

**Cấm:** implement @ PO · re-scan demo · toast stub = done · Xuất trên filter bar · golden hồ sơ 12+8 · invent 2 sheet theo `markerKind` · reopen typed `new_page` · ERP.* · invent infra · yarn build/e2e/start:std @ PO · start role khác (**GAP-PKT-ROLE-01**).

## 1. Goal

Chốt requirement **edit_page** Wave 1 **`T-XLS-S09`**: toolbar **Xuất Excel** (+ **Nhập Excel**) binary đúng sheet Biểu 9 (Cục 16-sheet) · **giữ** typed list+Slideout 17 cột · 2 section `markerKind` · API CRUD prefix.

Persona: Khu QLĐB · Văn phòng Cục · Ban QLDA (web).

**Keep (typed closed — không reopen):** form/list/route/IdCode/filters/Slideout/LeaveConfirm · Schema_CsdlBieu9 · 17 cols · 2 section kind UX · peer ≠ Sổ TS.

**Delta pack này:**

1. **Xuất Excel** trên `catalogToolbar` → file binary sheet Biểu 9 · merge-header 17 · **cấm** toast-only (**GAP-BIEU09-XLS-01/02**).
2. **Nhập Excel** P1 cùng task · template Cục · upsert typed (**Q-XLS-IMPORT** = `import_now`).
3. Golden = Cục **16-sheet** xls sheet Biểu 9 · **cấm** 12+8 (**GAP-BIEU09-XLS-03**).
4. **Cấm** Xuất/Import trên `LinErpListFilterBar` (**GAP-BIEU09-XLS-04** / **GAP-FILTER-BAR-08**).
5. API: `GET …/export?resource=boundary-markers` · `POST …/import?resource=boundary-markers` (**GAP-BIEU09-XLS-05**).
6. Export **1 sheet** 17 cột · rows theo filter (gồm `markerKind`) · **cấm** invent 2 sheet (**GAP-BIEU09-XLS-06** · **Q-XLS-KIND** = `respect_filter`).
7. Empty export: file vẫn tải · 0 data row · header đúng mẫu.

## 2. Current → New (`edit_page` · REQUIRED)

Nguồn SSOT: control-hint + real-data §A+§B · contentHash khớp STATUS · **không** crawl demo/CTX lại.

| Layer | Current (live / typed) | New (this pack) |
|-------|------------------------|-----------------|
| Form / list | Typed 17 · 2 khối LG/GPMB · Slideout + grid **shipped** | **Unchanged** |
| Toolbar | Refresh · Add · History · Schema · row CRUD — **không** Xuất binary | **+ Xuất Excel** · **+ Nhập Excel** trên `catalogToolbar` |
| Filter | `LinErpListFilterBar` field+🔍 (+ `markerKind`) | **Unchanged** · **0** action Xuất |
| Export API | Missing / stub | `GET …/csdl-records/export?resource=boundary-markers` (+ filter QS) |
| Import API | Missing / stub | `POST …/csdl-records/import?resource=boundary-markers` multipart |
| Golden | — / STALE 12+8 | Cục 16-sheet · sheet Biểu 9 · checksum 17 |
| Done gate | Typed STATUS done | **≠** export xong · file mở được cạnh mẫu |

**Không đổi:** Kind B A–D · Kind D Slideout · filter slots · prefix `api/v1/asset/csdl-records` · resource `boundary-markers` · IdCode `MK` · formNo `09` · **cấm ERP.*** · map = none.

### GAP IDs (P1 trừ ghi chú)

| ID | New | P1 |
|----|-----|----|
| GAP-BIEU09-XLS-01 | Toolbar Xuất Excel binary sheet Biểu 9 | **YES** |
| GAP-BIEU09-XLS-02 | BFF binary · **cấm** toast stub done | **YES** |
| GAP-BIEU09-XLS-03 | Golden Cục 16-sheet · cấm 12+8 | **YES** |
| GAP-BIEU09-XLS-04 | GAP-FILTER-BAR-08 · cấm filter export | **YES** |
| GAP-BIEU09-XLS-05 | GET export / POST import path | **YES** |
| GAP-BIEU09-XLS-06 | 1 sheet · respect_filter · cấm 2 sheet invent | **YES** |
| GAP-EXP-STUB-01 | Toast/stub ≠ done | **YES** (via XLS-02) |
| Typed GAP-* | Closed prior review | **KEEP** · **cấm** reopen |

## 3. Decisions (autoApprove · chốt)

| ID | Decision | Rationale |
|----|----------|-----------|
| **Q-XLS-SCOPE** | **`filtered`** | Export theo filter list hiện tại (gồm `markerKind`/road/province/…) · peer Wave 1 S08 |
| **Q-XLS-IMPORT** | **`import_now`** | Wave 1 · epic Import P1 cùng task · peer S08 |
| **Q-XLS-FILENAME** | **`Bieu09_MocLoGioiGPMB_{yyyyMMdd}.xls`** | Label formNo 09 · SA có thể `.xlsx` nếu engine chốt |
| **Q-XLS-KIND** | **`respect_filter`** | 1 sheet luôn · rows = filtered set (có/không `markerKind`) · **cấm** invent 2 sheet LG/GPMB |
| packKind | **`list`** | confirm |
| formPattern | **Slideout** keep | **cấm** new_page CRUD |
| Grid AC | **keep** + toolbar Xuất/Nhập | Report AC **N/A** |
| Leave | **LeaveConfirmModal** keep | **cấm** native alert |

Open questions: **none** (autopilot chốt).

## 4. Screens / zones

| Screen / zone | Pattern | DoD |
|---------------|---------|-----|
| DES-GRID-A | Header «Biểu 09 — Mốc lộ giới / GPMB» · back hub | Keep |
| DES-GRID-B toolbar | `catalogToolbar` | **+exportExcel** · **+importExcel** · icon `erp-control-icon-map` |
| DES-GRID-B filter | `LinErpListFilterBar` | Unchanged · **0** Xuất |
| DES-GRID-C/D | Grid + pagination | Unchanged · typed 17 · filter `markerKind` |
| Form Kind D | Slideout 2 section kind | Unchanged |
| S-XLS-EXPORT | Toolbar → download binary | File mở được · header merge 17 |
| S-XLS-IMPORT | Toolbar → file picker → POST | Validation · markerKind · toast lỗi |
| Map | none | — |

reviewUrl: prior prototype — Design **chỉ** delta nút toolbar · `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-bieu-09/ui/prototype/csdl-bieu-09-list-prototype.html`

## 5. Grid AC (list · keep + delta)

| AC | Expect |
|----|--------|
| G1 | List load `resource=boundary-markers` · filter `markerKind` · typed 17 **keep** |
| G2 | Toolbar có **Xuất Excel** · click → binary download · **cấm** toast-only |
| G3 | Toolbar có **Nhập Excel** · multipart import · toast lỗi validation |
| G4 | Filter bar **không** có Xuất/Import |
| G5 | Export tôn trọng filter QS (**filtered**) · empty → file 0 row + header đúng |
| G6 | Export **1 sheet** 17 cột · **cấm** invent 2 sheet theo kind |
| G7 | CRUD/Slideout/Leave/Copy **keep** · **cấm** regress typed |

Report AC: **N/A**.

## 6. Leave / UX

- LeaveConfirmModal dirty form **keep**.
- Export/import fail → toast · **cấm** silent · **cấm** CSV generic lưới.
- Import kind mismatch → toast · **cấm** ép 2 sheet invent.
- Typography keep GAP-TYP-01 (label 13 · input D14/M16).

## 7. API / bind (cite real-data §B2)

| Op | Path |
|----|------|
| CRUD keep | `/web-bff/api/v1/asset/csdl-records` (+ `/{id}`) · `?resource=boundary-markers` |
| Export | `GET /web-bff/api/v1/asset/csdl-records/export?resource=boundary-markers` (+ filter QS) |
| Import | `POST /web-bff/api/v1/asset/csdl-records/import?resource=boundary-markers` |
| Mirror | `api/v1/asset/csdl-records[/export|/import]` · **cấm** `/infra/` |

## 8. Acceptance (DoD đo được)

1. Click **Xuất Excel** trên catalogToolbar → file `Bieu09_MocLoGioiGPMB_{yyyyMMdd}.xls` mở được · sheet Biểu 9 · merge-header 17.
2. Filter (vd. `markerKind`) → export chỉ tập đã lọc · vẫn **1 sheet**.
3. Empty list → file header đúng · 0 data row · toast info OK.
4. **Nhập Excel** P1 · template Cục · upsert typed · lỗi → toast.
5. **Cấm** Xuất trên filter bar · **cấm** toast stub done · **cấm** golden 12+8 · **cấm** 2 sheet invent.
6. Typed CRUD/Slideout/alias/hub **không regress**.
7. e2e chỉ `/agent-qa*` · Dev dùng `/implement-export-import-excel`.

## 9. Handoff

| Role | Need |
|------|------|
| **Design** | Giữ prototype typed · **+** nút Xuất/Nhập trên catalogToolbar · reviewUrl zone B · **cấm** filter export |
| **SA** | BFF binary path · golden 16-sheet checksum 17 · Content-Disposition filename · **cấm** 2 sheet · **cấm** đổi typed entity trừ gap export |
| **TL/Dev** | `/implement-export-import-excel` · wire `fromCatalogToolbar` · **cấm** re-CRUD typed |
| **QA** | S-XLS-EXPORT / S-XLS-IMPORT · empty · filtered · stub-fail |

## 10. Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-po |
| skillVersion | 2026.09.05.03 |
| schemaVersion | 1 |
| workflowVersion | 2026.09.05.03 |
| rulesVersion | 2026.09.17.3 |
| contentHash | `sha256:58c012cef8ad07ae7a6d5e8ab513668c51dc0755d1f209783beb41ba1c4ccc01` |
| headerFingerprint | `sha256:765521dee151f2ded36c582ca1a0b7ec048237b88cfc5b27481f09e6787e9a77` |
| generatedAt | 2026-09-18T05:36:00.000Z |
| versionGate | ok |
| taskId | task_2a1b2790 |
| packKind | list |
| changeScope | edit_page |

---
<!-- Version meta: skillId=agent-po skillVersion=2026.09.05.03 schemaVersion=1 workflowVersion=2026.09.05.03 rulesVersion=2026.09.17.3 versionGate=ok contentHash=sha256:58c012cef8ad07ae7a6d5e8ab513668c51dc0755d1f209783beb41ba1c4ccc01 changeScope=edit_page taskId=task_2a1b2790 -->
