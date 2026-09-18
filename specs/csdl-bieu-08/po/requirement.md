# PO — Requirement — csdl-bieu-08 (Biểu 08 — Hệ thống ATGT · edit_page · T-XLS-S08)

| Field | Value |
|-------|-------|
| feature | `csdl-bieu-08` |
| title | CSDL Biểu 08 — Hệ thống ATGT · Xuất/Nhập Excel |
| this role | `po` · `/agent-po` |
| changeScope | **`edit_page`** (Wave 1 `T-XLS-S08` · **giữ** typed CRUD · **cấm** reopen `new_page`) |
| packKind | **`list`** (**PO confirm**) · Kind B list A–D + Kind D Slideout |
| Feature Kind | **B** catalog · **D** Slideout · **cấm** Full-page · **cấm** report pack |
| resource | `traffic-safety` |
| formNo | `08` · title VN **Hệ thống ATGT** |
| columns | **45** · **11 nhóm** `assetType` (Excel Biểu 8) |
| IdCode | prefix **`AT`** · **cấm** Guid |
| peerSoTs | ATGT typed deep-link OK · **cấm** merge · **≠** `road-assets` |
| gap | GAP-BIEU08-XLS-01…06 · GAP-FILTER-BAR-08 · GAP-EXP-STUB-01 · (typed GAP closed @ prior review) |
| mode | `feature_context` · hash-skip analy · **cấm** re-scan demo (**GAP-PO-DEMO-RESCAN-01**) |
| status | `confirmed` (autoApprove=ON · task `task_c7498ca2`) |
| requestSource | queue CHAIN `/agent-qldb-workflow` · roleOnly=`po` · prior data_analy **confirmed** `task_774ebbde` |
| autoApprove | **ON** — Design/SA/Review tự confirm khi tới lượt |
| e2eQa | **ON** — queued `/agent-qa*` · **cấm** e2e / `yarn start:std` / `yarn build` @ PO |
| prior · data_analy | status=`confirmed` · compact `handoff/data_analy-compact.md` · control-hint + real-data · contentHash `sha256:639566df4ddccc3927311d5618bf4e7c1dbad0dac80962c414f861dacc9d5e9c` · headerFingerprint `sha256:ba8b8db4f7637ee32cfd4a882b6abdc774c538f6c9812c3ecd1d13f6151cdd6f` |
| prior · typed | review `task_fdb010e9` **PASS** · **cấm** re-CRUD typed |
| productRoot | `D:/AI-QLBD/Linm.RMMS.Data` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| mfeStdRoute | `/so-ts/csdl-so-sach` · alias `/csdl-bieu-08` |
| mfeStdUrl | `http://localhost:9301/so-ts/csdl-so-sach` |
| hubDeepLink | `http://localhost:9301/so-ts/csdl-so-sach?resource=traffic-safety` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · Asset · `api/v1/asset/csdl-records` · **cấm ERP.*** · **cấm** invent `api/v1/infra/*` |
| domain | **Asset** |
| be_repo_confirm | `approve` |
| ui_repo_confirm | `approve` |
| controlHint | `D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/csdl-bieu-08-control-hint.md` |
| realData | `D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/csdl-bieu-08-real-data.md` |
| epicCite | `docs/context/features/csdl-export-print.md` · `T-XLS-S08` |
| devSlash | `/implement-export-import-excel` · BFF binary |
| contentHash | `sha256:639566df4ddccc3927311d5618bf4e7c1dbad0dac80962c414f861dacc9d5e9c` |
| headerFingerprint | `sha256:ba8b8db4f7637ee32cfd4a882b6abdc774c538f6c9812c3ecd1d13f6151cdd6f` |
| analyReuse | **hash skip** — **cấm** re-scan demo / crawl CTX (**GAP-PO-DEMO-RESCAN-01**) |
| taskId | `task_c7498ca2` · analy `task_774ebbde` · typed prior `task_49b1fe15` |
| updatedAt | `2026-09-18T05:00:00.000Z` |
| versionGate | `ok` (skill/schema/workflow khớp analy · pack `po/list@session`) |

**packKind confirm:** `list`. Kind B + Kind D Slideout trên MFE Asset `:9301` — **không** report · **không** map.

**Cấm:** implement @ PO · re-scan demo · toast stub = done · Xuất trên filter bar · golden hồ sơ 12+8 · 1 hàng kéo ngang lệch mẫu · invent 11 sheet · reopen typed `new_page` · ERP.* · invent infra · yarn build/e2e/start:std @ PO · start role khác (**GAP-PKT-ROLE-01**).

## 1. Goal

Chốt requirement **edit_page** Wave 1 **`T-XLS-S08`**: toolbar **Xuất Excel** (+ **Nhập Excel**) binary đúng sheet Biểu 8 (Cục 16-sheet) · **giữ** typed list+Slideout 45/11 · shared+1 child · API CRUD prefix.

Persona: Khu QLĐB · Văn phòng Cục · Ban QLDA (web).

**Keep (typed closed — không reopen):** form/list/route/IdCode/filters/Slideout/LeaveConfirm · Schema_CsdlBieu8 + 11 children · subset_by_type · peer deep-link.

**Delta pack này:**

1. **Xuất Excel** trên `catalogToolbar` → file binary sheet Biểu 8 · merge-header 45 · **cấm** toast-only (**GAP-BIEU08-XLS-01/02**).
2. **Nhập Excel** P1 cùng task · template Cục · upsert typed+child (**Q-XLS-IMPORT** = `import_now`).
3. Golden = Cục **16-sheet** xls sheet Biểu 8 · **cấm** 12+8 (**GAP-BIEU08-XLS-03**).
4. **Cấm** Xuất/Import trên `LinErpListFilterBar` (**GAP-BIEU08-XLS-04** / **GAP-FILTER-BAR-08**).
5. API: `GET …/export?resource=traffic-safety` · `POST …/import?resource=traffic-safety` (**GAP-BIEU08-XLS-05**).
6. Export map shared+child theo `assetType` · **cấm** 1 hàng kéo ngang lệch mẫu (**GAP-BIEU08-XLS-06**).
7. Empty export: file vẫn tải · 0 data row · header đúng mẫu.

## 2. Current → New (`edit_page` · REQUIRED)

Nguồn SSOT: control-hint + real-data §A+§B · contentHash khớp STATUS · **không** crawl demo/CTX lại.

| Layer | Current (live / typed) | New (this pack) |
|-------|------------------------|-----------------|
| Form / list | Typed 45/11 Slideout+grid **shipped** | **Unchanged** |
| Toolbar | Refresh · Add · History · Schema · row CRUD — **không** Xuất binary | **+ Xuất Excel** · **+ Nhập Excel** trên `catalogToolbar` |
| Filter | `LinErpListFilterBar` field+🔍 | **Unchanged** · **0** action Xuất |
| Export API | Missing / stub | `GET …/csdl-records/export?resource=traffic-safety` (+ filter QS) |
| Import API | Missing / stub | `POST …/csdl-records/import?resource=traffic-safety` multipart |
| Golden | — / STALE 12+8 | Cục 16-sheet · sheet Biểu 8 · checksum 45 |
| Done gate | Typed STATUS done | **≠** export xong · file mở được cạnh mẫu |

**Không đổi:** Kind B A–D · Kind D Slideout · filter slots · prefix `api/v1/asset/csdl-records` · resource `traffic-safety` · IdCode `AT` · formNo `08` · **cấm ERP.*** · map = none.

### GAP IDs (P1 trừ ghi chú)

| ID | New | P1 |
|----|-----|----|
| GAP-BIEU08-XLS-01 | Toolbar Xuất Excel binary sheet Biểu 8 | **YES** |
| GAP-BIEU08-XLS-02 | BFF binary · **cấm** toast stub done | **YES** |
| GAP-BIEU08-XLS-03 | Golden Cục 16-sheet · cấm 12+8 | **YES** |
| GAP-BIEU08-XLS-04 | GAP-FILTER-BAR-08 · cấm filter export | **YES** |
| GAP-BIEU08-XLS-05 | GET export / POST import path | **YES** |
| GAP-BIEU08-XLS-06 | Cấm 1 hàng kéo ngang lệch mẫu | **YES** |
| GAP-EXP-STUB-01 | Toast/stub ≠ done | **YES** (via XLS-02) |
| Typed GAP-* | Closed prior review | **KEEP** · **cấm** reopen |

## 3. Decisions (autoApprove · chốt)

| ID | Decision | Rationale |
|----|----------|-----------|
| **Q-XLS-SCOPE** | **`filtered`** | Export theo filter list hiện tại (gồm `assetType`/road/province/…) · peer pilot S01 |
| **Q-XLS-IMPORT** | **`import_now`** | Wave 1 pilot S01+S08 · epic Import P1 cùng task · peer S01 |
| **Q-XLS-FILENAME** | **`Bieu08_HeThongATGT_{yyyyMMdd}.xls`** | Label formNo 08 · SA có thể `.xlsx` nếu engine chốt |
| **Q-XLS-TYPE** | **`one_sheet_45`** | 1 sheet gộp · cột theo `assetType` row map · **cấm** invent 11 sheet · filter type đã cover bởi SCOPE=filtered |
| packKind | **`list`** | confirm |
| formPattern | **Slideout** keep | **cấm** new_page CRUD |
| Grid AC | **keep** + toolbar Xuất/Nhập | Report AC **N/A** |
| Leave | **LeaveConfirmModal** keep | **cấm** native alert |

Open questions: **none** (autopilot chốt).

## 4. Screens / zones

| Screen / zone | Pattern | DoD |
|---------------|---------|-----|
| DES-GRID-A | Header «Biểu 08 — Hệ thống ATGT» · back hub | Keep |
| DES-GRID-B toolbar | `catalogToolbar` | **+exportExcel** · **+importExcel** · icon `erp-control-icon-map` |
| DES-GRID-B filter | `LinErpListFilterBar` | Unchanged · **0** Xuất |
| DES-GRID-C/D | Grid + pagination | Unchanged · subset_by_type · **cấm** 45 cột cùng lúc |
| Form Kind D | Slideout shared+1 child | Unchanged |
| S-XLS-EXPORT | Toolbar → download binary | File mở được · header merge 45 |
| S-XLS-IMPORT | Toolbar → file picker → POST | Validation · child/`type=` · toast lỗi |
| Map | none | — |

reviewUrl: prior prototype — Design **chỉ** delta nút toolbar · `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-bieu-08/ui/prototype/csdl-bieu-08-list-prototype.html`

## 5. Grid AC (list · keep + delta)

| AC | Expect |
|----|--------|
| G1 | List load `resource=traffic-safety` · filter `assetType` · subset_by_type **keep** |
| G2 | Toolbar có **Xuất Excel** · click → binary download · **cấm** toast-only |
| G3 | Toolbar có **Nhập Excel** · multipart import · toast lỗi validation |
| G4 | Filter bar **không** có Xuất/Import |
| G5 | Export tôn trọng filter QS (**filtered**) · empty → file 0 row + header đúng |
| G6 | Export **không** flatten 1 hàng wide lệch mẫu Cục |
| G7 | CRUD/Slideout/Leave/Copy **keep** · **cấm** regress typed |

Report AC: **N/A**.

## 6. Leave / UX

- LeaveConfirmModal dirty form **keep**.
- Export/import fail → toast · **cấm** silent · **cấm** CSV generic lưới.
- Import child mismatch → toast · **cấm** ép 1 entity wide 45.
- Typography keep GAP-TYP-01 (label 13 · input D14/M16).

## 7. API / bind (cite real-data §B2)

| Op | Path |
|----|------|
| CRUD keep | `/web-bff/api/v1/asset/csdl-records` (+ `/{id}`) · `?resource=traffic-safety` |
| Export | `GET /web-bff/api/v1/asset/csdl-records/export?resource=traffic-safety` (+ filter QS) |
| Import | `POST /web-bff/api/v1/asset/csdl-records/import?resource=traffic-safety` |
| Mirror | `api/v1/asset/csdl-records[/export|/import]` · **cấm** `/infra/` |

## 8. Acceptance (DoD đo được)

1. Click **Xuất Excel** trên catalogToolbar → file `Bieu08_HeThongATGT_{yyyyMMdd}.xls` mở được · sheet Biểu 8 · merge-header 45.
2. Filter (vd. `assetType`) → export chỉ tập đã lọc.
3. Empty list → file header đúng · 0 data row · toast info OK.
4. **Nhập Excel** P1 · template Cục · upsert typed+child · lỗi → toast.
5. **Cấm** Xuất trên filter bar · **cấm** toast stub done · **cấm** golden 12+8 · **cấm** wide-row.
6. Typed CRUD/Slideout/alias/hub **không regress**.
7. e2e chỉ `/agent-qa*` · Dev dùng `/implement-export-import-excel`.

## 9. Handoff

| Role | Need |
|------|------|
| **Design** | Giữ prototype typed · **+** nút Xuất/Nhập trên catalogToolbar · reviewUrl zone B · **cấm** filter export |
| **SA** | BFF binary path · golden 16-sheet checksum 45 · Content-Disposition filename · **cấm** wide · **cấm** đổi typed entity trừ gap export |
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
| contentHash | `sha256:639566df4ddccc3927311d5618bf4e7c1dbad0dac80962c414f861dacc9d5e9c` |
| headerFingerprint | `sha256:ba8b8db4f7637ee32cfd4a882b6abdc774c538f6c9812c3ecd1d13f6151cdd6f` |
| generatedAt | 2026-09-18T05:00:00.000Z |
| versionGate | ok |
| taskId | task_c7498ca2 |
| packKind | list |
| changeScope | edit_page |

---
<!-- Version meta: skillId=agent-po skillVersion=2026.09.05.03 schemaVersion=1 workflowVersion=2026.09.05.03 rulesVersion=2026.09.17.3 versionGate=ok contentHash=sha256:639566df4ddccc3927311d5618bf4e7c1dbad0dac80962c414f861dacc9d5e9c changeScope=edit_page taskId=task_c7498ca2 -->
