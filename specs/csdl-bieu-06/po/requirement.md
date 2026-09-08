# PO — Requirement — csdl-bieu-06 (Biểu 06 — Hầm chui DS + hộp KT)

| Field | Value |
|-------|-------|
| feature | `csdl-bieu-06` |
| title | CSDL Biểu 06 — Hầm chui DS + hộp KT |
| this role | `po` · `/agent-po` |
| changeScope | **`new_page`** (STATUS + packet · typed Biểu 6 trên resource `underpasses`) |
| packKind | **`list`** (**PO confirm** · data-analy đề xuất · Kind B list A–D + Kind D Slideout) |
| Feature Kind | **B** catalog A–D+F · **D** Slideout Z1–Z3 · **2col** · **cấm** Full-page form |
| resource | `underpasses` |
| formNo | `06` · title VN **Hầm chui DS + hộp KT** |
| columns | **19** (Excel Biểu 6) |
| IdCode | prefix **`HC`** · `HC-yyyyMMdd-nnnn` · **cấm** Guid |
| peerSoTs | `so-ts-underpass` (UNDERPASS) — deep-link OK · **cấm** merge 1 form hai chuẩn (**GAP-BIEU06-PEER-01** / **GAP-CSDL-CUC-11**) · **≠** `road-assets` |
| gap | GAP-BIEU06-TYPED-01 · GAP-BIEU06-ROUTE-01 · GAP-BIEU06-KIND-01 · GAP-BIEU06-PIPE-01 · GAP-BIEU06-STRUCT-01 · GAP-BIEU06-LOAD-01 · GAP-BIEU06-PAVE-01 · GAP-BIEU06-LIGHT-01 · GAP-BIEU06-DRAIN-01 · GAP-BIEU06-POINT-01 · GAP-BIEU06-PEER-01 · GAP-CSDL-ROAD-01 · GAP-CSDL-PROV-01 · GAP-CSDL-ORG-01 · GAP-CSDL-XLS-01 · GAP-CSDL-CUC-03 · GAP-CSDL-CUC-11 · GAP-TYP-01 |
| mode | `feature_context` · CTX + cluster analy + hub demo zone ref · sourceKind=`synthetic` · **cấm** demo-json/LS SSOT |
| status | `confirmed` (autoApprove=ON · task `task_93f99dd1`) |
| requestSource | queue CHAIN `/agent-qldb-workflow` · roleOnly=`po` · `/agent-po` · prior data_analy **confirmed** |
| autoApprove | **ON** — Design/SA/Review khi tới lượt → agent tự confirm · enqueue role kế. Role PO **không** gate confirm. |
| e2eQa | **ON** — queued tới `/agent-qa*` · **cấm** e2e / `yarn start:std` / `yarn build` ở role PO |
| prior · data_analy | status=`done`/`confirmed` · `specs/_data-analy/features/csdl-bieu-06-control-hint.md` · `csdl-bieu-06-real-data.md` · compact `handoff/data_analy-compact.md` · contentHash `sha256:ffc5c8381b04dcec3f0376df87187012f34b16bf211a3e3fb7311a8375a386f0` · headerFingerprint `sha256:3b2f5c531f0538509147846466d92090a3c8f5adc05a4be6d1dbb80ad73ff2a7` · analy `task_b6ef926c` · **cấm** re-scan demo (**GAP-PO-DEMO-RESCAN-01**) |
| productRoot | `D:/AI-QLBD/Linm.RMMS.Data` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| mfeStdRoute | **`/csdl-bieu-06`** (alias Navigate **now**) · hub `/so-ts/csdl-so-sach?resource=underpasses` |
| mfeStdUrl | `http://localhost:9301/csdl-bieu-06` |
| hubDeepLink | `http://localhost:9301/so-ts/csdl-so-sach?resource=underpasses` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · domain **Asset** · live `api/v1/asset/csdl-records?resource=underpasses` · BFF `web-bff/api/v1/asset/csdl-records` · **cấm ERP.*** · **cấm** invent `api/v1/infra/*` · **cấm** `api/v1/so-ts/*` invent · **cấm** `api/v1/rmms/*` |
| domain | **Asset** |
| be_repo_confirm | `approve` (`Linm.RMMS.WebService`) |
| ui_repo_confirm | `approve` (`Linm.Web.RMMS.Asset`) |
| controlHint | `D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/csdl-bieu-06-control-hint.md` |
| realData | `D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/csdl-bieu-06-real-data.md` |
| contentHash | `sha256:ffc5c8381b04dcec3f0376df87187012f34b16bf211a3e3fb7311a8375a386f0` |
| headerFingerprint | `sha256:3b2f5c531f0538509147846466d92090a3c8f5adc05a4be6d1dbb80ad73ff2a7` |
| analyReuse | **hash skip** — **cấm** re-scan demo / crawl CTX / DemoRoot (**GAP-PO-DEMO-RESCAN-01**) |
| parent | hub `csdl-so-sach` · cluster `csdl-cuc-2026` · Excel sheet Biểu 6 |
| taskId | `task_93f99dd1` · analy `task_b6ef926c` |
| updatedAt | `2026-09-05T07:20:00.000Z` |
| versionGate | `ok` (skill/schema/workflow khớp analy · pack `po/list@session`) |

**packKind confirm:** `list` (data-analy đề xuất · PO chốt). Kind **B** list A–D+F + Kind **D** Slideout 2col trên MFE Asset host `:9301` — **không** report pack · **không** Kind F map canvas · **không** Excel import wizard trong pack này (OUT **GAP-CSDL-XLS-01**).

**≠** Sổ TS `so-ts-underpass` (peer deep-link) · **≠** hub generic 3 ô `detail*` — đây là **typed Biểu 06** 19 cột · gồm **hộp kỹ thuật**.

**Cấm:** implement · re-scan DEM · form chỉ 3 ô `detail*` · merge form Sổ TS · invent map · invent API · ERP.* · demo-json / localStorage SSOT · Guid IdCode · yarn build/e2e/start:std ở role PO · start role khác (**GAP-PKT-ROLE-01**).

## 1. Goal

Chốt requirement **new_page** cho **Biểu 06 — Hầm chui DS + hộp KT** (`resource=underpasses`): list + Slideout typed **19 cột** Excel Biểu 6 · thay generic hub form · giữ API prefix `csdl-records` · alias route `/csdl-bieu-06` + hub entry · CTX «Thêm hộp kỹ thuật».

Persona: Khu QLĐB · Văn phòng Cục · Ban QLDA (web).

**Delta pack này (SSOT lock từ analy):**

1. Form/list typed 19 cột — **cấm** chỉ `detailPrimary`/`detailSpec`/`detailExtra` (**GAP-BIEU06-TYPED-01** / **GAP-CSDL-CUC-03**).
2. Alias mfeStd `/csdl-bieu-06` Navigate P1 · giữ hub deep-link (**Q-ROUTE** / **GAP-BIEU06-ROUTE-01**).
3. `underpassKind` LOOKUP hầm chui DS / hộp KT (**GAP-BIEU06-KIND-01** · **Q-KIND**).
4. `pipeCount` số ống/ngăn (**GAP-BIEU06-PIPE-01** · **Q-PIPE**).
5. `bodyStructure` + `portalStructure` typed (**GAP-BIEU06-STRUCT-01**).
6. `designLoad` LOOKUP HL93/H30/… (**GAP-BIEU06-LOAD-01** · **Q-LOAD**).
7. `pavementInside` BTXM/BTN (**GAP-BIEU06-PAVE-01**).
8. `lighting` / `drainage` Dropdown có/không (**GAP-BIEU06-LIGHT-01** / **GAP-BIEU06-DRAIN-01**).
9. `kmPoint` Point — **không** ép kmTo (**GAP-BIEU06-POINT-01**).
10. `apertureM` Number m (DB) (**Q-APERTURE**).
11. `roadCode`/`roadName` = SearchInput `road-route` filter + form (**GAP-CSDL-ROAD-01**).
12. Province LOOKUP_STATIC P1 (**Q-PROV** keep_static).
13. LeaveConfirmModal dirty · toast 4xx/5xx — **cấm** native alert/confirm.
14. Import/export sheet Biểu 6 OUT pack (**GAP-CSDL-XLS-01**).
15. Peer Sổ TS deep-link only — **cấm** merge form (**GAP-BIEU06-PEER-01**).

## 2. Current → New (`new_page` · REQUIRED)

Nguồn SSOT: control-hint + real-data §A+§B · `analyzedAt=2026-09-05T07:12:53.176Z` · contentHash khớp STATUS · **không** crawl demo/CTX lại.

| Layer | Current (live inventory analy) | New (this pack · copy analy) |
|-------|--------------------------------|------------------------------|
| Entry | Hub-only `?resource=underpasses` | Alias **`/csdl-bieu-06`** + hub entry — **GAP-BIEU06-ROUTE-01** |
| List Kind B | Generic road/km/detail cols | Typed cols khẩu độ · số ống · thân/cửa · dài · tải · mặt trong · chiếu sáng · thoát · năm · loại |
| Form Kind D | 3 ô `detail*` polymorphic | Typed **19 cột** Slideout 2col Z1–Z3 — **GAP-BIEU06-TYPED-01** |
| underpassKind | Demo title chỉ «Hầm chui dân sinh» | Dropdown hầm chui DS / hộp KT — **GAP-BIEU06-KIND-01** |
| pipeCount | — | Number integer ≥1 optional P1 — **GAP-BIEU06-PIPE-01** |
| body/portal | — | Dropdown BT/BTCT/đá xây/khác — **GAP-BIEU06-STRUCT-01** |
| designLoad | — | LOOKUP HL93/H30/khác — **GAP-BIEU06-LOAD-01** |
| pavementInside | — | Dropdown BTXM/BTN — **GAP-BIEU06-PAVE-01** |
| lighting / drainage | — | Dropdown có/không — **Q-LIGHT** / **Q-DRAIN** |
| km | Demo km generic | `kmPoint` Point filter+form — **GAP-BIEU06-POINT-01** |
| apertureM | — | Number m (DB `ApertureM`) — **Q-APERTURE** |
| road | Text free (hub) | SearchInput `road-route` — **GAP-CSDL-ROAD-01** |
| province | LOOKUP_STATIC 5 tỉnh | **keep_static** P1 — **Q-PROV** |
| manageUnit | Text | Text P1 · SearchInput org-unit **DEFER P2** — **GAP-CSDL-ORG-01** |
| Import | stub | Sheet 19 cột **OUT** |
| API | `…/csdl-records?resource=underpasses` | **Giữ prefix** · widen typed DTO/UiSchema — SA |
| Peer | `so-ts-underpass` | Deep-link · **cấm** merge · **≠** `road-assets` |

**Không đổi:** Kind B A–D · Kind D Slideout · `LinPageLayout kind="catalog"` · `LinCatalogListPagination` 50/100/200/500 · prefix `api/v1/asset/csdl-records` · resource key `underpasses` · IdCode **cấm** Guid · prefix **`HC`** · **cấm ERP.*** · map = none.

### GAP IDs (PO bắt buộc Design/Dev đóng P1 trừ DEFER/OUT)

| ID | New | P1 |
|----|-----|----|
| GAP-BIEU06-TYPED-01 | Typed 19 cột thay generic detail* | **YES** |
| GAP-BIEU06-ROUTE-01 | Alias `/csdl-bieu-06` Navigate | **YES** (`alias_now`) |
| GAP-BIEU06-KIND-01 | underpassKind hầm chui DS / hộp KT | **YES** (`hc_ds_hop_kt`) |
| GAP-BIEU06-PIPE-01 | pipeCount số ống/ngăn | **YES** (`optional` P1) |
| GAP-BIEU06-STRUCT-01 | body + portal structure typed | **YES** |
| GAP-BIEU06-LOAD-01 | designLoad LOOKUP HL93/H30/… | **YES** (`lookup_hl`) |
| GAP-BIEU06-PAVE-01 | pavementInside BTXM/BTN | **YES** |
| GAP-BIEU06-LIGHT-01 | lighting có/không | **YES** (`yes_no`) |
| GAP-BIEU06-DRAIN-01 | drainage có/không | **YES** (`yes_no`) |
| GAP-BIEU06-POINT-01 | kmPoint Point · không ép kmTo | **YES** |
| GAP-CSDL-ROAD-01 | SearchInput `road-route` filter+form | **YES** |
| GAP-CSDL-PROV-01 | Province LOOKUP_STATIC | **YES** (keep_static) · master = P2 |
| GAP-BIEU06-PEER-01 | Deep-link Sổ TS · không merge | **YES** (nav rule) |
| GAP-CSDL-CUC-03 | Đóng gap Biểu 6 khi typed PASS | **YES** (via TYPED) |
| GAP-CSDL-CUC-11 | 2 lớp vận hành vs biểu Cục | **YES** (peer rule) |
| GAP-TYP-01 | label 13 · input D14/M16 | **YES** |
| GAP-CSDL-ORG-01 | manageUnit SearchInput org-unit | **DEFER P2** |
| GAP-CSDL-XLS-01 | Import/export sheet Biểu 6 | **OUT pack** |

## 3. DoD (đo được)

1. Entry `/csdl-bieu-06` **và** hub `?resource=underpasses` mở cùng list typed — title VN «Biểu 06 — Hầm chui DS + hộp KT» · back hub · **cấm** slug trên card hub.
2. List BFF `GET …/csdl-records?resource=underpasses` — empty grid VN «Chưa có hầm chui / hộp KT» · CTA Tạo mới · **cấm** fake row / demo-json / LS SSOT.
3. Zone A: title VN · back `/so-ts/csdl-so-sach` — **cấm** Thêm mới trên A.
4. Zone B: `LinErpListFilterBar` 1 hàng wrap · input+🔍 cụm phải — SearchTextInput · province · status · road SearchInput · kmPoint · underpassKind · Tạo mới · Refresh · Delete · History · SchemaConfig · Import/Export stub — filter đổi → page=1 · **search must work** · **cấm** nút Tìm riêng.
5. Zone C: `LinCatalogDataGrid` typed cols (không chỉ 3 detail) · STT · row menu Xem/Sửa/Copy/Xóa/Lịch sử · kéo cột ON.
6. Zone D: `LinCatalogListPagination` **50 / 100 / 200 / 500**.
7. Zone F: `LinCatalogUiSchemaEditorModal` catalogKind **`underpasses`** (typed) — **cấm** `LinListTableConfigModal`.
8. Slideout Kind D Z1–Z3 2col: Create/Edit/View/Copy — đủ cột Excel Biểu 6 · **cấm** form chỉ 3 ô `detail*`.
9. Required P1: `roadCode`/`roadName` · `province` · `kmPoint` · `underpassKind` · `apertureM` · `lengthM` · `status` · code IdCode `HC-…` readonly.
10. View = `readOnly` — **cấm** Input disabled xám toàn form.
11. LeaveConfirmModal khi dirty Cancel/đóng/back — **cấm** `window.confirm`.
12. Soft-delete API → row biến mất · list refresh · toast lỗi 4xx/5xx — **cấm** `alert()`.
13. Peer deep-link `/so-ts?type=UNDERPASS` optional — **cấm** merge form / bind `road-assets`.
14. Map = none — toolbar map → gis deep-link only · **cấm** invent map canvas.
15. Typography GAP-TYP-01: label **13** · input D14 / M16.

## 4. Screens

### S-LIST — Kind B catalog (A–D + F)

| Zone | UI | AC |
|------|-----|----|
| A Header | Title «Biểu 06 — Hầm chui DS + hộp KT» · back hub | **cấm** slug trên card · **cấm** Thêm mới trên A |
| B Toolbar+filter | SearchTextInput · province · status · road SearchInput · kmPoint · underpassKind · CRUD toolbar | **search must work** · **cấm** nút Tìm riêng · filter → page=1 |
| C Grid | `LinCatalogDataGrid` typed | STT · row menu · kéo cột ON · **cấm** chỉ 3 detail cols |
| D Footer | `LinCatalogListPagination` | 50/100/200/500 |
| F Schema | `LinCatalogUiSchemaEditorModal` | catalogKind=`underpasses` |

**Grid AC (list pack · REQUIRED):**

| # | AC |
|---|-----|
| G1 | Columns bind typed fields (code · road · province · kmPoint · underpassKind · apertureM · pipeCount · lengthM · designLoad · status · …) — không chỉ detail* |
| G2 | Sort/drag column ON theo UiSchema |
| G3 | Row actions: Xem / Sửa / Copy / Xóa / Lịch sử |
| G4 | Empty state VN + CTA Tạo mới |
| G5 | Pagination pageSize ∈ {50,100,200,500} |
| G6 | Soft-delete ẩn row · refresh list |

**Report AC:** N/A (`packKind=list`).

### S-FORM-* — Kind D Slideout (Z1–Z3 · 2col)

| Mode | Behavior |
|------|----------|
| Create | empty · code auto `HC-…` readonly |
| Edit | load detail · save PUT |
| View | `readOnly` · **cấm** disabled xám |
| Copy | clone fields · new code on save |

**Normalized header (19):**  
`code|roadCode|roadName|province|kmPoint|underpassKind|apertureM|pipeCount|bodyStructure|portalStructure|lengthM|designLoad|pavementInside|lighting|drainage|builtYear|status|manageUnit|notes`

| Zone | Fields (controlHint từ analy · PO chốt) |
|------|------------------------------------------|
| Z1 Identity / vị trí | code (ro) · roadCode/roadName SearchInput · province Dropdown · kmPoint Number · underpassKind Dropdown · status Dropdown |
| Z2 Kỹ thuật | apertureM Number* · pipeCount Number · bodyStructure Dropdown · portalStructure Dropdown · lengthM Number* · designLoad Dropdown · pavementInside Dropdown · lighting Dropdown · drainage Dropdown |
| Z3 QL / ghi chú | builtYear Number · manageUnit Text (P1) · notes Textarea · optional side L/R/C · ownerUnit Text |

### S-HUB-ENTRY

Hub card `underpasses` → cùng list typed · title VN · **cấm** hiện slug `csdl-bieu-06` trên card.

### S-PEER-SOTS / S-SKIP-MAP

- Peer: deep-link Sổ TS `so-ts-underpass` / `type=UNDERPASS` only.
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
| Q-ROUTE | **`alias_now`** | mfeStdUrl STATUS đã `/csdl-bieu-06` · đồng bộ peer Biểu 05 |
| Q-PROV | **`keep_static`** P1 | master province = P2 |
| Q-APERTURE | **`number_m`** | khớp DB `ApertureM` · SA typed |
| Q-PIPE | **`optional`** P1 | integer ≥1 khi nhập · không bắt buộc hộp KT P1 |
| Q-LOAD | **`lookup_hl`** | HL93 / H30 / khác LOOKUP_STATIC |
| Q-LIGHT | **`yes_no`** | Dropdown có/không |
| Q-DRAIN | **`yes_no`** | Dropdown có/không |
| Q-KIND | **`hc_ds_hop_kt`** | seed LOOKUP hầm chui DS / hộp KT (CTX) |

**Open Q còn lại:** **none** (autopilot chốt).

## 7. API / bind (cite real-data · không invent)

| Op | Path |
|----|------|
| List | `GET /web-bff/api/v1/asset/csdl-records?resource=underpasses` |
| Detail | `GET /web-bff/api/v1/asset/csdl-records/{id}` |
| Create | `POST /web-bff/api/v1/asset/csdl-records` body `resource=underpasses` + typed |
| Update | `PUT /web-bff/api/v1/asset/csdl-records/{id}` |
| Delete | `DELETE …/{id}` soft |
| road-route | `GET /integration/road-routes/search` |
| org-unit | `GET /integration/org-units/search` — **DEFER P2** UI |

FE reuse hub BASE `/asset/csdl-records`. Typed table `Schema_CsdlBieu6` → **SA/migration**.

## 8. Out of scope / DEFER / OUT

| Item | Scope |
|------|-------|
| GAP-CSDL-ORG-01 SearchInput org-unit | **DEFER P2** (Text P1 OK) |
| GAP-CSDL-XLS-01 Import/export wizard | **OUT** · toolbar stub OK |
| master province | **P2** |
| Map canvas / GIS draw | **OUT** · deep-link only |
| Merge form so-ts-underpass / road-assets | **CẤM** |
| ERP.* / invent infra API | **CẤM** |
| yarn build / e2e / start:std | **chỉ Dev/QA** |

## 9. Handoff Design

1. control-map khớp bảng filter + 19 form fields (PO decisions trên).
2. Prototype list + Slideout 2col · reviewUrl.
3. Typography GAP-TYP-01 · filter-bar 1 hàng wrap · **cấm** nút Tìm riêng.
4. Empty/error copy VN từ real-data §E.
5. **Cấm** re-scan demo (**GAP-DES-DEMO-RESCAN-01**) — dùng control-hint + requirement.

## 10. Handoff SA (next after Design)

- Typed DTO/UiSchema `underpasses` · `Schema_CsdlBieu6` pair migration.
- Widen payload trên `csdl-records` — **giữ prefix**.
- IdCode `HC-yyyyMMdd-nnnn` BE generate.
- LOOKUP seed: underpassKind · designLoad · pavementInside · body/portal · lighting/drainage yes_no.

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-po |
| skillVersion | 2026.08.25.02 |
| schemaVersion | 1 |
| workflowVersion | 2026.09.01.02 |
| rulesVersion | 2026.08.31.2 |
| contentHash | `sha256:ffc5c8381b04dcec3f0376df87187012f34b16bf211a3e3fb7311a8375a386f0` |
| headerFingerprint | `sha256:3b2f5c531f0538509147846466d92090a3c8f5adc05a4be6d1dbb80ad73ff2a7` |
| generatedAt | 2026-09-05T07:20:00.000Z |
| versionGate | ok |
| taskId | task_93f99dd1 |
| packKind | list |
| changeScope | new_page |

---
<!-- Version meta: skillId=agent-po skillVersion=2026.08.25.02 schemaVersion=1 workflowVersion=2026.09.01.02 rulesVersion=2026.08.31.2 versionGate=ok contentHash=sha256:ffc5c8381b04dcec3f0376df87187012f34b16bf211a3e3fb7311a8375a386f0 -->
