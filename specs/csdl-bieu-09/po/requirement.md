# PO — Requirement — csdl-bieu-09 (Biểu 09 — Mốc lộ giới / GPMB)

| Field | Value |
|-------|-------|
| feature | `csdl-bieu-09` |
| title | CSDL Biểu 09 — Mốc lộ giới / GPMB |
| this role | `po` · `/agent-po` |
| changeScope | **`new_page`** (STATUS + packet · typed Biểu 9 trên resource `boundary-markers`) |
| packKind | **`list`** (**PO confirm** · data-analy đề xuất · Kind B list A–D + Kind D Slideout) |
| Feature Kind | **B** catalog A–D+F · **D** Slideout Z1–Z3 · **2col** · **cấm** Full-page form |
| resource | `boundary-markers` |
| formNo | `09` · title VN **Mốc lộ giới / GPMB** · live hub còn **Biểu 8** → renumber **T-REN-01** |
| columns | **17** · 2 khối UX theo `markerKind` (cùng schema · **cấm** 2 entity) |
| IdCode | prefix **`MK`** · `MK-yyyyMMdd-nnnn` · **cấm** Guid |
| peerSoTs | — · **≠** Sổ TS · **≠** `road-assets` · **GAP-CSDL-CUC-11** |
| gap | GAP-BIEU09-TYPED-01 · GAP-BIEU09-REN-01 · GAP-BIEU09-ROUTE-01 · GAP-BIEU09-KIND-01 · GAP-BIEU09-STRUCT-01 · GAP-BIEU09-DIM-01 · GAP-BIEU09-YEAR-01 · GAP-BIEU09-BLOCK-01 · GAP-CSDL-ROAD-01 · GAP-CSDL-PROV-01 · GAP-CSDL-ORG-01 · GAP-CSDL-XLS-01 · GAP-CSDL-CUC-03 · GAP-CSDL-CUC-11 · GAP-TYP-01 |
| mode | `feature_context` · CTX + cluster analy + hub demo zone ref · sourceKind=`synthetic` · **cấm** demo-json/LS SSOT |
| status | `confirmed` (autoApprove=ON · task `task_cee30b17`) |
| requestSource | queue CHAIN `/agent-qldb-workflow` · roleOnly=`po` · `/agent-po` · prior data_analy **confirmed** |
| autoApprove | **ON** — Design/SA/Review khi tới lượt → agent tự confirm · enqueue role kế. Role PO **không** gate confirm. |
| e2eQa | **ON** — queued tới `/agent-qa*` · **cấm** e2e / `yarn start:std` / `yarn build` ở role PO |
| prior · data_analy | status=`done`/`confirmed` · `specs/_data-analy/features/csdl-bieu-09-control-hint.md` · `csdl-bieu-09-real-data.md` · compact `handoff/data_analy-compact.md` · contentHash `sha256:863490daf95d2c19ddad660fc05f901eaeb0248fb65961f9e96747ebcf5b04e4` · headerFingerprint `sha256:18fb135f880ed55afa6e9277e8980fd0458a24d85d87e69a753b805424f396bb` · analy `task_b7a89508` · **cấm** re-scan demo (**GAP-PO-DEMO-RESCAN-01**) |
| productRoot | `D:/AI-QLBD/Linm.RMMS.Data` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| mfeStdRoute | **`/csdl-bieu-09`** (alias Navigate **now**) · hub `/so-ts/csdl-so-sach?resource=boundary-markers` |
| mfeStdUrl | `http://localhost:9301/csdl-bieu-09` |
| hubDeepLink | `http://localhost:9301/so-ts/csdl-so-sach?resource=boundary-markers` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · domain **Asset** · live `api/v1/asset/csdl-records?resource=boundary-markers` · BFF `web-bff/api/v1/asset/csdl-records` · **cấm ERP.*** · **cấm** invent `api/v1/infra/*` · **cấm** `api/v1/so-ts/*` invent · **cấm** `api/v1/rmms/*` |
| domain | **Asset** |
| be_repo_confirm | `approve` (`Linm.RMMS.WebService`) |
| ui_repo_confirm | `approve` (`Linm.Web.RMMS.Asset`) |
| controlHint | `D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/csdl-bieu-09-control-hint.md` |
| realData | `D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/csdl-bieu-09-real-data.md` |
| contentHash | `sha256:863490daf95d2c19ddad660fc05f901eaeb0248fb65961f9e96747ebcf5b04e4` |
| headerFingerprint | `sha256:18fb135f880ed55afa6e9277e8980fd0458a24d85d87e69a753b805424f396bb` |
| analyReuse | **hash skip** — **cấm** re-scan demo / crawl CTX / DemoRoot (**GAP-PO-DEMO-RESCAN-01**) |
| parent | hub `csdl-so-sach` · cluster `csdl-cuc-2026` · Excel sheet Biểu 9 |
| taskId | `task_cee30b17` · analy `task_b7a89508` |
| updatedAt | `2026-09-05T17:50:00.000Z` |
| versionGate | `ok` (skill/schema/workflow khớp analy · pack `po/list@session`) |

**packKind confirm:** `list` (data-analy đề xuất · PO chốt). Kind **B** list A–D+F + Kind **D** Slideout 2col trên MFE Asset host `:9301` — **không** report pack · **không** Kind F map canvas · **không** Excel import wizard trong pack này (OUT **GAP-CSDL-XLS-01**).

**≠** Sổ TS · **≠** hub generic 3 ô `detail*` — đây là **typed Biểu 09** 17 cột · 2 section UX theo `markerKind` (cùng schema).

**Cấm:** implement · re-scan demo · form chỉ 3 ô `detail*` · 2 entity wide theo kind · merge form Sổ TS · invent map · invent API · ERP.* · demo-json / localStorage SSOT · Guid IdCode · yarn build/e2e/start:std ở role PO · start role khác (**GAP-PKT-ROLE-01**).

## 1. Goal

Chốt requirement **new_page** cho **Biểu 09 — Mốc lộ giới / GPMB** (`resource=boundary-markers`): list + Slideout typed **17 cột** Excel Biểu 9 · 2 khối UX theo `markerKind` · thay generic hub form · giữ API prefix `csdl-records` · alias route `/csdl-bieu-09` + hub entry · renumber formNo 8→9 cùng release typed.

Persona: Khu QLĐB · Văn phòng Cục · Ban QLDA (web).

**Delta pack này (SSOT lock từ analy):**

1. Form/list typed 17 cột — **cấm** chỉ `detailPrimary`/`detailSpec`/`detailExtra` (**GAP-BIEU09-TYPED-01** / **GAP-CSDL-CUC-03**).
2. Renumber formNo **8→9** · title «Mốc lộ giới / GPMB» · giữ `?resource=boundary-markers` (**GAP-BIEU09-REN-01** / **T-REN-01** · **Q-REN-LABEL** with_typed).
3. Alias mfeStd `/csdl-bieu-09` Navigate P1 · giữ hub deep-link (**Q-ROUTE** / **GAP-BIEU09-ROUTE-01**).
4. `markerKind` LOOKUP_STATIC `RoadLimit` / `GPMB` · filter list + form · label VN «Mốc lộ giới» / «Mốc GPMB» (**GAP-BIEU09-KIND-01** · **Q-KIND-LABEL** code_en).
5. `markerStructure` LOOKUP_STATIC seed Excel (**GAP-BIEU09-STRUCT-01** · **Q-STRUCT** excel_seed).
6. Dim typed: `markerLengthM` · `markerWidthM` · `markerAreaM2` · `markerQty` — hiện đủ (**GAP-BIEU09-DIM-01** · **Q-DIM** full_dim); L/W/Area optional · Qty default 1 (**Q-QTY** show_always).
7. `completedYear` Number year required (**GAP-BIEU09-YEAR-01**).
8. 2 section UX «Mốc lộ giới» / «Mốc GPMB» theo kind — **cùng schema** · **cấm** 2 entity (**GAP-BIEU09-BLOCK-01**).
9. Grid mặc định = shared + typed marker subset (**Q-LIST-COLS** subset).
10. `roadCode`/`roadName` = SearchInput `road-route` filter + form (**GAP-CSDL-ROAD-01**).
11. Province LOOKUP_STATIC P1 (**Q-PROV** keep_static).
12. LeaveConfirmModal dirty · toast 4xx/5xx — **cấm** native alert/confirm.
13. Import/export sheet Biểu 9 OUT pack (**GAP-CSDL-XLS-01**).

## 2. Current → New (`new_page` · REQUIRED)

Nguồn SSOT: control-hint + real-data §A+§B · `analyzedAt=2026-09-05T10:50:00.000Z` · contentHash khớp STATUS · **không** crawl demo/CTX lại.

| Layer | Current (live inventory analy) | New (this pack · copy analy) |
|-------|--------------------------------|------------------------------|
| Entry | Hub-only `?resource=boundary-markers` | Alias **`/csdl-bieu-09`** + hub entry — **GAP-BIEU09-ROUTE-01** |
| formNo / title | Demo/live **Biểu 8** · «Mốc lộ giới / GPMB» | **Biểu 09** · «Mốc lộ giới / GPMB» — **GAP-BIEU09-REN-01** |
| List Kind B | Generic road/km/detail cols | Shared + typed marker fields · filter `markerKind` |
| Form Kind D | 3 ô `detail*` polymorphic | Typed **17** Slideout 2col · 2 section kind — **GAP-BIEU09-TYPED-01** |
| markerKind | free «Loại mốc» | LOOKUP RoadLimit/GPMB · filter — **GAP-BIEU09-KIND-01** |
| markerStructure | free «Kết cấu» | LOOKUP_STATIC Excel seed — **GAP-BIEU09-STRUCT-01** |
| Dim / Qty / Year | detail* gộp | Length/Width/Area/Qty + completedYear typed |
| road | Text free (hub) | SearchInput `road-route` — **GAP-CSDL-ROAD-01** |
| province | LOOKUP_STATIC 5 tỉnh | **keep_static** P1 — **Q-PROV** |
| manageUnit | Text | Text P1 · SearchInput org-unit **DEFER P2** — **GAP-CSDL-ORG-01** |
| Import | stub | Sheet 17 cột merge **OUT** |
| API | `…/csdl-records?resource=boundary-markers` | **Giữ prefix** · widen typed DTO — SA |
| Peer | — | **≠** so-ts / road-assets · **GAP-CSDL-CUC-11** |

**Không đổi:** Kind B A–D · Kind D Slideout · `LinPageLayout kind="catalog"` · `LinCatalogListPagination` 50/100/200/500 · prefix `api/v1/asset/csdl-records` · resource key `boundary-markers` · IdCode **cấm** Guid · prefix **`MK`** · **cấm ERP.*** · map = none.

### GAP IDs (PO bắt buộc Design/Dev đóng P1 trừ DEFER/OUT)

| ID | New | P1 |
|----|-----|----|
| GAP-BIEU09-TYPED-01 | Typed 17 cột thay generic detail* | **YES** |
| GAP-BIEU09-REN-01 | formNo 8→9 · T-REN-01 | **YES** (`with_typed`) |
| GAP-BIEU09-ROUTE-01 | Alias `/csdl-bieu-09` Navigate | **YES** (`alias_now`) |
| GAP-BIEU09-KIND-01 | markerKind LOOKUP + filter | **YES** (`code_en`) |
| GAP-BIEU09-STRUCT-01 | markerStructure LOOKUP Excel seed | **YES** (`excel_seed`) |
| GAP-BIEU09-DIM-01 | Length/Width/Area/Qty typed | **YES** (`full_dim`) |
| GAP-BIEU09-YEAR-01 | completedYear Number | **YES** |
| GAP-BIEU09-BLOCK-01 | 2 section UX theo kind · cùng schema | **YES** |
| GAP-CSDL-ROAD-01 | SearchInput `road-route` filter+form | **YES** |
| GAP-CSDL-PROV-01 | Province LOOKUP_STATIC | **YES** (keep_static) · master = P2 |
| GAP-CSDL-CUC-03 | Đóng gap Biểu 9 khi typed PASS | **YES** (via TYPED) |
| GAP-CSDL-CUC-11 | ≠ Sổ TS · ROW riêng | **YES** |
| GAP-TYP-01 | label 13 · input D14/M16 | **YES** |
| GAP-CSDL-ORG-01 | manageUnit SearchInput org-unit | **DEFER P2** |
| GAP-CSDL-XLS-01 | Import/export sheet Biểu 9 | **OUT pack** |

## 3. DoD (đo được)

1. Entry `/csdl-bieu-09` **và** hub `?resource=boundary-markers` mở cùng list typed — title VN «Biểu 09 — Mốc lộ giới / GPMB» · back hub · **cấm** slug trên card hub · hub card label đổi 8→09 cùng release.
2. List BFF `GET …/csdl-records?resource=boundary-markers` — empty grid VN «Chưa có mốc lộ giới / GPMB» · CTA Tạo mới · **cấm** fake row / demo-json / LS SSOT.
3. Zone A: title VN · back `/so-ts/csdl-so-sach` — **cấm** Thêm mới trên A.
4. Zone B: `LinErpListFilterBar` 1 hàng wrap · input+🔍 cụm phải — SearchTextInput · province · status · road SearchInput · kmFrom/kmTo · side · **markerKind** · Tạo mới · Refresh · Delete · History · SchemaConfig · Import/Export stub — filter đổi → page=1 · **search must work** · **cấm** nút Tìm riêng.
5. Zone C: `LinCatalogDataGrid` shared + typed marker subset · STT · row menu Xem/Sửa/Copy/Xóa/Lịch sử · kéo cột ON · **cấm** chỉ 3 detail.
6. Zone D: `LinCatalogListPagination` **50 / 100 / 200 / 500**.
7. Zone F: `LinCatalogUiSchemaEditorModal` catalogKind **`boundary-markers`** (typed) — **cấm** `LinListTableConfigModal`.
8. Slideout Kind D Z1–Z3 2col · shared + section kind: Create/Edit/View/Copy — đủ 17 cột Excel · **cấm** form chỉ 3 ô `detail*` · **cấm** 2 entity.
9. Required P1: `roadCode`/`roadName` · `province` · `kmFrom`/`kmTo` · `side` · `markerKind` · `markerStructure` · `completedYear` · `status` · code IdCode `MK-…` readonly.
10. View = `readOnly` — **cấm** Input disabled xám toàn form.
11. LeaveConfirmModal khi dirty Cancel/đóng/back — **cấm** `window.confirm`.
12. Soft-delete API → row biến mất · list refresh · toast lỗi 4xx/5xx — **cấm** `alert()`.
13. Map = none — toolbar map → gis deep-link only · **cấm** invent map canvas.
14. Typography GAP-TYP-01: label **13** · input D14 / M16.

## 4. Screens

### S-LIST — Kind B catalog (A–D + F)

| Zone | UI | AC |
|------|-----|----|
| A Header | Title «Biểu 09 — Mốc lộ giới / GPMB» · back hub | **cấm** slug trên card · **cấm** Thêm mới trên A |
| B Toolbar+filter | SearchTextInput · province · status · road SearchInput · kmFrom/kmTo · side · markerKind · CRUD toolbar | **search must work** · **cấm** nút Tìm riêng · filter → page=1 |
| C Grid | `LinCatalogDataGrid` shared + marker subset | STT · row menu · kéo cột ON · **cấm** chỉ 3 detail |
| D Footer | `LinCatalogListPagination` | 50/100/200/500 |
| F Schema | `LinCatalogUiSchemaEditorModal` | catalogKind=`boundary-markers` |

**Grid AC (list pack · REQUIRED):**

| # | AC |
|---|-----|
| G1 | Columns bind shared + marker typed (code · road · province · km · side · markerKind · markerStructure · dim/qty · completedYear · status · …) — không chỉ detail* |
| G2 | Sort/drag column ON theo UiSchema |
| G3 | Row actions: Xem / Sửa / Copy / Xóa / Lịch sử |
| G4 | Empty state VN «Chưa có mốc lộ giới / GPMB» + CTA Tạo mới |
| G5 | Pagination pageSize ∈ {50,100,200,500} |
| G6 | Soft-delete ẩn row · refresh list |
| G7 | Filter `markerKind` đồng bộ list |

**Report AC:** N/A (`packKind=list`).

### S-FORM-* — Kind D Slideout (Z1–Z3 · 2col · 2 section kind)

| Mode | Behavior |
|------|----------|
| Create | empty · code auto `MK-…` readonly · chọn markerKind → nhãn section |
| Edit | load detail · save PUT |
| View | `readOnly` · **cấm** disabled xám |
| Copy | clone fields · new code on save |

**Normalized header (17):**  
`code|roadCode|roadName|province|kmFrom|kmTo|side|markerKind|markerStructure|markerLengthM|markerWidthM|markerAreaM2|markerQty|completedYear|status|manageUnit|notes`

| Zone / section | Fields (controlHint từ analy · PO chốt) |
|----------------|------------------------------------------|
| Z1 Identity / vị trí | code (ro) · roadCode/roadName SearchInput · province Dropdown · kmFrom/kmTo Number · side Dropdown · markerKind Dropdown* · status Dropdown |
| Z2 Mốc (section theo kind) | markerStructure Dropdown* · markerLengthM/WidthM Number · markerAreaM2 Number · markerQty Number (default 1) · completedYear Number* — section title «Mốc lộ giới» khi RoadLimit · «Mốc GPMB» khi GPMB |
| Z3 QL / ghi chú | manageUnit Text (P1) · notes Textarea |

### S-HUB-ENTRY

Hub card `boundary-markers` → cùng list typed · label **Biểu 09** · title VN · **cấm** hiện slug `csdl-bieu-09` trên card.

### S-SKIP-MAP / S-PEER

- Map: **none**.
- Peer Sổ TS: **none** · **cấm** merge / bind `road-assets`.

## 5. Leave / dirty

| Trigger | UX |
|---------|-----|
| Cancel / đóng X / Esc / back khi dirty | `LeaveConfirmModal` — Lưu / Không lưu / Ở lại |
| Clean | đóng ngay |
| Save success | đóng · toast · refresh list |
| **Cấm** | `window.confirm` / `alert` |

## 6. PO decisions (open Q · autoApprove)

| ID | Decision | Rationale |
|----|----------|-----------|
| Q-ROUTE | **alias_now** | mfeStdUrl/STATUS đã lock `/csdl-bieu-09` · peer Biểu 0x cùng pattern |
| Q-PROV | **keep_static** | P1 LOOKUP_STATIC · master province = P2 |
| Q-KIND-LABEL | **code_en** | API/value `RoadLimit`/`GPMB` · UI label VN «Mốc lộ giới»/«Mốc GPMB» |
| Q-STRUCT | **excel_seed** | LOOKUP_STATIC seed từ Excel Biểu 9 (bê tông / đá / khác…) |
| Q-DIM | **full_dim** | Hiện Length/Width/Area/Qty · L/W/Area optional · không bắt buộc chỉ Area |
| Q-QTY | **show_always** | Form+list hiện Qty · default **1** |
| Q-LIST-COLS | **subset** | Shared + typed marker subset · schema-config bổ sung |
| Q-REN-LABEL | **with_typed** | hub Biểu 8→09 cùng release typed |

**Open Q sau PO:** **none** (autopilot chốt).

## 7. Out of scope / DEFER / OUT

| Item | Bucket |
|------|--------|
| manageUnit SearchInput org-unit | **DEFER P2** |
| master province | **DEFER P2** |
| Import/export XLS Biểu 9 17 cột merge | **OUT** GAP-CSDL-XLS-01 · toolbar stub OK |
| Map canvas / invent gis embed | **OUT** · deep-link only |
| Merge form Sổ TS / road-assets | **CẤM** |
| yarn build / e2e / start:std @ PO | **CẤM** |
| Re-scan demo / crawl CTX | **CẤM** (hash skip) |

## 8. Handoff

| Role | Need |
|------|------|
| **Design** | control-map khớp controlHint · prototype list+slideout · **2 section kind** · reviewUrl · Grid subset · filter markerKind · LinErpListFilterBar |
| **SA** | path `api/v1/asset/csdl-records` · typed DTO/UiSchema · Schema_CsdlBieu9 · renumber formNo · **cấm** 2 entity · **cấm** invent infra |
| **TL/Dev** | Wire controlHint · **cấm** đoán Text vs SearchInput · IdCode `MK-` |
| **QA** | scenarios + e2e queued `/agent-qa*` only |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-po |
| skillVersion | 2026.08.25.02 |
| schemaVersion | 1 |
| workflowVersion | 2026.09.01.02 |
| rulesVersion | 2026.08.31.2 |
| contentHash | `sha256:863490daf95d2c19ddad660fc05f901eaeb0248fb65961f9e96747ebcf5b04e4` |
| headerFingerprint | `sha256:18fb135f880ed55afa6e9277e8980fd0458a24d85d87e69a753b805424f396bb` |
| generatedAt | 2026-09-05T17:50:00.000Z |
| versionGate | ok |
| taskId | task_cee30b17 |
| packKind | list |
| changeScope | new_page |

---
<!-- Version meta: skillId=agent-po skillVersion=2026.08.25.02 schemaVersion=1 workflowVersion=2026.09.01.02 rulesVersion=2026.08.31.2 versionGate=ok contentHash=sha256:863490daf95d2c19ddad660fc05f901eaeb0248fb65961f9e96747ebcf5b04e4 -->
