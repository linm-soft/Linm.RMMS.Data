# PO — Requirement — csdl-bieu-07 (Biểu 07 — Lề / taluy / hàng rào)

| Field | Value |
|-------|-------|
| feature | `csdl-bieu-07` |
| title | CSDL Biểu 07 — Lề / taluy / hàng rào |
| this role | `po` · `/agent-po` |
| changeScope | **`new_page`** (STATUS + packet · typed Biểu 7 trên resource `shoulders-fences`) |
| packKind | **`list`** (**PO confirm** · data-analy đề xuất · Kind B list A–D + Kind D Slideout) |
| Feature Kind | **B** catalog A–D+F · **D** Slideout Z1–Z3 · **2col** · **cấm** Full-page form |
| resource | `shoulders-fences` |
| formNo | `07` · title VN **Lề / taluy / hàng rào** · live hub còn **Biểu 10** → renumber **T-REN-01** |
| columns | **20** (Excel Biểu 7) |
| IdCode | prefix **`LE`** · `LE-yyyyMMdd-nnnn` · **cấm** Guid |
| peerSoTs | `SHOULDER` (type-grid · chưa enqueue typed so-ts) — deep-link OK nếu có · **cấm** merge 1 form hai chuẩn (**GAP-BIEU07-PEER-01** / **GAP-CSDL-CUC-11**) · **≠** `road-assets` |
| gap | GAP-BIEU07-TYPED-01 · GAP-BIEU07-REN-01 · GAP-BIEU07-ROUTE-01 · GAP-BIEU07-SHOULDER-01 · GAP-BIEU07-SLOPE-01 · GAP-BIEU07-FENCE-01 · GAP-BIEU07-FENCE-LEN-01 · GAP-BIEU07-PANEL-01 · GAP-BIEU07-PEER-01 · GAP-CSDL-ROAD-01 · GAP-CSDL-PROV-01 · GAP-CSDL-ORG-01 · GAP-CSDL-XLS-01 · GAP-CSDL-CUC-03 · GAP-CSDL-CUC-11 · GAP-TYP-01 |
| mode | `feature_context` · CTX + cluster analy + hub demo zone ref · sourceKind=`synthetic` · **cấm** demo-json/LS SSOT |
| status | `confirmed` (autoApprove=ON · task `task_8566976f`) |
| requestSource | queue CHAIN `/agent-qldb-workflow` · roleOnly=`po` · `/agent-po` · prior data_analy **confirmed** |
| autoApprove | **ON** — Design/SA/Review khi tới lượt → agent tự confirm · enqueue role kế. Role PO **không** gate confirm. |
| e2eQa | **ON** — queued tới `/agent-qa*` · **cấm** e2e / `yarn start:std` / `yarn build` ở role PO |
| prior · data_analy | status=`done`/`confirmed` · `specs/_data-analy/features/csdl-bieu-07-control-hint.md` · `csdl-bieu-07-real-data.md` · compact `handoff/data_analy-compact.md` · contentHash `sha256:5634091e7ce3e5272c090320398a76d75f84ed7326366e93e088ff2154e8bf44` · headerFingerprint `sha256:ba33856d00d23440b05be8c78c8b8a5462662c96a1067e702b791eb5020d64cf` · analy `task_480d8882` · **cấm** re-scan demo (**GAP-PO-DEMO-RESCAN-01**) |
| productRoot | `D:/AI-QLBD/Linm.RMMS.Data` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| mfeStdRoute | **`/csdl-bieu-07`** (alias Navigate **now**) · hub `/so-ts/csdl-so-sach?resource=shoulders-fences` |
| mfeStdUrl | `http://localhost:9301/csdl-bieu-07` |
| hubDeepLink | `http://localhost:9301/so-ts/csdl-so-sach?resource=shoulders-fences` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · domain **Asset** · live `api/v1/asset/csdl-records?resource=shoulders-fences` · BFF `web-bff/api/v1/asset/csdl-records` · **cấm ERP.*** · **cấm** invent `api/v1/infra/*` · **cấm** `api/v1/so-ts/*` invent · **cấm** `api/v1/rmms/*` |
| domain | **Asset** |
| be_repo_confirm | `approve` (`Linm.RMMS.WebService`) |
| ui_repo_confirm | `approve` (`Linm.Web.RMMS.Asset`) |
| controlHint | `D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/csdl-bieu-07-control-hint.md` |
| realData | `D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/csdl-bieu-07-real-data.md` |
| contentHash | `sha256:5634091e7ce3e5272c090320398a76d75f84ed7326366e93e088ff2154e8bf44` |
| headerFingerprint | `sha256:ba33856d00d23440b05be8c78c8b8a5462662c96a1067e702b791eb5020d64cf` |
| analyReuse | **hash skip** — **cấm** re-scan demo / crawl CTX / DemoRoot (**GAP-PO-DEMO-RESCAN-01**) |
| parent | hub `csdl-so-sach` · cluster `csdl-cuc-2026` · Excel sheet Biểu 7 |
| taskId | `task_8566976f` · analy `task_480d8882` |
| updatedAt | `2026-09-05T09:30:00.000Z` |
| versionGate | `ok` (skill/schema/workflow khớp analy · pack `po/list@session`) |

**packKind confirm:** `list` (data-analy đề xuất · PO chốt). Kind **B** list A–D+F + Kind **D** Slideout 2col trên MFE Asset host `:9301` — **không** report pack · **không** Kind F map canvas · **không** Excel import wizard trong pack này (OUT **GAP-CSDL-XLS-01**).

**≠** Sổ TS `SHOULDER` (peer deep-link) · **≠** hub generic 3 ô `detail*` — đây là **typed Biểu 07** 20 cột · 3 khối lề / taluy / hàng rào.

**Cấm:** implement · re-scan demo · form chỉ 3 ô `detail*` · merge form Sổ TS · invent map · invent API · ERP.* · demo-json / localStorage SSOT · Guid IdCode · yarn build/e2e/start:std ở role PO · start role khác (**GAP-PKT-ROLE-01**).

## 1. Goal

Chốt requirement **new_page** cho **Biểu 07 — Lề / taluy / hàng rào** (`resource=shoulders-fences`): list + Slideout typed **20 cột** Excel Biểu 7 · thay generic hub form · giữ API prefix `csdl-records` · alias route `/csdl-bieu-07` + hub entry · renumber formNo 10→7 cùng release typed.

Persona: Khu QLĐB · Văn phòng Cục · Ban QLDA (web).

**Delta pack này (SSOT lock từ analy):**

1. Form/list typed 20 cột — **cấm** chỉ `detailPrimary`/`detailSpec`/`detailExtra` (**GAP-BIEU07-TYPED-01** / **GAP-CSDL-CUC-03**).
2. Renumber formNo **10→7** · title «Lề / taluy / hàng rào» · giữ `?resource=shoulders-fences` (**GAP-BIEU07-REN-01** / **T-REN-01** · **Q-REN-LABEL** with_typed).
3. Alias mfeStd `/csdl-bieu-07` Navigate P1 · giữ hub deep-link (**Q-ROUTE** / **GAP-BIEU07-ROUTE-01**).
4. Khối lề: `side` · `shoulderStructure` · dài · rộng · DT (**GAP-BIEU07-SHOULDER-01**).
5. Khối taluy: `slopeLengthM` · `slopeAreaM2` · map DB `SlopeClearingM` (**GAP-BIEU07-SLOPE-01** · **Q-SLOPE** map_clearing).
6. Khối hàng rào: `fenceKind` · `fencePostCount` · `fenceLengthKm` (**GAP-BIEU07-FENCE-01**).
7. Đơn vị dài HR = **km** Excel · SA map `FenceLengthM` ↔ `fenceLengthKm` (**Q-FENCE-LEN** / **GAP-BIEU07-FENCE-LEN-01**).
8. `fencePanelCount` **omit P1** (**Q-PANEL**).
9. `shoulderStructure` / `fenceKind` LOOKUP seed P1 (**Q-STRUCT**).
10. `side` **shared** 1 field cho 3 khối P1 (**Q-SIDE**).
11. `roadCode`/`roadName` = SearchInput `road-route` filter + form (**GAP-CSDL-ROAD-01**).
12. Province LOOKUP_STATIC P1 (**Q-PROV** keep_static).
13. LeaveConfirmModal dirty · toast 4xx/5xx — **cấm** native alert/confirm.
14. Import/export sheet Biểu 7 OUT pack (**GAP-CSDL-XLS-01**).
15. Peer Sổ TS deep-link only — **cấm** merge form (**GAP-BIEU07-PEER-01**).

## 2. Current → New (`new_page` · REQUIRED)

Nguồn SSOT: control-hint + real-data §A+§B · `analyzedAt=2026-09-05T09:14:17.821Z` · contentHash khớp STATUS · **không** crawl demo/CTX lại.

| Layer | Current (live inventory analy) | New (this pack · copy analy) |
|-------|--------------------------------|------------------------------|
| Entry | Hub-only `?resource=shoulders-fences` | Alias **`/csdl-bieu-07`** + hub entry — **GAP-BIEU07-ROUTE-01** |
| formNo / title | Demo/live **Biểu 10** · «Lề đường / hàng rào» | **Biểu 07** · «Lề / taluy / hàng rào» — **GAP-BIEU07-REN-01** |
| List Kind B | Generic road/km/detail cols | Typed KC lề · dài/rộng/DT · taluy · fenceKind · số cột · dài km |
| Form Kind D | 3 ô `detail*` polymorphic | Typed **20 cột** Slideout 2col Z1–Z3 · 3 section — **GAP-BIEU07-TYPED-01** |
| shoulder | detail* gộp | side · structure · length/width/area — **GAP-BIEU07-SHOULDER-01** |
| slope | DB `SlopeClearingM` 1 số | `slopeLengthM` (= clearing) · `slopeAreaM2` — **GAP-BIEU07-SLOPE-01** |
| fence | detail* không tách | fenceKind · postCount · lengthKm — **GAP-BIEU07-FENCE-01** |
| fence length | DB `FenceLengthM` | UI `fenceLengthKm` · SA convert — **Q-FENCE-LEN** |
| fencePanelCount | DB optional | **omit P1** — **Q-PANEL** |
| road | Text free (hub) | SearchInput `road-route` — **GAP-CSDL-ROAD-01** |
| province | LOOKUP_STATIC 5 tỉnh | **keep_static** P1 — **Q-PROV** |
| manageUnit | Text | Text P1 · SearchInput org-unit **DEFER P2** — **GAP-CSDL-ORG-01** |
| Import | stub | Sheet 20 cột **OUT** |
| API | `…/csdl-records?resource=shoulders-fences` | **Giữ prefix** · widen typed DTO/UiSchema — SA |
| Peer | type `SHOULDER` | Deep-link · **cấm** merge · **≠** `road-assets` |

**Không đổi:** Kind B A–D · Kind D Slideout · `LinPageLayout kind="catalog"` · `LinCatalogListPagination` 50/100/200/500 · prefix `api/v1/asset/csdl-records` · resource key `shoulders-fences` · IdCode **cấm** Guid · prefix **`LE`** · **cấm ERP.*** · map = none.

### GAP IDs (PO bắt buộc Design/Dev đóng P1 trừ DEFER/OUT)

| ID | New | P1 |
|----|-----|----|
| GAP-BIEU07-TYPED-01 | Typed 20 cột thay generic detail* | **YES** |
| GAP-BIEU07-REN-01 | formNo 10→7 · title taluy · T-REN-01 | **YES** (`with_typed`) |
| GAP-BIEU07-ROUTE-01 | Alias `/csdl-bieu-07` Navigate | **YES** (`alias_now`) |
| GAP-BIEU07-SHOULDER-01 | Khối lề KC/dài/rộng/DT + side | **YES** (`shared` side) |
| GAP-BIEU07-SLOPE-01 | Khối taluy dài+DT · map SlopeClearingM | **YES** (`map_clearing`) |
| GAP-BIEU07-FENCE-01 | Khối HR quy cách · số cột · dài | **YES** |
| GAP-BIEU07-FENCE-LEN-01 | fenceLengthKm (Excel) vs FenceLengthM | **YES** (`km` · SA map) |
| GAP-BIEU07-PANEL-01 | fencePanelCount optional | **DEFER** (`omit_p1`) |
| GAP-CSDL-ROAD-01 | SearchInput `road-route` filter+form | **YES** |
| GAP-CSDL-PROV-01 | Province LOOKUP_STATIC | **YES** (keep_static) · master = P2 |
| GAP-BIEU07-PEER-01 | Deep-link Sổ TS · không merge | **YES** (nav rule) |
| GAP-CSDL-CUC-03 | Đóng gap Biểu 7 khi typed PASS | **YES** (via TYPED) |
| GAP-CSDL-CUC-11 | 2 lớp vận hành vs biểu Cục | **YES** (peer rule) |
| GAP-TYP-01 | label 13 · input D14/M16 | **YES** |
| GAP-CSDL-ORG-01 | manageUnit SearchInput org-unit | **DEFER P2** |
| GAP-CSDL-XLS-01 | Import/export sheet Biểu 7 | **OUT pack** |

## 3. DoD (đo được)

1. Entry `/csdl-bieu-07` **và** hub `?resource=shoulders-fences` mở cùng list typed — title VN «Biểu 07 — Lề / taluy / hàng rào» · back hub · **cấm** slug trên card hub · hub card label đổi 10→07 cùng release.
2. List BFF `GET …/csdl-records?resource=shoulders-fences` — empty grid VN «Chưa có lề / taluy / hàng rào» · CTA Tạo mới · **cấm** fake row / demo-json / LS SSOT.
3. Zone A: title VN · back `/so-ts/csdl-so-sach` — **cấm** Thêm mới trên A.
4. Zone B: `LinErpListFilterBar` 1 hàng wrap · input+🔍 cụm phải — SearchTextInput · province · status · road SearchInput · kmFrom/kmTo · side · fenceKind (opt) · Tạo mới · Refresh · Delete · History · SchemaConfig · Import/Export stub — filter đổi → page=1 · **search must work** · **cấm** nút Tìm riêng.
5. Zone C: `LinCatalogDataGrid` typed cols (không chỉ 3 detail) · STT · row menu Xem/Sửa/Copy/Xóa/Lịch sử · kéo cột ON.
6. Zone D: `LinCatalogListPagination` **50 / 100 / 200 / 500**.
7. Zone F: `LinCatalogUiSchemaEditorModal` catalogKind **`shoulders-fences`** (typed) — **cấm** `LinListTableConfigModal`.
8. Slideout Kind D Z1–Z3 2col · **3 section** lề / taluy / HR: Create/Edit/View/Copy — đủ cột Excel Biểu 7 · **cấm** form chỉ 3 ô `detail*`.
9. Required P1: `roadCode`/`roadName` · `province` · `kmFrom`/`kmTo` · `side` · `shoulderStructure` · `shoulderLengthM` · `shoulderWidthM` · `status` · code IdCode `LE-…` readonly.
10. View = `readOnly` — **cấm** Input disabled xám toàn form.
11. LeaveConfirmModal khi dirty Cancel/đóng/back — **cấm** `window.confirm`.
12. Soft-delete API → row biến mất · list refresh · toast lỗi 4xx/5xx — **cấm** `alert()`.
13. Peer deep-link type `SHOULDER` optional — **cấm** merge form / bind `road-assets`.
14. Map = none — toolbar map → gis deep-link only · **cấm** invent map canvas.
15. Typography GAP-TYP-01: label **13** · input D14 / M16.

## 4. Screens

### S-LIST — Kind B catalog (A–D + F)

| Zone | UI | AC |
|------|-----|----|
| A Header | Title «Biểu 07 — Lề / taluy / hàng rào» · back hub | **cấm** slug trên card · **cấm** Thêm mới trên A |
| B Toolbar+filter | SearchTextInput · province · status · road SearchInput · kmFrom/kmTo · side · fenceKind opt · CRUD toolbar | **search must work** · **cấm** nút Tìm riêng · filter → page=1 |
| C Grid | `LinCatalogDataGrid` typed | STT · row menu · kéo cột ON · **cấm** chỉ 3 detail cols |
| D Footer | `LinCatalogListPagination` | 50/100/200/500 |
| F Schema | `LinCatalogUiSchemaEditorModal` | catalogKind=`shoulders-fences` |

**Grid AC (list pack · REQUIRED):**

| # | AC |
|---|-----|
| G1 | Columns bind typed fields (code · road · province · kmFrom/kmTo · side · shoulderStructure · length/width/area · slope* · fenceKind · fencePostCount · fenceLengthKm · status · …) — không chỉ detail* |
| G2 | Sort/drag column ON theo UiSchema |
| G3 | Row actions: Xem / Sửa / Copy / Xóa / Lịch sử |
| G4 | Empty state VN + CTA Tạo mới |
| G5 | Pagination pageSize ∈ {50,100,200,500} |
| G6 | Soft-delete ẩn row · refresh list |

**Report AC:** N/A (`packKind=list`).

### S-FORM-* — Kind D Slideout (Z1–Z3 · 2col · 3 section)

| Mode | Behavior |
|------|----------|
| Create | empty · code auto `LE-…` readonly |
| Edit | load detail · save PUT |
| View | `readOnly` · **cấm** disabled xám |
| Copy | clone fields · new code on save |

**Normalized header (20):**  
`code|roadCode|roadName|province|kmFrom|kmTo|side|shoulderStructure|shoulderLengthM|shoulderWidthM|shoulderAreaM2|slopeLengthM|slopeAreaM2|fenceKind|fencePostCount|fenceLengthKm|builtYear|status|manageUnit|notes`

| Zone / section | Fields (controlHint từ analy · PO chốt) |
|----------------|------------------------------------------|
| Z1 Identity / vị trí | code (ro) · roadCode/roadName SearchInput · province Dropdown · kmFrom/kmTo Number · side Dropdown (shared) · status Dropdown |
| Z2a Lề | shoulderStructure Dropdown LOOKUP · shoulderLengthM Number* · shoulderWidthM Number* · shoulderAreaM2 Number (optional / derived OK) |
| Z2b Taluy | slopeLengthM Number (= SlopeClearingM) · slopeAreaM2 Number |
| Z2c Hàng rào | fenceKind Dropdown LOOKUP · fencePostCount Number ≥0 · fenceLengthKm Number |
| Z3 QL / ghi chú | builtYear Number · manageUnit Text (P1) · notes Textarea |

### S-HUB-ENTRY

Hub card `shoulders-fences` → cùng list typed · label **Biểu 07** · title VN · **cấm** hiện slug `csdl-bieu-07` trên card.

### S-PEER-SOTS / S-SKIP-MAP

- Peer: deep-link Sổ TS type `SHOULDER` only (khi route sẵn).
- Map: **none**.

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
| Q-ROUTE | **alias_now** | Alias `/csdl-bieu-07` + hub entry P1 (peer Biểu 01–06) |
| Q-PROV | **keep_static** | LOOKUP_STATIC P1 · master province = P2 |
| Q-SIDE | **shared** | 1 `side` (L/R/Both) dùng chung 3 khối P1 · per_block = P2 nếu cần |
| Q-SLOPE | **map_clearing** | `slopeLengthM` ↔ DB `SlopeClearingM` 1:1 · giữ `slopeAreaM2` riêng |
| Q-FENCE-LEN | **km** | Excel SSOT km · UI `fenceLengthKm` · SA convert từ/sang `FenceLengthM` |
| Q-PANEL | **omit_p1** | Không bắt buộc `fencePanelCount` trên form P1 |
| Q-STRUCT | **lookup_seed** | shoulderStructure (cứng/mềm/khác) · fenceKind (lưới/tôn/bê tông/khác) LOOKUP_STATIC |
| Q-REN-LABEL | **with_typed** | Đổi label hub Biểu 10→07 cùng release typed |

**Open Q còn lại:** **none** (autopilot chốt hết).

## 7. Out of scope (P1)

- `fencePanelCount` trên form (**omit_p1**)
- manageUnit SearchInput org-unit (**DEFER P2**)
- master province API
- side per_block
- Import/export XLS wizard đầy đủ (**OUT** GAP-CSDL-XLS-01 · toolbar stub OK)
- Enqueue typed so-ts `SHOULDER`
- Map canvas / invent API / ERP.*
- yarn build / e2e / start:std ở role PO

## 8. Handoff Design

| Need | Detail |
|------|--------|
| control-map | Khớp controlHint 20 cột · 3 section lề/taluy/HR · filter Zone B |
| prototype | list + Slideout 2col · reviewUrl |
| renumber | Hub card Biểu 07 label cùng typed |
| typography | GAP-TYP-01 |
| **cấm** | invent control · demo-json SSOT · Full-page form |

## 9. Handoff SA

| Need | Detail |
|------|--------|
| API | Giữ `api/v1/asset/csdl-records` · resource `shoulders-fences` |
| DTO/UiSchema | Typed 20 cột · Schema_CsdlBieu7 |
| Map | SlopeClearingM↔slopeLengthM · FenceLengthM↔fenceLengthKm (km) |
| Renumber | formNo 7 · T-REN-01 |
| **cấm** | invent `api/v1/infra/*` · ERP.* |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-po |
| skillVersion | 2026.08.25.02 |
| schemaVersion | 1 |
| workflowVersion | 2026.09.01.02 |
| rulesVersion | 2026.08.31.2 |
| contentHash | `sha256:5634091e7ce3e5272c090320398a76d75f84ed7326366e93e088ff2154e8bf44` |
| headerFingerprint | `sha256:ba33856d00d23440b05be8c78c8b8a5462662c96a1067e702b791eb5020d64cf` |
| generatedAt | 2026-09-05T09:30:00.000Z |
| versionGate | ok |
| taskId | task_8566976f |
| packKind | list |
| changeScope | new_page |

---
<!-- Version meta: skillId=agent-po skillVersion=2026.08.25.02 schemaVersion=1 workflowVersion=2026.09.01.02 rulesVersion=2026.08.31.2 versionGate=ok contentHash=sha256:5634091e7ce3e5272c090320398a76d75f84ed7326366e93e088ff2154e8bf44 -->
