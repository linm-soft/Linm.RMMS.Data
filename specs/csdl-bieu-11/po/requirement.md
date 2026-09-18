# PO — Requirement — csdl-bieu-11 (Biểu 11 — Hệ thống chiếu sáng · edit_page · T-XLS-S11)

| Field | Value |
|-------|-------|
| feature | `csdl-bieu-11` |
| title | CSDL Biểu 11 — Hệ thống chiếu sáng · Xuất/Nhập Excel |
| this role | `po` · `/agent-po` |
| changeScope | **`edit_page`** (Wave 1 `T-XLS-S11` · **giữ** typed CRUD · **cấm** reopen `new_page`) |
| packKind | **`list`** (**PO confirm**) · Kind B list A–D + Kind D Slideout |
| Feature Kind | **B** catalog · **D** Slideout · **cấm** Full-page · **cấm** report pack |
| resource | `lighting-systems` |
| formNo | `11` · title VN **Hệ thống chiếu sáng** / CTX **Chiếu sáng lưới + NLMT** |
| columns | **24** · 2 section UX lưới + NLMT (cùng schema · **cấm** 2 entity / 2 sheet invent) |
| IdCode | prefix **`LT`** · **cấm** Guid |
| peerSoTs | `so-ts-lighting` · type `LIGHTING` · toolbar deep-link · **≠** merge · **GAP-CSDL-CUC-11** |
| gap | GAP-BIEU11-XLS-01…07 · GAP-FILTER-BAR-08 · (typed GAP closed @ prior review) |
| mode | `feature_context` · hash-skip analy · **cấm** re-scan demo (**GAP-PO-DEMO-RESCAN-01**) |
| status | `confirmed` (autoApprove=ON · task `task_b2950eab`) |
| requestSource | queue CHAIN `/agent-qldb-workflow` · roleOnly=`po` · prior data_analy **confirmed** `task_55dac8de` |
| autoApprove | **ON** — Design/SA/Review tự confirm khi tới lượt |
| e2eQa | **ON** — queued `/agent-qa*` · **cấm** e2e / `yarn start:std` / `yarn build` @ PO |
| prior · data_analy | status=`confirmed` · compact `handoff/data_analy-compact.md` · control-hint + real-data · contentHash `sha256:7f64b8dcea4265af23b9f2e5e1dae3ab1c933b0a4404b0f872d39029716b4d62` · headerFingerprint `sha256:b37759a9224c09c7c63bc81583b4a9bcbca02e74cba8b63579819e90d57f1d1a` |
| prior · typed | review `task_20e43f26` **PASS** · **cấm** re-CRUD typed |
| productRoot | `D:/AI-QLBD/Linm.RMMS.Data` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| mfeStdRoute | `/so-ts/csdl-so-sach` · alias `/csdl-bieu-11` |
| mfeStdUrl | `http://localhost:9301/so-ts/csdl-so-sach` |
| hubDeepLink | `http://localhost:9301/so-ts/csdl-so-sach?resource=lighting-systems` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · Asset · `api/v1/asset/csdl-records` · **cấm ERP.*** · **cấm** invent `api/v1/infra/*` |
| domain | **Asset** |
| be_repo_confirm | `approve` |
| ui_repo_confirm | `approve` |
| controlHint | `D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/csdl-bieu-11-control-hint.md` |
| realData | `D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/csdl-bieu-11-real-data.md` |
| epicCite | `docs/context/features/csdl-export-print.md` · `T-XLS-S11` |
| devSlash | `/implement-export-import-excel` · BFF binary |
| contentHash | `sha256:7f64b8dcea4265af23b9f2e5e1dae3ab1c933b0a4404b0f872d39029716b4d62` |
| headerFingerprint | `sha256:b37759a9224c09c7c63bc81583b4a9bcbca02e74cba8b63579819e90d57f1d1a` |
| analyReuse | **hash skip** — **cấm** re-scan demo / crawl CTX (**GAP-PO-DEMO-RESCAN-01**) |
| taskId | `task_b2950eab` · analy `task_55dac8de` · typed prior `task_ec8df9b0`…`task_20e43f26` |
| updatedAt | `2026-09-18T06:47:00.000Z` |
| versionGate | `ok` (skill/schema/workflow khớp analy · pack `po/list@session`) |

**packKind confirm:** `list`. Kind B + Kind D Slideout trên MFE Asset `:9301` — **không** report · **không** map.

**Cấm:** implement @ PO · re-scan demo · toast stub = done · Xuất trên filter bar · golden hồ sơ 12+8 · invent 2 sheet lưới/NLMT · reopen typed `new_page` · ERP.* · invent infra · yarn build/e2e/start:std @ PO · start role khác (**GAP-PKT-ROLE-01**).

## 1. Goal

Chốt requirement **edit_page** Wave 1 **`T-XLS-S11`**: toolbar **Xuất Excel** (+ **Nhập Excel**) binary đúng sheet Biểu 11 (Cục 16-sheet) · **giữ** typed list+Slideout 24 cột · 2 section lưới + NLMT · API CRUD prefix · export qty bucket (≠ dump điểm Sổ TS).

Persona: Khu QLĐB · Văn phòng Cục · Ban QLDA (web).

**Keep (typed closed — không reopen):** form/list/route/IdCode/filters/Slideout/LeaveConfirm · Schema_CsdlBieu11 · 24 cols · 2 section UX · peer `so-ts-lighting` deep-link · formNo 11 · prior Q-ROUTE/PROV/GRID-STATUS/LED-ZERO/SOLAR/CABINET/LIST-COLS/PEER/TITLE.

**Delta pack này:**

1. **Xuất Excel** trên `catalogToolbar` → file binary sheet Biểu 11 · merge-header 24 · **cấm** toast-only (**GAP-BIEU11-XLS-01/02**).
2. **Nhập Excel** P1 cùng task · template Cục · upsert typed (**Q-XLS-IMPORT** = `import_now`).
3. Golden = Cục **16-sheet** xls sheet Biểu 11 · **cấm** 12+8 (**GAP-BIEU11-XLS-03**).
4. **Cấm** Xuất/Import trên `LinErpListFilterBar` (**GAP-BIEU11-XLS-04** / **GAP-FILTER-BAR-08**).
5. API: `GET …/export?resource=lighting-systems` · `POST …/import?resource=lighting-systems` (**GAP-BIEU11-XLS-05**).
6. Export **1 sheet** 24 cột · LED + NLMT cùng hàng · **cấm** invent 2 sheet (**GAP-BIEU11-XLS-06** · **Q-XLS-SHEET** = `one_sheet`).
7. Export **qty bucket** biểu Cục · **cấm** dump điểm `so-ts-lighting` (**GAP-BIEU11-XLS-07**).
8. Empty export: file vẫn tải · 0 data row · header đúng mẫu.

## 2. Current → New (`edit_page` · REQUIRED)

Nguồn SSOT: control-hint + real-data §A+§B · contentHash khớp STATUS · **không** crawl demo/CTX lại.

| Layer | Current (live / typed) | New (this pack) |
|-------|------------------------|-----------------|
| Form / list | Typed 24 · 2 section lưới+NLMT · Slideout + grid **shipped** | **Unchanged** |
| Toolbar | Refresh · Add · History · Schema · row CRUD · peer — **không** Xuất binary | **+ Xuất Excel** · **+ Nhập Excel** trên `catalogToolbar` |
| Filter | `LinErpListFilterBar` field+🔍 | **Unchanged** · **0** action Xuất |
| Export API | Missing / stub | `GET …/csdl-records/export?resource=lighting-systems` (+ filter QS) |
| Import API | Missing / stub | `POST …/csdl-records/import?resource=lighting-systems` multipart |
| Golden | — / STALE 12+8 | Cục 16-sheet · sheet Biểu 11 · checksum 24 |
| Peer qty | Sổ TS điểm ≠ bucket | Export chỉ qty biểu Cục · **cấm** dump điểm |
| Done gate | Typed STATUS done | **≠** export xong · file mở được cạnh mẫu |

**Không đổi:** Kind B A–D · Kind D Slideout · filter slots · prefix `api/v1/asset/csdl-records` · resource `lighting-systems` · IdCode `LT` · formNo `11` · peer deep-link · **cấm ERP.*** · map = none.

### Header (24 — không thêm ngoài)

`code|roadCode|roadName|province|kmFrom|kmTo|side|gridLed600|gridLed240|gridLed150|gridLed125|gridStatus|gridPoleCount|cabinetCount|substationCount|solarPoleCount|solarControllerCount|solarPanel240Wp|solarLamp100W|solarBattery145Ah|solarCabinetCount|status|manageUnit|notes`

### GAP IDs (P1 trừ ghi chú)

| ID | New | P1 |
|----|-----|----|
| GAP-BIEU11-XLS-01 | Toolbar Xuất Excel binary sheet Biểu 11 | **YES** |
| GAP-BIEU11-XLS-02 | BFF binary · **cấm** toast stub done | **YES** |
| GAP-BIEU11-XLS-03 | Golden Cục 16-sheet · cấm 12+8 | **YES** |
| GAP-BIEU11-XLS-04 | GAP-FILTER-BAR-08 · cấm filter export | **YES** |
| GAP-BIEU11-XLS-05 | GET export / POST import path | **YES** |
| GAP-BIEU11-XLS-06 | 1 sheet 24 · LED+NLMT cùng hàng · cấm 2 sheet | **YES** |
| GAP-BIEU11-XLS-07 | Export qty bucket · cấm dump điểm Sổ TS | **YES** |
| Typed GAP-* | Closed prior review | **KEEP** · **cấm** reopen |

## 3. Decisions (autoApprove · chốt)

| ID | Decision | Rationale |
|----|----------|-----------|
| **Q-XLS-SCOPE** | **`filtered`** | Export theo filter list hiện tại (road/province/status/side/km…) · peer Wave 1 S10 |
| **Q-XLS-IMPORT** | **`import_now`** | Wave 1 · epic Import P1 cùng task · peer S10 |
| **Q-XLS-FILENAME** | **`Bieu11_ChieuSang_{yyyyMMdd}.xls`** | Label formNo 11 · SA có thể `.xlsx` nếu engine chốt |
| **Q-XLS-SHEET** | **`one_sheet`** | Excel Cục 1 sheet 24 · LED+NLMT cùng hàng · **cấm** split trừ Cục yêu cầu |
| packKind | **`list`** | confirm |
| formPattern | **Slideout** keep | **cấm** new_page CRUD |
| Grid AC | **keep** + toolbar Xuất/Nhập | Report AC **N/A** |
| Leave | **LeaveConfirmModal** keep | **cấm** native alert |

Open questions: **none** (autopilot chốt). Prior typed Q-* **keep**.

## 4. Screens / zones

| Screen / zone | Pattern | DoD |
|---------------|---------|-----|
| DES-GRID-A | Header «Biểu 11 — Hệ thống chiếu sáng» · back hub | Keep |
| DES-GRID-B toolbar | `catalogToolbar` | **+ Xuất Excel** · **+ Nhập Excel** · icon `erp-control-icon-map` · keep CRUD/peer |
| DES-GRID-B filter | `LinErpListFilterBar` | **Unchanged** · **0** Xuất (**GAP-FILTER-BAR-08**) |
| DES-GRID-C/D | Grid + pagination | Keep typed 24 / subset |
| Form Kind D | Slideout 2 section lưới + NLMT | Keep · LeaveConfirmModal |
| S-XLS-EXPORT | Toolbar → binary download | File mở được · sheet Biểu 11 · filter QS |
| S-XLS-IMPORT | Toolbar + file picker | Template Cục · upsert · toast lỗi LED/Solar |
| Map | none | — |
| Print PDF | OUT Wave 1 S11 | — |

### Grid AC (list — keep + delta)

1. Filter+search theo controlHint · **cấm** nút Tìm riêng.  
2. Cột mặc định = subset prior · schema-config đủ 24.  
3. Pagination 50/100/200/500 · soft-delete refresh.  
4. Row actions + toolbar CRUD · **+ Xuất/Nhập binary** (supersede stub).  
5. Empty/error toast VN · empty export = file 0 row + header.  
6. **Cấm** Xuất trên filter bar.

### Report AC

N/A — packKind=`list`.

### § Leave

| Case | Behavior |
|------|----------|
| Dirty form | LeaveConfirmModal trước đóng/navigate |
| Cancel clean | đóng slideout không confirm |
| After save | đóng · list refresh · toast OK |
| During export/import | **không** chặn Leave form · toast riêng |

## 5. Live bind (cite real-data §A+§B)

| Op | Path |
|----|------|
| List / CRUD | `/web-bff/api/v1/asset/csdl-records` (+ `/{id}`) · `resource=lighting-systems` — **keep** |
| **Export** | `GET /web-bff/api/v1/asset/csdl-records/export?resource=lighting-systems` (+ filter QS) |
| **Import** | `POST /web-bff/api/v1/asset/csdl-records/import?resource=lighting-systems` multipart |
| API mirror | `api/v1/asset/csdl-records[/export|/import]` · **cấm** invent `/infra/` |
| road-route | `GET /integration/road-routes/search` — keep |
| org-unit | P2 DEFER — keep |

DB SSOT export row: `GridLed600`↔`gridLed600` · … · `SolarCabinetCount`↔`solarCabinetCount` — **SA** giữ typed.

## 6. Filter bar (HARD → Design)

- 1 hàng filter + search inline · **cấm** nút Tìm riêng.  
- Controls keep: SearchTextInput · province · status · road SearchInput · kmFrom/kmTo · side.  
- **Cấm** action Xuất/Import trên filter (**GAP-FILTER-BAR-08**).

## 7. NFR / DoD

1. Typed list+Slideout **giữ** PASS prior.  
2. Xuất Excel → binary mở được cạnh mẫu Cục sheet Biểu 11 · **≠** toast stub.  
3. Import P1 upsert typed · validation LED/Solar · toast lỗi.  
4. Empty export OK · 0 data row + merge-header.  
5. Golden checksum 24 · 1 sheet · **cấm** 12+8 / 2-sheet invent.  
6. Export qty bucket · **cấm** dump điểm Sổ TS.  
7. `yarn build` / e2e / `start:std` **chỉ** Dev/QA.

## 8. Handoff

| Role | Need |
|------|------|
| **Design** | **Giữ** prototype typed · **chỉ** +nút Xuất/Nhập trên `catalogToolbar` · reviewUrl cập nhật zone · **cấm** filter export |
| **SA** | BFF binary path · golden 16-sheet checksum 24 · **cấm** đổi typed entity trừ gap export |
| TL/Dev | `/implement-export-import-excel` · **cấm** re-CRUD typed · **cấm** filter-bar export |
| QA | scenarios S-XLS-EXPORT/IMPORT · e2e queued · **cấm** e2e @ PO |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-po |
| skillVersion | 2026.09.05.03 |
| schemaVersion | 1 |
| workflowVersion | 2026.09.05.03 |
| rulesVersion | 2026.09.17.3 |
| contentHash | `sha256:7f64b8dcea4265af23b9f2e5e1dae3ab1c933b0a4404b0f872d39029716b4d62` |
| headerFingerprint | `sha256:b37759a9224c09c7c63bc81583b4a9bcbca02e74cba8b63579819e90d57f1d1a` |
| generatedAt | 2026-09-18T06:47:00.000Z |
| versionGate | ok |
| taskId | task_b2950eab |
| packKind | list |
| changeScope | edit_page |

---
<!-- Version meta: skillId=agent-po skillVersion=2026.09.05.03 schemaVersion=1 workflowVersion=2026.09.05.03 rulesVersion=2026.09.17.3 versionGate=ok contentHash=sha256:7f64b8dcea4265af23b9f2e5e1dae3ab1c933b0a4404b0f872d39029716b4d62 changeScope=edit_page taskId=task_b2950eab -->
